import { toast } from "react-toastify"
import AppConfig from "./config"

export const handleAxiosError = (e: any) => {
    console.log(e)
    if (e?.data?.message) {
        toast.error(e.data.message)
    } else if (typeof (e) === 'string') {
        toast.error(e)
    } else {
        toast.error(AppConfig.ERROR_MESSAGES.ServerError)
    }
}

import { StringMap } from "../interfaces";

export const objectToQueryString = (obj: StringMap) => {
    const keyValuePairs = [];

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
    }

    return keyValuePairs.join('&');
}