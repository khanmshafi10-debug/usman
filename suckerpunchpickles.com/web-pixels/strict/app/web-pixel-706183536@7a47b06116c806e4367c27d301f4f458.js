(() => {
    var B = Object.create;
    var D = Object.defineProperty;
    var J = Object.getOwnPropertyDescriptor;
    var V = Object.getOwnPropertyNames;
    var X = Object.getPrototypeOf,
        W = Object.prototype.hasOwnProperty;
    var x = (e, t, i) => () => {
        if (i) throw i[0];
        try {
            return e && (t = e(e = 0)), t
        } catch (r) {
            throw i = [r], r
        }
    };
    var q = (e, t) => () => {
        try {
            return t || e((t = {
                exports: {}
            }).exports, t), t.exports
        } catch (i) {
            throw t = 0, i
        }
    };
    var z = (e, t, i, r) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let a of V(t)) !W.call(e, a) && a !== i && D(e, a, {
                get: () => t[a],
                enumerable: !(r = J(t, a)) || r.enumerable
            });
        return e
    };
    var G = (e, t, i) => (i = e != null ? B(X(e)) : {}, z(t || !e || !e.__esModule ? D(i, "default", {
        value: e,
        enumerable: !0
    }) : i, e));
    var l = (e, t, i) => new Promise((r, a) => {
        var P = n => {
                try {
                    s(i.next(n))
                } catch (o) {
                    a(o)
                }
            },
            S = n => {
                try {
                    s(i.throw(n))
                } catch (o) {
                    a(o)
                }
            },
            s = n => n.done ? r(n.value) : Promise.resolve(n.value).then(P, S);
        s((i = i.apply(e, t)).next())
    });
    var T, L = x(() => {
        T = "WebPixel::Render"
    });
    var U, O = x(() => {
        L();
        U = e => shopify.extend(T, e)
    });
    var F = x(() => {
        O()
    });
    var N = x(() => {
        F()
    });
    var j = q(y => {
        N();

        function g(e, t) {
            e = e.replace(/[\[\]]/g, "\\$&");
            let i = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)", "i"),
                r = i.exec(t);
            return r ? r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "" : null
        }

        function $(e) {
            return l(this, null, function*() {
                yield fetch("https://trkapi.impact.com/PageLoad", {
                    keepalive: !0,
                    method: "post",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(e)
                }).then(t => console.log(t.status)).catch(t => console.error(t))
            })
        }

        function H(e, t) {
            return l(this, null, function*() {
                yield fetch(e, {
                    keepalive: !0,
                    mode: "no-cors",
                    method: "post",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(t)
                }).then(i => console.log(i.status)).catch(i => console.error(i))
            })
        }

        function p(e, t, i, r) {
            return l(this, null, function*() {
                let a = new Date;
                a.setTime(a.getTime() + r * 24 * 60 * 60 * 1e3);
                let P = "expires=" + a.toUTCString();
                yield e.cookie.set(`${t}=${i}; expires=${P}; path=/; SameSite=Lax; Secure=true;`)
            })
        }

        function c(e, t) {
            return l(this, null, function*() {
                let i = yield e.cookie.get(t);
                if (t === "IR_PI" || t === "first_pla_call" || t === "storefront_url") return i;
                if (t !== "irclickid" && i !== "") {
                    let r = i.match(/\|([^|]+)\|$/);
                    return r ? r[1] : null
                }
                return i
            })
        }
        U(P => l(null, [P], function*({
            analytics: e,
            browser: t,
            settings: i,
            init: r,
            customerPrivacy: a
        }) {
            let {
                externalExecutionURL: S,
                campaignID: s
            } = i, n = r.customerPrivacy;
            a.subscribe("visitorConsentCollected", o => {
                n = o.customerPrivacy
            }), e.subscribe("page_viewed", o => l(null, null, function*() {
                var E, A;
                let _ = ((E = r.data.shop) == null ? void 0 : E.storefrontUrl) || o.context.window.location.origin;
                _ && (yield p(t, "storefront_url", _, 30));
                let w = g("irclickid", o.context.window.location.href) || g("im_ref", o.context.window.location.href),
                    k = g("im_rewards", o.context.window.location.href),
                    m = (A = r.data.customer) == null ? void 0 : A.email,
                    h = yield t.localStorage.getItem("landing_page"), d = h || o.context.window.location.href;
                (!h || w || k) && (yield t.localStorage.setItem("landing_page", o.context.window.location.href));
                let u = g("irclickid", d) || g("im_ref", d),
                    f = g("im_rewards", d) || g("im_rewards", o.context.window.location.href),
                    I = yield c(t, "first_pla_call");
                f && p(t, "im_rewards", f, 30), I || p(t, "first_pla_call", "first", 30);
                let R = yield c(t, "IR_PI");
                if (n.marketingAllowed) {
                    u && p(t, "irclickid", u, 30);
                    let C = (yield c(t, "irclickid")) || (yield c(t, `IR_${s}`));
                    I === "first" ? (yield $({
                        CampaignId: parseInt(s),
                        PageUrl: d,
                        EventDate: o.timestamp,
                        ReferringUrl: "",
                        CustomProfileId: o.clientId,
                        CustomerEmail: m,
                        UserAgent: o.context.navigator.userAgent,
                        ClickId: C,
                        IntegrationSource: "Shopify",
                        FirstPartyCookie: R
                    }), yield p(t, "first_pla_call", "none", 30)) : yield $({
                        CampaignId: parseInt(s),
                        PageUrl: o.context.window.location.href,
                        EventDate: o.timestamp,
                        ReferringUrl: o.context.document.referrer,
                        CustomProfileId: o.clientId,
                        CustomerEmail: m,
                        UserAgent: o.context.navigator.userAgent,
                        ClickId: C,
                        IntegrationSource: "Shopify",
                        FirstPartyCookie: R
                    })
                }
                if (f && n.marketingAllowed === !1) {
                    u && p(t, "irclickid", u, 30);
                    let C = (yield c(t, "irclickid")) || (yield c(t, `IR_${s}`));
                    yield $({
                        CampaignId: parseInt(s),
                        PageUrl: o.context.window.location.href,
                        EventDate: o.timestamp,
                        ReferringUrl: o.context.document.referrer,
                        CustomProfileId: o.clientId,
                        CustomerEmail: m,
                        UserAgent: o.context.navigator.userAgent,
                        ClickId: C,
                        IntegrationSource: "Shopify",
                        FirstPartyCookie: R
                    })
                }
            })), e.subscribe("checkout_completed", o => l(null, null, function*() {
                var I;
                let _ = (yield c(t, "irclickid")) || (yield c(t, `IR_${s}`)),
                    w = encodeURIComponent(r.context.navigator.userAgent),
                    k = o.data.checkout.order.id.toString().match(/\d+/g).join(""),
                    m = yield c(t, "IR_PI"), h = yield c(t, "im_rewards"), d = (yield c(t, "storefront_url")) || ((I = r.data.shop) == null ? void 0 : I.storefrontUrl) || "", u = encodeURIComponent(d), f = !0;
                !h && n.marketingAllowed === !1 && (f = !1), yield H(`${S}?irclickid=${_}&client_id=${o.clientId}&order_id=${k}&first_party_cookie=${m}&send_customer_email=${f}&user_agent=${w}&storefront_url=${u}`, {
                    client_id: o.clientId,
                    order_id: k,
                    irclickid: _,
                    first_party_cookie: m,
                    send_customer_email: f,
                    user_agent: w,
                    storefront_url: d
                })
            }))
        }))
    });
    var rt = G(j());
})();