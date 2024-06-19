import React, {useEffect, useState} from "react";
import "./styles.css"
import {DailyCloseDetails, useGetDailyStockCloseInfo} from "../../utils/dailies";
import "../../utils/dailyStock.json";
import { Line } from 'react-chartjs-2';


interface DailyAssetCardProps {
    ticker: string
}

const DailyAsset = ({ticker}: DailyAssetCardProps) => {
//TODO export the graph
    const [stockData, setStockData] = useState<DailyCloseDetails | undefined>()
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const dailyClose = await useGetDailyStockCloseInfo(ticker);
            if (dailyClose.error) {
                setError(true)
                return
            }
            setStockData(dailyClose)
        }

        fetchData()
    }, [ticker])

    return (
        <div className={"daily-asset-card-container"}>
            {error && <div>Error retrieving stock details, please try again</div>}
            {stockData && <p className={"company-ticker"}>{stockData.ticker}</p>}
            {stockData && <p className={"price"}>Close: ${stockData.closePrice}</p>}
            <div className={"graph-container"}>

            </div>
        </div>
    )
}

export default DailyAsset