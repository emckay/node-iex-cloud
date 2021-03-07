import IEXRequest from "./request";
import * as iex from "./types";
import Deep from "./deep";
import TimeSeries from "./timeSeries";
import Forex from "./forex";
import Batch from "./batch";
declare class Stock {
    req: IEXRequest;
    iexDeep: Deep;
    timeseries: TimeSeries;
    iexForex: Forex;
    iexBatch: Batch;
    constructor(req: IEXRequest);
    /** returns balance sheet data. Available quarterly or annually with the default being the last available quarter
     * `Data Weight: 3000`
     */
    balanceSheet: (period?: iex.Period, last?: iex.Last) => Promise<iex.BalanceSheet>;
    /** batch returns multipe data-types for a give stock symbol */
    /** batch returns multipe data-types for a give stock symbol */
    batch: () => Batch;
    deep: () => Deep;
    timeSeries: () => TimeSeries;
    forex: () => Forex;
    /**
     * returns book value for a given stock
     * `Data Weight: 1 per quote returned`
     */
    book: () => Promise<iex.Book>;
    /** TOPS provides IEX’s aggregated best quoted bid and offer position in near real time for all securities on IEX’s displayed limit order book. TOPS is ideal for developers needing both quote and trade data. */
    tops: () => Promise<any>;
    /**
     * Returns adjusted and unadjusted historical data for up to 15 years.
     * `Data Weight: 1,000 per symbol per period`
     */
    chart: (range: iex.Range, params: iex.ChartParams) => Promise<iex.Chart[] | iex.DynamicChart>;
    /**
     * returns cash flow data. Available quarterly or annually, with the default being the last available quarter.
     *
     * `Data Weight: 1,000 per symbol per period`
     */
    cashFlow: (period: iex.Period, last: iex.Last | number) => Promise<iex.CashFlow>;
    /** returns Ceo Compensation */
    ceoCompensation: () => Promise<iex.CeoCompensation>;
    /** returns data on a given company
     *  `Data Weight: 1 per symbol`
     */
    company: () => Promise<iex.Company>;
    /**
     *  returns the 15 minute delayed market quote.
     *   `Data Weight: 1 per symbol per quote`
     */
    delayedQuote: (oddLot?: boolean) => Promise<iex.DelayedQuote>;
    /**
     * Provides basic dividend data for US equities, ETFs, and Mutual Funds for the last 5 years. For 13+ years of history, comprehensive data, and international dividends, use the Advanced Dividends endpoint.
     * `Data Weight: 10 per symbol per period returned`
     */
    dividends: (range: iex.Range | "next") => Promise<iex.Dividends[]>;
    /** Returns earnings data for a given company including the actual EPS, consensus, and fiscal period. Earnings are available quarterly (last 4 quarters).
     *  `Data Weight: 1000 per symbol per period`
     */
    earnings: (last?: iex.Last, field?: string) => Promise<iex.Earnings>;
    /** Provides the latest consensus estimate for the next fiscal period */
    estimates: () => Promise<iex.Estimates>;
    /** Pulls income statement, balance sheet, and cash flow data from the most recent reported quarter. */
    financials: (period?: iex.Period) => Promise<iex.Financials>;
    /** Returns latest news for a give stock symbol */
    news: (last?: number) => Promise<iex.News[]>;
    /**
     * Returns the top 10 fund holders, meaning any firm not defined as buy-side or sell-side such as mutual funds, pension funds, endowments, investment firms, and other large entities that manage funds on behalf of others.
     */
    fundOwnership: () => Promise<iex.FundOwnership[]>;
    /** Pulls income statement data. Available quarterly or annually with the default being the last available quarter. */
    income: (period: iex.Period, last: iex.Last) => Promise<iex.Income>;
    /** Returns the top 10 insiders, with the most recent information. */
    insiderRoster: () => Promise<iex.InsiderRoster[]>;
    /** Returns aggregated insiders summary data for the last 6 months. */
    insiderSummary: () => Promise<iex.InsiderSummary[]>;
    /** Returns insider transactions. */
    insiderTransactions: () => Promise<iex.InsiderTransactions[]>;
    /**
    Returns the top 10 institutional holders, defined as buy-side or sell-side firms. */
    institutionalOwnership: () => Promise<iex.InstitutionalOwnership[]>;
    /** This endpoint will return aggregated intraday prices in one minute buckets */
    intradayPrices: () => Promise<iex.IntradayPrices[]>;
    /** This is a helper function, but the google APIs url is standardized.  */
    logo: () => Promise<iex.Logo>;
    /**  This returns 15 minute delayed, last sale eligible trades. */
    largestTrades: () => Promise<iex.LargestTrades>;
    /** Returns end of day options data */
    options: (expiration?: Date | string, optionSide?: iex.OptionSide) => Promise<string[] | any>;
    /** Returns peer group */
    peers: () => Promise<string[]>;
    /** Returns previous day adjusted price data for one or more stocks. */
    previous: () => Promise<iex.Chart>;
    /** Returns price of a stock */
    price: () => Promise<number>;
    /** Provides the latest avg, high, and low analyst price target for a symbol. */
    priceTarget: () => Promise<iex.PriceTarget>;
    /** Returns the official open and close for a give symbol. The official open is available as soon as 9:45am ET and the official close as soon as 4:15pm ET. Some stocks can report late open or close prices. */
    ohlc: () => Promise<iex.OHLC>;
    /**
  This endpoint provides social sentiment data from StockTwits. Data can be viewed as a daily value, or by minute for a given date. */
    sentiment: (type?: iex.SentimentType, date?: Date | null) => Promise<iex.DailySentiment[] | iex.MinuteSentiment[]>;
    quote: (field?: string) => Promise<iex.Quote>;
    /** Pulls data from the last four months. */
    recommendationTrends: () => Promise<iex.RecommendationTrends>;
    stats: (stat?: string) => Promise<iex.Stats>;
    upcomingEvents: () => Promise<any>;
    upcomingEarnings: () => Promise<any>;
    upcomingDividends: () => Promise<any>;
    upcomingSplits: () => Promise<any>;
    upcomingIPOs: () => Promise<any>;
    splits: (range?: iex.Range) => Promise<iex.Splits[]>;
    shortInterest: (date?: Date | string) => Promise<iex.ShortInterest[]>;
    /** This returns 15 minute delayed and 30 day average consolidated volume percentage of a stock, by market. This call will always return 13 values, and will be sorted in ascending order by current day trading volume percentage. */
    volumeByVenue: () => Promise<iex.VolumeByVenue[]>;
}
export default Stock;