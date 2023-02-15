// color interpolation function interpolated from https://stackoverflow.com/questions/16360533/calculate-color-hex-having-2-colors-and-percent-position
const calculateMiddleColor = (
  color1: string = "FF0000",
  color2: string = "00FF00",
  ratio: number
) => {
  const hex = (color: number) => {
    const colorString = color.toString(16);
    return colorString.length === 1 ? `0${colorString}` : colorString;
  };

  const r = Math.ceil(
    parseInt(color2.substring(0, 2), 16) * ratio +
      parseInt(color1.substring(0, 2), 16) * (1 - ratio)
  );
  const g = Math.ceil(
    parseInt(color2.substring(2, 4), 16) * ratio +
      parseInt(color1.substring(2, 4), 16) * (1 - ratio)
  );
  const b = Math.ceil(
    parseInt(color2.substring(4, 6), 16) * ratio +
      parseInt(color1.substring(4, 6), 16) * (1 - ratio)
  );

  return hex(r) + hex(g) + hex(b);
};

export const interpolatePoliticalSpectrum = (sliderValue: number) => {
  let color: string;
  if (sliderValue > 50) {
    color = calculateMiddleColor(STONE_400, POLITICAL_RED, (sliderValue - 50) / 50);
  } else if (sliderValue < 50) {
    color = calculateMiddleColor(POLITICAL_BLUE, STONE_400, sliderValue / 50);
  } else {
    color = STONE_400;
  }
  return `#${color}`
};

export const STONE_400 = "a8a29e";
export const POLITICAL_RED = "d22532";
export const POLITICAL_BLUE = "244999";
