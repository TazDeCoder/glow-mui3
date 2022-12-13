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
  /** Disabled state of the component
   * @default false
   */
  disabled?: boolean;
}

const __css: ThemeUICSSObject = {
  position: 'relative',
  minWidth: 48,
  height: 40,
  px: 24,
  overflow: 'hidden',
  border: '1px solid currentColor',
  borderRadius: 'full',
  transition: 'standard',
  '&:hover::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    bg: 'action.hover',
  },
  '&:focus::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    bg: 'action.active',
  },
};

export const Button: ForwardRef<HTMLButtonElement, ButtonProps> = forwardRef(
  (
    {
      children,
      color = 'primary',
      variant = 'filled',
      type = 'button',
      disabled = false,
      sx,
      ...props
    }: ButtonProps,
    ref,
  ) => {
    const style: ThemeUIStyleObject = {
      ...(!disabled
        ? {
          cursor: 'pointer',
          ...(variant === 'filled' && {
            color: `${color}.container`,
            bg: `${color}.main`,
            transition: 'emphasized',
            '&:hover': {
              boxShadow: 'sm',
            },
          }),
          ...(variant === 'outlined' && {
            color: `${color}.main`,
            bg: 'transparent',
            borderColor: 'outline.main',
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
        }
        : {
          opacity: 'disabled',
          color: 'surface.onMain',
          bg: 'transparent',
          borderColor:
              variant === 'outlined' ? 'surface.onMain' : 'transparent',
          userSelect: 'none',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.12,
            bg: variant === 'filled' && 'surface.onMain',
          },
          '&:hover::after, &:focus::after': {
            content: 'none',
          },
        }),
    };

    return (
      <Box
        ref={ref}
        as="button"
        sx={{ ...style, ...sx }}
        {...({ type, disabled, ...props } as BoxProps)}
        {...__internalProps({ __css })}
      >
        <Typography
          variant="label"
          color={
            disabled
              ? 'surface.onMain'
              : variant === 'filled'
                ? `${color}.onMain`
                : `${color}.main`
          }
        >
          {children}
        </Typography>
      </Box>
    );
  },
);
