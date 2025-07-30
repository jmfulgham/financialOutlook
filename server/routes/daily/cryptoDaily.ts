import express, { Request, Response, Router } from "express";
import "isomorphic-fetch";
import dotenv from "dotenv";
dotenv.config();

const dailyCryptoRouter: Router = express.Router();

dailyCryptoRouter.get(
  "/api/daily/crypto/:cryptoTicker",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { cryptoTicker } = req.params;
      const response = await fetch(
        `${process.env.ALPHA_VANTAGE_URL}DIGITAL_CURRENCY_DAILY&symbol=${cryptoTicker}&market=USD&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`,
      );
      res.send(await response.json());
    } catch (e: any) {
      console.log(e);
      throw new Error("Error retrieving crypto information ", e);
    }
  },
);

export default dailyCryptoRouter;
