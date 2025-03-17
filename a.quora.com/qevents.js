! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.qevents = e() : t.qevents = e()
}(this, function() {
    return function(t) {
        function e(n) {
            if (r[n]) return r[n].exports;
            var i = r[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return t[n].call(i.exports, i, i.exports, e), i.l = !0, i.exports
        }
        var r = {};
        return e.m = t, e.c = r, e.d = function(t, r, n) {
            e.o(t, r) || Object.defineProperty(t, r, {
                configurable: !1,
                enumerable: !0,
                get: n
            })
        }, e.n = function(t) {
            var r = t && t.__esModule ? function() {
                return t["default"]
            } : function() {
                return t
            };
            return e.d(r, "a", r), r
        }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = "./shared/qevents/main.js")
    }({
        "./shared/Class.js": function(t, e) {
            function r(t, e) {
                function r() {
                    if (i || (t.call(c), n(h, e, a), i = !0, e = null), this !== c) {
                        var r = this.__init__;
                        r && r.apply(this, arguments)
                    }
                }
                var i, a = s.prototype = t.prototype,
                    h = new s;
                return r.prototype = h, r.extend = o, h.constructor = r, r
            }

            function n(t, e, r) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = r ? i(n, e, r) : e[n])
            }

            function i(t, e, r) {
                var n = e[t],
                    i = r[t];
                return "function" == typeof n && "function" == typeof i && n !== i && a.test(n) ? function() {
                    var e = this._super;
                    this._super = r[t];
                    try {
                        return n.apply(this, arguments)
                    } finally {
                        this._super = e
                    }
                } : n
            }

            function o(t) {
                return r(this, t)
            }
            var a = /xyz/.test(function() {
                    xyz
                }) ? /\b_super\b/ : /.*/,
                s = function() {},
                c = {};
            e.Class = o.call(function() {}, {})
        },
        "./shared/email_normalizer.js": function(t, e) {
            e.normalizeEmail = function(t) {
                var e = /@(.*mail\.facebook\.com|quora\.com)/,
                    r = /\+.*?@/,
                    n = "@gmail.com".length;
                return t = t.toLowerCase(), -1 != t.indexOf("+") && -1 == t.search(e) && (t = t.replace(r, "@")), t.endsWith("@gmail.com") && (t = t.slice(0, -n).replace(/\./g, "") + "@gmail.com"), t
            }
        },
        "./shared/hash_email.js": function(t, e, r) {
            var n = r("./third_party/sjcl.js");
            e.validateEmail = function(t) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)
            }, e.validateSHA256 = function(t) {
                return /^[a-z0-9]{64}$/i.test(t)
            }, e.sha256HexDigest = function(t) {
                var e = n.hash.sha256.hash(t);
                return n.codec.hex.fromBits(e)
            }
        },
        "./shared/polyfills/array.js": function(t, e) {
            var r = function(t, e, r) {
                "function" == typeof Object.defineProperty ? Object.defineProperty(t, e, {
                    configurable: !0,
                    value: r,
                    writable: !0,
                    enumerable: !1
                }) : t[e] = r
            };
            if (!Array.prototype.every) {
                var n = function(t, e) {
                    "use strict";
                    var r, n;
                    if (null === this) throw new TypeError("this is null or not defined");
                    var i = Object(this),
                        o = i.length >>> 0;
                    if ("function" != typeof t) throw new TypeError;
                    for (arguments.length > 1 && (r = e), n = 0; n < o;) {
                        var a;
                        if (n in i) {
                            a = i[n];
                            if (!t.call(r, a, n, i)) return !1
                        }
                        n++
                    }
                    return !0
                };
                r(Array.prototype, "every", n)
            }
            if (!Array.prototype.some) {
                var i = function(t) {
                    "use strict";
                    if (null === this) throw new TypeError("Array.prototype.some called on null or undefined");
                    if ("function" != typeof t) throw new TypeError;
                    for (var e = Object(this), r = e.length >>> 0, n = arguments.length >= 2 ? arguments[1] : void 0, i = 0; i < r; i++)
                        if (i in e && t.call(n, e[i], i, e)) return !0;
                    return !1
                };
                r(Array.prototype, "some", i)
            }
            if (!Array.prototype.indexOf) {
                var o = function(t, e) {
                    var r;
                    if (null === this) throw new TypeError('"this" is null or not defined');
                    var n = Object(this),
                        i = n.length >>> 0;
                    if (0 === i) return -1;
                    var o = +e || 0;
                    if (Math.abs(o) === Infinity && (o = 0), o >= i) return -1;
                    for (r = Math.max(o >= 0 ? o : i - Math.abs(o), 0); r < i;) {
                        if (r in n && n[r] === t) return r;
                        r++
                    }
                    return -1
                };
                r(Array.prototype, "indexOf", o)
            }
            if (!Array.prototype.forEach) {
                var a = function(t, e) {
                    var r, n;
                    if (null === this) throw new TypeError(" this is null or not defined");
                    var i = Object(this),
                        o = i.length >>> 0;
                    if ("function" != typeof t) throw new TypeError(t + " is not a function");
                    for (arguments.length > 1 && (r = e), n = 0; n < o;) {
                        var a;
                        n in i && (a = i[n], t.call(r, a, n, i)), n++
                    }
                };
                r(Array.prototype, "forEach", a)
            }
            if (!Array.prototype.map) {
                var s = function(t, e) {
                    var r, n, i;
                    if (null === this) throw new TypeError(" this is null or not defined");
                    var o = Object(this),
                        a = o.length >>> 0;
                    if ("function" != typeof t) throw new TypeError(t + " is not a function");
                    for (arguments.length > 1 && (r = e), n = new Array(a), i = 0; i < a;) {
                        var s, c;
                        i in o && (s = o[i], c = t.call(r, s, i, o), n[i] = c), i++
                    }
                    return n
                };
                r(Array.prototype, "map", s)
            }
            if (!Array.prototype.filter) {
                var c = function(t) {
                    "use strict";
                    if (void 0 === this || null === this) throw new TypeError;
                    var e = Object(this),
                        r = e.length >>> 0;
                    if ("function" != typeof t) throw new TypeError;
                    for (var n = [], i = arguments.length >= 2 ? arguments[1] : void 0, o = 0; o < r; o++)
                        if (o in e) {
                            var a = e[o];
                            t.call(i, a, o, e) && n.push(a)
                        }
                    return n
                };
                r(Array.prototype, "filter", c)
            }
            if (!Array.prototype.reduce) {
                var h = function(t) {
                    "use strict";
                    if (null === this) throw new TypeError("Array.prototype.reduce called on null or undefined");
                    if ("function" != typeof t) throw new TypeError(t + " is not a function");
                    var e, r = Object(this),
                        n = r.length >>> 0,
                        i = 0;
                    if (2 == arguments.length) e = arguments[1];
                    else {
                        for (; i < n && !(i in r);) i++;
                        if (i >= n) throw new TypeError("Reduce of empty array with no initial value");
                        e = r[i++]
                    }
                    for (; i < n; i++) i in r && (e = t(e, r[i], i, r));
                    return e
                };
                r(Array.prototype, "reduce", h)
            }
            if (!Array.prototype.lastIndexOf) {
                var u = function(t) {
                    "use strict";
                    if (void 0 === this || null === this) throw new TypeError;
                    var e, r, n = Object(this),
                        i = n.length >>> 0;
                    if (0 === i) return -1;
                    for (e = i - 1, arguments.length > 1 && (e = Number(arguments[1]), e != e ? e = 0 : 0 !== e && e != 1 / 0 && e != -1 / 0 && (e = (e > 0 || -1) * Math.floor(Math.abs(e)))), r = e >= 0 ? Math.min(e, i - 1) : i - Math.abs(e); r >= 0; r--)
                        if (r in n && n[r] === t) return r;
                    return -1
                };
                r(Array.prototype, "lastIndexOf", u)
            }
            if (!Array.prototype.includes) {
                var l = function(t) {
                    "use strict";
                    if (null == this) throw new TypeError("Array.prototype.includes called on null or undefined");
                    var e = Object(this),
                        r = parseInt(e.length, 10) || 0;
                    if (0 === r) return !1;
                    var n, i = parseInt(arguments[1], 10) || 0;
                    i >= 0 ? n = i : (n = r + i) < 0 && (n = 0);
                    for (var o; n < r;) {
                        if (o = e[n], t === o || t !== t && o !== o) return !0;
                        n++
                    }
                    return !1
                };
                r(Array.prototype, "includes", l)
            }
        },
        "./shared/polyfills/date.js": function(t, e) {
            Date.now || (Date.now = function() {
                return (new Date).getTime()
            })
        },
        "./shared/polyfills/function.js": function(t, e) {
            Function.prototype.bind || (Function.prototype.bind = function(t) {
                if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
                var e = Array.prototype.slice.call(arguments, 1),
                    r = this,
                    n = function() {},
                    i = function() {
                        return r.apply(this instanceof n ? this : t, e.concat(Array.prototype.slice.call(arguments)))
                    };
                return this.prototype && (n.prototype = this.prototype), i.prototype = new n, i
            })
        },
        "./shared/polyfills/object.js": function(t, e) {
            Object.keys || (Object.keys = function() {
                "use strict";
                var t = Object.prototype.hasOwnProperty,
                    e = !{
                        toString: null
                    }.propertyIsEnumerable("toString"),
                    r = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                    n = r.length;
                return function(i) {
                    if ("object" != typeof i && ("function" != typeof i || null === i)) throw new TypeError("Object.keys called on non-object");
                    var o, a, s = [];
                    for (o in i) t.call(i, o) && s.push(o);
                    if (e)
                        for (a = 0; a < n; a++) t.call(i, r[a]) && s.push(r[a]);
                    return s
                }
            }()), "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
                value: function(t, e) {
                    "use strict";
                    if (null === t || t === undefined) throw new TypeError("Cannot convert undefined or null to object");
                    for (var r = Object(t), n = 1; n < arguments.length; n++) {
                        var i = arguments[n];
                        if (null !== i && i !== undefined)
                            for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o])
                    }
                    return r
                },
                writable: !0,
                configurable: !0
            }), Object.entries || (Object.entries = function(t) {
                for (var e = Object.keys(t), r = e.length, n = new Array(r); r--;) n[r] = [e[r], t[e[r]]];
                return n
            })
        },
        "./shared/polyfills/string.js": function(t, e) {
            String.prototype.endsWith || (String.prototype.endsWith = function(t, e) {
                var r = this.toString();
                ("number" != typeof e || !isFinite(e) || Math.floor(e) !== e || e > r.length) && (e = r.length), e -= t.length;
                var n = r.indexOf(t, e);
                return -1 !== n && n === e
            }), String.prototype.startsWith || (String.prototype.startsWith = function(t, e) {
                return e = e || 0, this.substr(e, t.length) === t
            }), String.prototype.trim || (String.prototype.trim = function() {
                return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }), String.prototype.includes || (String.prototype.includes = function(t, e) {
                "use strict";
                return "number" != typeof e && (e = 0), !(e + t.length > this.length) && -1 !== this.indexOf(t, e)
            })
        },
        "./shared/qevents/main.js": function(t, e, r) {
            r("./shared/polyfills/string.js"), r("./shared/polyfills/array.js"), r("./shared/polyfills/function.js"), r("./shared/polyfills/object.js"), r("./shared/polyfills/date.js"), r("./shared/qevents/pixel.js").init(), r("./shared/qevents/queue.js").flush()
        },
        "./shared/qevents/pixel.js": function(t, e, r) {
            function n() {
                try {
                    var t = o("ia_share_url");
                    if (null !== t) return t
                } catch (t) {}
                try {
                    return ia_document !== undefined && ia_document.shareURL
                } catch (t) {
                    return
                }
            }

            function i(t) {
                var e, r = [];
                for (var n in t) e = t[n], a(n) && s(e) && r.push(n + "=" + encodeURIComponent(e));
                return r.join("&")
            }

            function o(t) {
                var e = null,
                    r = [];
                return window.location.search.substr(1).split("&").forEach(function(n) {
                    r = n.split("="), r[0] === t && (e = decodeURIComponent(r[1]))
                }), e
            }

            function a(t) {
                return "string" == typeof t
            }

            function s(t) {
                return "string" == typeof t || !isNaN(Number(t))
            }

            function c() {
                function t(t, e) {
                    var r = window.history[t];
                    window.history[t] = function() {
                        var t = r.apply(this, arguments);
                        return e.apply(this, arguments), t
                    }
                }
                window.history.pushState && window.history.replaceState && (t("pushState", h), t("replaceState", h), window.addEventListener("popstate", h, !1))
            }

            function h() {
                !0 !== window.qp.disablePushState && e.quoraPixelHelper("track", "ViewContent")
            }
            var u, l = r("./shared/Class.js").Class,
                f = r("./shared/email_normalizer.js"),
                d = r("./shared/hash_email.js"),
                p = r("./shared/qevents/timer.js").PixelTimer,
                y = l.extend({
                    __init__: function(t, e) {
                        if ("string" != typeof t) throw new Error("Quora Pixel Error: The second argument passed to qp is invalid.");
                        this.uuid = t, this.email = this._getEmailFromPassback(e), this.eventSource = this._getEventSourceFromPassback(e), this.lastViewContentUrl = ""
                    },
                    track: function(t, r) {
                        if ("string" != typeof t) throw new Error("Quora Pixel Error: The second argument passed to qp is invalid.");
                        var n, i, o = this._getIsFBIAUrl(),
                            a = this._getValueFromPassback(r),
                            s = this._getEventIdFromPassback(r),
                            c = this._getUrl();
                        if (this._shouldTrack(t, c)) {
                            n = this._getMetadata(t, c, o, a, undefined, undefined, s), i = this._getPixelUrl(n);
                            var h = "ViewContent" !== t && "DwellTime" !== t;
                            e.firePixel(i, h)
                        }
                    },
                    trackDwellTime: function(t, r) {
                        if ("number" != typeof t) throw new Error("Quora Pixel Error: Invalid dwell time.");
                        var n, i, o = this._getUrl();
                        n = this._getMetadata("DwellTime", o, undefined, undefined, t, r, undefined), i = this._getPixelUrl(n), e.firePixel(i, !1)
                    },
                    _shouldTrack: function(t, e) {
                        return ("ViewContent" != t || e != this.lastViewContentUrl) && ("DwellTime" != t && ("ViewContent" == t && (this.lastViewContentUrl = e), !0))
                    },
                    _getMetadata: function(t, e, r, n, i, o, a) {
                        var s = {
                            j: 1,
                            u: e,
                            tag: t,
                            ts: (new Date).getTime()
                        };
                        return r && (s.fbia = 1), n !== undefined && (s.v = n), this.email !== undefined && (s.em = this.email), this.eventSource !== undefined && (s.i = this.eventSource), "DwellTime" === t && i !== undefined && (s.dwt = i), o !== undefined && (s.ive = o), a !== undefined && (s.evid = a), s
                    },
                    _getValueFromPassback: function(t) {
                        var e;
                        if (t !== undefined && null !== t && t.value !== undefined && "number" != typeof(e = t.value) && "string" != typeof e) throw new Error("Quora Pixel Error: The third argument passed to qp is invalid.");
                        return e
                    },
                    _getEventIdFromPassback: function(t) {
                        var e;
                        return t !== undefined && null !== t && t.event_id !== undefined && (e = t.event_id), e
                    },
                    _getEmailFromPassback: function(t) {
                        var e;
                        if (t !== undefined && null !== t)
                            if (t.email !== undefined) {
                                if ("string" != typeof(e = f.normalizeEmail(t.email)) || !d.validateEmail(e)) throw new Error("Quora Pixel Error: The third argument passed to qp is invalid.");
                                e = d.sha256HexDigest(e)
                            } else if (t.hashed_email !== undefined && ("string" != typeof(e = t.hashed_email) || !d.validateSHA256(e))) throw new Error("Quora Pixel Error: The third argument passed to qp is invalid.");
                        return e
                    },
                    _getEventSourceFromPassback: function(t) {
                        var e;
                        if (t !== undefined && null !== t && t.event_source !== undefined && "string" != typeof(e = t.event_source)) throw new Error("Quora Pixel Error: The event source argument passed to qp is invalid.");
                        return e
                    },
                    _getUrl: function() {
                        var t = n();
                        return t || (t = window.location.href), t
                    },
                    _getIsFBIAUrl: function() {
                        return Boolean(n())
                    },
                    _getPixelUrl: function(t) {
                        return this._getBasePixelUrl() + this.uuid + "/pixel?" + i(t)
                    },
                    _getBasePixelUrl: function() {
                        return "https://q.quora.com/_/ad/"
                    }
                }),
                m = l.extend({
                    __init__: function() {
                        this.uuidToPixel = {}
                    },
                    installPixel: function(t, e) {
                        if (this.uuidToPixel[t] === undefined) {
                            var r = new y(t, e);
                            this.uuidToPixel[t] = r
                        }
                    },
                    track: function(t, e) {
                        var r = Object.keys(this.uuidToPixel);
                        if (!r.length) throw new Error("Quora Pixel Error: Base pixel code is not installed properly.");
                        for (var n = 0; n < r.length; n++) {
                            var i = r[n];
                            this.uuidToPixel[i].track(t, e)
                        }
                    },
                    trackDwellTime: function(t, e) {
                        var r = Object.keys(this.uuidToPixel);
                        if (!r.length) throw new Error("Quora Pixel Error: Base pixel code is not installed properly.");
                        for (var n = 0; n < r.length; n++) {
                            var i = r[n];
                            this.uuidToPixel[i].trackDwellTime(t, e)
                        }
                    }
                });
            e.quoraPixelHelper = function(t, e, r) {
                if ("string" != typeof arguments[0]) throw new Error("Quora Pixel Error: The first argument passed to qp is invalid.");
                "init" == t ? u.installPixel(e, r) : "track" == t && u.track(e, r)
            }, e.firePixel = function(t, e) {
                var r = new Image;
                r.src = t, e && r.setAttribute("attributionsrc", "")
            }, e.init = function() {
                if (!window.qp) throw new Error("Quora Pixel Error: Base pixel code is not installed properly.");
                null == window.qp.qp && (window.qp.qp = e.quoraPixelHelper, c(), u = new m, this.pixelTimer = new p(function(t, e) {
                    u.trackDwellTime(t, e)
                }))
            }, e.initializeStates = function() {
                u = new m
            }
        },
        "./shared/qevents/queue.js": function(t, e) {
            e.flush = function() {
                var t, e = window.qp;
                for (e.queue || (e.queue = []); e.queue.length;) t = e.queue.shift(), e.apply(e, t)
            }
        },
        "./shared/qevents/timer.js": function(t, e, r) {
            function n() {
                a === undefined && (a = new Date)
            }

            function i(t, e) {
                if (a !== undefined) {
                    var r = new Date,
                        n = r - a;
                    n > 0 && t(n, e), a = undefined
                }
            }

            function o() {
                "undefined" != typeof document.msHidden ? (s = "msHidden", c = "msvisibilitychange") : "undefined" != typeof document.webkitHidden ? (s = "webkitHidden", c = "webkitvisibilitychange") : "undefined" != typeof document.mozHidden ? (s = "mozHidden", c = "mozvisibilitychange") : (s = "hidden", c = "visibilitychange")
            }
            var a, s, c, h = r("./shared/Class.js").Class;
            e.PixelTimer = h.extend({
                __init__: function(t) {
                    o(), document.addEventListener(c, function() {
                        "visible" === document[s] || !1 === document[s] ? n() : "hidden" !== document[s] && !0 !== document[s] || i(t, s)
                    }), window.addEventListener("pageshow", function(t) {
                        n()
                    }), window.addEventListener("pagehide", function(e) {
                        i(t, "pagehide")
                    }), window.addEventListener("blur", function() {
                        i(t, "blur")
                    }), window.addEventListener("focus", function() {
                        n()
                    })
                }
            })
        },
        "./third_party/sjcl.js": function(t, e) {
            /*!

            SJCL is open. You can use, modify and redistribute it under a BSD
            license or under the GNU GPL, version 2.0.

            ---------------------------------------------------------------------

            http://opensource.org/licenses/BSD-2-Clause

            Copyright (c) 2009-2015, Emily Stark, Mike Hamburg and Dan Boneh at
            Stanford University. All rights reserved.

            Redistribution and use in source and binary forms, with or without
            modification, are permitted provided that the following conditions are
            met:

            1. Redistributions of source code must retain the above copyright
            notice, this list of conditions and the following disclaimer.

            2. Redistributions in binary form must reproduce the above copyright
            notice, this list of conditions and the following disclaimer in the
            documentation and/or other materials provided with the distribution.

            THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
            IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED
            TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
            PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
            HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
            SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
            TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
            PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
            LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
            NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
            SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

            ---------------------------------------------------------------------

            http://opensource.org/licenses/GPL-2.0

            The Stanford Javascript Crypto Library (hosted here on GitHub) is a
            project by the Stanford Computer Security Lab to build a secure,
            powerful, fast, small, easy-to-use, cross-browser library for
            cryptography in Javascript.

            Copyright (c) 2009-2015, Emily Stark, Mike Hamburg and Dan Boneh at
            Stanford University.

            This program is free software; you can redistribute it and/or modify it
            under the terms of the GNU General Public License as published by the
            Free Software Foundation; either version 2 of the License, or (at your
            option) any later version.

            This program is distributed in the hope that it will be useful, but
            WITHOUT ANY WARRANTY; without even the implied warranty of
            MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General
            Public License for more details.

            You should have received a copy of the GNU General Public License along
            with this program; if not, write to the Free Software Foundation, Inc.,
            59 Temple Place, Suite 330, Boston, MA 02111-1307 USA

            */
            "use strict";

            function r(t, e, r) {
                if (4 !== e.length) throw new h.exception.invalid("invalid aes block size");
                var n = t.b[r],
                    i = e[0] ^ n[0],
                    o = e[r ? 3 : 1] ^ n[1],
                    a = e[2] ^ n[2];
                e = e[r ? 1 : 3] ^ n[3];
                var s, c, u, l, f = n.length / 4 - 2,
                    d = 4,
                    p = [0, 0, 0, 0];
                s = t.s[r], t = s[0];
                var y = s[1],
                    m = s[2],
                    g = s[3],
                    v = s[4];
                for (l = 0; l < f; l++) s = t[i >>> 24] ^ y[o >> 16 & 255] ^ m[a >> 8 & 255] ^ g[255 & e] ^ n[d], c = t[o >>> 24] ^ y[a >> 16 & 255] ^ m[e >> 8 & 255] ^ g[255 & i] ^ n[d + 1], u = t[a >>> 24] ^ y[e >> 16 & 255] ^ m[i >> 8 & 255] ^ g[255 & o] ^ n[d + 2], e = t[e >>> 24] ^ y[i >> 16 & 255] ^ m[o >> 8 & 255] ^ g[255 & a] ^ n[d + 3], d += 4, i = s, o = c, a = u;
                for (l = 0; 4 > l; l++) p[r ? 3 & -l : l] = v[i >>> 24] << 24 ^ v[o >> 16 & 255] << 16 ^ v[a >> 8 & 255] << 8 ^ v[255 & e] ^ n[d++], s = i, i = o, o = a, a = e, e = s;
                return p
            }

            function n(t, e) {
                var r, n, i, o = t.F,
                    a = t.b,
                    s = o[0],
                    c = o[1],
                    h = o[2],
                    u = o[3],
                    l = o[4],
                    f = o[5],
                    d = o[6],
                    p = o[7];
                for (r = 0; 64 > r; r++) 16 > r ? n = e[r] : (n = e[r + 1 & 15], i = e[r + 14 & 15], n = e[15 & r] = (n >>> 7 ^ n >>> 18 ^ n >>> 3 ^ n << 25 ^ n << 14) + (i >>> 17 ^ i >>> 19 ^ i >>> 10 ^ i << 15 ^ i << 13) + e[15 & r] + e[r + 9 & 15] | 0), n = n + p + (l >>> 6 ^ l >>> 11 ^ l >>> 25 ^ l << 26 ^ l << 21 ^ l << 7) + (d ^ l & (f ^ d)) + a[r], p = d, d = f, f = l, l = u + n | 0, u = h, h = c, c = s, s = n + (c & h ^ u & (c ^ h)) + (c >>> 2 ^ c >>> 13 ^ c >>> 22 ^ c << 30 ^ c << 19 ^ c << 10) | 0;
                o[0] = o[0] + s | 0, o[1] = o[1] + c | 0, o[2] = o[2] + h | 0, o[3] = o[3] + u | 0, o[4] = o[4] + l | 0, o[5] = o[5] + f | 0, o[6] = o[6] + d | 0, o[7] = o[7] + p | 0
            }

            function i(t, e) {
                var r, n = h.random.K[t],
                    i = [];
                for (r in n) n.hasOwnProperty(r) && i.push(n[r]);
                for (r = 0; r < i.length; r++) i[r](e)
            }

            function o(t, e) {
                "undefined" != typeof window && window.performance && "function" == typeof window.performance.now ? t.addEntropy(window.performance.now(), e, "loadtime") : t.addEntropy((new Date).valueOf(), e, "loadtime")
            }

            function a(t) {
                t.b = s(t).concat(s(t)), t.L = new h.cipher.aes(t.b)
            }

            function s(t) {
                for (var e = 0; 4 > e && (t.h[e] = t.h[e] + 1 | 0, !t.h[e]); e++);
                return t.L.encrypt(t.h)
            }

            function c(t, e) {
                return function() {
                    e.apply(t, arguments)
                }
            }
            var h = {
                cipher: {},
                hash: {},
                keyexchange: {},
                mode: {},
                misc: {},
                codec: {},
                exception: {
                    corrupt: function(t) {
                        this.toString = function() {
                            return "CORRUPT: " + this.message
                        }, this.message = t
                    },
                    invalid: function(t) {
                        this.toString = function() {
                            return "INVALID: " + this.message
                        }, this.message = t
                    },
                    bug: function(t) {
                        this.toString = function() {
                            return "BUG: " + this.message
                        }, this.message = t
                    },
                    notReady: function(t) {
                        this.toString = function() {
                            return "NOT READY: " + this.message
                        }, this.message = t
                    }
                }
            };
            h.cipher.aes = function(t) {
                this.s[0][0][0] || this.O();
                var e, r, n, i, o = this.s[0][4],
                    a = this.s[1];
                e = t.length;
                var s = 1;
                if (4 !== e && 6 !== e && 8 !== e) throw new h.exception.invalid("invalid aes key size");
                for (this.b = [n = t.slice(0), i = []], t = e; t < 4 * e + 28; t++) r = n[t - 1], (0 == t % e || 8 === e && 4 == t % e) && (r = o[r >>> 24] << 24 ^ o[r >> 16 & 255] << 16 ^ o[r >> 8 & 255] << 8 ^ o[255 & r], 0 == t % e && (r = r << 8 ^ r >>> 24 ^ s << 24, s = s << 1 ^ 283 * (s >> 7))), n[t] = n[t - e] ^ r;
                for (e = 0; t; e++, t--) r = n[3 & e ? t : t - 4], i[e] = 4 >= t || 4 > e ? r : a[0][o[r >>> 24]] ^ a[1][o[r >> 16 & 255]] ^ a[2][o[r >> 8 & 255]] ^ a[3][o[255 & r]]
            }, h.cipher.aes.prototype = {
                encrypt: function(t) {
                    return r(this, t, 0)
                },
                decrypt: function(t) {
                    return r(this, t, 1)
                },
                s: [
                    [
                        [],
                        [],
                        [],
                        [],
                        []
                    ],
                    [
                        [],
                        [],
                        [],
                        [],
                        []
                    ]
                ],
                O: function() {
                    var t, e, r, n, i, o, a, s = this.s[0],
                        c = this.s[1],
                        h = s[4],
                        u = c[4],
                        l = [],
                        f = [];
                    for (t = 0; 256 > t; t++) f[(l[t] = t << 1 ^ 283 * (t >> 7)) ^ t] = t;
                    for (e = r = 0; !h[e]; e ^= n || 1, r = f[r] || 1)
                        for (o = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4, o = o >> 8 ^ 255 & o ^ 99, h[e] = o, u[o] = e, i = l[t = l[n = l[e]]], a = 16843009 * i ^ 65537 * t ^ 257 * n ^ 16843008 * e, i = 257 * l[o] ^ 16843008 * o, t = 0; 4 > t; t++) s[t][e] = i = i << 24 ^ i >>> 8, c[t][o] = a = a << 24 ^ a >>> 8;
                    for (t = 0; 5 > t; t++) s[t] = s[t].slice(0), c[t] = c[t].slice(0)
                }
            }, h.bitArray = {
                bitSlice: function(t, e, r) {
                    return t = h.bitArray.$(t.slice(e / 32), 32 - (31 & e)).slice(1), void 0 === r ? t : h.bitArray.clamp(t, r - e)
                },
                extract: function(t, e, r) {
                    var n = Math.floor(-e - r & 31);
                    return (-32 & (e + r - 1 ^ e) ? t[e / 32 | 0] << 32 - n ^ t[e / 32 + 1 | 0] >>> n : t[e / 32 | 0] >>> n) & (1 << r) - 1
                },
                concat: function(t, e) {
                    if (0 === t.length || 0 === e.length) return t.concat(e);
                    var r = t[t.length - 1],
                        n = h.bitArray.getPartial(r);
                    return 32 === n ? t.concat(e) : h.bitArray.$(e, n, 0 | r, t.slice(0, t.length - 1))
                },
                bitLength: function(t) {
                    var e = t.length;
                    return 0 === e ? 0 : 32 * (e - 1) + h.bitArray.getPartial(t[e - 1])
                },
                clamp: function(t, e) {
                    if (32 * t.length < e) return t;
                    t = t.slice(0, Math.ceil(e / 32));
                    var r = t.length;
                    return e &= 31, 0 < r && e && (t[r - 1] = h.bitArray.partial(e, t[r - 1] & 2147483648 >> e - 1, 1)), t
                },
                partial: function(t, e, r) {
                    return 32 === t ? e : (r ? 0 | e : e << 32 - t) + 1099511627776 * t
                },
                getPartial: function(t) {
                    return Math.round(t / 1099511627776) || 32
                },
                equal: function(t, e) {
                    if (h.bitArray.bitLength(t) !== h.bitArray.bitLength(e)) return !1;
                    var r, n = 0;
                    for (r = 0; r < t.length; r++) n |= t[r] ^ e[r];
                    return 0 === n
                },
                $: function(t, e, r, n) {
                    var i;
                    for (i = 0, void 0 === n && (n = []); 32 <= e; e -= 32) n.push(r), r = 0;
                    if (0 === e) return n.concat(t);
                    for (i = 0; i < t.length; i++) n.push(r | t[i] >>> e), r = t[i] << 32 - e;
                    return i = t.length ? t[t.length - 1] : 0, t = h.bitArray.getPartial(i), n.push(h.bitArray.partial(e + t & 31, 32 < e + t ? r : n.pop(), 1)), n
                },
                i: function(t, e) {
                    return [t[0] ^ e[0], t[1] ^ e[1], t[2] ^ e[2], t[3] ^ e[3]]
                },
                byteswapM: function(t) {
                    var e, r;
                    for (e = 0; e < t.length; ++e) r = t[e], t[e] = r >>> 24 | r >>> 8 & 65280 | (65280 & r) << 8 | r << 24;
                    return t
                }
            }, h.codec.utf8String = {
                fromBits: function(t) {
                    var e, r, n = "",
                        i = h.bitArray.bitLength(t);
                    for (e = 0; e < i / 8; e++) 0 == (3 & e) && (r = t[e / 4]), n += String.fromCharCode(r >>> 8 >>> 8 >>> 8), r <<= 8;
                    return decodeURIComponent(escape(n))
                },
                toBits: function(t) {
                    t = unescape(encodeURIComponent(t));
                    var e, r = [],
                        n = 0;
                    for (e = 0; e < t.length; e++) n = n << 8 | t.charCodeAt(e), 3 == (3 & e) && (r.push(n), n = 0);
                    return 3 & e && r.push(h.bitArray.partial(8 * (3 & e), n)), r
                }
            }, h.codec.hex = {
                fromBits: function(t) {
                    var e, r = "";
                    for (e = 0; e < t.length; e++) r += (0xf00000000000 + (0 | t[e])).toString(16).substr(4);
                    return r.substr(0, h.bitArray.bitLength(t) / 4)
                },
                toBits: function(t) {
                    var e, r, n = [];
                    for (t = t.replace(/\s|0x/g, ""), r = t.length, t += "00000000", e = 0; e < t.length; e += 8) n.push(0 ^ parseInt(t.substr(e, 8), 16));
                    return h.bitArray.clamp(n, 4 * r)
                }
            }, h.codec.base32 = {
                B: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                X: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                BITS: 32,
                BASE: 5,
                REMAINING: 27,
                fromBits: function(t, e, r) {
                    var n = h.codec.base32.BASE,
                        i = h.codec.base32.REMAINING,
                        o = "",
                        a = 0,
                        s = h.codec.base32.B,
                        c = 0,
                        u = h.bitArray.bitLength(t);
                    for (r && (s = h.codec.base32.X), r = 0; o.length * n < u;) o += s.charAt((c ^ t[r] >>> a) >>> i), a < n ? (c = t[r] << n - a, a += i, r++) : (c <<= n, a -= n);
                    for (; 7 & o.length && !e;) o += "=";
                    return o
                },
                toBits: function(t, e) {
                    t = t.replace(/\s|=/g, "").toUpperCase();
                    var r, n, i = h.codec.base32.BITS,
                        o = h.codec.base32.BASE,
                        a = h.codec.base32.REMAINING,
                        s = [],
                        c = 0,
                        u = h.codec.base32.B,
                        l = 0,
                        f = "base32";
                    for (e && (u = h.codec.base32.X, f = "base32hex"), r = 0; r < t.length; r++) {
                        if (0 > (n = u.indexOf(t.charAt(r)))) {
                            if (!e) try {
                                return h.codec.base32hex.toBits(t)
                            } catch (t) {}
                            throw new h.exception.invalid("this isn't " + f + "!")
                        }
                        c > a ? (c -= a, s.push(l ^ n >>> c), l = n << i - c) : (c += o, l ^= n << i - c)
                    }
                    return 56 & c && s.push(h.bitArray.partial(56 & c, l, 1)), s
                }
            }, h.codec.base32hex = {
                fromBits: function(t, e) {
                    return h.codec.base32.fromBits(t, e, 1)
                },
                toBits: function(t) {
                    return h.codec.base32.toBits(t, 1)
                }
            }, h.codec.base64 = {
                B: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                fromBits: function(t, e, r) {
                    var n = "",
                        i = 0,
                        o = h.codec.base64.B,
                        a = 0,
                        s = h.bitArray.bitLength(t);
                    for (r && (o = o.substr(0, 62) + "-_"), r = 0; 6 * n.length < s;) n += o.charAt((a ^ t[r] >>> i) >>> 26), 6 > i ? (a = t[r] << 6 - i, i += 26, r++) : (a <<= 6, i -= 6);
                    for (; 3 & n.length && !e;) n += "=";
                    return n
                },
                toBits: function(t, e) {
                    t = t.replace(/\s|=/g, "");
                    var r, n, i = [],
                        o = 0,
                        a = h.codec.base64.B,
                        s = 0;
                    for (e && (a = a.substr(0, 62) + "-_"), r = 0; r < t.length; r++) {
                        if (0 > (n = a.indexOf(t.charAt(r)))) throw new h.exception.invalid("this isn't base64!");
                        26 < o ? (o -= 26, i.push(s ^ n >>> o), s = n << 32 - o) : (o += 6, s ^= n << 32 - o)
                    }
                    return 56 & o && i.push(h.bitArray.partial(56 & o, s, 1)), i
                }
            }, h.codec.base64url = {
                fromBits: function(t) {
                    return h.codec.base64.fromBits(t, 1, 1)
                },
                toBits: function(t) {
                    return h.codec.base64.toBits(t, 1)
                }
            }, h.hash.sha256 = function(t) {
                this.b[0] || this.O(), t ? (this.F = t.F.slice(0), this.A = t.A.slice(0), this.l = t.l) : this.reset()
            }, h.hash.sha256.hash = function(t) {
                return (new h.hash.sha256).update(t).finalize()
            }, h.hash.sha256.prototype = {
                blockSize: 512,
                reset: function() {
                    return this.F = this.Y.slice(0), this.A = [], this.l = 0, this
                },
                update: function(t) {
                    "string" == typeof t && (t = h.codec.utf8String.toBits(t));
                    var e, r = this.A = h.bitArray.concat(this.A, t);
                    if (e = this.l, 9007199254740991 < (t = this.l = e + h.bitArray.bitLength(t))) throw new h.exception.invalid("Cannot hash more than 2^53 - 1 bits");
                    if ("undefined" != typeof Uint32Array) {
                        var i = new Uint32Array(r),
                            o = 0;
                        for (e = 512 + e - (512 + e & 511); e <= t; e += 512) n(this, i.subarray(16 * o, 16 * (o + 1))), o += 1;
                        r.splice(0, 16 * o)
                    } else
                        for (e = 512 + e - (512 + e & 511); e <= t; e += 512) n(this, r.splice(0, 16));
                    return this
                },
                finalize: function() {
                    var t, e = this.A,
                        r = this.F,
                        e = h.bitArray.concat(e, [h.bitArray.partial(1, 1)]);
                    for (t = e.length + 2; 15 & t; t++) e.push(0);
                    for (e.push(Math.floor(this.l / 4294967296)), e.push(0 | this.l); e.length;) n(this, e.splice(0, 16));
                    return this.reset(), r
                },
                Y: [],
                b: [],
                O: function() {
                    function t(t) {
                        return 4294967296 * (t - Math.floor(t)) | 0
                    }
                    for (var e, r, n = 0, i = 2; 64 > n; i++) {
                        for (r = !0, e = 2; e * e <= i; e++)
                            if (0 == i % e) {
                                r = !1;
                                break
                            }
                        r && (8 > n && (this.Y[n] = t(Math.pow(i, .5))), this.b[n] = t(Math.pow(i, 1 / 3)), n++)
                    }
                }
            }, h.mode.ccm = {
                name: "ccm",
                G: [],
                listenProgress: function(t) {
                    h.mode.ccm.G.push(t)
                },
                unListenProgress: function(t) {
                    -1 < (t = h.mode.ccm.G.indexOf(t)) && h.mode.ccm.G.splice(t, 1)
                },
                fa: function(t) {
                    var e, r = h.mode.ccm.G.slice();
                    for (e = 0; e < r.length; e += 1) r[e](t)
                },
                encrypt: function(t, e, r, n, i) {
                    var o, a = e.slice(0),
                        s = h.bitArray,
                        c = s.bitLength(r) / 8,
                        u = s.bitLength(a) / 8;
                    if (i = i || 64, n = n || [], 7 > c) throw new h.exception.invalid("ccm: iv must be at least 7 bytes");
                    for (o = 2; 4 > o && u >>> 8 * o; o++);
                    return o < 15 - c && (o = 15 - c), r = s.clamp(r, 8 * (15 - o)), e = h.mode.ccm.V(t, e, r, n, i, o), a = h.mode.ccm.C(t, a, r, e, i, o), s.concat(a.data, a.tag)
                },
                decrypt: function(t, e, r, n, i) {
                    i = i || 64, n = n || [];
                    var o = h.bitArray,
                        a = o.bitLength(r) / 8,
                        s = o.bitLength(e),
                        c = o.clamp(e, s - i),
                        u = o.bitSlice(e, s - i),
                        s = (s - i) / 8;
                    if (7 > a) throw new h.exception.invalid("ccm: iv must be at least 7 bytes");
                    for (e = 2; 4 > e && s >>> 8 * e; e++);
                    if (e < 15 - a && (e = 15 - a), r = o.clamp(r, 8 * (15 - e)), c = h.mode.ccm.C(t, c, r, u, i, e), t = h.mode.ccm.V(t, c.data, r, n, i, e), !o.equal(c.tag, t)) throw new h.exception.corrupt("ccm: tag doesn't match");
                    return c.data
                },
                na: function(t, e, r, n, i, o) {
                    var a = [],
                        s = h.bitArray,
                        c = s.i;
                    if (n = [s.partial(8, (e.length ? 64 : 0) | n - 2 << 2 | o - 1)], n = s.concat(n, r), n[3] |= i, n = t.encrypt(n), e.length)
                        for (r = s.bitLength(e) / 8, 65279 >= r ? a = [s.partial(16, r)] : 4294967295 >= r && (a = s.concat([s.partial(16, 65534)], [r])), a = s.concat(a, e), e = 0; e < a.length; e += 4) n = t.encrypt(c(n, a.slice(e, e + 4).concat([0, 0, 0])));
                    return n
                },
                V: function(t, e, r, n, i, o) {
                    var a = h.bitArray,
                        s = a.i;
                    if ((i /= 8) % 2 || 4 > i || 16 < i) throw new h.exception.invalid("ccm: invalid tag length");
                    if (4294967295 < n.length || 4294967295 < e.length) throw new h.exception.bug("ccm: can't deal with 4GiB or more data");
                    for (r = h.mode.ccm.na(t, n, r, i, a.bitLength(e) / 8, o), n = 0; n < e.length; n += 4) r = t.encrypt(s(r, e.slice(n, n + 4).concat([0, 0, 0])));
                    return a.clamp(r, 8 * i)
                },
                C: function(t, e, r, n, i, o) {
                    var a, s = h.bitArray;
                    a = s.i;
                    var c = e.length,
                        u = s.bitLength(e),
                        l = c / 50,
                        f = l;
                    if (r = s.concat([s.partial(8, o - 1)], r).concat([0, 0, 0]).slice(0, 4), n = s.bitSlice(a(n, t.encrypt(r)), 0, i), !c) return {
                        tag: n,
                        data: []
                    };
                    for (a = 0; a < c; a += 4) a > l && (h.mode.ccm.fa(a / c), l += f), r[3]++, i = t.encrypt(r), e[a] ^= i[0], e[a + 1] ^= i[1], e[a + 2] ^= i[2], e[a + 3] ^= i[3];
                    return {
                        tag: n,
                        data: s.clamp(e, u)
                    }
                }
            }, h.mode.ocb2 = {
                name: "ocb2",
                encrypt: function(t, e, r, n, i, o) {
                    if (128 !== h.bitArray.bitLength(r)) throw new h.exception.invalid("ocb iv must be 128 bits");
                    var a, s = h.mode.ocb2.S,
                        c = h.bitArray,
                        u = c.i,
                        l = [0, 0, 0, 0];
                    r = s(t.encrypt(r));
                    var f, d = [];
                    for (n = n || [], i = i || 64, a = 0; a + 4 < e.length; a += 4) f = e.slice(a, a + 4), l = u(l, f), d = d.concat(u(r, t.encrypt(u(r, f)))), r = s(r);
                    return f = e.slice(a), e = c.bitLength(f), a = t.encrypt(u(r, [0, 0, 0, e])), f = c.clamp(u(f.concat([0, 0, 0]), a), e), l = u(l, u(f.concat([0, 0, 0]), a)), l = t.encrypt(u(l, u(r, s(r)))), n.length && (l = u(l, o ? n : h.mode.ocb2.pmac(t, n))), d.concat(c.concat(f, c.clamp(l, i)))
                },
                decrypt: function(t, e, r, n, i, o) {
                    if (128 !== h.bitArray.bitLength(r)) throw new h.exception.invalid("ocb iv must be 128 bits");
                    i = i || 64;
                    var a, s, c = h.mode.ocb2.S,
                        u = h.bitArray,
                        l = u.i,
                        f = [0, 0, 0, 0],
                        d = c(t.encrypt(r)),
                        p = h.bitArray.bitLength(e) - i,
                        y = [];
                    for (n = n || [], r = 0; r + 4 < p / 32; r += 4) a = l(d, t.decrypt(l(d, e.slice(r, r + 4)))), f = l(f, a), y = y.concat(a), d = c(d);
                    if (s = p - 32 * r, a = t.encrypt(l(d, [0, 0, 0, s])), a = l(a, u.clamp(e.slice(r), s).concat([0, 0, 0])), f = l(f, a), f = t.encrypt(l(f, l(d, c(d)))), n.length && (f = l(f, o ? n : h.mode.ocb2.pmac(t, n))), !u.equal(u.clamp(f, i), u.bitSlice(e, p))) throw new h.exception.corrupt("ocb: tag doesn't match");
                    return y.concat(u.clamp(a, s))
                },
                pmac: function(t, e) {
                    var r, n = h.mode.ocb2.S,
                        i = h.bitArray,
                        o = i.i,
                        a = [0, 0, 0, 0],
                        s = t.encrypt([0, 0, 0, 0]),
                        s = o(s, n(n(s)));
                    for (r = 0; r + 4 < e.length; r += 4) s = n(s), a = o(a, t.encrypt(o(s, e.slice(r, r + 4))));
                    return r = e.slice(r), 128 > i.bitLength(r) && (s = o(s, n(s)), r = i.concat(r, [-2147483648, 0, 0, 0])), a = o(a, r), t.encrypt(o(n(o(s, n(s))), a))
                },
                S: function(t) {
                    return [t[0] << 1 ^ t[1] >>> 31, t[1] << 1 ^ t[2] >>> 31, t[2] << 1 ^ t[3] >>> 31, t[3] << 1 ^ 135 * (t[0] >>> 31)]
                }
            }, h.mode.gcm = {
                name: "gcm",
                encrypt: function(t, e, r, n, i) {
                    var o = e.slice(0);
                    return e = h.bitArray, n = n || [], t = h.mode.gcm.C(!0, t, o, n, r, i || 128), e.concat(t.data, t.tag)
                },
                decrypt: function(t, e, r, n, i) {
                    var o = e.slice(0),
                        a = h.bitArray,
                        s = a.bitLength(o);
                    if (i = i || 128, n = n || [], i <= s ? (e = a.bitSlice(o, s - i), o = a.bitSlice(o, 0, s - i)) : (e = o, o = []), t = h.mode.gcm.C(!1, t, o, n, r, i), !a.equal(t.tag, e)) throw new h.exception.corrupt("gcm: tag doesn't match");
                    return t.data
                },
                ka: function(t, e) {
                    var r, n, i, o, a, s = h.bitArray.i;
                    for (i = [0, 0, 0, 0], o = e.slice(0), r = 0; 128 > r; r++) {
                        for ((n = 0 != (t[Math.floor(r / 32)] & 1 << 31 - r % 32)) && (i = s(i, o)), a = 0 != (1 & o[3]), n = 3; 0 < n; n--) o[n] = o[n] >>> 1 | (1 & o[n - 1]) << 31;
                        o[0] >>>= 1, a && (o[0] ^= -520093696)
                    }
                    return i
                },
                j: function(t, e, r) {
                    var n, i = r.length;
                    for (e = e.slice(0), n = 0; n < i; n += 4) e[0] ^= 4294967295 & r[n], e[1] ^= 4294967295 & r[n + 1], e[2] ^= 4294967295 & r[n + 2], e[3] ^= 4294967295 & r[n + 3], e = h.mode.gcm.ka(e, t);
                    return e
                },
                C: function(t, e, r, n, i, o) {
                    var a, s, c, u, l, f, d, p, y = h.bitArray;
                    for (f = r.length, d = y.bitLength(r), p = y.bitLength(n), s = y.bitLength(i), a = e.encrypt([0, 0, 0, 0]), 96 === s ? (i = i.slice(0), i = y.concat(i, [1])) : (i = h.mode.gcm.j(a, [0, 0, 0, 0], i), i = h.mode.gcm.j(a, i, [0, 0, Math.floor(s / 4294967296), 4294967295 & s])), s = h.mode.gcm.j(a, [0, 0, 0, 0], n), l = i.slice(0), n = s.slice(0), t || (n = h.mode.gcm.j(a, s, r)), u = 0; u < f; u += 4) l[3]++, c = e.encrypt(l), r[u] ^= c[0], r[u + 1] ^= c[1], r[u + 2] ^= c[2], r[u + 3] ^= c[3];
                    return r = y.clamp(r, d), t && (n = h.mode.gcm.j(a, s, r)), t = [Math.floor(p / 4294967296), 4294967295 & p, Math.floor(d / 4294967296), 4294967295 & d], n = h.mode.gcm.j(a, n, t), c = e.encrypt(i), n[0] ^= c[0], n[1] ^= c[1], n[2] ^= c[2], n[3] ^= c[3], {
                        tag: y.bitSlice(n, 0, o),
                        data: r
                    }
                }
            }, h.misc.hmac = function(t, e) {
                this.W = e = e || h.hash.sha256;
                var r, n = [
                        [],
                        []
                    ],
                    i = e.prototype.blockSize / 32;
                for (this.w = [new e, new e], t.length > i && (t = e.hash(t)), r = 0; r < i; r++) n[0][r] = 909522486 ^ t[r], n[1][r] = 1549556828 ^ t[r];
                this.w[0].update(n[0]), this.w[1].update(n[1]), this.R = new e(this.w[0])
            }, h.misc.hmac.prototype.encrypt = h.misc.hmac.prototype.mac = function(t) {
                if (this.aa) throw new h.exception.invalid("encrypt on already updated hmac called!");
                return this.update(t), this.digest(t)
            }, h.misc.hmac.prototype.reset = function() {
                this.R = new this.W(this.w[0]), this.aa = !1
            }, h.misc.hmac.prototype.update = function(t) {
                this.aa = !0, this.R.update(t)
            }, h.misc.hmac.prototype.digest = function() {
                var t = this.R.finalize(),
                    t = new this.W(this.w[1]).update(t).finalize();
                return this.reset(), t
            }, h.misc.pbkdf2 = function(t, e, r, n, i) {
                if (r = r || 1e4, 0 > n || 0 > r) throw new h.exception.invalid("invalid params to pbkdf2");
                "string" == typeof t && (t = h.codec.utf8String.toBits(t)), "string" == typeof e && (e = h.codec.utf8String.toBits(e)), i = i || h.misc.hmac, t = new i(t);
                var o, a, s, c, u = [],
                    l = h.bitArray;
                for (c = 1; 32 * u.length < (n || 1); c++) {
                    for (i = o = t.encrypt(l.concat(e, [c])), a = 1; a < r; a++)
                        for (o = t.encrypt(o), s = 0; s < o.length; s++) i[s] ^= o[s];
                    u = u.concat(i)
                }
                return n && (u = l.clamp(u, n)), u
            }, h.prng = function(t) {
                this.c = [new h.hash.sha256], this.m = [0], this.P = 0, this.H = {}, this.N = 0, this.U = {}, this.Z = this.f = this.o = this.ha = 0, this.b = [0, 0, 0, 0, 0, 0, 0, 0], this.h = [0, 0, 0, 0], this.L = void 0, this.M = t, this.D = !1, this.K = {
                    progress: {},
                    seeded: {}
                }, this.u = this.ga = 0, this.I = 1, this.J = 2, this.ca = 65536, this.T = [0, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024], this.da = 3e4, this.ba = 80
            }, h.prng.prototype = {
                randomWords: function(t, e) {
                    var r, n = [];
                    r = this.isReady(e);
                    var i;
                    if (r === this.u) throw new h.exception.notReady("generator isn't seeded");
                    if (r & this.J) {
                        r = !(r & this.I), i = [];
                        var o, c = 0;
                        for (this.Z = i[0] = (new Date).valueOf() + this.da, o = 0; 16 > o; o++) i.push(4294967296 * Math.random() | 0);
                        for (o = 0; o < this.c.length && (i = i.concat(this.c[o].finalize()), c += this.m[o], this.m[o] = 0, r || !(this.P & 1 << o)); o++);
                        for (this.P >= 1 << this.c.length && (this.c.push(new h.hash.sha256), this.m.push(0)), this.f -= c, c > this.o && (this.o = c), this.P++, this.b = h.hash.sha256.hash(this.b.concat(i)), this.L = new h.cipher.aes(this.b), r = 0; 4 > r && (this.h[r] = this.h[r] + 1 | 0, !this.h[r]); r++);
                    }
                    for (r = 0; r < t; r += 4) 0 == (r + 1) % this.ca && a(this), i = s(this), n.push(i[0], i[1], i[2], i[3]);
                    return a(this), n.slice(0, t)
                },
                setDefaultParanoia: function(t, e) {
                    if (0 === t && "Setting paranoia=0 will ruin your security; use it only for testing" !== e) throw new h.exception.invalid("Setting paranoia=0 will ruin your security; use it only for testing");
                    this.M = t
                },
                addEntropy: function(t, e, r) {
                    r = r || "user";
                    var n, o, a = (new Date).valueOf(),
                        s = this.H[r],
                        c = this.isReady(),
                        u = 0;
                    switch (n = this.U[r], void 0 === n && (n = this.U[r] = this.ha++), void 0 === s && (s = this.H[r] = 0), this.H[r] = (this.H[r] + 1) % this.c.length, typeof t) {
                        case "number":
                            void 0 === e && (e = 1), this.c[s].update([n, this.N++, 1, e, a, 1, 0 | t]);
                            break;
                        case "object":
                            if ("[object Uint32Array]" === (r = Object.prototype.toString.call(t))) {
                                for (o = [], r = 0; r < t.length; r++) o.push(t[r]);
                                t = o
                            } else
                                for ("[object Array]" !== r && (u = 1), r = 0; r < t.length && !u; r++) "number" != typeof t[r] && (u = 1);
                            if (!u) {
                                if (void 0 === e)
                                    for (r = e = 0; r < t.length; r++)
                                        for (o = t[r]; 0 < o;) e++, o >>>= 1;
                                this.c[s].update([n, this.N++, 2, e, a, t.length].concat(t))
                            }
                            break;
                        case "string":
                            void 0 === e && (e = t.length), this.c[s].update([n, this.N++, 3, e, a, t.length]), this.c[s].update(t);
                            break;
                        default:
                            u = 1
                    }
                    if (u) throw new h.exception.bug("random: addEntropy only supports number, array of numbers or string");
                    this.m[s] += e, this.f += e, c === this.u && (this.isReady() !== this.u && i("seeded", Math.max(this.o, this.f)), i("progress", this.getProgress()))
                },
                isReady: function(t) {
                    return t = this.T[void 0 !== t ? t : this.M], this.o && this.o >= t ? this.m[0] > this.ba && (new Date).valueOf() > this.Z ? this.J | this.I : this.I : this.f >= t ? this.J | this.u : this.u
                },
                getProgress: function(t) {
                    return t = this.T[t || this.M], this.o >= t ? 1 : this.f > t ? 1 : this.f / t
                },
                startCollectors: function() {
                    if (!this.D) {
                        if (this.a = {
                                loadTimeCollector: c(this, this.ma),
                                mouseCollector: c(this, this.oa),
                                keyboardCollector: c(this, this.la),
                                accelerometerCollector: c(this, this.ea),
                                touchCollector: c(this, this.qa)
                            }, window.addEventListener) window.addEventListener("load", this.a.loadTimeCollector, !1), window.addEventListener("mousemove", this.a.mouseCollector, !1), window.addEventListener("keypress", this.a.keyboardCollector, !1), window.addEventListener("devicemotion", this.a.accelerometerCollector, !1), window.addEventListener("touchmove", this.a.touchCollector, !1);
                        else {
                            if (!document.attachEvent) throw new h.exception.bug("can't attach event");
                            document.attachEvent("onload", this.a.loadTimeCollector), document.attachEvent("onmousemove", this.a.mouseCollector), document.attachEvent("keypress", this.a.keyboardCollector)
                        }
                        this.D = !0
                    }
                },
                stopCollectors: function() {
                    this.D && (window.removeEventListener ? (window.removeEventListener("load", this.a.loadTimeCollector, !1), window.removeEventListener("mousemove", this.a.mouseCollector, !1), window.removeEventListener("keypress", this.a.keyboardCollector, !1), window.removeEventListener("devicemotion", this.a.accelerometerCollector, !1), window.removeEventListener("touchmove", this.a.touchCollector, !1)) : document.detachEvent && (document.detachEvent("onload", this.a.loadTimeCollector), document.detachEvent("onmousemove", this.a.mouseCollector), document.detachEvent("keypress", this.a.keyboardCollector)), this.D = !1)
                },
                addEventListener: function(t, e) {
                    this.K[t][this.ga++] = e
                },
                removeEventListener: function(t, e) {
                    var r, n, i = this.K[t],
                        o = [];
                    for (n in i) i.hasOwnProperty(n) && i[n] === e && o.push(n);
                    for (r = 0; r < o.length; r++) n = o[r], delete i[n]
                },
                la: function() {
                    o(this, 1)
                },
                oa: function(t) {
                    var e, r;
                    try {
                        e = t.x || t.clientX || t.offsetX || 0, r = t.y || t.clientY || t.offsetY || 0
                    } catch (t) {
                        r = e = 0
                    }
                    0 != e && 0 != r && this.addEntropy([e, r], 2, "mouse"), o(this, 0)
                },
                qa: function(t) {
                    t = t.touches[0] || t.changedTouches[0], this.addEntropy([t.pageX || t.clientX, t.pageY || t.clientY], 1, "touch"), o(this, 0)
                },
                ma: function() {
                    o(this, 2)
                },
                ea: function(t) {
                    if (t = t.accelerationIncludingGravity.x || t.accelerationIncludingGravity.y || t.accelerationIncludingGravity.z, window.orientation) {
                        var e = window.orientation;
                        "number" == typeof e && this.addEntropy(e, 1, "accelerometer")
                    }
                    t && this.addEntropy(t, 2, "accelerometer"), o(this, 0)
                }
            }, h.random = new h.prng(6);
            t: try {
                var u, l, f, d;
                if (d = void 0 !== t && t.exports) {
                    var p;
                    try {
                        p = require("crypto")
                    } catch (t) {
                        p = null
                    }
                    d = l = p
                }
                if (d && l.randomBytes) u = l.randomBytes(128), u = new Uint32Array(new Uint8Array(u).buffer), h.random.addEntropy(u, 1024, "crypto['randomBytes']");
                else if ("undefined" != typeof window && "undefined" != typeof Uint32Array) {
                    if (f = new Uint32Array(32), window.crypto && window.crypto.getRandomValues) window.crypto.getRandomValues(f);
                    else {
                        if (!window.msCrypto || !window.msCrypto.getRandomValues) break t;
                        window.msCrypto.getRandomValues(f)
                    }
                    h.random.addEntropy(f, 1024, "crypto['getRandomValues']")
                }
            } catch (t) {
                "undefined" != typeof window && window.console && (console.log("There was an error collecting entropy from the browser:"), console.log(t))
            }
            h.json = {
                defaults: {
                    v: 1,
                    iter: 1e4,
                    ks: 128,
                    ts: 64,
                    mode: "ccm",
                    adata: "",
                    cipher: "aes"
                },
                ja: function(t, e, r, n) {
                    r = r || {}, n = n || {};
                    var i, o = h.json,
                        a = o.g({
                            iv: h.random.randomWords(4, 0)
                        }, o.defaults);
                    if (o.g(a, r), r = a.adata, "string" == typeof a.salt && (a.salt = h.codec.base64.toBits(a.salt)), "string" == typeof a.iv && (a.iv = h.codec.base64.toBits(a.iv)), !h.mode[a.mode] || !h.cipher[a.cipher] || "string" == typeof t && 100 >= a.iter || 64 !== a.ts && 96 !== a.ts && 128 !== a.ts || 128 !== a.ks && 192 !== a.ks && 256 !== a.ks || 2 > a.iv.length || 4 < a.iv.length) throw new h.exception.invalid("json encrypt: invalid parameters");
                    return "string" == typeof t ? (i = h.misc.cachedPbkdf2(t, a), t = i.key.slice(0, a.ks / 32), a.salt = i.salt) : h.ecc && t instanceof h.ecc.elGamal.publicKey && (i = t.kem(), a.kemtag = i.tag, t = i.key.slice(0, a.ks / 32)), "string" == typeof e && (e = h.codec.utf8String.toBits(e)), "string" == typeof r && (a.adata = r = h.codec.utf8String.toBits(r)), i = new h.cipher[a.cipher](t), o.g(n, a), n.key = t, a.ct = "ccm" === a.mode && h.arrayBuffer && h.arrayBuffer.ccm && e instanceof ArrayBuffer ? h.arrayBuffer.ccm.encrypt(i, e, a.iv, r, a.ts) : h.mode[a.mode].encrypt(i, e, a.iv, r, a.ts), a
                },
                encrypt: function(t, e, r, n) {
                    var i = h.json,
                        o = i.ja.apply(i, arguments);
                    return i.encode(o)
                },
                ia: function(t, e, r, n) {
                    r = r || {}, n = n || {};
                    var i = h.json;
                    e = i.g(i.g(i.g({}, i.defaults), e), r, !0);
                    var o, a;
                    if (o = e.adata, "string" == typeof e.salt && (e.salt = h.codec.base64.toBits(e.salt)), "string" == typeof e.iv && (e.iv = h.codec.base64.toBits(e.iv)), !h.mode[e.mode] || !h.cipher[e.cipher] || "string" == typeof t && 100 >= e.iter || 64 !== e.ts && 96 !== e.ts && 128 !== e.ts || 128 !== e.ks && 192 !== e.ks && 256 !== e.ks || !e.iv || 2 > e.iv.length || 4 < e.iv.length) throw new h.exception.invalid("json decrypt: invalid parameters");
                    return "string" == typeof t ? (a = h.misc.cachedPbkdf2(t, e), t = a.key.slice(0, e.ks / 32), e.salt = a.salt) : h.ecc && t instanceof h.ecc.elGamal.secretKey && (t = t.unkem(h.codec.base64.toBits(e.kemtag)).slice(0, e.ks / 32)), "string" == typeof o && (o = h.codec.utf8String.toBits(o)), a = new h.cipher[e.cipher](t), o = "ccm" === e.mode && h.arrayBuffer && h.arrayBuffer.ccm && e.ct instanceof ArrayBuffer ? h.arrayBuffer.ccm.decrypt(a, e.ct, e.iv, e.tag, o, e.ts) : h.mode[e.mode].decrypt(a, e.ct, e.iv, o, e.ts), i.g(n, e), n.key = t, 1 === r.raw ? o : h.codec.utf8String.fromBits(o)
                },
                decrypt: function(t, e, r, n) {
                    var i = h.json;
                    return i.ia(t, i.decode(e), r, n)
                },
                encode: function(t) {
                    var e, r = "{",
                        n = "";
                    for (e in t)
                        if (t.hasOwnProperty(e)) {
                            if (!e.match(/^[a-z0-9]+$/i)) throw new h.exception.invalid("json encode: invalid property name");
                            switch (r += n + '"' + e + '":', n = ",", typeof t[e]) {
                                case "number":
                                case "boolean":
                                    r += t[e];
                                    break;
                                case "string":
                                    r += '"' + escape(t[e]) + '"';
                                    break;
                                case "object":
                                    r += '"' + h.codec.base64.fromBits(t[e], 0) + '"';
                                    break;
                                default:
                                    throw new h.exception.bug("json encode: unsupported type")
                            }
                        }
                    return r + "}"
                },
                decode: function(t) {
                    if (t = t.replace(/\s/g, ""), !t.match(/^\{.*\}$/)) throw new h.exception.invalid("json decode: this isn't json!");
                    t = t.replace(/^\{|\}$/g, "").split(/,/);
                    var e, r, n = {};
                    for (e = 0; e < t.length; e++) {
                        if (!(r = t[e].match(/^\s*(?:(["']?)([a-z][a-z0-9]*)\1)\s*:\s*(?:(-?\d+)|"([a-z0-9+\/%*_.@=\-]*)"|(true|false))$/i))) throw new h.exception.invalid("json decode: this isn't json!");
                        null != r[3] ? n[r[2]] = parseInt(r[3], 10) : null != r[4] ? n[r[2]] = r[2].match(/^(ct|adata|salt|iv)$/) ? h.codec.base64.toBits(r[4]) : unescape(r[4]) : null != r[5] && (n[r[2]] = "true" === r[5])
                    }
                    return n
                },
                g: function(t, e, r) {
                    if (void 0 === t && (t = {}), void 0 === e) return t;
                    for (var n in e)
                        if (e.hasOwnProperty(n)) {
                            if (r && void 0 !== t[n] && t[n] !== e[n]) throw new h.exception.invalid("required parameter overridden");
                            t[n] = e[n]
                        }
                    return t
                },
                sa: function(t, e) {
                    var r, n = {};
                    for (r in t) t.hasOwnProperty(r) && t[r] !== e[r] && (n[r] = t[r]);
                    return n
                },
                ra: function(t, e) {
                    var r, n = {};
                    for (r = 0; r < e.length; r++) void 0 !== t[e[r]] && (n[e[r]] = t[e[r]]);
                    return n
                }
            }, h.encrypt = h.json.encrypt, h.decrypt = h.json.decrypt, h.misc.pa = {}, h.misc.cachedPbkdf2 = function(t, e) {
                var r, n = h.misc.pa;
                return e = e || {}, r = e.iter || 1e3, n = n[t] = n[t] || {}, r = n[r] = n[r] || {
                    firstSalt: e.salt && e.salt.length ? e.salt.slice(0) : h.random.randomWords(2, 0)
                }, n = void 0 === e.salt ? r.firstSalt : e.salt, r[n] = r[n] || h.misc.pbkdf2(t, n, e.iter), {
                    key: r[n].slice(0),
                    salt: n.slice(0)
                }
            }, void 0 !== t && t.exports && (t.exports = h), "function" == typeof define && define([], function() {
                return h
            })
        }
    })
});