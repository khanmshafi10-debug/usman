import {
    i as t,
    w as e
} from "./widget.js";
let n = null,
    i = null,
    a = null;
const c = () => {
        const t = (e = a, Array.from(e.querySelectorAll('button, a[href], input, textarea, select, [tabindex]:not([tabindex="-1"])')).filter(t => !t.hasAttribute("disabled")));
        var e;
        t[0] ? .focus()
    },
    o = async o => {
        const l = await (t => new Promise((e, n) => {
            try {
                e(new URL(t).origin === window.location.origin)
            } catch (i) {
                n(i)
            }
        }))(o);
        (e => {
            const n = document.getElementById("nt-desc");
            if (!n) return;
            const i = t.t;
            e ? (n.setAttribute("data-i18n-key", i("open_link_in_a_new_tab_continue")), n.textContent = i("open_link_in_a_new_tab_continue")) : (n.setAttribute("data-i18n-key", i("redirecting_to_an_external_site_continue")), n.textContent = i("redirecting_to_an_external_site_continue"))
        })(l), await (() => {
            if (a) return;
            const n = t.t,
                i = document.querySelector("#accessibility_external_link_new_tab_handler_modal");
            i && (a = document.createElement("div"), a.id = "new-tab-confirm-modal", a.className = "new-tab-confirm-modal-class", a.setAttribute("role", "dialog"), a.setAttribute("aria-modal", "true"), a.setAttribute("aria-labelledby", "nt-title"), a.setAttribute("aria-describedby", "nt-desc"), a.innerHTML = `\n    <div class="nt-overlay"></div>\n    <div class="nt-dialog">\n      <div id="nt-title" data-i18n-key="leaving_this_page" data-i18n-labelkey="leaving_this_page">${n("leaving_this_page")}</div>\n      <p id="nt-desc" data-i18n-key="open_link_in_a_new_tab_continue">\n        ${n("open_link_in_a_new_tab_continue")}\n      </p>\n      <div class="accessibility-external-buttons">\n            <button data-i18n-key="accept" class="accessibility-hide-accept-button" id="nt-confirm" aioa-magnifier="${!!e.text_magnifier}">${n("accept")}</button>\n            <button data-i18n-key="cancel" class="accessibility-hide-cancel-button" id="nt-cancel" aioa-magnifier="${!!e.text_magnifier}">${n("cancel")}</button>\n      </div>\n    </div>\n  `, i.appendChild(a), s(i), setTimeout(() => {
                i.style.display = "block"
            }, 200))
        })(), n = o, i = document.activeElement;
        const r = document.querySelector("#accessibility_external_link_new_tab_handler_modal");
        r && (r.style.display = "block"), setTimeout(c, 0)
    },
    l = () => {
        const t = document.querySelector("#accessibility_external_link_new_tab_handler_modal");
        t && (t.style.display = "none"), n = null, i ? .focus()
    },
    s = t => {
        a && !a.hidden && (a.contains(t.target) || c())
    },
    r = () => {
        document.addEventListener("click", t => {
            const e = t.target.closest("a");
            e && e.href && (t.ctrlKey || t.metaKey || 1 === t.button || (t => "_self" !== t.target && "_parent" !== t.target && "_top" !== t.target && "" !== t.target || t.rel ? .includes("noopener") || "true" === t.dataset.newtab)(e) && (t.preventDefault(), t.stopPropagation(), o(e.href)))
        }), document.addEventListener("focusin", s), document.addEventListener("keydown", t => {
            a && !a.hidden && "Escape" === t.key && l()
        }), document.addEventListener("click", t => {
            if (!a || a.hidden) return;
            const e = t.target;
            "nt-confirm" === e.id && n && (window.open(n, "_blank", "noopener"), l()), ("nt-cancel" === e.id || e.classList.contains("nt-overlay")) && l()
        }), document.addEventListener("focusin", t => {
            document.querySelectorAll(".nt-focus").forEach(t => t.classList.remove("nt-focus")), t.target ? .classList.add("nt-focus")
        })
    };
export {
    r as i
};