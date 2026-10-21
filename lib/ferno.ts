import { AnalyticsBrowser, type Context, type Plugin } from '@fernohq/analytics-next';

const projectKey = process.env.NEXT_PUBLIC_FERNO_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_FERNO_API_URL || 'https://data.useferno.com';
const sessionStorageKey = 'ferno_portfolio_session';
const sessionIdleTimeout = 30 * 60 * 1000;

let analytics: ReturnType<typeof AnalyticsBrowser.load> | null = null;
let memorySession: { id: string; lastActivity: number } | null = null;

function getSessionId() {
  const now = Date.now();

  try {
    const stored = window.sessionStorage.getItem(sessionStorageKey);
    const session = stored ? (JSON.parse(stored) as typeof memorySession) : null;

    if (session?.id && now - session.lastActivity < sessionIdleTimeout) {
      session.lastActivity = now;
      window.sessionStorage.setItem(sessionStorageKey, JSON.stringify(session));
      return session.id;
    }

    const nextSession = { id: crypto.randomUUID(), lastActivity: now };
    window.sessionStorage.setItem(sessionStorageKey, JSON.stringify(nextSession));
    return nextSession.id;
  } catch {
    if (!memorySession || now - memorySession.lastActivity >= sessionIdleTimeout) {
      memorySession = { id: crypto.randomUUID(), lastActivity: now };
    } else {
      memorySession.lastActivity = now;
    }
    return memorySession.id;
  }
}

const campaignParameters = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
];
const campaignFields = new Set(['source', 'medium', 'name', 'content', 'term']);

function safeSearch(value: string) {
  const original = new URLSearchParams(value);
  const safe = new URLSearchParams();
  for (const parameter of campaignParameters) {
    const campaign = original.get(parameter);
    if (campaign && campaign.length <= 120 && !/[<>@\r\n]/.test(campaign)) {
      safe.set(parameter, campaign);
    }
  }
  return safe.toString() ? `?${safe.toString()}` : '';
}

function safeURL(value: string | undefined) {
  if (!value) return undefined;

  try {
    const original = new URL(value, window.location.origin);
    if (!['http:', 'https:'].includes(original.protocol)) return undefined;

    const safe = new URL(original.origin + original.pathname);
    safe.search = safeSearch(original.search);
    return safe.toString();
  } catch {
    return undefined;
  }
}

function enrichEvent(ctx: Context): Context {
  const event = ctx.event;
  const context = (event.context ??= {});
  context.sessionId = getSessionId();
  if (context.page) {
    const page = context.page;
    page.url = safeURL(page.url);
    page.search = page.url ? new URL(page.url).search : undefined;
    page.referrer = safeURL(page.referrer);
  }
  if (context.referrer) {
    context.referrer.url = safeURL(context.referrer.url);
    context.referrer.link = safeURL(context.referrer.link);
  }
  if (context.campaign) {
    for (const [key, value] of Object.entries(context.campaign)) {
      if (
        !campaignFields.has(key) ||
        typeof value !== 'string' ||
        value.length > 120 ||
        /[<>@\r\n]/.test(value)
      ) {
        delete context.campaign[key];
      }
    }
  }

  if (event.properties) {
    const properties = event.properties;
    if (typeof properties.url === 'string') properties.url = safeURL(properties.url);
    if (typeof properties.search === 'string') properties.search = safeSearch(properties.search);
    if (typeof properties.referrer === 'string') {
      properties.referrer = safeURL(properties.referrer);
    }
    if (Array.isArray(properties.points)) {
      for (const point of properties.points) {
        if (point && typeof point === 'object' && typeof point.url === 'string') {
          point.url = safeURL(point.url);
        }
      }
    }
  }

  return ctx;
}

const sessionPlugin: Plugin = {
  name: 'Portfolio session and URL safety',
  type: 'before',
  version: '1.0.0',
  isLoaded: () => true,
  load: async () => undefined,
  page: enrichEvent,
  track: enrichEvent,
};

function getAnalytics() {
  if (!projectKey || typeof window === 'undefined') return null;

  if (!analytics) {
    analytics = AnalyticsBrowser.load(
      {
        writeKey: projectKey,
        cdnSettings: {
          integrations: {
            'Segment.io': {
              apiKey: projectKey,
              apiHost: apiUrl,
              apiPath: '/events',
              authMode: 'bearer',
              retryQueue: true,
            },
          },
        },
        plugins: [sessionPlugin],
      },
      {
        instrumentation: {
          autocapture: true,
          rageClicks: true,
          deadClicks: true,
          navigation: { enabled: true, hash: false },
          heatmaps: { enabled: true, flushInterval: 5000, maxPoints: 25 },
        },
        integrations: {
          'Segment.io': {
            deliveryStrategy: {
              strategy: 'batching',
              config: { size: 5, timeout: 2000, keepalive: true },
            },
          },
        },
      },
    );
  }

  return analytics;
}

function reportFailure() {
  if (process.env.NODE_ENV === 'development') {
    console.warn('Ferno analytics event could not be sent.');
  }
}

export function trackPageView(pathname: string) {
  const client = getAnalytics();
  if (!client) return;

  void client.page('Portfolio', pathname, { path: pathname }).catch(reportFailure);
}

export function trackPortfolioEvent(
  event: string,
  properties?: Record<string, string>,
) {
  const client = getAnalytics();
  if (!client) return;

  void client.track(event, properties).catch(reportFailure);
}
