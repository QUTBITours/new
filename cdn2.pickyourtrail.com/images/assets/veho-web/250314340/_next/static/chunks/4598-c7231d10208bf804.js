"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4598], {
        64598: function(e, i, n) {
            n.r(i), n.d(i, {
                default: function() {
                    return g
                }
            });
            var l, s, t = n(85893),
                a = n(87789),
                o = n(68315),
                d = n(39864),
                r = n(39396),
                c = n(99304),
                p = n(2261);
            n(67294);
            let u = e => {
                let {
                    width: i,
                    height: n,
                    fill: l
                } = e;
                return (0, t.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: null != i ? i : 16,
                    height: null != n ? n : 16,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    children: (0, t.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M11.2055 1.39412C11.5031 1.72885 11.5031 2.27157 11.2055 2.6063L6.41093 8.00021L11.2055 13.3941C11.5031 13.7289 11.5031 14.2716 11.2055 14.6063C10.908 14.941 10.4256 14.941 10.128 14.6063L4.79469 8.6063C4.49715 8.27156 4.49715 7.72885 4.79469 7.39412L10.128 1.39412C10.4256 1.05938 10.908 1.05938 11.2055 1.39412Z",
                        fill: null != l ? l : "#754513"
                    })
                })
            };
            var x = n(40622);
            (l = s || (s = {})).middle = "middle", l.bottom = "bottom", l.top = "top", l.cardCenter = "cardCenter";
            let h = e => {
                var i, n, l, s, h, g, w;
                let {
                    componentData: v,
                    sliderConfig: m,
                    children: f,
                    titleElement: b,
                    sliderArrowPosition: j = "top",
                    swiperContainerHeight: y,
                    sliderArrowMobile: C,
                    id: k = "",
                    transparentBg: $,
                    hideSliderArrow: F,
                    isUncosted: L,
                    mobileTitleCenter: N = !1,
                    sliderArrowBg: E,
                    sliderArrowBorderColor: I,
                    listingFlow: R = !1,
                    sliderArrowColor: Z = "#754513",
                    loop: z = !1,
                    sliderArrowMargin: M,
                    isCarMaxHeight: _ = !1,
                    sliderArrowWrapperCss: P,
                    iscontentWrapper: W,
                    isTabsFilter: B = !1
                } = e, S = v && v.fluidLayout && ((null == v ? void 0 : v.backgroundImage) || (null == v ? void 0 : v.backgroundColor)), T = (0, a.zo)(r.xu, {
                    ".swiper-nav-elements.swiper-button-disabled": {
                        cursor: "not-allowed",
                        pointerEvents: "visible"
                    },
                    "& .swiper-nav-elements": {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "$round",
                        backgroundColor: E || "#FCF3E9",
                        width: "34px",
                        height: "34px",
                        color: "$black",
                        fontWeight: "$extraBold",
                        textAlign: "center",
                        marginTop: 0,
                        cursor: "pointer",
                        border: "1px solid ".concat(I || "#E5D5C2"),
                        "&:after": {
                            fontSize: "14px"
                        }
                    },
                    "& .swiper-button-disabled": {
                        opacity: .35
                    },
                    "& .swiper-slide": {
                        backgroundColor: (null == v ? void 0 : v.transparentBg) || $ ? "transparent" : "$white",
                        overflow: "hidden",
                        height: _ ? "auto" : "inherit",
                        width: "auto"
                    },
                    "@lg": {
                        "& .swiper-slide": {
                            width: "100%"
                        }
                    },
                    "@smMax": {
                        marginLeft: "-".concat((null == v ? void 0 : v.fluidLayout) ? 0 : null !== (n = null == v ? void 0 : v.pagePadding) && void 0 !== n ? n : 16, "px"),
                        marginRight: "-".concat((null == v ? void 0 : v.fluidLayout) ? 0 : null !== (l = null == v ? void 0 : v.pagePadding) && void 0 !== l ? l : 16, "px"),
                        "swiper-wrapper": {
                            alignItems: "center"
                        },
                        "& .swiper-slide": {
                            width: "auto",
                            alignSelf: _ ? "stretch" : "center"
                        },
                        "& .swiper-slide:first-child": {
                            paddingLeft: "".concat(_ ? 16 : (null == v ? void 0 : v.fluidLayout) && !S ? 0 : null !== (s = null == v ? void 0 : v.pagePadding) && void 0 !== s ? s : 16, "px")
                        },
                        "& .swiper-slide:last-child": {
                            paddingRight: "".concat(_ ? 16 : (null == v ? void 0 : v.fluidLayout) && !S ? 0 : null !== (h = null == v ? void 0 : v.pagePadding) && void 0 !== h ? h : 16, "px")
                        }
                    }
                });
                return (0, t.jsxs)(T, {
                    children: [b ? (0, t.jsxs)(r.X2, {
                        css: {
                            justifyContent: "".concat(!1 == N && "top" == j ? "space-between" : "start"),
                            alignItems: "center",
                            paddingLeft: "".concat((null == v ? void 0 : v.fluidLayout) ? 16 : null !== (g = null == v ? void 0 : v.pagePadding) && void 0 !== g ? g : 16, "px"),
                            paddingRight: "".concat((null == v ? void 0 : v.fluidLayout) ? 16 : null !== (w = null == v ? void 0 : v.pagePadding) && void 0 !== w ? w : 16, "px"),
                            marginBottom: B ? 0 : C ? "$12i" : "$10i",
                            "@lg": {
                                padding: 0
                            }
                        },
                        children: [(0, t.jsx)(r.xu, {
                            css: {
                                maxWidth: "100%",
                                "@lg": {
                                    maxWidth: "80%"
                                }
                            },
                            children: b ? (0, t.jsx)(t.Fragment, {
                                children: b
                            }) : (0, t.jsx)(r.xv, {
                                css: {
                                    fontSize: "$10i",
                                    fontWeight: "$bold",
                                    lineHeight: "$14i",
                                    color: "$grey12",
                                    fontFamily: "$sans",
                                    "@lg": {
                                        fontSize: "$12i",
                                        lineHeight: "$18i"
                                    }
                                },
                                children: null == v ? void 0 : v.title
                            })
                        }), !0 !== F && "top" == j && (0, t.jsxs)(r.xu, {
                            css: {
                                gap: "$4i",
                                display: "flex",
                                "@smMax": {
                                    display: "".concat(C ? "flex" : "none")
                                }
                            },
                            children: [(0, t.jsx)(r.xu, {
                                className: "swiper-nav-elements swiper-nav-prev-".concat(k),
                                css: {
                                    backgroundColor: E || "#FCF3E9",
                                    borderRadius: "$round",
                                    width: "34px",
                                    height: "34px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    cursor: "pointer",
                                    border: "1px solid rgb(229, 213, 194)"
                                },
                                children: (0, t.jsx)(u, {
                                    width: 14,
                                    height: 14,
                                    fill: Z
                                })
                            }), (0, t.jsx)(r.xu, {
                                className: "swiper-nav-elements swiper-nav-next-".concat(k),
                                css: {
                                    backgroundColor: E || "#FCF3E9",
                                    borderRadius: "$round",
                                    width: "34px",
                                    height: "34px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    cursor: "pointer",
                                    border: "1px solid rgb(229, 213, 194)"
                                },
                                children: (0, t.jsx)(x.Z, {
                                    width: 14,
                                    height: 14,
                                    fill: Z || "#54513"
                                })
                            })]
                        })]
                    }) : null, (0, t.jsxs)(r.xu, {
                        css: {
                            "@lg": {
                                height: "".concat(y),
                                display: "".concat(y && "flex"),
                                alignItems: "".concat(y && "center"),
                                position: "relative"
                            }
                        },
                        children: [(0, t.jsx)(p.tq, {
                            cssMode: !0,
                            navigation: {
                                prevEl: ".swiper-nav-prev-".concat(k),
                                nextEl: ".swiper-nav-next-".concat(k)
                            },
                            ...m,
                            className: "swiper",
                            loop: z,
                            pagination: !!L,
                            modules: [c.W_, c.pt, c.tl],
                            children: null === (i = f || []) || void 0 === i ? void 0 : i.map((e, i) => (0, t.jsx)(p.o5, {
                                className: (null == v ? void 0 : v.__component) == "widgets.slider-for-small-cards" ? "smallCard" : "wideCard",
                                children: e
                            }, i))
                        }), !0 !== F && "cardCenter" == j && (0, t.jsx)(r.xu, {
                            className: "swiper-nav",
                            css: { ...P,
                                width: "100%",
                                display: "flex",
                                position: "absolute",
                                justifyContent: "space-between",
                                top: 0,
                                height: "100%",
                                alignItems: "center",
                                "@smMax": {
                                    display: "".concat(C ? "flex" : "none")
                                }
                            },
                            children: (0, t.jsxs)(r.xu, {
                                css: {
                                    gap: "$4i",
                                    display: "flex",
                                    width: "100%",
                                    justifyContent: "space-between"
                                },
                                children: [(0, t.jsx)(r.xu, {
                                    className: "swiper-nav-elements swiper-nav-prev-".concat(k),
                                    css: {
                                        marginLeft: null != M ? M : "60px",
                                        zIndex: 2
                                    },
                                    children: (0, t.jsx)(o.Z, {
                                        css: {
                                            height: 18,
                                            width: 18,
                                            display: "inline-block"
                                        }
                                    })
                                }), (0, t.jsx)(r.xu, {
                                    className: "swiper-nav-elements swiper-nav-next-".concat(k),
                                    css: {
                                        marginRight: null != M ? M : "60px",
                                        zIndex: 2
                                    },
                                    children: (0, t.jsx)(d.Z, {
                                        css: {
                                            height: 18,
                                            width: 18,
                                            display: "inline-block"
                                        }
                                    })
                                })]
                            })
                        })]
                    }), !0 !== F && "bottom" == j && (0, t.jsx)(r.xu, {
                        css: { ...P,
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "$12i",
                            "@smMax": {
                                display: "".concat(C ? "flex" : "none")
                            }
                        },
                        children: (0, t.jsxs)(r.xu, {
                            css: {
                                gap: "$4i",
                                display: "flex",
                                marginTop: "-35px"
                            },
                            children: [(0, t.jsx)(r.xu, {
                                className: "swiper-nav-elements swiper-nav-prev-".concat(k),
                                css: {
                                    backgroundColor: E || "#FCF3E9"
                                },
                                children: (0, t.jsx)(o.Z, {
                                    css: {
                                        height: 18,
                                        width: 18,
                                        display: "inline-block",
                                        backgroundColor: E || "#FCF3E9"
                                    }
                                })
                            }), (0, t.jsx)(r.xu, {
                                className: "swiper-nav-elements swiper-nav-next-".concat(k),
                                css: {
                                    backgroundColor: E || "#FCF3E9"
                                },
                                children: (0, t.jsx)(d.Z, {
                                    css: {
                                        height: 18,
                                        width: 18,
                                        display: "inline-block",
                                        backgroundColor: E || "#FCF3E9"
                                    }
                                })
                            })]
                        })
                    }), !0 !== F && "middle" == j && (0, t.jsx)(r.xu, {
                        className: "swiper-nav",
                        css: { ...P,
                            width: R ? "fit-content" : "100%",
                            display: "flex",
                            position: "absolute",
                            top: "50%",
                            zIndex: 2,
                            justifyContent: "space-between",
                            "@smMax": {
                                display: "".concat(C ? "flex" : "none")
                            }
                        },
                        children: (0, t.jsxs)(r.xu, {
                            css: {
                                gap: "$4i",
                                display: "flex",
                                width: "100%",
                                justifyContent: "space-between",
                                "@lg": {
                                    width: W ? "75% !important" : "100%"
                                }
                            },
                            children: [(0, t.jsx)(r.xu, {
                                className: "swiper-nav-elements swiper-nav-prev-".concat(k),
                                css: {
                                    marginLeft: null != M ? M : "60px"
                                },
                                children: (0, t.jsx)(o.Z, {
                                    css: {
                                        height: 18,
                                        width: 18,
                                        display: "inline-block"
                                    }
                                })
                            }), (0, t.jsx)(r.xu, {
                                className: "swiper-nav-elements swiper-nav-next-".concat(k),
                                css: {
                                    marginRight: null != M ? M : "60px"
                                },
                                children: (0, t.jsx)(d.Z, {
                                    css: {
                                        height: 18,
                                        width: 18,
                                        display: "inline-block"
                                    }
                                })
                            })]
                        })
                    })]
                })
            };
            var g = h
        }
    }
]);