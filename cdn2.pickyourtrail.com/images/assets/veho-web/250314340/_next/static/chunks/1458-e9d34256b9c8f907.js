"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1458], {
        75454: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return i
                }
            });
            var r = n(85893);
            n(67294);
            var a = n(87789);
            let d = (0, a.zo)(function(t) {
                    return (0, r.jsx)("svg", {
                        width: "1em",
                        height: "1em",
                        viewBox: "0 0 24 24",
                        ...t,
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M18.221 4.336a1.04 1.04 0 011.558 1.38l-7.326 8.39-2.079.52.536-2.143 7.311-8.147zm2.646-1.7A3.04 3.04 0 0016.733 3l-7.477 8.332a1 1 0 00-.226.425l-1 4a1 1 0 001.213 1.213l4-1a1 1 0 00.51-.312l7.533-8.627a3.04 3.04 0 00-.419-4.396zM6 2a4 4 0 00-4 4v12a4 4 0 004 4h12a4 4 0 004-4v-7a1 1 0 10-2 0v7a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h7a1 1 0 100-2H6z",
                            clipRule: "evenodd"
                        })
                    })
                }),
                o = t => {
                    let {
                        fill: e,
                        ...n
                    } = t;
                    return (0, r.jsx)(d, {
                        css: {
                            fill: e
                        },
                        ...n
                    })
                };
            var i = o
        },
        71470: function(t, e, n) {
            e.Z = void 0;
            var r = function(t, e) {
                    if (!e && t && t.__esModule) return t;
                    if (null === t || "object" !== y(t) && "function" != typeof t) return {
                        default: t
                    };
                    var n = d(e);
                    if (n && n.has(t)) return n.get(t);
                    var r = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in t)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(t, o)) {
                            var i = a ? Object.getOwnPropertyDescriptor(t, o) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, o, i) : r[o] = t[o]
                        }
                    return r.default = t, n && n.set(t, r), r
                }(n(67294)),
                a = ["placeholder", "separator", "isLastChild", "inputStyle", "focus", "isDisabled", "hasErrored", "errorStyle", "focusStyle", "disabledStyle", "shouldAutoFocus", "isInputNum", "index", "value", "className", "isInputSecure"];

            function d(t) {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap,
                    n = new WeakMap;
                return (d = function(t) {
                    return t ? n : e
                })(t)
            }

            function o() {
                return (o = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }

            function i(t, e) {
                if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
            }

            function u(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function l(t, e, n) {
                return e && u(t.prototype, e), n && u(t, n), t
            }

            function c(t, e) {
                if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && $(t, e)
            }

            function $(t, e) {
                return ($ = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function s(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r, a = p(t);
                    if (e) {
                        var d = p(this).constructor;
                        r = Reflect.construct(a, arguments, d)
                    } else r = a.apply(this, arguments);
                    return (n = r) && ("object" === y(n) || "function" == typeof n) ? n : f(this)
                }
            }

            function f(t) {
                if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function p(t) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function h(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function y(t) {
                return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            var g = function(t) {
                    return "object" === y(t)
                },
                m = function(t) {
                    c(n, t);
                    var e = s(n);

                    function n(t) {
                        var a;
                        return i(this, n), h(f(a = e.call(this, t)), "getClasses", function() {
                            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                            return e.filter(function(t) {
                                return !g(t) && !1 !== t
                            }).join(" ")
                        }), h(f(a), "getType", function() {
                            var t = a.props,
                                e = t.isInputSecure,
                                n = t.isInputNum;
                            return e ? "password" : n ? "tel" : "text"
                        }), a.input = r.default.createRef(), a
                    }
                    return l(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var t = this.props,
                                e = t.focus,
                                n = t.shouldAutoFocus,
                                r = this.input.current;
                            r && e && n && r.focus()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(t) {
                            var e = this.props.focus,
                                n = this.input.current;
                            t.focus !== e && n && e && (n.focus(), n.select())
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this.props,
                                e = t.placeholder,
                                n = t.separator,
                                d = t.isLastChild,
                                i = t.inputStyle,
                                u = t.focus,
                                l = t.isDisabled,
                                c = t.hasErrored,
                                $ = t.errorStyle,
                                s = t.focusStyle,
                                f = t.disabledStyle,
                                p = (t.shouldAutoFocus, t.isInputNum),
                                h = t.index,
                                y = t.value,
                                m = t.className,
                                v = (t.isInputSecure, function(t, e) {
                                    if (null == t) return {};
                                    var n, r, a = function(t, e) {
                                        if (null == t) return {};
                                        var n, r, a = {},
                                            d = Object.keys(t);
                                        for (r = 0; r < d.length; r++) n = d[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                                        return a
                                    }(t, e);
                                    if (Object.getOwnPropertySymbols) {
                                        var d = Object.getOwnPropertySymbols(t);
                                        for (r = 0; r < d.length; r++) n = d[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                                    }
                                    return a
                                }(t, a));
                            return r.default.createElement("div", {
                                className: m,
                                style: {
                                    display: "flex",
                                    alignItems: "center"
                                }
                            }, r.default.createElement("input", o({
                                "aria-label": "".concat(0 === h ? "Please enter verification code. " : "").concat(p ? "Digit" : "Character", " ").concat(h + 1),
                                autoComplete: "off",
                                style: Object.assign({
                                    width: "1em",
                                    textAlign: "center"
                                }, g(i) && i, u && g(s) && s, l && g(f) && f, c && g($) && $),
                                placeholder: e,
                                className: this.getClasses(i, u && s, l && f, c && $),
                                type: this.getType(),
                                maxLength: "1",
                                ref: this.input,
                                disabled: l,
                                value: y || ""
                            }, v)), !d && n)
                        }
                    }]), n
                }(r.PureComponent),
                v = function(t) {
                    c(n, t);
                    var e = s(n);

                    function n() {
                        var t;
                        i(this, n);
                        for (var a = arguments.length, d = Array(a), o = 0; o < a; o++) d[o] = arguments[o];
                        return h(f(t = e.call.apply(e, [this].concat(d))), "state", {
                            activeInput: 0
                        }), h(f(t), "getOtpValue", function() {
                            return t.props.value ? t.props.value.toString().split("") : []
                        }), h(f(t), "getPlaceholderValue", function() {
                            var e = t.props,
                                n = e.placeholder,
                                r = e.numInputs;
                            if ("string" == typeof n) {
                                if (n.length === r) return n;
                                n.length > 0 && console.error("Length of the placeholder should be equal to the number of inputs.")
                            }
                        }), h(f(t), "handleOtpChange", function(e) {
                            (0, t.props.onChange)(e.join(""))
                        }), h(f(t), "isInputValueValid", function(e) {
                            return (t.props.isInputNum ? !isNaN(parseInt(e, 10)) : "string" == typeof e) && 1 === e.trim().length
                        }), h(f(t), "focusInput", function(e) {
                            var n = t.props.numInputs;
                            t.setState({
                                activeInput: Math.max(Math.min(n - 1, e), 0)
                            })
                        }), h(f(t), "focusNextInput", function() {
                            var e = t.state.activeInput;
                            t.focusInput(e + 1)
                        }), h(f(t), "focusPrevInput", function() {
                            var e = t.state.activeInput;
                            t.focusInput(e - 1)
                        }), h(f(t), "changeCodeAtFocus", function(e) {
                            var n = t.state.activeInput,
                                r = t.getOtpValue();
                            r[n] = e[0], t.handleOtpChange(r)
                        }), h(f(t), "handleOnPaste", function(e) {
                            e.preventDefault();
                            var n = t.state.activeInput,
                                r = t.props,
                                a = r.numInputs;
                            if (!r.isDisabled) {
                                for (var d = t.getOtpValue(), o = n, i = e.clipboardData.getData("text/plain").slice(0, a - n).split(""), u = 0; u < a; ++u) u >= n && i.length > 0 && (d[u] = i.shift(), o++);
                                t.setState({
                                    activeInput: o
                                }, function() {
                                    t.focusInput(o), t.handleOtpChange(d)
                                })
                            }
                        }), h(f(t), "handleOnChange", function(e) {
                            var n = e.target.value;
                            t.isInputValueValid(n) && t.changeCodeAtFocus(n)
                        }), h(f(t), "handleOnKeyDown", function(e) {
                            8 === e.keyCode || "Backspace" === e.key ? (e.preventDefault(), t.changeCodeAtFocus(""), t.focusPrevInput()) : 46 === e.keyCode || "Delete" === e.key ? (e.preventDefault(), t.changeCodeAtFocus("")) : 37 === e.keyCode || "ArrowLeft" === e.key ? (e.preventDefault(), t.focusPrevInput()) : 39 === e.keyCode || "ArrowRight" === e.key ? (e.preventDefault(), t.focusNextInput()) : (32 === e.keyCode || " " === e.key || "Spacebar" === e.key || "Space" === e.key) && e.preventDefault()
                        }), h(f(t), "handleOnInput", function(e) {
                            if (t.isInputValueValid(e.target.value)) t.focusNextInput();
                            else if (!t.props.isInputNum) {
                                var n = e.nativeEvent;
                                null === n.data && "deleteContentBackward" === n.inputType && (e.preventDefault(), t.changeCodeAtFocus(""), t.focusPrevInput())
                            }
                        }), h(f(t), "renderInputs", function() {
                            for (var e = t.state.activeInput, n = t.props, a = n.numInputs, d = n.inputStyle, o = n.focusStyle, i = n.separator, u = n.isDisabled, l = n.disabledStyle, c = n.hasErrored, $ = n.errorStyle, s = n.shouldAutoFocus, f = n.isInputNum, p = n.isInputSecure, h = n.className, y = [], g = t.getOtpValue(), v = t.getPlaceholderValue(), b = t.props["data-cy"], C = t.props["data-testid"], O = function(n) {
                                    y.push(r.default.createElement(m, {
                                        placeholder: v && v[n],
                                        key: n,
                                        index: n,
                                        focus: e === n,
                                        value: g && g[n],
                                        onChange: t.handleOnChange,
                                        onKeyDown: t.handleOnKeyDown,
                                        onInput: t.handleOnInput,
                                        onPaste: t.handleOnPaste,
                                        onFocus: function(e) {
                                            t.setState({
                                                activeInput: n
                                            }), e.target.select()
                                        },
                                        onBlur: function() {
                                            return t.setState({
                                                activeInput: -1
                                            })
                                        },
                                        separator: i,
                                        inputStyle: d,
                                        focusStyle: o,
                                        isLastChild: n === a - 1,
                                        isDisabled: u,
                                        disabledStyle: l,
                                        hasErrored: c,
                                        errorStyle: $,
                                        shouldAutoFocus: s,
                                        isInputNum: f,
                                        isInputSecure: p,
                                        className: h,
                                        "data-cy": b && "".concat(b, "-").concat(n),
                                        "data-testid": C && "".concat(C, "-").concat(n)
                                    }))
                                }, N = 0; N < a; N++) O(N);
                            return y
                        }), t
                    }
                    return l(n, [{
                        key: "render",
                        value: function() {
                            var t = this.props.containerStyle;
                            return r.default.createElement("div", {
                                style: Object.assign({
                                    display: "flex"
                                }, g(t) && t),
                                className: g(t) ? "" : t
                            }, this.renderInputs())
                        }
                    }]), n
                }(r.Component);
            h(v, "defaultProps", {
                numInputs: 4,
                onChange: function(t) {
                    return console.log(t)
                },
                isDisabled: !1,
                shouldAutoFocus: !1,
                value: "",
                isInputSecure: !1
            }), e.Z = v
        },
        46007: function(t, e, n) {
            n.d(e, {
                ZP: function() {
                    return nA
                },
                un: function() {
                    return nT
                },
                Gg: function() {
                    return nM
                },
                yf: function() {
                    return nk
                },
                SR: function() {
                    return nj
                }
            });
            var r = {
                version: 4,
                country_calling_codes: {
                    1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"],
                    7: ["RU", "KZ"],
                    20: ["EG"],
                    27: ["ZA"],
                    30: ["GR"],
                    31: ["NL"],
                    32: ["BE"],
                    33: ["FR"],
                    34: ["ES"],
                    36: ["HU"],
                    39: ["IT", "VA"],
                    40: ["RO"],
                    41: ["CH"],
                    43: ["AT"],
                    44: ["GB", "GG", "IM", "JE"],
                    45: ["DK"],
                    46: ["SE"],
                    47: ["NO", "SJ"],
                    48: ["PL"],
                    49: ["DE"],
                    51: ["PE"],
                    52: ["MX"],
                    53: ["CU"],
                    54: ["AR"],
                    55: ["BR"],
                    56: ["CL"],
                    57: ["CO"],
                    58: ["VE"],
                    60: ["MY"],
                    61: ["AU", "CC", "CX"],
                    62: ["ID"],
                    63: ["PH"],
                    64: ["NZ"],
                    65: ["SG"],
                    66: ["TH"],
                    81: ["JP"],
                    82: ["KR"],
                    84: ["VN"],
                    86: ["CN"],
                    90: ["TR"],
                    91: ["IN"],
                    92: ["PK"],
                    93: ["AF"],
                    94: ["LK"],
                    95: ["MM"],
                    98: ["IR"],
                    211: ["SS"],
                    212: ["MA", "EH"],
                    213: ["DZ"],
                    216: ["TN"],
                    218: ["LY"],
                    220: ["GM"],
                    221: ["SN"],
                    222: ["MR"],
                    223: ["ML"],
                    224: ["GN"],
                    225: ["CI"],
                    226: ["BF"],
                    227: ["NE"],
                    228: ["TG"],
                    229: ["BJ"],
                    230: ["MU"],
                    231: ["LR"],
                    232: ["SL"],
                    233: ["GH"],
                    234: ["NG"],
                    235: ["TD"],
                    236: ["CF"],
                    237: ["CM"],
                    238: ["CV"],
                    239: ["ST"],
                    240: ["GQ"],
                    241: ["GA"],
                    242: ["CG"],
                    243: ["CD"],
                    244: ["AO"],
                    245: ["GW"],
                    246: ["IO"],
                    247: ["AC"],
                    248: ["SC"],
                    249: ["SD"],
                    250: ["RW"],
                    251: ["ET"],
                    252: ["SO"],
                    253: ["DJ"],
                    254: ["KE"],
                    255: ["TZ"],
                    256: ["UG"],
                    257: ["BI"],
                    258: ["MZ"],
                    260: ["ZM"],
                    261: ["MG"],
                    262: ["RE", "YT"],
                    263: ["ZW"],
                    264: ["NA"],
                    265: ["MW"],
                    266: ["LS"],
                    267: ["BW"],
                    268: ["SZ"],
                    269: ["KM"],
                    290: ["SH", "TA"],
                    291: ["ER"],
                    297: ["AW"],
                    298: ["FO"],
                    299: ["GL"],
                    350: ["GI"],
                    351: ["PT"],
                    352: ["LU"],
                    353: ["IE"],
                    354: ["IS"],
                    355: ["AL"],
                    356: ["MT"],
                    357: ["CY"],
                    358: ["FI", "AX"],
                    359: ["BG"],
                    370: ["LT"],
                    371: ["LV"],
                    372: ["EE"],
                    373: ["MD"],
                    374: ["AM"],
                    375: ["BY"],
                    376: ["AD"],
                    377: ["MC"],
                    378: ["SM"],
                    380: ["UA"],
                    381: ["RS"],
                    382: ["ME"],
                    383: ["XK"],
                    385: ["HR"],
                    386: ["SI"],
                    387: ["BA"],
                    389: ["MK"],
                    420: ["CZ"],
                    421: ["SK"],
                    423: ["LI"],
                    500: ["FK"],
                    501: ["BZ"],
                    502: ["GT"],
                    503: ["SV"],
                    504: ["HN"],
                    505: ["NI"],
                    506: ["CR"],
                    507: ["PA"],
                    508: ["PM"],
                    509: ["HT"],
                    590: ["GP", "BL", "MF"],
                    591: ["BO"],
                    592: ["GY"],
                    593: ["EC"],
                    594: ["GF"],
                    595: ["PY"],
                    596: ["MQ"],
                    597: ["SR"],
                    598: ["UY"],
                    599: ["CW", "BQ"],
                    670: ["TL"],
                    672: ["NF"],
                    673: ["BN"],
                    674: ["NR"],
                    675: ["PG"],
                    676: ["TO"],
                    677: ["SB"],
                    678: ["VU"],
                    679: ["FJ"],
                    680: ["PW"],
                    681: ["WF"],
                    682: ["CK"],
                    683: ["NU"],
                    685: ["WS"],
                    686: ["KI"],
                    687: ["NC"],
                    688: ["TV"],
                    689: ["PF"],
                    690: ["TK"],
                    691: ["FM"],
                    692: ["MH"],
                    850: ["KP"],
                    852: ["HK"],
                    853: ["MO"],
                    855: ["KH"],
                    856: ["LA"],
                    880: ["BD"],
                    886: ["TW"],
                    960: ["MV"],
                    961: ["LB"],
                    962: ["JO"],
                    963: ["SY"],
                    964: ["IQ"],
                    965: ["KW"],
                    966: ["SA"],
                    967: ["YE"],
                    968: ["OM"],
                    970: ["PS"],
                    971: ["AE"],
                    972: ["IL"],
                    973: ["BH"],
                    974: ["QA"],
                    975: ["BT"],
                    976: ["MN"],
                    977: ["NP"],
                    992: ["TJ"],
                    993: ["TM"],
                    994: ["AZ"],
                    995: ["GE"],
                    996: ["KG"],
                    998: ["UZ"]
                },
                countries: {
                    AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]],
                    AD: ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9],
                        [
                            ["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["1"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]
                        ]
                    ],
                    AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12],
                        [
                            ["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]],
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"],
                            ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]
                        ], "0"
                    ],
                    AF: ["93", "00", "[2-7]\\d{8}", [9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]
                        ], "0"
                    ],
                    AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"],
                    AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"],
                    AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9],
                        [
                            ["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"],
                            ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]
                        ], "0"
                    ],
                    AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8],
                        [
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"],
                            ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"],
                            ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"],
                            ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]
                        ], "0"
                    ],
                    AO: ["244", "00", "[29]\\d{8}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]
                        ]
                    ],
                    AR: ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11],
                        [
                            ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1],
                            ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"],
                            ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"],
                            ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]
                        ], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"
                    ],
                    AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"],
                    AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                        [
                            ["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"],
                            ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"],
                            ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"],
                            ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"],
                            ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]
                        ], "0"
                    ],
                    AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12],
                        [
                            ["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]
                        ], "0", 0, "(183[12])|0", 0, 0, 0, [
                            ["(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8]))\\d{3}|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4]))|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]],
                            ["4(?:79[01]|83[0-389]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-8]|8[0-24-9]|9[0-27-9])\\d{6}", [9]],
                            ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                            ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]],
                            ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
                            ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]
                        ], "0011"
                    ],
                    AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]
                        ]
                    ],
                    AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"],
                    AZ: ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]
                        ], "0"
                    ],
                    BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]
                        ], "0"
                    ],
                    BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"],
                    BD: ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"],
                            ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:28|4[14]|5)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"],
                            ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|22"], "0$1"],
                            ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]
                        ], "0"
                    ],
                    BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]
                        ], "0"
                    ],
                    BF: ["226", "00", "[025-7]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]
                        ]
                    ],
                    BG: ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12],
                        [
                            ["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"],
                            ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]
                        ], "0"
                    ],
                    BH: ["973", "00", "[136-9]\\d{7}", [8],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[047]"]]
                        ]
                    ],
                    BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]
                        ]
                    ],
                    BJ: ["229", "00", "[24-689]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]]
                        ]
                    ],
                    BL: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [
                        ["590(?:2[7-9]|5[12]|87)\\d{4}"],
                        ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],
                        ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:395|76[018])\\d|475[01])\\d{4}"]
                    ]],
                    BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"],
                    BN: ["673", "00", "[2-578]\\d{6}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]
                        ]
                    ],
                    BO: ["591", "00(?:1\\d)?", "(?:[2-467]\\d\\d|8001)\\d{5}", [8, 9],
                        [
                            ["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"]],
                            ["(\\d{8})", "$1", ["[67]"]],
                            ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]
                        ], "0", 0, "0(1\\d)?"
                    ],
                    BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"],
                    BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11],
                        [
                            ["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]],
                            ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"],
                            ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]
                        ], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"
                    ],
                    BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"],
                    BT: ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]
                        ]
                    ],
                    BW: ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10],
                        [
                            ["(\\d{2})(\\d{5})", "$1 $2", ["90"]],
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-79]"]],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]],
                            ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]
                        ]
                    ],
                    BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11],
                        [
                            ["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"],
                            ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"],
                            ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"],
                            ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]
                        ], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"
                    ],
                    BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11],
                        [
                            ["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]],
                            ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]
                        ]
                    ],
                    CA: ["1", "011", "(?:[2-8]\\d|90)\\d{8}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [
                        ["(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|3[178]|50|68|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", [10]],
                        ["", [10]],
                        ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]],
                        ["900[2-9]\\d{6}", [10]],
                        ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[125-9]|33|44|66|77|88)|622)[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]
                    ]],
                    CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [
                        ["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]],
                        ["4(?:79[01]|83[0-389]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-8]|8[0-24-9]|9[0-27-9])\\d{6}", [9]],
                        ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                        ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
                        ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]
                    ], "0011"],
                    CD: ["243", "00", "[189]\\d{8}|[1-68]\\d{6}", [7, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                            ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]
                        ], "0"
                    ],
                    CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]
                        ]
                    ],
                    CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9],
                        [
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]
                        ]
                    ],
                    CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]
                        ], "0"
                    ],
                    CI: ["225", "00", "[02]\\d{9}", [10],
                        [
                            ["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]
                        ]
                    ],
                    CK: ["682", "00", "[2-578]\\d{4}", [5],
                        [
                            ["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]
                        ]
                    ],
                    CL: ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11],
                        [
                            ["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]],
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                            ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]
                        ]
                    ],
                    CM: ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]],
                            ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]
                        ]
                    ],
                    CN: ["86", "00|1(?:[12]\\d|79)\\d\\d00", "1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}", [7, 8, 9, 10, 11, 12],
                        [
                            ["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "10(?:10|9[56])|2[0-57-9](?:100|9[56])"], "0$1"],
                            ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1],
                            ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1],
                            ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1],
                            ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]],
                            ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]
                        ], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"
                    ],
                    CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:60\\d\\d|9101)\\d{6}|(?:1\\d|3)\\d{9}", [10, 11],
                        [
                            ["(\\d{3})(\\d{7})", "$1 $2", ["6"], "($1)"],
                            ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|91"]],
                            ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]
                        ], "0", 0, "0(4(?:[14]4|56)|[579])?"
                    ],
                    CR: ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]
                        ], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"
                    ],
                    CU: ["53", "119", "[27]\\d{6,7}|[34]\\d{5,7}|(?:5|8\\d\\d)\\d{7}", [6, 7, 8, 10],
                        [
                            ["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"],
                            ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"],
                            ["(\\d)(\\d{7})", "$1 $2", ["5"], "0$1"],
                            ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]
                        ], "0"
                    ],
                    CV: ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]
                        ]
                    ],
                    CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]],
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]
                        ], 0, 0, 0, 0, 0, "[69]"
                    ],
                    CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [
                        ["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]],
                        ["4(?:79[01]|83[0-389]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-8]|8[0-24-9]|9[0-27-9])\\d{6}", [9]],
                        ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                        ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
                        ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]
                    ], "0011"],
                    CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]
                        ]
                    ],
                    CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]],
                            ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]],
                            ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]],
                            ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
                        ]
                    ],
                    DE: ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                        [
                            ["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"],
                            ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"],
                            ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"],
                            ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"],
                            ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"],
                            ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"],
                            ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"],
                            ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"],
                            ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"],
                            ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"],
                            ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                            ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"],
                            ["(\\d{5})(\\d{6})", "$1 $2", ["15[0568]"], "0$1"],
                            ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"],
                            ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"],
                            ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]
                        ], "0"
                    ],
                    DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]
                        ]
                    ],
                    DK: ["45", "00", "[2-9]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]
                        ]
                    ],
                    DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"],
                    DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"],
                    DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]
                        ], "0"
                    ],
                    EC: ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]
                        ], "0"
                    ],
                    EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]],
                            ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]],
                            ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]
                        ]
                    ],
                    EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10],
                        [
                            ["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"],
                            ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[189]"], "0$1"]
                        ], "0"
                    ],
                    EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"],
                    ER: ["291", "00", "[178]\\d{6}", [7],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]
                        ], "0"
                    ],
                    ES: ["34", "00", "[5-9]\\d{8}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]
                        ]
                    ],
                    ET: ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]
                        ], "0"
                    ],
                    FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12],
                        [
                            ["(\\d)(\\d{4,9})", "$1 $2", ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"],
                            ["(\\d{3})(\\d{3,7})", "$1 $2", ["[12]00|[368]|70[07-9]"], "0$1"],
                            ["(\\d{2})(\\d{4,8})", "$1 $2", ["[1245]|7[135]"], "0$1"],
                            ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"]
                        ], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"
                    ],
                    FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "00"
                    ],
                    FK: ["500", "00", "[2-7]\\d{4}", [5]],
                    FM: ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]
                        ]
                    ],
                    FO: ["298", "00", "[2-9]\\d{5}", [6],
                        [
                            ["(\\d{6})", "$1", ["[2-9]"]]
                        ], 0, 0, "(10(?:01|[12]0|88))"
                    ],
                    FR: ["33", "00", "[1-9]\\d{8}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"],
                            ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]
                        ], "0"
                    ],
                    GA: ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8],
                        [
                            ["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]
                        ], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"
                    ],
                    GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"],
                            ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"],
                            ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"],
                            ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"],
                            ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [
                            ["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0235])|4(?:[0-5]\\d\\d|69[7-9]|70[0-579])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d\\d|1(?:[0-7]\\d\\d|8(?:[02]\\d|1[0-246-9])))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]],
                            ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]],
                            ["80[08]\\d{7}|800\\d{6}|8001111"],
                            ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]],
                            ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]],
                            ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]],
                            ["56\\d{8}", [10]]
                        ], 0, " x"
                    ],
                    GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"],
                    GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]
                        ], "0"
                    ],
                    GF: ["594", "00", "[56]94\\d{6}|(?:80|9\\d)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]|9[47]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]
                        ], "0"
                    ],
                    GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0", "1481$1", 0, 0, [
                        ["1481[25-9]\\d{5}", [10]],
                        ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]],
                        ["80[08]\\d{7}|800\\d{6}|8001111"],
                        ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]],
                        ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]],
                        ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]],
                        ["56\\d{8}", [10]]
                    ]],
                    GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9],
                        [
                            ["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]
                        ], "0"
                    ],
                    GI: ["350", "00", "(?:[25]\\d|60)\\d{6}", [8],
                        [
                            ["(\\d{3})(\\d{5})", "$1 $2", ["2"]]
                        ]
                    ],
                    GL: ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]
                        ]
                    ],
                    GM: ["220", "00", "[2-9]\\d{6}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
                        ]
                    ],
                    GN: ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]
                        ]
                    ],
                    GP: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [
                            ["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1289]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"],
                            ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],
                            ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:395|76[018])\\d|475[01])\\d{4}"]
                        ]
                    ],
                    GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]],
                            ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]
                        ]
                    ],
                    GR: ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12],
                        [
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]],
                            ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]],
                            ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]
                        ]
                    ],
                    GT: ["502", "00", "(?:1\\d{3}|[2-7])\\d{7}", [8, 11],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
                        ]
                    ],
                    GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([3-9]\\d{6})$|1", "671$1", 0, "671"],
                    GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["40"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]
                        ]
                    ],
                    GY: ["592", "001", "9008\\d{3}|(?:[2-467]\\d\\d|862)\\d{4}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[2-46-9]"]]
                        ]
                    ],
                    HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11],
                        [
                            ["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
                            ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "00"
                    ],
                    HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11],
                        [
                            ["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]
                        ]
                    ],
                    HR: ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"],
                            ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]
                        ], "0"
                    ],
                    HT: ["509", "00", "(?:[2-489]\\d|55)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]
                        ]
                    ],
                    HU: ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]
                        ], "06"
                    ],
                    ID: ["62", "00[89]", "(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]],
                            ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"],
                            ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"],
                            ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"],
                            ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"],
                            ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"],
                            ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"],
                            ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]
                        ], "0"
                    ],
                    IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"],
                            ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"],
                            ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"],
                            ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]
                        ], "0"
                    ],
                    IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12],
                        [
                            ["(\\d{4})(\\d{3})", "$1-$2", ["125"]],
                            ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]],
                            ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]],
                            ["(\\d{4})(\\d{6})", "$1-$2", ["159"]],
                            ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]],
                            ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]
                        ], "0"
                    ],
                    IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0", "1624$1", 0, "74576|(?:16|7[56])24"],
                    IN: ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13],
                        [
                            ["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1],
                            ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1],
                            ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1],
                            ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1],
                            ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]
                        ], "0"
                    ],
                    IO: ["246", "00", "3\\d{6}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["3"]]
                        ]
                    ],
                    IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                        ], "0"
                    ],
                    IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10],
                        [
                            ["(\\d{4,5})", "$1", ["96"], "0$1"],
                            ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]
                        ], "0"
                    ],
                    IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "00"
                    ],
                    IT: ["39", "00", "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11],
                        [
                            ["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]],
                            ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]],
                            ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["894"]],
                            ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]"]],
                            ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]],
                            ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]],
                            ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]
                        ], 0, 0, 0, 0, 0, 0, [
                            ["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"],
                            ["3[1-9]\\d{8}|3[2-9]\\d{7}", [9, 10]],
                            ["80(?:0\\d{3}|3)\\d{3}", [6, 9]],
                            ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]],
                            ["1(?:78\\d|99)\\d{6}", [9, 10]], 0, 0, 0, ["55\\d{8}", [10]],
                            ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]
                        ]
                    ],
                    JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0", "1534$1", 0, 0, [
                        ["1534[0-24-8]\\d{5}"],
                        ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"],
                        ["80(?:07(?:35|81)|8901)\\d{4}"],
                        ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"],
                        ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"],
                        ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"],
                        ["56\\d{8}"]
                    ]],
                    JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"],
                    JO: ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"],
                            ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"],
                            ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                        ], "0"
                    ],
                    JP: ["81", "010", "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"],
                            ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9]|636)|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9]|636[457-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[27-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|51|6(?:[0-24]|36|5[0-3589]|72|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"]
                        ], "0"
                    ],
                    KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"],
                            ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]
                        ], "0"
                    ],
                    KG: ["996", "00", "8\\d{9}|(?:[235-8]\\d|99)\\d{7}", [9, 10],
                        [
                            ["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]
                        ], "0"
                    ],
                    KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                        ], "0"
                    ],
                    KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"],
                    KM: ["269", "00", "[3478]\\d{6}", [7],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]
                        ]
                    ],
                    KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"],
                    KP: ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]
                        ], "0"
                    ],
                    KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14],
                        [
                            ["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"],
                            ["(\\d{4})(\\d{4})", "$1-$2", ["1"]],
                            ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1"],
                            ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
                            ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]
                        ], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"
                    ],
                    KW: ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8],
                        [
                            ["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]],
                            ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]
                        ]
                    ],
                    KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"],
                    KZ: ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33|7", 0, "8~10"],
                    LA: ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30[013-9]"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]
                        ], "0"
                    ],
                    LB: ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]
                        ], "0"
                    ],
                    LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"],
                    LI: ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]
                        ], "0", 0, "(1001)|0"
                    ],
                    LK: ["94", "00", "[1-9]\\d{8}", [9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]
                        ], "0"
                    ],
                    LR: ["231", "00", "(?:[25]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[4-6]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23578]"], "0$1"]
                        ], "0"
                    ],
                    LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]
                        ]
                    ],
                    LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(8-$1)", 1],
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", 1],
                            ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(8-$1)", 1],
                            ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)", 1]
                        ], "8", 0, "[08]"
                    ],
                    LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11],
                        [
                            ["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],
                            ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]],
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]
                        ], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"
                    ],
                    LV: ["371", "00", "(?:[268]\\d|90)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]
                        ]
                    ],
                    LY: ["218", "00", "[2-9]\\d{8}", [9],
                        [
                            ["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]
                        ], "0"
                    ],
                    MA: ["212", "00", "[5-8]\\d{8}", [9],
                        [
                            ["(\\d{5})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29[1289]|389)", "529(?:1[1-46-9]|2[013-8]|90)|5(?:298|389)[0-46-9]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"],
                            ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|9)|892", "5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|892"], "0$1"],
                            ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"],
                            ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [
                            ["5293[01]\\d{4}|5(?:2(?:[0-25-7]\\d|3[1-578]|4[02-46-8]|8[0235-7]|9[0-289])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[0189]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"],
                            ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[017]\\d|2[0-2]|6[0-8]|8[0-3]))\\d{6}"],
                            ["80\\d{7}"],
                            ["89\\d{7}"], 0, 0, 0, 0, ["592(?:4[0-2]|93)\\d{4}"]
                        ]
                    ],
                    MC: ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]],
                            ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]
                        ], "0"
                    ],
                    MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8],
                        [
                            ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]
                        ], "0"
                    ],
                    ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]
                        ], "0"
                    ],
                    MF: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [
                        ["590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}"],
                        ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],
                        ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:395|76[018])\\d|475[01])\\d{4}"]
                    ]],
                    MG: ["261", "00", "[23]\\d{8}", [9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]
                        ], "0", 0, "([24-9]\\d{6})$|0", "20$1"
                    ],
                    MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]
                        ], "1"
                    ],
                    MK: ["389", "00", "[2-578]\\d{7}", [8],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"],
                            ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]
                        ], "0"
                    ],
                    ML: ["223", "00", "[24-9]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]
                        ]
                    ],
                    MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10],
                        [
                            ["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"],
                            ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]
                        ], "0"
                    ],
                    MN: ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10],
                        [
                            ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]],
                            ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"],
                            ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"],
                            ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]
                        ], "0"
                    ],
                    MO: ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8],
                        [
                            ["(\\d{4})(\\d{3})", "$1 $2", ["0"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]
                        ]
                    ],
                    MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"],
                    MQ: ["596", "00", "596\\d{6}|(?:69|80|9\\d)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]
                        ], "0"
                    ],
                    MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]
                        ]
                    ],
                    MS: ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"],
                    MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]
                        ]
                    ],
                    MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]],
                            ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "020"
                    ],
                    MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10],
                        [
                            ["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "00"
                    ],
                    MW: ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]
                        ], "0"
                    ],
                    MX: ["52", "0[09]", "1(?:(?:[27]2|44|99)[1-9]|65[0-689])\\d{7}|(?:1(?:[01]\\d|2[13-9]|[35][1-9]|4[0-35-9]|6[0-46-9]|7[013-9]|8[1-79]|9[1-8])|[2-9]\\d)\\d{8}", [10, 11],
                        [
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], 0, 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], 0, 1],
                            ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"], 0, 1],
                            ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], 0, 1]
                        ], "01", 0, "0(?:[12]|4[45])|1", 0, 0, 0, 0, "00"
                    ],
                    MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]
                        ], "0"
                    ],
                    MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]
                        ]
                    ],
                    NA: ["264", "00", "[68]\\d{7,8}", [8, 9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]
                        ], "0"
                    ],
                    NC: ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]
                        ]
                    ],
                    NE: ["227", "00", "[027-9]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[04]"]]
                        ]
                    ],
                    NF: ["672", "00", "[13]\\d{5}", [6],
                        [
                            ["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]],
                            ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]
                        ], 0, 0, "([0-258]\\d{4})$", "3$1"
                    ],
                    NG: ["234", "009", "(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}", [7, 8, 10, 11, 12, 13, 14],
                        [
                            ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-7]|8[2-9]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"],
                            ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"],
                            ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]
                        ], "0"
                    ],
                    NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]
                        ]
                    ],
                    NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11],
                        [
                            ["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"],
                            ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"],
                            ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]
                        ], "0"
                    ],
                    NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8],
                        [
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]|59"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-7]"]]
                        ], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"
                    ],
                    NP: ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11],
                        [
                            ["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"],
                            ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"],
                            ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]
                        ], "0"
                    ],
                    NR: ["674", "00", "(?:444|(?:55|8\\d)\\d|666)\\d{4}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]
                        ]
                    ],
                    NU: ["683", "00", "(?:[47]|888\\d)\\d{3}", [4, 7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["8"]]
                        ]
                    ],
                    NZ: ["64", "0(?:0|161)", "[29]\\d{7,9}|50\\d{5}(?:\\d{2,3})?|6[0-35-9]\\d{6}|7\\d{7,8}|8\\d{4,9}|(?:11\\d|[34])\\d{7}", [5, 6, 7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-579]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|[89]0", "50(?:[0367]|88)|[89]0"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[59]|80"], "0$1"],
                            ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7|86"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, 0, "00"
                    ],
                    OM: ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9],
                        [
                            ["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]],
                            ["(\\d{2})(\\d{6})", "$1 $2", ["2"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]
                        ]
                    ],
                    PA: ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11],
                        [
                            ["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]],
                            ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]
                        ]
                    ],
                    PE: ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9],
                        [
                            ["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"],
                            ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"],
                            ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]
                        ], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "
                    ],
                    PF: ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]
                        ]
                    ],
                    PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "00"
                    ],
                    PH: ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13],
                        [
                            ["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"],
                            ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"],
                            ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                            ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]
                        ], "0"
                    ],
                    PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12],
                        [
                            ["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"],
                            ["(\\d{4})(\\d{5})", "$1 $2", ["1"]],
                            ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"],
                            ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"],
                            ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"],
                            ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"],
                            ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]
                        ], "0"
                    ],
                    PL: ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10],
                        [
                            ["(\\d{5})", "$1", ["19"]],
                            ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]],
                            ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],
                            ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]
                        ]
                    ],
                    PM: ["508", "00", "[45]\\d{5}|(?:708|80\\d)\\d{6}", [6, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]
                        ], "0"
                    ],
                    PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"],
                    PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                        ], "0"
                    ],
                    PT: ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]
                        ]
                    ],
                    PW: ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
                        ]
                    ],
                    PY: ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11],
                        [
                            ["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"],
                            ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"],
                            ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]],
                            ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-6])"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]
                        ], "0"
                    ],
                    QA: ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["2[16]|8"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]
                        ]
                    ],
                    RE: ["262", "00", "(?:26|[689]\\d)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [
                            ["26(?:2\\d\\d|3(?:0\\d|1[0-3]))\\d{4}"],
                            ["(?:69(?:2\\d\\d|3(?:0[0-46]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|6[0-6]|7[0-27]|8[0-8]|9[0-479]))|9(?:399[0-2]|4790|76(?:2[27]|3[0-37]|9\\d)))\\d{4}"],
                            ["80\\d{7}"],
                            ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, 0, ["8(?:1[019]|2[0156]|84|90)\\d{6}"]
                        ]
                    ],
                    RO: ["40", "00", "(?:[2378]\\d|90)\\d{7}|[23]\\d{5}", [6, 9],
                        [
                            ["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"],
                            ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[237-9]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, 0, 0, " int "
                    ],
                    RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12],
                        [
                            ["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"],
                            ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]
                        ], "0"
                    ],
                    RU: ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14],
                        [
                            ["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1],
                            ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1],
                            ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1],
                            ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]
                        ], "8", 0, 0, 0, 0, "3[04-689]|[489]", 0, "8~10"
                    ],
                    RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]]
                        ], "0"
                    ],
                    SA: ["966", "00", "92\\d{7}|(?:[15]|8\\d)\\d{8}", [9, 10],
                        [
                            ["(\\d{4})(\\d{5})", "$1 $2", ["9"]],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]
                        ], "0"
                    ],
                    SB: ["677", "0[01]", "(?:[1-6]|[7-9]\\d\\d)\\d{4}", [5, 7],
                        [
                            ["(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:[1-8]|9[0-8])"]]
                        ]
                    ],
                    SC: ["248", "010|0[0-2]", "800\\d{4}|(?:[249]\\d|64)\\d{5}", [7],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "00"
                    ],
                    SD: ["249", "00", "[19]\\d{8}", [9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]
                        ], "0"
                    ],
                    SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"],
                            ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"],
                            ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"],
                            ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"],
                            ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"],
                            ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"],
                            ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"],
                            ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"],
                            ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]
                        ], "0"
                    ],
                    SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-6]|[1-9])"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
                            ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
                        ]
                    ],
                    SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"],
                    SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8],
                        [
                            ["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"],
                            ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]
                        ], "0", 0, 0, 0, 0, 0, 0, "00"
                    ],
                    SJ: ["47", "00", "0\\d{4}|(?:[489]\\d|[57]9)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"],
                    SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9],
                        [
                            ["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]
                        ], "0"
                    ],
                    SL: ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]
                        ], "0"
                    ],
                    SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]],
                            ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]
                        ], 0, 0, "([89]\\d{5})$", "0549$1"
                    ],
                    SN: ["221", "00", "(?:[378]\\d|93)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]
                        ]
                    ],
                    SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9],
                        [
                            ["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]],
                            ["(\\d{6})", "$1", ["[134]"]],
                            ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]],
                            ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3478]|64|90"]],
                            ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6(?:0[5-7]|[1-35-9])|9[2-9]"]]
                        ], "0"
                    ],
                    SR: ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]],
                            ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]],
                            ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]
                        ]
                    ],
                    SS: ["211", "00", "[19]\\d{8}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]
                        ], "0"
                    ],
                    ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]
                        ]
                    ],
                    SV: ["503", "00", "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?", [7, 8, 11],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]],
                            ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]
                        ]
                    ],
                    SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"],
                    SY: ["963", "00", "[1-39]\\d{8}|[1-5]\\d{7}", [8, 9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", 1]
                        ], "0"
                    ],
                    SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]],
                            ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]
                        ]
                    ],
                    TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"],
                    TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"],
                    TD: ["235", "00|16", "(?:22|[69]\\d|77)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "00"
                    ],
                    TG: ["228", "00", "[279]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]
                        ]
                    ],
                    TH: ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                        ], "0"
                    ],
                    TJ: ["992", "810", "(?:00|[1-57-9]\\d)\\d{7}", [9],
                        [
                            ["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]],
                            ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[34]7|91[78]"]],
                            ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]"]],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "8~10"
                    ],
                    TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]],
                    TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]
                        ]
                    ],
                    TM: ["993", "810", "[1-6]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"],
                            ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"],
                            ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"]
                        ], "8", 0, 0, 0, 0, 0, 0, "8~10"
                    ],
                    TN: ["216", "00", "[2-57-9]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]
                        ]
                    ],
                    TO: ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7],
                        [
                            ["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]],
                            ["(\\d{4})(\\d{3})", "$1 $2", ["0"]],
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]
                        ]
                    ],
                    TR: ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13],
                        [
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|616)", "5(?:[0-59]|6161)"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1],
                            ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]
                        ], "0"
                    ],
                    TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"],
                    TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7],
                        [
                            ["(\\d{2})(\\d{3})", "$1 $2", ["2"]],
                            ["(\\d{2})(\\d{4})", "$1 $2", ["90"]],
                            ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]
                        ]
                    ],
                    TW: ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11],
                        [
                            ["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"],
                            ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, 0, 0, "#"
                    ],
                    TZ: ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"],
                            ["(\\d{2})(\\d{7})", "$1 $2", ["5"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]
                        ], "0"
                    ],
                    UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"],
                            ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, 0, "0~0"
                    ],
                    UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9],
                        [
                            ["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"],
                            ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"],
                            ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]
                        ], "0"
                    ],
                    US: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10],
                        [
                            ["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]
                        ], "1", 0, 0, 0, 0, 0, [
                            ["(?:47220[01]|5(?:05(?:[2-57-9]\\d\\d|6(?:[0-35-9]\\d|4[46]))|57200))\\d{4}|(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[01356]|3[0-24679]|4[167]|5[0-2]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"],
                            [""],
                            ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                            ["900[2-9]\\d{6}"],
                            ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]
                        ]
                    ],
                    UY: ["598", "0(?:0|1[3-9]\\d)", "(?:0004|4)\\d{9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}", [7, 8, 10, 13],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["405|8|90"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["4"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["0"]]
                        ], "0", 0, 0, 0, 0, 0, 0, "00", " int. "
                    ],
                    UZ: ["998", "810", "(?:33|[5-79]\\d|88)\\d{7}", [9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[35-9]"], "8 $1"]
                        ], "8", 0, 0, 0, 0, 0, 0, "8~10"
                    ],
                    VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11], 0, 0, 0, 0, 0, 0, "06698"],
                    VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"],
                    VE: ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10],
                        [
                            ["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]
                        ], "0"
                    ],
                    VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"],
                    VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"],
                    VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1],
                            ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[69]"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3578]"], "0$1", 1],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1],
                            ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]
                        ], "0"
                    ],
                    VU: ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]
                        ]
                    ],
                    WF: ["681", "00", "(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?", [6, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[478]"]],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]
                        ]
                    ],
                    WS: ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10],
                        [
                            ["(\\d{5})", "$1", ["[2-5]|6[1-9]"]],
                            ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]],
                            ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]
                        ]
                    ],
                    XK: ["383", "00", "[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9],
                        [
                            ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"]
                        ], "0"
                    ],
                    YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9],
                        [
                            ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]
                        ], "0"
                    ],
                    YT: ["262", "00", "(?:(?:(?:26|63)9|80\\d)\\d\\d|93980)\\d{4}", [9], 0, "0", 0, 0, 0, 0, "269|63|9398"],
                    ZA: ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]
                        ], "0"
                    ],
                    ZM: ["260", "00", "800\\d{6}|(?:21|63|[79]\\d)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"],
                            ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]
                        ], "0"
                    ],
                    ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10],
                        [
                            ["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"],
                            ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"],
                            ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"],
                            ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"],
                            ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"],
                            ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]
                        ], "0"
                    ]
                },
                nonGeographic: {
                    800: ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]
                        ], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]
                    ],
                    808: ["808", 0, "[1-9]\\d{7}", [8],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]
                    ],
                    870: ["870", 0, "7\\d{11}|[35-7]\\d{8}", [9, 12],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]]
                    ],
                    878: ["878", 0, "10\\d{10}", [12],
                        [
                            ["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]
                        ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]
                    ],
                    881: ["881", 0, "[0-36-9]\\d{8}", [9],
                        [
                            ["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-36-9]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["[0-36-9]\\d{8}"]]
                    ],
                    882: ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12],
                        [
                            ["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]],
                            ["(\\d{2})(\\d{6})", "$1 $2", ["49"]],
                            ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]],
                            ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]],
                            ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|51"]],
                            ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]],
                            ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, 0, 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]
                    ],
                    883: ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12],
                        [
                            ["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]],
                            ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]],
                            ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[013-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]
                    ],
                    888: ["888", 0, "\\d{11}", [11],
                        [
                            ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]
                        ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]
                    ],
                    979: ["979", 0, "[1359]\\d{8}", [9],
                        [
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]
                    ]
                }
            };

            function a(t) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function d(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function o(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function i(t) {
                var e, n, r, a, i = function(t) {
                        if (Array.isArray(t)) return t
                    }(e = Array.prototype.slice.call(t)) || function(t, e) {
                        var n, r, a = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null != a) {
                            var d = [],
                                o = !0,
                                i = !1;
                            try {
                                for (a = a.call(t); !(o = (n = a.next()).done) && (d.push(n.value), !e || d.length !== e); o = !0);
                            } catch (u) {
                                i = !0, r = u
                            } finally {
                                try {
                                    o || null == a.return || a.return()
                                } finally {
                                    if (i) throw r
                                }
                            }
                            return d
                        }
                    }(e, 4) || function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return o(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(t, e)
                        }
                    }(e, 4) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }(),
                    l = i[0],
                    c = i[1],
                    $ = i[2],
                    s = i[3];
                if ("string" == typeof l) n = l;
                else throw TypeError("A text for parsing must be a string.");
                if (c && "string" != typeof c) {
                    if (u(c)) $ ? (r = c, a = $) : a = c;
                    else throw Error("Invalid second argument: ".concat(c))
                } else s ? (r = $, a = s) : (r = void 0, a = $), c && (r = function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? d(Object(n), !0).forEach(function(e) {
                            var r, a;
                            r = t, a = n[e], e in r ? Object.defineProperty(r, e, {
                                value: a,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : r[e] = a
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        })
                    }
                    return t
                }({
                    defaultCountry: c
                }, r));
                return {
                    text: n,
                    options: r,
                    metadata: a
                }
            }
            var u = function(t) {
                    return "object" === a(t)
                },
                l = "0-9０-９٠-٩۰-۹",
                c = "".concat("-‐-―−ー－").concat("／/").concat("．.").concat(" \xa0\xad​⁠　").concat("()（）［］\\[\\]").concat("~⁓∼～"),
                $ = "+＋";

            function s(t) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function f(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function p(t) {
                if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function h(t) {
                var e = "function" == typeof Map ? new Map : void 0;
                return (h = function(t) {
                    if (null === t || -1 === Function.toString.call(t).indexOf("[native code]")) return t;
                    if ("function" != typeof t) throw TypeError("Super expression must either be null or a function");
                    if (void 0 !== e) {
                        if (e.has(t)) return e.get(t);
                        e.set(t, n)
                    }

                    function n() {
                        return y(t, arguments, v(this).constructor)
                    }
                    return n.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: n,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), m(n, t)
                })(t)
            }

            function y(t, e, n) {
                return (y = g() ? Reflect.construct : function(t, e, n) {
                    var r = [null];
                    r.push.apply(r, e);
                    var a = new(Function.bind.apply(t, r));
                    return n && m(a, n.prototype), a
                }).apply(null, arguments)
            }

            function g() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }

            function m(t, e) {
                return (m = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function v(t) {
                return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var b = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && m(t, e)
                }(d, t);
                var e, n, r, a = (e = g(), function() {
                    var t, n = v(d);
                    if (e) {
                        var r = v(this).constructor;
                        t = Reflect.construct(n, arguments, r)
                    } else t = n.apply(this, arguments);
                    return function(t, e) {
                        if (e && ("object" === s(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw TypeError("Derived constructors may only return object or undefined");
                        return p(t)
                    }(this, t)
                });

                function d(t) {
                    var e;
                    return ! function(t, e) {
                        if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                    }(this, d), Object.setPrototypeOf(p(e = a.call(this, t)), d.prototype), e.name = e.constructor.name, e
                }
                return n && f(d.prototype, n), r && f(d, r), Object.defineProperty(d, "prototype", {
                    writable: !1
                }), d
            }(h(Error));

            function C(t, e) {
                t = t.split("-"), e = e.split("-");
                for (var n = t[0].split("."), r = e[0].split("."), a = 0; a < 3; a++) {
                    var d = Number(n[a]),
                        o = Number(r[a]);
                    if (d > o) return 1;
                    if (o > d) return -1;
                    if (!isNaN(d) && isNaN(o)) return 1;
                    if (isNaN(d) && !isNaN(o)) return -1
                }
                return t[1] && e[1] ? t[1] > e[1] ? 1 : t[1] < e[1] ? -1 : 0 : !t[1] && e[1] ? 1 : t[1] && !e[1] ? -1 : 0
            }

            function O(t) {
                return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function N(t, e) {
                if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
            }

            function P(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function S(t, e, n) {
                return e && P(t.prototype, e), n && P(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }
            var I = " ext. ",
                x = /^\d+$/,
                w = function() {
                    function t(e) {
                        N(this, t),
                            function(t) {
                                if (!t) throw Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
                                if (!M(t) || !M(t.countries)) throw Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(M(t) ? "an object of shape: { " + Object.keys(t).join(", ") + " }" : "a " + R(t) + ": " + t, "."))
                            }(e), this.metadata = e, L.call(this, e)
                    }
                    return S(t, [{
                        key: "getCountries",
                        value: function() {
                            return Object.keys(this.metadata.countries).filter(function(t) {
                                return "001" !== t
                            })
                        }
                    }, {
                        key: "getCountryMetadata",
                        value: function(t) {
                            return this.metadata.countries[t]
                        }
                    }, {
                        key: "nonGeographic",
                        value: function() {
                            if (!this.v1 && !this.v2 && !this.v3) return this.metadata.nonGeographic || this.metadata.nonGeographical
                        }
                    }, {
                        key: "hasCountry",
                        value: function(t) {
                            return void 0 !== this.getCountryMetadata(t)
                        }
                    }, {
                        key: "hasCallingCode",
                        value: function(t) {
                            if (this.getCountryCodesForCallingCode(t)) return !0;
                            if (this.nonGeographic()) {
                                if (this.nonGeographic()[t]) return !0
                            } else {
                                var e = this.countryCallingCodes()[t];
                                if (e && 1 === e.length && "001" === e[0]) return !0
                            }
                        }
                    }, {
                        key: "isNonGeographicCallingCode",
                        value: function(t) {
                            return this.nonGeographic() ? !!this.nonGeographic()[t] : !this.getCountryCodesForCallingCode(t)
                        }
                    }, {
                        key: "country",
                        value: function(t) {
                            return this.selectNumberingPlan(t)
                        }
                    }, {
                        key: "selectNumberingPlan",
                        value: function(t, e) {
                            if (t && x.test(t) && (e = t, t = null), t && "001" !== t) {
                                if (!this.hasCountry(t)) throw Error("Unknown country: ".concat(t));
                                this.numberingPlan = new E(this.getCountryMetadata(t), this)
                            } else if (e) {
                                if (!this.hasCallingCode(e)) throw Error("Unknown calling code: ".concat(e));
                                this.numberingPlan = new E(this.getNumberingPlanMetadata(e), this)
                            } else this.numberingPlan = void 0;
                            return this
                        }
                    }, {
                        key: "getCountryCodesForCallingCode",
                        value: function(t) {
                            var e = this.countryCallingCodes()[t];
                            if (e) {
                                if (1 === e.length && 3 === e[0].length) return;
                                return e
                            }
                        }
                    }, {
                        key: "getCountryCodeForCallingCode",
                        value: function(t) {
                            var e = this.getCountryCodesForCallingCode(t);
                            if (e) return e[0]
                        }
                    }, {
                        key: "getNumberingPlanMetadata",
                        value: function(t) {
                            var e = this.getCountryCodeForCallingCode(t);
                            if (e) return this.getCountryMetadata(e);
                            if (this.nonGeographic()) {
                                var n = this.nonGeographic()[t];
                                if (n) return n
                            } else {
                                var r = this.countryCallingCodes()[t];
                                if (r && 1 === r.length && "001" === r[0]) return this.metadata.countries["001"]
                            }
                        }
                    }, {
                        key: "countryCallingCode",
                        value: function() {
                            return this.numberingPlan.callingCode()
                        }
                    }, {
                        key: "IDDPrefix",
                        value: function() {
                            return this.numberingPlan.IDDPrefix()
                        }
                    }, {
                        key: "defaultIDDPrefix",
                        value: function() {
                            return this.numberingPlan.defaultIDDPrefix()
                        }
                    }, {
                        key: "nationalNumberPattern",
                        value: function() {
                            return this.numberingPlan.nationalNumberPattern()
                        }
                    }, {
                        key: "possibleLengths",
                        value: function() {
                            return this.numberingPlan.possibleLengths()
                        }
                    }, {
                        key: "formats",
                        value: function() {
                            return this.numberingPlan.formats()
                        }
                    }, {
                        key: "nationalPrefixForParsing",
                        value: function() {
                            return this.numberingPlan.nationalPrefixForParsing()
                        }
                    }, {
                        key: "nationalPrefixTransformRule",
                        value: function() {
                            return this.numberingPlan.nationalPrefixTransformRule()
                        }
                    }, {
                        key: "leadingDigits",
                        value: function() {
                            return this.numberingPlan.leadingDigits()
                        }
                    }, {
                        key: "hasTypes",
                        value: function() {
                            return this.numberingPlan.hasTypes()
                        }
                    }, {
                        key: "type",
                        value: function(t) {
                            return this.numberingPlan.type(t)
                        }
                    }, {
                        key: "ext",
                        value: function() {
                            return this.numberingPlan.ext()
                        }
                    }, {
                        key: "countryCallingCodes",
                        value: function() {
                            return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes
                        }
                    }, {
                        key: "chooseCountryByCountryCallingCode",
                        value: function(t) {
                            return this.selectNumberingPlan(t)
                        }
                    }, {
                        key: "hasSelectedNumberingPlan",
                        value: function() {
                            return void 0 !== this.numberingPlan
                        }
                    }]), t
                }(),
                E = function() {
                    function t(e, n) {
                        N(this, t), this.globalMetadataObject = n, this.metadata = e, L.call(this, n.metadata)
                    }
                    return S(t, [{
                        key: "callingCode",
                        value: function() {
                            return this.metadata[0]
                        }
                    }, {
                        key: "getDefaultCountryMetadataForRegion",
                        value: function() {
                            return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode())
                        }
                    }, {
                        key: "IDDPrefix",
                        value: function() {
                            if (!this.v1 && !this.v2) return this.metadata[1]
                        }
                    }, {
                        key: "defaultIDDPrefix",
                        value: function() {
                            if (!this.v1 && !this.v2) return this.metadata[12]
                        }
                    }, {
                        key: "nationalNumberPattern",
                        value: function() {
                            return this.v1 || this.v2 ? this.metadata[1] : this.metadata[2]
                        }
                    }, {
                        key: "possibleLengths",
                        value: function() {
                            if (!this.v1) return this.metadata[this.v2 ? 2 : 3]
                        }
                    }, {
                        key: "_getFormats",
                        value: function(t) {
                            return t[this.v1 ? 2 : this.v2 ? 3 : 4]
                        }
                    }, {
                        key: "formats",
                        value: function() {
                            var t = this;
                            return (this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || []).map(function(e) {
                                return new A(e, t)
                            })
                        }
                    }, {
                        key: "nationalPrefix",
                        value: function() {
                            return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5]
                        }
                    }, {
                        key: "_getNationalPrefixFormattingRule",
                        value: function(t) {
                            return t[this.v1 ? 4 : this.v2 ? 5 : 6]
                        }
                    }, {
                        key: "nationalPrefixFormattingRule",
                        value: function() {
                            return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion())
                        }
                    }, {
                        key: "_nationalPrefixForParsing",
                        value: function() {
                            return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7]
                        }
                    }, {
                        key: "nationalPrefixForParsing",
                        value: function() {
                            return this._nationalPrefixForParsing() || this.nationalPrefix()
                        }
                    }, {
                        key: "nationalPrefixTransformRule",
                        value: function() {
                            return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8]
                        }
                    }, {
                        key: "_getNationalPrefixIsOptionalWhenFormatting",
                        value: function() {
                            return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9]
                        }
                    }, {
                        key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
                        value: function() {
                            return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion())
                        }
                    }, {
                        key: "leadingDigits",
                        value: function() {
                            return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10]
                        }
                    }, {
                        key: "types",
                        value: function() {
                            return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11]
                        }
                    }, {
                        key: "hasTypes",
                        value: function() {
                            return (!this.types() || 0 !== this.types().length) && !!this.types()
                        }
                    }, {
                        key: "type",
                        value: function(t) {
                            if (this.hasTypes() && k(this.types(), t)) return new T(k(this.types(), t), this)
                        }
                    }, {
                        key: "ext",
                        value: function() {
                            return this.v1 || this.v2 ? I : this.metadata[13] || I
                        }
                    }]), t
                }(),
                A = function() {
                    function t(e, n) {
                        N(this, t), this._format = e, this.metadata = n
                    }
                    return S(t, [{
                        key: "pattern",
                        value: function() {
                            return this._format[0]
                        }
                    }, {
                        key: "format",
                        value: function() {
                            return this._format[1]
                        }
                    }, {
                        key: "leadingDigitsPatterns",
                        value: function() {
                            return this._format[2] || []
                        }
                    }, {
                        key: "nationalPrefixFormattingRule",
                        value: function() {
                            return this._format[3] || this.metadata.nationalPrefixFormattingRule()
                        }
                    }, {
                        key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
                        value: function() {
                            return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
                        }
                    }, {
                        key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
                        value: function() {
                            return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
                        }
                    }, {
                        key: "usesNationalPrefix",
                        value: function() {
                            return !!this.nationalPrefixFormattingRule() && !j.test(this.nationalPrefixFormattingRule())
                        }
                    }, {
                        key: "internationalFormat",
                        value: function() {
                            return this._format[5] || this.format()
                        }
                    }]), t
                }(),
                j = /^\(?\$1\)?$/,
                T = function() {
                    function t(e, n) {
                        N(this, t), this.type = e, this.metadata = n
                    }
                    return S(t, [{
                        key: "pattern",
                        value: function() {
                            return this.metadata.v1 ? this.type : this.type[0]
                        }
                    }, {
                        key: "possibleLengths",
                        value: function() {
                            if (!this.metadata.v1) return this.type[1] || this.metadata.possibleLengths()
                        }
                    }]), t
                }();

            function k(t, e) {
                switch (e) {
                    case "FIXED_LINE":
                        return t[0];
                    case "MOBILE":
                        return t[1];
                    case "TOLL_FREE":
                        return t[2];
                    case "PREMIUM_RATE":
                        return t[3];
                    case "PERSONAL_NUMBER":
                        return t[4];
                    case "VOICEMAIL":
                        return t[5];
                    case "UAN":
                        return t[6];
                    case "PAGER":
                        return t[7];
                    case "VOIP":
                        return t[8];
                    case "SHARED_COST":
                        return t[9]
                }
            }
            var M = function(t) {
                    return "object" === O(t)
                },
                R = function(t) {
                    return O(t)
                };

            function F(t, e) {
                if ((e = new w(e)).hasCountry(t)) return e.country(t).countryCallingCode();
                throw Error("Unknown country: ".concat(t))
            }

            function D(t, e) {
                return void 0 !== e.countries[t]
            }

            function L(t) {
                var e = t.version;
                "number" == typeof e ? (this.v1 = 1 === e, this.v2 = 2 === e, this.v3 = 3 === e, this.v4 = 4 === e) : e ? -1 === C(e, "1.2.0") ? this.v2 = !0 : -1 === C(e, "1.7.35") ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0
            }
            var B = function(t) {
                return "([".concat(l, "]{1,").concat(t, "})")
            };

            function G(t) {
                var e = "[ \xa0\\t,]*",
                    n = "[:\\.．]?[ \xa0\\t,-]*",
                    r = "[ \xa0\\t]*";
                return ";ext=" + B("20") + "|" + (e + "(?:e?xt(?:ensi(?:ó?|\xf3))?n?|ｅ?ｘｔｎ?|доб|anexo)" + n) + B("20") + "#?|" + (e + "(?:[xｘ#＃~～]|int|ｉｎｔ)" + n) + B("9") + "#?|[- ]+" + B("6") + "#|" + (r + "(?:,{2}|;)" + n) + B("15") + "#?|" + (r + "(?:,)+" + n) + B("9") + "#?"
            }
            var _ = RegExp("^[" + $ + "]{0,1}(?:[" + c + "]*[" + l + "]){1,2}$", "i"),
                U = "[" + $ + "]{0,1}(?:[" + c + "]*[" + l + "]){3,}[" + c + l + "]*(?:" + G() + ")?",
                V = RegExp("^[" + l + "]{2}$|^" + U + "$", "i"),
                K = RegExp("(?:" + G() + ")$", "i");

            function W(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var H = {
                0: "0",
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                8: "8",
                9: "9",
                "０": "0",
                "１": "1",
                "２": "2",
                "３": "3",
                "４": "4",
                "５": "5",
                "６": "6",
                "７": "7",
                "８": "8",
                "９": "9",
                "٠": "0",
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "۰": "0",
                "۱": "1",
                "۲": "2",
                "۳": "3",
                "۴": "4",
                "۵": "5",
                "۶": "6",
                "۷": "7",
                "۸": "8",
                "۹": "9"
            };

            function Z(t) {
                for (var e, n = "", r = function(t, e) {
                        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (n) return (n = n.call(t)).next.bind(n);
                        if (Array.isArray(t) || (n = function(t, e) {
                                if (t) {
                                    if ("string" == typeof t) return W(t, e);
                                    var n = Object.prototype.toString.call(t).slice(8, -1);
                                    if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(t);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return W(t, e)
                                }
                            }(t))) {
                            n && (t = n);
                            var r = 0;
                            return function() {
                                return r >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[r++]
                                }
                            }
                        }
                        throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }(t.split("")); !(e = r()).done;) {
                    var a = H[e.value];
                    a && (n += a)
                }
                return n
            }

            function q(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function Y(t) {
                for (var e, n = "", r = function(t, e) {
                        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (n) return (n = n.call(t)).next.bind(n);
                        if (Array.isArray(t) || (n = function(t, e) {
                                if (t) {
                                    if ("string" == typeof t) return q(t, e);
                                    var n = Object.prototype.toString.call(t).slice(8, -1);
                                    if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(t);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return q(t, e)
                                }
                            }(t))) {
                            n && (t = n);
                            var r = 0;
                            return function() {
                                return r >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[r++]
                                }
                            }
                        }
                        throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }(t.split("")); !(e = r()).done;) {
                    var a = e.value;
                    n += J(a, n) || ""
                }
                return n
            }

            function J(t, e) {
                if ("+" === t) {
                    if (e) return;
                    return "+"
                }
                return H[t]
            }

            function X(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function z(t, e) {
                return function t(e, n, r) {
                    var a = r.type(n),
                        d = a && a.possibleLengths() || r.possibleLengths();
                    if (!d) return "IS_POSSIBLE";
                    if ("FIXED_LINE_OR_MOBILE" === n) {
                        if (!r.type("FIXED_LINE")) return t(e, "MOBILE", r);
                        var o = r.type("MOBILE");
                        o && (d = function(t, e) {
                            for (var n, r = t.slice(), a = function(t, e) {
                                    var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                    if (n) return (n = n.call(t)).next.bind(n);
                                    if (Array.isArray(t) || (n = function(t, e) {
                                            if (t) {
                                                if ("string" == typeof t) return X(t, e);
                                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                                if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(t);
                                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return X(t, e)
                                            }
                                        }(t))) {
                                        n && (t = n);
                                        var r = 0;
                                        return function() {
                                            return r >= t.length ? {
                                                done: !0
                                            } : {
                                                done: !1,
                                                value: t[r++]
                                            }
                                        }
                                    }
                                    throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }(e); !(n = a()).done;) {
                                var d = n.value;
                                0 > t.indexOf(d) && r.push(d)
                            }
                            return r.sort(function(t, e) {
                                return t - e
                            })
                        }(d, o.possibleLengths()))
                    } else if (n && !a) return "INVALID_LENGTH";
                    var i = e.length,
                        u = d[0];
                    return u === i ? "IS_POSSIBLE" : u > i ? "TOO_SHORT" : d[d.length - 1] < i ? "TOO_LONG" : d.indexOf(i, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH"
                }(t, void 0, e)
            }

            function Q(t, e) {
                return "IS_POSSIBLE" === z(t, e)
            }

            function tt(t, e) {
                return t = t || "", RegExp("^(?:" + e + ")$").test(t)
            }

            function te(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var tn = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];

            function tr(t, e, n) {
                if (e = e || {}, t.country) {
                    (n = new w(n)).selectNumberingPlan(t.country, t.countryCallingCode);
                    var r = e.v2 ? t.nationalNumber : t.phone;
                    if (tt(r, n.nationalNumberPattern())) {
                        if (ta(r, "FIXED_LINE", n)) return n.type("MOBILE") && "" === n.type("MOBILE").pattern() || !n.type("MOBILE") || ta(r, "MOBILE", n) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE";
                        for (var a, d = function(t, e) {
                                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                if (n) return (n = n.call(t)).next.bind(n);
                                if (Array.isArray(t) || (n = function(t, e) {
                                        if (t) {
                                            if ("string" == typeof t) return te(t, e);
                                            var n = Object.prototype.toString.call(t).slice(8, -1);
                                            if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(t);
                                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return te(t, e)
                                        }
                                    }(t))) {
                                    n && (t = n);
                                    var r = 0;
                                    return function() {
                                        return r >= t.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: t[r++]
                                        }
                                    }
                                }
                                throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }(tn); !(a = d()).done;) {
                            var o = a.value;
                            if (ta(r, o, n)) return o
                        }
                    }
                }
            }

            function ta(t, e, n) {
                return !(!(e = n.type(e)) || !e.pattern() || e.possibleLengths() && 0 > e.possibleLengths().indexOf(t.length)) && tt(t, e.pattern())
            }

            function td(t) {
                return t.replace(RegExp("[".concat(c, "]+"), "g"), " ").trim()
            }
            var to = /(\$\d)/;

            function ti(t, e, n) {
                var r = n.useInternationalFormat,
                    a = n.withNationalPrefix;
                n.carrierCode, n.metadata;
                var d = t.replace(RegExp(e.pattern()), r ? e.internationalFormat() : a && e.nationalPrefixFormattingRule() ? e.format().replace(to, e.nationalPrefixFormattingRule()) : e.format());
                return r ? td(d) : d
            }
            var tu = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;

            function tl(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function tc(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function t$(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? tc(Object(n), !0).forEach(function(e) {
                        var r, a;
                        r = t, a = n[e], e in r ? Object.defineProperty(r, e, {
                            value: a,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[e] = a
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : tc(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    })
                }
                return t
            }
            var ts = {
                formatExtension: function(t, e, n) {
                    return "".concat(t).concat(n.ext()).concat(e)
                }
            };

            function tf(t, e, n, r, a) {
                var d = function(t, e) {
                    for (var n, r = function(t, e) {
                            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                            if (n) return (n = n.call(t)).next.bind(n);
                            if (Array.isArray(t) || (n = function(t, e) {
                                    if (t) {
                                        if ("string" == typeof t) return tl(t, e);
                                        var n = Object.prototype.toString.call(t).slice(8, -1);
                                        if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(t);
                                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return tl(t, e)
                                    }
                                }(t))) {
                                n && (t = n);
                                var r = 0;
                                return function() {
                                    return r >= t.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: t[r++]
                                    }
                                }
                            }
                            throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }(t); !(n = r()).done;) {
                        var a = n.value;
                        if (a.leadingDigitsPatterns().length > 0) {
                            var d = a.leadingDigitsPatterns()[a.leadingDigitsPatterns().length - 1];
                            if (0 !== e.search(d)) continue
                        }
                        if (tt(e, a.pattern())) return a
                    }
                }(r.formats(), t);
                return d ? ti(t, d, {
                    useInternationalFormat: "INTERNATIONAL" === n,
                    withNationalPrefix: !d.nationalPrefixIsOptionalWhenFormattingInNationalFormat() || !a || !1 !== a.nationalPrefix,
                    carrierCode: e,
                    metadata: r
                }) : t
            }

            function tp(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function th(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? tp(Object(n), !0).forEach(function(e) {
                        var r, a;
                        r = t, a = n[e], e in r ? Object.defineProperty(r, e, {
                            value: a,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[e] = a
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : tp(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    })
                }
                return t
            }

            function ty(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            var tg = function() {
                    var t, e;

                    function n(t, e, r) {
                        if (! function(t, e) {
                                if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                            }(this, n), !t) throw TypeError("`country` or `countryCallingCode` not passed");
                        if (!e) throw TypeError("`nationalNumber` not passed");
                        if (!r) throw TypeError("`metadata` not passed");
                        var a, d, o, i, u, l = (a = t, d = r, u = new w(d), /^[A-Z]{2}$/.test(a) ? (o = a, u.selectNumberingPlan(o), i = u.countryCallingCode()) : i = a, {
                                country: o,
                                countryCallingCode: i
                            }),
                            c = l.country,
                            $ = l.countryCallingCode;
                        this.country = c, this.countryCallingCode = $, this.nationalNumber = e, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.metadata = r
                    }
                    return t = [{
                        key: "setExt",
                        value: function(t) {
                            this.ext = t
                        }
                    }, {
                        key: "getPossibleCountries",
                        value: function() {
                            var t, e, n, r;
                            return this.country ? [this.country] : (t = this.countryCallingCode, e = this.nationalNumber, n = this.metadata, (r = new w(n).getCountryCodesForCallingCode(t)) ? r.filter(function(t) {
                                var r;
                                return (r = new w(n)).selectNumberingPlan(t), r.numberingPlan.possibleLengths().indexOf(e.length) >= 0
                            }) : [])
                        }
                    }, {
                        key: "isPossible",
                        value: function() {
                            return function(t, e, n) {
                                if (void 0 === e && (e = {}), n = new w(n), e.v2) {
                                    if (!t.countryCallingCode) throw Error("Invalid phone number object passed");
                                    n.selectNumberingPlan(t.countryCallingCode)
                                } else {
                                    if (!t.phone) return !1;
                                    if (t.country) {
                                        if (!n.hasCountry(t.country)) throw Error("Unknown country: ".concat(t.country));
                                        n.country(t.country)
                                    } else {
                                        if (!t.countryCallingCode) throw Error("Invalid phone number object passed");
                                        n.selectNumberingPlan(t.countryCallingCode)
                                    }
                                }
                                if (n.possibleLengths()) return Q(t.phone || t.nationalNumber, n);
                                if (t.countryCallingCode && n.isNonGeographicCallingCode(t.countryCallingCode)) return !0;
                                throw Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.')
                            }(this, {
                                v2: !0
                            }, this.metadata)
                        }
                    }, {
                        key: "isValid",
                        value: function() {
                            var t, e;
                            return t = {
                                v2: !0
                            }, e = this.metadata, (t = t || {}, (e = new w(e)).selectNumberingPlan(this.country, this.countryCallingCode), e.hasTypes()) ? void 0 !== tr(this, t, e.metadata) : tt(t.v2 ? this.nationalNumber : this.phone, e.nationalNumberPattern())
                        }
                    }, {
                        key: "isNonGeographic",
                        value: function() {
                            return new w(this.metadata).isNonGeographicCallingCode(this.countryCallingCode)
                        }
                    }, {
                        key: "isEqual",
                        value: function(t) {
                            return this.number === t.number && this.ext === t.ext
                        }
                    }, {
                        key: "getType",
                        value: function() {
                            return tr(this, {
                                v2: !0
                            }, this.metadata)
                        }
                    }, {
                        key: "format",
                        value: function(t, e) {
                            return function(t, e, n, r) {
                                if (n = n ? t$(t$({}, ts), n) : ts, r = new w(r), t.country && "001" !== t.country) {
                                    if (!r.hasCountry(t.country)) throw Error("Unknown country: ".concat(t.country));
                                    r.country(t.country)
                                } else {
                                    if (!t.countryCallingCode) return t.phone || "";
                                    r.selectNumberingPlan(t.countryCallingCode)
                                }
                                var a, d, o, i, u, l, c, $, s, f, p, h, y, g = r.countryCallingCode(),
                                    m = n.v2 ? t.nationalNumber : t.phone;
                                switch (e) {
                                    case "NATIONAL":
                                        if (!m) return "";
                                        return a = y = tf(m, t.carrierCode, "NATIONAL", r, n), d = t.ext, o = r, i = n.formatExtension, d ? i(a, d, o) : a;
                                    case "INTERNATIONAL":
                                        if (!m) return "+".concat(g);
                                        return y = tf(m, null, "INTERNATIONAL", r, n), u = y = "+".concat(g, " ").concat(y), l = t.ext, c = r, $ = n.formatExtension, l ? $(u, l, c) : u;
                                    case "E.164":
                                        return "+".concat(g).concat(m);
                                    case "RFC3966":
                                        return function(t) {
                                            var e = t.number,
                                                n = t.ext;
                                            if (!e) return "";
                                            if ("+" !== e[0]) throw Error('"formatRFC3966()" expects "number" to be in E.164 format.');
                                            return "tel:".concat(e).concat(n ? ";ext=" + n : "")
                                        }({
                                            number: "+".concat(g).concat(m),
                                            ext: t.ext
                                        });
                                    case "IDD":
                                        if (!n.fromCountry) return;
                                        return s = function(t, e, n, r, a) {
                                            if (F(r, a.metadata) === n) {
                                                var d, o, i = tf(t, e, "NATIONAL", a);
                                                return "1" === n ? n + " " + i : i
                                            }
                                            var u = (d = a.metadata, ((o = new w(d)).selectNumberingPlan(r, void 0), o.defaultIDDPrefix()) ? o.defaultIDDPrefix() : tu.test(o.IDDPrefix()) ? o.IDDPrefix() : void 0);
                                            if (u) return "".concat(u, " ").concat(n, " ").concat(tf(t, null, "INTERNATIONAL", a))
                                        }(m, t.carrierCode, g, n.fromCountry, r), f = t.ext, p = r, h = n.formatExtension, f ? h(s, f, p) : s;
                                    default:
                                        throw Error('Unknown "format" argument passed to "formatNumber()": "'.concat(e, '"'))
                                }
                            }(this, t, e ? th(th({}, e), {}, {
                                v2: !0
                            }) : {
                                v2: !0
                            }, this.metadata)
                        }
                    }, {
                        key: "formatNational",
                        value: function(t) {
                            return this.format("NATIONAL", t)
                        }
                    }, {
                        key: "formatInternational",
                        value: function(t) {
                            return this.format("INTERNATIONAL", t)
                        }
                    }, {
                        key: "getURI",
                        value: function(t) {
                            return this.format("RFC3966", t)
                        }
                    }], ty(n.prototype, t), e && ty(n, e), Object.defineProperty(n, "prototype", {
                        writable: !1
                    }), n
                }(),
                tm = RegExp("([" + l + "])");

            function tv(t, e, n, r) {
                if (e) {
                    var a = new w(r);
                    a.selectNumberingPlan(e, n);
                    var d = RegExp(a.IDDPrefix());
                    if (0 === t.search(d)) {
                        var o = (t = t.slice(t.match(d)[0].length)).match(tm);
                        if (!o || null == o[1] || !(o[1].length > 0) || "0" !== o[1]) return t
                    }
                }
            }

            function tb(t, e) {
                if (t && e.numberingPlan.nationalPrefixForParsing()) {
                    var n = RegExp("^(?:" + e.numberingPlan.nationalPrefixForParsing() + ")"),
                        r = n.exec(t);
                    if (r) {
                        var a, d, o, i = r.length - 1,
                            u = i > 0 && r[i];
                        if (e.nationalPrefixTransformRule() && u) a = t.replace(n, e.nationalPrefixTransformRule()), i > 1 && (d = r[1]);
                        else {
                            var l = r[0];
                            a = t.slice(l.length), u && (d = r[1])
                        }
                        if (u) {
                            var c = t.indexOf(r[1]);
                            t.slice(0, c) === e.numberingPlan.nationalPrefix() && (o = e.numberingPlan.nationalPrefix())
                        } else o = r[0];
                        return {
                            nationalNumber: a,
                            nationalPrefix: o,
                            carrierCode: d
                        }
                    }
                }
                return {
                    nationalNumber: t
                }
            }

            function tC(t, e) {
                var n = tb(t, e),
                    r = n.carrierCode,
                    a = n.nationalNumber;
                return a !== t && (!(!tt(t, e.nationalNumberPattern()) || tt(a, e.nationalNumberPattern())) || e.possibleLengths() && ! function(t, e) {
                    switch (z(t, e)) {
                        case "TOO_SHORT":
                        case "INVALID_LENGTH":
                            return !1;
                        default:
                            return !0
                    }
                }(a, e)) ? {
                    nationalNumber: t
                } : {
                    nationalNumber: a,
                    carrierCode: r
                }
            }

            function tO(t, e, n, r) {
                var a = e ? F(e, r) : n;
                if (0 === t.indexOf(a)) {
                    (r = new w(r)).selectNumberingPlan(e, n);
                    var d = t.slice(a.length),
                        o = tC(d, r).nationalNumber,
                        i = tC(t, r).nationalNumber;
                    if (!tt(i, r.nationalNumberPattern()) && tt(o, r.nationalNumberPattern()) || "TOO_LONG" === z(i, r)) return {
                        countryCallingCode: a,
                        number: d
                    }
                }
                return {
                    number: t
                }
            }

            function tN(t, e, n, r) {
                if (!t) return {};
                if ("+" !== t[0]) {
                    var a, d = tv(t, e, n, r);
                    if (d && d !== t) a = !0, t = "+" + d;
                    else {
                        if (e || n) {
                            var o = tO(t, e, n, r),
                                i = o.countryCallingCode,
                                u = o.number;
                            if (i) return {
                                countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
                                countryCallingCode: i,
                                number: u
                            }
                        }
                        return {
                            number: t
                        }
                    }
                }
                if ("0" === t[1]) return {};
                r = new w(r);
                for (var l = 2; l - 1 <= 3 && l <= t.length;) {
                    var c = t.slice(1, l);
                    if (r.hasCallingCode(c)) return r.selectNumberingPlan(c), {
                        countryCallingCodeSource: a ? "FROM_NUMBER_WITH_IDD" : "FROM_NUMBER_WITH_PLUS_SIGN",
                        countryCallingCode: c,
                        number: t.slice(l)
                    };
                    l++
                }
                return {}
            }

            function tP(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function tS(t, e, n) {
                var r = n.getCountryCodesForCallingCode(t);
                return r ? 1 === r.length ? r[0] : function(t, e, n) {
                    n = new w(n);
                    for (var r, a = function(t, e) {
                            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                            if (n) return (n = n.call(t)).next.bind(n);
                            if (Array.isArray(t) || (n = function(t, e) {
                                    if (t) {
                                        if ("string" == typeof t) return tP(t, e);
                                        var n = Object.prototype.toString.call(t).slice(8, -1);
                                        if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(t);
                                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return tP(t, e)
                                    }
                                }(t))) {
                                n && (t = n);
                                var r = 0;
                                return function() {
                                    return r >= t.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: t[r++]
                                    }
                                }
                            }
                            throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }(t); !(r = a()).done;) {
                        var d = r.value;
                        if (n.country(d), n.leadingDigits()) {
                            if (e && 0 === e.search(n.leadingDigits())) return d
                        } else if (tr({
                                phone: e,
                                country: d
                            }, void 0, n.metadata)) return d
                    }
                }(r, e, n.metadata) : void 0
            }
            var tI = "([" + l + "]|[\\-\\.\\(\\)]?)",
                tx = RegExp("^\\+" + tI + "*[" + l + "]" + tI + "*$", "g"),
                tw = RegExp("^([" + l + "]+((\\-)*[" + l + "])*\\.)*[a-zA-Z]+((\\-)*[" + l + "])*\\.?$", "g"),
                tE = "tel:",
                tA = ";phone-context=",
                tj = RegExp("[" + $ + l + "]"),
                tT = RegExp("[^" + l + "#]+$");

            function tk(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function tM(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? tk(Object(n), !0).forEach(function(e) {
                        var r, a;
                        r = t, a = n[e], e in r ? Object.defineProperty(r, e, {
                            value: a,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[e] = a
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : tk(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    })
                }
                return t
            }

            function tR(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function tF(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? tR(Object(n), !0).forEach(function(e) {
                        var r, a;
                        r = t, a = n[e], e in r ? Object.defineProperty(r, e, {
                            value: a,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[e] = a
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : tR(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    })
                }
                return t
            }

            function tD(t, e, n) {
                e && e.defaultCountry && !D(e.defaultCountry, n) && (e = tF(tF({}, e), {}, {
                    defaultCountry: void 0
                }));
                try {
                    var r;
                    return r = e,
                        function(t, e, n) {
                            if (e = e || {}, n = new w(n), e.defaultCountry && !n.hasCountry(e.defaultCountry)) {
                                if (e.v2) throw new b("INVALID_COUNTRY");
                                throw Error("Unknown country: ".concat(e.defaultCountry))
                            }
                            var r, a = function(t, e, n) {
                                    var r = function(t, e) {
                                        var n = e.extractFormattedPhoneNumber,
                                            r = function(t) {
                                                var e = t.indexOf(tA);
                                                if (e < 0) return null;
                                                var n = e + tA.length;
                                                if (n >= t.length) return "";
                                                var r = t.indexOf(";", n);
                                                return r >= 0 ? t.substring(n, r) : t.substring(n)
                                            }(t);
                                        if (!(null === r || 0 !== r.length && (tx.test(r) || tw.test(r)))) throw new b("NOT_A_NUMBER");
                                        if (null === r) a = n(t) || "";
                                        else {
                                            a = "", "+" === r.charAt(0) && (a += r);
                                            var a, d, o = t.indexOf(tE);
                                            d = o >= 0 ? o + tE.length : 0;
                                            var i = t.indexOf(tA);
                                            a += t.substring(d, i)
                                        }
                                        var u = a.indexOf(";isub=");
                                        if (u > 0 && (a = a.substring(0, u)), "" !== a) return a
                                    }(t, {
                                        extractFormattedPhoneNumber: function(t) {
                                            return function(t, e, n) {
                                                if (t) {
                                                    if (t.length > 250) {
                                                        if (n) throw new b("TOO_LONG");
                                                        return
                                                    }
                                                    if (!1 === e) return t;
                                                    var r = t.search(tj);
                                                    if (!(r < 0)) return t.slice(r).replace(tT, "")
                                                }
                                            }(t, n, e)
                                        }
                                    });
                                    if (!r) return {};
                                    if (!(r.length >= 2 && V.test(r))) return _.test(r) ? {
                                        error: "TOO_SHORT"
                                    } : {};
                                    var a = function(t) {
                                        var e = t.search(K);
                                        if (e < 0) return {};
                                        for (var n = t.slice(0, e), r = t.match(K), a = 1; a < r.length;) {
                                            if (r[a]) return {
                                                number: n,
                                                ext: r[a]
                                            };
                                            a++
                                        }
                                    }(r);
                                    return a.ext ? a : {
                                        number: r
                                    }
                                }(t, e.v2, e.extract),
                                d = a.number,
                                o = a.ext,
                                i = a.error;
                            if (!d) {
                                if (e.v2) {
                                    if ("TOO_SHORT" === i) throw new b("TOO_SHORT");
                                    throw new b("NOT_A_NUMBER")
                                }
                                return {}
                            }
                            var u = function(t, e, n, r) {
                                    var a, d = tN(Y(t), e, n, r.metadata),
                                        o = d.countryCallingCodeSource,
                                        i = d.countryCallingCode,
                                        u = d.number;
                                    if (i) r.selectNumberingPlan(i);
                                    else {
                                        if (!u || !e && !n) return {};
                                        r.selectNumberingPlan(e, n), e && (a = e), i = n || F(e, r.metadata)
                                    }
                                    if (!u) return {
                                        countryCallingCodeSource: o,
                                        countryCallingCode: i
                                    };
                                    var l = tC(Y(u), r),
                                        c = l.nationalNumber,
                                        $ = l.carrierCode,
                                        s = tS(i, c, r);
                                    return s && (a = s, "001" === s || r.country(a)), {
                                        country: a,
                                        countryCallingCode: i,
                                        countryCallingCodeSource: o,
                                        nationalNumber: c,
                                        carrierCode: $
                                    }
                                }(d, e.defaultCountry, e.defaultCallingCode, n),
                                l = u.country,
                                c = u.nationalNumber,
                                $ = u.countryCallingCode,
                                s = u.countryCallingCodeSource,
                                f = u.carrierCode;
                            if (!n.hasSelectedNumberingPlan()) {
                                if (e.v2) throw new b("INVALID_COUNTRY");
                                return {}
                            }
                            if (!c || c.length < 2) {
                                if (e.v2) throw new b("TOO_SHORT");
                                return {}
                            }
                            if (c.length > 17) {
                                if (e.v2) throw new b("TOO_LONG");
                                return {}
                            }
                            if (e.v2) {
                                var p = new tg($, c, n.metadata);
                                return l && (p.country = l), f && (p.carrierCode = f), o && (p.ext = o), p.__countryCallingCodeSource = s, p
                            }
                            var h = (e.extended ? !!n.hasSelectedNumberingPlan() : !!l) && tt(c, n.nationalNumberPattern());
                            return e.extended ? {
                                country: l,
                                countryCallingCode: $,
                                carrierCode: f,
                                valid: h,
                                possible: !!h || !!(!0 === e.extended && n.possibleLengths() && Q(c, n)),
                                phone: c,
                                ext: o
                            } : h ? (r = {
                                country: l,
                                phone: c
                            }, o && (r.ext = o), r) : {}
                        }(t, tM(tM({}, r), {}, {
                            v2: !0
                        }), n)
                } catch (a) {
                    if (a instanceof b);
                    else throw a
                }
            }

            function tL() {
                var t = i(arguments);
                return tD(t.text, t.options, t.metadata)
            }

            function tB(t) {
                return (tB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function tG(t, e, n) {
                if (n || "object" !== tB(e) || (n = e, e = "NATIONAL"), !t) return "";
                var r = tL(t, n);
                if (!r) return "";
                switch (e) {
                    case "National":
                        e = "NATIONAL";
                        break;
                    case "International":
                        e = "INTERNATIONAL"
                }
                return r.format(e)
            }

            function t_(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function tU(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? t_(Object(n), !0).forEach(function(e) {
                        var r, a;
                        r = t, a = n[e], e in r ? Object.defineProperty(r, e, {
                            value: a,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[e] = a
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : t_(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    })
                }
                return t
            }

            function tV() {
                var t = i(arguments),
                    e = t.text,
                    n = t.options,
                    r = t.metadata,
                    a = tD(e, n = tU(tU({}, n), {}, {
                        extract: !1
                    }), r);
                return a && a.isValid() || !1
            }
            var tK = n(67294),
                tW = {
                    ext: "ext.",
                    country: "Phone number country",
                    phone: "Phone",
                    AB: "Abkhazia",
                    AC: "Ascension Island",
                    AD: "Andorra",
                    AE: "United Arab Emirates",
                    AF: "Afghanistan",
                    AG: "Antigua and Barbuda",
                    AI: "Anguilla",
                    AL: "Albania",
                    AM: "Armenia",
                    AO: "Angola",
                    AQ: "Antarctica",
                    AR: "Argentina",
                    AS: "American Samoa",
                    AT: "Austria",
                    AU: "Australia",
                    AW: "Aruba",
                    AX: "\xc5land Islands",
                    AZ: "Azerbaijan",
                    BA: "Bosnia and Herzegovina",
                    BB: "Barbados",
                    BD: "Bangladesh",
                    BE: "Belgium",
                    BF: "Burkina Faso",
                    BG: "Bulgaria",
                    BH: "Bahrain",
                    BI: "Burundi",
                    BJ: "Benin",
                    BL: "Saint Barth\xe9lemy",
                    BM: "Bermuda",
                    BN: "Brunei Darussalam",
                    BO: "Bolivia",
                    BQ: "Bonaire, Sint Eustatius and Saba",
                    BR: "Brazil",
                    BS: "Bahamas",
                    BT: "Bhutan",
                    BV: "Bouvet Island",
                    BW: "Botswana",
                    BY: "Belarus",
                    BZ: "Belize",
                    CA: "Canada",
                    CC: "Cocos (Keeling) Islands",
                    CD: "Congo, Democratic Republic of the",
                    CF: "Central African Republic",
                    CG: "Congo",
                    CH: "Switzerland",
                    CI: "Cote d'Ivoire",
                    CK: "Cook Islands",
                    CL: "Chile",
                    CM: "Cameroon",
                    CN: "China",
                    CO: "Colombia",
                    CR: "Costa Rica",
                    CU: "Cuba",
                    CV: "Cape Verde",
                    CW: "Cura\xe7ao",
                    CX: "Christmas Island",
                    CY: "Cyprus",
                    CZ: "Czech Republic",
                    DE: "Germany",
                    DJ: "Djibouti",
                    DK: "Denmark",
                    DM: "Dominica",
                    DO: "Dominican Republic",
                    DZ: "Algeria",
                    EC: "Ecuador",
                    EE: "Estonia",
                    EG: "Egypt",
                    EH: "Western Sahara",
                    ER: "Eritrea",
                    ES: "Spain",
                    ET: "Ethiopia",
                    FI: "Finland",
                    FJ: "Fiji",
                    FK: "Falkland Islands",
                    FM: "Federated States of Micronesia",
                    FO: "Faroe Islands",
                    FR: "France",
                    GA: "Gabon",
                    GB: "United Kingdom",
                    GD: "Grenada",
                    GE: "Georgia",
                    GF: "French Guiana",
                    GG: "Guernsey",
                    GH: "Ghana",
                    GI: "Gibraltar",
                    GL: "Greenland",
                    GM: "Gambia",
                    GN: "Guinea",
                    GP: "Guadeloupe",
                    GQ: "Equatorial Guinea",
                    GR: "Greece",
                    GS: "South Georgia and the South Sandwich Islands",
                    GT: "Guatemala",
                    GU: "Guam",
                    GW: "Guinea-Bissau",
                    GY: "Guyana",
                    HK: "Hong Kong",
                    HM: "Heard Island and McDonald Islands",
                    HN: "Honduras",
                    HR: "Croatia",
                    HT: "Haiti",
                    HU: "Hungary",
                    ID: "Indonesia",
                    IE: "Ireland",
                    IL: "Israel",
                    IM: "Isle of Man",
                    IN: "India",
                    IO: "British Indian Ocean Territory",
                    IQ: "Iraq",
                    IR: "Iran",
                    IS: "Iceland",
                    IT: "Italy",
                    JE: "Jersey",
                    JM: "Jamaica",
                    JO: "Jordan",
                    JP: "Japan",
                    KE: "Kenya",
                    KG: "Kyrgyzstan",
                    KH: "Cambodia",
                    KI: "Kiribati",
                    KM: "Comoros",
                    KN: "Saint Kitts and Nevis",
                    KP: "North Korea",
                    KR: "South Korea",
                    KW: "Kuwait",
                    KY: "Cayman Islands",
                    KZ: "Kazakhstan",
                    LA: "Laos",
                    LB: "Lebanon",
                    LC: "Saint Lucia",
                    LI: "Liechtenstein",
                    LK: "Sri Lanka",
                    LR: "Liberia",
                    LS: "Lesotho",
                    LT: "Lithuania",
                    LU: "Luxembourg",
                    LV: "Latvia",
                    LY: "Libya",
                    MA: "Morocco",
                    MC: "Monaco",
                    MD: "Moldova",
                    ME: "Montenegro",
                    MF: "Saint Martin (French Part)",
                    MG: "Madagascar",
                    MH: "Marshall Islands",
                    MK: "North Macedonia",
                    ML: "Mali",
                    MM: "Myanmar",
                    MN: "Mongolia",
                    MO: "Macao",
                    MP: "Northern Mariana Islands",
                    MQ: "Martinique",
                    MR: "Mauritania",
                    MS: "Montserrat",
                    MT: "Malta",
                    MU: "Mauritius",
                    MV: "Maldives",
                    MW: "Malawi",
                    MX: "Mexico",
                    MY: "Malaysia",
                    MZ: "Mozambique",
                    NA: "Namibia",
                    NC: "New Caledonia",
                    NE: "Niger",
                    NF: "Norfolk Island",
                    NG: "Nigeria",
                    NI: "Nicaragua",
                    NL: "Netherlands",
                    NO: "Norway",
                    NP: "Nepal",
                    NR: "Nauru",
                    NU: "Niue",
                    NZ: "New Zealand",
                    OM: "Oman",
                    OS: "South Ossetia",
                    PA: "Panama",
                    PE: "Peru",
                    PF: "French Polynesia",
                    PG: "Papua New Guinea",
                    PH: "Philippines",
                    PK: "Pakistan",
                    PL: "Poland",
                    PM: "Saint Pierre and Miquelon",
                    PN: "Pitcairn",
                    PR: "Puerto Rico",
                    PS: "Palestine",
                    PT: "Portugal",
                    PW: "Palau",
                    PY: "Paraguay",
                    QA: "Qatar",
                    RE: "Reunion",
                    RO: "Romania",
                    RS: "Serbia",
                    RU: "Russia",
                    RW: "Rwanda",
                    SA: "Saudi Arabia",
                    SB: "Solomon Islands",
                    SC: "Seychelles",
                    SD: "Sudan",
                    SE: "Sweden",
                    SG: "Singapore",
                    SH: "Saint Helena",
                    SI: "Slovenia",
                    SJ: "Svalbard and Jan Mayen",
                    SK: "Slovakia",
                    SL: "Sierra Leone",
                    SM: "San Marino",
                    SN: "Senegal",
                    SO: "Somalia",
                    SR: "Suriname",
                    SS: "South Sudan",
                    ST: "Sao Tome and Principe",
                    SV: "El Salvador",
                    SX: "Sint Maarten",
                    SY: "Syria",
                    SZ: "Swaziland",
                    TA: "Tristan da Cunha",
                    TC: "Turks and Caicos Islands",
                    TD: "Chad",
                    TF: "French Southern Territories",
                    TG: "Togo",
                    TH: "Thailand",
                    TJ: "Tajikistan",
                    TK: "Tokelau",
                    TL: "Timor-Leste",
                    TM: "Turkmenistan",
                    TN: "Tunisia",
                    TO: "Tonga",
                    TR: "Turkey",
                    TT: "Trinidad and Tobago",
                    TV: "Tuvalu",
                    TW: "Taiwan",
                    TZ: "Tanzania",
                    UA: "Ukraine",
                    UG: "Uganda",
                    UM: "United States Minor Outlying Islands",
                    US: "United States",
                    UY: "Uruguay",
                    UZ: "Uzbekistan",
                    VA: "Holy See (Vatican City State)",
                    VC: "Saint Vincent and the Grenadines",
                    VE: "Venezuela",
                    VG: "Virgin Islands, British",
                    VI: "Virgin Islands, U.S.",
                    VN: "Vietnam",
                    VU: "Vanuatu",
                    WF: "Wallis and Futuna",
                    WS: "Samoa",
                    XK: "Kosovo",
                    YE: "Yemen",
                    YT: "Mayotte",
                    ZA: "South Africa",
                    ZM: "Zambia",
                    ZW: "Zimbabwe",
                    ZZ: "International"
                },
                tH = n(45697),
                tZ = tH.shape({
                    country_calling_codes: tH.object.isRequired,
                    countries: tH.object.isRequired
                }),
                tq = tH.objectOf(tH.string),
                tY = n(94184);

            function tJ(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function tX(t, e) {
                for (var n, r = 0, a = function(t, e) {
                        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (n) return (n = n.call(t)).next.bind(n);
                        if (Array.isArray(t) || (n = function(t, e) {
                                if (t) {
                                    if ("string" == typeof t) return tJ(t, e);
                                    var n = Object.prototype.toString.call(t).slice(8, -1);
                                    if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(t);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return tJ(t, e)
                                }
                            }(t))) {
                            n && (t = n);
                            var r = 0;
                            return function() {
                                return r >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[r++]
                                }
                            }
                        }
                        throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }(e.split("")); !(n = a()).done;) n.value === t && r++;
                return r
            }

            function tz(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var tQ = {
                Backspace: 8,
                Delete: 46
            };

            function t0(t, e) {
                void 0 !== e && (function() {
                    if ("undefined" != typeof navigator) return t1.test(navigator.userAgent)
                }() ? setTimeout(function() {
                    return t.setSelectionRange(e, e)
                }, 0) : t.setSelectionRange(e, e))
            }
            var t1 = /Android/i;

            function t2(t, e, n, r, a) {
                var d = function(t, e, n) {
                        for (var r = "", a = 0, d = 0; d < t.length;) {
                            var o = n(t[d], r);
                            void 0 !== o && (r += o, void 0 !== e && (e === d ? a = r.length - 1 : e > d && (a = r.length))), d++
                        }
                        return void 0 === e && (a = r.length), {
                            value: r,
                            caret: a
                        }
                    }(t.value, t.selectionStart, e),
                    o = d.value,
                    i = d.caret;
                if (r) {
                    var u = function(t, e, n) {
                        switch (n) {
                            case "Backspace":
                                e > 0 && (t = t.slice(0, e - 1) + t.slice(e), e--);
                                break;
                            case "Delete":
                                t = t.slice(0, e) + t.slice(e + 1)
                        }
                        return {
                            value: t,
                            caret: e
                        }
                    }(o, i, r);
                    o = u.value, i = u.caret
                }
                var l = function(t, e, n) {
                        "string" == typeof n && (n = function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x",
                                n = arguments.length > 2 ? arguments[2] : void 0;
                            if (!t) return function(t) {
                                return {
                                    text: t
                                }
                            };
                            var r = tX(e, t);
                            return function(a) {
                                if (!a) return {
                                    text: "",
                                    template: t
                                };
                                for (var d, o = 0, i = "", u = function(t, e) {
                                        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                        if (n) return (n = n.call(t)).next.bind(n);
                                        if (Array.isArray(t) || (n = function(t, e) {
                                                if (t) {
                                                    if ("string" == typeof t) return tz(t, e);
                                                    var n = Object.prototype.toString.call(t).slice(8, -1);
                                                    if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(t);
                                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return tz(t, e)
                                                }
                                            }(t))) {
                                            n && (t = n);
                                            var r = 0;
                                            return function() {
                                                return r >= t.length ? {
                                                    done: !0
                                                } : {
                                                    done: !1,
                                                    value: t[r++]
                                                }
                                            }
                                        }
                                        throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }(t.split("")); !(d = u()).done;) {
                                    var l = d.value;
                                    if (l !== e) {
                                        i += l;
                                        continue
                                    }
                                    if (i += a[o], ++o === a.length && a.length < r) break
                                }
                                return n && (i = function(t, e) {
                                    for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "x", r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : " ", a = t.length, d = tX("(", t) - tX(")", t); d > 0 && a < e.length;) t += e[a].replace(n, r), ")" === e[a] && d--, a++;
                                    return t
                                }(i, t)), {
                                    text: i,
                                    template: t
                                }
                            }
                        }(n));
                        var r = n(t) || {},
                            a = r.text,
                            d = r.template;
                        if (void 0 === a && (a = t), d) {
                            if (void 0 === e) e = a.length;
                            else {
                                for (var o = 0, i = !1, u = -1; o < a.length && o < d.length;) {
                                    if (a[o] !== d[o]) {
                                        if (0 === e) {
                                            i = !0, e = o;
                                            break
                                        }
                                        u = o, e--
                                    }
                                    o++
                                }
                                i || (e = u + 1)
                            }
                        }
                        return {
                            text: a,
                            caret: e
                        }
                    }(o, i, n),
                    c = l.text;
                i = l.caret, t.value = c, t0(t, i), a(o)
            }
            var t3 = ["value", "parse", "format", "inputComponent", "onChange", "onKeyDown"];

            function t4() {
                return (t4 = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }

            function t9(t, e) {
                var n = t.value,
                    r = t.parse,
                    a = t.format,
                    d = t.inputComponent,
                    o = t.onChange,
                    i = t.onKeyDown,
                    u = function(t, e) {
                        if (null == t) return {};
                        var n, r, a = function(t, e) {
                            if (null == t) return {};
                            var n, r, a = {},
                                d = Object.keys(t);
                            for (r = 0; r < d.length; r++) n = d[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                            return a
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var d = Object.getOwnPropertySymbols(t);
                            for (r = 0; r < d.length; r++) n = d[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                        }
                        return a
                    }(t, t3),
                    l = (0, tK.useRef)(),
                    c = (0, tK.useCallback)(function(t) {
                        l.current = t, e && ("function" == typeof e ? e(t) : e.current = t)
                    }, [e]),
                    $ = (0, tK.useCallback)(function(t) {
                        t2(l.current, r, a, void 0, o)
                    }, [l, r, a, o]),
                    s = (0, tK.useCallback)(function(t) {
                        return i && i(t),
                            function(t, e, n, r, a) {
                                if (!e.hasAttribute("readonly")) {
                                    var d = function(t) {
                                        switch (t.keyCode) {
                                            case tQ.Backspace:
                                                return "Backspace";
                                            case tQ.Delete:
                                                return "Delete"
                                        }
                                    }(t);
                                    switch (d) {
                                        case "Delete":
                                        case "Backspace":
                                            t.preventDefault();
                                            var o, i, u = function(t) {
                                                if (t.selectionStart !== t.selectionEnd) return {
                                                    start: t.selectionStart,
                                                    end: t.selectionEnd
                                                }
                                            }(e);
                                            if (u) return i = (i = (o = e).value).slice(0, u.start) + i.slice(u.end), o.value = i, t0(o, u.start), t2(e, n, r, void 0, a);
                                            return t2(e, n, r, d, a)
                                    }
                                }
                            }(t, l.current, r, a, o)
                    }, [l, r, a, o, i]);
                return tK.createElement(d, t4({}, u, {
                    ref: c,
                    value: a(null == n ? "" : n).text,
                    onKeyDown: s,
                    onChange: $
                }))
            }(t9 = tK.forwardRef(t9)).propTypes = {
                parse: tH.func.isRequired,
                format: tH.func.isRequired,
                inputComponent: tH.elementType.isRequired,
                type: tH.string.isRequired,
                value: tH.string,
                onChange: tH.func.isRequired,
                onKeyDown: tH.func,
                onCut: tH.func,
                onPaste: tH.func
            }, t9.defaultProps = {
                inputComponent: "input",
                type: "text"
            };
            var t8 = t9;

            function t6(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            var t5 = function() {
                var t, e;

                function n(t) {
                    var e = t.onCountryChange,
                        r = t.onCallingCodeChange;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                    }(this, n), this.onCountryChange = e, this.onCallingCodeChange = r
                }
                return t = [{
                    key: "reset",
                    value: function(t) {
                        var e = t.country,
                            n = t.callingCode;
                        this.international = !1, this.IDDPrefix = void 0, this.missingPlus = void 0, this.callingCode = void 0, this.digits = "", this.resetNationalSignificantNumber(), this.initCountryAndCallingCode(e, n)
                    }
                }, {
                    key: "resetNationalSignificantNumber",
                    value: function() {
                        this.nationalSignificantNumber = this.getNationalDigits(), this.nationalSignificantNumberMatchesInput = !0, this.nationalPrefix = void 0, this.carrierCode = void 0, this.complexPrefixBeforeNationalSignificantNumber = void 0
                    }
                }, {
                    key: "update",
                    value: function(t) {
                        for (var e = 0, n = Object.keys(t); e < n.length; e++) {
                            var r = n[e];
                            this[r] = t[r]
                        }
                    }
                }, {
                    key: "initCountryAndCallingCode",
                    value: function(t, e) {
                        this.setCountry(t), this.setCallingCode(e)
                    }
                }, {
                    key: "setCountry",
                    value: function(t) {
                        this.country = t, this.onCountryChange(t)
                    }
                }, {
                    key: "setCallingCode",
                    value: function(t) {
                        this.callingCode = t, this.onCallingCodeChange(t, this.country)
                    }
                }, {
                    key: "startInternationalNumber",
                    value: function(t, e) {
                        this.international = !0, this.initCountryAndCallingCode(t, e)
                    }
                }, {
                    key: "appendDigits",
                    value: function(t) {
                        this.digits += t
                    }
                }, {
                    key: "appendNationalSignificantNumberDigits",
                    value: function(t) {
                        this.nationalSignificantNumber += t
                    }
                }, {
                    key: "getNationalDigits",
                    value: function() {
                        return this.international ? this.digits.slice((this.IDDPrefix ? this.IDDPrefix.length : 0) + (this.callingCode ? this.callingCode.length : 0)) : this.digits
                    }
                }, {
                    key: "getDigitsWithoutInternationalPrefix",
                    value: function() {
                        return this.international && this.IDDPrefix ? this.digits.slice(this.IDDPrefix.length) : this.digits
                    }
                }], t6(n.prototype, t), e && t6(n, e), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n
            }();

            function t7(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var et = /x/;

            function ee(t, e) {
                if (e < 1) return "";
                for (var n = ""; e > 1;) 1 & e && (n += t), e >>= 1, t += t;
                return n + t
            }

            function en(t, e) {
                return ")" === t[e] && e++,
                    function(t) {
                        for (var e = [], n = 0; n < t.length;) "(" === t[n] ? e.push(n) : ")" === t[n] && e.pop(), n++;
                        var r = 0,
                            a = "";
                        e.push(t.length);
                        for (var d = 0; d < e.length; d++) {
                            var o = e[d];
                            a += t.slice(r, o), r = o + 1
                        }
                        return a
                    }(t.slice(0, e))
            }

            function er(t, e, n) {
                var r = n.metadata,
                    a = n.useNationalPrefixFormattingRule,
                    d = n.getSeparatorAfterNationalPrefix,
                    o = ti(t.nationalSignificantNumber, e, {
                        carrierCode: t.carrierCode,
                        useInternationalFormat: t.international,
                        withNationalPrefix: a,
                        metadata: r
                    });
                if (!a && (t.nationalPrefix ? o = t.nationalPrefix + d(e) + o : t.complexPrefixBeforeNationalSignificantNumber && (o = t.complexPrefixBeforeNationalSignificantNumber + " " + o)), Z(o) === t.getNationalDigits()) return o
            }

            function ea(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            var ed = function() {
                    var t, e;

                    function n() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                        }(this, n)
                    }
                    return t = [{
                        key: "parse",
                        value: function(t) {
                            if (this.context = [{
                                    or: !0,
                                    instructions: []
                                }], this.parsePattern(t), 1 !== this.context.length) throw Error("Non-finalized contexts left when pattern parse ended");
                            var e = this.context[0],
                                n = e.branches,
                                r = e.instructions;
                            if (n) return {
                                op: "|",
                                args: n.concat([eu(r)])
                            };
                            if (0 === r.length) throw Error("Pattern is required");
                            return 1 === r.length ? r[0] : r
                        }
                    }, {
                        key: "startContext",
                        value: function(t) {
                            this.context.push(t)
                        }
                    }, {
                        key: "endContext",
                        value: function() {
                            this.context.pop()
                        }
                    }, {
                        key: "getContext",
                        value: function() {
                            return this.context[this.context.length - 1]
                        }
                    }, {
                        key: "parsePattern",
                        value: function(t) {
                            if (!t) throw Error("Pattern is required");
                            var e = t.match(ei);
                            if (!e) {
                                if (eo.test(t)) throw Error("Illegal characters found in a pattern: ".concat(t));
                                this.getContext().instructions = this.getContext().instructions.concat(t.split(""));
                                return
                            }
                            var n = e[1],
                                r = t.slice(0, e.index),
                                a = t.slice(e.index + n.length);
                            switch (n) {
                                case "(?:":
                                    r && this.parsePattern(r), this.startContext({
                                        or: !0,
                                        instructions: [],
                                        branches: []
                                    });
                                    break;
                                case ")":
                                    if (!this.getContext().or) throw Error('")" operator must be preceded by "(?:" operator');
                                    if (r && this.parsePattern(r), 0 === this.getContext().instructions.length) throw Error('No instructions found after "|" operator in an "or" group');
                                    var d = this.getContext().branches;
                                    d.push(eu(this.getContext().instructions)), this.endContext(), this.getContext().instructions.push({
                                        op: "|",
                                        args: d
                                    });
                                    break;
                                case "|":
                                    if (!this.getContext().or) throw Error('"|" operator can only be used inside "or" groups');
                                    if (r && this.parsePattern(r), !this.getContext().branches) {
                                        if (1 === this.context.length) this.getContext().branches = [];
                                        else throw Error('"branches" not found in an "or" group context')
                                    }
                                    this.getContext().branches.push(eu(this.getContext().instructions)), this.getContext().instructions = [];
                                    break;
                                case "[":
                                    r && this.parsePattern(r), this.startContext({
                                        oneOfSet: !0
                                    });
                                    break;
                                case "]":
                                    if (!this.getContext().oneOfSet) throw Error('"]" operator must be preceded by "[" operator');
                                    this.endContext(), this.getContext().instructions.push({
                                        op: "[]",
                                        args: function(t) {
                                            for (var e = [], n = 0; n < t.length;) {
                                                if ("-" === t[n]) {
                                                    if (0 === n || n === t.length - 1) throw Error("Couldn't parse a one-of set pattern: ".concat(t));
                                                    for (var r = t[n - 1].charCodeAt(0) + 1, a = t[n + 1].charCodeAt(0) - 1, d = r; d <= a;) e.push(String.fromCharCode(d)), d++
                                                } else e.push(t[n]);
                                                n++
                                            }
                                            return e
                                        }(r)
                                    });
                                    break;
                                default:
                                    throw Error("Unknown operator: ".concat(n))
                            }
                            a && this.parsePattern(a)
                        }
                    }], ea(n.prototype, t), e && ea(n, e), Object.defineProperty(n, "prototype", {
                        writable: !1
                    }), n
                }(),
                eo = /[\(\)\[\]\?\:\|]/,
                ei = RegExp("(\\||\\(\\?\\:|\\)|\\[|\\])");

            function eu(t) {
                return 1 === t.length ? t[0] : t
            }

            function el(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (Array.isArray(t) || (n = function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return ec(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ec(t, e)
                        }
                    }(t)) || e && t && "number" == typeof t.length) {
                    n && (t = n);
                    var r = 0;
                    return function() {
                        return r >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[r++]
                        }
                    }
                }
                throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function ec(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function e$(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            var es = function() {
                var t, e;

                function n(t) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                    }(this, n), this.matchTree = new ed().parse(t)
                }
                return t = [{
                    key: "match",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e.allowOverflow;
                        if (!t) throw Error("String is required");
                        var r = function t(e, n, r) {
                            if ("string" == typeof n) {
                                var a = e.join("");
                                return 0 === n.indexOf(a) ? e.length === n.length ? {
                                    match: !0,
                                    matchedChars: e
                                } : {
                                    partialMatch: !0
                                } : 0 === a.indexOf(n) ? r && e.length > n.length ? {
                                    overflow: !0
                                } : {
                                    match: !0,
                                    matchedChars: e.slice(0, n.length)
                                } : void 0
                            }
                            if (Array.isArray(n)) {
                                for (var d = e.slice(), o = 0; o < n.length;) {
                                    var i = t(d, n[o], r && o === n.length - 1);
                                    if (!i) return;
                                    if (i.overflow) return i;
                                    if (i.match) {
                                        if (0 === (d = d.slice(i.matchedChars.length)).length) {
                                            if (o === n.length - 1) return {
                                                match: !0,
                                                matchedChars: e
                                            };
                                            return {
                                                partialMatch: !0
                                            }
                                        }
                                    } else {
                                        if (i.partialMatch) return {
                                            partialMatch: !0
                                        };
                                        throw Error("Unsupported match result:\n".concat(JSON.stringify(i, null, 2)))
                                    }
                                    o++
                                }
                                return r ? {
                                    overflow: !0
                                } : {
                                    match: !0,
                                    matchedChars: e.slice(0, e.length - d.length)
                                }
                            }
                            switch (n.op) {
                                case "|":
                                    for (var u, l, c = el(n.args); !(l = c()).done;) {
                                        var $ = t(e, l.value, r);
                                        if ($) {
                                            if ($.overflow) return $;
                                            if ($.match) return {
                                                match: !0,
                                                matchedChars: $.matchedChars
                                            };
                                            if ($.partialMatch) u = !0;
                                            else throw Error("Unsupported match result:\n".concat(JSON.stringify($, null, 2)))
                                        }
                                    }
                                    if (u) return {
                                        partialMatch: !0
                                    };
                                    return;
                                case "[]":
                                    for (var s, f = el(n.args); !(s = f()).done;) {
                                        var p = s.value;
                                        if (e[0] === p) {
                                            if (1 === e.length) return {
                                                match: !0,
                                                matchedChars: e
                                            };
                                            if (r) return {
                                                overflow: !0
                                            };
                                            return {
                                                match: !0,
                                                matchedChars: [p]
                                            }
                                        }
                                    }
                                    return;
                                default:
                                    throw Error("Unsupported instruction tree: ".concat(n))
                            }
                        }(t.split(""), this.matchTree, !0);
                        if (r && r.match && delete r.matchedChars, !r || !r.overflow || n) return r
                    }
                }], e$(n.prototype, t), e && e$(n, e), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n
            }();

            function ef(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (Array.isArray(t) || (n = function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return ep(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ep(t, e)
                        }
                    }(t)) || e && t && "number" == typeof t.length) {
                    n && (t = n);
                    var r = 0;
                    return function() {
                        return r >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[r++]
                        }
                    }
                }
                throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function ep(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function eh(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            var ey = ee("9", 15),
                eg = /[- ]/,
                em = RegExp("[" + c + "]*\\$1[" + c + "]*(\\$\\d[" + c + "]*)*$"),
                ev = function() {
                    var t, e;

                    function n(t) {
                        t.state;
                        var e = t.metadata;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                        }(this, n), this.metadata = e, this.resetFormat()
                    }
                    return t = [{
                        key: "resetFormat",
                        value: function() {
                            this.chosenFormat = void 0, this.template = void 0, this.nationalNumberTemplate = void 0, this.populatedNationalNumberTemplate = void 0, this.populatedNationalNumberTemplatePosition = -1
                        }
                    }, {
                        key: "reset",
                        value: function(t, e) {
                            this.resetFormat(), t ? (this.isNANP = "1" === t.callingCode(), this.matchingFormats = t.formats(), e.nationalSignificantNumber && this.narrowDownMatchingFormats(e)) : (this.isNANP = void 0, this.matchingFormats = [])
                        }
                    }, {
                        key: "format",
                        value: function(t, e) {
                            var n = this;
                            if ("IS_POSSIBLE" === z(e.nationalSignificantNumber, this.metadata))
                                for (var r, a = ef(this.matchingFormats); !(r = a()).done;) {
                                    var d = r.value,
                                        o = function(t, e, n) {
                                            var r = n.metadata,
                                                a = n.shouldTryNationalPrefixFormattingRule,
                                                d = n.getSeparatorAfterNationalPrefix;
                                            if (RegExp("^(?:".concat(e.pattern(), ")$")).test(t.nationalSignificantNumber)) return function(t, e, n) {
                                                var r = n.metadata,
                                                    a = n.shouldTryNationalPrefixFormattingRule,
                                                    d = n.getSeparatorAfterNationalPrefix;
                                                if (t.nationalSignificantNumber, t.international, t.nationalPrefix, t.carrierCode, a(e)) {
                                                    var o = er(t, e, {
                                                        useNationalPrefixFormattingRule: !0,
                                                        getSeparatorAfterNationalPrefix: d,
                                                        metadata: r
                                                    });
                                                    if (o) return o
                                                }
                                                return er(t, e, {
                                                    useNationalPrefixFormattingRule: !1,
                                                    getSeparatorAfterNationalPrefix: d,
                                                    metadata: r
                                                })
                                            }(t, e, {
                                                metadata: r,
                                                shouldTryNationalPrefixFormattingRule: a,
                                                getSeparatorAfterNationalPrefix: d
                                            })
                                        }(e, d, {
                                            metadata: this.metadata,
                                            shouldTryNationalPrefixFormattingRule: function(t) {
                                                return n.shouldTryNationalPrefixFormattingRule(t, {
                                                    international: e.international,
                                                    nationalPrefix: e.nationalPrefix
                                                })
                                            },
                                            getSeparatorAfterNationalPrefix: function(t) {
                                                return n.getSeparatorAfterNationalPrefix(t)
                                            }
                                        });
                                    if (o) return this.resetFormat(), this.chosenFormat = d, this.setNationalNumberTemplate(o.replace(/\d/g, "x"), e), this.populatedNationalNumberTemplate = o, this.populatedNationalNumberTemplatePosition = this.template.lastIndexOf("x"), o
                                }
                            return this.formatNationalNumberWithNextDigits(t, e)
                        }
                    }, {
                        key: "formatNationalNumberWithNextDigits",
                        value: function(t, e) {
                            var n = this.chosenFormat,
                                r = this.chooseFormat(e);
                            if (r) return r === n ? this.formatNextNationalNumberDigits(t) : this.formatNextNationalNumberDigits(e.getNationalDigits())
                        }
                    }, {
                        key: "narrowDownMatchingFormats",
                        value: function(t) {
                            var e = this,
                                n = t.nationalSignificantNumber,
                                r = t.nationalPrefix,
                                a = t.international,
                                d = n.length - 3;
                            d < 0 && (d = 0), this.matchingFormats = this.matchingFormats.filter(function(t) {
                                return e.formatSuits(t, a, r) && e.formatMatches(t, n, d)
                            }), this.chosenFormat && -1 === this.matchingFormats.indexOf(this.chosenFormat) && this.resetFormat()
                        }
                    }, {
                        key: "formatSuits",
                        value: function(t, e, n) {
                            return !(n && !t.usesNationalPrefix() && !t.nationalPrefixIsOptionalWhenFormattingInNationalFormat() || !e && !n && t.nationalPrefixIsMandatoryWhenFormattingInNationalFormat())
                        }
                    }, {
                        key: "formatMatches",
                        value: function(t, e, n) {
                            var r = t.leadingDigitsPatterns().length;
                            if (0 === r) return !0;
                            n = Math.min(n, r - 1);
                            var a = t.leadingDigitsPatterns()[n];
                            if (e.length < 3) try {
                                return void 0 !== new es(a).match(e, {
                                    allowOverflow: !0
                                })
                            } catch (d) {
                                return console.error(d), !0
                            }
                            return RegExp("^(".concat(a, ")")).test(e)
                        }
                    }, {
                        key: "getFormatFormat",
                        value: function(t, e) {
                            return e ? t.internationalFormat() : t.format()
                        }
                    }, {
                        key: "chooseFormat",
                        value: function(t) {
                            for (var e, n = this, r = ef(this.matchingFormats.slice()); !(e = r()).done;) {
                                var a = function() {
                                    var r = e.value;
                                    return n.chosenFormat === r ? "break" : em.test(n.getFormatFormat(r, t.international)) ? n.createTemplateForFormat(r, t) ? (n.chosenFormat = r, "break") : (n.matchingFormats = n.matchingFormats.filter(function(t) {
                                        return t !== r
                                    }), "continue") : "continue"
                                }();
                                if ("break" === a) break;
                                if ("continue" === a) continue
                            }
                            return this.chosenFormat || this.resetFormat(), this.chosenFormat
                        }
                    }, {
                        key: "createTemplateForFormat",
                        value: function(t, e) {
                            if (!(t.pattern().indexOf("|") >= 0)) {
                                var n = this.getTemplateForFormat(t, e);
                                if (n) return this.setNationalNumberTemplate(n, e), !0
                            }
                        }
                    }, {
                        key: "getSeparatorAfterNationalPrefix",
                        value: function(t) {
                            return this.isNANP || t && t.nationalPrefixFormattingRule() && eg.test(t.nationalPrefixFormattingRule()) ? " " : ""
                        }
                    }, {
                        key: "getInternationalPrefixBeforeCountryCallingCode",
                        value: function(t, e) {
                            var n = t.IDDPrefix,
                                r = t.missingPlus;
                            return n ? e && !1 === e.spacing ? n : n + " " : r ? "" : "+"
                        }
                    }, {
                        key: "getTemplate",
                        value: function(t) {
                            if (this.template) {
                                for (var e = -1, n = 0, r = t.international ? this.getInternationalPrefixBeforeCountryCallingCode(t, {
                                        spacing: !1
                                    }) : ""; n < r.length + t.getDigitsWithoutInternationalPrefix().length;) e = this.template.indexOf("x", e + 1), n++;
                                return en(this.template, e + 1)
                            }
                        }
                    }, {
                        key: "setNationalNumberTemplate",
                        value: function(t, e) {
                            this.nationalNumberTemplate = t, this.populatedNationalNumberTemplate = t, this.populatedNationalNumberTemplatePosition = -1, e.international ? this.template = this.getInternationalPrefixBeforeCountryCallingCode(e).replace(/[\d\+]/g, "x") + ee("x", e.callingCode.length) + " " + t : this.template = t
                        }
                    }, {
                        key: "getTemplateForFormat",
                        value: function(t, e) {
                            var n, r = e.nationalSignificantNumber,
                                a = e.international,
                                d = e.nationalPrefix,
                                o = e.complexPrefixBeforeNationalSignificantNumber,
                                i = t.pattern();
                            i = i.replace(/\[([^\[\]])*\]/g, "\\d").replace(/\d(?=[^,}][^,}])/g, "\\d");
                            var u = ey.match(i)[0];
                            if (!(r.length > u.length)) {
                                var l = RegExp("^" + i + "$"),
                                    c = r.replace(/\d/g, "9");
                                l.test(c) && (u = c);
                                var $ = this.getFormatFormat(t, a);
                                if (this.shouldTryNationalPrefixFormattingRule(t, {
                                        international: a,
                                        nationalPrefix: d
                                    })) {
                                    var s = $.replace(to, t.nationalPrefixFormattingRule());
                                    if (Z(t.nationalPrefixFormattingRule()) === (d || "") + Z("$1") && ($ = s, n = !0, d))
                                        for (var f = d.length; f > 0;) $ = $.replace(/\d/, "x"), f--
                                }
                                var p = u.replace(RegExp(i), $).replace(/9/g, "x");
                                return !n && (o ? p = ee("x", o.length) + " " + p : d && (p = ee("x", d.length) + this.getSeparatorAfterNationalPrefix(t) + p)), a && (p = td(p)), p
                            }
                        }
                    }, {
                        key: "formatNextNationalNumberDigits",
                        value: function(t) {
                            var e = function(t, e, n) {
                                for (var r, a = function(t, e) {
                                        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                        if (n) return (n = n.call(t)).next.bind(n);
                                        if (Array.isArray(t) || (n = function(t, e) {
                                                if (t) {
                                                    if ("string" == typeof t) return t7(t, e);
                                                    var n = Object.prototype.toString.call(t).slice(8, -1);
                                                    if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(t);
                                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return t7(t, e)
                                                }
                                            }(t))) {
                                            n && (t = n);
                                            var r = 0;
                                            return function() {
                                                return r >= t.length ? {
                                                    done: !0
                                                } : {
                                                    done: !1,
                                                    value: t[r++]
                                                }
                                            }
                                        }
                                        throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }(n.split("")); !(r = a()).done;) {
                                    var d = r.value;
                                    if (0 > t.slice(e + 1).search(et)) return;
                                    e = t.search(et), t = t.replace(et, d)
                                }
                                return [t, e]
                            }(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition, t);
                            if (!e) {
                                this.resetFormat();
                                return
                            }
                            return this.populatedNationalNumberTemplate = e[0], this.populatedNationalNumberTemplatePosition = e[1], en(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition + 1)
                        }
                    }, {
                        key: "shouldTryNationalPrefixFormattingRule",
                        value: function(t, e) {
                            var n = e.international,
                                r = e.nationalPrefix;
                            if (t.nationalPrefixFormattingRule()) {
                                var a = t.usesNationalPrefix();
                                if (a && r || !a && !n) return !0
                            }
                        }
                    }], eh(n.prototype, t), e && eh(n, e), Object.defineProperty(n, "prototype", {
                        writable: !1
                    }), n
                }();

            function eb(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n, r, a = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != a) {
                        var d = [],
                            o = !0,
                            i = !1;
                        try {
                            for (a = a.call(t); !(o = (n = a.next()).done) && (d.push(n.value), !e || d.length !== e); o = !0);
                        } catch (u) {
                            i = !0, r = u
                        } finally {
                            try {
                                o || null == a.return || a.return()
                            } finally {
                                if (i) throw r
                            }
                        }
                        return d
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return eC(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return eC(t, e)
                    }
                }(t, e) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function eC(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function eO(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            var eN = RegExp("^[" + c + l + "]+$", "i"),
                eP = "(?:[" + $ + "][" + c + l + "]*|[" + c + l + "]+)",
                eS = RegExp("[^" + c + l + "]+.*$"),
                eI = /[^\d\[\]]/,
                ex = function() {
                    var t, e;

                    function n(t) {
                        var e = t.defaultCountry,
                            r = t.defaultCallingCode,
                            a = t.metadata,
                            d = t.onNationalSignificantNumberChange;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                        }(this, n), this.defaultCountry = e, this.defaultCallingCode = r, this.metadata = a, this.onNationalSignificantNumberChange = d
                    }
                    return t = [{
                        key: "input",
                        value: function(t, e) {
                            var n, r, a, d, o, i = eb((a = (r = eb("+" === (n = function(t) {
                                    var e, n = t.search(eP);
                                    if (!(n < 0)) return "+" === (t = t.slice(n))[0] && (e = !0, t = t.slice(1)), t = t.replace(eS, ""), e && (t = "+" + t), t
                                }(t) || "")[0] ? [n.slice(1), !0] : [n], 2))[0], d = r[1], eN.test(a) || (a = ""), [a, d]), 2),
                                u = i[0],
                                l = i[1],
                                c = Z(u);
                            return !l || e.digits || (e.startInternationalNumber(), c || (o = !0)), c && this.inputDigits(c, e), {
                                digits: c,
                                justLeadingPlus: o
                            }
                        }
                    }, {
                        key: "inputDigits",
                        value: function(t, e) {
                            var n = e.digits,
                                r = n.length < 3 && n.length + t.length >= 3;
                            if (e.appendDigits(t), r && this.extractIddPrefix(e), this.isWaitingForCountryCallingCode(e)) {
                                if (!this.extractCountryCallingCode(e)) return
                            } else e.appendNationalSignificantNumberDigits(t);
                            e.international || this.hasExtractedNationalSignificantNumber || this.extractNationalSignificantNumber(e.getNationalDigits(), function(t) {
                                return e.update(t)
                            })
                        }
                    }, {
                        key: "isWaitingForCountryCallingCode",
                        value: function(t) {
                            var e = t.international,
                                n = t.callingCode;
                            return e && !n
                        }
                    }, {
                        key: "extractCountryCallingCode",
                        value: function(t) {
                            var e = tN("+" + t.getDigitsWithoutInternationalPrefix(), this.defaultCountry, this.defaultCallingCode, this.metadata.metadata),
                                n = e.countryCallingCode,
                                r = e.number;
                            if (n) return t.setCallingCode(n), t.update({
                                nationalSignificantNumber: r
                            }), !0
                        }
                    }, {
                        key: "reset",
                        value: function(t) {
                            if (t) {
                                this.hasSelectedNumberingPlan = !0;
                                var e = t._nationalPrefixForParsing();
                                this.couldPossiblyExtractAnotherNationalSignificantNumber = e && eI.test(e)
                            } else this.hasSelectedNumberingPlan = void 0, this.couldPossiblyExtractAnotherNationalSignificantNumber = void 0
                        }
                    }, {
                        key: "extractNationalSignificantNumber",
                        value: function(t, e) {
                            if (this.hasSelectedNumberingPlan) {
                                var n = tb(t, this.metadata),
                                    r = n.nationalPrefix,
                                    a = n.nationalNumber,
                                    d = n.carrierCode;
                                if (a !== t) return this.onExtractedNationalNumber(r, d, a, t, e), !0
                            }
                        }
                    }, {
                        key: "extractAnotherNationalSignificantNumber",
                        value: function(t, e, n) {
                            if (!this.hasExtractedNationalSignificantNumber) return this.extractNationalSignificantNumber(t, n);
                            if (this.couldPossiblyExtractAnotherNationalSignificantNumber) {
                                var r = tb(t, this.metadata),
                                    a = r.nationalPrefix,
                                    d = r.nationalNumber,
                                    o = r.carrierCode;
                                if (d !== e) return this.onExtractedNationalNumber(a, o, d, t, n), !0
                            }
                        }
                    }, {
                        key: "onExtractedNationalNumber",
                        value: function(t, e, n, r, a) {
                            var d, o, i = r.lastIndexOf(n);
                            if (i >= 0 && i === r.length - n.length) {
                                o = !0;
                                var u = r.slice(0, i);
                                u !== t && (d = u)
                            }
                            a({
                                nationalPrefix: t,
                                carrierCode: e,
                                nationalSignificantNumber: n,
                                nationalSignificantNumberMatchesInput: o,
                                complexPrefixBeforeNationalSignificantNumber: d
                            }), this.hasExtractedNationalSignificantNumber = !0, this.onNationalSignificantNumberChange()
                        }
                    }, {
                        key: "reExtractNationalSignificantNumber",
                        value: function(t) {
                            return !!this.extractAnotherNationalSignificantNumber(t.getNationalDigits(), t.nationalSignificantNumber, function(e) {
                                return t.update(e)
                            }) || (this.extractIddPrefix(t) || this.fixMissingPlus(t) ? (this.extractCallingCodeAndNationalSignificantNumber(t), !0) : void 0)
                        }
                    }, {
                        key: "extractIddPrefix",
                        value: function(t) {
                            var e = t.international,
                                n = t.IDDPrefix,
                                r = t.digits;
                            if (t.nationalSignificantNumber, !e && !n) {
                                var a = tv(r, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata);
                                if (void 0 !== a && a !== r) return t.update({
                                    IDDPrefix: r.slice(0, r.length - a.length)
                                }), this.startInternationalNumber(t, {
                                    country: void 0,
                                    callingCode: void 0
                                }), !0
                            }
                        }
                    }, {
                        key: "fixMissingPlus",
                        value: function(t) {
                            if (!t.international) {
                                var e = tO(t.digits, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata),
                                    n = e.countryCallingCode;
                                if (e.number, n) return t.update({
                                    missingPlus: !0
                                }), this.startInternationalNumber(t, {
                                    country: t.country,
                                    callingCode: n
                                }), !0
                            }
                        }
                    }, {
                        key: "startInternationalNumber",
                        value: function(t, e) {
                            var n = e.country,
                                r = e.callingCode;
                            t.startInternationalNumber(n, r), t.nationalSignificantNumber && (t.resetNationalSignificantNumber(), this.onNationalSignificantNumberChange(), this.hasExtractedNationalSignificantNumber = void 0)
                        }
                    }, {
                        key: "extractCallingCodeAndNationalSignificantNumber",
                        value: function(t) {
                            this.extractCountryCallingCode(t) && this.extractNationalSignificantNumber(t.getNationalDigits(), function(e) {
                                return t.update(e)
                            })
                        }
                    }], eO(n.prototype, t), e && eO(n, e), Object.defineProperty(n, "prototype", {
                        writable: !1
                    }), n
                }();

            function ew(t) {
                return (ew = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function eE(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function eA(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            var ej = function() {
                var t, e;

                function n(t, e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                    }(this, n), this.metadata = new w(e);
                    var r, a = function(t) {
                            if (Array.isArray(t)) return t
                        }(r = this.getCountryAndCallingCode(t)) || function(t, e) {
                            var n, r, a = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                            if (null != a) {
                                var d = [],
                                    o = !0,
                                    i = !1;
                                try {
                                    for (a = a.call(t); !(o = (n = a.next()).done) && (d.push(n.value), !e || d.length !== e); o = !0);
                                } catch (u) {
                                    i = !0, r = u
                                } finally {
                                    try {
                                        o || null == a.return || a.return()
                                    } finally {
                                        if (i) throw r
                                    }
                                }
                                return d
                            }
                        }(r, 2) || function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return eE(t, e);
                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(t);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return eE(t, e)
                            }
                        }(r, 2) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }(),
                        d = a[0],
                        o = a[1];
                    this.defaultCountry = d, this.defaultCallingCode = o, this.reset()
                }
                return t = [{
                    key: "getCountryAndCallingCode",
                    value: function(t) {
                        var e, n;
                        return t && ("object" === ew(t) ? (e = t.defaultCountry, n = t.defaultCallingCode) : e = t), e && !this.metadata.hasCountry(e) && (e = void 0), [e, n]
                    }
                }, {
                    key: "input",
                    value: function(t) {
                        var e = this.parser.input(t, this.state),
                            n = e.digits;
                        if (e.justLeadingPlus) this.formattedOutput = "+";
                        else if (n) {
                            if (this.determineTheCountryIfNeeded(), this.state.nationalSignificantNumber && this.formatter.narrowDownMatchingFormats(this.state), this.metadata.hasSelectedNumberingPlan() && (r = this.formatter.format(n, this.state)), void 0 === r && this.parser.reExtractNationalSignificantNumber(this.state)) {
                                this.determineTheCountryIfNeeded();
                                var r, a = this.state.getNationalDigits();
                                a && (r = this.formatter.format(a, this.state))
                            }
                            this.formattedOutput = r ? this.getFullNumber(r) : this.getNonFormattedNumber()
                        }
                        return this.formattedOutput
                    }
                }, {
                    key: "reset",
                    value: function() {
                        var t = this;
                        return this.state = new t5({
                            onCountryChange: function(e) {
                                t.country = e
                            },
                            onCallingCodeChange: function(e, n) {
                                t.metadata.selectNumberingPlan(n, e), t.formatter.reset(t.metadata.numberingPlan, t.state), t.parser.reset(t.metadata.numberingPlan)
                            }
                        }), this.formatter = new ev({
                            state: this.state,
                            metadata: this.metadata
                        }), this.parser = new ex({
                            defaultCountry: this.defaultCountry,
                            defaultCallingCode: this.defaultCallingCode,
                            metadata: this.metadata,
                            state: this.state,
                            onNationalSignificantNumberChange: function() {
                                t.determineTheCountryIfNeeded(), t.formatter.reset(t.metadata.numberingPlan, t.state)
                            }
                        }), this.state.reset({
                            country: this.defaultCountry,
                            callingCode: this.defaultCallingCode
                        }), this.formattedOutput = "", this
                    }
                }, {
                    key: "isInternational",
                    value: function() {
                        return this.state.international
                    }
                }, {
                    key: "getCallingCode",
                    value: function() {
                        if (this.isInternational()) return this.state.callingCode
                    }
                }, {
                    key: "getCountryCallingCode",
                    value: function() {
                        return this.getCallingCode()
                    }
                }, {
                    key: "getCountry",
                    value: function() {
                        if (this.state.digits) return this._getCountry()
                    }
                }, {
                    key: "_getCountry",
                    value: function() {
                        return this.state.country
                    }
                }, {
                    key: "determineTheCountryIfNeeded",
                    value: function() {
                        (!this.state.country || this.isCountryCallingCodeAmbiguous()) && this.determineTheCountry()
                    }
                }, {
                    key: "getFullNumber",
                    value: function(t) {
                        var e = this;
                        if (this.isInternational()) {
                            var n, r = this.state.callingCode;
                            return n = r ? t ? "".concat(r, " ").concat(t) : r : "".concat(this.state.getDigitsWithoutInternationalPrefix()), e.formatter.getInternationalPrefixBeforeCountryCallingCode(e.state, {
                                spacing: !!n
                            }) + n
                        }
                        return t
                    }
                }, {
                    key: "getNonFormattedNationalNumberWithPrefix",
                    value: function() {
                        var t = this.state,
                            e = t.nationalSignificantNumber,
                            n = t.complexPrefixBeforeNationalSignificantNumber,
                            r = t.nationalPrefix,
                            a = e,
                            d = n || r;
                        return d && (a = d + a), a
                    }
                }, {
                    key: "getNonFormattedNumber",
                    value: function() {
                        var t = this.state.nationalSignificantNumberMatchesInput;
                        return this.getFullNumber(t ? this.getNonFormattedNationalNumberWithPrefix() : this.state.getNationalDigits())
                    }
                }, {
                    key: "getNonFormattedTemplate",
                    value: function() {
                        var t = this.getNonFormattedNumber();
                        if (t) return t.replace(/[\+\d]/g, "x")
                    }
                }, {
                    key: "isCountryCallingCodeAmbiguous",
                    value: function() {
                        var t = this.state.callingCode,
                            e = this.metadata.getCountryCodesForCallingCode(t);
                        return e && e.length > 1
                    }
                }, {
                    key: "determineTheCountry",
                    value: function() {
                        this.state.setCountry(tS(this.isInternational() ? this.state.callingCode : this.defaultCallingCode, this.state.nationalSignificantNumber, this.metadata))
                    }
                }, {
                    key: "getNumberValue",
                    value: function() {
                        var t = this.state,
                            e = t.digits,
                            n = t.callingCode,
                            r = t.country,
                            a = t.nationalSignificantNumber;
                        if (e) {
                            if (this.isInternational()) return n ? "+" + n + a : "+" + e;
                            if (r || n) return "+" + (r ? this.metadata.countryCallingCode() : n) + a
                        }
                    }
                }, {
                    key: "getNumber",
                    value: function() {
                        var t = this.state,
                            e = t.nationalSignificantNumber,
                            n = t.carrierCode,
                            r = t.callingCode,
                            a = this._getCountry();
                        if (e && (a || r)) {
                            var d = new tg(a || r, e, this.metadata.metadata);
                            return n && (d.carrierCode = n), d
                        }
                    }
                }, {
                    key: "isPossible",
                    value: function() {
                        var t = this.getNumber();
                        return !!t && t.isPossible()
                    }
                }, {
                    key: "isValid",
                    value: function() {
                        var t = this.getNumber();
                        return !!t && t.isValid()
                    }
                }, {
                    key: "getNationalNumber",
                    value: function() {
                        return this.state.nationalSignificantNumber
                    }
                }, {
                    key: "getChars",
                    value: function() {
                        return (this.state.international ? "+" : "") + this.state.digits
                    }
                }, {
                    key: "getTemplate",
                    value: function() {
                        return this.formatter.getTemplate(this.state) || this.getNonFormattedTemplate() || ""
                    }
                }], eA(n.prototype, t), e && eA(n, e), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n
            }();

            function eT(t) {
                var e = t.country,
                    n = t.international,
                    r = t.withCountryCallingCode,
                    a = t.metadata;
                return e && n && !r ? "+".concat(F(e, a)) : ""
            }

            function ek(t, e) {
                return e && " " === (t = t.slice(e.length))[0] && (t = t.slice(1)), t
            }
            var eM = ["country", "international", "withCountryCallingCode", "metadata"];

            function eR() {
                return (eR = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            var eF = function(t) {
                    function e(t, e) {
                        var n = t.country,
                            r = t.international,
                            a = t.withCountryCallingCode,
                            d = t.metadata,
                            o = function(t, e) {
                                if (null == t) return {};
                                var n, r, a = function(t, e) {
                                    if (null == t) return {};
                                    var n, r, a = {},
                                        d = Object.keys(t);
                                    for (r = 0; r < d.length; r++) n = d[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                                    return a
                                }(t, e);
                                if (Object.getOwnPropertySymbols) {
                                    var d = Object.getOwnPropertySymbols(t);
                                    for (r = 0; r < d.length; r++) n = d[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                                }
                                return a
                            }(t, eM),
                            i = (0, tK.useCallback)(function(t) {
                                var e = new ej(n, d),
                                    o = eT({
                                        country: n,
                                        international: r,
                                        withCountryCallingCode: a,
                                        metadata: d
                                    }),
                                    i = e.input(o + t),
                                    u = e.getTemplate();
                                return o && (i = ek(i, o), u && (u = ek(u, o))), {
                                    text: i,
                                    template: u
                                }
                            }, [n, d]);
                        return tK.createElement(t8, eR({}, o, {
                            ref: e,
                            parse: J,
                            format: i
                        }))
                    }
                    return (e = tK.forwardRef(e)).propTypes = {
                        value: tH.string.isRequired,
                        onChange: tH.func.isRequired,
                        country: tH.string,
                        international: tH.bool,
                        withCountryCallingCode: tH.bool,
                        metadata: tH.object.isRequired
                    }, e.defaultProps = {
                        metadata: void 0
                    }, e
                }(),
                eD = ["value", "onChange", "country", "international", "withCountryCallingCode", "metadata", "inputComponent"];

            function eL() {
                return (eL = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            var eB = function(t) {
                function e(t, e) {
                    var n = t.value,
                        r = t.onChange,
                        a = t.country,
                        d = t.international,
                        o = t.withCountryCallingCode,
                        i = t.metadata,
                        u = t.inputComponent,
                        l = function(t, e) {
                            if (null == t) return {};
                            var n, r, a = function(t, e) {
                                if (null == t) return {};
                                var n, r, a = {},
                                    d = Object.keys(t);
                                for (r = 0; r < d.length; r++) n = d[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                                return a
                            }(t, e);
                            if (Object.getOwnPropertySymbols) {
                                var d = Object.getOwnPropertySymbols(t);
                                for (r = 0; r < d.length; r++) n = d[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                            }
                            return a
                        }(t, eD),
                        c = eT({
                            country: a,
                            international: d,
                            withCountryCallingCode: o,
                            metadata: i
                        }),
                        $ = (0, tK.useCallback)(function(t) {
                            var e = Y(t.target.value);
                            e === n && 0 === eG(c, e, a, i).indexOf(t.target.value) && (e = e.slice(0, -1)), r(e)
                        }, [c, n, r, a, i]);
                    return tK.createElement(u, eL({}, l, {
                        ref: e,
                        value: eG(c, n, a, i),
                        onChange: $
                    }))
                }
                return (e = tK.forwardRef(e)).propTypes = {
                    value: tH.string.isRequired,
                    onChange: tH.func.isRequired,
                    country: tH.string,
                    international: tH.bool,
                    withCountryCallingCode: tH.bool,
                    metadata: tH.object.isRequired,
                    inputComponent: tH.elementType.isRequired
                }, e.defaultProps = {
                    metadata: void 0,
                    inputComponent: "input"
                }, e
            }();

            function eG(t, e, n, r) {
                var a, d;
                return ek((a = n, (d = r) || (d = a, a = void 0), new ej(a, d).input(t + e)), t)
            }

            function e_(t) {
                return String.fromCodePoint(127397 + t.toUpperCase().charCodeAt(0))
            }
            var eU = ["value", "onChange", "options"],
                eV = ["value", "options", "className", "iconComponent", "getIconAspectRatio", "arrowComponent", "unicodeFlags"];

            function eK(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function eW() {
                return (eW = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }

            function eH(t, e) {
                if (null == t) return {};
                var n, r, a = function(t, e) {
                    if (null == t) return {};
                    var n, r, a = {},
                        d = Object.keys(t);
                    for (r = 0; r < d.length; r++) n = d[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                    return a
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var d = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < d.length; r++) n = d[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                }
                return a
            }

            function eZ(t) {
                var e = t.value,
                    n = t.onChange,
                    r = t.options,
                    a = eH(t, eU),
                    d = (0, tK.useCallback)(function(t) {
                        var e = t.target.value;
                        n("ZZ" === e ? void 0 : e)
                    }, [n]);
                return (0, tK.useMemo)(function() {
                    return eJ(r, e)
                }, [r, e]), tK.createElement("select", eW({}, a, {
                    value: e || "ZZ",
                    onChange: d
                }), r.map(function(t) {
                    var e = t.value,
                        n = t.label,
                        r = t.divider;
                    return tK.createElement("option", {
                        key: r ? "|" : e || "ZZ",
                        value: r ? "|" : e || "ZZ",
                        disabled: !!r,
                        style: r ? eq : void 0
                    }, n)
                }))
            }
            eZ.propTypes = {
                value: tH.string,
                onChange: tH.func.isRequired,
                options: tH.arrayOf(tH.shape({
                    value: tH.string,
                    label: tH.string,
                    divider: tH.bool
                })).isRequired
            };
            var eq = {
                fontSize: "1px",
                backgroundColor: "currentColor",
                color: "inherit"
            };

            function eY(t) {
                var e = t.value,
                    n = t.options,
                    r = t.className,
                    a = t.iconComponent,
                    d = (t.getIconAspectRatio, t.arrowComponent),
                    o = t.unicodeFlags,
                    i = eH(t, eV),
                    u = (0, tK.useMemo)(function() {
                        return eJ(n, e)
                    }, [n, e]);
                return tK.createElement("div", {
                    className: "PhoneInputCountry"
                }, tK.createElement(eZ, eW({}, i, {
                    value: e,
                    options: n,
                    className: tY("PhoneInputCountrySelect", r)
                })), o && e && tK.createElement("div", {
                    className: "PhoneInputCountryIconUnicode"
                }, e_(e[0]) + e_(e[1])), !(o && e) && tK.createElement(a, {
                    "aria-hidden": !0,
                    country: e,
                    label: u && u.label,
                    aspectRatio: o ? 1 : void 0
                }), tK.createElement(d, null))
            }

            function eJ(t, e) {
                for (var n, r = function(t, e) {
                        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (n) return (n = n.call(t)).next.bind(n);
                        if (Array.isArray(t) || (n = function(t, e) {
                                if (t) {
                                    if ("string" == typeof t) return eK(t, e);
                                    var n = Object.prototype.toString.call(t).slice(8, -1);
                                    if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(t);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return eK(t, e)
                                }
                            }(t))) {
                            n && (t = n);
                            var r = 0;
                            return function() {
                                return r >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[r++]
                                }
                            }
                        }
                        throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }(t); !(n = r()).done;) {
                    var a = n.value;
                    if (!a.divider && a.value === e) return a
                }
            }
            eY.propTypes = {
                iconComponent: tH.elementType,
                arrowComponent: tH.elementType.isRequired,
                unicodeFlags: tH.bool
            }, eY.defaultProps = {
                arrowComponent: function() {
                    return tK.createElement("div", {
                        className: "PhoneInputCountrySelectArrow"
                    })
                }
            };
            var eX = ["country", "countryName", "flags", "flagUrl"];

            function ez() {
                return (ez = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }

            function eQ(t) {
                var e = t.country,
                    n = t.countryName,
                    r = t.flags,
                    a = t.flagUrl,
                    d = function(t, e) {
                        if (null == t) return {};
                        var n, r, a = function(t, e) {
                            if (null == t) return {};
                            var n, r, a = {},
                                d = Object.keys(t);
                            for (r = 0; r < d.length; r++) n = d[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                            return a
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var d = Object.getOwnPropertySymbols(t);
                            for (r = 0; r < d.length; r++) n = d[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                        }
                        return a
                    }(t, eX);
                return r && r[e] ? r[e]({
                    title: n
                }) : tK.createElement("img", ez({}, d, {
                    alt: n,
                    role: n ? void 0 : "presentation",
                    src: a.replace("{XX}", e).replace("{xx}", e.toLowerCase())
                }))
            }
            eQ.propTypes = {
                country: tH.string.isRequired,
                countryName: tH.string.isRequired,
                flags: tH.objectOf(tH.elementType),
                flagUrl: tH.string.isRequired
            };
            var e0 = ["aspectRatio"],
                e1 = ["title"],
                e2 = ["title"];

            function e3() {
                return (e3 = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }

            function e4(t, e) {
                if (null == t) return {};
                var n, r, a = function(t, e) {
                    if (null == t) return {};
                    var n, r, a = {},
                        d = Object.keys(t);
                    for (r = 0; r < d.length; r++) n = d[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                    return a
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var d = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < d.length; r++) n = d[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                }
                return a
            }

            function e9(t) {
                var e = t.aspectRatio,
                    n = e4(t, e0);
                return 1 === e ? tK.createElement(e6, n) : tK.createElement(e8, n)
            }

            function e8(t) {
                var e = t.title,
                    n = e4(t, e1);
                return tK.createElement("svg", e3({}, n, {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 75 50"
                }), tK.createElement("title", null, e), tK.createElement("g", {
                    className: "PhoneInputInternationalIconGlobe",
                    stroke: "currentColor",
                    fill: "none",
                    strokeWidth: "2",
                    strokeMiterlimit: "10"
                }, tK.createElement("path", {
                    strokeLinecap: "round",
                    d: "M47.2,36.1C48.1,36,49,36,50,36c7.4,0,14,1.7,18.5,4.3"
                }), tK.createElement("path", {
                    d: "M68.6,9.6C64.2,12.3,57.5,14,50,14c-7.4,0-14-1.7-18.5-4.3"
                }), tK.createElement("line", {
                    x1: "26",
                    y1: "25",
                    x2: "74",
                    y2: "25"
                }), tK.createElement("line", {
                    x1: "50",
                    y1: "1",
                    x2: "50",
                    y2: "49"
                }), tK.createElement("path", {
                    strokeLinecap: "round",
                    d: "M46.3,48.7c1.2,0.2,2.5,0.3,3.7,0.3c13.3,0,24-10.7,24-24S63.3,1,50,1S26,11.7,26,25c0,2,0.3,3.9,0.7,5.8"
                }), tK.createElement("path", {
                    strokeLinecap: "round",
                    d: "M46.8,48.2c1,0.6,2.1,0.8,3.2,0.8c6.6,0,12-10.7,12-24S56.6,1,50,1S38,11.7,38,25c0,1.4,0.1,2.7,0.2,4c0,0.1,0,0.2,0,0.2"
                })), tK.createElement("path", {
                    className: "PhoneInputInternationalIconPhone",
                    stroke: "none",
                    fill: "currentColor",
                    d: "M12.4,17.9c2.9-2.9,5.4-4.8,0.3-11.2S4.1,5.2,1.3,8.1C-2,11.4,1.1,23.5,13.1,35.6s24.3,15.2,27.5,11.9c2.8-2.8,7.8-6.3,1.4-11.5s-8.3-2.6-11.2,0.3c-2,2-7.2-2.2-11.7-6.7S10.4,19.9,12.4,17.9z"
                }))
            }

            function e6(t) {
                var e = t.title,
                    n = e4(t, e2);
                return tK.createElement("svg", e3({}, n, {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 50 50"
                }), tK.createElement("title", null, e), tK.createElement("g", {
                    className: "PhoneInputInternationalIconGlobe",
                    stroke: "currentColor",
                    fill: "none",
                    strokeWidth: "2",
                    strokeLinecap: "round"
                }, tK.createElement("path", {
                    d: "M8.45,13A21.44,21.44,0,1,1,37.08,41.56"
                }), tK.createElement("path", {
                    d: "M19.36,35.47a36.9,36.9,0,0,1-2.28-13.24C17.08,10.39,21.88.85,27.8.85s10.72,9.54,10.72,21.38c0,6.48-1.44,12.28-3.71,16.21"
                }), tK.createElement("path", {
                    d: "M17.41,33.4A39,39,0,0,1,27.8,32.06c6.62,0,12.55,1.5,16.48,3.86"
                }), tK.createElement("path", {
                    d: "M44.29,8.53c-3.93,2.37-9.86,3.88-16.49,3.88S15.25,10.9,11.31,8.54"
                }), tK.createElement("line", {
                    x1: "27.8",
                    y1: "0.85",
                    x2: "27.8",
                    y2: "34.61"
                }), tK.createElement("line", {
                    x1: "15.2",
                    y1: "22.23",
                    x2: "49.15",
                    y2: "22.23"
                })), tK.createElement("path", {
                    className: "PhoneInputInternationalIconPhone",
                    stroke: "transparent",
                    fill: "currentColor",
                    d: "M9.42,26.64c2.22-2.22,4.15-3.59.22-8.49S3.08,17,.93,19.17c-2.49,2.48-.13,11.74,9,20.89s18.41,11.5,20.89,9c2.15-2.15,5.91-4.77,1-8.71s-6.27-2-8.49.22c-1.55,1.55-5.48-1.69-8.86-5.08S7.87,28.19,9.42,26.64Z"
                }))
            }

            function e5(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function e7(t, e) {
                return !!D(t, e) || (console.error("Country not found: ".concat(t)), !1)
            }

            function nt(t, e) {
                return t && 0 === (t = t.filter(function(t) {
                    return e7(t, e)
                })).length && (t = void 0), t
            }

            function ne(t) {
                return new w(t).getCountries()
            }
            e9.propTypes = {
                title: tH.string.isRequired,
                aspectRatio: tH.number
            }, e8.propTypes = {
                title: tH.string.isRequired
            }, e6.propTypes = {
                title: tH.string.isRequired
            };
            var nn = ["country", "label", "aspectRatio"];

            function nr() {
                return (nr = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }

            function na(t) {
                var e = t.flags,
                    n = t.flagUrl,
                    r = t.flagComponent,
                    a = t.internationalIcon;

                function d(t) {
                    var d = t.country,
                        o = t.label,
                        i = t.aspectRatio,
                        u = function(t, e) {
                            if (null == t) return {};
                            var n, r, a = function(t, e) {
                                if (null == t) return {};
                                var n, r, a = {},
                                    d = Object.keys(t);
                                for (r = 0; r < d.length; r++) n = d[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                                return a
                            }(t, e);
                            if (Object.getOwnPropertySymbols) {
                                var d = Object.getOwnPropertySymbols(t);
                                for (r = 0; r < d.length; r++) n = d[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                            }
                            return a
                        }(t, nn),
                        l = a === e9 ? i : void 0;
                    return tK.createElement("div", nr({}, u, {
                        className: tY("PhoneInputCountryIcon", {
                            "PhoneInputCountryIcon--square": 1 === l,
                            "PhoneInputCountryIcon--border": d
                        })
                    }), d ? tK.createElement(r, {
                        country: d,
                        countryName: o,
                        flags: e,
                        flagUrl: n,
                        className: "PhoneInputCountryIconImg"
                    }) : tK.createElement(a, {
                        title: o,
                        aspectRatio: l,
                        className: "PhoneInputCountryIconImg"
                    }))
                }
                return d.propTypes = {
                    country: tH.string,
                    label: tH.string.isRequired,
                    aspectRatio: tH.number
                }, d
            }

            function nd(t, e) {
                return "+" + F(t, e)
            }

            function no(t, e, n) {
                if (t) {
                    if ("+" === t[0]) {
                        if ("+" === t) return;
                        var r = new ej(e, n);
                        return r.input(t), r.getNumberValue()
                    }
                    if (e) {
                        var a = nc(t, e, n);
                        return "+".concat(F(e, n)).concat(a || "")
                    }
                }
            }

            function ni(t, e) {
                var n, r = e.country,
                    a = e.countries,
                    d = e.required,
                    o = e.metadata;
                if ("+" === t) return r;
                var i = ((n = new ej(null, o)).input(t), n.getCountry());
                return i && (!a || a.indexOf(i) >= 0) ? i : !r || d || n$(t, r, o) ? r : void 0
            }

            function nu(t, e, n) {
                if (0 !== t.indexOf(nd(e, n))) return t.replace(/\D/g, "");
                var r = new ej(e, n);
                r.input(t);
                var a = r.getNumber();
                return a ? a.formatNational().replace(/\D/g, "") : ""
            }

            function nl(t, e, n) {
                return String.prototype.localeCompare ? t.localeCompare(e, n) : t < e ? -1 : t > e ? 1 : 0
            }

            function nc(t, e, n) {
                var r = new ej(e, n);
                r.input(t);
                var a = r.getNumber();
                return a && a.nationalNumber
            }

            function n$(t, e, n) {
                for (var r = nd(e, n), a = 0; a < t.length && a < r.length;) {
                    if (t[a] !== r[a]) return !1;
                    a++
                }
                return !0
            }

            function ns(t) {
                var e = t.value,
                    n = t.phoneNumber,
                    r = t.defaultCountry,
                    a = t.international,
                    d = t.useNationalFormat,
                    o = t.metadata;
                return (!1 === a || d) && n && n.country ? n.formatNational().replace(/\D/g, "") : !e && a && r ? nd(r, o) : e
            }

            function nf(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function np(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? nf(Object(n), !0).forEach(function(e) {
                        var r, a;
                        r = t, a = n[e], e in r ? Object.defineProperty(r, e, {
                            value: a,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[e] = a
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : nf(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    })
                }
                return t
            }

            function nh(t, e) {
                return null === t && (t = void 0), null === e && (e = void 0), t === e
            }

            function ny(t) {
                return (ny = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            na({
                flagUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg",
                flagComponent: eQ,
                internationalIcon: e9
            });
            var ng = ["name", "disabled", "readOnly", "autoComplete", "style", "className", "inputRef", "inputComponent", "numberInputProps", "smartCaret", "countrySelectComponent", "countrySelectProps", "containerComponent", "defaultCountry", "countries", "countryOptionsOrder", "labels", "flags", "flagComponent", "flagUrl", "addInternationalOption", "internationalIcon", "displayInitialValueAsLocalNumber", "initialValueFormat", "onCountryChange", "limitMaxLength", "countryCallingCodeEditable", "focusInputOnCountrySelection", "reset", "metadata", "international", "locales"];

            function nm(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function nv() {
                return (nv = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }

            function nb(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function nC(t, e) {
                return (nC = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function nO(t) {
                if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function nN(t) {
                return (nN = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function nP(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var nS = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e && nC(t, e)
                    }(d, t);
                    var e, n, r, a = (e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, n = nN(d);
                        if (e) {
                            var r = nN(this).constructor;
                            t = Reflect.construct(n, arguments, r)
                        } else t = n.apply(this, arguments);
                        return function(t, e) {
                            if (e && ("object" === ny(e) || "function" == typeof e)) return e;
                            if (void 0 !== e) throw TypeError("Derived constructors may only return object or undefined");
                            return nO(t)
                        }(this, t)
                    });

                    function d(t) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                        }(this, d), nP(nO(s = a.call(this, t)), "setInputRef", function(t) {
                            s.inputRef.current = t;
                            var e = s.props.inputRef;
                            e && ("function" == typeof e ? e(t) : e.current = t)
                        }), nP(nO(s), "isCountrySupportedWithError", function(t) {
                            return e7(t, s.props.metadata)
                        }), nP(nO(s), "onCountryChange", function(t) {
                            var e = s.props,
                                n = e.international,
                                r = e.metadata,
                                a = e.onChange,
                                d = e.focusInputOnCountrySelection,
                                o = s.state,
                                i = function(t, e) {
                                    var n = e.prevCountry,
                                        r = e.newCountry,
                                        a = e.metadata,
                                        d = e.useNationalFormat;
                                    if (n === r) return t;
                                    if (!t) return d ? "" : nd(r, a);
                                    if (r) {
                                        if ("+" === t[0]) {
                                            if (d) return 0 === t.indexOf("+" + F(r, a)) ? function(t, e, n) {
                                                if (e) {
                                                    var r = "+" + F(e, n);
                                                    if (t.length < r.length) {
                                                        if (0 === r.indexOf(t)) return ""
                                                    } else if (0 === t.indexOf(r)) return t.slice(r.length)
                                                }
                                                for (var a = 0, d = Object.keys(n.country_calling_codes); a < d.length; a++) {
                                                    var o = d[a];
                                                    if (1 === t.indexOf(o)) return t.slice(1 + o.length)
                                                }
                                                return ""
                                            }(t, r, a) : "";
                                            if (n) {
                                                var o = nd(r, a);
                                                if (0 !== t.indexOf(o)) return o
                                            } else {
                                                var i = nd(r, a);
                                                return 0 === t.indexOf(i) ? t : i
                                            }
                                        }
                                    } else if ("+" !== t[0]) return no(t, n, a) || "";
                                    return t
                                }(o.phoneDigits, {
                                    prevCountry: o.country,
                                    newCountry: t,
                                    metadata: r,
                                    useNationalFormat: !n
                                }),
                                u = no(i, t, r);
                            d && s.inputRef.current.focus(), s.setState({
                                country: t,
                                hasUserSelectedACountry: !0,
                                phoneDigits: i,
                                value: u
                            }, function() {
                                a(u)
                            })
                        }), nP(nO(s), "onChange", function(t) {
                            var e = s.props,
                                n = e.defaultCountry,
                                r = e.onChange,
                                a = e.addInternationalOption,
                                d = e.international,
                                o = e.limitMaxLength,
                                i = e.countryCallingCodeEditable,
                                u = e.metadata,
                                l = s.state,
                                c = l.countries,
                                $ = function(t, e) {
                                    var n, r = e.prevPhoneDigits,
                                        a = e.country,
                                        d = e.defaultCountry,
                                        o = e.countryRequired,
                                        i = e.getAnyCountry,
                                        u = e.countries,
                                        l = e.international,
                                        c = e.limitMaxLength,
                                        $ = e.countryCallingCodeEditable,
                                        s = e.metadata;
                                    if (l && !1 === $) {
                                        var f, p = nd(a, s);
                                        if (0 !== t.indexOf(p)) return t && "+" !== t[0] ? f = no(t = p + t, a, s) : t = p, {
                                            phoneDigits: t,
                                            value: f,
                                            country: a
                                        }
                                    }
                                    return !1 === l && a && t && "+" === t[0] && (t = nu(t, a, s)), t && a && c && (t = function(t, e, n) {
                                        var r = nc(t, e, n);
                                        if (r) {
                                            var a, d = r.length - (a = n, (a = new w(a)).selectNumberingPlan(e), a.numberingPlan.possibleLengths()[a.numberingPlan.possibleLengths().length - 1]);
                                            if (d > 0) return t.slice(0, t.length - d)
                                        }
                                        return t
                                    }(t, a, s)), t && "+" !== t[0] && (!a || l) && (t = "+" + t), !t && r && "+" === r[0] && (a = l ? void 0 : d), "+" === t && r && "+" === r[0] && r.length > 1 && (a = void 0), t && (n = "+" === t[0] ? "+" === t ? void 0 : a && 0 === nd(a, s).indexOf(t) ? void 0 : no(t, a, s) : no(t, a, s)), n && (a = ni(n, {
                                        country: a,
                                        countries: u,
                                        metadata: s
                                    }), !1 === l && a && t && "+" === t[0] && (n = no(t = nu(t, a, s), a, s))), !a && o && (a = d || i()), {
                                        phoneDigits: t,
                                        country: a,
                                        value: n
                                    }
                                }(t, {
                                    prevPhoneDigits: l.phoneDigits,
                                    country: l.country,
                                    countryRequired: !a,
                                    defaultCountry: n,
                                    getAnyCountry: function() {
                                        return s.getFirstSupportedCountry({
                                            countries: c
                                        })
                                    },
                                    countries: c,
                                    international: d,
                                    limitMaxLength: o,
                                    countryCallingCodeEditable: i,
                                    metadata: u
                                }),
                                f = $.phoneDigits,
                                p = $.country,
                                h = $.value,
                                y = {
                                    phoneDigits: f,
                                    value: h,
                                    country: p
                                };
                            !1 !== i || h || f !== s.state.phoneDigits || (y.forceRerender = {}), s.setState(y, function() {
                                return r(h)
                            })
                        }), nP(nO(s), "_onFocus", function() {
                            return s.setState({
                                isFocused: !0
                            })
                        }), nP(nO(s), "_onBlur", function() {
                            return s.setState({
                                isFocused: !1
                            })
                        }), nP(nO(s), "onFocus", function(t) {
                            s._onFocus();
                            var e = s.props.onFocus;
                            e && e(t)
                        }), nP(nO(s), "onBlur", function(t) {
                            var e = s.props.onBlur;
                            s._onBlur(), e && e(t)
                        }), nP(nO(s), "onCountryFocus", function(t) {
                            s._onFocus();
                            var e = s.props.countrySelectProps;
                            if (e) {
                                var n = e.onFocus;
                                n && n(t)
                            }
                        }), nP(nO(s), "onCountryBlur", function(t) {
                            s._onBlur();
                            var e = s.props.countrySelectProps;
                            if (e) {
                                var n = e.onBlur;
                                n && n(t)
                            }
                        }), s.inputRef = tK.createRef();
                        var e, n, r, o, i, u, l, c, $, s, f = s.props,
                            p = f.value,
                            h = (f.labels, f.international),
                            y = f.addInternationalOption,
                            g = f.displayInitialValueAsLocalNumber,
                            m = f.initialValueFormat,
                            v = f.metadata,
                            b = s.props,
                            C = b.defaultCountry,
                            O = b.countries;
                        C && !s.isCountrySupportedWithError(C) && (C = void 0), O = nt(O, v);
                        var N = tL(p || "", v);
                        s.CountryIcon = na(s.props);
                        var P = (r = (e = {
                            value: p,
                            phoneNumber: N,
                            defaultCountry: C,
                            required: !y,
                            countries: O || ne(v),
                            getAnyCountry: function() {
                                return s.getFirstSupportedCountry({
                                    countries: O
                                })
                            },
                            metadata: v
                        }).value, o = e.phoneNumber, i = e.defaultCountry, u = e.getAnyCountry, l = e.countries, c = e.required, $ = e.metadata, o && o.country ? n = o.country : i && (!r || n$(r, i, $)) && (n = i), l && 0 > l.indexOf(n) && (n = void 0), !n && c && l && l.length > 0 && (n = u()), n);
                        return s.state = {
                            props: s.props,
                            country: P,
                            countries: O,
                            phoneDigits: ns({
                                value: p,
                                phoneNumber: N,
                                defaultCountry: C,
                                international: h,
                                useNationalFormat: g || "national" === m,
                                metadata: v
                            }),
                            value: p
                        }, s
                    }
                    return n = [{
                        key: "componentDidMount",
                        value: function() {
                            var t = this.props.onCountryChange,
                                e = this.props.defaultCountry,
                                n = this.state.country;
                            t && (e && !this.isCountrySupportedWithError(e) && (e = void 0), n !== e && t(n))
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(t, e) {
                            var n = this.props.onCountryChange,
                                r = this.state.country;
                            n && r !== e.country && n(r)
                        }
                    }, {
                        key: "getCountrySelectOptions",
                        value: function(t) {
                            var e = t.countries,
                                n = this.props,
                                r = n.international,
                                a = n.countryCallingCodeEditable,
                                d = n.countryOptionsOrder,
                                o = n.addInternationalOption,
                                i = n.labels,
                                u = n.locales,
                                l = n.metadata;
                            return this.useMemoCountrySelectOptions(function() {
                                var t, n, c, $, s, f, p;
                                return function(t, e) {
                                    if (!e) return t;
                                    for (var n, r = [], a = [], d = r, o = function(t, e) {
                                            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                            if (n) return (n = n.call(t)).next.bind(n);
                                            if (Array.isArray(t) || (n = function(t, e) {
                                                    if (t) {
                                                        if ("string" == typeof t) return e5(t, e);
                                                        var n = Object.prototype.toString.call(t).slice(8, -1);
                                                        if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(t);
                                                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return e5(t, e)
                                                    }
                                                }(t))) {
                                                n && (t = n);
                                                var r = 0;
                                                return function() {
                                                    return r >= t.length ? {
                                                        done: !0
                                                    } : {
                                                        done: !1,
                                                        value: t[r++]
                                                    }
                                                }
                                            }
                                            throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                        }(e); !(n = o()).done;) {
                                        var i = n.value;
                                        "|" === i ? d.push({
                                            divider: !0
                                        }) : "..." === i || "…" === i ? d = a : function() {
                                            var e = void 0;
                                            e = "\uD83C\uDF10" === i ? void 0 : i;
                                            var n = t.indexOf(t.filter(function(t) {
                                                    return t.value === e
                                                })[0]),
                                                r = t[n];
                                            t.splice(n, 1), d.push(r)
                                        }()
                                    }
                                    return r.concat(t).concat(a)
                                }((n = (t = {
                                    countries: e || ne(l),
                                    countryNames: i,
                                    addInternationalOption: (!r || !1 !== a) && o,
                                    compareStringsLocales: u
                                }).countries, c = t.countryNames, $ = t.addInternationalOption, s = t.compareStringsLocales, (f = t.compareStrings) || (f = nl), (p = n.map(function(t) {
                                    return {
                                        value: t,
                                        label: c[t] || t
                                    }
                                })).sort(function(t, e) {
                                    return f(t.label, e.label, s)
                                }), $ && p.unshift({
                                    label: c.ZZ
                                }), p), function(t, e) {
                                    if (t && (t = t.filter(function(t) {
                                            switch (t) {
                                                case "\uD83C\uDF10":
                                                case "|":
                                                case "...":
                                                case "…":
                                                    return !0;
                                                default:
                                                    return e7(t, e)
                                            }
                                        })).length > 0) return t
                                }(d, l))
                            }, [e, d, o, i, l])
                        }
                    }, {
                        key: "useMemoCountrySelectOptions",
                        value: function(t, e) {
                            return this.countrySelectOptionsMemoDependencies && function(t, e) {
                                if (t.length !== e.length) return !1;
                                for (var n = 0; n < t.length;) {
                                    if (t[n] !== e[n]) return !1;
                                    n++
                                }
                                return !0
                            }(e, this.countrySelectOptionsMemoDependencies) || (this.countrySelectOptionsMemo = t(), this.countrySelectOptionsMemoDependencies = e), this.countrySelectOptionsMemo
                        }
                    }, {
                        key: "getFirstSupportedCountry",
                        value: function(t) {
                            var e = t.countries;
                            return this.getCountrySelectOptions({
                                countries: e
                            })[0].value
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this.props,
                                e = t.name,
                                n = t.disabled,
                                r = t.readOnly,
                                a = t.autoComplete,
                                d = t.style,
                                o = t.className,
                                i = (t.inputRef, t.inputComponent),
                                u = t.numberInputProps,
                                l = t.smartCaret,
                                c = t.countrySelectComponent,
                                $ = t.countrySelectProps,
                                s = t.containerComponent,
                                f = (t.defaultCountry, t.countries, t.countryOptionsOrder, t.labels),
                                p = (t.flags, t.flagComponent, t.flagUrl, t.addInternationalOption, t.internationalIcon, t.displayInitialValueAsLocalNumber, t.initialValueFormat, t.onCountryChange, t.limitMaxLength, t.countryCallingCodeEditable, t.focusInputOnCountrySelection, t.reset, t.metadata),
                                h = (t.international, t.locales, function(t, e) {
                                    if (null == t) return {};
                                    var n, r, a = function(t, e) {
                                        if (null == t) return {};
                                        var n, r, a = {},
                                            d = Object.keys(t);
                                        for (r = 0; r < d.length; r++) n = d[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                                        return a
                                    }(t, e);
                                    if (Object.getOwnPropertySymbols) {
                                        var d = Object.getOwnPropertySymbols(t);
                                        for (r = 0; r < d.length; r++) n = d[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                                    }
                                    return a
                                }(t, ng)),
                                y = this.state,
                                g = y.country,
                                m = y.countries,
                                v = y.phoneDigits,
                                b = y.isFocused,
                                C = this.getCountrySelectOptions({
                                    countries: m
                                });
                            return tK.createElement(s, {
                                style: d,
                                className: tY(o, "PhoneInput", {
                                    "PhoneInput--focus": b,
                                    "PhoneInput--disabled": n,
                                    "PhoneInput--readOnly": r
                                })
                            }, tK.createElement(c, nv({
                                name: e ? "".concat(e, "Country") : void 0,
                                "aria-label": f.country
                            }, $, {
                                value: g,
                                options: C,
                                onChange: this.onCountryChange,
                                onFocus: this.onCountryFocus,
                                onBlur: this.onCountryBlur,
                                disabled: n || $ && $.disabled,
                                readOnly: r || $ && $.readOnly,
                                iconComponent: this.CountryIcon
                            })), tK.createElement(l ? eF : eB, nv({
                                ref: this.setInputRef,
                                type: "tel",
                                autoComplete: a
                            }, u, h, {
                                name: e,
                                metadata: p,
                                country: g,
                                value: v || "",
                                onChange: this.onChange,
                                onFocus: this.onFocus,
                                onBlur: this.onBlur,
                                disabled: n,
                                readOnly: r,
                                inputComponent: i,
                                className: tY("PhoneInputInput", u && u.className, h.className)
                            })))
                        }
                    }], r = [{
                        key: "getDerivedStateFromProps",
                        value: function(t, e) {
                            return function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = null != arguments[e] ? arguments[e] : {};
                                    e % 2 ? nm(Object(n), !0).forEach(function(e) {
                                        nP(t, e, n[e])
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : nm(Object(n)).forEach(function(e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                    })
                                }
                                return t
                            }({
                                props: t
                            }, function(t, e, n) {
                                var r = t.metadata,
                                    a = t.countries,
                                    d = t.defaultCountry,
                                    o = t.value,
                                    i = t.reset,
                                    u = t.international,
                                    l = t.displayInitialValueAsLocalNumber,
                                    c = t.initialValueFormat,
                                    $ = e.defaultCountry,
                                    s = e.value,
                                    f = e.reset;
                                n.country;
                                var p = n.value,
                                    h = n.hasUserSelectedACountry,
                                    y = function(t) {
                                        return ns(np(np({}, t), {}, {
                                            international: u,
                                            useNationalFormat: l || "national" === c,
                                            metadata: r
                                        }))
                                    };
                                if (i !== f) return {
                                    phoneDigits: y({
                                        value: void 0,
                                        defaultCountry: d
                                    }),
                                    value: void 0,
                                    country: d,
                                    hasUserSelectedACountry: void 0
                                };
                                if (d !== $) {
                                    var g = !d || e7(d, r),
                                        m = !p || u && p === y({
                                            value: void 0,
                                            defaultCountry: $
                                        });
                                    if (!h && g && !o && m) return {
                                        country: d,
                                        phoneDigits: y({
                                            value: void 0,
                                            defaultCountry: d
                                        }),
                                        value: void 0
                                    }
                                }
                                if (!nh(o, s) && !nh(o, p)) {
                                    if (o) {
                                        v = tL(o || "", r);
                                        var v, b, C, O = nt(a, r);
                                        v && v.country ? (!O || O.indexOf(v.country) >= 0) && (b = v.country) : b = ni(o, {
                                            country: void 0,
                                            countries: O,
                                            metadata: r
                                        })
                                    }
                                    return o || (C = {
                                        hasUserSelectedACountry: void 0
                                    }), np(np({}, C), {}, {
                                        phoneDigits: y({
                                            phoneNumber: v,
                                            value: o,
                                            defaultCountry: d
                                        }),
                                        value: o,
                                        country: o ? b : d
                                    })
                                }
                            }(t, e.props, e))
                        }
                    }], n && nb(d.prototype, n), r && nb(d, r), Object.defineProperty(d, "prototype", {
                        writable: !1
                    }), d
                }(tK.PureComponent),
                nI = tK.forwardRef(function(t, e) {
                    return tK.createElement(nS, nv({}, t, {
                        inputRef: e
                    }))
                });

            function nx() {
                return (nx = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }

            function nw(t) {
                var e = tK.forwardRef(function(t, e) {
                    return tK.createElement(nI, nx({
                        ref: e
                    }, t))
                });
                return e.propTypes = {
                    metadata: tZ.isRequired,
                    labels: tq.isRequired
                }, e.defaultProps = {
                    metadata: t,
                    labels: tW
                }, e
            }

            function nE(t, e) {
                var n = Array.prototype.slice.call(e);
                return n.push(r), t.apply(this, n)
            }
            nI.propTypes = {
                value: tH.string,
                onChange: tH.func.isRequired,
                onFocus: tH.func,
                onBlur: tH.func,
                disabled: tH.bool,
                readOnly: tH.bool,
                autoComplete: tH.string.isRequired,
                initialValueFormat: tH.oneOf(["national"]),
                displayInitialValueAsLocalNumber: tH.bool,
                defaultCountry: tH.string,
                countries: tH.arrayOf(tH.string),
                labels: tq.isRequired,
                locales: tH.oneOfType([tH.string, tH.arrayOf(tH.string)]),
                flagUrl: tH.string.isRequired,
                flags: tH.objectOf(tH.elementType),
                flagComponent: tH.elementType.isRequired,
                addInternationalOption: tH.bool.isRequired,
                internationalIcon: tH.elementType.isRequired,
                countryOptionsOrder: tH.arrayOf(tH.string),
                style: tH.object,
                className: tH.string,
                countrySelectComponent: tH.elementType.isRequired,
                countrySelectProps: tH.object,
                inputComponent: tH.elementType.isRequired,
                containerComponent: tH.elementType.isRequired,
                numberInputProps: tH.object,
                smartCaret: tH.bool.isRequired,
                international: tH.bool,
                limitMaxLength: tH.bool.isRequired,
                countryCallingCodeEditable: tH.bool.isRequired,
                metadata: tZ.isRequired,
                onCountryChange: tH.func,
                focusInputOnCountrySelection: tH.bool.isRequired
            }, nI.defaultProps = {
                autoComplete: "tel",
                countrySelectComponent: eY,
                flagComponent: eQ,
                flagUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg",
                internationalIcon: e9,
                inputComponent: "input",
                containerComponent: "div",
                reset: tH.any,
                smartCaret: !0,
                addInternationalOption: !0,
                limitMaxLength: !1,
                countryCallingCodeEditable: !0,
                focusInputOnCountrySelection: !0
            }, nw();
            var nA = nw(r);

            function nj() {
                return nE(tL, arguments)
            }

            function nT() {
                return nE(tG, arguments)
            }

            function nk() {
                return nE(tV, arguments)
            }

            function nM() {
                return nE(F, arguments)
            }
        }
    }
]);