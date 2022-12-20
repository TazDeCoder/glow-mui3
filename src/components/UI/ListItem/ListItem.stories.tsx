import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ListItem } from './ListItem';

export default {
  title: 'Components/UI/ListItem',
  component: ListItem,
} as ComponentMeta<typeof ListItem>;

export const Default: ComponentStory<typeof ListItem> = (args) => (
  <ListItem width={320} {...args}>
    Headline
  </ListItem>
);
