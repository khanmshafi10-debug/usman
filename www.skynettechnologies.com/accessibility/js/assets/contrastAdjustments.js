import {
    t,
    j as e
} from "./widget.js";
import "./preload-helper.js";

function o() {
    const t = window.location.hostname;
    t.includes("wildlifewonders.org.au") && r("h1, h2, h3, h4, h5, h6, p, span, a"), t.includes("ecomflight.com") && r("h1, h2, h3, h4, h5, h6, p, span, a"), t.includes("visitlycomingcounty.com") && r(".news-item, .entry-content, h1, h2, h3, h4, h5, h6, p, span, a")
}

function r(t) {
    document.querySelectorAll(t).forEach(t => {
        t.closest(".aioa-widget-wrapper") || (t.setAttribute("data-contrast-applied", "true"), t.style.setProperty("color", "#ffffff", "important"), t.style.setProperty("text-shadow", "0 1px 3px rgba(0,0,0,0.5)", "important"))
    })
}
const a = ["product-grid-item__slide", "accessibility-tooltip", "accessibility-reading-mask-element", "image__fill", "background-size-cover", "background__image", "footer-country-selector__country-flag", "emthemesModez-overlay", "aioa-hide-interface-error", "email-signup-block", "email-signup__input-group", "btn--arrow-with-text", "section__block", "aioa-modal-dialog", "accessibility-filter-content", "aioa-widget-wrapper", "aioa-modal", "featured_image", "card-figcaption-body-custom", "card-figcaption-button", "storerocket-search-form", "image-blend", "search-field", "card-inner-content", "overlay", "overlay--solid", "bg-overlay", "blog__post-overlay", "ins-header__menu-fade", "go4047339015", "go3989562963", "go3541402846", "go784104242", "go965350679", "gallery-fullscreen-slideshow-item-wrapper", "blue-light-filter", "mejs-overlay-button", "mejs-overlay", "mejs-layer", "mejs-overlay-play", "fl-module-video", "fl-module", "mejs-time-total", "parallax-item", "image-overlay-wrapper", "image-container", "contact-details-box", "mousegrid-toast", "mousegrid-show-btn", "mousegrid-back-btn", "mousegrid-number", "mousegrid-cell", "mousegrid-overlay", "mousegrid-wrapper", "accessibility-magnifier-tooltip", "color-magenta", "frame-1__title", "frame-2__content", "frame-4__content", "frame__description", "frame-5__content", "himalayan-india", "aioa-feature-on", "aioa-chatbot-container", "aioa-chatbot-button", "aioa-focus-navigation-panel", "aioa-focus-navigation-handle", "aioa-focus-nav-next", "aioa-focus-nav-trigger", "aioa-focus-nav-prev", "aioa-focus-nav-close"],
    n = "joekels.co.za" === location.hostname || "www.joekels.co.za" === location.hostname,
    i = "eightoclock.com" === location.hostname || "www.eightoclock.com" === location.hostname,
    l = window.location.hostname.includes("tetley"),
    c = window.location.hostname.includes("organicindia"),
    s = [".cart-drawer__dialog", ".cart-drawer__inner", ".cart-drawer__header", ".cart-drawer__content", ".cart-drawer__summary", ".cart-items__wrapper", ".cart-items__table", ".cart-items__details", ".cart__summary-totals", ".cart__total-container", ".cart__ctas", ".cart-discount__input", ".cart-primary-typography"],
    d = ["form div[data-protected-input]", "form input", "form select", "form textarea"].join(",");
let u = null;

function m() {
    const t = document.querySelector(".header__overlay");
    if (t) {
        const e = t.dataset.originalBackgroundColor || "rgba(0,0,0,.7)";
        t.style.setProperty("background", e, "important")
    }
    const e = document.querySelector("#edit-search-key");
    e ? .addEventListener("focus", () => {
        const t = e.parentElement;
        if (!t) return;
        const o = new MutationObserver(() => {
            if (document.querySelector(".header__search__list")) {
                const t = document.querySelector(".header__search__list") || null;
                if (t) {
                    const e = t.closest("header"),
                        o = e ? getComputedStyle(e).backgroundColor : getComputedStyle(document.documentElement).backgroundColor;
                    t.style.setProperty("background-color", o, "important")
                }
                o.disconnect()
            }
        });
        o.observe(t, {
            childList: !0,
            subtree: !0
        }), setTimeout(() => o.disconnect(), 5e3)
    })
}

function g(t, e = "fieldset") {
    const o = "fieldset-background-fix";
    if (!t) return void document.getElementById(o) ? .remove();
    if (document.getElementById(o)) return;
    const r = document.createElement("style");
    r.id = o, r.textContent = `\n        ${e} [role="group"] > div,\n        ${e} [role="group"] > div > div,\n        ${e} [role="group"] > div > div > div {\n            background: transparent !important;\n            background-color: transparent !important;\n        }\n    `, document.head.appendChild(r)
}

function p() {
    document.querySelectorAll(".field input, .field textarea").forEach(t => {
        t.dataset.originalPlaceholder || (t.dataset.originalPlaceholder = t.getAttribute("placeholder") || ""), t.setAttribute("placeholder", "")
    })
}

