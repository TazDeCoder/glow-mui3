import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Flex } from './Flex';
import { Box } from '../Box';

export default {
  title: 'Components/Utils/Flex',
  component: Flex,
} as ComponentMeta<typeof Flex>;

export const Default: ComponentStory<typeof Flex> = (args) => (
  <Flex
    sx={{
      '& > div': {
        flexGrow: 1,
        textAlign: 'center',
        variant: 'headline.sm',
      },
    }}
    width="90%"
    height={240}
    mt={2}
    mx="auto"
    bg="surface.main"
    alignItems="center"
    {...args}
  >
    <Box bg="primary.main" color="primary.onMain">
      Flex
    </Box>
    <Box bg="secondary.main" color="secondary.onMain">
      Box
    </Box>
  </Flex>
);
