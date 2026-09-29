if ("undefined" != typeof customerName && void 0 === tbConfig) {
    const e = customerName || "anonymous";
    var tbConfig = {
        apiStatus: "app",
        apiUrl: "/webhooks/",
        apiVersion: "v1",
        trackingType: "1",
        productName: productName,
        productId: productId,
        productImageUrl: productImageUrl,
        productUrl: productUrl,
        productPrice: productPrice,
        productStockStatus: productStockStatus,
        productStock: productStock,
        productCollection: productCollection,
        collectionTitle: collectionTitle,
        collectionId: collectionId,
        collectionUrl: collectionUrl,
        userId: userId,
        userMail: userMail,
        userName: e,
        userAvatar: "",
        pageName: pageName,
        pageUrl: "",
        pageData: "",
        orderId: "",
        platform: "sf",
        tbTrack: !0,
        tbMessage: !0,
        tbInstagram: !0,
        tbAccessToken: "",
        tbWooBulkReview: !0,
        tbReview: {
            tbSiteReview: !0,
            tbProductReview: !0,
            tbCustomProductReview: !0,
            tbBulkReview: !0,
            tbQa: !0,
            tbReviewBadge: !0,
            tbReviewPopup: !0
        }
    }
}
void 0 === tbConfig.commonLoaded && (tbConfig.commonLoaded = !0, function(e, t, r, o) {
    e._tbC = e._tbC || {}, _tbC.init = function() {
        _tbC.getUser()
    };
    const i = "app" === r.apiStatus ? "app.targetbay.com" : `${r.apiStatus}-brv.feb14.net`;
    _tbC.apiUrl = `https://${i}/api/v1`, _tbC.webhookUrl = `${_tbC.apiUrl}/webhooks/`, _tbC.shop = "undefined" != typeof Shopify ? Shopify.shop : "", void 0 !== r && "cp" === r.platform && (_tbC.shop = r.domain), _tbC.$ = function(e, r) {
        return (r || t).querySelectorAll(e)
    }, _tbC.$1 = function(e, r) {
        return (r || t).querySelector(e)
    }, _tbC.hide = function(e) {
        e.style.display = "none"
    }, _tbC.show = function(e, t) {
        e.style.display = t
    }, _tbC.elEx = function(e) {
        return null !== t.getElementById(e)
    }, _tbC.elsEx = function(e) {
        for (let r of e)
            if (null === t.getElementById(r)) return !1;
        return !0
    }, _tbC.valEx = function(e) {
        const r = t.getElementById(e);
        if (r) {
            return "" !== r.value.trim()
        }
        return !1
    }, _tbC.getVal = function(e) {
        return t.getElementById(e) ? .value || ""
    }, _tbC.hdEl = function(e) {
        let r = t.getElementById(e);
        r && (r.style.display = "none")
    }, _tbC.shEl = function(e) {
        let r = t.getElementById(e);
        r && (r.style.display = "block")
    }, _tbC.isMobile = function() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(navigator.userAgent)
    }, _tbC.widgetClick = function() {
        _tbC.setCookie("widgetClicked", "1")
    }, _tbC.getCookie = e => {
        const r = t.cookie.split(";"),
            o = `${e}=`;
        for (let e = 0; e < r.length; e++) {
            let t = r[e].trim();
            if (t.startsWith(o)) return decodeURIComponent(t.substring(o.length))
        }
        return ""
    }, _tbC.setCookie = (r, o, i = 30, a = e.location.hostname, n = "/") => {
        const s = new Date(Date.now() + 24 * i * 60 * 60 * 1e3),
            l = `${r}=${encodeURIComponent(o)}; expires=${s.toUTCString()}; domain=${a}; path=${n}`;
        t.cookie = l
    }, _tbC.validateEmail = function(e) {
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
    };
    let a = !0;
    r.fontAwesome === o || null === r.fontAwesome || r.fontAwesome || (a = !1), _tbC.loadFontAwesome = function() {
        if (a) {
            const e = t,
                r = e.createElement("script");
            r.src = "https://use.fontawesome.com/6f6f19e46b.js", r.setAttribute("data-timestamp", +new Date), (e.head || e.body).appendChild(r)
        }
    }, _tbC.getUser = function() {
        const e = _tbC.getCookie("tb_fetch_points"),
            t = e && "" !== e,
            o = (e, r) => {
                let o = _tbC.getCookie(e);
                return !o && t && (o = _tbC.getCookieDecode("tb_fetch_points", r)), o
            };
        "1" === r.trackingType ? (_tbC.userLoggedIn = o("user_loggedin", "_ulogin"), "1" === _tbC.userLoggedIn ? _tbC.tbUserId = o("trackingid", "_utid") : _tbC.tbUserId = o("targetbay_session_id", "_usid")) : _tbC.tbUserId = o("trackingid", "_utid")
    }, _tbC.getCookieDecode = (e, r) => {
        const i = t.cookie.split(";"),
            a = `${e}=`;
        for (let e = 0; e < i.length; e++) {
            let t = i[e].trim();
            if (t.startsWith(a)) {
                const e = t.substring(a.length),
                    i = _tbC.b64DecodeUnicode(e).split("&");
                for (let e = 0; e < i.length; e++) {
                    const t = i[e].split("=");
                    if ("" !== t[0] && t[0] !== o && t[0] === r) return t[1]
                }
            }
        }
        return ""
    }, _tbC.b64EncodeUnicode = function(e) {
        return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, (function(e, t) {
            return String.fromCharCode(`0x${t}`)
        })))
    }, _tbC.b64DecodeUnicode = function(e) {
        const t = e.replace(/%2F/g, "/").replace(/%3F/g, "?").replace(/%3D/g, "=").replace(/%26/g, "&");
        return decodeURIComponent(atob(t).split("").map((function(e) {
            return `%${`00${e.charCodeAt(0).toString(16)}`.slice(-2)}`
        })).join(""))
    }, _tbC.deleteCookie = function(e) {
        t.cookie = `${e}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`
    }, _tbC.loadIfVisible = function(e, r, o = "class") {
        if ("class" === o && "undefined" !== t.getElementsByClassName(e)[0]) var i = t.getElementsByClassName(e)[0];
        else if ("undefined" !== t.getElementById(e)) i = t.getElementById(e);
        if (null != i) {
            const t = tbEvents.isElementVisible(e, o),
                i = _tbC.getCookie(r);
            if (t && "" == i) return _tbC.setCookie(r, 1), !0
        }
        return !1
    };
    _tbC.fetchData = async (t, r, o, i) => {
        try {
            let a, n, s, l;
            if ("POST" === (i = i || "GET") ? (a = t, s = r, l = await fetch(a, {
                    method: i,
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(s)
                })) : (n = Object.keys(r).map((e => encodeURIComponent(e) + "=" + encodeURIComponent(r[e]))).join("&"), a = r ? `${t}&${n}` : t, l = await fetch(a, {
                    method: i,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })), !l.ok) throw new Error("Network response was not ok.");
            const d = await l.json();
            if (401 === d.code) throw new Error(d.message);
            if ((() => {
                    try {
                        let t = "tb_test";
                        return e.localStorage.setItem(t, null), e.localStorage.removeItem(t), !0
                    } catch (e) {
                        return !1
                    }
                })() && "" !== o) {
                const e = Date.now() + 6e4;
                localStorage.setItem(o, JSON.stringify({
                    data: d,
                    expiration: e
                }))
            }
            return d
        } catch (e) {
            throw e
        }
    }, _tbC.getCachedData = e => {
        try {
            const t = localStorage.getItem(e);
            if (t) {
                const {
                    data: r,
                    expiration: o
                } = JSON.parse(t);
                if (Date.now() < o) return r;
                localStorage.removeItem(e)
            }
            return null
        } catch (e) {
            return null
        }
    }, _tbC.TBtimeConverter = function(e) {
        if (isNaN(e) || e <= 0) return "Invalid Date";
        return new Date(1e3 * e).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit"
        })
    }, _tbC.init()
}(window, document, tbConfig)), void 0 === tbConfig.subAppLoaded && (tbConfig.subAppLoaded = !0, function(e, t, r) {
    e.tbShopify = e.tbShopify || {};
    const o = "app" === r.apiStatus ? "app.targetbay.com" : `${r.apiStatus}-brv.feb14.net`,
        i = `https://${o}/api/${r.apiVersion}/`;
    let a;
    tbShopify.apiUrl = `${i}shopify/`;
    const n = r.productId;
    let s = r.userId,
        l = r.userMail,
        d = r.userName;
    const b = e.location.href,
        c = function(e) {
            const r = {},
                o = t.createElement("a");
            o.href = e;
            const i = o.search.substring(1).split("&");
            for (let e = 0; e < i.length; e++) {
                const t = i[e].split("=");
                r[t[0]] = decodeURIComponent(t[1])
            }
            return r
        }(b),
        m = r.orderId;
    void 0 === r.publicKey && (r.publicKey = _tbC.b64EncodeUnicode(`_a=${r.apiToken}&_i=${r.apiKey}`));
    const u = r.publicKey;
    Object.entries({
        utm_source: "checkValue",
        token: "checkToken",
        tb_checkout_token: "checkTokenNew",
        utm_medium: "checkUtmMedium",
        utm_token: "checkTokenTrack"
    }).forEach((([t, r]) => {
        c[t] && (e[r] = c[t])
    }));
    const g = e.location.pathname,
        {
            userAgent: p
        } = e.navigator,
        y = t.createElement("a");
    y.href = g;
    y.hostname;
    const v = _tbC.getCookie("loginUser");
    if ("" === s && "" === m.trim() && ("1" === v && (t.cookie = "user_loggedin=;expires=Thu, 01 Jan 1970 00:00:01 GMT;", _tbC.setCookie("loginUser", ""), _tbC.setCookie("targetbay_session_id", "")), _tbC.setCookie("user_loggedin", "")), "" !== s && "" !== m.trim() && _tbC.setCookie("targetbay_session_id", s), "" !== s && "" === m.trim() && "1" !== v && (_tbC.setCookie("user_loggedin", "1"), _tbC.setCookie("trackingid", s), _tbC.setCookie("afterlogin_session_id", s), _tbC.setCookie("currentlogin_session_id", s), _tbC.setCookie("loginUser", "1"), _tbC.setCookie("loginUserName", d), _tbC.setCookie("loginUserEmail", l), _tbC.setCookie("targetbay_session_id", s)), s = _tbC.getCookie("targetbay_session_id"), "" === s || null === s) {
        const e = Math.floor(9999999999 * Math.random() + 1);
        _tbC.setCookie("targetbay_session_id", e), s = e
    }
    "" === l.trim() && (l = "anonymous"), "" === d.trim() && (d = "anonymous");
    _tbC.getCookie("_s");
    let _ = _tbC.getCookie("targetbay_token");
    null != _ && "" !== _ || (_ = _tbC.getCookie("utm_token"));
    _tbC.getCookie("targetbay_utm_source"), _tbC.getCookie("utm_medium");
    let w = "";
    const h = _tbC.getCookie("cart");
    null != h && (w = h);
    let f = "";
    void 0 !== c.gu && null !== c.gu && (f = _tbC.b64DecodeUnicode(c.gu));
    let C = ""; - 1 === g.indexOf("/pages") && "/" !== g && -1 === g.indexOf("/cart") && -1 === g.indexOf("/account") || (C = r.pageName, "" !== C && null !== C || (C = location.hostname));
    const E = Math.floor(9999999999 * Math.random() + 1);
    _tbC.getCookie("_s"), _tbC.b64EncodeUnicode(p), Shopify.shop;
    fetch(`https://${o}/shopify/load-script`, {
            method: "POST",
            body: JSON.stringify({
                shop: Shopify.shop
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((e => e.json())).then((e => {
            const r = t.createElement("script");
            r.innerHTML = e, t.head.appendChild(r)
        })).catch((e => {})),
        function() {
            let o = "";
            "" === r.orderId && ("undefined" == typeof Shopify || null === Shopify || void 0 !== Shopify.checkout && void 0 !== Shopify.checkout.order_id && (o = Shopify.checkout.order_id));
            if (_tbC.getCookie("targetbay_popup_order_id") !== r.orderId || o) {
                const e = t.createElement("div");
                e.id = "targetbay_order_reviews", e.className = "targetbay_order_reviews";
                const o = t.createElement("div");
                o.className = "block-2", e.appendChild(o), t.getElementsByTagName("body")[0].appendChild(e), _tbC.setCookie("targetbay_popup_order_id", r.orderId), _tbC.setCookie("targetbay_session_id", _tbC.getCookie("targetbay_session_id"))
            }
            const i = _tbC.getCookie("insertData"),
                a = _tbC.getCookie("inserurl");
            "" !== i && null !== i && "" !== a && null !== a && I(i, a);
            let n = 3e3;
            const s = [".ProductForm__AddToCart", ".shopify-payment-button__button", ".addTocart_button", "[data-action='add-to-cart']", ".add-to-cart", ".single_add_to_cart_button", ".add_to_cart", ".shopify-payment-btn", ".product-form__cart-submit", ".shopify-payment-button", "[name='add']", ".cart__submit", "button#continue_button"],
                l = t.querySelector('form[action="/cart"]'),
                d = t.querySelector('form[action="/cart/add"]'),
                b = function(e, t) {
                    return null != e || null != t
                }(l, d);
            if (void 0 !== r.tbRecommendations && r.tbRecommendations) {
                var c;
                if (null != d) {
                    const e = t.querySelectorAll('form[action="/cart/add"]').length,
                        r = t.querySelectorAll('form[action="/cart/add"]')[e > 1 ? 1 : 0].getAttribute("id");
                    null != r && (c = t.getElementById(r))
                }
                null != c && c.addEventListener("submit", (function() {
                    const t = e.setInterval((function(e, t) {
                        F(!0)
                    }), n);
                    e.setTimeout((function(e, r) {
                        clearInterval(t)
                    }), n)
                })), b ? (B('form[action="/cart"]', n), B('form[action="/cart/add"]', n)) : t.body.addEventListener("click", (function() {
                    const t = e.setInterval((function(e, t) {
                        F(!0)
                    }), 2e3);
                    e.setTimeout((function(e, r) {
                        clearInterval(t)
                    }), 2e3)
                }))
            } else n = 1e3;
            b && s.forEach((e => B(e, n)))
        }();
    const I = async function(e, t) {
        try {
            let r = "undefined" != typeof Shopify ? Shopify.shop : "";
            if (!(await fetch(`${tbShopify.apiUrl+t}?shop=${r}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(e)
                })).ok) throw new Error("Network response was not ok.");
            _tbC.setCookie("insertData", ""), _tbC.setCookie("inserurl", ""), _tbC.setCookie("userdata_created", "1"), _tbC.setCookie("cartRemove", "")
        } catch (e) {
            throw e
        }
    };

    function F(e) {
        _tbC.setCookie("cartTrack", !0);
        let t = _tbC.getCookie("targetbay_token");
        null != t && "" !== t || (t = _tbC.getCookie("utm_token"));
        const r = _tbC.getCookie("targetbay_utm_source"),
            o = _tbC.getCookie("utm_medium");
        let i = "";
        const a = _tbC.getCookie("cart");
        null != a && (i = a);
        let l = "";
        void 0 !== c.gu && null !== c.gu && (l = _tbC.b64DecodeUnicode(c.gu));
        const m = _tbC.getCookie("cartOldData");
        if (e) {
            const e = {
                    action: "submit_data",
                    url: b,
                    tbcustomer_id: s,
                    tbcustomer_email: l,
                    tbcustomer_name: d,
                    utm_source: r,
                    cart_token: i,
                    shopify_token: _tbC.getCookie("_s"),
                    utm_token: t,
                    utm_medium: o,
                    cart_data: "",
                    cart_old_data: m,
                    product_id: n,
                    shop: Shopify.shop,
                    utm_tracking: E
                },
                a = new XMLHttpRequest;
            a.open("POST", `${tbShopify.apiUrl}customer-utm-tracking?_t=${u}`), a.setRequestHeader("Content-Type", "application/json"), a.onload = function() {
                _tbC.setCookie("userdata_created", "1"), _tbC.setCookie("userLogout", ""), 200 === a.status && _tbC.setCookie("cartTrack", !1)
            }, a.send(JSON.stringify(e))
        }
    }

    function B(r, o) {
        const i = t.querySelector(r);
        if (null != i) return i.addEventListener("click", (function() {
            const t = e.setInterval((function(e, t) {
                F(!0)
            }), o);
            e.setTimeout((function(e, r) {
                clearInterval(t)
            }), o)
        })), !1
    }
}(window, document, tbConfig)), void 0 === tbConfig.trackerLoaded && (tbConfig.trackerLoaded = !0, function(e, t, r, o) {
    e.tbEvents = {}, tbEvents.init = function() {
        tbEvents.setTbSessionId()
    }, tbEvents.webhookUrl = `${_tbC.apiUrl}/webhooks/`;
    let i, a = "/magento/";
    if ("wc" === r.platform ? a = "/woo/" : "uc" === r.platform && (a = "/ubercart/"), tbEvents.publicUrl = _tbC.apiUrl + a, r.publicKey !== o) i = r.publicKey;
    else {
        const t = `_a=${r.apiToken}&_i=${r.apiKey}`;
        i = e.btoa(t)
    }
    const n = r.trackingType;
    tbEvents.setTbSessionId = function() {
        let e = _tbC.getCookie("targetbay_session_id");
        if (_tbC.getCookie("tb_fetch_points") && (e = e || _tbC.getCookieDecode("tb_fetch_points", "_usid")), "1" === n && !e) {
            let e;
            s() ? (e = localStorage.getItem("targetbay_session_id"), e || (e = Math.floor(9999999999 * Math.random() + 1), localStorage.setItem("targetbay_session_id", e)), _tbC.setCookie("targetbay_session_id", e)) : (e = _tbC.getCookie("targetbay_session_id"), e || (e = Math.floor(9999999999 * Math.random() + 1), _tbC.setCookie("targetbay_session_id", e))), tbEvents.insertFetchData(e)
        }
    }, tbEvents.isElementVisible = function(r, o = "class") {
        let i;
        if (i = "class" === o ? t.querySelector(`.${r}`) : t.getElementById(r), i) {
            const r = i.getBoundingClientRect(),
                o = e.innerHeight || t.documentElement.clientHeight,
                a = e.innerWidth || t.documentElement.clientWidth;
            return r.top >= 0 && r.left >= 0 && r.bottom <= o && r.right <= a
        }
        return !1
    }, tbEvents.insertFetchData = function(e) {
        const t = `_uid=${e}&_utid=${e}&_usid=${e}&_un=${r.userName}&_uem=${r.userMail}&_ulogin=${_tbC.getCookieDecode("tb_fetch_points","_ulogin")}&_uc=1`,
            o = _tbC.b64EncodeUnicode(t);
        _tbC.setCookie("tb_fetch_points", o)
    }, tbEvents.updateFetchData = function(e, t) {
        const r = "tb_fetch_points";
        if (_tbC.getCookie(r)) {
            const e = ["_uid", "_un", "_uem", "_utid", "_usid", "_uoid", "_ulogin", "_uasid"].map((e => `${e}=${_tbC.getCookieDecode(r,e)}`)).concat("_uc=1").join("&"),
                t = _tbC.b64EncodeUnicode(e);
            _tbC.setCookie(r, t)
        }
    };
    var s = function() {
        const t = "local_storage_available",
            r = e.localStorage;
        try {
            return r.setItem(t, "1"), r.removeItem(t), !0
        } catch (e) {
            return !1
        }
    };
    (r.tbTrack === o || r.tbTrack) && tbEvents.init()
}(window, document, tbConfig)), void 0 === tbConfig.commonreviewsLoaded && (tbConfig.commonreviewsLoaded = !0, function(e, t, r, o) {
    function i(e, r, o) {
        const i = t.querySelector(e);
        i && i.addEventListener("click", (function(e) {
            e.preventDefault();
            const t = e.target.closest("a");
            if (t) {
                const e = t.getAttribute("href");
                if (e && e.includes("page=")) {
                    const t = e.split("page=")[1].split("#")[0];
                    o(r, t)
                }
            }
        }), !1)
    }
    e.tbwTrack = {}, tbwTrack.init = function() {
        let t;
        if (undefined !== r.publicKey) t = r.publicKey;
        else {
            const o = `_a=${r.apiToken}&_i=${r.apiKey}`;
            t = e.btoa(o)
        }
        tbwTrack.reviewTrackUrl = `${_tbC.webhookUrl}update-people-insights?_t=${t}`
    }, tbwTrack.reviewUserTrack = function(e) {
        const t = 2592e6;
        if ("" !== _tbC.getCookie(`bv_widget_${e}${r.apiKey}`)) return void _tbC.setCookie(`bv_widget_${e}${r.apiKey}`, e, t);
        const o = "utm_token";
        let i = _tbC.getCookie(o),
            a = 0;
        if (i && "undefined" !== i) {
            const e = i.split("-");
            e[1] && (i = `${e[0]}-${_tbC.tbUserId}`, a = 1, _tbC.setCookie(o, i, t))
        } else i = `${Date.now()}-${_tbC.tbUserId}`, a = 1, _tbC.setCookie(o, i, t);
        _tbC.setCookie(`bv_widget_${e}${r.apiKey}`, e, t)
    }, tbwTrack.reviewPaginate = function() {
        i(".tb_product_reviews_pagination", "reviewpage", (function(e, t) {
            tbrForm[e] = t, tbrForm.getReviews(t)
        }))
    }, tbwTrack.qaPaginate = function() {
        i(".tb_qa_pagination", "qapage", (function(e, t) {
            tbrForm[e] = t, tbrForm.getQA(t)
        }))
    }, tbwTrack.reviewVote = function() {
        t.querySelectorAll(".targetbay-review-voting").forEach((e => {
            e.addEventListener("click", (function(e) {
                e.preventDefault();
                const t = this.getAttribute("data"),
                    r = this.getAttribute("data-val");
                t && tbrForm.voteReview(t, r)
            }))
        }))
    }, tbwTrack.qaVote = function() {
        t.querySelectorAll(".targetbay-question-voting").forEach((e => {
            e.addEventListener("click", (function(e) {
                e.preventDefault();
                const t = this.getAttribute("data"),
                    r = this.getAttribute("data-val"),
                    o = this.getAttribute("data-index");
                t && tbrForm.voteQA(t, r, o)
            }))
        }))
    }, tbwTrack.sortReviews = function() {
        const e = t.getElementById("tb-sort-reviews"),
            r = t.getElementById("tb-sort-qa");
        e && r && (e.addEventListener("change", (() => {
            tbrForm.getReviews("sorting")
        })), r.addEventListener("change", (() => {
            tbrForm.getQA("sorting")
        })))
    }, tbwTrack.reviewUpload = function() {
        const e = t.getElementById("targetbayReviewUpload"),
            r = t.getElementsByClassName("tbProductReviews-formErrorLabel")[0],
            o = t.getElementById("tbProductReviews-reviewForm"),
            i = t.getElementById("targetbay_review_upload_filetype_error"),
            a = t.getElementById("targetbay_review_upload_error"),
            n = t.getElementsByClassName("tbSiteReviews-clientUploadImage")[0];

        function s(i, a) {
            r.style.display = "block", o.className += " tbSiteReviews-tbReviewFormError", o.scrollIntoView(), t.getElementById(a).style.display = "block", e.value = ""
        }
        e && e.addEventListener("change", (function() {
            r.style.display = "none", o.className = "tbProductReviews-tbReviewForm", i.style.display = "none", a.style.display = "none", n.innerHTML = "";
            const {
                files: t
            } = e;
            for (const e of t) {
                if (!e.type.match("image.*")) return void s("File type is incorrect", "targetbay_review_upload_filetype_error");
                const t = ["image/jpeg", "image/png"],
                    r = e.name.split(".").pop().toLowerCase(),
                    o = ["jpg", "jpeg", "png"],
                    i = t.includes(e.type.toLowerCase()),
                    a = o.includes(r);
                if (!i && !a) return void s("Only .jpg, .jpeg, and .png image formats are supported", "targetbay_review_upload_filetype_error");
                if (e.size > 5242880) return void s("File size exceeds limit", "targetbay_review_upload_error");
                const n = new FileReader;
                n.onload = tbrForm.addImg, n.readAsDataURL(e)
            }
            tbrForm.clearErrorDisplay()
        }))
    }, tbwTrack.init()
}(window, document, tbConfig)), void 0 === tbConfig.reviewsLoaded && (tbConfig.reviewsLoaded = !0, function(e, t, r, o) {
    e.tbrForm = e.tbrForm || {}, tbrForm.rpTitle = t.title.replace(/ /g, "_");
    let i = "";
    const a = ["badassglass", "fontanaforniusa", "pfiwestern", "luxproflashlights", "babycubby", "box", "performance-cpr", "simplecpr", "chuao", "healthaidamerica", "ironwear", "ecompressedair"];
    tbrForm.init = function() {
        if (_tbC.getUser(), tbrForm.bulkReviewsLoaded = "", tbrForm.userLoggedIn = _tbC.userLoggedIn, tbrForm.tbUserId = _tbC.tbUserId, r.platform !== o && "mg2" !== r.platform) {
            const e = t,
                r = e.createElement("script");
            r.src = "https://img-msg.tb-list.com/tb-metro.pkgd.min.js", r.setAttribute("data-timestamp", +new Date), (e.head || e.body).appendChild(r)
        }
        let i;
        if (tbrForm.tbClientUrl = e.location.href, tbrForm.tbkey = r.apiKey, i = r.publicKey !== o && null !== r.publicKey ? r.publicKey : _tbC.b64EncodeUnicode(`_a=${r.apiToken}&_i=${r.apiKey}`), tbrForm.accessToken = i, "" !== r.productId && r.productId !== o) {
            "" !== r.userMail && null !== r.userMail && r.userMail !== o && "" !== r.userName && null !== r.userName && r.userName !== o && (_tbC.setCookie("tbLoginUserName", r.userName), _tbC.setCookie("tbLoginUserEmail", r.userMail), _tbC.setCookie("tbLoginUser", "1")), "1" == _tbC.getCookie("tbLoginUser") ? (tbrForm.tbUsername = _tbC.getCookie("tbLoginUserName"), tbrForm.tbEmail = _tbC.getCookie("tbLoginUserEmail")) : (tbrForm.tbUsername = r.userName || "", tbrForm.tbEmail = r.userMail || ""), tbrForm.tbProductName = tbrForm.html_entity_decode(r.productName) || "", tbrForm.tbProductId = r.productId || "", tbrForm.tbProductImageUrl = r.productImageUrl || "", tbrForm.tbProductUrl = r.productUrl || "", tbrForm.tbAvatar = r.userAvatar || "";
            const e = e => {
                const t = e ? `?shop=${e}` : `?_t=${tbrForm.accessToken}`;
                tbrForm.reviewUrl = `${_tbC.webhookUrl}save-review${t}`, tbrForm.reviewWidgetUrl = `${_tbC.webhookUrl}review-widget${t}`, tbrForm.reviewThemeUrl = `${_tbC.webhookUrl}review/theme${t}&type=reviews`, tbrForm.reviewContentUrl = `${_tbC.webhookUrl}review/content${t}`, tbrForm.reviewStarContentUrl = `${_tbC.webhookUrl}review/header${t}`, tbrForm.reviewSchemaUrl = `${_tbC.webhookUrl}review/schema${t}`, tbrForm.reviewVoteUrl = `${_tbC.webhookUrl}review-vote${t}`, tbrForm.qaVoteUrl = `${_tbC.webhookUrl}qa-vote${t}`
            };
            e(_tbC.shop), tbrForm.reviewError = "", tbrForm.triggercount = 0, tbrForm.qaDisplay = 1;
            const t = `&user_id=${tbrForm.tbUserId}&user_name=${tbrForm.tbUsername}&user_email=${tbrForm.tbEmail}`,
                i = `&product_id=${tbrForm.tbProductId}&product_name=${encodeURIComponent(tbrForm.tbProductName)}&product_url=${r.productUrl}&product_image_url=${r.productImageUrl}`;
            tbrForm.commonParams = t + i, tbrForm.baseParams = {
                user_id: tbrForm.tbUserId,
                user_name: tbrForm.tbUsername,
                user_email: tbrForm.tbEmail,
                product_id: tbrForm.tbProductId,
                product_name: tbrForm.tbProductName,
                product_url: r.productUrl,
                product_image_url: r.productImageUrl
            }
        }
        const a = _tbC.shop ? `?shop=${_tbC.shop}` : `?_t=${tbrForm.accessToken}`;
        if (tbrForm.reviewPopupWidgetUrl = `${_tbC.webhookUrl}get-review-popup-widget-data${a}`, tbrForm.bulkReviewUrl = `${_tbC.webhookUrl}bulk-reviews${a}`, r.tbReview !== o && (tbrForm.qaDisplay = 0, r.tbReview.tbQa && (tbrForm.qaDisplay = 1)), tbConfig.tbReview.tbReviewPopup) {
            const e = 0,
                t = 25;
            screen.width >= 720 && tbrForm.reviewWidgetPopupData(e, t, "page_load")
        }
        tbrForm.reviewpage = 1, tbrForm.qapage = 1, "" !== r.productId && r.productId !== o ? tbrForm.productRatings() : r.tbReview.tbBulkReview && tbrForm.bulkRatings()
    }, tbrForm.loadMasonry1 = function() {
        setTimeout((() => {
            var e = t.querySelector("#review-grid");
            if (e) {
                var r = new Masonry(e, {
                    itemSelector: ".tgb-grid-item"
                });
                r.reloadItems(), r.layout()
            }
        }), 400)
    };
    const n = function(r, o, i) {
            if (!(void 0 === r.selected_page_availability || r.selected_page_availability <= 0 || void 0 === r.widget_enabled_status || r.widget_enabled_status <= 0))
                if (void 0 === r.limit_total_reviews_count || r.limit_total_reviews_count <= 0) s(r, o, i);
                else if (void 0 !== r.settings && 1 == r.settings["enable-popup-widget"]) {
                if (!_tbC.elEx("tb_review_popup_widget")) {
                    const e = t.createElement("div");
                    e.setAttribute("id", "tb_review_popup_widget"), t.body.appendChild(e)
                }
                if (l(i), t.getElementById("tb_review_popup_widget").innerHTML = r.view, !_tbC.elEx("hidden_popup_check")) {
                    const e = t.createElement("input");
                    e.setAttribute("type", "hidden"), e.setAttribute("name", "hidden_popup_check_name"), e.setAttribute("value", "popup_invisible"), e.setAttribute("id", "hidden_popup_check"), t.getElementById("tb_review_popup_widget").appendChild(e)
                }
                var a = e.setInterval((function() {
                    t.getElementsByClassName("TbReviewModal").length > 0 && (tbrForm.initiateReviewPopupWidget(r, o, i), clearInterval(a))
                }), 1e3)
            }
        },
        s = function(e, t, r) {
            let o = void 0 !== e.total_reviews_count && e.total_reviews_count > 0 ? e.total_reviews_count : 0;
            const i = parseInt(t, 10) + 25;
            t = i >= o ? 0 : i, setTimeout((function() {
                tbrForm.reviewWidgetPopupData(t, r, "ajax_call")
            }), 15e3)
        },
        l = function(e) {
            _tbC.elEx("showTBReviewPopup") && t.querySelectorAll("#showTBReviewPopup").forEach(((t, r) => {
                r + 1 <= parseInt(e, 10) && t.remove()
            }))
        };

    function d(e = 0) {
        t.getElementById("targetbay_reviews") ? tbrForm.productRatings() : e < 10 && setTimeout((() => d(e + 1)), 300)
    }

    function b(e, r, o, i) {
        const a = t.getElementById(e),
            n = t.getElementById(r);
        a && (a.className = o), n && (n.style.display = i)
    }

    function c(e) {
        if (46 === e.keyCode) {
            const e = t.getElementById("review_search_text");
            e && (e.value = "")
        }
    }

    function m(e) {
        if (46 === e.keyCode) {
            const e = t.getElementById("qa_search_text");
            e && (e.value = "")
        }
    }

    function u(e) {
        const r = t.getElementsByClassName(e)[0];
        r && r.scrollIntoView()
    }

    function g(e, r) {
        const o = t.getElementById(e);
        o && (o.style.display = r)
    }

    function p(e) {
        const r = t.getElementsByClassName("tb_tablinks");
        r[0].classList.toggle("active", 0 === e), r[1].classList.toggle("active", 1 === e)
    }

    function y() {
        ["tb-sort-reviews", "tb-sort-reviews-values"].forEach((e => {
            const r = t.getElementById(e);
            r && (r.style.display = "none")
        }));
        const e = t.getElementById("tb-sort-qa");
        e && (e.style.display = "");
        const r = t.getElementById("tb-sort-for");
        r && (r.value = "tb_qa")
    }

    function v() {
        const e = t.getElementById("tbOverallRating");
        e && (e.style.display = "none", g("tb-review-write-section", "none"), g("tb-qa-write-section", "block"))
    }

    function u(e) {
        const r = t.getElementsByClassName(e)[0];
        r && r.scrollIntoView()
    }

    function g(e, r) {
        const o = t.getElementById(e);
        o && (o.style.display = r)
    }

    function p(e) {
        const r = t.getElementsByClassName("tb_tablinks");
        r.length > 0 && (1 === e ? r[0].classList.remove("active") : r[1].classList.remove("active"), r[e] && r[e].classList.add("active"))
    }

    function y(e) {
        ["tb-sort-reviews", "tb-sort-reviews-values"].forEach((e => {
            const r = t.getElementById(e);
            r && (r.style.display = "")
        })), ["tb-sort-qa"].forEach((e => {
            const r = t.getElementById(e);
            r && (r.style.display = "none")
        }));
        const r = t.getElementById("tb-sort-for");
        r && (r.value = e)
    }

    function v() {
        const e = t.getElementById("tbOverallRating");
        e && (e.style.display = "inline-block", g("tb-review-write-section", "block"), g("tb-qa-write-section", "none"))
    }
    tbrForm.reviewWidgetPopupData = function(e, t, i) {
        const a = tbrForm.getCurrentPage();
        "page_load" === i && (e = tbrForm.getLimitForPageLoad()), ("" === e || null === e || isNaN(e) || e === o) && (e = 0, t = 25);
        const s = `${tbrForm.reviewPopupWidgetUrl}&index_name=${r.apiKey}&product_id=${r.productId}&product_name=${r.productName}&user_id=${tbrForm.tbUserId}&user_name=${tbrForm.tbUsername}&user_email=${tbrForm.tbEmail}&category_id=${r.category_id}&current_page=${a}&from=${e}&limit=${t}`,
            l = "bv_review_popup_data",
            d = _tbC.getCachedData(l);
        d ? n(d, e, t) : _tbC.fetchData(s, {}, l, "POST").then((r => {
            n(r, e, t)
        })).catch((e => {}))
    }, tbrForm.getLimitForPageLoad = function() {
        const e = tbrForm.getCurrentPage();
        let t = "",
            i = "",
            a = 0;
        (r.productId !== o && "" !== r.productId || "product_pages" === e) && (r.productId !== o && null !== r.productId || (r.productId = ""), t = `tb_product_${r.productId}_current_review_${tbrForm.rpTitle}`, i = `tb_product_${r.productId}_total_reviews_count_${tbrForm.rpTitle}`), (r.category_id !== o && "" !== r.category_id || "category_pages" === e) && (r.category_id !== o && null !== r.category_id || (r.category_id = ""), t = `tb_category_${r.category_id}_current_review_${tbrForm.rpTitle}`, i = `tb_category_${r.category_id}_total_reviews_count_${tbrForm.rpTitle}`), e !== o && "home_page" === e && (t = `tb_home_current_review_${tbrForm.rpTitle}`, i = `tb_home_total_reviews_count_${tbrForm.rpTitle}`), e !== o && "cart_page" === e && (t = `tb_cart_current_review_${tbrForm.rpTitle}`, i = `tb_cart_total_reviews_count_${tbrForm.rpTitle}`);
        const n = _tbC.getCookie(t);
        if (n !== o && "" !== n && null !== n) {
            a = parseInt(n);
            const e = _tbC.getCookie(i);
            e !== o && "" !== e && null !== e && a >= parseInt(e) && (a = 0)
        }
        return a
    }, tbrForm.validateEmail = function(e) {
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
    }, tbrForm.validateName = function(e) {
        return /^[a-zA-Z0-9 ]*$/.test(e)
    }, tbrForm.bulkRatings = function() {
        let i = !1;
        const n = t.getElementsByClassName("page-products"),
            s = t.getElementsByClassName("targetbay_star_container"),
            l = t.getElementsByClassName("cms-index-index"),
            d = t.getElementsByClassName("catalog-category-view"),
            b = t.getElementsByClassName("catalogsearch-result-index"),
            c = t.getElementsByClassName("awshopbybrand-index-brandpageview"),
            m = t.getElementsByClassName("cms-new-landing"),
            u = t.getElementsByClassName("solrsearch-index-index"),
            g = t.getElementsByClassName("newarrivalproduct-index-index"),
            p = t.getElementsByClassName("template-product"),
            y = t.getElementsByClassName("page-products-grid"),
            v = t.getElementsByClassName("page-products"),
            _ = t.getElementsByClassName("node-type-page"),
            w = t.getElementsByClassName("tagalys-mpage-index-index"),
            h = t.getElementsByClassName("contentmanager-index-view"),
            f = t.getElementsByClassName("cms-page-view");

        function C(e, r) {
            let o = t.getElementsByClassName(e);
            return 0 === o.length && (o = t.getElementsByClassName(r)), o
        }
        const E = C("collection", "template-collection"),
            I = (C("search", "template-search"), C("index", "template-index")),
            F = t.getElementsByClassName("shopify-product-reviews-badge");
        let B = !1;
        r.tbWooBulkReview !== o && r.tbWooBulkReview && (B = !0), r.platform !== o && "cp" === r.platform && (B = !0);
        const {
            apiVersion: k
        } = r, S = r.platform;

        function R(e) {
            return 1 === e.length && ("BODY" === e[0].tagName || tbrForm.tbProductId === o || "" === tbrForm.tbProductId)
        }

        function T(e) {
            return e.length > 0 && "BODY" === e[0].tagName
        }
        if ((R(n) || R(l) || R(s) || R(d) || R(b) || R(c) || R(m) || R(u) || R(g) || T(E) || T(I) || T(p) || T(y) || T(v) || T(_) || R(w) || R(h) || R(f) || F.length > 0 || B) && (i = !0), i) {
            let i, n = "";

            function $(e) {
                const r = t.getElementsByClassName(e);
                let o = "";
                if (r.length > 0)
                    for (let e = 0; e < r.length; e++) {
                        const t = r[e].getAttribute("data-id");
                        if (t) {
                            const e = t.split("-");
                            o += `${e[e.length-1]},`
                        }
                    }
                return o
            }
            if ("v2" === k || S !== o && "mg2" === S && !B)
                if (-1 !== tbrForm.tbClientUrl.indexOf("ironwear")) i = t.querySelectorAll(".targetbay_star_container"), n = tbrForm.customBulkReviews();
                else {
                    if (i = t.querySelectorAll("div[data-product-id]"), 0 === i.length) return;
                    for (var L in i) i.hasOwnProperty(L) && (n += `${i[L].getAttribute("data-product-id")},`)
                }
            else if ("v1" === k) {
                var P = "",
                    A = "";
                if (a.some((e => tbrForm.tbClientUrl.includes(e))) || B) i = t.querySelectorAll(".targetbay_star_container"), n += tbrForm.customBulkReviews();
                else {
                    if (i = t.querySelectorAll(".regular-price"), 0 !== i.length)
                        for (var L in i) {
                            if (i.hasOwnProperty(L) && null !== i[L].getAttribute("id") && i[L].getAttribute("id") !== o) {
                                const e = i[L].getAttribute("id").split("-")[2];
                                let t = e.split("_");
                                t = t.length > 1 ? t[0] : e, isNaN(t) || (n += `${t},`)
                            }
                            if (L === i.length - 1) break
                        }
                    if (0 !== (P = t.querySelectorAll(".minimal-price .price")).length)
                        for (const e in P) {
                            if (P.hasOwnProperty(e) && null !== P[e].getAttribute("id") && P[e].getAttribute("id") !== o) {
                                const t = P[e].getAttribute("id").split("-")[3];
                                let r = t.split("_");
                                r = r.length > 1 ? r[0] : t, isNaN(r) || (n += `${r},`)
                            }
                            if (e === P.length - 1) break
                        }
                    if (0 !== (A = t.querySelectorAll(".special-price .price")).length)
                        for (const e in A) {
                            if (A.hasOwnProperty(e) && null !== A[e].getAttribute("id") && A[e].getAttribute("id") !== o) {
                                const t = A[e].getAttribute("id").split("-")[2];
                                let r = t.split("_");
                                r = r.length > 1 ? r[0] : t, isNaN(r) || (n += `${r},`)
                            }
                            if (e === A.length - 1) break
                        }
                }
            } else "shopify-v1" === k || "v1" === k ? n = $("shopify-product-reviews-badge") : "bigcommerce-v2" === k && (n = $("tb-product-bulk-reviews"));
            if ("" === n) return;
            if (n = n.slice(0, -1), "" === tbrForm.bulkReviewsLoaded) tbrForm.bulkReviewsLoaded = n;
            else {
                if (n === tbrForm.bulkReviewsLoaded) return;
                tbrForm.bulkReviewsLoaded = n
            }
            const s = {
                    ids: n
                },
                l = new XMLHttpRequest;
            l.open("POST", tbrForm.bulkReviewUrl), l.setRequestHeader("Content-Type", "application/json"), l.onreadystatechange = function() {
                if (4 === l.readyState && 200 === l.status) {
                    const c = JSON.parse(l.responseText);
                    if (Array.isArray(c) && c.length > 0) {
                        const l = c.pop();
                        let m = !0;
                        for (var n in _tbC.setCookie("tb_bulk_review", ""), i) i.hasOwnProperty(n) && (m && (i[0].innerHTML += l.style, m = !1), [].forEach.call(c, (function(e) {
                            let t, s = !0;
                            if (r.tbWooBulkReview !== o && r.tbWooBulkReview && (s = !1), "v2" === k || S !== o && "mg2" === S && s) {
                                if (-1 !== tbrForm.tbClientUrl.indexOf("ironwear")) {
                                    if (e.pId === i[n].getAttribute("id")) {
                                        if (t = i[n].getElementsByClassName("targetbay-bulk-reviews-count-field"), t.length > 0)
                                            for (let e = t.length - 1; e >= 0; e--) t[e].remove();
                                        0 == i[n].getElementsByClassName("targetbay-bulk-reviews-count-field").length && (i[n].innerHTML += e.ratings)
                                    }
                                } else if (e.pId === i[n].getAttribute("data-product-id")) {
                                    if (t = i[n].getElementsByClassName("targetbay-bulk-reviews-count-field"), t.length > 0)
                                        for (let e = t.length - 1; e >= 0; e--) t[e].remove();
                                    0 == i[n].getElementsByClassName("targetbay-bulk-reviews-count-field").length && (i[n].innerHTML += e.ratings)
                                }
                            } else if ("v1" === k) {
                                let s = !1;
                                if (r.platform !== o && "cp" === r.platform && (s = !0), r.tbWooBulkReview !== o && r.tbWooBulkReview && (s = !0), null !== i[n].getAttribute("id") && i[n].getAttribute("id") !== o) {
                                    let r;
                                    if (l = tbrForm.tbClientUrl, a.some((e => l.includes(e))) || s) r = i[n].getAttribute("id");
                                    else {
                                        r = i[n].getAttribute("id").split("-")[2]
                                    }
                                    const o = r.split("_");
                                    let d = r;
                                    if (o.length > 1 && (d = o[0]), e.pId === d) {
                                        if (t = i[n].getElementsByClassName("targetbay-bulk-reviews-count-field"), t.length > 0)
                                            for (let e = t.length - 1; e >= 0; e--) t[e].remove();
                                        0 == i[n].getElementsByClassName("targetbay-bulk-reviews-count-field").length && (i[n].innerHTML += e.ratings)
                                    }
                                }
                            } else if (("shopify-v1" === k || "bigcommerce-v2" === k || "v1" === k) && null !== i[n].getAttribute("data-id") && i[n].getAttribute("data-id") !== o) {
                                const r = i[n].getAttribute("data-id").split("-");
                                if (e.pId === r[r.length - 1]) {
                                    if (t = i[n].getElementsByClassName("targetbay-bulk-reviews-count-field"), t.length > 0)
                                        for (let e = t.length - 1; e >= 0; e--) t[e].remove();
                                    0 == i[n].getElementsByClassName("targetbay-bulk-reviews-count-field").length && (i[n].innerHTML += e.ratings)
                                }
                            }
                            var l
                        })));
                        if ("v1" === k) {
                            for (var s in P) P.hasOwnProperty(s) && [].forEach.call(c, (function(e) {
                                if (null !== P[s].getAttribute("id") && P[s].getAttribute("id") !== o && e.pId === P[s].getAttribute("id").split("-")[3]) {
                                    if (reviews = i[n].getElementsByClassName("targetbay-bulk-reviews-count-field"), reviews.length > 0)
                                        for (let e = reviews.length - 1; e >= 0; e--) reviews[e].remove();
                                    0 == i[n].getElementsByClassName("targetbay-bulk-reviews-count-field").length && (i[n].innerHTML += e.ratings)
                                }
                            }));
                            for (var d in A) A.hasOwnProperty(d) && [].forEach.call(c, (function(e) {
                                if (null !== A[d].getAttribute("id") && A[d].getAttribute("id") !== o) {
                                    var t = A[d].getAttribute("id").split("-")[2];
                                    const r = t.split("_");
                                    let o = t;
                                    if (r.length > 1 && (o = r[0]), e.pId === o) {
                                        if (reviews = i[n].getElementsByClassName("targetbay-bulk-reviews-count-field"), reviews.length > 0)
                                            for (let e = reviews.length - 1; e >= 0; e--) reviews[e].remove();
                                        0 == i[n].getElementsByClassName("targetbay-bulk-reviews-count-field").length && (i[n].innerHTML += e.ratings)
                                    }
                                }
                            }))
                        }
                        const u = e.location.href;
                        if ("v1" === k && (-1 !== u.indexOf("diveshop-dev") || -1 !== u.indexOf("divers-supply"))) var b = e.setInterval((function() {
                            if (null !== t.getElementById("ajaxpro-scrolling-button")) {
                                clearInterval(b);
                                let r = t.querySelectorAll(".pages .current").length / 2;
                                t.getElementById("ajaxpro-scrolling-button").addEventListener("click", (function() {
                                    MutationObserver = e.MutationObserver || e.WebKitMutationObserver;
                                    new MutationObserver((function(e, o) {
                                        const i = t.querySelectorAll(".pages .current").length / 2;
                                        i > r && (r = i, tbrForm.bulkRatings())
                                    })).observe(t.getElementsByClassName("pages")[0], {
                                        subtree: !0,
                                        attributes: !0
                                    })
                                }))
                            }
                        }), 1e3)
                    }
                }
            }, l.send(JSON.stringify(s))
        }
    }, tbrForm.customBulkReviews = function() {
        let e, i = "",
            n = !1;
        var s;
        if (r.tbWooBulkReview !== o && r.tbWooBulkReview && (n = !0), r.platform !== o && "cp" === r.platform && (n = !0), s = tbrForm.tbClientUrl, (a.some((e => s.includes(e))) || n) && (e = t.querySelectorAll(".targetbay_star_container")), 0 !== e.length)
            for (const t in e) {
                if (e.hasOwnProperty(t) && null !== e[t].getAttribute("id") && e[t].getAttribute("id") !== o) {
                    const r = e[t].getAttribute("id");
                    isNaN(r) || "" === r || null === r || (i += `${r},`)
                }
                if (t === e.length - 1) break
            }
        return i
    }, tbrForm.productRatings = function() {
        if (!t.getElementById("targetbay_reviews")) {
            if ("cp" !== r.platform) return;
            d()
        }
        let a = "recent",
            n = "recent",
            s = "";
        null !== t.getElementById("tb-sort-reviews-values") && null !== t.getElementById("tb-sort-reviews-values").value && t.getElementById("tb-sort-reviews-values").value !== o && (a = t.getElementById("tb-sort-reviews-values").value), null !== t.getElementById("tb-sort-qa") && null !== t.getElementById("tb-sort-qa").value && t.getElementById("tb-sort-qa").value !== o && (n = t.getElementById("tb-sort-qa").value), null !== t.getElementById("tb-sort-qa-value") && null !== t.getElementById("tb-sort-qa-value").value && t.getElementById("tb-sort-qa-value").value !== o && (n = t.getElementById("tb-sort-qa-value").value), null !== t.getElementById("tb-sort-for") && null !== t.getElementById("tb-sort-for").value && t.getElementById("tb-sort-for").value !== o && (s = t.getElementById("tb-sort-for").value);
        let l = "",
            b = "",
            c = "",
            m = "",
            u = "",
            g = "",
            p = "",
            y = "";
        t.getElementById("tb-product-availability") !== o && null !== t.getElementById("tb-product-availability") && (l = t.getElementById("tb-product-availability").value), t.getElementById("tb-product-validuntil") !== o && null !== t.getElementById("tb-product-validuntil") && (b = t.getElementById("tb-product-validuntil").value), t.getElementById("tb-product-brand") !== o && null !== t.getElementById("tb-product-brand") && (c = t.getElementById("tb-product-brand").value), t.getElementById("tb-product-price") !== o && null !== t.getElementById("tb-product-price") && (m = t.getElementById("tb-product-price").value), t.getElementById("tb-product-mpn") !== o && null !== t.getElementById("tb-product-mpn") && (u = t.getElementById("tb-product-mpn").value);
        let v = `&index_name=${tbrForm.tbkey}&product_id=${tbrForm.tbProductId}&product_name=${encodeURIComponent(tbrForm.tbProductName)}&user_id=${tbrForm.tbUserId}&user_name=${tbrForm.tbUsername}&user_email=${encodeURIComponent(tbrForm.tbEmail)}&qaDisplay=${tbrForm.qaDisplay}&product_url=${r.productUrl}&product_image_url=${r.productImageUrl}&review_sort_by=${a}&qa_sort_by=${n}&pr_availability=${l}&pr_validuntil=${b}&pr_brand=${c}&pr_price=${m}&pr_mpn=${u}&pinned=1`;
        t.getElementById("tb-product-low-price") !== o && null !== t.getElementById("tb-product-low-price") && (g = t.getElementById("tb-product-low-price").value, v += `&pr_product_low_price=${g}`), t.getElementById("tb-product-high-price") !== o && null !== t.getElementById("tb-product-high-price") && (p = t.getElementById("tb-product-high-price").value, v += `&pr_product_high_price=${p}`), t.getElementById("tb-product-offer-count") !== o && null !== t.getElementById("tb-product-offer-count") && (y = t.getElementById("tb-product-offer-count").value, v += `&pr_product_offer_count=${y}`);
        var _ = "undefined" != typeof Shopify ? Shopify.shop : "";
        void 0 !== r && "cp" === r.platform && (_ = r.domain), "undefined" != typeof Shopify && null !== Shopify || (v += `&_t=${tbrForm.accessToken}`), v += `&shop=${_}`, fetch(tbrForm.reviewThemeUrl + v, {
            method: "GET",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then((e => {
            if (!e.ok) throw new Error("An Error Occurred");
            return e.json()
        })).then((r => {
            if (r.theme)
                if (i = r.theme, 3 !== r.theme) {
                    if (null == r.content || "failed" == r.content.status) return;
                    fetch(tbrForm.reviewWidgetUrl + v, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).then((e => {
                        if (!e.ok) throw new Error("An Error Occurred");
                        return e.json()
                    })).then((r => {
                        if (r.content) {
                            t.getElementById("targetbay_reviews_header") !== o && null !== t.getElementById("targetbay_reviews_header") ? t.getElementById("targetbay_reviews_header").innerHTML = r.content : t.getElementById("targetbay_reviews").innerHTML = r.content, t.getElementById("targetbay_reviews").classList.add("tbProductReviewresIe"), -1 !== tbrForm.tbClientUrl.indexOf("targetbay_reviews") && tbrForm.tbTabClick("tbReviewSection", "scroll", 0);
                            const l = t.getElementById("tbProductReviewProductSnippet1"),
                                d = t.getElementById("tbProductReviewSnippet");
                            if (null === l && r.product_schema !== o && "" !== r.product_schema) {
                                const e = t.createElement("script");
                                e.setAttribute("type", "application/ld+json"), e.setAttribute("id", "tbProductReviewProductSnippet");
                                let i = t.querySelector('meta[name="description"]') ? .content;
                                if ("" != i && i !== o) {
                                    i = i.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
                                    const a = r.product_schema;
                                    if ("" !== a && a !== o) {
                                        "" !== a.description && a.description !== o ? a.description = i : "" !== a["@graph"].description && a["@graph"].description !== o && (a["@graph"].description = i);
                                        const r = JSON.stringify(a);
                                        e.appendChild(t.createTextNode(r))
                                    }
                                } else e.appendChild(t.createTextNode(JSON.stringify(r.product_schema)));
                                t.getElementsByTagName("head")[0].appendChild(e)
                            }
                            if (null === d) {
                                if (r.schema !== o && "" !== r.schema) {
                                    const e = t.createElement("script");
                                    e.setAttribute("type", "application/ld+json"), e.setAttribute("id", "tbProductReviewSnippet"), e.appendChild(t.createTextNode(JSON.stringify(r.schema))), t.getElementsByTagName("head")[0].appendChild(e)
                                }
                                if (r.qa_schema !== o && "" !== r.qa_schema) {
                                    const e = t.createElement("script");
                                    e.setAttribute("type", "application/ld+json"), e.setAttribute("id", "tbProductReviewSnippet"), e.appendChild(t.createTextNode(JSON.stringify(r.qa_schema))), t.getElementsByTagName("head")[0].appendChild(e)
                                }
                            }
                            if (r.aggregate_schema !== o && "" !== r.aggregate_schema) {
                                const e = t.createElement("script");
                                e.setAttribute("type", "application/ld+json"), e.setAttribute("id", "tbProductReviewAggregateSnippet"), e.appendChild(t.createTextNode(JSON.stringify(r.aggregate_schema))), t.getElementsByTagName("head")[0].appendChild(e)
                            }
                            if (e.setTimeout((function() {
                                    const e = t.getElementsByClassName("targetbay_full").length;
                                    for (var r = 0; r < e; r++) t.getElementsByClassName("targetbay_full")[r].style.display = "block";
                                    const o = t.querySelectorAll("#tbRatingStar .custom-label").length;
                                    for (r = 0; r < o; r++) t.querySelectorAll("#tbRatingStar .custom-label")[r].style.display = "none";
                                    const i = t.querySelectorAll("#tbRatingStar .infoprice").length;
                                    for (r = 0; r < i; r++) t.querySelectorAll("#tbRatingStar .infoprice")[r].style.display = "none";
                                    const a = t.querySelectorAll("#tbRatingStar .infoweight").length;
                                    for (r = 0; r < a; r++) t.querySelectorAll("#tbRatingStar .infoweight")[r].style.display = "none"
                                }), 3e3), -1 !== tbrForm.tbClientUrl.indexOf("ruggedmade")) {
                                const e = t.querySelectorAll(".tabinglinks a");
                                for (var i = 0; i < e.length; i++) "#tracking-product-review" == e[i].getAttribute("href") && e[i].setAttribute("onclick", "tbrForm.tbTabClick('tbReviewSection','scroll',0)"), "#questionstab" == e[i].getAttribute("href") && e[i].setAttribute("onclick", "tbrForm.tbTabClick('tbQuestionSection','scroll',0)")
                            }!0 === !!t.documentMode && t.getElementById("targetbay_reviews").classList.remove("tbProductReviewresIe");
                            const b = t.querySelector(".tb_product_reviews_pagination");
                            b && b.addEventListener("click", (function(e) {
                                e.preventDefault();
                                const t = e.target;
                                if (t.getAttribute("href")) {
                                    const e = t.getAttribute("href").split("page=")[1];
                                    tbrForm.reviewpage = e.split("#")[0], tbrForm.getReviews(tbrForm.reviewpage)
                                }
                            }), !1);
                            const c = t.querySelector(".tb_qa_pagination");
                            c && c.addEventListener("click", (function(e) {
                                e.preventDefault();
                                const t = e.target;
                                if (t.getAttribute("href")) {
                                    const e = t.getAttribute("href").split("page=")[1];
                                    tbrForm.qapage = e.split("#")[0], tbrForm.getQA(tbrForm.qapage)
                                }
                            }), !1);
                            const m = t.querySelectorAll(".targetbay-review-voting");
                            i = 0;
                            for (var {
                                    length: a
                                } = m; i < a; i++) t.addEventListener && m[i].addEventListener("click", (function(e) {
                                e.preventDefault();
                                e.target;
                                const t = this.getAttribute("data"),
                                    r = this.getAttribute("data-val");
                                null != t && tbrForm.voteReview(t, r)
                            }));
                            const u = t.querySelectorAll(".targetbay-question-voting");
                            i = 0;
                            for (var {
                                    length: a
                                } = u; i < a; i++) t.addEventListener && u[i].addEventListener("click", (function(e) {
                                e.target;
                                const t = this.getAttribute("data"),
                                    r = this.getAttribute("data-val"),
                                    o = this.getAttribute("data-index");
                                null != t && tbrForm.voteQA(t, r, o)
                            }));
                            const g = t.getElementById("tb-sort-reviews"),
                                p = t.getElementById("tb-sort-qa");
                            null !== g && g !== o && null !== p && p !== o && (g.addEventListener("change", (function(e) {
                                tbrForm.getReviews("sorting")
                            })), p.addEventListener("change", (function(e) {
                                tbrForm.getQA("sorting")
                            })));
                            const y = t.getElementById("targetbayReviewUpload");
                            null !== y && y.addEventListener("change", (function(e) {
                                t.getElementsByClassName("tbProductReviews-formErrorLabel")[0].style.display = "none", t.getElementById("tbProductReviews-reviewForm").className = "tbProductReviews-tbReviewForm", t.getElementById("targetbay_review_upload_filetype_error").style.display = "none", t.getElementById("targetbay_review_upload_error").style.display = "none";
                                const {
                                    files: r
                                } = y;
                                t.getElementsByClassName("tbSiteReviews-clientUploadImage")[0].innerHTML = "";
                                for (var o = 0; o < r.length; o++) {
                                    if (!r[o].type.match("image.*")) return t.getElementsByClassName("tbProductReviews-formErrorLabel")[0].style.display = "block", t.getElementById("tbProductReviews-reviewForm").className += " tbSiteReviews-tbReviewFormError", t.getElementById("tbProductReviews-reviewForm").scrollIntoView(), t.getElementById("targetbay_review_upload_filetype_error").style.display = "block", t.getElementById("targetbayReviewUpload").value = "", !1;
                                    const e = ["image/jpeg", "image/png"],
                                        i = r[o].name.split(".").pop().toLowerCase(),
                                        a = ["jpg", "jpeg", "png"],
                                        n = e.includes(r[o].type.toLowerCase()),
                                        s = a.includes(i);
                                    if (!n && !s) return t.getElementsByClassName("tbProductReviews-formErrorLabel")[0].style.display = "block", t.getElementById("tbProductReviews-reviewForm").className += " tbSiteReviews-tbReviewFormError", t.getElementById("tbProductReviews-reviewForm").scrollIntoView(), t.getElementById("targetbay_review_upload_filetype_error").style.display = "block", t.getElementById("targetbayReviewUpload").value = "", !1;
                                    if (r[o].size > 5242880) return t.getElementsByClassName("tbProductReviews-formErrorLabel")[0].style.display = "block", t.getElementById("tbProductReviews-reviewForm").className += " tbSiteReviews-tbReviewFormError", t.getElementById("tbProductReviews-reviewForm").scrollIntoView(), t.getElementById("targetbay_review_upload_error").style.display = "block", t.getElementById("targetbayReviewUpload").value = "", !1
                                }
                                for (o = 0; o < r.length; o++) {
                                    const e = new FileReader;
                                    e.readAsDataURL(r[o]), e.onload = tbrForm.addImg
                                }
                                tbrForm.clearErrorDisplay()
                            }));
                            const v = e.location.href;
                            let _;
                            let w;
                            if (-1 !== v.indexOf("rokhardware")) _ = t.getElementsByClassName("page-title-wrapper")[0], _ !== o && null !== _ && (_.innerHTML += r.productStarContent);
                            else if (-1 !== v.indexOf("lilypersonalcare")) _ = t.getElementsByClassName("product-name")[0], _ !== o && null !== _ && tbrForm.insertAfter(r.productStarContent, _);
                            else if (-1 !== v.indexOf("qc-dealsallyear")) {
                                var n;
                                (n = t.querySelector("div.page-title-wrapper")) !== o && null !== n && (n.innerHTML += r.productStarContent)
                            } else if (-1 !== v.indexOf("dealsallyear"))(n = t.getElementsByClassName("short-description")[0]) !== o && null !== n && tbrForm.insertAfter(r.productStarContent, n);
                            else if (-1 !== v.indexOf("chevaliercollection"))(n = t.getElementsByClassName("description")[0]) !== o && null !== n && (n.innerHTML += r.productStarContent);
                            else if (-1 !== v.indexOf("thesweeper"))(n = t.getElementsByClassName("product-name")[0]) !== o && null !== n && n.insertAdjacentHTML("beforebegin", r.productStarContent);
                            else if (-1 !== v.indexOf("finehomelamps"))(n = t.getElementsByClassName("product_name")[0]) !== o && null !== n && n.insertAdjacentHTML("afterEnd", r.productStarContent);
                            else if (-1 !== v.indexOf("vietri")) {
                                const e = t.getElementsByClassName("mobile-product-price");
                                e.length > 0 ? (n = e[0]) !== o && null !== n && (n.innerHTML += r.productStarContent) : (n = t.getElementsByClassName("tb_reviews_average")[0]) !== o && null !== n && (n.innerHTML += r.productStarContent)
                            } else if (-1 !== v.indexOf("candere")) {
                                if (_ = t.querySelector("h1.title"), w = t.querySelectorAll("h1.title"), _ !== o && null !== _)
                                    for (var s = 0; s < w.length; s++) tbrForm.insertAfter(r.productStarContent, w[s])
                            } else if (-1 !== v.indexOf("tnvitamins")) _ = t.getElementsByClassName("page-title")[0], _ !== o && null !== _ && _.insertAdjacentHTML("afterend", r.productStarContent);
                            else if (-1 !== v.indexOf("cabinfield")) _ = t.getElementsByClassName("prnmtitl")[0], _ !== o && null !== _ && (_.innerHTML += r.productStarContent);
                            else if (_ = t.getElementsByClassName("product_name")[0], _ !== o && null !== _) tbrForm.insertAfter(r.productStarContent, _);
                            else {
                                _ = t.querySelector("div.product-name"), w = t.querySelectorAll("div.product-name");
                                const e = t.getElementsByClassName("targetbay-reviews-count-field");
                                if (e.length > 0)
                                    for (i = 0; i < e.length; i++) e[i].remove();
                                if (_ !== o && null !== _)
                                    for (s = 0; s < w.length; s++) w[s].innerHTML += r.productStarContent;
                                else {
                                    const e = t.querySelectorAll("div.page-title-wrapper");
                                    if (e !== o && null !== e && e.length > 0)
                                        for (s = 0; s < e.length; s++) e[s].innerHTML += r.productStarContent;
                                    else _ = t.getElementsByClassName("product-name")[0], _ !== o && null !== _ && tbrForm.insertAfter(r.productStarContent, _)
                                }
                            }
                        }
                    })).catch((e => {}))
                } else {
                    if (null == r.content || "failed" == r.content.status) return;
                    if (r.content) {
                        if (t.getElementById("targetbay_reviews_header") !== o && null !== t.getElementById("targetbay_reviews_header")) t.getElementById("targetbay_reviews_header").innerHTML = r.content;
                        else {
                            t.getElementById("targetbay_reviews").innerHTML = r.content, tbrForm.loadMasonry1();
                            t.querySelectorAll(".tgb-grid-item").forEach(((e, t) => {
                                setTimeout((() => {
                                    e.classList.add("show")
                                }), 200 * t)
                            }))
                        }
                        if (t.getElementById("targetbay_reviews").classList.add("tbProductReviewresIe"), -1 !== tbrForm.tbClientUrl.indexOf("targetbay_reviews") && tbrForm.tbTabClick("tbReviewSection", "scroll", 0), e.setTimeout((function() {
                                const e = t.getElementsByClassName("targetbay_full").length;
                                for (var r = 0; r < e; r++) t.getElementsByClassName("targetbay_full")[r].style.display = "block";
                                const o = t.querySelectorAll("#tbRatingStar .custom-label").length;
                                for (r = 0; r < o; r++) t.querySelectorAll("#tbRatingStar .custom-label")[r].style.display = "none";
                                const i = t.querySelectorAll("#tbRatingStar .infoprice").length;
                                for (r = 0; r < i; r++) t.querySelectorAll("#tbRatingStar .infoprice")[r].style.display = "none";
                                const a = t.querySelectorAll("#tbRatingStar .infoweight").length;
                                for (r = 0; r < a; r++) t.querySelectorAll("#tbRatingStar .infoweight")[r].style.display = "none"
                            }), 3e3), -1 !== tbrForm.tbClientUrl.indexOf("ruggedmade")) {
                            const e = t.querySelectorAll(".tabinglinks a");
                            for (var a = 0; a < e.length; a++) "#tracking-product-review" == e[a].getAttribute("href") && e[a].setAttribute("onclick", "tbrForm.tbTabClick('tbReviewSection','scroll',0)"), "#questionstab" == e[a].getAttribute("href") && e[a].setAttribute("onclick", "tbrForm.tbTabClick('tbQuestionSection','scroll',0)")
                        }!0 === !!t.documentMode && t.getElementById("targetbay_reviews").classList.remove("tbProductReviewresIe");
                        const i = t.querySelector(".tb_product_reviews_pagination");
                        i && i.addEventListener("click", (function(e) {
                            e.preventDefault();
                            const t = e.target;
                            if (t.getAttribute("href")) {
                                const e = t.getAttribute("href").split("page=")[1];
                                tbrForm.reviewpage = e.split("#")[0], tbrForm.getReviews(tbrForm.reviewpage)
                            }
                        }), !1);
                        const s = t.querySelector(".tb_qa_pagination");
                        s && s.addEventListener("click", (function(e) {
                            e.preventDefault();
                            const t = e.target;
                            if (t.getAttribute("href")) {
                                const e = t.getAttribute("href").split("page=")[1];
                                tbrForm.qapage = e.split("#")[0], tbrForm.getQA(tbrForm.qapage)
                            }
                        }), !1);
                        const l = t.querySelectorAll(".targetbay-review-voting");
                        a = 0;
                        for (var {
                                length: n
                            } = l; a < n; a++) t.addEventListener && l[a].addEventListener("click", (function(e) {
                            e.preventDefault();
                            e.target;
                            const t = this.getAttribute("data"),
                                r = this.getAttribute("data-val");
                            null != t && tbrForm.voteReview(t, r)
                        }));
                        const d = t.querySelectorAll(".targetbay-question-voting");
                        a = 0;
                        for (var {
                                length: n
                            } = d; a < n; a++) t.addEventListener && d[a].addEventListener("click", (function(e) {
                            e.target;
                            const t = this.getAttribute("data"),
                                r = this.getAttribute("data-val"),
                                o = this.getAttribute("data-index");
                            null != t && tbrForm.voteQA(t, r, o)
                        }));
                        const b = t.getElementById("tb-sort-reviews"),
                            c = t.getElementById("tb-sort-qa");
                        null !== b && b !== o && null !== c && c !== o && (b.addEventListener("change", (function(e) {
                            tbrForm.getReviews("sorting")
                        })), c.addEventListener("change", (function(e) {
                            tbrForm.getQA("sorting")
                        })));
                        const m = t.getElementById("targetbayReviewUpload");
                        null !== m && m.addEventListener("change", (function(e) {
                            t.getElementsByClassName("tbProductReviews-formErrorLabel")[0].style.display = "none", t.getElementById("tbProductReviews-reviewForm").className = "tbProductReviews-tbReviewForm", t.getElementById("targetbay_review_upload_filetype_error").style.display = "none", t.getElementById("targetbay_review_upload_error").style.display = "none";
                            const {
                                files: r
                            } = m;
                            t.getElementsByClassName("tbSiteReviews-clientUploadImage")[0].innerHTML = "";
                            for (var o = 0; o < r.length; o++) {
                                if (!r[o].type.match("image.*")) return t.getElementsByClassName("tbProductReviews-formErrorLabel")[0].style.display = "block", t.getElementById("tbProductReviews-reviewForm").className += " tbSiteReviews-tbReviewFormError", t.getElementById("tbProductReviews-reviewForm").scrollIntoView(), t.getElementById("targetbay_review_upload_filetype_error").style.display = "block", t.getElementById("targetbayReviewUpload").value = "", !1;
                                const e = ["image/jpeg", "image/png"],
                                    i = r[o].name.split(".").pop().toLowerCase(),
                                    a = ["jpg", "jpeg", "png"],
                                    n = e.includes(r[o].type.toLowerCase()),
                                    s = a.includes(i);
                                if (!n && !s) return t.getElementsByClassName("tbProductReviews-formErrorLabel")[0].style.display = "block", t.getElementById("tbProductReviews-reviewForm").className += " tbSiteReviews-tbReviewFormError", t.getElementById("tbProductReviews-reviewForm").scrollIntoView(), t.getElementById("targetbay_review_upload_filetype_error").style.display = "block", t.getElementById("targetbayReviewUpload").value = "", !1;
                                if (r[o].size > 5242880) return t.getElementsByClassName("tbProductReviews-formErrorLabel")[0].style.display = "block", t.getElementById("tbProductReviews-reviewForm").className += " tbSiteReviews-tbReviewFormError", t.getElementById("tbProductReviews-reviewForm").scrollIntoView(), t.getElementById("targetbay_review_upload_error").style.display = "block", t.getElementById("targetbayReviewUpload").value = "", !1
                            }
                            for (o = 0; o < r.length; o++) {
                                const e = new FileReader;
                                e.readAsDataURL(r[o]), e.onload = tbrForm.addImg
                            }
                            tbrForm.clearErrorDisplay()
                        }))
                    }
                    const i = t.getElementById("tbProductReviewProductSnippet1"),
                        d = t.getElementById("tbProductReviewSnippet");
                    null === i && null === d && fetch(tbrForm.reviewSchemaUrl + v, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).then((e => {
                        if (!e.ok) throw new Error("An Error Occurred");
                        return e.json()
                    })).then((e => {
                        if (e.product_schema !== o && "" !== e.product_schema) {
                            const r = t.createElement("script");
                            r.setAttribute("type", "application/ld+json"), r.setAttribute("id", "tbProductReviewProductSnippet");
                            let i = t.querySelector('meta[name="description"]') ? .content;
                            if ("" != i && i !== o) {
                                i = i.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
                                const a = e.product_schema;
                                if ("" !== a && a !== o) {
                                    "" !== a.description && a.description !== o ? a.description = i : "" !== a["@graph"].description && a["@graph"].description !== o && (a["@graph"].description = i);
                                    const e = JSON.stringify(a);
                                    r.appendChild(t.createTextNode(e))
                                }
                            } else r.appendChild(t.createTextNode(JSON.stringify(e.product_schema)));
                            t.getElementsByTagName("head")[0].appendChild(r)
                        }
                        if (e.schema !== o && "" !== e.schema) {
                            const r = t.createElement("script");
                            r.setAttribute("type", "application/ld+json"), r.setAttribute("id", "tbProductReviewSnippet"), r.appendChild(t.createTextNode(JSON.stringify(e.schema))), t.getElementsByTagName("head")[0].appendChild(r)
                        }
                        if (e.qa_schema !== o && "" !== e.qa_schema) {
                            const r = t.createElement("script");
                            r.setAttribute("type", "application/ld+json"), r.setAttribute("id", "tbProductReviewSnippet"), r.appendChild(t.createTextNode(JSON.stringify(e.qa_schema))), t.getElementsByTagName("head")[0].appendChild(r)
                        }
                        if (e.aggregate_schema !== o && "" !== e.aggregate_schema) {
                            const r = t.createElement("script");
                            r.setAttribute("type", "application/ld+json"), r.setAttribute("id", "tbProductReviewAggregateSnippet"), r.appendChild(t.createTextNode(JSON.stringify(e.aggregate_schema))), t.getElementsByTagName("head")[0].appendChild(r)
                        }
                    })).catch((e => {}));
                    const b = e.location.href;
                    let c;
                    let m;
                    if (-1 !== b.indexOf("rokhardware")) c = t.getElementsByClassName("page-title-wrapper")[0], c !== o && null !== c && (c.innerHTML += r.productStarContent);
                    else if (-1 !== b.indexOf("lilypersonalcare")) c = t.getElementsByClassName("product-name")[0], c !== o && null !== c && tbrForm.insertAfter(r.productStarContent, c);
                    else if (-1 !== b.indexOf("qc-dealsallyear")) {
                        var s;
                        (s = t.querySelector("div.page-title-wrapper")) !== o && null !== s && (s.innerHTML += r.productStarContent)
                    } else if (-1 !== b.indexOf("dealsallyear"))(s = t.getElementsByClassName("short-description")[0]) !== o && null !== s && tbrForm.insertAfter(r.productStarContent, s);
                    else if (-1 !== b.indexOf("chevaliercollection"))(s = t.getElementsByClassName("description")[0]) !== o && null !== s && (s.innerHTML += r.productStarContent);
                    else if (-1 !== b.indexOf("thesweeper"))(s = t.getElementsByClassName("product-name")[0]) !== o && null !== s && s.insertAdjacentHTML("beforebegin", r.productStarContent);
                    else if (-1 !== b.indexOf("finehomelamps"))(s = t.getElementsByClassName("product_name")[0]) !== o && null !== s && s.insertAdjacentHTML("afterEnd", r.productStarContent);
                    else if (-1 !== b.indexOf("vietri")) {
                        const e = t.getElementsByClassName("mobile-product-price");
                        e.length > 0 ? (s = e[0]) !== o && null !== s && (s.innerHTML += r.productStarContent) : (s = t.getElementsByClassName("tb_reviews_average")[0]) !== o && null !== s && (s.innerHTML += r.productStarContent)
                    } else if (-1 !== b.indexOf("candere")) {
                        if (c = t.querySelector("h1.title"), m = t.querySelectorAll("h1.title"), c !== o && null !== c)
                            for (var l = 0; l < m.length; l++) tbrForm.insertAfter(r.productStarContent, m[l])
                    } else if (-1 !== b.indexOf("tnvitamins")) c = t.getElementsByClassName("page-title")[0], c !== o && null !== c && c.insertAdjacentHTML("afterend", r.productStarContent);
                    else if (-1 !== b.indexOf("cabinfield")) c = t.getElementsByClassName("prnmtitl")[0], c !== o && null !== c && (c.innerHTML += r.productStarContent);
                    else {
                        c = t.getElementsByClassName("product_name")[0];
                        const e = t.getElementsByClassName("targetbay-reviews-count-field");
                        if (e.length > 0)
                            for (let t = 0; t < e.length; t++) e[t].remove();
                        if (c !== o && null !== c) tbrForm.insertAfter(r.productStarContent, c);
                        else {
                            c = t.querySelector("div.product-name"), m = t.querySelectorAll("div.product-name");
                            const e = t.getElementsByClassName("targetbay-reviews-count-field");
                            if (e.length > 0)
                                for (let t = 0; t < e.length; t++) e[t].remove();
                            if (c !== o && null !== c)
                                for (l = 0; l < m.length; l++) m[l].innerHTML += r.productStarContent;
                            else {
                                const e = t.querySelectorAll("div.page-title-wrapper");
                                if (e !== o && null !== e && e.length > 0)
                                    for (l = 0; l < e.length; l++) e[l].innerHTML += r.productStarContent;
                                else c = t.getElementsByClassName("product-name")[0], c !== o && null !== c && tbrForm.insertAfter(r.productStarContent, c)
                            }
                        }
                    }
                }
        })).catch((e => {}))
    }, tbrForm.html_entity_decode = function(e) {
        if (null == e) return "";
        let r = t.createElement("textarea");
        r.innerHTML = e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        const o = r.value;
        return r = null, o
    }, tbrForm.reviewTwo = function(e, r) {
        t.getElementById("tb-sort-reviews-values").value = e, t.getElementById("tbactive").innerHTML = r, t.getElementById("tbactive_div").style.display = "none", tbrForm.getReviews()
    }, tbrForm.reviewSearch = function(e) {
        if ("" == e) return !1;
        t.getElementById("review_search_text").value = e, tbrForm.getReviews("searching")
    }, tbrForm.clearReviewSearch = function() {
        t.getElementById("review_search_text").value = "", tbrForm.getReviews("searching")
    }, tbrForm.openOptions = function(e) {
        let r;
        r = "review" === e ? t.getElementById("tbactive_div") : t.getElementById("tbactive-div-qa"), "none" === r.style.display ? r.style.display = "block" : r.style.display = "none"
    }, tbrForm.getReviews = async function(e) {
        let r = t.getElementById("tb-sort-reviews") ? .value || t.getElementById("tb-sort-reviews-values") ? .value || "recent",
            o = t.getElementById("tb-sort-qa") ? .value || "recent",
            i = t.getElementById("tb-sort-for") ? .value || "tb_reviews",
            a = t.getElementById("review_search_text") ? .value || "",
            n = t.getElementById("qa_search_text") ? .value || "";
        const s = t.getElementById("tbactive") ? .innerHTML || "";
        "sorting" === e ? (tbrForm.reviewpage = 1, tbrForm.qapage = 1) : "searching" === e && (tbrForm.reviewpage = 1);
        let l = `${tbrForm.commonParams}&qaDisplay=${tbrForm.qaDisplay}&reviewpage=${tbrForm.reviewpage}&qapage=${tbrForm.qapage}&review_sort_by=${r}&qa_sort_by=${o}&review_search_text=${a}&qa_search_text=${n}`;
        try {
            const e = await fetch(tbrForm.reviewWidgetUrl + l, {
                method: "GET",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });
            if (!e.ok) throw new Error("Network response was not ok.");
            const r = await e.json(),
                o = t.getElementById("targetbay_reviews");
            o && (o.innerHTML = r.content, tbrForm.tbTabClick("tbReviewSection", "noscroll"), t.querySelector(".tbProductReviews-tbTabNavBar") ? .scrollIntoView(), t.getElementById("tbactive") && (t.getElementById("tbactive").innerHTML = s, function() {
                const e = t.getElementById("page-number-star");
                if (e) {
                    const r = parseInt(t.getElementById("limit_count_product_review") ? .innerHTML) || 0,
                        o = parseInt(t.getElementById("page-number-total") ? .innerHTML) || 0,
                        i = tbrForm.reviewpage * r;
                    e.innerHTML = i - r + 1, t.getElementById("page-number-limit").innerHTML = Math.min(i, o)
                }
            }()), t.getElementById("tbactive-qa") && (t.getElementById("tbactive-qa").innerHTML = t.getElementById("tbactive-qa").innerHTML || "Newest"), "tb_reviews" === i ? tbrForm.tbTabClick("tbReviewSection", "scroll", 0) : "tb_qa" === i && tbrForm.tbTabClick("tbQuestionSection", "scroll", 0), tbwTrack.reviewUserTrack("review"), tbwTrack.reviewPaginate(), tbwTrack.qaPaginate(), tbwTrack.reviewVote(), tbwTrack.qaVote(), tbwTrack.sortReviews(), tbwTrack.reviewUpload())
        } catch (e) {}
    }, tbrForm.qaTwo = function(e, r) {
        t.getElementById("tb-sort-qa-value").value = e, t.getElementById("tbactive-qa").innerHTML = r, t.getElementById("tbactive-div-qa").style.display = "none", tbrForm.getQA()
    }, tbrForm.qaSearch = function(e) {
        if ("" == e) return !1;
        t.getElementById("qa_search_text").value = e, tbrForm.getQA("searching")
    }, tbrForm.clearQaSearch = function() {
        t.getElementById("qa_search_text").value = "", tbrForm.getQA("searching")
    }, tbrForm.getQA = async function(e) {
        let r = _tbC.valEx("tb-sort-reviews") ? _tbC.getVal("tb-sort-reviews") : "recent";
        r = _tbC.valEx("tb-sort-reviews-values") ? _tbC.getVal("tb-sort-reviews-values") : r;
        let o = _tbC.valEx("tb-sort-qa") ? _tbC.getVal("tb-sort-qa") : "recent";
        o = _tbC.valEx("tb-sort-qa-value") ? _tbC.getVal("tb-sort-qa-value") : o;
        let a = _tbC.valEx("review_search_text") ? _tbC.getVal("review_search_text") : "",
            n = _tbC.valEx("qa_search_text") ? _tbC.getVal("qa_search_text") : "";
        "sorting" === e ? (tbrForm.reviewpage = 1, tbrForm.qapage = 1) : "searching" === e && (tbrForm.qapage = 1);
        const s = t.getElementById("tbactive-qa") ? .innerHTML || "Newest",
            l = t.getElementById("tbactive") ? .innerHTML || "Newest",
            d = _tbC.valEx("tb-sort-for") ? _tbC.getVal("tb-sort-for") : "tb_reviews",
            b = new URLSearchParams({ ...tbrForm.baseParams,
                qaDisplay: tbrForm.qaDisplay,
                reviewpage: tbrForm.reviewpage,
                qapage: tbrForm.qapage,
                review_sort_by: r,
                qa_sort_by: o,
                review_search_text: a,
                qa_search_text: n
            });
        3 !== i && tbrForm.getReviews("sorting");
        try {
            const e = await fetch(`${tbrForm.reviewContentUrl}&${b.toString()}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });
            if (!e.ok) throw new Error("Network response was not ok.");
            const i = await e.json(),
                a = t.getElementById("targetbay_reviews");
            a && (a.innerHTML = i.content, tbrForm.tbTabClick("tbQuestionSection", "noscroll"), t.querySelector(".tbProductReviews-tbTabNavBar") ? .scrollIntoView(), c("qa", o, s), c("review", r, l), "tb_reviews" === d ? tbrForm.tbTabClick("tbReviewSection", "scroll", 0) : "tb_qa" === d && tbrForm.tbTabClick("tbQuestionSection", "scroll", 0), tbwTrack.reviewUserTrack("qa"), tbwTrack.reviewPaginate(), tbwTrack.qaPaginate(), tbwTrack.reviewVote(), tbwTrack.qaVote(), tbwTrack.sortReviews(), tbwTrack.reviewUpload())
        } catch (e) {}

        function c(e, r, o) {
            const i = t.getElementById(`tbactive-${e}`),
                a = t.getElementById(`page-number-star-${e}`),
                n = t.getElementById(`limit_count_${e}`),
                s = t.getElementById(`page-number-total-${e}`),
                l = t.getElementById(`page-number-limit-${e}`);
            if (i && (i.innerHTML = o, a && n && s)) {
                const t = parseInt(n.innerHTML) || 0,
                    r = parseInt(s.innerHTML) || 0;
                a.innerHTML = tbrForm[`${e}page`] * t + 1 - t, l.innerHTML = Math.min(tbrForm[`${e}page`] * t, r)
            }
        }
    }, tbrForm.tbReviewClick = function(i) {
        let a = 0;
        if (_tbC.elEx("tb-pr-captchaval")) {
            if (1 == t.getElementById("tb-pr-captchaval").value && "review" == i) {
                var n = parseInt(t.getElementById("tb-pr-numberone").value) + parseInt(t.getElementById("tb-pr-numbertwo").value);
                "" === (s = t.getElementById("tb-pr-ansval").value) ? (t.getElementById("targetbay_pr_captcha_error").style.display = "block", a = 1) : t.getElementById("targetbay_pr_captcha_error").style.display = "none", n != s ? (t.getElementById("targetbay_pr_captcha_error").style.display = "block", a = 1) : t.getElementById("targetbay_pr_captcha_error").style.display = "none"
            }
        }
        if (_tbC.elEx("tb-qa-captchaval")) {
            if (1 == t.getElementById("tb-qa-captchaval").value && "qa" == i) {
                var s;
                n = parseInt(t.getElementById("tb-qa-numberone").value) + parseInt(t.getElementById("tb-qa-numbertwo").value);
                "" === (s = t.getElementById("tb-qa-ansval").value) ? (t.getElementById("targetbay_qa_captcha_error").style.display = "block", a = 1) : t.getElementById("targetbay_qa_captcha_error").style.display = "none", n != s ? (t.getElementById("targetbay_qa_captcha_error").style.display = "block", a = 1) : t.getElementById("targetbay_qa_captcha_error").style.display = "none"
            }
        }
        let l, d = "",
            b = "";
        const c = t.getElementById("targetbayTemplateType").value;
        let m = _tbC.getCookie("user_loggedin");
        const u = _tbC.getCookie("tb_fetch_points");
        if (u !== o && null !== u && "" !== u && "" === m && (m = _tbC.getCookieDecode("tb_fetch_points", "_ulogin")), "review" === c) {
            for (var g = t.getElementsByName("targetbayRating"), p = 0; p < g.length; p++) g[p].checked && (d = g[p].value);
            b = t.getElementById("targetbayReviewTitle").value, l = t.getElementById("targetbayReview").value, "" === m && t.getElementById("targetbayReviewUsername") && t.getElementById("targetbayReviewEmail") && (tbrForm.tbUsername = t.getElementById("targetbayReviewUsername").value, tbrForm.tbEmail = t.getElementById("targetbayReviewEmail").value)
        } else l = t.getElementById("targetbayQuestion").value, "" === m && t.getElementById("targetbayQuestionUsername") && t.getElementById("targetbayQuestionEmail") && (tbrForm.tbUsername = t.getElementById("targetbayQuestionUsername").value, tbrForm.tbEmail = t.getElementById("targetbayQuestionEmail").value);
        if ("review" === c) {
            var y = t.getElementById("title_validator").value;
            "" === d ? (t.getElementById("targetbay_rating_error").style.display = "block", a = 1) : t.getElementById("targetbay_rating_error").style.display = "none", "" === b && "yes" === y ? (t.getElementById("targetbay_review_title_error").style.display = "block", a = 1) : t.getElementById("targetbay_review_title_error").style.display = "none", "" === l ? (t.getElementById("targetbay_review_error").style.display = "block", a = 1) : t.getElementById("targetbay_review_error").style.display = "none", "" === m && (_tbC.elsEx(["targetbay_review_name_invalid", "targetbay_review_name_error"]) && ("" === tbrForm.tbUsername ? (_tbC.hdEl("targetbay_review_name_invalid"), _tbC.shEl("targetbay_review_name_error"), a = 1) : tbrForm.validateName(tbrForm.tbUsername) ? (_tbC.hdEl("targetbay_review_name_error"), _tbC.hdEl("targetbay_review_name_invalid")) : (_tbC.hdEl("targetbay_review_name_error"), _tbC.shEl("targetbay_review_name_invalid"), a = 1)), _tbC.elsEx(["targetbay_review_email_invalid", "targetbay_review_email_error"]) && ("" === tbrForm.tbEmail ? (_tbC.hdEl("targetbay_review_email_invalid"), _tbC.shEl("targetbay_review_email_error"), a = 1) : tbrForm.validateEmail(tbrForm.tbEmail) ? (_tbC.hdEl("targetbay_review_email_error"), _tbC.hdEl("targetbay_review_email_invalid")) : (_tbC.hdEl("targetbay_review_email_error"), _tbC.shEl("targetbay_review_email_invalid"), a = 1)))
        } else "" === l ? (t.getElementById("targetbay_question_error").style.display = "block", a = 1) : t.getElementById("targetbay_question_error").style.display = "none", "" === m && (t.getElementById("targetbay_question_name_error") && ("" === tbrForm.tbUsername ? (t.getElementById("targetbay_question_name_error").style.display = "block", a = 1) : t.getElementById("targetbay_question_name_error").style.display = "none"), t.getElementById("targetbay_question_email_invalid") && t.getElementById("targetbay_question_email_error") && ("" === tbrForm.tbEmail ? (t.getElementById("targetbay_question_email_invalid").style.display = "none", t.getElementById("targetbay_question_email_error").style.display = "block", a = 1) : tbrForm.validateEmail(tbrForm.tbEmail) ? (t.getElementById("targetbay_question_email_error").style.display = "none", t.getElementById("targetbay_question_email_invalid").style.display = "none") : (t.getElementById("targetbay_question_email_error").style.display = "none", t.getElementById("targetbay_question_email_invalid").style.display = "block", a = 1)));
        if (1 == a && ("review" === c ? (t.getElementsByClassName("tbProductReviews-formErrorLabel")[0].style.display = "block", t.getElementById("tbProductReviews-reviewForm").className += " tbSiteReviews-tbReviewFormError", t.getElementById("tbProductReviews-reviewForm").scrollIntoView()) : (t.getElementsByClassName("tbProductReviews-formErrorLabel")[1].style.display = "block", t.getElementById("tbProductReviews-questionForm").className += " tbSiteReviews-tbReviewFormError", t.getElementById("tbProductReviews-questionForm").scrollIntoView())), 0 === a) {
            const o = new FormData,
                i = t.getElementById("targetbayReviewUpload");
            if (null !== i) {
                const {
                    files: e
                } = i;
                for (p = 0; p < e.length; p++) {
                    e[p];
                    o.append("reviewupload[]", e[p])
                }
            }
            r.userName = "" !== r.userName && null !== r.userName ? r.userName : "anonymous", o.append("index_name", tbrForm.tbkey), o.append("product_id", tbrForm.tbProductId), o.append("product_name", tbrForm.tbProductName), o.append("user_id", tbrForm.tbUserId), o.append("user_name", tbrForm.tbUsername), o.append("user_email", tbrForm.tbEmail), o.append("user_avatar", tbrForm.tbAvatar), o.append("review_rating", d), o.append("review_title", b), o.append("review", l), o.append("template_type", c), o.append("product_image_url", tbrForm.tbProductImageUrl), o.append("product_page_url", tbrForm.tbProductUrl), o.append("user_type", r.userName), o.append("title_validator", y);
            var v = "undefined" != typeof Shopify ? Shopify.shop : "";
            if (void 0 !== r && "cp" === r.platform && (v = r.domain), o.append("shop", v), "review" === c) {
                t.getElementsByClassName("tbProductReviews-formErrorLabel")[0].style.display = "none", t.getElementById("tbProductReviews-reviewForm").className = "tbProductReviews-tbReviewForm";
                for (p = 0; p < g.length; p++) g[p].checked && (g[p].checked = !1);
                t.getElementById("targetbayReviewTitle").value = "", t.getElementById("targetbayReview").value = "", null !== i && (t.getElementById("targetbayReviewUpload").value = "", t.getElementById("targetbay_review_upload_error").style.display = "none", t.getElementById("targetbay_review_upload_filetype_error").style.display = "none", t.getElementsByClassName("tbSiteReviews-clientUploadImage")[0].innerHTML = ""), "" === m && t.getElementById("targetbayReviewUsername") && t.getElementById("targetbayReviewEmail") && (t.getElementById("targetbayReviewUsername").value = "", t.getElementById("targetbayReviewEmail").value = ""), t.getElementsByClassName("c-loader")[0].style.display = "block"
            } else t.getElementsByClassName("tbProductReviews-formErrorLabel")[1].style.display = "none", t.getElementById("tbProductReviews-questionForm").className = "tbProductReviews-tbReviewForm", t.getElementById("targetbayQuestion").value = "", "" === m && t.getElementById("targetbayQuestionUsername") && t.getElementById("targetbayQuestionEmail") && (t.getElementById("targetbayQuestionUsername").value = "", t.getElementById("targetbayQuestionEmail").value = ""), t.getElementsByClassName("c-loader")[1].style.display = "block";
            const a = new XMLHttpRequest;
            a.open("POST", tbrForm.reviewUrl), a.onreadystatechange = function() {
                if (4 === a.readyState && 200 === a.status) {
                    const r = JSON.parse(a.responseText);
                    "success" === r.msg && "review" === c ? (t.getElementsByClassName("c-loader")[0].style.display = "none", t.getElementById("tbProductReviews-reviewForm").style.display = "none", t.getElementById("targetbay_review_success").style.display = "block", t.getElementById("targetbay_question_success").style.display = "none", t.getElementById("targetbay_review_success").scrollIntoView(), e.setTimeout((function() {
                        t.getElementById("targetbay_review_success").style.display = "none", t.getElementById("tbProductReviews").scrollIntoView()
                    }), 3e3)) : "success" === r.msg && "qa" === c ? (t.getElementsByClassName("c-loader")[1].style.display = "none", t.getElementById("tbProductReviews-questionForm").style.display = "none", t.getElementById("targetbay_review_success").style.display = "none", t.getElementById("targetbay_question_success").style.display = "block", t.getElementById("targetbay_question_success").scrollIntoView(), e.setTimeout((function() {
                        t.getElementById("targetbay_question_success").style.display = "none", t.getElementById("tbProductReviews").scrollIntoView()
                    }), 3e3)) : "error" === r.msg && (t.getElementsByClassName("c-loader")[0].style.display = "none", t.getElementById("tbProductReviews-reviewForm").style.display = "block", t.getElementById("targetbay_review_error").style.display = "block", t.getElementById("targetbay_question_success").style.display = "none", t.getElementById("targetbay_review_error").innerHTML = r.content, t.getElementById("targetbay_review_error").scrollIntoView(), e.setTimeout((function() {
                        t.getElementById("targetbay_review_error").style.display = "block", t.getElementById("tbProductReviews").scrollIntoView()
                    }), 3e3))
                }
            }, a.send(o)
        }
    }, tbrForm.tbTabClick = function(a, n, s) {
        (() => {
            if (("v2" === r.apiVersion || r.platform !== o && "mg2" === r.platform) && (b("tab-label-tracking-product-review", "tracking-product-review", "data item title active", "block"), b("tab-label-product.info.description", "product.info.description", "data item title", "none"), b("tab-label-product.info.how.to.use", "product.info.how.to.use", "data item title", "none"), b("tab-label-product.info.shipping.returns", "product.info.shipping.returns", "data item title", "none"), b("tab-label-product.info.review.form", "product.info.review.form", "data item title allow active", "block"), b("tab-label-description", "description", "data item title", "none"), b("tab-label-product.info.features.tab", "product.info.features.tab", "data item title", "none"), b("tab-label-product.info.specifications.tab", "product.info.specifications.tab", "data item title", "none"), b("tab-label-attachment.tab.new", "attachment.tab.new", "data item title", "none"), b("tab-label-product.info.prop65.tab", "product.info.prop65.tab", "data item title", "none")), r.platform !== o && "sf" === r.platform) {
                const e = tbrForm ? .tbProductId || r ? .productId,
                    o = t.getElementById(`product-${e}-reviews-desktop`);
                o && o.click()
            }
        })(), (() => {
            if (s && !_tbC.isMobile()) {
                const t = e.location.href;
                let r = 200;
                t.includes("jafgifts") && (r = 300);
                const o = t.includes("thefurnaceoutlet") ? 0 : e.scrollY;
                o && e.scroll(0, o - r)
            }
        })();
        const l = "tbReviewSection" === a ? "review" : "tbQuestionSection" === a ? "qa" : "";
        tbwTrack.reviewUserTrack(l), (() => {
            if ("tbQuestionSection" === a) {
                if (3 !== i ? tbrForm.commonThemeTabQuestionSection(n) : tbrForm.themeThreeTabQuestionSection(n), 3 !== i) {
                    const e = t.getElementById("tb-sort-qa"),
                        r = t.getElementById("tb-sort-reviews"),
                        o = t.getElementById("tb-sort-for");
                    e && (e.style.display = "block", o.value = "tb_qa"), r && (r.style.display = "none")
                }
            } else if ("tbReviewSection" === a && (3 !== i ? tbrForm.commonThemeTabReviewsSection(n) : tbrForm.themeThreeTabReviewsSection(n), 3 !== i)) {
                const e = t.getElementById("tb-sort-qa"),
                    r = t.getElementById("tb-sort-reviews");
                r && (r.style.display = "block"), e && (e.style.display = "none")
            }
        })()
    }, tbrForm.tbKeyUp = function(e, t, r, o) {
        13 !== e.keyCode || "tbQuestionSection" !== t && "tbReviewSection" !== t ? 13 === e.keyCode && "qa" === t ? tbrForm.tbReviewShow(t, r, o) : 13 === e.keyCode && tbrForm.tbCommentToggle(t) : tbrForm.tbTabClick(t, r, o)
    }, tbrForm.tbCommentToggle = function(e) {
        const r = t.getElementById(`comment-toggl-list-${e}`);
        "block" === r.style.display || "" === r.style.display ? r.style.display = "none" : r.style.display = "block"
    }, tbrForm.tbReviewShow = function(i, a, n) {
        if (_tbC.elEx("tb-pr-captchaval")) {
            if (1 == t.getElementById("tb-pr-captchaval").value && "review" == i) {
                t.getElementById("tb-pr-ansval").value = "";
                var s = Math.floor(10 * Math.random() + 1);
                t.getElementById("tb-pr-numberone").value = s;
                var l = Math.floor(10 * Math.random() + 1);
                t.getElementById("tb-pr-numbertwo").value = l
            }
        }
        if (_tbC.elEx("tb-qa-captchaval")) {
            if (1 == t.getElementById("tb-qa-captchaval").value && "qa" == i) {
                t.getElementById("tb-qa-ansval").value = "", s = Math.floor(10 * Math.random() + 1);
                t.getElementById("tb-qa-numberone").value = s;
                l = Math.floor(10 * Math.random() + 1);
                t.getElementById("tb-qa-numbertwo").value = l
            }
        }("v2" === r.apiVersion || r.platform !== o && "mg2" === r.platform) && (b("tab-label-tracking-product-review", "tracking-product-review", "data item title active", "block"), b("tab-label-product.info.description", "product.info.description", "data item title", "none"), b("tab-label-product.info.how.to.use", "product.info.how.to.use", "data item title", "none"), b("tab-label-product.info.shipping.returns", "product.info.shipping.returns", "data item title", "none"), b("tab-label-product.info.review.form", "product.info.review.form", "data item title allow active", "block"), b("tab-label-description", "description", "data item title", "none"), b("tab-label-product.info.features.tab", "product.info.features.tab", "data item title", "none"), b("tab-label-product.info.specifications.tab", "product.info.specifications.tab", "data item title", "none"), b("tab-label-attachment.tab.new", "attachment.tab.new", "data item title", "none"), b("tab-label-product.info.prop65.tab", "product.info.prop65.tab", "data item title", "none"));
        if (e.location.href.includes("htmia")) {
            function d(e, r, o) {
                const i = t.getElementById(e);
                i && (i.classList.remove("active"), t.getElementById(e.replace("_tab", "")).style.display = o)
            }
            d("Description_tab", "tab", "none"), d("Specifications_tab", "tab", "none"), d("Warranty_tab", "tab", "none");
            const e = t.getElementById("Reviews_tab");
            e && (e.className = "DIV" === e.tagName ? "tab mob-custom active" : "tablinks active", t.getElementById("Reviews").style.display = "block");
            const r = t.getElementsByClassName("Cusomize-buy");
            r.length > 0 && (Array.from(r).forEach((e => {
                e.className = "tablinks Cusomize-buy"
            })), t.getElementById("Cusomize-buy").style.display = "none")
        }

        function d(e, r, o = "", i = "active") {
            const a = t.getElementById(e);
            a && (o && a.classList.add(o), i && a.classList.remove(i), t.getElementById(e.replace("tab-title-", "tab-")).style.display = r)
        }

        function c(e, r) {
            const o = t.getElementsByClassName("c-loader")[e];
            o && (o.style.display = r ? "block" : "none")
        }

        function m(e) {
            const r = t.getElementsByClassName("tb_tablinks");
            for (let e = 0; e < r.length; e++) r[e].className = "tb_tablinks";
            r[e] && r[e].classList.add("active")
        }
        Array.from(t.getElementsByClassName("targetbayProductReviewsError")).forEach((e => {
            e.style.display = "none"
        }));
        const u = "review" === i;
        if (c(u ? 0 : 1, !0), e.setTimeout((() => c(u ? 0 : 1, !1)), 1e3), function(e) {
                const r = t.getElementById("tbProductReviews-reviewForm"),
                    o = t.getElementById("tbProductReviews-questionForm"),
                    i = t.getElementById("tbReviewSection"),
                    a = t.getElementById("tbQuestionSection"),
                    n = t.getElementById("targetbayTemplateType");
                e ? (r.className = "tbProductReviews-tbReviewForm", r.style.display = "block", o.style.display = "none", i.style.display = "block", a.style.display = "none", n.value = "review", m(0), tbrForm.tbTabClick("tbReviewSection", "noscroll", 0)) : (o.className = "tbProductReviews-tbReviewForm", r.style.display = "none", o.style.display = "block", i.style.display = "none", a.style.display = "block", n.value = "qa", m(1), tbrForm.tbTabClick("tbQuestionSection", "noscroll", 0))
            }(u), "scroll" === a) {
            if ("review" === i) {
                const e = t.getElementById("tbProductReviews-reviewForm"),
                    r = t.getElementById("targetbayReviewUsername");
                e && (e.scrollIntoView(), r.focus())
            } else {
                const e = t.getElementById("tbProductReviews-questionForm"),
                    r = t.getElementById("targetbayQuestionUsername");
                e && (e.scrollIntoView(), r.focus())
            }
            if (n && !_tbC.isMobile()) {
                const t = 200,
                    r = e.scrollY;
                r && t && e.scroll(0, r - t)
            }
        }
    }, tbrForm.tbCloseForm = function(e) {
        const r = t.getElementById({
                review: "tbProductReviews-reviewForm",
                qa: "tbProductReviews-questionForm"
            }[e]),
            o = t.getElementById({
                review: "targetbay_pr_captcha_error",
                qa: "targetbay_qa_captcha_error"
            }[e]);
        r && (r.style.display = "none"), o && (o.style.display = "none"), t.getElementById("tbProductReviews").scrollIntoView()
    }, tbrForm.tbQaAnswersToggle = function(e) {
        const r = t.getElementById(`qa-answers-toggl-list-${e}`);
        "block" === r.style.display || "" === r.style.display ? r.style.display = "none" : r.style.display = "block"
    }, tbrForm.tbWriteReview = function() {
        t.getElementById("targetbay_reviews").scrollIntoView(!1)
    }, tbrForm.insertAfter = function(e, r) {
        const o = r.nextSibling,
            i = r.parentNode,
            a = t.createElement("div");
        a.innerHTML = e;
        const n = a.firstChild;
        return o ? i.insertBefore(n, o) : i.appendChild(n)
    }, tbrForm.voteReview = function(e, r) {
        const o = `&index_name=${tbrForm.tbkey}&review_id=${r}&vote=${e}&user_id=${tbrForm.tbUserId}`;
        _tbC.fetchData(tbrForm.reviewVoteUrl + o, {}, "", "GET").then((e => {
            const {
                yes_count: o,
                no_count: i
            } = e;
            ! function(e, r, o) {
                const i = t.getElementsByClassName(`tb-product-review-vote-${e}`),
                    a = 0 === r ? "none" : "block";
                Array.from(i).forEach((e => {
                    e.style.display = a
                }));
                [`targetbay-review-yes-count-${e}`, ...Array.from(t.getElementsByClassName(`targetbay-product-review-yes-count-${e}`)).map((e => e.id)), ...Array.from(t.getElementsByClassName(`targetbay-popup-review-yes-count-${e}`)).map((e => e.id))].forEach((e => {
                    const i = t.getElementById(e);
                    i && (i.innerHTML = `${r} ${o} found this helpful`)
                }))
            }(r, o, o > 1 ? "people" : "person"),
            function(e, r, o) {
                const i = t.getElementById(`tb-review-yes-count-${e}`),
                    a = t.getElementById(`tb-review-all-count-${e}`);
                if (i && a) {
                    const e = r + o;
                    i.innerHTML = r, a.innerHTML = e
                }
            }(r, o, i), tbwTrack.reviewUserTrack("review")
        })).catch((e => {}))
    }, tbrForm.voteQA = function(e, o, i) {
        const a = `&index_name=${r.apiKey}&qa_id=${o}&vote=${e}&qa_index=${i}&user_id=${tbrForm.tbUserId}`,
            n = new XMLHttpRequest;
        n.open("GET", tbrForm.qaVoteUrl + a), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n.onreadystatechange = function() {
            if (4 === n.readyState && 200 === n.status) {
                const e = JSON.parse(n.responseText);
                let r = "person";
                e.yes_count > 1 && (r = "people");
                const a = t.getElementsByClassName(`tb-product-qa-vote-${i}-${o}`).length;
                let s = "block";
                if (0 == e.yes_count && (s = "none"), a > 0)
                    for (let e = 0; e < a; e++) t.getElementsByClassName(`tb-product-qa-vote-${i}-${o}`)[e].style.display = s;
                t.getElementById(`targetbay-question-yes-count-${i}-${o}`).innerHTML = `${e.yes_count} ${r} found this helpful`, t.getElementById(`targetbay-question-no-count-${i}-${o}`).innerHTML = e.no_count, tbwTrack.reviewUserTrack("qa")
            }
        }, n.send()
    }, tbrForm.addImg = function(e) {
        const r = t.createElement("img");
        r.setAttribute("src", e.target.result), r.setAttribute("title", "Client uploaded image"), r.setAttribute("class", "tbImageResponsive");
        const o = t.createElement("div");
        o.setAttribute("class", "tbImageuploadsec"), o.appendChild(r), t.getElementsByClassName("tbSiteReviews-clientUploadImage")[0].appendChild(o)
    }, tbrForm.showReviewImagePopup = function(r, o) {
        const i = t.getElementById(`user-image-${r}-${o}`),
            a = t.getElementById(`tb-review-popup-admincomment-button-${r}-${o}`),
            n = t.getElementById(`tb-more-comments-${r}-${o}`);
        i && (i.style.display = "block"), a && (a.style.display = "block", n && (n.style.display = "none")), t.addEventListener("keydown", (function r(o) {
            27 === (o = o || e.event).keyCode && (i && (i.style.display = "none"), t.removeEventListener("keydown", r))
        }))
    }, tbrForm.closeReviewImagePopup = function(e, r) {
        const o = t.getElementById(`user-image-${e}-${r}`),
            i = t.getElementById(`tb-review-popup-admincomment-button-${e}-${r}`),
            a = t.getElementById(`tb-more-comments-${e}-${r}`);
        o && (o.style.display = "none"), i && (i.style.display = "block", a && (a.style.display = "none"))
    }, tbrForm.showComments = function(e, r) {
        const o = t.getElementById(`tb-review-popup-admincomment-button-${e}-${r}`),
            i = t.getElementById(`tb-more-comments-${e}-${r}`);
        o && i && (i.style.display = "block", o.style.display = "none")
    }, tbrForm.clearErrorDisplay = function() {
        const e = ["targetbay_review_name_error", "targetbay_review_email_error", "targetbay_rating_error", "targetbay_review_email_invalid", "targetbay_review_name_invalid", "targetbay_review_title_error", "targetbay_review_error"];
        let r = _tbC.getCookie("user_loggedin");
        _tbC.getCookie("tb_fetch_points") || "" === r && (r = _tbC.getCookieDecode("tb_fetch_points", "_ulogin")), "" === r && e.forEach((e => {
            const r = t.getElementById(e);
            r && (r.style.display = "none")
        }))
    }, tbrForm.PopUpShow = function(e) {
        tbwTrack.reviewUserTrack("review");
        const r = t.getElementById(`TbReviewSection${e}`);
        r.style.display = "block", r.className += " inn", t.getElementById("hidden_popup_check").value = "popup_visible"
    }, tbrForm.PopUpClose = function(e) {
        const r = t.getElementById(`TbReviewSection${e}`);
        r.classList.remove("inn"), setTimeout((function() {
            r.style.display = "none"
        }), 500), t.getElementById("hidden_popup_check").value = "popup_invisible", tbrForm.displayNextReview()
    }, tbrForm.imgClose = function(e) {
        t.getElementById(`showTBReviewPopup${e}`).classList.add("tb-rev-hidden"), setTimeout((function() {
            t.getElementById(`showTBReviewPopup${e}`).style.display = "none"
        }), 1e3)
    }, tbrForm.initiateReviewPopupWidget = function(e, t, r) {
        const o = tbrForm.getCurrentPage(),
            i = e.settings["page-type"];

        function a(o, i) {
            e.currentPageCookieReviewId = `${o}_${i}_current_review_${tbrForm.rpTitle}`, e.cookieTotalReviewsCountName = `${o}_${i}_total_reviews_count_${tbrForm.rpTitle}`, tbrForm.loadReviewPopupWidget(e, t, r)
        }
        e.product_id && ("product_pages" === o || i.includes("product_pages")) ? a("tb_product", e.product_id) : e.category_id && ("category_pages" === o || i.includes("category_pages")) ? a("tb_category", e.category_id) : "home_page" === o && i.includes("home_page") ? a("tb_home", "") : "cart_page" === o && i.includes("cart_page") && a("tb_cart", ""), _tbC.setCookie(e.currentPageCookieReviewId, parseInt(t) + 1)
    }, tbrForm.getCurrentPage = function() {
        let e = "";
        return tbConfig.productId !== o && "" !== tbConfig.productId && (e = "product_pages"), tbConfig.categoryId !== o && "" !== tbConfig.categoryId && (e = "category_pages"), "" === e && (e = tbrForm.getCurrentPageFromUrl()), e
    }, tbrForm.getCurrentPageFromUrl = function() {
        const t = e.location.pathname;
        let r = "home_page";
        return "/" === t && (r = "home_page"), -1 === t.indexOf("category") && -1 === t.indexOf("collections") || (r = "category_pages"), -1 !== t.indexOf("products") && (r = "product_pages"), -1 === t.indexOf("cart") && -1 === t.indexOf("checkout") || (r = "cart_page"), r
    }, tbrForm.loadReviewPopupWidget = function(r, i, a) {
        const n = r.total_reviews_count,
            s = r.limit_total_reviews_count;
        r.rpFrom = i;
        const l = parseInt(i) + 1;
        let d = 1e3 * r.settings["first-display"];
        const b = 1e3 * r.settings["display-period"],
            c = 1e3 * r.settings["time-gap"];
        i >= 25 && (d = c);
        const m = r.settings["popup-position"];
        _tbC.setCookie(r.currentPageCookieReviewId, Number(l));
        var u = e.setInterval((function() {
            tbrForm.viewImage(), clearInterval(u), tbrForm.displayImageInterval()
        }), d);
        tbrForm.displayImageInterval = function() {
            const i = _tbC.getCookie(r.currentPageCookieReviewId);
            var a = e.setInterval((function() {
                if (tbrForm.hideImage(i), clearInterval(a), _tbC.setCookie(r.currentPageCookieReviewId, i), "popup_invisible" === t.getElementById("hidden_popup_check").value) {
                    if (parseInt(i) >= parseInt(n)) return tbrForm.reviewWidgetPopupData(0, 25, "ajax_call"), !0;
                    if (parseInt(n) <= 25) {
                        if (parseInt(i) == parseInt(s)) return tbrForm.reviewWidgetPopupData(0, 25, "ajax_call"), !0
                    } else {
                        const t = parseInt(r.rpFrom) + parseInt(s);
                        if (parseInt(i) == parseInt(t)) {
                            let t = 0;
                            typeof r.total_reviews_count !== o && r.total_reviews_count > 0 && (t = r.total_reviews_count);
                            const i = parseInt(r.rpFrom) + 25;
                            l = i >= t ? 0 : i;
                            var e = 25;
                            return _tbC.setCookie(r.currentPageCookieReviewId, l + 1), tbrForm.reviewWidgetPopupData(l, e, "ajax_call"), !0
                        }
                    }
                    if (parseInt(i) % 25 == 0) {
                        var l = parseInt(i);
                        e = 25;
                        return _tbC.setCookie(r.currentPageCookieReviewId, l + 1), tbrForm.reviewWidgetPopupData(l, e, "ajax_call"), !0
                    }
                    _tbC.setCookie(r.currentPageCookieReviewId, Number(i) + 1), tbrForm.displayNextReview()
                } else _tbC.setCookie(r.currentPageCookieReviewId, Number(i) + 1)
            }), b)
        }, tbrForm.displayNextReview = function() {
            var t = e.setInterval((function() {
                clearInterval(t), tbrForm.viewImage(), tbrForm.displayImageInterval()
            }), c)
        }, tbrForm.viewImage = function() {
            const e = _tbC.getCookie(r.currentPageCookieReviewId),
                o = t.getElementById(`showTBReviewPopup${e}`);
            o ? (o.classList.remove("tb-rev-hidden"), o.className = `tb-rev-pop-wid ${m}`) : _tbC.setCookie(r.currentPageCookieReviewId, Number(e) + 1)
        }, tbrForm.hideImage = function(e) {
            const r = t.getElementById(`showTBReviewPopup${e}`);
            r && (r.className = `tb-rev-pop-wid ${m} tb-rev-hidden`)
        }
    }, tbrForm.tbReviewShowMoreData = function(e, r) {
        tbrForm.type = r;
        const o = "qa" === tbrForm.type,
            i = o ? "loadMoreQaButton" : "loadMoreReviewButton",
            a = o ? "showMoreQaLoader" : "showMoreReviewLoader",
            n = o ? ".tb-qa-list" : ".tb-review-list",
            s = o ? ".tb-qa-list-item" : ".tb-review-list-item",
            l = o ? "#tbQAShowMore" : "#tbReviewsShowMore",
            d = o ? "goToTopQa" : "goToTopReview",
            b = o ? "qapage" : "reviewpage",
            c = (tbrForm[b], t.getElementById(i)),
            m = t.getElementById(a),
            u = o ? "tbQaReviewsShowMoreButton" : "tbProductReviewsShowMoreButton";
        c.style.opacity = 0, m.style.display = "block", t.getElementById(u).style.display = "none", t.getElementById(u).setAttribute("data-hidden", "true"), tbrForm[b] = e;
        const g = _tbC.valEx("tb-sort-reviews-values") ? t.getElementById("tb-sort-reviews-values").value : "recent",
            p = _tbC.valEx("tb-sort-qa") ? t.getElementById("tb-sort-qa").value : "recent",
            y = _tbC.valEx("review_search_text") ? t.getElementById("review_search_text").value : "",
            v = _tbC.valEx("qa_search_text") ? t.getElementById("qa_search_text").value : "",
            _ = `${tbrForm.commonParams}&qaDisplay=${tbrForm.qaDisplay}&reviewpage=${tbrForm.reviewpage}&qapage=${tbrForm.qapage}&review_sort_by=${g}&qa_sort_by=${p}&review_search_text=${y}&qa_search_text=${v}&type=${tbrForm.type}`;
        _tbC.fetchData(`${tbrForm.reviewContentUrl}${_}`, {}, "", "GET").then((e => {
            const r = e.content,
                o = t.querySelector(n),
                i = t.createElement("div");
            if (null === o) {
                const e = t.getElementById("review-grid");
                i.innerHTML = r;
                const o = i.querySelectorAll(".tgb-grid-item "),
                    a = i.querySelectorAll(".tb-popup-comment-modal-container");
                e.append(...o), tbrForm.loadMasonry1();
                t.querySelectorAll(".tgb-grid-item").forEach(((e, t) => {
                    setTimeout((() => {
                        e.classList.add("show");
                        const r = a[t];
                        r && e.insertAdjacentElement("afterend", r)
                    }), 200 * t)
                }))
            } else {
                i.innerHTML = r;
                const e = i.querySelectorAll(s);
                o.append(...e)
            }
            const a = i.querySelectorAll(l);
            if (a.length > 0) {
                parseInt(a[0].value, 10) > 0 ? (c.style.opacity = 1, c.style.pointerEvents = "auto", c.setAttribute("onClick", `tbrForm.tbReviewShowMoreData(${tbrForm[b]+1}, '${tbrForm.type}')`)) : (c.style.opacity = 0, c.style.pointerEvents = "none")
            }
            m.style.display = "none";
            const u = t.getElementById(d);
            u && (u.style.opacity = 1), tbwTrack.reviewUserTrack("review")
        })).catch((e => {}))
    }, tbrForm.tbGoTopReview = function() {
        t.getElementsByClassName("tbProductReviews-tbTabNavBar")[0].scrollIntoView()
    }, tbrForm.showProductComments = function(e) {
        const r = t.getElementById(`tb-product-comment-popup-button-${e}`),
            o = t.getElementById(`tb-more-product-review-popup-comments-${e}`);
        r && (o && (o.style.display = "block"), r.style.display = "none")
    }, tbrForm.tbReviewRatingBar = function(e) {
        t.getElementById("average-review-rating-bar-toggle").classList.toggle("tbSiteReviewShow"), e.stopPropagation()
    }, t.addEventListener("click", (function(e) {
        const r = t.getElementById("average-review-rating-bar-toggle");
        null !== r && r !== o && r.classList.add("tbSiteReviewShow")
    })), tbrForm.getSearchTheme3Data = function(e) {
        if ("product" === e) {
            if ("" === t.getElementById("review_search_text").value) return "";
            tbrForm.getProductFilterData(e)
        }
        if ("qa" === e) {
            if ("" === t.getElementById("qa_search_text").value) return "";
            tbrForm.getProductFilterData(e)
        }
    }, tbrForm.clearQaTheme3Search = function() {
        "" !== t.getElementById("qa_search_text").value ? (tbrForm.clearQaSearchData(), tbrForm.getProductFilterData("qa")) : tbrForm.clearQaSearchData()
    }, tbrForm.clearReviewTheme3Search = function() {
        "" !== t.getElementById("review_search_text").value ? (tbrForm.clearReviewSearchData(), tbrForm.getProductFilterData("product")) : tbrForm.clearReviewSearchData()
    }, tbrForm.tbSortQaClick = function(e, r) {
        t.getElementById("tb-sort-qa").value = e;
        const o = t.getElementById("tb-sort-qa-value");
        o && (o.value = e), tbrForm.getProductFilterData(r), t.querySelectorAll(".tgb-product-qa-sort").forEach((e => e.classList.remove("targetbay-reviews-product-detail-page-filter-active")));
        const i = {
            oldest: "tbQaOld",
            newest: "tbQaNew"
        }[e] || "tbQaNew";
        t.getElementById(i).classList.add("targetbay-reviews-product-detail-page-filter-active")
    }, tbrForm.tbSortReviewClick = function(e, r) {
        t.getElementById("tb-sort-reviews-values").value = e, tbrForm.getProductFilterData(r), t.querySelectorAll(".tgb-product-review-sort").forEach((e => e.classList.remove("targetbay-reviews-product-detail-page-filter-active")));
        const o = {
            oldest: "tbReviewOld",
            highest_rating: "tbReviewHigh",
            lowest_rating: "tbReviewLow",
            picture_reviews: "tbReviewPic",
            video_reviews: "tbReviewVid",
            verified_buyer: "tbReviewVerify",
            most_helpful: "tbReviewHelpful"
        }[e] || "tbReviewNew";
        t.getElementById(o).classList.add("targetbay-reviews-product-detail-page-filter-active")
    }, tbrForm.getProductFilterData = function(e) {
        tbrForm.type = e;
        const r = "qa" === tbrForm.type,
            o = r ? "tb-qa-pre-loader" : "tb-pro-pre-loader",
            i = r ? ".tb-qa-list" : ".tb-review-list",
            a = r ? "loadMoreQaButton" : "loadMoreReviewButton",
            n = r ? ".tbQa-show-more-option" : ".tbReviews-show-more-option",
            s = r ? ".tb-show-qa-enable-option" : ".tb-show-product-review-enable-option",
            l = r ? "goToTopQa" : "goToTopReview",
            d = r ? "tbQaReviewsShowMoreButton" : "tbProductReviewsShowMoreButton";
        t.getElementsByClassName(o)[0].style.display = "block", tbrForm.reviewpage = 1, tbrForm.qapage = 1;
        const b = _tbC.valEx("tb-sort-reviews-values") ? t.getElementById("tb-sort-reviews-values").value : "recent",
            c = _tbC.valEx("tb-sort-qa-value") ? t.getElementById("tb-sort-qa-value").value : _tbC.valEx("tb-sort-qa") ? t.getElementById("tb-sort-qa").value : "recent",
            m = _tbC.valEx("review_search_text") ? t.getElementById("review_search_text").value : "",
            u = _tbC.valEx("qa_search_text") ? t.getElementById("qa_search_text").value : "",
            g = `${tbrForm.commonParams}&qaDisplay=${tbrForm.qaDisplay}&reviewpage=${tbrForm.reviewpage}&qapage=${tbrForm.qapage}&review_sort_by=${b}&qa_sort_by=${c}&review_search_text=${m}&qa_search_text=${u}&type=${tbrForm.type}`;
        _tbC.fetchData(tbrForm.reviewContentUrl + g, {}, "", "GET").then((e => {
            const b = e.content,
                c = t.querySelector(i),
                m = t.createElement("div");
            if (null === c) {
                const e = t.getElementById("review-grid");
                e.innerHTML = "", m.innerHTML = b;
                const r = m.querySelectorAll(".tgb-grid-item "),
                    o = m.querySelectorAll(".tb-popup-comment-modal-container");
                e.append(...r), tbrForm.loadMasonry1();
                t.querySelectorAll(".tgb-grid-item").forEach(((e, t) => {
                    setTimeout((() => {
                        e.classList.add("show");
                        const r = o[t];
                        r && e.insertAdjacentElement("afterend", r)
                    }), 200 * t)
                }))
            } else {
                c.innerHTML = "", m.innerHTML = b;
                const e = m.querySelectorAll(r ? ".tb-qa-list-item" : ".tb-review-list-item");
                c.append(...e)
            }
            const u = m.querySelectorAll(n);
            if (u && u.length > 0) {
                const e = t.getElementById(a);
                "enable" === u[0].innerHTML ? (e.style.opacity = 1, e.style.pointerEvents = "auto", e.setAttribute("onClick", `tbrForm.tbReviewShowMoreData(${tbrForm[r?"qapage":"reviewpage"]+1}, '${tbrForm.type}')`)) : (e.style.opacity = 0, e.style.pointerEvents = "none")
            } else {
                const e = t.getElementById(d);
                if ("true" === e.getAttribute("data-hidden")) {
                    e.style.display = "block";
                    const t = m.querySelector(s);
                    t && (e.innerHTML = t.innerHTML), e.removeAttribute("data-hidden")
                }
            }
            const g = t.querySelector(s),
                p = t.getElementsByClassName(s.slice(1))[0];
            if (p && p.remove(), g)
                if (null !== c) tbsForm.insertAfter(c, g);
                else {
                    const e = t.getElementById("review-grid");
                    tbsForm.insertAfter(e, g)
                }
            const y = t.getElementById(l);
            y && (y.style.opacity = 0);
            const v = t.getElementsByClassName("tbTabMenu")[0];
            v && v.remove();
            const _ = m.querySelectorAll(".tbTabMenu");
            t.querySelector(".tb-active-review-menu").append(..._), t.getElementsByClassName(o)[0].style.display = "none", tbwTrack.reviewUserTrack(tbrForm.type);
            const w = t.getElementsByClassName("tb_tablinks");
            w.length > 1 && (w[0].classList.toggle("active", !r), w[1].classList.toggle("active", r))
        })).catch((e => {}))
    }, tbrForm.tbQaData = function() {
        let e = !1,
            r = _tbC.getCookie("user_loggedin");
        _tbC.getCookie("tb_fetch_points") && "" === r && (r = _tbC.getCookieDecode("tb_fetch_points", "_ulogin"));
        const o = t.getElementById("targetbayQuestion"),
            i = t.getElementById("targetbay_question_error"),
            a = t.getElementById("qaContentPopup"),
            n = t.getElementById("qaUserDetailsPopup"),
            s = t.getElementById("qaReviewerName");
        tbrForm.tbQuestions = o.value, tbrForm.tbQuestions.trim() ? i.style.display = "none" : (i.style.display = "block", e = !0), e || (a.classList.remove("tbay_write_review_modal_show"), "" === r ? (n.classList.add("tbay_write_review_modal_show"), tbrForm.tbDisplayUserName = 1, s.addEventListener("change", (function(e) {
            tbrForm.tbDisplayUserName = e.target.value
        }))) : tbrForm.saveQaData())
    }, tbrForm.getQaUserData = function() {
        const e = (e, t, r, o) => "" === e ? (_tbC.hdEl(o), _tbC.shEl(r), !1) : t(e) ? (_tbC.hdEl(r), _tbC.hdEl(o), !0) : (_tbC.hdEl(r), _tbC.shEl(o), !1);
        tbrForm.tbUsername = _tbC.getVal("targetbayReviewUserFirstname"), tbrForm.tbUserLastname = _tbC.getVal("targetbayReviewUserLastname"), tbrForm.tbEmail = _tbC.getVal("targetbayReviewEmail");
        const r = e(tbrForm.tbUsername, tbrForm.validateName, "targetbay_review_first_name_error", "targetbay_review_first_name_invalid"),
            o = e(tbrForm.tbEmail, tbrForm.validateEmail, "targetbay_review_email_error", "targetbay_review_email_invalid");
        r && o && (t.getElementById("qaUserDetailsPopup").classList.remove("tbay_write_review_modal_show"), tbrForm.saveQaData())
    }, tbrForm.saveQaData = function() {
        t.getElementById("tbPreviewPopupLoader").classList.add("tbay_write_review_modal_show");
        const e = {
            index_name: tbrForm.tbkey,
            product_id: tbrForm.tbProductId,
            product_name: tbrForm.tbProductName,
            user_id: tbrForm.tbUserId,
            user_name: tbrForm.tbUsername,
            last_name: tbrForm.tbUserLastname,
            display_user_name: tbrForm.tbDisplayUserName,
            user_email: tbrForm.tbEmail,
            user_avatar: tbrForm.tbAvatar,
            review_rating: "",
            review_title: "",
            review: tbrForm.tbQuestions,
            template_type: "qa",
            product_image_url: tbrForm.tbProductImageUrl,
            product_page_url: tbrForm.tbProductUrl,
            user_type: r.userName,
            title_validator_review: undefined,
            shop: _tbC.shop
        };
        _tbC.fetchData(tbrForm.reviewUrl, e, "", "POST").then((e => {
            const r = e.content;
            t.getElementById("tb-show-questions").innerHTML += r, t.getElementById("tbPreviewPopupLoader").classList.remove("tbay_write_review_modal_show"), t.getElementById("reviewThankuPopup").classList.add("tbay_write_review_modal_show")
        })).catch((e => {}))
    }, tbrForm.tbQaVoting = function(e, r, o) {
        const i = `&index_name=${tbrForm.tbkey}&qa_id=${r}&vote=${e}&qa_index=${o}&user_id=${tbrForm.tbUserId}`;
        _tbC.fetchData(tbrForm.qaVoteUrl + i, {}, "", "GET").then((e => {
            t.getElementsByClassName(`targetbay-question-yes-count-${o}-${r}`)[0].innerHTML = `(${e.yes_count})`, t.getElementsByClassName(`targetbay-question-no-count-${o}-${r}`)[0].innerHTML = `(${e.no_count})`, tbwTrack.reviewUserTrack("qa")
        })).catch((e => {}))
    }, tbrForm.showProductReviewCommentPopup = function(e, o) {
        if ("sf" === r.platform) {
            const e = t.getElementById("PageContainer");
            e && e.classList.add("tgb_shopify_change")
        }
        setTimeout((function() {
            const r = `popupProductCommentModalContainer-${e}`,
                i = t.getElementById(r);
            i && (tbsForm.PopupEscToClose = r, i.classList.add("tbay_review_comment_modal_show"), tbrForm.slideIndex = o, tbrForm.currentSlide(tbrForm.slideIndex, e))
        }), 450)
    }, tbrForm.closeProductReviewCommentPopup = function(e, o = "grid") {
        if ("sf" === r.platform) {
            const e = t.getElementById("PageContainer");
            e && e.classList.remove("tgb_shopify_change")
        }
        const i = t.getElementById(e);
        i && i.classList.remove("tbay_review_comment_modal_show"), tbsForm.pausePlayer(o)
    }, tbrForm.plusSlides = function(e, t, r) {
        tbsForm.pausePlayer(r), tbrForm.showSlides(tbrForm.slideIndex += e, t)
    }, tbrForm.showSlides = function(e, r) {
        let i;
        if (t.getElementsByClassName(`tbay-muti-image-product-slide-${r}`).length > 0) {
            const a = t.getElementsByClassName(`tbay-muti-image-product-slide-${r}`),
                n = t.getElementsByClassName(`tbay-image-product-slide-next-${r}`)[0],
                s = t.getElementsByClassName(`tbay-image-product-slide-prev-${r}`)[0];
            for (1 == e ? (null !== n && n !== o && (n.style.visibility = "visible"), null !== s && s !== o && (s.style.visibility = "hidden")) : s.style.visibility = "visible", a.length == e ? null !== n && n !== o && (n.style.visibility = "hidden") : null !== n && n !== o && (n.style.visibility = "visible"), e > a.length && (tbrForm.slideIndex = 1), e < 1 && (tbrForm.slideIndex = a.length), i = 0; i < a.length; i++) a[i].style.display = "none";
            a[tbrForm.slideIndex - 1].style.display = "block"
        }
    }, tbrForm.currentSlide = function(e, t) {
        tbrForm.showSlides(tbrForm.slideIndex = e, t)
    }, tbrForm.clearReviewSearchData = function() {
        const e = t.getElementById("review_search_text"),
            r = t.getElementById("searchFilterReviewPopupOpen"),
            o = t.getElementById("searchFilterReviewPopupId");
        e && (e.value = ""), r && r.classList.remove("tgb-tab-content-target"), o && o.classList.remove("tgb-tab-content")
    }, tbrForm.clearQaSearchData = function() {
        const e = t.getElementById("qa_search_text"),
            r = t.getElementById("searchFilterQaPopupOpen"),
            o = t.getElementById("searchFilterQaPopupId");
        e && (e.value = ""), r && r.classList.remove("tgb-tab-content-target"), o && o.classList.remove("tgb-tab-content")
    }, tbrForm.showReviewSearchFilter = function() {
        const e = t.getElementById("searchFilterReviewPopupOpen"),
            r = t.getElementById("searchFilterReviewPopupId"),
            o = t.getElementById("review_search_text");
        e && e.classList.add("tgb-tab-content-target"), r && r.classList.add("tgb-tab-content"), o && o.focus(), t.removeEventListener("keydown", c), t.addEventListener("keydown", c)
    }, tbrForm.showQaSearchFilter = function() {
        const e = t.getElementById("searchFilterQaPopupOpen"),
            r = t.getElementById("searchFilterQaPopupId"),
            o = t.getElementById("qa_search_text");
        e && e.classList.add("tgb-tab-content-target"), r && r.classList.add("tgb-tab-content"), o && o.focus(), t.removeEventListener("keydown", m), t.addEventListener("keydown", m)
    }, tbrForm.themeThreeTabQuestionSection = function(e) {
        if (!_tbC.elEx("targetbay_reviews")) return;
        const r = _tbC.getVal("tb-sort-reviews-values") || _tbC.getVal("tb-sort-reviews") || "recent",
            o = _tbC.getVal("tb-sort-qa") || _tbC.getVal("tb-sort-qa-value") || "recent",
            i = (_tbC.getVal("tb-sort-for"), _tbC.getVal("tb-product-availability")),
            a = _tbC.getVal("tb-product-validuntil"),
            n = _tbC.getVal("tb-product-brand"),
            s = _tbC.getVal("tb-product-price"),
            l = _tbC.getVal("tb-product-mpn"),
            d = _tbC.getVal("tb-product-low-price"),
            b = _tbC.getVal("tb-product-high-price"),
            c = _tbC.getVal("tb-product-offer-count");
        let m = tbrForm.commonParams + `&qaDisplay=${tbrForm.qaDisplay}` + `&review_sort_by=${r}&qa_sort_by=${o}` + `&pr_availability=${i}` + `&pr_validuntil=${a}&pr_brand=${n}` + `&pr_price=${s}&pr_mpn=${l}&pinned=1`;
        d && (m += `&pr_product_low_price=${d}`), b && (m += `&pr_product_high_price=${b}`), c && (m += `&pr_product_offer_count=${c}`), m += "&type=qa", _tbC.fetchData(tbrForm.reviewContentUrl + m, {}, "", "GET").then((r => {
            if (r.content) {
                (_tbC.elEx("targetbay_reviews_header") ? t.getElementById("targetbay_reviews_header") : t.getElementById("targetbay_reviews")).innerHTML = r.content, t.getElementById("targetbay_reviews").classList.add("tbProductReviewresIe"), setTimeout((() => {
                    t.querySelectorAll(".targetbay_full").forEach((e => e.style.display = "block")), t.querySelectorAll("#tbRatingStar .custom-label, #tbRatingStar .infoprice, #tbRatingStar .infoweight").forEach((e => e.style.display = "none"))
                }), 3e3);
                !!t.documentMode && t.getElementById("targetbay_reviews").classList.remove("tbProductReviewresIe"), tbwTrack.reviewPaginate(), tbwTrack.qaPaginate(), tbwTrack.reviewVote(), tbwTrack.qaVote(), tbwTrack.sortReviews(), tbwTrack.reviewUpload(), "scroll" === e && t.getElementsByClassName("tbProductReviews-tbTabNavBar")[0].scrollIntoView(), _tbC.hdEl("tbReviewSection"), _tbC.shEl("tbQuestionSection"), t.getElementsByClassName("tb_tablinks")[0].classList.remove("active"), t.getElementsByClassName("tb_tablinks")[1] ? .classList.add("active"), _tbC.elEx("tb-sort-reviews") && (_tbC.hdEl("tb-sort-reviews"), _tbC.hdEl("tb-sort-reviews-values"), _tbC.hdEl("tb-sort-qa"), t.getElementById("tb-sort-for").value = "tb_qa"), _tbC.elEx("tbOverallRating") && _tbC.hdEl("tbOverallRating"), _tbC.elEx("tb-review-write-section") && _tbC.hdEl("tb-review-write-section"), _tbC.elEx("tb-qa-write-section") && _tbC.shEl("tb-qa-write-section")
            }
        })).catch((e => {}))
    }, tbrForm.themeThreeTabReviewsSection = function(e) {
        if (!_tbC.elEx("targetbay_reviews")) return;
        const r = _tbC.getVal("tb-sort-reviews-values") || _tbC.getVal("tb-sort-reviews") || "recent",
            o = _tbC.getVal("tb-sort-qa") || _tbC.getVal("tb-sort-qa-value") || "recent",
            i = (_tbC.getVal("tb-sort-for"), _tbC.getVal("tb-product-availability")),
            a = _tbC.getVal("tb-product-validuntil"),
            n = _tbC.getVal("tb-product-brand"),
            s = _tbC.getVal("tb-product-price"),
            l = _tbC.getVal("tb-product-mpn"),
            d = _tbC.getVal("tb-product-low-price"),
            b = _tbC.getVal("tb-product-high-price"),
            c = _tbC.getVal("tb-product-offer-count");
        let m = tbrForm.commonParams + `&qaDisplay=${tbrForm.qaDisplay}` + `&review_sort_by=${r}&qa_sort_by=${o}` + `&pr_availability=${i}` + `&pr_validuntil=${a}&pr_brand=${n}` + `&pr_price=${s}&pr_mpn=${l}&pinned=1`;
        d && (m += `&pr_product_low_price=${d}`), b && (m += `&pr_product_high_price=${b}`), c && (m += `&pr_product_offer_count=${c}`), m += "&type=reviews", _tbC.fetchData(tbrForm.reviewContentUrl + m, {}, "", "GET").then((r => {
            const o = _tbC.elEx("targetbay_reviews_header") ? "targetbay_reviews_header" : "targetbay_reviews",
                i = t.getElementById(o);
            if (i) {
                i.innerHTML = r.content, tbrForm.loadMasonry1();
                t.querySelectorAll(".tgb-grid-item").forEach(((e, t) => {
                    setTimeout((() => {
                        e.classList.add("show")
                    }), 200 * t)
                })), t.getElementById("targetbay_reviews") ? .classList.add("tbProductReviewresIe"), setTimeout((() => {
                    t.querySelectorAll(".targetbay_full").forEach((e => e.style.display = "block")), t.querySelectorAll("#tbRatingStar .custom-label, #tbRatingStar .infoprice, #tbRatingStar .infoweight").forEach((e => e.style.display = "none"))
                }), 3e3);
                !!t.documentMode && t.getElementById("targetbay_reviews") ? .classList.remove("tbProductReviewresIe")
            }["reviewPaginate", "qaPaginate", "reviewVote", "qaVote", "sortReviews", "reviewUpload"].forEach((e => tbwTrack[e] ? .())), "scroll" === e && t.getElementsByClassName("tbProductReviews-tbTabNavBar")[0] ? .scrollIntoView();
            const a = t.getElementById("tbQuestionSection"),
                n = t.getElementById("tbReviewSection");
            a && (a.style.display = "none"), n && (n.style.display = "block");
            const s = t.getElementsByClassName("tb_tablinks");
            s[0] && s[0].classList.add("active"), s[1] && s[1].classList.remove("active"), ["tb-sort-reviews", "tb-sort-reviews-values"].forEach((e => {
                const r = t.getElementById(e);
                r && (r.style.display = null)
            }));
            const l = t.getElementById("tb-sort-qa");
            l && (l.style.display = "none");
            const d = t.getElementById("tb-sort-for");
            d && (d.value = "tb_reviews");
            const b = t.getElementById("tbOverallRating"),
                c = t.getElementById("tb-review-write-section"),
                m = t.getElementById("tb-qa-write-section");
            b && (b.style.display = "inline-block"), c && (c.style.display = "block"), m && (m.style.display = "none")
        })).catch((e => {}))
    }, tbrForm.commonThemeTabQuestionSection = function(e) {
        "scroll" === e && u("tbProductReviews-tbTabNavBar"), g("tbReviewSection", "none"), g("tbQuestionSection", "block"), p(1), y(), v()
    }, tbrForm.commonThemeTabReviewsSection = function(e) {
        "scroll" === e && u("tbProductReviews-tbTabNavBar"), g("tbQuestionSection", "none"), g("tbReviewSection", "block"), p(0), y("tb_reviews"), v()
    }, (r.tbReview === o || r.tbReview.tbProductReview) && tbrForm.init()
}(window, document, tbConfig)), void 0 === tbConfig.siteReviewsLoaded && (tbConfig.siteReviewsLoaded = !0, function(e, t, r, o) {
    e.tbsForm = {}, tbsForm.tbQA = {}, tbsForm.apiData = {}, tbsForm.init = function() {
        let t;
        _tbC.getUser(), _tbC.setCookie("bv_badge_display_flag", ""), tbsForm.userLoggedIn = _tbC.userLoggedIn, tbsForm.tbUserId = _tbC.tbUserId, "" !== r.platform && r.platform !== o && _tbC.setCookie("platformLogin", r.platform), t = r.publicKey !== o && null !== r.publicKey ? r.publicKey : _tbC.b64EncodeUnicode(`_a=${r.apiToken}&_i=${r.apiKey}`), tbsForm.accessToken = t;
        e.location.pathname;
        tbsForm.siteSnippets = !0, "" !== r.productId && r.productId !== o && (tbsForm.siteSnippets = !1), tbsForm.tbClienturl = e.location.href, tbsForm.tbkey = r.apiKey, tbsForm.widgetClicked = _tbC.getCookie("widgetClicked");
        var i = _tbC.getCookie("targetbay_token");
        i !== o && null !== i && "" !== i || (i = _tbC.getCookie("utm_token")), tbsForm.widgetClickUtmToken = i, tbsForm.tokenSource = _tbC.getCookie("targetbay_utm_source"), tbsForm.tokenUtm = _tbC.getCookie("utm_medium");
        _tbC.getCookie("tb_fetch_points");
        r.userMail && r.userName && (_tbC.setCookie("tbLoginUserName", r.userName), _tbC.setCookie("tbLoginUserEmail", r.userMail), _tbC.setCookie("tbLoginUser", "1")), "1" == _tbC.getCookie("tbLoginUser") ? (tbsForm.tbUsername = _tbC.getCookie("tbLoginUserName"), tbsForm.tbEmail = _tbC.getCookie("tbLoginUserEmail")) : (tbsForm.tbUsername = r.userName || "", tbsForm.tbEmail = r.userMail || ""), tbsForm.tbAvatar = r.userAvatar || "";
        if ((e => {
                const t = e ? `?shop=${e}` : `?_t=${tbsForm.accessToken}&type=site`;
                tbsForm.siteReviewUrl = `${_tbC.webhookUrl}save-site-review${t}`, tbsForm.tbSalesTrackingUrl = `${tbEvents.webhookUrl}reviews/customer/activity?api_token=${r.apiToken}&_t=${tbsForm.accessToken}`, tbsForm.tbGuestTrackingUrl = `${tbEvents.webhookUrl}reviews/guest/activity?api_token=${r.apiToken}&_t=${tbsForm.accessToken}`, tbrForm.reviewThemeUrl = `${_tbC.webhookUrl}review/theme${t}`, tbsForm.siteReviewWidgetUrl = `${_tbC.webhookUrl}site-review-widget${t}`, tbsForm.siteReviewWidgetTheme3Url = `${_tbC.webhookUrl}site-review-widget-theme3${t}`, tbsForm.writeReviewTheme3Url = `${_tbC.webhookUrl}write-review-open-theme3${t}`, tbsForm.siteReviewVoteUrl = `${_tbC.webhookUrl}site-review-vote${t}`, tbsForm.productVoteUrl = `${_tbC.webhookUrl}review-vote${t}`, tbsForm.reviewBadgeUrl = `${_tbC.webhookUrl}review-badge${t}`, tbsForm.orderCommentWidgetUrl = `${_tbC.webhookUrl}order-comment-widget${t}`, tbsForm.reviewUrl = `${_tbC.webhookUrl}save-review${t}`, tbsForm.saveorderCommentUrl = `${_tbC.webhookUrl}save-order-comment${t}`, tbsForm.rderCommentProductUrl = `${_tbC.webhookUrl}order-comment-product-details${t}`, tbsForm.customQaWidgetUrl = `${_tbC.apiUrl}/custom-question/widget${t}`, tbsForm.customQaSaveUrl = `${_tbC.apiUrl}/custom-question/answer${t}`, tbsForm.customerSalesTrackingUrl = `${_tbC.webhookUrl}customer-sales-tracking${t}`
            })(_tbC.shop), (r.tbReview === o || r.tbReview.tbSiteReview) && (tbsForm.siteReviewpage = 1, tbsForm.productReviewpage = 1, tbsForm.siteRatings(), tbsForm.tbSalesTrackingEmail()), (r.tbReview === o || r.tbReview.tbSiteReview || r.tbReview.tbProductReview) && (r.orderId || "" !== tbsForm.orderCheckout() && tbsForm.orderCheckout() !== o) && ("sf" !== r.platform && "bc" !== r.platform && "mg2" !== r.platform && "sf" !== _tbC.getCookie("platformLogin") && "bc" !== _tbC.getCookie("platformLogin") && "mg2" !== _tbC.getCookie("platformLogin") || tbsForm.customerSalesTracking()), r.tbReview === o || r.tbReview.tbSiteReview || r.tbReview.tbProductReview)
            if (r.tbReview.tbOrderCommentsDelay !== o) {
                const {
                    tbOrderCommentsDelay: t
                } = r.tbReview, i = 1e3 * t;
                _tbC.setCookie("tbOrderCommentsDelay", i), (null !== r.orderId && "" !== r.orderId && "undefined" !== r.orderId && "null" !== r.orderId && "%%ORDER_ID%%" !== r.orderId || "" !== tbsForm.orderCheckout() && tbsForm.orderCheckout() !== o) && e.setTimeout((function() {
                    tbsForm.orderComments()
                }), i)
            } else -1 !== tbsForm.tbClienturl.indexOf("heavyglare") || -1 !== tbsForm.tbClienturl.indexOf("hpotter") || -1 !== tbsForm.tbClienturl.indexOf("grandnewflag") || -1 !== tbsForm.tbClienturl.indexOf("northwoodshumidors") ? (null !== r.orderId && "" !== r.orderId && "undefined" !== r.orderId && "null" !== r.orderId && "%%ORDER_ID%%" !== r.orderId || "" !== tbsForm.orderCheckout() && tbsForm.orderCheckout() !== o) && e.setTimeout((function() {
                tbsForm.orderComments()
            }), 2e3) : -1 !== tbsForm.tbClienturl.indexOf("impactbattery") || -1 !== tbsForm.tbClienturl.indexOf("bseid") ? (null !== r.orderId && "" !== r.orderId && "undefined" !== r.orderId && "null" !== r.orderId && "%%ORDER_ID%%" !== r.orderId || "" !== tbsForm.orderCheckout() && tbsForm.orderCheckout() !== o) && e.setTimeout((function() {
                tbsForm.orderComments()
            }), 1e3) : -1 !== tbsForm.tbClienturl.indexOf("321kiteboarding") ? (null !== r.orderId && "" !== r.orderId && "undefined" !== r.orderId && "null" !== r.orderId && "%%ORDER_ID%%" !== r.orderId || "" !== tbsForm.orderCheckout() && tbsForm.orderCheckout() !== o) && e.setTimeout((function() {
                tbsForm.orderComments()
            }), 7e3) : -1 !== tbsForm.tbClienturl.indexOf("fontanaforniusa") ? (null !== r.orderId && "" !== r.orderId && "undefined" !== r.orderId && "null" !== r.orderId && "%%ORDER_ID%%" !== r.orderId || "" !== tbsForm.orderCheckout() && tbsForm.orderCheckout() !== o) && e.setTimeout((function() {
                tbsForm.orderComments()
            }), 3e3) : -1 !== tbsForm.tbClienturl.indexOf("targetbay.mybigcommerce") || -1 !== tbsForm.tbClienturl.indexOf("foodhealing") ? (null !== r.orderId && "" !== r.orderId && "undefined" !== r.orderId && "null" !== r.orderId && "%%ORDER_ID%%" !== r.orderId || "" !== tbsForm.orderCheckout() && tbsForm.orderCheckout() !== o) && e.setTimeout((function() {
                tbsForm.orderComments()
            }), 2e3) : (null !== r.orderId && "" !== r.orderId && "undefined" !== r.orderId && "null" !== r.orderId && "%%ORDER_ID%%" !== r.orderId || "" !== tbsForm.orderCheckout() && tbsForm.orderCheckout() !== o) && e.setTimeout((function() {
                tbsForm.orderComments()
            }), 5e3);
        _tbC.loadFontAwesome(), (r.tbReview.tbReviewBadge === o || r.tbReview.tbReviewBadge) && e.addEventListener("scroll", (function() {
            _tbC.loadIfVisible("targetbay-review-badges", "bv_badge_display_flag", "id") && tbsForm.reviewBadge()
        }))
    }, tbsForm.orderCheckout = function() {
        let e = "";
        if ("" === r.orderId || "undefined" === r.orderId || null === r.orderId || "null" !== r.orderId) {
            if ("undefined" == typeof Shopify || null === Shopify) return e;
            if (Shopify.checkout !== o && Shopify.checkout.order_id !== o) return e = Shopify.checkout.order_id, e
        }
    }, tbsForm.validateEmail = function(e) {
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
    }, tbsForm.validateName = function(e) {
        return /^[a-zA-Z0-9 ]*$/.test(e)
    }, tbsForm.reviewBadge = function() {
        if (_tbC.elEx("targetbay-review-badges")) {
            const e = {
                    shop: `${_tbC.shop}`,
                    _t: `${tbsForm.accessToken}`
                },
                r = "bv_badge_data",
                o = _tbC.getCachedData(r);
            o ? t.getElementById("targetbay-review-badges").innerHTML = o.content : _tbC.fetchData(tbsForm.reviewBadgeUrl, e, r).then((e => {
                t.getElementById("targetbay-review-badges").innerHTML = e.content
            })).catch((e => {}))
        }
    };
    tbsForm.siteRatings = function(i = "showwidget") {
        let a = _tbC.getCookie("user_loggedin");
        const n = _tbC.getCookie("tb_fetch_points");
        n !== o && null !== n && "" !== n && (a = _tbC.getCookieDecode("tb_fetch_points", "_ulogin")), i = t.getElementById("targetbay_reviews_landing") ? "page" : i;
        let s = "recent";
        const l = t.getElementById("tb-sort-site-reviews");
        l && (s = l.value), "" !== tbsForm.tbEmail && null !== tbsForm.tbEmail && "" !== tbsForm.tbUsername && null !== tbsForm.tbUsername && (a = "1");
        "undefined" != typeof Shopify && Shopify.shop;
        if (void 0 !== r && "cp" === r.platform && r.domain, "showwidget" === i) {
            tbsForm.siteSnippets = !0, "" !== r.productId && r.productId !== o && (tbsForm.siteSnippets = !1);
            const i = {
                index_name: `${tbsForm.tbkey}`,
                page_type: "schema",
                user_id: `${tbsForm.tbUserId}`,
                user_name: `${tbsForm.tbUsername}`,
                user_email: `${tbsForm.tbEmail}`,
                user_loggedin: `${a}`,
                sort_by: `${s}`,
                snippets_status: `${tbsForm.siteSnippets}`,
                page_url: `${e.location.href}`
            };
            _tbC ? .shop && (i.shop = `${_tbC.shop}`);
            const n = "bv_org_schema_data",
                l = _tbC.getCachedData(n);
            if (l) {
                if (l.schema !== o && tbsForm.siteSnippets) {
                    var d = t.createElement("script");
                    d.setAttribute("type", "application/ld+json"), d.setAttribute("id", "tbSiteReviewSnippet"), d.appendChild(t.createTextNode(JSON.stringify(l.schema))), t.getElementsByTagName("head")[0].appendChild(d)
                }
            } else _tbC.fetchData(tbsForm.siteReviewWidgetUrl, i, n).then((e => {
                if (e.schema !== o && tbsForm.siteSnippets) {
                    var r = t.createElement("script");
                    r.setAttribute("type", "application/ld+json"), r.setAttribute("id", "tbSiteReviewSnippet"), r.appendChild(t.createTextNode(JSON.stringify(e.schema))), t.getElementsByTagName("head")[0].appendChild(r)
                }
            })).catch((e => {}));
            ! function() {
                const t = e.location.href;
                (function() {
                    const e = "GET",
                        t = "themeValue",
                        r = tbrForm.reviewThemeUrl;
                    let o = "",
                        i = _tbC.getCachedData(t) ? ? null;
                    return null !== i && i != [] ? (i = JSON.stringify(i), i = JSON.parse(i), Promise.resolve(i.theme)) : (i = _tbC.fetchData(r, o, t, e), Promise.resolve(i.theme))
                })().then((e => {
                    null !== e && t.includes("write_review") && (1 == e || 2 == e ? (tbsForm.tbSiteReviewShowPopup(0), _tbC.widgetClick(), setTimeout((() => tbsForm.tbSiteReviewFormToggle()), 3e3)) : (tbsForm.tbSiteReviewTheme3ShowPopup(), _tbC.widgetClick(), setTimeout((() => {
                        tbsForm.tbSiteWriteReviews("site_review"), _tbC.widgetClick()
                    }), 3e3)))
                }))
            }()
        }
        const b = `&index_name=${tbsForm.tbkey}&user_id=${tbsForm.tbUserId}&user_name=${tbsForm.tbUsername}&user_email=${encodeURIComponent(tbsForm.tbEmail)}&user_loggedin=${a}&page_type=${i}&sort_by=${s}&snippets_status=${tbsForm.siteSnippets}&page_url=${e.location.href}&shop=${_tbC.shop}`;
        _tbC.fetchData(tbsForm.siteReviewWidgetUrl + b, {}, "", "GET").then((o => {
            ((o, i) => {
                try {
                    if ("Module Disabled" === i.msg) return !1;
                    const a = t.getElementById("targetbay_reviews_landing"),
                        n = t.getElementById("tbSiteReviews");
                    let s = t.getElementById("tbSiteReviewsContent");
                    const l = t.getElementById("tbSiteReviews-reviewContainer"),
                        d = t.getElementsByClassName("tbloaderContainer")[0],
                        b = !!t.documentMode,
                        c = (e, t) => {
                            e && Object.assign(e.style, t)
                        },
                        m = (e, t) => {
                            e && (e.className = t)
                        };
                    if ("theme 3 redirect" === i.msg) {
                        if (r.platform && "mg2" !== r.platform && tbsForm.loadMasonry(), a) {
                            const e = t.createElement("div");
                            e.className = "batch-loader", e.innerHTML = i.content, a.appendChild(e), tbsForm.tbSiteReviewTheme3ShowPopup()
                        }
                        return ""
                    }
                    if (a && i.content) a.innerHTML = i.content, n && (m(n, "tbSiteReview_popup"), c(n, {
                        height: "auto",
                        width: "100%"
                    }), c(l, {
                        height: "auto",
                        overflow: "auto"
                    }), Array.from(t.getElementsByClassName("tbSiteReviews-closeButton")).forEach((e => {
                        c(e, {
                            display: "none"
                        })
                    })));
                    else if (t.getElementById("targetbay_site_reviews") && i.content) {
                        "showwidget" !== o ? (s.innerHTML = i.content, c(s, {
                            display: "block"
                        })) : t.getElementById("targetbay_site_reviews").innerHTML = i.content, tbsForm.setHeightOnLoad(), "metro theme js load" === i.msg && r.platform && "mg2" !== r.platform && tbsForm.loadMasonry();
                        const a = e.innerHeight - 150;
                        let b = t.querySelector(".tbSiteReviews-Header") ? .offsetHeight || 0;
                        const m = t.querySelector(".tb-SiteReviews-tab");
                        m && (b += m.offsetHeight), n && c(n, {
                            height: `${a}px`
                        }), l && c(l, {
                            height: a - b + "px"
                        }), e.addEventListener("resize", (() => tbsForm.setHeightOnLoad())), d && c(d, {
                            display: "none"
                        })
                    }
                    if ((a || t.getElementById("targetbay_site_reviews")) && (b && n.classList.remove("tbSiteReviewresIe"), "showwidget" !== o)) {
                        t.addEventListener("click", (e => {
                            if (e.target.closest(".tb_site_reviews_pagination .page-link")) {
                                e.preventDefault();
                                const t = e.target;
                                if (t.getAttribute("href")) {
                                    const e = t.getAttribute("href").split("page=")[1];
                                    tbsForm.siteReviewpage = e.split("#")[0], tbsForm.getSiteReviews(tbsForm.siteReviewpage, "site")
                                }
                            }
                            if (e.target.closest(".tb_site_product_reviews_pagination .page-link")) {
                                e.preventDefault();
                                const t = e.target;
                                if (t.getAttribute("href")) {
                                    const e = t.getAttribute("href").split("page=")[1];
                                    tbsForm.productReviewpage = e.split("#")[0], tbsForm.getProductReviews(tbsForm.productReviewpage, "product")
                                }
                            }
                        })), t.querySelectorAll(".targetbay-site-voting").forEach((e => {
                            e.addEventListener("click", (t => {
                                t.preventDefault();
                                const r = e.getAttribute("data"),
                                    o = e.getAttribute("data-val");
                                r && tbsForm.voteSiteReview(r, o)
                            }))
                        })), t.querySelectorAll(".targetbay-product-voting").forEach((e => {
                            e.addEventListener("click", (t => {
                                t.preventDefault();
                                const r = e.getAttribute("data"),
                                    o = e.getAttribute("data-val");
                                r && tbsForm.voteProductReview(r, o)
                            }))
                        }));
                        const r = t.getElementById("tb-sort-site-reviews");
                        r && r.addEventListener("change", (() => tbsForm.sortReviews())), t.addEventListener("change", (e => {
                            "tb-sort-site-reviews" === e.target.id && tbsForm.sortReviews()
                        })), t.getElementById("targetbay_site_reviews") && (t.onkeydown = t => {
                            27 === (t = t || e.event).keyCode && tbsForm.tbSiteReviewClosePopup()
                        })
                    }
                    d && c(d, {
                        display: "none"
                    })
                } catch (e) {}
            })(i, o)
        })).catch((e => {}))
    }, tbsForm.getProductReviews = function(i, a = "product") {
        const n = e => t.getElementById(e),
            s = (e, t) => {
                e && (e.style.display = t ? "block" : "none")
            },
            l = e => t.getElementById(e),
            d = e => e !== o && null !== e && "" !== e;
        let b = _tbC.getCookie("user_loggedin");
        d(_tbC.getCookie("tb_fetch_points")) && (b = _tbC.getCookieDecode("tb_fetch_points", "_ulogin"));
        const {
            tbEmail: c,
            tbUsername: m
        } = tbsForm;
        d(c) && d(m) && (b = "1");
        const u = l("targetbay_reviews_landing") ? "page" : "widget";
        let g = "recent";
        const p = l("tb-sort-site-reviews");
        p && (g = p.value);
        let y = "Newest";
        const v = l("tbactive-site");
        v && (y = v.innerHTML), "sorting" === i && (tbsForm.siteReviewpage = 1, tbsForm.productReviewpage = 1);
        const _ = `&index_name=${r.apiKey}&user_id=${tbsForm.tbUserId}&user_name=${tbsForm.tbUsername}&user_email=${tbsForm.tbEmail}&sitereviewpage=${tbsForm.siteReviewpage}&productreviewpage=${tbsForm.productReviewpage}&user_loggedin=${b}&page_type=${u}&sort_by=${g}&snippets_status=${tbsForm.siteSnippets}&shop=${_tbC.shop}`;
        _tbC.fetchData(tbsForm.siteReviewWidgetUrl + _, {}, "", "GET").then((o => {
            const i = o;
            if ("Module Disabled" === i.msg) return !1;
            const l = t.getElementById("targetbay_reviews_landing"),
                d = t.getElementById("tbSiteReviews");
            let b = t.getElementById("tbSiteReviewsContent");
            const c = t.getElementById("tbSiteReviews-reviewContainer"),
                m = t.getElementsByClassName("tbloaderContainer")[0],
                g = !!t.documentMode,
                p = (e, t) => {
                    e && Object.assign(e.style, t)
                };
            if ("theme 3 redirect" === i.msg) {
                if (r.platform && "mg2" !== r.platform && tbsForm.loadMasonry(), l) {
                    const e = t.createElement("div");
                    e.className = "batch-loader", e.innerHTML = i.content, l.appendChild(e), tbsForm.tbSiteReviewTheme3ShowPopup()
                }
                return ""
            }
            if (l && i.content) l.innerHTML = i.content, d && (_ = "tbSiteReview_popup", (v = d) && (v.className = _), p(d, {
                height: "auto",
                width: "100%"
            }), p(c, {
                height: "auto",
                overflow: "auto"
            }), Array.from(t.getElementsByClassName("tbSiteReviews-closeButton")).forEach((e => {
                p(e, {
                    display: "none"
                })
            })));
            else if (t.getElementById("targetbay_site_reviews") && i.content) {
                "showwidget" !== u ? (b.innerHTML = i.content, p(b, {
                    display: "block"
                })) : t.getElementById("targetbay_site_reviews").innerHTML = i.content, tbsForm.setHeightOnLoad(), "metro theme js load" === i.msg && r.platform && "mg2" !== r.platform && tbsForm.loadMasonry();
                const o = e.innerHeight - 150;
                let a = t.querySelector(".tbSiteReviews-Header") ? .offsetHeight || 0;
                const n = t.querySelector(".tb-SiteReviews-tab");
                n && (a += n.offsetHeight), d && p(d, {
                    height: `${o}px`
                }), c && p(c, {
                    height: o - a + "px"
                }), e.addEventListener("resize", (() => tbsForm.setHeightOnLoad())), m && p(m, {
                    display: "none"
                })
            }
            var v, _;
            if (s(n("targetbay-site-reviews"), !1), s(n("targetbay-product-reviews"), !0), t.getElementById("tbactive-site") && (t.getElementById("tbactive-site").innerHTML = y), (l || t.getElementById("targetbay_site_reviews")) && (g && d.classList.remove("tbSiteReviewresIe"), "showwidget" !== u)) {
                t.querySelector(".tb_site_reviews_pagination").addEventListener("click", (function(e) {
                    e.preventDefault();
                    const t = e.target;
                    if (t.getAttribute("href")) {
                        const e = t.getAttribute("href").split("page=")[1];
                        tbsForm.siteReviewpage = e.split("#")[0], tbsForm.getSiteReviews(tbsForm.siteReviewpage)
                    }
                })), t.querySelector(".tb_site_product_reviews_pagination").addEventListener("click", (function(e) {
                    e.preventDefault();
                    const t = e.target;
                    if (t.getAttribute("href")) {
                        const e = t.getAttribute("href").split("page=")[1];
                        tbsForm.productReviewpage = e.split("#")[0], tbsForm.getProductReviews(tbsForm.productReviewpage, "product")
                    }
                })), t.querySelectorAll(".targetbay-site-voting").forEach((e => {
                    e.addEventListener("click", (t => {
                        t.preventDefault();
                        const r = e.getAttribute("data"),
                            o = e.getAttribute("data-val");
                        r && tbsForm.voteSiteReview(r, o)
                    }))
                })), t.querySelectorAll(".targetbay-product-voting").forEach((e => {
                    e.addEventListener("click", (t => {
                        t.preventDefault();
                        const r = e.getAttribute("data"),
                            o = e.getAttribute("data-val");
                        r && tbsForm.voteProductReview(r, o)
                    }))
                }));
                const r = t.getElementById("tb-sort-site-reviews");
                r && r.addEventListener("change", (() => tbsForm.sortReviews())), t.getElementById("targetbay_site_reviews") && (t.onkeydown = t => {
                    27 === (t = t || e.event).keyCode && tbsForm.tbSiteReviewClosePopup()
                });
                const o = t.getElementsByClassName("site-reviews-tablinks");
                o.length > 0 && "product" === a && (o[0].classList.remove("tab-current"), o[1] ? .classList.add("tab-current"))
            }
            m && p(m, {
                display: "none"
            })
        })).catch((e => {}))
    };

    function i() {
        const e = t.getElementsByName("targetbaySiteRating");
        for (let t = 0; t < e.length; t++)
            if (e[t].checked) return e[t].value;
        return ""
    }

    function a(e) {
        let t = 0;
        const r = tbsForm.tbUsername,
            o = tbsForm.tbEmail;
        return "" === r ? (n("targetbay_site_name_invalid", !1), n("targetbay_site_review_name_error", !0), t = 1) : tbsForm.validateName(r) ? (n("targetbay_site_review_name_error", !1), n("targetbay_site_name_invalid", !1)) : (n("targetbay_site_review_name_error", !1), n("targetbay_site_name_invalid", !0), t = 1), "" === o ? (n("targetbay_site_email_invalid", !1), n("targetbay_site_review_email_error", !0), t = 1) : tbsForm.validateEmail(o) ? (n("targetbay_site_review_email_error", !1), n("targetbay_site_email_invalid", !1)) : (n("targetbay_site_review_email_error", !1), n("targetbay_site_email_invalid", !0), t = 1), t
    }

    function n(e, r) {
        t.getElementById(e).style.display = r ? "block" : "none"
    }

    function s(e, r) {
        const o = t.getElementsByClassName(e);
        for (let e of o) e.textContent = r
    }

    function l(e, r) {
        const o = t.getElementsByClassName(e);
        Array.from(o).forEach((e => {
            e.textContent = `(${r})`
        }))
    }

    function d(e, r, o, i) {
        const a = t.getElementById(e),
            n = t.getElementById(r);
        a && (a.className = o), n && (n.style.display = i)
    }

    function b(e, r) {
        e.forEach((e => {
            const o = t.getElementsByClassName(e)[0];
            o && (o.style.display = r)
        }))
    }

    function c(e, r) {
        t.getElementById(e).style.display = r ? "block" : "none"
    }
    tbsForm.getSiteReviews = function(i = "showwidget", a = "site") {
        const n = e => t.getElementById(e),
            s = e => null !== e && e !== o && "" !== e,
            l = (e, t) => {
                const r = _tbC.getCookie(e);
                return s(r) ? _tbC.getCookieDecode(e, t) : o
            };
        let d = l("user_loggedin", "_ulogin") || "";
        const b = l("tb_fetch_points", "_ulogin");
        b && (d = b), s(tbsForm.tbEmail) && s(tbsForm.tbUsername) && (d = "1");
        const c = n("targetbay_reviews_landing") ? "page" : "widget";
        let m = "recent";
        const u = n("tb-sort-site-reviews");
        u && (m = u.value);
        let g = "Newest";
        const p = n("tbactive-site");
        p && (g = p.innerHTML), "sorting" === i && (tbsForm.siteReviewpage = 1, tbsForm.productReviewpage = 1);
        const y = `&index_name=${r.apiKey}&user_id=${tbsForm.tbUserId}&user_name=${tbsForm.tbUsername}&user_email=${tbsForm.tbEmail}&sitereviewpage=${tbsForm.siteReviewpage}&productreviewpage=${tbsForm.productReviewpage}&user_loggedin=${d}&page_type=${c}&active_tab=site&sort_by=${m}&snippets_status=${tbsForm.siteSnippets}&shop=${_tbC.shop}`;
        _tbC.fetchData(tbsForm.siteReviewWidgetUrl + y, {}, "", "GET").then((r => {
            ((r, o, i, a) => {
                try {
                    const a = e => t.getElementById(e),
                        n = e => t.getElementsByClassName(e),
                        s = (e, t) => e && Object.assign(e.style, t),
                        l = (e, t) => e && (e.className = t),
                        d = (e, t) => s(e, {
                            display: t ? "block" : "none"
                        }),
                        b = () => {
                            const t = a("targetbay_site_reviews");
                            if (t) {
                                if ("showwidget" !== r) {
                                    const e = a("tbSiteReviewsContent");
                                    e.innerHTML = o.content, d(e, !0)
                                } else t.innerHTML = o.content;
                                const i = e.innerHeight - 150,
                                    l = a("tbSiteReviews"),
                                    b = a("tbSiteReviews-reviewContainer"),
                                    c = n("tbSiteReviews-Header")[0],
                                    m = n("tb-SiteReviews-tab")[0];
                                let u = c ? c.offsetHeight : 0;
                                m && (u += m.offsetHeight);
                                const g = i - u;
                                s(l, {
                                    height: `${i}px`
                                }), s(b, {
                                    height: `${g}px`
                                })
                            }
                        },
                        c = () => {
                            const e = a("tb-sort-site-reviews");
                            e && (e.value = tbsForm.tbSortSiteReview, e.addEventListener("change", tbsForm.sortReviews));
                            const t = a("tbactive-site");
                            if (t) {
                                t.innerHTML = i;
                                const e = a("page-number-star-site");
                                if (e) {
                                    const t = parseInt(a("limit_count_site").innerHTML),
                                        r = parseInt(a("page-number-total-site").innerHTML),
                                        o = tbsForm.siteReviewpage * t + 1 - t,
                                        i = Math.min(tbsForm.siteReviewpage * t, r);
                                    e.innerHTML = o, a("page-number-limit-site").innerHTML = i
                                }
                            }
                        },
                        m = () => {
                            t.querySelectorAll(".tb_site_reviews_pagination").forEach((e => {
                                e.addEventListener("click", (e => {
                                    e.preventDefault();
                                    const t = new URL(e.target.href).searchParams.get("page");
                                    t && (tbsForm.siteReviewpage = t, tbsForm.getSiteReviews(t, "site"))
                                }))
                            })), t.querySelectorAll(".tb_site_product_reviews_pagination").forEach((e => {
                                e.addEventListener("click", (e => {
                                    e.preventDefault();
                                    const t = new URL(e.target.href).searchParams.get("page");
                                    t && (tbsForm.productReviewpage = t, tbsForm.getProductReviews(t, "product"))
                                }))
                            })), t.querySelectorAll(".targetbay-site-voting").forEach((e => {
                                e.addEventListener("click", (t => {
                                    t.preventDefault();
                                    const r = e.getAttribute("data"),
                                        o = e.getAttribute("data-val");
                                    r && tbsForm.voteSiteReview(r, o)
                                }))
                            })), t.querySelectorAll(".targetbay-product-voting").forEach((e => {
                                e.addEventListener("click", (t => {
                                    t.preventDefault();
                                    const r = e.getAttribute("data"),
                                        o = e.getAttribute("data-val");
                                    r && tbsForm.voteProductReview(r, o)
                                }))
                            }))
                        },
                        u = () => {
                            d(a("targetbay-site-reviews"), !0), d(a("targetbay-product-reviews"), !1), d(a("tbSiteReviews-FormButton"), !0);
                            const e = a("targetbay-site-reviews-average-star"),
                                t = a("targetbay-product-reviews-average-star");
                            d(e, !0), d(t, !1);
                            const r = a("targetbay-header-site-reviews-average-star"),
                                o = a("targetbay-header-product-reviews-average-star");
                            d(r, !0), d(o, !1), d(a("tb-header-site-review-count"), !0), d(a("tb-header-product-review-count"), !1);
                            const i = n("site-reviews-tablinks");
                            i.length > 0 && (i[0].classList.add("tab-current"), i[1] ? .classList.remove("tab-current"))
                        };
                    (() => {
                        const t = a("targetbay_reviews_landing");
                        if (t && o.content) {
                            t.innerHTML = o.content;
                            const r = a("tbSiteReviews"),
                                i = a("tbSiteReviews-reviewContainer");
                            l(r, "tbSiteReview_popup"), s(r, {
                                height: "auto",
                                width: "100%"
                            }), s(i, {
                                height: "auto",
                                overflow: "auto"
                            }), Array.from(n("tbSiteReviews-closeButton")).forEach((e => s(e, {
                                display: "none"
                            }))), e.scrollTo(0, 0)
                        }
                    })(), b(), c(), m(), u(), t.documentMode && a("tbSiteReviews") ? .classList.remove("tbSiteReviewresIe"), tbwTrack.reviewUserTrack("site_review")
                } catch (e) {}
            })(c, r, g)
        })).catch((e => {
            (e => {
                const r = t.getElementsByClassName(e);
                r.length > 0 && (r[0].style.display = "none")
            })("tbloaderContainer")
        }))
    }, tbsForm.tbTabClick = function(e) {
        const r = e => t.getElementById(e),
            o = e => t.getElementsByClassName(e)[0],
            i = (e, t) => {
                e && (e.style.display = t)
            },
            a = (e, t, r) => {
                e && e.classList[r ? "add" : "remove"](t)
            },
            n = {
                siteReviewStarRatings: r("targetbay-header-site-reviews-average-star"),
                productReviewStarRatings: r("targetbay-header-product-reviews-average-star"),
                siteReviewsCount: r("tb-header-site-review-count"),
                productReviewsCount: r("tb-header-product-review-count"),
                siteReviewsAvgStar: r("targetbay-site-reviews-average-star"),
                productReviewsAvgStar: r("targetbay-product-reviews-average-star"),
                siteReviewsFormButton: r("tbSiteReviews-FormButton"),
                targetbaySiteReviews: r("targetbay-site-reviews"),
                targetbayProductReviews: r("targetbay-product-reviews"),
                siteReviewsTabLink: o("site-reviews-tablinks"),
                productReviewsTabLink: t.getElementsByClassName("site-reviews-tablinks")[1],
                tbSiteReviewsForm: o("tbSiteReviews-tbReviewForm")
            },
            s = "tbSiteReviews" === e;
        var l;
        (e => {
            a(n.siteReviewsTabLink, "tab-current", e), a(n.productReviewsTabLink, "tab-current", !e)
        })(s), l = s, n.siteReviewsAvgStar && n.productReviewsAvgStar && (i(n.siteReviewsAvgStar, l ? "block" : "none"), i(n.productReviewsAvgStar, l ? "none" : "block")), (e => {
            n.siteReviewStarRatings && n.productReviewStarRatings && (i(n.siteReviewStarRatings, e ? "block" : "none"), i(n.productReviewStarRatings, e ? "none" : "block"))
        })(s), (e => {
            n.siteReviewsCount && n.productReviewsCount && (i(n.siteReviewsCount, e ? "block" : "none"), i(n.productReviewsCount, e ? "none" : "block"))
        })(s), (e => {
            i(n.siteReviewsFormButton, e ? "block" : "none"), i(n.targetbaySiteReviews, e ? "block" : "none"), i(n.targetbayProductReviews, e ? "none" : "block")
        })(s), s || i(n.tbSiteReviewsForm, "none"), tbwTrack.reviewUserTrack("site_review")
    }, tbsForm.tbKeyUp = function(e, t, r, o) {
        13 !== e.keyCode || "tbQuestionSection" !== t && "tbReviewSection" !== t ? 13 === e.keyCode && "qa" === t ? tbsForm.tbReviewShow(t, r, o) : 13 === e.keyCode && tbsForm.tbCommentToggle(t) : tbsForm.tbTabClick(t, r, o)
    }, tbsForm.tbSiteReviewClick = function() {
        let o = 0;
        1 == t.getElementById("captchaVal").value && (o = function() {
            const e = parseInt(t.getElementById("tb-sr-numberone").value),
                r = parseInt(t.getElementById("tb-sr-numbertwo").value),
                o = t.getElementById("tb-sr-ansval").value,
                i = e + r,
                a = t.getElementById("targetbay_site_captcha_error");
            if ("" === o || i != o) return a.style.display = "block", 1;
            return a.style.display = "none", 0
        }());
        o = function(e, r, o, i, n) {
            const s = (e, r) => {
                    const o = t.getElementById(e);
                    o && (o.style.display = r ? "block" : "none")
                },
                l = (e, t, r = (() => "" === e)) => {
                    const o = r();
                    return s(t, o), o
                },
                d = [l(e, "targetbay_site_rating_error"), l(r, "targetbay_site_title_error", (() => "" === r && "yes" === i)), l(o, "targetbay_site_review_error")];
            1 != n && d.push(a(n));
            return d.some(Boolean) ? 1 : 0
        }(i(), t.getElementById("targetbaySiteTitle").value, t.getElementById("targetbaySiteReview").value, t.getElementById("title_validator_review").value, function() {
            let e = _tbC.getCookie("user_loggedin");
            _tbC.getCookie("tb_fetch_points") && (e = _tbC.getCookieDecode("tb_fetch_points", "_ulogin"));
            tbsForm.tbEmail && tbsForm.tbUsername && (e = "1");
            1 != e && (tbsForm.tbUsername = t.getElementById("targetbaySiteUsername").value, tbsForm.tbEmail = t.getElementById("targetbaySiteEmail").value);
            return e
        }()) || o, 0 === o ? function() {
            const o = {
                index_name: tbsForm.tbkey,
                user_id: tbsForm.tbUserId,
                user_name: tbsForm.tbUsername,
                user_email: tbsForm.tbEmail,
                user_avatar: tbsForm.tbAvatar,
                review_rating: i(),
                review_title: t.getElementById("targetbaySiteTitle").value,
                review: t.getElementById("targetbaySiteReview").value,
                user_type: r.userName,
                title_validator_review: t.getElementById("title_validator_review").value,
                shop: _tbC.shop
            };
            (function() {
                const e = t.getElementsByName("targetbaySiteRating");
                for (let t = 0; t < e.length; t++) e[t].checked && (e[t].checked = !1);
                if (t.getElementById("targetbaySiteTitle").value = "", t.getElementById("targetbaySiteReview").value = "", tbsForm.tbUsername && tbsForm.tbEmail) {
                    const e = t.getElementById("targetbaySiteUsername"),
                        r = t.getElementById("targetbaySiteEmail");
                    e && r && (e.value = "", r.value = "")
                }
            })(), _tbC.fetchData(tbsForm.siteReviewUrl, o, "", "POST").then((r => {
                ! function(r) {
                    if (t.getElementsByClassName("sitereviews-c-loader")[0].style.display = "none", "success" === r.message) {
                        const r = t.getElementsByClassName("tbSiteReviews-tbReviewForm")[0];
                        r.style.display = "none", t.getElementById("targetbay_site_review_success").style.display = "block", r.scrollIntoView(), e.setTimeout((() => {
                            t.getElementById("targetbay_site_review_success").style.display = "none"
                        }), 2e3)
                    }
                }(r)
            })).catch((e => {}))
        }() : function() {
            t.getElementsByClassName("tbSiteReviews-formErrorLabel")[0].style.display = "block";
            const e = t.getElementsByClassName("tbSiteReviews-tbReviewForm")[0];
            e.className += " tbSiteReviews-tbReviewFormError", e.scrollIntoView()
        }()
    }, tbsForm.tbCommentToggle = function(e) {
        const r = t.getElementById(`site-review-comment-toggl-list-${e}`);
        r && (r.style.display = "block" === r.style.display ? "none" : "block")
    }, tbsForm.tbSiteReviewFormToggle = function() {
        1 == t.getElementById("captchaVal").value && (t.getElementById("tb-sr-numberone").value = Math.floor(10 * Math.random() + 1), t.getElementById("tb-sr-numbertwo").value = Math.floor(10 * Math.random() + 1), t.getElementById("tb-sr-ansval").value = "");
        const r = t.getElementsByClassName("tbSiteReviews-tbReviewForm")[0],
            o = t.getElementsByClassName("sitereviews-c-loader")[0],
            i = t.getElementsByClassName("targetbayerror");
        "block" === r.style.display || "" === r.style.display ? r.style.display = "none" : (r.style.display = "block", r.scrollIntoView(), t.getElementById("targetbaySiteUsername").focus(), Array.from(i).forEach((e => e.style.display = "none")), r.className = "tbSiteReviews-tbReviewForm", o.style.display = "block", e.setTimeout((() => o.style.display = "none"), 1e3)), tbwTrack.reviewUserTrack("site_review")
    }, tbsForm.tbSiteReviewShowPopup = function(e) {
        tbsForm.tbSalesTracking("site_review"), _tbC.widgetClick();
        const r = t.querySelector(".tbloaderContainer");
        r && (r.style.display = "block"), t.documentMode && t.getElementById("tbSiteReviews").classList.remove("tbSiteReviewresIe"), e && t.body.classList.add("tbSiteReviews-tbactive"), t.getElementById("tbSiteReviews").classList.add("tbSiteReview_popup"), tbwTrack.reviewUserTrack("site_review"), tbsForm.siteRatings("widget"), tbsForm.setHeightOnLoad()
    }, tbsForm.loadMasonry = function() {
        const e = t,
            r = e.createElement("script");
        r.src = "https://img-msg.tb-list.com/tb-metro.pkgd.min.js", r.setAttribute("data-timestamp", +new Date), (e.head || e.body).appendChild(r)
    }, tbsForm.loadMasonryViaRequireJs = function() {
        if (r.platform !== o && null !== r.platform)
            if ("mg2" === r.platform) "function" == typeof e.requirejs && e.requirejs([`https://${tbConfig.apiStatus}.targetbay.com/js/tb-metro.pkgd.min.js`], (function(e) {
                const r = new e(t.querySelector(".tb-grid"), {
                    itemSelector: ".tb-grid-item"
                });
                r.reloadItems(), r.layout()
            }));
            else {
                const e = t.querySelector(".tb-grid"),
                    r = new Masonry(e, {
                        itemSelector: ".tb-grid-item"
                    });
                r.reloadItems(), r.layout()
            }
    }, tbsForm.tbSiteReviewTheme3ShowPopup = function() {
        if (tbsForm.tbSalesTracking("site_review"), "" === r.userMail) {
            const e = tbsForm.tbUserId;
            _tbC.setCookie("gid", e), _tbC.setCookie("data_status", "data_not_sent")
        }
        _tbC.widgetClick(), null !== t.getElementById("tbModalGridLoader") && t.getElementById("tbModalGridLoader") !== o && t.getElementById("tbModalGridLoader").classList.add("tbay_pre_load_modal_show");
        let i = _tbC.getCookie("user_loggedin");
        const a = _tbC.getCookie("tb_fetch_points");
        a !== o && null !== a && "" !== a && (i = _tbC.getCookieDecode("tb_fetch_points", "_ulogin")), tbsForm.tbSortSiteReview = "recent", tbsForm.tbActiveTab = "site", tbsForm.tbActiveView = "", tbsForm.search_text = "", tbsForm.advanced_filter = "", tbsForm.PopupEscToClose = "", tbsForm.mobileView = 0, tbsForm.tbPageType = "widget", null !== t.getElementById("targetbay_reviews_landing") && t.getElementById("targetbay_reviews_landing") !== o && (tbsForm.tbPageType = "page"), "" !== tbsForm.tbEmail && null !== tbsForm.tbEmail && "" !== tbsForm.tbUsername && null !== tbsForm.tbUsername && (i = "1"), _tbC.isMobile() && (tbsForm.mobileView = 1);
        const n = `&index_name=${r.apiKey}&user_id=${tbsForm.tbUserId}&user_name=${tbsForm.tbUsername}&user_email=${tbsForm.tbEmail}&user_loggedin=${i}&page_url=${e.location.href}&sort_by=${tbsForm.tbSortSiteReview}&active_tab=${tbsForm.tbActiveTab}&active_view=${tbsForm.tbActiveView}&search_text=${tbsForm.search_text}&page_type=${tbsForm.tbPageType}&mobile_view=${tbsForm.mobileView}&snippets_status=${tbsForm.siteSnippets}&shop=${_tbC.shop}`,
            s = tbsForm.siteReviewWidgetTheme3Url + n;
        fetch(s).then((e => e.json())).then((e => {
            const r = e.content,
                o = t.createElement("div");
            o.setAttribute("id", "targetbay_review_popup_model"), o.innerHTML = r;
            const i = _tbC.elEx("targetbay_reviews_landing") ? "targetbay_reviews_landing" : _tbC.elEx("targetbay_site_reviews") ? "targetbay_site_reviews" : null,
                a = i ? t.getElementById(i) : null,
                n = o.querySelectorAll(".tb-view-tag");
            tbsForm.tbActiveView = "tb-grid-view" === n[0] ? .innerHTML ? "grid" : "list", tbsForm.insertAfter(a, o), setTimeout((() => {
                if ("grid" === tbsForm.tbActiveView && tbsForm.loadMasonryViaRequireJs(), "page" === tbsForm.tbPageType) t.querySelector(".tbSiteReviews-modal-container-batch-page").style.opacity = 1;
                else {
                    const e = t.getElementById("modalContainer");
                    e && (e.classList.add("tbay_modal_show"), t.body.classList.add("tbsiteReviews-modalOpen"), t.documentElement.classList.add("tbsiteReviews-modalOpen"))
                }
                _tbC.elEx("tbModalGridLoader") && t.getElementById("tbModalGridLoader").classList.remove("tbay_pre_load_modal_show"), "widget" === tbsForm.tbPageType && tbsForm.setWidgetTheme3Height()
            }), 400), i && t.getElementById(i).offsetWidth < 720 && t.getElementById(i).classList.add("tb-review-page-width");
            const s = t.getElementById("tgbsiteGridListColors");
            "list" === tbsForm.tbActiveView ? (s.classList.remove("targetbay-reviews-filter-active-grid"), s.classList.add("targetbay-reviews-filter-active-list")) : (s.classList.remove("targetbay-reviews-filter-active-list"), s.classList.add("targetbay-reviews-filter-active-grid"));
            const l = t.getElementById("tbactive-review-tab") ? .getAttribute("value");
            if ("product" === l && (t.getElementById("tbsiteReviewsHeaderSite") ? .classList.remove("tbsite-reviews-main-header-tabs-active"), t.getElementById("tbsiteReviewsHeaderProduct") ? .classList.add("tbsite-reviews-main-header-tabs-active"), tbsForm.tbActiveTab = "product"), _tbC.elEx("tb-sort-site-reviews")) {
                tbsForm.tbSortSiteReview = t.getElementById("tb-sort-site-reviews").value || t.getElementById("tbactive-site") ? .getAttribute("value") || "";
                t.querySelectorAll(".tb-filter-active-check").forEach((e => e.style.opacity = 0));
                t.querySelectorAll(".tb-text-highlight").forEach((e => e.style.fontWeight = ""));
                const e = {
                        oldest: ["tbSortOldest", "tbTextOldest"],
                        highest_rating: ["tbSortHigh", "tbTextHigh"],
                        lowest_rating: ["tbSortLow", "tbTextLow"],
                        recent: ["tbSortRecent", "tbTextRecent"]
                    },
                    [r, o] = e[tbsForm.tbSortSiteReview] || e.recent;
                t.getElementById(r).style.opacity = 1, t.getElementById(o).style.fontWeight = "550"
            }
            tbwTrack.reviewUserTrack("site_review")
        }))
    }, tbsForm.plusSlides = function(e, t, r) {
        tbsForm.pausePlayer(r), tbsForm.showSlides(tbsForm.slideIndex += e, t)
    }, tbsForm.showSlides = function(e, r) {
        let i;
        if (t.getElementsByClassName(`tbay-muti-image-slide-${r}`).length > 0) {
            const a = t.getElementsByClassName(`tbay-muti-image-slide-${r}`),
                n = t.getElementsByClassName(`tbay-image-slide-next-${r}`)[0],
                s = t.getElementsByClassName(`tbay-image-slide-prev-${r}`)[0];
            for (1 == e ? (null !== n && n !== o && (n.style.visibility = "visible"), null !== s && s !== o && (s.style.visibility = "hidden")) : s.style.visibility = "visible", a.length == e ? null !== n && n !== o && (n.style.visibility = "hidden") : null !== n && n !== o && (n.style.visibility = "visible"), e > a.length && (tbsForm.slideIndex = 1), e < 1 && (tbsForm.slideIndex = a.length), i = 0; i < a.length; i++) a[i].style.display = "none";
            a[tbsForm.slideIndex - 1].style.display = "block"
        }
    }, tbsForm.currentSlide = function(e, t) {
        tbsForm.showSlides(tbsForm.slideIndex = e, t)
    }, tbsForm.insertAfter = function(e, t) {
        if (!(e && t && e.parentNode && e instanceof Node && t instanceof Node)) return !1;
        try {
            return e.parentNode.insertBefore(t, e.nextSibling), !0
        } catch (e) {
            return !1
        }
    }, tbsForm.showReviewCommentPopup = function(e, r) {
        const o = `popupCommentModalContainer-${e}`;
        tbsForm.PopupEscToClose = o;
        t.getElementById(o).classList.add("tbay_review_comment_modal_show"), tbsForm.slideIndex = r, tbsForm.currentSlide(tbsForm.slideIndex, e)
    }, tbsForm.playVideo = function(e, r = "grid") {
        const o = `review_video${r}_${e}`,
            i = t.getElementById(`video_svg_${r}_${e}`),
            a = t.getElementById(`video_thumbnail${r}_${e}`),
            n = t.getElementById(o);
        i && (i.style.display = "none"), a && (a.style.display = "none"), n && (n.style.width = "100%", n.style.height = "100%", n.style.display = "block", n.src = `https://customer-91yb8xm2vbdwjufh.cloudflarestream.com/${e}/iframe?autoplay=true&poster=https%3A%2F%2Fcustomer-91yb8xm2vbdwjufh.cloudflarestream.com%2F${e}%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D`), t.getElementById("current_video").value = e
    }, tbsForm.playCarouselGalleryVideo = function(e) {
        const r = e => {
            const r = t.getElementById(e);
            r && (r.style.display = "none")
        };
        r("tbVgPhGalCustomerImage"), r("tbVgPhCrCustomerImage");
        const o = t.getElementById(`review_videoproduct_${e}`),
            i = t.getElementById(`video_svg_product_${e}`);
        i && (i.style.display = "none"), o && (o.style.display = "block", o.src = `https://customer-91yb8xm2vbdwjufh.cloudflarestream.com/${e}/iframe?autoplay=true&poster=https%3A%2F%2Fcustomer-91yb8xm2vbdwjufh.cloudflarestream.com%2F${e}%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D`)
    }, t.onkeydown = function(t) {
        if (27 !== (t = t || e.event).keyCode) return;
        ({
            "": () => {
                "widget" === tbsForm.tbPageType && tbsForm.tbSiteReviewTheme3ClosePopup()
            },
            product: () => tbsForm.tbCloseWriteReviewPopup("product"),
            site: () => tbsForm.tbCloseWriteReviewPopup("site"),
            qa: () => tbsForm.tbCloseWriteReviewPopup("qa"),
            advanced: () => tbsForm.closeAdvancedFilterPopup()
        }[tbsForm.PopupEscToClose] || (() => tbsForm.closeReviewCommentPopup(tbsForm.PopupEscToClose)))(), tbsForm.PopupEscToClose = ""
    }, tbsForm.closeReviewCommentPopup = function(e, r = "grid") {
        t.getElementById(e).classList.remove("tbay_review_comment_modal_show"), tbsForm.PopupEscToClose = "", tbsForm.pausePlayer(r)
    }, tbsForm.pausePlayer = function(e) {
        const r = t.getElementById("current_video").value,
            i = t.getElementById(`review_video${e}_${r}`);
        null !== i && i !== o && "" !== i.src && null !== i.src && (i.setAttribute("src", ""), t.getElementById(`video_svg_${e}_${r}`).style.display = "block", t.getElementById(`video_thumbnail${e}_${r}`).style.display = "block")
    }, tbsForm.showPopupTheme3Comments = function(e) {
        const r = t.getElementById(`tb-review-comment-popup-button-${e}`),
            o = t.getElementById(`tb-more-review-popup-comments-${e}`);
        r && o && (o.style.display = "block", r.style.display = "none")
    }, tbsForm.tbSiteReviewTheme3ClosePopup = function() {
        t.body.classList.remove("tbsiteReviews-modalOpen"), t.getElementsByTagName("html")[0].classList.remove("tbsiteReviews-modalOpen");
        t.getElementById("targetbay_review_popup_model").remove(), tbsForm.PopupEscToClose = ""
    }, tbsForm.reviewRatingBar = function(e) {
        t.getElementById("average-review-rating-bar").classList.toggle("tbSiteReviewShow"), e.stopPropagation()
    }, tbsForm.sortByToggle = function(e) {
        t.getElementById("tbactive-sort-by-toggle").classList.toggle("tbSiteReviewFilterShow"), t.getElementById("tb-sort-site-reviews").value = t.getElementById("tbactive-site").getAttribute("value"), e.stopPropagation()
    }, tbsForm.tbFilterToggle = function(e) {
        t.getElementById("tbactive-filter-by-toggle").classList.toggle("tbSiteReviewFilterShow"), e.stopPropagation()
    }, tbsForm.tbGoTop = function() {
        const e = t.getElementById("modalContainer");
        null !== e && e !== o ? e.scrollTop = e.offsetTop : t.getElementsByClassName("tbSiteReviews-modal-container-batch-page")[0].scrollIntoView()
    }, tbsForm.tbSiteVoting = function(e, t, r) {
        "site" === r ? tbsForm.voteTheme3SiteReview(e, t) : tbsForm.voteTheme3ProductReview(e, t)
    }, tbsForm.tbReviewCommentToggle = function(e) {
        const r = t.getElementById(`review-comment-toggle-list-${e}`);
        "block" === r.style.display || "" === r.style.display ? r.style.display = "none" : r.style.display = "block"
    }, tbsForm.showAdvancedFilter = function() {
        tbsForm.PopupEscToClose = "advanced", "page" === tbsForm.tbPageType && t.getElementsByTagName("html")[0].classList.add("tbsiteReviews-modalOpen"), t.getElementById("advancedFilterPopup").classList.add("advacned-filter-modal-show"), t.getElementById("targetbay_review_date_invalid").style.display = "none"
    }, tbsForm.closeAdvancedFilterPopup = function() {
        tbsForm.PopupEscToClose = "", "page" === tbsForm.tbPageType && t.getElementsByTagName("html")[0].classList.remove("tbsiteReviews-modalOpen"), t.getElementById("advancedFilterPopup").classList.remove("advacned-filter-modal-show")
    }, tbsForm.clearAdvancedFilter = function() {
        tbsForm.PopupEscToClose = "", tbsForm.advanced_filter = "", tbsForm.tbSiteReviewSort()
    }, tbsForm.getAdvancedFilter = function() {
        "page" === tbsForm.tbPageType && t.getElementsByTagName("html")[0].classList.remove("tbsiteReviews-modalOpen");
        const i = t.querySelectorAll(".tb-get-filter-value"),
            a = [];
        for (let e = 0; e < i.length; e++) i[e].checked && a.push(i[e].value);
        let n = 0;
        const s = t.getElementsByClassName("targetbay-reviews-input-date-from")[0].value,
            l = t.getElementsByClassName("targetbay-reviews-input-date-to")[0].value;
        if (Date.parse(s) > Date.parse(l) ? (t.getElementById("targetbay_review_date_invalid").style.display = "block", n = 1) : t.getElementById("targetbay_review_date_invalid").style.display = "none", 0 === n) {
            "" !== s && "" !== l && (a.push(`from:${s}`), a.push(`to:${l}`)), tbsForm.advanced_filter = a;
            let i = _tbC.getCookie("user_loggedin");
            const n = _tbC.getCookie("tb_fetch_points");
            if (n !== o && null !== n && "" !== n && (i = _tbC.getCookieDecode("tb_fetch_points", "_ulogin")), t.getElementById("advancedFilterPopup").classList.remove("advacned-filter-modal-show"), "page" === tbsForm.tbPageType) t.getElementsByClassName("tbSiteReviews-modal-container-batch-page")[0].style.opacity = 0;
            else {
                const e = t.getElementById("modalContainer");
                null !== e && e !== o && e.classList.remove("tbay_modal_show")
            }
            "list" == tbsForm.tbActiveView ? null !== t.getElementById("tbModalListLoader") && t.getElementById("tbModalListLoader") !== o && t.getElementById("tbModalListLoader").classList.add("tbay_pre_load_modal_show") : null !== t.getElementById("tbModalGridLoader") && t.getElementById("tbModalGridLoader") !== o && t.getElementById("tbModalGridLoader").classList.add("tbay_pre_load_modal_show"), tbsForm.reviewpage = 1;
            const d = `&index_name=${r.apiKey}&user_id=${tbsForm.tbUserId}&user_name=${tbsForm.tbUsername}&user_email=${tbsForm.tbEmail}&user_loggedin=${i}&page_url=${e.location.href}&sort_by=${tbsForm.tbSortSiteReview}&reviewpage=${tbsForm.reviewpage}&active_tab=${tbsForm.tbActiveTab}&active_view=${tbsForm.tbActiveView}&search_text=${tbsForm.search_text}&advanced_filter=${tbsForm.advanced_filter}&page_type=${tbsForm.tbPageType}&mobile_view=${tbsForm.mobileView}&snippets_status=${tbsForm.siteSnippets}&shop=${_tbC.shop}`,
                b = tbsForm.siteReviewWidgetTheme3Url + d;
            fetch(b).then((e => e.json())).then((e => {
                const r = e.content;
                if ("grid" == tbsForm.tbActiveView) var i = t.querySelector(".tb-grid");
                else i = t.querySelector(".tb-list");
                i.innerHTML = "";
                const a = t.createElement("div");
                if (a.innerHTML = r, "grid" == tbsForm.tbActiveView) var n = a.querySelectorAll(".tb-grid-item");
                else n = a.querySelectorAll(".tb-list-item");
                if (i.append(...n), setTimeout((function() {
                        if ("grid" == tbsForm.tbActiveView && tbsForm.loadMasonryViaRequireJs(), "page" === tbsForm.tbPageType) t.getElementsByClassName("tbSiteReviews-modal-container-batch-page")[0].style.opacity = 1;
                        else {
                            const e = t.getElementById("modalContainer");
                            null !== e && e !== o && e.classList.add("tbay_modal_show")
                        }
                        "list" == tbsForm.tbActiveView ? null !== t.getElementById("tbModalListLoader") && t.getElementById("tbModalListLoader") !== o && t.getElementById("tbModalListLoader").classList.remove("tbay_pre_load_modal_show") : null !== t.getElementById("tbModalGridLoader") && t.getElementById("tbModalGridLoader") !== o && t.getElementById("tbModalGridLoader").classList.remove("tbay_pre_load_modal_show"), "widget" === tbsForm.tbPageType && tbsForm.setWidgetTheme3Height()
                    }), 500), "page" === tbsForm.tbPageType) {
                    const e = t.getElementsByClassName("tb-review-banner-section")[0];
                    e !== o && null !== e && e.remove();
                    const r = a.querySelectorAll(".tb-review-banner-section")[0];
                    null !== r && r !== o && t.getElementById("tb-banner-header-section").appendChild(r)
                }
                t.getElementById("filterAdvancedShow").style.display = "none", t.getElementById("advancedFilterSelected").style.display = "inline-block", (s = t.getElementsByClassName("tb-advanced-filter-edit-value")[0]) !== o && null !== s && s.remove();
                var s = a.querySelectorAll(".tb-advanced-filter-edit-value")[0];
                const l = t.querySelectorAll(".tb-advanced-filter-result")[0];
                tbsForm.insertAfter(l, s), (d = t.getElementsByClassName("tb-show-review-enable-content-option")[0]) !== o && null !== c && d.remove();
                var d = a.querySelectorAll(".tb-show-review-enable-content-option")[0];
                const b = t.querySelectorAll(".tb-show-write-review-section")[0];
                tbsForm.insertAfter(b, d);
                var c = t.getElementsByClassName("tb-targetbay-reviews-open")[0];
                c !== o && null !== c && c.remove();
                const m = a.querySelectorAll(".tb-targetbay-reviews-open");
                m.length > 0 && t.querySelector(".targetbay-reviews-overall-star-ratings").append(...m);
                const u = t.getElementById("average-review-rating-bar");
                null !== u && u.remove();
                const g = a.querySelectorAll(".targetbay-reviews-star-rating-reviews-dist")[0];
                if (null !== g && g !== o) {
                    const e = t.querySelectorAll(".targetbay-reviews-overall-star-ratings")[0];
                    null !== e && tbsForm.insertAfter(e, g)
                }
                const p = t.getElementsByClassName("targetbay-write-review-section")[0];
                p !== o && null !== c && p.remove();
                const y = a.querySelectorAll(".targetbay-write-review-section")[0],
                    v = t.querySelectorAll(".targetbay-filter-section")[0];
                tbsForm.insertAfter(v, y);
                const _ = a.querySelectorAll("#tbSiteReviewShowMore");
                if (_.length > 0)
                    if (_[0].value > 0) {
                        var w = t.getElementById("loadMoreButton");
                        const e = `tbsForm.tbSiteReviewLoadMoreData(${tbsForm.reviewpage+1})`;
                        w.style.opacity = 1, w.style.pointerEvents = "auto", w.setAttribute("onClick", e)
                    } else {
                        (w = t.getElementById("loadMoreButton")) !== o && null !== w && (w.style.opacity = 0, w.style.pointerEvents = "none")
                    }
                else(w = t.getElementById("loadMoreButton")) !== o && null !== w && (w.style.opacity = 0, w.style.pointerEvents = "none");
                const h = t.getElementById("goToTopLink");
                h !== o && null !== h && (h.style.opacity = 0)
            }))
        }
    }, tbsForm.showSearchFilter = function() {
        t.getElementById("searchFilterPopupOpen").classList.add("tgb-tab-content-target"), t.getElementById("searchFilterPopupId").classList.add("tgb-tab-content"), t.getElementById("tb_search_text").focus(), t.onkeydown = function(r) {
            46 == (r = r || e.event).keyCode && (t.getElementById("tb_search_text").value = "")
        }
    }, tbsForm.showProductReviewTab = function() {
        t.getElementById("tbsiteReviewsHeaderSite").classList.remove("tbsite-reviews-main-header-tabs-active"), t.getElementById("tbsiteReviewsHeaderProduct").classList.add("tbsite-reviews-main-header-tabs-active"), tbsForm.tbActiveTab = "product", tbsForm.search_text = "";
        const e = t.getElementById("tb_search_text");
        null !== e && e !== o && (t.getElementById("tb_search_text").value = "", t.getElementById("searchFilterPopupOpen").classList.remove("tgb-tab-content-target"), t.getElementById("searchFilterPopupId").classList.remove("tgb-tab-content")), tbsForm.tbSiteReviewSort(), tbwTrack.reviewUserTrack("site_review")
    }, tbsForm.showSiteReviewTab = function() {
        t.getElementById("tbsiteReviewsHeaderProduct").classList.remove("tbsite-reviews-main-header-tabs-active"), t.getElementById("tbsiteReviewsHeaderSite").classList.add("tbsite-reviews-main-header-tabs-active"), tbsForm.tbActiveTab = "site", tbsForm.search_text = "";
        const e = t.getElementById("tb_search_text");
        null !== e && e !== o && (t.getElementById("tb_search_text").value = "", t.getElementById("searchFilterPopupOpen").classList.remove("tgb-tab-content-target"), t.getElementById("searchFilterPopupId").classList.remove("tgb-tab-content")), tbsForm.tbSiteReviewSort(), tbwTrack.reviewUserTrack("site_review")
    }, tbsForm.tbShowView = function(i) {
        tbsForm.tbActiveView = i;
        const a = t.getElementById("targetbay_review_popup_model");
        a !== o && null !== a && a.remove(), "list" == tbsForm.tbActiveView ? null !== t.getElementById("tbModalListLoader") && t.getElementById("tbModalListLoader") !== o && t.getElementById("tbModalListLoader").classList.add("tbay_pre_load_modal_show") : null !== t.getElementById("tbModalGridLoader") && t.getElementById("tbModalGridLoader") !== o && t.getElementById("tbModalGridLoader").classList.add("tbay_pre_load_modal_show");
        let n = _tbC.getCookie("user_loggedin");
        const s = _tbC.getCookie("tb_fetch_points");
        s !== o && null !== s && "" !== s && (n = _tbC.getCookieDecode("tb_fetch_points", "_ulogin")), tbsForm.reviewpage = 1;
        const l = `&index_name=${r.apiKey}&user_id=${tbsForm.tbUserId}&user_name=${tbsForm.tbUsername}&user_email=${tbsForm.tbEmail}&user_loggedin=${n}&page_url=${e.location.href}&sort_by=${tbsForm.tbSortSiteReview}&reviewpage=${tbsForm.reviewpage}&active_tab=${tbsForm.tbActiveTab}&active_view=${tbsForm.tbActiveView}&search_text=${tbsForm.search_text}&page_type=${tbsForm.tbPageType}&mobile_view=${tbsForm.mobileView}&snippets_status=${tbsForm.siteSnippets}&shop=${_tbC.shop}`,
            d = tbsForm.siteReviewWidgetTheme3Url + l;
        fetch(d).then((e => e.json())).then((e => {
            const r = e.content,
                i = t.createElement("div");
            if (i.setAttribute("id", "targetbay_review_popup_model"), i.innerHTML = r, _tbC.elEx("targetbay_reviews_landing")) var a = t.getElementById("targetbay_reviews_landing");
            else if (_tbC.elEx("targetbay_site_reviews")) a = t.getElementById("targetbay_site_reviews");
            tbsForm.insertAfter(a, i), setTimeout((function() {
                if ("grid" == tbsForm.tbActiveView && tbsForm.loadMasonryViaRequireJs(), "page" === tbsForm.tbPageType) t.getElementsByClassName("tbSiteReviews-modal-container-batch-page")[0].style.opacity = 1;
                else {
                    const e = t.getElementById("modalContainer");
                    null !== e && e !== o && e.classList.add("tbay_modal_show")
                }
                "list" == tbsForm.tbActiveView ? null !== t.getElementById("tbModalListLoader") && t.getElementById("tbModalListLoader") !== o && t.getElementById("tbModalListLoader").classList.remove("tbay_pre_load_modal_show") : null !== t.getElementById("tbModalGridLoader") && t.getElementById("tbModalGridLoader") !== o && t.getElementById("tbModalGridLoader").classList.remove("tbay_pre_load_modal_show"), "widget" === tbsForm.tbPageType && tbsForm.setWidgetTheme3Height()
            }), 500), "product" === tbsForm.tbActiveTab && (t.getElementById("tbsiteReviewsHeaderSite").classList.remove("tbsite-reviews-main-header-tabs-active"), t.getElementById("tbsiteReviewsHeaderProduct").classList.add("tbsite-reviews-main-header-tabs-active")), "grid" === tbsForm.tbActiveView ? (t.getElementById("tgbsiteGridListColors").classList.remove("targetbay-reviews-filter-active-list"), t.getElementById("tgbsiteGridListColors").className += " targetbay-reviews-filter-active-grid") : (t.getElementById("tgbsiteGridListColors").classList.remove("targetbay-reviews-filter-active-grid"), t.getElementById("tgbsiteGridListColors").className += " targetbay-reviews-filter-active-list");
            const n = t.querySelectorAll(".tb-filter-active-check");
            if (n.length > 0) {
                for (const e of n) e.style.opacity = 0;
                const e = t.querySelectorAll(".tb-text-highlight");
                if (e.length > 0)
                    for (const t of e) t.style.fontWeight = "";
                "oldest" == tbsForm.tbSortSiteReview ? (t.getElementById("tbSortOldest").style.opacity = 1, t.getElementById("tbTextOldest").style.fontWeight = "550") : "highest_rating" == tbsForm.tbSortSiteReview ? (t.getElementById("tbSortHigh").style.opacity = 1, t.getElementById("tbTextHigh").style.fontWeight = "550") : "lowest_rating" == tbsForm.tbSortSiteReview ? (t.getElementById("tbSortLow").style.opacity = 1, t.getElementById("tbTextLow").style.fontWeight = "550") : (t.getElementById("tbSortRecent").style.opacity = 1, t.getElementById("tbTextRecent").style.fontWeight = "550")
            }
        }))
    }, t.addEventListener("click", (function(e) {
        var r;
        null !== (r = t.getElementById("average-review-rating-bar")) && r !== o && r.classList.add("tbSiteReviewShow"), null !== (r = t.getElementById("tbactive-sort-by-toggle")) && r !== o && r.classList.remove("tbSiteReviewFilterShow")
    })), tbsForm.tbSiteReviewLoadMoreData = function(i) {
        t.getElementById("loadMoreButton").style.opacity = 0, t.getElementById("showMoreLoader").style.display = "inline-block";
        let a = _tbC.getCookie("user_loggedin");
        const n = _tbC.getCookie("tb_fetch_points");
        n !== o && null !== n && "" !== n && (a = _tbC.getCookieDecode("tb_fetch_points", "_ulogin")), "" !== tbsForm.tbEmail && null !== tbsForm.tbEmail && "" !== tbsForm.tbUsername && null !== tbsForm.tbUsername && (a = "1"), tbsForm.reviewpage = i || 1;
        const s = `&index_name=${r.apiKey}&user_id=${tbsForm.tbUserId}&user_name=${tbsForm.tbUsername}&user_email=${tbsForm.tbEmail}&user_loggedin=${a}&page_url=${e.location.href}&sort_by=${tbsForm.tbSortSiteReview}&active_tab=${tbsForm.tbActiveTab}&active_view=${tbsForm.tbActiveView}&reviewpage=${tbsForm.reviewpage}&search_text=${tbsForm.search_text}&advanced_filter=${tbsForm.advanced_filter}&page_type=${tbsForm.tbPageType}&mobile_view=${tbsForm.mobileView}&snippets_status=${tbsForm.siteSnippets}&shop=${_tbC.shop}`,
            l = tbsForm.siteReviewWidgetTheme3Url + s;
        fetch(l).then((e => e.json())).then((i => {
            const a = i.content;
            if ("grid" == tbsForm.tbActiveView) {
                const i = t.querySelector(".tb-grid");
                (s = t.createElement("div")).innerHTML = a;
                var n = s.querySelectorAll(".tb-grid-item");
                if (r.platform !== o && "mg2" !== r.platform) {
                    const e = new Masonry(i, {
                        itemSelector: ".tb-grid-item"
                    });
                    i.append(...n), e.appended(n)
                } else "function" == typeof e.requirejs && requirejs([`https://${tbConfig.apiStatus}.targetbay.com/js/tb-metro.pkgd.min.js`], (function(e) {
                    const t = new e(i, {
                        itemSelector: ".tb-grid-item"
                    });
                    i.append(...n), t.appended(n)
                }))
            } else {
                const e = t.querySelector(".tb-list");
                var s;
                (s = t.createElement("div")).innerHTML = a;
                n = s.querySelectorAll(".tb-list-item");
                e.append(...n)
            }
            const l = s.querySelectorAll("#tbSiteReviewShowMore");
            if (l.length > 0)
                if (l[0].value > 0) {
                    var d = t.getElementById("loadMoreButton");
                    const e = `tbsForm.tbSiteReviewLoadMoreData(${tbsForm.reviewpage+1})`;
                    d.style.opacity = 1, d.style.pointerEvents = "auto", d.setAttribute("onClick", e)
                } else {
                    (d = t.getElementById("loadMoreButton")) !== o && null !== d && (d.style.opacity = 0, d.style.pointerEvents = "none")
                }
            else(d = t.getElementById("loadMoreButton")) !== o && null !== d && (d.style.opacity = 0, d.style.pointerEvents = "none");
            t.getElementById("showMoreLoader").style.display = "none";
            const b = t.getElementById("goToTopLink");
            b !== o && null !== b && (b.style.opacity = 1), setTimeout((function() {
                "widget" === tbsForm.tbPageType && tbsForm.setWidgetTheme3Height()
            }), 500)
        }))
    }, tbsForm.reviewSearchData = function() {
        if (tbsForm.search_text = t.getElementById("tb_search_text").value, "" === tbsForm.search_text) return "";
        tbsForm.tbSiteReviewSort()
    }, tbsForm.clearSearchData = function() {
        "" !== t.getElementById("tb_search_text").value ? (tbsForm.clearSearchFilter(), tbsForm.tbSiteReviewSort()) : tbsForm.clearSearchFilter()
    }, tbsForm.clearSearchFilter = function() {
        tbsForm.search_text = "", t.getElementById("tb_search_text").value = "", t.getElementById("searchFilterPopupOpen").classList.remove("tgb-tab-content-target"), t.getElementById("searchFilterPopupId").classList.remove("tgb-tab-content")
    }, tbsForm.tbSiteReviewSort = function() {
        tbsForm.tbPageType = t.getElementById("targetbay_reviews_landing") ? "page" : "widget", "page" === tbsForm.tbPageType ? t.querySelector(".tbSiteReviews-modal-container-batch-page").style.opacity = 0 : t.getElementById("modalContainer") ? .classList.remove("tbay_modal_show");
        const o = t.getElementById(`tbModal${"list"===tbsForm.tbActiveView?"List":"Grid"}Loader`);
        o ? .classList.add("tbay_pre_load_modal_show");
        const i = _tbC.getCookie("tb_fetch_points") ? _tbC.getCookieDecode("tb_fetch_points", "_ulogin") : _tbC.getCookie("user_loggedin");
        tbsForm.tbSortSiteReview = t.getElementById("tb-sort-site-reviews") ? .value || "recent", tbsForm.reviewpage = 1;
        const a = new URLSearchParams({
                index_name: r.apiKey,
                user_id: tbsForm.tbUserId,
                user_name: tbsForm.tbUsername,
                user_email: tbsForm.tbEmail,
                user_loggedin: i,
                page_url: e.location.href,
                sort_by: tbsForm.tbSortSiteReview,
                reviewpage: tbsForm.reviewpage,
                active_tab: tbsForm.tbActiveTab,
                active_view: tbsForm.tbActiveView,
                search_text: tbsForm.search_text,
                page_type: tbsForm.tbPageType,
                mobile_view: tbsForm.mobileView,
                snippets_status: tbsForm.siteSnippets,
                shop: _tbC.shop
            }).toString(),
            n = `${tbsForm.siteReviewWidgetTheme3Url}&${a}`;
        fetch(n).then((e => e.json())).then((e => {
            const r = t.createElement("div");
            r.innerHTML = e.content;
            const i = t.querySelector(`.tb-${tbsForm.tbActiveView}`);
            i.innerHTML = "";
            const a = r.querySelectorAll(`.tb-${tbsForm.tbActiveView}-item`);
            i.append(...a), setTimeout((() => {
                    "grid" === tbsForm.tbActiveView && tbsForm.loadMasonryViaRequireJs(), "page" === tbsForm.tbPageType ? t.querySelector(".tbSiteReviews-modal-container-batch-page").style.opacity = 1 : t.getElementById("modalContainer") ? .classList.add("tbay_modal_show"), o ? .classList.remove("tbay_pre_load_modal_show"), "widget" === tbsForm.tbPageType && tbsForm.setWidgetTheme3Height()
                }), 500),
                function(e) {
                    if ("page" === tbsForm.tbPageType) {
                        t.querySelector(".tb-review-banner-section") ? .remove();
                        const r = e.querySelector(".tb-review-banner-section");
                        r && t.getElementById("tb-banner-header-section").appendChild(r)
                    }
                }(r),
                function(e) {
                    t.querySelector(".tb-site-review-filter-section") ? .remove();
                    const r = e.querySelector(".tb-site-review-filter-section");
                    r && (tbsForm.insertAfter(t.querySelector(".targetbay-rating-section"), r), t.getElementById("filterAdvancedShow").style.display = "inline-block", t.getElementById("advancedFilterSelected").style.display = "none")
                }(r),
                function(e) {
                    t.querySelector(".tb-show-review-enable-content-option") ? .remove();
                    const r = e.querySelector(".tb-show-review-enable-content-option");
                    tbsForm.insertAfter(t.querySelector(".tb-show-write-review-section"), r)
                }(r),
                function(e) {
                    t.querySelector(".tb-targetbay-reviews-open") ? .remove();
                    const r = e.querySelectorAll(".tb-targetbay-reviews-open");
                    r.length && t.querySelector(".targetbay-reviews-overall-star-ratings").append(...r);
                    t.getElementById("average-review-rating-bar") ? .remove();
                    const o = e.querySelector(".targetbay-reviews-star-rating-reviews-dist");
                    o && tbsForm.insertAfter(t.querySelector(".targetbay-reviews-overall-star-ratings"), o)
                }(r),
                function(e) {
                    t.querySelector(".targetbay-write-review-section") ? .remove();
                    const r = e.querySelector(".targetbay-write-review-section");
                    tbsForm.insertAfter(t.querySelector(".targetbay-filter-section"), r)
                }(r),
                function(e) {
                    const r = e.querySelector("#tbSiteReviewShowMore"),
                        o = t.getElementById("loadMoreButton");
                    r && parseInt(r.value) > 0 ? (o.style.opacity = 1, o.style.pointerEvents = "auto", o.setAttribute("onClick", `tbsForm.tbSiteReviewLoadMoreData(${tbsForm.reviewpage+1})`)) : (o.style.opacity = 0, o.style.pointerEvents = "none");
                    t.getElementById("goToTopLink").style.opacity = 0
                }(r),
                function() {
                    t.querySelectorAll(".tb-filter-active-check").forEach((e => e.style.opacity = 0)), t.querySelectorAll(".tb-text-highlight").forEach((e => e.style.fontWeight = ""));
                    const e = {
                        oldest: "tbSortOldest",
                        highest_rating: "tbSortHigh",
                        lowest_rating: "tbSortLow",
                        recent: "tbSortRecent"
                    }[tbsForm.tbSortSiteReview] || "tbSortRecent";
                    t.getElementById(e).style.opacity = 1, t.getElementById(`tbText${e.slice(6)}`).style.fontWeight = "550"
                }(),
                function(e) {
                    t.querySelector(".advacned-filter-modal-container") ? .remove();
                    const r = e.querySelector(".advacned-filter-modal-container");
                    tbsForm.insertAfter(t.querySelector(".targetbay-reviews-filter-and-advanced-main-search-in-float-r"), r)
                }(r)
        }))
    }, tbsForm.voteTheme3SiteReview = async function(e, t) {
        const o = ("undefined" != typeof Shopify ? Shopify.shop : "") || ("cp" === r ? .platform ? r.domain : ""),
            i = new URLSearchParams({
                index_name: tbsForm.tbkey,
                review_id: t,
                vote: e,
                user_id: tbsForm.tbUserId,
                shop: o,
                _t: tbsForm.accessToken
            });
        try {
            const e = await fetch(`${tbsForm.siteReviewVoteUrl}&${i}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });
            if (!e.ok) throw new Error("Network response was not ok");
            const r = await e.json();
            ! function(e, t, r) {
                s(`targetbay-site-review-yes-count-${e}`, `(${t})`), s(`targetbay-site-review-no-count-${e}`, `(${r})`)
            }(t, r.yes_count, r.no_count), tbwTrack.reviewUserTrack("site_review")
        } catch (e) {}
    }, tbsForm.voteTheme3ProductReview = async function(e, t) {
        const o = ("undefined" != typeof Shopify ? Shopify.shop : "") || (void 0 !== r && "cp" === r.platform ? r.domain : ""),
            i = new URLSearchParams({
                index_name: r.apiKey,
                review_id: t,
                vote: e,
                user_id: tbsForm.tbUserId,
                shop: o
            });
        try {
            const e = await fetch(`${tbsForm.productVoteUrl}&${i}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });
            if (!e.ok) throw new Error("Network response was not ok");
            const r = await e.json();
            ! function(e, t, r) {
                l(`targetbay-product-review-yes-count-${e}`, t), l(`targetbay-product-review-no-count-${e}`, r)
            }(t, r.yes_count, r.no_count), tbwTrack.reviewUserTrack("site_review")
        } catch (e) {}
    }, tbsForm.tbSiteWriteReviews = function(e, i) {
        if ("sf" === r.platform) {
            const e = t.getElementById("PageContainer");
            e && e.classList.add("tgb_shopify_change");
            const o = tbrForm ? .tbProductId || r ? .productId,
                i = t.getElementById(`product-${o}-reviews-desktop`);
            i && i.click()
        }
        const a = e,
            n = function(e, r) {
                const o = t.getElementById(e);
                return o || r
            }("tb-show-" + ("qa" === a ? "questions" : "site_review" === a ? "write-review" : "write-product-review"), "");
        r.platform !== o && "mg2" === r.platform && (d("tab-label-tracking-product-review", "tracking-product-review", "data item title active", "block"), d("tab-label-product.info.description", "product.info.description", "data item title", "none"), d("tab-label-product.info.how.to.use", "product.info.how.to.use", "data item title", "none"), d("tab-label-product.info.shipping.returns", "product.info.shipping.returns", "data item title", "none"), d("tab-label-product.info.review.form", "product.info.review.form", "data item title allow active", "block"), d("tab-label-description", "description", "data item title", "none"), d("tab-label-product.info.features.tab", "product.info.features.tab", "data item title", "none"), d("tab-label-product.info.specifications.tab", "product.info.specifications.tab", "data item title", "none"), d("tab-label-attachment.tab.new", "attachment.tab.new", "data item title", "none"), d("tab-label-product.info.prop65.tab", "product.info.prop65.tab", "data item title", "none")),
            function(e, t) {
                const r = {
                    product: {
                        noReviews: ["targetbay-no-reviews-cta-svg", "tb-reviews-loader-ring", "targetbay-no-reviews-btn-ring"],
                        writeReviews: ["targetbay-reviews-write-reviews-cta-svg", "tb-no-reviews-loader-ring", "targetbay-reviews-write-reviews-btn-ring"]
                    },
                    qa: {
                        writeReviews: ["targetbay-ask-qa-cta-svg", "targetbay-ask-no-qa-btn-ring", "tb-no-qa-loader-ring"],
                        noReviews: ["targetbay-ask-no-qa-cta-svg", "targetbay-ask-qa-btn-ring", "tb-qa-loader-ring"]
                    },
                    site: {
                        noReviews: [],
                        writeReviews: ["targetbay-site-reviews-write-reviews-cta-svg", "tb-site-reviews-loader-ring", "targetbay-site-reviews-write-reviews-btn-ring"]
                    }
                };
                if (e in r) {
                    const {
                        noReviews: o,
                        writeReviews: i
                    } = r[e];
                    "2" === t ? (b(o, "none"), b(i, "inline-block")) : (b(i, "none"), b(o, "inline-block"))
                }
            }(a, i), tbsForm.PopupEscToClose = a;
        const s = function(e) {
                let t = `&index_name=${tbsForm.tbkey}&active_tab=${e}&user_id=${tbsForm.tbUserId}`;
                "undefined" != typeof Shopify ? t += `&shop=${Shopify.shop}` : t += `&_t=${tbsForm.accessToken}`;
                return t
            }(a),
            l = `${tbsForm.writeReviewTheme3Url}${s}`;
        fetch(l).then((e => e.json())).then((e => {
            n.innerHTML = e.content,
                function(e, r, o) {
                    setTimeout((() => {
                        const e = "qa" === r ? "qaContentPopup" : "reviewRatingPopup",
                            i = "2" === o;
                        "qa" === r ? function(e, t) {
                            t ? (b(["targetbay-ask-qa-cta-svg", "targetbay-ask-no-qa-cta-svg"], "inline-block"), b(["targetbay-ask-qa-btn-ring", "tb-no-qa-loader-ring"], "none")) : (b(["targetbay-ask-no-qa-cta-svg", "targetbay-ask-qa-cta-svg"], "inline-block"), b(["targetbay-ask-no-qa-btn-ring", "tb-qa-loader-ring"], "none"))
                        }(0, i) : "product" === r ? function(e, t) {
                            t ? (b(["targetbay-no-reviews-cta-svg", "targetbay-ask-no-qa-cta-svg"], "inline-block"), b(["tb-no-reviews-loader-ring", "targetbay-no-reviews-btn-ring"], "none")) : (b(["targetbay-reviews-write-reviews-cta-svg"], "inline-block"), b(["tb-reviews-loader-ring", "targetbay-reviews-write-reviews-btn-ring"], "none"))
                        }(0, i) : (b(["targetbay-site-reviews-write-reviews-cta-svg"], "inline-block"), b(["targetbay-site-reviews-write-reviews-btn-ring", "tb-site-reviews-loader-ring"], "none")), t.getElementById(e).classList.add("tbay_write_review_modal_show")
                    }), 150)
                }(e.content, a, i)
        }))
    }, tbsForm.tbCloseWriteReviewPopup = function(e) {
        if ("product" === e) t.getElementById("tb-show-write-product-review").innerHTML = "", "" === tbsForm.autoPublish && tbrForm.productRatings();
        else if ("qa" === e) {
            t.getElementById("tb-show-questions").innerHTML = ""
        } else {
            t.getElementById("tb-show-write-review").innerHTML = "", "" === tbsForm.autoPublish && tbsForm.showSiteReviewTab()
        }
        tbsForm.PopupEscToClose = "", "sf" === r.platform && t.getElementById("PageContainer") !== o && null !== t.getElementById("PageContainer") && t.getElementById("PageContainer").classList.remove("tgb_shopify_change")
    }, tbsForm.tbWriteRatingPopup = function(e, r) {
        tbsForm.getReviewRating = e, c("tbay-collect-rating", !1), c("tbay-preview-rating", !0),
            function(e) {
                const r = "targetbay_reviews-write-reviews-notselected-display-none";
                [`tbWriteRating-${e}`, `tbWriteRatingText-${e}`].forEach((e => {
                    const o = t.getElementById(e);
                    o && o.classList.remove(r)
                }))
            }(tbsForm.getReviewRating), c("tbRatingNextButton", !0)
    }, tbsForm.uploadURLGenerate = function(e = "") {
        const i = `${`https://${"app"===r.apiStatus?"app.targetbay.com":`${r.apiStatus}-brv.feb14.net`}`}/api/v1/video/review/upload?_t=${tbConfig.publicKey}&shop=${_tbC.shop}&_t=${tbsForm.accessToken}`,
            a = new XMLHttpRequest;
        a.open("GET", `${i}&reviewId=${e}`), a.setRequestHeader("Content-Type", "application/json"), a.onreadystatechange = function() {
            if (4 === a.readyState && 200 === a.status) {
                const e = JSON.parse(a.responseText);
                e.uploadURL !== o && e.uid !== o && (t.getElementById("videoUID").value = e.uid, t.getElementById("uploadURL").value = e.uploadURL)
            }
            4 === a.readyState && 422 === a.status && (tbsForm.setPictureValidation(), t.getElementById("targetbay_review_upload_error").innerHTML += " Upload only pictures. ")
        }, a.send()
    }, tbsForm.setPictureValidation = function() {
        t.getElementById("targetbayReviewUpload").setAttribute("accept", "image/jpeg, image/png, image/jpg"), t.getElementById("uploadTitle").innerHTML = "Upload Pictures", t.getElementById("uploadSelectTitle").innerHTML = "Select Pictures", t.getElementById("uploadHeaderTitle").innerHTML = "Upload pictures and grab your offer!"
    }, tbsForm.setVideoPreview = function(e) {
        const r = t.getElementById("video"),
            o = t.getElementById("targetbayReviewUpload").files[e],
            i = URL.createObjectURL(o);
        r.src = i, t.getElementById("duration").value = t.querySelector("video") ? .duration
    }, t.addEventListener("change", (function(e) {
        e.target && "targetbayReviewUpload" === e.target.id && tbsForm.uploadFile(e)
    })), tbsForm.uploadFile = function(e) {
        const r = e.target,
            o = t.getElementById("targetbay_review_upload_error"),
            i = t.getElementById("targetbay_review_upload_file_count_error"),
            a = t.querySelector(".tb-client-Upload-Image"),
            n = t.getElementById("tb-upload-next-button"),
            s = t.getElementById("videoCount"),
            l = t.getElementById("imageCount");
        o.style.display = "none", o.innerHTML = "", i.style.display = "none", i.style.color = null, a.innerHTML = "", n.innerHTML = "Skip", s.value = 0, l.value = 0;
        const d = r.files;
        if (d.length > 6) return i.style.display = "block", i.style.color = "red", void(r.value = "");
        let b = 0,
            c = 0;
        for (let e = 0; e < d.length; e++) {
            const t = d[e],
                i = tbsForm.getFileType(t.type);
            let a = 5120,
                n = "5MB";
            if ("video" === i) b++, a = 102400, n = "100MB";
            else {
                if ("image" !== i) return o.innerHTML += `<br/>Unsupported file type: ${t.type}`, o.style.display = "block", void(r.value = ""); {
                    const e = ["image/jpeg", "image/png"],
                        i = t.name.split(".").pop().toLowerCase(),
                        a = ["jpg", "jpeg", "png"],
                        n = e.includes(t.type.toLowerCase()),
                        s = a.includes(i);
                    if (!n && !s) return o.innerHTML += "<br/>Only .jpg, .jpeg, and .png image formats are supported.", o.style.display = "block", void(r.value = "");
                    c++
                }
            }
            if (t.size / 1024 > a) return o.innerHTML += `<br/>The ${i} can be up to ${n} in size.`, o.style.display = "block", void(r.value = "")
        }
        if (s.value = b, l.value = c, b > 1 || c > 5) return o.innerHTML += "You can upload up to 5 pictures and 1 video.", o.style.display = "block", void(r.value = "");
        d.length > 0 && (n.innerHTML = "Next"), Array.from(d).forEach((e => {
            const t = new FileReader,
                r = tbsForm.getFileType(e.type);
            t.onload = function(e) {
                "image" === r ? tbsForm.addImg(e) : "video" === r && tbsForm.addVideo(e)
            }, t.readAsDataURL(e)
        }))
    }, tbsForm.getFileType = function(e) {
        return e.startsWith("image/") ? "image" : e.startsWith("video/") ? "video" : "unknown"
    }, tbsForm.addImg = function(e) {
        const r = t.querySelector(".tb-client-Upload-Image"),
            o = t.createElement("img");
        o.src = e.target.result, o.alt = "Uploaded Image", o.style.maxWidth = "100px", o.style.maxHeight = "100px", r.appendChild(o)
    }, tbsForm.addVideo = function(e) {
        const r = t.querySelector(".tb-client-Upload-Image"),
            o = t.createElement("video");
        o.src = e.target.result, o.controls = !0, o.style.maxWidth = "200px", o.style.maxHeight = "200px", r.appendChild(o)
    }, tbsForm.tbRatingPreviewNext = function(e) {
        if (t.getElementsByClassName("tb-client-Upload-Image")[0].innerHTML = "", t.getElementById("reviewRatingPopup").classList.remove("tbay_write_review_modal_show"), 1 == e) {
            t.getElementsByClassName("tb-client-Upload-Image")[0].innerHTML = "", t.getElementById("reviewImageUploadPopup").classList.add("tbay_write_review_modal_show")
        } else t.getElementById("reviewContentPopup").classList.add("tbay_write_review_modal_show")
    }, tbsForm.tbOpenCustomQuestionAnswerWidget = function(e, r, o = null) {
        const i = {
                index_name: tbsForm.tbkey,
                review_id: e,
                review_type: r,
                product_id: o,
                shop: _tbC.shop
            },
            a = new XMLHttpRequest;
        a.open("POST", tbsForm.customQaWidgetUrl), a.setRequestHeader("Content-Type", "application/json"), a.onreadystatechange = function() {
            if (4 === a.readyState && 200 === a.status) {
                const o = JSON.parse(a.responseText),
                    i = o.content;
                if ("error" !== o.message) {
                    if ("product_review" == r) var e = t.getElementById("tb-show-write-product-review");
                    else e = t.getElementById("tb-show-write-review");
                    t.getElementById("tbPreviewPopupLoader").classList.remove("tbay_write_review_modal_show"), e.innerHTML += i, t.getElementById("reviewCustomQuestionPopup-0").classList.add("tbay_write_review_modal_show")
                }
            }
        }, a.send(JSON.stringify(i))
    }, tbsForm.tbSubmitCustomQuestionData = function(e, r = "no") {
        const o = t.getElementById(`field_type_${e}`).value,
            i = t.getElementById(`displayText_${e}`).value;
        let a = "";
        if (2 == o || 4 == o) {
            const e = t.getElementsByName(i);
            a = 2 == o ? [] : "";
            let r = 0;
            for (let t = 0; t < e.length; t++) e[t].checked && (2 == o ? a[r] = e[t].value : a = e[t].value, r++)
        } else a = t.getElementById(`custom_qa_field_${e}`).value;
        if ("on" == JSON.parse(t.getElementById(`validation_rules_${e}`).value).required && ("" == a || a == [])) return void(t.getElementById(`custom_qa_field_error_${e}`).style.display = "block");
        "" !== t.getElementById("popup_review_id").value && (t.getElementById(`reviewId_${e}`).value = t.getElementById("popup_review_id").value);
        const n = {
                index_name: tbsForm.tbkey,
                review_id: t.getElementById(`reviewId_${e}`).value,
                review_type: t.getElementById(`reviewType_${e}`).value,
                question_id: t.getElementById(`questionId_${e}`).value,
                display_text: t.getElementById(`displayText_${e}`).value,
                shop: _tbC.shop,
                value: a
            },
            s = new XMLHttpRequest;
        s.open("POST", tbsForm.customQaSaveUrl), s.setRequestHeader("Content-Type", "application/json"), s.onreadystatechange = function() {
            if (4 === s.readyState && 200 === s.status) {
                JSON.parse(s.responseText);
                tbsForm.tbQA[n.question_id] = [], tbsForm.tbQA[n.question_id].push(n), t.getElementById(`reviewCustomQuestionPopup-${e}`).classList.remove("tbay_write_review_modal_show"), "no" == r ? t.getElementById(`reviewCustomQuestionPopup-${e+1}`).classList.add("tbay_write_review_modal_show") : (tbsForm.updateAnswerDiv(tbsForm.tbQA), t.getElementById("reviewThankuPopup").classList.add("tbay_write_review_modal_show"), tbsForm.tbQA = {})
            }
        }, s.send(JSON.stringify(n))
    }, tbsForm.tbMoveCusomQuestionTabCheck = function(e) {
        t.getElementById(`reviewCustomQuestionPopup-${e}`).classList.remove("tbay_write_review_modal_show"), t.getElementById("reviewCustomQuestionPopup-" + (e - 1)).classList.add("tbay_write_review_modal_show")
    }, tbsForm.tbBackMovePopup = function(e, r) {
        const i = t.getElementsByClassName("tb-client-Upload-Image");
        i.length > 0 && (i[0].innerHTML = "");
        const a = t.getElementById("targetbayReviewUpload");
        a && (a.value = ""), t.getElementById(e).classList.remove("tbay_write_review_modal_show"), t.getElementById(r).classList.add("tbay_write_review_modal_show"), "reviewRatingPopup" === r && (t.getElementById("tbay-preview-rating").style.display = "none", t.getElementById("tbay-collect-rating").style.display = "block", t.getElementById(`tbWriteRating-${tbsForm.getReviewRating}`).classList.add("targetbay_reviews-write-reviews-notselected-display-none"), t.getElementById(`tbWriteRatingText-${tbsForm.getReviewRating}`).classList.add("targetbay_reviews-write-reviews-notselected-display-none"), t.getElementById("tbRatingNextButton").classList.add("targetbay_reviews-write-reviews-notselected-display-none")), null !== t.getElementById("targetbay_review_upload_file_count_error") && t.getElementById("targetbay_review_upload_file_count_error") !== o && (t.getElementById("targetbay_review_upload_file_count_error").style.display = "none", t.getElementById("targetbay_review_upload_filetype_error").style.display = "none", t.getElementById("targetbay_review_upload_error").style.display = "none")
    }, tbsForm.tbSkipUploadPopup = function() {
        t.getElementById("reviewImageUploadPopup").classList.remove("tbay_write_review_modal_show"), t.getElementById("reviewContentPopup").classList.add("tbay_write_review_modal_show")
    }, tbsForm.tbBackMoveCheck = function(e) {
        e ? (t.getElementById("reviewContentPopup").classList.remove("tbay_write_review_modal_show"), t.getElementById("reviewImageUploadPopup").classList.add("tbay_write_review_modal_show")) : (t.getElementById("reviewContentPopup").classList.remove("tbay_write_review_modal_show"), t.getElementById("reviewRatingPopup").classList.add("tbay_write_review_modal_show")), t.getElementById("tbay-preview-rating").style.display = "none", t.getElementById("tbay-collect-rating").style.display = "block", t.getElementById(`tbWriteRating-${tbsForm.getReviewRating}`).classList.add("targetbay_reviews-write-reviews-notselected-display-none"), t.getElementById(`tbWriteRatingText-${tbsForm.getReviewRating}`).classList.add("targetbay_reviews-write-reviews-notselected-display-none"), t.getElementById("tbRatingNextButton").classList.add("targetbay_reviews-write-reviews-notselected-display-none")
    }, tbsForm.tbGetReviewData = function(e) {
        let r = 0,
            i = _tbC.getCookie("user_loggedin");
        const a = _tbC.getCookie("tb_fetch_points");
        a !== o && null !== a && "" !== a && (i = _tbC.getCookieDecode("tb_fetch_points", "_ulogin")), tbsForm.tbTitle = t.getElementById("targetbayReviewTitle").value.trim(), tbsForm.tbReview = t.getElementById("targetbayReview").value, tbsForm.tbSiteReviewValidationNew = t.getElementById("title_validator").value, "" === tbsForm.tbTitle && "yes" === tbsForm.tbSiteReviewValidationNew ? (t.getElementById("targetbay_review_title_error").style.display = "block", r = 1) : t.getElementById("targetbay_review_title_error").style.display = "none", "" === tbsForm.tbReview ? (t.getElementById("targetbay_review_error").style.display = "block", r = 1) : t.getElementById("targetbay_review_error").style.display = "none";
        const n = t.getElementById("targetbayReview");
        null !== n && n !== o && n.addEventListener("keyup", (function() {
            t.getElementById("targetbay_review_error").style.display = "none"
        }));
        const s = t.getElementById("targetbayReviewTitle");
        if (null !== s && s !== o && s.addEventListener("keyup", (function() {
                t.getElementById("targetbay_review_title_error").style.display = "none"
            })), 0 === r)
            if (t.getElementById("reviewContentPopup").classList.remove("tbay_write_review_modal_show"), "" === i) {
                t.getElementById("reviewUserDetailsPopup").classList.add("tbay_write_review_modal_show"), tbsForm.tbDisplayUserName = 1;
                t.getElementById("reviewerName").addEventListener("change", (function(e) {
                    tbsForm.tbDisplayUserName = e.target.value
                }))
            } else "product" === e ? tbsForm.saveProductReviewData() : tbsForm.saveReviewData()
    }, tbsForm.updateAnswerDiv = function(e) {
        let r, i = "";
        null !== t.getElementById("answerValue") && t.getElementById("answerValue") !== o && (t.getElementById("answerValue").innerHTML = ""), null !== t.getElementById("siteanswerValue") && t.getElementById("siteanswerValue") !== o && (t.getElementById("siteanswerValue").innerHTML = "");
        for (const o in e) {
            const a = e[o];
            for (let e = 0; e < a.length; e++) {
                const o = a[e];
                let n = "";
                n = null !== o.value ? Array.isArray(o.value) && o.value.length > 0 ? o.value.join(", ") : "string" == typeof o.value && "" !== o.value.trim() ? o.value : "N/A" : "N/A", i += `<p>${o.display_text} : ${n}</p>`, "product_review" === o.review_type && t.getElementById("answerValue") ? r = t.getElementById("answerValue") : "site_review" === o.review_type && t.getElementById("siteanswerValue") && (r = t.getElementById("siteanswerValue"))
            }
        }
        r && (r.innerHTML = i, i = "")
    }, tbsForm.getReviewedUserData = function(e) {
        const r = {
                firstName: t.getElementById("targetbayReviewUserFirstname"),
                lastName: t.getElementById("targetbayReviewUserLastname"),
                email: t.getElementById("targetbayReviewEmail"),
                firstNameError: t.getElementById("targetbay_review_first_name_error"),
                firstNameInvalid: t.getElementById("targetbay_review_first_name_invalid"),
                emailError: t.getElementById("targetbay_review_email_error"),
                emailInvalid: t.getElementById("targetbay_review_email_invalid"),
                reviewUserDetailsPopup: t.getElementById("reviewUserDetailsPopup")
            },
            o = (e, t, r, o) => "" === e ? (t.style.display = "block", r.style.display = "none", !1) : o(e) ? (t.style.display = "none", r.style.display = "none", !0) : (t.style.display = "none", r.style.display = "block", !1),
            i = (e, t, r) => {
                e && e.addEventListener("keyup", (() => {
                    t.style.display = "none", r.style.display = "none"
                }))
            };
        i(r.firstName, r.firstNameError, r.firstNameInvalid), i(r.email, r.emailError, r.emailInvalid), (() => {
            tbsForm.tbUsername = r.firstName.value.trim(), tbsForm.tbUserLastname = r.lastName.value, tbsForm.tbEmail = r.email.value;
            const e = o(tbsForm.tbUsername, r.firstNameError, r.firstNameInvalid, tbsForm.validateName),
                t = o(tbsForm.tbEmail, r.emailError, r.emailInvalid, tbrForm.validateEmail);
            return e && t
        })() && (r.reviewUserDetailsPopup.classList.remove("tbay_write_review_modal_show"), "product" === e ? tbsForm.saveProductReviewData() : tbsForm.saveReviewData())
    }, tbsForm.saveReviewData = function() {
        tbsForm.autoPublish = "", t.getElementById("tbPreviewPopupLoader").classList.add("tbay_write_review_modal_show");
        "" !== t.getElementById("customQaActive").value && tbsForm.tbOpenCustomQuestionAnswerWidget("", "site_review");
        const e = {
                index_name: tbsForm.tbkey,
                user_id: tbsForm.tbUserId,
                user_name: tbsForm.tbUsername,
                last_name: tbsForm.tbUserLastname,
                display_user_name: tbsForm.tbDisplayUserName,
                user_email: tbsForm.tbEmail,
                user_avatar: tbsForm.tbAvatar,
                review_rating: tbsForm.getReviewRating,
                review_title: tbsForm.tbTitle,
                review: tbsForm.tbReview,
                user_type: r.userName,
                title_validator_review: tbsForm.tbSiteReviewValidationNew,
                shop: _tbC.shop
            },
            o = new XMLHttpRequest;
        o.open("POST", tbsForm.siteReviewUrl), o.setRequestHeader("Content-Type", "application/json"), o.onreadystatechange = function() {
            if (4 === o.readyState && 200 === o.status) {
                const e = JSON.parse(o.responseText),
                    r = e.content;
                if (null !== t.getElementById("popup_review_id")) {
                    const {
                        revId: o
                    } = e;
                    t.getElementById("popup_review_id").value = o;
                    t.getElementById("reviewThankYouCustomQuestionPopup").innerHTML += r
                } else {
                    t.getElementById("tb-show-write-review").innerHTML += r, t.getElementById("tbPreviewPopupLoader").classList.remove("tbay_write_review_modal_show"), t.getElementById("reviewThankuPopup").classList.add("tbay_write_review_modal_show")
                }
                e.msg.length > 0 && (tbsForm.autoPublish = e.msg)
            }
        }, o.send(JSON.stringify(e))
    }, tbsForm.saveProductReviewData = function() {
        tbsForm.autoPublish = "", t.getElementById("tbPreviewPopupLoader").classList.add("tbay_write_review_modal_show");
        "" !== t.getElementById("customQaActive").value && tbsForm.tbOpenCustomQuestionAnswerWidget("", "product_review", tbrForm.tbProductId);
        const e = new FormData,
            i = t.getElementById("targetbayReviewUpload");
        if (null !== i) {
            const {
                files: t
            } = i;
            for (let r = 0; r < t.length; r++) {
                t[r];
                e.append("reviewupload[]", t[r])
            }
        }
        r.userName = "" !== r.userName && null !== r.userName ? r.userName : "anonymous", e.append("index_name", tbrForm.tbkey), e.append("product_id", tbrForm.tbProductId), e.append("product_name", tbrForm.tbProductName), e.append("user_id", tbrForm.tbUserId), e.append("user_name", tbsForm.tbUsername), e.append("last_name", tbsForm.tbUserLastname), e.append("display_user_name", tbsForm.tbDisplayUserName), e.append("user_email", tbsForm.tbEmail), e.append("user_avatar", tbrForm.tbAvatar), e.append("review_rating", tbsForm.getReviewRating), e.append("review_title", tbsForm.tbTitle), e.append("review", tbsForm.tbReview), e.append("template_type", "review"), e.append("product_image_url", tbrForm.tbProductImageUrl), e.append("product_page_url", tbrForm.tbProductUrl), e.append("user_type", r.userName), e.append("title_validator_review", tbsForm.tbSiteReviewValidationNew), e.append("shop", _tbC.shop), null !== t.getElementById("uploadURL") && t.getElementById("uploadURL") !== o && e.append("uploadURL", t.getElementById("uploadURL").value), null !== t.getElementById("videoUID") && t.getElementById("videoUID") !== o && e.append("uid", t.getElementById("videoUID").value);
        const a = new XMLHttpRequest;
        a.open("POST", tbrForm.reviewUrl), a.onreadystatechange = function() {
            if (4 === a.readyState && 200 === a.status) {
                const e = JSON.parse(a.responseText),
                    r = e.content;
                if (null !== t.getElementById("popup_review_id")) {
                    const o = e.productrevId;
                    t.getElementById("popup_review_id").value = o;
                    t.getElementById("reviewThankYouCustomQuestionPopup").innerHTML += r
                } else {
                    t.getElementById("tb-show-write-product-review").innerHTML += r, t.getElementById("tbPreviewPopupLoader").classList.remove("tbay_write_review_modal_show"), t.getElementById("reviewThankuPopup").classList.add("tbay_write_review_modal_show")
                }
                e.msg.length > 0 && (tbsForm.autoPublish = e.msg)
            }
        }, a.send(e)
    }, e.addEventListener("resize", (function(e) {
        tbsForm.setWidgetTheme3Height()
    })), tbsForm.setWidgetTheme3Height = function() {
        const e = {
                header: t.getElementById("targetbayReviewsModalHeader"),
                gridView: t.getElementById("tb-show-grid-view"),
                listView: t.getElementById("tb-show-list-view"),
                reviewModal: t.getElementById("reviewModal")
            },
            r = e => null !== e && e !== o,
            i = (e, t) => r(e) ? e.offsetHeight + t + 150 : null;
        if (r(e.header)) {
            const t = e.header.offsetHeight;
            i(e.gridView, t), i(e.listView, t)
        }
    }, tbsForm.setHeightOnLoad = function() {
        const r = {
                header: t.getElementsByClassName("tbSiteReviews-Header")[0],
                tab: t.getElementsByClassName("tb-SiteReviews-tab")[0],
                siteReviews: t.getElementById("tbSiteReviews"),
                reviewContainer: t.getElementById("tbSiteReviews-reviewContainer")
            },
            i = e => null !== e && e !== o,
            a = e => i(e) ? e.offsetHeight : 0,
            n = (e, t) => {
                i(e) && (e.style.height = `${t}px`)
            },
            {
                tbsHeight: s,
                tbsContainer: l
            } = (() => {
                const t = e.innerHeight - 150;
                let o = a(r.header);
                o += a(r.tab);
                return {
                    tbsHeight: t,
                    tbsContainer: t - o
                }
            })();
        n(r.siteReviews, s), n(r.reviewContainer, l)
    }, tbsForm.tbSiteReviewClosePopup = function() {
        const e = {
                body: t.body,
                siteReviews: t.getElementById("tbSiteReviews"),
                content: t.getElementById("tbSiteReviewsContent"),
                loader: t.getElementsByClassName("tbloaderContainer")[0]
            },
            r = e => null !== e && e !== o,
            i = (e, t) => {
                r(e) && e.classList.remove(t)
            },
            a = (e, t) => {
                r(e) && (e.style.display = t)
            };
        i(e.body, "tbSiteReviews-tbactive"), i(e.siteReviews, "tbSiteReview_popup"), a(e.content, "none"), a(e.loader, "none"), "undefined" != typeof tbwTrack && "function" == typeof tbwTrack.reviewUserTrack && tbwTrack.reviewUserTrack("site_review")
    }, tbsForm.voteSiteReview = function(e, r) {
        const o = new URLSearchParams({
            index_name: tbsForm.tbkey,
            review_id: r,
            vote: e,
            user_id: tbsForm.tbUserId,
            shop: _tbC.shop,
            _t: tbsForm.accessToken
        }).toString();
        fetch(`${tbsForm.siteReviewVoteUrl}&${o}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then((e => e.json())).then((e => {
            const o = e.yes_count > 1 ? "people" : "person",
                i = 0 === e.yes_count ? "none" : "block";
            t.querySelectorAll(`.tb-site-review-vote-${r}`).forEach((e => {
                e.style.display = i
            })), t.getElementById(`targetbay-site-review-yes-count-${r}`).textContent = `${e.yes_count} ${o} found this helpful`, t.getElementById(`targetbay-site-review-no-count-${r}`).textContent = e.no_count.toString(), tbwTrack.reviewUserTrack("site_review")
        })).catch((e => {}))
    }, tbsForm.voteProductReview = function(e, o) {
        const i = ("undefined" != typeof Shopify ? Shopify.shop : "") || (void 0 !== r && "cp" === r.platform ? r.domain : ""),
            a = new URLSearchParams({
                index_name: r.apiKey,
                review_id: o,
                vote: e,
                user_id: tbsForm.tbUserId,
                shop: i
            });
        fetch(`${tbsForm.productVoteUrl}&${a}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then((e => e.json())).then((e => {
            const r = e.yes_count > 1 ? "people" : "person",
                i = 0 === e.yes_count ? "none" : "block",
                a = `${e.yes_count} ${r} found this helpful`,
                n = (e, r) => {
                    t.querySelectorAll(e).forEach((e => {
                        e.innerHTML = r, e.style.display = i
                    }))
                };
            n(`.tb-product-review-vote-${o}`, a), n(`#targetbay-review-yes-count-${o}`, a), n(`.targetbay-product-review-yes-count-${o}`, a), n(`.targetbay-popup-review-yes-count-${o}`, a), tbwTrack.reviewUserTrack("site_review")
        })).catch((e => {}))
    }, tbsForm.orderComments = async function() {
        const o = "undefined" != typeof Shopify ? Shopify.shop : void 0 !== r && "cp" === r.platform ? r.domain : "",
            i = new URLSearchParams({
                index_name: tbsForm.tbkey,
                user_id: tbsForm.tbUserId,
                order_id: r.orderId,
                user_name: tbsForm.tbUsername,
                user_email: tbsForm.tbEmail,
                site_review_status: r.tbReview.tbSiteReview,
                product_review_status: r.tbReview.tbProductReview,
                checkOutOrderId: tbsForm.orderCheckout(),
                shop: o,
                _t: tbsForm.accessToken
            }).toString();
        try {
            const o = await fetch(`${tbsForm.orderCommentWidgetUrl}&${i}`, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });
            if (!o.ok) throw new Error("Network response was not ok");
            const a = await o.json(),
                n = t.getElementById("targetbay_order_reviews");
            n && a.content && (n.innerHTML = a.content, function() {
                t.onkeydown = e => {
                    "Escape" === e.key && (tbsForm.tbSiteReviewClosePopup(), tbsForm.tbOrderCommentClosePopup())
                };
                const r = t.getElementById("targetbay_order_comments");
                e.onclick = e => {
                    e.target === r && (r.style.display = "none")
                }
            }(), function(e) {
                const {
                    comment_type: o,
                    product_review_type: i,
                    custom_order_command: a
                } = e, n = t.getElementById("tb_order_product_image");
                if ("product_review" === o)
                    if (n && (n.style.display = "block"), a) ! function(e) {
                        if (!Shopify || !Shopify.checkout || !Shopify.checkout.line_items) return;
                        const r = Shopify.checkout.line_items;
                        let o = r[0];
                        "most_expensive_product" === e && (o = r.reduce(((e, t) => t.price > e.price ? t : e), o));
                        const i = t.getElementById("order_product_image");
                        i && (i.src = o.image_url);
                        const a = t.getElementById("tb_product_title");
                        a && (a.textContent = `${o.title}`)
                    }(i);
                    else {
                        const e = new URLSearchParams({
                            index_name: tbsForm.tbkey,
                            order_id: r.orderId,
                            checkOutOrderId: tbsForm.orderCheckout()
                        }).toString();
                        tbsForm.tbOrderCommentProductDetails(e)
                    }
                else n && (n.style.display = "none")
            }(a))
        } catch (e) {}
    }, tbsForm.customerSalesTracking = function() {
        var e = 0,
            t = 0,
            i = null,
            a = 0;
        const n = null;
        if ("sf" === r.platform) {
            if ("undefined" == typeof Shopify || void 0 === Shopify.checkout || !Shopify.checkout.line_items || !Array.isArray(Shopify.checkout.line_items)) return;
            const r = Shopify.checkout.line_items;
            n = Shopify.checkout.order_id, a = r.length;
            const s = Shopify.checkout.discount;
            s !== o && null !== s && (i = s.code);
            for (let o = 0; o < r.length; o++) e += r[o].quantity, t += r[o].price
        }
        const s = new URLSearchParams({
                index_name: r.apiKey,
                user_id: tbsForm.tbUserId,
                order_id: r.orderId,
                user_name: tbsForm.tbUsername,
                widget_clicked: tbsForm.widgetClicked,
                utm_token: tbsForm.widgetClickUtmToken,
                utm_source: tbsForm.tokenSource,
                utm_medium: tbsForm.tokenUtm,
                product_id: tbrForm.tbProductId,
                user_email: tbsForm.tbEmail,
                checkOutOrderId: n,
                product_count: a,
                quantity: e,
                price: t,
                coupon: i,
                shop: _tbC.shop
            }).toString(),
            l = `${tbsForm.customerSalesTrackingUrl}&${s}`;
        _tbC.fetchData(l, {}, "", "GET").then((e => {})).catch((e => {}))
    }, tbsForm.tbOrderCommentClick = function() {
        let o = 0;
        const i = t.getElementsByName("targetbayOrderSiteRating");
        let a = "";
        for (var n = 0, s = i.length; n < s; n++) i[n].checked && (a = i[n].value);
        const l = t.getElementById("targetbayOrderSiteTitle").value,
            d = t.getElementById("targetbayOrderSiteReview").value,
            b = t.getElementById("title_validator_review_new").value;
        "" === a ? (t.getElementById("targetbay_order_site_rating_error").style.display = "block", o = 1) : t.getElementById("targetbay_order_site_rating_error").style.display = "none", "" === l && "yes" === b ? (t.getElementById("targetbay_order_site_title_error").style.display = "block", o = 1) : t.getElementById("targetbay_order_site_title_error").style.display = "none", "" === d ? (t.getElementById("targetbay_order_site_review_error").style.display = "block", o = 1) : t.getElementById("targetbay_order_site_review_error").style.display = "none";
        if ("site_review" === t.getElementById("template_type").value);
        else;
        if ("undefined" != typeof Shopify && null !== Shopify) var c = Shopify.checkout.line_items[0];
        else c = "";
        const m = {
            index_name: tbsForm.tbkey,
            user_id: tbsForm.tbUserId,
            user_name: tbsForm.tbUsername,
            user_email: tbsForm.tbEmail,
            user_avatar: tbsForm.tbAvatar,
            review_rating: a,
            review_title: l,
            review: d,
            user_type: r.userName,
            type_temp: b,
            template_type: "review",
            order_id: r.orderId ? ? Shopify.checkout.order_id,
            checkOutOrderId: tbsForm.orderCheckout(),
            shop: _tbC.shop,
            order_details: c
        };
        if (0 === o) {
            for (n = 0, s = i.length; n < s; n++) i[n].checked && (i[n].checked = !1);
            t.getElementById("targetbayOrderSiteTitle").value = "", t.getElementById("targetbayOrderSiteReview").value = "", t.getElementsByClassName("targetbay_order_comment_modal-body")[0].style.display = "none", t.getElementById("targetbay_order_comments").style.display = "none";
            const r = new XMLHttpRequest;
            r.open("POST", tbsForm.saveorderCommentUrl), r.setRequestHeader("Content-Type", "application/json"), r.onreadystatechange = function() {
                if (4 === r.readyState && 200 === r.status) {
                    const o = JSON.parse(r.responseText);
                    "success" === o.message && 1 == o.thanksMsg && (t.getElementById("targetbay_order_comments").style.display = "flex", t.getElementById("tb_thanks_message").style.display = "block", e.setTimeout((function() {
                        t.getElementById("tb_thanks_message").style.display = "none", tbsForm.tbOrderCommentClosePopup()
                    }), 5e3))
                }
            }, r.send(JSON.stringify(m))
        }
    }, tbsForm.tbOrderCommentClosePopup = function() {
        t.getElementById("targetbay_order_comments").style.display = "none"
    }, tbsForm.tbOrderCommentProductDetails = function(e) {
        const i = new XMLHttpRequest;
        "undefined" != typeof Shopify && Shopify.shop;
        void 0 !== r && "cp" === r.platform && r.domain, e.includes(`shop=${_tbC.shop}`) || (e = `&${e}&shop=${_tbC.shop}`), i.open("GET", tbsForm.rderCommentProductUrl + e), i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.onreadystatechange = function() {
            if (4 === i.readyState && 200 === i.status) {
                const r = JSON.parse(i.responseText);
                if (r.product_image !== o && null !== r.product_image && "" !== r.product_title && "" !== r.product_image) {
                    t.getElementById("order_product_image").src = r.product_image, t.getElementById("tb_product_title").innerHTML = r.product_title
                } else setTimeout((function() {
                    tbsForm.tbOrderCommentProductDetails(e)
                }), 1e3)
            }
        }, i.send()
    }, tbsForm.showReviewImagePopup = function(r, o) {
        t.getElementById(`user-image-${r}-${o}`).style.display = "block", _tbC.elEx(`tb-review-popup-admincomment-button-${r}-${o}`) && (t.getElementById(`tb-review-popup-admincomment-button-${r}-${o}`).style.display = "block", t.getElementById(`tb-more-comments-${r}-${o}`).style.display = "none"), t.onkeydown = function(i) {
            27 == (i = i || e.event).keyCode && (t.getElementById(`user-image-${r}-${o}`).style.display = "none")
        }
    }, tbsForm.closeReviewImagePopup = function(e, r) {
        t.getElementById(`user-image-${e}-${r}`).style.display = "none", _tbC.elEx(`tb-review-popup-admincomment-button-${e}-${r}`) && (t.getElementById(`tb-review-popup-admincomment-button-${e}-${r}`).style.display = "block", t.getElementById(`tb-more-comments-${e}-${r}`).style.display = "none")
    }, tbsForm.showComments = function(e, r) {
        _tbC.elEx(`tb-review-popup-admincomment-button-${e}-${r}`) && (t.getElementById(`tb-more-comments-${e}-${r}`).style.display = "block", t.getElementById(`tb-review-popup-admincomment-button-${e}-${r}`).style.display = "none")
    }, tbrForm.openSiteOptions = function() {
        const e = t.getElementById("tbactive-site-div");
        "none" === e.style.display ? e.style.display = "block" : e.style.display = "none"
    }, tbrForm.reviewTwoSite = function(e, r) {
        t.getElementById("tb-sort-site-reviews").value = e, t.getElementById("tbactive-site").innerHTML = r, t.getElementById("tbactive-site-div").style.display = "none", tbsForm.sortReviews()
    }, tbrForm.reviewThreeSite = function(e, r) {
        t.getElementById("tb-sort-site-reviews").value = e, t.getElementById("tbactive-site").innerHTML = r, tbsForm.tbSiteReviewSort()
    }, tbsForm.sortReviews = function() {
        const e = t.getElementById("targetbay-site-reviews"),
            r = t.getElementById("targetbay-product-reviews");
        !e || "block" !== e.style.display && "" !== e.style.display ? !r || "block" !== r.style.display && "" !== r.style.display ? tbsForm.getSiteReviews("sorting") : tbsForm.getProductReviews("sorting") : tbsForm.getSiteReviews("sorting")
    };
    const m = {
        ".targetbay-review-badges": "review_badge",
        ".targetbay-badge": "review_badge",
        ".targetbay-photo-carousel-buy-btn": "review_customer_gallery",
        ".targetbay-reviews-product-list-view-products": "review",
        ".tb-singleslide-prodname": "review_carousel"
    };
    Object.keys(m).forEach((function(e) {
        const r = m[e];
        t.querySelectorAll(e).forEach((function(e) {
            e.addEventListener("click", (function() {
                tbsForm.tbSalesTracking(r);
                const e = tbsForm.tbUserId;
                _tbC.setCookie("gid", e), _tbC.setCookie("data_status", "data_not_sent")
            }))
        }))
    })), tbsForm.tbSalesTrackingEmail = function() {
        const t = new URLSearchParams(e.location.search);
        if (t.has("utm_source") || t.has("utm_medium") || t.has("utm_campaign") || t.has("utm_token")) {
            const e = "email_review";
            tbsForm.tbSalesTracking(e);
            const t = tbsForm.tbUserId;
            _tbC.setCookie("gid", t), _tbC.setCookie("data_status", "data_not_sent")
        }
    }, tbsForm.tbSalesTracking = async function(e) {
        const t = _tbC.shop ? ? "",
            o = "undefined" != typeof Shopify ? Shopify.shop : t,
            i = {
                user_id: tbsForm.tbUserId,
                user_email: tbsForm.tbEmail,
                shop: o,
                user_type: r.userName,
                type: e,
                user_name: tbsForm.tbUsername
            };
        try {
            (await fetch(tbsForm.tbSalesTrackingUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=UTF-8"
                },
                body: JSON.stringify(i)
            })).ok
        } catch (e) {}
    }, e.onload = function() {
        const e = _tbC.getCookie("data_status");
        tbsForm.tbEmail && "data_not_sent" === e && tbsForm.guestCustomerActivity()
    }, tbsForm.guestCustomerActivity = async function() {
        const e = r.userMail,
            t = _tbC.getCookie("gid"),
            o = _tbC.getCookie("data_status");
        if (e && "data_not_sent" === o) {
            const r = {
                user_email: e,
                guest_user_id: t,
                shop: "undefined" != typeof Shopify ? Shopify.shop : "",
                user_id: tbsForm.tbUserId,
                user_name: tbsForm.tbUsername
            };
            try {
                (await fetch(tbsForm.tbGuestTrackingUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8"
                    },
                    body: JSON.stringify(r)
                })).ok && _tbC.setCookie("data_status", "data_sent")
            } catch (e) {}
        }
    }, tbsForm.init()
}(window, document, tbConfig)), void 0 === tbConfig.instagramLoaded && (tbConfig.instagramLoaded = !0, function(e, t, r, o) {
    e._bvIg = e._bvIg || {}, _bvIg.init = function() {
        _tbC.setCookie("bv_ig_home_diplay", ""), _tbC.setCookie("bv_ig_gallery_diplay", "");
        (e => {
            const t = `https://${"app"===r.apiStatus?"app.targetbay.com":`${r.apiStatus}-brv.feb14.net`}/api/v1/instagram`,
                o = e ? `?shop=${e}` : `?_t=${r.publicKey}`;
            _bvIg.productPageUrl = `${t}/products/${r.productId}${o}`, _bvIg.homePageUrl = `${t}/home${o}`
        })(_tbC.shop), _bvIg.loadIfVisible()
    }, _bvIg.colageTemplate = function(e, t, r, o, i) {
        const a = [];
        for (let o = e; o < t; o++) {
            const e = i[o],
                t = e.s3_image_url || e.media_url,
                n = e.s3_fullimage_url || t,
                s = r.replace(/#id/g, o + 1).replace(/#username/g, e.username || "").replace(/#mediacontent/g, e.media_content || "").replace(/#mediaurl/g, t || "").replace(/#mediafullurl/g, n || "").replace(/#likecount/g, e.like_count || "0").replace(/#productname/g, e.product_details ? .name || "").replace(/#productimage/g, e.product_details ? .image || "").replace(/#producturl/g, e.product_details ? .product_url || "");
            a.push(s)
        }
        const n = i[e],
            s = n.s3_image_url || n.media_url,
            l = o.replace(/#id/g, e).replace(/#username/g, n.username || "").replace(/#mediacontent/g, n.media_content || "").replace(/#mediaurl/g, s || "").replace(/#likecount/g, n.like_count || "0").replace(/#productname/g, n.product_details ? .name || "").replace(/#productimage/g, n.product_details ? .image || "").replace(/#producturl/g, n.product_details ? .product_url || "");
        return {
            bodyImage: a.join(""),
            headerImage: l
        }
    }, _bvIg.formColageImages = function(e) {
        const t = e.productCount,
            r = {
                5: {
                    header: "#header1",
                    content: "#content1"
                },
                10: {
                    header: "#header1",
                    content: "#content1",
                    secondHeader: "#header2",
                    secondContent: "#content2"
                }
            }[t] || {};

        function o(r, o, i) {
            const a = _bvIg.colageTemplate(r, t, e.content.body, e.content.header, e.data);
            e.layout = e.layout.replace(o, a.headerImage), e.layout = e.layout.replace(i, a.bodyImage)
        }
        return 5 !== t && 10 !== t || (o(0, r.header, r.content), 10 === t && o(5, r.secondHeader, r.secondContent)), e.layout
    }, _bvIg.galleryTemplate = function(e) {
        let t = [];
        return e.data.length > 0 && (t = e.data.map(((t, r) => {
            const o = t.s3_image_url || t.media_url,
                i = t.s3_fullimage_url || o,
                a = r + 1;
            return e.content.replace(/#id/g, a).replace(/#username/g, t.username || "").replace(/#mediacontent/g, t.media_content || "").replace(/#mediaurl/g, o || "").replace(/#mediafullurl/g, i || "").replace(/#likecount/g, t.like_count || "0").replace(/#productname/g, t.product_details ? .name || "").replace(/#productimage/g, t.product_details ? .image || "").replace(/#producturl/g, t.product_details ? .product_url || "")
        }))), e.layout = e.layout.replace("#IMAGES", t.join("")), e.layout
    }, _bvIg.productPageImages = function() {
        _tbC.fetchData(_bvIg.productPageUrl, {}, "", "GET").then((e => {
            _bvIg.parseResponse(e)
        })).catch((e => {}))
    }, _bvIg.homePageImages = function(e) {
        const t = _tbC.getCachedData("bv_instagram_home_data2"),
            o = `index_name=${r.apiKey}`;
        t ? _bvIg.parseResponse(t) : _tbC.fetchData(_bvIg.homePageUrl, {}, o, "GET").then((e => {
            _bvIg.parseResponse(e)
        })).catch((e => {}))
    }, _bvIg.parseResponse = function(e) {
        if (0 === e.productCount) return !1;
        const r = t.getElementById("targetbay_instagram_images"),
            o = t.querySelector("body");
        if (r) {
            const {
                productCount: t,
                content: i,
                modal: a
            } = e, n = e => r.insertAdjacentHTML("afterbegin", e);
            t > 2 && ![5, 10].includes(t) ? n(_bvIg.galleryTemplate(e)) : [5, 10].includes(t) ? n(_bvIg.formColageImages(e)) : n(i), a && o.insertAdjacentHTML("beforeend", a)
        }
        i()
    };
    const i = () => {
        const r = t.getElementById("tbg_open_insta_popup_modal"),
            o = t.getElementsByClassName("tbg_single_cont"),
            i = () => {
                r.style.display = "none", a(!1)
            },
            a = e => {
                const r = t.getElementsByClassName("tbg_insta_mainimg_cnt")[0];
                e && r.offsetHeight > 100 ? r.classList.add("tbg_insta_mainimg_cntext") : r.classList.remove("tbg_insta_mainimg_cntext")
            },
            n = e => {
                const r = parseInt(s) + e,
                    o = t.getElementById(`tbg-${r}`);
                o && o.click()
            };
        let s = 0;
        Array.from(o).forEach((e => {
            e.addEventListener("click", (function() {
                r.style.display = "block", s = this.getAttribute("data-id"), (e => {
                    e.getAttribute("data-id");
                    const r = e.getAttribute("data-content"),
                        o = e.getAttribute("data-fullimage"),
                        i = e.getAttribute("data-username"),
                        a = e.getAttribute("data-productimage"),
                        n = e.getAttribute("data-productname"),
                        s = e.getAttribute("data-producturl");
                    t.getElementById("main-insta-image").setAttribute("src", o), t.getElementById("insta-content").innerHTML = r, t.getElementById("user_follow_link").setAttribute("href", `https://www.instagram.com/${i}`), t.getElementById("tbg_insta_posted_usertag").innerText = `@${i}`, n ? (t.getElementsByClassName("tbg_modal_header")[0].style.display = "block", t.getElementById("product-image").setAttribute("src", a), t.getElementById("product-url").setAttribute("href", s), t.getElementById("tbg_modal_prodname").textContent = n) : t.getElementsByClassName("tbg_modal_header")[0].style.display = "none"
                })(this)
            }))
        })), t.getElementsByClassName("tbg_modal_close")[0].onclick = i, t.getElementsByClassName("left-arrow")[0].addEventListener("click", (() => n(-1)), !1), t.getElementsByClassName("right-arrow")[0].addEventListener("click", (() => n(1)), !1), t.onkeyup = e => {
            "block" === r.style.display && (37 === e.keyCode && n(-1), 39 === e.keyCode && n(1))
        }, e.onclick = e => {
            e.target === r && i()
        }
    };
    e.addEventListener("scroll", (function() {
        _bvIg.loadIfVisible()
    })), _bvIg.loadIfVisible = function() {
        if (r.tbInstagram !== o && !0 === r.tbInstagram) {
            "/" === e.location.pathname && _tbC.loadIfVisible("targetbay_instagram_images", "bv_ig_home_diplay", "id") && _bvIg.homePageImages(), r.productId !== o && "" !== r.productId && _tbC.loadIfVisible("targetbay_instagram_images", "bv_ig_gallery_diplay", "id") && _bvIg.productPageImages()
        }
    }, _bvIg.init()
}(window, document, tbConfig)), void 0 === tbConfig.carouselLoaded && (tbConfig.carouselLoaded = !0, function(e, t, r, o) {
    let i;
    e._tbCr = {}, _tbCr.slideMarginLeft = _tbCr.slideMarginRight = _tbCr.click = _tbCr.page = _tbCr.clickVertical = _tbCr.slideMarginBottom = _tbCr.slideMarginTop = 0, _tbCr.count = 10, _tbCr.timer = null, _tbCr.apiCallCount = 0, _tbCr.maxApiCalls = 3, i = r.publicKey !== o && null !== r.publicKey ? r.publicKey : _tbC.b64EncodeUnicode(`_a=${r.apiToken}&_i=${r.apiKey}`), _tbCr.publicKey = i, _tbCr.init = function() {
        _tbC.getUser(), _tbCr.tbUserId = _tbC.tbUserId, _tbC.setCookie("bv_review_carousel_display", ""), _tbC.$("[class=tb_review_carousel]").length > 0 && (_tbC.loadIfVisible("tb_review_carousel", "bv_review_carousel_display") && _tbCr.initReviewCarouselWidget(), e.addEventListener("scroll", (function() {
            _tbC.loadIfVisible("tb_review_carousel", "bv_review_carousel_display") && _tbCr.initReviewCarouselWidget()
        })))
    };
    const a = function(e) {
        e.forEach((({
            status: e,
            layout_class: t,
            content: r,
            settings: o
        }) => {
            if ("success" === e) {
                _tbC.$1(`[data-review-id=${t}]`).innerHTML = r;
                const {
                    limit: e,
                    productType: i,
                    reviewType: a,
                    layout: n,
                    avgStar: s,
                    enableAutoScrollForWeb: l,
                    enableAutoScrollForMobile: d
                } = o;
                Object.assign(_tbCr, {
                    limit: e,
                    productType: i,
                    reviewType: a,
                    layout: n,
                    avgStar: s,
                    limitCl: e,
                    ScrollStatusForWeb: ["yes", "no"].includes(l) ? l : "yes",
                    ScrollStatusForMobile: ["yes", "no"].includes(d) ? d : "yes"
                })
            }
        }));
        const t = _tbC.$("[class=tb-singleslide]").length,
            r = e => {
                e ? (_tbCr.manageDivParts(), _tbCr.addEventListenerHorizontal(), 0 === _tbCr.click && _tbCr.disableDiv(["tb-revcarousel-slinavleft-nav", "tb-revcarousel-slinavleft"]), t <= _tbCr.limit && (_tbCr.disableDiv(["tb-revcarousel-slinavright-nav", "tb-revcarousel-slinavright"]), clearInterval(_tbCr.timer))) : (_tbCr.manageVerticalDivParts(), _tbCr.addEventListenerVertical(), 0 === _tbCr.clickVertical && _tbCr.disableDiv(["tb-revcarousel-slinavtop-nav", "tb-revcarousel-slinavtop"]), t <= _tbCr.limit && (_tbCr.disableDiv(["tb-revcarousel-slinavbottom-nav", "tb-revcarousel-slinavbottom"]), clearInterval(_tbCr.timer))), _tbCr.autoScrollCheck(_tbCr.ScrollStatusForMobile, _tbCr.ScrollStatusForWeb)
            };
        "tb-recar-horizontal" === _tbCr.layout ? r(!0) : "tb-recar-vertical" === _tbCr.layout && r(!1);
        const o = _tbC.$1("[id=targetbay_review_carousel]");
        o.addEventListener("mouseover", (() => {
            clearInterval(_tbCr.timer), delete _tbCr.timer
        })), o.addEventListener("touchstart", (() => {
            clearInterval(_tbCr.timer), delete _tbCr.timer
        }), {
            passive: !0
        }), o.addEventListener("touchend", (() => {
            _tbCr.autoScrollCheck(_tbCr.ScrollStatusForMobile, _tbCr.ScrollStatusForWeb)
        }), {
            passive: !0
        }), o.addEventListener("mouseleave", (() => {
            _tbCr.autoScrollCheck(_tbCr.ScrollStatusForMobile, _tbCr.ScrollStatusForWeb)
        }))
    };
    _tbCr.initReviewCarouselWidget = function() {
        _tbCr.reviewWidgetUrl = `${_tbC.webhookUrl}reviews/carousel?_t=${_tbCr.publicKey}`;
        const e = _tbC.$("[class=tb_review_carousel]"),
            t = [];
        for (let r = 0; r <= e.length - 1; r++) "" !== e[r].getAttribute("data-review-id") && e[r].getAttribute("data-review-id") !== o && t.push(e[r].getAttribute("data-review-id"));
        const i = _tbC.$("[class=tb_cart_item]"),
            n = [];
        for (let e = 0; e <= i.length - 1; e++) "" !== i[e].getAttribute("data-product-id") && i[e].getAttribute("data-product-id") !== o && n.push(i[e].getAttribute("data-product-id"));
        const s = {
                index_name: r.apiKey,
                user_id: _tbCr.tbUserId,
                carousel: t,
                productIds: n,
                shop: _tbC.shop
            },
            l = "bv_review_carousel_data",
            d = _tbC.getCachedData(l);
        d ? a(d) : _tbC.fetchData(_tbCr.reviewWidgetUrl, s, l, "POST").then((e => {
            a(e)
        })).catch((e => {}))
    }, _tbCr.manageDivParts = function() {
        const e = parseInt(_tbC.$("[class=tb-singleslide]").length);
        _tbCr.divWidth = parseInt(_tbC.$1("[class=tb-revcarousel-carousel-inn]").clientWidth) / _tbCr.limit, _tbCr.checkWidgetLimit();
        const t = _tbCr.divWidth * e;
        _tbC.$1("[class=tb-revcarousel-carslide]").style.setProperty("width", `${t}px`, "important");
        for (let t = 0; t < e; t++) _tbC.$("[class=tb-singleslide]")[t].setAttribute("style", `width : ${_tbCr.divWidth}px !important`)
    }, _tbCr.manageVerticalDivParts = function() {
        const e = parseInt(_tbC.$("[class=tb-singleslide]").length);
        _tbCr.carouselHeight = _tbCr.maxHeight(_tbC.$("[class=tb-singleslide]")), _tbCr.divHeight = _tbCr.carouselHeight * parseInt(_tbCr.limit), _tbCr.totalDivHeight = _tbCr.divHeight * _tbCr.reviewTotal, _tbC.$1("[class=tb-revcarousel-carousel-inn]").style.setProperty("height", `${_tbCr.divHeight}px`, "important"), _tbC.$1("[class=tb-revcarousel-carslide]").style.setProperty("height", `${_tbCr.totalDivHeight}px`, "important");
        for (let t = 0; t < e; t++) _tbC.$("[class=tb-singleslide]")[t].setAttribute("style", `height : ${_tbCr.carouselHeight}px !important`)
    }, _tbCr.horizonatalRight = function() {
        _tbCr.slideMarginLeft += 1, _tbCr.moveHorizontal()
    }, _tbCr.horizonatalLeft = function() {
        _tbCr.slideMarginRight += 1, _tbCr.moveHorizontal()
    }, _tbCr.verticalBottom = function() {
        _tbCr.slideMarginBottom += 1, _tbCr.moveVertical()
    }, _tbCr.verticalTop = function() {
        _tbCr.slideMarginTop += 1, _tbCr.moveVertical()
    }, _tbCr.moveCarousel = function(e) {
        const t = "horizontal" === e,
            o = t ? "click" : "clickVertical",
            i = t ? "slideMarginLeft" : "slideMarginTop",
            a = t ? "slideMarginRight" : "slideMarginBottom",
            n = t ? "divWidth" : "divHeight",
            s = t ? "margin-left" : "margin-top",
            l = t ? "widgetLeft" : "widgetTop";
        _tbCr[o] = _tbCr[i] - _tbCr[a], _tbCr[l] = t ? -_tbCr[n] * _tbCr[o] : _tbCr[n] * _tbCr[o] / (_tbCr.limit || 1);
        const d = _tbC.$1("[class=tb-revcarousel-carslide]");
        d && d.style.setProperty(s, `${_tbCr[l]}px`, "important");
        const b = parseInt(_tbC.$("[class=tb-singleslide]").length);
        if (function(e, t, r, o, i) {
                const a = 0 === t,
                    n = t === o - r,
                    s = _tbC.$1("[id=tbVgPhCrprevArrow]"),
                    l = _tbC.$1("[id=tbVgPhCrnextArrow]");
                s && (s.style.display = a ? "none" : "block"), l && (l.style.display = n ? "none" : "block"), n && clearInterval(i)
            }(0, _tbCr[o], _tbCr.limit, b, _tbCr.timer), t ? _tbCr[o] === b - _tbCr.limit : _tbCr[o] === -(b - _tbCr.limit)) {
            const e = t ? "tb-revcarousel-slinavright" : "tb-revcarousel-slinavbottom";
            _tbCr.disableDiv([`${e}-nav`, e]), clearInterval(_tbCr.timer)
        } else {
            const e = t ? "tb-revcarousel-slinavright" : "tb-revcarousel-slinavbottom";
            _tbCr.enableDiv([`${e}-nav`, e])
        }
        if (0 === _tbCr[o]) {
            _tbCr[a] = 0, _tbCr[i] = 0;
            const e = t ? "tb-revcarousel-slinavleft" : "tb-revcarousel-slinavtop";
            _tbCr.disableDiv([`${e}-nav`, e])
        }
        if (0 != _tbCr[o]) {
            const e = t ? "tb-revcarousel-slinavleft" : "tb-revcarousel-slinavtop";
            _tbCr.enableDiv([`${e}-nav`, e])
        }
        if (_tbCr[o] === _tbCr.count && _tbCr.apiCallCount < _tbCr.maxApiCalls) {
            _tbCr.count += 10, _tbCr.page += 1, _tbCr.apiCallCount++;
            const t = _tbC.$1("[class=carousel-id]"),
                {
                    textContent: o
                } = t,
                i = {
                    productType: _tbCr.productType,
                    reviewType: _tbCr.reviewType,
                    page: _tbCr.page,
                    index_name: r.apiKey,
                    id: o,
                    user_id: _tbCr.tbUserId,
                    shop: _tbC.shop
                },
                a = `${_tbC.webhookUrl}reviews/carousel/search/?_t=${_tbCr.publicKey}&shop=${_tbC.shop}`,
                n = `bv_review_carousel_${e}_search_data_${o}`;
            ! function(e, t, r, o, i) {
                const a = _tbC.getCachedData(t);
                if (a) {
                    const e = _tbC.$("[class=tb-singleslide]:last-child")[0];
                    e && (e.insertAdjacentHTML("afterend", a.content), "tb-recar-horizontal" === i ? _tbCr.manageDivParts() : "tb-recar-vertical" === i && _tbCr.manageVerticalDivParts())
                } else e(r, o, t, "POST").then((e => {
                    const t = _tbC.$("[class=tb-singleslide]:last-child")[0];
                    t && (t.insertAdjacentHTML("afterend", e.content), "tb-recar-horizontal" === i ? _tbCr.manageDivParts() : "tb-recar-vertical" === i && _tbCr.manageVerticalDivParts())
                })).catch((e => {}))
            }(_tbC.fetchData, n, a, i, _tbCr.layout)
        }
    }, _tbCr.moveHorizontal = function() {
        _tbCr.moveCarousel("horizontal")
    }, _tbCr.moveVertical = function() {
        _tbCr.moveCarousel("vertical")
    }, _tbCr.addEventListeners = function(e) {
        const t = {
            horizontal: {
                right: ["tb-revcarousel-slinavright-nav", "tb-revcarousel-slinavright"],
                left: ["tb-revcarousel-slinavleft-nav", "tb-revcarousel-slinavleft"]
            },
            vertical: {
                bottom: ["tb-revcarousel-slinavbottom-nav", "tb-revcarousel-slinavbottom"],
                top: ["tb-revcarousel-slinavtop-nav", "tb-revcarousel-slinavtop"]
            }
        }[e];
        if (t)
            for (const [r, o] of Object.entries(t)) _tbCr.addEventListener(o, `${e}${r.charAt(0).toUpperCase()+r.slice(1)}`)
    }, _tbCr.addEventListenerHorizontal = function() {
        _tbCr.addEventListeners("horizontal")
    }, _tbCr.addEventListenerVertical = function() {
        _tbCr.addEventListeners("vertical")
    }, _tbCr.startSetInterval = function() {
        const e = parseInt(_tbC.$("[class=tb-singleslide]").length);
        !_tbCr.timer && e > _tbCr.limit && _tbCr.click != e - _tbCr.limit && _tbCr.clickVertical != e - _tbCr.limit && (_tbCr.timer = setInterval((function() {
            _tbC.$1("[id=tb-revcarousel-slinavright-nav]") && _tbCr.horizonatalRight(), _tbC.$1("[id=tb-revcarousel-slinavbottom-nav]") && _tbCr.verticalBottom()
        }), 3e3))
    }, _tbCr.autoScrollCheck = function(e, t) {
        /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? "yes" === e && _tbCr.startSetInterval() : "yes" === t && _tbCr.startSetInterval()
    }, _tbCr.updateDivClass = function(e, t) {
        e.forEach((e => {
            const r = _tbC.$1(`[id=${e}]`);
            r && r.classList["disable" === t ? "add" : "remove"]("tb-revcarousel-slinav-inact")
        }))
    }, _tbCr.disableDiv = function(e) {
        _tbCr.updateDivClass(e, "disable")
    }, _tbCr.enableDiv = function(e) {
        _tbCr.updateDivClass(e, "enable")
    };
    const n = {
        horizontalRight: _tbCr.horizonatalRight,
        horizontalLeft: _tbCr.horizonatalLeft,
        verticalBottom: _tbCr.verticalBottom,
        verticalTop: _tbCr.verticalTop
    };
    _tbCr.addEventListener = function(e, t) {
        const r = n[t];
        e && r && e.forEach((function(e) {
            const t = _tbC.$1(`[id=${e}]`);
            t && t.addEventListener("click", (function(e) {
                r()
            }))
        }))
    }, _tbCr.maxHeight = function(e) {
        return e && 0 !== e.length ? Array.from(e).reduce(((e, t) => Math.max(e, t.clientHeight)), 0) : 0
    }, _tbCr.checkWidgetLimit = function() {
        const e = t.body.clientWidth,
            r = _tbC.$1(".tb-revcarousel-container"),
            o = r ? r.clientWidth : 0;
        e >= 900 ? _tbCr.limit = e <= 1200 ? 2 : _tbCr.limitCl : e >= 765 ? (_tbCr.limit = "on" === _tbCr.avgStar ? 1 : 2, _tbCr.divWidth = o / _tbCr.limit) : e >= 0 ? (_tbCr.limit = 1, _tbCr.divWidth = o) : _tbCr.limit = _tbCr.limitCl
    }, e.addEventListener("resize", function(e, t) {
        let r;
        return function(...o) {
            clearTimeout(r), r = setTimeout((() => {
                clearTimeout(r), e(...o)
            }), t)
        }
    }((() => {
        _tbC.$(".tb_review_carousel").length > 0 && ("tb-recar-horizontal" === _tbCr.layout ? _tbCr.manageDivParts() : "tb-recar-vertical" === _tbCr.layout && _tbCr.manageVerticalDivParts())
    }), 250)), (r.tbReview === o || r.tbReview.tbProductReview) && _tbCr.init()
}(window, document, tbConfig)), void 0 === tbConfig.photogalleryLoaded && (tbConfig.photogalleryLoaded = !0, function(e, t, r, o) {
    e._bvPh = e._bvPh || {};
    let i, a = 0;
    _tbC.setCookie("bv_review_gallery_display", "");
    const n = [];
    i = r.publicKey !== o && null !== r.publicKey ? r.publicKey : _tbC.b64EncodeUnicode(`_a=${r.apiToken}&_i=${r.apiKey}`), _bvPh.publicKey = i, _bvPh.init = function() {
        _tbC.$("[class=tb_review_customer_photo_gallery]").length > 0 && (_tbC.loadIfVisible("tb_review_customer_photo_gallery", "bv_review_gallery_display") && _bvPh.initReviewCustomerGalleryWidget(), e.addEventListener("scroll", (function() {
            _tbC.loadIfVisible("tb_review_customer_photo_gallery", "bv_review_gallery_display") && _bvPh.initReviewCustomerGalleryWidget()
        })))
    }, _bvPh.initReviewCustomerGalleryWidget = function() {
        _bvPh.reviewWidgetUrl = `${_tbC.webhookUrl}reviews/customer-photo-gallery?_t=${_bvPh.publicKey}`;
        const i = _tbC.$("[class=tb_review_customer_photo_gallery]"),
            n = [];
        for (let e = 0; e <= i.length - 1; e++) "" !== i[e].getAttribute("data-review-id") && i[e].getAttribute("data-review-id") !== o && n.push(i[e].getAttribute("data-review-id"));
        const s = {
                index_name: r.apiKey,
                vgallery: n,
                page: a,
                shop: _tbC.shop
            },
            l = t => {
                27 === (t || e.event).keyCode && _bvPh.tbVgModelClose()
            },
            d = e => {
                const r = _tbC.$1(`[data-review-id=${e.layout_class}]`);
                r && (((e, t) => {
                    e.innerHTML = t
                })(r, e.content), "" === e.content.trim() && (() => {
                    const e = t.getElementById("tbVgLoadMore");
                    e && (e.innerHTML = "<hr/>", e.style.width = "100%", e.style.height = "100%")
                })()), t.onkeydown = l
            },
            b = "bv_photo_gallery_data",
            c = _tbC.getCachedData(b);
        c ? d(c) : _tbC.fetchData(_bvPh.reviewWidgetUrl, s, b, "POST").then((e => {
            d(e)
        })).catch((e => {}))
    }, _bvPh.customerPhotoGallery = function() {
        t.body.classList.remove("tbClr"), t.getElementById("tbVgImgLoader").style.display = "block", t.getElementById("tbVgLoadMore").style.display = "block", _bvPh.reviewWidgetUrl = `${_tbC.webhookUrl}reviews/customer-photo-gallery/search/?_t=${_bvPh.publicKey}`;
        const i = _tbC.$("[class=tb_review_customer_photo_gallery]"),
            s = [];
        for (let e = 0; e <= i.length - 1; e++) "" !== i[e].getAttribute("data-review-id") && i[e].getAttribute("data-review-id") !== o && s.push(i[e].getAttribute("data-review-id"));
        a++;
        const l = new Set,
            d = t.querySelectorAll(".TBPopupImg");
        n.forEach((e => l.add(e))), d.forEach((e => {
            const t = e.getAttribute("data-productreview-id");
            t && l.add(t)
        })), n.length = 0, n.push(...Array.from(l));
        const b = {
            index_name: r.apiKey,
            id: s,
            productId: Array.from(l),
            page: a,
            shop: _tbC.shop
        };
        _tbC.fetchData(_bvPh.reviewWidgetUrl, b, "", "POST").then((r => {
            const o = "tbVgLoadMore",
                i = "tbVgclrBoth",
                a = "tbVgImgLoader",
                n = "TBVgImgGallery",
                s = e => t.getElementById(e),
                l = (e, t) => {
                    e && (e.style.display = t)
                };
            ! function(d) {
                const b = s(o);
                b && (l(b, "block"), l(s(i), "block"), l(s(a), "none")), "no" === r.seeMore && l(b, "none");
                const c = t.querySelector(`[class=${n}]`);
                c && (c.innerHTML += d.content), "" === d.content && b && (b.innerHTML = "<hr/>", b.style.width = "100%", b.style.height = "100%"), t.onkeydown = t => {
                    "Escape" === (t = t || e.event).key && _bvPh.tbVgModelClose()
                }
            }(r)
        })).catch((e => {}))
    }, _bvPh.tbVgModelOpen = function(e) {
        const r = t.getElementById("tbVgPhGalprevArrow"),
            o = t.getElementById("tbVgPhGalnextArrow"),
            i = t.getElementById("PageContainer"),
            a = t.querySelector("ul.TBVgImgGallery li:first-child"),
            n = t.querySelector("ul.TBVgImgGallery li:last-child"),
            s = t.getElementById("tbVgPhGalRatingImg"),
            l = t.getElementById("tbVgPhGalReviewTitle"),
            d = t.getElementById("tbVgPhGalProductname"),
            b = t.getElementById("tbVgPhGalCustomerImage"),
            c = t.getElementById("tbVgPhGalLoader"),
            m = t.getElementById("tbVgPhGalGalleryid"),
            u = t.getElementById("tbVgPhGalModalBuyNow"),
            g = t.getElementById("tbVgPhGalUsername"),
            p = t.getElementById("tbVgPhGalVerifiedBuyer"),
            y = t.getElementById("tbVgPhGalDate"),
            v = t.getElementById("tbVgPhGalProductImage"),
            _ = t.getElementById("tbVgPhGalReviewContent"),
            w = t.getElementById("tbVgPhGalCurrentPopupElementId"),
            h = t.getElementById("tbVgPhGalCustImgRound"),
            f = t.getElementById("tbVgPhGalModalPopup"),
            C = t.getElementById("video_svg_product"),
            E = t.getElementById("review_videoproduct"),
            I = t.getElementById("tbVgPhGalCustomLink");
        r.style.display = "block", o.style.display = "block", i && (i.style.transform = "none", t.querySelector("header").style.zIndex = "1"), a && e.id === a.id && (r.style.display = "none"), n && e.id === n.id && (o.style.display = "none"), s.style.display = "block", l.innerHTML = e.getAttribute("data-reviewtitle"), d.innerHTML = e.getAttribute("data-productname"), b.src = e.getAttribute("data-customerimage"), c.style.display = "none", b.style.display = "block";
        const F = e.getAttribute("data-uid"),
            B = t.getElementById("uvid");
        B instanceof HTMLInputElement && (B.value = F || "");
        const k = e.getAttribute("data-reviewtype");
        if (F && "video" === k) {
            const e = `video_svg_product_${F}`;
            C.id = e, C.style.display = "block", C.onclick = () => tbsForm.playCarouselGalleryVideo(F, "product"), E.id = `review_videoproduct_${F}`
        } else C.style.display = "none";
        if (m) {
            const t = m.value;
            if (t) {
                let r = I.value || e.getAttribute("data-producturl");
                r || (r = `${e.getAttribute("data-producturl")}?utm_source=targetbay&utm_medium=review_customer_gallery&utm_token=${t}&_t=${_bvPh.publicKey}`), u.href = r
            }
        }
        g.innerHTML = e.getAttribute("data-username"), p.style.display = 1 == e.getAttribute("data-verified") ? "inline-block" : "none", y.innerHTML = _tbC.TBtimeConverter(e.getAttribute("data-timestamp")), s.src = e.getAttribute("data-ratingimg"), v.src = e.getAttribute("data-productimage"), s.style.display = s.src ? "block" : "none", _.innerHTML = e.getAttribute("data-review"), w.value = e.id;
        const S = e.getAttribute("data-username");
        h.innerHTML = null !== S ? e.getAttribute("data-username").charAt(0).toUpperCase() : "N", f.style.display = "block", B.value = e.getAttribute("data-uid")
    }, _bvPh.tbVgModelClose = function() {
        const e = t.getElementById("tbVgPhGalModalPopup"),
            r = t.getElementById("uvid"),
            o = r ? r.value : "";
        if (e && (e.style.display = "none"), o) {
            const e = t.getElementById(`review_videoproduct_${o}`),
                r = t.getElementById(`video_svg_product_${o}`);
            e && (e.src = "", e.style.display = "none", e.setAttribute("id", "review_videoproduct")), r && r.setAttribute("id", "video_svg_product")
        }
    }, _bvPh.navigate = function(e) {
        const r = e => t.querySelector(e),
            o = e => t.getElementById(e),
            i = (e, t, r = null) => e && e.getAttribute(t) || r,
            a = "left" === e,
            n = {
                prevArrow: o("tbVgPhGalprevArrow"),
                nextArrow: o("tbVgPhGalnextArrow"),
                currentUidInput: o("uvid"),
                currentPopupIdInput: o("tbVgPhGalCurrentPopupElementId")
            };
        try {
            n.prevArrow && (n.prevArrow.style.display = "block"), n.nextArrow && (n.nextArrow.style.display = "block");
            const e = i(n.currentUidInput);
            if (e) {
                const t = r(`#review_videoproduct_${e}`),
                    o = r(`#video_svg_product_${e}`);
                t && (t.src = "", t.style.display = "none", t.setAttribute("id", "review_videoproduct")), o && o.setAttribute("id", "video_svg_product")
            }
            const t = i(n.currentPopupIdInput, "value");
            if (!t) throw new Error("Current popup ID not found.");
            const o = r(`#${t}`);
            if (!o) throw new Error("Current element not found.");
            let s = a ? o.previousElementSibling : o.nextElementSibling;
            for (; s && s.id === o.id;) s = a ? s.previousElementSibling : s.nextElementSibling;
            if (s) {
                const e = i(s, "data-uid");
                n.currentUidInput && (n.currentUidInput.value = e), _bvPh.tbVgModelOpen(s)
            } else {
                const e = a ? n.prevArrow : n.nextArrow;
                e && (e.style.display = "none")
            }
        } catch (e) {}
    }, _bvPh.leftArrowNavigate = function() {
        _bvPh.navigate("left")
    }, _bvPh.rightArrowNavigate = function() {
        _bvPh.navigate("right")
    }, (r.tbReview === o || r.tbReview.tbProductReview) && _bvPh.init()
}(window, document, tbConfig)), void 0 === tbConfig.photocarouselLoaded && (tbConfig.photocarouselLoaded = !0, function(e, t, r, o) {
    let i;
    e._bvCr = e._bvCr || {}, i = r.publicKey !== o && null !== r.publicKey ? r.publicKey : _tbC.b64EncodeUnicode(`_a=${r.apiToken}&_i=${r.apiKey}`), _bvCr.publicKey = i, _bvCr.slideMarginLeft = _bvCr.slideMarginRight = _bvCr.click = _bvCr.page = _bvCr.clickVertical = _bvCr.slideMarginBottom = _bvCr.slideMarginTop = 0, _bvCr.count = 10, _bvCr.timer = null, _bvCr.init = function() {
        _tbC.setCookie("bv_review_photo_carousel_display", ""), _tbC.$("[class=tb_review_customer_photo_carousel]").length > 0 && (_tbC.loadIfVisible("tb_review_customer_photo_carousel", "bv_review_photo_carousel_display") && _bvCr.initCustomerReviewCarouselWidget(), e.addEventListener("scroll", (function() {
            _tbC.loadIfVisible("tb_review_customer_photo_carousel", "bv_review_photo_carousel_display") && _bvCr.initCustomerReviewCarouselWidget()
        })))
    };
    const a = function(r) {
        try {
            const o = _tbC.$1(`[data-review-id=${r.layout_class}]`);
            if (!o) return;
            o.innerHTML = r.content, o.style.display = "block";
            const i = t.getElementsByClassName("tb-revphcarousel-carslide")[0];
            if (!i || "" === i.innerHTML.trim()) return o.innerHTML = "", !1;
            const a = _tbC.$1("[id=targetbay_review_carousel]");
            if (!a) return;
            const n = _tbC.$("[class=tb-phsingleslide]");
            if (!n || 0 === n.length) return;
            _bvCr.limit = 5, _bvCr.limitCl = 5, t.onkeydown = function(t) {
                27 === (t = t || e.event).keyCode && _bvCr.tbVgModelClose()
            };
            const s = n.length;
            _bvCr.manageDivParts(), _bvCr.addEventListenerHorizontal(), _bvCr.startSetInterval(), 0 === _bvCr.click && _bvCr.disableDiv(["tb-revphcarousel-slinavleft-nav", "tb-revphcarousel-slinavleft"]), s <= _bvCr.limit && (_bvCr.disableDiv(["tb-revphcarousel-slinavright-nav", "tb-revphcarousel-slinavright"]), clearInterval(_bvCr.timer));
            const l = () => {
                clearInterval(_bvCr.timer), delete _bvCr.timer
            };
            a && (a.addEventListener("mouseover", l), a.addEventListener("touchstart", l, {
                passive: !0
            }), a.addEventListener("touchend", (() => {
                _bvCr.startSetInterval()
            }), {
                passive: !0
            }), a.addEventListener("mouseleave", (() => {
                _bvCr.startSetInterval()
            })))
        } catch (e) {}
    };
    _bvCr.initCustomerReviewCarouselWidget = function() {
        try {
            _bvCr.reviewWidgetUrl = `${_tbC.webhookUrl}reviews/customer-photo-gallery?_t=${_bvCr.publicKey}`;
            const e = _tbC.$("[class=tb_review_customer_photo_carousel]");
            if (!e || 0 === e.length) return;
            const t = [];
            for (let r = 0; r <= e.length - 1; r++) "" !== e[r].getAttribute("data-review-id") && e[r].getAttribute("data-review-id") !== o && t.push(e[r].getAttribute("data-review-id"));
            if (0 === t.length) return;
            const i = {
                    index_name: r.apiKey,
                    vgallery: t,
                    productId: r.productId !== o ? r.productId : "",
                    shop: _tbC.shop
                },
                n = "bv_photo_carousel_data",
                s = _tbC.getCachedData(n);
            s ? a(s) : _tbC.fetchData(_bvCr.reviewWidgetUrl, i, n, "POST").then((e => {
                a(e)
            })).catch((e => {
                const r = _tbC.$1(`[data-review-id=${t[0]}]`);
                r && (r.innerHTML = '<div class="error-message">Unable to load photo carousel. Please try again later.</div>')
            }))
        } catch (e) {}
    }, _bvCr.manageDivParts = function() {
        const e = parseInt(_tbC.$("[class=tb-phsingleslide]").length);
        e <= 5 && (_bvCr.disableDiv(["tb-revphcarousel-slinavleft-nav", "tb-revphcarousel-slinavleft"]), _bvCr.disableDiv(["tb-revphcarousel-slinavright-nav", "tb-revphcarousel-slinavright"])), _bvCr.divWidth = parseInt(_tbC.$1("[class=tb-revphcarousel-carousel-inn]").clientWidth) / _bvCr.limit, _bvCr.checkWidgetLimit();
        const t = _bvCr.divWidth * e;
        _tbC.$1("[class=tb-revphcarousel-carslide]").style.setProperty("width", `${t}px`, "important");
        for (let t = 0; t < e; t++) _tbC.$("[class=tb-phsingleslide]")[t].setAttribute("style", `width : ${_bvCr.divWidth}px !important`)
    }, _bvCr.horizonatalRight = function() {
        try {
            const e = _tbC.$("[class=tb-phsingleslide]").length;
            _bvCr.click < e - _bvCr.limit && (_bvCr.click++, _bvCr.slideMarginLeft += 1, _bvCr.moveHorizontal())
        } catch (e) {}
    }, _bvCr.horizonatalLeft = function() {
        try {
            _bvCr.click > 0 && (_bvCr.click--, _bvCr.slideMarginRight += 1, _bvCr.moveHorizontal())
        } catch (e) {}
    }, _bvCr.ajaxCallBack = function(e) {
        if (4 === e.readyState && 200 === e.status) {
            const t = JSON.parse(e.responseText);
            _tbC.$("[class=tb-phsingleslide]")[_tbC.$("[class=tb-phsingleslide]").length - 1].insertAdjacentHTML("afterend", t.content), _bvCr.manageDivParts()
        }
    }, _bvCr.moveHorizontal = function() {
        try {
            const {
                click: e,
                slideMarginLeft: t,
                slideMarginRight: o,
                divWidth: i,
                limit: a,
                count: n,
                page: s,
                productType: l,
                reviewType: d
            } = _bvCr, b = -i * (t - o), c = _tbC.$1("[class=tb-revphcarousel-carslide]");
            c && c.style.setProperty("margin-left", `${b}px`, "important");
            const m = _tbC.$("[class=tb-phsingleslide]").length,
                u = 0 === e,
                g = e === n;
            if (e === m - a ? (_bvCr.disableDiv(["tb-revphcarousel-slinavright-nav", "tb-revphcarousel-slinavright"]), clearInterval(_bvCr.timer)) : _bvCr.enableDiv(["tb-revphcarousel-slinavright-nav", "tb-revphcarousel-slinavright"]), u ? (_bvCr.slideMarginRight = 0, _bvCr.slideMarginLeft = 0, _bvCr.disableDiv(["tb-revphcarousel-slinavleft-nav", "tb-revphcarousel-slinavleft"])) : _bvCr.enableDiv(["tb-revphcarousel-slinavleft-nav", "tb-revphcarousel-slinavleft"]), g) {
                _bvCr.count += 10, _bvCr.page += 1;
                const e = _tbC.$1("[class=carousel-id]");
                if (!e) return;
                const {
                    textContent: t
                } = e, o = {
                    productType: l,
                    reviewType: d,
                    page: s,
                    index_name: r.apiKey,
                    id: t,
                    productId: r.productId || null,
                    shop: _tbC.shop
                }, i = `${_tbC.webhookUrl}reviews/customer-photo-gallery/search/?_t=${_bvCr.publicKey}`, a = `bv_photo_carousel_search_data_${t}`, n = _tbC.getCachedData(a);
                n ? insertData(n.content) : _tbC.fetchData(i, o, a, "POST").then((e => {
                    insertData(e.content)
                })).catch((e => {}))
            }
        } catch (e) {}
    }, _bvCr.addEventListenerHorizontal = function() {
        _bvCr.addEventListener(["tb-revphcarousel-slinavright-nav", "tb-revphcarousel-slinavright"], "horizonatalRight"), _bvCr.addEventListener(["tb-revphcarousel-slinavleft-nav", "tb-revphcarousel-slinavleft"], "horizonatalLeft")
    }, _bvCr.startSetInterval = function() {
        const e = parseInt(_tbC.$("[class=tb-phsingleslide]").length);
        !_bvCr.timer && e > _bvCr.limit && _bvCr.click != e - _bvCr.limit && _bvCr.clickVertical != e - _bvCr.limit && (_bvCr.timer = setInterval((function() {
            _tbC.$1("[id=tb-revphcarousel-slinavright-nav]") && _bvCr.horizonatalRight(), _tbC.$1("[id=tb-revphcarousel-slinavbottom-nav]") && _bvCr.verticalBottom()
        }), 3e3))
    }, _bvCr.tbVgCarouselModelOpen = function(e) {
        const r = t.getElementById("tbVgPhCrprevArrow"),
            o = t.getElementById("tbVgPhCrnextArrow"),
            i = t.getElementById("PageContainer"),
            a = t.querySelector("ul.tb-revphcarousel-carslide li:first-child"),
            n = t.querySelector("ul.tb-revphcarousel-carslide li:last-child"),
            s = t.getElementById("tbVgPhCrRatingImg"),
            l = t.getElementById("tbVgPhCrReviewTitle"),
            d = t.getElementById("tbVgPhCrProductname"),
            b = t.getElementById("tbVgPhCrCustomerImage"),
            c = t.getElementById("tbVgPhCrLoader"),
            m = t.getElementById("tbVgPhCrGalleryid"),
            u = t.getElementById("tbVgPhCrModalBuyNow"),
            g = t.getElementById("tbVgPhCrBuynowText"),
            p = t.getElementById("tbVgPhCrUsername"),
            y = t.getElementById("tbVgPhCrVerifiedBuyer"),
            v = t.getElementById("tbVgPhCrDate"),
            _ = t.getElementById("tbVgPhCrProductImage"),
            w = t.getElementById("tbVgPhCrReviewContent"),
            h = t.getElementById("tbVgPhCrCurrentPopupElementId"),
            f = t.getElementById("tbVgPhCrCustImgRound"),
            C = t.getElementById("tbVgPhCrModalPopup");
        r.style.display = "block", o.style.display = "block", i && (i.style.transform = "none", t.querySelector("header").style.zIndex = "1"), a && e.id === a.id && (r.style.display = "none"), n && e.id === n.id && (o.style.display = "none"), s.style.display = "block", l.innerHTML = e.getAttribute("data-reviewtitle"), d.innerHTML = e.getAttribute("data-productname"), b.src = e.getAttribute("data-customerimage"), c.style.display = "none", b.style.display = "block";
        const E = e.getAttribute("data-uid"),
            I = e.getAttribute("data-reviewtype"),
            F = t.getElementById("video_svg_product"),
            B = t.getElementById("review_videoproduct");
        if (E && "video" === I ? (F.id = `video_svg_product_${E}`, F.style.display = "block", F.onclick = () => tbsForm.playCarouselGalleryVideo(E, "product"), B.id = `review_videoproduct_${E}`) : F.style.display = "none", m) {
            const r = m.value;
            if (r) {
                const o = `?utm_source=targetbay&utm_medium=review_customer_gallery&utm_token=${r}&_t=${_bvCr.publicKey}`,
                    i = t.getElementById("tbVgPhCrCustomLink").value || e.getAttribute("data-producturl");
                u.href = i + o, u.innerHTML = g.value
            }
        }
        p.innerHTML = e.getAttribute("data-username"), y.style.display = 1 == e.getAttribute("data-verified") ? "block" : "none", v.innerHTML = _tbC.TBtimeConverter(e.getAttribute("data-timestamp")), s.src = e.getAttribute("data-ratingimg"), _.src = e.getAttribute("data-productimage"), s.style.display = s.src ? "block" : "none", w.innerHTML = e.getAttribute("data-review"), h.value = e.id, f.innerHTML = e.getAttribute("data-username").charAt(0).toUpperCase(), C.style.display = "block"
    }, _bvCr.navigate = function(e) {
        const r = e => t.getElementById(e),
            o = "left" === e,
            i = {
                prevArrow: r("tbVgPhCrprevArrow"),
                nextArrow: r("tbVgPhCrnextArrow"),
                currentUidInput: r("uvid"),
                currentPopupIdInput: r("tbVgPhCrCurrentPopupElementId")
            };
        try {
            i.prevArrow && (i.prevArrow.style.display = "block"), i.nextArrow && (i.nextArrow.style.display = "block");
            const e = i.currentUidInput ? .value || "";
            if (e) {
                const t = _tbC.$1(`#review_videoproduct_${e}`),
                    r = _tbC.$1(`#video_svg_product_${e}`);
                t && (t.src = "", t.style.display = "none", t.setAttribute("id", "review_videoproduct")), r && r.setAttribute("id", "video_svg_product")
            }
            const t = i.currentPopupIdInput ? .value || "",
                r = _tbC.$1(`#${t}`),
                a = o ? r ? .previousElementSibling : r ? .nextElementSibling;
            if (a) {
                const e = a.getAttribute("data-uid");
                i.currentUidInput && (i.currentUidInput.value = e), _bvCr.tbVgCarouselModelOpen(a)
            } else {
                const e = o ? i.prevArrow : i.nextArrow;
                e && (e.style.display = "none")
            }
        } catch (e) {}
    }, _bvCr.rightArrowNavigate = function() {
        _bvCr.navigate("right")
    }, _bvCr.leftArrowNavigate = function() {
        _bvCr.navigate("left")
    }, _bvPh.tbVgModelClose = function(e) {
        const r = t.getElementById("tbVgPhCrModalPopup"),
            o = t.getElementById("tbVgPhGalModalPopup");
        r && (r.style.display = "none"), o && (o.style.display = "none");
        const i = t.getElementById("uvid") ? .value;
        if (i) {
            const e = t.getElementById(`review_videoproduct_${i}`),
                r = t.getElementById(`video_svg_product_${i}`);
            e && (e.src = "", e.style.display = "none", e.setAttribute("id", "review_videoproduct")), r && (r.setAttribute("id", "video_svg_product"), r.style.display = "block")
        }
    }, _bvCr.disableDiv = function(e) {
        e && e.forEach((function(e, t, r) {
            _tbC.$1(`[id=${e}]`) && _tbC.$1(`[id=${e}]`).classList.add("tb-revphcarousel-slinav-inact")
        }))
    }, _bvCr.enableDiv = function(e) {
        e && e.forEach((function(e, t, r) {
            _tbC.$1(`[id=${e}]`) && _tbC.$1(`[id=${e}]`).classList.remove("tb-revphcarousel-slinav-inact")
        }))
    }, _bvCr.addEventListener = function(e, t) {
        e && e.forEach((function(e, r, o) {
            const i = _tbC.$1(`[id=${e}]`);
            i && i.addEventListener("click", (function(e) {
                e.preventDefault(), "horizonatalRight" === t ? _bvCr.horizonatalRight() : "horizonatalLeft" === t && _bvCr.horizonatalLeft()
            }))
        }))
    }, _bvCr.maxHeight = function(e) {
        let t = 0;
        for (let r = 0; r <= e.length - 1; r++) t < e[r].clientHeight && (t = e[r].clientHeight);
        return t
    }, _bvCr.checkWidgetLimit = function() {
        const e = t.body.clientWidth;
        if (e <= 1200 && e >= 900) _bvCr.limit = 2;
        else if (e <= 900 && e >= 765) {
            const e = parseInt(_tbC.$1("[class=tb-revphcarousel-container]").clientWidth);
            _bvCr.limit = 1, _bvCr.divWidth = e / _bvCr.limit
        } else e <= 765 && e >= 0 ? (_bvCr.limit = 1, _bvCr.divWidth = parseInt(_tbC.$1("[class=tb-revphcarousel-container]").clientWidth) / _bvCr.limit) : _bvCr.limit = _bvCr.limitCl
    }, (r.tbReview === o || r.tbReview.tbProductReview) && _bvCr.init()
}(window, document, tbConfig));