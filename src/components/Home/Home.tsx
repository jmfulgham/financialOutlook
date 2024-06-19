import './styles.css';
import DailyAssetSnack from "../DailyAssetSnack/DailyAssetSnack";

const Home = () => {
    const testTickers: string[] = ['spy', 't', 'msft', 'v']
    return(<div className={'home-container'}>
    <h1>Welcome to Financial Outlook</h1>
        <h2>Take a quick snapshot of your favorite financial markets</h2>
        <h3>Add your stock ticker to grab a quick look! </h3>
        <div className={"example-container"}>
            {testTickers.map(ticker => <DailyAssetSnack ticker={ticker}/>)}

        </div>
    </div>)
}

export default Home;