function f() {
    const t = '[data-essential-upsell-element="products"]',
        e = '[data-essential-upsell-element="product"]',
        o = [e, '[data-essential-upsell-element="content-container"]', '[data-essential-upsell-element="content"]', '[data-essential-upsell-element="button-container"]'].join(","),
        r = new WeakSet,
        a = new WeakSet;

    function n(t) {
        t && 1 === t.nodeType && (t.style.setProperty("background", "transparent", "important"), t.style.setProperty("background-color", "transparent", "important"))
    }

    function i(t) {
        t && t.querySelectorAll(o).forEach(n)
    }

    function l(t) {
        t && !r.has(t) && (r.add(t), i(t), function(t) {
            if (!t || a.has(t)) return;
            a.add(t);
            let e = !1;
            new MutationObserver(o => {
                let r = !1;
                for (const t of o) {
                    if ("childList" === t.type) {
                        r = !0;
                        break
                    }
                    if ("attributes" === t.type && "style" === t.attributeName) {
                        r = !0;
                        break
                    }
                }
                r && !e && (e = !0, requestAnimationFrame(() => {
                    e = !1, i(t)
                }))
            }).observe(t, {
                subtree: !0,
                childList: !0,
                attributes: !0,
                attributeFilter: ["style"]
            })
        }(t), t.addEventListener("click", o => {
            const r = o.target;
            if (!(r instanceof Element)) return;
            const a = r.closest('[data-essential-upsell-element="add-to-cart-button"]');
            if (!a || !t.contains(a)) return;
            const n = a.closest(e);
            if (!n) return;
            const i = a.closest('[role="group"]');
            if (i && "true" === i.getAttribute("aria-hidden")) return;
            const l = n.querySelector('[data-essential-upsell-element="discounted-price"]');
            l ? .dataset.productId, l ? .dataset.variantId
        }, !0))
    }

    function c(e) {
        e && 1 === e.nodeType && (e.matches(t) ? l(e) : e.querySelectorAll ? .(t).forEach(l))
    }
    document.querySelectorAll(t).forEach(l);
    new MutationObserver(t => {
        for (const e of t)
            for (const t of e.addedNodes) c(t)
    }).observe(document.body, {
        childList: !0,
        subtree: !0
    })
}

function b() {
    if (c && (document.querySelectorAll(s.join(",")).forEach(t => {
            t.dataset.darkContrastApplied = "true", t.style.setProperty("background", "#181818", "important"), t.style.setProperty("color", "#fff", "important"), t.style.setProperty("border-color", "#555", "important")
        }), document.querySelectorAll(".cart-drawer__dialog *").forEach(t => {
            t.style.setProperty("color", "#fff", "important")
        }), function() {
            const t = document.getElementById("terms-policies-popover");
            t && (t.style.setProperty("background", "#181818", "important"), t.style.setProperty("color", "#ffffff", "important"), t.querySelectorAll("*").forEach(t => {
                t.style.setProperty("color", "#fff", "important"), t.style.setProperty("-webkit-text-fill-color", "#fff", "important")
            }))
        }()), n && document.querySelectorAll(".field input, .field textarea").forEach(t => {
            t.dataset.originalPlaceholder || (t.dataset.originalPlaceholder = t.getAttribute("placeholder") || ""), t.setAttribute("placeholder", "")
        }), l) {
        let t = document.getElementById("header-after-dark-style"),
            e = document.getElementById("dark-contrast-fix");
        t || (t = document.createElement("style"), t.id = "header-after-dark-style", t.textContent = "\n                    .header__inner::after {\n                        background: #181818 !important;\n                    }\n                ", document.head.appendChild(t)), e || (e = document.createElement("style"), e.id = "dark-contrast-fix", e.textContent = "\n            .plp__pager .button,\n            .plp__pager .button:hover,\n            .plp__pager .button:focus {\n            background: #181818 !important;\n            color: #fff !important;\n            }\n        ", document.head.appendChild(e));
        const o = 'header, nav, [role="navigation"], [class*="menu"]';
        document.querySelectorAll(o).forEach(t => {
            t.style.setProperty("background-color", "#181818", "important")
        }), document.querySelectorAll(`${o} a, ${o} span`).forEach(t => {
            t.style.setProperty("color", "#fff", "important")
        }), m()
    }
    i && (document.querySelectorAll('[data-essential-upsell-element="add-to-cart-button"]').forEach(t => {
            t.style.setProperty("--backgroundColor", "#202223"), t.style.setProperty("--color", "#fff")
        }), document.querySelectorAll(".ui-selectmenu-menu .ui-menu-item").forEach(t => {
            t.classList.contains("ui-state-focus") ? (t.style.removeProperty("background"), t.style.removeProperty("color")) : (t.style.setProperty("background", "#232223", "important"), t.style.setProperty("color", "#fff", "important"))
        }), f()), g(!0), p(),
        function() {
            const t = "aioa-dark-listbox-contrast-fix",
                e = '\n    ul[role="listbox"][aria-hidden="false"] {\n      background-color: #181818 !important;\n      background-image: none !important;\n      color: #ffffff !important;\n      border-color: #555555 !important;\n    }\n\n    ul[role="listbox"][aria-hidden="false"] > li {\n      background-color: #181818 !important;\n      background-image: none !important;\n      color: #ffffff !important;\n      border: 0 !important;\n      text-shadow: none !important;\n    }\n\n    ul[role="listbox"][aria-hidden="false"] > li * {\n      background: transparent !important;\n      background-image: none !important;\n      color: #ffffff !important;\n      text-shadow: none !important;\n    }\n\n    ul[role="listbox"][aria-hidden="false"] > li:hover {\n      background-color: #333333 !important;\n      background-image: none !important;\n      color: #ffffff !important;\n    }\n\n    ul[role="listbox"][aria-hidden="false"] > li:hover * {\n      background: transparent !important;\n      color: #ffffff !important;\n    }\n\n    ul[role="listbox"][aria-hidden="false"] > li:focus,\n    ul[role="listbox"][aria-hidden="false"] > li:focus-visible {\n      background-color: #333333 !important;\n      background-image: none !important;\n      color: #ffffff !important;\n      outline: 2px solid #ffffff !important;\n      outline-offset: -2px !important;\n    }\n\n    ul[role="listbox"][aria-hidden="false"] > li[class*="focus"],\n    ul[role="listbox"][aria-hidden="false"] > li[class*="hover"],\n    ul[role="listbox"][aria-hidden="false"] > li[class*="active"] {\n      background-color: #333333 !important;\n      background-image: none !important;\n      color: #ffffff !important;\n    }\n\n    ul[role="listbox"][aria-hidden="false"] > li[class*="focus"] *,\n    ul[role="listbox"][aria-hidden="false"] > li[class*="hover"] *,\n    ul[role="listbox"][aria-hidden="false"] > li[class*="active"] * {\n      background: transparent !important;\n      color: #ffffff !important;\n    }\n\n    ul[role="listbox"][aria-hidden="false"] > li[aria-selected="true"] {\n      background-color: #404040 !important;\n      background-image: none !important;\n      color: #ffffff !important;\n    }\n\n    ul[role="listbox"][aria-hidden="false"]\n      > li[aria-selected="true"] * {\n      background: transparent !important;\n      color: #ffffff !important;\n    }\n  ';
            let o = document.getElementById(t);
            o || (o = document.createElement("style"), o.id = t, document.head.appendChild(o));
            o.textContent = e
        }()
}

