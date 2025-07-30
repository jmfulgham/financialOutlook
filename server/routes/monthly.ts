import express, { Request, Response } from "express";
// import fetch from 'node-fetch';

const monthlyStatsRouter = express.Router();

export const getMonthlyStats = monthlyStatsRouter.get(
  "/api/monthly",
  (req: Request, res: Response) => {},
);
