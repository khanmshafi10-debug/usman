/*
 tag.js v6.07 ? Smarter Click Technology 
*/
if (window.$smcT5 && 1 < Object.keys(window.$smcT5).length) {
    if ("undefined" !== typeof console && "function" === typeof console.warn) try {
        console.warn("Cannot load tag twice")
    } catch (A) {}
} else window.$smcT5 = function(A, P, S) {
    function Fa() {
        function l(r, X) {
            r += "=";
            for (var n = P.cookie.split(";"), t = 0; t < n.length; t++) {
                for (var f = n[t];
                    " " === f.charAt(0);) f = f.substring(1, f.length);
                if (0 === f.indexOf(r)) return r = f.substring(r.length, f.length), X || 1 != k.config.encodeCookies || (r = decodeURIComponent(r)), r.replace(/SMC_ASCII_PREFIX:/g,
                    "")
            }
            return null
        }

        function v(r, X, n, t) {
            null === x && B(-2);
            t || "undefined" === typeof A.THEHUT && 1 != k.config.FirstCharAsciiFix || "string" !== typeof X || !1 !== /^[ -~]+$/.test(X.substr(0, 1)) || (X = "SMC_ASCII_PREFIX:" + X);
            t || 1 != k.config.encodeCookies || (X = encodeURIComponent(X));
            n ? (null !== J.cookieMaxAgeDays && 0 < J.cookieMaxAgeDays && n > 1440 * J.cookieMaxAgeDays && (n = 1440 * J.cookieMaxAgeDays), t = new Date, t.setTime(t.getTime() + 6E4 * n), n = "; expires=" + t.toGMTString()) : n = "";
            t = location.host;
            1 === t.split(".").length || /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(t) ?
                P.cookie = r + "=" + X + n + ";path=/" : (t = "." + t.split(".").slice(-2).join("."), P.cookie = r + "=" + X + n + ";path=/; domain=" + (x ? x : t))
        }

        function z(r) {
            v(r, "", -1)
        }

        function p(r) {
            return null === l(r) ? !1 : !0
        }

        function F() {
            var r = navigator.cookieEnabled;
            r || (P.cookie = "smc_testcookie", r = -1 !== P.cookie.indexOf("smc_testcookie"));
            return r
        }
        var G = M.custom("Cookie Manager", "#D2691E"),
            x = null,
            B = function(r) {
                if (-10 > r || 10 < r) return G("TLC: Level is too deep, returning null"), null;
                var X = "." + A.location.host.split(".").slice(r).join(".");
                G(`TLC: Checking level: ${r}, domain: ${X}`);
                P.cookie = "smc-tlc-checker=" + X + ";path=/; domain=" + X;
                var n = l("smc-tlc-checker");
                if (n && n === X) return G(`TLC: Using domain ${X} for cookie storage`), x = X, z("smc-tlc-checker"), X;
                B(r - 1)
            },
            K = function() {
                return {
                    get: function() {
                        var r = parseInt(l("smc_source_ref"), 10);
                        return isNaN(r) ? 0 : r
                    },
                    set: function(r, X) {
                        r = parseInt(r, 10);
                        r = isNaN(r) ? 0 : r;
                        v("smc_source_ref", r, 1440 * X)
                    }
                }
            }(),
            L = function() {
                var r, X = function(t) {
                        return [{
                            id: t,
                            loaded: null,
                            open: null,
                            eng: null,
                            closed: null
                        }]
                    },
                    n = function() {
                        r = p("smct_last_ov") ? JSON.parse(l("smct_last_ov")) :
                            X(null);
                        "string" === typeof r && "[{" === r.substring(0, 2) && (r = JSON.parse(r));
                        var t = function(g) {
                                var h = m.DateNow() / 1E3;
                                return null !== g ? parseFloat((h - g / 1E3).toFixed(2)) : g
                            },
                            f;
                        for (f in r) r.hasOwnProperty(f) && (r[f].loaded = t(r[f].loaded), r[f].open = t(r[f].open), r[f].eng = t(r[f].eng), r[f].closed = t(r[f].closed));
                        return r
                    };
                return {
                    set: function(t, f) {
                        p("smct_last_ov") ? (r = JSON.parse(l("smct_last_ov")), "string" === typeof r && "[{" === r.substring(0, 2) && (r = JSON.parse(r)), r[0].id !== t && r.unshift(X(t)[0]), r = r.slice(0, 3)) : r = X(t);
                        f !== S && (r[0][f] = m.DateNow());
                        v("smct_last_ov", JSON.stringify(r), 43200)
                    },
                    get: n,
                    secsSince: function(t) {
                        var f = n(),
                            g;
                        for (g in f)
                            if (f.hasOwnProperty(g) && null !== f[g][t]) return Math.round(f[g][t]);
                        return null
                    }
                }
            }();
        try {
            var E = A.localStorage
        } catch (r) {
            E = !1, ha("localStorage access denied, falling back to cookies.")
        }
        if (k.config.migrateCookiesToLocalStorage && !1 !== E) {
            var Y = Number(l("smc_ls_session", !0));
            Y || (Y = +new Date, v("smc_ls_session", Y, 0, !0));

            function r(g, h, w) {
                null !== J.cookieMaxAgeDays && 0 < J.cookieMaxAgeDays &&
                    w > 1440 * J.cookieMaxAgeDays && (w = 1440 * J.cookieMaxAgeDays);
                w = 0 !== Number(w) ? +new Date + 6E4 * w : 0;
                1 === k.config.encodeCookies && (h = encodeURIComponent(h));
                E.setItem(g, JSON.stringify({
                    v: String(h),
                    e: w,
                    s: Y
                }))
            }

            function X(g) {
                n(g);
                var h = E.getItem(g);
                if (null === h) return null;
                try {
                    var w = JSON.parse(h);
                    if (0 === w.e && w.s !== Y || 0 < w.e && w.e < +new Date) return t(g), null;
                    1 === k.config.encodeCookies && (w.v = decodeURIComponent(w.v));
                    return w.v
                } catch (a) {
                    return ha("Local storage read error:", a), null
                }
            }

            function n(g) {
                if (!p(g)) return !1;
                var h = {
                        smc_uid: 5256E3,
                        smct_session: 0,
                        smc_r: 10080,
                        smc_spv: 0,
                        smc_tag: 525600,
                        smc_sesn: 5256E3,
                        smc_tpv: 5256E3,
                        "smct_dyn_[^\\s]+": 0,
                        "smc_v4_[0-9]+$": 5256E3,
                        smct_last_ov: 43200,
                        "smc-dv2": 10080,
                        "smc-loc-[a-zA-Z0-9]+$": 0,
                        smc_not: 5256E3,
                        smc_goal: 525600
                    },
                    w, a = Object.keys(h);
                for (w in a)
                    if (a.hasOwnProperty(w)) {
                        var c = a[w];
                        if ((new RegExp(c)).test(g)) return h = h[c], G("Migrating a cookie:", g), c = l(g), z(g), r(g, c, h), !0
                    }
                return !1
            }

            function t(g) {
                n(g);
                E.removeItem(g)
            }

            function f(g) {
                n(g);
                return null !== E.getItem(g)
            }
            K = function() {
                return {
                    get: function() {
                        var g =
                            parseInt(X("smc_source_ref"), 10);
                        return isNaN(g) ? 0 : g
                    },
                    set: function(g, h) {
                        g = parseInt(g, 10);
                        g = isNaN(g) ? 0 : g;
                        r("smc_source_ref", g, 1440 * h)
                    }
                }
            }();
            L = function() {
                function g(a) {
                    return [{
                        id: a,
                        loaded: null,
                        open: null,
                        eng: null,
                        closed: null
                    }]
                }
                var h, w = function() {
                    function a(b) {
                        var d = m.DateNow() / 1E3;
                        return null !== b ? parseFloat((d - b / 1E3).toFixed(2)) : b
                    }
                    h = f("smct_last_ov") ? JSON.parse(X("smct_last_ov")) : g(null);
                    for (var c in h) h.hasOwnProperty(c) && (h[c].loaded = a(h[c].loaded), h[c].open = a(h[c].open), h[c].eng = a(h[c].eng), h[c].closed =
                        a(h[c].closed));
                    return h
                };
                return {
                    set: function(a, c) {
                        f("smct_last_ov") ? (h = JSON.parse(X("smct_last_ov")), h[0].id !== a && h.unshift(g(a)[0]), h = h.slice(0, 3)) : h = g(a);
                        c !== S && (h[0][c] = m.DateNow());
                        r("smct_last_ov", JSON.stringify(h), 43200)
                    },
                    get: w,
                    secsSince: function(a) {
                        var c = w(),
                            b;
                        for (b in c)
                            if (c.hasOwnProperty(b) && null !== c[b][a]) return Math.round(c[b][a]);
                        return null
                    }
                }
            }();
            return {
                create: r,
                read: X,
                del: t,
                exists: f,
                ref: K,
                lastOV: L,
                enabled: F
            }
        }
        return {
            create: v,
            read: l,
            del: z,
            exists: p,
            ref: K,
            lastOV: L,
            enabled: F
        }
    }
    if ("https:" !==
        A.location.protocol && "http:" !== A.location.protocol || /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(A.location.hostname) || "localhost" === A.location.hostname) return !1;
    var k = {},
        pa = {},
        aa = A.$smctResources,
        J = {
            leftPage: !1,
            leftTab: !1,
            overlayId: 0,
            overlaysCC: null,
            notification: null,
            b64: null,
            urls: {
                overlaysLoad: null,
                overlaysEngage: null
            },
            urlID: null,
            goalMatch: !1,
            ajaxDOMReplaceCheck: !1,
            dynamic: {},
            refreshDate: !1,
            serverTimestamp: null,
            cookieMaxAgeDays: null,
            hasMLBeenSent: function() {
                return ta
            }
        },
        fa = {},
        ja = null,
        Z = {
            holding: [],
            plugin: {},
            isUse: !1,
            isReady: !1
        },
        ta = !0,
        ea = {},
        va = {},
        wa = function(l) {
            var v = sessionStorage.getItem("smc_cdn_source"),
                z = A.location.href || ""; - 1 < z.indexOf("smc_set_source=co") ? (v = "co", M("Source manually set to .", v, " for ", l)) : -1 < z.indexOf("smc_set_source=io") && (v = "io", M("Source manually set to .", v, " for ", l));
            if (null !== v && "io" === v || "co" === v) l = l.replace(/smct.(c|i)o/i, "smct." + v);
            return l
        },
        U = !1,
        H = {
            isDebug: function() {
                return !1
            },
            logger: function() {
                return !1
            },
            updateByID: function() {
                return !1
            },
            passFail: function() {
                return !1
            },
            modal: function() {
                return !1
            },
            timeOnPage: function() {
                return !1
            },
            autoInsert: function() {
                return !1
            },
            valueHunter: function() {
                return !1
            },
            notifications: function() {
                return !1
            },
            saleTrack: function() {
                return !1
            },
            smarterCodesSaleTrack: function() {
                return !1
            },
            timedCheck: function() {
                return !1
            },
            ipb: function() {
                return !1
            },
            dynamicBasket: function() {
                return !1
            },
            recomminder: function() {
                return !1
            }
        },
        xa = !0;
    if ("undefined" ===
        typeof A.console || "function" !== typeof console.log || "log" !== console.log.name || "function" !== typeof console.trace || "function" !== typeof console.warn || "function" !== typeof console.error) xa = !1;
    var qa = function(l, v, z, p, F) {
            return function() {
                if (U) {
                    var G = A.self !== A.top,
                        x = "%c" + l + "%c",
                        B = ["color: #FFFFFF; background-color: " + v + "; padding: 2px 7px 2px 7px; border-radius: 10px 0px 0px 10px"];
                    p && (x += p + "%c", B.push("color: #FFFFFF; background-color: " + F + "; padding: 2px 7px 2px 7px;"));
                    G && (x = "%ciframe" + x, B.unshift("color: #FFFFFF; background-color: #0DC386; padding: 2px 7px 2px 7px; border-radius: 10px; margin-right: 3px;"));
                    G = [x].concat(B);
                    G.push("");
                    x = Object.assign(console);
                    if (!xa) try {
                        var K = P.createElement("iframe");
                        K.setAttribute("id", "smc-console-functionality");
                        K.setAttribute("name", "smc-console-functionality");
                        K.setAttribute("style", "visibility:hidden;width:0;height:0;position:fixed;bottom:-10px;right:-10px;");
                        P.querySelector("body").appendChild(K);
                        x = Object.assign(K.contentWindow.console)
                    } catch (L) {
                        x = null
                    }
                    if (x) {
                        B = [].slice.apply(arguments);
                        G = A.StyleMedia || A.opera || !x.table && !x.firebug ? ["[SMC]"] : G;
                        B = G.concat(B);
                        try {
                            x[z].apply(A,
                                B), P.querySelector("body").removeChild(K)
                        } catch (L) {}
                    }
                }
            }
        },
        M = qa("SMC Log", "#10659e", "log");
    M.custom = function(l, v) {
        return qa("SMC Log", "#10659e", "log", l, v)
    };
    var ka = qa("SMC Note", "#999a30", "log");
    ka.custom = function(l, v) {
        return qa("SMC Note", "#999a30", "log", l, v)
    };
    var ia = qa("SMC Warning", "orange", "warn");
    ia.custom = function(l, v) {
        return qa("SMC Warning", "orange", "warn", l, v)
    };
    var ha = qa("SMC Error", "#d02525", "error");
    ha.custom = function(l, v) {
        return qa("SMC Error", "#d02525", "error", l, v)
    };
    var Ga = function() {
            var l =
                null,
                v = null,
                z = null,
                p = !0 === "ontouchstart" in A ? 1 : 0;
            const F = "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches ? 1 : 0,
                G = navigator && navigator.platform || !1,
                x = navigator.userAgent;
            320 > screen.width ? (z = "ignored", v = "width_too_small") : ("iPhone" === G || -1 < x.indexOf("iPhone;")) && p ? (z = "mobile", l = "iOS") : ("iPad" === G || -1 < x.indexOf("iPad;")) && p ? (z = "tablet", l = "iOS") : -1 === x.indexOf("iPad;") && p && "MacIntel" === G ? (z = "tablet", l = "iOS") : -1 < x.indexOf("Android") && p && (-1 < x.indexOf("Tablet") || -1 === x.indexOf("Mobile")) ?
                (z = "tablet", l = "Android") : -1 < x.indexOf("Android") && -1 === x.indexOf("Tablet") && p ? (z = "mobile", l = "Android") : 0 === F && 0 === p && (-1 < x.indexOf("bot") || -1 < x.indexOf("Baiduspider")) ? z = "bot" : 1 === F || 0 === F && 0 === p ? z = "desktop" : 1 === p && (z = "mobile");
            null === l && (l = -1 < x.indexOf("CrOS") ? "Chrome OS" : -1 < x.indexOf("Linux") || -1 < x.indexOf("X11") ? "Linux" : -1 < x.indexOf("Mac OS X") || -1 < x.indexOf("Macintosh") ? "OS X" : -1 < x.indexOf("Silk/") || -1 < x.indexOf("Kindle Fire") ? "Fire OS" : x.indexOf("Windows") ? -1 < x.indexOf("Windows NT 10.0") ? "Windows 10" :
                -1 < x.indexOf("Windows NT 6.2") ? "Windows 8" : -1 < x.indexOf("Windows NT 6.3") ? "Windows 8.1" : -1 < x.indexOf("Windows NT 6.1") ? "Windows 7" : -1 < x.indexOf("Windows NT 5.0") ? "Windows 2000" : -1 < x.indexOf("Windows NT 5.1") ? "Windows XP" : -1 < x.indexOf("Windows NT 5.2") ? "Windows Server 2003" : -1 < x.indexOf("Windows NT 6.0") ? "Windows Vista" : -1 < x.indexOf("Windows NT 4.0") ? "Windows NT 4.0" : -1 < x.indexOf("Windows Phone") ? "Windows Phone" : -1 < x.indexOf("Windows 98") || -1 < x.indexOf("Win98") ? "Windows 98" : "Windows" : "Unknown OS");
            null === v && (v = -1 < x.indexOf("Firefox") ? "Firefox" : -1 < x.indexOf("FBAN/MessengerFor") ? "Facebook Messenger" : -1 < x.indexOf("FBAN/FB") ? "Facebook" : -1 < x.indexOf("Instagram") ? "Instagram" : -1 < x.indexOf("Pinterest/") ? "Pinterest" : -1 < x.indexOf("Opera") || -1 < x.indexOf("OPR") ? "Opera" : -1 < x.indexOf("Trident") ? "Internet Explorer" : -1 < x.indexOf("Edge") ? "Edge" : -1 < x.indexOf("UCBrowser") ? "UC Browser" : -1 < x.indexOf("Chrome") ? "Chrome" : -1 < x.indexOf("Safari") ? "Safari" : "Unknown Browser");
            p = {
                bot: {
                    "OS X Chrome": 160420,
                    "Windows Unknown Browser": 160350
                },
                desktop: {
                    "Chrome OS Chrome": 160356,
                    "Linux Chrome": 160351,
                    "Linux Firefox": 160367,
                    "Linux Opera": 160417,
                    "Linux Safari": 160401,
                    "OS X Chrome": 160339,
                    "OS X Firefox": 160362,
                    "OS X Opera": 160391,
                    "OS X Safari": 160345,
                    "OS X Unknown Browser": 160400,
                    "Windows 10 Chrome": 160342,
                    "Windows 10 Edge": 160343,
                    "Windows 10 Firefox": 160355,
                    "Windows 10 Internet Explorer": 160353,
                    "Windows 10 Opera": 160366,
                    "Windows 7 Chrome": 160344,
                    "Windows 7 Firefox": 160360,
                    "Windows 7 Internet Explorer": 160352,
                    "Windows 7 Opera": 160381,
                    "Windows 7 Unknown Browser": 160414,
                    "Windows 8 Chrome": 160373,
                    "Windows 8 Firefox": 160399,
                    "Windows 8 Internet Explorer": 160424,
                    "Windows 8 Opera": 160429,
                    "Windows 8.1 Chrome": 160358,
                    "Windows 8.1 Firefox": 160371,
                    "Windows 8.1 Internet Explorer": 160364,
                    "Windows 8.1 Opera": 160404,
                    "Windows Chrome": 160412,
                    "Windows Facebook": 160395,
                    "Windows Firefox": 160438,
                    "Windows Internet Explorer": 160435,
                    "Windows Phone Internet Explorer": 160423,
                    "Windows Safari": 160410,
                    "Windows Server 2003 Chrome": 160361,
                    "Windows Server 2003 Firefox": 160431,
                    "Windows Unknown Browser": 160393,
                    "Windows Vista Chrome": 160376,
                    "Windows Vista Firefox": 160392,
                    "Windows Vista Opera": 160411,
                    "Windows XP Chrome": 160378,
                    "Windows XP Firefox": 160390,
                    "Windows XP Opera": 160413
                },
                ignored: {
                    "Windows width_too_small": 160374
                },
                mobile: {
                    "Android Chrome": 160341,
                    "Android Edge": 160407,
                    "Android Firefox": 160369,
                    "Android Instagram": 160357,
                    "Android Internet Explorer": 160397,
                    "Android Opera": 160372,
                    "Android Pinterest": 160363,
                    "Android Safari": 160408,
                    "Android UC Browser": 160375,
                    "Android Unknown Browser": 160409,
                    "Fire OS Unknown Browser": 160437,
                    "iOS Facebook Messenger": 160370,
                    "iOS Facebook": 160359,
                    "iOS Instagram": 160348,
                    "iOS Pinterest": 160365,
                    "iOS Safari": 160340,
                    "iOS UC Browser": 160419,
                    "iOS Unknown Browser": 160349,
                    "Linux Chrome": 160386,
                    "Linux Firefox": 160416,
                    "Linux Opera": 160385,
                    "Linux Safari": 160405,
                    "OS X Chrome": 160383,
                    "OS X Firefox": 160379,
                    "OS X Instagram": 160430,
                    "OS X Pinterest": 160425,
                    "OS X Safari": 160354,
                    "OS X Unknown Browser": 160387,
                    "Windows 10 Chrome": 160368,
                    "Windows 10 Edge": 160377,
                    "Windows 10 Firefox": 160398,
                    "Windows 10 Instagram": 160418,
                    "Windows 7 Chrome": 160389,
                    "Windows 7 Firefox": 160406,
                    "Windows 7 Unknown Browser": 160433,
                    "Windows 8 Chrome": 160422,
                    "Windows 8 Internet Explorer": 160428,
                    "Windows 8.1 Chrome": 160434,
                    "Windows 8.1 Firefox": 160403,
                    "Windows 8.1 Internet Explorer": 160380,
                    "Windows Phone Internet Explorer": 160436,
                    "Windows Safari": 160421,
                    "Windows Unknown Browser": 160426,
                    "Windows Vista Chrome": 160427,
                    "Windows XP Chrome": 160432
                },
                tablet: {
                    "Android Chrome": 160415,
                    "Android Firefox": 160394,
                    "iOS Facebook Messenger": 160402,
                    "iOS Facebook": 160384,
                    "iOS Instagram": 160396,
                    "iOS Pinterest": 160388,
                    "iOS Safari": 160346,
                    "iOS Unknown Browser": 160382
                }
            };
            p = p[z] && p[z][l + " " + v];
            return {
                device: z,
                os: l,
                browser: v,
                id: p ? p : 160337,
                os_version: -1,
                browser_version: -1
            }
        },
        N, na = function() {
            var l = M.custom("LocalStorage", "#ff975b"),
                v = {},
                z = !1,
                p = !1;
            A.addEventListener("message", function(B) {
                if (B && B.data && B.data.action && "callback" === B.data.action) {
                    var K = v[B.data.id],
                        L = {};
                    if (K && "[object Function]" === L.toString.call(K)) {
                        l("Recieved window message, event ID:", B.data.id);
                        try {
                            var E =
                                JSON.parse(B.data.data);
                            v[B.data.id](E)
                        } catch (Y) {
                            try {
                                E = JSON.parse(decodeURIComponent(atob(B.data.data))), v[B.data.id](E)
                            } catch (r) {
                                l("[M2] Failed attempt 2 at receiving window message. Not continuing"), l("[M2] Failed to call callback for event.data.data", B), l("[M1] Error for callback: ", Y), l("[M2] Error for callback: ", r)
                            }
                        }
                    }
                }
            });
            var F = function(B, K) {
                    p ? (l("Setting CrossDomain Object for", B), B = {
                        action: "set",
                        name: B,
                        string: JSON.stringify(K)
                    }, A.frames.smc_lse_iframe.postMessage(B, "*")) : (l("Setting SameDomain Object for",
                        B), localStorage.setItem(B, JSON.stringify(K)))
                },
                G = function(B, K) {
                    if (p) {
                        l("Getting CrossDomain Object for", B);
                        var L = m.DateNow();
                        v[L] = K;
                        A.frames.smc_lse_iframe.postMessage({
                            action: "get",
                            name: B,
                            id: L
                        }, "*");
                        for (var E in v) v.hasOwnProperty(E) && 5E3 < m.DateNow() - E && delete v[E]
                    } else {
                        l("Getting SameDomain Object for", B);
                        L = localStorage.getItem(B) || null;
                        try {
                            L = JSON.parse(L)
                        } catch (Y) {
                            l("Failed to parse JSON value for LocalStorage key:", B, Y)
                        }
                        K(L)
                    }
                },
                x = function(B) {
                    p ? A.frames.smc_lse_iframe.postMessage({
                        action: "remove",
                        name: B
                    }, "*") : localStorage.removeItem(B)
                };
            return {
                lsInit: function(B) {
                    var K = aa.getURL("ls_endpoint"),
                        L = P.createElement("iframe");
                    L.setAttribute("src", K);
                    L.setAttribute("id", "smc_lse_iframe");
                    L.setAttribute("name", "smc_lse_iframe");
                    L.setAttribute("style", "visibility:hidden;width:0;height:0;position:fixed;bottom:-10px;right:-10px;");
                    L.setAttribute("src", K);
                    P.getElementsByTagName("body")[0].appendChild(L);
                    L.onload = function() {
                        F("smc_test_xdls", "smc_test_xdls");
                        setTimeout(function() {
                            G("smc_test_xdls", function(E) {
                                p =
                                    "smc_test_xdls" === E;
                                l("Removing CrossDomain object", "smc_test_xdls");
                                x("smc_test_xdls");
                                B()
                            })
                        }, 50)
                    };
                    z = !0
                },
                isLoaded: function() {
                    return z
                },
                check: function() {
                    l("checker() Testing same domain localStorage works");
                    try {
                        var B = !1;
                        localStorage.setItem("smc_test_ls", "smc_test_ls");
                        B = "smc_test_ls" === localStorage.getItem("smc_test_ls") ? !0 : !1;
                        localStorage.removeItem("smc_test_ls");
                        l("checker() Does same domain localStorage work?", B ? "Yes" : "No");
                        return B
                    } catch (K) {
                        return !1
                    }
                },
                set: F,
                get: G,
                del: x
            }
        }();
    const m = function() {
        var l =
            function() {
                var a = Date.now(),
                    c = (new Date).getTime();
                return "number" === typeof a && 10 > Math.abs(c - a) ? Date.now : function() {
                    return (new Date).getTime()
                }
            }();
        A.onblur = function() {
            J.leftTab = !0
        };
        A.onfocus = function() {
            J.leftTab = !1;
            J.leftPage || (J.leftPage = !1)
        };
        P.addEventListener("mouseout", function(a) {
            a = a || A.event;
            a = a.relatedTarget || a.toElement;
            a && "HTML" != a.nodeName || (J.leftPage = !0)
        });
        P.addEventListener("mousemove", function(a) {
            J.leftPage && (J.leftPage = !1, J.leftTab = !1)
        }, !0);
        var v = function() {
                var a = function(c) {
                    N.exists("smct_session") ||
                        N.create("smct_session", JSON.stringify({
                            s: l(),
                            l: l(),
                            lt: l(),
                            t: 0,
                            p: 0
                        }), 0);
                    var b = JSON.parse(N.read("smct_session")) || {};
                    return c === S ? b : "lt" === c ? Math.round((b.l - b.lt) / 1E3) : b[c]
                };
                return {
                    get: a,
                    init: function() {
                        setInterval(function() {
                            var c = a();
                            c.l = l();
                            J.leftTab || (c.t = a("t") + 1, c.lt = m.DateNow());
                            J.leftPage || (c.p = a("p") + 1);
                            N.create("smct_session", JSON.stringify(c), 0)
                        }, 1E3)
                    }
                }
            }(),
            z = function(a) {
                return k !== S && k.config !== S && 1 !== k.config.caseSensitive ? a.toLowerCase() : a
            },
            p = function(a) {
                var c = A.location.href;
                c = !1 !==
                    a ? z(c) : c;
                return k !== S && k.config !== S && 1 === k.config.ignoreHash ? c.split("#")[0] : c
            },
            F = function(a, c) {
                a = G(a)[0];
                return a.classList ? a.classList.contains(c) : !!a.className.match(new RegExp("(\\s|^)" + c + "(\\s|$)"))
            },
            G = function(a) {
                if (a === S) return null;
                if (-1 === a.indexOf(":eq(")) return P.querySelectorAll(a);
                for (var c = []; - 1 !== a.indexOf(":eq");) {
                    var b = a;
                    if (-1 !== b.indexOf(":eq(")) {
                        a = b.indexOf(":eq(");
                        var d = b.substring(0, a),
                            e = b.substring(a + 4, b.indexOf(")", a));
                        a = b.substring(b.indexOf(")", a) + 1, b.length);
                        ">" === d.charAt(0) &&
                            (d = d.substring(1, d.length));
                        ">" === a.charAt(0) && (a = a.substring(1, a.length));
                        c.push({
                            selector: d,
                            index: e
                        })
                    }
                }
                for (var q; 0 < c.length;) b = c.shift(), q = (q || P).querySelectorAll(b.selector)[b.index];
                return 0 < a.trim().length ? (q || P).querySelectorAll(a) : [q]
            },
            x = function(a) {
                if ("number" == typeof a || "boolean" == typeof a) return !1;
                if ("undefined" == typeof a || null === a) return !0;
                if ("undefined" != typeof a.length) return 0 == a.length;
                var c = 0,
                    b;
                for (b in a) a.hasOwnProperty(b) && c++;
                return 0 == c
            },
            B = function(a, c) {
                var b = [],
                    d;
                for (d in a)
                    if (a.hasOwnProperty(d)) {
                        var e =
                            c ? c + "[" + d + "]" : d,
                            q = a[d];
                        b.push(null !== q && "object" === typeof q ? B(q, e) : encodeURIComponent(e) + "=" + encodeURIComponent(q))
                    }
                return b.join("&")
            },
            K = function(a) {
                if ("undefined" !== typeof a && 0 < a.length) {
                    var c = function(q) {
                            return q.replace(/[,.]/g, function(u) {
                                return "," === u ? "." : ","
                            })
                        },
                        b = null;
                    a = a.match(/(([0-9]{1,}[\.,][0-9]{1,2})*[0-9]{1,}([\.,][0-9]{1,2}){0,2})/g);
                    if (null !== a) {
                        a = a[0].trim();
                        if (parseFloat(a).toString() === a) return parseFloat(a);
                        var d = a.substr(a.length - 2).substr(0, 1),
                            e = a.substr(a.length - 3).substr(0,
                                1);
                        d = "." === d || "." === e ? "." : "," === d || "," === e ? "," : !1;
                        e = a.substr(a.length - 4).substr(0, 1);
                        e = e.match(/[\.,]/) ? e : !1;
                        "." === d && 1 === (a.match(/\./g) || []).length ? b = a.replace(/[,]/g, "") : "," === d && 1 === (a.match(/,/g) || []).length ? b = c(a).replace(/[,]/g, "") : !1 === d && e && -1 !== a.indexOf(".") ? b = c(a).replace(/[,]/g, "") : !1 === d && e ? b = c(a).replace(/[\.]/g, "") : !1 === d && -1 !== a.indexOf(".") ? b = a : !1 === d && -1 !== a.indexOf(",") ? b = c(a).replace(/[,]/g, ".") : !1 === e && 0 === (a.match(/[,\.]/g) || []).length && (b = a);
                        return null === b ? null : parseFloat(b)
                    }
                }
                return null
            },
            L = function() {
                var a = localStorage.getItem("smc_abst");
                a || (a = "A", .5 < Math.random() && (a = "B"), localStorage.setItem("smc_abst", a));
                return a
            },
            E = function(a) {
                if ("spv" === a || "tpv" === a || "sesn" === a) {
                    var c = parseInt(N.read("smc_" + a), 10);
                    return isNaN(c) ? "sesn" === a ? 1 : 0 : c
                }
                if ("ref" === a) return N.ref.get();
                if ("device" === a || "dv" === a) return k.device;
                if ("id" === a) return k.id;
                if ("name" === a) return k.name;
                if ("loc" === a) return k.loc;
                if ("uid" === a) return ya.get();
                if ("propensity" === a) return h.get("propensity");
                if ("abst" === a) return L();
                if ("dynBasket" === a) {
                    a = {
                        ready: !1,
                        contents: []
                    };
                    if (c = localStorage.getItem("smc_dyn_item")) a.ready = !0, a.contents = JSON.parse(decodeURIComponent(atob(c)));
                    a.itemCount = a.contents.length;
                    return a
                }
                if ("recomminder" === a) return a = {
                    ready: !1
                }, a.first = S, a.dwell = S, (c = localStorage.getItem("smc_ml_viewed_items")) && (a = JSON.parse(decodeURIComponent(c))), a;
                if ("version" === a) return k.version
            },
            Y = function(a = !1) {
                var c = $smcT5.outputs.dynamic[ea.basketContent];
                localStorage !== S && localStorage.setItem("smc_basket_content", c);
                var b =
                    "",
                    d = 1,
                    e = 0,
                    q = c = "",
                    u = "";
                localStorage !== S && (b = localStorage.getItem("smc_basket_content"), d = parseInt(localStorage.getItem("smc_session_time")), b = b ? b : "", e = isNaN(d) ? 0 : d, d = parseInt(localStorage.getItem("smc_session_step")), d !== S && d && !0 !== d && !isNaN(d) && 1 <= d && d <= Number.MAX_SAFE_INTEGER ? d++ : d = 1, a && localStorage.setItem("smc_session_step", d));
                (a = m.get("loc")) && a.cc && "-" !== a.cc && (c = encodeURI(a.cc), q = encodeURI(a.reg), u = encodeURI(a.city));
                a = m.get("propensity");
                return {
                    spv: m.get("spv"),
                    tpv: m.get("tpv"),
                    dv: m.get("dv"),
                    itemID: $smcT5.outputs.dynamic[ea.itemID] || null,
                    itemPrice: $smcT5.outputs.dynamic[ea.itemPrice] || null,
                    itemPriceSale: $smcT5.outputs.dynamic[ea.itemPriceSale] || null,
                    itemName: $smcT5.outputs.dynamic[ea.itemName] || null,
                    orderID: $smcT5.outputs.dynamic[ea.orderID] || null,
                    orderValue: $smcT5.outputs.dynamic[ea.orderValue] || null,
                    basketContents: b,
                    machineLearningSessionTime: e,
                    currency: $smcT5.outputs.dynamic[ea.currency] || "",
                    sessionStep: d,
                    ns: N.read("smc_sesn"),
                    sid: N.read("smc_session_id"),
                    uid: m.get("uid"),
                    mdl_p: a.pred ||
                        null,
                    mdl_t: a.our_thought || null,
                    tag_index: k.id,
                    referrer: P.referrer,
                    href: A.location.href,
                    ipcc: c,
                    ipreg: q,
                    ipcity: u
                }
            },
            r = function(a) {
                var c = Y(!0);
                Z && Z.isUse && (c = {
                    tid: c.tag_index,
                    sid: c.sid,
                    ns: c.ns,
                    uid: c.uid,
                    spv: c.spv,
                    tpv: c.tpv,
                    st: c.machineLearningSessionTime,
                    ss: c.sessionStep,
                    drf: c.referrer,
                    hrf: c.href,
                    did: null === c.dv || null === c.dv.id ? 0 : c.dv.id,
                    iti: c.itemID,
                    itp: c.itemPrice,
                    itp_s: c.itemPriceSale,
                    itn: c.itemName,
                    cur: c.currency,
                    odi: c.orderID,
                    odv: c.orderValue,
                    bc: c.basketContents,
                    ipcc: c.ipcc,
                    ipreg: c.ipreg,
                    ipcity: c.ipcity,
                    btz: A.Intl && A.Intl.DateTimeFormat() && A.Intl.DateTimeFormat().resolvedOptions() ? A.Intl.DateTimeFormat().resolvedOptions().timeZone : null,
                    bt: (new Date).toISOString(),
                    mdl_p: c.mdl_p,
                    mdl_t: c.mdl_t
                }, M("ML2a", c), c = {
                    type: "machineLearning",
                    payload: c
                }, "function" === typeof Z.plugin.event ? (Z.plugin.event(c), a(!0, "ML Training event sent")) : (Array.isArray(Z.holding) || (Z.holding = []), Z.holding.push(c), a(!0, "EventTracker not ready, ML Training event queued")))
            },
            X = function(a) {
                var c = aa.getURL("px2b_endpoint_url"),
                    b = ea.inference ||
                    0;
                M(`Run ML inference? ${b}`);
                if (1 === b && 1 <= c.indexOf("events.smct.co")) {
                    b = Y(!1);
                    var d = {
                        tid: b.tag_index,
                        sid: b.sid,
                        uid: b.uid,
                        did: null === b.dv.id ? 0 : b.dv.id,
                        spv: b.spv,
                        tpv: b.tpv,
                        st: b.machineLearningSessionTime,
                        cur: b.currency,
                        odi: b.orderID,
                        odv: b.orderValue,
                        bc: b.basketContents
                    };
                    b.itemID && (d.iti = b.itemID);
                    b.itemPrice && (d.itp = b.itemPrice);
                    b.itemPriceSale && (d.itp_s = b.itemPriceSale);
                    if (d.tid && d.sid && d.uid) {
                        c += "/" === c.charAt(c.length - 1) ? "up/inference/predict_json" : "/up/inference/predict_json";
                        var e = new XMLHttpRequest;
                        e.open("POST", c);
                        e.withCredentials = !0;
                        e.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
                        e.send(JSON.stringify(d));
                        e.onreadystatechange = function() {
                            if (4 === e.readyState && 200 === e.status) try {
                                var q = JSON.parse(e.response);
                                h.set(q, "propensity");
                                a(!0)
                            } catch (u) {
                                ha("ML Result Error:", u), a(!1, u)
                            }
                        }
                    }
                } else a(!1)
            };
        const n = M.custom("Ajax", "#ff9410");
        var t = {
                x: function() {
                    if ("undefined" !== typeof XMLHttpRequest) return new XMLHttpRequest;
                    for (var a = "MSXML2.XmlHttp.6.0 MSXML2.XmlHttp.5.0 MSXML2.XmlHttp.4.0 MSXML2.XmlHttp.3.0 MSXML2.XmlHttp.2.0 Microsoft.XmlHttp".split(" "),
                            c, b = 0; b < a.length; b++) try {
                        c = new ActiveXObject(a[b]);
                        break
                    } catch (d) {}
                    return c
                },
                send: function(a, c, b, d, e, q = 3E3) {
                    n(`Sending Ajax request with async: ${e===S?"true":String(e)}`);
                    e === S && (e = !0);
                    var u = t.x();
                    u.open(b, a, e);
                    u.timeout = q;
                    u.onreadystatechange = function() {
                        4 == u.readyState && c(u.responseText)
                    };
                    "POST" == b && u.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    n(`${b} request made to ${a}`, {
                        data: d,
                        async: e,
                        timeout: q
                    });
                    u.send(d)
                },
                get: function(a, c, b, d, e = 3E3) {
                    var q = [],
                        u;
                    for (u in c) c.hasOwnProperty(u) &&
                        q.push(encodeURIComponent(u) + "=" + encodeURIComponent(c[u]));
                    t.send(a + (q.length ? "?" + q.join("&") : ""), b, "GET", null, d, e)
                },
                post: function(a, c, b, d) {
                    var e = [],
                        q;
                    for (q in c) c.hasOwnProperty(q) && e.push(encodeURIComponent(q) + "=" + encodeURIComponent(c[q]));
                    t.send(a, b, "POST", e.join("&"), d)
                }
            },
            f = function() {
                var a = "$ \u20ac \u00a3 \u00a5 \u20a1 \u20aa \u20b9 \u20a9 \u20a6 \u20b1 z\u0142 \u0142 \u20b2 \u0e3f \u20b4 \u20ab AED AFN ALL AMD ANG AOA ARS AUD AWG AZN BAM BBD BDT BGN BHD BIF BMD BND BOB BRL BSD BTC BTN BWP BYN BZD CAD CDF CHF CLF CLP CNH CNY COP CRC CUC CUP CVE CZK DJF DKK DOP DZD EGP ERN ETB EUR FJD FKP GBP GEL GGP GHS GIP GMD GNF GTQ GYD HKD HNL HRK HTG HUF IDR ILS IMP INR IQD IRR ISK JEP JMD JOD JPY KES KGS KHR KMF KPW KRW KWD KYD KZT LAK LBP LKR LRD LSL LYD MAD MDL MGA MKD MMK MNT MOP MRO MRU MUR MVR MWK MXN MYR MZN NAD NGN NIO NOK NPR NZD OMR PAB PEN PGK PHP PKR PLN PYG QAR RON RSD RUB RWF SAR SBD SCR SDG SEK SGD SHP SLL SOS SRD SSP STD STN SVC SYP SZL THB TJS TMT TND TOP TRY TTD TWD TZS UAH UGX USD UYU UZS VEF VES VND VUV WST XAF XAG XAU XCD XDR XOF XPD XPF XPT YER ZAR ZMW ZWL".split(" "),
                    c = function(b, d) {
                        var e = [];
                        if (b && "string" === typeof b)
                            for (var q in a)
                                if (a.hasOwnProperty(q)) {
                                    var u = a[q];
                                    if (-1 < b.indexOf(u))
                                        if (!0 === d) e.push(u);
                                        else return u
                                }
                        return 0 === e.length ? !1 : 1 === e.length ? e[0] : e[e.length - 1]
                    };
                return {
                    currencies: a,
                    currencySearch: c,
                    searcher: function(b) {
                        var d = b.match(new RegExp(/[0-9,.]+/ig)),
                            e = !1,
                            q = b ? b.replace(/\n/g, "").trim() : "";
                        d && (e = 1 === d.length ? d[0] : d[d.length - 1]);
                        d = c(b, d && 1 < d.length ? !0 : !1);
                        if (e && d) {
                            q = b.indexOf(e);
                            var u = b.indexOf(d);
                            q = q > u ? d + " " + e : e + " " + d;
                            e = q.replace(/\s+/g, ""); -
                            1 < b.replace(/\s+/g, " ").indexOf(q) || -1 < b.indexOf(e) && (q = e)
                        } else e && (q = e);
                        return q
                    },
                    convertForMaths: function(b) {
                        b = b.match(new RegExp(/[0-9,.]+/ig));
                        var d = 0;
                        b && (d = 1 === b.length ? b[0] : b[b.length - 1], "," === d.slice(-3).substr(0, 1) && (d = d.replace(/[,.]/g, function(e) {
                            return "," === e ? "." : ","
                        })), d = d.replace(/,/g, ""), d = parseFloat(d));
                        return isNaN(d) ? 0 : d
                    }
                }
            }(),
            g = function() {
                var a = function(c, b) {
                    var d = [],
                        e = 1,
                        q = function() {
                            for (i = 0; i < arguments.length; i++) d.push(arguments[i])
                        },
                        u = function(D, C) {
                            if (100 < e || "object" !== typeof D ||
                                null === D) return !1;
                            for (var R = Object.keys(D), T = 0; T < R.length && (b === R[T] && C.push(D[R[T]]), "number" !== typeof D[R[T]]); T++) "object" === typeof D[R[T]] && (e++, u(D[R[T]], C));
                            return C
                        };
                    c.forEach(function(D) {
                        var C = [];
                        (C = u(D, C)) && q.apply(null, C)
                    });
                    return d
                };
                return {
                    scan: a,
                    scanResult: function(c, b) {
                        c = a(c, b);
                        if (1 > c.length) return ia("objectScanResult : zero array"), 0;
                        1 < c.length && ia("objectScanResult : More than 1 results found");
                        return c[0]
                    },
                    filterKey: function(c, b) {
                        c = c.filter(function(d) {
                            return d.hasOwnProperty(b)
                        });
                        1 !== c.length && ia("objectScanResult : More than 1 result found");
                        return 1 === c.length ? c[0] : c
                    }
                }
            }(),
            h = function() {
                var a = function(c) {
                    var b = {};
                    try {
                        var d = N.read(c);
                        d && (b = JSON.parse(decodeURIComponent(d)))
                    } catch (e) {
                        ha("ML Function 2", e)
                    }
                    return b
                };
                return {
                    get: function(c, b = "smc_ml") {
                        b = a(b);
                        return b[c] ? b[c] : {}
                    },
                    set: function(c, b, d = "smc_ml") {
                        var e = a(d);
                        e[b] = c;
                        N.create(d, encodeURIComponent(JSON.stringify(e)))
                    }
                }
            }();
        const w = function() {
            return {
                safeListener: (a, c, b, d) => e => {
                    b().forEach(q => {
                        if (q) {
                            var u = !!q ? .getAttribute(c);
                            q && !u && (q.addEventListener(a, D => {
                                D = d(D, q);
                                e(D)
                            }), q.setAttribute(c, "true"))
                        }
                    })
                },
                shadowBasket: ({
                    addEvent: a,
                    removeEvent: c,
                    deleteEvent: b,
                    quantityEvent: d,
                    syncBasket: e,
                    onUpdate: q
                }) => {
                    const u = (I, V) => {
                            V = V.filter(W => {
                                W = { ...W,
                                    quantity: W.quantity ? ? 1
                                };
                                return W.name || W.title ? !0 : ($smcT5 ? .tagHelpers ? .DBC("Cannot find product name or title, will not add to basket"), $smcT5 ? .tagHelpers ? .DBC("Product: ", W), !1)
                            });
                            const O = V.filter(W => !I.find(ca => ca.name && ca.name === W.name || ca.title && ca.title === W.title)),
                                Q = V.filter(W =>
                                    !O.find(ca => ca.name && ca.name === W.name || ca.title && ca.title === W.title));
                            return [...I.reduce((W, ca) => {
                                var da = Q.find(({
                                    name: ba,
                                    title: oa
                                }) => ba && ba === ca.name || oa && oa === ca.title);
                                da = (ca.quantity ? ? 1) + (da ? .quantity ? ? 0);
                                return [...W, { ...ca,
                                    quantity: da
                                }]
                            }, []), ...O]
                        },
                        D = (I, V) => I.reduce((O, Q) => {
                            var W = V.find(da => Q.name && Q.name === da.name || Q.title && Q.title === da.title);
                            const ca = !!W;
                            W = Q.quantity - W ? .quantity;
                            return ca && 0 < W ? [...O, { ...Q,
                                quantity: W
                            }] : ca && 0 >= W ? O : [...O, Q]
                        }, []),
                        C = (I, V) => I.filter(O => !V.find(Q => O.name && O.name ===
                            Q.name || O.title && O.title === Q.title)),
                        R = (I, V) => I.map(O => {
                            const Q = V.find(W => O.name && O.name === W.name || O.title && O.title === W.title);
                            return m.isNil(Q) ? O : { ...O,
                                quantity: Q.quantity
                            }
                        }).filter(O => 1 > O.quantity);
                    var T = (I, V) => V.map(O => {
                        const Q = I.find(W => W.name && W.name === O.name || W.title && W.title === O.title);
                        return m.isNil(Q) ? O : { ...Q,
                            ...O
                        }
                    });
                    const y = (I, V, O, Q) => {
                        A.smcShadowBasketLogs && ($smcT5.tagHelpers.DBC("======================================"), $smcT5.tagHelpers.DBC(`Shadow Basket - ${I}`), $smcT5.tagHelpers.DBC("Current basket: ",
                            V), $smcT5.tagHelpers.DBC("New products: ", Q), $smcT5.tagHelpers.DBC("New basket: ", O), $smcT5.tagHelpers.DBC("======================================"))
                    };
                    a && (Array.isArray(a) ? a : [a]).forEach(I => {
                        I(V => {
                            const O = m.readLs("smc_basket", []),
                                Q = u(O, V);
                            y("Add event", O, Q, V);
                            m.writeLs("smc_basket", Q, O);
                            q && q({
                                basket: O,
                                newBasket: Q,
                                products: V
                            })
                        })
                    });
                    c && (Array.isArray(c) ? c : [c]).forEach(I => {
                        I(V => {
                            const O = m.readLs("smc_basket", []),
                                Q = D(O, V);
                            y("Remove event", O, Q, V);
                            m.writeLs("smc_basket", Q, O);
                            q && q({
                                basket: O,
                                newBasket: Q,
                                products: V
                            })
                        })
                    });
                    b && (Array.isArray(b) ? b : [b]).forEach(I => {
                        I(V => {
                            const O = m.readLs("smc_basket", []),
                                Q = C(O, V);
                            y("Delete event", O, Q, V);
                            m.writeLs("smc_basket", Q, O);
                            q && q({
                                basket: O,
                                newBasket: Q,
                                products: V
                            })
                        })
                    });
                    d && (Array.isArray(d) ? d : [d]).forEach(I => {
                        I(V => {
                            const O = m.readLs("smc_basket", []),
                                Q = R(O, V);
                            y("Quantity event", O, Q, V);
                            m.writeLs("smc_basket", Q, O);
                            q && q({
                                basket: O,
                                newBasket: Q,
                                products: V
                            })
                        })
                    });
                    e && (a = m.readLs("smc_basket", []), e = e(), m.isNil(e) || (T = T(a, e), m.arraysEqual(a, T) || (y("Sync basket", a, T, e), m.writeLs("smc_basket",
                        T, a), q && q({
                        basket: a,
                        newBasket: T,
                        products: e
                    }))))
                },
                getBasket: function() {
                    return m.readLs("smc_basket")
                }
            }
        }();
        return {
            queryString: function(a, c) {
                c = !1 !== c ? p() : p(!1);
                a = a.replace(/[\[\]]/g, "\\$&");
                return (a = (new RegExp("[?&]" + a + "(=([^&#]*)|&|#|$)")).exec(c)) ? a[2] ? decodeURIComponent(a[2].replace(/\+/g, " ")) : "" : null
            },
            hashContains: function(a) {
                return -1 !== A.location.hash.indexOf(a) ? 1 : 0
            },
            elmLen: function(a) {
                return x(a) ? 0 : G(a).length
            },
            hasClass: F,
            addClass: function(a, c) {
                c = c.trim();
                a = "string" === typeof a ? G(a) : a;
                if (a !==
                    S)
                    for (var b = 0; b < a.length; b++)
                        if (a[b].classList)
                            if (-1 < c.indexOf(" "))
                                for (var d = c.replace(/\s\s+/g, " ").split(" "), e = 0; e < d.length; e++) a[b].classList.add(d[e].trim());
                            else a[b].classList.add(c);
                else F(a[b], c) || (a[b].className += "" === a[b].className ? c : " " + c)
            },
            removeClass: function(a, c) {
                c = c.trim();
                a = "string" === typeof a ? G(a) : a;
                if (a !== S)
                    for (var b = 0; b < a.length; b++)
                        if (a[b].classList)
                            if (-1 < c.indexOf(" "))
                                for (var d = c.replace(/\s\s+/g, " ").split(" "), e = 0; e < d.length; e++) a[b].classList.remove(d[e].trim());
                            else a[b].classList.remove(c);
                else F(a[b], c) && (a[b].className = a[b].className.replace(new RegExp("(\\s|^)" + c + "(\\s|$)"), " "))
            },
            empty: x,
            serialize: B,
            functionizer: function(a, c) {
                for (var b in c)
                    if (c.hasOwnProperty(b)) {
                        var d = c[b].type,
                            e = c[b].vals;
                        e[0] && e[1] && "replace" === d && (a && = a.replace(new RegExp(e[0], "g"), e[1] === S ? "" : e[1]));
                        (e[0] && "after" === d || "before" === d) && a && (a = a.split(e[0]), a = a["after" === d ? 1 : 0]);
                        e[0] && e[1] && "between" === d && (a && = a.split(e[0]).pop().split(e[1]).shift());
                        "trim" === d && (a && = a.trim());
                        "digits" === d && (a && = a.replace(/[^0-9.]+/g,
                            ""));
                        "int" === d && (a && = parseInt(a, 10));
                        "float" === d && (a && = parseFloat(a));
                        "special" === d && (a && = K(a));
                        e[0] && e[1] && "split" === d && (a && = a.split(e[0])[parseInt(e[1], 10)]);
                        a = "int" !== d && "float" !== d || !isNaN(a) ? a : 0
                    }
                return a
            },
            htmlTextSearch: function(a, c) {
                a = P.body.childNodes;
                c = z(c);
                c = c.split(",");
                for (var b = "SCRIPT INPUT TEXTAREA #comment #text SMCCDB IFRAME".split(" "), d = 0; d < a.length; d++) {
                    var e = a[d];
                    try {
                        if (e.nodeName !== S && -1 === b.indexOf(e.nodeName) && -1 === e.nodeName.indexOf("SMCT-") && -1 === e.nodeName.indexOf("SMC-") &&
                            e.id && -1 === e.id.toString().indexOf("smc-")) {
                            var q = e.innerText.replace(/\s/g, " ");
                            q = z(q);
                            for (e = 0; e <= c.length - 1; e++)
                                if (-1 !== q.indexOf(c[e])) return !0
                        }
                    } catch (u) {
                        ia(u)
                    }
                }
                return !1
            },
            urlTextSearch: function(a, c) {
                a = p();
                c = z(c);
                c = c.split(",");
                for (var b = 0; b <= c.length - 1; b++)
                    if (-1 !== a.indexOf(c[b])) return !0;
                return !1
            },
            incrementPageViews: function() {
                var a = parseInt(N.read("smc_spv"), 10),
                    c = parseInt(N.read("smc_tpv"), 10);
                a = isNaN(a) ? 0 : a;
                c = isNaN(c) ? 0 : c;
                a++;
                c++;
                N.create("smc_tpv", c, 5256E3);
                N.create("smc_spv", a, 0);
                1 === a &&
                    (a = parseInt(N.read("smc_sesn"), 10), a = isNaN(a) ? 0 : a, a++, N.create("smc_sesn", a, 5256E3))
            },
            SalesTrackingABSplitValue: L,
            pixelTracker: function(a, c, b) {
                var d = M.custom("PixelTracker", "#1e831d");
                if (1 == k.config.pxTrackOff) return !1;
                var e = N.ref.get(),
                    q = E("spv"),
                    u = E("tpv"),
                    D = E("dv");
                if (Z && Z.isUse) {
                    a = {
                        tid: k.id,
                        spv: q,
                        tpv: u,
                        ipb: !!k.ipb,
                        ref: e,
                        aid: c,
                        uid: a,
                        did: null === D.id ? 0 : D.id,
                        cid: b,
                        ody: JSON.stringify(J.dynamic),
                        sid: E("uid"),
                        ver: E("version"),
                        ip: k.ip,
                        lng: navigator.language,
                        t: k.t,
                        hrf: A.location.href,
                        drf: P.referrer,
                        odc: JSON.stringify([])
                    };
                    var C = E("loc");
                    C && C.cc && "-" !== C.cc && (a.loc = btoa(JSON.stringify(C)));
                    d(`PX2a -> Activity ID: ${a.aid}`, a);
                    d = {
                        type: "overlay",
                        payload: a
                    };
                    "function" === typeof Z.plugin.event ? Z.plugin.event(d) : (Array.isArray(Z.holding) || (Z.holding = []), Z.holding.push(d))
                } else C = aa.getURL("pxt_domain"), C && "" !== C.trim() || (d("Has to use Fallback Pixel Tracker URL"), C = "https://smct.co/"), a = "" + k.id + "-" + q + "-" + u + "-" + k.ipb + "-" + e + "-" + c + "-" + a + "-" + (null === D.id ? 0 : D.id) + "-" + b + "/px2.png?ts=" + l(), d("PX1 OLD: ", C + a), (new Image).src = C + a
            },
            runMachineLearning: function() {
                if (!ta && 0 !== Object.keys(ea).length) {
                    var a = ta;
                    ta = !0;
                    var c = ["on"],
                        b;
                    for (b in ea) {
                        var d = ea[b];
                        if (d && "" !== d && -1 === c.indexOf(d)) {
                            if ("undefined" === typeof va[d] || va[d] !== $smcT5.outputs.dynamic[d]) a = !1;
                            va[d] = $smcT5.outputs.dynamic[d]
                        }
                    }
                    if (a) return M("Nothing has been changed in the ML Dynamic Keys, don't resend ML event"), !1;
                    r(function(e, q) {
                        e ? M("Training Complete", q) : !e && q ? ha("Training Failure: ", q) : M("Training didn't run, unknown error")
                    });
                    X(function(e, q) {
                        e ? M("Inference Complete",
                            e, q) : !e && q ? ha("Inference Failure: ", q) : M("Inference didn't run, most likely disabled")
                    })
                }
                $smcT5.outputs.dynamic && ea && ea.confirmationPage && !0 === $smcT5.outputs.dynamic[ea.confirmationPage] && (localStorage !== S && localStorage.setItem("smc_basket_content", ""), $smcT5.outputs.dynamic[ea.orderID] = "", $smcT5.outputs.dynamic[ea.orderValue] = "")
            },
            userPropensityInference: X,
            searchDataLayer: function(a, c) {
                try {
                    if (A[a] !== S) {
                        var b = A[a],
                            d;
                        for (d in b)
                            if (b.hasOwnProperty(d)) {
                                if (d == c) return b[d];
                                if (-1 !== c.indexOf(">")) {
                                    var e =
                                        c.split(">");
                                    if (2 == e.length && b[d][e[0].trim()] !== S) {
                                        var q = b[d][e[0].trim()][e[1].trim()];
                                        if ("object" !== typeof q) return q
                                    } else if (3 == e.length && b[d][e[0].trim()] !== S && b[d][e[0].trim()][e[1].trim()] !== S) {
                                        if (q = b[d][e[0].trim()][e[1].trim()][e[2].trim()], "object" !== typeof q) return q
                                    } else if (4 == e.length && b[d][e[0].trim()] !== S && b[d][e[0].trim()][e[1].trim()] !== S && b[d][e[0].trim()][e[1].trim()][e[2].trim()] !== S && (q = b[d][e[0].trim()][e[1].trim()][e[2].trim()][e[3].trim()], "object" !== typeof q)) return q
                                } else
                                    for (var u in b[d])
                                        if (b[d].hasOwnProperty(u)) {
                                            var D =
                                                b[d][u];
                                            if ("object" === typeof D)
                                                for (var C in D)
                                                    if (D.hasOwnProperty(C)) {
                                                        var R = b[d][u][C];
                                                        if ("object" === typeof R)
                                                            for (var T in R)
                                                                if (R.hasOwnProperty(T)) {
                                                                    var y = b[d][u][C][T];
                                                                    if (T == c && "object" !== typeof y) return y
                                                                }
                                                        if (C == c && "object" !== typeof R) return R
                                                    }
                                            if (u == c && "object" !== typeof D) return D
                                        }
                            }
                    }
                    return !1
                } catch (I) {
                    return !1
                }
            },
            userSessionTimes: v,
            getURL: p,
            setCase: z,
            get: E,
            ML: h,
            DateNow: l,
            getWidth: function() {
                return self.innerWidth ? self.innerWidth : P.documentElement && P.documentElement.clientWidth ? P.documentElement.clientWidth :
                    P.body ? P.body.clientWidth : void 0
            },
            getHeight: function() {
                return self.innerHeight ? self.innerHeight : P.documentElement && P.documentElement.clientHeight ? P.documentElement.clientHeight : P.body ? P.body.clientHeight : void 0
            },
            ajax: t,
            getElms: G,
            referrerDomain: function() {
                var a = P.referrer;
                a = "string" == typeof a ? a.slice(0, a.indexOf("/", 10)) : "";
                var c = A.location.origin;
                "" !== a && a !== c && N.create("smc_r", btoa(encodeURIComponent(a)), 10080);
                a = null;
                try {
                    null !== N.read("smc_r") && (a = decodeURIComponent(atob(N.read("smc_r"))))
                } catch (b) {
                    a =
                        null, ia("ref Domain Error from cookie")
                }
                return a
            },
            dynKeyReplace: function(a, c) {
                try {
                    for (var b in fa)
                        if (fa.hasOwnProperty(b)) {
                            var d = fa[b];
                            d === S && (d = "undefined");
                            c && (d = encodeURIComponent(d));
                            a = a.replace(new RegExp("{" + b + "}", "g"), d);
                            var e = new RegExp("{" + b.toLowerCase() + "}", "g");
                            a = a.replace(e, d)
                        }
                } catch (q) {
                    U && ha("dynKeyReplace Error: \n", q)
                }
                return a
            },
            validateEmail: function(a) {
                return /^([\w-\+]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(a)
            },
            extractHostname: function(a) {
                a = -1 < a.indexOf("://") ? a.split("/")[2] : a.split("/")[0];
                a = a.split(":")[0];
                return a = a.split("?")[0]
            },
            AddCss: function(a, c) {
                var b = P.createElement("style");
                b.setAttribute("type", "text/css");
                b.setAttribute("id", c);
                b.appendChild(P.createTextNode(a));
                P.getElementsByTagName("head")[0].appendChild(b)
            },
            urlChecker: function(a, c) {
                for (var b in a)
                    if (a.hasOwnProperty(b)) {
                        var d = a[b].toString().trim();
                        d = m.setCase(d);
                        if ('"' == d.substr(0, 1) && '"' == d.slice(-1)) {
                            if (d = d.substring(1, d.length - 1).trim(), c === d.replace("http://",
                                    "https://") || c === d.replace("https://", "http://")) return !0
                        } else if ("{" === d.substr(0, 1) && "}" === d.slice(-1)) {
                            if (d = d.substring(1, d.length - 1).trim(), m.setCase(A.location.pathname) === d) return !0
                        } else if (-1 !== c.indexOf(d.replace("http://", "https://")) || -1 !== c.indexOf(d.replace("https://", "http://"))) return !0
                    }
                return !1
            },
            DBC: M,
            DBCP: ka,
            DBW: ia,
            DBE: ha,
            priceFinder: f,
            objectScanner: g,
            expireDynamicCode: async a => {
                var c = "smc_dc_" + a;
                const b = `${"smc_dc_"}token_${a}`;
                if (!a) return ha("You must supply a poolId, aborting expire"), !1;
                var d = localStorage.getItem(c);
                d = d ? atob(decodeURIComponent(d)) : d;
                const e = localStorage.getItem(b);
                if (!d && !e) return ha(`Code "${c}" not cached locally, aborting expire`), !1;
                localStorage.removeItem(c);
                localStorage.removeItem(b);
                a = await $smcJQ.get(`${"https://dc.smct.co/v4/"}expire?pool_id=${a}&code=${d}`);
                c = "Expired" === a ? .status;
                return c ? c : (ha("Api failure: ", a), !1)
            },
            isNil: a => a === S || null === a,
            encodeValue: a => btoa(encodeURIComponent(a)),
            decodeValue: a => decodeURIComponent(atob(a)),
            readLs: (a, c) => {
                a = (a = localStorage.getItem(a)) ?
                    m.decodeValue(a) : a;
                c = m.isNil(a) ? c : a;
                try {
                    return JSON.parse(c)
                } catch {
                    return c
                }
            },
            writeLs: (a, c, b) => {
                var d = "string" === typeof c ? c : JSON.stringify(c);
                d = m.encodeValue(d);
                b !== d && (null === c && localStorage.removeItem(a), null !== c && localStorage.setItem(a, d))
            },
            arraysEqual: (a, c) => JSON.stringify(a) === JSON.stringify(c),
            basket: w
        }
    }();
    var ya = function() {
            var l = function() {
                    var z = m.DateNow().toString();
                    return parseInt(z + Math.floor(900 * Math.random() + 100).toString(), 10)
                },
                v = function(z) {
                    var p = parseInt(N.read("smc_uid"), 10);
                    !isNaN(p) &&
                        0x3e871b540c06f < p && 9000000000000111 > p || (p = l(), N.create("smc_uid", p, 5256E3));
                    var F = parseInt(m.queryString("smc_uid"), 10);
                    0x3e871b540c06f < F && 9000000000000111 > F && !isNaN(F, 10) && F !== p ? (N.create("smc_uid", F, 5256E3), z && !0 === na.check() && na.lsInit(function() {
                        na.set("smc_uid", F)
                    })) : z && !0 === na.check() && na.lsInit(function() {
                        na.get("smc_uid", function(G) {
                            (G = parseInt(G, 10)) && !isNaN(G) && 0x3e871b540c06f < G && 9000000000000111 > G ? G !== p && N.create("smc_uid", G, 5256E3) : na.set("smc_uid", p)
                        })
                    });
                    return p
                };
            return {
                get: function() {
                    var z =
                        parseInt(N.read("smc_uid"), 10);
                    return z = !isNaN(z) && 0x3e871b540c06f < z && 9000000000000111 > z ? z : v()
                },
                set: v
            }
        }(),
        Aa = !1,
        Ba = !1,
        Ha = function() {
            var l = function(n) {
                    if ("" === n) return !1;
                    var t = m.getElms(n);
                    if (0 === t.length) return null;
                    if (1 < t.length) return t.length;
                    var f = t[0].getBoundingClientRect();
                    return {
                        selector: n,
                        element: t[0],
                        length: t.length,
                        tag: t[0].tagName,
                        type: t[0].type,
                        pos: {
                            t: f.top,
                            r: f.right,
                            b: f.bottom,
                            l: f.left
                        }
                    }
                },
                v = function(n) {
                    var t = H.autoInsert,
                        f = {
                            url: 0,
                            cookiePass: 0,
                            cookieInfo: 0,
                            vc: 0,
                            inputInfo: 0,
                            holderInfo: 0,
                            animateInfo: 0,
                            animateClass: 0,
                            timeUp: 0,
                            displayFor: 0
                        };
                    t(f);
                    var g = 0;
                    if ("" !== n.url.trim()) {
                        var h = n.url.split(",");
                        for (c in h) h.hasOwnProperty(c) && -1 !== m.getURL().indexOf(m.setCase(h[c].trim())) && (g = 1)
                    }
                    if (1 === g) {
                        f.url = 1;
                        t(f);
                        var w = N.read("smc_vc");
                        if (null !== w) try {
                            w = JSON.parse(w);
                            f.cookieInfo = w;
                            try {
                                var a = decodeURIComponent(atob(w.v));
                                f.vc = a;
                                f.cookiePass = 1
                            } catch (u) {
                                f.vc = "VOUCHER INCORRECTLY ENCODED"
                            }
                        } catch (u) {
                            f.cookieInfo = "NOT OBJECT"
                        }
                        if (1 === f.cookiePass) {
                            var c = w.d;
                            h = parseFloat(w.e);
                            var b = w.u,
                                d = m.DateNow();
                            g = parseInt(n.secsDisp, 10);
                            g = isNaN(g) ? 600 : g;
                            h = Math.round(86400 * h);
                            c = Math.round((d - c) / 1E3);
                            var e = null === b ? !1 : Math.round((d - b) / 1E3);
                            f.displayFor = g;
                            f.cookieExpires = h;
                            f.cookieLive = c;
                            f.cookieUsed = e;
                            f.timeUp = g - e;
                            t(f);
                            if (!1 !== e && e >= g) return !1;
                            if (c < h) {
                                clearInterval(q);
                                var q = setInterval(function() {
                                    var u = l(n.input);
                                    f.inputInfo = u;
                                    t(f);
                                    if (null !== u && 1 === u.length) {
                                        clearInterval(q);
                                        var D = l(n.holder),
                                            C = l("" === n.elmAnimate ? n.input : n.elmAnimate),
                                            R = parseInt(n.timeout, 10);
                                        R = isNaN(R) ? 100 : R;
                                        f.holderInfo = D;
                                        f.animateInfo =
                                            C;
                                        if ("" !== n.additional && $smcT5.CustomScripts && "function" === typeof $smcT5.CustomScripts.AECode) try {
                                            $smcT5.CustomScripts.AECode()
                                        } catch (T) {
                                            ha.custom("AE Code", "purple")(T)
                                        }
                                        t(f);
                                        clearTimeout(void 0);
                                        setTimeout(function() {
                                            null !== D && 1 === D.length && (m.AddCss(".smct-force-display{display:" + n.holderDisplay + " !important;visibility:visible !important;opacity:1 !important;}", "smct-AutoInsert-forceDisplay"), D.element.className += " smct-force-display");
                                            null !== C && 1 === C.length && "none" !== n.elmAnimateClass && (f.animateClass =
                                                n.elmAnimateClass, setTimeout(function() {
                                                    C.element.className += " smct-animated smct-" + n.elmAnimateClass
                                                }, 100));
                                            u.element.value = a;
                                            null === b && (w.u = d, N.create("smc_vc", JSON.stringify(w), 525600));
                                            t(f)
                                        }, R)
                                    }
                                }, 100)
                            }
                        }
                    }
                },
                z = !1,
                p = !1,
                F = !1,
                G = function(n) {
                    if ("undefined" === typeof Notification) ka("Browser does not support Notifications");
                    else if ("" === n.serviceWorker.trim()) ka("Notifications - Service Worker not set.");
                    else {
                        M("1. Running Offline Notifications");
                        var t = function() {
                            M("3. sessionCheck() ");
                            null == J.notification &&
                                "function" == typeof A.smctAskNotification && A.smctAskNotification(n, k.config.webpush_key, $smctResources.getURL("notification_checker"));
                            var h = {};
                            Object.keys(J.dynamic).forEach(w => {
                                var a = J.dynamic[w];
                                h[w] = "string" === typeof a || a instanceof String ? a.replace(RegExp("&", "g"), "%26") : a
                            });
                            setTimeout(function() {
                                var w = J.notification;
                                if (w) {
                                    var a = 0;
                                    J.goalMatch && (a = 1);
                                    var c = 0,
                                        b = $smcT5.tagHelpers.get("dv");
                                    b && b.id && (c = b.id);
                                    w = "sid=" + ya.get() + "&tid=" + m.get("id") + "&a=" + w.auth + "&p=" + w.public_key + "&e=" + w.endpoint + "&d=" +
                                        JSON.stringify(h) + "&did=" + c + "&z=" + a;
                                    a = new XMLHttpRequest;
                                    a.open("POST", $smctResources.getURL("notification_checker"), !0);
                                    a.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                                    a.send(w)
                                }
                            }, 1E3)
                        };
                        !J.goalMatch || "granted" != Notification.permission || F || p || (t(), F = !0);
                        if (p) return !1;
                        var f = function(h, w) {
                                var a = setTimeout(function() {
                                    "granted" == Notification.permission && t();
                                    w *= h;
                                    clearTimeout(a);
                                    f(h, w)
                                }, w)
                            },
                            g = function() {
                                "granted" == Notification.permission && (clearTimeout(z), t(), f(1.5, 4E4))
                            };
                        p = !0;
                        Notification &&
                            "default" == Notification.permission && (z = setInterval(function() {
                                g()
                            }, 1E3));
                        ja.anyScriptLoader("notification_app", function() {
                            g();
                            M("2. checkUserOnline() ")
                        })
                    }
                },
                x = !1,
                B = function(n) {
                    var t = H.saleTrack,
                        f = {
                            cp: !1,
                            ov: null,
                            oid: null,
                            cur: null,
                            insights: null,
                            px1Fired: null
                        };
                    A.$smcTrack ? Aa === JSON.stringify(A.$smcTrack) ? M("window.$smcTrack has already run", A.$smcTrack) : (Aa = JSON.stringify(A.$smcTrack), f.cp = !0, f.ov = $smcTrack.value, f.oc = $smcTrack.count, f.oid = $smcTrack.ref, f.cur = $smcTrack.currency, f.vc = $smcTrack.voucher,
                        f.type = $smcTrack.type, n = {}, U && (n.eh = 1)) : (f.cp = fa[n.confirmPage], f.ov = "ignore" === n.orderValue ? "ignored" : fa[n.orderValue], f.oc = "ignore" === n.orderCount ? "ignored" : fa[n.orderCount], f.oid = "ignore" === n.orderID ? "ignored" : fa[n.orderID], f.cur = "ignore" === n.currency ? "ignored" : fa[n.currency], f.vc = "ignore" === n.voucher ? "ignored" : fa[n.voucher], f.type = n.type);
                    t(f);
                    if (f.cp && (t(f), null !== f.ov && f.ov !== S)) {
                        var g = {
                                type: "track",
                                url: A.location.href,
                                refDom: m.referrerDomain(),
                                device: k.device,
                                spv: m.get("spv"),
                                tpv: m.get("tpv"),
                                sesn: m.get("sesn"),
                                tid: k.id,
                                uid: m.get("uid"),
                                ov: f.ov,
                                vc: f.vc,
                                oc: f.oc,
                                oid: f.oid,
                                cur: f.cur,
                                tType: f.type,
                                hist: N.lastOV.get(),
                                ab_value: 1 === n.ABon ? m.get("abst") : null
                            },
                            h = !1;
                        n && n.px1 && 0 < n.px1.trim().length && (h = m.dynKeyReplace(n.px1.trim(), !0), "ignore" !== n.px1Load && ("post" === n.px1Load ? m.ajax.post(h, {}, function(w) {
                            f.px1Fired = 'Pixel Fired as POST: <br>"' + h + '"';
                            t(f)
                        }) : ((new Image).src = h, f.px1Fired = 'Pixel Fired as IMAGE: <br> "' + h + '"', t(f))));
                        U && n && n.eh && 1 === n.eh && (g.html = P.documentElement.innerHTML);
                        h && (g.px1 =
                            h);
                        m.ajax.post(aa.getURL("insights_url"), {
                            data: JSON.stringify(g)
                        }, function(w) {
                            var a = {};
                            try {
                                a = JSON.parse(w), M("SALES RECEIVE: ", a)
                            } catch (e) {
                                M("Sales Tracking - error with response", w)
                            }
                            U && (f.insights = "Processed in " + JSON.parse(w).t + "s", t(f));
                            var c = $smcT5.tagHelpers.DBC.custom("Incrementality Testing", "#337a28");
                            w = $smcT5.CookieManager.read("smc_incremental_test_data");
                            var b = {};
                            try {
                                b = JSON.parse(decodeURIComponent(w))
                            } catch (e) {
                                c("Could not parse incremental cookie", e, w)
                            }
                            if (!b || b.converted !== S && !1 !== b.converted ||
                                A.smcIncrementalityConversionRecorded) c("Not recording incremental sale, previously recorded. Window: " + A.smcIncrementalityConversionRecorded + " Cookie: " + b ? .converted);
                            else {
                                c("Confirmation page DK true, checking if already set as converted", b);
                                A.smcIncrementalityConversionRecorded = !0;
                                c("User hasn't converted, updating data");
                                w = "https://" + ($smctData && $smctData.hasOwnProperty("IS_LOCAL") && 1 === $smctData.IS_LOCAL ? "l" : "ep") + ".smct.co/px-id-ep/?handle=update";
                                var d = {
                                    uid: $smcT5.tagHelpers.get("uid"),
                                    tid: $smcT5.tagHelpers.get("id"),
                                    oid: b.overlayId,
                                    sid: a.ID,
                                    key: b.key,
                                    order_id: f.oid,
                                    order_value: f.ov,
                                    inputData: "converted"
                                };
                                m.ajax.post(w, d, function(e) {
                                    c("Incrementality sale recorded: ", d);
                                    b.converted = !0;
                                    b.st_id = d.sid;
                                    e = encodeURIComponent(JSON.stringify(b));
                                    $smcT5.CookieManager.create("smc_incremental_test_data", e);
                                    c("New cookie created", b)
                                })
                            }
                        })
                    }
                },
                K = function(n) {
                    var t = M.custom("Dynamic Basket", "#1ed2c3"),
                        f = Object.keys(n),
                        g = {},
                        h = !0;
                    t("Pickup Keys:", n);
                    for (var w in f) {
                        var a = f[w];
                        if ("function" !== typeof a && "function" !== typeof w && "string" ===
                            typeof a && -1 < a.indexOf("itemName")) {
                            var c = n[a];
                            a = Number(a.charAt(a.length - 1));
                            g[c] = {
                                selector: n["itemSelector" + a],
                                type: n["itemType" + a]
                            };
                            t("selectorsObj value for " + c, g[c])
                        }
                    }
                    setInterval(function() {
                        a: {
                            M.custom("Dynamic Basket", "#1ed2c3");
                            var b = {
                                r: 1
                            };
                            var d = [],
                                e = Object.keys(g);
                            for (y in e) {
                                var q = e[y];
                                if ("function" !== typeof q) {
                                    var u = g[q].selector,
                                        D = g[q].type;
                                    if (0 === d.length)
                                        if ((u = P.querySelectorAll(u)) && 0 < u.length)
                                            for (var C = 0; C < u.length; C++) {
                                                var R = u[C];
                                                R = R[D];
                                                d.push({
                                                    [q]: R
                                                })
                                            } else {
                                                0 === u.length ? (b.r = 0, b.e =
                                                    'No items found on page for the "' + q + '" selector') : (b.r = 0, b.e = 'selector for: "' + q + '" does not match the number of items for other keys, please use a more accurate selector');
                                                break a
                                            } else if ((u = P.querySelectorAll(u)) && 0 < u.length && u.length === d.length)
                                                for (C = 0; C < u.length; C++) {
                                                    var T = d[C];
                                                    R = u[C];
                                                    R = R[D];
                                                    T[q] = R
                                                } else {
                                                    0 === u.length ? (b.r = 0, b.e = 'No items found on page for the "' + q + '" selector') : (b.r = 0, b.e = 'selector for: "' + q + '" does not match the number of items for other keys, please use a more accurate selector');
                                                    break a
                                                }
                                }
                            }
                            1 === b.r && (b.contents = d)
                        }
                        d = localStorage.getItem("smc_dyn_item");
                        if (1 === b.r)
                            if (d) {
                                d = JSON.parse(decodeURIComponent(atob(d)));
                                e = d[d.length - 1];
                                e = e[Object.keys(e)[0]];
                                var y = b.contents[b.contents.length - 1];
                                y = y[Object.keys(y)[0]];
                                if (e !== y || d.length !== b.contents.length) localStorage.setItem("smc_dyn_item", btoa(encodeURIComponent(JSON.stringify(b.contents)))), U && t("Cookie updated", b.contents)
                            } else localStorage.setItem("smc_dyn_item", btoa(encodeURIComponent(JSON.stringify(b.contents)))), U && t("Cookie generated",
                                b.contents);
                        else h && (U && M(b.e), h = !1)
                    }, 500)
                },
                L = function(n) {
                    setTimeout(function() {
                        var t = Object.keys(n),
                            f = {},
                            g = [];
                        if (n.itemSku && n.itemPrice && n.itemImage && n.itemName) {
                            for (var h in t) {
                                var w = t[h],
                                    a = n[w];
                                if (a)
                                    if ("custom" === w) {
                                        w = Object.keys(a);
                                        for (var c in w) {
                                            var b = w[c];
                                            if (b.includes("customItemKey")) {
                                                var d = Number(b[b.length - 1]);
                                                b = a[b];
                                                "" !== b.trim() && (g.push(b), (d = $smcT5.outputs.dynamic[a["customItemValue" + d]]) || "number" === typeof d) && (f[b] = d)
                                            }
                                        }
                                    } else g.push(w), (a = $smcT5.outputs.dynamic[a]) && (f[w] = a)
                            }
                            U && console.table(g);
                            var e = Date.now(),
                                q = Object.keys(f);
                            t = g.filter(D => -1 === q.indexOf(D));
                            if (0 < t.length && (ia("The following items are missing values: " + t.toString()), t.includes("itemSku") || t.includes("itemPrice") || t.includes("itemImage") || t.includes("itemName"))) {
                                M("Core values are missing, please ensure that the following values are set: itemSku, itemPrice, itemImage, itemName");
                                return
                            }
                            setInterval(u, 1E3);

                            function u() {
                                var D = localStorage.getItem("smc_ml_viewed_items");
                                try {
                                    D = D ? JSON.parse(decodeURIComponent(D)) : {
                                        ready: !1
                                    }
                                } catch (T) {
                                    D = {
                                        ready: !1
                                    }
                                }
                                var C = parseInt((Date.now() - e) / 1E3),
                                    R = f.itemSku;
                                D.first || (D.first = f);
                                R !== D.first.itemSku && (D.dwell ? D.dwell.time < C && (f.time = C, D.dwell = f, D.ready = !0) : (f.time = C, D.dwell = f, D.ready = !0));
                                D = D ? encodeURIComponent(JSON.stringify(D)) : {
                                    ready: !1
                                };
                                localStorage.setItem("smc_ml_viewed_items", D)
                            }
                        }
                    }, 1500)
                },
                E = function(n) {
                    var t = H.smarterCodesSaleTrack,
                        f = {
                            cp: !1,
                            ov: null,
                            oid: null,
                            cur: null,
                            insights: null,
                            px1Fired: null
                        };
                    A.$smcTrack ? Ba === JSON.stringify(A.$smcTrack) ? M("window.$smcTrack has already run", A.$smcTrack) :
                        (Ba = JSON.stringify(A.$smcTrack), f.cp = !0, f.ov = $smcTrack.value, f.oc = $smcTrack.count, f.oid = $smcTrack.ref, f.cur = $smcTrack.currency, f.vc = $smcTrack.voucher, f.type = $smcTrack.type, n = {}) : (f.cp = fa[n.confirmPage], f.ov = fa[n.orderValue], f.oc = "ignore" === n.orderCount ? "ignored" : fa[n.orderCount], f.oid = "ignore" === n.orderID ? "ignored" : fa[n.orderID], f.cur = fa[n.currency], f.vc = "ignore" === n.voucher ? "ignored" : fa[n.voucher], f.type = n.type);
                    t(f);
                    if (f.cp && k.plugins.smarterCodes !== S && N.exists("smc_vcc_history") && (t(f), null !==
                            f.ov && f.ov !== S)) {
                        n = {
                            type: "sc_track",
                            url: A.location.href,
                            device: k.device,
                            spv: m.get("spv"),
                            tpv: m.get("tpv"),
                            sesn: m.get("sesn"),
                            tid: k.id,
                            uid: m.get("uid"),
                            ov: f.ov,
                            vc: f.vc,
                            oc: f.oc,
                            oid: f.oid,
                            cur: f.cur
                        };
                        var g = N.read("smc_vcc_sale_count");
                        (g = parseInt(g)) ? g++ : g = 1;
                        n.vccSalesCount = g;
                        N.create("smc_vcc_sale_count", g, 1051200);
                        m.ajax.post(aa.getURL("insights_url"), {
                            data: JSON.stringify(n)
                        }, function(h) {
                            M("SMARTERCODES SALES RECEIVE: ", JSON.parse(h));
                            U && (f.insights = "Processed in " + JSON.parse(h).t + "s", t(f))
                        })
                    }
                },
                Y = function(n,
                    t, f, g) {
                    var h = !1,
                        w = !1,
                        a = !1,
                        c = {};
                    1 === m.get("spv") && 1 === g || !n || (c = n);
                    if (1 === f.urlSource) {
                        g = A.location.search ? A.location.search : !1;
                        var b = [];
                        g && (b = g.split("&"));
                        0 < b.length && (a = !0);
                        g = {};
                        b = JSON.stringify(g);
                        "{}" !== b && (h = !0, c.r = S, c.r2 = S);
                        c.s = "{}" === b ? {} : g
                    }
                    if (1 === f.httpReferrer) {
                        f = P.referrer;
                        g = "string" === typeof f ? f.slice(0, f.indexOf("/", 10)) : "";
                        var d = P.domain;
                        if (g) {
                            var e = g.match(/^(?:.*:\/\/)?([^\/]*)/),
                                q = !1;
                            if (null !== e && e[1] !== S) {
                                e = e[1].split(".").reverse();
                                d = d.split(".").reverse();
                                e.length > d.length ? (b = d,
                                    d = e) : b = e;
                                for (e = 0; e < b.length && !(b[e] !== d[e] && (q = !0), 0 < e && 3 < b[e].length); e++);
                                q && (w = !0, c.r = g, c.r2 = f)
                            }
                        }
                    }
                    f = null === n || n.l === S;
                    n = n && n.l && n.l !== A.location.href;
                    a && (f || n) && (c.l = A.location.href, h = !0);
                    (w || h) && na.set(t, btoa(JSON.stringify(c)))
                },
                r = 0,
                X = function(n, t) {
                    r++;
                    var f = "smct_sources_" + m.get("id").toString();
                    na.get(f, function(g) {
                        var h = null;
                        g && (h = JSON.parse(atob(g)));
                        t(h, f, n, r)
                    })
                };
            return {
                init: function(n) {
                    for (var t in n)
                        if (n.hasOwnProperty(t))
                            if ("autoInsert" === t) v(n[t]);
                            else if ("tracking" !== t || A.$smcTrack)
                        if ("sc_tracking" !==
                            t || A.$smcSCTrack)
                            if ("notifications" === t) G(n[t]);
                            else if ("confirmationPage" === t) {
                        var f = n[t];
                        if (!x) {
                            var g = !1;
                            f.url !== S && 0 < f.url.length ? (g = m.getURL(), g = m.urlChecker(f.url, g)) : f.dynamicKey !== S && (g = J.dynamic[f.dynamicKey]);
                            if (g) {
                                f = [];
                                var h = (new Date).getTime();
                                N.exists("smc_goal") && (f = JSON.parse(N.read("smc_goal")), 100 < f.length && f.pop());
                                f.push(h);
                                N.create("smc_goal", JSON.stringify(f), 525600);
                                J.goalMatch = g
                            }
                            x = J.goalMatch
                        }
                    } else "sources" === t ? X(n[t], Y) : "machineLearning" === t ? (ea = n[t], ta = !1) : "dynamicBasket" ===
                        t ? K(n[t]) : "recomminder" === t && L(n[t]);
                    else E(n[t]);
                    else B(n[t]);
                    U && H && "function" === typeof H.valueHunter && H.valueHunter();
                    A.$smcTrack && B();
                    A.$smcSCTrack && E()
                }
            }
        }(),
        Ia = function(l, v) {
            if (1 == k.ipb && null === m.queryString("smcdb") && null === N.read("smcdb")) return ka("Basket Backup will not run - IP is Blocked"), H.updateByID("basket-backup", '<span class="smct-text-danger">IP is blocked -  Will not run.</span>'), !1;
            var z = aa.getURL("basket_backup_endpoint");
            if (!z || "" === z.trim()) return ka("Basket Backup - End point is missing!"), !1;
            $smcT5.outputs.basketBackup = {
                endpoint: z,
                campaign_id: l.id
            };
            if (0 == l.id) return ka("Basket Backup - No Campaign chosen!"), !1;
            !1 === v.getJqueryLoadStatus() && !1 === v.getBasketBackupLoadStatus() ? v.loadJquery(k.config.jQueryForceLoad, function() {
                v.loadBasketBackup(l, function() {
                    H.updateByID("bb-load", "LOADED (JQ & Script)")
                })
            }) : !1 === v.getOverlayLoadStatus() && v.loadBasketBackup(l, function() {
                H.updateByID("bb-load", "LOADED (Just Script)")
            })
        },
        Ja = function(l, v) {
            if (0 == l.id) return ka("Smarter Codes - No Campaign chosen!"), !1;
            var z = aa.getURL("smarter_codes_endpoint");
            if (!z || "" === z.trim()) return ka("Smarter Codes - End point is missing!"), !1;
            $smcT5.outputs.smarterCodes = {
                endpoint: z,
                campaign_id: l.id
            };
            !1 === v.getJqueryLoadStatus() && !1 === v.getSmarterCodesLoadStatus() ? v.loadJquery(k.config.jQueryForceLoad, function() {
                v.loadSmarterCodes(l, function() {
                    H.updateByID("sc-load", "LOADED (JQ & Script)")
                })
            }) : !1 === v.getOverlayLoadStatus() && v.loadSmarterCodes(l, function() {
                H.updateByID("sc-load", "LOADED (Just Script)")
            })
        };
    J.launchSelector =
        function() {
            if (!(!0 === U || "undefined" !== typeof $smcCDB && $smcCDB.outputs && !0 === $smcCDB.outputs.valid)) return ka("Selector Permission denied!"), !1;
            var l = aa.getURL("selector_tool_endpoint").trim();
            $smcT5.outputs.selectTool = {
                endpoint: l
            };
            !1 === ja.getJqueryLoadStatus() && !1 === ja.getSelectToolLoadStatus() ? ja.loadJquery(k.config.jQueryForceLoad, function() {
                ja.loadSelectTool(null, function() {
                    H.updateByID("select-tool-load", "LOADED (JQ & Script)")
                })
            }) : !1 === ja.getSelectToolLoadStatus() && ja.loadSelectTool(null, function() {
                H.updateByID("select-tool-load",
                    "LOADED (Just Script)")
            });
            return "Launching Selector Tool..."
        };
    var Ca = function() {
            var l = 0,
                v = 0,
                z = function() {
                    return {
                        oid: l,
                        aid: v
                    }
                };
            return {
                getCurrent: z,
                scanner: function() {
                    var p = A.$smcO5;
                    p && p.vars && (l = p.vars.oid, p.vars.closed ? v = 3 : p.vars.engaged ? v = 2 : p.vars.is_open && (v = 1));
                    return z()
                }
            }
        }(),
        La = function(l) {
            var v = N.ref.get(),
                z = null,
                p = !1,
                F = !1;
            U && (H.updateByID("ref", v), H.updateByID("refMatch", "<smct-code>" + (0 === v ? "N/A" : k.config.refs[v] && k.config.refs[v].u || "N/A") + "</smct-code>"));
            var G = function(f, g, h) {
                    var w = !1,
                        a = "(OFF so ByPass)";
                    if (null === g) w = !1, a = "value is NULL";
                    else {
                        var c = f.val1,
                            b = f.val2,
                            d = f.is1,
                            e = f.is2;
                        f = f.andOr;
                        if ("exists" === h) return {
                            result: g == c ? !0 : !1,
                            expression: " EXISTS == " + (!0 === c ? "true" : "false")
                        };
                        if ("true" == d || "false" == d) return g = "" === g || !1 === g || 0 === g ? "false" : g, g = !0 === g || 1 === g ? "true" : g, {
                            result: g == d ? !0 : !1,
                            expression: g + " == " + d
                        };
                        var q = function(u) {
                            isNaN(u) || isNaN(parseFloat(u)) ? "string" === typeof u && (u = '"' + m.setCase(u) + '"') : u = parseFloat(u);
                            return u
                        };
                        h = function(u, D, C) {
                            var R = !1;
                            u = q(u);
                            C = q(C);
                            ">" === D ?
                                R = u > C : ">=" === D ? R = u >= C : "==" === D ? R = u == C : "!=" === D ? R = u != C : "<=" === D ? R = u <= C : "<" === D && (R = u < C);
                            return R
                        };
                        f && e && b ? (a = g + " " + d + " " + c + " " + f + " " + g + " " + e + " " + b, "&&" === f ? w = !0 === h(g, d, c) && !0 === h(g, e, b) ? !0 : !1 : "||" === f && (w = !0 === h(g, d, c) || !0 === h(g, e, b) ? !0 : !1)) : (a = g + " " + d + " " + c, w = !0 === h(g, d, c) ? !0 : !1)
                    }
                    return {
                        result: w,
                        expression: a
                    }
                },
                x = function() {
                    A.hasOwnProperty("$smcRecomminder") || (A.$smcRecomminder = JSON.stringify(m.get("recomminder")));
                    var f = A.$smcRecomminder,
                        g = JSON.stringify(m.get("recomminder"));
                    if (f !== g) {
                        var h = m.get("recomminder").dwell,
                            w = JSON.parse(A.$smcRecomminder).dwell;
                        if (h && w && (f = Object.keys(h), g = Object.keys(w), JSON.stringify(f) === JSON.stringify(g) && 0 === f.filter(a => "time" !== a && h[a] !== w[a]).length)) {
                            A.$smcRecomminder = JSON.stringify(m.get("recomminder"));
                            return
                        }
                        p = !0;
                        A.$smcRecomminder = JSON.stringify(m.get("recomminder"))
                    }
                },
                B = function() {
                    var f = p = !1,
                        g = !1,
                        h = k.rulesList,
                        w = 0;
                    if (U) var a = {};
                    var c = !0,
                        b, d = {};
                    if (h)
                        for (b in h)
                            if (h.hasOwnProperty(b)) {
                                var e = h[b].filterGroup;
                                e = "undefined" === typeof e ? "" : e;
                                d[e] = 100
                            }
                    var q = m.get("uid") % 100,
                        u = m.get("spv"),
                        D = m.get("tpv");
                    if (h && ("undefined" === typeof $smcO5 || 1 !== $smcO5.vars.is_open)) {
                        if (k && k.plugins && k.plugins.tracking && 1 === k.plugins.tracking.ABon && "A" === m.get("abst")) return H.abst(), ka("Overlays will not run - Sales tracking AB is on and you are part of group A"), m.pixelTracker(6, 9, 0), !1;
                        k && k.plugins && k.plugins.hasOwnProperty("dynamicBasket") && !0 === m.get("dynBasket").ready && H.dynamicBasket(m.get("dynBasket").contents);
                        k && k.plugins && k.plugins.hasOwnProperty("recomminder") && !0 === m.get("recomminder").ready &&
                            H.recomminder(m.get("recomminder"));
                        if (1 == k.ipb && null === m.queryString("smcdb") && null === N.read("smcdb")) return H.ipb(), ka("Overlays will not run - IP is Blocked"), m.pixelTracker(6, 9, 0), !1;
                        for (b in h)
                            if (h.hasOwnProperty(b)) {
                                U && (a[b] = {
                                    data: [],
                                    pass: []
                                });
                                var C = !0,
                                    R = h[b].timeStart,
                                    T = h[b].timeEnd;
                                if (R || T) {
                                    R = R.trim();
                                    T = T.trim();
                                    var y = k.config.rulesUTC,
                                        I = new Date,
                                        V = I.getTime(),
                                        O = (new Date(R.replace(/-/g, "/"))).getTime();
                                    e = (new Date(T.replace(/-/g, "/"))).getTime();
                                    1 == y && (I = 6E4 * I.getTimezoneOffset(), V += I);
                                    if ("" !==
                                        R && isNaN(O) || "" !== T && isNaN(e)) C = !1;
                                    else if (V < O || V > e) C = !1;
                                    U && a[b].data.push(H.timedCheck(C, V, R, T, y))
                                }
                                R = !0;
                                T = h[b].delay;
                                "undefined" !== typeof T && 0 < T && (y = N.lastOV.secsSince("open"), null !== y && y < T && (R = !1), U && a[b].data.push("Delay Since Opened: " + H.passFail(R) + "<smct-code>" + (null === y ? "(none opened yet)" : "<strong>" + y + "</strong> > " + T) + "</smct-code>"));
                                T = !0;
                                V = m.get("dynBasket");
                                "on" === h[b].dynBasketRequired && (!0 !== V.ready && (T = !1), U && a[b].data.push("Dynamic Basket Ready: " + H.passFail(T) + "<smct-code> </smct-code>"));
                                y = !0;
                                V = m.get("dynBasket");
                                "on" === h[b].dynBasketRequired && h[b].hasOwnProperty("dynBasketMinQty") && (V.itemCount < h[b].dynBasketMinQty && (y = !1), U && a[b].data.push("Dynamic Basket Minimum Quantity: " + H.passFail(y) + "<smct-code>" + V.itemCount + " > " + h[b].dynBasketMinQty + "</smct-code>"));
                                V = !0;
                                O = m.get("recomminder");
                                h[b].hasOwnProperty("recomminderRequired") && "on" === h[b].recomminderRequired && (!0 !== O.ready && (V = !1), U && a[b].data.push("Recomminder Ready: " + H.passFail(V) + "<smct-code> </smct-code>"));
                                I = h[b].filter;
                                O = !0;
                                if (0 < I) {
                                    e = h[b].filterGroup;
                                    e = "undefined" === typeof e ? "" : e;
                                    var Q = d[e],
                                        W = 100 - Q;
                                    q >= W && q < I + W || (O = !1);
                                    d[e] = Q - I;
                                    U && a[b].data.push("" + I + "% " + e + " Filter: " + H.passFail(O) + " <smct-code>" + W + "% >= <strong>" + q + "%</strong> < " + (I + W) + "%</smct-code>")
                                }
                                I = h[b].visitors;
                                e = !0;
                                "undefined" !== typeof I && "all" !== I && ("new" === I && u !== D && (e = !1), "existing" === I && u === D && (e = !1), U && a[b].data.push("Visitor Type: " + H.passFail(e) + " <smct-code>Expected: " + I + ", Found: " + (u == D ? "new" : "existing") + "</smct-code>"));
                                Q = h[b].notificationsAccepted;
                                I = !0;
                                if ("undefined" !== typeof Q && "any" !== Q && "-2" !== Q)
                                    if (A.Notification) {
                                        var ca = 1;
                                        W = Notification.permission;
                                        "default" === W && (W = "not_set");
                                        "https:" !== P.location.protocol ? (I = !1, ca = 0) : I = "granted" == Q && "granted" === W ? !0 : "denied" == Q && "denied" === W ? !0 : "not_set" == Q && "not_set" === W ? !0 : !1;
                                        U && a[b].data.push('Notifications = "' + Q + '": ' + H.passFail(I) + (' <smct-code>"' + W + '"</smct-code>') + (0 === ca ? " (Must be using HTTPS) " : ""))
                                    } else I = !1, U && a[b].data.push("Notifications = : " + H.passFail(!1) + (' <smct-code> Browsers window.Notification = "' +
                                        A.Notification + '"</smct-code>') + (0 === ca ? " (Must be using HTTPS) " : ""));
                                Q = !0;
                                h[b].pageViews !== S && 1 < h[b].pageViews && (u < h[b].pageViews && (Q = !1), U && a[b].data.push("Page Views: " + H.passFail(Q) + " <smct-code>" + u + " &gt;= <strong>" + h[b].pageViews + "</strong></smct-code>"));
                                W = !1;
                                var da = !0,
                                    ba = !0,
                                    oa = h[b].urls.blacklist,
                                    la = h[b].urls.whitelist;
                                0 === oa.length && 0 === la.length ? W = !0 : (da = m.urlChecker(oa, z), ba = m.urlChecker(la, z), da = !da, ba = 0 < h[b].urls.whitelist.length && !1 === ba ? !1 : !0, da && ba && (W = !0), U && a[b].data.push(H.urlBlWl(oa,
                                    la, da, ba, W)));
                                oa = !0;
                                la = h[b].refs.blacklist;
                                0 < la.length && k.config.refs[v] !== S && -1 !== la.indexOf(v) && (oa = !1);
                                U && 0 < la.length && (da = "undefined" === typeof k.config.refs[v] ? "undefined" : k.config.refs[v].u, a[b].data.push("REF Blacklist: " + H.passFail(oa) + " <smct-code>" + (0 == v ? " REF is 0! " : "(" + da + ") Will pass if " + +v + " is not in " + la.join(", ") + "?") + "</smct-code>"));
                                la = !0;
                                ba = h[b].refs.whitelist;
                                0 < ba.length && -1 === ba.indexOf(v) && (la = !1);
                                U && 0 < ba.length && (da = "undefined" === typeof k.config.refs[v] ? "undefined" : k.config.refs[v].u,
                                    a[b].data.push("REF Whitelist: " + H.passFail(la) + " <smct-code>" + (0 == v ? " REF is 0! " : "(" + da + ") Will pass if " + v + " is in " + ba.join(", ") + "?") + "</smct-code>"));
                                da = !0;
                                ba = h[b].locs.blacklist;
                                0 < ba.length && -1 !== ba.indexOf(k.loc.cc) && (da = !1);
                                U && 0 < ba.length && a[b].data.push("Location Blacklist: " + H.passFail(da) + " <smct-code>Will pass if " + k.loc.cc + " <strong>is not</strong> in " + ba.join(", ") + "</smct-code>");
                                ba = !0;
                                c = h[b].locs.whitelist;
                                0 < c.length && -1 === c.indexOf(k.loc.cc) && (ba = !1);
                                U && 0 < c.length && a[b].data.push("Location Whitelist: " +
                                    H.passFail(ba) + " <smct-code>Will pass if " + k.loc.cc + " <strong>is</strong> in " + c.join(", ") + "</smct-code>");
                                var ua = h[b].dynamicElementRules;
                                c = !0;
                                for (var ra in ua)
                                    if (ua.hasOwnProperty(ra)) {
                                        var ma = k.config.dynamicElements[ra];
                                        ma !== S ? 1 == ma.urlContains || 1 == ma.htmlContains ? (ma.currentValue || (c = !1), U && a[b].data.push(ra + " " + H.passFail(ma.currentValue))) : (ma = G(ua[ra], ma.currentValue, ma.type), U && a[b].data.push(ra + " " + H.passFail(ma.result) + ": <smct-code>" + ma.expression + "</smct-code>"), !1 === ma.result && (c = !1)) :
                                            1 == ua[ra].on && ia('Invalid Key: "' + ra + '" check the config settings')
                                    }
                                U && a[b].data.push(H.rulesInfo(h[b].overlays, k.config.debugger_info.overlays_info));
                                U && (a[b].pass = 0);
                                !1 === g && C && R && O && T && y && V && e && I && Q && W && oa && la && da && ba && c && !1 === f && "undefined" !== typeof h[b].overlays[k.device.device] && 0 !== h[b].overlays[k.device.device].id && (w = h[b].overlays[k.device.device].id, g = !0, U && (a[b].pass = 1));
                                0 < w && w !== J.overlayId && (f = !0)
                            }
                    }
                    var za = function() {
                        m.pixelTracker(6, 24, w);
                        $smcO5.funcs.overlayInit();
                        !0 === J.ajaxDOMReplaceCheck &&
                            (M("ajaxDOMReplaceCheck enabled"), setInterval(function() {
                                0 < J.overlayId && null === P.getElementById("smc-v5-overlay-" + J.overlayId) && (M("TAG LOAD OVERLAY: document.getElementById('smc-v5-overlay-" + J.overlayId + ") = ", P.getElementById("smc-v5-overlay-" + J.overlayId), ", $outputs.overlayId: " + J.overlayId, ", newOverlayId: " + w), $smcO5.funcs.overlayInit())
                            }, 100))
                    };
                    m.recon = function(sa) {
                        Da(sa)
                    };
                    var Da = function(sa) {
                        J.overlayId = sa;
                        !1 === l.getJqueryLoadStatus() && !1 === l.getOverlayLoadStatus() ? l.loadJquery(k.config.jQueryForceLoad,
                            function() {
                                l.loadOverlay(k, function() {
                                    H.updateByID("ov4", "LOADED (JQ & Script)");
                                    $smcO5.funcs.configureOverlay(sa, function() {
                                        za()
                                    })
                                })
                            }) : !1 === l.getOverlayLoadStatus() ? l.loadOverlay(k, function() {
                            H.updateByID("ov4", "LOADED (Just Script)");
                            $smcO5.funcs.configureOverlay(sa, function() {
                                za()
                            })
                        }) : !0 === l.getOverlayLoadStatus() ? (H.updateByID("ov4", "LOADED (Just Config)"), $smcO5.funcs.configureOverlay(sa, function() {
                            za()
                        })) : M("OVERLAY NOT LOADED")
                    };
                    !0 === f ? Da(w) : 0 === w && "undefined" !== typeof $smcO5 && ($smcO5.funcs.overlayRemove(),
                        J.overlayId = 0);
                    0 === w && m.pixelTracker(6, 9, w);
                    F = !1;
                    U && H.tagRulesets(w, a, "webOverlayRules")
                },
                K = 0,
                L = parseInt(k.config.scannerTime, 10);
            L = isNaN(L) ? 100 : L;
            var E = JSON.stringify(Ca.getCurrent()),
                Y = N.read("smc_not");
            J.NotificationPerms = Y;
            var r = function() {
                if (J.leftPage || J.leftTab) H.updateByID("scans", "Paused");
                else {
                    if (U) var f = "undefined" !== typeof A.performance && "function" === typeof A.performance.now ? performance.now() : 0;
                    x();
                    A.hasOwnProperty("$smcDynamicBasket") || (A.$smcDynamicBasket = JSON.stringify(m.get("dynBasket").contents));
                    var g = A.$smcDynamicBasket,
                        h = JSON.stringify(m.get("dynBasket").contents);
                    g !== h && (A.$smcDynamicBasket = JSON.stringify(m.get("dynBasket").contents), p = !0);
                    g = k.config.dynamicElements;
                    for (y in g)
                        if (g.hasOwnProperty(y)) {
                            if (g[y].readCustomVarOrFunc && "" !== g[y].readCustomVarOrFunc.trim()) try {
                                var w = $smcT5.CustomScripts[g[y].readCustomVarOrFunc];
                                if ("function" === typeof w) {
                                    var a = w();
                                    "object" === typeof a && (a = JSON.stringify(a))
                                } else a = w;
                                a !== g[y].currentValue && (k.config.dynamicElements[y].currentValue = a, (p = g[y].pixel_ignore &&
                                    "1" === g[y].pixel_ignore ? !1 : !0) || M("Skipping pixel update for changes detected on DK: " + y), H.updateByID("dynElm-" + y, "" === a ? "null" : a))
                            } catch (V) {
                                ha.custom("Dynamic Key", "purple")(V)
                            } else if (!m.empty(g[y].selector) || !m.empty(g[y].readCustomVarOrFunc) || !m.empty(g[y].customOverRide)) {
                                a: {
                                    a = y;
                                    var c = g[y];h = null;
                                    var b = 0,
                                        d = c.searchDLObject,
                                        e = c.searchDLKey,
                                        q = c.selector,
                                        u = c.cookieBackup,
                                        D = c.attr,
                                        C = c.type,
                                        R = c.funcs,
                                        T = c.useLast;c.readCustomVarOrFunc && "" !== c.readCustomVarOrFunc.trim() && (h = "function" === typeof c.readCustomVarOrFunc ?
                                        c.readCustomVarOrFunc() : c.readCustomVarOrFunc, h = null === h ? null : h);m.empty(d) || m.empty(e) || "" !== h || (h = m.searchDataLayer(d, e), h = !1 === h ? null : h);
                                    if (!m.empty(q) && null === h && (c = m.getElms(q), c !== S))
                                        if (T = c[1 == T && 0 < c.length ? c.length - 1 : 0], "exists" == C) h = 0 === c.length ? !1 : !0;
                                        else if ("length" == C) h = c.length;
                                    else if (T === S) {
                                        if (1 != u || null === N.read("smct_dyn_" + a) || "text" != C && "html" != C && "val" != C && "value" != C && "attr" != C) {
                                            a = null;
                                            break a
                                        }
                                        h = N.read("smct_dyn_" + a)
                                    } else "text" == C ? (h = T.innerText || T.textContent, b = 1) : "html" == C ? (h =
                                        T.innerHTML, b = 1) : "value" == C || "val" == C ? (h = T.value, b = 1) : "attr" == C ? (h = T.getAttribute(D), b = 1) : M("TYPE (" + C + ") NOT SETUP!");b && (h = h.toString());a = h = m.functionizer(h, R)
                                }
                                a !== g[y].currentValue && (k.config.dynamicElements[y].currentValue = a, (p = g[y].pixel_ignore && "1" === g[y].pixel_ignore ? !1 : !0) || M("Skipping pixel update for changes detected on DK: " + y), 1 == g[y].cookieBackup && null !== a && (h = g[y].type, "html" !== h && "text" !== h && "attr" !== h && "val" !== h || N.create("smct_dyn_" + y, a, 0)), H.updateByID("dynElm-" + y, a + " (" + typeof a +
                                    ")"))
                            }
                            g[y].cookieSearch && (a = N.read(g[y].cookieSearch), a = null === a ? "" : a, a !== g[y].currentValue && (k.config.dynamicElements[y].currentValue = a, (p = g[y].pixel_ignore && "1" === g[y].pixel_ignore ? !1 : !0) || M("Skipping pixel update for changes detected on DK: " + y), H.updateByID("dynElm-" + y, "" === a ? "null" : a)));
                            m.empty(g[y].searchDLObject) || m.empty(g[y].searchDLKey) || (a = m.searchDataLayer(g[y].searchDLObject, g[y].searchDLKey), a = !1 === a ? "" : a, a !== g[y].currentValue && (k.config.dynamicElements[y].currentValue = a, (p = g[y].pixel_ignore &&
                                "1" === g[y].pixel_ignore ? !1 : !0) || M("Skipping pixel update for changes detected on DK: " + y), H.updateByID("dynElm-" + y, a)));
                            1 == g[y].htmlContains && 0 < g[y].strings.length && (a = m.htmlTextSearch(y, g[y].strings), a !== g[y].currentValue && (k.config.dynamicElements[y].currentValue = a, (p = g[y].pixel_ignore && "1" === g[y].pixel_ignore ? !1 : !0) || M("Skipping pixel update for changes detected on DK: " + y), H.updateByID("dynElm-" + y, H.passFail(a, "TRUE", "FAIL"))));
                            1 == g[y].urlContains && 0 < g[y].strings.length && (a = m.urlTextSearch(y,
                                g[y].strings), a !== g[y].currentValue && (k.config.dynamicElements[y].currentValue = a, (p = g[y].pixel_ignore && "1" === g[y].pixel_ignore ? !1 : !0) || M("Skipping pixel update for changes detected on DK: " + y), H.updateByID("dynElm-" + y, H.passFail(a, "TRUE", "FAIL"))));
                            fa[y] = a;
                            1 == g[y].export && (J.dynamic[y] = a)
                        }
                    var y = m.getURL();
                    z !== y && (z = y, F = p = !0, m.incrementPageViews(), H.updateByID("url", "URL Changed", 1));
                    if (!0 === F) {
                        w = k.config.refs;
                        for (var I in w)
                            if (w.hasOwnProperty(I)) {
                                g = w[I].d;
                                a = w[I].u;
                                a = m.setCase(a);
                                a: {
                                    h = void 0;u = y;
                                    b = a;
                                    if (1 != pa.refExactMatch) {
                                        if (-1 !== u.indexOf("?" + b) || -1 !== u.indexOf("&" + b)) {
                                            h = !0;
                                            break a
                                        }
                                    } else if (-1 < u.indexOf("?"))
                                        for (h in -1 < u.indexOf("#") && (u = u.split("#"), u = u[0]), u = u.split("?"), u = u[1].split("&"), u)
                                            if (u.hasOwnProperty(h) && u[h] === b) {
                                                h = !0;
                                                break a
                                            }
                                    h = !1
                                }
                                h && (M("REF Matched: ", a), v = parseInt(I, 10), N.ref.set(v, g), U && (H.updateByID("ref", v), H.updateByID("refMatch", "<smct-code>" + k.config.refs[v].u + "</smct-code>")))
                            }
                    }
                    I = JSON.stringify(Ca.scanner());
                    I !== E && (E = I);
                    p && (B(), Ha.init(k.plugins), m.runMachineLearning());
                    "undefined" !== typeof Notification && (I = Notification.permission, Y !== I && (Y = I, J.NotificationPerms = I, N.create("smc_not", I, 5256E3), M("Notification Settings Changed from " + Y + " to: " + I)));
                    U && (f = ((("undefined" !== typeof A.performance && "function" === typeof A.performance.now ? performance.now() : 1) - f) / 1E3).toFixed(4), H.updateByID("perf", f + " secs"));
                    K++;
                    H.updateByID("scans", K)
                }
                H.timeOnPage()
            };
            Ka();
            if (1 == k.config.scannerPerformance) {
                P.addEventListener("mouseup", function(f) {
                    r()
                });
                P.addEventListener("keypress", function(f) {
                    r()
                });
                P.addEventListener("focus", function(f) {
                    r()
                });
                P.addEventListener("visibilitychange", function(f) {
                    r()
                });
                var X = m.DateNow() + 2E3;
                P.addEventListener("mousemove", function(f) {
                    m.DateNow() > X && (r(), X = m.DateNow() + 2E3)
                });
                var n = m.DateNow() + 2E3;
                A.addEventListener("mousewheel", function(f) {
                    m.DateNow() > n && (r(), n = m.DateNow() + 2E3)
                });
                var t = m.DateNow() + 2E3;
                A.addEventListener("touchstart", function(f) {
                    m.DateNow() > t && (r(), t = m.DateNow() + 2E3)
                });
                r()
            } else setInterval(function() {
                r()
            }, L)
        },
        Ma = function() {
            var l = !1,
                v = !1,
                z = !1,
                p = !1,
                F = !1,
                G = function(x, B) {
                    if (!x || "" === x) return ia('anyScriptLoader was passed an invalid "scriptName":', x), !1;
                    var K = aa.getURL(x);
                    if (!K || "" == K.trim()) return M(K, " Script missing for", x), !1;
                    K = wa(K); - 1 < K.indexOf(".js") && (K = K + "?tv=" + k.version);
                    var L = P.getElementsByTagName("head")[0],
                        E = P.createElement("script");
                    E.type = "text/javascript";
                    E.src = K;
                    k && k.config && k.config.enforceSri && 1 === k.config.enforceSri && (x = aa.getSRI(x)) && "" !== x && (E.integrity = x, E.crossOrigin = "anonymous");
                    E.charset = "utf-8";
                    E.onload = function() {
                        B(!0)
                    };
                    L.appendChild(E)
                };
            return {
                loadOverlay: function(x, B) {
                    G("overlays_url", function() {
                        v = !0;
                        B()
                    })
                },
                loadBasketBackup: function(x, B) {
                    G("basket_backup_script", function() {
                        z = !0;
                        B()
                    })
                },
                loadSmarterCodes: function(x, B) {
                    G("smarter_codes_script", function() {
                        p = !0;
                        B()
                    })
                },
                loadSelectTool: function(x, B) {
                    G("selector_tool_script", function() {
                        F = !0;
                        B()
                    })
                },
                loadJquery: function(x, B) {
                    if ("undefined" !== typeof jQuery && 0 == x) H.updateByID("jquery", "INTERNAL"), A.$smcJQ = jQuery, l = !0, B();
                    else {
                        H.updateByID("jquery", "EXTERNAL");
                        var K = aa.getURL("smc_jq"); -
                        1 < K.indexOf(".js") && (K = K + "?tv=" + k.version);
                        x = P.getElementsByTagName("head")[0];
                        var L = P.createElement("script");
                        L.type = "text/javascript";
                        L.src = K;
                        k && k.config && k.config.enforceSri && 1 === k.config.enforceSri && (K = aa.getSRI("smc_jq")) && "" !== K && (L.integrity = K, L.crossOrigin = "anonymous");
                        L.onload = function() {
                            l || (l = !0, "undefined" !== typeof A.$smcJQ && "function" === typeof $smcJQ.noConflict && $smcJQ.noConflict(), M("JQUERY LOADED: V" + $smcJQ.fn.jquery), B())
                        };
                        x.appendChild(L)
                    }
                },
                anyScriptLoader: G,
                getJqueryLoadStatus: function() {
                    return l
                },
                getOverlayLoadStatus: function() {
                    return v
                },
                getBasketBackupLoadStatus: function() {
                    return z
                },
                getSmarterCodesLoadStatus: function() {
                    return p
                },
                getSelectToolLoadStatus: function() {
                    return F
                }
            }
        },
        Ka = function() {
            if (!k.config.tagRefreshID || 0 == k.config.tagRefreshID || $smcT5.outputs.tagRefreshDebugOnly && !U) return !1;
            var l = N,
                v = parseInt(k.config.tagRefreshID, 10),
                z = l.read("smc_refresh"),
                p = l.lastOV.secsSince("open");
            if (isNaN(v)) return M("TAG REFRESH - Exit 3... tagRefreshID cannot be NaN: ", v), !1;
            if (z && parseInt(z, 10) ===
                v) return M("TAG REFRESH - Exit 4... user has already refreshed to this ID: ", v), !1;
            if (z && parseInt(z, 10) > v) return M("TAG REFRESH - Exit 5... currentTagRefresh (" + z + ") is greater than tagRefreshID (" + v + ")"), !1;
            if (null !== p && 600 > p) return M("TAG REFRESH - Exit 6... User already opened overlay in the last 10 minutes", p), !1;
            z = ["smc_v4_", "smct_last_ov"];
            if ($smcT5.outputs.tagRefreshCustomEntry) {
                var F = $smcT5.outputs.tagRefreshCustomEntry;
                if (Array.isArray(F))
                    for (p = 0; p < F.length; p++) z.push(F[p]);
                else "string" ===
                    typeof F && z.push(F)
            }
            F = 0;
            var G = P.cookie.split(";");
            for (p = 0; p < G.length; p++) {
                var x = G[p].trim();
                if ("smc" === x.substr(0, 3))
                    for (var B = 0; B < z.length; B++) {
                        var K = new RegExp(z[B], "gm"),
                            L = "";
                        x.match(K) && (M("TAG REFRESH - Do we delete? ", x.split("=")[0], !!x.match(K)), L = x.substr(0, x.indexOf("=")), l.del(L), F++)
                    }
            }
            l.create("smc_refresh", v, 1051200);
            M("TAG REFRESH - DELETED " + F + " Cookies!");
            l = $smcT5.outputs.tagRefreshEndpointURL;
            0 < F && l && -1 < l.indexOf("smct.co") && m.ajax.post(l, {
                tid: m.get("id"),
                uid: m.get("uid"),
                trid: v,
                cd: F
            }, function(E) {
                M("TAG REFRESH - Ajax Post ", E)
            })
        },
        Ea = function(l) {
            M("tag_data", k);
            if (0 === l && 1 != k.config.forceOnDebug) {
                1 != k.config.pxTrackOff && m.pixelTracker(6, 27, 0);
                U && P.body.insertAdjacentHTML("beforeend", '<smc style="position: fixed;bottom: 10px;left: 10px;background: darkRed;color: #fff !important;padding: 5px 15px;z-index: 999999999;font-weight: bold;border-radius:5px;">Tag Is Off</smc>');
                if (null === m.queryString("smcdb") && null === N.read("smcdb")) return !1;
                M("Tag is OFF - But is on for client debugging!")
            } else 0 ===
                l && 1 == k.config.forceOnDebug && U && (J.OnForDebug = 1);
            pa = k.config;
            ja = Ma();
            J.urls.overlaysLoad = aa.getURL("overlays_data_url");
            J.urls.overlaysEngage = aa.getURL("overlays_engage_url");
            J.urls.cldbData = aa.getURL("client_debug_data");
            J.overlaysCC = k.overlaysCC;
            U = 1 == pa.db ? !0 : !1;
            m.AddCss(k.css_anims, "smct-v5-anims");
            ya.set(pa.ls3rdptyUID);
            J.OvReqInt = 1 == pa.OvReqInt ? !0 : !1;
            l = pa.ovCookieHistory;
            "number" !== typeof l && (l = 10);
            3 > l && (l = 3);
            J.ovCookieHistory = l;
            if (!1 === N.enabled()) return M("Cookies are disabled!"), !1;
            xa || ia("Native console functionality overwritten. Using fallback.");
            M("Tag V" + k.version + " Loaded", k.name, k.id);
            var v = function() {
                    var p = M.custom("Main", "#0d4286");
                    (function(E, Y) {
                        var r = N.read("smc_tag");
                        E = btoa(JSON.stringify({
                            id: E,
                            name: Y
                        }));
                        r !== E && N.create("smc_tag", E, 525600)
                    })(k.id, k.name);
                    var F = N.read("smc_session_id");
                    localStorage !== S && (null === F && (localStorage.setItem("smc_session_time", 0), localStorage.setItem("smc_session_step", 0)), localStorage.getItem("smc_session_time") === S && localStorage.setItem("smc_session_time", 0), setInterval(function() {
                        if (!J.leftPage && !J.leftTab) {
                            var E =
                                parseInt(localStorage.getItem("smc_session_time"));
                            localStorage.setItem("smc_session_time", E + 1)
                        }
                    }, 1E3));
                    var G = function(E) {
                        for (var Y = "", r = 0; r < E; r++) Y += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62 * Math.random()));
                        return Y
                    };
                    null === F && (F = G(32), N.create("smc_session_id", F, 0), p(`Created new session ID ${F}`));
                    p = pa.timeout;
                    p = isNaN(parseInt(p, 10)) ? 100 : p;
                    setTimeout(function() {
                        La(ja)
                    }, p);
                    k.plugins.basketBackup && Ia(k.plugins.basketBackup, ja);
                    k.plugins.smarterCodes && Ja(k.plugins.smarterCodes,
                        ja);
                    if ("2a" === k.config.pxt_version || "2b" === k.config.pxt_version) {
                        const E = M.custom("PixelTracker", "#1e831d");
                        Z.timeOffset = "function" === typeof aa.getTagLoadedTime ? Date.now() - aa.getTagLoadedTime() : 0;
                        E(`entering trackerV2; time offset is ${Z.timeOffset}ms`);
                        Z.isUse = !0;
                        Z.isReady = !1;
                        var x = function() {
                                if (Array.isArray(Z.holding))
                                    for (var Y = 0; Y < Z.holding.length; Y++) Z.plugin.event(Z.holding[Y]);
                                Z.holding = [];
                                Z.isReady = !0;
                                E("TrackerV2", Z)
                            },
                            B = function(Y) {
                                E("Event", "Trying to trigger Events");
                                let r = "";
                                switch (Y.type) {
                                    case "overlay":
                                        E("PX2b",
                                            arguments);
                                        (r = aa.getURL("px2b_endpoint_url")) && -1 === r.indexOf("px2.smct") && (r += "/" === r.charAt(r.length - 1) ? "event" : "/event");
                                        r += "?";
                                        for (var X in Y.payload) Y.payload.hasOwnProperty(X) && (r += X + "=" + encodeURIComponent(Y.payload[X]) + "&");
                                        r = r.slice(0, -1);
                                        break;
                                    case "machineLearning":
                                        if (E("ML2b", arguments), (r = aa.getURL("px2b_endpoint_url")) && -1 === r.indexOf("px2.smct")) {
                                            r += "/" === r.charAt(r.length - 1) ? "ml-event" : "/ml-event";
                                            r += "?";
                                            for (X in Y.payload) Y.payload.hasOwnProperty(X) && (r += X + "=" + encodeURIComponent(Y.payload[X]) +
                                                "&");
                                            r = r.slice(0, -1)
                                        } else r = !1
                                }
                                r && ((new Image).src = r)
                            },
                            K = function() {
                                Z.plugin = {
                                    start: function() {
                                        E("b start", arguments);
                                        x()
                                    },
                                    event: B
                                };
                                Z.plugin.start()
                            };
                        if ("2a" === k.config.pxt_version && "" !== k.config.pxt_identity_pool_id) {
                            E("Tracker v2a loaded");
                            p = P.getElementsByTagName("head")[0];
                            F = P.createElement("script");
                            F.type = "text/javascript";
                            G = aa.getURL("px2a_source_url");
                            G = wa(G); - 1 < G.indexOf(".js") && (G = G + "?tv=" + k.version);
                            F.src = G;
                            k && k.config && k.config.enforceSri && 1 === k.config.enforceSri && (G = aa.getSRI("px2a_source_url")) &&
                                "" !== G && (F.integrity = G, F.crossOrigin = "anonymous");
                            F.charset = "utf-8";
                            p.appendChild(F);
                            let Y = setTimeout(() => {
                                K()
                            }, 1E3);
                            F.onload = function() {
                                clearTimeout(Y);
                                E("PX2 has initialized");
                                "function" === typeof Z.plugin.start && Z.plugin.start({
                                    IdentityPoolId: k.config.pxt_identity_pool_id,
                                    callback: x,
                                    fallbackEvent: B
                                })
                            };
                            F.onerror = function() {
                                clearTimeout(Y);
                                E("failed to load");
                                K()
                            }
                        } else "2b" === k.config.pxt_version && K()
                    }
                    if ("function" === typeof $smcCallCustomScripts) {
                        if ($smcCallCustomScripts(), $smcT5.CustomScripts && "function" ===
                            typeof $smcT5.CustomScripts.TagCode) try {
                            $smcT5.CustomScripts.TagCode()
                        } catch (E) {
                            ha.custom("Tag Code", "purple")(E)
                        }
                    } else aa.runCode("tag_custom_code", U);
                    if (null !== m.queryString("smcdb") || null !== N.read("smcdb")) {
                        var L = null !== m.queryString("smcdb", !1) ? m.queryString("smcdb", !1) : N.read("smcdb");
                        if (null !== L) try {
                            L = JSON.parse(atob(L))
                        } catch (E) {
                            L = null, ia("Invalid Base64:", E)
                        }
                        null !== L && 0 < parseInt(L.id, 10) && 0 < parseInt(L.tid, 10) && ja.anyScriptLoader("client_debug_url", function() {
                            $smcCDB.init(L.id, L.tid)
                        })
                    }
                    m.userSessionTimes.init()
                },
                z = function() {
                    var p = setInterval(function() {
                        "undefined" !== typeof A.$smcT5 && (clearInterval(p), v())
                    }, 1)
                };
            if (l = 1 == pa.blockIframe) try {
                l = A.self !== A.top
            } catch (p) {
                l = !0
            }
            if (l) return M("Tag not loaded - Iframe Blocked"), !1;
            pa.db ? ja.anyScriptLoader("smc_debug_url", function() {
                U = !0;
                A.$smcTagDataForDebugger = k;
                H = A.$smcDebugger();
                z()
            }) : z()
        };
    const Na = (l, v, z) => {
        const p = m.DBC.custom("IP2Location", "#cb31ca"),
            F = {
                cc: null,
                cn: null,
                reg: null,
                city: null,
                pc: null
            };
        if (l && "string" === typeof l && "0" !== l) {
            var G = {
                country: "urgjope",
                region: "poieklw",
                latlong: "asnbvds"
            };
            l = G[l] || G.country;
            v = wa(`https://ipl.smct.co/v1/${z}/${v}/${l}`);
            var x = setTimeout(() => {
                    k.loc = F;
                    p("Timeout exceeded, will re-attempt on refresh")
                }, 500),
                B = btoa(z + l);
            z = JSON.parse(localStorage.getItem("smc-loc"));
            l = (new Date).getTime() / 1E3;
            l = Math.abs(l - (z ? .date ? ? 0)) / 3600;
            z ? .lookupKey === B && 24 > l ? (k.loc = z, p(`Restored IP location from localStorage, age: ${l.toFixed(2)} hours`)) : (p("Updating IP location, lookup key changed or location outdated"), m.ajax.get(v, {}, K => {
                clearTimeout(x);
                const L =
                    JSON.parse(K),
                    E = setInterval(() => {
                        1 !== (("undefined" !== typeof $smcO5 && $smcO5 ? .vars ? .is_open) ? ? !1) && (clearInterval(E), p("parsedResult", L), k.loc = L, localStorage.setItem("smc-loc", JSON.stringify({
                            date: (new Date).getTime() / 1E3,
                            lookupKey: B,
                            ...k.loc
                        })), p("Updated IP location data"))
                    }, 300)
            }, !0, 500))
        } else k.loc = F, p(`Setting defaults. ${l?`${l} isn't handled`:"IP Location disabled"}`)
    };
    (function(l) {
        const v = M.custom("Tag Init", "#66d504");
        try {
            k = JSON.parse(atob(l.o)), J.b64 = 1, setTimeout(function() {
                v("Tag data decoded",
                    k)
            }, 50)
        } catch (p) {
            k = l.o, J.b64 = 0, setTimeout(function() {
                v("Tag data already decoded", k)
            }, 50)
        }
        N = Fa();
        k.host = aa.getURL("host");
        v("Tag host", k.host);
        let z = l.a !== S ? l.a : k.tag_active;
        k.device || (k.device = Ga(), setTimeout(function() {
            v("Device Detection", k.device)
        }, 500));
        k.config.cookieMaxAgeDays && !isNaN(parseInt(k.config.cookieMaxAgeDays, 10)) && (J.cookieMaxAgeDays = k.config.cookieMaxAgeDays);
        setTimeout(function() {
            Na(k.useLoc, k.locSig, btoa(k.ip))
        }, 50);
        if (k.ip !== S && k.device !== S) Ea(z);
        else try {
            m.ajax.post(aa.getURL("tag_data_url") +
                "?data=1&t=" + k.name, {
                    data: "BOOM"
                },
                function(p) {
                    p = JSON.parse(p);
                    if (0 == p.r) ia(p.error);
                    else if (1 == p.r) {
                        k.ip = p.output.ip;
                        k.ipb = [1, !0, "1"].includes(p.output.ipb) ? 1 : 0;
                        k.t = p.output.t;
                        k.config.insights = p.output.insights;
                        k.config.pxTrackOff = p.output.pxTrackOff;
                        k.config.pxt_version = p.output.pxt_version;
                        k.config.pxt_identity_pool_id = p.output.pxt_identity_pool_id;
                        if (U = p.output.db) k.config.db = 1, k.config.debugger_info = p.output.debugger_info, k.config.forceOnDebug = p.output.forceOnDebug;
                        p.output.cookieMaxAgeDays &&
                            !isNaN(parseInt(p.output.cookieMaxAgeDays, 10)) && (J.cookieMaxAgeDays = p.output.cookieMaxAgeDays);
                        z = p.output.tag_active;
                        Ea(z)
                    }
                })
        } catch (p) {
            ia("ajax error 1", p)
        }
    })(A.$smctData);
    return {
        CookieManager: N,
        LS: na,
        tagHelpers: m,
        outputs: J,
        TrackerV2: Z
    }
}(window, document, void 0);