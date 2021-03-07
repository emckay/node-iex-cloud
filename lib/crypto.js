"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Crypto = /** @class */ (function () {
    function Crypto(req) {
        var _this = this;
        this.req = req;
        this.book = function () {
            return _this.req.request("book");
        };
        this.price = function () {
            return _this.req.request("price");
        };
        this.quote = function () {
            return _this.req.request("quote");
        };
        this.events = function () {
            return _this.req.request("cryptoEvents");
        };
        this.req = req;
    }
    return Crypto;
}());
exports.default = Crypto;