"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5667, 8315], {
        47304: function(e, i, l) {
            var t = l(85893),
                n = l(67294);
            let o = e => {
                let {
                    timestamp: i,
                    fallBackText: l
                } = e, o = () => {
                    let e = parseInt(i) - new Date().getTime(),
                        l = {
                            days: 0,
                            hours: 0,
                            minutes: 0,
                            seconds: 0
                        };
                    return e > 0 && (l = {
                        days: Math.floor(e / 864e5),
                        hours: Math.floor(e / 36e5 % 24),
                        minutes: Math.floor(e / 1e3 / 60 % 60),
                        seconds: Math.floor(e / 1e3 % 60)
                    }), l
                }, [d, r] = (0, n.useState)(o()), s = e => e < 10 ? "0".concat(e) : e;
                return (0, n.useEffect)(() => {
                    let e = setTimeout(() => {
                        r(o())
                    }, 1e3);
                    return () => clearTimeout(e)
                }), (null == d ? void 0 : d.hours) <= 0 && (null == d ? void 0 : d.minutes) <= 0 && (null == d ? void 0 : d.seconds) <= 0 ? (0, t.jsx)("span", {
                    children: l
                }) : (null == d ? void 0 : d.days) > 0 ? (0, t.jsxs)("span", {
                    children: [s((null == d ? void 0 : d.days) * 24 + (null == d ? void 0 : d.hours)), "h:", s(null == d ? void 0 : d.minutes), "m:", s(null == d ? void 0 : d.seconds), "s"]
                }) : (0, t.jsxs)("span", {
                    children: [s(null == d ? void 0 : d.hours), "h:", s(null == d ? void 0 : d.minutes), "m:", s(null == d ? void 0 : d.seconds), "s"]
                })
            };
            i.Z = o
        },
        39131: function(e, i, l) {
            var t = l(85893),
                n = l(87789),
                o = l(39396),
                d = l(25675),
                r = l.n(d),
                s = l(67294),
                a = l(68991);
            let u = e => {
                let {
                    src: i,
                    fallback: l = "https://images.pickyourtrail.com/image_placeholder_2eca9cbf61.png",
                    alt: d = "",
                    width: u,
                    height: c,
                    children: h,
                    isBg: g = !1,
                    wrapperRef: v,
                    fill: p = !1,
                    ...m
                } = e, [f, x] = (0, s.useState)(0), [b, w] = (0, s.useState)(0);
                (0, s.useEffect)(() => {
                    if (null == v ? void 0 : v.current) {
                        var e, i;
                        x(null == v ? void 0 : null === (e = v.current) || void 0 === e ? void 0 : e.offsetWidth), w(null == v ? void 0 : null === (i = v.current) || void 0 === i ? void 0 : i.offsetHeight)
                    }
                }, [v]);
                let $ = (0, s.useMemo)(() => u ? Math.ceil(Number(u) / 3) : Math.ceil(Number(f) / 3), [u, f]),
                    j = (0, s.useMemo)(() => c ? Math.ceil(Number(c) / 3) : Math.ceil(Number(b) / 3), [c, b]),
                    y = (0, s.useMemo)(() => "w=".concat($, "&h=").concat(j), [j, $]),
                    T = (0, s.useMemo)(() => {
                        let e = i.includes("?") ? "&" : "?";
                        return "".concat(i).concat(e).concat(y, "&blur=2")
                    }, [y, i]),
                    [C, S] = (0, s.useState)(!1),
                    [Z, M] = (0, s.useState)(!1),
                    B = (0, s.useMemo)(() => {
                        let e = {};
                        return u && (e = { ...e,
                            width: u
                        }), c && (e = { ...e,
                            height: c
                        }), p && (e = { ...e,
                            fill: !0
                        }), e
                    }, [p, c, u]),
                    z = (0, s.useMemo)(() => null == i ? void 0 : i.includes("time=1"), [i]),
                    W = (0, n.zo)(r(), {
                        filter: z ? "blur(10px)" : "unset"
                    });
                return (null == i ? void 0 : i.length) && !C ? u || c || p || f > 0 && b > 0 ? Z ? g ? (0, t.jsxs)(o.xu, {
                    style: {
                        position: "relative",
                        width: null != u ? u : f,
                        height: null != c ? c : b
                    },
                    children: [(0, t.jsx)(W, {
                        alt: d,
                        src: (0, a.Z)("".concat(i, "?w=").concat(null != u ? u : f, "&h=").concat(null != c ? c : b, "&format=auto"), ""),
                        onError: () => S(!0),
                        style: {
                            opacity: Z ? 1 : 0,
                            transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                            position: "relative"
                        },
                        ...m,
                        placeholder: "blur",
                        blurDataURL: (0, a.Z)(T, "", 10, "1"),
                        ...B,
                        onLoadingComplete: () => {
                            M(!0)
                        }
                    }), (0, t.jsx)(o.xu, {
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            zIndex: 1
                        },
                        children: h
                    })]
                }) : (0, t.jsx)(r(), {
                    alt: d,
                    src: (0, a.Z)("".concat(i, "?w=").concat(null != u ? u : f, "&h=").concat(null != c ? c : b, "&format=auto"), ""),
                    onError: () => S(!0),
                    style: {
                        opacity: Z ? 1 : 0,
                        transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out"
                    },
                    placeholder: "blur",
                    blurDataURL: (0, a.Z)(T, "", 10, "1"),
                    ...B,
                    onLoadingComplete: () => {
                        M(!0)
                    },
                    ...m
                }) : g ? (0, t.jsxs)(o.xu, {
                    style: {
                        position: "relative",
                        width: null != u ? u : f,
                        height: null != c ? c : b
                    },
                    children: [(0, t.jsx)(W, {
                        alt: d,
                        src: (0, a.Z)(T, "", 10, "1"),
                        onError: () => S(!0),
                        style: {
                            opacity: Z ? 1 : 0,
                            transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                            position: "relative"
                        },
                        ...m,
                        placeholder: "blur",
                        blurDataURL: (0, a.Z)(T, "", 10, "1"),
                        ...B,
                        onLoadingComplete: () => {
                            M(!0)
                        }
                    }), (0, t.jsx)(o.xu, {
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            zIndex: 1
                        },
                        children: h
                    })]
                }) : (0, t.jsx)(r(), {
                    alt: d,
                    src: (0, a.Z)(T, "", 10, "1"),
                    onError: () => S(!0),
                    style: {
                        opacity: Z ? 0 : 1,
                        transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out"
                    },
                    placeholder: "blur",
                    blurDataURL: (0, a.Z)(T, "", 10, "1"),
                    ...B,
                    onLoadingComplete: () => {
                        M(!0)
                    },
                    ...m
                }) : null : g ? (0, t.jsx)(r(), {
                    alt: "",
                    src: (0, a.Z)(l, "", 10, "1"),
                    ...B,
                    ...m,
                    children: h
                }) : (0, t.jsx)(r(), {
                    alt: "",
                    src: (0, a.Z)(l, "", 10, "1"),
                    ...B,
                    ...m
                })
            };
            i.Z = s.memo(u)
        },
        19466: function(e, i, l) {
            l.r(i), l.d(i, {
                default: function() {
                    return Z
                }
            });
            var t = l(85893),
                n = l(39396),
                o = l(67294),
                d = l(78449),
                r = l(70466),
                s = l(35946),
                a = l(47304),
                u = l(87789),
                c = l(27484),
                h = l.n(c),
                g = l(70024),
                v = l(11163),
                p = l(39131),
                m = l(44950),
                f = l(50389),
                x = l(22942),
                b = l(39986),
                w = l(76801);
            let $ = (e, i) => ({
                    imgHeight: e ? parseInt(null == e ? void 0 : e.replace(/$|i|px/g, "")) : null,
                    imgWidth: i ? parseInt(null == i ? void 0 : i.replace(/$|i|px/g, "")) : null
                }),
                j = (0, u.zo)("a", {}),
                y = e => {
                    var i, l;
                    let {
                        withGradient: d = !1,
                        cardData: r,
                        height: s,
                        width: a,
                        borderRadius: u,
                        sectionTitle: c
                    } = e, y = (0, v.useRouter)(), T = (0, g.Dv)(m.s1), C = () => {
                        let e = {
                            sectionTitle: (0, b.Z)(c, " ", "-").toLowerCase(),
                            slug: r.slug,
                            title: r.title,
                            elementType: "card",
                            pathname: y.asPath
                        };
                        (0, f.L9W)(f.uQm, e, T || void 0)
                    }, S = (0, o.useMemo)(() => (0, w.Z)(null == r ? void 0 : r.image), [null == r ? void 0 : r.image]), Z = (0, o.useMemo)(() => $(s, a), [s, a]), M = (0, o.useMemo)(() => {
                        if (null == r || !r.slug.includes("maldives-tour-packages/listing")) return null == r ? void 0 : r.slug; {
                            let e = new Date,
                                i = e.getTime(),
                                l = h()(i).add(45, "day").format("YYYY-MM-DD"),
                                t = new URL(r.slug, window.location.origin),
                                n = t.searchParams;
                            return n.set("date", l), "/maldives-tour-packages/listing?".concat(n.toString())
                        }
                    }, [r.slug]);
                    return (0, t.jsx)(n.xu, {
                        children: (0, t.jsxs)(j, {
                            href: "".concat(M),
                            onClick: C,
                            style: {
                                textDecoration: "none",
                                backgroundColor: "transparent",
                                background: "transparent"
                            },
                            children: [(0, t.jsx)(n.xu, {
                                css: {
                                    backgroundColor: "transparent",
                                    background: "transparent",
                                    borderRadius: "".concat(u || null),
                                    height: null != s ? s : "144px",
                                    width: null != a ? a : "148px",
                                    "@lg": {
                                        height: null != s ? s : "180px",
                                        width: null != a ? a : "240px"
                                    }
                                },
                                children: (0, t.jsx)(p.Z, {
                                    src: null == S ? void 0 : S.url,
                                    alt: S.alt || "themed-media-cards-".concat(null == r ? void 0 : r.slug),
                                    style: {
                                        borderRadius: "".concat(null !== u ? "12px" : 0, " ").concat(null !== u ? "12px" : 0, " ").concat(d || null === u ? 0 : "12px", " ").concat(d || null === u ? 0 : "12px"),
                                        objectFit: "cover"
                                    },
                                    height: null !== (i = null == Z ? void 0 : Z.imgHeight) && void 0 !== i ? i : 180,
                                    width: null !== (l = null == Z ? void 0 : Z.imgWidth) && void 0 !== l ? l : 220,
                                    loader: x.Z,
                                    test: null == r ? void 0 : r.slug
                                })
                            }), (null == r ? void 0 : r.title) ? (0, t.jsx)(n.xu, {
                                css: {
                                    backgroundColor: "".concat(null == r ? void 0 : r.backgroundColor),
                                    width: (null != a ? a : d) ? "148px" : "180px",
                                    "@lg": {
                                        width: null != a ? a : "240px"
                                    },
                                    borderBottomLeftRadius: "12px",
                                    borderBottomRightRadius: "12px"
                                },
                                children: (0, t.jsx)(n.xv, {
                                    css: {
                                        fontFamily: "$manrope",
                                        fontStyle: "normal",
                                        fontWeight: 700,
                                        fontSize: "$7i",
                                        lineHeight: "$9i",
                                        textAlign: "center",
                                        padding: "$6i 0px $6i 0px",
                                        color: "$white",
                                        "@lg": {
                                            fontStyle: "normal",
                                            fontize: "$8i",
                                            lineHeight: "$11i"
                                        }
                                    },
                                    children: null == r ? void 0 : r.title
                                })
                            }) : null]
                        })
                    })
                };
            var T = o.memo(y),
                C = l(64598);
            let S = e => {
                var i, l, u, c, h, g, v, p, m, f, x, b, w, $, j, y, S, Z, M, B, z, W, k, H, L, A;
                let {
                    componentData: R,
                    item: F,
                    sliderArrowBg: D,
                    sliderArrowColor: P,
                    sliderArrowBorderColor: I
                } = e;
                null === (l = (R = null == R ? void 0 : null === (i = R.themedVacationsCards) || void 0 === i ? void 0 : i.map(e => ({ ...e,
                    image: e.image,
                    alt: "",
                    linkTitle: (0, d.Z)(null == e ? void 0 : e.title)
                }))) || []) || void 0 === l || l.sort((e, i) => (null == e ? void 0 : e.cardOrderId) - (null == i ? void 0 : i.cardOrderId));
                let _ = null == F ? void 0 : F.sliderArrowPosition,
                    E = {
                        360: {
                            slidesPerView: "auto",
                            spaceBetween: 12,
                            freeMode: !0
                        },
                        1024: {
                            slidesPerView: null == F ? void 0 : F.slidesPerView,
                            slidesPerGroup: 6,
                            spaceBetween: 1,
                            freeMode: !0
                        }
                    },
                    V = {
                        breakpoints: { ...E
                        }
                    };
                return (0, t.jsx)(t.Fragment, {
                    children: ((null == F ? void 0 : F.backgroundImage) || (null == F ? void 0 : F.backgroundColor)) && (null == F ? void 0 : F.subTitle) ? (0, t.jsx)(n.xu, {
                        css: {},
                        children: (null == F ? void 0 : F.enableSlider) ? (0, t.jsx)(n.sg, {
                            css: {
                                padding: "0px $8i",
                                minHeight: "312px",
                                justifyContent: "center",
                                paddingLeft: "0",
                                margin: "0 0 0 16px",
                                "@lg": {
                                    paddingLeft: "50px",
                                    margin: "0"
                                }
                            },
                            children: (0, t.jsx)(C.default, {
                                sliderArrowBg: D,
                                sliderArrowColor: P,
                                sliderArrowBorderColor: I,
                                transparentBg: !0,
                                id: "".concat((0, s.l)(F.__component, F.title)),
                                componentData: F,
                                sliderConfig: (null == F ? void 0 : F.slidesPerView) ? V : {
                                    breakpoints: {
                                        360: {
                                            slidesPerView: "auto",
                                            spaceBetween: 24,
                                            slidesPerGroup: 3,
                                            freeMode: !0
                                        },
                                        1024: {
                                            slidesPerView: 4,
                                            slidesPerGroup: 4,
                                            spaceBetween: 24,
                                            freeMode: !1
                                        }
                                    }
                                },
                                sliderArrowPosition: _,
                                swiperContainerHeight: "144px",
                                titleElement: (0, t.jsxs)(n.sg, {
                                    css: {
                                        justifyContent: "center",
                                        alignItems: "center",
                                        display: "flex",
                                        paddingBottom: "$12i",
                                        "@lg": {
                                            paddingBottom: "$4i"
                                        }
                                    },
                                    children: [(0, t.jsx)(n.xv, {
                                        css: {
                                            textAlign: "center",
                                            fontFamily: "$manrope",
                                            fontStyle: "normal",
                                            fontWeight: "$extraBold",
                                            fontSize: "17px",
                                            lineHeight: "$10i",
                                            textTransform: "uppercase",
                                            color: "".concat(null !== (S = null == F ? void 0 : F.titleColor) && void 0 !== S ? S : "$white"),
                                            marginBottom: "$2i",
                                            "@lg": {
                                                fontSize: "$10i",
                                                lineHeight: "$15i",
                                                marginBottom: "0"
                                            }
                                        },
                                        children: null == F ? void 0 : F.title
                                    }), (null == F ? void 0 : F.subTitle) ? (0, t.jsx)(n.xv, {
                                        css: {
                                            textAlign: "center",
                                            fontStyle: "normal",
                                            lineHeight: "$18i",
                                            fontFamily: "".concat((null == F ? void 0 : null === (u = F.subTitle) || void 0 === u ? void 0 : u.fontFamily) === "Amithen" ? "$amithen" : "$manrope"),
                                            color: "".concat(null == F ? void 0 : null === (c = F.subTitle) || void 0 === c ? void 0 : c.fontColor),
                                            fontWeight: "".concat(null !== (Z = null == F ? void 0 : null === (h = F.subTitle) || void 0 === h ? void 0 : h.fontWeightMobile) && void 0 !== Z ? Z : "normal"),
                                            fontSize: "".concat(null !== (M = null == F ? void 0 : null === (g = F.subTitle) || void 0 === g ? void 0 : g.fontSizeMobile) && void 0 !== M ? M : "$19i"),
                                            paddingTop: "2px",
                                            "@lg": {
                                                paddingTop: "0",
                                                lineHeight: "$29i",
                                                fontWeight: "".concat(null !== (B = null == F ? void 0 : null === (v = F.subTitle) || void 0 === v ? void 0 : v.fontWeight) && void 0 !== B ? B : 700),
                                                fontSize: "".concat(null !== (z = null == F ? void 0 : null === (p = F.subTitle) || void 0 === p ? void 0 : p.fontSize) && void 0 !== z ? z : "$22i")
                                            }
                                        },
                                        children: null == F ? void 0 : null === (m = F.subTitle) || void 0 === m ? void 0 : m.title
                                    }) : null]
                                }),
                                children: null == R ? void 0 : R.map((e, i) => (0, t.jsx)(o.Fragment, {
                                    children: (0, t.jsx)(n.xu, {
                                        css: {
                                            width: (0, r.Z)() ? "".concat(null == e ? void 0 : e.mobWidth) : "".concat(null == e ? void 0 : e.width),
                                            height: (0, r.Z)() ? "".concat(null == e ? void 0 : e.mobHeight) : "".concat(null == e ? void 0 : e.height)
                                        },
                                        children: (0, t.jsx)(T, {
                                            cardData: e,
                                            width: (0, r.Z)() ? null == e ? void 0 : e.mobWidth : null == e ? void 0 : e.width,
                                            height: (0, r.Z)() ? null == e ? void 0 : e.mobHeight : null == e ? void 0 : e.height,
                                            sectionTitle: null == F ? void 0 : F.title
                                        })
                                    })
                                }, "trending-now-".concat(null == F ? void 0 : F.title, "-").concat(i)))
                            })
                        }) : (0, t.jsxs)(n.xu, {
                            css: {
                                paddingLeft: "$8i",
                                paddingRight: "$8i",
                                paddingTop: "$16i",
                                paddingBottom: "$16i",
                                "@lg": {
                                    paddingBottom: "$20i",
                                    paddingTop: "$20i"
                                }
                            },
                            children: [(0, t.jsxs)(n.sg, {
                                css: {
                                    justifyContent: "center",
                                    alignItems: "center",
                                    display: "flex",
                                    paddingBottom: "$10i",
                                    "@lg": {}
                                },
                                children: [(0, t.jsx)(n.xv, {
                                    css: {
                                        textAlign: "center",
                                        fontFamily: "$manrope",
                                        fontStyle: "normal",
                                        fontWeight: "bold",
                                        fontSize: "17px",
                                        lineHeight: "$10i",
                                        textTransform: "uppercase",
                                        color: "".concat(null !== (W = null == F ? void 0 : F.titleColor) && void 0 !== W ? W : "$white"),
                                        marginBottom: "$2i",
                                        "@lg": {
                                            fontSize: "$10i",
                                            lineHeight: "$15i",
                                            marginBottom: "0"
                                        }
                                    },
                                    children: null == F ? void 0 : F.title
                                }), (0, t.jsx)(n.xv, {
                                    css: {
                                        textAlign: "center",
                                        fontStyle: "normal",
                                        lineHeight: "$18i",
                                        paddingTop: "2px",
                                        fontFamily: "".concat((null == F ? void 0 : null === (f = F.subTitle) || void 0 === f ? void 0 : f.fontFamily) === "Amithen" ? "$amithen" : "$manrope"),
                                        color: "".concat(null == F ? void 0 : null === (x = F.subTitle) || void 0 === x ? void 0 : x.fontColor),
                                        fontWeight: "".concat(null !== (k = null == F ? void 0 : null === (b = F.subTitle) || void 0 === b ? void 0 : b.fontWeightMobile) && void 0 !== k ? k : "normal"),
                                        fontSize: "".concat(null !== (H = null == F ? void 0 : null === (w = F.subTitle) || void 0 === w ? void 0 : w.fontSizeMobile) && void 0 !== H ? H : "$19i"),
                                        "@lg": {
                                            lineHeight: "$29i",
                                            paddingTop: "0",
                                            fontWeight: "".concat(null !== (L = null == F ? void 0 : null === ($ = F.subTitle) || void 0 === $ ? void 0 : $.fontWeight) && void 0 !== L ? L : 700),
                                            fontSize: "".concat(null !== (A = null == F ? void 0 : null === (j = F.subTitle) || void 0 === j ? void 0 : j.fontSize) && void 0 !== A ? A : "$22i")
                                        }
                                    },
                                    children: (0, d.Z)(null == F ? void 0 : null === (y = F.subTitle) || void 0 === y ? void 0 : y.title)
                                })]
                            }), (0, t.jsx)(n.xu, {
                                css: {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "$12i"
                                },
                                children: null == R ? void 0 : R.map((e, i) => (0, t.jsx)(o.Fragment, {
                                    children: (0, t.jsx)(T, {
                                        cardData: e,
                                        width: (0, r.Z)() ? null == e ? void 0 : e.mobWidth : null == e ? void 0 : e.width,
                                        height: (0, r.Z)() ? null == e ? void 0 : e.mobHeight : null == e ? void 0 : e.height,
                                        withGradient: !0,
                                        borderRadius: "12px",
                                        sectionTitle: null == F ? void 0 : F.title
                                    })
                                }, "vacations-for-every-".concat(i)))
                            })]
                        })
                    }) : (0, t.jsx)(n.xu, {
                        css: {
                            "@mdMax": (F.fluidLayout, {}),
                            paddingTop: (null == F ? void 0 : F.preCostTime) ? "$12i" : 0,
                            paddingBottom: (null == F ? void 0 : F.preCostTime) ? "$12i" : 0,
                            "@lg": {
                                paddingTop: (null == F ? void 0 : F.preCostTime) ? "$15i" : 0,
                                paddingBottom: (null == F ? void 0 : F.preCostTime) ? "$15i" : 0
                            },
                            "@smMax": {
                                "& .swiper-slide": {
                                    width: "auto"
                                },
                                "& .swiper-slide:first-child": {
                                    paddingLeft: 16
                                },
                                "& .swiper-slide:last-child": {
                                    paddingRight: 16
                                }
                            }
                        },
                        children: (0, t.jsx)(C.default, {
                            sliderArrowBg: D,
                            sliderArrowColor: P,
                            sliderArrowBorderColor: I,
                            id: "".concat((0, s.l)(F.__component, F.title)),
                            componentData: { ...F
                            },
                            transparentBg: !0,
                            sliderConfig: {
                                breakpoints: {
                                    360: {
                                        slidesPerView: "auto",
                                        spaceBetween: 24,
                                        freeMode: !0
                                    },
                                    1024: {
                                        slidesPerView: 4.8,
                                        slidesPerGroup: 4,
                                        spaceBetween: 8,
                                        freeMode: !1
                                    }
                                }
                            },
                            titleElement: (0, t.jsxs)(n.Kq, {
                                css: {
                                    gap: "$3i !important",
                                    "@lg": {
                                        gap: "$8i !important"
                                    }
                                },
                                children: [(0, t.jsx)(n.xv, {
                                    css: {
                                        fontFamily: "$manrope",
                                        fontStyle: "normal",
                                        fontWeight: 900,
                                        fontSize: "17px",
                                        lineHeight: "$10i",
                                        textTransform: "uppercase",
                                        color: "$black2",
                                        marginBottom: "$2i",
                                        "@lg": {
                                            fontSize: "$10i",
                                            lineHeight: "$15i",
                                            marginBottom: "0"
                                        }
                                    },
                                    children: null == F ? void 0 : F.title
                                }), (null == F ? void 0 : F.preCostTitle) ? (0, t.jsx)(n.X2, {
                                    css: {
                                        background: "".concat(null == F ? void 0 : F.timerGradientBG),
                                        alignItems: "center",
                                        padding: "$2i $5i $2i $5i",
                                        borderRadius: 15,
                                        justifyContent: "center"
                                    },
                                    children: (null == F ? void 0 : F.preCostTime) < new Date().getTime() ? (0, t.jsx)(n.xv, {
                                        css: {
                                            textAlign: "center",
                                            fontFamily: "$manrope",
                                            fontStyle: "normal",
                                            fontWeight: "bold",
                                            fontSize: "13px",
                                            color: "$white"
                                        },
                                        children: "This offer window will open again in 24 hrs."
                                    }) : (0, t.jsxs)(t.Fragment, {
                                        children: [(0, t.jsxs)(n.xv, {
                                            css: {
                                                textAlign: "center",
                                                fontFamily: "$manrope",
                                                fontStyle: "normal",
                                                fontWeight: "bold",
                                                fontSize: "13px",
                                                color: "$white"
                                            },
                                            children: [null == F ? void 0 : F.preCostTitle, "\xa0"]
                                        }), (0, t.jsx)(n.xv, {
                                            css: {
                                                textAlign: "center",
                                                fontFamily: "$manrope",
                                                fontStyle: "normal",
                                                fontWeight: "bold",
                                                fontSize: "13px",
                                                color: "$white"
                                            },
                                            children: (0, t.jsx)(a.Z, {
                                                timestamp: null == F ? void 0 : F.preCostTime
                                            })
                                        })]
                                    })
                                }) : null]
                            }),
                            children: null == R ? void 0 : R.map((e, i) => (0, t.jsx)(o.Fragment, {
                                children: (0, t.jsx)(n.xu, {
                                    css: {
                                        width: (0, r.Z)() ? "".concat(null == e ? void 0 : e.mobWidth) : "".concat(null == e ? void 0 : e.width),
                                        height: (0, r.Z)() ? "".concat(null == e ? void 0 : e.mobHeight) : "".concat(null == e ? void 0 : e.height)
                                    },
                                    children: (0, t.jsx)(T, {
                                        cardData: e,
                                        width: (0, r.Z)() ? null == e ? void 0 : e.mobWidth : null == e ? void 0 : e.width,
                                        height: (0, r.Z)() ? null == e ? void 0 : e.mobHeight : null == e ? void 0 : e.height,
                                        borderRadius: "12px",
                                        sectionTitle: null == F ? void 0 : F.title
                                    })
                                })
                            }, "single-title-slider-".concat(i)))
                        })
                    })
                })
            };
            var Z = o.memo(S)
        },
        22942: function(e, i) {
            let l = e => {
                let {
                    src: i
                } = e;
                return i
            };
            i.Z = l
        },
        39986: function(e, i, l) {
            l.d(i, {
                Z: function() {
                    return n
                }
            });
            var t = l(78449);

            function n() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "_",
                    l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : " ";
                return (0, t.Z)((e || "").toLowerCase().split(i).join(l))
            }
        },
        68315: function(e, i, l) {
            var t = l(85893);
            l(67294);
            var n = l(95843),
                o = l(87789);
            let d = (0, o.zo)(n.Z),
                r = e => {
                    let {
                        fill: i,
                        ...l
                    } = e;
                    return (0, t.jsx)(d, {
                        css: {
                            fill: i
                        },
                        ...l
                    })
                };
            i.Z = r
        },
        95843: function(e, i, l) {
            var t = l(85893);
            l(67294), i.Z = function(e) {
                return (0, t.jsx)("svg", {
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 16 16",
                    ...e,
                    children: (0, t.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M10.836 2.13a.5.5 0 00-.706.034l-5 5.5a.5.5 0 000 .672l5 5.5a.5.5 0 10.74-.672L6.176 8l4.694-5.164a.5.5 0 00-.034-.706z",
                        clipRule: "evenodd"
                    })
                })
            }
        }
    }
]);