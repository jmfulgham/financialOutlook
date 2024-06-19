import express, {Request, Response, Router} from "express";
import dotenv from "dotenv";
dotenv.config();

const dailyStockRouter: Router = express.Router();


dailyStockRouter.get("/api/daily/stock/:stockTicker", async (req: Request, res: Response) => {
    const {stockTicker} = req.params;
    const today = new Date();
    //TODO fix today's system date
    today.setDate(today.getDate() -1);
    const yesterday = today.toISOString().split('T')[0]

    try {
        const response = await fetch(
            `${process.env.POLYGON_URL}/v1/open-close/${stockTicker.toUpperCase()}/${yesterday}?adjusted=true&apiKey=${process.env.POLYGON_API_KEY}`,
        );
        res.send(await response.json());
    } catch (e: any) {
        console.error(e);
        throw new Error("Could not get daily stock information", e);
    }
});

export default dailyStockRouter;