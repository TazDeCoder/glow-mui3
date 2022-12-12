// NOTE: Looking to perhaps add more tests in the future

import { generateColorPalette, createColorScale } from './colorPalette';

const testColors = {
  info: '#3595bb',
  danger: '#eb6654',
  warning: '#ffbe30',
  success: '#88c163',
  grey: '#9fa3a7',
} as const;
const testSteps = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];

describe('colorPalette', () => {
  describe('generateColorPalette', () => {
    it('should generate a color palette from a given color object', () => {
      const colorPalette = generateColorPalette(testColors, testSteps);
      const allHaveColorScale = Object.keys(colorPalette).every(
        (colorToken) => Object.keys(colorPalette[colorToken]).length === 9,
      );
      expect(Object.keys(colorPalette).length).toBe(5);
      expect(allHaveColorScale).toBe(true);
    });
  });
  describe('createColorScale', () => {
    it('should create a color scale of 9 different tones from a single color', () => {
      const colorScale = createColorScale(testColors.info, testSteps);
      expect(Object.keys(colorScale).length).toBe(9);
    });
  });
});