function y() {
    if (c && (document.querySelectorAll("[data-dark-contrast-applied]").forEach(t => {
            t.style.removeProperty("background"), t.style.removeProperty("color"), t.style.removeProperty("border-color"), delete t.dataset.darkContrastApplied
        }), function() {
            const t = document.getElementById("terms-policies-popover");
            t && (t.style.removeProperty("background"), t.style.removeProperty("color"), t.querySelectorAll("*").forEach(t => {
                t.style.removeProperty("color"), t.style.removeProperty("-webkit-text-fill-color")
            }))
        }()), n && document.querySelectorAll(".field input, .field textarea").forEach(t => {
            void 0 !== t.dataset.originalPlaceholder && (t.setAttribute("placeholder", t.dataset.originalPlaceholder), delete t.dataset.originalPlaceholder)
        }), l) {
        document.getElementById("header-after-dark-style") ? .remove(), document.getElementById("dark-contrast-fix") ? .remove();
        const t = 'header, nav, [role="navigation"], [class*="menu"]';
        document.querySelectorAll(`${t}`).forEach(t => {
            t.style.removeProperty("background-color"), t.style.removeProperty("color")
        })
    }
    i && (document.querySelectorAll('[data-essential-upsell-element="add-to-cart-button"]').forEach(t => {
            t.style.setProperty("--backgroundColor", "#fff"), t.style.setProperty("--color", "#202223")
        }), document.querySelectorAll(".ui-selectmenu-menu .ui-menu-item").forEach(t => {
            t.style.removeProperty("background"), t.style.removeProperty("color")
        })), g(!1),
        function() {
            const t = document.getElementById("aioa-dark-listbox-contrast-fix");
            t && t.remove()
        }()
}

function h() {
    if (l) {
        document.querySelectorAll(".header__top-menu a").forEach(t => {
            "rgb(255, 255, 255)" === getComputedStyle(t).color && t.style.setProperty("color", "#000", "important")
        });
        let t = document.getElementById("header-after-dark-style");
        t || (t = document.createElement("style"), t.id = "header-after-dark-style", t.textContent = "\n                    .header__inner::after {\n                        background: #fff !important;\n                    }\n                ", document.head.appendChild(t)), m(), document.querySelectorAll(".icon-search, .icon-close").forEach(t => {
            t.style.setProperty("color", "#000", "important"), t.style.setProperty("fill", "#000", "important"), t.style.setProperty("stroke", "#000", "important")
        })
    }
    document.querySelectorAll("img").forEach(t => {
        if (t.closest('#accessibility_settings_toggle, #aioa_accessibility_settings, [class*="aioa-"]')) return;
        const e = t.closest('[data-original-bg-type="background"][data-original-background-color]');
        if (!e) return void t.style.setProperty("filter", "none", "important");
        const o = e.getAttribute("data-original-background-color") || "",
            r = getComputedStyle(e).backgroundColor;
        /rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)/i.test(o) || "rgb(255, 255, 255)" !== r && "rgba(255, 255, 255, 1)" !== r ? t.style.setProperty("filter", "none", "important") : t.style.setProperty("filter", "brightness(1) contrast(1)", "important")
    }), p()
}

function A() {
    c && (document.querySelectorAll(d).forEach(t => {
        const e = getComputedStyle(t);
        t.dataset.hcBorderSaved || (t.dataset.hcBorderSaved = "1", t.dataset.hcBorderWidth = t.style.borderWidth || "", t.dataset.hcBorderStyle = t.style.borderStyle || "", t.dataset.hcBorderColor = t.style.borderColor || "", t.dataset.hcBorderRadius = t.style.borderRadius || ""), t.style.setProperty("border-style", "none" === e.borderStyle ? "solid" : e.borderStyle, "important"), t.style.setProperty("border-width", "2px", "important"), t.style.setProperty("border-color", "CanvasText", "important"), t.style.setProperty("border-radius", e.borderRadius, "important")
    }), function() {
        u || (u = document.createElement("style"), u.textContent = "\n            .mega-menu-fix *::after{\n                transition:none!important;\n                display:none!important;\n            }\n        ", document.head.appendChild(u)), document.documentElement.classList.add("mega-menu-fix");
        const t = document.querySelector(".overflow-menu");
        if (!t) return;
        const e = t.getBoundingClientRect(),
            o = document.querySelector(".menu-list__submenu:not(.menu-list__submenu-inner)");
        if (o) {
            const t = e.bottom,
                r = o.getBoundingClientRect();
            o.style.width = `${document.documentElement.clientWidth}px`, o.style.left = -r.left + "px", o.style.top = `${t}px`
        }
    }())
}

