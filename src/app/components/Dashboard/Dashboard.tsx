import React from "react";
import "./styles.css";
import DailyAssetSnack from "../DailyAssetSnack/DailyAssetSnack";

interface DashboardProps {
  tickers: string[];
}
const Dashboard = ({ tickers }: DashboardProps) => {
  return (
    <div className={"dashboard"}>
      <h1>Dashboard</h1>
      <div className={"cards-container"}>
        {tickers.map((ticker, i) => (
            <div key={i}>
          <DailyAssetSnack ticker={ticker} key={i} />
            </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
