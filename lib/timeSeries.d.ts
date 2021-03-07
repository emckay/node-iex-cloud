import IEXRequest from "./request";
declare class TimeSeries {
    private req;
    p: string;
    constructor(req: IEXRequest);
    /** This is a meeting where company executives provide information about the company’s performance and its future prospects. */
    analystDay(refId?: string): Promise<any>;
    boardOfDirectorsMeeting(refId?: string): Promise<any>;
    businessUpdate(refId?: string): Promise<any>;
    buyBack(refId?: string): Promise<any>;
    capitalMarketsDay(refId?: string): Promise<any>;
    advancedDistribution(refId?: string): Promise<any>;
    advancedDividends(refId?: string): Promise<any>;
    advancedReturnOnCapital(refId?: string): Promise<any>;
    advancedRights(refId?: string): Promise<any>;
    advancedRightsToPurchase(refId?: string): Promise<any>;
    advancedSecurityReclassification(refId?: string): Promise<any>;
    advancedSecuritySwap(refId?: string): Promise<any>;
    advancedSpinOff(refId?: string): Promise<any>;
    advancedSplits(refId?: string): Promise<any>;
}
export default TimeSeries;