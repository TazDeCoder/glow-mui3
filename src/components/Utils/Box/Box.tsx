/** @jsxRuntime classic */
/** @jsx jsx */

// Repurposed from theme-ui
// https://github.com/system-ui/theme-ui/blob/10b33dee2f188e440600e02a4f2bf32d402588d0/packages/components/src/Box.tsx

import { forwardRef } from 'react';
import {
  jsx,
  useTheme,
  CSSObject,
  ArrayInterpolation,
  Interpolation,
} from '@emotion/react';
import {
  css,
  get,
  ThemeUICSSProperties,
  ThemeUIStyleObject,
} from '@theme-ui/css';

import {
  pickSystemProps,
  __ThemeUIComponentsInternalProps,
} from '../../shared/utils';
import type { Assign, ForwardRef } from '../../types';

const boxSystemProps = [
  // system props inherited from styled-system (https://styled-system.com/table)
  // layout props
  'width',
  'height',
  'minWidth',
  'maxWidth',
  'minHeight',
  'maxHeight',
  'size',
  'display',
  'verticalAlign',
  'overflow',
  'overflowX',
  'overflowY',
  // scale props
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'marginX',
  'marginY',
  'm',
  'mt',
  'mr',
  'mb',
  'ml',
  'mx',
  'my',
  'padding',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
  'paddingX',
  'paddingY',
  'p',
  'pt',
  'pr',
  'pb',
  'pl',
  'px',
  'py',
  // color props
  'color',
  'backgroundColor',
  'bg',
  'opacity',
] as const;

type BoxSystemPropsKeys = typeof boxSystemProps[number];
type BoxSystemProps = Pick<ThemeUICSSProperties, BoxSystemPropsKeys>;

export interface BoxOwnProps extends BoxSystemProps {
  /** Componenent element to be rendered
   * @default 'div'
   */
  as?: React.ElementType;
  /** Variant to be used for the component */
  variant?: string;
  css?: Interpolation<any>;
  sx?: ThemeUIStyleObject;
}

export interface BoxProps
  extends Omit<
  Assign<React.ComponentPropsWithRef<'div'>, BoxOwnProps>,
  'ref'
  > {}

const baseStyles: CSSObject = {
  boxSizing: 'border-box',
  margin: 0,
  minWidth: 0,
};

export const Box: ForwardRef<any, BoxProps & __ThemeUIComponentsInternalProps> =
  forwardRef(
    (
      { __css, as: Component = 'div', variant, css: cssProp, sx, ...props },
      ref,
    ) => {
      const theme = useTheme();

      const __cssStyles = css(__css)(theme);

      const variantInTheme = get(theme, variant);
      const variantStyles = variantInTheme && css(variantInTheme)(theme);

      const sxPropStyles = css(sx)(theme);

      const systemPropsStyles = css(
        pickSystemProps<BoxOwnProps, BoxSystemPropsKeys>(props, boxSystemProps),
      )(theme);

      const style: ArrayInterpolation<unknown> = [
        baseStyles,
        __cssStyles,
        variantStyles,
        sxPropStyles,
        systemPropsStyles,
        cssProp,
      ];

      const rest: Partial<Omit<BoxProps, BoxSystemPropsKeys>> = { ...props };

      for (let i = 0; i < boxSystemProps.length; i += 1) {
        // Remove all system props from props as no longer needed
        boxSystemProps.forEach((name) => {
          delete (rest as Record<string, unknown>)[name];
        });
      }

      return <Component ref={ref} css={style} {...rest} />;
    },
  );
