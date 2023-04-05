
export interface NewsResponse {
    status:       string;
    totalResults: number;
    articles:     Article[];
}

export interface Article {
    source:      Source;
    author:      null | string;
    title:       string;
    description: null | string;
    url:         string;
    urlToImage:  undefined | string;
    publishedAt: Date;
    content:     null | string;
}

export interface Source {
    id:   null | string;
    name: string;
}

export interface ISkeletion {
    number: number;
    animation?: SkeletonAnimation | false ;
}

export enum SkeletonAnimation {
    Pulse = 'pulse',
    Wave = 'wave',
  }