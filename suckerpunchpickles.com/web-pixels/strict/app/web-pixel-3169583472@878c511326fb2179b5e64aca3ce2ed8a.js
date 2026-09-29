(() => {
    var yt = Object.create;
    var B = Object.defineProperty,
        ft = Object.defineProperties,
        It = Object.getOwnPropertyDescriptor,
        vt = Object.getOwnPropertyDescriptors,
        ht = Object.getOwnPropertyNames,
        Z = Object.getOwnPropertySymbols,
        kt = Object.getPrototypeOf,
        nt = Object.prototype.hasOwnProperty,
        wt = Object.prototype.propertyIsEnumerable;
    var tt = (o, r, c) => r in o ? B(o, r, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: c
        }) : o[r] = c,
        J = (o, r) => {
            for (var c in r || (r = {})) nt.call(r, c) && tt(o, c, r[c]);
            if (Z)
                for (var c of Z(r)) wt.call(r, c) && tt(o, c, r[c]);
            return o
        },
        V = (o, r) => ft(o, vt(r));
    var O = (o, r, c) => () => {
        if (c) throw c[0];
        try {
            return o && (r = o(o = 0)), r
        } catch (m) {
            throw c = [m], m
        }
    };
    var Et = (o, r) => () => {
        try {
            return r || o((r = {
                exports: {}
            }).exports, r), r.exports
        } catch (c) {
            throw r = 0, c
        }
    };
    var bt = (o, r, c, m) => {
        if (r && typeof r == "object" || typeof r == "function")
            for (let d of ht(r)) !nt.call(o, d) && d !== c && B(o, d, {
                get: () => r[d],
                enumerable: !(m = It(r, d)) || m.enumerable
            });
        return o
    };
    var St = (o, r, c) => (c = o != null ? yt(kt(o)) : {}, bt(r || !o || !o.__esModule ? B(c, "default", {
        value: o,
        enumerable: !0
    }) : c, o));
    var l = (o, r, c) => new Promise((m, d) => {
        var f = y => {
                try {
                    A(c.next(y))
                } catch (_) {
                    d(_)
                }
            },
            P = y => {
                try {
                    A(c.throw(y))
                } catch (_) {
                    d(_)
                }
            },
            A = y => y.done ? m(y.value) : Promise.resolve(y.value).then(f, P);
        A((c = c.apply(o, r)).next())
    });
    var et, rt = O(() => {
        et = "WebPixel::Render"
    });
    var F, ot = O(() => {
        rt();
        F = o => shopify.extend(et, o)
    });
    var it = O(() => {
        ot()
    });
    var ct = O(() => {
        it()
    });
    var at = Et(R => {
        "use strict";
        ct();
        F(({
            analytics: o,
            browser: r,
            init: c
        }) => {
            var X;
            let m = c.data.shop.myshopifyDomain,
                d = "atomato_queue",
                f = "atomato_revenue_queue",
                P = "atomato_revenue_session",
                A = 6,
                y = 720 * 60 * 60 * 1e3,
                _ = m.includes("dev-atomato") ? "https://dmzzyojocvdixoyqngig.supabase.co/functions/v1/analytics" : "https://dxekurkizbesfdfcyach.supabase.co/functions/v1/analytics",
                st = m.includes("dev-atomato") ? "https://dmzzyojocvdixoyqngig.supabase.co/functions/v1/analytics-campaign-revenue" : "https://dxekurkizbesfdfcyach.supabase.co/functions/v1/analytics-campaign-revenue",
                H = x((X = c.data.customer) == null ? void 0 : X.id);

            function x(n) {
                if (n == null) return null;
                let t = String(n);
                return t && t.split("/").pop() || null
            }

            function p(n, t = 0) {
                let e = Number(n);
                return Number.isFinite(e) ? e : t
            }

            function L(n) {
                return n === "mobile" || n === "desktop" ? n : null
            }

            function $(n) {
                var e, i;
                let t = (i = (e = n == null ? void 0 : n.context) == null ? void 0 : e.window) == null ? void 0 : i.innerWidth;
                return typeof t == "number" && Number.isFinite(t) ? t <= 740 ? "mobile" : "desktop" : null
            }

            function ut(n) {
                let t = p(n, A),
                    e = t > 0 ? Math.min(24, t) : A;
                return Math.round(e * 60 * 60 * 1e3)
            }

            function G(n) {
                if (typeof n != "string" || !n.trim()) return null;
                try {
                    let e = (new URL(n, `https://${m}`).pathname || "").toLowerCase().match(/^\/products\/([^/]+)/);
                    return e != null && e[1] ? `/products/${decodeURIComponent(e[1])}` : null
                } catch (t) {
                    return null
                }
            }

            function E(n) {
                if (!n) return null;
                try {
                    return JSON.parse(n)
                } catch (t) {
                    return null
                }
            }

            function dt() {
                return typeof crypto != "undefined" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2,10)}`
            }

            function K(n) {
                return n === "notifeed" || n === "notipop" || n === "notisell"
            }

            function U() {
                return l(this, null, function*() {
                    let n = yield r.localStorage.getItem(P), t = E(n);
                    return !t || !K(t.campaignType) ? null : (t.clickedProductId == null && (t.clickedProductId = null), t.clickedProductPath == null && (t.clickedProductPath = null), t.device = L(t.device), t.ledgerEndsAt < Date.now() ? (yield r.localStorage.removeItem(P), null) : t)
                })
            }

            function M(n) {
                return l(this, null, function*() {
                    yield r.localStorage.setItem(P, JSON.stringify(n))
                })
            }

            function Y() {
                return l(this, null, function*() {
                    yield r.localStorage.removeItem(P)
                })
            }

            function W(n) {
                return l(this, null, function*() {
                    let t = yield r.sessionStorage.getItem(f), e = E(t) || [];
                    e.push(n), yield r.sessionStorage.setItem(f, JSON.stringify(e))
                })
            }

            function lt(n) {
                return l(this, null, function*() {
                    if (!n.length) return;
                    let t = yield r.sessionStorage.getItem(d), e = E(t) || [];
                    e.push(...n), yield r.sessionStorage.setItem(d, JSON.stringify(e))
                })
            }

            function mt(n) {
                let t = n.metric,
                    e = n.campaignType,
                    i = p(n.campaignId);
                return !t || !e || !i ? null : [t, e, i, n.userType || "new", n.interactionType || "unique", n.metadata || null, Date.now(), n.productId || null, n.variantId || null, L(n.device)]
            }

            function j(n, t = !1) {
                return l(this, null, function*() {
                    let e = n.map(i => mt(i)).filter(i => !!i);
                    e.length && (yield lt(e), t && (yield Q()))
                })
            }

            function pt(n) {
                var I, v, h, k, w, D, N, C, q;
                let t = ((I = n.data) == null ? void 0 : I.cartLine) || {},
                    e = t.merchandise || {},
                    i = x(e.id),
                    a = x((v = e.product) == null ? void 0 : v.id),
                    s = G((h = e.product) == null ? void 0 : h.url),
                    g = Math.max(1, Math.floor(p(t.quantity, 1))),
                    u = p((w = (k = t.cost) == null ? void 0 : k.totalAmount) == null ? void 0 : w.amount),
                    b = p((D = e.price) == null ? void 0 : D.amount),
                    T = Number((u > 0 ? u : b * g).toFixed(2)),
                    S = ((C = (N = t.cost) == null ? void 0 : N.totalAmount) == null ? void 0 : C.currencyCode) || ((q = e.price) == null ? void 0 : q.currencyCode) || "USD";
                return {
                    variantId: i && p(i, 0) || null,
                    productId: a && p(a, 0) || null,
                    productPath: s,
                    quantity: g,
                    revenue: T,
                    currency: S
                }
            }

            function gt(n) {
                var i;
                let t = ((i = n.data) == null ? void 0 : i.checkout) || {};
                return (Array.isArray(t.lineItems) ? t.lineItems : []).map(a => {
                    var T, S, I, v, h, k, w, D, N, C, q;
                    let s = x(((T = a.variant) == null ? void 0 : T.id) || ((S = a.merchandise) == null ? void 0 : S.id)),
                        g = Math.max(1, Math.floor(p(a.quantity, 1))),
                        u = p(((I = a.finalLinePrice) == null ? void 0 : I.amount) || ((v = a.price) == null ? void 0 : v.amount) || ((k = (h = a.variant) == null ? void 0 : h.price) == null ? void 0 : k.amount)),
                        b = ((w = a.finalLinePrice) == null ? void 0 : w.currencyCode) || ((D = a.price) == null ? void 0 : D.currencyCode) || ((C = (N = a.variant) == null ? void 0 : N.price) == null ? void 0 : C.currencyCode) || ((q = t.totalPrice) == null ? void 0 : q.currencyCode) || "USD";
                    return {
                        variantId: s && p(s, 0) || null,
                        quantity: g,
                        unitPrice: u,
                        currency: b
                    }
                }).filter(a => a.variantId !== null && a.quantity > 0 && a.unitPrice >= 0)
            }

            function Q() {
                return l(this, null, function*() {
                    let n = yield r.sessionStorage.getItem(d);
                    if (!n) return;
                    let t = E(n) || [];
                    if (t.length !== 0) {
                        yield r.sessionStorage.removeItem(d);
                        try {
                            let e = yield fetch(_, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "text/plain"
                                },
                                body: JSON.stringify({
                                    shop: m,
                                    interactions: t
                                }),
                                keepalive: !0
                            });
                            if (!e.ok) throw new Error(e.statusText)
                        } catch (e) {
                            console.error("[Atomato] Batch delivery failed, restoring queue");
                            let i = E(yield r.sessionStorage.getItem(d)) || [];
                            yield r.sessionStorage.setItem(d, JSON.stringify(t.concat(i)))
                        }
                    }
                })
            }

            function z() {
                return l(this, null, function*() {
                    let n = yield r.sessionStorage.getItem(f);
                    if (!n) return;
                    let t = E(n) || [];
                    if (t.length !== 0) {
                        yield r.sessionStorage.removeItem(f);
                        try {
                            let e = yield fetch(st, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "text/plain"
                                },
                                body: JSON.stringify({
                                    shop: m,
                                    events: t
                                }),
                                keepalive: !0
                            });
                            if (!e.ok) throw new Error(e.statusText)
                        } catch (e) {
                            console.error("[Atomato] Revenue batch delivery failed, restoring queue");
                            let i = E(yield r.sessionStorage.getItem(f)) || [];
                            yield r.sessionStorage.setItem(f, JSON.stringify(t.concat(i)))
                        }
                    }
                })
            }
            setInterval(Q, 5e3), setInterval(z, 5e3), o.subscribe("atomato:interaction", n => l(null, null, function*() {
                let t = n.customData;
                yield j([t], !!t.keepalive)
            })), o.subscribe("atomato:interaction_batch", n => l(null, null, function*() {
                let t = n.customData,
                    e = Array.isArray(t.interactions) ? t.interactions : [];
                yield j(e, !!t.keepalive)
            })), o.subscribe("atomato:click-attribution", n => l(null, null, function*() {
                var S, I, v;
                let t = n.customData,
                    e = String((t == null ? void 0 : t.campaignType) || ""),
                    i = p(t == null ? void 0 : t.campaignId);
                if (!K(e) || !i) return;
                let a = p(t == null ? void 0 : t.clickedProductId, 0) || null,
                    s = G(t == null ? void 0 : t.destinationHref),
                    g = L(t == null ? void 0 : t.device) || $(n),
                    u = yield U();
                if (u && u.campaignType === e && u.campaignId === i && u.ledgerEndsAt >= Date.now()) {
                    let h = (S = a != null ? a : u.clickedProductId) != null ? S : null,
                        k = (I = s != null ? s : u.clickedProductPath) != null ? I : null,
                        w = (v = u.device) != null ? v : g;
                    (h !== u.clickedProductId || k !== u.clickedProductPath || w !== u.device) && (yield M(V(J({}, u), {
                        clickedProductId: h,
                        clickedProductPath: k,
                        device: w
                    })));
                    return
                }
                let b = p(t == null ? void 0 : t.clickAt, Date.now()),
                    T = ut(t == null ? void 0 : t.atcWindowHours);
                yield M({
                    sessionId: dt(),
                    clickAt: b,
                    campaignType: e,
                    campaignId: i,
                    clickedProductId: a,
                    clickedProductPath: s,
                    atcWindowEndsAt: b + T,
                    ledgerEndsAt: b + y,
                    device: g
                })
            })), o.subscribe("product_added_to_cart", n => l(null, null, function*() {
                let t = yield U();
                if (!t || Date.now() > t.atcWindowEndsAt) return;
                let e = pt(n);
                if (e.revenue <= 0) return;
                let i = t.clickedProductPath != null && e.productPath != null && t.clickedProductPath === e.productPath,
                    a = t.clickedProductId != null && e.productId != null && t.clickedProductId === e.productId || i ? "direct" : "assisted",
                    s = t.device || $(n);
                !t.device && s && (yield M(V(J({}, t), {
                    device: s
                }))), yield W({
                    type: "atc",
                    sessionId: t.sessionId,
                    clickAt: t.clickAt,
                    campaignType: t.campaignType,
                    campaignId: t.campaignId,
                    customerId: H,
                    productId: e.productId,
                    variantId: e.variantId,
                    quantity: e.quantity,
                    revenue: e.revenue,
                    currency: e.currency,
                    attribution: a,
                    device: s,
                    createdAt: Date.now()
                })
            })), o.subscribe("checkout_started", n => l(null, null, function*() {
                var i, a;
                let t = yield U();
                if (!t) return;
                let e = (a = (i = n == null ? void 0 : n.data) == null ? void 0 : i.checkout) == null ? void 0 : a.token;
                e && (yield W({
                    type: "link_checkout",
                    sessionId: t.sessionId,
                    checkoutToken: String(e),
                    createdAt: Date.now()
                }), yield z())
            })), o.subscribe("checkout_completed", n => l(null, null, function*() {
                var a, s, g;
                let t = yield U();
                if (!t) return;
                let e = ((a = n == null ? void 0 : n.data) == null ? void 0 : a.checkout) || {},
                    i = gt(n);
                if (i.length === 0) {
                    yield Y();
                    return
                }
                yield W({
                    type: "checkout",
                    sessionId: (s = t == null ? void 0 : t.sessionId) != null ? s : null,
                    checkoutToken: e != null && e.token ? String(e.token) : null,
                    customerId: H,
                    orderId: (g = e == null ? void 0 : e.order) != null && g.id ? String(e.order.id) : null,
                    lineItems: i,
                    createdAt: Date.now()
                }), yield z(), yield Y()
            }))
        })
    });
    var Ot = St(at());
})();