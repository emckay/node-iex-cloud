"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Market = /** @class */ (function () {
    function Market(req) {
        var _this = this;
        this.req = req;
        /** Returns an array of quote objects for a given collection type. Currently supported collection types are sector, tag, and list */
        this.collection = function (_a) {
            var param = _a.param, collectionName = _a.collectionName;
            return _this.req.request("collection/" + param + "?collectionName=" + collectionName);
        };
        /** Returns earnings that will be reported today as three arrays: before the open bto, after market close amc and during the trading day other. Each array contains an object with all keys from earnings, a quote object, and a headline key. */
        this.todayEarnings = function () {
            return _this.req.request("today-earnings");
        };
        /** This returns a list of upcoming IPOs scheduled for the current and next month. The response is split into two structures: rawData and viewData. rawData represents all available data for an IPO. viewData represents data structured for display to a user. */
        this.upcomingIPOs = function () {
            return _this.req.request("upcoming-ipos");
        };
        /** This returns a list of today IPOs scheduled for the current and next month. The response is split into two structures: rawData and viewData. rawData represents all available data for an IPO. viewData represents data structured for display to a user. */
        this.todayIPOs = function () {
            return _this.req.request("today-ipos");
        };
        /** This endpoint returns real time traded volume on U.S. markets. */
        this.volume = function () {
            return _this.req.request("volume");
        };
        /** This returns an array of each sector and performance for the current trading day. Performance is based on each sector ETF. */
        this.sectorPerformance = function () {
            return _this.req.request("sector-performance");
        };
        /** Returns an array of quotes for the top 10 symbols in a specified list. */
        this.list = function (listType, _a) {
            var displayPercent = _a.displayPercent, listLimit = _a.listLimit;
            return _this.req.request("list/" + listType);
        };
        this.req = req;
    }
    return Market;
}());
exports.default = Market;