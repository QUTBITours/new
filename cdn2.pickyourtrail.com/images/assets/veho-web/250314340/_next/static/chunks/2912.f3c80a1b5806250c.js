"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2912, 8315], {
        66445: function(e, t, l) {
            l.d(t, {
                Z: function() {
                    return s
                },
                c: function() {
                    return a
                }
            });
            var i = l(85893),
                n = l(70024),
                o = l(67294),
                r = l(44950);

            function a(e, t) {
                return e ? parseInt(e, 10).toLocaleString("en-US", {
                    style: "currency",
                    currency: t || "INR"
                }).split(".")[0] : e
            }

            function s(e) {
                let {
                    cost: t,
                    defaultValue: l,
                    enablePrefix: s,
                    ignoreComma: c = !1,
                    displayCurrency: d
                } = e, u = (0, n.Dv)(r.f6), p = null != d ? d : u;
                if ((!t.length || "number" != typeof t && "string" != typeof t) && s) return (0, i.jsxs)(o.Fragment, {
                    children: [(0, i.jsx)(i.Fragment, {
                        children: (null != p ? p : u) ? u : "₹"
                    }), " ", l || 0]
                });
                let h = parseFloat(t = (t = "number" == typeof t ? t : t && t.replace(RegExp(",", "g"), "")) || "0");
                h = Math.ceil(h);
                let x = c ? h.toString() : a(h.toString(), null == p ? void 0 : p.toString());
                return s && (x = (0, i.jsx)(i.Fragment, {
                    children: x
                })), (0, i.jsx)(o.Fragment, {
                    children: x
                })
            }
        },
        90083: function(e, t, l) {
            var i = l(85893),
                n = l(66445);
            let o = e => {
                let {
                    value: t,
                    defaultValue: l = "0",
                    enablePrefix: o = !0,
                    displayCurrency: r,
                    ignoreComma: a
                } = e;
                return (0, i.jsx)(n.Z, {
                    cost: (null == t ? void 0 : t.toString()) || "",
                    defaultValue: l,
                    displayCurrency: r,
                    enablePrefix: o,
                    ignoreComma: a
                })
            };
            t.Z = o
        },
        26177: function(e, t, l) {
            l.r(t), l.d(t, {
                default: function() {
                    return b
                }
            });
            var i = l(85893),
                n = l(39396),
                o = l(67294),
                r = l(35946),
                a = l(70024),
                s = l(41664),
                c = l.n(s),
                d = l(11163),
                u = l.n(d),
                p = l(44950),
                h = l(50389),
                x = l(39986),
                g = l(76801),
                m = l(90083),
                f = l(39131);
            let v = e => {
                let {
                    cardData: t,
                    cardDataMob: l,
                    inx: r,
                    sectionTitle: s
                } = e, d = e => {
                    let {
                        image: t,
                        height: l,
                        width: r,
                        data: s,
                        sectionTitle: d
                    } = e, v = (0, a.Dv)(p.s1), j = (0, o.useMemo)(() => (0, g.Z)(t), [t]), y = () => {
                        let e = {
                            sectionTitle: (0, x.Z)(d, " ", "-").toLowerCase(),
                            slug: s.slug,
                            title: s.title,
                            elementType: "card",
                            pathname: u().asPath
                        };
                        (0, h.L9W)(h.Viw, e, v || void 0)
                    };
                    return j.url ? (0, i.jsx)(c(), {
                        href: "".concat(null == s ? void 0 : s.slug),
                        title: null == s ? void 0 : s.anchorTitle,
                        onClick: y,
                        children: (0, i.jsxs)(n.xu, {
                            css: {
                                borderRadius: "24px",
                                position: "relative",
                                marginBottom: "$2i",
                                "@lg": {
                                    borderRadius: "12px"
                                }
                            },
                            children: [(0, i.jsx)(f.Z, {
                                src: j.url,
                                alt: j.alt || "destination-grid-media-cards-".concat(null == s ? void 0 : s.slug),
                                height: l,
                                width: r,
                                style: {
                                    objectFit: "cover",
                                    borderRadius: "inherit"
                                }
                            }), (0, i.jsxs)(n.sg, {
                                css: {
                                    "@lg": {
                                        position: "absolute",
                                        bottom: "0px",
                                        padding: "12px 24px",
                                        width: "100%"
                                    }
                                },
                                children: [(0, i.jsx)(n.xv, {
                                    css: {
                                        fontFamily: "$manrope",
                                        fontSize: "$7i",
                                        lineHeight: "1.2",
                                        letterSpacing: "-0.3px",
                                        marginBottom: "6px",
                                        marginTop: "$5i",
                                        color: "$black2",
                                        fontWeight: "$bolder",
                                        "@lg": {
                                            color: "$white",
                                            fontSize: "$11i",
                                            lineHeight: "1.3",
                                            letterSpacing: " -0.25px",
                                            marginBottom: "8px"
                                        },
                                        "@smMax": {
                                            textAlign: "center"
                                        }
                                    },
                                    children: null == s ? void 0 : s.title
                                }), (0, i.jsx)(n.X2, {
                                    css: {
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        "@smMax": {
                                            display: "none"
                                        }
                                    },
                                    children: (0, i.jsxs)(n.xv, {
                                        css: {
                                            fontFamily: "$manrope",
                                            fontSize: "13px",
                                            lineHeight: "1.23",
                                            letterSpacing: "-0.25px",
                                            marginBottom: "4px",
                                            color: "$white"
                                        },
                                        children: ["From \xa0", (0, i.jsx)(m.Z, {
                                            value: null == s ? void 0 : s.price,
                                            defaultValue: "0"
                                        })]
                                    })
                                })]
                            })]
                        })
                    }) : null
                };
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(n.X2, {
                        css: {
                            width: "370px",
                            "@smMax": {
                                display: "none"
                            }
                        },
                        children: [0 == r || r && r - 3 == 0 ? (0, i.jsx)(n.xu, {
                            css: {
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "20px"
                            },
                            children: null == t ? void 0 : t.map((e, t) => (0, i.jsx)(o.Fragment, {
                                children: t < 3 ? (0, i.jsx)(d, {
                                    image: null == e ? void 0 : e.image,
                                    width: 0 == t ? 370 : 175,
                                    height: 190,
                                    data: e,
                                    sectionTitle: s
                                }, t) : null
                            }, "grid-items-".concat(t)))
                        }) : null, 1 == r || r && r - 3 == 1 ? (0, i.jsx)(n.xu, {
                            css: {
                                display: "flex",
                                flexWrap: "wrap"
                            },
                            children: null == t ? void 0 : t.map((e, t) => (0, i.jsx)(o.Fragment, {
                                children: (0, i.jsx)(d, {
                                    image: null == e ? void 0 : e.image,
                                    width: 370,
                                    height: 400,
                                    data: e,
                                    sectionTitle: s
                                }, t)
                            }, "grid-items-".concat(t)))
                        }) : null, 2 == r || r && r - 3 == 2 ? (0, i.jsx)(n.xu, {
                            css: {
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "20px"
                            },
                            children: null == t ? void 0 : t.map((e, t) => (0, i.jsx)(o.Fragment, {
                                children: (0, i.jsx)(d, {
                                    image: null == e ? void 0 : e.image,
                                    width: 370,
                                    height: 190,
                                    data: e,
                                    sectionTitle: s
                                }, t)
                            }, "grid-items-".concat(t)))
                        }) : null]
                    }), (0, i.jsx)(n.X2, {
                        css: {
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "$5i",
                            justifyContent: "space-between",
                            alignItems: "center",
                            "@lg": {
                                display: "none"
                            }
                        },
                        children: l && (null == l ? void 0 : l.length) > 0 ? null == l ? void 0 : l.map((e, t) => (0, i.jsx)(d, {
                            image: null == e ? void 0 : e.image,
                            width: 102,
                            height: 100,
                            data: e,
                            sectionTitle: s
                        }, t)) : null
                    })]
                })
            };
            var j = l(64598);
            let y = e => {
                var t, l;
                let {
                    componentData: o,
                    item: a,
                    sliderArrowBg: s,
                    sliderArrowColor: c,
                    sliderArrowBorderColor: d
                } = e, u = null == o ? void 0 : null === (t = o.gridCards) || void 0 === t ? void 0 : t.map(e => ({ ...e
                }));
                null === (l = u || []) || void 0 === l || l.sort((e, t) => (null == e ? void 0 : e.cardOrderId) - (null == t ? void 0 : t.cardOrderId));
                let p = function(e) {
                    let t = [];
                    for (let l = 0; l < (null == e ? void 0 : e.length);) 0 == l || 6 == l ? (t.push([null == e ? void 0 : e[l], null == e ? void 0 : e[l + 1], null == e ? void 0 : e[l + 2]]), l += 3) : 3 == l || 9 == l ? (t.push([e[l]]), l += 1) : 4 == l || 10 == l ? (t.push([null == e ? void 0 : e[l], null == e ? void 0 : e[l + 1]]), l += 2) : (t.push([null == e ? void 0 : e[l]]), l += 1);
                    return t
                }(u);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(n.xu, {
                        css: {
                            padding: "$20i 0 $20i 0",
                            "@smMax": {
                                display: "none"
                            }
                        },
                        children: (0, i.jsx)(j.default, {
                            sliderArrowBg: s,
                            sliderArrowColor: c,
                            sliderArrowBorderColor: d,
                            id: "".concat((0, r.l)(a.__component, a.title)),
                            componentData: a,
                            sliderConfig: {
                                breakpoints: {
                                    360: {
                                        slidesPerView: "auto",
                                        spaceBetween: 24,
                                        freeMode: !0
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        slidesPerGroup: 3,
                                        spaceBetween: 20,
                                        freeMode: !1
                                    }
                                }
                            },
                            transparentBg: !0,
                            titleElement: (0, i.jsxs)(n.sg, {
                                children: [(0, i.jsx)(n.xv, {
                                    css: {
                                        fontFamily: "$manrope",
                                        fontStyle: "normal",
                                        fontWeight: "$extraBold",
                                        fontSize: "17px",
                                        lineHeight: "$10i",
                                        textTransform: "uppercase",
                                        color: "$black2",
                                        "@lg": {
                                            fontSize: "$10i",
                                            lineHeight: "$15i",
                                            paddingBottom: "6px"
                                        }
                                    },
                                    children: null == a ? void 0 : a.title
                                }), (0, i.jsx)(n.xv, {
                                    css: {
                                        fontFamily: "$manrope",
                                        fontStyle: "normal",
                                        fontWeight: 600,
                                        fontSize: "$7i",
                                        lineHeight: "$9i",
                                        color: "$black2",
                                        "@lg": {
                                            fontSize: "$8i",
                                            lineHeight: "$10i",
                                            paddingBottom: "$10i"
                                        }
                                    },
                                    children: null == a ? void 0 : a.subtitle
                                })]
                            }),
                            children: null == p ? void 0 : p.map((e, t) => (0, i.jsx)(n.xu, {
                                css: {
                                    width: "370px"
                                },
                                children: (0, i.jsx)(v, {
                                    cardData: e,
                                    inx: t,
                                    sectionTitle: null == o ? void 0 : o.title
                                })
                            }, "destination-grid-".concat(t)))
                        })
                    }), (0, i.jsxs)(n.xu, {
                        css: {
                            padding: "$18i 0 $18i 0",
                            "@lg": {
                                display: "none"
                            }
                        },
                        children: [(0, i.jsxs)(n.sg, {
                            css: {
                                paddingBottom: "$16i"
                            },
                            children: [(0, i.jsx)(n.xv, {
                                css: {
                                    fontFamily: "$manrope",
                                    fontStyle: "normal",
                                    fontWeight: "$extraBold",
                                    fontSize: "$8i",
                                    lineHeight: "$10i",
                                    textAlign: "center",
                                    textTransform: "uppercase",
                                    color: "$black2",
                                    paddingBottom: "$2i"
                                },
                                children: null == a ? void 0 : a.title
                            }), (0, i.jsx)(n.xv, {
                                css: {
                                    fontFamily: "$manrope",
                                    fontStyle: "normal",
                                    fontWeight: 600,
                                    fontSize: "$7i",
                                    lineHeight: "$9i",
                                    textAlign: "center",
                                    color: "$black2",
                                    paddingTop: "$2i"
                                },
                                children: null == a ? void 0 : a.subtitle
                            })]
                        }), (0, i.jsx)(v, {
                            cardDataMob: u,
                            sectionTitle: null == o ? void 0 : o.title
                        })]
                    })]
                })
            };
            var b = o.memo(y)
        },
        39131: function(e, t, l) {
            var i = l(85893),
                n = l(87789),
                o = l(39396),
                r = l(25675),
                a = l.n(r),
                s = l(67294),
                c = l(68991);
            let d = e => {
                let {
                    src: t,
                    fallback: l = "https://images.pickyourtrail.com/image_placeholder_2eca9cbf61.png",
                    alt: r = "",
                    width: d,
                    height: u,
                    children: p,
                    isBg: h = !1,
                    wrapperRef: x,
                    fill: g = !1,
                    ...m
                } = e, [f, v] = (0, s.useState)(0), [j, y] = (0, s.useState)(0);
                (0, s.useEffect)(() => {
                    if (null == x ? void 0 : x.current) {
                        var e, t;
                        v(null == x ? void 0 : null === (e = x.current) || void 0 === e ? void 0 : e.offsetWidth), y(null == x ? void 0 : null === (t = x.current) || void 0 === t ? void 0 : t.offsetHeight)
                    }
                }, [x]);
                let b = (0, s.useMemo)(() => d ? Math.ceil(Number(d) / 3) : Math.ceil(Number(f) / 3), [d, f]),
                    $ = (0, s.useMemo)(() => u ? Math.ceil(Number(u) / 3) : Math.ceil(Number(j) / 3), [u, j]),
                    w = (0, s.useMemo)(() => "w=".concat(b, "&h=").concat($), [$, b]),
                    S = (0, s.useMemo)(() => {
                        let e = t.includes("?") ? "&" : "?";
                        return "".concat(t).concat(e).concat(w, "&blur=2")
                    }, [w, t]),
                    [Z, M] = (0, s.useState)(!1),
                    [F, C] = (0, s.useState)(!1),
                    B = (0, s.useMemo)(() => {
                        let e = {};
                        return d && (e = { ...e,
                            width: d
                        }), u && (e = { ...e,
                            height: u
                        }), g && (e = { ...e,
                            fill: !0
                        }), e
                    }, [g, u, d]),
                    z = (0, s.useMemo)(() => null == t ? void 0 : t.includes("time=1"), [t]),
                    L = (0, n.zo)(a(), {
                        filter: z ? "blur(10px)" : "unset"
                    });
                return (null == t ? void 0 : t.length) && !Z ? d || u || g || f > 0 && j > 0 ? F ? h ? (0, i.jsxs)(o.xu, {
                    style: {
                        position: "relative",
                        width: null != d ? d : f,
                        height: null != u ? u : j
                    },
                    children: [(0, i.jsx)(L, {
                        alt: r,
                        src: (0, c.Z)("".concat(t, "?w=").concat(null != d ? d : f, "&h=").concat(null != u ? u : j, "&format=auto"), ""),
                        onError: () => M(!0),
                        style: {
                            opacity: F ? 1 : 0,
                            transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                            position: "relative"
                        },
                        ...m,
                        placeholder: "blur",
                        blurDataURL: (0, c.Z)(S, "", 10, "1"),
                        ...B,
                        onLoadingComplete: () => {
                            C(!0)
                        }
                    }), (0, i.jsx)(o.xu, {
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            zIndex: 1
                        },
                        children: p
                    })]
                }) : (0, i.jsx)(a(), {
                    alt: r,
                    src: (0, c.Z)("".concat(t, "?w=").concat(null != d ? d : f, "&h=").concat(null != u ? u : j, "&format=auto"), ""),
                    onError: () => M(!0),
                    style: {
                        opacity: F ? 1 : 0,
                        transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out"
                    },
                    placeholder: "blur",
                    blurDataURL: (0, c.Z)(S, "", 10, "1"),
                    ...B,
                    onLoadingComplete: () => {
                        C(!0)
                    },
                    ...m
                }) : h ? (0, i.jsxs)(o.xu, {
                    style: {
                        position: "relative",
                        width: null != d ? d : f,
                        height: null != u ? u : j
                    },
                    children: [(0, i.jsx)(L, {
                        alt: r,
                        src: (0, c.Z)(S, "", 10, "1"),
                        onError: () => M(!0),
                        style: {
                            opacity: F ? 1 : 0,
                            transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                            position: "relative"
                        },
                        ...m,
                        placeholder: "blur",
                        blurDataURL: (0, c.Z)(S, "", 10, "1"),
                        ...B,
                        onLoadingComplete: () => {
                            C(!0)
                        }
                    }), (0, i.jsx)(o.xu, {
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            zIndex: 1
                        },
                        children: p
                    })]
                }) : (0, i.jsx)(a(), {
                    alt: r,
                    src: (0, c.Z)(S, "", 10, "1"),
                    onError: () => M(!0),
                    style: {
                        opacity: F ? 0 : 1,
                        transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out"
                    },
                    placeholder: "blur",
                    blurDataURL: (0, c.Z)(S, "", 10, "1"),
                    ...B,
                    onLoadingComplete: () => {
                        C(!0)
                    },
                    ...m
                }) : null : h ? (0, i.jsx)(a(), {
                    alt: "",
                    src: (0, c.Z)(l, "", 10, "1"),
                    ...B,
                    ...m,
                    children: p
                }) : (0, i.jsx)(a(), {
                    alt: "",
                    src: (0, c.Z)(l, "", 10, "1"),
                    ...B,
                    ...m
                })
            };
            t.Z = s.memo(d)
        },
        39986: function(e, t, l) {
            l.d(t, {
                Z: function() {
                    return n
                }
            });
            var i = l(78449);

            function n() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "_",
                    l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : " ";
                return (0, i.Z)((e || "").toLowerCase().split(t).join(l))
            }
        },
        68315: function(e, t, l) {
            var i = l(85893);
            l(67294);
            var n = l(95843),
                o = l(87789);
            let r = (0, o.zo)(n.Z),
                a = e => {
                    let {
                        fill: t,
                        ...l
                    } = e;
                    return (0, i.jsx)(r, {
                        css: {
                            fill: t
                        },
                        ...l
                    })
                };
            t.Z = a
        },
        95843: function(e, t, l) {
            var i = l(85893);
            l(67294), t.Z = function(e) {
                return (0, i.jsx)("svg", {
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 16 16",
                    ...e,
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M10.836 2.13a.5.5 0 00-.706.034l-5 5.5a.5.5 0 000 .672l5 5.5a.5.5 0 10.74-.672L6.176 8l4.694-5.164a.5.5 0 00-.034-.706z",
                        clipRule: "evenodd"
                    })
                })
            }
        }
    }
]);