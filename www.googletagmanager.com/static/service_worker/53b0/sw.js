'use strict';
var aa = function(a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }
        return new Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        })
    },
    h = function(a) {
        return aa(a())
    };
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n = {},
    r = null,
    A = function(a) {
        var b = 3;
        b === void 0 && (b = 0);
        z();
        const c = n[b],
            d = Array(Math.floor(a.length / 3)),
            e = c[64] || "";
        let f = 0,
            g = 0;
        for (; f < a.length - 2; f += 3) {
            const p = a[f],
                q = a[f + 1],
                x = a[f + 2],
                v = c[p >> 2],
                m = c[(p & 3) << 4 | q >> 4],
                t = c[(q & 15) << 2 | x >> 6],
                u = c[x & 63];
            d[g++] = "" + v + m + t + u
        }
        let k = 0,
            l = e;
        switch (a.length - f) {
            case 2:
                k = a[f + 1], l = c[(k & 15) << 2] || e;
            case 1:
                const p = a[f];
                d[g] = "" + c[p >> 2] + c[(p & 3) << 4 | k >> 4] + l + e
        }
        return d.join("")
    },
    D = function(a) {
        const b = a.length;
        let c = b * 3 / 4;
        c % 3 ? c = Math.floor(c) : "=.".indexOf(a[b - 1]) != -1 && (c = "=.".indexOf(a[b -
            2]) != -1 ? c - 2 : c - 1);
        const d = new Uint8Array(c);
        let e = 0;
        ba(a, function(f) {
            d[e++] = f
        });
        return e !== c ? d.subarray(0, e) : d
    },
    ba = function(a, b) {
        function c(e) {
            for (; d < a.length;) {
                const f = a.charAt(d++),
                    g = r[f];
                if (g != null) return g;
                if (!/^[\s\xa0]*$/.test(f)) throw Error("Unknown base64 encoding at char: " + f);
            }
            return e
        }
        z();
        let d = 0;
        for (;;) {
            const e = c(-1),
                f = c(0),
                g = c(64),
                k = c(64);
            if (k === 64 && e === -1) break;
            b(e << 2 | f >> 4);
            g != 64 && (b(f << 4 & 240 | g >> 2), k != 64 && b(g << 6 & 192 | k))
        }
    },
    z = function() {
        if (!r) {
            r = {};
            var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
                b = ["+/=", "+/", "-_=", "-_.", "-_"];
            for (let c = 0; c < 5; c++) {
                const d = a.concat(b[c].split(""));
                n[c] = d;
                for (let e = 0; e < d.length; e++) {
                    const f = d[e];
                    r[f] === void 0 && (r[f] = e)
                }
            }
        }
    };
