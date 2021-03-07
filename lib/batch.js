"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Batch = /** @class */ (function () {
    function Batch(req) {
        var _this = this;
        this.req = req;
        /** returns balance sheet data. Available quarterly or annually with the default being the last available quarter
         * `Data Weight: 3000`
         */
        this.balanceSheet = function () {
            _this.batching = __spreadArrays(_this.batching, ["balance-sheet"]);
            return _this;
        };
        /**
         * returns book value for a given stock
         * `Data Weight: 1 per quote returned`
         */
        this.book = function () {
            _this.batching = __spreadArrays(_this.batching, ["book"]);
            return _this;
        };
        /**
         * returns cash flow data. Available quarterly or annually, with the default being the last available quarter.
         * `Data Weight: 1,000 per symbol per period`
         */
        this.cashFlow = function () {
            _this.batching = __spreadArrays(_this.batching, ["cash-flow"]);
            return _this;
        };
        /**
         * Returns adjusted and unadjusted historical data for up to 15 years.
         * `Data Weight: 1,000 per symbol per period`
         */
        this.chart = function () {
            _this.batching = __spreadArrays(_this.batching, ["chart"]);
            return _this;
        };
        this.ceoCompensation = function () {
            _this.batching = __spreadArrays(_this.batching, ["ceo-compensation"]);
            return _this;
        };
        /** returns data on a given company
         *  `Data Weight: 1 per symbol` */
        this.company = function () {
            _this.batching = __spreadArrays(_this.batching, ["company"]);
            return _this;
        };
        this.delayedQuote = function () {
            _this.batching = __spreadArrays(_this.batching, ["delayed-quote"]);
            return _this;
        };
        this.dividends = function () {
            _this.batching = __spreadArrays(_this.batching, ["dividends"]);
            return _this;
        };
        /** Returns earnings data for a given company including the actual EPS, consensus, and fiscal period. Earnings are available quarterly (last 4 quarters).
         */
        this.earnings = function () {
            _this.batching = __spreadArrays(_this.batching, ["earnings"]);
            return _this;
        };
        /** Provides the latest consensus estimate for the next fiscal period */
        this.estimates = function () {
            _this.batching = __spreadArrays(_this.batching, ["estimates"]);
            return _this;
        };
        /** Pulls income statement, balance sheet, and cash flow data from the most recent reported quarter. */
        this.financials = function () {
            _this.batching = __spreadArrays(_this.batching, ["financials"]);
            return _this;
        };
        /** Returns latest news for a give stock symbol */
        this.news = function () {
            _this.batching = __spreadArrays(_this.batching, ["news"]);
            return _this;
        };
        /**
         * Returns the top 10 fund holders, meaning any firm not defined as buy-side or sell-side such as mutual funds, pension funds, endowments, investment firms, and other large entities that manage funds on behalf of others.
         */
        this.fundOwnership = function () {
            _this.batching = __spreadArrays(_this.batching, ["fund-ownership"]);
            return _this;
        };
        /** Pulls income statement data. Available quarterly or annually with the default being the last available quarter. */
        this.income = function () {
            _this.batching = __spreadArrays(_this.batching, ["income"]);
            return _this;
        };
        /** Returns the top 10 insiders, with the most recent information. */
        this.insiderRoster = function () {
            _this.batching = __spreadArrays(_this.batching, ["inside-roster"]);
            return _this;
        };
        /** Returns aggregated insiders summary data for the last 6 months. */
        this.insiderSummary = function () {
            _this.batching = __spreadArrays(_this.batching, ["inside-summary"]);
            return _this;
        };
        this.insiderTransactions = function () {
            _this.batching = __spreadArrays(_this.batching, ["inside-transactions"]);
            return _this;
        };
        /**
        Returns the top 10 institutional holders, defined as buy-side or sell-side firms. */
        this.institutionalOwnership = function () {
            _this.batching = __spreadArrays(_this.batching, ["institutionalOwnership"]);
            return _this;
        };
        /** This is a helper function, but the google APIs url is standardized.  */
        this.logo = function () {
            _this.batching = __spreadArrays(_this.batching, ["logo"]);
            return _this;
        };
        /** This endpoint will return aggregated intraday prices in one minute buckets */
        this.intradayPrices = function () {
            _this.batching = __spreadArrays(_this.batching, ["intraday-prices"]);
            return _this;
        };
        /**  This returns 15 minute delayed, last sale eligible trades. */
        this.largestTrades = function () {
            _this.batching = __spreadArrays(_this.batching, ["largest-trades"]);
            return _this;
        };
        /** Returns end of day options data */
        this.options = function () {
            _this.batching = __spreadArrays(_this.batching, ["options"]);
            return _this;
        };
        /** Returns peer group */
        this.peers = function () {
            _this.batching = __spreadArrays(_this.batching, ["peers"]);
            return _this;
        };
        /** Returns previous day adjusted price data for one or more stocks. */
        this.previous = function () {
            _this.batching = __spreadArrays(_this.batching, ["previous"]);
            return _this;
        };
        /** Returns price of a stock */
        this.price = function () {
            _this.batching = __spreadArrays(_this.batching, ["price"]);
            return _this;
        };
        /** Provides the latest avg, high, and low analyst price target for a symbol. */
        this.priceTarget = function () {
            _this.batching = __spreadArrays(_this.batching, ["price-target"]);
            return _this;
        };
        /** Returns the official open and close for a give symbol. The official open is available as soon as 9:45am ET and the official close as soon as 4:15pm ET. Some stocks can report late open or close prices. */
        this.ohlc = function () {
            _this.batching = __spreadArrays(_this.batching, ["ohlc"]);
            return _this;
        };
        /** This endpoint provides social sentiment data from StockTwits. Data can be viewed as a daily value, or by minute for a given date. */
        this.sentiment = function () {
            _this.batching = __spreadArrays(_this.batching, ["sentiment"]);
            return _this;
        };
        this.quote = function () {
            _this.batching = __spreadArrays(_this.batching, ["quote"]);
            return _this;
        };
        /** Pulls data from the last four months. */
        this.recommendationTrends = function () {
            _this.batching = __spreadArrays(_this.batching, ["recommendation-trends"]);
            return _this;
        };
        this.stats = function () {
            _this.batching = __spreadArrays(_this.batching, ["stats"]);
            return _this;
        };
        this.splits = function () {
            _this.batching = __spreadArrays(_this.batching, ["splits"]);
            return _this;
        };
        /** This returns 15 minute delayed and 30 day average consolidated volume percentage of a stock, by market. This call will always return 13 values, and will be sorted in ascending order by current day trading volume percentage. */
        this.volumeByVenue = function () {
            _this.batching = __spreadArrays(_this.batching, ["volume-by-venue"]);
            return _this;
        };
        /** return batch requests using the range method */
        this.range = function (range, last) {
            return _this.req.response(_this.req.batchParams, _this.batching, "&range=" + (range ? range : "1m") + "&last=" + (last ? last : 0));
        };
        this.req = req;
        this.batching = [];
    }
    return Batch;
}());
exports.default = Batch;
