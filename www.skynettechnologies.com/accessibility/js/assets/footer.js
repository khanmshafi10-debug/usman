const e = e => {
        let t = !1;
        (e.offsetWidth || e.offsetHeight || e.getClientRects().length) && (t = !0);
        let o = e;
        for (; o.parentNode && "body" != o.parentNode.nodeName.toLowerCase();)
            if (o = o.parentNode, "none" === window.getComputedStyle(o).display || "hidden" === window.getComputedStyle(o).visibility) {
                t = !1;
                break
            }
        return t
    },
    t = () => {
        let t, o = document.querySelectorAll("footer, *[role='contentinfo'], .footer, .section-footer");
        if (o.length)
            for (var r = o.length - 1; r >= 0; r--)
                if (e(o[r]) && "" !== o[r].textContent.trim() && !o[r].closest(".aioa-widget-wrapper")) {
                    t = o[r];
                    break
                }
        if (!t && document.querySelectorAll("a").length) {
            const o = document.querySelectorAll("a");
            for (let r = o.length - 1; r >= 0; r--)
                if (e(o[r]) && !o[r].closest(".aioa-widget-wrapper")) {
                    t = o[r];
                    break
                }
        }
        return t ? (t.setAttribute("tabindex", "-1"), t.getAttribute("id") ? t.getAttribute("id").toString() : (t.setAttribute("id", "aioa_footer"), "aioa_footer")) : ""
    };
export {
    t as g, e as i
};