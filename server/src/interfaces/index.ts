export interface Quote {
    anime: string;
    character: string;
    quote: string;
}
export interface QuotesQueryMap {
    filterType?: string;
    title?: string;
    name?: string;
    page?: number;
    pageSize?: number;
    fetchNew?: boolean;
}

export interface StringMap {
    [key: string]: any
}