import '@fontsource/roboto';

export default {
  fonts: {
    body: '"Roboto", sans-serif',
  },
  lineHeights: [1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3.25, 4],
  fontSizes: [11, 12, 14, 16, 22, 24, 28, 32, 36, 45, 57],
  fontWeights: {
    normal: 400,
    medium: 500,
  },
  letterSpacings: [0, 0.1, 0.15, 0.25, 0.4, 0.5],
  headline: {
    sm: {
      fontFamily: 'body',
      lineHeight: 4,
      fontSize: 5,
      letterSpacing: 0,
      fontWeight: 'normal',
    },
  },
  label: {
    lg: {
      fontFamily: 'body',
      lineHeight: 2,
      fontSize: 2,
      letterSpacing: 1,
      fontWeight: 'normal',
    },
  },
  body: {
    md: {
      fontFamily: 'body',
      lineHeight: 1,
      fontSize: 2,
      letterSpacing: 3,
      fontWeight: 'normal',
    },
  },
};
