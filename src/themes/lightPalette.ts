import { generateColorPalette } from '../utils';
import { BASE_COLORS } from './constants';

const colorPalette = generateColorPalette(BASE_COLORS);

export default {
  primary: {
    main: colorPalette.primary[0.4],
    onMain: colorPalette.primary[1],
    container: colorPalette.primary[0.9],
    onContainer: colorPalette.primary[0.1],
    inverse: colorPalette.primary[0.8],
  },
  secondary: {
    main: colorPalette.secondary[0.4],
    onMain: colorPalette.secondary[1],
    container: colorPalette.secondary[0.9],
    onContainer: colorPalette.secondary[0.1],
  },
  info: {
    main: colorPalette.info[0.4],
    onMain: colorPalette.info[1],
    container: colorPalette.info[0.9],
    onContainer: colorPalette.info[0.1],
  },
  error: {
    main: colorPalette.error[0.4],
    onMain: colorPalette.error[1],
    container: colorPalette.error[0.9],
    onContainer: colorPalette.error[0.1],
  },
  warning: {
    main: colorPalette.warning[0.4],
    onMain: colorPalette.warning[1],
    container: colorPalette.warning[0.9],
    onContainer: colorPalette.warning[0.1],
  },
  success: {
    main: colorPalette.success[0.4],
    onMain: colorPalette.success[1],
    container: colorPalette.success[0.9],
    onContainer: colorPalette.success[0.1],
  },
  surface: {
    main: colorPalette.neutral[0.99],
    onMain: colorPalette.neutral[0.1],
    variant: colorPalette.neutralVariant[0.9],
    onVariant: colorPalette.neutralVariant[0.3],
    inverse: colorPalette.neutral[0.2],
    onInverse: colorPalette.neutral[0.95],
    tint: colorPalette.primary[0.4],
  },
  bg: {
    main: colorPalette.neutral[0.99],
    onMain: colorPalette.neutral[0.1],
  },
  outline: {
    main: colorPalette.neutralVariant[0.5],
    variant: colorPalette.neutralVariant[0.8],
  },
  shadow: colorPalette.neutral[0],
  scrim: colorPalette.neutral[0],
};
