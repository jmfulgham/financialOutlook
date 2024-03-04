import React, { useEffect, useState} from "react";
import "./styles.css"
import {DailyCloseDetails, useGetDailyStockCloseInfo} from "../../utils/dailies";
import "../../utils/dailyStock.json";
// import { ResponsiveLine } from '@nivo/line'

interface DailyAssetCardProps {
    ticker: string
}
const DailyAssetCard = ({ticker}: DailyAssetCardProps) => {
    const date = new Date().toISOString().slice(0, 10);


    const [stockData, setStockData] = useState<DailyCloseDetails | undefined>()
    const [error, setError] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            const resp = await useGetDailyStockCloseInfo(ticker);
            if (resp.error) {
                setError(true)
                return
            }
            setStockData(resp)
        }

        fetchData()
    })

    return (
        <div className={"daily-asset-card-container"}>
            {stockData && <p className={"company-name"}>{stockData.ticker}</p>}
            {stockData && <p className={"price"}>${stockData.closePrice}</p>}
            <div className={"graph-container"}>
            {/*    graph goes here*/}
            </div>
        </div>
    )
}

export default DailyAssetCard