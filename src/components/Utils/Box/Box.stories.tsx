import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Box } from './Box';

export default {
  title: 'Components/Utils/Box',
  component: Box,
} as ComponentMeta<typeof Box>;

export const Default: ComponentStory<typeof Box> = (args) => (
  <Box
    sx={{ width: '90%', height: 240, variant: 'headline.sm' }}
    p={2}
    mt={2}
    mx="auto"
    bg="primary.main"
    color="primary.onMain"
    {...args}
  >
    Box
  </Box>
);
