import {
    _ as t
} from "./preload-helper.js";
import {
    s as e
} from "./i18next.js";
import {
    i,
    w as o,
    f as n,
    U as a,
    a as s,
    g as r,
    s as l,
    b as c,
    d,
    c as _,
    e as g,
    u as p
} from "./widget.js";
import {
    g as m
} from "./footer.js";
import {
    resetColorContrastStyles as u,
    initContrastAdjustments as w,
    toggleContrast as f
} from "./contrastAdjustments.js";
import {
    i as y
} from "./linkNewTabHandler.js";
import "./colorOptions.js";
const h = "aioa_widget_drag_position",
    b = {
        "top-left": "top_left",
        "top-center": "top_center",
        "top-right": "top_right",
        "bottom-left": "bottom_left",
        "bottom-center": "bottom_center",
        "bottom-right": "bottom_right"
    };
let v = null;
const k = t => {
        const e = t.querySelector(".aioa-trigger-button-tooltip");
        if (!e) return;
        e.classList.remove("aioa-tooltip-left", "aioa-tooltip-right", "aioa-tooltip-top", "aioa-tooltip-bottom");
        const i = t.getBoundingClientRect(),
            {
                width: o,
                height: n
            } = (t => {
                if (v) return v;
                const e = t.style.display,
                    i = t.style.visibility;
                return t.style.display = "block", t.style.visibility = "hidden", v = {
                    width: t.offsetWidth,
                    height: t.offsetHeight
                }, t.style.display = e, t.style.visibility = i, v
            })(e),
            a = window.innerWidth - i.right,
            s = i.left,
            r = i.top,
            l = window.innerHeight - i.bottom;
        if (a >= o + 20) e.classList.add("aioa-tooltip-right");
        else if (s >= o + 20) e.classList.add("aioa-tooltip-left");
        else if (l >= n + 20) e.classList.add("aioa-tooltip-bottom");
        else if (r >= n + 20) e.classList.add("aioa-tooltip-top");
        else {
            const t = Math.max(a, s, l, r);
            t === a ? e.classList.add("aioa-tooltip-right") : t === s ? e.classList.add("aioa-tooltip-left") : t === l ? e.classList.add("aioa-tooltip-bottom") : e.classList.add("aioa-tooltip-top")
        }
    },
    x = () => {
        try {
            const t = localStorage.getItem(h);
            if (!t) return null;
            const e = JSON.parse(t);
            return e && "number" == typeof e.top && "number" == typeof e.left ? e : null
        } catch {
            return null
        }
    },
    E = t => {
        try {
            localStorage.setItem(h, JSON.stringify(t))
        } catch {}
    },
    S = (t, e, i) => Math.min(Math.max(t, e), i),
    L = (t, e) => {
        const i = window.innerWidth / 3,
            o = t < i ? "left" : t < 2 * i ? "center" : "right";
        return `${e<window.innerHeight/2?"top":"bottom"}-${o}`
    },
    D = t => {
        o.user_widget_position = b[t];
        const e = document.getElementById("aioa_accessibility_settings");
        e && (Array.from(e.classList).filter(t => t.startsWith("aioa_")).forEach(t => e.classList.remove(t)), e.classList.add(`aioa_${b[t]}`))
    },
    $ = t => {
        const e = x();
        if (!e) return;
        const i = t.getBoundingClientRect(),
            o = window.innerHeight - i.height - 4,
            n = window.innerWidth - i.width - 4,
            a = S(e.top, 4, Math.max(4, o)),
            s = S(e.left, 4, Math.max(4, n));
        t.style.setProperty("top", `${a}px`, "important"), t.style.setProperty("left", `${s}px`, "important"), t.style.setProperty("bottom", "auto", "important"), t.style.setProperty("right", "auto", "important"), t.style.setProperty("transform", "none", "important"), t.style.position = "fixed";
        const r = e.zone ? ? L(s + i.width / 2, a + i.height / 2);
        D(r)
    },
    z = e => {
        const s = i.t,
            r = Number(localStorage.getItem("widgetHideUntil")),
            l = !(o ? .hideWidget || r && Date.now() < r),
            c = o ? .widget_hide_icon_type,
            d = ["font_size", "letter_spacing", "content_scaling", "line_height"],
            _ = n.some(t => d.includes(t) ? 100 !== o[t] : o[t]);
        let g, p, m = "",
            u = "",
            w = "",
            f = "";
        const y = () => {
            o.is_widget_custom_size ? "aioa-icon-type-13" === o.widget_icon_type ? (g = "", p = "width: auto !important; height: " + o.widget_icon_size_custom + "px !important") : (g = "width:" + (o.widget_icon_size_custom - 10) + "px !important; height: " + (o.widget_icon_size_custom - 10) + "px !important", p = "width:" + o.widget_icon_size_custom + "px !important; height: " + o.widget_icon_size_custom + "px !important") : (p = "", g = "", e && e.classList.add(o.widget_icon_size))
        };
        o.is_mobile_icon && o.isMobile ? o.is_widget_custom_size_mobile ? "aioa-icon-type-13" === o.widget_icon_type ? (g = "", p = "width: auto !important; height: " + o.widget_icon_size_custom_mobile + "px !important") : (g = "width:" + (o.widget_icon_size_custom_mobile - 10) + "px !important; height: " + (o.widget_icon_size_custom_mobile - 10) + "px !important", p = "width:" + o.widget_icon_size_custom_mobile + "px !important; height: " + o.widget_icon_size_custom_mobile + "px !important") : (p = "", g = "", e && e.classList.add(o.widget_icon_size_mobile)) : y(), "aioa-icon-type-13" === o.widget_icon_type && e.classList.add("aioa-text-icon");
        const h = o.isMobile && o.is_mobile_position ? o.widget_position_top_mobile : o.widget_position_top,
            b = o.isMobile && o.is_mobile_position ? o.widget_position_bottom_mobile : o.widget_position_bottom,
            v = o.isMobile && o.is_mobile_position ? o.widget_position_right_mobile : o.widget_position_right,
            z = o.isMobile && o.is_mobile_position ? o.widget_position_left_mobile : o.widget_position_left,
            A = o.isMobile && o.is_mobile_position ? o.widget_position_vertical_center_offset_mobile : o.widget_position_vertical_center_offset,
            I = o.isMobile && o.is_mobile_position ? o.widget_position_horizontal_center_offset_mobile : o.widget_position_horizontal_center_offset;
        null != h && (m = "top: " + h + "px; bottom: auto;", u = "top: 20px;"), null != A && (m += `top: calc(50% + ${A}px);`, m += "bottom: auto;"), null != I && (m += `left: calc(50% + ${I}px);`, m += "right: auto;"), null != I && null != A ? (m += "transform: translate(-50%, -50%);", f += "transform: translate(-50%, -50%) scale(1.1) !important;", u = "top: 50%; left: 50%; transform: translate(-50%, -50%);") : null != I ? (m += "transform: translateX(-50%);", f += "transform: translateX(-50%) scale(1.1) !important;", u = "left: 50%; transform: translateX(-50%);") : null != A && (m += "transform: translateY(-50%);", f += "transform: translateY(-50%) scale(1.1) !important;", u = "top: 50%; transform: translateY(-50%);"), null != b && (m += " bottom: " + b + "px; top: auto;", u += " bottom: 20px;"), null != v && (m += " right: " + v + "px; left: auto;", u += " right: 20px;"), null != z && (m += " left: " + z + "px; right: auto;", u += " left: 20px;"), w = o.is_widget_custom_position || o.is_widget_custom_position_mobile ? ".accessibility-trigger.aioa_custom_position button {" + m + "} .accessibility-trigger.aioa_custom_position button:hover, .accessibility-trigger.aioa_custom_position button:focus {" + f + "}  @media screen and (min-width: 768px) { .accessibility-settings-modal.aioa_custom_position {" + u + "}}" : "", o.is_widget_movable && (w += "\n      .aioa-widget-dragging { transition: none !important; cursor: grabbing !important; }\n      #accessibility_settings_toggle {\n        touch-action: none;\n        pointer-events: auto;\n        -webkit-user-select: none;\n        user-select: none;\n        -webkit-touch-callout: none;\n      }\n      #accessibility_settings_toggle * {\n        pointer-events: none;\n        -webkit-user-drag: none;\n        -khtml-user-drag: none;\n        -moz-user-drag: none;\n        -o-user-drag: none;\n        user-select: none;\n        -webkit-user-select: none;\n      }\n      .aioa-trigger-button-tooltip.aioa-tooltip-right {\n        left: 100% !important; right: auto !important;\n        top: 50% !important; bottom: auto !important;\n        transform: translateY(-50%) !important;\n        margin-left: 10px !important; margin-top: 0 !important;\n      }\n      .aioa-trigger-button-tooltip.aioa-tooltip-left {\n        right: 100% !important; left: auto !important;\n        top: 50% !important; bottom: auto !important;\n        transform: translateY(-50%) !important;\n        margin-right: 10px !important; margin-top: 0 !important;\n      }\n      .aioa-trigger-button-tooltip.aioa-tooltip-bottom {\n        top: 100% !important; bottom: auto !important;\n        left: 50% !important; right: auto !important;\n        transform: translateX(-50%) !important;\n        margin-top: 10px !important; margin-left: 0 !important;\n      }\n      .aioa-trigger-button-tooltip.aioa-tooltip-top {\n        bottom: 100% !important; top: auto !important;\n        left: 50% !important; right: auto !important;\n        transform: translateX(-50%) !important;\n        margin-bottom: 10px !important; margin-left: 0 !important;\n      }\n      /* Arrow: reset the default (top-variant) placement so each side can override cleanly */\n      .aioa-trigger-button-tooltip::before {\n        left: 50%;\n        top: 100%;\n        margin-left: -5px;\n        margin-top: auto;\n        border-color: var(--accessibility-widget-primary-color, $primary) transparent transparent transparent;\n      }\n  \n      /* tooltip sits ABOVE the icon -> arrow points down (this is your original rule, kept explicit) */\n      .aioa-trigger-button-tooltip.aioa-tooltip-top::before {\n        left: 50% !important; top: 100% !important; right: auto !important; bottom: auto !important;\n        margin-left: -5px !important; margin-top: 0 !important;\n        border-color: var(--accessibility-widget-primary-color, $primary) transparent transparent transparent !important;\n      }\n  \n      /* tooltip sits BELOW the icon -> arrow points up */\n      .aioa-trigger-button-tooltip.aioa-tooltip-bottom::before {\n        left: 50% !important; bottom: 100% !important; top: auto !important; right: auto !important;\n        margin-left: -5px !important; margin-bottom: 0 !important;\n        border-color: transparent transparent var(--accessibility-widget-primary-color, $primary) transparent !important;\n      }\n  \n      /* tooltip sits to the RIGHT of the icon -> arrow points left, toward the icon */\n      .aioa-trigger-button-tooltip.aioa-tooltip-right::before {\n        right: 100% !important; left: auto !important;\n        top: 50% !important; bottom: auto !important;\n        margin-top: -5px !important; margin-left: 0 !important;\n        border-color: transparent var(--accessibility-widget-primary-color, $primary) transparent transparent !important;\n      }\n  \n      /* tooltip sits to the LEFT of the icon -> arrow points right, toward the icon */\n      .aioa-trigger-button-tooltip.aioa-tooltip-left::before {\n        left: 100% !important; right: auto !important;\n        top: 50% !important; bottom: auto !important;\n        margin-top: -5px !important; margin-left: 0 !important;\n        border-color: transparent transparent transparent var(--accessibility-widget-primary-color, $primary) !important;\n      }\n    ");
        const T = document.createElement("style");
        T.id = "custom_position_styles_element", T.append(document.createTextNode(w)), document.getElementsByTagName("head")[0].append(T), o.is_widget_text_color || o.darkTextColor && e.classList.add("darkicon");
        const q = o.widget_icon_type ? o.widget_icon_type : "aioa-icon-type-1";
        let O = "";
        O += "aioa-icon-type-13" === q ? "\n      width: 100px !important;\n    " : "\n      clip-path: circle(48% at 50% 50%);\n    ";
        const C = `https://www.skynettechnologies.com/sites/default/files/${q}.svg`;
        let P = "";
        P = o.is_widget_text_color && null !== o.widget_text_color && "" !== o.widget_text_color ? `\n    <img \n      class="accessibility_settings_toggle_icon"\n      draggable="false"\n      style="\n        ${g};\n        background-color: var(--accessibility-widget-text-color, $white) !important;\n\n        -webkit-mask: url('${C}') no-repeat center;\n        mask: url('${C}') no-repeat center;\n\n        -webkit-mask-size: contain;\n        mask-size: contain;\n\n        ${O}\n      ">\n    </img>\n  ` : `\n    <img \n      class="accessibility_settings_toggle_icon"\n      src="${C}"\n      alt=""\n      aria-hidden="true"\n      draggable="false"\n      style="${g}"\n    />\n  `, e.innerHTML = "" + (l || _ ? `<div>\n    <button aria-label="Show Accessibility Preferences" aria-pressed="true" aria-controls="aioa_accessibility_settings" id="accessibility_settings_toggle" style="${p}">\n        <span class="aioa-trigger-button-tooltip" data-i18n-key="accessibility">${s("accessibility")}</span>\n        <div class="aioa_loader">\n            <div class="circle-border">\n                <div class="circle-core"></div>\n            </div>\n        </div>\n        ${P}\n        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" class="aioa-feature-on"> <g> <circle fill="#43A047" cx="12.5" cy="12.5" r="12"/> <path fill="#FFFFFF" d="M12.5,1C18.9,1,24,6.1,24,12.5S18.9,24,12.5,24S1,18.9,1,12.5S6.1,1,12.5,1 M12.5,0C5.6,0,0,5.6,0,12.5S5.6,25,12.5,25S25,19.4,25,12.5S19.4,0,12.5,0L12.5,0z"/> </g> <polygon fill="#FFFFFF" points="9.8,19.4 9.8,19.4 9.8,19.4 4.4,13.9 7.1,11.1 9.8,13.9 17.9,5.6 20.5,8.4 "/></svg>\n    </button>\n    </div>` : c && "aioa-hide-icon-type-34" !== c && "aioa-hide-icon-type-1" !== c && null !== c && "0" !== c ? `<div>\n    <button aria-label="Show Accessibility Preferences" aria-pressed="true" aria-controls="aioa_accessibility_settings" id="accessibility_settings_toggle" style="${p}">\n        <span class="aioa-trigger-button-tooltip" data-i18n-key="accessibility">${s("accessibility")}</span>\n        <div class="aioa_loader">\n            <div class="circle-border">\n                <div class="circle-core"></div>\n            </div>\n        </div>\n      ${c&&`<img class="accessibility_settings_toggle_icon" src="https://www.skynettechnologies.com/sites/default/files/${c}.svg" alt="" aria-hidden="true" draggable="false" style="${g}">\n        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" class="aioa-feature-on"> <g> <circle fill="#43A047" cx="12.5" cy="12.5" r="12"/> <path fill="#FFFFFF" d="M12.5,1C18.9,1,24,6.1,24,12.5S18.9,24,12.5,24S1,18.9,1,12.5S6.1,1,12.5,1 M12.5,0C5.6,0,0,5.6,0,12.5S5.6,25,12.5,25S25,19.4,25,12.5S19.4,0,12.5,0L12.5,0z"/> </g> <polygon fill="#FFFFFF" points="9.8,19.4 9.8,19.4 9.8,19.4 4.4,13.9 7.1,11.1 9.8,13.9 17.9,5.6 20.5,8.4 "/></svg>`}\n    </button>\n    </div>` : "");
        const M = document.querySelector("#accessibility_settings_toggle");
        M && (k(M), M.addEventListener("mouseenter", () => k(M)), M.addEventListener("focus", () => k(M))), M ? .addEventListener("click", async e => {
            if (l || _) {
                const {
                    default: e
                } = await t(() =>
                    import ("./openWidget.js"), []);
                e()
            } else a(e)
        }), document.querySelector("#aioa-trigger-button") ? .addEventListener("click", () => {}), document.body.addEventListener("click", () => {}, {
            once: !0
        });
        (() => {
            const t = document.querySelectorAll(".aioa-feature-on");
            o.is_widget_custom_size ? (o.widget_icon_type, t && t.forEach(t => {
                t.style.setProperty("width", o.widget_icon_size_custom / 2 + "px", "important"), t.style.setProperty("height", o.widget_icon_size_custom / 2 + "px", "important")
            })) : t && t.forEach(t => {
                t.style.removeProperty("width"), t.style.removeProperty("height")
            })
        })(), M && o.is_widget_movable ? ($(M), k(M), (t => {
            let e = 0,
                i = 0,
                o = 0,
                n = 0,
                a = !1,
                s = !1;
            const r = r => {
                    const l = r.clientX - e,
                        c = r.clientY - i;
                    if (!a && Math.hypot(l, c) < 5) return;
                    a || (a = !0, s = !0, t.classList.add("aioa-widget-dragging"), t.style.position = "fixed", t.style.setProperty("bottom", "auto", "important"), t.style.setProperty("right", "auto", "important"), t.style.setProperty("transform", "none", "important"));
                    const d = t.getBoundingClientRect(),
                        _ = window.innerHeight - d.height - 4,
                        g = window.innerWidth - d.width - 4,
                        p = S(o + c, 4, Math.max(4, _)),
                        m = S(n + l, 4, Math.max(4, g));
                    t.style.setProperty("top", `${p}px`, "important"), t.style.setProperty("left", `${m}px`, "important")
                },
                l = e => {
                    t.removeEventListener("pointermove", r), t.removeEventListener("pointerup", l), t.removeEventListener("pointercancel", l);
                    try {
                        t.releasePointerCapture(e.pointerId)
                    } catch {}
                    if (a) {
                        t.classList.remove("aioa-widget-dragging");
                        const e = t.getBoundingClientRect(),
                            i = L(e.left + e.width / 2, e.top + e.height / 2);
                        E({
                            top: e.top,
                            left: e.left,
                            zone: i
                        }), D(i), k(t)
                    }
                    a = !1
                };
            t.addEventListener("pointerdown", c => {
                if (void 0 !== c.button && 0 !== c.button) return;
                const d = t.getBoundingClientRect();
                e = c.clientX, i = c.clientY, o = d.top, n = d.left, a = !1, s = !1, t.setPointerCapture(c.pointerId), t.addEventListener("pointermove", r), t.addEventListener("pointerup", l), t.addEventListener("pointercancel", l)
            }), t.addEventListener("click", t => {
                s && (t.stopImmediatePropagation(), t.preventDefault(), s = !1)
            }, !0), window.addEventListener("resize", () => {
                if (!x()) return;
                $(t), k(t);
                const e = t.getBoundingClientRect(),
                    i = L(e.left + e.width / 2, e.top + e.height / 2);
                E({
                    top: e.top,
                    left: e.left,
                    zone: i
                })
            })
        })(M)) : M && k(M);
        const R = async e => {
            e.preventDefault();
            const {
                default: i
            } = await t(() =>
                import ("./openWidget.js"), []);
            i()
        };
        if (o.is_custom_trigger && o.custom_trigger_id) {
            const t = function(t) {
                const e = t.split("|").map(t => t.trim());
                let i = [];
                return e.forEach(t => {
                    i = i.concat(function(t) {
                        var e;
                        switch (/^(\/|\.\/|\(|\/\/)/.test((e = t).trim()) ? "xpath" : e.startsWith(".") ? "class" : /^[a-zA-Z0-9\-_]+$/.test(e) ? "id" : "css") {
                            case "id":
                                {
                                    const e = document.getElementById(t);
                                    return e ? [e] : []
                                }
                            case "class":
                            case "css":
                                return Array.from(document.querySelectorAll(t));
                            case "xpath":
                                {
                                    const e = [],
                                        i = document.evaluate(t, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                                    for (let t = 0; t < i.snapshotLength; t++) {
                                        const o = i.snapshotItem(t);
                                        o instanceof HTMLElement && e.push(o)
                                    }
                                    return e
                                }
                            default:
                                return []
                        }
                    }(t))
                }), i
            }(o.custom_trigger_id);
            t && t.forEach(t => {
                t.addEventListener("click", R)
            })
        }
    },
    A = (t, e) => {
        let i = parseInt(t, 16) - e,
            o = i < 0 ? 0 : i;
        const n = o.toString(16);
        return o = n.length > 1 ? parseInt(n, 16) : parseInt(`0${n}`, 16), o.toString(16).padStart(2, "0")
    };
const I = () => {
    if (!o.widget_color_code) {
        const t = r();
        t && l({ ...c(t),
            widget_color_code: "#420083"
        })
    }
    if (o.widget_color_code) {
        let n = !1;
        const a = o.widget_color_code.includes("#") ? o.widget_color_code : `#${o.widget_color_code}`,
            s = (i = 10, e = (e = a).indexOf("#") >= 0 ? e.substring(1) : e, i = Math.floor(255 * i / 100), `#${A(e.substring(0,2),i)}${A(e.substring(2,4),i)}${A(e.substring(4,6),i)}`),
            d = (t = (t = a).replace("#", ""), `${parseInt(t.substring(0,2),16)},${parseInt(t.substring(2,4),16)},${parseInt(t.substring(4,6),16)}`),
            _ = d.split(","),
            g = r(),
            p = Math.round((299 * parseInt(_[0]) + 587 * parseInt(_[1]) + 114 * parseInt(_[2])) / 1e3),
            m = g.is_widget_text_color && g.widget_text_color ? g.widget_text_color : p > 125 ? "#000000" : "#ffffff";
        n = p > 125;
        const u = document.createElement("style");
        u.id = "accessibility_widget_primary_color", u.append(document.createTextNode(":root{--accessibility-widget-primary-color:" + a + ";--accessibility-widget-primary-color-darken:" + s + ";--accessibility-widget-primary-color-rgb:" + d + ";--accessibility-widget-text-color:" + m + ";--is-primary-white:" + ("#ffffff" === a.toLowerCase() ? "1" : "0") + ";--accessibility-widget-text-color-reverse:" + ("#ffffff" === m.toLowerCase() ? "#000000" : "#ffffff") + ";--accessibility-widget-switch-color:" + ("#ffffff" === a.toLowerCase() ? "#b0bec5" : a) + "}")), document.getElementsByTagName("head")[0].append(u), g && l({ ...c(g),
            darkTextColor: n
        })
    }
    var t, e, i
};
class T {
    target;
    config;
    ob;
    constructor(t, e, i) {
        this.target = t || document, this.config = e || {
            childList: !0,
            subtree: !0
        }, this.ob = new MutationObserver((t, e) => {
            i.call(this, t, e)
        })
    }
    connect() {
        this.ob.observe(this.target, this.config)
    }
    disconnect() {
        this.ob.disconnect()
    }
}
let q = 1e3;
const O = () => {
        const e = document.querySelector('div[data-accessibility="dark_contrast"] button'),
            i = document.querySelector('div[data-accessibility="light_contrast"] button'),
            n = document.querySelector('div[data-accessibility="smart_contrast"] button'),
            a = document.querySelector("#text_color-select li input:checked"),
            s = document.querySelector("#background_color-select li input:checked"),
            r = document.querySelector("#title_color-select li input:checked"),
            l = document.querySelector('div[data-accessibility="font_size"] .accessibility-scale-current'),
            c = document.querySelector('div[data-accessibility="line_height"] .accessibility-scale-current'),
            d = document.querySelector('div[data-accessibility="letter_spacing"] .accessibility-scale-current'),
            _ = document.querySelector("html");
        if (l && "100%" != l.textContent) {
            (async e => {
                const {
                    changeFontSize: i
                } = await t(() =>
                    import ("./fontSize.js"), []);
                i(e)
            })(0)
        }
        if (c && "100%" != c.textContent && setTimeout(() => {
                (async e => {
                    const {
                        changeLineHeight: i
                    } = await t(() =>
                        import ("./lineHeight.js"), []);
                    i(e)
                })(0)
            }, q), d && "100%" != d.textContent) {
            (async e => {
                const {
                    changeLetterSpacing: i
                } = await t(() =>
                    import ("./letterSpacing.js"), []);
                i(e)
            })(0)
        }
        const g = ["latest.dev.corp.npas.lotterywest.wa.gov.au"];
        let p = null;
        e && "true" === e.getAttribute("aria-pressed") ? p = "dark_contrast" : i && "true" === i.getAttribute("aria-pressed") ? p = "light_contrast" : n && "true" === n.getAttribute("aria-pressed") && (p = "smart_contrast");
        let m = null;
        _ ? .classList.contains("dark_contrast") ? m = "dark_contrast" : _ ? .classList.contains("light_contrast") ? m = "light_contrast" : _ ? .classList.contains("smart_contrast") && (m = "smart_contrast");
        const y = m !== p;
        if ((y || o.background_color || o.text_color || o.title_color) && y && (g.includes(window.location.hostname) || u(), _ ? .classList.remove("light_contrast", "dark_contrast", "smart_contrast"), p && _ ? .classList.add(p), w(), p && f(p)), o.background_color && s) {
            const e = s.value;
            if (e && "none" !== e) {
                (async e => {
                    const {
                        setBackgroundColor: i
                    } = await t(() =>
                        import ("./widget.js").then(t => t.R), []);
                    i(e)
                })(e).then(() => {
                    q = 50
                })
            }
        }
        if (o.text_color && a) {
            const e = a.value;
            if (e && "none" !== e) {
                (async e => {
                    const {
                        setTextColor: i
                    } = await t(() =>
                        import ("./widget.js").then(t => t.P), []);
                    i(e)
                })(e).then(() => {
                    q = 50
                })
            }
        }
        if (o.title_color && r) {
            const e = r.value;
            if (e && "none" !== e) {
                (async e => {
                    const {
                        setTitleColor: i
                    } = await t(() =>
                        import ("./widget.js").then(t => t.Q), []);
                    i(e)
                })(e)
            }
        }
        if (o.text_magnifier) {
            (async () => {
                const {
                    initTextMagnifier: e
                } = await t(() =>
                    import ("./widget.js").then(t => t.S), []);
                e()
            })()
        }
    },
    C = d(() => O(), 1e3);

function P() {
    document.documentElement.style.setProperty("--wh", .01 * window.innerHeight + "px")
}
const M = ["tetley.com.au", "organicindia.com.au", "tetley-bd.com", "tetley.ca", "tetleyeesti.com", "tetley.fi", "tetley.fr", "teapigs.com.hk", "tetleytea.hu", "tetley.com.jm", "tetley.lv", "tetley.lt", "tetley.com.mt", "tetleyme.com", "organicindia.nz", "tetley.pl", "vitax.pl", "tetley.pt", "joekels.co.za", "tetley.es", "tetley.se", "tetley.ch", "goodearth.co.uk", "teapigs.co.uk", "tetley.co.uk", "organic-india.co.uk", "tatatrade.co.uk", "earlyrisercoffeeco.com", "eightoclock.com", "goodearth.com", "teapigs.com", "tetleyusa.com", "organicindiausa.com", "tatatea1868.com", "amalgamatedplantations.co.in", "thecoorgfoundation.org", "highrangeschool.com", "himalayanmineralwater.in", "jaagore.com", "kdhptea.com", "rippletea.com", "srishti-trust.org", "tatacoffee.com", "highrangehospital.com", "tataconsumer.com", "tatanutrikorner.com", "tatacoffeegrand.com", "tetley.in", "tatasimplybetter.com", "tatamybistro.com", "capitalfoods.co.in", "tataconsumerspecialistsolutions.com", "organicindia.com"];
var R = {
    VITE_TEST_DOMAIN: "",
    VITE_API_URL: "https://ada.skynettechnologies.us",
    VITE_API_FREE_URL: "https://freeada.skynettechnologies.com",
    VITE_API_URL_VIDEO: "https://www.skynettechnologies.com/",
    VITE_API_URL_SEARCH: "https://www.skynettechnologies.com",
    VITE_API_URL_ASL: "https://www.skynettechnologies.com/accessibility/asl",
    BASE_URL: "https://www.skynettechnologies.com/accessibility/js/",
    MODE: "production",
    DEV: !1,
    PROD: !0,
    SSR: !1
};
const j = document.createElement("div");
if (j.classList.add("aioa-widget-wrapper"), j.setAttribute("data-nosnippet", "true"), _(), null === document.querySelector("#adajs") && null === document.querySelector("#adajs-js")) {
    const tt = "accessibility",
        et = document.querySelector(`script[src^="https://www.skynettechnologies.com/${tt}/js/"][src*="colorcode="][src*="token="]`);
    et && "" == et.id && (et.id = "adajs")
}
let F = "true" === R.VITE_FREE_VERSION ? document.querySelector("#aioa-adawidget") : document.querySelector("#adajs");
var V = null,
    N = null,
    B = null,
    H = null;
if (F ? .src && F ? .src.includes("?")) {
    const it = F ? .src.split("?")[1],
        ot = new URLSearchParams(it);
    ot.get("position") && (V = ot.get("position")), ot.get("colorcode") && (N = `${ot.get("colorcode")}`), ot.get("iconsize") && (H = `${ot.get("iconsize")}`), ot.get("icontype") && (B = `${ot.get("icontype")}`)
}

function W(t, e, i = {}) {
    const o = t.Data || {};
    return { ...e,
        ...c(e),
        features: t.data_feature,
        dynamicCommand: t.voice_command,
        filterContentLandMark: t.content_custom_option ? ? [],
        custom_plans: t.addon_data ? ? null,
        focus_indicator: t.focus_indicator ? ? !1,
        summarize_page: t.summarize_page ? ? !1,
        subtitle_on_video: t.subtitle_on_video ? ? !1,
        website_id: o.id ? ? 0,
        sign_language_font: t.sign_language_font ? ? !1,
        widget_text_color: o.widget_text_color ? ? null,
        is_widget_text_color: 1 === o.is_widget_text_color,
        adobe_key: o.adobe_key,
        ga_key: o.ga_key,
        is_custome_branding: o.is_custome_branding,
        is_mobile_icon: o.is_mobile_icon,
        is_widget_custom_position: o.is_widget_custom_position,
        is_widget_custom_position_mobile: o.is_widget_custom_position_mobile ? ? !1,
        is_widget_custom_size: o.is_widget_custom_size,
        is_widget_custom_size_mobile: o.is_widget_custom_size_mobile,
        statement_link: o.statement_link,
        widget_icon_size: o.widget_icon_size,
        widget_icon_size_custom: o.widget_icon_size_custom,
        widget_icon_size_custom_mobile: o.widget_icon_size_custom_mobile,
        widget_icon_size_mobile: o.widget_icon_size_mobile,
        widget_icon_type: o.widget_icon_type ? ? B,
        widget_hide_icon_type: o.widget_hide_icon_type,
        widget_position_bottom: o.widget_position_bottom,
        widget_position_left: o.widget_position_left,
        widget_position_right: o.widget_position_right,
        widget_position_top: o.widget_position_top,
        is_widget_movable: o.is_widget_movable ? ? !1,
        widget_position_horizontal_center_offset: o.widget_position_horizontal_center_offset ? ? null,
        widget_position_vertical_center_offset: o.widget_position_vertical_center_offset ? ? null,
        is_mobile_position: !(!o.is_mobile_position || 1 !== o.is_mobile_position),
        widget_position_mobile: o.widget_position_mobile ? ? null,
        widget_position_bottom_mobile: o.widget_position_bottom_mobile ? ? null,
        widget_position_left_mobile: o.widget_position_left_mobile ? ? null,
        widget_position_right_mobile: o.widget_position_right_mobile ? ? null,
        widget_position_top_mobile: o.widget_position_top_mobile ? ? null,
        widget_position_horizontal_center_offset_mobile: o.widget_position_horizontal_center_offset_mobile ? ? null,
        widget_position_vertical_center_offset_mobile: o.widget_position_vertical_center_offset_mobile ? ? null,
        oversize_widget: o.widget_size,
        report_problem_link: o.report_problem_link,
        user_oversize_widget: null === e.user_oversize_widget ? o.widget_size : e.user_oversize_widget,
        is_white_label: o.is_white_label ? ? !1,
        default_language: o.default_language,
        default_voice: o.default_voice,
        live_site_translate: o.live_site_translate,
        is_custom_trigger: o.is_custom_trigger ? ? !1,
        custom_trigger_id: o.custom_trigger_id ? ? null,
        mobile_visibility: o.mobile_visibility ? ? 1,
        is_sound_disabled: !(!o.is_sound_disabled || 1 !== o.is_sound_disabled),
        no_data_found: !(Object.keys(o).length > 0),
        widget_leave_page: !(!o.widget_leave_page || 1 !== o.widget_leave_page),
        fromAPI: !0,
        ...i
    }
}
const U = Number(localStorage.getItem("widgetHideUntil"));

function Y() {
    const t = document.querySelector("html");
    let i = t ? .getAttribute("lang");
    if (!i) return null;
    "iw" === i && (i = "he");
    const o = i.toLowerCase();
    if (e.includes(o)) return o;
    const n = i.slice(0, 2).toLowerCase();
    return e.includes(n) ? n : null
}

function X() {
    const t = Y();
    t ? t !== o.active_language && l({ ...c(o),
        active_language: t
    }) : o.active_language || (1 !== o.is_free_widget && o.default_language ? l({ ...c(o),
        active_language: o.default_language
    }) : l({ ...c(o),
        active_language: "en"
    }))
}
if (function() {
        const t = document.documentElement;
        if (!t) return;
        let e = t.getAttribute("lang");
        new MutationObserver(n => {
            for (const a of n) {
                if ("lang" !== a.attributeName) continue;
                const n = t.getAttribute("lang");
                if (n === e) continue;
                if (e = n, !n) continue;
                const s = Y();
                s && (s !== o.active_language && (l({ ...c(o),
                    active_language: s
                }), i.isInitialized && i.language !== s && i.changeLanguage(s), document.querySelectorAll(".aioa-widget-wrapper [lang], .aioa-widget-wrapper[lang]").forEach(t => t.setAttribute("lang", s))))
            }
        }).observe(t, {
            attributes: !0,
            attributeFilter: ["lang"]
        })
    }(), !((() => {
        const t = document.querySelector("body");
        return !(!t || !(t.classList.contains("elementor-editor-active") || t.classList.contains("compose-mode") || t.classList.contains("et-fb")))
    })() || o.isMobile && void 0 !== o.mobile_visibility && 1 !== o.mobile_visibility)) {
    var G = "",
        J = "aioa_bottom_right",
        Q = "aioa-icon-type-1",
        Z = "aioa-medium-icon";
    let nt = !1;
    if ("" != Q && null != Q || (Q = "aioa-icon-type-1"), "" != Z && null != Z || (Z = "aioa-medium-icon"), window.location.hostname.includes("skynettechnologies.com") && document.documentElement.setAttribute("data-site", "skynettechnologies"), "https://aem-uat.pnbmetlife.com" === window.location.origin) {
        const rt = document.querySelector("html");
        rt ? .classList.add("pnbmetlife")
    }
    if ("https://dahlmedicalsupply.com" === window.location.origin) {
        const lt = document.querySelector("html");
        lt ? .classList.add("dahlmedicalsupply")
    }
    if ("https://newgrowthpress.com/" === window.location.origin) {
        const ct = document.querySelector("html");
        ct ? .classList.add("newgrowthpress")
    }
    if ("www.rarediseasesnetwork.org" === window.location.hostname) {
        const dt = document.querySelector("html");
        dt ? .classList.add("rarediseasesnetwork")
    }
    if ("https://polosplus.com" === window.location.origin) {
        const _t = document.querySelector("html");
        _t ? .classList.add("polosplus")
    }
    if ("https://team1p.com" === window.location.origin) {
        const gt = document.querySelector("html");
        gt ? .classList.add("team1p")
    }
    if ("https://www.murphycarterlaw.com" === window.location.origin && o.isMobile) {
        const pt = document.createElement("style");
        pt.innerHTML = "\n        #comp-mcsu5yhe_r_comp-mcsl5gzi1 {\n            pointer-events: auto !important;\n        }\n        ", document.head.appendChild(pt)
    }
    if ("www.vivescia.com" == window.location.hostname) {
        const mt = document.createElement("style");
        mt.id = "widget-vivescia-font", mt.textContent = "\n            @media screen and (min-width: 64rem) {\n                body :not(.aioa-widget-wrapper) p,\n                body :not(.aioa-widget-wrapper) p,\n                body :not(.aioa-widget-wrapper) span {\n                    font-size: revert !important;\n                }\n            }\n        ", document.head.appendChild(mt)
    }
    if ("cucinottadesigner.it" === window.location.hostname) {
        const ut = document.createElement("style");
        ut.id = "widget-cucinottadesigner-font", ut.textContent = '\n            [class*="aioa-notification-group"], [class*="aioa-notification-group"] *,\n            [class*="accessibility_skiplinks"], [class*="accessibility_skiplinks"] *,\n            [class*="accessibility-skiplinks"], [class*="accessibility-skiplinks"] * {\n                min-height: revert !important\n            }\n        ', document.head.appendChild(ut)
    }
    if ("primaryeyecare.co.uk" == window.location.hostname) {
        const wt = document.createElement("style");
        wt.id = "widget-primaryeyecare-font", wt.textContent = '\n            [class*="aioa-notification-group"], [class*="aioa-notification-group"] *,\n            [class*="accessibility_skiplinks"], [class*="accessibility_skiplinks"] *,\n            [class*="accessibility-skiplinks"], [class*="accessibility-skiplinks"] * {\n                margin: revert !important;\n            }\n\n            /* This ensures that if ANY ancestor has the class, it\'s excluded */\n            :where(.aioa-widget-wrapper) :where(\n                a, p, h1, h2, h3, h4, span, li, label, input, th, td\n            ) {\n                font: revert !important;\n            }\n\n            .aioa-screen-reader-shortcuts-header-text {\n                font-size: 18px !important;\n            }\n        ', document.head.appendChild(wt)
    }
    if ("www.middletemple.org.uk" !== window.location.hostname) {
        const ft = document.createElement("style");
        ft.id = "widget-roboto-font", ft.textContent = "\n            @font-face {\n            font-display: swap;\n            font-family: 'Roboto';\n            font-style: normal;\n            font-weight: 400;\n            src: url('https://www.skynettechnologies.com/accessibility/fonts/roboto-v47-cyrillic_cyrillic-ext_greek_greek-ext_latin_latin-ext_vietnamese-regular.woff2') format('woff2');\n            }\n\n            @font-face {\n            font-display: swap;\n            font-family: 'Roboto';\n            font-style: normal;\n            font-weight: 500;\n            src: url('https://www.skynettechnologies.com/accessibility/fonts/roboto-v47-cyrillic_cyrillic-ext_greek_greek-ext_latin_latin-ext_vietnamese-500.woff2') format('woff2');\n            }\n        ", document.head.appendChild(ft)
    }
    if ("www.euroins.com.ua" === window.location.hostname) {
        const yt = document.querySelector("html");
        yt ? .classList.add("euroins")
    }
    if ("akatoi.careerforce.org.nz" === window.location.hostname) {
        const ht = document.querySelector("html");
        ht ? .classList.add("careerforce")
    }
    if ("www.tetley.co.uk" === window.location.hostname) {
        const bt = document.querySelector("html");
        bt ? .classList.add("tetley-co-uk")
    }
    if (function(t) {
            const e = t.toLowerCase().replace(/^www\./, "");
            return M.some(t => e === t || e.endsWith(`.${t}`))
        }(window.location.hostname)) {
        const vt = document.createElement("style");
        vt.id = "widget-tata-domain-font";
        const kt = "www.tatatrade.co.uk" === window.location.hostname ? "text-shadow: none !important;" : "";
        vt.textContent = `\n            .aioa-widget-wrapper *:not(.fa):not(.fas):not(.far):not(.fab):not([class^="icon-"]):not([class*=" icon-"]):not(.dyslexia_font):not(.sign_language_font):not(.readable_font) {\n                font-family: AIOA Rubik, Noto Sans Meetei Mayek, Roboto, Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif !important;\n                ${kt}\n            }\n            html.dyslexia_font .aioa-widget-wrapper *:not(.fa):not(.fas):not(.far):not(.fab):not([class^="icon-"]):not([class*=" icon-"]):not(.sign_language_font):not(.readable_font) {\n                font-family: AIOA-OpenDyslexic !important;\n                ${kt}\n            }\n            html.sign_language_font .aioa-widget-wrapper *:not(.fa):not(.fas):not(.far):not(.fab):not([class^="icon-"]):not([class*=" icon-"]):not(.dyslexia_font):not(.readable_font) {\n                font-family: AIOA-HandText !important;\n                font-size: 22px !important;\n                ${kt}\n            }\n            html.readable_font .aioa-widget-wrapper *:not(.fa):not(.fas):not(.far):not(.fab):not([class^="icon-"]):not([class*=" icon-"]):not(.sign_language_font):not(.dyslexia_font) {\n                font-family: AIOA Rubik, Noto Sans Meetei Mayek, Roboto, Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif !important;\n                ${kt}\n            }\n        `, document.head.appendChild(vt)
    }
    if ("www.insking.us" === window.location.hostname) {
        const xt = document.querySelector("html");
        xt ? .classList.add("insking")
    }
    if ("consorziocolleromito.it" === window.location.hostname) {
        const Et = document.createElement("style");
        Et.id = "widget-consorziocolleromito-button", Et.textContent = "\n\n            /* This ensures that if ANY ancestor has the class, it's excluded */\n            :where(.aioa-widget-wrapper) :where(\n                .button, button, input[type=button], input[type=reset], input[type=submit]\n            ) {\n                min-height: 1em !important;\n            }\n        ", document.head.appendChild(Et)
    }
    if ("www.longviewinfra.com" === window.location.hostname) {
        const St = new MutationObserver(t => {
            t.forEach(t => {
                if ("aria-expanded" === t.attributeName) {
                    const e = t.target;
                    if ("true" === e.getAttribute("aria-expanded")) {
                        const t = e.getAttribute("id");
                        t && setTimeout(() => {
                            document.querySelectorAll(`[aria-labelledby="${t}"]`).forEach(t => {
                                t.removeAttribute("aria-labelledby")
                            })
                        }, 150);
                        const i = document.getElementById(e.getAttribute("aria-controls"));
                        setTimeout(() => {
                            i.setAttribute("tabindex", "-1"), i.focus()
                        }, 100)
                    }
                }
            });
            const e = ["comp-mhv6o6h316", "comp-mhvdiyoy", "comp-mhvdtt2f"];
            setTimeout(() => {
                e.forEach(t => {
                    const e = document.getElementById(t);
                    e && (e.querySelectorAll("[aria-labelledby]").forEach(t => {
                        t.removeAttribute("aria-labelledby")
                    }), e.querySelectorAll("[aria-label]").forEach(t => {
                        t.removeAttribute("aria-label")
                    }))
                })
            }, 150)
        });
        document.querySelectorAll("button[aria-controls]").forEach(t => {
            St.observe(t, {
                attributes: !0
            })
        })
    }
    const at = (a = !1) => {
        o.isMobile && 0 === o.mobile_visibility && (nt = !1);
        const d = async () => {
            null !== o.active_language && void 0 !== o.active_language && o.active_language !== i.language && i.changeLanguage(o.active_language ? ? "en");
            let e = "true" === R.VITE_FREE_VERSION ? document.querySelector("#aioa-adawidget") : document.querySelector("#adajs");
            if (null == e && (e = document.querySelector("#adajs-js")), e && (null == o.widget_color_code || "" == o.widget_color_code)) {
                let t = e.src.split("?")[1];
                if (t) {
                    let e = t.split("&token=");
                    e.length > 0 && e[0] && (G = e[0]);
                    const i = r();
                    let n = "";
                    if (e.length > 0 && e[1] && (n = e[1].split("&position=")[0]), n.indexOf("&") > -1 && (n = n.split("&")[0]), n && !1 === o.api_called) {
                        void 0 !== t.split("&icontype=")[1] && ((Q = t.split("&icontype=")[1]).indexOf("&") >= 0 && (Q = Q.split("&")[0]), i && l({ ...c(i),
                            widget_icon_type: Q,
                            widget_hide_icon_type: Q
                        }));
                        const e = new FormData;
                        e.append("website_url", window.location.hostname), e.append("api_key", n);
                        fetch(`${"https://freeada.skynettechnologies.com"}/api/widget-settings`, {
                            method: "POST",
                            body: e
                        }).then(async e => {
                            const i = await e.json();
                            if (nt = !0, i.Data) {
                                i.Data.widget_position = "middel_left" == i.Data.widget_position ? "middle_left" : "middel_right" == i.Data.widget_position ? "middle_right" : i.Data.widget_position;
                                const e = (new Date).toJSON().slice(0, 10).replace(/-/g, "/");
                                let n = i.Data.widget_color_code ? ? o.widget_color_code,
                                    a = i.Data.widget_position ? ? o.widget_position;
                                i.Data.widget_icon_type ? ? o.widget_icon_type;
                                let s = i.Data.widget_icon_size ? ? o.widget_icon_size;
                                n = "" !== (G = G.split("colorcode=")[1]) ? G : "#420083", void 0 === t.split("&position=")[1] || i.Data.widget_position || ((J = t.split("&position=")[1]).indexOf("&") >= 0 && (J = J.split("&")[0]), a = J = J.replace("middel_", "middle_")), void 0 !== t.split("&icontype=")[1] && (Q = t.split("&icontype=")[1], s = Z), l(W(i, o, {
                                    api_called: !0,
                                    widget_position: a ? ? V ? ? "bottom_right",
                                    widget_color_code: n ? ? N ? ? "420083",
                                    widget_icon_size: s ? ? H ? ? "aioa-medium-icon",
                                    accessDate: e
                                })), X(), at()
                            } else {
                                const t = r();
                                t && l({ ...c(t),
                                    api_called: !0
                                }), X(), at()
                            }
                        }).catch(t => {})
                    } else {
                        "string" == typeof G && G.includes("colorcode=") && (G = G.split("colorcode=")[1]);
                        const e = (t, e) => null == t || "%27%27" === t || "''" === t ? e : t;
                        if ("" != G ? o && l({ ...c(o),
                                widget_color_code: e(G, "#420083")
                            }) : o && l({ ...c(o),
                                widget_color_code: "#420083"
                            }), void 0 === t.split("&position=")[1] || o.widget_position || ((J = t.split("&position=")[1]).indexOf("&") >= 0 && (J = J.split("&")[0]), J = J.replace("middel_", "middle_"), o && l({ ...c(o),
                                widget_position: J
                            })), void 0 !== t.split("&iconsize=")[1]) {
                            Z = t.split("&iconsize=")[1];
                            const e = r();
                            e && l({ ...c(e),
                                widget_icon_size: Z
                            })
                        }
                        nt = !0, X(), at()
                    }
                }
            }
            const a = document.querySelector("#aioa_accessibility_settings");
            if (nt && !a) {
                if (!o.widget_position) {
                    const t = r();
                    t && l({ ...c(t),
                        widget_position: "bottom_right"
                    })
                }
                "" == o.widget_color_code && (o.widget_color_code = "#420083"), j.innerHTML = `\n                <div id="accessibility_screenreadertext" aria-live="polite" role="alert" lang="${o.active_language?o.active_language:"en"}" class="accessibility_screenreadertext aioa-sr-only notranslate"> </div>\n                <div id="accessibility_skiplinks" lang="${o.active_language?o.active_language:"en"}" class="accessibility-skiplinks notranslate"> </div>\n                <div \n                    id="aioa-trigger-button" \n                    data-vertical-center-offset="${o.widget_position_vertical_center_offset}"\n                    data-vertical-mobile-center-offset="${o.widget_position_vertical_center_offset_mobile}"\n                    data-horizontal-center-offset="${o.widget_position_horizontal_center_offset}"\n                    data-horizontal-mobile-center-offset="${o.widget_position_horizontal_center_offset_mobile}"\n                    lang="${o.active_language?o.active_language:"en"}" \n                    class="accessibility-trigger ${o.is_custom_trigger?"aioa-custom-trigger-active":""} ${o.isMobile&&o.is_mobile_position?`aioa_${o.user_widget_position?o.user_widget_position:o.is_widget_custom_position_mobile?`custom_position aioa-custom-position-${o.widget_position_vertical_center_offset_mobile?"vertical-center-":""}${o.widget_position_horizontal_center_offset_mobile?"horizontal-center-":""}${o.widget_position_top_mobile?"top":""}${o.widget_position_bottom_mobile?"bottom":""}${o.widget_position_left_mobile?"left":""}${o.widget_position_right_mobile?"right":""}`:o.widget_position_mobile}`:`aioa_${o.user_widget_position?o.user_widget_position:o.is_widget_custom_position?`custom_position aioa-custom-position-${o.widget_position_vertical_center_offset?"vertical-center-":""}${o.widget_position_horizontal_center_offset?"horizontal-center-":""}${o.widget_position_top?"top":""}${o.widget_position_bottom?"bottom":""}${o.widget_position_left?"left":""}${o.widget_position_right?"right":""}`:o.widget_position}`} notranslate"> \n                </div>\n                <div id="aioa_accessibility_settings" lang="${o.active_language?o.active_language:"en"}" class="accessibility-settings-modal  aioa_${o.user_widget_position?o.user_widget_position:o.is_widget_custom_position?"custom_position":o.widget_position} notranslate ${o.isMobile||o.user_oversize_widget?"":"compressed"}" role="group" aria-expanded="false"></div>\n                <div id="accessibility_language_modal" lang="${o.active_language?o.active_language:"en"}" class="aioa-modal notranslate" tabindex="-1" aria-hidden="true" style="display:none"> </div>\n                <div id="accessibility_statement_modal" lang="${o.active_language?o.active_language:"en"}" class="aioa-modal notranslate" tabindex="-1" aria-hidden="true" style="display:none"> </div>\n                <div id="accessibility_summarise_modal" lang="${o.active_language?o.active_language:"en"}" class="aioa-modal notranslate" tabindex="-1" aria-hidden="true" style="display:none"> </div>\n                <div id="accessibility_hide_interface_error_modal" lang="${o.active_language?o.active_language:"en"}" class="aioa-modal notranslate" tabindex="-1" style="display:none"> </div>\n                <div id="accessibility_external_link_new_tab_handler_modal" lang="${o.active_language?o.active_language:"en"}" class="aioa-modal notranslate" tabindex="-1" style="display:none"> </div>\n                <div id="accessibility_hide_interface_modal" lang="${o.active_language?o.active_language:"en"}" class="aioa-modal notranslate" tabindex="-1" aria-hidden="true" style="display:none"></div>\n                <div id="accessibility_dictionary_modal" lang="${o.active_language?o.active_language:"en"}" class="aioa-modal notranslate" tabindex="-1" aria-hidden="true" style="display:none"></div>\n                <div id="accessibility_filter_content_modal" lang="${o.active_language?o.active_language:"en"}" class="aioa-modal notranslate" tabindex="-1" aria-hidden="true" style="display:none"></div>\n                <div class="simple-keyboard aioa-keyboard-wrapper notranslate"></div>\n                <div class="aioa-notification-group notranslate" lang="${o.active_language?o.active_language:"en"}"><div class="aioa-notification" id="aioa_notification" ></div></div>\n                <div id="accessibility-reading-guide">&nbsp;</div>\n                <div id="slow_cursor"></div>\n                `;
                const e = document.querySelector("body");
                try {
                    e.prepend(j)
                } catch {}
                I(), z(document.querySelector("#aioa-trigger-button"));
                const a = document.querySelector("#aioa_accessibility_settings");
                a && ((o.isIOS || o.isMobile) && (P(), window.addEventListener("resize", P)), g(a), p(), (e => {
                    const n = i.t;
                    e.innerHTML = `<button id="aioa_skip_to_main_content" ><div data-i18n-key="skip_to_content" data-i18n-labelkey="${n("skip_to_content")}">${n("skip_to_content")}</div> <span aria-hidden="true"><span class="enter-symbol">↵</span><div class="aioa-accessibility-highlight-focus" data-i18n-key="enter" data-i18n-labelkey="${n("enter")}">${n("enter")}</div></span></button> <button id="aioa_skip_to_navigation" ><div data-i18n-key="skip_to_navigation" data-i18n-labelkey="${n("skip_to_navigation")}">${n("skip_to_navigation")}</div> <span aria-hidden="true"><span class="enter-symbol">↵</span><div class="aioa-accessibility-highlight-focus" data-i18n-key="enter" data-i18n-labelkey="${n("enter")}">${n("enter")}</div></span></button><button id="aioa_open_accessibility_toolbar" ><div data-i18n-key="open_accessibility_toolbar" data-i18n-labelkey="${n("open_accessibility_toolbar")}">${n("open_accessibility_toolbar")}</div> <span aria-hidden="true"><span class="enter-symbol">↵</span><div class="aioa-accessibility-highlight-focus" data-i18n-key="enter" data-i18n-labelkey="${n("enter")}">${n("enter")}</div></span></button><button id="aioa_skip_to_footer" ><div data-i18n-key="skip_to_footer" data-i18n-labelkey="${n("skip_to_footer")}">${n("skip_to_footer")}</div> <span aria-hidden="true"><span class="enter-symbol">↵</span><div class="aioa-accessibility-highlight-focus" data-i18n-key="enter" data-i18n-labelkey="${n("enter")}">${n("enter")}</div></span></button>`;
                    const a = document.getElementById("aioa_skip_to_main_content");
                    o.is_widget_text_color || o.darkTextColor && e.classList.add("darktext"), a.addEventListener("click", async e => {
                        e.preventDefault(), s("Skip Links", n("skip_to_content"));
                        const {
                            getMainContentElementID: i
                        } = await t(() =>
                            import ("./maincontent.js"), []);
                        let o = document.getElementById(i());
                        "contents" === window.getComputedStyle(o, null).getPropertyValue("display") && (o.style.display = "grid"), o.focus(), o.scrollIntoView()
                    }), document.getElementById("aioa_skip_to_navigation").addEventListener("click", async e => {
                        e.preventDefault(), s("Skip Links", n("skip_to_navigation"));
                        const {
                            getNavigationElementID: i
                        } = await t(() =>
                            import ("./maincontent.js"), []);
                        let o = document.getElementById(i());
                        o.focus(), o.scrollIntoView()
                    }), document.getElementById("aioa_skip_to_footer").addEventListener("click", async t => {
                        t.target, t.preventDefault(), s("Skip Links", n("skip_to_footer"));
                        let e = document.getElementById(m());
                        e.focus(), e.scrollIntoView()
                    }), document.getElementById("aioa_open_accessibility_toolbar").addEventListener("click", t => {
                        t.preventDefault();
                        let e = document.getElementById("accessibility_settings_toggle");
                        e.click(), e.focus()
                    })
                })(document.querySelector("#accessibility_skiplinks")));
                const d = ["font_size", "letter_spacing", "content_scaling", "line_height"],
                    _ = n.some(t => d.includes(t) ? 100 !== o[t] : o[t]);
                if (!o.hideWidget && !(U && Date.now() < U) || _)
                    if (1 === o.is_free_widget) {
                        const {
                            default: e
                        } = await t(() =>
                            import ("./shortcut.js"), []);
                        e(!0)
                    } else {
                        const {
                            default: e
                        } = await t(() =>
                            import ("./shortcut.js"), []);
                        e(!1), document.querySelector("#accessibility_screenreadertext").innerHTML = '<span data-i18n-key="screen_reader_introduction_text">Welcome to All in One Accessibility screen reader. To start the All in One Accessibility screen reader, press "Ctrl + /". This shortcut activates the screen reader to help you navigate and interact with the content.</span>'
                    }
                o.widget_leave_page && y(), window.dispatchEvent(new CustomEvent("widgetCoreReady"))
            }
        };
        if (i.isInitialized ? d() : i.on("initialized", d), nt) {
            if (!o.active_language)
                if (1 !== o.is_free_widget && o.default_language) o && l({ ...c(o),
                    active_language: o.default_language
                });
                else {
                    const t = document.querySelector("html");
                    let i = t ? .getAttribute("lang");
                    if (i) {
                        "iw" === i && (i = "he");
                        let t = i.toLowerCase();
                        e.includes(t) ? o && l({ ...c(o),
                            active_language: t
                        }) : (t = i.slice(0, 2).toLowerCase(), t.includes(t) ? o && l({ ...c(o),
                            active_language: t
                        }) : o && l({ ...c(o),
                            active_language: "en"
                        }))
                    }
                }
            if (setTimeout(async () => {
                    o.active_language !== i.language && i.changeLanguage(o.active_language ? ? "en")
                }, 200), !o.isMobile) {
                new T(document, {
                    childList: !0,
                    subtree: !0
                }, function(t, e) {
                    for (const i of t) "childList" === i.type && (this.disconnect(), C(), setTimeout(() => {
                        this.connect()
                    }, 5e3))
                }).connect()
            }
            0 === o.is_free_widget && setTimeout(() => {
                (async () => {
                    const {
                        default: e
                    } = await t(() =>
                        import ("./applyFixes.js"), []);
                    e()
                })()
            }, 5e3)
        }
    };
    var K = (new Date).toJSON().slice(0, 10).replace(/-/g, "/");
    if (o.accessDate != K && (o.fromAPI = !1), o.fromAPI)
        if (1 === o.is_free_widget) {
            t(() =>
                import ("./getWidgetSettingsApi.js"), []).then(t => t.default).then(t => {
                const e = t.data;
                if ((!e.hidewidget || 0 == e.hidewidget) && e.Data) {
                    if (null != document.querySelector("script[src*='aioa_reg_req=true']") && 0 == e.Data.length) return !1;
                    (e.Data.widget_color_code || 1 === o.is_free_widget) && (nt = !0), e.Data.widget_position = "middel_left" == e.Data.widget_position ? "middle_left" : "middel_right" == e.Data.widget_position ? "middle_right" : e.Data.widget_position;
                    var i = (new Date).toISOString().slice(0, 10).replace(/-/g, "/"),
                        n = (new Date).toUTCString().slice(-12);
                    n = (n = n.replace(" GMT", "")).replace(" UTC", ""), l(W(e, o, {
                        widget_position: e ? .Data ? .widget_position ? ? o ? .widget_position ? ? V ? ? "bottom_right",
                        widget_color_code: e ? .Data ? .widget_color_code ? ? o ? .widget_color_code ? ? N ? ? "420083",
                        widget_icon_size: e ? .Data ? .widget_icon_size ? ? o ? .widget_icon_size ? ? H ? ? "aioa-medium-icon",
                        hidewidget: e.hidewidget,
                        hideWidget: !1,
                        active_language: 1 === e.Data.is_free_widget ? "" : e.Data.default_language,
                        accessDate: i,
                        accessTime: n,
                        is_free_widget: e.Data.is_free_widget,
                        user_oversize_widget: null === e.Data.widget_size ? e.Data.widget_size : o.user_oversize_widget
                    })), localStorage.removeItem("widgetHideUntil"), X(), at()
                }
            }, t => {})
        } else {
            const Lt = "https://ada.skynettechnologies.us/api/widget-setting-status",
                Dt = new FormData;
            Dt.append("website_url", window.location.hostname), fetch(Lt, {
                method: "POST",
                body: Dt
            }).then(async e => {
                let i = (await e.json()).Data,
                    n = new Date(i.setting_updated_at + " GMT"),
                    a = new Date(o.accessDate + " " + o.accessTime + " GMT");
                if (null != i.setting_updated_at && n >= a) t(() =>
                    import ("./getWidgetSettingsApi.js"), []).then(t => t.default).then(async t => {
                    const e = t.data;
                    if ((!e.hidewidget || 0 == e.hidewidget) && e.Data) {
                        if (null !== document.querySelector("script[src*='aioa_reg_req=true']") && 0 === e.Data.length) return !1;
                        e.Data.widget_color_code && (nt = !0), e.Data.widget_position = "middel_left" === e.Data.widget_position ? "middle_left" : "middel_right" === e.Data.widget_position ? "middle_right" : e.Data.widget_position;
                        let t = (new Date).toISOString().slice(0, 10).replace(/-/g, "/"),
                            i = (new Date).toUTCString().slice(-12);
                        i = i.replace(" GMT", "").replace(" UTC", ""), l(W(e, o, {
                            widget_position: e ? .Data ? .widget_position ? ? o ? .widget_position ? ? V ? ? "bottom_right",
                            widget_color_code: e ? .Data ? .widget_color_code ? ? o ? .widget_color_code ? ? N ? ? "420083",
                            widget_icon_size: e ? .Data ? .widget_icon_size ? ? o ? .widget_icon_size ? ? H ? ? "aioa-medium-icon",
                            hidewidget: e.hidewidget,
                            hideWidget: !1,
                            active_language: 1 === e.Data.is_free_widget ? "" : e.Data.default_language,
                            accessDate: t,
                            accessTime: i,
                            is_free_widget: e.Data.is_free_widget
                        })), localStorage.removeItem("widgetHideUntil"), nt = !0, X(), at(!0)
                    }
                }).catch(t => {});
                else {
                    const t = r();
                    t && l({ ...c(t),
                        widget_position: t.widget_position
                    }), null !== o.widget_color_code && "" !== o.widget_color_code && (nt = !0), X(), at()
                }
            }).catch(t => {})
        }
    else {
        t(() =>
            import ("./getWidgetSettingsApi.js"), []).then(t => t.default).then(t => {
            const e = t.data;
            if ((!e.hidewidget || 0 == e.hidewidget) && e.Data) {
                if (null != document.querySelector("script[src*='aioa_reg_req=true']") && 0 == e.Data.length) return !1;
                (e.Data.widget_color_code || 1 === o.is_free_widget) && (nt = !0), e.Data.widget_position = "middel_left" == e.Data.widget_position ? "middle_left" : "middel_right" == e.Data.widget_position ? "middle_right" : e.Data.widget_position;
                var i = (new Date).toISOString().slice(0, 10).replace(/-/g, "/"),
                    n = (new Date).toUTCString().slice(-12);
                n = (n = n.replace(" GMT", "")).replace(" UTC", ""), l(W(e, o, {
                    widget_position: e ? .Data ? .widget_position ? ? o ? .widget_position ? ? V ? ? "bottom_right",
                    widget_color_code: e ? .Data ? .widget_color_code ? ? o ? .widget_color_code ? ? N ? ? "420083",
                    widget_icon_size: e ? .Data ? .widget_icon_size ? ? o ? .widget_icon_size ? ? H ? ? "aioa-medium-icon",
                    hidewidget: e.hidewidget,
                    hideWidget: !1,
                    active_language: 1 === e.Data.is_free_widget ? "" : e.Data.default_language,
                    accessDate: i,
                    accessTime: n,
                    is_free_widget: e.Data.is_free_widget
                })), localStorage.removeItem("widgetHideUntil"), X(), at()
            }
        }, t => {})
    }
    if (window.addEventListener("pageshow", async t => {
            const e = performance.getEntriesByType("navigation")[0];
            if (t.persisted || "back_forward" === e.type) {
                const t = r();
                if (t.background_color) {
                    const e = document.querySelector(`#background_color-${t.background_color}`);
                    e ? .click()
                } else {
                    const t = document.querySelector("#background_color-none");
                    t ? .click()
                }
                if (t.text_color) {
                    const e = document.querySelector(`#text_color-${t.text_color}`);
                    e ? .click()
                } else {
                    const t = document.querySelector("#text_color-none");
                    t ? .click()
                }
                if (t.title_color) {
                    const e = document.querySelector(`#title_color-${t.title_color}`);
                    e ? .click()
                } else {
                    const t = document.querySelector("#title_color-none");
                    t ? .click()
                }
            }
            const i = document.querySelector("#accessibility_settings_toggle");
            i && i.focus()
        }), !o.isMobile) {
        const $t = t => {
                const e = document.querySelector(".aioa-widget-wrapper");
                return !!(e && t && e.contains(t))
            },
            zt = '.modal, [role="dialog"], .popup, .df-modal',
            At = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
            It = t => {
                setTimeout(() => {
                    let e = t.querySelector(At);
                    if (e) {
                        e = Array.from(t.querySelectorAll("div")).find(t => {
                            const e = t.innerText && t.innerText.trim().length > 0,
                                i = null === t.querySelector("div"),
                                o = t.offsetWidth > 0 || t.offsetHeight > 0;
                            return e && i && o
                        }), e && (e.setAttribute("tabindex", "-1"), e.style.outline = "none")
                    }
                    e && e.focus()
                }, 150)
            };
        new MutationObserver(t => {
            t.forEach(t => {
                if (t.addedNodes.forEach(t => {
                        if (1 === t.nodeType && !$t(t))
                            if (t.matches(zt)) It(t);
                            else {
                                const e = t.querySelector(zt);
                                e && !$t(e) && It(e)
                            }
                    }), "attributes" === t.type && ("class" === t.attributeName || "style" === t.attributeName)) {
                    const e = t.target;
                    if ($t(e)) return;
                    if (e.matches(zt)) {
                        const t = window.getComputedStyle(e);
                        "none" !== t.display && "hidden" !== t.visibility && It(e)
                    }
                }
            })
        }).observe(document.body, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "style"]
        })
    }
    async function st() {
        const e = document.querySelector(".aioa-widget-wrapper");
        document.querySelectorAll(".accessibility-trigger button, .aioa-notification-group").forEach(t => {
            t.classList.toggle("aioa-remove-zindex", !!e ? .hasAttribute("inert"))
        });
        const i = document.documentElement.classList.contains("accessibility_modal_opened");
        if (e && e ? .hasAttribute("inert") && i) {
            const {
                default: e
            } = await t(() =>
                import ("./widget.js").then(t => t.O), []);
            e()
        }
    }
    st();
    new MutationObserver(st).observe(document.body, {
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ["inert"]
    }), window.addEventListener("widgetCoreReady", async function(e) {
        const {
            fetchAudio: i
        } = await t(() =>
            import ("./openWidget.js"), []);
        i()
    })
}