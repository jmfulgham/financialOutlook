
export interface DailyCloseDetails {
    ticker?: string,
    closePrice?: number,
    error?: unknown,
    message?: unknown
}
export const useGetDailyStockCloseInfo = async (stockTicker: string) => {
    //TODO update this call w env vars
    try {
        const response = await fetch(`http://localhost:8080/api/daily/stock/${stockTicker.toUpperCase()}`);
        const results = await response.json()
        return {ticker: results.results[0].T, closePrice: results.results[0].c}
    } catch(e){
      console.log(e)
        return {error: e, message: "Error retrieving daily close details"}
    }
}
