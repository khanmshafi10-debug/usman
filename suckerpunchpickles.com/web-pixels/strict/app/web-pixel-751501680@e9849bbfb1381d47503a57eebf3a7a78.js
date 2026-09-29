(() => {
    var It = Object.create;
    var N = Object.defineProperty,
        _t = Object.defineProperties,
        vt = Object.getOwnPropertyDescriptor,
        At = Object.getOwnPropertyDescriptors,
        Et = Object.getOwnPropertyNames,
        w = Object.getOwnPropertySymbols,
        Pt = Object.getPrototypeOf,
        z = Object.prototype.hasOwnProperty,
        St = Object.prototype.propertyIsEnumerable;
    var M = (t, n, e) => n in t ? N(t, n, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : t[n] = e,
        v = (t, n) => {
            for (var e in n || (n = {})) z.call(n, e) && M(t, e, n[e]);
            if (w)
                for (var e of w(n)) St.call(n, e) && M(t, e, n[e]);
            return t
        },
        A = (t, n) => _t(t, At(n));
    var y = (t, n) => () => (t && (n = t(t = 0)), n);
    var p = (t, n) => () => (n || t((n = {
        exports: {}
    }).exports, n), n.exports);
    var bt = (t, n, e, r) => {
        if (n && typeof n == "object" || typeof n == "function")
            for (let o of Et(n)) !z.call(t, o) && o !== e && N(t, o, {
                get: () => n[o],
                enumerable: !(r = vt(n, o)) || r.enumerable
            });
        return t
    };
    var f = (t, n, e) => (e = t != null ? It(Pt(t)) : {}, bt(n || !t || !t.__esModule ? N(e, "default", {
        value: t,
        enumerable: !0
    }) : e, t));
    var m = (t, n, e) => new Promise((r, o) => {
        var s = a => {
                try {
                    i(e.next(a))
                } catch (c) {
                    o(c)
                }
            },
            u = a => {
                try {
                    i(e.throw(a))
                } catch (c) {
                    o(c)
                }
            },
            i = a => a.done ? r(a.value) : Promise.resolve(a.value).then(s, u);
        i((e = e.apply(t, n)).next())
    });
    var F, q = y(() => {
        F = "WebPixel::Render"
    });
    var L, U = y(() => {
        q();
        L = t => shopify.extend(F, t)
    });
    var H = y(() => {
        U()
    });
    var Z = y(() => {
        H()
    });
    var W = p((Sn, X) => {
        var G = "BVBRANDID",
            J = "BVBRANDSID",
            xt = "crl8.fpcuid";

        function Tt(t) {
            return m(this, null, function*() {
                let n = yield t.cookie.get(G), e = yield t.cookie.get(J);
                return {
                    brandid: n,
                    brandsid: e
                }
            })
        }
        X.exports = {
            gather: Tt,
            BVBRANDID: G,
            BVBRANDSID: J,
            BVCRL8ID: xt
        }
    });
    var P = p((xn, K) => {
        var E = Object.prototype.toString;

        function Nt(t) {
            var n = [].slice.call(arguments, 1),
                e, r;
            for (var o in n)
                if (n.hasOwnProperty(o)) {
                    e = n[o];
                    for (r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                }
            return t
        }

        function Lt() {
            return Math.round(Math.random() * 2147483647).toString(36)
        }

        function Ct(t) {
            return E.call(t) === "[object Array]"
        }

        function Ot(t) {
            return k(t) && E.call(t) === "[object Function]"
        }

        function Dt(t) {
            return typeof t == "string" || C(t) && E.call(t) === "[object String]"
        }

        function k(t) {
            var n = typeof t;
            return !!t && (n === "object" || n === "function")
        }

        function Vt(t) {
            return typeof t == "number" || C(t) && E.call(t) === "[object Number]"
        }

        function C(t) {
            return !!t && typeof t == "object"
        }

        function Bt() {
            for (var t = 16, n = 20, e = Math.floor(Math.random() * (n - t + 1) + t), r = "", o = 0; o++ < e;) r += (Math.random() * 16 | 0).toString(16);
            return r
        }

        function $t() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                var n = Math.random() * 16 | 0,
                    e = t === "x" ? n : n % 4 + 8;
                return e.toString(16)
            })
        }

        function Rt(t, n, e) {
            typeof t == "undefined" || t === null || n !== e && t.hasOwnProperty(n) && (t[e] = t[n], delete t[n])
        }

        function jt() {
            if (navigator.cookieEnabled) return (function() {
                let t = 0,
                    n = document.domain,
                    e = n.split("."),
                    r = `_gd${new Date().getTime()}`;
                for (; t < e.length - 1 && document.cookie.indexOf(`${r}=${r}`) === -1;) n = e.slice(-1 - ++t).join("."), document.cookie = `${r}=${r};domain=${n};`;
                return document.cookie = `${r}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=${n};`, n
            })()
        }

        function wt() {
            return window.location.protocol === "https:"
        }

        function Mt() {
            return document.domain === "localhost" || document.domain === "127.0.0.1"
        }
        K.exports = {
            extend: Nt,
            buster: Lt,
            isArray: Ct,
            isDomainLocalhost: Mt,
            isFunction: Ot,
            isString: Dt,
            isObject: k,
            isNumber: Vt,
            isObjectLike: C,
            loadId: Bt,
            uuid: $t,
            transformData: Rt,
            getDomainWithoutSubdomain: jt,
            isProtocolSecure: wt
        }
    });

    function Ht(t, n) {
        var e = t && t[n];
        return e != null
    }

    function Zt(t, n) {
        var e = n.length;
        if (!Y.isObject(t) && e < 0) return !1;
        for (; e--;)
            if (!Ht(t, n[e])) return !1;
        return !0
    }

    function Gt(t) {
        return Zt(t, qt)
    }
    var Y, Q, zt, Ft, qt, Ut, tt, O, D, nt = y(() => {
        Y = f(P()), Q = "Conversion", zt = "PII" + Q, Ft = {
            orderId: 1,
            affiliation: 1,
            total: 1,
            tax: 1,
            shipping: 1,
            city: 1,
            state: 1,
            country: 1,
            currency: 1,
            items: 1,
            locale: 1,
            discount: 1,
            type: 1,
            label: 1,
            value: 1,
            proxy: 1,
            partnerSource: 1,
            deploymentZone: 1,
            cl: 1,
            loadId: 1,
            client: 1,
            _: 1,
            tz: 1,
            sourceVersion: 1,
            magpieJsVersion: 1,
            source: 1,
            environment: 1,
            dc: 1,
            TestCase: 1,
            TestSession: 1,
            BVBRANDID: 1,
            BVBRANDSID: 1
        }, qt = ["type"], Ut = "public_", tt = function(t) {
            var n;
            this._data = t, this._anonymized = {}, this._hasPII = !1;
            for (n in t) t.hasOwnProperty(n) && (Ft[n] || n.indexOf(Ut) === 0 ? this._anonymized[n] = t[n] : this._hasPII = !0);
            this._hasPII === !0 && (this._anonymized.hadPII = !0)
        }, O = tt.prototype;
        O.containsPII = function() {
            return this._hasPII
        };
        O.getAnonymizedData = function() {
            return this._anonymized
        };
        O.getPIIData = function() {
            return this._data
        };
        D = {
            EVENT_CLASS: Q,
            PII_EVENT_CLASS: zt,
            create: function(t) {
                return Gt(t) ? new tt(t) : null
            }
        }
    });
    var rt = p((Nn, et) => {
        function Jt(t) {
            let n = 0;
            if (t.discountAllocations.length > 0)
                if (t.finalLinePrice !== void 0) n = t.variant.price.amount * t.quantity - t.finalLinePrice.amount;
                else
                    for (let e = 0; e < t.discountAllocations.length; e++) {
                        let r = t.discountAllocations[e];
                        n += r.amount.amount
                    }
            return Math.abs(n)
        }
        et.exports = {
            getLineItemDiscountAmount: Jt
        }
    });
    var ut = p((Cn, it) => {
        nt();
        var S = f(P()),
            ot = f(rt());

        function Xt(t) {
            let n = D.create(t),
                e = null,
                r = null;
            return n && (n.containsPII() && (e = n.getPIIData(), e.cl = D.PII_EVENT_CLASS), r = n.getAnonymizedData()), {
                pii: e,
                anon: r
            }
        }

        function I(t) {
            return t.amount !== void 0 ? t.amount.toFixed(2) : typeof t == "number" ? t.toFixed(2) : 0.toFixed(2)
        }

        function Wt(t, n) {
            var a;
            if (t.multi_locale_enabled !== "true") return t.locale;
            let e;
            try {
                e = (a = JSON.parse(t.locale_mapping)) != null ? a : {}
            } catch (c) {
                return console.error("Failed to parse locale_mapping:", c), t.locale
            }
            let r = n.localization.country.isoCode,
                o = n.localization.language.isoCode.split("-")[0],
                s = o + "_" + r,
                u = Object.keys(e).reduce(function(c, l) {
                    return c.concat(l, e[l])
                }, []),
                i = t.locale;
            return u.includes(s) ? i = s : e[o] && (i = e[o][0]), i
        }

        function kt(t, n, e, r, o) {
            var l;
            if (n.length === 0) return null;
            let s = t.order.id,
                u = Kt(s, n),
                i = 0;
            t.discountsAmount && t.discountsAmount.amount && (i = t.discountsAmount.amount - u.discountTotal);
            let a = (l = t.delivery) == null ? void 0 : l.selectedDeliveryOptions.reduce((g, h) => {
                var R, j;
                let $ = ((R = h == null ? void 0 : h.cost) == null ? void 0 : R.amount) - ((j = h.costAfterDiscounts) == null ? void 0 : j.amount);
                return $ != null ? $ + g : g
            }, 0);
            a != null && (i = i - a);
            let c = {
                cl: "Conversion",
                type: "Transaction",
                source: "Shopify_BV_Plugin",
                label: "TransactionThankYou",
                loadId: S.loadId(),
                tz: new Date().getTimezoneOffset(),
                _: S.buster(),
                deploymentZone: e.deployment_zone,
                client: e.client,
                locale: Wt(e, t),
                currency: t.currencyCode,
                orderId: s,
                city: t.billingAddress.city,
                state: t.billingAddress.province,
                country: t.billingAddress.countryCode,
                discount: I(i > 0 ? i : 0),
                shipping: I(t.shippingLine.price),
                tax: I(t.totalTax.amount),
                total: I(t.subtotalPrice.amount),
                items: u.items,
                email: t.email,
                userId: t.order.customer.id,
                host: self.location.hostname,
                BVBRANDID: r,
                BVBRANDSID: o
            };
            return t.billingAddress.firstName && t.billingAddress.lastName && (c.userName = `${t.billingAddress.firstName} ${t.billingAddress.lastName}`), t.billingAddress.firstName && (c.nickname = t.billingAddress.firstName), c
        }

        function Kt(t, n) {
            let e = [],
                r = 0;
            for (let o = 0; o < n.length; o++) {
                let s = ot.getLineItemDiscountAmount(n[o]),
                    u = {
                        price: I(n[o].variant.price),
                        quantity: n[o].quantity,
                        productId: n[o].variant.product.id,
                        sku: n[o].variant.product.id,
                        name: n[o].title,
                        orderId: t
                    };
                s !== 0 && (u.discount = s.toFixed(2), r += s), e.push(u)
            }
            return {
                items: e,
                discountTotal: r
            }
        }
        it.exports = {
            generateEvent: kt,
            handlePii: Xt
        }
    });
    var d, b, at = y(() => {
        d = {};
        d.uri_ok = {
            "~": !0,
            "!": !0,
            "*": !0,
            "(": !0,
            ")": !0,
            "-": !0,
            _: !0,
            ".": !0,
            ",": !0,
            ":": !0,
            "@": !0,
            $: !0,
            "'": !0,
            "/": !0
        };
        (function() {
            for (var t = [], n = 0; n < 16; n++)
                for (var e = 0; e < 16; e++)
                    if (n + e !== 0) {
                        var r = String.fromCharCode(n * 16 + e);
                        /\w|[\-_.\/~]/.test(r) || t.push("\\u00" + n.toString(16) + e.toString(16))
                    }
            d.not_idchar = t.join("")
        })();
        d.not_idchar = ` 	\r
"<>\\[\\]{}'!=:(),*@$;&`;
        d.not_idstart = "-0123456789";
        (function() {
            var t = "[^" + d.not_idstart + d.not_idchar + "][^" + d.not_idchar + "]*";
            d.id_ok = new RegExp("^" + t + "$"), d.next_id = new RegExp(t, "g")
        })();
        d.quote = function(t) {
            var n = d.uri_ok;
            return /^[A-Za-z0-9_\-]*$/.test(t) ? t : (t = t.replace(/([^A-Za-z0-9_\-])/g, function(e, r) {
                var o = n[r];
                return o ? r : encodeURIComponent(r)
            }), t.replace(/%20/g, "+"))
        };
        (function() {
            var t = {
                    "'": !0,
                    "!": !0
                },
                n = {
                    array: function(e) {
                        var r = ["!("],
                            o, s, u, i = e.length,
                            a;
                        for (u = 0; u < i; u += 1) a = e[u], s = n[typeof a], s && (a = s(a), typeof a == "string" && (o && (r[r.length] = ","), r[r.length] = a, o = !0));
                        return r[r.length] = ")", r.join("")
                    },
                    boolean: function(e) {
                        return e ? "!t" : "!f"
                    },
                    null: function(e) {
                        return "!n"
                    },
                    number: function(e) {
                        return isFinite(e) ? String(e).replace(/\+/, "") : "!n"
                    },
                    object: function(e) {
                        if (e) {
                            if (e instanceof Array) return n.array(e);
                            if (typeof e.__prototype__ == "object" && typeof e.__prototype__.encode_rison != "undefined") return e.encode_rison();
                            var r = ["("],
                                o, s, u, i, a, c = [];
                            for (u in e) c[c.length] = u;
                            for (c.sort(), a = 0; a < c.length; a++) u = c[a], i = e[u], s = n[typeof i], s && (i = s(i), typeof i == "string" && (o && (r[r.length] = ","), r.push(n.string(u), ":", i), o = !0));
                            return r[r.length] = ")", r.join("")
                        }
                        return "!n"
                    },
                    string: function(e) {
                        return e === "" ? "''" : d.id_ok.test(e) ? e : (e = e.replace(/(['!])/g, function(r, o) {
                            return t[o] ? "!" + o : o
                        }), "'" + e + "'")
                    },
                    undefined: function(e) {
                        return "!n"
                    }
                };
            d.encode = function(e) {
                return n[typeof e](e)
            }
        })();
        b = d
    });
    var ct = p((Dn, st) => {
        var Yt = {
                AT: !0,
                BE: !0,
                BG: !0,
                CH: !0,
                CY: !0,
                CZ: !0,
                DE: !0,
                DK: !0,
                ES: !0,
                EE: !0,
                FI: !0,
                FR: !0,
                GB: !0,
                GR: !0,
                HR: !0,
                HU: !0,
                IE: !0,
                IS: !0,
                IT: !0,
                LI: !0,
                LT: !0,
                LU: !0,
                LV: !0,
                MT: !0,
                NL: !0,
                NO: !0,
                PL: !0,
                PT: !0,
                RO: !0,
                SE: !0,
                SI: !0,
                SK: !0
            },
            Qt = /^[a-z]{2}[_-][A-Z]{2}$/;

        function tn(t) {
            if (!Qt.test(t)) throw new Error("Invalid locale code passed to hasLocale.");
            var n = t.split(/[\_\-]/).pop();
            return !!Yt[n]
        }
        st.exports = {
            hasLocale: tn
        }
    });
    var ft = p((Bn, dt) => {
        at();
        var _ = f(P()),
            V = f(ct()),
            lt = {
                cl: 0,
                loadId: 1,
                type: 2
            },
            nn = "r_";

        function en(t, n) {
            let e = null;
            if (t !== void 0 && n !== void 0) try {
                (_.isArray(n) || _.isObject(n)) && (t = nn + t, n = b.encode(n)), e = b.quote(t) + "=" + b.quote("" + n)
            } catch (r) {
                console.error(r.stack)
            }
            return e
        }

        function rn(t) {
            let n, e, r = 0,
                o = [],
                s = [],
                u = {
                    optional: [],
                    longestField: null
                };
            if (!_.isObject(t)) return null;
            for (n in t)
                if (Object.prototype.hasOwnProperty.call(t, n) && !(t[n] === null || t[n] !== t[n]) && (e = en(n, t[n]), e !== null)) {
                    if (n in lt) {
                        let i = lt[n];
                        o[i] = e
                    } else s.push(e);
                    e.length > r && (u.longestField = n, r = e.length)
                }
            return u.required = o.concat(s).join("&"), u
        }

        function on(t, n) {
            return `https://network${t?"-eu":""}${n==="staging"?"-stg":""}.bazaarvoice.com`
        }

        function un(t, n) {
            return `https://shopify-integration-prod.shopify.partners.bazaarvoice.com/BVEvent${t?"EU":"US"}${n==="staging"?"Staging":""}`
        }

        function an(t, n) {
            let e = on(V.hasLocale(t.locale), n.environment),
                r = rn(t);
            fetch(e + "/a.gif?" + r.required, {
                method: "GET",
                mode: "no-cors"
            })
        }

        function sn(t, n) {
            let e = un(V.hasLocale(t.locale), n.environment);
            fetch(e, {
                method: "POST",
                body: JSON.stringify(t),
                headers: [
                    ["Content-Type", "text/plain"]
                ],
                mode: "no-cors"
            })
        }
        dt.exports = {
            sendAnonEvent: an,
            sendPIIEvent: sn
        }
    });
    var mt = p(($n, pt) => {
        function cn(t, n, e) {
            return m(this, null, function*() {
                let r = t.product_metafield_key,
                    o = t.product_metafield_namespace,
                    s = t.storefront_api_key,
                    u = e.map(i => `gid://shopify/Product/${i.variant.product.id}`);
                try {
                    let i = yield gn(n, s, u, o, r);
                    if (i.errors) return console.error("Storefront API errors:", i.errors), e; {
                        console.log("Order product tags and metafields:", i.data);
                        let {
                            productTagMap: a,
                            productMetafieldMap: c
                        } = ln(i);
                        return e = pn(e, a), mn(t) ? e.map(l => {
                            let g = `gid://shopify/Product/${l.variant.product.id}`,
                                h = c[g];
                            return h ? A(v({}, l), {
                                variant: A(v({}, l.variant), {
                                    product: A(v({}, l.variant.product), {
                                        id: h
                                    })
                                })
                            }) : null
                        }).filter(l => l !== null) : e
                    }
                } catch (i) {
                    return console.error("Error fetching product tags/metafields from Storefront API:", i), e
                }
            })
        }

        function ln(t) {
            let n = {},
                e = {};
            return t.data && t.data.nodes && t.data.nodes.forEach(r => {
                dn(r) && (n[r.id] = r.tags), fn(r) && (e[r.id] = r.metafields[0].value)
            }), {
                productTagMap: n,
                productMetafieldMap: e
            }
        }

        function dn(t) {
            return t && t.tags && t.tags.length > 0
        }

        function fn(t) {
            var n, e;
            return !!((n = t == null ? void 0 : t.metafields) != null && n.length && ((e = t.metafields[0]) != null && e.value))
        }

        function pn(t, n) {
            return t.filter(e => {
                let r = n[`gid://shopify/Product/${e.variant.product.id}`];
                return !r || !r.includes("bv-exclude")
            })
        }

        function mn(t) {
            return t.use_external_ids === "true"
        }

        function gn(t, n, e, r, o) {
            return m(this, null, function*() {
                let s = `
      query getProductsByIds($ids: [ID!]!) {
        nodes(ids: $ids) {
          ... on Product {
            id
            title
            tags
            metafields(identifiers: {key: "${o}", namespace: "${r}"}) {
              namespace
              key
              value
            }
          }
        }
      }
  `,
                    u = {
                        ids: e
                    };
                return yield(yield fetch(`https://${t.data.shop.myshopifyDomain}/api/2025-07/graphql.json`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Shopify-Storefront-Access-Token": n
                    },
                    body: JSON.stringify({
                        query: s,
                        variables: u
                    })
                })).json()
            })
        }
        pt.exports = {
            gather_products: cn
        }
    });
    var yt = p(B => {
        Z();
        var gt = f(W()),
            x = f(ut()),
            T = f(ft()),
            ht = f(mt());
        L(o => m(null, [o], function*({
            analytics: t,
            browser: n,
            init: e,
            settings: r
        }) {
            t.subscribe("checkout_completed", s => m(null, null, function*() {
                let {
                    brandid: u,
                    brandsid: i
                } = yield gt.gather(n), a = s.data.checkout, c = yield ht.gather_products(r, e, a.lineItems);
                if (c.length > 0) {
                    let l = x.generateEvent(a, c, r, u, i),
                        g = x.handlePii(l);
                    T.sendPIIEvent(g.pii, r), T.sendAnonEvent(g.anon, r)
                }
            }))
        }))
    });
    var zn = f(yt());
})();