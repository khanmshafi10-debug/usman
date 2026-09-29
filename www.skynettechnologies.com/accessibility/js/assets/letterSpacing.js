import {
    t as e,
    j as t,
    w as a,
    a as i,
    q as s,
    g as r,
    s as c,
    b as n,
    r as o
} from "./widget.js";
import "./preload-helper.js";
const l = ["mousegrid-toast", "mousegrid-show-btn", "mousegrid-back-btn", "mousegrid-number", "mousegrid-cell", "mousegrid-overlay", "mousegrid-wrapper"];

function d(e, t) {
    const a = e.className;
    return "string" == typeof a && t.some(t => "pinned-layer" === t ? a.includes("pinned-layer") : e.classList.contains(t))
}
const u = ["fa", "fas", "far", "fal", "fab", "fad"];
let g = !0;
const b = async () => {
    const a = document.querySelector(".aioa-widget-wrapper"),
        i = document.querySelector("#hide-interface-error-modal");
    return e.forEach(e => {
        const s = document.querySelectorAll(`body ${e}`);
        s.length && s.forEach(e => {
            if (a && !t(a, e) && !t(i, e) && !d(e, l)) {
                let t = window.getComputedStyle(e, null).getPropertyValue("letter-spacing");
                "normal" === t && (t = "0");
                const a = parseFloat(t);
                e.setAttribute("data-original-letter-spacing", a.toString())
            }
        })
    }), new Promise(e => setTimeout(e, 0))
};

function p(e) {
    const t = document.querySelector('div[data-accessibility="letter_spacing"] button.accessibility-scale-decrease'),
        s = document.querySelector('div[data-accessibility="letter_spacing"] button.accessibility-scale-increase');
    if (t ? .removeAttribute("disabled"), a.letter_spacing >= 150) return void s ? .setAttribute("disabled", "disabled");
    const r = e.getAttribute("aria-label");
    r && i(r, "Enable", 1), y(10)
}

function m(e) {
    const t = document.querySelector('div[data-accessibility="letter_spacing"] button.accessibility-scale-decrease'),
        s = document.querySelector('div[data-accessibility="letter_spacing"] button.accessibility-scale-increase');
    if (a.letter_spacing <= 20) return void t ? .setAttribute("disabled", "disabled");
    s ? .removeAttribute("disabled");
    const r = e.getAttribute("aria-label");
    r && i(r, "Enable", 1), y(-10)
}

function y(i) {
    if (a.letter_spacing) {
        const p = document.querySelector(".aioa-widget-wrapper"),
            m = document.querySelector("#hide-interface-error-modal");
        s();
        const y = () => {
            setTimeout(() => {
                e.forEach(e => {
                    const s = document.querySelectorAll(`body ${e}`);
                    s.length && s.forEach(e => {
                        var s;
                        if ((s = e) && "classList" in s && (u.some(e => s.classList.contains(e)) || Array.from(s.classList).some(e => e.startsWith("fa-")))) e.style.letterSpacing = "0px";
                        else if (p && !t(p, e) && !t(m, e) && !d(e, l)) {
                            let t = 0;
                            const s = e.getAttribute("data-original-letter-spacing");
                            if (s) t = parseFloat(s);
                            else {
                                let a = window.getComputedStyle(e, null).getPropertyValue("letter-spacing");
                                "normal" === a && (a = "0"), t = parseFloat(a), e.setAttribute("data-original-letter-spacing", t.toString())
                            }
                            const r = t + (a.letter_spacing + i - 100) / 10;
                            e.style.letterSpacing = r + "px"
                        }
                    })
                });
                let s = a.letter_spacing + i;
                s = Math.min(Math.max(s, 20), 150);
                const g = document.querySelector('div[data-accessibility="letter_spacing"] span.accessibility-scale-current');
                g && (g.textContent = s.toString() + "%", g.setAttribute("data-letter-spacing", s.toString()));
                const b = r();
                b && Object.keys(b).length > 0 && b && c({ ...n(b),
                    letter_spacing: s ? ? 0
                }), o()
            }, 200), g = !1
        };
        g ? b().then(() => y()) : y()
    }
}
export {
    y as changeLetterSpacing, m as decreaseLetterSpacing, p as increaseLetterSpacing, b as initLetterSpacing
};