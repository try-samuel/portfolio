'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { trackPageView, trackPortfolioEvent } from '@/lib/ferno';

export default function FernoPageTracker() {
  const pathname = usePathname();
  const trackedPath = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname || trackedPath.current === pathname) return;
    trackedPath.current = pathname;
    trackPageView(pathname);
  }, [pathname]);

  useEffect(() => {
    const trackLink = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest('a[href]');
      if (!(link instanceof HTMLAnchorElement)) return;

      const destination = new URL(link.href);
      if (destination.protocol === 'mailto:' || destination.protocol === 'tel:') {
        trackPortfolioEvent('Contact Method Opened', {
          method: destination.protocol.slice(0, -1),
          source: window.location.pathname,
        });
      } else if (
        ['http:', 'https:'].includes(destination.protocol) &&
        destination.origin !== window.location.origin
      ) {
        trackPortfolioEvent('Outbound Link Opened', {
          destination: destination.hostname,
          source: window.location.pathname,
        });
      }
    };

    document.addEventListener('click', trackLink);
    return () => document.removeEventListener('click', trackLink);
  }, []);

  return null;
}
