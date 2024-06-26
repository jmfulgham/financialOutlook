import React, {useState} from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";



function App() {
//   todo implement tickers and memoization
  // const [tickers, setTickers] = useState<string[]>(['aapl', 'ibm', 'nvda', 'msft'])
const tickers: string[] = []
  return (
      <>
        {tickers.length === 0 ? <Home/> : <Dashboard tickers={tickers}/> }
      </>
  );
}

export default App;
