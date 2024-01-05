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