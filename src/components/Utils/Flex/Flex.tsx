/** @jsxRuntime classic */
/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx, useTheme, CSSObject, ArrayInterpolation } from '@emotion/react';
import { css, ThemeUICSSProperties } from '@theme-ui/css';

import { Box, BoxOwnProps } from '../Box';
import { pickSystemProps } from '../../shared/utils';
import type { Assign, ForwardRef } from '../../types';

const flexSystemProps = [
  // system props inherited from styled-system (https://styled-system.com/table)
  // flexbox props
  'alignItems',
  'alignContent',
  'justifyItems',
  'justifyContent',
  'flexWrap',
  'flexDirection',
  'flex',
  'flexGrow',
  'flexShrink',
  'flexBasis',
  'justifySelf',
  'alignSelf',
  'order',
  'gap',
  'rowGap',
  'columnGap',
] as const;

type FlexSystemPropsKeys = typeof flexSystemProps[number];
type FlexSystemProps = Pick<ThemeUICSSProperties, FlexSystemPropsKeys>;

export interface FlexOwnProps extends BoxOwnProps, FlexSystemProps {}

export interface FlexProps
  extends Omit<
  Assign<React.ComponentPropsWithRef<'div'>, FlexOwnProps>,
  'ref'
  > {}

const baseStyles: CSSObject = {
  display: 'flex',
};

export const Flex: ForwardRef<any, FlexProps> = forwardRef((props, ref) => {
  const theme = useTheme();

  const systemPropsStyles = css(
    pickSystemProps<FlexOwnProps, FlexSystemPropsKeys>(props, flexSystemProps),
  )(theme);

  const style: ArrayInterpolation<unknown> = [baseStyles, systemPropsStyles];

  const rest: Partial<Omit<FlexProps, FlexSystemPropsKeys>> = {
    ...props,
  };

  for (let i = 0; i < flexSystemProps.length; i += 1) {
    // Remove all system props from props as no longer needed
    flexSystemProps.forEach((name) => {
      delete (rest as Record<string, unknown>)[name];
    });
  }

  return <Box ref={ref} css={style} {...rest} />;
});
