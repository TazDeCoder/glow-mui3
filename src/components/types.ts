// Common types
export type ColorTheme =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'error'
  | 'warning'
  | 'success';

// Utility types
export type Assign<T, U> = {
  [P in keyof (T & U)]: P extends keyof T
    ? T[P]
    : P extends keyof U
      ? U[P]
      : never;
};

export type ForwardRef<T, P> = React.ForwardRefExoticComponent<
React.PropsWithoutRef<P> & React.RefAttributes<T>
>;
