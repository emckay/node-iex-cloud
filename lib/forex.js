"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Forex = /** @class */ (function () {
    function Forex(req) {
        var _this = this;
        this.req = req;
        /** This endpoint provides an end of day exchange rate of a given currency pair */
        this.rate = function (params) {
            return _this.req.request("rate/" + params.from + "/" + params.to);
        };
        /** This endpoint returns real-time foreign currency exchange rates data updated every 250 milliseconds. */
        this.latest = function () {
            return _this.req.request("latest?symbols=" + _this.req.stockSymbols);
        };
        this.convert = function (_a) {
            var amount = _a.amount, symbols = _a.symbols;
            return _this.req.request("convert?symbols=" + (symbols ? symbols : _this.req.stockSymbols) + (amount ? "&amount=" + amount : ""));
        };
        this.historical = function (_a) {
            var from = _a.from, to = _a.to, on = _a.on, first = _a.first, filter = _a.filter, symbols = _a.symbols, last = _a.last;
            return _this.req.request("historical?symbols=" + _this.req.stockSymbols + (last ? "&last=" + last : "") + (from ? "&from=" + from : "") + (to ? "&to=" + to : "") + (on ? "&on=" : "") + (first ? "&first=" : "") + (filter ? "&filter=" + filter : ""));
        };
        this.req = req;
    }
    return Forex;
}());
exports.default = Forex;