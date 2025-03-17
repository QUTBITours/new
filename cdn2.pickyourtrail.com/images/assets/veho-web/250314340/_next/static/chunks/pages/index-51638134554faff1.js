(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405, 2739, 4035], {
        48312: function(i, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return t(88343)
            }])
        },
        64910: function(i, e, t) {
            "use strict";
            var n = t(85893),
                a = t(87789),
                o = t(39396),
                l = t(70024),
                s = t(5152),
                r = t.n(s),
                c = t(67294),
                d = t(44950),
                u = t(68991),
                g = t(70466),
                p = t(39131);
            let m = r()(() => Promise.resolve().then(t.bind(t, 22004)), {
                    loadableGenerated: {
                        webpack: () => [22004]
                    },
                    ssr: !1
                }),
                h = (0, a.zo)(o.xu, {
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    "@lg": {
                        height: "inherit"
                    },
                    ".video-player video": {
                        width: "100%",
                        height: "100%",
                        zIndex: 1,
                        opacity: 1,
                        transition: "opacity .25s cubic-bezier(.05,0,0,1)",
                        objectFit: "cover",
                        position: "absolute"
                    }
                }),
                v = i => {
                    let {
                        bannerMedia: e,
                        fallbackImage: t
                    } = i, [a, s] = (0, c.useState)(!0), r = (0, l.Dv)(d.bW), v = (0, c.useRef)(null), x = () => {
                        let i = document.getElementsByClassName("react-player__play-icon")[0];
                        i && (null == i || i.click())
                    };

                    function k() {
                        return window.innerWidth
                    }(0, c.useEffect)(() => {
                        x()
                    }, []);
                    let [y, f] = (0, c.useState)(k());
                    return (0, c.useEffect)(() => {
                        let i = () => {
                            f(k())
                        };
                        return window.addEventListener("resize", i), () => {
                            window.removeEventListener("resize", i)
                        }
                    }, []), (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsxs)(h, {
                            ref: v,
                            children: [t.url ? (0, n.jsx)(o.xu, {
                                css: {
                                    width: "100%",
                                    height: "100%",
                                    position: "absolute",
                                    opacity: a ? 0 : 1,
                                    "@lg": {
                                        width: "100%",
                                        height: "480px"
                                    }
                                },
                                children: (0, n.jsx)(p.Z, {
                                    src: (null == r ? void 0 : r.isMobile) ? "".concat(t.url, "?h=300&w=375&auto=format&fit=crop") : "".concat(t.url, "?h=480&w=1280&auto=format&fit=crop"),
                                    alt: (null == t ? void 0 : t.alt) || "Pickyourtrail",
                                    priority: !0,
                                    fill: !0,
                                    style: {
                                        objectFit: "cover"
                                    },
                                    wrapperRef: v
                                })
                            }) : null, (0, n.jsx)(m, {
                                url: "".concat(e, "?w=").concat(y, "&h=").concat((0, g.Z)() ? 368 : 480),
                                playing: !0,
                                loop: !0,
                                width: "inherit",
                                height: "inherit",
                                className: "video-player",
                                muted: !0,
                                playsinline: !0,
                                fallback: (0, n.jsx)(p.Z, {
                                    src: (0, u.Z)("".concat(e, "?time=1")),
                                    alt: "pyt-banner" + (null == e ? void 0 : e.slice(20)),
                                    fill: !0,
                                    style: {
                                        objectFit: "cover"
                                    },
                                    wrapperRef: v
                                })
                            }), (0, n.jsx)(p.Z, {
                                src: (0, u.Z)("".concat(e, "?time=1")),
                                alt: "pyt-banner" + (null == e ? void 0 : e.slice(20)),
                                fill: !0,
                                style: {
                                    objectFit: "cover"
                                },
                                wrapperRef: v
                            })]
                        })
                    })
                };
            e.Z = v
        },
        42739: function(i, e, t) {
            "use strict";
            t.r(e);
            var n = t(85893),
                a = t(9008),
                o = t.n(a),
                l = t(11163),
                s = t(67294),
                r = t(51869),
                c = t(27894),
                d = t(88116);
            let u = i => {
                var e;
                let {
                    title: t = "Pickyourtrail",
                    metaTitle: a,
                    description: u = "",
                    ogImage: g,
                    keywords: p,
                    canonicalURL: m,
                    crawlable: h = !0,
                    slug: v,
                    metaRobots: x,
                    locales: k,
                    addWebPageSchema: y,
                    addOrganisationSchema: f,
                    uncostedItinerary: b = !1,
                    otherWebPageSchema: j
                } = i, w = (0, l.useRouter)(), $ = (0, c.Z)({
                    router: w
                }), P = (0, s.useMemo)(() => ({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    name: t,
                    description: u,
                    publisher: {
                        "@type": "Organization",
                        name: "Pickyourtrail"
                    },
                    license: "http://creativecommons.org/licenses/by-nc-sa/3.0/us/deed.en_US"
                }), [u, t]);
                return (0, n.jsxs)(o(), {
                    children: [y ? (0, n.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: "".concat(JSON.stringify(P))
                        }
                    }) : null, (0, n.jsx)("link", {
                        rel: "canonical",
                        href: (null == m ? void 0 : m.includes("https://")) ? "".concat(m) : "".concat(d.X.domain_url).concat("".concat($ ? "".concat($, "/") : "").concat(m || (null === (e = v.split("?")) || void 0 === e ? void 0 : e[0])))
                    }), (0, n.jsx)("title", {
                        children: t || a || "Pickyourtrail"
                    }), (0, n.jsx)("meta", {
                        name: "description",
                        content: u || "Pickyourtrail"
                    }, "description"), p ? (0, n.jsx)("meta", {
                        name: "keywords",
                        content: p
                    }, "keywords") : null, (0, n.jsx)("meta", {
                        property: "og:url",
                        content: "".concat(d.X.domain_url).concat(v)
                    }), (0, n.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0, maximum-scale=5.0"
                    }, "viewport"), (0, n.jsx)("meta", {
                        property: "og:title",
                        content: a || t || "Pickyourtrail"
                    }), (0, n.jsx)("meta", {
                        property: "og:description",
                        content: u || "Pickyourtrail"
                    }), g ? (0, n.jsx)("meta", {
                        property: "og:image",
                        content: "".concat(null === d.X || void 0 === d.X ? void 0 : d.X.imgix_base).concat(g, "?w=1200&h=630")
                    }) : null, (0, r.Z)({
                        pathname: v,
                        locale: w.locale,
                        supportedLocales: k,
                        uncostedItinerary: b,
                        canonicalURL: m
                    }), (0, n.jsx)("meta", {
                        name: "robots",
                        content: h ? x || "index, follow" : "noindex, follow"
                    }, "robots"), (0, n.jsx)("meta", {
                        property: "og:type",
                        content: "website"
                    }), "/" === v ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("meta", {
                            name: "google-site-verification",
                            content: "AjUKOjLvjAT8Px8y5vl6m35LJjOIJZ6VaBVs2t27TJ4"
                        }, "google-site-verification"), (0, n.jsx)("meta", {
                            name: "facebook-domain-verification",
                            content: "ahiteq3281aq7fjezv8rxwzsu781y1"
                        }, "facebook-domain-verification")]
                    }) : null, f ? (0, n.jsx)("script", {
                        defer: !0,
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: '{\n            "@context": "https://schema.org",\n            "@type": "Organization",\n            "url": "https://pickyourtrail.com/",\n            "logo": "https://images.pickyourtrail.com/images/web_app/logo/pickyourtrail-logo.svg",\n            "sameAs": [\n              "https://www.facebook.com/pg/Pickyourtrail/reviews/",\n              "https://instagram.com/pickyourtrail",\n              "https://twitter.com/@pickyourtrail",\n              "https://in.linkedin.com/company/pickyourtrail"\n              ]\n          }\n      '
                        }
                    }) : null, j ? (0, n.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: "".concat(JSON.stringify(j))
                        }
                    }) : null]
                })
            };
            e.default = u
        },
        26202: function(i, e, t) {
            "use strict";
            var n = t(85893),
                a = t(67294),
                o = t(76801),
                l = t(22416),
                s = t(42739);
            let r = i => {
                let {
                    data: e,
                    preview: t,
                    slug: r,
                    collectionName: c,
                    addWebPageSchema: d,
                    addOrganisationSchema: u
                } = i, {
                    title: g,
                    description: p,
                    ogImage: m,
                    keywords: h,
                    canonicalURL: v,
                    crawlable: x = !0,
                    metaRobots: k
                } = (0, a.useMemo)(() => {
                    let i = (0, o.Z)((0, l.Z)(e, "metaImage", null)),
                        n = (0, l.Z)(e, "crawlable");
                    return t ? n = !1 : !1 !== n && (n = !0), {
                        title: (0, l.Z)(e, "metaTitle", null),
                        description: (0, l.Z)(e, "metaDescription", null),
                        keywords: (0, l.Z)(e, "keywords", null),
                        canonicalURL: (0, l.Z)(e, "canonicalURL", null),
                        ogImage: null == i ? void 0 : i.url,
                        crawlable: n,
                        metaRobots: (0, l.Z)(e, "metaRobots", null)
                    }
                }, [e, t]);
                if (!e) return null;
                let y = g.includes("Pickyourtrail") ? g : g.concat(" | Pickyourtrail");
                return (0, n.jsx)(s.default, {
                    title: y,
                    metaTitle: g,
                    description: p,
                    ogImage: m,
                    keywords: h,
                    canonicalURL: v,
                    crawlable: x,
                    slug: r,
                    metaRobots: k,
                    locales: "" === r ? ["in", "us", "ae"] : c ? ["how-to-reaches", "visa-guidelines"].includes(c) ? ["in"] : ["in", "us", "ae"] : ["in"],
                    addWebPageSchema: d,
                    addOrganisationSchema: u
                })
            };
            e.Z = r
        },
        42435: function(i, e, t) {
            "use strict";
            t.d(e, {
                Z: function() {
                    return z
                }
            });
            var n = t(85893),
                a = t(87789),
                o = t(11163),
                l = t.n(o),
                s = t(67294),
                r = t(24636),
                c = t(39396),
                d = t(70024),
                u = t(41664),
                g = t.n(u),
                p = t(44950),
                m = t(50389),
                h = t(39986);
            let v = i => {
                let {
                    bannerTitle: e,
                    searchPlaceHolder: t
                } = i, o = (0, d.Dv)(p.s1), u = (0, a.zo)(g(), {}), v = (0, a.zo)(c.xu, {
                    width: "100%",
                    "@lg": {
                        width: "400px",
                        paddingTop: "$5i"
                    },
                    ".home-search-button": {
                        border: "3px solid transparent",
                        borderRadius: "12px",
                        position: "relative",
                        backgroundClip: "padding-box",
                        boxShadow: "0px 4px 27px rgba(26, 33, 43, 0.1)",
                        "&:before": {
                            content: "",
                            position: "absolute",
                            inset: "-4px",
                            borderRadius: "20px",
                            padding: "3px",
                            background: "linear-gradient($colors$jcustom60, $colors$jcustom61)"
                        },
                        ".search-text-input": {
                            backgroundColor: "$white",
                            flex: 1,
                            zIndex: 1,
                            width: "100%",
                            height: "100%",
                            alignItems: "center",
                            padding: "0 18px",
                            borderRadius: "16px"
                        }
                    }
                }), x = () => {
                    let i = {
                        sectionTitle: (0, h.Z)("Banner section", " ", "-").toLowerCase(),
                        slug: "/customize",
                        title: "Customize",
                        elementType: "Banner",
                        pathname: l().asPath
                    };
                    (0, m.L9W)(m.JeL, i, o || void 0)
                }, k = i => {
                    var e, t, a, o, l;
                    let {
                        item: s
                    } = i;
                    return (0, n.jsxs)(c.xu, {
                        as: "span",
                        css: {
                            fontFamily: "".concat((null == s ? void 0 : s.fontFamily) === "Amithen" ? "$amithen" : "$manrope"),
                            fontStyle: "normal",
                            fontWeight: "".concat(null !== (e = null == s ? void 0 : s.fontWeightMobile) && void 0 !== e ? e : 700),
                            fontSize: "".concat(null !== (t = null == s ? void 0 : s.fontSizeMobile) && void 0 !== t ? t : "$9i"),
                            lineHeight: "$13i",
                            whiteSpace: (null == s ? void 0 : s.fontFamily) === "Amithen" ? "nowrap" : "normal",
                            color: "".concat((null == s ? void 0 : s.fontFamily) === "Amithen" ? "$primary13" : null !== (a = null == s ? void 0 : s.fontColor) && void 0 !== a ? a : "$white"),
                            textAlign: "center",
                            "@lg": {
                                lineHeight: "$24i",
                                fontWeight: "".concat(null !== (o = null == s ? void 0 : s.fontWeight) && void 0 !== o ? o : 700),
                                fontSize: "".concat(null !== (l = null == s ? void 0 : s.fontSize) && void 0 !== l ? l : "$18i")
                            }
                        },
                        children: [null == s ? void 0 : s.title, "\xa0"]
                    })
                };
                return (0, n.jsxs)(c.xu, {
                    css: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        "@smMax": {
                            padding: "0 $14i 0 $14i"
                        }
                    },
                    children: [(0, n.jsx)(c.xu, {
                        as: "h1",
                        css: {
                            textAlign: "center",
                            paddingBottom: "$12i",
                            lineHeight: 1,
                            "@lg": {
                                paddingBottom: "0",
                                margin: "$8i"
                            }
                        },
                        children: null == e ? void 0 : e.map((i, e) => (0, n.jsx)(s.Fragment, {
                            children: (0, n.jsx)(k, {
                                item: i
                            })
                        }, e))
                    }), t ? (0, n.jsx)(v, {
                        children: (0, n.jsx)(u, {
                            className: "home-search",
                            href: "/customize",
                            onClick: x,
                            css: {
                                textDecoration: "none",
                                display: "flex"
                            },
                            children: (0, n.jsx)(c.X2, {
                                align: "center",
                                justify: "center",
                                className: "home-search-button",
                                css: {
                                    display: "flex",
                                    background: "$white",
                                    borderRadius: "12px",
                                    color: "$black2",
                                    textDecoration: "none",
                                    flex: 1,
                                    height: "56px"
                                },
                                children: (0, n.jsxs)(c.X2, {
                                    className: "search-text-input",
                                    css: {
                                        gap: "$5i"
                                    },
                                    children: [(0, n.jsx)(r.Z, {
                                        fill: "$black2",
                                        fontSize: 18
                                    }), (0, n.jsx)(c.xv, {
                                        css: {
                                            fontWeight: "$bolder",
                                            fontSize: "$7i",
                                            lineHeight: "$11i",
                                            textDecoration: "none",
                                            color: "$black2",
                                            fontFamily: "$manrope",
                                            "@lg": {
                                                fontWeight: "$bolder",
                                                fontSize: "$8i",
                                                lineHeight: "$12i"
                                            }
                                        },
                                        children: t
                                    })]
                                })
                            })
                        })
                    }) : null]
                })
            };
            var x = t(97083),
                k = t(25675),
                y = t.n(k),
                f = t(68991);
            let b = i => {
                let {
                    tustedData: e
                } = i, t = (0, d.Dv)(p.bW), a = i => {
                    let {
                        width: e,
                        height: t
                    } = i;
                    return (0, n.jsx)(c.xu, {
                        css: {
                            display: "flex",
                            alignItems: "center",
                            "& svg": {
                                fill: "$primary05"
                            }
                        },
                        children: (0, n.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: null != e ? e : 20,
                            height: null != t ? t : 20,
                            viewBox: "0 0 24 24",
                            children: (0, n.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M16.6179 8.21372C17.0521 8.55494 17.1276 9.18359 16.7864 9.61786L11.2864 16.6179C11.1216 16.8276 10.8798 16.9628 10.6148 16.9934C10.3499 17.0241 10.0836 16.9475 9.87534 16.7809L7.37534 14.7809C6.94408 14.4359 6.87416 13.8066 7.21917 13.3753C7.56418 12.9441 8.19347 12.8742 8.62473 13.2192L10.337 14.589L15.2137 8.38222C15.5549 7.94795 16.1836 7.87251 16.6179 8.21372ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z"
                            })
                        })
                    })
                };
                return (0, n.jsx)(c.xu, {
                    css: {
                        backgroundColor: "$black"
                    },
                    children: (0, n.jsx)(c.X2, {
                        css: {
                            paddingTop: "$7i",
                            paddingBottom: "$7i",
                            justifyContent: "center",
                            gap: "74px",
                            paddingLeft: "$8i",
                            paddingRight: "$8i",
                            "@smMax": {
                                paddingTop: "9px",
                                paddingBottom: "9px",
                                justifyContent: "space-around",
                                gap: "24px"
                            }
                        },
                        children: null == e ? void 0 : e.map((i, e) => {
                            var o, l, r, d, u, g;
                            return (0, n.jsx)(s.Fragment, {
                                children: (0, n.jsxs)(c.X2, {
                                    css: {
                                        alignItems: "center",
                                        gap: "4px",
                                        "@smMax": {
                                            display: "".concat(e > 1 && "none")
                                        }
                                    },
                                    children: [(0, n.jsx)(c.xu, {
                                        children: (null == i ? void 0 : null === (o = i.image) || void 0 === o ? void 0 : null === (l = o.data) || void 0 === l ? void 0 : null === (r = l.attributes) || void 0 === r ? void 0 : r.url) && (0, n.jsx)(y(), {
                                            src: (0, f.Z)((null == i ? void 0 : null === (d = i.image) || void 0 === d ? void 0 : null === (u = d.data) || void 0 === u ? void 0 : null === (g = u.attributes) || void 0 === g ? void 0 : g.url) || ""),
                                            alt: "trust-media",
                                            height: (null == t ? void 0 : t.isMobile) ? 16 : 24,
                                            width: (null == t ? void 0 : t.isMobile) ? 26 : 39
                                        })
                                    }), (0, n.jsx)(c.xv, {
                                        css: {
                                            color: "$white",
                                            fontFamily: "$manrope",
                                            fontStyle: "normal",
                                            fontWeight: 700,
                                            fontSize: "$7i",
                                            lineHeight: "$9i",
                                            "@lg": {
                                                fontSize: "$8i",
                                                lineHeight: "$9i"
                                            }
                                        },
                                        children: null == i ? void 0 : i.subTitle
                                    }), (null == i ? void 0 : i.icon) === "Star" && (0, n.jsx)(x.Z, {
                                        css: {
                                            width: "$8i",
                                            height: "$8i",
                                            fill: "$primary05",
                                            "@lg": {
                                                width: "$10i",
                                                height: "$10i"
                                            }
                                        }
                                    }), (null == i ? void 0 : i.icon) === "Percentage" && (0, n.jsxs)(s.Fragment, {
                                        children: [(0, n.jsx)(c.xu, {
                                            css: {
                                                display: "flex",
                                                "@lg": {
                                                    display: "none"
                                                }
                                            },
                                            children: (0, n.jsx)(a, {
                                                width: 16,
                                                height: 16
                                            })
                                        }), (0, n.jsx)(c.xu, {
                                            css: {
                                                display: "flex",
                                                "@smMax": {
                                                    display: "none"
                                                }
                                            },
                                            children: (0, n.jsx)(a, {})
                                        })]
                                    }), (0, n.jsx)(c.xv, {
                                        css: {
                                            color: "$white",
                                            fontFamily: "$manrope",
                                            fontStyle: "normal",
                                            fontWeight: 700,
                                            fontSize: "$7i",
                                            lineHeight: "$9i",
                                            "@lg": {
                                                fontSize: "$8i",
                                                lineHeight: "$9i"
                                            }
                                        },
                                        children: null == i ? void 0 : i.tiltle
                                    })]
                                }, e)
                            }, "title-".concat(e))
                        })
                    })
                })
            };
            var j = t(53041),
                w = t(76801),
                $ = t(64910),
                P = t(39131);
            let S = i => {
                    let {
                        children: e,
                        bannerMedia: t,
                        fallbackImage: a,
                        mobBannerImage: o,
                        videoLink: l,
                        videoDesktopLink: r,
                        isVideo: u
                    } = i, g = (0, d.Dv)(p.bW), m = (0, s.useMemo)(() => (0, w.Z)(t), [t]), h = (0, s.useMemo)(() => (0, w.Z)(o), [o]), v = (0, s.useMemo)(() => (0, w.Z)(a), [a]);
                    return (0, n.jsxs)(c.sg, {
                        css: {
                            position: "relative",
                            height: "368px",
                            width: "100%",
                            overflow: "hidden",
                            "@lg": {
                                height: "480px",
                                width: "".concat(u && "100%")
                            }
                        },
                        children: [u ? (0, n.jsx)($.Z, {
                            bannerMedia: (null == g ? void 0 : g.isMobile) || !r ? l : r,
                            fallbackImage: {
                                url: v.url,
                                alt: v.alt
                            }
                        }) : (0, n.jsx)(P.Z, {
                            src: (null == g ? void 0 : g.isMobile) && (null == h ? void 0 : h.url.length) > 0 ? h.url : m.url,
                            alt: m.alt || "banner-image-mob",
                            priority: !0,
                            fill: !0,
                            style: {
                                objectFit: "cover"
                            }
                        }), e]
                    })
                },
                T = i => {
                    var e, t, l, r;
                    let {
                        data: c
                    } = i, d = (0, o.useRouter)(), u = (0, s.useMemo)(() => {
                        var i;
                        return "".concat(null == d ? void 0 : null === (i = d.query) || void 0 === i ? void 0 : i.preview)
                    }, [null == d ? void 0 : d.query]), g = (0, s.useMemo)(() => {
                        var i, e, t, n;
                        return ((null === (i = (null == c ? void 0 : null === (e = c.bannerMedia) || void 0 === e ? void 0 : e.videoLink) || "") || void 0 === i ? void 0 : i.length) > 0 || (null === (t = (null == c ? void 0 : null === (n = c.bannerMedia) || void 0 === n ? void 0 : n.videoDesktopLink) || "") || void 0 === t ? void 0 : t.length) > 0) && ((null == c ? void 0 : c.enableVideoBanner) || "true" === u)
                    }, [null == c ? void 0 : null === (e = c.bannerMedia) || void 0 === e ? void 0 : e.videoDesktopLink, null == c ? void 0 : null === (t = c.bannerMedia) || void 0 === t ? void 0 : t.videoLink, null == c ? void 0 : c.enableVideoBanner, u]), p = (0, a.zo)("div", {
                        height: "inherit",
                        alignItems: "center",
                        display: "flex",
                        position: "".concat(g ? "absolute" : null),
                        top: "".concat(g ? "$9i" : null),
                        width: "".concat(g ? "100%" : null),
                        zIndex: 2
                    });
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(S, {
                            fallbackImage: null == c ? void 0 : c.fallbackImage,
                            bannerMedia: null == c ? void 0 : c.bannerMedia.bannerImage,
                            mobBannerImage: null == c ? void 0 : null === (l = c.bannerMedia) || void 0 === l ? void 0 : l.mobBannerImage,
                            videoLink: null == c ? void 0 : c.bannerMedia.videoLink,
                            videoDesktopLink: null == c ? void 0 : c.bannerMedia.videoDesktopLink,
                            isVideo: g,
                            children: (0, n.jsx)(p, {
                                id: "banner-content",
                                children: (0, n.jsx)(j.Z, {
                                    children: (0, n.jsx)(v, {
                                        bannerTitle: null == c ? void 0 : c.title,
                                        searchPlaceHolder: null == c ? void 0 : c.searchBarPlaceholderText
                                    })
                                })
                            })
                        }), ((null == c ? void 0 : null === (r = c.bannerTrustElement) || void 0 === r ? void 0 : r.length) || 0) > 0 ? (0, n.jsx)(b, {
                            tustedData: null == c ? void 0 : c.bannerTrustElement
                        }) : null]
                    })
                };
            var z = T
        },
        39131: function(i, e, t) {
            "use strict";
            var n = t(85893),
                a = t(87789),
                o = t(39396),
                l = t(25675),
                s = t.n(l),
                r = t(67294),
                c = t(68991);
            let d = i => {
                let {
                    src: e,
                    fallback: t = "https://images.pickyourtrail.com/image_placeholder_2eca9cbf61.png",
                    alt: l = "",
                    width: d,
                    height: u,
                    children: g,
                    isBg: p = !1,
                    wrapperRef: m,
                    fill: h = !1,
                    ...v
                } = i, [x, k] = (0, r.useState)(0), [y, f] = (0, r.useState)(0);
                (0, r.useEffect)(() => {
                    if (null == m ? void 0 : m.current) {
                        var i, e;
                        k(null == m ? void 0 : null === (i = m.current) || void 0 === i ? void 0 : i.offsetWidth), f(null == m ? void 0 : null === (e = m.current) || void 0 === e ? void 0 : e.offsetHeight)
                    }
                }, [m]);
                let b = (0, r.useMemo)(() => d ? Math.ceil(Number(d) / 3) : Math.ceil(Number(x) / 3), [d, x]),
                    j = (0, r.useMemo)(() => u ? Math.ceil(Number(u) / 3) : Math.ceil(Number(y) / 3), [u, y]),
                    w = (0, r.useMemo)(() => "w=".concat(b, "&h=").concat(j), [j, b]),
                    $ = (0, r.useMemo)(() => {
                        let i = e.includes("?") ? "&" : "?";
                        return "".concat(e).concat(i).concat(w, "&blur=2")
                    }, [w, e]),
                    [P, S] = (0, r.useState)(!1),
                    [T, z] = (0, r.useState)(!1),
                    C = (0, r.useMemo)(() => {
                        let i = {};
                        return d && (i = { ...i,
                            width: d
                        }), u && (i = { ...i,
                            height: u
                        }), h && (i = { ...i,
                            fill: !0
                        }), i
                    }, [h, u, d]),
                    D = (0, r.useMemo)(() => null == e ? void 0 : e.includes("time=1"), [e]),
                    M = (0, a.zo)(s(), {
                        filter: D ? "blur(10px)" : "unset"
                    });
                return (null == e ? void 0 : e.length) && !P ? d || u || h || x > 0 && y > 0 ? T ? p ? (0, n.jsxs)(o.xu, {
                    style: {
                        position: "relative",
                        width: null != d ? d : x,
                        height: null != u ? u : y
                    },
                    children: [(0, n.jsx)(M, {
                        alt: l,
                        src: (0, c.Z)("".concat(e, "?w=").concat(null != d ? d : x, "&h=").concat(null != u ? u : y, "&format=auto"), ""),
                        onError: () => S(!0),
                        style: {
                            opacity: T ? 1 : 0,
                            transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                            position: "relative"
                        },
                        ...v,
                        placeholder: "blur",
                        blurDataURL: (0, c.Z)($, "", 10, "1"),
                        ...C,
                        onLoadingComplete: () => {
                            z(!0)
                        }
                    }), (0, n.jsx)(o.xu, {
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            zIndex: 1
                        },
                        children: g
                    })]
                }) : (0, n.jsx)(s(), {
                    alt: l,
                    src: (0, c.Z)("".concat(e, "?w=").concat(null != d ? d : x, "&h=").concat(null != u ? u : y, "&format=auto"), ""),
                    onError: () => S(!0),
                    style: {
                        opacity: T ? 1 : 0,
                        transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out"
                    },
                    placeholder: "blur",
                    blurDataURL: (0, c.Z)($, "", 10, "1"),
                    ...C,
                    onLoadingComplete: () => {
                        z(!0)
                    },
                    ...v
                }) : p ? (0, n.jsxs)(o.xu, {
                    style: {
                        position: "relative",
                        width: null != d ? d : x,
                        height: null != u ? u : y
                    },
                    children: [(0, n.jsx)(M, {
                        alt: l,
                        src: (0, c.Z)($, "", 10, "1"),
                        onError: () => S(!0),
                        style: {
                            opacity: T ? 1 : 0,
                            transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                            position: "relative"
                        },
                        ...v,
                        placeholder: "blur",
                        blurDataURL: (0, c.Z)($, "", 10, "1"),
                        ...C,
                        onLoadingComplete: () => {
                            z(!0)
                        }
                    }), (0, n.jsx)(o.xu, {
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            zIndex: 1
                        },
                        children: g
                    })]
                }) : (0, n.jsx)(s(), {
                    alt: l,
                    src: (0, c.Z)($, "", 10, "1"),
                    onError: () => S(!0),
                    style: {
                        opacity: T ? 0 : 1,
                        transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out"
                    },
                    placeholder: "blur",
                    blurDataURL: (0, c.Z)($, "", 10, "1"),
                    ...C,
                    onLoadingComplete: () => {
                        z(!0)
                    },
                    ...v
                }) : null : p ? (0, n.jsx)(s(), {
                    alt: "",
                    src: (0, c.Z)(t, "", 10, "1"),
                    ...C,
                    ...v,
                    children: g
                }) : (0, n.jsx)(s(), {
                    alt: "",
                    src: (0, c.Z)(t, "", 10, "1"),
                    ...C,
                    ...v
                })
            };
            e.Z = r.memo(d)
        },
        88343: function(i, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                __N_SSP: function() {
                    return M
                },
                default: function() {
                    return Z
                }
            });
            var n = t(85893),
                a = t(39396),
                o = t(70024),
                l = t(99079),
                s = t(11163),
                r = t(67294);
            let c = () => {
                let i = (0, s.useRouter)(),
                    e = i.asPath,
                    [t, o] = (0, r.useState)(!1),
                    l = () => {
                        o(!0)
                    },
                    c = (0, r.useMemo)(() => "/holiday-packages" === e ? "packages_page" : "organic-hp_sticky ", [e]);
                return t ? null : (0, n.jsxs)(a.X2, {
                    css: {
                        height: "$32i",
                        display: "flex",
                        backgroundColor: "#6702DF",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        padding: "0 $6i",
                        position: "fixed",
                        bottom: 0,
                        "@lg": {
                            display: "none"
                        }
                    },
                    children: [(0, n.jsx)(a.xu, {
                        css: {
                            display: "flex",
                            alignItems: "center"
                        },
                        children: (0, n.jsxs)(a.xv, {
                            as: "p",
                            css: {
                                fontSize: "$6i",
                                lineHeight: "$8i",
                                fontWeight: 600,
                                color: "$white"
                            },
                            children: ["Download our app to get amazing travel deals", (0, n.jsx)(a.xv, {
                                onClick: () => l(),
                                as: "span",
                                css: {
                                    color: "rgba(255, 255, 255, 0.7)",
                                    textDecoration: "underline",
                                    fontSize: "$6i",
                                    lineHeight: "$8i",
                                    fontWeight: 700
                                },
                                children: "CLOSE"
                            })]
                        })
                    }), (0, n.jsx)(a.xu, {
                        children: (0, n.jsx)("a", {
                            href: "https://app.pickyourtrail.com/".concat(c),
                            rel: "noreferrer",
                            target: "_blank",
                            children: (0, n.jsx)(a.zx, {
                                primary: !0,
                                css: {
                                    fontSize: "$6i",
                                    minWidth: "102px",
                                    minHeight: "34px"
                                },
                                children: "Download App"
                            })
                        })
                    })]
                })
            };
            var d = t(64658),
                u = t(83983),
                g = t(53041),
                p = t(26202),
                m = t(87789),
                h = t(24636),
                v = t(41664),
                x = t.n(v),
                k = t(44950),
                y = t(50389);
            let f = i => {
                let {
                    bannerTitle: e,
                    searchPlaceHolder: t
                } = i, l = (0, o.Dv)(k.s1), s = (0, o.Dv)(k.Iv), c = (0, m.zo)(x(), {}), d = (0, m.zo)(a.xu, {
                    width: "100%",
                    maxHeight: "46px",
                    display: "flex",
                    justifyContent: "center",
                    "@lg": {
                        width: "470px"
                    },
                    ".home-search-button": {
                        border: "3px solid transparent",
                        borderRadius: "12px",
                        position: "relative",
                        backgroundClip: "padding-box",
                        boxShadow: "0px 4px 27px rgba(26, 33, 43, 0.1)",
                        "&:before": {
                            content: "",
                            position: "absolute",
                            inset: "-3px",
                            borderRadius: "14px",
                            padding: "3px",
                            background: "linear-gradient($colors$jcustom60, $colors$jcustom61)"
                        },
                        ".search-text-input": {
                            backgroundColor: "$white",
                            flex: 1,
                            zIndex: 1,
                            width: "100%",
                            height: "100%",
                            alignItems: "center",
                            padding: "0 18px",
                            borderRadius: "11px"
                        }
                    }
                }), u = i => {
                    var e, t;
                    let {
                        item: o
                    } = i;
                    return (0, n.jsxs)(a.xu, {
                        as: "span",
                        css: {
                            color: "".concat((null == o ? void 0 : o.fontFamily) === "Amithen" ? "$primary13" : null !== (e = null == o ? void 0 : o.fontColor) && void 0 !== e ? e : "$white"),
                            fontFamily: "".concat((null == o ? void 0 : o.fontFamily) === "Amithen" ? "$amithen" : "$manrope"),
                            fontStyle: "normal",
                            fontWeight: "".concat(null !== (t = null == o ? void 0 : o.fontWeightMobile) && void 0 !== t ? t : "$bold"),
                            fontSize: "".concat((null == o ? void 0 : o.fontFamily) === "Amithen" ? "$14i" : "$10i")
                        },
                        children: [null == o ? void 0 : o.title, "\xa0"]
                    })
                }, g = () => {
                    (0, y.L9W)(y.nVI, {
                        sectionTitle: "floating-search-bar",
                        slug: "/customize",
                        elementType: "floaring-search-bar",
                        pathname: "/"
                    }, l || void 0)
                };
                return (0, n.jsxs)(a.X2, {
                    justify: "center",
                    css: {
                        backgroundColor: "$scustom0",
                        width: "100%",
                        position: "fixed",
                        top: 0,
                        zIndex: 0,
                        display: "".concat(s ? "flex" : "none"),
                        "@lg": {
                            backgroundColor: "none",
                            background: "url('https://oceanjar-new.s3.ap-south-1.amazonaws.com/headerbg.png')",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            padding: "$8i $32i $8i $32i",
                            paddingRight: "300px",
                            alignItems: "center",
                            top: 0
                        }
                    },
                    children: [(0, n.jsxs)(a.X2, {
                        css: {
                            "@smMax": {
                                width: "100%"
                            },
                            "@lg": {
                                display: "flex",
                                alignItems: "center"
                            }
                        },
                        children: [(0, n.jsx)(a.xu, {
                            css: {
                                "@smMax": {
                                    display: "none"
                                }
                            },
                            children: (0, n.jsx)(a.xu, {
                                as: "p",
                                css: {
                                    textAlign: "center",
                                    paddingBottom: "$12i",
                                    lineHeight: 1,
                                    "@lg": {
                                        paddingBottom: "0",
                                        margin: "0 $8i 0 $8i",
                                        alignItems: "center",
                                        display: "flex"
                                    }
                                },
                                children: null == e ? void 0 : e.map((i, e) => (0, n.jsx)(r.Fragment, {
                                    children: (0, n.jsx)(u, {
                                        item: i
                                    })
                                }, e))
                            })
                        }), (0, n.jsx)(a.xu, {
                            css: {
                                "@smMax": {
                                    width: "100%",
                                    padding: "$7i $11i $7i $11i"
                                },
                                "@lg": {
                                    padding: 0,
                                    maxHeight: "48px"
                                }
                            },
                            children: (0, n.jsx)(d, {
                                children: (0, n.jsx)(c, {
                                    href: "/customize",
                                    onClick: g,
                                    css: {
                                        textDecoration: "none",
                                        display: "flex",
                                        width: "100%",
                                        maxHeight: "46px",
                                        "@lg": {
                                            maxHeight: "48px",
                                            maxWidth: "470px",
                                            width: "470px",
                                            height: "48px"
                                        }
                                    },
                                    children: (0, n.jsx)(a.X2, {
                                        align: "center",
                                        justify: "center",
                                        className: "home-search-button",
                                        css: {
                                            display: "flex",
                                            background: "$white",
                                            borderRadius: "12px",
                                            color: "$black2",
                                            textDecoration: "none",
                                            flex: 1,
                                            height: "46px",
                                            width: "100%",
                                            maxHeight: "46px",
                                            "@lg": {
                                                maxHeight: "48px",
                                                maxWidth: "470px"
                                            }
                                        },
                                        children: (0, n.jsxs)(a.X2, {
                                            className: "search-text-input",
                                            css: {
                                                gap: "$5i"
                                            },
                                            children: [(0, n.jsx)(h.Z, {
                                                fill: "$black2",
                                                fontSize: 18
                                            }), (0, n.jsx)(a.xv, {
                                                css: {
                                                    fontWeight: "$bolder",
                                                    fontSize: "$7i",
                                                    lineHeight: "$11i",
                                                    textDecoration: "none",
                                                    color: "$black2",
                                                    fontFamily: "$manrope",
                                                    "@lg": {
                                                        fontWeight: "$bold",
                                                        fontSize: "$8i",
                                                        lineHeight: "$12i"
                                                    }
                                                },
                                                children: t
                                            })]
                                        })
                                    })
                                })
                            })
                        })]
                    }), (0, n.jsx)(a.xu, {
                        css: {}
                    })]
                })
            };
            var b = t(42435);
            let j = [{
                title: "Maldives Packages",
                link: "/packages/maldives",
                category: "Packages"
            }, {
                title: "Bali Packages",
                link: "/packages/bali",
                category: "Packages"
            }, {
                title: "Thailand Packages",
                link: "/packages/thailand",
                category: "Packages"
            }, {
                title: "Dubai Packages",
                link: "/packages/dubai",
                category: "Packages"
            }, {
                title: "Singapore Packages",
                link: "/packages/singapore",
                category: "Packages"
            }, {
                title: "Australia Packages",
                link: "/packages/australia",
                category: "Packages"
            }, {
                title: "Vietnam Packages",
                link: "/packages/vietnam",
                category: "Packages"
            }, {
                title: "Sri Lanka Packages",
                link: "/packages/sri-lanka",
                category: "Packages"
            }, {
                title: "Europe Packages",
                link: "/packages/europe",
                category: "Packages"
            }, {
                title: "Malaysia Packages",
                link: "/packages/malaysia",
                category: "Packages"
            }, {
                title: "Japan Packages",
                link: "/packages/japan",
                category: "Packages"
            }, {
                title: "Mauritius Packages",
                link: "/packages/mauritius",
                category: "Packages"
            }, {
                title: "Greece Packages",
                link: "/packages/greece",
                category: "Packages"
            }, {
                title: "Turkey Packages",
                link: "/packages/turkey",
                category: "Packages"
            }, {
                title: "Italy Packages",
                link: "/packages/italy",
                category: "Packages"
            }, {
                title: "France Packages",
                link: "/packages/france",
                category: "Packages"
            }, {
                title: "Switzerland Packages",
                link: "/packages/switzerland",
                category: "Packages"
            }, {
                title: "Spain Packages",
                link: "/packages/spain",
                category: "Packages"
            }, {
                title: "Portugal Packages",
                link: "/packages/portugal",
                category: "Packages"
            }, {
                title: "United Kingdom Packages",
                link: "/packages/united-kingdom",
                category: "Packages"
            }, {
                title: "Iceland Packages",
                link: "/packages/iceland",
                category: "Packages"
            }, {
                title: "Netherlands Packages",
                link: "/packages/netherlands",
                category: "Packages"
            }, {
                title: "Germany Packages",
                link: "/packages/germany",
                category: "Packages"
            }, {
                title: "Croatia Packages",
                link: "/packages/croatia",
                category: "Packages"
            }, {
                title: "Czech Republic Packages",
                link: "/packages/czech-republic",
                category: "Packages"
            }, {
                title: "Austria Packages",
                link: "/packages/austria",
                category: "Packages"
            }, {
                title: "Belgium Packages",
                link: "/packages/belgium",
                category: "Packages"
            }, {
                title: "South Africa Packages",
                link: "/packages/south-africa",
                category: "Packages"
            }, {
                title: "Australia Tourism",
                link: "/tourism/australia",
                category: "Destinations"
            }, {
                title: "Austria Tourism",
                link: "/tourism/austria",
                category: "Destinations"
            }, {
                title: "Belgium Tourism",
                link: "tourism/belgium",
                category: "Destinations"
            }, {
                title: "Cambodia Tourism",
                link: "/tourism/cambodia",
                category: "Destinations"
            }, {
                title: "Croatia Tourism",
                link: "/tourism/croatia",
                category: "Destinations"
            }, {
                title: "Vietnam Tourism",
                link: "/tourism/vietnam",
                category: "Destinations"
            }, {
                title: "Netherlands Tourism",
                link: "/tourism/netherlands",
                category: "Destinations"
            }, {
                title: "Czech Republic Tourism",
                link: "/tourism/czech-republic",
                category: "Destinations"
            }, {
                title: "France Tourism",
                link: "/tourism/france",
                category: "Destinations"
            }, {
                title: "Germany Tourism",
                link: "/tourism/germany",
                category: "Destinations"
            }, {
                title: "Greece Tourism",
                link: "/tourism/greece",
                category: "Destinations"
            }, {
                title: "Hungary Tourism",
                link: "/tourism/hungary",
                category: "Destinations"
            }, {
                title: "Iceland Tourism",
                link: "/tourism/iceland",
                category: "Destinations"
            }, {
                title: "Japan Tourism",
                link: "/tourism/japan",
                category: "Destinations"
            }, {
                title: "Philippines Tourism",
                link: "/tourism/philippines",
                category: "Destinations"
            }, {
                title: "Portugal Tourism",
                link: "/tourism/portugal",
                category: "Destinations"
            }, {
                title: "Slovenia Tourism",
                link: "/tourism/slovenia",
                category: "Destinations"
            }, {
                title: "Spain Tourism",
                link: "/tourism/spain",
                category: "Destinations"
            }, {
                title: "Sweden Tourism",
                link: "/tourism/sweden",
                category: "Destinations"
            }, {
                title: "Italy Tourism",
                link: "/tourism/italy",
                category: "Destinations"
            }, {
                title: "Seychelles Tourism",
                link: "/tourism/seychelles",
                category: "Destinations"
            }, {
                title: "Laos Tourism",
                link: "/tourism/laos",
                category: "Destinations"
            }, {
                title: "Malaysia Tourism",
                link: "/tourism/malaysia",
                category: "Destinations"
            }, {
                title: "Maldives Tourism",
                link: "/tourism/maldives",
                category: "Destinations"
            }, {
                title: "Mauritius Tourism",
                link: "/tourism/mauritius",
                category: "Destinations"
            }, {
                title: "New Zealand Tourism",
                link: "/tourism/new-zealand",
                category: "Destinations"
            }, {
                title: "Saudi Arabia Tourism",
                link: "/tourism/saudi-arabia",
                category: "Destinations"
            }, {
                title: "United Kingdom Tourism",
                link: "/tourism/united-kingdom",
                category: "Destinations"
            }, {
                title: "Singapore Tourism",
                link: "/tourism/singapore",
                category: "Destinations"
            }, {
                title: "South Africa Tourism",
                link: "/tourism/south-africa",
                category: "Destinations"
            }, {
                title: "Sri Lanka Tourism",
                link: "/tourism/sri-lanka",
                category: "Destinations"
            }, {
                title: "Switzerland Tourism",
                link: "/tourism/switzerland",
                category: "Destinations"
            }, {
                title: "Thailand Tourism",
                link: "/tourism/thailand",
                category: "Destinations"
            }, {
                title: "Turkey Tourism",
                link: "/tourism/turkey",
                category: "Destinations"
            }, {
                title: "Places to Visit in Bali",
                link: "/tourism/bali/places-to-visit",
                category: "Places to visit"
            }, {
                title: "Places to Visit in Thailand",
                link: "/tourism/thailand/places-to-visit",
                category: "Places to visit"
            }, {
                title: "Places to Visit in Maldives",
                link: "/tourism/maldives/places-to-visit",
                category: "Places to visit"
            }, {
                title: "Places to Visit in Dubai",
                link: "/tourism/dubai/places-to-visit",
                category: "Places to visit"
            }, {
                title: "Places to Visit in Singapore",
                link: "/tourism/singapore/places-to-visit",
                category: "Places to visit"
            }, {
                title: "Places to Visit in Sri Lanka",
                link: "/tourism/sri-lanka/places-to-visit",
                category: "Places to visit"
            }, {
                title: "Places to Visit in South Africa",
                link: "/tourism/south-africa/places-to-visit",
                category: "Places to visit"
            }, {
                title: "Places to Visit in Vietnam",
                link: "/tourism/vietnam/places-to-visit",
                category: "Places to visit"
            }, {
                title: "Things to do in Bali",
                link: "/tourism/bali/things-to-do",
                category: "Things to do"
            }, {
                title: "Things to do in Thailand",
                link: "/tourism/thailand/things-to-do",
                category: "Things to do"
            }, {
                title: "Things to do in Dubai",
                link: "/tourism/dubai/things-to-do-in-dubai",
                category: "Things to do"
            }, {
                title: "Indonesia Visa",
                link: "/visa/indonesia-visa",
                category: "Visa"
            }, {
                title: "Hong Kong Visa",
                link: "/visa/hong-kong-visa",
                category: "Visa"
            }, {
                title: "Ireland Visa",
                link: "/visa/ireland-visa",
                category: "Visa"
            }, {
                title: "Malaysia Visa",
                link: "/visa/malaysia-visa",
                category: "Visa"
            }, {
                title: "Philippines Visa",
                link: "/visa/philippines-visa",
                category: "Visa"
            }, {
                title: "Uzbekistan Visa",
                link: "/visa/uzbekistan-visa",
                category: "Visa"
            }, {
                title: "Canada Visa",
                link: "/visa/canada-visa",
                category: "Visa"
            }, {
                title: "Saudi Arabia Visa",
                link: "/visa/saudi-arabia-visa",
                category: "Visa"
            }, {
                title: "Russia Visa",
                link: "/visa/russia-visa",
                category: "Visa"
            }, {
                title: "Turkey Visa",
                link: "/visa/turkey-visa",
                category: "Visa"
            }, {
                title: "Switzerland Visa",
                link: "/visa/switzerland-visa",
                category: "Visa"
            }, {
                title: "Czech Republic Visa",
                link: "/visa/czech-republic-visa",
                category: "Visa"
            }, {
                title: "Japan Visa",
                link: "/visa/japan-visa",
                category: "Visa"
            }, {
                title: "Australia Visa",
                link: "/visa/australia-visa",
                category: "Visa"
            }, {
                title: "Austria Visa",
                link: "/visa/austria-visa",
                category: "Visa"
            }, {
                title: "South Korea Visa",
                link: "/visa/south-korea-visa",
                category: "Visa"
            }];
            var w = t(78449),
                $ = t(35946);
            let P = ["Packages", "Destinations", "Things to do", "Places to visit", "Visa"],
                S = () => {
                    let [i, e] = (0, r.useState)("Packages"), t = j.filter(e => e.category === i), [o, l] = (0, r.useState)(t), s = (0, r.useCallback)(i => {
                        e(i);
                        let t = j.filter(e => e.category === i);
                        l(t)
                    }, []);
                    return (0, n.jsxs)(a.sg, {
                        css: {
                            width: "100%",
                            gap: "$12i"
                        },
                        children: [(0, n.jsx)(a.xu, {
                            css: {
                                width: "100%",
                                gap: "$8i"
                            },
                            children: (0, n.jsx)(a.xv, {
                                css: {
                                    fontFamily: "$manrope",
                                    color: "$grey900",
                                    fontSize: "$10i",
                                    fontWeight: 800,
                                    fontStyle: "normal"
                                },
                                children: "EXPLORE ALL PACKAGES"
                            })
                        }), (0, n.jsx)(a.X2, {
                            css: {
                                width: "100%",
                                gap: "$8i",
                                overflowX: "scroll",
                                scrollbarWidth: "none"
                            },
                            children: P.map((e, t) => (0, n.jsx)(T, {
                                content: e,
                                handleActive: s,
                                containerStyles: {
                                    backgroundColor: e === i ? "Black" : "#FDFAF6",
                                    color: e === i ? "white" : "Black"
                                }
                            }, t))
                        }), (0, n.jsx)(a.X2, {
                            css: {
                                width: "100%",
                                display: "grid",
                                gridTemplateColumns: "repeat(5, 1fr)",
                                gap: "$8i",
                                paddingTop: "$16i",
                                paddingBottom: "$16i",
                                overflowX: "scroll",
                                scrollbarWidth: "none"
                            },
                            children: o.map((i, e) => (0, n.jsx)(x(), {
                                href: i.link,
                                children: (0, n.jsxs)(a.sg, {
                                    align: "center",
                                    justify: "center",
                                    css: {
                                        minWidth: "200px",
                                        minHeight: "60px",
                                        maxHeight: "max-content",
                                        gap: "$4i",
                                        border: "1px solid #E8EAF3",
                                        borderRadius: "$4",
                                        padding: "$2i",
                                        backgroundColor: "#FFF",
                                        cursor: "pointer",
                                        "&:hover": {
                                            backgroundColor: "$grey50"
                                        }
                                    },
                                    children: [(0, n.jsx)(a.xv, {
                                        css: {
                                            color: "$grey900",
                                            fontFamily: "$manrope",
                                            fontSize: "$7i",
                                            fontWeight: 700,
                                            textAlign: "center"
                                        },
                                        children: i.title
                                    }), i.attractions && (0, n.jsx)(a.xv, {
                                        css: {
                                            color: "$grey700",
                                            fontFamily: "$manrope",
                                            fontSize: "$7i",
                                            fontWeight: 500
                                        },
                                        children: i.attractions
                                    })]
                                })
                            }, (0, $.l)("Pill", "nothing".concat(e))))
                        })]
                    })
                },
                T = i => {
                    let {
                        content: e,
                        containerStyles: t,
                        handleActive: o
                    } = i;
                    return (0, n.jsx)(a.X2, {
                        onClick: () => o(e),
                        css: {
                            cursor: "pointer",
                            minHeigh: "max-content",
                            minWidth: "max-content",
                            padding: "$4i $10i",
                            borderRadius: "$pill",
                            backgroundColor: "#FDFAF6",
                            border: "1px solid #F1DDC6",
                            boxShadow: "none",
                            fontFamily: "$manrope",
                            color: "black",
                            fontSize: "$8i",
                            fontStyle: "normal",
                            fontWeight: 600,
                            "&:hover": {
                                backgroundColor: "black",
                                color: "white",
                                boxShadow: "none"
                            },
                            ...t
                        },
                        children: (0, w.Z)("best_time_to_visits" === e || "things_to_dos" === e || "places_to_visits" === e ? e.slice(0, -1) : "how_to_reaches" === e ? e.slice(0, -2) : e, "_")
                    })
                };
            var z = t(68991),
                C = t(2177);
            let D = i => {
                var e, t, m, h, v, x, y, j, w, P;
                let {
                    homeData: T,
                    footerData: D,
                    packagesItinerariesForSlugs: M,
                    packagesStoriesForSlugs: Z,
                    locale: L
                } = i, I = (0, C.Z)(), F = (0, o.b9)(k.Iv), _ = (0, o.Dv)(k.jQ), [V, R] = (0, o.KO)(k.T2), A = (0, l.oC)(k.e5);
                (0, r.useEffect)(() => {
                    A()
                }, [A]), (0, r.useEffect)(() => {
                    let i = document.querySelector(".home-search"),
                        e = () => {
                            let e = window.scrollY,
                                t = (null == i ? void 0 : i.getBoundingClientRect().top) || 0;
                            F(e > t + 250)
                        };
                    return window.addEventListener("scroll", e, {
                        capture: !0,
                        passive: !0
                    }), () => window.removeEventListener("scroll", e, {
                        capture: !0
                    })
                }, [F]);
                let W = (0, o.Dv)(k.s1),
                    B = (0, s.useRouter)(),
                    E = (0, r.useMemo)(() => {
                        var i;
                        return null === (i = B.query) || void 0 === i ? void 0 : i.m
                    }, [B]);
                (0, r.useEffect)(() => {
                    let i = sessionStorage.getItem("auto-popup-shown");
                    if (!i && !(null == W ? void 0 : W.loggedIn) && !_) {
                        let e = setTimeout(() => {
                            E || (sessionStorage.setItem("auto-popup-shown", "true"), R(!0))
                        }, 15e3);
                        return () => {
                            clearTimeout(e)
                        }
                    }
                }, [E, _, B, R, null == W ? void 0 : W.loggedIn]);
                let H = (0, r.useMemo)(() => {
                        var i, e;
                        return null == T ? void 0 : null === (i = T.data) || void 0 === i ? void 0 : null === (e = i.attributes) || void 0 === e ? void 0 : e.pageContents
                    }, [null == T ? void 0 : null === (e = T.data) || void 0 === e ? void 0 : null === (t = e.attributes) || void 0 === t ? void 0 : t.pageContents]),
                    N = (0, r.useMemo)(() => {
                        var i, e;
                        return null == T ? void 0 : null === (i = T.data) || void 0 === i ? void 0 : null === (e = i.attributes) || void 0 === e ? void 0 : e.bannerSection
                    }, [null == T ? void 0 : null === (m = T.data) || void 0 === m ? void 0 : null === (h = m.attributes) || void 0 === h ? void 0 : h.bannerSection]),
                    X = (0, r.useMemo)(() => {
                        var i, e;
                        return null == T ? void 0 : null === (i = T.data) || void 0 === i ? void 0 : null === (e = i.attributes) || void 0 === e ? void 0 : e.seo
                    }, [null == T ? void 0 : null === (v = T.data) || void 0 === v ? void 0 : null === (x = v.attributes) || void 0 === x ? void 0 : x.seo]),
                    U = (0, r.useMemo)(() => {
                        let i = [];
                        if (H)
                            for (let e = 0; e < H.length; e += 1) {
                                var t, n;
                                (null == H ? void 0 : null === (t = H[e]) || void 0 === t ? void 0 : t.fluidLayout) === !1 && (null == H ? void 0 : null === (n = H[e + 1]) || void 0 === n ? void 0 : n.fluidLayout) === !1 ? (i.push([H[e], H[e + 1]]), e += 1) : i.push([H[e]])
                            }
                        return i
                    }, [H]),
                    O = (0, r.useMemo)(() => U, [U]),
                    J = (0, r.useCallback)(() => {
                        R(!1)
                    }, [R]);
                if (!T) return null;
                let G = i => {
                    let {
                        p: e,
                        fluidLayout: t
                    } = i;
                    return (0, n.jsx)(r.Fragment, {
                        children: null == e ? void 0 : e.map((i, e) => {
                            var o, l, s, r, c, d, u, p, m, h, v, x, k, y, f;
                            return (0, n.jsx)(a.xu, {
                                className: "desitination-components-" + e,
                                css: {
                                    background: "url(".concat((0, z.Z)((null == i ? void 0 : null === (o = i.backgroundImage) || void 0 === o ? void 0 : null === (l = o.data) || void 0 === l ? void 0 : null === (s = l[0]) || void 0 === s ? void 0 : null === (r = s.attributes) || void 0 === r ? void 0 : r.url) || (null == i ? void 0 : null === (c = i.backgroundImage) || void 0 === c ? void 0 : null === (d = c.data) || void 0 === d ? void 0 : null === (u = d.attributes) || void 0 === u ? void 0 : u.url) || ""), ")"),
                                    backgroundColor: "".concat(null == i ? void 0 : i.backgroundColor),
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    "@lg": {
                                        backgroundSize: "cover",
                                        borderRadius: "".concat(((null == i ? void 0 : i.backgroundColor) || (null == i ? void 0 : null === (p = i.backgroundImage) || void 0 === p ? void 0 : null === (m = p.data) || void 0 === m ? void 0 : null === (h = m[0]) || void 0 === h ? void 0 : null === (v = h.attributes) || void 0 === v ? void 0 : v.url) || (null == i ? void 0 : null === (x = i.backgroundImage) || void 0 === x ? void 0 : null === (k = x.data) || void 0 === k ? void 0 : null === (y = k.attributes) || void 0 === y ? void 0 : y.url)) && (null == i ? void 0 : i.__component) !== "widgets.story-testimonial" ? (null == i ? void 0 : i.preCostTime) ? "0px" : "20px" : "0px"),
                                        border: "".concat((null == i ? void 0 : i.__component) !== "widgets.story-testimonial" && (null == i ? void 0 : i.backgroundColor) ? "1px solid" : null),
                                        overflow: "hidden",
                                        borderColor: "".concat(null !== (f = null == i ? void 0 : i.backgroundColor) && void 0 !== f ? f : null == i ? void 0 : i.backgroundColor)
                                    }
                                },
                                children: (t || i.fluidLayout) && (null == i ? void 0 : i.__component) !== "widgets.story-testimonial" ? (0, n.jsx)(g.Z, {
                                    css: {
                                        "@smMax": (null == i ? void 0 : i.enableSlider) ? {
                                            paddingLeft: 0,
                                            paddingRight: 0
                                        } : {}
                                    },
                                    children: (0, n.jsx)($.Z, {
                                        item: i,
                                        index: e,
                                        pageLayoutCondition: !1,
                                        isIxigoPartnersSite: I,
                                        packagesItinerariesForSlugs: (null == M ? void 0 : M.length) ? M : void 0,
                                        packagesStoriesForSlugs: (null == Z ? void 0 : Z.length) ? Z : void 0
                                    })
                                }) : (0, n.jsx)($.Z, {
                                    item: i,
                                    index: e,
                                    pageLayoutCondition: !1,
                                    isIxigoPartnersSite: I,
                                    packagesItinerariesForSlugs: (null == M ? void 0 : M.length) ? M : void 0,
                                    packagesStoriesForSlugs: (null == Z ? void 0 : Z.length) ? Z : void 0
                                })
                            }, "desitination-components-" + e)
                        })
                    })
                };
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(d.Z, {
                        navbarProps: {
                            isTransparent: !0
                        },
                        footerData: D,
                        children: (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsxs)(a.xu, {
                                className: "home",
                                css: {
                                    "@smMax": {
                                        height: "calc(100% - 54px)",
                                        overflow: "scroll"
                                    }
                                },
                                children: [X ? (0, n.jsx)(p.Z, {
                                    data: X,
                                    slug: "",
                                    preview: !1,
                                    addOrganisationSchema: !0
                                }) : null, N ? (0, n.jsx)(b.Z, {
                                    data: N
                                }) : null, (0, n.jsx)(a.xu, {
                                    css: {
                                        gap: "24px",
                                        display: "flex",
                                        flexDirection: "column",
                                        marginTop: (null == O ? void 0 : null === (y = O[0]) || void 0 === y ? void 0 : null === (j = y[0]) || void 0 === j ? void 0 : j.preCostTime) ? "0px" : "$20i",
                                        marginBottom: "$20i",
                                        alignContent: "center",
                                        paddingLeft: "0",
                                        "@lg": {
                                            gap: "40px",
                                            marginTop: (null == O ? void 0 : null === (w = O[0]) || void 0 === w ? void 0 : null === (P = w[0]) || void 0 === P ? void 0 : P.preCostTime) ? "0px" : "$40i",
                                            marginBottom: "$40i",
                                            alignContent: "center"
                                        }
                                    },
                                    children: O ? O.map((i, e) => {
                                        var t, a;
                                        return (null == i ? void 0 : null === (t = i[0]) || void 0 === t ? void 0 : t.fluidWithoutBG) ? (0, n.jsx)(r.Fragment, {
                                            children: (0, n.jsx)($.Z, {
                                                item: null == i ? void 0 : i[0],
                                                index: e,
                                                pageLayoutCondition: !1,
                                                isIxigoPartnersSite: I,
                                                packagesItinerariesForSlugs: (null == M ? void 0 : M.length) ? M : void 0
                                            })
                                        }, "cnw_".concat(e)) : (0, n.jsx)(r.Fragment, {
                                            children: !((null == i ? void 0 : i.length) > 1) && (null == i ? void 0 : null === (a = i[0]) || void 0 === a ? void 0 : a.fluidLayout) ? (0, n.jsx)(G, {
                                                p: i,
                                                fluidLayout: !0
                                            }) : (0, n.jsx)(g.Z, {
                                                padding: "0",
                                                css: {},
                                                children: (0, n.jsx)(G, {
                                                    p: i,
                                                    fluidLayout: !1
                                                })
                                            }, "cnw_".concat(e))
                                        }, e)
                                    }) : (0, n.jsx)(n.Fragment, {})
                                }), "in" === L ? (0, n.jsx)(g.Z, {
                                    children: (0, n.jsx)(S, {})
                                }) : null]
                            }), (0, n.jsx)(u.default, {
                                defaultOpen: V,
                                onClose: J,
                                isGeneric: !0
                            })]
                        })
                    }), (0, n.jsx)(f, {
                        bannerTitle: null == N ? void 0 : N.title,
                        searchPlaceHolder: (null == N ? void 0 : N.searchBarPlaceholderText) || ""
                    }), (0, n.jsx)(a.xu, {
                        css: {
                            height: "50px",
                            "@lg": {
                                display: "none"
                            }
                        }
                    }), I ? null : (0, n.jsx)(c, {})]
                })
            };
            var M = !0,
                Z = D
        },
        51869: function(i, e, t) {
            "use strict";
            var n = t(85893);
            t(67294);
            var a = t(88116);
            let o = { in: [{
                        name: "",
                        lang: "en"
                    }, {
                        name: "",
                        lang: "en-IN"
                    }, {
                        name: "ae",
                        lang: "en-AE"
                    }, {
                        name: "us",
                        lang: "en-US"
                    }],
                    ae: [{
                        name: "",
                        lang: "en"
                    }, {
                        name: "",
                        lang: "en-IN"
                    }, {
                        name: "ae",
                        lang: "en-AE"
                    }, {
                        name: "us",
                        lang: "en-US"
                    }],
                    us: [{
                        name: "",
                        lang: "en"
                    }, {
                        name: "",
                        lang: "en-IN"
                    }, {
                        name: "ae",
                        lang: "en-AE"
                    }, {
                        name: "us",
                        lang: "en-US"
                    }]
                },
                l = i => {
                    var e;
                    let {
                        pathname: t,
                        supportedLocales: l,
                        locale: s,
                        uncostedItinerary: r,
                        canonicalURL: c
                    } = i, d = null === (e = t.split("?")) || void 0 === e ? void 0 : e[0], u = a.X.domain_url;
                    return r && void 0 !== c && c !== d ? (0, n.jsx)("link", {
                        rel: "alternate",
                        href: "".concat(u).concat(d),
                        hrefLang: "en"
                    }) : o[s || "in"].map((i, e) => {
                        if ("" === i.name || !l || l && l.length > 0 && l.includes(i.name)) {
                            let t = i.name ? "".concat(i.name).concat(d ? "/".concat(d) : d) : d;
                            return (0, n.jsx)("link", {
                                rel: "alternate",
                                href: "".concat(u).concat(t),
                                hrefLang: i.lang
                            }, e)
                        }
                    })
                };
            e.Z = l
        },
        39986: function(i, e, t) {
            "use strict";
            t.d(e, {
                Z: function() {
                    return a
                }
            });
            var n = t(78449);

            function a() {
                let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "_",
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : " ";
                return (0, n.Z)((i || "").toLowerCase().split(e).join(t))
            }
        },
        99055: function(i, e, t) {
            "use strict";
            var n = t(85893);
            t(67294);
            var a = t(24397),
                o = t(87789);
            let l = (0, o.zo)(a.Z),
                s = i => {
                    let {
                        fill: e,
                        ...t
                    } = i;
                    return (0, n.jsx)(l, {
                        css: {
                            fill: e
                        },
                        ...t
                    })
                };
            e.Z = s
        },
        55086: function(i, e, t) {
            "use strict";
            var n = t(85893);
            t(67294);
            var a = t(62760),
                o = t(87789);
            let l = (0, o.zo)(a.Z),
                s = i => {
                    let {
                        fill: e,
                        ...t
                    } = i;
                    return (0, n.jsx)(l, {
                        css: {
                            fill: e
                        },
                        ...t
                    })
                };
            e.Z = s
        },
        24636: function(i, e, t) {
            "use strict";
            t.d(e, {
                Z: function() {
                    return s
                }
            });
            var n = t(85893);
            t(67294);
            var a = t(87789);
            let o = (0, a.zo)(function(i) {
                    return (0, n.jsx)("svg", {
                        width: "1em",
                        height: "1em",
                        viewBox: "0 0 24 24",
                        ...i,
                        children: (0, n.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M18 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zm-1.94 7.175a8.5 8.5 0 111.55-1.265l3.17 3.965a1 1 0 11-1.56 1.25l-3.16-3.95z",
                            clipRule: "evenodd"
                        })
                    })
                }),
                l = i => {
                    let {
                        fill: e,
                        ...t
                    } = i;
                    return (0, n.jsx)(o, {
                        css: {
                            fill: e
                        },
                        ...t
                    })
                };
            var s = l
        },
        24397: function(i, e, t) {
            "use strict";
            var n = t(85893);
            t(67294), e.Z = function(i) {
                return (0, n.jsx)("svg", {
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    ...i,
                    children: (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M5.707 4.293a1 1 0 00-1.414 1.414L10.586 12l-6.293 6.293a1 1 0 101.414 1.414L12 13.414l6.293 6.293a1 1 0 001.414-1.414L13.414 12l6.293-6.293a1 1 0 00-1.414-1.414L12 10.586 5.707 4.293z",
                        clipRule: "evenodd"
                    })
                })
            }
        },
        62760: function(i, e, t) {
            "use strict";
            var n = t(85893);
            t(67294), e.Z = function(i) {
                return (0, n.jsx)("svg", {
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    ...i,
                    children: (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M20 12a8 8 0 10-16 0 8 8 0 0016 0zm2 0c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-9-3a1 1 0 10-2 0 1 1 0 002 0zm-1 7a1 1 0 001-1v-3a1 1 0 10-2 0v3a1 1 0 001 1z",
                        clipRule: "evenodd"
                    })
                })
            }
        }
    },
    function(i) {
        i.O(0, [4885, 296, 5675, 1664, 102, 8284, 2004, 7536, 3760, 4361, 6515, 1458, 5901, 9415, 5946, 3811, 5958, 3983, 9774, 2888, 179], function() {
            return i(i.s = 48312)
        }), _N_E = i.O()
    }
]);