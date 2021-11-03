// copied from https://github.com/primer/react/blob/main/src/hooks/useResizeObserver.ts

import React from 'react';

export function useResizeObserver(callback: () => void) {
  React.useLayoutEffect(() => {
    const observer = new window.ResizeObserver(() => callback());
    observer.observe(document.documentElement);
    return () => {
      observer.disconnect();
    };
  }, [callback]);
}
