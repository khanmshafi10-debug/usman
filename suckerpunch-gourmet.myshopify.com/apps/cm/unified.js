"use strict";
(() => {
    var Wn = Object.create;
    var Wt = Object.defineProperty;
    var Yn = Object.getOwnPropertyDescriptor;
    var Qn = Object.getOwnPropertyNames;
    var Xn = Object.getPrototypeOf,
        Zn = Object.prototype.hasOwnProperty;
    var Yt = (e, t) => () => {
        try {
            return t || e((t = {
                exports: {}
            }).exports, t), t.exports
        } catch (r) {
            throw t = 0, r
        }
    };
    var eo = (e, t, r, n) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let i of Qn(t)) !Zn.call(e, i) && i !== r && Wt(e, i, {
                get: () => t[i],
                enumerable: !(n = Yn(t, i)) || n.enumerable
            });
        return e
    };
    var ct = (e, t, r) => (r = e != null ? Wn(Xn(e)) : {}, eo(t || !e || !e.__esModule ? Wt(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e));
    var vt = Yt((ja, Ze) => {
        var wt = (function() {
            var e = String.fromCharCode,
                t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
                n = {};

            function i(a, c) {
                if (!n[a]) {
                    n[a] = {};
                    for (var d = 0; d < a.length; d++) n[a][a.charAt(d)] = d
                }
                return n[a][c]
            }
            var s = {
                compressToBase64: function(a) {
                    if (a == null) return "";
                    var c = s._compress(a, 6, function(d) {
                        return t.charAt(d)
                    });
                    switch (c.length % 4) {
                        default:
                            case 0:
                            return c;
                        case 1:
                                return c + "===";
                        case 2:
                                return c + "==";
                        case 3:
                                return c + "="
                    }
                },
                decompressFromBase64: function(a) {
                    return a == null ? "" : a == "" ? null : s._decompress(a.length, 32, function(c) {
                        return i(t, a.charAt(c))
                    })
                },
                compressToUTF16: function(a) {
                    return a == null ? "" : s._compress(a, 15, function(c) {
                        return e(c + 32)
                    }) + " "
                },
                decompressFromUTF16: function(a) {
                    return a == null ? "" : a == "" ? null : s._decompress(a.length, 16384, function(c) {
                        return a.charCodeAt(c) - 32
                    })
                },
                compressToUint8Array: function(a) {
                    for (var c = s.compress(a), d = new Uint8Array(c.length * 2), h = 0, u = c.length; h < u; h++) {
                        var E = c.charCodeAt(h);
                        d[h * 2] = E >>> 8, d[h * 2 + 1] = E % 256
                    }
                    return d
                },
                decompressFromUint8Array: function(a) {
                    if (a == null) return s.decompress(a);
                    for (var c = new Array(a.length / 2), d = 0, h = c.length; d < h; d++) c[d] = a[d * 2] * 256 + a[d * 2 + 1];
                    var u = [];
                    return c.forEach(function(E) {
                        u.push(e(E))
                    }), s.decompress(u.join(""))
                },
                compressToEncodedURIComponent: function(a) {
                    return a == null ? "" : s._compress(a, 6, function(c) {
                        return r.charAt(c)
                    })
                },
                decompressFromEncodedURIComponent: function(a) {
                    return a == null ? "" : a == "" ? null : (a = a.replace(/ /g, "+"), s._decompress(a.length, 32, function(c) {
                        return i(r, a.charAt(c))
                    }))
                },
                compress: function(a) {
                    return s._compress(a, 16, function(c) {
                        return e(c)
                    })
                },
                _compress: function(a, c, d) {
                    if (a == null) return "";
                    var h, u, E = {},
                        y = {},
                        S = "",
                        g = "",
                        m = "",
                        k = 2,
                        I = 3,
                        b = 2,
                        v = [],
                        w = 0,
                        P = 0,
                        L;
                    for (L = 0; L < a.length; L += 1)
                        if (S = a.charAt(L), Object.prototype.hasOwnProperty.call(E, S) || (E[S] = I++, y[S] = !0), g = m + S, Object.prototype.hasOwnProperty.call(E, g)) m = g;
                        else {
                            if (Object.prototype.hasOwnProperty.call(y, m)) {
                                if (m.charCodeAt(0) < 256) {
                                    for (h = 0; h < b; h++) w = w << 1, P == c - 1 ? (P = 0, v.push(d(w)), w = 0) : P++;
                                    for (u = m.charCodeAt(0), h = 0; h < 8; h++) w = w << 1 | u & 1, P == c - 1 ? (P = 0, v.push(d(w)), w = 0) : P++, u = u >> 1
                                } else {
                                    for (u = 1, h = 0; h < b; h++) w = w << 1 | u, P == c - 1 ? (P = 0, v.push(d(w)), w = 0) : P++, u = 0;
                                    for (u = m.charCodeAt(0), h = 0; h < 16; h++) w = w << 1 | u & 1, P == c - 1 ? (P = 0, v.push(d(w)), w = 0) : P++, u = u >> 1
                                }
                                k--, k == 0 && (k = Math.pow(2, b), b++), delete y[m]
                            } else
                                for (u = E[m], h = 0; h < b; h++) w = w << 1 | u & 1, P == c - 1 ? (P = 0, v.push(d(w)), w = 0) : P++, u = u >> 1;
                            k--, k == 0 && (k = Math.pow(2, b), b++), E[g] = I++, m = String(S)
                        }
                    if (m !== "") {
                        if (Object.prototype.hasOwnProperty.call(y, m)) {
                            if (m.charCodeAt(0) < 256) {
                                for (h = 0; h < b; h++) w = w << 1, P == c - 1 ? (P = 0, v.push(d(w)), w = 0) : P++;
                                for (u = m.charCodeAt(0), h = 0; h < 8; h++) w = w << 1 | u & 1, P == c - 1 ? (P = 0, v.push(d(w)), w = 0) : P++, u = u >> 1
                            } else {
                                for (u = 1, h = 0; h < b; h++) w = w << 1 | u, P == c - 1 ? (P = 0, v.push(d(w)), w = 0) : P++, u = 0;
                                for (u = m.charCodeAt(0), h = 0; h < 16; h++) w = w << 1 | u & 1, P == c - 1 ? (P = 0, v.push(d(w)), w = 0) : P++, u = u >> 1
                            }
                            k--, k == 0 && (k = Math.pow(2, b), b++), delete y[m]
                        } else
                            for (u = E[m], h = 0; h < b; h++) w = w << 1 | u & 1, P == c - 1 ? (P = 0, v.push(d(w)), w = 0) : P++, u = u >> 1;
                        k--, k == 0 && (k = Math.pow(2, b), b++)
                    }
                    for (u = 2, h = 0; h < b; h++) w = w << 1 | u & 1, P == c - 1 ? (P = 0, v.push(d(w)), w = 0) : P++, u = u >> 1;
                    for (;;)
                        if (w = w << 1, P == c - 1) {
                            v.push(d(w));
                            break
                        } else P++;
                    return v.join("")
                },
                decompress: function(a) {
                    return a == null ? "" : a == "" ? null : s._decompress(a.length, 32768, function(c) {
                        return a.charCodeAt(c)
                    })
                },
                _decompress: function(a, c, d) {
                    var h = [],
                        u, E = 4,
                        y = 4,
                        S = 3,
                        g = "",
                        m = [],
                        k, I, b, v, w, P, L, _ = {
                            val: d(0),
                            position: c,
                            index: 1
                        };
                    for (k = 0; k < 3; k += 1) h[k] = k;
                    for (b = 0, w = Math.pow(2, 2), P = 1; P != w;) v = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = c, _.val = d(_.index++)), b |= (v > 0 ? 1 : 0) * P, P <<= 1;
                    switch (u = b) {
                        case 0:
                            for (b = 0, w = Math.pow(2, 8), P = 1; P != w;) v = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = c, _.val = d(_.index++)), b |= (v > 0 ? 1 : 0) * P, P <<= 1;
                            L = e(b);
                            break;
                        case 1:
                            for (b = 0, w = Math.pow(2, 16), P = 1; P != w;) v = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = c, _.val = d(_.index++)), b |= (v > 0 ? 1 : 0) * P, P <<= 1;
                            L = e(b);
                            break;
                        case 2:
                            return ""
                    }
                    for (h[3] = L, I = L, m.push(L);;) {
                        if (_.index > a) return "";
                        for (b = 0, w = Math.pow(2, S), P = 1; P != w;) v = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = c, _.val = d(_.index++)), b |= (v > 0 ? 1 : 0) * P, P <<= 1;
                        switch (L = b) {
                            case 0:
                                for (b = 0, w = Math.pow(2, 8), P = 1; P != w;) v = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = c, _.val = d(_.index++)), b |= (v > 0 ? 1 : 0) * P, P <<= 1;
                                h[y++] = e(b), L = y - 1, E--;
                                break;
                            case 1:
                                for (b = 0, w = Math.pow(2, 16), P = 1; P != w;) v = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = c, _.val = d(_.index++)), b |= (v > 0 ? 1 : 0) * P, P <<= 1;
                                h[y++] = e(b), L = y - 1, E--;
                                break;
                            case 2:
                                return m.join("")
                        }
                        if (E == 0 && (E = Math.pow(2, S), S++), h[L]) g = h[L];
                        else if (L === y) g = I + I.charAt(0);
                        else return null;
                        m.push(g), h[y++] = I + g.charAt(0), E--, I = g, E == 0 && (E = Math.pow(2, S), S++)
                    }
                }
            };
            return s
        })();
        typeof define == "function" && define.amd ? define(function() {
            return wt
        }) : typeof Ze < "u" && Ze != null ? Ze.exports = wt : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
            return wt
        })
    });
    var In = Yt((Ft, Ln) => {
        "use strict";
        var {
            hasOwnProperty: Fe
        } = Object.prototype, ie = Ot();
        ie.configure = Ot;
        ie.stringify = ie;
        ie.default = ie;
        Ft.stringify = ie;
        Ft.configure = Ot;
        Ln.exports = ie;
        var wi = /[\u0000-\u001f\u0022\u005c\ud800-\udfff]/;

        function Q(e) {
            return e.length < 5e3 && !wi.test(e) ? `"${e}"` : JSON.stringify(e)
        }

        function Ct(e, t) {
            if (e.length > 200 || t) return e.sort(t);
            for (let r = 1; r < e.length; r++) {
                let n = e[r],
                    i = r;
                for (; i !== 0 && e[i - 1] > n;) e[i] = e[i - 1], i--;
                e[i] = n
            }
            return e
        }
        var vi = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Object.getPrototypeOf(new Int8Array)), Symbol.toStringTag).get;

        function At(e) {
            return vi.call(e) !== void 0 && e.length !== 0
        }

        function kn(e, t, r) {
            e.length < r && (r = e.length);
            let n = t === "," ? "" : " ",
                i = `"0":${n}${e[0]}`;
            for (let s = 1; s < r; s++) i += `${t}"${s}":${n}${e[s]}`;
            return i
        }

        function Si(e) {
            if (Fe.call(e, "circularValue")) {
                let t = e.circularValue;
                if (typeof t == "string") return `"${t}"`;
                if (t == null) return t;
                if (t === Error || t === TypeError) return {
                    toString() {
                        throw new TypeError("Converting circular structure to JSON")
                    }
                };
                throw new TypeError('The "circularValue" argument must be of type string or the value null or undefined')
            }
            return '"[Circular]"'
        }

        function Ei(e) {
            let t;
            if (Fe.call(e, "deterministic") && (t = e.deterministic, typeof t != "boolean" && typeof t != "function")) throw new TypeError('The "deterministic" argument must be of type boolean or comparator function');
            return t === void 0 ? !0 : t
        }

        function ki(e, t) {
            let r;
            if (Fe.call(e, t) && (r = e[t], typeof r != "boolean")) throw new TypeError(`The "${t}" argument must be of type boolean`);
            return r === void 0 ? !0 : r
        }

        function Pn(e, t) {
            let r;
            if (Fe.call(e, t)) {
                if (r = e[t], typeof r != "number") throw new TypeError(`The "${t}" argument must be of type number`);
                if (!Number.isInteger(r)) throw new TypeError(`The "${t}" argument must be an integer`);
                if (r < 1) throw new RangeError(`The "${t}" argument must be >= 1`)
            }
            return r === void 0 ? 1 / 0 : r
        }

        function oe(e) {
            return e === 1 ? "1 item" : `${e} items`
        }

        function Pi(e) {
            let t = new Set;
            for (let r of e)(typeof r == "string" || typeof r == "number") && t.add(String(r));
            return t
        }

        function Li(e) {
            if (Fe.call(e, "strict")) {
                let t = e.strict;
                if (typeof t != "boolean") throw new TypeError('The "strict" argument must be of type boolean');
                if (t) return r => {
                    let n = `Object can not safely be stringified. Received type ${typeof r}`;
                    throw typeof r != "function" && (n += ` (${r.toString()})`), new Error(n)
                }
            }
        }

        function Ot(e) {
            e = { ...e
            };
            let t = Li(e);
            t && (e.bigint === void 0 && (e.bigint = !1), "circularValue" in e || (e.circularValue = Error));
            let r = Si(e),
                n = ki(e, "bigint"),
                i = Ei(e),
                s = typeof i == "function" ? i : void 0,
                a = Pn(e, "maximumDepth"),
                c = Pn(e, "maximumBreadth");

            function d(S, g, m, k, I, b) {
                let v = g[S];
                switch (typeof v == "object" && v !== null && typeof v.toJSON == "function" && (v = v.toJSON(S)), v = k.call(g, S, v), typeof v) {
                    case "string":
                        return Q(v);
                    case "object":
                        {
                            if (v === null) return "null";
                            if (m.indexOf(v) !== -1) return r;
                            let w = "",
                                P = ",",
                                L = b;
                            if (Array.isArray(v)) {
                                if (v.length === 0) return "[]";
                                if (a < m.length + 1) return '"[Array]"';
                                m.push(v), I !== "" && (b += I, w += `
${b}`, P = `,
${b}`);
                                let p = Math.min(v.length, c),
                                    f = 0;
                                for (; f < p - 1; f++) {
                                    let R = d(String(f), v, m, k, I, b);
                                    w += R !== void 0 ? R : "null", w += P
                                }
                                let C = d(String(f), v, m, k, I, b);
                                if (w += C !== void 0 ? C : "null", v.length - 1 > c) {
                                    let R = v.length - c - 1;
                                    w += `${P}"... ${oe(R)} not stringified"`
                                }
                                return I !== "" && (w += `
${L}`), m.pop(), `[${w}]`
                            }
                            let _ = Object.keys(v),
                                T = _.length;
                            if (T === 0) return "{}";
                            if (a < m.length + 1) return '"[Object]"';
                            let A = "",
                                o = "";I !== "" && (b += I, P = `,
${b}`, A = " ");
                            let l = Math.min(T, c);i && !At(v) && (_ = Ct(_, s)),
                            m.push(v);
                            for (let p = 0; p < l; p++) {
                                let f = _[p],
                                    C = d(f, v, m, k, I, b);
                                C !== void 0 && (w += `${o}${Q(f)}:${A}${C}`, o = P)
                            }
                            if (T > c) {
                                let p = T - c;
                                w += `${o}"...":${A}"${oe(p)} not stringified"`, o = P
                            }
                            return I !== "" && o.length > 1 && (w = `
${b}${w}
${L}`),
                            m.pop(),
                            `{${w}}`
                        }
                    case "number":
                        return isFinite(v) ? String(v) : t ? t(v) : "null";
                    case "boolean":
                        return v === !0 ? "true" : "false";
                    case "undefined":
                        return;
                    case "bigint":
                        if (n) return String(v);
                    default:
                        return t ? t(v) : void 0
                }
            }

            function h(S, g, m, k, I, b) {
                switch (typeof g == "object" && g !== null && typeof g.toJSON == "function" && (g = g.toJSON(S)), typeof g) {
                    case "string":
                        return Q(g);
                    case "object":
                        {
                            if (g === null) return "null";
                            if (m.indexOf(g) !== -1) return r;
                            let v = b,
                                w = "",
                                P = ",";
                            if (Array.isArray(g)) {
                                if (g.length === 0) return "[]";
                                if (a < m.length + 1) return '"[Array]"';
                                m.push(g), I !== "" && (b += I, w += `
${b}`, P = `,
${b}`);
                                let T = Math.min(g.length, c),
                                    A = 0;
                                for (; A < T - 1; A++) {
                                    let l = h(String(A), g[A], m, k, I, b);
                                    w += l !== void 0 ? l : "null", w += P
                                }
                                let o = h(String(A), g[A], m, k, I, b);
                                if (w += o !== void 0 ? o : "null", g.length - 1 > c) {
                                    let l = g.length - c - 1;
                                    w += `${P}"... ${oe(l)} not stringified"`
                                }
                                return I !== "" && (w += `
${v}`), m.pop(), `[${w}]`
                            }
                            m.push(g);
                            let L = "";I !== "" && (b += I, P = `,
${b}`, L = " ");
                            let _ = "";
                            for (let T of k) {
                                let A = h(T, g[T], m, k, I, b);
                                A !== void 0 && (w += `${_}${Q(T)}:${L}${A}`, _ = P)
                            }
                            return I !== "" && _.length > 1 && (w = `
${b}${w}
${v}`),
                            m.pop(),
                            `{${w}}`
                        }
                    case "number":
                        return isFinite(g) ? String(g) : t ? t(g) : "null";
                    case "boolean":
                        return g === !0 ? "true" : "false";
                    case "undefined":
                        return;
                    case "bigint":
                        if (n) return String(g);
                    default:
                        return t ? t(g) : void 0
                }
            }

            function u(S, g, m, k, I) {
                switch (typeof g) {
                    case "string":
                        return Q(g);
                    case "object":
                        {
                            if (g === null) return "null";
                            if (typeof g.toJSON == "function") {
                                if (g = g.toJSON(S), typeof g != "object") return u(S, g, m, k, I);
                                if (g === null) return "null"
                            }
                            if (m.indexOf(g) !== -1) return r;
                            let b = I;
                            if (Array.isArray(g)) {
                                if (g.length === 0) return "[]";
                                if (a < m.length + 1) return '"[Array]"';
                                m.push(g), I += k;
                                let A = `
${I}`,
                                    o = `,
${I}`,
                                    l = Math.min(g.length, c),
                                    p = 0;
                                for (; p < l - 1; p++) {
                                    let C = u(String(p), g[p], m, k, I);
                                    A += C !== void 0 ? C : "null", A += o
                                }
                                let f = u(String(p), g[p], m, k, I);
                                if (A += f !== void 0 ? f : "null", g.length - 1 > c) {
                                    let C = g.length - c - 1;
                                    A += `${o}"... ${oe(C)} not stringified"`
                                }
                                return A += `
${b}`, m.pop(), `[${A}]`
                            }
                            let v = Object.keys(g),
                                w = v.length;
                            if (w === 0) return "{}";
                            if (a < m.length + 1) return '"[Object]"';I += k;
                            let P = `,
${I}`,
                                L = "",
                                _ = "",
                                T = Math.min(w, c);At(g) && (L += kn(g, P, c), v = v.slice(g.length), T -= g.length, _ = P),
                            i && (v = Ct(v, s)),
                            m.push(g);
                            for (let A = 0; A < T; A++) {
                                let o = v[A],
                                    l = u(o, g[o], m, k, I);
                                l !== void 0 && (L += `${_}${Q(o)}: ${l}`, _ = P)
                            }
                            if (w > c) {
                                let A = w - c;
                                L += `${_}"...": "${oe(A)} not stringified"`, _ = P
                            }
                            return _ !== "" && (L = `
${I}${L}
${b}`),
                            m.pop(),
                            `{${L}}`
                        }
                    case "number":
                        return isFinite(g) ? String(g) : t ? t(g) : "null";
                    case "boolean":
                        return g === !0 ? "true" : "false";
                    case "undefined":
                        return;
                    case "bigint":
                        if (n) return String(g);
                    default:
                        return t ? t(g) : void 0
                }
            }

            function E(S, g, m) {
                switch (typeof g) {
                    case "string":
                        return Q(g);
                    case "object":
                        {
                            if (g === null) return "null";
                            if (typeof g.toJSON == "function") {
                                if (g = g.toJSON(S), typeof g != "object") return E(S, g, m);
                                if (g === null) return "null"
                            }
                            if (m.indexOf(g) !== -1) return r;
                            let k = "",
                                I = g.length !== void 0;
                            if (I && Array.isArray(g)) {
                                if (g.length === 0) return "[]";
                                if (a < m.length + 1) return '"[Array]"';
                                m.push(g);
                                let L = Math.min(g.length, c),
                                    _ = 0;
                                for (; _ < L - 1; _++) {
                                    let A = E(String(_), g[_], m);
                                    k += A !== void 0 ? A : "null", k += ","
                                }
                                let T = E(String(_), g[_], m);
                                if (k += T !== void 0 ? T : "null", g.length - 1 > c) {
                                    let A = g.length - c - 1;
                                    k += `,"... ${oe(A)} not stringified"`
                                }
                                return m.pop(), `[${k}]`
                            }
                            let b = Object.keys(g),
                                v = b.length;
                            if (v === 0) return "{}";
                            if (a < m.length + 1) return '"[Object]"';
                            let w = "",
                                P = Math.min(v, c);I && At(g) && (k += kn(g, ",", c), b = b.slice(g.length), P -= g.length, w = ","),
                            i && (b = Ct(b, s)),
                            m.push(g);
                            for (let L = 0; L < P; L++) {
                                let _ = b[L],
                                    T = E(_, g[_], m);
                                T !== void 0 && (k += `${w}${Q(_)}:${T}`, w = ",")
                            }
                            if (v > c) {
                                let L = v - c;
                                k += `${w}"...":"${oe(L)} not stringified"`
                            }
                            return m.pop(),
                            `{${k}}`
                        }
                    case "number":
                        return isFinite(g) ? String(g) : t ? t(g) : "null";
                    case "boolean":
                        return g === !0 ? "true" : "false";
                    case "undefined":
                        return;
                    case "bigint":
                        if (n) return String(g);
                    default:
                        return t ? t(g) : void 0
                }
            }

            function y(S, g, m) {
                if (arguments.length > 1) {
                    let k = "";
                    if (typeof m == "number" ? k = " ".repeat(Math.min(m, 10)) : typeof m == "string" && (k = m.slice(0, 10)), g != null) {
                        if (typeof g == "function") return d("", {
                            "": S
                        }, [], g, k, "");
                        if (Array.isArray(g)) return h("", S, [], Pi(g), k, "")
                    }
                    if (k.length !== 0) return u("", S, [], k, "")
                }
                return E("", S, [])
            }
            return y
        }
    });
    var Qt = "cm_debug",
        to = "cm_debug",
        lt = "true";

    function je(e) {
        if (!e) return !1;
        try {
            return new URLSearchParams(e).get(to) === lt
        } catch {
            return !1
        }
    }

    function Xt() {
        try {
            return typeof globalThis.localStorage > "u" ? void 0 : globalThis.localStorage
        } catch {
            return
        }
    }

    function Ue(e = Xt()) {
        try {
            return e ? .getItem(Qt) === lt
        } catch {
            return !1
        }
    }

    function Ge(e = Xt()) {
        try {
            e ? .setItem(Qt, lt)
        } catch {}
    }
    var Zt = (e = window, t = document) => {
        let r = [{
                signal: "remix",
                keys: ["__remixContext", "__remixManifest", "__remixRouteModules"],
                hydrogen: !0
            }, {
                signal: "react-router",
                keys: ["__reactRouterContext", "__reactRouterManifest", "__reactRouterRouteModules", "__reactRouterDataRouter"],
                hydrogen: !0
            }, {
                signal: "hydrogen-pagination",
                keys: ["__hydrogenHydrated"],
                hydrogen: !0
            }, {
                signal: "next",
                keys: ["__NEXT_DATA__", "__next_f"],
                hydrogen: !1
            }, {
                signal: "nuxt",
                keys: ["__NUXT__", "__NUXT_DATA__"],
                hydrogen: !1
            }],
            n = "__sveltekit_",
            i = ['link[href*="/oxygen-v2/"]', 'script[src*="/oxygen-v2/"]'].join(","),
            s = ['[id^="shopify-section-"]', "#shopify-features", 'meta[name="shopify-checkout-api-token"]', 'meta[name="shopify-digital-wallet"]'].join(","),
            a = ["theme", "routes", "designMode", "loadFeatures"],
            c = ["ShopifyAnalytics", "__st"],
            d = b => typeof b == "object" && b !== null,
            h = b => {
                try {
                    return e[b]
                } catch {
                    return
                }
            },
            u = b => b.some(v => h(v) !== void 0),
            E = () => {
                try {
                    return Object.keys(e).some(b => b.startsWith(n))
                } catch {
                    return !1
                }
            },
            y = b => {
                try {
                    return t.querySelector(b) !== null
                } catch {
                    return !1
                }
            },
            g = (() => {
                let b = [],
                    v = h("Shopify");
                return d(v) && a.some(w => w in v) && b.push("liquid-shopify-global"), u(c) && b.push("liquid-analytics-global"), y(s) && b.push("liquid-theme-dom"), b
            })(),
            m = [],
            k = [];
        for (let {
                signal: b,
                keys: v,
                hydrogen: w
            } of r) u(v) && (w ? m : k).push(b);
        y(i) && m.push("oxygen-assets"), E() && k.push("sveltekit");
        let I = g.length > 0;
        return {
            isHydrogen: !I && m.length > 0,
            isLiquid: I,
            isHeadless: !I && m.length + k.length > 0,
            signals: [...g, ...m, ...k]
        }
    };
    var er = "never";
    var Se = "cm_fpeid";
    var Be = "[cm]";

    function D(e) {
        if (e !== void 0) {
            if (e instanceof Error) return e;
            if (typeof e == "string") return new Error(e);
            try {
                return new Error(JSON.stringify(e))
            } catch {
                return new Error("Unknown error")
            }
        }
    }

    function ro(e) {
        return e.length === 0 ? [Be] : typeof e[0] == "string" ? [`${Be} ${e[0]}`, ...e.slice(1)] : [Be, ...e]
    }

    function no(e) {
        if (typeof console > "u") return;
        let t = console[e];
        if (typeof t == "function") try {
            if (typeof t.bind == "function") return t.bind(console)
        } catch {
            return
        }
        let r = console.log;
        if (typeof r == "function") try {
            if (typeof r.bind == "function") return r.bind(console)
        } catch {
            return
        }
    }
    var Ve = class e {
        static LEVELS = {
            debug: 0,
            log: 1,
            info: 2,
            warn: 3,
            error: 4,
            never: 100
        };
        minLevel;
        constructor({
            locationHref: t,
            logLevel: r
        }) {
            let n, i;
            try {
                i = new URL(t).searchParams
            } catch {
                i = void 0
            }
            i && je(i.toString()) ? (Ge(), n = "debug") : Ue() ? n = "debug" : r ? n = r : n = er, this.minLevel = e.LEVELS[n]
        }
        callConsole(t, r) {
            if (e.LEVELS[t] < this.minLevel) return;
            let n = no(t);
            if (n) try {
                n(...r)
            } catch {}
        }
        createLogMethod(t) {
            return (...r) => {
                this.callConsole(t, ro(r))
            }
        }
        error(t, r, n) {
            let i = [`${Be} ${t}`];
            r !== void 0 && i.push(r), n !== void 0 && i.push(n), this.callConsole("error", i)
        }
        get debug() {
            return this.createLogMethod("debug")
        }
        get log() {
            return this.createLogMethod("log")
        }
        get info() {
            return this.createLogMethod("info")
        }
        get warn() {
            return this.createLogMethod("warn")
        }
    };

    function oo(e) {
        return import (e)
    }

    function tr({
        bundleUrl: e,
        pixelLogger: t,
        importImpl: r = oo
    }) {
        let n;

        function i() {
            return t ? .log("fp bundle load start", {
                bundleUrl: e
            }), Promise.resolve().then(() => r(e)).catch(s => {
                t ? .error("fp bundle import failed", D(s), {
                    bundleUrl: e
                })
            })
        }
        return {
            getModule: () => (n || (n = i()), n)
        }
    }

    function qe(e, t, r) {
        return new Promise(n => {
            let i = !1,
                s = setTimeout(() => {
                    if (!i) {
                        i = !0;
                        try {
                            r ? .()
                        } catch {}
                        n(void 0)
                    }
                }, t);
            e.then(a => {
                i || (i = !0, clearTimeout(s), n(a))
            }, () => {
                i || (i = !0, clearTimeout(s), n(void 0))
            })
        })
    }
    var io = 8e3;

    function rr({
        bundleLoader: e,
        pixelLogger: t,
        timeoutMs: r = io,
        debug: n
    }) {
        let i, s;

        function a() {
            t ? .log("fpjs load start");
            let c = e.getModule().then(d => d ? .createFpjs(n)).then(d => d ? .get()).then(d => {
                if (d) return s = d, t ? .log("fpjs resolved", {
                    visitorId: d.visitorId,
                    version: d.version,
                    confidence: d.confidence
                }), d
            }, d => {
                t ? .error("fpjs failed", D(d))
            });
            return qe(c, r, () => {
                t ? .log("fpjs timed out", {
                    timeoutMs: r
                })
            })
        }
        return {
            getResponse: () => (i || (i = a()), i),
            getResolvedResponse: () => s
        }
    }

    function so(e) {
        return e instanceof Error ? {
            name: e.name,
            message: e.message
        } : e
    }

    function ao(e) {
        if (!e) return e;
        let t = {};
        for (let [r, n] of Object.entries(e)) t[r] = n && typeof n == "object" && "error" in n ? Object.assign({}, n, {
            error: so(n.error)
        }) : n;
        return t
    }

    function ce(e) {
        return e ? {
            fpjs_visitor_id: e.visitorId,
            fpjs_confidence_score: e.confidence ? .score,
            fpjs_confidence_comment: e.confidence ? .comment,
            fpjs_components: ao(e.components),
            fpjs_version: e.version
        } : {
            fpjs_visitor_id: void 0,
            fpjs_confidence_score: void 0,
            fpjs_confidence_comment: void 0,
            fpjs_components: void 0,
            fpjs_version: void 0
        }
    }

    function le() {
        try {
            return sessionStorage.getItem(Se) ? ? void 0
        } catch {
            return
        }
    }

    function dt(e) {
        try {
            sessionStorage.setItem(Se, e)
        } catch {
            return
        }
    }

    function nr(e, t) {
        let r;
        return function(...n) {
            r !== void 0 && clearTimeout(r), r = setTimeout(function() {
                r = void 0, e.apply(void 0, n)
            }, t)
        }
    }

    function re(e) {
        return /^(?:(?:[^<>()\]\\.,;:\s@"]+(?:\.[^<>()\]\\.,;:\s@"]+)*)|(?:".+"))@(?:(?:\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(?:(?:[a-zA-Z\-0-9]+\.)+(?:com|org|edu|gov|net|jp|au|us|ru|ch|mil|br|info|biz|name|coop|email|xyz|dev|io|agency)))$/.test(String(e).toLowerCase())
    }
    var co = 1e3,
        ut = "input[type=text], input[type=email], input:not([type])";

    function or(e, t) {
        return t.querySelectorAll(e)
    }

    function ir(e) {
        let t = e.target;
        if (t && typeof t.value == "string") return t.value
    }
    var lo = {
            reset: () => {},
            addEmailListener: () => {},
            initInput: () => {},
            isInsideIframe: () => !1,
            trackedNodes: []
        },
        ft = class {
            collected = [];
            onCollect;
            domElement;
            pixelLogger;
            constructor(t, r, n) {
                this.domElement = t, this.onCollect = r, this.pixelLogger = n, this.domElement.addEventListener("input", nr(i => {
                    this.handle(ir(i))
                }, co)), this.domElement.addEventListener("blur", i => {
                    this.handle(ir(i))
                })
            }
            handle(t) {
                t && this.collected.indexOf(t) === -1 && re(t) && this.collect(t)
            }
            collect(t) {
                this.pixelLogger ? .debug("input captured email"), this.collected.push(t), this.onCollect(t)
            }
        };

    function uo(e) {
        let t = ["password"],
            r = [],
            n = [],
            i = [];

        function s(y) {
            for (let S = 0; S < r.length; S++) try {
                r[S](y)
            } catch (g) {
                e ? .error("input watcher listener failed", D(g))
            }
        }

        function a(y) {
            if (y && n.indexOf(y) === -1) {
                let S = y.type;
                t.indexOf(S) === -1 && (e ? .debug("watching input", y.name || y.id || S), new ft(y, s, e), n.push(y))
            }
        }

        function c(y) {
            or(ut, y).forEach(S => a(S))
        }

        function d(y) {
            y.forEach(S => {
                S.addedNodes.forEach(g => {
                    if (g.nodeType !== Node.ELEMENT_NODE) return;
                    let m = g;
                    m.hasChildNodes() ? or(ut, m).forEach(I => a(I)) : m.nodeType === Node.ELEMENT_NODE && m.matches(ut) && a(m), h(m)
                })
            })
        }

        function h(y) {
            let S = [];
            if (y.nodeType === Node.ELEMENT_NODE) S.push(y);
            else {
                let g = y.children;
                for (let m = 0; m < g.length; m++) S.push(g[m])
            }
            for (; S.length > 0;) {
                let g = S.pop();
                g.shadowRoot && u(g.shadowRoot);
                let m = g.children;
                for (let k = m.length - 1; k >= 0; k--) S.push(m[k])
            }
        }

        function u(y) {
            if (i.indexOf(y) === -1) {
                i.push(y), e ? .debug("observing shadow root", i.length), c(y), h(y);
                try {
                    new MutationObserver(g => {
                        d(g)
                    }).observe(y, {
                        attributes: !1,
                        characterData: !1,
                        childList: !0,
                        subtree: !0
                    })
                } catch (S) {
                    e ? .error("failed to observe shadow root mutations", D(S))
                }
            }
        }

        function E() {
            try {
                return window.self !== window.top
            } catch (y) {
                return e ? .error("failed to detect iframe context", D(y)), !0
            }
        }
        try {
            c(document.documentElement), h(document.documentElement), document.querySelectorAll("iframe").forEach(y => {
                let S = y.contentDocument;
                S && S.documentElement && (c(S.documentElement), h(S.documentElement))
            })
        } catch (y) {
            e ? .error("failed to scan document for inputs", D(y))
        }
        try {
            new MutationObserver(S => {
                d(S)
            }).observe(document.documentElement, {
                attributes: !1,
                characterData: !1,
                childList: !0,
                subtree: !0
            })
        } catch (y) {
            e ? .error("failed to observe DOM mutations", D(y))
        }
        return {
            reset: () => {
                r = []
            },
            addEmailListener: y => {
                r.push(y)
            },
            initInput: a,
            isInsideIframe: E,
            trackedNodes: n
        }
    }

    function sr({
        pixelLogger: e
    }) {
        return typeof document > "u" ? lo : uo(e)
    }
    var H = "cm_lr_observed",
        Ee = "cm_lr_synced",
        He = "cm_lr_attempts",
        ar = new Set([H, Ee, He]);

    function pt(e) {
        return typeof e == "object" && e !== null && typeof e.key == "string" && typeof e.value == "string"
    }
    var ke = 1e4;

    function cr(e, t) {
        try {
            return JSON.stringify(e).length
        } catch (r) {
            t ? .error("failed to measure captured entries JSON size", D(r));
            return
        }
    }

    function Je(e, t, r, n = ke, i) {
        try {
            if (e.length === 0) return e;
            let s = cr(e, i);
            if (s === void 0) return [];
            if (s <= n) return e;
            let a = [];
            for (let c = 0; c < e.length; c++) {
                let d = e[c];
                a.push({
                    entry: d,
                    index: c,
                    combinedLength: t(d).length + r(d).length
                })
            }
            for (; a.length > 0;) {
                let c = [];
                for (let u = 0; u < a.length; u++) c.push(a[u].entry);
                let d = cr(c, i);
                if (d === void 0) return [];
                if (d <= n) {
                    a.sort((E, y) => E.index - y.index);
                    let u = [];
                    for (let E = 0; E < a.length; E++) u.push(a[E].entry);
                    return u
                }
                let h = 0;
                for (let u = 1; u < a.length; u++) {
                    let E = a[u],
                        y = a[h];
                    (E.combinedLength > y.combinedLength || E.combinedLength === y.combinedLength && E.index > y.index) && (h = u)
                }
                a.splice(h, 1)
            }
            return []
        } catch (s) {
            return i ? .error("failed to trim captured entries by JSON size", D(s)), []
        }
    }
    var fo = /[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:^|[^\uD800-\uDBFF])[\uDC00-\uDFFF]/;

    function de(e) {
        let t = e.isWellFormed;
        return typeof t == "function" ? t.call(e) : !fo.test(e)
    }
    var lr = 700;

    function po(e, t = lr, r) {
        let n = [];
        for (let i = 0; i < e.length; i++) {
            let s = e[i];
            !s.key || ar.has(s.key) || r ? .has(s.key) || s.value.length > t || !de(s.key) || !de(s.value) || n.push(s)
        }
        return n
    }

    function ue(e, t, r) {
        try {
            return Je(po(e, lr, r), n => n.key, n => n.value, ke, t)
        } catch (n) {
            return t ? .error("failed to prepare captured localStorage entries", D(n)), []
        }
    }

    function mo() {
        try {
            let e = globalThis.localStorage;
            return !e || typeof e.length != "number" || typeof e.key != "function" || typeof e.getItem != "function" ? void 0 : e
        } catch {
            return
        }
    }

    function Pe() {
        let e = mo();
        if (!e) return [];
        try {
            let t = [];
            for (let r = 0; r < e.length; r++) {
                let n = e.key(r);
                if (n == null) continue;
                let i = e.getItem(n),
                    s = {
                        key: n,
                        value: i ? ? ""
                    };
                pt(s) && t.push(s)
            }
            return t
        } catch {
            return []
        }
    }

    function dr(e) {
        let t = e.name.trim();
        if (t) return {
            name: t,
            value: e.value.trim()
        }
    }

    function ur(e) {
        try {
            return decodeURIComponent(e)
        } catch {
            return e
        }
    }
    var fr = 700;

    function fe(e) {
        if (!e) return [];
        let t = [];
        for (let r of e.split(";")) {
            let n = r.trim();
            if (!n) continue;
            let i = n.indexOf("=");
            if (i === -1) continue;
            let s = n.slice(0, i).trim();
            if (!s) continue;
            let a = n.slice(i + 1).trim(),
                c = ur(a),
                d = dr({
                    name: s,
                    value: c
                });
            d && t.push(d)
        }
        return t
    }

    function go(e, t = fr, r) {
        return e.filter(n => !r ? .has(n.name) && n.value.length <= t && de(n.name) && de(n.value))
    }

    function pe(e, t, r) {
        try {
            return Je(go(e, fr, r), n => n.name, n => n.value, ke, t)
        } catch (n) {
            return t ? .error("failed to prepare captured cookies", D(n)), []
        }
    }
    var ho = 8e3;

    function pr({
        bundleLoader: e,
        pixelLogger: t,
        timeoutMs: r = ho
    }) {
        let n, i;

        function s() {
            t ? .log("thumbmark load start");
            let a = e.getModule().then(c => c ? .createTm().get()).then(c => {
                if (c) return i = c, t ? .log("thumbmark resolved", {
                    thumbmark: c.thumbmark,
                    version: c.version,
                    hadError: Array.isArray(c.error) && c.error.length > 0
                }), c
            }, c => {
                t ? .error("thumbmark failed", D(c))
            });
            return qe(a, r, () => {
                t ? .log("thumbmark timed out", {
                    timeoutMs: r
                })
            })
        }
        return {
            getResponse: () => (n || (n = s()), n),
            getResolvedResponse: () => i
        }
    }

    function me(e) {
        return e ? {
            thumbmark_hash: e.thumbmark,
            thumbmark_components: e.components,
            thumbmark_elapsed: e.elapsed,
            thumbmark_error: e.error ? ? []
        } : {
            thumbmark_hash: void 0,
            thumbmark_components: void 0,
            thumbmark_elapsed: void 0,
            thumbmark_error: []
        }
    }
    var yo = " daum[ /]| deusu/|(?:^|[^g])news(?!sapphire)|(?<! channel/|google/)google(?!(?:wv|app|/google| pixel))|(?<! cu)bots?(?:\\b|_)|(?<!cam)scan|(?<!lib)http|24x7|;\\s\\w+;$|@[a-z][\\w-]+\\.|\\(\\)|\\.com\\b|\\b\\w+\\.ai|\\bbw/|\\bdlc\\b|\\bort/|\\bperl\\b|\\btime/|\\||^[<\\(;]|^[\\w \\.\\-\\(?:\\):%]+(?:/v?\\d+(?:\\.\\d+)?(?:\\.\\d{1,10})*?)?(?:,|$)|^[\\w\\-]+/[\\w]+$|^[^ ]{50,}$|^\\d+\\b|^\\w*search\\b|^\\w+/[\\w\\(\\)]*$|^\\w+/\\d\\.\\d\\s\\([\\w@]+\\)$|^active|^ad muncher|^amaya|^apache/|^avsdevicesdk/|^azure|^biglotron|^blackbox exporter|^bot|^clamav[ /]|^claude-code/|^client/|^cobweb/|^custom|^ddg[_-]android|^discourse|^dispatch/\\d|^downcast/|^duckduckgo|^email|^exodusmovement|^facebook|^getright/|^gozilla/|^hobbit|^hotzonu|^hwcdn/|^igetter/|^jeode/|^jetty/|^jigsaw|^microsoft bits|^movabletype|^mozilla/\\d\\.\\d\\s[\\w\\.-]+$|^mozilla/\\d\\.\\d\\s\\((?:compatible;)?(?:\\s?[\\w\\d-.]+\\/\\d+\\.\\d+)?\\)$|^navermailapp|^netsurf|^offline|^openai/|^owler|^php|^postman|^ps_daily/|^python|^rank|^read|^reed|^remove\\.bg/|^rest|^rss|^snapchat|^sora |^space bison|^stape/|^svn|^swcd |^taringa|^thumbor/|^track|^w3c|^webbandit/|^webcopier|^wget|^whatsapp|^wordpress|^xenu link sleuth|^yahoo|^yandex|^zdm/\\d|^zoom marketplace/|abuse|advisor|agent\\b|analyzer|archive|ask jeeves/teoma|attracta|audit|bluecoat drtr|browsex|burpcollaborator|capture|catch|check\\b|checker|chrome-lighthouse|chromeframe|classifier|cloudflare|collapsify\\b|convertify|cookiehubverify/|crawl|cursor/|cypress/|dareboost|datanyze|dejaclick|detect|discovery|dmbrowser|download|exaleadcloudview|feed|fetcher|firephp|foregenix|functionize|grab|hardenize\\b|headless|hotjar|httrack|hubspot marketing grader|ibisbrowser|infrawatch|insight|inspect|iplabel|java(?!;)|library|linkcheck|linktiger|mail\\.ru/|manager|manus-user/|marketgoo/|measure|monitor\\b|neustar wpm|node\\b|nutch|offbyone|openvas|optimize|pageburst|pagespeed|parser|phantomjs|pingdom|playwright|powermarks|preview|productfinder|prospectingstudio|proxy|ptst[ /]\\d|radar|readable/|retriever|rexx;|rigor|rss\\b|scrape|securityheaders|selenium|server|silktide|sindup/|sogou|sparkler/|speedcurve|spider|splash|statuscake|supercleaner|synapse|synthetic|testlocally|tools|torrent|transcoder|upday/|url|validator|virtuoso|wappalyzer|watchtowr|webglance|webkit2png|whatcms/|xtate/",
        _o = /bot|crawl|http|lighthouse|scan|search|spider/i,
        Le;

    function bo() {
        if (Le instanceof RegExp) return Le;
        try {
            Le = new RegExp(yo, "i")
        } catch {
            Le = _o
        }
        return Le
    }
    var wo = e => typeof e == "string" && e !== "";

    function vo(e) {
        return wo(e) && bo().test(e)
    }
    var mr = vo;
    var So = [Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError, AggregateError, globalThis.DOMException, globalThis.AssertionError, globalThis.SystemError].filter(Boolean).map(e => [e.name, e]),
        gr = new Map(So);
    var Eo = [{
            property: "name",
            enumerable: !1
        }, {
            property: "message",
            enumerable: !1
        }, {
            property: "stack",
            enumerable: !1
        }, {
            property: "code",
            enumerable: !0
        }, {
            property: "cause",
            enumerable: !1
        }, {
            property: "errors",
            enumerable: !1
        }],
        gt = new WeakSet,
        ko = e => {
            gt.add(e);
            let t = e.toJSON();
            return gt.delete(e), t
        },
        Po = e => {
            let t = gr.get(e) ? ? Error;
            return t === AggregateError ? new t([]) : new t
        },
        yr = ({
            from: e,
            seen: t,
            to: r,
            forceEnumerable: n,
            maxDepth: i,
            depth: s,
            useToJSON: a,
            serialize: c
        }) => {
            if (r || (Array.isArray(e) ? r = [] : !c && hr(e) ? r = Po(e.name) : r = {}), t.push(e), s >= i) return r;
            if (a && typeof e.toJSON == "function" && !gt.has(e)) return ko(e);
            let d = h => yr({
                from: h,
                seen: [...t],
                forceEnumerable: n,
                maxDepth: i,
                depth: s,
                useToJSON: a,
                serialize: c
            });
            for (let [h, u] of Object.entries(e)) {
                if (u && u instanceof Uint8Array && u.constructor.name === "Buffer") {
                    r[h] = "[object Buffer]";
                    continue
                }
                if (u !== null && typeof u == "object" && typeof u.pipe == "function") {
                    r[h] = "[object Stream]";
                    continue
                }
                if (typeof u != "function") {
                    if (!u || typeof u != "object") {
                        try {
                            r[h] = u
                        } catch {}
                        continue
                    }
                    if (!t.includes(e[h])) {
                        s++, r[h] = d(e[h]);
                        continue
                    }
                    r[h] = "[Circular]"
                }
            }
            if (c || r instanceof Error)
                for (let {
                        property: h,
                        enumerable: u
                    } of Eo) e[h] !== void 0 && e[h] !== null && Object.defineProperty(r, h, {
                    value: hr(e[h]) || Array.isArray(e[h]) ? d(e[h]) : e[h],
                    enumerable: n ? !0 : u,
                    configurable: !0,
                    writable: !0
                });
            return r
        };

    function _r(e, t = {}) {
        let {
            maxDepth: r = Number.POSITIVE_INFINITY,
            useToJSON: n = !0
        } = t;
        return typeof e == "object" && e !== null ? yr({
            from: e,
            seen: [],
            forceEnumerable: !0,
            maxDepth: r,
            depth: 0,
            useToJSON: n,
            serialize: !0
        }) : typeof e == "function" ? `[Function: ${e.name||"anonymous"}]` : e
    }

    function hr(e) {
        return !!e && typeof e == "object" && typeof e.name == "string" && typeof e.message == "string" && typeof e.stack == "string"
    }
    var br = "2026-07";
    var wr = "https://shdid.me",
        ht = "_shdfp",
        yt = "_shdls",
        Ke = "__kla_id",
        ge = "cm_cartLines",
        vr = "cm_x_temp_tablet",
        Y = "_shd_y",
        Ie = "shd_s",
        ne = "_shopify_s",
        xe = "_shopify_y",
        ze = "shd_events_q",
        We = "shd_cart",
        Re = 32,
        Sr = 100,
        Ye = "20260925-840551e5",
        Er = br;

    function V(e) {
        return e ? .trim() || wr
    }
    var J = ({
        severity: e,
        accountId: t,
        message: r,
        href: n,
        labels: i,
        trackingOrigin: s
    }) => {
        let a = new URL("/api/cbc/log", V(s));
        navigator.sendBeacon(a.href, JSON.stringify({
            severity: e,
            accountId: t,
            message: r,
            version: Ye,
            href: n,
            labels: i
        }))
    };
    var kr = e => {
        let t = !1;
        return (...r) => {
            t || (t = !0, e(...r))
        }
    };
    var Lo = {
            maxAttempts: 5,
            intervalMs: 250
        },
        Te = async (e, t = {}) => {
            let {
                maxAttempts: r,
                intervalMs: n
            } = { ...Lo,
                ...t
            };
            for (let i = 0; i < r; i++) {
                let s = await Promise.resolve(e());
                if (s) return s;
                await new Promise(a => setTimeout(a, n))
            }
            return !1
        };
    var Pr = (e, t) => {
        let r = e ? .customerPrivacy;
        if (!r) return t.log("Customer Privacy absent; no Shopify consent"), !1;
        if (typeof r.marketingAllowed != "function" || typeof r.analyticsProcessingAllowed != "function") return t.log("marketingAllowed/analyticsProcessingAllowed unavailable; no Shopify consent"), !1;
        try {
            let n = r.marketingAllowed(),
                i = r.analyticsProcessingAllowed(),
                s = n && i;
            return t.log(`Shopify consent: marketingAllowed=${n?"true":"false"}, analyticsProcessingAllowed=${i?"true":"false"}, consented=${s?"true":"false"}`), s
        } catch {
            return t.log("Shopify consent helpers threw; no Shopify consent"), !1
        }
    };
    var Io = async e => new Promise(t => {
            try {
                e.loadFeatures([{
                    name: "consent-tracking-api",
                    version: "0.1"
                }], r => t(!r))
            } catch {
                t(!1)
            }
        }),
        _t = async (e, t) => {
            if (e) return e.customerPrivacy ? e : (typeof e.loadFeatures == "function" && (await Io(e) || t.log("Privacy API failed to load; Shopify consent surface unobservable")), await Te(() => window.Shopify ? .customerPrivacy ? !0 : null), window.Shopify ? ? e)
        },
        Lr = async (e, t, r) => {
            let n = !1,
                i, s = {
                    isDenied: () => n
                },
                a = kr(() => {
                    Promise.resolve(e(i, s)).catch(c => {
                        r.log(`Tracking callback failed: ${String(c)}`)
                    })
                });
            if (t.source !== "embed") return i = window.Shopify, a(), s;
            try {
                i = (t.headless ? void 0 : await Te(() => typeof window.Shopify ? .shop == "string" ? window.Shopify : null)) || void 0, r.log(`Shopify: ${i?"true":"false"}, isHeadless: ${t.headless?"true":"false"}`), await _t(i, r);
                let d = () => !Pr(window.Shopify ? ? i, r);
                try {
                    document.addEventListener("visitorConsentCollected", () => {
                        if (n = d(), n) {
                            r.log("Tracking stopped: Shopify consent not granted");
                            return
                        }
                        a()
                    })
                } catch {
                    r.log("Unable to listen for visitorConsentCollected")
                }
                if (d()) return n = !0, r.log("Tracking suppressed: Shopify consent not granted"), s;
                a()
            } catch (c) {
                r.log(`Error in consent check: ${String(c)}`), n || a()
            }
            return s
        };
    var Ir = `${ze}:read`,
        xo = `${ze}:write`,
        xr = ({
            eventsFn: e,
            pixelLogger: t
        }) => {
            let r = async () => {
                let n = Date.now(),
                    i = [],
                    s = [];
                try {
                    let d = parseInt(sessionStorage.getItem(Ir) ? ? "-1"),
                        h = 0;
                    for (; h < 2 * Re;) {
                        let u = parseInt(sessionStorage.getItem(xo) ? ? "-1");
                        if (d === u) break;
                        h++, h >= Re && t.log("queue consumer may be lagging"), d = (d + 1) % Re;
                        let E = d.toFixed().padStart(2, "0"),
                            y = `${ze}:${E}`,
                            S = sessionStorage.getItem(y);
                        if (sessionStorage.removeItem(y), sessionStorage.setItem(Ir, d.toFixed()), S !== null) {
                            let g;
                            try {
                                g = JSON.parse(S)
                            } catch (m) {
                                t.log(`error parsing event: ${m}`);
                                continue
                            }
                            t.log("flushing event", g), i.push(g), i.length === Re && (s.push(e(i, "queue_flushing").catch(m => {
                                t.log(`error uploading events: ${m}`)
                            })), i = [])
                        }
                    }
                    i.length && (s.push(e(i, "queue_flushing").catch(u => {
                        t.log(`error uploading events: ${u}`)
                    })), i = []), await Promise.all(s)
                } catch (d) {
                    t.log(`error flushing events: ${d}`)
                }
                let a = Date.now(),
                    c = Math.max(Sr - (a - n), 0);
                setTimeout(() => {
                    r()
                }, c)
            };
            r()
        };
    var Rr = () => async e => {
        let t = document.location.host.replace("www.", ""),
            r = e.url;
        if (e.method === "POST") {
            if (r.endsWith(`${t}/tag?name=PageView`)) {
                let n = e.headers.get("edgetaguserid");
                n && window.localStorage.setItem("bo_pvid", `${n}:${Date.now()}`)
            }
            if (r.endsWith(`${t}/tag?name=ViewContent`)) {
                let n = e.headers.get("edgetaguserid");
                n && window.localStorage.setItem("bo_prdvid", `${n}:${Date.now()}`)
            }
        }
    };
    var Qe = class {
        _lockingPromise;
        _locks;
        constructor() {
            this._lockingPromise = Promise.resolve(), this._locks = 0
        }
        isLocked() {
            return this._locks > 0
        }
        lock() {
            this._locks += 1;
            let t, r = new Promise(i => {
                    t = () => {
                        this._locks -= 1, i()
                    }
                }),
                n = this._lockingPromise.then(() => t);
            return this._lockingPromise = this._lockingPromise.then(() => r), n
        }
    };
    var Tr = (e, t) => {
        let r = 0,
            n = null;
        return () => {
            let i = Date.now(),
                s = t - (i - r);
            s <= 0 ? (n && (clearTimeout(n), n = null), r = i, e()) : n || (n = setTimeout(() => {
                r = Date.now(), n = null, e()
            }, s))
        }
    };

    function Ar(e) {
        let t = location.pathname + location.search,
            r = new MutationObserver(Tr(() => {
                let n = location.pathname + location.search;
                t !== n && (e(location.href), t = n)
            }, 500));
        return r.observe(document.body, {
            childList: !0,
            subtree: !0
        }), r
    }
    var Cr = e => {
            let t = e;
            return t.includes("%3D") && (t = decodeURIComponent(t)), t = t.replace("gid://shopify/Cart/", ""), t.match(/^[\w]{16,}(\?key=[\w]+)?$/) ? t : null
        },
        bt = e => {
            let t = e.match(/gid:\/\/shopify\/Cart\/((Z|h)[\w]{16,}(\?key=[\w]+)?)/);
            return t ? t[1] : null
        },
        Xe = ({
            cookieString: e,
            getLocalStorageItem: t
        }) => {
            let r = ["cart", "cartToken", "cart_token", "shopify_cartId", "shopifyCartId", "shopify_cart_id", "ms_shopify_cart_id_us", "cart_", "cCARTDATA", "cartId", "cartLastUpdatedAt", "__bloomsybox_cart", "cart-state"],
                n = r.flatMap(d => e.split("; ").filter(u => u.startsWith(d)).map(u => u.slice(u.indexOf("=") + 1)).flatMap(u => {
                    if (u) {
                        let E = Cr(u);
                        if (E) return [E]
                    }
                    return []
                })),
                i = r.flatMap(d => {
                    let h = t(d);
                    if (h ? .startsWith('"') && h ? .endsWith('"') && (h = h.slice(1, -1)), h) {
                        let u = Cr(bt(h) ? ? h);
                        if (u) return [u]
                    }
                    return []
                }),
                a = [...Array.from(new Set(i)), ...Array.from(new Set(n))].filter(d => d.length >= 4);
            if (a.length === 0) return null;
            let c = a.filter(d => d.includes("?key="));
            return c.length > 0 ? c.at(0) : a.at(0)
        };

    function j(e, t) {
        let n = new RegExp(`(?:^|;\\s*)${e}=([^;]+)`).exec(t);
        return n !== null && n[1] || null
    }
    var Ce = () => crypto && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : Math.random().toString(16).slice(2) + Math.random().toString(16).slice(2) + Math.random().toString(16).slice(2);
    var Ro = ["LinesAdd", "LinesRemove", "ClearCart", "LinesUpdate"],
        To = /\b(cartLinesAdd|cartLinesRemove|cartLinesUpdate|cartCreate)\s*\(/,
        Co = ["mutation cartLinesAdd", "mutation cartLinesRemove", "mutation cartLinesUpdate", "mutation cartLinesAddOrCreate", "mutation CartLinesAdd", "mutation CartLinesRemove", "mutation CartLinesUpdate", "mutation CartLineAdd", "mutation CartLineRemove", "mutation CartLineUpdate", "mutation CartLineAddOrCreate", "mutation addToCart", "mutation removeFromCart", "mutation createCart", "mutation cartCreate", "mutation CartCreate", "mutation addCartLines", "mutation removeCartLines", "mutation updateCartLines", "mutation editCartItems", "mutation addItems", "mutation removeItems", "mutation updateItems"],
        Ao = /\/graphql(\.json)?$|\/cart\/(add|change|update)(\.js)?$|\/api\/cart(\/|$)|\.data$/,
        Oo = 1500,
        Fo = /\/cart\/add(\.js)?$/,
        Mo = 20,
        $o = e => {
            if (!Fo.test(e.pathname)) return null;
            let t = e.searchParams.get("id");
            if (!t || !/^\d+$/.test(t)) return null;
            let r = e.searchParams.get("quantity");
            if (r === null) return {
                variantId: t,
                quantity: 1
            };
            let n = Number.parseInt(r, 10);
            return !Number.isFinite(n) || n <= 0 ? null : {
                variantId: t,
                quantity: n
            }
        },
        Do = e => To.test(e) || Co.some(t => e.includes(t)),
        No = (e, t) => {
            let r = e.get("cartFormInput");
            if (!r) return;
            let n;
            try {
                n = JSON.parse(r)
            } catch {
                t.log(`invalid cartFormInput: ${r}`);
                return
            }
            return typeof n == "object" && typeof n ? .action == "string" ? n.action : void 0
        },
        Or = () => {
            let e = localStorage.getItem(We);
            return e ? JSON.parse(e) : null
        },
        Fr = (e, t, r, n, i) => {
            let s = new Qe,
                a = [],
                c = async (y, S) => {
                    r.log("Processing cart request");
                    let g = y ? .lines || [],
                        m = S ? .lines || [],
                        k = m.filter(b => !g.some(v => v.id === b.id) || g.some(v => v.id === b.id && v.quantity < b.quantity)),
                        I = g.filter(b => !m.some(v => b.id === v.id) || m.some(v => v.id === b.id && v.quantity < b.quantity));
                    r.log(`afterLines: ${JSON.stringify(m.map(b=>b.id))}`), r.log(`beforeLines: ${JSON.stringify(g.map(b=>b.id))}`), r.log(`addedLines: ${JSON.stringify(k.map(b=>b.id))}`), r.log(`removedLines: ${JSON.stringify(I.map(b=>b.id))}`), await Promise.all(k.map(b => {
                        let v = g.find(L => L.id === b.id) ? .quantity ? ? 0,
                            w = m.find(L => L.id === b.id) ? .quantity ? ? 0,
                            P = Math.max(w - v, 0);
                        return e([{
                            name: "product_added_to_cart",
                            data: {
                                cartLine: { ...b,
                                    quantity: P
                                }
                            }
                        }], "cart_interceptor")
                    })), await Promise.all(I.map(b => {
                        let v = g.find(L => L.id === b.id) ? .quantity ? ? 0,
                            w = m.find(L => L.id === b.id) ? .quantity ? ? 0,
                            P = Math.max(v - w, 0);
                        return e([{
                            name: "product_removed_from_cart",
                            data: {
                                cartLine: { ...b,
                                    quantity: P
                                }
                            }
                        }], "cart_interceptor")
                    }))
                },
                d = async (y, S) => {
                    let g = Or(),
                        m;
                    try {
                        m = new URL(y.url)
                    } catch {
                        r.log(`invalid url: ${y.url}`);
                        return
                    }
                    let k = y.method.toString().toUpperCase(),
                        I = k === "POST" && /\/graphql(\.json)?$/.test(m.pathname),
                        b = /\/cart\/(add|change|update)(\.js)?$/.test(m.pathname),
                        v = k === "POST" && (m.pathname.endsWith(".data") || !!m.searchParams.get("_data") ? .startsWith("routes")),
                        w = k !== "GET" && /^\/api\/cart(\/|$)/.test(m.pathname),
                        P = async () => {
                            let L = await s.lock(),
                                _ = await S.text(),
                                T = bt(_) ? ? void 0;
                            r.log(`extracted token: ${T}`);
                            let A = await t(T);
                            await c(g, A), L()
                        };
                    if (I) {
                        let L;
                        try {
                            let _ = await y.clone().json();
                            L = typeof _ ? .query == "string" ? _.query : void 0
                        } catch {
                            return
                        }
                        L && Do(L) && (r.log(`Found graphql cart request: ${m.pathname}`), await P())
                    } else if (b) r.log(`Found cart ajax request: ${m.pathname}`), await P();
                    else if (v) {
                        let L;
                        try {
                            L = await y.clone().formData()
                        } catch {
                            return
                        }
                        let _ = L.get("cartAction");
                        if (_ && ["ADD_TO_CART", "REMOVE_FROM_CART", "UPDATE_CART"].includes(_)) {
                            r.log(`Found cart data request: ${m.pathname}`), await P();
                            return
                        }
                        let T = No(L, r);
                        T && Ro.includes(T) && (r.log(`Found remix cart request: ${m.pathname}`), await P())
                    } else w && (r.log(`Found cart api request: ${m.pathname}`), await P())
                },
                h = async y => {
                    let S = new Map;
                    for (let m of y) S.set(m.variantId, (S.get(m.variantId) ? ? 0) + m.quantity);
                    let g = await i([...S.keys()]);
                    await Promise.all([...S].map(([m, k]) => {
                        let I = g.find(v => v.id === m);
                        if (!I) return r.log(`url cart add skipped: variant ${m} not resolved`), Promise.resolve();
                        let b = {
                            id: `url-add:${m}`,
                            quantity: k,
                            cost: {
                                totalAmount: {
                                    amount: I.price ? (Number(I.price.amount) * k).toFixed(2) : "0.00",
                                    currencyCode: I.price ? .currencyCode ? ? "USD"
                                }
                            },
                            merchandise: I
                        };
                        return e([{
                            name: "product_added_to_cart",
                            data: {
                                cartLine: b
                            }
                        }], "cart_interceptor")
                    }))
                },
                u = async () => {
                    let y = await s.lock();
                    try {
                        let S = a;
                        a = [];
                        let g = Or(),
                            m = await t();
                        if (m) {
                            await c(g, m);
                            return
                        }
                        if (!S.length) {
                            r.log("resource cart sync skipped: cart fetch unavailable");
                            return
                        }
                        await h(S)
                    } finally {
                        y()
                    }
                };
            return {
                cartInterceptor: d,
                watchCartResources: () => {
                    if (typeof PerformanceObserver > "u") return;
                    let y = null,
                        S = () => {
                            y || (y = setTimeout(() => {
                                y = null, u().catch(m => {
                                    r.log(`resource cart sync failed: ${m}`)
                                })
                            }, Oo))
                        },
                        g = m => {
                            if (m === n) return null;
                            let k;
                            try {
                                k = new URL(m)
                            } catch {
                                return null
                            }
                            return Ao.test(k.pathname) || !!k.searchParams.get("_data") ? .startsWith("routes") ? k : null
                        };
                    try {
                        new PerformanceObserver(k => {
                            let I = !1;
                            for (let b of k.getEntries()) {
                                let v = g(b.name);
                                if (!v) continue;
                                I = !0;
                                let w = $o(v);
                                w && a.length < Mo && a.push(w)
                            }
                            I && S()
                        }).observe({
                            type: "resource",
                            buffered: !0
                        })
                    } catch (m) {
                        r.log(`cart resource watcher failed: ${m}`)
                    }
                }
            }
        };
    var Mr = e => async t => {
        let r = new URL(t.url);
        if (t.method === "POST" && r.pathname == "/a/elevar") {
            e.log(`url: ${r.pathname}`);
            let n = await t.clone().json();
            e.log(`body: ${JSON.stringify(n,null,2)}`);
            let i = n ? .event;
            if (i == "dl_add_to_cart") {
                let s = n ? .event_id;
                s && window.localStorage.setItem("el_atcid", `${s}:${Date.now()}`)
            }
            if (i == "dl_view_item") {
                let s = n ? .event_id;
                s && window.localStorage.setItem("el_prdvid", `${s}:${Date.now()}`)
            }
        }
    };
    var $r = ct(vt(), 1),
        Dr = e => async (t, r) => {
            if (!["aHR0cHM6Ly9ldmVudC5hcGkuaW5zdGFudC5vbmU="].map(a => atob(a)).some(a => t.url.startsWith(a))) return;
            let s = await t.clone().json();
            if (s.p) {
                let a = (0, $r.decompressFromEncodedURIComponent)(s.p);
                if (e.log("decompressed:"), e.log(a), a.includes("ITEM_ADDED_TO_CART") || a.includes("COMPATIBILITY_ITEM_ADDED_TO_CART")) try {
                    let c = JSON.parse(a),
                        d = c.cart ? .cart_id,
                        h = c.timestamp;
                    d && h && (c.type.includes("ITEM_ADDED_TO_CART") || c.type.includes("COMPATIBILITY_ITEM_ADDED_TO_CART")) && window.localStorage.setItem("inst_atciid", `${d}:${h}`)
                } catch {
                    e.log(`invalid decompressed: ${a}`)
                }
            }
        };
    var Nr = (e, t) => {
        let r = document.getElementById("react-popup-container"),
            n = new MutationObserver(async i => {
                for (let s of i) s.type === "attributes" && s.attributeName === "class" && s.target.classList ? .contains("modal-open") && location.origin.includes("shop.rebag.com") && await e([{
                    name: "cart_viewed",
                    data: {
                        cart: null
                    }
                }], "rebag_interceptor")
            });
        return r && n.observe(r, {
            attributes: !0
        }), async (i, s) => {
            if (!/^https:\/\/shop\.rebag\.com\/api\/\d{4}-\d{2}\/graphql/.test(i.url)) return;
            let c = await i.clone().json();
            if (c.query.startsWith("mutation cartLinesAdd")) {
                let d = c.variables.lines.filter(m => !m.sellingPlanId).map(m => ({
                    merchandiseId: m.merchandiseId,
                    quantity: m.quantity
                }));
                if (d.length !== 1) {
                    t.log(`Expected 1 merchandise, got ${d.length}`);
                    return
                }
                let h = d[0],
                    S = (await s.clone().json()) ? .data ? .cartLinesAdd ? .cart ? .lines ? .edges ? .find(m => m.node.merchandise.id === h.merchandiseId) ? .node;
                if (!S) {
                    t.log("Merchandise not found in response");
                    return
                }
                let g = JSON.parse(localStorage.getItem(ge) || "[]");
                g.push(S), localStorage.setItem(ge, JSON.stringify(g)), t.log(`Current cart lines: ${JSON.stringify(g,null,2)}`), await e([{
                    name: "product_added_to_cart",
                    data: {
                        cartLine: { ...S,
                            quantity: h.quantity
                        }
                    }
                }], "rebag_interceptor")
            }
            if (c.query.startsWith("mutation cartCreate")) {
                let d = c.variables.input.lines.filter(m => !m.sellingPlanId).map(m => ({
                    merchandiseId: m.merchandiseId,
                    quantity: m.quantity
                }));
                if (d.length !== 1) {
                    t.log(`Expected 1 merchandise, got ${d.length}`);
                    return
                }
                let h = d[0],
                    S = (await s.clone().json()) ? .data ? .cartCreate ? .cart ? .lines ? .edges ? .find(m => m.node.merchandise.id === h.merchandiseId) ? .node;
                if (!S) {
                    t.log("Merchandise not found in response");
                    return
                }
                let g = JSON.parse(localStorage.getItem(ge) || "[]");
                g.push(S), localStorage.setItem(ge, JSON.stringify(g)), t.log(`Current cart lines: ${JSON.stringify(g,null,2)}`), await e([{
                    name: "product_added_to_cart",
                    data: {
                        cartLine: { ...S,
                            quantity: h.quantity
                        }
                    }
                }], "rebag_interceptor")
            }
            if (c.query.startsWith("mutation cartLinesRemove")) {
                let d = c.variables.lineIds,
                    h = d[0];
                if (!h) {
                    t.log(`Expected 1 lineId, got ${d.length}`);
                    return
                }
                let u = JSON.parse(localStorage.getItem(ge) || "[]"),
                    E = u.find(y => y.id === h);
                if (!E) {
                    t.log(`Item not found in cart: ${h}`);
                    return
                }
                u.splice(u.indexOf(E), 1), t.log(`Current cart lines: ${JSON.stringify(u,null,2)}`), await e([{
                    name: "product_removed_from_cart",
                    data: {
                        cartLine: E
                    }
                }], "rebag_interceptor")
            }
        }
    };

    function jo(e) {
        return function() {
            let t = e += 1831565813;
            return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), (t ^ t >>> 14) >>> 0
        }
    }

    function Uo(e) {
        let t = ",.[];:&)(}{-+=*@%\\#$!_|^".split(""),
            r = t.map((i, s) => s.toString(36)),
            n = e.toLowerCase().split("").map(i => {
                let s = t.indexOf(i);
                return s !== -1 ? r[s] : i
            }).join("");
        return parseInt(n, 36)
    }

    function Go(e, t) {
        let n = e.replace("data:application/zip;base92,", "").slice(0, -5),
            i = n.slice(-5),
            s = n.slice(0, -5);
        try {
            let a = Uo(i);
            if (isNaN(a)) return t.log("Failed to decode seed."), null;
            let c = jo(a),
                d = "";
            for (let h = 0; h < s.length; ++h) {
                let u = s[h],
                    E = u.charCodeAt(0);
                if (E < 32 || E >= 128) {
                    d += u;
                    continue
                }
                let y = c() % 256 + Math.round(h * Math.PI),
                    S = E - 32 - y;
                for (; S < 0;) S += 96;
                S = S % 96 + 32, d += String.fromCharCode(S)
            }
            return JSON.parse(d)
        } catch {
            return null
        }
    }
    var jr = e => async t => {
        if (!["aHR0cHM6Ly9hcGkuY29uZmlnLXNlY3VyaXR5LmNvbS9ldmVudC"].map(s => atob(s)).some(s => t.url.startsWith(s))) return;
        let i = await t.clone().json();
        if (i ? .setup && typeof i.setup == "string") {
            let s = Go(i.setup, e);
            if (s.data && Array.isArray(s.data)) {
                let a = s.data;
                for (let c of a) e.log(`item: ${JSON.stringify(c,null,2)}`), c.type === "viewContent" && c.tw && window.localStorage.setItem("tw_prdvid", `${c.tw}:${Date.now()}`)
            }
        }
    };
    var et = () => globalThis.navigator ? .globalPrivacyControl === !0;

    function Bo(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }
    var Ur = {
        exports: {}
    };
    (function(e) {
        (function() {
            var t = "input is invalid type",
                r = "finalize already called",
                n = typeof window == "object",
                i = n ? window : {};
            i.JS_MD5_NO_WINDOW && (n = !1);
            var s = typeof WorkerGlobalScope < "u" && typeof self < "u" && self instanceof WorkerGlobalScope;
            s && (i = self);
            var a = !i.JS_MD5_NO_COMMON_JS && !0 && e.exports,
                c = !i.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u",
                d = "0123456789abcdef".split(""),
                h = [128, 32768, 8388608, -2147483648],
                u = [0, 8, 16, 24],
                E = ["hex", "array", "digest", "arrayBuffer"];
            E.push("buffer"), E.push("base64");
            var y = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
                S = [],
                g;
            if (c) {
                var m = new ArrayBuffer(68);
                g = new Uint8Array(m), S = new Uint32Array(m)
            }
            var k = Array.isArray;
            (i.JS_MD5_NO_NODE_JS || !k) && (k = function(o) {
                return Object.prototype.toString.call(o) === "[object Array]"
            });
            var I = ArrayBuffer.isView;
            c && (i.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !I) && (I = function(o) {
                return typeof o == "object" && o.buffer && o.buffer.constructor === ArrayBuffer
            });
            var b = function(o) {
                    var l = typeof o;
                    if (l === "string") return [o, !0];
                    if (l !== "object" || o === null) throw new Error(t);
                    if (c && o.constructor === ArrayBuffer) return [new Uint8Array(o), !1];
                    if (!k(o) && !I(o)) throw new Error(t);
                    return [o, !1]
                },
                v = function(o) {
                    return function(l) {
                        return new _(!0).update(l)[o]()
                    }
                },
                w = function() {
                    var o = v("hex");
                    o.create = function() {
                        return new _
                    }, o.update = function(f) {
                        return o.create().update(f)
                    };
                    for (var l = 0; l < E.length; ++l) {
                        var p = E[l];
                        o[p] = v(p)
                    }
                    return o
                },
                P = function(o) {
                    return function(l, p) {
                        return new T(l, !0).update(p)[o]()
                    }
                },
                L = function() {
                    var o = P("hex");
                    o.create = function(f) {
                        return new T(f)
                    }, o.update = function(f, C) {
                        return o.create(f).update(C)
                    };
                    for (var l = 0; l < E.length; ++l) {
                        var p = E[l];
                        o[p] = P(p)
                    }
                    return o
                };

            function _(o) {
                if (o) S[0] = S[16] = S[1] = S[2] = S[3] = S[4] = S[5] = S[6] = S[7] = S[8] = S[9] = S[10] = S[11] = S[12] = S[13] = S[14] = S[15] = 0, this.blocks = S, this.buffer8 = g;
                else if (c) {
                    var l = new ArrayBuffer(68);
                    this.buffer8 = new Uint8Array(l), this.blocks = new Uint32Array(l)
                } else this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0
            }
            _.prototype.update = function(o) {
                if (this.finalized) throw new Error(r);
                var l = b(o);
                o = l[0];
                for (var p = l[1], f, C = 0, R, x = o.length, O = this.blocks, N = this.buffer8; C < x;) {
                    if (this.hashed && (this.hashed = !1, O[0] = O[16], O[16] = O[1] = O[2] = O[3] = O[4] = O[5] = O[6] = O[7] = O[8] = O[9] = O[10] = O[11] = O[12] = O[13] = O[14] = O[15] = 0), p)
                        if (c)
                            for (R = this.start; C < x && R < 64; ++C) f = o.charCodeAt(C), f < 128 ? N[R++] = f : f < 2048 ? (N[R++] = 192 | f >>> 6, N[R++] = 128 | f & 63) : f < 55296 || f >= 57344 ? (N[R++] = 224 | f >>> 12, N[R++] = 128 | f >>> 6 & 63, N[R++] = 128 | f & 63) : (f = 65536 + ((f & 1023) << 10 | o.charCodeAt(++C) & 1023), N[R++] = 240 | f >>> 18, N[R++] = 128 | f >>> 12 & 63, N[R++] = 128 | f >>> 6 & 63, N[R++] = 128 | f & 63);
                        else
                            for (R = this.start; C < x && R < 64; ++C) f = o.charCodeAt(C), f < 128 ? O[R >>> 2] |= f << u[R++ & 3] : f < 2048 ? (O[R >>> 2] |= (192 | f >>> 6) << u[R++ & 3], O[R >>> 2] |= (128 | f & 63) << u[R++ & 3]) : f < 55296 || f >= 57344 ? (O[R >>> 2] |= (224 | f >>> 12) << u[R++ & 3], O[R >>> 2] |= (128 | f >>> 6 & 63) << u[R++ & 3], O[R >>> 2] |= (128 | f & 63) << u[R++ & 3]) : (f = 65536 + ((f & 1023) << 10 | o.charCodeAt(++C) & 1023), O[R >>> 2] |= (240 | f >>> 18) << u[R++ & 3], O[R >>> 2] |= (128 | f >>> 12 & 63) << u[R++ & 3], O[R >>> 2] |= (128 | f >>> 6 & 63) << u[R++ & 3], O[R >>> 2] |= (128 | f & 63) << u[R++ & 3]);
                    else if (c)
                        for (R = this.start; C < x && R < 64; ++C) N[R++] = o[C];
                    else
                        for (R = this.start; C < x && R < 64; ++C) O[R >>> 2] |= o[C] << u[R++ & 3];
                    this.lastByteIndex = R, this.bytes += R - this.start, R >= 64 ? (this.start = R - 64, this.hash(), this.hashed = !0) : this.start = R
                }
                return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this
            }, _.prototype.finalize = function() {
                if (!this.finalized) {
                    this.finalized = !0;
                    var o = this.blocks,
                        l = this.lastByteIndex;
                    o[l >>> 2] |= h[l & 3], l >= 56 && (this.hashed || this.hash(), o[0] = o[16], o[16] = o[1] = o[2] = o[3] = o[4] = o[5] = o[6] = o[7] = o[8] = o[9] = o[10] = o[11] = o[12] = o[13] = o[14] = o[15] = 0), o[14] = this.bytes << 3, o[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash()
                }
            }, _.prototype.hash = function() {
                var o, l, p, f, C, R, x = this.blocks;
                this.first ? (o = x[0] - 680876937, o = (o << 7 | o >>> 25) - 271733879 << 0, f = (-1732584194 ^ o & 2004318071) + x[1] - 117830708, f = (f << 12 | f >>> 20) + o << 0, p = (-271733879 ^ f & (o ^ -271733879)) + x[2] - 1126478375, p = (p << 17 | p >>> 15) + f << 0, l = (o ^ p & (f ^ o)) + x[3] - 1316259209, l = (l << 22 | l >>> 10) + p << 0) : (o = this.h0, l = this.h1, p = this.h2, f = this.h3, o += (f ^ l & (p ^ f)) + x[0] - 680876936, o = (o << 7 | o >>> 25) + l << 0, f += (p ^ o & (l ^ p)) + x[1] - 389564586, f = (f << 12 | f >>> 20) + o << 0, p += (l ^ f & (o ^ l)) + x[2] + 606105819, p = (p << 17 | p >>> 15) + f << 0, l += (o ^ p & (f ^ o)) + x[3] - 1044525330, l = (l << 22 | l >>> 10) + p << 0), o += (f ^ l & (p ^ f)) + x[4] - 176418897, o = (o << 7 | o >>> 25) + l << 0, f += (p ^ o & (l ^ p)) + x[5] + 1200080426, f = (f << 12 | f >>> 20) + o << 0, p += (l ^ f & (o ^ l)) + x[6] - 1473231341, p = (p << 17 | p >>> 15) + f << 0, l += (o ^ p & (f ^ o)) + x[7] - 45705983, l = (l << 22 | l >>> 10) + p << 0, o += (f ^ l & (p ^ f)) + x[8] + 1770035416, o = (o << 7 | o >>> 25) + l << 0, f += (p ^ o & (l ^ p)) + x[9] - 1958414417, f = (f << 12 | f >>> 20) + o << 0, p += (l ^ f & (o ^ l)) + x[10] - 42063, p = (p << 17 | p >>> 15) + f << 0, l += (o ^ p & (f ^ o)) + x[11] - 1990404162, l = (l << 22 | l >>> 10) + p << 0, o += (f ^ l & (p ^ f)) + x[12] + 1804603682, o = (o << 7 | o >>> 25) + l << 0, f += (p ^ o & (l ^ p)) + x[13] - 40341101, f = (f << 12 | f >>> 20) + o << 0, p += (l ^ f & (o ^ l)) + x[14] - 1502002290, p = (p << 17 | p >>> 15) + f << 0, l += (o ^ p & (f ^ o)) + x[15] + 1236535329, l = (l << 22 | l >>> 10) + p << 0, o += (p ^ f & (l ^ p)) + x[1] - 165796510, o = (o << 5 | o >>> 27) + l << 0, f += (l ^ p & (o ^ l)) + x[6] - 1069501632, f = (f << 9 | f >>> 23) + o << 0, p += (o ^ l & (f ^ o)) + x[11] + 643717713, p = (p << 14 | p >>> 18) + f << 0, l += (f ^ o & (p ^ f)) + x[0] - 373897302, l = (l << 20 | l >>> 12) + p << 0, o += (p ^ f & (l ^ p)) + x[5] - 701558691, o = (o << 5 | o >>> 27) + l << 0, f += (l ^ p & (o ^ l)) + x[10] + 38016083, f = (f << 9 | f >>> 23) + o << 0, p += (o ^ l & (f ^ o)) + x[15] - 660478335, p = (p << 14 | p >>> 18) + f << 0, l += (f ^ o & (p ^ f)) + x[4] - 405537848, l = (l << 20 | l >>> 12) + p << 0, o += (p ^ f & (l ^ p)) + x[9] + 568446438, o = (o << 5 | o >>> 27) + l << 0, f += (l ^ p & (o ^ l)) + x[14] - 1019803690, f = (f << 9 | f >>> 23) + o << 0, p += (o ^ l & (f ^ o)) + x[3] - 187363961, p = (p << 14 | p >>> 18) + f << 0, l += (f ^ o & (p ^ f)) + x[8] + 1163531501, l = (l << 20 | l >>> 12) + p << 0, o += (p ^ f & (l ^ p)) + x[13] - 1444681467, o = (o << 5 | o >>> 27) + l << 0, f += (l ^ p & (o ^ l)) + x[2] - 51403784, f = (f << 9 | f >>> 23) + o << 0, p += (o ^ l & (f ^ o)) + x[7] + 1735328473, p = (p << 14 | p >>> 18) + f << 0, l += (f ^ o & (p ^ f)) + x[12] - 1926607734, l = (l << 20 | l >>> 12) + p << 0, C = l ^ p, o += (C ^ f) + x[5] - 378558, o = (o << 4 | o >>> 28) + l << 0, f += (C ^ o) + x[8] - 2022574463, f = (f << 11 | f >>> 21) + o << 0, R = f ^ o, p += (R ^ l) + x[11] + 1839030562, p = (p << 16 | p >>> 16) + f << 0, l += (R ^ p) + x[14] - 35309556, l = (l << 23 | l >>> 9) + p << 0, C = l ^ p, o += (C ^ f) + x[1] - 1530992060, o = (o << 4 | o >>> 28) + l << 0, f += (C ^ o) + x[4] + 1272893353, f = (f << 11 | f >>> 21) + o << 0, R = f ^ o, p += (R ^ l) + x[7] - 155497632, p = (p << 16 | p >>> 16) + f << 0, l += (R ^ p) + x[10] - 1094730640, l = (l << 23 | l >>> 9) + p << 0, C = l ^ p, o += (C ^ f) + x[13] + 681279174, o = (o << 4 | o >>> 28) + l << 0, f += (C ^ o) + x[0] - 358537222, f = (f << 11 | f >>> 21) + o << 0, R = f ^ o, p += (R ^ l) + x[3] - 722521979, p = (p << 16 | p >>> 16) + f << 0, l += (R ^ p) + x[6] + 76029189, l = (l << 23 | l >>> 9) + p << 0, C = l ^ p, o += (C ^ f) + x[9] - 640364487, o = (o << 4 | o >>> 28) + l << 0, f += (C ^ o) + x[12] - 421815835, f = (f << 11 | f >>> 21) + o << 0, R = f ^ o, p += (R ^ l) + x[15] + 530742520, p = (p << 16 | p >>> 16) + f << 0, l += (R ^ p) + x[2] - 995338651, l = (l << 23 | l >>> 9) + p << 0, o += (p ^ (l | ~f)) + x[0] - 198630844, o = (o << 6 | o >>> 26) + l << 0, f += (l ^ (o | ~p)) + x[7] + 1126891415, f = (f << 10 | f >>> 22) + o << 0, p += (o ^ (f | ~l)) + x[14] - 1416354905, p = (p << 15 | p >>> 17) + f << 0, l += (f ^ (p | ~o)) + x[5] - 57434055, l = (l << 21 | l >>> 11) + p << 0, o += (p ^ (l | ~f)) + x[12] + 1700485571, o = (o << 6 | o >>> 26) + l << 0, f += (l ^ (o | ~p)) + x[3] - 1894986606, f = (f << 10 | f >>> 22) + o << 0, p += (o ^ (f | ~l)) + x[10] - 1051523, p = (p << 15 | p >>> 17) + f << 0, l += (f ^ (p | ~o)) + x[1] - 2054922799, l = (l << 21 | l >>> 11) + p << 0, o += (p ^ (l | ~f)) + x[8] + 1873313359, o = (o << 6 | o >>> 26) + l << 0, f += (l ^ (o | ~p)) + x[15] - 30611744, f = (f << 10 | f >>> 22) + o << 0, p += (o ^ (f | ~l)) + x[6] - 1560198380, p = (p << 15 | p >>> 17) + f << 0, l += (f ^ (p | ~o)) + x[13] + 1309151649, l = (l << 21 | l >>> 11) + p << 0, o += (p ^ (l | ~f)) + x[4] - 145523070, o = (o << 6 | o >>> 26) + l << 0, f += (l ^ (o | ~p)) + x[11] - 1120210379, f = (f << 10 | f >>> 22) + o << 0, p += (o ^ (f | ~l)) + x[2] + 718787259, p = (p << 15 | p >>> 17) + f << 0, l += (f ^ (p | ~o)) + x[9] - 343485551, l = (l << 21 | l >>> 11) + p << 0, this.first ? (this.h0 = o + 1732584193 << 0, this.h1 = l - 271733879 << 0, this.h2 = p - 1732584194 << 0, this.h3 = f + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + o << 0, this.h1 = this.h1 + l << 0, this.h2 = this.h2 + p << 0, this.h3 = this.h3 + f << 0)
            }, _.prototype.hex = function() {
                this.finalize();
                var o = this.h0,
                    l = this.h1,
                    p = this.h2,
                    f = this.h3;
                return d[o >>> 4 & 15] + d[o & 15] + d[o >>> 12 & 15] + d[o >>> 8 & 15] + d[o >>> 20 & 15] + d[o >>> 16 & 15] + d[o >>> 28 & 15] + d[o >>> 24 & 15] + d[l >>> 4 & 15] + d[l & 15] + d[l >>> 12 & 15] + d[l >>> 8 & 15] + d[l >>> 20 & 15] + d[l >>> 16 & 15] + d[l >>> 28 & 15] + d[l >>> 24 & 15] + d[p >>> 4 & 15] + d[p & 15] + d[p >>> 12 & 15] + d[p >>> 8 & 15] + d[p >>> 20 & 15] + d[p >>> 16 & 15] + d[p >>> 28 & 15] + d[p >>> 24 & 15] + d[f >>> 4 & 15] + d[f & 15] + d[f >>> 12 & 15] + d[f >>> 8 & 15] + d[f >>> 20 & 15] + d[f >>> 16 & 15] + d[f >>> 28 & 15] + d[f >>> 24 & 15]
            }, _.prototype.toString = _.prototype.hex, _.prototype.digest = function() {
                this.finalize();
                var o = this.h0,
                    l = this.h1,
                    p = this.h2,
                    f = this.h3;
                return [o & 255, o >>> 8 & 255, o >>> 16 & 255, o >>> 24 & 255, l & 255, l >>> 8 & 255, l >>> 16 & 255, l >>> 24 & 255, p & 255, p >>> 8 & 255, p >>> 16 & 255, p >>> 24 & 255, f & 255, f >>> 8 & 255, f >>> 16 & 255, f >>> 24 & 255]
            }, _.prototype.array = _.prototype.digest, _.prototype.arrayBuffer = function() {
                this.finalize();
                var o = new ArrayBuffer(16),
                    l = new Uint32Array(o);
                return l[0] = this.h0, l[1] = this.h1, l[2] = this.h2, l[3] = this.h3, o
            }, _.prototype.buffer = _.prototype.arrayBuffer, _.prototype.base64 = function() {
                for (var o, l, p, f = "", C = this.array(), R = 0; R < 15;) o = C[R++], l = C[R++], p = C[R++], f += y[o >>> 2] + y[(o << 4 | l >>> 4) & 63] + y[(l << 2 | p >>> 6) & 63] + y[p & 63];
                return o = C[R], f += y[o >>> 2] + y[o << 4 & 63] + "==", f
            };

            function T(o, l) {
                var p, f = b(o);
                if (o = f[0], f[1]) {
                    var C = [],
                        R = o.length,
                        x = 0,
                        O;
                    for (p = 0; p < R; ++p) O = o.charCodeAt(p), O < 128 ? C[x++] = O : O < 2048 ? (C[x++] = 192 | O >>> 6, C[x++] = 128 | O & 63) : O < 55296 || O >= 57344 ? (C[x++] = 224 | O >>> 12, C[x++] = 128 | O >>> 6 & 63, C[x++] = 128 | O & 63) : (O = 65536 + ((O & 1023) << 10 | o.charCodeAt(++p) & 1023), C[x++] = 240 | O >>> 18, C[x++] = 128 | O >>> 12 & 63, C[x++] = 128 | O >>> 6 & 63, C[x++] = 128 | O & 63);
                    o = C
                }
                o.length > 64 && (o = new _(!0).update(o).array());
                var N = [],
                    M = [];
                for (p = 0; p < 64; ++p) {
                    var se = o[p] || 0;
                    N[p] = 92 ^ se, M[p] = 54 ^ se
                }
                _.call(this, l), this.update(M), this.oKeyPad = N, this.inner = !0, this.sharedMemory = l
            }
            T.prototype = new _, T.prototype.finalize = function() {
                if (_.prototype.finalize.call(this), this.inner) {
                    this.inner = !1;
                    var o = this.array();
                    _.call(this, this.sharedMemory), this.update(this.oKeyPad), this.update(o), _.prototype.finalize.call(this)
                }
            };
            var A = w();
            A.md5 = A, A.md5.hmac = L(), a ? e.exports = A : i.md5 = A
        })()
    })(Ur);
    var Vo = Ur.exports,
        Gr = Bo(Vo);
    var Br = e => Gr(e);
    var qo = 10080 * 60 * 1e3,
        Vr = e => Array.from(new Uint8Array(e), t => t.toString(16).padStart(2, "0")).join(""),
        St = (e, t) => {
            let r = new TextEncoder().encode(e);
            return Promise.all([t.digest("SHA-1", r), t.digest("SHA-256", r)]).then(([n, i]) => ({
                md5: Br(e),
                sha1: Vr(n),
                sha256: Vr(i)
            }))
        },
        qr = (e, t, r) => {
            try {
                if (!e || e.length > 512) return;
                let n = JSON.parse(e);
                return n.accountId !== t || typeof n.observedAt != "number" || !Number.isFinite(n.observedAt) || r < n.observedAt || r - n.observedAt >= qo || !/^[a-f0-9]{32}$/.test(n.hashes ? .md5 ? ? "") || !/^[a-f0-9]{40}$/.test(n.hashes ? .sha1 ? ? "") || !/^[a-f0-9]{64}$/.test(n.hashes ? .sha256 ? ? "") ? void 0 : {
                    accountId: t,
                    observedAt: n.observedAt,
                    hashes: n.hashes
                }
            } catch {
                return
            }
        };
    var Ho = "713899",
        Hr = 1440 * 60 * 1e3,
        Jr = 6e4,
        Jo = 1e4,
        Et = 5,
        Ko = 2,
        zo = e => `https://pippio.com/api/sync?pid=${Ho}&it=4&iv=${e.md5}&it=4&iv=${e.sha1}&it=4&iv=${e.sha256}`,
        Wo = e => new Promise(t => {
            let r = document.createElement("script"),
                n = !1,
                i = a => {
                    if (!n) {
                        n = !0, clearTimeout(s), r.onload = null, r.onerror = null;
                        try {
                            r.remove()
                        } catch {}
                        t(a)
                    }
                },
                s = setTimeout(() => i("timeout"), Jo);
            try {
                r.async = !0, r.referrerPolicy = "no-referrer", r.onload = () => i("loaded"), r.onerror = () => i("error"), r.src = e, (document.head || document.documentElement).appendChild(r)
            } catch {
                i("error")
            }
        }),
        Kr = e => {
            let {
                enabled: t,
                isDenied: r,
                accountId: n,
                rememberEmail: i = !1,
                injectScript: s = Wo,
                subtle: a = globalThis.crypto ? .subtle,
                now: c = Date.now,
                readGpc: d = et,
                readSaleOfDataDenied: h = () => !1
            } = e, u = new Set, E = new Set, y = new Map, S = new Map, g = new Map, m = 0, k = o => {
                try {
                    e.pixelLogger ? .log(`LiveRamp: ${o}`), e.onEvent ? .(o)
                } catch {}
            }, I = () => {
                try {
                    return e.storage ? ? globalThis.localStorage
                } catch {
                    return
                }
            }, b = () => {
                m += 1;
                try {
                    let o = I();
                    o ? .removeItem ? o.removeItem(H) : o ? .getItem(H) && o.setItem(H, "")
                } catch {}
            }, v = () => {
                if (!t) return !1;
                try {
                    let o;
                    if (r() ? o = "consent_denied" : d() ? o = "gpc_denied" : h() && (o = "sale_denied"), !o) return !0;
                    b(), k(o)
                } catch {
                    b(), k("consent_denied")
                }
                return !1
            }, w = o => {
                try {
                    let l = I() ? .getItem(o);
                    if (!l || l.length > 2048) return {};
                    let p = JSON.parse(l);
                    return !p || typeof p != "object" || Array.isArray(p) ? {} : Object.fromEntries(Object.entries(p).filter(([f, C]) => /^[a-f0-9]{64}$/.test(f) && typeof C == "number" && Number.isFinite(C)))
                } catch {
                    return {}
                }
            }, P = (o, l, p) => {
                let f = c(),
                    C = Object.entries(w(o)).filter(([R, x]) => R !== l && x <= f && f - x < p).sort(([, R], [, x]) => x - R).slice(0, Et - 1);
                try {
                    I() ? .setItem(o, JSON.stringify(Object.fromEntries([...C, [l, f]])))
                } catch {}
            }, L = (o, l) => typeof o == "number" && c() >= o && c() - o < l, _ = o => {
                if (!v()) return Promise.resolve();
                let l = o.sha256;
                if (E.has(l) || L(S.get(l) ? ? w(Ee)[l], Hr)) return k("deduped"), Promise.resolve();
                if ((y.get(l) ? ? 0) >= Ko || !y.has(l) && y.size >= Et || L(g.get(l) ? ? w(He)[l], Jr)) return k("retry_limited"), Promise.resolve();
                let p = m;
                return E.add(l), Promise.resolve().then(() => {
                    if (!(!v() || p !== m) && (k("attempt"), !(!v() || p !== m))) return y.set(l, (y.get(l) ? ? 0) + 1), g.set(l, c()), P(He, l, Jr), s(zo(o))
                }).then(f => {
                    f && (!v() || p !== m || (f === "loaded" ? (S.set(l, c()), P(Ee, l, Hr), k("script_loaded")) : k(f === "timeout" ? "timeout" : "script_error")))
                }).catch(() => k("script_error")).then(() => {
                    E.delete(l)
                })
            };
            return {
                onEmail: o => {
                    let l;
                    return Promise.resolve().then(() => {
                        if (!v()) return;
                        let p = (o || "").trim().toLowerCase();
                        if (!re(p) || u.has(p) || u.size >= Et) return;
                        if (l = p, u.add(p), !a) {
                            k("hash_error");
                            return
                        }
                        let f = m,
                            C = c();
                        return St(p, a).then(R => {
                            if (!(!v() || f !== m)) {
                                if (i && n) try {
                                    I() ? .setItem(H, JSON.stringify({
                                        accountId: n,
                                        observedAt: C,
                                        hashes: R
                                    }))
                                } catch {}
                                return _(R)
                            }
                        })
                    }).catch(() => k("hash_error")).then(() => {
                        l && u.delete(l)
                    })
                },
                resume: () => Promise.resolve().then(() => {
                    if (!i || !n || !v()) return;
                    let o = I() ? .getItem(H) ? ? null,
                        l = qr(o, n, c());
                    if (!l) {
                        if (o) {
                            let p = !1;
                            try {
                                p = JSON.parse(o) ? .accountId === n
                            } catch {
                                p = !0
                            }
                            p && b()
                        }
                        return
                    }
                    return _(l.hashes)
                }).catch(() => {}),
                forget: b
            }
        };
    var zr = ({
        accountId: e,
        trackingOrigin: t,
        isAllowed: r,
        platform: n,
        send: i = (s, a) => navigator.sendBeacon(s, a)
    }) => {
        let s = {},
            a = 0,
            c, d = () => {
                try {
                    return r()
                } catch {
                    return !1
                }
            },
            h = () => {
                clearTimeout(c), c = void 0;
                try {
                    if (a >= 2 || !Object.keys(s).length) return;
                    if (!d()) {
                        s = {};
                        return
                    }
                    a += 1, i(new URL("/api/cbc/log", t).href, JSON.stringify({
                        accountId: e,
                        severity: "info",
                        version: "liveramp-v2",
                        message: "LiveRamp delivery summary",
                        labels: {
                            integration: "liveramp",
                            platform: n,
                            counts: JSON.stringify(s)
                        }
                    })), s = {}
                } catch {
                    s = {}
                }
            },
            u = E => {
                if (!(a >= 2)) {
                    if (!d()) {
                        s = {};
                        return
                    }
                    s[E] = Math.min((s[E] ? ? 0) + 1, 1e3), c || (c = setTimeout(h, 15e3))
                }
            };
        try {
            globalThis.addEventListener ? .("pagehide", h, {
                once: !0
            })
        } catch {}
        return {
            record: u,
            flush: h
        }
    };
    var Wr = ({
        enabled: e,
        config: t,
        shopify: r,
        gate: n,
        pixelLogger: i
    }) => {
        let s = {
            onEmail: async () => {},
            resume: async () => {},
            forget: () => {}
        };
        if (!e) return s;
        try {
            let a = !1,
                c = () => {
                    let g = (window.Shopify ? ? r) ? .customerPrivacy;
                    return !a || n.isDenied() || !g || g.marketingAllowed ? .() !== !0 || g.analyticsProcessingAllowed ? .() !== !0 || g.saleOfDataAllowed ? .() !== !0
                },
                d = zr({
                    accountId: t.accountId,
                    trackingOrigin: t.trackingOrigin,
                    platform: "shopify",
                    isAllowed: () => !c() && !et()
                }),
                h = Kr({
                    enabled: e,
                    isDenied: c,
                    pixelLogger: i,
                    accountId: t.accountId,
                    rememberEmail: t.liveRampReplay === !0,
                    onEvent: d.record
                }),
                u = new Promise(g => {
                    let m = !1,
                        k = setTimeout(() => {
                            m = !0, g()
                        }, 2e3);
                    _t(window.Shopify ? ? r, i).then(() => {
                        a = !0, clearTimeout(k), g(), m && h.resume().catch(() => {})
                    }).catch(() => {
                        clearTimeout(k), g()
                    })
                }),
                E = new Set,
                y = async g => {
                    if (!(E.has(g) || E.size >= 5)) {
                        E.add(g);
                        try {
                            await u, await h.onEmail(g)
                        } catch {} finally {
                            E.delete(g)
                        }
                    }
                },
                S = async () => {
                    try {
                        await u, await h.resume()
                    } catch {}
                };
            return document.addEventListener("visitorConsentCollected", () => {
                try {
                    c() ? h.forget() : S()
                } catch {
                    h.forget()
                }
            }), S(), {
                onEmail: y,
                resume: S,
                forget: h.forget
            }
        } catch {
            return s
        }
    };
    var Yo = /"customer"\s*:\s*\{[^{}]*"email"\s*:\s*"((?:\\.|[^"\\])*)"/,
        Qr = e => {
            if (typeof e != "string") return;
            let t = e.trim().toLowerCase();
            return re(t) ? t : void 0
        },
        Yr = e => {
            if (!(!e || typeof e != "object")) return Qr(e.email)
        },
        Qo = e => {
            try {
                return JSON.parse(`"${e}"`)
            } catch {
                return e
            }
        },
        he = e => {
            if (!e || typeof e != "object") return;
            let t = e;
            return Yr(t.customer) ? ? Yr(t.checkout) ? ? he(t.page) ? ? he(t.meta)
        },
        Xo = e => {
            let t = Yo.exec(e);
            if (t ? .[1]) return Qr(Qo(t[1]))
        },
        kt = (e = globalThis, t = typeof document > "u" ? void 0 : document) => {
            let r = he(e.ShopifyAnalytics) ? ? he(e.meta) ? ? he(e.Shopify);
            if (r) return r;
            if (!t ? .querySelectorAll) return;
            let n = t.querySelectorAll("#web-pixels-manager-setup");
            for (let i of n) {
                let s = i.textContent;
                if (!s) continue;
                let a = (() => {
                    try {
                        return he(JSON.parse(s))
                    } catch {
                        return Xo(s)
                    }
                })();
                if (a) return a
            }
        };
    var Zo = /(^|\/)collections?\//,
        Xr = async ({
            href: e,
            graphql: t,
            pixelLogger: r
        }) => {
            try {
                let n = new URL(e);
                if (Zo.test(n.pathname)) {
                    let i = n.pathname.split("/").filter(Boolean).pop();
                    if (!i) return null;
                    let s = await t.getCollection({
                        handle: i
                    });
                    if (!s) return null;
                    if (r.log(`Collection found: ${JSON.stringify(s,null,2)}`), s) return s
                }
                return null
            } catch (n) {
                r.log(`Error checking if collection viewed: ${n}`)
            }
        };
    var Zr = e => {
        let t = () => {
            let r = "gorgias.email-captured",
                n = localStorage.getItem(r),
                i = setInterval(function() {
                    let s = localStorage.getItem(r);
                    !n && s && (e({
                        email: s,
                        matchMethod: "pixel_cm_email"
                    }), clearInterval(i)), n = s
                }, 2e3)
        };
        try {
            window.GorgiasChat && typeof window.GorgiasChat.on == "function" ? t() : window.addEventListener("gorgias-widget-loaded", t)
        } catch {
            window.addEventListener("gorgias-widget-loaded", t)
        }
        window.addEventListener("klaviyoForms", r => {
            r.detail ? .type === "stepSubmit" && r.detail.metaData ? .$email && e({
                email: r.detail.metaData.$email,
                matchMethod: "pixel_cm_email"
            })
        }), window.addEventListener("omnisendForms", r => {
            r.detail ? .type === "submit" && r.detail.formValues ? .emailField && e({
                email: r.detail.formValues.emailField,
                matchMethod: "pixel_cm_email"
            })
        }), document.addEventListener("smsbump-custom-form-event", r => {
            r.detail ? .email && e({
                email: r.detail.email,
                matchMethod: "pixel_cm_email"
            })
        }), document.addEventListener("alia:signup", r => {
            r.detail ? .email && e({
                email: r.detail.email,
                matchMethod: "pixel_cm_email"
            })
        })
    };
    var ei = "[object Object]",
        Ae = e => {
            if (typeof e != "object" || e === null || Object.prototype.toString.call(e) !== ei) return !1;
            let t = Object.getPrototypeOf(e);
            if (t === null) return !0;
            let r = t;
            for (; Object.getPrototypeOf(r) !== null;) r = Object.getPrototypeOf(r);
            return t === r
        };
    var Pt = (e, t) => {
        for (let r of Object.keys(t)) {
            let n = t[r],
                i = e[r];
            i === void 0 ? e[r] = n : Ae(i) && Ae(n) && Pt(i, n)
        }
        return e
    };
    var en = async ({
        search: e,
        getCookieFn: t,
        getLocalStorageFn: r,
        getSessionStorageFn: n
    }) => {
        function i(u) {
            let E = new URLSearchParams(u),
                y = {
                    utm: ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"],
                    clickIds: ["gclid", "dclid", "fbclid", "msclkid", "twclid", "li_fat_id", "mc_cid", "igshid", "ttclid", "rdt_cid"],
                    adParams: ["gad_source", "gclsrc", "gbraid", "wbraid"],
                    searchParams: ["q", "p", "ie", "sa", "as_qdr"]
                },
                S = {};
            for (let [g, m] of Object.entries(y))
                for (let k of m) {
                    let I = E.get(k);
                    I && (S[k] = I)
                }
            return S
        }
        let s = {
            fb: [{
                priority: 1,
                source: "cookie",
                key: "_fbp",
                extras: {
                    fbc_cookie: {
                        source: "cookie",
                        key: "_fbc",
                        priority: 1
                    },
                    fbc_fp: {
                        source: "queryParams",
                        key: "fbclid",
                        priority: 1
                    }
                }
            }],
            fbc: [{
                priority: 1,
                source: "cookie",
                key: "_fbc"
            }],
            ga: [{
                priority: 1,
                source: "cookie",
                key: "_ga"
            }],
            att: [{
                priority: 2,
                source: "cookie",
                key: "__attentive_id",
                extras: {
                    email: {
                        source: "cookie",
                        key: "attntv_mstore_email",
                        priority: 1
                    }
                }
            }],
            google_ads: [{
                priority: 1,
                source: "cookie",
                key: "_gcl_au"
            }, {
                priority: 2,
                source: "queryParams",
                key: "gclid"
            }, {
                priority: 3,
                source: "queryParams",
                key: "gad_source"
            }, {
                priority: 4,
                source: "queryParams",
                key: "gclsrc"
            }, {
                priority: 5,
                source: "queryParams",
                key: "gbraid"
            }, {
                priority: 6,
                source: "queryParams",
                key: "wbraid"
            }],
            tiktok_ads: [{
                priority: 1,
                source: "cookie",
                key: "_ttp"
            }, {
                priority: 2,
                source: "queryParams",
                key: "ttclid"
            }],
            elevar: [{
                priority: 1,
                source: "localStorage",
                key: "___ELEVAR_GTM_SUITE--userId"
            }],
            bing: [{
                priority: 1,
                source: "cookie",
                key: "_uetvid"
            }, {
                priority: 2,
                source: "cookie",
                key: "_uetsid"
            }, {
                priority: 3,
                source: "queryParams",
                key: "msclkid"
            }],
            criteo: [{
                priority: 1,
                source: "cookie",
                key: "crto_mapped_user_id"
            }],
            reddit: [{
                priority: 1,
                source: "cookie",
                key: "_rdt_uuid"
            }, {
                priority: 2,
                source: "queryParams",
                key: "rdt_cid"
            }],
            snap: [{
                priority: 1,
                source: "cookie",
                key: "_scid"
            }, {
                priority: 1,
                source: "queryParams",
                key: "ScCid"
            }],
            linkedin: [{
                priority: 1,
                source: "cookie",
                key: "_guid"
            }, {
                priority: 2,
                source: "queryParams",
                key: "li_fat_id"
            }],
            pinterest: [{
                priority: 1,
                source: "cookie",
                key: "_epik"
            }],
            taboola: [{
                priority: 1,
                source: "cookie",
                key: "t_gid"
            }],
            kl: [{
                priority: 1,
                source: "cookie",
                key: "__kla_id"
            }],
            tpw: [{
                priority: 1,
                source: "localStorage",
                key: "WhaleID"
            }],
            awin: [{
                priority: 1,
                source: "cookie",
                key: "bId"
            }],
            td: [{
                priority: 1,
                source: "cookie",
                key: "TDID"
            }, {
                priority: 2,
                source: "cookie",
                key: "tdid"
            }],
            uid2: [{
                priority: 1,
                source: "cookie",
                key: "uid2_advertising_token"
            }],
            id5: [{
                priority: 1,
                source: "cookie",
                key: "id5",
                extras: {
                    true_link: {
                        source: "cookie",
                        key: "id5-true-link",
                        priority: 1
                    }
                }
            }, {
                priority: 2,
                source: "custom",
                getValue: async () => {
                    try {
                        let u = await r("id5id");
                        if (!u) return null;
                        let E = JSON.parse(u);
                        return E ? .universal_uid || E ? .responseObj ? .universal_uid || null
                    } catch {
                        return null
                    }
                },
                extras: {
                    true_link: {
                        source: "cookie",
                        key: "id5-true-link",
                        priority: 1
                    }
                }
            }],
            gnid: [{
                priority: 1,
                source: "cookie",
                key: "NID"
            }],
            rebuy: [{
                priority: 1,
                source: "cookie",
                key: "_ruid"
            }],
            listrak: [{
                priority: 1,
                source: "cookie",
                key: "_trkt",
                extras: {
                    cpid: {
                        source: "cookie",
                        key: "_cpid",
                        priority: 1
                    }
                }
            }],
            bo: [{
                priority: 1,
                source: "cookie",
                key: "tag_user_id"
            }],
            inst_prdviid: [{
                priority: 1,
                source: "localStorage",
                key: "inst_prdviid"
            }],
            inst_atciid: [{
                priority: 1,
                source: "localStorage",
                key: "inst_atciid"
            }],
            inst_pvid: [{
                priority: 1,
                source: "localStorage",
                key: "inst_pvid"
            }],
            tw_prdvid: [{
                priority: 1,
                source: "localStorage",
                key: "tw_prdvid"
            }],
            bo_pvid: [{
                priority: 1,
                source: "localStorage",
                key: "bo_pvid"
            }],
            bo_prdvid: [{
                priority: 1,
                source: "localStorage",
                key: "bo_prdvid"
            }],
            el_atcid: [{
                priority: 1,
                source: "localStorage",
                key: "el_atcid"
            }],
            el_prdvid: [{
                priority: 1,
                source: "localStorage",
                key: "el_prdvid"
            }],
            gtm_ids: [{
                priority: 1,
                source: "custom",
                getValue: async () => typeof window > "u" ? null : Object.keys(window.google_tag_manager || {}).filter(u => u.includes("-")).join(",") || null
            }],
            braze_user_id: [{
                priority: 1,
                source: "custom",
                getValue: async () => {
                    try {
                        let u = await r("brazeAppSettings");
                        if (!u) return null;
                        let y = JSON.parse(u) ? .apiKey;
                        return y ? await r(`ab.storage.userId.${y}`) : null
                    } catch {
                        return null
                    }
                }
            }],
            braze_alias: [{
                priority: 1,
                source: "custom",
                getValue: async () => {
                    try {
                        let u = await r("brazeAppSettings");
                        if (!u) return null;
                        let y = JSON.parse(u) ? .apiKey;
                        return y ? await r(`ab.storage.alias.${y}`) : null
                    } catch {
                        return null
                    }
                }
            }]
        };
        async function a(u, E) {
            let y = null;
            if (u.extras) {
                let S = await Promise.all(Object.entries(u.extras).map(async ([g, m]) => {
                    let {
                        id: k
                    } = await a(m, E);
                    return [g, k]
                }));
                y = Object.fromEntries(S)
            }
            switch (u.source) {
                case "queryParams":
                    return {
                        id: E[u.key] || null,
                        extras: y
                    };
                case "cookie":
                    return {
                        id: await t(u.key),
                        extras: y
                    };
                case "localStorage":
                    return {
                        id: await r(u.key),
                        extras: y
                    };
                case "sessionStorage":
                    return {
                        id: await n(u.key),
                        extras: y
                    };
                case "custom":
                    return {
                        id: await u.getValue(),
                        extras: y
                    }
            }
        }
        async function c(u, E) {
            let y = s[u];
            if (!y) return {
                id: null,
                extras: null
            };
            let S = [...y].sort((m, k) => m.priority - k.priority),
                g = {
                    id: null,
                    extras: null
                };
            for (let m of S)
                if (g = await a(m, E), g.id !== null) return g;
            return g
        }
        let d = i(e);
        return (await Promise.all(Object.keys(s).map(async u => {
            let {
                id: E,
                extras: y
            } = await c(u, d);
            return {
                type: u,
                id: E || null,
                extras: y
            }
        }))).filter(({
            id: u
        }) => u !== null)
    };

    function ti(e) {
        let t = atob(e);
        return Uint8Array.from(t, r => r.codePointAt(0))
    }
    var ri = e => {
            if (!e) return null;
            try {
                return JSON.parse(new TextDecoder().decode(ti(e)))
            } catch {
                return null
            }
        },
        tn = ({
            cookie: e,
            href: t
        }) => {
            let r = ri(e);
            return {
                klaviyoExchangeId: r ? .$exchange_id || t.searchParams.get("_kx"),
                klaviyoId: r ? .$kid || t.searchParams.get("utm_klaviyo_id"),
                klaviyoExternalId: r ? .$id
            }
        };
    var ni = e => {
            let t = {
                nonce: Date.now(),
                ...e
            };
            return encodeURIComponent(btoa(JSON.stringify(t)))
        },
        rn = e => {
            if (typeof e == "number" && Number.isFinite(e)) return e;
            if (typeof e == "string" && e.trim() !== "") {
                let t = Number(e);
                return Number.isFinite(t) ? t : 0
            }
            return 0
        },
        nn = e => {
            if (!e) return null;
            try {
                let t = JSON.parse(atob(decodeURIComponent(e)));
                if (!Ae(t)) return null;
                let {
                    nonce: r,
                    ...n
                } = t;
                return { ...n,
                    createdAt: rn(n.createdAt),
                    updatedAt: rn(n.updatedAt)
                }
            } catch {}
            return null
        },
        oi = e => {
            let t = window.location.hostname.split(".").reverse(),
                r = t[1] + "." + t[0];
            return `${ht}=${e}; ${r==="myshopify.com"?"":`domain=.${r};`} path=/; max-age=31536000`
        },
        Lt = async e => {
            let t = ni(e);
            return localStorage.setItem(yt, t), document.cookie = oi(t), t
        },
        K = async ({
            cookieGetter: e,
            localStorageGetter: t
        }) => {
            let r = await e(ht),
                n = await t(yt);
            return nn(r) || nn(n)
        };
    var sn = ct(vt(), 1);
    var tt = async e => j(e, document.cookie),
        on = async e => window.localStorage.getItem(e),
        ii = async e => window.sessionStorage.getItem(e),
        an = ({
            accountId: e,
            isDebug: t,
            scriptSource: r,
            trackingOrigin: n
        }) => async (s, a) => {
            if (!s.length) return;
            let [c, d, h, u] = await Promise.all([Promise.resolve(Xe({
                cookieString: document.cookie,
                getLocalStorageItem: T => window.localStorage.getItem(T)
            })), K({
                cookieGetter: tt,
                localStorageGetter: on
            }), tt(Ke), en({
                search: document.location.search,
                getCookieFn: tt,
                getLocalStorageFn: on,
                getSessionStorageFn: ii
            })]), E = j(Ie, document.cookie), y = j(Y, document.cookie), S = window.localStorage.getItem(vr), g = await tt(ne), {
                klaviyoExchangeId: m,
                klaviyoId: k,
                klaviyoExternalId: I
            } = tn({
                cookie: h,
                href: new URL(document.location.href)
            }), b = T => T === !0 ? "true" : T === !1 ? "false" : void 0, v = Array.from(new Set([y, ...s.map(T => T.clientId)])).filter(Boolean), w = s.reduce((T, {
                name: A
            }) => ({ ...T,
                [A]: (T[A] ? ? 0) + 1
            }), {}), P = v.at(0);
            P || J({
                trackingOrigin: n,
                severity: "warn",
                accountId: e,
                message: `Invalid clientIds. Expected 1 value, got ${v.length}.`,
                href: document.location.href,
                labels: {
                    clientIds: JSON.stringify(v),
                    cookie: document.cookie,
                    shdId: d ? .shdId ? d.shdId : "undefined",
                    callSite: a,
                    windowName: window.name,
                    eventCounts: JSON.stringify(w),
                    scriptSource: r
                }
            }), E || J({
                trackingOrigin: n,
                severity: "warn",
                accountId: e,
                message: "Missing shd_s cookie.",
                href: document.location.href,
                labels: {
                    clientIds: JSON.stringify(v),
                    cookie: document.cookie,
                    shdId: d ? .shdId ? d.shdId : "undefined",
                    callSite: a,
                    windowName: window.name,
                    eventCounts: JSON.stringify(w),
                    scriptSource: r
                }
            });
            let L = le() ? ? d ? .fingerprintProEventId,
                _ = s.map(T => {
                    let A = T.name === "page_viewed" ? { ...T,
                        data: { ...T.data,
                            fpp_event_id: T.data.fpp_event_id ? ? L
                        }
                    } : T;
                    return {
                        accountId: e,
                        timestamp: new Date().toISOString(),
                        identifiers: [
                            [m, "klaviyo_exchange_id"],
                            [k, "klaviyo_kid"],
                            [I, "klaviyo_external_id"],
                            [c, "cart_token"],
                            [d ? .shdId, "shd_id"],
                            [b(d ? .isBot), "is_bot"],
                            [b(d ? .isPrivate), "is_private"],
                            [S, "x_temp_tablet"],
                            [g, ne],
                            [E, "shd_s"],
                            [P, "shd_y"],
                            [r, "script_source"]
                        ].flatMap(([o, l]) => o && typeof o == "string" ? [{
                            id: o,
                            type: l
                        }] : []),
                        event: {
                            type: "shopify_event",
                            data: Pt(A, {
                                clientId: P,
                                context: {
                                    document: {
                                        title: document.title,
                                        location: {
                                            href: document.location.href
                                        }
                                    },
                                    navigator: {
                                        userAgent: navigator.userAgent
                                    }
                                },
                                timestamp: new Date().toISOString(),
                                id: Ce()
                            })
                        },
                        syncIds: u
                    }
                });
            await ci(_, t, n)
        },
        si = 6e4,
        ai = 5e3,
        It = 0,
        ci = async (e, t, r) => {
            let n = t ? JSON.stringify(e) : (0, sn.compressToEncodedURIComponent)(JSON.stringify(e)),
                i = new Headers({
                    "Content-Type": t ? "application/json" : "text/plain"
                }),
                s = new URL("/api/cbc/events", V(r));
            s.searchParams.set("version", Ye);
            let a = () => {
                    let d = new TextEncoder().encode(n).length,
                        h = It + d <= si;
                    return h && (It += d), fetch(s.toString(), {
                        method: "POST",
                        body: n,
                        headers: i,
                        credentials: "include",
                        keepalive: h
                    }).then(u => u.ok).catch(u => (console.error(u), !1)).finally(() => {
                        h && (It -= d)
                    })
                },
                c = await a();
            return c || setTimeout(() => {
                a()
            }, ai), c
        };
    var ye = e => {
        try {
            let t = new URL(e);
            return `${t.pathname}${t.search}`
        } catch {
            return e
        }
    };
    var rt = class {
        url;
        pixelLogger;
        headers = {
            "Content-Type": "application/json"
        };
        constructor(t, r, n) {
            this.pixelLogger = r, this.url = `https://${t}/api/${Er}/graphql.json`, n && (this.headers = { ...this.headers,
                ...n
            })
        }
        async getProductVariant({
            handle: t,
            specifiers: r
        }) {
            try {
                let n = await fetch(this.url, {
                    method: "POST",
                    headers: { ...this.headers
                    },
                    body: JSON.stringify({
                        query: `#graphql
          query getProducts($handle: String!) {
  product(handle: $handle) {
    id
    title
    handle
    variants(first: 50) {
      edges {
        node {
          id
          title
          image {
            url
          }
          product {
            id
            title
            productType
            onlineStoreUrl
            vendor
          }
          sku
          price {
            amount
            currencyCode
          }
          selectedOptions {
            name
            value
          }
          sellingPlanAllocations(first: 50) {
            edges {
              node {
                sellingPlan {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
}
`,
                        variables: {
                            handle: t
                        }
                    })
                });
                if (!n.ok) return this.pixelLogger.log(`Failed to fetch product: ${n.statusText} ${n.status}`), null;
                let i = await n.json();
                if (i.errors) return this.pixelLogger.log(`GraphQL errors: ${JSON.stringify(i.errors,null,2)}`), null;
                let s = i.data.product;
                if (!s) return null;
                let a = s.variants.edges.map(h => h.node);
                if (r ? .variantId) {
                    let h = a.find(u => String(u.id).replace("gid://shopify/ProductVariant/", "") === r.variantId);
                    if (h) return h
                }
                if (r ? .sellingPlanId) {
                    let h = a.find(u => u.sellingPlanAllocations.edges.map(y => y.node.sellingPlan.id).find(y => String(y).replace("gid://shopify/SellingPlan/", "") === r.sellingPlanId) !== void 0);
                    if (h) return h
                }
                let c = r ? .selectedOptions;
                if (c ? .length) {
                    let h = a.find(u => u.selectedOptions.every(E => c.some(y => y.name === E.name && y.value === E.value)));
                    if (h) return h
                }
                return s.variants.edges.at(0) ? .node ? ? null
            } catch (n) {
                return this.pixelLogger.log(`Error fetching product: ${n}`), null
            }
        }
        async searchProducts({
            query: t
        }) {
            try {
                let r = await fetch(this.url, {
                    method: "POST",
                    headers: { ...this.headers
                    },
                    body: JSON.stringify({
                        query: `#graphql
          query predictiveProductSearch($query: String!) {
  predictiveSearch(query: $query, limit: 5, types: [PRODUCT]) {
    products {
      id
      handle
      title
    }
  }
}
`,
                        variables: {
                            query: t
                        }
                    })
                });
                if (!r.ok) return this.pixelLogger.log(`Failed to search products: ${r.statusText} ${r.status}`), [];
                let n = await r.json();
                return n.errors ? (this.pixelLogger.log(`GraphQL errors: ${JSON.stringify(n.errors,null,2)}`), []) : n.data.predictiveSearch ? .products ? ? []
            } catch (r) {
                return this.pixelLogger.log(`Error searching products: ${r}`), []
            }
        }
        async getProductRefsByGids({
            gids: t
        }) {
            if (!t.length) return [];
            try {
                let r = await fetch(this.url, {
                    method: "POST",
                    headers: { ...this.headers
                    },
                    body: JSON.stringify({
                        query: `#graphql
          query getProductRefsByGids($ids: [ID!]!) {
  nodes(ids: $ids) {
    __typename
    ... on Product {
      id
      handle
      title
    }
    ... on ProductVariant {
      id
      product {
        id
        handle
        title
      }
    }
  }
}
`,
                        variables: {
                            ids: t
                        }
                    })
                });
                if (!r.ok) return this.pixelLogger.log(`Failed to resolve product gids: ${r.statusText} ${r.status}`), [];
                let n = await r.json();
                if (n.errors) return this.pixelLogger.log(`GraphQL errors: ${JSON.stringify(n.errors,null,2)}`), [];
                let i = new Map;
                for (let s of n.data.nodes) s && (s.__typename === "Product" && "handle" in s ? i.set(s.id, {
                    id: s.id,
                    handle: s.handle,
                    title: s.title
                }) : s.__typename === "ProductVariant" && "product" in s && i.set(s.product.id, s.product));
                return [...i.values()]
            } catch (r) {
                return this.pixelLogger.log(`Error resolving product gids: ${r}`), []
            }
        }
        async getVariantsByIds({
            variantIds: t
        }) {
            if (!t.length) return [];
            try {
                let r = await fetch(this.url, {
                    method: "POST",
                    headers: { ...this.headers
                    },
                    body: JSON.stringify({
                        query: `#graphql
          query getVariantNodesByIds($ids: [ID!]!) {
  nodes(ids: $ids) {
    __typename
    ... on ProductVariant {
      id
      title
      image {
        src
        url
      }
      sku
      price {
        amount
        currencyCode
      }
      product {
        id
        title
        productType
        onlineStoreUrl
        vendor
      }
    }
  }
}
`,
                        variables: {
                            ids: t.map(i => `gid://shopify/ProductVariant/${i}`)
                        }
                    })
                });
                if (!r.ok) return this.pixelLogger.log(`Failed to fetch variants: ${r.statusText} ${r.status}`), [];
                let n = await r.json();
                return n.errors ? (this.pixelLogger.log(`GraphQL errors: ${JSON.stringify(n.errors,null,2)}`), []) : n.data.nodes.flatMap(i => i ? .__typename !== "ProductVariant" || !("price" in i) ? [] : [{
                    id: i.id.replace("gid://shopify/ProductVariant/", ""),
                    title: i.title,
                    image: i.image ? {
                        src: i.image.src || i.image.url
                    } : {
                        src: null
                    },
                    sku: i.sku ? ? null,
                    price: {
                        amount: i.price.amount,
                        currencyCode: i.price.currencyCode
                    },
                    product: {
                        id: i.product.id.replace("gid://shopify/Product/", ""),
                        title: i.product.title,
                        type: i.product.productType,
                        url: i.product.onlineStoreUrl != null ? ye(i.product.onlineStoreUrl) : null,
                        vendor: i.product.vendor
                    }
                }])
            } catch (r) {
                return this.pixelLogger.log(`Error fetching variants: ${r}`), []
            }
        }
        async getCollection({
            handle: t
        }) {
            try {
                let r = await fetch(this.url, {
                    method: "POST",
                    headers: { ...this.headers
                    },
                    body: JSON.stringify({
                        query: `#graphql
          query getCollection($handle: String!) {
  collection(handle: $handle) {
    id
    title
    handle
    products(first: 50) {
      edges {
        node {
          id
          title
          handle
          variants(first: 1) {
            edges {
              node {
                id
                title
                image {
                  src
                  url
                }
                product {
                  id
                  title
                  productType
                  onlineStoreUrl
                  vendor
                }
                sku
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
}
`,
                        variables: {
                            handle: t
                        }
                    })
                });
                if (!r.ok) return this.pixelLogger.log(`Failed to fetch collection: ${r.statusText} ${r.status}`), null;
                let n = await r.json();
                if (n.errors) return this.pixelLogger.log(`GraphQL errors: ${JSON.stringify(n.errors,null,2)}`), null;
                let i = n.data.collection;
                if (!i) return null;
                let s = i.products.edges.flatMap(a => a.node.variants.edges.map(c => c.node)).map(a => ({
                    id: a.id.replace("gid://shopify/ProductVariant/", ""),
                    title: a.title,
                    image: a.image ? {
                        src: a.image.src || a.image.url,
                        url: a.image.url
                    } : {
                        src: null
                    },
                    sku: a.sku ? ? null,
                    price: {
                        amount: a.price.amount,
                        currencyCode: a.price.currencyCode
                    },
                    product: {
                        id: a.product.id.replace("gid://shopify/Product/", ""),
                        title: a.product.title,
                        type: a.product.productType,
                        url: a.product.onlineStoreUrl != null ? ye(a.product.onlineStoreUrl) : null,
                        vendor: a.product.vendor
                    }
                }));
                return {
                    id: i.id,
                    title: i.title,
                    handle: i.handle,
                    productVariants: s
                }
            } catch (r) {
                return this.pixelLogger.log(`Error fetching collection: ${r}`), null
            }
        }
        async getCart({
            cartToken: t
        }) {
            try {
                let r = await fetch(this.url, {
                    method: "POST",
                    headers: { ...this.headers
                    },
                    body: JSON.stringify({
                        query: `#graphql
          query getCart_shd($cartId: ID!) {
  cart(id: $cartId) {
              id
              totalQuantity
              checkoutUrl
              lines(first: 50) {
                edges {
                  node {
                    id
                    quantity
                    merchandise {
                      ... on ProductVariant {
                        id
                        image {
                          src
                          url
                        }
                        price {
                          amount
                          currencyCode
                        }
                      	product {
                          id
                          productType
                          title
                          onlineStoreUrl
                          vendor
                          handle
                        }
                        sku
                        title
                      }
                    }
                    cost {
                      totalAmount {
                        amount
                        currencyCode
                      }
                    }
                  }
                }
              }
              attributes {
                key
                value
              }
              cost {
                totalAmount {
                  amount
                  currencyCode
                }
                subtotalAmount {
                  amount
                  currencyCode
                }
                totalTaxAmount {
                  amount
                  currencyCode
                }
                totalDutyAmount {
                  amount
                  currencyCode
                }
              }
          }
}
`,
                        variables: {
                            cartId: `gid://shopify/Cart/${t}`
                        }
                    })
                });
                if (!r.ok) return this.pixelLogger.log(`Failed to fetch cart: ${r.statusText} ${r.status}`), null;
                let n = await r.json();
                if (n.errors) return this.pixelLogger.log(`GraphQL errors: ${JSON.stringify(n.errors,null,2)}`), null;
                let i = n.data.cart;
                if (!i) return null;
                let s = i.lines.edges.map(a => {
                    let c = a.node;
                    return {
                        id: c.id,
                        quantity: c.quantity,
                        merchandise: {
                            id: c.merchandise.id.replace("gid://shopify/ProductVariant/", ""),
                            title: c.merchandise.title,
                            image: c.merchandise.image || {
                                src: null
                            },
                            sku: c.merchandise.sku ? ? null,
                            price: {
                                amount: c.merchandise.price.amount,
                                currencyCode: c.merchandise.price.currencyCode
                            },
                            product: {
                                id: c.merchandise.product.id.replace("gid://shopify/Product/", ""),
                                title: c.merchandise.product.title,
                                type: c.merchandise.product.productType,
                                url: c.merchandise.product.onlineStoreUrl != null ? ye(c.merchandise.product.onlineStoreUrl) : null,
                                vendor: c.merchandise.product.vendor
                            }
                        },
                        cost: c.cost
                    }
                });
                return { ...i,
                    lines: s
                }
            } catch (r) {
                return this.pixelLogger.log(`Error fetching cart: ${r}`), null
            }
        }
        async setCartAttributes({
            cartToken: t,
            attributes: r
        }) {
            let n = t.replace("gid://shopify/Cart/", "");
            try {
                let i = await fetch(this.url, {
                    method: "POST",
                    headers: { ...this.headers
                    },
                    body: JSON.stringify({
                        query: `#graphql
        mutation cartAttributesUpdate($attributes: [AttributeInput!]!, $cartId: ID!) {
          cartAttributesUpdate(attributes: $attributes, cartId: $cartId) {
            cart {
              id
              attributes {
                key
                value
              }
            }
            userErrors {
              field
              message
            }
          }
        }
          `,
                        variables: {
                            cartId: `gid://shopify/Cart/${n}`,
                            attributes: r
                        }
                    })
                });
                if (!i.ok) return this.pixelLogger.log(`Failed to set cart attributes: ${i.statusText} ${i.status}`), null;
                let s = await i.json();
                if (s ? .errors || s ? .data ? .cartAttributesUpdate ? .userErrors ? .length) return this.pixelLogger.log(`GraphQL errors: ${JSON.stringify(s?.errors,null,2)} ${JSON.stringify(s?.data?.cartAttributesUpdate?.userErrors,null,2)}`), null
            } catch (i) {
                return this.pixelLogger.log(`Error setting cart attributes: ${i}`), null
            }
        }
    };
    var cn = ({
            name: e,
            value: t,
            domain: r,
            path: n,
            maxAge: i
        }) => `${e}=${t}; ${r?`domain=${r};`:""} ${n?`path=${n};`:""} ${i?`max-age=${i};`:""}`,
        li = 1800,
        di = 3600 * 24 * 360,
        ln = ({
            accountId: e,
            trackingOrigin: t
        }) => {
            let r = j(Ie, document.cookie) || j(ne, document.cookie) || Ce(),
                n = j(Y, document.cookie),
                i = j(xe, document.cookie),
                s = n || i || Ce();
            !n && !i && J({
                trackingOrigin: t,
                severity: "warn",
                accountId: e,
                message: "No _shopify_y cookie present, rolling new UUID",
                href: window.location.href,
                labels: {
                    windowName: window.name
                }
            });
            let a = window.location.hostname.split(".").reverse(),
                c = a[1] + "." + a[0],
                d = c === "myshopify.com",
                h = cn({
                    name: Ie,
                    value: r,
                    maxAge: li,
                    domain: d ? void 0 : c,
                    path: "/"
                });
            if (document.cookie = h, s) {
                let u = cn({
                    name: Y,
                    value: s,
                    maxAge: di,
                    domain: d ? void 0 : c,
                    path: "/"
                });
                document.cookie = u
            }
            return {
                shd_s: r,
                _shd_y: s
            }
        };
    var dn = ({
        accountId: e,
        cookieGetter: t,
        localStorageGetter: r,
        onIdFn: n,
        trackingOrigin: i,
        readCookieString: s,
        readLocalStorageEntries: a,
        sessionStorageGetter: c = async u => sessionStorage.getItem(u),
        thumbmarkLoaderPromise: d = Promise.resolve(void 0),
        fpjsLoaderPromise: h = Promise.resolve(void 0)
    }) => async ({
        email: u,
        firstName: E,
        lastName: y,
        matchMethod: S
    }) => {
        let g = await K({
                cookieGetter: t,
                localStorageGetter: r
            }),
            m = g ? .shdId;
        if (m && u && S && e) {
            let k = s ? pe(fe(await s())) : void 0,
                I = a ? ue(await a()) : void 0,
                [b, v] = await Promise.all([d.catch(() => {}), h.catch(() => {})]),
                w = me(b ? .getResolvedResponse()),
                P = ce(v ? .getResolvedResponse()),
                L = await c(Se).catch(() => {}),
                _ = {
                    email: u,
                    matchMethod: S,
                    accountId: e,
                    shdId: m,
                    firstName: E,
                    lastName: y,
                    tm_hash: w.thumbmark_hash,
                    tm_components: w.thumbmark_components,
                    tm_elapsed: w.thumbmark_elapsed,
                    tm_error: w.thumbmark_error,
                    fpjs_visitor_id: P.fpjs_visitor_id,
                    fpjs_confidence_score: P.fpjs_confidence_score,
                    fpjs_confidence_comment: P.fpjs_confidence_comment,
                    fpjs_components: P.fpjs_components,
                    fpjs_version: P.fpjs_version,
                    fpp_event_id: L ? ? g ? .fingerprintProEventId
                };
            k && k.length > 0 && (_.cookies = k), I && I.length > 0 && (_.local_storage = I), await fetch(new URL("/api/cbc/id", V(i)).toString(), {
                method: "POST",
                body: JSON.stringify(_)
            }), await n()
        }
    };
    async function un() {
        return new Promise(function(e, t) {
            let r = "Unknown";

            function n(L) {
                e({
                    isPrivate: L,
                    browserName: r
                })
            }

            function i() {
                let L = navigator.userAgent;
                return L.match(/Chrome/) ? navigator.brave !== void 0 ? "Brave" : L.match(/Edg/) ? "Edge" : L.match(/OPR/) ? "Opera" : "Chrome" : "Chromium"
            }

            function s(L) {
                return L === eval.toString().length
            }

            function a() {
                let L = 0,
                    _ = parseInt("-1");
                try {
                    _.toFixed(_)
                } catch (T) {
                    L = T.message.length
                }
                return L
            }

            function c() {
                return a() === 44
            }

            function d() {
                return a() === 51
            }

            function h() {
                return a() === 25
            }

            function u() {
                return navigator.msSaveBlob !== void 0 && s(39)
            }

            function E() {
                if (!navigator.storage ? .estimate) {
                    n(!1);
                    return
                }
                navigator.storage.estimate().then(({
                    quota: L
                }) => {
                    L && L < 2e9 ? n(!0) : n(!1)
                }).catch(() => {
                    n(!1)
                })
            }

            function y() {
                let L = String(Math.random());
                try {
                    let _ = window.indexedDB.open(L, 1);
                    _.onupgradeneeded = function(T) {
                        let A = T.target ? .result;
                        try {
                            A.createObjectStore("test", {
                                autoIncrement: !0
                            }).put(new Blob)
                        } catch (o) {
                            let l = o;
                            if (o instanceof Error && (l = o.message ? ? o), typeof l != "string") {
                                n(!1);
                                return
                            }
                            l.includes("BlobURLs are not yet supported") && n(!0)
                        } finally {
                            A.close(), window.indexedDB.deleteDatabase(L), E()
                        }
                    }
                } catch {
                    n(!1)
                }
            }

            function S() {
                let L = window.openDatabase,
                    _ = window.localStorage;
                try {
                    L(null, null, null, null)
                } catch {
                    n(!0);
                    return
                }
                try {
                    _.setItem("test", "1"), _.removeItem("test")
                } catch {
                    n(!0);
                    return
                }
                n(!1)
            }

            function g() {
                navigator.maxTouchPoints !== void 0 ? y() : S()
            }

            function m() {
                let L = window;
                return L.performance !== void 0 && L.performance.memory !== void 0 && L.performance.memory.jsHeapSizeLimit !== void 0 ? performance.memory.jsHeapSizeLimit : 1073741824
            }

            function k() {
                navigator.webkitTemporaryStorage.queryUsageAndQuota(function(L, _) {
                    let T = Math.round(_ / 1048576),
                        A = Math.round(m() / (1024 * 1024)) * 2;
                    n(T < A)
                }, function(L) {
                    t(new Error("detectIncognito somehow failed to query storage quota: " + L.message))
                })
            }

            function I() {
                let L = window.webkitRequestFileSystem;
                L(0, 1, function() {
                    n(!1)
                }, function() {
                    n(!0)
                })
            }

            function b() {
                self.Promise !== void 0 && self.Promise.allSettled !== void 0 ? k() : I()
            }

            function v() {
                n(navigator.serviceWorker === void 0)
            }

            function w() {
                n(window.indexedDB === void 0)
            }

            function P() {
                c() ? (r = "Safari", g()) : d() ? (r = i(), b()) : h() ? (r = "Firefox", v()) : u() ? (r = "Internet Explorer", w()) : t(new Error("detectIncognito cannot determine the browser"))
            }
            P()
        })
    }
    var fn = {
            reset: () => {},
            addRequestListener: () => {},
            addResponseListener: () => {}
        },
        pn = ({
            enabled: e,
            pixelLogger: t
        }) => {
            if (!e || typeof window > "u") return fn;
            let r = [],
                n = [],
                i = window.fetch,
                s = XMLHttpRequest.prototype.open,
                a = XMLHttpRequest.prototype.send,
                c = d => {
                    setTimeout(() => Promise.resolve().then(d).catch(() => null), 0)
                };
            try {
                window.fetch = async (...d) => {
                    for (let E of r) c(() => E(new Request(...d)));
                    let h = await i(...d),
                        u = h.clone();
                    for (let E of n) c(() => E(new Request(...d), u.clone()));
                    return h
                }
            } catch (d) {
                t.log(`fetch: ${d}`)
            }
            try {
                XMLHttpRequest.prototype.open = function(d, h) {
                    try {
                        this._cm_url = h.toString(), this._cm_method = d
                    } catch {}
                    return s.apply(this, arguments)
                }
            } catch (d) {
                t.log(`open: ${d}`)
            }
            try {
                XMLHttpRequest.prototype.send = function(d) {
                    try {
                        if (this._cm_url && this._cm_method) {
                            let h = new Request(this._cm_url, {
                                method: this._cm_method,
                                body: d
                            });
                            if (h) {
                                for (let y of r) c(() => y(h.clone()));
                                let u = [101, 204, 205, 304],
                                    E = () => {
                                        for (let y of n) c(() => y(h.clone(), new Response(u.includes(this.status) ? null : this.response, {
                                            status: this.status,
                                            statusText: this.statusText
                                        })));
                                        this.removeEventListener("load", E)
                                    };
                                this.addEventListener("load", E)
                            }
                        }
                    } catch {}
                    return a.apply(this, arguments)
                }
            } catch (d) {
                t.log(`send: ${d}`)
            }
            return {
                reset: () => {
                    window.fetch = i, XMLHttpRequest.prototype.open = s, XMLHttpRequest.prototype.send = a, r = [], n = []
                },
                addRequestListener: d => {
                    r.push(d)
                },
                addResponseListener: d => {
                    n.push(d)
                }
            }
        };
    var mn = e => t => {
        if (t.data.__attentive && t.data.__attentive.action === "EMAIL_LEAD") {
            let n = t.data.__attentive.email;
            n && e({
                email: n,
                matchMethod: "pixel_cm_email"
            })
        }
        t.data.CollectedEmailEvent ? .email && e({
            email: t.data.CollectedEmailEvent.email,
            matchMethod: "pixel_cm_email"
        }), t.data ? .action === "email_subscribe" && t.data ? .data ? .email && e({
            email: t.data.data.email,
            matchMethod: "pixel_cm_email"
        })
    };
    var gn = e => {
        performance.getEntriesByType("resource").forEach(t => {
            let r = t.name;
            e.log(r)
        }), new PerformanceObserver(t => {
            let r = t.getEntries();
            for (let n of r) {
                let i = n.name;
                e.log(i)
            }
        }).observe({
            entryTypes: ["resource"]
        })
    };
    var hn = new Set(["products", "product", "p"]),
        yn = e => e.split("/").filter(Boolean).some(t => hn.has(t)),
        Oe = e => {
            let t = e.split("/").filter(Boolean),
                r = t.findIndex(n => hn.has(n));
            return r === -1 || r === t.length - 1 ? [] : t.slice(r + 1).reverse().slice(0, 2)
        };
    var ui = /gid:\/\/shopify\/Product\/\d+/g,
        fi = /gid:\/\/shopify\/(?:Product|ProductVariant)\/\d+/g,
        xt = (e, t) => e.querySelector(`meta[property="${t}"]`) ? .getAttribute("content") ? .trim() || null,
        Rt = (e, t) => {
            if (!e) return null;
            try {
                return new URL(e, t)
            } catch {
                return null
            }
        },
        pi = e => typeof e == "object" && e !== null && !Array.isArray(e),
        mi = (e, t) => {
            let r = e["@type"];
            return r === t || Array.isArray(r) && r.includes(t)
        },
        Tt = (e, t, r) => {
            if (!(r > 4 || t.length >= 4)) {
                if (Array.isArray(e)) {
                    for (let n of e) Tt(n, t, r + 1);
                    return
                }
                if (pi(e)) {
                    if (mi(e, "Product")) {
                        let i = [e["@id"], e.productID, e.productId].filter(s => typeof s == "string").flatMap(s => s.match(ui) ? ? []);
                        t.push({
                            name: typeof e.name == "string" ? e.name : null,
                            url: typeof e.url == "string" ? e.url : null,
                            productGids: i
                        });
                        return
                    }
                    "@graph" in e && Tt(e["@graph"], t, r + 1)
                }
            }
        },
        gi = e => {
            let t = [];
            for (let r of e.querySelectorAll('script[type="application/ld+json"]')) {
                let n = r.textContent;
                if (n) try {
                    Tt(JSON.parse(n), t, 0)
                } catch {}
            }
            return t
        },
        hi = e => {
            let t = Oe(e.pathname);
            if (t.length) return t;
            let r = e.pathname.split("/").filter(Boolean).pop();
            return r ? [r] : []
        },
        yi = e => {
            let t = e.split(/\s+[|\u2013\u2014-]\s+/)[0] ? .trim() ? ? "";
            return t.length >= 8 ? t : e.trim()
        },
        bn = (e, t) => {
            let r = e.querySelector('link[rel="canonical"]') ? .getAttribute("href") ? .trim() || null,
                n = xt(e, "og:url"),
                i = xt(e, "og:type"),
                s = xt(e, "og:title"),
                a = gi(e),
                c = [Rt(r, t.href), Rt(n, t.href), ...a.map(y => Rt(y.url, t.href))].filter(y => y !== null),
                d = [...new Set(c.flatMap(hi))],
                h = [...new Set(a.flatMap(y => y.productGids))],
                u = c.some(y => Oe(y.pathname).length > 0),
                E = s ? ? a.find(y => y.name) ? .name ? ? (e.title ? yi(e.title) : null);
            return {
                handleCandidates: d,
                productGids: h,
                title: E,
                isLikelyProductPage: i ? .toLowerCase() === "product" || a.length > 0 || u
            }
        },
        wn = (e, t = 24) => {
            let r = new Set;
            for (let n of e.querySelectorAll("script")) {
                let i = n.textContent;
                if (!i || !i.includes("shopify")) continue;
                let s = i.includes("\\/") ? i.replace(/\\\//g, "/") : i;
                for (let a of s.match(fi) ? ? [])
                    if (r.add(a), r.size >= t) return [...r]
            }
            return [...r]
        },
        _n = e => e.replace(/&amp;/g, "&").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim(),
        nt = (e, t) => {
            if (!e || !t) return !1;
            let r = _n(e),
                n = _n(t);
            if (!r || !n) return !1;
            if (r === n || r.includes(n) || n.includes(r)) return !0;
            let i = new Set(r.split(" ")),
                s = new Set(n.split(" ")),
                a = [...i].filter(c => s.has(c)).length;
            return a >= 2 && a / Math.min(i.size, s.size) >= .6
        };
    var vn = ["variant", "variant_id", "variantId", "one-time"],
        Sn = ["selling_plan", "sellingPlan", "sellingplan"],
        _i = e => {
            let t = e.searchParams,
                r = [...t.entries()].filter(([s]) => ![...vn, ...Sn].includes(s)).map(([s, a]) => ({
                    name: s,
                    value: a
                })),
                n = [...t.entries()].find(([s]) => vn.includes(s)) ? .[1],
                i = [...t.entries()].find(([s]) => Sn.includes(s)) ? .[1];
            return {
                variantId: n,
                sellingPlanId: i,
                selectedOptions: r
            }
        },
        bi = async ({
            url: e,
            doc: t,
            graphql: r,
            pixelLogger: n,
            specifiers: i,
            triedHandles: s
        }) => {
            let a = bn(t, e);
            if (!a.isLikelyProductPage) return null;
            let c = async u => {
                    for (let E of u) {
                        if (s.has(E)) continue;
                        s.add(E);
                        let y = await r.getProductVariant({
                            handle: E,
                            specifiers: i
                        });
                        if (y) return y
                    }
                    return null
                },
                d = await c(a.handleCandidates);
            if (d) return d;
            if (a.productGids.length) {
                let u = await r.getProductRefsByGids({
                        gids: a.productGids
                    }),
                    E = u.length === 1 ? u[0] : u.find(y => nt(y.title, a.title));
                if (E) return r.getProductVariant({
                    handle: E.handle,
                    specifiers: i
                })
            }
            let h = e.pathname.split("/").filter(Boolean).pop();
            if (h) {
                let u = await c([h]);
                if (u) return u
            }
            if (a.title) {
                let E = (await r.searchProducts({
                    query: a.title
                })).find(S => nt(S.title, a.title));
                if (E) return n.log(`Resolved product via predictiveSearch: ${E.handle}`), r.getProductVariant({
                    handle: E.handle,
                    specifiers: i
                });
                let y = wn(t);
                if (y.length) {
                    let g = (await r.getProductRefsByGids({
                        gids: y
                    })).find(m => nt(m.title, a.title));
                    if (g) return n.log(`Resolved product via embedded gids: ${g.handle}`), r.getProductVariant({
                        handle: g.handle,
                        specifiers: i
                    })
                }
            }
            return null
        },
        En = async ({
            href: e,
            graphql: t,
            pixelLogger: r,
            doc: n
        }) => {
            try {
                let i = new URL(e),
                    s = _i(i),
                    a = new Set,
                    c = null;
                if (yn(i.pathname)) {
                    for (let h of Oe(i.pathname))
                        if (a.add(h), c = await t.getProductVariant({
                                handle: h,
                                specifiers: s
                            }), c) break
                }
                if (!c && n && (c = await bi({
                        url: i,
                        doc: n,
                        graphql: t,
                        pixelLogger: r,
                        specifiers: s,
                        triedHandles: a
                    })), r.log(`url: ${i.pathname}`), r.log(`variantId: ${s.variantId}, sellingPlanId: ${s.sellingPlanId}, selectedOptions: ${JSON.stringify(s.selectedOptions,null,2)}`), r.log(`graphQlProductVariant: ${JSON.stringify(c,null,2)}`), !c) return null;
                let d = {
                    id: c.id.replace("gid://shopify/ProductVariant/", ""),
                    title: c.title,
                    image: {
                        src: c.image ? .url ? ? null
                    },
                    sku: c.sku ? ? null,
                    price: {
                        amount: c.price.amount,
                        currencyCode: c.price.currencyCode
                    },
                    product: {
                        id: c.product.id.replace("gid://shopify/Product/", ""),
                        title: c.product.title,
                        type: c.product.productType,
                        url: c.product.onlineStoreUrl != null ? ye(c.product.onlineStoreUrl) : null,
                        vendor: c.product.vendor
                    }
                };
                return r.log(`Product variant found: ${JSON.stringify(d,null,2)}`), d || null
            } catch (i) {
                r.log(`Error checking if product viewed: ${i}`)
            }
        };
    var Mt = ct(In(), 1),
        al = Mt.default.configure,
        xn = Mt.default;
    var Rn = async ({
        shdId: e,
        accountId: t,
        xTempTablet: r,
        trackingOrigin: n
    }) => {
        let i = new URL("/api/cbc/config", V(n));
        i.searchParams.set("accountId", t), i.searchParams.set("shdId", e), await fetch(i.href, {
            credentials: "include",
            headers: { ...r ? {
                    "x-temp-tablet": r
                } : {}
            }
        }).catch(() => null)
    };
    var Ii = "client_timeout",
        xi = "network_connection",
        Ri = "network_abort",
        st = "csp_block",
        at = "invalid_endpoint",
        Ti = "handle_agent_data",
        _e = "script_load_fail",
        Ci = "bad_response_format",
        Ut = "api_key_missing",
        Gt = "api_key_invalid",
        Ai = "cache_misconfigured",
        Bt = "endpoints_misconfigured",
        Oi = "wrong_worker_option",
        Fi = "worker_initialization_failed",
        Mi = "sandboxed_iframe",
        $e = "bundle_not_defined",
        X = {
            [Ii]: "Client timeout",
            [xi]: "Network connection error",
            [Ri]: "Network request aborted",
            [st]: "Blocked by CSP",
            [at]: 'The provided endpoint in "endpoints" parameter is not a valid URL',
            [Ti]: "Handle on demand agent data error",
            [_e]: "Failed to load the JS script of the agent",
            [$e]: "9319",
            [Ci]: "Can't parse the backend response. Make sure the proper endpoints are used.",
            [Ut]: "The `apiKey` option is not provided",
            [Gt]: "The `apiKey` option is not a string",
            [Ai]: "The `cache` option is misconfigured",
            [Bt]: "The `endpoints` option is misconfigured",
            [Oi]: "Wrong `worker` option, it should be a Worker instance",
            [Fi]: "Web Worker initialization failed",
            [Mi]: "Running inside sandboxed iframes is not supported"
        },
        q = class extends Error {
            constructor(t, r) {
                super(t), this.name = "FingerprintError", this.event_id = null, this.code = r
            }
        };

    function Tn(e) {
        return typeof e == "string" || Array.isArray(e) && e.every(t => typeof t == "string")
    }

    function Vt(e) {
        return !!e && e.__type__ === Vi
    }
    var $t;
    async function $i(e, t, r, n, i, s, a) {
        if (e === void 0) return;
        let c = e;
        for (let d = 0; d < t; ++d) {
            let h = new Date,
                u, E;
            try {
                u = await qt(() => r(c, d, a), a)
            } catch (S) {
                E = S, s.failedAttempts.push({
                    level: 0,
                    endpoint: c,
                    error: S
                })
            }
            if (u) {
                let S = n(u);
                if ("result" in S) {
                    s.result = S.result;
                    break
                }
                if (s.failedAttempts.push({
                        level: 1,
                        endpoint: c,
                        error: S.error
                    }), S.stop) break
            }
            let y = i(h, u, E);
            if (!y) break;
            await qt(Di(y[1]), a), c = y[0]
        }
    }
    var Dn = Array.isArray;

    function Di(e, t) {
        return new Promise(r => (function(n, i, ...s) {
            let a = Date.now() + i,
                c = 0,
                d = () => {
                    c = setTimeout(() => {
                        Date.now() < a ? d() : n(...s)
                    }, a - Date.now())
                };
            return d(), () => clearTimeout(c)
        })(r, e, t))
    }
    var Dt = new Uint32Array(2);

    function Ni(e) {
        if (!e || typeof e != "object") return !1;
        let t = e;
        return typeof t.__type__ == "string" && (function(r) {
            let n = Bi(r);
            $t = $t || (function() {
                let s, a = new Uint32Array(256);
                for (let c = 0; c < 256; c++) {
                    s = c;
                    for (let d = 0; d < 8; d++) s = 1 & s ? 3988292384 ^ s >>> 1 : s >>> 1;
                    a[c] = s
                }
                return a
            })();
            let i = -1;
            for (let s = 0; s < n.length; s++) i = i >>> 8 ^ $t[255 & (i ^ n[s])];
            return (-1 ^ i) >>> 0
        })(Ki(t.__type__)) === 694409711 && (t.script === void 0 || it(t.script)) && (t.helper === void 0 || it(t.helper)) && (t.ingress === void 0 || it(t.ingress))
    }

    function ji(e, t, r, n, i = {}) {
        let {
            maxAttemptCount: s = 5,
            backoffBase: a = 200,
            backoffCap: c = 1e4,
            abort: d
        } = i, h = {
            failedAttempts: []
        }, [u, E] = (function(g, m, k, I) {
            let b = (function(P) {
                    let L = [...P];
                    return {
                        current: () => L[0],
                        postpone() {
                            let _ = L.shift();
                            _ !== void 0 && L.push(_)
                        },
                        exclude() {
                            L.shift()
                        }
                    }
                })(g),
                v = (function(P, L) {
                    let _ = 0;
                    return () => Math.random() * Math.min(L, P * Math.pow(2, _++))
                })(k, I),
                w = new Set;
            return [b.current(), (P, L, _) => {
                let T = m(P, L, _);
                T.action === "exclude" ? b.exclude() : b.postpone();
                let A = () => Math.max(0, P.getTime() + v() - Date.now()),
                    o;
                o = typeof T.delay == "number" ? T.delay : A();
                let l = b.current();
                return o === 0 && l && Date.now() - P.getTime() < 50 && (w.has(l) ? o = A() : w.add(l)), l === void 0 ? void 0 : [l, o]
            }]
        })(e, n, a, c), y = (S = [d ? .then(g => h.aborted = {
            resolve: !0,
            value: g
        }, g => h.aborted = {
            resolve: !1,
            error: g
        }), $i(u, s, t, r, E, h, d)], Promise.race(S.filter(g => !!g))).then(() => h);
        var S;
        return {
            then: y.then.bind(y),
            current: h
        }
    }

    function Ui(e = zi) {
        return function(t) {
            let r, n, {
                    picked: i,
                    rest: s
                } = (function(m, k) {
                    let I = {},
                        b = {};
                    for (let [v, w] of Object.entries(m)) k.includes(v) ? I[v] = w : b[v] = w;
                    return {
                        picked: I,
                        rest: b
                    }
                })(t, ["apiKey"]),
                {
                    apiKey: a
                } = i;
            if (!a) throw new q(X[Ut], Ut);
            if (typeof a != "string") throw new q(X[Gt], Gt);
            let c = jt(t, "endpoints"),
                d = (function(m, k, I) {
                    let b = m.prepareScriptEndpoints(k, "https://fpnpmcdn.net/");
                    if (b === null) throw new q(X[Bt], Bt);
                    return b.map(v => (function(w, P) {
                        let L = new URL(w, window.location.href),
                            _ = L.pathname;
                        return L.pathname = `${_}${_.endsWith("/")?"":"/"}v4/${encodeURIComponent(P)}`, L.search = `?ci=jsl/${encodeURIComponent(Hi)}`, L.href
                    })(v, I))
                })(e, c, a),
                h = (function(m) {
                    var k, I;
                    let b = window;
                    try {
                        let w = (k = Object.getOwnPropertyDescriptor(b, Nt)) === null || k === void 0 ? void 0 : k.value;
                        if (On(w)) return w
                    } catch {}
                    let v = Me ? ? [(function(w, P, L) {
                        let _ = { ...L
                            },
                            T = Object.entries(w);
                        for (let [A, o] of T) {
                            let l = P[A];
                            if (l) try {
                                _[A] = $n(l);
                                continue
                            } catch (p) {
                                console.error(p)
                            }
                            _[A] = $n(o)
                        }
                        return _
                    })(Ji, m ? ? {}, {}).lwu, !1];
                    try {
                        Object.defineProperty(b, Nt, {
                            configurable: !0,
                            enumerable: !1,
                            value: v,
                            writable: !1
                        });
                        let w = (I = Object.getOwnPropertyDescriptor(b, Nt)) === null || I === void 0 ? void 0 : I.value;
                        return On(w) ? w : v
                    } catch {
                        return Me ? ? (Me = v)
                    }
                })(jt(t, "abTests")),
                u = {
                    lwu: h[0]
                },
                E = () => {
                    try {
                        if (h[1]) return;
                        h[1] = !0, (m = h[0]) === "all" && Fn(Yi), m !== "tts" && m !== "all" || Fn(Gi)
                    } catch {}
                    var m
                },
                [y, S] = (function() {
                    let m = [],
                        k = () => {
                            m.push({
                                time: new Date,
                                state: document.visibilityState
                            })
                        },
                        I = (b = document, v = "visibilitychange", w = k, b.addEventListener(v, w, P), () => b.removeEventListener(v, w, P));
                    var b, v, w, P;
                    return k(), [m, I]
                })(),
                g = (async function() {
                    try {
                        let [m, k] = await (function(b, v) {
                            if (b.length === 0) return Promise.reject(new TypeError("The list of script URL patterns is empty"));
                            let w = [],
                                P = ji(b, async L => {
                                    let _ = new Date;
                                    try {
                                        let T = await v(L);
                                        return w.push({
                                            url: L,
                                            startedAt: _,
                                            finishedAt: new Date,
                                            error: void 0
                                        }), T
                                    } catch (T) {
                                        throw w.push({
                                            url: L,
                                            startedAt: _,
                                            finishedAt: new Date,
                                            error: T
                                        }), T
                                    }
                                }, L => ({
                                    result: L
                                }), Wi, {
                                    maxAttemptCount: 5,
                                    backoffBase: 100,
                                    backoffCap: 3e3
                                });
                            return new Promise((L, _) => {
                                Promise.resolve(P).then(T => {
                                    if (T.result !== void 0) L([T.result, w]);
                                    else {
                                        let A = T.failedAttempts[0];
                                        _(A ? A.error : new Error("No attempts were made"))
                                    }
                                }).catch(_)
                            })
                        })(d, b => (function(v, w, P) {
                            return v.withCspViolationWatch(w, async () => {
                                if ((function(L) {
                                        if (URL.prototype) try {
                                            return new URL(L, location.href), !1
                                        } catch (_) {
                                            if (jn(_)) return !0;
                                            throw _
                                        }
                                    })(w)) throw new q(X[at], at);
                                try {
                                    let L =
                                        import (w);
                                    return P(), await L
                                } catch {
                                    throw new q(X[_e], _e)
                                }
                            }, () => {
                                throw new q(X[st], st)
                            }).then(L => {
                                if (typeof L ? .start != "function") throw new q(X[$e], $e);
                                return L
                            })
                        })(e, b, E)), I = await m.start({ ...s,
                            externalABSelections: { ...jt(t, "externalABSelections"),
                                ...u
                            },
                            ldi: {
                                attempts: k,
                                visibilityStates: y
                            }
                        });
                        return r = I, I
                    } catch (m) {
                        throw n = (function(k) {
                            return k instanceof q && k.code === $e ? new q(X[_e], _e) : k
                        })(m), n
                    } finally {
                        S()
                    }
                })();
            return {
                async get(m) {
                    if (r) return r.get(m);
                    if (n) throw n;
                    return (await g).get(m)
                },
                async collect(m) {
                    if (r) return r.collect(m);
                    if (n) throw n;
                    return (await g).collect(m)
                }
            }
        }
    }

    function Cn() {
        return new TypeError("Can't pick from nothing")
    }

    function Gi() {
        let {
            speechSynthesis: e
        } = window;
        typeof e ? .getVoices == "function" && e.getVoices()
    }

    function qt(e, t) {
        return new Promise((r, n) => {
            let i = !1;
            t ? .then(() => i = !0, () => i = !0), (typeof e == "function" ? qt(Promise.resolve(), t).then(e) : e).then(s => {
                i || r(s)
            }, s => {
                i || n(s)
            })
        })
    }

    function Bi(e) {
        return e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
    }
    var Vi = "withoutDefault";

    function ot(e) {
        return Dn(e) ? e : [e]
    }

    function qi(e) {
        return `${e.origin}${e.pathname.endsWith("/")?e.pathname:`${e.pathname}/`}web/`
    }

    function An() {
        return crypto ? (crypto.getRandomValues(Dt), (1048576 * Dt[0] + (1048575 & Dt[1])) / 4503599627370496) : Math.random()
    }
    var Hi = "4.1.4",
        Ji = {
            lwu: ["ctrl", "tts", "all"]
        };

    function On(e) {
        return Array.isArray(e) && (function(t) {
            return t === "ctrl" || t === "tts" || t === "all"
        })(e[0]) && typeof e[1] == "boolean"
    }

    function Ki(e) {
        let t = new Uint8Array(e.length);
        for (let r = 0; r < e.length; r++) {
            let n = e.charCodeAt(r);
            if (n > 127) return new TextEncoder().encode(e);
            t[r] = n
        }
        return t
    }
    var zi = {
            prepareScriptEndpoints: function(e, t) {
                return e === void 0 ? [t] : it(e) ? (function(r, n) {
                    let i, s = !1;
                    Vt(r) ? (s = !0, i = ot(r.value)) : i = ot(r);
                    let a = [];
                    for (let c of i) {
                        let d = Mn(c, "endpoints");
                        d && a.push(qi(d))
                    }
                    return s || a.push(n), a
                })(e, t) : Ni(e) ? (function(r, n, i) {
                    if (r === void 0) return [n];
                    let s, a = !1;
                    Vt(r) ? (a = !0, s = ot(r.value)) : s = ot(r);
                    let c = [];
                    for (let d of s) {
                        let h = Mn(d, i);
                        h && c.push(h.href)
                    }
                    return a || c.push(n), c
                })(e.script, t, "script") : null
            },
            withCspViolationWatch: function(e, t, r, n) {
                let i = document,
                    s = "securitypolicyviolation",
                    a, c = h => {
                        let u = new URL(e, location.href),
                            {
                                blockedURI: E
                            } = h;
                        E !== u.href && E !== u.protocol.slice(0, -1) && E !== u.origin || (a = h, d())
                    };
                i.addEventListener(s, c);
                let d = () => i.removeEventListener(s, c);
                return n ? .then(d, d), Promise.resolve().then(t).then(h => (d(), h), h => new Promise(u => {
                    let E = new MessageChannel;
                    E.port1.onmessage = () => u(), E.port2.postMessage(null)
                }).then(() => {
                    if (d(), a) return r(a);
                    throw h
                }))
            }
        },
        Nt = Symbol.for("__fpjs_lwu"),
        Me;

    function it(e) {
        return Vt(e) ? Tn(e.value) : Tn(e)
    }
    var Nn = Ui();

    function jn(e) {
        return e instanceof Error && e.name === "TypeError"
    }

    function Wi(e, t, r) {
        let n = r instanceof q ? r.code : null;
        return n === st || n === at ? {
            action: "exclude",
            delay: 0
        } : n === $e ? {
            action: "exclude",
            delay: "backoff"
        } : n === _e ? {
            action: "postpone",
            delay: Date.now() - e.getTime() < 50 ? 0 : "backoff"
        } : {
            action: "postpone",
            delay: "backoff"
        }
    }

    function Fn(e) {
        try {
            e()
        } catch {}
    }

    function Mn(e, t) {
        try {
            return new window.URL(e, window.location.href)
        } catch (r) {
            if (jn(r)) return console.warn(`Ignoring an invalid '${t}' value: "${e}"`), null;
            throw r
        }
    }

    function jt(e, t) {
        return (function(r, n) {
            return Object.prototype.hasOwnProperty.call(r, n)
        })(e, t) ? e[t] : void 0
    }

    function $n(e) {
        return Dn(e) ? (function(t) {
            if (t.length === 0) throw Cn();
            return t[Math.floor(An() * t.length)]
        })(e) : (function(t) {
            let r = An(),
                n = 0,
                i = 0;
            for (let [, s] of t) n += s;
            for (let [s, a] of t) {
                if (r >= i / n && r < (i + a) / n) return s;
                i += a
            }
            throw Cn()
        })(Object.entries(e))
    }

    function Yi() {
        var e;
        let t = window.RTCPeerConnection || window.webkitRTCPeerConnection;
        if (!t) return;
        let r = new t({
            iceServers: []
        });
        try {
            (e = r.createDataChannel) === null || e === void 0 || e.call(r, "prewarm")
        } finally {
            try {
                r.close()
            } catch {}
        }
    }
    var Un = async (e, t, r) => {
        let n, i = new Promise((s, a) => {
            n = setTimeout(() => {
                a(r())
            }, t)
        });
        try {
            return await Promise.race([e, i])
        } finally {
            n !== void 0 && clearTimeout(n)
        }
    };
    var Xi = "6HAkMPx9fsCvYihN",
        Gn = 3e4,
        Zi = 2,
        Ht = e => Nn({
            apiKey: "ZogFuwnaRyiLEpBRAee6",
            endpoints: [new URL(`/${Xi}`, V(e)).toString()],
            cache: {
                storage: "localStorage",
                duration: "optimize-cost"
            }
        }),
        es = async (e, t) => {
            let r = { ...t,
                timeout: Gn
            };
            return Un(e.get(r), Gn, () => new Error("Fingerprint get timed out"))
        },
        Jt = async (e, t) => {
            let r;
            for (let n = 0; n < Zi; n++) try {
                return await es(e, t)
            } catch (i) {
                r = i
            }
            throw r instanceof Error ? r : new Error("Fingerprint get failed")
        };
    var ts = "4",
        Bn = async ({
            isBot: e,
            isFpEnabled: t,
            shouldFp: r,
            shopifySessionId: n,
            shdId: i,
            accountId: s,
            xTempTablet: a,
            source: c,
            renderTimeMs: d,
            href: h,
            klaid: u,
            isPrivate: E,
            previousShdId: y,
            hasFp: S,
            isSandbox: g,
            trackingOrigin: m,
            cookies: k,
            local_storage: I,
            thumbmark: b,
            fpjs: v,
            fingerprintProEventId: w
        }) => {
            let P = new URL("/api/cbc/identify", V(m)),
                L = {
                    isBot: e,
                    isFpEnabled: t,
                    shouldFp: r,
                    accountId: s,
                    source: c,
                    renderTimeMs: d,
                    href: h,
                    version: ts,
                    isPrivate: E,
                    previousShdId: y || "",
                    hasFp: S,
                    isSandbox: g,
                    hasKlaviyo: String(!!window.klaviyo),
                    tm_hash: b.thumbmark_hash,
                    tm_components: b.thumbmark_components,
                    tm_elapsed: b.thumbmark_elapsed,
                    tm_error: b.thumbmark_error,
                    fpjs_visitor_id: v.fpjs_visitor_id,
                    fpjs_confidence_score: v.fpjs_confidence_score,
                    fpjs_confidence_comment: v.fpjs_confidence_comment,
                    fpjs_components: v.fpjs_components,
                    fpjs_version: v.fpjs_version,
                    fpp_event_id: w
                };
            n && (L._shopify_s = n), i && (L.shdId = i), u && (L.klaid = u), a && (L.xTempTablet = a), k.length > 0 && (L.cookies = k), I.length > 0 && (L.local_storage = I);
            let _ = await fetch(P.href, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...a ? {
                        "x-temp-tablet": a
                    } : {}
                },
                body: JSON.stringify(L)
            });
            if (!_.ok) return null;
            let T = await _.json();
            return T.providers.forEach(A => {
                switch (A) {
                    case "aa":
                        {
                            if (sessionStorage.getItem("shd_aa")) break;
                            if (i && t) {
                                let o = document.createElement("img");
                                o.src = `https://i.liadm.com/s/89602?shd_id=${i}&account_id=${s}`, o.height = 1, o.width = 1, o.alt = "", o.style.display = "none", document.body.appendChild(o), sessionStorage.setItem("shd_aa", "1")
                            }
                            break
                        }
                }
            }), T
        };
    var Vn = async e => j(e, document.cookie),
        qn = async e => localStorage.getItem(e),
        rs = async ({
            shouldFp: e,
            accountId: t,
            href: r,
            trackingOrigin: n,
            pixelLogger: i
        }) => {
            let s = await K({
                cookieGetter: Vn,
                localStorageGetter: qn
            });
            if (s ? .shdId) {
                i.log(`ensureShdId: existing shdId found: ${s.shdId}`);
                return
            }
            i.log("ensureShdId: no shdId found, generating");
            let a, c = s ? .fingerprintProEventId;
            if (e) try {
                let d = Ht(n);
                if (!d) throw new Error("Failed to start fingerprint");
                let h;
                try {
                    h = new URL(r).searchParams.get("cm_click_id") ? ? void 0
                } catch {}
                let u = j(xe, document.cookie),
                    E = j(Y, document.cookie),
                    S = await Jt(d, {
                        tag: {
                            account_id: t,
                            click_id: h ? ? "",
                            shopify_y: u ? ? "",
                            shd_y: E ? ? ""
                        }
                    });
                S.event_id && (c = S.event_id, dt(c)), S.visitor_id && (a = S.visitor_id, i.log(`ensureShdId: fp shdId: ${a}`))
            } catch (d) {
                i.log(`ensureShdId: fp error: ${d instanceof Error?d.message:String(d)}`)
            }
            await Lt({
                shdId: a,
                createdAt: Date.now(),
                isPrivate: !1,
                isBot: !1,
                updatedAt: a ? Date.now() : 0,
                fingerprintProEventId: c
            })
        },
        ns = async ({
            pixelLogger: e,
            isBot: t,
            isFpEnabled: r,
            shouldFp: n,
            shopifySessionIdPromise: i,
            accountId: s,
            source: a,
            renderTimeMs: c,
            href: d,
            isPrivatePromise: h,
            klaidPromise: u,
            isSandbox: E,
            trackingOrigin: y,
            thumbmarkLoaderPromise: S,
            fpjsLoaderPromise: g
        }) => {
            let m = localStorage.getItem("cm_x_temp_tablet"),
                [k, I, b, v, w] = await Promise.all([h, K({
                    cookieGetter: Vn,
                    localStorageGetter: qn
                }), i, S.then(M => M ? M.getResponse() : void 0).catch(M => {
                    e.log("thumbmark response failed", M)
                }), g.then(M => M ? M.getResponse() : void 0).catch(M => {
                    e.log("fpjs response failed", M)
                })]),
                P = null;
            try {
                P = new URL(d)
            } catch (M) {
                e.log(`Failed to parse URL: ${JSON.stringify(M)}`)
            }
            let L = P ? .searchParams.get("cm_click_id");
            e.log(`isPrivate: ${k?"true":"false"}, shdIdObj: ${JSON.stringify(I)}, xTempTablet: ${m}`), e.log(`shouldFp: ${n?"true":"false"}, isBot: ${t?"true":"false"}`);
            let _ = I ? .shdId,
                T = le() ? ? I ? .fingerprintProEventId,
                A = _ ? ? null,
                o = 14400 * 1e3,
                l = !I ? .updatedAt || I.updatedAt < Date.now() - o,
                p = !1;
            if (e.log(`shdIdExpired: ${l?"true":"false"}`), n && _ && l) {
                e.log("Running fp refresh");
                try {
                    let M = Ht(y);
                    if (!M) throw new Error("Failed to start fingerprint and make fp object");
                    let se = j(xe, document.cookie),
                        z = j(Y, document.cookie),
                        Ne = {
                            tag: {
                                previous_visitor_id: A,
                                account_id: s,
                                click_id: L ? ? "",
                                shopify_session_id: b ? ? "",
                                shopify_y: se ? ? "",
                                shd_y: z ? ? ""
                            }
                        };
                    m && (Ne.linkedId = m);
                    let Z = await Jt(M, Ne);
                    e.log(`fp result: ${xn(Z)}`), Z.event_id && (T = Z.event_id, dt(T)), Z.visitor_id && (_ = Z.visitor_id, p = !0, e.log(`shdId updated: ${_}`), Rn({
                        trackingOrigin: y,
                        shdId: _,
                        accountId: s,
                        xTempTablet: m
                    }))
                } catch (M) {
                    e.log(`error running fingerprint: ${M instanceof Error?M.message:String(M)}`)
                }
            }
            e.log(`isSandbox: ${E?"true":"false"}`), e.log(`shdId: ${_}`);
            let f = {
                shdId: _,
                createdAt: I ? .createdAt || Date.now(),
                isPrivate: k,
                isBot: E ? I ? .isBot : t,
                updatedAt: p ? Date.now() : I ? .updatedAt || 0,
                clickId: L || I ? .clickId
            };
            await Lt({ ...f,
                fingerprintProEventId: T
            });
            let C = await u;
            e.log(`klaid: ${C}`);
            let R = [],
                x = [];
            try {
                R = pe(fe(document.cookie), e)
            } catch (M) {
                e.log("cookie read failed", M)
            }
            try {
                x = ue(Pe(), e)
            } catch (M) {
                e.log("localStorage read failed", M)
            }
            let O = me(v),
                N = ce(w);
            Bn({
                trackingOrigin: y,
                isBot: t,
                isFpEnabled: r,
                shouldFp: n,
                shopifySessionId: b,
                shdId: _,
                accountId: s,
                xTempTablet: m,
                source: a,
                renderTimeMs: c,
                href: d,
                klaid: C,
                isPrivate: k,
                previousShdId: A,
                hasFp: p,
                isSandbox: E,
                cookies: R,
                local_storage: x,
                thumbmark: O,
                fpjs: N,
                fingerprintProEventId: T
            })
        },
        Hn = async e => {
            let {
                shouldFp: t,
                accountId: r,
                href: n,
                trackingOrigin: i,
                pixelLogger: s
            } = e;
            await rs({
                shouldFp: t,
                accountId: r,
                href: n,
                trackingOrigin: i,
                pixelLogger: s
            }), ns(e)
        };

    function Jn(e, t = fetch, r = 5e3) {
        let n = new URL("f.json", e),
            i = new AbortController,
            s = Promise.resolve().then(() => t(n, {
                signal: i.signal
            })).then(a => {
                if (!a.ok) throw new Error(`fp manifest ${a.status}`);
                return a.json()
            });
        return new Promise((a, c) => {
            let d = !1,
                h = setTimeout(() => {
                    d || (d = !0, i.abort(), c(new Error(`fp manifest timeout ${r}`)))
                }, r);
            s.then(u => {
                if (!d) {
                    if (d = !0, clearTimeout(h), typeof u.file != "string" || u.file.length === 0) {
                        c(new Error("fp manifest missing file"));
                        return
                    }
                    a(new URL(u.file, e).href)
                }
            }, u => {
                d || (d = !0, clearTimeout(h), c(u))
            })
        })
    }

    function os(e, t, r) {
        return !(e instanceof HTMLScriptElement) || !e.src ? Promise.resolve(void 0) : Jn(e.src).then(n => {
            t.log(`fp bundle: ${n}`);
            let i = tr({
                bundleUrl: n,
                pixelLogger: t
            });
            return {
                thumbmarkLoader: pr({
                    bundleLoader: i,
                    pixelLogger: t
                }),
                fpjsLoader: rr({
                    bundleLoader: i,
                    pixelLogger: t,
                    debug: r
                })
            }
        }).catch(n => {
            t.log("fp bundle unavailable", n)
        })
    }(() => {
        let e = new Ve({
                locationHref: location.href
            }),
            t = je(location ? .search);
        t && Ge();
        let r = async _ => localStorage.getItem(_),
            n = async _ => j(_, document.cookie),
            i = window.name.includes("-sandbox-") && window !== window.top,
            s = !!location ? .pathname ? .includes("/checkouts/"),
            a = document.currentScript;
        if (!a) {
            e.log("unified script not found");
            return
        }
        let c = a.getAttribute("data-config");
        if (!c) {
            e.log("config not found");
            return
        }
        let d = JSON.parse(atob(c)),
            h = JSON.parse(localStorage.getItem("cm_debug_config") || "{}"),
            u = { ...d,
                ...h
            };
        e.log(`cfg: ${JSON.stringify(u,null,2)}`);
        let E = Ue() || t,
            y = d.liveRamp === !0 && !(E && h.liveRamp === !1),
            S = u.isBot || mr(navigator.userAgent),
            g = u.fp,
            m = !S && g === !0,
            k = m ? os(a, e, E) : Promise.resolve(void 0),
            I = k.then(_ => _ ? .thumbmarkLoader),
            b = k.then(_ => _ ? .fpjsLoader);
        if (window._cm_network) {
            e.log("cm_network already set");
            return
        }
        window._cm_network = !0;
        let {
            accountId: v,
            source: w,
            renderTimeMs: P
        } = u;
        (async () => {
            let T = null,
                A = an({
                    accountId: v,
                    isDebug: E,
                    scriptSource: w,
                    trackingOrigin: u.trackingOrigin
                }),
                o, l = async ($, B) => {
                    if (o ? .isDenied()) {
                        e.log(`Dropping ${$.length} event(s) from ${B}: consent denied`);
                        return
                    }
                    return T && clearTimeout(T), A($, B)
                },
                p = new rt(v, e, u.graphQlHeaders),
                f = async $ => {
                    if (!s) {
                        let B = $ || Xe({
                            cookieString: document.cookie,
                            getLocalStorageItem: G => window.localStorage.getItem(G)
                        });
                        if (e.log(`cartToken: ${B}`), B) {
                            let G = await p.getCart({
                                cartToken: B
                            });
                            if (G) return localStorage.setItem(We, JSON.stringify(G)), G
                        }
                    }
                    return null
                },
                C = Dr(e),
                R = jr(e),
                x = Rr(),
                O = Nr(l, e),
                N = Mr(e),
                {
                    cartInterceptor: M,
                    watchCartResources: se
                } = Fr(l, f, e, p.url, $ => p.getVariantsByIds({
                    variantIds: $
                })),
                z = pn({
                    enabled: u.inter,
                    pixelLogger: e
                });
            if (z.addRequestListener(R), z.addResponseListener(C), z.addRequestListener(x), z.addRequestListener(N), u.rebag && z.addResponseListener(O), isNaN(P) || !P || P <= 0) {
                e.log(`renderTimeMs is not a number: ${P}`);
                return
            }
            let De = async () => {
                    let $ = le() ? ? (await K({
                            cookieGetter: n,
                            localStorageGetter: r
                        })) ? .fingerprintProEventId,
                        [B, G] = await Promise.all([I.then(U => U ? U.getResponse() : void 0).catch(U => {
                            e.log("thumbmark response failed", U)
                        }), b.then(U => U ? U.getResponse() : void 0).catch(U => {
                            e.log("fpjs response failed", U)
                        })]),
                        be = [];
                    try {
                        be = fe(document.cookie)
                    } catch (U) {
                        e.log("cookie read failed", U)
                    }
                    let we = [];
                    try {
                        we = ue(Pe(), e)
                    } catch (U) {
                        e.log("localStorage read failed", U)
                    }
                    let ee = { ...me(B),
                        ...ce(G),
                        fpp_event_id: $
                    };
                    be.length > 0 && (ee.cookies = pe(be, e)), we.length > 0 && (ee.local_storage = we);
                    let te = [{
                            name: "page_viewed",
                            data: ee
                        }],
                        [ae, ve] = await Promise.all([En({
                            href: location.href,
                            graphql: p,
                            pixelLogger: e,
                            doc: document
                        }), Xr({
                            href: location.href,
                            graphql: p,
                            pixelLogger: e
                        })]);
                    ae && te.push({
                        name: "product_viewed",
                        data: {
                            productVariant: ae
                        }
                    }), ve && te.push({
                        name: "collection_viewed",
                        data: {
                            collection: ve
                        }
                    }), await l(te, "unified_page_view"), f()
                },
                Ne = dn({
                    accountId: v,
                    cookieGetter: n,
                    localStorageGetter: r,
                    onIdFn: De,
                    trackingOrigin: u.trackingOrigin,
                    readCookieString: () => document.cookie,
                    readLocalStorageEntries: () => Pe(),
                    thumbmarkLoaderPromise: I,
                    fpjsLoaderPromise: b
                }),
                Z = un().then($ => $.isPrivate).catch(() => !1),
                Kn = n(ne),
                zn = Te(() => n(Ke)).then($ => $ || null);
            u.perf && gn(e), o = await Lr(async ($, B) => {
                o = B, T = setTimeout(() => {
                    J({
                        trackingOrigin: u.trackingOrigin,
                        severity: "warn",
                        accountId: v,
                        message: `No events tracked within ${1e4/1e3}s`,
                        href: location.href,
                        labels: {
                            windowName: window.name
                        }
                    })
                }, 1e4);
                let G = Zt(),
                    be = !!$;
                if (typeof $ ? .shop == "string" && $.shop !== v) {
                    J({
                        trackingOrigin: u.trackingOrigin,
                        severity: "warn",
                        accountId: v,
                        message: `Shopify.shop doesn't match accountId: ${$.shop} !== ${v}`,
                        href: location.href,
                        labels: {
                            windowName: window.name
                        }
                    }), e.log(`Shopify.shop doesn't match accountId: ${$.shop} !== ${v}`);
                    return
                }
                let we = document.hidden,
                    ee = !s && (!be && !i || G.isHeadless || u.headless || u.trackManually || we);
                e.log(`shouldTrackManually: ${ee?"true":"false"}, isHydrogen: ${G.isHydrogen?"true":"false"}, isHeadless: ${G.isHeadless?"true":"false"}, isLiquid: ${G.isLiquid?"true":"false"}, storefrontPlatformSignals: ${G.signals.join(",")||"none"}, Shopify: ${$?"true":"false"}, headless: ${u.headless?"true":"false"}`), (ee || u.manualCartTracking) && (z.addResponseListener(M), se());
                let te = Wr({
                        enabled: y,
                        config: d,
                        shopify: $,
                        gate: B,
                        pixelLogger: e
                    }),
                    ae = async W => (te.onEmail(W.email), Ne(W)),
                    ve = kt();
                ve && te.onEmail(ve);
                let U = mn(ae);
                window.addEventListener("message", U), Zr(ae), sr({
                    pixelLogger: e
                }).addEmailListener(W => {
                    ae({
                        email: W,
                        matchMethod: "pixel_cm_email"
                    })
                });
                let Kt = W => Hn({
                    pixelLogger: e,
                    isBot: S,
                    isFpEnabled: g,
                    shouldFp: m,
                    shopifySessionIdPromise: Kn,
                    accountId: v,
                    source: w,
                    renderTimeMs: P,
                    href: W,
                    isPrivatePromise: Z,
                    klaidPromise: zn,
                    isSandbox: i,
                    trackingOrigin: u.trackingOrigin,
                    thumbmarkLoaderPromise: I,
                    fpjsLoaderPromise: b
                });
                await Kt(location.href), xr({
                    eventsFn: l,
                    pixelLogger: e
                }), ee ? (ln({
                    accountId: v,
                    trackingOrigin: u.trackingOrigin
                }), await De()) : f(), Ar(async W => {
                    if (B.isDenied()) {
                        e.log("Skipping navigation tracking: consent denied");
                        return
                    }
                    await Kt(W), await De();
                    let zt = kt();
                    zt && te.onEmail(zt)
                })
            }, u, e)
        })().catch(_ => {
            J({
                trackingOrigin: u.trackingOrigin,
                severity: "error",
                accountId: v,
                message: JSON.stringify(_r(_)),
                href: location.href,
                labels: {
                    windowName: window.name
                }
            })
        })
    })();
})();
/*!
 *
 * detectIncognito v1.4.1
 *
 * https://github.com/Joe12387/detectIncognito
 *
 * MIT License
 *
 * Copyright (c) 2021 - 2024 Joe Rutkowski <Joe@dreggle.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * Please keep this comment intact in order to properly abide by the MIT License.
 *
 **/
/*! Bundled license information:

js-md5/build/md5.mjs:
  (**
   * [js-md5]{@link https://github.com/emn178/js-md5}
   *
   * @namespace md5
   * @version 0.9.2
   * @author Chen, Yi-Cyuan [emn178@gmail.com]
   * @copyright Chen, Yi-Cyuan 2014-2026
   * @license MIT
   *)
*/