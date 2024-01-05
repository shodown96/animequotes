import { ButtonHTMLAttributes } from "react";

export interface IQuoteItem {
    quote: IQuote,
    onClick?: (e: any) => void
}

export interface IQuote {
    id: string,
    anime: string;
    character: string;
    quote: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: any,
    theme?: "primary" | "outline",
    children?: any,
    size?: "lg" | "xl" | "md" | "default",
}

export interface PaginationProps {
    pages: number,
    currentPage: number,
    total?: number,
    setPage: (page: number) => void
}

export interface SearchbarProps {
    searchTerm: string,
    setSearchTerm: (value: string) => void
}

export interface StringMap {
    [key: string]: any
}

export interface QuotesQueryMap {
    filterType?: string;
    title?: string;
    name?: string;
    page?: number;
    pageSize?: number;
    fetchNew?: boolean;
}