/*

 Copyright 2020 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var E = class extends Error {
    constructor(a) {
        super(a);
        Object.setPrototypeOf(this, E.prototype)
    }
};
E.prototype.name = "SecurityException";
var F = class extends Error {
    constructor(a) {
        super(a);
        Object.setPrototypeOf(this, F.prototype)
    }
};
F.prototype.name = "InvalidArgumentsException";

function G(...a) {
    let b = 0;
    for (let e = 0; e < arguments.length; e++) b += arguments[e].length;
    const c = new Uint8Array(b);
    let d = 0;
    for (let e = 0; e < arguments.length; e++) c.set(arguments[e], d), d += arguments[e].length;
    return c
}

function H(a) {
    const b = a.replace(/-/g, "+").replace(/_/g, "/");
    return I(globalThis.atob(b))
}

function J(a) {
    let b = "";
    for (let c = 0; c < a.length; c += 1) b += String.fromCharCode(a[c]);
    return globalThis.btoa(b).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
}

function I(a) {
    const b = [];
    let c = 0;
    for (let d = 0; d < a.length; d++) {
        const e = a.charCodeAt(d);
        b[c++] = e
    }
    return new Uint8Array(b)
};
/*

 Copyright 2022 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var ca = function(a, b, c, d) {
        return h(function*() {
            if (c.length < (a.l ? 28 : 16)) throw new E("ciphertext too short");
            if (b.length !== 12) throw new E("IV must be 12 bytes");
            const e = {
                name: "AES-GCM",
                iv: b,
                tagLength: 128
            };
            d && (e.additionalData = d);
            const f = a.l ? new Uint8Array(c.subarray(12)) : c;
            try {
                return new Uint8Array(yield globalThis.crypto.subtle.decrypt(e, a.key, f))
            } catch (g) {
                throw new E(g.toString());
            }
        })
    },
    K = class {
        constructor({
            key: a,
            l: b
        }) {
            this.key = a;
            this.l = b
        }
        encrypt(a, b, c) {
            const d = this;
            return h(function*() {
                if (a.length !==
                    12) throw new E("IV must be 12 bytes");
                const e = {
                    name: "AES-GCM",
                    iv: a,
                    tagLength: 128
                };
                c && (e.additionalData = c);
                const f = yield globalThis.crypto.subtle.encrypt(e, d.key, b);
                return d.l ? G(a, new Uint8Array(f)) : new Uint8Array(f)
            })
        }
    };

function L({
    key: a,
    l: b
}) {
    return h(function*() {
        if (![16, 32].includes(a.length)) throw new F("unsupported AES key size: ${n}");
        const c = yield globalThis.crypto.subtle.importKey("raw", a, {
            name: "AES-GCM",
            length: a.length
        }, !1, ["encrypt", "decrypt"]);
        return new K({
            key: c,
            l: b
        })
    })
};

function N(a) {
    switch (a) {
        case 1:
            return "P-256";
        case 2:
            return "P-384";
        case 3:
            return "P-521"
    }
}

function O(a) {
    switch (a) {
        case "P-256":
            return 1;
        case "P-384":
            return 2;
        case "P-521":
            return 3
    }
    throw new F("unknown curve: " + a);
}

function P(a) {
    switch (a) {
        case 1:
            return 32;
        case 2:
            return 48;
        case 3:
            return 66
    }
}

function da(a, b) {
    return h(function*() {
        const c = a.algorithm.namedCurve;
        if (!c) throw new F("namedCurve must be provided");
        const d = Object.assign({}, {
                "public": b
            }, a.algorithm),
            e = 8 * P(O(c)),
            f = yield globalThis.crypto.subtle.deriveBits(d, a, e);
        return new Uint8Array(f)
    })
}

function ea(a) {
    return h(function*() {
        return yield globalThis.crypto.subtle.generateKey({
            name: "ECDH",
            namedCurve: a
        }, !0, ["deriveKey", "deriveBits"])
    })
}

function fa(a) {
    return h(function*() {
        const b = yield globalThis.crypto.subtle.exportKey("jwk", a);
        if (b.crv === void 0) throw new F("crv must be provided");
        const c = P(O(b.crv));
        if (b.x === void 0) throw new F("x must be provided");
        if (b.y === void 0) throw new F("y must be provided");
        const d = H(b.x);
        if (d.length !== c) throw new F(`x-coordinate byte-length is invalid (got: ${d.length}, want: ${c}).`);
        const e = H(b.y);
        if (e.length !== c) throw new F(`y-coordinate byte-length is invalid (got: ${e.length}, want: ${c}).`);
        return b
    })
}

function ha(a) {
    return h(function*() {
        const b = a.crv;
        if (!b) throw new F("crv must be provided");
        return yield globalThis.crypto.subtle.importKey("jwk", a, {
            name: "ECDH",
            namedCurve: b
        }, !0, [])
    })
};
var ia = S(1, 0),
    ja = S(2, 16),
    ka = S(2, 18),
    la = S(2, 1),
    ma = S(2, 3),
    na = S(2, 1),
    oa = S(2, 2),
    pa = I("KEM"),
    qa = I("HPKE"),
    T = I("HPKE-v1");

function S(a, b) {
    const c = new Uint8Array(a);
    for (let d = 0; d < a; d++) c[d] = b >> 8 * (a - d - 1) & 255;
    return c
}

function ra({
    J: a,
    I: b,
    F: c
}) {
    return G(qa, a, b, c)
}

function ta({
    o: a,
    m: b,
    i: c
}) {
    return G(T, c, I(a), b)
}

function ua({
    s: a,
    info: b,
    i: c,
    length: d
}) {
    return G(S(2, d), T, c, I(a), b)
}

function va(a, b) {
    return h(function*() {
        var c; {
            const d = P(O(a));
            if (b.length !== 1 + 2 * d || b[0] !== 4) throw new E("invalid point");
            c = {
                kty: "EC",
                crv: a,
                x: J(new Uint8Array(b.subarray(1, 1 + d))),
                y: J(new Uint8Array(b.subarray(1 + d, b.length))),
                ext: !0
            }
        }
        return yield ha(c)
    })
}

function wa(a) {
    return h(function*() {
        const b = a.algorithm,
            c = yield fa(a);
        if (!c.crv) throw new E("Curve has to be defined.");
        var d; {
            const e = P(O(b.namedCurve)),
                f = c.x,
                g = c.y;
            if (f === void 0) throw new F("x must be provided");
            if (g === void 0) throw new F("y must be provided");
            const k = new Uint8Array(1 + 2 * e),
                l = H(g),
                p = H(f);
            k.set(l, 1 + 2 * e - l.length);
            k.set(p, 1 + e - p.length);
            k[0] = 4;
            d = k
        }
        return d
    })
};
var xa = class {
    constructor(a) {
        this.v = a
    }
    seal({
        key: a,
        nonce: b,
        L: c,
        A: d
    }) {
        const e = this;
        return h(function*() {
            if (a.length !== e.v) throw new E("Unexpected key length: " + a.length.toString());
            return yield(yield L({
                key: a,
                l: !1
            })).encrypt(b, c, d)
        })
    }
    open({
        key: a,
        nonce: b,
        G: c,
        A: d
    }) {
        const e = this;
        return h(function*() {
            if (a.length !== e.v) throw new E("Unexpected key length: " + a.length.toString());
            return ca(yield L({
                key: a,
                l: !1
            }), b, c, d)
        })
    }
};
var ya = class {};

function U(a) {
    if (a == null || !(a instanceof Uint8Array)) throw new F("input must be a non null Uint8Array");
};
var za = function(a, b) {
        return h(function*() {
            U(b);
            const c = yield globalThis.crypto.subtle.sign({
                name: "HMAC",
                hash: {
                    name: a.hash
                }
            }, a.key, b);
            return new Uint8Array(c.slice(0, a.g))
        })
    },
    Aa = class extends ya {
        constructor(a, b, c) {
            super();
            this.hash = a;
            this.key = b;
            this.g = c
        }
    };

function Ba(a, b, c) {
    return h(function*() {
        U(b);
        if (!Number.isInteger(c)) throw new F("invalid tag size, must be an integer");
        if (c < 10) throw new F("tag too short, must be at least " + (10).toString() + " bytes");
        switch (a) {
            case "SHA-1":
                if (c > 20) throw new F("tag too long, must not be larger than 20 bytes");
                break;
            case "SHA-256":
                if (c > 32) throw new F("tag too long, must not be larger than 32 bytes");
                break;
            case "SHA-384":
                if (c > 48) throw new F("tag too long, must not be larger than 48 bytes");
                break;
            case "SHA-512":
                if (c >
                    64) throw new F("tag too long, must not be larger than 64 bytes");
                break;
            default:
                throw new F(a + " is not supported");
        }
        const d = yield globalThis.crypto.subtle.importKey("raw", b, {
            name: "HMAC",
            hash: {
                name: a
            },
            length: b.length * 8
        }, !1, ["sign", "verify"]);
        return new Aa(a, d, c)
    })
};
var Ca = function(a, b, c) {
        return h(function*() {
            U(b);
            const d = V(a);
            let e;
            ((e = c) == null ? 0 : e.length) || (c = new Uint8Array(d));
            U(c);
            return yield za(yield Ba(a.u, c, d), b)
        })
    },
    W = function(a, {
        m: b,
        o: c,
        i: d,
        salt: e
    }) {
        return h(function*() {
            return yield Ca(a, ta({
                o: c,
                m: b,
                i: d
            }), e)
        })
    },
    Da = function(a, b, c, d) {
        return h(function*() {
            if (!Number.isInteger(d)) throw new E("length must be an integer");
            if (d <= 0) throw new E("length must be positive");
            const e = V(a);
            if (d > 255 * e) throw new E("length too large");
            U(c);
            const f = yield Ba(a.u, b, e);
            let g =
                1,
                k = 0,
                l = new Uint8Array(0);
            const p = new Uint8Array(d);
            for (;;) {
                const q = new Uint8Array(l.length + c.length + 1);
                q.set(l, 0);
                q.set(c, l.length);
                q[q.length - 1] = g;
                l = yield za(f, q);
                if (k + l.length < d) p.set(l, k), k += l.length, g++;
                else {
                    p.set(l.subarray(0, d - k), k);
                    break
                }
            }
            return p
        })
    },
    Ea = function(a, {
        D: b,
        info: c,
        s: d,
        i: e,
        length: f
    }) {
        return h(function*() {
            return yield Da(a, b, ua({
                s: d,
                info: c,
                i: e,
                length: f
            }), f)
        })
    },
    Fa = function(a, {
        m: b,
        o: c,
        info: d,
        s: e,
        i: f,
        length: g,
        salt: k
    }) {
        return h(function*() {
            const l = yield Ca(a, ta({
                o: c,
                m: b,
                i: f
            }), k);
            return yield Da(a,
                l, ua({
                    s: e,
                    info: d,
                    i: f,
                    length: g
                }), g)
        })
    },
    V = function(a) {
        switch (a.u) {
            case "SHA-256":
                return 32;
            case "SHA-512":
                return 64
        }
    },
    X = class {
        constructor(a) {
            this.u = a
        }
    };
var Ga = function(a) {
        var b = a.g;
        const c = new Uint8Array(12);
        for (let f = 0; f < 12; f++) c[f] = Number(b >> BigInt(8 * (12 - f - 1))) & 255;
        var d = a.h;
        if (d.length !== c.length) throw new F("Both byte arrays should be of the same length");
        const e = new Uint8Array(d.length);
        for (let f = 0; f < e.length; f++) e[f] = d[f] ^ c[f];
        if (a.g >= a.j) throw new E("message limit reached");
        a.g += BigInt(1);
        return e
    },
    Ha = class {
        constructor(a, b, c, d) {
            this.B = a;
            this.key = b;
            this.h = c;
            this.aead = d;
            this.g = BigInt(0);
            this.j = (BigInt(1) << BigInt(96)) - BigInt(1)
        }
        seal(a, b) {
            const c =
                this;
            return h(function*() {
                const d = Ga(c);
                return yield c.aead.seal({
                    key: c.key,
                    nonce: d,
                    L: a,
                    A: b
                })
            })
        }
        open(a, b) {
            const c = this;
            return h(function*() {
                const d = Ga(c);
                return c.aead.open({
                    key: c.key,
                    nonce: d,
                    G: a,
                    A: b
                })
            })
        }
    };

function Ia(a, b, c, d, e, f) {
    return h(function*() {
        var g;
        a: {
            switch (e.v) {
                case 16:
                    g = na;
                    break a;
                case 32:
                    g = oa;
                    break a
            }
            g = void 0
        }
        var k;
        a: {
            switch (d.u) {
                case "SHA-256":
                    k = la;
                    break a;
                case "SHA-512":
                    k = ma;
                    break a
            }
            k = void 0
        }
        const l = ra({
                J: Ja(c),
                I: k,
                F: g
            }),
            p = W(d, {
                m: new Uint8Array(0),
                o: "psk_id_hash",
                i: l
            }),
            q = yield W(d, {
                m: f,
                o: "info_hash",
                i: l
            }), x = yield p, v = G(ia, x, q), m = yield W(d, {
                m: new Uint8Array(0),
                o: "secret",
                i: l,
                salt: b
            }), t = Ea(d, {
                D: m,
                info: v,
                s: "key",
                i: l,
                length: e.v
            }), u = yield Ea(d, {
                    D: m,
                    info: v,
                    s: "base_nonce",
                    i: l,
                    length: 12
                }), w =
                yield t;
        return new Ha(a, w, u, e)
    })
}

function Ka(a, b, c, d, e) {
    return h(function*() {
        const f = yield La(b, a);
        return yield Ia(f.B, f.M, b, c, d, e)
    })
};
var Ma = function(a) {
        return h(function*() {
            return yield wa(a.publicKey)
        })
    },
    Na = class {
        constructor(a, b) {
            this.privateKey = a;
            this.publicKey = b
        }
    };

function Oa(a) {
    return h(function*() {
        Pa(a.privateKey, "private");
        Pa(a.publicKey, "public");
        return new Na(a.privateKey, a.publicKey)
    })
}

function Pa(a, b) {
    if (b !== a.type) throw new F(`keyPair ${b} key was of type ${a.type}`);
    const c = a.algorithm;
    if ("ECDH" !== c.name) throw new F(`keyPair ${b} key should be ECDH but found ${c.name}`);
};
var Ra = function(a) {
        switch (a) {
            case 1:
                return new Qa(new X("SHA-256"), 1);
            case 3:
                return new Qa(new X("SHA-512"), 3)
        }
    },
    Ja = function(a) {
        switch (a.g) {
            case 1:
                return ja;
            case 3:
                return ka
        }
    },
    La = function(a, b) {
        return h(function*() {
            const c = yield ea(N(a.g));
            return yield a.h(b, yield Oa(c))
        })
    },
    Sa = function(a, b, c, d) {
        return h(function*() {
            const e = G(c, d),
                f = G(pa, Ja(a));
            return yield Fa(a.j, {
                m: b,
                o: "eae_prk",
                info: e,
                s: "shared_secret",
                i: f,
                length: V(a.j)
            })
        })
    },
    Qa = class {
        constructor(a, b) {
            this.j = a;
            this.g = b;
            this.TEST_ONLY = this.h
        }
        h(a, b) {
            const c =
                this;
            return h(function*() {
                const d = yield va(N(c.g), a), e = da(b.privateKey, d), f = yield Ma(b), g = yield e;
                return {
                    M: yield Sa(c, g, f, a), B: f
                }
            })
        }
    };
/*

 Copyright 2024 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
function Ta(a, b) {
    var c;
    c || (c = new Uint8Array(0));
    let d, e, f;
    switch (a) {
        case 1:
            d = Ra(1);
            e = new X("SHA-256");
            f = new xa(16);
            break;
        case 2:
            d = Ra(3);
            e = new X("SHA-512");
            f = new xa(32);
            break;
        default:
            throw new E(`Unknown HPKE parameters: ${a}`);
    }
    let g = Ka(b, d, e, f, c);
    return k => h(function*() {
        if (!g) throw new E("Context has already been used");
        const l = g;
        g = null;
        const p = yield l, q = yield p.seal(k, new Uint8Array(0));
        return G(p.B, q)
    })
};
var Ua = function(a, b) {
        return h(function*() {
            if (a.status) return Y(a.status);
            try {
                const e = D(a.j(b)),
                    f = yield a.context(e);
                var c;
                if (f.length <= 8192) c = String.fromCharCode.apply(null, f);
                else {
                    var d = "";
                    for (let k = 0; k < f.length; k += 8192) d += String.fromCharCode.apply(null, Array.prototype.slice.call(f, k, k + 8192));
                    c = d
                }
                let g = a.j(c);
                g = g.replace(/\//g, "_");
                g = g.replace(/\+/g, "-");
                return Y(0, g)
            } catch (e) {
                return Y(6)
            }
        })
    },
    Wa = class {
        constructor(a, b) {
            this.g = 0;
            this.context = () => h(function*() {
                return new Uint8Array(0)
            });
            this.j = e => b(e);
            if (a) {
                this.K = a.id;
                var c = a.hpkePublicKey.params.kdf,
                    d = a.hpkePublicKey.params.aead;
                if (a.hpkePublicKey.params.kem === "DHKEM_P256_HKDF_SHA256" && c === "HKDF_SHA256" && d === "AES_128_GCM") {
                    this.h = 1;
                    this.C = a;
                    try {
                        let e;
                        const f = D((e = this.C) == null ? void 0 : e.hpkePublicKey.publicKey);
                        f && this.h ? this.context = Ta(this.h, f) : this.status = 11
                    } catch (e) {
                        this.status = 6
                    }
                } else this.status = 7
            } else this.status = 8
        }
        setTimeout(a) {
            this.g = a
        }
        encrypt(a) {
            const b = Ua(this, a);
            return this.g ? Promise.race([b, Va(this.g).then(() => Y(14))]) : b
        }
        getEncryptionKeyId() {
            return this.K
        }
    };

function Y(a, b) {
    return a === 0 ? {
        cipherText: b,
        status: a
    } : {
        status: a
    }
}

function Va(a) {
    return new Promise(b => void setTimeout(b, a))
};

function Xa(a) {
    switch (a) {
        case 0:
            break;
        case 9:
            return "e4";
        case 6:
            return "e5";
        case 14:
            return "e6";
        default:
            return "e7"
    }
};
const Ya = /^[0-9A-Fa-f]{64}$/;

function Za(a) {
    try {
        return (new TextEncoder).encode(a)
    } catch (b) {
        const c = [];
        for (let d = 0; d < a.length; d++) {
            let e = a.charCodeAt(d);
            e < 128 ? c.push(e) : e < 2048 ? c.push(192 | e >> 6, 128 | e & 63) : e < 55296 || e >= 57344 ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63))
        }
        return new Uint8Array(c)
    }
}

function $a(a, b) {
    if (a === "" || a === "e0") return Promise.resolve(a);
    let c;
    if ((c = b.crypto) == null ? 0 : c.subtle) {
        if (Ya.test(a)) return Promise.resolve(a);
        try {
            const d = Za(a);
            return b.crypto.subtle.digest("SHA-256", d).then(e => {
                const f = Array.from(new Uint8Array(e)).map(g => String.fromCharCode(g)).join("");
                return b.btoa(f).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
            }).catch(() => "e2")
        } catch (d) {
            return Promise.resolve("e2")
        }
    } else return Promise.resolve("e1")
};
var ab = class {};
var bb = class extends ab {
    constructor(a) {
        super();
        this.key = a;
        this.g = new K({
            key: a,
            l: !0
        })
    }
    encrypt(a, b) {
        const c = this;
        return h(function*() {
            if (!Number.isInteger(12)) throw new F("n must be a nonnegative integer");
            const d = new Uint8Array(12);
            globalThis.crypto.getRandomValues(d);
            return c.g.encrypt(d, a, b)
        })
    }
};
const Z = {};

function cb(a) {
    var b = globalThis.btoa;
    Z[a] = Z[a] || db(a);
    const c = eb(),
        d = c.then(f => fb(f)),
        e = Promise.all([Z[a], d]).then(([f, g]) => gb(f, g));
    return {
        encryptMessage: f => h(function*() {
            const g = (new bb(yield c)).encrypt(D(b(f)));
            return {
                encryptedExportedAesKeyAsBase64: A(new Uint8Array(yield e)),
                encryptedPayloadAsBase64: A(yield g)
            }
        })
    }
}

function eb() {
    return h(function*() {
        return globalThis.crypto.subtle.generateKey({
            name: "AES-GCM",
            length: 256
        }, !0, ["encrypt", "decrypt"])
    })
}

function fb(a) {
    return h(function*() {
        return globalThis.crypto.subtle.exportKey("raw", a)
    })
}

function gb(a, b) {
    return h(function*() {
        return globalThis.crypto.subtle.encrypt({
            name: "RSA-OAEP"
        }, a, b)
    })
}

function db(a) {
    return h(function*() {
        return globalThis.crypto.subtle.importKey("spki", D(a), {
            name: "RSA-OAEP",
            hash: {
                name: "SHA-256"
            }
        }, !1, ["encrypt"])
    })
};
/*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
*/
var hb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    ib = function(a) {
        var b;
        if (!(b = !a)) {
            var c;
            if (a == null) c = String(a);
            else {
                var d = hb.exec(Object.prototype.toString.call(Object(a)));
                c = d ? d[1].toLowerCase() : "object"
            }
            b = c != "object"
        }
        if (b || a.nodeType || a == a.window) return !1;
        try {
            if (a.constructor && !Object.prototype.hasOwnProperty.call(Object(a), "constructor") && !Object.prototype.hasOwnProperty.call(Object(a.constructor.prototype), "isPrototypeOf")) return !1
        } catch (f) {
            return !1
        }
        for (var e in a);
        return e ===
            void 0 || Object.prototype.hasOwnProperty.call(Object(a), e)
    };
