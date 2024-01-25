import express, { Express } from "express";
import dotenv from "dotenv";
// @ts-ignore
import  dailyStatsRouter from "./routes/daily.ts";
// @ts-ignore
import weeklyStatsRouter from "./routes/weekly.ts";

dotenv.config();
const app: Express = express();

// eslint-disable-next-line no-undef
const port = process.env.PORT || 8080;

const router = express.Router();

router.get("/api/daily/:ticker", dailyStatsRouter.get('/api/daily/:ticker'));
router.get('/api/weekly', weeklyStatsRouter.get('/api/weekly'));

app.use(dailyStatsRouter);
app.use(weeklyStatsRouter);
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
