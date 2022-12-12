import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Checkbox } from './Checkbox';
import { Box } from '../../Utils';

export default {
  title: 'Components/UI/Checkbox',
  component: Checkbox,
  argTypes: {
    onClick: { action: 'toggled' },
  },
} as ComponentMeta<typeof Checkbox>;

export const Default: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox label="Label" {...args} />
);

export const Colors: ComponentStory<typeof Checkbox> = (args) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      rowGap: 2,
    }}
  >
    <Checkbox {...args} color="primary" label="Primary" />
    <Checkbox {...args} color="secondary" label="Secondary" />
    <Checkbox {...args} color="info" label="Info" />
    <Checkbox {...args} color="error" label="Error" />
    <Checkbox {...args} color="warning" label="Warning" />
    <Checkbox {...args} color="success" label="Success" />
  </Box>
);
