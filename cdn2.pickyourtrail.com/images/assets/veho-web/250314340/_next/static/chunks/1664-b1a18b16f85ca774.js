(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1664], {
        10227: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getDomainLocale = function(e, t, l, n) {
                {
                    let r = o(72554).normalizeLocalePath,
                        a = o(84643).detectDomainLocale,
                        u = t || r(e, l).detectedLocale,
                        c = a(n, void 0, u);
                    if (c) {
                        let f = "http".concat(c.http ? "" : "s", "://"),
                            i = u === c.defaultLocale ? "" : "/".concat(u);
                        return "".concat(f).concat(c.domain).concat("").concat(i).concat(e)
                    }
                    return !1
                }
            }, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        31551: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = o(12845).Z,
                n = o(38774).Z,
                r = l(o(67294)),
                a = o(41003),
                u = o(67795),
                c = o(54465),
                f = o(72692),
                i = o(48245),
                s = o(69246),
                d = o(10227),
                p = o(33468);
            let h = new Set;

            function v(e, t, o, l) {
                if (a.isLocalURL(t)) {
                    if (!l.bypassPrefetchedCheck) {
                        let n = void 0 !== l.locale ? l.locale : "locale" in e ? e.locale : void 0,
                            r = t + "%" + o + "%" + n;
                        if (h.has(r)) return;
                        h.add(r)
                    }
                    Promise.resolve(e.prefetch(t, o, l)).catch(e => {})
                }
            }

            function y(e) {
                return "string" == typeof e ? e : u.formatUrl(e)
            }
            let b = r.default.forwardRef(function(e, t) {
                let o, l;
                let {
                    href: u,
                    as: h,
                    children: b,
                    prefetch: _,
                    passHref: g,
                    replace: m,
                    shallow: M,
                    scroll: j,
                    locale: C,
                    onClick: P,
                    onMouseEnter: L,
                    onTouchStart: O,
                    legacyBehavior: k = !1
                } = e, E = n(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
                o = b, k && ("string" == typeof o || "number" == typeof o) && (o = r.default.createElement("a", null, o));
                let x = !1 !== _,
                    w = r.default.useContext(f.RouterContext),
                    S = r.default.useContext(i.AppRouterContext),
                    I = null != w ? w : S,
                    R = !w,
                    {
                        href: T,
                        as: z
                    } = r.default.useMemo(() => {
                        if (!w) {
                            let e = y(u);
                            return {
                                href: e,
                                as: h ? y(h) : e
                            }
                        }
                        let [t, o] = a.resolveHref(w, u, !0);
                        return {
                            href: t,
                            as: h ? a.resolveHref(w, h) : o || t
                        }
                    }, [w, u, h]),
                    D = r.default.useRef(T),
                    K = r.default.useRef(z);
                k && (l = r.default.Children.only(o));
                let N = k ? l && "object" == typeof l && l.ref : t,
                    [U, H, A] = s.useIntersection({
                        rootMargin: "200px"
                    }),
                    B = r.default.useCallback(e => {
                        (K.current !== z || D.current !== T) && (A(), K.current = z, D.current = T), U(e), N && ("function" == typeof N ? N(e) : "object" == typeof N && (N.current = e))
                    }, [z, N, T, A, U]);
                r.default.useEffect(() => {
                    I && H && x && v(I, T, z, {
                        locale: C
                    })
                }, [z, T, H, C, x, null == w ? void 0 : w.locale, I]);
                let Z = {
                    ref: B,
                    onClick(e) {
                        k || "function" != typeof P || P(e), k && l.props && "function" == typeof l.props.onClick && l.props.onClick(e), I && !e.defaultPrevented && function(e, t, o, l, n, u, c, f, i, s) {
                            let {
                                nodeName: d
                            } = e.currentTarget, p = "A" === d.toUpperCase();
                            if (p && (function(e) {
                                    let {
                                        target: t
                                    } = e.currentTarget;
                                    return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                }(e) || !a.isLocalURL(o))) return;
                            e.preventDefault();
                            let h = () => {
                                "beforePopState" in t ? t[n ? "replace" : "push"](o, l, {
                                    shallow: u,
                                    locale: f,
                                    scroll: c
                                }) : t[n ? "replace" : "push"](l || o, {
                                    forceOptimisticNavigation: !s
                                })
                            };
                            i ? r.default.startTransition(h) : h()
                        }(e, I, T, z, m, M, j, C, R, x)
                    },
                    onMouseEnter(e) {
                        k || "function" != typeof L || L(e), k && l.props && "function" == typeof l.props.onMouseEnter && l.props.onMouseEnter(e), I && (x || !R) && v(I, T, z, {
                            locale: C,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        })
                    },
                    onTouchStart(e) {
                        k || "function" != typeof O || O(e), k && l.props && "function" == typeof l.props.onTouchStart && l.props.onTouchStart(e), I && (x || !R) && v(I, T, z, {
                            locale: C,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        })
                    }
                };
                if (!k || g || "a" === l.type && !("href" in l.props)) {
                    let q = void 0 !== C ? C : null == w ? void 0 : w.locale,
                        F = (null == w ? void 0 : w.isLocaleDomain) && d.getDomainLocale(z, q, null == w ? void 0 : w.locales, null == w ? void 0 : w.domainLocales);
                    Z.href = F || p.addBasePath(c.addLocale(z, q, null == w ? void 0 : w.defaultLocale))
                }
                return k ? r.default.cloneElement(l, Z) : r.default.createElement("a", Object.assign({}, E, Z), o)
            });
            t.default = b, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        72554: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.normalizeLocalePath = void 0;
            let l = (e, t) => o(24769).normalizeLocalePath(e, t);
            t.normalizeLocalePath = l, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        69246: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useIntersection = function(e) {
                let {
                    rootRef: t,
                    rootMargin: o,
                    disabled: c
                } = e, f = c || !r, [i, s] = l.useState(!1), [d, p] = l.useState(null);
                l.useEffect(() => {
                    if (r) {
                        if (!f && !i && d && d.tagName) {
                            let e = function(e, t, o) {
                                let {
                                    id: l,
                                    observer: n,
                                    elements: r
                                } = function(e) {
                                    let t;
                                    let o = {
                                            root: e.root || null,
                                            margin: e.rootMargin || ""
                                        },
                                        l = u.find(e => e.root === o.root && e.margin === o.margin);
                                    if (l && (t = a.get(l))) return t;
                                    let n = new Map,
                                        r = new IntersectionObserver(e => {
                                            e.forEach(e => {
                                                let t = n.get(e.target),
                                                    o = e.isIntersecting || e.intersectionRatio > 0;
                                                t && o && t(o)
                                            })
                                        }, e);
                                    return t = {
                                        id: o,
                                        observer: r,
                                        elements: n
                                    }, u.push(o), a.set(o, t), t
                                }(o);
                                return r.set(e, t), n.observe(e),
                                    function() {
                                        if (r.delete(e), n.unobserve(e), 0 === r.size) {
                                            n.disconnect(), a.delete(l);
                                            let t = u.findIndex(e => e.root === l.root && e.margin === l.margin);
                                            t > -1 && u.splice(t, 1)
                                        }
                                    }
                            }(d, e => e && s(e), {
                                root: null == t ? void 0 : t.current,
                                rootMargin: o
                            });
                            return e
                        }
                    } else if (!i) {
                        let l = n.requestIdleCallback(() => s(!0));
                        return () => n.cancelIdleCallback(l)
                    }
                }, [d, f, o, t, i]);
                let h = l.useCallback(() => {
                    s(!1)
                }, []);
                return [p, i, h]
            };
            var l = o(67294),
                n = o(44686);
            let r = "function" == typeof IntersectionObserver,
                a = new Map,
                u = [];
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        41664: function(e, t, o) {
            e.exports = o(31551)
        }
    }
]);