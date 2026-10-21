'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { trackPageView } from '@/lib/ferno';

export default function FernoPageTracker() {
  const pathname = usePathname();
  const trackedPath = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname || trackedPath.current === pathname) return;
    trackedPath.current = pathname;
    trackPageView(pathname);
  }, [pathname]);

  return null;
}
