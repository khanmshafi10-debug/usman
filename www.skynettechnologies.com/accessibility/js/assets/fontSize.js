import {
    t as e,
    j as t,
    w as i,
    a as o,
    q as s,
    g as r,
    s as a,
    b as n,
    r as c
} from "./widget.js";
import "./preload-helper.js";
let l = !0,
    d = !1;
const u = ["mousegrid-toast", "mousegrid-show-btn", "mousegrid-back-btn", "mousegrid-number", "mousegrid-cell", "mousegrid-overlay", "mousegrid-wrapper"];

function b(e, t) {
    const i = e.className;
    return "string" == typeof i && t.some(t => "pinned-layer" === t ? i.includes("pinned-layer") : e.classList.contains(t))
}
const f = async () => {
    if (d) return;
    const i = document.querySelector(".aioa-widget-wrapper"),
        o = document.querySelector("#hide-interface-error-modal");
    return e.forEach(e => {
        const s = document.querySelectorAll(`body ${e}`);
        s.length && s.forEach(e => {
            if (i && !t(i, e) && !t(o, e) && !e.getAttribute("data-original-font-size") && !b(e, u)) {
                let t = 0;
                t = parseFloat(window.getComputedStyle(e, null).getPropertyValue("font-size")), e.setAttribute("data-original-font-size", t.toString())
            }
        })
    }), d = !0, new Promise(e => {
        setTimeout(e, 0)
    })
};

function m(e) {
    const t = document.querySelector('div[data-accessibility="font_size"] button.accessibility-scale-decrease'),
        s = document.querySelector('div[data-accessibility="font_size"] button.accessibility-scale-increase');
    if (t ? .removeAttribute("disabled"), i.font_size >= 150) return void s ? .setAttribute("disabled", "disabled");
    const r = e.getAttribute("aria-label");
    r && o(r, "Enable", 1), g(10)
}

function y(e) {
    const t = document.querySelector('div[data-accessibility="font_size"] button.accessibility-scale-decrease'),
        s = document.querySelector('div[data-accessibility="font_size"] button.accessibility-scale-increase');
    if (i.font_size <= 20) return void t ? .setAttribute("disabled", "disabled");
    s ? .removeAttribute("disabled");
    const r = e.getAttribute("aria-label");
    r && o(r, "Enable", 1), g(-10)
}

function g(o) {
    if (i.font_size) {
        const d = document.querySelector(".aioa-widget-wrapper"),
            m = document.querySelector("#hide-interface-error-modal");
        s();
        const y = () => {
            setTimeout(() => {
                e.forEach(e => {
                    const s = document.querySelectorAll(`body ${e}`);
                    s.length && s.forEach(e => {
                        if (d && !t(d, e) && !t(m, e) && !b(e, u)) {
                            let t = 0;
                            const s = e.getAttribute("data-original-font-size");
                            if (!s) return;
                            t = parseFloat(s);
                            const r = t * ((i.font_size + o) / 100);
                            e.style.setProperty("font-size", r + "px", "important")
                        }
                    })
                });
                let s = i.font_size + o;
                s = Math.min(Math.max(s, 20), 150);
                const l = document.querySelector('div[data-accessibility="font_size"] span.accessibility-scale-current');
                l && (l.textContent = s.toString() + "%", l.setAttribute("data-font-size", s.toString()));
                const f = r();
                f && Object.keys(f).length > 0 && f && a({ ...n(f),
                    font_size: s ? ? 0
                }), c()
            }, 200), l = !1
        };
        l ? f().then(() => {
            y()
        }) : y()
    }
}
export {
    g as changeFontSize, y as decreaseFontSize, m as increaseFontSize, f as initFontSize
};