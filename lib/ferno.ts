import { AnalyticsBrowser } from '@fernohq/analytics-next';

const projectKey = process.env.NEXT_PUBLIC_FERNO_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_FERNO_API_URL || 'https://data.useferno.com';
const sessionStorageKey = 'ferno_portfolio_session';
const sessionIdleTimeout = 30 * 60 * 1000;

let analytics: ReturnType<typeof AnalyticsBrowser.load> | null = null;
let memorySession: { id: string; lastActivity: number } | null = null;

function getAnalytics() {
  if (!projectKey || typeof window === 'undefined') return null;

  if (!analytics) {
    analytics = AnalyticsBrowser.load(
      {
        writeKey: projectKey,
        cdnSettings: {
          integrations: {
            'Segment.io': { apiKey: projectKey },
          },
        },
      },
      {
        integrations: {
          'Segment.io': {
            apiHost: apiUrl,
            apiPath: '/events',
            authMode: 'bearer',
            deliveryStrategy: {
              strategy: 'batching',
              config: { size: 10, timeout: 5000 },
            },
          },
        },
      },
    );
  }

  return analytics;
}

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

export function trackPageView(pathname: string) {
  const client = getAnalytics();
  if (!client) return;

  void client
    .page('Portfolio', pathname, { path: pathname }, {
      context: { sessionId: getSessionId() },
    })
    .catch(() => undefined);
}

export function trackPortfolioEvent(
  event: string,
  properties?: Record<string, string>,
) {
  const client = getAnalytics();
  if (!client) return;

  void client
    .track(event, properties, {
      context: { sessionId: getSessionId() },
    })
    .catch(() => undefined);
}
