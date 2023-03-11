/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */

// Repurposed from https://github.com/mui/material-ui/blob/a804ca80a136ac4e93667e41715d39b5f433db63/packages/mui-material/src/useScrollTrigger/useScrollTrigger.js

import { useRef, useState, useEffect } from 'react';

type Options = {
  disableHysteresis: boolean;
  threshold: 100;
  target?: Window | Element | null;
  getTrigger: () => void;
};

function defaultTrigger(
  store: React.MutableRefObject<number | undefined>,
  options: Omit<Options, 'getTrigger'>,
) {
  const { disableHysteresis = false, threshold = 100, target } = options;
  const previous = store.current;

  if (target) {
    if (target instanceof Window) {
      store.current = target.scrollY;
    }

    if (target instanceof Element) {
      store.current = target.scrollTop;
    }
  }

  if (!disableHysteresis && previous !== undefined) {
    if (store.current !== undefined && store.current < previous) {
      return false;
    }
  }

  return store.current !== undefined ? store.current > threshold : false;
}

const defaultTarget = typeof window !== 'undefined' ? window : null;

export default function useScrollTrigger(options = {}) {
  const {
    getTrigger = defaultTrigger,
    target = defaultTarget,
    ...other
  } = options as Options;

  const store = useRef();
  const [trigger, setTrigger] = useState(() =>
    getTrigger(store, { target, ...other }),
  );

  useEffect(() => {
    if (!target) {
      return;
    }

    const handleScroll = () => {
      setTrigger(getTrigger(store, { target, ...other }));
    };

    handleScroll(); // Re-evaluate trigger when dependencies change
    target.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      target.removeEventListener('scroll', handleScroll);
    };
    // See Option 3. https://github.com/facebook/react/issues/14476#issuecomment-471199055
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, getTrigger, JSON.stringify(other)]);

  return trigger;
}
