
export interface Article extends BaseData {
    headline: string;
    summary:  string;
    analysis: string;
    link:     string;
}

export interface BaseData {
    id: number;
}