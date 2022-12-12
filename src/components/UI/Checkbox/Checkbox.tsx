/** @jsxRuntime classic */
/** @jsx jsx */

import { forwardRef, useState } from 'react';
import { jsx, ThemeUIStyleObject } from '@theme-ui/core';
import { hideVisually } from 'polished';

import { Box, BoxOwnProps } from '../../Utils';
import { Typography } from '../Typography';

import { baseStyles, checkedStyles, labelStyles, iconStyles } from './styles';
import type { Assign, ForwardRef, ColorTheme } from '../../types';

export interface CheckboxProps
  extends Assign<React.ComponentPropsWithRef<'input'>, BoxOwnProps> {
  /** Color theme used for the component
   * @default 'primary'
   */
  color?: ColorTheme;
  /** Label associated to the component */
  label?: string;
}

export const Checkbox: ForwardRef<HTMLInputElement, CheckboxProps> = forwardRef(
  ({ color = 'primary', label, defaultChecked = false, sx, ...props }, ref) => {
    const [checked, setChecked] = useState(defaultChecked);

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(evt.target.checked);
    };

    const stateStyles: ThemeUIStyleObject = {
      ...(checked && {
        ...checkedStyles,
        bg: `${color}.main`,
        borderColor: `${color}.main`,
      }),
      ...(!checked && {
        borderColor:
          color === 'primary' || color === 'secondary'
            ? 'surface.onMain'
            : `${color}.main`,
      }),
    };

    return (
      <Box sx={{ width: 'min-content' }}>
        <Box
          as="label"
          sx={{
            ...labelStyles,
            ...sx,
          }}
        >
          <Box
            sx={{
              display: 'inline-block',
              cursor: 'pointer',
              verticalAlign: 'top',
            }}
          >
            <Box
              ref={ref}
              as="input"
              type="checkbox"
              checked={checked}
              onChange={handleChange}
              sx={{ ...hideVisually() }}
              {...props}
            />
            <Box
              sx={{
                ...baseStyles,
                ...stateStyles,
              }}
            >
              <Box
                as="svg"
                sx={{
                  ...iconStyles,
                  stroke: checked && `${color}.onMain`,
                  visibility: checked ? 'visible' : 'hidden',
                }}
                {...({ viewBox: '0 0 24 24' } as {})}
              >
                <polyline points="20 6 9 17 4 12" />
              </Box>
            </Box>
          </Box>
          {label && (
            <Typography variant="label" size="lg" color="bg.onMain">
              {label}
            </Typography>
          )}
        </Box>
      </Box>
    );
  },
);
