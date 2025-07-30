// import express, { Express } from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// // import {postgresDb} from "./config/database.js";
// import dailyStockRouter from "./routes/daily/stockDaily.js";
// import weeklyStatsRouter from "../src/pages/api/weekly.js";
// import dailyCryptoRouter from "./routes/daily/cryptoDaily.js";
//
// dotenv.config();
// const app: Express = express();
// app.use(cors());
// const port = process.env.PORT || 8080;
//
// const router = express.Router();
//
// app.listen(port, () => {
//   console.log(`[server]: Server is running at http://localhost:${port}`);
// });
//
// // (async (): Promise<void> => {
// //     postgresDb.connect(function (err) {
// //         if (err)
// //             throw err;
// //         console.log("DB is connected!");
// //     })
// //     const {rows} = await postgresDb.query('SELECT $1 AS food', ["pizza"])
// //     console.log(rows)
// // })()
