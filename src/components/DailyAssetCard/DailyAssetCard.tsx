import React, { useEffect, useState} from "react";
import "./styles.css"
import {DailyCloseDetails, useGetDailyStockCloseInfo} from "../../utils/dailies";
import "../../utils/dailyStock.json";
import { ResponsiveLine } from '@nivo/line'


const DailyAssetCard = () => {
    const date = new Date().toISOString().slice(0, 10);


    const [stockData, setStockData] = useState<DailyCloseDetails | undefined>()
    const [error, setError] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            const resp = await useGetDailyStockCloseInfo("aapl");
            if (resp.error) {
                setError(true)
                return
            }
            setStockData(resp)
        }

        fetchData()
    })
    const createGraph  = () =>(
        <ResponsiveLine
            curve={"monotoneX"}
            data={graphData}
            enablePoints={false}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transportation',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            useMesh={true}
        />
    )

    const graphData = [
        {
            "id": "aapl",
            "color": "hsl(306, 70%, 50%)",
            "data": [
                {
                    "x": "test",
                    "y": 187
                },
                {
                    "x": "test1",
                    "y": 300
                },
                {
                    "x": "test2",
                    "y": 245
                },
            ]
        }
    ]

    return (
        <div className={"daily-asset-card-container"}>
            {stockData && <p className={"company-name"}>{stockData.ticker}</p>}
            {stockData && <p className={"price"}>${stockData.closePrice}</p>}
            <div className={"graph-container"}>
                {createGraph()}
        </div>
        </div>
    )
}

export default DailyAssetCard