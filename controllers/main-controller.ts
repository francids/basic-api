import { Request, Response } from "express";

export function getRoot(req: Request, res: Response) {
  res.json({ message: 'Hola Mundo!' });
};

export function getPong(req: Request, res: Response) {
  res.json({ message: 'pong' });
};
