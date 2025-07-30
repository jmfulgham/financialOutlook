import type { NextApiRequest, NextApiResponse } from 'next'
import dotenv from "dotenv";
dotenv.config();

type ResponseData = {
    message: string
}
const handleDates = () => {
  const todaysDate = new Date();
  const lastWeeksDate = new Date();
  lastWeeksDate.setDate(lastWeeksDate.getDate() - 7);
  const formattedLastWeek = lastWeeksDate.toISOString().split("T")[0];
  const formattedToday = todaysDate.toISOString().split("T")[0];
  return { lastWeek: formattedLastWeek, today: formattedToday };
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    const { stockTicker } = req.query;
    const { lastWeek, today } = handleDates();
    //TODO handle in query
    const timespan = "day";
    try {
      const response = await fetch(
        `${process.env.POLYGON_URL}/v2/aggs/ticker/${stockTicker}/range/1/${timespan}/${lastWeek}/${today}?adjusted=true&sort=asc&apiKey=${process.env.POLYGON_API_KEY}`,
      );
      console.log("hit the endpoint WEEKLY");
      const results = await response.json();
      res.json(results);
      return;
    } catch (e: any) {
      console.error(e);
      throw new Error("Could not get daily stock information", e);
    }
  }

