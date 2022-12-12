import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Portal } from './Portal';
import { Box } from '../Box';

export default {
  title: 'Components/Utils/Portal',
  component: Portal,
} as ComponentMeta<typeof Portal>;

export const Default: ComponentStory<typeof Portal> = () => (
  <>
    <Portal>
      <Box p={1} my={1} bg="primary.main" color="primary.onMain">
        Portal 1
      </Box>
    </Portal>
    <Portal>
      <Box p={1} my={1} bg="secondary.main" color="secondary.onMain">
        Portal 2
      </Box>
    </Portal>
  </>
);
