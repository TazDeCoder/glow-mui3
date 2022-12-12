import { generateColorPalette } from '../utils';
import { BASE_COLORS } from './constants';

const colorPalette = generateColorPalette(BASE_COLORS);

export default {
  primary: {
    main: colorPalette.primary[0.8],
    onMain: colorPalette.primary[0.2],
    container: colorPalette.primary[0.3],
    onContainer: colorPalette.primary[0.9],
    inverse: colorPalette.primary[0.4],
  },
  secondary: {
    main: colorPalette.secondary[0.8],
    onMain: colorPalette.secondary[0.2],
    container: colorPalette.secondary[0.3],
    onContainer: colorPalette.secondary[0.9],
  },
  info: {
    main: colorPalette.info[0.8],
    onMain: colorPalette.info[0.2],
    container: colorPalette.info[0.3],
    onContainer: colorPalette.info[0.9],
  },
  error: {
    main: colorPalette.error[0.8],
    onMain: colorPalette.error[0.2],
    container: colorPalette.error[0.3],
    onContainer: colorPalette.error[0.9],
  },
  warning: {
    main: colorPalette.warning[0.8],
    onMain: colorPalette.warning[0.2],
    container: colorPalette.warning[0.3],
    onContainer: colorPalette.warning[0.9],
  },
  success: {
    main: colorPalette.success[0.8],
    onMain: colorPalette.success[0.2],
    container: colorPalette.success[0.3],
    onContainer: colorPalette.success[0.9],
  },
  surface: {
    main: colorPalette.neutral[0.1],
    onMain: colorPalette.neutral[0.9],
    variant: colorPalette.neutralVariant[0.3],
    onVariant: colorPalette.neutralVariant[0.8],
    inverse: colorPalette.neutral[0.9],
    onInverse: colorPalette.neutral[0.2],
    tint: colorPalette.primary[0.4],
  },
  bg: {
    main: colorPalette.neutral[0.1],
    onMain: colorPalette.neutral[0.9],
  },
  outline: {
    main: colorPalette.neutralVariant[0.6],
    variant: colorPalette.neutralVariant[0.3],
  },
  shadow: colorPalette.neutral[0],
  scrim: colorPalette.neutral[0],
};
