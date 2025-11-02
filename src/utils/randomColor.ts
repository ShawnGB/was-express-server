// @ts-ignore
import { randomColor } from "randomcolor";

interface RandomColorResponse {
  hex: string;
  rgb: string;
  hsl: string;
}
export const genrateRandomColor = (): RandomColorResponse => {
  const seed = Math.random().toString();
  return {
    hex: randomColor({
      seed,
      format: "hex",
    }),
    rgb: randomColor({
      seed,
      format: "rgb",
    }),
    hsl: randomColor({ seed, format: "hsl" }),
  };
};
