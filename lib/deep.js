"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Deep = /** @class */ (function () {
    function Deep(req) {
        var _this = this;
        this.req = req;
        this.symbol = function () {
            return _this.req.request("");
        };
        /** DEEP broadcasts an Auction Information Message every one second between the Lock-in Time and the auction match for Opening and Closing Auctions, and during the Display Only Period for IPO, Halt, and Volatility Auctions. Only IEX listed securities are eligible for IEX Auctions. */
        this.auction = function () {
            return _this.req.request("auction");
        };
        this.book = function () {
            return _this.req.request("book");
        };
        this.opHaltStatus = function () {
            return _this.req.request("op-halt-status");
        };
        this.officialPrice = function () {
            return _this.req.request("official-price");
        };
        this.securityEvent = function () {
            return _this.req.request("security-event");
        };
        /** In association with Rule 201 of Regulation SHO, the Short Sale Price Test message is used to indicate when a Short Sale Price Test restriction is in effect for a security.
     */
        this.ssrStatus = function () {
            return _this.req.request("ssr-status");
        };
        /** The System Event message is used to indicate events that apply to the market or the data feed. */
        this.systemEvent = function () {
            return _this.req.request("ssr-status");
        };
        /** Trade report messages are sent when an order on the IEX Order Book is executed in whole or in part. DEEP sends a Trade report message for every individual fill. */
        this.trades = function () {
            return _this.req.request("trades");
        };
        /** Trade break messages are sent when an execution on IEX is broken on that same trading day. Trade breaks are rare and only affect applications that rely upon IEX execution based data. */
        this.tradeBreaks = function () {
            return _this.req.request("trade-breaks");
        };
        /** The Trading status message is used to indicate the current trading status of a security. For IEX-listed securities, IEX acts as the primary market and has the authority to institute a trading halt or trading pause in a security due to news dissemination or regulatory reasons. For non-IEX-listed securities, IEX abides by any regulatory trading halts and trading pauses instituted by the primary or listing market, as applicable. */
        this.tradingStatus = function () {
            return _this.req.request("trading-status");
        };
        this.req = req;
    }
    return Deep;
}());
exports.default = Deep;