import {
    t as e,
    j as t,
    w as i,
    a as o,
    q as r,
    g as n,
    s as a,
    b as l,
    r as s
} from "./widget.js";
import "./preload-helper.js";
let c = !0;
const d = ["mousegrid-toast", "mousegrid-show-btn", "mousegrid-back-btn", "mousegrid-number", "mousegrid-cell", "mousegrid-overlay", "mousegrid-wrapper"];

function u(e, t) {
    const i = e.className;
    return "string" == typeof i && t.some(t => "pinned-layer" === t ? i.includes("pinned-layer") : e.classList.contains(t))
}
const g = async () => {
    const i = document.querySelector(".aioa-widget-wrapper"),
        o = document.querySelector("#hide-interface-error-modal");
    return e.forEach(e => {
        const r = document.querySelectorAll(`body ${e}`);
        r.length && r.forEach(e => {
            if (i && !t(i, e) && !t(o, e) && !u(e, d)) {
                let t = window.getComputedStyle(e, null).getPropertyValue("line-height");
                if ("normal" === t) {
                    const i = window.getComputedStyle(e, null).getPropertyValue("font-size");
                    t = (1.2 * parseFloat(i)).toString()
                }
                const i = parseFloat(t);
                e.setAttribute("data-original-line-height", i.toString())
            }
        })
    }), new Promise(e => setTimeout(e, 0))
};

function h(e) {
    const t = document.querySelector('div[data-accessibility="line_height"] button.accessibility-scale-decrease'),
        r = document.querySelector('div[data-accessibility="line_height"] button.accessibility-scale-increase');
    if (t ? .removeAttribute("disabled"), i.line_height >= 150) return void r ? .setAttribute("disabled", "disabled");
    const n = e.getAttribute("aria-label");
    n && o(n, "Enable", 1), m(10)
}

function b(e) {
    const t = document.querySelector('div[data-accessibility="line_height"] button.accessibility-scale-decrease'),
        r = document.querySelector('div[data-accessibility="line_height"] button.accessibility-scale-increase');
    if (i.line_height <= 20) return void t ? .setAttribute("disabled", "disabled");
    r ? .removeAttribute("disabled");
    const n = e.getAttribute("aria-label");
    n && o(n, "Enable", 1), m(-10)
}

function m(o) {
    if (i.line_height) {
        const h = document.querySelector(".aioa-widget-wrapper"),
            b = document.querySelector("#hide-interface-error-modal");
        r();
        const m = () => {
            setTimeout(() => {
                e.forEach(e => {
                    const r = document.querySelectorAll(`body ${e}`);
                    r.length && r.forEach(e => {
                        if (h && !t(h, e) && !t(b, e) && !u(e, d)) {
                            let t = 0;
                            const r = e.getAttribute("data-original-line-height");
                            if (r) t = parseFloat(r);
                            else {
                                let i = window.getComputedStyle(e, null).getPropertyValue("line-height");
                                if ("normal" === i) {
                                    const t = window.getComputedStyle(e, null).getPropertyValue("font-size");
                                    i = (1.2 * parseFloat(t)).toString()
                                }
                                t = parseFloat(i), e.setAttribute("data-original-line-height", t.toString())
                            }
                            const n = t * ((i.line_height + o) / 100);
                            e.style.setProperty("line-height", `${n}px`, "important")
                        }
                    })
                });
                let r = i.line_height + o;
                r = Math.min(Math.max(r, 20), 150);
                const c = document.querySelector('div[data-accessibility="line_height"] span.accessibility-scale-current');
                c && (c.textContent = r.toString() + "%", c.setAttribute("data-line-height", r.toString()));
                const g = n();
                g && Object.keys(g).length > 0 && g && a({ ...l(g),
                    line_height: r ? ? 0
                }), s()
            }, 200), c = !1
        };
        c ? g().then(() => m()) : m()
    }
}
export {
    m as changeLineHeight, b as decreaseLineHeight, h as increaseLineHeight, g as initLineHeight
};