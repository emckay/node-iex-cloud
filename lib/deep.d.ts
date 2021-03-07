import IEXRequest from "./request";
declare class Deep {
    private req;
    constructor(req: IEXRequest);
    symbol: () => Promise<any>;
    /** DEEP broadcasts an Auction Information Message every one second between the Lock-in Time and the auction match for Opening and Closing Auctions, and during the Display Only Period for IPO, Halt, and Volatility Auctions. Only IEX listed securities are eligible for IEX Auctions. */
    auction: () => Promise<any>;
    book: () => Promise<any>;
    opHaltStatus: () => Promise<any>;
    officialPrice: () => Promise<any>;
    securityEvent: () => Promise<any>;
    /** In association with Rule 201 of Regulation SHO, the Short Sale Price Test message is used to indicate when a Short Sale Price Test restriction is in effect for a security.
 */
    ssrStatus: () => Promise<any>;
    /** The System Event message is used to indicate events that apply to the market or the data feed. */
    systemEvent: () => Promise<any>;
    /** Trade report messages are sent when an order on the IEX Order Book is executed in whole or in part. DEEP sends a Trade report message for every individual fill. */
    trades: () => Promise<any>;
    /** Trade break messages are sent when an execution on IEX is broken on that same trading day. Trade breaks are rare and only affect applications that rely upon IEX execution based data. */
    tradeBreaks: () => Promise<any>;
    /** The Trading status message is used to indicate the current trading status of a security. For IEX-listed securities, IEX acts as the primary market and has the authority to institute a trading halt or trading pause in a security due to news dissemination or regulatory reasons. For non-IEX-listed securities, IEX abides by any regulatory trading halts and trading pauses instituted by the primary or listing market, as applicable. */
    tradingStatus: () => Promise<any>;
}
export default Deep;