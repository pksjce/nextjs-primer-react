// copied from https://github.com/primer/react/blob/main/src/hooks/useAnchoredPosition.ts

import React from 'react';
import {
  PositionSettings,
  getAnchoredPosition,
  AnchorPosition
} from '@primer/components/lib/behaviors/anchoredPosition';
import { useProvidedRefOrCreate } from '@primer/components/lib/hooks/useProvidedRefOrCreate';
import { useResizeObserver } from './useResizeObserver.ts';

export interface AnchoredPositionHookSettings
  extends Partial<PositionSettings> {
  floatingElementRef?: React.RefObject<Element>;
  anchorElementRef?: React.RefObject<Element>;
}

/**
 * Calculates the top and left values for an absolutely-positioned floating element
 * to be anchored to some anchor element. Returns refs for the floating element
 * and the anchor element, along with the position.
 * @param settings Settings for calculating the anchored position.
 * @param dependencies Dependencies to determine when to re-calculate the position.
 * @returns An object of {top: number, left: number} to absolutely-position the
 * floating element.
 */
export function useAnchoredPosition(
  settings?: AnchoredPositionHookSettings,
  dependencies: React.DependencyList = []
): {
  floatingElementRef: React.RefObject<Element>;
  anchorElementRef: React.RefObject<Element>;
  position: AnchorPosition | undefined;
} {
  const floatingElementRef = useProvidedRefOrCreate(
    settings?.floatingElementRef
  );
  const anchorElementRef = useProvidedRefOrCreate(settings?.anchorElementRef);
  const [position, setPosition] = React.useState<AnchorPosition | undefined>(
    undefined
  );

  const updatePosition = React.useCallback(
    () => {
      if (
        floatingElementRef.current instanceof Element &&
        anchorElementRef.current instanceof Element
      ) {
        setPosition(
          getAnchoredPosition(
            floatingElementRef.current,
            anchorElementRef.current,
            settings
          )
        );
      } else {
        setPosition(undefined);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [floatingElementRef, anchorElementRef, ...dependencies]
  );

  React.useEffect(updatePosition, [updatePosition]);

  useResizeObserver(updatePosition);

  return {
    floatingElementRef,
    anchorElementRef,
    position
  };
}