function k() {
    c && (document.querySelectorAll(d).forEach(t => {
        t.dataset.hcBorderSaved && (t.dataset.hcBorderWidth ? t.style.setProperty("border-width", t.dataset.hcBorderWidth) : t.style.removeProperty("border-width"), t.dataset.hcBorderStyle ? t.style.setProperty("border-style", t.dataset.hcBorderStyle) : t.style.removeProperty("border-style"), t.dataset.hcBorderColor ? t.style.setProperty("border-color", t.dataset.hcBorderColor) : t.style.removeProperty("border-color"), t.dataset.hcBorderRadius ? t.style.setProperty("border-radius", t.dataset.hcBorderRadius) : t.style.removeProperty("border-radius"), delete t.dataset.hcBorderSaved, delete t.dataset.hcBorderWidth, delete t.dataset.hcBorderStyle, delete t.dataset.hcBorderColor, delete t.dataset.hcBorderRadius)
    }), document.documentElement.classList.remove("mega-menu-fix"), document.querySelectorAll('[class*="submenu"]').forEach(t => {
        t.style.width = "", t.style.left = "", t.style.top = ""
    }), u ? .remove(), u = null)
}
const v = function() {
    const t = !!document.querySelector('meta[name="generator"][content*="Squarespace"]'),
        e = Array.from(document.querySelectorAll('[class*="sqs-"], [id*="sqs-"]')).length > 0,
        o = Array.from(document.scripts).some(t => t.src && t.src.includes("squarespace.com")),
        r = void 0 !== window.Squarespace;
    return t || e || o || r
}();
let w = !1,
    x = !1,
    S = null;
if (v) {
    const t = document.querySelector("html");
    t ? .classList.add("isSquareSpace")
}

function P(t) {
    if (!t) return !1;
    if (t.includes("url(")) return !0;
    if (t.includes("gradient")) {
        const e = t.match(/rgb[a]?\([^)]+\)/g);
        if (e && e.length > 1) {
            if (new Set(e).size > 1) return !0
        }
        if ((t.match(/\d+%/g) || []).length >= 2) return !0
    }
    return !1
}

function _(t) {
    const e = window.getComputedStyle(t),
        o = e.backgroundColor,
        r = e.backgroundImage;
    return !!(o && "rgba(0, 0, 0, 0)" !== o && "transparent" !== o) && !(r && "none" !== r)
}

function C(t) {
    const e = window.getComputedStyle(t),
        o = e.background,
        r = e.backgroundColor,
        a = e.backgroundImage;
    return a && "none" !== a ? {
        type: "image",
        value: a
    } : o && "none" !== o && "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box" !== o && "rgba(0, 0, 0, 0) none no-repeat scroll 0% 0% / cover padding-box border-box" !== o ? {
        type: "background",
        value: o
    } : r && "rgba(0, 0, 0, 0)" !== r && "transparent" !== r ? {
        type: "color",
        value: r
    } : {
        type: "none",
        value: ""
    }
}

function E(t, e) {
    const o = window.getComputedStyle(t),
        r = o.backgroundImage;
    if (r && "none" !== r && P(r)) return void t.style.setProperty("background-color", e, "important");
    if (!t.hasAttribute("data-original-background")) {
        const e = C(t);
        t.setAttribute("data-original-background-type", e.type), t.setAttribute("data-original-background", e.value), t.setAttribute("data-original-background-color", o.backgroundColor), t.setAttribute("data-original-background-image", o.backgroundImage), t.setAttribute("data-original-background-repeat", o.backgroundRepeat), t.setAttribute("data-original-background-position", o.backgroundPosition), t.setAttribute("data-original-background-size", o.backgroundSize)
    }
    if ("background" === t.getAttribute("data-original-background-type")) {
        const o = window.getComputedStyle(t).backgroundImage;
        o && "none" !== o ? t.style.setProperty("background-color", e, "important") : t.style.setProperty("background", e, "important")
    } else t.style.setProperty("background-color", e, "important")
}
const q = [".himalayan-india .frame-1__title p", ".image-banner"];

function L(t) {
    return q.some(e => {
        try {
            return null !== t.closest(e)
        } catch {
            return !1
        }
    })
}

function B(t) {
    return !!F(t, a) || (!!L(t) || null !== t.closest(".aioa-widget-wrapper"))
}

function N(t) {
    const e = t.getAttribute("data-original-background-type"),
        o = t.getAttribute("data-original-background"),
        r = t.getAttribute("data-original-background-color"),
        a = t.getAttribute("data-original-background-image");
    if (e && o) {
        "background" === e ? t.style.setProperty("background", o, "important") : "color" === e ? t.style.setProperty("background-color", o, "important") : "image" === e && t.style.setProperty("background-image", o, "important");
        const r = t.getAttribute("data-original-background-color"),
            a = t.getAttribute("data-original-background-image"),
            n = t.getAttribute("data-original-background-repeat"),
            i = t.getAttribute("data-original-background-position"),
            l = t.getAttribute("data-original-background-size");
        r && t.style.setProperty("background-color", r), a && t.style.setProperty("background-image", a), n && t.style.setProperty("background-repeat", n), i && t.style.setProperty("background-position", i), l && t.style.setProperty("background-size", l), t.removeAttribute("data-original-background-type"), t.removeAttribute("data-original-background"), t.removeAttribute("data-original-background-color"), t.removeAttribute("data-original-background-image"), t.removeAttribute("data-original-background-repeat"), t.removeAttribute("data-original-background-position"), t.removeAttribute("data-original-background-size")
    } else r && "rgba(0,0,0,0)" !== r && t.style.setProperty("background-color", r), a && "none" !== a && t.style.setProperty("background-image", a);
    r || t.style.removeProperty("background-color"), a || t.style.removeProperty("background-image")
}

function I(t) {
    if (!t.hasAttribute("data-icon-styles-stored")) {
        if ("svg" === t.tagName || t.closest("svg")) {
            const e = "svg" === t.tagName ? t : t.closest("svg");
            if (e && !e.hasAttribute("data-original-fill")) {
                const t = e.getAttribute("fill") || window.getComputedStyle(e).fill;
                t && "none" !== t && e.setAttribute("data-original-fill", t);
                const o = e.getAttribute("stroke") || window.getComputedStyle(e).stroke;
                o && "none" !== o && e.setAttribute("data-original-stroke", o), e.querySelectorAll("[fill], [stroke]").forEach(t => {
                    const e = t;
                    !e.hasAttribute("data-original-fill") && e.getAttribute("fill") && e.setAttribute("data-original-fill", e.getAttribute("fill")), !e.hasAttribute("data-original-stroke") && e.getAttribute("stroke") && e.setAttribute("data-original-stroke", e.getAttribute("stroke"))
                })
            }
        }
        if (!t.hasAttribute("data-original-icon-color")) {
            const e = window.getComputedStyle(t).color;
            e && "rgba(0, 0, 0, 0)" !== e && t.setAttribute("data-original-icon-color", e)
        }
        t.setAttribute("data-icon-styles-stored", "true")
    }
}

