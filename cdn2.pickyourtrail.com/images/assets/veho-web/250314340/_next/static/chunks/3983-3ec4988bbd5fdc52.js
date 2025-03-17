"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3983], {
        96529: function(e, i, l) {
            l.d(i, {
                X: function() {
                    return a
                }
            });
            var o = l(51490),
                t = l(88767);
            let n = async (e, i, l) => await i({
                    url: "itinerary/requestcallbackuser",
                    method: "POST",
                    body: e.data,
                    signal: l,
                    locale: e.locale
                }),
                a = e => {
                    let i = (0, o.wh)(),
                        {
                            mutate: l,
                            mutateAsync: a,
                            ...r
                        } = (0, t.useMutation)(e => n(e, i, void 0), e);
                    return {
                        requestcallBack: l,
                        requestcallBackAsync: a,
                        ...r
                    }
                }
        },
        83983: function(e, i, l) {
            l.r(i);
            var o = l(85893),
                t = l(87789),
                n = l(99055),
                a = l(75454),
                r = l(55086),
                s = l(86703),
                d = l(39396),
                u = l(56312),
                c = l(70024),
                g = l(25675),
                m = l.n(g),
                h = l(11163),
                p = l(67294),
                x = l(87536),
                v = l(71470),
                f = l(46007),
                b = l(1604),
                y = l(20899),
                $ = l(96529),
                w = l(25943),
                j = l(54958),
                E = l(42739),
                C = l(21803),
                S = l(53463),
                T = l(31449),
                I = l(44950),
                k = l(50389),
                P = l(70825),
                M = l(83359),
                O = l(47624),
                R = l(27894),
                L = l(2177),
                A = l(93290),
                U = l(51121),
                V = l(53441);
            let _ = /^[a-zA-Z\s]+$/,
                z = (0, t.zo)("img"),
                W = [{
                    id: 1,
                    value: "9am to 11am (Peak hours)"
                }, {
                    id: 2,
                    value: "11am to 1pm (Lean period)"
                }, {
                    id: 3,
                    value: "1pm to 5pm (Lean period)"
                }, {
                    id: 4,
                    value: "5pm to 7pm (Peak hours)"
                }, {
                    id: 5,
                    value: "Call me anytime"
                }],
                D = e => {
                    let i, {
                            defaultOpen: l,
                            onClose: t,
                            regionCode: g,
                            ctaText: D = "",
                            callback: N,
                            isGeneric: q,
                            slug: Z,
                            isJourney: B
                        } = e,
                        H = (0, h.useRouter)(),
                        F = (0, c.Dv)(I.s1),
                        G = (0, c.b9)(I.s1),
                        X = (0, c.b9)(I.yB),
                        [J, Y] = (0, c.KO)(I.eA),
                        {
                            UseGetOtpLoginAsync: K
                        } = (0, y.u)(),
                        {
                            requestcallBackAsync: Q
                        } = (0, $.X)(),
                        {
                            getUserDetailsAsync: ee
                        } = (0, w.s)(),
                        ei = (0, R.Z)({
                            router: H
                        }),
                        el = (0, p.useMemo)(() => {
                            var e;
                            return null === (e = H.query) || void 0 === e ? void 0 : e.isLuxe
                        }, [H]),
                        [eo, et] = (0, p.useState)(""),
                        [en, ea] = (0, p.useState)(!0),
                        [er, es] = (0, p.useState)(20),
                        [ed, eu] = (0, p.useState)({
                            error: !1,
                            status: "",
                            message: ""
                        }),
                        [ec, eg] = (0, p.useState)({
                            isError: !1,
                            title: "",
                            message: ""
                        }),
                        [em, eh] = (0, p.useState)(""),
                        [ep, ex] = (0, p.useState)({
                            id: "",
                            message: ""
                        }),
                        [ev, ef] = (0, p.useReducer)((e, i) => ({ ...e,
                            ...i
                        }), {
                            name: "",
                            countryPhoneCode: "in" === ei || "" === ei ? "+91" : "us" === ei ? "+1" : "ae" === ei ? "+971" : "+91",
                            mobileNumber: "",
                            email: "",
                            preferredRegion: void 0,
                            preferredTime: null == W ? void 0 : W[0],
                            preferredLanguage: void 0,
                            isEMIOpted: !1
                        }),
                        eb = [{
                            value: "idn",
                            label: "Bali"
                        }, {
                            value: "eur",
                            label: "Europe"
                        }, {
                            value: "sin",
                            label: "Singapore"
                        }, {
                            value: "dxb",
                            label: "Dubai"
                        }, {
                            value: "mus",
                            label: "Mauritius"
                        }, {
                            value: "tha",
                            label: "Thailand"
                        }, {
                            value: "aus",
                            label: "Australia"
                        }, {
                            value: "lka",
                            label: "Sri Lanka"
                        }, {
                            value: "vnm",
                            label: "Vietnam"
                        }, {
                            value: "zaf",
                            label: "South Africa"
                        }, {
                            value: "mle",
                            label: "Maldives"
                        }],
                        ey = b.Ry({
                            name: b.Z_({
                                required_error: "Missing name."
                            }).trim().min(2, {
                                message: "Name must contain at least 2 characters."
                            }).regex(_, {
                                message: "Only alphabets are accepted."
                            }),
                            isd: b.Z_({
                                required_error: "Missing ISD code."
                            }).trim().min(2, {
                                message: "Missing ISD code."
                            }),
                            mobileNumber: b.Z_({
                                required_error: "Missing Phone number."
                            }).trim(),
                            email: b.Z_({
                                required_error: "Email cannot be empty."
                            }).min(1, {
                                message: "Email cannot be empty."
                            }).email("This is not a valid email.").refine(e => (0, U.D6)(e), {
                                message: "Error Incorrect mail format."
                            }),
                            preferredRegion: b.Z_({
                                required_error: "Missing preferred region."
                            }).trim().nullable().optional()
                        }).refine(e => {
                            if ((0, f.yf)("".concat(e.isd).concat(e.mobileNumber))) return !0
                        }, {
                            message: "Invalid phone number format.",
                            path: ["mobileNumber"]
                        }).refine(e => {
                            if ((0, f.yf)("".concat(e.isd).concat(e.mobileNumber))) return !0
                        }, {
                            message: "Invalid ISD",
                            path: ["isd"]
                        }).refine(e => !q && !el || !!e.preferredRegion, {
                            message: "PreferredRegion is required.",
                            path: ["preferredRegion"]
                        }),
                        e$ = (0, x.cI)({
                            resolver: (0, u.F)(ey)
                        }),
                        {
                            preferredTime: ew,
                            preferredLanguage: ej
                        } = ev,
                        eE = (0, x.qo)({
                            control: e$.control,
                            name: "name"
                        }),
                        eC = (0, x.qo)({
                            control: e$.control,
                            name: "isd"
                        }),
                        eS = (0, x.qo)({
                            control: e$.control,
                            name: "mobileNumber"
                        }),
                        eT = (0, x.qo)({
                            control: e$.control,
                            name: "email"
                        }),
                        eI = (0, x.qo)({
                            control: e$.control,
                            name: "preferredRegion"
                        }),
                        ek = (0, p.useMemo)(() => {
                            var e;
                            return null === (e = H.query) || void 0 === e ? void 0 : e.m
                        }, [H]),
                        eP = (0, p.useMemo)(() => {
                            var e;
                            return null === (e = H.query) || void 0 === e ? void 0 : e.autoPopup
                        }, [H]),
                        eM = (0, p.useMemo)(() => {
                            var e;
                            return null === (e = H.query) || void 0 === e ? void 0 : e.name
                        }, [H]),
                        eO = (0, p.useMemo)(() => {
                            var e;
                            return null === (e = H.query) || void 0 === e ? void 0 : e.countryPhoneCode
                        }, [H]),
                        eR = (0, p.useMemo)(() => {
                            var e;
                            return null === (e = H.query) || void 0 === e ? void 0 : e.mobileNumber
                        }, [H]),
                        eL = (0, p.useMemo)(() => {
                            var e;
                            return null === (e = H.query) || void 0 === e ? void 0 : e.email
                        }, [H]),
                        eA = (0, p.useMemo)(() => {
                            var e;
                            return null === (e = H.query) || void 0 === e ? void 0 : e.id
                        }, [H]),
                        eU = (0, p.useMemo)(() => "cbr" === ek, [ek]),
                        eV = (0, p.useMemo)(() => "cbr-otp" === ek, [ek]),
                        e_ = (0, p.useMemo)(() => null == F ? void 0 : F.loggedIn, [F]);
                    (0, p.useEffect)(() => {
                        (null == F ? void 0 : F.loggedIn) && B && (eh(V.uU.SUBMITTED), eg({
                            isError: !1,
                            title: "We have received your details.",
                            message: "Our travel experts will get in touch with you shortly!"
                        }))
                    }, [B, null == F ? void 0 : F.loggedIn]), (0, p.useEffect)(() => {
                        (null == F ? void 0 : F.loggedIn) && el && (eh(V.uU.SUBMITTED), eg({
                            isError: !1,
                            title: "We have received your details.",
                            message: " Your Personal Travel Expert will get in touch with your shortly!"
                        }))
                    }, [el, null == F ? void 0 : F.loggedIn]), (0, p.useEffect)(() => {
                        (null == e$ ? void 0 : e$.getValues("isd")) && eS && (0, f.yf)("".concat(null == e$ ? void 0 : e$.getValues("isd")).concat(eS)) && (null == e$ || e$.clearErrors("isd"))
                    }, [e$, eS]);
                    let ez = (0, p.useCallback)(() => {
                        let e;
                        let i = 20;
                        ea(!1), e = setInterval(() => {
                            0 !== i ? es(i -= 1) : (es(20), ea(!0), clearInterval(e))
                        }, 1e3)
                    }, [ea, es]);
                    (0, p.useEffect)(() => {
                        (eU || eV) && (Y(!0), eV && (eh(V.uU.OTP), ez()))
                    }, [eU, eV, ek, Y, ez]), (0, p.useEffect)(() => {
                        (null == F ? void 0 : F.loggedIn) && ef({
                            name: F.name,
                            countryPhoneCode: F.countryPhoneCode,
                            mobileNumber: F.mobileNumber,
                            email: F.email
                        })
                    }, [F, H]), (0, p.useEffect)(() => {
                        (null == F ? void 0 : F.loggedIn) ? (null == e$ || e$.setValue("name", null == F ? void 0 : F.name, {
                            shouldValidate: !0
                        }), null == e$ || e$.setValue("isd", null == F ? void 0 : F.countryPhoneCode, {
                            shouldValidate: !0
                        }), null == e$ || e$.setValue("mobileNumber", null == F ? void 0 : F.mobileNumber, {
                            shouldValidate: !0
                        }), null == e$ || e$.setValue("email", (null == F ? void 0 : F.email) || "", {
                            shouldValidate: !0
                        })) : (null == e$ || e$.setValue("isd", "in" === ei || "" === ei ? "+91" : "us" === ei ? "+1" : "ae" === ei ? "+971" : "+91", {
                            shouldValidate: !0
                        }), (null == eM ? void 0 : eM.length) && e$.setValue("name", eM, {
                            shouldValidate: !0
                        }), (0, U.D6)(eL) && e$.setValue("email", eL || "", {
                            shouldValidate: !0
                        }), (null == eR ? void 0 : eR.length) && (null == eO ? void 0 : eO.length) && ((0, f.yf)("".concat(eO).concat(eR)) && (null == e$ || e$.setValue("isd", "".concat(eO), {
                            shouldValidate: !0
                        }), null == e$ || e$.setValue("mobileNumber", eR, {
                            shouldValidate: !0
                        })), null == e$ || e$.setValue("isd", "in" === ei || "" === ei ? "+91" : "us" === ei ? "+1" : "ae" === ei ? "+971" : "+91", {
                            shouldValidate: !0
                        })))
                    }, [e$, ei, eO, eL, eR, eM, null == F ? void 0 : F.countryPhoneCode, null == F ? void 0 : F.email, null == F ? void 0 : F.loggedIn, null == F ? void 0 : F.mobileNumber, null == F ? void 0 : F.name]), (0, p.useEffect)(() => {
                        (null == eM ? void 0 : eM.length) && ef({
                            name: eM
                        }), (0, U.D6)(eL) && ef({
                            email: eL
                        }), (null == eR ? void 0 : eR.length) && (null == eO ? void 0 : eO.length) && (0, f.yf)("".concat(eO).concat(eR)) && ef({
                            countryPhoneCode: eO,
                            mobileNumber: eR
                        })
                    }, [eM, eL, eO, eR]);
                    let eW = (0, p.useCallback)(() => {
                            let e = window.setInterval(function() {}, Number.MAX_SAFE_INTEGER);
                            for (let i = 1; i < e; i++) window.clearInterval(i)
                        }, []),
                        eD = (0, p.useCallback)(() => {
                            var e;
                            eU || eV || (0, k.L9W)(k.qRJ), Y(!1), eW(), eh(""), X(!1);
                            let i = null === (e = H.asPath) || void 0 === e ? void 0 : e.split("?")[0];
                            t && t();
                            let l = { ...null == H ? void 0 : H.query
                            };
                            null == l || delete l.m, H.replace({
                                pathname: i,
                                query: "mle" === g ? l : null
                            }, void 0, {
                                shallow: !0,
                                scroll: !1
                            })
                        }, [Y, eW, X, H, t, g]),
                        eN = (0, p.useCallback)(() => {
                            es(20)
                        }, [es]),
                        eq = (0, p.useCallback)(() => {
                            eh("")
                        }, []),
                        eZ = (0, p.useCallback)(async function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            et(""), eu({
                                error: !1,
                                status: "",
                                message: ""
                            });
                            let i = {
                                is_logged_in: !1,
                                leadSource: { ...(0, M.L1)({
                                        router: H,
                                        lastLocation: {
                                            pathname: H.asPath
                                        }
                                    }),
                                    ...el && {
                                        prodType: "LUXE RCB"
                                    }
                                },
                                ipAddress: sessionStorage.getItem("ipaddress") || "",
                                regionCode: q || el ? eI : g,
                                mobileNumber: eS,
                                countryPhoneCode: eC,
                                ...H.query ? H.query : {}
                            };
                            e ? (0, k.L9W)(k.nl4, i) : eE ? (0, k.L9W)(k.PbK, i) : (0, k.L9W)(k.$W1, i);
                            let l = await K({
                                mobileNumber: "".concat(eS),
                                countryPhoneCode: "".concat(eC),
                                name: "".concat(eE)
                            });
                            "SUCCESS" === l.status && l.data && (ex({
                                id: l.data.id,
                                message: l.data.statusMessage
                            }), e || l.data.preferredLanguage ? (et(""), eu({
                                error: !1,
                                status: "",
                                message: ""
                            }), eh(V.uU.OTP), ez()) : eh(V.uU.CHOOSE_LANGUAGE))
                        }, [H, q, eI, g, eS, eC, eE, K, ez, el]),
                        eB = (0, p.useCallback)(async () => {
                            try {
                                var e, i;
                                (0, k.L9W)(eU ? k.Zgo : eV ? k.lDG : k.qNJ);
                                let l = {
                                    name: "".concat(eE),
                                    email: "".concat(eT),
                                    mobileNumber: "".concat(eS),
                                    countryPhoneCode: "".concat(eC),
                                    regionCode: q || el ? eI : g,
                                    pageUrl: H.asPath,
                                    leadSource: { ...(0, M.L1)({
                                            router: H,
                                            lastLocation: {
                                                pathname: H.asPath
                                            },
                                            isCBR: !0
                                        }),
                                        ...el && {
                                            prodType: "LUXE RCB"
                                        }
                                    },
                                    directToSales: !1
                                };
                                ("" === ei || "in" === ei) && (l.otp = em === V.uU.OTP ? eo : void 0, l.canSendWhatsAppMessages = em === V.uU.OTP, l.id = em === V.uU.OTP ? "".concat(ep.id || eA) : void 0, l.preferredTime = null !== (e = null == ew ? void 0 : ew.id) && void 0 !== e ? e : void 0, l.preferredLanguage = null != ej ? ej : void 0), ev.isEMIOpted && (l.isEMIOpted = !0);
                                let o = await Q({
                                    data: l,
                                    locale: ei
                                });
                                if ((null == o ? void 0 : o.status) === "SUCCESS") {
                                    let n = await (0, P.Z)("".concat(eC).concat(eS));
                                    if (window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                                            event: "EC_FormSubmit",
                                            enhanced_conversion_data: {
                                                phone_number: "".concat(eC).concat(eS),
                                                sha256_phone_number: n
                                            }
                                        }), N) {
                                        let a = null === (i = H.asPath) || void 0 === i ? void 0 : i.split("?")[0];
                                        t && t(), H.replace({
                                            pathname: a
                                        }, void 0, {
                                            shallow: !0,
                                            scroll: !1
                                        }), N()
                                    } else eh(V.uU.SUBMITTED), eg({
                                        isError: !1,
                                        title: "We have received your details.",
                                        message: "Our travel experts will get in touch with you shortly!"
                                    });
                                    let r = await ee();
                                    "SUCCESS" === r.status && (r.data.anonymousId && localStorage.setItem("user-anonymous-id", r.data.anonymousId), G(r.data))
                                } else "VERIFICATION_FAILED" === o.status || "EXPIRED" === o.status ? "VERIFICATION_FAILED" === o.status ? eu({
                                    error: !0,
                                    message: "Wrong OTP Entered!"
                                }) : eu({
                                    error: !0,
                                    message: "OTP Expired!"
                                }) : (eh(V.uU.SUBMITTED), eg({
                                    isError: !0,
                                    title: "Oops!",
                                    message: null == o ? void 0 : o.message
                                }))
                            } catch (s) {
                                eh(V.uU.SUBMITTED), eg({
                                    isError: !0,
                                    title: "Oops!",
                                    message: "Something went wrong!"
                                })
                            }
                        }, [eE, eT, eS, eC, q, el, eI, g, H, ei, Q, em, eo, ep.id, eA, null == ew ? void 0 : ew.id, ej, N, ee, t, G]),
                        eH = e => {
                            (0, k.L9W)(k.TRW, {
                                language: e
                            }), ef({
                                preferredLanguage: e
                            }), eh(V.uU.OTP)
                        },
                        eF = (0, x.qo)({
                            control: e$.control,
                            name: "preferredRegion"
                        }),
                        eG = (0, p.useMemo)(() => eb.find(e => e.value === eF) || null, [eF]),
                        eX = (0, p.useMemo)(() => {
                            var e, i;
                            return null != e$ && null !== (e = e$.formState) && void 0 !== e && null !== (i = e.errors) && void 0 !== i && !!i.preferredRegion
                        }, [e$.formState.errors.preferredRegion]),
                        eJ = (0, p.useCallback)(() => {
                            "" === ei || "in" === ei ? e_ ? eB() : eZ() : eB()
                        }, [ei, e_, eB, eZ]);
                    switch (em) {
                        case V.uU.CHOOSE_LANGUAGE:
                            i = (0, o.jsxs)(d.sg, {
                                css: {
                                    width: "100%",
                                    gap: "24px",
                                    "@lg": {
                                        height: "100%"
                                    }
                                },
                                children: [(0, o.jsxs)(d.sg, {
                                    css: {
                                        alignItems: "center",
                                        gap: "$3i",
                                        "@lg": {
                                            alignItems: "flex-start"
                                        }
                                    },
                                    children: [(0, o.jsx)(d.xv, {
                                        css: {
                                            fontSize: "$10i",
                                            lineHeight: "28px",
                                            color: "$grey800",
                                            fontWeight: "$bold"
                                        },
                                        children: "Congratulations! \uD83C\uDF89"
                                    }), (0, o.jsxs)(d.xv, {
                                        css: {
                                            fontSize: "$8i",
                                            lineHeight: "24px",
                                            color: "#464E67",
                                            fontWeight: 400,
                                            textAlign: "center",
                                            "@lg": {
                                                textAlign: "left",
                                                maxWidth: "300px"
                                            }
                                        },
                                        children: ["A local language advisor is available for you.", " ", (0, o.jsx)("b", {
                                            children: "Choose your preference."
                                        })]
                                    })]
                                }), (0, o.jsx)(S.Z, {
                                    onChange: eH
                                }), (0, o.jsx)(d.xu, {
                                    css: {
                                        backgroundColor: "$yellow50",
                                        border: "1px solid $yellow100",
                                        padding: "$4i",
                                        borderRadius: 8
                                    },
                                    children: (0, o.jsx)(d.xv, {
                                        css: {
                                            text: "$grey900",
                                            fontSize: "13px",
                                            fontWeight: "$semiBold",
                                            textAlign: "center"
                                        },
                                        children: "Note: All travel experts are well-versed in English too."
                                    })
                                })]
                            });
                            break;
                        case V.uU.OTP:
                            i = (0, o.jsx)(d.xu, {
                                css: {
                                    width: "100%",
                                    "@lg": {
                                        height: "100%"
                                    }
                                },
                                children: (0, o.jsxs)(d.sg, {
                                    css: {
                                        height: "100%",
                                        width: "100%"
                                    },
                                    children: [(0, o.jsxs)(d.xu, {
                                        children: [(0, o.jsx)(d.xv, {
                                            css: {
                                                fontSize: "$12i",
                                                lineHeight: "30px",
                                                color: "$black",
                                                fontWeight: "$bold"
                                            },
                                            children: "Enter OTP"
                                        }), (0, o.jsxs)(d.xv, {
                                            css: {
                                                fontSize: "$7i",
                                                lineHeight: "$8i",
                                                color: "$grey08",
                                                fontWeight: "$normal",
                                                paddingTop: "$2i",
                                                "@lg": {
                                                    paddingTop: "$6i"
                                                }
                                            },
                                            children: [ep.message, " ", "+91" === eC && (0, o.jsxs)(d.kC, {
                                                align: "center",
                                                css: {
                                                    display: "inline-flex",
                                                    paddingTop: "$2i"
                                                },
                                                children: [(0, o.jsxs)(d.xv, {
                                                    css: {
                                                        fontSize: "$7i",
                                                        lineHeight: "$8i",
                                                        color: "$black",
                                                        fontWeight: "$normal"
                                                    },
                                                    children: [eC, " ", eS]
                                                }), (0, o.jsx)(a.Z, {
                                                    css: {
                                                        width: "$9i",
                                                        height: "$9i",
                                                        paddingLeft: "$2i",
                                                        fill: "$grey12",
                                                        cursor: "pointer"
                                                    },
                                                    onClick: () => {
                                                        eW(), eN(), eq()
                                                    }
                                                })]
                                            })]
                                        })]
                                    }), (0, o.jsxs)(d.sg, {
                                        css: {
                                            gap: "$8i",
                                            paddingTop: "$12i"
                                        },
                                        children: [(0, o.jsx)(d.X2, {
                                            children: (0, o.jsx)(v.Z, {
                                                value: eo,
                                                onChange: e => et(e),
                                                numInputs: 6,
                                                isInputNum: !0,
                                                shouldAutoFocus: !0,
                                                inputStyle: {
                                                    minHeight: "46px",
                                                    width: "42px",
                                                    backgroundColor: "#F9F9F9",
                                                    borderRadius: 8,
                                                    textAlign: "center",
                                                    border: ed.error ? "1px solid #D73C54" : "1px solid #D8D8D8",
                                                    fontSize: "20px",
                                                    fontWeight: 600
                                                },
                                                containerStyle: {
                                                    width: "100%",
                                                    display: "flex",
                                                    justifyContent: "space-between"
                                                },
                                                focusStyle: {
                                                    outline: "none",
                                                    border: (0, L.Z)() ? "1px solid #9E2C00" : "1px solid #09B367",
                                                    borderRadius: "8px"
                                                }
                                            })
                                        }), (0, o.jsxs)(d.X2, {
                                            justify: ed.error ? "between" : "end",
                                            children: [ed.error && (0, o.jsxs)(d.X2, {
                                                css: {
                                                    gap: "1px"
                                                },
                                                children: [(0, o.jsx)(r.Z, {
                                                    css: {
                                                        fill: "$red06"
                                                    }
                                                }), (0, o.jsx)(d.xv, {
                                                    css: {
                                                        fontSize: "13px",
                                                        color: "$red06",
                                                        lineHeight: "15px"
                                                    },
                                                    children: "VERIFICATION_FAILED" === ed.status ? "Wrong OTP Entered!" : ed.message || "Wrong OTP Entered!"
                                                })]
                                            }), en ? (0, o.jsx)(d.xv, {
                                                css: {
                                                    fontSize: "13px",
                                                    fontWeight: "$bold",
                                                    color: "$custom40",
                                                    lineHeight: "$1",
                                                    textAlign: "end",
                                                    cursor: "pointer",
                                                    textDecorationLine: "underline",
                                                    textDecorationThickness: "1px"
                                                },
                                                onClick: () => eZ(!0),
                                                children: "Resend OTP"
                                            }) : (0, o.jsxs)(d.xv, {
                                                css: {
                                                    fontSize: "13px",
                                                    fontWeight: "$bold",
                                                    color: "$grey09",
                                                    lineHeight: "$1",
                                                    textAlign: "end",
                                                    cursor: "not-allowed"
                                                },
                                                children: ["Resend OTP in ", er]
                                            })]
                                        })]
                                    }), (0, o.jsxs)(d.sg, {
                                        css: {
                                            flex: 1,
                                            justifyContent: "end",
                                            "@lg": {
                                                justifyContent: "start"
                                            },
                                            "@smMax": {
                                                paddingTop: "40px"
                                            }
                                        },
                                        children: [(0, o.jsx)(d.xv, {
                                            css: {
                                                fontSize: "13px",
                                                lineHeight: "$8i",
                                                color: "$grey07",
                                                fontWeight: "$normal",
                                                paddingTop: "$6i",
                                                letterSpacing: "0.2px",
                                                textAlign: "start",
                                                "@lg": {
                                                    paddingTop: "$12i"
                                                }
                                            },
                                            children: "On clicking below, I agree to receive important information sent via WhatsApp, SMS and Calls."
                                        }), (0, o.jsx)(d.zx, {
                                            onClick: () => {
                                                6 === eo.length && eB()
                                            },
                                            disabled: 6 !== eo.length,
                                            css: {
                                                minHeight: "$24i",
                                                color: "$white",
                                                fontSize: "15px",
                                                fontWeight: "$bold",
                                                marginTop: "$12i",
                                                borderRadius: "12px",
                                                "@lg": {
                                                    height: "$26i",
                                                    marginTop: "$5i"
                                                }
                                            },
                                            children: D || "Place Request"
                                        })]
                                    })]
                                })
                            });
                            break;
                        case V.uU.SUBMITTED:
                            i = (0, o.jsxs)(d.sg, {
                                align: "center",
                                justify: "center",
                                css: {
                                    width: "100%",
                                    rowGap: "$10i",
                                    "@smMax": {
                                        paddingTop: "10%"
                                    }
                                },
                                children: [(0, o.jsx)(z, {
                                    src: ec.isError ? "https://oceanjar-new.s3.ap-south-1.amazonaws.com/cbr-error.png" : "https://oceanjar-new.s3.ap-south-1.amazonaws.com/cbr-success.png",
                                    width: "96px",
                                    height: "96px",
                                    css: {
                                        "@lg": {
                                            borderTopLeftRadius: "8px",
                                            borderBottomLeftRadius: "8px"
                                        }
                                    }
                                }), (0, o.jsxs)(d.sg, {
                                    css: {
                                        rowGap: "$8i",
                                        width: "80%"
                                    },
                                    children: [(0, o.jsxs)(d.xv, {
                                        css: {
                                            fontSize: "18px",
                                            fontWeight: "bold",
                                            color: "$grey12",
                                            lineHeight: "$12i",
                                            textAlign: "center"
                                        },
                                        children: [ec.title, " "]
                                    }), (0, o.jsx)(d.xv, {
                                        css: {
                                            fontSize: "$8i",
                                            color: "$grey12",
                                            lineHeight: "$12i",
                                            textAlign: "center"
                                        },
                                        children: ec.message
                                    })]
                                }), (0, o.jsx)(d.zx, {
                                    primary: !0,
                                    size: "lg",
                                    css: {
                                        width: "224px",
                                        height: "$26i",
                                        fontSize: "$8i",
                                        fontWeight: "$bold",
                                        cursor: "pointer",
                                        borderRadius: "12px",
                                        marginTop: "$6i"
                                    },
                                    onClick: () => {
                                        ec.isError ? (eW(), eq()) : eD(), ec.isError || "string" != typeof Z || (0, A.Z)(Z)
                                    },
                                    children: ec.isError ? "Okay, go back!" : "Okay, Got it!"
                                })]
                            });
                            break;
                        default:
                            var eY, eK, eQ, e0, e1;
                            i = (0, o.jsx)(p.Fragment, {
                                children: (0, o.jsx)(x.RV, { ...e$,
                                    children: (0, o.jsx)("form", {
                                        onSubmit: e$.handleSubmit(eJ),
                                        children: (0, o.jsxs)(d.sg, {
                                            css: {
                                                rowGap: "$10i",
                                                flex: 1,
                                                "@lg": {
                                                    paddingBottom: "0px",
                                                    height: "100%"
                                                }
                                            },
                                            children: [(0, o.jsx)(d.xv, {
                                                css: {
                                                    width: "85%",
                                                    fontSize: eP ? "$10i" : "$9i",
                                                    fontWeight: eP ? "$extraBold" : "$bold",
                                                    lineHeight: eP ? "$14i" : "$12i",
                                                    color: eP ? "$accent400" : "$grey12",
                                                    "@lg": {
                                                        fontSize: eP ? "$14i" : "$9i",
                                                        lineHeight: eP ? "$19i" : "$12i"
                                                    }
                                                },
                                                children: eP ? "Unable to decide? Get FREE advice from our travel expert" : el ? "Premium Travel Assistance, Just for You!" : "Have a question? Enter your details"
                                            }), (0, o.jsxs)(d.sg, {
                                                css: {
                                                    gap: "$8i",
                                                    "@lg": {
                                                        height: "100%",
                                                        overflow: "auto"
                                                    }
                                                },
                                                children: [(0, o.jsx)(d.xu, {
                                                    css: {
                                                        width: "100%",
                                                        "@lg": {
                                                            marginBottom: 0,
                                                            marginLeft: 0,
                                                            marginTop: 0
                                                        }
                                                    },
                                                    children: (0, o.jsx)(T.Z, {
                                                        label: "Given Name",
                                                        type: "text",
                                                        name: "name",
                                                        control: e$.control,
                                                        readOnly: !!e_ && null != F && !!F.name && (null == F ? void 0 : null === (eY = F.name) || void 0 === eY ? void 0 : eY.length) > 0,
                                                        defaultValue: null == F ? void 0 : F.name
                                                    })
                                                }), (0, o.jsxs)(d.X2, {
                                                    css: {
                                                        width: "100%",
                                                        gap: "$4i"
                                                    },
                                                    children: [(0, o.jsx)(d.xu, {
                                                        css: {
                                                            width: "30%",
                                                            "@lg": {
                                                                marginBottom: 0,
                                                                marginLeft: 0,
                                                                marginTop: 0
                                                            }
                                                        },
                                                        children: (0, o.jsx)(T.Z, {
                                                            hideErrorMsg: (null == e$ ? void 0 : null === (eK = e$.formState) || void 0 === eK ? void 0 : null === (eQ = eK.errors) || void 0 === eQ ? void 0 : null === (e0 = eQ.isd) || void 0 === e0 ? void 0 : e0.message) === "Invalid ISD",
                                                            label: "ISD",
                                                            type: "text",
                                                            name: "isd",
                                                            control: e$.control,
                                                            readOnly: !!e_ && null != F && !!F.countryPhoneCode && (null == F ? void 0 : null === (e1 = F.countryPhoneCode) || void 0 === e1 ? void 0 : e1.length) > 0,
                                                            defaultValue: (null == F ? void 0 : F.countryPhoneCode) ? null == F ? void 0 : F.countryPhoneCode : "in" === ei || "" === ei ? "+91" : "us" === ei ? "+1" : "ae" === ei ? "+971" : "+91"
                                                        })
                                                    }), (0, o.jsx)(d.xu, {
                                                        css: {
                                                            width: "70%",
                                                            "@lg": {
                                                                marginBottom: 0,
                                                                marginLeft: 0,
                                                                marginTop: 0
                                                            }
                                                        },
                                                        children: (0, o.jsx)(T.Z, {
                                                            label: "Enter your mobile number",
                                                            type: "text",
                                                            name: "mobileNumber",
                                                            control: e$.control,
                                                            readOnly: e_ && (0, f.yf)("".concat(null == F ? void 0 : F.countryPhoneCode).concat(null == F ? void 0 : F.mobileNumber)),
                                                            defaultValue: null == F ? void 0 : F.mobileNumber
                                                        })
                                                    })]
                                                }), (0, o.jsx)(d.xu, {
                                                    css: {
                                                        width: "100%",
                                                        "@lg": {
                                                            marginBottom: 0,
                                                            marginLeft: 0,
                                                            marginTop: 0
                                                        }
                                                    },
                                                    children: (0, o.jsx)(T.Z, {
                                                        label: "Email Address",
                                                        type: "text",
                                                        name: "email",
                                                        control: e$.control,
                                                        readOnly: !!e_ && null != F && !!F.email && (0, U.D6)(eT),
                                                        defaultValue: null == F ? void 0 : F.email
                                                    })
                                                }), (0, o.jsx)(d.xu, {
                                                    children: q || el ? (0, o.jsx)(j.ZP, {
                                                        options: eb && (null == H ? void 0 : H.asPath.includes("campaignWithoutLandingPage=true")) ? [{
                                                            value: "idn",
                                                            label: "Bali"
                                                        }, {
                                                            value: "tha",
                                                            label: "Thailand"
                                                        }, {
                                                            value: "mle",
                                                            label: "Maldives"
                                                        }] : eb,
                                                        label: "Preferred region",
                                                        value: eG,
                                                        itemToString: e => e ? e.label : "",
                                                        onChange: e => {
                                                            e$.setValue("preferredRegion", (null == e ? void 0 : e.value) || "", {
                                                                shouldValidate: !0
                                                            })
                                                        },
                                                        hasError: eX,
                                                        name: "preferredRegion",
                                                        errorMessage: "Missing preferred region",
                                                        isPax: !1,
                                                        title: "Preferred Regions"
                                                    }) : null
                                                }), (null == F ? void 0 : F.loggedIn) ? null : (0, o.jsx)(C.Z, {
                                                    isChecked: ev.isEMIOpted || !1,
                                                    onChange: e => ef({
                                                        isEMIOpted: e || !1
                                                    })
                                                }), (0, o.jsx)(d.zx, {
                                                    type: "submit",
                                                    css: {
                                                        height: "$26i",
                                                        marginTop: "auto",
                                                        fontWeight: "$bolder",
                                                        borderRadius: "$2",
                                                        "@smMax": {
                                                            marginTop: "$8i"
                                                        }
                                                    },
                                                    children: D || " Request callback"
                                                })]
                                            })]
                                        })
                                    })
                                })
                            })
                    }
                    return (0, o.jsx)(s.Vq.fC, {
                        open: l || J,
                        onOpenChange: eD,
                        defaultOpen: !0,
                        children: (0, o.jsxs)(s.Vq.VY, {
                            css: {
                                padding: 0,
                                height: "100%",
                                width: "100%",
                                pointerEvents: "all !important",
                                zIndex: "$max !important",
                                "& > button": {
                                    display: "none"
                                },
                                "@lg": {
                                    display: "flex",
                                    height: "560px",
                                    width: "752px",
                                    borderRadius: "16px",
                                    overflow: "hidden"
                                },
                                "@smMax": {
                                    all: "revert",
                                    backgroundColor: "$white",
                                    position: "fixed",
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    outline: 0,
                                    overflow: "auto"
                                }
                            },
                            children: [(0, o.jsx)(E.default, {
                                title: "Pickyourtrail",
                                description: "",
                                slug: "",
                                crawlable: !1
                            }), (0, o.jsx)(d.xu, {
                                css: {
                                    backgroundColor: "$custom31",
                                    borderTopLeftRadius: "16px",
                                    borderBottomLeftRadius: "16px",
                                    "@smMax": {
                                        display: "none"
                                    }
                                },
                                children: (0, o.jsx)(d.sg, {
                                    css: {
                                        display: "none",
                                        "@lg": {
                                            display: "flex",
                                            height: "500x",
                                            backgroundColor: "$primary00",
                                            position: "relative",
                                            overflow: "hidden",
                                            width: "351px"
                                        }
                                    },
                                    children: (0, o.jsx)(m(), {
                                        src: "".concat((0, O.Z)(el ? "https://oceanjar-new.s3.ap-south-1.amazonaws.com/images/web_app/packages_v2/desktop.jpg" : "https://oceanjar-new.s3.ap-south-1.amazonaws.com/images/web_app/gcm/WEB-min.png", "https://images.pickyourtrail.com"), "?auto=format&fit=contain"),
                                        alt: "img",
                                        width: 351,
                                        height: 560
                                    })
                                })
                            }), (em !== V.uU.OTP || em === V.uU.SUBMITTED) && (0, o.jsx)(d.xu, {
                                css: {
                                    backgroundColor: "$custom31",
                                    position: "relative",
                                    "@lg": {
                                        display: "none"
                                    }
                                },
                                children: (0, o.jsxs)(d.sg, {
                                    css: {
                                        display: "flex",
                                        height: "324px",
                                        backgroundColor: "$primary00",
                                        position: "relative",
                                        overflow: "hidden",
                                        width: "100%",
                                        "@lg": {
                                            display: "none"
                                        }
                                    },
                                    children: [(0, o.jsx)(m(), {
                                        src: (0, O.Z)(el ? "https://oceanjar-new.s3.ap-south-1.amazonaws.com/images/web_app/packages_v2/mobile.jpg" : "https://oceanjar-new.s3.ap-south-1.amazonaws.com/images/web_app/gcm/MOBIE-min.png", "https://images.pickyourtrail.com"),
                                        alt: "img",
                                        style: {
                                            objectFit: el ? "fill" : "cover"
                                        },
                                        fill: !0,
                                        unoptimized: !0
                                    }), (0, o.jsx)(d.hU, {
                                        onClick: eD,
                                        css: {
                                            cursor: "pointer",
                                            display: "flex",
                                            position: "absolute",
                                            top: "24px",
                                            right: "24px",
                                            "@lg": {
                                                top: "32px",
                                                right: "32px"
                                            }
                                        },
                                        children: (0, o.jsx)(n.Z, {
                                            css: {
                                                fill: "#fff",
                                                height: "$11i",
                                                width: "$11i",
                                                "@lg": {
                                                    fill: "$black"
                                                }
                                            }
                                        })
                                    })]
                                })
                            }), (0, o.jsxs)(d.kC, {
                                css: {
                                    width: "100%",
                                    gap: "24px",
                                    padding: "24px",
                                    "@lg": {
                                        height: "100%",
                                        padding: "32px"
                                    }
                                },
                                children: [(0, o.jsx)(d.xu, {
                                    css: {
                                        display: em !== V.uU.OTP ? "none" : em === V.uU.SUBMITTED ? "none" : "block",
                                        position: "absolute",
                                        top: "24px",
                                        right: "24px",
                                        "@lg": {
                                            display: "block",
                                            top: "32px",
                                            right: "32px"
                                        }
                                    },
                                    children: (0, o.jsx)(n.Z, {
                                        cursor: "pointer",
                                        fill: "#333",
                                        onClick: eD,
                                        css: {
                                            height: "$11i",
                                            width: "$11i"
                                        }
                                    })
                                }), i]
                            })]
                        })
                    })
                };
            i.default = D
        },
        51121: function(e, i, l) {
            function o(e) {
                let i = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
                return i.test(e)
            }

            function t(e) {
                return (null == e ? void 0 : e.length) === 10
            }
            l.d(i, {
                D6: function() {
                    return o
                },
                kA: function() {
                    return t
                }
            }), l(30381)
        }
    }
]);