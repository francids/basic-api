import { Request, Response, NextFunction } from "express";

function logger(req: Request, res: Response, next: NextFunction): void {
  console.log(`Request: ${req.method} ${req.originalUrl} (${new Date().toLocaleString('es-ES')})`);
  next();
};

export default logger;