function T(t, e) {
    if (!t || t.hasAttribute("data-icon-contrast-applied")) return;
    if (B(t)) return;
    const o = "dark" === e ? "#ffffff" : "#000000";
    I(t), "svg" === t.tagName && (j(t, o), t.setAttribute("data-icon-contrast-applied", "true"));
    t.querySelectorAll("svg").forEach(t => {
        t.hasAttribute("data-icon-contrast-applied") || (I(t), j(t, o), t.setAttribute("data-icon-contrast-applied", "true"))
    }), J(t) && !t.closest("svg") && (t.style.setProperty("color", o, "important"), t.setAttribute("data-icon-contrast-applied", "true"));
    const r = window.getComputedStyle(t, "::before").content,
        a = window.getComputedStyle(t, "::after").content;
    (r && "none" !== r && "normal" !== r || a && "none" !== a && "normal" !== a) && (t.style.setProperty("color", o, "important"), t.setAttribute("data-icon-contrast-applied", "true"))
}

function j(t, e) {
    t.style.setProperty("color", e, "important");
    t.querySelectorAll("path, circle, rect, polygon, polyline, line, ellipse").forEach(t => {
        const e = t,
            o = e.getAttribute("fill"),
            r = e.getAttribute("stroke");
        o && "none" !== o && "currentColor" !== o || e.style.setProperty("fill", "currentColor", "important"), r && "none" !== r && "currentColor" !== r || e.style.setProperty("stroke", "currentColor", "important")
    });
    const o = t.getAttribute("fill"),
        r = t.getAttribute("stroke");
    o && "none" !== o && "currentColor" !== o || t.style.setProperty("fill", "currentColor", "important"), r && "none" !== r && "currentColor" !== r || t.style.setProperty("stroke", "currentColor", "important")
}

function z(t) {
    if (!t.hasAttribute("data-icon-styles-stored")) return;
    "svg" === t.tagName && (M(t), t.removeAttribute("data-icon-contrast-applied"));
    if (t.querySelectorAll("svg").forEach(t => {
            M(t), t.removeAttribute("data-icon-contrast-applied")
        }), J(t) && !t.closest("svg")) {
        const e = t.getAttribute("data-original-icon-color");
        e ? t.style.setProperty("color", e) : t.style.removeProperty("color"), t.removeAttribute("data-icon-contrast-applied")
    }
    const e = window.getComputedStyle(t, "::before").content,
        o = window.getComputedStyle(t, "::after").content;
    if (e && "none" !== e && "normal" !== e || o && "none" !== o && "normal" !== o) {
        const e = t.getAttribute("data-original-icon-color");
        e ? t.style.setProperty("color", e) : t.style.removeProperty("color"), t.removeAttribute("data-icon-contrast-applied")
    }
    t.removeAttribute("data-icon-styles-stored")
}

