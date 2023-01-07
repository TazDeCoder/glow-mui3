/** @jsxRuntime classic */
/** @jsx jsx */

import { forwardRef, useState } from 'react';
import { jsx, ThemeUICSSObject, ThemeUIStyleObject } from '@theme-ui/core';

import { Box, BoxProps, BoxOwnProps } from '../../Utils';
import { Typography } from '../Typography';
import { __internalProps } from '../../shared/utils';
import type { Assign, ForwardRef } from '../../types';

export interface ListItemProps
  extends Assign<React.ComponentPropsWithRef<'li'>, BoxOwnProps> {
  /** Disabled state of the component
   * @default false
   */
  disabled?: boolean;
}

const __itemCss: ThemeUICSSObject = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height: 56,
  pr: 24,
  py: 2,
  bg: 'surface.main',
  borderRadius: 'none',
  '&:nth-last-of-type(n + 1)': {
    pl: 3,
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

export const ListItem: ForwardRef<HTMLLIElement, ListItemProps> = forwardRef(
  ({ children, disabled = false, sx, ...props }, ref) => {
    const [isDrag, setIsDrag] = useState(false);

    const style: ThemeUIStyleObject = {
      ...(!disabled
        ? {
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
          '&:active::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bg: isDrag ? 'action.drag' : 'action.active',
            borderRadius: 'inherit',
            color: 'surface.variant',
          },
        }
        : {
          bg: 'surface.main',
          opacity: 0.38,
          userSelect: 'none',
        }),
    };

    const dragHandler = () => {
      setIsDrag((prevState) => !prevState);
    };

    return (
      <Box
        ref={ref}
        as="li"
        sx={{ listStyle: 'none', ...sx }}
        {...(props as BoxProps)}
      >
        <Box
          sx={style}
          draggable={!disabled}
          onDragEnter={dragHandler}
          onDragLeave={dragHandler}
          {...__internalProps({ __css: __itemCss })}
        >
          <Typography color="surface.onMain">{children}</Typography>
        </Box>
      </Box>
    );
  },
);
