import './styles.css';
import DailyAssetSnack from "../DailyAssetSnack/DailyAssetSnack";

const Home = () => {
    const testTickers: string[] = ['spy', 't', 'msft', 'v']
    return(<div className={'home-container'}>
    <h1>Welcome to Financial Outlook</h1>
        <h2>Take a quick snapshot of your favorite financial markets</h2>
        <h3>Add your stock ticker to grab a quick look! </h3>
        <div className={'example-balances-container'}>
            <div className={'balance'} id={"cash-balance"}><p className={'balance-title'}>Cash Balance:</p> <p
                className={'balance-text'}>$5,481.22</p></div>
            <div className={'balance'} id={'portfolio-balance'}><p className={'balance-title'}>Portfolio Balance:</p>
                <p className={'balance-text'}>$25,042.01</p></div>
            <div className={'balance'} id={'dividends-received'}><p className={'balance-title'}>Total Dividends Received:</p>
                <p className={'balance-text'}>$4,073.89</p></div>
        </div>
        <div className={"example-container"}>
            {testTickers.map(ticker => <DailyAssetSnack ticker={ticker}/>)}
            {/*TODO add test graph here, do i want the snacks to hover and be clickable to
        populate the graph??
        */}
        </div>
    </div>)
}

export default Home;