function M(t) {
    const e = t.getAttribute("data-original-fill"),
        o = t.getAttribute("data-original-stroke");
    e ? (t.setAttribute("fill", e), t.style.removeProperty("fill")) : t.style.removeProperty("fill"), o ? (t.setAttribute("stroke", o), t.style.removeProperty("stroke")) : t.style.removeProperty("stroke"), t.style.removeProperty("color"), t.removeAttribute("data-original-fill"), t.removeAttribute("data-original-stroke");
    t.querySelectorAll("path, circle, rect, polygon, polyline, line, ellipse").forEach(t => {
        const e = t,
            o = e.getAttribute("data-original-fill"),
            r = e.getAttribute("data-original-stroke");
        o ? (e.setAttribute("fill", o), e.style.removeProperty("fill")) : e.style.removeProperty("fill"), r ? (e.setAttribute("stroke", r), e.style.removeProperty("stroke")) : e.style.removeProperty("stroke"), e.removeAttribute("data-original-fill"), e.removeAttribute("data-original-stroke")
    })
}
const O = async r => {
    null === r && (w = !1, D(), R(), S && ("www.tatasimplybetter.com" === window.location.hostname && function() {
        const t = document.getElementById("PageContainer");
        t && (t.style.background = t.dataset.originalBg || "", t.style.removeProperty("color"))
    }(), S.disconnect(), S = null), y(), k()), "light_contrast" === r ? (! function() {
        x = !0, V("light_contrast"), document.documentElement.classList.add("light_contrast"), document.documentElement.setAttribute("aioa-contrast", "");
        document.querySelectorAll("[data-original-text-color]").forEach(t => {
            B(t) || Q(t)
        });
        document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(t => {
            B(t) || (t.hasAttribute("data-original-text-color") || t.setAttribute("data-original-text-color", window.getComputedStyle(t).color), Q(t))
        });
        document.querySelectorAll("a:not(.accessibility-language-button):not([data-i18n-key])").forEach(t => {
                B(t) || (t.hasAttribute("data-original-text-color") || t.setAttribute("data-original-text-color", window.getComputedStyle(t).color), Q(t))
            }), o(),
            function() {
                S && S.disconnect();
                S = new MutationObserver(t => {
                    x && t.forEach(t => {
                        t.addedNodes.forEach(t => {
                            if (t.nodeType === Node.ELEMENT_NODE) {
                                const e = t;
                                if (B(e)) return;
                                !e.hasAttribute("data-original-text-color") && H(e).length > 0 && e.setAttribute("data-original-text-color", window.getComputedStyle(e).color), Q(e), e.querySelectorAll("*").forEach(t => {
                                    !t.hasAttribute("data-original-text-color") && H(t).length > 0 && t.setAttribute("data-original-text-color", window.getComputedStyle(t).color), Q(t)
                                })
                            }
                        })
                    })
                }), S.observe(document.body, {
                    childList: !0,
                    subtree: !0
                })
            }()
    }(), h()) : "dark_contrast" === r ? function() {
        w = !0, V("dark_contrast"), document.documentElement.classList.add("dark_contrast"), document.documentElement.setAttribute("aioa-contrast", "");
        document.querySelectorAll("[data-original-text-color]").forEach(t => {
            B(t) || K(t)
        });
        document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(t => {
            B(t) || (t.hasAttribute("data-original-text-color") || t.setAttribute("data-original-text-color", window.getComputedStyle(t).color), K(t))
        });
        document.querySelectorAll("a:not(.accessibility-language-button):not([data-i18n-key])").forEach(t => {
                B(t) || (t.hasAttribute("data-original-text-color") || t.setAttribute("data-original-text-color", window.getComputedStyle(t).color), K(t))
            }), o(), b(),
            function() {
                S && S.disconnect();
                S = new MutationObserver(t => {
                    w && t.forEach(t => {
                        t.addedNodes.forEach(t => {
                            if (t.nodeType === Node.ELEMENT_NODE) {
                                const e = t;
                                if (B(e)) return;
                                !e.hasAttribute("data-original-text-color") && H(e).length > 0 && e.setAttribute("data-original-text-color", window.getComputedStyle(e).color), K(e), e.querySelectorAll("*").forEach(t => {
                                    !t.hasAttribute("data-original-text-color") && H(t).length > 0 && t.setAttribute("data-original-text-color", window.getComputedStyle(t).color), K(t)
                                })
                            }
                        })
                    })
                }), S.observe(document.body, {
                    childList: !0,
                    subtree: !0
                })
            }()
    }() : "smart_contrast" === r ? function() {
        const o = document.querySelector(".aioa-widget-wrapper"),
            r = document.querySelector(".simple-keyboard");
        t.forEach(t => {
            const a = document.querySelectorAll(t);
            a.length && a.forEach(t => {
                if (J(t) && "" === H(t).trim()) return;
                if (t.querySelector(".fa, .fas, .far, .fab, .material-icons, .icon, svg")) return;
                if (e(o, t) || e(r, t)) return;
                if (B(t)) return;
                if (function(t) {
                        const e = window.getComputedStyle(t, "::before"),
                            o = window.getComputedStyle(t, "::after");
                        return "none" !== e.backgroundImage && "" !== e.backgroundImage || "none" !== o.backgroundImage && "" !== o.backgroundImage
                    }(t)) return;
                t.hasAttribute("data-original-text-color") || t.setAttribute("data-original-text-color", window.getComputedStyle(t).color);
                const a = t.getAttribute("data-original-text-color");
                t.style.setProperty("color", a, "important");
                const n = function(t) {
                        let e = t;
                        for (; e;) {
                            const t = window.getComputedStyle(e);
                            if (t.backgroundImage && "none" !== t.backgroundImage) return t.backgroundImage;
                            if (t.backgroundColor && "rgba(0, 0, 0, 0)" !== t.backgroundColor && "transparent" !== t.backgroundColor) return t.backgroundColor;
                            e = e.parentElement
                        }
                        return "#ffffff"
                    }(t) || window.getComputedStyle(document.body).backgroundColor || "#ffffff",
                    i = t.closest("svg") || t.querySelector("svg");
                if (P(n)) return void(i || t.style.setProperty("color", function(t) {
                    if (!t) return !1;
                    if (t.includes("url(")) return !1;
                    if (t.includes("gradient")) {
                        const e = t.match(/rgb[a]?\([^)]+\)/g);
                        if (!e ? .length) return !1;
                        let o = 0;
                        return e.forEach(t => {
                            const e = t.match(/\d+/g);
                            if (!e || e.length < 3) return;
                            const [r, a, n] = e.map(Number);
                            o += (.2126 * r + .7152 * a + .0722 * n) / 255
                        }), o / e.length < .4
                    }
                    return !1
                }(n) ? "#ffffff" : "#000000", "important"));
                const l = function(t) {
                    const e = t.match(/\d+/g);
                    return !e || e.length < 3 ? null : {
                        r: Number(e[0]),
                        g: Number(e[1]),
                        b: Number(e[2])
                    }
                }(n);
                if (l && function({
                        r: t,
                        g: e,
                        b: o
                    }) {
                        const r = t => (t /= 255) <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4),
                            a = r(t),
                            n = r(e),
                            i = r(o);
                        return .2126 * a + .7152 * n + .0722 * i
                    }(l) < .15) t.style.setProperty("color", "#ffffff", "important");
                else {
                    if (W(a, n) < 4.5 && !i) {
                        const e = function(t) {
                            const e = W("#000000", t),
                                o = W("#ffffff", t);
                            return e >= o ? "#000000" : "#ffffff"
                        }(n);
                        t.style.setProperty("color", e, "important")
                    }
                }
            })
        })
    }() : ("high_contrast" === r || "high_contrast" === r) && A()
};

function R() {
    document.querySelectorAll("[data-contrast-applied='true']").forEach(t => {
        t.style.setProperty("color", "", "important"), t.style.removeProperty("color"), t.style.setProperty("text-shadow", "", "important"), t.style.removeProperty("text-shadow"), t.removeAttribute("data-contrast-applied"), t.removeAttribute("data-original-text-color")
    })
}

function $(t) {
    const e = U(t).map(t => (t /= 255) <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4));
    return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
}

function W(t, e) {
    const o = $(t),
        r = $(e);
    return (Math.max(o, r) + .05) / (Math.min(o, r) + .05)
}

