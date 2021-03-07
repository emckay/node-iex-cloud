"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var deep_1 = require("./deep");
var timeSeries_1 = require("./timeSeries");
var forex_1 = require("./forex");
var batch_1 = require("./batch");
var Stock = /** @class */ (function () {
    function Stock(req) {
        var _this = this;
        /** returns balance sheet data. Available quarterly or annually with the default being the last available quarter
         * `Data Weight: 3000`
         */
        this.balanceSheet = function (period, last) {
            return _this.req.request("balance-sheet" + (period ? "?period=" + period : "") + (last ? "&last=" + last : ""));
        };
        /** batch returns multipe data-types for a give stock symbol */
        // public batch = (...params: any): Promise<any> => {
        //   return this.req.response(this.req.batchParams, params);
        // };
        /** batch returns multipe data-types for a give stock symbol */
        this.batch = function () {
            return _this.iexBatch;
        };
        this.deep = function () {
            _this.req.datatype = "deep";
            return _this.iexDeep;
        };
        this.timeSeries = function () {
            _this.req.datatype = "time-series";
            return _this.timeseries;
        };
        this.forex = function () {
            _this.req.datatype = "fx";
            return _this.iexForex;
        };
        /**
         * returns book value for a given stock
         * `Data Weight: 1 per quote returned`
         */
        this.book = function () {
            return _this.req.request("book");
        };
        /** TOPS provides IEX’s aggregated best quoted bid and offer position in near real time for all securities on IEX’s displayed limit order book. TOPS is ideal for developers needing both quote and trade data. */
        this.tops = function () {
            _this.req.datatype = "tops";
            return _this.req.request(_this.req.stockSymbols ? "?symbols=" + _this.req.stockSymbols : "");
        };
        /**
         * Returns adjusted and unadjusted historical data for up to 15 years.
         * `Data Weight: 1,000 per symbol per period`
         */
        this.chart = function (range, params) {
            // if range is 'date' & there's a 'date' param
            if (range === "date" && params && params.date) {
                var keys_1 = Object.keys(params);
                var paramsString = keys_1.length > 1
                    ? "?" + keys_1.reduce(function (str, key, i) {
                        if (key !== "date") {
                            return "" + str + key + "=" + params[key] + (i < keys_1.length - 1 ? "&" : "");
                        }
                        return str;
                    }, "")
                    : "";
                return _this.req.request("chart/" + range + "/" + params.date + paramsString);
            }
            // in any other case
            var values = params && Object.entries(params);
            return _this.req.request("chart/" + range + (params
                ? "?" + values.map(function (v) { return v[0] + "=" + v[1]; }).join("&")
                : ""));
        };
        /**
         * returns cash flow data. Available quarterly or annually, with the default being the last available quarter.
         *
         * `Data Weight: 1,000 per symbol per period`
         */
        this.cashFlow = function (period, last) {
            if (period === void 0) { period = "quarterly"; }
            return _this.req.request("cash-flow?period=" + period + "&last=" + last);
        };
        /** returns Ceo Compensation */
        this.ceoCompensation = function () {
            return _this.req.request("ceo-compensation");
        };
        /** returns data on a given company
         *  `Data Weight: 1 per symbol`
         */
        this.company = function () {
            return _this.req.request("company");
        };
        /**
         *  returns the 15 minute delayed market quote.
         *   `Data Weight: 1 per symbol per quote`
         */
        this.delayedQuote = function (oddLot) {
            return _this.req.request("delayed-quote?oddLot=" + oddLot);
        };
        /**
         * Provides basic dividend data for US equities, ETFs, and Mutual Funds for the last 5 years. For 13+ years of history, comprehensive data, and international dividends, use the Advanced Dividends endpoint.
         * `Data Weight: 10 per symbol per period returned`
         */
        this.dividends = function (range) {
            return _this.req.request("dividends" + (range ? "/" + range : ""));
        };
        /** Returns earnings data for a given company including the actual EPS, consensus, and fiscal period. Earnings are available quarterly (last 4 quarters).
         *  `Data Weight: 1000 per symbol per period`
         */
        this.earnings = function (last, field) {
            return _this.req.request("earnings" + (last ? "/" + last : "") + (field ? "/" + field : ""));
        };
        /** Provides the latest consensus estimate for the next fiscal period */
        this.estimates = function () {
            return _this.req.request("estimates");
        };
        /** Pulls income statement, balance sheet, and cash flow data from the most recent reported quarter. */
        this.financials = function (period) {
            if (period === void 0) { period = "quarterly"; }
            return _this.req.request("financials?period=" + period);
        };
        /** Returns latest news for a give stock symbol */
        this.news = function (last) {
            if (last === void 0) { last = 10; }
            return _this.req.request("news/last/" + last);
        };
        /**
         * Returns the top 10 fund holders, meaning any firm not defined as buy-side or sell-side such as mutual funds, pension funds, endowments, investment firms, and other large entities that manage funds on behalf of others.
         */
        this.fundOwnership = function () {
            return _this.req.request("fund-ownership");
        };
        /** Pulls income statement data. Available quarterly or annually with the default being the last available quarter. */
        this.income = function (period, last) {
            return _this.req.request("income" + (period ? "?period=" + period : "") + (last ? "&last=" + last : ""));
        };
        /** Returns the top 10 insiders, with the most recent information. */
        this.insiderRoster = function () {
            return _this.req.request("insider-roster");
        };
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
        this.logo = function () {
            return _this.req.request("logo");
        };
        /**  This returns 15 minute delayed, last sale eligible trades. */
        this.largestTrades = function () {
            return _this.req.request("largest-trades");
        };
        /** Returns end of day options data */
        this.options = function (expiration, optionSide) {
            if (expiration === void 0) { expiration = ""; }
            return _this.req.request("options" + (expiration ? "/" + expiration : "") + (optionSide ? "/" + optionSide : ""));
        };
        /** Returns peer group */
        this.peers = function () {
            return _this.req.request("peers");
        };
        /** Returns previous day adjusted price data for one or more stocks. */
        this.previous = function () {
            return _this.req.request("previous");
        };
        /** Returns price of a stock */
        this.price = function () {
            return _this.req.request("price");
        };
        /** Provides the latest avg, high, and low analyst price target for a symbol. */
        this.priceTarget = function () {
            return _this.req.request("price-target");
        };
        /** Returns the official open and close for a give symbol. The official open is available as soon as 9:45am ET and the official close as soon as 4:15pm ET. Some stocks can report late open or close prices. */
        this.ohlc = function () {
            return _this.req.request("ohlc");
        };
        /**
      This endpoint provides social sentiment data from StockTwits. Data can be viewed as a daily value, or by minute for a given date. */
        this.sentiment = function (type, date) {
            if (type === void 0) { type = "daily"; }
            if (date === void 0) { date = null; }
            return _this.req.request("sentiment/" + type + (date ? "/" + date : ""));
        };
        this.quote = function (field) {
            if (field === void 0) { field = ""; }
            return _this.req.request("quote/" + (field ? field : ""));
        };
        /** Pulls data from the last four months. */
        this.recommendationTrends = function () {
            return _this.req.request("recommendation-trends");
        };
        this.stats = function (stat) {
            if (stat === void 0) { stat = ""; }
            return _this.req.request("stats/" + stat);
        };
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
        this.upcomingIPOs = function () {
            return _this.req.request("upcoming-ipos");
        };
        this.splits = function (range) {
            if (range === void 0) { range = "1m"; }
            return _this.req.request("splits/" + range);
        };
        this.shortInterest = function (date) {
            if (date === void 0) { date = ""; }
            return _this.req.request("short-interest/" + date);
        };
        /** This returns 15 minute delayed and 30 day average consolidated volume percentage of a stock, by market. This call will always return 13 values, and will be sorted in ascending order by current day trading volume percentage. */
        this.volumeByVenue = function () {
            return _this.req.request("volume-by-venue");
        };
        this.req = req;
        this.iexDeep = new deep_1.default(req);
        this.timeseries = new timeSeries_1.default(req);
        this.iexForex = new forex_1.default(req);
        this.iexBatch = new batch_1.default(req);
    }
    return Stock;
}());
exports.default = Stock;