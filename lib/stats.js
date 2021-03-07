"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Statistics = /** @class */ (function () {
    function Statistics(req) {
        var _this = this;
        this.req = req;
        /** Returns daily stats for a given time frame */
        this.historical = function (date) {
            return _this.req.request("historical/" + (date ? "/" + date : ""));
        };
        this.intraday = function () {
            return _this.req.request("intraday");
        };
        this.recent = function () {
            return _this.req.request("recent");
        };
        this.records = function () {
            return _this.req.request("records");
        };
        this.req = req;
    }
    return Statistics;
}());
exports.default = Statistics;