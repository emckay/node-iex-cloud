"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimeSeries = /** @class */ (function () {
    function TimeSeries(req) {
        this.req = req;
        this.req = req;
        this.p = "PREMIUM_WALLSTREETHORIZON_";
    }
    /** This is a meeting where company executives provide information about the company’s performance and its future prospects. */
    TimeSeries.prototype.analystDay = function (refId) {
        return this.req.request(this.p + "ANALYST_DAY/" + (this.req.stockSymbol || this.req.stockSymbols) + "/" + (refId ? refId : ""));
    };
    TimeSeries.prototype.boardOfDirectorsMeeting = function (refId) {
        return this.req.request(this.p + "BOARD_OF_DIRECTORS_MEETING/" + (this.req.stockSymbol ||
            this.req.stockSymbols) + "/" + (refId ? refId : ""));
    };
    TimeSeries.prototype.businessUpdate = function (refId) {
        return this.req.request(this.p + "BUSINESS_UPDATE/" + (this.req.stockSymbol ||
            this.req.stockSymbols) + "/" + (refId ? refId : ""));
    };
    TimeSeries.prototype.buyBack = function (refId) {
        return this.req.request(this.p + "BUYBACK/" + (this.req.stockSymbol || this.req.stockSymbols) + "/" + (refId ? refId : ""));
    };
    TimeSeries.prototype.capitalMarketsDay = function (refId) {
        return this.req.request(this.p + "CAPITAL_MARKETS_DAY/" + (this.req.stockSymbol ||
            this.req.stockSymbols) + "/" + (refId ? refId : ""));
    };
    TimeSeries.prototype.advancedDistribution = function (refId) {
        return this.req.request("advanced_distribution/" + (this.req.stockSymbol || this.req.stockSymbols) + "/" + (refId ? refId : ""));
    };
    TimeSeries.prototype.advancedDividends = function (refId) {
        return this.req.request("advanced_dividends/" + (this.req.stockSymbol || this.req.stockSymbols) + "/" + (refId ? refId : ""));
    };
    TimeSeries.prototype.advancedReturnOnCapital = function (refId) {
        return this.req.request("advanced_return_of_capital/" + (this.req.stockSymbol ||
            this.req.stockSymbols) + "/" + (refId ? refId : ""));
    };
    TimeSeries.prototype.advancedRights = function (refId) {
        return this.req.request("advanced_rights/" + (this.req.stockSymbol || this.req.stockSymbols) + "/" + (refId ? refId : ""));
    };
    TimeSeries.prototype.advancedRightsToPurchase = function (refId) {
        return this.req.request("advanced_right_to_purchase/" + (this.req.stockSymbol ||
            this.req.stockSymbols) + "/" + (refId ? refId : ""));
    };
    TimeSeries.prototype.advancedSecurityReclassification = function (refId) {
        return this.req.request("advanced_security_reclassification/" + this.req.stockSymbol + "/" + (refId ? refId : ""));
    };
    TimeSeries.prototype.advancedSecuritySwap = function (refId) {
        return this.req.request("advanced_security_swap/" + this.req.stockSymbol + "/" + (refId ? refId : ""));
    };
    TimeSeries.prototype.advancedSpinOff = function (refId) {
        return this.req.request("advanced_spinoff/" + this.req.stockSymbol + "/" + (refId ? refId : ""));
    };
    TimeSeries.prototype.advancedSplits = function (refId) {
        return this.req.request("advanced_splits/" + (this.req.stockSymbol || this.req.stockSymbols) + "/" + (refId ? refId : ""));
    };
    return TimeSeries;
}());
exports.default = TimeSeries;