function U(t) {
    if (!t || "transparent" === t) return [147, 147, 147];
    if (t.includes("gradient")) {
        const e = t.match(/#[0-9a-f]{3,6}|rgba?\([^)]+\)|[a-zA-Z]+/gi) || [];
        return e.length > 0 ? U(e[0]) : [147, 147, 147]
    }
    const e = document.createElement("canvas").getContext("2d");
    if (!e) return [0, 0, 0];
    try {
        e.fillStyle = t
    } catch {
        return [0, 0, 0]
    }
    const o = e.fillStyle;
    if (!o) return [0, 0, 0];
    const r = o.match(/\d+/g) ? .map(Number);
    return !r || r.length < 3 ? [0, 0, 0] : [r[0], r[1], r[2]]
}

function D() {
    document.querySelectorAll("[data-icon-styles-stored]").forEach(t => {
        B(t) || z(t)
    });
    document.querySelectorAll("[data-original-text-color], [data-original-text-color-contrast]").forEach(t => {
        if (B(t)) return;
        const e = t.getAttribute("data-original-text-color") || t.getAttribute("data-original-text-color-contrast");
        e ? t.style.setProperty("color", e, "important") : t.style.removeProperty("color"), "www.qaderoon.sa" !== window.location.hostname && t.style.removeProperty("color"), t.removeAttribute("data-contrast-text-applied"), t.removeAttribute("data-original-text-color-contrast")
    });
    document.querySelectorAll("[data-contrast-text-applied]").forEach(t => {
        B(t) || (t.style.removeProperty("color"), t.removeAttribute("data-contrast-text-applied"))
    });
    document.querySelectorAll("[data-original-bg]").forEach(t => {
        B(t) || (N(t), t.removeAttribute("aioa-contrast"), t.removeAttribute("aioa-contrast-applied"))
    });
    document.querySelectorAll("[aioa-contrast-applied]").forEach(t => {
        t.removeAttribute("aioa-contrast-applied"), t.removeAttribute("aioa-contrast")
    }), (document.documentElement.classList.contains("dark_contrast") || document.documentElement.classList.contains("light_contrast")) && document.querySelectorAll("*").forEach(t => {
        t.hasAttribute("aioa-contrast-applied") || t.closest(".aioa-widget-wrapper") || t.style.removeProperty("color")
    }), document.documentElement.classList.remove("dark_contrast", "light_contrast"), document.documentElement.removeAttribute("aioa-contrast")
}

function F(t, e) {
    const o = t.className;
    return "string" == typeof o && e.some(e => "pinned-layer" === e ? o.includes("pinned-layer") : t.classList.contains(e))
}

function Z(t) {
    if (t.hasAttribute("aioa-contrast-applied")) return !1;
    if (L(t)) return !1;
    if (["#accessibility_settings_toggle", ".accessibility-language-button", "[data-i18n-key]", "#storerocket-search"].some(e => t.matches(e))) return !1;
    const e = H(t);
    return !!(e && e.length > 0) || !!t.matches('button, input, select, textarea, [role="button"]')
}
const G = async () => {
    const o = document.querySelector(".aioa-widget-wrapper"),
        r = document.querySelector(".simple-keyboard"),
        n = document.querySelector("#hide-interface-error-modal");
    t.forEach(t => {
        let i = document.querySelectorAll(t);
        i.length && i.forEach(t => {
            const i = t.tagName.toLowerCase(),
                l = document.querySelectorAll(".ins-tile__wrap");
            l.length >= 2 && (l[1].setAttribute("data-second-ins-tile", "true"), l[3].setAttribute("data-second-ins-tile", "true"));
            if (!(t.className && "string" == typeof t.className && t.className.includes("pinned-layer") || ["img", "picture", "video", "canvas", "wow-image", "form", "wix-bg-image"].includes(i) || e(o, t) || e(r, t) || B(t) || e(n, t) || t.getAttribute("data-original-bg") || F(t, a) || "true" === t.getAttribute("data-second-ins-tile"))) {
                if (_(t)) {
                    const e = C(t);
                    if (("image" === e.type || function(t) {
                            const e = window.getComputedStyle(t).backgroundImage;
                            if (e && "none" !== e && P(e)) return !0;
                            const o = t.getAttribute("style");
                            return !(!o || !/background(-image)?\s*:\s*url\(/i.test(o))
                        }(t)) && t.setAttribute("data-has-permanent-image-bg", "true"), "none" !== e.type) {
                        t.setAttribute("data-original-bg", e.value), t.setAttribute("data-original-bg-type", e.type), t.setAttribute("aioa-contrast", "true");
                        const o = window.getComputedStyle(t);
                        t.setAttribute("data-original-background-color", o.backgroundColor), t.setAttribute("data-original-background-image", o.backgroundImage), t.setAttribute("data-original-background-repeat", o.backgroundRepeat), t.setAttribute("data-original-background-position", o.backgroundPosition), t.setAttribute("data-original-background-size", o.backgroundSize);
                        const r = t.getAttribute("style");
                        r && (r.includes("background") || r.includes("background-color")) && t.setAttribute("has-inlinebg", "true")
                    }
                }
                let e = window.getComputedStyle(t, ":before"),
                    o = window.getComputedStyle(t, ":after"),
                    r = e.background,
                    a = o.background;
                r && "none" !== r && "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box" !== r && "rgba(0, 0, 0, 0) none no-repeat scroll 0% 0% / cover padding-box border-box" !== r && t.setAttribute("hasbeforebackground", "true"), a && "none" !== a && "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box" !== a && "rgba(0, 0, 0, 0) none no-repeat scroll 0% 0% / cover padding-box border-box" !== a && t.setAttribute("hasafterbackground", "true");
                const n = window.getComputedStyle(t).color,
                    i = H(t).length > 0;
                !t.getAttribute("data-original-text-color") && i && t.setAttribute("data-original-text-color", `${n}`)
            }
        })
    })
};

function H(t) {
    return t ? t.textContent ? .replace(/\s+/g, " ").trim() ? ? "" : ""
}

function J(t) {
    if (t.querySelector("svg")) return !0;
    if (t.classList && (t.classList.contains("icon") || t.classList.contains("fa") || t.classList.contains("fas") || t.classList.contains("far") || t.classList.contains("fab") || t.classList.contains("material-icons") || t.classList.contains("material-symbols") || t.classList.contains("aioa-icon"))) return !0;
    if ("img" === t.getAttribute("role")) return !0;
    const e = window.getComputedStyle(t, "::before").content;
    return !(!e || "none" === e || "normal" === e)
}

function K(t) {
    if (!t || t.hasAttribute("aioa-contrast-applied")) return;
    if (B(t)) return;
    const e = "true" === t.getAttribute("data-has-permanent-image-bg");
    if (t.setAttribute("aioa-contrast-applied", "true"), t.setAttribute("aioa-contrast", ""), !t.hasAttribute("data-original-text-color-contrast")) {
        const e = window.getComputedStyle(t);
        t.setAttribute("data-original-text-color-contrast", e.color)
    }
    t.style.setProperty("color", "#ffffff", "important"), t.setAttribute("data-contrast-text-applied", "true"), T(t, "dark"), t.matches("input, select, textarea") && t.style.setProperty("color", "#ffffff", "important"), H(t).length, J(t);
    if (_(t) && !e && ("BUTTON" === t.tagName || "button" === t.getAttribute("role")) && (t.innerText.toLowerCase().includes("top") || t.title ? .toLowerCase().includes("top") || t.className ? .toLowerCase().includes("top") || t.id ? .toLowerCase().includes("top"))) {
        t.removeAttribute("aioa-contrast"), t.removeAttribute("aioa-contrast-applied"), t.removeAttribute("data-contrast-text-applied");
        const e = t.getAttribute("data-original-text-color-contrast");
        return void(e && t.style.setProperty("color", e))
    }
    Array.from(t.children).forEach(t => {
        const e = t;
        (Z(e) || H(e).length > 0 || J(e)) && K(e)
    })
}

function Q(t) {
    if (!t || t.hasAttribute("aioa-contrast-applied")) return;
    if (B(t)) return;
    const e = "true" === t.getAttribute("data-has-permanent-image-bg");
    if (t.setAttribute("aioa-contrast-applied", "true"), t.setAttribute("aioa-contrast", ""), !t.hasAttribute("data-original-text-color-contrast")) {
        const e = window.getComputedStyle(t);
        t.setAttribute("data-original-text-color-contrast", e.color)
    }
    t.style.setProperty("color", "#000000", "important"), t.setAttribute("data-contrast-text-applied", "true"), T(t, "light");
    const o = H(t).length > 0,
        r = J(t),
        a = _(t);
    if ((o || r || a) && !e && ("BUTTON" === t.tagName || "button" === t.getAttribute("role")) && (t.innerText.toLowerCase().includes("top") || t.title ? .toLowerCase().includes("top") || t.className ? .toLowerCase().includes("top") || t.id ? .toLowerCase().includes("top"))) {
        t.removeAttribute("aioa-contrast"), t.removeAttribute("aioa-contrast-applied"), t.removeAttribute("data-contrast-text-applied");
        const e = t.getAttribute("data-original-text-color-contrast");
        return void(e && t.style.setProperty("color", e))
    }
    Array.from(t.children).forEach(t => {
        const e = t;
        (Z(e) || H(e).length > 0 || J(e)) && Q(e)
    })
}
const V = t => {
    const e = document.querySelectorAll("[data-original-bg]");
    e && e.forEach(e => {
        if (B(e)) return;
        if (H(e).length > 0 || _(e))
            if ("dark_contrast" === t) {
                if (("BUTTON" === e.tagName || "button" === e.getAttribute("role")) && (e.innerText.toLowerCase().includes("top") || e.title ? .toLowerCase().includes("top") || e.className ? .toLowerCase().includes("top") || e.id ? .toLowerCase().includes("top"))) return e.removeAttribute("aioa-contrast"), e.removeAttribute("aioa-contrast-applied"), void e.removeAttribute("data-contrast-text-applied");
                E(e, "#181818"), e.getAttribute("data-contrast-text-applied") || (e.style.setProperty("color", "#ffffff", "important"), e.setAttribute("data-contrast-text-applied", "true")), e.setAttribute("aioa-contrast-applied", "true"), e.setAttribute("aioa-contrast", ""), T(e, "dark")
            } else if ("light_contrast" === t) {
            if (("BUTTON" === e.tagName || "button" === e.getAttribute("role")) && (e.innerText.toLowerCase().includes("top") || e.title ? .toLowerCase().includes("top") || e.className ? .toLowerCase().includes("top") || e.id ? .toLowerCase().includes("top"))) return void e.removeAttribute("aioa-contrast");
            E(e, "#ffffff"), e.getAttribute("data-contrast-text-applied") || (e.style.setProperty("color", "#000000", "important"), e.setAttribute("data-contrast-text-applied", "true")), e.setAttribute("aioa-contrast-applied", "true"), e.setAttribute("aioa-contrast", ""), T(e, "light")
        }
    })
};

function X(t) {
    if (t) {
        if (t.removeAttribute("aioa-contrast"), t.removeAttribute("aioa-contrast-applied"), t.removeAttribute("data-contrast-text-applied"), t.hasAttribute("data-original-text-color-contrast")) {
            const e = t.getAttribute("data-original-text-color-contrast");
            e && t.style.setProperty("color", e), t.removeAttribute("data-original-text-color-contrast")
        }
        if (N(t), z(t), Array.from(t.children).forEach(t => {
                X(t)
            }), "www.tatasimplybetter.com" === window.location.hostname) {
            const t = document.getElementById("PageContainer");
            if (!t) return;
            t.style.background = t.dataset.originalBg, t.style.color = ""
        }
    }
}
export {
    K as applyDarkContrastToElement, Q as applyLightContrastToElement, G as initContrastAdjustments, X as removeDarkContrastFromElement, D as resetColorContrastStyles, R as resetSiteSpecificContrastFix, O as toggleContrast
};