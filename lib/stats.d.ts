import IEXRequest from "./request";
import * as iex from "./types";
declare class Statistics {
    private req;
    constructor(req: IEXRequest);
    /** Returns daily stats for a given time frame */
    historical: (date?: string) => Promise<iex.HistoricalStats>;
    intraday: () => Promise<iex.IntraDay>;
    recent: () => Promise<iex.Recent[]>;
    records: () => Promise<iex.Records[]>;
}
export default Statistics;
