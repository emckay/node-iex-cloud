import IEXRequest from "./request";
declare class ReferenceData {
    private req;
    constructor(req: IEXRequest);
    /** This call returns an array of symbols that IEX Cloud supports for API calls. */
    symbols: () => Promise<any>;
    /** Returns an array of tags. Tags can be found on each company. */
    tags: () => Promise<any>;
    cryptoSymbols: () => Promise<any>;
    fxSymbols: () => Promise<any>;
    /** This call returns an array of symbols the Investors Exchange supports for trading. This list is updated daily as of 7:45 a.m. ET. Symbols may be added or removed by the Investors Exchange after the list was produced. */
    iexSymbols: () => Promise<any>;
    /** This call returns an array of international symbols that IEX Cloud supports for API calls. */
    internationalSymbols: (region: string, exchange: string) => Promise<any>;
    /** Returns an array of exchanges. */
    exchanges: () => Promise<any>;
    /** This call returns an array of mutual fund symbols that IEX Cloud supports for API calls. */
    mutualFunds: () => Promise<any>;
    /** This call returns an object keyed by symbol with the value of each symbol being an array of available contract dates. */
    options: () => Promise<any>;
    /** This call returns an array of OTC symbols that IEX Cloud supports for API calls. */
    otc: () => Promise<any>;
    /** Returns an array of sectors. */
    sectors: () => Promise<any>;
}
export default ReferenceData;
