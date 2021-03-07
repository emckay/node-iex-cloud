import IEXRequest from "./request";
import Forex from "./forex";
import * as iex from "./types";
import Batch from "./batch";
declare class Stocks {
    private req;
    constructor(req: IEXRequest);
    /** returns balance sheet data. Available quarterly or annually with the default being the last available quarter
     * `Data Weight: 3000`
     */
    balanceSheet: () => Promise<any>;
    /** batch returns multipe data-types for a give stock symbol */
    batch: () => Batch;
    forex: () => Forex;
    /**
     * returns book value for a given stock
     * `Data Weight: 1 per quote returned`
     */
    book: () => Promise<any>;
    /**
     * Returns adjusted and unadjusted historical data for up to 15 years.
     * `Data Weight: 1,000 per symbol per period`
     */
    chart: (range?: iex.Range, params?: iex.ChartParams) => Promise<any>;
    /**
     * returns cash flow data. Available quarterly or annually, with the default being the last available quarter.
     * `Data Weight: 1,000 per symbol per period`
     */
    cashFlow: () => Promise<any>;
    /** returns Ceo Compensation */
    ceoCompensation: () => Promise<any>;
    /** returns data on a given company
     *  `Data Weight: 1 per symbol` */
    company: () => Promise<any>;
    /**
     *  `Data Weight: 1 per symbol per quote`
     */
    delayedQuote: () => Promise<any>;
    /**
     * `Data Weight: 10 per symbol per period returned`
     */
    dividends: () => Promise<any>;
    /** Returns earnings data for a given company including the actual EPS, consensus, and fiscal period. Earnings are available quarterly (last 4 quarters).
     *  `Data Weight: 1000 per symbol per period`
     */
    earnings: () => Promise<any>;
    /** Provides the latest consensus estimate for the next fiscal period */
    estimates: () => Promise<iex.Estimates>;
    /** Pulls income statement, balance sheet, and cash flow data from the most recent reported quarter. */
    financials: () => Promise<any>;
    /** Returns latest news for a give stock symbol */
    news: () => Promise<any>;
    /**
     * Returns the top 10 fund holders, meaning any firm not defined as buy-side or sell-side such as mutual funds, pension funds, endowments, investment firms, and other large entities that manage funds on behalf of others.
     */
    fundOwnership: () => Promise<any>;
    /** Pulls income statement data. Available quarterly or annually with the default being the last available quarter. */
    income: () => Promise<any>;
    /** Returns the top 10 insiders, with the most recent information. */
    insiderRoster: () => Promise<any>;
    /** Returns aggregated insiders summary data for the last 6 months. */
    insiderSummary: () => Promise<any>;
    /** Returns insider transactions. */
    insiderTransactions: () => Promise<any>;
    /**
    Returns the top 10 institutional holders, defined as buy-side or sell-side firms. */
    institutionalOwnership: () => Promise<any>;
    /** This endpoint will return aggregated intraday prices in one minute buckets */
    intradayPrices: () => Promise<any>;
    /** This is a helper function, but the google APIs url is standardized.  */
    logo: () => Promise<any>;
    /**  This returns 15 minute delayed, last sale eligible trades. */
    largestTrades: () => Promise<any>;
    /** Returns end of day options data */
    options: () => Promise<any>;
    /** Returns peer group */
    peers: () => Promise<string[]>;
    /** Returns previous day adjusted price data for one or more stocks. */
    previous: () => Promise<any>;
    /** Returns price of a stock */
    price: () => Promise<number>;
    /** Provides the latest avg, high, and low analyst price target for a symbol. */
    priceTarget: () => Promise<any>;
    /** Returns the official open and close for a give symbol. The official open is available as soon as 9:45am ET and the official close as soon as 4:15pm ET. Some stocks can report late open or close prices. */
    ohlc: () => Promise<any>;
    /**
      This endpoint provides social sentiment data from StockTwits. Data can be viewed as a daily value, or by minute for a given date. */
    sentiment: () => Promise<any>;
    quote: () => Promise<any>;
    /** Pulls data from the last four months. */
    recommendationTrends: () => Promise<any>;
    stats: () => Promise<any>;
    upcomingEvents: () => Promise<any>;
    upcomingEarnings: () => Promise<any>;
    upcomingDividends: () => Promise<any>;
    upcomingSplits: () => Promise<any>;
    upcomingIPOs: () => Promise<any>;
    splits: () => Promise<any>;
    shortInterest: () => Promise<any>;
    /** This returns 15 minute delayed and 30 day average consolidated volume percentage of a stock, by market. This call will always return 13 values, and will be sorted in ascending order by current day trading volume percentage. */
    volumeByVenue: () => Promise<any>;
}
export default Stocks;
