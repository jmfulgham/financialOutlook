import dotenv from "dotenv";
dotenv.config();

import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    try {
      const { cryptoTicker } = req.query;
      const response = await fetch(
        `${process.env.ALPHA_VANTAGE_URL}DIGITAL_CURRENCY_DAILY&symbol=${cryptoTicker}&market=USD&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`,
      );
      res.send(await response.json());
    } catch (e: any) {
      console.log(e);
      throw new Error("Error retrieving crypto information ", e);
    }
  }