var jb = function(a, b) {
        b = a.g + b;
        let c = b.indexOf("\n\n");
        for (; c !== -1;) {
            var d;
            a: {
                const [w, B] = b.substring(0, c).split("\n");
                if (w.indexOf("event: message") === 0 && B.indexOf("data: ") === 0) try {
                    d = JSON.parse(B.substring(B.indexOf(":") + 1));
                    break a
                } catch (y) {}
                d = void 0
            }
            var e = a,
                f = d;
            if (f) {
                var g = f.send_pixel,
                    k = f.options,
                    l = e.h;
                if (g) {
                    var p = g || [];
                    if (Array.isArray(p)) {
                        var q = ib(k) ? k : {};
                        for (const w of p) l(w, q)
                    }
                }
                var x = f.create_iframe,
                    v = f.options,
                    m = e.j;
                if (x && m) {
                    var t = x || [];
                    if (Array.isArray(t)) {
                        var u = ib(v) ? v : {};
                        for (const w of t) m(w,
                            u)
                    }
                }
            }
            b = b.substring(c + 2);
            c = b.indexOf("\n\n")
        }
        a.g = b
    },
    kb = class {
        constructor(a) {
            this.h = a;
            this.g = ""
        }
    };
var lb = {
    N: 0,
    O: 1,
    0: "GET",
    1: "POST"
};
var nb = function(a, b, c) {
        return h(function*() {
            var d;
            a: {
                try {
                    const g = JSON.parse(c.encryptionKeyString || "").keys,
                        k = g[Math.floor(Math.random() * g.length)];
                    d = k && k.hpkePublicKey && k.hpkePublicKey.params && k.hpkePublicKey.params.kem && k.hpkePublicKey.params.kdf && k.hpkePublicKey.params.aead && k.hpkePublicKey.version !== void 0 && k.id && k.hpkePublicKey.publicKey ? k : void 0;
                    break a
                } catch (g) {}
                d = void 0
            }
            const e = d,
                f = new Wa(e, a.g.btoa);
            return mb(a, a.g.performance.now(), (e == null ? void 0 : e.id) || "undefined", f.encrypt(b))
        })
    },
    ob =
    function(a, b, c) {
        return h(function*() {
            return mb(a, a.g.performance.now(), "unknown", cb(c.encryptionKeyString || "").encryptMessage(b).then(d => ({
                cipherText: d.encryptedPayloadAsBase64 + "!" + d.encryptedExportedAesKeyAsBase64,
                status: 0
            })))
        })
    },
    rb = function(a, b) {
        return h(function*() {
            if (!b.url) return {
                failureType: 9,
                command: 0,
                data: "url required."
            };
            const c = yield pb(a, b);
            if ("failureType" in c) return c;
            yield qb(a, c, b);
            return c
        })
    },
    sb = function(a, b, c, d) {
        h(function*() {
            let e;
            const f = b.commandType,
                g = b.params;
            switch (f) {
                case 0:
                    e =
                        yield rb(a, g);
                    break;
                default:
                    e = {
                        failureType: 8,
                        command: f,
                        data: `Command with type ${f} unknown.`
                    }
            }
            "failureType" in e ? d(e) : c(e)
        })
    },
    pb = function(a, b) {
        return h(function*() {
            function c(m) {
                return h(function*() {
                    const [t, u] = m.split("|");
                    let [w, B] = t.split("."), y = B, C = k[w];
                    C || (C = t, y = "");
                    const R = M => h(function*() {
                        try {
                            return yield x(u)(M)
                        } catch (Q) {
                            throw new tb(Q.message);
                        }
                    });
                    if (!y) {
                        if (typeof C === "string") return yield R(C);
                        const M = C,
                            Q = Object.keys(M).map(sa => h(function*() {
                                const vb = yield R(M[sa]);
                                return `${sa}=${vb}`
                            }));
                        return (yield Promise.all(Q)).join("&")
                    }
                    return typeof C === "object" && C[y] ? yield R(C[y]): m
                })
            }

            function d(m) {
                return h(function*() {
                    let t, u = "";
                    for (; m.match(q) && u !== m;) {
                        u = m;
                        t = m.matchAll(q);
                        const w = [...t].map(y => c(y[1])),
                            B = yield Promise.all(w);
                        B.length !== 0 && (m = m.replace(q, y => B.shift() || y))
                    }
                    return m
                })
            }
            let {
                url: e,
                body: f
            } = b;
            const {
                attributionReporting: g,
                templates: k,
                processResponse: l,
                method: p = 0
            } = b, q = RegExp("\\${([^${}]*?)}", "g"), x = m => {
                if (m == null) return u => h(function*() {
                    return u
                });
                const t = a.h[m];
                if (t == null) throw Error(`Unknown filter: ${m}`);
                return u => h(function*() {
                    return yield t(u, b)
                })
            };
            try {
                e = yield d(e), f = f ? yield d(f): void 0
            } catch (m) {
                return {
                    failureType: 9,
                    command: 0,
                    data: `Failed to inject template values: ${m}`
                }
            }
            const v = {
                method: lb[p],
                credentials: "include",
                body: p === 1 ? f : void 0,
                keepalive: !0,
                redirect: "follow"
            };
            l || (v.mode = "no-cors");
            g && (v.attributionReporting = {
                eventSourceEligible: !1,
                triggerEligible: !0
            });
            try {
                const m = yield a.g.fetch(e, v);
                return l && !m.ok ? {
                    failureType: 9,
                    command: 0,
                    data: "Fetch failed"
                } : {
                    data: l ? yield m.text(): e
                }
            } catch (m) {
                return {
                    failureType: 9,
                    command: 0,
                    data: `Fetch failed: ${m}`
                }
            }
        })
    },
    qb = function(a, b, c) {
        return h(function*() {
            if (c.processResponse) {
                var d = [];
                jb(new kb((e, f) => {
                    d.push(pb(a, {
                        url: e,
                        method: 0,
                        templates: c.templates,
                        processResponse: !1,
                        attributionReporting: f.attribution_reporting
                    }))
                }), b.data);
                return Promise.all(d)
            }
        })
    },
    mb = function(a, b, c, d) {
        return d.then(e => {
                const f = a.g.performance.now(),
                    g = [`emkid.${c}~`, `ev.${encodeURIComponent(e.cipherText||"")}`, `&_es=${e.status}`];
                b && f && g.push(`&_est=${Math.round(f)-Math.round(b)}`);
                return g.join("")
            },
            () => [`ec.${Xa(15)}`, "&_es=15"].join("")).catch(() => [`ec.${Xa(16)}`, "&_es=16"].join(""))
    },
    ub = class {
        constructor(a) {
            this.g = a;
            this.h = {
                sha256: b => {
                    const c = this;
                    return h(function*() {
                        return yield $a(b, c.g)
                    })
                },
                encode: b => h(function*() {
                    return encodeURIComponent(b)
                }),
                encrypt: (b, c) => {
                    const d = this;
                    return h(function*() {
                        return yield nb(d, b, c)
                    })
                },
                encryptRsa: (b, c) => {
                    const d = this;
                    return h(function*() {
                        return yield ob(d, b, c)
                    })
                }
            }
        }
    };
