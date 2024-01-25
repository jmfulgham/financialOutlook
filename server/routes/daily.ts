import express, { Request, Response } from "express";
import 'isomorphic-fetch';
import dotenv from "dotenv";
dotenv.config();

const dailyStatsRouter = express.Router();

dailyStatsRouter.get("/api/daily/:ticker", async (req: Request, res: Response) => {
    const {ticker} = req.params;

    try {
        // eslint-disable-next-line no-undef
        const response = await fetch(
            `${process.env.ALPHA_VANTAGE_URL}TIME_SERIES_DAILY&symbol=${ticker}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`,
        );
        res.send(await response.json());
    } catch (e: any) {
        console.error(e);
        throw new Error("Could not get daily information", e);
    }
});

export default dailyStatsRouter;