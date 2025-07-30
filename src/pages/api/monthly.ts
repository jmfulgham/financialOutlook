import type { NextApiRequest, NextApiResponse } from 'next'
import dotenv from "dotenv";
dotenv.config();
type ResponseData = {
    message: string
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {}
