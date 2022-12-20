import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './Button';
import { Flex } from '../../Utils';

export default {
  title: 'Components/UI/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Hello, World!</Button>
);

export const Colors: ComponentStory<typeof Button> = (args) => (
  <Flex gap={2}>
    <Button {...args} color="primary">
      Primary
    </Button>
    <Button {...args} color="secondary">
      Secondary
    </Button>
    <Button {...args} color="info">
      Info
    </Button>
    <Button {...args} color="error">
      Error
    </Button>
    <Button {...args} color="warning">
      Warning
    </Button>
    <Button {...args} color="success">
      Success
    </Button>
  </Flex>
);

export const Variants: ComponentStory<typeof Button> = (args) => (
  <Flex gap={2}>
    <Button {...args} variant="filled">
      Filled
    </Button>
    <Button {...args} variant="outlined">
      Outlined
    </Button>
    <Button {...args} variant="text">
      Text
    </Button>
  </Flex>
);
