import {
    l as t
} from "./widget.js";
import "./preload-helper.js";
const e = new FormData;
e.append("website_url", window.location.hostname);
const o = t({
    method: "post",
    url: "https://freeada.skynettechnologies.com/api/widget-settings",
    data: e,
    headers: {
        "Content-Type": "multipart/form-data"
    }
});
export {
    o as
    default
};