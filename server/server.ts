import express, { Express } from "express";
import dotenv from "dotenv";

import dailyStockRouter from "./routes/daily/stockDaily.js";
import weeklyStatsRouter from "./routes/weekly.js";
import dailyCryptoRouter from "./routes/daily/cryptoDaily.js";

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 8080;

const router = express.Router();

router.get("/api/daily/stock/:stockTicker", dailyStockRouter.get('/api/daily/stock/:stockTicker'));
router.get("/api/daily/crypto/:cryptoTicker", dailyStockRouter.get('/api/daily/crypto/:cryptoTicker'));
router.get('/api/weekly', weeklyStatsRouter.get('/api/weekly'));

app.use(dailyStockRouter);
app.use(dailyCryptoRouter);
app.use(weeklyStatsRouter);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});