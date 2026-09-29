import {
    _ as e
} from "./preload-helper.js";
const t = {
    type: "logger",
    log(e) {
        this.output("log", e)
    },
    warn(e) {
        this.output("warn", e)
    },
    error(e) {
        this.output("error", e)
    },
    output(e, t) {
        console && console[e]
    }
};
class i {
    constructor(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.init(e, t)
    }
    init(e) {
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.prefix = i.prefix || "i18next:", this.logger = e || t, this.options = i, this.debug = i.debug
    }
    log() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        return this.forward(t, "log", "", !0)
    }
    warn() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        return this.forward(t, "warn", "", !0)
    }
    error() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        return this.forward(t, "error", "")
    }
    deprecate() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        return this.forward(t, "warn", "WARNING DEPRECATED: ", !0)
    }
    forward(e, t, i, n) {
        return n && !this.debug ? null : ("string" == typeof e[0] && (e[0] = `${i}${this.prefix} ${e[0]}`), this.logger[t](e))
    }
    create(e) {
        return new i(this.logger, {
            prefix: `${this.prefix}:${e}:`,
            ...this.options
        })
    }
    clone(e) {
        return (e = e || this.options).prefix = e.prefix || this.prefix, new i(this.logger, e)
    }
}
var n = new i;
class o {
    constructor() {
        this.observers = {}
    }
    on(e, t) {
        return e.split(" ").forEach(e => {
            this.observers[e] || (this.observers[e] = new Map);
            const i = this.observers[e].get(t) || 0;
            this.observers[e].set(t, i + 1)
        }), this
    }
    off(e, t) {
        this.observers[e] && (t ? this.observers[e].delete(t) : delete this.observers[e])
    }
    emit(e) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
        if (this.observers[e]) {
            Array.from(this.observers[e].entries()).forEach(e => {
                let [t, n] = e;
                for (let o = 0; o < n; o++) t(...i)
            })
        }
        if (this.observers["*"]) {
            Array.from(this.observers["*"].entries()).forEach(t => {
                let [n, o] = t;
                for (let a = 0; a < o; a++) n.apply(n, [e, ...i])
            })
        }
    }
}

function a() {
    let e, t;
    const i = new Promise((i, n) => {
        e = i, t = n
    });
    return i.resolve = e, i.reject = t, i
}

function s(e) {
    return null == e ? "" : "" + e
}
const r = /###/g;

function l(e, t, i) {
    function n(e) {
        return e && e.indexOf("###") > -1 ? e.replace(r, ".") : e
    }

    function o() {
        return !e || "string" == typeof e
    }
    const a = "string" != typeof t ? t : t.split(".");
    let s = 0;
    for (; s < a.length - 1;) {
        if (o()) return {};
        const t = n(a[s]);
        !e[t] && i && (e[t] = new i), e = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : {}, ++s
    }
    return o() ? {} : {
        obj: e,
        k: n(a[s])
    }
}

function c(e, t, i) {
    const {
        obj: n,
        k: o
    } = l(e, t, Object);
    if (void 0 !== n || 1 === t.length) return void(n[o] = i);
    let a = t[t.length - 1],
        s = t.slice(0, t.length - 1),
        r = l(e, s, Object);
    for (; void 0 === r.obj && s.length;) a = `${s[s.length-1]}.${a}`, s = s.slice(0, s.length - 1), r = l(e, s, Object), r && r.obj && void 0 !== r.obj[`${r.k}.${a}`] && (r.obj = void 0);
    r.obj[`${r.k}.${a}`] = i
}

function d(e, t) {
    const {
        obj: i,
        k: n
    } = l(e, t);
    if (i) return i[n]
}

function u(e, t, i) {
    for (const n in t) "__proto__" !== n && "constructor" !== n && (n in e ? "string" == typeof e[n] || e[n] instanceof String || "string" == typeof t[n] || t[n] instanceof String ? i && (e[n] = t[n]) : u(e[n], t[n], i) : e[n] = t[n]);
    return e
}

function p(e) {
    return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
}
var g = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
};

function m(e) {
    return "string" == typeof e ? e.replace(/[&<>"'\/]/g, e => g[e]) : e
}
const f = [" ", ",", "?", "!", ";"],
    h = new class {
        constructor(e) {
            this.capacity = e, this.regExpMap = new Map, this.regExpQueue = []
        }
        getRegExp(e) {
            const t = this.regExpMap.get(e);
            if (void 0 !== t) return t;
            const i = new RegExp(e);
            return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, i), this.regExpQueue.push(e), i
        }
    }(20);

function y(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
    if (!e) return;
    if (e[t]) return e[t];
    const n = t.split(i);
    let o = e;
    for (let a = 0; a < n.length;) {
        if (!o || "object" != typeof o) return;
        let e, t = "";
        for (let s = a; s < n.length; ++s)
            if (s !== a && (t += i), t += n[s], e = o[t], void 0 !== e) {
                if (["string", "number", "boolean"].indexOf(typeof e) > -1 && s < n.length - 1) continue;
                a += s - a + 1;
                break
            }
        o = e
    }
    return o
}

function b(e) {
    return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e
}
class _ extends o {
    constructor(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            ns: ["translation"],
            defaultNS: "translation"
        };
        super(), this.data = e || {}, this.options = t, void 0 === this.options.keySeparator && (this.options.keySeparator = "."), void 0 === this.options.ignoreJSONStructure && (this.options.ignoreJSONStructure = !0)
    }
    addNamespaces(e) {
        this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
    }
    removeNamespaces(e) {
        const t = this.options.ns.indexOf(e);
        t > -1 && this.options.ns.splice(t, 1)
    }
    getResource(e, t, i) {
        let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        const o = void 0 !== n.keySeparator ? n.keySeparator : this.options.keySeparator,
            a = void 0 !== n.ignoreJSONStructure ? n.ignoreJSONStructure : this.options.ignoreJSONStructure;
        let s;
        e.indexOf(".") > -1 ? s = e.split(".") : (s = [e, t], i && (Array.isArray(i) ? s.push(...i) : "string" == typeof i && o ? s.push(...i.split(o)) : s.push(i)));
        const r = d(this.data, s);
        return !r && !t && !i && e.indexOf(".") > -1 && (e = s[0], t = s[1], i = s.slice(2).join(".")), r || !a || "string" != typeof i ? r : y(this.data && this.data[e] && this.data[e][t], i, o)
    }
    addResource(e, t, i, n) {
        let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
            silent: !1
        };
        const a = void 0 !== o.keySeparator ? o.keySeparator : this.options.keySeparator;
        let s = [e, t];
        i && (s = s.concat(a ? i.split(a) : i)), e.indexOf(".") > -1 && (s = e.split("."), n = t, t = s[1]), this.addNamespaces(t), c(this.data, s, n), o.silent || this.emit("added", e, t, i, n)
    }
    addResources(e, t, i) {
        let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
            silent: !1
        };
        for (const o in i) "string" != typeof i[o] && "[object Array]" !== Object.prototype.toString.apply(i[o]) || this.addResource(e, t, o, i[o], {
            silent: !0
        });
        n.silent || this.emit("added", e, t, i)
    }
    addResourceBundle(e, t, i, n, o) {
        let a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                silent: !1,
                skipCopy: !1
            },
            s = [e, t];
        e.indexOf(".") > -1 && (s = e.split("."), n = i, i = t, t = s[1]), this.addNamespaces(t);
        let r = d(this.data, s) || {};
        a.skipCopy || (i = JSON.parse(JSON.stringify(i))), n ? u(r, i, o) : r = { ...r,
            ...i
        }, c(this.data, s, r), a.silent || this.emit("added", e, t, i)
    }
    removeResourceBundle(e, t) {
        this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t)
    }
    hasResourceBundle(e, t) {
        return void 0 !== this.getResource(e, t)
    }
    getResourceBundle(e, t) {
        return t || (t = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? { ...this.getResource(e, t)
        } : this.getResource(e, t)
    }
    getDataByLanguage(e) {
        return this.data[e]
    }
    hasLanguageSomeTranslations(e) {
        const t = this.getDataByLanguage(e);
        return !!(t && Object.keys(t) || []).find(e => t[e] && Object.keys(t[e]).length > 0)
    }
    toJSON() {
        return this.data
    }
}
var v = {
    processors: {},
    addPostProcessor(e) {
        this.processors[e.name] = e
    },
    handle(e, t, i, n, o) {
        return e.forEach(e => {
            this.processors[e] && (t = this.processors[e].process(t, i, n, o))
        }), t
    }
};
const w = {};
class k extends o {
    constructor(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var i, o;
        super(), i = e, o = this, ["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"].forEach(e => {
            i[e] && (o[e] = i[e])
        }), this.options = t, void 0 === this.options.keySeparator && (this.options.keySeparator = "."), this.logger = n.create("translator")
    }
    changeLanguage(e) {
        e && (this.language = e)
    }
    exists(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            interpolation: {}
        };
        if (null == e) return !1;
        const i = this.resolve(e, t);
        return i && void 0 !== i.res
    }
    extractFromKey(e, t) {
        let i = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
        void 0 === i && (i = ":");
        const n = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator;
        let o = t.ns || this.options.defaultNS || [];
        const a = i && e.indexOf(i) > -1,
            s = !(this.options.userDefinedKeySeparator || t.keySeparator || this.options.userDefinedNsSeparator || t.nsSeparator || function(e, t, i) {
                t = t || "", i = i || "";
                const n = f.filter(e => t.indexOf(e) < 0 && i.indexOf(e) < 0);
                if (0 === n.length) return !0;
                const o = h.getRegExp(`(${n.map(e=>"?"===e?"\\?":e).join("|")})`);
                let a = !o.test(e);
                if (!a) {
                    const t = e.indexOf(i);
                    t > 0 && !o.test(e.substring(0, t)) && (a = !0)
                }
                return a
            }(e, i, n));
        if (a && !s) {
            const t = e.match(this.interpolator.nestingRegexp);
            if (t && t.length > 0) return {
                key: e,
                namespaces: o
            };
            const a = e.split(i);
            (i !== n || i === n && this.options.ns.indexOf(a[0]) > -1) && (o = a.shift()), e = a.join(n)
        }
        return "string" == typeof o && (o = [o]), {
            key: e,
            namespaces: o
        }
    }
    translate(e, t, i) {
        if ("object" != typeof t && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), "object" == typeof t && (t = { ...t
            }), t || (t = {}), null == e) return "";
        Array.isArray(e) || (e = [String(e)]);
        const n = void 0 !== t.returnDetails ? t.returnDetails : this.options.returnDetails,
            o = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
            {
                key: a,
                namespaces: s
            } = this.extractFromKey(e[e.length - 1], t),
            r = s[s.length - 1],
            l = t.lng || this.language,
            c = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
        if (l && "cimode" === l.toLowerCase()) {
            if (c) {
                const e = t.nsSeparator || this.options.nsSeparator;
                return n ? {
                    res: `${r}${e}${a}`,
                    usedKey: a,
                    exactUsedKey: a,
                    usedLng: l,
                    usedNS: r,
                    usedParams: this.getUsedParamsDetails(t)
                } : `${r}${e}${a}`
            }
            return n ? {
                res: a,
                usedKey: a,
                exactUsedKey: a,
                usedLng: l,
                usedNS: r,
                usedParams: this.getUsedParamsDetails(t)
            } : a
        }
        const d = this.resolve(e, t);
        let u = d && d.res;
        const p = d && d.usedKey || a,
            g = d && d.exactUsedKey || a,
            m = Object.prototype.toString.apply(u),
            f = void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays,
            h = !this.i18nFormat || this.i18nFormat.handleAsObject;
        if (h && u && ("string" != typeof u && "boolean" != typeof u && "number" != typeof u) && ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(m) < 0 && ("string" != typeof f || "[object Array]" !== m)) {
            if (!t.returnObjects && !this.options.returnObjects) {
                this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                const e = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(p, u, { ...t,
                    ns: s
                }) : `key '${a} (${this.language})' returned an object instead of string.`;
                return n ? (d.res = e, d.usedParams = this.getUsedParamsDetails(t), d) : e
            }
            if (o) {
                const e = "[object Array]" === m,
                    i = e ? [] : {},
                    n = e ? g : p;
                for (const a in u)
                    if (Object.prototype.hasOwnProperty.call(u, a)) {
                        const e = `${n}${o}${a}`;
                        i[a] = this.translate(e, { ...t,
                            joinArrays: !1,
                            ns: s
                        }), i[a] === e && (i[a] = u[a])
                    }
                u = i
            }
        } else if (h && "string" == typeof f && "[object Array]" === m) u = u.join(f), u && (u = this.extendTranslation(u, e, t, i));
        else {
            let n = !1,
                s = !1;
            const c = void 0 !== t.count && "string" != typeof t.count,
                p = k.hasDefaultValue(t),
                g = c ? this.pluralResolver.getSuffix(l, t.count, t) : "",
                m = t.ordinal && c ? this.pluralResolver.getSuffix(l, t.count, {
                    ordinal: !1
                }) : "",
                f = c && !t.ordinal && 0 === t.count && this.pluralResolver.shouldUseIntlApi(),
                h = f && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${g}`] || t[`defaultValue${m}`] || t.defaultValue;
            !this.isValidLookup(u) && p && (n = !0, u = h), this.isValidLookup(u) || (s = !0, u = a);
            const y = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && s ? void 0 : u,
                b = p && h !== u && this.options.updateMissing;
            if (s || n || b) {
                if (this.logger.log(b ? "updateKey" : "missingKey", l, r, a, b ? h : u), o) {
                    const e = this.resolve(a, { ...t,
                        keySeparator: !1
                    });
                    e && e.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                }
                let e = [];
                const i = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
                if ("fallback" === this.options.saveMissingTo && i && i[0])
                    for (let t = 0; t < i.length; t++) e.push(i[t]);
                else "all" === this.options.saveMissingTo ? e = this.languageUtils.toResolveHierarchy(t.lng || this.language) : e.push(t.lng || this.language);
                const n = (e, i, n) => {
                    const o = p && n !== u ? n : y;
                    this.options.missingKeyHandler ? this.options.missingKeyHandler(e, r, i, o, b, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(e, r, i, o, b, t), this.emit("missingKey", e, r, i, u)
                };
                this.options.saveMissing && (this.options.saveMissingPlurals && c ? e.forEach(e => {
                    const i = this.pluralResolver.getSuffixes(e, t);
                    f && t[`defaultValue${this.options.pluralSeparator}zero`] && i.indexOf(`${this.options.pluralSeparator}zero`) < 0 && i.push(`${this.options.pluralSeparator}zero`), i.forEach(i => {
                        n([e], a + i, t[`defaultValue${i}`] || h)
                    })
                }) : n(e, a, h))
            }
            u = this.extendTranslation(u, e, t, d, i), s && u === a && this.options.appendNamespaceToMissingKey && (u = `${r}:${a}`), (s || n) && this.options.parseMissingKeyHandler && (u = "v1" !== this.options.compatibilityAPI ? this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${r}:${a}` : a, n ? u : void 0) : this.options.parseMissingKeyHandler(u))
        }
        return n ? (d.res = u, d.usedParams = this.getUsedParamsDetails(t), d) : u
    }
    extendTranslation(e, t, i, n, o) {
        var a = this;
        if (this.i18nFormat && this.i18nFormat.parse) e = this.i18nFormat.parse(e, { ...this.options.interpolation.defaultVariables,
            ...i
        }, i.lng || this.language || n.usedLng, n.usedNS, n.usedKey, {
            resolved: n
        });
        else if (!i.skipInterpolation) {
            i.interpolation && this.interpolator.init({ ...i,
                interpolation: { ...this.options.interpolation,
                    ...i.interpolation
                }
            });
            const s = "string" == typeof e && (i && i.interpolation && void 0 !== i.interpolation.skipOnVariables ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
            let r;
            if (s) {
                const t = e.match(this.interpolator.nestingRegexp);
                r = t && t.length
            }
            let l = i.replace && "string" != typeof i.replace ? i.replace : i;
            if (this.options.interpolation.defaultVariables && (l = { ...this.options.interpolation.defaultVariables,
                    ...l
                }), e = this.interpolator.interpolate(e, l, i.lng || this.language, i), s) {
                const t = e.match(this.interpolator.nestingRegexp);
                r < (t && t.length) && (i.nest = !1)
            }!i.lng && "v1" !== this.options.compatibilityAPI && n && n.res && (i.lng = n.usedLng), !1 !== i.nest && (e = this.interpolator.nest(e, function() {
                for (var e = arguments.length, n = new Array(e), s = 0; s < e; s++) n[s] = arguments[s];
                return o && o[0] === n[0] && !i.context ? (a.logger.warn(`It seems you are nesting recursively key: ${n[0]} in key: ${t[0]}`), null) : a.translate(...n, t)
            }, i)), i.interpolation && this.interpolator.reset()
        }
        const s = i.postProcess || this.options.postProcess,
            r = "string" == typeof s ? [s] : s;
        return null != e && r && r.length && !1 !== i.applyPostProcessor && (e = v.handle(r, e, t, this.options && this.options.postProcessPassResolved ? {
            i18nResolved: { ...n,
                usedParams: this.getUsedParamsDetails(i)
            },
            ...i
        } : i, this)), e
    }
    resolve(e) {
        let t, i, n, o, a, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return "string" == typeof e && (e = [e]), e.forEach(e => {
            if (this.isValidLookup(t)) return;
            const r = this.extractFromKey(e, s),
                l = r.key;
            i = l;
            let c = r.namespaces;
            this.options.fallbackNS && (c = c.concat(this.options.fallbackNS));
            const d = void 0 !== s.count && "string" != typeof s.count,
                u = d && !s.ordinal && 0 === s.count && this.pluralResolver.shouldUseIntlApi(),
                p = void 0 !== s.context && ("string" == typeof s.context || "number" == typeof s.context) && "" !== s.context,
                g = s.lngs ? s.lngs : this.languageUtils.toResolveHierarchy(s.lng || this.language, s.fallbackLng);
            c.forEach(e => {
                this.isValidLookup(t) || (a = e, !w[`${g[0]}-${e}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(a) && (w[`${g[0]}-${e}`] = !0, this.logger.warn(`key "${i}" for languages "${g.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), g.forEach(i => {
                    if (this.isValidLookup(t)) return;
                    o = i;
                    const a = [l];
                    if (this.i18nFormat && this.i18nFormat.addLookupKeys) this.i18nFormat.addLookupKeys(a, l, i, e, s);
                    else {
                        let e;
                        d && (e = this.pluralResolver.getSuffix(i, s.count, s));
                        const t = `${this.options.pluralSeparator}zero`,
                            n = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                        if (d && (a.push(l + e), s.ordinal && 0 === e.indexOf(n) && a.push(l + e.replace(n, this.options.pluralSeparator)), u && a.push(l + t)), p) {
                            const i = `${l}${this.options.contextSeparator}${s.context}`;
                            a.push(i), d && (a.push(i + e), s.ordinal && 0 === e.indexOf(n) && a.push(i + e.replace(n, this.options.pluralSeparator)), u && a.push(i + t))
                        }
                    }
                    let r;
                    for (; r = a.pop();) this.isValidLookup(t) || (n = r, t = this.getResource(i, e, r, s))
                }))
            })
        }), {
            res: t,
            usedKey: i,
            exactUsedKey: n,
            usedLng: o,
            usedNS: a
        }
    }
    isValidLookup(e) {
        return !(void 0 === e || !this.options.returnNull && null === e || !this.options.returnEmptyString && "" === e)
    }
    getResource(e, t, i) {
        let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, i, n) : this.resourceStore.getResource(e, t, i, n)
    }
    getUsedParamsDetails() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"],
            i = e.replace && "string" != typeof e.replace;
        let n = i ? e.replace : e;
        if (i && void 0 !== e.count && (n.count = e.count), this.options.interpolation.defaultVariables && (n = { ...this.options.interpolation.defaultVariables,
                ...n
            }), !i) {
            n = { ...n
            };
            for (const e of t) delete n[e]
        }
        return n
    }
    static hasDefaultValue(e) {
        const t = "defaultValue";
        for (const i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && t === i.substring(0, 12) && void 0 !== e[i]) return !0;
        return !1
    }
}

function S(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}
class E {
    constructor(e) {
        this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = n.create("languageUtils")
    }
    getScriptPartFromCode(e) {
        if (!(e = b(e)) || e.indexOf("-") < 0) return null;
        const t = e.split("-");
        return 2 === t.length ? null : (t.pop(), "x" === t[t.length - 1].toLowerCase() ? null : this.formatLanguageCode(t.join("-")))
    }
    getLanguagePartFromCode(e) {
        if (!(e = b(e)) || e.indexOf("-") < 0) return e;
        const t = e.split("-");
        return this.formatLanguageCode(t[0])
    }
    formatLanguageCode(e) {
        if ("string" == typeof e && e.indexOf("-") > -1) {
            const t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
            let i = e.split("-");
            return this.options.lowerCaseLng ? i = i.map(e => e.toLowerCase()) : 2 === i.length ? (i[0] = i[0].toLowerCase(), i[1] = i[1].toUpperCase(), t.indexOf(i[1].toLowerCase()) > -1 && (i[1] = S(i[1].toLowerCase()))) : 3 === i.length && (i[0] = i[0].toLowerCase(), 2 === i[1].length && (i[1] = i[1].toUpperCase()), "sgn" !== i[0] && 2 === i[2].length && (i[2] = i[2].toUpperCase()), t.indexOf(i[1].toLowerCase()) > -1 && (i[1] = S(i[1].toLowerCase())), t.indexOf(i[2].toLowerCase()) > -1 && (i[2] = S(i[2].toLowerCase()))), i.join("-")
        }
        return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
    }
    isSupportedCode(e) {
        return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
    }
    getBestMatchFromCodes(e) {
        if (!e) return null;
        let t;
        return e.forEach(e => {
            if (t) return;
            const i = this.formatLanguageCode(e);
            this.options.supportedLngs && !this.isSupportedCode(i) || (t = i)
        }), !t && this.options.supportedLngs && e.forEach(e => {
            if (t) return;
            const i = this.getLanguagePartFromCode(e);
            if (this.isSupportedCode(i)) return t = i;
            t = this.options.supportedLngs.find(e => e === i ? e : e.indexOf("-") < 0 && i.indexOf("-") < 0 ? void 0 : e.indexOf("-") > 0 && i.indexOf("-") < 0 && e.substring(0, e.indexOf("-")) === i || 0 === e.indexOf(i) && i.length > 1 ? e : void 0)
        }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t
    }
    getFallbackCodes(e, t) {
        if (!e) return [];
        if ("function" == typeof e && (e = e(t)), "string" == typeof e && (e = [e]), "[object Array]" === Object.prototype.toString.apply(e)) return e;
        if (!t) return e.default || [];
        let i = e[t];
        return i || (i = e[this.getScriptPartFromCode(t)]), i || (i = e[this.formatLanguageCode(t)]), i || (i = e[this.getLanguagePartFromCode(t)]), i || (i = e.default), i || []
    }
    toResolveHierarchy(e, t) {
        const i = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
            n = [],
            o = e => {
                e && (this.isSupportedCode(e) ? n.push(e) : this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))
            };
        return "string" == typeof e && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? ("languageOnly" !== this.options.load && o(this.formatLanguageCode(e)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && o(this.getScriptPartFromCode(e)), "currentOnly" !== this.options.load && o(this.getLanguagePartFromCode(e))) : "string" == typeof e && o(this.formatLanguageCode(e)), i.forEach(e => {
            n.indexOf(e) < 0 && o(this.formatLanguageCode(e))
        }), n
    }
}
let x = [{
        lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
        nr: [1, 2],
        fc: 1
    }, {
        lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
        nr: [1, 2],
        fc: 2
    }, {
        lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
        nr: [1],
        fc: 3
    }, {
        lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
        nr: [1, 2, 5],
        fc: 4
    }, {
        lngs: ["ar"],
        nr: [0, 1, 2, 3, 11, 100],
        fc: 5
    }, {
        lngs: ["cs", "sk"],
        nr: [1, 2, 5],
        fc: 6
    }, {
        lngs: ["csb", "pl"],
        nr: [1, 2, 5],
        fc: 7
    }, {
        lngs: ["cy"],
        nr: [1, 2, 3, 8],
        fc: 8
    }, {
        lngs: ["fr"],
        nr: [1, 2],
        fc: 9
    }, {
        lngs: ["ga"],
        nr: [1, 2, 3, 7, 11],
        fc: 10
    }, {
        lngs: ["gd"],
        nr: [1, 2, 3, 20],
        fc: 11
    }, {
        lngs: ["is"],
        nr: [1, 2],
        fc: 12
    }, {
        lngs: ["jv"],
        nr: [0, 1],
        fc: 13
    }, {
        lngs: ["kw"],
        nr: [1, 2, 3, 4],
        fc: 14
    }, {
        lngs: ["lt"],
        nr: [1, 2, 10],
        fc: 15
    }, {
        lngs: ["lv"],
        nr: [1, 2, 0],
        fc: 16
    }, {
        lngs: ["mk"],
        nr: [1, 2],
        fc: 17
    }, {
        lngs: ["mnk"],
        nr: [0, 1, 2],
        fc: 18
    }, {
        lngs: ["mt"],
        nr: [1, 2, 11, 20],
        fc: 19
    }, {
        lngs: ["or"],
        nr: [2, 1],
        fc: 2
    }, {
        lngs: ["ro"],
        nr: [1, 2, 20],
        fc: 20
    }, {
        lngs: ["sl"],
        nr: [5, 1, 2, 3],
        fc: 21
    }, {
        lngs: ["he", "iw"],
        nr: [1, 2, 20, 21],
        fc: 22
    }],
    A = {
        1: function(e) {
            return Number(e > 1)
        },
        2: function(e) {
            return Number(1 != e)
        },
        3: function(e) {
            return 0
        },
        4: function(e) {
            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
        },
        5: function(e) {
            return Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5)
        },
        6: function(e) {
            return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2)
        },
        7: function(e) {
            return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
        },
        8: function(e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
        },
        9: function(e) {
            return Number(e >= 2)
        },
        10: function(e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
        },
        11: function(e) {
            return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3)
        },
        12: function(e) {
            return Number(e % 10 != 1 || e % 100 == 11)
        },
        13: function(e) {
            return Number(0 !== e)
        },
        14: function(e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
        },
        15: function(e) {
            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
        },
        16: function(e) {
            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
        },
        17: function(e) {
            return Number(1 == e || e % 10 == 1 && e % 100 != 11 ? 0 : 1)
        },
        18: function(e) {
            return Number(0 == e ? 0 : 1 == e ? 1 : 2)
        },
        19: function(e) {
            return Number(1 == e ? 0 : 0 == e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3)
        },
        20: function(e) {
            return Number(1 == e ? 0 : 0 == e || e % 100 > 0 && e % 100 < 20 ? 1 : 2)
        },
        21: function(e) {
            return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0)
        },
        22: function(e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3)
        }
    };
const L = ["v1", "v2", "v3"],
    T = ["v4"],
    O = {
        zero: 0,
        one: 1,
        two: 2,
        few: 3,
        many: 4,
        other: 5
    };
class C {
    constructor(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.languageUtils = e, this.options = t, this.logger = n.create("pluralResolver"), this.options.compatibilityJSON && !T.includes(this.options.compatibilityJSON) || "undefined" != typeof Intl && Intl.PluralRules || (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = function() {
            const e = {};
            return x.forEach(t => {
                t.lngs.forEach(i => {
                    e[i] = {
                        numbers: t.nr,
                        plurals: A[t.fc]
                    }
                })
            }), e
        }()
    }
    addRule(e, t) {
        this.rules[e] = t
    }
    getRule(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (this.shouldUseIntlApi()) try {
            return new Intl.PluralRules(b("dev" === e ? "en" : e), {
                type: t.ordinal ? "ordinal" : "cardinal"
            })
        } catch (i) {
            return
        }
        return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
    }
    needsPlural(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const i = this.getRule(e, t);
        return this.shouldUseIntlApi() ? i && i.resolvedOptions().pluralCategories.length > 1 : i && i.numbers.length > 1
    }
    getPluralFormsOfKey(e, t) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return this.getSuffixes(e, i).map(e => `${t}${e}`)
    }
    getSuffixes(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const i = this.getRule(e, t);
        return i ? this.shouldUseIntlApi() ? i.resolvedOptions().pluralCategories.sort((e, t) => O[e] - O[t]).map(e => `${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${e}`) : i.numbers.map(i => this.getSuffix(e, i, t)) : []
    }
    getSuffix(e, t) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const n = this.getRule(e, i);
        return n ? this.shouldUseIntlApi() ? `${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${n.select(t)}` : this.getSuffixRetroCompatible(n, t) : (this.logger.warn(`no plural rule found for: ${e}`), "")
    }
    getSuffixRetroCompatible(e, t) {
        const i = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t));
        let n = e.numbers[i];
        this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] && (2 === n ? n = "plural" : 1 === n && (n = ""));
        const o = () => this.options.prepend && n.toString() ? this.options.prepend + n.toString() : n.toString();
        return "v1" === this.options.compatibilityJSON ? 1 === n ? "" : "number" == typeof n ? `_plural_${n.toString()}` : o() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] ? o() : this.options.prepend && i.toString() ? this.options.prepend + i.toString() : i.toString()
    }
    shouldUseIntlApi() {
        return !L.includes(this.options.compatibilityJSON)
    }
}

function q(e, t, i) {
    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ".",
        o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
        a = function(e, t, i) {
            const n = d(e, i);
            return void 0 !== n ? n : d(t, i)
        }(e, t, i);
    return !a && o && "string" == typeof i && (a = y(e, i, n), void 0 === a && (a = y(t, i, n))), a
}
class $ {
    constructor() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.logger = n.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || (e => e), this.init(e)
    }
    init() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        e.interpolation || (e.interpolation = {
            escapeValue: !0
        });
        const t = e.interpolation;
        this.escape = void 0 !== t.escape ? t.escape : m, this.escapeValue = void 0 === t.escapeValue || t.escapeValue, this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape, this.prefix = t.prefix ? p(t.prefix) : t.prefixEscaped || "{{", this.suffix = t.suffix ? p(t.suffix) : t.suffixEscaped || "}}", this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",", this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "", this.nestingPrefix = t.nestingPrefix ? p(t.nestingPrefix) : t.nestingPrefixEscaped || p("$t("), this.nestingSuffix = t.nestingSuffix ? p(t.nestingSuffix) : t.nestingSuffixEscaped || p(")"), this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",", this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3, this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat, this.resetRegExp()
    }
    reset() {
        this.options && this.init(this.options)
    }
    resetRegExp() {
        const e = (e, t) => e && e.source === t ? (e.lastIndex = 0, e) : new RegExp(t, "g");
        this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`)
    }
    interpolate(e, t, i, n) {
        let o, a, r;
        const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

        function c(e) {
            return e.replace(/\$/g, "$$$$")
        }
        const d = e => {
            if (e.indexOf(this.formatSeparator) < 0) {
                const o = q(t, l, e, this.options.keySeparator, this.options.ignoreJSONStructure);
                return this.alwaysFormat ? this.format(o, void 0, i, { ...n,
                    ...t,
                    interpolationkey: e
                }) : o
            }
            const o = e.split(this.formatSeparator),
                a = o.shift().trim(),
                s = o.join(this.formatSeparator).trim();
            return this.format(q(t, l, a, this.options.keySeparator, this.options.ignoreJSONStructure), s, i, { ...n,
                ...t,
                interpolationkey: a
            })
        };
        this.resetRegExp();
        const u = n && n.missingInterpolationHandler || this.options.missingInterpolationHandler,
            p = n && n.interpolation && void 0 !== n.interpolation.skipOnVariables ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
        return [{
            regex: this.regexpUnescape,
            safeValue: e => c(e)
        }, {
            regex: this.regexp,
            safeValue: e => this.escapeValue ? c(this.escape(e)) : c(e)
        }].forEach(t => {
            for (r = 0; o = t.regex.exec(e);) {
                const i = o[1].trim();
                if (a = d(i), void 0 === a)
                    if ("function" == typeof u) {
                        const t = u(e, o, n);
                        a = "string" == typeof t ? t : ""
                    } else if (n && Object.prototype.hasOwnProperty.call(n, i)) a = "";
                else {
                    if (p) {
                        a = o[0];
                        continue
                    }
                    this.logger.warn(`missed to pass in variable ${i} for interpolating ${e}`), a = ""
                } else "string" == typeof a || this.useRawValueToEscape || (a = s(a));
                const l = t.safeValue(a);
                if (e = e.replace(o[0], l), p ? (t.regex.lastIndex += a.length, t.regex.lastIndex -= o[0].length) : t.regex.lastIndex = 0, r++, r >= this.maxReplaces) break
            }
        }), e
    }
    nest(e, t) {
        let i, n, o, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};

        function r(e, t) {
            const i = this.nestingOptionsSeparator;
            if (e.indexOf(i) < 0) return e;
            const n = e.split(new RegExp(`${i}[ ]*{`));
            let a = `{${n[1]}`;
            e = n[0], a = this.interpolate(a, o);
            const s = a.match(/'/g),
                r = a.match(/"/g);
            (s && s.length % 2 == 0 && !r || r.length % 2 != 0) && (a = a.replace(/'/g, '"'));
            try {
                o = JSON.parse(a), t && (o = { ...t,
                    ...o
                })
            } catch (l) {
                return this.logger.warn(`failed parsing options string in nesting for key ${e}`, l), `${e}${i}${a}`
            }
            return o.defaultValue && o.defaultValue.indexOf(this.prefix) > -1 && delete o.defaultValue, e
        }
        for (; i = this.nestingRegexp.exec(e);) {
            let l = [];
            o = { ...a
            }, o = o.replace && "string" != typeof o.replace ? o.replace : o, o.applyPostProcessor = !1, delete o.defaultValue;
            let c = !1;
            if (-1 !== i[0].indexOf(this.formatSeparator) && !/{.*}/.test(i[1])) {
                const e = i[1].split(this.formatSeparator).map(e => e.trim());
                i[1] = e.shift(), l = e, c = !0
            }
            if (n = t(r.call(this, i[1].trim(), o), o), n && i[0] === e && "string" != typeof n) return n;
            "string" != typeof n && (n = s(n)), n || (this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`), n = ""), c && (n = l.reduce((e, t) => this.format(e, t, a.lng, { ...a,
                interpolationkey: i[1].trim()
            }), n.trim())), e = e.replace(i[0], n), this.regexp.lastIndex = 0
        }
        return e
    }
}

function P(e) {
    const t = {};
    return function(i, n, o) {
        const a = n + JSON.stringify(o);
        let s = t[a];
        return s || (s = e(b(n), o), t[a] = s), s(i)
    }
}
class R {
    constructor() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.logger = n.create("formatter"), this.options = e, this.formats = {
            number: P((e, t) => {
                const i = new Intl.NumberFormat(e, { ...t
                });
                return e => i.format(e)
            }),
            currency: P((e, t) => {
                const i = new Intl.NumberFormat(e, { ...t,
                    style: "currency"
                });
                return e => i.format(e)
            }),
            datetime: P((e, t) => {
                const i = new Intl.DateTimeFormat(e, { ...t
                });
                return e => i.format(e)
            }),
            relativetime: P((e, t) => {
                const i = new Intl.RelativeTimeFormat(e, { ...t
                });
                return e => i.format(e, t.range || "day")
            }),
            list: P((e, t) => {
                const i = new Intl.ListFormat(e, { ...t
                });
                return e => i.format(e)
            })
        }, this.init(e)
    }
    init(e) {
        const t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            interpolation: {}
        }).interpolation;
        this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ","
    }
    add(e, t) {
        this.formats[e.toLowerCase().trim()] = t
    }
    addCached(e, t) {
        this.formats[e.toLowerCase().trim()] = P(t)
    }
    format(e, t, i) {
        let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return t.split(this.formatSeparator).reduce((e, t) => {
            const {
                formatName: o,
                formatOptions: a
            } = function(e) {
                let t = e.toLowerCase().trim();
                const i = {};
                if (e.indexOf("(") > -1) {
                    const n = e.split("(");
                    t = n[0].toLowerCase().trim();
                    const o = n[1].substring(0, n[1].length - 1);
                    "currency" === t && o.indexOf(":") < 0 ? i.currency || (i.currency = o.trim()) : "relativetime" === t && o.indexOf(":") < 0 ? i.range || (i.range = o.trim()) : o.split(";").forEach(e => {
                        if (!e) return;
                        const [t, ...n] = e.split(":"), o = n.join(":").trim().replace(/^'+|'+$/g, "");
                        i[t.trim()] || (i[t.trim()] = o), "false" === o && (i[t.trim()] = !1), "true" === o && (i[t.trim()] = !0), isNaN(o) || (i[t.trim()] = parseInt(o, 10))
                    })
                }
                return {
                    formatName: t,
                    formatOptions: i
                }
            }(t);
            if (this.formats[o]) {
                let t = e;
                try {
                    const s = n && n.formatParams && n.formatParams[n.interpolationkey] || {},
                        r = s.locale || s.lng || n.locale || n.lng || i;
                    t = this.formats[o](e, r, { ...a,
                        ...n,
                        ...s
                    })
                } catch (s) {
                    this.logger.warn(s)
                }
                return t
            }
            return this.logger.warn(`there was no format function for ${o}`), e
        }, e)
    }
}
class N extends o {
    constructor(e, t, i) {
        let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(), this.backend = e, this.store = t, this.services = i, this.languageUtils = i.languageUtils, this.options = o, this.logger = n.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = o.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(i, o.backend, o)
    }
    queueLoad(e, t, i, n) {
        const o = {},
            a = {},
            s = {},
            r = {};
        return e.forEach(e => {
            let n = !0;
            t.forEach(t => {
                const s = `${e}|${t}`;
                !i.reload && this.store.hasResourceBundle(e, t) ? this.state[s] = 2 : this.state[s] < 0 || (1 === this.state[s] ? void 0 === a[s] && (a[s] = !0) : (this.state[s] = 1, n = !1, void 0 === a[s] && (a[s] = !0), void 0 === o[s] && (o[s] = !0), void 0 === r[t] && (r[t] = !0)))
            }), n || (s[e] = !0)
        }), (Object.keys(o).length || Object.keys(a).length) && this.queue.push({
            pending: a,
            pendingCount: Object.keys(a).length,
            loaded: {},
            errors: [],
            callback: n
        }), {
            toLoad: Object.keys(o),
            pending: Object.keys(a),
            toLoadLanguages: Object.keys(s),
            toLoadNamespaces: Object.keys(r)
        }
    }
    loaded(e, t, i) {
        const n = e.split("|"),
            o = n[0],
            a = n[1];
        t && this.emit("failedLoading", o, a, t), i && this.store.addResourceBundle(o, a, i, void 0, void 0, {
            skipCopy: !0
        }), this.state[e] = t ? -1 : 2;
        const s = {};
        this.queue.forEach(i => {
            ! function(e, t, i, n) {
                const {
                    obj: o,
                    k: a
                } = l(e, t, Object);
                o[a] = o[a] || [], n && (o[a] = o[a].concat(i)), n || o[a].push(i)
            }(i.loaded, [o], a),
            function(e, t) {
                void 0 !== e.pending[t] && (delete e.pending[t], e.pendingCount--)
            }(i, e), t && i.errors.push(t), 0 !== i.pendingCount || i.done || (Object.keys(i.loaded).forEach(e => {
                s[e] || (s[e] = {});
                const t = i.loaded[e];
                t.length && t.forEach(t => {
                    void 0 === s[e][t] && (s[e][t] = !0)
                })
            }), i.done = !0, i.errors.length ? i.callback(i.errors) : i.callback())
        }), this.emit("loaded", s), this.queue = this.queue.filter(e => !e.done)
    }
    read(e, t, i) {
        let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.retryTimeout,
            a = arguments.length > 5 ? arguments[5] : void 0;
        if (!e.length) return a(null, {});
        if (this.readingCalls >= this.maxParallelReads) return void this.waitingReads.push({
            lng: e,
            ns: t,
            fcName: i,
            tried: n,
            wait: o,
            callback: a
        });
        this.readingCalls++;
        const s = (s, r) => {
                if (this.readingCalls--, this.waitingReads.length > 0) {
                    const e = this.waitingReads.shift();
                    this.read(e.lng, e.ns, e.fcName, e.tried, e.wait, e.callback)
                }
                s && r && n < this.maxRetries ? setTimeout(() => {
                    this.read.call(this, e, t, i, n + 1, 2 * o, a)
                }, o) : a(s, r)
            },
            r = this.backend[i].bind(this.backend);
        if (2 !== r.length) return r(e, t, s);
        try {
            const i = r(e, t);
            i && "function" == typeof i.then ? i.then(e => s(null, e)).catch(s) : s(null, i)
        } catch (l) {
            s(l)
        }
    }
    prepareLoading(e, t) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            n = arguments.length > 3 ? arguments[3] : void 0;
        if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), n && n();
        "string" == typeof e && (e = this.languageUtils.toResolveHierarchy(e)), "string" == typeof t && (t = [t]);
        const o = this.queueLoad(e, t, i, n);
        if (!o.toLoad.length) return o.pending.length || n(), null;
        o.toLoad.forEach(e => {
            this.loadOne(e)
        })
    }
    load(e, t, i) {
        this.prepareLoading(e, t, {}, i)
    }
    reload(e, t, i) {
        this.prepareLoading(e, t, {
            reload: !0
        }, i)
    }
    loadOne(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        const i = e.split("|"),
            n = i[0],
            o = i[1];
        this.read(n, o, "read", void 0, void 0, (i, a) => {
            i && this.logger.warn(`${t}loading namespace ${o} for language ${n} failed`, i), !i && a && this.logger.log(`${t}loaded namespace ${o} for language ${n}`, a), this.loaded(e, i, a)
        })
    }
    saveMissing(e, t, i, n, o) {
        let a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
            s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {};
        if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t)) this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
        else if (null != i && "" !== i) {
            if (this.backend && this.backend.create) {
                const l = { ...a,
                        isUpdate: o
                    },
                    c = this.backend.create.bind(this.backend);
                if (c.length < 6) try {
                    let o;
                    o = 5 === c.length ? c(e, t, i, n, l) : c(e, t, i, n), o && "function" == typeof o.then ? o.then(e => s(null, e)).catch(s) : s(null, o)
                } catch (r) {
                    s(r)
                } else c(e, t, i, n, s, l)
            }
            e && e[0] && this.store.addResource(e[0], t, i, n)
        }
    }
}

function I() {
    return {
        debug: !1,
        initImmediate: !0,
        ns: ["translation"],
        defaultNS: ["translation"],
        fallbackLng: ["dev"],
        fallbackNS: !1,
        supportedLngs: !1,
        nonExplicitSupportedLngs: !1,
        load: "all",
        preload: !1,
        simplifyPluralSuffix: !0,
        keySeparator: ".",
        nsSeparator: ":",
        pluralSeparator: "_",
        contextSeparator: "_",
        partialBundledLanguages: !1,
        saveMissing: !1,
        updateMissing: !1,
        saveMissingTo: "fallback",
        saveMissingPlurals: !0,
        missingKeyHandler: !1,
        missingInterpolationHandler: !1,
        postProcess: !1,
        postProcessPassResolved: !1,
        returnNull: !1,
        returnEmptyString: !0,
        returnObjects: !1,
        joinArrays: !1,
        returnedObjectHandler: !1,
        parseMissingKeyHandler: !1,
        appendNamespaceToMissingKey: !1,
        appendNamespaceToCIMode: !1,
        overloadTranslationOptionHandler: function(e) {
            let t = {};
            if ("object" == typeof e[1] && (t = e[1]), "string" == typeof e[1] && (t.defaultValue = e[1]), "string" == typeof e[2] && (t.tDescription = e[2]), "object" == typeof e[2] || "object" == typeof e[3]) {
                const i = e[3] || e[2];
                Object.keys(i).forEach(e => {
                    t[e] = i[e]
                })
            }
            return t
        },
        interpolation: {
            escapeValue: !0,
            format: e => e,
            prefix: "{{",
            suffix: "}}",
            formatSeparator: ",",
            unescapePrefix: "-",
            nestingPrefix: "$t(",
            nestingSuffix: ")",
            nestingOptionsSeparator: ",",
            maxReplaces: 1e3,
            skipOnVariables: !0
        }
    }
}

function M(e) {
    return "string" == typeof e.ns && (e.ns = [e.ns]), "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]), "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e
}

function j() {}
class D extends o {
    constructor() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
        var i;
        if (super(), this.options = M(e), this.services = {}, this.logger = n, this.modules = {
                external: []
            }, i = this, Object.getOwnPropertyNames(Object.getPrototypeOf(i)).forEach(e => {
                "function" == typeof i[e] && (i[e] = i[e].bind(i))
            }), t && !this.isInitialized && !e.isClone) {
            if (!this.options.initImmediate) return this.init(e, t), this;
            setTimeout(() => {
                this.init(e, t)
            }, 0)
        }
    }
    init() {
        var e = this;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            i = arguments.length > 1 ? arguments[1] : void 0;
        this.isInitializing = !0, "function" == typeof t && (i = t, t = {}), !t.defaultNS && !1 !== t.defaultNS && t.ns && ("string" == typeof t.ns ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
        const o = I();

        function s(e) {
            return e ? "function" == typeof e ? new e : e : null
        }
        if (this.options = { ...o,
                ...this.options,
                ...M(t)
            }, "v1" !== this.options.compatibilityAPI && (this.options.interpolation = { ...o.interpolation,
                ...this.options.interpolation
            }), void 0 !== t.keySeparator && (this.options.userDefinedKeySeparator = t.keySeparator), void 0 !== t.nsSeparator && (this.options.userDefinedNsSeparator = t.nsSeparator), !this.options.isClone) {
            let t;
            this.modules.logger ? n.init(s(this.modules.logger), this.options) : n.init(null, this.options), this.modules.formatter ? t = this.modules.formatter : "undefined" != typeof Intl && (t = R);
            const i = new E(this.options);
            this.store = new _(this.options.resources, this.options);
            const a = this.services;
            a.logger = n, a.resourceStore = this.store, a.languageUtils = i, a.pluralResolver = new C(i, {
                prepend: this.options.pluralSeparator,
                compatibilityJSON: this.options.compatibilityJSON,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix
            }), !t || this.options.interpolation.format && this.options.interpolation.format !== o.interpolation.format || (a.formatter = s(t), a.formatter.init(a, this.options), this.options.interpolation.format = a.formatter.format.bind(a.formatter)), a.interpolator = new $(this.options), a.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
            }, a.backendConnector = new N(s(this.modules.backend), a.resourceStore, a, this.options), a.backendConnector.on("*", function(t) {
                for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) n[o - 1] = arguments[o];
                e.emit(t, ...n)
            }), this.modules.languageDetector && (a.languageDetector = s(this.modules.languageDetector), a.languageDetector.init && a.languageDetector.init(a, this.options.detection, this.options)), this.modules.i18nFormat && (a.i18nFormat = s(this.modules.i18nFormat), a.i18nFormat.init && a.i18nFormat.init(this)), this.translator = new k(this.services, this.options), this.translator.on("*", function(t) {
                for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) n[o - 1] = arguments[o];
                e.emit(t, ...n)
            }), this.modules.external.forEach(e => {
                e.init && e.init(this)
            })
        }
        if (this.format = this.options.interpolation.format, i || (i = j), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
            const e = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            e.length > 0 && "dev" !== e[0] && (this.options.lng = e[0])
        }
        this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined");
        ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(t => {
            this[t] = function() {
                return e.store[t](...arguments)
            }
        });
        ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(t => {
            this[t] = function() {
                return e.store[t](...arguments), e
            }
        });
        const r = a(),
            l = () => {
                const e = (e, t) => {
                    this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), r.resolve(t), i(e, t)
                };
                if (this.languages && "v1" !== this.options.compatibilityAPI && !this.isInitialized) return e(null, this.t.bind(this));
                this.changeLanguage(this.options.lng, e)
            };
        return this.options.resources || !this.options.initImmediate ? l() : setTimeout(l, 0), r
    }
    loadResources(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : j;
        const i = "string" == typeof e ? e : this.language;
        if ("function" == typeof e && (t = e), !this.options.resources || this.options.partialBundledLanguages) {
            if (i && "cimode" === i.toLowerCase() && (!this.options.preload || 0 === this.options.preload.length)) return t();
            const e = [],
                n = t => {
                    if (!t) return;
                    if ("cimode" === t) return;
                    this.services.languageUtils.toResolveHierarchy(t).forEach(t => {
                        "cimode" !== t && e.indexOf(t) < 0 && e.push(t)
                    })
                };
            if (i) n(i);
            else {
                this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e => n(e))
            }
            this.options.preload && this.options.preload.forEach(e => n(e)), this.services.backendConnector.load(e, this.options.ns, e => {
                e || this.resolvedLanguage || !this.language || this.setResolvedLanguage(this.language), t(e)
            })
        } else t(null)
    }
    reloadResources(e, t, i) {
        const n = a();
        return e || (e = this.languages), t || (t = this.options.ns), i || (i = j), this.services.backendConnector.reload(e, t, e => {
            n.resolve(), i(e)
        }), n
    }
    use(e) {
        if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
        if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
        return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && v.addPostProcessor(e), "formatter" === e.type && (this.modules.formatter = e), "3rdParty" === e.type && this.modules.external.push(e), this
    }
    setResolvedLanguage(e) {
        if (e && this.languages && !(["cimode", "dev"].indexOf(e) > -1))
            for (let t = 0; t < this.languages.length; t++) {
                const e = this.languages[t];
                if (!(["cimode", "dev"].indexOf(e) > -1) && this.store.hasLanguageSomeTranslations(e)) {
                    this.resolvedLanguage = e;
                    break
                }
            }
    }
    changeLanguage(e, t) {
        var i = this;
        this.isLanguageChangingTo = e;
        const n = a();
        this.emit("languageChanging", e);
        const o = e => {
                this.language = e, this.languages = this.services.languageUtils.toResolveHierarchy(e), this.resolvedLanguage = void 0, this.setResolvedLanguage(e)
            },
            s = (e, a) => {
                a ? (o(a), this.translator.changeLanguage(a), this.isLanguageChangingTo = void 0, this.emit("languageChanged", a), this.logger.log("languageChanged", a)) : this.isLanguageChangingTo = void 0, n.resolve(function() {
                    return i.t(...arguments)
                }), t && t(e, function() {
                    return i.t(...arguments)
                })
            },
            r = t => {
                e || t || !this.services.languageDetector || (t = []);
                const i = "string" == typeof t ? t : this.services.languageUtils.getBestMatchFromCodes(t);
                i && (this.language || o(i), this.translator.language || this.translator.changeLanguage(i), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(i)), this.loadResources(i, e => {
                    s(e, i)
                })
            };
        return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? 0 === this.services.languageDetector.detect.length ? this.services.languageDetector.detect().then(r) : this.services.languageDetector.detect(r) : r(e) : r(this.services.languageDetector.detect()), n
    }
    getFixedT(e, t, i) {
        var n = this;
        const o = function(e, t) {
            let a;
            if ("object" != typeof t) {
                for (var s = arguments.length, r = new Array(s > 2 ? s - 2 : 0), l = 2; l < s; l++) r[l - 2] = arguments[l];
                a = n.options.overloadTranslationOptionHandler([e, t].concat(r))
            } else a = { ...t
            };
            a.lng = a.lng || o.lng, a.lngs = a.lngs || o.lngs, a.ns = a.ns || o.ns, a.keyPrefix = a.keyPrefix || i || o.keyPrefix;
            const c = n.options.keySeparator || ".";
            let d;
            return d = a.keyPrefix && Array.isArray(e) ? e.map(e => `${a.keyPrefix}${c}${e}`) : a.keyPrefix ? `${a.keyPrefix}${c}${e}` : e, n.t(d, a)
        };
        return "string" == typeof e ? o.lng = e : o.lngs = e, o.ns = t, o.keyPrefix = i, o
    }
    t() {
        return this.translator && this.translator.translate(...arguments)
    }
    exists() {
        return this.translator && this.translator.exists(...arguments)
    }
    setDefaultNamespace(e) {
        this.options.defaultNS = e
    }
    hasLoadedNamespace(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
        if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
        const i = t.lng || this.resolvedLanguage || this.languages[0],
            n = !!this.options && this.options.fallbackLng,
            o = this.languages[this.languages.length - 1];
        if ("cimode" === i.toLowerCase()) return !0;
        const a = (e, t) => {
            const i = this.services.backendConnector.state[`${e}|${t}`];
            return -1 === i || 2 === i
        };
        if (t.precheck) {
            const e = t.precheck(this, a);
            if (void 0 !== e) return e
        }
        return !!this.hasResourceBundle(i, e) || (!(this.services.backendConnector.backend && (!this.options.resources || this.options.partialBundledLanguages)) || !(!a(i, e) || n && !a(o, e)))
    }
    loadNamespaces(e, t) {
        const i = a();
        return this.options.ns ? ("string" == typeof e && (e = [e]), e.forEach(e => {
            this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
        }), this.loadResources(e => {
            i.resolve(), t && t(e)
        }), i) : (t && t(), Promise.resolve())
    }
    loadLanguages(e, t) {
        const i = a();
        "string" == typeof e && (e = [e]);
        const n = this.options.preload || [],
            o = e.filter(e => n.indexOf(e) < 0);
        return o.length ? (this.options.preload = n.concat(o), this.loadResources(e => {
            i.resolve(), t && t(e)
        }), i) : (t && t(), Promise.resolve())
    }
    dir(e) {
        if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e) return "rtl";
        const t = this.services && this.services.languageUtils || new E(I());
        return ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"].indexOf(t.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
    }
    static createInstance() {
        return new D(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, arguments.length > 1 ? arguments[1] : void 0)
    }
    cloneInstance() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : j;
        const i = e.forkResourceStore;
        i && delete e.forkResourceStore;
        const n = { ...this.options,
                ...e,
                isClone: !0
            },
            o = new D(n);
        void 0 === e.debug && void 0 === e.prefix || (o.logger = o.logger.clone(e));
        return ["store", "services", "language"].forEach(e => {
            o[e] = this[e]
        }), o.services = { ...this.services
        }, o.services.utils = {
            hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
        }, i && (o.store = new _(this.store.data, n), o.services.resourceStore = o.store), o.translator = new k(o.services, n), o.translator.on("*", function(e) {
            for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
            o.emit(e, ...i)
        }), o.init(n, t), o.translator.options = n, o.translator.backendConnector.services.utils = {
            hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
        }, o
    }
    toJSON() {
        return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage
        }
    }
}
const F = D.createInstance();
F.createInstance = D.createInstance, F.createInstance, F.dir, F.init, F.loadResources, F.reloadResources, F.use, F.changeLanguage, F.getFixedT, F.t, F.exists, F.setDefaultNamespace, F.hasLoadedNamespace, F.loadNamespaces, F.loadLanguages;
var z = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

function B(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var U = {
    exports: {}
};
U.exports = K, U.exports.isMobile = K, U.exports.default = K;
const H = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,
    V = /CrOS/,
    W = /android|ipad|playbook|silk/i;

function K(e) {
    e || (e = {});
    let t = e.ua;
    if (t || "undefined" == typeof navigator || (t = navigator.userAgent), t && t.headers && "string" == typeof t.headers["user-agent"] && (t = t.headers["user-agent"]), "string" != typeof t) return !1;
    let i = H.test(t) && !V.test(t) || !!e.tablet && W.test(t);
    return !i && e.tablet && e.featureDetect && navigator && navigator.maxTouchPoints > 1 && -1 !== t.indexOf("Macintosh") && -1 !== t.indexOf("Safari") && (i = !0), i
}
const J = B(U.exports);

function G(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {
    toString: X
} = Object.prototype, {
    getPrototypeOf: Y
} = Object, {
    iterator: Q,
    toStringTag: Z
} = Symbol, ee = (e => t => {
    const i = X.call(t);
    return e[i] || (e[i] = i.slice(8, -1).toLowerCase())
})(Object.create(null)), te = e => (e = e.toLowerCase(), t => ee(t) === e), ie = e => t => typeof t === e, {
    isArray: ne
} = Array, oe = ie("undefined");

function ae(e) {
    return null !== e && !oe(e) && null !== e.constructor && !oe(e.constructor) && le(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const se = te("ArrayBuffer");
const re = ie("string"),
    le = ie("function"),
    ce = ie("number"),
    de = e => null !== e && "object" == typeof e,
    ue = e => {
        if ("object" !== ee(e)) return !1;
        const t = Y(e);
        return !(null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t) || Z in e || Q in e)
    },
    pe = te("Date"),
    ge = te("File"),
    me = te("Blob"),
    fe = te("FileList"),
    he = te("URLSearchParams"),
    [ye, be, _e, ve] = ["ReadableStream", "Request", "Response", "Headers"].map(te);

function we(e, t, {
    allOwnKeys: i = !1
} = {}) {
    if (null == e) return;
    let n, o;
    if ("object" != typeof e && (e = [e]), ne(e))
        for (n = 0, o = e.length; n < o; n++) t.call(null, e[n], n, e);
    else {
        if (ae(e)) return;
        const o = i ? Object.getOwnPropertyNames(e) : Object.keys(e),
            a = o.length;
        let s;
        for (n = 0; n < a; n++) s = o[n], t.call(null, e[s], s, e)
    }
}

function ke(e, t) {
    if (ae(e)) return null;
    t = t.toLowerCase();
    const i = Object.keys(e);
    let n, o = i.length;
    for (; o-- > 0;)
        if (n = i[o], t === n.toLowerCase()) return n;
    return null
}
const Se = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global,
    Ee = e => !oe(e) && e !== Se;
const xe = (e => t => e && t instanceof e)("undefined" != typeof Uint8Array && Y(Uint8Array)),
    Ae = te("HTMLFormElement"),
    Le = (({
        hasOwnProperty: e
    }) => (t, i) => e.call(t, i))(Object.prototype),
    Te = te("RegExp"),
    Oe = (e, t) => {
        const i = Object.getOwnPropertyDescriptors(e),
            n = {};
        we(i, (i, o) => {
            let a;
            !1 !== (a = t(i, o, e)) && (n[o] = a || i)
        }), Object.defineProperties(e, n)
    };
const Ce = te("AsyncFunction"),
    qe = ($e = "function" == typeof setImmediate, Pe = le(Se.postMessage), $e ? setImmediate : Pe ? (Re = `axios@${Math.random()}`, Ne = [], Se.addEventListener("message", ({
        source: e,
        data: t
    }) => {
        e === Se && t === Re && Ne.length && Ne.shift()()
    }, !1), e => {
        Ne.push(e), Se.postMessage(Re, "*")
    }) : e => setTimeout(e));
var $e, Pe, Re, Ne;
const Ie = "undefined" != typeof queueMicrotask ? queueMicrotask.bind(Se) : "undefined" != typeof process && process.nextTick || qe,
    Me = {
        isArray: ne,
        isArrayBuffer: se,
        isBuffer: ae,
        isFormData: e => {
            let t;
            return e && ("function" == typeof FormData && e instanceof FormData || le(e.append) && ("formdata" === (t = ee(e)) || "object" === t && le(e.toString) && "[object FormData]" === e.toString()))
        },
        isArrayBufferView: function(e) {
            let t;
            return t = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && se(e.buffer), t
        },
        isString: re,
        isNumber: ce,
        isBoolean: e => !0 === e || !1 === e,
        isObject: de,
        isPlainObject: ue,
        isEmptyObject: e => {
            if (!de(e) || ae(e)) return !1;
            try {
                return 0 === Object.keys(e).length && Object.getPrototypeOf(e) === Object.prototype
            } catch (t) {
                return !1
            }
        },
        isReadableStream: ye,
        isRequest: be,
        isResponse: _e,
        isHeaders: ve,
        isUndefined: oe,
        isDate: pe,
        isFile: ge,
        isBlob: me,
        isRegExp: Te,
        isFunction: le,
        isStream: e => de(e) && le(e.pipe),
        isURLSearchParams: he,
        isTypedArray: xe,
        isFileList: fe,
        forEach: we,
        merge: function e() {
            const {
                caseless: t,
                skipUndefined: i
            } = Ee(this) && this || {}, n = {}, o = (o, a) => {
                const s = t && ke(n, a) || a;
                ue(n[s]) && ue(o) ? n[s] = e(n[s], o) : ue(o) ? n[s] = e({}, o) : ne(o) ? n[s] = o.slice() : i && oe(o) || (n[s] = o)
            };
            for (let a = 0, s = arguments.length; a < s; a++) arguments[a] && we(arguments[a], o);
            return n
        },
        extend: (e, t, i, {
            allOwnKeys: n
        } = {}) => (we(t, (t, n) => {
            i && le(t) ? e[n] = G(t, i) : e[n] = t
        }, {
            allOwnKeys: n
        }), e),
        trim: e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
        stripBOM: e => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
        inherits: (e, t, i, n) => {
            e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
                value: t.prototype
            }), i && Object.assign(e.prototype, i)
        },
        toFlatObject: (e, t, i, n) => {
            let o, a, s;
            const r = {};
            if (t = t || {}, null == e) return t;
            do {
                for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0;) s = o[a], n && !n(s, e, t) || r[s] || (t[s] = e[s], r[s] = !0);
                e = !1 !== i && Y(e)
            } while (e && (!i || i(e, t)) && e !== Object.prototype);
            return t
        },
        kindOf: ee,
        kindOfTest: te,
        endsWith: (e, t, i) => {
            e = String(e), (void 0 === i || i > e.length) && (i = e.length), i -= t.length;
            const n = e.indexOf(t, i);
            return -1 !== n && n === i
        },
        toArray: e => {
            if (!e) return null;
            if (ne(e)) return e;
            let t = e.length;
            if (!ce(t)) return null;
            const i = new Array(t);
            for (; t-- > 0;) i[t] = e[t];
            return i
        },
        forEachEntry: (e, t) => {
            const i = (e && e[Q]).call(e);
            let n;
            for (;
                (n = i.next()) && !n.done;) {
                const i = n.value;
                t.call(e, i[0], i[1])
            }
        },
        matchAll: (e, t) => {
            let i;
            const n = [];
            for (; null !== (i = e.exec(t));) n.push(i);
            return n
        },
        isHTMLForm: Ae,
        hasOwnProperty: Le,
        hasOwnProp: Le,
        reduceDescriptors: Oe,
        freezeMethods: e => {
            Oe(e, (t, i) => {
                if (le(e) && -1 !== ["arguments", "caller", "callee"].indexOf(i)) return !1;
                const n = e[i];
                le(n) && (t.enumerable = !1, "writable" in t ? t.writable = !1 : t.set || (t.set = () => {
                    throw Error("Can not rewrite read-only method '" + i + "'")
                }))
            })
        },
        toObjectSet: (e, t) => {
            const i = {},
                n = e => {
                    e.forEach(e => {
                        i[e] = !0
                    })
                };
            return ne(e) ? n(e) : n(String(e).split(t)), i
        },
        toCamelCase: e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, i) {
            return t.toUpperCase() + i
        }),
        noop: () => {},
        toFiniteNumber: (e, t) => null != e && Number.isFinite(e = +e) ? e : t,
        findKey: ke,
        global: Se,
        isContextDefined: Ee,
        isSpecCompliantForm: function(e) {
            return !!(e && le(e.append) && "FormData" === e[Z] && e[Q])
        },
        toJSONObject: e => {
            const t = new Array(10),
                i = (e, n) => {
                    if (de(e)) {
                        if (t.indexOf(e) >= 0) return;
                        if (ae(e)) return e;
                        if (!("toJSON" in e)) {
                            t[n] = e;
                            const o = ne(e) ? [] : {};
                            return we(e, (e, t) => {
                                const a = i(e, n + 1);
                                !oe(a) && (o[t] = a)
                            }), t[n] = void 0, o
                        }
                    }
                    return e
                };
            return i(e, 0)
        },
        isAsyncFn: Ce,
        isThenable: e => e && (de(e) || le(e)) && le(e.then) && le(e.catch),
        setImmediate: qe,
        asap: Ie,
        isIterable: e => null != e && le(e[Q])
    };

function je(e, t, i, n, o) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack, this.message = e, this.name = "AxiosError", t && (this.code = t), i && (this.config = i), n && (this.request = n), o && (this.response = o, this.status = o.status ? o.status : null)
}
Me.inherits(je, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: Me.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
});
const De = je.prototype,
    Fe = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    Fe[e] = {
        value: e
    }
}), Object.defineProperties(je, Fe), Object.defineProperty(De, "isAxiosError", {
    value: !0
}), je.from = (e, t, i, n, o, a) => {
    const s = Object.create(De);
    Me.toFlatObject(e, s, function(e) {
        return e !== Error.prototype
    }, e => "isAxiosError" !== e);
    const r = e && e.message ? e.message : "Error",
        l = null == t && e ? e.code : t;
    return je.call(s, r, l, i, n, o), e && null == s.cause && Object.defineProperty(s, "cause", {
        value: e,
        configurable: !0
    }), s.name = e && e.name || "Error", a && Object.assign(s, a), s
};

function ze(e) {
    return Me.isPlainObject(e) || Me.isArray(e)
}

function Be(e) {
    return Me.endsWith(e, "[]") ? e.slice(0, -2) : e
}

function Ue(e, t, i) {
    return e ? e.concat(t).map(function(e, t) {
        return e = Be(e), !i && t ? "[" + e + "]" : e
    }).join(i ? "." : "") : t
}
const He = Me.toFlatObject(Me, {}, null, function(e) {
    return /^is[A-Z]/.test(e)
});

function Ve(e, t, i) {
    if (!Me.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData;
    const n = (i = Me.toFlatObject(i, {
            metaTokens: !0,
            dots: !1,
            indexes: !1
        }, !1, function(e, t) {
            return !Me.isUndefined(t[e])
        })).metaTokens,
        o = i.visitor || c,
        a = i.dots,
        s = i.indexes,
        r = (i.Blob || "undefined" != typeof Blob && Blob) && Me.isSpecCompliantForm(t);
    if (!Me.isFunction(o)) throw new TypeError("visitor must be a function");

    function l(e) {
        if (null === e) return "";
        if (Me.isDate(e)) return e.toISOString();
        if (Me.isBoolean(e)) return e.toString();
        if (!r && Me.isBlob(e)) throw new je("Blob is not supported. Use a Buffer instead.");
        return Me.isArrayBuffer(e) || Me.isTypedArray(e) ? r && "function" == typeof Blob ? new Blob([e]) : Buffer.from(e) : e
    }

    function c(e, i, o) {
        let r = e;
        if (e && !o && "object" == typeof e)
            if (Me.endsWith(i, "{}")) i = n ? i : i.slice(0, -2), e = JSON.stringify(e);
            else if (Me.isArray(e) && function(e) {
                return Me.isArray(e) && !e.some(ze)
            }(e) || (Me.isFileList(e) || Me.endsWith(i, "[]")) && (r = Me.toArray(e))) return i = Be(i), r.forEach(function(e, n) {
            !Me.isUndefined(e) && null !== e && t.append(!0 === s ? Ue([i], n, a) : null === s ? i : i + "[]", l(e))
        }), !1;
        return !!ze(e) || (t.append(Ue(o, i, a), l(e)), !1)
    }
    const d = [],
        u = Object.assign(He, {
            defaultVisitor: c,
            convertValue: l,
            isVisitable: ze
        });
    if (!Me.isObject(e)) throw new TypeError("data must be an object");
    return function e(i, n) {
        if (!Me.isUndefined(i)) {
            if (-1 !== d.indexOf(i)) throw Error("Circular reference detected in " + n.join("."));
            d.push(i), Me.forEach(i, function(i, a) {
                !0 === (!(Me.isUndefined(i) || null === i) && o.call(t, i, Me.isString(a) ? a.trim() : a, n, u)) && e(i, n ? n.concat(a) : [a])
            }), d.pop()
        }
    }(e), t
}

function We(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(e) {
        return t[e]
    })
}

function Ke(e, t) {
    this._pairs = [], e && Ve(e, this, t)
}
const Je = Ke.prototype;

function Ge(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+")
}

function Xe(e, t, i) {
    if (!t) return e;
    const n = i && i.encode || Ge;
    Me.isFunction(i) && (i = {
        serialize: i
    });
    const o = i && i.serialize;
    let a;
    if (a = o ? o(t, i) : Me.isURLSearchParams(t) ? t.toString() : new Ke(t, i).toString(n), a) {
        const t = e.indexOf("#"); - 1 !== t && (e = e.slice(0, t)), e += (-1 === e.indexOf("?") ? "?" : "&") + a
    }
    return e
}
Je.append = function(e, t) {
    this._pairs.push([e, t])
}, Je.toString = function(e) {
    const t = e ? function(t) {
        return e.call(this, t, We)
    } : We;
    return this._pairs.map(function(e) {
        return t(e[0]) + "=" + t(e[1])
    }, "").join("&")
};
class Ye {
    constructor() {
        this.handlers = []
    }
    use(e, t, i) {
        return this.handlers.push({
            fulfilled: e,
            rejected: t,
            synchronous: !!i && i.synchronous,
            runWhen: i ? i.runWhen : null
        }), this.handlers.length - 1
    }
    eject(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(e) {
        Me.forEach(this.handlers, function(t) {
            null !== t && e(t)
        })
    }
}
const Qe = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    },
    Ze = {
        isBrowser: !0,
        classes: {
            URLSearchParams: "undefined" != typeof URLSearchParams ? URLSearchParams : Ke,
            FormData: "undefined" != typeof FormData ? FormData : null,
            Blob: "undefined" != typeof Blob ? Blob : null
        },
        protocols: ["http", "https", "file", "blob", "url", "data"]
    },
    et = "undefined" != typeof window && "undefined" != typeof document,
    tt = "object" == typeof navigator && navigator || void 0,
    it = et && (!tt || ["ReactNative", "NativeScript", "NS"].indexOf(tt.product) < 0),
    nt = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts,
    ot = et && window.location.href || "http://localhost",
    at = { ...Object.freeze(Object.defineProperty({
            __proto__: null,
            hasBrowserEnv: et,
            hasStandardBrowserEnv: it,
            hasStandardBrowserWebWorkerEnv: nt,
            navigator: tt,
            origin: ot
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        ...Ze
    };

function st(e) {
    function t(e, i, n, o) {
        let a = e[o++];
        if ("__proto__" === a) return !0;
        const s = Number.isFinite(+a),
            r = o >= e.length;
        if (a = !a && Me.isArray(n) ? n.length : a, r) return Me.hasOwnProp(n, a) ? n[a] = [n[a], i] : n[a] = i, !s;
        n[a] && Me.isObject(n[a]) || (n[a] = []);
        return t(e, i, n[a], o) && Me.isArray(n[a]) && (n[a] = function(e) {
            const t = {},
                i = Object.keys(e);
            let n;
            const o = i.length;
            let a;
            for (n = 0; n < o; n++) a = i[n], t[a] = e[a];
            return t
        }(n[a])), !s
    }
    if (Me.isFormData(e) && Me.isFunction(e.entries)) {
        const i = {};
        return Me.forEachEntry(e, (e, n) => {
            t(function(e) {
                return Me.matchAll(/\w+|\[(\w*)]/g, e).map(e => "[]" === e[0] ? "" : e[1] || e[0])
            }(e), n, i, 0)
        }), i
    }
    return null
}
const rt = {
    transitional: Qe,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(e, t) {
        const i = t.getContentType() || "",
            n = i.indexOf("application/json") > -1,
            o = Me.isObject(e);
        o && Me.isHTMLForm(e) && (e = new FormData(e));
        if (Me.isFormData(e)) return n ? JSON.stringify(st(e)) : e;
        if (Me.isArrayBuffer(e) || Me.isBuffer(e) || Me.isStream(e) || Me.isFile(e) || Me.isBlob(e) || Me.isReadableStream(e)) return e;
        if (Me.isArrayBufferView(e)) return e.buffer;
        if (Me.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
        let a;
        if (o) {
            if (i.indexOf("application/x-www-form-urlencoded") > -1) return function(e, t) {
                return Ve(e, new at.classes.URLSearchParams, {
                    visitor: function(e, t, i, n) {
                        return at.isNode && Me.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : n.defaultVisitor.apply(this, arguments)
                    },
                    ...t
                })
            }(e, this.formSerializer).toString();
            if ((a = Me.isFileList(e)) || i.indexOf("multipart/form-data") > -1) {
                const t = this.env && this.env.FormData;
                return Ve(a ? {
                    "files[]": e
                } : e, t && new t, this.formSerializer)
            }
        }
        return o || n ? (t.setContentType("application/json", !1), function(e, t, i) {
            if (Me.isString(e)) try {
                return (t || JSON.parse)(e), Me.trim(e)
            } catch (n) {
                if ("SyntaxError" !== n.name) throw n
            }
            return (i || JSON.stringify)(e)
        }(e)) : e
    }],
    transformResponse: [function(e) {
        const t = this.transitional || rt.transitional,
            i = t && t.forcedJSONParsing,
            n = "json" === this.responseType;
        if (Me.isResponse(e) || Me.isReadableStream(e)) return e;
        if (e && Me.isString(e) && (i && !this.responseType || n)) {
            const i = !(t && t.silentJSONParsing) && n;
            try {
                return JSON.parse(e, this.parseReviver)
            } catch (o) {
                if (i) {
                    if ("SyntaxError" === o.name) throw je.from(o, je.ERR_BAD_RESPONSE, this, null, this.response);
                    throw o
                }
            }
        }
        return e
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: at.classes.FormData,
        Blob: at.classes.Blob
    },
    validateStatus: function(e) {
        return e >= 200 && e < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
Me.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    rt.headers[e] = {}
});
const lt = rt,
    ct = Me.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    dt = Symbol("internals");

function ut(e) {
    return e && String(e).trim().toLowerCase()
}

function pt(e) {
    return !1 === e || null == e ? e : Me.isArray(e) ? e.map(pt) : String(e)
}

function gt(e, t, i, n, o) {
    return Me.isFunction(n) ? n.call(this, t, i) : (o && (t = i), Me.isString(t) ? Me.isString(n) ? -1 !== t.indexOf(n) : Me.isRegExp(n) ? n.test(t) : void 0 : void 0)
}
class mt {
    constructor(e) {
        e && this.set(e)
    }
    set(e, t, i) {
        const n = this;

        function o(e, t, i) {
            const o = ut(t);
            if (!o) throw new Error("header name must be a non-empty string");
            const a = Me.findKey(n, o);
            (!a || void 0 === n[a] || !0 === i || void 0 === i && !1 !== n[a]) && (n[a || t] = pt(e))
        }
        const a = (e, t) => Me.forEach(e, (e, i) => o(e, i, t));
        if (Me.isPlainObject(e) || e instanceof this.constructor) a(e, t);
        else if (Me.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())) a((e => {
            const t = {};
            let i, n, o;
            return e && e.split("\n").forEach(function(e) {
                o = e.indexOf(":"), i = e.substring(0, o).trim().toLowerCase(), n = e.substring(o + 1).trim(), !i || t[i] && ct[i] || ("set-cookie" === i ? t[i] ? t[i].push(n) : t[i] = [n] : t[i] = t[i] ? t[i] + ", " + n : n)
            }), t
        })(e), t);
        else if (Me.isObject(e) && Me.isIterable(e)) {
            let i, n, o = {};
            for (const t of e) {
                if (!Me.isArray(t)) throw TypeError("Object iterator must return a key-value pair");
                o[n = t[0]] = (i = o[n]) ? Me.isArray(i) ? [...i, t[1]] : [i, t[1]] : t[1]
            }
            a(o, t)
        } else null != e && o(t, e, i);
        return this
    }
    get(e, t) {
        if (e = ut(e)) {
            const i = Me.findKey(this, e);
            if (i) {
                const e = this[i];
                if (!t) return e;
                if (!0 === t) return function(e) {
                    const t = Object.create(null),
                        i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                    let n;
                    for (; n = i.exec(e);) t[n[1]] = n[2];
                    return t
                }(e);
                if (Me.isFunction(t)) return t.call(this, e, i);
                if (Me.isRegExp(t)) return t.exec(e);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(e, t) {
        if (e = ut(e)) {
            const i = Me.findKey(this, e);
            return !(!i || void 0 === this[i] || t && !gt(0, this[i], i, t))
        }
        return !1
    }
    delete(e, t) {
        const i = this;
        let n = !1;

        function o(e) {
            if (e = ut(e)) {
                const o = Me.findKey(i, e);
                !o || t && !gt(0, i[o], o, t) || (delete i[o], n = !0)
            }
        }
        return Me.isArray(e) ? e.forEach(o) : o(e), n
    }
    clear(e) {
        const t = Object.keys(this);
        let i = t.length,
            n = !1;
        for (; i--;) {
            const o = t[i];
            e && !gt(0, this[o], o, e, !0) || (delete this[o], n = !0)
        }
        return n
    }
    normalize(e) {
        const t = this,
            i = {};
        return Me.forEach(this, (n, o) => {
            const a = Me.findKey(i, o);
            if (a) return t[a] = pt(n), void delete t[o];
            const s = e ? function(e) {
                return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, i) => t.toUpperCase() + i)
            }(o) : String(o).trim();
            s !== o && delete t[o], t[s] = pt(n), i[s] = !0
        }), this
    }
    concat(...e) {
        return this.constructor.concat(this, ...e)
    }
    toJSON(e) {
        const t = Object.create(null);
        return Me.forEach(this, (i, n) => {
            null != i && !1 !== i && (t[n] = e && Me.isArray(i) ? i.join(", ") : i)
        }), t
    }[Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join("\n")
    }
    getSetCookie() {
        return this.get("set-cookie") || []
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(e) {
        return e instanceof this ? e : new this(e)
    }
    static concat(e, ...t) {
        const i = new this(e);
        return t.forEach(e => i.set(e)), i
    }
    static accessor(e) {
        const t = (this[dt] = this[dt] = {
                accessors: {}
            }).accessors,
            i = this.prototype;

        function n(e) {
            const n = ut(e);
            t[n] || (! function(e, t) {
                const i = Me.toCamelCase(" " + t);
                ["get", "set", "has"].forEach(n => {
                    Object.defineProperty(e, n + i, {
                        value: function(e, i, o) {
                            return this[n].call(this, t, e, i, o)
                        },
                        configurable: !0
                    })
                })
            }(i, e), t[n] = !0)
        }
        return Me.isArray(e) ? e.forEach(n) : n(e), this
    }
}
mt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), Me.reduceDescriptors(mt.prototype, ({
    value: e
}, t) => {
    let i = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(e) {
            this[i] = e
        }
    }
}), Me.freezeMethods(mt);
const ft = mt;

function ht(e, t) {
    const i = this || lt,
        n = t || i,
        o = ft.from(n.headers);
    let a = n.data;
    return Me.forEach(e, function(e) {
        a = e.call(i, a, o.normalize(), t ? t.status : void 0)
    }), o.normalize(), a
}

function yt(e) {
    return !(!e || !e.__CANCEL__)
}

function bt(e, t, i) {
    je.call(this, null == e ? "canceled" : e, je.ERR_CANCELED, t, i), this.name = "CanceledError"
}

function _t(e, t, i) {
    const n = i.config.validateStatus;
    i.status && n && !n(i.status) ? t(new je("Request failed with status code " + i.status, [je.ERR_BAD_REQUEST, je.ERR_BAD_RESPONSE][Math.floor(i.status / 100) - 4], i.config, i.request, i)) : e(i)
}
Me.inherits(bt, je, {
    __CANCEL__: !0
});
const vt = (e, t, i = 3) => {
        let n = 0;
        const o = function(e, t) {
            e = e || 10;
            const i = new Array(e),
                n = new Array(e);
            let o, a = 0,
                s = 0;
            return t = void 0 !== t ? t : 1e3,
                function(r) {
                    const l = Date.now(),
                        c = n[s];
                    o || (o = l), i[a] = r, n[a] = l;
                    let d = s,
                        u = 0;
                    for (; d !== a;) u += i[d++], d %= e;
                    if (a = (a + 1) % e, a === s && (s = (s + 1) % e), l - o < t) return;
                    const p = c && l - c;
                    return p ? Math.round(1e3 * u / p) : void 0
                }
        }(50, 250);
        return function(e, t) {
            let i, n, o = 0,
                a = 1e3 / t;
            const s = (t, a = Date.now()) => {
                o = a, i = null, n && (clearTimeout(n), n = null), e(...t)
            };
            return [(...e) => {
                const t = Date.now(),
                    r = t - o;
                r >= a ? s(e, t) : (i = e, n || (n = setTimeout(() => {
                    n = null, s(i)
                }, a - r)))
            }, () => i && s(i)]
        }(i => {
            const a = i.loaded,
                s = i.lengthComputable ? i.total : void 0,
                r = a - n,
                l = o(r);
            n = a;
            e({
                loaded: a,
                total: s,
                progress: s ? a / s : void 0,
                bytes: r,
                rate: l || void 0,
                estimated: l && s && a <= s ? (s - a) / l : void 0,
                event: i,
                lengthComputable: null != s,
                [t ? "download" : "upload"]: !0
            })
        }, i)
    },
    wt = (e, t) => {
        const i = null != e;
        return [n => t[0]({
            lengthComputable: i,
            total: e,
            loaded: n
        }), t[1]]
    },
    kt = e => (...t) => Me.asap(() => e(...t)),
    St = at.hasStandardBrowserEnv ? ((e, t) => i => (i = new URL(i, at.origin), e.protocol === i.protocol && e.host === i.host && (t || e.port === i.port)))(new URL(at.origin), at.navigator && /(msie|trident)/i.test(at.navigator.userAgent)) : () => !0,
    Et = at.hasStandardBrowserEnv ? {
        write(e, t, i, n, o, a, s) {
            if ("undefined" == typeof document) return;
            const r = [`${e}=${encodeURIComponent(t)}`];
            Me.isNumber(i) && r.push(`expires=${new Date(i).toUTCString()}`), Me.isString(n) && r.push(`path=${n}`), Me.isString(o) && r.push(`domain=${o}`), !0 === a && r.push("secure"), Me.isString(s) && r.push(`SameSite=${s}`), document.cookie = r.join("; ")
        },
        read(e) {
            if ("undefined" == typeof document) return null;
            const t = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
            return t ? decodeURIComponent(t[1]) : null
        },
        remove(e) {
            this.write(e, "", Date.now() - 864e5, "/")
        }
    } : {
        write() {},
        read: () => null,
        remove() {}
    };

function xt(e, t, i) {
    let n = !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
    return e && (n || 0 == i) ? function(e, t) {
        return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
    }(e, t) : t
}
const At = e => e instanceof ft ? { ...e
} : e;

function Lt(e, t) {
    t = t || {};
    const i = {};

    function n(e, t, i, n) {
        return Me.isPlainObject(e) && Me.isPlainObject(t) ? Me.merge.call({
            caseless: n
        }, e, t) : Me.isPlainObject(t) ? Me.merge({}, t) : Me.isArray(t) ? t.slice() : t
    }

    function o(e, t, i, o) {
        return Me.isUndefined(t) ? Me.isUndefined(e) ? void 0 : n(void 0, e, 0, o) : n(e, t, 0, o)
    }

    function a(e, t) {
        if (!Me.isUndefined(t)) return n(void 0, t)
    }

    function s(e, t) {
        return Me.isUndefined(t) ? Me.isUndefined(e) ? void 0 : n(void 0, e) : n(void 0, t)
    }

    function r(i, o, a) {
        return a in t ? n(i, o) : a in e ? n(void 0, i) : void 0
    }
    const l = {
        url: a,
        method: a,
        data: a,
        baseURL: s,
        transformRequest: s,
        transformResponse: s,
        paramsSerializer: s,
        timeout: s,
        timeoutMessage: s,
        withCredentials: s,
        withXSRFToken: s,
        adapter: s,
        responseType: s,
        xsrfCookieName: s,
        xsrfHeaderName: s,
        onUploadProgress: s,
        onDownloadProgress: s,
        decompress: s,
        maxContentLength: s,
        maxBodyLength: s,
        beforeRedirect: s,
        transport: s,
        httpAgent: s,
        httpsAgent: s,
        cancelToken: s,
        socketPath: s,
        responseEncoding: s,
        validateStatus: r,
        headers: (e, t, i) => o(At(e), At(t), 0, !0)
    };
    return Me.forEach(Object.keys({ ...e,
        ...t
    }), function(n) {
        const a = l[n] || o,
            s = a(e[n], t[n], n);
        Me.isUndefined(s) && a !== r || (i[n] = s)
    }), i
}
const Tt = e => {
        const t = Lt({}, e);
        let {
            data: i,
            withXSRFToken: n,
            xsrfHeaderName: o,
            xsrfCookieName: a,
            headers: s,
            auth: r
        } = t;
        if (t.headers = s = ft.from(s), t.url = Xe(xt(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), r && s.set("Authorization", "Basic " + btoa((r.username || "") + ":" + (r.password ? unescape(encodeURIComponent(r.password)) : ""))), Me.isFormData(i))
            if (at.hasStandardBrowserEnv || at.hasStandardBrowserWebWorkerEnv) s.setContentType(void 0);
            else if (Me.isFunction(i.getHeaders)) {
            const e = i.getHeaders(),
                t = ["content-type", "content-length"];
            Object.entries(e).forEach(([e, i]) => {
                t.includes(e.toLowerCase()) && s.set(e, i)
            })
        }
        if (at.hasStandardBrowserEnv && (n && Me.isFunction(n) && (n = n(t)), n || !1 !== n && St(t.url))) {
            const e = o && a && Et.read(a);
            e && s.set(o, e)
        }
        return t
    },
    Ot = "undefined" != typeof XMLHttpRequest && function(e) {
        return new Promise(function(t, i) {
            const n = Tt(e);
            let o = n.data;
            const a = ft.from(n.headers).normalize();
            let s, r, l, c, d, {
                responseType: u,
                onUploadProgress: p,
                onDownloadProgress: g
            } = n;

            function m() {
                c && c(), d && d(), n.cancelToken && n.cancelToken.unsubscribe(s), n.signal && n.signal.removeEventListener("abort", s)
            }
            let f = new XMLHttpRequest;

            function h() {
                if (!f) return;
                const n = ft.from("getAllResponseHeaders" in f && f.getAllResponseHeaders());
                _t(function(e) {
                    t(e), m()
                }, function(e) {
                    i(e), m()
                }, {
                    data: u && "text" !== u && "json" !== u ? f.response : f.responseText,
                    status: f.status,
                    statusText: f.statusText,
                    headers: n,
                    config: e,
                    request: f
                }), f = null
            }
            f.open(n.method.toUpperCase(), n.url, !0), f.timeout = n.timeout, "onloadend" in f ? f.onloadend = h : f.onreadystatechange = function() {
                f && 4 === f.readyState && (0 !== f.status || f.responseURL && 0 === f.responseURL.indexOf("file:")) && setTimeout(h)
            }, f.onabort = function() {
                f && (i(new je("Request aborted", je.ECONNABORTED, e, f)), f = null)
            }, f.onerror = function(t) {
                const n = new je(t && t.message ? t.message : "Network Error", je.ERR_NETWORK, e, f);
                n.event = t || null, i(n), f = null
            }, f.ontimeout = function() {
                let t = n.timeout ? "timeout of " + n.timeout + "ms exceeded" : "timeout exceeded";
                const o = n.transitional || Qe;
                n.timeoutErrorMessage && (t = n.timeoutErrorMessage), i(new je(t, o.clarifyTimeoutError ? je.ETIMEDOUT : je.ECONNABORTED, e, f)), f = null
            }, void 0 === o && a.setContentType(null), "setRequestHeader" in f && Me.forEach(a.toJSON(), function(e, t) {
                f.setRequestHeader(t, e)
            }), Me.isUndefined(n.withCredentials) || (f.withCredentials = !!n.withCredentials), u && "json" !== u && (f.responseType = n.responseType), g && ([l, d] = vt(g, !0), f.addEventListener("progress", l)), p && f.upload && ([r, c] = vt(p), f.upload.addEventListener("progress", r), f.upload.addEventListener("loadend", c)), (n.cancelToken || n.signal) && (s = t => {
                f && (i(!t || t.type ? new bt(null, e, f) : t), f.abort(), f = null)
            }, n.cancelToken && n.cancelToken.subscribe(s), n.signal && (n.signal.aborted ? s() : n.signal.addEventListener("abort", s)));
            const y = function(e) {
                const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                return t && t[1] || ""
            }(n.url);
            y && -1 === at.protocols.indexOf(y) ? i(new je("Unsupported protocol " + y + ":", je.ERR_BAD_REQUEST, e)) : f.send(o || null)
        })
    },
    Ct = (e, t) => {
        const {
            length: i
        } = e = e ? e.filter(Boolean) : [];
        if (t || i) {
            let i, n = new AbortController;
            const o = function(e) {
                if (!i) {
                    i = !0, s();
                    const t = e instanceof Error ? e : this.reason;
                    n.abort(t instanceof je ? t : new bt(t instanceof Error ? t.message : t))
                }
            };
            let a = t && setTimeout(() => {
                a = null, o(new je(`timeout ${t} of ms exceeded`, je.ETIMEDOUT))
            }, t);
            const s = () => {
                e && (a && clearTimeout(a), a = null, e.forEach(e => {
                    e.unsubscribe ? e.unsubscribe(o) : e.removeEventListener("abort", o)
                }), e = null)
            };
            e.forEach(e => e.addEventListener("abort", o));
            const {
                signal: r
            } = n;
            return r.unsubscribe = () => Me.asap(s), r
        }
    },
    qt = function*(e, t) {
        let i = e.byteLength;
        if (!t || i < t) return void(yield e);
        let n, o = 0;
        for (; o < i;) n = o + t, yield e.slice(o, n), o = n
    },
    $t = async function*(e) {
        if (e[Symbol.asyncIterator]) return void(yield* e);
        const t = e.getReader();
        try {
            for (;;) {
                const {
                    done: e,
                    value: i
                } = await t.read();
                if (e) break;
                yield i
            }
        } finally {
            await t.cancel()
        }
    },
    Pt = (e, t, i, n) => {
        const o = async function*(e, t) {
            for await (const i of $t(e)) yield* qt(i, t)
        }(e, t);
        let a, s = 0,
            r = e => {
                a || (a = !0, n && n(e))
            };
        return new ReadableStream({
            async pull(e) {
                try {
                    const {
                        done: t,
                        value: n
                    } = await o.next();
                    if (t) return r(), void e.close();
                    let a = n.byteLength;
                    if (i) {
                        let e = s += a;
                        i(e)
                    }
                    e.enqueue(new Uint8Array(n))
                } catch (t) {
                    throw r(t), t
                }
            },
            cancel: e => (r(e), o.return())
        }, {
            highWaterMark: 2
        })
    },
    {
        isFunction: Rt
    } = Me,
    Nt = (({
        Request: e,
        Response: t
    }) => ({
        Request: e,
        Response: t
    }))(Me.global),
    {
        ReadableStream: It,
        TextEncoder: Mt
    } = Me.global,
    jt = (e, ...t) => {
        try {
            return !!e(...t)
        } catch (i) {
            return !1
        }
    },
    Dt = e => {
        e = Me.merge.call({
            skipUndefined: !0
        }, Nt, e);
        const {
            fetch: t,
            Request: i,
            Response: n
        } = e, o = t ? Rt(t) : "function" == typeof fetch, a = Rt(i), s = Rt(n);
        if (!o) return !1;
        const r = o && Rt(It),
            l = o && ("function" == typeof Mt ? (e => t => e.encode(t))(new Mt) : async e => new Uint8Array(await new i(e).arrayBuffer())),
            c = a && r && jt(() => {
                let e = !1;
                const t = new i(at.origin, {
                    body: new It,
                    method: "POST",
                    get duplex() {
                        return e = !0, "half"
                    }
                }).headers.has("Content-Type");
                return e && !t
            }),
            d = s && r && jt(() => Me.isReadableStream(new n("").body)),
            u = {
                stream: d && (e => e.body)
            };
        o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(e => {
            !u[e] && (u[e] = (t, i) => {
                let n = t && t[e];
                if (n) return n.call(t);
                throw new je(`Response type '${e}' is not supported`, je.ERR_NOT_SUPPORT, i)
            })
        });
        const p = async (e, t) => {
            const n = Me.toFiniteNumber(e.getContentLength());
            return null == n ? (async e => {
                if (null == e) return 0;
                if (Me.isBlob(e)) return e.size;
                if (Me.isSpecCompliantForm(e)) {
                    const t = new i(at.origin, {
                        method: "POST",
                        body: e
                    });
                    return (await t.arrayBuffer()).byteLength
                }
                return Me.isArrayBufferView(e) || Me.isArrayBuffer(e) ? e.byteLength : (Me.isURLSearchParams(e) && (e += ""), Me.isString(e) ? (await l(e)).byteLength : void 0)
            })(t) : n
        };
        return async e => {
            let {
                url: o,
                method: s,
                data: r,
                signal: l,
                cancelToken: g,
                timeout: m,
                onDownloadProgress: f,
                onUploadProgress: h,
                responseType: y,
                headers: b,
                withCredentials: _ = "same-origin",
                fetchOptions: v
            } = Tt(e), w = t || fetch;
            y = y ? (y + "").toLowerCase() : "text";
            let k = Ct([l, g && g.toAbortSignal()], m),
                S = null;
            const E = k && k.unsubscribe && (() => {
                k.unsubscribe()
            });
            let x;
            try {
                if (h && c && "get" !== s && "head" !== s && 0 !== (x = await p(b, r))) {
                    let e, t = new i(o, {
                        method: "POST",
                        body: r,
                        duplex: "half"
                    });
                    if (Me.isFormData(r) && (e = t.headers.get("content-type")) && b.setContentType(e), t.body) {
                        const [e, i] = wt(x, vt(kt(h)));
                        r = Pt(t.body, 65536, e, i)
                    }
                }
                Me.isString(_) || (_ = _ ? "include" : "omit");
                const t = a && "credentials" in i.prototype,
                    l = { ...v,
                        signal: k,
                        method: s.toUpperCase(),
                        headers: b.normalize().toJSON(),
                        body: r,
                        duplex: "half",
                        credentials: t ? _ : void 0
                    };
                S = a && new i(o, l);
                let g = await (a ? w(S, v) : w(o, l));
                const m = d && ("stream" === y || "response" === y);
                if (d && (f || m && E)) {
                    const e = {};
                    ["status", "statusText", "headers"].forEach(t => {
                        e[t] = g[t]
                    });
                    const t = Me.toFiniteNumber(g.headers.get("content-length")),
                        [i, o] = f && wt(t, vt(kt(f), !0)) || [];
                    g = new n(Pt(g.body, 65536, i, () => {
                        o && o(), E && E()
                    }), e)
                }
                y = y || "text";
                let A = await u[Me.findKey(u, y) || "text"](g, e);
                return !m && E && E(), await new Promise((t, i) => {
                    _t(t, i, {
                        data: A,
                        headers: ft.from(g.headers),
                        status: g.status,
                        statusText: g.statusText,
                        config: e,
                        request: S
                    })
                })
            } catch (A) {
                if (E && E(), A && "TypeError" === A.name && /Load failed|fetch/i.test(A.message)) throw Object.assign(new je("Network Error", je.ERR_NETWORK, e, S), {
                    cause: A.cause || A
                });
                throw je.from(A, A && A.code, e, S)
            }
        }
    },
    Ft = new Map,
    zt = e => {
        let t = e && e.env || {};
        const {
            fetch: i,
            Request: n,
            Response: o
        } = t, a = [n, o, i];
        let s, r, l = a.length,
            c = Ft;
        for (; l--;) s = a[l], r = c.get(s), void 0 === r && c.set(s, r = l ? new Map : Dt(t)), c = r;
        return r
    };
zt();
const Bt = {
    http: null,
    xhr: Ot,
    fetch: {
        get: zt
    }
};
Me.forEach(Bt, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch (i) {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
});
const Ut = e => `- ${e}`,
    Ht = e => Me.isFunction(e) || null === e || !1 === e;
const Vt = {
    getAdapter: function(e, t) {
        e = Me.isArray(e) ? e : [e];
        const {
            length: i
        } = e;
        let n, o;
        const a = {};
        for (let s = 0; s < i; s++) {
            let i;
            if (n = e[s], o = n, !Ht(n) && (o = Bt[(i = String(n)).toLowerCase()], void 0 === o)) throw new je(`Unknown adapter '${i}'`);
            if (o && (Me.isFunction(o) || (o = o.get(t)))) break;
            a[i || "#" + s] = o
        }
        if (!o) {
            const e = Object.entries(a).map(([e, t]) => `adapter ${e} ` + (!1 === t ? "is not supported by the environment" : "is not available in the build"));
            throw new je("There is no suitable adapter to dispatch the request " + (i ? e.length > 1 ? "since :\n" + e.map(Ut).join("\n") : " " + Ut(e[0]) : "as no adapter specified"), "ERR_NOT_SUPPORT")
        }
        return o
    },
    adapters: Bt
};

function Wt(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new bt(null, e)
}

function Kt(e) {
    Wt(e), e.headers = ft.from(e.headers), e.data = ht.call(e, e.transformRequest), -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1);
    return Vt.getAdapter(e.adapter || lt.adapter, e)(e).then(function(t) {
        return Wt(e), t.data = ht.call(e, e.transformResponse, t), t.headers = ft.from(t.headers), t
    }, function(t) {
        return yt(t) || (Wt(e), t && t.response && (t.response.data = ht.call(e, e.transformResponse, t.response), t.response.headers = ft.from(t.response.headers))), Promise.reject(t)
    })
}
const Jt = "1.13.2",
    Gt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
    Gt[e] = function(i) {
        return typeof i === e || "a" + (t < 1 ? "n " : " ") + e
    }
});
const Xt = {};
Gt.transitional = function(e, t, i) {
    return (n, o, a) => {
        if (!1 === e) throw new je(function(e, t) {
            return "[Axios v" + Jt + "] Transitional option '" + e + "'" + t + (i ? ". " + i : "")
        }(o, " has been removed" + (t ? " in " + t : "")), je.ERR_DEPRECATED);
        return t && !Xt[o] && (Xt[o] = !0), !e || e(n, o, a)
    }
}, Gt.spelling = function(e) {
    return (e, t) => !0
};
const Yt = {
        assertOptions: function(e, t, i) {
            if ("object" != typeof e) throw new je("options must be an object", je.ERR_BAD_OPTION_VALUE);
            const n = Object.keys(e);
            let o = n.length;
            for (; o-- > 0;) {
                const a = n[o],
                    s = t[a];
                if (s) {
                    const t = e[a],
                        i = void 0 === t || s(t, a, e);
                    if (!0 !== i) throw new je("option " + a + " must be " + i, je.ERR_BAD_OPTION_VALUE);
                    continue
                }
                if (!0 !== i) throw new je("Unknown option " + a, je.ERR_BAD_OPTION)
            }
        },
        validators: Gt
    },
    Qt = Yt.validators;
class Zt {
    constructor(e) {
        this.defaults = e || {}, this.interceptors = {
            request: new Ye,
            response: new Ye
        }
    }
    async request(e, t) {
        try {
            return await this._request(e, t)
        } catch (i) {
            if (i instanceof Error) {
                let e = {};
                Error.captureStackTrace ? Error.captureStackTrace(e) : e = new Error;
                const t = e.stack ? e.stack.replace(/^.+\n/, "") : "";
                try {
                    i.stack ? t && !String(i.stack).endsWith(t.replace(/^.+\n.+\n/, "")) && (i.stack += "\n" + t) : i.stack = t
                } catch (n) {}
            }
            throw i
        }
    }
    _request(e, t) {
        "string" == typeof e ? (t = t || {}).url = e : t = e || {}, t = Lt(this.defaults, t);
        const {
            transitional: i,
            paramsSerializer: n,
            headers: o
        } = t;
        void 0 !== i && Yt.assertOptions(i, {
            silentJSONParsing: Qt.transitional(Qt.boolean),
            forcedJSONParsing: Qt.transitional(Qt.boolean),
            clarifyTimeoutError: Qt.transitional(Qt.boolean)
        }, !1), null != n && (Me.isFunction(n) ? t.paramsSerializer = {
            serialize: n
        } : Yt.assertOptions(n, {
            encode: Qt.function,
            serialize: Qt.function
        }, !0)), void 0 !== t.allowAbsoluteUrls || (void 0 !== this.defaults.allowAbsoluteUrls ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), Yt.assertOptions(t, {
            baseUrl: Qt.spelling("baseURL"),
            withXsrfToken: Qt.spelling("withXSRFToken")
        }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
        let a = o && Me.merge(o.common, o[t.method]);
        o && Me.forEach(["delete", "get", "head", "post", "put", "patch", "common"], e => {
            delete o[e]
        }), t.headers = ft.concat(a, o);
        const s = [];
        let r = !0;
        this.interceptors.request.forEach(function(e) {
            "function" == typeof e.runWhen && !1 === e.runWhen(t) || (r = r && e.synchronous, s.unshift(e.fulfilled, e.rejected))
        });
        const l = [];
        let c;
        this.interceptors.response.forEach(function(e) {
            l.push(e.fulfilled, e.rejected)
        });
        let d, u = 0;
        if (!r) {
            const e = [Kt.bind(this), void 0];
            for (e.unshift(...s), e.push(...l), d = e.length, c = Promise.resolve(t); u < d;) c = c.then(e[u++], e[u++]);
            return c
        }
        d = s.length;
        let p = t;
        for (; u < d;) {
            const e = s[u++],
                t = s[u++];
            try {
                p = e(p)
            } catch (g) {
                t.call(this, g);
                break
            }
        }
        try {
            c = Kt.call(this, p)
        } catch (g) {
            return Promise.reject(g)
        }
        for (u = 0, d = l.length; u < d;) c = c.then(l[u++], l[u++]);
        return c
    }
    getUri(e) {
        return Xe(xt((e = Lt(this.defaults, e)).baseURL, e.url, e.allowAbsoluteUrls), e.params, e.paramsSerializer)
    }
}
Me.forEach(["delete", "get", "head", "options"], function(e) {
    Zt.prototype[e] = function(t, i) {
        return this.request(Lt(i || {}, {
            method: e,
            url: t,
            data: (i || {}).data
        }))
    }
}), Me.forEach(["post", "put", "patch"], function(e) {
    function t(t) {
        return function(i, n, o) {
            return this.request(Lt(o || {}, {
                method: e,
                headers: t ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: i,
                data: n
            }))
        }
    }
    Zt.prototype[e] = t(), Zt.prototype[e + "Form"] = t(!0)
});
const ei = Zt;
class ti {
    constructor(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        let t;
        this.promise = new Promise(function(e) {
            t = e
        });
        const i = this;
        this.promise.then(e => {
            if (!i._listeners) return;
            let t = i._listeners.length;
            for (; t-- > 0;) i._listeners[t](e);
            i._listeners = null
        }), this.promise.then = e => {
            let t;
            const n = new Promise(e => {
                i.subscribe(e), t = e
            }).then(e);
            return n.cancel = function() {
                i.unsubscribe(t)
            }, n
        }, e(function(e, n, o) {
            i.reason || (i.reason = new bt(e, n, o), t(i.reason))
        })
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(e) {
        this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
    }
    unsubscribe(e) {
        if (!this._listeners) return;
        const t = this._listeners.indexOf(e); - 1 !== t && this._listeners.splice(t, 1)
    }
    toAbortSignal() {
        const e = new AbortController,
            t = t => {
                e.abort(t)
            };
        return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal
    }
    static source() {
        let e;
        return {
            token: new ti(function(t) {
                e = t
            }),
            cancel: e
        }
    }
}
const ii = ti;
const ni = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
    WebServerIsDown: 521,
    ConnectionTimedOut: 522,
    OriginIsUnreachable: 523,
    TimeoutOccurred: 524,
    SslHandshakeFailed: 525,
    InvalidSslCertificate: 526
};
Object.entries(ni).forEach(([e, t]) => {
    ni[t] = e
});
const oi = ni;
const ai = function e(t) {
    const i = new ei(t),
        n = G(ei.prototype.request, i);
    return Me.extend(n, ei.prototype, i, {
        allOwnKeys: !0
    }), Me.extend(n, i, null, {
        allOwnKeys: !0
    }), n.create = function(i) {
        return e(Lt(t, i))
    }, n
}(lt);
async function si(e, t, i = 0) {
    const n = pi.ga_key,
        o = pi.adobe_key;
    if (n) {
        window.dataLayer = window.dataLayer || [];
        const i = {
            event: "aioaWidget",
            debug_mode: !1,
            link_classes: e,
            link_text: t.trim(),
            event_callback: () => {}
        };
        "function" == typeof window.gtag ? window.gtag("event", "aioaWidget", i) : window.dataLayer.push(i)
    }
    if (o) {
        const i = o.split("|"),
            n = i[0],
            s = i[1],
            r = {
                visitorID: Math.random(),
                events: "aioaWidget",
                eVar29: e,
                v1: t ? .trim()
            },
            l = `https://${s}/b/ss/${n}/0/JSON-1.4.4`;
        try {
            await ai.post(l, r)
        } catch (a) {}
    }
}

function ri(e) {
    let t = { ...e
    };
    return 0 === t.font_size && (t = { ...t,
        font_size: 100
    }), 0 === t.letter_spacing && (t = { ...t,
        letter_spacing: 100
    }), 0 === t.line_height && (t = { ...t,
        line_height: 100
    }), 0 === t.content_scaling && (t = { ...t,
        content_scaling: 100
    }), t
}
ai.Axios = ei, ai.CanceledError = bt, ai.CancelToken = ii, ai.isCancel = yt, ai.VERSION = Jt, ai.toFormData = Ve, ai.AxiosError = je, ai.Cancel = ai.CanceledError, ai.all = function(e) {
    return Promise.all(e)
}, ai.spread = function(e) {
    return function(t) {
        return e.apply(null, t)
    }
}, ai.isAxiosError = function(e) {
    return Me.isObject(e) && !0 === e.isAxiosError
}, ai.mergeConfig = Lt, ai.AxiosHeaders = ft, ai.formToJSON = e => st(Me.isHTMLForm(e) ? new FormData(e) : e), ai.getAdapter = Vt.getAdapter, ai.HttpStatusCode = oi, ai.default = ai;
const li = ["color_blindness", "font_size", "letter_spacing", "content_scaling", "line_height", "virtual_keyboard", "reading_mask", "reading_guide", "read_mode", "invert_colors", "light_contrast", "dark_contrast", "high_contrast", "smart_contrast", "monochrome", "low_saturation", "high_saturation", "text_color", "title_color", "background_color", "screen_reader", "talk_type", "voice_navigation", "libras", "dyslexia_font", "subtitle_on_video", "readable_font", "sign_language_font", "stop_animations", "align_center", "align_left", "align_right", "big_black_cursor", "big_white_cursor", "hide_images", "highlight_links", "highlight_titles", "highlight_hover", "highlight_focus", "text_magnifier", "mute_sounds", "slow_cursor", "blue_light_filter", "speak_to_navigate", "asl", "focus_locator", "focus_indicator"];

function ci() {
    return !!/iPad|iPhone|iPod/.test(navigator.platform) || navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform)
}
let di = !1;
(J({
    tablet: !0
}) || ci()) && (di = !0);
const ui = {
    virtual_keyboard: !1,
    color_blindness: null,
    background_color: null,
    text_color: null,
    title_color: null,
    reading_mask: !1,
    read_mode: !1,
    invert_colors: !1,
    light_contrast: !1,
    dark_contrast: !1,
    high_contrast: !1,
    smart_contrast: !1,
    monochrome: !1,
    low_saturation: !1,
    high_saturation: !1,
    align_center: !1,
    align_left: !1,
    align_right: !1,
    screen_reader: !1,
    talk_type: !1,
    voice_navigation: !1,
    libras: !1,
    font_size: 100,
    line_height: 100,
    letter_spacing: 100,
    content_scaling: 100,
    dyslexia_font: !1,
    subtitle_on_video: !1,
    readable_font: !1,
    sign_language_font: !1,
    stop_animations: !1,
    reading_guide: !1,
    big_black_cursor: !1,
    big_white_cursor: !1,
    slow_cursor: !1,
    dictionarySearch: !1,
    hide_images: !1,
    highlight_links: !1,
    highlight_titles: !1,
    blue_light_filter: !1,
    speak_to_navigate: !1,
    asl: !1,
    focus_locator: !1,
    focus_indicator: !1,
    summarize_page: !1,
    darkMode: !1,
    highlight_hover: !1,
    highlight_focus: !1,
    text_magnifier: !1,
    mute_sounds: !1
};
let pi = {
    hideWidget: !1,
    widget_position: null,
    widget_position_mobile: null,
    user_widget_position: null,
    widget_icon_type: "aioa-icon-type-1",
    widget_hide_icon_type: "aioa-icon-type-34",
    widget_icon_size: "aioa-medium-icon",
    widget_icon_size_mobile: "aioa-medium-icon",
    is_widget_custom_position: !1,
    is_mobile_position: !1,
    is_widget_custom_position_mobile: !1,
    is_widget_movable: !1,
    widget_position_top: null,
    widget_position_right: null,
    widget_position_bottom: null,
    widget_position_left: null,
    widget_position_horizontal_center_offset: null,
    widget_position_vertical_center_offset: null,
    widget_position_top_mobile: null,
    widget_position_right_mobile: null,
    widget_position_bottom_mobile: null,
    widget_position_left_mobile: null,
    widget_position_horizontal_center_offset_mobile: null,
    widget_position_vertical_center_offset_mobile: null,
    is_widget_custom_size: !1,
    is_widget_custom_size_mobile: !1,
    is_mobile_icon: !1,
    is_custom_trigger: !1,
    custom_trigger_id: null,
    mobile_visibility: 1,
    widget_icon_size_custom: 0,
    widget_icon_size_custom_mobile: 0,
    customPositionClass: "aioa-custom-position-",
    show_manage_link: null,
    isMac: -1 !== navigator.userAgent.toLowerCase().indexOf("mac"),
    isMobile: di,
    isIOS: !!ci(),
    darkTextColor: !0,
    adobe_key: null,
    ga_key: null,
    brand_logo: null,
    is_custome_branding: !1,
    statement_link: null,
    widget_color_code: null,
    scrollPosition: 0,
    oversize_widget: !0,
    user_oversize_widget: null,
    api_called: !1,
    active_language: "",
    default_language: null,
    default_voice: null,
    active_profile: null,
    is_white_label: !1,
    isActive: !1,
    fromAPI: !1,
    livetrasn: !1,
    live_site_translate: 0,
    website_id: 0,
    purchaseplan: !1,
    accessDate: "",
    accessTime: "",
    hidewidget: !1,
    is_free_widget: 1,
    report_problem_link: null,
    ...ui,
    features: {
        main_menu: [],
        languages: [],
        other_options: [],
        accessibility_profiles: []
    },
    dynamicCommand: [],
    filterContentLandMark: [],
    custom_plans: null,
    plans: null,
    is_sound_disabled: !1,
    isWhiteLebalCheck: !1,
    no_data_found: !1,
    widget_leave_page: !1,
    focus_indicator: !1,
    summarize_page: !1,
    is_widget_text_color: !1,
    widget_text_color: null
};
const gi = {
        blind: ["talk_n_type", "screen_reader"],
        motor_impaired: ["stop_animations", "text_magnifier"],
        visually_impaired: ["stop_animations", "readable_font", "big_white_cursor", "text_magnifier", "high_saturation"],
        color_blind: ["color_blindness"],
        dyslexia: ["stop_animations", "dyslexia_font"],
        cognitive_learning: ["stop_animations", "reading_mask", "text_magnifier"],
        seizure_epileptic: ["stop_animations", "low_saturation"],
        adhd: ["stop_animations", "low_saturation", "reading_mask"],
        elderly: ["content_scaling", "text_magnifier", "big_white_cursor", "stop_animations", "reading_guide", "highlight_focus"],
        epilepsy: ["stop_animations", "low_saturation", "mute_sounds"],
        parkinson_disease: ["highlight_links", "highlight_titles", "stop_animations", "slow_cursor", "font_size", "high_contrast", "letter_spacing", "content_scaling", "line_height"],
        deaf: ["asl", "voice_navigation"]
    },
    mi = {
        blind: ["talk_n_type", "screen_reader"],
        motor_impaired: ["stop_animations"],
        visually_impaired: ["stop_animations", "readable_font", "high_saturation"],
        color_blind: ["color_blindness"],
        dyslexia: ["stop_animations", "dyslexia_font"],
        cognitive_learning: ["stop_animations"],
        seizure_epileptic: ["stop_animations", "low_saturation"],
        adhd: ["stop_animations", "low_saturation"],
        elderly: ["content_scaling", "stop_animations", "smart_contrast"],
        epilepsy: ["stop_animations", "low_saturation", "mute_sounds"],
        parkinson_disease: ["highlight_links", "stop_animations", "font_size", "high_contrast"]
    };
let fi = [];
const hi = (e, t = !1) => {
        const i = Object.keys(e).filter(t => pi[t] !== e[t]);
        pi = e;
        const n = i.some(e => li.includes(e)),
            o = ["font_size", "letter_spacing", "content_scaling", "line_height"],
            a = pi.isMobile ? mi : gi;
        if (pi.active_profile && n) {
            if (Object.keys(a).filter(e => {
                    if (null !== pi.active_profile) {
                        if (pi.active_profile && e !== pi.active_profile) return !1;
                        return a[e].every(e => o.includes(e) ? 100 !== pi[e] : pi["talk_n_type" === e ? "talk_type" : e])
                    }
                }).length <= 0) {
                document.querySelectorAll("#accessibility_profiles_panel button").forEach(e => {
                    e.setAttribute("aria-pressed", "false"), pi && hi({ ...ri(pi),
                        active_profile: null
                    })
                })
            }
        }
        const s = Object.keys(a).filter(e => a[e].every(e => "color_blindness" === e ? "deuteranomaly" === pi.color_blindness : o.includes(e) ? 100 !== pi[e] : pi["talk_n_type" === e ? "talk_type" : e]));
        if (s.forEach(e => {
                fi.includes(e) || fi.push(e)
            }), fi = fi.filter(e => s.includes(e)), s.length > 0 && n) {
            const e = fi[fi.length - 1],
                t = document.querySelector(`div[data-accessibility="${e}"] button`);
            if (t) {
                document.querySelectorAll("#accessibility_profiles_panel button").forEach(e => {
                    e.setAttribute("aria-pressed", "false")
                }), t.setAttribute("aria-pressed", "true")
            }
            pi && hi({ ...ri(pi),
                active_profile: e
            })
        }
        localStorage.setItem("widgetSettings", JSON.stringify(pi));
        const r = function(e, t) {
                let i = !0;
                const n = e => e ? ? !1;
                return Object.keys(e).map(o => {
                    "isActive" !== o && n(e[o]) !== n(t[o]) && (i = !1)
                }), i
            }(ui, pi),
            l = document.querySelector(".aioa-widget-wrapper");
        r ? l ? .classList.remove("aioafo") : l ? .classList.add("aioafo")
    },
    yi = () => {
        const e = localStorage.getItem("widgetSettings");
        if (e) {
            const t = JSON.parse(e);
            pi = { ...t,
                isMobile: di,
                api_called: !1,
                widget_color_code: null,
                widget_position: null
            }
        }
    },
    bi = () => {
        const e = localStorage.getItem("widgetSettings");
        if (e) {
            return JSON.parse(e)
        }
        return {}
    },
    _i = e => {
        const t = e.target.getAttribute("aria-label");
        t && si("Reset Preferences", t), localStorage.removeItem("widgetSettings"), localStorage.removeItem("aioReaderEnale"), Object.keys(localStorage).filter(e => e.startsWith("i18next_res_")).forEach(e => localStorage.removeItem(e)), location.reload()
    };
var vi = {
        chrome: "Google Chrome",
        brave: "Brave",
        crios: "Google Chrome",
        edge: "Microsoft Edge",
        edg: "Microsoft Edge",
        edgios: "Microsoft Edge",
        fennec: "Mozilla Firefox",
        jsdom: "JsDOM",
        mozilla: "Mozilla Firefox",
        fxios: "Mozilla Firefox",
        msie: "Microsoft Internet Explorer",
        opera: "Opera",
        opios: "Opera",
        opr: "Opera",
        opt: "Opera",
        rv: "Microsoft Internet Explorer",
        safari: "Safari",
        samsungbrowser: "Samsung Browser",
        electron: "Electron"
    },
    wi = {
        android: "Android",
        androidTablet: "Android Tablet",
        cros: "Chrome OS",
        fennec: "Android Tablet",
        ipad: "IPad",
        ipod: "IPod",
        iphone: "IPhone",
        jsdom: "JsDOM",
        linux: "Linux",
        mac: "Macintosh",
        tablet: "Android Tablet",
        win: "Windows",
        "windows phone": "Windows Phone",
        xbox: "Microsoft Xbox"
    },
    ki = (e, t = -1) => {
        let i = new RegExp(`^-?\\d+(?:.\\d{0,${t}})?`),
            n = Number(e).toString().match(i);
        return n ? n[0] : null
    },
    Si = () => typeof window < "u" ? window.navigator : null,
    Ei = class {
        userAgent;
        constructor(e) {
            this.userAgent = e || Si() ? .userAgent || null
        }
        static get VERSION() {
            return "4.1.0"
        }
        parseUserAgent(e) {
            let t = {},
                i = e || this.userAgent || "",
                n = i.toLowerCase().replace(/\s\s+/g, " "),
                o = /(edge)\/([\w.]+)/.exec(n) || /(edg)[/]([\w.]+)/.exec(n) || /(opr)[/]([\w.]+)/.exec(n) || /(opt)[/]([\w.]+)/.exec(n) || /(fxios)[/]([\w.]+)/.exec(n) || /(edgios)[/]([\w.]+)/.exec(n) || /(jsdom)[/]([\w.]+)/.exec(n) || /(samsungbrowser)[/]([\w.]+)/.exec(n) || /(electron)[/]([\w.]+)/.exec(n) || /(chrome)[/]([\w.]+)/.exec(n) || /(crios)[/]([\w.]+)/.exec(n) || /(opios)[/]([\w.]+)/.exec(n) || /(version)(applewebkit)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(n) || /(webkit)[/]([\w.]+).*(version)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(n) || /(applewebkit)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(n) || /(webkit)[/]([\w.]+)/.exec(n) || /(opera)(?:.*version|)[/]([\w.]+)/.exec(n) || /(msie) ([\w.]+)/.exec(n) || /(fennec)[/]([\w.]+)/.exec(n) || n.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(n) || n.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n) || [],
                a = /(ipad)/.exec(n) || /(ipod)/.exec(n) || /(iphone)/.exec(n) || /(jsdom)/.exec(n) || /(windows phone)/.exec(n) || /(xbox)/.exec(n) || /(win)/.exec(n) || /(tablet)/.exec(n) || /(android)/.test(n) && !1 === /(mobile)/.test(n) && ["androidTablet"] || /(android)/.exec(n) || /(mac)/.exec(n) || /(linux)/.exec(n) || /(cros)/.exec(n) || [],
                s = o[5] || o[3] || o[1] || null,
                r = a[0] || null,
                l = o[4] || o[2] || null,
                c = Si();
            "chrome" === s && "function" == typeof c ? .brave ? .isBrave && (s = "brave"), s && (t[s] = !0), r && (t[r] = !0);
            let d = !!(t.tablet || t.android || t.androidTablet),
                u = !!(t.ipad || t.tablet || t.androidTablet),
                p = !!(t.android || t.androidTablet || t.tablet || t.ipad || t.ipod || t.iphone || t["windows phone"]),
                g = !!(t.cros || t.mac || t.linux || t.win),
                m = !!(t.brave || t.chrome || t.crios || t.opr || t.safari || t.edg || t.electron),
                f = !(!t.msie && !t.rv),
                h = !(!t.chrome && !t.crios),
                y = !!(t.fxios || t.fennec || t.mozilla),
                b = !!t.safari,
                _ = !!(t.opera || t.opios || t.opr || t.opt),
                v = !!(t.edg || t.edge || t.edgios);
            return {
                name: vi[s] ? ? null,
                platform: wi[r] ? ? null,
                userAgent: i,
                version: l,
                shortVersion: l ? ki(parseFloat(l), 2) : null,
                isAndroid: d,
                isTablet: u,
                isMobile: p,
                isDesktop: g,
                isWebkit: m,
                isIE: f,
                isChrome: h,
                isFireFox: y,
                isSafari: b,
                isOpera: _,
                isEdge: v
            }
        }
        getBrowserInfo() {
            let e = this.parseUserAgent();
            return {
                name: e.name,
                platform: e.platform,
                userAgent: e.userAgent,
                version: e.version,
                shortVersion: e.shortVersion
            }
        }
    };
const xi = () => {
        const e = document.querySelector("#aioa_accessibility_settings");
        e && e.classList.add("aioa-loading")
    },
    Ai = () => {
        const e = document.querySelector("#aioa_accessibility_settings");
        e && e.classList.remove("aioa-loading")
    },
    Li = ["hi", "en", "en-gb", "en-au", "en-ca", "en-ZA", "es", "fr", "ja", "cs", "nl", "sk", "ru", "de", "it", "ko", "pt-br", "ar", "tr"],
    Ti = ["ar", "hy", "as", "bal", "be", "bn", "pt", "my", "zh", "cs", "en", "en-gb", "en-au", "en-ca", "en-ZA", "en-us", "fa", "fr", "ka", "de", "glk", "el", "he", "hi", "hu", "it", "ja", "kn", "ko", "ku", "mk", "ml", "ha", "nqo", "no", "or", "pl", "pa", "ru", "sd", "es", "es-mx", "sv", "te", "th", "tr", "uk", "ur", "ug"],
    Oi = ["ast", "an", "sc", "rm", "vec", "nap", "scn", "fur", "lld", "rup", "csb", "hsb", "rue", "br", "kw", "gv", "ltg", "rom", "os", "se", "krl", "vep", "izh", "liv", "kv", "mdf", "udm", "ba", "cv", "gag", "oc", "crh", "krc", "kum", "nog", "xmf", "lzz", "sva", "ce", "inh", "ava", "lez", "ady", "ab", "abq", "got", "xtg", "chm", "aii", "ett", "prs"];
var Ci = {
    exports: {}
};

function qi(e, t = 100, i = {}) {
    if ("function" != typeof e) throw new TypeError(`Expected the first parameter to be a function, got \`${typeof e}\`.`);
    if (t < 0) throw new RangeError("`wait` must not be negative.");
    const {
        immediate: n
    } = "boolean" == typeof i ? {
        immediate: i
    } : i;
    let o, a, s, r, l;

    function c() {
        const i = Date.now() - r;
        if (i < t && i >= 0) s = setTimeout(c, t - i);
        else if (s = void 0, !n) {
            const t = o,
                i = a;
            o = void 0, a = void 0, l = e.apply(t, i)
        }
    }
    const d = function(...i) {
        if (o && this !== o) throw new Error("Debounced method called with different contexts.");
        o = this, a = i, r = Date.now();
        const d = n && !s;
        if (s || (s = setTimeout(c, t)), d) {
            const t = o,
                i = a;
            o = void 0, a = void 0, l = e.apply(t, i)
        }
        return l
    };
    return d.clear = () => {
        s && (clearTimeout(s), s = void 0)
    }, d.flush = () => {
        if (!s) return;
        const t = o,
            i = a;
        o = void 0, a = void 0, l = e.apply(t, i), clearTimeout(s), s = void 0
    }, d
}
Ci.exports.debounce = qi, Ci.exports = qi;
const $i = B(Ci.exports);

function Pi(e) {
    const t = t => {
        if ("Tab" !== t.key) return;
        const i = Array.from(e.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])')).filter(e => null !== e.offsetParent);
        if (0 === i.length) return;
        const n = i[0],
            o = i[i.length - 1],
            a = document.activeElement;
        t.shiftKey ? a !== n && e.contains(a) || (t.preventDefault(), o.focus()) : a !== o && e.contains(a) || (t.preventDefault(), n.focus())
    };
    e.removeEventListener("keydown", e._trapFocusHandler), e._trapFocusHandler = t, e.addEventListener("keydown", t)
}
let Ri = null;
const Ni = async () => {
    const e = window.innerWidth;
    let t = 2;
    const i = document.querySelectorAll(".aioa-profile-description"),
        n = document.querySelectorAll(".accessibility-control-wrapper"),
        o = bi();
    n.forEach((e, t) => {
        e.getAttribute("data-accessibility")
    }), t = e < 640 || !o.user_oversize_widget ? 2 : 3, i.forEach((e, i) => {
        const n = i + 1;
        if (e.hasAttribute("aioa-custom-profile-description")) {
            const i = e.closest(".accessibility-control-wrapper");
            if (!i) return;
            const n = Array.from(i.parentElement.querySelectorAll(".accessibility-control-wrapper")).filter(e => "none" !== getComputedStyle(e).display).indexOf(i);
            if (-1 === n) return;
            "sd" === F.language || F.dir();
            let o = !1;
            return o = (n + 1) % t === 0, void e.classList.toggle("aioa-from-right", o)
        }
        Oi.includes(o.active_language) && 0 !== i ? i % t === 0 ? e.classList.add("aioa-from-right") : e.classList.remove("aioa-from-right") : n % t === 0 ? e.classList.add("aioa-from-right") : e.classList.remove("aioa-from-right")
    })
};
$i(() => Ni(), 300), window.addEventListener("resize", () => {});
const Ii = "apiResponses";

function Mi() {
    return new Promise((e, t) => {
        const i = indexedDB.open("apiCacheDB", 1);
        i.onupgradeneeded = () => {
            const e = i.result;
            e.objectStoreNames.contains(Ii) || e.createObjectStore(Ii)
        }, i.onsuccess = () => e(i.result), i.onerror = () => t(i.error)
    })
}
async function ji(e, t, i) {
    const n = await Mi();
    return new Promise((o, a) => {
        const s = n.transaction(Ii, "readwrite"),
            r = s.objectStore(Ii),
            l = {
                data: t,
                expiry: Date.now() + i
            };
        r.put(l, e), s.oncomplete = () => o(), s.onerror = () => a(s.error)
    })
}
async function Di(e) {
    const t = await Mi();
    return new Promise(i => {
        const n = t.transaction(Ii, "readwrite").objectStore(Ii),
            o = n.get(e);
        o.onsuccess = () => {
            const t = o.result;
            if (t) return Date.now() > t.expiry ? (n.delete(e), void i(null)) : void i(t.data);
            i(null)
        }, o.onerror = () => i(null)
    })
}
const Fi = {
        en: "English",
        "en-gb": "English (UK)",
        "en-au": "English (Australian)",
        "en-ca": "English (Canadian)",
        "en-ZA": "English (South Africa)",
        hi: "Hindi",
        gu: "Gujarati",
        mr: "Marathi",
        bn: "Bengali",
        ta: "Tamil",
        te: "Telugu",
        kn: "Kannada",
        ml: "Malayalam",
        pa: "Punjabi",
        ur: "Urdu",
        or: "Odia",
        as: "Assamese",
        sa: "Sanskrit",
        ar: "Arabic",
        zh: "Chinese (Simplified)",
        "zh-ch": "Chinese (Traditional)",
        ja: "Japanese",
        ko: "Korean",
        th: "Thai",
        vi: "Vietnamese",
        ms: "Malay",
        tr: "Turkish",
        ru: "Russian",
        uk: "Ukrainian",
        pl: "Polish",
        nl: "Dutch",
        de: "German",
        fr: "French",
        es: "Spanish",
        "es-mx": "Spanish (Mexico)",
        pt: "Portuguese",
        it: "Italian",
        el: "Greek",
        he: "Hebrew",
        sv: "Swedish",
        no: "Norwegian",
        da: "Danish",
        fi: "Finnish",
        cs: "Czech",
        hu: "Hungarian",
        ro: "Romanian",
        sk: "Slovak",
        bg: "Bulgarian",
        hr: "Croatian",
        sr: "Serbian"
    },
    zi = () => new Promise(e => {
        const t = document.createElement("audio");
        t.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=";
        let i = !1;
        const n = n => {
            i || (i = !0, t.removeAttribute("src"), t.load(), e(n))
        };
        t.addEventListener("loadedmetadata", () => {
            n(!0)
        }, {
            once: !0
        }), t.addEventListener("canplay", () => {
            n(!0)
        }, {
            once: !0
        }), t.addEventListener("error", () => {
            n(!1)
        }, {
            once: !0
        }), t.load(), setTimeout(() => {
            n(!1)
        }, 1e3)
    });
let Bi = !0;
const Ui = async e => {
    const t = document.querySelector("#accessibility_hide_interface_modal"),
        i = document.querySelector("#aioa_unhide_interface_button");
    i && i.setAttribute("aria-pressed", "true");
    const n = document.querySelectorAll("body > *:not(.aioa-widget-wrapper), .aioa-widget-wrapper > *:not(#accessibility_hide_interface_modal):not(.simple-keyboard):not(.aioa-notification-group)"),
        o = e.currentTarget.getAttribute("aria-label");
    xi();
    const a = () => {
        if (t)
            if ("block" === window.getComputedStyle(t).display) {
                t.style.display = "none", t.removeAttribute("aria-modal"), t.removeAttribute("role"), t.setAttribute("aria-hidden", "true"), o && si("Close Hide Widget Modal", o), Bi && t.setAttribute("aria-labelledby", "hideModalLabel"), pi.text_magnifier && t.removeAttribute("aioa-magnifier");
                const e = document.documentElement;
                e && e.classList.remove("unhide-interface-opened"), n.forEach(e => {
                    e.inert = !1
                }), setTimeout(() => {
                    const e = document.querySelector("#accessibility_settings_toggle");
                    e ? .focus()
                }, 100)
            } else {
                const e = document.querySelector("#aioa-unhide-interface-close-button");
                t.style.display = "block", t.setAttribute("aria-modal", "true"), t.setAttribute("role", "dialog"), t.removeAttribute("aria-hidden"), pi.text_magnifier && t.setAttribute("aioa-magnifier", "true");
                const i = document.documentElement;
                i && i.classList.add("unhide-interface-opened"), e && e.focus(), Pi(t), o && si("Open Hide Widget Modal", o), n.forEach(e => {
                    e.inert = !0
                })
            }
        Ai()
    };
    t && (localStorage.setItem("aioReaderIndex", "false"), Bi ? ((e => {
        const t = F.t;
        e.innerHTML = `<div class="aioa-modal-dialog">\n                <button aria-label="Close Accessibility Hide Interface Popup" data-i18n-labelkey="close_accessibility_hide_interface_popup" class="aioa-modal-close-button" id="aioa-unhide-interface-close-button"></button>\n                <div class="aioa-modal-content">\n                    <div role="heading" aria-level="2" class="h2" id="hideModalLabel" data-i18n-key="unhideConfirmation" aioa-magnifier="${!!pi.text_magnifier}">${t("unhideConfirmation")}</div>\n                    <p class="accessibility-hide-text" data-i18n-key="unhideWarning" aioa-magnifier="${!!pi.text_magnifier}">\n                    ${t("unhideWarning")}\n                    </p>\n                    <div class="accessibility-hide-buttons">\n                        <button data-i18n-key="accept" class="accessibility-hide-accept-button" id="aioa-unhide-interface-accept-button" aioa-magnifier="${!!pi.text_magnifier}">${t("accept")}</button>\n                        <button data-i18n-key="cancel" class="accessibility-hide-cancel-button" id="aioa-unhide-interface-cancel-button" aioa-magnifier="${!!pi.text_magnifier}">${t("cancel")}</button>\n                    </div>\n                </div>\n            </div>\n\t\t\t\n        `;
        const i = document.querySelector("#aioa-unhide-interface-close-button");
        i ? .addEventListener("click", Ui), document.addEventListener("keydown", function(t) {
            "Escape" !== t.key && "Esc" !== t.key || "block" !== window.getComputedStyle(e).display || i ? .click()
        });
        const n = document.querySelector("#aioa-unhide-interface-cancel-button");
        n ? .addEventListener("click", Ui);
        const o = document.querySelector("#aioa-unhide-interface-accept-button");
        o ? .addEventListener("click", async e => {
            const t = e.currentTarget.textContent;
            t && t.trim() && si("Accept UnHide Widget", t);
            const i = bi();
            i && hi({ ...ri(i),
                hideWidget: !1
            }), Ui(e), localStorage.removeItem("widgetHideUntil"), setTimeout(() => {
                window.location.reload()
            }, 200)
        })
    })(t), setTimeout(() => {
        a(), Bi = !1;
        const e = document.querySelector('div[data-accessibility="screen_reader"] button');
        if (e) {
            "true" == e.getAttribute("aria-pressed") && (e.click(), setTimeout(() => {
                localStorage.setItem("aioReaderIndex", "true"), e.click()
            }, 200))
        }
    }, 500)) : a())
};

function Hi(e, t) {
    if (!e.classList.length) return;
    const i = "widget-dynamic-client-z";
    let n = document.getElementById(i);
    n || (n = document.createElement("style"), n.id = i, document.head.appendChild(n));
    const o = Array.from(e.classList).map(e => `.${CSS.escape(e)}`).join("");
    n.textContent += `\n            ${o} {\n                z-index: ${t} !important;\n            }\n        `
}

function Vi() {
    const e = document.querySelector(".aioa-widget-wrapper");
    if (!e) return;
    let t = function() {
        const e = document.querySelectorAll(".accessibility-settings-modal");
        return Math.max(...Array.from(e).map(e => {
            const t = parseInt(getComputedStyle(e).zIndex, 10);
            return isNaN(t) ? 0 : t
        }), 0)
    }();
    document.querySelectorAll("body *").forEach(i => {
        if (e.contains(i)) return;
        if (null === i.offsetParent) return;
        const n = getComputedStyle(i).zIndex;
        if ("auto" === n) return;
        const o = parseInt(n, 10);
        isNaN(o) || o > t && function(e, t) {
            const i = e.getBoundingClientRect(),
                n = t.getBoundingClientRect();
            return !(i.right < n.left || i.left > n.right || i.bottom < n.top || i.top > n.bottom)
        }(i, e) && Hi(i, t - 3)
    });
    const i = document.querySelector("#ShopifyChat");
    i && Hi(i, t - 3);
    const n = document.querySelector("#alia-root-331868");
    if (n && "www.starwest-botanicals.com" === window.location.hostname) {
        const e = t - 3;
        setTimeout(() => {
            Hi(n, e), n.style.zIndex = String(e)
        }, 1e3);
        const i = document.querySelector("#google-merchantwidget-iframe-wrapper");
        i && setTimeout(() => {
            Hi(i, e), i.style.zIndex = String(e)
        }, 1e3), document.addEventListener("click", t => {
            t.target.closest("#alia-hskcejc1bsig7v24") && setTimeout(() => {
                const t = document.querySelector('[id^="alia-root-"]');
                t && (Hi(t, e), t.style.zIndex = String(e))
            }, 1e3)
        })
    }
}
const Wi = (e, t) => !(!e || !e.contains(t)),
    Ki = ["a", "abbr", "address", "b", "blockquote", "body", "button", "caption", "cite", "code", "dd", "del", "details", "div", "small", "dt", "em", "figcaption", "pre", "p", "h1", "h2", "h3", "h4", "h5", "h6", "i", "input", "ins", "kbd", "label", "legend", "li", "mark", "strong", "span", "sub", "summary", "sup", "td", "textarea", "th", "u", "nav", "footer", "header", "section", "aside", "text", "main", "wow-image", "img", "ul", "select", "store-header", "summary", "details", "main-menu", "form", "select", "font", "table", "article", "font", "aside", "header-component", "svg", "picture"],
    Ji = [{
        slug: "protanomaly",
        label: "Protanomaly"
    }, {
        slug: "deuteranomaly",
        label: "Deuteranomaly"
    }, {
        slug: "tritanomaly",
        label: "Tritanomaly"
    }, {
        slug: "protanopia",
        label: "Protanopia"
    }, {
        slug: "deuteranopia",
        label: "Deuteranopia"
    }, {
        slug: "tritanopia",
        label: "Tritanopia"
    }, {
        slug: "achromatomaly",
        label: "Achromatomaly"
    }, {
        slug: "achromatopsia",
        label: "Achromatopsia"
    }];
let Gi, Xi, Yi = !1,
    Qi = !1,
    Zi = 0,
    en = 0,
    tn = 0,
    nn = !1,
    on = null;

function an(e) {
    return (window.__originalRAF || window.requestAnimationFrame).call(window, e)
}

function sn(e) {
    const t = document.querySelector("body");
    let i = getComputedStyle(t).getPropertyValue("--accessibility-content-scaling");
    i || (i = "1");
    const n = window.innerHeight,
        o = (n - 150) / 2 * parseFloat(i);
    if (Gi && Xi) {
        const t = o - (n / 2 - e),
            i = o + (n / 2 - e);
        pi.read_mode ? (Gi.style.setProperty("height", `${t}px`, "important"), Xi.style.setProperty("height", `${i}px`, "important")) : (Gi.style.height = `${t}px`, Xi.style.height = `${i}px`)
    }
}

function rn() {
    if (nn) {
        const e = pi.slow_cursor ? .1 : 1;
        tn += (en - tn) * e, sn(tn), Gi && (Gi.setAttribute("clientY", tn.toString()), Gi.setAttribute("clientX", Zi.toString()))
    }
    on = an(rn)
}

function ln(e) {
    if (e) Zi = e.clientX, en = e.clientY, nn || (tn = en, nn = !0), null === on && (on = an(rn));
    else {
        const e = Gi ? .getAttribute("clientY");
        e && (tn = parseFloat(e), en = tn, nn = !0, sn(tn))
    }
}
const cn = Object.freeze(Object.defineProperty({
    __proto__: null,
    readingMask: e => {
        const t = e.getAttribute("aria-label");
        if (Qi) {
            document.removeEventListener("mousemove", ln), null !== on && (cancelAnimationFrame(on), on = null), nn = !1, e.setAttribute("aria-pressed", "false"), Gi && (Gi.style.display = "none"), Xi && (Xi.style.display = "none"), Qi = !1, pi.reading_guide && (Gi && (Gi.innerHTML = " "), Xi && (Xi.innerHTML = " ")), t && si(t, "Disable", 1);
            const i = bi();
            i && hi({ ...ri(i),
                reading_mask: !1
            })
        } else {
            Yi || (() => {
                    const e = document.querySelector("body"),
                        t = document.querySelector(".accessibility-reading-mask-element-top"),
                        i = document.querySelector(".accessibility-reading-mask-element-bottom");
                    t ? .remove(), i ? .remove(), Gi = document.createElement("div"), Xi = document.createElement("div"), Gi.classList.add("accessibility-reading-mask-element", "accessibility-reading-mask-element-top"), Xi.classList.add("accessibility-reading-mask-element", "accessibility-reading-mask-element-bottom"), Gi.setAttribute("aria-hidden", "true"), Xi.setAttribute("aria-hidden", "true"), e ? .appendChild(Gi), e ? .appendChild(Xi)
                })(), document.addEventListener("mousemove", ln), e.setAttribute("aria-pressed", "true"), Gi && (Gi.style.display = "block"), Xi && (Xi.style.display = "block"), pi.reading_guide && (Gi && (Gi.innerHTML = " "), Xi && (Xi.innerHTML = " ")),
                function() {
                    const e = window.innerHeight / 2,
                        t = window.innerWidth / 2;
                    Zi = t, en = e, tn = e, nn = !0, Gi && Xi && (Gi.setAttribute("clientY", e.toString()), Gi.setAttribute("clientX", t.toString()), sn(e)), null === on && (on = an(rn))
                }(), Qi = !0, t && si(t, "Enable", 1);
            const i = bi();
            i && hi({ ...ri(i),
                reading_mask: !0
            })
        }
    },
    updateReadingMaskFlag: e => {
        Qi = e, Yi = !1
    },
    update_reading_mask: ln
}, Symbol.toStringTag, {
    value: "Module"
}));

function dn(e) {
    if (pi.content_scaling) {
        const t = document.querySelector("body");
        document.querySelectorAll(".aioa-tooltip");
        let i = pi.content_scaling + e;
        i = Math.min(Math.max(i, 20), 150), t.style.setProperty("zoom", (i / 100).toString()),
            function(e) {
                const t = document.getElementById("accessibility_content_scaling_styles"),
                    i = document.createTextNode(`:root{--accessibility-content-scaling:${e};}`),
                    n = document.createTextNode(`:root{--offset-factor:${e>1?.2:0};}`);
                if (t) t.replaceChild(i, t.childNodes[0]), document.documentElement.style.setProperty("--offset-factor", "" + (e > 1 ? .2 : 0));
                else {
                    const e = document.createElement("style");
                    e.id = "accessibility_content_scaling_styles", e.append(i), e.append(n), document.head.append(e)
                }
            }(1 / (i / 100));
        (() => {
            document.querySelectorAll(".accessibility-tooltip").forEach(e => e.remove())
        })(), !pi.isMobile && _l();
        const n = document.querySelector('div[data-accessibility="content_scaling"] span.accessibility-scale-current');
        n && (n.textContent = i + "%", n.setAttribute("data-content-scale", i.toString()));
        const o = document.querySelector('div[data-accessibility="content_scaling"] button.accessibility-scale-decrease'),
            a = document.querySelector('div[data-accessibility="content_scaling"] button.accessibility-scale-increase');
        i <= 20 ? o ? .setAttribute("disabled", "disabled") : o ? .removeAttribute("disabled"), i >= 150 ? a ? .setAttribute("disabled", "disabled") : a ? .removeAttribute("disabled");
        const s = bi();
        s && Object.keys(s).length > 0 && s && hi({ ...ri(s),
            content_scaling: i ? ? 0
        }), s.reading_mask && ln()
    }
}
const un = Object.freeze(Object.defineProperty({
    __proto__: null,
    changeContentScaling: dn,
    decreaseContentScaling: function(e) {
        const t = document.querySelector('div[data-accessibility="content_scaling"] button.accessibility-scale-decrease'),
            i = document.querySelector('div[data-accessibility="content_scaling"] button.accessibility-scale-increase');
        if (pi.content_scaling <= 20) return void t ? .setAttribute("disabled", "disabled");
        i ? .removeAttribute("disabled");
        const n = e.getAttribute("aria-label");
        n && si(n, "Enable", 1), dn(-10)
    },
    increaseContentScaling: function(e) {
        const t = document.querySelector('div[data-accessibility="content_scaling"] button.accessibility-scale-decrease'),
            i = document.querySelector('div[data-accessibility="content_scaling"] button.accessibility-scale-increase');
        if (pi.content_scaling >= 150) return void i ? .setAttribute("disabled", "disabled");
        t ? .removeAttribute("disabled");
        const n = e.getAttribute("aria-label");
        n && si(n, "Enable", 1), dn(10)
    }
}, Symbol.toStringTag, {
    value: "Module"
}));
let pn = !1,
    gn = null,
    mn = !1;
const fn = e => {
        mn = e
    },
    hn = e => {
        const t = e.style.position;
        if ("fixed" === t || "sticky" === t || "absolute" === t) return !0;
        const i = window.getComputedStyle(e).position;
        return "fixed" === i || "sticky" === i || "absolute" === t
    },
    yn = e => {
        if (!e.classList) return !1;
        const t = ["sticky", "fixed", "sticky-top", "fixed-top", "sticky-header", "fixed-header", "section_header30", "header-announcement-bar-wrapper", "image-holder"],
            i = Array.from(e.classList);
        for (const n of i)
            for (const e of t)
                if (n === e || n.includes(e)) return !0;
        return !1
    },
    bn = e => {
        let t = e;
        for (; t && t !== document.body;) {
            if (hn(t) || yn(t)) return !0;
            t = t.parentElement
        }
        return !1
    },
    _n = e => {
        const t = e.tagName.toLowerCase();
        if ("iframe" === t) {
            const t = e.getAttribute("src") || "";
            if (t.includes("youtube.com") || t.includes("youtu.be") || t.includes("vimeo.com") || t.includes("wistia.com") || t.includes("vidyard.com")) return !0
        }
        if ("video" === t) return !0;
        if (e.classList) {
            const t = ["video", "video-container", "video-wrapper", "embed-container", "fluid-width-video-wrapper"];
            for (const i of t)
                if (e.classList.contains(i)) return !0
        }
        return !!(e.hasAttribute("data-video") || e.hasAttribute("data-youtube") || e.hasAttribute("data-vimeo"))
    },
    vn = e => {
        if (_n(e)) return !0;
        const t = ['iframe[src*="youtube"]', 'iframe[src*="youtu.be"]', 'iframe[src*="vimeo"]', "video", ".video", ".video-container", ".video-wrapper"];
        for (const i of t)
            if (e.querySelector(i)) return !0;
        return !1
    },
    wn = e => {
        if ((e => {
                if (e.hasAttribute("data-motion-part")) return !0;
                const t = e.getAttribute("data-motion-part");
                return !(!t || !(t.includes("BG_LAYER") || t.includes("BG_MEDIA") || t.includes("BG_IMG")))
            })(e)) return !0;
        return e.querySelectorAll("[data-motion-part]").length > 0
    },
    kn = e => {
        const t = e.children;
        for (let i = 0; i < t.length; i++) {
            const e = t[i];
            if (hn(e) || yn(e) || kn(e)) return !0
        }
        return !1
    },
    Sn = () => {
        document.body.querySelectorAll("*").forEach(e => {
            if (e.matches(".aioa-widget-wrapper") || e.closest(".aioa-widget-wrapper")) return;
            let t = !1;
            (e => {
                let t = e;
                for (; t && t !== document.body;) {
                    if (t.classList && t.classList.contains("aioa-widget-wrapper")) return !0;
                    t = t.parentElement
                }
                return !1
            })(e) && (t = !0), hn(e) && (t = !0), yn(e) && (t = !0), bn(e) && (t = !0), wn(e) && (t = !0), kn(e) && (t = !0), (_n(e) && "www.lanecoveaquatic.com.au" !== window.location.hostname || vn(e) && "www.lanecoveaquatic.com.au" !== window.location.hostname) && (t = !0), (e => {
                const t = e.tagName.toLowerCase();
                return "script" === t || "noscript" === t || "wix-iframe" === t
            })(e) && (t = !0);
            const i = ["#shopify-block-Aamora2hLNHcxQVNaT__12120936241911852800", "#gorgias-chat-container", ".lp-whatsapp-icon-bar", "#smile-ui-lite-container", ".smile-lite-launcher-frame", ".wrapper-footer", ".no-color-blind", ".popup-lead-form", ".sticky-bonus-box", ".Vtl-LiveChatChannels", "#lhc_container_v2", ".back-to-top", "#back-to-top", "#custom-next-order", ".block-oasth-telematics-app", "#teaser-app", "#telematics-teaser", ".padding-global", "#aioa-select2-safe-mount", ".form-row"];
            for (const n of i)
                if (e.matches(n)) {
                    t = !0;
                    break
                }
            t ? e.classList.contains("cb-skip") || e.classList.add("cb-skip") : e.classList.contains("cb-skip") && e.classList.remove("cb-skip")
        })
    },
    En = () => {
        document.body.querySelectorAll("*").forEach(e => {
            e.classList.remove("cb-skip")
        })
    };
let xn = !1;
const An = () => (() => {
        const e = document.querySelectorAll("*"),
            t = [];
        return e.forEach(e => {
            const i = window.getComputedStyle(e);
            if ("sticky" === i.position || "fixed" === i.position) {
                const n = e.getBoundingClientRect();
                t.push({
                    element: e,
                    isStuck: n.top <= 0,
                    originalTop: parseInt(i.top) || 0
                })
            }
        }), t
    })().some(e => e.isStuck),
    Ln = () => {
        !xn && gn && "none" !== gn && (requestAnimationFrame(() => {
            An() && document.body.querySelectorAll("*").forEach(e => {
                if (e.matches(".aioa-widget-wrapper") || e.closest(".aioa-widget-wrapper")) return;
                let t = !1;
                yn(e) && (t = !0), bn(e) && (t = !0), kn(e) && (t = !0), (_n(e) && "www.lanecoveaquatic.com.au" !== window.location.hostname || vn(e) && "www.lanecoveaquatic.com.au" !== window.location.hostname) && (t = !0), wn(e) && (t = !0);
                const i = ["#shopify-block-Aamora2hLNHcxQVNaT__12120936241911852800", "#gorgias-chat-container", ".lp-whatsapp-icon-bar", "#smile-ui-lite-container", ".smile-lite-launcher-frame", ".wrapper-footer", ".no-color-blind", ".popup-lead-form", ".sticky-bonus-box", ".Vtl-LiveChatChannels", "#lhc_container_v2", ".back-to-top", "#back-to-top", "#custom-next-order", ".block-oasth-telematics-app", "#teaser-app", "#telematics-teaser", ".padding-global", "#aioa-select2-safe-mount", ".form-row"];
                for (const n of i)
                    if (e.matches(n)) {
                        t = !0;
                        break
                    }
                t ? e.classList.contains("cb-skip") || e.classList.add("cb-skip") : e.classList.contains("cb-skip") && e.classList.remove("cb-skip")
            }), xn = !1
        }), xn = !0)
    },
    Tn = "aioa-select2-safe-mount",
    On = () => {
        const e = window.$;
        if (!e || !e.fn || !e.fn.select2) return !1;
        const t = (() => {
            let e = document.getElementById(Tn);
            return e || (e = document.createElement("div"), e.id = Tn, e.style.position = "absolute", e.style.top = "0", e.style.left = "0", e.style.width = "0", e.style.height = "0", e.style.overflow = "visible", document.body.appendChild(e)), e
        })();
        return e.fn.select2.defaults.set("dropdownParent", e(t)), e("select.select2-hidden-accessible").each(function() {
            const i = e(this),
                n = i.data("select2") ? .options ? .options || {};
            i.select2("destroy").select2({ ...n,
                dropdownParent: e(t)
            })
        }), !0
    },
    Cn = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: async e => {
            if (!pn) {
                const e = document.createElement("div");
                e.style.width = "0px", e.style.height = "0px", e.innerHTML = '<svg style=width:0;height:0 version=1.1 xmlns=http://www.w3.org/2000/svg><defs><filter id=protanopia><feColorMatrix in=SourceGraphic type=matrix values="0.10889,0.89111,-0.00000,0,0 0.10889,0.89111,0.00000,0,0 0.00447,-0.00447,1.00000,0,0 0,0,0,1,0"/></filter><filter id=protanomaly><feColorMatrix in=SourceGraphic type=matrix values="0.46533,0.53467,-0.00000,0,0 0.06533,0.93467,0.00000,0,0 0.00268,-0.00268,1.00000,0,0 0,0,0,1,0"/></filter><filter id=deuteranopia><feColorMatrix in=SourceGraphic type=matrix values="0.29031,0.70969,-0.00000,0,0 0.29031,0.70969,-0.00000,0,0 -0.02197,0.02197,1.00000,0,0 0,0,0,1,0"/></filter><filter id=deuteranomaly><feColorMatrix in=SourceGraphic type=matrix values="0.57418,0.42582,-0.00000,0,0 0.17418,0.82582,-0.00000,0,0 -0.01318,0.01318,1.00000,0,0 0,0,0,1,0"/></filter><filter id=tritanopia><feColorMatrix in=SourceGraphic type=matrix values="1.00000,0.15236,-0.15236,0,0 0.00000,0.86717,0.13283,0,0 -0.00000,0.86717,0.13283,0,0 0,0,0,1,0"/></filter><filter id=tritanomaly><feColorMatrix in=SourceGraphic type=matrix values="1.00000,0.09142,-0.09142,0,0 0.00000,0.92030,0.07970,0,0 -0.00000,0.52030,0.47970,0,0 0,0,0,1,0"/></filter><filter id=achromatopsia><feColorMatrix in=SourceGraphic type=matrix values="0.299,0.587,0.114,0,0 0.299,0.587,0.114,0,0 0.299,0.587,0.114,0,0 0,0,0,1,0"/></filter><filter id=achromatomaly><feColorMatrix in=SourceGraphic type=matrix values="0.618,0.320,0.062,0,0 0.163,0.775,0.062,0,0 0.163,0.320,0.516,0,0 0,0,0,1,0"/></filter></defs></svg>', document.body.appendChild(e), pn = !0, On(), document.querySelectorAll(".h-100").forEach(e => {
                    e.classList.contains("home--id-igea-digital-bank") && e.classList.remove("h-100")
                });
                const t = document.querySelector("body");
                t ? .style.setProperty("height", "auto", "important")
            }
            document.querySelector("div[data-accessibility='color_blindness'] .aioa-custom-select");
            const t = document.querySelector("div[data-accessibility='color_blindness'] .select-button .selected-value"),
                i = document.querySelector("div[data-accessibility='color_blindness'] .select-button"),
                n = document.querySelector("html"),
                o = e.parentElement,
                a = o ? .querySelector("label"),
                s = e.value;
            if (t && a && a.textContent && s)
                if (t.innerText = a.textContent, t.setAttribute("data-i18n-key", s), (() => {
                        const e = document.querySelector("div[data-accessibility='color_blindness'] .aioa-custom-select"),
                            t = document.querySelector("div[data-accessibility='color_blindness'] .select-button");
                        e ? .classList.remove("active"), t ? .setAttribute("aria-expanded", "false"), t ? .blur()
                    })(), i ? .setAttribute("aria-expanded", "false"), Ji.forEach(e => n ? .classList.remove(e.slug)), "none" !== s) {
                    if (n ? .classList.add(s), gn = s, Sn(), window.addEventListener("scroll", Ln), si(s, "Enable", 1), function() {
                            const e = document.querySelector('meta[property="og:url"]') ? .getAttribute("content"),
                                t = "string" == typeof e && e.includes("https://www.mediaposte-martech.com"),
                                i = !!document.querySelector('meta[name="generator"][content*="mediaposte-martech"]'),
                                n = Array.from(document.scripts).some(e => e ? .src && e ? .src ? .includes("mediaposte-martech.com"));
                            return t || i || n
                        }()) {
                        const e = document.createElement("style");
                        e.textContent = `\n                    .protanopia body *:not(.cb-skip):not(.aioa-widget-wrapper):not(.aioa-widget-wrapper *):not(#shopify-block-Aamora2hLNHcxQVNaT__12120936241911852800):not(#gorgias-chat-container):not(.lp-whatsapp-icon-bar):not(#smile-ui-lite-container):not(.smile-lite-launcher-frame):not(.wrapper-footer):not(.no-color-blind):not(.popup-lead-form):not(.sticky-bonus-box):not(.Vtl-LiveChatChannels):not(#lhc_container_v2):not(.back-to-top):not(#back-to-top):not(#custom-next-order) {\n                        filter: url("#${s}") !important;\n                    }\n                `, document.head.appendChild(e)
                    }
                    if ("thedepottradingco.com" === window.location.hostname) {
                        const e = document.createElement("style");
                        e.textContent = "\n                    .ins-tile--multi-location.ins-tile--with-system-settings .ins-tile__button>.ins-control--solid .ins-control__text, .ins-tile--multi-location.ins-tile--with-system-settings .ins-tile__button>.ins-control--outline:hover .ins-control__text {\n                        filter: invert() grayscale() contrast(9999) !important;\n                    }\n                ", document.head.appendChild(e)
                    }
                    if ("https://aem-uat.pnbmetlife.com" === window.location.origin) {
                        const e = document.querySelector(".sticky-bonus-box"),
                            t = document.querySelector("body");
                        t && e && t.appendChild(e)
                    }
                    if ("https://fastachi.com" === window.location.origin) {
                        const e = document.querySelector(".label-tab.hidden-on-desktop");
                        if (e) {
                            new MutationObserver(() => {
                                const t = document.querySelector("#color_blindness-select li input:checked"),
                                    i = t ? .value;
                                "none" !== i && ("true" === e.getAttribute("aria-expanded") || document.querySelector(".open-mobile-sidebar") ? (Ji.forEach(e => n ? .classList.remove(e.slug)), En()) : (n ? .classList.add(s), Sn()))
                            }).observe(document.body, {
                                attributes: !0,
                                subtree: !0
                            })
                        }
                        const t = document.querySelector(".needsclick.kl-teaser-YAFjFQ.kl-private-reset-css-Xuajs1");
                        t && t.parentElement && (t.parentElement.id = "custom-next-order")
                    }
                    if ("deuteranomaly" !== s) {
                        const e = document.querySelector("#accessibility_profiles_panel div[data-accessibility='color_blind'] button");
                        e && e.setAttribute("aria-pressed", "false")
                    }
                    const e = bi();
                    e && hi({ ...ri(e),
                        color_blindness: s,
                        ..."deuteranomaly" !== s ? {
                            active_profile: null
                        } : {}
                    }), mn || setTimeout(() => {
                        i && i.focus()
                    }, 150)
                } else {
                    si("Color Blindness", "Disable", 1), En(), window.removeEventListener("scroll", Ln), gn = null;
                    const e = bi();
                    if (e && hi({ ...ri(e),
                            color_blindness: null,
                            active_profile: null
                        }), "none" == s) {
                        const e = document.querySelector("#accessibility_profiles_panel div[data-accessibility='color_blind'] button");
                        e && e.setAttribute("aria-pressed", "false")
                    }
                    mn || setTimeout(() => {
                        i && i.focus()
                    }, 150)
                }
            if (mn = !1, "www.tatasimplybetter.com" === window.location.hostname || "firstgearinc.com" === window.location.hostname) {
                const e = window.scrollY;
                setTimeout(() => {
                    requestAnimationFrame(() => window.scrollTo(0, e))
                }, 150)
            }
        },
        setProfileTriggerFlag: fn
    }, Symbol.toStringTag, {
        value: "Module"
    }));
let qn = null,
    $n = null,
    Pn = [],
    Rn = -1,
    Nn = null,
    In = null,
    Mn = null,
    jn = 1;
const Dn = ["a[href]", "button:not([disabled])", "input:not([disabled]):not([type='hidden'])", "select:not([disabled])", "textarea:not([disabled])", "[tabindex]:not([tabindex='-1'])", "[contenteditable='true']"].join(","),
    Fn = ["#accessibility_main_controls_panel", "#accessibility_profiles_panel", "#focus-navigation-panel", "#focus-navigation-reopen", ".aioa-widget-wrapper"].join(","),
    zn = "aioa_focus_navigation_state";

function Bn() {
    try {
        const e = localStorage.getItem(zn);
        if (e) return JSON.parse(e)
    } catch {}
    return {
        active: !1,
        minimized: !1,
        position: null
    }
}

function Un(e) {
    try {
        const t = { ...Bn(),
            ...e
        };
        localStorage.setItem(zn, JSON.stringify(t))
    } catch {}
}

function Hn(e = 30) {
    try {
        "undefined" != typeof navigator && "function" == typeof navigator.vibrate && navigator.vibrate(e)
    } catch {}
}

function Vn() {
    const e = document.querySelectorAll(Dn);
    return Array.from(e).filter(e => (e => {
        let t = e;
        for (; t && t !== document.body;) {
            const e = window.getComputedStyle(t);
            if ("none" === e.display || "hidden" === e.visibility) return !1;
            if (0 === parseFloat(e.opacity)) return !1;
            const i = t.getBoundingClientRect();
            if (0 === i.width && 0 === i.height) return !1;
            t = t.parentElement
        }
        return !0
    })(e) && ! function(e) {
        return !!e.closest(Fn)
    }(e))
}

function Wn() {
    Nn && (Nn.el.style.outline = Nn.outline, Nn.el.style.outlineOffset = Nn.offset, Nn = null)
}

function Kn() {
    Wn();
    const e = Pn[Rn];
    if (e) {
        e.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
        });
        try {
            e.focus({
                preventScroll: !0
            })
        } catch {
            e.focus()
        }
        Nn = {
            el: e,
            outline: e.style.outline,
            offset: e.style.outlineOffset
        }, requestAnimationFrame(() => {
            Nn && Nn.el === e && (e.style.setProperty("outline", "3px solid #f5c518", "important"), e.style.setProperty("outline-offset", "5px", "important"))
        })
    }
}

function Jn() {
    Pn.length && (Rn = (Rn + 1) % Pn.length, Kn())
}

function Gn() {
    Pn.length && (Rn = (Rn - 1 + Pn.length) % Pn.length, Kn())
}

function Xn() {
    const e = Pn[Rn];
    e && (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement ? e.focus() : e.click())
}
const Yn = {
    next: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',
    prev: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>',
    trigger: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>',
    close: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    reopen: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>'
};

function Qn(e, t, i, n, o = "12px") {
    const a = document.createElement("button");
    return a.id = e, a.className = `aioa-${e}`, a.type = "button", a.setAttribute("aria-label", t), a.innerHTML = i, a.style.cssText = `\n        width: 52px;\n        height: 52px;\n        flex-shrink: 0;\n        border-radius: ${o};\n        background: var(--accessibility-widget-primary-color, #0b3d9e);\n        color: var(--accessibility-widget-text-color, #ffffff);\n        border: none;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: grab;\n        padding: 0;\n        touch-action: none;\n        user-select: none;\n        -webkit-user-select: none;\n        -webkit-tap-highlight-color: transparent;\n    `, a.addEventListener("pointerdown", () => {
        Hn()
    }), a.addEventListener("click", () => {
        Hn(), n()
    }), a
}

function Zn() {
    const e = window.matchMedia("(max-width: 767px)").matches ? pi ? .content_scaling : 100;
    return "number" != typeof e || isNaN(e) ? 1 : e / 100
}
let eo = null;

function to() {
    eo = null
}

function io() {
    const e = window.visualViewport,
        t = function() {
            if (eo) return eo;
            try {
                const e = document.createElement("div");
                e.style.cssText = "\n            position: fixed;\n            top: 0; left: 0; right: 0; bottom: 0;\n            padding-top: env(safe-area-inset-top, 0px);\n            padding-right: env(safe-area-inset-right, 0px);\n            padding-bottom: env(safe-area-inset-bottom, 0px);\n            padding-left: env(safe-area-inset-left, 0px);\n            visibility: hidden;\n            pointer-events: none;\n        ", document.body.appendChild(e);
                const t = window.getComputedStyle(e);
                eo = {
                    top: parseFloat(t.paddingTop) || 0,
                    right: parseFloat(t.paddingRight) || 0,
                    bottom: parseFloat(t.paddingBottom) || 0,
                    left: parseFloat(t.paddingLeft) || 0
                }, e.remove()
            } catch {
                eo = {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            }
            return eo
        }();
    return e ? {
        width: Math.max(0, e.width - t.left - t.right),
        height: Math.max(0, e.height - t.top - t.bottom),
        offsetLeft: e.offsetLeft + t.left,
        offsetTop: e.offsetTop + t.top
    } : {
        width: Math.max(0, document.documentElement.clientWidth - t.left - t.right),
        height: Math.max(0, window.innerHeight - t.top - t.bottom),
        offsetLeft: t.left,
        offsetTop: t.top
    }
}

function no() {
    const e = Zn(),
        t = io();
    return {
        top: (t.offsetTop + t.height - 254 - 110) / e,
        left: (t.offsetLeft + t.width - 68 - 30) / e
    }
}

function oo(e, t) {
    const i = Zn(),
        n = io(),
        o = e.offsetWidth,
        a = e.offsetHeight,
        s = n.offsetTop + n.height - a,
        r = n.offsetLeft + n.width - o,
        l = n.offsetTop,
        c = n.offsetLeft,
        d = Math.min(Math.max(t.top * i, l), Math.max(s, l)) / i,
        u = Math.min(Math.max(t.left * i, c), Math.max(r, c)) / i;
    e.style.top = `${d}px`, e.style.left = `${u}px`, e.style.right = "auto", e.style.bottom = "auto"
}

function ao(e) {
    return {
        top: parseFloat(e.style.top) || 0,
        left: parseFloat(e.style.left) || 0
    }
}
let so = null;

function ro() {
    null !== so && window.clearTimeout(so), so = window.setTimeout(() => {
        so = null, qn && (oo(qn, ao(qn)), Un({
            position: ao(qn)
        })), $n && (oo($n, ao($n)), Un({
            position: ao($n)
        }))
    }, 120)
}

function lo() {
    to(), window.setTimeout(() => {
        qn && oo(qn, ao(qn)), $n && oo($n, ao($n))
    }, 300)
}
let co = null;

function uo() {
    null === co && (co = requestAnimationFrame(() => {
        co = null, vo()
    }))
}

function po(e) {
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            e.isConnected && oo(e, ao(e))
        })
    }), window.setTimeout(() => {
        e.isConnected && (to(), oo(e, ao(e)))
    }, 400)
}

function go(e, t) {
    let i = !1,
        n = !1,
        o = !1,
        a = -1,
        s = 0,
        r = 0,
        l = 0,
        c = 0;
    e.addEventListener("pointerdown", t => {
        i = !0, n = !1, o = !1, a = t.pointerId, l = t.clientX, c = t.clientY, s = parseFloat(e.style.top) || 0, r = parseFloat(e.style.left) || 0
    }), e.addEventListener("pointermove", t => {
        if (!i) return;
        const d = Zn(),
            u = t.clientX - l,
            p = t.clientY - c;
        if (!n && Math.hypot(u, p) * d > 6) {
            n = !0, Hn(8);
            try {
                e.setPointerCapture(a), o = !0
            } catch {}
        }
        n && oo(e, {
            top: s + p / d,
            left: r + u / d
        })
    });
    const d = a => {
        if (i) {
            if (i = !1, o) {
                try {
                    e.releasePointerCapture(a.pointerId)
                } catch {}
                o = !1
            }
            if (n) {
                oo(e, ao(e)), t(ao(e));
                const i = t => {
                    t.stopPropagation(), t.preventDefault(), e.removeEventListener("click", i, !0)
                };
                e.addEventListener("click", i, !0)
            }
            n = !1
        }
    };
    e.addEventListener("pointerup", d), e.addEventListener("pointercancel", d)
}

function mo(e, t) {
    e.style.transform = `scale(${1/t})`, e.style.transformOrigin = "top left"
}

function fo() {
    const e = Zn();
    e !== jn && (jn = e, qn && (mo(qn, e), oo(qn, ao(qn))), $n && (mo($n, e), oo($n, ao($n))))
}

function ho(e) {
    qn || (qn = document.createElement("div"), qn.id = "focus-navigation-panel", qn.className = "aioa-focus-navigation-panel", qn.setAttribute("role", "toolbar"), qn.setAttribute("aria-label", "Focus navigation controls"), qn.style.cssText = "\n        position: fixed;\n        z-index: 2147483000;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n        box-sizing: border-box;\n        padding: 8px;\n        background: #ffffff;\n        border-radius: 10px 10px;\n        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);\n        touch-action: none;\n    ", qn.appendChild(Qn("focus-nav-next", "Move to next focusable element", Yn.next, Jn)), qn.appendChild(Qn("focus-nav-trigger", "Activate current element", Yn.trigger, Xn)), qn.appendChild(Qn("focus-nav-prev", "Move to previous focusable element", Yn.prev, Gn)), qn.appendChild(Qn("focus-nav-close", "Hide focus navigation", Yn.close, So)), go(qn, e => Un({
        position: e
    })), document.body.appendChild(qn), mo(qn, Zn()), oo(qn, e), po(qn))
}

function yo() {
    qn && (qn.remove(), qn = null)
}

function bo(e) {
    $n || ($n = Qn("focus-navigation-reopen", "Reopen focus navigation toolbar", Yn.reopen, Eo), $n.style.position = "fixed", $n.style.zIndex = "2147483000", $n.style.boxSizing = "content-box", $n.style.border = "8px solid #ffffff", $n.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.25)", $n.style.touchAction = "none", go($n, e => Un({
        position: e
    })), document.body.appendChild($n), mo($n, Zn()), oo($n, e), po($n))
}

function _o() {
    $n && ($n.remove(), $n = null)
}

function vo() {
    Pn = Vn(), Rn >= Pn.length && (Rn = Pn.length - 1)
}

function wo() {
    if (qn || $n) return;
    Pn = Vn(), Rn = -1, In || (In = new MutationObserver(vo), In.observe(document.body, {
        childList: !0,
        subtree: !0
    }), window.addEventListener("scroll", uo, {
        passive: !0,
        capture: !0
    }), window.addEventListener("resize", uo), window.visualViewport ? .addEventListener("resize", uo), window.visualViewport ? .addEventListener("scroll", uo)), Mn || (fo(), Mn = new MutationObserver(fo), Mn.observe(document.documentElement, {
        attributes: !0,
        attributeFilter: ["style", "class"]
    }), Mn.observe(document.body, {
        attributes: !0,
        attributeFilter: ["style", "class"]
    })), window.addEventListener("resize", ro), window.addEventListener("orientationchange", lo), window.visualViewport ? .addEventListener("resize", ro), window.visualViewport ? .addEventListener("scroll", ro);
    const e = Bn();
    Un({
        active: !0
    }), e.minimized ? bo(e.position ? ? no()) : ho(e.position ? ? no())
}

function ko() {
    Wn(), yo(), _o(), In && (In.disconnect(), In = null), window.removeEventListener("scroll", uo, {
            capture: !0
        }), window.removeEventListener("resize", uo), window.visualViewport ? .removeEventListener("resize", uo), window.visualViewport ? .removeEventListener("scroll", uo), null !== co && (cancelAnimationFrame(co), co = null), window.removeEventListener("resize", ro), window.removeEventListener("orientationchange", lo), window.visualViewport ? .removeEventListener("resize", ro), window.visualViewport ? .removeEventListener("scroll", ro), null !== so && (window.clearTimeout(so), so = null), Mn && (Mn.disconnect(), Mn = null), jn = 1, Pn = [], Rn = -1,
        function() {
            try {
                localStorage.removeItem(zn)
            } catch {}
        }()
}

function So() {
    if (!qn) return;
    const e = ao(qn);
    Un({
        minimized: !0,
        position: e
    }), yo(), bo(e)
}

function Eo() {
    const e = $n ? ao($n) : Bn().position ? ? no();
    _o(), Un({
        minimized: !1,
        position: e
    }), ho(e)
}

function xo() {
    return null !== qn || null !== $n
}

function Ao() {
    try {
        const e = bi();
        e && "parkinson_disease" === e.active_profile && e.isMobile && setTimeout(() => {
            wo()
        }, 1e3)
    } catch {}
}

function Lo() {
    try {
        if (document.permissionsPolicy ? .allowsFeature) return document.permissionsPolicy.allowsFeature("microphone");
        if (document.featurePolicy ? .allowsFeature) return document.featurePolicy.allowsFeature("microphone")
    } catch (e) {}
    return !0
}
"loading" === document.readyState ? document.addEventListener("DOMContentLoaded", Ao) : Ao();
const To = {
        blind: [...Lo() ? ["talk_n_type"] : [], "screen_reader"],
        motor_impaired: ["stop_animations", "text_magnifier"],
        visually_impaired: ["stop_animations", "readable_font", "big_white_cursor", "text_magnifier", "high_saturation"],
        color_blind: ["color_blindness"],
        dyslexia: ["stop_animations", "dyslexia_font"],
        cognitive_learning: ["stop_animations", "reading_mask", "text_magnifier"],
        seizure_epileptic: ["stop_animations", "low_saturation"],
        adhd: ["stop_animations", "low_saturation", "reading_mask"],
        elderly: ["content_scaling", "text_magnifier", "big_white_cursor", "stop_animations", "reading_guide", "highlight_focus"],
        epilepsy: ["stop_animations", "low_saturation", "mute_sounds"],
        parkinson_disease: ["highlight_links", "highlight_titles", "stop_animations", "slow_cursor", "font_size", "high_contrast", "letter_spacing", "content_scaling", "line_height"],
        deaf: ["asl", ...Lo() ? ["voice_navigation"] : []]
    },
    Oo = {
        blind: [...Lo() ? ["talk_n_type"] : [], "screen_reader"],
        motor_impaired: ["stop_animations"],
        visually_impaired: ["stop_animations", "readable_font", "high_saturation"],
        color_blind: ["color_blindness"],
        dyslexia: ["stop_animations", "dyslexia_font"],
        cognitive_learning: ["stop_animations"],
        seizure_epileptic: ["stop_animations", "low_saturation"],
        adhd: ["stop_animations", "low_saturation"],
        elderly: ["content_scaling", "stop_animations", "smart_contrast"],
        epilepsy: ["stop_animations", "low_saturation", "mute_sounds"],
        parkinson_disease: ["highlight_links", "stop_animations", "font_size", "high_contrast"]
    };
if (pi.isMac) {
    const e = Oo.blind.indexOf("talk_n_type"); - 1 !== e && Oo.blind.splice(e, 1)
}
let Co = null,
    qo = null;
const $o = async t => {
        const i = F.t,
            n = t.target;
        Co = pi.active_profile;
        const o = bi();
        o && hi({ ...ri(o),
            active_profile: null
        });
        const a = n.getAttribute("data-i18n-labelkey"),
            s = document.querySelectorAll("#accessibility_main_controls_panel button"),
            r = document.querySelectorAll("#accessibility_profiles_panel button"),
            l = n.getAttribute("aria-pressed");
        if (a && si("Set Accessibility Profile", i(a)), Co === a)
            if (qo = Co, Co = null, qo === a) {
                const e = ["font_size", "letter_spacing", "content_scaling", "line_height"],
                    t = bi(),
                    i = Object.keys(To).filter(i => {
                        if (null !== t.active_profile) {
                            if (t.active_profile && i !== t.active_profile) return !1;
                            return To[i].every(i => e.includes(i) ? 100 !== t[i] : t["talk_n_type" === i ? "talk_type" : i])
                        }
                    });
                t && hi({ ...ri(t),
                    active_profile: i.length <= 0 ? null : qo
                }, !0)
            } else s.forEach(e => {
                "true" == e.getAttribute("aria-pressed") && e.removeEventListener("click", Po)
            });
        else {
            if (Co = a, ("blind" === a || "deaf" === a) && Lo()) try {
                if (!(await (async () => {
                        try {
                            return (await navigator.mediaDevices.getUserMedia({
                                audio: !0
                            })).getTracks().forEach(e => e.stop()), !0
                        } catch (e) {
                            return !1
                        }
                    })())) {
                    n.setAttribute("aria-pressed", "false");
                    const e = bi();
                    return void(e && hi({ ...ri(e),
                        active_profile: null
                    }, !0))
                }
            } catch (c) {
                return
            }
            setTimeout(function() {
                const e = bi();
                e && hi({ ...ri(e),
                    active_profile: a
                }, !0)
            }, "blind" === a || "deaf" === a ? 2e3 : 500), s.forEach(e => {
                "true" == e.getAttribute("aria-pressed") && e.addEventListener("click", Po)
            })
        }
        setTimeout(() => {
            if (s.forEach(e => {
                    const t = e.getAttribute("aria-pressed"),
                        i = e.getAttribute("data-i18n-labelkey"),
                        n = pi.isMobile ? Oo : To;
                    let o = !1;
                    null != i && (a && n.hasOwnProperty(a) && n[a].length && n[a].map(n => {
                        i === n && (o = !0), (i === n && "true" !== t && "true" !== l || i === n && "true" == t && "true" === l) && e.click()
                    }), o || "true" !== t || e.click())
                }), "color_blind" === a)
                if ("false" == l) {
                    const e = document.querySelector("#color_blindness-select li input[value='deuteranomaly']");
                    e && (fn(!0), e.click())
                } else {
                    const e = document.querySelector("#color_blindness-select li input[value='none']");
                    e && (fn(!0), e.click())
                }
            else {
                if (bi().color_blindness) {
                    const e = document.querySelector("#color_blindness-select li input[value='none']");
                    e && e.click()
                }
            }
            const t = async e => {
                dn(e)
            };
            if ("elderly" === a)
                if ("false" == l) {
                    const e = 100 - pi.content_scaling;
                    t(e), setTimeout(() => {
                        t(10)
                    }, 100)
                } else {
                    const e = 100 - pi.content_scaling;
                    t(e)
                }
            else if (100 != pi.content_scaling) {
                const e = 100 - pi.content_scaling;
                t(e)
            }
            const i = async t => {
                    const {
                        changeFontSize: i
                    } = await e(() =>
                        import ("./fontSize.js"), []);
                    i(t)
                },
                o = async t => {
                    const {
                        changeLineHeight: i
                    } = await e(() =>
                        import ("./lineHeight.js"), []);
                    i(t)
                },
                c = async t => {
                    const {
                        changeLetterSpacing: i
                    } = await e(() =>
                        import ("./letterSpacing.js"), []);
                    i(t)
                };
            if ("parkinson_disease" === a)
                if ("false" == l) {
                    const e = 100 - pi.font_size;
                    i(e);
                    const n = 100 - pi.line_height;
                    o(n);
                    const a = 100 - pi.letter_spacing;
                    c(a);
                    const s = 100 - pi.content_scaling;
                    t(s), setTimeout(() => {
                        i(10), t(20), o(20), c(10)
                    }, 100), pi.isMobile && setTimeout(() => {
                        wo()
                    }, 1e3)
                } else {
                    const e = 100 - pi.font_size;
                    i(e);
                    const n = 100 - pi.line_height;
                    o(n);
                    const a = 100 - pi.letter_spacing;
                    c(a);
                    const s = 100 - pi.content_scaling;
                    t(s), ko()
                }
            else {
                if (100 != pi.font_size) {
                    const e = 100 - pi.font_size;
                    i(e)
                }
                if (100 != pi.line_height) {
                    const e = 100 - pi.line_height;
                    o(e)
                }
                if (100 != pi.letter_spacing) {
                    const e = 100 - pi.letter_spacing;
                    c(e)
                }
                if (100 != pi.content_scaling) {
                    const e = 100 - pi.content_scaling;
                    t(e)
                }
                xo() && pi.isMobile && ko()
            }
            r.forEach(e => {
                const t = e.getAttribute("data-i18n-labelkey"),
                    i = e.getAttribute("aria-pressed");
                a !== t && "true" === i && e.setAttribute("aria-pressed", "false")
            }), "true" === l ? n.setAttribute("aria-pressed", "false") : n.setAttribute("aria-pressed", "true")
        }, 100)
    },
    Po = e => {
        const t = document.querySelectorAll("#accessibility_profiles_panel button"),
            i = e.target.getAttribute("aria-pressed");
        Co = pi.active_profile, t.forEach(e => {
            const t = e.getAttribute("data-i18n-labelkey");
            if (Co !== t && "true" === i) {
                e.setAttribute("aria-pressed", "false"), "parkinson_disease" === t && xo() && pi.isMobile && ko();
                const i = bi();
                i && hi({ ...ri(i),
                    active_profile: null
                })
            }
        })
    },
    Ro = Object.freeze(Object.defineProperty({
        __proto__: null,
        profileControlSettings: To,
        profileControlSettingsMobile: Oo,
        profileSwitch: $o,
        removeProfile: Po
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    No = (e, t = !0, i) => {
        const n = F.t;
        let o = "";
        const {
            slug: a,
            label: s
        } = e, r = e => Object.fromEntries(Object.entries(e).map(([e, t]) => [e, t.filter(e => e in i && 1 === i[e])])), l = r(Oo), c = r(To), d = pi.isMobile ? l : c;
        d.hasOwnProperty(a) && ("color_blind" === a ? o += `<li data-accessibility="color_blindness"> <span class="icon"></span> <span data-i18n-key="deuteranomaly"> ${n("deuteranomaly")} </span> </li>` : d[a].map(e => {
            o += `<li data-accessibility="${e}"> <span class="icon"></span> <span data-i18n-key="${e}"> ${n(e)} </span> </li>`
        }));
        return `<div class="accessibility-control-wrapper" data-accessibility="${a}" ${"libras"===a&&void 0!==pi.active_language&&null!=pi.active_language&&!pi.active_language.includes("pt")||!t?'style="display:none"':""}><button aria-label="${s}" data-i18n-labelkey="${a}" aria-pressed="false"> <span class="aioa-icon ${["epilepsy","slow_cursor","parkinson_disease","blue_light_filter","speak_to_navigate","focus_indicator","sign_language_font","subtitle_on_video","summarize_page","focus_locator","asl","deaf"].includes(a)?"custom-icon":""}" aria-hidden="true"></span> <span class="aioa-text ${"sign_language_font"===a?"custom-text":""}" aria-hidden="true" data-i18n-key="${a}">${s}</span> </button>\n    ${(e.keyboardShortcut||e.shortDescription||e.featureDescription)&&!pi.isMobile?`<div data-accessibility-tooltip="${e.keyboardShortcut}" class="aioa-tooltip" role="button" tabindex="0" ${["focus_locator"].includes(a)?"":"aioa-focused"}  aria-label="Toggle ${n(`${a}`)} Description" data-i18n-toggle-desc-slug="${a}"></div>`:""}\n    ${e.shortDescription?`<div class="aioa-profile-description"> <button aria-label="Close ${s} Description" class="aioa-modal-close-button"></button> <span data-i18n-key="${a}-short-desc">${n(`${a}-short-desc`)} </span> <ul> ${o} </ul>  </div>`:""}\n    ${e.featureDescription?`${e.featureDescription}`:""}\n \n    </div>`
    },
    Io = e => {
        const {
            slug: t,
            label: i,
            value: n
        } = e;
        return `<div class="accessibility-control-wrapper range-control" data-accessibility="${t}"> <div class="accessibility-control-heading"> <span class="aioa-text" data-i18n-key="${t}">${i}</span> </div> <div class="accessibility-scaling-wrapper"> <button aria-label="Decrease ${i}" data-i18n-labelkey="decrease_${t}" class="accessibility-scale-decrease" ${"font_size"===t&&10===pi.font_size?"disabled":""} > <span class="aioa-decrease-icon" aria-hidden="true"></span> </button> <span class="accessibility-scale-current" aria-label="Current ${i}" data-i18n-labelkey="current_${t}">${n}%</span> <button aria-label="Increase ${i}" data-i18n-labelkey="increase_${t}" class="accessibility-scale-increase"> <span class="aioa-increase-icon" aria-hidden="true"></span> </button> </div> </div>`
    };
const Mo = (t, i) => {
    const n = F.t;
    let o = "https://www.skynettechnologies.com/sites/default/files/Skynet-Technologies-Logo-2.svg",
        a = "https://www.skynettechnologies.com/all-in-one-accessibility",
        s = "Skynet Technologies";
    const r = () => {
        if (o) {
            if (!t) return;
            t.innerHTML = `<a href=${a} target="_blank" rel="noopener" style="display:block !important" class="aioa-footer-link" data-i18n-alt-aioa="all_in_one_accessibility_page">\n            <div class="accessibility-footer-wrapper">\n                <div class="accessibility-footer-left" style="display:block !important">\n                <span class="accessibility-credit-text" style="display:block !important">\n                ${pi.is_custome_branding?"":`<img width="209" height="37" alt="${n("web_accessibility_solution")}" data-i18n-alt="web_accessibility_solution" src="https://www.skynettechnologies.com/sites/default/files/skynettechnologies.svg" loading="lazy" />`}\n                </span>\n                </div>\n                <div class="accessibility-footer-right" style="display:block !important">\n                <span class="accessibility-credit-logo" style="display:block !important"><img alt="${s}" src="${o}" loading="lazy" style="display:block !important" /></span>\n                </div>\n            </div>\n            </a>`, 1 === i.report_problem && (t.innerHTML += `\n                ${pi.is_custome_branding?"":`<div class="accessibility-footer-report-link" style="display:block !important">\n                <a href="${pi.report_problem_link?pi.report_problem_link:"https://www.skynettechnologies.com/report-accessibility-problem"}" target="_blank" data-i18n-key="report_problem">${n("report_problem")}</a>\n                </div>`}\n                `)
        }
    };
    if (pi.is_custome_branding) {
        const t = () => {
            pi.plans && (o = "noimage" !== pi.plans.brand_logo ? pi.plans.brand_logo : "", a = "nourl" !== pi.plans.brand_website_url ? pi.plans.brand_website_url : "", s = "noname" !== pi.plans.brand_name ? pi.plans.brand_name : "", r())
        };
        if (pi.no_data_found) t();
        else if (pi.plans) t();
        else if (pi.purchaseplan || null !== pi.custom_plans) {
            if (null !== pi.custom_plans) {
                const e = bi();
                e && hi({ ...e,
                    plans: e.custom_plans,
                    purchaseplan: !0
                })
            }
            t()
        } else {
            e(() =>
                import ("./getCustomBrandingApi.js"), []).then(e => e.default).then(e => {
                const i = e ? .data,
                    n = bi();
                n && hi({ ...n,
                    plans: i,
                    purchaseplan: !0
                }), setTimeout(() => {
                    t()
                }, 200)
            })
        }
    } else pi.is_white_label ? (o = "", a = "", s = "", r()) : r()
};
let jo = null;
(async () => {
    try {
        const e = "closeAudio",
            t = localStorage.getItem(e);
        if (t) {
            const e = atob(t),
                i = new Array(e.length);
            for (let t = 0; t < e.length; t++) i[t] = e.charCodeAt(t);
            const n = new Uint8Array(i),
                o = new Blob([n], {
                    type: "audio/mpeg"
                });
            return void(jo = URL.createObjectURL(o))
        }
        const i = await fetch("https://www.skynettechnologies.com/accessibility/sounds/close.mp3"),
            n = await i.blob(),
            o = await
        function(e) {
            return new Promise(t => {
                const i = new FileReader;
                i.onloadend = () => t(i.result), i.readAsDataURL(e)
            })
        }(n);
        return localStorage.setItem(e, o.split(",")[1]), void(jo = URL.createObjectURL(n))
    } catch (e) {}
})();
const Do = async () => {
        const e = document.querySelector("#aioa_accessibility_settings"),
            t = document.querySelector("#accessibility_settings_toggle"),
            i = document.querySelector("html"),
            n = document.querySelector("body");
        if (e && e.setAttribute("aria-expanded", "false"), t && t.setAttribute("aria-pressed", "false"), i && i.classList.remove("accessibility_modal_opened"), jo && pi && !pi.is_sound_disabled) {
            new Audio(jo).play()
        }
        if (pi.isMobile) {
            n && (n.style.removeProperty("overflow"), n.style.removeProperty("position"), n.style.removeProperty("top"), n.style.removeProperty("right"), n.style.removeProperty("left"), n.style.removeProperty("width"));
            const e = bi();
            window.scrollTo(0, e.scrollPosition)
        }
        const o = document.querySelector('.select-button[role="combobox"][aria-expanded="true"]');
        if (o) {
            window.dispatchEvent(new CustomEvent("dropdown-updated", {
                detail: {
                    slug: o
                }
            }));
            const e = document.querySelector(`#${o.getAttribute("aria-controls")?.split("-")[0]}-none`);
            e ? .click()
        }
        const a = document.getElementById("aioa-ai-content-aioa");
        pi.custom_plans && pi.custom_plans["ai-assistance"] && a && a.shadowRoot && window.dispatchEvent(new CustomEvent("aioa-widget-off-mic")), t && t.focus();
        const s = t ? .getAttribute("aria-label");
        s && si("Widget Close", s);
        const r = bi();
        r && Object.keys(r).length > 0 && r && hi({ ...ri(r),
            isWhiteLebalCheck: !1
        })
    },
    Fo = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Do
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    zo = () => {
        const e = document.querySelectorAll(".accessibility-single-language:not(.aioa-hide)"),
            t = document.querySelector(".accessibility-no-language-found");
        e.length ? t && t.classList.remove("aioa-show") : t && t.classList.add("aioa-show")
    };
const Bo = function(e, t) {
        let i;
        return (...n) => {
            clearTimeout(i), i = setTimeout(() => e(...n), t)
        }
    }(() => {
        const e = document.querySelector("#accessibility-language-search"),
            t = document.querySelectorAll(".accessibility-single-language");
        if (e) {
            e.addEventListener("keydown", t => {
                t.stopImmediatePropagation(), " " === t.key && 0 === e.selectionStart && t.preventDefault()
            });
            const i = e.value;
            i ? (t.length && t.forEach(e => {
                const t = e.getAttribute("data-native"),
                    n = e.getAttribute("data-name");
                n && !t ? n.replace(/\s+/g, "").toLowerCase().includes(i.replace(/\s+/g, "").toLowerCase()) ? e.classList.remove("aioa-hide") : e.classList.add("aioa-hide") : n && t && (n.replace(/\s+/g, "").toLowerCase().includes(i.replace(/\s+/g, "").toLowerCase()) || t.replace(/\s+/g, "").toLowerCase().includes(i.replace(/\s+/g, "").toLowerCase()) ? e.classList.remove("aioa-hide") : e.classList.add("aioa-hide"))
            }), zo()) : (t.length && t.forEach(e => {
                e.classList.remove("aioa-hide")
            }), zo())
        }
    }, 500),
    Uo = e => {
        const t = F.t;
        let i = pi.features.languages;
        document.addEventListener("keydown", function(t) {
            "Escape" !== t.key && "Esc" !== t.key || "block" !== window.getComputedStyle(e).display || a ? .click()
        });
        e.innerHTML = `<div class="aioa-modal-dialog">\n                <button data-i18n-labelkey="close_accessibility_language" aria-label="${t("close_accessibility_language")}" class="aioa-modal-close-button" id="aioa-language-close-button"></button>\n                <div class="aioa-modal-content">\n                    <div class="aioa-modal-header">\n                        <div role="heading" aria-level="2" class="h2" id="languageModalLabel" data-i18n-key="choose_interface_language" aioa-magnifier="${!!pi.text_magnifier}">${t("choose_interface_language")}</div>\n                        <div class="accessibility-language-search-wrapper" aioa-magnifier="${!!pi.text_magnifier}">\n                            <input type="text" aria-label="${t("search_language")}" id="accessibility-language-search" data-i18n-placeholder="search_language" placeholder="${t("search_language")}" style="all: revert;"/>\n                        </div>\n                    </div>\n                    <div class="accessibility-languages-list" aria-live="polite">\n                        ${i.length?i.map(e=>{let t=e.slug;return t.indexOf("-")>-1&&(t=t.slice(-2)),`<div class="accessibility-single-language" tabindex="0" data-aioa-language="${e.slug}" data-native="${e.native_name?e.native_name:""}" data-name="${e.name}" lang="${e.slug}" role="button">\n                                        <span class="accessibility-language-slug" aioa-highlight-hover="${!!pi.highlight_hover}" aioa-read-skip="true">${t}</span>\n                                         <span class="accessibility-language-text" aioa-magnifier="${!!pi.text_magnifier}">${e.native_name?e.native_name:e.name}</span>\n\n                                    </div>`}).join(""):""}\n\n                        <div class="accessibility-no-language-found" data-i18n-key="no_language_found"> ${t("no_language_found")} </div>\n                    </div>\n                </div>\n            </div> `;
        const n = document.querySelector("#accessibility-language-search");
        n ? .addEventListener("keyup", Bo);
        const o = document.querySelector("#accessibility-language-search");
        o ? .addEventListener("keydown", t => {
            "Escape" !== t.key && "Esc" !== t.key || "block" !== window.getComputedStyle(e).display || (t.preventDefault(), t.stopPropagation(), a ? .click())
        });
        const a = document.querySelector("#aioa-language-close-button");
        a ? .addEventListener("click", e => {
            n && (n.value = "", i = pi.features.languages), Vo(e)
        });
        const s = document.querySelector(".accessibility-languages-list"),
            r = e => {
                if ("click" === e.type && 0 === e.detail) return;
                const t = e.target,
                    i = t.parentElement;
                let n = "";
                t && t.matches(".accessibility-single-language") ? n = t.getAttribute("data-aioa-language") : i && i.classList.contains("accessibility-single-language") && (n = i.getAttribute("data-aioa-language")), n && ((e => {
                        xi(), si("Set Language", e), F.changeLanguage(e)
                    })(n), Vo(void 0), setTimeout(() => {
                        const e = document.querySelector(".accessibility-language-button");
                        e ? .focus()
                    }, 100)),
                    function() {
                        const e = new CustomEvent("LanguageUpdated");
                        window.dispatchEvent(e)
                    }()
            };
        s ? .addEventListener("click", r), s ? .addEventListener("keydown", function(e) {
            "Enter" !== e.key && " " !== e.key || (e.preventDefault(), r(e))
        }), s ? .addEventListener("wheel", function(e) {
            e.stopPropagation()
        }, {
            passive: !1
        })
    };
let Ho = !0;
const Vo = async t => {
    var i;
    null == t ? i = document.querySelector("#aioa_language_button") : (t.preventDefault(), i = t.currentTarget);
    const n = document.querySelector("#accessibility_language_modal"),
        o = document.querySelectorAll("body > *:not(.aioa-widget-wrapper), .aioa-widget-wrapper > *:not(#accessibility_language_modal):not(.simple-keyboard):not(.aioa-notification-group)"),
        a = i.getAttribute("aria-label");
    xi();
    const s = () => {
        if (n)
            if ("block" === window.getComputedStyle(n).display) {
                n.style.display = "none", n.removeAttribute("aria-modal"), n.removeAttribute("role"), n.setAttribute("aria-hidden", "true"), n.setAttribute("aria-pressed", "false"), Ho && n.setAttribute("aria-labelledby", "languageModalLabel"), pi.text_magnifier && n.removeAttribute("aioa-magnifier"), document.querySelector("#accessibility-language-search").value = "";
                const e = document.documentElement;
                e && e.classList.remove("language-opened"), a && si("Close Language Modal", a), o.forEach(e => {
                    e.inert = !1
                }), setTimeout(() => {
                    const e = document.querySelector(".accessibility-language-button");
                    e ? .focus()
                }, 100)
            } else {
                const e = document.querySelector("#aioa-language-close-button");
                i && i.setAttribute("aria-pressed", "true"), n.style.display = "block", n.setAttribute("aria-modal", "true"), n.setAttribute("role", "dialog"), n.removeAttribute("aria-hidden"), setTimeout(() => {
                    e && e.focus()
                }, 200), Pi(n), pi.text_magnifier && n.setAttribute("aioa-magnifier", "true");
                const t = document.documentElement;
                t && t.classList.add("language-opened"), a && si("Open Language Modal", a), o.forEach(e => {
                    e.inert = !0
                })
            }
        Ai()
    };
    if (n)
        if (localStorage.setItem("aioReaderIndex", "false"), Ho) {
            (async () => {
                Uo(n)
            })().then(() => {
                setTimeout(() => {
                    s(), Ho = !1;
                    const e = document.querySelector('div[data-accessibility="screen_reader"] button');
                    if (e) {
                        "true" == e.getAttribute("aria-pressed") && (e.click(), setTimeout(() => {
                            window.dispatchEvent(new CustomEvent("clean-screen-reader", {
                                detail: {
                                    slug: "screen_reader"
                                }
                            })), localStorage.setItem("aioReaderIndex", "true"), e.click()
                        }, 200))
                    }
                }, 500)
            })
        } else {
            const t = document.querySelector("#accessibility-language-search");
            if (t && (t.value = "", Bo()), pi.virtual_keyboard) {
                const {
                    resetKeyboardInput: t
                } = await e(() =>
                    import ("./virtualKeyboard.js"), []);
                t()
            }
            s()
        }
};
let Wo = !0,
    Ko = !0;
const Jo = async t => {
    const i = document.querySelector("#accessibility_statement_modal"),
        n = document.querySelector("#aioa_statement_button");
    n && n.setAttribute("aria-pressed", "true");
    const o = document.querySelectorAll("body > *:not(.aioa-widget-wrapper), .aioa-widget-wrapper > *:not(#accessibility_statement_modal):not(.simple-keyboard):not(.aioa-notification-group)");
    let a = "";
    i && (a = i.getAttribute("lang"));
    const s = ai.get(`https://www.skynettechnologies.com/accessibility/statement/${a||"en"}.html`),
        r = t.currentTarget.getAttribute("aria-label");
    Ko && xi();
    const l = () => {
        if (i)
            if ("block" === window.getComputedStyle(i).display) {
                i.style.display = "none", i.removeAttribute("aria-modal"), i.removeAttribute("role"), Ko = !0, i.setAttribute("aria-hidden", "true"), r && si("Close Accessibility Statement Modal", r), setTimeout(() => {
                    const e = document.querySelector("#aioa_statement_button");
                    e ? .focus()
                }, 100), pi.text_magnifier && i.removeAttribute("aioa-magnifier");
                const e = document.documentElement;
                e && e.classList.remove("statement-opened"), o.forEach(e => {
                    e.inert = !1
                })
            } else {
                const e = document.querySelector("#aioa-statement-close-button");
                setTimeout(() => {
                    i.style.display = "block"
                }, 200), i.setAttribute("aria-modal", "true"), i.setAttribute("role", "dialog"), i.removeAttribute("aria-hidden"), Ko = !1, setTimeout(() => {
                    e && e.focus(), Pi(i)
                }, 250), r && si("Open Accessibility Statement Modal", r), pi.text_magnifier && i.setAttribute("aioa-magnifier", "true");
                const t = document.documentElement;
                t && t.classList.add("statement-opened"), o.forEach(e => {
                    e.inert = !0
                }), i ? .addEventListener("wheel", function(e) {
                    e.stopPropagation()
                }, {
                    passive: !1
                }), s.then(e => {
                    const t = document.querySelector("#accessibility_statement_modal .aioa-modal-content");
                    t && (t.innerHTML = e.data);
                    const i = t && t.querySelectorAll("span, a, b, strong, i, em, button, label, div, p");
                    i && i.forEach(e => {
                        e.getAttribute("aioa-magnifier") || e.setAttribute("aioa-magnifier", "true")
                    });
                    const n = document.querySelector('div[data-accessibility="screen_reader"] button');
                    if (n) {
                        if ("true" == n.getAttribute("aria-pressed")) {
                            var o = document.querySelector("#accessibility_statement_modal .aioa-modal-content div:first-child");
                            o && 0 == o.hasAttribute("data-sk-reader-index") && (n.click(), setTimeout(() => {
                                window.dispatchEvent(new CustomEvent("clean-screen-reader", {
                                    detail: {
                                        slug: "screen_reader"
                                    }
                                })), localStorage.setItem("aioReaderIndex", "true"), n.click()
                            }, 200))
                        }
                    }
                })
            }
        Ai()
    };
    if (i)
        if (localStorage.setItem("aioReaderIndex", "false"), Wo) {
            (async () => {
                const {
                    default: t
                } = await e(() =>
                    import ("./statementPopup.js"), []);
                t(i)
            })().then(() => {
                setTimeout(() => {
                    l(), Wo = !1;
                    const e = document.querySelector('div[data-accessibility="screen_reader"] button');
                    if (e) {
                        "true" == e.getAttribute("aria-pressed") && (e.click(), setTimeout(() => {
                            window.dispatchEvent(new CustomEvent("clean-screen-reader", {
                                detail: {
                                    slug: "screen_reader"
                                }
                            })), localStorage.setItem("aioReaderIndex", "true"), e.click()
                        }, 200))
                    }
                }, 500)
            })
        } else l()
};
let Go = null;
const Xo = async () => {
        (() => {
            const e = document.getElementById("hide-desc");
            if (!e) return;
            const t = F.t;
            e.innerHTML = "";
            const i = bi(),
                n = ["font_size", "letter_spacing", "content_scaling", "line_height"],
                o = Object.keys(To).filter(e => {
                    if (null !== i.active_profile) return (!i.active_profile || e === i.active_profile) && To[e].every(e => n.includes(e) ? 100 !== i[e] : i["talk_n_type" === e ? "talk_type" : e])
                }),
                a = li.filter(e => n.includes(e) ? 100 !== i[e] : i[e]).map(e => t("talk_type" === e ? "talk_n_type" : e)),
                s = o.map(e => t(e));
            e.innerHTML = `<ul style="all: revert;">\n    ${s.map(e=>`<li style="all: revert;"><strong style="color: revert;">${e}</strong></li>`).join("")}\n    ${a.map(e=>`<li style="all: revert;"><strong style="color: revert;">${e}</strong></li>`).join("")}\n  </ul>`
        })();
        const e = document.documentElement;
        e && e.classList.add("hide-interface-error-opened"), await (() => {
            if (Go) return;
            const e = F.t,
                t = document.querySelector("#accessibility_hide_interface_error_modal");
            if (t) {
                Go = document.createElement("div"), Go.id = "hide-interface-error-modal", Go.className = "hide-interface-error-modal", Go.setAttribute("role", "dialog"), Go.setAttribute("aria-modal", "true"), Go.setAttribute("aria-labelledby", "hide-title"), Go.setAttribute("aria-describedby", "hide-desc");
                const i = bi(),
                    n = ["font_size", "letter_spacing", "content_scaling", "line_height"],
                    o = li.filter(e => n.includes(e) ? 100 !== i[e] : i[e]),
                    a = Object.keys(To).filter(e => {
                        if (null !== i.active_profile) return (!i.active_profile || e === i.active_profile) && To[e].every(e => n.includes(e) ? 100 !== i[e] : i["talk_n_type" === e ? "talk_type" : e])
                    }),
                    s = o.map(t => e("talk_type" === t ? "talk_n_type" : t)),
                    r = a.map(t => e(t));
                Go.innerHTML = `\n      <div class="hide-dialog aioa-hide-interface-error">\n          <button data-i18n-labelkey="close_accessibility_hide_interface_popup" class="aioa-modal-close-button accessibility-hide-cancel-button" id="aioa-hide-interface-error-button"></button>\n          <div role="heading" aria-level="2" class="h2 hide-title" data-i18n-key="Warning">${e("Warning")}</div>\n          <div class="hide-text" data-i18n-key="close_feature">\n          ${e("close_feature")}:\n          </div>\n          <div id="hide-desc">\n            <ul style="all: revert;">\n              ${r.map(e=>`<li style="all: revert;"><strong style="color: revert;">${e}</strong></li>`).join("")}\n              ${s.map(e=>`<li style="all: revert;"><strong style="color: revert;">${e}</strong></li>`).join("")}\n            </ul>\n          </div>\n      </div>\n    `, t.appendChild(Go), Pi(t), setTimeout(() => {
                    t.style.display = "block"
                }, 200), localStorage.setItem("aioReaderIndex", "false")
            }
        })();
        const t = document.querySelector("#aioa-hide-interface-error-button");
        if (t) {
            t ? .addEventListener("click", Yo), setTimeout(() => {
                const e = bi();
                t && e.screen_reader && t.focus()
            }, 500);
            const e = document.querySelector('div[data-accessibility="screen_reader"] button');
            if (e) {
                "true" == e.getAttribute("aria-pressed") && (e.click(), setTimeout(() => {
                    window.dispatchEvent(new CustomEvent("clean-screen-reader", {
                        detail: {
                            slug: "screen_reader"
                        }
                    })), localStorage.setItem("aioReaderIndex", "true"), e.click()
                }, 300))
            }
        }
        const i = document.querySelector("#accessibility_hide_interface_error_modal");
        i && (i.style.display = "block", setTimeout(() => {
            const e = document.querySelector("#aioa-hide-interface-error-button");
            e ? .focus()
        }, 50))
    },
    Yo = () => {
        const e = document.querySelector("#accessibility_hide_interface_error_modal");
        if (e) {
            e.style.display = "none";
            const t = document.documentElement;
            t && t.classList.remove("hide-interface-error-opened"), setTimeout(() => {
                const e = document.querySelector("#aioa_hide_interface_button");
                e ? .focus()
            }, 100)
        }
    };
document.addEventListener("keydown", e => {
    Go && !Go.hidden && "Escape" === e.key && Yo()
}), document.addEventListener("click", e => {
    const t = e.target;
    ("hide-cancel" === t.id || t.classList.contains("hide-overlay")) && Yo()
});
let Qo = !0;
const Zo = async e => {
        const t = document.querySelector("#accessibility_hide_interface_modal"),
            i = document.querySelector("#aioa_hide_interface_button");
        i && i.setAttribute("aria-pressed", "true");
        const n = document.querySelectorAll("body > *:not(.aioa-widget-wrapper), .aioa-widget-wrapper > *:not(#accessibility_hide_interface_modal):not(.simple-keyboard):not(.aioa-notification-group)"),
            o = e.currentTarget.getAttribute("aria-label");
        xi();
        const a = () => {
            if (t)
                if ("block" === window.getComputedStyle(t).display) {
                    t.style.display = "none", t.removeAttribute("aria-modal"), t.removeAttribute("role"), t.setAttribute("aria-hidden", "true"), o && si("Close Hide Widget Modal", o), Qo && t.setAttribute("aria-labelledby", "hideModalLabel"), pi.text_magnifier && t.removeAttribute("aioa-magnifier");
                    const e = document.documentElement;
                    e && e.classList.remove("hide-interface-opened"), n.forEach(e => {
                        e.inert = !1
                    }), setTimeout(() => {
                        const e = document.querySelector("#aioa_hide_interface_button");
                        e ? .focus()
                    }, 100)
                } else {
                    const e = document.querySelector("#aioa-hide-interface-close-button");
                    t.style.display = "block", t.setAttribute("aria-modal", "true"), t.setAttribute("role", "dialog"), t.removeAttribute("aria-hidden"), pi.text_magnifier && t.setAttribute("aioa-magnifier", "true");
                    const i = document.documentElement;
                    i && i.classList.add("hide-interface-opened"), e && e.focus(), Pi(t), o && si("Open Hide Widget Modal", o), n.forEach(e => {
                        e.inert = !0
                    }), window.dispatchEvent(new CustomEvent("hide-interface-changed"))
                }
            Ai()
        };
        if (t) {
            localStorage.setItem("aioReaderIndex", "false");
            const e = bi(),
                i = ["font_size", "letter_spacing", "content_scaling", "line_height"];
            if (li.some(t => i.includes(t) ? 100 !== e[t] : e[t]) && "block" !== window.getComputedStyle(t).display) return Ai(), void Xo();
            window.addEventListener("hide-interface-changed", e => {
                setTimeout(() => {
                    const e = bi(),
                        t = ["font_size", "letter_spacing", "content_scaling", "line_height"],
                        i = li.some(i => t.includes(i) ? 100 !== e[i] : e[i]);
                    let n = document.querySelector("#aioa-hide-interface-accept-button");
                    n.disabled = !!i
                }, 2e3)
            }), Qo ? ((e => {
                const t = F.t;
                e.innerHTML = `<div class="aioa-modal-dialog">\n                <button aria-label="Close Accessibility Hide Interface Popup" data-i18n-labelkey="close_accessibility_hide_interface_popup" class="aioa-modal-close-button" id="aioa-hide-interface-close-button"></button>\n                <div class="aioa-modal-content">\n                    <div role="heading" aria-level="2" class="h2" id="hideModalLabel" data-i18n-key="hide_accessibility_interface" aioa-magnifier="${!!pi.text_magnifier}">${t("hide_accessibility_interface")}</div>\n                    <div id="hideOptions" style="padding:10px 0px;">\n                    <p><strong data-i18n-labelkey="${t("choose_to_hide_widget")}" data-i18n-key="choose_to_hide_widget">${t("choose_to_hide_widget")}</strong></p>\n                    <div class="aioa-modal-radio">\n                        <input type="radio" id="hide-session" name="hideTime" value="session" checked style="width: auto;">\n                        <span for="hide-session" data-i18n-labelkey="${t("hide_for_this")}" data-i18n-key="hide_for_this">\n                            ${t("hide_for_this")}\n                        </span>\n                        ${window.location.hostname}\n                    </div>\n\n                    <div class="aioa-modal-radio">\n                        <input type="radio" id="hide-hour" name="hideTime" value="24h" style="width: auto;">\n                        <span for="hide-hour" data-i18n-labelkey="${t("hide_for_hours")}" data-i18n-key="hide_for_hours">\n                            ${t("hide_for_hours")}\n                        </span>\n                    </div>\n\n                    <div class="aioa-modal-radio">\n                        <input type="radio" id="hide-week" name="hideTime" value="week" style="width: auto;">\n                        <span for="hide-week" data-i18n-labelkey="${t("hide_for_week")}" data-i18n-key="hide_for_week">\n                            ${t("hide_for_week")}\n                        </span>\n                    </div>\n\n                    <div class="aioa-modal-radio">\n                        <input type="radio" id="hide-month" name="hideTime" value="month" style="width: auto;">\n                        <span for="hide-month" data-i18n-labelkey="${t("hide_for_month")}" data-i18n-key="hide_for_month">\n                           ${t("hide_for_month")}\n                        </span>\n                    </div>\n\n                    </div>\n                    <p class="accessibility-hide-text" data-i18n-key="hide-content" aioa-magnifier="${!!pi.text_magnifier}">\n                    ${t("hide-content")}\n                    </p>\n                    <div class="accessibility-hide-buttons">\n                        <span class="tooltip-wrapper" data-tooltip="${t("some_feature_started")}">\n                            <button data-i18n-key="accept" class="accessibility-hide-accept-button" id="aioa-hide-interface-accept-button" aioa-magnifier="${!!pi.text_magnifier}">${t("accept")}</button>\n                        </span>\n                        <button data-i18n-key="cancel" class="accessibility-hide-cancel-button" id="aioa-hide-interface-cancel-button" aioa-magnifier="${!!pi.text_magnifier}">${t("cancel")}</button>\n                    </div>\n                </div>\n            </div>\n\t\t\t\n        `;
                const i = document.querySelector("#aioa-hide-interface-close-button");
                i ? .addEventListener("click", Zo), document.addEventListener("keydown", function(t) {
                    "Escape" !== t.key && "Esc" !== t.key || "block" !== window.getComputedStyle(e).display || i ? .click()
                }), document.querySelectorAll(".aioa-modal-radio span").forEach(e => {
                    e.addEventListener("click", () => {
                        const t = e.previousElementSibling;
                        t && (t.checked = !0)
                    })
                });
                const n = document.querySelector("#aioa-hide-interface-cancel-button");
                n ? .addEventListener("click", Zo);
                const o = document.querySelector("#aioa-hide-interface-accept-button");
                o ? .addEventListener("click", async e => {
                    const t = e.currentTarget.textContent;
                    t && t.trim() && si("Accept Hide Widget", t), Zo(e);
                    const i = document.querySelector('input[name="hideTime"]:checked');
                    if (i) {
                        switch (i.value) {
                            case "session":
                                const e = bi();
                                e && hi({ ...ri(e),
                                    hideWidget: !0
                                });
                                break;
                            case "24h":
                                localStorage.setItem("widgetHideUntil", (Date.now() + 864e5).toString());
                                break;
                            case "week":
                                localStorage.setItem("widgetHideUntil", (Date.now() + 6048e5).toString());
                                break;
                            case "month":
                                localStorage.setItem("widgetHideUntil", (Date.now() + 2592e6).toString())
                        }
                        setTimeout(() => {
                            window.location.reload()
                        }, 200)
                    } else alert("Please choose an option.")
                })
            })(t), setTimeout(() => {
                a(), Qo = !1;
                const e = document.querySelector('div[data-accessibility="screen_reader"] button');
                if (e) {
                    "true" == e.getAttribute("aria-pressed") && (e.click(), setTimeout(() => {
                        window.dispatchEvent(new CustomEvent("clean-screen-reader", {
                            detail: {
                                slug: "screen_reader"
                            }
                        })), localStorage.setItem("aioReaderIndex", "true"), e.click()
                    }, 200))
                }
            }, 500)) : a()
        }
    },
    ea = async e => {
        const t = e.currentTarget.parentElement,
            i = t ? .textContent,
            n = document.querySelector("#aioa_accessibility_settings");
        if (n)
            if (n.classList.contains("compressed")) {
                n.classList.remove("compressed");
                const e = bi();
                e && hi({ ...ri(e),
                    user_oversize_widget: !0
                }), i && i.trim() && si("Oversize Widget", i)
            } else {
                n.classList.add("compressed"), i && i.trim() && si("Normal size Widget", i);
                const e = bi();
                e && hi({ ...ri(e),
                    user_oversize_widget: !1
                })
            }
        Ni()
    },
    ta = new WeakMap,
    ia = e => {
        if ("true" === e.getAttribute("aria-expanded")) return;
        e.setAttribute("aria-expanded", "true"), e.parentElement ? .classList.add("active");
        const t = e.getAttribute("aria-label");
        "accessibility_profile_toggle_button" === e.id ? t && si("Show Accessibility Profiles", t) : "positions_panel_toggle_button" === e.id && t && si("Show Move Widget Options", t);
        const i = document.getElementById(e.getAttribute("aria-controls") || "");
        if (!i) return;
        aa(e);
        i.querySelectorAll("label").forEach(t => {
            const i = ta.get(t);
            i && t.removeEventListener("keydown", i);
            const n = t => {
                ((e, t) => {
                    const i = e.currentTarget,
                        n = i.closest("ul");
                    if (!n) return;
                    const o = Array.from(n.querySelectorAll("label"));
                    let a = o.indexOf(i);
                    switch (e.key) {
                        case "ArrowDown":
                            e.preventDefault(), a = (a + 1) % o.length, o[a].focus();
                            break;
                        case "ArrowUp":
                            e.preventDefault(), a = (a - 1 + o.length) % o.length, o[a].focus();
                            break;
                        case "Tab":
                            na(t);
                            break;
                        case "Enter":
                        case " ":
                            e.preventDefault(), i.click(), na(t), t.focus()
                    }
                })(t, e)
            };
            ta.set(t, n), t.addEventListener("keydown", n)
        })
    },
    na = e => {
        if ("false" === e.getAttribute("aria-expanded")) return;
        e.setAttribute("aria-expanded", "false"), e.parentElement ? .classList.remove("active");
        const t = e.getAttribute("aria-label");
        "accessibility_profile_toggle_button" === e.id ? t && si("Hide Accessibility Profiles", t) : "positions_panel_toggle_button" === e.id && t && si("Hide Move Widget Options", t)
    },
    oa = (e, t) => {
        const i = document.getElementById(e.getAttribute("aria-controls") || "");
        if (!i) return;
        const n = Array.from(i.querySelectorAll("li"));
        if (!n.length) return;
        let o = n.findIndex(t => {
            const i = t.querySelector("input[type='radio']");
            return i ? .id === e.getAttribute("aria-activedescendant")
        }); - 1 === o ? o = 0 : (o += t, o < 0 && (o = n.length - 1), o >= n.length && (o = 0)), n.forEach(e => e.classList.remove("active"));
        const a = n[o];
        a.classList.add("active");
        const s = a.querySelector("input[type='radio']"),
            r = a.querySelector("label");
        s && r && (e.setAttribute("aria-activedescendant", s.id), r.focus({
            preventScroll: !1
        }))
    },
    aa = e => {
        const t = document.getElementById(e.getAttribute("aria-controls") || "");
        if (!t) return;
        const i = Array.from(t.querySelectorAll("li"));
        if (!i.length) return;
        let n = i.find(e => {
            const t = e.querySelector("input[type='radio']");
            return t ? .checked
        });
        n || (n = i[0]), sa(e, n)
    },
    sa = (e, t) => {
        const i = document.getElementById(e.getAttribute("aria-controls") || "");
        if (!i) return;
        Array.from(i.querySelectorAll("li")).forEach(e => {
            e.classList.remove("active")
        }), t.classList.add("active");
        const n = t.querySelector("input[type='radio']"),
            o = t.querySelector("label");
        n && (e.setAttribute("aria-activedescendant", n.id), o ? .focus({
            preventScroll: !1
        }))
    },
    ra = e => {
        const t = e.currentTarget,
            i = "true" === t.getAttribute("aria-expanded");
        switch (e.key) {
            case "ArrowDown":
                e.preventDefault(), i ? oa(t, 1) : ia(t);
                break;
            case "ArrowUp":
                e.preventDefault(), i && oa(t, -1);
                break;
            case "Enter":
            case " ":
                e.preventDefault(), i ? (e => {
                    const t = e.getAttribute("aria-activedescendant");
                    if (!t) return;
                    const i = document.getElementById(t);
                    i ? .click(), na(e)
                })(t) : ia(t);
                break;
            case "Tab":
                na(t)
        }
    },
    la = e => {
        const t = e.currentTarget,
            i = t.id,
            n = t.getAttribute("aria-label");
        document.querySelectorAll(".aioa-custom-select button").forEach(e => {
            e !== t && "true" === e.getAttribute("aria-expanded") && (e.setAttribute("aria-expanded", "false"), e.parentElement ? .classList.remove("active"))
        }), "true" === t.getAttribute("aria-expanded") ? (t.setAttribute("aria-expanded", "false"), t.parentElement ? .classList.remove("active"), "accessibility_profile_toggle_button" === i ? n && si("Hide Accessibility Profiles", n) : "positions_panel_toggle_button" === i && n && si("Hide Move Widget Options", n)) : (t.setAttribute("aria-expanded", "true"), t.parentElement ? .classList.add("active"), "accessibility_profile_toggle_button" === i ? n && si("Show Accessibility Profiles", n) : "positions_panel_toggle_button" === i && n && si("Show Move Widget Options", n))
    };
window.addEventListener("dropdown-updated", e => {
    const t = e.detail.slug;
    na(t)
});
const ca = async t => {
    xi();
    const i = t.currentTarget;
    (async () => {
        const {
            default: t
        } = await e(() => Promise.resolve().then(() => Cn), void 0);
        i && t(i)
    })().then(() => {
        Ai()
    })
};
let da = !0;
const ua = async () => {
        const t = document.querySelector("#accessibility_dictionary_modal"),
            i = document.querySelectorAll("body > *:not(.aioa-widget-wrapper), .aioa-widget-wrapper > *:not(#accessibility_dictionary_modal):not(.simple-keyboard):not(.aioa-notification-group)");
        xi();
        const n = () => {
            if (t) {
                if ("block" === window.getComputedStyle(t).display) {
                    t.style.display = "none", t.removeAttribute("aria-modal"), t.removeAttribute("role"), t.setAttribute("aria-hidden", "true"), setTimeout(() => {
                        const e = document.querySelector('[data-accessibility="dictionary"] button');
                        e ? .focus()
                    }, 100);
                    const e = document.documentElement;
                    e && e.classList.remove("dictionary-opened"), da && t.setAttribute("aria-labelledby", "dictionaryModalLabel"), i.forEach(e => {
                        e.inert = !1
                    });
                    const n = bi();
                    n.dictionarySearch && n && hi({ ...ri(n),
                        dictionarySearch: !1
                    })
                } else {
                    document.querySelector("#aioa-dictionary-close-button"), setTimeout(() => {
                        t.style.display = "block", setTimeout(() => {
                            const e = document.querySelector("#accessibility_dictionary_modal"),
                                t = e ? .querySelector("#aioa-dictionary-close-button");
                            t && t.focus()
                        }, 50)
                    }, 250), t.setAttribute("aria-modal", "true"), t.setAttribute("role", "dialog"), t.removeAttribute("aria-hidden"), Pi(t);
                    const e = document.documentElement;
                    e && e.classList.add("dictionary-opened"), i.forEach(e => {
                        e.inert = !0
                    }), t ? .addEventListener("wheel", function(e) {
                        e.stopPropagation()
                    }, {
                        passive: !1
                    })
                }
                Ai()
            }
        };
        if (t)
            if (da)(async () => {
                const {
                    default: i
                } = await e(() =>
                    import ("./dictionaryPopup.js"), []);
                t && i(t)
            })(), setTimeout(() => {
                n(), da = !1;
                const e = document.querySelector('div[data-accessibility="screen_reader"] button');
                if (e) {
                    "true" == e.getAttribute("aria-pressed") && (e.click(), setTimeout(() => {
                        localStorage.setItem("aioReaderIndex", "true"), e.click()
                    }, 200))
                }
            }, 500);
            else {
                const t = document.querySelector("#aioa_dictionary_search");
                if (t && t.value) {
                    t.value = "";
                    const e = document.querySelector("#aioa_dictionary_search_results");
                    e && (e.innerHTML = "")
                }
                if (pi.virtual_keyboard) {
                    const {
                        resetKeyboardInput: t
                    } = await e(() =>
                        import ("./virtualKeyboard.js"), []);
                    t()
                }
                n()
            }
    },
    pa = t => {
        xi();
        let i = t.currentTarget;
        const n = i.getAttribute("aria-label");
        let o = !JSON.parse(i.getAttribute("aria-pressed").toLowerCase());
        n && si(n, o ? "Enable" : "Disable", 1), i.setAttribute("aria-pressed", o.toString());
        if (document.documentElement.classList.contains("accessibility_modal_opened")) {
            document.querySelector("#accessibility-modal-close-button").click()
        }
        const a = bi();
        a && hi({ ...ri(a),
            virtual_keyboard: o
        });
        (async () => {
            const {
                virtualKeyboard: t,
                changeKeyboardLang: i
            } = await e(() =>
                import ("./virtualKeyboard.js"), []);
            t(), i()
        })()
    },
    ga = t => {
        const i = t.currentTarget;
        xi();
        (async () => {
            const {
                readingMask: t
            } = await e(() => Promise.resolve().then(() => cn), void 0);
            i && t(i)
        })().then(() => {
            Ai()
        })
    };
let ma = !1,
    fa = 0,
    ha = 0,
    ya = 0,
    ba = 0,
    _a = !1,
    va = null;

function wa(e) {
    const t = document.body.classList.contains("aioa-read-mode");
    let i = e.clientX,
        n = e.clientY + 20;
    if (!t) {
        const t = (() => {
            const e = document.createElement("div");
            e.style.position = "absolute", e.style.top = "0", e.style.left = "0", e.style.width = "100px", e.style.height = "100px", e.style.visibility = "hidden", document.body.appendChild(e);
            const t = e.getBoundingClientRect(),
                i = t.width / 100,
                n = t.height / 100;
            return document.body.removeChild(e), (i + n) / 2
        })();
        i = e.clientX / t, n = e.clientY / t + 20
    }
    fa = i, ha = n, _a || (ya = fa, ba = ha, _a = !0)
}

function ka() {
    const e = document.getElementById("accessibility-reading-guide");
    if (e && _a) {
        const t = pi.slow_cursor ? .1 : 1;
        ya += (fa - ya) * t, ba += (ha - ba) * t, e.style.left = `${ya}px`, e.style.top = `${ba}px`
    }
    va = requestAnimationFrame(ka)
}
const Sa = e => {
        const t = e.currentTarget,
            i = t.getAttribute("aria-label"),
            n = document.getElementById("accessibility-reading-guide");
        if (!n) return;
        if (document.documentElement.classList.contains("accessibility_modal_opened")) {
            document.querySelector("#accessibility-modal-close-button").click()
        }
        const o = ["ez-handy.com", "apexfitnessclubs.com", "parnian.com", "teethobsessed.com"];
        if (ma) {
            document.removeEventListener("mousemove", wa), null !== va && (cancelAnimationFrame(va), va = null), _a = !1, n.style.display = "none", t.setAttribute("aria-pressed", "false"), ma = !1, i && si(i, "Disable", 1);
            const e = bi();
            if (e && hi({ ...ri(e),
                    reading_guide: !1
                }), o.includes(window.location.hostname) || document.querySelector("div:empty")) {
                const e = document.getElementById("reading-guide-custom-style");
                e && e.remove();
                const t = document.querySelectorAll(".aioa-tooltip");
                if (!t) return;
                t.forEach(e => {
                    e.textContent ? .trim() || e.children.length || (e.innerHTML = "")
                })
            }
        } else {
            _a = !1, document.addEventListener("mousemove", wa), null === va && (va = requestAnimationFrame(ka)), n.style.display = "block", t.setAttribute("aria-pressed", "true"), ma = !0, i && si(i, "Enable", 1);
            const e = bi();
            if (e && hi({ ...ri(e),
                    reading_guide: !0
                }), o.includes(window.location.hostname) || document.querySelector("div:empty")) {
                const e = document.querySelectorAll(".aioa-modal, .accessibility-tooltip, .bold_options, .accessibility-reading-mask-element, #slow_cursor, .accessibility-magnifier-tooltip, .nav-sidebar-header__graphic--image, .aioa-tooltip");
                if (!e) return;
                e.forEach(e => {
                    e.textContent ? .trim() || e.children.length || (e.innerHTML = " ")
                }), document.querySelectorAll(":empty").forEach(e => {
                    const t = window.getComputedStyle(e),
                        i = window.getComputedStyle(e).backgroundImage;
                    "absolute" === t.position && e.classList.add("skip-reading-guide"), "none" !== i && e.classList.add("has-bg-image")
                });
                const t = '\n        a:empty:not([style*="display: none"]):not(.skip-reading-guide):not(.has-bg-image):not([style*="background"]),\n        ul:empty:not([style*="display: none"]):not(.skip-reading-guide):not(.has-bg-image):not([style*="background"]),\n        dl:empty:not([style*="display: none"]):not(.skip-reading-guide):not(.has-bg-image):not([style*="background"]),\n        div:empty:not([style*="display: none"]):not(.skip-reading-guide):not(.has-bg-image):not([style*="background"]),\n        section:empty:not([style*="display: none"]):not(.skip-reading-guide):not(.has-bg-image):not([style*="background"]),\n        article:empty:not([style*="display: none"]):not(.skip-reading-guide):not(.has-bg-image):not([style*="background"]),\n        p:empty:not([style*="display: none"]):not(.skip-reading-guide):not(.has-bg-image):not([style*="background"]),\n        h1:empty:not([style*="display: none"]):not(.skip-reading-guide):not(.has-bg-image):not([style*="background"]),\n        h2:empty:not([style*="display: none"]):not(.skip-reading-guide):not(.has-bg-image):not([style*="background"]),\n        h3:empty:not([style*="display: none"]):not(.skip-reading-guide):not(.has-bg-image):not([style*="background"]),\n        h4:empty:not([style*="display: none"]):not(.skip-reading-guide):not(.has-bg-image):not([style*="background"]),\n        h5:empty:not([style*="display: none"]):not(.skip-reading-guide):not(.has-bg-image):not([style*="background"]),\n        h6:empty:not([style*="display: none"]):not(.skip-reading-guide):not(.has-bg-image):not([style*="background"]) {\n          display: revert !important;\n          visibility:hidden !important;\n        }\n      ',
                    i = document.createElement("style");
                i.type = "text/css", i.id = "reading-guide-custom-style", i.appendChild(document.createTextNode(t)), (document.head || document.getElementsByTagName("head")[0]).appendChild(i)
            }
        }
    },
    Ea = t => {
        const i = t.currentTarget;
        xi(), (async () => {
            let t = !1,
                n = !1;
            if (pi.reading_mask) {
                t = !0;
                const e = document.querySelector('div[data-accessibility="reading_mask"] button');
                e ? .click()
            }
            if (pi.focus_locator) {
                n = !0;
                const e = document.querySelector('div[data-accessibility="focus_locator"] button');
                e ? .click()
            }
            const {
                default: o
            } = await e(() =>
                import ("./readMode.js"), []);
            i && o(i, t, n)
        })().then(() => {
            Ai()
        })
    };
let xa = null,
    Aa = !1;
const La = t => {
        const i = F.t,
            n = window.scrollY;
        xi();
        const o = document.querySelector("html"),
            a = t.currentTarget,
            s = a.getAttribute("data-i18n-labelkey"),
            r = () => {
                const t = async t => {
                    const {
                        toggleContrast: i
                    } = await e(() =>
                        import ("./contrastAdjustments.js"), []);
                    i(t)
                };
                if (xa === s) {
                    if (xa = null, a.setAttribute("aria-pressed", "false"), s && o ? .classList.remove(s), s) {
                        si(i(s), "Disable", 1);
                        const e = bi();
                        e && hi({ ...ri(e),
                            [s]: !1
                        })
                    }
                    "light_contrast" !== s && "dark_contrast" !== s && "smart_contrast" !== s && "high_contrast" !== s || t(null);
                    const n = document.querySelector("#background_color-select li input:checked");
                    if (n) {
                        const t = n.value;
                        if (t && "none" !== t) {
                            (async t => {
                                const {
                                    setBackgroundColor: i
                                } = await e(() => Promise.resolve().then(() => Ba), void 0);
                                i(t)
                            })(t)
                        }
                    }
                    const r = document.querySelector("#text_color-select li input:checked");
                    if (r) {
                        const t = r.value;
                        if (t && "none" !== t) {
                            (async t => {
                                const {
                                    setTextColor: i
                                } = await e(() => Promise.resolve().then(() => qa), void 0);
                                i(t)
                            })(t)
                        }
                    }
                    const l = document.querySelector("#title_color-select li input:checked");
                    if (l) {
                        const t = l.value;
                        if (t && "none" !== t) {
                            (async t => {
                                const {
                                    setTitleColor: i
                                } = await e(() => Promise.resolve().then(() => Ma), void 0);
                                i(t)
                            })(t)
                        }
                    }
                } else {
                    t(null);
                    let e = {};
                    if (["light_contrast", "invert_colors", "dark_contrast", "high_contrast", "smart_contrast", "monochrome", "high_saturation", "low_saturation"].map(t => {
                            o ? .classList.remove(t), e = { ...e,
                                [t]: !1
                            };
                            const i = document.querySelector(`[data-accessibility="${t}"] button`);
                            i ? .setAttribute("aria-pressed", "false")
                        }), xa = s, (pi.light_contrast || "light_contrast" === s || pi.dark_contrast || "dark_contrast" === s || pi.smart_contrast || "smart_contrast" === s || pi.high_contrast || "high_contrast" === s) && t(s.toString()), a.setAttribute("aria-pressed", "true"), s && o ? .classList.add(s), s) {
                        s && si(i(s), "Enable", 1);
                        const t = bi();
                        t && hi({ ...ri(t),
                            ...e,
                            [s]: !0
                        })
                    }
                    "www.tatasimplybetter.com" !== window.location.hostname && "firstgearinc.com" !== window.location.hostname || setTimeout(() => {
                        requestAnimationFrame(() => window.scrollTo(0, n))
                    }, 340)
                }
                Ai()
            };
        if (Aa) r();
        else {
            (async () => {
                const {
                    initContrastAdjustments: t
                } = await e(() =>
                    import ("./contrastAdjustments.js"), []);
                t()
            })().then(() => {
                r(), "www.tatasimplybetter.com" !== window.location.hostname && "firstgearinc.com" !== window.location.hostname || setTimeout(() => {
                    requestAnimationFrame(() => window.scrollTo(0, n))
                }, 300)
            }), Aa = !0
        }
    },
    Ta = async e => {
        const t = document.querySelector("div[data-accessibility='text_color'] .aioa-custom-select"),
            i = document.querySelector("div[data-accessibility='text_color'] .select-button .selected-value"),
            n = document.querySelector("div[data-accessibility='text_color'] .select-button"),
            o = e.parentElement,
            a = o ? .querySelector("label"),
            s = e.getAttribute("data-slug"),
            r = e.value;
        if (i && a && a.innerHTML && s)
            if (i.innerHTML = a.innerHTML, i.setAttribute("data-i18n-key", s), t ? .classList.remove("active"), n ? .setAttribute("aria-expanded", "false"), "default" !== r) {
                Oa(r), si("Text Color", "Enable", 1);
                const e = bi();
                e && Object.keys(e).length > 0 && e && hi({ ...ri(e),
                    text_color: s
                }), setTimeout(() => {
                    n && n.focus()
                }, 150)
            } else {
                Ca(), si("Text Color", "Disable", 1);
                const e = bi();
                e && Object.keys(e).length > 0 && e && hi({ ...ri(e),
                    text_color: null
                }), setTimeout(() => {
                    n && n.focus()
                }, 150)
            }
    };

function Oa(e) {
    const t = document.querySelector(".aioa-widget-wrapper");
    Ki.forEach(i => {
        var n = document.querySelectorAll(i);
        n.length && n.forEach(i => {
            if (t && !Wi(t, i)) {
                if (i.closest(".zpshape-divider")) return;
                i.hasAttribute("data-aioa-original-color") || i.setAttribute("data-aioa-original-color", i.style.getPropertyValue("color") || ""), i.style.setProperty("color", `${e}`, "important");
                const n = i.classList.contains("aioa-title-color");
                let o = i.parentElement,
                    a = !1;
                for (; o && o !== t;) {
                    if (o.classList.contains("aioa-title-color")) {
                        a = !0;
                        break
                    }
                    o = o.parentElement
                }
                if (a) return;
                const s = document.getElementById("title_color-select") ? .value;
                n && "none" !== s || i.style.setProperty("color", `${e}`, "important")
            }
        })
    })
}

function Ca() {
    const e = document.querySelector(".aioa-widget-wrapper");
    Ki.forEach(t => {
        var i = document.querySelectorAll(t);
        i.length && i.forEach(t => {
            if (e && !Wi(e, t) && !t.classList.contains("aioa-title-color") && t.hasAttribute("data-aioa-original-color")) {
                const e = t.getAttribute("data-aioa-original-color");
                e ? t.style.setProperty("color", e) : t.style.removeProperty("color"), t.removeAttribute("data-aioa-original-color")
            }
        })
    })
}
const qa = Object.freeze(Object.defineProperty({
        __proto__: null,
        handleTextColor: Ta,
        setTextColor: Oa,
        unsetTextColor: Ca
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    $a = ["h1", "h2", "h3", "h4", "h5", "h6", "[role='heading']"],
    Pa = async e => {
        const t = document.querySelector("div[data-accessibility='title_color'] .aioa-custom-select"),
            i = document.querySelector("div[data-accessibility='title_color'] .select-button .selected-value"),
            n = document.querySelector("div[data-accessibility='title_color'] .select-button"),
            o = e.parentElement,
            a = o ? .querySelector("label"),
            s = e.getAttribute("data-slug"),
            r = e.value;
        if (i && a && a.innerHTML && s)
            if (i.innerHTML = a.innerHTML, i.setAttribute("data-i18n-key", s), t ? .classList.remove("active"), n ? .setAttribute("aria-expanded", "false"), "default" !== r) {
                Ra(r), si("Title Color", "Enable", 1);
                const e = bi();
                e && hi({ ...ri(e),
                    title_color: s
                }), setTimeout(() => {
                    n && n.focus()
                }, 150)
            } else {
                if (Na(), si("Title Color", "Disable", 1), "default" !== r) {
                    Ra(r), si("Title Color", "Enable", 1);
                    const e = bi();
                    e && Object.keys(e).length > 0 && e && hi({ ...ri(e),
                        title_color: s
                    })
                } else {
                    Na(), si("Title Color", "Disable", 1);
                    const e = bi();
                    e && Object.keys(e).length > 0 && e && hi({ ...ri(e),
                        title_color: null
                    })
                }
                setTimeout(() => {
                    n && n.focus()
                }, 150)
            }
    };

function Ra(e) {
    const t = document.querySelector(".aioa-widget-wrapper");
    $a.forEach(i => {
        var n = document.querySelectorAll(i);
        n.length && n.forEach(i => {
            t && !Wi(t, i) && (i.hasAttribute("data-aioa-original-color") || i.setAttribute("data-aioa-original-color", i.style.getPropertyValue("color") || ""), i.style.setProperty("color", `${e}`, "important"), i.classList.add("aioa-title-color"), i.querySelectorAll("*").forEach(t => {
                t.classList.contains("aioa-title-color") || t.classList.contains("aioa-ignore-color") || (t.hasAttribute("data-aioa-original-color") || t.setAttribute("data-aioa-original-color", t.style.getPropertyValue("color") || ""), t.style.setProperty("color", e, "important"))
            }))
        })
    })
}

function Na() {
    const e = document.querySelector(".aioa-widget-wrapper");
    $a.forEach(t => {
        var i = document.querySelectorAll(t);
        i.length && i.forEach(t => {
            e && !Wi(e, t) && (t.classList.remove("aioa-title-color"), Ia(t)), t.querySelectorAll("*").forEach(e => {
                e.classList.contains("aioa-ignore-color") || Ia(e)
            })
        })
    })
}

function Ia(e) {
    if (!e.hasAttribute("data-aioa-original-color")) return;
    const t = e.getAttribute("data-aioa-original-color");
    t ? e.style.setProperty("color", t) : e.style.removeProperty("color"), e.removeAttribute("data-aioa-original-color")
}
const Ma = Object.freeze(Object.defineProperty({
        __proto__: null,
        handleTitleColor: Pa,
        setTitleColor: Ra,
        unsetTitleColor: Na
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ja = async e => {
        const t = document.querySelector("div[data-accessibility='background_color'] .aioa-custom-select"),
            i = document.querySelector("div[data-accessibility='background_color'] .select-button .selected-value"),
            n = document.querySelector("div[data-accessibility='background_color'] .select-button"),
            o = e.parentElement,
            a = o ? .querySelector("label"),
            s = e.getAttribute("data-slug"),
            r = e.value;
        if (i && a && a.innerHTML && s)
            if (i.innerHTML = a.innerHTML, i.setAttribute("data-i18n-key", s), t ? .classList.remove("active"), n ? .setAttribute("aria-expanded", "false"), "default" !== r) {
                Fa(r), si("Background Color", "Enable", 1);
                const e = bi();
                e && Object.keys(e).length > 0 && e && hi({ ...ri(e),
                    background_color: s
                }), setTimeout(() => {
                    n && n.focus()
                }, 150)
            } else {
                za(), si("Background Color", "Disable", 1);
                const e = bi();
                e && Object.keys(e).length > 0 && e && hi({ ...ri(e),
                    background_color: null
                }), setTimeout(() => {
                    n && n.focus()
                }, 150)
            }
    };
let Da = Aa;
const Fa = t => {
        const i = () => {
            const e = document.querySelector(".aioa-widget-wrapper"),
                i = document.querySelectorAll(".ins-tile__wrap");
            i.length >= 2 && (i[1].setAttribute("data-second-ins-tile", "true"), i[3].setAttribute("data-second-ins-tile", "true")), Ki.forEach(i => {
                let n = document.querySelectorAll(i);
                n.length && n.forEach(i => {
                    const n = i.tagName.toLowerCase();
                    if (!i.closest('[class*="BV22op"]') && !["img", "picture", "video", "canvas", "wow-image", "a"].includes(n) && e && !Wi(e, i) && !i.classList.contains("accessibility-reading-mask-element") && !i.classList.contains("aioa-hide-interface-error") && !i.classList.contains("nt-dialog") && !i.classList.contains("nt-overlay") && !i.classList.contains("blue-light-filter") && !i.classList.contains("aioa-modal-close-button") && !i.classList.contains("accessibility-tooltip") && !i.closest(".homepage__info-two__list__info__content.relative") && !i.closest(".mousegrid-cell") && !i.closest(".mousegrid-wrapper") && !i.closest(".select2-container") && !i.closest(".iti__country-list") && !i.closest(".emthemesModez-overlay") && "none" === getComputedStyle(i).backgroundImage && "true" !== i.getAttribute("data-second-ins-tile")) {
                        let e = i.getAttribute("data-original-bg");
                        if (!e) {
                            const t = window.getComputedStyle(i);
                            if ("rgba(0, 0, 0, 0)" !== t.getPropertyValue("background-color") && "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box" !== t.getPropertyValue("background") && "none" !== t.getPropertyValue("background-color")) {
                                const i = t.getPropertyValue("background");
                                e = i.includes("url") || i.includes("gradient") ? i : t.getPropertyValue("background-color")
                            }
                        }
                        if (e) {
                            if (("BUTTON" === i.tagName || "button" === i.getAttribute("role")) && (i.innerText.toLowerCase().includes("top") || i.title ? .toLowerCase().includes("top") || i.className ? .toLowerCase().includes("top") || i.id ? .toLowerCase().includes("top"))) return;
                            i.setAttribute("data-original-bg", e);
                            if ("none" !== window.getComputedStyle(i).getPropertyValue("background-image") || e.includes("gradient")) return;
                            i.style.setProperty("background-color", t, "important");
                            const n = document.querySelector("html");
                            n ? .classList.add("aioa_background_color")
                        }
                    }
                })
            })
        };
        if (Da) i();
        else {
            xi();
            (async () => {
                const {
                    initContrastAdjustments: t
                } = await e(() =>
                    import ("./contrastAdjustments.js"), []);
                t()
            })().then(() => {
                i(), Ai(), Da = !0
            })
        }
    },
    za = () => {
        document.querySelectorAll("[data-original-bg]").forEach(e => {
            const t = e.getAttribute("data-original-bg");
            t && (pi.read_mode ? (e.style.background = "", e.style.backgroundColor = "") : e.style.background = t)
        });
        const e = document.querySelector("html");
        e ? .classList.remove("aioa_background_color")
    },
    Ba = Object.freeze(Object.defineProperty({
        __proto__: null,
        handleBackgroundColor: ja,
        setBackgroundColor: Fa,
        unsetBackgroundColor: za
    }, Symbol.toStringTag, {
        value: "Module"
    }));
let Ua = !0;
const Ha = {
        en: "en-US",
        "en-US": "en-US",
        "en-us": "en-US",
        "en-gb": "en-GB",
        "en-GB": "en-GB",
        "en-au": "en-US",
        "en-ca": "en-US",
        es: "es-ES",
        "es-mx": "es-ES",
        de: "de-DE",
        ar: "ar-XA",
        sk: "sk-SK",
        hi: "hi-IN",
        pt: "pt-PT",
        "pt-br": "pt-BR",
        ja: "ja-JP",
        it: "it-IT",
        fr: "fr-FR",
        gu: "gu-IN",
        ml: "ml-IN",
        kn: "kn-IN",
        ur: "ur-IN",
        ta: "ta-IN",
        te: "te-IN",
        mr: "mr-IN",
        bn: "bn-IN",
        pl: "pl-PL",
        ru: "ru-RU",
        he: "he-IL",
        hu: "hu-HU",
        fi: "fi-FI",
        tr: "tr-TR",
        el: "el-GR",
        bg: "bg-BG",
        ca: "ca-ES",
        cs: "cs-CZ",
        da: "da-DK",
        id: "id-ID",
        ko: "ko-KR",
        lt: "lt-LT",
        ms: "ms-MY",
        ro: "ro-RO",
        sl: "sl-SI",
        sv: "sv-SE",
        th: "th-TH",
        uk: "uk-UA",
        vi: "vi-VN",
        et: "et-EE",
        lv: "lv-LV",
        sr: "sr-RS",
        hr: "hr-HR",
        eu: "eu-ES",
        fil: "fil-PH",
        gl: "gl-ES",
        nb: "nb-NO",
        pa: "pa-IN",
        is: "is-IS"
    },
    Va = new WeakMap;
let Wa = null;
const Ka = async () => {
        try {
            return Wa = await navigator.mediaDevices.getUserMedia({
                audio: !0
            }), !0
        } catch (e) {
            return !1
        }
    },
    Ja = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: (e, t = !1) => {
            var i = JSON.parse(e.getAttribute("aria-pressed").toLowerCase()),
                n = pi.talk_type;
            let o = !1;
            const a = F.t;
            let s = null;
            e.setAttribute("aria-pressed", (!i).toString());
            const r = e.getAttribute("aria-label");
            n = !i, r && si(r, n ? "Enable" : "Disable", 1);
            const l = bi();
            if (l && hi({ ...ri(l),
                    talk_type: n
                }), window.dispatchEvent(new CustomEvent("feature-updated", {
                    detail: {
                        slug: "talk_type"
                    }
                })), !0 === n) {
                let c = function(e) {
                        if (1 === e.numberOfChannels) return e.getChannelData(0);
                        const t = e.getChannelData(0),
                            i = e.getChannelData(1),
                            n = new Float32Array(t.length);
                        for (let o = 0; o < t.length; o++) n[o] = (t[o] + i[o]) / 2;
                        return n
                    },
                    d = function(e, t, i) {
                        if (t === i) return e;
                        const n = t / i,
                            o = Math.round(e.length / n),
                            a = new Float32Array(o);
                        for (let s = 0; s < o; s++) {
                            const t = Math.floor(s * n);
                            a[s] = e[t]
                        }
                        return a
                    },
                    u = function(e, t, i) {
                        for (let n = 0; n < i.length; n++) e.setUint8(t + n, i.charCodeAt(n))
                    },
                    p = function(e, t) {
                        const i = new ArrayBuffer(44 + 2 * e.length),
                            n = new DataView(i);
                        u(n, 0, "RIFF"), n.setUint32(4, 36 + 2 * e.length, !0), u(n, 8, "WAVE"), u(n, 12, "fmt "), n.setUint32(16, 16, !0), n.setUint16(20, 1, !0), n.setUint16(22, 1, !0), n.setUint32(24, t, !0), n.setUint32(28, 2 * t, !0), n.setUint16(32, 2, !0), n.setUint16(34, 16, !0), u(n, 36, "data"), n.setUint32(40, 2 * e.length, !0);
                        let o = 44;
                        for (let a = 0; a < e.length; a++) {
                            const t = Math.max(-1, Math.min(1, e[a]));
                            n.setInt16(o, t < 0 ? 32768 * t : 32767 * t, !0), o += 2
                        }
                        return new Blob([n], {
                            type: "audio/wav"
                        })
                    },
                    g = function(e) {
                        e.matches("input, textarea") && m(e), e.querySelectorAll("input, textarea").forEach(e => {
                            m(e)
                        })
                    },
                    m = function(e) {
                        e._aioaBound || (e._aioaBound = !0, e.addEventListener("focusin", t => {
                            const i = t.target;
                            if (i instanceof HTMLInputElement && !["text", "email", "search", "textarea"].includes(i.type ? .toLowerCase())) return;
                            if (!h()) return;
                            const n = document.getElementById("aioa-talk-type");
                            n && (n.innerHTML = `\n                    <div class="aioa-talk-type-header">\n                        <div class="aioa-talk-type-header-text-icon-wrapper">\n                            <span class="aioa-talk-type-header-icon active"></span>\n                            <span class="aioa-talk-type-header-text" data-i18n-key="talk_type_active_msg">\n                                ${a("talk_type_active_msg")}\n                            </span>\n                        </div>\n                    </div>\n                `, s = i, o = !0, Va.set(i, new Set), e.classList.add("aioa-talk-type-highlight"), w(i))
                        }), e.addEventListener("focusout", () => {
                            o = !1, s = null, document.querySelectorAll(".aioa-talk-type-highlight").forEach(e => e.classList.remove("aioa-talk-type-highlight")), f ? .style && (f.style.display = "none")
                        }))
                    };
                if (document.documentElement.classList.contains("accessibility_modal_opened")) {
                    const S = document.querySelector("#accessibility-modal-close-button");
                    S ? .click()
                }
                const f = document.getElementById("aioa-talk-type"),
                    h = () => JSON.parse(e.getAttribute("aria-pressed").toLowerCase());
                async function y(e) {
                    return new Promise((t, i) => {
                        const n = new FileReader;
                        n.onloadend = () => t(n.result.toString().split(",")[1]), n.onerror = i, n.readAsDataURL(e)
                    })
                }
                async function b(e, t) {
                    const i = await y(e);
                    var n = new FormData;
                    n.set("content", i), n.set("languageCode", Ha[t] || "en-US"), n.set("sampleRateHertz", 16e3.toString() ? ? ""), n.set("encoding", "LINEAR16");
                    const o = await fetch("https://ada.skynettechnologies.us/apis/st-recognize", {
                        method: "POST",
                        body: n
                    });
                    if (!o.ok) return "";
                    const a = await o.json();
                    return a.results ? .[0] ? .alternatives ? .[0] ? .transcript || ""
                }
                async function _() {
                    if (!Wa) throw new Error("Microphone not initialized");
                    const e = new AudioContext,
                        t = e.createMediaStreamSource(Wa),
                        i = e.createAnalyser();
                    i.fftSize = 2048, t.connect(i);
                    const n = MediaRecorder.isTypeSupported("audio/webm") ? "audio/webm" : "audio/mp4",
                        o = new MediaRecorder(Wa, {
                            mimeType: n
                        }),
                        a = [];
                    let s = Date.now();
                    return o.ondataavailable = e => a.push(e.data), new Promise(e => {
                        o.onstop = () => {
                            e(new Blob(a, {
                                type: o.mimeType
                            }))
                        }, o.start();
                        const t = () => {
                            const e = new Uint8Array(i.fftSize);
                            i.getByteTimeDomainData(e);
                            let n = 0;
                            for (let t = 0; t < e.length; t++) {
                                const i = (e[t] - 128) / 128;
                                n += i * i
                            }
                            if (n = Math.sqrt(n / e.length), n < .02) {
                                if (Date.now() - s > 900) return void o.stop()
                            } else s = Date.now();
                            requestAnimationFrame(t)
                        };
                        t()
                    })
                }
                async function v(e) {
                    const t = await e.arrayBuffer(),
                        i = new AudioContext,
                        n = await i.decodeAudioData(t),
                        o = c(n),
                        a = d(o, n.sampleRate, 16e3);
                    return i.close(), p(a, 16e3)
                }
                async function w(e) {
                    o = !0;
                    let t = !1;
                    for (f.style.display = "block"; o && h();) {
                        const i = await _();
                        if (!t) {
                            t = !0;
                            const n = await i;
                            if (n) {
                                b(await v(n), F.language).then(t => {
                                    let i = Va.get(e);
                                    i || (i = new Set, Va.set(e, i)), "" === e.value.trim() && i.clear(), t && o && s === e && !i.has(t) && (e.value = (e.value || "") + t + " ", i.add(t))
                                }).finally(() => {
                                    t = !1
                                })
                            }
                        }
                        await new Promise(e => setTimeout(e, 250))
                    }
                }
                document.querySelector("html").getAttribute("lang"), setTimeout(() => {
                    if (t) {
                        let e = function(e) {
                            if ("hidden" === e.type) return !1;
                            if (e.disabled) return !1;
                            if (e.readOnly) return !1;
                            const t = window.getComputedStyle(e);
                            if ("none" === t.display) return !1;
                            if ("hidden" === t.visibility) return !1;
                            if ("0" === t.opacity) return !1;
                            const i = e.getBoundingClientRect();
                            return 0 !== i.width && 0 !== i.height
                        };
                        const t = document.querySelectorAll("input, textarea");
                        document.querySelector(".aioa-widget-wrapper");
                        let i = null;
                        const n = ["text", "email", "search", "textarea"];
                        for (const o of t)
                            if (e(o) && n.includes(o.type ? .toLowerCase())) {
                                i = o;
                                break
                            }
                        if (i) {
                            i ? .focus(), setTimeout(() => {
                                i.scrollIntoView({
                                    behavior: "smooth",
                                    block: "center"
                                })
                            }, 200), i.classList.add("aioa-talk-type-highlight"), s = i, o = !0, Va.set(i, new Set), w(i);
                            const e = document.getElementById("aioa-talk-type");
                            e && (e.style.display = "block")
                        } else {
                            const e = document.getElementById("aioa-talk-type");
                            if (!e) return;
                            e.innerHTML = `<div class="aioa-talk-type-header">\n                        <div class="aioa-talk-type-header-text-icon-wrapper">\n                        <span class="aioa-talk-type-header-icon active"></span>\n                        <span class="aioa-talk-type-header-text" data-i18n-key="talk_type_inactive_msg">\n                            ${a("talk_type_inactive_msg")}\n                        </span>\n                        </div>\n                    </div>`, e.style.display = "block"
                        }
                    }
                }, 200);
                const k = document.activeElement;
                if (k && k.matches("input, textarea")) {
                    const E = k;
                    if (["text", "email", "search", "textarea"].includes(E.type ? .toLowerCase())) {
                        delete E._aioaBound, m(E);
                        const x = document.getElementById("aioa-talk-type");
                        x && (x.innerHTML = `<div class="aioa-talk-type-header">\n                        <div class="aioa-talk-type-header-text-icon-wrapper">\n                            <span class="aioa-talk-type-header-icon active"></span>\n                            <span class="aioa-talk-type-header-text" data-i18n-key="talk_type_active_msg">\n                                ${a("talk_type_active_msg")}\n                            </span>\n                        </div>\n                    </div>`), s = E, o = !0, Va.set(E, new Set), E.classList.add("aioa-talk-type-highlight"), w(E), f && (f.style.display = "block")
                    }
                }
                g(document.body);
                new MutationObserver(e => {
                    for (const t of e) t.addedNodes.forEach(e => {
                        e.nodeType === Node.ELEMENT_NODE && g(e)
                    })
                }).observe(document.body, {
                    childList: !0,
                    subtree: !0
                })
            } else {
                document.querySelectorAll(".aioa-talk-type-highlight").forEach(e => e.classList.remove("aioa-talk-type-highlight"));
                document.getElementById("aioa-talk-type").style.display = "none"
            }
        },
        ensureMicrophonePermission: Ka
    }, Symbol.toStringTag, {
        value: "Module"
    }));
let Ga = !0;
let Xa = !0;
const Ya = t => {
    const i = t.currentTarget;
    xi();
    (async () => {
        const {
            default: t
        } = await e(() =>
            import ("./libras.js"), []);
        i && t(i)
    })().then(() => {
        Ai()
    })
};
let Qa = null,
    Za = !1;
const es = () => {
        try {
            document.querySelectorAll("img, video, picture, canvas, iframe, svg, figure, figcaption").forEach(e => {})
        } catch (e) {}
    },
    ts = e => {
        Za || ((() => {
            const e = document.querySelector(".aioa-widget-wrapper"),
                t = document.querySelector(".simple-keyboard");
            Ki.forEach(i => {
                let n = document.querySelectorAll(i);
                n.length && n.forEach(i => {
                    if (!(Wi(e, i) || Wi(t, i) || i.classList.contains("accessibility-reading-mask-element") || i.classList.contains("accessibility-tooltip") || i.classList.contains("has-clippath"))) {
                        let e = window.getComputedStyle(i).clipPath;
                        e && "none" !== e && i.classList.add("has-clippath")
                    }
                    i.matches('li[role="presentation"]') && "www.tataconsumer.com" === window.location.hostname && i.querySelector("button") ? .classList.add("has-clippath")
                })
            }), es(), window.addEventListener("popstate", () => es()), window.addEventListener("hashchange", () => es())
        })(), Za = !0);
        const t = F.t,
            i = document.querySelector("html"),
            n = e.currentTarget,
            o = n.getAttribute("data-i18n-labelkey");
        if (Qa === o) {
            if (Qa = null, n.setAttribute("aria-pressed", "false"), o && i ? .classList.remove(`aioa-${o}`), o) {
                si(t(o), "Disable", 1);
                const e = bi();
                e && hi({ ...ri(e),
                    [o]: !1
                })
            }
            es()
        } else {
            let e = {};
            if (["align_left", "align_right", "align_center"].forEach(t => {
                    i ? .classList.remove(`aioa-${t}`), e = { ...e,
                        [t]: !1
                    };
                    const n = document.querySelector(`[data-accessibility="${t}"] button`);
                    n ? .setAttribute("aria-pressed", "false")
                }), Qa = o, n.setAttribute("aria-pressed", "true"), o && i ? .classList.add(`aioa-${o}`), o) {
                si(t(o), "Enable", 1);
                const i = bi();
                i && hi({ ...ri(i),
                    ...e,
                    [o]: !0
                })
            }
            es()
        }
    };
let is = !1;
const ns = document.querySelector("html"),
    os = e => {
        const t = e.src || "";
        return ["youtube.com", "youtu.be", "vimeo.com", "dailymotion.com", "twitch.tv", "vidyard.com", "wistia.com", "vimeocdn.com", "player.vimeo.com", "www.youtube-nocookie.com"].some(e => t.includes(e))
    },
    as = () => {
        document.querySelectorAll("iframe").forEach(e => {
            os(e) && !e.hasAttribute("data-video-iframe") && e.setAttribute("data-video-iframe", "true")
        })
    },
    ss = new WeakMap,
    rs = new WeakMap,
    ls = new WeakMap,
    cs = new WeakSet;
let ds = null;
const us = e => !!e.closest(".aioa-widget-wrapper"),
    ps = () => {
        const e = performance.now();
        (() => {
            const e = document.querySelectorAll("body, body *"),
                t = [];
            return e.forEach(e => {
                if (us(e)) return;
                const i = e.getBoundingClientRect();
                i.width < 50 || i.height < 50 || t.push(e)
            }), t
        })().forEach(t => {
            if (cs.has(t)) return;
            const i = getComputedStyle(t).backgroundColor;
            let n = ls.get(t);
            if (!n) return n = {
                lastColor: i,
                changeTimestamps: []
            }, void ls.set(t, n);
            i !== n.lastColor && (n.changeTimestamps.push(e), n.lastColor = i, n.changeTimestamps = n.changeTimestamps.filter(t => e - t <= 1e3), n.changeTimestamps.length >= 3 && ms(t, i))
        })
    },
    gs = new WeakMap,
    ms = (e, t) => {
        if (cs.has(e)) return;
        cs.add(e);
        const i = () => {
            e.style.backgroundColor !== t && (e.style.background = t), "none" !== e.style.animationName && (e.style.animationName = "none"), "none" !== e.style.transitionProperty && (e.style.transitionProperty = "none")
        };
        i(), e.setAttribute("data-flash-guard-stabilized", "true");
        const n = new MutationObserver(() => i());
        n.observe(e, {
            attributes: !0,
            attributeFilter: ["style"]
        }), gs.set(e, n)
    },
    fs = e => {
        const t = e.currentTarget,
            i = t.getAttribute("aria-label");
        if (is) {
            ns ? .classList.remove("stop-animations"), t.setAttribute("aria-pressed", "false"), document.querySelectorAll("video[aioa-auto-play]").forEach(e => {
                e.play(), e.removeAttribute("aioa-auto-play")
            }), document.querySelectorAll("marquee[aioa-paused]").forEach(e => {
                e.start(), e.removeAttribute("aioa-paused")
            }), ds && (clearInterval(ds), ds = null), document.querySelectorAll("marquee[aioa-paused]").forEach(e => {
                const t = rs.get(e);
                t && (e.onmouseover = t.over, e.onmouseout = t.out, rs.delete(e)), e.removeAttribute("aioa-paused"), e.start()
            }), document.querySelectorAll("canvas[aioa-gif-frozen]").forEach(e => {
                const t = ss.get(e);
                t ? (t.removeAttribute("aioa-gif-frozen"), e.parentNode ? .replaceChild(t, e), ss.delete(e)) : e.remove()
            }), is = !1, i && si(i, "Disable", 1);
            const e = bi();
            e && hi({ ...ri(e),
                stop_animations: !1
            })
        } else {
            ns ? .classList.add("stop-animations"), t.setAttribute("aria-pressed", "true"), document.querySelectorAll("video").forEach(e => {
                (e => !!(e.currentTime > 0 && !e.paused && !e.ended && e.readyState > 2))(e) && (e.autoplay ? e.setAttribute("aioa-auto-play", "true") : e.setAttribute("aioa-paused", "true"), e.pause())
            }), n = "pause", document.querySelectorAll("iframe").forEach(e => {
                try {
                    if (!os(e)) return;
                    const t = e.src;
                    if (!t) return;
                    if ("pause" === n) {
                        if (e.contentWindow ? .postMessage(JSON.stringify({
                                event: "command",
                                func: "pauseVideo",
                                args: ""
                            }), "*"), e.contentWindow ? .postMessage(JSON.stringify({
                                method: "pause"
                            }), "*"), t.includes("autoplay=true") || t.includes("autoplay=1")) {
                            e.setAttribute("data-original-src", t);
                            let i = t;
                            i = i.replace("autoplay=true", "autoplay=false"), i = i.replace("autoplay=1", "autoplay=0"), e.src = i
                        }
                        e.setAttribute("aioa-paused", "true")
                    } else if ("true" === e.getAttribute("aioa-paused")) {
                        const t = e.getAttribute("data-original-src");
                        e.contentWindow ? .postMessage(JSON.stringify({
                            event: "command",
                            func: "playVideo",
                            args: ""
                        }), "*"), e.contentWindow ? .postMessage(JSON.stringify({
                            method: "play"
                        }), "*"), t && (e.src = t, e.removeAttribute("data-original-src")), e.removeAttribute("aioa-paused")
                    }
                } catch (t) {}
            }), document.querySelectorAll("marquee").forEach(e => {
                e.setAttribute("aioa-paused", "true"), e.stop()
            }), ds = setInterval(ps, 100), document.querySelectorAll("marquee").forEach(e => {
                e.setAttribute("aioa-paused", "true"), rs.set(e, {
                    over: e.onmouseover,
                    out: e.onmouseout
                }), e.onmouseover = null, e.onmouseout = null, e.stop()
            }), document.querySelectorAll("img").forEach(e => {
                if (!/\.gif($|\?)/i.test(e.src)) return;
                if (e.hasAttribute("aioa-gif-frozen")) return;
                if (us(e)) return;
                const t = () => {
                    const t = document.createElement("canvas");
                    if (t.width = e.naturalWidth || e.width, t.height = e.naturalHeight || e.height, !t.width || !t.height) return;
                    const i = t.getContext("2d");
                    try {
                        i ? .drawImage(e, 0, 0, t.width, t.height), t.style.cssText = e.style.cssText, t.className = e.className, t.setAttribute("aioa-gif-original-src", e.src), t.setAttribute("aioa-gif-frozen", "true"), e.setAttribute("aioa-gif-frozen", "true"), e.parentNode ? .replaceChild(t, e), ss.set(t, e)
                    } catch (n) {}
                };
                e.complete ? t() : e.addEventListener("load", t, {
                    once: !0
                })
            }), is = !0, i && si(i, "Enable", 1);
            const e = bi();
            e && hi({ ...ri(e),
                stop_animations: !0
            })
        }
        var n
    };
as(), new MutationObserver(as).observe(document.body, {
    childList: !0,
    subtree: !0
});
const hs = "data-aioa-original-font-family",
    ys = [".accesibility-statement-close-button", ".accessibility-hide-close-button", ".fa", ".lni", ".accessibility-filter-content-close-button", ".accesibility-language-close-button", ".aioa-icon", ".accessibility-scaling-wrapper button span", ".material-icons", ".material-icons-round", ".material-icons-outlined", ".flex-icon", ".ft", ".ft-fw", ".tfont-var-box", ".labeled-graphic-marker", ".labeled-graphic-marker *", ".icon", "li", "ol", "i", ".button-icon-text", ".social-icon-font", ".dropdown-arrow", "a[class*=icon]", "a[class*=social]", "[class^=aioa-icon]", "[class^=ico]", "[class^=icn]", '[class*=" icon"]', '[class*=" ico"]', "[class*=fas]", "[class*=far]", "[class*=fab]", "[class*=material-icons]", "[class*=pe-]", "[class^=ft-]", '[class*=" ft-"]', "[data-flex-icon]", '[class*=" icn"]', '[class*=" icon-Master"]', "[class*=icon-Master]", "[class*=icon]", "[class*=Icon]", "[class*=ico]", "*[class*=fa-in]", "[class*=Ico]", "[class^=fa-]", '[class*=" fa-"]', "[class$=-fa]", "[class*=MaterialIcons]", "[class*=lni]", "[class*=ft-]", '[class*=" ai"]', "[class*=jdgm]", "[data-icon]", "[data-font]", "i[class]", "span[class*=icon]", ".social-media-link-wrapper", ".icon-Master-08", ".split-content", ".button-icon-text", ".social-icon-font", ".dropdown-arrow"].join(","),
    bs = e => {
        document.querySelectorAll("body *").forEach(t => {
            if ((e => {
                    try {
                        return e.matches(ys)
                    } catch {
                        return !1
                    }
                })(t)) return;
            const i = t.style.fontFamily;
            i && (t.hasAttribute(hs) || t.setAttribute(hs, i), t.style.setProperty("font-family", e, "important"))
        })
    };
let _s = null,
    vs = !1,
    ws = !1;
const ks = {
        readable_font: "AIOA-Readable",
        dyslexia_font: "AIOA-OpenDyslexic",
        sign_language_font: "AIOA-HandText"
    },
    Ss = new Map;

function Es(e) {
    document.querySelectorAll('[data-testid^="klaviyo-form-"], [data-testid^="klaviyo-form-"] *').forEach(t => {
        if (e) Ss.has(t) || Ss.set(t, {
            resetClass: t.classList.contains("kl-private-reset-css-Xuajs1"),
            goClasses: [...t.classList].filter(e => /^go\d{10}$/.test(e))
        }), t.classList.remove("kl-private-reset-css-Xuajs1"), [...t.classList].forEach(e => {
            /^go\d{10}$/.test(e) && "go3864980981" !== e && t.classList.remove(e)
        });
        else {
            const e = Ss.get(t);
            if (!e) return;
            e.resetClass && t.classList.add("kl-private-reset-css-Xuajs1"), e.goClasses.forEach(e => {
                t.classList.add(e)
            }), Ss.delete(t)
        }
    })
}
const xs = e => {
    const t = F.t,
        i = document.querySelector("html"),
        n = e.currentTarget,
        o = n.getAttribute("data-i18n-labelkey");
    if (window.location.hostname.includes("easymarketil.shop") && document.body.classList.add("easymarketil-shop"), _s === o) {
        if (_s = null, n.setAttribute("aria-pressed", "false"), o && i ? .classList.remove(o), document.querySelectorAll(`[${hs}]`).forEach(e => {
                const t = e.getAttribute(hs);
                t ? e.style.setProperty("font-family", t, "important") : e.style.removeProperty("font-family"), e.removeAttribute(hs)
            }), o) {
            si(t(o), "Disable", 1);
            const e = bi();
            e && hi({ ...ri(e),
                [o]: !1
            })
        }
        "omniluxled.com" === window.location.hostname && Es(!1)
    } else {
        let e = {};
        ["readable_font", "dyslexia_font", "sign_language_font"].map(t => {
            i ? .classList.remove(t), e = { ...e,
                [t]: !1
            };
            const n = document.querySelector(`[data-accessibility="${t}"] button`);
            n ? .setAttribute("aria-pressed", "false")
        }), _s = o, "dyslexia_font" === _s && (vs || (() => {
            xi();
            const e = new FontFace("AIOA-OpenDyslexic", "url(https://www.skynettechnologies.com/accessibility/fonts/AIOA-OpenDyslexic-BoldItalic.woff2)", {
                style: "italic",
                weight: "700"
            });
            document.fonts.add(e), e.load();
            const t = new FontFace("AIOA-OpenDyslexic", "url(https://www.skynettechnologies.com/accessibility/fonts/AIOA-OpenDyslexic-Regular.woff2)", {
                style: "normal",
                weight: "400"
            });
            document.fonts.add(t), t.load();
            const i = new FontFace("AIOA-OpenDyslexic", "url(https://www.skynettechnologies.com/accessibility/fonts/AIOA-OpenDyslexic-Italic.woff2)", {
                style: "italic",
                weight: "400"
            });
            document.fonts.add(i), i.load();
            const n = new FontFace("AIOA-OpenDyslexic", "url(https://www.skynettechnologies.com/accessibility/fonts/AIOA-OpenDyslexic-Bold.woff2)", {
                style: "normal",
                weight: "700"
            });
            document.fonts.add(n), n.load(), window.location.hostname.includes("easymarketil.shop") && document.body.classList.add("easymarketil-shop"), vs = !0, document.fonts.ready.then(() => {
                Ai()
            })
        })()), "sign_language_font" === _s && (ws || (() => {
            xi();
            const e = new FontFace("AIOA-HandText", "url(https://www.skynettechnologies.com/accessibility/fonts/handtext-bold.otf)", {
                style: "normal",
                weight: "400"
            });
            document.fonts.add(e), e.load();
            const t = new FontFace("AIOA-HandText", "url(https://www.skynettechnologies.com/accessibility/fonts/handtext-regular.otf)", {
                style: "normal",
                weight: "700"
            });
            document.fonts.add(t), t.load(), ws = !0, document.fonts.ready.then(() => {
                Ai()
            })
        })()), n.setAttribute("aria-pressed", "true"), o && i ? .classList.add(o);
        const a = o && ks[o];
        if (a && bs(a), "omniluxled.com" === window.location.hostname && Es(!0), o) {
            si(t(o), "Enable", 1);
            const i = bi();
            i && hi({ ...ri(i),
                ...e,
                [o]: !0
            })
        }
    }
};
let As = !1,
    Ls = !1,
    Ts = null;
const Os = document.createElement("div"),
    Cs = () => {
        const e = document.querySelector("body");
        Os.classList.add("accessibility-magnifier-tooltip"), Os.setAttribute("aria-hidden", "true");
        const t = document.querySelector(".aioa-widget-wrapper");
        document.querySelector(".accessibility-magnifier-tooltip") || e && e.appendChild(Os), Ki.forEach(e => {
            const i = document.querySelectorAll(e);
            i.length && i.forEach(e => {
                !qs(e) || !t || Wi(t, e) || e.classList.contains("pp-offcanvas-container") || e.getAttribute("aioa-magnifier") || e.setAttribute("aioa-magnifier", "true"), $s(e) && t && !e.getAttribute("aioa-magnifier") && e.setAttribute("aioa-magnifier", "true"), "INPUT" !== e.tagName || "submit" !== e.type || !t || Wi(t, e) || e.getAttribute("aioa-magnifier") || e.setAttribute("aioa-magnifier", "true")
            })
        });
        const i = document.querySelectorAll("img, svg");
        i && i.length && i.forEach(e => {
                if (!e.getAttribute("aioa-magnifier")) {
                    const t = e.getAttribute("alt"),
                        i = e.getAttribute("alt");
                    (t && t.trim() || i && i.trim()) && e.setAttribute("aioa-magnifier", "true")
                }
            }),
            function() {
                Ts && Ts.disconnect();
                Ts = new MutationObserver(e => {
                    e.forEach(e => {
                        if ("childList" === e.type && e.addedNodes.length > 0) {
                            ! function(e) {
                                const t = document.querySelector(".aioa-widget-wrapper");
                                e.forEach(e => {
                                    if (e.nodeType === Node.ELEMENT_NODE) {
                                        const i = e;
                                        Rs(i, t) && Ns(i);
                                        i.querySelectorAll("*").forEach(e => {
                                            Rs(e, t) && Ns(e)
                                        })
                                    }
                                })
                            }(e.addedNodes);
                            const t = document.getElementById("comp-kmbqgnlmmoreContainer");
                            if (t && e.target === t) {
                                t.querySelectorAll("li, a, button, span, div").forEach(e => {
                                    Rs(e, document.querySelector(".aioa-widget-wrapper")) && Ns(e)
                                })
                            }
                        }
                    })
                }), Ts.observe(document.body, {
                    childList: !0,
                    subtree: !0
                });
                const e = document.getElementById("comp-kmbqgnlmmoreContainer");
                e && Ts.observe(e, {
                    childList: !0,
                    subtree: !0,
                    attributes: !0,
                    attributeFilter: ["class", "style"]
                })
            }(), As = !0
    };

function qs(e) {
    if (!e.hasChildNodes()) return !1;
    for (let t = 0; t < e.childNodes.length; t++) {
        const i = e.childNodes[t];
        if (i.nodeType === Node.TEXT_NODE && "" !== i.nodeValue ? .trim()) return !0
    }
    return !1
}

function $s(e) {
    return Array.from(e.childNodes).some(e => e.nodeType === Node.TEXT_NODE && e.textContent ? .trim() || e.nodeType === Node.ELEMENT_NODE && ["SPAN", "B", "STRONG", "I", "EM"].includes(e.tagName) && e.textContent ? .trim())
}

function Ps(e) {
    const t = e.target;
    if (t && t.getAttribute("aioa-magnifier")) {
        const i = t.tagName.toLowerCase(),
            n = document.querySelector(".aioa-widget-wrapper");
        let o = "";
        if ("text" === i && t.textContent && "" !== t.textContent.trim() && (o = t.textContent.trim()), t.children.length > 0 && !qs(t) && n && !n.contains(t)) return void(Os.style.display = "none");
        if (qs(t) && t.innerText && t.innerText.trim() && (o = t.innerText.trim()), n && n.contains(t) && $s(t) && t.innerText && t.innerText.trim() && (o = t.innerText.trim()), "INPUT" === t.tagName) {
            const e = t;
            "submit" === e.type && e.value.trim() && (o = e.value.trim())
        }
        if (!o) {
            const e = t.querySelector("[title]");
            if (e) {
                const i = e.getAttribute("title");
                i && i.trim() && (o = i.trim() + " " + t.innerText)
            }
        }
        if (!o) {
            const e = t.getAttribute("alt");
            if (t.getAttribute("alt")) e && e.trim() && (o = e.trim() + " " + t.innerText);
            else {
                const e = t.querySelector("[alt]");
                if (e) {
                    const i = e.getAttribute("alt");
                    i && i.trim() && (o = i.trim() + " " + t.innerText)
                }
            }
        }
        const a = t => {
            let i = 1 / (bi().content_scaling / 100);
            const n = 10,
                o = window.innerWidth * i,
                a = window.innerHeight * i,
                s = e.clientX * i,
                r = e.clientY * i,
                l = a - r - 10 - 40,
                c = r - 10 - 10,
                d = l < 80 && c > l,
                u = Math.max(60, d ? c : l),
                p = o - s - 20,
                g = s - 20,
                m = 60 * i,
                f = Math.min(Math.max(p, g, m), o - 20);
            Os.style.display = "block", Os.innerHTML = t, Os.style.overflowY = "visible", Os.style.maxHeight = "none";
            let h = 28 * i;
            const y = 14 * i;
            Os.style.fontSize = h + "px", Os.style.whiteSpace = "nowrap", Os.style.width = "auto", Os.style.maxWidth = "none";
            const b = Os.scrollWidth;
            Os.style.whiteSpace = "normal", Os.style.minWidth = m + "px";
            let _ = Math.min(b, f);
            Os.style.maxWidth = _ + "px";
            let v = Os.offsetHeight;
            for (; v > u && _ < f;) _ = Math.min(f, _ + 40), Os.style.maxWidth = _ + "px", v = Os.offsetHeight;
            for (; v > u && h > y;) h -= 1, Os.style.fontSize = h + "px", v = Os.offsetHeight;
            const w = Os.offsetWidth;
            v = Os.offsetHeight;
            let k, S = p >= g ? s + n : s - w - n;
            S = Math.max(n, Math.min(S, o - w - n)), d ? k = Math.max(10, r - v - 10) : (k = r + 10, k + v + 40 > a && (k = Math.max(10, a - v - 40))), Os.style.left = S + "px", Os.style.top = k + "px"
        };
        if (o) {
            const e = o.trim();
            e && a(e)
        } else if ("img" === i || "svg" === i) {
            const e = t.getAttribute("alt");
            e && a(e)
        } else Os.innerText = "", Os.style.display = "none"
    }
}

function Rs(e, t) {
    const i = null !== e.getAttribute("aioa-magnifier");
    return qs(e) && null !== t && !Wi(t, e) && !e.classList.contains("pp-offcanvas-container") && !i || $s(e) && null !== t && !i || "INPUT" === e.tagName && "submit" === e.type && null !== t && !Wi(t, e) && !i
}

function Ns(e) {
    e.getAttribute("aioa-magnifier") || e.setAttribute("aioa-magnifier", "true")
}
const Is = e => {
        const t = e.target,
            i = t.getAttribute("aria-label");
        if (Ls) {
            document.removeEventListener("focusin", e => Ps), document.removeEventListener("mouseover", Ps), Os.style.display = "none", t.setAttribute("aria-pressed", "false"), Ls = !1, i && si(i, "Disable", 1);
            const e = bi();
            e && hi({ ...ri(e),
                text_magnifier: !1
            })
        } else {
            As || Cs(), document.addEventListener("focusin", e => Ps), document.addEventListener("mouseover", Ps), Os.style.display = "block", t.setAttribute("aria-pressed", "true"), Ls = !0, i && si(i, "Enable", 1);
            const e = bi();
            e && hi({ ...ri(e),
                text_magnifier: !0
            })
        }
    },
    Ms = Object.freeze(Object.defineProperty({
        __proto__: null,
        initTextMagnifier: Cs,
        toggleTextMagnifier: Is
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    js = t => {
        const i = t.currentTarget;
        xi();
        (async () => {
            const {
                default: t
            } = await e(() =>
                import ("./muteSounds.js"), []);
            i && t(i)
        })().then(() => {
            Ai()
        })
    };
let Ds = !0;
const Fs = async t => {
        const i = t.currentTarget.getAttribute("aria-label"),
            n = document.querySelector("#accessibility_filter_content_modal"),
            o = document.querySelectorAll("body > *:not(.aioa-widget-wrapper), .aioa-widget-wrapper > *:not(#accessibility_filter_content_modal):not(.simple-keyboard):not(.aioa-notification-group)");
        xi();
        const a = () => {
            if (n)
                if ("block" === window.getComputedStyle(n).display) {
                    n.style.display = "none", n.removeAttribute("aria-modal"), n.removeAttribute("role"), n.setAttribute("aria-hidden", "true"), i && si(i, "Disable", 1), Ds && n.setAttribute("aria-labelledby", "filterContentModalLabel"), pi.text_magnifier && n.removeAttribute("aioa-magnifier");
                    const e = document.documentElement;
                    e && e.classList.remove("filter-content-opened"), o.forEach(e => {
                        e.inert = !1
                    });
                    const t = document.querySelector('div[data-accessibility="filter_content"] button');
                    t && t.setAttribute("aria-pressed", "false"), setTimeout(() => {
                        const e = document.querySelector('[data-accessibility="filter_content"] button');
                        e ? .focus()
                    }, 100)
                } else {
                    const e = document.querySelector("#aioa-filter-content-close-button");
                    if (setTimeout(() => {
                            n.style.display = "block"
                        }, 200), n.setAttribute("aria-modal", "true"), n.setAttribute("role", "dialog"), n.removeAttribute("aria-hidden"), Pi(n), i && si(i, "Enable", 1), "shop.audi-zentrum-goettingen.de" === window.location.hostname || "usab-tm.ro" === window.location.hostname) {
                        const t = window.scrollY;
                        setTimeout(() => {
                            e ? .focus()
                        }, 250), window.scrollTo({
                            top: t,
                            behavior: "auto"
                        })
                    } else setTimeout(() => {
                        e && e.focus()
                    }, 250), setTimeout(() => {
                        const e = document.querySelector(".aioa-modal-content");
                        e ? .scrollTo({
                            top: 0,
                            behavior: "auto"
                        })
                    }, 0);
                    o.forEach(e => {
                        e.inert = !0
                    }), n ? .addEventListener("wheel", function(e) {
                        e.stopPropagation()
                    }, {
                        passive: !1
                    }), pi.text_magnifier && n.setAttribute("aioa-magnifier", "true");
                    const t = document.documentElement;
                    t && t.classList.add("filter-content-opened");
                    const a = document.querySelector('div[data-accessibility="filter_content"] button');
                    a && a.setAttribute("aria-pressed", "true")
                }
            Ai()
        };
        n && (localStorage.setItem("aioReaderIndex", "false"), Ds ? ((async () => {
            const {
                default: t
            } = await e(() =>
                import ("./filterContentPopup.js"), []);
            n && t(n)
        })(), setTimeout(() => {
            a(), Ds = !1;
            const e = document.querySelector('div[data-accessibility="screen_reader"] button');
            if (e) {
                "true" == e.getAttribute("aria-pressed") && (e.click(), setTimeout(() => {
                    window.dispatchEvent(new CustomEvent("clean-screen-reader", {
                        detail: {
                            slug: "screen_reader"
                        }
                    })), localStorage.setItem("aioReaderIndex", "true"), e.click()
                }, 200))
            }
        }, 500)) : a())
    },
    zs = (e, t = 300) => {
        const i = e.getBoundingClientRect();
        return () => {
            const n = e.getBoundingClientRect(),
                o = i.left - n.left,
                a = i.top - n.top;
            if (!o && !a) return;
            e.getAnimations({
                subtree: !1
            }).filter(e => "aioa-flip" === e.id).forEach(e => e.cancel());
            e.animate([{
                translate: `${o}px ${a}px`
            }, {
                translate: "0px 0px"
            }], {
                duration: t,
                easing: "ease",
                fill: "both"
            }).id = "aioa-flip"
        }
    },
    Bs = e => {
        const t = e.currentTarget,
            i = document.querySelector("#aioa-trigger-button"),
            n = i ? .querySelector("button") ? ? null,
            o = n ? .getAttribute("style"),
            a = document.querySelector("#aioa_accessibility_settings"),
            s = document.querySelectorAll('[data-accessibility="accessibility-widget-positions"] .accessibility-widget-positions button'),
            r = document.getElementById("custom_position_styles_element");
        r ? .remove(), n && n.hasAttribute("style") && (n.removeAttribute("style"), localStorage.removeItem("aioa_widget_drag_position"));
        const l = n ? zs(n, 300) : null,
            c = a && "true" === a.getAttribute("aria-expanded") ? zs(a, 300) : null;
        s.forEach(e => {
            const n = e.getAttribute("data-i18n-labelkey");
            if (e.setAttribute("aria-pressed", "false"), n && (i ? .classList.remove(`aioa_${n}`), a ? .classList.remove(`aioa_${n}`)), t === e && n) {
                const t = e.getAttribute("aria-label");
                t && si("Set Widget Position", t), e.setAttribute("aria-pressed", "true"), i ? .classList.add(`aioa_${n}`), a ? .classList.add(`aioa_${n}`);
                const o = bi();
                o && hi({ ...ri(o),
                    user_widget_position: n
                })
            }
            Vi()
        }), requestAnimationFrame(() => {
            l ? .(), c ? .()
        }), n && o && n.setAttribute("style", o)
    };

function Us({
    className: e = "slow_cursor",
    speed: t = .1
} = {}) {
    const i = document.getElementById(e);
    if (!i) return;
    const n = bi(),
        o = i;
    let a = 0,
        s = 0,
        r = 0,
        l = 0,
        c = !1;
    document.addEventListener("mousemove", function(e) {
        const t = function(e) {
            let t = 1,
                i = e;
            for (; i;) {
                const e = parseFloat(getComputedStyle(i).zoom);
                isNaN(e) || 0 === e || (t *= e), i = i.parentElement
            }
            return t || 1
        }(o);
        a = e.clientX / t, s = e.clientY / t, c || (r = a, l = s, c = !0)
    }, {
        passive: !0
    });
    const d = new WeakSet,
        u = () => {
            document.querySelectorAll("iframe").forEach(e => {
                d.has(e) || (d.add(e), e.addEventListener("mouseenter", () => {
                    o.style.display = "none"
                }), e.addEventListener("mouseleave", () => {
                    pi.slow_cursor && (o.style.display = "block")
                }))
            })
        };
    u();
    new MutationObserver(() => {
        u()
    }).observe(document.body, {
        childList: !0,
        subtree: !0
    });
    const p = () => {
        c && (r += (a - r) * (n.reading_guide || n.read_mode ? .15 : t), l += (s - l) * (n.reading_guide || n.read_mode ? .15 : t), o.style.left = `${r}px`, o.style.top = `${l}px`), requestAnimationFrame(p)
    };
    p()
}
let Hs = null;
const Vs = e => {
    const t = F.t,
        i = document.querySelector("html"),
        n = e.currentTarget,
        o = n.getAttribute("data-i18n-labelkey");
    if (Hs === o) {
        Hs = null, n.setAttribute("aria-pressed", "false"), o && i ? .classList.remove(o);
        const e = document.getElementById("slow-cursor-style");
        e && e.remove();
        const a = document.getElementById("slow_cursor");
        if (a && (a.style.display = "none"), o) {
            si(t(o), "Disable", 1);
            const e = bi();
            e && hi({ ...ri(e),
                [o]: !1
            })
        }
    } else {
        let e = {};
        if (["big_black_cursor", "big_white_cursor", "slow_cursor"].map(t => {
                i ? .classList.remove(t), e = { ...e,
                    [t]: !1
                };
                const n = document.querySelector(`[data-accessibility="${t}"] button`);
                n ? .setAttribute("aria-pressed", "false")
            }), Hs = o, n.setAttribute("aria-pressed", "true"), o && i ? .classList.add(o), "slow_cursor" === o && Hs == o) {
            const e = "\n               * {\n                    cursor: none !important;\n                }\n                \n                .FubTgk[aria-disabled=false] .uDW_Qe {\n                    cursor: none !important;\n                }\n            ",
                t = document.createElement("style");
            t.type = "text/css", t.id = "slow-cursor-style", t.appendChild(document.createTextNode(e)), (document.head || document.getElementsByTagName("head")[0]).appendChild(t);
            const i = document.getElementById("slow_cursor");
            i && (i.style.display = "block"), window.__originalRAF && (window.requestAnimationFrame = window.__originalRAF), Us()
        } else {
            const e = document.getElementById("slow-cursor-style");
            e && e.remove();
            const t = document.getElementById("slow_cursor");
            t && (t.style.display = "none")
        }
        if (o) {
            si(t(o), "Enable", 1);
            const i = bi();
            i && hi({ ...ri(i),
                ...e,
                [o]: !0
            })
        }
    }
};
let Ws = !1;

function Ks() {
    if (document.querySelector(".blue-light-filter")) return;
    const e = document.createElement("div");
    e.className = "blue-light-filter", e.innerHTML = " ", e.style.cssText = "\n    position: fixed;\n    inset: 0;\n    width: auto !important;\n    height: auto !important;\n    background-color: rgba(255, 150, 0, 0.2);\n    z-index: 2147483647;\n    user-select: none;\n    pointer-events: none;\n    opacity: 0;\n    transition: opacity 300ms ease-in;\n  ", document.body.appendChild(e), e.offsetHeight, e.style.opacity = "1"
}
const Js = e => {
    const t = e.currentTarget,
        i = t.getAttribute("aria-label");
    if (Ws) {
        t.setAttribute("aria-pressed", "false"), Ws = !1,
            function() {
                const e = document.querySelector(".blue-light-filter");
                e && (e.style.opacity = "0", window.setTimeout(() => {
                    e.remove()
                }, 300))
            }(), i && si(i, "Disable", 1);
        const e = bi();
        e && hi({ ...ri(e),
            blue_light_filter: !1
        })
    } else {
        t.setAttribute("aria-pressed", "true"), Ws = !0, Ks(), i && si(i, "Enable", 1);
        const e = bi();
        e && hi({ ...ri(e),
            blue_light_filter: !0
        })
    }
};
let Gs = !1;
const Xs = document.querySelector("html"),
    Ys = e => {
        const t = e.currentTarget,
            i = t.getAttribute("aria-label");
        if (Gs) {
            t.setAttribute("aria-pressed", "false"), Gs = !1, Xs.classList.remove("aioa-dark-mode"), i && si(i, "Disable", 1);
            const e = bi();
            e && hi({ ...ri(e),
                darkMode: !1
            })
        } else {
            t.setAttribute("aria-pressed", "true"), Gs = !0, Xs.classList.add("aioa-dark-mode"), i && si(i, "Enable", 1);
            const e = bi();
            e && hi({ ...ri(e),
                darkMode: !0
            })
        }
    };
let Qs = !1,
    Zs = !1;
const er = document.querySelector("html"),
    tr = () => {
        const e = document.querySelector(".fresh_filter");
        if (e) {
            const t = e.querySelectorAll(".CategoryTree .caret");
            t.length && t.forEach(e => {
                e.setAttribute("tabindex", "0")
            })
        }
        Zs = !0
    },
    ir = e => {
        const t = e.currentTarget,
            i = t.getAttribute("aria-label");
        if (Zs || ("interactive" === document.readyState ? tr() : document.addEventListener("DOMContentLoaded", tr)), Qs) {
            er ? .classList.remove("highlight-focus"), t.setAttribute("aria-pressed", "false"), Qs = !1, i && si(i, "Disable", 1);
            const e = bi();
            e && hi({ ...ri(e),
                highlight_focus: !1
            })
        } else {
            er ? .classList.add("highlight-focus"), t.setAttribute("aria-pressed", "true"), Qs = !0, i && si(i, "Enable", 1);
            const e = bi();
            e && hi({ ...ri(e),
                highlight_focus: !0
            })
        }
    };
let nr = !1;
const or = window.location.hostname.includes("neuroeducationaltesting.com");
let ar = null;
const sr = e => {
    const t = e.currentTarget,
        i = t.getAttribute("aria-label");
    let n = document.querySelectorAll(or ? "img" : 'img, svg, [role="img"]');
    const o = document.querySelectorAll("body *:not(.aioa-widget-wrapper, .aioa-widget-wrapper *, script, .elementor-custom-embed-image-overlay)"),
        a = document.querySelector(".aioa-widget-wrapper");
    if (nr) {
        ar && (ar.disconnect(), ar = null), n && n.forEach(e => {
            a && !Wi(a, e) && e.style.removeProperty("visibility")
        }), o && o.forEach(e => {
            const t = e.getAttribute("data-org-img");
            t && (e.style.setProperty("background-image", t), e.removeAttribute("data-org-img")), (e.classList.contains("crt-video-container") || e.classList.contains("header33_background-video")) && e.style.removeProperty("visibility"), e.classList.remove("aioa-hide-after-bg"), e.classList.remove("aioa-hide-before-bg")
        }), document.body.classList.remove("aioa-hide-canvas"), t.setAttribute("aria-pressed", "false"), nr = !1, i && si(i, "Disable", 1);
        const e = bi();
        e && hi({ ...ri(e),
            hide_images: !1
        })
    } else {
        n && n.forEach(e => {
            !a || Wi(a, e) || e.classList.contains("wixui-checkbox__icon") || e.classList.contains("e-fas-play") || e.style.setProperty("visibility", "hidden", "important")
        }), o && o.forEach(e => {
            const t = window.getComputedStyle(e),
                i = window.getComputedStyle(e, "::after"),
                n = window.getComputedStyle(e, "::before");
            "none" !== t.backgroundImage && t.backgroundImage.includes("url(") && (e.setAttribute("data-org-img", t.backgroundImage), e.style.setProperty("background-image", "none", "important")), (e.classList.contains("crt-video-container") || e.classList.contains("header33_background-video")) && e.style.setProperty("visibility", "hidden", "important"), "none" !== i.backgroundImage && i.backgroundImage.includes("url(") && e.classList.add("aioa-hide-after-bg"), "none" !== n.backgroundImage && n.backgroundImage.includes("url(") && e.classList.add("aioa-hide-before-bg")
        }), document.querySelectorAll('.imageEffectContainer[data-effect*="parallax"]').length > 0 && document.body.classList.add("aioa-hide-canvas"), ar || (ar = new MutationObserver(() => {
            document.querySelectorAll(or ? "img" : 'img, svg, [role="img"]').forEach(e => {
                a && Wi(a, e) || e.style.setProperty("visibility", "hidden", "important")
            }), n = document.querySelectorAll(or ? "img" : 'img, svg, [role="img"]')
        }), ar.observe(document.body, {
            childList: !0,
            subtree: !0
        })), t.setAttribute("aria-pressed", "true"), nr = !0, i && si(i, "Enable", 1);
        const e = bi();
        e && hi({ ...ri(e),
            hide_images: !0
        })
    }
};
let rr = !1;
const lr = document.querySelector("html"),
    cr = e => {
        const t = e.currentTarget,
            i = t.getAttribute("aria-label");
        if (rr) {
            lr ? .classList.remove("highlight-links"), t.setAttribute("aria-pressed", "false"), rr = !1, i && si(i, "Disable", 1);
            const e = bi();
            e && hi({ ...ri(e),
                highlight_links: !1
            })
        } else {
            lr ? .classList.add("highlight-links"), t.setAttribute("aria-pressed", "true"), rr = !0, i && si(i, "Enable", 1);
            const e = bi();
            e && hi({ ...ri(e),
                highlight_links: !0
            })
        }
    };
let dr = !1;
const ur = document.querySelector("html"),
    pr = e => {
        const t = e.currentTarget,
            i = t.getAttribute("aria-label");
        if (dr) {
            ur ? .classList.remove("highlight-title"), t.setAttribute("aria-pressed", "false"), dr = !1, i && si(i, "Disable", 1);
            const e = bi();
            e && hi({ ...ri(e),
                highlight_titles: !1
            })
        } else {
            ur ? .classList.add("highlight-title"), t.setAttribute("aria-pressed", "true"), dr = !0, i && si(i, "Enable", 1);
            const e = bi();
            e && hi({ ...ri(e),
                highlight_titles: !0
            })
        }
    };
let gr = !1,
    mr = !1;
const fr = document.querySelector("html");

function hr(e, t = "::before") {
    const i = window.getComputedStyle(e, t).getPropertyValue("content");
    return i && "none" !== i && '""' !== i && "''" !== i
}

function yr() {
    const e = document.querySelector(".aioa-widget-wrapper"),
        t = document.querySelector(".simple-keyboard");
    Ki.forEach(i => {
        let n = document.querySelectorAll(i);
        n.length && n.forEach(i => {
            if (!Wi(t, i) && i.childNodes) {
                const t = i.childNodes;
                let n = !1;
                t.forEach(t => {
                    const o = t.nodeType,
                        a = t.nodeValue;
                    o === Node.TEXT_NODE && a && "" !== a.trim() && (n = !0);
                    const s = t;
                    "INPUT" === s.tagName && "submit" === s.type && s.setAttribute("aioa-highlight-hover", "true");
                    const r = null !== i.closest(".accessibility-modal-button-bottom-group");
                    o === Node.ELEMENT_NODE && e && !r && e.contains(t) && "BUTTON" === t.tagName && t.textContent ? .trim() && (n = !0)
                }), n && i.setAttribute("aioa-highlight-hover", "true"), hr(i, "::before") && i.setAttribute("aioa-highlight-hover-before", "true"), hr(i, "::after") && i.setAttribute("aioa-highlight-hover-after", "true")
            }
        })
    })
}
const br = $i(() => yr()),
    _r = new MutationObserver(br),
    vr = e => {
        const t = e.currentTarget,
            i = t.getAttribute("aria-label");
        if (gr) {
            fr.classList.remove("highlight-hover"), t.setAttribute("aria-pressed", "false"), gr = !1, _r.disconnect(), i && si(i, "Disable", 1);
            const e = bi();
            e && hi({ ...ri(e),
                highlight_hover: !1
            })
        } else {
            mr || (yr(), mr = !0);
            const e = document.querySelector("body");
            fr.classList.add("highlight-hover"), t.setAttribute("aria-pressed", "true"), gr = !0, e && _r.observe(e, {
                attributes: !1,
                childList: !0,
                subtree: !0
            }), i && si(i, "Enable", 1);
            const n = bi();
            n && hi({ ...ri(n),
                highlight_hover: !0
            })
        }
    };
let wr = !1,
    kr = null;
const Sr = e => !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length),
    Er = '\n  a[href],\n  button:not([disabled]),\n  input:not([disabled]),\n  textarea:not([disabled]),\n  select:not([disabled]),\n  [tabindex]:not([tabindex="-1"])\n';

function xr(e) {
    e.matches ? .(Er) && Sr(e) && e.classList.add("aioa-focus-visible"), e.querySelectorAll ? .(Er).forEach(e => {
        Sr(e) && e.classList.add("aioa-focus-visible")
    })
}
const Ar = e => {
    const t = e.currentTarget,
        i = t.getAttribute("aria-label");
    if (wr) {
        t.setAttribute("aria-pressed", "false"), wr = !1, document.querySelectorAll(".aioa-focus-visible").forEach(e => {
                e.classList.remove("aioa-focus-visible")
            }),
            function() {
                const e = document.getElementById("aioa-focus-visible");
                e && e.remove()
            }(), kr && (kr.disconnect(), kr = null), i && si(i, "Disable", 1);
        const e = bi();
        e && hi({ ...ri(e),
            focus_indicator: !1
        })
    } else {
        t.setAttribute("aria-pressed", "true"), wr = !0,
            function() {
                if (document.querySelector("#aioa-focus-visible")) return;
                const e = document.createElement("style");
                e.type = "text/css", e.id = "aioa-focus-visible", e.appendChild(document.createTextNode("\n    .aioa-focus-visible:not(.aioa-widget-wrapper, .aioa-widget-wrapper *):not(.highlight-links a) {\n      outline: 3px solid #ffc107 !important;\n      outline-offset: 2px !important;\n      box-shadow: 0 0 0 2px #000000 !important;\n    }\n  ")), (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
            }(), document.querySelectorAll(Er).forEach(e => {
                xr(e)
            }), kr || (kr = new MutationObserver(e => {
                e.forEach(e => {
                    e.addedNodes.forEach(e => {
                        1 === e.nodeType && xr(e)
                    })
                })
            }), kr.observe(document.body, {
                childList: !0,
                subtree: !0
            })), i && si(i, "Enable", 1);
        const e = bi();
        e && hi({ ...ri(e),
            focus_indicator: !0
        })
    }
};
let Lr = !0;
let Tr = !1;

function Or() {
    const e = new CustomEvent("subtitle-disable-flag");
    window.dispatchEvent(e)
}
const Cr = e => {
        const t = e.currentTarget,
            i = t.getAttribute("aria-label");
        if (Tr) {
            t.setAttribute("aria-pressed", "false"), Tr = !1, i && si(i, "Disable", 1), Or();
            const e = bi();
            e && hi({ ...ri(e),
                subtitle_on_video: !1
            })
        } else {
            t.setAttribute("aria-pressed", "true"), Tr = !0, i && si(i, "Enable", 1);
            const e = bi(),
                n = "https://www.skynettechnologies.com/accessibility/js/video-subtitle/video-subtitle-widget.js";
            if (document.querySelector(`script#video-subtitle-widget, script[src="${n}"]`)) ! function() {
                const e = new CustomEvent("subtitle-enable-flag");
                window.dispatchEvent(e)
            }();
            else {
                const e = document.createElement("script");
                e.id = "video-subtitle-widget", e.async = !0, e.src = n, document.body.appendChild(e)
            }
            e && hi({ ...ri(e),
                subtitle_on_video: !0
            })
        }
    },
    qr = 'button:not(.mousegrid-cell):not(.mousegrid-back-btn):not(.mousegrid-show-btn), a[href], [role="button"], input[type="button"], input[type="submit"], input[type="checkbox"], input[type="radio"], select, label[for], [onclick], [tabindex]:not([tabindex="-1"])';
let $r = !1;
const Pr = function(e = {}) {
        const t = e.rows ? ? 3,
            i = e.cols ? ? 3,
            n = e.maxDepth ? ? 4,
            o = e.zoomSpeed ? ? 300,
            a = e.triggerSelectors ? ? [],
            s = F.t,
            r = {
                show: "Show Mouse Grid",
                back: "back",
                instructions: "Press number keys 1-9 to zoom, Enter to click, Escape to exit",
                maxDepth: "Maximum zoom depth reached",
                clickSuccess: "Clicked: {element}",
                clickFailed: "No clickable element found",
                gridActivated: "Mouse grid activated",
                gridDeactivated: "Mouse grid deactivated",
                tooSmall: "Grid too small to navigate — resetting",
                ...e.locale
            };
        let l = null,
            c = null,
            d = null,
            u = null,
            p = !0,
            g = 1,
            m = t * i,
            f = !1,
            h = new Map,
            y = [];
        e.minCellSize;
        const b = e.onCellClick,
            _ = e.onExit,
            v = e.onElementClick,
            w = e.onZoomChange;

        function k() {
            l = document.createElement("div"), l.className = "mousegrid-wrapper", c = document.createElement("div"), c.className = "mousegrid-overlay", c.style.gridTemplateColumns = `repeat(${i}, 1fr)`, c.style.gridTemplateRows = `repeat(${t}, 1fr)`,
                function() {
                    if (!c) return;
                    for (let e = 1; e <= m; e++) {
                        const t = document.createElement("button");
                        t.className = "mousegrid-cell", t.dataset.number = String(e);
                        const i = document.createElement("span");
                        i.className = "mousegrid-number", i.innerText = String(e), t.appendChild(i), t.addEventListener("click", i => {
                            i.stopPropagation(), S(t), A(e)
                        }), t.addEventListener("dblclick", e => {
                            e.stopPropagation(), e.preventDefault(), S(t), T()
                        }), c.appendChild(t), h.set(e, t)
                    }
                }(), d = document.createElement("button"), d.className = "mousegrid-back-btn", d.innerText = s(r.back), d.style.display = "none", d.addEventListener("click", e => {
                    e.stopPropagation(), e.preventDefault(), L()
                }), l.appendChild(d), u = document.createElement("button"), u.className = "mousegrid-show-btn", u.innerText = r.show, u.style.display = "none", u.addEventListener("click", M), document.body.appendChild(u), l.appendChild(c), document.body.appendChild(l),
                function() {
                    const e = "mousegrid-styles";
                    if (document.getElementById(e)) return;
                    const t = document.createElement("style");
                    t.id = e, t.textContent = "\n            .mousegrid-wrapper {\n                position: fixed;\n                top: 0;\n                left: 0;\n                width: 100% !important;\n                height: 100%;\n                border-radius: 8px;\n                z-index: 999998;\n                will-change: top, left, width, height;\n                background-color: rgba(0, 0, 0, 0.3) !important;\n            }\n\n            .mousegrid-overlay {\n                display: flex;\n                flex-wrap: wrap;\n                height: 100%;\n                direction: ltr;\n                width: 100% !important;\n                pointer-events: auto;\n            }\n\n            .mousegrid-cell {\n                position: relative;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                background: rgba(255, 255, 255, 0.15) !important;\n                border: 2px solid rgba(255, 255, 255, 0.5) !important;\n                border-radius: 8px !important;\n                cursor: pointer;\n                transition: background 0.15s ease, border-color 0.15s ease, transform 0.15s ease;\n                font-size: 24px;\n                font-weight: bold;\n                color: white;\n                text-shadow: 1px 1px 2px black;\n                height: calc(100% / 3);\n                width: calc(100% / 3) !important;\n                padding: 0 !important;\n            }\n\n            .mousegrid-cell:hover,\n            .mousegrid-cell:focus-visible {\n                background: rgba(255, 255, 255, 0.3) !important;\n                border-color: rgba(255, 255, 255, 0.9) !important;\n                transform: scale(1.02);\n                outline: none;\n            }\n\n            .mousegrid-number {\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                gap: 4px;\n                color: white !important;\n                pointer-events: none;\n            }\n\n            .mousegrid-back-btn {\n                position: fixed;\n                background: var(--accessibility-widget-primary-color, $primary) !important;\n                color: var(--accessibility-widget-text-color, $white) !important;\n                border: none;\n                border-radius: 8px;\n                font-size: 16px;\n                cursor: pointer;\n                padding: 5px 10px;\n                z-index: 1000000;\n                transition: background 0.2s ease;\n                text-align: center;\n            }\n\n            .mousegrid-back-btn:hover { background: var(--accessibility-widget-primary-color, $primary) !important; transform: scale(1.05); }\n\n            .mousegrid-show-btn {\n                position: fixed;\n                bottom: 20px;\n                right: 20px;\n                padding: 12px 24px;\n                background: #2196F3 !important;\n                color: white;\n                border: none;\n                border-radius: 8px;\n                font-size: 16px;\n                cursor: pointer;\n                z-index: 1000000;\n                box-shadow: 0 2px 8px rgba(0,0,0,0.2) !important;\n                transition: background 0.2s ease, transform 0.2s ease;\n            }\n\n            .mousegrid-show-btn:hover { background: #1976D2 !important; transform: scale(1.05); }\n\n            .mousegrid-toast {\n                position: fixed;\n                bottom: 80px;\n                left: 50%;\n                transform: translateX(-50%) translateY(8px);\n                background: rgba(0, 0, 0, 0.85) !important;\n                color: white;\n                padding: 10px 18px;\n                border-radius: 6px;\n                z-index: 1000001;\n                font-size: 14px;\n                opacity: 0;\n                transition: opacity 0.2s ease, transform 0.2s ease;\n                pointer-events: none;\n                white-space: nowrap;\n            }\n\n            .mousegrid-toast-visible {\n                opacity: 1;\n                transform: translateX(-50%) translateY(0);\n            }\n\n            @keyframes mousegridPulse {\n                0%, 100% { transform: scale(1); }\n                50% { transform: scale(1.05); background: rgba(255, 215, 0, 0.4); }\n            }\n\n            .mousegrid-cell-active {\n                animation: mousegridPulse 0.3s ease;\n            }\n\n            html.invert_colors .mousegrid-wrapper {\n                filter: invert(1) !important;\n            }\n        ", document.head.appendChild(t)
                }(), window.addEventListener("resize", x)
        }

        function S(e) {
            e && e.focus()
        }

        function E() {
            const e = Math.max(12, 24 - 4 * (g - 1));
            h.forEach(t => {
                const i = t.querySelector(".mousegrid-number");
                i && (i.style.fontSize = `${e}px`)
            })
        }

        function x() {
            p || (! function() {
                if (!l) return !1;
                const e = l.getBoundingClientRect(),
                    t = window.innerWidth,
                    i = window.innerHeight;
                if (e.right < 0 || e.bottom < 0 || e.left > t || e.top > i) return !1;
                const n = Math.min(e.right, t) - Math.max(e.left, 0),
                    o = Math.min(e.bottom, i) - Math.max(e.top, 0);
                return !(n < 50 || o < 50)
            }() ? C() : I())
        }

        function A(e) {
            const t = h.get(e);
            if (!t || !l) return !1;
            if (g >= n) return T(), !1;
            if (f) return setTimeout(() => A(e), 50), !1;
            ! function() {
                if (!l) return;
                const e = l.getBoundingClientRect();
                y.push({
                    top: e.top,
                    left: e.left,
                    width: e.width,
                    height: e.height,
                    depth: g
                })
            }();
            const i = t.getBoundingClientRect(),
                o = {
                    top: i.top,
                    left: i.left,
                    width: i.width,
                    height: i.height
                };
            return g++, E(), d && (d.style.display = "block"), P(l, o, !0, () => {
                    w ? .(g, n)
                }), b ? .(e, t),
                function(e) {
                    e.classList.add("mousegrid-cell-active"), setTimeout(() => e.classList.remove("mousegrid-cell-active"), 300)
                }(t), !0
        }

        function L() {
            if (g <= 1) return !1;
            if (f) return setTimeout(() => L(), 50), !1;
            const e = y.pop();
            return !!e && (g--, E(), P(l, {
                top: e.top,
                left: e.left,
                width: e.width,
                height: e.height
            }, !0, () => {
                1 === g && d && (d.style.display = "none"), w ? .(g, n)
            }), !0)
        }

        function T() {
            if (!l) return !1;
            const e = l.getBoundingClientRect(),
                t = e.left + e.width / 2,
                i = e.top + e.height / 2;
            l.style.display = "none", document.body.offsetHeight;
            const n = function(e, t, i) {
                const n = Math.min(i.width, i.height) / 6,
                    o = [
                        [0, 0],
                        [0, -n],
                        [0, n],
                        [-n, 0],
                        [n, 0],
                        [-n, -n],
                        [n, -n],
                        [-n, n],
                        [n, n]
                    ];
                for (const [a, s] of o) {
                    const n = e + a,
                        o = t + s;
                    if (n < i.left || n > i.right || o < i.top || o > i.bottom) continue;
                    const r = document.elementFromPoint(n, o);
                    if (!r) continue;
                    const l = (r.matches(qr) ? r : null) ? ? r.closest(qr);
                    if (l) return l
                }
                return null
            }(t, i, e);
            return l.style.display = "", n ? (function(e) {
                v ? .(e);
                const t = e.tagName.toLowerCase(),
                    i = (() => {
                        if ("a" !== t) return !1;
                        const i = e.getAttribute("href") ? ? "";
                        return !(!i || i.startsWith("javascript:") || i.startsWith("mailto:"))
                    })(),
                    n = (() => {
                        if ("a" !== t) return !1;
                        const i = e.getAttribute("href") ? ? "";
                        return !!i.startsWith("/") || (!!i.startsWith("javascript:") || i.startsWith("#") && i.length > 1)
                    })(),
                    o = (() => {
                        const t = e.getAttribute("data-toggle") ? ? e.getAttribute("data-bs-toggle") ? ? "",
                            i = e.getAttribute("aria-haspopup") ? ? "",
                            n = e.getAttribute("aria-controls") ? ? "",
                            o = e.hasAttribute("aria-expanded"),
                            a = e.getAttribute("data-target") ? ? e.getAttribute("data-bs-target") ? ? "";
                        if (["modal", "dialog", "popup", "dropdown"].includes(t)) return !0;
                        if (["dialog", "listbox", "tree", "grid", "menu"].includes(i)) return !0;
                        if (o) return !0;
                        if (n) return !0;
                        if (a && (a.includes("modal") || a.includes("dialog"))) return !0;
                        if (e.hasAttribute("data-fancybox-type")) return !0;
                        if (e.hasAttribute("data-fancybox")) return !0;
                        if (e.hasAttribute("data-lightbox")) return !0;
                        if (e.hasAttribute("data-featherlight")) return !0;
                        if (["popupform", "js-modal", "js-popup", "open-modal", "open-popup", "fancybox"].some(t => e.classList.contains(t))) return !0;
                        const s = e.getAttribute("href") ? ? "";
                        return !(!s || !(s.includes("/popup") || s.includes("/modal") || s.includes("#modal") || s.includes("?popup") || s.includes("?modal")))
                    })(),
                    s = a.length > 0 && a.some(t => {
                        try {
                            return e.matches(t) || !!e.closest(t)
                        } catch {
                            return !1
                        }
                    });
                try {
                    if (n) N(r.clickSuccess.replace("{element}", t)), e.click(), C();
                    else if (o || s) {
                        N(r.clickSuccess.replace("{element}", t));
                        const i = document.getElementById("accessibility_settings_toggle");
                        if (i ? .contains(e)) return;
                        D("popup"), setTimeout(() => {
                            e.click(), O()
                        }, 50)
                    } else i ? (N(r.clickSuccess.replace("{element}", t)), C(), setTimeout(() => e.click(), 50)) : C()
                } catch {
                    N(r.clickFailed)
                }
            }(n), !0) : (C(), !1)
        }

        function O() {
            if (!document.documentElement.classList.contains("accessibility_modal_opened")) {
                const e = document.querySelector('div[data-accessibility="focus_locator"] button');
                e && "true" === e.getAttribute("aria-pressed") && e.click();
                const t = document.querySelector("#accessibility_settings_toggle");
                setTimeout(() => {
                    t && t.focus()
                }, 50)
            }
        }

        function C() {
            f ? setTimeout(() => C(), 50) : (g = 1, E(), y = [], l && (l.style.transition = "", l.style.top = "0", l.style.left = "0", l.style.setProperty("width", "100%", "important"), l.style.setProperty("height", "100%", "important"), l.style.position = "fixed", l.offsetHeight), d && (d.style.display = "none"), w ? .(g, n))
        }

        function q(e) {
            const t = document.querySelector(e);
            return !(!t || "block" !== window.getComputedStyle(t).display)
        }

        function $(e) {
            if (!p && !q("#accessibility_dictionary_modal") && !q("#accessibility_language_modal")) {
                if (/^[1-9]$/.test(e.key)) {
                    e.preventDefault();
                    const t = Number(e.key),
                        i = h.get(t);
                    return i && S(i), void A(Number(e.key))
                }
                switch (e.key) {
                    case "Enter":
                        e.preventDefault(), T();
                        break;
                    case "Escape":
                        e.preventDefault(), O();
                        break;
                    case "-":
                    case "Backspace":
                        e.preventDefault(), L()
                }
            }
        }

        function P(e, t, i = !1, n) {
            i ? (f = !0, e.style.transition = `top ${o}ms ease, left ${o}ms ease, width ${o}ms ease, height ${o}ms ease`, setTimeout(() => {
                e && (e.style.transition = ""), f = !1, n && n(), I()
            }, o + 50)) : (e.style.transition = "", f = !1, n && n()), e.style.position = "fixed", e.style.top = `${t.top}px`, e.style.left = `${t.left}px`, e.style.setProperty("width", `${t.width}px`, "important"), e.style.setProperty("height", `${t.height}px`, "important"), e.offsetHeight
        }

        function R() {
            f ? setTimeout(() => R(), 50) : (g = 1, E(), y = [], l && (l.style.transition = "", l.style.top = "0", l.style.left = "0", l.style.setProperty("width", "100%", "important"), l.style.setProperty("height", "100%", "important")), d && (d.style.display = "none"))
        }

        function N(e) {
            const t = document.createElement("div");
            t.className = "mousegrid-toast", t.innerText = e, document.body.appendChild(t), requestAnimationFrame(() => t.classList.add("mousegrid-toast-visible")), setTimeout(() => {
                t.classList.remove("mousegrid-toast-visible"), setTimeout(() => t.remove(), 300)
            }, 2e3)
        }

        function I() {
            if (!d || !l) return;
            const e = l.getBoundingClientRect(),
                t = window.innerHeight / 2,
                i = e.top + e.height / 2;
            d.style.left = `${e.left}px`, i <= t ? (d.style.top = `${e.bottom+4}px`, d.style.bottom = "") : (d.style.bottom = window.innerHeight - e.top + 4 + "px", d.style.top = "")
        }

        function M() {
            l || (k(), document.addEventListener("keydown", $)), R(), l.style.display = "", p = !1, z(r.gridActivated)
        }

        function j() {
            l && (l.style.display = "none", p = !0, R())
        }

        function D(e) {
            j(), _ ? .(e), z(r.gridDeactivated)
        }

        function z(e) {}
        return {
            start: M,
            stop: j,
            exit: D,
            destroy: function() {
                document.removeEventListener("keydown", $), l ? .remove(), d ? .remove(), u ? .remove(), l = null, c = null, h.clear()
            },
            isVisible: function() {
                return !p
            }
        }
    }(),
    Rr = t => {
        const i = t.currentTarget,
            n = i.getAttribute("aria-label");
        if (document.documentElement.classList.contains("accessibility_modal_opened")) {
            const e = document.querySelector("#accessibility-modal-close-button");
            e ? .click()
        }
        if ($r) {
            i.setAttribute("aria-pressed", "false"), $r = !1, Pr.destroy(), n && si(n, "Disable", 1);
            const e = bi();
            e && hi({ ...ri(e),
                focus_locator: !1
            }), window.dispatchEvent(new CustomEvent("feature-updated", {
                detail: {
                    slug: "focus_locator"
                }
            }))
        } else {
            i.setAttribute("aria-pressed", "true"), $r = !0;
            const t = bi();
            if (t.content_scaling) {
                (async t => {
                    const {
                        changeContentScaling: i
                    } = await e(() => Promise.resolve().then(() => un), void 0);
                    i(t)
                })(100 - t.content_scaling)
            }
            Pr.start(), n && si(n, "Enable", 1), t && hi({ ...ri(t),
                focus_locator: !0
            }), window.dispatchEvent(new CustomEvent("feature-updated", {
                detail: {
                    slug: "focus_locator"
                }
            }))
        }
    };
let Nr = !0,
    Ir = !0,
    Mr = null,
    jr = [],
    Dr = null,
    Fr = [];
var zr = new Audio;
let Br = "en-US",
    Ur = "en-US-Standard-F",
    Hr = "FEMALE";
var Vr = [],
    Wr = !1,
    Kr = !1;
const Jr = async () => {
        const e = document.getElementById("summarise_page_audio");
        const t = bi();
        if (t.active_language && Fr.length > 0 && "es-mx" !== t.active_language) {
            var i = t.active_language;
            "en-ZA" === t.active_language && (i = "en-US");
            const a = (o = i, (n = Fr) && Array.isArray(n) ? n.filter(e => e.languageCodes.some(e => e.toLowerCase().startsWith(o))) : []);
            if (a.length > 0 && await zi()) {
                Kr = !0;
                const t = a.filter(e => e.name.includes("-"));
                Br = t.length > 0 ? t[0].languageCodes[0] : a[0].languageCodes[0], Ur = t.length > 0 ? t[0].name : a[0].name, Hr = t.length > 0 ? t[0].ssmlGender : a[0].ssmlGender, e && (e.style.display = "flex")
            } else Kr = !1, e && (e.style.display = "none")
        } else Kr = !0, e && (e.style.display = "flex");
        var n, o
    },
    Gr = async t => {
        const i = F.t,
            n = document.querySelector("#accessibility_summarise_modal"),
            o = document.querySelectorAll("body > *:not(.aioa-widget-wrapper), .aioa-widget-wrapper > *:not(#accessibility_summarise_modal):not(.simple-keyboard):not(.aioa-notification-group)");
        n && n.getAttribute("lang");
        const a = new FormData,
            s = document.body.cloneNode(!0);
        s.querySelectorAll(".aioa-widget-wrapper, script, style, noscript").forEach(e => e.remove());
        const r = s.innerText.replace(/\s+/g, " ").trim(),
            l = bi();
        a.append("content", r), a.append("lang_code", Fi[l.active_language || "en"]);
        const c = t.currentTarget.getAttribute("aria-label");
        window.addEventListener("LanguageUpdated", e => {
            Mr = null, Nr = !0, Ir = !0, Jr()
        }), Nr && xi();
        const d = async () => {
            if (n)
                if ("block" === window.getComputedStyle(n).display) {
                    n.style.display = "none", n.removeAttribute("aria-modal"), n.removeAttribute("role"), Nr = !0, n.setAttribute("aria-hidden", "true"), c && si("Close Accessibility Statement Modal", c), pi.text_magnifier && n.removeAttribute("aioa-magnifier"), Wr = !1, Dr && (Dr.pause(), Dr.currentTime = 0);
                    const e = document.documentElement;
                    e && e.classList.remove("statement-opened"), o.forEach(e => {
                        e.inert = !1
                    }), setTimeout(() => {
                        const e = document.querySelector('[data-accessibility="summarize_page"] button');
                        e ? .focus()
                    }, 100)
                } else {
                    const t = document.querySelector("#aioa-summarise-close-button");
                    n.style.display = "block", n.setAttribute("aria-modal", "true"), n.setAttribute("role", "dialog"), n.removeAttribute("aria-hidden"), Nr = !1, setTimeout(() => {
                        t && t.focus()
                    }, 200), Pi(n), c && si("Open Accessibility Statement Modal", c), pi.text_magnifier && n.setAttribute("aioa-magnifier", "true");
                    const s = document.documentElement;
                    if (s && s.classList.add("statement-opened"), Wr = !0, o.forEach(e => {
                            e.inert = !0
                        }), n ? .addEventListener("wheel", function(e) {
                            e.stopPropagation()
                        }, {
                            passive: !1
                        }), !Mr) {
                        const t = document.querySelector('[data-accessibility="summarize_page"] button .aioa-icon');
                        t ? .classList.add("summarise-loading");
                        try {
                            const e = await ai.post("https://ada.skynettechnologies.us/api/page-summary", a);
                            Mr = e.data.Data
                        } catch (e) {} finally {
                            t ? .classList.remove("summarise-loading")
                        }
                    }
                    const r = document.querySelector("#accessibility_summarise_modal .aioa-modal-content");
                    if (r) {
                        r.innerHTML = `\n                            <div role="heading" aria-level="2" class="h2" id="hideModalLabel" data-i18n-key="hide_accessibility_interface" aioa-magnifier="${!!pi.text_magnifier}" style="text-transform: capitalize !important;">${i("summarize_page")}</div>\n                            \n                            <div class="summary-content">\n                                ${Mr}\n                            </div>\n                            <div class="accessibility-hide-buttons" style="display: ${pi.screen_reader||!Kr?"none":"flex"}">\n                                <button\n                                    id="play-summary-audio"\n                                    type="button"\n                                    class="play-audio-btn accessibility-hide-accept-button aioa-tooltip"\n                                    aria-label="Play summary audio"\n                                    data-i18n-labelkey="play_audio"\n                                    data-accessibility-tooltip="Shift + P"\n                                >\n                                    ▶ ${i("play_audio")}\n                                </button>\n                            </div>\n                    `, requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                (() => {
                                    const e = document.querySelector('div[data-accessibility="screen_reader"] button');
                                    if (!e) return;
                                    "true" === e.getAttribute("aria-pressed") && (window.dispatchEvent(new CustomEvent("clean-screen-reader", {
                                        detail: {
                                            slug: "screen_reader"
                                        }
                                    })), e.click(), setTimeout(() => {
                                        localStorage.setItem("aioReaderIndex", "true"), e.click()
                                    }, 200))
                                })()
                            })
                        });
                        const e = r.querySelector("#play-summary-audio");
                        e ? .addEventListener("click", async () => {
                            e.disabled = !0, e.classList.add("aioa-loading");
                            const t = r.querySelector(".summary-content") ? .textContent || "";
                            var i = new FormData,
                                n = new FormData;
                            if (null != t && "" != t) {
                                var o;
                                o = ((e, t = 180) => {
                                    const i = e.replace(/\s+/g, " ").trim().split(/(?<=[.!?])\s+/);
                                    Vr = [];
                                    for (const n of i)
                                        if (n.length <= t) Vr.length > 0 && (Vr[Vr.length - 1] + " " + n).length <= t ? Vr[Vr.length - 1] += " " + n : Vr.push(n.trim());
                                        else if (n.includes(",")) {
                                        const e = n.split(/,\s*/);
                                        let i = "";
                                        for (const n of e) {
                                            const e = i ? i + ", " + n : n;
                                            e.length > t ? (i && Vr.push(i.trim()), i = n) : i = e
                                        }
                                        i && Vr.push(i.trim())
                                    } else {
                                        const e = n.split(" ");
                                        let i = "";
                                        for (const n of e) {
                                            const e = i ? i + " " + n : n;
                                            e.length > t ? (i && Vr.push(i.trim()), i = n) : i = e
                                        }
                                        i && Vr.push(i.trim())
                                    }
                                    return Vr.filter(Boolean)
                                })(t, 180), Dr = zr;
                                for (const e of o) {
                                    if (!Wr) break;
                                    if (["es-mx"].includes(pi.active_language)) {
                                        var a = "",
                                            s = "";
                                        null !== pi.active_language && (a = pi ? .default_language === pi ? .active_language ? pi ? .default_voice : jr.find(e => e.Language.toLowerCase() == pi.active_language ? .toLowerCase()) ? .VoiceId ? ? "ai3-es-MX-Jorge", s = jr.find(e => e.Language.toLowerCase() == pi.active_language ? .toLowerCase()) ? .Language ? ? "es-MX"), n.set("VoiceId", a), n.set("text", e ? .toString() ? ? ""), n.set("LanguageCode", s ? .toString() ? ? ""), n.set("OutputFormat", "mp3"), n.set("SampleRate", "48000");
                                        let t = await fetch("https://ada.skynettechnologies.us/apis/vm-voice-convert", {
                                            method: "POST",
                                            body: n
                                        });
                                        if (1 == (l = await t.json()).success && Wr) try {
                                            (zr = document.getElementById("summarise_page_audio")).autoplay = !0, zr.muted = !1, zr.preload = "auto", zr.src = l.path, zr.load(), zr.play().then(() => {}).catch(e => {}), Dr = zr, await new Promise(e => {
                                                zr.onended = () => e(!0)
                                            }), await new Promise(e => setTimeout(e, 60))
                                        } catch (c) {}
                                    } else {
                                        i.set("text", e), i.set("languageCode", Br ? .toString() ? ? ""), i.set("name", Ur ? .toString() ? ? ""), i.set("ssmlGender", Hr ? .toString() ? ? ""), i.set("audioEncoding", "LINEAR16");
                                        let t = await fetch("https://ada.skynettechnologies.us/apis/ts-synthesize", {
                                            method: "POST",
                                            body: i
                                        });
                                        var l = await t.json();
                                        if (null != l ? .data.audioContent && Wr) try {
                                            (zr = document.getElementById("summarise_page_audio")).autoplay = !0, zr.muted = !1, zr.preload = "auto", zr.src = "data:audio/wav;base64," + l ? .data.audioContent, zr.load(), zr.play().then(() => {}).catch(e => {}), Dr = zr, await new Promise(e => {
                                                zr.onended = () => e(!0)
                                            }), await new Promise(e => setTimeout(e, 30))
                                        } catch (c) {}
                                    }
                                }
                            }
                            e.disabled = !1, e.classList.remove("aioa-loading")
                        }), !pi.isMobile && await _l(!0)
                    }
                    const l = r && r.querySelectorAll("span, a, b, strong, i, em, button, label, div, p");
                    l && l.forEach(e => {
                        e.getAttribute("aioa-magnifier") || e.setAttribute("aioa-magnifier", "true")
                    })
                }
            Ai()
        };
        if (n)
            if (localStorage.setItem("aioReaderIndex", "false"), Ir) {
                (async () => {
                    const {
                        default: t
                    } = await e(() =>
                        import ("./summarisePopup.js"), []);
                    t(n)
                })().then(() => {
                    setTimeout(() => {
                        d(), Ir = !1
                    }, 500)
                }), (async () => {
                    const e = "voiceMakerVoices",
                        t = await Di(e);
                    if (t) return t;
                    const i = await ai({
                        method: "GET",
                        url: "https://ada.skynettechnologies.us/apis/vm-voices"
                    });
                    return await ji(e, i.data, 864e5), i ? .data
                })().then(e => {
                    jr = e.data ? .voices_list
                }), (async () => {
                    const e = "googleVoices",
                        t = await Di(e);
                    if (t) return t;
                    const i = await ai({
                            method: "GET",
                            url: "https://ada.skynettechnologies.us/apis/ts-voices"
                        }),
                        n = {
                            data: i ? .data ? .data
                        };
                    return await ji(e, n, 864e5), i ? .data
                })().then(e => {
                    Fr = e.data.voices, Jr()
                })
            } else d()
    };
let Xr = !1,
    Yr = null,
    Qr = null;
const Zr = "#asl-container",
    el = ".asl_modal_body";
const tl = "aioa-asl-hidden";

function il() {
    const e = document.querySelector(el);
    e ? .classList.remove(tl)
}

function nl() {
    ! function() {
        if (document.querySelector("#aioa-asl-hidden-style")) return;
        const e = `\n    .${tl} {\n      display: none !important;\n    }\n  `,
            t = document.createElement("style");
        t.type = "text/css", t.id = "aioa-asl-hidden-style", t.appendChild(document.createTextNode(e)), (document.head || document.getElementsByTagName("head")[0]).appendChild(t)
    }();
    const e = document.querySelector(el);
    e ? .classList.add(tl)
}
const ol = "aioa-asl-loader";

function al() {
    ! function() {
        if (document.querySelector("#aioa-asl-loader-style")) return;
        const e = `\n    .${ol} {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      min-height: 40vh;\n      width: 100%;\n    }\n    .${ol}__spinner {\n      width: 28px;\n      height: 28px;\n      border-radius: 50%;\n      border: 3px solid rgba(0, 0, 0, 0.12);\n      border-top-color: var(--accessibility-widget-primary-color-darken, $primary) !important;\n      animation: aioa-asl-spin 0.8s linear infinite;\n    }\n    .asl-vw {\n        visibility: hidden;\n    }\n\n    .asl-vw__btn.asl-vw__playstop {\n      background : var(--accessibility-widget-primary-color-darken, $primary) !important;\n    }\n    \n    .asl-vw__speed input {\n      accent-color : var(--accessibility-widget-primary-color-darken, $primary) !important;\n    }\n\n    .asl-vw__controls {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 14px !important;\n      padding: 8px 12px;\n    }\n\n    #aioa_accessibility_settings.compressed {\n      .asl-vw__controls {\n        padding: 8px 5px;\n      }\n    }\n    \n    .asl-vw__speed {\n      display: flex;\n      align-items: center;\n      gap: 5px;\n      margin: 0 !important;\n      font-size: 12px !important;\n      color: #000000 !important;\n      font-weight: 600\n    }\n\n    .asl-vw__btnlabel,\n    .asl-vw__speedval { \n      font-size: 12px !important;\n    }\n\n    #aioa_accessibility_settings.compressed {\n      .asl_modal_body #asl-container .asl-vw__btn {\n        width: 50px\n      }\n    }\n    \n    @keyframes aioa-asl-spin {\n      to { transform: rotate(360deg); }\n    }\n  `,
            t = document.createElement("style");
        t.type = "text/css", t.id = "aioa-asl-loader-style", t.appendChild(document.createTextNode(e)), (document.head || document.getElementsByTagName("head")[0]).appendChild(t)
    }();
    const e = document.querySelector(Zr);
    if (!e || e.querySelector(`.${ol}`)) return;
    const t = document.createElement("div");
    t.className = ol, t.setAttribute("role", "status"), t.setAttribute("aria-label", "Loading sign language assistant"), t.innerHTML = `<span class="${ol}__spinner"></span>`, e.appendChild(t)
}

function sl() {
    const e = document.querySelector(`${Zr} .${ol}`),
        t = document.querySelector(".asl-vw");
    t && (t.style.visibility = "visible"), e ? .remove()
}

function rl() {
    [".asl-vw__header", ".asl-vw__gloss", ".asl-vw__input", ".asl-vw__status", ".asl-vw__hover", ".asl-vw__capture", ".asl-vw__pause"].forEach(e => {
        const t = document.querySelector(e);
        t && (t.style.display = "none")
    })
}
async function ll() {
    if (Yr) {
        const e = document.querySelector(".asl-vw__hover");
        return e && e.click(), Yr.player.adapter.on("stateChange", function(e) {
            Yr.playStopLabel && (Yr.playStopLabel.textContent = e ? "Pause" : "Play")
        }), Yr
    }
    al();
    try {
        await (window.ASLSigner ? .Widget ? Promise.resolve() : Qr || (Qr = new Promise((e, t) => {
            const i = document.querySelector("script[data-aioa-asl-widget]");
            if (i) return i.addEventListener("load", () => e()), void i.addEventListener("error", () => t(new Error("Failed to load ASL widget script")));
            const n = document.createElement("script");
            n.src = "https://www.skynettechnologies.com/accessibility/asl/app/asl-widget.js", n.dataset.aioaAslWidget = "true", n.onload = () => e(), n.onerror = () => t(new Error("Failed to load ASL widget script")), document.head.appendChild(n)
        }).catch(e => {
            throw Qr = null, e
        }), Qr));
        const t = window.ASLSigner;
        if (!t ? .Widget) throw new Error("ASLSigner.Widget is not available");
        ! function() {
            const e = window.ASLSigner;
            if (!e ? .Widget ? .prototype ? ._onHoverOver) return;
            if (e.Widget.prototype.__aioaHoverPatched) return;
            const t = e.Widget.prototype._onHoverOver;
            e.Widget.prototype._onHoverOver = function(e) {
                const i = e.target;
                return i ? .closest ? .(".asl_modal_body") ? (this._hoverTimer && (clearTimeout(this._hoverTimer), this._hoverTimer = null), void this._unhighlight()) : t.call(this, e)
            }, e.Widget.prototype.__aioaHoverPatched = !0
        }(),
        function() {
            const e = window.ASLSigner;
            if (!e ? .Widget ? .prototype ? .sign) return;
            if (e.Widget.prototype.__aioaSignPatched) return;
            const t = e.Widget.prototype.sign;
            e.Widget.prototype.sign = function(...e) {
                return this._setHover(!0), t.apply(this, e)
            }, e.Widget.prototype.__aioaSignPatched = !0
        }(),
        function() {
            const e = window.ASLSigner;
            if (!e ? .Widget ? .prototype ? ._readableElement) return;
            if (e.Widget.prototype.__aioaReadableElementPatched) return;
            const t = e.Widget.prototype._readableElement;
            e.Widget.prototype._readableElement = function(e) {
                return e ? .closest ? .(".asl_modal_body") ? null : t.call(this, e)
            }, e.Widget.prototype.__aioaReadableElementPatched = !0
        }();
        const i = document.querySelector(Zr);
        if (!i) throw new Error(`ASL container "${Zr}" not found`);
        Yr = new t.Widget({
            rootPath: "https://www.skynettechnologies.com/accessibility/asl/app",
            position: "R",
            container: i,
            avatar: "nova"
        }), Yr._ensurePlayer(), Yr.player.adapter.on("stateChange", function(e) {
            Yr.playStopLabel && (Yr.playStopLabel.textContent = e ? "Pause" : "Play")
        }), await (e = Yr, new Promise((t, i) => {
            const n = e.player;
            n ? .adapter ? (n.adapter.on("load", function() {
                t()
            }), n.adapter.on("error", function(e) {
                i(new Error(e))
            })) : i(new Error("ASL player adapter not available"))
        }));
        const n = document.querySelector(".asl-vw__hover");
        return n && n.click(), rl(), sl(), Yr
    } catch (t) {
        throw sl(), t
    }
    var e
}
const cl = async e => {
    const t = e.currentTarget,
        i = t.getAttribute("aria-label");
    if (Xr) {
        t.setAttribute("aria-pressed", "false"), Xr = !1,
            function() {
                if (Yr) try {
                    Yr.player ? .adapter ? .stop && Yr.player.adapter.stop(), "function" == typeof Yr.close && Yr.close()
                } catch (e) {}
            }(), nl(), i && si(i, "Disable", 1);
        const e = bi();
        e && hi({ ...ri(e),
            asl: !1
        })
    } else {
        Xr = !0, t.setAttribute("aria-pressed", "true");
        const e = bi();
        e && hi({ ...ri(e),
            asl: !0
        });
        try {
            il(), setTimeout(() => {
                ! function() {
                    const e = document.querySelector(el);
                    e ? .scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    })
                }()
            }, 100);
            (await ll()).open(), i && si(i, "Enable", 1)
        } catch (n) {
            Xr = !1, t.setAttribute("aria-pressed", "false"), nl()
        } finally {
            t.disabled = !1
        }
    }
};

function dl(e) {
    const t = ["a[href]", "button:not([disabled])", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", '[tabindex]:not([tabindex="-1"])'].join(","),
        i = [];
    return function e(n) {
        if (n instanceof HTMLElement) {
            if (n.matches(t) && function(e) {
                    if (e.hasAttribute("disabled")) return !1;
                    if (null === e.offsetParent && e !== document.activeElement) {
                        const t = window.getComputedStyle(e);
                        if ("none" === t.display || "hidden" === t.visibility) return !1
                    }
                    return !0
                }(n) && i.push(n), n instanceof HTMLSlotElement) {
                return void n.assignedElements({
                    flatten: !0
                }).forEach(t => e(t))
            }
            if (n.shadowRoot) return void Array.from(n.shadowRoot.childNodes).forEach(t => e(t));
            Array.from(n.children).forEach(t => e(t))
        }
    }(e), i
}

function ul(e, t) {
    return e.getElementById(t)
}

function pl(e, t) {
    const i = e.querySelector(`#${t}`);
    if (i) return i;
    const n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: () => NodeFilter.FILTER_ACCEPT
    });
    let o = n.currentNode;
    for (; o;) {
        if (o instanceof HTMLElement && o.shadowRoot) {
            const e = ul(o.shadowRoot, t);
            if (e) return e;
            const i = pl(o.shadowRoot, t);
            if (i) return i
        }
        o = n.nextNode()
    }
    return null
}

function gl(e = document) {
    let t = e.activeElement;
    for (; t && t.shadowRoot;) {
        const e = t.shadowRoot.activeElement;
        if (!e) break;
        t = e
    }
    return t
}

function ml(t, {
    closeButton: i,
    widgetSettings: n
} = {}) {
    const o = async o => {
        if (("Escape" === o.key || "Esc" === o.key) && "true" === t.getAttribute("aria-expanded")) {
            const t = Array.from(document.querySelectorAll(".aioa-profile-description")).find(e => "block" === window.getComputedStyle(e).display),
                i = document.querySelector('.select-button[role="combobox"][aria-expanded="true"]');
            if (t) {
                const e = t.querySelector(".aioa-modal-close-button");
                e && e.click()
            } else if (i) window.dispatchEvent(new CustomEvent("dropdown-updated", {
                detail: {
                    slug: i
                }
            })), setTimeout(() => {
                i ? .focus()
            }, 100);
            else {
                const t = document.querySelector(".aioa-widget-wrapper"),
                    i = document.documentElement.classList.contains("accessibility_modal_opened");
                t && i && setTimeout(async () => {
                    const {
                        default: t
                    } = await e(() => Promise.resolve().then(() => Fo), void 0);
                    t()
                }, n ? .focus_locator ? 100 : 0)
            }
        }
        if ("Tab" !== o.key) return;
        const a = pl(t, "stayConnected");
        if (a && function(e) {
                if (!e) return !1;
                if ("true" === e.getAttribute("aria-hidden")) return !1;
                const t = window.getComputedStyle(e);
                return "none" !== t.display && "hidden" !== t.visibility && (0 !== e.offsetWidth || 0 !== e.offsetHeight)
            }(a)) {
            const e = dl(a);
            if (!e.length) return a.hasAttribute("tabindex") || a.setAttribute("tabindex", "-1"), a.focus(), void o.preventDefault();
            const t = e[0],
                i = e[e.length - 1],
                n = gl();
            return n && a.contains(n) ? void(o.shiftKey ? n === t && (o.preventDefault(), i.focus()) : n === i && (o.preventDefault(), t.focus())) : (t.focus(), void o.preventDefault())
        }
        const s = dl(t);
        if (!s.length) return;
        const r = s[0],
            l = s[s.length - 1],
            c = gl();
        o.shiftKey ? c !== r && s.includes(c) || (o.preventDefault(), l.focus()) : c !== l && s.includes(c) || (o.preventDefault(), (i || r) ? .focus())
    };
    return t.addEventListener("keydown", o), () => {
        t.removeEventListener("keydown", o)
    }
}
nl();
let fl = null,
    hl = null,
    yl = null,
    bl = null;
e(() => Promise.resolve().then(() => qa), void 0), e(() => Promise.resolve().then(() => Ba), void 0), e(() => Promise.resolve().then(() => Ma), void 0), fl = e(() =>
    import ("./fontSize.js"), []), hl = e(() =>
    import ("./lineHeight.js"), []), yl = e(() =>
    import ("./letterSpacing.js"), []), bl = e(() => Promise.resolve().then(() => un), void 0);
const _l = async (e = !1) => {
        const t = document.querySelectorAll("[data-accessibility-tooltip]"),
            i = document.querySelector("body"),
            n = e ? document.getElementById("accessibility_tooltip") : document.createElement("div");
        e || (n.classList.add("accessibility-tooltip"), n.id = "accessibility_tooltip", n.setAttribute("aria-hidden", "true"), i ? .appendChild(n), n.innerHTML = " ");
        const o = (e, t, i) => {
                const o = e.getAttribute("data-accessibility-tooltip");
                if (!o) return;
                if (n.textContent = o, pi.text_magnifier) return void(n.style.display = "none");
                n.style.display = "block";
                const a = (pi.content_scaling || 100) / 100;
                let s, r;
                if (void 0 !== t && void 0 !== i) s = t / a + 10, r = i / a + 10;
                else {
                    const t = e.getBoundingClientRect();
                    s = t.left / a, r = (t.bottom + 10) / a
                }
                const l = window.innerWidth / a - n.offsetWidth - 10,
                    c = window.innerHeight / a - n.offsetHeight - 10;
                n.style.left = `${Math.min(s,l)}px`, n.style.top = `${Math.min(r,c)}px`
            },
            a = () => {
                n.style.display = "none"
            };
        t.forEach(e => {
            e.addEventListener("mouseover", t => {
                o(e, t.clientX, t.clientY)
            }), e.addEventListener("mouseout", a), e.hasAttribute("aioa-focused") && (e.addEventListener("focus", () => {
                o(e)
            }), e.addEventListener("blur", a))
        })
    },
    vl = {
        blind: "Alt + Shift + B",
        elderly: "Alt + Shift + E",
        motor_impaired: "Alt + Shift + M",
        visually_impaired: "Alt + Shift + V",
        color_blind: "Alt + Shift + C",
        dyslexia: "Alt + Shift + D",
        cognitive_learning: "Alt + Shift + L",
        seizure_epileptic: "Alt + Shift + S",
        adhd: "Alt + Shift + A",
        epilepsy: "Alt + Shift + Y",
        parkinson_disease: "Alt + Shift + O",
        deaf: "Alt + Shift + F"
    },
    wl = {
        blind: "⌃ + Shift + B",
        elderly: "⌃ + Shift + E",
        motor_impaired: "⌃ + Shift + M",
        visually_impaired: "⌃ + Shift + V",
        color_blind: "⌃ + Shift + C",
        dyslexia: "⌃ + Shift + D",
        cognitive_learning: "⌃ + Shift + L",
        seizure_epileptic: "⌃ + Shift + S",
        adhd: "⌃ + Shift + A",
        epilepsy: "⌃ + Shift + Y",
        parkinson_disease: "⌃ + Shift + O",
        deaf: "⌃ + Shift + F"
    },
    kl = {
        voice_navigation: ["speak_to_navigate", "screen_reader", "talk_type", "blind"],
        speak_to_navigate: ["voice_navigation", "screen_reader", "talk_type", "blind"],
        screen_reader: ["voice_navigation", "speak_to_navigate"],
        talk_type: ["voice_navigation", "speak_to_navigate"],
        focus_locator: ["text_magnifier", "highlight_focus", "highlight_hover", "content_scaling"]
    },
    Sl = (e, t) => {
        const i = bi(),
            n = ["voice_navigation", "speak_to_navigate", "screen_reader", "talk_type", "focus_locator"].filter(e => !0 === i[e] && e !== t);
        kl[t].forEach(i => {
            if ("content_scaling" === i) {
                document.querySelectorAll(`[data-accessibility="${i}"] button`).forEach(t => {
                    t.disabled = e
                })
            } else {
                const o = document.querySelector(`[data-accessibility="${"talk_type"===i?"talk_n_type":i}"] button`);
                o && (o.disabled = n.length > 0 && "focus_locator" !== t || e, "true" === o.getAttribute("aria-pressed") && o.click())
            }
        })
    };
window.addEventListener("feature-updated", e => {
    ! function(e) {
        const t = bi(),
            i = t[e],
            n = ["voice_navigation", "speak_to_navigate", "screen_reader", "talk_type", "focus_locator"].filter(i => !0 === t[i] && i !== e);
        kl[e] && kl[e].forEach(t => {
            if ("content_scaling" === t) {
                const e = document.querySelectorAll(`[data-accessibility="${t}"] button`);
                setTimeout(() => {
                    e.forEach(e => {
                        e.disabled = !!i
                    })
                }, 200)
            } else {
                const o = document.querySelector(`[data-accessibility="${"talk_type"===t?"talk_n_type":t}"] button`);
                o && ("true" === o.getAttribute("aria-pressed") ? (o.click(), o.disabled = !!(i || n.length > 0 && "focus_locator" !== e)) : o.disabled = !!(i || n.length > 0 && "focus_locator" !== e))
            }
        })
    }(e.detail.slug)
});
const El = async t => {
        const i = F.t,
            {
                profileControlSettings: n,
                profileControlSettingsMobile: o
            } = await e(() => Promise.resolve().then(() => Ro), void 0);
        ((e, t) => {
            const i = t.features.main_menu || [],
                n = t.features.accessibility_profiles || [];
            Object.entries(e).forEach(([e, t]) => {
                if (t.every(e => 0 === ((e, t) => {
                        const i = e.find(e => e.slug === t);
                        return i ? i.status : 0
                    })(i, e))) {
                    const t = n.find(t => t.slug === e);
                    t && (t.status = 0)
                }
            })
        })(pi.isMobile ? o : n, pi), null == pi.features && (pi.features.main_menu = [], pi.features.other_options = [], pi.features.accessibility_profiles = []);
        const a = pi.features.main_menu.reduce((e, t) => ({ ...e,
                [t.slug]: t.status
            }), {}),
            s = pi.features.other_options.reduce((e, t) => ({ ...e,
                [t.slug]: t.status
            }), {}),
            r = pi.features.accessibility_profiles.reduce((e, t) => ({ ...e,
                [t.slug]: t.status
            }), {}),
            l = new Ei(window.navigator.userAgent).getBrowserInfo();
        t.setAttribute("lang", pi.active_language), t.setAttribute("aria-label", i("user_preferences")), pi.is_widget_text_color || pi.darkTextColor && t.classList.add("darkicon");
        let c = !1;
        pi.features.accessibility_profiles.map(e => {
            e.status && (c = !0)
        });
        const d = getComputedStyle(document.documentElement);
        if (d.getPropertyValue("--accessibility-widget-primary-color-darken").trim(), d.getPropertyValue("--accessibility-widget-text-color").trim(), t.innerHTML = `<div class="accessibility-modal-header">\n    <button id="accessibility-modal-close-button" data-i18n-labelkey="hide_ada_tool" aria-label="${i("hide_ada_tool")}" class="accessibility-modal-close-button" data-accessibility-tooltip="Close Accessibility Preferences Menu">\n        <span class="aioa-icon"></span>\n    </button>\n    <div class="accessibility-modal-title"><span data-i18n-key="accessibility_preferences"> ${i("accessibility_preferences")} </span><span class="accessibility_menu_keyboard_shortcut"> \n        ${pi.isMac?"(⌘ + Shift + A)":"(Ctrl + Shift + A)"}\n    </span></div>\n    <button data-i18n-labelkey="select_language" aria-label="${i("select_language")}" class="accessibility-language-button" aria-pressed="false" id="aioa_language_button" role="button" tabindex="0" style="display:flex !important">\n      <span class="accessibility-language-slug" aria-hidden="true" id="accessibility-language-slug">US</span>\n      <span class="accessibility-language-text">English (USA)</span>\n      <span class="ico-chevron-down"></span>\n    </button>\n</div>\n<div class="accessibility-modal-body" data-lenis-prevent>\n<div class="accessibility-modal-button-group" style="display:block !important">\n    \n    ${1===s.accessibility_statement?`\n    <div class="accessibility-statement-wrapper" style="display:block !important">\n        ${pi.statement_link?`<a href="${pi.statement_link}" data-i18n-labelkey="accessibility_statement" aria-label="${i("accessibility_statement")}" class="accessibility-statement-link ${"www.asktheegghead.com"===window.location.hostname?"asktheegghead":""}"> <span class="aioa-icon"></span> <span aria-hidden="true" data-i18n-key="accessibility_statement">${i("accessibility_statement")}</span> </a>`:`<button data-i18n-labelkey="accessibility_statement" id="aioa_statement_button" aria-pressed="false" aria-label="${i("accessibility_statement")}" class="accessibility-statement-toggle"><span class="aioa-icon"></span><span aria-hidden="true" data-i18n-key="accessibility_statement">${i("accessibility_statement")}</span></button>`}\n    </div>    \n    `:""}\n    \n</div>\n<div class="accessibility-container">\n    ${1!==s.oversize_widget_toggle||pi.isMobile?"":`\n    <div class="accessibility-switcher aioa-size-toggle" style="display:block !important" tabindex="0" role="switch" aria-checked="${pi.user_oversize_widget?"true":"false"}">\n      <label class="custom-switcher">\n        <span class="custom-switcher_right">\n          <input\n            type="checkbox"\n            aria-hidden="true"\n            tabindex="-1"\n            id="aioa-oversize-widget-switcher"\n            class="custom-switcher_inp"\n            value="1" ${pi.user_oversize_widget?"checked":""} />\n          ${"contao.skynettechnologies.us"!==window.location.hostname?'<span class="custom-switcher_body"></span>':'<div class="custom-switcher_body"></div>'}\n          <span class="custom-switcher_label">\n            <span class="aioa-icon" aria-hidden="true"></span>\n            <span class="aioa-text" data-i18n-key="oversize_widget">${i("oversize_widget")}</span>\n          </span>\n        </span>\n      </label>\n    </div>\n    `}\n    ${1===a.asl?`\n  <div class="asl_modal_body">\n    <section class="section-card">\n      <div class="section-head">\n        <div class="section-head__icon" aria-hidden="true">\n          <span class="aioa-icon" aria-hidden="true"></span>\n        </div>\n        <div class="section-head__text">\n          <h2 class="aioa-asl-section-text">${i("language_assistant")}</h2>\n          <p class="aioa-asl-section-text">${i("visual_sign_support")}</p>\n        </div>\n        <button class="info-dot" aria-label="More info">i</button>\n        </div>\n        <div id="asl-container"></div>\n    </section>\n  </div>`:""}\n    \n    ${pi.custom_plans&&pi.custom_plans["ai-assistance"]?`\n        <div class="aioa-ai-assistant" id="aioa-ai-assistant" style="display: none;">\n\n        <button class="aioa-ai-header" id="aioa-ai-toggle">\n          <div class="aioa-ai-title">\n            <div class="aioa-ai-icon">\n              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">\n                <defs>\n                  <linearGradient id="aioaLogoGrad" x1="0" y1="0" x2="1" y2="1">\n                    <stop offset="0%" style="stop-color:#000"/>\n                    <stop offset="100%" style="stop-color:#000"/>\n                  </linearGradient>\n                </defs>\n                <circle cx="16" cy="14" r="14" fill="url(#aioaLogoGrad)"/>\n                <path d="M11.5 20.5a6.5 6.5 0 0 0 9 0" stroke="white" stroke-width="1.4" stroke-linecap="round" opacity="0.55"/>\n                <path d="M9.5 22.5a9.5 9.5 0 0 0 13 0" stroke="white" stroke-width="1.4" stroke-linecap="round" opacity="0.3"/>\n                <path d="M16 19.5a3.25 3.25 0 0 0 3.25-3.25v-5.5a3.25 3.25 0 0 0-6.5 0v5.5A3.25 3.25 0 0 0 16 19.5Z" fill="white"/>\n                <path d="M11.75 15.5a4.25 4.25 0 0 0 8.5 0" stroke="white" stroke-width="1.6" stroke-linecap="round" fill="none"/>\n                <line x1="16" y1="19.5" x2="16" y2="22.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>\n              </svg>\n            </div>\n\n            <span data-i18n-labelkey="${i("voice-search")}" data-i18n-key="voice-search">${i("voice-search")}</span>\n          </div>\n\n          <span class="aioa-ai-arrow"></span>\n\n        </button>\n\n        <div class="aioa-ai-content" id="aioa-ai-content">\n\n        </div>\n\n    </div>\n    `:""}\n    \n    ${c?`\n    <div class="accessibility-options" style="display:block !important">\n        <div class="accessibility-option" data-accessibility="accessibility-profiles">\n        <div class="accessibility-option-button">\n            <button data-i18n-labelkey="accessibility_profiles" aria-label="${i("accessibility_profiles")}" id="accessibility_profile_toggle_button" aria-expanded="false">\n            <span class="aioa-icon" aria-hidden="true"></span>\n            <span class="aioa-text" aria-hidden="true" data-i18n-key="accessibility_profiles">${i("accessibility_profiles")}</span>\n            </button>\n        </div>\n        <div class="accessibility-option-panel" style="display:none" id="accessibility_profiles_panel">\n            <div class="accessibility-section">\n                ${pi.features.accessibility_profiles.map(e=>{const t="deaf"===e.slug,i=!pi.isMobile&&!pi.isIOS&&"Mozilla Firefox"!==l.name;return 1!=e.status||t&&!i?"":No({slug:e.slug,label:e.name,shortDescription:!0,keyboardShortcut:pi.isMac?wl[e.slug]:vl[e.slug]},void 0,a)}).join("")}\n            </div>\n        </div>\n        </div>\n    </div>\n    `:""}\n\n    \n    <div class="accessibility-section" role="group" id="accessibility_main_controls_panel">\n            \n        ${pi.features.main_menu.map(e=>{let t="";if(1==e.status)switch(e.slug){case"color_blindness":case"background_color":case"text_color":case"title_color":t=(e=>{const{slug:t,label:i}=e;let n=!0;return"color_blindness"===t&&(n=!1),` < div class = "accessibility-control-wrapper range-control"
            aria - labelledby = "${t}"
            data - accessibility = "${t}" > < div class = "accessibility-control-heading" > < span id = "${t}"
            class = "aioa-text"
            data - i18n - key = "${t}" > $ {
                i
            } < /span> </div > < div class = "aioa-custom-select" > < button class = "select-button"
            role = "combobox"
            aria - expanded = "false"
            aria - controls = "${t}-select" > < span class = "selected-value"
            data - i18n - key = "${n?"
            default ":"
            none "}" > $ {
                n ? "Default" : "None"
            } < /span> <span class="aioa-arrow"></span > < /button> <fieldset> <legend class="aioa-sr-only">${i}</legend > \n < ul class = "select-dropdown"
            id = "${t}-select" > \n\ n $ {
                n ? `<li> <input type="radio" id="${t}-none" name="${t}-select" value="default" data-slug="default" aria-label="Default" data-i18n-labelkey="default" data-aioa-read-skip="true"/> <label tabindex="0" for="${t}-none" data-i18n-key="default" > Default</label> </li>` + [{
                    slug: "red",
                    label: "Red",
                    color: "#DC3545"
                }, {
                    slug: "orange",
                    label: "Orange",
                    color: "#FD7E14"
                }, {
                    slug: "purple",
                    label: "Purple",
                    color: "#6F42C1"
                }, {
                    slug: "teal",
                    label: "Teal",
                    color: "#20C997"
                }, {
                    slug: "blue",
                    label: "Blue",
                    color: "#0D6EFD"
                }, {
                    slug: "white",
                    label: "White",
                    color: "#ffffff"
                }, {
                    slug: "black",
                    label: "Black",
                    color: "#000000"
                }].map(e => `<li> <input type="radio" id="${t}-${e.slug}" name="${t}-select" value="${e.color}" data-slug="${e.slug}" aria-label="${e.label}" data-i18n-labelkey="${e.slug}" data-aioa-read-skip="true"/> <label tabindex="0" for="${t}-${e.slug}" data-accessibility-color="${e.color}"><span class="accessibility-color-selection" style="background-color: ${e.color} !important;"></span> <span data-i18n-key="${e.slug}">${e.label}</span></label> </li> `).join("") : `<li><input type="radio" id="${t}-none" name="${t}-select" value="none" aria-label="None" data-i18n-labelkey="none" data-aioa-read-skip="true"><label tabindex="0" for="${t}-none" ><span class="accessibility-color-selection"></span><span data-i18n-key="none">None</span></label></li>` + Ji.map(e => `<li> <input type="radio" id="${t}-${e.slug}" name="${t}-select" aria-label="${e.label}" data-i18n-labelkey="${e.slug}" value="${e.slug}" data-aioa-read-skip="true"/> <label tabindex="0" for="${t}-${e.slug}" ><span class="accessibility-color-selection"></span> <span data-i18n-key="${e.slug}">${e.label}</span></label> </li> `).join("")
            }\
            n < /ul>  \n    </fieldset > < /div> </div > `})({label:e.name,slug:e.slug});break;case"font_size":case"line_height":case"letter_spacing":t=Io({label:e.name,slug:e.slug,value:pi[e.slug]});break;case"content_scaling":"Mozilla Firefox"!==l.name&&(t=Io({label:e.name,slug:e.slug,value:pi[e.slug]}));break;case"screen_reader":const n=pi.isMac?"⌃ + ?":"Ctrl + /";t=No({label:e.name,slug:e.slug,keyboardShortcut:n},void 0,a);break;case"dictionary":const o=pi.isMac?"⌃ + .":"Ctrl + .";t=No({label:e.name,slug:e.slug,keyboardShortcut:o},Li.includes(pi.active_language),a);break;case"virtual_keyboard":if(!pi.isMobile){const i=pi.isMac?"⌃ + ;":"Ctrl + ;";t=No({label:e.name,slug:e.slug,keyboardShortcut:i},Ti.includes(pi.active_language),a)}break;case"reading_guide":case"big_black_cursor":case"big_white_cursor":case"slow_cursor":case"highlight_hover":case"asl":case"highlight_focus":case"text_magnifier":case"reading_mask":case"focus_indicator":pi.isMobile||(t=No({label:e.name,slug:e.slug},void 0,a));break;case"voice_navigation":case"talk_n_type":case"speak_to_navigate":pi.isIOS||"Mozilla Firefox"===l.name||(t=No({label:e.name,slug:e.slug},void 0,a));break;case"focus_locator":pi.isMobile||(t=No({label:e.name,slug:e.slug,featureInfo:!0,keyboardShortcut:"",featureDescription:` < div class = "aioa-profile-description"
            aioa - custom - profile - description > \n < button aria - label = "Close ${i("
            focus_locator ")} Description"
            class = "aioa-modal-close-button" > < /button>\n                          <span data-i18n-key="Focus_locator_description">\n                            ${i("Focus_locator_description")}\n                          </span > \n < /div>`},void 0,a));break;case"subtitle_on_video":pi.custom_plans&&pi.custom_plans["video-subtitle"]&&(t=No({label:e.name,slug:e.slug},void 0,a));break;case"summarize_page":const s=pi.isMac?"⌃ + S":"Alt + S";t=No({label:e.name,slug:e.slug,keyboardShortcut:s},void 0,a);break;default:t=No({label:e.name,slug:e.slug},void 0,a)}return t}).join("")}\n    </div > \n $ {
                1 === s.move_widget ? `\n            <div class="accessibility-options" style="display:block !important">\n                <div class="accessibility-option" data-accessibility="accessibility-widget-positions">\n                    <div class="accessibility-option-button">\n                        <button data-i18n-labelkey="widget_positions" aria-label="${i("widget_positions")}" aria-expanded="false" id="positions_panel_toggle_button">\n                            <span class="aioa-icon" aria-hidden="true"></span>\n                            <span class="aioa-text" aria-hidden="true" data-i18n-key="widget_positions">${i("widget_positions")}</span>\n                        </button>\n                    </div>\n                    <div class="accessibility-option-panel" style="display:none" id="accessibility_positions_panel">\n                        <div class="accessibility-widget-positions">\n                            <div class="accessibility-widget-position" data-accessibility="aioa_bottom_right">\n                                <button data-i18n-labelkey="bottom_right" aria-label="${i("bottom_right")}" aria-pressed=${pi.user_widget_position?"bottom_right"===pi.user_widget_position?"true":"false":pi.is_mobile_position?"bottom_right"===(!pi.is_widget_custom_position_mobile&&pi.widget_position_mobile)?"true":"false":"bottom_right"===(!pi.is_widget_custom_position&&pi.widget_position)?"true":"false"}>\n                                    <span class="aioa-icon" aria-hidden="true"></span>\n                                    <span class="aioa-text" aria-hidden="true" data-i18n-key="bottom_right">${i("bottom_right")}</span>\n                                </button>\n                            </div>\n                            <div class="accessibility-widget-position" data-accessibility="aioa_bottom_center">\n                                <button data-i18n-labelkey="bottom_center" aria-label="${i("bottom_center")}" aria-pressed=${pi.user_widget_position?"bottom_center"===pi.user_widget_position?"true":"false":pi.is_mobile_position?"bottom_center"===(!pi.is_widget_custom_position_mobile&&pi.widget_position_mobile)?"true":"false":"bottom_center"===(!pi.is_widget_custom_position&&pi.widget_position)?"true":"false"}>\n                                    <span class="aioa-icon" aria-hidden="true"></span>\n                                    <span class="aioa-text" aria-hidden="true" data-i18n-key="bottom_center">${i("bottom_center")}</span>\n                                </button>\n                            </div>\n                            <div class="accessibility-widget-position" data-accessibility="aioa_bottom_left">\n                                <button data-i18n-labelkey="bottom_left" aria-label="${i("bottom_left")}" aria-pressed=${pi.user_widget_position?"bottom_left"===pi.user_widget_position?"true":"false":pi.is_mobile_position?"bottom_left"===(!pi.is_widget_custom_position_mobile&&pi.widget_position_mobile)?"true":"false":"bottom_left"===(!pi.is_widget_custom_position&&pi.widget_position)?"true":"false"}>\n                                    <span class="aioa-icon" aria-hidden="true"></span>\n                                    <span class="aioa-text" aria-hidden="true" data-i18n-key="bottom_left">${i("bottom_left")}</span>\n                                </button>\n                            </div>\n                            <div class="accessibility-widget-position" data-accessibility="aioa_middel_left">\n                                <button data-i18n-labelkey="middle_left" aria-label="${i("middle_left")}" aria-pressed=${pi.user_widget_position?"middel_left"===pi.user_widget_position?"true":"false":pi.is_mobile_position?"middel_left"===(!pi.is_widget_custom_position_mobile&&pi.widget_position_mobile)?"true":"false":"middel_left"===(!pi.is_widget_custom_position&&pi.widget_position)?"true":"false"}>\n                                    <span class="aioa-icon" aria-hidden="true"></span>\n                                    <span class="aioa-text" data-i18n-key="middle_left" aria-hidden="true">${i("middle_left")}</span>\n                                </button>\n                            </div>\n                            <div class="accessibility-widget-position" data-accessibility="aioa_top_left">\n                                <button data-i18n-labelkey="top_left" aria-label="${i("top_left")}" aria-pressed=${pi.user_widget_position?"top_left"===pi.user_widget_position?"true":"false":pi.is_mobile_position?"top_left"===(!pi.is_widget_custom_position_mobile&&pi.widget_position_mobile)?"true":"false":"top_left"===(!pi.is_widget_custom_position&&pi.widget_position)?"true":"false"}>\n                                    <span class="aioa-icon" aria-hidden="true"></span>\n                                    <span class="aioa-text" aria-hidden="true" data-i18n-key="top_left">${i("top_left")}</span>\n                                </button>\n                            </div>\n                            <div class="accessibility-widget-position" data-accessibility="aioa_top_center" >\n                                <button data-i18n-labelkey="top_center" aria-label="${i("top_center")}" aria-pressed=${pi.user_widget_position?"top_center"===pi.user_widget_position?"true":"false":pi.is_mobile_position?"top_center"===(!pi.is_widget_custom_position_mobile&&pi.widget_position_mobile)?"true":"false":"top_center"===(!pi.is_widget_custom_position&&pi.widget_position)?"true":"false"}>\n                                    <span class="aioa-icon" aria-hidden="true"></span>\n                                    <span class="aioa-text" aria-hidden="true" data-i18n-key="top_center">${i("top_center")}</span>\n                                </button>\n                            </div>\n                            <div class="accessibility-widget-position" data-accessibility="aioa_top_right">\n                                <button data-i18n-labelkey="top_right" aria-label="${i("top_right")}" aria-pressed=${pi.user_widget_position?"top_right"===pi.user_widget_position?"true":"false":pi.is_mobile_position?"top_right"===(!pi.is_widget_custom_position_mobile&&pi.widget_position_mobile)?"true":"false":"top_right"===(!pi.is_widget_custom_position&&pi.widget_position)?"true":"false"}>\n                                    <span class="aioa-icon" aria-hidden="true"></span>\n                                    <span class="aioa-text" aria-hidden="true" data-i18n-key="top_right">${i("top_right")}</span>\n                                </button>\n                            </div>\n                            <div class="accessibility-widget-position" data-accessibility="aioa_middel_right">\n                                <button data-i18n-labelkey="middle_right" aria-label="${i("middle_right")}" aria-pressed=${pi.user_widget_position?"middel_right"===pi.user_widget_position?"true":"false":pi.is_mobile_position?"middel_right"===(!pi.is_widget_custom_position_mobile&&pi.widget_position_mobile)?"true":"false":"middel_right"===(!pi.is_widget_custom_position&&pi.widget_position)?"true":"false"}>\n                                    <span class="aioa-icon" aria-hidden="true"></span>\n                                    <span class="aioa-text" aria-hidden="true" data-i18n-key="middle_right">${i("middle_right")}</span>\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        ` : ""
            }\
            n < div class = "accessibility-modal-button-bottom-group" > \n $ {
                1 === s.hide_interface ? `<button data-i18n-labelkey="hide_interface" id="aioa_hide_interface_button" aria-pressed="false" aria-label="${i("hide_interface")}" aioa-highlight-hover="${!!pi.highlight_hover}" class="accessibility-hide-interface-button"><span class="aioa-icon"></span><span aria-hidden="true" data-i18n-key="hide_interface">${i("hide_interface")}</span></button>` : ""
            }\
            n\ n $ {
                1 === s.reset ? `<button data-i18n-labelkey="reset_preferences" aria-label="${i("reset_preferences")}" class="accessibility-modal-reset-button" data-accessibility-tooltip="${pi.isMac?"(⌘ + Shift + H)":"(Ctrl + Shift + H)"}" aioa-focused aioa-highlight-hover="${!!pi.highlight_hover}"><span class="aioa-icon"></span><span aria-hidden="true" data-i18n-key="reset">${i("reset")}</span></button>` : ""
            } < /div></div > < /div><div class="accessibility-modal-footer" id="accessibility_modal_footer" style="display:block !important"></div > `,Mo(document.querySelector("#accessibility_modal_footer"),s),!pi.is_custome_branding){let e=function(){try{const e=document.querySelector("#accessibility_modal_footer");if(null!=e){e.style.setProperty("display","block","important");const t=document.querySelector(".accessibility-footer-wrapper");t&&t.style.setProperty("display","flex","important"),document.querySelectorAll(".aioa-widget-wrapper .accessibility-modal-footer .accessibility-footer-wrapper img").forEach(e=>{e.style.setProperty("display","block","important"),e.style.setProperty("visibility","visible","important")})}else{const e=document.createElement("div");e.className="accessibility-modal-footer",e.id="accessibility_modal_footer",e.style.display="block",e.style.setProperty("display","block","important");const t=document.getElementById("aioa_accessibility_settings");t&&(t.appendChild(e),Mo(document.querySelector("#accessibility_modal_footer"),s))}}catch(e){}};setInterval(()=>{pi.isWhiteLebalCheck&&e()},500)}const u=document.querySelector("#accessibility-modal-close-button");u?.addEventListener("click",()=>{Do();const e=document.querySelector("#accessibility_settings_toggle");e&&setTimeout(()=>{e.focus()},150)}),ml(t,{closeButton:u,widgetSettings:pi}),document.addEventListener("click",async t=>{if(!t.isTrusted)return;const i=document.querySelector(".aioa-widget-wrapper"),n=document.querySelector(".aioa-trigger-button");if(!i)return;const o=t.target;if(i.contains(o)||n&&n.contains(o))return;const a=document.documentElement.classList.contains("accessibility_modal_opened");if(i&&a){const{default:t}=await e(()=>Promise.resolve().then(()=>Fo),void 0);t()}});const p=document.querySelector("#accessibility_profile_toggle_button");p?.addEventListener("click",async e=>{const t=document.querySelector("#accessibility_profiles_panel"),i=e.currentTarget;"true"===i.getAttribute("aria-expanded")?(t&&(t.style.display="none"),i.setAttribute("aria-expanded","false")):(t&&(t.style.display="block"),i.setAttribute("aria-expanded","true"))});const g=document.querySelector("#positions_panel_toggle_button");g?.addEventListener("click",async e=>{const t=document.querySelector("#accessibility_positions_panel"),i=e.currentTarget;"true"===i.getAttribute("aria-expanded")?(t&&(t.style.display="none"),i.setAttribute("aria-expanded","false")):(t&&(t.style.display="block"),i.setAttribute("aria-expanded","true"))}),!pi.isMobile&&_l();const m=document.querySelector("#aioa_language_button");pi.features.languages.length&&(m?.addEventListener("click",Vo),m?.addEventListener("keydown",e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),m.click())}));const f=document.querySelector("#aioa_statement_button");if(f?.addEventListener("click",Jo),1===s.accessibility_statement){const e=document.querySelector(".accessibility-statement-link");e?.addEventListener("click",e=>{const t=e.currentTarget.getAttribute("aria-label");t&&si("Open Accessibility Statement Link",t)})}const h=document.querySelector("#aioa_hide_interface_button");h?.addEventListener("click",Zo);const y=document.querySelector("#aioa_unhide_interface_button");if(y?.addEventListener("click",Ui),!pi.isMobile){const e=document.querySelector("#aioa-oversize-widget-switcher");e?.addEventListener("change",ea)}if(function(){const e=!!document.querySelector('meta[name="generator"][content*="fastachi"]'),t=Array.from(document.scripts).some(e=>e?.src&&e?.src?.includes("fastachi.com")),i=void 0!==window.Fastachi;return e||t||i}()){const e=document.querySelector("html");e?.classList.add("isFastachi")}if(document.querySelectorAll(".aioa-custom-select button").forEach(e=>{e.removeEventListener("click",la),e.removeEventListener("keydown",ra),e.addEventListener("click",la),e.addEventListener("keydown",ra)}),pi.custom_plans&&pi.custom_plans["ai-assistance"]){let e=function(){var e=document.createElement("script");e.src="https://www.skynettechnologies.com/accessibility/js/voice-search-widget.js",document.head.appendChild(e)};const t=document.getElementById("aioa-ai-toggle"),i=document.getElementById("aioa-ai-content");t&&t.addEventListener("click",()=>{i&&(i.classList.toggle("open"),t.classList.toggle("open"))}),window.addEventListener("aioa-voice-widget-showed",e=>{const t=document.getElementById("aioa-ai-assistant");t&&(t.style.display="block")}),await e()}if(1===a.color_blindness){const e=document.querySelectorAll("#color_blindness-select li input");e&&e.forEach(e=>{e.addEventListener("change",ca)});const t=document.querySelectorAll("#color_blindness-select li label");if(t&&t.forEach(e=>{e.addEventListener("keydown",t=>{if("Enter"===t.key||" "===t.key){t.preventDefault();const i=e.getAttribute("for");if(i){const e=document.getElementById(i);e&&e.click()}}})}),pi.color_blindness){const e=document.querySelector(`#
            color_blindness - $ {
                pi.color_blindness
            }
            `);e?.click()}}if(1===a.dictionary){const e=document.querySelector('[data-accessibility="dictionary"]');e&&e.addEventListener("click",ua)}if(1===a.virtual_keyboard){const e=document.querySelector('div[data-accessibility="virtual_keyboard"] button');e&&(e.addEventListener("click",pa),pi.virtual_keyboard&&e.click())}if(1===a.reading_mask){const e=document.querySelector('div[data-accessibility="reading_mask"] button');e&&(e.addEventListener("click",ga),pi.reading_mask&&!pi.read_mode&&e.click())}if(1===a.reading_guide){const e=document.querySelector('div[data-accessibility="reading_guide"] button');e&&(e.addEventListener("click",Sa),pi.reading_guide&&e.click())}if(1===a.read_mode){const e=document.querySelector('div[data-accessibility="read_mode"] button');e&&(e.addEventListener("click",Ea),pi.read_mode&&e.click())}if(1===a.invert_colors){const e=document.querySelector('div[data-accessibility="invert_colors"] button');e&&(e.addEventListener("click",La),pi.invert_colors&&e.click())}if(1===a.light_contrast){const e=document.querySelector('div[data-accessibility="light_contrast"] button');e&&(e.addEventListener("click",La),pi.light_contrast&&e.click())}if(1===a.dark_contrast){const e=document.querySelector('div[data-accessibility="dark_contrast"] button');e&&(e.addEventListener("click",La),pi.dark_contrast&&e.click())}if(1===a.high_contrast){const e=document.querySelector('div[data-accessibility="high_contrast"] button');e&&(e.addEventListener("click",La),pi.high_contrast&&e.click())}if(1===a.smart_contrast){const e=document.querySelector('div[data-accessibility="smart_contrast"] button');e&&(e.addEventListener("click",La),pi.smart_contrast&&e.click())}if(1===a.monochrome){const e=document.querySelector('div[data-accessibility="monochrome"] button');e&&(e.addEventListener("click",La),pi.monochrome&&e.click())}if(1===a.low_saturation){const e=document.querySelector('div[data-accessibility="low_saturation"] button');e&&(e.addEventListener("click",La),pi.low_saturation&&e.click())}if(1===a.high_saturation){const e=document.querySelector('div[data-accessibility="high_saturation"] button');e&&(e.addEventListener("click",La),pi.high_saturation&&e.click())}if(1===a.text_color){const e=document.querySelectorAll("#text_color-select li input"),t=async e=>{const t=e.currentTarget;t&&Ta(t)};e&&e.forEach(e=>{e.addEventListener("change",t)});const i=document.querySelectorAll("#text_color-select li label");if(i&&i.forEach(e=>{e.addEventListener("keydown",t=>{if("Enter"===t.key||" "===t.key){t.preventDefault();const i=e.getAttribute("for");if(i){const e=document.getElementById(i);e&&e.click()}}})}),pi.text_color){const e=document.querySelector(`#
            text_color - $ {
                pi.text_color
            }
            `);e?.click()}}if(1===a.title_color){const e=document.querySelectorAll("#title_color-select li input"),t=async e=>{const t=e.currentTarget;t&&Pa(t)};e&&e.forEach(e=>{e.addEventListener("change",t)});const i=document.querySelectorAll("#title_color-select li label");if(i&&i.forEach(e=>{e.addEventListener("keydown",t=>{if("Enter"===t.key||" "===t.key){t.preventDefault();const i=e.getAttribute("for");if(i){const e=document.getElementById(i);e&&e.click()}}})}),pi.title_color){const e=document.querySelector(`#
            title_color - $ {
                pi.title_color
            }
            `);e?.click()}}if(1===a.background_color){const e=document.querySelectorAll("#background_color-select li input"),t=async e=>{const t=e.currentTarget;t&&ja(t)};e&&e.forEach(e=>{e.addEventListener("change",t)});const i=document.querySelectorAll("#background_color-select li label");if(i&&i.forEach(e=>{e.addEventListener("keydown",t=>{if("Enter"===t.key||" "===t.key){t.preventDefault();const i=e.getAttribute("for");if(i){const e=document.getElementById(i);e&&e.click()}}})}),pi.background_color){const e=document.querySelector(`#
            background_color - $ {
                pi.background_color
            }
            `);e?.click()}}if(1===a.screen_reader&&setTimeout(async()=>{const t=document.querySelector('div[data-accessibility="screen_reader"] button');if(null==document.querySelector("#screen_reader_audio")){const e=document.createElement("Audio");e.id="screen_reader_audio",e.style.display="none",t.closest("div").append(e)}t&&(t.addEventListener("click",()=>{(()=>{xi();const t=document.querySelector("#aioa_notification"),i=()=>{(async()=>{const{default:t}=await e(()=>import("./screenReader.js"),[]);t()})().then(()=>{Ai()})};t&&(Ua?(async()=>{const{default:i}=await e(()=>import("./screenReaderShorcuts.js"),[]);t&&i(t)})().then(()=>{i(),Ua=!1}):i())})(),Sl(!0,"screen_reader")}),pi.screen_reader&&setTimeout(()=>{t.click()},500))},0),1===a.talk_n_type&&!pi.isIOS&&"Mozilla Firefox"!==l.name){const t=document.querySelector('div[data-accessibility="talk_n_type"] button');t.addEventListener("click",t=>{(async t=>{xi();const i=t.currentTarget,n=(t=!1)=>{(async()=>{const{default:n}=await e(()=>Promise.resolve().then(()=>Ja),void 0);n(i,t)})(),Ai()};await Ka()?Ga?(async()=>{const{default:t}=await e(()=>import("./TalkTypeNav.js"),[]);t()})().then(()=>{n(!0),Ga=!1}):n():(Sl(!1,"talk_type"),Ai())})(t),Sl(!0,"talk_type")}),pi.talk_type&&setTimeout(()=>{t.click()},500)}if(1===a.speak_to_navigate&&!pi.isIOS&&"Mozilla Firefox"!==l.name){const t=document.querySelector('div[data-accessibility="speak_to_navigate"] button');t.addEventListener("click",()=>{(()=>{xi();const t=()=>{Ai(),(async()=>{const{default:t}=await e(()=>import("./speckToNav.js"),[]);t()})()};Lr?(async()=>{const t=document.querySelector("#aioa_notification"),{default:i}=await e(()=>import("./specktonavkey.js"),[]);t&&i(t)})().then(()=>{t(),Lr=!1}):t()})(),Sl(!0,"speak_to_navigate")}),pi.speak_to_navigate&&setTimeout(()=>{t.click()},500)}if(1===a.voice_navigation&&!pi.isIOS&&"Mozilla Firefox"!==l.name){const t=document.querySelector('div[data-accessibility="voice_navigation"] button');t.addEventListener("click",()=>{(()=>{xi();const t=()=>{Ai(),(async()=>{const{default:t}=await e(()=>import("./voiceNav.js"),[]);t()})()};Xa?(async()=>{const t=document.querySelector("#aioa_notification"),{default:i}=await e(()=>import("./voicenavkey.js"),[]);t&&i(t)})().then(()=>{t(),Xa=!1}):t()})(),Sl(!0,"voice_navigation")}),pi.voice_navigation&&setTimeout(()=>{t.click()},500)}if(1===a.libras&&setTimeout(async()=>{const e=document.querySelector('div[data-accessibility="libras"] button');e.addEventListener("click",Ya),pi.libras&&setTimeout(()=>{e.click()},500)},0),1===a?.font_size){const e=document.querySelector('div[data-accessibility="font_size"] button.accessibility-scale-increase'),t=document.querySelector('div[data-accessibility="font_size"] button.accessibility-scale-decrease'),i=async e=>{const t=e.currentTarget,{increaseFontSize:i}=await fl;i(t)},n=async e=>{const t=e.currentTarget,{decreaseFontSize:i}=await fl;i(t)},o=async e=>{const{changeFontSize:t}=await fl;t(e)};e&&e.addEventListener("click",i),t&&t.addEventListener("click",n);let a=pi?.font_size;100!=a&&setTimeout(()=>{o(0)},300)}if(1===a.line_height){const e=document.querySelector('div[data-accessibility="line_height"] button.accessibility-scale-increase'),t=document.querySelector('div[data-accessibility="line_height"] button.accessibility-scale-decrease'),i=async e=>{const t=e.currentTarget,{increaseLineHeight:i}=await hl;i(t)},n=async e=>{const t=e.currentTarget,{decreaseLineHeight:i}=await hl;i(t)},o=async e=>{const{changeLineHeight:t}=await hl;t(e)};e&&e.addEventListener("click",i),t&&t.addEventListener("click",n);let a=pi?.line_height;100!=a&&setTimeout(()=>{o(0)},300)}if(1===a.letter_spacing){const e=document.querySelector('div[data-accessibility="letter_spacing"] button.accessibility-scale-increase'),t=document.querySelector('div[data-accessibility="letter_spacing"] button.accessibility-scale-decrease'),i=async e=>{const t=e.currentTarget,{increaseLetterSpacing:i}=await yl;i(t)},n=async e=>{const t=e.currentTarget,{decreaseLetterSpacing:i}=await yl;i(t)},o=async e=>{const{changeLetterSpacing:t}=await yl;t(e)};e&&e.addEventListener("click",i),t&&t.addEventListener("click",n);let a=pi?.letter_spacing;100!=a&&setTimeout(()=>{o(0)},300)}if(1===a.content_scaling&&"Mozilla Firefox"!==l.name){const e=document.querySelector('div[data-accessibility="content_scaling"] button.accessibility-scale-increase'),t=document.querySelector('div[data-accessibility="content_scaling"] button.accessibility-scale-decrease'),i=async e=>{const t=e.currentTarget,{increaseContentScaling:i}=await bl;i(t)},n=async e=>{const t=e.currentTarget,{decreaseContentScaling:i}=await bl;i(t)},o=async e=>{const{changeContentScaling:t}=await bl;t(e)};e&&e.addEventListener("click",i),t&&t.addEventListener("click",n);let a=pi?.content_scaling;100!=a&&o(0)}if(1===a.dyslexia_font){const e=document.querySelector('div[data-accessibility="dyslexia_font"] button');e&&(e.addEventListener("click",xs),pi.dyslexia_font&&e.click())}if(1===a.readable_font){const e=document.querySelector('div[data-accessibility="readable_font"] button');e&&(e.addEventListener("click",xs),pi.readable_font&&e.click())}if(1===a.sign_language_font){const e=document.querySelector('div[data-accessibility="sign_language_font"] button');e&&(e.addEventListener("click",xs),pi.sign_language_font&&e.click())}if(1===a.stop_animations){const e=document.querySelector('div[data-accessibility="stop_animations"] button');e&&(e.addEventListener("click",fs),pi.stop_animations&&e.click())}if(1===a.align_center){const e=document.querySelector('div[data-accessibility="align_center"] button');e&&(e.addEventListener("click",ts),pi.align_center&&e.click())}if(1===a.align_left){const e=document.querySelector('div[data-accessibility="align_left"] button');e&&(e.addEventListener("click",ts),pi.align_left&&e.click())}if(1===a.align_right){const e=document.querySelector('div[data-accessibility="align_right"] button');e&&(e.addEventListener("click",ts),pi.align_right&&e.click())}if(1===a.big_black_cursor){const e=document.querySelector('div[data-accessibility="big_black_cursor"] button');e&&(e.addEventListener("click",Vs),pi.big_black_cursor&&e.click())}if(1===a.big_white_cursor){const e=document.querySelector('div[data-accessibility="big_white_cursor"] button');e&&(e.addEventListener("click",Vs),pi.big_white_cursor&&e.click())}if(1===a.hide_images){const e=document.querySelector('div[data-accessibility="hide_images"] button');e&&(e.addEventListener("click",sr),pi.hide_images&&e.click())}if(1===a.highlight_links){const e=document.querySelector('div[data-accessibility="highlight_links"] button');e&&(e.addEventListener("click",cr),pi.highlight_links&&e.click())}if(1===a.highlight_titles){const e=document.querySelector('div[data-accessibility="highlight_titles"] button');e&&(e.addEventListener("click",pr),pi.highlight_titles&&e.click())}if(1===a.highlight_hover){const e=document.querySelector('div[data-accessibility="highlight_hover"] button');e&&(e.addEventListener("click",vr),pi.highlight_hover&&e.click())}if(1===a.highlight_focus){const e=document.querySelector('div[data-accessibility="highlight_focus"] button');e&&(e.addEventListener("click",ir),pi.highlight_focus&&e.click())}if(1===a.text_magnifier){const e=document.querySelector('div[data-accessibility="text_magnifier"] button');e&&(e.addEventListener("click",Is),pi.text_magnifier&&e.click())}if(1===a.mute_sounds){const e=document.querySelector('div[data-accessibility="mute_sounds"] button');e&&(e.addEventListener("click",js),pi.mute_sounds&&e.click())}if(1===a.filter_content){const e=document.querySelector('div[data-accessibility="filter_content"] button');e&&e.addEventListener("click",Fs)}if(1===s.move_widget){document.querySelectorAll('div[data-accessibility="accessibility-widget-positions"] .accessibility-widget-positions button').forEach(e=>{e.addEventListener("click",Bs)})}const b=document.querySelector(".accessibility-modal-reset-button");if(b?.addEventListener("click",_i),Object.keys(r).length&&([...document.querySelectorAll("#accessibility_profiles_panel [role='button']"),...document.querySelectorAll("#accessibility_main_controls_panel [role='button']")].forEach(e=>{e.addEventListener("click",()=>{const t=e.nextElementSibling,i=t.querySelector(".aioa-modal-close-button");Ri=e,document.querySelectorAll(".aioa-profile-description").forEach(e=>{e.style.display="none"}),Pi(t),t.style.display="block",setTimeout(()=>{"block"===t.style.display&&i?.focus()},200)})}),document.querySelectorAll(".aioa-profile-description button").forEach(e=>{e.addEventListener("click",()=>{const t=e.parentElement;t&&(t.style.display="none"),setTimeout(()=>{Ri?.focus()},100)})}),Ni()),1===r.adhd){const e=document.querySelector('div[data-accessibility="adhd"] button');e&&(e.addEventListener("click",$o),"adhd"===pi.active_profile&&e.setAttribute("aria-pressed","true"))}if(1===r.blind){const e=document.querySelector('div[data-accessibility="blind"] button');e&&(e.addEventListener("click",$o),"blind"===pi.active_profile&&e.setAttribute("aria-pressed","true"))}if(1===r.cognitive_learning){const e=document.querySelector('div[data-accessibility="cognitive_learning"] button');e&&(e.addEventListener("click",$o),"cognitive_learning"===pi.active_profile&&e.setAttribute("aria-pressed","true"))}if(1===r.color_blind){const e=document.querySelector('div[data-accessibility="color_blind"] button');e&&(e.addEventListener("click",$o),"color_blind"===pi.active_profile&&e.setAttribute("aria-pressed","true"))}if(1===r.dyslexia){const e=document.querySelector('div[data-accessibility="dyslexia"] button');e&&(e.addEventListener("click",$o),"dyslexia"===pi.active_profile&&e.setAttribute("aria-pressed","true"))}if(1===r.motor_impaired){const e=document.querySelector('div[data-accessibility="motor_impaired"] button');e&&(e.addEventListener("click",$o),"motor_impaired"===pi.active_profile&&e.setAttribute("aria-pressed","true"))}if(1===r.seizure_epileptic){const e=document.querySelector('div[data-accessibility="seizure_epileptic"] button');e&&(e.addEventListener("click",$o),"seizure_epileptic"===pi.active_profile&&e.setAttribute("aria-pressed","true"))}if(1===r.visually_impaired){const e=document.querySelector('div[data-accessibility="visually_impaired"] button');e&&(e.addEventListener("click",$o),"visually_impaired"===pi.active_profile&&e.setAttribute("aria-pressed","true"))}if(1===r.elderly){const e=document.querySelector('div[data-accessibility="elderly"] button');e&&(e.addEventListener("click",$o),"elderly"===pi.active_profile&&e.setAttribute("aria-pressed","true"))}if(1===r.parkinson_disease){const e=document.querySelector('div[data-accessibility="parkinson_disease"] button');e&&(e.addEventListener("click",$o),"parkinson_disease"===pi.active_profile&&e.setAttribute("aria-pressed","true"))}if(1===r.epilepsy){const e=document.querySelector('div[data-accessibility="epilepsy"] button');e&&(e.addEventListener("click",$o),"epilepsy"===pi.active_profile&&e.setAttribute("aria-pressed","true"))}if(1===r.deaf){const e=document.querySelector('div[data-accessibility="deaf"] button');e&&(e.addEventListener("click",$o),"deaf"===pi.active_profile&&e.setAttribute("aria-pressed","true"))}if(1===a.slow_cursor){const e=document.querySelector('div[data-accessibility="slow_cursor"] button');e&&(e.addEventListener("click",Vs),pi.slow_cursor&&e.click())}if(1===a.blue_light_filter){const e=document.querySelector('div[data-accessibility="blue_light_filter"] button');e&&(e.addEventListener("click",Js),pi.blue_light_filter&&e.click())}if(1===a.dark_mode){const e=document.querySelector('div[data-accessibility="dark_mode"] button');e&&(e.addEventListener("click",Ys),pi.darkMode&&e.click())}if(1===a.focus_locator){const e=document.querySelector('div[data-accessibility="focus_locator"] button');e&&(e.addEventListener("click",Rr),pi.focus_locator&&!pi.read_mode&&e.click())}if(1===a.focus_indicator){const e=document.querySelector('div[data-accessibility="focus_indicator"] button');e&&(e.addEventListener("click",Ar),pi.focus_indicator&&e.click())}if(1===a.asl){const e=bi();e?.asl??!1?il():nl();const t=document.querySelector('div[data-accessibility="asl"] button');t&&(t.addEventListener("click",cl),pi.asl&&t.click())}if(1===a.summarize_page){const e=document.querySelector('div[data-accessibility="summarize_page"] button');if(null==document.querySelector("#summarise_page_audio")){const t=document.createElement("Audio");t.id="summarise_page_audio",t.style.display="none",e.closest("div").append(t)}e&&e.addEventListener("click",Gr)}if(1===a.subtitle_on_video&&pi.custom_plans&&pi.custom_plans["video-subtitle"]){const e=()=>{document.querySelectorAll("script").forEach(e=>{e.src&&e.src.includes("video-subtitle-widget.js")&&Or()})};await e();const t=document.querySelector('div[data-accessibility="subtitle_on_video"] button');t&&(t.addEventListener("click",Cr),pi.subtitle_on_video&&t.click())}setTimeout(()=>{const e=document.querySelector(".aioa-widget-wrapper");e&&e.hasAttribute("style")&&e.removeAttribute("style")},5e3),document.querySelectorAll("iframe[src*='youtube']").forEach(e=>{const t=e.getAttribute("src");if(t&&!/[?&]enablejsapi=/.test(t))try{const i=new URL(t,window.location.href);i.searchParams.set("enablejsapi","1"),i.searchParams.has("origin")||i.searchParams.set("origin",window.location.origin),e.setAttribute("src",i.toString())}catch(i){const n=t.includes("?")?"&":"?";e.setAttribute("src",`
            $ {
                t
            }
            $ {
                n
            }
            enablejsapi = 1 `)}})};export{zi as A,Fi as B,Ei as C,Ni as D,Do as E,Ha as F,Di as G,ji as H,ca as I,Sl as J,Fs as K,Gr as L,cn as M,un as N,Fo as O,qa as P,Ma as Q,Ba as R,Ms as S,Ui as U,si as a,ri as b,yi as c,$i as d,El as e,li as f,bi as g,Li as h,F as i,Wi as j,Ti as k,ai as l,z as m,Oi as n,B as o,Bo as p,xi as q,Ai as r,hi as s,Ki as t,Vi as u,Jo as v,pi as w,ua as x,_l as y,Ks as z};