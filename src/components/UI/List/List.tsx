/** @jsxRuntime classic */
/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@theme-ui/core';

import { Flex as _Flex, FlexProps, FlexOwnProps } from '../../Utils';
import type { Assign, ForwardRef } from '../../types';

const Flex = _Flex as React.ForwardRefExoticComponent<
FlexProps & React.RefAttributes<HTMLUListElement>
>;

export interface ListProps
  extends Assign<React.ComponentPropsWithRef<'ul'>, FlexOwnProps> {}

export const List: ForwardRef<HTMLUListElement, ListProps> = forwardRef(
  ({ children, sx, ...props }, ref) => (
    <Flex
      ref={ref}
      as="ul"
      flexDirection="column"
      py={2}
      sx={sx}
      {...(props as FlexProps)}
    >
      {children}
    </Flex>
  ),
);
