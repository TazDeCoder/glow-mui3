import '@fontsource/roboto';
import { useEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { themes } from '@storybook/theming';
import { useColorMode, ColorModeProvider } from '@theme-ui/color-modes';
import { ThemeProvider } from '@theme-ui/core';

import { defaultTheme } from '../src/themes';

const ThemeChanger = () => {
  const [, setColorMode] = useColorMode();
  const isDarkMode = useDarkMode();

  useEffect(() => {
    setColorMode(isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return <></>;
};

const ThemeDecorator = (storyFn) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ColorModeProvider>
        <ThemeChanger />
        {storyFn()}
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export const decorators = [ThemeDecorator];

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
