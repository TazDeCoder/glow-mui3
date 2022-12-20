import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { SVG } from './SVG';

export default {
  title: 'Components/Utils/SVG',
  component: SVG,
} as ComponentMeta<typeof SVG>;

export const Path: ComponentStory<typeof SVG> = () => (
  <SVG width={400} height={210}>
    <path d="M150 0 L75 200 L225 200 Z" />
  </SVG>
);
