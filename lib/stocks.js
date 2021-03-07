"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forex_1 = require("./forex");
var batch_1 = require("./batch");
var Stocks = /** @class */ (function () {
    function Stocks(req) {
        var _this = this;
        this.req = req;
        /** returns balance sheet data. Available quarterly or annually with the default being the last available quarter
         * `Data Weight: 3000`
         */
        this.balanceSheet = function () { return _this.req.request("balance-sheet"); };
        /** batch returns multipe data-types for a give stock symbol */
        this.batch = function () {
            return new batch_1.default(_this.req);
        };
        this.forex = function () {
            _this.req.datatype = "fx";
            return new forex_1.default(_this.req);
        };
        /**
         * returns book value for a given stock
         * `Data Weight: 1 per quote returned`
         */
        this.book = function () { return _this.req.request("book"); };
        /**
         * Returns adjusted and unadjusted historical data for up to 15 years.
         * `Data Weight: 1,000 per symbol per period`
         */
        this.chart = function (range, params) {
            var paramValues = [];
            if (range) {
                paramValues.push(["range", range]);
            }
            if (params) {
                paramValues.push.apply(paramValues, Object.entries(params));
            }
            return _this.req.request("chart" + (paramValues.length > 0
                ? "&" + paramValues.map(function (v) { return v[0] + "=" + v[1]; }).join("&")
                : ""));
        };
        /**
         * returns cash flow data. Available quarterly or annually, with the default being the last available quarter.
         * `Data Weight: 1,000 per symbol per period`
         */
        this.cashFlow = function () { return _this.req.request("cash-flow"); };
        /** returns Ceo Compensation */
        this.ceoCompensation = function () {
            return _this.req.request("ceo-compensation");
        };
        /** returns data on a given company
         *  `Data Weight: 1 per symbol` */
        this.company = function () { return _this.req.request("company"); };
        /**
         *  `Data Weight: 1 per symbol per quote`
         */
        this.delayedQuote = function () { return _this.req.request("delayed-quote"); };
        /**
         * `Data Weight: 10 per symbol per period returned`
         */
        this.dividends = function () { return _this.req.request("dividends"); };
        /** Returns earnings data for a given company including the actual EPS, consensus, and fiscal period. Earnings are available quarterly (last 4 quarters).
         *  `Data Weight: 1000 per symbol per period`
         */
        this.earnings = function () { return _this.req.request("earnings"); };
        /** Provides the latest consensus estimate for the next fiscal period */
        this.estimates = function () {
            return _this.req.request("estimates");
        };
        /** Pulls income statement, balance sheet, and cash flow data from the most recent reported quarter. */
        this.financials = function () { return _this.req.request("financials"); };
        /** Returns latest news for a give stock symbol */
        this.news = function () { return _this.req.request("news"); };
        /**
         * Returns the top 10 fund holders, meaning any firm not defined as buy-side or sell-side such as mutual funds, pension funds, endowments, investment firms, and other large entities that manage funds on behalf of others.
         */
        this.fundOwnership = function () { return _this.req.request("fund-ownership"); };
        /** Pulls income statement data. Available quarterly or annually with the default being the last available quarter. */
        this.income = function () { return _this.req.request("income"); };
        /** Returns the top 10 insiders, with the most recent information. */
        this.insiderRoster = function () { return _this.req.request("insider-roster"); };
        /** Returns aggregated insiders summary data for the last 6 months. */
        this.insiderSummary = function () {
            return _this.req.request("insider-summary");
        };
        /** Returns insider transactions. */
        this.insiderTransactions = function () {
            return _this.req.request("insider-transactions");
        };
        /**
        Returns the top 10 institutional holders, defined as buy-side or sell-side firms. */
        this.institutionalOwnership = function () {
            return _this.req.request("institutional-ownership");
        };
        /** This endpoint will return aggregated intraday prices in one minute buckets */
        this.intradayPrices = function () {
            return _this.req.request("intraday-prices");
        };
        /** This is a helper function, but the google APIs url is standardized.  */
        this.logo = function () { return _this.req.request("logo"); };
        /**  This returns 15 minute delayed, last sale eligible trades. */
        this.largestTrades = function () { return _this.req.request("largest-trades"); };
        /** Returns end of day options data */
        this.options = function () { return _this.req.request("options"); };
        /** Returns peer group */
        this.peers = function () { return _this.req.request("peers"); };
        /** Returns previous day adjusted price data for one or more stocks. */
        this.previous = function () { return _this.req.request("previous"); };
        /** Returns price of a stock */
        this.price = function () { return _this.req.request("price"); };
        /** Provides the latest avg, high, and low analyst price target for a symbol. */
        this.priceTarget = function () { return _this.req.request("price-target"); };
        /** Returns the official open and close for a give symbol. The official open is available as soon as 9:45am ET and the official close as soon as 4:15pm ET. Some stocks can report late open or close prices. */
        this.ohlc = function () { return _this.req.request("ohlc"); };
        /**
          This endpoint provides social sentiment data from StockTwits. Data can be viewed as a daily value, or by minute for a given date. */
        this.sentiment = function () { return _this.req.request("sentiment"); };
        this.quote = function () { return _this.req.request("quote"); };
        /** Pulls data from the last four months. */
        this.recommendationTrends = function () {
            return _this.req.request("recommendation-trends");
        };
        this.stats = function () { return _this.req.request("stats"); };
        this.upcomingEvents = function () {
            return _this.req.request("upcoming-events");
        };
        this.upcomingEarnings = function () {
            return _this.req.request("upcoming-earnings");
        };
        this.upcomingDividends = function () {
            return _this.req.request("upcoming-dividends");
        };
        this.upcomingSplits = function () {
            return _this.req.request("upcoming-splits");
        };
        this.upcomingIPOs = function () { return _this.req.request("upcoming-ipos"); };
        this.splits = function () { return _this.req.request("splits"); };
        this.shortInterest = function () { return _this.req.request("short-interest"); };
        /** This returns 15 minute delayed and 30 day average consolidated volume percentage of a stock, by market. This call will always return 13 values, and will be sorted in ascending order by current day trading volume percentage. */
        this.volumeByVenue = function () {
            return _this.req.request("volume-by-venue");
        };
        this.req = req;
    }
    return Stocks;
}());
exports.default = Stocks;