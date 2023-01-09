/** @jsxRuntime classic */
/** @jsx jsx */

import { forwardRef } from 'react';
import { keyframes } from '@emotion/react';
import { jsx, ThemeUICSSObject, ThemeUIStyleObject } from '@theme-ui/core';

import { Box, BoxOwnProps, BoxProps, Flex } from '../../Utils';
import { Typography } from '../Typography';
import { __internalProps } from '../../shared/utils';
import type { Assign, ForwardRef, ColorTheme } from '../../types';

export interface LinearProgressProps
  extends Assign<React.ComponentPropsWithRef<'progress'>, BoxOwnProps> {
  /** Color theme used for the component
   * @default 'primary'
   */
  color?: ColorTheme;
  /** Variant style of the component
   * @default 'indeterminate'
   */
  variant?: 'indeterminate' | 'determinate';
  /** Value of the progress indicator */
  value?: number;
  /** Label associated to the component */
  label?: string;
}

const indeterminate1Keyframe = keyframes({
  '0%': {
    width: '100%',
    left: '-100%',
  },
  '60%': {
    width: '0%',
    left: '100%',
  },
  '100%': {
    width: '0%',
    left: '100%',
  },
});

// TODO: Add follow-up keyframe of first
// const indeterminate2Keyframe = keyframes({});

const __progressCss: ThemeUICSSObject = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  transformOrigin: 'left',
  width: '100%',
  border: 'none',
  transition: 'standard',
};

export const LinearProgress: ForwardRef<HTMLDivElement, LinearProgressProps> =
  forwardRef(
    (
      {
        color = 'primary',
        variant = 'indeterminate',
        value,
        label,
        sx,
        ...props
      },
      ref,
    ) => {
      const style: ThemeUIStyleObject = {
        ...(variant === 'determinate' && {
          width: `${value}%`,
          transition: 'emphasized',
        }),
        '&::-webkit-progress-bar': {
          bg: `${color}.main`,
        },
        '&::-moz-progress-bar': {
          bg: `${color}.main`,
        },
      };

      return (
        <Flex flexDirection="column" gap={2} sx={sx}>
          <Box
            {...__internalProps({
              __css: {
                position: 'relative',
                height: 4,
                overflow: 'hidden',
                bg: 'surface.variant',
              },
            })}
          >
            {variant === 'indeterminate' ? (
              <Box
                ref={ref}
                as="progress"
                aria-label="progress-indeterminate"
                sx={{
                  ...style,
                  animation: `${indeterminate1Keyframe} 3.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`,
                }}
                {...(props as BoxProps)}
                {...__internalProps({ __css: __progressCss })}
              />
            ) : (
              <Box
                ref={ref}
                as="progress"
                aria-label="progress-determinate"
                sx={style}
                {...(props as BoxProps)}
                {...__internalProps({ __css: __progressCss })}
              />
            )}
          </Box>
          {label && (
            <Typography variant="label" color={`${color}.main`}>
              {label}
            </Typography>
          )}
        </Flex>
      );
    },
  );
