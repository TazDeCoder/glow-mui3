/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@theme-ui/core';
import type { SVGAttributes } from 'react';

import { Box, BoxOwnProps } from '../Box';
import type { Assign } from '../../types';

export interface SVGProps
  extends Assign<SVGAttributes<SVGElement>, BoxOwnProps> {
  /** Size of the component (width/height)
   * @default 24
   */
  size?: number | string;
}

export const SVG: React.FC<SVGProps> = ({
  children,
  size = 24,
  ...props
}: SVGProps) => {
  const svgProps: SVGProps = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
  };

  return (
    <Box as="svg" {...(svgProps as {})}>
      {children}
      Sorry, your browser does not support inline SVG
    </Box>
  );
};
