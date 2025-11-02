import { Request, Response } from "express";
import { genrateRandomColor } from "../utils/randomColor";

const randomColorHandler = (req: Request, res: Response) => {
  const { format } = req.params;

  if (!format)
    res.status(400).send("No format suggested, allowed formats RGB, HEX, HSL");

  const options = ["hex", "rgb", "hsl"];

  if (options.includes(format.toLowerCase()))
    res.status(200).json(format + ": " + genrateRandomColor(format));

  res.status(400).send("Choose a valid format");
};

export { randomColorHandler };
