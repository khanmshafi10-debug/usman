(() => {
    var X = Object.create;
    var I = Object.defineProperty,
        Y = Object.defineProperties,
        z = Object.getOwnPropertyDescriptor,
        Z = Object.getOwnPropertyDescriptors,
        K = Object.getOwnPropertyNames,
        D = Object.getOwnPropertySymbols,
        ee = Object.getPrototypeOf,
        B = Object.prototype.hasOwnProperty,
        te = Object.prototype.propertyIsEnumerable;
    var U = (r, e, t) => e in r ? I(r, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
        }) : r[e] = t,
        J = (r, e) => {
            for (var t in e || (e = {})) B.call(e, t) && U(r, t, e[t]);
            if (D)
                for (var t of D(e)) te.call(e, t) && U(r, t, e[t]);
            return r
        },
        V = (r, e) => Y(r, Z(e));
    var y = (r, e) => () => (r && (e = r(r = 0)), e);
    var re = (r, e) => () => (e || r((e = {
        exports: {}
    }).exports, e), e.exports);
    var oe = (r, e, t, o) => {
        if (e && typeof e == "object" || typeof e == "function")
            for (let n of K(e)) !B.call(r, n) && n !== t && I(r, n, {
                get: () => e[n],
                enumerable: !(o = z(e, n)) || o.enumerable
            });
        return r
    };
    var ne = (r, e, t) => (t = r != null ? X(ee(r)) : {}, oe(e || !r || !r.__esModule ? I(t, "default", {
        value: r,
        enumerable: !0
    }) : t, r));
    var c = (r, e, t) => new Promise((o, n) => {
        var a = i => {
                try {
                    d(t.next(i))
                } catch (u) {
                    n(u)
                }
            },
            s = i => {
                try {
                    d(t.throw(i))
                } catch (u) {
                    n(u)
                }
            },
            d = i => i.done ? o(i.value) : Promise.resolve(i.value).then(a, s);
        d((t = t.apply(r, e)).next())
    });
    var $, j = y(() => {
        $ = "WebPixel::Render"
    });
    var v, q = y(() => {
        j();
        v = r => shopify.extend($, r)
    });
    var G = y(() => {
        q()
    });
    var W = y(() => {
        G()
    });
    var Q = re(w => {
        W();
        var m = {
                sessionId: null,
                sessionReferrer: null,
                landingURL: null
            },
            se = 2e3;
        v(({
            analytics: r,
            browser: e,
            init: t,
            settings: o
        }) => {
            r.subscribe("checkout_started", () => c(null, null, function*() {
                let n = yield F(e, t, o), a = yield h("PAGEVIEW", {
                    title: t.context.document.title
                }, e, t, o, n);
                f(a, e, o)
            })), r.subscribe("checkout_completed", a => c(null, [a], function*({
                data: n
            }) {
                let s = yield F(e, t, o), d = yield h("PAGEVIEW", {
                    title: t.context.document.title
                }, e, t, o, s);
                f(d, e, o);
                let i = yield h("CONVERSION", {
                    goalId: o.goal_hash,
                    order: Object.fromEntries(Object.entries(n.checkout).filter(([u]) => !["billingAddress", "email", "phone", "shippingAddress"].includes(u)))
                }, e, t, o, s);
                f(i, e, o)
            })), r.subscribe("product_added_to_cart", a => c(null, [a], function*({
                data: n
            }) {
                var u, S, p, g, E, _, R, k, T, O, N, x, A, L, P, C, b;
                let s = n.cartLine;
                if (!s) return;
                let d = {
                        type: "ADD_TO_CART",
                        productId: Number((S = (u = s.merchandise) == null ? void 0 : u.product) == null ? void 0 : S.id),
                        variantId: (p = s.merchandise) == null ? void 0 : p.id,
                        quantity: String(s.quantity || 1),
                        price: (E = (g = s.cost) == null ? void 0 : g.totalAmount) == null ? void 0 : E.amount,
                        name: (_ = s.merchandise) == null ? void 0 : _.product.title,
                        variant: (R = s.merchandise) == null ? void 0 : R.title,
                        currency: (T = (k = s.cost) == null ? void 0 : k.totalAmount) == null ? void 0 : T.currencyCode,
                        sku: (O = s.merchandise) == null ? void 0 : O.sku,
                        category: (x = (N = s.merchandise) == null ? void 0 : N.product) == null ? void 0 : x.type,
                        brand: (L = (A = s.merchandise) == null ? void 0 : A.product) == null ? void 0 : L.vendor,
                        cart: t.data.cart ? {
                            lines: (P = t.data.cart.lines) == null ? void 0 : P.map(l => ({
                                quantity: l.quantity,
                                productId: l.merchandise.product.id,
                                id: l.merchandise.id,
                                amount: l.merchandise.price.amount,
                                currency: l.merchandise.price.currencyCode,
                                totalAmount: l.cost.totalAmount.amount
                            })),
                            amount: (C = t.data.cart.cost) == null ? void 0 : C.totalAmount.amount,
                            currency: (b = t.data.cart.cost) == null ? void 0 : b.totalAmount.currencyCode,
                            totalQuantity: t.data.cart.totalQuantity
                        } : void 0
                    },
                    i = yield h("INTERACTION", d, e, t, o);
                f(i, e, o)
            }))
        });

        function f(r, e, t) {
            return c(this, null, function*() {
                var o;
                try {
                    if ((yield e.sessionStorage.getItem("wisepops_debug")) === "true") {
                        let a = JSON.parse((o = yield e.sessionStorage.getItem("wisepops_debug_items")) != null ? o : "[]");
                        a.push(V(J({}, r), {
                            eventType: r.type,
                            type: "EVENT"
                        })), yield e.sessionStorage.setItem("wisepops_debug_items", JSON.stringify(a))
                    }
                } catch (n) {}
                if (t.ingestion_url === "local") {
                    console.log(`Track ${r.type}`, r);
                    return
                }
                fetch(`${t.ingestion_url}?v=1.0.0&site=${t.hash}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        source: "web-pixel"
                    },
                    body: JSON.stringify(r),
                    mode: "cors",
                    credentials: "omit",
                    cache: "no-store",
                    redirect: "error",
                    keepalive: !0
                })
            })
        }

        function H(r, e) {
            return c(this, null, function*() {
                try {
                    return yield r.sessionStorage.getItem(e)
                } catch (t) {
                    return null
                }
            })
        }

        function h(s, d, i, u, S) {
            return c(this, arguments, function*(r, e, t, o, n, a = m) {
                let p = yield M(t, n), g = yield H(t, "wisepops-pageview_id");
                return {
                    type: r,
                    visitorId: p,
                    sessionId: a.sessionId,
                    sessionReferrer: a.sessionReferrer,
                    landingURL: a.landingURL,
                    pageviewId: g,
                    page: o.context.document.location.hostname + o.context.document.location.pathname,
                    url: o.context.document.location.href,
                    pageReferrer: o.context.document.referrer,
                    tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
                    scrollY: o.context.window.scrollY,
                    payload: JSON.stringify(e)
                }
            })
        }

        function M(r, e) {
            return c(this, null, function*() {
                try {
                    let t = e.hash;
                    if (typeof t != "string") return null;
                    let o = yield r.cookie.get("wisepops_visitor");
                    return JSON.parse(decodeURIComponent(o))[t]
                } catch (t) {
                    return null
                }
            })
        }

        function F(r, e, t) {
            return c(this, null, function*() {
                let o = t.loader_url;
                if (!o || o === "local") return m;
                let n = yield M(r, t), a = t.hash;
                if (!n || !a) return m;
                let s = yield H(r, "wisepops-pageview_id"), d = {
                    url: e.context.document.location.href,
                    referrer: e.context.document.referrer,
                    pageviewId: s || void 0,
                    preserveSession: !0
                };
                return Promise.race([ae(`${o}/id?h=${a}&vid=${n}&eid=`, d), new Promise(i => setTimeout(() => i(m), se))])
            })
        }

        function ae(r, e) {
            return c(this, null, function*() {
                var t, o, n;
                try {
                    let a = yield fetch(r, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(e),
                        mode: "cors",
                        credentials: "omit",
                        cache: "no-store",
                        redirect: "error",
                        keepalive: !0
                    });
                    if (!a.ok) return m;
                    let s = yield a.json();
                    return {
                        sessionId: (t = s.session_id) != null ? t : null,
                        sessionReferrer: (o = s.referrer) != null ? o : null,
                        landingURL: (n = s.landing_url) != null ? n : null
                    }
                } catch (a) {
                    return m
                }
            })
        }
    });
    var ve = ne(Q());
})();