"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataPoints = /** @class */ (function () {
    function DataPoints(req) {
        this.req = req;
        this.req = req;
    }
    DataPoints.prototype.market = function () {
        return this.req.request("market/" + this.req.stockSymbol);
    };
    DataPoints.prototype.treasury = function () {
        return this.req.request("market/" + this.req.stockSymbol);
    };
    DataPoints.prototype.energy = function () {
        return this.req.request("energy/" + this.req.stockSymbol);
    };
    return DataPoints;
}());
exports.default = DataPoints;