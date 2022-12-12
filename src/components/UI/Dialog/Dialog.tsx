/** @jsxRuntime classic */
/** @jsx jsx */

import { forwardRef, HTMLAttributes } from 'react';
import { jsx } from '@theme-ui/core';

import { Box, BoxOwnProps, Portal } from '../../Utils';
import { Typography } from '../Typography';
import { Button } from '../Button';

import { backdropStyles, baseStyles, actionStyles } from './styles';

import type { Assign, ForwardRef, ColorTheme } from '../../types';

type ActionButton = HTMLAttributes<HTMLButtonElement> & {
  text: string;
};

export interface DialogProps
  extends Assign<React.ComponentPropsWithRef<'div'>, BoxOwnProps> {
  /** Component's headline */
  title: string;
  /** Component's supporting text */
  subtitle: string;
  /** Color theme used for the component
   * @default 'primary'
   */
  color?: ColorTheme;
  /** Mount state of the component */
  open: boolean;
  /** Component's action buttons */
  buttons?: ActionButton[];
  /** Handler used when backdrop is clicked  */
  onClose?: () => void;
}

export const Dialog: ForwardRef<HTMLDivElement, DialogProps> = forwardRef(
  (
    {
      title,
      subtitle,
      color = 'primary',
      open,
      buttons,
      sx,
      onClose,
      ...props
    },
    ref,
  ) => {
    if (!open) {
      return null;
    }

    return (
      <Portal>
        <Box sx={backdropStyles} aria-hidden onClick={onClose} />
        <Box
          ref={ref}
          color={`${color}.container`}
          role="dialog"
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
          aria-modal
          sx={{
            ...baseStyles,
            ...sx,
          }}
          {...props}
        >
          <Box>
            <Typography
              id="dialog-title"
              as="h2"
              variant="headline"
              size="sm"
              color="surface.onMain"
            >
              {title}
            </Typography>
            <Typography
              id="dialog-description"
              color="surface.onVariant"
              pt={3}
            >
              {subtitle}
            </Typography>
          </Box>
          {buttons && (
            <Box color={`${color}.main`} sx={actionStyles}>
              {buttons.map(({ text, onClick }, idx) => (
                <Button
                  key={idx}
                  color={color}
                  variant="text"
                  onClick={onClick}
                >
                  {text}
                </Button>
              ))}
            </Box>
          )}
        </Box>
      </Portal>
    );
  },
);
