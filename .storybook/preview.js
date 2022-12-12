import { useEffect } from 'react';
import addons from '@storybook/addons';
import { themes } from '@storybook/theming';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@theme-ui/core';
import { ColorModeProvider, useColorMode } from '@theme-ui/color-modes';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';

import theme from '../src/theme';

const channel = addons.getChannel();

const ThemeChanger = () => {
  const [, setColorMode] = useColorMode();

  const toggleDarkModeHandler = (isDark) => {
    setColorMode(isDark ? 'light' : 'dark');
  };

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, toggleDarkModeHandler);

    return () => {
      channel.off(DARK_MODE_EVENT_NAME);
    };
  }, [channel]);

  return <></>;
};

const ThemeDecorator = (storyFn) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <ThemeChanger />
        {storyFn()}
      </ColorModeProvider>
    </ThemeProvider>
  );
};

addDecorator(ThemeDecorator);

export const parameters = {
  darkMode: {
    current: 'dark',
    // Override the default dark theme
    dark: {
      ...themes.dark,
      brandTitle: 'Glow Mui3',
      brandUrl: 'https://github.com/TazDeCoder/glow-mui3',
    },
    // Override the default light theme
    light: { ...themes.light },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
};
