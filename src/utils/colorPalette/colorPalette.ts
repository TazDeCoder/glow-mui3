// Credits to tonality!
// https://github.com/souporserious/tonality/blob/master/src/index.js

import { parseToRgb, rgba, mix, parseToHsl, toColorString } from 'polished';
import type { RgbColor } from 'polished/lib/types/color';

type Colors = {
  [key: string]: string;
};

type ColorPalette = {
  [key: string]: {
    [key: number]: string;
  };
};

const EPS = 1e-7;
const DESATURATE = 0.5;
const MIN_STEP_IDX = 0.01;
const MAX_STEP_IDX = 0.99;
const DEFAULT_STEPS = [
  0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.95, 0.99, 1,
];

function getLightness(color: string) {
  const rgbColor = parseToRgb(color);
  const [r, g, b] = Object.keys(rgbColor).map((key) => {
    const channel = rgbColor[key as keyof RgbColor] / 255;
    return channel <= 0.03928
      ? channel / 12.92
      : // eslint-disable-next-line no-restricted-properties
      Math.pow((channel + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function adjustLightness(amount: number, color: string) {
  let rgb: string;
  const alpha = 1;

  if (amount === 0) {
    rgb = rgba(0, 0, 0, alpha);
  } else if (amount === 1) {
    rgb = rgba(255, 255, 255, alpha);
  } else {
    let maxIteration = 20;

    const test = (color1: string, color2: string): string => {
      const mixed = mix(0.5, color1, color2);
      const mixedlightness = getLightness(mixed);

      if (Math.abs(amount - mixedlightness) < EPS || maxIteration > 0) {
        maxIteration -= 1;
        return mixed;
      }

      if (mixedlightness > amount) {
        return test(color1, mixed);
      }

      return test(mixed, color2);
    };

    rgb =
      getLightness(color) > amount ? test('#000', color) : test(color, '#fff');
  }

  return rgb;
}

function adjustSaturation(amount: number, color: string) {
  const hsl = parseToHsl(color);
  hsl.saturation += hsl.saturation * amount;

  return toColorString(hsl);
}

export function createTone(color: string, idx: number) {
  // Clamped step index between 0.01 and 0.99
  const lightnessAmount = Math.min(Math.max(idx, MIN_STEP_IDX), MAX_STEP_IDX);

  return adjustSaturation(
    -idx * DESATURATE,
    adjustLightness(lightnessAmount, color),
  );
}

export function createColorScale(color: string, steps = DEFAULT_STEPS) {
  return Object.keys(steps).reduce((parsedTones, _, idx) => {
    const stepIdx = steps[idx];
    const toneColor =
      stepIdx === 0
        ? '#000'
        : stepIdx === 1
          ? '#fff'
          : createTone(color, stepIdx);

    return {
      ...parsedTones,
      [stepIdx]: toneColor,
    };
  }, {});
}

export function generateColorPalette(
  colors: Colors,
  steps = DEFAULT_STEPS,
): ColorPalette {
  return Object.keys(colors).reduce(
    (parsedColors, key) => ({
      ...parsedColors,
      [key]: createColorScale(colors[key], steps),
    }),
    {},
  );
}
