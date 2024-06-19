
export interface DailyCloseDetails {
    symbol: string,
    close: number,
    error?: unknown,
    from: string,
    open: number,
    afterHours: number
}
export const useGetDailyStockCloseInfo = async (stockTicker: string) => {
    //TODO update this call w env vars
    try {
        const response = await fetch(`http://localhost:8080/api/daily/stock/${stockTicker.toUpperCase()}`);
        return await response.json()
    } catch(e){
      console.log(e)
        return {error: e, message: "Error retrieving daily close details"}
    }
}
