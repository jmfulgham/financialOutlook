import React from "react";
import './styles.css';
import DailyAssetSnack from "../DailyAssetSnack/DailyAssetSnack";

const tickers = ['aapl', 'ibm', 'nvda', 'msft']
const Dashboard= () => {
    return(<div className={"dashboard"}>
        <h1>Dashboard</h1>
        <div className={"cards-container"}>
            {tickers.map((ticker, i) =>  <DailyAssetSnack ticker={ticker} key={i}/>)}
        </div>

    </div>)
}

export default Dashboard;