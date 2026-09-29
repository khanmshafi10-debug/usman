import {
    _ as e
} from "./assets/preload-helper.js";
async function t() {
    try {
        const [t, s] = ["accessibility", "https://www.skynettechnologies.com"], i = `${s}/${t}/js/assets`, a = e(() =>
            import (`${i}/main-widget.js`), []), o = e(() =>
            import (`${i}/widget-core.js`), []);
        await new Promise(e => {
            window.__skynetCSSReady ? e() : (document.addEventListener("skynetCSSReady", () => e(), {
                once: !0
            }), setTimeout(() => e(), 1e4))
        }), await Promise.all([a, o]), await e(() =>
            import (`${i}/widget.js`), [])
    } catch (t) {}
}
"requestIdleCallback" in window ? requestIdleCallback(() => {
    t()
}) : setTimeout(() => {
    t()
}, 0);