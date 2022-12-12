import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Typography } from './Typography';
import { Box } from '../../Utils';

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
  <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: 2 }}>
    <Typography {...args} variant="headline" size="sm">
      Headline Small
    </Typography>
    <Typography {...args} variant="body" size="md">
      Body Medium
    </Typography>
    <Typography {...args} variant="label" size="lg">
      Label Large
    </Typography>
  </Box>
);
