// @ts-ignore
import { randomColor } from "randomcolor";

export const genrateRandomColor = (format: string): string => {
  if (format === "hex") return randomColor() as string;

  return randomColor({ format }) as string;
};
