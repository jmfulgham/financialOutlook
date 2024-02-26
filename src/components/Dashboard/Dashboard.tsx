import React from "react";
import './styles.css';
import DailyAssetCard from "../DailyAssetCard/DailyAssetCard";

const Dashboard= ()=> {
    return(<div className={"dashboard"}>
        <h1>Dashboard</h1>
        <div className={"cards-container"}>
            <DailyAssetCard/>
        </div>

    </div>)
}

export default Dashboard;