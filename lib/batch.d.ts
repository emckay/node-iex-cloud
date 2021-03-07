import IEXRequest from "./request";
import { Range, Last } from "./types";
declare class Batch {
    private req;
    private batching;
    constructor(req: IEXRequest);
    /** returns balance sheet data. Available quarterly or annually with the default being the last available quarter
     * `Data Weight: 3000`
     */
    balanceSheet: () => Batch;
    /**
     * returns book value for a given stock
     * `Data Weight: 1 per quote returned`
     */
    book: () => Batch;
    /**
     * returns cash flow data. Available quarterly or annually, with the default being the last available quarter.
     * `Data Weight: 1,000 per symbol per period`
     */
    cashFlow: () => Batch;
    /**
     * Returns adjusted and unadjusted historical data for up to 15 years.
     * `Data Weight: 1,000 per symbol per period`
     */
    chart: () => Batch;
    ceoCompensation: () => Batch;
    /** returns data on a given company
     *  `Data Weight: 1 per symbol` */
    company: () => Batch;
    delayedQuote: () => Batch;
    dividends: () => Batch;
    /** Returns earnings data for a given company including the actual EPS, consensus, and fiscal period. Earnings are available quarterly (last 4 quarters).
     */
    earnings: () => Batch;
    /** Provides the latest consensus estimate for the next fiscal period */
    estimates: () => Batch;
    /** Pulls income statement, balance sheet, and cash flow data from the most recent reported quarter. */
    financials: () => Batch;
    /** Returns latest news for a give stock symbol */
    news: () => Batch;
    /**
     * Returns the top 10 fund holders, meaning any firm not defined as buy-side or sell-side such as mutual funds, pension funds, endowments, investment firms, and other large entities that manage funds on behalf of others.
     */
    fundOwnership: () => Batch;
    /** Pulls income statement data. Available quarterly or annually with the default being the last available quarter. */
    income: () => Batch;
    /** Returns the top 10 insiders, with the most recent information. */
    insiderRoster: () => Batch;
    /** Returns aggregated insiders summary data for the last 6 months. */
    insiderSummary: () => Batch;
    insiderTransactions: () => Batch;
    /**
    Returns the top 10 institutional holders, defined as buy-side or sell-side firms. */
    institutionalOwnership: () => Batch;
    /** This is a helper function, but the google APIs url is standardized.  */
    logo: () => Batch;
    /** This endpoint will return aggregated intraday prices in one minute buckets */
    intradayPrices: () => Batch;
    /**  This returns 15 minute delayed, last sale eligible trades. */
    largestTrades: () => Batch;
    /** Returns end of day options data */
    options: () => Batch;
    /** Returns peer group */
    peers: () => Batch;
    /** Returns previous day adjusted price data for one or more stocks. */
    previous: () => Batch;
    /** Returns price of a stock */
    price: () => Batch;
    /** Provides the latest avg, high, and low analyst price target for a symbol. */
    priceTarget: () => Batch;
    /** Returns the official open and close for a give symbol. The official open is available as soon as 9:45am ET and the official close as soon as 4:15pm ET. Some stocks can report late open or close prices. */
    ohlc: () => Batch;
    /** This endpoint provides social sentiment data from StockTwits. Data can be viewed as a daily value, or by minute for a given date. */
    sentiment: () => Batch;
    quote: () => Batch;
    /** Pulls data from the last four months. */
    recommendationTrends: () => Batch;
    stats: () => Batch;
    splits: () => Batch;
    /** This returns 15 minute delayed and 30 day average consolidated volume percentage of a stock, by market. This call will always return 13 values, and will be sorted in ascending order by current day trading volume percentage. */
    volumeByVenue: () => Batch;
    /** return batch requests using the range method */
    range: (range?: Range, last?: Last) => Promise<any>;
}
export default Batch;