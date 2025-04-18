(function(shopify) {
    (() => {
        var ye = Object.defineProperty,
            ve = Object.defineProperties;
        var Ae = Object.getOwnPropertyDescriptors;
        var se = Object.getOwnPropertySymbols;
        var Re = Object.prototype.hasOwnProperty,
            be = Object.prototype.propertyIsEnumerable;
        var le = (t, c, p) => c in t ? ye(t, c, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: p
            }) : t[c] = p,
            I = (t, c) => {
                for (var p in c || (c = {})) Re.call(c, p) && le(t, p, c[p]);
                if (se)
                    for (var p of se(c)) be.call(c, p) && le(t, p, c[p]);
                return t
            },
            V = (t, c) => ve(t, Ae(c));
        var _e = "WebPixel::Render";
        var j = t => shopify.extend(_e, t);
        var de = !1;

        function Te() {
            for (let t of Object.values(ce)) t.enabled = t.percent > Math.random() * 100
        }

        function T(t) {
            return de || (de = !0, Te()), ce[t].enabled
        }
        var ce = {
            0: {
                percent: 0,
                enabled: !1
            },
            1: {
                percent: 0,
                enabled: !1
            },
            2: {
                percent: 100,
                enabled: !1
            },
            3: {
                percent: 100,
                enabled: !1
            },
            4: {
                percent: 0,
                enabled: !1
            },
            5: {
                percent: 0,
                enabled: !1
            },
            6: {
                percent: 100,
                enabled: !0
            }
        };
        var Ce = "developer_id.dYmNjMT",
            U = "dNzYwYj";

        function me(t) {
            let c = t.init.customerPrivacy;
            if (c === void 0 || c.marketingAllowed || c.analyticsProcessingAllowed) ue(t, c);
            else {
                let p = !1;
                t.customerPrivacy.subscribe("visitorConsentCollected", v => {
                    let A = v.customerPrivacy;
                    !p && (A.marketingAllowed || A.analyticsProcessingAllowed) && (ue(t, A), p = !0)
                })
            }
        }

        function ue(t, c) {
            var B, $, K, X, Z, J, Q, h, k, ee, te, ne;
            let p = window.dataLayer = window.dataLayer || [],
                v = JSON.parse(t.settings.config),
                A = [];
            if (v.google_tag_ids && v.google_tag_ids.length > 0) {
                let e = v.google_tag_ids;
                A.push(...e)
            } else A.push(v.pixel_id);
            let o = window.gtag = window.gtag || function() {
                p.push(arguments)
            };
            c && (o("consent", "default", fe(c)), o("set", Ee(c))), T(3) ? S(t) && (o("set", {
                ignore_referrer: "true"
            }), o("policy", "detect_click_events", () => !1), o("policy", "detect_element_visibility_events", () => !1), o("policy", "detect_history_change_events", () => !1), o("policy", "detect_link_click_events", () => !1), o("policy", "detect_timer_events", () => !1), o("policy", "detect_youtube_activity_events", () => !1), o("policy", "detect_scroll_events", () => !1), o("policy", "detect_form_submit_events", () => !1), o("policy", "detect_form_interaction_events", () => !1)) : (S(t) && o("set", {
                ignore_referrer: "true"
            }), o("policy", "detect_click_events", () => !1), o("policy", "detect_element_visibility_events", () => !1), o("policy", "detect_history_change_events", () => !1), o("policy", "detect_link_click_events", () => !1), o("policy", "detect_timer_events", () => !1), o("policy", "detect_youtube_activity_events", () => !1), o("policy", "detect_scroll_events", () => !1), o("policy", "detect_form_submit_events", () => !1), o("policy", "detect_form_interaction_events", () => !1)), o("policy", "internal_sw_allowed", () => !1), o("set", Ce, !0), o("js", new Date);
            let x = {
                send_page_view: !1
            };
            S(t) && (x.ignore_referrer = "true");
            for (let e of A) {
                let n = document.createElement("script");
                n.src = `https://www.googletagmanager.com/gtag/js?id=${e}`, document.body.appendChild(n), o("config", e, x)
            }
            let O = v.gtag_events,
                w = e => {
                    var n;
                    return "shopify_" + (v.target_country || "US") + "_" + String((n = e == null ? void 0 : e.product) == null ? void 0 : n.id) + "_" + String(e == null ? void 0 : e.id)
                },
                M = e => {
                    let n = e == null ? void 0 : e.title;
                    return ["default", "title", "default title", ""].includes(String(n).toLowerCase()) ? null : n
                },
                H = e => {
                    var f, m, r, l, g, a, y, i, E, C, N, P;
                    let s = {
                            value: (f = e == null ? void 0 : e.subtotalPrice) == null ? void 0 : f.amount
                        },
                        _ = (r = (m = e == null ? void 0 : e.totalPrice) == null ? void 0 : m.amount) != null ? r : 0;
                    _ -= (g = (l = e == null ? void 0 : e.totalTax) == null ? void 0 : l.amount) != null ? g : 0, _ -= (i = (y = (a = e == null ? void 0 : e.shippingLine) == null ? void 0 : a.price) == null ? void 0 : y.amount) != null ? i : 0;
                    let u = 0,
                        d = (E = e == null ? void 0 : e.lineItems) != null ? E : [];
                    for (let R of d) {
                        let b = (N = (C = R.variant) == null ? void 0 : C.price.amount) != null ? N : 0;
                        b *= R.quantity;
                        for (let F of R.discountAllocations) b -= (P = F.amount.amount) != null ? P : 0;
                        u += b
                    }
                    return T(6) && (s.google_analysis_params = {
                        lineItemValue: u,
                        totalPriceValue: _
                    }), s
                },
                W = (e, n) => n ? `${e} - ${n}` : e,
                pe = (e, n) => {
                    var s;
                    if (e === "/search") {
                        let _ = (s = document.querySelector("link[rel='canonical']")) == null ? void 0 : s.getAttribute("href");
                        if (_) return _
                    }
                    return n
                },
                ge = (e, n, s) => e && e.endsWith("thank_you") ? W(n, s) : n,
                Y = e => {
                    var n, s, _, u, d, f, m;
                    return {
                        email: e == null ? void 0 : e.email,
                        phone_number: e == null ? void 0 : e.phone,
                        address: {
                            first_name: (n = e == null ? void 0 : e.billingAddress) == null ? void 0 : n.firstName,
                            last_name: (s = e == null ? void 0 : e.billingAddress) == null ? void 0 : s.lastName,
                            street: (_ = e == null ? void 0 : e.billingAddress) == null ? void 0 : _.address1,
                            city: (u = e == null ? void 0 : e.billingAddress) == null ? void 0 : u.city,
                            region: (d = e == null ? void 0 : e.billingAddress) == null ? void 0 : d.province,
                            postal_code: (f = e == null ? void 0 : e.billingAddress) == null ? void 0 : f.zip,
                            country: (m = e == null ? void 0 : e.billingAddress) == null ? void 0 : m.country
                        }
                    }
                },
                q = {
                    email: (K = ($ = (B = t.init) == null ? void 0 : B.data) == null ? void 0 : $.customer) == null ? void 0 : K.email,
                    phone_number: (J = (Z = (X = t.init) == null ? void 0 : X.data) == null ? void 0 : Z.customer) == null ? void 0 : J.phone,
                    address: {
                        first_name: (k = (h = (Q = t.init) == null ? void 0 : Q.data) == null ? void 0 : h.customer) == null ? void 0 : k.firstName,
                        last_name: (ne = (te = (ee = t.init) == null ? void 0 : ee.data) == null ? void 0 : te.customer) == null ? void 0 : ne.lastName
                    }
                };
            t.analytics.subscribe("page_viewed", e => {
                var s, _, u, d, f, m, r, l;
                let n = O.find(g => g.type === "page_view");
                if (n && n.action_label) {
                    let g = (u = (_ = (s = e.context) == null ? void 0 : s.window) == null ? void 0 : _.location) == null ? void 0 : u.pathname,
                        a = I({
                            send_to: D(n.action_label),
                            developer_id: {
                                [U]: !0
                            },
                            page_path: g,
                            page_title: Ne((f = (d = e.context) == null ? void 0 : d.document) == null ? void 0 : f.title, g),
                            page_location: pe(g, (l = (r = (m = e.context) == null ? void 0 : m.window) == null ? void 0 : r.location) == null ? void 0 : l.href),
                            user_data: q
                        }, !T(5) && S(t) && {
                            ignore_referrer: "true"
                        });
                    o("event", "page_view", a)
                }
            }), t.analytics.subscribe("product_viewed", e => {
                var s, _, u, d, f, m;
                let n = O.find(r => r.type === "view_item");
                if (n && n.action_label) {
                    let r = (s = e.data) == null ? void 0 : s.productVariant;
                    o("event", "view_item", {
                        send_to: D(n.action_label),
                        developer_id: {
                            [U]: !0
                        },
                        ecomm_prodid: [w(r)],
                        ecomm_totalvalue: (_ = r == null ? void 0 : r.price) == null ? void 0 : _.amount,
                        ecomm_pagetype: "product",
                        items: [{
                            id: w(r),
                            name: W((u = r == null ? void 0 : r.product) == null ? void 0 : u.title, M(r)),
                            brand: (d = r == null ? void 0 : r.product) == null ? void 0 : d.vendor,
                            category: (f = r == null ? void 0 : r.product) == null ? void 0 : f.type,
                            price: (m = r == null ? void 0 : r.price) == null ? void 0 : m.amount,
                            variant: M(r)
                        }],
                        user_data: q
                    })
                }
            }), t.analytics.subscribe("product_added_to_cart", e => {
                var s, _, u, d, f, m, r, l, g, a, y;
                let n = O.find(i => i.type === "add_to_cart");
                if (n && n.action_label) {
                    let i = (s = e.data) == null ? void 0 : s.cartLine,
                        E = i == null ? void 0 : i.merchandise;
                    o("event", "add_to_cart", {
                        send_to: D(n.action_label),
                        developer_id: {
                            [U]: !0
                        },
                        ecomm_prodid: [w(i == null ? void 0 : i.merchandise)],
                        ecomm_totalvalue: (u = (_ = i == null ? void 0 : i.cost) == null ? void 0 : _.totalAmount) == null ? void 0 : u.amount,
                        ecomm_pagetype: "cart",
                        value: (f = (d = i == null ? void 0 : i.cost) == null ? void 0 : d.totalAmount) == null ? void 0 : f.amount,
                        currency: ((r = (m = i == null ? void 0 : i.cost) == null ? void 0 : m.totalAmount) == null ? void 0 : r.currencyCode) || "USD",
                        items: [{
                            id: w(E),
                            name: W((l = E == null ? void 0 : E.product) == null ? void 0 : l.title, M(E)),
                            brand: (g = E == null ? void 0 : E.product) == null ? void 0 : g.vendor,
                            category: (a = E == null ? void 0 : E.product) == null ? void 0 : a.type,
                            price: (y = E == null ? void 0 : E.price) == null ? void 0 : y.amount,
                            quantity: i == null ? void 0 : i.quantity,
                            variant: M(E)
                        }],
                        user_data: q
                    })
                }
            }), t.analytics.subscribe("checkout_completed", e => {
                var s, _, u, d, f, m, r, l, g;
                let n = O.find(a => a.type === "purchase");
                if (n && n.action_label) {
                    let a = (s = e.data) == null ? void 0 : s.checkout,
                        y = I(V(I({
                            send_to: D(n.action_label),
                            developer_id: {
                                [U]: !0
                            },
                            transaction_id: (_ = a == null ? void 0 : a.order) == null ? void 0 : _.id
                        }, H(a)), {
                            currency: ((u = a == null ? void 0 : a.subtotalPrice) == null ? void 0 : u.currencyCode) || "USD",
                            tax: (d = a == null ? void 0 : a.totalTax) == null ? void 0 : d.amount,
                            shipping: (m = (f = a == null ? void 0 : a.shippingLine) == null ? void 0 : f.price) == null ? void 0 : m.amount,
                            items: (r = a == null ? void 0 : a.lineItems) == null ? void 0 : r.map(i => {
                                var E, C, N, P, R, b, F, L, G, z, ae, re, ie, oe;
                                return {
                                    id: w(i.variant),
                                    name: ge((N = (C = (E = e.context) == null ? void 0 : E.window) == null ? void 0 : C.location) == null ? void 0 : N.pathname, (R = (P = i.variant) == null ? void 0 : P.product) == null ? void 0 : R.title, M(i.variant)),
                                    brand: (F = (b = i.variant) == null ? void 0 : b.product) == null ? void 0 : F.vendor,
                                    category: (G = (L = i.variant) == null ? void 0 : L.product) == null ? void 0 : G.type,
                                    coupon: (re = (ae = (z = i.discountAllocations) == null ? void 0 : z[0]) == null ? void 0 : ae.discountApplication) == null ? void 0 : re.title,
                                    price: (oe = (ie = i.variant) == null ? void 0 : ie.price) == null ? void 0 : oe.amount,
                                    quantity: i.quantity,
                                    variant: M(i.variant)
                                }
                            }),
                            user_data: Y(a)
                        }), !T(5) && S(t) && {
                            ignore_referrer: "true"
                        });
                    T(2) && (y.new_customer = (g = (l = a == null ? void 0 : a.order) == null ? void 0 : l.customer) == null ? void 0 : g.isFirstOrder), o("event", "purchase", y)
                }
            }), t.analytics.subscribe("checkout_started", e => {
                var s, _, u, d, f, m, r;
                let n = O.find(l => l.type === "begin_checkout");
                if (n && n.action_label) {
                    let l = (s = e.data) == null ? void 0 : s.checkout,
                        g = I(V(I({
                            send_to: D(n.action_label),
                            developer_id: {
                                [U]: !0
                            },
                            ecomm_prodid: (_ = l == null ? void 0 : l.lineItems) == null ? void 0 : _.map(a => w(a.variant)),
                            ecomm_totalvalue: (u = l == null ? void 0 : l.subtotalPrice) == null ? void 0 : u.amount,
                            ecomm_pagetype: "cart"
                        }, H(l)), {
                            currency: ((d = l == null ? void 0 : l.subtotalPrice) == null ? void 0 : d.currencyCode) || "USD",
                            coupon: (m = (f = l == null ? void 0 : l.discountApplications) == null ? void 0 : f[0]) == null ? void 0 : m.title,
                            items: (r = l == null ? void 0 : l.lineItems) == null ? void 0 : r.map(a => {
                                var y, i, E, C, N, P, R, b, F, L, G, z;
                                return {
                                    id: w(a.variant),
                                    name: (i = (y = a.variant) == null ? void 0 : y.product) == null ? void 0 : i.title,
                                    brand: (C = (E = a.variant) == null ? void 0 : E.product) == null ? void 0 : C.vendor,
                                    category: (P = (N = a.variant) == null ? void 0 : N.product) == null ? void 0 : P.type,
                                    coupon: (F = (b = (R = a.discountAllocations) == null ? void 0 : R[0]) == null ? void 0 : b.discountApplication) == null ? void 0 : F.title,
                                    price: (G = (L = a.variant) == null ? void 0 : L.price) == null ? void 0 : G.amount,
                                    quantity: a.quantity,
                                    variant: (z = a.variant) == null ? void 0 : z.title
                                }
                            }),
                            user_data: Y(l)
                        }), !T(5) && S(t) && {
                            ignore_referrer: "true"
                        });
                    o("event", "begin_checkout", g)
                }
            }), t.analytics.subscribe("search_submitted", e => {
                var s, _;
                let n = O.find(u => u.type === "search");
                n && n.action_label && o("event", "search", {
                    send_to: D(n.action_label),
                    developer_id: {
                        [U]: !0
                    },
                    search_term: (_ = (s = e.data) == null ? void 0 : s.searchResult) == null ? void 0 : _.query,
                    user_data: q
                })
            }), t.analytics.subscribe("payment_info_submitted", e => {
                var s, _, u;
                let n = O.find(d => d.type === "add_payment_info");
                if (n && n.action_label) {
                    let d = (s = e.data) == null ? void 0 : s.checkout,
                        f = I({
                            send_to: D(n.action_label),
                            developer_id: {
                                [U]: !0
                            },
                            currency: ((_ = d == null ? void 0 : d.totalPrice) == null ? void 0 : _.currencyCode) || "USD",
                            total: (u = d == null ? void 0 : d.totalPrice) == null ? void 0 : u.amount,
                            user_data: Y(d)
                        }, !T(5) && S(t) && {
                            ignore_referrer: "true"
                        });
                    o("event", "add_payment_info", f)
                }
            }), t.customerPrivacy.subscribe("visitorConsentCollected", e => {
                let n = e.customerPrivacy;
                o("consent", "update", fe(n)), o("set", Ee(n))
            })
        }

        function Ee(t) {
            return {
                restricted_data_processing: !t.saleOfDataAllowed
            }
        }

        function fe(t) {
            return {
                ad_storage: t.marketingAllowed ? "granted" : "denied",
                ad_user_data: t.marketingAllowed ? "granted" : "denied",
                ad_personalization: t.marketingAllowed ? "granted" : "denied",
                analytics_storage: t.analyticsProcessingAllowed ? "granted" : "denied"
            }
        }

        function S(t) {
            var c;
            return ((c = t == null ? void 0 : t._pixelInfo) == null ? void 0 : c.surfaceNext) === "checkout"
        }

        function D(t) {
            return T(4) ? ["default", ...t] : t
        }

        function Ne(t, c) {
            if (!c) return t;
            let p = [
                ["/information", "Checkout - Contact Information"],
                ["/shipping", "Checkout - Shipping"],
                ["/payment", "Checkout - Payment"],
                ["/review", "Checkout - Review"],
                ["/processing", "Checkout - Processing"],
                ["/thank-you", "Checkout - Receipt"],
                ["/stock-problems", "Checkout - Stock problems"],
                ["/error", "Checkout - Error"]
            ];
            for (let [v, A] of p)
                if (c.endsWith(v)) return A;
            return /^\/checkouts\/[A-Za-z0-9]+\/[A-Za-z0-9]+$/.test(c) ? "Checkout - Contact Information" : t
        }
        j(me);
    })();

})(self.webPixelsManager.createShopifyExtend('362086598', 'app'));