class tb extends Error {
    constructor(a) {
        super(a)
    }
};
var wb = function(a, b, c) {
    a.g[b] == null && (a.g[b] = 0, a.h[b] = c, a.j++);
    a.g[b]++;
    return {
        targetId: a.id,
        clientCount: a.j,
        totalLifeMs: Math.round(c - a.C),
        heartbeatCount: a.g[b],
        clientLifeMs: Math.round(c - a.h[b])
    }
};
class xb {
    constructor(a) {
        this.C = a;
        this.g = {};
        this.h = {};
        this.j = 0;
        this.id = String(Math.floor(Number.MAX_SAFE_INTEGER * Math.random()))
    }
}

function yb(a) {
    return a.performance && a.performance.now() || Date.now()
}
var zb = function(a, b) {
    class c {
        constructor(d, e) {
            this.h = d;
            this.g = e;
            this.j = new xb(yb(e))
        }
        H(d, e) {
            const f = d.clientId;
            if (d.type === 0) d.stats = wb(this.j, f, yb(this.g)), e(d);
            else if (d.type === 1) try {
                this.h(d.command, g => {
                    d.result = g;
                    e(d)
                }, g => {
                    d.failure = g;
                    e(d)
                })
            } catch (g) {
                d.failure = {
                    failureType: 11,
                    data: g.toString()
                }, e(d)
            }
        }
    }
    return new c(a, b)
};
(function(a) {
    a.g.addEventListener("install", () => {
        a.g.skipWaiting()
    });
    a.g.addEventListener("activate", b => {
        b.waitUntil(a.g.clients.claim())
    });
    a.g.addEventListener("message", b => {
        const c = b.source;
        if (c) {
            var d = b.data,
                e = new Promise(f => {
                    a.h.H(d, g => {
                        c.postMessage(g);
                        f(void 0)
                    })
                });
            b.waitUntil(e)
        }
    })
})(new class {
    constructor(a) {
        this.g = a;
        const b = new ub(a);
        this.h = zb((c, d, e) => {
            sb(b, c, d, e)
        }, a)
    }
}(self));