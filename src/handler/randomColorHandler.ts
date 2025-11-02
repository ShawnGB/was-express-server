import { Request, Response } from "express";
import { genrateRandomColor } from "../utils/randomColor";

const randomColorHandler = (req: Request, res: Response) => {
  res.status(200).json(genrateRandomColor());
};

export { randomColorHandler };
