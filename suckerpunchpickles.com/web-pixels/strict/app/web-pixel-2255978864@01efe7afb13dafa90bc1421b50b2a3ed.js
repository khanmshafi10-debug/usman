(() => {
    var C;
    (function(e) {
        e.checkout_address_info_submitted = "checkout_address_info_submitted", e.checkout_completed = "checkout_completed", e.checkout_contact_info_submitted = "checkout_contact_info_submitted", e.checkout_shipping_info_submitted = "checkout_shipping_info_submitted", e.checkout_started = "checkout_started", e.collection_viewed = "collection_viewed", e.page_viewed = "page_viewed", e.payment_info_submitted = "payment_info_submitted", e.product_added_to_cart = "product_added_to_cart", e.product_viewed = "product_viewed", e.search_submitted = "search_submitted", e.custom_event = "custom_event", e.clicked = "clicked"
    })(C || (C = {}));
    var m;
    (function(e) {
        e.page_enter = "page_enter", e.add_to_cart = "add_to_cart", e.cart_updated = "cart_updated", e.view_item = "view_item", e.checkout = "checkout", e.search = "search", e.custom_event = "custom_event", e.purchase = "purchase", e.click_item = "click_item"
    })(m || (m = {}));
    var O = class extends Event {
        constructor(t, o) {
            super(t), this.context = o
        }
    };
    var B = "amEventSid",
        q = "amEventSid_cookieless",
        R = "_recordTime",
        F = "amUtmSource",
        J = "amUtmMedium",
        Q = "amUtmContent",
        Z = "amUtmCampaign",
        G = "amUtmSCP";
    var U = "_ama",
        T = "_am_id";
    var ee = "G-82HPXE066K",
        te = {
            testing: "https://www.automizely-analytics.io/analytics/collect",
            staging: "https://api-staging.automizely.com/analytics/collect",
            production: "https://www.automizely-analytics.com/analytics/collect"
        },
        oe = {
            testing: "https://www.automizely-analytics.io/cookieless/collect",
            staging: "https://api-staging.automizely.com/cookieless/collect",
            production: "https://www.automizely-analytics.com/cookieless/collect"
        };

    function Pe() {
        let e = new Date().getTime(),
            t = typeof performance != "undefined" && performance.now && performance.now() * 1e3 || 0;
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(o) {
            let n = Math.random() * 16;
            return e > 0 ? (n = (e + n) % 16 | 0, e = Math.floor(e / 16)) : (n = (t + n) % 16 | 0, t = Math.floor(t / 16)), (o === "x" ? n : n & 3 | 8).toString(16)
        })
    }

    function b() {
        let e = "";
        try {
            e = URL.createObjectURL(new Blob)
        } catch (n) {}
        let t = e.toString();
        try {
            URL.revokeObjectURL(e)
        } catch (n) {}
        let o = t.split(/[:/]/g).pop();
        return o ? o.toLowerCase() : Pe()
    }

    function ne(e, t) {
        return Math.floor(Math.random() * (t - e) + e)
    }

    function ie(e) {
        let t = `${ne(1,9)}`;
        for (let o = 1; o < e; o++) t += ne(0, 9);
        return t
    }

    function X(e) {
        for (let t in e)(e[t] === void 0 || e[t] === null) && delete e[t];
        return e
    }

    function P(e) {
        return !e || isNaN(parseFloat(e)) ? 0 : Math.round(parseFloat(e) * 100)
    }
    var w;
    (function(e) {
        e.Home = "P00001", e.Collections = "P00002", e.SearchResults = "P00003", e.Product = "P00004", e.Cart = "P00005", e.ThankYou = "P00006", e.Checkout = "P00007", e.PostPurchase = "P00008", e.OrderStatus = "P00009", e.OrderIndex = "P00010"
    })(w || (w = {}));
    var ce;
    (function(e) {
        e.cart = "/cart.js", e.cartCheckout = "/cart"
    })(ce || (ce = {}));
    var de = [{
        page_type: "home",
        regexp: /^\/$/,
        page_sn: w.Home
    }, {
        page_type: "collections",
        regexp: /^\/collections\/((?!products\/).)*$/,
        page_sn: w.Collections
    }, {
        page_type: "collection",
        regexp: /\/collections\/((?!products\/).)*$/,
        page_sn: w.Collections
    }, {
        page_type: "searchresults",
        regexp: /.*a?\/search$/,
        page_sn: w.SearchResults
    }, {
        page_type: "product",
        regexp: /^\/products\/[^/]+$/,
        page_sn: w.Product
    }, {
        page_type: "",
        regexp: /^\/cart$/,
        page_sn: w.Cart
    }, {
        page_type: "",
        regexp: /.*\/checkouts\/.+thank_you/,
        page_sn: w.ThankYou
    }];
    var $ = function(e, t, o, n) {
        function i(s) {
            return s instanceof o ? s : new o(function(c) {
                c(s)
            })
        }
        return new(o || (o = Promise))(function(s, c) {
            function r(u) {
                try {
                    p(n.next(u))
                } catch (l) {
                    c(l)
                }
            }

            function _(u) {
                try {
                    p(n.throw(u))
                } catch (l) {
                    c(l)
                }
            }

            function p(u) {
                u.done ? s(u.value) : i(u.value).then(r, _)
            }
            p((n = n.apply(e, t || [])).next())
        })
    };

    function j(e) {
        var t, o, n;
        let i = e.window.location.pathname,
            s = (n = (o = (t = e.window.ShopifyAnalytics) === null || t === void 0 ? void 0 : t.meta) === null || o === void 0 ? void 0 : o.page) === null || n === void 0 ? void 0 : n.pageType;
        return [...de, {
            page_type: "thank_you",
            regexp: /^([^]+)?checkouts(\/c)?[^]+\/thank[_-]you/,
            page_sn: w.ThankYou
        }, {
            page_type: "checkout",
            regexp: /\/checkouts\/\w+\/[\w-]+\/\w+$/,
            page_sn: w.Checkout
        }, {
            page_type: "checkout",
            regexp: /\/.*\/checkouts\/.*$/,
            page_sn: w.Checkout
        }].find(r => r.regexp.test(i) || s === r.page_type) || {
            page_type: s,
            regexp: /.+/,
            page_sn: ""
        }
    }

    function se(e) {
        var t, o, n;
        let i = ((n = (o = (t = e.window.ShopifyAnalytics) === null || t === void 0 ? void 0 : t.meta) === null || o === void 0 ? void 0 : o.page) === null || n === void 0 ? void 0 : n.customerId) || "";
        return {
            userId: i,
            isLogged: !!i
        }
    }

    function V(e, t) {
        var o;
        return $(this, void 0, void 0, function*() {
            let n = [];
            try {
                n = (o = yield t.cookie.get()) === null || o === void 0 ? void 0 : o.split(";")
            } catch (s) {}
            let i = `${e}=`;
            for (let s of n)
                if (s = s.trim(), s.substring(0, i.length) === i) return s.substring(i.length);
            return ""
        })
    }

    function be(e) {
        return $(this, void 0, void 0, function*() {
            let t = yield V("_ga", e), o = t.indexOf(".");
            if (o > -1 && (o = t.indexOf(".", o + 1), o > -1)) {
                let n = t.substring(o + 1);
                return n.length >= 12 ? n : ""
            }
            return ""
        })
    }

    function ae(e) {
        return $(this, void 0, void 0, function*() {
            let t = yield be(e), o = yield e.cookie.get(U), n = t || o || b(), i = new Date(Date.now() + 31536e3 * 1e3);
            return e.cookie.set(`${U}=${n}; expires=${i.toISOString()}; path=${"/"}`), n
        })
    }

    function Ae() {
        return ["kadensse", "bad-no"]
    }
    var le = (e, t) => {
        let {
            hostname: o
        } = e.window.location, n = o.includes("myshopify.com") ? o.split(".")[0] : o;
        if (Ae().includes(n)) {
            let i = new Date;
            t.cookie.set(`${T}=deleted; expires=${i.toISOString()}; path=${"/"}`), t.cookie.set(`${U}=deleted; expires=${i.toISOString()}; path=${"/"}`)
        }
    };

    function ue() {
        let e = new Date().getTime();
        return typeof e == "number" ? e : 0
    }

    function Ne() {
        let e = new Date;
        return e.getSeconds() + 60 * e.getMinutes() + 3600 * e.getHours()
    }

    function N(e, t, o) {
        var n, i, s;
        return $(this, void 0, void 0, function*() {
            let c = (n = o == null ? void 0 : o.expires) !== null && n !== void 0 ? n : 1800,
                r = Date.now(),
                _ = yield(i = e.sessionStorage) === null || i === void 0 ? void 0 : i.getItem(t), p = Number(yield(s = e.sessionStorage) === null || s === void 0 ? void 0 : s.getItem(t + R));
            return _ && (c === !1 || r - p < c) || (_ = b(), e.sessionStorage.setItem(t, _), e.sessionStorage.setItem(t + R, `${r}`)), _
        })
    }
    var _e = () => `${Ne()}.${ie(8)}`;
    var A = function(e, t, o, n) {
            function i(s) {
                return s instanceof o ? s : new o(function(c) {
                    c(s)
                })
            }
            return new(o || (o = Promise))(function(s, c) {
                function r(u) {
                    try {
                        p(n.next(u))
                    } catch (l) {
                        c(l)
                    }
                }

                function _(u) {
                    try {
                        p(n.throw(u))
                    } catch (l) {
                        c(l)
                    }
                }

                function p(u) {
                    u.done ? s(u.value) : i(u.value).then(r, _)
                }
                p((n = n.apply(e, t || [])).next())
            })
        },
        Me = "amwcp1",
        Re = "3.3",
        pe = {
            _: "ep",
            event_time: "epn"
        },
        L = {},
        Ue = "shopify";

    function me(e, t, o, n, i) {
        return A(this, void 0, void 0, function*() {
            return yield Te({
                gaMeasurementId: ee || "",
                state: {
                    [e]: {
                        shortCode: (i == null ? void 0 : i.productShortCode) || ""
                    }
                }
            }, t, o, n, (i == null ? void 0 : i.isCookieLessMode) || !1)
        })
    }

    function ge(e, t, o, n, i, s, c, r) {
        var _, p, u;
        return A(this, void 0, void 0, function*() {
            let l = {
                state: {},
                appEntries: {},
                eventMap: new WeakMap
            };
            l.state[t] = {
                shortCode: (c == null ? void 0 : c.productShortCode) || ""
            };
            let a = `${t}.${(c==null?void 0:c.entry)||""}`;
            if (l.appEntries = l.appEntries || {}, l.appEntries.hasOwnProperty(a)) return;
            l.appEntries[a] = 1;
            let g = l.eventMap,
                v = g.get(e);
            if (v || (v = {
                    data: [],
                    sentDataLen: -1,
                    sentAppLen: -1
                }, g.set(e, v)), v.eventId || (v.eventId = b()), e.type === m.search) {
                let d = (_ = e.context) === null || _ === void 0 ? void 0 : _.data;
                v.data = [{
                    user_client_id: d.client_id,
                    page: {
                        page_sn: d == null ? void 0 : d.page_sn
                    },
                    params: {
                        query: encodeURIComponent((p = d == null ? void 0 : d.query) !== null && p !== void 0 ? p : "")
                    }
                }]
            } else {
                let d = (u = e.context) === null || u === void 0 ? void 0 : u.data;
                v.data = [{
                    user_client_id: d.client_id,
                    page: (d == null ? void 0 : d.page) || {
                        page_sn: d == null ? void 0 : d.page_sn
                    },
                    ecommerce: (d == null ? void 0 : d.ecommerce) || X({
                        checkout_token: d == null ? void 0 : d.checkout_token,
                        items: d == null ? void 0 : d.items,
                        carts: d == null ? void 0 : d.carts,
                        checkout: d == null ? void 0 : d.checkout,
                        order_id: d == null ? void 0 : d.order_id,
                        total_value: d == null ? void 0 : d.total_value,
                        total_tax: d == null ? void 0 : d.total_tax,
                        total_shipping: d == null ? void 0 : d.total_shipping,
                        currency_code: d == null ? void 0 : d.currency_code
                    }),
                    params: d == null ? void 0 : d.extraParams,
                    promotion: d == null ? void 0 : d.promotion
                }]
            }
            let h = Object.keys(l.state).length;
            if (v.sentDataLen === v.data.length && v.sentAppLen === h) return;
            v.sentDataLen = v.data.length, v.sentAppLen = h, c != null && c.basicData && ve(c.basicData), c != null && c.mappedOrgId && ve({
                __organization_id: c.mappedOrgId
            });
            let E = yield Xe(v, o, n, i, s, l, r, c == null ? void 0 : c.isCookieLessMode);
            return qe(e.type, Ge(E))
        })
    }

    function Te(e, t, o, n, i) {
        return A(this, void 0, void 0, function*() {
            let r = (i ? oe : te)[n] + "?" + Ke(yield Be(t, o, i)),
                _ = $e(e);
            return `${r}${_}`
        })
    }

    function $e(e) {
        let t = [];
        for (let o in e.state) e.state[o].shortCode && t.push(e.state[o].shortCode);
        return t.sort(), `&_psc=${t.join(",")}`
    }

    function je(e, t, o) {
        return A(this, void 0, void 0, function*() {
            let n = o ? yield N(t, q, {
                expires: !1
            }): yield N(t, B);
            return {
                pageLocation: e.document.location.href,
                pageReferrer: e.document.referrer,
                pageTitle: e.document.title,
                screenResolution: `${e.window.outerWidth||0}x${e.window.outerHeight||0}`,
                language: e.navigator.language || "",
                sessionId: n
            }
        })
    }

    function Ke(e) {
        let t = "";
        for (let o in e) t += (t ? "&" : "") + `${o}=${encodeURIComponent(e[o])}`;
        return t
    }

    function Be(e, t, o) {
        return A(this, void 0, void 0, function*() {
            let n = yield je(e, t, o), i = o ? "" : yield ae(t);
            return {
                v: "2",
                gtm: Me,
                sr: n.screenResolution,
                ul: n.language,
                cid: i,
                dl: n.pageLocation,
                dr: n.pageReferrer,
                dt: n.pageTitle,
                sid: n.sessionId
            }
        })
    }

    function qe(e, t) {
        let o = `en=${encodeURIComponent(e)}`;
        for (let n in t) o += `&${pe[n]||pe._}.${encodeURIComponent(n)}=${encodeURIComponent(t[n])}`;
        return o
    }

    function Ge(e) {
        let t = [],
            o = {};
        for (let n in e) {
            let i = e[n];
            if (typeof i == "object") {
                let s = t.length,
                    c = Array.isArray(i);
                t.push(n);
                for (let r in i) {
                    let _ = parseInt(r, 10);
                    if (c && (isNaN(_) || `${_}` !== r)) continue;
                    let p, u;
                    typeof i[r] == "object" ? (p = `${s}${r}+`, u = JSON.stringify(i[r])) : (p = `${s}${r}`, u = i[r]), o[p] = u
                }
            } else n[0] === "_" ? o[`-${n}`] = i : o[n] = i
        }
        return o.km = t.join(","), o
    }

    function Xe(e, t, o, n, i, s, c, r = !1) {
        var _, p, u, l, a, g, v, h, E, d;
        return A(this, void 0, void 0, function*() {
            let I = j(t),
                S = [],
                D = {},
                x = {};
            for (let k of e.data)
                if (k.ecommerce && !x.ecommerce && (x.ecommerce = k.ecommerce), k.params && !x.params && (x.params = k.params), k.page && !x.page && (x.page = k.page), k.user_id && !x.user_id && (x.user_id = k.user_id), k.user_client_id && !x.user_client_id && (x.user_client_id = k.user_client_id), k.promotion) {
                    let K = Object.assign({}, k.promotion);
                    S.push(K), K.app_name && (D[K.app_name] = !0)
                }
            L.promotion && L.promotion.app_name && !D[L.promotion.app_name] && S.push(L.promotion), S.length > 0 && (x.promotions = S);
            let y = r ? yield N(o, q, {
                expires: !1
            }): yield N(o, B), f = null;
            try {
                f = new URLSearchParams(t.window.location.search).get("_sc_p"), f && (yield(_ = o == null ? void 0 : o.sessionStorage) === null || _ === void 0 ? void 0 : _.setItem(G, f))
            } catch (k) {}
            let M = {
                    kit: Re,
                    event_time: ue(),
                    platform: "WEB",
                    user_id: ((u = (p = c == null ? void 0 : c.data) === null || p === void 0 ? void 0 : p.customer) === null || u === void 0 ? void 0 : u.id) || se(t).userId,
                    session_id: y,
                    log_id: e.eventId || "",
                    environment: i,
                    product_code: "automizely",
                    collector: "SDK-PIXEL",
                    app_connections: {
                        app_platform: Ue || L.app_platform || "",
                        app_key: n.app_key,
                        app_names: Object.keys(s.state),
                        __organization_id: n.hashed_organization_id || ""
                    },
                    page: Object.assign(X({
                        page_referrer: t.document.referrer,
                        page_location: t.window.location.href,
                        page_id: _e() || "",
                        page_type: (l = I == null ? void 0 : I.page_type) !== null && l !== void 0 ? l : "",
                        page_sn: (a = I == null ? void 0 : I.page_sn) !== null && a !== void 0 ? a : "",
                        utm_source: yield(g = o == null ? void 0 : o.sessionStorage) === null || g === void 0 ? void 0 : g.getItem(F), utm_medium: yield(v = o == null ? void 0 : o.sessionStorage) === null || v === void 0 ? void 0 : v.getItem(J), utm_content: yield(h = o == null ? void 0 : o.sessionStorage) === null || h === void 0 ? void 0 : h.getItem(Q), utm_campaign: yield(E = o == null ? void 0 : o.sessionStorage) === null || E === void 0 ? void 0 : E.getItem(Z), _sc_p: f || (yield(d = o == null ? void 0 : o.sessionStorage) === null || d === void 0 ? void 0 : d.getItem(G))
                    }), x.page)
                },
                W = r ? "" : yield V(T, o);
            return W && (M._am_id = W), delete x.page, Object.assign(M, x)
        })
    }

    function ve(e) {
        let t;
        for (t in e) t === "promotion" ? e.promotion && (L.promotion = e.promotion || {}) : L[t] || (L[t] = e[t])
    }
    var Ye = function(e, t, o, n) {
        function i(s) {
            return s instanceof o ? s : new o(function(c) {
                c(s)
            })
        }
        return new(o || (o = Promise))(function(s, c) {
            function r(u) {
                try {
                    p(n.next(u))
                } catch (l) {
                    c(l)
                }
            }

            function _(u) {
                try {
                    p(n.throw(u))
                } catch (l) {
                    c(l)
                }
            }

            function p(u) {
                u.done ? s(u.value) : i(u.value).then(r, _)
            }
            p((n = n.apply(e, t || [])).next())
        })
    };

    function fe(e, t) {
        var o, n, i, s, c, r;
        let _ = t.checkout.token,
            p = t.checkout.lineItems.map((l, a) => {
                var g, v, h, E, d, I, S, D, x, y, f;
                return {
                    item_name: (l == null ? void 0 : l.title) || ((g = l.variant) === null || g === void 0 ? void 0 : g.title),
                    item_id: ((h = (v = l.variant) === null || v === void 0 ? void 0 : v.product) === null || h === void 0 ? void 0 : h.id) || "",
                    pay_value: P((E = l.variant) === null || E === void 0 ? void 0 : E.price.amount),
                    currency_code: (d = l.variant) === null || d === void 0 ? void 0 : d.price.currencyCode,
                    item_brand: (D = (S = (I = l.variant) === null || I === void 0 ? void 0 : I.product) === null || S === void 0 ? void 0 : S.vendor) !== null && D !== void 0 ? D : "",
                    item_category_id: (y = (x = l.variant) === null || x === void 0 ? void 0 : x.product.type) !== null && y !== void 0 ? y : "",
                    item_variant_id: ((f = l.variant) === null || f === void 0 ? void 0 : f.id) || (l == null ? void 0 : l.id),
                    idx: a,
                    quantity: l.quantity
                }
            });
        return new O(m.purchase, {
            data: Object.assign(Object.assign({}, e), {
                items: p,
                checkout_token: _,
                order_id: (n = (o = t.checkout) === null || o === void 0 ? void 0 : o.order) === null || n === void 0 ? void 0 : n.id,
                total_value: P((i = t.checkout.totalPrice) === null || i === void 0 ? void 0 : i.amount),
                total_tax: P((s = t.checkout.totalTax) === null || s === void 0 ? void 0 : s.amount),
                total_shipping: P((c = t.checkout.shippingLine) === null || c === void 0 ? void 0 : c.price.amount),
                currency_code: (r = t.checkout.totalPrice) === null || r === void 0 ? void 0 : r.currencyCode
            })
        })
    }

    function he(e, t, o) {
        let n = t.checkout.token,
            i = {
                stage: o
            },
            s = t.checkout.lineItems.map((r, _) => {
                var p, u, l, a, g, v, h, E, d, I, S;
                return {
                    item_name: (r == null ? void 0 : r.title) || ((p = r.variant) === null || p === void 0 ? void 0 : p.title),
                    item_id: ((l = (u = r == null ? void 0 : r.variant) === null || u === void 0 ? void 0 : u.product) === null || l === void 0 ? void 0 : l.id) || "",
                    price: P((a = r.variant) === null || a === void 0 ? void 0 : a.price.amount),
                    currency_code: (g = r.variant) === null || g === void 0 ? void 0 : g.price.currencyCode,
                    item_brand: (E = (h = (v = r.variant) === null || v === void 0 ? void 0 : v.product) === null || h === void 0 ? void 0 : h.vendor) !== null && E !== void 0 ? E : "",
                    item_category: (I = (d = r.variant) === null || d === void 0 ? void 0 : d.product.type) !== null && I !== void 0 ? I : "",
                    item_variant_id: ((S = r == null ? void 0 : r.variant) === null || S === void 0 ? void 0 : S.id) || (r == null ? void 0 : r.id),
                    idx: _,
                    quantity: r.quantity
                }
            });
        return new O(m.checkout, {
            data: Object.assign(Object.assign({}, e), {
                items: s,
                checkout: i,
                checkout_token: n
            })
        })
    }

    function xe(e, t) {
        let o = t.collection.productVariants.map((i, s) => {
            var c, r, _;
            return {
                item_name: i.product.title,
                item_id: ((c = i == null ? void 0 : i.product) === null || c === void 0 ? void 0 : c.id) || "",
                price: P(i.price.amount),
                currency_code: i.price.currencyCode,
                item_brand: (r = i.product.vendor) !== null && r !== void 0 ? r : "",
                item_category: (_ = i.product.type) !== null && _ !== void 0 ? _ : "",
                item_variant_id: (i == null ? void 0 : i.id) || "",
                idx: s
            }
        });
        return new O(m.view_item, {
            data: Object.assign(Object.assign({}, e), {
                items: o
            })
        })
    }

    function Ee(e, t) {
        var o, n, i, s, c;
        let r = {
            item_name: t.productVariant.product.title,
            item_id: ((n = (o = t == null ? void 0 : t.productVariant) === null || o === void 0 ? void 0 : o.product) === null || n === void 0 ? void 0 : n.id) || "",
            price: P(t.productVariant.price.amount),
            currency_code: t.productVariant.price.currencyCode,
            item_brand: (i = t.productVariant.product.vendor) !== null && i !== void 0 ? i : "",
            item_category: (s = t.productVariant.product.type) !== null && s !== void 0 ? s : "",
            item_variant_id: ((c = t == null ? void 0 : t.productVariant) === null || c === void 0 ? void 0 : c.id) || ""
        };
        return new O(m.view_item, {
            data: Object.assign(Object.assign({}, e), {
                items: [r]
            })
        })
    }

    function Ie(e) {
        return new O(m.page_enter, {
            data: e
        })
    }

    function ye(e, t) {
        var o, n, i, s, c, r, _, p, u, l, a, g;
        let v = {
                item_name: (o = t.cartLine) === null || o === void 0 ? void 0 : o.merchandise.product.title,
                item_id: (n = t.cartLine) === null || n === void 0 ? void 0 : n.merchandise.product.id,
                price: P((i = t.cartLine) === null || i === void 0 ? void 0 : i.merchandise.price.amount),
                currency_code: (s = t.cartLine) === null || s === void 0 ? void 0 : s.merchandise.price.currencyCode,
                item_brand: (r = (c = t.cartLine) === null || c === void 0 ? void 0 : c.merchandise.product.vendor) !== null && r !== void 0 ? r : "",
                item_category: (p = (_ = t.cartLine) === null || _ === void 0 ? void 0 : _.merchandise.product.type) !== null && p !== void 0 ? p : "",
                item_variant_id: (a = (l = (u = t.cartLine) === null || u === void 0 ? void 0 : u.merchandise) === null || l === void 0 ? void 0 : l.id) !== null && a !== void 0 ? a : "",
                quantity: (g = t.cartLine) === null || g === void 0 ? void 0 : g.quantity
            },
            h = new O(m.add_to_cart, {
                data: Object.assign(Object.assign({}, e), {
                    items: [v]
                })
            }),
            E = new O(m.cart_updated, {
                data: Object.assign(Object.assign({}, e), {
                    carts: [Object.assign(Object.assign({}, v), {
                        is_updated: !0
                    })]
                })
            });
        return [h, E]
    }

    function Se(e, t) {
        return new O(m.search, {
            data: Object.assign(Object.assign({}, e), {
                query: t.searchResult.query
            })
        })
    }

    function ke(e, t, o) {
        var n, i;
        return ((i = (n = o == null ? void 0 : o.data) === null || n === void 0 ? void 0 : n.promotion) === null || i === void 0 ? void 0 : i.app_name) !== e ? [] : new O(o == null ? void 0 : o.event, {
            data: Object.assign(Object.assign({}, t), o == null ? void 0 : o.data)
        })
    }

    function Oe(e, t, o = "", n = "") {
        var i, s;
        let c = ((i = t == null ? void 0 : t.element) === null || i === void 0 ? void 0 : i.tagName) || "",
            r = ((s = t == null ? void 0 : t.element) === null || s === void 0 ? void 0 : s.href) || "";
        return c.toLowerCase() === "a" && r.includes("/products/") ? new O(m.click_item, {
            data: Object.assign(Object.assign({}, e), {
                ecommerce: {
                    items: [{
                        item_url: r.startsWith("/") ? `${o}${r}` : r,
                        currency_code: n
                    }]
                }
            })
        }) : []
    }

    function z(e, t, o, n, i, s, c, r) {
        return Ye(this, void 0, void 0, function*() {
            if (Object.keys(e).length <= 0) return;
            let _ = yield me(t, o, n, s, c);
            if (!_) return;
            let p = yield ge(e, t, o, n, i, s, c, r);
            yield fetch(_, {
                keepalive: !0,
                method: "POST",
                body: p
            })
        })
    }

    function we({
        appName: e,
        api: t,
        environment: o,
        options: n
    }) {
        var i;
        let {
            analytics: s,
            browser: c,
            settings: r,
            customerPrivacy: _,
            init: p
        } = t;
        if ((r == null ? void 0 : r.allow_collect_personal_data) !== "true") return;
        let u = a => !!(a != null && a.analyticsProcessingAllowed && (a != null && a.marketingAllowed) && (a != null && a.saleOfDataAllowed)),
            l = u(p == null ? void 0 : p.customerPrivacy);
        (i = _ == null ? void 0 : _.subscribe) === null || i === void 0 || i.call(_, "visitorConsentCollected", a => {
            l = u(a == null ? void 0 : a.customerPrivacy)
        }), s.subscribe("all_events", a => {
            var g, v, h, E, d, I;
            if (!l) return;
            !(n != null && n.isCookieLessMode) && le(a.context, c);
            let S = (v = (g = j(a.context)) === null || g === void 0 ? void 0 : g.page_sn) !== null && v !== void 0 ? v : "",
                D = (h = a == null ? void 0 : a.context) === null || h === void 0 ? void 0 : h.window.location.origin,
                x = ((I = (d = (E = a == null ? void 0 : a.context) === null || E === void 0 ? void 0 : E.Shopify) === null || d === void 0 ? void 0 : d.currency) === null || I === void 0 ? void 0 : I.active) || "",
                y = {
                    client_id: a.clientId,
                    page_sn: S
                },
                f = [];
            switch (a.name) {
                case C.checkout_completed:
                    f = fe(y, a.data);
                    break;
                case C.checkout_started:
                    f = he(y, a.data, a.name);
                    break;
                case C.collection_viewed:
                    f = xe(y, a.data);
                    break;
                case C.product_viewed:
                    f = Ee(y, a.data);
                    break;
                case C.page_viewed:
                    f = Ie(y);
                    break;
                case C.product_added_to_cart:
                    f = ye(y, a.data);
                    break;
                case C.search_submitted:
                    f = Se(y, a.data);
                    break;
                case C.custom_event:
                    f = ke(e, y, a.customData);
                    break;
                case C.clicked:
                    f = Oe(y, a.data, D, x);
                    break;
                default:
                    break
            }
            if (Array.isArray(f)) {
                Promise.all(f.map(M => {
                    z(M, e, a.context, c, r, o, n, p)
                }));
                return
            }
            z(f, e, a.context, c, r, o, n, p)
        })
    }
    var Ce = "WebPixel::Render";
    var H = e => shopify.extend(Ce, e);
    H(e => {
        we({
            appName: "aftership",
            api: e,
            environment: "production",
            options: {
                productShortCode: "as"
            },
            whiteEventList: [m.add_to_cart, m.cart_updated, m.checkout, m.purchase, m.view_item, m.custom_event, m.page_enter, m.click_item, m.search]
        })
    });
})();