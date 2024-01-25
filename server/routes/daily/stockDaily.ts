import express, {Request, Response, Router} from "express";
import 'isomorphic-fetch';
import dotenv from "dotenv";
dotenv.config();

const dailyStockRouter: Router = express.Router();

dailyStockRouter.get("/api/daily/stock/:stockTicker", async (req: Request, res: Response): Promise<void> => {
    const {stockTicker} = req.params;
    try {
        const response = await fetch(
            `${process.env.ALPHA_VANTAGE_URL}TIME_SERIES_DAILY&symbol=${stockTicker}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`,
        );
        res.send(await response.json());
        return;
    } catch (e: any) {
        console.error(e);
        throw new Error("Could not get daily stock information", e);
    }
});

export default dailyStockRouter;