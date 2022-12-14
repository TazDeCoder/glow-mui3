/** @jsxRuntime classic */
/** @jsx jsx */

import { forwardRef, HTMLAttributes } from 'react';
import { jsx, ThemeUICSSObject } from '@theme-ui/core';

import { Box, BoxOwnProps, Flex, Portal } from '../../Utils';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { __internalProps } from '../../shared/utils';
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

const __modalCss: ThemeUICSSObject = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  zIndex: 1301,
  minWidth: 280,
  maxWidth: 560,
  p: 24,
  bg: 'surface.main',
  borderRadius: 'xl',
  boxShadow: 'lg',
  transform: 'translate(-50%, -50%)',
  '&::before': {
    content: '""',
    position: 'relative',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    bg: 'surface.tint',
    opacity: 'tint',
    borderRadius: 'inherit',
  },
};

export const Dialog: ForwardRef<HTMLDivElement, DialogProps> = forwardRef(
  (
    {
      title,
      subtitle,
      color = 'primary',
      open,
      buttons,
      onClose,
      sx,
      ...props
    },
    ref,
  ) => {
    if (!open) {
      return null;
    }

    return (
      <Portal>
        <Box
          aria-hidden
          onClick={onClose}
          {...__internalProps({
            __css: {
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              zIndex: 1201,
              bg: 'scrim',
              opacity: 'backdrop',
            },
          })}
        />
        <Box
          ref={ref}
          color={`${color}.container`}
          role="dialog"
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
          aria-modal
          sx={sx}
          {...props}
          {...__internalProps({ __css: __modalCss })}
        >
          <Box>
            <Typography
              id="dialog-title"
              as="h2"
              variant="headline"
              color="surface.onMain"
              size="sm"
            >
              {title}
            </Typography>
            <Typography
              id="dialog-description"
              color="surface.onVariant"
              size="md"
              pt={3}
            >
              {subtitle}
            </Typography>
          </Box>
          {buttons && (
            <Flex
              color={`${color}.main`}
              justifyContent="flex-end"
              pt={24}
              columnGap={2}
            >
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
            </Flex>
          )}
        </Box>
      </Portal>
    );
  },
);
