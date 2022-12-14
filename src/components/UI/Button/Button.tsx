/** @jsxRuntime classic */
/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx, ThemeUICSSObject, ThemeUIStyleObject } from '@theme-ui/core';

import { Box as _Box, BoxProps, BoxOwnProps } from '../../Utils';
import { Typography } from '../Typography';
import { __internalProps } from '../../shared/utils';
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

const __css: ThemeUICSSObject = {
  position: 'relative',
  minWidth: 48,
  height: 40,
  px: 24,
  border: '1px solid currentColor',
  borderRadius: 'full',
  cursor: 'pointer',
  '&:hover::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    bg: 'action.hover',
    borderRadius: 'inherit',
  },
  '&:focus::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    bg: 'action.active',
    borderRadius: 'inherit',
  },
};

export const Button: ForwardRef<HTMLButtonElement, ButtonProps> = forwardRef(
  (
    {
      children,
      color = 'primary',
      variant = 'filled',
      type = 'button',
      sx,
      ...props
    }: ButtonProps,
    ref,
  ) => {
    const style: ThemeUIStyleObject = {
      ...(variant === 'filled' && {
        color: `${color}.container`,
        bg: `${color}.main`,
        transition: 'emphasized',
        '&:hover': {
          boxShadow: 'sm',
        },
      }),
      ...(variant === 'outlined' && {
        bg: 'transparent',
        borderColor: 'outline.main',
        transition: 'standard',
        color: `${color}.main`,
        '&:focus': {
          borderColor: `${color}.main`,
        },
        '&:active': {
          borderColor: 'outline.main',
        },
      }),
      ...(variant === 'text' && {
        bg: 'transparent',
        borderColor: 'transparent',
      }),
    };

    return (
      <Box
        ref={ref}
        as="button"
        sx={{ ...style, ...sx }}
        {...({ type, ...props } as BoxProps)}
        {...__internalProps({ __css })}
      >
        <Typography
          variant="label"
          color={variant === 'filled' ? `${color}.onMain` : `${color}.main`}
        >
          {children}
        </Typography>
      </Box>
    );
  },
);
