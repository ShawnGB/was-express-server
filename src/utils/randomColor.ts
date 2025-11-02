// @ts-ignore
import randomColor from "randomcolor";

interface RandomColorResponse {
  hex: string;
  rgb: string;
  hsl: string;
}
export const genrateRandomColor = (): RandomColorResponse => {
  const seed = Math.random().toString();

  const formats = ["hex", "rgb", "hsl"];

  const [hex, rgb, hsl] = formats.map((format) =>
    randomColor({ seed, format }),
  );

  return { hex, rgb, hsl };
};
