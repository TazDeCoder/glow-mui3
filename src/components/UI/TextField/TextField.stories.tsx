import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { TextField } from './TextField';
import { Flex } from '../../Utils';

export default {
  title: 'Components/UI/TextField',
  component: TextField,
  argTypes: {
    onFocus: { action: 'focused' },
  },
} as ComponentMeta<typeof TextField>;

export const Default: ComponentStory<typeof TextField> = (args) => (
  <TextField label="Label" {...args} />
);

export const Colors: ComponentStory<typeof TextField> = (args) => (
  <Flex flexWrap="wrap" gap={2}>
    <TextField {...args} color="primary" label="Primary" />
    <TextField {...args} color="secondary" label="Secondary" />
    <TextField {...args} color="info" label="Info" />
    <TextField {...args} color="error" label="Error" />
    <TextField {...args} color="warning" label="Warning" />
    <TextField {...args} color="success" label="Success" />
  </Flex>
);

export const Variants: ComponentStory<typeof TextField> = (args) => (
  <Flex gap={2}>
    <TextField {...args} variant="filled" label="Filled" />
    <TextField {...args} variant="outlined" label="Outlined" />
  </Flex>
);
