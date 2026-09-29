const e = function() {
        const e = "undefined" != typeof document && document.createElement("link").relList;
        return e && e.supports && e.supports("modulepreload") ? "modulepreload" : "preload"
    }(),
    t = {},
    n = function(n, r, o) {
        let s = Promise.resolve();
        if (r && r.length > 0) {
            const n = document.getElementsByTagName("link"),
                l = document.querySelector("meta[property=csp-nonce]"),
                c = l ? .nonce || l ? .getAttribute("nonce");
            s = Promise.all(r.map(r => {
                if ((r = function(e) {
                        return "https://www.skynettechnologies.com/accessibility/js/" + e
                    }(r)) in t) return;
                t[r] = !0;
                const s = r.endsWith(".css"),
                    l = s ? '[rel="stylesheet"]' : "";
                if (!!o)
                    for (let e = n.length - 1; e >= 0; e--) {
                        const t = n[e];
                        if (t.href === r && (!s || "stylesheet" === t.rel)) return
                    } else if (document.querySelector(`link[href="${r}"]${l}`)) return;
                const i = document.createElement("link");
                return i.rel = s ? "stylesheet" : e, s || (i.as = "script", i.crossOrigin = ""), i.href = r, c && i.setAttribute("nonce", c), document.head.appendChild(i), s ? new Promise((e, t) => {
                    i.addEventListener("load", e), i.addEventListener("error", () => t(new Error(`Unable to preload CSS for ${r}`)))
                }) : void 0
            }))
        }
        return s.then(() => n()).catch(e => {
            const t = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (t.payload = e, window.dispatchEvent(t), !t.defaultPrevented) throw e
        })
    };
export {
    n as _
};