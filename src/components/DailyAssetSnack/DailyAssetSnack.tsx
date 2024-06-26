import React, {useEffect, useState, memo} from "react";
import "./styles.css"
import {DailyCloseDetails, useGetDailyStockCloseInfo} from "../../utils/dailies";
import {FaLongArrowAltUp} from "@react-icons/all-files/fa/FaLongArrowAltUp";
import {FaLongArrowAltDown} from "@react-icons/all-files/fa/FaLongArrowAltDown"

interface DailyAssetCardProps {
    ticker: string;
}

const DailyAssetSnack = memo(({ticker}: DailyAssetCardProps) => {

    const [stockData, setStockData] = useState<DailyCloseDetails | undefined>()
    const [error, setError] = useState(false)
    const isStockDown: boolean | undefined = stockData && stockData.open < stockData.close
    useEffect(() => {
        const fetchData = async () => {
            setError(false)
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
        <div className={"daily-asset-snack-container"}
             //TODO figure out bg style
             // style={isStockDown ? {backgroundImage: 'linear-gradient(90deg white, #DD424280)'}: {backgroundColor: 'green'}}
        >
            {error && <div>Error retrieving stock details, please try again</div>}
            {stockData && <p className={"company-ticker"}>{stockData.symbol}</p>}
            {stockData && <p className={'close-date'}>Close Date: {stockData.from}</p>}
            {stockData && <div className={"price-details"}><p>Close Price: ${stockData.close}</p>
                {isStockDown ? <FaLongArrowAltDown style={{color: 'red'}}/> : <FaLongArrowAltUp style={{color: 'green'}}/>}</div>}
            </div>)
                })

export default DailyAssetSnack