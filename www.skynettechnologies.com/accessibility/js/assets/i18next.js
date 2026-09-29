import {
    _ as e
} from "./preload-helper.js";
import {
    m as t,
    o as i,
    i as o,
    w as n,
    C as a,
    k as r,
    h as s,
    n as l,
    A as c,
    B as d,
    g as u,
    s as p,
    b as h,
    D as g,
    r as _
} from "./widget.js";
import {
    c as f
} from "./colorOptions.js";

function m(e, t) {
    for (var i = 0; i < t.length; i++) {
        const o = t[i];
        if ("string" != typeof o && !Array.isArray(o))
            for (const t in o)
                if ("default" !== t && !(t in e)) {
                    const i = Object.getOwnPropertyDescriptor(o, t);
                    i && Object.defineProperty(e, t, i.get ? i : {
                        enumerable: !0,
                        get: () => o[t]
                    })
                }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}

function b(e) {
    return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

function v(e) {
    var t = function(e, t) {
        if ("object" != b(e) || !e) return e;
        var i = e[Symbol.toPrimitive];
        if (void 0 !== i) {
            var o = i.call(e, t || "default");
            if ("object" != b(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
    }(e, "string");
    return "symbol" == b(t) ? t : t + ""
}

function y(e, t) {
    for (var i = 0; i < t.length; i++) {
        var o = t[i];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, v(o.key), o)
    }
}
var k = [],
    w = k.forEach,
    x = k.slice;

function S(e, t, i, o) {
    var n = e.read.bind(e);
    if (2 !== n.length) n(t, i, o);
    else try {
        var a = n(t, i);
        a && "function" == typeof a.then ? a.then(function(e) {
            return o(null, e)
        }).catch(o) : o(null, a)
    } catch (r) {
        o(r)
    }
}
var T = function() {
    function e(t) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.backends = [], this.type = "backend", this.allOptions = o, this.init(t, i)
    }
    var t, i, o;
    return t = e, i = [{
        key: "init",
        value: function(e) {
            var t = this,
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.services = e, this.options = function(e) {
                return w.call(x.call(arguments, 1), function(t) {
                    if (t)
                        for (var i in t) void 0 === e[i] && (e[i] = t[i])
                }), e
            }(i, this.options || {}, {
                handleEmptyResourcesAsFailed: !0,
                cacheHitMode: "none"
            }), this.allOptions = o, this.options.backends && this.options.backends.forEach(function(i, n) {
                var a;
                t.backends[n] = t.backends[n] || ((a = i) ? "function" == typeof a ? new a : a : null), t.backends[n].init(e, t.options.backendOptions && t.options.backendOptions[n] || {}, o)
            }), this.services && this.options.reloadInterval && setInterval(function() {
                return t.reload()
            }, this.options.reloadInterval)
        }
    }, {
        key: "read",
        value: function(e, t, i) {
            var o = this,
                n = this.backends.length,
                a = function i(n, a) {
                    if (!(n < 0)) {
                        var r = o.backends[n];
                        r.save ? (r.save(e, t, a), i(n - 1, a)) : i(n - 1, a)
                    }
                };
            ! function r(s) {
                if (s >= n) return i(new Error("non of the backend loaded data", !0));
                var l = s === n - 1,
                    c = o.options.handleEmptyResourcesAsFailed && !l ? 0 : -1,
                    d = o.backends[s];
                d.read ? S(d, e, t, function(n, l, u) {
                    if (!n && l && Object.keys(l).length > c) {
                        if (i(null, l, s), a(s - 1, l), d.save && o.options.cacheHitMode && ["refresh", "refreshAndUpdateStore"].indexOf(o.options.cacheHitMode) > -1) {
                            if (u && o.options.refreshExpirationTime && u + o.options.refreshExpirationTime > Date.now()) return;
                            var p = o.backends[s + 1];
                            p && p.read && S(p, e, t, function(i, n) {
                                i || n && (Object.keys(n).length <= c || (a(s, n), "refreshAndUpdateStore" === o.options.cacheHitMode && o.services && o.services.resourceStore && o.services.resourceStore.addResourceBundle(e, t, n)))
                            })
                        }
                    } else r(s + 1)
                }) : r(s + 1)
            }(0)
        }
    }, {
        key: "create",
        value: function(e, t, i, o) {
            var n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function() {},
                a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
            this.backends.forEach(function(r) {
                if (r.create) {
                    var s = r.create.bind(r);
                    if (s.length < 6) try {
                        var l;
                        (l = 5 === s.length ? s(e, t, i, o, a) : s(e, t, i, o)) && "function" == typeof l.then ? l.then(function(e) {
                            return n(null, e)
                        }).catch(n) : n(null, l)
                    } catch (c) {
                        n(c)
                    } else s(e, t, i, o, n, a)
                }
            })
        }
    }, {
        key: "reload",
        value: function() {
            var e = this,
                t = this.services,
                i = t.backendConnector,
                o = t.languageUtils,
                n = t.logger,
                a = i.language;
            if (!a || "cimode" !== a.toLowerCase()) {
                var r = [],
                    s = function(e) {
                        o.toResolveHierarchy(e).forEach(function(e) {
                            r.indexOf(e) < 0 && r.push(e)
                        })
                    };
                s(a), this.allOptions.preload && this.allOptions.preload.forEach(function(e) {
                    return s(e)
                }), r.forEach(function(t) {
                    e.allOptions.ns.forEach(function(e) {
                        i.read(t, e, "read", null, null, function(o, a) {
                            o && n.warn("loading namespace ".concat(e, " for language ").concat(t, " failed"), o), !o && a && n.log("loaded namespace ".concat(e, " for language ").concat(t), a), i.loaded("".concat(t, "|").concat(e), o, a)
                        })
                    })
                })
            }
        }
    }], i && y(t.prototype, i), o && y(t, o), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e
}();

function E(e) {
    return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

function A() {
    return "function" == typeof XMLHttpRequest || "object" === ("undefined" == typeof XMLHttpRequest ? "undefined" : E(XMLHttpRequest))
}

function O(e) {
    throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
T.type = "backend";
var C, R = {
        exports: {}
    },
    P = {
        exports: {}
    };

function L() {
    return C || (C = 1, function(e, i) {
        var o, n = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== t && t,
            a = function() {
                function e() {
                    this.fetch = !1, this.DOMException = n.DOMException
                }
                return e.prototype = n, new e
            }();
        o = a,
            function(e) {
                var t = void 0 !== o && o || "undefined" != typeof self && self || void 0 !== t && t,
                    i = "URLSearchParams" in t,
                    n = "Symbol" in t && "iterator" in Symbol,
                    a = "FileReader" in t && "Blob" in t && function() {
                        try {
                            return new Blob, !0
                        } catch (e) {
                            return !1
                        }
                    }(),
                    r = "FormData" in t,
                    s = "ArrayBuffer" in t;
                if (s) var l = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    c = ArrayBuffer.isView || function(e) {
                        return e && l.indexOf(Object.prototype.toString.call(e)) > -1
                    };

                function d(e) {
                    if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e) throw new TypeError('Invalid character in header field name: "' + e + '"');
                    return e.toLowerCase()
                }

                function u(e) {
                    return "string" != typeof e && (e = String(e)), e
                }

                function p(e) {
                    var t = {
                        next: function() {
                            var t = e.shift();
                            return {
                                done: void 0 === t,
                                value: t
                            }
                        }
                    };
                    return n && (t[Symbol.iterator] = function() {
                        return t
                    }), t
                }

                function h(e) {
                    this.map = {}, e instanceof h ? e.forEach(function(e, t) {
                        this.append(t, e)
                    }, this) : Array.isArray(e) ? e.forEach(function(e) {
                        this.append(e[0], e[1])
                    }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
                        this.append(t, e[t])
                    }, this)
                }

                function g(e) {
                    if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
                    e.bodyUsed = !0
                }

                function _(e) {
                    return new Promise(function(t, i) {
                        e.onload = function() {
                            t(e.result)
                        }, e.onerror = function() {
                            i(e.error)
                        }
                    })
                }

                function f(e) {
                    var t = new FileReader,
                        i = _(t);
                    return t.readAsArrayBuffer(e), i
                }

                function m(e) {
                    if (e.slice) return e.slice(0);
                    var t = new Uint8Array(e.byteLength);
                    return t.set(new Uint8Array(e)), t.buffer
                }

                function b() {
                    return this.bodyUsed = !1, this._initBody = function(e) {
                        var t;
                        this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? "string" == typeof e ? this._bodyText = e : a && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : r && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : i && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : s && a && (t = e) && DataView.prototype.isPrototypeOf(t) ? (this._bodyArrayBuffer = m(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : s && (ArrayBuffer.prototype.isPrototypeOf(e) || c(e)) ? this._bodyArrayBuffer = m(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : i && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, a && (this.blob = function() {
                        var e = g(this);
                        if (e) return e;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }, this.arrayBuffer = function() {
                        if (this._bodyArrayBuffer) {
                            var e = g(this);
                            return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
                        }
                        return this.blob().then(f)
                    }), this.text = function() {
                        var e, t, i, o = g(this);
                        if (o) return o;
                        if (this._bodyBlob) return e = this._bodyBlob, t = new FileReader, i = _(t), t.readAsText(e), i;
                        if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                            for (var t = new Uint8Array(e), i = new Array(t.length), o = 0; o < t.length; o++) i[o] = String.fromCharCode(t[o]);
                            return i.join("")
                        }(this._bodyArrayBuffer));
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    }, r && (this.formData = function() {
                        return this.text().then(k)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }
                h.prototype.append = function(e, t) {
                    e = d(e), t = u(t);
                    var i = this.map[e];
                    this.map[e] = i ? i + ", " + t : t
                }, h.prototype.delete = function(e) {
                    delete this.map[d(e)]
                }, h.prototype.get = function(e) {
                    return e = d(e), this.has(e) ? this.map[e] : null
                }, h.prototype.has = function(e) {
                    return this.map.hasOwnProperty(d(e))
                }, h.prototype.set = function(e, t) {
                    this.map[d(e)] = u(t)
                }, h.prototype.forEach = function(e, t) {
                    for (var i in this.map) this.map.hasOwnProperty(i) && e.call(t, this.map[i], i, this)
                }, h.prototype.keys = function() {
                    var e = [];
                    return this.forEach(function(t, i) {
                        e.push(i)
                    }), p(e)
                }, h.prototype.values = function() {
                    var e = [];
                    return this.forEach(function(t) {
                        e.push(t)
                    }), p(e)
                }, h.prototype.entries = function() {
                    var e = [];
                    return this.forEach(function(t, i) {
                        e.push([i, t])
                    }), p(e)
                }, n && (h.prototype[Symbol.iterator] = h.prototype.entries);
                var v = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                function y(e, t) {
                    if (!(this instanceof y)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                    var i, o, n = (t = t || {}).body;
                    if (e instanceof y) {
                        if (e.bodyUsed) throw new TypeError("Already read");
                        this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new h(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, n || null == e._bodyInit || (n = e._bodyInit, e.bodyUsed = !0)
                    } else this.url = String(e);
                    if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new h(t.headers)), this.method = (i = t.method || this.method || "GET", o = i.toUpperCase(), v.indexOf(o) > -1 ? o : i), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
                    if (this._initBody(n), !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== t.cache && "no-cache" !== t.cache)) {
                        var a = /([?&])_=[^&]*/;
                        a.test(this.url) ? this.url = this.url.replace(a, "$1_=" + (new Date).getTime()) : this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime()
                    }
                }

                function k(e) {
                    var t = new FormData;
                    return e.trim().split("&").forEach(function(e) {
                        if (e) {
                            var i = e.split("="),
                                o = i.shift().replace(/\+/g, " "),
                                n = i.join("=").replace(/\+/g, " ");
                            t.append(decodeURIComponent(o), decodeURIComponent(n))
                        }
                    }), t
                }

                function w(e, t) {
                    if (!(this instanceof w)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                    t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = void 0 === t.statusText ? "" : "" + t.statusText, this.headers = new h(t.headers), this.url = t.url || "", this._initBody(e)
                }
                y.prototype.clone = function() {
                    return new y(this, {
                        body: this._bodyInit
                    })
                }, b.call(y.prototype), b.call(w.prototype), w.prototype.clone = function() {
                    return new w(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new h(this.headers),
                        url: this.url
                    })
                }, w.error = function() {
                    var e = new w(null, {
                        status: 0,
                        statusText: ""
                    });
                    return e.type = "error", e
                };
                var x = [301, 302, 303, 307, 308];
                w.redirect = function(e, t) {
                    if (-1 === x.indexOf(t)) throw new RangeError("Invalid status code");
                    return new w(null, {
                        status: t,
                        headers: {
                            location: e
                        }
                    })
                }, e.DOMException = t.DOMException;
                try {
                    new e.DOMException
                } catch (T) {
                    e.DOMException = function(e, t) {
                        this.message = e, this.name = t;
                        var i = Error(e);
                        this.stack = i.stack
                    }, e.DOMException.prototype = Object.create(Error.prototype), e.DOMException.prototype.constructor = e.DOMException
                }

                function S(i, o) {
                    return new Promise(function(n, r) {
                        var l = new y(i, o);
                        if (l.signal && l.signal.aborted) return r(new e.DOMException("Aborted", "AbortError"));
                        var c = new XMLHttpRequest;

                        function d() {
                            c.abort()
                        }
                        c.onload = function() {
                            var e, t, i = {
                                status: c.status,
                                statusText: c.statusText,
                                headers: (e = c.getAllResponseHeaders() || "", t = new h, e.replace(/\r?\n[\t ]+/g, " ").split("\r").map(function(e) {
                                    return 0 === e.indexOf("\n") ? e.substr(1, e.length) : e
                                }).forEach(function(e) {
                                    var i = e.split(":"),
                                        o = i.shift().trim();
                                    if (o) {
                                        var n = i.join(":").trim();
                                        t.append(o, n)
                                    }
                                }), t)
                            };
                            i.url = "responseURL" in c ? c.responseURL : i.headers.get("X-Request-URL");
                            var o = "response" in c ? c.response : c.responseText;
                            setTimeout(function() {
                                n(new w(o, i))
                            }, 0)
                        }, c.onerror = function() {
                            setTimeout(function() {
                                r(new TypeError("Network request failed"))
                            }, 0)
                        }, c.ontimeout = function() {
                            setTimeout(function() {
                                r(new TypeError("Network request failed"))
                            }, 0)
                        }, c.onabort = function() {
                            setTimeout(function() {
                                r(new e.DOMException("Aborted", "AbortError"))
                            }, 0)
                        }, c.open(l.method, function(e) {
                            try {
                                return "" === e && t.location.href ? t.location.href : e
                            } catch (i) {
                                return e
                            }
                        }(l.url), !0), "include" === l.credentials ? c.withCredentials = !0 : "omit" === l.credentials && (c.withCredentials = !1), "responseType" in c && (a ? c.responseType = "blob" : s && l.headers.get("Content-Type") && -1 !== l.headers.get("Content-Type").indexOf("application/octet-stream") && (c.responseType = "arraybuffer")), !o || "object" != typeof o.headers || o.headers instanceof h ? l.headers.forEach(function(e, t) {
                            c.setRequestHeader(t, e)
                        }) : Object.getOwnPropertyNames(o.headers).forEach(function(e) {
                            c.setRequestHeader(e, u(o.headers[e]))
                        }), l.signal && (l.signal.addEventListener("abort", d), c.onreadystatechange = function() {
                            4 === c.readyState && l.signal.removeEventListener("abort", d)
                        }), c.send(void 0 === l._bodyInit ? null : l._bodyInit)
                    })
                }
                S.polyfill = !0, t.fetch || (t.fetch = S, t.Headers = h, t.Request = y, t.Response = w), e.Headers = h, e.Request = y, e.Response = w, e.fetch = S
            }({}), a.fetch.ponyfill = !0, delete a.fetch.polyfill;
        var r = n.fetch ? n : a;
        (i = r.fetch).default = r.fetch, i.fetch = r.fetch, i.Headers = r.Headers, i.Request = r.Request, i.Response = r.Response, e.exports = i
    }(P, P.exports)), P.exports
}! function(e, i) {
    var o;
    if ("function" == typeof fetch && (o = void 0 !== t && t.fetch ? t.fetch : "undefined" != typeof window && window.fetch ? window.fetch : fetch), void 0 !== O && "undefined" == typeof window) {
        var n = o || L();
        n.default && (n = n.default), i.default = n, e.exports = i.default
    }
}(R, R.exports);
var H = R.exports;
const N = i(H),
    I = m({
        __proto__: null,
        default: N
    }, [H]);

function D(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), i.push.apply(i, o)
    }
    return i
}

function M(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2 ? D(Object(i), !0).forEach(function(t) {
            B(e, t, i[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : D(Object(i)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
        })
    }
    return e
}

function B(e, t, i) {
    var o;
    return o = function(e, t) {
        if ("object" != j(e) || !e) return e;
        var i = e[Symbol.toPrimitive];
        if (void 0 !== i) {
            var o = i.call(e, t || "default");
            if ("object" != j(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
    }(t, "string"), (t = "symbol" == j(o) ? o : String(o)) in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i, e
}

function j(e) {
    return (j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}
var G, q, F;
"function" == typeof fetch && (G = "undefined" != typeof global && global.fetch ? global.fetch : "undefined" != typeof window && window.fetch ? window.fetch : fetch), A() && ("undefined" != typeof global && global.XMLHttpRequest ? q = global.XMLHttpRequest : "undefined" != typeof window && window.XMLHttpRequest && (q = window.XMLHttpRequest)), "function" == typeof ActiveXObject && ("undefined" != typeof global && global.ActiveXObject ? F = global.ActiveXObject : "undefined" != typeof window && window.ActiveXObject && (F = window.ActiveXObject)), G || !I || q || F || (G = N || I), "function" != typeof G && (G = void 0);
var z = function(e, t) {
        if (t && "object" === j(t)) {
            var i = "";
            for (var o in t) i += "&" + encodeURIComponent(o) + "=" + encodeURIComponent(t[o]);
            if (!i) return e;
            e = e + (-1 !== e.indexOf("?") ? "&" : "?") + i.slice(1)
        }
        return e
    },
    U = function(e, t, i, o) {
        var n = function(e) {
            if (!e.ok) return i(e.statusText || "Error", {
                status: e.status
            });
            e.text().then(function(t) {
                i(null, {
                    status: e.status,
                    data: t
                })
            }).catch(i)
        };
        if (o) {
            var a = o(e, t);
            if (a instanceof Promise) return void a.then(n).catch(i)
        }
        "function" == typeof fetch ? fetch(e, t).then(n).catch(i) : G(e, t).then(n).catch(i)
    },
    V = !1,
    W = function(e, t, i, o) {
        return "function" == typeof i && (o = i, i = void 0), o = o || function() {}, G && 0 !== t.indexOf("file:") ? function(e, t, i, o) {
            e.queryStringParams && (t = z(t, e.queryStringParams));
            var n = M({}, "function" == typeof e.customHeaders ? e.customHeaders() : e.customHeaders);
            "undefined" == typeof window && "undefined" != typeof global && void 0 !== global.process && global.process.versions && global.process.versions.node && (n["User-Agent"] = "i18next-http-backend (node/".concat(global.process.version, "; ").concat(global.process.platform, " ").concat(global.process.arch, ")")), i && (n["Content-Type"] = "application/json");
            var a = "function" == typeof e.requestOptions ? e.requestOptions(i) : e.requestOptions,
                r = M({
                    method: i ? "POST" : "GET",
                    body: i ? e.stringify(i) : void 0,
                    headers: n
                }, V ? {} : a),
                s = "function" == typeof e.alternateFetch && e.alternateFetch.length >= 1 ? e.alternateFetch : void 0;
            try {
                U(t, r, o, s)
            } catch (l) {
                if (!a || 0 === Object.keys(a).length || !l.message || l.message.indexOf("not implemented") < 0) return o(l);
                try {
                    Object.keys(a).forEach(function(e) {
                        delete r[e]
                    }), U(t, r, o, s), V = !0
                } catch (c) {
                    o(c)
                }
            }
        }(e, t, i, o) : A() || "function" == typeof ActiveXObject ? function(e, t, i, o) {
            i && "object" === j(i) && (i = z("", i).slice(1)), e.queryStringParams && (t = z(t, e.queryStringParams));
            try {
                var n;
                (n = q ? new q : new F("MSXML2.XMLHTTP.3.0")).open(i ? "POST" : "GET", t, 1), e.crossDomain || n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n.withCredentials = !!e.withCredentials, i && n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n.overrideMimeType && n.overrideMimeType("application/json");
                var a = e.customHeaders;
                if (a = "function" == typeof a ? a() : a)
                    for (var r in a) n.setRequestHeader(r, a[r]);
                n.onreadystatechange = function() {
                    n.readyState > 3 && o(n.status >= 400 ? n.statusText : null, {
                        status: n.status,
                        data: n.responseText
                    })
                }, n.send(i)
            } catch (s) {
                console
            }
        }(e, t, i, o) : void o(new Error("No fetch and no xhr implementation found!"))
    };

function X(e) {
    return (X = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

function K(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), i.push.apply(i, o)
    }
    return i
}

function $(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2 ? K(Object(i), !0).forEach(function(t) {
            Y(e, t, i[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : K(Object(i)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
        })
    }
    return e
}

function Z(e, t) {
    for (var i = 0; i < t.length; i++) {
        var o = t[i];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, J(o.key), o)
    }
}

function Y(e, t, i) {
    return (t = J(t)) in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i, e
}

function J(e) {
    var t = function(e, t) {
        if ("object" != X(e) || !e) return e;
        var i = e[Symbol.toPrimitive];
        if (void 0 !== i) {
            var o = i.call(e, t || "default");
            if ("object" != X(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
    }(e, "string");
    return "symbol" == X(t) ? t : String(t)
}
var Q = function() {
    function e(t) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.services = t, this.options = i, this.allOptions = o, this.type = "backend", this.init(t, i, o)
    }
    var t, i, o;
    return t = e, i = [{
        key: "init",
        value: function(e) {
            var t = this,
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.services = e, this.options = $($($({}, {
                loadPath: "/locales/{{lng}}/{{ns}}.json",
                addPath: "/locales/add/{{lng}}/{{ns}}",
                parse: function(e) {
                    return JSON.parse(e)
                },
                stringify: JSON.stringify,
                parsePayload: function(e, t, i) {
                    return Y({}, t, i || "")
                },
                parseLoadPayload: function(e, t) {},
                request: W,
                reloadInterval: "undefined" == typeof window && 36e5,
                customHeaders: {},
                queryStringParams: {},
                crossDomain: !1,
                withCredentials: !1,
                overrideMimeType: !1,
                requestOptions: {
                    mode: "cors",
                    credentials: "same-origin",
                    cache: "default"
                }
            }), this.options || {}), i), this.allOptions = o, this.services && this.options.reloadInterval && setInterval(function() {
                return t.reload()
            }, this.options.reloadInterval)
        }
    }, {
        key: "readMulti",
        value: function(e, t, i) {
            this._readAny(e, e, t, t, i)
        }
    }, {
        key: "read",
        value: function(e, t, i) {
            this._readAny([e], e, [t], t, i)
        }
    }, {
        key: "_readAny",
        value: function(e, t, i, o, n) {
            var a, r = this,
                s = this.options.loadPath;
            "function" == typeof this.options.loadPath && (s = this.options.loadPath(e, i)), (s = function(e) {
                return !!e && "function" == typeof e.then
            }(a = s) ? a : Promise.resolve(a)).then(function(a) {
                if (!a) return n(null, {});
                var s = r.services.interpolator.interpolate(a, {
                    lng: e.join("+"),
                    ns: i.join("+")
                });
                r.loadUrl(s, n, t, o)
            })
        }
    }, {
        key: "loadUrl",
        value: function(e, t, i, o) {
            var n = this,
                a = "string" == typeof i ? [i] : i,
                r = "string" == typeof o ? [o] : o,
                s = this.options.parseLoadPayload(a, r);
            this.options.request(this.options, e, s, function(a, r) {
                if (r && (r.status >= 500 && r.status < 600 || !r.status)) return t("failed loading " + e + "; status code: " + r.status, !0);
                if (r && r.status >= 400 && r.status < 500) return t("failed loading " + e + "; status code: " + r.status, !1);
                if (!r && a && a.message && a.message.indexOf("Failed to fetch") > -1) return t("failed loading " + e + ": " + a.message, !0);
                if (a) return t(a, !1);
                var s, l;
                try {
                    s = "string" == typeof r.data ? n.options.parse(r.data, i, o) : r.data
                } catch (c) {
                    l = "failed parsing " + e + " to json"
                }
                if (l) return t(l, !1);
                t(null, s)
            })
        }
    }, {
        key: "create",
        value: function(e, t, i, o, n) {
            var a = this;
            if (this.options.addPath) {
                "string" == typeof e && (e = [e]);
                var r = this.options.parsePayload(t, i, o),
                    s = 0,
                    l = [],
                    c = [];
                e.forEach(function(i) {
                    var o = a.options.addPath;
                    "function" == typeof a.options.addPath && (o = a.options.addPath(i, t));
                    var d = a.services.interpolator.interpolate(o, {
                        lng: i,
                        ns: t
                    });
                    a.options.request(a.options, d, r, function(t, i) {
                        s += 1, l.push(t), c.push(i), s === e.length && "function" == typeof n && n(l, c)
                    })
                })
            }
        }
    }, {
        key: "reload",
        value: function() {
            var e = this,
                t = this.services,
                i = t.backendConnector,
                o = t.languageUtils,
                n = t.logger,
                a = i.language;
            if (!a || "cimode" !== a.toLowerCase()) {
                var r = [],
                    s = function(e) {
                        o.toResolveHierarchy(e).forEach(function(e) {
                            r.indexOf(e) < 0 && r.push(e)
                        })
                    };
                s(a), this.allOptions.preload && this.allOptions.preload.forEach(function(e) {
                    return s(e)
                }), r.forEach(function(t) {
                    e.allOptions.ns.forEach(function(e) {
                        i.read(t, e, "read", null, null, function(o, a) {
                            o && n.warn("loading namespace ".concat(e, " for language ").concat(t, " failed"), o), !o && a && n.log("loaded namespace ".concat(e, " for language ").concat(t), a), i.loaded("".concat(t, "|").concat(e), o, a)
                        })
                    })
                })
            }
        }
    }], i && Z(t.prototype, i), o && Z(t, o), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e
}();

function ee(e) {
    return (ee = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

function te(e) {
    var t = function(e, t) {
        if ("object" != ee(e) || !e) return e;
        var i = e[Symbol.toPrimitive];
        if (void 0 !== i) {
            var o = i.call(e, t || "default");
            if ("object" != ee(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
    }(e, "string");
    return "symbol" == ee(t) ? t : t + ""
}

function ie(e, t, i) {
    return (t = te(t)) in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i, e
}

function oe(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function ne(e, t) {
    for (var i = 0; i < t.length; i++) {
        var o = t[i];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, te(o.key), o)
    }
}

function ae(e, t, i) {
    return t && ne(e.prototype, t), i && ne(e, i), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function re(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), i.push.apply(i, o)
    }
    return i
}

function se(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2 ? re(Object(i), !0).forEach(function(t) {
            ie(e, t, i[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : re(Object(i)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
        })
    }
    return e
}
Q.type = "backend";
var le = function() {
    function e(t) {
        oe(this, e), this.store = t.store
    }
    return ae(e, [{
        key: "setItem",
        value: function(e, t) {
            if (this.store) try {
                this.store.setItem(e, t)
            } catch (i) {}
        }
    }, {
        key: "getItem",
        value: function(e, t) {
            if (this.store) try {
                return this.store.getItem(e, t)
            } catch (i) {}
        }
    }]), e
}();
var ce = function() {
    function e(t) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        oe(this, e), this.init(t, i), this.type = "backend"
    }
    return ae(e, [{
        key: "init",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            this.services = e, this.options = se(se(se({}, function() {
                var e = null;
                try {
                    e = window.localStorage
                } catch (t) {}
                return {
                    prefix: "i18next_res_",
                    expirationTime: 6048e5,
                    defaultVersion: void 0,
                    versions: {},
                    store: e
                }
            }()), this.options), t), this.storage = new le(this.options)
        }
    }, {
        key: "read",
        value: function(e, t, i) {
            var o = Date.now();
            if (!this.storage.store) return i(null, null);
            var n = this.storage.getItem("".concat(this.options.prefix).concat(e, "-").concat(t));
            if (n) {
                n = JSON.parse(n);
                var a = this.getVersion(e);
                if (n.i18nStamp && n.i18nStamp + this.options.expirationTime > o && a === n.i18nVersion) {
                    var r = n.i18nStamp;
                    return delete n.i18nVersion, delete n.i18nStamp, i(null, n, r)
                }
            }
            return i(null, null)
        }
    }, {
        key: "save",
        value: function(e, t, i) {
            if (this.storage.store) {
                i.i18nStamp = Date.now();
                var o = this.getVersion(e);
                o && (i.i18nVersion = o), this.storage.setItem("".concat(this.options.prefix).concat(e, "-").concat(t), JSON.stringify(i))
            }
        }
    }, {
        key: "getVersion",
        value: function(e) {
            return this.options.versions[e] || this.options.defaultVersion
        }
    }]), e
}();
ce.type = "backend";
const de = () => new Promise(e => {
        setTimeout(e, 1)
    }),
    ue = ["en", "en-us", "en-gb", "en-au", "en-ca", "en-za", "es", "es-mx", "de", "ar", "pt", "pt-br", "ja", "fr", "it", "pl", "ru", "zh", "zh-tw", "he", "hu", "sk", "fi", "tr", "el", "la", "bg", "ca", "cs", "da", "nl", "hi", "id", "ko", "lt", "ms", "no", "ro", "sl", "sv", "th", "uk", "vi", "bn", "si", "am", "hmn", "my", "et", "lv", "sr", "hr", "ka", "haw", "cy", "ceb", "sm", "ht", "fo", "cnr", "az", "eu", "fil", "gl", "nb", "fa", "pa", "sq", "hy", "as", "ay", "bm", "be", "bs", "co", "dv", "eo", "ee", "fy", "gn", "gu", "ha", "is", "ig", "ga", "jv", "kn", "kk", "km", "rw", "ku", "ky", "lo", "ln", "lg", "lb", "mk", "mg", "ml", "mt", "mi", "mr", "mn", "ne", "ny", "or", "om", "ps", "qu", "sa", "gd", "st", "sn", "sd", "so", "su", "sw", "tg", "ta", "tt", "te", "ti", "ts", "tk", "ak", "ur", "ug", "uz", "xh", "yi", "yo", "zu", "bho", "doi", "gom", "ckb", "kri", "mai", "mni", "lus", "nso", "ilo", "prs", "ast", "an", "sc", "rm", "vec", "nap", "scn", "fur", "lld", "rup", "csb", "hsb", "rue", "br", "kw", "gv", "ltg", "rom", "os", "se", "krl", "vep", "izh", "liv", "kv", "mdf", "udm", "ba", "cv", "gag", "oc", "crh", "krc", "kum", "nog", "xmf", "lzz", "sva", "ce", "inh", "ava", "lez", "ady", "ab", "abq", "got", "xtg", "chm", "aii", "ett"],
    pe = ["es", "prs", "es-mx", "de", "ar", "pt", "pt-br", "ja", "fr", "it", "pl", "ru", "zh", "zh-tw", "he", "hu", "sk", "fi", "tr", "el", "la", "bg", "ca", "cs", "da", "nl", "id", "ko", "lt", "ms", "no", "ro", "sl", "sv", "th", "uk", "vi", "bn", "si", "am", "hmn", "my", "et", "lv", "sr", "hr", "ka", "haw", "cy", "ceb", "sm", "ht", "fo", "cnr", "az", "eu", "fil", "gl", "nb", "fa", "pa", "sq", "hy", "as", "ay", "bm", "be", "bs", "co", "dv", "eo", "ee", "fy", "gn", "ha", "is", "ig", "ga", "jv", "kn", "kk", "km", "rw", "ku", "ky", "lo", "ln", "lg", "lb", "mk", "mg", "ml", "mt", "mi", "mr", "mn", "ne", "ny", "or", "om", "ps", "qu", "sa", "gd", "st", "sn", "sd", "so", "su", "sw", "tg", "ta", "tt", "te", "ti", "ts", "tk", "ak", "ur", "ug", "uz", "xh", "yi", "yo", "zu", "bho", "doi", "gom", "ckb", "kri", "mai", "mni", "lus", "nso", "ilo", "oc", "ast", "an", "sc", "rm", "vec", "nap", "scn", "fur", "lld", "rup", "csb", "hsb", "rue", "br", "kw", "gv", "ltg", "rom", "os", "se", "krl", "vep", "izh", "liv", "kv", "mdf", "udm", "ba", "cv", "gag", "crh", "krc", "kum", "nog", "xmf", "lzz", "sva", "ce", "inh", "ava", "lez", "ady", "ab", "abq", "got", "xtg", "chm", "aii", "ett"],
    he = {
        select_language: "Select Language",
        screen_reader_alert_text: "Please select text to enable screen reader",
        hide_ada_tool: "Close Accessibility Preferences Menu",
        accessibility_preferences: "Accessibility Preferences",
        reset: "Reset",
        reset_preferences: "Reset Preferences",
        choose_language: "Choose the Interface Language",
        accessibility_statement: "Accessibility Statement",
        report_problem: "Report a Problem",
        solution_by: "Web Accessibility Solution by",
        default: "Default",
        user_preferences: "User Preferences",
        show_accessibility_preferences: "Show Accessibility Preferences",
        choose_interface_language: "Select the language of Interface",
        close_accessibility_language: "Close Language Popup",
        close_accessibility_statement: "Close Accessibility Statement Popup",
        hide_interface: "Hide Widget",
        close_accessibility_hide_interface_popup: "Close Accessibility Hide Widget Popup",
        hide_accessibility_interface: "Would you like to hide the Accessibility Widget?",
        "hide-content": "Please note: If you choose to hide the accessibility Widget, you won't be able to see it anymore, unless you clear your browsing history and data. Are you sure that you wish to hide the Widget?",
        accept: "Accept",
        cancel: "Cancel",
        background_color: "Background",
        text_color: "Text Color",
        title_color: "Title Color",
        change_title_color_to_blue: "Change Title Color to Blue",
        change_title_color_to_purple: "Change Title Color to Purple",
        change_title_color_to_red: "Change Title Color to Red",
        change_title_color_to_orange: "Change Title Color to Orange",
        change_title_color_to_teal: "Change Title Color to Teal",
        change_title_color_to_green: "Change Title Color to Green",
        change_title_color_to_white: "Change Title Color to White",
        change_title_color_to_black: "Change Title Color to Black",
        change_text_color_to_blue: "Change Text Color to Blue",
        change_text_color_to_purple: "Change Text Color to Purple",
        change_text_color_to_red: "Change Text Color to Red",
        change_text_color_to_orange: "Change Text Color to Orange",
        change_text_color_to_teal: "Change Text Color to Teal",
        change_text_color_to_green: "Change Text Color to Green",
        change_text_color_to_white: "Change Text Color to White",
        change_text_color_to_black: "Change Text Color to Black",
        change_background_color_to_blue: "Change Background Color to Blue",
        change_background_color_to_purple: "Change Background Color to Purple",
        change_background_color_to_red: "Change Background Color to Red",
        change_background_color_to_orange: "Change Background Color to Orange",
        change_background_color_to_teal: "Change Background Color to Teal",
        change_background_color_to_green: "Change Background Color to Green",
        change_background_color_to_white: "Change Background Color to White",
        change_background_color_to_black: "Change Background Color to Black",
        filter_content: "Filter Content",
        headers_tab: "Headers Tab",
        landmarks_tab: "Landmarks Tab",
        links_tab: "Links Tab",
        headings: "Headings",
        landmarks: "Landmarks",
        links: "Links",
        this_page_contains_no_headers: "This page contains no headers",
        this_page_contains_no_landmarks: "This page contains no landmarks",
        this_page_contains_no_links: "This page contains no links",
        close_this_dialog: "Close this dialog",
        close_accessibility_filter_content_popup: "Close accessibility filter content popup",
        close: "Close",
        decrease_font_size: "Decrease Font Size",
        increase_font_size: "Increase Font Size",
        font_size: "Font Size",
        current_font_size: "Current Font Size",
        adjust_font_size: "Adjust Font Size",
        adjust_line_height: "Adjust Line Height",
        adjust_letter_spacing: "Adjust Line Spacing",
        high_contrast: "High Contrast",
        line_height: "Line Height",
        decrease_line_height: "Decrease Line Height",
        increase_line_height: "Increase Line Height",
        current_line_height: "Current Line Height",
        hide_images: "Hide Images",
        invert_colors: "Invert Colors",
        dark_contrast: "Dark Contrast",
        light_contrast: "Light Contrast",
        highlight_links: "Highlight Links",
        highlight_titles: "Highlight Titles",
        readable_font: "Readable Font",
        letter_spacing: "Letter Spacing",
        current_letter_spacing: "Current Letter Spacing",
        increase_letter_spacing: "Increase Letter Spacing",
        decrease_letter_spacing: "Decrease Letter Spacing",
        stop_animations: "Stop Animations",
        content_scaling: "Content Scaling",
        increase_content_scaling: "Increase Content Scaling",
        current_content_scaling: "Current Content Scaling",
        decrease_content_scaling: "Decrease Content Scaling",
        big_black_cursor: "Big Black Cursor",
        big_white_cursor: "Big White Cursor",
        reading_mask: "Reading Mask",
        reading_guide: "Reading Guide",
        text_magnifier: "Text Magnifier",
        align_center: "Align Center",
        align_left: "Align Left",
        align_right: "Align Right",
        monochrome: "Monochrome",
        high_saturation: "High Saturation",
        low_saturation: "Low Saturation",
        mute_sounds: "Mute Sounds",
        highlight_hover: "Highlight Hover",
        highlight_focus: "Highlight Focus",
        screen_reader: "Screen Reader",
        screen_reader_greeting_text: "Screen reader enabled",
        dyslexia_font: "Dyslexia Font",
        accessibility_profiles: "Accessibility Profiles",
        motor_impaired: "Motor Impaired",
        visually_impaired: "Visually Impaired",
        blind: "Blind",
        color_blind: "Color Blind",
        dyslexia: "Dyslexia",
        cognitive_learning: "Cognitive & Learning",
        seizure_epileptic: "Seizure & Epileptic",
        adhd: "ADHD",
        smart_contrast: "Smart Contrast",
        read_mode: "Read Mode",
        widget_positions: "Move Widget",
        bottom_right: "Bottom Right",
        bottom_center: "Bottom Center",
        bottom_left: "Bottom Left",
        middle_left: "Middle Left",
        top_left: "Top Left",
        top_center: "Top Center",
        top_right: "Top Right",
        middle_right: "Middle Right",
        column: "Column",
        row: "Row",
        landmark: "Landmark",
        selection_field: "Selection Field",
        textarea: "Textarea",
        input_field: "Input Field",
        required: "Required",
        read_only: "Read Only",
        menu_pop_up: "Menu Pop Up",
        collapsed: "Collapsed",
        expanded: "Expanded",
        pressed: "Pressed",
        not_pressed: "Not Pressed",
        selected: "Selected",
        not_selected: "Not Selected",
        blank: "Blank",
        accessibility_menu_close: "Accessibility Menu Close",
        accessibility_menu_open: "Accessibility Menu Open",
        iframe: "Iframe",
        picture: "Picture",
        link: "Link",
        header_level_one: "Header Level One",
        header_level_two: "Header Level two",
        header_level_three: "Header Level three",
        header_level_four: "Header Level four",
        header_level_five: "Header Level five",
        header_level_six: "Header Level six",
        header_level: "Header Level",
        button_disabled: "Button Disabled",
        current_page: "Current Page",
        link_opens_in_new_window: "Link opens in new window",
        caption_reading_is_runing: "Caption reading is runing",
        article: "Article",
        comment: "Comment",
        section: "Section",
        main: "Main",
        navigation: "Navigation",
        complementary: "Complementary",
        contentinfo: "Contentinfo",
        banner: "Banner",
        region: "Region",
        dialog: "Dialog",
        heading: "Heading",
        form: "Form",
        document: "Document",
        footer: "Footer",
        aside: "Aside",
        video: "Video",
        audio: "Audio",
        checked: "Checked",
        not_checked: "Not Checked",
        screen_reader_enabled: "Screen Reader Enabled",
        screen_reader_info_text: "Use Tab, Shift Tab to navigate focusable elements. Use Left or Right Arrow keys to read text lines. To start reading, press Tab. To pause reading, press Control key. To resume reading, press Shift + Down Arrow keys.",
        screen_reader_introduction_text: "Welcome to All in One Accessibility screen reader. To start the All in One Accessibility screen reader, press 'Ctrl + /'. This shortcut activates the screen reader to help you navigate and interact with the content.",
        list_start: "List Start",
        list_end: "List End",
        search_dictionary: "Search in dictionary...",
        virtual_keyboard: "Virtual Keyboard",
        read_more_wikipedia: "Read More at Wikipedia",
        skip_to_content: "Skip to Content",
        skip_to_navigation: "Skip to Navigation",
        open_accessibility_toolbar: "Open Accessibility Toolbar",
        skip_to_footer: "Skip to Footer",
        enter: "ENTER",
        dictionary: "Dictionary",
        upgrade_now: "Upgrade Now",
        free_version_limited_features: "This is free Version with limited features",
        upgrade_to_pro_heading: "Upgrade to All in One Accessibility Pro",
        upgrade_to_pro_text: "Get full version with 52 plus features.",
        trial_version_heading: "Trial Version",
        trial_version_text: "Your All in One Accessibility Pro trial will be expired on:",
        purchase_now: "Purchase Now",
        close_ada_dashboard: "Close All in One Accessibility Dashboard",
        oversize_widget: "Oversize Widget",
        red: "Red",
        orange: "Orange",
        purple: "Purple",
        green: "Green",
        teal: "Teal",
        blue: "Blue",
        white: "White",
        black: "Black",
        button: "Button",
        closing_curly_bracket: "Closing curly bracket",
        opening_curly_bracket: "Opening curly bracket",
        backquote: "Backquote",
        tilde: "Tilde",
        exclamation_mark: "Exclamation Mark",
        caret: "Caret",
        opening_parenthesis: "Opening Parenthesis",
        closing_parenthesis: "Closing Parenthesis",
        minus: "Minus",
        pipe: "Pipe",
        colon: "Colon",
        semicolon: "Semicolon",
        single_quote: "Single Quote",
        quote: "Quote",
        comma: "Comma",
        less_than: "Less Than",
        greater_than: "Greater Than",
        question_mark: "Question Mark",
        opening_square_bracket: "Opening square bracket",
        closing_square_bracket: "Closing square bracket",
        full_stop: "Full stop",
        hash: "Hash",
        accessibility: "Accessibility",
        translation_loader: "Translating page to English language. Please Do not refresh the page",
        opens_in_new_tab: "Open in New Tab",
        voice_navigation: "Voice Navigation",
        "blind-short-desc": "Blind profile activates features such as:",
        "blind-desc": "This profile enables All in One Accessibility screen-reader. By using a screen reader, information from the device is announced in clear speech allowing a blind user to access devices on an equal footing with sighted counterparts.",
        "motor_impaired-short-desc": "Motor impaired profile activates features such as:",
        "motor_impaired-desc": "To operate the website using the keyboard, This profile allows motor-impaired individual to use shortcuts to jump to specific elements.",
        "visually_impaired-short-desc": "Visually impaired profile activates features such as:",
        "visually_impaired-desc": "This profile helps to improve website accessibility for individuals with visual impairments such as tunnel vision, cataracts, declining eyesight, glaucoma, etc.",
        "color_blind-short-desc": "Color blind profile activates deuteranomaly color blindness. Other color blindness adjustments can be found within the 'color-blindness' settings.",
        "color_blind-desc": "This profile adjusts website colours to suit individuals with the most prevalent forms of colour blindness. Specific colour blindness adjustments can be found within the “colour-blindness” settings.",
        "dyslexia-short-desc": "Dyslexia profile activates features such as:",
        "dyslexia-desc": "This profile changes the font style, size, and spacing in order to make it easier for people with dyslexia to read the website content.",
        "cognitive_learning-short-desc": "Cognitive learning profile activates features such as:",
        "cognitive_learning-desc": "This profile includes various assistive features to help users with cognitive disabilities, such as autism, dyslexia, and CVA, focus more effortlessly on the essential elements of the website.",
        "seizure_epileptic-short-desc": "Seizure epileptic profile activates features such as:",
        "seizure_epileptic-desc": "To safeguard Seizure & epilepsy individual, this profile disables flashing or blinking animations and aggressive or Seizure & Epileptic non friendly color combinations.",
        "adhd-short-desc": "ADHD profile activates features such as:",
        "adhd-desc": "Reducing distractions and noise is important for ADHD and Neurodivergent individual focus while they can easily read and browse the information on website.  This profile would help ADHD Individual.",
        color_blindness: "Color Blindness",
        protanomaly: "Protanomaly",
        deuteranomaly: "Deuteranomaly",
        tritanomaly: "Tritanomaly",
        protanopia: "Protanopia",
        deuteranopia: "Deuteranopia",
        tritanopia: "Tritanopia",
        achromatomaly: "Achromatomaly",
        achromatopsia: "Achromatopsia",
        none: "None",
        font_type: "Font Type",
        text_alignment: "Text Alignment",
        contrast: "Contrast",
        toolbar_help: "Toolbar Help",
        settings: "Settings",
        dock_toolbar_bottom: "Dock Toolbar bottom",
        close_accessibility_toolbar: "Close Accessibility toolbar",
        theme: "Theme",
        all_in_one_accessibility_settings: "All in One Accessibility Settings",
        light: "Light",
        dark: "dark",
        select_a_preferred_language: "Select a preferred language",
        tip_easily_toggle_the_all_in_one_accessibility_between_modes: "TIP: Easily toggle the All in One Accessibility between modes",
        osx: "OSX",
        windows: "Windows",
        osx_option: "Option+Ctrl+A",
        windows_shift: "Shift+Alt+A",
        more_by_skynet_technologies: "More by Skynet Technologies",
        features_list: "Features List",
        website_accessibility_checker: "Website Accessibility Checker",
        accessibility_statement_generator: "Accessibility Statement Generator",
        accessibility_add_on_services: "Accessibility Add-on Services",
        wcag_color_contrast_checker: "WCAG Color Contrast Checker",
        partnership_opportunities: "Partnership Opportunities",
        supported_languages: "Supported Languages",
        supported_standards: "Supported Standards",
        all_in_one_accessibility_chrome_extension_pro_features_enabled: "ReadWriteMadeSimple browser extension pro features are enabled.",
        sign_up: "Signup",
        login: "Login",
        ultra_violet: "Ultra Violet",
        highlighter: "Highlighter",
        web_search: "Website Search",
        yellow: "Yellow",
        pink: "Pink",
        clear: "Clear",
        sepia: "Sepia",
        command_option: "Cmd+Option+U",
        control_shift: "Ctrl+Shift+u",
        talk_n_type: "Talk & Type",
        talk_type_active_msg: "Talk & Type is active. Please use your microphone to fill out the form.",
        close_accessibility_dictionary_popup: "Close Accessibility Dictionary Search",
        libras: "libras",
        voice_navigation_help_toggle: "Toggle Voice Navigation Help",
        close_voice_navigation: "Close Voice Navigation",
        close_speak_to_navigation: "Close Speak to Navigation",
        no_result_found: "No Result Found",
        color: "Color",
        background: "Background",
        background_opacity: "Background Opacity",
        reading_light_height: "Reading Light Height",
        general: "General",
        account: "Account",
        shortcuts: "Shortcuts",
        text_highlighter: "Text Highlighter",
        elderly: "Elderly",
        "elderly-desc": "The Elderly profile is designed to enhance accessibility for older adults. It activates features such as the Big White Cursor, Text Magnifier, Stop Animation, Highlight Focus, Reading Guide, Content Scaling, and Smart Contrast to improve readability and ease of use.",
        "elderly-short-desc": "Elderly profile activates features such as:",
        profiles: "Profiles",
        create_profile_for_settings: "Create profiles to remember all of your preferred settings for ReadWriteMadeSimple Browser Extension.",
        need_help: "Need Help?",
        screen_reader_active: "Screen reader is active",
        tab_out_of: "tab {{n1}} of {{n2}}",
        search_language: "Search Language",
        no_language_found: "No language is found. Try searching using different keyword",
        no_next_heading: "No Next Heading",
        no_previous_heading: "No Previous Heading",
        no_next_heading_level_one: "No Next Heading Level One",
        no_next_heading_level_two: "No Next Heading Level Two",
        no_next_heading_level_three: "No Next Heading Level Three",
        no_next_heading_level_four: "No Next Heading Level Four",
        no_next_heading_level_five: "No Next Heading Level Five",
        no_next_heading_level_six: "No Next Heading Level Six",
        no_previous_heading_level_one: "No Previous Heading Level One",
        no_previous_heading_level_two: "No Previous Heading Level Two",
        no_previous_heading_level_three: "No Previous Heading Level Three",
        no_previous_heading_level_four: "No Previous Heading Level Four",
        no_previous_heading_level_five: "No Previous Heading Level Five",
        no_previous_heading_level_six: "No Previous Heading Level Six",
        no_next_landmark: "No Next Landmark",
        no_previous_landmark: "No previous Landmark",
        no_next_table: "No Next Table",
        no_previous_table: "No Previous Table",
        no_next_list: "No Next List",
        no_next_list_item: "No Next List Item",
        no_next_link: "No Next Link",
        no_next_unvisited_link: "No next unvisited link",
        no_next_visited_link: "No next visited link",
        no_next_graphics: "No next graphics",
        no_previous_graphics: "No previous graphics",
        no_previous_list: "No Previous List",
        no_previous_list_item: "No Previous List Item",
        reading: "Reading",
        stop_reading: "Stop Reading",
        control: "Control",
        start_reading_continuously_from_this_point_on: "Start reading continuously from this point on",
        read_next_item: "Read Next Item",
        read_next_focusable_item: "Read next focusable item (e.g. link, button)",
        go_to_next_heading: "Go to next heading",
        go_to_next_heading_of_level: "Go to next heading of level [1-6]",
        list_all_headings: "List all headings",
        go_to_next_landmark_region: "Go to next landmark/region",
        elements_list: "Elements list",
        Show_list_of_all_links_headings_form_fields_buttons_and_landmarks: "Show list of all links, headings, form fields, buttons, and landmarks",
        tables: "Tables",
        go_to_next_table: "Go to next table",
        navigate_table_cells: "Navigate table cells",
        lists: "Lists",
        go_to_next_list: "Go to next list",
        go_to_next_list_item: "Go to next list item",
        graphics: "Graphics",
        go_to_next_graphic: "Go to next graphic",
        list_all_links: "List all links",
        go_to_next_link: "Go to next link",
        go_to_next_unvisited_link: "Go to next unvisited link",
        go_to_next_visited_link: "Go to next visited link",
        go_backward: "Go backward",
        to_previous_heading_landmarks_table_focusable_item: "To previous heading, landmark, table, focusable item, etc.",
        no_previous_link: "No previous link",
        no_previous_unvisited_link: "No previous unvisited link",
        no_previous_visited_link: "No previous visited link",
        list_with_n_items: "List with {{n}} items",
        tab_to_view_keyboard_shortcuts_for_screen_reader: "Tab to view keyboard shortcuts for Screen Reader",
        keyboard_shortcuts_for_screen_reader: "Keyboard shortcuts for Screen Reader",
        toggle_screen_reader_shortcuts_help: "Toggle Screen Reader Shortcuts Help",
        help_command_aliases: "Help (Show available commands) command and aliases",
        hide_help_aliases: "Hide help command and aliases",
        skip_to_content_aliases: "Skip to Content command and aliases",
        skip_to_navigation_aliases: "Skip to Navigation command and aliases",
        skip_to_footer_aliases: "Skip to Footer command and aliases",
        show_widget_aliases: "Show Widget command and aliases",
        list_headings_aliases: "List Headings command and aliases",
        list_landmark_aliases: "List Landmark command and aliases",
        list_links_aliases: "List Links command and aliases",
        enter_command_aliases: "Enter command and aliases",
        scroll_down_aliases: "Scroll down command and aliases",
        Scroll_up_aliases: "Scroll up command and aliases",
        go_to_top_aliases: "Go to top command and aliases",
        go_to_bottom_aliases: "Go to bottom command and aliases",
        tab_command_aliases: "Tab command and aliases",
        tab_back_aliases: "Tab Back command and aliases",
        move_left_aliases: "Move Left command and aliases",
        move_right_aliases: "Move Right command and aliases",
        move_up_aliases: "Move Up command and aliases",
        move_down_aliases: "Move Down command and aliases",
        clear_input_aliases: "Clear Input command and aliases",
        read_page_aliases: "Read Page command and aliases",
        stop_read_Page_aliases: "Stop Read Page command and aliases",
        stop_voice_assistance_aliases: "Stop Voice Assistance command and aliases",
        reload_the_page_aliases: "Reload the page command and aliases",
        close_widget_aliases: "Close Widget command and aliases",
        read_headers: "read headers",
        list_heading: "list heading",
        show_heading: "show heading",
        read_all_the_headers: "read all the headers",
        go_to_header: "go to header",
        list_header: "list header",
        show_header: "show header",
        read_links: "read links",
        list_link: "list link",
        show_links: "show links",
        read_all_the_links: "read all the links",
        go_to_link: "go to link",
        read_h: "read h",
        read_all_the_h: "read all the h",
        list_h: "list h",
        show_h: "show h",
        start_reading_page: "start reading page",
        start_screen_reader: "start screen reader",
        open_screen_reader: "open screen reader",
        stop_reading_page: "stop reading page",
        stop_screen_reader: "stop screen reader",
        close_screen_reader: "close screen reader",
        search_the_main: "search the main",
        search_the_main_content: "search the main content",
        find_main_content: "Find main content",
        find_the_main: "Find the main",
        find_the_main_content: "Find the main content",
        read_the_current_element_again: "Read the current element again",
        read_again: "Read again",
        read_content: "Read content",
        read_paragraph: "Read paragraph",
        read_current_content: "Read current content",
        read_current: "Read current",
        read_previous: "Read previous",
        read_previous_content: "Read previous content",
        read_previous_paragraph: "Read previous paragraph",
        read_next: "Read next",
        read_next_content: "Read next content",
        read_next_paragraph: "Read next paragraph",
        voice_navigation_allow_access: "Please allow access permission to your microphone.",
        read_title: "Read title",
        read_the_title_of_the_page: "Read the title of the page",
        read_document_title: "Read document title",
        read_links_contained: "Read links contained",
        read_links_contained_in: "Read links contained in",
        read_all_links_inside: "Read all links inside",
        "read_all_links_contained in": "Read all links contained",
        read_all_links_contained_in: "Read all links contained in",
        go_to_previous_page: "Go to previous page",
        go_to_next_page: "Go to next page",
        summarize_page: "summarize page",
        summarize_the_page: "summarize the page",
        go_to_homepage: "Go to homepage",
        follow_link: "follow link",
        click: "click",
        submit: "submit",
        list_landmark: "list landmark",
        show_landmark: "show landmark",
        go_to_landmark: "Go to landmark",
        go_to_top: "Go to top",
        scroll_to_top: "Scroll to top",
        go_top: "Go top",
        scroll_top: "Scroll top",
        go_to_bottom: "Go to bottom",
        scroll_to_bottom: "Scroll to bottom",
        go_bottom: "Go bottom",
        scroll_bottom: "Scroll bottom",
        move_up: "Move up",
        up: "up",
        move_cursor_up: "Move cursor up",
        scroll_up: "Scroll up",
        go_up: "Go up",
        page_up: "page up",
        move_down: "Move down",
        down: "down",
        move_cursor_down: "Move cursor down",
        scroll_down: "Scroll down",
        go_down: "Go down",
        page_down: "page down",
        move_left: "Move left",
        left: "Left",
        move_cursor_left: "Move cursor left",
        scroll_left: "Scroll left",
        move_right: "Move right",
        right: "Right",
        move_cursor_right: "Move cursor right",
        scroll_right: "Scroll right",
        Navigate_to_Content: "Navigate to Content",
        Go_to_Content: "Go to Content",
        Main_Content: "Main Content",
        go_to_navigation: "Go to navigation",
        main_navigation: "Main navigation",
        go_to_footer: "Go to footer",
        navigate_to_footer: "Navigate to footer",
        help: "Help",
        help_me: "Help me",
        please_help: "Please help",
        show_commands: "Show commands",
        available_commands: "Available commands",
        show_available_commands: "Show available commands",
        list_commands: "List commands",
        hide_help: "Hide help",
        hide_command: "Hide command",
        show_widget: "Show widget",
        open_widget: "Open widget",
        show_all_in_one_accessibility_widget: "Show All in One Accessibility Widget",
        open_all_in_one_accessibility_widget: "Open All in One Accessibility Widget",
        close_widget: "Close widget",
        hide_widget: "Hide Widget",
        close_all_in_one_accessibility_widget: "Close All in One Accessibility Widget",
        reload_page: "Reload page",
        refresh_page: "Refresh page",
        reload: "Reload",
        refresh: "Refresh",
        tab: "Tab",
        next: "Next",
        tab_back: "Tab back",
        previous: "Previous",
        back: "Back",
        clear_input: "Clear input",
        erase: "Erase",
        remove: "Remove",
        delete: "Delete",
        exit: "Exit",
        quit: "Quit",
        stop: "Stop",
        stop_voice_assistance: "Stop voice assistance",
        voice_recognition_is_paused: "Voice recognition is paused",
        nav: "nav",
        menu: "menu",
        header: "Header",
        listening: "Listening",
        say_help: "say 'help' to check available command",
        "Starting voice navigation": "Starting voice navigation",
        recognized_text: "Recognized text is :",
        not_recognize_command: "'Sorry, I could not recognize the command'",
        voice_navigation_paused: "Voice Navigation is paused.",
        voice_navigation_resume_command: "Press 'Ctrl + Space'  or click on microphone to continue!",
        micorphone_perm_missing: "Microphone permission is missing",
        "Sorry, I could not recognize your speech": "'Sorry, I could not recognize your speech'",
        go_downwards: "Go down",
        downwards: "Move downwards",
        upward: "Go Upwards",
        blinks_blocking: "Blinks Blocking",
        "epilepsy-short-desc": "Epilepsy profile activates features such as:",
        leaving_this_page: "Leaving this page",
        open_link_in_a_new_tab_continue: "This link will open in a new tab. Do you want to continue?",
        redirecting_to_an_external_site_continue: "You’re being redirected to an external website. Do you want to continue?",
        hide_for_this: "Hide for this",
        hide_for_hours: "Hide for 24 hours",
        hide_for_week: "Hide for one week",
        hide_for_month: "Hide for one month",
        epilepsy: "Epilepsy",
        parkinson_disease: "Parkinson Disease",
        slow_cursor: "Slow Cursor",
        choose_to_hide_widget: "Choose how long to hide this widget:",
        "parkinson_disease-short-desc": "Parkinson Disease profile activates features such as:",
        talk_type_inactive_msg: "No input or textarea element was found on this page. Talk and Type works only with input or textarea fields.",
        navigation_interaction: "Navigate Interaction",
        content_adjustments: "Content Adjustments",
        color_contrast_adjustments: "Color Contrast Adjustments",
        orientation_adjustments: "Orientation Adjustments",
        move_widget: "Move Widget",
        Warning: "Warning",
        Follwing_feature_start: "Following features are already started. Please close them first to enable hide feature",
        blue_light_filter: "Blue Light Filter",
        close_feature: "Following features are already started. Please close them first to enable hide feature",
        speak_to_navigate: "Speak to Navigate",
        speak_navigation_paused: "Speak to Navigation is paused.",
        focus_indicator: "Focus Indicator",
        unhideWarning: "Note: Confirming this will disable the hiding feature. Please confirm to proceed.",
        unhideConfirmation: "Would you like to Unhide the Accessibility Widget?",
        sign_language_font: "Sign Language font",
        subtitle_on_video: "Subtitle on video",
        play_audio: "Play Audio",
        focus_locator: "Focus Locator",
        video_summaries: "Video Summaries",
        Focus_locator_description: "Lets you select any link using numbered overlays. Press the number of the area containing your target until the link is clicked. Press Backspace to go back one level, or press Esc to close this feature.",
        some_feature_started: "Some of the features are already started. Please close them first to enable button",
        deaf: "Deaf",
        asl: "ASL",
        language_assistant: "Sign Language Assistant",
        visual_sign_support: "Visual sign support for important on-screen content",
        "deaf-short-desc": "Deaf profile activates features such as:",
        "voice-search": "Voice Search",
        web_accessibility_solution: "Web Accessibility Solution by Skynet Technologies",
        toggle: "Toggle",
        description: "Description",
        all_in_one_accessibility_page: "All in One Accessibility page",
        speak_to_nav_instruction: "Speak to Navigate is now active. Every link on this page has a number. Say 'click' followed by the number to go there. For example, say 'click 21.'",
        "Starting speak to navigation": "Starting speak to navigation",
        commands: {
            ENTER: {
                text: "Enter",
                variations: ["Click", "Enter"],
                description: ""
            },
            ZOOM_IN: {
                text: "Zoom in",
                variations: ["zoom in", "increase size"],
                description: "Zoom in on page"
            },
            ZOOM_OUT: {
                text: "Zoom out",
                variations: ["zoom out", "decrease size"],
                description: "Zoom out on page"
            },
            "TYPE_<PHRASE>": {
                text: "Type <phrase>",
                variations: ["type <phrase>"],
                description: "Types desired phrase into a text field"
            },
            MOVE_TO_BEGINNING: {
                text: "Move to beginning",
                variations: ["move to beginning", "move  to start", "move cursor start", "scroll to start"],
                description: "Moves cursor to beginning of text"
            },
            MOVE_TO_END: {
                text: "Move to end",
                variations: ["move  to end", "move cursor end", "scroll to end"],
                description: "Moves cursor to end of text"
            },
            SELECT_ALL: {
                text: "Select All",
                variations: ["Select All", "Select text", "Select all content"],
                description: "Selects all the text"
            },
            SELECT_TEXT: {
                text: "Select all",
                variations: ["select all", "select text", "select all content"],
                description: "Selects all the text"
            },
            EXTEND_SELECTION_TO_BEGINNING: {
                text: "Extend selection to beginning",
                variations: ["extend selection to beginning"],
                description: "'Extend Selection to Beginning' expands the selected text or area to include content from the start of the current selection to the beginning."
            },
            EXTEND_SELECTION_TO_END: {
                text: "Extend selection to end",
                variations: ["extend selection to end"],
                description: ""
            },
            DESELECT_THAT: {
                text: "Deselect that",
                variations: ["deselect that", "deselect text", "deselect all content"],
                description: "'Deselect That' removes the current selection or unselects the highlighted text."
            },
            CUT_THAT: {
                text: "Cut that",
                variations: ["cut that", "cut content", "cut text"],
                description: "Cut current selection"
            },
            COPY_THAT: {
                text: "Copy that",
                variations: ["copy that", "copy content", "copy text"],
                description: "Copy current selection"
            },
            PASTE_THAT: {
                text: "paste that",
                variations: ["paste that", "paste content", "paste text", "stick that"],
                description: "Paste from clipboard"
            },
            LOWERCASE_THAT: {
                text: "Lowercase that",
                variations: ["lowercase that", "lowercase content", "lowercase text"],
                description: "Lowercase current selection"
            },
            UPPERCASE_THAT: {
                text: "Uppercase that",
                variations: ["uppercase that", "uppercase content", "uppercase text"],
                description: "Uppercase current selection"
            },
            CAPITALIZE_THAT: {
                text: "Capitalize that",
                variations: ["capitalize that", "capitalize content", "capitalize text"],
                description: "Capitalize current selection"
            },
            UNDO_THAT: {
                text: "Undo that",
                variations: ["undo that"],
                description: ""
            },
            REDO_THAT: {
                text: "Redo that",
                variations: ["redo that"],
                description: ""
            },
            "REPLACE_<PHRASE>_WITH_<PHRASE>": {
                text: "Replace <phrase> with <phrase>",
                variations: ["replace <phrase> with <phrase>"],
                description: "It swaps the first specified phrase with the second one in the current text or area."
            },
            DELETE_ALL: {
                text: "Delete all",
                variations: ["delete all", "delete everything"],
                description: ""
            },
            DELETE_SELECTED: {
                text: "Delete selected",
                variations: ["delete selected"],
                description: "Removes the currently highlighted or selected text."
            },
            BOLD_THAT: {
                text: "Bold that",
                variations: ["bold that"],
                description: ""
            },
            "BOLD__<PHRASE>": {
                text: "Bold <phrase>",
                variations: ["bold <phrase>"],
                description: ""
            },
            "CAPITALIZE_<PHRASE>": {
                text: "Capitalize <phrase>",
                variations: ["Capitalize <phrase>"],
                description: ""
            },
            "LOWERCASE_<PHRASE>": {
                text: "Lowercase <phrase>",
                variations: ["lowercase <phrase>"],
                description: ""
            },
            "UPPERCASE_<PHRASE>": {
                text: "uppercase <phrase>",
                variations: ["uppercase <phrase>"],
                description: ""
            },
            ITALICIZE_THAT: {
                text: "Italicize that",
                variations: ["Italicize that"],
                description: ""
            },
            "ITALICIZE_<PHRASE>": {
                text: "Italicize <phrase>",
                variations: ["Italicize <phrase>"],
                description: ""
            },
            UNDERLINE_THAT: {
                text: "Underline that",
                variations: ["underline that"],
                description: ""
            },
            "UNDERLINE_<PHRASE>": {
                text: "Underline <phrase>",
                variations: ["underline <phrase>"],
                description: ""
            },
            CORRECT_THAT: {
                text: "Correct that",
                variations: ["correct that"],
                description: ""
            },
            "CORRECT_<PHRASE>": {
                text: "Correct <phrase>",
                variations: ["correct <phrase>"],
                description: ""
            },
            CONTENT_SCALLING: {
                text: "Content Scalling",
                variations: ["content scalling"],
                description: ""
            },
            FONT_SIZE: {
                text: "Font size",
                variations: ["font size"],
                description: ""
            },
            LINE_HEIGHT: {
                text: "Line Height",
                variations: ["line height"],
                description: ""
            },
            LETTER_SPACING: {
                text: "Letter Spacing",
                variations: ["letter spacing"],
                description: ""
            },
            BOTTOM_RING: {
                text: "Bottom Right",
                variations: ["bottom right"],
                description: ""
            },
            BOTTOM_CENTER: {
                text: "Bottom center",
                variations: ["bottom center"],
                description: ""
            },
            BOTTOM_LEFT: {
                text: "Bottom left",
                variations: ["bottom left"],
                description: ""
            },
            MIDDLE_LEFT: {
                text: "Middle left",
                variations: ["middle left"],
                description: ""
            },
            TOP_RIGHT: {
                text: "Top Right",
                variations: ["top right"],
                description: ""
            },
            TOP_CENTER: {
                text: "Top center",
                variations: ["top center"],
                description: ""
            },
            TOP_LEFT: {
                text: "Top left",
                variations: ["top left"],
                description: ""
            },
            MIDDLE_RIGHT: {
                text: "Middle right",
                variations: ["middle right"],
                description: ""
            },
            COLOR_BLINDNESS: {
                text: "Color Blindness",
                variations: ["color blindness"],
                description: ""
            },
            VIRTUAL_KEYBOARD: {
                text: "Virtual Keyboard",
                variations: ["virtual keyboard"],
                description: ""
            },
            READING_MASK: {
                text: "Reading Mask",
                variations: ["reading mask"],
                description: ""
            },
            INVVERT_COLORS: {
                text: "Invert Colors",
                variations: ["invert colors"],
                description: ""
            },
            LIGHT_CONTRAST: {
                text: "Light Contrast",
                variations: ["light contrast"],
                description: ""
            },
            DARK_CONTRAST: {
                text: "Dark Contrast",
                variations: ["dark contrast"],
                description: ""
            },
            HIGH_CONTRAST: {
                text: "High Contrast",
                variations: ["high contrast"],
                description: ""
            },
            SMART_CONTRAST: {
                text: "Smart Contrast",
                variations: ["smart contrast"],
                description: ""
            },
            DYSLEXIA_FONTS: {
                text: "Dyslexia Fonts",
                variations: ["dyslexia fonts"],
                description: ""
            },
            READABLE_FONTS: {
                text: "Readable Font",
                variations: ["readable font"],
                description: ""
            },
            STOP_ANIMATION: {
                text: "Stop Animations",
                variations: ["stop animations"],
                description: ""
            },
            READING_GUIDE: {
                text: "Reading Guide",
                variations: ["reading guide"],
                description: ""
            },
            ALIGH_LEFT: {
                text: "Align Left",
                variations: ["align left"],
                description: ""
            },
            ALIGN_RIGHT: {
                text: "Align Right",
                variations: ["align right"],
                description: ""
            },
            ALIGN_CENTER: {
                text: "Align Center",
                variations: ["align center"],
                description: ""
            },
            BIG_BLACK_CURSOR: {
                text: "Big Black Cursor",
                variations: ["big black cursor"],
                description: ""
            },
            BIG_WHITE_CURSOR: {
                text: "Big White Cursor",
                variations: ["big white cursor"],
                description: ""
            },
            HIDE_IMAGES: {
                text: "Hide Images",
                variations: ["hide images"],
                description: ""
            },
            TEXT_MAGNIFIER: {
                text: "Text Magnifier",
                variations: ["text magnifier"],
                description: ""
            },
            MONOCROM: {
                text: "Monochrome",
                variations: ["monochrome"],
                description: ""
            },
            HIGH_SATURATION: {
                text: "High Saturation",
                variations: ["high saturation"],
                description: ""
            },
            LOW_SATURATION: {
                text: "Low Saturation",
                variations: ["low Saturation"],
                description: ""
            },
            HIGHLIGHT_TITLES: {
                text: "Highlight Titles",
                variations: ["highlight titles"],
                description: ""
            },
            HIGHLIGHT_HOVER: {
                text: "Highlight Hover",
                variations: ["highlight hover"],
                description: ""
            },
            HIGHLIGHT_FOCUS: {
                text: "Highlight focus",
                variations: ["highlight focus"],
                description: ""
            },
            MOVE_TO_BEGINNING_OF_WORD: {
                text: "Move To Beginning Of Word",
                variations: ["move to beginning of word"],
                description: ""
            },
            MOVE_TO_END_OF_WORD: {
                text: "Move To End Of Word",
                variations: ["move to end of word"],
                description: ""
            },
            MOVE_TO_BEGINNING_OF_SENTENCE: {
                text: "Move To Beginning Of Sentence",
                variations: ["move to beginning of sentence"],
                description: ""
            },
            MOVE_TO_END_OF_SENTENCE: {
                text: "Move To End Of Sentence",
                variations: ["move to end of sentence"],
                description: ""
            },
            READ_ALL_HEADERS: {
                text: "Read all headers",
                variations: ["read headers", "list heading", "show heading", "read all the headers", "go to header", "list header", "show header"],
                description: "'List Headings' provides a quick overview of all the headings on the webpage, helping users navigate through sections."
            },
            READ_ALL_LINKS: {
                text: "Read all links",
                variations: ["read links", "list link", "show links", "read all the links"],
                description: "'List Links' displays all the hyperlinks on a webpage, allowing users to quickly access various destinations."
            },
            READ_LEVEL_HEADERS: {
                text: "Read all h",
                variations: ["read h", "read all the h", "list h", "show h"],
                levels: ["one", "two", "three", "four", "five", "six"],
                description: ""
            },
            READ_MAIN: {
                text: "Read main content",
                variations: ["start reading page", "start screen reader", "open screen reader"],
                description: ""
            },
            STOP_READ_PAGE: {
                text: "Stop read page",
                variations: ["stop reading page", "stop screen reader", "close screen reader"],
                description: ""
            },
            SEARCH_MAIN: {
                text: "Search main content",
                variations: ["search the main", "search the main content", "find main content", "find the main", "find the main content"],
                description: ""
            },
            READ_AGAIN: {
                text: "Read element again",
                variations: ["read the current element again", "read again", "read content", "read paragraph", "read current content", "read current"],
                description: ""
            },
            READ_PREVIOUS: {
                text: "Read previous element",
                variations: ["read previous", "read previous content", "read previous paragraph", "read previous section"],
                description: ""
            },
            READ_NEXT: {
                text: "Read next element",
                variations: ["read next", "read next content", "read next paragraph", "read next section"],
                description: ""
            },
            READ_PAGE_TITLE: {
                text: "Read page title",
                variations: ["read title", "read the title of the page", "read document title"],
                description: ""
            },
            READ_LINKS_IN_ELEMENT: {
                text: "Read links inside",
                variations: ["read links contained", "read links contained in", "read all links inside", "read all links contained", "read all links contained in"],
                description: ""
            },
            GO_TO_PREVIOUS_PAGE: {
                text: "Previous page",
                variations: ["go to previous page", "go to last page", "go back", "redirect to previous page", "redirect to previous", "redirect back"],
                description: "Go back to the previous page"
            },
            GO_TO_NEXT_PAGE: {
                text: "Next page",
                variations: ["go to next page"],
                description: ""
            },
            READ_PAGE_SUMMARY: {
                text: "Read page summary",
                variations: ["summarize page", "summarize the page"],
                description: ""
            },
            GO_TO_HOMEPAGE: {
                text: "Homepage",
                variations: ["go to homepage", "go to home", "go to indexpage", "redirect to homepage", "redirect to home", "redirect to indexpage"],
                description: "Return to Home page from any page"
            },
            GO_TO_LINK: {
                text: "Go to link",
                variations: ["follow link", "click", "enter"],
                description: "'Enter' activates or selects the currently focused element, such as a button, link, or form field."
            },
            LIST_LANDMARK: {
                text: "List landmark",
                variations: ["list landmark", "show landmark", "go to landmark"],
                description: "'List Landmarks' provides a summary of the main structural regions (landmarks) on a webpage, such as navigation, main content, and footer."
            },
            GO_TO_TOP: {
                text: "Go to top",
                variations: ["go to top", "scroll to top", "go top", "scroll top"],
                description: "'Go to Top' quickly navigates to the very top of the webpage."
            },
            GO_TO_BOTTOM: {
                text: "Go to bottom",
                variations: ["go to bottom", "scroll to bottom", "go bottom", "scroll bottom"],
                description: "'Go to Bottom' quickly navigates to the very bottom of the webpage."
            },
            MOVE_UP: {
                text: "Move up",
                variations: ["move up", "up", "move cursor up", "scroll up", "go up", "page up"],
                description: "'Move Up' shifts the cursor to the upward."
            },
            MOVE_DOWN: {
                text: "Move down",
                variations: ["move down", "down", "move cursor down", "scroll down", "go down", "page down"],
                description: "'Move Down' shifts the cursor downward."
            },
            MOVE_LEFT: {
                text: "Move left",
                variations: ["move left", "left", "move cursor left", "scroll left"],
                description: "'Move Left' shifts the cursor to the left."
            },
            MOVE_RIGHT: {
                text: "Move right",
                variations: ["move right", "right", "move cursor right", "scroll right"],
                description: "'Move Right' shifts the cursor to the right."
            },
            SKIP_TO_CONTENT: {
                text: "Skip to content",
                variations: ["Skip to Content", "Navigate to Content", "Go to Content", "Main Content"],
                description: "'Skip to Content' allows users to bypass repetitive navigation links and jump directly to the main content of a webpage."
            },
            SKIP_TO_NAVIGATION: {
                text: "Skip to navigation",
                variations: ["skip to navigation", "go to navigation", "main navigation"],
                description: "'Go to Navigation' enables users to quickly access the main navigation menu of a webpage, bypassing other content."
            },
            SKIP_TO_FOOTER: {
                text: "Skip to footer",
                variations: ["skip to footer", "go to footer", "navigate to footer", "footer"],
                description: "'Skip to Footer' allows users to jump directly to the footer section of a webpage, bypassing the main content."
            },
            HELP: {
                text: "Help",
                variations: ["help", "help me", "please help", "show commands", "available commands", "show available commands", "list commands"],
                description: ""
            },
            HIDE_HELP: {
                text: "Hide help",
                variations: ["hide help", "hide command"],
                description: ""
            },
            SHOW_WIDGET: {
                text: "Show widget",
                variations: ["show widget", "open widget", "show all in one accessibility widget ", "open all in one accessibility widget"],
                description: "'Show Widget' reveals or brings focus to All in One Accessibility widget or tool on the webpage."
            },
            CLOSE_WIDGET: {
                text: "Close widget",
                variations: ["close widget", "hide widget", "close all in one accessibility widget ", "hide all in one accessibility widget"],
                description: "'Close Widget' hides or removes the All in One Accessibility from view."
            },
            RELOAD_PAGE: {
                text: "Reload page",
                variations: ["reload page", "refresh page", "reload", "refresh"],
                description: "'Reload Page' refreshes the current webpage, reloading its content from the server."
            },
            TAB_NEXT: {
                text: "Tab next",
                variations: ["tab", "next", "Next field", "Focus next"],
                description: "'Tab' moves focus to the next interactive element on the webpage, such as a link, button, or form field."
            },
            TAB_BACK: {
                text: "Tab back",
                variations: ["tab back", "previous", "back", "Previous field", "Focus previous"],
                description: "'Tab Back' moves focus to the previous interactive element on the webpage."
            },
            CLEAR_INPUT: {
                text: "Clear input",
                variations: ["clear input", "erase", "remove", "delete"],
                description: "'Clear Input' removes or resets the text or data in the currently focused input field."
            },
            EXIST_COMMAND: {
                text: "Exit command",
                variations: ["exit", "quit", "stop", "stop voice assistance", "voice recognition is paused"],
                description: "'Exit' will disable the voice command mode."
            },
            START: {
                text: "Start",
                variations: ["start listening"],
                description: ""
            },
            SHOW_NUMBER: {
                text: "Show number",
                variations: ["show number", "display number", "enabled number to navigation"],
                description: "display number to every a tag for navigation"
            },
            REMOVE_NUMBER: {
                text: "Remove number",
                variations: ["hide number", "remove number", "disable number to navigation"],
                description: "Hide number to every a tag for navigation"
            },
            HIGH_CONTRAST_ON: {
                text: "High contrast on",
                variations: ["high contrast on", "enable high contrast", "turn on high contrast", "activate high contrast", "contrast mode on"],
                description: "Enable high contrast mode for better visibility"
            },
            HIGH_CONTRAST_OFF: {
                text: "High contrast off",
                variations: ["high contrast off", "disable high contrast", "turn off high contrast", "deactivate high contrast", "contrast mode off"],
                description: "Disable high contrast mode"
            },
            INCREASE_TEXT_SIZE: {
                text: "Increase text size",
                variations: ["increase text size", "zoom in text", "make text bigger", "enlarge text", "increase font size", "bigger text"],
                description: "Increase the size of text on the page"
            },
            DECREASE_TEXT_SIZE: {
                text: "Decrease text size",
                variations: ["decrease text size", "zoom out text", "make text smaller", "reduce text size", "decrease font size", "smaller text"],
                description: "Decrease the size of text on the page"
            },
            DARK_MODE_ON: {
                text: "Dark mode on",
                variations: ["dark mode on", "enable dark mode", "turn on dark mode", "activate dark theme", "switch to dark mode"],
                description: "Enable dark mode for the interface"
            },
            DARK_MODE_OFF: {
                text: "Dark mode off",
                variations: ["dark mode off", "disable dark mode", "turn off dark mode", "light mode on", "switch to light mode"],
                description: "Disable dark mode and switch to light mode"
            },
            HIGHLIGHT_LINKS: {
                text: "Highlight links",
                variations: ["highlight links", "show highlighted links", "enable link highlight", "mark links", "underline links"],
                description: "Highlight all clickable links on the page"
            },
            REMOVE_HIGHLIGHT_LINKS: {
                text: "Remove highlight links",
                variations: ["remove highlight links", "disable link highlight", "unmark links", "hide highlighted links", "normal links"],
                description: "Remove highlighting from links"
            },
            ENABLE_DYSLEXIA_FONT: {
                text: "Enable dyslexia font",
                variations: ["enable dyslexia font", "turn on dyslexia font", "use dyslexic font", "activate dyslexia mode", "apply dyslexia font"],
                description: "Enable dyslexia-friendly font for better readability"
            },
            DISABLE_DYSLEXIA_FONT: {
                text: "Disable dyslexia font",
                variations: ["disable dyslexia font", "turn off dyslexia font", "remove dyslexia font", "normal font", "default font"],
                description: "Disable dyslexia-friendly font"
            },
            RESET_SETTINGS: {
                text: "Reset settings",
                variations: ["reset settings", "reset all settings", "restore settings", "restore default settings", "default settings", "reset accessibility settings", "clear all settings"],
                description: "Reset all settings to their default values"
            },
            FILL_FORM: {
                text: "Fill form",
                variations: ["fill form", "start form", "begin form", "open form", "start filling form", "fill the form"],
                description: "Start form interaction mode and focus on the first input field"
            },
            "ENTER_NAME_<PHRASE>": {
                text: "Enter name <phrase>",
                variations: ["enter name <phrase>", "type name <phrase>", "fill name <phrase>", "input name <phrase>", "my name is <phrase>", "set name as <phrase>"],
                description: "Fill the name input field with provided value"
            },
            "SELECT_OPTION_<PHRASE>": {
                text: "Select option <phrase>",
                variations: ["select <phrase>", "choose option <phrase>", "pick option <phrase>", "select option <phrase>", "choose <phrase>", "pick <phrase>"],
                description: "Select a value from dropdown, radio button, or checkbox"
            },
            SUBMIT_FORM: {
                text: "Submit form",
                variations: ["submit form", "submit", "send form", "complete form", "finish form", "done"],
                description: "Submit the current form"
            },
            CLOSE_POPUP: {
                text: "Close popup",
                variations: ["popup close", "popup dismiss", "modal close", "modal dismiss", "dialog close", "dialog dismiss", "close this popup", "cancel popup"],
                description: "Close or dismiss the currently open popup, modal, or dialog"
            },
            OPEN_SEARCH: {
                text: "Open search",
                variations: ["search open", "start search", "search bar open", "search box open", "focus search", "go to search", "activate search", "search something"],
                description: "Open or focus the search input field and allow user to search"
            },
            "SEARCH_SITE_<PHRASE>": {
                text: "Search for <PHRASE>",
                variations: ["search for <PHRASE>", "search <PHRASE>", "find <PHRASE>", "look for <PHRASE>", "search site for <PHRASE>", "find keyword <PHRASE>"],
                description: "Perform a site search using the provided keyword"
            },
            OPEN_CART: {
                text: "Open cart",
                variations: ["open cart", "view cart", "go to cart", "show cart", "shopping cart", "cart"],
                description: "Open and display the shopping cart"
            },
            LOGIN: {
                text: "Login",
                variations: ["login", "log in", "sign in", "open login", "user login"],
                description: "Open the login page or start user authentication"
            },
            LOGOUT: {
                text: "Logout",
                variations: ["logout", "log out", "sign out", "exit account", "logout account"],
                description: "Log out the current user account"
            }
        },
        elements: {
            MAIN: {
                selector: "main",
                variations: ["main"]
            },
            NAV: {
                selector: "nav",
                variations: ["nav", "navigation", "menu"]
            },
            HEADER: {
                selector: "header",
                variations: ["header"]
            },
            FOOTER: {
                selector: "footer",
                variations: ["footer"]
            }
        }
    };
async function ge() {
    if (! function() {
            try {
                if (document.permissionsPolicy ? .allowsFeature) return document.permissionsPolicy.allowsFeature("microphone");
                if (document.featurePolicy ? .allowsFeature) return document.featurePolicy.allowsFeature("microphone")
            } catch (e) {}
            return !0
        }()) return !1;
    const e = await async function() {
        const e = {
            hasAudioInput: !1,
            deviceCount: 0,
            devices: [],
            permissionState: "unsupported"
        };
        if (navigator.mediaDevices ? .enumerateDevices) try {
            const t = (await navigator.mediaDevices.enumerateDevices()).filter(e => "audioinput" === e.kind);
            e.devices = t, e.deviceCount = t.length, e.hasAudioInput = t.length > 0
        } catch (t) {}
        if (navigator.permissions ? .query) try {
            const t = await navigator.permissions.query({
                name: "microphone"
            });
            e.permissionState = t.state
        } catch {
            e.permissionState = "unsupported"
        }
        return e
    }();
    return !!e.hasAudioInput && "denied" !== e.permissionState
}
o.use(T).init({
    backend: {
        backends: [ce, Q],
        backendOptions: [{
            expirationTime: 6048e5
        }, {
            loadPath: "https://www.skynettechnologies.com/accessibility/lang-node/{{lng}}.json"
        }],
        cacheHitMode: "none"
    },
    partialBundledLanguages: !0,
    resources: {
        en: {
            translation: he
        }
    },
    fallbackLng: "en",
    lng: n.active_language ? ? "en-US",
    debug: !1,
    initImmediate: !1,
    supportedLngs: ue.map(e => {
        if (e.includes("-")) {
            const [t, i] = e.split("-");
            return `${t}-${i.toUpperCase()}`
        }
        return e
    }),
    interpolation: {
        escapeValue: !1
    }
});
const _e = async () => {
        const e = document.querySelectorAll("*[data-i18n-labelkey]");
        e && e.forEach(e => {
            const t = e.getAttribute("data-i18n-labelkey").toString();
            if ("select_language" === t) return !0;
            if (t && e.setAttribute("aria-label", o.t(t)), "reset_preferences" === t) return !0;
            const i = e.getAttribute("data-accessibility-tooltip");
            t && i && e.setAttribute("data-accessibility-tooltip", o.t(t)), !t || "INPUT" != e.tagName && "INPUT" != e.tagName && "TEXTAREA" != e.tagName && "textbox" != e.role && "textarea" != e.role || e.setAttribute("placeholder", o.t(t))
        })
    },
    fe = async () => {
        const e = document.querySelector(".aioa-widget-wrapper"),
            t = document.querySelectorAll("*[data-i18n-key]");
        t && t.forEach(t => {
            const i = t.getAttribute("data-i18n-key");
            i && e && e.contains(t) && ("need_help" == i ? t.innerHTML = `${o.t(i)} <span class="sr-only" id="aioa-new-tab-description" style="display: none;"> (opens in a new window)</span>` : t.innerText = o.t(i))
        }), _()
    },
    me = async () => {
        const e = document.querySelectorAll("*[data-i18n-placeholder]");
        e && e.forEach(e => {
            const t = e.getAttribute("data-i18n-placeholder");
            t && e.setAttribute("placeholder", o.t(t))
        })
    },
    be = async () => {
        const e = document.querySelectorAll("*[data-i18n-alt]"),
            t = document.querySelectorAll("*[data-i18n-alt-aioa]");
        e && e.forEach(e => {
            const t = e.getAttribute("data-i18n-alt");
            t && e.setAttribute("alt", o.t(t))
        }), t && t.forEach(e => {
            const t = e.getAttribute("data-i18n-alt-aioa");
            t && e.setAttribute("aria-label", `${o.t(t)} (opens in a new window)`)
        })
    },
    ve = async () => {
        document.querySelectorAll("*[data-i18n-toggle-desc-slug]").forEach(e => {
            const t = e.getAttribute("data-i18n-toggle-desc-slug");
            t && e.setAttribute("aria-label", `${o.t("toggle")} ${o.t(t)} ${o.t("description")}`)
        })
    },
    ye = async () => {
        const e = document.querySelectorAll("#aioa_accessibility_settings,#accessibility_skiplinks,#accessibility_hide_interface_modal,.aioa-notification-group, #accessibility_language_modal,#accessibility_filter_content_modal, #accessibility_statement_modal, #accessibility_summarise_modal, #accessibility_hide_interface_error_modal, #accessibility_external_link_new_tab_handler_modal, #aioa-trigger-button, #accessibility_dictionary_modal");
        e && e.forEach(e => {
            e.setAttribute("lang", o.language), e.setAttribute("dir", "sd" === o.language ? "rtl" : o.dir())
        })
    },
    ke = async () => {
        const e = document.querySelector("[data-accessibility='libras']");
        e && (o.language.includes("pt") ? e.style.display = "flex" : e.style.display = "none")
    };

function we(e, t) {
    const i = o.t;
    let n = "";
    const a = f.find(e => e.slug === t);
    a && (n = `\n        <span class="selected-value" data-i18n-key="${a.slug}">\n            <span class="accessibility-color-selection" style="background-color: ${a.color} !important;"></span>\n            <span data-i18n-key="${a.slug}" data-i18n-labelkey="${i(a.slug)}">${i(a.slug)}</span>\n        </span>`);
    const r = document.querySelector(`.select-button[aria-controls="${e}-select"]`),
        s = r ? .querySelector(".selected-value");
    s && s.parentElement && (s.innerHTML = n)
}
let xe = !0;
const Se = async () => {
    const t = document.querySelector("#aioa_language_button #accessibility-language-slug"),
        i = document.querySelector("#aioa_language_button .accessibility-language-text"),
        _ = document.querySelector("#aioa_language_button");
    if (i) {
        let u = "",
            p = "";
        null == o.language && (o.language = "en");
        let h = n.features.languages.filter(e => e.slug.toLowerCase() === o.language.toLowerCase());
        h.length || (h = n.features.languages.filter(e => e.slug === o.language.slice(0, 2))), h && h.length && (u = h[0].slug, p = h[0].name, u.indexOf("-") > -1 && (u = u.slice(-2))), t && u && (t.innerText = u), i && p && (i.innerText = p), _ && p && _.setAttribute("aria-label", `${p} ${o.t("select_language")}`);
        const g = document.querySelector('div[data-accessibility="voice_navigation"] button');
        if (null != g) {
            const t = g.closest(".accessibility-control-wrapper");
            if (h.length) {
                const e = h[0].name;
                i.innerText = e
            }
            const r = (e, t) => {
                for (var i = t.length, o = 0; o < i; o++)
                    if (t[o] == e) return !0;
                return !1
            };
            let s = ["en", "en-US", "en-us", "en-gb", "en-GB", "en-au", "en-ZA", "en-za", "en-ca", "es", "es-mx", "de", "ar", "sk", "hi", "pt", "pt-br", "ja", "it", "fr", "gu", "ml", "kn", "ur", "ta", "te", "mr", "bn", "pl", "ru", "he", "hu", "sk", "fi", "tr", "el", "bg", "ca", "cs", "da", "id", "ko", "lt", "ms", "ro", "sl", "sv", "th", "uk", "vi", "et", "lv", "sr", "hr", "eu", "fil", "gl", "nb", "pa", "is"];
            const l = new a(window.navigator.userAgent).getBrowserInfo();
            if (r(o.language, s) && "Mozilla Firefox" !== l.name && "iPhone" != navigator.platform && await ge() ? t.style.display = "block" : (t.style.display = "none", "true" === g.getAttribute("aria-pressed") && g.click()), n.voice_navigation) {
                const {
                    default: t
                } = await e(() =>
                    import ("./webReader.js"), []);
                t && "function" == typeof t.changeLanguages && o && "function" == typeof o.changeLanguage && (t.changeLanguages(o.language), t.updateVoiceByLanguage(o.language))
            }
        }
        const v = document.querySelector('div[data-accessibility="speak_to_navigate"] button');
        if (null != v) {
            const e = v.closest(".accessibility-control-wrapper");
            if (h.length) {
                const e = h[0].name;
                i.innerText = e
            }
            const t = (e, t) => {
                for (var i = t.length, o = 0; o < i; o++)
                    if (t[o] == e) return !0;
                return !1
            };
            let n = ["en", "en-US", "en-us", "en-gb", "en-GB", "en-au", "en-ZA", "en-za", "en-ca", "es", "es-mx", "de", "ar", "sk", "hi", "pt", "pt-br", "ja", "it", "fr", "gu", "ml", "kn", "ur", "ta", "te", "mr", "bn", "pl", "ru", "he", "hu", "sk", "fi", "tr", "el", "bg", "ca", "cs", "da", "id", "ko", "lt", "ms", "ro", "sl", "sv", "th", "uk", "vi", "et", "lv", "sr", "hr", "eu", "fil", "gl", "nb", "pa", "is"];
            const r = new a(window.navigator.userAgent).getBrowserInfo();
            t(o.language, n) && "Mozilla Firefox" !== r.name && "iPhone" != navigator.platform && await ge() ? e.style.display = "block" : (e.style.display = "none", "true" === v.getAttribute("aria-pressed") && v.click())
        }
        const y = n.features.main_menu.reduce((e, t) => ({ ...e,
                [t.slug]: t.status
            }), {}),
            k = n.features.accessibility_profiles.reduce((e, t) => ({ ...e,
                [t.slug]: t.status
            }), {});
        if (1 === y.virtual_keyboard) {
            if (r.includes(o.language)) {
                const t = document.querySelector('div[data-accessibility="virtual_keyboard"] button'),
                    i = document.querySelector('div[data-accessibility="virtual_keyboard"]');
                if (t && i) {
                    i.style.display = "block";
                    if ("true" === t.getAttribute("aria-pressed")) {
                        (async () => {
                            const {
                                changeKeyboardLang: t
                            } = await e(() =>
                                import ("./virtualKeyboard.js"), []);
                            t()
                        })()
                    }
                }
            } else {
                const e = document.querySelector('div[data-accessibility="virtual_keyboard"]');
                e && (e.style.display = "none");
                const t = document.querySelector('div[data-accessibility="virtual_keyboard"] button');
                t && "true" === t.getAttribute("aria-pressed") && t.click()
            }
        }
        if (1 === y.dictionary) {
            var f = !0;
            const e = document.querySelector('div[data-accessibility="dictionary"]');
            e && (f = s.includes(o.language), e.style.display = f ? "block" : "none")
        }
        if (1 === y.screen_reader) {
            const e = document.querySelector('div[data-accessibility="screen_reader"]');
            if (e)
                if (!l.includes(o.language) && await c()) e.style.display = "block";
                else {
                    e.style.display = "none";
                    const t = document.querySelector('div[data-accessibility="screen_reader"] button');
                    t && "true" === t.getAttribute("aria-pressed") && t.click()
                }
        }
        if (1 === y.talk_n_type) {
            const e = document.querySelector('div[data-accessibility="talk_n_type"]');
            if (e)
                if (!l.includes(o.language) && await ge()) e.style.display = "block";
                else {
                    e.style.display = "none";
                    const t = document.querySelector('div[data-accessibility="talk_n_type"] button');
                    t && "true" === t.getAttribute("aria-pressed") && t.click()
                }
        }
        if (1 === y.asl) {
            const e = document.querySelector('div[data-accessibility="asl"]');
            if (e)
                if (["en", "en-us", "en-ca", "en-gb", "en-au", "en-ZA", "en-za"].includes(o.language)) e.style.display = "block";
                else {
                    e.style.display = "none";
                    const t = document.querySelector('div[data-accessibility="asl"] button');
                    t && "true" === t.getAttribute("aria-pressed") && t.click()
                }
        }
        if (1 === y.sign_language_font) {
            const e = document.querySelector('div[data-accessibility="sign_language_font"]');
            if (e)
                if (pe.includes(o.language)) {
                    e.style.display = "none";
                    const t = document.querySelector('div[data-accessibility="sign_language_font"] button');
                    t && "true" === t.getAttribute("aria-pressed") && t.click()
                } else e.style.display = "block"
        }
        if (1 === y.summarize_page) {
            var m = "";
            const e = document.querySelector('div[data-accessibility="summarize_page"]');
            e && (m = d[o.language], e.style.display = m ? "block" : "none")
        }
        if (1 === k.blind) {
            const e = document.querySelector('div[data-accessibility="blind"]');
            if (e)
                if (l.includes(o.language)) {
                    e.style.display = "none";
                    const t = document.querySelector('div[data-accessibility="blind"] button');
                    t && "true" === t.getAttribute("aria-pressed") && t.click()
                } else e.style.display = "block"
        }
        const w = document.getElementById("aioa-ai-content-aioa");
        if (n.custom_plans && n.custom_plans["ai-assistance"] && w && w.shadowRoot) {
            var b = !0;
            const e = document.querySelector("#aioa-ai-assistant");
            e && (b = ["en", "en-us", "en-gb", "en-au", "en-ca", "hi", "or", "as", "bn", "gu", "kn", "ml", "mr", "pa", "ta", "te", "ur"].includes(o.language), e.style.display = b ? "block" : "none")
        }
    }
    const v = u();
    if (v && v.font_size && v && p({ ...h(v),
            active_language: o.language
        }), xe && (xe = !1), v ? .livetrasn) {
        const {
            default: t
        } = await e(() =>
            import ("./checkLiveTranslation.js"), []);
        t()
    }
    const y = [ye, fe, ke, _e, me, be, ve];
    for (; y.length > 0;) {
        const e = y.shift();
        e && e(), await de()
    }
    g(), (async () => {
        const e = u();
        null !== e.background_color && we("background_color", e.background_color), null !== e.title_color && we("title_color", e.title_color), null !== e.text_color && we("text_color", e.text_color)
    })()
};
o.on("languageChanged", () => {
    Se()
});
let Te = document.querySelector("html");
null == Te.getAttribute("lang") && Te.setAttribute("lang", "en");
export {
    ue as s, Se as u, de as y
};