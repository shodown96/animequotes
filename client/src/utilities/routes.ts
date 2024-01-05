import { RouteObject } from "react-router-dom";
import { Home, QuoteDetails, Quotes } from "../pages";
import AppConfig from "./config";

export const routes: RouteObject[] = [
    {
        path: '/',
        Component: Home
    },
    {
        path: AppConfig.PATHS.Quotes.Base,
        Component: Quotes
    },
    {
        path: AppConfig.PATHS.Quotes.Detail,
        Component: QuoteDetails
    },
]