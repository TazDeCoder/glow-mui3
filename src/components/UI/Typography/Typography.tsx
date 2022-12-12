/** @jsxRuntime classic */
/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@theme-ui/core';

import { Box, BoxProps } from '../../Utils';
import type { ForwardRef, TextVariant, TextSize } from '../../types';

export interface TypographyProps extends BoxProps {
  /** Text variant of the component
   * @default 'body'
   */
  variant?: TextVariant;
  /** Text size of the component
   * @default 'md'
   */
  size?: TextSize;
}

export const Typography: ForwardRef<HTMLParagraphElement, TypographyProps> =
  forwardRef(
    (
      {
        as,
        variant = 'body',
        size = 'md',
        color = 'primary.main',
        sx,
        ...props
      }: TypographyProps,
      ref,
    ) => {
      let Component: React.ElementType = 'p';

      if (!as) {
        if (variant === 'headline') {
          if (size === 'sm') {
            Component = 'h3';
          }
        }
        if (variant === 'label') {
          Component = 'span';
        }
      }

      return (
        <Box
          ref={ref}
          as={Component}
          color={color}
          variant={`${variant}.${size}`}
          sx={sx}
          {...props}
        />
      );
    },
  );
