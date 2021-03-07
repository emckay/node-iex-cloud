export interface DailySentiment {
    sentiment?: number;
    totalScores?: number;
    positive?: number;
    negative?: number;
}
export interface MinuteSentiment extends DailySentiment {
    minute: number;
}
export declare type SentimentType = "daily" | "minute";
