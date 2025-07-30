const useGetWeeklyStockInfo = async (stockTicker: string) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/weekly/stock/${stockTicker.toUpperCase()}`,
    );
    const { results } = await response.json();
    return results;
  } catch (e) {
    console.log(e);
    return { error: e, message: "Error retrieving daily close details" };
  }
};

export default useGetWeeklyStockInfo;
