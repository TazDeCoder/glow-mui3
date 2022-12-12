import { useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Dialog } from './Dialog';
import { Button } from '../Button';

export default {
  title: 'Components/UI/Dialog',
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

export const Default: ComponentStory<typeof Dialog> = (args) => {
  const [isMount, setIsMount] = useState(false);

  const openHandler = () => {
    setIsMount((prevState) => {
      if (isMount !== args.open) {
        return !prevState;
      }

      return true;
    });
  };

  const closeHandler = () => {
    setIsMount((prevState) => {
      if (isMount !== args.open) {
        return !prevState;
      }

      return false;
    });
  };

  return (
    <>
      <Button onClick={openHandler}>Open</Button>
      <Dialog
        {...args}
        title="Basic Dialog Title"
        subtitle="Lorem ipsum dolor sit amet, ne reque assum electram vix, vim ferri posse sententiae ut. Est posse facete eu, ex autem pericula scribentur has. At per veritus principes, ut per impetus legendos, cu errem integre admodum qui. Nam discere percipit consequat ad. Ne eum luptatum gubergren intellegam, pro te odio nisl iuvaret."
        open={isMount}
        buttons={[
          { text: 'Cancel', onClick: closeHandler },
          { text: 'Accept', onClick: closeHandler },
        ]}
        onClose={closeHandler}
      />
    </>
  );
};
