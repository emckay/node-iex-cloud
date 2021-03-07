import IEXRequest from "./request";
import { MarketType } from "./types";
declare class Market {
    private req;
    constructor(req: IEXRequest);
    /** Returns an array of quote objects for a given collection type. Currently supported collection types are sector, tag, and list */
    collection: ({ param, collectionName }: any) => Promise<any>;
    /** Returns earnings that will be reported today as three arrays: before the open bto, after market close amc and during the trading day other. Each array contains an object with all keys from earnings, a quote object, and a headline key. */
    todayEarnings: () => Promise<any>;
    /** This returns a list of upcoming IPOs scheduled for the current and next month. The response is split into two structures: rawData and viewData. rawData represents all available data for an IPO. viewData represents data structured for display to a user. */
    upcomingIPOs: () => Promise<any>;
    /** This returns a list of today IPOs scheduled for the current and next month. The response is split into two structures: rawData and viewData. rawData represents all available data for an IPO. viewData represents data structured for display to a user. */
    todayIPOs: () => Promise<any>;
    /** This endpoint returns real time traded volume on U.S. markets. */
    volume: () => Promise<any>;
    /** This returns an array of each sector and performance for the current trading day. Performance is based on each sector ETF. */
    sectorPerformance: () => Promise<any>;
    /** Returns an array of quotes for the top 10 symbols in a specified list. */
    list: (listType: MarketType, { displayPercent, listLimit }: any) => Promise<any>;
}
export default Market;