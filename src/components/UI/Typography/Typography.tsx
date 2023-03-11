/** @jsxRuntime classic */
/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@theme-ui/core';

import { Box as _Box, BoxOwnProps, BoxProps } from '../../Utils';
import type { Assign, ForwardRef } from '../../types';

const Box = _Box as React.ForwardRefExoticComponent<
BoxProps & React.RefAttributes<HTMLParagraphElement>
>;

export interface TypographyProps
  extends Assign<React.ComponentPropsWithRef<'p'>, BoxOwnProps> {
  /** Text variant of the component
   * @default 'body'
   */
  variant?: 'headline' | 'title' | 'body' | 'label';
  /** Text size of the component
   * @default 'lg'
   */
  size?: 'sm' | 'md' | 'lg';
}

export const Typography: ForwardRef<HTMLParagraphElement, TypographyProps> =
  forwardRef(
    (
      {
        as,
        variant = 'body',
        size = 'lg',
        color = 'primary.main',
        sx,
        ...props
      }: TypographyProps,
      ref,
    ) => {
      let Component: React.ElementType = as || 'p';

      if (!as) {
        if (variant === 'headline' || variant === 'title') {
          if (size === 'lg') {
            Component = 'h1';
          }

          if (size === 'md') {
            Component = 'h2';
          }

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
          variant={`${variant}.${size}`}
          color={color}
          sx={sx}
          {...(props as BoxProps)}
        />
      );
    },
  );
