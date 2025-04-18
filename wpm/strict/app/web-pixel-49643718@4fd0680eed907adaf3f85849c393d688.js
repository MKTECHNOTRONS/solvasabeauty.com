(() => {
    var ne = Object.create;
    var mt = Object.defineProperty;
    var se = Object.getOwnPropertyDescriptor;
    var ce = Object.getOwnPropertyNames;
    var le = Object.getPrototypeOf,
        ue = Object.prototype.hasOwnProperty;
    var m = (t, e) => () => (t && (e = t(t = 0)), e);
    var fe = (t, e) => () => (e || t((e = {
        exports: {}
    }).exports, e), e.exports);
    var de = (t, e, i, a) => {
        if (e && typeof e == "object" || typeof e == "function")
            for (let o of ce(e)) !ue.call(t, o) && o !== i && mt(t, o, {
                get: () => e[o],
                enumerable: !(a = se(e, o)) || a.enumerable
            });
        return t
    };
    var pe = (t, e, i) => (i = t != null ? ne(le(t)) : {}, de(e || !t || !t.__esModule ? mt(i, "default", {
        value: t,
        enumerable: !0
    }) : i, t));
    var r = (t, e, i) => new Promise((a, o) => {
        var s = f => {
                try {
                    c(i.next(f))
                } catch (d) {
                    o(d)
                }
            },
            n = f => {
                try {
                    c(i.throw(f))
                } catch (d) {
                    o(d)
                }
            },
            c = f => f.done ? a(f.value) : Promise.resolve(f.value).then(s, n);
        c((i = i.apply(t, e)).next())
    });

    function ge() {
        _e(), ye(), Ee(), Oe()
    }

    function _e() {
        try {
            Object.prototype.entries || Object.defineProperty(Object.prototype, "entries", {
                configurable: !0,
                writable: !0,
                value() {
                    return he(this)
                }
            })
        } catch (t) {}
    }

    function he(t) {
        return Object.keys(t).reduce((e, i) => (e.push([i, t[i]]), e), [])
    }

    function ye() {
        try {
            Object.prototype.values || Object.defineProperty(Object.prototype, "values", {
                configurable: !0,
                writable: !0,
                value() {
                    return me(this)
                }
            })
        } catch (t) {}
    }

    function me(t) {
        return Object.keys(t).reduce((e, i) => (e.push(t[i]), e), [])
    }

    function Ee() {
        try {
            Object.prototype.fromEntries || Object.defineProperty(Object.prototype, "fromEntries", {
                configurable: !0,
                writable: !0,
                value(t) {
                    return Se(t)
                }
            })
        } catch (t) {}
    }

    function Se(t) {
        return t ? t.reduce((e, [i, a]) => (e[i] = a, e), {}) : {}
    }

    function Oe() {
        try {
            Array.prototype.flat || Object.defineProperty(Array.prototype, "flat", {
                configurable: !0,
                writable: !0,
                value() {
                    return Pe(this)
                }
            })
        } catch (t) {}
    }

    function Pe(t) {
        return t.reduce((e, i) => e.concat(i), [])
    }
    var Et = m(() => {
        ge()
    });
    var St, Ot = m(() => {
        St = "WebPixel::Render"
    });
    var V, Pt = m(() => {
        Ot();
        V = t => shopify.extend(St, t)
    });
    var At = m(() => {
        Pt()
    });
    var xt = m(() => {
        At()
    });

    function Ct(t) {
        return r(this, null, function*() {
            let e = [t.cookie.get(Ae), t.cookie.get(xe)];
            return Promise.all(e).then(([i, a]) => {
                let o = String(i).toLowerCase() === "true",
                    s = new Set(a.split(","));
                return new H(o, s)
            })
        })
    }

    function E(t, e) {
        return new X(t, e)
    }

    function Tt() {
        return new H(!1, new Set)
    }
    var Ae, xe, Ce, D, X, H, x = m(() => {
        F();
        Ae = "_stag_log_v", xe = "_stag_log_ctx", Ce = "https://ct.pinterest.com/stats/", D = {
            info: "INFO",
            error: "ERROR"
        }, X = class {
            constructor(e, i) {
                this._conf = e, this._context = i
            }
            get conf() {
                return this._conf
            }
            set conf(e) {
                this._conf = e
            }
            get context() {
                return this._context
            }
            set context(e) {
                this._context = e
            }
            print(...e) {
                (this.conf.verbose || this.conf.enabledCtx.has(this.context)) && console.log(`[${D.info}] ${this.context}:`, ...e)
            }
            info(e, i = "") {
                return r(this, null, function*() {
                    (this.conf.verbose || this.conf.enabledCtx.has(this.context)) && console.log(`[${D.info}] ${e}`, i);
                    try {
                        let a = i ? `${i==null?void 0:i.name}: ${i==null?void 0:i.message}` : "";
                        return yield this.sendToServer(D.info, e, a)
                    } catch (a) {
                        return Promise.resolve()
                    }
                })
            }
            error(e, i = "") {
                return r(this, null, function*() {
                    (this.conf.verbose || this.conf.enabledCtx.has(this.context)) && console.error(`[${D.error}] ${e}`, i);
                    try {
                        let a = i ? `${i==null?void 0:i.name}: ${i==null?void 0:i.message}` : "";
                        return yield this.sendToServer(D.error, e, a)
                    } catch (a) {
                        return Promise.resolve()
                    }
                })
            }
            sendToServer(e, i, a = "") {
                return r(this, null, function*() {
                    let o = Y(i, 250),
                        s = Y(a, 1200),
                        n = {
                            messageType: e,
                            message: o,
                            log: `[STAG][${this._context}]${s}`,
                            version: yield G()
                        };
                    try {
                        return fetch(Ce, {
                            method: "POST",
                            body: JSON.stringify(n)
                        })
                    } catch (c) {
                        return Promise.resolve()
                    }
                })
            }
        }, H = class t {
            constructor(e = !1, i = new Set) {
                this._verbose = e, this._enabledCtx = t.parseCtx(i)
            }
            get verbose() {
                return this._verbose
            }
            set verbose(e) {
                this._verbose = e
            }
            get enabledCtx() {
                return this._enabledCtx
            }
            set enabledCtx(e) {
                this._enabledCtx = t.parseCtx(e)
            }
            update(e) {
                this.verbose = e.verbose, this.enabledCtx = e.enabledCtx
            }
            static parseCtx(e) {
                return e instanceof Set ? e : Array.isArray(e) ? new Set(e) : typeof e == "string" && e.trim().length > 0 ? new Set(e.split(",")) : new Set
            }
        }
    });
    var It, Dt, Ft, p, O, K, g, C, Te, u, wi, N = m(() => {
        x();
        It = /^[a-f0-9]{64}$/i, Dt = /^[a-f0-9]{40}$/i, Ft = /^[a-f0-9]{32}$/i, p = {
            EPIK: "_epik",
            DERIVED_EPIK: "_derived_epik",
            UNAUTH: "_pin_unauth"
        }, O = {
            EPIK: "_epik_ls",
            DERIVED_EPIK: "_derived_epik_ls",
            UNAUTH: "_pin_unauth_ls"
        }, K = {
            LOCAL_STORAGE_ONLY: "ls",
            COOKIE_ONLY: "fpc",
            COOKIE_AND_LOCAL_STORAGE: "fpc_ls"
        }, g = {
            NATIVE_CHECKOUT: "ssp_nsc",
            IAB_ANDROID: "ssp_iaba",
            IAB_IOS: "ssp_iabi"
        }, C = "is_eu", Te = {
            aemEnabled: !1,
            aemFnLnEnabled: !1,
            aemPhEnabled: !1,
            aemGeEnabled: !1,
            aemDbEnabled: !1,
            aemLocEnabled: !1,
            aemExternalIdEnabled: !1,
            isEu: void 0,
            epikDataSource: void 0,
            derivedEpikDataSource: void 0,
            unauthIdDataSource: void 0,
            piaaEndPoint: void 0
        }, u = {
            loggerConf: Tt(),
            tagConfig: Te,
            version: "",
            user_data: {}
        }, wi = E(u.loggerConf, "default")
    });

    function v(t) {
        return r(this, null, function*() {
            yield jt(t);
            let e = $t(t);
            l.print("Sending payload to Waltz", e, t);
            let i = JSON.parse(JSON.stringify(Z));
            if (e.length < Nt && (yield w(e, i)), i.success || (yield we(t, i)), e.length >= Nt && !i.success) {
                yield l.error("Sending normal request to Waltz failed. Last resort: sending reduced payload");
                try {
                    let a = Wt(t),
                        o = $t(a);
                    yield w(o, i)
                } catch (a) {
                    l.print("Failed while sending GET request with reduced payload", a)
                }
            }
            if (!i.success) yield l.error("Unable to send a request to Waltz server");
            else if (!i.sendCookies || i.sendJson) {
                let a = `Initial attempt to send payload failed. Succeeded with:
    Method: ${i.method}, Cookies sent: ${i.sendCookies}, Json payload: ${i.sendJson}`;
                yield l.info(a)
            } else l.print(`Successfully sent payload to Waltz using default options. Method: ${i.method}`);
            yield Re(t)
        })
    }

    function w(t, e) {
        return r(this, null, function*() {
            typeof e == "undefined" && (e = JSON.parse(JSON.stringify(Z))), e.method = "GET";
            try {
                yield wt(t, e), e.success || (e.sendCookies = !1, yield wt(t, e))
            } catch (i) {
                yield l.info("Failed while sending GET request", i)
            }
            return e
        })
    }

    function we(t, e) {
        return r(this, null, function*() {
            typeof e == "undefined" && (e = JSON.parse(JSON.stringify(Z))), e.method = "POST";
            let i = [
                [!0, !1],
                [!1, !1],
                [!0, !0],
                [!1, !0]
            ];
            for (let a = 0; a < i.length && !e.success; a++) try {
                e.sendCookies = i[a][0], e.sendJson = i[a][1], yield Le(t, e)
            } catch (o) {
                yield l.info("Failed while sending POST request", o)
            }
            return e
        })
    }

    function wt(t, e) {
        return r(this, null, function*() {
            try {
                let i = {
                    method: "GET",
                    credentials: e.sendCookies ? "include" : "omit"
                };
                e.response = yield fetch(t, i), e.success = !!e.response.ok
            } catch (i) {
                yield l.info(`Unable to send a GET request to Waltz server. Cookies enabled: ${e.sendCookies}`, i), e.success = !1
            }
            return e
        })
    }

    function Le(t, e) {
        return r(this, null, function*() {
            try {
                let i = kt,
                    a = {
                        method: "POST",
                        credentials: e.sendCookies ? "include" : "omit",
                        headers: {
                            "Content-Type": e.sendJson ? "application/json" : "application/x-www-form-urlencoded"
                        },
                        body: e.sendJson ? JSON.stringify(t) : $e(t)
                    };
                e.response = yield fetch(i, a), e.success = !!e.response.ok
            } catch (i) {
                yield l.info(`Unable to send a POST request to Waltz server. Cookies enabled: ${e.sendCookies}`, i), e.success = !1
            }
            return e
        })
    }

    function $e(t) {
        let e = it(t);
        return new URLSearchParams(Object.fromEntries(e))
    }

    function Re(t) {
        return r(this, null, function*() {
            try {
                if (u.env === "dev") {
                    let e = JSON.stringify({
                        parsedEvent: t
                    });
                    yield l.info("Raw event", e)
                }
            } catch (e) {
                l.print("Failed to send debug data", e)
            }
        })
    }

    function tt(t) {
        return r(this, null, function*() {
            let e = new TextEncoder().encode(t),
                i = yield crypto.subtle.digest("SHA-256", e);
            return Array.from(new Uint8Array(i)).map(o => o.toString(16).padStart(2, "0")).join("")
        })
    }

    function P(t) {
        return r(this, null, function*() {
            return t ? tt(t.trim().toLowerCase()) : ""
        })
    }

    function Lt(t) {
        return r(this, null, function*() {
            if (t == null) return t;
            let e = t.toString().trim().toLowerCase();
            return e === "" || It.test(e) || Dt.test(e) || Ft.test(e) ? e : tt(e)
        })
    }

    function Ue(t) {
        return r(this, null, function*() {
            if (t instanceof Array) {
                let e = [];
                for (let i = 0; i < t.length; i += 1) {
                    let a = Lt(t[i]);
                    e.push(a)
                }
                return Promise.all(e)
            }
            return Lt(t)
        })
    }

    function G() {
        return r(this, null, function*() {
            let t = `stag-${u.env}-${u.majorVersion}.${u.minorVersion}`;
            return (yield tt(t)).substring(0, 8)
        })
    }

    function et() {
        return !0
    }

    function jt(t, e = 10, i = 0) {
        return r(this, null, function*() {
            i > e || (b in t && (t[b] = yield Ue(t[b])), yield Promise.all(Object.values(t).filter(a => !Array.isArray(a) && a === Object(a)).map(a => r(this, null, function*() {
                return jt(a, e, i + 1)
            }))))
        })
    }

    function it(t) {
        return Object.entries(t).map(([e, i]) => [e, typeof i == "object" ? JSON.stringify(i) : i])
    }

    function Ht(t, e = !1) {
        return r(this, null, function*() {
            try {
                let i = Wt(t);
                i.event && delete i.event, e && (i[Fe.SKIP_TAG_CONFIG] = !0);
                let a = Gt(De, it(i));
                l.print(`Retrieving data from URL: ${a}`);
                let o = yield w(a);
                if (!o || !o.success) yield l.info("Fetch response from /user is empty");
                else return yield o.response
            } catch (i) {
                yield l.error("Failed to fetch info from /user endpoint", i)
            }
            return Promise.resolve()
        })
    }

    function $t(t) {
        return Gt(kt, it(t))
    }

    function Gt(t, e) {
        let i = e.map(([a, o]) => `${a}=${encodeURIComponent(o)}`).join("&");
        return `${t}?${i}`
    }

    function Kt() {
        return {
            cb: `${Date.now()}`,
            ed: {
                np: "shopify-web-pixel",
                user_data: {
                    em: []
                }
            },
            ad: {},
            pd: {
                np: "shopify-web-pixel"
            },
            ov: {
                tkp: "stag"
            }
        }
    }

    function Wt(t) {
        let e = JSON.parse(JSON.stringify(t)),
            i = e.ed,
            a = e.pd,
            o = e.ad;
        return i && (i.user_data && delete i.user_data, i.line_items && delete i.line_items), o && o.ua && delete o.ua, a && (a.client_user_agent && delete a.client_user_agent, a.fn && delete a.fn, a.ln && delete a.ln, a.ph && delete a.ph, a.ct && delete a.ct, a.st && delete a.st, a.zp && delete a.zp, a.country && delete a.country), e.ov && delete e.ov, ot(e)
    }

    function J(t, e) {
        let i = ke(t, e);
        return i ? i[0] : null
    }

    function ke(t, e) {
        var a, o, s;
        let i = (s = (o = (a = t == null ? void 0 : t.context) == null ? void 0 : a.document) == null ? void 0 : o.location) == null ? void 0 : s.search;
        return je(i, e)
    }

    function je(t, e) {
        return T(t) || T(e) ? [] : (t.startsWith("?") ? t.substring(1) : t).split("&").map(a => a.split("=")).filter(([a]) => M(e, a)).map(([, a]) => a)
    }

    function M(t, e) {
        return t.localeCompare(e, void 0, {
            sensitivity: "base"
        }) === 0
    }

    function L(t, e) {
        return r(this, null, function*() {
            var i;
            try {
                if (!(t != null && t.cookie)) return l.print("Cookies are not available"), Promise.resolve();
                if (A()) return yield(i = t == null ? void 0 : t.cookie) == null ? void 0 : i.get(e)
            } catch (a) {
                yield l.error(`Failed to get a cookie: ${e}`, a)
            }
            return Promise.resolve()
        })
    }

    function z(o, s, n) {
        return r(this, arguments, function*(t, e, i, a = W) {
            var c;
            try {
                if (!(t != null && t.cookie)) return l.print("Cookies are not available"), Promise.resolve();
                if (A()) {
                    let f = `${e}=${i}; expires=${a.toUTCString()}; path=/;`;
                    return l.print(`Setting cookie: ${f}`), yield(c = t == null ? void 0 : t.cookie) == null ? void 0 : c.set(f)
                }
            } catch (f) {
                yield l.error("Failed to write cookie", f)
            }
            return Promise.resolve()
        })
    }

    function He(t, e) {
        return r(this, null, function*() {
            var i;
            try {
                return t != null && t.cookie ? yield(i = t == null ? void 0 : t.cookie) == null ? void 0 : i.set(e, ""): (l.print("Cookies are not available"), Promise.resolve())
            } catch (a) {
                yield l.error(`Failed to delete value from cookies: ${e}`, a)
            }
            return Promise.resolve()
        })
    }

    function $(t, e) {
        return r(this, null, function*() {
            var i;
            try {
                if (!(t != null && t.sessionStorage)) return l.print("Session storage is not available"), Promise.resolve();
                if (A()) return yield(i = t == null ? void 0 : t.sessionStorage) == null ? void 0 : i.getItem(e)
            } catch (a) {
                yield l.error("Failed to read from session storage", a)
            }
            return Promise.resolve()
        })
    }

    function R(t, e, i) {
        return r(this, null, function*() {
            var a;
            try {
                if (!(t != null && t.sessionStorage)) return l.print("Session storage is not available"), Promise.resolve();
                if (A()) return l.print(`Writing to session storage: ${e}:${i}`), yield(a = t == null ? void 0 : t.sessionStorage) == null ? void 0 : a.setItem(e, i)
            } catch (o) {
                yield l.error("Failed to write to session storage", o)
            }
            return Promise.resolve()
        })
    }

    function Rt(t, e) {
        return r(this, null, function*() {
            var i;
            try {
                return t != null && t.sessionStorage ? yield(i = t == null ? void 0 : t.sessionStorage) == null ? void 0 : i.removeItem(e): (l.print("Session storage is not available"), Promise.resolve())
            } catch (a) {
                yield l.error(`Failed to delete value from session storage: ${e}`, a)
            }
            return Promise.resolve()
        })
    }

    function U(t, e, i) {
        return r(this, null, function*() {
            var a;
            try {
                if (!(t != null && t.localStorage)) return l.print("Local storage is not available"), Promise.resolve();
                let o = yield k(t);
                if (zt() && !o && e) return l.print(`Writing to local storage: ${e}:${i}`), yield(a = t == null ? void 0 : t.localStorage) == null ? void 0 : a.setItem(e, Ge(i));
                l.print(`Can't write entry to local storage: ${e}:${i}. Is EU: ${o}`), yield j()
            } catch (o) {
                yield l.error("Failed to write to session storage", o)
            }
            return Promise.resolve()
        })
    }

    function Ge(t) {
        if (!t) return "";
        try {
            return JSON.stringify({
                value: t,
                expires: W
            })
        } catch (e) {
            return l.print("Failed to format local storage value"), t
        }
    }

    function Jt(t, e) {
        return r(this, null, function*() {
            try {
                if (!(t != null && t.localStorage)) return l.print("Local storage is not available"), Promise.resolve();
                let i = yield k(t);
                if (zt() && !i) return yield Ke(t, e)
            } catch (i) {
                yield l.error(`Failed to read entry from local storage: ${e}.`, i)
            }
            return Promise.resolve()
        })
    }

    function Ke(t, e) {
        return r(this, null, function*() {
            var i;
            if (!e) return "";
            try {
                let a = yield(i = t == null ? void 0 : t.localStorage) == null ? void 0 : i.getItem(e);
                try {
                    if (T(a)) return "";
                    let o = JSON.parse(a, (s, n) => s === "expires" ? new Date(n) : n);
                    return o && o.expires >= new Date ? o.value : yield Mt(t, e)
                } catch (o) {
                    return l.print(`Local storage value is not a JSON or format not expected. Key: ${e}; Value: ${a}`, o), a.startsWith("{") || (l.print("Overwriting local storage value as Json"), yield U(t, e, a)), a
                }
            } catch (a) {
                yield l.error(`Unexpected error when parsing local storage value with key=${e}`, a)
            }
            return ""
        })
    }

    function Mt(t, e) {
        return r(this, null, function*() {
            var i;
            try {
                return t != null && t.localStorage ? yield(i = t == null ? void 0 : t.localStorage) == null ? void 0 : i.removeItem(e): (l.print("Local storage is not available"), Promise.resolve())
            } catch (a) {
                yield l.error(`Failed to delete value from session storage: ${e}`, a)
            }
            return Promise.resolve()
        })
    }

    function k(t) {
        return r(this, null, function*() {
            if (u.tagConfig.isEu !== void 0) return u.tagConfig.isEu;
            if (!(t != null && t.sessionStorage)) return !0;
            let e = yield $(t, C);
            return at(e)
        })
    }

    function at(t) {
        return !(t === !1 || t === 0 || typeof t == "string" && t.trim().toLowerCase() === "false")
    }

    function B(t) {
        if (!t) return "";
        let e = Ne[t];
        return l.print("Shop event name: ", t), l.print("Pin event name: ", e), e || ""
    }

    function A() {
        return !0
    }

    function zt() {
        return !0
    }

    function j(t) {
        return r(this, null, function*() {
            try {
                let e = Object.values(p).concat(Object.values(O)).map(i => Mt(t, i));
                return yield Promise.all(e)
            } catch (e) {
                yield l.error("Failed to clear 1p local storage")
            }
            return Promise.resolve()
        })
    }

    function We(t) {
        return r(this, null, function*() {
            try {
                let e = Object.values(g).map(i => Rt(t, i));
                return e.push(Rt(t, C)), yield Promise.all(e)
            } catch (e) {
                yield l.error("Failed to clear 1p session storage")
            }
            return Promise.resolve()
        })
    }

    function Je(t) {
        return r(this, null, function*() {
            try {
                let e = Object.values(p).map(i => He(t, i));
                return yield Promise.all(e)
            } catch (e) {
                yield l.error("Failed to clear 1p cookies")
            }
            return Promise.resolve()
        })
    }

    function Bt(t) {
        return r(this, null, function*() {
            return Promise.all([Je(t), We(t), j(t)])
        })
    }

    function qt(t) {
        return t === void 0 || Number(t) !== t ? !1 : new Date().getTime() - t <= Ie
    }

    function Vt(t) {
        l.print("Identifiers in context: ", u.user_data), T(u.user_data) || Object.assign(t.pd, u.user_data)
    }

    function ot(t) {
        return Q(t, 10, 0)
    }

    function Q(t, e = 10, i = 0) {
        return i >= e || Xt(t) || t !== Object(t) ? t : Array.isArray(t) ? t.map(a => Q(a, e, i + 1)).filter(a => !T(a)) : Object.fromEntries(Object.entries(t).map(([a, o]) => [a, Q(o, e, i + 1)]).filter(([, a]) => !T(a)))
    }

    function T(t) {
        return t === 0 || t === !1 ? !1 : Array.isArray(t) ? t.length === 0 : t === Object(t) ? Object.keys(t).length === 0 : !t
    }

    function Xt(t) {
        return typeof t == "string" || t instanceof String
    }

    function Yt(t, e = 2e3, i = 150) {
        return r(this, null, function*() {
            if (t()) return Promise.resolve();
            let a = Date.now(),
                o = s => {
                    t() || Date.now() - a > e ? s() : (l.print("Waiting for condition: ", t), setTimeout(() => o(s), i))
                };
            return new Promise(o)
        })
    }

    function Y(t, e) {
        let i = Xt(t) ? t : JSON.stringify(t);
        return i.length > e && (i = `[TRIMMED]${i.substring(0,e)}`), i
    }

    function bt(t) {
        return !t || typeof t != "number" ? t : Math.round((t + Number.EPSILON) * 100) / 100
    }
    var l, Ie, Nt, b, Ut, kt, De, Fe, Z, Ne, W, F = m(() => {
        N();
        x();
        l = E(u.loggerConf, "utils"), Ie = 3e5, Nt = 2e3, b = "em", Ut = "https://ct.pinterest.com", kt = `${Ut}/v3/`, De = `${Ut}/user/`, Fe = {
            SKIP_TAG_CONFIG: "stc"
        }, Z = {
            success: !1,
            method: "GET",
            sendCookies: !0,
            sendJson: !1,
            response: void 0
        }, Ne = {
            checkout_address_info_submitted: "",
            checkout_completed: "Checkout",
            checkout_contact_info_submitted: "",
            checkout_shipping_info_submitted: "",
            checkout_started: "",
            collection_viewed: "ViewCategory",
            page_viewed: "PageVisit",
            payment_info_submitted: "",
            product_added_to_cart: "AddToCart",
            product_viewed: "PageVisit",
            search_submitted: "Search"
        }, W = new Date;
        W.setFullYear(W.getFullYear() + 1)
    });

    function Qt(t, e) {
        return r(this, null, function*() {
            var i;
            try {
                if (!t || !e) {
                    _.print("Init or param object is not available");
                    return
                }
                let a = e.pd,
                    o = (i = t == null ? void 0 : t.data) == null ? void 0 : i.customer;
                o && (a.external_id = yield P(o == null ? void 0 : o.id), a.em = yield P(o == null ? void 0 : o.email), a.fn = yield P(o == null ? void 0 : o.firstName), a.ln = yield P(o == null ? void 0 : o.lastName), a.ph = yield P(o == null ? void 0 : o.phone))
            } catch (a) {
                yield _.error("Failed to parse init object in shop_parser", a)
            }
        })
    }

    function Zt(t, e) {
        return r(this, null, function*() {
            try {
                yield ze(t, e), ii(t, e), e.event = e.event || B(t == null ? void 0 : t.name);
                let i = e.event;
                i ? (i === "AddToCart" && (_.print("Parsing add to cart event:", t), Be(t, e)), i === "Checkout" && _.print("Parsing checkout event:", t), i === "ViewCategory" && (_.print("Parsing viewcategory event:", t), qe(t, e)), i === "Search" && (_.print("Parsing search_submitted event:", t), Ve(t, e)), i === "PageVisit" && (_.print("Parsing page_visit event:", t), Xe(t, e))) : _.print("Can't find the event by name")
            } catch (i) {
                yield _.error("Failed to parse event in shop_parser", i)
            }
        })
    }

    function ze(t, e) {
        return r(this, null, function*() {
            var a, o, s;
            let i = e.ed;
            i.eventID = ((a = e == null ? void 0 : e.ov) == null ? void 0 : a.env) === "dev" ? `stag-${t==null?void 0:t.id}` : t == null ? void 0 : t.id, yield be(t, e), (o = t == null ? void 0 : t.data) != null && o.checkout && (yield Ye((s = t == null ? void 0 : t.data) == null ? void 0 : s.checkout, e))
        })
    }

    function Be(t, e) {
        var o, s, n, c, f, d, y, I;
        let i = e.ed;
        i.timestamp = t == null ? void 0 : t.timestamp, i.currency = (c = (n = (s = (o = t == null ? void 0 : t.data) == null ? void 0 : o.cartLine) == null ? void 0 : s.merchandise) == null ? void 0 : n.price) == null ? void 0 : c.currencyCode, i.line_items = i.line_items || [];
        let a = rt((d = (f = t == null ? void 0 : t.data) == null ? void 0 : f.cartLine) == null ? void 0 : d.merchandise);
        a.product_quantity = (I = (y = t == null ? void 0 : t.data) == null ? void 0 : y.cartLine) == null ? void 0 : I.quantity, i.line_items.push(a)
    }

    function qe(t, e) {
        var a, o, s, n, c, f;
        let i = e.ed;
        i.category_id = (o = (a = t == null ? void 0 : t.data) == null ? void 0 : a.collection) == null ? void 0 : o.id, i.category_title = (n = (s = t == null ? void 0 : t.data) == null ? void 0 : s.collection) == null ? void 0 : n.title, i.collection_product_ids = (f = (c = t == null ? void 0 : t.data) == null ? void 0 : c.collection) == null ? void 0 : f.productVariants.map(d => d.id).join(",")
    }

    function Ve(t, e) {
        var i;
        (i = t == null ? void 0 : t.data) != null && i.searchResult && ei(t.data.searchResult, e)
    }

    function Xe(t, e) {
        var a;
        let i = e.ed;
        if ((t == null ? void 0 : t.name) === "product_viewed") {
            let o = rt((a = t == null ? void 0 : t.data) == null ? void 0 : a.productVariant);
            i.currency = o == null ? void 0 : o.product_currency, i.line_items = i.line_items || [], i.line_items.push(o)
        }
    }

    function Ye(t, e) {
        return r(this, null, function*() {
            var i, a;
            try {
                let o = e.ed,
                    s = o.user_data || {};
                o.user_data = s, s.em = [t == null ? void 0 : t.email], s.phone = t == null ? void 0 : t.phone, ti(t == null ? void 0 : t.order, e), Qe(t == null ? void 0 : t.lineItems, e), o.order_quantity = o.line_items.map(n => (n == null ? void 0 : n.product_quantity) || 0).reduce((n, c) => n + c), o.value = o.value || ((i = t == null ? void 0 : t.totalPrice) == null ? void 0 : i.amount), o.currency = (a = t == null ? void 0 : t.totalPrice) == null ? void 0 : a.currencyCode
            } catch (o) {
                _.print("Failed to parse checkout object", o)
            }
        })
    }

    function be(t, e) {
        return r(this, null, function*() {
            let i = e.pd,
                a = Object.entries(Me).map(n => r(this, [n], function*([o, s]) {
                    try {
                        let c = s.extract(t);
                        c && (i[o] = s.should_hash ? yield P(c): c, u.user_data[o] = i[o])
                    } catch (c) {
                        yield _.error("Failed to parse user identifier fields", c)
                    }
                }));
            return Promise.all(a)
        })
    }

    function Qe(t, e) {
        _.print("Parsing line items:", t), e.ed.line_items = e.ed.line_items || [];
        let i = t.map(o => ve(o));
        e.ed.line_items = e.ed.line_items.concat(i);
        let a = t.map(o => Ze(o) || 0).reduce((o, s) => o + s);
        e.ed.value = bt(a), _.print("Parsed line items", e.ed.line_items)
    }

    function Ze(t) {
        var e, i;
        try {
            if (!t) return 0;
            let a = ((i = (e = t == null ? void 0 : t.variant) == null ? void 0 : e.price) == null ? void 0 : i.amount) || 0,
                o = (t == null ? void 0 : t.quantity) || 1;
            return a * o
        } catch (a) {
            _.print("Failed to calculate price for line item: ", t)
        }
        return 0
    }

    function ve(t) {
        let e = rt(t == null ? void 0 : t.variant);
        return e.product_name = t == null ? void 0 : t.title, e.line_item_id = t == null ? void 0 : t.id, e.product_quantity = t == null ? void 0 : t.quantity, e
    }

    function ti(t, e) {
        e.ed.order_id = t == null ? void 0 : t.id
    }

    function rt(t) {
        var s, n, c, f, d, y;
        let e = (s = t == null ? void 0 : t.product) == null ? void 0 : s.title,
            i = t == null ? void 0 : t.title,
            a = e || i;
        return e && !e.includes(i) && (a = `${e} - ${i}`), {
            product_name: a,
            product_category: (n = t == null ? void 0 : t.product) == null ? void 0 : n.type,
            product_brand: (c = t == null ? void 0 : t.product) == null ? void 0 : c.vendor,
            product_id: (f = t == null ? void 0 : t.product) == null ? void 0 : f.id,
            product_variant_id: t == null ? void 0 : t.id,
            product_price: (d = t == null ? void 0 : t.price) == null ? void 0 : d.amount,
            product_currency: (y = t == null ? void 0 : t.price) == null ? void 0 : y.currencyCode
        }
    }

    function ei(t, e) {
        let i = e.ed;
        i.search_query = t == null ? void 0 : t.query
    }

    function ii(t, e) {
        var a, o, s, n, c, f, d, y, I, lt, ut, ft, dt, pt, gt, _t, ht, yt;
        let i = e.ad;
        i.ua = (o = (a = t == null ? void 0 : t.context) == null ? void 0 : a.navigator) == null ? void 0 : o.userAgent, i.sh = ((c = (n = (s = t == null ? void 0 : t.context) == null ? void 0 : s.window) == null ? void 0 : n.screen) == null ? void 0 : c.height) || ((d = (f = t == null ? void 0 : t.context) == null ? void 0 : f.window) == null ? void 0 : d.outerHeight), i.sw = ((lt = (I = (y = t == null ? void 0 : t.context) == null ? void 0 : y.window) == null ? void 0 : I.screen) == null ? void 0 : lt.width) || ((ft = (ut = t == null ? void 0 : t.context) == null ? void 0 : ut.window) == null ? void 0 : ft.outerWidth), i.loc = (pt = (dt = t == null ? void 0 : t.context) == null ? void 0 : dt.document) == null ? void 0 : pt.location.href, i.ref = (_t = (gt = t == null ? void 0 : t.context) == null ? void 0 : gt.document) == null ? void 0 : _t.referrer, i.if = !0, i.language = (yt = (ht = t == null ? void 0 : t.context) == null ? void 0 : ht.navigator) == null ? void 0 : yt.language
    }
    var _, Me, vt = m(() => {
        F();
        N();
        x();
        _ = E(u.loggerConf, "shop_parse"), Me = {
            external_id: {
                extract: t => t == null ? void 0 : t.clientId,
                should_hash: !0
            },
            em: {
                extract: t => {
                    var e, i;
                    return (i = (e = t == null ? void 0 : t.data) == null ? void 0 : e.checkout) == null ? void 0 : i.email
                },
                should_hash: !0
            },
            ct: {
                extract: t => {
                    var e, i, a;
                    return (a = (i = (e = t == null ? void 0 : t.data) == null ? void 0 : e.checkout) == null ? void 0 : i.shippingAddress) == null ? void 0 : a.city
                },
                should_hash: !0
            },
            st: {
                extract: t => {
                    var e, i, a;
                    return (a = (i = (e = t == null ? void 0 : t.data) == null ? void 0 : e.checkout) == null ? void 0 : i.shippingAddress) == null ? void 0 : a.province
                },
                should_hash: !0
            },
            country: {
                extract: t => {
                    var e, i, a;
                    return (a = (i = (e = t == null ? void 0 : t.data) == null ? void 0 : e.checkout) == null ? void 0 : i.shippingAddress) == null ? void 0 : a.country
                },
                should_hash: !0
            },
            zp: {
                extract: t => {
                    var e, i, a;
                    return (a = (i = (e = t == null ? void 0 : t.data) == null ? void 0 : e.checkout) == null ? void 0 : i.shippingAddress) == null ? void 0 : a.zip
                },
                should_hash: !0
            },
            ph: {
                extract: t => {
                    var e, i, a;
                    return (a = (i = (e = t == null ? void 0 : t.data) == null ? void 0 : e.checkout) == null ? void 0 : i.shippingAddress) == null ? void 0 : a.phone
                },
                should_hash: !0
            },
            fn: {
                extract: t => {
                    var e, i, a;
                    return (a = (i = (e = t == null ? void 0 : t.data) == null ? void 0 : e.checkout) == null ? void 0 : i.shippingAddress) == null ? void 0 : a.firstName
                },
                should_hash: !0
            },
            ln: {
                extract: t => {
                    var e, i, a;
                    return (a = (i = (e = t == null ? void 0 : t.data) == null ? void 0 : e.checkout) == null ? void 0 : i.shippingAddress) == null ? void 0 : a.lastName
                },
                should_hash: !0
            },
            client_user_agent: {
                extract: t => {
                    var e, i;
                    return (i = (e = t == null ? void 0 : t.context) == null ? void 0 : e.navigator) == null ? void 0 : i.userAgent
                },
                should_hash: !1
            }
        }
    });

    function ie(t, e, i) {
        return r(this, null, function*() {
            try {
                yield ci(t, e, i);
                let a = [];
                return a.push(li(t, e)), a.push(gi(t)), a.push(fi(i)), yield Promise.all(a), (yield k(t)) && (yield j()), pi(t, i)
            } catch (a) {
                yield h.error("Failed to parse event in pin_parser", a)
            }
            return Promise.resolve()
        })
    }

    function ci(t, e, i) {
        return r(this, null, function*() {
            try {
                q ? yield Yt(() => q === !1): q = !0, te || (yield di(t, i), yield ui(t, e), te = !0);
                let a = i.pd;
                a[ee] = yield L(t, p.EPIK), a[ri] = yield L(t, p.UNAUTH), a[ai] = yield L(t, p.DERIVED_EPIK), q = !1
            } catch (a) {
                yield h.info("Failed to load FP cookies", a)
            }
            return Promise.resolve()
        })
    }

    function li(t, e) {
        return r(this, null, function*() {
            var i, a;
            try {
                if (A()) {
                    let o = `${new Date().getTime()}`;
                    J(e, g.NATIVE_CHECKOUT) === "1" && (yield R(t, g.NATIVE_CHECKOUT, o));
                    let s = parseInt(J(e, g.IAB_IOS), 10);
                    qt(s) && (yield R(t, g.IAB_IOS, `${s}`));
                    let n = (a = (i = e == null ? void 0 : e.context) == null ? void 0 : i.document) == null ? void 0 : a.referrer;
                    n && n.startsWith("android-app") && n.includes("com.pinterest") && (yield R(t, g.IAB_ANDROID, o))
                }
            } catch (o) {
                yield h.error("Failed to parse SSP", o)
            }
        })
    }

    function ui(t, e) {
        return r(this, null, function*() {
            let i = J(e, ee);
            return h.print(`Epik is present in URL and is truthy: ${!!i}.`, i), i ? Promise.all([z(t, p.EPIK, i), U(t, O.EPIK, i)]) : Promise.resolve()
        })
    }

    function fi(t) {
        return r(this, null, function*() {
            var i, a;
            let e = (a = (i = u) == null ? void 0 : i.tagConfig) == null ? void 0 : a.piaaEndPoint;
            if (e && e.length > 10) try {
                let o = yield w(e);
                if (o && o.success) {
                    let s = o.response,
                        n = JSON.parse(yield s.text());
                    n && (n != null && n.xff) && (t[si] = n == null ? void 0 : n.xff)
                } else yield h.info("Unable to fetch IP from server")
            } catch (o) {
                yield h.error("piaaEndpointRequestCallBack json error", o)
            }
        })
    }

    function di(t, e) {
        return r(this, null, function*() {
            try {
                let i = yield Ht(e);
                if (i) {
                    let a = yield i.text(), o = JSON.parse(a);
                    if (Object.entries(o).forEach(([n, c]) => {
                            u.tagConfig[n] = c
                        }), h.print("tag config: ", u.tagConfig), u.tagConfig.isEu === void 0) {
                        let n = at(o.isEu);
                        u.tagConfig.isEu = n, typeof u.tagConfig.isEu == "boolean" && u.tagConfig.isEu && (yield j()), yield R(t, C, n)
                    }
                    let s = Array.from(i.headers.entries(), ([n, c]) => {
                        h.print(`Waltz response entry: ${n} => ${c}`);
                        let f = [];
                        return M(ni, n) && c && (f.push(z(t, p.UNAUTH, c)), f.push(U(t, O.UNAUTH, c))), M(oi, n) && c && (f.push(z(t, p.DERIVED_EPIK, c)), f.push(U(t, O.DERIVED_EPIK, c))), f
                    }).flat();
                    return Promise.all(s)
                }
                yield h.info("Response from /user is empty")
            } catch (i) {
                yield h.error("Failed to call user endpoint", i)
            }
            return Promise.resolve()
        })
    }

    function pi(t, e) {
        return r(this, null, function*() {
            let i = e.ad;
            if (A()) {
                let o = yield $(t, g.NATIVE_CHECKOUT), s = yield $(t, g.IAB_IOS), n = yield $(t, g.IAB_ANDROID);
                o && (i[g.NATIVE_CHECKOUT] = o), s && (i[g.IAB_IOS] = s), n && (i[g.IAB_ANDROID] = n)
            } else yield Bt(t);
            let a = yield k(t);
            return a !== void 0 && (i[C] = a), et() && (i.epikDataSource = u.tagConfig.epikDataSource, i.derivedEpikDataSource = u.tagConfig.derivedEpikDataSource, i.unauthIdDataSource = u.tagConfig.unauthIdDataSource), Promise.resolve()
        })
    }

    function gi(t) {
        return r(this, null, function*() {
            if (!et()) return Promise.resolve();
            try {
                let e = Object.entries(p).map(o => r(this, [o], function*([i, a]) {
                    return _i(t, i, a)
                }));
                return yield Promise.all(e)
            } catch (e) {
                yield h.error("Failed to set datasource flag in automatic data", e)
            }
            return Promise.resolve()
        })
    }

    function _i(t, e, i) {
        return r(this, null, function*() {
            try {
                let a = L(t, i),
                    o = Jt(t, O[e]),
                    [s, n] = yield Promise.all([a, o]), c = !!s, f = !!n;
                switch (i) {
                    case p.EPIK:
                        u.tagConfig.epikDataSource = nt(c, f);
                        break;
                    case p.DERIVED_EPIK:
                        u.tagConfig.derivedEpikDataSource = nt(c, f);
                        break;
                    case p.UNAUTH:
                        u.tagConfig.unauthIdDataSource = nt(c, f);
                        break;
                    default:
                }
            } catch (a) {
                yield h.error(`Failed to set datasource flag for ${e} cookie ${i}`, a)
            }
            return Promise.resolve()
        })
    }

    function nt(t, e) {
        return t && e ? K.COOKIE_AND_LOCAL_STORAGE : t ? K.COOKIE_ONLY : e ? K.LOCAL_STORAGE_ONLY : null
    }
    var ee, ai, oi, ri, ni, si, h, q, te, ae = m(() => {
        F();
        N();
        x();
        ee = "epik", ai = "derived_epik", oi = "Epik", ri = "pin_unauth", ni = "Pin-Unauth", si = "piaa", h = E(u.loggerConf, "pin_parse"), q = !1, te = !1
    });
    var re = fe(ct => {
        Et();
        xt();
        vt();
        ae();
        F();
        x();
        N();
        u.env = "prod";
        u.majorVersion = 0;
        u.minorVersion = 84;
        var st = `${u.majorVersion}.${u.minorVersion}`,
            S = E(u.loggerConf, "index"),
            oe = !1;
        V(o => r(ct, [o], function*({
            analytics: t,
            browser: e,
            settings: i,
            init: a
        }) {
            yield yi(e), S.print("New API: Init object: ", a), S.print(`STAG Version: ${st}`);
            try {
                S.print("Settings: ", i);
                let s = i.tagID,
                    n = Kt();
                n.tid = s, n.ov.version = st, n.ov.env = u.env, n.ad.mh = yield G(), yield Qt(a, n), t.subscribe("all_events", c => r(ct, null, function*() {
                    S.print("Shopify event: ", c);
                    let f = B(c == null ? void 0 : c.name);
                    if (f) {
                        let d = JSON.parse(JSON.stringify(n));
                        d.event = f, yield Zt(c, d), yield ie(e, c, d), Vt(d);
                        let y = ot(d);
                        S.print(`Parsed event (STAG V.${st}): `, d), f === "PageVisit" && (yield hi(y)), yield v(y)
                    } else S.print("Not a Pinterest Event: ", c)
                }))
            } catch (s) {
                yield S.error("STAG top-level error", s)
            }
        }));

        function hi(t) {
            return r(this, null, function*() {
                if (!oe) {
                    oe = !0;
                    try {
                        let e = JSON.parse(JSON.stringify(t));
                        e.event = "init", e.ed && delete e.ed, yield v(e)
                    } catch (e) {
                        yield S.error("Failed to emit init event", e)
                    }
                }
            })
        }

        function yi(t) {
            return r(this, null, function*() {
                return Ct(t).then(e => {
                    u.loggerConf.update(e)
                })
            })
        }
    });
    var ia = pe(re());
})();