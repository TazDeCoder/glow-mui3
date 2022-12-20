import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListItem } from '../ListItem';

import { List } from './List';

export default {
  title: 'Components/UI/List',
  component: List,
} as ComponentMeta<typeof List>;

export const Default: ComponentStory<typeof List> = (args) => (
  <List width={320} {...args}>
    <ListItem>Headline</ListItem>
    <ListItem>Headline</ListItem>
    <ListItem>Headline</ListItem>
  </List>
);
