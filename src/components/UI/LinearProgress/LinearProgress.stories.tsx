import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { LinearProgress } from './LinearProgress';
import { Flex } from '../../Utils';

export default {
  title: 'Components/UI/LinearProgress',
  component: LinearProgress,
} as ComponentMeta<typeof LinearProgress>;

export const Default: ComponentStory<typeof LinearProgress> = (args) => (
  <LinearProgress sx={{ width: 320 }} label="Loading..." {...args} />
);

export const Colors: ComponentStory<typeof LinearProgress> = (args) => (
  <Flex width={320} flexDirection="column" gap={2}>
    <LinearProgress {...args} color="primary" label="Primary" />
    <LinearProgress {...args} color="secondary" label="Secondary" />
    <LinearProgress {...args} color="info" label="Info" />
    <LinearProgress {...args} color="error" label="Error" />
    <LinearProgress {...args} color="warning" label="Warning" />
    <LinearProgress {...args} color="success" label="Success" />
  </Flex>
);

export const Variants: ComponentStory<typeof LinearProgress> = (args) => (
  <Flex width={320} flexDirection="column" gap={2}>
    <LinearProgress {...args} variant="indeterminate" label="Indeterminate" />
    <LinearProgress {...args} variant="determinate" label="Determinate" />
  </Flex>
);
