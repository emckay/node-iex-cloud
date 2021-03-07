import * as iex from "./types";
import Crypto from "./crypto";
import Stock from "./stock";
import Stocks from "./stocks";
import Market from "./market";
import ReferenceData from "./reference";
import DataPoints from "./dataPoints";
import TimeSeries from "./timeSeries";
import Statistics from "./stats";
import Forex from "./forex";
export default class IEXCloudClient {
    private req;
    constructor(f: typeof fetch | any, config: iex.Configuration);
    /**  Takes in a stock symbol, a unique series of letters assigned to a security   */
    symbol: (symbol: string) => Stock;
    /** Takes in multiple stock symbols, and batches them to a single request  */
    batchSymbols: (...symbols: string[]) => Stocks;
    /** Takes in multiple stock symbols, and batches them to a single request  */
    symbols: (...symbols: string[]) => Stocks;
    tops: () => Promise<any>;
    /**  Takes in a crypto currency   */
    crypto: (crypto: iex.CryptoCurrency) => Crypto;
    market: () => Market;
    forex: () => Forex;
    refData: () => ReferenceData;
    dataPoints: () => DataPoints;
    stats: () => Statistics;
    timeSeries: () => TimeSeries;
    /**  Returns an array of symbols up to the top 10 matches.
     * Results will be sorted for relevancy. Search currently defaults to equities only, where the symbol returned is supported by endpoints listed under the Stocks category.
     * @params search by symbol or security name.
     */
    search: (symbol: string) => Promise<iex.Search[]>;
}
