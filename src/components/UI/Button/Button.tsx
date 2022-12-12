/** @jsxRuntime classic */
/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx, ThemeUIStyleObject } from '@theme-ui/core';

import { Box as _Box, BoxProps, BoxOwnProps } from '../../Utils';
import { Typography } from '../Typography';

import {
  baseStyles,
  interactionStyles,
  filledStyles,
  outlinedStyles,
  textStyles,
} from './styles';

import type { Assign, ForwardRef, ColorTheme } from '../../types';

const Box = _Box as React.ForwardRefExoticComponent<
BoxProps & React.RefAttributes<HTMLButtonElement>
>;

export interface ButtonProps
  extends Assign<React.ComponentPropsWithRef<'button'>, BoxOwnProps> {
  /** Color theme used for the component
   * @default 'primary'
   */
  color?: ColorTheme;
  /** Variant style of the component
   * @default 'filled'
   */
  variant?: 'filled' | 'outlined' | 'text';
}

export const Button: ForwardRef<HTMLButtonElement, ButtonProps> = forwardRef(
  (
    {
      children,
      color = 'primary',
      variant = 'filled',
      sx,
      ...props
    }: ButtonProps,
    ref,
  ) => {
    const variantStyles: ThemeUIStyleObject = {
      ...(variant === 'filled' && {
        ...filledStyles,
        color: `${color}.container`,
        bg: `${color}.main`,
      }),
      ...(variant === 'outlined' && {
        ...outlinedStyles,
        color: `${color}.main`,
        '&:focus': {
          borderColor: `${color}.main`,
        },
      }),
      ...(variant === 'text' && {
        ...textStyles,
      }),
    };

    return (
      <Box
        ref={ref}
        variant={`buttons.${variant}`}
        as="button"
        sx={{
          ...baseStyles,
          ...interactionStyles,
          ...variantStyles,
          ...sx,
        }}
        {...({ type: 'button', ...props } as BoxProps)}
      >
        <Typography
          variant="label"
          size="lg"
          color={variant === 'filled' ? `${color}.onMain` : `${color}.main`}
        >
          {children}
        </Typography>
      </Box>
    );
  },
);
