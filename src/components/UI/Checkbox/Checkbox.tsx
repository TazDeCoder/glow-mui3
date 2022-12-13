/** @jsxRuntime classic */
/** @jsx jsx */

import { forwardRef, useState } from 'react';
import { jsx, ThemeUICSSObject, ThemeUIStyleObject } from '@theme-ui/core';
import { hideVisually } from 'polished';

import { Box, BoxProps, BoxOwnProps, SVG, SVGProps, Flex } from '../../Utils';
import { Typography } from '../Typography';
import { __internalProps } from '../../shared/utils';
import type { Assign, ForwardRef, ColorTheme } from '../../types';

// https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Acheck%3AFILL%400%3Bwght%40400%3BGRAD%40200%3Bopsz%4048
const CheckboxChecked: React.FC<SVGProps> = (props: SVGProps) => (
  <SVG {...props}>
    <path d="m9.55 18.55-6.3-6.3 1.875-1.875L9.55 14.8l9.375-9.375L20.8 7.3Z" />
  </SVG>
);

export interface CheckboxProps
  extends Assign<React.ComponentPropsWithRef<'input'>, BoxOwnProps> {
  /** Color theme used for the component
   * @default 'primary'
   */
  color?: ColorTheme;
  /** Label associated to the component */
  label?: string;
  /** Disabled state of the component
   * @default false
   */
  disabled?: boolean;
}

const __css: ThemeUICSSObject = {
  position: 'relative',
  display: 'inline-block',
  width: 18,
  height: 18,
  overflow: 'hidden',
  border: '2px solid currentColor',
  borderRadius: 2,
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

export const Checkbox: ForwardRef<HTMLInputElement, CheckboxProps> = forwardRef(
  (
    {
      color = 'primary',
      label,
      defaultChecked = false,
      disabled = false,
      sx,
      ...props
    },
    ref,
  ) => {
    const [checked, setChecked] = useState(defaultChecked);

    const toggleHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
      if (!disabled) {
        setChecked(evt.target.checked);
      }
    };

    const style: ThemeUIStyleObject = {
      ...(!disabled
        ? {
          cursor: 'pointer',
          ...(checked
            ? {
              bg: `${color}.main`,
              border: 'none',
            }
            : {
              borderColor:
                    color === 'primary' || color === 'secondary'
                      ? 'surface.onMain'
                      : `${color}.main`,
              transition: 'unset',
            }),
        }
        : {
          opacity: 'disabled',
          bg: checked && 'surface.onMain',
          borderColor: 'surface.onMain',
          userSelect: 'none',
          ...(checked && {
            border: 'none',
          }),
          '&:hover::after, &:focus::after': {
            content: 'none',
          },
        }),
    };

    return (
      <Box width="min-content">
        <Flex as="label" alignItems="center" gap={12} sx={sx}>
          <Box display="inline-block" verticalAlign="top">
            <Box
              ref={ref}
              as="input"
              type="checkbox"
              checked={checked}
              onChange={toggleHandler}
              {...props}
              {...({ disabled, ...props } as Omit<
              BoxProps,
              'checked' | 'type'
              >)}
              {...__internalProps({
                __css: {
                  ...hideVisually(),
                },
              })}
            />
            <Box sx={style} {...__internalProps({ __css })}>
              {checked && (
                <CheckboxChecked
                  size={18}
                  viewBox="0 0 24 24"
                  color={disabled ? 'surface.main' : `${color}.onMain`}
                />
              )}
            </Box>
          </Box>
          {label && (
            <Typography variant="label" color="bg.onMain">
              {label}
            </Typography>
          )}
        </Flex>
      </Box>
    );
  },
);
