import type { NextApiRequest, NextApiResponse } from 'next'
import dotenv from "dotenv";
dotenv.config();

type ResponseData = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    res.setHeader('Cache-Control', 's-maxage=86400')
    console.log("Called stock dailies")
    const { stockTicker } = req.query;
    console.log({stockTicker})
    const today = new Date();
    //TODO fix today's system date
    today.setDate(today.getDate() - 1);
    const yesterday = today.toISOString().split("T")[0];

    try {
      const response = await fetch(
        `${process.env.POLYGON_URL}/v1/open-close/${stockTicker}/${yesterday}?adjusted=true&apiKey=${process.env.POLYGON_API_KEY}`,
      );
      const data = await response.json()
      console.log({data})
      res.json(data);
    } catch (e: any) {
      console.error(e);
      throw new Error("Could not get daily stock information", e);
    }
  }

