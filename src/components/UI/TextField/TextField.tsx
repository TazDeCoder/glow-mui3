/** @jsxRuntime classic */
/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx, ThemeUICSSObject, ThemeUIStyleObject } from '@theme-ui/core';

import { Box, BoxOwnProps, BoxProps } from '../../Utils';
import { Typography } from '../Typography';
import { __internalProps } from '../../shared/utils';
import type { Assign, ForwardRef, ColorTheme } from '../../types';

export interface TextFieldProps
  extends Assign<React.ComponentPropsWithRef<'input'>, BoxOwnProps> {
  /** Color theme used for the component
   * @default 'primary'
   */
  color?: ColorTheme;
  /** Variant style of the component
   * @default 'filled'
   */
  variant?: 'filled' | 'outlined';
  /** Label associated to the component */
  label?: string;
  /** Disabled state of the component
   * @default false
   */
  disabled?: boolean;
}

const __labelCss: ThemeUICSSObject = {
  position: 'relative',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  width: 'min-content',
  height: 56,
  px: 16,
  overflow: 'hidden',
  bg: 'surface.variant',
  borderBottom: '1px solid currentColor',
  borderTopLeftRadius: 'xs',
  borderTopRightRadius: 'xs',
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
};

export const TextField: ForwardRef<HTMLInputElement, TextFieldProps> =
  forwardRef(
    (
      {
        color = 'primary',
        variant = 'filled',
        label,
        disabled = false,
        sx,
        ...props
      },
      ref,
    ) => {
      const style: ThemeUIStyleObject = {
        ...(!disabled
          ? {
            cursor: 'pointer',
            ...(variant === 'filled' && {
              color: 'surface.onVariant',
              bg: 'surface.main',
              '&:focus-within': {
                cursor: 'text',
                caretColor: `${color}.main`,
                borderWidth: 2,
                borderColor: `${color}.main`,
              },
              '& > input:not(:placeholder-shown) ~ span, & > input:focus ~ span':
                  {
                    order: 1,
                    position: 'initial',
                    pt: 2,
                    justifySelf: 'flex-start',
                    alignSelf: 'flex-start',
                    variant: 'body.sm',
                    color: `${color}.main`,
                  },
              '& > input:not(:placeholder-shown), & > input:focus': {
                pb: 2,
              },
            }),
            // TODO: Write styles for outlined variant
            ...(variant === 'outlined' && {}),
          }
          : {
            opacity: 'disabled',
            color: 'surface.onMain',
            bg: 'transparent',
            userSelect: 'none',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: 0.04,
              bg: variant === 'filled' && 'surface.onMain',
            },
            '&:hover::after': {
              content: 'none',
            },
          }),
      };

      return (
        <Box
          as="label"
          sx={{ ...style, ...sx }}
          {...__internalProps({ __css: __labelCss })}
        >
          <Box
            ref={ref}
            as="input"
            placeholder="&nbsp;"
            {...({ disabled, ...props } as BoxProps)}
            {...__internalProps({
              __css: {
                order: 2,
                variant: 'body.lg',
                color: 'surface.onMain',
                bg: 'inherit',
                border: 'none',
                outline: 'none',
                appearance: 'none',
              },
            })}
          />
          {label && (
            <Typography
              as="span"
              color={disabled ? 'surface.onMain' : 'currentColor'}
              {...__internalProps({
                __css: {
                  position: 'absolute',
                  transition: 'emphasized',
                },
              })}
            >
              {label}
            </Typography>
          )}
        </Box>
      );
    },
  );
