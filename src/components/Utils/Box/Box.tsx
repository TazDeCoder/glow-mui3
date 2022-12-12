/** @jsxRuntime classic */
/** @jsx jsx */

import { forwardRef } from 'react';
import { useTheme, CSSObject, ArrayInterpolation } from '@emotion/react';
import { jsx, ThemeUICSSProperties, ThemeUIStyleObject } from '@theme-ui/core';
import { css, get } from '@theme-ui/css';

import type { Assign } from '../../types';

const boxSystemProps = [
  // system props inherited from styled-system (https://styled-system.com/table)
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
  variant?: string;
  /** System style prop to extend component's styles */
  sx?: ThemeUIStyleObject;
  // Content of the component
  children?: React.ReactNode;
}

export interface BoxProps
  extends Omit<
  Assign<React.ComponentPropsWithRef<'div'>, BoxOwnProps>,
  'ref'
  > {}

const pickSystemProps = (props: BoxOwnProps) => {
  const res: Partial<Pick<BoxOwnProps, BoxSystemPropsKeys>> = {};

  for (let i = 0; i < boxSystemProps.length; i += 1) {
    const key = boxSystemProps[i];
    // ts(2590): union type too complex
    (res as any)[key] = props[key];
  }

  return res;
};

const baseStyles: CSSObject = {
  boxSizing: 'border-box',
  margin: 0,
  minWidth: 0,
};

export const Box = forwardRef<any, BoxProps>(
  ({ as: Component = 'div', variant, sx, ...props }: BoxProps, ref) => {
    const theme = useTheme();

    const variantInTheme = get(theme, variant);
    const variantStyles = variantInTheme && css(variantInTheme)(theme);
    const sxPropStyles = css(sx)(theme);
    const systemPropsStyles = css(pickSystemProps(props))(theme);

    const style: ArrayInterpolation<unknown> = [
      baseStyles,
      variantStyles,
      sxPropStyles,
      systemPropsStyles,
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
