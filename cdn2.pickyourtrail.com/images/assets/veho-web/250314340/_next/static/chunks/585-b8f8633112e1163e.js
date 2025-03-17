"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [585], {
        99304: function(e, t, i) {
            i.d(t, {
                pt: function() {
                    return c
                },
                Qr: function() {
                    return d
                },
                Rv: function() {
                    return m
                },
                Ay: function() {
                    return p
                },
                W_: function() {
                    return l
                },
                tl: function() {
                    return o
                },
                o3: function() {
                    return u
                }
            });
            var r = i(13433),
                s = i(7185);

            function a(e, t, i, r) {
                return e.params.createElements && Object.keys(r).forEach(a => {
                    if (!i[a] && !0 === i.auto) {
                        let l = (0, s.e)(e.el, `.${r[a]}`)[0];
                        l || ((l = (0, s.c)("div", r[a])).className = r[a], e.el.append(l)), i[a] = l, t[a] = l
                    }
                }), i
            }

            function l(e) {
                let {
                    swiper: t,
                    extendParams: i,
                    on: r,
                    emit: l
                } = e;

                function n(e) {
                    let i;
                    return e && "string" == typeof e && t.isElement && (i = t.el.querySelector(e)) ? i : (e && ("string" == typeof e && (i = [...document.querySelectorAll(e)]), t.params.uniqueNavElements && "string" == typeof e && i && i.length > 1 && 1 === t.el.querySelectorAll(e).length ? i = t.el.querySelector(e) : i && 1 === i.length && (i = i[0])), e && !i) ? e : i
                }

                function o(e, i) {
                    let r = t.params.navigation;
                    (e = (0, s.m)(e)).forEach(e => {
                        e && (e.classList[i ? "add" : "remove"](...r.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = i), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](r.lockClass))
                    })
                }

                function d() {
                    let {
                        nextEl: e,
                        prevEl: i
                    } = t.navigation;
                    if (t.params.loop) {
                        o(i, !1), o(e, !1);
                        return
                    }
                    o(i, t.isBeginning && !t.params.rewind), o(e, t.isEnd && !t.params.rewind)
                }

                function p(e) {
                    e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), l("navigationPrev"))
                }

                function c(e) {
                    e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), l("navigationNext"))
                }

                function u() {
                    let e = t.params.navigation;
                    if (t.params.navigation = a(t, t.originalParams.navigation, t.params.navigation, {
                            nextEl: "swiper-button-next",
                            prevEl: "swiper-button-prev"
                        }), !(e.nextEl || e.prevEl)) return;
                    let i = n(e.nextEl),
                        r = n(e.prevEl);
                    Object.assign(t.navigation, {
                        nextEl: i,
                        prevEl: r
                    }), i = (0, s.m)(i), r = (0, s.m)(r);
                    let l = (i, r) => {
                        i && i.addEventListener("click", "next" === r ? c : p), !t.enabled && i && i.classList.add(...e.lockClass.split(" "))
                    };
                    i.forEach(e => l(e, "next")), r.forEach(e => l(e, "prev"))
                }

                function m() {
                    let {
                        nextEl: e,
                        prevEl: i
                    } = t.navigation;
                    e = (0, s.m)(e), i = (0, s.m)(i);
                    let r = (e, i) => {
                        e.removeEventListener("click", "next" === i ? c : p), e.classList.remove(...t.params.navigation.disabledClass.split(" "))
                    };
                    e.forEach(e => r(e, "next")), i.forEach(e => r(e, "prev"))
                }
                i({
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock",
                        navigationDisabledClass: "swiper-navigation-disabled"
                    }
                }), t.navigation = {
                    nextEl: null,
                    prevEl: null
                }, r("init", () => {
                    !1 === t.params.navigation.enabled ? h() : (u(), d())
                }), r("toEdge fromEdge lock unlock", () => {
                    d()
                }), r("destroy", () => {
                    m()
                }), r("enable disable", () => {
                    let {
                        nextEl: e,
                        prevEl: i
                    } = t.navigation;
                    if (e = (0, s.m)(e), i = (0, s.m)(i), t.enabled) {
                        d();
                        return
                    }[...e, ...i].filter(e => !!e).forEach(e => e.classList.add(t.params.navigation.lockClass))
                }), r("click", (e, i) => {
                    let {
                        nextEl: r,
                        prevEl: a
                    } = t.navigation;
                    r = (0, s.m)(r), a = (0, s.m)(a);
                    let n = i.target,
                        o = a.includes(n) || r.includes(n);
                    if (t.isElement && !o) {
                        let d = i.path || i.composedPath && i.composedPath();
                        d && (o = d.find(e => r.includes(e) || a.includes(e)))
                    }
                    if (t.params.navigation.hideOnClick && !o) {
                        let p;
                        if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === n || t.pagination.el.contains(n))) return;
                        r.length ? p = r[0].classList.contains(t.params.navigation.hiddenClass) : a.length && (p = a[0].classList.contains(t.params.navigation.hiddenClass)), !0 === p ? l("navigationShow") : l("navigationHide"), [...r, ...a].filter(e => !!e).forEach(e => e.classList.toggle(t.params.navigation.hiddenClass))
                    }
                });
                let f = () => {
                        t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), u(), d()
                    },
                    h = () => {
                        t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), m()
                    };
                Object.assign(t.navigation, {
                    enable: f,
                    disable: h,
                    update: d,
                    init: u,
                    destroy: m
                })
            }

            function n(e) {
                return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`
            }

            function o(e) {
                let t, {
                        swiper: i,
                        extendParams: r,
                        on: l,
                        emit: o
                    } = e,
                    d = "swiper-pagination";
                r({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: e => e,
                        formatFractionTotal: e => e,
                        bulletClass: `${d}-bullet`,
                        bulletActiveClass: `${d}-bullet-active`,
                        modifierClass: `${d}-`,
                        currentClass: `${d}-current`,
                        totalClass: `${d}-total`,
                        hiddenClass: `${d}-hidden`,
                        progressbarFillClass: `${d}-progressbar-fill`,
                        progressbarOppositeClass: `${d}-progressbar-opposite`,
                        clickableClass: `${d}-clickable`,
                        lockClass: `${d}-lock`,
                        horizontalClass: `${d}-horizontal`,
                        verticalClass: `${d}-vertical`,
                        paginationDisabledClass: `${d}-disabled`
                    }
                }), i.pagination = {
                    el: null,
                    bullets: []
                };
                let p = 0;

                function c() {
                    return !i.params.pagination.el || !i.pagination.el || Array.isArray(i.pagination.el) && 0 === i.pagination.el.length
                }

                function u(e, t) {
                    let {
                        bulletActiveClass: r
                    } = i.params.pagination;
                    e && (e = e[`${"prev"===t?"previous":"next"}ElementSibling`]) && (e.classList.add(`${r}-${t}`), (e = e[`${"prev"===t?"previous":"next"}ElementSibling`]) && e.classList.add(`${r}-${t}-${t}`))
                }

                function m(e) {
                    let t = e.target.closest(n(i.params.pagination.bulletClass));
                    if (!t) return;
                    e.preventDefault();
                    let r = (0, s.h)(t) * i.params.slidesPerGroup;
                    if (i.params.loop) {
                        if (i.realIndex === r) return;
                        i.slideToLoop(r)
                    } else i.slideTo(r)
                }

                function f() {
                    let e, r;
                    let a = i.rtl,
                        l = i.params.pagination;
                    if (c()) return;
                    let d = i.pagination.el;
                    d = (0, s.m)(d);
                    let m = i.virtual && i.params.virtual.enabled ? i.virtual.slides.length : i.slides.length,
                        f = i.params.loop ? Math.ceil(m / i.params.slidesPerGroup) : i.snapGrid.length;
                    if (i.params.loop ? (r = i.previousRealIndex || 0, e = i.params.slidesPerGroup > 1 ? Math.floor(i.realIndex / i.params.slidesPerGroup) : i.realIndex) : void 0 !== i.snapIndex ? (e = i.snapIndex, r = i.previousSnapIndex) : (r = i.previousIndex || 0, e = i.activeIndex || 0), "bullets" === l.type && i.pagination.bullets && i.pagination.bullets.length > 0) {
                        let h, v, g;
                        let w = i.pagination.bullets;
                        if (l.dynamicBullets && (t = (0, s.f)(w[0], i.isHorizontal() ? "width" : "height", !0), d.forEach(e => {
                                e.style[i.isHorizontal() ? "width" : "height"] = `${t*(l.dynamicMainBullets+4)}px`
                            }), l.dynamicMainBullets > 1 && void 0 !== r && ((p += e - (r || 0)) > l.dynamicMainBullets - 1 ? p = l.dynamicMainBullets - 1 : p < 0 && (p = 0)), g = ((v = (h = Math.max(e - p, 0)) + (Math.min(w.length, l.dynamicMainBullets) - 1)) + h) / 2), w.forEach(e => {
                                let t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${l.bulletActiveClass}${e}`)].map(e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e).flat();
                                e.classList.remove(...t)
                            }), d.length > 1) w.forEach(t => {
                            let r = (0, s.h)(t);
                            r === e ? t.classList.add(...l.bulletActiveClass.split(" ")) : i.isElement && t.setAttribute("part", "bullet"), l.dynamicBullets && (r >= h && r <= v && t.classList.add(...`${l.bulletActiveClass}-main`.split(" ")), r === h && u(t, "prev"), r === v && u(t, "next"))
                        });
                        else {
                            let b = w[e];
                            if (b && b.classList.add(...l.bulletActiveClass.split(" ")), i.isElement && w.forEach((t, i) => {
                                    t.setAttribute("part", i === e ? "bullet-active" : "bullet")
                                }), l.dynamicBullets) {
                                let y = w[h],
                                    S = w[v];
                                for (let T = h; T <= v; T += 1) w[T] && w[T].classList.add(...`${l.bulletActiveClass}-main`.split(" "));
                                u(y, "prev"), u(S, "next")
                            }
                        }
                        if (l.dynamicBullets) {
                            let E = Math.min(w.length, l.dynamicMainBullets + 4),
                                x = (t * E - t) / 2 - g * t,
                                C = a ? "right" : "left";
                            w.forEach(e => {
                                e.style[i.isHorizontal() ? C : "top"] = `${x}px`
                            })
                        }
                    }
                    d.forEach((t, r) => {
                        if ("fraction" === l.type && (t.querySelectorAll(n(l.currentClass)).forEach(t => {
                                t.textContent = l.formatFractionCurrent(e + 1)
                            }), t.querySelectorAll(n(l.totalClass)).forEach(e => {
                                e.textContent = l.formatFractionTotal(f)
                            })), "progressbar" === l.type) {
                            let s;
                            s = l.progressbarOpposite ? i.isHorizontal() ? "vertical" : "horizontal" : i.isHorizontal() ? "horizontal" : "vertical";
                            let a = (e + 1) / f,
                                d = 1,
                                p = 1;
                            "horizontal" === s ? d = a : p = a, t.querySelectorAll(n(l.progressbarFillClass)).forEach(e => {
                                e.style.transform = `translate3d(0,0,0) scaleX(${d}) scaleY(${p})`, e.style.transitionDuration = `${i.params.speed}ms`
                            })
                        }
                        "custom" === l.type && l.renderCustom ? (t.innerHTML = l.renderCustom(i, e + 1, f), 0 === r && o("paginationRender", t)) : (0 === r && o("paginationRender", t), o("paginationUpdate", t)), i.params.watchOverflow && i.enabled && t.classList[i.isLocked ? "add" : "remove"](l.lockClass)
                    })
                }

                function h() {
                    let e = i.params.pagination;
                    if (c()) return;
                    let t = i.virtual && i.params.virtual.enabled ? i.virtual.slides.length : i.grid && i.params.grid.rows > 1 ? i.slides.length / Math.ceil(i.params.grid.rows) : i.slides.length,
                        r = i.pagination.el;
                    r = (0, s.m)(r);
                    let a = "";
                    if ("bullets" === e.type) {
                        let l = i.params.loop ? Math.ceil(t / i.params.slidesPerGroup) : i.snapGrid.length;
                        i.params.freeMode && i.params.freeMode.enabled && l > t && (l = t);
                        for (let d = 0; d < l; d += 1) e.renderBullet ? a += e.renderBullet.call(i, d, e.bulletClass) : a += `<${e.bulletElement} ${i.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`
                    }
                    "fraction" === e.type && (a = e.renderFraction ? e.renderFraction.call(i, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (a = e.renderProgressbar ? e.renderProgressbar.call(i, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), i.pagination.bullets = [], r.forEach(t => {
                        "custom" !== e.type && (t.innerHTML = a || ""), "bullets" === e.type && i.pagination.bullets.push(...t.querySelectorAll(n(e.bulletClass)))
                    }), "custom" !== e.type && o("paginationRender", r[0])
                }

                function v() {
                    let e;
                    i.params.pagination = a(i, i.originalParams.pagination, i.params.pagination, {
                        el: "swiper-pagination"
                    });
                    let t = i.params.pagination;
                    t.el && ("string" == typeof t.el && i.isElement && (e = i.el.querySelector(t.el)), e || "string" != typeof t.el || (e = [...document.querySelectorAll(t.el)]), e || (e = t.el), e && 0 !== e.length && (i.params.uniqueNavElements && "string" == typeof t.el && Array.isArray(e) && e.length > 1 && (e = [...i.el.querySelectorAll(t.el)]).length > 1 && (e = e.filter(e => (0, s.a)(e, ".swiper")[0] === i.el)[0]), Array.isArray(e) && 1 === e.length && (e = e[0]), Object.assign(i.pagination, {
                        el: e
                    }), (e = (0, s.m)(e)).forEach(e => {
                        "bullets" === t.type && t.clickable && e.classList.add(...(t.clickableClass || "").split(" ")), e.classList.add(t.modifierClass + t.type), e.classList.add(i.isHorizontal() ? t.horizontalClass : t.verticalClass), "bullets" === t.type && t.dynamicBullets && (e.classList.add(`${t.modifierClass}${t.type}-dynamic`), p = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && e.classList.add(t.progressbarOppositeClass), t.clickable && e.addEventListener("click", m), i.enabled || e.classList.add(t.lockClass)
                    })))
                }

                function g() {
                    let e = i.params.pagination;
                    if (c()) return;
                    let t = i.pagination.el;
                    t && (t = (0, s.m)(t)).forEach(t => {
                        t.classList.remove(e.hiddenClass), t.classList.remove(e.modifierClass + e.type), t.classList.remove(i.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (t.classList.remove(...(e.clickableClass || "").split(" ")), t.removeEventListener("click", m))
                    }), i.pagination.bullets && i.pagination.bullets.forEach(t => t.classList.remove(...e.bulletActiveClass.split(" ")))
                }
                l("changeDirection", () => {
                    if (!i.pagination || !i.pagination.el) return;
                    let e = i.params.pagination,
                        {
                            el: t
                        } = i.pagination;
                    (t = (0, s.m)(t)).forEach(t => {
                        t.classList.remove(e.horizontalClass, e.verticalClass), t.classList.add(i.isHorizontal() ? e.horizontalClass : e.verticalClass)
                    })
                }), l("init", () => {
                    !1 === i.params.pagination.enabled ? b() : (v(), h(), f())
                }), l("activeIndexChange", () => {
                    void 0 === i.snapIndex && f()
                }), l("snapIndexChange", () => {
                    f()
                }), l("snapGridLengthChange", () => {
                    h(), f()
                }), l("destroy", () => {
                    g()
                }), l("enable disable", () => {
                    let {
                        el: e
                    } = i.pagination;
                    e && (e = (0, s.m)(e)).forEach(e => e.classList[i.enabled ? "remove" : "add"](i.params.pagination.lockClass))
                }), l("lock unlock", () => {
                    f()
                }), l("click", (e, t) => {
                    let r = t.target,
                        a = (0, s.m)(i.pagination.el);
                    if (i.params.pagination.el && i.params.pagination.hideOnClick && a && a.length > 0 && !r.classList.contains(i.params.pagination.bulletClass)) {
                        if (i.navigation && (i.navigation.nextEl && r === i.navigation.nextEl || i.navigation.prevEl && r === i.navigation.prevEl)) return;
                        let l = a[0].classList.contains(i.params.pagination.hiddenClass);
                        !0 === l ? o("paginationShow") : o("paginationHide"), a.forEach(e => e.classList.toggle(i.params.pagination.hiddenClass))
                    }
                });
                let w = () => {
                        i.el.classList.remove(i.params.pagination.paginationDisabledClass);
                        let {
                            el: e
                        } = i.pagination;
                        e && (e = (0, s.m)(e)).forEach(e => e.classList.remove(i.params.pagination.paginationDisabledClass)), v(), h(), f()
                    },
                    b = () => {
                        i.el.classList.add(i.params.pagination.paginationDisabledClass);
                        let {
                            el: e
                        } = i.pagination;
                        e && (e = (0, s.m)(e)).forEach(e => e.classList.add(i.params.pagination.paginationDisabledClass)), g()
                    };
                Object.assign(i.pagination, {
                    enable: w,
                    disable: b,
                    render: h,
                    update: f,
                    init: v,
                    destroy: g
                })
            }

            function d(e) {
                let {
                    swiper: t,
                    extendParams: i,
                    on: r
                } = e;

                function a(e, t) {
                    let i, r, s, a, l;
                    let n = (e, t) => {
                        for (a = -1, s = e.length; s - a > 1;) e[l = s + a >> 1] <= t ? a = l : s = l;
                        return s
                    };
                    return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                        return e ? (i = (r = n(this.x, e)) - 1, (e - this.x[i]) * (this.y[r] - this.y[i]) / (this.x[r] - this.x[i]) + this.y[i]) : 0
                    }, this
                }

                function l() {
                    t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
                }
                i({
                    controller: {
                        control: void 0,
                        inverse: !1,
                        by: "slide"
                    }
                }), t.controller = {
                    control: void 0
                }, r("beforeInit", () => {
                    if ("undefined" != typeof window && ("string" == typeof t.params.controller.control || t.params.controller.control instanceof HTMLElement)) {
                        let e = "string" == typeof t.params.controller.control ? [...document.querySelectorAll(t.params.controller.control)] : [t.params.controller.control];
                        e.forEach(e => {
                            if (t.controller.control || (t.controller.control = []), e && e.swiper) t.controller.control.push(e.swiper);
                            else if (e) {
                                let i = `${t.params.eventsPrefix}init`,
                                    r = s => {
                                        t.controller.control.push(s.detail[0]), t.update(), e.removeEventListener(i, r)
                                    };
                                e.addEventListener(i, r)
                            }
                        });
                        return
                    }
                    t.controller.control = t.params.controller.control
                }), r("update", () => {
                    l()
                }), r("resize", () => {
                    l()
                }), r("observerUpdate", () => {
                    l()
                }), r("setTranslate", (e, i, r) => {
                    t.controller.control && !t.controller.control.destroyed && t.controller.setTranslate(i, r)
                }), r("setTransition", (e, i, r) => {
                    t.controller.control && !t.controller.control.destroyed && t.controller.setTransition(i, r)
                }), Object.assign(t.controller, {
                    setTranslate: function(e, i) {
                        let r, s;
                        let l = t.controller.control,
                            n = t.constructor;

                        function o(e) {
                            if (e.destroyed) return;
                            let i = t.rtlTranslate ? -t.translate : t.translate;
                            "slide" === t.params.controller.by && (t.controller.spline = t.params.loop ? new a(t.slidesGrid, e.slidesGrid) : new a(t.snapGrid, e.snapGrid), s = -t.controller.spline.interpolate(-i)), s && "container" !== t.params.controller.by || ((Number.isNaN(r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate())) || !Number.isFinite(r)) && (r = 1), s = (i - t.minTranslate()) * r + e.minTranslate()), t.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, t), e.updateActiveIndex(), e.updateSlidesClasses()
                        }
                        if (Array.isArray(l))
                            for (let d = 0; d < l.length; d += 1) l[d] !== i && l[d] instanceof n && o(l[d]);
                        else l instanceof n && i !== l && o(l)
                    },
                    setTransition: function(e, i) {
                        let r;
                        let a = t.constructor,
                            l = t.controller.control;

                        function n(i) {
                            i.destroyed || (i.setTransition(e, t), 0 !== e && (i.transitionStart(), i.params.autoHeight && (0, s.n)(() => {
                                i.updateAutoHeight()
                            }), (0, s.k)(i.wrapperEl, () => {
                                l && i.transitionEnd()
                            })))
                        }
                        if (Array.isArray(l))
                            for (r = 0; r < l.length; r += 1) l[r] !== i && l[r] instanceof a && n(l[r]);
                        else l instanceof a && i !== l && n(l)
                    }
                })
            }

            function p(e) {
                let {
                    swiper: t,
                    extendParams: i,
                    on: s
                } = e;
                i({
                    history: {
                        enabled: !1,
                        root: "",
                        replaceState: !1,
                        key: "slides",
                        keepQuery: !1
                    }
                });
                let a = !1,
                    l = {},
                    n = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
                    o = e => {
                        let t;
                        let i = (0, r.a)();
                        t = e ? new URL(e) : i.location;
                        let s = t.pathname.slice(1).split("/").filter(e => "" !== e),
                            a = s.length,
                            l = s[a - 2],
                            n = s[a - 1];
                        return {
                            key: l,
                            value: n
                        }
                    },
                    d = (e, i) => {
                        let s;
                        let l = (0, r.a)();
                        if (!a || !t.params.history.enabled) return;
                        s = t.params.url ? new URL(t.params.url) : l.location;
                        let o = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${i}"]`) : t.slides[i],
                            d = n(o.getAttribute("data-history"));
                        if (t.params.history.root.length > 0) {
                            let p = t.params.history.root;
                            "/" === p[p.length - 1] && (p = p.slice(0, p.length - 1)), d = `${p}/${e?`${e}/`:""}${d}`
                        } else s.pathname.includes(e) || (d = `${e?`${e}/`:""}${d}`);
                        t.params.history.keepQuery && (d += s.search);
                        let c = l.history.state;
                        c && c.value === d || (t.params.history.replaceState ? l.history.replaceState({
                            value: d
                        }, null, d) : l.history.pushState({
                            value: d
                        }, null, d))
                    },
                    p = (e, i, r) => {
                        if (i)
                            for (let s = 0, a = t.slides.length; s < a; s += 1) {
                                let l = t.slides[s],
                                    o = n(l.getAttribute("data-history"));
                                if (o === i) {
                                    let d = t.getSlideIndex(l);
                                    t.slideTo(d, e, r)
                                }
                            } else t.slideTo(0, e, r)
                    },
                    c = () => {
                        l = o(t.params.url), p(t.params.speed, l.value, !1)
                    },
                    u = () => {
                        let e = (0, r.a)();
                        if (t.params.history) {
                            if (!e.history || !e.history.pushState) {
                                t.params.history.enabled = !1, t.params.hashNavigation.enabled = !0;
                                return
                            }
                            if (a = !0, !(l = o(t.params.url)).key && !l.value) {
                                t.params.history.replaceState || e.addEventListener("popstate", c);
                                return
                            }
                            p(0, l.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", c)
                        }
                    },
                    m = () => {
                        let e = (0, r.a)();
                        t.params.history.replaceState || e.removeEventListener("popstate", c)
                    };
                s("init", () => {
                    t.params.history.enabled && u()
                }), s("destroy", () => {
                    t.params.history.enabled && m()
                }), s("transitionEnd _freeModeNoMomentumRelease", () => {
                    a && d(t.params.history.key, t.activeIndex)
                }), s("slideChange", () => {
                    a && t.params.cssMode && d(t.params.history.key, t.activeIndex)
                })
            }

            function c(e) {
                let t, i, s, a, l, n, o, d, p, c, {
                    swiper: u,
                    extendParams: m,
                    on: f,
                    emit: h,
                    params: v
                } = e;
                u.autoplay = {
                    running: !1,
                    paused: !1,
                    timeLeft: 0
                }, m({
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !1,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                        pauseOnMouseEnter: !1
                    }
                });
                let g = v && v.autoplay ? v.autoplay.delay : 3e3,
                    w = v && v.autoplay ? v.autoplay.delay : 3e3,
                    b = new Date().getTime();

                function y(e) {
                    u && !u.destroyed && u.wrapperEl && e.target === u.wrapperEl && (u.wrapperEl.removeEventListener("transitionend", y), !c && (!e.detail || !e.detail.bySwiperTouchMove) && P())
                }
                let S = () => {
                        if (u.destroyed || !u.autoplay.running) return;
                        u.autoplay.paused ? a = !0 : a && (w = s, a = !1);
                        let e = u.autoplay.paused ? s : b + w - new Date().getTime();
                        u.autoplay.timeLeft = e, h("autoplayTimeLeft", e, e / g), i = requestAnimationFrame(() => {
                            S()
                        })
                    },
                    T = () => {
                        let e;
                        if (!(e = u.virtual && u.params.virtual.enabled ? u.slides.filter(e => e.classList.contains("swiper-slide-active"))[0] : u.slides[u.activeIndex])) return;
                        let t = parseInt(e.getAttribute("data-swiper-autoplay"), 10);
                        return t
                    },
                    E = e => {
                        if (u.destroyed || !u.autoplay.running) return;
                        cancelAnimationFrame(i), S();
                        let r = void 0 === e ? u.params.autoplay.delay : e;
                        g = u.params.autoplay.delay, w = u.params.autoplay.delay;
                        let a = T();
                        !Number.isNaN(a) && a > 0 && void 0 === e && (r = a, g = a, w = a), s = r;
                        let l = u.params.speed,
                            n = () => {
                                u && !u.destroyed && (u.params.autoplay.reverseDirection ? !u.isBeginning || u.params.loop || u.params.rewind ? (u.slidePrev(l, !0, !0), h("autoplay")) : u.params.autoplay.stopOnLastSlide || (u.slideTo(u.slides.length - 1, l, !0, !0), h("autoplay")) : !u.isEnd || u.params.loop || u.params.rewind ? (u.slideNext(l, !0, !0), h("autoplay")) : u.params.autoplay.stopOnLastSlide || (u.slideTo(0, l, !0, !0), h("autoplay")), u.params.cssMode && (b = new Date().getTime(), requestAnimationFrame(() => {
                                    E()
                                })))
                            };
                        return r > 0 ? (clearTimeout(t), t = setTimeout(() => {
                            n()
                        }, r)) : requestAnimationFrame(() => {
                            n()
                        }), r
                    },
                    x = () => {
                        b = new Date().getTime(), u.autoplay.running = !0, E(), h("autoplayStart")
                    },
                    C = () => {
                        u.autoplay.running = !1, clearTimeout(t), cancelAnimationFrame(i), h("autoplayStop")
                    },
                    M = (e, i) => {
                        if (u.destroyed || !u.autoplay.running) return;
                        clearTimeout(t), e || (p = !0);
                        let r = () => {
                            h("autoplayPause"), u.params.autoplay.waitForTransition ? u.wrapperEl.addEventListener("transitionend", y) : P()
                        };
                        if (u.autoplay.paused = !0, i) {
                            d && (s = u.params.autoplay.delay), d = !1, r();
                            return
                        }
                        let a = s || u.params.autoplay.delay;
                        s = a - (new Date().getTime() - b), u.isEnd && s < 0 && !u.params.loop || (s < 0 && (s = 0), r())
                    },
                    P = () => {
                        u.isEnd && s < 0 && !u.params.loop || u.destroyed || !u.autoplay.running || (b = new Date().getTime(), p ? (p = !1, E(s)) : E(), u.autoplay.paused = !1, h("autoplayResume"))
                    },
                    L = () => {
                        if (u.destroyed || !u.autoplay.running) return;
                        let e = (0, r.g)();
                        "hidden" === e.visibilityState && (p = !0, M(!0)), "visible" === e.visibilityState && P()
                    },
                    k = e => {
                        "mouse" === e.pointerType && (p = !0, c = !0, u.animating || u.autoplay.paused || M(!0))
                    },
                    O = e => {
                        "mouse" === e.pointerType && (c = !1, u.autoplay.paused && P())
                    },
                    I = () => {
                        u.params.autoplay.pauseOnMouseEnter && (u.el.addEventListener("pointerenter", k), u.el.addEventListener("pointerleave", O))
                    },
                    A = () => {
                        u.el && "string" != typeof u.el && (u.el.removeEventListener("pointerenter", k), u.el.removeEventListener("pointerleave", O))
                    },
                    _ = () => {
                        let e = (0, r.g)();
                        e.addEventListener("visibilitychange", L)
                    },
                    z = () => {
                        let e = (0, r.g)();
                        e.removeEventListener("visibilitychange", L)
                    };
                f("init", () => {
                    u.params.autoplay.enabled && (I(), _(), x())
                }), f("destroy", () => {
                    A(), z(), u.autoplay.running && C()
                }), f("_freeModeStaticRelease", () => {
                    (n || p) && P()
                }), f("_freeModeNoMomentumRelease", () => {
                    u.params.autoplay.disableOnInteraction ? C() : M(!0, !0)
                }), f("beforeTransitionStart", (e, t, i) => {
                    !u.destroyed && u.autoplay.running && (i || !u.params.autoplay.disableOnInteraction ? M(!0, !0) : C())
                }), f("sliderFirstMove", () => {
                    if (!u.destroyed && u.autoplay.running) {
                        if (u.params.autoplay.disableOnInteraction) {
                            C();
                            return
                        }
                        l = !0, n = !1, p = !1, o = setTimeout(() => {
                            p = !0, n = !0, M(!0)
                        }, 200)
                    }
                }), f("touchEnd", () => {
                    if (!u.destroyed && u.autoplay.running && l) {
                        if (clearTimeout(o), clearTimeout(t), u.params.autoplay.disableOnInteraction) {
                            n = !1, l = !1;
                            return
                        }
                        n && u.params.cssMode && P(), n = !1, l = !1
                    }
                }), f("slideChange", () => {
                    !u.destroyed && u.autoplay.running && (d = !0)
                }), Object.assign(u.autoplay, {
                    start: x,
                    stop: C,
                    pause: M,
                    resume: P
                })
            }

            function u(e) {
                let {
                    swiper: t,
                    extendParams: i,
                    on: a
                } = e;
                i({
                    thumbs: {
                        swiper: null,
                        multipleActiveThumbs: !0,
                        autoScrollOffset: 0,
                        slideThumbActiveClass: "swiper-slide-thumb-active",
                        thumbsContainerClass: "swiper-thumbs"
                    }
                });
                let l = !1,
                    n = !1;

                function o() {
                    let e;
                    let i = t.thumbs.swiper;
                    if (!i || i.destroyed) return;
                    let r = i.clickedIndex,
                        s = i.clickedSlide;
                    s && s.classList.contains(t.params.thumbs.slideThumbActiveClass) || null == r || (e = i.params.loop ? parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : r, t.params.loop ? t.slideToLoop(e) : t.slideTo(e))
                }

                function d() {
                    let {
                        thumbs: e
                    } = t.params;
                    if (l) return !1;
                    l = !0;
                    let i = t.constructor;
                    if (e.swiper instanceof i) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }), Object.assign(t.thumbs.swiper.params, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }), t.thumbs.swiper.update();
                    else if ((0, s.l)(e.swiper)) {
                        let r = Object.assign({}, e.swiper);
                        Object.assign(r, {
                            watchSlidesProgress: !0,
                            slideToClickedSlide: !1
                        }), t.thumbs.swiper = new i(r), n = !0
                    }
                    return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", o), !0
                }

                function p(e) {
                    let i = t.thumbs.swiper;
                    if (!i || i.destroyed) return;
                    let r = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView,
                        a = 1,
                        l = t.params.thumbs.slideThumbActiveClass;
                    if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (a = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (a = 1), a = Math.floor(a), i.slides.forEach(e => e.classList.remove(l)), i.params.loop || i.params.virtual && i.params.virtual.enabled)
                        for (let n = 0; n < a; n += 1)(0, s.e)(i.slidesEl, `[data-swiper-slide-index="${t.realIndex+n}"]`).forEach(e => {
                            e.classList.add(l)
                        });
                    else
                        for (let o = 0; o < a; o += 1) i.slides[t.realIndex + o] && i.slides[t.realIndex + o].classList.add(l);
                    let d = t.params.thumbs.autoScrollOffset,
                        p = d && !i.params.loop;
                    if (t.realIndex !== i.realIndex || p) {
                        let c, u;
                        let m = i.activeIndex;
                        if (i.params.loop) {
                            let f = i.slides.filter(e => e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`)[0];
                            c = i.slides.indexOf(f), u = t.activeIndex > t.previousIndex ? "next" : "prev"
                        } else u = (c = t.realIndex) > t.previousIndex ? "next" : "prev";
                        p && (c += "next" === u ? d : -1 * d), i.visibleSlidesIndexes && 0 > i.visibleSlidesIndexes.indexOf(c) && (i.params.centeredSlides ? c = c > m ? c - Math.floor(r / 2) + 1 : c + Math.floor(r / 2) - 1 : c > m && i.params.slidesPerGroup, i.slideTo(c, e ? 0 : void 0))
                    }
                }
                t.thumbs = {
                    swiper: null
                }, a("beforeInit", () => {
                    let {
                        thumbs: e
                    } = t.params;
                    if (e && e.swiper) {
                        if ("string" == typeof e.swiper || e.swiper instanceof HTMLElement) {
                            let i = (0, r.g)(),
                                s = () => {
                                    let r = "string" == typeof e.swiper ? i.querySelector(e.swiper) : e.swiper;
                                    if (r && r.swiper) e.swiper = r.swiper, d(), p(!0);
                                    else if (r) {
                                        let s = `${t.params.eventsPrefix}init`,
                                            a = i => {
                                                e.swiper = i.detail[0], r.removeEventListener(s, a), d(), p(!0), e.swiper.update(), t.update()
                                            };
                                        r.addEventListener(s, a)
                                    }
                                    return r
                                },
                                a = () => {
                                    if (t.destroyed) return;
                                    let e = s();
                                    e || requestAnimationFrame(a)
                                };
                            requestAnimationFrame(a)
                        } else d(), p(!0)
                    }
                }), a("slideChange update resize observerUpdate", () => {
                    p()
                }), a("setTransition", (e, i) => {
                    let r = t.thumbs.swiper;
                    r && !r.destroyed && r.setTransition(i)
                }), a("beforeDestroy", () => {
                    let e = t.thumbs.swiper;
                    e && !e.destroyed && n && e.destroy()
                }), Object.assign(t.thumbs, {
                    init: d,
                    update: p
                })
            }

            function m(e) {
                let {
                    swiper: t,
                    extendParams: i,
                    emit: r,
                    once: a
                } = e;
                i({
                    freeMode: {
                        enabled: !1,
                        momentum: !0,
                        momentumRatio: 1,
                        momentumBounce: !0,
                        momentumBounceRatio: 1,
                        momentumVelocityRatio: 1,
                        sticky: !1,
                        minimumVelocity: .02
                    }
                }), Object.assign(t, {
                    freeMode: {
                        onTouchStart: function() {
                            if (t.params.cssMode) return;
                            let e = t.getTranslate();
                            t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
                                currentPos: t.rtl ? t.translate : -t.translate
                            })
                        },
                        onTouchMove: function() {
                            if (t.params.cssMode) return;
                            let {
                                touchEventsData: e,
                                touches: i
                            } = t;
                            0 === e.velocities.length && e.velocities.push({
                                position: i[t.isHorizontal() ? "startX" : "startY"],
                                time: e.touchStartTime
                            }), e.velocities.push({
                                position: i[t.isHorizontal() ? "currentX" : "currentY"],
                                time: (0, s.d)()
                            })
                        },
                        onTouchEnd: function(e) {
                            let {
                                currentPos: i
                            } = e;
                            if (t.params.cssMode) return;
                            let {
                                params: l,
                                wrapperEl: n,
                                rtlTranslate: o,
                                snapGrid: d,
                                touchEventsData: p
                            } = t, c = (0, s.d)(), u = c - p.touchStartTime;
                            if (i < -t.minTranslate()) {
                                t.slideTo(t.activeIndex);
                                return
                            }
                            if (i > -t.maxTranslate()) {
                                t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1);
                                return
                            }
                            if (l.freeMode.momentum) {
                                let m, f;
                                if (p.velocities.length > 1) {
                                    let h = p.velocities.pop(),
                                        v = p.velocities.pop(),
                                        g = h.position - v.position,
                                        w = h.time - v.time;
                                    t.velocity = g / w, t.velocity /= 2, Math.abs(t.velocity) < l.freeMode.minimumVelocity && (t.velocity = 0), (w > 150 || (0, s.d)() - h.time > 300) && (t.velocity = 0)
                                } else t.velocity = 0;
                                t.velocity *= l.freeMode.momentumVelocityRatio, p.velocities.length = 0;
                                let b = 1e3 * l.freeMode.momentumRatio,
                                    y = t.velocity * b,
                                    S = t.translate + y;
                                o && (S = -S);
                                let T = !1,
                                    E = 20 * Math.abs(t.velocity) * l.freeMode.momentumBounceRatio;
                                if (S < t.maxTranslate()) l.freeMode.momentumBounce ? (S + t.maxTranslate() < -E && (S = t.maxTranslate() - E), m = t.maxTranslate(), T = !0, p.allowMomentumBounce = !0) : S = t.maxTranslate(), l.loop && l.centeredSlides && (f = !0);
                                else if (S > t.minTranslate()) l.freeMode.momentumBounce ? (S - t.minTranslate() > E && (S = t.minTranslate() + E), m = t.minTranslate(), T = !0, p.allowMomentumBounce = !0) : S = t.minTranslate(), l.loop && l.centeredSlides && (f = !0);
                                else if (l.freeMode.sticky) {
                                    let x;
                                    for (let C = 0; C < d.length; C += 1)
                                        if (d[C] > -S) {
                                            x = C;
                                            break
                                        }
                                    S = -(S = Math.abs(d[x] - S) < Math.abs(d[x - 1] - S) || "next" === t.swipeDirection ? d[x] : d[x - 1])
                                }
                                if (f && a("transitionEnd", () => {
                                        t.loopFix()
                                    }), 0 !== t.velocity) {
                                    if (b = o ? Math.abs((-S - t.translate) / t.velocity) : Math.abs((S - t.translate) / t.velocity), l.freeMode.sticky) {
                                        let M = Math.abs((o ? -S : S) - t.translate),
                                            P = t.slidesSizesGrid[t.activeIndex];
                                        b = M < P ? l.speed : M < 2 * P ? 1.5 * l.speed : 2.5 * l.speed
                                    }
                                } else if (l.freeMode.sticky) {
                                    t.slideToClosest();
                                    return
                                }
                                l.freeMode.momentumBounce && T ? (t.updateProgress(m), t.setTransition(b), t.setTranslate(S), t.transitionStart(!0, t.swipeDirection), t.animating = !0, (0, s.k)(n, () => {
                                    t && !t.destroyed && p.allowMomentumBounce && (r("momentumBounce"), t.setTransition(l.speed), setTimeout(() => {
                                        t.setTranslate(m), (0, s.k)(n, () => {
                                            t && !t.destroyed && t.transitionEnd()
                                        })
                                    }, 0))
                                })) : t.velocity ? (r("_freeModeNoMomentumRelease"), t.updateProgress(S), t.setTransition(b), t.setTranslate(S), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, (0, s.k)(n, () => {
                                    t && !t.destroyed && t.transitionEnd()
                                }))) : t.updateProgress(S), t.updateActiveIndex(), t.updateSlidesClasses()
                            } else if (l.freeMode.sticky) {
                                t.slideToClosest();
                                return
                            } else l.freeMode && r("_freeModeNoMomentumRelease");
                            (!l.freeMode.momentum || u >= l.longSwipesMs) && (r("_freeModeStaticRelease"), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                        }
                    }
                })
            }
        },
        13433: function(e, t, i) {
            function r(e) {
                return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
            }

            function s(e, t) {
                void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach(i => {
                    void 0 === e[i] ? e[i] = t[i] : r(t[i]) && r(e[i]) && Object.keys(t[i]).length > 0 && s(e[i], t[i])
                })
            }
            i.d(t, {
                a: function() {
                    return o
                },
                g: function() {
                    return l
                }
            });
            let a = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({
                    initEvent() {}
                }),
                createElement: () => ({
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName: () => []
                }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function l() {
                let e = "undefined" != typeof document ? document : {};
                return s(e, a), e
            }
            let n = {
                document: a,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({
                    getPropertyValue: () => ""
                }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
                cancelAnimationFrame(e) {
                    "undefined" != typeof setTimeout && clearTimeout(e)
                }
            };

            function o() {
                let e = "undefined" != typeof window ? window : {};
                return s(e, n), e
            }
        },
        7185: function(e, t, i) {
            i.d(t, {
                a: function() {
                    return b
                },
                c: function() {
                    return f
                },
                d: function() {
                    return l
                },
                e: function() {
                    return c
                },
                f: function() {
                    return S
                },
                h: function() {
                    return w
                },
                j: function() {
                    return n
                },
                k: function() {
                    return y
                },
                l: function() {
                    return o
                },
                m: function() {
                    return T
                },
                n: function() {
                    return a
                },
                p: function() {
                    return g
                },
                q: function() {
                    return v
                },
                r: function() {
                    return h
                },
                s: function() {
                    return d
                },
                t: function() {
                    return p
                },
                u: function() {
                    return m
                },
                v: function() {
                    return u
                },
                w: function() {
                    return function e() {
                        let t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                            i = ["__proto__", "constructor", "prototype"];
                        for (let r = 1; r < arguments.length; r += 1) {
                            let s = r < 0 || arguments.length <= r ? void 0 : arguments[r];
                            if (null != s && ("undefined" != typeof window && void 0 !== window.HTMLElement ? !(s instanceof HTMLElement) : !s || 1 !== s.nodeType && 11 !== s.nodeType)) {
                                let a = Object.keys(Object(s)).filter(e => 0 > i.indexOf(e));
                                for (let l = 0, n = a.length; l < n; l += 1) {
                                    let d = a[l],
                                        p = Object.getOwnPropertyDescriptor(s, d);
                                    void 0 !== p && p.enumerable && (o(t[d]) && o(s[d]) ? s[d].__swiper__ ? t[d] = s[d] : e(t[d], s[d]) : !o(t[d]) && o(s[d]) ? (t[d] = {}, s[d].__swiper__ ? t[d] = s[d] : e(t[d], s[d])) : t[d] = s[d])
                                }
                            }
                        }
                        return t
                    }
                },
                x: function() {
                    return s
                }
            });
            var r = i(13433);

            function s(e) {
                let t = e;
                Object.keys(t).forEach(e => {
                    try {
                        t[e] = null
                    } catch (i) {}
                    try {
                        delete t[e]
                    } catch (r) {}
                })
            }

            function a(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            }

            function l() {
                return Date.now()
            }

            function n(e, t) {
                let i, s, a;
                void 0 === t && (t = "x");
                let l = (0, r.a)(),
                    n = function(e) {
                        let t;
                        let i = (0, r.a)();
                        return i.getComputedStyle && (t = i.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t
                    }(e);
                return l.WebKitCSSMatrix ? ((s = n.transform || n.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(e => e.replace(",", ".")).join(", ")), a = new l.WebKitCSSMatrix("none" === s ? "" : s)) : i = (a = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = l.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = l.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
            }

            function o(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function d(e, t, i) {
                e.style.setProperty(t, i)
            }

            function p(e) {
                let t, {
                        swiper: i,
                        targetPosition: s,
                        side: a
                    } = e,
                    l = (0, r.a)(),
                    n = -i.translate,
                    o = null,
                    d = i.params.speed;
                i.wrapperEl.style.scrollSnapType = "none", l.cancelAnimationFrame(i.cssModeFrameID);
                let p = s > n ? "next" : "prev",
                    c = (e, t) => "next" === p && e >= t || "prev" === p && e <= t,
                    u = () => {
                        t = new Date().getTime(), null === o && (o = t);
                        let e = Math.max(Math.min((t - o) / d, 1), 0),
                            r = n + (.5 - Math.cos(e * Math.PI) / 2) * (s - n);
                        if (c(r, s) && (r = s), i.wrapperEl.scrollTo({
                                [a]: r
                            }), c(r, s)) {
                            i.wrapperEl.style.overflow = "hidden", i.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                                i.wrapperEl.style.overflow = "", i.wrapperEl.scrollTo({
                                    [a]: r
                                })
                            }), l.cancelAnimationFrame(i.cssModeFrameID);
                            return
                        }
                        i.cssModeFrameID = l.requestAnimationFrame(u)
                    };
                u()
            }

            function c(e, t) {
                void 0 === t && (t = "");
                let i = [...e.children];
                return (e instanceof HTMLSlotElement && i.push(...e.assignedElements()), t) ? i.filter(e => e.matches(t)) : i
            }

            function u(e, t) {
                let i = t.contains(e);
                if (!i && t instanceof HTMLSlotElement) {
                    let r = [...t.assignedElements()];
                    return r.includes(e)
                }
                return i
            }

            function m(e) {
                try {
                    console.warn(e);
                    return
                } catch (t) {}
            }

            function f(e, t) {
                var i;
                void 0 === t && (t = []);
                let r = document.createElement(e);
                return r.classList.add(...Array.isArray(t) ? t : (void 0 === (i = t) && (i = ""), i.trim().split(" ").filter(e => !!e.trim()))), r
            }

            function h(e, t) {
                let i = [];
                for (; e.previousElementSibling;) {
                    let r = e.previousElementSibling;
                    t ? r.matches(t) && i.push(r) : i.push(r), e = r
                }
                return i
            }

            function v(e, t) {
                let i = [];
                for (; e.nextElementSibling;) {
                    let r = e.nextElementSibling;
                    t ? r.matches(t) && i.push(r) : i.push(r), e = r
                }
                return i
            }

            function g(e, t) {
                let i = (0, r.a)();
                return i.getComputedStyle(e, null).getPropertyValue(t)
            }

            function w(e) {
                let t, i = e;
                if (i) {
                    for (t = 0; null !== (i = i.previousSibling);) 1 === i.nodeType && (t += 1);
                    return t
                }
            }

            function b(e, t) {
                let i = [],
                    r = e.parentElement;
                for (; r;) t ? r.matches(t) && i.push(r) : i.push(r), r = r.parentElement;
                return i
            }

            function y(e, t) {
                t && e.addEventListener("transitionend", function i(r) {
                    r.target === e && (t.call(e, r), e.removeEventListener("transitionend", i))
                })
            }

            function S(e, t, i) {
                let s = (0, r.a)();
                return i ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
            }

            function T(e) {
                return (Array.isArray(e) ? e : [e]).filter(e => !!e)
            }
        },
        2261: function(e, t, i) {
            let r, s, a;
            i.d(t, {
                tq: function() {
                    return q
                },
                o5: function() {
                    return W
                }
            });
            var l = i(67294),
                n = i(13433),
                o = i(7185);

            function d() {
                return r || (r = function() {
                    let e = (0, n.a)(),
                        t = (0, n.g)();
                    return {
                        smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
                    }
                }()), r
            }

            function p(e) {
                return void 0 === e && (e = {}), s || (s = function(e) {
                    let {
                        userAgent: t
                    } = void 0 === e ? {} : e, i = d(), r = (0, n.a)(), s = r.navigator.platform, a = t || r.navigator.userAgent, l = {
                        ios: !1,
                        android: !1
                    }, o = r.screen.width, p = r.screen.height, c = a.match(/(Android);?[\s\/]+([\d.]+)?/), u = a.match(/(iPad).*OS\s([\d_]+)/), m = a.match(/(iPod)(.*OS\s([\d_]+))?/), f = !u && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/), h = "MacIntel" === s;
                    return !u && h && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${p}`) >= 0 && ((u = a.match(/(Version)\/([\d.]+)/)) || (u = [0, 1, "13_0_0"]), h = !1), c && "Win32" !== s && (l.os = "android", l.android = !0), (u || f || m) && (l.os = "ios", l.ios = !0), l
                }(e)), s
            }
            let c = (e, t, i) => {
                    t && !e.classList.contains(i) ? e.classList.add(i) : !t && e.classList.contains(i) && e.classList.remove(i)
                },
                u = (e, t, i) => {
                    t && !e.classList.contains(i) ? e.classList.add(i) : !t && e.classList.contains(i) && e.classList.remove(i)
                },
                m = (e, t) => {
                    if (!e || e.destroyed || !e.params) return;
                    let i = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
                    if (i) {
                        let r = i.querySelector(`.${e.params.lazyPreloaderClass}`);
                        !r && e.isElement && (i.shadowRoot ? r = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
                            i.shadowRoot && (r = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)) && r.remove()
                        })), r && r.remove()
                    }
                },
                f = (e, t) => {
                    if (!e.slides[t]) return;
                    let i = e.slides[t].querySelector('[loading="lazy"]');
                    i && i.removeAttribute("loading")
                },
                h = e => {
                    if (!e || e.destroyed || !e.params) return;
                    let t = e.params.lazyPreloadPrevNext,
                        i = e.slides.length;
                    if (!i || !t || t < 0) return;
                    t = Math.min(t, i);
                    let r = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
                        s = e.activeIndex;
                    if (e.params.grid && e.params.grid.rows > 1) {
                        let a = [s - t];
                        a.push(...Array.from({
                            length: t
                        }).map((e, t) => s + r + t)), e.slides.forEach((t, i) => {
                            a.includes(t.column) && f(e, i)
                        });
                        return
                    }
                    let l = s + r - 1;
                    if (e.params.rewind || e.params.loop)
                        for (let n = s - t; n <= l + t; n += 1) {
                            let o = (n % i + i) % i;
                            (o < s || o > l) && f(e, o)
                        } else
                            for (let d = Math.max(s - t, 0); d <= Math.min(l + t, i - 1); d += 1) d !== s && (d > l || d < s) && f(e, d)
                };

            function v(e) {
                let {
                    swiper: t,
                    runCallbacks: i,
                    direction: r,
                    step: s
                } = e, {
                    activeIndex: a,
                    previousIndex: l
                } = t, n = r;
                if (n || (n = a > l ? "next" : a < l ? "prev" : "reset"), t.emit(`transition${s}`), i && a !== l) {
                    if ("reset" === n) {
                        t.emit(`slideResetTransition${s}`);
                        return
                    }
                    t.emit(`slideChangeTransition${s}`), "next" === n ? t.emit(`slideNextTransition${s}`) : t.emit(`slidePrevTransition${s}`)
                }
            }

            function g(e, t, i) {
                let r = (0, n.a)(),
                    {
                        params: s
                    } = e,
                    a = s.edgeSwipeDetection,
                    l = s.edgeSwipeThreshold;
                return !a || !(i <= l) && !(i >= r.innerWidth - l) || "prevent" === a && (t.preventDefault(), !0)
            }

            function w(e) {
                let t = this,
                    i = (0, n.g)(),
                    r = e;
                r.originalEvent && (r = r.originalEvent);
                let s = t.touchEventsData;
                if ("pointerdown" === r.type) {
                    if (null !== s.pointerId && s.pointerId !== r.pointerId) return;
                    s.pointerId = r.pointerId
                } else "touchstart" === r.type && 1 === r.targetTouches.length && (s.touchId = r.targetTouches[0].identifier);
                if ("touchstart" === r.type) {
                    g(t, r, r.targetTouches[0].pageX);
                    return
                }
                let {
                    params: a,
                    touches: l,
                    enabled: d
                } = t;
                if (!d || !a.simulateTouch && "mouse" === r.pointerType || t.animating && a.preventInteractionOnTransition) return;
                !t.animating && a.cssMode && a.loop && t.loopFix();
                let p = r.target;
                if ("wrapper" === a.touchEventsTarget && !(0, o.v)(p, t.wrapperEl) || "which" in r && 3 === r.which || "button" in r && r.button > 0 || s.isTouched && s.isMoved) return;
                let c = !!a.noSwipingClass && "" !== a.noSwipingClass,
                    u = r.composedPath ? r.composedPath() : r.path;
                c && r.target && r.target.shadowRoot && u && (p = u[0]);
                let m = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`,
                    f = !!(r.target && r.target.shadowRoot);
                if (a.noSwiping && (f ? function(e, t) {
                        return void 0 === t && (t = this),
                            function t(i) {
                                if (!i || i === (0, n.g)() || i === (0, n.a)()) return null;
                                i.assignedSlot && (i = i.assignedSlot);
                                let r = i.closest(e);
                                return r || i.getRootNode ? r || t(i.getRootNode().host) : null
                            }(t)
                    }(m, p) : p.closest(m))) {
                    t.allowClick = !0;
                    return
                }
                if (a.swipeHandler && !p.closest(a.swipeHandler)) return;
                l.currentX = r.pageX, l.currentY = r.pageY;
                let h = l.currentX,
                    v = l.currentY;
                if (!g(t, r, h)) return;
                Object.assign(s, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0
                }), l.startX = h, l.startY = v, s.touchStartTime = (0, o.d)(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, a.threshold > 0 && (s.allowThresholdMove = !1);
                let w = !0;
                p.matches(s.focusableElements) && (w = !1, "SELECT" === p.nodeName && (s.isTouched = !1)), i.activeElement && i.activeElement.matches(s.focusableElements) && i.activeElement !== p && i.activeElement.blur();
                let b = w && t.allowTouchMove && a.touchStartPreventDefault;
                (a.touchStartForcePreventDefault || b) && !p.isContentEditable && r.preventDefault(), a.freeMode && a.freeMode.enabled && t.freeMode && t.animating && !a.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", r)
            }

            function b(e) {
                let t, i;
                let r = (0, n.g)(),
                    s = this,
                    a = s.touchEventsData,
                    {
                        params: l,
                        touches: d,
                        rtlTranslate: p,
                        enabled: c
                    } = s;
                if (!c || !l.simulateTouch && "mouse" === e.pointerType) return;
                let u = e;
                if (u.originalEvent && (u = u.originalEvent), "pointermove" === u.type) {
                    if (null !== a.touchId) return;
                    let m = u.pointerId;
                    if (m !== a.pointerId) return
                }
                if ("touchmove" === u.type) {
                    if (!(t = [...u.changedTouches].filter(e => e.identifier === a.touchId)[0]) || t.identifier !== a.touchId) return
                } else t = u;
                if (!a.isTouched) {
                    a.startMoving && a.isScrolling && s.emit("touchMoveOpposite", u);
                    return
                }
                let f = t.pageX,
                    h = t.pageY;
                if (u.preventedByNestedSwiper) {
                    d.startX = f, d.startY = h;
                    return
                }
                if (!s.allowTouchMove) {
                    u.target.matches(a.focusableElements) || (s.allowClick = !1), a.isTouched && (Object.assign(d, {
                        startX: f,
                        startY: h,
                        currentX: f,
                        currentY: h
                    }), a.touchStartTime = (0, o.d)());
                    return
                }
                if (l.touchReleaseOnEdges && !l.loop) {
                    if (s.isVertical()) {
                        if (h < d.startY && s.translate <= s.maxTranslate() || h > d.startY && s.translate >= s.minTranslate()) {
                            a.isTouched = !1, a.isMoved = !1;
                            return
                        }
                    } else if (f < d.startX && s.translate <= s.maxTranslate() || f > d.startX && s.translate >= s.minTranslate()) return
                }
                if (r.activeElement && u.target === r.activeElement && u.target.matches(a.focusableElements)) {
                    a.isMoved = !0, s.allowClick = !1;
                    return
                }
                a.allowTouchCallbacks && s.emit("touchMove", u), d.previousX = d.currentX, d.previousY = d.currentY, d.currentX = f, d.currentY = h;
                let v = d.currentX - d.startX,
                    g = d.currentY - d.startY;
                if (s.params.threshold && Math.sqrt(v ** 2 + g ** 2) < s.params.threshold) return;
                if (void 0 === a.isScrolling) {
                    let w;
                    s.isHorizontal() && d.currentY === d.startY || s.isVertical() && d.currentX === d.startX ? a.isScrolling = !1 : v * v + g * g >= 25 && (w = 180 * Math.atan2(Math.abs(g), Math.abs(v)) / Math.PI, a.isScrolling = s.isHorizontal() ? w > l.touchAngle : 90 - w > l.touchAngle)
                }
                if (a.isScrolling && s.emit("touchMoveOpposite", u), void 0 === a.startMoving && (d.currentX !== d.startX || d.currentY !== d.startY) && (a.startMoving = !0), a.isScrolling || "touchmove" === u.type && a.preventTouchMoveFromPointerMove) {
                    a.isTouched = !1;
                    return
                }
                if (!a.startMoving) return;
                s.allowClick = !1, !l.cssMode && u.cancelable && u.preventDefault(), l.touchMoveStopPropagation && !l.nested && u.stopPropagation();
                let b = s.isHorizontal() ? v : g,
                    y = s.isHorizontal() ? d.currentX - d.previousX : d.currentY - d.previousY;
                l.oneWayMovement && (b = Math.abs(b) * (p ? 1 : -1), y = Math.abs(y) * (p ? 1 : -1)), d.diff = b, b *= l.touchRatio, p && (b = -b, y = -y);
                let S = s.touchesDirection;
                s.swipeDirection = b > 0 ? "prev" : "next", s.touchesDirection = y > 0 ? "prev" : "next";
                let T = s.params.loop && !l.cssMode,
                    E = "next" === s.touchesDirection && s.allowSlideNext || "prev" === s.touchesDirection && s.allowSlidePrev;
                if (!a.isMoved) {
                    if (T && E && s.loopFix({
                            direction: s.swipeDirection
                        }), a.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
                        let x = new window.CustomEvent("transitionend", {
                            bubbles: !0,
                            cancelable: !0,
                            detail: {
                                bySwiperTouchMove: !0
                            }
                        });
                        s.wrapperEl.dispatchEvent(x)
                    }
                    a.allowMomentumBounce = !1, l.grabCursor && (!0 === s.allowSlideNext || !0 === s.allowSlidePrev) && s.setGrabCursor(!0), s.emit("sliderFirstMove", u)
                }
                if (new Date().getTime(), a.isMoved && a.allowThresholdMove && S !== s.touchesDirection && T && E && Math.abs(b) >= 1) {
                    Object.assign(d, {
                        startX: f,
                        startY: h,
                        currentX: f,
                        currentY: h,
                        startTranslate: a.currentTranslate
                    }), a.loopSwapReset = !0, a.startTranslate = a.currentTranslate;
                    return
                }
                s.emit("sliderMove", u), a.isMoved = !0, a.currentTranslate = b + a.startTranslate;
                let C = !0,
                    M = l.resistanceRatio;
                if (l.touchReleaseOnEdges && (M = 0), b > 0 ? (T && E && !i && a.allowThresholdMove && a.currentTranslate > (l.centeredSlides ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1] : s.minTranslate()) && s.loopFix({
                        direction: "prev",
                        setTranslate: !0,
                        activeSlideIndex: 0
                    }), a.currentTranslate > s.minTranslate() && (C = !1, l.resistance && (a.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + a.startTranslate + b) ** M))) : b < 0 && (T && E && !i && a.allowThresholdMove && a.currentTranslate < (l.centeredSlides ? s.maxTranslate() + s.slidesSizesGrid[s.slidesSizesGrid.length - 1] : s.maxTranslate()) && s.loopFix({
                        direction: "next",
                        setTranslate: !0,
                        activeSlideIndex: s.slides.length - ("auto" === l.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(l.slidesPerView, 10)))
                    }), a.currentTranslate < s.maxTranslate() && (C = !1, l.resistance && (a.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - a.startTranslate - b) ** M))), C && (u.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate), s.allowSlidePrev || s.allowSlideNext || (a.currentTranslate = a.startTranslate), l.threshold > 0) {
                    if (Math.abs(b) > l.threshold || a.allowThresholdMove) {
                        if (!a.allowThresholdMove) {
                            a.allowThresholdMove = !0, d.startX = d.currentX, d.startY = d.currentY, a.currentTranslate = a.startTranslate, d.diff = s.isHorizontal() ? d.currentX - d.startX : d.currentY - d.startY;
                            return
                        }
                    } else {
                        a.currentTranslate = a.startTranslate;
                        return
                    }
                }
                l.followFinger && !l.cssMode && ((l.freeMode && l.freeMode.enabled && s.freeMode || l.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), l.freeMode && l.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(a.currentTranslate), s.setTranslate(a.currentTranslate))
            }

            function y(e) {
                let t, i;
                let r = this,
                    s = r.touchEventsData,
                    a = e;
                a.originalEvent && (a = a.originalEvent);
                let l = "touchend" === a.type || "touchcancel" === a.type;
                if (l) {
                    if (!(t = [...a.changedTouches].filter(e => e.identifier === s.touchId)[0]) || t.identifier !== s.touchId) return
                } else {
                    if (null !== s.touchId || a.pointerId !== s.pointerId) return;
                    t = a
                }
                if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(a.type)) {
                    let n = ["pointercancel", "contextmenu"].includes(a.type) && (r.browser.isSafari || r.browser.isWebView);
                    if (!n) return
                }
                s.pointerId = null, s.touchId = null;
                let {
                    params: d,
                    touches: p,
                    rtlTranslate: c,
                    slidesGrid: u,
                    enabled: m
                } = r;
                if (!m || !d.simulateTouch && "mouse" === a.pointerType) return;
                if (s.allowTouchCallbacks && r.emit("touchEnd", a), s.allowTouchCallbacks = !1, !s.isTouched) {
                    s.isMoved && d.grabCursor && r.setGrabCursor(!1), s.isMoved = !1, s.startMoving = !1;
                    return
                }
                d.grabCursor && s.isMoved && s.isTouched && (!0 === r.allowSlideNext || !0 === r.allowSlidePrev) && r.setGrabCursor(!1);
                let f = (0, o.d)(),
                    h = f - s.touchStartTime;
                if (r.allowClick) {
                    let v = a.path || a.composedPath && a.composedPath();
                    r.updateClickedSlide(v && v[0] || a.target, v), r.emit("tap click", a), h < 300 && f - s.lastClickTime < 300 && r.emit("doubleTap doubleClick", a)
                }
                if (s.lastClickTime = (0, o.d)(), (0, o.n)(() => {
                        r.destroyed || (r.allowClick = !0)
                    }), !s.isTouched || !s.isMoved || !r.swipeDirection || 0 === p.diff && !s.loopSwapReset || s.currentTranslate === s.startTranslate && !s.loopSwapReset) {
                    s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
                    return
                }
                if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, i = d.followFinger ? c ? r.translate : -r.translate : -s.currentTranslate, d.cssMode) return;
                if (d.freeMode && d.freeMode.enabled) {
                    r.freeMode.onTouchEnd({
                        currentPos: i
                    });
                    return
                }
                let g = i >= -r.maxTranslate() && !r.params.loop,
                    w = 0,
                    b = r.slidesSizesGrid[0];
                for (let y = 0; y < u.length; y += y < d.slidesPerGroupSkip ? 1 : d.slidesPerGroup) {
                    let S = y < d.slidesPerGroupSkip - 1 ? 1 : d.slidesPerGroup;
                    void 0 !== u[y + S] ? (g || i >= u[y] && i < u[y + S]) && (w = y, b = u[y + S] - u[y]) : (g || i >= u[y]) && (w = y, b = u[u.length - 1] - u[u.length - 2])
                }
                let T = null,
                    E = null;
                d.rewind && (r.isBeginning ? E = d.virtual && d.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1 : r.isEnd && (T = 0));
                let x = (i - u[w]) / b,
                    C = w < d.slidesPerGroupSkip - 1 ? 1 : d.slidesPerGroup;
                if (h > d.longSwipesMs) {
                    if (!d.longSwipes) {
                        r.slideTo(r.activeIndex);
                        return
                    }
                    "next" === r.swipeDirection && (x >= d.longSwipesRatio ? r.slideTo(d.rewind && r.isEnd ? T : w + C) : r.slideTo(w)), "prev" === r.swipeDirection && (x > 1 - d.longSwipesRatio ? r.slideTo(w + C) : null !== E && x < 0 && Math.abs(x) > d.longSwipesRatio ? r.slideTo(E) : r.slideTo(w))
                } else {
                    if (!d.shortSwipes) {
                        r.slideTo(r.activeIndex);
                        return
                    }
                    let M = r.navigation && (a.target === r.navigation.nextEl || a.target === r.navigation.prevEl);
                    M ? a.target === r.navigation.nextEl ? r.slideTo(w + C) : r.slideTo(w) : ("next" === r.swipeDirection && r.slideTo(null !== T ? T : w + C), "prev" === r.swipeDirection && r.slideTo(null !== E ? E : w))
                }
            }

            function S() {
                let e = this,
                    {
                        params: t,
                        el: i
                    } = e;
                if (i && 0 === i.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                let {
                    allowSlideNext: r,
                    allowSlidePrev: s,
                    snapGrid: a
                } = e, l = e.virtual && e.params.virtual.enabled;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
                let n = l && t.loop;
                "auto" !== t.slidesPerView && !(t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || n ? e.params.loop && !l ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
                    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
                }, 500)), e.allowSlidePrev = s, e.allowSlideNext = r, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
            }

            function T(e) {
                this.enabled && !this.allowClick && (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }

            function E() {
                let e = this,
                    {
                        wrapperEl: t,
                        rtlTranslate: i,
                        enabled: r
                    } = e;
                if (!r) return;
                e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
                let s = e.maxTranslate() - e.minTranslate();
                (0 === s ? 0 : (e.translate - e.minTranslate()) / s) !== e.progress && e.updateProgress(i ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
            }

            function x(e) {
                m(this, e.target), !this.params.cssMode && ("auto" === this.params.slidesPerView || this.params.autoHeight) && this.update()
            }

            function C() {
                let e = this;
                !e.documentTouchHandlerProceeded && (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
            }
            let M = (e, t) => {
                    let i = (0, n.g)(),
                        {
                            params: r,
                            el: s,
                            wrapperEl: a,
                            device: l
                        } = e,
                        o = !!r.nested,
                        d = "on" === t ? "addEventListener" : "removeEventListener";
                    s && "string" != typeof s && (i[d]("touchstart", e.onDocumentTouchStart, {
                        passive: !1,
                        capture: o
                    }), s[d]("touchstart", e.onTouchStart, {
                        passive: !1
                    }), s[d]("pointerdown", e.onTouchStart, {
                        passive: !1
                    }), i[d]("touchmove", e.onTouchMove, {
                        passive: !1,
                        capture: o
                    }), i[d]("pointermove", e.onTouchMove, {
                        passive: !1,
                        capture: o
                    }), i[d]("touchend", e.onTouchEnd, {
                        passive: !0
                    }), i[d]("pointerup", e.onTouchEnd, {
                        passive: !0
                    }), i[d]("pointercancel", e.onTouchEnd, {
                        passive: !0
                    }), i[d]("touchcancel", e.onTouchEnd, {
                        passive: !0
                    }), i[d]("pointerout", e.onTouchEnd, {
                        passive: !0
                    }), i[d]("pointerleave", e.onTouchEnd, {
                        passive: !0
                    }), i[d]("contextmenu", e.onTouchEnd, {
                        passive: !0
                    }), (r.preventClicks || r.preventClicksPropagation) && s[d]("click", e.onClick, !0), r.cssMode && a[d]("scroll", e.onScroll), r.updateOnWindowResize ? e[t](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", S, !0) : e[t]("observerUpdate", S, !0), s[d]("load", e.onLoad, {
                        capture: !0
                    }))
                },
                P = (e, t) => e.grid && t.grid && t.grid.rows > 1;
            var L = {
                init: !0,
                direction: "horizontal",
                oneWayMovement: !1,
                swiperElementNodeName: "SWIPER-CONTAINER",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                eventsPrefix: "swiper",
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 5,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                loop: !1,
                loopAddBlankSlides: !0,
                loopAdditionalSlides: 0,
                loopPreventsSliding: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-blank",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                slideFullyVisibleClass: "swiper-slide-fully-visible",
                slideNextClass: "swiper-slide-next",
                slidePrevClass: "swiper-slide-prev",
                wrapperClass: "swiper-wrapper",
                lazyPreloaderClass: "swiper-lazy-preloader",
                lazyPreloadPrevNext: 0,
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };
            let k = {
                    eventsEmitter: {
                        on(e, t, i) {
                            let r = this;
                            if (!r.eventsListeners || r.destroyed || "function" != typeof t) return r;
                            let s = i ? "unshift" : "push";
                            return e.split(" ").forEach(e => {
                                r.eventsListeners[e] || (r.eventsListeners[e] = []), r.eventsListeners[e][s](t)
                            }), r
                        },
                        once(e, t, i) {
                            let r = this;
                            if (!r.eventsListeners || r.destroyed || "function" != typeof t) return r;

                            function s() {
                                r.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
                                for (var i = arguments.length, a = Array(i), l = 0; l < i; l++) a[l] = arguments[l];
                                t.apply(r, a)
                            }
                            return s.__emitterProxy = t, r.on(e, s, i)
                        },
                        onAny(e, t) {
                            return !this.eventsListeners || this.destroyed || "function" != typeof e || 0 > this.eventsAnyListeners.indexOf(e) && this.eventsAnyListeners[t ? "unshift" : "push"](e), this
                        },
                        offAny(e) {
                            if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners) return this;
                            let t = this.eventsAnyListeners.indexOf(e);
                            return t >= 0 && this.eventsAnyListeners.splice(t, 1), this
                        },
                        off(e, t) {
                            let i = this;
                            return i.eventsListeners && !i.destroyed && i.eventsListeners && e.split(" ").forEach(e => {
                                void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach((r, s) => {
                                    (r === t || r.__emitterProxy && r.__emitterProxy === t) && i.eventsListeners[e].splice(s, 1)
                                })
                            }), i
                        },
                        emit() {
                            let e, t, i;
                            let r = this;
                            if (!r.eventsListeners || r.destroyed || !r.eventsListeners) return r;
                            for (var s = arguments.length, a = Array(s), l = 0; l < s; l++) a[l] = arguments[l];
                            "string" == typeof a[0] || Array.isArray(a[0]) ? (e = a[0], t = a.slice(1, a.length), i = r) : (e = a[0].events, t = a[0].data, i = a[0].context || r), t.unshift(i);
                            let n = Array.isArray(e) ? e : e.split(" ");
                            return n.forEach(e => {
                                r.eventsAnyListeners && r.eventsAnyListeners.length && r.eventsAnyListeners.forEach(r => {
                                    r.apply(i, [e, ...t])
                                }), r.eventsListeners && r.eventsListeners[e] && r.eventsListeners[e].forEach(e => {
                                    e.apply(i, t)
                                })
                            }), r
                        }
                    },
                    update: {
                        updateSize: function() {
                            let e, t;
                            let i = this.el;
                            e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i.clientWidth, t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : i.clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt((0, o.p)(i, "padding-left") || 0, 10) - parseInt((0, o.p)(i, "padding-right") || 0, 10), t = t - parseInt((0, o.p)(i, "padding-top") || 0, 10) - parseInt((0, o.p)(i, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(this, {
                                width: e,
                                height: t,
                                size: this.isHorizontal() ? e : t
                            }))
                        },
                        updateSlides: function() {
                            let e;
                            let t = this;

                            function i(e, i) {
                                return parseFloat(e.getPropertyValue(t.getDirectionLabel(i)) || 0)
                            }
                            let r = t.params,
                                {
                                    wrapperEl: s,
                                    slidesEl: a,
                                    size: l,
                                    rtlTranslate: n,
                                    wrongRTL: d
                                } = t,
                                p = t.virtual && r.virtual.enabled,
                                c = p ? t.virtual.slides.length : t.slides.length,
                                u = (0, o.e)(a, `.${t.params.slideClass}, swiper-slide`),
                                m = p ? t.virtual.slides.length : u.length,
                                f = [],
                                h = [],
                                v = [],
                                g = r.slidesOffsetBefore;
                            "function" == typeof g && (g = r.slidesOffsetBefore.call(t));
                            let w = r.slidesOffsetAfter;
                            "function" == typeof w && (w = r.slidesOffsetAfter.call(t));
                            let b = t.snapGrid.length,
                                y = t.slidesGrid.length,
                                S = r.spaceBetween,
                                T = -g,
                                E = 0,
                                x = 0;
                            if (void 0 === l) return;
                            "string" == typeof S && S.indexOf("%") >= 0 ? S = parseFloat(S.replace("%", "")) / 100 * l : "string" == typeof S && (S = parseFloat(S)), t.virtualSize = -S, u.forEach(e => {
                                n ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
                            }), r.centeredSlides && r.cssMode && ((0, o.s)(s, "--swiper-centered-offset-before", ""), (0, o.s)(s, "--swiper-centered-offset-after", ""));
                            let C = r.grid && r.grid.rows > 1 && t.grid;
                            C ? t.grid.initSlides(u) : t.grid && t.grid.unsetSlides();
                            let M = "auto" === r.slidesPerView && r.breakpoints && Object.keys(r.breakpoints).filter(e => void 0 !== r.breakpoints[e].slidesPerView).length > 0;
                            for (let P = 0; P < m; P += 1) {
                                let L;
                                if (e = 0, u[P] && (L = u[P]), C && t.grid.updateSlide(P, L, u), !u[P] || "none" !== (0, o.p)(L, "display")) {
                                    if ("auto" === r.slidesPerView) {
                                        M && (u[P].style[t.getDirectionLabel("width")] = "");
                                        let k = getComputedStyle(L),
                                            O = L.style.transform,
                                            I = L.style.webkitTransform;
                                        if (O && (L.style.transform = "none"), I && (L.style.webkitTransform = "none"), r.roundLengths) e = t.isHorizontal() ? (0, o.f)(L, "width", !0) : (0, o.f)(L, "height", !0);
                                        else {
                                            let A = i(k, "width"),
                                                _ = i(k, "padding-left"),
                                                z = i(k, "padding-right"),
                                                D = i(k, "margin-left"),
                                                $ = i(k, "margin-right"),
                                                N = k.getPropertyValue("box-sizing");
                                            if (N && "border-box" === N) e = A + D + $;
                                            else {
                                                let {
                                                    clientWidth: G,
                                                    offsetWidth: B
                                                } = L;
                                                e = A + _ + z + D + $ + (B - G)
                                            }
                                        }
                                        O && (L.style.transform = O), I && (L.style.webkitTransform = I), r.roundLengths && (e = Math.floor(e))
                                    } else e = (l - (r.slidesPerView - 1) * S) / r.slidesPerView, r.roundLengths && (e = Math.floor(e)), u[P] && (u[P].style[t.getDirectionLabel("width")] = `${e}px`);
                                    u[P] && (u[P].swiperSlideSize = e), v.push(e), r.centeredSlides ? (T = T + e / 2 + E / 2 + S, 0 === E && 0 !== P && (T = T - l / 2 - S), 0 === P && (T = T - l / 2 - S), .001 > Math.abs(T) && (T = 0), r.roundLengths && (T = Math.floor(T)), x % r.slidesPerGroup == 0 && f.push(T), h.push(T)) : (r.roundLengths && (T = Math.floor(T)), (x - Math.min(t.params.slidesPerGroupSkip, x)) % t.params.slidesPerGroup == 0 && f.push(T), h.push(T), T = T + e + S), t.virtualSize += e + S, E = e, x += 1
                                }
                            }
                            if (t.virtualSize = Math.max(t.virtualSize, l) + w, n && d && ("slide" === r.effect || "coverflow" === r.effect) && (s.style.width = `${t.virtualSize+S}px`), r.setWrapperSize && (s.style[t.getDirectionLabel("width")] = `${t.virtualSize+S}px`), C && t.grid.updateWrapperSize(e, f), !r.centeredSlides) {
                                let F = [];
                                for (let V = 0; V < f.length; V += 1) {
                                    let j = f[V];
                                    r.roundLengths && (j = Math.floor(j)), f[V] <= t.virtualSize - l && F.push(j)
                                }
                                f = F, Math.floor(t.virtualSize - l) - Math.floor(f[f.length - 1]) > 1 && f.push(t.virtualSize - l)
                            }
                            if (p && r.loop) {
                                let R = v[0] + S;
                                if (r.slidesPerGroup > 1) {
                                    let H = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / r.slidesPerGroup),
                                        q = R * r.slidesPerGroup;
                                    for (let W = 0; W < H; W += 1) f.push(f[f.length - 1] + q)
                                }
                                for (let Y = 0; Y < t.virtual.slidesBefore + t.virtual.slidesAfter; Y += 1) 1 === r.slidesPerGroup && f.push(f[f.length - 1] + R), h.push(h[h.length - 1] + R), t.virtualSize += R
                            }
                            if (0 === f.length && (f = [0]), 0 !== S) {
                                let X = t.isHorizontal() && n ? "marginLeft" : t.getDirectionLabel("marginRight");
                                u.filter((e, t) => !r.cssMode || !!r.loop || t !== u.length - 1).forEach(e => {
                                    e.style[X] = `${S}px`
                                })
                            }
                            if (r.centeredSlides && r.centeredSlidesBounds) {
                                let U = 0;
                                v.forEach(e => {
                                    U += e + (S || 0)
                                }), U -= S;
                                let K = U - l;
                                f = f.map(e => e <= 0 ? -g : e > K ? K + w : e)
                            }
                            if (r.centerInsufficientSlides) {
                                let Q = 0;
                                v.forEach(e => {
                                    Q += e + (S || 0)
                                }), Q -= S;
                                let Z = (r.slidesOffsetBefore || 0) + (r.slidesOffsetAfter || 0);
                                if (Q + Z < l) {
                                    let J = (l - Q - Z) / 2;
                                    f.forEach((e, t) => {
                                        f[t] = e - J
                                    }), h.forEach((e, t) => {
                                        h[t] = e + J
                                    })
                                }
                            }
                            if (Object.assign(t, {
                                    slides: u,
                                    snapGrid: f,
                                    slidesGrid: h,
                                    slidesSizesGrid: v
                                }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
                                (0, o.s)(s, "--swiper-centered-offset-before", `${-f[0]}px`), (0, o.s)(s, "--swiper-centered-offset-after", `${t.size/2-v[v.length-1]/2}px`);
                                let ee = -t.snapGrid[0],
                                    et = -t.slidesGrid[0];
                                t.snapGrid = t.snapGrid.map(e => e + ee), t.slidesGrid = t.slidesGrid.map(e => e + et)
                            }
                            if (m !== c && t.emit("slidesLengthChange"), f.length !== b && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), h.length !== y && t.emit("slidesGridLengthChange"), r.watchSlidesProgress && t.updateSlidesOffset(), t.emit("slidesUpdated"), !p && !r.cssMode && ("slide" === r.effect || "fade" === r.effect)) {
                                let ei = `${r.containerModifierClass}backface-hidden`,
                                    er = t.el.classList.contains(ei);
                                m <= r.maxBackfaceHiddenSlides ? er || t.el.classList.add(ei) : er && t.el.classList.remove(ei)
                            }
                        },
                        updateAutoHeight: function(e) {
                            let t;
                            let i = this,
                                r = [],
                                s = i.virtual && i.params.virtual.enabled,
                                a = 0;
                            "number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed);
                            let l = e => s ? i.slides[i.getSlideIndexByData(e)] : i.slides[e];
                            if ("auto" !== i.params.slidesPerView && i.params.slidesPerView > 1) {
                                if (i.params.centeredSlides)(i.visibleSlides || []).forEach(e => {
                                    r.push(e)
                                });
                                else
                                    for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                                        let n = i.activeIndex + t;
                                        if (n > i.slides.length && !s) break;
                                        r.push(l(n))
                                    }
                            } else r.push(l(i.activeIndex));
                            for (t = 0; t < r.length; t += 1)
                                if (void 0 !== r[t]) {
                                    let o = r[t].offsetHeight;
                                    a = o > a ? o : a
                                }(a || 0 === a) && (i.wrapperEl.style.height = `${a}px`)
                        },
                        updateSlidesOffset: function() {
                            let e = this.slides,
                                t = this.isElement ? this.isHorizontal() ? this.wrapperEl.offsetLeft : this.wrapperEl.offsetTop : 0;
                            for (let i = 0; i < e.length; i += 1) e[i].swiperSlideOffset = (this.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t - this.cssOverflowAdjustment()
                        },
                        updateSlidesProgress: function(e) {
                            void 0 === e && (e = this && this.translate || 0);
                            let t = this,
                                i = t.params,
                                {
                                    slides: r,
                                    rtlTranslate: s,
                                    snapGrid: a
                                } = t;
                            if (0 === r.length) return;
                            void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
                            let l = -e;
                            s && (l = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                            let n = i.spaceBetween;
                            "string" == typeof n && n.indexOf("%") >= 0 ? n = parseFloat(n.replace("%", "")) / 100 * t.size : "string" == typeof n && (n = parseFloat(n));
                            for (let o = 0; o < r.length; o += 1) {
                                let d = r[o],
                                    p = d.swiperSlideOffset;
                                i.cssMode && i.centeredSlides && (p -= r[0].swiperSlideOffset);
                                let u = (l + (i.centeredSlides ? t.minTranslate() : 0) - p) / (d.swiperSlideSize + n),
                                    m = (l - a[0] + (i.centeredSlides ? t.minTranslate() : 0) - p) / (d.swiperSlideSize + n),
                                    f = -(l - p),
                                    h = f + t.slidesSizesGrid[o],
                                    v = f >= 0 && f <= t.size - t.slidesSizesGrid[o],
                                    g = f >= 0 && f < t.size - 1 || h > 1 && h <= t.size || f <= 0 && h >= t.size;
                                g && (t.visibleSlides.push(d), t.visibleSlidesIndexes.push(o)), c(d, g, i.slideVisibleClass), c(d, v, i.slideFullyVisibleClass), d.progress = s ? -u : u, d.originalProgress = s ? -m : m
                            }
                        },
                        updateProgress: function(e) {
                            if (void 0 === e) {
                                let t = this.rtlTranslate ? -1 : 1;
                                e = this && this.translate && this.translate * t || 0
                            }
                            let i = this.params,
                                r = this.maxTranslate() - this.minTranslate(),
                                {
                                    progress: s,
                                    isBeginning: a,
                                    isEnd: l,
                                    progressLoop: n
                                } = this,
                                o = a,
                                d = l;
                            if (0 === r) s = 0, a = !0, l = !0;
                            else {
                                s = (e - this.minTranslate()) / r;
                                let p = 1 > Math.abs(e - this.minTranslate()),
                                    c = 1 > Math.abs(e - this.maxTranslate());
                                a = p || s <= 0, l = c || s >= 1, p && (s = 0), c && (s = 1)
                            }
                            if (i.loop) {
                                let u = this.getSlideIndexByData(0),
                                    m = this.getSlideIndexByData(this.slides.length - 1),
                                    f = this.slidesGrid[u],
                                    h = this.slidesGrid[m],
                                    v = this.slidesGrid[this.slidesGrid.length - 1],
                                    g = Math.abs(e);
                                (n = g >= f ? (g - f) / v : (g + v - h) / v) > 1 && (n -= 1)
                            }
                            Object.assign(this, {
                                progress: s,
                                progressLoop: n,
                                isBeginning: a,
                                isEnd: l
                            }), (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e), a && !o && this.emit("reachBeginning toEdge"), l && !d && this.emit("reachEnd toEdge"), (o && !a || d && !l) && this.emit("fromEdge"), this.emit("progress", s)
                        },
                        updateSlidesClasses: function() {
                            let e, t, i;
                            let {
                                slides: r,
                                params: s,
                                slidesEl: a,
                                activeIndex: l
                            } = this, n = this.virtual && s.virtual.enabled, d = this.grid && s.grid && s.grid.rows > 1, p = e => (0, o.e)(a, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
                            if (n) {
                                if (s.loop) {
                                    let c = l - this.virtual.slidesBefore;
                                    c < 0 && (c = this.virtual.slides.length + c), c >= this.virtual.slides.length && (c -= this.virtual.slides.length), e = p(`[data-swiper-slide-index="${c}"]`)
                                } else e = p(`[data-swiper-slide-index="${l}"]`)
                            } else d ? (e = r.filter(e => e.column === l)[0], i = r.filter(e => e.column === l + 1)[0], t = r.filter(e => e.column === l - 1)[0]) : e = r[l];
                            e && !d && (i = (0, o.q)(e, `.${s.slideClass}, swiper-slide`)[0], s.loop && !i && (i = r[0]), t = (0, o.r)(e, `.${s.slideClass}, swiper-slide`)[0], s.loop), r.forEach(r => {
                                u(r, r === e, s.slideActiveClass), u(r, r === i, s.slideNextClass), u(r, r === t, s.slidePrevClass)
                            }), this.emitSlidesClasses()
                        },
                        updateActiveIndex: function(e) {
                            let t, i;
                            let r = this,
                                s = r.rtlTranslate ? r.translate : -r.translate,
                                {
                                    snapGrid: a,
                                    params: l,
                                    activeIndex: n,
                                    realIndex: o,
                                    snapIndex: d
                                } = r,
                                p = e,
                                c = e => {
                                    let t = e - r.virtual.slidesBefore;
                                    return t < 0 && (t = r.virtual.slides.length + t), t >= r.virtual.slides.length && (t -= r.virtual.slides.length), t
                                };
                            if (void 0 === p && (p = function(e) {
                                    let t;
                                    let {
                                        slidesGrid: i,
                                        params: r
                                    } = e, s = e.rtlTranslate ? e.translate : -e.translate;
                                    for (let a = 0; a < i.length; a += 1) void 0 !== i[a + 1] ? s >= i[a] && s < i[a + 1] - (i[a + 1] - i[a]) / 2 ? t = a : s >= i[a] && s < i[a + 1] && (t = a + 1) : s >= i[a] && (t = a);
                                    return r.normalizeSlideIndex && (t < 0 || void 0 === t) && (t = 0), t
                                }(r)), a.indexOf(s) >= 0) t = a.indexOf(s);
                            else {
                                let u = Math.min(l.slidesPerGroupSkip, p);
                                t = u + Math.floor((p - u) / l.slidesPerGroup)
                            }
                            if (t >= a.length && (t = a.length - 1), p === n && !r.params.loop) {
                                t !== d && (r.snapIndex = t, r.emit("snapIndexChange"));
                                return
                            }
                            if (p === n && r.params.loop && r.virtual && r.params.virtual.enabled) {
                                r.realIndex = c(p);
                                return
                            }
                            let m = r.grid && l.grid && l.grid.rows > 1;
                            if (r.virtual && l.virtual.enabled && l.loop) i = c(p);
                            else if (m) {
                                let f = r.slides.filter(e => e.column === p)[0],
                                    v = parseInt(f.getAttribute("data-swiper-slide-index"), 10);
                                Number.isNaN(v) && (v = Math.max(r.slides.indexOf(f), 0)), i = Math.floor(v / l.grid.rows)
                            } else if (r.slides[p]) {
                                let g = r.slides[p].getAttribute("data-swiper-slide-index");
                                i = g ? parseInt(g, 10) : p
                            } else i = p;
                            Object.assign(r, {
                                previousSnapIndex: d,
                                snapIndex: t,
                                previousRealIndex: o,
                                realIndex: i,
                                previousIndex: n,
                                activeIndex: p
                            }), r.initialized && h(r), r.emit("activeIndexChange"), r.emit("snapIndexChange"), (r.initialized || r.params.runCallbacksOnInit) && (o !== i && r.emit("realIndexChange"), r.emit("slideChange"))
                        },
                        updateClickedSlide: function(e, t) {
                            let i;
                            let r = this,
                                s = r.params,
                                a = e.closest(`.${s.slideClass}, swiper-slide`);
                            !a && r.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach(e => {
                                !a && e.matches && e.matches(`.${s.slideClass}, swiper-slide`) && (a = e)
                            });
                            let l = !1;
                            if (a) {
                                for (let n = 0; n < r.slides.length; n += 1)
                                    if (r.slides[n] === a) {
                                        l = !0, i = n;
                                        break
                                    }
                            }
                            if (a && l) r.clickedSlide = a, r.virtual && r.params.virtual.enabled ? r.clickedIndex = parseInt(a.getAttribute("data-swiper-slide-index"), 10) : r.clickedIndex = i;
                            else {
                                r.clickedSlide = void 0, r.clickedIndex = void 0;
                                return
                            }
                            s.slideToClickedSlide && void 0 !== r.clickedIndex && r.clickedIndex !== r.activeIndex && r.slideToClickedSlide()
                        }
                    },
                    translate: {
                        getTranslate: function(e) {
                            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                            let {
                                params: t,
                                rtlTranslate: i,
                                translate: r,
                                wrapperEl: s
                            } = this;
                            if (t.virtualTranslate) return i ? -r : r;
                            if (t.cssMode) return r;
                            let a = (0, o.j)(s, e);
                            return a += this.cssOverflowAdjustment(), i && (a = -a), a || 0
                        },
                        setTranslate: function(e, t) {
                            let i = this,
                                {
                                    rtlTranslate: r,
                                    params: s,
                                    wrapperEl: a,
                                    progress: l
                                } = i,
                                n = 0,
                                o = 0;
                            i.isHorizontal() ? n = r ? -e : e : o = e, s.roundLengths && (n = Math.floor(n), o = Math.floor(o)), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? n : o, s.cssMode ? a[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -n : -o : s.virtualTranslate || (i.isHorizontal() ? n -= i.cssOverflowAdjustment() : o -= i.cssOverflowAdjustment(), a.style.transform = `translate3d(${n}px, ${o}px, 0px)`);
                            let d = i.maxTranslate() - i.minTranslate();
                            (0 === d ? 0 : (e - i.minTranslate()) / d) !== l && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
                        },
                        minTranslate: function() {
                            return -this.snapGrid[0]
                        },
                        maxTranslate: function() {
                            return -this.snapGrid[this.snapGrid.length - 1]
                        },
                        translateTo: function(e, t, i, r, s) {
                            let a;
                            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === r && (r = !0);
                            let l = this,
                                {
                                    params: n,
                                    wrapperEl: d
                                } = l;
                            if (l.animating && n.preventInteractionOnTransition) return !1;
                            let p = l.minTranslate(),
                                c = l.maxTranslate();
                            if (a = r && e > p ? p : r && e < c ? c : e, l.updateProgress(a), n.cssMode) {
                                let u = l.isHorizontal();
                                if (0 === t) d[u ? "scrollLeft" : "scrollTop"] = -a;
                                else {
                                    if (!l.support.smoothScroll) return (0, o.t)({
                                        swiper: l,
                                        targetPosition: -a,
                                        side: u ? "left" : "top"
                                    }), !0;
                                    d.scrollTo({
                                        [u ? "left" : "top"]: -a,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return 0 === t ? (l.setTransition(0), l.setTranslate(a), i && (l.emit("beforeTransitionStart", t, s), l.emit("transitionEnd"))) : (l.setTransition(t), l.setTranslate(a), i && (l.emit("beforeTransitionStart", t, s), l.emit("transitionStart")), l.animating || (l.animating = !0, l.onTranslateToWrapperTransitionEnd || (l.onTranslateToWrapperTransitionEnd = function(e) {
                                l && !l.destroyed && e.target === this && (l.wrapperEl.removeEventListener("transitionend", l.onTranslateToWrapperTransitionEnd), l.onTranslateToWrapperTransitionEnd = null, delete l.onTranslateToWrapperTransitionEnd, l.animating = !1, i && l.emit("transitionEnd"))
                            }), l.wrapperEl.addEventListener("transitionend", l.onTranslateToWrapperTransitionEnd))), !0
                        }
                    },
                    transition: {
                        setTransition: function(e, t) {
                            let i = this;
                            i.params.cssMode || (i.wrapperEl.style.transitionDuration = `${e}ms`, i.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), i.emit("setTransition", e, t)
                        },
                        transitionStart: function(e, t) {
                            void 0 === e && (e = !0);
                            let {
                                params: i
                            } = this;
                            i.cssMode || (i.autoHeight && this.updateAutoHeight(), v({
                                swiper: this,
                                runCallbacks: e,
                                direction: t,
                                step: "Start"
                            }))
                        },
                        transitionEnd: function(e, t) {
                            void 0 === e && (e = !0);
                            let i = this,
                                {
                                    params: r
                                } = i;
                            i.animating = !1, r.cssMode || (i.setTransition(0), v({
                                swiper: i,
                                runCallbacks: e,
                                direction: t,
                                step: "End"
                            }))
                        }
                    },
                    slide: {
                        slideTo: function(e, t, i, r, s) {
                            let a;
                            void 0 === e && (e = 0), void 0 === i && (i = !0), "string" == typeof e && (e = parseInt(e, 10));
                            let l = this,
                                n = e;
                            n < 0 && (n = 0);
                            let {
                                params: d,
                                snapGrid: p,
                                slidesGrid: c,
                                previousIndex: u,
                                activeIndex: m,
                                rtlTranslate: f,
                                wrapperEl: h,
                                enabled: v
                            } = l;
                            if (!v && !r && !s || l.destroyed || l.animating && d.preventInteractionOnTransition) return !1;
                            void 0 === t && (t = l.params.speed);
                            let g = Math.min(l.params.slidesPerGroupSkip, n),
                                w = g + Math.floor((n - g) / l.params.slidesPerGroup);
                            w >= p.length && (w = p.length - 1);
                            let b = -p[w];
                            if (d.normalizeSlideIndex)
                                for (let y = 0; y < c.length; y += 1) {
                                    let S = -Math.floor(100 * b),
                                        T = Math.floor(100 * c[y]),
                                        E = Math.floor(100 * c[y + 1]);
                                    void 0 !== c[y + 1] ? S >= T && S < E - (E - T) / 2 ? n = y : S >= T && S < E && (n = y + 1) : S >= T && (n = y)
                                }
                            if (l.initialized && n !== m && (!l.allowSlideNext && (f ? b > l.translate && b > l.minTranslate() : b < l.translate && b < l.minTranslate()) || !l.allowSlidePrev && b > l.translate && b > l.maxTranslate() && (m || 0) !== n)) return !1;
                            if (n !== (u || 0) && i && l.emit("beforeSlideChangeStart"), l.updateProgress(b), a = n > m ? "next" : n < m ? "prev" : "reset", f && -b === l.translate || !f && b === l.translate) return l.updateActiveIndex(n), d.autoHeight && l.updateAutoHeight(), l.updateSlidesClasses(), "slide" !== d.effect && l.setTranslate(b), "reset" !== a && (l.transitionStart(i, a), l.transitionEnd(i, a)), !1;
                            if (d.cssMode) {
                                let x = l.isHorizontal(),
                                    C = f ? b : -b;
                                if (0 === t) {
                                    let M = l.virtual && l.params.virtual.enabled;
                                    M && (l.wrapperEl.style.scrollSnapType = "none", l._immediateVirtual = !0), M && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0 ? (l._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
                                        h[x ? "scrollLeft" : "scrollTop"] = C
                                    })) : h[x ? "scrollLeft" : "scrollTop"] = C, M && requestAnimationFrame(() => {
                                        l.wrapperEl.style.scrollSnapType = "", l._immediateVirtual = !1
                                    })
                                } else {
                                    if (!l.support.smoothScroll) return (0, o.t)({
                                        swiper: l,
                                        targetPosition: C,
                                        side: x ? "left" : "top"
                                    }), !0;
                                    h.scrollTo({
                                        [x ? "left" : "top"]: C,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return l.setTransition(t), l.setTranslate(b), l.updateActiveIndex(n), l.updateSlidesClasses(), l.emit("beforeTransitionStart", t, r), l.transitionStart(i, a), 0 === t ? l.transitionEnd(i, a) : l.animating || (l.animating = !0, l.onSlideToWrapperTransitionEnd || (l.onSlideToWrapperTransitionEnd = function(e) {
                                l && !l.destroyed && e.target === this && (l.wrapperEl.removeEventListener("transitionend", l.onSlideToWrapperTransitionEnd), l.onSlideToWrapperTransitionEnd = null, delete l.onSlideToWrapperTransitionEnd, l.transitionEnd(i, a))
                            }), l.wrapperEl.addEventListener("transitionend", l.onSlideToWrapperTransitionEnd)), !0
                        },
                        slideToLoop: function(e, t, i, r) {
                            if (void 0 === e && (e = 0), void 0 === i && (i = !0), "string" == typeof e) {
                                let s = parseInt(e, 10);
                                e = s
                            }
                            let a = this;
                            if (a.destroyed) return;
                            void 0 === t && (t = a.params.speed);
                            let l = a.grid && a.params.grid && a.params.grid.rows > 1,
                                n = e;
                            if (a.params.loop) {
                                if (a.virtual && a.params.virtual.enabled) n += a.virtual.slidesBefore;
                                else {
                                    let o;
                                    if (l) {
                                        let d = n * a.params.grid.rows;
                                        o = a.slides.filter(e => 1 * e.getAttribute("data-swiper-slide-index") === d)[0].column
                                    } else o = a.getSlideIndexByData(n);
                                    let p = l ? Math.ceil(a.slides.length / a.params.grid.rows) : a.slides.length,
                                        {
                                            centeredSlides: c
                                        } = a.params,
                                        u = a.params.slidesPerView;
                                    "auto" === u ? u = a.slidesPerViewDynamic() : (u = Math.ceil(parseFloat(a.params.slidesPerView, 10)), c && u % 2 == 0 && (u += 1));
                                    let m = p - o < u;
                                    if (c && (m = m || o < Math.ceil(u / 2)), r && c && "auto" !== a.params.slidesPerView && !l && (m = !1), m) {
                                        let f = c ? o < a.activeIndex ? "prev" : "next" : o - a.activeIndex - 1 < a.params.slidesPerView ? "next" : "prev";
                                        a.loopFix({
                                            direction: f,
                                            slideTo: !0,
                                            activeSlideIndex: "next" === f ? o + 1 : o - p + 1,
                                            slideRealIndex: "next" === f ? a.realIndex : void 0
                                        })
                                    }
                                    if (l) {
                                        let h = n * a.params.grid.rows;
                                        n = a.slides.filter(e => 1 * e.getAttribute("data-swiper-slide-index") === h)[0].column
                                    } else n = a.getSlideIndexByData(n)
                                }
                            }
                            return requestAnimationFrame(() => {
                                a.slideTo(n, t, i, r)
                            }), a
                        },
                        slideNext: function(e, t, i) {
                            void 0 === t && (t = !0);
                            let r = this,
                                {
                                    enabled: s,
                                    params: a,
                                    animating: l
                                } = r;
                            if (!s || r.destroyed) return r;
                            void 0 === e && (e = r.params.speed);
                            let n = a.slidesPerGroup;
                            "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (n = Math.max(r.slidesPerViewDynamic("current", !0), 1));
                            let o = r.activeIndex < a.slidesPerGroupSkip ? 1 : n,
                                d = r.virtual && a.virtual.enabled;
                            if (a.loop) {
                                if (l && !d && a.loopPreventsSliding) return !1;
                                if (r.loopFix({
                                        direction: "next"
                                    }), r._clientLeft = r.wrapperEl.clientLeft, r.activeIndex === r.slides.length - 1 && a.cssMode) return requestAnimationFrame(() => {
                                    r.slideTo(r.activeIndex + o, e, t, i)
                                }), !0
                            }
                            return a.rewind && r.isEnd ? r.slideTo(0, e, t, i) : r.slideTo(r.activeIndex + o, e, t, i)
                        },
                        slidePrev: function(e, t, i) {
                            void 0 === t && (t = !0);
                            let r = this,
                                {
                                    params: s,
                                    snapGrid: a,
                                    slidesGrid: l,
                                    rtlTranslate: n,
                                    enabled: o,
                                    animating: d
                                } = r;
                            if (!o || r.destroyed) return r;
                            void 0 === e && (e = r.params.speed);
                            let p = r.virtual && s.virtual.enabled;
                            if (s.loop) {
                                if (d && !p && s.loopPreventsSliding) return !1;
                                r.loopFix({
                                    direction: "prev"
                                }), r._clientLeft = r.wrapperEl.clientLeft
                            }
                            let c = n ? r.translate : -r.translate;

                            function u(e) {
                                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                            }
                            let m = u(c),
                                f = a.map(e => u(e)),
                                h = a[f.indexOf(m) - 1];
                            if (void 0 === h && s.cssMode) {
                                let v;
                                a.forEach((e, t) => {
                                    m >= e && (v = t)
                                }), void 0 !== v && (h = a[v > 0 ? v - 1 : v])
                            }
                            let g = 0;
                            if (void 0 !== h && ((g = l.indexOf(h)) < 0 && (g = r.activeIndex - 1), "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (g = Math.max(g = g - r.slidesPerViewDynamic("previous", !0) + 1, 0))), s.rewind && r.isBeginning) {
                                let w = r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1;
                                return r.slideTo(w, e, t, i)
                            }
                            return s.loop && 0 === r.activeIndex && s.cssMode ? (requestAnimationFrame(() => {
                                r.slideTo(g, e, t, i)
                            }), !0) : r.slideTo(g, e, t, i)
                        },
                        slideReset: function(e, t, i) {
                            if (void 0 === t && (t = !0), !this.destroyed) return void 0 === e && (e = this.params.speed), this.slideTo(this.activeIndex, e, t, i)
                        },
                        slideToClosest: function(e, t, i, r) {
                            if (void 0 === t && (t = !0), void 0 === r && (r = .5), this.destroyed) return;
                            void 0 === e && (e = this.params.speed);
                            let s = this.activeIndex,
                                a = Math.min(this.params.slidesPerGroupSkip, s),
                                l = a + Math.floor((s - a) / this.params.slidesPerGroup),
                                n = this.rtlTranslate ? this.translate : -this.translate;
                            if (n >= this.snapGrid[l]) {
                                let o = this.snapGrid[l],
                                    d = this.snapGrid[l + 1];
                                n - o > (d - o) * r && (s += this.params.slidesPerGroup)
                            } else {
                                let p = this.snapGrid[l - 1],
                                    c = this.snapGrid[l];
                                n - p <= (c - p) * r && (s -= this.params.slidesPerGroup)
                            }
                            return s = Math.min(s = Math.max(s, 0), this.slidesGrid.length - 1), this.slideTo(s, e, t, i)
                        },
                        slideToClickedSlide: function() {
                            let e;
                            let t = this;
                            if (t.destroyed) return;
                            let {
                                params: i,
                                slidesEl: r
                            } = t, s = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView, a = t.clickedIndex, l = t.isElement ? "swiper-slide" : `.${i.slideClass}`;
                            if (i.loop) {
                                if (t.animating) return;
                                e = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10), i.centeredSlides ? a < t.loopedSlides - s / 2 || a > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), a = t.getSlideIndex((0, o.e)(r, `${l}[data-swiper-slide-index="${e}"]`)[0]), (0, o.n)(() => {
                                    t.slideTo(a)
                                })) : t.slideTo(a) : a > t.slides.length - s ? (t.loopFix(), a = t.getSlideIndex((0, o.e)(r, `${l}[data-swiper-slide-index="${e}"]`)[0]), (0, o.n)(() => {
                                    t.slideTo(a)
                                })) : t.slideTo(a)
                            } else t.slideTo(a)
                        }
                    },
                    loop: {
                        loopCreate: function(e) {
                            let t = this,
                                {
                                    params: i,
                                    slidesEl: r
                                } = t;
                            if (!i.loop || t.virtual && t.params.virtual.enabled) return;
                            let s = () => {
                                    let e = (0, o.e)(r, `.${i.slideClass}, swiper-slide`);
                                    e.forEach((e, t) => {
                                        e.setAttribute("data-swiper-slide-index", t)
                                    })
                                },
                                a = t.grid && i.grid && i.grid.rows > 1,
                                l = i.slidesPerGroup * (a ? i.grid.rows : 1),
                                n = t.slides.length % l != 0,
                                d = a && t.slides.length % i.grid.rows != 0,
                                p = e => {
                                    for (let r = 0; r < e; r += 1) {
                                        let s = t.isElement ? (0, o.c)("swiper-slide", [i.slideBlankClass]) : (0, o.c)("div", [i.slideClass, i.slideBlankClass]);
                                        t.slidesEl.append(s)
                                    }
                                };
                            if (n) {
                                if (i.loopAddBlankSlides) {
                                    let c = l - t.slides.length % l;
                                    p(c), t.recalcSlides(), t.updateSlides()
                                } else(0, o.u)("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                                s()
                            } else if (d) {
                                if (i.loopAddBlankSlides) {
                                    let u = i.grid.rows - t.slides.length % i.grid.rows;
                                    p(u), t.recalcSlides(), t.updateSlides()
                                } else(0, o.u)("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                                s()
                            } else s();
                            t.loopFix({
                                slideRealIndex: e,
                                direction: i.centeredSlides ? void 0 : "next"
                            })
                        },
                        loopFix: function(e) {
                            let {
                                slideRealIndex: t,
                                slideTo: i = !0,
                                direction: r,
                                setTranslate: s,
                                activeSlideIndex: a,
                                byController: l,
                                byMousewheel: n
                            } = void 0 === e ? {} : e, d = this;
                            if (!d.params.loop) return;
                            d.emit("beforeLoopFix");
                            let {
                                slides: p,
                                allowSlidePrev: c,
                                allowSlideNext: u,
                                slidesEl: m,
                                params: f
                            } = d, {
                                centeredSlides: h
                            } = f;
                            if (d.allowSlidePrev = !0, d.allowSlideNext = !0, d.virtual && f.virtual.enabled) {
                                i && (f.centeredSlides || 0 !== d.snapIndex ? f.centeredSlides && d.snapIndex < f.slidesPerView ? d.slideTo(d.virtual.slides.length + d.snapIndex, 0, !1, !0) : d.snapIndex === d.snapGrid.length - 1 && d.slideTo(d.virtual.slidesBefore, 0, !1, !0) : d.slideTo(d.virtual.slides.length, 0, !1, !0)), d.allowSlidePrev = c, d.allowSlideNext = u, d.emit("loopFix");
                                return
                            }
                            let v = f.slidesPerView;
                            "auto" === v ? v = d.slidesPerViewDynamic() : (v = Math.ceil(parseFloat(f.slidesPerView, 10)), h && v % 2 == 0 && (v += 1));
                            let g = f.slidesPerGroupAuto ? v : f.slidesPerGroup,
                                w = g;
                            w % g != 0 && (w += g - w % g), w += f.loopAdditionalSlides, d.loopedSlides = w;
                            let b = d.grid && f.grid && f.grid.rows > 1;
                            p.length < v + w ? (0, o.u)("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && "row" === f.grid.fill && (0, o.u)("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
                            let y = [],
                                S = [],
                                T = d.activeIndex;
                            void 0 === a ? a = d.getSlideIndex(p.filter(e => e.classList.contains(f.slideActiveClass))[0]) : T = a;
                            let E = "next" === r || !r,
                                x = "prev" === r || !r,
                                C = 0,
                                M = 0,
                                P = b ? Math.ceil(p.length / f.grid.rows) : p.length,
                                L = b ? p[a].column : a,
                                k = L + (h && void 0 === s ? -v / 2 + .5 : 0);
                            if (k < w) {
                                C = Math.max(w - k, g);
                                for (let O = 0; O < w - k; O += 1) {
                                    let I = O - Math.floor(O / P) * P;
                                    if (b) {
                                        let A = P - I - 1;
                                        for (let _ = p.length - 1; _ >= 0; _ -= 1) p[_].column === A && y.push(_)
                                    } else y.push(P - I - 1)
                                }
                            } else if (k + v > P - w) {
                                M = Math.max(k - (P - 2 * w), g);
                                for (let z = 0; z < M; z += 1) {
                                    let D = z - Math.floor(z / P) * P;
                                    b ? p.forEach((e, t) => {
                                        e.column === D && S.push(t)
                                    }) : S.push(D)
                                }
                            }
                            if (d.__preventObserver__ = !0, requestAnimationFrame(() => {
                                    d.__preventObserver__ = !1
                                }), x && y.forEach(e => {
                                    p[e].swiperLoopMoveDOM = !0, m.prepend(p[e]), p[e].swiperLoopMoveDOM = !1
                                }), E && S.forEach(e => {
                                    p[e].swiperLoopMoveDOM = !0, m.append(p[e]), p[e].swiperLoopMoveDOM = !1
                                }), d.recalcSlides(), "auto" === f.slidesPerView ? d.updateSlides() : b && (y.length > 0 && x || S.length > 0 && E) && d.slides.forEach((e, t) => {
                                    d.grid.updateSlide(t, e, d.slides)
                                }), f.watchSlidesProgress && d.updateSlidesOffset(), i) {
                                if (y.length > 0 && x) {
                                    if (void 0 === t) {
                                        let $ = d.slidesGrid[T],
                                            N = d.slidesGrid[T + C],
                                            G = N - $;
                                        n ? d.setTranslate(d.translate - G) : (d.slideTo(T + Math.ceil(C), 0, !1, !0), s && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - G, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - G))
                                    } else if (s) {
                                        let B = b ? y.length / f.grid.rows : y.length;
                                        d.slideTo(d.activeIndex + B, 0, !1, !0), d.touchEventsData.currentTranslate = d.translate
                                    }
                                } else if (S.length > 0 && E) {
                                    if (void 0 === t) {
                                        let F = d.slidesGrid[T],
                                            V = d.slidesGrid[T - M],
                                            j = V - F;
                                        n ? d.setTranslate(d.translate - j) : (d.slideTo(T - M, 0, !1, !0), s && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - j, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - j))
                                    } else {
                                        let R = b ? S.length / f.grid.rows : S.length;
                                        d.slideTo(d.activeIndex - R, 0, !1, !0)
                                    }
                                }
                            }
                            if (d.allowSlidePrev = c, d.allowSlideNext = u, d.controller && d.controller.control && !l) {
                                let H = {
                                    slideRealIndex: t,
                                    direction: r,
                                    setTranslate: s,
                                    activeSlideIndex: a,
                                    byController: !0
                                };
                                Array.isArray(d.controller.control) ? d.controller.control.forEach(e => {
                                    !e.destroyed && e.params.loop && e.loopFix({ ...H,
                                        slideTo: e.params.slidesPerView === f.slidesPerView && i
                                    })
                                }) : d.controller.control instanceof d.constructor && d.controller.control.params.loop && d.controller.control.loopFix({ ...H,
                                    slideTo: d.controller.control.params.slidesPerView === f.slidesPerView && i
                                })
                            }
                            d.emit("loopFix")
                        },
                        loopDestroy: function() {
                            let {
                                params: e,
                                slidesEl: t
                            } = this;
                            if (!e.loop || this.virtual && this.params.virtual.enabled) return;
                            this.recalcSlides();
                            let i = [];
                            this.slides.forEach(e => {
                                let t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                                i[t] = e
                            }), this.slides.forEach(e => {
                                e.removeAttribute("data-swiper-slide-index")
                            }), i.forEach(e => {
                                t.append(e)
                            }), this.recalcSlides(), this.slideTo(this.realIndex, 0)
                        }
                    },
                    grabCursor: {
                        setGrabCursor: function(e) {
                            let t = this;
                            if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                            let i = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                            t.isElement && (t.__preventObserver__ = !0), i.style.cursor = "move", i.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
                                t.__preventObserver__ = !1
                            })
                        },
                        unsetGrabCursor: function() {
                            let e = this;
                            e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
                                e.__preventObserver__ = !1
                            }))
                        }
                    },
                    events: {
                        attachEvents: function() {
                            let e = this,
                                {
                                    params: t
                                } = e;
                            e.onTouchStart = w.bind(e), e.onTouchMove = b.bind(e), e.onTouchEnd = y.bind(e), e.onDocumentTouchStart = C.bind(e), t.cssMode && (e.onScroll = E.bind(e)), e.onClick = T.bind(e), e.onLoad = x.bind(e), M(e, "on")
                        },
                        detachEvents: function() {
                            M(this, "off")
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            let e = this,
                                {
                                    realIndex: t,
                                    initialized: i,
                                    params: r,
                                    el: s
                                } = e,
                                a = r.breakpoints;
                            if (!a || a && 0 === Object.keys(a).length) return;
                            let l = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
                            if (!l || e.currentBreakpoint === l) return;
                            let n = l in a ? a[l] : void 0,
                                d = n || e.originalParams,
                                p = P(e, r),
                                c = P(e, d),
                                u = e.params.grabCursor,
                                m = d.grabCursor,
                                f = r.enabled;
                            p && !c ? (s.classList.remove(`${r.containerModifierClass}grid`, `${r.containerModifierClass}grid-column`), e.emitContainerClasses()) : !p && c && (s.classList.add(`${r.containerModifierClass}grid`), (d.grid.fill && "column" === d.grid.fill || !d.grid.fill && "column" === r.grid.fill) && s.classList.add(`${r.containerModifierClass}grid-column`), e.emitContainerClasses()), u && !m ? e.unsetGrabCursor() : !u && m && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach(t => {
                                if (void 0 === d[t]) return;
                                let i = r[t] && r[t].enabled,
                                    s = d[t] && d[t].enabled;
                                i && !s && e[t].disable(), !i && s && e[t].enable()
                            });
                            let h = d.direction && d.direction !== r.direction,
                                v = r.loop && (d.slidesPerView !== r.slidesPerView || h),
                                g = r.loop;
                            h && i && e.changeDirection(), (0, o.w)(e.params, d);
                            let w = e.params.enabled,
                                b = e.params.loop;
                            Object.assign(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), f && !w ? e.disable() : !f && w && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", d), i && (v ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !g && b ? (e.loopCreate(t), e.updateSlides()) : g && !b && e.loopDestroy()), e.emit("breakpoint", d)
                        },
                        getBreakpoint: function(e, t, i) {
                            if (void 0 === t && (t = "window"), !e || "container" === t && !i) return;
                            let r = !1,
                                s = (0, n.a)(),
                                a = "window" === t ? s.innerHeight : i.clientHeight,
                                l = Object.keys(e).map(e => {
                                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                                        let t = parseFloat(e.substr(1));
                                        return {
                                            value: a * t,
                                            point: e
                                        }
                                    }
                                    return {
                                        value: e,
                                        point: e
                                    }
                                });
                            l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                            for (let o = 0; o < l.length; o += 1) {
                                let {
                                    point: d,
                                    value: p
                                } = l[o];
                                "window" === t ? s.matchMedia(`(min-width: ${p}px)`).matches && (r = d) : p <= i.clientWidth && (r = d)
                            }
                            return r || "max"
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            let e = this,
                                {
                                    isLocked: t,
                                    params: i
                                } = e,
                                {
                                    slidesOffsetBefore: r
                                } = i;
                            if (r) {
                                let s = e.slides.length - 1,
                                    a = e.slidesGrid[s] + e.slidesSizesGrid[s] + 2 * r;
                                e.isLocked = e.size > a
                            } else e.isLocked = 1 === e.snapGrid.length;
                            !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: {
                        addClasses: function() {
                            let {
                                classNames: e,
                                params: t,
                                rtl: i,
                                el: r,
                                device: s
                            } = this, a = function(e, t) {
                                let i = [];
                                return e.forEach(e => {
                                    "object" == typeof e ? Object.keys(e).forEach(r => {
                                        e[r] && i.push(t + r)
                                    }) : "string" == typeof e && i.push(t + e)
                                }), i
                            }(["initialized", t.direction, {
                                "free-mode": this.params.freeMode && t.freeMode.enabled
                            }, {
                                autoheight: t.autoHeight
                            }, {
                                rtl: i
                            }, {
                                grid: t.grid && t.grid.rows > 1
                            }, {
                                "grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill
                            }, {
                                android: s.android
                            }, {
                                ios: s.ios
                            }, {
                                "css-mode": t.cssMode
                            }, {
                                centered: t.cssMode && t.centeredSlides
                            }, {
                                "watch-progress": t.watchSlidesProgress
                            }], t.containerModifierClass);
                            e.push(...a), r.classList.add(...e), this.emitContainerClasses()
                        },
                        removeClasses: function() {
                            let {
                                el: e,
                                classNames: t
                            } = this;
                            e && "string" != typeof e && (e.classList.remove(...t), this.emitContainerClasses())
                        }
                    }
                },
                O = {};
            class I {
                constructor() {
                    let e, t;
                    for (var i = arguments.length, r = Array(i), s = 0; s < i; s++) r[s] = arguments[s];
                    1 === r.length && r[0].constructor && "Object" === Object.prototype.toString.call(r[0]).slice(8, -1) ? t = r[0] : [e, t] = r, t || (t = {}), t = (0, o.w)({}, t), e && !t.el && (t.el = e);
                    let l = (0, n.g)();
                    if (t.el && "string" == typeof t.el && l.querySelectorAll(t.el).length > 1) {
                        let c = [];
                        return l.querySelectorAll(t.el).forEach(e => {
                            let i = (0, o.w)({}, t, {
                                el: e
                            });
                            c.push(new I(i))
                        }), c
                    }
                    let u = this;
                    u.__swiper__ = !0, u.support = d(), u.device = p({
                        userAgent: t.userAgent
                    }), u.browser = (a || (a = function() {
                        let e = (0, n.a)(),
                            t = p(),
                            i = !1;

                        function r() {
                            let t = e.navigator.userAgent.toLowerCase();
                            return t.indexOf("safari") >= 0 && 0 > t.indexOf("chrome") && 0 > t.indexOf("android")
                        }
                        if (r()) {
                            let s = String(e.navigator.userAgent);
                            if (s.includes("Version/")) {
                                let [a, l] = s.split("Version/")[1].split(" ")[0].split(".").map(e => Number(e));
                                i = a < 16 || 16 === a && l < 2
                            }
                        }
                        let o = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
                            d = r(),
                            c = d || o && t.ios;
                        return {
                            isSafari: i || d,
                            needPerspectiveFix: i,
                            need3dFix: c,
                            isWebView: o
                        }
                    }()), a), u.eventsListeners = {}, u.eventsAnyListeners = [], u.modules = [...u.__modules__], t.modules && Array.isArray(t.modules) && u.modules.push(...t.modules);
                    let m = {};
                    u.modules.forEach(e => {
                        var i;
                        e({
                            params: t,
                            swiper: u,
                            extendParams: (i = t, function(e) {
                                void 0 === e && (e = {});
                                let t = Object.keys(e)[0],
                                    r = e[t];
                                if ("object" != typeof r || null === r || (!0 === i[t] && (i[t] = {
                                        enabled: !0
                                    }), "navigation" === t && i[t] && i[t].enabled && !i[t].prevEl && !i[t].nextEl && (i[t].auto = !0), ["pagination", "scrollbar"].indexOf(t) >= 0 && i[t] && i[t].enabled && !i[t].el && (i[t].auto = !0), !(t in i && "enabled" in r))) {
                                    (0, o.w)(m, e);
                                    return
                                }
                                "object" != typeof i[t] || "enabled" in i[t] || (i[t].enabled = !0), i[t] || (i[t] = {
                                    enabled: !1
                                }), (0, o.w)(m, e)
                            }),
                            on: u.on.bind(u),
                            once: u.once.bind(u),
                            off: u.off.bind(u),
                            emit: u.emit.bind(u)
                        })
                    });
                    let f = (0, o.w)({}, L, m);
                    return u.params = (0, o.w)({}, f, O, t), u.originalParams = (0, o.w)({}, u.params), u.passedParams = (0, o.w)({}, t), u.params && u.params.on && Object.keys(u.params.on).forEach(e => {
                        u.on(e, u.params.on[e])
                    }), u.params && u.params.onAny && u.onAny(u.params.onAny), Object.assign(u, {
                        enabled: u.params.enabled,
                        el: e,
                        classNames: [],
                        slides: [],
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === u.params.direction,
                        isVertical: () => "vertical" === u.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        cssOverflowAdjustment() {
                            return 8388608 * Math.trunc(this.translate / 8388608)
                        },
                        allowSlideNext: u.params.allowSlideNext,
                        allowSlidePrev: u.params.allowSlidePrev,
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: u.params.focusableElements,
                            lastClickTime: 0,
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            startMoving: void 0,
                            pointerId: null,
                            touchId: null
                        },
                        allowClick: !0,
                        allowTouchMove: u.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), u.emit("_swiper"), u.params.init && u.init(), u
                }
                getDirectionLabel(e) {
                    return this.isHorizontal() ? e : ({
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    })[e]
                }
                getSlideIndex(e) {
                    let {
                        slidesEl: t,
                        params: i
                    } = this, r = (0, o.e)(t, `.${i.slideClass}, swiper-slide`), s = (0, o.h)(r[0]);
                    return (0, o.h)(e) - s
                }
                getSlideIndexByData(e) {
                    return this.getSlideIndex(this.slides.filter(t => 1 * t.getAttribute("data-swiper-slide-index") === e)[0])
                }
                recalcSlides() {
                    let e = this,
                        {
                            slidesEl: t,
                            params: i
                        } = e;
                    e.slides = (0, o.e)(t, `.${i.slideClass}, swiper-slide`)
                }
                enable() {
                    let e = this;
                    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
                }
                disable() {
                    let e = this;
                    e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
                }
                setProgress(e, t) {
                    e = Math.min(Math.max(e, 0), 1);
                    let i = this.minTranslate(),
                        r = this.maxTranslate(),
                        s = (r - i) * e + i;
                    this.translateTo(s, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses()
                }
                emitContainerClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
                    e.emit("_containerClasses", t.join(" "))
                }
                getSlideClasses(e) {
                    let t = this;
                    return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
                }
                emitSlidesClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = [];
                    e.slides.forEach(i => {
                        let r = e.getSlideClasses(i);
                        t.push({
                            slideEl: i,
                            classNames: r
                        }), e.emit("_slideClass", i, r)
                    }), e.emit("_slideClasses", t)
                }
                slidesPerViewDynamic(e, t) {
                    void 0 === e && (e = "current"), void 0 === t && (t = !1);
                    let {
                        params: i,
                        slides: r,
                        slidesGrid: s,
                        slidesSizesGrid: a,
                        size: l,
                        activeIndex: n
                    } = this, o = 1;
                    if ("number" == typeof i.slidesPerView) return i.slidesPerView;
                    if (i.centeredSlides) {
                        let d, p = r[n] ? Math.ceil(r[n].swiperSlideSize) : 0;
                        for (let c = n + 1; c < r.length; c += 1) r[c] && !d && (p += Math.ceil(r[c].swiperSlideSize), o += 1, p > l && (d = !0));
                        for (let u = n - 1; u >= 0; u -= 1) r[u] && !d && (p += r[u].swiperSlideSize, o += 1, p > l && (d = !0))
                    } else if ("current" === e)
                        for (let m = n + 1; m < r.length; m += 1) {
                            let f = t ? s[m] + a[m] - s[n] < l : s[m] - s[n] < l;
                            f && (o += 1)
                        } else
                            for (let h = n - 1; h >= 0; h -= 1) {
                                let v = s[n] - s[h] < l;
                                v && (o += 1)
                            }
                    return o
                }
                update() {
                    let e;
                    let t = this;
                    if (!t || t.destroyed) return;
                    let {
                        snapGrid: i,
                        params: r
                    } = t;

                    function s() {
                        let e = t.rtlTranslate ? -1 * t.translate : t.translate,
                            i = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                        t.setTranslate(i), t.updateActiveIndex(), t.updateSlidesClasses()
                    }
                    if (r.breakpoints && t.setBreakpoint(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach(e => {
                            e.complete && m(t, e)
                        }), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), r.freeMode && r.freeMode.enabled && !r.cssMode) s(), r.autoHeight && t.updateAutoHeight();
                    else {
                        if (("auto" === r.slidesPerView || r.slidesPerView > 1) && t.isEnd && !r.centeredSlides) {
                            let a = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
                            e = t.slideTo(a.length - 1, 0, !1, !0)
                        } else e = t.slideTo(t.activeIndex, 0, !1, !0);
                        e || s()
                    }
                    r.watchOverflow && i !== t.snapGrid && t.checkOverflow(), t.emit("update")
                }
                changeDirection(e, t) {
                    void 0 === t && (t = !0);
                    let i = this,
                        r = i.params.direction;
                    return e || (e = "horizontal" === r ? "vertical" : "horizontal"), e === r || "horizontal" !== e && "vertical" !== e || (i.el.classList.remove(`${i.params.containerModifierClass}${r}`), i.el.classList.add(`${i.params.containerModifierClass}${e}`), i.emitContainerClasses(), i.params.direction = e, i.slides.forEach(t => {
                        "vertical" === e ? t.style.width = "" : t.style.height = ""
                    }), i.emit("changeDirection"), t && i.update()), i
                }
                changeLanguageDirection(e) {
                    let t = this;
                    (!t.rtl || "rtl" !== e) && (t.rtl || "ltr" !== e) && (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
                }
                mount(e) {
                    let t = this;
                    if (t.mounted) return !0;
                    let i = e || t.params.el;
                    if ("string" == typeof i && (i = document.querySelector(i)), !i) return !1;
                    i.swiper = t, i.parentNode && i.parentNode.host && i.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
                    let r = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`,
                        s = (() => {
                            if (i && i.shadowRoot && i.shadowRoot.querySelector) {
                                let e = i.shadowRoot.querySelector(r());
                                return e
                            }
                            return (0, o.e)(i, r())[0]
                        })();
                    return !s && t.params.createElements && (s = (0, o.c)("div", t.params.wrapperClass), i.append(s), (0, o.e)(i, `.${t.params.slideClass}`).forEach(e => {
                        s.append(e)
                    })), Object.assign(t, {
                        el: i,
                        wrapperEl: s,
                        slidesEl: t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : s,
                        hostEl: t.isElement ? i.parentNode.host : i,
                        mounted: !0,
                        rtl: "rtl" === i.dir.toLowerCase() || "rtl" === (0, o.p)(i, "direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === i.dir.toLowerCase() || "rtl" === (0, o.p)(i, "direction")),
                        wrongRTL: "-webkit-box" === (0, o.p)(s, "display")
                    }), !0
                }
                init(e) {
                    let t = this;
                    if (t.initialized) return t;
                    let i = t.mount(e);
                    if (!1 === i) return t;
                    t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
                    let r = [...t.el.querySelectorAll('[loading="lazy"]')];
                    return t.isElement && r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), r.forEach(e => {
                        e.complete ? m(t, e) : e.addEventListener("load", e => {
                            m(t, e.target)
                        })
                    }), h(t), t.initialized = !0, h(t), t.emit("init"), t.emit("afterInit"), t
                }
                destroy(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    let i = this,
                        {
                            params: r,
                            el: s,
                            wrapperEl: a,
                            slides: l
                        } = i;
                    return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), r.loop && i.loopDestroy(), t && (i.removeClasses(), s && "string" != typeof s && s.removeAttribute("style"), a && a.removeAttribute("style"), l && l.length && l.forEach(e => {
                        e.classList.remove(r.slideVisibleClass, r.slideFullyVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
                    })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(e => {
                        i.off(e)
                    }), !1 !== e && (i.el && "string" != typeof i.el && (i.el.swiper = null), (0, o.x)(i)), i.destroyed = !0), null
                }
                static extendDefaults(e) {
                    (0, o.w)(O, e)
                }
                static get extendedDefaults() {
                    return O
                }
                static get defaults() {
                    return L
                }
                static installModule(e) {
                    I.prototype.__modules__ || (I.prototype.__modules__ = []);
                    let t = I.prototype.__modules__;
                    "function" == typeof e && 0 > t.indexOf(e) && t.push(e)
                }
                static use(e) {
                    return Array.isArray(e) ? (e.forEach(e => I.installModule(e)), I) : (I.installModule(e), I)
                }
            }
            Object.keys(k).forEach(e => {
                Object.keys(k[e]).forEach(t => {
                    I.prototype[t] = k[e][t]
                })
            }), I.use([function(e) {
                let {
                    swiper: t,
                    on: i,
                    emit: r
                } = e, s = (0, n.a)(), a = null, l = null, o = () => {
                    t && !t.destroyed && t.initialized && (r("beforeResize"), r("resize"))
                }, d = () => {
                    t && !t.destroyed && t.initialized && (a = new ResizeObserver(e => {
                        l = s.requestAnimationFrame(() => {
                            let {
                                width: i,
                                height: r
                            } = t, s = i, a = r;
                            e.forEach(e => {
                                let {
                                    contentBoxSize: i,
                                    contentRect: r,
                                    target: l
                                } = e;
                                l && l !== t.el || (s = r ? r.width : (i[0] || i).inlineSize, a = r ? r.height : (i[0] || i).blockSize)
                            }), (s !== i || a !== r) && o()
                        })
                    })).observe(t.el)
                }, p = () => {
                    l && s.cancelAnimationFrame(l), a && a.unobserve && t.el && (a.unobserve(t.el), a = null)
                }, c = () => {
                    t && !t.destroyed && t.initialized && r("orientationchange")
                };
                i("init", () => {
                    if (t.params.resizeObserver && void 0 !== s.ResizeObserver) {
                        d();
                        return
                    }
                    s.addEventListener("resize", o), s.addEventListener("orientationchange", c)
                }), i("destroy", () => {
                    p(), s.removeEventListener("resize", o), s.removeEventListener("orientationchange", c)
                })
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: i,
                    on: r,
                    emit: s
                } = e, a = [], l = (0, n.a)(), d = function(e, i) {
                    void 0 === i && (i = {});
                    let r = l.MutationObserver || l.WebkitMutationObserver,
                        n = new r(e => {
                            if (t.__preventObserver__) return;
                            if (1 === e.length) {
                                s("observerUpdate", e[0]);
                                return
                            }
                            let i = function() {
                                s("observerUpdate", e[0])
                            };
                            l.requestAnimationFrame ? l.requestAnimationFrame(i) : l.setTimeout(i, 0)
                        });
                    n.observe(e, {
                        attributes: void 0 === i.attributes || i.attributes,
                        childList: t.isElement || (void 0 === i.childList || i).childList,
                        characterData: void 0 === i.characterData || i.characterData
                    }), a.push(n)
                }, p = () => {
                    if (t.params.observer) {
                        if (t.params.observeParents) {
                            let e = (0, o.a)(t.hostEl);
                            for (let i = 0; i < e.length; i += 1) d(e[i])
                        }
                        d(t.hostEl, {
                            childList: t.params.observeSlideChildren
                        }), d(t.wrapperEl, {
                            attributes: !1
                        })
                    }
                }, c = () => {
                    a.forEach(e => {
                        e.disconnect()
                    }), a.splice(0, a.length)
                };
                i({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), r("init", p), r("destroy", c)
            }]);
            let A = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

            function _(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
            }

            function z(e, t) {
                let i = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter(e => 0 > i.indexOf(e)).forEach(i => {
                    void 0 === e[i] ? e[i] = t[i] : _(t[i]) && _(e[i]) && Object.keys(t[i]).length > 0 ? t[i].__swiper__ ? e[i] = t[i] : z(e[i], t[i]) : e[i] = t[i]
                })
            }

            function D(e) {
                return void 0 === e && (e = {}), e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
            }

            function $(e) {
                return void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
            }

            function N(e) {
                return void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
            }

            function G(e) {
                void 0 === e && (e = "");
                let t = e.split(" ").map(e => e.trim()).filter(e => !!e),
                    i = [];
                return t.forEach(e => {
                    0 > i.indexOf(e) && i.push(e)
                }), i.join(" ")
            }
            let B = e => {
                e && !e.destroyed && e.params.virtual && (!e.params.virtual || e.params.virtual.enabled) && (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
            };

            function F() {
                return (F = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function V(e) {
                return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
            }

            function j(e, t) {
                return "undefined" == typeof window ? (0, l.useEffect)(e, t) : (0, l.useLayoutEffect)(e, t)
            }
            let R = (0, l.createContext)(null),
                H = (0, l.createContext)(null),
                q = (0, l.forwardRef)(function(e, t) {
                    var i;
                    let {
                        className: r,
                        tag: s = "div",
                        wrapperTag: a = "div",
                        children: n,
                        onSwiper: o,
                        ...d
                    } = void 0 === e ? {} : e, p = !1, [c, u] = (0, l.useState)("swiper"), [m, f] = (0, l.useState)(null), [h, v] = (0, l.useState)(!1), g = (0, l.useRef)(!1), w = (0, l.useRef)(null), b = (0, l.useRef)(null), y = (0, l.useRef)(null), S = (0, l.useRef)(null), T = (0, l.useRef)(null), E = (0, l.useRef)(null), x = (0, l.useRef)(null), C = (0, l.useRef)(null), {
                        params: M,
                        passedParams: P,
                        rest: k,
                        events: O
                    } = function(e, t) {
                        void 0 === e && (e = {}), void 0 === t && (t = !0);
                        let i = {
                                on: {}
                            },
                            r = {},
                            s = {};
                        z(i, L), i._emitClasses = !0, i.init = !1;
                        let a = {},
                            l = A.map(e => e.replace(/_/, "")),
                            n = Object.assign({}, e);
                        return Object.keys(n).forEach(n => {
                            void 0 !== e[n] && (l.indexOf(n) >= 0 ? _(e[n]) ? (i[n] = {}, s[n] = {}, z(i[n], e[n]), z(s[n], e[n])) : (i[n] = e[n], s[n] = e[n]) : 0 === n.search(/on[A-Z]/) && "function" == typeof e[n] ? t ? r[`${n[2].toLowerCase()}${n.substr(3)}`] = e[n] : i.on[`${n[2].toLowerCase()}${n.substr(3)}`] = e[n] : a[n] = e[n])
                        }), ["navigation", "pagination", "scrollbar"].forEach(e => {
                            !0 === i[e] && (i[e] = {}), !1 === i[e] && delete i[e]
                        }), {
                            params: i,
                            passedParams: s,
                            rest: a,
                            events: r
                        }
                    }(d), {
                        slides: R,
                        slots: q
                    } = function(e) {
                        let t = [],
                            i = {
                                "container-start": [],
                                "container-end": [],
                                "wrapper-start": [],
                                "wrapper-end": []
                            };
                        return l.Children.toArray(e).forEach(e => {
                            if (V(e)) t.push(e);
                            else if (e.props && e.props.slot && i[e.props.slot]) i[e.props.slot].push(e);
                            else if (e.props && e.props.children) {
                                let r = function e(t) {
                                    let i = [];
                                    return l.Children.toArray(t).forEach(t => {
                                        V(t) ? i.push(t) : t.props && t.props.children && e(t.props.children).forEach(e => i.push(e))
                                    }), i
                                }(e.props.children);
                                r.length > 0 ? r.forEach(e => t.push(e)) : i["container-end"].push(e)
                            } else i["container-end"].push(e)
                        }), {
                            slides: t,
                            slots: i
                        }
                    }(n), W = () => {
                        v(!h)
                    };
                    Object.assign(M.on, {
                        _containerClasses(e, t) {
                            u(t)
                        }
                    });
                    let Y = () => {
                        Object.assign(M.on, O), p = !0;
                        let e = { ...M
                        };
                        if (delete e.wrapperClass, b.current = new I(e), b.current.virtual && b.current.params.virtual.enabled) {
                            b.current.virtual.slides = R;
                            let t = {
                                cache: !1,
                                slides: R,
                                renderExternal: f,
                                renderExternalUpdate: !1
                            };
                            z(b.current.params.virtual, t), z(b.current.originalParams.virtual, t)
                        }
                    };
                    w.current || Y(), b.current && b.current.on("_beforeBreakpoint", W);
                    let X = () => {
                            !p && O && b.current && Object.keys(O).forEach(e => {
                                b.current.on(e, O[e])
                            })
                        },
                        U = () => {
                            O && b.current && Object.keys(O).forEach(e => {
                                b.current.off(e, O[e])
                            })
                        };
                    return (0, l.useEffect)(() => () => {
                        b.current && b.current.off("_beforeBreakpoint", W)
                    }), (0, l.useEffect)(() => {
                        !g.current && b.current && (b.current.emitSlidesClasses(), g.current = !0)
                    }), j(() => {
                        if (t && (t.current = w.current), w.current) return b.current.destroyed && Y(),
                            function(e, t) {
                                let {
                                    el: i,
                                    nextEl: r,
                                    prevEl: s,
                                    paginationEl: a,
                                    scrollbarEl: l,
                                    swiper: n
                                } = e;
                                D(t) && r && s && (n.params.navigation.nextEl = r, n.originalParams.navigation.nextEl = r, n.params.navigation.prevEl = s, n.originalParams.navigation.prevEl = s), $(t) && a && (n.params.pagination.el = a, n.originalParams.pagination.el = a), N(t) && l && (n.params.scrollbar.el = l, n.originalParams.scrollbar.el = l), n.init(i)
                            }({
                                el: w.current,
                                nextEl: T.current,
                                prevEl: E.current,
                                paginationEl: x.current,
                                scrollbarEl: C.current,
                                swiper: b.current
                            }, M), o && !b.current.destroyed && o(b.current), () => {
                                b.current && !b.current.destroyed && b.current.destroy(!0, !1)
                            }
                    }, []), j(() => {
                        X();
                        let e = function(e, t, i, r, s) {
                            let a = [];
                            if (!t) return a;
                            let l = e => {
                                0 > a.indexOf(e) && a.push(e)
                            };
                            if (i && r) {
                                let n = r.map(s),
                                    o = i.map(s);
                                n.join("") !== o.join("") && l("children"), r.length !== i.length && l("children")
                            }
                            let d = A.filter(e => "_" === e[0]).map(e => e.replace(/_/, ""));
                            return d.forEach(i => {
                                if (i in e && i in t) {
                                    if (_(e[i]) && _(t[i])) {
                                        let r = Object.keys(e[i]),
                                            s = Object.keys(t[i]);
                                        r.length !== s.length ? l(i) : (r.forEach(r => {
                                            e[i][r] !== t[i][r] && l(i)
                                        }), s.forEach(r => {
                                            e[i][r] !== t[i][r] && l(i)
                                        }))
                                    } else e[i] !== t[i] && l(i)
                                }
                            }), a
                        }(P, y.current, R, S.current, e => e.key);
                        return y.current = P, S.current = R, e.length && b.current && !b.current.destroyed && function(e) {
                            let t, i, r, s, a, l, n, o, {
                                    swiper: d,
                                    slides: p,
                                    passedParams: c,
                                    changedParams: u,
                                    nextEl: m,
                                    prevEl: f,
                                    scrollbarEl: h,
                                    paginationEl: v
                                } = e,
                                g = u.filter(e => "children" !== e && "direction" !== e && "wrapperClass" !== e),
                                {
                                    params: w,
                                    pagination: b,
                                    navigation: y,
                                    scrollbar: S,
                                    virtual: T,
                                    thumbs: E
                                } = d;
                            u.includes("thumbs") && c.thumbs && c.thumbs.swiper && w.thumbs && !w.thumbs.swiper && (t = !0), u.includes("controller") && c.controller && c.controller.control && w.controller && !w.controller.control && (i = !0), u.includes("pagination") && c.pagination && (c.pagination.el || v) && (w.pagination || !1 === w.pagination) && b && !b.el && (r = !0), u.includes("scrollbar") && c.scrollbar && (c.scrollbar.el || h) && (w.scrollbar || !1 === w.scrollbar) && S && !S.el && (s = !0), u.includes("navigation") && c.navigation && (c.navigation.prevEl || f) && (c.navigation.nextEl || m) && (w.navigation || !1 === w.navigation) && y && !y.prevEl && !y.nextEl && (a = !0);
                            let x = e => {
                                d[e] && (d[e].destroy(), "navigation" === e ? (d.isElement && (d[e].prevEl.remove(), d[e].nextEl.remove()), w[e].prevEl = void 0, w[e].nextEl = void 0, d[e].prevEl = void 0, d[e].nextEl = void 0) : (d.isElement && d[e].el.remove(), w[e].el = void 0, d[e].el = void 0))
                            };
                            if (u.includes("loop") && d.isElement && (w.loop && !c.loop ? l = !0 : !w.loop && c.loop ? n = !0 : o = !0), g.forEach(e => {
                                    if (_(w[e]) && _(c[e])) Object.assign(w[e], c[e]), ("navigation" === e || "pagination" === e || "scrollbar" === e) && "enabled" in c[e] && !c[e].enabled && x(e);
                                    else {
                                        let t = c[e];
                                        (!0 === t || !1 === t) && ("navigation" === e || "pagination" === e || "scrollbar" === e) ? !1 === t && x(e): w[e] = c[e]
                                    }
                                }), g.includes("controller") && !i && d.controller && d.controller.control && w.controller && w.controller.control && (d.controller.control = w.controller.control), u.includes("children") && p && T && w.virtual.enabled ? (T.slides = p, T.update(!0)) : u.includes("virtual") && T && w.virtual.enabled && (p && (T.slides = p), T.update(!0)), u.includes("children") && p && w.loop && (o = !0), t) {
                                let C = E.init();
                                C && E.update(!0)
                            }
                            i && (d.controller.control = w.controller.control), r && (d.isElement && (!v || "string" == typeof v) && ((v = document.createElement("div")).classList.add("swiper-pagination"), v.part.add("pagination"), d.el.appendChild(v)), v && (w.pagination.el = v), b.init(), b.render(), b.update()), s && (d.isElement && (!h || "string" == typeof h) && ((h = document.createElement("div")).classList.add("swiper-scrollbar"), h.part.add("scrollbar"), d.el.appendChild(h)), h && (w.scrollbar.el = h), S.init(), S.updateSize(), S.setTranslate()), a && (d.isElement && (m && "string" != typeof m || ((m = document.createElement("div")).classList.add("swiper-button-next"), m.innerHTML = d.hostEl.constructor.nextButtonSvg, m.part.add("button-next"), d.el.appendChild(m)), f && "string" != typeof f || ((f = document.createElement("div")).classList.add("swiper-button-prev"), f.innerHTML = d.hostEl.constructor.prevButtonSvg, f.part.add("button-prev"), d.el.appendChild(f))), m && (w.navigation.nextEl = m), f && (w.navigation.prevEl = f), y.init(), y.update()), u.includes("allowSlideNext") && (d.allowSlideNext = c.allowSlideNext), u.includes("allowSlidePrev") && (d.allowSlidePrev = c.allowSlidePrev), u.includes("direction") && d.changeDirection(c.direction, !1), (l || o) && d.loopDestroy(), (n || o) && d.loopCreate(), d.update()
                        }({
                            swiper: b.current,
                            slides: R,
                            passedParams: P,
                            changedParams: e,
                            nextEl: T.current,
                            prevEl: E.current,
                            scrollbarEl: C.current,
                            paginationEl: x.current
                        }), () => {
                            U()
                        }
                    }), j(() => {
                        B(b.current)
                    }, [m]), l.createElement(s, F({
                        ref: w,
                        className: G(`${c}${r?` ${r}`:""}`)
                    }, k), l.createElement(H.Provider, {
                        value: b.current
                    }, q["container-start"], l.createElement(a, {
                        className: (void 0 === (i = M.wrapperClass) && (i = ""), i) ? i.includes("swiper-wrapper") ? i : `swiper-wrapper ${i}` : "swiper-wrapper"
                    }, q["wrapper-start"], M.virtual ? function(e, t, i) {
                        if (!i) return null;
                        let r = e => {
                                let i = e;
                                return e < 0 ? i = t.length + e : i >= t.length && (i -= t.length), i
                            },
                            s = e.isHorizontal() ? {
                                [e.rtlTranslate ? "right" : "left"]: `${i.offset}px`
                            } : {
                                top: `${i.offset}px`
                            },
                            {
                                from: a,
                                to: n
                            } = i,
                            o = e.params.loop ? -t.length : 0,
                            d = e.params.loop ? 2 * t.length : t.length,
                            p = [];
                        for (let c = o; c < d; c += 1) c >= a && c <= n && p.push(t[r(c)]);
                        return p.map((t, i) => l.cloneElement(t, {
                            swiper: e,
                            style: s,
                            key: t.props.virtualIndex || t.key || `slide-${i}`
                        }))
                    }(b.current, R, m) : R.map((e, t) => l.cloneElement(e, {
                        swiper: b.current,
                        swiperSlideIndex: t
                    })), q["wrapper-end"]), D(M) && l.createElement(l.Fragment, null, l.createElement("div", {
                        ref: E,
                        className: "swiper-button-prev"
                    }), l.createElement("div", {
                        ref: T,
                        className: "swiper-button-next"
                    })), N(M) && l.createElement("div", {
                        ref: C,
                        className: "swiper-scrollbar"
                    }), $(M) && l.createElement("div", {
                        ref: x,
                        className: "swiper-pagination"
                    }), q["container-end"]))
                });
            q.displayName = "Swiper";
            let W = (0, l.forwardRef)(function(e, t) {
                let {
                    tag: i = "div",
                    children: r,
                    className: s = "",
                    swiper: a,
                    zoom: n,
                    lazy: o,
                    virtualIndex: d,
                    swiperSlideIndex: p,
                    ...c
                } = void 0 === e ? {} : e, u = (0, l.useRef)(null), [m, f] = (0, l.useState)("swiper-slide"), [h, v] = (0, l.useState)(!1);

                function g(e, t, i) {
                    t === u.current && f(i)
                }
                j(() => {
                    if (void 0 !== p && (u.current.swiperSlideIndex = p), t && (t.current = u.current), u.current && a) {
                        if (a.destroyed) {
                            "swiper-slide" !== m && f("swiper-slide");
                            return
                        }
                        return a.on("_slideClass", g), () => {
                            a && a.off("_slideClass", g)
                        }
                    }
                }), j(() => {
                    a && u.current && !a.destroyed && f(a.getSlideClasses(u.current))
                }, [a]);
                let w = {
                        isActive: m.indexOf("swiper-slide-active") >= 0,
                        isVisible: m.indexOf("swiper-slide-visible") >= 0,
                        isPrev: m.indexOf("swiper-slide-prev") >= 0,
                        isNext: m.indexOf("swiper-slide-next") >= 0
                    },
                    b = () => "function" == typeof r ? r(w) : r,
                    y = () => {
                        v(!0)
                    };
                return l.createElement(i, F({
                    ref: u,
                    className: G(`${m}${s?` ${s}`:""}`),
                    "data-swiper-slide-index": d,
                    onLoad: y
                }, c), n && l.createElement(R.Provider, {
                    value: w
                }, l.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" == typeof n ? n : void 0
                }, b(), o && !h && l.createElement("div", {
                    className: "swiper-lazy-preloader"
                }))), !n && l.createElement(R.Provider, {
                    value: w
                }, b(), o && !h && l.createElement("div", {
                    className: "swiper-lazy-preloader"
                })))
            });
            W.displayName = "SwiperSlide"
        }
    }
]);