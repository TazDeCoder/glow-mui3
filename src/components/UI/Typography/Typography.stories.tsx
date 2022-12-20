import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Typography } from './Typography';
import { Flex } from '../../Utils';

export default {
  title: 'Components/UI/Typography',
  component: Typography,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Typography>;

export const Default: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}>Sample Text</Typography>
);

export const Variants: ComponentStory<typeof Typography> = (args) => (
  <Flex flexDirection="column" gap={2}>
    <Typography {...args} variant="headline" size="sm">
      Headline Small
    </Typography>
    <Typography {...args} variant="body" size="lg">
      Body Large
    </Typography>
    <Typography {...args} variant="body" size="md">
      Body Medium
    </Typography>
    <Typography {...args} variant="body" size="sm">
      Body Small
    </Typography>
    <Typography {...args} variant="label" size="lg">
      Label Large
    </Typography>
  </Flex>
);
