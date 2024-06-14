import React from "react";
import './styles.css';
import DailyAssetCard from "../DailyAssetCard/DailyAssetCard";

const tickers = ['aapl', 'ibm', 'nvda']
const Dashboard= () => {
    return(<div className={"dashboard"}>
        <h1>Dashboard</h1>
        <div className={"cards-container"}>
            {tickers.map((ticker) =>  <DailyAssetCard ticker={ticker}/>)}
        </div>

    </div>)
}

export default Dashboard;