import type { ThemeUICSSObject } from '@theme-ui/css';

export function pickSystemProps<T, P extends keyof T>(
  props: T,
  systemProps: readonly string[],
) {
  const res: Partial<Pick<T, P>> = {};

  for (let i = 0; i < systemProps.length; i += 1) {
    const key = systemProps[i];
    // ts(2590): union type too complex
    (res as any)[key] = (props as any)[key];
  }

  return res;
}

/** @internal */
export function __internalProps(props: __ThemeUIComponentsInternalProps) {
  return props as {};
}

/**
 * @internal Props used by Theme UI Components not intended for user code.
 */
export interface __ThemeUIComponentsInternalProps {
  __css?: ThemeUICSSObject;
}
