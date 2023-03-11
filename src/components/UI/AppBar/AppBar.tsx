/** @jsxRuntime classic */
/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx, ThemeUIStyleObject } from '@theme-ui/core';

import { Box, BoxOwnProps, BoxProps, Flex, SVGProps } from '../../Utils';
import type { Assign, ForwardRef } from '../../types';
import { Typography } from '../Typography';
import { useScrollTrigger } from '../../../hooks';

export interface AppBarProps
  extends Assign<React.ComponentPropsWithRef<'header'>, BoxOwnProps> {
  /** Component's headline */
  title: string;
  /** Component's leading navigation icon */
  leadIcon?: React.ComponentType<SVGProps>;
  /** Component's trail icons */
  trailIcons?: React.ElementType<SVGProps>[];
  /** Variant style of the component
   * @default 'center'
   */
  variant?: 'center' | 'small' | 'medium' | 'large';
}

export const AppBar: ForwardRef<HTMLHeadElement, AppBarProps> = forwardRef(
  (
    { title, leadIcon: LeadIcon, trailIcons, variant = 'center', sx, ...props },
    ref,
  ) => {
    const scrollTrigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    const style: ThemeUIStyleObject = {
      position: 'relative',
      display: 'grid',
      minHeight: 64,
      px: 3,
      color: 'surface.onMain',
      bg: 'surface.main',
      boxShadow: scrollTrigger ? 'md' : 'unset',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
        bg: 'surface.tint',
        opacity: 'tint',
      },
      ...(variant === 'center' && {
        gridTemplateColumns: 'auto 1fr auto',
        placeItems: 'center',
      }),
      ...(variant === 'small' && {
        gridTemplateColumns: 'auto 1fr auto',
        alignItems: 'center',
        width: 'max-content',
      }),
      ...(variant === 'medium' && {
        gridTemplate: 'repeat(2, minmax(0, 1fr)) / auto 1fr',
        alignItems: 'center',
        py: 20,
        width: 'max-content',
      }),
      ...(variant === 'large' && {
        gridTemplate: 'repeat(2, minmax(0, 1fr)) / auto 1fr',
        alignItems: 'center',
        pt: 20,
        pb: 28,
        width: 'max-content',
      }),
      ...sx,
    };

    return (
      <Box ref={ref} as="header" sx={style} {...(props as BoxProps)}>
        {LeadIcon && <LeadIcon viewBox="0 96 960 960" color="surface.onMain" />}
        <Typography
          sx={{
            width: 'max-content',
            color: 'surface.onMain',
            ...((variant === 'center' || variant === 'small') && {
              ml: variant === 'center' ? 24 : 16,
              mr: 24,
            }),
            ...((variant === 'medium' || variant === 'large') && {
              gridArea: '2 / 1',
            }),
          }}
          variant={
            variant === 'center' || variant === 'small' ? 'title' : 'headline'
          }
          size={variant === 'large' ? 'md' : variant === 'medium' ? 'sm' : 'lg'}
        >
          {title}
        </Typography>
        {trailIcons && (
          <Flex gap={24}>
            {trailIcons.map((Icon) => (
              <Icon viewBox="0 96 960 960" color="surface.onVariant" />
            ))}
          </Flex>
        )}
      </Box>
    );
  },
);
