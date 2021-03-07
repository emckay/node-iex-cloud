"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReferenceData = /** @class */ (function () {
    function ReferenceData(req) {
        var _this = this;
        this.req = req;
        /** This call returns an array of symbols that IEX Cloud supports for API calls. */
        this.symbols = function () {
            return _this.req.request("symbols");
        };
        /** Returns an array of tags. Tags can be found on each company. */
        this.tags = function () {
            return _this.req.request("tags");
        };
        this.cryptoSymbols = function () {
            return _this.req.request("crypto/symbols");
        };
        this.fxSymbols = function () {
            _this.req.datatype = "ref-data";
            return _this.req.request("fx/symbols");
        };
        /** This call returns an array of symbols the Investors Exchange supports for trading. This list is updated daily as of 7:45 a.m. ET. Symbols may be added or removed by the Investors Exchange after the list was produced. */
        this.iexSymbols = function () {
            return _this.req.request("iex/symbols");
        };
        /** This call returns an array of international symbols that IEX Cloud supports for API calls. */
        this.internationalSymbols = function (region, exchange) {
            return _this.req.request(region ? "region/" + region + "/symbols" : "exchange/" + exchange + "/symbols");
        };
        /** Returns an array of exchanges. */
        this.exchanges = function () {
            return _this.req.request("exchanges");
        };
        /** This call returns an array of mutual fund symbols that IEX Cloud supports for API calls. */
        this.mutualFunds = function () {
            return _this.req.request("mutual-funds/symbols");
        };
        /** This call returns an object keyed by symbol with the value of each symbol being an array of available contract dates. */
        this.options = function () {
            return _this.req.request("options/symbols");
        };
        /** This call returns an array of OTC symbols that IEX Cloud supports for API calls. */
        this.otc = function () {
            return _this.req.request("otc/symbols");
        };
        /** Returns an array of sectors. */
        this.sectors = function () {
            return _this.req.request("sectors");
        };
        this.req = req;
    }
    return ReferenceData;
}());
exports.default = ReferenceData;