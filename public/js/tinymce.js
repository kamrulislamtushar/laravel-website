/* Ephox TinyMCE Cloud
 *
 * Copyright 2010-2018 Ephox Corporation. All rights reserved.
 *
 * Version: 4.9.2-117
 */
// 4.9.2 (2018-12-17)
! function() {
    "use strict";
    var o = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
        },
        H = function(n, r) {
            return function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return n(r.apply(null, e))
            }
        },
        j = function(e) {
            return function() {
                return e
            }
        },
        q = function(e) {
            return e
        };

    function d(r) {
        for (var o = [], e = 1; e < arguments.length; e++) o[e - 1] = arguments[e];
        return function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var n = o.concat(e);
            return r.apply(null, n)
        }
    }
    var e, t, n, r, i, a, u, s, c, l, f, m, g, p, h, v, b, y = function(n) {
            return function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return !n.apply(null, e)
            }
        },
        C = j(!1),
        x = j(!0),
        w = C,
        N = x,
        E = function() {
            return S
        },
        S = (r = {
            fold: function(e, t) {
                return e()
            },
            is: w,
            isSome: w,
            isNone: N,
            getOr: n = function(e) {
                return e
            },
            getOrThunk: t = function(e) {
                return e()
            },
            getOrDie: function(e) {
                throw new Error(e || "error: getOrDie called on none.")
            },
            getOrNull: function() {
                return null
            },
            getOrUndefined: function() {
                return undefined
            },
            or: n,
            orThunk: t,
            map: E,
            ap: E,
            each: function() {},
            bind: E,
            flatten: E,
            exists: w,
            forall: N,
            filter: E,
            equals: e = function(e) {
                return e.isNone()
            },
            equals_: e,
            toArray: function() {
                return []
            },
            toString: j("none()")
        }, Object.freeze && Object.freeze(r), r),
        k = function(n) {
            var e = function() {
                    return n
                },
                t = function() {
                    return o
                },
                r = function(e) {
                    return e(n)
                },
                o = {
                    fold: function(e, t) {
                        return t(n)
                    },
                    is: function(e) {
                        return n === e
                    },
                    isSome: N,
                    isNone: w,
                    getOr: e,
                    getOrThunk: e,
                    getOrDie: e,
                    getOrNull: e,
                    getOrUndefined: e,
                    or: t,
                    orThunk: t,
                    map: function(e) {
                        return k(e(n))
                    },
                    ap: function(e) {
                        return e.fold(E, function(e) {
                            return k(e(n))
                        })
                    },
                    each: function(e) {
                        e(n)
                    },
                    bind: r,
                    flatten: e,
                    exists: r,
                    forall: r,
                    filter: function(e) {
                        return e(n) ? o : S
                    },
                    equals: function(e) {
                        return e.is(n)
                    },
                    equals_: function(e, t) {
                        return e.fold(w, function(e) {
                            return t(n, e)
                        })
                    },
                    toArray: function() {
                        return [n]
                    },
                    toString: function() {
                        return "some(" + n + ")"
                    }
                };
            return o
        },
        A = {
            some: k,
            none: E,
            from: function(e) {
                return null === e || e === undefined ? S : k(e)
            }
        },
        T = function(t) {
            return function(e) {
                return function(e) {
                    if (null === e) return "null";
                    var t = typeof e;
                    return "object" === t && Array.prototype.isPrototypeOf(e) ? "array" : "object" === t && String.prototype.isPrototypeOf(e) ? "string" : t
                }(e) === t
            }
        },
        R = T("string"),
        _ = T("object"),
        D = T("array"),
        B = T("null"),
        O = T("boolean"),
        P = T("function"),
        L = T("number"),
        I = (i = Array.prototype.indexOf) === undefined ? function(e, t) {
            return X(e, t)
        } : function(e, t) {
            return i.call(e, t)
        },
        M = function(e, t) {
            return -1 < I(e, t)
        },
        $ = function(e, t) {
            for (var n = e.length, r = new Array(n), o = 0; o < n; o++) {
                var i = e[o];
                r[o] = t(i, o, e)
            }
            return r
        },
        F = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++) t(e[n], n, e)
        },
        W = function(e, t) {
            for (var n = [], r = [], o = 0, i = e.length; o < i; o++) {
                var a = e[o];
                (t(a, o, e) ? n : r).push(a)
            }
            return {
                pass: n,
                fail: r
            }
        },
        z = function(e, t) {
            for (var n = [], r = 0, o = e.length; r < o; r++) {
                var i = e[r];
                t(i, r, e) && n.push(i)
            }
            return n
        },
        U = function(e, t, n) {
            return F(e, function(e) {
                n = t(n, e)
            }), n
        },
        V = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++) {
                var o = e[n];
                if (t(o, n, e)) return A.some(o)
            }
            return A.none()
        },
        K = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (t(e[n], n, e)) return A.some(n);
            return A.none()
        },
        X = function(e, t) {
            for (var n = 0, r = e.length; n < r; ++n)
                if (e[n] === t) return n;
            return -1
        },
        Y = Array.prototype.push,
        G = function(e, t) {
            return function(e) {
                for (var t = [], n = 0, r = e.length; n < r; ++n) {
                    if (!Array.prototype.isPrototypeOf(e[n])) throw new Error("Arr.flatten item " + n + " was not an array, input: " + e);
                    Y.apply(t, e[n])
                }
                return t
            }($(e, t))
        },
        J = function(e, t) {
            for (var n = 0, r = e.length; n < r; ++n)
                if (!0 !== t(e[n], n, e)) return !1;
            return !0
        },
        Q = Array.prototype.slice,
        Z = function(e, t) {
            return z(e, function(e) {
                return !M(t, e)
            })
        },
        ee = function(e) {
            return 0 === e.length ? A.none() : A.some(e[0])
        },
        te = function(e) {
            return 0 === e.length ? A.none() : A.some(e[e.length - 1])
        },
        ne = P(Array.from) ? Array.from : function(e) {
            return Q.call(e)
        },
        re = "undefined" != typeof window ? window : Function("return this;")(),
        oe = function(e, t) {
            return function(e, t) {
                for (var n = t !== undefined && null !== t ? t : re, r = 0; r < e.length && n !== undefined && null !== n; ++r) n = n[e[r]];
                return n
            }(e.split("."), t)
        },
        ie = {
            getOrDie: function(e, t) {
                var n = oe(e, t);
                if (n === undefined || null === n) throw e + " not available on this browser";
                return n
            }
        },
        ae = function() {
            return ie.getOrDie("URL")
        },
        ue = {
            createObjectURL: function(e) {
                return ae().createObjectURL(e)
            },
            revokeObjectURL: function(e) {
                ae().revokeObjectURL(e)
            }
        },
        se = navigator,
        ce = se.userAgent,
        le = function(e) {
            return "matchMedia" in window && matchMedia(e).matches
        };
    g = /Android/.test(ce), u = (u = !(a = /WebKit/.test(ce)) && /MSIE/gi.test(ce) && /Explorer/gi.test(se.appName)) && /MSIE (\w+)\./.exec(ce)[1], s = -1 !== ce.indexOf("Trident/") && (-1 !== ce.indexOf("rv:") || -1 !== se.appName.indexOf("Netscape")) && 11, c = -1 !== ce.indexOf("Edge/") && !u && !s && 12, u = u || s || c, l = !a && !s && /Gecko/.test(ce), f = -1 !== ce.indexOf("Mac"), m = /(iPad|iPhone)/.test(ce), p = "FormData" in window && "FileReader" in window && "URL" in window && !!ue.createObjectURL, h = le("only screen and (max-device-width: 480px)") && (g || m), v = le("only screen and (min-width: 800px)") && (g || m), b = -1 !== ce.indexOf("Windows Phone"), c && (a = !1);
    var fe, de = {
            opera: !1,
            webkit: a,
            ie: u,
            gecko: l,
            mac: f,
            iOS: m,
            android: g,
            contentEditable: !m || p || 534 <= parseInt(ce.match(/AppleWebKit\/(\d*)/)[1], 10),
            transparentSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            caretAfter: 8 !== u,
            range: window.getSelection && "Range" in window,
            documentMode: u && !c ? document.documentMode || 7 : 10,
            fileApi: p,
            ceFalse: !1 === u || 8 < u,
            cacheSuffix: null,
            container: null,
            overrideViewPort: null,
            experimentalShadowDom: !1,
            canHaveCSP: !1 === u || 11 < u,
            desktop: !h && !v,
            windowsPhone: b
        },
        me = window.Promise ? window.Promise : function() {
            function r(e, t) {
                return function() {
                    e.apply(t, arguments)
                }
            }
            var e = Array.isArray || function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                i = function(e) {
                    if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof e) throw new TypeError("not a function");
                    this._state = null, this._value = null, this._deferreds = [], l(e, r(o, this), r(u, this))
                },
                t = i.immediateFn || "function" == typeof setImmediate && setImmediate || function(e) {
                    setTimeout(e, 1)
                };

            function a(r) {
                var o = this;
                null !== this._state ? t(function() {
                    var e = o._state ? r.onFulfilled : r.onRejected;
                    if (null !== e) {
                        var t;
                        try {
                            t = e(o._value)
                        } catch (n) {
                            return void r.reject(n)
                        }
                        r.resolve(t)
                    } else(o._state ? r.resolve : r.reject)(o._value)
                }) : this._deferreds.push(r)
            }

            function o(e) {
                try {
                    if (e === this) throw new TypeError("A promise cannot be resolved with itself.");
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var t = e.then;
                        if ("function" == typeof t) return void l(r(t, e), r(o, this), r(u, this))
                    }
                    this._state = !0, this._value = e, s.call(this)
                } catch (n) {
                    u.call(this, n)
                }
            }

            function u(e) {
                this._state = !1, this._value = e, s.call(this)
            }

            function s() {
                for (var e = 0, t = this._deferreds.length; e < t; e++) a.call(this, this._deferreds[e]);
                this._deferreds = null
            }

            function c(e, t, n, r) {
                this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.resolve = n, this.reject = r
            }

            function l(e, t, n) {
                var r = !1;
                try {
                    e(function(e) {
                        r || (r = !0, t(e))
                    }, function(e) {
                        r || (r = !0, n(e))
                    })
                } catch (o) {
                    if (r) return;
                    r = !0, n(o)
                }
            }
            return i.prototype["catch"] = function(e) {
                return this.then(null, e)
            }, i.prototype.then = function(n, r) {
                var o = this;
                return new i(function(e, t) {
                    a.call(o, new c(n, r, e, t))
                })
            }, i.all = function() {
                var s = Array.prototype.slice.call(1 === arguments.length && e(arguments[0]) ? arguments[0] : arguments);
                return new i(function(o, i) {
                    if (0 === s.length) return o([]);
                    var a = s.length;

                    function u(t, e) {
                        try {
                            if (e && ("object" == typeof e || "function" == typeof e)) {
                                var n = e.then;
                                if ("function" == typeof n) return void n.call(e, function(e) {
                                    u(t, e)
                                }, i)
                            }
                            s[t] = e, 0 == --a && o(s)
                        } catch (r) {
                            i(r)
                        }
                    }
                    for (var e = 0; e < s.length; e++) u(e, s[e])
                })
            }, i.resolve = function(t) {
                return t && "object" == typeof t && t.constructor === i ? t : new i(function(e) {
                    e(t)
                })
            }, i.reject = function(n) {
                return new i(function(e, t) {
                    t(n)
                })
            }, i.race = function(o) {
                return new i(function(e, t) {
                    for (var n = 0, r = o.length; n < r; n++) o[n].then(e, t)
                })
            }, i
        }(),
        ge = function(e, t) {
            return "number" != typeof t && (t = 0), setTimeout(e, t)
        },
        pe = function(e, t) {
            return "number" != typeof t && (t = 1), setInterval(e, t)
        },
        he = function(t, n) {
            var r, e;
            return (e = function() {
                var e = arguments;
                clearTimeout(r), r = ge(function() {
                    t.apply(this, e)
                }, n)
            }).stop = function() {
                clearTimeout(r)
            }, e
        },
        ve = {
            requestAnimationFrame: function(e, t) {
                fe ? fe.then(e) : fe = new me(function(e) {
                    t || (t = document.body),
                        function(e, t) {
                            var n, r = window.requestAnimationFrame,
                                o = ["ms", "moz", "webkit"];
                            for (n = 0; n < o.length && !r; n++) r = window[o[n] + "RequestAnimationFrame"];
                            r || (r = function(e) {
                                window.setTimeout(e, 0)
                            }), r(e, t)
                        }(e, t)
                }).then(e)
            },
            setTimeout: ge,
            setInterval: pe,
            setEditorTimeout: function(e, t, n) {
                return ge(function() {
                    e.removed || t()
                }, n)
            },
            setEditorInterval: function(e, t, n) {
                var r;
                return r = pe(function() {
                    e.removed ? clearInterval(r) : t()
                }, n)
            },
            debounce: he,
            throttle: he,
            clearInterval: function(e) {
                return clearInterval(e)
            },
            clearTimeout: function(e) {
                return clearTimeout(e)
            }
        },
        be = /^(?:mouse|contextmenu)|click/,
        ye = {
            keyLocation: 1,
            layerX: 1,
            layerY: 1,
            returnValue: 1,
            webkitMovementX: 1,
            webkitMovementY: 1,
            keyIdentifier: 1
        },
        Ce = function() {
            return !1
        },
        xe = function() {
            return !0
        },
        we = function(e, t, n, r) {
            e.addEventListener ? e.addEventListener(t, n, r || !1) : e.attachEvent && e.attachEvent("on" + t, n)
        },
        Ne = function(e, t, n, r) {
            e.removeEventListener ? e.removeEventListener(t, n, r || !1) : e.detachEvent && e.detachEvent("on" + t, n)
        },
        Ee = function(e, t) {
            var n, r, o = t || {};
            for (n in e) ye[n] || (o[n] = e[n]);
            if (o.target || (o.target = o.srcElement || document), de.experimentalShadowDom && (o.target = function(e, t) {
                if (e.composedPath) {
                    var n = e.composedPath();
                    if (n && 0 < n.length) return n[0]
                }
                return t
            }(e, o.target)), e && be.test(e.type) && e.pageX === undefined && e.clientX !== undefined) {
                var i = o.target.ownerDocument || document,
                    a = i.documentElement,
                    u = i.body;
                o.pageX = e.clientX + (a && a.scrollLeft || u && u.scrollLeft || 0) - (a && a.clientLeft || u && u.clientLeft || 0), o.pageY = e.clientY + (a && a.scrollTop || u && u.scrollTop || 0) - (a && a.clientTop || u && u.clientTop || 0)
            }
            return o.preventDefault = function() {
                o.isDefaultPrevented = xe, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            }, o.stopPropagation = function() {
                o.isPropagationStopped = xe, e && (e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0)
            }, !(o.stopImmediatePropagation = function() {
                o.isImmediatePropagationStopped = xe, o.stopPropagation()
            }) == ((r = o).isDefaultPrevented === xe || r.isDefaultPrevented === Ce) && (o.isDefaultPrevented = Ce, o.isPropagationStopped = Ce, o.isImmediatePropagationStopped = Ce), "undefined" == typeof o.metaKey && (o.metaKey = !1), o
        },
        Se = function(e, t, n) {
            var r = e.document,
                o = {
                    type: "ready"
                };
            if (n.domLoaded) t(o);
            else {
                var i = function() {
                        return "complete" === r.readyState || "interactive" === r.readyState && r.body
                    },
                    a = function() {
                        n.domLoaded || (n.domLoaded = !0, t(o))
                    },
                    u = function() {
                        i() && (Ne(r, "readystatechange", u), a())
                    },
                    s = function() {
                        try {
                            r.documentElement.doScroll("left")
                        } catch (e) {
                            return void ve.setTimeout(s)
                        }
                        a()
                    };
                !r.addEventListener || de.ie && de.ie < 11 ? (we(r, "readystatechange", u), r.documentElement.doScroll && e.self === e.top && s()) : i() ? a() : we(e, "DOMContentLoaded", a), we(e, "load", a)
            }
        },
        ke = function() {
            var m, g, p, h, v, b = this,
                y = {};
            g = "mce-data-" + (+new Date).toString(32), h = "onmouseenter" in document.documentElement, p = "onfocusin" in document.documentElement, v = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }, m = 1, b.domLoaded = !1, b.events = y;
            var C = function(e, t) {
                var n, r, o, i, a = y[t];
                if (n = a && a[e.type])
                    for (r = 0, o = n.length; r < o; r++)
                        if ((i = n[r]) && !1 === i.func.call(i.scope, e) && e.preventDefault(), e.isImmediatePropagationStopped()) return
            };
            b.bind = function(e, t, n, r) {
                var o, i, a, u, s, c, l, f = window,
                    d = function(e) {
                        C(Ee(e || f.event), o)
                    };
                if (e && 3 !== e.nodeType && 8 !== e.nodeType) {
                    for (e[g] ? o = e[g] : (o = m++, e[g] = o, y[o] = {}), r = r || e, a = (t = t.split(" ")).length; a--;) c = d, s = l = !1, "DOMContentLoaded" === (u = t[a]) && (u = "ready"), b.domLoaded && "ready" === u && "complete" === e.readyState ? n.call(r, Ee({
                        type: u
                    })) : (h || (s = v[u]) && (c = function(e) {
                        var t, n;
                        if (t = e.currentTarget, (n = e.relatedTarget) && t.contains) n = t.contains(n);
                        else
                            for (; n && n !== t;) n = n.parentNode;
                        n || ((e = Ee(e || f.event)).type = "mouseout" === e.type ? "mouseleave" : "mouseenter", e.target = t, C(e, o))
                    }), p || "focusin" !== u && "focusout" !== u || (l = !0, s = "focusin" === u ? "focus" : "blur", c = function(e) {
                        (e = Ee(e || f.event)).type = "focus" === e.type ? "focusin" : "focusout", C(e, o)
                    }), (i = y[o][u]) ? "ready" === u && b.domLoaded ? n({
                        type: u
                    }) : i.push({
                        func: n,
                        scope: r
                    }) : (y[o][u] = i = [{
                        func: n,
                        scope: r
                    }], i.fakeName = s, i.capture = l, i.nativeHandler = c, "ready" === u ? Se(e, c, b) : we(e, s || u, c, l)));
                    return e = i = 0, n
                }
            }, b.unbind = function(e, t, n) {
                var r, o, i, a, u, s;
                if (!e || 3 === e.nodeType || 8 === e.nodeType) return b;
                if (r = e[g]) {
                    if (s = y[r], t) {
                        for (i = (t = t.split(" ")).length; i--;)
                            if (o = s[u = t[i]]) {
                                if (n)
                                    for (a = o.length; a--;)
                                        if (o[a].func === n) {
                                            var c = o.nativeHandler,
                                                l = o.fakeName,
                                                f = o.capture;
                                            (o = o.slice(0, a).concat(o.slice(a + 1))).nativeHandler = c, o.fakeName = l, o.capture = f, s[u] = o
                                        } n && 0 !== o.length || (delete s[u], Ne(e, o.fakeName || u, o.nativeHandler, o.capture))
                            }
                    } else {
                        for (u in s) o = s[u], Ne(e, o.fakeName || u, o.nativeHandler, o.capture);
                        s = {}
                    }
                    for (u in s) return b;
                    delete y[r];
                    try {
                        delete e[g]
                    } catch (d) {
                        e[g] = null
                    }
                }
                return b
            }, b.fire = function(e, t, n) {
                var r;
                if (!e || 3 === e.nodeType || 8 === e.nodeType) return b;
                for ((n = Ee(null, n)).type = t, n.target = e;
                     (r = e[g]) && C(n, r), (e = e.parentNode || e.ownerDocument || e.defaultView || e.parentWindow) && !n.isPropagationStopped(););
                return b
            }, b.clean = function(e) {
                var t, n, r = b.unbind;
                if (!e || 3 === e.nodeType || 8 === e.nodeType) return b;
                if (e[g] && r(e), e.getElementsByTagName || (e = e.document), e && e.getElementsByTagName)
                    for (r(e), t = (n = e.getElementsByTagName("*")).length; t--;)(e = n[t])[g] && r(e);
                return b
            }, b.destroy = function() {
                y = {}
            }, b.cancel = function(e) {
                return e && (e.preventDefault(), e.stopImmediatePropagation()), !1
            }
        };
    ke.Event = new ke, ke.Event.bind(window, "ready", function() {});
    var Te, Ae, Re, _e, De, Be, Oe, Pe, Le, Ie, Me, Fe, ze, Ue, Ve, He, je, qe, $e = "sizzle" + -new Date,
        We = window.document,
        Ke = 0,
        Xe = 0,
        Ye = Tt(),
        Ge = Tt(),
        Je = Tt(),
        Qe = function(e, t) {
            return e === t && (Me = !0), 0
        },
        Ze = typeof undefined,
        et = {}.hasOwnProperty,
        tt = [],
        nt = tt.pop,
        rt = tt.push,
        ot = tt.push,
        it = tt.slice,
        at = tt.indexOf || function(e) {
            for (var t = 0, n = this.length; t < n; t++)
                if (this[t] === e) return t;
            return -1
        },
        ut = "[\\x20\\t\\r\\n\\f]",
        st = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ct = "\\[" + ut + "*(" + st + ")(?:" + ut + "*([*^$|!~]?=)" + ut + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + st + "))|)" + ut + "*\\]",
        lt = ":(" + st + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ct + ")*)|.*)\\)|)",
        ft = new RegExp("^" + ut + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ut + "+$", "g"),
        dt = new RegExp("^" + ut + "*," + ut + "*"),
        mt = new RegExp("^" + ut + "*([>+~]|" + ut + ")" + ut + "*"),
        gt = new RegExp("=" + ut + "*([^\\]'\"]*?)" + ut + "*\\]", "g"),
        pt = new RegExp(lt),
        ht = new RegExp("^" + st + "$"),
        vt = {
            ID: new RegExp("^#(" + st + ")"),
            CLASS: new RegExp("^\\.(" + st + ")"),
            TAG: new RegExp("^(" + st + "|[*])"),
            ATTR: new RegExp("^" + ct),
            PSEUDO: new RegExp("^" + lt),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ut + "*(even|odd|(([+-]|)(\\d*)n|)" + ut + "*(?:([+-]|)" + ut + "*(\\d+)|))" + ut + "*\\)|)", "i"),
            bool: new RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
            needsContext: new RegExp("^" + ut + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ut + "*((?:-\\d)?\\d*)" + ut + "*\\)|)(?=[^-]|$)", "i")
        },
        bt = /^(?:input|select|textarea|button)$/i,
        yt = /^h\d$/i,
        Ct = /^[^{]+\{\s*\[native \w/,
        xt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        wt = /[+~]/,
        Nt = /'|\\/g,
        Et = new RegExp("\\\\([\\da-f]{1,6}" + ut + "?|(" + ut + ")|.)", "ig"),
        St = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        };
    try {
        ot.apply(tt = it.call(We.childNodes), We.childNodes), tt[We.childNodes.length].nodeType
    } catch (LN) {
        ot = {
            apply: tt.length ? function(e, t) {
                rt.apply(e, it.call(t))
            } : function(e, t) {
                for (var n = e.length, r = 0; e[n++] = t[r++];);
                e.length = n - 1
            }
        }
    }
    var kt = function(e, t, n, r) {
        var o, i, a, u, s, c, l, f, d, m;
        if ((t ? t.ownerDocument || t : We) !== ze && Fe(t), n = n || [], !e || "string" != typeof e) return n;
        if (1 !== (u = (t = t || ze).nodeType) && 9 !== u) return [];
        if (Ve && !r) {
            if (o = xt.exec(e))
                if (a = o[1]) {
                    if (9 === u) {
                        if (!(i = t.getElementById(a)) || !i.parentNode) return n;
                        if (i.id === a) return n.push(i), n
                    } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(a)) && qe(t, i) && i.id === a) return n.push(i), n
                } else {
                    if (o[2]) return ot.apply(n, t.getElementsByTagName(e)), n;
                    if ((a = o[3]) && Ae.getElementsByClassName) return ot.apply(n, t.getElementsByClassName(a)), n
                } if (Ae.qsa && (!He || !He.test(e))) {
                if (f = l = $e, d = t, m = 9 === u && e, 1 === u && "object" !== t.nodeName.toLowerCase()) {
                    for (c = Be(e), (l = t.getAttribute("id")) ? f = l.replace(Nt, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", s = c.length; s--;) c[s] = f + Lt(c[s]);
                    d = wt.test(e) && Ot(t.parentNode) || t, m = c.join(",")
                }
                if (m) try {
                    return ot.apply(n, d.querySelectorAll(m)), n
                } catch (g) {} finally {
                    l || t.removeAttribute("id")
                }
            }
        }
        return Pe(e.replace(ft, "$1"), t, n, r)
    };

    function Tt() {
        var r = [];
        return function e(t, n) {
            return r.push(t + " ") > Re.cacheLength && delete e[r.shift()], e[t + " "] = n
        }
    }

    function At(e) {
        return e[$e] = !0, e
    }

    function Rt(e, t) {
        var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
        if (r) return r;
        if (n)
            for (; n = n.nextSibling;)
                if (n === t) return -1;
        return e ? 1 : -1
    }

    function _t(t) {
        return function(e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t
        }
    }

    function Dt(n) {
        return function(e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t || "button" === t) && e.type === n
        }
    }

    function Bt(a) {
        return At(function(i) {
            return i = +i, At(function(e, t) {
                for (var n, r = a([], e.length, i), o = r.length; o--;) e[n = r[o]] && (e[n] = !(t[n] = e[n]))
            })
        })
    }

    function Ot(e) {
        return e && typeof e.getElementsByTagName !== Ze && e
    }
    for (Te in Ae = kt.support = {}, De = kt.isXML = function(e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName
    }, Fe = kt.setDocument = function(e) {
        var t, s = e ? e.ownerDocument || e : We,
            n = s.defaultView;
        return s !== ze && 9 === s.nodeType && s.documentElement ? (Ue = (ze = s).documentElement, Ve = !De(s), n && n !== function(e) {
            try {
                return e.top
            } catch (t) {}
            return null
        }(n) && (n.addEventListener ? n.addEventListener("unload", function() {
            Fe()
        }, !1) : n.attachEvent && n.attachEvent("onunload", function() {
            Fe()
        })), Ae.attributes = !0, Ae.getElementsByTagName = !0, Ae.getElementsByClassName = Ct.test(s.getElementsByClassName), Ae.getById = !0, Re.find.ID = function(e, t) {
            if (typeof t.getElementById !== Ze && Ve) {
                var n = t.getElementById(e);
                return n && n.parentNode ? [n] : []
            }
        }, Re.filter.ID = function(e) {
            var t = e.replace(Et, St);
            return function(e) {
                return e.getAttribute("id") === t
            }
        }, Re.find.TAG = Ae.getElementsByTagName ? function(e, t) {
            if (typeof t.getElementsByTagName !== Ze) return t.getElementsByTagName(e)
        } : function(e, t) {
            var n, r = [],
                o = 0,
                i = t.getElementsByTagName(e);
            if ("*" === e) {
                for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                return r
            }
            return i
        }, Re.find.CLASS = Ae.getElementsByClassName && function(e, t) {
            if (Ve) return t.getElementsByClassName(e)
        }, je = [], He = [], Ae.disconnectedMatch = !0, He = He.length && new RegExp(He.join("|")), je = je.length && new RegExp(je.join("|")), t = Ct.test(Ue.compareDocumentPosition), qe = t || Ct.test(Ue.contains) ? function(e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e,
                r = t && t.parentNode;
            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
        } : function(e, t) {
            if (t)
                for (; t = t.parentNode;)
                    if (t === e) return !0;
            return !1
        }, Qe = t ? function(e, t) {
            if (e === t) return Me = !0, 0;
            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !Ae.sortDetached && t.compareDocumentPosition(e) === n ? e === s || e.ownerDocument === We && qe(We, e) ? -1 : t === s || t.ownerDocument === We && qe(We, t) ? 1 : Ie ? at.call(Ie, e) - at.call(Ie, t) : 0 : 4 & n ? -1 : 1)
        } : function(e, t) {
            if (e === t) return Me = !0, 0;
            var n, r = 0,
                o = e.parentNode,
                i = t.parentNode,
                a = [e],
                u = [t];
            if (!o || !i) return e === s ? -1 : t === s ? 1 : o ? -1 : i ? 1 : Ie ? at.call(Ie, e) - at.call(Ie, t) : 0;
            if (o === i) return Rt(e, t);
            for (n = e; n = n.parentNode;) a.unshift(n);
            for (n = t; n = n.parentNode;) u.unshift(n);
            for (; a[r] === u[r];) r++;
            return r ? Rt(a[r], u[r]) : a[r] === We ? -1 : u[r] === We ? 1 : 0
        }, s) : ze
    }, kt.matches = function(e, t) {
        return kt(e, null, null, t)
    }, kt.matchesSelector = function(e, t) {
        if ((e.ownerDocument || e) !== ze && Fe(e), t = t.replace(gt, "='$1']"), Ae.matchesSelector && Ve && (!je || !je.test(t)) && (!He || !He.test(t))) try {
            var n = (void 0).call(e, t);
            if (n || Ae.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
        } catch (LN) {}
        return 0 < kt(t, ze, null, [e]).length
    }, kt.contains = function(e, t) {
        return (e.ownerDocument || e) !== ze && Fe(e), qe(e, t)
    }, kt.attr = function(e, t) {
        (e.ownerDocument || e) !== ze && Fe(e);
        var n = Re.attrHandle[t.toLowerCase()],
            r = n && et.call(Re.attrHandle, t.toLowerCase()) ? n(e, t, !Ve) : undefined;
        return r !== undefined ? r : Ae.attributes || !Ve ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }, kt.error = function(e) {
        throw new Error("Syntax error, unrecognized expression: " + e)
    }, kt.uniqueSort = function(e) {
        var t, n = [],
            r = 0,
            o = 0;
        if (Me = !Ae.detectDuplicates, Ie = !Ae.sortStable && e.slice(0), e.sort(Qe), Me) {
            for (; t = e[o++];) t === e[o] && (r = n.push(o));
            for (; r--;) e.splice(n[r], 1)
        }
        return Ie = null, e
    }, _e = kt.getText = function(e) {
        var t, n = "",
            r = 0,
            o = e.nodeType;
        if (o) {
            if (1 === o || 9 === o || 11 === o) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += _e(e)
            } else if (3 === o || 4 === o) return e.nodeValue
        } else
            for (; t = e[r++];) n += _e(t);
        return n
    }, (Re = kt.selectors = {
        cacheLength: 50,
        createPseudo: At,
        match: vt,
        attrHandle: {},
        find: {},
        relative: {
            ">": {
                dir: "parentNode",
                first: !0
            },
            " ": {
                dir: "parentNode"
            },
            "+": {
                dir: "previousSibling",
                first: !0
            },
            "~": {
                dir: "previousSibling"
            }
        },
        preFilter: {
            ATTR: function(e) {
                return e[1] = e[1].replace(Et, St), e[3] = (e[3] || e[4] || e[5] || "").replace(Et, St), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
            },
            CHILD: function(e) {
                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || kt.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && kt.error(e[0]), e
            },
            PSEUDO: function(e) {
                var t, n = !e[6] && e[2];
                return vt.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pt.test(n) && (t = Be(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
            }
        },
        filter: {
            TAG: function(e) {
                var t = e.replace(Et, St).toLowerCase();
                return "*" === e ? function() {
                    return !0
                } : function(e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t
                }
            },
            CLASS: function(e) {
                var t = Ye[e + " "];
                return t || (t = new RegExp("(^|" + ut + ")" + e + "(" + ut + "|$)")) && Ye(e, function(e) {
                    return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== Ze && e.getAttribute("class") || "")
                })
            },
            ATTR: function(n, r, o) {
                return function(e) {
                    var t = kt.attr(e, n);
                    return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === o : "!=" === r ? t !== o : "^=" === r ? o && 0 === t.indexOf(o) : "*=" === r ? o && -1 < t.indexOf(o) : "$=" === r ? o && t.slice(-o.length) === o : "~=" === r ? -1 < (" " + t + " ").indexOf(o) : "|=" === r && (t === o || t.slice(0, o.length + 1) === o + "-"))
                }
            },
            CHILD: function(m, e, t, g, p) {
                var h = "nth" !== m.slice(0, 3),
                    v = "last" !== m.slice(-4),
                    b = "of-type" === e;
                return 1 === g && 0 === p ? function(e) {
                    return !!e.parentNode
                } : function(e, t, n) {
                    var r, o, i, a, u, s, c = h !== v ? "nextSibling" : "previousSibling",
                        l = e.parentNode,
                        f = b && e.nodeName.toLowerCase(),
                        d = !n && !b;
                    if (l) {
                        if (h) {
                            for (; c;) {
                                for (i = e; i = i[c];)
                                    if (b ? i.nodeName.toLowerCase() === f : 1 === i.nodeType) return !1;
                                s = c = "only" === m && !s && "nextSibling"
                            }
                            return !0
                        }
                        if (s = [v ? l.firstChild : l.lastChild], v && d) {
                            for (u = (r = (o = l[$e] || (l[$e] = {}))[m] || [])[0] === Ke && r[1], a = r[0] === Ke && r[2], i = u && l.childNodes[u]; i = ++u && i && i[c] || (a = u = 0) || s.pop();)
                                if (1 === i.nodeType && ++a && i === e) {
                                    o[m] = [Ke, u, a];
                                    break
                                }
                        } else if (d && (r = (e[$e] || (e[$e] = {}))[m]) && r[0] === Ke) a = r[1];
                        else
                            for (;
                                (i = ++u && i && i[c] || (a = u = 0) || s.pop()) && ((b ? i.nodeName.toLowerCase() !== f : 1 !== i.nodeType) || !++a || (d && ((i[$e] || (i[$e] = {}))[m] = [Ke, a]), i !== e)););
                        return (a -= p) === g || a % g == 0 && 0 <= a / g
                    }
                }
            },
            PSEUDO: function(e, i) {
                var t, a = Re.pseudos[e] || Re.setFilters[e.toLowerCase()] || kt.error("unsupported pseudo: " + e);
                return a[$e] ? a(i) : 1 < a.length ? (t = [e, e, "", i], Re.setFilters.hasOwnProperty(e.toLowerCase()) ? At(function(e, t) {
                    for (var n, r = a(e, i), o = r.length; o--;) e[n = at.call(e, r[o])] = !(t[n] = r[o])
                }) : function(e) {
                    return a(e, 0, t)
                }) : a
            }
        },
        pseudos: {
            not: At(function(e) {
                var r = [],
                    o = [],
                    u = Oe(e.replace(ft, "$1"));
                return u[$e] ? At(function(e, t, n, r) {
                    for (var o, i = u(e, null, r, []), a = e.length; a--;)(o = i[a]) && (e[a] = !(t[a] = o))
                }) : function(e, t, n) {
                    return r[0] = e, u(r, null, n, o), !o.pop()
                }
            }),
            has: At(function(t) {
                return function(e) {
                    return 0 < kt(t, e).length
                }
            }),
            contains: At(function(t) {
                return t = t.replace(Et, St),
                    function(e) {
                        return -1 < (e.textContent || e.innerText || _e(e)).indexOf(t)
                    }
            }),
            lang: At(function(n) {
                return ht.test(n || "") || kt.error("unsupported lang: " + n), n = n.replace(Et, St).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = Ve ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
            }),
            target: function(e) {
                var t = window.location && window.location.hash;
                return t && t.slice(1) === e.id
            },
            root: function(e) {
                return e === Ue
            },
            focus: function(e) {
                return e === ze.activeElement && (!ze.hasFocus || ze.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
            },
            enabled: function(e) {
                return !1 === e.disabled
            },
            disabled: function(e) {
                return !0 === e.disabled
            },
            checked: function(e) {
                var t = e.nodeName.toLowerCase();
                return "input" === t && !!e.checked || "option" === t && !!e.selected
            },
            selected: function(e) {
                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            },
            empty: function(e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6) return !1;
                return !0
            },
            parent: function(e) {
                return !Re.pseudos.empty(e)
            },
            header: function(e) {
                return yt.test(e.nodeName)
            },
            input: function(e) {
                return bt.test(e.nodeName)
            },
            button: function(e) {
                var t = e.nodeName.toLowerCase();
                return "input" === t && "button" === e.type || "button" === t
            },
            text: function(e) {
                var t;
                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
            },
            first: Bt(function() {
                return [0]
            }),
            last: Bt(function(e, t) {
                return [t - 1]
            }),
            eq: Bt(function(e, t, n) {
                return [n < 0 ? n + t : n]
            }),
            even: Bt(function(e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e
            }),
            odd: Bt(function(e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e
            }),
            lt: Bt(function(e, t, n) {
                for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
                return e
            }),
            gt: Bt(function(e, t, n) {
                for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                return e
            })
        }
    }).pseudos.nth = Re.pseudos.eq, {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
    }) Re.pseudos[Te] = _t(Te);
    for (Te in {
        submit: !0,
        reset: !0
    }) Re.pseudos[Te] = Dt(Te);

    function Pt() {}

    function Lt(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
        return r
    }

    function It(a, e, t) {
        var u = e.dir,
            s = t && "parentNode" === u,
            c = Xe++;
        return e.first ? function(e, t, n) {
            for (; e = e[u];)
                if (1 === e.nodeType || s) return a(e, t, n)
        } : function(e, t, n) {
            var r, o, i = [Ke, c];
            if (n) {
                for (; e = e[u];)
                    if ((1 === e.nodeType || s) && a(e, t, n)) return !0
            } else
                for (; e = e[u];)
                    if (1 === e.nodeType || s) {
                        if ((r = (o = e[$e] || (e[$e] = {}))[u]) && r[0] === Ke && r[1] === c) return i[2] = r[2];
                        if ((o[u] = i)[2] = a(e, t, n)) return !0
                    }
        }
    }

    function Mt(o) {
        return 1 < o.length ? function(e, t, n) {
            for (var r = o.length; r--;)
                if (!o[r](e, t, n)) return !1;
            return !0
        } : o[0]
    }

    function Ft(e, t, n, r, o) {
        for (var i, a = [], u = 0, s = e.length, c = null != t; u < s; u++)(i = e[u]) && (n && !n(i, r, o) || (a.push(i), c && t.push(u)));
        return a
    }

    function zt(m, g, p, h, v, e) {
        return h && !h[$e] && (h = zt(h)), v && !v[$e] && (v = zt(v, e)), At(function(e, t, n, r) {
            var o, i, a, u = [],
                s = [],
                c = t.length,
                l = e || function(e, t, n) {
                    for (var r = 0, o = t.length; r < o; r++) kt(e, t[r], n);
                    return n
                }(g || "*", n.nodeType ? [n] : n, []),
                f = !m || !e && g ? l : Ft(l, u, m, n, r),
                d = p ? v || (e ? m : c || h) ? [] : t : f;
            if (p && p(f, d, n, r), h)
                for (o = Ft(d, s), h(o, [], n, r), i = o.length; i--;)(a = o[i]) && (d[s[i]] = !(f[s[i]] = a));
            if (e) {
                if (v || m) {
                    if (v) {
                        for (o = [], i = d.length; i--;)(a = d[i]) && o.push(f[i] = a);
                        v(null, d = [], o, r)
                    }
                    for (i = d.length; i--;)(a = d[i]) && -1 < (o = v ? at.call(e, a) : u[i]) && (e[o] = !(t[o] = a))
                }
            } else d = Ft(d === t ? d.splice(c, d.length) : d), v ? v(null, t, d, r) : ot.apply(t, d)
        })
    }

    function Ut(e) {
        for (var r, t, n, o = e.length, i = Re.relative[e[0].type], a = i || Re.relative[" "], u = i ? 1 : 0, s = It(function(e) {
            return e === r
        }, a, !0), c = It(function(e) {
            return -1 < at.call(r, e)
        }, a, !0), l = [function(e, t, n) {
            return !i && (n || t !== Le) || ((r = t).nodeType ? s(e, t, n) : c(e, t, n))
        }]; u < o; u++)
            if (t = Re.relative[e[u].type]) l = [It(Mt(l), t)];
            else {
                if ((t = Re.filter[e[u].type].apply(null, e[u].matches))[$e]) {
                    for (n = ++u; n < o && !Re.relative[e[n].type]; n++);
                    return zt(1 < u && Mt(l), 1 < u && Lt(e.slice(0, u - 1).concat({
                        value: " " === e[u - 2].type ? "*" : ""
                    })).replace(ft, "$1"), t, u < n && Ut(e.slice(u, n)), n < o && Ut(e = e.slice(n)), n < o && Lt(e))
                }
                l.push(t)
            } return Mt(l)
    }
    Pt.prototype = Re.filters = Re.pseudos, Re.setFilters = new Pt, Be = kt.tokenize = function(e, t) {
        var n, r, o, i, a, u, s, c = Ge[e + " "];
        if (c) return t ? 0 : c.slice(0);
        for (a = e, u = [], s = Re.preFilter; a;) {
            for (i in n && !(r = dt.exec(a)) || (r && (a = a.slice(r[0].length) || a), u.push(o = [])), n = !1, (r = mt.exec(a)) && (n = r.shift(), o.push({
                value: n,
                type: r[0].replace(ft, " ")
            }), a = a.slice(n.length)), Re.filter) !(r = vt[i].exec(a)) || s[i] && !(r = s[i](r)) || (n = r.shift(), o.push({
                value: n,
                type: i,
                matches: r
            }), a = a.slice(n.length));
            if (!n) break
        }
        return t ? a.length : a ? kt.error(e) : Ge(e, u).slice(0)
    }, Oe = kt.compile = function(e, t) {
        var n, h, v, b, y, r, o = [],
            i = [],
            a = Je[e + " "];
        if (!a) {
            for (t || (t = Be(e)), n = t.length; n--;)(a = Ut(t[n]))[$e] ? o.push(a) : i.push(a);
            (a = Je(e, (h = i, b = 0 < (v = o).length, y = 0 < h.length, r = function(e, t, n, r, o) {
                var i, a, u, s = 0,
                    c = "0",
                    l = e && [],
                    f = [],
                    d = Le,
                    m = e || y && Re.find.TAG("*", o),
                    g = Ke += null == d ? 1 : Math.random() || .1,
                    p = m.length;
                for (o && (Le = t !== ze && t); c !== p && null != (i = m[c]); c++) {
                    if (y && i) {
                        for (a = 0; u = h[a++];)
                            if (u(i, t, n)) {
                                r.push(i);
                                break
                            } o && (Ke = g)
                    }
                    b && ((i = !u && i) && s--, e && l.push(i))
                }
                if (s += c, b && c !== s) {
                    for (a = 0; u = v[a++];) u(l, f, t, n);
                    if (e) {
                        if (0 < s)
                            for (; c--;) l[c] || f[c] || (f[c] = nt.call(r));
                        f = Ft(f)
                    }
                    ot.apply(r, f), o && !e && 0 < f.length && 1 < s + v.length && kt.uniqueSort(r)
                }
                return o && (Ke = g, Le = d), l
            }, b ? At(r) : r))).selector = e
        }
        return a
    }, Pe = kt.select = function(e, t, n, r) {
        var o, i, a, u, s, c = "function" == typeof e && e,
            l = !r && Be(e = c.selector || e);
        if (n = n || [], 1 === l.length) {
            if (2 < (i = l[0] = l[0].slice(0)).length && "ID" === (a = i[0]).type && Ae.getById && 9 === t.nodeType && Ve && Re.relative[i[1].type]) {
                if (!(t = (Re.find.ID(a.matches[0].replace(Et, St), t) || [])[0])) return n;
                c && (t = t.parentNode), e = e.slice(i.shift().value.length)
            }
            for (o = vt.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !Re.relative[u = a.type]);)
                if ((s = Re.find[u]) && (r = s(a.matches[0].replace(Et, St), wt.test(i[0].type) && Ot(t.parentNode) || t))) {
                    if (i.splice(o, 1), !(e = r.length && Lt(i))) return ot.apply(n, r), n;
                    break
                }
        }
        return (c || Oe(e, l))(r, t, !Ve, n, wt.test(e) && Ot(t.parentNode) || t), n
    }, Ae.sortStable = $e.split("").sort(Qe).join("") === $e, Ae.detectDuplicates = !!Me, Fe(), Ae.sortDetached = !0;
    var Vt = Array.isArray,
        Ht = function(e, t, n) {
            var r, o;
            if (!e) return 0;
            if (n = n || e, e.length !== undefined) {
                for (r = 0, o = e.length; r < o; r++)
                    if (!1 === t.call(n, e[r], r, e)) return 0
            } else
                for (r in e)
                    if (e.hasOwnProperty(r) && !1 === t.call(n, e[r], r, e)) return 0;
            return 1
        },
        jt = function(e, t, n) {
            var r, o;
            for (r = 0, o = e.length; r < o; r++)
                if (t.call(n, e[r], r, e)) return r;
            return -1
        },
        qt = {
            isArray: Vt,
            toArray: function(e) {
                var t, n, r = e;
                if (!Vt(e))
                    for (r = [], t = 0, n = e.length; t < n; t++) r[t] = e[t];
                return r
            },
            each: Ht,
            map: function(n, r) {
                var o = [];
                return Ht(n, function(e, t) {
                    o.push(r(e, t, n))
                }), o
            },
            filter: function(n, r) {
                var o = [];
                return Ht(n, function(e, t) {
                    r && !r(e, t, n) || o.push(e)
                }), o
            },
            indexOf: function(e, t) {
                var n, r;
                if (e)
                    for (n = 0, r = e.length; n < r; n++)
                        if (e[n] === t) return n;
                return -1
            },
            reduce: function(e, t, n, r) {
                var o = 0;
                for (arguments.length < 3 && (n = e[0]); o < e.length; o++) n = t.call(r, n, e[o], o);
                return n
            },
            findIndex: jt,
            find: function(e, t, n) {
                var r = jt(e, t, n);
                return -1 !== r ? e[r] : undefined
            },
            last: function(e) {
                return e[e.length - 1]
            }
        },
        $t = /^\s*|\s*$/g,
        Wt = function(e) {
            return null === e || e === undefined ? "" : ("" + e).replace($t, "")
        },
        Kt = function(e, t) {
            return t ? !("array" !== t || !qt.isArray(e)) || typeof e === t : e !== undefined
        },
        Xt = function(e, n, r, o) {
            o = o || this, e && (r && (e = e[r]), qt.each(e, function(e, t) {
                if (!1 === n.call(o, e, t, r)) return !1;
                Xt(e, n, r, o)
            }))
        },
        Yt = {
            trim: Wt,
            isArray: qt.isArray,
            is: Kt,
            toArray: qt.toArray,
            makeMap: function(e, t, n) {
                var r;
                for (t = t || ",", "string" == typeof(e = e || []) && (e = e.split(t)), n = n || {}, r = e.length; r--;) n[e[r]] = {};
                return n
            },
            each: qt.each,
            map: qt.map,
            grep: qt.filter,
            inArray: qt.indexOf,
            hasOwn: function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            },
            extend: function(e, t) {
                for (var n, r, o, i = [], a = 2; a < arguments.length; a++) i[a - 2] = arguments[a];
                var u, s = arguments;
                for (n = 1, r = s.length; n < r; n++)
                    for (o in t = s[n]) t.hasOwnProperty(o) && (u = t[o]) !== undefined && (e[o] = u);
                return e
            },
            create: function(e, t, n) {
                var r, o, i, a, u, s = this,
                    c = 0;
                if (e = /^((static) )?([\w.]+)(:([\w.]+))?/.exec(e), i = e[3].match(/(^|\.)(\w+)$/i)[2], !(o = s.createNS(e[3].replace(/\.\w+$/, ""), n))[i]) {
                    if ("static" === e[2]) return o[i] = t, void(this.onCreate && this.onCreate(e[2], e[3], o[i]));
                    t[i] || (t[i] = function() {}, c = 1), o[i] = t[i], s.extend(o[i].prototype, t), e[5] && (r = s.resolve(e[5]).prototype, a = e[5].match(/\.(\w+)$/i)[1], u = o[i], o[i] = c ? function() {
                        return r[a].apply(this, arguments)
                    } : function() {
                        return this.parent = r[a], u.apply(this, arguments)
                    }, o[i].prototype[i] = o[i], s.each(r, function(e, t) {
                        o[i].prototype[t] = r[t]
                    }), s.each(t, function(e, t) {
                        r[t] ? o[i].prototype[t] = function() {
                            return this.parent = r[t], e.apply(this, arguments)
                        } : t !== i && (o[i].prototype[t] = e)
                    })), s.each(t["static"], function(e, t) {
                        o[i][t] = e
                    })
                }
            },
            walk: Xt,
            createNS: function(e, t) {
                var n, r;
                for (t = t || window, e = e.split("."), n = 0; n < e.length; n++) t[r = e[n]] || (t[r] = {}), t = t[r];
                return t
            },
            resolve: function(e, t) {
                var n, r;
                for (t = t || window, n = 0, r = (e = e.split(".")).length; n < r && (t = t[e[n]]); n++);
                return t
            },
            explode: function(e, t) {
                return !e || Kt(e, "array") ? e : qt.map(e.split(t || ","), Wt)
            },
            _addCacheSuffix: function(e) {
                var t = de.cacheSuffix;
                return t && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e
            }
        },
        Gt = document,
        Jt = Array.prototype.push,
        Qt = Array.prototype.slice,
        Zt = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        en = ke.Event,
        tn = Yt.makeMap("children,contents,next,prev"),
        nn = function(e) {
            return void 0 !== e
        },
        rn = function(e) {
            return "string" == typeof e
        },
        on = function(e, t) {
            var n, r, o;
            for (o = (t = t || Gt).createElement("div"), n = t.createDocumentFragment(), o.innerHTML = e; r = o.firstChild;) n.appendChild(r);
            return n
        },
        an = function(e, t, n, r) {
            var o;
            if (rn(t)) t = on(t, Cn(e[0]));
            else if (t.length && !t.nodeType) {
                if (t = pn.makeArray(t), r)
                    for (o = t.length - 1; 0 <= o; o--) an(e, t[o], n, r);
                else
                    for (o = 0; o < t.length; o++) an(e, t[o], n, r);
                return e
            }
            if (t.nodeType)
                for (o = e.length; o--;) n.call(e[o], t);
            return e
        },
        un = function(e, t) {
            return e && t && -1 !== (" " + e.className + " ").indexOf(" " + t + " ")
        },
        sn = function(e, t, n) {
            var r, o;
            return t = pn(t)[0], e.each(function() {
                var e = this;
                n && r === e.parentNode || (r = e.parentNode, o = t.cloneNode(!1), e.parentNode.insertBefore(o, e)), o.appendChild(e)
            }), e
        },
        cn = Yt.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom", " "),
        ln = Yt.makeMap("checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected", " "),
        fn = {
            "for": "htmlFor",
            "class": "className",
            readonly: "readOnly"
        },
        dn = {
            "float": "cssFloat"
        },
        mn = {},
        gn = {},
        pn = function(e, t) {
            return new pn.fn.init(e, t)
        },
        hn = /^\s*|\s*$/g,
        vn = function(e) {
            return null === e || e === undefined ? "" : ("" + e).replace(hn, "")
        },
        bn = function(e, t) {
            var n, r, o, i;
            if (e)
                if ((n = e.length) === undefined) {
                    for (r in e)
                        if (e.hasOwnProperty(r) && (i = e[r], !1 === t.call(i, r, i))) break
                } else
                    for (o = 0; o < n && (i = e[o], !1 !== t.call(i, o, i)); o++);
            return e
        },
        yn = function(e, n) {
            var r = [];
            return bn(e, function(e, t) {
                n(t, e) && r.push(t)
            }), r
        },
        Cn = function(e) {
            return e ? 9 === e.nodeType ? e : e.ownerDocument : Gt
        };
    pn.fn = pn.prototype = {
        constructor: pn,
        selector: "",
        context: null,
        length: 0,
        init: function(e, t) {
            var n, r, o = this;
            if (!e) return o;
            if (e.nodeType) return o.context = o[0] = e, o.length = 1, o;
            if (t && t.nodeType) o.context = t;
            else {
                if (t) return pn(e).attr(t);
                o.context = t = document
            }
            if (rn(e)) {
                if (!(n = "<" === (o.selector = e).charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : Zt.exec(e))) return pn(t).find(e);
                if (n[1])
                    for (r = on(e, Cn(t)).firstChild; r;) Jt.call(o, r), r = r.nextSibling;
                else {
                    if (!(r = Cn(t).getElementById(n[2]))) return o;
                    if (r.id !== n[2]) return o.find(e);
                    o.length = 1, o[0] = r
                }
            } else this.add(e, !1);
            return o
        },
        toArray: function() {
            return Yt.toArray(this)
        },
        add: function(e, t) {
            var n, r, o = this;
            if (rn(e)) return o.add(pn(e));
            if (!1 !== t)
                for (n = pn.unique(o.toArray().concat(pn.makeArray(e))), o.length = n.length, r = 0; r < n.length; r++) o[r] = n[r];
            else Jt.apply(o, pn.makeArray(e));
            return o
        },
        attr: function(t, n) {
            var e, r = this;
            if ("object" == typeof t) bn(t, function(e, t) {
                r.attr(e, t)
            });
            else {
                if (!nn(n)) {
                    if (r[0] && 1 === r[0].nodeType) {
                        if ((e = mn[t]) && e.get) return e.get(r[0], t);
                        if (ln[t]) return r.prop(t) ? t : undefined;
                        null === (n = r[0].getAttribute(t, 2)) && (n = undefined)
                    }
                    return n
                }
                this.each(function() {
                    var e;
                    if (1 === this.nodeType) {
                        if ((e = mn[t]) && e.set) return void e.set(this, n);
                        null === n ? this.removeAttribute(t, 2) : this.setAttribute(t, n, 2)
                    }
                })
            }
            return r
        },
        removeAttr: function(e) {
            return this.attr(e, null)
        },
        prop: function(e, t) {
            var n = this;
            if ("object" == typeof(e = fn[e] || e)) bn(e, function(e, t) {
                n.prop(e, t)
            });
            else {
                if (!nn(t)) return n[0] && n[0].nodeType && e in n[0] ? n[0][e] : t;
                this.each(function() {
                    1 === this.nodeType && (this[e] = t)
                })
            }
            return n
        },
        css: function(n, r) {
            var e, o, i = this,
                t = function(e) {
                    return e.replace(/-(\D)/g, function(e, t) {
                        return t.toUpperCase()
                    })
                },
                a = function(e) {
                    return e.replace(/[A-Z]/g, function(e) {
                        return "-" + e
                    })
                };
            if ("object" == typeof n) bn(n, function(e, t) {
                i.css(e, t)
            });
            else if (nn(r)) n = t(n), "number" != typeof r || cn[n] || (r = r.toString() + "px"), i.each(function() {
                var e = this.style;
                if ((o = gn[n]) && o.set) o.set(this, r);
                else {
                    try {
                        this.style[dn[n] || n] = r
                    } catch (t) {}
                    null !== r && "" !== r || (e.removeProperty ? e.removeProperty(a(n)) : e.removeAttribute(n))
                }
            });
            else {
                if (e = i[0], (o = gn[n]) && o.get) return o.get(e);
                if (!e.ownerDocument.defaultView) return e.currentStyle ? e.currentStyle[t(n)] : "";
                try {
                    return e.ownerDocument.defaultView.getComputedStyle(e, null).getPropertyValue(a(n))
                } catch (u) {
                    return undefined
                }
            }
            return i
        },
        remove: function() {
            for (var e, t = this.length; t--;) e = this[t], en.clean(e), e.parentNode && e.parentNode.removeChild(e);
            return this
        },
        empty: function() {
            for (var e, t = this.length; t--;)
                for (e = this[t]; e.firstChild;) e.removeChild(e.firstChild);
            return this
        },
        html: function(e) {
            var t, n = this;
            if (nn(e)) {
                t = n.length;
                try {
                    for (; t--;) n[t].innerHTML = e
                } catch (r) {
                    pn(n[t]).empty().append(e)
                }
                return n
            }
            return n[0] ? n[0].innerHTML : ""
        },
        text: function(e) {
            var t, n = this;
            if (nn(e)) {
                for (t = n.length; t--;) "innerText" in n[t] ? n[t].innerText = e : n[0].textContent = e;
                return n
            }
            return n[0] ? n[0].innerText || n[0].textContent : ""
        },
        append: function() {
            return an(this, arguments, function(e) {
                (1 === this.nodeType || this.host && 1 === this.host.nodeType) && this.appendChild(e)
            })
        },
        prepend: function() {
            return an(this, arguments, function(e) {
                (1 === this.nodeType || this.host && 1 === this.host.nodeType) && this.insertBefore(e, this.firstChild)
            }, !0)
        },
        before: function() {
            return this[0] && this[0].parentNode ? an(this, arguments, function(e) {
                this.parentNode.insertBefore(e, this)
            }) : this
        },
        after: function() {
            return this[0] && this[0].parentNode ? an(this, arguments, function(e) {
                this.parentNode.insertBefore(e, this.nextSibling)
            }, !0) : this
        },
        appendTo: function(e) {
            return pn(e).append(this), this
        },
        prependTo: function(e) {
            return pn(e).prepend(this), this
        },
        replaceWith: function(e) {
            return this.before(e).remove()
        },
        wrap: function(e) {
            return sn(this, e)
        },
        wrapAll: function(e) {
            return sn(this, e, !0)
        },
        wrapInner: function(e) {
            return this.each(function() {
                pn(this).contents().wrapAll(e)
            }), this
        },
        unwrap: function() {
            return this.parent().each(function() {
                pn(this).replaceWith(this.childNodes)
            })
        },
        clone: function() {
            var e = [];
            return this.each(function() {
                e.push(this.cloneNode(!0))
            }), pn(e)
        },
        addClass: function(e) {
            return this.toggleClass(e, !0)
        },
        removeClass: function(e) {
            return this.toggleClass(e, !1)
        },
        toggleClass: function(o, i) {
            var e = this;
            return "string" != typeof o || (-1 !== o.indexOf(" ") ? bn(o.split(" "), function() {
                e.toggleClass(this, i)
            }) : e.each(function(e, t) {
                var n, r;
                (r = un(t, o)) !== i && (n = t.className, r ? t.className = vn((" " + n + " ").replace(" " + o + " ", " ")) : t.className += n ? " " + o : o)
            })), e
        },
        hasClass: function(e) {
            return un(this[0], e)
        },
        each: function(e) {
            return bn(this, e)
        },
        on: function(e, t) {
            return this.each(function() {
                en.bind(this, e, t)
            })
        },
        off: function(e, t) {
            return this.each(function() {
                en.unbind(this, e, t)
            })
        },
        trigger: function(e) {
            return this.each(function() {
                "object" == typeof e ? en.fire(this, e.type, e) : en.fire(this, e)
            })
        },
        show: function() {
            return this.css("display", "")
        },
        hide: function() {
            return this.css("display", "none")
        },
        slice: function() {
            return new pn(Qt.apply(this, arguments))
        },
        eq: function(e) {
            return -1 === e ? this.slice(e) : this.slice(e, +e + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        find: function(e) {
            var t, n, r = [];
            for (t = 0, n = this.length; t < n; t++) pn.find(e, this[t], r);
            return pn(r)
        },
        filter: function(n) {
            return pn("function" == typeof n ? yn(this.toArray(), function(e, t) {
                return n(t, e)
            }) : pn.filter(n, this.toArray()))
        },
        closest: function(n) {
            var r = [];
            return n instanceof pn && (n = n[0]), this.each(function(e, t) {
                for (; t;) {
                    if ("string" == typeof n && pn(t).is(n)) {
                        r.push(t);
                        break
                    }
                    if (t === n) {
                        r.push(t);
                        break
                    }
                    t = t.parentNode
                }
            }), pn(r)
        },
        offset: function(e) {
            var t, n, r, o, i = 0,
                a = 0;
            return e ? this.css(e) : ((t = this[0]) && (r = (n = t.ownerDocument).documentElement, t.getBoundingClientRect && (i = (o = t.getBoundingClientRect()).left + (r.scrollLeft || n.body.scrollLeft) - r.clientLeft, a = o.top + (r.scrollTop || n.body.scrollTop) - r.clientTop)), {
                left: i,
                top: a
            })
        },
        push: Jt,
        sort: [].sort,
        splice: [].splice
    }, Yt.extend(pn, {
        extend: Yt.extend,
        makeArray: function(e) {
            return (t = e) && t === t.window || e.nodeType ? [e] : Yt.toArray(e);
            var t
        },
        inArray: function(e, t) {
            var n;
            if (t.indexOf) return t.indexOf(e);
            for (n = t.length; n--;)
                if (t[n] === e) return n;
            return -1
        },
        isArray: Yt.isArray,
        each: bn,
        trim: vn,
        grep: yn,
        find: kt,
        expr: kt.selectors,
        unique: kt.uniqueSort,
        text: kt.getText,
        contains: kt.contains,
        filter: function(e, t, n) {
            var r = t.length;
            for (n && (e = ":not(" + e + ")"); r--;) 1 !== t[r].nodeType && t.splice(r, 1);
            return t = 1 === t.length ? pn.find.matchesSelector(t[0], e) ? [t[0]] : [] : pn.find.matches(e, t)
        }
    });
    var xn = function(e, t, n) {
            var r = [],
                o = e[t];
            for ("string" != typeof n && n instanceof pn && (n = n[0]); o && 9 !== o.nodeType;) {
                if (n !== undefined) {
                    if (o === n) break;
                    if ("string" == typeof n && pn(o).is(n)) break
                }
                1 === o.nodeType && r.push(o), o = o[t]
            }
            return r
        },
        wn = function(e, t, n, r) {
            var o = [];
            for (r instanceof pn && (r = r[0]); e; e = e[t])
                if (!n || e.nodeType === n) {
                    if (r !== undefined) {
                        if (e === r) break;
                        if ("string" == typeof r && pn(e).is(r)) break
                    }
                    o.push(e)
                } return o
        },
        Nn = function(e, t, n) {
            for (e = e[t]; e; e = e[t])
                if (e.nodeType === n) return e;
            return null
        };
    bn({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return xn(e, "parentNode")
        },
        next: function(e) {
            return Nn(e, "nextSibling", 1)
        },
        prev: function(e) {
            return Nn(e, "previousSibling", 1)
        },
        children: function(e) {
            return wn(e.firstChild, "nextSibling", 1)
        },
        contents: function(e) {
            return Yt.toArray(("iframe" === e.nodeName ? e.contentDocument || e.contentWindow.document : e).childNodes)
        }
    }, function(e, r) {
        pn.fn[e] = function(t) {
            var n = [];
            return this.each(function() {
                var e = r.call(n, this, t, n);
                e && (pn.isArray(e) ? n.push.apply(n, e) : n.push(e))
            }), 1 < this.length && (tn[e] || (n = pn.unique(n)), 0 === e.indexOf("parents") && (n = n.reverse())), n = pn(n), t ? n.filter(t) : n
        }
    }), bn({
        parentsUntil: function(e, t) {
            return xn(e, "parentNode", t)
        },
        nextUntil: function(e, t) {
            return wn(e, "nextSibling", 1, t).slice(1)
        },
        prevUntil: function(e, t) {
            return wn(e, "previousSibling", 1, t).slice(1)
        }
    }, function(r, o) {
        pn.fn[r] = function(t, e) {
            var n = [];
            return this.each(function() {
                var e = o.call(n, this, t, n);
                e && (pn.isArray(e) ? n.push.apply(n, e) : n.push(e))
            }), 1 < this.length && (n = pn.unique(n), 0 !== r.indexOf("parents") && "prevUntil" !== r || (n = n.reverse())), n = pn(n), e ? n.filter(e) : n
        }
    }), pn.fn.is = function(e) {
        return !!e && 0 < this.filter(e).length
    }, pn.fn.init.prototype = pn.fn, pn.overrideDefaults = function(n) {
        var r, o = function(e, t) {
            return r = r || n(), 0 === arguments.length && (e = r.element), t || (t = r.context), new o.fn.init(e, t)
        };
        return pn.extend(o, this), o
    };
    var En = function(n, r, e) {
        bn(e, function(e, t) {
            n[e] = n[e] || {}, n[e][r] = t
        })
    };
    de.ie && de.ie < 8 && (En(mn, "get", {
        maxlength: function(e) {
            var t = e.maxLength;
            return 2147483647 === t ? undefined : t
        },
        size: function(e) {
            var t = e.size;
            return 20 === t ? undefined : t
        },
        "class": function(e) {
            return e.className
        },
        style: function(e) {
            var t = e.style.cssText;
            return 0 === t.length ? undefined : t
        }
    }), En(mn, "set", {
        "class": function(e, t) {
            e.className = t
        },
        style: function(e, t) {
            e.style.cssText = t
        }
    })), de.ie && de.ie < 9 && (dn["float"] = "styleFloat", En(gn, "set", {
        opacity: function(e, t) {
            var n = e.style;
            null === t || "" === t ? n.removeAttribute("filter") : (n.zoom = 1, n.filter = "alpha(opacity=" + 100 * t + ")")
        }
    })), pn.attrHooks = mn, pn.cssHooks = gn;
    var Sn, kn, Tn, An = function(e, t) {
            var n = function(e, t) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    if (r.test(t)) return r
                }
                return undefined
            }(e, t);
            if (!n) return {
                major: 0,
                minor: 0
            };
            var r = function(e) {
                return Number(t.replace(n, "$" + e))
            };
            return _n(r(1), r(2))
        },
        Rn = function() {
            return _n(0, 0)
        },
        _n = function(e, t) {
            return {
                major: e,
                minor: t
            }
        },
        Dn = {
            nu: _n,
            detect: function(e, t) {
                var n = String(t).toLowerCase();
                return 0 === e.length ? Rn() : An(e, n)
            },
            unknown: Rn
        },
        Bn = "Firefox",
        On = function(e, t) {
            return function() {
                return t === e
            }
        },
        Pn = function(e) {
            var t = e.current;
            return {
                current: t,
                version: e.version,
                isEdge: On("Edge", t),
                isChrome: On("Chrome", t),
                isIE: On("IE", t),
                isOpera: On("Opera", t),
                isFirefox: On(Bn, t),
                isSafari: On("Safari", t)
            }
        },
        Ln = {
            unknown: function() {
                return Pn({
                    current: undefined,
                    version: Dn.unknown()
                })
            },
            nu: Pn,
            edge: j("Edge"),
            chrome: j("Chrome"),
            ie: j("IE"),
            opera: j("Opera"),
            firefox: j(Bn),
            safari: j("Safari")
        },
        In = "Windows",
        Mn = "Android",
        Fn = "Solaris",
        zn = "FreeBSD",
        Un = function(e, t) {
            return function() {
                return t === e
            }
        },
        Vn = function(e) {
            var t = e.current;
            return {
                current: t,
                version: e.version,
                isWindows: Un(In, t),
                isiOS: Un("iOS", t),
                isAndroid: Un(Mn, t),
                isOSX: Un("OSX", t),
                isLinux: Un("Linux", t),
                isSolaris: Un(Fn, t),
                isFreeBSD: Un(zn, t)
            }
        },
        Hn = {
            unknown: function() {
                return Vn({
                    current: undefined,
                    version: Dn.unknown()
                })
            },
            nu: Vn,
            windows: j(In),
            ios: j("iOS"),
            android: j(Mn),
            linux: j("Linux"),
            osx: j("OSX"),
            solaris: j(Fn),
            freebsd: j(zn)
        },
        jn = function(e, t) {
            var n = String(t).toLowerCase();
            return V(e, function(e) {
                return e.search(n)
            })
        },
        qn = function(e, n) {
            return jn(e, n).map(function(e) {
                var t = Dn.detect(e.versionRegexes, n);
                return {
                    current: e.name,
                    version: t
                }
            })
        },
        $n = function(e, n) {
            return jn(e, n).map(function(e) {
                var t = Dn.detect(e.versionRegexes, n);
                return {
                    current: e.name,
                    version: t
                }
            })
        },
        Wn = function(e, t) {
            return -1 !== e.indexOf(t)
        },
        Kn = function(e) {
            return e.replace(/^\s+|\s+$/g, "")
        },
        Xn = function(e) {
            return e.replace(/\s+$/g, "")
        },
        Yn = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
        Gn = function(t) {
            return function(e) {
                return Wn(e, t)
            }
        },
        Jn = [{
            name: "Edge",
            versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
            search: function(e) {
                return Wn(e, "edge/") && Wn(e, "chrome") && Wn(e, "safari") && Wn(e, "applewebkit")
            }
        }, {
            name: "Chrome",
            versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, Yn],
            search: function(e) {
                return Wn(e, "chrome") && !Wn(e, "chromeframe")
            }
        }, {
            name: "IE",
            versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/],
            search: function(e) {
                return Wn(e, "msie") || Wn(e, "trident")
            }
        }, {
            name: "Opera",
            versionRegexes: [Yn, /.*?opera\/([0-9]+)\.([0-9]+).*/],
            search: Gn("opera")
        }, {
            name: "Firefox",
            versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
            search: Gn("firefox")
        }, {
            name: "Safari",
            versionRegexes: [Yn, /.*?cpu os ([0-9]+)_([0-9]+).*/],
            search: function(e) {
                return (Wn(e, "safari") || Wn(e, "mobile/")) && Wn(e, "applewebkit")
            }
        }],
        Qn = [{
            name: "Windows",
            search: Gn("win"),
            versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
        }, {
            name: "iOS",
            search: function(e) {
                return Wn(e, "iphone") || Wn(e, "ipad")
            },
            versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/]
        }, {
            name: "Android",
            search: Gn("android"),
            versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
        }, {
            name: "OSX",
            search: Gn("os x"),
            versionRegexes: [/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]
        }, {
            name: "Linux",
            search: Gn("linux"),
            versionRegexes: []
        }, {
            name: "Solaris",
            search: Gn("sunos"),
            versionRegexes: []
        }, {
            name: "FreeBSD",
            search: Gn("freebsd"),
            versionRegexes: []
        }],
        Zn = {
            browsers: j(Jn),
            oses: j(Qn)
        },
        er = function(e) {
            var t, n, r, o, i, a, u, s, c, l, f, d = Zn.browsers(),
                m = Zn.oses(),
                g = qn(d, e).fold(Ln.unknown, Ln.nu),
                p = $n(m, e).fold(Hn.unknown, Hn.nu);
            return {
                browser: g,
                os: p,
                deviceType: (n = g, r = e, o = (t = p).isiOS() && !0 === /ipad/i.test(r), i = t.isiOS() && !o, a = t.isAndroid() && 3 === t.version.major, u = t.isAndroid() && 4 === t.version.major, s = o || a || u && !0 === /mobile/i.test(r), c = t.isiOS() || t.isAndroid(), l = c && !s, f = n.isSafari() && t.isiOS() && !1 === /safari/i.test(r), {
                    isiPad: j(o),
                    isiPhone: j(i),
                    isTablet: j(s),
                    isPhone: j(l),
                    isTouch: j(c),
                    isAndroid: t.isAndroid,
                    isiOS: t.isiOS,
                    isWebView: j(f)
                })
            }
        },
        tr = {
            detect: (Sn = function() {
                var e = navigator.userAgent;
                return er(e)
            }, Tn = !1, function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return Tn || (Tn = !0, kn = Sn.apply(null, e)), kn
            })
        },
        nr = function(e) {
            if (null === e || e === undefined) throw new Error("Node cannot be null or undefined");
            return {
                dom: j(e)
            }
        },
        rr = {
            fromHtml: function(e, t) {
                var n = (t || document).createElement("div");
                if (n.innerHTML = e, !n.hasChildNodes() || 1 < n.childNodes.length) throw console.error("HTML does not have a single root node", e), "HTML must have a single root node";
                return nr(n.childNodes[0])
            },
            fromTag: function(e, t) {
                var n = (t || document).createElement(e);
                return nr(n)
            },
            fromText: function(e, t) {
                var n = (t || document).createTextNode(e);
                return nr(n)
            },
            fromDom: nr,
            fromPoint: function(e, t, n) {
                var r = e.dom();
                return A.from(r.elementFromPoint(t, n)).map(nr)
            }
        },
        or = (Node.ATTRIBUTE_NODE, Node.CDATA_SECTION_NODE, Node.COMMENT_NODE, Node.DOCUMENT_NODE),
        ir = (Node.DOCUMENT_TYPE_NODE, Node.DOCUMENT_FRAGMENT_NODE, Node.ELEMENT_NODE),
        ar = Node.TEXT_NODE,
        ur = (Node.PROCESSING_INSTRUCTION_NODE, Node.ENTITY_REFERENCE_NODE, Node.ENTITY_NODE, Node.NOTATION_NODE, function(e) {
            return e.dom().nodeName.toLowerCase()
        }),
        sr = function(t) {
            return function(e) {
                return e.dom().nodeType === t
            }
        },
        cr = sr(ir),
        lr = sr(ar),
        fr = Object.keys,
        dr = Object.hasOwnProperty,
        mr = function(e, t) {
            for (var n = fr(e), r = 0, o = n.length; r < o; r++) {
                var i = n[r];
                t(e[i], i, e)
            }
        },
        gr = function(r, o) {
            var i = {};
            return mr(r, function(e, t) {
                var n = o(e, t, r);
                i[n.k] = n.v
            }), i
        },
        pr = function(e, t, n) {
            if (!(R(n) || O(n) || L(n))) throw console.error("Invalid call to Attr.set. Key ", t, ":: Value ", n, ":: Element ", e), new Error("Attribute value was not simple");
            e.setAttribute(t, n + "")
        },
        hr = function(e, t, n) {
            pr(e.dom(), t, n)
        },
        vr = function(e, t) {
            var n = e.dom();
            mr(t, function(e, t) {
                pr(n, t, e)
            })
        },
        br = function(e, t) {
            var n = e.dom().getAttribute(t);
            return null === n ? undefined : n
        },
        yr = function(e, t) {
            e.dom().removeAttribute(t)
        },
        Cr = function(e) {
            return e.style !== undefined
        },
        xr = function(e, t) {
            var n = e.dom();
            mr(t, function(e, t) {
                ! function(e, t, n) {
                    if (!R(n)) throw console.error("Invalid call to CSS.set. Property ", t, ":: Value ", n, ":: Element ", e), new Error("CSS value must be a string: " + n);
                    Cr(e) && e.style.setProperty(t, n)
                }(n, t, e)
            })
        },
        wr = function(e, t) {
            var n, r, o = e.dom(),
                i = window.getComputedStyle(o).getPropertyValue(t),
                a = "" !== i || (r = lr(n = e) ? n.dom().parentNode : n.dom()) !== undefined && null !== r && r.ownerDocument.body.contains(r) ? i : Nr(o, t);
            return null === a ? undefined : a
        },
        Nr = function(e, t) {
            return Cr(e) ? e.style.getPropertyValue(t) : ""
        },
        Er = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return function() {
                for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
                if (t.length !== n.length) throw new Error('Wrong number of arguments to struct. Expected "[' + t.length + ']", got ' + n.length + " arguments");
                var r = {};
                return F(t, function(e, t) {
                    r[e] = j(n[t])
                }), r
            }
        },
        Sr = function(e, t) {
            for (var n = [], r = function(e) {
                return n.push(e), t(e)
            }, o = t(e);
                 (o = o.bind(r)).isSome(););
            return n
        },
        kr = function() {
            return ie.getOrDie("Node")
        },
        Tr = function(e, t, n) {
            return 0 != (e.compareDocumentPosition(t) & n)
        },
        Ar = function(e, t) {
            return Tr(e, t, kr().DOCUMENT_POSITION_CONTAINED_BY)
        },
        Rr = ir,
        _r = or,
        Dr = function(e, t) {
            var n = e.dom();
            if (n.nodeType !== Rr) return !1;
            if (n.matches !== undefined) return n.matches(t);
            if (n.msMatchesSelector !== undefined) return n.msMatchesSelector(t);
            if (n.webkitMatchesSelector !== undefined) return n.webkitMatchesSelector(t);
            if (n.mozMatchesSelector !== undefined) return n.mozMatchesSelector(t);
            throw new Error("Browser lacks native selectors")
        },
        Br = function(e) {
            return e.nodeType !== Rr && e.nodeType !== _r || 0 === e.childElementCount
        },
        Or = function(e, t) {
            return e.dom() === t.dom()
        },
        Pr = tr.detect().browser.isIE() ? function(e, t) {
            return Ar(e.dom(), t.dom())
        } : function(e, t) {
            var n = e.dom(),
                r = t.dom();
            return n !== r && n.contains(r)
        },
        Lr = function(e) {
            return rr.fromDom(e.dom().ownerDocument)
        },
        Ir = function(e) {
            var t = e.dom();
            return A.from(t.parentNode).map(rr.fromDom)
        },
        Mr = function(e) {
            var t = e.dom();
            return A.from(t.previousSibling).map(rr.fromDom)
        },
        Fr = function(e) {
            var t = e.dom();
            return A.from(t.nextSibling).map(rr.fromDom)
        },
        zr = function(e) {
            return t = Sr(e, Mr), (n = Q.call(t, 0)).reverse(), n;
            var t, n
        },
        Ur = function(e) {
            return Sr(e, Fr)
        },
        Vr = function(e) {
            var t = e.dom();
            return $(t.childNodes, rr.fromDom)
        },
        Hr = function(e, t) {
            var n = e.dom().childNodes;
            return A.from(n[t]).map(rr.fromDom)
        },
        jr = function(e) {
            return Hr(e, 0)
        },
        qr = function(e) {
            return Hr(e, e.dom().childNodes.length - 1)
        },
        $r = (Er("element", "offset"), tr.detect().browser),
        Wr = function(e) {
            return V(e, cr)
        },
        Kr = {
            getPos: function(e, t, n) {
                var r, o, i, a = 0,
                    u = 0,
                    s = e.ownerDocument;
                if (n = n || e, t) {
                    if (n === e && t.getBoundingClientRect && "static" === wr(rr.fromDom(e), "position")) return {
                        x: a = (o = t.getBoundingClientRect()).left + (s.documentElement.scrollLeft || e.scrollLeft) - s.documentElement.clientLeft,
                        y: u = o.top + (s.documentElement.scrollTop || e.scrollTop) - s.documentElement.clientTop
                    };
                    for (r = t; r && r !== n && r.nodeType;) a += r.offsetLeft || 0, u += r.offsetTop || 0, r = r.offsetParent;
                    for (r = t.parentNode; r && r !== n && r.nodeType;) a -= r.scrollLeft || 0, u -= r.scrollTop || 0, r = r.parentNode;
                    u += (i = rr.fromDom(t), $r.isFirefox() && "table" === ur(i) ? Wr(Vr(i)).filter(function(e) {
                        return "caption" === ur(e)
                    }).bind(function(o) {
                        return Wr(Ur(o)).map(function(e) {
                            var t = e.dom().offsetTop,
                                n = o.dom().offsetTop,
                                r = o.dom().offsetHeight;
                            return t <= n ? -r : 0
                        })
                    }).getOr(0) : 0)
                }
                return {
                    x: a,
                    y: u
                }
            }
        },
        Xr = function(e) {
            var n = A.none(),
                t = [],
                r = function(e) {
                    o() ? a(e) : t.push(e)
                },
                o = function() {
                    return n.isSome()
                },
                i = function(e) {
                    F(e, a)
                },
                a = function(t) {
                    n.each(function(e) {
                        setTimeout(function() {
                            t(e)
                        }, 0)
                    })
                };
            return e(function(e) {
                n = A.some(e), i(t), t = []
            }), {
                get: r,
                map: function(n) {
                    return Xr(function(t) {
                        r(function(e) {
                            t(n(e))
                        })
                    })
                },
                isReady: o
            }
        },
        Yr = {
            nu: Xr,
            pure: function(t) {
                return Xr(function(e) {
                    e(t)
                })
            }
        },
        Gr = function(t) {
            var e = function(e) {
                    var r;
                    t((r = e, function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        var n = this;
                        setTimeout(function() {
                            r.apply(n, e)
                        }, 0)
                    }))
                },
                n = function() {
                    return Yr.nu(e)
                };
            return {
                map: function(r) {
                    return Gr(function(n) {
                        e(function(e) {
                            var t = r(e);
                            n(t)
                        })
                    })
                },
                bind: function(n) {
                    return Gr(function(t) {
                        e(function(e) {
                            n(e).get(t)
                        })
                    })
                },
                anonBind: function(n) {
                    return Gr(function(t) {
                        e(function(e) {
                            n.get(t)
                        })
                    })
                },
                toLazy: n,
                toCached: function() {
                    var t = null;
                    return Gr(function(e) {
                        null === t && (t = n()), t.get(e)
                    })
                },
                get: e
            }
        },
        Jr = {
            nu: Gr,
            pure: function(t) {
                return Gr(function(e) {
                    e(t)
                })
            }
        },
        Qr = function(a, e) {
            return e(function(r) {
                var o = [],
                    i = 0;
                0 === a.length ? r([]) : F(a, function(e, t) {
                    var n;
                    e.get((n = t, function(e) {
                        o[n] = e, ++i >= a.length && r(o)
                    }))
                })
            })
        },
        Zr = function(e) {
            return Qr(e, Jr.nu)
        },
        eo = function(n) {
            return {
                is: function(e) {
                    return n === e
                },
                isValue: x,
                isError: C,
                getOr: j(n),
                getOrThunk: j(n),
                getOrDie: j(n),
                or: function(e) {
                    return eo(n)
                },
                orThunk: function(e) {
                    return eo(n)
                },
                fold: function(e, t) {
                    return t(n)
                },
                map: function(e) {
                    return eo(e(n))
                },
                mapError: function(e) {
                    return eo(n)
                },
                each: function(e) {
                    e(n)
                },
                bind: function(e) {
                    return e(n)
                },
                exists: function(e) {
                    return e(n)
                },
                forall: function(e) {
                    return e(n)
                },
                toOption: function() {
                    return A.some(n)
                }
            }
        },
        to = function(n) {
            return {
                is: C,
                isValue: C,
                isError: x,
                getOr: q,
                getOrThunk: function(e) {
                    return e()
                },
                getOrDie: function() {
                    return e = String(n),
                        function() {
                            throw new Error(e)
                        }();
                    var e
                },
                or: function(e) {
                    return e
                },
                orThunk: function(e) {
                    return e()
                },
                fold: function(e, t) {
                    return e(n)
                },
                map: function(e) {
                    return to(n)
                },
                mapError: function(e) {
                    return to(e(n))
                },
                each: o,
                bind: function(e) {
                    return to(n)
                },
                exists: C,
                forall: x,
                toOption: A.none
            }
        },
        no = {
            value: eo,
            error: to
        };

    function ro(e, u) {
        var t = e,
            n = function(e, t, n, r) {
                var o, i;
                if (e) {
                    if (!r && e[t]) return e[t];
                    if (e !== u) {
                        if (o = e[n]) return o;
                        for (i = e.parentNode; i && i !== u; i = i.parentNode)
                            if (o = i[n]) return o
                    }
                }
            };
        this.current = function() {
            return t
        }, this.next = function(e) {
            return t = n(t, "firstChild", "nextSibling", e)
        }, this.prev = function(e) {
            return t = n(t, "lastChild", "previousSibling", e)
        }, this.prev2 = function(e) {
            return t = function(e, t, n, r) {
                var o, i, a;
                if (e) {
                    if (o = e[n], u && o === u) return;
                    if (o) {
                        if (!r)
                            for (a = o[t]; a; a = a[t])
                                if (!a[t]) return a;
                        return o
                    }
                    if ((i = e.parentNode) && i !== u) return i
                }
            }(t, "lastChild", "previousSibling", e)
        }
    }
    var oo, io, ao, uo = function(t) {
            var n;
            return function(e) {
                return (n = n || function(e, t) {
                    for (var n = {}, r = 0, o = e.length; r < o; r++) {
                        var i = e[r];
                        n[String(i)] = t(i, r)
                    }
                    return n
                }(t, j(!0))).hasOwnProperty(ur(e))
            }
        },
        so = uo(["h1", "h2", "h3", "h4", "h5", "h6"]),
        co = uo(["article", "aside", "details", "div", "dt", "figcaption", "footer", "form", "fieldset", "header", "hgroup", "html", "main", "nav", "section", "summary", "body", "p", "dl", "multicol", "dd", "figure", "address", "center", "blockquote", "h1", "h2", "h3", "h4", "h5", "h6", "listing", "xmp", "pre", "plaintext", "menu", "dir", "ul", "ol", "li", "hr", "table", "tbody", "thead", "tfoot", "th", "tr", "td", "caption"]),
        lo = function(e) {
            return cr(e) && !co(e)
        },
        fo = function(e) {
            return cr(e) && "br" === ur(e)
        },
        mo = uo(["h1", "h2", "h3", "h4", "h5", "h6", "p", "div", "address", "pre", "form", "blockquote", "center", "dir", "fieldset", "header", "footer", "article", "section", "hgroup", "aside", "nav", "figure"]),
        go = uo(["ul", "ol", "dl"]),
        po = uo(["li", "dd", "dt"]),
        ho = uo(["area", "base", "basefont", "br", "col", "frame", "hr", "img", "input", "isindex", "link", "meta", "param", "embed", "source", "wbr", "track"]),
        vo = uo(["thead", "tbody", "tfoot"]),
        bo = uo(["td", "th"]),
        yo = uo(["pre", "script", "textarea", "style"]),
        Co = function(t) {
            return function(e) {
                return !!e && e.nodeType === t
            }
        },
        xo = Co(1),
        wo = function(e) {
            var r = e.toLowerCase().split(" ");
            return function(e) {
                var t, n;
                if (e && e.nodeType)
                    for (n = e.nodeName.toLowerCase(), t = 0; t < r.length; t++)
                        if (n === r[t]) return !0;
                return !1
            }
        },
        No = function(t) {
            return function(e) {
                if (xo(e)) {
                    if (e.contentEditable === t) return !0;
                    if (e.getAttribute("data-mce-contenteditable") === t) return !0
                }
                return !1
            }
        },
        Eo = Co(3),
        So = Co(8),
        ko = Co(9),
        To = wo("br"),
        Ao = No("true"),
        Ro = No("false"),
        _o = {
            isText: Eo,
            isElement: xo,
            isComment: So,
            isDocument: ko,
            isBr: To,
            isContentEditableTrue: Ao,
            isContentEditableFalse: Ro,
            matchNodeNames: wo,
            hasPropValue: function(t, n) {
                return function(e) {
                    return xo(e) && e[t] === n
                }
            },
            hasAttribute: function(t, e) {
                return function(e) {
                    return xo(e) && e.hasAttribute(t)
                }
            },
            hasAttributeValue: function(t, n) {
                return function(e) {
                    return xo(e) && e.getAttribute(t) === n
                }
            },
            matchStyleValues: function(r, e) {
                var o = e.toLowerCase().split(" ");
                return function(e) {
                    var t;
                    if (xo(e))
                        for (t = 0; t < o.length; t++) {
                            var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
                            if ((n ? n.getPropertyValue(r) : null) === o[t]) return !0
                        }
                    return !1
                }
            },
            isBogus: function(e) {
                return xo(e) && e.hasAttribute("data-mce-bogus")
            },
            isBogusAll: function(e) {
                return xo(e) && "all" === e.getAttribute("data-mce-bogus")
            },
            isTable: function(e) {
                return xo(e) && "TABLE" === e.tagName
            }
        },
        Do = function(e) {
            return e && "SPAN" === e.tagName && "bookmark" === e.getAttribute("data-mce-type")
        },
        Bo = function(e, t) {
            var n, r = t.childNodes;
            if (!_o.isElement(t) || !Do(t)) {
                for (n = r.length - 1; 0 <= n; n--) Bo(e, r[n]);
                if (!1 === _o.isDocument(t)) {
                    if (_o.isText(t) && 0 < t.nodeValue.length) {
                        var o = Yt.trim(t.nodeValue).length;
                        if (e.isBlock(t.parentNode) || 0 < o) return;
                        if (0 === o && (a = (i = t).previousSibling && "SPAN" === i.previousSibling.nodeName, u = i.nextSibling && "SPAN" === i.nextSibling.nodeName, a && u)) return
                    } else if (_o.isElement(t) && (1 === (r = t.childNodes).length && Do(r[0]) && t.parentNode.insertBefore(r[0], t), r.length || ho(rr.fromDom(t)))) return;
                    e.remove(t)
                }
                var i, a, u;
                return t
            }
        },
        Oo = {
            trimNode: Bo
        },
        Po = Yt.makeMap,
        Lo = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        Io = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        Mo = /[<>&\"\']/g,
        Fo = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi,
        zo = {
            128: "\u20ac",
            130: "\u201a",
            131: "\u0192",
            132: "\u201e",
            133: "\u2026",
            134: "\u2020",
            135: "\u2021",
            136: "\u02c6",
            137: "\u2030",
            138: "\u0160",
            139: "\u2039",
            140: "\u0152",
            142: "\u017d",
            145: "\u2018",
            146: "\u2019",
            147: "\u201c",
            148: "\u201d",
            149: "\u2022",
            150: "\u2013",
            151: "\u2014",
            152: "\u02dc",
            153: "\u2122",
            154: "\u0161",
            155: "\u203a",
            156: "\u0153",
            158: "\u017e",
            159: "\u0178"
        };
    io = {
        '"': "&quot;",
        "'": "&#39;",
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        "`": "&#96;"
    }, ao = {
        "&lt;": "<",
        "&gt;": ">",
        "&amp;": "&",
        "&quot;": '"',
        "&apos;": "'"
    };
    var Uo = function(e, t) {
        var n, r, o, i = {};
        if (e) {
            for (e = e.split(","), t = t || 10, n = 0; n < e.length; n += 2) r = String.fromCharCode(parseInt(e[n], t)), io[r] || (o = "&" + e[n + 1] + ";", i[r] = o, i[o] = r);
            return i
        }
    };
    oo = Uo("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro", 32);
    var Vo = function(e, t) {
            return e.replace(t ? Lo : Io, function(e) {
                return io[e] || e
            })
        },
        Ho = function(e, t) {
            return e.replace(t ? Lo : Io, function(e) {
                return 1 < e.length ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : io[e] || "&#" + e.charCodeAt(0) + ";"
            })
        },
        jo = function(e, t, n) {
            return n = n || oo, e.replace(t ? Lo : Io, function(e) {
                return io[e] || n[e] || e
            })
        },
        qo = {
            encodeRaw: Vo,
            encodeAllRaw: function(e) {
                return ("" + e).replace(Mo, function(e) {
                    return io[e] || e
                })
            },
            encodeNumeric: Ho,
            encodeNamed: jo,
            getEncodeFunc: function(e, t) {
                var n = Uo(t) || oo,
                    r = Po(e.replace(/\+/g, ","));
                return r.named && r.numeric ? function(e, t) {
                    return e.replace(t ? Lo : Io, function(e) {
                        return io[e] !== undefined ? io[e] : n[e] !== undefined ? n[e] : 1 < e.length ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : "&#" + e.charCodeAt(0) + ";"
                    })
                } : r.named ? t ? function(e, t) {
                    return jo(e, t, n)
                } : jo : r.numeric ? Ho : Vo
            },
            decode: function(e) {
                return e.replace(Fo, function(e, t) {
                    return t ? 65535 < (t = "x" === t.charAt(0).toLowerCase() ? parseInt(t.substr(1), 16) : parseInt(t, 10)) ? (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t))) : zo[t] || String.fromCharCode(t) : ao[e] || oo[e] || (n = e, (r = rr.fromTag("div").dom()).innerHTML = n, r.textContent || r.innerText || n);
                    var n, r
                })
            }
        },
        $o = {},
        Wo = {},
        Ko = Yt.makeMap,
        Xo = Yt.each,
        Yo = Yt.extend,
        Go = Yt.explode,
        Jo = Yt.inArray,
        Qo = function(e, t) {
            return (e = Yt.trim(e)) ? e.split(t || " ") : []
        },
        Zo = function(e) {
            var u, t, n, r, o, i, s = {},
                a = function(e, t, n) {
                    var r, o, i, a = function(e, t) {
                        var n, r, o = {};
                        for (n = 0, r = e.length; n < r; n++) o[e[n]] = t || {};
                        return o
                    };
                    for (t = t || "", "string" == typeof(n = n || []) && (n = Qo(n)), r = (e = Qo(e)).length; r--;) i = {
                        attributes: a(o = Qo([u, t].join(" "))),
                        attributesOrder: o,
                        children: a(n, Wo)
                    }, s[e[r]] = i
                },
                c = function(e, t) {
                    var n, r, o, i;
                    for (n = (e = Qo(e)).length, t = Qo(t); n--;)
                        for (r = s[e[n]], o = 0, i = t.length; o < i; o++) r.attributes[t[o]] = {}, r.attributesOrder.push(t[o])
                };
            return $o[e] ? $o[e] : (u = "id accesskey class dir lang style tabindex title role", t = "address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul", n = "a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment", "html4" !== e && (u += " contenteditable contextmenu draggable dropzone hidden spellcheck translate", t += " article aside details dialog figure main header footer hgroup section nav", n += " audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"), "html5-strict" !== e && (u += " xml:lang", n = [n, i = "acronym applet basefont big font strike tt"].join(" "), Xo(Qo(i), function(e) {
                a(e, "", n)
            }), t = [t, o = "center dir isindex noframes"].join(" "), r = [t, n].join(" "), Xo(Qo(o), function(e) {
                a(e, "", r)
            })), r = r || [t, n].join(" "), a("html", "manifest", "head body"), a("head", "", "base command link meta noscript script style title"), a("title hr noscript br"), a("base", "href target"), a("link", "href rel media hreflang type sizes hreflang"), a("meta", "name http-equiv content charset"), a("style", "media type scoped"), a("script", "src async defer type charset"), a("body", "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload", r), a("address dt dd div caption", "", r), a("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn", "", n), a("blockquote", "cite", r), a("ol", "reversed start type", "li"), a("ul", "", "li"), a("li", "value", r), a("dl", "", "dt dd"), a("a", "href target rel media hreflang type", n), a("q", "cite", n), a("ins del", "cite datetime", r), a("img", "src sizes srcset alt usemap ismap width height"), a("iframe", "src name width height", r), a("embed", "src type width height"), a("object", "data type typemustmatch name usemap form width height", [r, "param"].join(" ")), a("param", "name value"), a("map", "name", [r, "area"].join(" ")), a("area", "alt coords shape href target rel media hreflang type"), a("table", "border", "caption colgroup thead tfoot tbody tr" + ("html4" === e ? " col" : "")), a("colgroup", "span", "col"), a("col", "span"), a("tbody thead tfoot", "", "tr"), a("tr", "", "td th"), a("td", "colspan rowspan headers", r), a("th", "colspan rowspan headers scope abbr", r), a("form", "accept-charset action autocomplete enctype method name novalidate target", r), a("fieldset", "disabled form name", [r, "legend"].join(" ")), a("label", "form for", n), a("input", "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"), a("button", "disabled form formaction formenctype formmethod formnovalidate formtarget name type value", "html4" === e ? r : n), a("select", "disabled form multiple name required size", "option optgroup"), a("optgroup", "disabled label", "option"), a("option", "disabled label selected value"), a("textarea", "cols dirname disabled form maxlength name readonly required rows wrap"), a("menu", "type label", [r, "li"].join(" ")), a("noscript", "", r), "html4" !== e && (a("wbr"), a("ruby", "", [n, "rt rp"].join(" ")), a("figcaption", "", r), a("mark rt rp summary bdi", "", n), a("canvas", "width height", r), a("video", "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered", [r, "track source"].join(" ")), a("audio", "src crossorigin preload autoplay mediagroup loop muted controls buffered volume", [r, "track source"].join(" ")), a("picture", "", "img source"), a("source", "src srcset type media sizes"), a("track", "kind src srclang label default"), a("datalist", "", [n, "option"].join(" ")), a("article section nav aside main header footer", "", r), a("hgroup", "", "h1 h2 h3 h4 h5 h6"), a("figure", "", [r, "figcaption"].join(" ")), a("time", "datetime", n), a("dialog", "open", r), a("command", "type label icon disabled checked radiogroup command"), a("output", "for form name", n), a("progress", "value max", n), a("meter", "value min max low high optimum", n), a("details", "open", [r, "summary"].join(" ")), a("keygen", "autofocus challenge disabled form keytype name")), "html5-strict" !== e && (c("script", "language xml:space"), c("style", "xml:space"), c("object", "declare classid code codebase codetype archive standby align border hspace vspace"), c("embed", "align name hspace vspace"), c("param", "valuetype type"), c("a", "charset name rev shape coords"), c("br", "clear"), c("applet", "codebase archive code object alt name width height align hspace vspace"), c("img", "name longdesc align border hspace vspace"), c("iframe", "longdesc frameborder marginwidth marginheight scrolling align"), c("font basefont", "size color face"), c("input", "usemap align"), c("select", "onchange"), c("textarea"), c("h1 h2 h3 h4 h5 h6 div p legend caption", "align"), c("ul", "type compact"), c("li", "type"), c("ol dl menu dir", "compact"), c("pre", "width xml:space"), c("hr", "align noshade size width"), c("isindex", "prompt"), c("table", "summary width frame rules cellspacing cellpadding align bgcolor"), c("col", "width align char charoff valign"), c("colgroup", "width align char charoff valign"), c("thead", "align char charoff valign"), c("tr", "align char charoff valign bgcolor"), c("th", "axis align char charoff valign nowrap bgcolor width height"), c("form", "accept"), c("td", "abbr axis scope align char charoff valign nowrap bgcolor width height"), c("tfoot", "align char charoff valign"), c("tbody", "align char charoff valign"), c("area", "nohref"), c("body", "background bgcolor text link vlink alink")), "html4" !== e && (c("input button select textarea", "autofocus"), c("input textarea", "placeholder"), c("a", "download"), c("link script img", "crossorigin"), c("iframe", "sandbox seamless allowfullscreen")), Xo(Qo("a form meter progress dfn"), function(e) {
                s[e] && delete s[e].children[e]
            }), delete s.caption.children.table, delete s.script, $o[e] = s)
        },
        ei = function(e, n) {
            var r;
            return e && (r = {}, "string" == typeof e && (e = {
                "*": e
            }), Xo(e, function(e, t) {
                r[t] = r[t.toUpperCase()] = "map" === n ? Ko(e, /[, ]/) : Go(e, /[, ]/)
            })), r
        };

    function ti(i) {
        var e, t, n, r, o, a, u, s, c, l, f, d, m, N = {},
            g = {},
            E = [],
            p = {},
            h = {},
            v = function(e, t, n) {
                var r = i[e];
                return r ? r = Ko(r, /[, ]/, Ko(r.toUpperCase(), /[, ]/)) : (r = $o[e]) || (r = Ko(t, " ", Ko(t.toUpperCase(), " ")), r = Yo(r, n), $o[e] = r), r
            };
        n = Zo((i = i || {}).schema), !1 === i.verify_html && (i.valid_elements = "*[*]"), e = ei(i.valid_styles), t = ei(i.invalid_styles, "map"), s = ei(i.valid_classes, "map"), r = v("whitespace_elements", "pre script noscript style textarea video audio iframe object code"), o = v("self_closing_elements", "colgroup dd dt li option p td tfoot th thead tr"), a = v("short_ended_elements", "area base basefont br col frame hr img input isindex link meta param embed source wbr track"), u = v("boolean_attributes", "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"), l = v("non_empty_elements", "td th iframe video audio object script pre code", a), f = v("move_caret_before_on_enter_elements", "table", l), d = v("text_block_elements", "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"), c = v("block_elements", "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary", d), m = v("text_inline_elements", "span strong b em i font strike u var cite dfn code mark q sup sub samp"), Xo((i.special || "script noscript noframes noembed title style textarea xmp").split(" "), function(e) {
            h[e] = new RegExp("</" + e + "[^>]*>", "gi")
        });
        var S = function(e) {
                return new RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$")
            },
            b = function(e) {
                var t, n, r, o, i, a, u, s, c, l, f, d, m, g, p, h, v, b, y, C = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)\])?$/,
                    x = /^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/,
                    w = /[*?+]/;
                if (e)
                    for (e = Qo(e, ","), N["@"] && (h = N["@"].attributes, v = N["@"].attributesOrder), t = 0, n = e.length; t < n; t++)
                        if (i = C.exec(e[t])) {
                            if (g = i[1], c = i[2], p = i[3], s = i[5], a = {
                                attributes: d = {},
                                attributesOrder: m = []
                            }, "#" === g && (a.paddEmpty = !0), "-" === g && (a.removeEmpty = !0), "!" === i[4] && (a.removeEmptyAttrs = !0), h) {
                                for (b in h) d[b] = h[b];
                                m.push.apply(m, v)
                            }
                            if (s)
                                for (r = 0, o = (s = Qo(s, "|")).length; r < o; r++)
                                    if (i = x.exec(s[r])) {
                                        if (u = {}, f = i[1], l = i[2].replace(/[\\:]:/g, ":"), g = i[3], y = i[4], "!" === f && (a.attributesRequired = a.attributesRequired || [], a.attributesRequired.push(l), u.required = !0), "-" === f) {
                                            delete d[l], m.splice(Jo(m, l), 1);
                                            continue
                                        }
                                        g && ("=" === g && (a.attributesDefault = a.attributesDefault || [], a.attributesDefault.push({
                                            name: l,
                                            value: y
                                        }), u.defaultValue = y), ":" === g && (a.attributesForced = a.attributesForced || [], a.attributesForced.push({
                                            name: l,
                                            value: y
                                        }), u.forcedValue = y), "<" === g && (u.validValues = Ko(y, "?"))), w.test(l) ? (a.attributePatterns = a.attributePatterns || [], u.pattern = S(l), a.attributePatterns.push(u)) : (d[l] || m.push(l), d[l] = u)
                                    } h || "@" !== c || (h = d, v = m), p && (a.outputName = c, N[p] = a), w.test(c) ? (a.pattern = S(c), E.push(a)) : N[c] = a
                        }
            },
            y = function(e) {
                N = {}, E = [], b(e), Xo(n, function(e, t) {
                    g[t] = e.children
                })
            },
            C = function(e) {
                var a = /^(~)?(.+)$/;
                e && ($o.text_block_elements = $o.block_elements = null, Xo(Qo(e, ","), function(e) {
                    var t = a.exec(e),
                        n = "~" === t[1],
                        r = n ? "span" : "div",
                        o = t[2];
                    if (g[o] = g[r], p[o] = r, n || (c[o.toUpperCase()] = {}, c[o] = {}), !N[o]) {
                        var i = N[r];
                        delete(i = Yo({}, i)).removeEmptyAttrs, delete i.removeEmpty, N[o] = i
                    }
                    Xo(g, function(e, t) {
                        e[r] && (g[t] = e = Yo({}, g[t]), e[o] = e[r])
                    })
                }))
            },
            x = function(e) {
                var o = /^([+\-]?)(\w+)\[([^\]]+)\]$/;
                $o[i.schema] = null, e && Xo(Qo(e, ","), function(e) {
                    var t, n, r = o.exec(e);
                    r && (n = r[1], t = n ? g[r[2]] : g[r[2]] = {
                        "#comment": {}
                    }, t = g[r[2]], Xo(Qo(r[3], "|"), function(e) {
                        "-" === n ? delete t[e] : t[e] = {}
                    }))
                })
            },
            w = function(e) {
                var t, n = N[e];
                if (n) return n;
                for (t = E.length; t--;)
                    if ((n = E[t]).pattern.test(e)) return n
            };
        return i.valid_elements ? y(i.valid_elements) : (Xo(n, function(e, t) {
            N[t] = {
                attributes: e.attributes,
                attributesOrder: e.attributesOrder
            }, g[t] = e.children
        }), "html5" !== i.schema && Xo(Qo("strong/b em/i"), function(e) {
            e = Qo(e, "/"), N[e[1]].outputName = e[0]
        }), Xo(Qo("ol ul sub sup blockquote span font a table tbody tr strong em b i"), function(e) {
            N[e] && (N[e].removeEmpty = !0)
        }), Xo(Qo("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"), function(e) {
            N[e].paddEmpty = !0
        }), Xo(Qo("span"), function(e) {
            N[e].removeEmptyAttrs = !0
        })), C(i.custom_elements), x(i.valid_children), b(i.extended_valid_elements), x("+ol[ul|ol],+ul[ul|ol]"), Xo({
            dd: "dl",
            dt: "dl",
            li: "ul ol",
            td: "tr",
            th: "tr",
            tr: "tbody thead tfoot",
            tbody: "table",
            thead: "table",
            tfoot: "table",
            legend: "fieldset",
            area: "map",
            param: "video audio object"
        }, function(e, t) {
            N[t] && (N[t].parentsRequired = Qo(e))
        }), i.invalid_elements && Xo(Go(i.invalid_elements), function(e) {
            N[e] && delete N[e]
        }), w("span") || b("span[!data-mce-type|*]"), {
            children: g,
            elements: N,
            getValidStyles: function() {
                return e
            },
            getValidClasses: function() {
                return s
            },
            getBlockElements: function() {
                return c
            },
            getInvalidStyles: function() {
                return t
            },
            getShortEndedElements: function() {
                return a
            },
            getTextBlockElements: function() {
                return d
            },
            getTextInlineElements: function() {
                return m
            },
            getBoolAttrs: function() {
                return u
            },
            getElementRule: w,
            getSelfClosingElements: function() {
                return o
            },
            getNonEmptyElements: function() {
                return l
            },
            getMoveCaretBeforeOnEnterElements: function() {
                return f
            },
            getWhiteSpaceElements: function() {
                return r
            },
            getSpecialElements: function() {
                return h
            },
            isValidChild: function(e, t) {
                var n = g[e.toLowerCase()];
                return !(!n || !n[t.toLowerCase()])
            },
            isValid: function(e, t) {
                var n, r, o = w(e);
                if (o) {
                    if (!t) return !0;
                    if (o.attributes[t]) return !0;
                    if (n = o.attributePatterns)
                        for (r = n.length; r--;)
                            if (n[r].pattern.test(e)) return !0
                }
                return !1
            },
            getCustomElements: function() {
                return p
            },
            addValidElements: b,
            setValidElements: y,
            addCustomElements: C,
            addValidChildren: x
        }
    }
    var ni = function(e, t, n, r) {
        var o = function(e) {
            return 1 < (e = parseInt(e, 10).toString(16)).length ? e : "0" + e
        };
        return "#" + o(t) + o(n) + o(r)
    };

    function ri(y, e) {
        var C, t, c, l, x = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,
            w = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,
            N = /\s*([^:]+):\s*([^;]+);?/g,
            E = /\s+$/,
            S = {},
            k = "\ufeff";
        for (y = y || {}, e && (c = e.getValidStyles(), l = e.getInvalidStyles()), t = ("\\\" \\' \\; \\: ; : " + k).split(" "), C = 0; C < t.length; C++) S[t[C]] = k + C, S[k + C] = t[C];
        return {
            toHex: function(e) {
                return e.replace(x, ni)
            },
            parse: function(e) {
                var t, n, r, o, i, a, u, s, c = {},
                    l = y.url_converter,
                    f = y.url_converter_scope || this,
                    d = function(e, t, n) {
                        var r, o, i, a;
                        if ((r = c[e + "-top" + t]) && (o = c[e + "-right" + t]) && (i = c[e + "-bottom" + t]) && (a = c[e + "-left" + t])) {
                            var u = [r, o, i, a];
                            for (C = u.length - 1; C-- && u[C] === u[C + 1];); - 1 < C && n || (c[e + t] = -1 === C ? u[0] : u.join(" "), delete c[e + "-top" + t], delete c[e + "-right" + t], delete c[e + "-bottom" + t], delete c[e + "-left" + t])
                        }
                    },
                    m = function(e) {
                        var t, n = c[e];
                        if (n) {
                            for (t = (n = n.split(" ")).length; t--;)
                                if (n[t] !== n[0]) return !1;
                            return c[e] = n[0], !0
                        }
                    },
                    g = function(e) {
                        return o = !0, S[e]
                    },
                    p = function(e, t) {
                        return o && (e = e.replace(/\uFEFF[0-9]/g, function(e) {
                            return S[e]
                        })), t || (e = e.replace(/\\([\'\";:])/g, "$1")), e
                    },
                    h = function(e) {
                        return String.fromCharCode(parseInt(e.slice(1), 16))
                    },
                    v = function(e) {
                        return e.replace(/\\[0-9a-f]+/gi, h)
                    },
                    b = function(e, t, n, r, o, i) {
                        if (o = o || i) return "'" + (o = p(o)).replace(/\'/g, "\\'") + "'";
                        if (t = p(t || n || r), !y.allow_script_urls) {
                            var a = t.replace(/[\s\r\n]+/g, "");
                            if (/(java|vb)script:/i.test(a)) return "";
                            if (!y.allow_svg_data_urls && /^data:image\/svg/i.test(a)) return ""
                        }
                        return l && (t = l.call(f, t, "style")), "url('" + t.replace(/\'/g, "\\'") + "')"
                    };
                if (e) {
                    for (e = (e = e.replace(/[\u0000-\u001F]/g, "")).replace(/\\[\"\';:\uFEFF]/g, g).replace(/\"[^\"]+\"|\'[^\']+\'/g, function(e) {
                        return e.replace(/[;:]/g, g)
                    }); t = N.exec(e);)
                        if (N.lastIndex = t.index + t[0].length, n = t[1].replace(E, "").toLowerCase(), r = t[2].replace(E, ""), n && r) {
                            if (n = v(n), r = v(r), -1 !== n.indexOf(k) || -1 !== n.indexOf('"')) continue;
                            if (!y.allow_script_urls && ("behavior" === n || /expression\s*\(|\/\*|\*\//.test(r))) continue;
                            "font-weight" === n && "700" === r ? r = "bold" : "color" !== n && "background-color" !== n || (r = r.toLowerCase()), r = (r = r.replace(x, ni)).replace(w, b), c[n] = o ? p(r, !0) : r
                        } d("border", "", !0), d("border", "-width"), d("border", "-color"), d("border", "-style"), d("padding", ""), d("margin", ""), i = "border", u = "border-style", s = "border-color", m(a = "border-width") && m(u) && m(s) && (c[i] = c[a] + " " + c[u] + " " + c[s], delete c[a], delete c[u], delete c[s]), "medium none" === c.border && delete c.border, "none" === c["border-image"] && delete c["border-image"]
                }
                return c
            },
            serialize: function(i, e) {
                var t, n, r, o, a, u = "",
                    s = function(e) {
                        var t, n, r, o;
                        if (t = c[e])
                            for (n = 0, r = t.length; n < r; n++) e = t[n], (o = i[e]) && (u += (0 < u.length ? " " : "") + e + ": " + o + ";")
                    };
                if (e && c) s("*"), s(e);
                else
                    for (t in i) !(n = i[t]) || l && (r = t, o = e, a = void 0, (a = l["*"]) && a[r] || (a = l[o]) && a[r]) || (u += (0 < u.length ? " " : "") + t + ": " + n + ";");
                return u
            }
        }
    }
    var oi, ii = Yt.each,
        ai = Yt.grep,
        ui = de.ie,
        si = /^([a-z0-9],?)+$/i,
        ci = /^[ \t\r\n]*$/,
        li = function(n, r, o) {
            var e = {},
                i = r.keep_values,
                t = {
                    set: function(e, t, n) {
                        r.url_converter && (t = r.url_converter.call(r.url_converter_scope || o(), t, n, e[0])), e.attr("data-mce-" + n, t).attr(n, t)
                    },
                    get: function(e, t) {
                        return e.attr("data-mce-" + t) || e.attr(t)
                    }
                };
            return e = {
                style: {
                    set: function(e, t) {
                        null === t || "object" != typeof t ? (i && e.attr("data-mce-style", t), e.attr("style", t)) : e.css(t)
                    },
                    get: function(e) {
                        var t = e.attr("data-mce-style") || e.attr("style");
                        return t = n.serialize(n.parse(t), e[0].nodeName)
                    }
                }
            }, i && (e.href = e.src = t), e
        },
        fi = function(e, t) {
            var n = t.attr("style"),
                r = e.serialize(e.parse(n), t[0].nodeName);
            r || (r = null), t.attr("data-mce-style", r)
        },
        di = function(e, t) {
            var n, r, o = 0;
            if (e)
                for (n = e.nodeType, e = e.previousSibling; e; e = e.previousSibling) r = e.nodeType, (!t || 3 !== r || r !== n && e.nodeValue.length) && (o++, n = r);
            return o
        };

    function mi(a, u) {
        var s, c = this;
        void 0 === u && (u = {});
        var r = {},
            i = window,
            o = {},
            t = 0,
            e = function(m, g) {
                void 0 === g && (g = {});
                var p, h = 0,
                    v = {};
                p = g.maxLoadTime || 5e3;
                var b = function(e) {
                        m.getElementsByTagName("head")[0].appendChild(e)
                    },
                    n = function(e, t, n) {
                        var o, r, i, a, u = function() {
                                for (var e = a.passed, t = e.length; t--;) e[t]();
                                a.status = 2, a.passed = [], a.failed = []
                            },
                            s = function() {
                                for (var e = a.failed, t = e.length; t--;) e[t]();
                                a.status = 3, a.passed = [], a.failed = []
                            },
                            c = function(e, t) {
                                e() || ((new Date).getTime() - i < p ? ve.setTimeout(t) : s())
                            },
                            l = function() {
                                c(function() {
                                    for (var e, t, n = m.styleSheets, r = n.length; r--;)
                                        if ((t = (e = n[r]).ownerNode ? e.ownerNode : e.owningElement) && t.id === o.id) return u(), !0
                                }, l)
                            },
                            f = function() {
                                c(function() {
                                    try {
                                        var e = r.sheet.cssRules;
                                        return u(), !!e
                                    } catch (t) {}
                                }, f)
                            };
                        if (e = Yt._addCacheSuffix(e), v[e] ? a = v[e] : (a = {
                            passed: [],
                            failed: []
                        }, v[e] = a), t && a.passed.push(t), n && a.failed.push(n), 1 !== a.status)
                            if (2 !== a.status)
                                if (3 !== a.status) {
                                    if (a.status = 1, (o = m.createElement("link")).rel = "stylesheet", o.type = "text/css", o.id = "u" + h++, o.async = !1, o.defer = !1, i = (new Date).getTime(), g.contentCssCors && (o.crossOrigin = "anonymous"), "onload" in o && !((d = navigator.userAgent.match(/WebKit\/(\d*)/)) && parseInt(d[1], 10) < 536)) o.onload = l, o.onerror = s;
                                    else {
                                        if (0 < navigator.userAgent.indexOf("Firefox")) return (r = m.createElement("style")).textContent = '@import "' + e + '"', f(), void b(r);
                                        l()
                                    }
                                    var d;
                                    b(o), o.href = e
                                } else s();
                            else u()
                    },
                    t = function(t) {
                        return Jr.nu(function(e) {
                            n(t, H(e, j(no.value(t))), H(e, j(no.error(t))))
                        })
                    },
                    o = function(e) {
                        return e.fold(q, q)
                    };
                return {
                    load: n,
                    loadAll: function(e, n, r) {
                        Zr($(e, t)).get(function(e) {
                            var t = W(e, function(e) {
                                return e.isValue()
                            });
                            0 < t.fail.length ? r(t.fail.map(o)) : n(t.pass.map(o))
                        })
                    }
                }
            }(a, {
                contentCssCors: u.contentCssCors
            }),
            l = [],
            f = u.schema ? u.schema : ti({}),
            d = ri({
                url_converter: u.url_converter,
                url_converter_scope: u.url_converter_scope
            }, u.schema),
            m = u.ownEvents ? new ke(u.proxy) : ke.Event,
            n = f.getBlockElements(),
            g = pn.overrideDefaults(function() {
                return {
                    context: a,
                    element: V.getRoot()
                }
            }),
            p = function(e) {
                if (e && a && "string" == typeof e) {
                    var t = a.getElementById(e);
                    return t && t.id !== e ? a.getElementsByName(e)[1] : t
                }
                return e
            },
            h = function(e) {
                return "string" == typeof e && (e = p(e)), g(e)
            },
            v = function(e, t, n) {
                var r, o, i = h(e);
                return i.length && (o = (r = s[t]) && r.get ? r.get(i, t) : i.attr(t)), void 0 === o && (o = n || ""), o
            },
            b = function(e) {
                var t = p(e);
                return t ? t.attributes : []
            },
            y = function(e, t, n) {
                var r, o;
                "" === n && (n = null);
                var i = h(e);
                r = i.attr(t), i.length && ((o = s[t]) && o.set ? o.set(i, n, t) : i.attr(t, n), r !== n && u.onSetAttrib && u.onSetAttrib({
                    attrElm: i,
                    attrName: t,
                    attrValue: n
                }))
            },
            C = function() {
                return u.root_element || a.body
            },
            x = function(e, t) {
                return Kr.getPos(a.body, p(e), t)
            },
            w = function(e, t, n) {
                var r = h(e);
                return n ? r.css(t) : ("float" === (t = t.replace(/-(\D)/g, function(e, t) {
                    return t.toUpperCase()
                })) && (t = de.ie && de.ie < 12 ? "styleFloat" : "cssFloat"), r[0] && r[0].style ? r[0].style[t] : undefined)
            },
            N = function(e) {
                var t, n;
                return e = p(e), t = w(e, "width"), n = w(e, "height"), -1 === t.indexOf("px") && (t = 0), -1 === n.indexOf("px") && (n = 0), {
                    w: parseInt(t, 10) || e.offsetWidth || e.clientWidth,
                    h: parseInt(n, 10) || e.offsetHeight || e.clientHeight
                }
            },
            E = function(e, t) {
                var n;
                if (!e) return !1;
                if (!Array.isArray(e)) {
                    if ("*" === t) return 1 === e.nodeType;
                    if (si.test(t)) {
                        var r = t.toLowerCase().split(/,/),
                            o = e.nodeName.toLowerCase();
                        for (n = r.length - 1; 0 <= n; n--)
                            if (r[n] === o) return !0;
                        return !1
                    }
                    if (e.nodeType && 1 !== e.nodeType) return !1
                }
                var i = Array.isArray(e) ? e : [e];
                return 0 < kt(t, i[0].ownerDocument || i[0], null, i).length
            },
            S = function(e, t, n, r) {
                var o, i = [],
                    a = p(e);
                for (r = r === undefined, n = n || ("BODY" !== C().nodeName ? C().parentNode : null), Yt.is(t, "string") && (t = "*" === (o = t) ? function(e) {
                    return 1 === e.nodeType
                } : function(e) {
                    return E(e, o)
                }); a && a !== n && a.nodeType && 9 !== a.nodeType;) {
                    if (!t || "function" == typeof t && t(a)) {
                        if (!r) return [a];
                        i.push(a)
                    }
                    a = a.parentNode
                }
                return r ? i : null
            },
            k = function(e, t, n) {
                var r = t;
                if (e)
                    for ("string" == typeof t && (r = function(e) {
                        return E(e, t)
                    }), e = e[n]; e; e = e[n])
                        if ("function" == typeof r && r(e)) return e;
                return null
            },
            T = function(e, n, r) {
                var o, t = "string" == typeof e ? p(e) : e;
                if (!t) return !1;
                if (Yt.isArray(t) && (t.length || 0 === t.length)) return o = [], ii(t, function(e, t) {
                    e && ("string" == typeof e && (e = p(e)), o.push(n.call(r, e, t)))
                }), o;
                var i = r || c;
                return n.call(i, t)
            },
            A = function(e, t) {
                h(e).each(function(e, n) {
                    ii(t, function(e, t) {
                        y(n, t, e)
                    })
                })
            },
            R = function(e, r) {
                var t = h(e);
                ui ? t.each(function(e, t) {
                    if (!1 !== t.canHaveHTML) {
                        for (; t.firstChild;) t.removeChild(t.firstChild);
                        try {
                            t.innerHTML = "<br>" + r, t.removeChild(t.firstChild)
                        } catch (n) {
                            pn("<div></div>").html("<br>" + r).contents().slice(1).appendTo(t)
                        }
                        return r
                    }
                }) : t.html(r)
            },
            _ = function(e, n, r, o, i) {
                return T(e, function(e) {
                    var t = "string" == typeof n ? a.createElement(n) : n;
                    return A(t, r), o && ("string" != typeof o && o.nodeType ? t.appendChild(o) : "string" == typeof o && R(t, o)), i ? t : e.appendChild(t)
                })
            },
            D = function(e, t, n) {
                return _(a.createElement(e), e, t, n, !0)
            },
            B = qo.decode,
            O = qo.encodeAllRaw,
            P = function(e, t) {
                var n = h(e);
                return t ? n.each(function() {
                    for (var e; e = this.firstChild;) 3 === e.nodeType && 0 === e.data.length ? this.removeChild(e) : this.parentNode.insertBefore(e, this)
                }).remove() : n.remove(), 1 < n.length ? n.toArray() : n[0]
            },
            L = function(e, t, n) {
                h(e).toggleClass(t, n).each(function() {
                    "" === this.className && pn(this).attr("class", null)
                })
            },
            I = function(t, e, n) {
                return T(e, function(e) {
                    return Yt.is(e, "array") && (t = t.cloneNode(!0)), n && ii(ai(e.childNodes), function(e) {
                        t.appendChild(e)
                    }), e.parentNode.replaceChild(t, e)
                })
            },
            M = function() {
                return a.createRange()
            },
            F = function(e, t, n, r) {
                if (Yt.isArray(e)) {
                    for (var o = e.length; o--;) e[o] = F(e[o], t, n, r);
                    return e
                }
                return !u.collect || e !== a && e !== i || l.push([e, t, n, r]), m.bind(e, t, n, r || V)
            },
            z = function(e, t, n) {
                var r;
                if (Yt.isArray(e)) {
                    for (r = e.length; r--;) e[r] = z(e[r], t, n);
                    return e
                }
                if (l && (e === a || e === i))
                    for (r = l.length; r--;) {
                        var o = l[r];
                        e !== o[0] || t && t !== o[1] || n && n !== o[2] || m.unbind(o[0], o[1], o[2])
                    }
                return m.unbind(e, t, n)
            },
            U = function(e) {
                if (e && _o.isElement(e)) {
                    var t = e.getAttribute("data-mce-contenteditable");
                    return t && "inherit" !== t ? t : "inherit" !== e.contentEditable ? e.contentEditable : null
                }
                return null
            },
            V = {
                doc: a,
                settings: u,
                win: i,
                files: o,
                stdMode: !0,
                boxModel: !0,
                styleSheetLoader: e,
                boundEvents: l,
                styles: d,
                schema: f,
                events: m,
                isBlock: function(e) {
                    if ("string" == typeof e) return !!n[e];
                    if (e) {
                        var t = e.nodeType;
                        if (t) return !(1 !== t || !n[e.nodeName])
                    }
                    return !1
                },
                $: g,
                $$: h,
                root: null,
                clone: function(t, e) {
                    if (!ui || 1 !== t.nodeType || e) return t.cloneNode(e);
                    if (!e) {
                        var n = a.createElement(t.nodeName);
                        return ii(b(t), function(e) {
                            y(n, e.nodeName, v(t, e.nodeName))
                        }), n
                    }
                    return null
                },
                getRoot: C,
                getViewPort: function(e) {
                    var t = e || i,
                        n = t.document,
                        r = n.documentElement;
                    return {
                        x: t.pageXOffset || r.scrollLeft,
                        y: t.pageYOffset || r.scrollTop,
                        w: t.innerWidth || r.clientWidth,
                        h: t.innerHeight || r.clientHeight
                    }
                },
                getRect: function(e) {
                    var t, n;
                    return e = p(e), t = x(e), n = N(e), {
                        x: t.x,
                        y: t.y,
                        w: n.w,
                        h: n.h
                    }
                },
                getSize: N,
                getParent: function(e, t, n) {
                    var r = S(e, t, n, !1);
                    return r && 0 < r.length ? r[0] : null
                },
                getParents: S,
                get: p,
                getNext: function(e, t) {
                    return k(e, t, "nextSibling")
                },
                getPrev: function(e, t) {
                    return k(e, t, "previousSibling")
                },
                select: function(e, t) {
                    return kt(e, p(t) || u.root_element || a, [])
                },
                is: E,
                add: _,
                create: D,
                createHTML: function(e, t, n) {
                    var r, o = "";
                    for (r in o += "<" + e, t) t.hasOwnProperty(r) && null !== t[r] && "undefined" != typeof t[r] && (o += " " + r + '="' + O(t[r]) + '"');
                    return void 0 !== n ? o + ">" + n + "</" + e + ">" : o + " />"
                },
                createFragment: function(e) {
                    var t, n = a.createElement("div"),
                        r = a.createDocumentFragment();
                    for (e && (n.innerHTML = e); t = n.firstChild;) r.appendChild(t);
                    return r
                },
                remove: P,
                setStyle: function(e, t, n) {
                    var r = h(e).css(t, n);
                    u.update_styles && fi(d, r)
                },
                getStyle: w,
                setStyles: function(e, t) {
                    var n = h(e).css(t);
                    u.update_styles && fi(d, n)
                },
                removeAllAttribs: function(e) {
                    return T(e, function(e) {
                        var t, n = e.attributes;
                        for (t = n.length - 1; 0 <= t; t--) e.removeAttributeNode(n.item(t))
                    })
                },
                setAttrib: y,
                setAttribs: A,
                getAttrib: v,
                getPos: x,
                parseStyle: function(e) {
                    return d.parse(e)
                },
                serializeStyle: function(e, t) {
                    return d.serialize(e, t)
                },
                addStyle: function(e) {
                    var t, n;
                    if (V !== mi.DOM && a === document) {
                        if (r[e]) return;
                        r[e] = !0
                    }(n = a.getElementById("mceDefaultStyles")) || ((n = a.createElement("style")).id = "mceDefaultStyles", n.type = "text/css", (t = a.getElementsByTagName("head")[0]).firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n)), n.styleSheet ? n.styleSheet.cssText += e : n.appendChild(a.createTextNode(e))
                },
                loadCSS: function(e) {
                    var n;
                    V === mi.DOM || a !== document ? (e || (e = ""), n = a.getElementsByTagName("head")[0], ii(e.split(","), function(e) {
                        var t;
                        e = Yt._addCacheSuffix(e), o[e] || (o[e] = !0, t = D("link", {
                            rel: "stylesheet",
                            href: e
                        }), n.appendChild(t))
                    })) : mi.DOM.loadCSS(e)
                },
                addClass: function(e, t) {
                    h(e).addClass(t)
                },
                removeClass: function(e, t) {
                    L(e, t, !1)
                },
                hasClass: function(e, t) {
                    return h(e).hasClass(t)
                },
                toggleClass: L,
                show: function(e) {
                    h(e).show()
                },
                hide: function(e) {
                    h(e).hide()
                },
                isHidden: function(e) {
                    return "none" === h(e).css("display")
                },
                uniqueId: function(e) {
                    return (e || "mce_") + t++
                },
                setHTML: R,
                getOuterHTML: function(e) {
                    var t = "string" == typeof e ? p(e) : e;
                    return _o.isElement(t) ? t.outerHTML : pn("<div></div>").append(pn(t).clone()).html()
                },
                setOuterHTML: function(e, t) {
                    h(e).each(function() {
                        try {
                            if ("outerHTML" in this) return void(this.outerHTML = t)
                        } catch (e) {}
                        P(pn(this).html(t), !0)
                    })
                },
                decode: B,
                encode: O,
                insertAfter: function(e, t) {
                    var r = p(t);
                    return T(e, function(e) {
                        var t, n;
                        return t = r.parentNode, (n = r.nextSibling) ? t.insertBefore(e, n) : t.appendChild(e), e
                    })
                },
                replace: I,
                rename: function(t, e) {
                    var n;
                    return t.nodeName !== e.toUpperCase() && (n = D(e), ii(b(t), function(e) {
                        y(n, e.nodeName, v(t, e.nodeName))
                    }), I(n, t, !0)), n || t
                },
                findCommonAncestor: function(e, t) {
                    for (var n, r = e; r;) {
                        for (n = t; n && r !== n;) n = n.parentNode;
                        if (r === n) break;
                        r = r.parentNode
                    }
                    return !r && e.ownerDocument ? e.ownerDocument.documentElement : r
                },
                toHex: function(e) {
                    return d.toHex(Yt.trim(e))
                },
                run: T,
                getAttribs: b,
                isEmpty: function(e, t) {
                    var n, r, o, i, a, u, s = 0;
                    if (e = e.firstChild) {
                        a = new ro(e, e.parentNode), t = t || (f ? f.getNonEmptyElements() : null), i = f ? f.getWhiteSpaceElements() : {};
                        do {
                            if (o = e.nodeType, _o.isElement(e)) {
                                var c = e.getAttribute("data-mce-bogus");
                                if (c) {
                                    e = a.next("all" === c);
                                    continue
                                }
                                if (u = e.nodeName.toLowerCase(), t && t[u]) {
                                    if ("br" === u) {
                                        s++, e = a.next();
                                        continue
                                    }
                                    return !1
                                }
                                for (n = (r = b(e)).length; n--;)
                                    if ("name" === (u = r[n].nodeName) || "data-mce-bookmark" === u) return !1
                            }
                            if (8 === o) return !1;
                            if (3 === o && !ci.test(e.nodeValue)) return !1;
                            if (3 === o && e.parentNode && i[e.parentNode.nodeName] && ci.test(e.nodeValue)) return !1;
                            e = a.next()
                        } while (e)
                    }
                    return s <= 1
                },
                createRng: M,
                nodeIndex: di,
                split: function(e, t, n) {
                    var r, o, i, a = M();
                    if (e && t) return a.setStart(e.parentNode, di(e)), a.setEnd(t.parentNode, di(t)), r = a.extractContents(), (a = M()).setStart(t.parentNode, di(t) + 1), a.setEnd(e.parentNode, di(e) + 1), o = a.extractContents(), (i = e.parentNode).insertBefore(Oo.trimNode(V, r), e), n ? i.insertBefore(n, e) : i.insertBefore(t, e), i.insertBefore(Oo.trimNode(V, o), e), P(e), n || t
                },
                bind: F,
                unbind: z,
                fire: function(e, t, n) {
                    return m.fire(e, t, n)
                },
                getContentEditable: U,
                getContentEditableParent: function(e) {
                    for (var t = C(), n = null; e && e !== t && null === (n = U(e)); e = e.parentNode);
                    return n
                },
                destroy: function() {
                    if (l)
                        for (var e = l.length; e--;) {
                            var t = l[e];
                            m.unbind(t[0], t[1], t[2])
                        }
                    kt.setDocument && kt.setDocument()
                },
                isChildOf: function(e, t) {
                    for (; e;) {
                        if (t === e) return !0;
                        e = e.parentNode
                    }
                    return !1
                },
                dumpRng: function(e) {
                    return "startContainer: " + e.startContainer.nodeName + ", startOffset: " + e.startOffset + ", endContainer: " + e.endContainer.nodeName + ", endOffset: " + e.endOffset
                }
            };
        return s = li(d, u, function() {
            return V
        }), V
    }(oi = mi || (mi = {})).DOM = oi(document), oi.nodeIndex = di;
    var gi = mi,
        pi = gi.DOM,
        hi = Yt.each,
        vi = Yt.grep,
        bi = function(e) {
            return "function" == typeof e
        },
        yi = function() {
            var l = {},
                o = [],
                i = {},
                a = [],
                f = 0;
            this.isDone = function(e) {
                return 2 === l[e]
            }, this.markDone = function(e) {
                l[e] = 2
            }, this.add = this.load = function(e, t, n, r) {
                l[e] === undefined && (o.push(e), l[e] = 0), t && (i[e] || (i[e] = []), i[e].push({
                    success: t,
                    failure: r,
                    scope: n || this
                }))
            }, this.remove = function(e) {
                delete l[e], delete i[e]
            }, this.loadQueue = function(e, t, n) {
                this.loadScripts(o, e, t, n)
            }, this.loadScripts = function(n, e, t, r) {
                var u, s = [],
                    c = function(t, e) {
                        hi(i[e], function(e) {
                            bi(e[t]) && e[t].call(e.scope)
                        }), i[e] = undefined
                    };
                a.push({
                    success: e,
                    failure: r,
                    scope: t || this
                }), (u = function() {
                    var e = vi(n);
                    if (n.length = 0, hi(e, function(e) {
                        var t, n, r, o, i, a;
                        2 !== l[e] ? 3 !== l[e] ? 1 !== l[e] && (l[e] = 1, f++, t = e, n = function() {
                            l[e] = 2, f--, c("success", e), u()
                        }, r = function() {
                            l[e] = 3, f--, s.push(e), c("failure", e), u()
                        }, i = (a = pi).uniqueId(), (o = document.createElement("script")).id = i, o.type = "text/javascript", o.src = Yt._addCacheSuffix(t), o.onload = function() {
                            a.remove(i), o && (o.onreadystatechange = o.onload = o = null), n()
                        }, o.onerror = function() {
                            bi(r) ? r() : "undefined" != typeof console && console.log && console.log("Failed to load script: " + t)
                        }, (document.getElementsByTagName("head")[0] || document.body).appendChild(o)) : c("failure", e) : c("success", e)
                    }), !f) {
                        var t = a.slice(0);
                        a.length = 0, hi(t, function(e) {
                            0 === s.length ? bi(e.success) && e.success.call(e.scope) : bi(e.failure) && e.failure.call(e.scope, s)
                        })
                    }
                })()
            }
        };
    yi.ScriptLoader = new yi;
    var Ci, xi = Yt.each;

    function wi() {
        var r = this,
            o = [],
            a = {},
            u = {},
            i = [],
            s = function(e) {
                var t;
                return u[e] && (t = u[e].dependencies), t || []
            },
            c = function(e, t) {
                return "object" == typeof t ? t : "string" == typeof e ? {
                    prefix: "",
                    resource: t,
                    suffix: ""
                } : {
                    prefix: e.prefix,
                    resource: t,
                    suffix: e.suffix
                }
            },
            l = function(e, n, t, r) {
                var o = s(e);
                xi(o, function(e) {
                    var t = c(n, e);
                    f(t.resource, t, undefined, undefined)
                }), t && (r ? t.call(r) : t.call(yi))
            },
            f = function(e, t, n, r, o) {
                if (!a[e]) {
                    var i = "string" == typeof t ? t : t.prefix + t.resource + t.suffix;
                    0 !== i.indexOf("/") && -1 === i.indexOf("://") && (i = wi.baseURL + "/" + i), a[e] = i.substring(0, i.lastIndexOf("/")), u[e] ? l(e, t, n, r) : yi.ScriptLoader.add(i, function() {
                        return l(e, t, n, r)
                    }, r, o)
                }
            };
        return {
            items: o,
            urls: a,
            lookup: u,
            _listeners: i,
            get: function(e) {
                return u[e] ? u[e].instance : undefined
            },
            dependencies: s,
            requireLangPack: function(e, t) {
                var n = wi.language;
                if (n && !1 !== wi.languageLoad) {
                    if (t)
                        if (-1 !== (t = "," + t + ",").indexOf("," + n.substr(0, 2) + ",")) n = n.substr(0, 2);
                        else if (-1 === t.indexOf("," + n + ",")) return;
                    yi.ScriptLoader.add(a[e] + "/langs/" + n + ".js")
                }
            },
            add: function(t, e, n) {
                o.push(e), u[t] = {
                    instance: e,
                    dependencies: n
                };
                var r = W(i, function(e) {
                    return e.name === t
                });
                return i = r.fail, xi(r.pass, function(e) {
                    e.callback()
                }), e
            },
            remove: function(e) {
                delete a[e], delete u[e]
            },
            createUrl: c,
            addComponents: function(e, t) {
                var n = r.urls[e];
                xi(t, function(e) {
                    yi.ScriptLoader.add(n + "/" + e)
                })
            },
            load: f,
            waitFor: function(e, t) {
                u.hasOwnProperty(e) ? t() : i.push({
                    name: e,
                    callback: t
                })
            }
        }
    }(Ci = wi || (wi = {})).PluginManager = Ci(), Ci.ThemeManager = Ci();
    var Ni = function(t, n) {
            Ir(t).each(function(e) {
                e.dom().insertBefore(n.dom(), t.dom())
            })
        },
        Ei = function(e, t) {
            Fr(e).fold(function() {
                Ir(e).each(function(e) {
                    ki(e, t)
                })
            }, function(e) {
                Ni(e, t)
            })
        },
        Si = function(t, n) {
            jr(t).fold(function() {
                ki(t, n)
            }, function(e) {
                t.dom().insertBefore(n.dom(), e.dom())
            })
        },
        ki = function(e, t) {
            e.dom().appendChild(t.dom())
        },
        Ti = function(t, e) {
            F(e, function(e) {
                ki(t, e)
            })
        },
        Ai = function(e) {
            e.dom().textContent = "", F(Vr(e), function(e) {
                Ri(e)
            })
        },
        Ri = function(e) {
            var t = e.dom();
            null !== t.parentNode && t.parentNode.removeChild(t)
        },
        _i = function(e) {
            var t, n = Vr(e);
            0 < n.length && (t = e, F(n, function(e) {
                Ni(t, e)
            })), Ri(e)
        },
        Di = function(n, r) {
            var o = null;
            return {
                cancel: function() {
                    null !== o && (clearTimeout(o), o = null)
                },
                throttle: function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    null === o && (o = setTimeout(function() {
                        n.apply(null, e), o = null
                    }, r))
                }
            }
        },
        Bi = function(e) {
            var t = e,
                n = function() {
                    return t
                };
            return {
                get: n,
                set: function(e) {
                    t = e
                },
                clone: function() {
                    return Bi(n())
                }
            }
        },
        Oi = function(e, t) {
            var n = br(e, t);
            return n === undefined || "" === n ? [] : n.split(" ")
        },
        Pi = function(e) {
            return e.dom().classList !== undefined
        },
        Li = function(e, t) {
            return o = t, i = Oi(n = e, r = "class").concat([o]), hr(n, r, i.join(" ")), !0;
            var n, r, o, i
        },
        Ii = function(e, t) {
            return o = t, 0 < (i = z(Oi(n = e, r = "class"), function(e) {
                return e !== o
            })).length ? hr(n, r, i.join(" ")) : yr(n, r), !1;
            var n, r, o, i
        },
        Mi = function(e, t) {
            Pi(e) ? e.dom().classList.add(t) : Li(e, t)
        },
        Fi = function(e) {
            0 === (Pi(e) ? e.dom().classList : Oi(e, "class")).length && yr(e, "class")
        },
        zi = function(e, t) {
            return Pi(e) && e.dom().classList.contains(t)
        },
        Ui = function(e, t) {
            var n = [];
            return F(Vr(e), function(e) {
                t(e) && (n = n.concat([e])), n = n.concat(Ui(e, t))
            }), n
        },
        Vi = function(e, t) {
            return n = t, o = (r = e) === undefined ? document : r.dom(), Br(o) ? [] : $(o.querySelectorAll(n), rr.fromDom);
            var n, r, o
        };

    function Hi(e, t, n, r, o) {
        return e(n, r) ? A.some(n) : P(o) && o(n) ? A.none() : t(n, r, o)
    }
    var ji, qi = function(e, t, n) {
            for (var r = e.dom(), o = P(n) ? n : j(!1); r.parentNode;) {
                r = r.parentNode;
                var i = rr.fromDom(r);
                if (t(i)) return A.some(i);
                if (o(i)) break
            }
            return A.none()
        },
        $i = function(e, t, n) {
            return Hi(function(e) {
                return t(e)
            }, qi, e, t, n)
        },
        Wi = function(e, t, n) {
            return qi(e, function(e) {
                return Dr(e, t)
            }, n)
        },
        Ki = function(e, t) {
            return n = t, o = (r = e) === undefined ? document : r.dom(), Br(o) ? A.none() : A.from(o.querySelector(n)).map(rr.fromDom);
            var n, r, o
        },
        Xi = function(e, t, n) {
            return Hi(Dr, Wi, e, t, n)
        },
        Yi = j("mce-annotation"),
        Gi = j("data-mce-annotation"),
        Ji = j("data-mce-annotation-uid"),
        Qi = function(r, e) {
            var t = r.selection.getRng(),
                n = rr.fromDom(t.startContainer),
                o = rr.fromDom(r.getBody()),
                i = e.fold(function() {
                    return "." + Yi()
                }, function(e) {
                    return "[" + Gi() + '="' + e + '"]'
                }),
                a = Hr(n, t.startOffset).getOr(n),
                u = Xi(a, i, function(e) {
                    return Or(e, o)
                }),
                s = function(e, t) {
                    return n = t, (r = e.dom()) && r.hasAttribute && r.hasAttribute(n) ? A.some(br(e, t)) : A.none();
                    var n, r
                };
            return u.bind(function(e) {
                return s(e, "" + Ji()).bind(function(n) {
                    return s(e, "" + Gi()).map(function(e) {
                        var t = Zi(r, n);
                        return {
                            uid: n,
                            name: e,
                            elements: t
                        }
                    })
                })
            })
        },
        Zi = function(e, t) {
            var n = rr.fromDom(e.getBody());
            return Vi(n, "[" + Ji() + '="' + t + '"]')
        },
        ea = function(i, e) {
            var n, r, o, a = Bi({}),
                c = function(e, t) {
                    u(e, function(e) {
                        return t(e), e
                    })
                },
                u = function(e, t) {
                    var n = a.get(),
                        r = t(n.hasOwnProperty(e) ? n[e] : {
                            listeners: [],
                            previous: Bi(A.none())
                        });
                    n[e] = r, a.set(n)
                },
                t = (n = function() {
                    var e, t, n, r = a.get(),
                        o = (e = fr(r), (n = Q.call(e, 0)).sort(t), n);
                    F(o, function(e) {
                        u(e, function(u) {
                            var s = u.previous.get();
                            return Qi(i, A.some(e)).fold(function() {
                                var t;
                                s.isSome() && (c(t = e, function(e) {
                                    F(e.listeners, function(e) {
                                        return e(!1, t)
                                    })
                                }), u.previous.set(A.none()))
                            }, function(e) {
                                var t, n, r, o = e.uid,
                                    i = e.name,
                                    a = e.elements;
                                s.is(o) || (n = o, r = a, c(t = i, function(e) {
                                    F(e.listeners, function(e) {
                                        return e(!0, t, {
                                            uid: n,
                                            nodes: $(r, function(e) {
                                                return e.dom()
                                            })
                                        })
                                    })
                                }), u.previous.set(A.some(o)))
                            }), {
                                previous: u.previous,
                                listeners: u.listeners
                            }
                        })
                    })
                }, r = 30, o = null, {
                    cancel: function() {
                        null !== o && (clearTimeout(o), o = null)
                    },
                    throttle: function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        null !== o && clearTimeout(o), o = setTimeout(function() {
                            n.apply(null, e), o = null
                        }, r)
                    }
                });
            return i.on("remove", function() {
                t.cancel()
            }), i.on("nodeChange", function() {
                t.throttle()
            }), {
                addListener: function(e, t) {
                    u(e, function(e) {
                        return {
                            previous: e.previous,
                            listeners: e.listeners.concat([t])
                        }
                    })
                }
            }
        },
        ta = function(e, n) {
            e.on("init", function() {
                e.serializer.addNodeFilter("span", function(e) {
                    F(e, function(t) {
                        var e;
                        (e = t, A.from(e.attributes.map[Gi()]).bind(n.lookup)).each(function(e) {
                            !1 === e.persistent && t.unwrap()
                        })
                    })
                })
            })
        },
        na = 0,
        ra = function(e, t) {
            return rr.fromDom(e.dom().cloneNode(t))
        },
        oa = function(e) {
            return ra(e, !1)
        },
        ia = function(e) {
            return ra(e, !0)
        },
        aa = function(e, t) {
            var n, r, o = Lr(e).dom(),
                i = rr.fromDom(o.createDocumentFragment()),
                a = (n = t, (r = (o || document).createElement("div")).innerHTML = n, Vr(rr.fromDom(r)));
            Ti(i, a), Ai(e), ki(e, i)
        },
        ua = "\ufeff",
        sa = function(e) {
            return e === ua
        },
        ca = ua,
        la = function(e) {
            return e.replace(new RegExp(ua, "g"), "")
        },
        fa = _o.isElement,
        da = _o.isText,
        ma = function(e) {
            return da(e) && (e = e.parentNode), fa(e) && e.hasAttribute("data-mce-caret")
        },
        ga = function(e) {
            return da(e) && sa(e.data)
        },
        pa = function(e) {
            return ma(e) || ga(e)
        },
        ha = function(e) {
            return e.firstChild !== e.lastChild || !_o.isBr(e.firstChild)
        },
        va = function(e) {
            var t = e.container();
            return e && _o.isText(t) && t.data.charAt(e.offset()) === ca
        },
        ba = function(e) {
            var t = e.container();
            return e && _o.isText(t) && t.data.charAt(e.offset() - 1) === ca
        },
        ya = function(e, t, n) {
            var r, o, i;
            return (r = t.ownerDocument.createElement(e)).setAttribute("data-mce-caret", n ? "before" : "after"), r.setAttribute("data-mce-bogus", "all"), r.appendChild(((i = document.createElement("br")).setAttribute("data-mce-bogus", "1"), i)), o = t.parentNode, n ? o.insertBefore(r, t) : t.nextSibling ? o.insertBefore(r, t.nextSibling) : o.appendChild(r), r
        },
        Ca = function(e) {
            return da(e) && e.data[0] === ca
        },
        xa = function(e) {
            return da(e) && e.data[e.data.length - 1] === ca
        },
        wa = function(e) {
            return e && e.hasAttribute("data-mce-caret") ? (t = e.getElementsByTagName("br"), n = t[t.length - 1], _o.isBogus(n) && n.parentNode.removeChild(n), e.removeAttribute("data-mce-caret"), e.removeAttribute("data-mce-bogus"), e.removeAttribute("style"), e.removeAttribute("_moz_abspos"), e) : null;
            var t, n
        },
        Na = _o.isContentEditableTrue,
        Ea = _o.isContentEditableFalse,
        Sa = _o.isBr,
        ka = _o.isText,
        Ta = _o.matchNodeNames("script style textarea"),
        Aa = _o.matchNodeNames("img input textarea hr iframe video audio object"),
        Ra = _o.matchNodeNames("table"),
        _a = pa,
        Da = function(e) {
            return !_a(e) && (ka(e) ? !Ta(e.parentNode) : Aa(e) || Sa(e) || Ra(e) || Ba(e))
        },
        Ba = function(e) {
            return !1 === (t = e, _o.isElement(t) && "true" === t.getAttribute("unselectable")) && Ea(e);
            var t
        },
        Oa = function(e, t) {
            return Da(e) && function(e, t) {
                for (e = e.parentNode; e && e !== t; e = e.parentNode) {
                    if (Ba(e)) return !1;
                    if (Na(e)) return !0
                }
                return !0
            }(e, t)
        },
        Pa = Math.round,
        La = function(e) {
            return e ? {
                left: Pa(e.left),
                top: Pa(e.top),
                bottom: Pa(e.bottom),
                right: Pa(e.right),
                width: Pa(e.width),
                height: Pa(e.height)
            } : {
                left: 0,
                top: 0,
                bottom: 0,
                right: 0,
                width: 0,
                height: 0
            }
        },
        Ia = function(e, t) {
            return e = La(e), t || (e.left = e.left + e.width), e.right = e.left, e.width = 0, e
        },
        Ma = function(e, t, n) {
            return 0 <= e && e <= Math.min(t.height, n.height) / 2
        },
        Fa = function(e, t) {
            return e.bottom - e.height / 2 < t.top || !(e.top > t.bottom) && Ma(t.top - e.bottom, e, t)
        },
        za = function(e, t) {
            return e.top > t.bottom || !(e.bottom < t.top) && Ma(t.bottom - e.top, e, t)
        },
        Ua = function(e) {
            var t = e.startContainer,
                n = e.startOffset;
            return t.hasChildNodes() && e.endOffset === n + 1 ? t.childNodes[n] : null
        },
        Va = function(e, t) {
            return 1 === e.nodeType && e.hasChildNodes() && (t >= e.childNodes.length && (t = e.childNodes.length - 1), e = e.childNodes[t]), e
        },
        Ha = new RegExp("[\u0300-\u036f\u0483-\u0487\u0488-\u0489\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7-\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e3-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962-\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2-\u09e3\u0a01-\u0a02\u0a3c\u0a41-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a70-\u0a71\u0a75\u0a81-\u0a82\u0abc\u0ac1-\u0ac5\u0ac7-\u0ac8\u0acd\u0ae2-\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62-\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c62-\u0c63\u0c81\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc-\u0ccd\u0cd5-\u0cd6\u0ce2-\u0ce3\u0d01\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62-\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb-\u0ebc\u0ec8-\u0ecd\u0f18-\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039-\u103a\u103d-\u103e\u1058-\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17b4-\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193b\u1a17-\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abd\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80-\u1b81\u1ba2-\u1ba5\u1ba8-\u1ba9\u1bab-\u1bad\u1be6\u1be8-\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8-\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200c-\u200d\u20d0-\u20dc\u20dd-\u20e0\u20e1\u20e2-\u20e4\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u302e-\u302f\u3099-\u309a\ua66f\ua670-\ua672\ua674-\ua67d\ua69e-\ua69f\ua6f0-\ua6f1\ua802\ua806\ua80b\ua825-\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31-\uaa32\uaa35-\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7-\uaab8\uaabe-\uaabf\uaac1\uaaec-\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\uff9e-\uff9f]"),
        ja = function(e) {
            return "string" == typeof e && 768 <= e.charCodeAt(0) && Ha.test(e)
        },
        qa = function(e, t) {
            for (var n = [], r = 0; r < e.length; r++) {
                var o = e[r];
                if (!o.isSome()) return A.none();
                n.push(o.getOrDie())
            }
            return A.some(t.apply(null, n))
        },
        $a = [].slice,
        Wa = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var n = $a.call(arguments);
            return function(e) {
                for (var t = 0; t < n.length; t++)
                    if (!n[t](e)) return !1;
                return !0
            }
        },
        Ka = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var n = $a.call(arguments);
            return function(e) {
                for (var t = 0; t < n.length; t++)
                    if (n[t](e)) return !0;
                return !1
            }
        },
        Xa = _o.isElement,
        Ya = Da,
        Ga = _o.matchStyleValues("display", "block table"),
        Ja = _o.matchStyleValues("float", "left right"),
        Qa = Wa(Xa, Ya, y(Ja)),
        Za = y(_o.matchStyleValues("white-space", "pre pre-line pre-wrap")),
        eu = _o.isText,
        tu = _o.isBr,
        nu = gi.nodeIndex,
        ru = Va,
        ou = function(e) {
            return "createRange" in e ? e.createRange() : gi.DOM.createRng()
        },
        iu = function(e) {
            return e && /[\r\n\t ]/.test(e)
        },
        au = function(e) {
            return !!e.setStart && !!e.setEnd
        },
        uu = function(e) {
            var t, n = e.startContainer,
                r = e.startOffset;
            return !!(iu(e.toString()) && Za(n.parentNode) && _o.isText(n) && (t = n.data, iu(t[r - 1]) || iu(t[r + 1])))
        },
        su = function(e) {
            return 0 === e.left && 0 === e.right && 0 === e.top && 0 === e.bottom
        },
        cu = function(e) {
            var t, n, r, o, i, a, u, s;
            return t = 0 < (n = e.getClientRects()).length ? La(n[0]) : La(e.getBoundingClientRect()), !au(e) && tu(e) && su(t) ? (i = (r = e).ownerDocument, a = ou(i), u = i.createTextNode("\xa0"), (s = r.parentNode).insertBefore(u, r), a.setStart(u, 0), a.setEnd(u, 1), o = La(a.getBoundingClientRect()), s.removeChild(u), o) : su(t) && au(e) ? function(e) {
                var t = e.startContainer,
                    n = e.endContainer,
                    r = e.startOffset,
                    o = e.endOffset;
                if (t === n && _o.isText(n) && 0 === r && 1 === o) {
                    var i = e.cloneRange();
                    return i.setEndAfter(n), cu(i)
                }
                return null
            }(e) : t
        },
        lu = function(e, t) {
            var n = Ia(e, t);
            return n.width = 1, n.right = n.left + 1, n
        },
        fu = function(e) {
            var t, n, r = [],
                o = function(e) {
                    var t, n;
                    0 !== e.height && (0 < r.length && (t = e, n = r[r.length - 1], t.left === n.left && t.top === n.top && t.bottom === n.bottom && t.right === n.right) || r.push(e))
                },
                i = function(e, t) {
                    var n = ou(e.ownerDocument);
                    if (t < e.data.length) {
                        if (ja(e.data[t])) return r;
                        if (ja(e.data[t - 1]) && (n.setStart(e, t), n.setEnd(e, t + 1), !uu(n))) return o(lu(cu(n), !1)), r
                    }
                    0 < t && (n.setStart(e, t - 1), n.setEnd(e, t), uu(n) || o(lu(cu(n), !1))), t < e.data.length && (n.setStart(e, t), n.setEnd(e, t + 1), uu(n) || o(lu(cu(n), !0)))
                };
            if (eu(e.container())) return i(e.container(), e.offset()), r;
            if (Xa(e.container()))
                if (e.isAtEnd()) n = ru(e.container(), e.offset()), eu(n) && i(n, n.data.length), Qa(n) && !tu(n) && o(lu(cu(n), !1));
                else {
                    if (n = ru(e.container(), e.offset()), eu(n) && i(n, 0), Qa(n) && e.isAtEnd()) return o(lu(cu(n), !1)), r;
                    t = ru(e.container(), e.offset() - 1), Qa(t) && !tu(t) && (Ga(t) || Ga(n) || !Qa(n)) && o(lu(cu(t), !1)), Qa(n) && o(lu(cu(n), !0))
                } return r
        };

    function du(t, n, e) {
        var r = function() {
            return e || (e = fu(du(t, n))), e
        };
        return {
            container: j(t),
            offset: j(n),
            toRange: function() {
                var e;
                return (e = ou(t.ownerDocument)).setStart(t, n), e.setEnd(t, n), e
            },
            getClientRects: r,
            isVisible: function() {
                return 0 < r().length
            },
            isAtStart: function() {
                return eu(t), 0 === n
            },
            isAtEnd: function() {
                return eu(t) ? n >= t.data.length : n >= t.childNodes.length
            },
            isEqual: function(e) {
                return e && t === e.container() && n === e.offset()
            },
            getNode: function(e) {
                return ru(t, e ? n - 1 : n)
            }
        }
    }(ji = du || (du = {})).fromRangeStart = function(e) {
        return ji(e.startContainer, e.startOffset)
    }, ji.fromRangeEnd = function(e) {
        return ji(e.endContainer, e.endOffset)
    }, ji.after = function(e) {
        return ji(e.parentNode, nu(e) + 1)
    }, ji.before = function(e) {
        return ji(e.parentNode, nu(e))
    }, ji.isAbove = function(e, t) {
        return qa([ee(t.getClientRects()), te(e.getClientRects())], Fa).getOr(!1)
    }, ji.isBelow = function(e, t) {
        return qa([te(t.getClientRects()), ee(e.getClientRects())], za).getOr(!1)
    }, ji.isAtStart = function(e) {
        return !!e && e.isAtStart()
    }, ji.isAtEnd = function(e) {
        return !!e && e.isAtEnd()
    }, ji.isTextPosition = function(e) {
        return !!e && _o.isText(e.container())
    }, ji.isElementPosition = function(e) {
        return !1 === ji.isTextPosition(e)
    };
    var mu, gu, pu, hu = du,
        vu = _o.isText,
        bu = _o.isBogus,
        yu = gi.nodeIndex,
        Cu = function(e) {
            var t = e.parentNode;
            return bu(t) ? Cu(t) : t
        },
        xu = function(e) {
            return e ? qt.reduce(e.childNodes, function(e, t) {
                return bu(t) && "BR" !== t.nodeName ? e = e.concat(xu(t)) : e.push(t), e
            }, []) : []
        },
        wu = function(t) {
            return function(e) {
                return t === e
            }
        },
        Nu = function(e) {
            var t, r, n, o;
            return (vu(e) ? "text()" : e.nodeName.toLowerCase()) + "[" + (r = xu(Cu(t = e)), n = qt.findIndex(r, wu(t), t), r = r.slice(0, n + 1), o = qt.reduce(r, function(e, t, n) {
                return vu(t) && vu(r[n - 1]) && e++, e
            }, 0), r = qt.filter(r, _o.matchNodeNames(t.nodeName)), (n = qt.findIndex(r, wu(t), t)) - o) + "]"
        },
        Eu = function(e, t) {
            var n, r, o, i, a, u = [];
            return n = t.container(), r = t.offset(), vu(n) ? o = function(e, t) {
                for (;
                    (e = e.previousSibling) && vu(e);) t += e.data.length;
                return t
            }(n, r) : (r >= (i = n.childNodes).length ? (o = "after", r = i.length - 1) : o = "before", n = i[r]), u.push(Nu(n)), a = function(e, t, n) {
                var r = [];
                for (t = t.parentNode; !(t === e || n && n(t)); t = t.parentNode) r.push(t);
                return r
            }(e, n), a = qt.filter(a, y(_o.isBogus)), (u = u.concat(qt.map(a, function(e) {
                return Nu(e)
            }))).reverse().join("/") + "," + o
        },
        Su = function(e, t) {
            var n, r, o;
            return t ? (t = (n = t.split(","))[0].split("/"), o = 1 < n.length ? n[1] : "before", (r = qt.reduce(t, function(e, t) {
                return (t = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(t)) ? ("text()" === t[1] && (t[1] = "#text"), n = e, r = t[1], o = parseInt(t[2], 10), i = xu(n), i = qt.filter(i, function(e, t) {
                    return !vu(e) || !vu(i[t - 1])
                }), (i = qt.filter(i, _o.matchNodeNames(r)))[o]) : null;
                var n, r, o, i
            }, e)) ? vu(r) ? function(e, t) {
                for (var n, r = e, o = 0; vu(r);) {
                    if (n = r.data.length, o <= t && t <= o + n) {
                        e = r, t -= o;
                        break
                    }
                    if (!vu(r.nextSibling)) {
                        e = r, t = n;
                        break
                    }
                    o += n, r = r.nextSibling
                }
                return vu(e) && t > e.data.length && (t = e.data.length), hu(e, t)
            }(r, parseInt(o, 10)) : (o = "after" === o ? yu(r) + 1 : yu(r), hu(r.parentNode, o)) : null) : null
        },
        ku = _o.isContentEditableFalse,
        Tu = function(e, t, n, r, o) {
            var i, a = r[o ? "startContainer" : "endContainer"],
                u = r[o ? "startOffset" : "endOffset"],
                s = [],
                c = 0,
                l = e.getRoot();
            for (_o.isText(a) ? s.push(n ? function(e, t, n) {
                var r, o;
                for (o = e(t.data.slice(0, n)).length, r = t.previousSibling; r && _o.isText(r); r = r.previousSibling) o += e(r.data).length;
                return o
            }(t, a, u) : u) : (u >= (i = a.childNodes).length && i.length && (c = 1, u = Math.max(0, i.length - 1)), s.push(e.nodeIndex(i[u], n) + c)); a && a !== l; a = a.parentNode) s.push(e.nodeIndex(a, n));
            return s
        },
        Au = function(e) {
            _o.isText(e) && 0 === e.data.length && e.parentNode.removeChild(e)
        },
        Ru = function(e, t, n) {
            var r = 0;
            return Yt.each(e.select(t), function(e) {
                if ("all" !== e.getAttribute("data-mce-bogus")) return e !== n && void r++
            }), r
        },
        _u = function(e, t) {
            var n, r, o, i = t ? "start" : "end";
            n = e[i + "Container"], r = e[i + "Offset"], _o.isElement(n) && "TR" === n.nodeName && (n = (o = n.childNodes)[Math.min(t ? r : r - 1, o.length - 1)]) && (r = t ? 0 : n.childNodes.length, e["set" + (t ? "Start" : "End")](n, r))
        },
        Du = function(e) {
            return _u(e, !0), _u(e, !1), e
        },
        Bu = function(e, t) {
            var n;
            if (_o.isElement(e) && (e = Va(e, t), ku(e))) return e;
            if (pa(e)) {
                if (_o.isText(e) && ma(e) && (e = e.parentNode), n = e.previousSibling, ku(n)) return n;
                if (n = e.nextSibling, ku(n)) return n
            }
        },
        Ou = function(e, t, n) {
            var r = n.getNode(),
                o = r ? r.nodeName : null,
                i = n.getRng();
            if (ku(r) || "IMG" === o) return {
                name: o,
                index: Ru(n.dom, o, r)
            };
            var a, u, s, c, l, f, d, m = Bu((a = i).startContainer, a.startOffset) || Bu(a.endContainer, a.endOffset);
            return m ? {
                name: o = m.tagName,
                index: Ru(n.dom, o, m)
            } : (u = e, c = t, l = i, f = (s = n).dom, (d = {}).start = Tu(f, u, c, l, !0), s.isCollapsed() || (d.end = Tu(f, u, c, l, !1)), d)
        },
        Pu = function(e, t, n) {
            var r = {
                "data-mce-type": "bookmark",
                id: t,
                style: "overflow:hidden;line-height:0px"
            };
            return n ? e.create("span", r, "&#xFEFF;") : e.create("span", r)
        },
        Lu = function(e, t) {
            var n = e.dom,
                r = e.getRng(),
                o = n.uniqueId(),
                i = e.isCollapsed(),
                a = e.getNode(),
                u = a.nodeName;
            if ("IMG" === u) return {
                name: u,
                index: Ru(n, u, a)
            };
            var s = Du(r.cloneRange());
            if (!i) {
                s.collapse(!1);
                var c = Pu(n, o + "_end", t);
                s.insertNode(c), Au(c.nextSibling)
            }(r = Du(r)).collapse(!0);
            var l = Pu(n, o + "_start", t);
            return r.insertNode(l), Au(l.previousSibling), Au(l.nextSibling), e.moveToBookmark({
                id: o,
                keep: 1
            }), {
                id: o
            }
        },
        Iu = {
            getBookmark: function(e, t, n) {
                return 2 === t ? Ou(la, n, e) : 3 === t ? (o = (r = e).getRng(), {
                    start: Eu(r.dom.getRoot(), hu.fromRangeStart(o)),
                    end: Eu(r.dom.getRoot(), hu.fromRangeEnd(o))
                }) : t ? {
                    rng: e.getRng()
                } : Lu(e, !1);
                var r, o
            },
            getUndoBookmark: d(Ou, q, !0),
            getPersistentBookmark: Lu
        },
        Mu = "_mce_caret",
        Fu = function(e) {
            return _o.isElement(e) && e.id === Mu
        },
        zu = function(e, t) {
            for (; t && t !== e;) {
                if (t.id === Mu) return t;
                t = t.parentNode
            }
            return null
        },
        Uu = _o.isElement,
        Vu = _o.isText,
        Hu = function(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        },
        ju = function(e, t) {
            0 === t.length ? Hu(e) : e.nodeValue = t
        },
        qu = function(e) {
            var t = la(e);
            return {
                count: e.length - t.length,
                text: t
            }
        },
        $u = function(e, t) {
            return Xu(e), t
        },
        Wu = function(e, t) {
            var n, r, o, i = t.container(),
                a = (n = ne(i.childNodes), r = e, o = I(n, r), -1 === o ? A.none() : A.some(o)).map(function(e) {
                    return e < t.offset() ? hu(i, t.offset() - 1) : t
                }).getOr(t);
            return Xu(e), a
        },
        Ku = function(e, t) {
            return Vu(e) && t.container() === e ? (r = t, o = qu((n = e).data.substr(0, r.offset())), i = qu(n.data.substr(r.offset())), 0 < (a = o.text + i.text).length ? (ju(n, a), hu(n, r.offset() - o.count)) : r) : $u(e, t);
            var n, r, o, i, a
        },
        Xu = function(e) {
            if (Uu(e) && pa(e) && (ha(e) ? e.removeAttribute("data-mce-caret") : Hu(e)), Vu(e)) {
                var t = la(function(e) {
                    try {
                        return e.nodeValue
                    } catch (t) {
                        return ""
                    }
                }(e));
                ju(e, t)
            }
        },
        Yu = {
            removeAndReposition: function(e, t) {
                return hu.isTextPosition(t) ? Ku(e, t) : (n = e, (r = t).container() === n.parentNode ? Wu(n, r) : $u(n, r));
                var n, r
            },
            remove: Xu
        },
        Gu = tr.detect().browser,
        Ju = _o.isContentEditableFalse,
        Qu = function(e, t, n) {
            var r, o, i, a, u, s = Ia(t.getBoundingClientRect(), n);
            return "BODY" === e.tagName ? (r = e.ownerDocument.documentElement, o = e.scrollLeft || r.scrollLeft, i = e.scrollTop || r.scrollTop) : (u = e.getBoundingClientRect(), o = e.scrollLeft - u.left, i = e.scrollTop - u.top), s.left += o, s.right += o, s.top += i, s.bottom += i, s.width = 1, 0 < (a = t.offsetWidth - t.clientWidth) && (n && (a *= -1), s.left += a, s.right += a), s
        },
        Zu = function(a, u, e) {
            var t, s, c = Bi(A.none()),
                l = function() {
                    ! function(e) {
                        var t, n, r, o, i;
                        for (t = pn("*[contentEditable=false]", e), o = 0; o < t.length; o++) r = (n = t[o]).previousSibling, xa(r) && (1 === (i = r.data).length ? r.parentNode.removeChild(r) : r.deleteData(i.length - 1, 1)), r = n.nextSibling, Ca(r) && (1 === (i = r.data).length ? r.parentNode.removeChild(r) : r.deleteData(0, 1))
                    }(a), s && (Yu.remove(s), s = null), c.get().each(function(e) {
                        pn(e.caret).remove(), c.set(A.none())
                    }), clearInterval(t)
                },
                f = function() {
                    t = ve.setInterval(function() {
                        e() ? pn("div.mce-visual-caret", a).toggleClass("mce-visual-caret-hidden") : pn("div.mce-visual-caret", a).addClass("mce-visual-caret-hidden")
                    }, 500)
                };
            return {
                show: function(t, e) {
                    var n, r, o;
                    if (l(), o = e, _o.isElement(o) && /^(TD|TH)$/i.test(o.tagName)) return null;
                    if (!u(e)) return s = function(e, t) {
                        var n, r, o;
                        if (r = e.ownerDocument.createTextNode(ca), o = e.parentNode, t) {
                            if (n = e.previousSibling, da(n)) {
                                if (pa(n)) return n;
                                if (xa(n)) return n.splitText(n.data.length - 1)
                            }
                            o.insertBefore(r, e)
                        } else {
                            if (n = e.nextSibling, da(n)) {
                                if (pa(n)) return n;
                                if (Ca(n)) return n.splitText(1), n
                            }
                            e.nextSibling ? o.insertBefore(r, e.nextSibling) : o.appendChild(r)
                        }
                        return r
                    }(e, t), r = e.ownerDocument.createRange(), Ju(s.nextSibling) ? (r.setStart(s, 0), r.setEnd(s, 0)) : (r.setStart(s, 1), r.setEnd(s, 1)), r;
                    s = ya("p", e, t), n = Qu(a, e, t), pn(s).css("top", n.top);
                    var i = pn('<div class="mce-visual-caret" data-mce-bogus="all"></div>').css(n).appendTo(a)[0];
                    return c.set(A.some({
                        caret: i,
                        element: e,
                        before: t
                    })), c.get().each(function(e) {
                        t && pn(e.caret).addClass("mce-visual-caret-before")
                    }), f(), (r = e.ownerDocument.createRange()).setStart(s, 0), r.setEnd(s, 0), r
                },
                hide: l,
                getCss: function() {
                    return ".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}"
                },
                reposition: function() {
                    c.get().each(function(e) {
                        var t = Qu(a, e.element, e.before);
                        pn(e.caret).css(t)
                    })
                },
                destroy: function() {
                    return ve.clearInterval(t)
                }
            }
        },
        es = function() {
            return Gu.isIE() || Gu.isEdge() || Gu.isFirefox()
        },
        ts = function(e) {
            return Ju(e) || _o.isTable(e) && es()
        },
        ns = (mu = "\xa0", function(e) {
            return mu === e
        }),
        rs = function(e) {
            return /^[\r\n\t ]$/.test(e)
        },
        os = function(e) {
            return !rs(e) && !ns(e)
        },
        is = _o.isContentEditableFalse,
        as = _o.matchStyleValues("display", "block table table-cell table-caption list-item"),
        us = pa,
        ss = ma,
        cs = _o.isElement,
        ls = Da,
        fs = function(e) {
            return 0 < e
        },
        ds = function(e) {
            return e < 0
        },
        ms = function(e, t) {
            for (var n; n = e(t);)
                if (!ss(n)) return n;
            return null
        },
        gs = function(e, t, n, r, o) {
            var i = new ro(e, r);
            if (ds(t)) {
                if ((is(e) || ss(e)) && n(e = ms(i.prev, !0))) return e;
                for (; e = ms(i.prev, o);)
                    if (n(e)) return e
            }
            if (fs(t)) {
                if ((is(e) || ss(e)) && n(e = ms(i.next, !0))) return e;
                for (; e = ms(i.next, o);)
                    if (n(e)) return e
            }
            return null
        },
        ps = function(e, t) {
            for (; e && e !== t;) {
                if (as(e)) return e;
                e = e.parentNode
            }
            return null
        },
        hs = function(e, t, n) {
            return ps(e.container(), n) === ps(t.container(), n)
        },
        vs = function(e, t) {
            var n, r;
            return t ? (n = t.container(), r = t.offset(), cs(n) ? n.childNodes[r + e] : null) : null
        },
        bs = function(e, t) {
            var n = t.ownerDocument.createRange();
            return e ? (n.setStartBefore(t), n.setEndBefore(t)) : (n.setStartAfter(t), n.setEndAfter(t)), n
        },
        ys = function(e, t, n) {
            var r, o, i, a;
            for (o = e ? "previousSibling" : "nextSibling"; n && n !== t;) {
                if (r = n[o], us(r) && (r = r[o]), is(r)) {
                    if (a = n, ps(r, i = t) === ps(a, i)) return r;
                    break
                }
                if (ls(r)) break;
                n = n.parentNode
            }
            return null
        },
        Cs = d(bs, !0),
        xs = d(bs, !1),
        ws = function(e, t, n) {
            var r, o, i, a, u = d(ys, !0, t),
                s = d(ys, !1, t);
            if (o = n.startContainer, i = n.startOffset, ma(o)) {
                if (cs(o) || (o = o.parentNode), "before" === (a = o.getAttribute("data-mce-caret")) && (r = o.nextSibling, ts(r))) return Cs(r);
                if ("after" === a && (r = o.previousSibling, ts(r))) return xs(r)
            }
            if (!n.collapsed) return n;
            if (_o.isText(o)) {
                if (us(o)) {
                    if (1 === e) {
                        if (r = s(o)) return Cs(r);
                        if (r = u(o)) return xs(r)
                    }
                    if (-1 === e) {
                        if (r = u(o)) return xs(r);
                        if (r = s(o)) return Cs(r)
                    }
                    return n
                }
                if (xa(o) && i >= o.data.length - 1) return 1 === e && (r = s(o)) ? Cs(r) : n;
                if (Ca(o) && i <= 1) return -1 === e && (r = u(o)) ? xs(r) : n;
                if (i === o.data.length) return (r = s(o)) ? Cs(r) : n;
                if (0 === i) return (r = u(o)) ? xs(r) : n
            }
            return n
        },
        Ns = function(e, t) {
            var n = vs(e, t);
            return is(n) && !_o.isBogusAll(n)
        },
        Es = function(e, t) {
            return _o.isTable(vs(e, t))
        },
        Ss = function(e, t) {
            return A.from(vs(e ? 0 : -1, t)).filter(is)
        },
        ks = function(e, t, n) {
            var r = ws(e, t, n);
            return -1 === e ? du.fromRangeStart(r) : du.fromRangeEnd(r)
        },
        Ts = d(Ns, 0),
        As = d(Ns, -1),
        Rs = d(Es, 0),
        _s = d(Es, -1),
        Ds = function(n, r, o) {
            return A.from(o.container()).filter(_o.isText).exists(function(e) {
                var t = n ? 0 : -1;
                return r(e.data.charAt(o.offset() + t))
            })
        },
        Bs = d(Ds, !0, rs),
        Os = d(Ds, !1, rs),
        Ps = function(e) {
            return A.from(e.getNode()).map(rr.fromDom)
        };
    (pu = gu || (gu = {}))[pu.Backwards = -1] = "Backwards", pu[pu.Forwards = 1] = "Forwards";
    var Ls, Is, Ms, Fs, zs, Us = _o.isContentEditableFalse,
        Vs = _o.isText,
        Hs = _o.isElement,
        js = _o.isBr,
        qs = Da,
        $s = function(e) {
            return Aa(e) || !!Ba(t = e) && !0 !== U(ne(t.getElementsByTagName("*")), function(e, t) {
                return e || Na(t)
            }, !1);
            var t
        },
        Ws = Oa,
        Ks = function(e, t) {
            return e.hasChildNodes() && t < e.childNodes.length ? e.childNodes[t] : null
        },
        Xs = function(e, t) {
            if (fs(e)) {
                if (qs(t.previousSibling) && !Vs(t.previousSibling)) return hu.before(t);
                if (Vs(t)) return hu(t, 0)
            }
            if (ds(e)) {
                if (qs(t.nextSibling) && !Vs(t.nextSibling)) return hu.after(t);
                if (Vs(t)) return hu(t, t.data.length)
            }
            return ds(e) ? js(t) ? hu.before(t) : hu.after(t) : hu.before(t)
        },
        Ys = function(e, t, n) {
            var r, o, i, a, u;
            if (!Hs(n) || !t) return null;
            if (t.isEqual(hu.after(n)) && n.lastChild) {
                if (u = hu.after(n.lastChild), ds(e) && qs(n.lastChild) && Hs(n.lastChild)) return js(n.lastChild) ? hu.before(n.lastChild) : u
            } else u = t;
            var s, c, l, f = u.container(),
                d = u.offset();
            if (Vs(f)) {
                if (ds(e) && 0 < d) return hu(f, --d);
                if (fs(e) && d < f.length) return hu(f, ++d);
                r = f
            } else {
                if (ds(e) && 0 < d && (o = Ks(f, d - 1), qs(o))) return !$s(o) && (i = gs(o, e, Ws, o)) ? Vs(i) ? hu(i, i.data.length) : hu.after(i) : Vs(o) ? hu(o, o.data.length) : hu.before(o);
                if (fs(e) && d < f.childNodes.length && (o = Ks(f, d), qs(o))) return js(o) ? (s = n, (l = (c = o).nextSibling) && qs(l) ? Vs(l) ? hu(l, 0) : hu.before(l) : Ys(gu.Forwards, hu.after(c), s)) : !$s(o) && (i = gs(o, e, Ws, o)) ? Vs(i) ? hu(i, 0) : hu.before(i) : Vs(o) ? hu(o, 0) : hu.after(o);
                r = o || u.getNode()
            }
            return (fs(e) && u.isAtEnd() || ds(e) && u.isAtStart()) && (r = gs(r, e, j(!0), n, !0), Ws(r, n)) ? Xs(e, r) : (o = gs(r, e, Ws, n), !(a = qt.last(z(function(e, t) {
                for (var n = []; e && e !== t;) n.push(e), e = e.parentNode;
                return n
            }(f, n), Us))) || o && a.contains(o) ? o ? Xs(e, o) : null : u = fs(e) ? hu.after(a) : hu.before(a))
        },
        Gs = function(t) {
            return {
                next: function(e) {
                    return Ys(gu.Forwards, e, t)
                },
                prev: function(e) {
                    return Ys(gu.Backwards, e, t)
                }
            }
        },
        Js = function(e) {
            return hu.isTextPosition(e) ? 0 === e.offset() : Da(e.getNode())
        },
        Qs = function(e) {
            if (hu.isTextPosition(e)) {
                var t = e.container();
                return e.offset() === t.data.length
            }
            return Da(e.getNode(!0))
        },
        Zs = function(e, t) {
            return !hu.isTextPosition(e) && !hu.isTextPosition(t) && e.getNode() === t.getNode(!0)
        },
        ec = function(e, t, n) {
            return e ? !Zs(t, n) && (r = t, !(!hu.isTextPosition(r) && _o.isBr(r.getNode()))) && Qs(t) && Js(n) : !Zs(n, t) && Js(t) && Qs(n);
            var r
        },
        tc = function(e, t, n) {
            var r = Gs(t);
            return A.from(e ? r.next(n) : r.prev(n))
        },
        nc = function(e, t) {
            var n, r, o, i, a, u = e ? t.firstChild : t.lastChild;
            return _o.isText(u) ? A.some(hu(u, e ? 0 : u.data.length)) : u ? Da(u) ? A.some(e ? hu.before(u) : (a = u, _o.isBr(a) ? hu.before(a) : hu.after(a))) : (r = t, o = u, i = (n = e) ? hu.before(o) : hu.after(o), tc(n, r, i)) : A.none()
        },
        rc = d(tc, !0),
        oc = d(tc, !1),
        ic = {
            fromPosition: tc,
            nextPosition: rc,
            prevPosition: oc,
            navigate: function(t, n, r) {
                return tc(t, n, r).bind(function(e) {
                    return hs(r, e, n) && ec(t, r, e) ? tc(t, n, e) : A.some(e)
                })
            },
            positionIn: nc,
            firstPositionIn: d(nc, !0),
            lastPositionIn: d(nc, !1)
        },
        ac = function(e, t) {
            return !e.isBlock(t) || t.innerHTML || de.ie || (t.innerHTML = '<br data-mce-bogus="1" />'), t
        },
        uc = function(e, t) {
            return ic.lastPositionIn(e).fold(function() {
                return !1
            }, function(e) {
                return t.setStart(e.container(), e.offset()), t.setEnd(e.container(), e.offset()), !0
            })
        },
        sc = function(e, t, n) {
            return !(!1 !== t.hasChildNodes() || !zu(e, t) || (o = n, i = (r = t).ownerDocument.createTextNode(ca), r.appendChild(i), o.setStart(i, 0), o.setEnd(i, 0), 0));
            var r, o, i
        },
        cc = function(e, t, n, r) {
            var o, i, a, u, s = n[t ? "start" : "end"],
                c = e.getRoot();
            if (s) {
                for (a = s[0], i = c, o = s.length - 1; 1 <= o; o--) {
                    if (u = i.childNodes, sc(c, i, r)) return !0;
                    if (s[o] > u.length - 1) return !!sc(c, i, r) || uc(i, r);
                    i = u[s[o]]
                }
                3 === i.nodeType && (a = Math.min(s[0], i.nodeValue.length)), 1 === i.nodeType && (a = Math.min(s[0], i.childNodes.length)), t ? r.setStart(i, a) : r.setEnd(i, a)
            }
            return !0
        },
        lc = function(e) {
            return _o.isText(e) && 0 < e.data.length
        },
        fc = function(e, t, n) {
            var r, o, i, a, u, s, c = e.get(n.id + "_" + t),
                l = n.keep;
            if (c) {
                if (r = c.parentNode, "start" === t ? l ? c.hasChildNodes() ? (r = c.firstChild, o = 1) : lc(c.nextSibling) ? (r = c.nextSibling, o = 0) : lc(c.previousSibling) ? (r = c.previousSibling, o = c.previousSibling.data.length) : (r = c.parentNode, o = e.nodeIndex(c) + 1) : o = e.nodeIndex(c) : l ? c.hasChildNodes() ? (r = c.firstChild, o = 1) : lc(c.previousSibling) ? (r = c.previousSibling, o = c.previousSibling.data.length) : (r = c.parentNode, o = e.nodeIndex(c)) : o = e.nodeIndex(c), u = r, s = o, !l) {
                    for (a = c.previousSibling, i = c.nextSibling, Yt.each(Yt.grep(c.childNodes), function(e) {
                        _o.isText(e) && (e.nodeValue = e.nodeValue.replace(/\uFEFF/g, ""))
                    }); c = e.get(n.id + "_" + t);) e.remove(c, !0);
                    a && i && a.nodeType === i.nodeType && _o.isText(a) && !de.opera && (o = a.nodeValue.length, a.appendData(i.nodeValue), e.remove(i), u = a, s = o)
                }
                return A.some(hu(u, s))
            }
            return A.none()
        },
        dc = function(e, t) {
            var n, r, o, i, a, u, s, c, l, f, d, m, g, p, h, v, b = e.dom;
            if (t) {
                if (v = t, Yt.isArray(v.start)) return p = t, h = (g = b).createRng(), cc(g, !0, p, h) && cc(g, !1, p, h) ? A.some(h) : A.none();
                if ("string" == typeof t.start) return A.some((f = t, d = (l = b).createRng(), m = Su(l.getRoot(), f.start), d.setStart(m.container(), m.offset()), m = Su(l.getRoot(), f.end), d.setEnd(m.container(), m.offset()), d));
                if (t.hasOwnProperty("id")) return s = fc(o = b, "start", i = t), c = fc(o, "end", i), qa([s, (a = c, u = s, a.isSome() ? a : u)], function(e, t) {
                    var n = o.createRng();
                    return n.setStart(ac(o, e.container()), e.offset()), n.setEnd(ac(o, t.container()), t.offset()), n
                });
                if (t.hasOwnProperty("name")) return n = b, r = t, A.from(n.select(r.name)[r.index]).map(function(e) {
                    var t = n.createRng();
                    return t.selectNode(e), t
                });
                if (t.hasOwnProperty("rng")) return A.some(t.rng)
            }
            return A.none()
        },
        mc = function(e, t, n) {
            return Iu.getBookmark(e, t, n)
        },
        gc = function(t, e) {
            dc(t, e).each(function(e) {
                t.setRng(e)
            })
        },
        pc = function(e) {
            return _o.isElement(e) && "SPAN" === e.tagName && "bookmark" === e.getAttribute("data-mce-type")
        },
        hc = function(e) {
            return e && /^(IMG)$/.test(e.nodeName)
        },
        vc = function(e) {
            return e && 3 === e.nodeType && /^([\t \r\n]+|)$/.test(e.nodeValue)
        },
        bc = function(e, t, n) {
            return "color" !== n && "backgroundColor" !== n || (t = e.toHex(t)), "fontWeight" === n && 700 === t && (t = "bold"), "fontFamily" === n && (t = t.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")), "" + t
        },
        yc = {
            isInlineBlock: hc,
            moveStart: function(e, t, n) {
                var r, o, i, a = n.startOffset,
                    u = n.startContainer;
                if ((n.startContainer !== n.endContainer || !hc(n.startContainer.childNodes[n.startOffset])) && 1 === u.nodeType)
                    for (a < (i = u.childNodes).length ? r = new ro(u = i[a], e.getParent(u, e.isBlock)) : (r = new ro(u = i[i.length - 1], e.getParent(u, e.isBlock))).next(!0), o = r.current(); o; o = r.next())
                        if (3 === o.nodeType && !vc(o)) return n.setStart(o, 0), void t.setRng(n)
            },
            getNonWhiteSpaceSibling: function(e, t, n) {
                if (e)
                    for (t = t ? "nextSibling" : "previousSibling", e = n ? e : e[t]; e; e = e[t])
                        if (1 === e.nodeType || !vc(e)) return e
            },
            isTextBlock: function(e, t) {
                return t.nodeType && (t = t.nodeName), !!e.schema.getTextBlockElements()[t.toLowerCase()]
            },
            isValid: function(e, t, n) {
                return e.schema.isValidChild(t, n)
            },
            isWhiteSpaceNode: vc,
            replaceVars: function(e, n) {
                return "string" != typeof e ? e = e(n) : n && (e = e.replace(/%(\w+)/g, function(e, t) {
                    return n[t] || e
                })), e
            },
            isEq: function(e, t) {
                return t = t || "", e = "" + ((e = e || "").nodeName || e), t = "" + (t.nodeName || t), e.toLowerCase() === t.toLowerCase()
            },
            normalizeStyleValue: bc,
            getStyle: function(e, t, n) {
                return bc(e, e.getStyle(t, n), n)
            },
            getTextDecoration: function(t, e) {
                var n;
                return t.getParent(e, function(e) {
                    return (n = t.getStyle(e, "text-decoration")) && "none" !== n
                }), n
            },
            getParents: function(e, t, n) {
                return e.getParents(t, n, e.getRoot())
            }
        },
        Cc = pc,
        xc = yc.getParents,
        wc = yc.isWhiteSpaceNode,
        Nc = yc.isTextBlock,
        Ec = function(e, t) {
            for (void 0 === t && (t = 3 === e.nodeType ? e.length : e.childNodes.length); e && e.hasChildNodes();)(e = e.childNodes[t]) && (t = 3 === e.nodeType ? e.length : e.childNodes.length);
            return {
                node: e,
                offset: t
            }
        },
        Sc = function(e, t) {
            for (var n = t; n;) {
                if (1 === n.nodeType && e.getContentEditable(n)) return "false" === e.getContentEditable(n) ? n : t;
                n = n.parentNode
            }
            return t
        },
        kc = function(e, t, n, r) {
            var o, i, a = n.nodeValue;
            return void 0 === r && (r = e ? a.length : 0), e ? (o = a.lastIndexOf(" ", r), -1 !== (o = (i = a.lastIndexOf("\xa0", r)) < o ? o : i) && !t && (o < r || !e) && o <= a.length && o++) : (o = a.indexOf(" ", r), i = a.indexOf("\xa0", r), o = -1 !== o && (-1 === i || o < i) ? o : i), o
        },
        Tc = function(e, t, n, r, o, i) {
            var a, u, s, c;
            if (3 === n.nodeType) {
                if (-1 !== (s = kc(o, i, n, r))) return {
                    container: n,
                    offset: s
                };
                c = n
            }
            for (a = new ro(n, e.getParent(n, e.isBlock) || t); u = a[o ? "prev" : "next"]();)
                if (3 !== u.nodeType || Cc(u.parentNode)) {
                    if (e.isBlock(u) || yc.isEq(u, "BR")) break
                } else if (-1 !== (s = kc(o, i, c = u))) return {
                    container: u,
                    offset: s
                };
            if (c) return {
                container: c,
                offset: r = o ? 0 : c.length
            }
        },
        Ac = function(e, t, n, r, o) {
            var i, a, u, s;
            for (3 === r.nodeType && 0 === r.nodeValue.length && r[o] && (r = r[o]), i = xc(e, r), a = 0; a < i.length; a++)
                for (u = 0; u < t.length; u++)
                    if (!("collapsed" in (s = t[u]) && s.collapsed !== n.collapsed) && e.is(i[a], s.selector)) return i[a];
            return r
        },
        Rc = function(t, e, n, r) {
            var o, i = t.dom,
                a = i.getRoot();
            if (e[0].wrapper || (o = i.getParent(n, e[0].block, a)), !o) {
                var u = i.getParent(n, "LI,TD,TH");
                o = i.getParent(3 === n.nodeType ? n.parentNode : n, function(e) {
                    return e !== a && Nc(t, e)
                }, u)
            }
            if (o && e[0].wrapper && (o = xc(i, o, "ul,ol").reverse()[0] || o), !o)
                for (o = n; o[r] && !i.isBlock(o[r]) && (o = o[r], !yc.isEq(o, "br")););
            return o || n
        },
        _c = function(e, t, n, r, o, i, a) {
            var u, s, c, l, f, d;
            if (u = s = a ? n : o, l = a ? "previousSibling" : "nextSibling", f = e.getRoot(), 3 === u.nodeType && !wc(u) && (a ? 0 < r : i < u.nodeValue.length)) return u;
            for (;;) {
                if (!t[0].block_expand && e.isBlock(s)) return s;
                for (c = s[l]; c; c = c[l])
                    if (!Cc(c) && !wc(c) && ("BR" !== (d = c).nodeName || !d.getAttribute("data-mce-bogus") || d.nextSibling)) return s;
                if (s === f || s.parentNode === f) {
                    u = s;
                    break
                }
                s = s.parentNode
            }
            return u
        },
        Dc = function(e, t, n, r) {
            var o, i = t.startContainer,
                a = t.startOffset,
                u = t.endContainer,
                s = t.endOffset,
                c = e.dom;
            return 1 === i.nodeType && i.hasChildNodes() && 3 === (i = Va(i, a)).nodeType && (a = 0), 1 === u.nodeType && u.hasChildNodes() && 3 === (u = Va(u, t.collapsed ? s : s - 1)).nodeType && (s = u.nodeValue.length), i = Sc(c, i), u = Sc(c, u), (Cc(i.parentNode) || Cc(i)) && (i = Cc(i) ? i : i.parentNode, 3 === (i = t.collapsed ? i.previousSibling || i : i.nextSibling || i).nodeType && (a = t.collapsed ? i.length : 0)), (Cc(u.parentNode) || Cc(u)) && (u = Cc(u) ? u : u.parentNode, 3 === (u = t.collapsed ? u.nextSibling || u : u.previousSibling || u).nodeType && (s = t.collapsed ? 0 : u.length)), t.collapsed && ((o = Tc(c, e.getBody(), i, a, !0, r)) && (i = o.container, a = o.offset), (o = Tc(c, e.getBody(), u, s, !1, r)) && (u = o.container, s = o.offset)), n[0].inline && (u = r ? u : function(e, t) {
                var n = Ec(e, t);
                if (n.node) {
                    for (; n.node && 0 === n.offset && n.node.previousSibling;) n = Ec(n.node.previousSibling);
                    n.node && 0 < n.offset && 3 === n.node.nodeType && " " === n.node.nodeValue.charAt(n.offset - 1) && 1 < n.offset && (e = n.node).splitText(n.offset - 1)
                }
                return e
            }(u, s)), (n[0].inline || n[0].block_expand) && (n[0].inline && 3 === i.nodeType && 0 !== a || (i = _c(c, n, i, a, u, s, !0)), n[0].inline && 3 === u.nodeType && s !== u.nodeValue.length || (u = _c(c, n, i, a, u, s, !1))), n[0].selector && !1 !== n[0].expand && !n[0].inline && (i = Ac(c, n, t, i, "previousSibling"), u = Ac(c, n, t, u, "nextSibling")), (n[0].block || n[0].selector) && (i = Rc(e, n, i, "previousSibling"), u = Rc(e, n, u, "nextSibling"), n[0].block && (c.isBlock(i) || (i = _c(c, n, i, a, u, s, !0)), c.isBlock(u) || (u = _c(c, n, i, a, u, s, !1)))), 1 === i.nodeType && (a = c.nodeIndex(i), i = i.parentNode), 1 === u.nodeType && (s = c.nodeIndex(u) + 1, u = u.parentNode), {
                startContainer: i,
                startOffset: a,
                endContainer: u,
                endOffset: s
            }
        },
        Bc = Yt.each,
        Oc = function(e, t, o) {
            var n, r, i, a, u, s, c, l = t.startContainer,
                f = t.startOffset,
                d = t.endContainer,
                m = t.endOffset;
            if (0 < (c = e.select("td[data-mce-selected],th[data-mce-selected]")).length) Bc(c, function(e) {
                o([e])
            });
            else {
                var g, p, h, v = function(e) {
                        var t;
                        return 3 === (t = e[0]).nodeType && t === l && f >= t.nodeValue.length && e.splice(0, 1), t = e[e.length - 1], 0 === m && 0 < e.length && t === d && 3 === t.nodeType && e.splice(e.length - 1, 1), e
                    },
                    b = function(e, t, n) {
                        for (var r = []; e && e !== n; e = e[t]) r.push(e);
                        return r
                    },
                    y = function(e, t) {
                        do {
                            if (e.parentNode === t) return e;
                            e = e.parentNode
                        } while (e)
                    },
                    C = function(e, t, n) {
                        var r = n ? "nextSibling" : "previousSibling";
                        for (u = (a = e).parentNode; a && a !== t; a = u) u = a.parentNode, (s = b(a === e ? a : a[r], r)).length && (n || s.reverse(), o(v(s)))
                    };
                if (1 === l.nodeType && l.hasChildNodes() && (l = l.childNodes[f]), 1 === d.nodeType && d.hasChildNodes() && (p = m, h = (g = d).childNodes, --p > h.length - 1 ? p = h.length - 1 : p < 0 && (p = 0), d = h[p] || g), l === d) return o(v([l]));
                for (n = e.findCommonAncestor(l, d), a = l; a; a = a.parentNode) {
                    if (a === d) return C(l, n, !0);
                    if (a === n) break
                }
                for (a = d; a; a = a.parentNode) {
                    if (a === l) return C(d, n);
                    if (a === n) break
                }
                r = y(l, n) || l, i = y(d, n) || d, C(l, r, !0), (s = b(r === l ? r : r.nextSibling, "nextSibling", i === d ? i.nextSibling : i)).length && o(v(s)), C(d, i)
            }
        },
        Pc = (Ls = lr, Is = "text", Ms = function(e) {
            return Ls(e) ? A.from(e.dom().nodeValue) : A.none()
        }, Fs = tr.detect().browser, {
            get: function(e) {
                if (!Ls(e)) throw new Error("Can only get " + Is + " value of a " + Is + " node");
                return zs(e).getOr("")
            },
            getOption: zs = Fs.isIE() && 10 === Fs.version.major ? function(e) {
                try {
                    return Ms(e)
                } catch (LN) {
                    return A.none()
                }
            } : Ms,
            set: function(e, t) {
                if (!Ls(e)) throw new Error("Can only set raw " + Is + " value of a " + Is + " node");
                e.dom().nodeValue = t
            }
        }),
        Lc = function(e) {
            return Pc.get(e)
        },
        Ic = function(r, o, i, a) {
            return Ir(o).fold(function() {
                return "skipping"
            }, function(e) {
                return "br" === a || lr(n = o) && "\ufeff" === Lc(n) ? "valid" : cr(t = o) && zi(t, Yi()) ? "existing" : Fu(o) ? "caret" : yc.isValid(r, i, a) && yc.isValid(r, ur(e), i) ? "valid" : "invalid-child";
                var t, n
            })
        },
        Mc = function(e, t, n, r) {
            var o, i, a = t.uid,
                u = void 0 === a ? (o = "mce-annotation", i = (new Date).getTime(), o + "_" + Math.floor(1e9 * Math.random()) + ++na + String(i)) : a,
                s = function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var o = 0;
                        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && (n[r[o]] = e[r[o]])
                    }
                    return n
                }(t, ["uid"]),
                c = rr.fromTag("span", e);
            Mi(c, Yi()), hr(c, "" + Ji(), u), hr(c, "" + Gi(), n);
            var l, f = r(u, s),
                d = f.attributes,
                m = void 0 === d ? {} : d,
                g = f.classes,
                p = void 0 === g ? [] : g;
            return vr(c, m), l = c, F(p, function(e) {
                Mi(l, e)
            }), c
        },
        Fc = function(i, e, t, n, r) {
            var a = [],
                u = Mc(i.getDoc(), r, t, n),
                s = Bi(A.none()),
                c = function() {
                    s.set(A.none())
                },
                l = function(e) {
                    F(e, o)
                },
                o = function(e) {
                    var t, n;
                    switch (Ic(i, e, "span", ur(e))) {
                        case "invalid-child":
                            c();
                            var r = Vr(e);
                            l(r), c();
                            break;
                        case "valid":
                            var o = s.get().getOrThunk(function() {
                                var e = oa(u);
                                return a.push(e), s.set(A.some(e)), e
                            });
                            Ni(t = e, n = o), ki(n, t)
                    }
                };
            return Oc(i.dom, e, function(e) {
                var t;
                c(), t = $(e, rr.fromDom), l(t)
            }), a
        },
        zc = function(s, c, l, f) {
            s.undoManager.transact(function() {
                var e, t, n, r, o = s.selection.getRng();
                if (o.collapsed && (r = Dc(e = s, t = o, [{
                    inline: !0
                }], 3 === (n = t).startContainer.nodeType && n.startContainer.nodeValue.length >= n.startOffset && "\xa0" === n.startContainer.nodeValue[n.startOffset]), t.setStart(r.startContainer, r.startOffset), t.setEnd(r.endContainer, r.endOffset), e.selection.setRng(t)), s.selection.getRng().collapsed) {
                    var i = Mc(s.getDoc(), f, c, l.decorate);
                    aa(i, "\xa0"), s.selection.getRng().insertNode(i.dom()), s.selection.select(i.dom())
                } else {
                    var a = Iu.getPersistentBookmark(s.selection, !1),
                        u = s.selection.getRng();
                    Fc(s, u, c, l.decorate, f), s.selection.moveToBookmark(a)
                }
            })
        };

    function Uc(s) {
        var n, r = (n = {}, {
            register: function(e, t) {
                n[e] = {
                    name: e,
                    settings: t
                }
            },
            lookup: function(e) {
                return n.hasOwnProperty(e) ? A.from(n[e]).map(function(e) {
                    return e.settings
                }) : A.none()
            }
        });
        ta(s, r);
        var o = ea(s);
        return {
            register: function(e, t) {
                r.register(e, t)
            },
            annotate: function(t, n) {
                r.lookup(t).each(function(e) {
                    zc(s, t, e, n)
                })
            },
            annotationChanged: function(e, t) {
                o.addListener(e, t)
            },
            remove: function(e) {
                Qi(s, A.some(e)).each(function(e) {
                    var t = e.elements;
                    F(t, _i)
                })
            },
            getAll: function(e) {
                var t, n, r, o, i, a, u = (t = s, n = e, r = rr.fromDom(t.getBody()), o = Vi(r, "[" + Gi() + '="' + n + '"]'), i = {}, F(o, function(e) {
                    var t = br(e, Ji()),
                        n = i.hasOwnProperty(t) ? i[t] : [];
                    i[t] = n.concat([e])
                }), i);
                return a = function(e) {
                    return $(e, function(e) {
                        return e.dom()
                    })
                }, gr(u, function(e, t, n) {
                    return {
                        k: t,
                        v: a(e, t, n)
                    }
                })
            }
        }
    }
    var Vc = function(e) {
            return Yt.grep(e.childNodes, function(e) {
                return "LI" === e.nodeName
            })
        },
        Hc = function(e) {
            return e && e.firstChild && e.firstChild === e.lastChild && ("\xa0" === (t = e.firstChild).data || _o.isBr(t));
            var t
        },
        jc = function(e) {
            return 0 < e.length && (!(t = e[e.length - 1]).firstChild || Hc(t)) ? e.slice(0, -1) : e;
            var t
        },
        qc = function(e, t) {
            var n = e.getParent(t, e.isBlock);
            return n && "LI" === n.nodeName ? n : null
        },
        $c = function(e, t) {
            var n = hu.after(e),
                r = Gs(t).prev(n);
            return r ? r.toRange() : null
        },
        Wc = function(t, e, n) {
            var r, o, i, a, u = t.parentNode;
            return Yt.each(e, function(e) {
                u.insertBefore(e, t)
            }), r = t, o = n, i = hu.before(r), (a = Gs(o).next(i)) ? a.toRange() : null
        },
        Kc = function(e, t) {
            var n, r, o, i, a, u, s = t.firstChild,
                c = t.lastChild;
            return s && "meta" === s.name && (s = s.next), c && "mce_marker" === c.attr("id") && (c = c.prev), r = c, u = (n = e).getNonEmptyElements(), r && (r.isEmpty(u) || (o = r, n.getBlockElements()[o.name] && (a = o).firstChild && a.firstChild === a.lastChild && ("br" === (i = o.firstChild).name || "\xa0" === i.value))) && (c = c.prev), !(!s || s !== c || "ul" !== s.name && "ol" !== s.name)
        },
        Xc = function(e, o, i, t) {
            var n, r, a, u, s, c, l, f, d, m, g, p, h, v, b, y, C, x, w, N = (n = o, r = t, c = e.serialize(r), l = n.createFragment(c), u = (a = l).firstChild, s = a.lastChild, u && "META" === u.nodeName && u.parentNode.removeChild(u), s && "mce_marker" === s.id && s.parentNode.removeChild(s), a),
                E = qc(o, i.startContainer),
                S = jc(Vc(N.firstChild)),
                k = o.getRoot(),
                T = function(e) {
                    var t = hu.fromRangeStart(i),
                        n = Gs(o.getRoot()),
                        r = 1 === e ? n.prev(t) : n.next(t);
                    return !r || qc(o, r.getNode()) !== E
                };
            return T(1) ? Wc(E, S, k) : T(2) ? (f = E, d = S, m = k, o.insertAfter(d.reverse(), f), $c(d[0], m)) : (p = S, h = k, v = g = E, y = (b = i).cloneRange(), C = b.cloneRange(), y.setStartBefore(v), C.setEndAfter(v), x = [y.cloneContents(), C.cloneContents()], (w = g.parentNode).insertBefore(x[0], g), Yt.each(p, function(e) {
                w.insertBefore(e, g)
            }), w.insertBefore(x[1], g), w.removeChild(g), $c(p[p.length - 1], h))
        },
        Yc = function(e, t) {
            return !!qc(e, t)
        },
        Gc = Yt.each,
        Jc = function(o) {
            this.compare = function(e, t) {
                if (e.nodeName !== t.nodeName) return !1;
                var n = function(n) {
                        var r = {};
                        return Gc(o.getAttribs(n), function(e) {
                            var t = e.nodeName.toLowerCase();
                            0 !== t.indexOf("_") && "style" !== t && 0 !== t.indexOf("data-") && (r[t] = o.getAttrib(n, t))
                        }), r
                    },
                    r = function(e, t) {
                        var n, r;
                        for (r in e)
                            if (e.hasOwnProperty(r)) {
                                if (void 0 === (n = t[r])) return !1;
                                if (e[r] !== n) return !1;
                                delete t[r]
                            } for (r in t)
                            if (t.hasOwnProperty(r)) return !1;
                        return !0
                    };
                return !(!r(n(e), n(t)) || !r(o.parseStyle(o.getAttrib(e, "style")), o.parseStyle(o.getAttrib(t, "style"))) || pc(e) || pc(t))
            }
        },
        Qc = function(e) {
            var t = Vi(e, "br"),
                n = z(function(e) {
                    for (var t = [], n = e.dom(); n;) t.push(rr.fromDom(n)), n = n.lastChild;
                    return t
                }(e).slice(-1), fo);
            t.length === n.length && F(n, Ri)
        },
        Zc = function(e) {
            Ai(e), ki(e, rr.fromHtml('<br data-mce-bogus="1">'))
        },
        el = function(n) {
            qr(n).each(function(t) {
                Mr(t).each(function(e) {
                    co(n) && fo(t) && co(e) && Ri(t)
                })
            })
        },
        tl = Yt.makeMap;

    function nl(e) {
        var u, s, c, l, f, d = [];
        return u = (e = e || {}).indent, s = tl(e.indent_before || ""), c = tl(e.indent_after || ""), l = qo.getEncodeFunc(e.entity_encoding || "raw", e.entities), f = "html" === e.element_format, {
            start: function(e, t, n) {
                var r, o, i, a;
                if (u && s[e] && 0 < d.length && 0 < (a = d[d.length - 1]).length && "\n" !== a && d.push("\n"), d.push("<", e), t)
                    for (r = 0, o = t.length; r < o; r++) i = t[r], d.push(" ", i.name, '="', l(i.value, !0), '"');
                d[d.length] = !n || f ? ">" : " />", n && u && c[e] && 0 < d.length && 0 < (a = d[d.length - 1]).length && "\n" !== a && d.push("\n")
            },
            end: function(e) {
                var t;
                d.push("</", e, ">"), u && c[e] && 0 < d.length && 0 < (t = d[d.length - 1]).length && "\n" !== t && d.push("\n")
            },
            text: function(e, t) {
                0 < e.length && (d[d.length] = t ? e : l(e))
            },
            cdata: function(e) {
                d.push("<![CDATA[", e, "]]>")
            },
            comment: function(e) {
                d.push("\x3c!--", e, "--\x3e")
            },
            pi: function(e, t) {
                t ? d.push("<?", e, " ", l(t), "?>") : d.push("<?", e, "?>"), u && d.push("\n")
            },
            doctype: function(e) {
                d.push("<!DOCTYPE", e, ">", u ? "\n" : "")
            },
            reset: function() {
                d.length = 0
            },
            getContent: function() {
                return d.join("").replace(/\n$/, "")
            }
        }
    }

    function rl(t, g) {
        void 0 === g && (g = ti());
        var p = nl(t);
        return (t = t || {}).validate = !("validate" in t) || t.validate, {
            serialize: function(e) {
                var f, d;
                d = t.validate, f = {
                    3: function(e) {
                        p.text(e.value, e.raw)
                    },
                    8: function(e) {
                        p.comment(e.value)
                    },
                    7: function(e) {
                        p.pi(e.name, e.value)
                    },
                    10: function(e) {
                        p.doctype(e.value)
                    },
                    4: function(e) {
                        p.cdata(e.value)
                    },
                    11: function(e) {
                        if (e = e.firstChild)
                            for (; m(e), e = e.next;);
                    }
                }, p.reset();
                var m = function(e) {
                    var t, n, r, o, i, a, u, s, c, l = f[e.type];
                    if (l) l(e);
                    else {
                        if (t = e.name, n = e.shortEnded, r = e.attributes, d && r && 1 < r.length && ((a = []).map = {}, c = g.getElementRule(e.name))) {
                            for (u = 0, s = c.attributesOrder.length; u < s; u++)(o = c.attributesOrder[u]) in r.map && (i = r.map[o], a.map[o] = i, a.push({
                                name: o,
                                value: i
                            }));
                            for (u = 0, s = r.length; u < s; u++)(o = r[u].name) in a.map || (i = r.map[o], a.map[o] = i, a.push({
                                name: o,
                                value: i
                            }));
                            r = a
                        }
                        if (p.start(e.name, r, n), !n) {
                            if (e = e.firstChild)
                                for (; m(e), e = e.next;);
                            p.end(t)
                        }
                    }
                };
                return 1 !== e.type || t.inner ? f[11](e) : m(e), p.getContent()
            }
        }
    }
    var ol = function(a) {
            var u = hu.fromRangeStart(a),
                s = hu.fromRangeEnd(a),
                c = a.commonAncestorContainer;
            return ic.fromPosition(!1, c, s).map(function(e) {
                return !hs(u, s, c) && hs(u, e, c) ? (t = u.container(), n = u.offset(), r = e.container(), o = e.offset(), (i = document.createRange()).setStart(t, n), i.setEnd(r, o), i) : a;
                var t, n, r, o, i
            }).getOr(a)
        },
        il = function(e) {
            return e.collapsed ? e : ol(e)
        },
        al = _o.matchNodeNames("td th"),
        ul = function(e, t) {
            var n, r, o = e.selection.getRng(),
                i = o.startContainer,
                a = o.startOffset;
            o.collapsed && (n = i, r = a, _o.isText(n) && "\xa0" === n.nodeValue[r - 1]) && _o.isText(i) && (i.insertData(a - 1, " "), i.deleteData(a, 1), o.setStart(i, a), o.setEnd(i, a), e.selection.setRng(o)), e.selection.setContent(t)
        },
        sl = function(e, t, n) {
            var r, o, i, a, u, s, c, l, f, d, m, g = e.selection,
                p = e.dom;
            if (/^ | $/.test(t) && (t = function(e, t) {
                var n, r;
                n = e.startContainer, r = e.startOffset;
                var o = function(e) {
                    return n[e] && 3 === n[e].nodeType
                };
                return 3 === n.nodeType && (0 < r ? t = t.replace(/^&nbsp;/, " ") : o("previousSibling") || (t = t.replace(/^ /, "&nbsp;")), r < n.length ? t = t.replace(/&nbsp;(<br>|)$/, " ") : o("nextSibling") || (t = t.replace(/(&nbsp;| )(<br>|)$/, "&nbsp;"))), t
            }(g.getRng(), t)), r = e.parser, m = n.merge, o = rl({
                validate: e.settings.validate
            }, e.schema), d = '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;&#x200B;</span>', s = {
                content: t,
                format: "html",
                selection: !0,
                paste: n.paste
            }, (s = e.fire("BeforeSetContent", s)).isDefaultPrevented()) e.fire("SetContent", {
                content: s.content,
                format: "html",
                selection: !0,
                paste: n.paste
            });
            else {
                -1 === (t = s.content).indexOf("{$caret}") && (t += "{$caret}"), t = t.replace(/\{\$caret\}/, d);
                var h, v, b, y, C, x, w = (l = g.getRng()).startContainer || (l.parentElement ? l.parentElement() : null),
                    N = e.getBody();
                w === N && g.isCollapsed() && p.isBlock(N.firstChild) && (h = e, (v = N.firstChild) && !h.schema.getShortEndedElements()[v.nodeName]) && p.isEmpty(N.firstChild) && ((l = p.createRng()).setStart(N.firstChild, 0), l.setEnd(N.firstChild, 0), g.setRng(l)), g.isCollapsed() || (e.selection.setRng(il(e.selection.getRng())), e.getDoc().execCommand("Delete", !1, null), b = e.selection.getRng(), y = t, C = b.startContainer, x = b.startOffset, 3 === C.nodeType && b.collapsed && ("\xa0" === C.data[x] ? (C.deleteData(x, 1), /[\u00a0| ]$/.test(y) || (y += " ")) : "\xa0" === C.data[x - 1] && (C.deleteData(x - 1, 1), /[\u00a0| ]$/.test(y) || (y = " " + y))), t = y);
                var E, S, k, T = {
                    context: (i = g.getNode()).nodeName.toLowerCase(),
                    data: n.data,
                    insert: !0
                };
                if (u = r.parse(t, T), !0 === n.paste && Kc(e.schema, u) && Yc(p, i)) return l = Xc(o, p, e.selection.getRng(), u), e.selection.setRng(l), void e.fire("SetContent", s);
                if (function(e) {
                    for (var t = e; t = t.walk();) 1 === t.type && t.attr("data-mce-fragment", "1")
                }(u), "mce_marker" === (f = u.lastChild).attr("id"))
                    for (f = (c = f).prev; f; f = f.walk(!0))
                        if (3 === f.type || !p.isBlock(f.name)) {
                            e.schema.isValidChild(f.parent.name, "span") && f.parent.insert(c, f, "br" === f.name);
                            break
                        } if (e._selectionOverrides.showBlockCaretContainer(i), T.invalid) {
                    for (ul(e, d), i = g.getNode(), a = e.getBody(), 9 === i.nodeType ? i = f = a : f = i; f !== a;) f = (i = f).parentNode;
                    t = i === a ? a.innerHTML : p.getOuterHTML(i), t = o.serialize(r.parse(t.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i, function() {
                        return o.serialize(u)
                    }))), i === a ? p.setHTML(a, t) : p.setOuterHTML(i, t)
                } else ! function(e, t, n) {
                    if ("all" === n.getAttribute("data-mce-bogus")) n.parentNode.insertBefore(e.dom.createFragment(t), n);
                    else {
                        var r = n.firstChild,
                            o = n.lastChild;
                        !r || r === o && "BR" === r.nodeName ? e.dom.setHTML(n, t) : ul(e, t)
                    }
                }(e, t = o.serialize(u), i);
                ! function(e, t) {
                    var n = e.schema.getTextInlineElements(),
                        r = e.dom;
                    if (t) {
                        var o = e.getBody(),
                            i = new Jc(r);
                        Yt.each(r.select("*[data-mce-fragment]"), function(e) {
                            for (var t = e.parentNode; t && t !== o; t = t.parentNode) n[e.nodeName.toLowerCase()] && i.compare(t, e) && r.remove(e, !0)
                        })
                    }
                }(e, m),
                    function(n, e) {
                        var t, r, o, i, a, u = n.dom,
                            s = n.selection;
                        if (e) {
                            if (n.selection.scrollIntoView(e), t = function(e) {
                                for (var t = n.getBody(); e && e !== t; e = e.parentNode)
                                    if ("false" === n.dom.getContentEditable(e)) return e;
                                return null
                            }(e)) return u.remove(e), s.select(t);
                            var c = u.createRng();
                            (i = e.previousSibling) && 3 === i.nodeType ? (c.setStart(i, i.nodeValue.length), de.ie || (a = e.nextSibling) && 3 === a.nodeType && (i.appendData(a.data), a.parentNode.removeChild(a))) : (c.setStartBefore(e), c.setEndBefore(e)), r = u.getParent(e, u.isBlock), u.remove(e), r && u.isEmpty(r) && (n.$(r).empty(), c.setStart(r, 0), c.setEnd(r, 0), al(r) || r.getAttribute("data-mce-fragment") || !(o = function(e) {
                                var t = hu.fromRangeStart(e);
                                if (t = Gs(n.getBody()).next(t)) return t.toRange()
                            }(c)) ? u.add(r, u.create("br", {
                                "data-mce-bogus": "1"
                            })) : (c = o, u.remove(r))), s.setRng(c)
                        }
                    }(e, p.get("mce_marker")), E = e.getBody(), Yt.each(E.getElementsByTagName("*"), function(e) {
                    e.removeAttribute("data-mce-fragment")
                }), S = e.dom, k = e.selection.getStart(), A.from(S.getParent(k, "td,th")).map(rr.fromDom).each(el), e.fire("SetContent", s), e.addVisual()
            }
        },
        cl = function(e, t) {
            var n, r, o = "string" != typeof(n = t) ? (r = Yt.extend({
                paste: n.paste,
                data: {
                    paste: n.paste
                }
            }, n), {
                content: n.content,
                details: r
            }) : {
                content: n,
                details: {}
            };
            sl(e, o.content, o.details)
        },
        ll = Er("sections", "settings"),
        fl = tr.detect().deviceType.isTouch(),
        dl = ["lists", "autolink", "autosave"],
        ml = {
            theme: "mobile"
        },
        gl = function(e) {
            var t = D(e) ? e.join(" ") : e,
                n = $(R(t) ? t.split(" ") : [], Kn);
            return z(n, function(e) {
                return 0 < e.length
            })
        },
        pl = function(n, e) {
            var r, o, i, t = (r = function(e, t) {
                return M(n, t)
            }, o = {}, i = {}, mr(e, function(e, t) {
                (r(e, t) ? o : i)[t] = e
            }), {
                t: o,
                f: i
            });
            return ll(t.t, t.f)
        },
        hl = function(e, t) {
            return e.sections().hasOwnProperty(t)
        },
        vl = function(e, t, n, r) {
            var o, i = gl(n.forced_plugins),
                a = gl(r.plugins),
                u = e && hl(t, "mobile") ? z(a, d(M, dl)) : a,
                s = (o = u, [].concat(gl(i)).concat(gl(o)));
            return Yt.extend(r, {
                plugins: s.join(" ")
            })
        },
        bl = function(e, t, n, r) {
            var o, i, a, u, s, c, l, f, d, m, g = pl(["mobile"], r),
                p = Yt.extend(t, n, g.settings(), (f = e, m = (d = g).settings().inline, f && hl(d, "mobile") && !m ? (u = "mobile", s = ml, c = g.sections(), l = c.hasOwnProperty(u) ? c[u] : {}, Yt.extend({}, s, l)) : {}), {
                    validate: !0,
                    content_editable: g.settings().inline,
                    external_plugins: (o = n, i = g.settings(), a = i.external_plugins ? i.external_plugins : {}, o && o.external_plugins ? Yt.extend({}, o.external_plugins, a) : a)
                });
            return vl(e, g, n, p)
        },
        yl = function(e, t, n) {
            return A.from(t.settings[n]).filter(e)
        },
        Cl = d(yl, R),
        xl = function(e, t, n, r) {
            var o, i, a, u = t in e.settings ? e.settings[t] : n;
            return "hash" === r ? (a = {}, "string" == typeof(i = u) ? F(0 < i.indexOf("=") ? i.split(/[;,](?![^=;,]*(?:[;,]|$))/) : i.split(","), function(e) {
                var t = e.split("=");
                1 < t.length ? a[Yt.trim(t[0])] = Yt.trim(t[1]) : a[Yt.trim(t[0])] = Yt.trim(t)
            }) : a = i, a) : "string" === r ? yl(R, e, t).getOr(n) : "number" === r ? yl(L, e, t).getOr(n) : "boolean" === r ? yl(O, e, t).getOr(n) : "object" === r ? yl(_, e, t).getOr(n) : "array" === r ? yl(D, e, t).getOr(n) : "string[]" === r ? yl((o = R, function(e) {
                return D(e) && J(e, o)
            }), e, t).getOr(n) : "function" === r ? yl(P, e, t).getOr(n) : u
        },
        wl = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,
        Nl = function(e, t) {
            var n = t.container(),
                r = t.offset();
            return e ? ga(n) ? _o.isText(n.nextSibling) ? hu(n.nextSibling, 0) : hu.after(n) : va(t) ? hu(n, r + 1) : t : ga(n) ? _o.isText(n.previousSibling) ? hu(n.previousSibling, n.previousSibling.data.length) : hu.before(n) : ba(t) ? hu(n, r - 1) : t
        },
        El = {
            isInlineTarget: function(e, t) {
                var n = Cl(e, "inline_boundaries_selector").getOr("a[href],code");
                return Dr(rr.fromDom(t), n)
            },
            findRootInline: function(e, t, n) {
                var r, o, i, a = (r = e, o = t, i = n, z(gi.DOM.getParents(i.container(), "*", o), r));
                return A.from(a[a.length - 1])
            },
            isRtl: function(e) {
                return "rtl" === gi.DOM.getStyle(e, "direction", !0) || (t = e.textContent, wl.test(t));
                var t
            },
            isAtZwsp: function(e) {
                return va(e) || ba(e)
            },
            normalizePosition: Nl,
            normalizeForwards: d(Nl, !0),
            normalizeBackwards: d(Nl, !1),
            hasSameParentBlock: function(e, t, n) {
                var r = ps(t, e),
                    o = ps(n, e);
                return r && r === o
            }
        },
        Sl = function(e, t) {
            return Pr(e, t) ? $i(t, function(e) {
                return mo(e) || po(e)
            }, (n = e, function(e) {
                return Or(n, rr.fromDom(e.dom().parentNode))
            })) : A.none();
            var n
        },
        kl = function(e) {
            var t, n, r;
            e.dom.isEmpty(e.getBody()) && (e.setContent(""), n = (t = e).getBody(), r = n.firstChild && t.dom.isBlock(n.firstChild) ? n.firstChild : n, t.selection.setCursorLocation(r, 0))
        },
        Tl = function(i, a, u) {
            return qa([ic.firstPositionIn(u), ic.lastPositionIn(u)], function(e, t) {
                var n = El.normalizePosition(!0, e),
                    r = El.normalizePosition(!1, t),
                    o = El.normalizePosition(!1, a);
                return i ? ic.nextPosition(u, o).map(function(e) {
                    return e.isEqual(r) && a.isEqual(n)
                }).getOr(!1) : ic.prevPosition(u, o).map(function(e) {
                    return e.isEqual(n) && a.isEqual(r)
                }).getOr(!1)
            }).getOr(!0)
        },
        Al = function(e, t) {
            var n, r, o, i = rr.fromDom(e),
                a = rr.fromDom(t);
            return n = a, r = "pre,code", o = d(Or, i), Wi(n, r, o).isSome()
        },
        Rl = function(e, t) {
            return Da(t) && !1 === (r = e, o = t, _o.isText(o) && /^[ \t\r\n]*$/.test(o.data) && !1 === Al(r, o)) || (n = t, _o.isElement(n) && "A" === n.nodeName && n.hasAttribute("name")) || _l(t);
            var n, r, o
        },
        _l = _o.hasAttribute("data-mce-bookmark"),
        Dl = _o.hasAttribute("data-mce-bogus"),
        Bl = _o.hasAttributeValue("data-mce-bogus", "all"),
        Ol = function(e) {
            return function(e) {
                var t, n, r = 0;
                if (Rl(e, e)) return !1;
                if (!(n = e.firstChild)) return !0;
                t = new ro(n, e);
                do {
                    if (Bl(n)) n = t.next(!0);
                    else if (Dl(n)) n = t.next();
                    else if (_o.isBr(n)) r++, n = t.next();
                    else {
                        if (Rl(e, n)) return !1;
                        n = t.next()
                    }
                } while (n);
                return r <= 1
            }(e.dom())
        },
        Pl = Er("block", "position"),
        Ll = Er("from", "to"),
        Il = function(e, t) {
            var n = rr.fromDom(e),
                r = rr.fromDom(t.container());
            return Sl(n, r).map(function(e) {
                return Pl(e, t)
            })
        },
        Ml = function(o, i, e) {
            var t = Il(o, hu.fromRangeStart(e)),
                n = t.bind(function(e) {
                    return ic.fromPosition(i, o, e.position()).bind(function(e) {
                        return Il(o, e).map(function(e) {
                            return t = o, n = i, r = e, _o.isBr(r.position().getNode()) && !1 === Ol(r.block()) ? ic.positionIn(!1, r.block().dom()).bind(function(e) {
                                return e.isEqual(r.position()) ? ic.fromPosition(n, t, e).bind(function(e) {
                                    return Il(t, e)
                                }) : A.some(r)
                            }).getOr(r) : r;
                            var t, n, r
                        })
                    })
                });
            return qa([t, n], Ll).filter(function(e) {
                return !1 === Or((r = e).from().block(), r.to().block()) && Ir((n = e).from().block()).bind(function(t) {
                    return Ir(n.to().block()).filter(function(e) {
                        return Or(t, e)
                    })
                }).isSome() && (t = e, !1 === _o.isContentEditableFalse(t.from().block()) && !1 === _o.isContentEditableFalse(t.to().block()));
                var t, n, r
            })
        },
        Fl = function(e, t, n) {
            return n.collapsed ? Ml(e, t, n) : A.none()
        },
        zl = function(e, t, n) {
            return Pr(t, e) ? function(e, t) {
                for (var n = P(t) ? t : j(!1), r = e.dom(), o = []; null !== r.parentNode && r.parentNode !== undefined;) {
                    var i = r.parentNode,
                        a = rr.fromDom(i);
                    if (o.push(a), !0 === n(a)) break;
                    r = i
                }
                return o
            }(e, function(e) {
                return n(e) || Or(e, t)
            }).slice(0, -1) : []
        },
        Ul = function(e, t) {
            return zl(e, t, j(!1))
        },
        Vl = Ul,
        Hl = function(e, t) {
            return [e].concat(Ul(e, t))
        },
        jl = function(e) {
            var t, n = (t = Vr(e), K(t, co).fold(function() {
                return t
            }, function(e) {
                return t.slice(0, e)
            }));
            return F(n, Ri), n
        },
        ql = function(e, t) {
            var n = Hl(t, e);
            return V(n.reverse(), Ol).each(Ri)
        },
        $l = function(e, t, n, r) {
            if (Ol(n)) return Zc(n), ic.firstPositionIn(n.dom());
            0 === z(zr(r), function(e) {
                return !Ol(e)
            }).length && Ol(t) && Ni(r, rr.fromTag("br"));
            var o = ic.prevPosition(n.dom(), hu.before(r.dom()));
            return F(jl(t), function(e) {
                Ni(r, e)
            }), ql(e, t), o
        },
        Wl = function(e, t, n) {
            if (Ol(n)) return Ri(n), Ol(t) && Zc(t), ic.firstPositionIn(t.dom());
            var r = ic.lastPositionIn(n.dom());
            return F(jl(t), function(e) {
                ki(n, e)
            }), ql(e, t), r
        },
        Kl = function(e, t) {
            return Pr(t, e) ? (n = Hl(e, t), A.from(n[n.length - 1])) : A.none();
            var n
        },
        Xl = function(e, t) {
            ic.positionIn(e, t.dom()).map(function(e) {
                return e.getNode()
            }).map(rr.fromDom).filter(fo).each(Ri)
        },
        Yl = function(e, t, n) {
            return Xl(!0, t), Xl(!1, n), Kl(t, n).fold(d(Wl, e, t, n), d($l, e, t, n))
        },
        Gl = function(e, t, n, r) {
            return t ? Yl(e, r, n) : Yl(e, n, r)
        },
        Jl = function(t, n) {
            var e, r = rr.fromDom(t.getBody());
            return (e = Fl(r.dom(), n, t.selection.getRng()).bind(function(e) {
                return Gl(r, n, e.from().block(), e.to().block())
            })).each(function(e) {
                t.selection.setRng(e.toRange())
            }), e.isSome()
        },
        Ql = function(e, t) {
            var n = rr.fromDom(t),
                r = d(Or, e);
            return qi(n, bo, r).isSome()
        },
        Zl = function(e, t) {
            var n, r, o = ic.prevPosition(e.dom(), hu.fromRangeStart(t)).isNone(),
                i = ic.nextPosition(e.dom(), hu.fromRangeEnd(t)).isNone();
            return !(Ql(n = e, (r = t).startContainer) || Ql(n, r.endContainer)) && o && i
        },
        ef = function(e) {
            var n, r, o, t, i = rr.fromDom(e.getBody()),
                a = e.selection.getRng();
            return Zl(i, a) ? ((t = e).setContent(""), t.selection.setCursorLocation(), !0) : (n = i, r = e.selection, o = r.getRng(), qa([Sl(n, rr.fromDom(o.startContainer)), Sl(n, rr.fromDom(o.endContainer))], function(e, t) {
                return !1 === Or(e, t) && (o.deleteContents(), Gl(n, !0, e, t).each(function(e) {
                    r.setRng(e.toRange())
                }), !0)
            }).getOr(!1))
        },
        tf = function(e, t) {
            return !e.selection.isCollapsed() && ef(e)
        },
        nf = function(a) {
            if (!D(a)) throw new Error("cases must be an array");
            if (0 === a.length) throw new Error("there must be at least one case");
            var u = [],
                n = {};
            return F(a, function(e, r) {
                var t = fr(e);
                if (1 !== t.length) throw new Error("one and only one name per case");
                var o = t[0],
                    i = e[o];
                if (n[o] !== undefined) throw new Error("duplicate key detected:" + o);
                if ("cata" === o) throw new Error("cannot have a case named cata (sorry)");
                if (!D(i)) throw new Error("case arguments must be an array");
                u.push(o), n[o] = function() {
                    var e = arguments.length;
                    if (e !== i.length) throw new Error("Wrong number of arguments to case " + o + ". Expected " + i.length + " (" + i + "), got " + e);
                    for (var n = new Array(e), t = 0; t < n.length; t++) n[t] = arguments[t];
                    return {
                        fold: function() {
                            if (arguments.length !== a.length) throw new Error("Wrong number of arguments to fold. Expected " + a.length + ", got " + arguments.length);
                            return arguments[r].apply(null, n)
                        },
                        match: function(e) {
                            var t = fr(e);
                            if (u.length !== t.length) throw new Error("Wrong number of arguments to match. Expected: " + u.join(",") + "\nActual: " + t.join(","));
                            if (!J(u, function(e) {
                                return M(t, e)
                            })) throw new Error("Not all branches were specified when using match. Specified: " + t.join(", ") + "\nRequired: " + u.join(", "));
                            return e[o].apply(null, n)
                        },
                        log: function(e) {
                            console.log(e, {
                                constructors: u,
                                constructor: o,
                                params: n
                            })
                        }
                    }
                }
            }), n
        },
        rf = function(e) {
            return Ps(e).exists(fo)
        },
        of = function(e, t, n) {
            var r = z(Hl(rr.fromDom(n.container()), t), co),
                o = ee(r).getOr(t);
            return ic.fromPosition(e, o.dom(), n).filter(rf)
        },
        af = function(e, t) {
            return Ps(t).exists(fo) || of (!0, e, t).isSome()
        },
        uf = function(e, t) {
            return (n = t, A.from(n.getNode(!0)).map(rr.fromDom)).exists(fo) || of (!1, e, t).isSome();
            var n
        },
        sf = d( of , !1),
        cf = d( of , !0),
        lf = nf([{
            remove: ["element"]
        }, {
            moveToElement: ["element"]
        }, {
            moveToPosition: ["position"]
        }]),
        ff = function(e, t, n, r) {
            var o = r.getNode(!1 === t);
            return Sl(rr.fromDom(e), rr.fromDom(n.getNode())).map(function(e) {
                return Ol(e) ? lf.remove(e.dom()) : lf.moveToElement(o)
            }).orThunk(function() {
                return A.some(lf.moveToElement(o))
            })
        },
        df = function(u, s, c) {
            return ic.fromPosition(s, u, c).bind(function(e) {
                return a = e.getNode(), bo(rr.fromDom(a)) || po(rr.fromDom(a)) ? A.none() : (t = u, o = e, i = function(e) {
                    return lo(rr.fromDom(e)) && !hs(r, o, t)
                }, Ss(!(n = s), r = c).fold(function() {
                    return Ss(n, o).fold(j(!1), i)
                }, i) ? A.none() : s && _o.isContentEditableFalse(e.getNode()) ? ff(u, s, c, e) : !1 === s && _o.isContentEditableFalse(e.getNode(!0)) ? ff(u, s, c, e) : s && As(c) ? A.some(lf.moveToPosition(e)) : !1 === s && Ts(c) ? A.some(lf.moveToPosition(e)) : A.none());
                var t, n, r, o, i, a
            })
        },
        mf = function(r, e, o) {
            return i = e, a = o.getNode(!1 === i), u = i ? "after" : "before", _o.isElement(a) && a.getAttribute("data-mce-caret") === u ? (t = e, n = o.getNode(!1 === e), t && _o.isContentEditableFalse(n.nextSibling) ? A.some(lf.moveToElement(n.nextSibling)) : !1 === t && _o.isContentEditableFalse(n.previousSibling) ? A.some(lf.moveToElement(n.previousSibling)) : A.none()).fold(function() {
                return df(r, e, o)
            }, A.some) : df(r, e, o).bind(function(e) {
                return t = r, n = o, e.fold(function(e) {
                    return A.some(lf.remove(e))
                }, function(e) {
                    return A.some(lf.moveToElement(e))
                }, function(e) {
                    return hs(n, e, t) ? A.none() : A.some(lf.moveToPosition(e))
                });
                var t, n
            });
            var t, n, i, a, u
        },
        gf = function(e, t, n) {
            if (0 !== n) {
                var r, o, i, a = e.data.slice(t, t + n),
                    u = t + n >= e.data.length,
                    s = 0 === t;
                e.replaceData(t, n, (o = s, i = u, U((r = a).split(""), function(e, t) {
                    return -1 !== " \f\n\r\t\x0B".indexOf(t) || "\xa0" === t ? e.previousCharIsSpace || "" === e.str && o || e.str.length === r.length - 1 && i ? {
                        previousCharIsSpace: !1,
                        str: e.str + "\xa0"
                    } : {
                        previousCharIsSpace: !0,
                        str: e.str + " "
                    } : {
                        previousCharIsSpace: !1,
                        str: e.str + t
                    }
                }, {
                    previousCharIsSpace: !1,
                    str: ""
                }).str))
            }
        },
        pf = function(e, t) {
            var n, r = e.data.slice(t),
                o = r.length - (n = r, n.replace(/^\s+/g, "")).length;
            return gf(e, t, o)
        },
        hf = function(e, t) {
            return r = e, o = (n = t).container(), i = n.offset(), !1 === hu.isTextPosition(n) && o === r.parentNode && i > hu.before(r).offset() ? hu(t.container(), t.offset() - 1) : t;
            var n, r, o, i
        },
        vf = function(e) {
            return Da(e.previousSibling) ? A.some((t = e.previousSibling, _o.isText(t) ? hu(t, t.data.length) : hu.after(t))) : e.previousSibling ? ic.lastPositionIn(e.previousSibling) : A.none();
            var t
        },
        bf = function(e) {
            return Da(e.nextSibling) ? A.some((t = e.nextSibling, _o.isText(t) ? hu(t, 0) : hu.before(t))) : e.nextSibling ? ic.firstPositionIn(e.nextSibling) : A.none();
            var t
        },
        yf = function(r, o) {
            return vf(o).orThunk(function() {
                return bf(o)
            }).orThunk(function() {
                return e = r, t = o, n = hu.before(t.previousSibling ? t.previousSibling : t.parentNode), ic.prevPosition(e, n).fold(function() {
                    return ic.nextPosition(e, hu.after(t))
                }, A.some);
                var e, t, n
            })
        },
        Cf = function(n, r) {
            return bf(r).orThunk(function() {
                return vf(r)
            }).orThunk(function() {
                return e = n, t = r, ic.nextPosition(e, hu.after(t)).fold(function() {
                    return ic.prevPosition(e, hu.before(t))
                }, A.some);
                var e, t
            })
        },
        xf = function(e, t, n) {
            return (r = e, o = t, i = n, r ? Cf(o, i) : yf(o, i)).map(d(hf, n));
            var r, o, i
        },
        wf = function(t, n, e) {
            e.fold(function() {
                t.focus()
            }, function(e) {
                t.selection.setRng(e.toRange(), n)
            })
        },
        Nf = function(e, t) {
            return t && e.schema.getBlockElements().hasOwnProperty(ur(t))
        },
        Ef = function(e) {
            if (Ol(e)) {
                var t = rr.fromHtml('<br data-mce-bogus="1">');
                return Ai(e), ki(e, t), A.some(hu.before(t.dom()))
            }
            return A.none()
        },
        Sf = function(e, t, l) {
            var n = Mr(e).filter(function(e) {
                    return _o.isText(e.dom())
                }),
                r = Fr(e).filter(function(e) {
                    return _o.isText(e.dom())
                });
            return Ri(e), qa([n, r, t], function(e, t, n) {
                var r, o, i, a, u = e.dom(),
                    s = t.dom(),
                    c = u.data.length;
                return o = s, i = l, a = Xn((r = u).data).length, r.appendData(o.data), Ri(rr.fromDom(o)), i && pf(r, a), n.container() === s ? hu(u, c) : n
            }).orThunk(function() {
                return l && (n.each(function(e) {
                    return t = e.dom(), n = e.dom().length, r = t.data.slice(0, n), o = r.length - Xn(r).length, gf(t, n - o, o);
                    var t, n, r, o
                }), r.each(function(e) {
                    return pf(e.dom(), 0)
                })), t
            })
        },
        kf = function(e, t) {
            return n = e.schema.getTextInlineElements(), r = ur(t), dr.call(n, r);
            var n, r
        },
        Tf = function(t, n, e, r) {
            void 0 === r && (r = !0);
            var o, i = xf(n, t.getBody(), e.dom()),
                a = qi(e, d(Nf, t), (o = t.getBody(), function(e) {
                    return e.dom() === o
                })),
                u = Sf(e, i, kf(t, e));
            t.dom.isEmpty(t.getBody()) ? (t.setContent(""), t.selection.setCursorLocation()) : a.bind(Ef).fold(function() {
                r && wf(t, n, u)
            }, function(e) {
                r && wf(t, n, A.some(e))
            })
        },
        Af = function(a, u) {
            var e, t, n, r, o, i;
            return (e = a.getBody(), t = u, n = a.selection.getRng(), r = ws(t ? 1 : -1, e, n), o = hu.fromRangeStart(r), i = rr.fromDom(e), !1 === t && As(o) ? A.some(lf.remove(o.getNode(!0))) : t && Ts(o) ? A.some(lf.remove(o.getNode())) : !1 === t && Ts(o) && uf(i, o) ? sf(i, o).map(function(e) {
                return lf.remove(e.getNode())
            }) : t && As(o) && af(i, o) ? cf(i, o).map(function(e) {
                return lf.remove(e.getNode())
            }) : mf(e, t, o)).map(function(e) {
                return e.fold((o = a, i = u, function(e) {
                    return o._selectionOverrides.hideFakeCaret(), Tf(o, i, rr.fromDom(e)), !0
                }), (n = a, r = u, function(e) {
                    var t = r ? hu.before(e) : hu.after(e);
                    return n.selection.setRng(t.toRange()), !0
                }), (t = a, function(e) {
                    return t.selection.setRng(e.toRange()), !0
                }));
                var t, n, r, o, i
            }).getOr(!1)
        },
        Rf = function(e, t) {
            var n, r = e.selection.getNode();
            return !!_o.isContentEditableFalse(r) && (n = rr.fromDom(e.getBody()), F(Vi(n, ".mce-offscreen-selection"), Ri), Tf(e, t, rr.fromDom(e.selection.getNode())), kl(e), !0)
        },
        _f = function(e, t) {
            return e.selection.isCollapsed() ? Af(e, t) : Rf(e, t)
        },
        Df = function(e) {
            var t, n = function(e, t) {
                for (; t && t !== e;) {
                    if (_o.isContentEditableTrue(t) || _o.isContentEditableFalse(t)) return t;
                    t = t.parentNode
                }
                return null
            }(e.getBody(), e.selection.getNode());
            return _o.isContentEditableTrue(n) && e.dom.isBlock(n) && e.dom.isEmpty(n) && (t = e.dom.create("br", {
                "data-mce-bogus": "1"
            }), e.dom.setHTML(n, ""), n.appendChild(t), e.selection.setRng(hu.before(t).toRange())), !0
        },
        Bf = _o.isText,
        Of = function(e) {
            return Bf(e) && e.data[0] === ca
        },
        Pf = function(e) {
            return Bf(e) && e.data[e.data.length - 1] === ca
        },
        Lf = function(e) {
            return e.ownerDocument.createTextNode(ca)
        },
        If = function(e, t) {
            return e ? function(e) {
                if (Bf(e.previousSibling)) return Pf(e.previousSibling) || e.previousSibling.appendData(ca), e.previousSibling;
                if (Bf(e)) return Of(e) || e.insertData(0, ca), e;
                var t = Lf(e);
                return e.parentNode.insertBefore(t, e), t
            }(t) : function(e) {
                if (Bf(e.nextSibling)) return Of(e.nextSibling) || e.nextSibling.insertData(0, ca), e.nextSibling;
                if (Bf(e)) return Pf(e) || e.appendData(ca), e;
                var t = Lf(e);
                return e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t), t
            }(t)
        },
        Mf = d(If, !0),
        Ff = d(If, !1),
        zf = function(e, t) {
            return _o.isText(e.container()) ? If(t, e.container()) : If(t, e.getNode())
        },
        Uf = function(e, t) {
            var n = t.get();
            return n && e.container() === n && ga(n)
        },
        Vf = function(n, e) {
            return e.fold(function(e) {
                Yu.remove(n.get());
                var t = Mf(e);
                return n.set(t), A.some(hu(t, t.length - 1))
            }, function(e) {
                return ic.firstPositionIn(e).map(function(e) {
                    if (Uf(e, n)) return hu(n.get(), 1);
                    Yu.remove(n.get());
                    var t = zf(e, !0);
                    return n.set(t), hu(t, 1)
                })
            }, function(e) {
                return ic.lastPositionIn(e).map(function(e) {
                    if (Uf(e, n)) return hu(n.get(), n.get().length - 1);
                    Yu.remove(n.get());
                    var t = zf(e, !1);
                    return n.set(t), hu(t, t.length - 1)
                })
            }, function(e) {
                Yu.remove(n.get());
                var t = Ff(e);
                return n.set(t), A.some(hu(t, 1))
            })
        },
        Hf = function(e, t) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n].apply(null, t);
                if (r.isSome()) return r
            }
            return A.none()
        },
        jf = nf([{
            before: ["element"]
        }, {
            start: ["element"]
        }, {
            end: ["element"]
        }, {
            after: ["element"]
        }]),
        qf = function(e, t) {
            var n = ps(t, e);
            return n || e
        },
        $f = function(e, t, n) {
            var r = El.normalizeForwards(n),
                o = qf(t, r.container());
            return El.findRootInline(e, o, r).fold(function() {
                return ic.nextPosition(o, r).bind(d(El.findRootInline, e, o)).map(function(e) {
                    return jf.before(e)
                })
            }, A.none)
        },
        Wf = function(e, t) {
            return null === zu(e, t)
        },
        Kf = function(e, t, n) {
            return El.findRootInline(e, t, n).filter(d(Wf, t))
        },
        Xf = function(e, t, n) {
            var r = El.normalizeBackwards(n);
            return Kf(e, t, r).bind(function(e) {
                return ic.prevPosition(e, r).isNone() ? A.some(jf.start(e)) : A.none()
            })
        },
        Yf = function(e, t, n) {
            var r = El.normalizeForwards(n);
            return Kf(e, t, r).bind(function(e) {
                return ic.nextPosition(e, r).isNone() ? A.some(jf.end(e)) : A.none()
            })
        },
        Gf = function(e, t, n) {
            var r = El.normalizeBackwards(n),
                o = qf(t, r.container());
            return El.findRootInline(e, o, r).fold(function() {
                return ic.prevPosition(o, r).bind(d(El.findRootInline, e, o)).map(function(e) {
                    return jf.after(e)
                })
            }, A.none)
        },
        Jf = function(e) {
            return !1 === El.isRtl(Zf(e))
        },
        Qf = function(e, t, n) {
            return Hf([$f, Xf, Yf, Gf], [e, t, n]).filter(Jf)
        },
        Zf = function(e) {
            return e.fold(q, q, q, q)
        },
        ed = function(e) {
            return e.fold(j("before"), j("start"), j("end"), j("after"))
        },
        td = function(e) {
            return e.fold(jf.before, jf.before, jf.after, jf.after)
        },
        nd = function(n, e, r, t, o, i) {
            return qa([El.findRootInline(e, r, t), El.findRootInline(e, r, o)], function(e, t) {
                return e !== t && El.hasSameParentBlock(r, e, t) ? jf.after(n ? e : t) : i
            }).getOr(i)
        },
        rd = function(e, r) {
            return e.fold(j(!0), function(e) {
                return n = r, !(ed(t = e) === ed(n) && Zf(t) === Zf(n));
                var t, n
            })
        },
        od = function(e, t) {
            return e ? t.fold(H(A.some, jf.start), A.none, H(A.some, jf.after), A.none) : t.fold(A.none, H(A.some, jf.before), A.none, H(A.some, jf.end))
        },
        id = function(a, u, s, c) {
            var e = El.normalizePosition(a, c),
                l = Qf(u, s, e);
            return Qf(u, s, e).bind(d(od, a)).orThunk(function() {
                return t = a, n = u, r = s, o = l, e = c, i = El.normalizePosition(t, e), ic.fromPosition(t, r, i).map(d(El.normalizePosition, t)).fold(function() {
                    return o.map(td)
                }, function(e) {
                    return Qf(n, r, e).map(d(nd, t, n, r, i, e)).filter(d(rd, o))
                }).filter(Jf);
                var t, n, r, o, e, i
            })
        },
        ad = Qf,
        ud = id,
        sd = (d(id, !1), d(id, !0), td),
        cd = function(e) {
            return e.fold(jf.start, jf.start, jf.end, jf.end)
        },
        ld = function(e) {
            return P(e.selection.getSel().modify)
        },
        fd = function(e, t, n) {
            var r = e ? 1 : -1;
            return t.setRng(hu(n.container(), n.offset() + r).toRange()), t.getSel().modify("move", e ? "forward" : "backward", "word"), !0
        },
        dd = function(e, t) {
            var n = t.selection.getRng(),
                r = e ? hu.fromRangeEnd(n) : hu.fromRangeStart(n);
            return !!ld(t) && (e && va(r) ? fd(!0, t.selection, r) : !(e || !ba(r)) && fd(!1, t.selection, r))
        },
        md = function(e, t) {
            var n = e.dom.createRng();
            n.setStart(t.container(), t.offset()), n.setEnd(t.container(), t.offset()), e.selection.setRng(n)
        },
        gd = function(e) {
            return !1 !== e.settings.inline_boundaries
        },
        pd = function(e, t) {
            e ? t.setAttribute("data-mce-selected", "inline-boundary") : t.removeAttribute("data-mce-selected")
        },
        hd = function(t, e, n) {
            return Vf(e, n).map(function(e) {
                return md(t, e), n
            })
        },
        vd = function(e, t, n) {
            return function() {
                return !!gd(t) && dd(e, t)
            }
        },
        bd = {
            move: function(a, u, s) {
                return function() {
                    return !!gd(a) && (t = a, n = u, e = s, r = t.getBody(), o = hu.fromRangeStart(t.selection.getRng()), i = d(El.isInlineTarget, t), ud(e, i, r, o).bind(function(e) {
                        return hd(t, n, e)
                    })).isSome();
                    var t, n, e, r, o, i
                }
            },
            moveNextWord: d(vd, !0),
            movePrevWord: d(vd, !1),
            setupSelectedState: function(a) {
                var u = Bi(null),
                    s = d(El.isInlineTarget, a);
                return a.on("NodeChange", function(e) {
                    var t, n, r, o, i;
                    gd(a) && (t = s, n = a.dom, r = e.parents, o = z(n.select('*[data-mce-selected="inline-boundary"]'), t), i = z(r, t), F(Z(o, i), d(pd, !1)), F(Z(i, o), d(pd, !0)), function(e, t) {
                        if (e.selection.isCollapsed() && !0 !== e.composing && t.get()) {
                            var n = hu.fromRangeStart(e.selection.getRng());
                            hu.isTextPosition(n) && !1 === El.isAtZwsp(n) && (md(e, Yu.removeAndReposition(t.get(), n)), t.set(null))
                        }
                    }(a, u), function(n, r, o, e) {
                        if (r.selection.isCollapsed()) {
                            var t = z(e, n);
                            F(t, function(e) {
                                var t = hu.fromRangeStart(r.selection.getRng());
                                ad(n, r.getBody(), t).bind(function(e) {
                                    return hd(r, o, e)
                                })
                            })
                        }
                    }(s, a, u, e.parents))
                }), u
            },
            setCaretPosition: md
        },
        yd = function(t, n) {
            return function(e) {
                return Vf(n, e).map(function(e) {
                    return bd.setCaretPosition(t, e), !0
                }).getOr(!1)
            }
        },
        Cd = function(r, o, i, a) {
            var u = r.getBody(),
                s = d(El.isInlineTarget, r);
            r.undoManager.ignore(function() {
                var e, t, n;
                r.selection.setRng((e = i, t = a, (n = document.createRange()).setStart(e.container(), e.offset()), n.setEnd(t.container(), t.offset()), n)), r.execCommand("Delete"), ad(s, u, hu.fromRangeStart(r.selection.getRng())).map(cd).map(yd(r, o))
            }), r.nodeChanged()
        },
        xd = function(n, r, i, o) {
            var e, t, a = (e = n.getBody(), t = o.container(), ps(t, e) || e),
                u = d(El.isInlineTarget, n),
                s = ad(u, a, o);
            return s.bind(function(e) {
                return i ? e.fold(j(A.some(cd(e))), A.none, j(A.some(sd(e))), A.none) : e.fold(A.none, j(A.some(sd(e))), A.none, j(A.some(cd(e))))
            }).map(yd(n, r)).getOrThunk(function() {
                var t = ic.navigate(i, a, o),
                    e = t.bind(function(e) {
                        return ad(u, a, e)
                    });
                return s.isSome() && e.isSome() ? El.findRootInline(u, a, o).map(function(e) {
                    return o = e, !!qa([ic.firstPositionIn(o), ic.lastPositionIn(o)], function(e, t) {
                        var n = El.normalizePosition(!0, e),
                            r = El.normalizePosition(!1, t);
                        return ic.nextPosition(o, n).map(function(e) {
                            return e.isEqual(r)
                        }).getOr(!0)
                    }).getOr(!0) && (Tf(n, i, rr.fromDom(e)), !0);
                    var o
                }).getOr(!1) : e.bind(function(e) {
                    return t.map(function(e) {
                        return i ? Cd(n, r, o, e) : Cd(n, r, e, o), !0
                    })
                }).getOr(!1)
            })
        },
        wd = function(e, t, n) {
            if (e.selection.isCollapsed() && !1 !== e.settings.inline_boundaries) {
                var r = hu.fromRangeStart(e.selection.getRng());
                return xd(e, t, n, r)
            }
            return !1
        },
        Nd = Er("start", "end"),
        Ed = Er("rng", "table", "cells"),
        Sd = nf([{
            removeTable: ["element"]
        }, {
            emptyCells: ["cells"]
        }]),
        kd = function(e, t) {
            return Xi(rr.fromDom(e), "td,th", t)
        },
        Td = function(e, t) {
            return Wi(e, "table", t)
        },
        Ad = function(e) {
            return !1 === Or(e.start(), e.end())
        },
        Rd = function(e, n) {
            return Td(e.start(), n).bind(function(t) {
                return Td(e.end(), n).bind(function(e) {
                    return Or(t, e) ? A.some(t) : A.none()
                })
            })
        },
        _d = function(e) {
            return Vi(e, "td,th")
        },
        Dd = function(r, e) {
            var t = kd(e.startContainer, r),
                n = kd(e.endContainer, r);
            return e.collapsed ? A.none() : qa([t, n], Nd).fold(function() {
                return t.fold(function() {
                    return n.bind(function(t) {
                        return Td(t, r).bind(function(e) {
                            return ee(_d(e)).map(function(e) {
                                return Nd(e, t)
                            })
                        })
                    })
                }, function(t) {
                    return Td(t, r).bind(function(e) {
                        return te(_d(e)).map(function(e) {
                            return Nd(t, e)
                        })
                    })
                })
            }, function(e) {
                return Bd(r, e) ? A.none() : (n = r, Td((t = e).start(), n).bind(function(e) {
                    return te(_d(e)).map(function(e) {
                        return Nd(t.start(), e)
                    })
                }));
                var t, n
            })
        },
        Bd = function(e, t) {
            return Rd(t, e).isSome()
        },
        Od = function(e, t) {
            var n, r, o, i, a = d(Or, e);
            return (n = t, r = a, o = kd(n.startContainer, r), i = kd(n.endContainer, r), qa([o, i], Nd).filter(Ad).filter(function(e) {
                return Bd(r, e)
            }).orThunk(function() {
                return Dd(r, n)
            })).bind(function(e) {
                return Rd(t = e, a).map(function(e) {
                    return Ed(t, e, _d(e))
                });
                var t
            })
        },
        Pd = function(e, t) {
            return K(e, function(e) {
                return Or(e, t)
            })
        },
        Ld = function(n) {
            return (r = n, qa([Pd(r.cells(), r.rng().start()), Pd(r.cells(), r.rng().end())], function(e, t) {
                return r.cells().slice(e, t + 1)
            })).map(function(e) {
                var t = n.cells();
                return e.length === t.length ? Sd.removeTable(n.table()) : Sd.emptyCells(e)
            });
            var r
        },
        Id = function(e, t) {
            return Od(e, t).bind(Ld)
        },
        Md = function(e) {
            var t = [];
            if (e)
                for (var n = 0; n < e.rangeCount; n++) t.push(e.getRangeAt(n));
            return t
        },
        Fd = Md,
        zd = function(e) {
            return G(e, function(e) {
                var t = Ua(e);
                return t ? [rr.fromDom(t)] : []
            })
        },
        Ud = function(e) {
            return 1 < Md(e).length
        },
        Vd = function(e) {
            return z(zd(e), bo)
        },
        Hd = function(e) {
            return Vi(e, "td[data-mce-selected],th[data-mce-selected]")
        },
        jd = function(e, t) {
            var n = Hd(t),
                r = Vd(e);
            return 0 < n.length ? n : r
        },
        qd = jd,
        $d = function(e) {
            return jd(Fd(e.selection.getSel()), rr.fromDom(e.getBody()))
        },
        Wd = function(e, t) {
            return F(t, Zc), e.selection.setCursorLocation(t[0].dom(), 0), !0
        },
        Kd = function(e, t) {
            return Tf(e, !1, t), !0
        },
        Xd = function(n, e, r, t) {
            return Gd(e, t).fold(function() {
                return t = n, Id(e, r).map(function(e) {
                    return e.fold(d(Kd, t), d(Wd, t))
                });
                var t
            }, function(e) {
                return Jd(n, e)
            }).getOr(!1)
        },
        Yd = function(e, t) {
            return V(Hl(t, e), bo)
        },
        Gd = function(e, t) {
            return V(Hl(t, e), function(e) {
                return "caption" === ur(e)
            })
        },
        Jd = function(e, t) {
            return Zc(t), e.selection.setCursorLocation(t.dom(), 0), A.some(!0)
        },
        Qd = function(u, s, c, l, f) {
            return ic.navigate(c, u.getBody(), f).bind(function(e) {
                return r = l, o = c, i = f, a = e, ic.firstPositionIn(r.dom()).bind(function(t) {
                    return ic.lastPositionIn(r.dom()).map(function(e) {
                        return o ? i.isEqual(t) && a.isEqual(e) : i.isEqual(e) && a.isEqual(t)
                    })
                }).getOr(!0) ? Jd(u, l) : (t = l, n = e, Gd(s, rr.fromDom(n.getNode())).map(function(e) {
                    return !1 === Or(e, t)
                }));
                var t, n, r, o, i, a
            }).or(A.some(!0))
        },
        Zd = function(a, u, s, e) {
            var c = hu.fromRangeStart(a.selection.getRng());
            return Yd(s, e).bind(function(e) {
                return Ol(e) ? Jd(a, e) : (t = a, n = s, r = u, o = e, i = c, ic.navigate(r, t.getBody(), i).bind(function(e) {
                    return Yd(n, rr.fromDom(e.getNode())).map(function(e) {
                        return !1 === Or(e, o)
                    })
                }));
                var t, n, r, o, i
            })
        },
        em = function(a, u, e) {
            var s = rr.fromDom(a.getBody());
            return Gd(s, e).fold(function() {
                return Zd(a, u, s, e)
            }, function(e) {
                return t = a, n = u, r = s, o = e, i = hu.fromRangeStart(t.selection.getRng()), Ol(o) ? Jd(t, o) : Qd(t, r, n, o, i);
                var t, n, r, o, i
            }).getOr(!1)
        },
        tm = function(e, t) {
            var n, r, o, i, a, u = rr.fromDom(e.selection.getStart(!0)),
                s = $d(e);
            return e.selection.isCollapsed() && 0 === s.length ? em(e, t, u) : (n = e, r = u, o = rr.fromDom(n.getBody()), i = n.selection.getRng(), 0 !== (a = $d(n)).length ? Wd(n, a) : Xd(n, o, i, r))
        },
        nm = function(e, t) {
            e.getDoc().execCommand(t, !1, null)
        },
        rm = function(e) {
            _f(e, !1) || wd(e, !1) || Jl(e, !1) || tm(e) || tf(e, !1) || (nm(e, "Delete"), kl(e))
        },
        om = function(e) {
            _f(e, !0) || wd(e, !0) || Jl(e, !0) || tm(e) || tf(e, !0) || nm(e, "ForwardDelete")
        },
        im = function(e, t, n) {
            var r = e.getParam(t, n);
            if (-1 !== r.indexOf("=")) {
                var o = e.getParam(t, "", "hash");
                return o.hasOwnProperty(e.id) ? o[e.id] : n
            }
            return r
        },
        am = function(e) {
            return e.getParam("iframe_attrs", {})
        },
        um = function(e) {
            return e.getParam("doctype", "<!DOCTYPE html>")
        },
        sm = function(e) {
            return e.getParam("document_base_url", "")
        },
        cm = function(e) {
            return im(e, "body_id", "tinymce")
        },
        lm = function(e) {
            return im(e, "body_class", "")
        },
        fm = function(e) {
            return e.getParam("content_security_policy", "")
        },
        dm = function(e) {
            return e.getParam("br_in_pre", !0)
        },
        mm = function(e) {
            if (e.getParam("force_p_newlines", !1)) return "p";
            var t = e.getParam("forced_root_block", "p");
            return !1 === t ? "" : t
        },
        gm = function(e) {
            return e.getParam("forced_root_block_attrs", {})
        },
        pm = function(e) {
            return e.getParam("br_newline_selector", ".mce-toc h2,figcaption,caption")
        },
        hm = function(e) {
            return e.getParam("no_newline_selector", "")
        },
        vm = function(e) {
            return e.getParam("keep_styles", !0)
        },
        bm = function(e) {
            return e.getParam("end_container_on_empty_block", !1)
        },
        ym = function(e) {
            return Yt.explode(e.getParam("font_size_style_values", ""))
        },
        Cm = function(e) {
            return Yt.explode(e.getParam("font_size_classes", ""))
        },
        xm = function(e) {
            return e.getParam("images_dataimg_filter", j(!0), "function")
        },
        wm = function(e) {
            return e.getParam("automatic_uploads", !0, "boolean")
        },
        Nm = function(e) {
            return e.getParam("images_reuse_filename", !1, "boolean")
        },
        Em = function(e) {
            return e.getParam("images_replace_blob_uris", !0, "boolean")
        },
        Sm = function(e) {
            return e.getParam("images_upload_url", "", "string")
        },
        km = function(e) {
            return e.getParam("images_upload_base_path", "", "string")
        },
        Tm = function(e) {
            return e.getParam("images_upload_credentials", !1, "boolean")
        },
        Am = function(e) {
            return e.getParam("images_upload_handler", null, "function")
        },
        Rm = function(e) {
            return e.getParam("content_css_cors", !1, "boolean")
        },
        _m = function(o, t, e) {
            var n = function(e) {
                return t = o, n = e.dom(), r = Nr(n, t), A.from(r).filter(function(e) {
                    return 0 < e.length
                });
                var t, n, r
            };
            return $i(rr.fromDom(e), function(e) {
                return n(e).isSome()
            }, function(e) {
                return Or(rr.fromDom(t), e)
            }).bind(n)
        },
        Dm = function(o) {
            return function(r, e) {
                return A.from(e).map(rr.fromDom).filter(cr).bind(function(e) {
                    return _m(o, r, e.dom()).or((t = o, n = e.dom(), A.from(gi.DOM.getStyle(n, t, !0))));
                    var t, n
                }).getOr("")
            }
        },
        Bm = {
            getFontSize: Dm("font-size"),
            getFontFamily: H(function(e) {
                return e.replace(/[\'\"\\]/g, "").replace(/,\s+/g, ",")
            }, Dm("font-family")),
            toPt: function(e, t) {
                return /[0-9.]+px$/.test(e) ? (n = 72 * parseInt(e, 10) / 96, r = t || 0, o = Math.pow(10, r), Math.round(n * o) / o + "pt") : e;
                var n, r, o
            }
        },
        Om = function(e) {
            return ic.firstPositionIn(e.getBody()).map(function(e) {
                var t = e.container();
                return _o.isText(t) ? t.parentNode : t
            })
        },
        Pm = function(o) {
            return A.from(o.selection.getRng()).bind(function(e) {
                var t, n, r = o.getBody();
                return n = r, (t = e).startContainer === n && 0 === t.startOffset ? A.none() : A.from(o.selection.getStart(!0))
            })
        },
        Lm = function(e, t) {
            if (/^[0-9\.]+$/.test(t)) {
                var n = parseInt(t, 10);
                if (1 <= n && n <= 7) {
                    var r = ym(e),
                        o = Cm(e);
                    return o ? o[n - 1] || t : r[n - 1] || t
                }
                return t
            }
            return t
        },
        Im = function(e, t) {
            return e && t && e.startContainer === t.startContainer && e.startOffset === t.startOffset && e.endContainer === t.endContainer && e.endOffset === t.endOffset
        },
        Mm = function(e, t, n) {
            return null !== function(e, t, n) {
                for (; e && e !== t;) {
                    if (n(e)) return e;
                    e = e.parentNode
                }
                return null
            }(e, t, n)
        },
        Fm = function(e, t, n) {
            return Mm(e, t, function(e) {
                return e.nodeName === n
            })
        },
        zm = function(e) {
            return e && "TABLE" === e.nodeName
        },
        Um = function(e, t, n) {
            for (var r = new ro(t, e.getParent(t.parentNode, e.isBlock) || e.getRoot()); t = r[n ? "prev" : "next"]();)
                if (_o.isBr(t)) return !0
        },
        Vm = function(e, t, n, r, o) {
            var i, a, u, s, c, l, f = e.getRoot(),
                d = e.schema.getNonEmptyElements();
            if (u = e.getParent(o.parentNode, e.isBlock) || f, r && _o.isBr(o) && t && e.isEmpty(u)) return A.some(du(o.parentNode, e.nodeIndex(o)));
            for (i = new ro(o, u); s = i[r ? "prev" : "next"]();) {
                if ("false" === e.getContentEditableParent(s) || (l = f, pa(c = s) && !1 === Mm(c, l, Fu))) return A.none();
                if (_o.isText(s) && 0 < s.nodeValue.length) return !1 === Fm(s, f, "A") ? A.some(du(s, r ? s.nodeValue.length : 0)) : A.none();
                if (e.isBlock(s) || d[s.nodeName.toLowerCase()]) return A.none();
                a = s
            }
            return n && a ? A.some(du(a, 0)) : A.none()
        },
        Hm = function(e, t, n, r) {
            var o, i, a, u, s, c, l, f, d, m, g = e.getRoot(),
                p = !1;
            if (o = r[(n ? "start" : "end") + "Container"], i = r[(n ? "start" : "end") + "Offset"], l = _o.isElement(o) && i === o.childNodes.length, s = e.schema.getNonEmptyElements(), c = n, pa(o)) return A.none();
            if (_o.isElement(o) && i > o.childNodes.length - 1 && (c = !1), _o.isDocument(o) && (o = g, i = 0), o === g) {
                if (c && (u = o.childNodes[0 < i ? i - 1 : 0])) {
                    if (pa(u)) return A.none();
                    if (s[u.nodeName] || zm(u)) return A.none()
                }
                if (o.hasChildNodes()) {
                    if (i = Math.min(!c && 0 < i ? i - 1 : i, o.childNodes.length - 1), o = o.childNodes[i], i = _o.isText(o) && l ? o.data.length : 0, !t && o === g.lastChild && zm(o)) return A.none();
                    if (function(e, t) {
                        for (; t && t !== e;) {
                            if (_o.isContentEditableFalse(t)) return !0;
                            t = t.parentNode
                        }
                        return !1
                    }(g, o) || pa(o)) return A.none();
                    if (o.hasChildNodes() && !1 === zm(o)) {
                        a = new ro(u = o, g);
                        do {
                            if (_o.isContentEditableFalse(u) || pa(u)) {
                                p = !1;
                                break
                            }
                            if (_o.isText(u) && 0 < u.nodeValue.length) {
                                i = c ? 0 : u.nodeValue.length, o = u, p = !0;
                                break
                            }
                            if (s[u.nodeName.toLowerCase()] && (!(f = u) || !/^(TD|TH|CAPTION)$/.test(f.nodeName))) {
                                i = e.nodeIndex(u), o = u.parentNode, c || i++, p = !0;
                                break
                            }
                        } while (u = c ? a.next() : a.prev())
                    }
                }
            }
            return t && (_o.isText(o) && 0 === i && Vm(e, l, t, !0, o).each(function(e) {
                o = e.container(), i = e.offset(), p = !0
            }), _o.isElement(o) && ((u = o.childNodes[i]) || (u = o.childNodes[i - 1]), !u || !_o.isBr(u) || (m = "A", (d = u).previousSibling && d.previousSibling.nodeName === m) || Um(e, u, !1) || Um(e, u, !0) || Vm(e, l, t, !0, u).each(function(e) {
                o = e.container(), i = e.offset(), p = !0
            }))), c && !t && _o.isText(o) && i === o.nodeValue.length && Vm(e, l, t, !1, o).each(function(e) {
                o = e.container(), i = e.offset(), p = !0
            }), p ? A.some(du(o, i)) : A.none()
        },
        jm = function(e, t) {
            var n = t.collapsed,
                r = t.cloneRange(),
                o = du.fromRangeStart(t);
            return Hm(e, n, !0, r).each(function(e) {
                n && du.isAbove(o, e) || r.setStart(e.container(), e.offset())
            }), n || Hm(e, n, !1, r).each(function(e) {
                r.setEnd(e.container(), e.offset())
            }), n && r.collapse(!0), Im(t, r) ? A.none() : A.some(r)
        },
        qm = function(e, t, n) {
            var r = e.create("span", {}, "&nbsp;");
            n.parentNode.insertBefore(r, n), t.scrollIntoView(r), e.remove(r)
        },
        $m = function(e, t, n, r) {
            var o = e.createRng();
            r ? (o.setStartBefore(n), o.setEndBefore(n)) : (o.setStartAfter(n), o.setEndAfter(n)), t.setRng(o)
        },
        Wm = function(e, t) {
            var n, r, o = e.selection,
                i = e.dom,
                a = o.getRng();
            jm(i, a).each(function(e) {
                a.setStart(e.startContainer, e.startOffset), a.setEnd(e.endContainer, e.endOffset)
            });
            var u = a.startOffset,
                s = a.startContainer;
            if (1 === s.nodeType && s.hasChildNodes()) {
                var c = u > s.childNodes.length - 1;
                s = s.childNodes[Math.min(u, s.childNodes.length - 1)] || s, u = c && 3 === s.nodeType ? s.nodeValue.length : 0
            }
            var l = i.getParent(s, i.isBlock),
                f = l ? i.getParent(l.parentNode, i.isBlock) : null,
                d = f ? f.nodeName.toUpperCase() : "",
                m = t && t.ctrlKey;
            "LI" !== d || m || (l = f), s && 3 === s.nodeType && u >= s.nodeValue.length && (function(e, t, n) {
                for (var r, o = new ro(t, n), i = e.getNonEmptyElements(); r = o.next();)
                    if (i[r.nodeName.toLowerCase()] || 0 < r.length) return !0
            }(e.schema, s, l) || (n = i.create("br"), a.insertNode(n), a.setStartAfter(n), a.setEndAfter(n), r = !0)), n = i.create("br"), a.insertNode(n), qm(i, o, n), $m(i, o, n, r), e.undoManager.add()
        },
        Km = function(e, t) {
            var n = rr.fromTag("br");
            Ni(rr.fromDom(t), n), e.undoManager.add()
        },
        Xm = function(e, t) {
            Ym(e.getBody(), t) || Ei(rr.fromDom(t), rr.fromTag("br"));
            var n = rr.fromTag("br");
            Ei(rr.fromDom(t), n), qm(e.dom, e.selection, n.dom()), $m(e.dom, e.selection, n.dom(), !1), e.undoManager.add()
        },
        Ym = function(e, t) {
            return n = hu.after(t), !!_o.isBr(n.getNode()) || ic.nextPosition(e, hu.after(t)).map(function(e) {
                return _o.isBr(e.getNode())
            }).getOr(!1);
            var n
        },
        Gm = function(e) {
            return e && "A" === e.nodeName && "href" in e
        },
        Jm = function(e) {
            return e.fold(j(!1), Gm, Gm, j(!1))
        },
        Qm = function(e, t) {
            t.fold(o, d(Km, e), d(Xm, e), o)
        },
        Zm = function(e, t) {
            var n, r, o, i = (n = e, r = d(El.isInlineTarget, n), o = hu.fromRangeStart(n.selection.getRng()), ad(r, n.getBody(), o).filter(Jm));
            i.isSome() ? i.each(d(Qm, e)) : Wm(e, t)
        },
        eg = (nf([{
            before: ["element"]
        }, {
            on: ["element", "offset"]
        }, {
            after: ["element"]
        }]), nf([{
            domRange: ["rng"]
        }, {
            relative: ["startSitu", "finishSitu"]
        }, {
            exact: ["start", "soffset", "finish", "foffset"]
        }])),
        tg = Er("start", "soffset", "finish", "foffset"),
        ng = (eg.domRange, eg.relative, eg.exact, tr.detect().browser),
        rg = function(e, t) {
            var n = lr(t) ? Lc(t).length : Vr(t).length + 1;
            return n < e ? n : e < 0 ? 0 : e
        },
        og = function(e) {
            return tg(e.start(), rg(e.soffset(), e.start()), e.finish(), rg(e.foffset(), e.finish()))
        },
        ig = function(e, t) {
            return Pr(e, t) || Or(e, t)
        },
        ag = function(t) {
            return function(e) {
                return ig(t, e.start()) && ig(t, e.finish())
            }
        },
        ug = function(e) {
            return !0 === e.inline || ng.isIE()
        },
        sg = function(e) {
            return tg(rr.fromDom(e.startContainer), e.startOffset, rr.fromDom(e.endContainer), e.endOffset)
        },
        cg = function(e) {
            var t = e.getSelection();
            return (t && 0 !== t.rangeCount ? A.from(t.getRangeAt(0)) : A.none()).map(sg)
        },
        lg = function(e) {
            var t, n = (t = e.dom().ownerDocument.defaultView, rr.fromDom(t));
            return cg(n.dom()).filter(ag(e))
        },
        fg = function(e, t) {
            return A.from(t).filter(ag(e)).map(og)
        },
        dg = function(e) {
            var t = document.createRange();
            try {
                return t.setStart(e.start().dom(), e.soffset()), t.setEnd(e.finish().dom(), e.foffset()), A.some(t)
            } catch (n) {
                return A.none()
            }
        },
        mg = function(e) {
            return (e.bookmark ? e.bookmark : A.none()).bind(d(fg, rr.fromDom(e.getBody()))).bind(dg)
        },
        gg = function(e) {
            var t = ug(e) ? lg(rr.fromDom(e.getBody())) : A.none();
            e.bookmark = t.isSome() ? t : e.bookmark
        },
        pg = function(t) {
            mg(t).each(function(e) {
                t.selection.setRng(e)
            })
        },
        hg = mg,
        vg = function(e) {
            return go(e) || po(e)
        },
        bg = function(e) {
            return z($(e.selection.getSelectedBlocks(), rr.fromDom), function(e) {
                return !vg(e) && !Ir(e).map(vg).getOr(!1)
            })
        },
        yg = function(e, t) {
            var n = e.settings,
                r = e.dom,
                o = e.selection,
                i = e.formatter,
                a = /[a-z%]+$/i.exec(n.indentation)[0],
                u = parseInt(n.indentation, 10),
                s = e.getParam("indent_use_margin", !1);
            e.queryCommandState("InsertUnorderedList") || e.queryCommandState("InsertOrderedList") || n.forced_root_block || r.getParent(o.getNode(), r.isBlock) || i.apply("div"), F(bg(e), function(e) {
                ! function(e, t, n, r, o, i) {
                    if ("false" !== e.getContentEditable(i)) {
                        var a = n ? "margin" : "padding";
                        if (a = "TABLE" === i.nodeName ? "margin" : a, a += "rtl" === e.getStyle(i, "direction", !0) ? "Right" : "Left", "outdent" === t) {
                            var u = Math.max(0, parseInt(i.style[a] || 0, 10) - r);
                            e.setStyle(i, a, u ? u + o : "")
                        } else u = parseInt(i.style[a] || 0, 10) + r + o, e.setStyle(i, a, u)
                    }
                }(r, t, s, u, a, e.dom())
            })
        },
        Cg = Yt.each,
        xg = Yt.extend,
        wg = Yt.map,
        Ng = Yt.inArray;

    function Eg(s) {
        var o, i, a, t, c = {
                state: {},
                exec: {},
                value: {}
            },
            n = s.settings;
        s.on("PreInit", function() {
            o = s.dom, i = s.selection, n = s.settings, a = s.formatter
        });
        var r = function(e) {
                var t;
                if (!s.quirks.isHidden() && !s.removed) {
                    if (e = e.toLowerCase(), t = c.state[e]) return t(e);
                    try {
                        return s.getDoc().queryCommandState(e)
                    } catch (n) {}
                    return !1
                }
            },
            e = function(e, n) {
                n = n || "exec", Cg(e, function(t, e) {
                    Cg(e.toLowerCase().split(","), function(e) {
                        c[n][e] = t
                    })
                })
            },
            u = function(e, t, n) {
                e = e.toLowerCase(), c.value[e] = function() {
                    return t.call(n || s)
                }
            };
        xg(this, {
            execCommand: function(t, n, r, e) {
                var o, i, a = !1;
                if (!s.removed) {
                    if (/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(t) || e && e.skip_focus ? pg(s) : s.focus(), (e = s.fire("BeforeExecCommand", {
                        command: t,
                        ui: n,
                        value: r
                    })).isDefaultPrevented()) return !1;
                    if (i = t.toLowerCase(), o = c.exec[i]) return o(i, n, r), s.fire("ExecCommand", {
                        command: t,
                        ui: n,
                        value: r
                    }), !0;
                    if (Cg(s.plugins, function(e) {
                        if (e.execCommand && e.execCommand(t, n, r)) return s.fire("ExecCommand", {
                            command: t,
                            ui: n,
                            value: r
                        }), !(a = !0)
                    }), a) return a;
                    if (s.theme && s.theme.execCommand && s.theme.execCommand(t, n, r)) return s.fire("ExecCommand", {
                        command: t,
                        ui: n,
                        value: r
                    }), !0;
                    try {
                        a = s.getDoc().execCommand(t, n, r)
                    } catch (u) {}
                    return !!a && (s.fire("ExecCommand", {
                        command: t,
                        ui: n,
                        value: r
                    }), !0)
                }
            },
            queryCommandState: r,
            queryCommandValue: function(e) {
                var t;
                if (!s.quirks.isHidden() && !s.removed) {
                    if (e = e.toLowerCase(), t = c.value[e]) return t(e);
                    try {
                        return s.getDoc().queryCommandValue(e)
                    } catch (n) {}
                }
            },
            queryCommandSupported: function(e) {
                if (e = e.toLowerCase(), c.exec[e]) return !0;
                try {
                    return s.getDoc().queryCommandSupported(e)
                } catch (t) {}
                return !1
            },
            addCommands: e,
            addCommand: function(e, o, i) {
                e = e.toLowerCase(), c.exec[e] = function(e, t, n, r) {
                    return o.call(i || s, t, n, r)
                }
            },
            addQueryStateHandler: function(e, t, n) {
                e = e.toLowerCase(), c.state[e] = function() {
                    return t.call(n || s)
                }
            },
            addQueryValueHandler: u,
            hasCustomCommand: function(e) {
                return e = e.toLowerCase(), !!c.exec[e]
            }
        });
        var l = function(e, t, n) {
                return t === undefined && (t = !1), n === undefined && (n = null), s.getDoc().execCommand(e, t, n)
            },
            f = function(e) {
                return a.match(e)
            },
            d = function(e, t) {
                a.toggle(e, t ? {
                    value: t
                } : undefined), s.nodeChanged()
            },
            m = function(e) {
                t = i.getBookmark(e)
            },
            g = function() {
                i.moveToBookmark(t)
            };
        e({
            "mceResetDesignMode,mceBeginUndoLevel": function() {},
            "mceEndUndoLevel,mceAddUndoLevel": function() {
                s.undoManager.add()
            },
            "Cut,Copy,Paste": function(e) {
                var t, n = s.getDoc();
                try {
                    l(e)
                } catch (o) {
                    t = !0
                }
                if ("paste" !== e || n.queryCommandEnabled(e) || (t = !0), t || !n.queryCommandSupported(e)) {
                    var r = s.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.");
                    de.mac && (r = r.replace(/Ctrl\+/g, "\u2318+")), s.notificationManager.open({
                        text: r,
                        type: "error"
                    })
                }
            },
            unlink: function() {
                if (i.isCollapsed()) {
                    var e = s.dom.getParent(s.selection.getStart(), "a");
                    e && s.dom.remove(e, !0)
                } else a.remove("link")
            },
            "JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone": function(e) {
                var t = e.substring(7);
                "full" === t && (t = "justify"), Cg("left,center,right,justify".split(","), function(e) {
                    t !== e && a.remove("align" + e)
                }), "none" !== t && d("align" + t)
            },
            "InsertUnorderedList,InsertOrderedList": function(e) {
                var t, n;
                l(e), (t = o.getParent(i.getNode(), "ol,ul")) && (n = t.parentNode, /^(H[1-6]|P|ADDRESS|PRE)$/.test(n.nodeName) && (m(), o.split(n, t), g()))
            },
            "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function(e) {
                d(e)
            },
            "ForeColor,HiliteColor": function(e, t, n) {
                d(e, n)
            },
            FontName: function(e, t, n) {
                var r, o;
                o = n, (r = s).formatter.toggle("fontname", {
                    value: Lm(r, o)
                }), r.nodeChanged()
            },
            FontSize: function(e, t, n) {
                var r, o;
                o = n, (r = s).formatter.toggle("fontsize", {
                    value: Lm(r, o)
                }), r.nodeChanged()
            },
            RemoveFormat: function(e) {
                a.remove(e)
            },
            mceBlockQuote: function() {
                d("blockquote")
            },
            FormatBlock: function(e, t, n) {
                return d(n || "p")
            },
            mceCleanup: function() {
                var e = i.getBookmark();
                s.setContent(s.getContent()), i.moveToBookmark(e)
            },
            mceRemoveNode: function(e, t, n) {
                var r = n || i.getNode();
                r !== s.getBody() && (m(), s.dom.remove(r, !0), g())
            },
            mceSelectNodeDepth: function(e, t, n) {
                var r = 0;
                o.getParent(i.getNode(), function(e) {
                    if (1 === e.nodeType && r++ === n) return i.select(e), !1
                }, s.getBody())
            },
            mceSelectNode: function(e, t, n) {
                i.select(n)
            },
            mceInsertContent: function(e, t, n) {
                cl(s, n)
            },
            mceInsertRawHTML: function(e, t, n) {
                i.setContent("tiny_mce_marker");
                var r = s.getContent();
                s.setContent(r.replace(/tiny_mce_marker/g, function() {
                    return n
                }))
            },
            mceToggleFormat: function(e, t, n) {
                d(n)
            },
            mceSetContent: function(e, t, n) {
                s.setContent(n)
            },
            "Indent,Outdent": function(e) {
                yg(s, e)
            },
            mceRepaint: function() {},
            InsertHorizontalRule: function() {
                s.execCommand("mceInsertContent", !1, "<hr />")
            },
            mceToggleVisualAid: function() {
                s.hasVisual = !s.hasVisual, s.addVisual()
            },
            mceReplaceContent: function(e, t, n) {
                s.execCommand("mceInsertContent", !1, n.replace(/\{\$selection\}/g, i.getContent({
                    format: "text"
                })))
            },
            mceInsertLink: function(e, t, n) {
                var r;
                "string" == typeof n && (n = {
                    href: n
                }), r = o.getParent(i.getNode(), "a"), n.href = n.href.replace(" ", "%20"), r && n.href || a.remove("link"), n.href && a.apply("link", n, r)
            },
            selectAll: function() {
                var e = o.getParent(i.getStart(), _o.isContentEditableTrue);
                if (e) {
                    var t = o.createRng();
                    t.selectNodeContents(e), i.setRng(t)
                }
            },
            "delete": function() {
                rm(s)
            },
            forwardDelete: function() {
                om(s)
            },
            mceNewDocument: function() {
                s.setContent("")
            },
            InsertLineBreak: function(e, t, n) {
                return Zm(s, n), !0
            }
        });
        var p = function(n) {
            return function() {
                var e = i.isCollapsed() ? [o.getParent(i.getNode(), o.isBlock)] : i.getSelectedBlocks(),
                    t = wg(e, function(e) {
                        return !!a.matchNode(e, n)
                    });
                return -1 !== Ng(t, !0)
            }
        };
        e({
            JustifyLeft: p("alignleft"),
            JustifyCenter: p("aligncenter"),
            JustifyRight: p("alignright"),
            JustifyFull: p("alignjustify"),
            "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function(e) {
                return f(e)
            },
            mceBlockQuote: function() {
                return f("blockquote")
            },
            Outdent: function() {
                var e;
                if (n.inline_styles) {
                    if ((e = o.getParent(i.getStart(), o.isBlock)) && 0 < parseInt(e.style.paddingLeft, 10)) return !0;
                    if ((e = o.getParent(i.getEnd(), o.isBlock)) && 0 < parseInt(e.style.paddingLeft, 10)) return !0
                }
                return r("InsertUnorderedList") || r("InsertOrderedList") || !n.inline_styles && !!o.getParent(i.getNode(), "BLOCKQUOTE")
            },
            "InsertUnorderedList,InsertOrderedList": function(e) {
                var t = o.getParent(i.getNode(), "ul,ol");
                return t && ("insertunorderedlist" === e && "UL" === t.tagName || "insertorderedlist" === e && "OL" === t.tagName)
            }
        }, "state"), e({
            Undo: function() {
                s.undoManager.undo()
            },
            Redo: function() {
                s.undoManager.redo()
            }
        }), u("FontName", function() {
            return Pm(t = s).fold(function() {
                return Om(t).map(function(e) {
                    return Bm.getFontFamily(t.getBody(), e)
                }).getOr("")
            }, function(e) {
                return Bm.getFontFamily(t.getBody(), e)
            });
            var t
        }, this), u("FontSize", function() {
            return Pm(t = s).fold(function() {
                return Om(t).map(function(e) {
                    return Bm.getFontSize(t.getBody(), e)
                }).getOr("")
            }, function(e) {
                return Bm.getFontSize(t.getBody(), e)
            });
            var t
        }, this)
    }
    var Sg = Yt.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend", " "),
        kg = function(a) {
            var u, s, c = this,
                l = {},
                f = function() {
                    return !1
                },
                d = function() {
                    return !0
                };
            u = (a = a || {}).scope || c, s = a.toggleEvent || f;
            var r = function(e, t, n, r) {
                    var o, i, a;
                    if (!1 === t && (t = f), t)
                        for (t = {
                            func: t
                        }, r && Yt.extend(t, r), a = (i = e.toLowerCase().split(" ")).length; a--;) e = i[a], (o = l[e]) || (o = l[e] = [], s(e, !0)), n ? o.unshift(t) : o.push(t);
                    return c
                },
                m = function(e, t) {
                    var n, r, o, i, a;
                    if (e)
                        for (n = (i = e.toLowerCase().split(" ")).length; n--;) {
                            if (e = i[n], r = l[e], !e) {
                                for (o in l) s(o, !1), delete l[o];
                                return c
                            }
                            if (r) {
                                if (t)
                                    for (a = r.length; a--;) r[a].func === t && (r = r.slice(0, a).concat(r.slice(a + 1)), l[e] = r);
                                else r.length = 0;
                                r.length || (s(e, !1), delete l[e])
                            }
                        } else {
                        for (e in l) s(e, !1);
                        l = {}
                    }
                    return c
                };
            c.fire = function(e, t) {
                var n, r, o, i;
                if (e = e.toLowerCase(), (t = t || {}).type = e, t.target || (t.target = u), t.preventDefault || (t.preventDefault = function() {
                    t.isDefaultPrevented = d
                }, t.stopPropagation = function() {
                    t.isPropagationStopped = d
                }, t.stopImmediatePropagation = function() {
                    t.isImmediatePropagationStopped = d
                }, t.isDefaultPrevented = f, t.isPropagationStopped = f, t.isImmediatePropagationStopped = f), a.beforeFire && a.beforeFire(t), n = l[e])
                    for (r = 0, o = n.length; r < o; r++) {
                        if ((i = n[r]).once && m(e, i.func), t.isImmediatePropagationStopped()) return t.stopPropagation(), t;
                        if (!1 === i.func.call(u, t)) return t.preventDefault(), t
                    }
                return t
            }, c.on = r, c.off = m, c.once = function(e, t, n) {
                return r(e, t, n, {
                    once: !0
                })
            }, c.has = function(e) {
                return e = e.toLowerCase(), !(!l[e] || 0 === l[e].length)
            }
        };
    kg.isNative = function(e) {
        return !!Sg[e.toLowerCase()]
    };
    var Tg, Ag = function(n) {
            return n._eventDispatcher || (n._eventDispatcher = new kg({
                scope: n,
                toggleEvent: function(e, t) {
                    kg.isNative(e) && n.toggleNativeEvent && n.toggleNativeEvent(e, t)
                }
            })), n._eventDispatcher
        },
        Rg = {
            fire: function(e, t, n) {
                if (this.removed && "remove" !== e) return t;
                if (t = Ag(this).fire(e, t, n), !1 !== n && this.parent)
                    for (var r = this.parent(); r && !t.isPropagationStopped();) r.fire(e, t, !1), r = r.parent();
                return t
            },
            on: function(e, t, n) {
                return Ag(this).on(e, t, n)
            },
            off: function(e, t) {
                return Ag(this).off(e, t)
            },
            once: function(e, t) {
                return Ag(this).once(e, t)
            },
            hasEventListeners: function(e) {
                return Ag(this).has(e)
            }
        },
        _g = function(e, t) {
            return e.fire("PreProcess", t)
        },
        Dg = function(e, t) {
            return e.fire("PostProcess", t)
        },
        Bg = function(e) {
            return e.fire("remove")
        },
        Og = function(e, t) {
            return e.fire("SwitchMode", {
                mode: t
            })
        },
        Pg = function(e, t, n, r) {
            e.fire("ObjectResizeStart", {
                target: t,
                width: n,
                height: r
            })
        },
        Lg = function(e, t, n, r) {
            e.fire("ObjectResized", {
                target: t,
                width: n,
                height: r
            })
        },
        Ig = function(e, t, n) {
            try {
                e.getDoc().execCommand(t, !1, n)
            } catch (r) {}
        },
        Mg = function(e, t, n) {
            var r, o;
            zi(e, t) && !1 === n ? (o = t, Pi(r = e) ? r.dom().classList.remove(o) : Ii(r, o), Fi(r)) : n && Mi(e, t)
        },
        Fg = function(e, t) {
            Mg(rr.fromDom(e.getBody()), "mce-content-readonly", t), t ? (e.selection.controlSelection.hideResizeRect(), e.readonly = !0, e.getBody().contentEditable = "false") : (e.readonly = !1, e.getBody().contentEditable = "true", Ig(e, "StyleWithCSS", !1), Ig(e, "enableInlineTableEditing", !1), Ig(e, "enableObjectResizing", !1), e.focus(), e.nodeChanged())
        },
        zg = function(e) {
            return e.readonly ? "readonly" : "design"
        },
        Ug = gi.DOM,
        Vg = function(e, t) {
            return "selectionchange" === t ? e.getDoc() : !e.inline && /^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t) ? e.getDoc().documentElement : e.settings.event_root ? (e.eventRoot || (e.eventRoot = Ug.select(e.settings.event_root)[0]), e.eventRoot) : e.getBody()
        },
        Hg = function(e, t, n) {
            var r;
            (r = e).hidden || r.readonly ? !0 === e.readonly && n.preventDefault() : e.fire(t, n)
        },
        jg = function(i, a) {
            var e, t;
            if (i.delegates || (i.delegates = {}), !i.delegates[a] && !i.removed)
                if (e = Vg(i, a), i.settings.event_root) {
                    if (Tg || (Tg = {}, i.editorManager.on("removeEditor", function() {
                        var e;
                        if (!i.editorManager.activeEditor && Tg) {
                            for (e in Tg) i.dom.unbind(Vg(i, e));
                            Tg = null
                        }
                    })), Tg[a]) return;
                    t = function(e) {
                        for (var t = e.target, n = i.editorManager.get(), r = n.length; r--;) {
                            var o = n[r].getBody();
                            (o === t || Ug.isChildOf(t, o)) && Hg(n[r], a, e)
                        }
                    }, Tg[a] = t, Ug.bind(e, a, t)
                } else t = function(e) {
                    Hg(i, a, e)
                }, Ug.bind(e, a, t), i.delegates[a] = t
        },
        qg = {
            bindPendingEventDelegates: function() {
                var t = this;
                Yt.each(t._pendingNativeEvents, function(e) {
                    jg(t, e)
                })
            },
            toggleNativeEvent: function(e, t) {
                var n = this;
                "focus" !== e && "blur" !== e && (t ? n.initialized ? jg(n, e) : n._pendingNativeEvents ? n._pendingNativeEvents.push(e) : n._pendingNativeEvents = [e] : n.initialized && (n.dom.unbind(Vg(n, e), e, n.delegates[e]), delete n.delegates[e]))
            },
            unbindAllNativeEvents: function() {
                var e, t = this,
                    n = t.getBody(),
                    r = t.dom;
                if (t.delegates) {
                    for (e in t.delegates) t.dom.unbind(Vg(t, e), e, t.delegates[e]);
                    delete t.delegates
                }!t.inline && n && r && (n.onload = null, r.unbind(t.getWin()), r.unbind(t.getDoc())), r && (r.unbind(n), r.unbind(t.getContainer()))
            }
        },
        $g = qg = Yt.extend({}, Rg, qg),
        Wg = Yt.each,
        Kg = Yt.explode,
        Xg = {
            f9: 120,
            f10: 121,
            f11: 122
        },
        Yg = Yt.makeMap("alt,ctrl,shift,meta,access");

    function Gg(i) {
        var a = {},
            r = [],
            u = function(e) {
                var t, n, r = {};
                for (n in Wg(Kg(e, "+"), function(e) {
                    e in Yg ? r[e] = !0 : /^[0-9]{2,}$/.test(e) ? r.keyCode = parseInt(e, 10) : (r.charCode = e.charCodeAt(0), r.keyCode = Xg[e] || e.toUpperCase().charCodeAt(0))
                }), t = [r.keyCode], Yg) r[n] ? t.push(n) : r[n] = !1;
                return r.id = t.join(","), r.access && (r.alt = !0, de.mac ? r.ctrl = !0 : r.shift = !0), r.meta && (de.mac ? r.meta = !0 : (r.ctrl = !0, r.meta = !1)), r
            },
            s = function(e, t, n, r) {
                var o;
                return (o = Yt.map(Kg(e, ">"), u))[o.length - 1] = Yt.extend(o[o.length - 1], {
                    func: n,
                    scope: r || i
                }), Yt.extend(o[0], {
                    desc: i.translate(t),
                    subpatterns: o.slice(1)
                })
            },
            o = function(e, t) {
                return !!t && t.ctrl === e.ctrlKey && t.meta === e.metaKey && t.alt === e.altKey && t.shift === e.shiftKey && !!(e.keyCode === t.keyCode || e.charCode && e.charCode === t.charCode) && (e.preventDefault(), !0)
            },
            c = function(e) {
                return e.func ? e.func.call(e.scope) : null
            };
        i.on("keyup keypress keydown", function(t) {
            var e, n;
            ((n = t).altKey || n.ctrlKey || n.metaKey || "keydown" === (e = t).type && 112 <= e.keyCode && e.keyCode <= 123) && !t.isDefaultPrevented() && (Wg(a, function(e) {
                if (o(t, e)) return r = e.subpatterns.slice(0), "keydown" === t.type && c(e), !0
            }), o(t, r[0]) && (1 === r.length && "keydown" === t.type && c(r[0]), r.shift()))
        }), this.add = function(e, n, r, o) {
            var t;
            return "string" == typeof(t = r) ? r = function() {
                i.execCommand(t, !1, null)
            } : Yt.isArray(t) && (r = function() {
                i.execCommand(t[0], t[1], t[2])
            }), Wg(Kg(Yt.trim(e.toLowerCase())), function(e) {
                var t = s(e, n, r, o);
                a[t.id] = t
            }), !0
        }, this.remove = function(e) {
            var t = s(e);
            return !!a[t.id] && (delete a[t.id], !0)
        }
    }
    var Jg = function(e) {
            var t = Lr(e).dom();
            return e.dom() === t.activeElement
        },
        Qg = function(t) {
            return (e = Lr(t), n = e !== undefined ? e.dom() : document, A.from(n.activeElement).map(rr.fromDom)).filter(function(e) {
                return t.dom().contains(e.dom())
            });
            var e, n
        },
        Zg = function(t, e) {
            return (n = e, n.collapsed ? A.from(Va(n.startContainer, n.startOffset)).map(rr.fromDom) : A.none()).bind(function(e) {
                return vo(e) ? A.some(e) : !1 === Pr(t, e) ? A.some(t) : A.none()
            });
            var n
        },
        ep = function(t, e) {
            Zg(rr.fromDom(t.getBody()), e).bind(function(e) {
                return ic.firstPositionIn(e.dom())
            }).fold(function() {
                t.selection.normalize()
            }, function(e) {
                return t.selection.setRng(e.toRange())
            })
        },
        tp = function(e) {
            if (e.setActive) try {
                e.setActive()
            } catch (t) {
                e.focus()
            } else e.focus()
        },
        np = function(e) {
            var t, n = e.getBody();
            return n && (t = rr.fromDom(n), Jg(t) || Qg(t).isSome())
        },
        rp = function(e) {
            return e.inline ? np(e) : (t = e).iframeElement && Jg(rr.fromDom(t.iframeElement));
            var t
        },
        op = function(e) {
            return e.editorManager.setActive(e)
        },
        ip = function(e, t) {
            e.removed || (t ? op(e) : function(t) {
                var e = t.selection,
                    n = t.settings.content_editable,
                    r = t.getBody(),
                    o = e.getRng();
                t.quirks.refreshContentEditable();
                var i, a, u = (i = t, a = e.getNode(), i.dom.getParent(a, function(e) {
                    return "true" === i.dom.getContentEditable(e)
                }));
                if (t.$.contains(r, u)) return tp(u), ep(t, o), op(t);
                t.bookmark !== undefined && !1 === rp(t) && hg(t).each(function(e) {
                    t.selection.setRng(e), o = e
                }), n || (de.opera || tp(r), t.getWin().focus()), (de.gecko || n) && (tp(r), ep(t, o)), op(t)
            }(e))
        },
        ap = rp,
        up = function(e, t) {
            return t.dom()[e]
        },
        sp = function(e, t) {
            return parseInt(wr(t, e), 10)
        },
        cp = d(up, "clientWidth"),
        lp = d(up, "clientHeight"),
        fp = d(sp, "margin-top"),
        dp = d(sp, "margin-left"),
        mp = function(e, t, n) {
            var r, o, i, a, u, s, c, l, f, d, m, g = rr.fromDom(e.getBody()),
                p = e.inline ? g : (r = g, rr.fromDom(r.dom().ownerDocument.documentElement)),
                h = (o = e.inline, a = t, u = n, s = (i = p).dom().getBoundingClientRect(), {
                    x: a - (o ? s.left + i.dom().clientLeft + dp(i) : 0),
                    y: u - (o ? s.top + i.dom().clientTop + fp(i) : 0)
                });
            return l = h.x, f = h.y, d = cp(c = p), m = lp(c), 0 <= l && 0 <= f && l <= d && f <= m
        },
        gp = function(e) {
            var t, n = e.inline ? e.getBody() : e.getContentAreaContainer();
            return (t = n, A.from(t).map(rr.fromDom)).map(function(e) {
                return Pr(Lr(e), e)
            }).getOr(!1)
        };

    function pp(n) {
        var t, o = [],
            i = function() {
                var e, t = n.theme;
                return t && t.getNotificationManagerImpl ? t.getNotificationManagerImpl() : {
                    open: e = function() {
                        throw new Error("Theme did not provide a NotificationManager implementation.")
                    },
                    close: e,
                    reposition: e,
                    getArgs: e
                }
            },
            a = function() {
                0 < o.length && i().reposition(o)
            },
            u = function(t) {
                K(o, function(e) {
                    return e === t
                }).each(function(e) {
                    o.splice(e, 1)
                })
            },
            r = function(r) {
                if (!n.removed && gp(n)) return V(o, function(e) {
                    return t = i().getArgs(e), n = r, !(t.type !== n.type || t.text !== n.text || t.progressBar || t.timeout || n.progressBar || n.timeout);
                    var t, n
                }).getOrThunk(function() {
                    n.editorManager.setActive(n);
                    var e, t = i().open(r, function() {
                        u(t), a()
                    });
                    return e = t, o.push(e), a(), t
                })
            };
        return (t = n).on("SkinLoaded", function() {
            var e = t.settings.service_message;
            e && r({
                text: e,
                type: "warning",
                timeout: 0,
                icon: ""
            })
        }), t.on("ResizeEditor ResizeWindow", function() {
            ve.requestAnimationFrame(a)
        }), t.on("remove", function() {
            F(o.slice(), function(e) {
                i().close(e)
            })
        }), {
            open: r,
            close: function() {
                A.from(o[0]).each(function(e) {
                    i().close(e), u(e), a()
                })
            },
            getNotifications: function() {
                return o
            }
        }
    }

    function hp(r) {
        var o = [],
            i = function() {
                var e, t = r.theme;
                return t && t.getWindowManagerImpl ? t.getWindowManagerImpl() : {
                    open: e = function() {
                        throw new Error("Theme did not provide a WindowManager implementation.")
                    },
                    alert: e,
                    confirm: e,
                    close: e,
                    getParams: e,
                    setParams: e
                }
            },
            a = function(e, t) {
                return function() {
                    return t ? t.apply(e, arguments) : undefined
                }
            },
            u = function(e) {
                var t;
                o.push(e), t = e, r.fire("OpenWindow", {
                    win: t
                })
            },
            s = function(n) {
                K(o, function(e) {
                    return e === n
                }).each(function(e) {
                    var t;
                    o.splice(e, 1), t = n, r.fire("CloseWindow", {
                        win: t
                    }), 0 === o.length && r.focus()
                })
            },
            e = function() {
                return A.from(o[o.length - 1])
            };
        return r.on("remove", function() {
            F(o.slice(0), function(e) {
                i().close(e)
            })
        }), {
            windows: o,
            open: function(e, t) {
                r.editorManager.setActive(r), gg(r);
                var n = i().open(e, t, s);
                return u(n), n
            },
            alert: function(e, t, n) {
                var r = i().alert(e, a(n || this, t), s);
                u(r)
            },
            confirm: function(e, t, n) {
                var r = i().confirm(e, a(n || this, t), s);
                u(r)
            },
            close: function() {
                e().each(function(e) {
                    i().close(e), s(e)
                })
            },
            getParams: function() {
                return e().map(i().getParams).getOr(null)
            },
            setParams: function(t) {
                e().each(function(e) {
                    i().setParams(e, t)
                })
            },
            getWindows: function() {
                return o
            }
        }
    }
    var vp = wi.PluginManager,
        bp = function(e, t) {
            var n = function(e, t) {
                for (var n in vp.urls)
                    if (vp.urls[n] + "/plugin" + t + ".js" === e) return n;
                return null
            }(t, e.suffix);
            return n ? "Failed to load plugin: " + n + " from url " + t : "Failed to load plugin url: " + t
        },
        yp = function(e, t) {
            e.notificationManager.open({
                type: "error",
                text: t
            })
        },
        Cp = function(e, t) {
            e._skinLoaded ? yp(e, t) : e.on("SkinLoaded", function() {
                yp(e, t)
            })
        },
        xp = function(e, t) {
            Cp(e, bp(e, t))
        },
        wp = function(e, t) {
            Cp(e, "Failed to upload image: " + t)
        },
        Np = Cp,
        Ep = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            var r = window.console;
            r && (r.error ? r.error.apply(r, arguments) : r.log.apply(r, arguments))
        },
        Sp = wi.PluginManager,
        kp = wi.ThemeManager;

    function Tp() {
        return new(ie.getOrDie("XMLHttpRequest"))
    }

    function Ap(u, s) {
        var r = {},
            n = function(e, r, o, t) {
                var i, n;
                (i = Tp()).open("POST", s.url), i.withCredentials = s.credentials, i.upload.onprogress = function(e) {
                    t(e.loaded / e.total * 100)
                }, i.onerror = function() {
                    o("Image upload failed due to a XHR Transport error. Code: " + i.status)
                }, i.onload = function() {
                    var e, t, n;
                    i.status < 200 || 300 <= i.status ? o("HTTP Error: " + i.status) : (e = JSON.parse(i.responseText)) && "string" == typeof e.location ? r((t = s.basePath, n = e.location, t ? t.replace(/\/$/, "") + "/" + n.replace(/^\//, "") : n)) : o("Invalid JSON: " + i.responseText)
                }, (n = new FormData).append("file", e.blob(), e.filename()), i.send(n)
            },
            c = function(e, t) {
                return {
                    url: t,
                    blobInfo: e,
                    status: !0
                }
            },
            l = function(e, t) {
                return {
                    url: "",
                    blobInfo: e,
                    status: !1,
                    error: t
                }
            },
            f = function(e, t) {
                Yt.each(r[e], function(e) {
                    e(t)
                }), delete r[e]
            },
            o = function(e, n) {
                return e = Yt.grep(e, function(e) {
                    return !u.isUploaded(e.blobUri())
                }), me.all(Yt.map(e, function(e) {
                    return u.isPending(e.blobUri()) ? (t = e.blobUri(), new me(function(e) {
                        r[t] = r[t] || [], r[t].push(e)
                    })) : (o = e, i = s.handler, a = n, u.markPending(o.blobUri()), new me(function(t) {
                        var n;
                        try {
                            var r = function() {
                                n && n.close()
                            };
                            i(o, function(e) {
                                r(), u.markUploaded(o.blobUri(), e), f(o.blobUri(), c(o, e)), t(c(o, e))
                            }, function(e) {
                                r(), u.removeFailed(o.blobUri()), f(o.blobUri(), l(o, e)), t(l(o, e))
                            }, function(e) {
                                e < 0 || 100 < e || (n || (n = a()), n.progressBar.value(e))
                            })
                        } catch (e) {
                            t(l(o, e.message))
                        }
                    }));
                    var o, i, a, t
                }))
            };
        return !1 === P(s.handler) && (s.handler = n), {
            upload: function(e, t) {
                return s.url || s.handler !== n ? o(e, t) : new me(function(e) {
                    e([])
                })
            }
        }
    }
    var Rp = function(e) {
            return ie.getOrDie("atob")(e)
        },
        _p = function(e) {
            var t, n, r = decodeURIComponent(e).split(",");
            return (n = /data:([^;]+)/.exec(r[0])) && (t = n[1]), {
                type: t,
                data: r[1]
            }
        },
        Dp = function(a) {
            return new me(function(e) {
                var t, n, r, o, i = _p(a);
                try {
                    t = Rp(i.data)
                } catch (LN) {
                    return void e(new Blob([]))
                }
                for (o = t.length, n = new(ie.getOrDie("Uint8Array"))(o), r = 0; r < n.length; r++) n[r] = t.charCodeAt(r);
                e(new Blob([n], {
                    type: i.type
                }))
            })
        },
        Bp = function(e) {
            return 0 === e.indexOf("blob:") ? (i = e, new me(function(e, t) {
                var n = function() {
                    t("Cannot convert " + i + " to Blob. Resource might not exist or is inaccessible.")
                };
                try {
                    var r = Tp();
                    r.open("GET", i, !0), r.responseType = "blob", r.onload = function() {
                        200 === this.status ? e(this.response) : n()
                    }, r.onerror = n, r.send()
                } catch (o) {
                    n()
                }
            })) : 0 === e.indexOf("data:") ? Dp(e) : null;
            var i
        },
        Op = function(n) {
            return new me(function(e) {
                var t = new(ie.getOrDie("FileReader"));
                t.onloadend = function() {
                    e(t.result)
                }, t.readAsDataURL(n)
            })
        },
        Pp = _p,
        Lp = 0,
        Ip = function(e) {
            return (e || "blobid") + Lp++
        },
        Mp = function(n, r, o, t) {
            var i, a;
            0 !== r.src.indexOf("blob:") ? (i = Pp(r.src).data, (a = n.findFirst(function(e) {
                return e.base64() === i
            })) ? o({
                image: r,
                blobInfo: a
            }) : Bp(r.src).then(function(e) {
                a = n.create(Ip(), e, i), n.add(a), o({
                    image: r,
                    blobInfo: a
                })
            }, function(e) {
                t(e)
            })) : (a = n.getByUri(r.src)) ? o({
                image: r,
                blobInfo: a
            }) : Bp(r.src).then(function(t) {
                Op(t).then(function(e) {
                    i = Pp(e).data, a = n.create(Ip(), t, i), n.add(a), o({
                        image: r,
                        blobInfo: a
                    })
                })
            }, function(e) {
                t(e)
            })
        },
        Fp = function(e) {
            return e ? ne(e.getElementsByTagName("img")) : []
        },
        zp = 0,
        Up = {
            uuid: function(e) {
                return e + zp++ + (t = function() {
                    return Math.round(4294967295 * Math.random()).toString(36)
                }, "s" + (new Date).getTime().toString(36) + t() + t() + t());
                var t
            }
        };

    function Vp(u) {
        var n, o, t, e, i, r, a, s, c, l = (n = [], o = function(e) {
                var t, n, r;
                if (!e.blob || !e.base64) throw new Error("blob and base64 representations of the image are required for BlobInfo to be created");
                return t = e.id || Up.uuid("blobid"), n = e.name || t, {
                    id: j(t),
                    name: j(n),
                    filename: j(n + "." + (r = e.blob.type, {
                        "image/jpeg": "jpg",
                        "image/jpg": "jpg",
                        "image/gif": "gif",
                        "image/png": "png"
                    } [r.toLowerCase()] || "dat")),
                    blob: j(e.blob),
                    base64: j(e.base64),
                    blobUri: j(e.blobUri || ue.createObjectURL(e.blob)),
                    uri: j(e.uri)
                }
            }, {
                create: function(e, t, n, r) {
                    if (R(e)) return o({
                        id: e,
                        name: r,
                        blob: t,
                        base64: n
                    });
                    if (_(e)) return o(e);
                    throw new Error("Unknown input type")
                },
                add: function(e) {
                    t(e.id()) || n.push(e)
                },
                get: t = function(t) {
                    return e(function(e) {
                        return e.id() === t
                    })
                },
                getByUri: function(t) {
                    return e(function(e) {
                        return e.blobUri() === t
                    })
                },
                findFirst: e = function(e) {
                    return z(n, e)[0]
                },
                removeByUri: function(t) {
                    n = z(n, function(e) {
                        return e.blobUri() !== t || (ue.revokeObjectURL(e.blobUri()), !1)
                    })
                },
                destroy: function() {
                    F(n, function(e) {
                        ue.revokeObjectURL(e.blobUri())
                    }), n = []
                }
            }),
            f = (a = {}, s = function(e, t) {
                return {
                    status: e,
                    resultUri: t
                }
            }, {
                hasBlobUri: c = function(e) {
                    return e in a
                },
                getResultUri: function(e) {
                    var t = a[e];
                    return t ? t.resultUri : null
                },
                isPending: function(e) {
                    return !!c(e) && 1 === a[e].status
                },
                isUploaded: function(e) {
                    return !!c(e) && 2 === a[e].status
                },
                markPending: function(e) {
                    a[e] = s(1, null)
                },
                markUploaded: function(e, t) {
                    a[e] = s(2, t)
                },
                removeFailed: function(e) {
                    delete a[e]
                },
                destroy: function() {
                    a = {}
                }
            }),
            d = [],
            m = function(t) {
                return function(e) {
                    return u.selection ? t(e) : []
                }
            },
            g = function(e, t, n) {
                for (var r = 0; - 1 !== (r = e.indexOf(t, r)) && (e = e.substring(0, r) + n + e.substr(r + t.length), r += n.length - t.length + 1), -1 !== r;);
                return e
            },
            p = function(e, t, n) {
                return e = g(e, 'src="' + t + '"', 'src="' + n + '"'), e = g(e, 'data-mce-src="' + t + '"', 'data-mce-src="' + n + '"')
            },
            h = function(t, n) {
                F(u.undoManager.data, function(e) {
                    "fragmented" === e.type ? e.fragments = $(e.fragments, function(e) {
                        return p(e, t, n)
                    }) : e.content = p(e.content, t, n)
                })
            },
            v = function() {
                return u.notificationManager.open({
                    text: u.translate("Image uploading..."),
                    type: "info",
                    timeout: -1,
                    progressBar: !0
                })
            },
            b = function(e, t) {
                l.removeByUri(e.src), h(e.src, t), u.$(e).attr({
                    src: Nm(u) ? t + "?" + (new Date).getTime() : t,
                    "data-mce-src": u.convertURL(t, "src")
                })
            },
            y = function(n) {
                return i || (i = Ap(f, {
                    url: Sm(u),
                    basePath: km(u),
                    credentials: Tm(u),
                    handler: Am(u)
                })), w().then(m(function(r) {
                    var e;
                    return e = $(r, function(e) {
                        return e.blobInfo
                    }), i.upload(e, v).then(m(function(e) {
                        var t = $(e, function(e, t) {
                            var n = r[t].image;
                            return e.status && Em(u) ? b(n, e.url) : e.error && wp(u, e.error), {
                                element: n,
                                status: e.status
                            }
                        });
                        return n && n(t), t
                    }))
                }))
            },
            C = function(e) {
                if (wm(u)) return y(e)
            },
            x = function(t) {
                return !1 !== J(d, function(e) {
                    return e(t)
                }) && (0 !== t.getAttribute("src").indexOf("data:") || xm(u)(t))
            },
            w = function() {
                var o, i, a;
                return r || (o = f, i = l, a = {}, r = {
                    findAll: function(e, n) {
                        var t;
                        n || (n = j(!0)), t = z(Fp(e), function(e) {
                            var t = e.src;
                            return !!de.fileApi && !e.hasAttribute("data-mce-bogus") && !e.hasAttribute("data-mce-placeholder") && !(!t || t === de.transparentSrc) && (0 === t.indexOf("blob:") ? !o.isUploaded(t) && n(e) : 0 === t.indexOf("data:") && n(e))
                        });
                        var r = $(t, function(n) {
                            if (a[n.src]) return new me(function(t) {
                                a[n.src].then(function(e) {
                                    if ("string" == typeof e) return e;
                                    t({
                                        image: n,
                                        blobInfo: e.blobInfo
                                    })
                                })
                            });
                            var e = new me(function(e, t) {
                                Mp(i, n, e, t)
                            }).then(function(e) {
                                return delete a[e.image.src], e
                            })["catch"](function(e) {
                                return delete a[n.src], e
                            });
                            return a[n.src] = e
                        });
                        return me.all(r)
                    }
                }), r.findAll(u.getBody(), x).then(m(function(e) {
                    return e = z(e, function(e) {
                        return "string" != typeof e || (Np(u, e), !1)
                    }), F(e, function(e) {
                        h(e.image.src, e.blobInfo.blobUri()), e.image.src = e.blobInfo.blobUri(), e.image.removeAttribute("data-mce-src")
                    }), e
                }))
            },
            N = function(e) {
                return e.replace(/src="(blob:[^"]+)"/g, function(e, n) {
                    var t = f.getResultUri(n);
                    if (t) return 'src="' + t + '"';
                    var r = l.getByUri(n);
                    return r || (r = U(u.editorManager.get(), function(e, t) {
                        return e || t.editorUpload && t.editorUpload.blobCache.getByUri(n)
                    }, null)), r ? 'src="data:' + r.blob().type + ";base64," + r.base64() + '"' : e
                })
            };
        return u.on("setContent", function() {
            wm(u) ? C() : w()
        }), u.on("RawSaveContent", function(e) {
            e.content = N(e.content)
        }), u.on("getContent", function(e) {
            e.source_view || "raw" === e.format || (e.content = N(e.content))
        }), u.on("PostRender", function() {
            u.parser.addNodeFilter("img", function(e) {
                F(e, function(e) {
                    var t = e.attr("src");
                    if (!l.getByUri(t)) {
                        var n = f.getResultUri(t);
                        n && e.attr("src", n)
                    }
                })
            })
        }), {
            blobCache: l,
            addFilter: function(e) {
                d.push(e)
            },
            uploadImages: y,
            uploadImagesAuto: C,
            scanForImages: w,
            destroy: function() {
                l.destroy(), f.destroy(), r = i = null
            }
        }
    }
    var Hp = function(e, t) {
            return e.hasOwnProperty(t.nodeName)
        },
        jp = function(t, e, n) {
            return r = Vl(rr.fromDom(n), rr.fromDom(e)), K(r, function(e) {
                return Hp(t, e.dom())
            }).isSome();
            var r
        },
        qp = function(e, t) {
            if (_o.isText(t)) {
                if (0 === t.nodeValue.length) return !0;
                if (/^\s+$/.test(t.nodeValue) && (!t.nextSibling || Hp(e, t.nextSibling))) return !0
            }
            return !1
        },
        $p = function(e) {
            var t, n, r, o, i, a, u, s, c, l, f, d = e.settings,
                m = e.dom,
                g = e.selection,
                p = e.schema,
                h = p.getBlockElements(),
                v = g.getStart(),
                b = e.getBody();
            if (f = d.forced_root_block, v && _o.isElement(v) && f && (l = b.nodeName.toLowerCase(), p.isValidChild(l, f.toLowerCase()) && !jp(h, b, v))) {
                for (n = (t = g.getRng()).startContainer, r = t.startOffset, o = t.endContainer, i = t.endOffset, c = ap(e), v = b.firstChild; v;)
                    if (y = h, C = v, _o.isText(C) || _o.isElement(C) && !Hp(y, C) && !pc(C)) {
                        if (qp(h, v)) {
                            v = (u = v).nextSibling, m.remove(u);
                            continue
                        }
                        a || (a = m.create(f, e.settings.forced_root_block_attrs), v.parentNode.insertBefore(a, v), s = !0), v = (u = v).nextSibling, a.appendChild(u)
                    } else a = null, v = v.nextSibling;
                var y, C;
                s && c && (t.setStart(n, r), t.setEnd(o, i), g.setRng(t), e.nodeChanged())
            }
        },
        Wp = function(e) {
            e.settings.forced_root_block && e.on("NodeChange", d($p, e))
        },
        Kp = function(t) {
            return jr(t).fold(j([t]), function(e) {
                return [t].concat(Kp(e))
            })
        },
        Xp = function(t) {
            return qr(t).fold(j([t]), function(e) {
                return "br" === ur(e) ? Mr(e).map(function(e) {
                    return [t].concat(Xp(e))
                }).getOr([]) : [t].concat(Xp(e))
            })
        },
        Yp = function(o, e) {
            return qa([(i = e, a = i.startContainer, u = i.startOffset, _o.isText(a) ? 0 === u ? A.some(rr.fromDom(a)) : A.none() : A.from(a.childNodes[u]).map(rr.fromDom)), (t = e, n = t.endContainer, r = t.endOffset, _o.isText(n) ? r === n.data.length ? A.some(rr.fromDom(n)) : A.none() : A.from(n.childNodes[r - 1]).map(rr.fromDom))], function(e, t) {
                var n = V(Kp(o), d(Or, e)),
                    r = V(Xp(o), d(Or, t));
                return n.isSome() && r.isSome()
            }).getOr(!1);
            var t, n, r, i, a, u
        },
        Gp = function(e, t, n, r) {
            var o = n,
                i = new ro(n, o),
                a = e.schema.getNonEmptyElements();
            do {
                if (3 === n.nodeType && 0 !== Yt.trim(n.nodeValue).length) return void(r ? t.setStart(n, 0) : t.setEnd(n, n.nodeValue.length));
                if (a[n.nodeName] && !/^(TD|TH)$/.test(n.nodeName)) return void(r ? t.setStartBefore(n) : "BR" === n.nodeName ? t.setEndBefore(n) : t.setEndAfter(n));
                if (de.ie && de.ie < 11 && e.isBlock(n) && e.isEmpty(n)) return void(r ? t.setStart(n, 0) : t.setEnd(n, 0))
            } while (n = r ? i.next() : i.prev());
            "BODY" === o.nodeName && (r ? t.setStart(o, 0) : t.setEnd(o, o.childNodes.length))
        },
        Jp = function(e) {
            var t = e.selection.getSel();
            return t && 0 < t.rangeCount
        };

    function Qp(i) {
        var r, o = [];
        "onselectionchange" in i.getDoc() || i.on("NodeChange Click MouseUp KeyUp Focus", function(e) {
            var t, n;
            n = {
                startContainer: (t = i.selection.getRng()).startContainer,
                startOffset: t.startOffset,
                endContainer: t.endContainer,
                endOffset: t.endOffset
            }, "nodechange" !== e.type && Im(n, r) || i.fire("SelectionChange"), r = n
        }), i.on("contextmenu", function() {
            i.fire("SelectionChange")
        }), i.on("SelectionChange", function() {
            var e = i.selection.getStart(!0);
            !e || !de.range && i.selection.isCollapsed() || Jp(i) && ! function(e) {
                var t, n;
                if ((n = i.$(e).parentsUntil(i.getBody()).add(e)).length === o.length) {
                    for (t = n.length; 0 <= t && n[t] === o[t]; t--);
                    if (-1 === t) return o = n, !0
                }
                return o = n, !1
            }(e) && i.dom.isChildOf(e, i.getBody()) && i.nodeChanged({
                selectionChange: !0
            })
        }), i.on("MouseUp", function(e) {
            !e.isDefaultPrevented() && Jp(i) && ("IMG" === i.selection.getNode().nodeName ? ve.setEditorTimeout(i, function() {
                i.nodeChanged()
            }) : i.nodeChanged())
        }), this.nodeChanged = function(e) {
            var t, n, r, o = i.selection;
            i.initialized && o && !i.settings.disable_nodechange && !i.readonly && (r = i.getBody(), (t = o.getStart(!0) || r).ownerDocument === i.getDoc() && i.dom.isChildOf(t, r) || (t = r), n = [], i.dom.getParent(t, function(e) {
                if (e === r) return !0;
                n.push(e)
            }), (e = e || {}).element = t, e.parents = n, i.fire("NodeChange", e))
        }
    }
    var Zp, eh, th = function(e) {
            var t, n, r, o;
            return o = e.getBoundingClientRect(), n = (t = e.ownerDocument).documentElement, r = t.defaultView, {
                top: o.top + r.pageYOffset - n.clientTop,
                left: o.left + r.pageXOffset - n.clientLeft
            }
        },
        nh = function(e, t) {
            return n = (u = e).inline ? th(u.getBody()) : {
                left: 0,
                top: 0
            }, a = (i = e).getBody(), r = i.inline ? {
                left: a.scrollLeft,
                top: a.scrollTop
            } : {
                left: 0,
                top: 0
            }, {
                pageX: (o = function(e, t) {
                    if (t.target.ownerDocument !== e.getDoc()) {
                        var n = th(e.getContentAreaContainer()),
                            r = (i = (o = e).getBody(), a = o.getDoc().documentElement, u = {
                                left: i.scrollLeft,
                                top: i.scrollTop
                            }, s = {
                                left: i.scrollLeft || a.scrollLeft,
                                top: i.scrollTop || a.scrollTop
                            }, o.inline ? u : s);
                        return {
                            left: t.pageX - n.left + r.left,
                            top: t.pageY - n.top + r.top
                        }
                    }
                    var o, i, a, u, s;
                    return {
                        left: t.pageX,
                        top: t.pageY
                    }
                }(e, t)).left - n.left + r.left,
                pageY: o.top - n.top + r.top
            };
            var n, r, o, i, a, u
        },
        rh = _o.isContentEditableFalse,
        oh = _o.isContentEditableTrue,
        ih = function(e) {
            e && e.parentNode && e.parentNode.removeChild(e)
        },
        ah = function(u, s) {
            return function(e) {
                if (0 === e.button) {
                    var t = V(s.dom.getParents(e.target), Ka(rh, oh)).getOr(null);
                    if (i = s.getBody(), rh(a = t) && a !== i) {
                        var n = s.dom.getPos(t),
                            r = s.getBody(),
                            o = s.getDoc().documentElement;
                        u.element = t, u.screenX = e.screenX, u.screenY = e.screenY, u.maxX = (s.inline ? r.scrollWidth : o.offsetWidth) - 2, u.maxY = (s.inline ? r.scrollHeight : o.offsetHeight) - 2, u.relX = e.pageX - n.x, u.relY = e.pageY - n.y, u.width = t.offsetWidth, u.height = t.offsetHeight, u.ghost = function(e, t, n, r) {
                            var o = t.cloneNode(!0);
                            e.dom.setStyles(o, {
                                width: n,
                                height: r
                            }), e.dom.setAttrib(o, "data-mce-selected", null);
                            var i = e.dom.create("div", {
                                "class": "mce-drag-container",
                                "data-mce-bogus": "all",
                                unselectable: "on",
                                contenteditable: "false"
                            });
                            return e.dom.setStyles(i, {
                                position: "absolute",
                                opacity: .5,
                                overflow: "hidden",
                                border: 0,
                                padding: 0,
                                margin: 0,
                                width: n,
                                height: r
                            }), e.dom.setStyles(o, {
                                margin: 0,
                                boxSizing: "border-box"
                            }), i.appendChild(o), i
                        }(s, t, u.width, u.height)
                    }
                }
                var i, a
            }
        },
        uh = function(l, f) {
            return function(e) {
                if (l.dragging && (s = (i = f).selection, c = s.getSel().getRangeAt(0).startContainer, a = 3 === c.nodeType ? c.parentNode : c, u = l.element, a !== u && !i.dom.isChildOf(a, u) && !rh(a))) {
                    var t = (r = l.element, (o = r.cloneNode(!0)).removeAttribute("data-mce-selected"), o),
                        n = f.fire("drop", {
                            targetClone: t,
                            clientX: e.clientX,
                            clientY: e.clientY
                        });
                    n.isDefaultPrevented() || (t = n.targetClone, f.undoManager.transact(function() {
                        ih(l.element), f.insertContent(f.dom.getOuterHTML(t)), f._selectionOverrides.hideFakeCaret()
                    }))
                }
                var r, o, i, a, u, s, c;
                sh(l)
            }
        },
        sh = function(e) {
            e.dragging = !1, e.element = null, ih(e.ghost)
        },
        ch = function(e) {
            var t, n, r, o, i, a, p, h, v, u, s, c = {};
            t = gi.DOM, a = document, n = ah(c, e), p = c, h = e, v = ve.throttle(function(e, t) {
                h._selectionOverrides.hideFakeCaret(), h.selection.placeCaretAt(e, t)
            }, 0), r = function(e) {
                var t, n, r, o, i, a, u, s, c, l, f, d, m = Math.max(Math.abs(e.screenX - p.screenX), Math.abs(e.screenY - p.screenY));
                if (p.element && !p.dragging && 10 < m) {
                    if (h.fire("dragstart", {
                        target: p.element
                    }).isDefaultPrevented()) return;
                    p.dragging = !0, h.focus()
                }
                if (p.dragging) {
                    var g = (f = p, {
                        pageX: (d = nh(h, e)).pageX - f.relX,
                        pageY: d.pageY + 5
                    });
                    c = p.ghost, l = h.getBody(), c.parentNode !== l && l.appendChild(c), t = p.ghost, n = g, r = p.width, o = p.height, i = p.maxX, a = p.maxY, s = u = 0, t.style.left = n.pageX + "px", t.style.top = n.pageY + "px", n.pageX + r > i && (u = n.pageX + r - i), n.pageY + o > a && (s = n.pageY + o - a), t.style.width = r - u + "px", t.style.height = o - s + "px", v(e.clientX, e.clientY)
                }
            }, o = uh(c, e), u = c, i = function() {
                u.dragging && s.fire("dragend"), sh(u)
            }, (s = e).on("mousedown", n), e.on("mousemove", r), e.on("mouseup", o), t.bind(a, "mousemove", r), t.bind(a, "mouseup", i), e.on("remove", function() {
                t.unbind(a, "mousemove", r), t.unbind(a, "mouseup", i)
            })
        },
        lh = function(e) {
            var n;
            ch(e), (n = e).on("drop", function(e) {
                var t = "undefined" != typeof e.clientX ? n.getDoc().elementFromPoint(e.clientX, e.clientY) : null;
                (rh(t) || rh(n.dom.getContentEditableParent(t))) && e.preventDefault()
            })
        },
        fh = function(e) {
            return U(e, function(e, t) {
                return e.concat(function(t) {
                    var e = function(e) {
                        return $(e, function(e) {
                            return (e = La(e)).node = t, e
                        })
                    };
                    if (_o.isElement(t)) return e(t.getClientRects());
                    if (_o.isText(t)) {
                        var n = t.ownerDocument.createRange();
                        return n.setStart(t, 0), n.setEnd(t, t.data.length), e(n.getClientRects())
                    }
                }(t))
            }, [])
        };
    (eh = Zp || (Zp = {}))[eh.Up = -1] = "Up", eh[eh.Down = 1] = "Down";
    var dh = function(o, i, a, e, u, t) {
            var n, s, c = 0,
                l = [],
                r = function(e) {
                    var t, n, r;
                    for (r = fh([e]), -1 === o && (r = r.reverse()), t = 0; t < r.length; t++)
                        if (n = r[t], !a(n, s)) {
                            if (0 < l.length && i(n, qt.last(l)) && c++, n.line = c, u(n)) return !0;
                            l.push(n)
                        }
                };
            return (s = qt.last(t.getClientRects())) && (r(n = t.getNode()), function(e, t, n, r) {
                for (; r = gs(r, e, Oa, t);)
                    if (n(r)) return
            }(o, e, r, n)), l
        },
        mh = d(dh, Zp.Up, Fa, za),
        gh = d(dh, Zp.Down, za, Fa),
        ph = function(n) {
            return function(e) {
                return t = n, e.line > t;
                var t
            }
        },
        hh = function(n) {
            return function(e) {
                return t = n, e.line === t;
                var t
            }
        },
        vh = _o.isContentEditableFalse,
        bh = gs,
        yh = function(e, t) {
            return Math.abs(e.left - t)
        },
        Ch = function(e, t) {
            return Math.abs(e.right - t)
        },
        xh = function(e, t) {
            return e >= t.left && e <= t.right
        },
        wh = function(e, o) {
            return qt.reduce(e, function(e, t) {
                var n, r;
                return n = Math.min(yh(e, o), Ch(e, o)), r = Math.min(yh(t, o), Ch(t, o)), xh(o, t) ? t : xh(o, e) ? e : r === n && vh(t.node) ? t : r < n ? t : e
            })
        },
        Nh = function(e, t, n, r) {
            for (; r = bh(r, e, Oa, t);)
                if (n(r)) return
        },
        Eh = function(e, t, n) {
            var r, o, i, a, u, s, c, l = fh(z(ne(e.getElementsByTagName("*")), ts)),
                f = z(l, function(e) {
                    return n >= e.top && n <= e.bottom
                });
            return (r = wh(f, t)) && (r = wh((a = e, c = function(t, e) {
                var n;
                return n = z(fh([e]), function(e) {
                    return !t(e, u)
                }), s = s.concat(n), 0 === n.length
            }, (s = []).push(u = r), Nh(Zp.Up, a, d(c, Fa), u.node), Nh(Zp.Down, a, d(c, za), u.node), s), t)) && ts(r.node) ? (i = t, {
                node: (o = r).node,
                before: yh(o, i) < Ch(o, i)
            }) : null
        },
        Sh = function(i, a, e) {
            return !e.collapsed && U(e.getClientRects(), function(e, t) {
                return e || (o = a, (r = i) >= (n = t).left && r <= n.right && o >= n.top && o <= n.bottom);
                var n, r, o
            }, !1)
        },
        kh = _o.isContentEditableTrue,
        Th = _o.isContentEditableFalse,
        Ah = function(e, t, n, r, o) {
            return t._selectionOverrides.showCaret(e, n, r, o)
        },
        Rh = function(e, t) {
            var n, r;
            return e.fire("BeforeObjectSelected", {
                target: t
            }).isDefaultPrevented() ? null : ((r = (n = t).ownerDocument.createRange()).selectNode(n), r)
        },
        _h = function(e, t, n) {
            var r = ws(1, e.getBody(), t),
                o = hu.fromRangeStart(r),
                i = o.getNode();
            if (Th(i)) return Ah(1, e, i, !o.isAtEnd(), !1);
            var a = o.getNode(!0);
            if (Th(a)) return Ah(1, e, a, !1, !1);
            var u = e.dom.getParent(o.getNode(), function(e) {
                return Th(e) || kh(e)
            });
            return Th(u) ? Ah(1, e, u, !1, n) : null
        },
        Dh = function(e, t, n) {
            if (!t || !t.collapsed) return t;
            var r = _h(e, t, n);
            return r || t
        },
        Bh = function(t) {
            var e = Di(function() {
                if (!t.removed && t.selection.getRng().collapsed) {
                    var e = Dh(t, t.selection.getRng(), !1);
                    t.selection.setRng(e)
                }
            }, 0);
            t.on("focus", function() {
                e.throttle()
            }), t.on("blur", function() {
                e.cancel()
            })
        },
        Oh = {
            BACKSPACE: 8,
            DELETE: 46,
            DOWN: 40,
            ENTER: 13,
            LEFT: 37,
            RIGHT: 39,
            SPACEBAR: 32,
            TAB: 9,
            UP: 38,
            modifierPressed: function(e) {
                return e.shiftKey || e.ctrlKey || e.altKey || this.metaKeyPressed(e)
            },
            metaKeyPressed: function(e) {
                return de.mac ? e.metaKey : e.ctrlKey && !e.altKey
            }
        },
        Ph = _o.isContentEditableTrue,
        Lh = _o.isContentEditableFalse,
        Ih = As,
        Mh = Ts,
        Fh = function(e, t) {
            for (var n = e.getBody(); t && t !== n;) {
                if (Ph(t) || Lh(t)) return t;
                t = t.parentNode
            }
            return null
        },
        zh = function(g) {
            var p, e, t, a = g.getBody(),
                o = Zu(g.getBody(), function(e) {
                    return g.dom.isBlock(e)
                }, function() {
                    return ap(g)
                }),
                h = "sel-" + g.dom.uniqueId(),
                u = function(e) {
                    e && g.selection.setRng(e)
                },
                s = function() {
                    return g.selection.getRng()
                },
                v = function(e, t, n, r) {
                    return void 0 === r && (r = !0), g.fire("ShowCaret", {
                        target: t,
                        direction: e,
                        before: n
                    }).isDefaultPrevented() ? null : (r && g.selection.scrollIntoView(t, -1 === e), o.show(n, t))
                },
                b = function(e, t) {
                    return t = ws(e, a, t), -1 === e ? hu.fromRangeStart(t) : hu.fromRangeEnd(t)
                },
                n = function(e) {
                    return pa(e) || Ca(e) || xa(e)
                },
                y = function(e) {
                    return n(e.startContainer) || n(e.endContainer)
                },
                c = function(e, t) {
                    var n, r, o, i, a, u, s, c, l, f, d = g.$,
                        m = g.dom;
                    if (!e) return null;
                    if (e.collapsed) {
                        if (!y(e))
                            if (!1 === t) {
                                if (c = b(-1, e), ts(c.getNode(!0))) return v(-1, c.getNode(!0), !1, !1);
                                if (ts(c.getNode())) return v(-1, c.getNode(), !c.isAtEnd(), !1)
                            } else {
                                if (c = b(1, e), ts(c.getNode())) return v(1, c.getNode(), !c.isAtEnd(), !1);
                                if (ts(c.getNode(!0))) return v(1, c.getNode(!0), !1, !1)
                            } return null
                    }
                    return i = e.startContainer, a = e.startOffset, u = e.endOffset, 3 === i.nodeType && 0 === a && Lh(i.parentNode) && (i = i.parentNode, a = m.nodeIndex(i), i = i.parentNode), 1 !== i.nodeType ? null : (u === a + 1 && (n = i.childNodes[a]), Lh(n) ? (l = f = n.cloneNode(!0), (s = g.fire("ObjectSelected", {
                        target: n,
                        targetClone: l
                    })).isDefaultPrevented() ? null : (r = Ki(rr.fromDom(g.getBody()), "#" + h).fold(function() {
                        return d([])
                    }, function(e) {
                        return d([e.dom()])
                    }), l = s.targetClone, 0 === r.length && (r = d('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>').attr("id", h)).appendTo(g.getBody()), e = g.dom.createRng(), l === f && de.ie ? (r.empty().append('<p style="font-size: 0" data-mce-bogus="all">\xa0</p>').append(l), e.setStartAfter(r[0].firstChild.firstChild), e.setEndAfter(l)) : (r.empty().append("\xa0").append(l).append("\xa0"), e.setStart(r[0].firstChild, 1), e.setEnd(r[0].lastChild, 0)), r.css({
                        top: m.getPos(n, g.getBody()).y
                    }), r[0].focus(), (o = g.selection.getSel()).removeAllRanges(), o.addRange(e), F(Vi(rr.fromDom(g.getBody()), "*[data-mce-selected]"), function(e) {
                        yr(e, "data-mce-selected")
                    }), n.setAttribute("data-mce-selected", "1"), p = n, C(), e)) : null)
                },
                l = function() {
                    p && (p.removeAttribute("data-mce-selected"), Ki(rr.fromDom(g.getBody()), "#" + h).each(Ri), p = null), Ki(rr.fromDom(g.getBody()), "#" + h).each(Ri), p = null
                },
                C = function() {
                    o.hide()
                };
            return de.ceFalse && (function() {
                g.on("mouseup", function(e) {
                    var t = s();
                    t.collapsed && mp(g, e.clientX, e.clientY) && u(_h(g, t, !1))
                }), g.on("click", function(e) {
                    var t;
                    (t = Fh(g, e.target)) && (Lh(t) && (e.preventDefault(), g.focus()), Ph(t) && g.dom.isChildOf(t, g.selection.getNode()) && l())
                }), g.on("blur NewBlock", function() {
                    l()
                }), g.on("ResizeWindow FullscreenStateChanged", function() {
                    return o.reposition()
                });
                var n, r, i = function(e, t) {
                    var n, r, o = g.dom.getParent(e, g.dom.isBlock),
                        i = g.dom.getParent(t, g.dom.isBlock);
                    return !(!o || !g.dom.isChildOf(o, i) || !1 !== Lh(Fh(g, o))) || o && (n = o, r = i, !(g.dom.getParent(n, g.dom.isBlock) === g.dom.getParent(r, g.dom.isBlock))) && function(e) {
                        var t = Gs(e);
                        if (!e.firstChild) return !1;
                        var n = hu.before(e.firstChild),
                            r = t.next(n);
                        return r && !Mh(r) && !Ih(r)
                    }(o)
                };
                r = !1, (n = g).on("touchstart", function() {
                    r = !1
                }), n.on("touchmove", function() {
                    r = !0
                }), n.on("touchend", function(e) {
                    var t = Fh(n, e.target);
                    Lh(t) && (r || (e.preventDefault(), c(Rh(n, t))))
                }), g.on("mousedown", function(e) {
                    var t, n = e.target;
                    if ((n === a || "HTML" === n.nodeName || g.dom.isChildOf(n, a)) && !1 !== mp(g, e.clientX, e.clientY))
                        if (t = Fh(g, n)) Lh(t) ? (e.preventDefault(), c(Rh(g, t))) : (l(), Ph(t) && e.shiftKey || Sh(e.clientX, e.clientY, g.selection.getRng()) || (C(), g.selection.placeCaretAt(e.clientX, e.clientY)));
                        else if (!1 === ts(n)) {
                            l(), C();
                            var r = Eh(a, e.clientX, e.clientY);
                            if (r && !i(e.target, r.node)) {
                                e.preventDefault();
                                var o = v(1, r.node, r.before, !1);
                                g.getBody().focus(), u(o)
                            }
                        }
                }), g.on("keypress", function(e) {
                    Oh.modifierPressed(e) || (e.keyCode, Lh(g.selection.getNode()) && e.preventDefault())
                }), g.on("getSelectionRange", function(e) {
                    var t = e.range;
                    if (p) {
                        if (!p.parentNode) return void(p = null);
                        (t = t.cloneRange()).selectNode(p), e.range = t
                    }
                }), g.on("setSelectionRange", function(e) {
                    var t;
                    (t = c(e.range, e.forward)) && (e.range = t)
                }), g.on("AfterSetSelectionRange", function(e) {
                    var t, n = e.range;
                    y(n) || "mcepastebin" === n.startContainer.parentNode.id || C(), t = n.startContainer.parentNode, g.dom.hasClass(t, "mce-offscreen-selection") || l()
                }), g.on("copy", function(e) {
                    var t, n = e.clipboardData;
                    if (!e.isDefaultPrevented() && e.clipboardData && !de.ie) {
                        var r = (t = g.dom.get(h)) ? t.getElementsByTagName("*")[0] : t;
                        r && (e.preventDefault(), n.clearData(), n.setData("text/html", r.outerHTML), n.setData("text/plain", r.outerText))
                    }
                }), lh(g), Bh(g)
            }(), e = g.contentStyles, t = ".mce-content-body", e.push(o.getCss()), e.push(t + " .mce-offscreen-selection {position: absolute;left: -9999999999px;max-width: 1000000px;}" + t + " *[contentEditable=false] {cursor: default;}" + t + " *[contentEditable=true] {cursor: text;}")), {
                showCaret: v,
                showBlockCaretContainer: function(e) {
                    e.hasAttribute("data-mce-caret") && (wa(e), u(s()), g.selection.scrollIntoView(e[0]))
                },
                hideFakeCaret: C,
                destroy: function() {
                    o.destroy(), p = null
                }
            }
        },
        Uh = function(e, t, n) {
            var r, o, i, a, u = 1;
            for (a = e.getShortEndedElements(), (i = /<([!?\/])?([A-Za-z0-9\-_\:\.]+)((?:\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\/|\s+)>/g).lastIndex = r = n; o = i.exec(t);) {
                if (r = i.lastIndex, "/" === o[1]) u--;
                else if (!o[1]) {
                    if (o[2] in a) continue;
                    u++
                }
                if (0 === u) break
            }
            return r
        };

    function Vh(F, z) {
        void 0 === z && (z = ti());
        var e = function() {};
        !1 !== (F = F || {}).fix_self_closing && (F.fix_self_closing = !0);
        var U = F.comment ? F.comment : e,
            V = F.cdata ? F.cdata : e,
            H = F.text ? F.text : e,
            j = F.start ? F.start : e,
            q = F.end ? F.end : e,
            $ = F.pi ? F.pi : e,
            W = F.doctype ? F.doctype : e;
        return {
            parse: function(e) {
                var t, n, r, d, o, i, a, m, u, s, g, c, p, l, f, h, v, b, y, C, x, w, N, E, S, k, T, A, R, _ = 0,
                    D = [],
                    B = 0,
                    O = qo.decode,
                    P = Yt.makeMap("src,href,data,background,formaction,poster,xlink:href"),
                    L = /((java|vb)script|mhtml):/i,
                    I = function(e) {
                        var t, n;
                        for (t = D.length; t-- && D[t].name !== e;);
                        if (0 <= t) {
                            for (n = D.length - 1; t <= n; n--)(e = D[n]).valid && q(e.name);
                            D.length = t
                        }
                    },
                    M = function(e, t, n, r, o) {
                        var i, a, u, s, c;
                        if (n = (t = t.toLowerCase()) in g ? t : O(n || r || o || ""), p && !m && 0 == (0 === (u = t).indexOf("data-") || 0 === u.indexOf("aria-"))) {
                            if (!(i = b[t]) && y) {
                                for (a = y.length; a-- && !(i = y[a]).pattern.test(t);); - 1 === a && (i = null)
                            }
                            if (!i) return;
                            if (i.validValues && !(n in i.validValues)) return
                        }
                        if (P[t] && !F.allow_script_urls) {
                            var l = n.replace(/[\s\u0000-\u001F]+/g, "");
                            try {
                                l = decodeURIComponent(l)
                            } catch (f) {
                                l = unescape(l)
                            }
                            if (L.test(l)) return;
                            if (c = l, !(s = F).allow_html_data_urls && (/^data:image\//i.test(c) ? !1 === s.allow_svg_data_urls && /^data:image\/svg\+xml/i.test(c) : /^data:/i.test(c))) return
                        }
                        m && (t in P || 0 === t.indexOf("on")) || (d.map[t] = n, d.push({
                            name: t,
                            value: n
                        }))
                    };
                for (S = new RegExp("<(?:(?:!--([\\w\\W]*?)--\x3e)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:!DOCTYPE([\\w\\W]*?)>)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))", "g"), k = /([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g, s = z.getShortEndedElements(), E = F.self_closing_elements || z.getSelfClosingElements(), g = z.getBoolAttrs(), p = F.validate, u = F.remove_internals, R = F.fix_self_closing, T = z.getSpecialElements(), N = e + ">"; t = S.exec(N);) {
                    if (_ < t.index && H(O(e.substr(_, t.index - _))), n = t[6]) ":" === (n = n.toLowerCase()).charAt(0) && (n = n.substr(1)), I(n);
                    else if (n = t[7]) {
                        if (t.index + t[0].length > e.length) {
                            H(O(e.substr(t.index))), _ = t.index + t[0].length;
                            continue
                        }
                        if (":" === (n = n.toLowerCase()).charAt(0) && (n = n.substr(1)), c = n in s, R && E[n] && 0 < D.length && D[D.length - 1].name === n && I(n), !p || (l = z.getElementRule(n))) {
                            if (f = !0, p && (b = l.attributes, y = l.attributePatterns), (v = t[8]) ? ((m = -1 !== v.indexOf("data-mce-type")) && u && (f = !1), (d = []).map = {}, v.replace(k, M)) : (d = []).map = {}, p && !m) {
                                if (C = l.attributesRequired, x = l.attributesDefault, w = l.attributesForced, l.removeEmptyAttrs && !d.length && (f = !1), w)
                                    for (o = w.length; o--;) a = (h = w[o]).name, "{$uid}" === (A = h.value) && (A = "mce_" + B++), d.map[a] = A, d.push({
                                        name: a,
                                        value: A
                                    });
                                if (x)
                                    for (o = x.length; o--;)(a = (h = x[o]).name) in d.map || ("{$uid}" === (A = h.value) && (A = "mce_" + B++), d.map[a] = A, d.push({
                                        name: a,
                                        value: A
                                    }));
                                if (C) {
                                    for (o = C.length; o-- && !(C[o] in d.map);); - 1 === o && (f = !1)
                                }
                                if (h = d.map["data-mce-bogus"]) {
                                    if ("all" === h) {
                                        _ = Uh(z, e, S.lastIndex), S.lastIndex = _;
                                        continue
                                    }
                                    f = !1
                                }
                            }
                            f && j(n, d, c)
                        } else f = !1;
                        if (r = T[n]) {
                            r.lastIndex = _ = t.index + t[0].length, (t = r.exec(e)) ? (f && (i = e.substr(_, t.index - _)), _ = t.index + t[0].length) : (i = e.substr(_), _ = e.length), f && (0 < i.length && H(i, !0), q(n)), S.lastIndex = _;
                            continue
                        }
                        c || (v && v.indexOf("/") === v.length - 1 ? f && q(n) : D.push({
                            name: n,
                            valid: f
                        }))
                    } else(n = t[1]) ? (">" === n.charAt(0) && (n = " " + n), F.allow_conditional_comments || "[if" !== n.substr(0, 3).toLowerCase() || (n = " " + n), U(n)) : (n = t[2]) ? V(n.replace(/<!--|-->/g, "")) : (n = t[3]) ? W(n) : (n = t[4]) && $(n, t[5]);
                    _ = t.index + t[0].length
                }
                for (_ < e.length && H(O(e.substr(_))), o = D.length - 1; 0 <= o; o--)(n = D[o]).valid && q(n.name)
            }
        }
    }(Vh || (Vh = {})).findEndTag = Uh;
    var Hh = Vh,
        jh = function(e, t) {
            var n, r, o, i, a, u, s, c, l = t,
                f = /<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,
                d = e.schema;
            for (u = e.getTempAttrs(), s = l, c = new RegExp(["\\s?(" + u.join("|") + ')="[^"]+"'].join("|"), "gi"), l = s.replace(c, ""), a = d.getShortEndedElements(); i = f.exec(l);) r = f.lastIndex, o = i[0].length, n = a[i[1]] ? r : Hh.findEndTag(d, l, r), l = l.substring(0, r - o) + l.substring(n), f.lastIndex = r - o;
            return la(l)
        },
        qh = {
            trimExternal: jh,
            trimInternal: jh
        },
        $h = 0,
        Wh = 2,
        Kh = 1,
        Xh = function(g, p) {
            var e = g.length + p.length + 2,
                h = new Array(e),
                v = new Array(e),
                c = function(e, t, n, r, o) {
                    var i = l(e, t, n, r);
                    if (null === i || i.start === t && i.diag === t - r || i.end === e && i.diag === e - n)
                        for (var a = e, u = n; a < t || u < r;) a < t && u < r && g[a] === p[u] ? (o.push([0, g[a]]), ++a, ++u) : r - n < t - e ? (o.push([2, g[a]]), ++a) : (o.push([1, p[u]]), ++u);
                    else {
                        c(e, i.start, n, i.start - i.diag, o);
                        for (var s = i.start; s < i.end; ++s) o.push([0, g[s]]);
                        c(i.end, t, i.end - i.diag, r, o)
                    }
                },
                b = function(e, t, n, r) {
                    for (var o = e; o - t < r && o < n && g[o] === p[o - t];) ++o;
                    return {
                        start: e,
                        end: o,
                        diag: t
                    }
                },
                l = function(e, t, n, r) {
                    var o = t - e,
                        i = r - n;
                    if (0 === o || 0 === i) return null;
                    var a, u, s, c, l, f = o - i,
                        d = i + o,
                        m = (d % 2 == 0 ? d : d + 1) / 2;
                    for (h[1 + m] = e, v[1 + m] = t + 1, a = 0; a <= m; ++a) {
                        for (u = -a; u <= a; u += 2) {
                            for (s = u + m, u === -a || u !== a && h[s - 1] < h[s + 1] ? h[s] = h[s + 1] : h[s] = h[s - 1] + 1, l = (c = h[s]) - e + n - u; c < t && l < r && g[c] === p[l];) h[s] = ++c, ++l;
                            if (f % 2 != 0 && f - a <= u && u <= f + a && v[s - f] <= h[s]) return b(v[s - f], u + e - n, t, r)
                        }
                        for (u = f - a; u <= f + a; u += 2) {
                            for (s = u + m - f, u === f - a || u !== f + a && v[s + 1] <= v[s - 1] ? v[s] = v[s + 1] - 1 : v[s] = v[s - 1], l = (c = v[s] - 1) - e + n - u; e <= c && n <= l && g[c] === p[l];) v[s] = c--, l--;
                            if (f % 2 == 0 && -a <= u && u <= a && v[s] <= h[s + f]) return b(v[s], u + e - n, t, r)
                        }
                    }
                },
                t = [];
            return c(0, g.length, 0, p.length, t), t
        },
        Yh = function(e) {
            return _o.isElement(e) ? e.outerHTML : _o.isText(e) ? qo.encodeRaw(e.data, !1) : _o.isComment(e) ? "\x3c!--" + e.data + "--\x3e" : ""
        },
        Gh = function(e, t, n) {
            var r = function(e) {
                var t, n, r;
                for (r = document.createElement("div"), t = document.createDocumentFragment(), e && (r.innerHTML = e); n = r.firstChild;) t.appendChild(n);
                return t
            }(t);
            if (e.hasChildNodes() && n < e.childNodes.length) {
                var o = e.childNodes[n];
                o.parentNode.insertBefore(r, o)
            } else e.appendChild(r)
        },
        Jh = function(e) {
            return z($(ne(e.childNodes), Yh), function(e) {
                return 0 < e.length
            })
        },
        Qh = function(e, t) {
            var n, r, o, i = $(ne(t.childNodes), Yh);
            return n = Xh(i, e), r = t, o = 0, F(n, function(e) {
                e[0] === $h ? o++ : e[0] === Kh ? (Gh(r, e[1], o), o++) : e[0] === Wh && function(e, t) {
                    if (e.hasChildNodes() && t < e.childNodes.length) {
                        var n = e.childNodes[t];
                        n.parentNode.removeChild(n)
                    }
                }(r, o)
            }), t
        },
        Zh = Bi(A.none()),
        ev = function(e) {
            return {
                type: "fragmented",
                fragments: e,
                content: "",
                bookmark: null,
                beforeBookmark: null
            }
        },
        tv = function(e) {
            return {
                type: "complete",
                fragments: null,
                content: e,
                bookmark: null,
                beforeBookmark: null
            }
        },
        nv = function(e) {
            return "fragmented" === e.type ? e.fragments.join("") : e.content
        },
        rv = function(e) {
            var t = rr.fromTag("body", Zh.get().getOrThunk(function() {
                var e = document.implementation.createHTMLDocument("undo");
                return Zh.set(A.some(e)), e
            }));
            return aa(t, nv(e)), F(Vi(t, "*[data-mce-bogus]"), _i), t.dom().innerHTML
        },
        ov = function(n) {
            var e, t, r;
            return e = Jh(n.getBody()), -1 !== (t = (r = G(e, function(e) {
                var t = qh.trimInternal(n.serializer, e);
                return 0 < t.length ? [t] : []
            })).join("")).indexOf("</iframe>") ? ev(r) : tv(t)
        },
        iv = function(e, t, n) {
            "fragmented" === t.type ? Qh(t.fragments, e.getBody()) : e.setContent(t.content, {
                format: "raw"
            }), e.selection.moveToBookmark(n ? t.beforeBookmark : t.bookmark)
        },
        av = function(e, t) {
            return !(!e || !t) && (r = t, nv(e) === nv(r) || (n = t, rv(e) === rv(n)));
            var n, r
        };

    function uv(u) {
        var s, r, o = this,
            c = 0,
            l = [],
            t = 0,
            f = function() {
                return 0 === t
            },
            i = function(e) {
                f() && (o.typing = e)
            },
            d = function(e) {
                u.setDirty(e)
            },
            a = function(e) {
                i(!1), o.add({}, e)
            },
            n = function() {
                o.typing && (i(!1), o.add())
            };
        return u.on("init", function() {
            o.add()
        }), u.on("BeforeExecCommand", function(e) {
            var t = e.command;
            "Undo" !== t && "Redo" !== t && "mceRepaint" !== t && (n(), o.beforeChange())
        }), u.on("ExecCommand", function(e) {
            var t = e.command;
            "Undo" !== t && "Redo" !== t && "mceRepaint" !== t && a(e)
        }), u.on("ObjectResizeStart Cut", function() {
            o.beforeChange()
        }), u.on("SaveContent ObjectResized blur", a), u.on("DragEnd", a), u.on("KeyUp", function(e) {
            var t = e.keyCode;
            e.isDefaultPrevented() || ((33 <= t && t <= 36 || 37 <= t && t <= 40 || 45 === t || e.ctrlKey) && (a(), u.nodeChanged()), 46 !== t && 8 !== t || u.nodeChanged(), r && o.typing && !1 === av(ov(u), l[0]) && (!1 === u.isDirty() && (d(!0), u.fire("change", {
                level: l[0],
                lastLevel: null
            })), u.fire("TypingUndo"), r = !1, u.nodeChanged()))
        }), u.on("KeyDown", function(e) {
            var t = e.keyCode;
            if (!e.isDefaultPrevented())
                if (33 <= t && t <= 36 || 37 <= t && t <= 40 || 45 === t) o.typing && a(e);
                else {
                    var n = e.ctrlKey && !e.altKey || e.metaKey;
                    !(t < 16 || 20 < t) || 224 === t || 91 === t || o.typing || n || (o.beforeChange(), i(!0), o.add({}, e), r = !0)
                }
        }), u.on("MouseDown", function(e) {
            o.typing && a(e)
        }), u.on("input", function(e) {
            var t;
            e.inputType && ("insertReplacementText" === e.inputType || "insertText" === (t = e).inputType && null === t.data) && a(e)
        }), u.addShortcut("meta+z", "", "Undo"), u.addShortcut("meta+y,meta+shift+z", "", "Redo"), u.on("AddUndo Undo Redo ClearUndos", function(e) {
            e.isDefaultPrevented() || u.nodeChanged()
        }), o = {
            data: l,
            typing: !1,
            beforeChange: function() {
                f() && (s = Iu.getUndoBookmark(u.selection))
            },
            add: function(e, t) {
                var n, r, o, i = u.settings;
                if (o = ov(u), e = e || {}, e = Yt.extend(e, o), !1 === f() || u.removed) return null;
                if (r = l[c], u.fire("BeforeAddUndo", {
                    level: e,
                    lastLevel: r,
                    originalEvent: t
                }).isDefaultPrevented()) return null;
                if (r && av(r, e)) return null;
                if (l[c] && (l[c].beforeBookmark = s), i.custom_undo_redo_levels && l.length > i.custom_undo_redo_levels) {
                    for (n = 0; n < l.length - 1; n++) l[n] = l[n + 1];
                    l.length--, c = l.length
                }
                e.bookmark = Iu.getUndoBookmark(u.selection), c < l.length - 1 && (l.length = c + 1), l.push(e), c = l.length - 1;
                var a = {
                    level: e,
                    lastLevel: r,
                    originalEvent: t
                };
                return u.fire("AddUndo", a), 0 < c && (d(!0), u.fire("change", a)), e
            },
            undo: function() {
                var e;
                return o.typing && (o.add(), o.typing = !1, i(!1)), 0 < c && (e = l[--c], iv(u, e, !0), d(!0), u.fire("undo", {
                    level: e
                })), e
            },
            redo: function() {
                var e;
                return c < l.length - 1 && (e = l[++c], iv(u, e, !1), d(!0), u.fire("redo", {
                    level: e
                })), e
            },
            clear: function() {
                l = [], c = 0, o.typing = !1, o.data = l, u.fire("ClearUndos")
            },
            hasUndo: function() {
                return 0 < c || o.typing && l[0] && !av(ov(u), l[0])
            },
            hasRedo: function() {
                return c < l.length - 1 && !o.typing
            },
            transact: function(e) {
                return n(), o.beforeChange(), o.ignore(e), o.add()
            },
            ignore: function(e) {
                try {
                    t++, e()
                } finally {
                    t--
                }
            },
            extra: function(e, t) {
                var n, r;
                o.transact(e) && (r = l[c].bookmark, n = l[c - 1], iv(u, n, !0), o.transact(t) && (l[c - 1].beforeBookmark = r))
            }
        }
    }
    var sv, cv, lv = yc.isEq,
        fv = function(e, t, n) {
            var r = e.formatter.get(n);
            if (r)
                for (var o = 0; o < r.length; o++)
                    if (!1 === r[o].inherit && e.dom.is(t, r[o].selector)) return !0;
            return !1
        },
        dv = function(t, e, n, r) {
            var o = t.dom.getRoot();
            return e !== o && (e = t.dom.getParent(e, function(e) {
                return !!fv(t, e, n) || e.parentNode === o || !!pv(t, e, n, r, !0)
            }), pv(t, e, n, r))
        },
        mv = function(e, t, n) {
            return !!lv(t, n.inline) || !!lv(t, n.block) || (n.selector ? 1 === t.nodeType && e.is(t, n.selector) : void 0)
        },
        gv = function(e, t, n, r, o, i) {
            var a, u, s, c = n[r];
            if (n.onmatch) return n.onmatch(t, n, r);
            if (c)
                if ("undefined" == typeof c.length) {
                    for (a in c)
                        if (c.hasOwnProperty(a)) {
                            if (u = "attributes" === r ? e.getAttrib(t, a) : yc.getStyle(e, t, a), o && !u && !n.exact) return;
                            if ((!o || n.exact) && !lv(u, yc.normalizeStyleValue(e, yc.replaceVars(c[a], i), a))) return
                        }
                } else
                    for (s = 0; s < c.length; s++)
                        if ("attributes" === r ? e.getAttrib(t, c[s]) : yc.getStyle(e, t, c[s])) return n;
            return n
        },
        pv = function(e, t, n, r, o) {
            var i, a, u, s, c = e.formatter.get(n),
                l = e.dom;
            if (c && t)
                for (a = 0; a < c.length; a++)
                    if (i = c[a], mv(e.dom, t, i) && gv(l, t, i, "attributes", o, r) && gv(l, t, i, "styles", o, r)) {
                        if (s = i.classes)
                            for (u = 0; u < s.length; u++)
                                if (!e.dom.hasClass(t, s[u])) return;
                        return i
                    }
        },
        hv = {
            matchNode: pv,
            matchName: mv,
            match: function(e, t, n, r) {
                var o;
                return r ? dv(e, r, t, n) : (r = e.selection.getNode(), !!dv(e, r, t, n) || !((o = e.selection.getStart()) === r || !dv(e, o, t, n)))
            },
            matchAll: function(r, o, i) {
                var e, a = [],
                    u = {};
                return e = r.selection.getStart(), r.dom.getParent(e, function(e) {
                    var t, n;
                    for (t = 0; t < o.length; t++) n = o[t], !u[n] && pv(r, e, n, i) && (u[n] = !0, a.push(n))
                }, r.dom.getRoot()), a
            },
            canApply: function(e, t) {
                var n, r, o, i, a, u = e.formatter.get(t),
                    s = e.dom;
                if (u)
                    for (n = e.selection.getStart(), r = yc.getParents(s, n), i = u.length - 1; 0 <= i; i--) {
                        if (!(a = u[i].selector) || u[i].defaultBlock) return !0;
                        for (o = r.length - 1; 0 <= o; o--)
                            if (s.is(r[o], a)) return !0
                    }
                return !1
            },
            matchesUnInheritedFormatSelector: fv
        },
        vv = function(e, t) {
            return e.splitText(t)
        },
        bv = function(e) {
            var t = e.startContainer,
                n = e.startOffset,
                r = e.endContainer,
                o = e.endOffset;
            return t === r && _o.isText(t) ? 0 < n && n < t.nodeValue.length && (t = (r = vv(t, n)).previousSibling, n < o ? (t = r = vv(r, o -= n).previousSibling, o = r.nodeValue.length, n = 0) : o = 0) : (_o.isText(t) && 0 < n && n < t.nodeValue.length && (t = vv(t, n), n = 0), _o.isText(r) && 0 < o && o < r.nodeValue.length && (o = (r = vv(r, o).previousSibling).nodeValue.length)), {
                startContainer: t,
                startOffset: n,
                endContainer: r,
                endOffset: o
            }
        },
        yv = ca,
        Cv = "_mce_caret",
        xv = function(e) {
            return 0 < function(e) {
                for (var t = []; e;) {
                    if (3 === e.nodeType && e.nodeValue !== yv || 1 < e.childNodes.length) return [];
                    1 === e.nodeType && t.push(e), e = e.firstChild
                }
                return t
            }(e).length
        },
        wv = function(e) {
            var t;
            if (e)
                for (e = (t = new ro(e, e)).current(); e; e = t.next())
                    if (3 === e.nodeType) return e;
            return null
        },
        Nv = function(e) {
            var t = rr.fromTag("span");
            return vr(t, {
                id: Cv,
                "data-mce-bogus": "1",
                "data-mce-type": "format-caret"
            }), e && ki(t, rr.fromText(yv)), t
        },
        Ev = function(e, t, n) {
            void 0 === n && (n = !0);
            var r, o = e.dom,
                i = e.selection;
            if (xv(t)) Tf(e, !1, rr.fromDom(t), n);
            else {
                var a = i.getRng(),
                    u = o.getParent(t, o.isBlock),
                    s = ((r = wv(t)) && r.nodeValue.charAt(0) === yv && r.deleteData(0, 1), r);
                a.startContainer === s && 0 < a.startOffset && a.setStart(s, a.startOffset - 1), a.endContainer === s && 0 < a.endOffset && a.setEnd(s, a.endOffset - 1), o.remove(t, !0), u && o.isEmpty(u) && Zc(rr.fromDom(u)), i.setRng(a)
            }
        },
        Sv = function(e, t, n) {
            void 0 === n && (n = !0);
            var r = e.dom,
                o = e.selection;
            if (t) Ev(e, t, n);
            else if (!(t = zu(e.getBody(), o.getStart())))
                for (; t = r.get(Cv);) Ev(e, t, !1)
        },
        kv = function(e, t, n) {
            var r = e.dom,
                o = r.getParent(n, d(yc.isTextBlock, e));
            o && r.isEmpty(o) ? n.parentNode.replaceChild(t, n) : (Qc(rr.fromDom(n)), r.isEmpty(n) ? n.parentNode.replaceChild(t, n) : r.insertAfter(t, n))
        },
        Tv = function(e, t) {
            return e.appendChild(t), t
        },
        Av = function(e, t) {
            var n, r, o = (n = function(e, t) {
                return Tv(e, t.cloneNode(!1))
            }, r = t, function(e, t) {
                for (var n = e.length - 1; 0 <= n; n--) t(e[n], n, e)
            }(e, function(e) {
                r = n(r, e)
            }), r);
            return Tv(o, o.ownerDocument.createTextNode(yv))
        },
        Rv = function(i) {
            i.on("mouseup keydown", function(e) {
                var t, n, r, o;
                t = i, n = e.keyCode, r = t.selection, o = t.getBody(), Sv(t, null, !1), 8 !== n && 46 !== n || !r.isCollapsed() || r.getStart().innerHTML !== yv || Sv(t, zu(o, r.getStart())), 37 !== n && 39 !== n || Sv(t, zu(o, r.getStart()))
            })
        },
        _v = function(e, t) {
            return e.schema.getTextInlineElements().hasOwnProperty(ur(t)) && !Fu(t.dom()) && !_o.isBogus(t.dom())
        },
        Dv = {},
        Bv = qt.filter,
        Ov = qt.each;
    cv = function(e) {
        var t, n, r = e.selection.getRng();
        t = _o.matchNodeNames("pre"), r.collapsed || (n = e.selection.getSelectedBlocks(), Ov(Bv(Bv(n, t), function(e) {
            return t(e.previousSibling) && -1 !== qt.indexOf(n, e.previousSibling)
        }), function(e) {
            var t, n;
            t = e.previousSibling, pn(n = e).remove(), pn(t).append("<br><br>").append(n.childNodes)
        }))
    }, Dv[sv = "pre"] || (Dv[sv] = []), Dv[sv].push(cv);
    var Pv = function(e, t) {
            Ov(Dv[e], function(e) {
                e(t)
            })
        },
        Lv = /^(src|href|style)$/,
        Iv = Yt.each,
        Mv = yc.isEq,
        Fv = function(e, t, n) {
            return e.isChildOf(t, n) && t !== n && !e.isBlock(n)
        },
        zv = function(e, t, n) {
            var r, o, i;
            return r = t[n ? "startContainer" : "endContainer"], o = t[n ? "startOffset" : "endOffset"], _o.isElement(r) && (i = r.childNodes.length - 1, !n && o && o--, r = r.childNodes[i < o ? i : o]), _o.isText(r) && n && o >= r.nodeValue.length && (r = new ro(r, e.getBody()).next() || r), _o.isText(r) && !n && 0 === o && (r = new ro(r, e.getBody()).prev() || r), r
        },
        Uv = function(e, t, n, r) {
            var o = e.create(n, r);
            return t.parentNode.insertBefore(o, t), o.appendChild(t), o
        },
        Vv = function(e, t, n, r, o) {
            var i = rr.fromDom(t),
                a = rr.fromDom(e.create(r, o)),
                u = n ? Ur(i) : zr(i);
            return Ti(a, u), n ? (Ni(i, a), Si(a, i)) : (Ei(i, a), ki(a, i)), a.dom()
        },
        Hv = function(e, t, n, r) {
            return !(t = yc.getNonWhiteSpaceSibling(t, n, r)) || "BR" === t.nodeName || e.isBlock(t)
        },
        jv = function(e, n, r, o, i) {
            var t, a, u, s, c, l, f, d, m, g, p, h, v, b, y = e.dom;
            if (c = y, !(Mv(l = o, (f = n).inline) || Mv(l, f.block) || (f.selector ? _o.isElement(l) && c.is(l, f.selector) : void 0) || (s = o, n.links && "A" === s.tagName))) return !1;
            if ("all" !== n.remove)
                for (Iv(n.styles, function(e, t) {
                    e = yc.normalizeStyleValue(y, yc.replaceVars(e, r), t), "number" == typeof t && (t = e, i = 0), (n.remove_similar || !i || Mv(yc.getStyle(y, i, t), e)) && y.setStyle(o, t, ""), u = 1
                }), u && "" === y.getAttrib(o, "style") && (o.removeAttribute("style"), o.removeAttribute("data-mce-style")), Iv(n.attributes, function(e, t) {
                    var n;
                    if (e = yc.replaceVars(e, r), "number" == typeof t && (t = e, i = 0), !i || Mv(y.getAttrib(i, t), e)) {
                        if ("class" === t && (e = y.getAttrib(o, t)) && (n = "", Iv(e.split(/\s+/), function(e) {
                            /mce\-\w+/.test(e) && (n += (n ? " " : "") + e)
                        }), n)) return void y.setAttrib(o, t, n);
                        "class" === t && o.removeAttribute("className"), Lv.test(t) && o.removeAttribute("data-mce-" + t), o.removeAttribute(t)
                    }
                }), Iv(n.classes, function(e) {
                    e = yc.replaceVars(e, r), i && !y.hasClass(i, e) || y.removeClass(o, e)
                }), a = y.getAttribs(o), t = 0; t < a.length; t++) {
                    var C = a[t].nodeName;
                    if (0 !== C.indexOf("_") && 0 !== C.indexOf("data-")) return !1
                }
            return "none" !== n.remove ? (d = e, g = n, h = (m = o).parentNode, v = d.dom, b = d.settings.forced_root_block, g.block && (b ? h === v.getRoot() && (g.list_block && Mv(m, g.list_block) || Iv(Yt.grep(m.childNodes), function(e) {
                yc.isValid(d, b, e.nodeName.toLowerCase()) ? p ? p.appendChild(e) : (p = Uv(v, e, b), v.setAttribs(p, d.settings.forced_root_block_attrs)) : p = 0
            })) : v.isBlock(m) && !v.isBlock(h) && (Hv(v, m, !1) || Hv(v, m.firstChild, !0, 1) || m.insertBefore(v.create("br"), m.firstChild), Hv(v, m, !0) || Hv(v, m.lastChild, !1, 1) || m.appendChild(v.create("br")))), g.selector && g.inline && !Mv(g.inline, m) || v.remove(m, 1), !0) : void 0
        },
        qv = jv,
        $v = function(s, c, l, e, f) {
            var t, n, d = s.formatter.get(c),
                m = d[0],
                a = !0,
                u = s.dom,
                r = s.selection,
                i = function(e) {
                    var n, t, r, o, i, a, u = (n = s, t = e, r = c, o = l, i = f, Iv(yc.getParents(n.dom, t.parentNode).reverse(), function(e) {
                        var t;
                        a || "_start" === e.id || "_end" === e.id || (t = hv.matchNode(n, e, r, o, i)) && !1 !== t.split && (a = e)
                    }), a);
                    return function(e, t, n, r, o, i, a, u) {
                        var s, c, l, f, d, m, g = e.dom;
                        if (n) {
                            for (m = n.parentNode, s = r.parentNode; s && s !== m; s = s.parentNode) {
                                for (c = g.clone(s, !1), d = 0; d < t.length; d++)
                                    if (jv(e, t[d], u, c, c)) {
                                        c = 0;
                                        break
                                    } c && (l && c.appendChild(l), f || (f = c), l = c)
                            }!i || a.mixed && g.isBlock(n) || (r = g.split(n, r)), l && (o.parentNode.insertBefore(l, o), f.appendChild(o))
                        }
                        return r
                    }(s, d, u, e, e, !0, m, l)
                },
                g = function(e) {
                    var t, n, r, o, i;
                    if (_o.isElement(e) && u.getContentEditable(e) && (o = a, a = "true" === u.getContentEditable(e), i = !0), t = Yt.grep(e.childNodes), a && !i)
                        for (n = 0, r = d.length; n < r && !jv(s, d[n], l, e, e); n++);
                    if (m.deep && t.length) {
                        for (n = 0, r = t.length; n < r; n++) g(t[n]);
                        i && (a = o)
                    }
                },
                p = function(e) {
                    var t, n = u.get(e ? "_start" : "_end"),
                        r = n[e ? "firstChild" : "lastChild"];
                    return pc(t = r) && _o.isElement(t) && ("_start" === t.id || "_end" === t.id) && (r = r[e ? "firstChild" : "lastChild"]), _o.isText(r) && 0 === r.data.length && (r = e ? n.previousSibling || n.nextSibling : n.nextSibling || n.previousSibling), u.remove(n, !0), r
                },
                o = function(e) {
                    var t, n, r = e.commonAncestorContainer;
                    if (e = Dc(s, e, d, !0), m.split) {
                        if (e = bv(e), (t = zv(s, e, !0)) !== (n = zv(s, e))) {
                            if (/^(TR|TH|TD)$/.test(t.nodeName) && t.firstChild && (t = "TR" === t.nodeName ? t.firstChild.firstChild || t : t.firstChild || t), r && /^T(HEAD|BODY|FOOT|R)$/.test(r.nodeName) && /^(TH|TD)$/.test(n.nodeName) && n.firstChild && (n = n.firstChild || n), Fv(u, t, n)) {
                                var o = A.from(t.firstChild).getOr(t);
                                return i(Vv(u, o, !0, "span", {
                                    id: "_start",
                                    "data-mce-type": "bookmark"
                                })), void p(!0)
                            }
                            if (Fv(u, n, t)) return o = A.from(n.lastChild).getOr(n), i(Vv(u, o, !1, "span", {
                                id: "_end",
                                "data-mce-type": "bookmark"
                            })), void p(!1);
                            t = Uv(u, t, "span", {
                                id: "_start",
                                "data-mce-type": "bookmark"
                            }), n = Uv(u, n, "span", {
                                id: "_end",
                                "data-mce-type": "bookmark"
                            }), i(t), i(n), t = p(!0), n = p()
                        } else t = n = i(t);
                        e.startContainer = t.parentNode ? t.parentNode : t, e.startOffset = u.nodeIndex(t), e.endContainer = n.parentNode ? n.parentNode : n, e.endOffset = u.nodeIndex(n) + 1
                    }
                    Oc(u, e, function(e) {
                        Iv(e, function(e) {
                            g(e), _o.isElement(e) && "underline" === s.dom.getStyle(e, "text-decoration") && e.parentNode && "underline" === yc.getTextDecoration(u, e.parentNode) && jv(s, {
                                deep: !1,
                                exact: !0,
                                inline: "span",
                                styles: {
                                    textDecoration: "underline"
                                }
                            }, null, e)
                        })
                    })
                };
            if (e) e.nodeType ? ((n = u.createRng()).setStartBefore(e), n.setEndAfter(e), o(n)) : o(e);
            else if ("false" !== u.getContentEditable(r.getNode())) r.isCollapsed() && m.inline && !u.select("td[data-mce-selected],th[data-mce-selected]").length ? function(e, t, n, r) {
                var o, i, a, u, s, c, l, f = e.dom,
                    d = e.selection,
                    m = [],
                    g = d.getRng();
                for (o = g.startContainer, i = g.startOffset, 3 === (s = o).nodeType && (i !== o.nodeValue.length && (u = !0), s = s.parentNode); s;) {
                    if (hv.matchNode(e, s, t, n, r)) {
                        c = s;
                        break
                    }
                    s.nextSibling && (u = !0), m.push(s), s = s.parentNode
                }
                if (c)
                    if (u) {
                        a = d.getBookmark(), g.collapse(!0);
                        var p = Dc(e, g, e.formatter.get(t), !0);
                        p = bv(p), e.formatter.remove(t, n, p), d.moveToBookmark(a)
                    } else {
                        l = zu(e.getBody(), c);
                        var h = Nv(!1).dom(),
                            v = Av(m, h);
                        kv(e, h, l || c), Ev(e, l, !1), d.setCursorLocation(v, 1), f.isEmpty(c) && f.remove(c)
                    }
            }(s, c, l, f) : (t = Iu.getPersistentBookmark(s.selection, !0), o(r.getRng()), r.moveToBookmark(t), m.inline && hv.match(s, c, l, r.getStart()) && yc.moveStart(u, r, r.getRng()), s.nodeChanged());
            else {
                e = r.getNode();
                for (var h = 0, v = d.length; h < v && (!d[h].ceFalseOverride || !jv(s, d[h], l, e, e)); h++);
            }
        },
        Wv = Yt.each,
        Kv = function(e) {
            return e && 1 === e.nodeType && !pc(e) && !Fu(e) && !_o.isBogus(e)
        },
        Xv = function(e, t) {
            var n;
            for (n = e; n; n = n[t]) {
                if (3 === n.nodeType && 0 !== n.nodeValue.length) return e;
                if (1 === n.nodeType && !pc(n)) return n
            }
            return e
        },
        Yv = function(e, t, n) {
            var r, o, i = new Jc(e);
            if (t && n && (t = Xv(t, "previousSibling"), n = Xv(n, "nextSibling"), i.compare(t, n))) {
                for (r = t.nextSibling; r && r !== n;) r = (o = r).nextSibling, t.appendChild(o);
                return e.remove(n), Yt.each(Yt.grep(n.childNodes), function(e) {
                    t.appendChild(e)
                }), t
            }
            return n
        },
        Gv = function(e, t, n) {
            Wv(e.childNodes, function(e) {
                Kv(e) && (t(e) && n(e), e.hasChildNodes() && Gv(e, t, n))
            })
        },
        Jv = function(n, e) {
            return d(function(e, t) {
                return !(!t || !yc.getStyle(n, t, e))
            }, e)
        },
        Qv = function(r, e, t) {
            return d(function(e, t, n) {
                r.setStyle(n, e, t), "" === n.getAttribute("style") && n.removeAttribute("style"), Zv(r, n)
            }, e, t)
        },
        Zv = function(e, t) {
            "SPAN" === t.nodeName && 0 === e.getAttribs(t).length && e.remove(t, !0)
        },
        eb = function(e, t) {
            var n;
            1 === t.nodeType && t.parentNode && 1 === t.parentNode.nodeType && (n = yc.getTextDecoration(e, t.parentNode), e.getStyle(t, "color") && n ? e.setStyle(t, "text-decoration", n) : e.getStyle(t, "text-decoration") === n && e.setStyle(t, "text-decoration", null))
        },
        tb = function(n, e, r, o) {
            Wv(e, function(t) {
                Wv(n.dom.select(t.inline, o), function(e) {
                    Kv(e) && qv(n, t, r, e, t.exact ? e : null)
                }),
                    function(r, e, t) {
                        if (e.clear_child_styles) {
                            var n = e.links ? "*:not(a)" : "*";
                            Wv(r.select(n, t), function(n) {
                                Kv(n) && Wv(e.styles, function(e, t) {
                                    r.setStyle(n, t, "")
                                })
                            })
                        }
                    }(n.dom, t, o)
            })
        },
        nb = function(e, t, n, r) {
            (t.styles.color || t.styles.textDecoration) && (Yt.walk(r, d(eb, e), "childNodes"), eb(e, r))
        },
        rb = function(e, t, n, r) {
            t.styles && t.styles.backgroundColor && Gv(r, Jv(e, "fontSize"), Qv(e, "backgroundColor", yc.replaceVars(t.styles.backgroundColor, n)))
        },
        ob = function(e, t, n, r) {
            "sub" !== t.inline && "sup" !== t.inline || (Gv(r, Jv(e, "fontSize"), Qv(e, "fontSize", "")), e.remove(e.select("sup" === t.inline ? "sub" : "sup", r), !0))
        },
        ib = function(e, t, n, r) {
            r && !1 !== t.merge_siblings && (r = Yv(e, yc.getNonWhiteSpaceSibling(r), r), r = Yv(e, r, yc.getNonWhiteSpaceSibling(r, !0)))
        },
        ab = function(t, n, r, o, i) {
            hv.matchNode(t, i.parentNode, r, o) && qv(t, n, o, i) || n.merge_with_parents && t.dom.getParent(i.parentNode, function(e) {
                if (hv.matchNode(t, e, r, o)) return qv(t, n, o, i), !0
            })
        },
        ub = Yt.each,
        sb = function(g, p, h, r) {
            var e, t, v = g.formatter.get(p),
                b = v[0],
                o = !r && g.selection.isCollapsed(),
                i = g.dom,
                n = g.selection,
                y = function(n, e) {
                    if (e = e || b, n) {
                        if (e.onformat && e.onformat(n, e, h, r), ub(e.styles, function(e, t) {
                            i.setStyle(n, t, yc.replaceVars(e, h))
                        }), e.styles) {
                            var t = i.getAttrib(n, "style");
                            t && n.setAttribute("data-mce-style", t)
                        }
                        ub(e.attributes, function(e, t) {
                            i.setAttrib(n, t, yc.replaceVars(e, h))
                        }), ub(e.classes, function(e) {
                            e = yc.replaceVars(e, h), i.hasClass(n, e) || i.addClass(n, e)
                        })
                    }
                },
                C = function(e, t) {
                    var n = !1;
                    return !!b.selector && (ub(e, function(e) {
                        if (!("collapsed" in e && e.collapsed !== o)) return i.is(t, e.selector) && !Fu(t) ? (y(t, e), !(n = !0)) : void 0
                    }), n)
                },
                a = function(s, e, t, c) {
                    var l, f, d = [],
                        m = !0;
                    l = b.inline || b.block, f = s.create(l), y(f), Oc(s, e, function(e) {
                        var a, u = function(e) {
                            var t, n, r, o;
                            if (o = m, t = e.nodeName.toLowerCase(), n = e.parentNode.nodeName.toLowerCase(), 1 === e.nodeType && s.getContentEditable(e) && (o = m, m = "true" === s.getContentEditable(e), r = !0), yc.isEq(t, "br")) return a = 0, void(b.block && s.remove(e));
                            if (b.wrapper && hv.matchNode(g, e, p, h)) a = 0;
                            else {
                                if (m && !r && b.block && !b.wrapper && yc.isTextBlock(g, t) && yc.isValid(g, n, l)) return e = s.rename(e, l), y(e), d.push(e), void(a = 0);
                                if (b.selector) {
                                    var i = C(v, e);
                                    if (!b.inline || i) return void(a = 0)
                                }!m || r || !yc.isValid(g, l, t) || !yc.isValid(g, n, l) || !c && 3 === e.nodeType && 1 === e.nodeValue.length && 65279 === e.nodeValue.charCodeAt(0) || Fu(e) || b.inline && s.isBlock(e) ? (a = 0, ub(Yt.grep(e.childNodes), u), r && (m = o), a = 0) : (a || (a = s.clone(f, !1), e.parentNode.insertBefore(a, e), d.push(a)), a.appendChild(e))
                            }
                        };
                        ub(e, u)
                    }), !0 === b.links && ub(d, function(e) {
                        var t = function(e) {
                            "A" === e.nodeName && y(e, b), ub(Yt.grep(e.childNodes), t)
                        };
                        t(e)
                    }), ub(d, function(e) {
                        var t, n, r, o, i, a = function(e) {
                            var n = !1;
                            return ub(e.childNodes, function(e) {
                                if ((t = e) && 1 === t.nodeType && !pc(t) && !Fu(t) && !_o.isBogus(t)) return n = e, !1;
                                var t
                            }), n
                        };
                        n = 0, ub(e.childNodes, function(e) {
                            yc.isWhiteSpaceNode(e) || pc(e) || n++
                        }), t = n, !(1 < d.length) && s.isBlock(e) || 0 !== t ? (b.inline || b.wrapper) && (b.exact || 1 !== t || ((o = a(r = e)) && !pc(o) && hv.matchName(s, o, b) && (i = s.clone(o, !1), y(i), s.replace(i, r, !0), s.remove(o, 1)), e = i || r), tb(g, v, h, e), ab(g, b, p, h, e), rb(s, b, h, e), ob(s, b, h, e), ib(s, b, h, e)) : s.remove(e, 1)
                    })
                };
            if ("false" !== i.getContentEditable(n.getNode())) {
                if (b) {
                    if (r) r.nodeType ? C(v, r) || ((t = i.createRng()).setStartBefore(r), t.setEndAfter(r), a(i, Dc(g, t, v), 0, !0)) : a(i, r, 0, !0);
                    else if (o && b.inline && !i.select("td[data-mce-selected],th[data-mce-selected]").length) ! function(e, t, n) {
                        var r, o, i, a, u, s, c = e.selection;
                        a = (r = c.getRng(!0)).startOffset, s = r.startContainer.nodeValue, (o = zu(e.getBody(), c.getStart())) && (i = wv(o));
                        var l, f, d = /[^\s\u00a0\u00ad\u200b\ufeff]/;
                        s && 0 < a && a < s.length && d.test(s.charAt(a)) && d.test(s.charAt(a - 1)) ? (u = c.getBookmark(), r.collapse(!0), r = Dc(e, r, e.formatter.get(t)), r = bv(r), e.formatter.apply(t, n, r), c.moveToBookmark(u)) : (o && i.nodeValue === yv || (l = e.getDoc(), f = Nv(!0).dom(), i = (o = l.importNode(f, !0)).firstChild, r.insertNode(o), a = 1), e.formatter.apply(t, n, o), c.setCursorLocation(i, a))
                    }(g, p, h);
                    else {
                        var u = g.selection.getNode();
                        g.settings.forced_root_block || !v[0].defaultBlock || i.getParent(u, i.isBlock) || sb(g, v[0].defaultBlock), g.selection.setRng(il(g.selection.getRng())), e = Iu.getPersistentBookmark(g.selection, !0), a(i, Dc(g, n.getRng(), v)), b.styles && nb(i, b, h, u), n.moveToBookmark(e), yc.moveStart(i, n, n.getRng()), g.nodeChanged()
                    }
                    Pv(p, g)
                }
            } else {
                r = n.getNode();
                for (var s = 0, c = v.length; s < c; s++)
                    if (v[s].ceFalseOverride && i.is(r, v[s].selector)) return void y(r, v[s])
            }
        },
        cb = {
            applyFormat: sb
        },
        lb = Yt.each,
        fb = function(e, t, n, r, o) {
            var i, a, u, s, c, l, f, d;
            null === t.get() && (a = e, u = {}, (i = t).set({}), a.on("NodeChange", function(n) {
                var r = yc.getParents(a.dom, n.element),
                    o = {};
                r = Yt.grep(r, function(e) {
                    return 1 === e.nodeType && !e.getAttribute("data-mce-bogus")
                }), lb(i.get(), function(e, n) {
                    lb(r, function(t) {
                        return a.formatter.matchNode(t, n, {}, e.similar) ? (u[n] || (lb(e, function(e) {
                            e(!0, {
                                node: t,
                                format: n,
                                parents: r
                            })
                        }), u[n] = e), o[n] = e, !1) : !hv.matchesUnInheritedFormatSelector(a, t, n) && void 0
                    })
                }), lb(u, function(e, t) {
                    o[t] || (delete u[t], lb(e, function(e) {
                        e(!1, {
                            node: n.element,
                            format: t,
                            parents: r
                        })
                    }))
                })
            })), c = n, l = r, f = o, d = (s = t).get(), lb(c.split(","), function(e) {
                d[e] || (d[e] = [], d[e].similar = f), d[e].push(l)
            }), s.set(d)
        },
        db = {
            get: function(r) {
                var t = {
                    valigntop: [{
                        selector: "td,th",
                        styles: {
                            verticalAlign: "top"
                        }
                    }],
                    valignmiddle: [{
                        selector: "td,th",
                        styles: {
                            verticalAlign: "middle"
                        }
                    }],
                    valignbottom: [{
                        selector: "td,th",
                        styles: {
                            verticalAlign: "bottom"
                        }
                    }],
                    alignleft: [{
                        selector: "figure.image",
                        collapsed: !1,
                        classes: "align-left",
                        ceFalseOverride: !0,
                        preview: "font-family font-size"
                    }, {
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                        styles: {
                            textAlign: "left"
                        },
                        inherit: !1,
                        preview: !1,
                        defaultBlock: "div"
                    }, {
                        selector: "img,table",
                        collapsed: !1,
                        styles: {
                            "float": "left"
                        },
                        preview: "font-family font-size"
                    }],
                    aligncenter: [{
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                        styles: {
                            textAlign: "center"
                        },
                        inherit: !1,
                        preview: "font-family font-size",
                        defaultBlock: "div"
                    }, {
                        selector: "figure.image",
                        collapsed: !1,
                        classes: "align-center",
                        ceFalseOverride: !0,
                        preview: "font-family font-size"
                    }, {
                        selector: "img",
                        collapsed: !1,
                        styles: {
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto"
                        },
                        preview: !1
                    }, {
                        selector: "table",
                        collapsed: !1,
                        styles: {
                            marginLeft: "auto",
                            marginRight: "auto"
                        },
                        preview: "font-family font-size"
                    }],
                    alignright: [{
                        selector: "figure.image",
                        collapsed: !1,
                        classes: "align-right",
                        ceFalseOverride: !0,
                        preview: "font-family font-size"
                    }, {
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                        styles: {
                            textAlign: "right"
                        },
                        inherit: !1,
                        preview: "font-family font-size",
                        defaultBlock: "div"
                    }, {
                        selector: "img,table",
                        collapsed: !1,
                        styles: {
                            "float": "right"
                        },
                        preview: "font-family font-size"
                    }],
                    alignjustify: [{
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                        styles: {
                            textAlign: "justify"
                        },
                        inherit: !1,
                        defaultBlock: "div",
                        preview: "font-family font-size"
                    }],
                    bold: [{
                        inline: "strong",
                        remove: "all"
                    }, {
                        inline: "span",
                        styles: {
                            fontWeight: "bold"
                        }
                    }, {
                        inline: "b",
                        remove: "all"
                    }],
                    italic: [{
                        inline: "em",
                        remove: "all"
                    }, {
                        inline: "span",
                        styles: {
                            fontStyle: "italic"
                        }
                    }, {
                        inline: "i",
                        remove: "all"
                    }],
                    underline: [{
                        inline: "span",
                        styles: {
                            textDecoration: "underline"
                        },
                        exact: !0
                    }, {
                        inline: "u",
                        remove: "all"
                    }],
                    strikethrough: [{
                        inline: "span",
                        styles: {
                            textDecoration: "line-through"
                        },
                        exact: !0
                    }, {
                        inline: "strike",
                        remove: "all"
                    }],
                    forecolor: {
                        inline: "span",
                        styles: {
                            color: "%value"
                        },
                        links: !0,
                        remove_similar: !0,
                        clear_child_styles: !0
                    },
                    hilitecolor: {
                        inline: "span",
                        styles: {
                            backgroundColor: "%value"
                        },
                        links: !0,
                        remove_similar: !0,
                        clear_child_styles: !0
                    },
                    fontname: {
                        inline: "span",
                        toggle: !1,
                        styles: {
                            fontFamily: "%value"
                        },
                        clear_child_styles: !0
                    },
                    fontsize: {
                        inline: "span",
                        toggle: !1,
                        styles: {
                            fontSize: "%value"
                        },
                        clear_child_styles: !0
                    },
                    fontsize_class: {
                        inline: "span",
                        attributes: {
                            "class": "%value"
                        }
                    },
                    blockquote: {
                        block: "blockquote",
                        wrapper: 1,
                        remove: "all"
                    },
                    subscript: {
                        inline: "sub"
                    },
                    superscript: {
                        inline: "sup"
                    },
                    code: {
                        inline: "code"
                    },
                    link: {
                        inline: "a",
                        selector: "a",
                        remove: "all",
                        split: !0,
                        deep: !0,
                        onmatch: function() {
                            return !0
                        },
                        onformat: function(n, e, t) {
                            Yt.each(t, function(e, t) {
                                r.setAttrib(n, t, e)
                            })
                        }
                    },
                    removeformat: [{
                        selector: "b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins",
                        remove: "all",
                        split: !0,
                        expand: !1,
                        block_expand: !0,
                        deep: !0
                    }, {
                        selector: "span",
                        attributes: ["style", "class"],
                        remove: "empty",
                        split: !0,
                        expand: !1,
                        deep: !0
                    }, {
                        selector: "*",
                        attributes: ["style", "class"],
                        split: !1,
                        expand: !1,
                        deep: !0
                    }]
                };
                return Yt.each("p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(/\s/), function(e) {
                    t[e] = {
                        block: e,
                        remove: "all"
                    }
                }), t
            }
        },
        mb = Yt.each,
        gb = gi.DOM,
        pb = function(e, t) {
            var n, o, r, m = t && t.schema || ti({}),
                g = function(e) {
                    var t, n, r;
                    return o = "string" == typeof e ? {
                        name: e,
                        classes: [],
                        attrs: {}
                    } : e, t = gb.create(o.name), n = t, (r = o).classes.length && gb.addClass(n, r.classes.join(" ")), gb.setAttribs(n, r.attrs), t
                },
                p = function(n, e, t) {
                    var r, o, i, a, u, s, c, l, f = 0 < e.length && e[0],
                        d = f && f.name;
                    if (u = d, s = "string" != typeof(a = n) ? a.nodeName.toLowerCase() : a, c = m.getElementRule(s), i = !(!(l = c && c.parentsRequired) || !l.length) && (u && -1 !== Yt.inArray(l, u) ? u : l[0])) d === i ? (o = e[0], e = e.slice(1)) : o = i;
                    else if (f) o = e[0], e = e.slice(1);
                    else if (!t) return n;
                    return o && (r = g(o)).appendChild(n), t && (r || (r = gb.create("div")).appendChild(n), Yt.each(t, function(e) {
                        var t = g(e);
                        r.insertBefore(t, n)
                    })), p(r, e, o && o.siblings)
                };
            return e && e.length ? (o = e[0], n = g(o), (r = gb.create("div")).appendChild(p(n, e.slice(1), o.siblings)), r) : ""
        },
        hb = function(e) {
            var t, a = {
                classes: [],
                attrs: {}
            };
            return "*" !== (e = a.selector = Yt.trim(e)) && (t = e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g, function(e, t, n, r, o) {
                switch (t) {
                    case "#":
                        a.attrs.id = n;
                        break;
                    case ".":
                        a.classes.push(n);
                        break;
                    case ":":
                        -1 !== Yt.inArray("checked disabled enabled read-only required".split(" "), n) && (a.attrs[n] = n)
                }
                if ("[" === r) {
                    var i = o.match(/([\w\-]+)(?:\=\"([^\"]+))?/);
                    i && (a.attrs[i[1]] = i[2])
                }
                return ""
            })), a.name = t || "div", a
        },
        vb = function(e) {
            return e && "string" == typeof e ? (e = (e = e.split(/\s*,\s*/)[0]).replace(/\s*(~\+|~|\+|>)\s*/g, "$1"), Yt.map(e.split(/(?:>|\s+(?![^\[\]]+\]))/), function(e) {
                var t = Yt.map(e.split(/(?:~\+|~|\+)/), hb),
                    n = t.pop();
                return t.length && (n.siblings = t), n
            }).reverse()) : []
        },
        bb = function(n, e) {
            var t, r, o, i, a, u, s = "";
            if (!1 === (u = n.settings.preview_styles)) return "";
            "string" != typeof u && (u = "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow");
            var c = function(e) {
                return e.replace(/%(\w+)/g, "")
            };
            if ("string" == typeof e) {
                if (!(e = n.formatter.get(e))) return;
                e = e[0]
            }
            return "preview" in e && !1 === (u = e.preview) ? "" : (t = e.block || e.inline || "span", (i = vb(e.selector)).length ? (i[0].name || (i[0].name = t), t = e.selector, r = pb(i, n)) : r = pb([t], n), o = gb.select(t, r)[0] || r.firstChild, mb(e.styles, function(e, t) {
                (e = c(e)) && gb.setStyle(o, t, e)
            }), mb(e.attributes, function(e, t) {
                (e = c(e)) && gb.setAttrib(o, t, e)
            }), mb(e.classes, function(e) {
                e = c(e), gb.hasClass(o, e) || gb.addClass(o, e)
            }), n.fire("PreviewFormats"), gb.setStyles(r, {
                position: "absolute",
                left: -65535
            }), n.getBody().appendChild(r), a = gb.getStyle(n.getBody(), "fontSize", !0), a = /px$/.test(a) ? parseInt(a, 10) : 0, mb(u.split(" "), function(e) {
                var t = gb.getStyle(o, e, !0);
                if (!("background-color" === e && /transparent|rgba\s*\([^)]+,\s*0\)/.test(t) && (t = gb.getStyle(n.getBody(), e, !0), "#ffffff" === gb.toHex(t).toLowerCase()) || "color" === e && "#000000" === gb.toHex(t).toLowerCase())) {
                    if ("font-size" === e && /em|%$/.test(t)) {
                        if (0 === a) return;
                        t = parseFloat(t) / (/%$/.test(t) ? 100 : 1) * a + "px"
                    }
                    "border" === e && t && (s += "padding:0 2px;"), s += e + ":" + t + ";"
                }
            }), n.fire("AfterPreviewFormats"), gb.remove(r), s)
        },
        yb = function(e, t, n, r, o) {
            var i = t.get(n);
            !hv.match(e, n, r, o) || "toggle" in i[0] && !i[0].toggle ? cb.applyFormat(e, n, r, o) : $v(e, n, r, o)
        },
        Cb = function(e) {
            e.addShortcut("meta+b", "", "Bold"), e.addShortcut("meta+i", "", "Italic"), e.addShortcut("meta+u", "", "Underline");
            for (var t = 1; t <= 6; t++) e.addShortcut("access+" + t, "", ["FormatBlock", !1, "h" + t]);
            e.addShortcut("access+7", "", ["FormatBlock", !1, "p"]), e.addShortcut("access+8", "", ["FormatBlock", !1, "div"]), e.addShortcut("access+9", "", ["FormatBlock", !1, "address"])
        };

    function xb(e) {
        var t, n, r, o = (t = e, n = {}, (r = function(e, t) {
                e && ("string" != typeof e ? Yt.each(e, function(e, t) {
                    r(t, e)
                }) : (t = t.length ? t : [t], Yt.each(t, function(e) {
                    "undefined" == typeof e.deep && (e.deep = !e.selector), "undefined" == typeof e.split && (e.split = !e.selector || e.inline), "undefined" == typeof e.remove && e.selector && !e.inline && (e.remove = "none"), e.selector && e.inline && (e.mixed = !0, e.block_expand = !0), "string" == typeof e.classes && (e.classes = e.classes.split(/\s+/))
                }), n[e] = t))
            })(db.get(t.dom)), r(t.settings.formats), {
                get: function(e) {
                    return e ? n[e] : n
                },
                register: r,
                unregister: function(e) {
                    return e && n[e] && delete n[e], n
                }
            }),
            i = Bi(null);
        return Cb(e), Rv(e), {
            get: o.get,
            register: o.register,
            unregister: o.unregister,
            apply: d(cb.applyFormat, e),
            remove: d($v, e),
            toggle: d(yb, e, o),
            match: d(hv.match, e),
            matchAll: d(hv.matchAll, e),
            matchNode: d(hv.matchNode, e),
            canApply: d(hv.canApply, e),
            formatChanged: d(fb, e, i),
            getCssText: d(bb, e)
        }
    }
    var wb, Nb = Object.prototype.hasOwnProperty,
        Eb = (wb = function(e, t) {
            return t
        }, function() {
            for (var e = new Array(arguments.length), t = 0; t < e.length; t++) e[t] = arguments[t];
            if (0 === e.length) throw new Error("Can't merge zero objects");
            for (var n = {}, r = 0; r < e.length; r++) {
                var o = e[r];
                for (var i in o) Nb.call(o, i) && (n[i] = wb(n[i], o[i]))
            }
            return n
        }),
        Sb = {
            register: function(t, s, c) {
                t.addAttributeFilter("data-mce-tabindex", function(e, t) {
                    for (var n, r = e.length; r--;)(n = e[r]).attr("tabindex", n.attributes.map["data-mce-tabindex"]), n.attr(t, null)
                }), t.addAttributeFilter("src,href,style", function(e, t) {
                    for (var n, r, o = e.length, i = "data-mce-" + t, a = s.url_converter, u = s.url_converter_scope; o--;)(r = (n = e[o]).attributes.map[i]) !== undefined ? (n.attr(t, 0 < r.length ? r : null), n.attr(i, null)) : (r = n.attributes.map[t], "style" === t ? r = c.serializeStyle(c.parseStyle(r), n.name) : a && (r = a.call(u, r, t, n.name)), n.attr(t, 0 < r.length ? r : null))
                }), t.addAttributeFilter("class", function(e) {
                    for (var t, n, r = e.length; r--;)(n = (t = e[r]).attr("class")) && (n = t.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g, ""), t.attr("class", 0 < n.length ? n : null))
                }), t.addAttributeFilter("data-mce-type", function(e, t, n) {
                    for (var r, o = e.length; o--;) "bookmark" !== (r = e[o]).attributes.map["data-mce-type"] || n.cleanup || r.remove()
                }), t.addNodeFilter("noscript", function(e) {
                    for (var t, n = e.length; n--;)(t = e[n].firstChild) && (t.value = qo.decode(t.value))
                }), t.addNodeFilter("script,style", function(e, t) {
                    for (var n, r, o, i = e.length, a = function(e) {
                        return e.replace(/(<!--\[CDATA\[|\]\]-->)/g, "\n").replace(/^[\r\n]*|[\r\n]*$/g, "").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi, "").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g, "")
                    }; i--;) r = (n = e[i]).firstChild ? n.firstChild.value : "", "script" === t ? ((o = n.attr("type")) && n.attr("type", "mce-no/type" === o ? null : o.replace(/^mce\-/, "")), "xhtml" === s.element_format && 0 < r.length && (n.firstChild.value = "// <![CDATA[\n" + a(r) + "\n// ]]>")) : "xhtml" === s.element_format && 0 < r.length && (n.firstChild.value = "\x3c!--\n" + a(r) + "\n--\x3e")
                }), t.addNodeFilter("#comment", function(e) {
                    for (var t, n = e.length; n--;) 0 === (t = e[n]).value.indexOf("[CDATA[") ? (t.name = "#cdata", t.type = 4, t.value = t.value.replace(/^\[CDATA\[|\]\]$/g, "")) : 0 === t.value.indexOf("mce:protected ") && (t.name = "#text", t.type = 3, t.raw = !0, t.value = unescape(t.value).substr(14))
                }), t.addNodeFilter("xml:namespace,input", function(e, t) {
                    for (var n, r = e.length; r--;) 7 === (n = e[r]).type ? n.remove() : 1 === n.type && ("input" !== t || "type" in n.attributes.map || n.attr("type", "text"))
                }), t.addAttributeFilter("data-mce-type", function(e) {
                    F(e, function(e) {
                        "format-caret" === e.attr("data-mce-type") && (e.isEmpty(t.schema.getNonEmptyElements()) ? e.remove() : e.unwrap())
                    })
                }), t.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize", function(e, t) {
                    for (var n = e.length; n--;) e[n].attr(t, null)
                })
            },
            trimTrailingBr: function(e) {
                var t, n, r = function(e) {
                    return e && "br" === e.name
                };
                r(t = e.lastChild) && r(n = t.prev) && (t.remove(), n.remove())
            }
        },
        kb = {
            process: function(e, t, n) {
                return f = n, (l = e) && l.hasEventListeners("PreProcess") && !f.no_events ? (o = t, i = n, c = (r = e).dom, o = o.cloneNode(!0), (a = document.implementation).createHTMLDocument && (u = a.createHTMLDocument(""), Yt.each("BODY" === o.nodeName ? o.childNodes : [o], function(e) {
                    u.body.appendChild(u.importNode(e, !0))
                }), o = "BODY" !== o.nodeName ? u.body.firstChild : u.body, s = c.doc, c.doc = u), _g(r, Eb(i, {
                    node: o
                })), s && (c.doc = s), o) : t;
                var r, o, i, a, u, s, c, l, f
            }
        },
        Tb = function(e, a, u) {
            e.addNodeFilter("font", function(e) {
                F(e, function(e) {
                    var t, n = a.parse(e.attr("style")),
                        r = e.attr("color"),
                        o = e.attr("face"),
                        i = e.attr("size");
                    r && (n.color = r), o && (n["font-family"] = o), i && (n["font-size"] = u[parseInt(e.attr("size"), 10) - 1]), e.name = "span", e.attr("style", a.serialize(n)), t = e, F(["color", "face", "size"], function(e) {
                        t.attr(e, null)
                    })
                })
            })
        },
        Ab = function(e, t) {
            var n, r = ri();
            t.convert_fonts_to_spans && Tb(e, r, Yt.explode(t.font_size_legacy_values)), n = r, e.addNodeFilter("strike", function(e) {
                F(e, function(e) {
                    var t = n.parse(e.attr("style"));
                    t["text-decoration"] = "line-through", e.name = "span", e.attr("style", n.serialize(t))
                })
            })
        },
        Rb = {
            register: function(e, t) {
                t.inline_styles && Ab(e, t)
            }
        },
        _b = /^[ \t\r\n]*$/,
        Db = {
            "#text": 3,
            "#comment": 8,
            "#cdata": 4,
            "#pi": 7,
            "#doctype": 10,
            "#document-fragment": 11
        },
        Bb = function(e, t, n) {
            var r, o, i = n ? "lastChild" : "firstChild",
                a = n ? "prev" : "next";
            if (e[i]) return e[i];
            if (e !== t) {
                if (r = e[a]) return r;
                for (o = e.parent; o && o !== t; o = o.parent)
                    if (r = o[a]) return r
            }
        },
        Ob = function() {
            function a(e, t) {
                this.name = e, 1 === (this.type = t) && (this.attributes = [], this.attributes.map = {})
            }
            return a.create = function(e, t) {
                var n, r;
                if (n = new a(e, Db[e] || 1), t)
                    for (r in t) n.attr(r, t[r]);
                return n
            }, a.prototype.replace = function(e) {
                return e.parent && e.remove(), this.insert(e, this), this.remove(), this
            }, a.prototype.attr = function(e, t) {
                var n, r;
                if ("string" != typeof e) {
                    for (r in e) this.attr(r, e[r]);
                    return this
                }
                if (n = this.attributes) {
                    if (t !== undefined) {
                        if (null === t) {
                            if (e in n.map)
                                for (delete n.map[e], r = n.length; r--;)
                                    if (n[r].name === e) return n = n.splice(r, 1), this;
                            return this
                        }
                        if (e in n.map) {
                            for (r = n.length; r--;)
                                if (n[r].name === e) {
                                    n[r].value = t;
                                    break
                                }
                        } else n.push({
                            name: e,
                            value: t
                        });
                        return n.map[e] = t, this
                    }
                    return n.map[e]
                }
            }, a.prototype.clone = function() {
                var e, t, n, r, o, i = new a(this.name, this.type);
                if (n = this.attributes) {
                    for ((o = []).map = {}, e = 0, t = n.length; e < t; e++) "id" !== (r = n[e]).name && (o[o.length] = {
                        name: r.name,
                        value: r.value
                    }, o.map[r.name] = r.value);
                    i.attributes = o
                }
                return i.value = this.value, i.shortEnded = this.shortEnded, i
            }, a.prototype.wrap = function(e) {
                return this.parent.insert(e, this), e.append(this), this
            }, a.prototype.unwrap = function() {
                var e, t;
                for (e = this.firstChild; e;) t = e.next, this.insert(e, this, !0), e = t;
                this.remove()
            }, a.prototype.remove = function() {
                var e = this.parent,
                    t = this.next,
                    n = this.prev;
                return e && (e.firstChild === this ? (e.firstChild = t) && (t.prev = null) : n.next = t, e.lastChild === this ? (e.lastChild = n) && (n.next = null) : t.prev = n, this.parent = this.next = this.prev = null), this
            }, a.prototype.append = function(e) {
                var t;
                return e.parent && e.remove(), (t = this.lastChild) ? ((t.next = e).prev = t, this.lastChild = e) : this.lastChild = this.firstChild = e, e.parent = this, e
            }, a.prototype.insert = function(e, t, n) {
                var r;
                return e.parent && e.remove(), r = t.parent || this, n ? (t === r.firstChild ? r.firstChild = e : t.prev.next = e, e.prev = t.prev, (e.next = t).prev = e) : (t === r.lastChild ? r.lastChild = e : t.next.prev = e, e.next = t.next, (e.prev = t).next = e), e.parent = r, e
            }, a.prototype.getAll = function(e) {
                var t, n = [];
                for (t = this.firstChild; t; t = Bb(t, this)) t.name === e && n.push(t);
                return n
            }, a.prototype.empty = function() {
                var e, t, n;
                if (this.firstChild) {
                    for (e = [], n = this.firstChild; n; n = Bb(n, this)) e.push(n);
                    for (t = e.length; t--;)(n = e[t]).parent = n.firstChild = n.lastChild = n.next = n.prev = null
                }
                return this.firstChild = this.lastChild = null, this
            }, a.prototype.isEmpty = function(e, t, n) {
                var r, o, i = this.firstChild;
                if (t = t || {}, i)
                    do {
                        if (1 === i.type) {
                            if (i.attributes.map["data-mce-bogus"]) continue;
                            if (e[i.name]) return !1;
                            for (r = i.attributes.length; r--;)
                                if ("name" === (o = i.attributes[r].name) || 0 === o.indexOf("data-mce-bookmark")) return !1
                        }
                        if (8 === i.type) return !1;
                        if (3 === i.type && !_b.test(i.value)) return !1;
                        if (3 === i.type && i.parent && t[i.parent.name] && _b.test(i.value)) return !1;
                        if (n && n(i)) return !1
                    } while (i = Bb(i, this));
                return !0
            }, a.prototype.walk = function(e) {
                return Bb(this, null, e)
            }, a
        }(),
        Pb = function(e, t, n, r) {
            (e.padd_empty_with_br || t.insert) && n[r.name] ? r.empty().append(new Ob("br", 1)).shortEnded = !0 : r.empty().append(new Ob("#text", 3)).value = "\xa0"
        },
        Lb = function(e) {
            return Ib(e, "#text") && "\xa0" === e.firstChild.value
        },
        Ib = function(e, t) {
            return e && e.firstChild && e.firstChild === e.lastChild && e.firstChild.name === t
        },
        Mb = function(r, e, t, n) {
            return n.isEmpty(e, t, function(e) {
                return t = e, (n = r.getElementRule(t.name)) && n.paddEmpty;
                var t, n
            })
        },
        Fb = function(e, t) {
            return e && (t[e.name] || "br" === e.name)
        },
        zb = function(e, p) {
            var h = e.schema;
            p.remove_trailing_brs && e.addNodeFilter("br", function(e, t, n) {
                var r, o, i, a, u, s, c, l, f = e.length,
                    d = Yt.extend({}, h.getBlockElements()),
                    m = h.getNonEmptyElements(),
                    g = h.getNonEmptyElements();
                for (d.body = 1, r = 0; r < f; r++)
                    if (i = (o = e[r]).parent, d[o.parent.name] && o === i.lastChild) {
                        for (u = o.prev; u;) {
                            if ("span" !== (s = u.name) || "bookmark" !== u.attr("data-mce-type")) {
                                if ("br" !== s) break;
                                if ("br" === s) {
                                    o = null;
                                    break
                                }
                            }
                            u = u.prev
                        }
                        o && (o.remove(), Mb(h, m, g, i) && (c = h.getElementRule(i.name)) && (c.removeEmpty ? i.remove() : c.paddEmpty && Pb(p, n, d, i)))
                    } else {
                        for (a = o; i && i.firstChild === a && i.lastChild === a && !d[(a = i).name];) i = i.parent;
                        a === i && !0 !== p.padd_empty_with_br && ((l = new Ob("#text", 3)).value = "\xa0", o.replace(l))
                    }
            }), e.addAttributeFilter("href", function(e) {
                var t, n, r, o = e.length;
                if (!p.allow_unsafe_link_target)
                    for (; o--;) "a" === (t = e[o]).name && "_blank" === t.attr("target") && t.attr("rel", (n = t.attr("rel"), r = n ? Yt.trim(n) : "", /\b(noopener)\b/g.test(r) ? r : r.split(" ").filter(function(e) {
                        return 0 < e.length
                    }).concat(["noopener"]).sort().join(" ")))
            }), p.allow_html_in_named_anchor || e.addAttributeFilter("id,name", function(e) {
                for (var t, n, r, o, i = e.length; i--;)
                    if ("a" === (o = e[i]).name && o.firstChild && !o.attr("href"))
                        for (r = o.parent, t = o.lastChild; n = t.prev, r.insert(t, o), t = n;);
            }), p.fix_list_elements && e.addNodeFilter("ul,ol", function(e) {
                for (var t, n, r = e.length; r--;)
                    if ("ul" === (n = (t = e[r]).parent).name || "ol" === n.name)
                        if (t.prev && "li" === t.prev.name) t.prev.append(t);
                        else {
                            var o = new Ob("li", 1);
                            o.attr("style", "list-style-type: none"), t.wrap(o)
                        }
            }), p.validate && h.getValidClasses() && e.addAttributeFilter("class", function(e) {
                for (var t, n, r, o, i, a, u, s = e.length, c = h.getValidClasses(); s--;) {
                    for (n = (t = e[s]).attr("class").split(" "), i = "", r = 0; r < n.length; r++) o = n[r], u = !1, (a = c["*"]) && a[o] && (u = !0), a = c[t.name], !u && a && a[o] && (u = !0), u && (i && (i += " "), i += o);
                    i.length || (i = null), t.attr("class", i)
                }
            })
        },
        Ub = Yt.makeMap,
        Vb = Yt.each,
        Hb = Yt.explode,
        jb = Yt.extend;

    function qb(k, T) {
        void 0 === T && (T = ti());
        var A = {},
            R = [],
            _ = {},
            D = {};
        (k = k || {}).validate = !("validate" in k) || k.validate, k.root_name = k.root_name || "body";
        var B = function(e) {
                var t, n, r;
                (n = e.name) in A && ((r = _[n]) ? r.push(e) : _[n] = [e]), t = R.length;
                for (; t--;)(n = R[t].name) in e.attributes.map && ((r = D[n]) ? r.push(e) : D[n] = [e]);
                return e
            },
            e = {
                schema: T,
                addAttributeFilter: function(e, n) {
                    Vb(Hb(e), function(e) {
                        var t;
                        for (t = 0; t < R.length; t++)
                            if (R[t].name === e) return void R[t].callbacks.push(n);
                        R.push({
                            name: e,
                            callbacks: [n]
                        })
                    })
                },
                getAttributeFilters: function() {
                    return [].concat(R)
                },
                addNodeFilter: function(e, n) {
                    Vb(Hb(e), function(e) {
                        var t = A[e];
                        t || (A[e] = t = []), t.push(n)
                    })
                },
                getNodeFilters: function() {
                    var e = [];
                    for (var t in A) A.hasOwnProperty(t) && e.push({
                        name: t,
                        callbacks: A[t]
                    });
                    return e
                },
                filterNode: B,
                parse: function(e, a) {
                    var t, n, r, o, i, u, s, c, l, f, d, m = [];
                    a = a || {}, _ = {}, D = {}, l = jb(Ub("script,style,head,html,body,title,meta,param"), T.getBlockElements());
                    var g = T.getNonEmptyElements(),
                        p = T.children,
                        h = k.validate,
                        v = "forced_root_block" in a ? a.forced_root_block : k.forced_root_block,
                        b = T.getWhiteSpaceElements(),
                        y = /^[ \t\r\n]+/,
                        C = /[ \t\r\n]+$/,
                        x = /[ \t\r\n]+/g,
                        w = /^[ \t\r\n]+$/;
                    f = b.hasOwnProperty(a.context) || b.hasOwnProperty(k.root_name);
                    var N = function(e, t) {
                            var n, r = new Ob(e, t);
                            return e in A && ((n = _[e]) ? n.push(r) : _[e] = [r]), r
                        },
                        E = function(e) {
                            var t, n, r, o, i = T.getBlockElements();
                            for (t = e.prev; t && 3 === t.type;) {
                                if (0 < (r = t.value.replace(C, "")).length) return void(t.value = r);
                                if (n = t.next) {
                                    if (3 === n.type && n.value.length) {
                                        t = t.prev;
                                        continue
                                    }
                                    if (!i[n.name] && "script" !== n.name && "style" !== n.name) {
                                        t = t.prev;
                                        continue
                                    }
                                }
                                o = t.prev, t.remove(), t = o
                            }
                        };
                    t = Hh({
                        validate: h,
                        allow_script_urls: k.allow_script_urls,
                        allow_conditional_comments: k.allow_conditional_comments,
                        self_closing_elements: function(e) {
                            var t, n = {};
                            for (t in e) "li" !== t && "p" !== t && (n[t] = e[t]);
                            return n
                        }(T.getSelfClosingElements()),
                        cdata: function(e) {
                            d.append(N("#cdata", 4)).value = e
                        },
                        text: function(e, t) {
                            var n;
                            f || (e = e.replace(x, " "), Fb(d.lastChild, l) && (e = e.replace(y, ""))), 0 !== e.length && ((n = N("#text", 3)).raw = !!t, d.append(n).value = e)
                        },
                        comment: function(e) {
                            d.append(N("#comment", 8)).value = e
                        },
                        pi: function(e, t) {
                            d.append(N(e, 7)).value = t, E(d)
                        },
                        doctype: function(e) {
                            d.append(N("#doctype", 10)).value = e, E(d)
                        },
                        start: function(e, t, n) {
                            var r, o, i, a, u;
                            if (i = h ? T.getElementRule(e) : {}) {
                                for ((r = N(i.outputName || e, 1)).attributes = t, r.shortEnded = n, d.append(r), (u = p[d.name]) && p[r.name] && !u[r.name] && m.push(r), o = R.length; o--;)(a = R[o].name) in t.map && ((s = D[a]) ? s.push(r) : D[a] = [r]);
                                l[e] && E(r), n || (d = r), !f && b[e] && (f = !0)
                            }
                        },
                        end: function(e) {
                            var t, n, r, o, i;
                            if (n = h ? T.getElementRule(e) : {}) {
                                if (l[e] && !f) {
                                    if ((t = d.firstChild) && 3 === t.type)
                                        if (0 < (r = t.value.replace(y, "")).length) t.value = r, t = t.next;
                                        else
                                            for (o = t.next, t.remove(), t = o; t && 3 === t.type;) r = t.value, o = t.next, (0 === r.length || w.test(r)) && (t.remove(), t = o), t = o;
                                    if ((t = d.lastChild) && 3 === t.type)
                                        if (0 < (r = t.value.replace(C, "")).length) t.value = r, t = t.prev;
                                        else
                                            for (o = t.prev, t.remove(), t = o; t && 3 === t.type;) r = t.value, o = t.prev, (0 === r.length || w.test(r)) && (t.remove(), t = o), t = o
                                }
                                if (f && b[e] && (f = !1), n.removeEmpty && Mb(T, g, b, d) && !d.attributes.map.name && !d.attr("id")) return i = d.parent, l[d.name] ? d.empty().remove() : d.unwrap(), void(d = i);
                                n.paddEmpty && (Lb(d) || Mb(T, g, b, d)) && Pb(k, a, l, d), d = d.parent
                            }
                        }
                    }, T);
                    var S = d = new Ob(a.context || k.root_name, 11);
                    if (t.parse(e), h && m.length && (a.context ? a.invalid = !0 : function(e) {
                        var t, n, r, o, i, a, u, s, c, l, f, d, m, g, p, h;
                        for (d = Ub("tr,td,th,tbody,thead,tfoot,table"), l = T.getNonEmptyElements(), f = T.getWhiteSpaceElements(), m = T.getTextBlockElements(), g = T.getSpecialElements(), t = 0; t < e.length; t++)
                            if ((n = e[t]).parent && !n.fixed)
                                if (m[n.name] && "li" === n.parent.name) {
                                    for (p = n.next; p && m[p.name];) p.name = "li", p.fixed = !0, n.parent.insert(p, n.parent), p = p.next;
                                    n.unwrap(n)
                                } else {
                                    for (o = [n], r = n.parent; r && !T.isValidChild(r.name, n.name) && !d[r.name]; r = r.parent) o.push(r);
                                    if (r && 1 < o.length) {
                                        for (o.reverse(), i = a = B(o[0].clone()), c = 0; c < o.length - 1; c++) {
                                            for (T.isValidChild(a.name, o[c].name) ? (u = B(o[c].clone()), a.append(u)) : u = a, s = o[c].firstChild; s && s !== o[c + 1];) h = s.next, u.append(s), s = h;
                                            a = u
                                        }
                                        Mb(T, l, f, i) ? r.insert(n, o[0], !0) : (r.insert(i, o[0], !0), r.insert(n, i)), r = o[0], (Mb(T, l, f, r) || Ib(r, "br")) && r.empty().remove()
                                    } else if (n.parent) {
                                        if ("li" === n.name) {
                                            if ((p = n.prev) && ("ul" === p.name || "ul" === p.name)) {
                                                p.append(n);
                                                continue
                                            }
                                            if ((p = n.next) && ("ul" === p.name || "ul" === p.name)) {
                                                p.insert(n, p.firstChild, !0);
                                                continue
                                            }
                                            n.wrap(B(new Ob("ul", 1)));
                                            continue
                                        }
                                        T.isValidChild(n.parent.name, "div") && T.isValidChild("div", n.name) ? n.wrap(B(new Ob("div", 1))) : g[n.name] ? n.empty().remove() : n.unwrap()
                                    }
                                }
                    }(m)), v && ("body" === S.name || a.isRootContent) && function() {
                        var e, t, n = S.firstChild,
                            r = function(e) {
                                e && ((n = e.firstChild) && 3 === n.type && (n.value = n.value.replace(y, "")), (n = e.lastChild) && 3 === n.type && (n.value = n.value.replace(C, "")))
                            };
                        if (T.isValidChild(S.name, v.toLowerCase())) {
                            for (; n;) e = n.next, 3 === n.type || 1 === n.type && "p" !== n.name && !l[n.name] && !n.attr("data-mce-type") ? (t || ((t = N(v, 1)).attr(k.forced_root_block_attrs), S.insert(t, n)), t.append(n)) : (r(t), t = null), n = e;
                            r(t)
                        }
                    }(), !a.invalid) {
                        for (c in _) {
                            for (s = A[c], i = (n = _[c]).length; i--;) n[i].parent || n.splice(i, 1);
                            for (r = 0, o = s.length; r < o; r++) s[r](n, c, a)
                        }
                        for (r = 0, o = R.length; r < o; r++)
                            if ((s = R[r]).name in D) {
                                for (i = (n = D[s.name]).length; i--;) n[i].parent || n.splice(i, 1);
                                for (i = 0, u = s.callbacks.length; i < u; i++) s.callbacks[i](n, s.name, a)
                            }
                    }
                    return S
                }
            };
        return zb(e, k), Rb.register(e, k), e
    }
    var $b = function(e, t, n) {
            -1 === Yt.inArray(t, n) && (e.addAttributeFilter(n, function(e, t) {
                for (var n = e.length; n--;) e[n].attr(t, null)
            }), t.push(n))
        },
        Wb = function(e, t, n) {
            var r = la(n.getInner ? t.innerHTML : e.getOuterHTML(t));
            return n.selection || yo(rr.fromDom(t)) ? r : Yt.trim(r)
        },
        Kb = function(e, t, n) {
            var r = n.selection ? Eb({
                    forced_root_block: !1
                }, n) : n,
                o = e.parse(t, r);
            return Sb.trimTrailingBr(o), o
        },
        Xb = function(e, t, n, r, o) {
            var i, a, u, s, c = (i = r, rl(t, n).serialize(i));
            return a = e, s = c, !(u = o).no_events && a ? Dg(a, Eb(u, {
                content: s
            })).content : s
        };

    function Yb(e, t) {
        var a, u, s, c, l, n, r = (a = e, n = ["data-mce-selected"], s = (u = t) && u.dom ? u.dom : gi.DOM, c = u && u.schema ? u.schema : ti(a), a.entity_encoding = a.entity_encoding || "named", a.remove_trailing_brs = !("remove_trailing_brs" in a) || a.remove_trailing_brs, l = qb(a, c), Sb.register(l, a, s), {
            schema: c,
            addNodeFilter: l.addNodeFilter,
            addAttributeFilter: l.addAttributeFilter,
            serialize: function(e, t) {
                var n = Eb({
                        format: "html"
                    }, t || {}),
                    r = kb.process(u, e, n),
                    o = Wb(s, r, n),
                    i = Kb(l, o, n);
                return "tree" === n.format ? i : Xb(u, a, c, i, n)
            },
            addRules: function(e) {
                c.addValidElements(e)
            },
            setRules: function(e) {
                c.setValidElements(e)
            },
            addTempAttr: d($b, l, n),
            getTempAttrs: function() {
                return n
            }
        });
        return {
            schema: r.schema,
            addNodeFilter: r.addNodeFilter,
            addAttributeFilter: r.addAttributeFilter,
            serialize: r.serialize,
            addRules: r.addRules,
            setRules: r.setRules,
            addTempAttr: r.addTempAttr,
            getTempAttrs: r.getTempAttrs
        }
    }

    function Gb(e) {
        return {
            getBookmark: d(mc, e),
            moveToBookmark: d(gc, e)
        }
    }(Gb || (Gb = {})).isBookmarkNode = pc;
    var Jb, Qb, Zb = Gb,
        ey = _o.isContentEditableFalse,
        ty = _o.isContentEditableTrue,
        ny = function(r, a) {
            var u, s, c, l, f, d, m, g, p, h, v, b, i, y, C, x, w, N = a.dom,
                E = Yt.each,
                S = a.getDoc(),
                k = document,
                T = Math.abs,
                A = Math.round,
                R = a.getBody();
            l = {
                nw: [0, 0, -1, -1],
                ne: [1, 0, 1, -1],
                se: [1, 1, 1, 1],
                sw: [0, 1, -1, 1]
            };
            var e = ".mce-content-body";
            a.contentStyles.push(e + " div.mce-resizehandle {position: absolute;border: 1px solid black;box-sizing: content-box;background: #FFF;width: 7px;height: 7px;z-index: 10000}" + e + " .mce-resizehandle:hover {background: #000}" + e + " img[data-mce-selected]," + e + " hr[data-mce-selected] {outline: 1px solid black;resize: none}" + e + " .mce-clonedresizable {position: absolute;" + (de.gecko ? "" : "outline: 1px dashed black;") + "opacity: .5;filter: alpha(opacity=50);z-index: 10000}" + e + " .mce-resize-helper {background: #555;background: rgba(0,0,0,0.75);border-radius: 3px;border: 1px;color: white;display: none;font-family: sans-serif;font-size: 12px;white-space: nowrap;line-height: 14px;margin: 5px 10px;padding: 5px;position: absolute;z-index: 10001}");
            var _ = function(e) {
                    return e && ("IMG" === e.nodeName || a.dom.is(e, "figure.image"))
                },
                n = function(e) {
                    var t, n, r = e.target;
                    t = e, n = a.selection.getRng(), !_(t.target) || Sh(t.clientX, t.clientY, n) || e.isDefaultPrevented() || (e.preventDefault(), a.selection.select(r))
                },
                D = function(e) {
                    return a.dom.is(e, "figure.image") ? e.querySelector("img") : e
                },
                B = function(e) {
                    var t = a.settings.object_resizing;
                    return !1 !== t && !de.iOS && ("string" != typeof t && (t = "table,img,figure.image,div"), "false" !== e.getAttribute("data-mce-resize") && e !== a.getBody() && Dr(rr.fromDom(e), t))
                },
                O = function(e) {
                    var t, n, r, o;
                    t = e.screenX - d, n = e.screenY - m, y = t * f[2] + h, C = n * f[3] + v, y = y < 5 ? 5 : y, C = C < 5 ? 5 : C, (_(u) && !1 !== a.settings.resize_img_proportional ? !Oh.modifierPressed(e) : Oh.modifierPressed(e) || _(u) && f[2] * f[3] != 0) && (T(t) > T(n) ? (C = A(y * b), y = A(C / b)) : (y = A(C / b), C = A(y * b))), N.setStyles(D(s), {
                        width: y,
                        height: C
                    }), r = 0 < (r = f.startPos.x + t) ? r : 0, o = 0 < (o = f.startPos.y + n) ? o : 0, N.setStyles(c, {
                        left: r,
                        top: o,
                        display: "block"
                    }), c.innerHTML = y + " &times; " + C, f[2] < 0 && s.clientWidth <= y && N.setStyle(s, "left", g + (h - y)), f[3] < 0 && s.clientHeight <= C && N.setStyle(s, "top", p + (v - C)), (t = R.scrollWidth - x) + (n = R.scrollHeight - w) != 0 && N.setStyles(c, {
                        left: r - t,
                        top: o - n
                    }), i || (Pg(a, u, h, v), i = !0)
                },
                P = function() {
                    i = !1;
                    var e = function(e, t) {
                        t && (u.style[e] || !a.schema.isValid(u.nodeName.toLowerCase(), e) ? N.setStyle(D(u), e, t) : N.setAttrib(D(u), e, t))
                    };
                    e("width", y), e("height", C), N.unbind(S, "mousemove", O), N.unbind(S, "mouseup", P), k !== S && (N.unbind(k, "mousemove", O), N.unbind(k, "mouseup", P)), N.remove(s), N.remove(c), o(u), Lg(a, u, y, C), N.setAttrib(u, "style", N.getAttrib(u, "style")), a.nodeChanged()
                },
                o = function(e) {
                    var t, r, o, n, i;
                    L(), F(), t = N.getPos(e, R), g = t.x, p = t.y, i = e.getBoundingClientRect(), r = i.width || i.right - i.left, o = i.height || i.bottom - i.top, u !== e && (u = e, y = C = 0), n = a.fire("ObjectSelected", {
                        target: e
                    }), B(e) && !n.isDefaultPrevented() ? E(l, function(n, e) {
                        var t;
                        (t = N.get("mceResizeHandle" + e)) && N.remove(t), t = N.add(R, "div", {
                            id: "mceResizeHandle" + e,
                            "data-mce-bogus": "all",
                            "class": "mce-resizehandle",
                            unselectable: !0,
                            style: "cursor:" + e + "-resize; margin:0; padding:0"
                        }), 11 === de.ie && (t.contentEditable = !1), N.bind(t, "mousedown", function(e) {
                            var t;
                            e.stopImmediatePropagation(), e.preventDefault(), d = (t = e).screenX, m = t.screenY, h = D(u).clientWidth, v = D(u).clientHeight, b = v / h, (f = n).startPos = {
                                x: r * n[0] + g,
                                y: o * n[1] + p
                            }, x = R.scrollWidth, w = R.scrollHeight, s = u.cloneNode(!0), N.addClass(s, "mce-clonedresizable"), N.setAttrib(s, "data-mce-bogus", "all"), s.contentEditable = !1, s.unSelectabe = !0, N.setStyles(s, {
                                left: g,
                                top: p,
                                margin: 0
                            }), s.removeAttribute("data-mce-selected"), R.appendChild(s), N.bind(S, "mousemove", O), N.bind(S, "mouseup", P), k !== S && (N.bind(k, "mousemove", O), N.bind(k, "mouseup", P)), c = N.add(R, "div", {
                                "class": "mce-resize-helper",
                                "data-mce-bogus": "all"
                            }, h + " &times; " + v)
                        }), n.elm = t, N.setStyles(t, {
                            left: r * n[0] + g - t.offsetWidth / 2,
                            top: o * n[1] + p - t.offsetHeight / 2
                        })
                    }) : L(), u.setAttribute("data-mce-selected", "1")
                },
                L = function() {
                    var e, t;
                    for (e in F(), u && u.removeAttribute("data-mce-selected"), l)(t = N.get("mceResizeHandle" + e)) && (N.unbind(t), N.remove(t))
                },
                I = function(e) {
                    var t, n = function(e, t) {
                        if (e)
                            do {
                                if (e === t) return !0
                            } while (e = e.parentNode)
                    };
                    i || a.removed || (E(N.select("img[data-mce-selected],hr[data-mce-selected]"), function(e) {
                        e.removeAttribute("data-mce-selected")
                    }), t = "mousedown" === e.type ? e.target : r.getNode(), n(t = N.$(t).closest("table,img,figure.image,hr")[0], R) && (z(), n(r.getStart(!0), t) && n(r.getEnd(!0), t)) ? o(t) : L())
                },
                M = function(e) {
                    return ey(function(e, t) {
                        for (; t && t !== e;) {
                            if (ty(t) || ey(t)) return t;
                            t = t.parentNode
                        }
                        return null
                    }(a.getBody(), e))
                },
                F = function() {
                    for (var e in l) {
                        var t = l[e];
                        t.elm && (N.unbind(t.elm), delete t.elm)
                    }
                },
                z = function() {
                    try {
                        a.getDoc().execCommand("enableObjectResizing", !1, !1)
                    } catch (e) {}
                };
            return a.on("init", function() {
                z(), de.ie && 11 <= de.ie && (a.on("mousedown click", function(e) {
                    var t = e.target,
                        n = t.nodeName;
                    i || !/^(TABLE|IMG|HR)$/.test(n) || M(t) || (2 !== e.button && a.selection.select(t, "TABLE" === n), "mousedown" === e.type && a.nodeChanged())
                }), a.dom.bind(R, "mscontrolselect", function(e) {
                    var t = function(e) {
                        ve.setEditorTimeout(a, function() {
                            a.selection.select(e)
                        })
                    };
                    if (M(e.target)) return e.preventDefault(), void t(e.target);
                    /^(TABLE|IMG|HR)$/.test(e.target.nodeName) && (e.preventDefault(), "IMG" === e.target.tagName && t(e.target))
                }));
                var t = ve.throttle(function(e) {
                    a.composing || I(e)
                });
                a.on("nodechange ResizeEditor ResizeWindow drop FullscreenStateChanged", t), a.on("keyup compositionend", function(e) {
                    u && "TABLE" === u.nodeName && t(e)
                }), a.on("hide blur", L), a.on("contextmenu", n)
            }), a.on("remove", F), {
                isResizable: B,
                showResizeRect: o,
                hideResizeRect: L,
                updateResizeRect: I,
                destroy: function() {
                    u = s = null
                }
            }
        },
        ry = function(e) {
            for (var t = 0, n = 0, r = e; r && r.nodeType;) t += r.offsetLeft || 0, n += r.offsetTop || 0, r = r.offsetParent;
            return {
                x: t,
                y: n
            }
        },
        oy = function(e, t, n) {
            var r, o, i, a, u, s = e.dom,
                c = s.getRoot(),
                l = 0;
            if (u = {
                elm: t,
                alignToTop: n
            }, e.fire("scrollIntoView", u), !u.isDefaultPrevented() && _o.isElement(t)) {
                if (!1 === n && (l = t.offsetHeight), "BODY" !== c.nodeName) {
                    var f = e.selection.getScrollContainer();
                    if (f) return r = ry(t).y - ry(f).y + l, a = f.clientHeight, void((r < (i = f.scrollTop) || i + a < r + 25) && (f.scrollTop = r < i ? r : r - a + 25))
                }
                o = s.getViewPort(e.getWin()), r = s.getPos(t).y + l, i = o.y, a = o.h, (r < o.y || i + a < r + 25) && e.getWin().scrollTo(0, r < i ? r : r - a + 25)
            }
        },
        iy = function(d, e) {
            ee(du.fromRangeStart(e).getClientRects()).each(function(e) {
                var t, n, r, o, i, a, u, s, c, l = function(e) {
                        if (e.inline) return e.getBody().getBoundingClientRect();
                        var t = e.getWin();
                        return {
                            left: 0,
                            right: t.innerWidth,
                            top: 0,
                            bottom: t.innerHeight,
                            width: t.innerWidth,
                            height: t.innerHeight
                        }
                    }(d),
                    f = {
                        x: (i = t = l, a = n = e, a.left > i.left && a.right < i.right ? 0 : a.left < i.left ? a.left - i.left : a.right - i.right),
                        y: (r = t, o = n, o.top > r.top && o.bottom < r.bottom ? 0 : o.top < r.top ? o.top - r.top : o.bottom - r.bottom)
                    };
                s = 0 !== f.x ? 0 < f.x ? f.x + 4 : f.x - 4 : 0, c = 0 !== f.y ? 0 < f.y ? f.y + 4 : f.y - 4 : 0, (u = d).inline ? (u.getBody().scrollLeft += s, u.getBody().scrollTop += c) : u.getWin().scrollBy(s, c)
            })
        },
        ay = function(e) {
            return _o.isContentEditableTrue(e) || _o.isContentEditableFalse(e)
        },
        uy = function(e, t, n) {
            var r, o, i, a, u, s = n;
            if (s.caretPositionFromPoint)(o = s.caretPositionFromPoint(e, t)) && ((r = n.createRange()).setStart(o.offsetNode, o.offset), r.collapse(!0));
            else if (n.caretRangeFromPoint) r = n.caretRangeFromPoint(e, t);
            else if (s.body.createTextRange) {
                r = s.body.createTextRange();
                try {
                    r.moveToPoint(e, t), r.collapse(!0)
                } catch (c) {
                    r = function(e, n, t) {
                        var r, o, i;
                        if (r = t.elementFromPoint(e, n), o = t.body.createTextRange(), r && "HTML" !== r.tagName || (r = t.body), o.moveToElementText(r), 0 < (i = (i = Yt.toArray(o.getClientRects())).sort(function(e, t) {
                            return (e = Math.abs(Math.max(e.top - n, e.bottom - n))) - (t = Math.abs(Math.max(t.top - n, t.bottom - n)))
                        })).length) {
                            n = (i[0].bottom + i[0].top) / 2;
                            try {
                                return o.moveToPoint(e, n), o.collapse(!0), o
                            } catch (a) {}
                        }
                        return null
                    }(e, t, n)
                }
                return i = r, a = n.body, u = i && i.parentElement ? i.parentElement() : null, _o.isContentEditableFalse(function(e, t, n) {
                    for (; e && e !== t;) {
                        if (n(e)) return e;
                        e = e.parentNode
                    }
                    return null
                }(u, a, ay)) ? null : i
            }
            return r
        },
        sy = function(n, e) {
            return $(e, function(e) {
                var t = n.fire("GetSelectionRange", {
                    range: e
                });
                return t.range !== e ? t.range : e
            })
        },
        cy = function(e, t) {
            var n = (t || document).createDocumentFragment();
            return F(e, function(e) {
                n.appendChild(e.dom())
            }), rr.fromDom(n)
        },
        ly = Er("element", "width", "rows"),
        fy = Er("element", "cells"),
        dy = Er("x", "y"),
        my = function(e, t) {
            var n = parseInt(br(e, t), 10);
            return isNaN(n) ? 1 : n
        },
        gy = function(e) {
            return U(e, function(e, t) {
                return t.cells().length > e ? t.cells().length : e
            }, 0)
        },
        py = function(e, t) {
            for (var n = e.rows(), r = 0; r < n.length; r++)
                for (var o = n[r].cells(), i = 0; i < o.length; i++)
                    if (Or(o[i], t)) return A.some(dy(i, r));
            return A.none()
        },
        hy = function(e, t, n, r, o) {
            for (var i = [], a = e.rows(), u = n; u <= o; u++) {
                var s = a[u].cells(),
                    c = t < r ? s.slice(t, r + 1) : s.slice(r, t + 1);
                i.push(fy(a[u].element(), c))
            }
            return i
        },
        vy = function(e) {
            var o = ly(oa(e), 0, []);
            return F(Vi(e, "tr"), function(n, r) {
                F(Vi(n, "td,th"), function(e, t) {
                    ! function(e, t, n, r, o) {
                        for (var i = my(o, "rowspan"), a = my(o, "colspan"), u = e.rows(), s = n; s < n + i; s++) {
                            u[s] || (u[s] = fy(ia(r), []));
                            for (var c = t; c < t + a; c++) u[s].cells()[c] = s === n && c === t ? o : oa(o)
                        }
                    }(o, function(e, t, n) {
                        for (; r = t, o = n, i = void 0, ((i = e.rows())[o] ? i[o].cells() : [])[r];) t++;
                        var r, o, i;
                        return t
                    }(o, t, r), r, n, e)
                })
            }), ly(o.element(), gy(o.rows()), o.rows())
        },
        by = function(e) {
            return n = $((t = e).rows(), function(e) {
                var t = $(e.cells(), function(e) {
                        var t = ia(e);
                        return yr(t, "colspan"), yr(t, "rowspan"), t
                    }),
                    n = oa(e.element());
                return Ti(n, t), n
            }), r = oa(t.element()), o = rr.fromTag("tbody"), Ti(o, n), ki(r, o), r;
            var t, n, r, o
        },
        yy = function(l, e, t) {
            return py(l, e).bind(function(c) {
                return py(l, t).map(function(e) {
                    return t = l, r = e, o = (n = c).x(), i = n.y(), a = r.x(), u = r.y(), s = i < u ? hy(t, o, i, a, u) : hy(t, o, u, a, i), ly(t.element(), gy(s), s);
                    var t, n, r, o, i, a, u, s
                })
            })
        },
        Cy = function(n, t) {
            return V(n, function(e) {
                return "li" === ur(e) && Yp(e, t)
            }).fold(j([]), function(e) {
                return (t = n, V(t, function(e) {
                    return "ul" === ur(e) || "ol" === ur(e)
                })).map(function(e) {
                    return [rr.fromTag("li"), rr.fromTag(ur(e))]
                }).getOr([]);
                var t
            })
        },
        xy = function(e, t) {
            var n, r = rr.fromDom(t.commonAncestorContainer),
                o = Hl(r, e),
                i = z(o, function(e) {
                    return lo(e) || so(e)
                }),
                a = Cy(o, t),
                u = i.concat(a.length ? a : po(n = r) ? Ir(n).filter(go).fold(j([]), function(e) {
                    return [n, e]
                }) : go(n) ? [n] : []);
            return $(u, oa)
        },
        wy = function() {
            return cy([])
        },
        Ny = function(e, t) {
            return n = rr.fromDom(t.cloneContents()), r = xy(e, t), o = U(r, function(e, t) {
                return ki(t, e), t
            }, n), 0 < r.length ? cy([o]) : o;
            var n, r, o
        },
        Ey = function(e, o) {
            return (t = e, n = o[0], Wi(n, "table", d(Or, t))).bind(function(e) {
                var t = o[0],
                    n = o[o.length - 1],
                    r = vy(e);
                return yy(r, t, n).map(function(e) {
                    return cy([by(e)])
                })
            }).getOrThunk(wy);
            var t, n
        },
        Sy = function(e, t) {
            var n, r, o = qd(t, e);
            return 0 < o.length ? Ey(e, o) : (n = e, 0 < (r = t).length && r[0].collapsed ? wy() : Ny(n, r[0]))
        },
        ky = function(e, t) {
            if (void 0 === t && (t = {}), t.get = !0, t.format = t.format || "html", t.selection = !0, (t = e.fire("BeforeGetContent", t)).isDefaultPrevented()) return e.fire("GetContent", t), t.content;
            if ("text" === t.format) return c = e, A.from(c.selection.getRng()).map(function(e) {
                return la(e.toString())
            }).getOr("");
            t.getInner = !0;
            var n, r, o, i, a, u, s, c, l = (r = t, i = (n = e).selection.getRng(), a = n.dom.create("body"), u = n.selection.getSel(), s = sy(n, Fd(u)), i.cloneContents ? (o = r.contextual ? Sy(rr.fromDom(n.getBody()), s).dom() : i.cloneContents()) && a.appendChild(o) : a.innerHTML = i.toString(), n.selection.serializer.serialize(a, r));
            return "tree" === t.format ? l : (t.content = e.selection.isCollapsed() ? "" : l, e.fire("GetContent", t), t.content)
        },
        Ty = function(e, t, n) {
            var r, o, i, a = e.selection.getRng(),
                u = e.getDoc();
            if ((n = n || {
                format: "html"
            }).set = !0, n.selection = !0, n.content = t, n.no_events || !(n = e.fire("BeforeSetContent", n)).isDefaultPrevented()) {
                if (t = n.content, a.insertNode) {
                    t += '<span id="__caret">_</span>', a.startContainer === u && a.endContainer === u ? u.body.innerHTML = t : (a.deleteContents(), 0 === u.body.childNodes.length ? u.body.innerHTML = t : a.createContextualFragment ? a.insertNode(a.createContextualFragment(t)) : (o = u.createDocumentFragment(), i = u.createElement("div"), o.appendChild(i), i.outerHTML = t, a.insertNode(o))), r = e.dom.get("__caret"), (a = u.createRange()).setStartBefore(r), a.setEndBefore(r), e.selection.setRng(a), e.dom.remove("__caret");
                    try {
                        e.selection.setRng(a)
                    } catch (s) {}
                } else a.item && (u.execCommand("Delete", !1, null), a = e.getRng()), /^\s+/.test(t) ? (a.pasteHTML('<span id="__mce_tmp">_</span>' + t), e.dom.remove("__mce_tmp")) : a.pasteHTML(t);
                n.no_events || e.fire("SetContent", n)
            } else e.fire("SetContent", n)
        },
        Ay = function(e, t, n, r, o) {
            var i = n ? t.startContainer : t.endContainer,
                a = n ? t.startOffset : t.endOffset;
            return A.from(i).map(rr.fromDom).map(function(e) {
                return r && t.collapsed ? e : Hr(e, o(e, a)).getOr(e)
            }).bind(function(e) {
                return cr(e) ? A.some(e) : Ir(e)
            }).map(function(e) {
                return e.dom()
            }).getOr(e)
        },
        Ry = function(e, t, n) {
            return Ay(e, t, !0, n, function(e, t) {
                return Math.min(e.dom().childNodes.length, t)
            })
        },
        _y = function(e, t, n) {
            return Ay(e, t, !1, n, function(e, t) {
                return 0 < t ? t - 1 : t
            })
        },
        Dy = function(e, t) {
            for (var n = e; e && _o.isText(e) && 0 === e.length;) e = t ? e.nextSibling : e.previousSibling;
            return e || n
        },
        By = Yt.each,
        Oy = function(e) {
            return !!e.select
        },
        Py = function(e) {
            return !(!e || !e.ownerDocument) && Pr(rr.fromDom(e.ownerDocument), rr.fromDom(e))
        },
        Ly = function(u, s, e, c) {
            var n, t, l, f, a, r = function(e, t) {
                    return Ty(c, e, t)
                },
                o = function(e) {
                    var t = m();
                    t.collapse(!!e), i(t)
                },
                d = function() {
                    return s.getSelection ? s.getSelection() : s.document.selection
                },
                m = function() {
                    var e, t, n, r, o = function(e, t, n) {
                        try {
                            return t.compareBoundaryPoints(e, n)
                        } catch (r) {
                            return -1
                        }
                    };
                    if (!s) return null;
                    if (null == (r = s.document)) return null;
                    if (c.bookmark !== undefined && !1 === ap(c)) {
                        var i = hg(c);
                        if (i.isSome()) return i.map(function(e) {
                            return sy(c, [e])[0]
                        }).getOr(r.createRange())
                    }
                    try {
                        (e = d()) && (t = 0 < e.rangeCount ? e.getRangeAt(0) : e.createRange ? e.createRange() : r.createRange())
                    } catch (a) {}
                    return (t = sy(c, [t])[0]) || (t = r.createRange ? r.createRange() : r.body.createTextRange()), t.setStart && 9 === t.startContainer.nodeType && t.collapsed && (n = u.getRoot(), t.setStart(n, 0), t.setEnd(n, 0)), l && f && (0 === o(t.START_TO_START, t, l) && 0 === o(t.END_TO_END, t, l) ? t = f : f = l = null), t
                },
                i = function(e, t) {
                    var n, r;
                    if ((o = e) && (Oy(o) || Py(o.startContainer) && Py(o.endContainer))) {
                        var o, i = Oy(e) ? e : null;
                        if (i) {
                            f = null;
                            try {
                                i.select()
                            } catch (a) {}
                        } else {
                            if (n = d(), e = c.fire("SetSelectionRange", {
                                range: e,
                                forward: t
                            }).range, n) {
                                f = e;
                                try {
                                    n.removeAllRanges(), n.addRange(e)
                                } catch (a) {}!1 === t && n.extend && (n.collapse(e.endContainer, e.endOffset), n.extend(e.startContainer, e.startOffset)), l = 0 < n.rangeCount ? n.getRangeAt(0) : null
                            }
                            e.collapsed || e.startContainer !== e.endContainer || !n.setBaseAndExtent || de.ie || e.endOffset - e.startOffset < 2 && e.startContainer.hasChildNodes() && (r = e.startContainer.childNodes[e.startOffset]) && "IMG" === r.tagName && (n.setBaseAndExtent(e.startContainer, e.startOffset, e.endContainer, e.endOffset), n.anchorNode === e.startContainer && n.focusNode === e.endContainer || n.setBaseAndExtent(r, 0, r, 1)), c.fire("AfterSetSelectionRange", {
                                range: e,
                                forward: t
                            })
                        }
                    }
                },
                g = function() {
                    var e, t, n = d();
                    return !(n && n.anchorNode && n.focusNode) || ((e = u.createRng()).setStart(n.anchorNode, n.anchorOffset), e.collapse(!0), (t = u.createRng()).setStart(n.focusNode, n.focusOffset), t.collapse(!0), e.compareBoundaryPoints(e.START_TO_START, t) <= 0)
                },
                p = {
                    bookmarkManager: null,
                    controlSelection: null,
                    dom: u,
                    win: s,
                    serializer: e,
                    editor: c,
                    collapse: o,
                    setCursorLocation: function(e, t) {
                        var n = u.createRng();
                        e ? (n.setStart(e, t), n.setEnd(e, t), i(n), o(!1)) : (Gp(u, n, c.getBody(), !0), i(n))
                    },
                    getContent: function(e) {
                        return ky(c, e)
                    },
                    setContent: r,
                    getBookmark: function(e, t) {
                        return n.getBookmark(e, t)
                    },
                    moveToBookmark: function(e) {
                        return n.moveToBookmark(e)
                    },
                    select: function(e, t) {
                        var r, n, o;
                        return (r = u, n = e, o = t, A.from(n).map(function(e) {
                            var t = r.nodeIndex(e),
                                n = r.createRng();
                            return n.setStart(e.parentNode, t), n.setEnd(e.parentNode, t + 1), o && (Gp(r, n, e, !0), Gp(r, n, e, !1)), n
                        })).each(i), e
                    },
                    isCollapsed: function() {
                        var e = m(),
                            t = d();
                        return !(!e || e.item) && (e.compareEndPoints ? 0 === e.compareEndPoints("StartToEnd", e) : !t || e.collapsed)
                    },
                    isForward: g,
                    setNode: function(e) {
                        return r(u.getOuterHTML(e)), e
                    },
                    getNode: function() {
                        return e = c.getBody(), (t = m()) ? (r = t.startContainer, o = t.endContainer, i = t.startOffset, a = t.endOffset, n = t.commonAncestorContainer, !t.collapsed && (r === o && a - i < 2 && r.hasChildNodes() && (n = r.childNodes[i]), 3 === r.nodeType && 3 === o.nodeType && (r = r.length === i ? Dy(r.nextSibling, !0) : r.parentNode, o = 0 === a ? Dy(o.previousSibling, !1) : o.parentNode, r && r === o)) ? r : n && 3 === n.nodeType ? n.parentNode : n) : e;
                        var e, t, n, r, o, i, a
                    },
                    getSel: d,
                    setRng: i,
                    getRng: m,
                    getStart: function(e) {
                        return Ry(c.getBody(), m(), e)
                    },
                    getEnd: function(e) {
                        return _y(c.getBody(), m(), e)
                    },
                    getSelectedBlocks: function(e, t) {
                        return function(e, t, n, r) {
                            var o, i, a = [];
                            if (i = e.getRoot(), n = e.getParent(n || Ry(i, t, t.collapsed), e.isBlock), r = e.getParent(r || _y(i, t, t.collapsed), e.isBlock), n && n !== i && a.push(n), n && r && n !== r)
                                for (var u = new ro(o = n, i);
                                     (o = u.next()) && o !== r;) e.isBlock(o) && a.push(o);
                            return r && n !== r && r !== i && a.push(r), a
                        }(u, m(), e, t)
                    },
                    normalize: function() {
                        var e = m(),
                            t = d();
                        if (!Ud(t) && Jp(c)) {
                            var n = jm(u, e);
                            return n.each(function(e) {
                                i(e, g())
                            }), n.getOr(e)
                        }
                        return e
                    },
                    selectorChanged: function(e, t) {
                        var i;
                        return a || (a = {}, i = {}, c.on("NodeChange", function(e) {
                            var n = e.element,
                                r = u.getParents(n, null, u.getRoot()),
                                o = {};
                            By(a, function(e, n) {
                                By(r, function(t) {
                                    if (u.is(t, n)) return i[n] || (By(e, function(e) {
                                        e(!0, {
                                            node: t,
                                            selector: n,
                                            parents: r
                                        })
                                    }), i[n] = e), o[n] = e, !1
                                })
                            }), By(i, function(e, t) {
                                o[t] || (delete i[t], By(e, function(e) {
                                    e(!1, {
                                        node: n,
                                        selector: t,
                                        parents: r
                                    })
                                }))
                            })
                        })), a[e] || (a[e] = []), a[e].push(t), p
                    },
                    getScrollContainer: function() {
                        for (var e, t = u.getRoot(); t && "BODY" !== t.nodeName;) {
                            if (t.scrollHeight > t.clientHeight) {
                                e = t;
                                break
                            }
                            t = t.parentNode
                        }
                        return e
                    },
                    scrollIntoView: function(e, t) {
                        return oy(c, e, t)
                    },
                    placeCaretAt: function(e, t) {
                        return i(uy(e, t, c.getDoc()))
                    },
                    getBoundingClientRect: function() {
                        var e = m();
                        return e.collapsed ? hu.fromRangeStart(e).getClientRects()[0] : e.getBoundingClientRect()
                    },
                    destroy: function() {
                        s = l = f = null, t.destroy()
                    }
                };
            return n = Zb(p), t = ny(p, c), p.bookmarkManager = n, p.controlSelection = t, p
        },
        Iy = _o.isContentEditableFalse,
        My = Ua,
        Fy = As,
        zy = Ts,
        Uy = function(e, t) {
            for (; t = e(t);)
                if (t.isVisible()) return t;
            return t
        },
        Vy = function(e, t, n, r) {
            var o, i, a, u, s, c, l = e === gu.Forwards,
                f = l ? zy : Fy;
            return !r.collapsed && (o = My(r), Iy(o)) ? Ah(e, t, o, e === gu.Backwards, !0) : (u = ma(r.startContainer), f(i = ks(e, t.getBody(), r)) ? Rh(t, i.getNode(!l)) : (i = n(i)) ? f(i) ? Ah(e, t, i.getNode(!l), l, !0) : f(a = n(i)) && (!(c = hs(s = i, a)) && _o.isBr(s.getNode()) || c) ? Ah(e, t, a.getNode(!l), l, !0) : u ? Dh(t, i.toRange(), !0) : null : u ? r : null)
        },
        Hy = function(e, t, n, r) {
            var o, i, a, u, s, c, l, f, d;
            if (d = My(r), o = ks(e, t.getBody(), r), i = n(t.getBody(), ph(1), o), a = z(i, hh(1)), s = qt.last(o.getClientRects()), (zy(o) || Rs(o)) && (d = o.getNode()), (Fy(o) || _s(o)) && (d = o.getNode(!0)), !s) return null;
            if (c = s.left, (u = wh(a, c)) && Iy(u.node)) return l = Math.abs(c - u.left), f = Math.abs(c - u.right), Ah(e, t, u.node, l < f, !0);
            if (d) {
                var m = function(e, t, n, r) {
                    var o, i, a, u, s, c, l = Gs(t),
                        f = [],
                        d = 0,
                        m = function(e) {
                            return qt.last(e.getClientRects())
                        };
                    1 === e ? (o = l.next, i = za, a = Fa, u = hu.after(r)) : (o = l.prev, i = Fa, a = za, u = hu.before(r)), c = m(u);
                    do {
                        if (u.isVisible() && !a(s = m(u), c)) {
                            if (0 < f.length && i(s, qt.last(f)) && d++, (s = La(s)).position = u, s.line = d, n(s)) return f;
                            f.push(s)
                        }
                    } while (u = o(u));
                    return f
                }(e, t.getBody(), ph(1), d);
                if (u = wh(z(m, hh(1)), c)) return Dh(t, u.position.toRange(), !0);
                if (u = qt.last(z(m, hh(0)))) return Dh(t, u.position.toRange(), !0)
            }
        },
        jy = function(e, t, n) {
            var r, o, i, a, u = Gs(e.getBody()),
                s = d(Uy, u.next),
                c = d(Uy, u.prev);
            if (n.collapsed && e.settings.forced_root_block) {
                if (!(r = e.dom.getParent(n.startContainer, "PRE"))) return;
                (1 === t ? s(hu.fromRangeStart(n)) : c(hu.fromRangeStart(n))) || (a = (i = e).dom.create(i.settings.forced_root_block), (!de.ie || 11 <= de.ie) && (a.innerHTML = '<br data-mce-bogus="1">'), o = a, 1 === t ? e.$(r).after(o) : e.$(r).before(o), e.selection.select(o, !0), e.selection.collapse())
            }
        },
        qy = function(l, f) {
            return function() {
                var e, t, n, r, o, i, a, u, s, c = (t = f, r = Gs((e = l).getBody()), o = d(Uy, r.next), i = d(Uy, r.prev), a = t ? gu.Forwards : gu.Backwards, u = t ? o : i, s = e.selection.getRng(), (n = Vy(a, e, u, s)) ? n : (n = jy(e, a, s)) || null);
                return !!c && (l.selection.setRng(c), !0)
            }
        },
        $y = function(u, s) {
            return function() {
                var e, t, n, r, o, i, a = (r = (t = s) ? 1 : -1, o = t ? gh : mh, i = (e = u).selection.getRng(), (n = Hy(r, e, o, i)) ? n : (n = jy(e, r, i)) || null);
                return !!a && (u.selection.setRng(a), !0)
            }
        };
    (Qb = Jb || (Jb = {}))[Qb.Br = 0] = "Br", Qb[Qb.Block = 1] = "Block", Qb[Qb.Wrap = 2] = "Wrap", Qb[Qb.Eol = 3] = "Eol";
    var Wy = function(e, t) {
            return e === gu.Backwards ? t.reverse() : t
        },
        Ky = function(e, t, n, r) {
            for (var o, i, a, u, s, c, l = Gs(n), f = r, d = []; f && (s = l, c = f, o = t === gu.Forwards ? s.next(c) : s.prev(c));) {
                if (_o.isBr(o.getNode(!1))) return t === gu.Forwards ? {
                    positions: Wy(t, d).concat([o]),
                    breakType: Jb.Br,
                    breakAt: A.some(o)
                } : {
                    positions: Wy(t, d),
                    breakType: Jb.Br,
                    breakAt: A.some(o)
                };
                if (o.isVisible()) {
                    if (e(f, o)) {
                        var m = (i = t, a = f, u = o, _o.isBr(u.getNode(i === gu.Forwards)) ? Jb.Br : !1 === hs(a, u) ? Jb.Block : Jb.Wrap);
                        return {
                            positions: Wy(t, d),
                            breakType: m,
                            breakAt: A.some(o)
                        }
                    }
                    d.push(o), f = o
                } else f = o
            }
            return {
                positions: Wy(t, d),
                breakType: Jb.Eol,
                breakAt: A.none()
            }
        },
        Xy = function(n, r, o, e) {
            return r(o, e).breakAt.map(function(e) {
                var t = r(o, e).positions;
                return n === gu.Backwards ? t.concat(e) : [e].concat(t)
            }).getOr([])
        },
        Yy = function(e, i) {
            return U(e, function(e, o) {
                return e.fold(function() {
                    return A.some(o)
                }, function(r) {
                    return qa([ee(r.getClientRects()), ee(o.getClientRects())], function(e, t) {
                        var n = Math.abs(i - e.left);
                        return Math.abs(i - t.left) <= n ? o : r
                    }).or(e)
                })
            }, A.none())
        },
        Gy = function(t, e) {
            return ee(e.getClientRects()).bind(function(e) {
                return Yy(t, e.left)
            })
        },
        Jy = d(Ky, du.isAbove, -1),
        Qy = d(Ky, du.isBelow, 1),
        Zy = d(Xy, -1, Jy),
        eC = d(Xy, 1, Qy),
        tC = function(e, t, n, r, o) {
            var i, a, u, s, c = Vi(rr.fromDom(n), "td,th,caption").map(function(e) {
                    return e.dom()
                }),
                l = z((i = e, G(c, function(e) {
                    var t, n, r = (t = La(e.getBoundingClientRect()), n = -1, {
                        left: t.left - n,
                        top: t.top - n,
                        right: t.right + 2 * n,
                        bottom: t.bottom + 2 * n,
                        width: t.width + n,
                        height: t.height + n
                    });
                    return [{
                        x: r.left,
                        y: i(r),
                        cell: e
                    }, {
                        x: r.right,
                        y: i(r),
                        cell: e
                    }]
                })), function(e) {
                    return t(e, o)
                });
            return (a = l, u = r, s = o, U(a, function(e, r) {
                return e.fold(function() {
                    return A.some(r)
                }, function(e) {
                    var t = Math.sqrt(Math.abs(e.x - u) + Math.abs(e.y - s)),
                        n = Math.sqrt(Math.abs(r.x - u) + Math.abs(r.y - s));
                    return A.some(n < t ? r : e)
                })
            }, A.none())).map(function(e) {
                return e.cell
            })
        },
        nC = d(tC, function(e) {
            return e.bottom
        }, function(e, t) {
            return e.y < t
        }),
        rC = d(tC, function(e) {
            return e.top
        }, function(e, t) {
            return e.y > t
        }),
        oC = function(t, n) {
            return ee(n.getClientRects()).bind(function(e) {
                return nC(t, e.left, e.top)
            }).bind(function(e) {
                return Gy((t = e, ic.lastPositionIn(t).map(function(e) {
                    return Jy(t, e).positions.concat(e)
                }).getOr([])), n);
                var t
            })
        },
        iC = function(t, n) {
            return te(n.getClientRects()).bind(function(e) {
                return rC(t, e.left, e.top)
            }).bind(function(e) {
                return Gy((t = e, ic.firstPositionIn(t).map(function(e) {
                    return [e].concat(Qy(t, e).positions)
                }).getOr([])), n);
                var t
            })
        },
        aC = function(e, t) {
            e.selection.setRng(t), iy(e, t)
        },
        uC = function(e, t, n) {
            var r, o, i, a, u = e(t, n);
            return (a = u).breakType === Jb.Wrap && 0 === a.positions.length || !_o.isBr(n.getNode()) && (i = u).breakType === Jb.Br && 1 === i.positions.length ? (r = e, o = t, !u.breakAt.map(function(e) {
                return r(o, e).breakAt.isSome()
            }).getOr(!1)) : u.breakAt.isNone()
        },
        sC = d(uC, Jy),
        cC = d(uC, Qy),
        lC = function(e, t, n, r) {
            var o, i, a, u, s = e.selection.getRng(),
                c = t ? 1 : -1;
            if (es() && (o = t, i = s, a = n, u = hu.fromRangeStart(i), ic.positionIn(!o, a).map(function(e) {
                return e.isEqual(u)
            }).getOr(!1))) {
                var l = Ah(c, e, n, !t, !0);
                return aC(e, l), !0
            }
            return !1
        },
        fC = function(e, t) {
            var n = t.getNode(e);
            return _o.isElement(n) && "TABLE" === n.nodeName ? A.some(n) : A.none()
        },
        dC = function(u, s, c) {
            var e = fC(!!s, c),
                t = !1 === s;
            e.fold(function() {
                return aC(u, c.toRange())
            }, function(a) {
                return ic.positionIn(t, u.getBody()).filter(function(e) {
                    return e.isEqual(c)
                }).fold(function() {
                    return aC(u, c.toRange())
                }, function(e) {
                    return n = s, o = a, t = c, void((i = mm(r = u)) ? r.undoManager.transact(function() {
                        var e = rr.fromTag(i);
                        vr(e, gm(r)), ki(e, rr.fromTag("br")), n ? Ei(rr.fromDom(o), e) : Ni(rr.fromDom(o), e);
                        var t = r.dom.createRng();
                        t.setStart(e.dom(), 0), t.setEnd(e.dom(), 0), aC(r, t)
                    }) : aC(r, t.toRange()));
                    var n, r, o, t, i
                })
            })
        },
        mC = function(e, t, n, r) {
            var o, i, a, u, s, c, l = e.selection.getRng(),
                f = hu.fromRangeStart(l),
                d = e.getBody();
            if (!t && sC(r, f)) {
                var m = (u = d, oC(s = n, c = f).orThunk(function() {
                    return ee(c.getClientRects()).bind(function(e) {
                        return Yy(Zy(u, hu.before(s)), e.left)
                    })
                }).getOr(hu.before(s)));
                return dC(e, t, m), !0
            }
            return !(!t || !cC(r, f)) && (o = d, m = iC(i = n, a = f).orThunk(function() {
                return ee(a.getClientRects()).bind(function(e) {
                    return Yy(eC(o, hu.after(i)), e.left)
                })
            }).getOr(hu.after(i)), dC(e, t, m), !0)
        },
        gC = function(t, n) {
            return function() {
                return A.from(t.dom.getParent(t.selection.getNode(), "td,th")).bind(function(e) {
                    return A.from(t.dom.getParent(e, "table")).map(function(e) {
                        return lC(t, n, e)
                    })
                }).getOr(!1)
            }
        },
        pC = function(n, r) {
            return function() {
                return A.from(n.dom.getParent(n.selection.getNode(), "td,th")).bind(function(t) {
                    return A.from(n.dom.getParent(t, "table")).map(function(e) {
                        return mC(n, r, e, t)
                    })
                }).getOr(!1)
            }
        },
        hC = function(e) {
            return M(["figcaption"], ur(e))
        },
        vC = function(e) {
            var t = document.createRange();
            return t.setStartBefore(e.dom()), t.setEndBefore(e.dom()), t
        },
        bC = function(e, t, n) {
            n ? ki(e, t) : Si(e, t)
        },
        yC = function(e, t, n, r) {
            return "" === t ? (l = e, f = r, d = rr.fromTag("br"), bC(l, d, f), vC(d)) : (o = e, i = r, a = t, u = n, s = rr.fromTag(a), c = rr.fromTag("br"), vr(s, u), ki(s, c), bC(o, s, i), vC(c));
            var o, i, a, u, s, c, l, f, d
        },
        CC = function(e, t, n) {
            return t ? (o = e.dom(), Qy(o, n).breakAt.isNone()) : (r = e.dom(), Jy(r, n).breakAt.isNone());
            var r, o
        },
        xC = function(t, n) {
            var e, r, o, i = rr.fromDom(t.getBody()),
                a = hu.fromRangeStart(t.selection.getRng()),
                u = mm(t),
                s = gm(t);
            return (e = a, r = i, o = d(Or, r), $i(rr.fromDom(e.container()), co, o).filter(hC)).exists(function() {
                if (CC(i, n, a)) {
                    var e = yC(i, u, s, n);
                    return t.selection.setRng(e), !0
                }
                return !1
            })
        },
        wC = function(e, t) {
            return function() {
                return !!e.selection.isCollapsed() && xC(e, t)
            }
        },
        NC = function(e, r) {
            return G($(e, function(e) {
                return Eb({
                    shiftKey: !1,
                    altKey: !1,
                    ctrlKey: !1,
                    metaKey: !1,
                    keyCode: 0,
                    action: o
                }, e)
            }), function(e) {
                return t = e, (n = r).keyCode === t.keyCode && n.shiftKey === t.shiftKey && n.altKey === t.altKey && n.ctrlKey === t.ctrlKey && n.metaKey === t.metaKey ? [e] : [];
                var t, n
            })
        },
        EC = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            var r = Array.prototype.slice.call(arguments, 1);
            return function() {
                return e.apply(null, r)
            }
        },
        SC = function(e, t) {
            return V(NC(e, t), function(e) {
                return e.action()
            })
        },
        kC = function(i, a) {
            i.on("keydown", function(e) {
                var t, n, r, o;
                !1 === e.isDefaultPrevented() && (t = i, n = a, r = e, o = tr.detect().os, SC([{
                    keyCode: Oh.RIGHT,
                    action: qy(t, !0)
                }, {
                    keyCode: Oh.LEFT,
                    action: qy(t, !1)
                }, {
                    keyCode: Oh.UP,
                    action: $y(t, !1)
                }, {
                    keyCode: Oh.DOWN,
                    action: $y(t, !0)
                }, {
                    keyCode: Oh.RIGHT,
                    action: gC(t, !0)
                }, {
                    keyCode: Oh.LEFT,
                    action: gC(t, !1)
                }, {
                    keyCode: Oh.UP,
                    action: pC(t, !1)
                }, {
                    keyCode: Oh.DOWN,
                    action: pC(t, !0)
                }, {
                    keyCode: Oh.RIGHT,
                    action: bd.move(t, n, !0)
                }, {
                    keyCode: Oh.LEFT,
                    action: bd.move(t, n, !1)
                }, {
                    keyCode: Oh.RIGHT,
                    ctrlKey: !o.isOSX(),
                    altKey: o.isOSX(),
                    action: bd.moveNextWord(t, n)
                }, {
                    keyCode: Oh.LEFT,
                    ctrlKey: !o.isOSX(),
                    altKey: o.isOSX(),
                    action: bd.movePrevWord(t, n)
                }, {
                    keyCode: Oh.UP,
                    action: wC(t, !1)
                }, {
                    keyCode: Oh.DOWN,
                    action: wC(t, !0)
                }], r).each(function(e) {
                    r.preventDefault()
                }))
            })
        },
        TC = function(e) {
            return 1 === Vr(e).length
        },
        AC = function(e, t, n, r) {
            var o, i, a, u, s = d(_v, t),
                c = $(z(r, s), function(e) {
                    return e.dom()
                });
            if (0 === c.length) Tf(t, e, n);
            else {
                var l = (o = n.dom(), i = c, a = Nv(!1), u = Av(i, a.dom()), Ni(rr.fromDom(o), a), Ri(rr.fromDom(o)), hu(u, 0));
                t.selection.setRng(l.toRange())
            }
        },
        RC = function(r, o) {
            var t, e = rr.fromDom(r.getBody()),
                n = rr.fromDom(r.selection.getStart()),
                i = z((t = Hl(n, e), K(t, co).fold(j(t), function(e) {
                    return t.slice(0, e)
                })), TC);
            return te(i).map(function(e) {
                var t, n = hu.fromRangeStart(r.selection.getRng());
                return !(!Tl(o, n, e.dom()) || Fu((t = e).dom()) && xv(t.dom()) || (AC(o, r, e, i), 0))
            }).getOr(!1)
        },
        _C = function(e, t) {
            return !!e.selection.isCollapsed() && RC(e, t)
        },
        DC = function(o, i) {
            o.on("keydown", function(e) {
                var t, n, r;
                !1 === e.isDefaultPrevented() && (t = o, n = i, r = e, SC([{
                    keyCode: Oh.BACKSPACE,
                    action: EC(_f, t, !1)
                }, {
                    keyCode: Oh.DELETE,
                    action: EC(_f, t, !0)
                }, {
                    keyCode: Oh.BACKSPACE,
                    action: EC(wd, t, n, !1)
                }, {
                    keyCode: Oh.DELETE,
                    action: EC(wd, t, n, !0)
                }, {
                    keyCode: Oh.BACKSPACE,
                    action: EC(tm, t, !1)
                }, {
                    keyCode: Oh.DELETE,
                    action: EC(tm, t, !0)
                }, {
                    keyCode: Oh.BACKSPACE,
                    action: EC(tf, t, !1)
                }, {
                    keyCode: Oh.DELETE,
                    action: EC(tf, t, !0)
                }, {
                    keyCode: Oh.BACKSPACE,
                    action: EC(Jl, t, !1)
                }, {
                    keyCode: Oh.DELETE,
                    action: EC(Jl, t, !0)
                }, {
                    keyCode: Oh.BACKSPACE,
                    action: EC(_C, t, !1)
                }, {
                    keyCode: Oh.DELETE,
                    action: EC(_C, t, !0)
                }], r).each(function(e) {
                    r.preventDefault()
                }))
            }), o.on("keyup", function(e) {
                var t, n;
                !1 === e.isDefaultPrevented() && (t = o, n = e, SC([{
                    keyCode: Oh.BACKSPACE,
                    action: EC(Df, t)
                }, {
                    keyCode: Oh.DELETE,
                    action: EC(Df, t)
                }], n))
            })
        },
        BC = function(e) {
            return A.from(e.dom.getParent(e.selection.getStart(!0), e.dom.isBlock))
        },
        OC = function(e, t) {
            var n, r, o, i = t,
                a = e.dom,
                u = e.schema.getMoveCaretBeforeOnEnterElements();
            if (t) {
                if (/^(LI|DT|DD)$/.test(t.nodeName)) {
                    var s = function(e) {
                        for (; e;) {
                            if (1 === e.nodeType || 3 === e.nodeType && e.data && /[\r\n\s]/.test(e.data)) return e;
                            e = e.nextSibling
                        }
                    }(t.firstChild);
                    s && /^(UL|OL|DL)$/.test(s.nodeName) && t.insertBefore(a.doc.createTextNode("\xa0"), t.firstChild)
                }
                if (o = a.createRng(), t.normalize(), t.hasChildNodes()) {
                    for (n = new ro(t, t); r = n.current();) {
                        if (_o.isText(r)) {
                            o.setStart(r, 0), o.setEnd(r, 0);
                            break
                        }
                        if (u[r.nodeName.toLowerCase()]) {
                            o.setStartBefore(r), o.setEndBefore(r);
                            break
                        }
                        i = r, r = n.next()
                    }
                    r || (o.setStart(i, 0), o.setEnd(i, 0))
                } else _o.isBr(t) ? t.nextSibling && a.isBlock(t.nextSibling) ? (o.setStartBefore(t), o.setEndBefore(t)) : (o.setStartAfter(t), o.setEndAfter(t)) : (o.setStart(t, 0), o.setEnd(t, 0));
                e.selection.setRng(o), a.remove(void 0), e.selection.scrollIntoView(t)
            }
        },
        PC = function(e, t) {
            var n, r, o = e.getRoot();
            for (n = t; n !== o && "false" !== e.getContentEditable(n);) "true" === e.getContentEditable(n) && (r = n), n = n.parentNode;
            return n !== o ? r : o
        },
        LC = BC,
        IC = function(e) {
            return BC(e).fold(j(""), function(e) {
                return e.nodeName.toUpperCase()
            })
        },
        MC = function(e) {
            return BC(e).filter(function(e) {
                return po(rr.fromDom(e))
            }).isSome()
        },
        FC = function(e, t) {
            return e && e.parentNode && e.parentNode.nodeName === t
        },
        zC = function(e) {
            return e && /^(OL|UL|LI)$/.test(e.nodeName)
        },
        UC = function(e) {
            var t = e.parentNode;
            return /^(LI|DT|DD)$/.test(t.nodeName) ? t : e
        },
        VC = function(e, t, n) {
            for (var r = e[n ? "firstChild" : "lastChild"]; r && !_o.isElement(r);) r = r[n ? "nextSibling" : "previousSibling"];
            return r === t
        },
        HC = function(e, t, n, r, o) {
            var i = e.dom,
                a = e.selection.getRng();
            if (n !== e.getBody()) {
                var u;
                zC(u = n) && zC(u.parentNode) && (o = "LI");
                var s, c, l = o ? t(o) : i.create("BR");
                if (VC(n, r, !0) && VC(n, r, !1)) FC(n, "LI") ? i.insertAfter(l, UC(n)) : i.replace(l, n);
                else if (VC(n, r, !0)) FC(n, "LI") ? (i.insertAfter(l, UC(n)), l.appendChild(i.doc.createTextNode(" ")), l.appendChild(n)) : n.parentNode.insertBefore(l, n);
                else if (VC(n, r, !1)) i.insertAfter(l, UC(n));
                else {
                    n = UC(n);
                    var f = a.cloneRange();
                    f.setStartAfter(r), f.setEndAfter(n);
                    var d = f.extractContents();
                    "LI" === o && (c = "LI", (s = d).firstChild && s.firstChild.nodeName === c) ? (l = d.firstChild, i.insertAfter(d, n)) : (i.insertAfter(d, n), i.insertAfter(l, n))
                }
                i.remove(r), OC(e, l)
            }
        },
        jC = function(e) {
            e.innerHTML = '<br data-mce-bogus="1">'
        },
        qC = function(e, t) {
            return e.nodeName === t || e.previousSibling && e.previousSibling.nodeName === t
        },
        $C = function(e, t) {
            return t && e.isBlock(t) && !/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName) && !/^(fixed|absolute)/i.test(t.style.position) && "true" !== e.getContentEditable(t)
        },
        WC = function(e, t, n) {
            return !1 === _o.isText(t) ? n : e ? 1 === n && t.data.charAt(n - 1) === ca ? 0 : n : n === t.data.length - 1 && t.data.charAt(n) === ca ? t.data.length : n
        },
        KC = function(e, t) {
            var n, r, o = e.getRoot();
            for (n = t; n !== o && "false" !== e.getContentEditable(n);) "true" === e.getContentEditable(n) && (r = n), n = n.parentNode;
            return n !== o ? r : o
        },
        XC = function(e, t) {
            var n = mm(e);
            n && n.toLowerCase() === t.tagName.toLowerCase() && e.dom.setAttribs(t, gm(e))
        },
        YC = function(a, e) {
            var t, u, s, i, c, n, r, o, l, f, d, m, g, p, h, v, b, y, C, x = a.dom,
                w = a.schema,
                N = w.getNonEmptyElements(),
                E = a.selection.getRng(),
                S = function(e) {
                    var t, n, r, o = s,
                        i = w.getTextInlineElements();
                    if (e || "TABLE" === f || "HR" === f ? (t = x.create(e || m), XC(a, t)) : t = c.cloneNode(!1), r = t, !1 === vm(a)) x.setAttrib(t, "style", null), x.setAttrib(t, "class", null);
                    else
                        do {
                            if (i[o.nodeName]) {
                                if (Fu(o)) continue;
                                n = o.cloneNode(!1), x.setAttrib(n, "id", ""), t.hasChildNodes() ? n.appendChild(t.firstChild) : r = n, t.appendChild(n)
                            }
                        } while ((o = o.parentNode) && o !== u);
                    return jC(r), t
                },
                k = function(e) {
                    var t, n, r, o;
                    if (o = WC(e, s, i), _o.isText(s) && (e ? 0 < o : o < s.nodeValue.length)) return !1;
                    if (s.parentNode === c && g && !e) return !0;
                    if (e && _o.isElement(s) && s === c.firstChild) return !0;
                    if (qC(s, "TABLE") || qC(s, "HR")) return g && !e || !g && e;
                    for (t = new ro(s, c), _o.isText(s) && (e && 0 === o ? t.prev() : e || o !== s.nodeValue.length || t.next()); n = t.current();) {
                        if (_o.isElement(n)) {
                            if (!n.getAttribute("data-mce-bogus") && (r = n.nodeName.toLowerCase(), N[r] && "br" !== r)) return !1
                        } else if (_o.isText(n) && !/^[ \t\r\n]*$/.test(n.nodeValue)) return !1;
                        e ? t.prev() : t.next()
                    }
                    return !0
                },
                T = function() {
                    r = /^(H[1-6]|PRE|FIGURE)$/.test(f) && "HGROUP" !== d ? S(m) : S(), bm(a) && $C(x, l) && x.isEmpty(c) ? r = x.split(l, c) : x.insertAfter(r, c), OC(a, r)
                };
            jm(x, E).each(function(e) {
                E.setStart(e.startContainer, e.startOffset), E.setEnd(e.endContainer, e.endOffset)
            }), s = E.startContainer, i = E.startOffset, m = mm(a), n = e.shiftKey, _o.isElement(s) && s.hasChildNodes() && (g = i > s.childNodes.length - 1, s = s.childNodes[Math.min(i, s.childNodes.length - 1)] || s, i = g && _o.isText(s) ? s.nodeValue.length : 0), (u = KC(x, s)) && ((m && !n || !m && n) && (s = function(e, t, n, r, o) {
                var i, a, u, s, c, l, f, d = t || "P",
                    m = e.dom,
                    g = KC(m, r);
                if (!(a = m.getParent(r, m.isBlock)) || !$C(m, a)) {
                    if (l = (a = a || g) === e.getBody() || (f = a) && /^(TD|TH|CAPTION)$/.test(f.nodeName) ? a.nodeName.toLowerCase() : a.parentNode.nodeName.toLowerCase(), !a.hasChildNodes()) return i = m.create(d), XC(e, i), a.appendChild(i), n.setStart(i, 0), n.setEnd(i, 0), i;
                    for (s = r; s.parentNode !== a;) s = s.parentNode;
                    for (; s && !m.isBlock(s);) s = (u = s).previousSibling;
                    if (u && e.schema.isValidChild(l, d.toLowerCase())) {
                        for (i = m.create(d), XC(e, i), u.parentNode.insertBefore(i, u), s = u; s && !m.isBlock(s);) c = s.nextSibling, i.appendChild(s), s = c;
                        n.setStart(r, o), n.setEnd(r, o)
                    }
                }
                return r
            }(a, m, E, s, i)), c = x.getParent(s, x.isBlock), l = c ? x.getParent(c.parentNode, x.isBlock) : null, f = c ? c.nodeName.toUpperCase() : "", "LI" !== (d = l ? l.nodeName.toUpperCase() : "") || e.ctrlKey || (l = (c = l).parentNode, f = d), /^(LI|DT|DD)$/.test(f) && x.isEmpty(c) ? HC(a, S, l, c, m) : m && c === a.getBody() || (m = m || "P", ma(c) ? (r = wa(c), x.isEmpty(c) && jC(c), OC(a, r)) : k() ? T() : k(!0) ? (r = c.parentNode.insertBefore(S(), c), OC(a, qC(c, "HR") ? r : c)) : ((t = (y = E, C = y.cloneRange(), C.setStart(y.startContainer, WC(!0, y.startContainer, y.startOffset)), C.setEnd(y.endContainer, WC(!1, y.endContainer, y.endOffset)), C).cloneRange()).setEndAfter(c), o = t.extractContents(), b = o, F(Ui(rr.fromDom(b), lr), function(e) {
                var t = e.dom();
                t.nodeValue = la(t.nodeValue)
            }), function(e) {
                for (; _o.isText(e) && (e.nodeValue = e.nodeValue.replace(/^[\r\n]+/, "")), e = e.firstChild;);
            }(o), r = o.firstChild, x.insertAfter(o, c), function(e, t, n) {
                var r, o = n,
                    i = [];
                if (o) {
                    for (; o = o.firstChild;) {
                        if (e.isBlock(o)) return;
                        _o.isElement(o) && !t[o.nodeName.toLowerCase()] && i.push(o)
                    }
                    for (r = i.length; r--;) !(o = i[r]).hasChildNodes() || o.firstChild === o.lastChild && "" === o.firstChild.nodeValue ? e.remove(o) : (a = e, (u = o) && "A" === u.nodeName && a.isEmpty(u) && e.remove(o));
                    var a, u
                }
            }(x, N, r), p = x, (h = c).normalize(), (v = h.lastChild) && !/^(left|right)$/gi.test(p.getStyle(v, "float", !0)) || p.add(h, "br"), x.isEmpty(c) && jC(c), r.normalize(), x.isEmpty(r) ? (x.remove(r), T()) : OC(a, r)), x.setAttrib(r, "id", ""), a.fire("NewBlock", {
                newBlock: r
            })))
        },
        GC = function(e, t) {
            return LC(e).filter(function(e) {
                return 0 < t.length && Dr(rr.fromDom(e), t)
            }).isSome()
        },
        JC = function(e) {
            return GC(e, pm(e))
        },
        QC = function(e) {
            return GC(e, hm(e))
        },
        ZC = nf([{
            br: []
        }, {
            block: []
        }, {
            none: []
        }]),
        ex = function(e, t) {
            return QC(e)
        },
        tx = function(n) {
            return function(e, t) {
                return "" === mm(e) === n
            }
        },
        nx = function(n) {
            return function(e, t) {
                return MC(e) === n
            }
        },
        rx = function(n, r) {
            return function(e, t) {
                return IC(e) === n.toUpperCase() === r
            }
        },
        ox = function(e) {
            return rx("pre", e)
        },
        ix = function(n) {
            return function(e, t) {
                return dm(e) === n
            }
        },
        ax = function(e, t) {
            return JC(e)
        },
        ux = function(e, t) {
            return t
        },
        sx = function(e) {
            var t = mm(e),
                n = PC(e.dom, e.selection.getStart());
            return n && e.schema.isValidChild(n.nodeName, t || "P")
        },
        cx = function(e, t) {
            return function(n, r) {
                return U(e, function(e, t) {
                    return e && t(n, r)
                }, !0) ? A.some(t) : A.none()
            }
        },
        lx = function(e, t) {
            return Hf([cx([ex], ZC.none()), cx([rx("summary", !0)], ZC.br()), cx([ox(!0), ix(!1), ux], ZC.br()), cx([ox(!0), ix(!1)], ZC.block()), cx([ox(!0), ix(!0), ux], ZC.block()), cx([ox(!0), ix(!0)], ZC.br()), cx([nx(!0), ux], ZC.br()), cx([nx(!0)], ZC.block()), cx([tx(!0), ux, sx], ZC.block()), cx([tx(!0)], ZC.br()), cx([ax], ZC.br()), cx([tx(!1), ux], ZC.br()), cx([sx], ZC.block())], [e, t.shiftKey]).getOr(ZC.none())
        },
        fx = function(e, t) {
            lx(e, t).fold(function() {
                Zm(e, t)
            }, function() {
                YC(e, t)
            }, o)
        },
        dx = function(o) {
            o.on("keydown", function(e) {
                var t, n, r;
                e.keyCode === Oh.ENTER && (t = o, (n = e).isDefaultPrevented() || (n.preventDefault(), (r = t.undoManager).typing && (r.typing = !1, r.add()), t.undoManager.transact(function() {
                    !1 === t.selection.isCollapsed() && t.execCommand("Delete"), fx(t, n)
                })))
            })
        },
        mx = function(n, r) {
            var e = r.container(),
                t = r.offset();
            return _o.isText(e) ? (e.insertData(t, n), A.some(du(e, t + n.length))) : Ps(r).map(function(e) {
                var t = rr.fromText(n);
                return r.isAtEnd() ? Ei(e, t) : Ni(e, t), du(t.dom(), n.length)
            })
        },
        gx = d(mx, "\xa0"),
        px = d(mx, " "),
        hx = function(t, n, r) {
            var e = z(Hl(rr.fromDom(r.container()), n), co);
            return ee(e).fold(function() {
                return ic.navigate(t, n.dom(), r).forall(function(e) {
                    return !1 === hs(e, r, n.dom())
                })
            }, function(e) {
                return ic.navigate(t, e.dom(), r).isNone()
            })
        },
        vx = d(hx, !1),
        bx = d(hx, !0),
        yx = function(e) {
            return du.isTextPosition(e) && !e.isAtStart() && !e.isAtEnd()
        },
        Cx = function(e, t) {
            var n = z(Hl(rr.fromDom(t.container()), e), co);
            return ee(n).getOr(e)
        },
        xx = function(e, t) {
            return yx(t) ? Os(t) : Os(t) || ic.prevPosition(Cx(e, t).dom(), t).exists(Os)
        },
        wx = function(e, t) {
            return yx(t) ? Bs(t) : Bs(t) || ic.nextPosition(Cx(e, t).dom(), t).exists(Bs)
        },
        Nx = function(e) {
            return Ps(e).bind(function(e) {
                return $i(e, cr)
            }).exists(function(e) {
                return t = wr(e, "white-space"), M(["pre", "pre-line", "pre-wrap"], t);
                var t
            })
        },
        Ex = function(e, t) {
            return o = e, i = t, ic.prevPosition(o.dom(), i).isNone() || (n = e, r = t, ic.nextPosition(n.dom(), r).isNone()) || vx(e, t) || bx(e, t) || uf(e, t) || af(e, t);
            var n, r, o, i
        },
        Sx = function(e, t) {
            return ns(e.charAt(t))
        },
        kx = function(e) {
            var t = e.container();
            return _o.isText(t) && Wn(t.data, "\xa0")
        },
        Tx = function(e, t, n) {
            var r, o, i = du(t, 0);
            return Sx(n, 0) && (r = e, Nx(o = i) || !(vx(r, o) || uf(r, o) || xx(r, o))) ? " " + n.slice(1) : n
        },
        Ax = function(e, t, n) {
            var r, o, i = du(t, n.length);
            return Sx(n, n.length - 1) && (r = e, Nx(o = i) || !(bx(r, o) || af(r, o) || wx(r, o))) ? n.slice(0, -1) + " " : n
        },
        Rx = function(i, e) {
            return A.some(e).filter(kx).bind(function(e) {
                var t, n = e.container(),
                    r = n.nodeValue,
                    o = Tx(i, n, (t = Ax(i, n, r), $(t.split(""), function(e, t, n) {
                        return ns(e) && 0 < t && t < n.length - 1 && os(n[t - 1]) && os(n[t + 1]) ? " " : e
                    }).join("")));
                return r !== o ? (e.container().nodeValue = o, A.some(e)) : A.none()
            })
        },
        _x = function(t) {
            var e = rr.fromDom(t.getBody());
            t.selection.isCollapsed() && Rx(e, du.fromRangeStart(t.selection.getRng())).each(function(e) {
                t.selection.setRng(e.toRange())
            })
        },
        Dx = function(r, o) {
            return function(e) {
                return t = r, !Nx(n = e) && (Ex(t, n) || xx(t, n) || wx(t, n)) ? gx(o) : px(o);
                var t, n
            }
        },
        Bx = function(e) {
            var t, n, r = hu.fromRangeStart(e.selection.getRng()),
                o = rr.fromDom(e.getBody());
            if (e.selection.isCollapsed()) {
                var i = d(El.isInlineTarget, e),
                    a = hu.fromRangeStart(e.selection.getRng());
                return ad(i, e.getBody(), a).bind((n = o, function(e) {
                    return e.fold(function(e) {
                        return ic.prevPosition(n.dom(), hu.before(e))
                    }, function(e) {
                        return ic.firstPositionIn(e)
                    }, function(e) {
                        return ic.lastPositionIn(e)
                    }, function(e) {
                        return ic.nextPosition(n.dom(), hu.after(e))
                    })
                })).bind(Dx(o, r)).exists((t = e, function(e) {
                    return t.selection.setRng(e.toRange()), t.nodeChanged(), !0
                }))
            }
            return !1
        },
        Ox = function(r) {
            r.on("keydown", function(e) {
                var t, n;
                !1 === e.isDefaultPrevented() && (t = r, n = e, SC([{
                    keyCode: Oh.SPACEBAR,
                    action: EC(Bx, t)
                }], n).each(function(e) {
                    n.preventDefault()
                }))
            })
        },
        Px = function(e, t) {
            var n;
            t.hasAttribute("data-mce-caret") && (wa(t), (n = e).selection.setRng(n.selection.getRng()), e.selection.scrollIntoView(t))
        },
        Lx = function(e, t) {
            var n, r = (n = e, Ki(rr.fromDom(n.getBody()), "*[data-mce-caret]").fold(j(null), function(e) {
                return e.dom()
            }));
            if (r) return "compositionstart" === t.type ? (t.preventDefault(), t.stopPropagation(), void Px(e, r)) : void(ha(r) && (Px(e, r), e.undoManager.add()))
        },
        Ix = function(e) {
            e.on("keyup compositionstart", d(Lx, e))
        },
        Mx = tr.detect().browser,
        Fx = function(t) {
            var e, n;
            e = t, n = Di(function() {
                e.composing || _x(e)
            }, 0), Mx.isIE() && (e.on("keypress", function(e) {
                n.throttle()
            }), e.on("remove", function(e) {
                n.cancel()
            })), t.on("input", function(e) {
                !1 === e.isComposing && _x(t)
            })
        },
        zx = function(e) {
            var t = bd.setupSelectedState(e);
            Ix(e), kC(e, t), DC(e, t), dx(e), Ox(e), Fx(e)
        };

    function Ux(u) {
        var s, n, r, o = Yt.each,
            c = Oh.BACKSPACE,
            l = Oh.DELETE,
            f = u.dom,
            d = u.selection,
            e = u.settings,
            t = u.parser,
            i = de.gecko,
            a = de.ie,
            m = de.webkit,
            g = "data:text/mce-internal,",
            p = a ? "Text" : "URL",
            h = function(e, t) {
                try {
                    u.getDoc().execCommand(e, !1, t)
                } catch (n) {}
            },
            v = function(e) {
                return e.isDefaultPrevented()
            },
            b = function() {
                u.shortcuts.add("meta+a", null, "SelectAll")
            },
            y = function() {
                u.on("keydown", function(e) {
                    if (!v(e) && e.keyCode === c && d.isCollapsed() && 0 === d.getRng().startOffset) {
                        var t = d.getNode().previousSibling;
                        if (t && t.nodeName && "table" === t.nodeName.toLowerCase()) return e.preventDefault(), !1
                    }
                })
            },
            C = function() {
                u.inline || (u.contentStyles.push("body {min-height: 150px}"), u.on("click", function(e) {
                    var t;
                    if ("HTML" === e.target.nodeName) {
                        if (11 < de.ie) return void u.getBody().focus();
                        t = u.selection.getRng(), u.getBody().focus(), u.selection.setRng(t), u.selection.normalize(), u.nodeChanged()
                    }
                }))
            };
        return u.on("keydown", function(e) {
            var t, n, r, o, i;
            if (!v(e) && e.keyCode === Oh.BACKSPACE && (n = (t = d.getRng()).startContainer, r = t.startOffset, o = f.getRoot(), i = n, t.collapsed && 0 === r)) {
                for (; i && i.parentNode && i.parentNode.firstChild === i && i.parentNode !== o;) i = i.parentNode;
                "BLOCKQUOTE" === i.tagName && (u.formatter.toggle("blockquote", null, i), (t = f.createRng()).setStart(n, 0), t.setEnd(n, 0), d.setRng(t))
            }
        }), s = function(e) {
            var t = f.create("body"),
                n = e.cloneContents();
            return t.appendChild(n), d.serializer.serialize(t, {
                format: "html"
            })
        }, u.on("keydown", function(e) {
            var t, n, r, o, i, a = e.keyCode;
            if (!v(e) && (a === l || a === c)) {
                if (t = u.selection.isCollapsed(), n = u.getBody(), t && !f.isEmpty(n)) return;
                if (!t && (r = u.selection.getRng(), o = s(r), (i = f.createRng()).selectNode(u.getBody()), o !== s(i))) return;
                e.preventDefault(), u.setContent(""), n.firstChild && f.isBlock(n.firstChild) ? u.selection.setCursorLocation(n.firstChild, 0) : u.selection.setCursorLocation(n, 0), u.nodeChanged()
            }
        }), de.windowsPhone || u.on("keyup focusin mouseup", function(e) {
            Oh.modifierPressed(e) || d.normalize()
        }, !0), m && (u.settings.content_editable || f.bind(u.getDoc(), "mousedown mouseup", function(e) {
            var t;
            if (e.target === u.getDoc().documentElement)
                if (t = d.getRng(), u.getBody().focus(), "mousedown" === e.type) {
                    if (pa(t.startContainer)) return;
                    d.placeCaretAt(e.clientX, e.clientY)
                } else d.setRng(t)
        }), u.on("click", function(e) {
            var t = e.target;
            /^(IMG|HR)$/.test(t.nodeName) && "false" !== f.getContentEditableParent(t) && (e.preventDefault(), u.selection.select(t), u.nodeChanged()), "A" === t.nodeName && f.hasClass(t, "mce-item-anchor") && (e.preventDefault(), d.select(t))
        }), e.forced_root_block && u.on("init", function() {
            h("DefaultParagraphSeparator", e.forced_root_block)
        }), u.on("init", function() {
            u.dom.bind(u.getBody(), "submit", function(e) {
                e.preventDefault()
            })
        }), y(), t.addNodeFilter("br", function(e) {
            for (var t = e.length; t--;) "Apple-interchange-newline" === e[t].attr("class") && e[t].remove()
        }), de.iOS ? (u.inline || u.on("keydown", function() {
            document.activeElement === document.body && u.getWin().focus()
        }), C(), u.on("click", function(e) {
            var t = e.target;
            do {
                if ("A" === t.tagName) return void e.preventDefault()
            } while (t = t.parentNode)
        }), u.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")) : b()), 11 <= de.ie && (C(), y()), de.ie && (b(), h("AutoUrlDetect", !1), u.on("dragstart", function(e) {
            var t, n, r;
            (t = e).dataTransfer && (u.selection.isCollapsed() && "IMG" === t.target.tagName && d.select(t.target), 0 < (n = u.selection.getContent()).length && (r = g + escape(u.id) + "," + escape(n), t.dataTransfer.setData(p, r)))
        }), u.on("drop", function(e) {
            if (!v(e)) {
                var t = (i = e).dataTransfer && (a = i.dataTransfer.getData(p)) && 0 <= a.indexOf(g) ? (a = a.substr(g.length).split(","), {
                    id: unescape(a[0]),
                    html: unescape(a[1])
                }) : null;
                if (t && t.id !== u.id) {
                    e.preventDefault();
                    var n = uy(e.x, e.y, u.getDoc());
                    d.setRng(n), r = t.html, o = !0, u.queryCommandSupported("mceInsertClipboardContent") ? u.execCommand("mceInsertClipboardContent", !1, {
                        content: r,
                        internal: o
                    }) : u.execCommand("mceInsertContent", !1, r)
                }
            }
            var r, o, i, a
        })), i && (u.on("keydown", function(e) {
            if (!v(e) && e.keyCode === c) {
                if (!u.getBody().getElementsByTagName("hr").length) return;
                if (d.isCollapsed() && 0 === d.getRng().startOffset) {
                    var t = d.getNode(),
                        n = t.previousSibling;
                    if ("HR" === t.nodeName) return f.remove(t), void e.preventDefault();
                    n && n.nodeName && "hr" === n.nodeName.toLowerCase() && (f.remove(n), e.preventDefault())
                }
            }
        }), Range.prototype.getClientRects || u.on("mousedown", function(e) {
            if (!v(e) && "HTML" === e.target.nodeName) {
                var t = u.getBody();
                t.blur(), ve.setEditorTimeout(u, function() {
                    t.focus()
                })
            }
        }), n = function() {
            var e = f.getAttribs(d.getStart().cloneNode(!1));
            return function() {
                var t = d.getStart();
                t !== u.getBody() && (f.setAttrib(t, "style", null), o(e, function(e) {
                    t.setAttributeNode(e.cloneNode(!0))
                }))
            }
        }, r = function() {
            return !d.isCollapsed() && f.getParent(d.getStart(), f.isBlock) !== f.getParent(d.getEnd(), f.isBlock)
        }, u.on("keypress", function(e) {
            var t;
            if (!v(e) && (8 === e.keyCode || 46 === e.keyCode) && r()) return t = n(), u.getDoc().execCommand("delete", !1, null), t(), e.preventDefault(), !1
        }), f.bind(u.getDoc(), "cut", function(e) {
            var t;
            !v(e) && r() && (t = n(), ve.setEditorTimeout(u, function() {
                t()
            }))
        }), e.readonly || u.on("BeforeExecCommand MouseDown", function() {
            h("StyleWithCSS", !1), h("enableInlineTableEditing", !1), e.object_resizing || h("enableObjectResizing", !1)
        }), u.on("SetContent ExecCommand", function(e) {
            "setcontent" !== e.type && "mceInsertLink" !== e.command || o(f.select("a"), function(e) {
                var t = e.parentNode,
                    n = f.getRoot();
                if (t.lastChild === e) {
                    for (; t && !f.isBlock(t);) {
                        if (t.parentNode.lastChild !== t || t === n) return;
                        t = t.parentNode
                    }
                    f.add(t, "br", {
                        "data-mce-bogus": 1
                    })
                }
            })
        }), u.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"), de.mac && u.on("keydown", function(e) {
            !Oh.metaKeyPressed(e) || e.shiftKey || 37 !== e.keyCode && 39 !== e.keyCode || (e.preventDefault(), u.selection.getSel().modify("move", 37 === e.keyCode ? "backward" : "forward", "lineboundary"))
        }), y()), {
            refreshContentEditable: function() {},
            isHidden: function() {
                var e;
                return !i || u.removed ? 0 : !(e = u.selection.getSel()) || !e.rangeCount || 0 === e.rangeCount
            }
        }
    }
    var Vx = function(e) {
            return _o.isElement(e) && mo(rr.fromDom(e))
        },
        Hx = function(t) {
            t.on("click", function(e) {
                3 <= e.detail && function(e) {
                    var t = e.selection.getRng(),
                        n = du.fromRangeStart(t),
                        r = du.fromRangeEnd(t);
                    if (du.isElementPosition(n)) {
                        var o = n.container();
                        Vx(o) && ic.firstPositionIn(o).each(function(e) {
                            return t.setStart(e.container(), e.offset())
                        })
                    }
                    du.isElementPosition(r) && (o = n.container(), Vx(o) && ic.lastPositionIn(o).each(function(e) {
                        return t.setEnd(e.container(), e.offset())
                    })), e.selection.setRng(il(t))
                }(t)
            })
        },
        jx = function(e) {
            var t, n;
            (t = e).on("click", function(e) {
                t.dom.getParent(e.target, "details") && e.preventDefault()
            }), (n = e).parser.addNodeFilter("details", function(e) {
                F(e, function(e) {
                    e.attr("data-mce-open", e.attr("open")), e.attr("open", "open")
                })
            }), n.serializer.addNodeFilter("details", function(e) {
                F(e, function(e) {
                    var t = e.attr("data-mce-open");
                    e.attr("open", R(t) ? t : null), e.attr("data-mce-open", null)
                })
            })
        },
        qx = gi.DOM,
        $x = function(e) {
            var t;
            e.bindPendingEventDelegates(), e.initialized = !0, e.fire("init"), e.focus(!0), e.nodeChanged({
                initial: !0
            }), e.execCallback("init_instance_callback", e), (t = e).settings.auto_focus && ve.setEditorTimeout(t, function() {
                var e;
                (e = !0 === t.settings.auto_focus ? t : t.editorManager.get(t.settings.auto_focus)).destroyed || e.focus()
            }, 100)
        },
        Wx = function(t, e) {
            var n, r, u, o, i, a, s, c, l, f = t.settings,
                d = t.getElement(),
                m = t.getDoc();
            f.inline || (t.getElement().style.visibility = t.orgVisibility), e || f.content_editable || (m.open(), m.write(t.iframeHTML), m.close()), f.content_editable && (t.on("remove", function() {
                var e = this.getBody();
                qx.removeClass(e, "mce-content-body"), qx.removeClass(e, "mce-edit-focus"), qx.setAttrib(e, "contentEditable", null)
            }), qx.addClass(d, "mce-content-body"), t.contentDocument = m = f.content_document || document, t.contentWindow = f.content_window || window, t.bodyElement = d, f.content_document = f.content_window = null, f.root_name = d.nodeName.toLowerCase()), (n = t.getBody()).disabled = !0, t.readonly = f.readonly, t.readonly || (t.inline && "static" === qx.getStyle(n, "position", !0) && (n.style.position = "relative"), n.contentEditable = t.getParam("content_editable_state", !0)), n.disabled = !1, t.editorUpload = Vp(t), t.schema = ti(f), t.dom = gi(m, {
                keep_values: !0,
                url_converter: t.convertURL,
                url_converter_scope: t,
                hex_colors: f.force_hex_style_colors,
                class_filter: f.class_filter,
                update_styles: !0,
                root_element: t.inline ? t.getBody() : null,
                collect: f.content_editable,
                schema: t.schema,
                contentCssCors: Rm(t),
                onSetAttrib: function(e) {
                    t.fire("SetAttrib", e)
                }
            }), t.parser = ((o = qb((u = t).settings, u.schema)).addAttributeFilter("src,href,style,tabindex", function(e, t) {
                for (var n, r, o, i = e.length, a = u.dom; i--;)
                    if (r = (n = e[i]).attr(t), o = "data-mce-" + t, !n.attributes.map[o]) {
                        if (0 === r.indexOf("data:") || 0 === r.indexOf("blob:")) continue;
                        "style" === t ? ((r = a.serializeStyle(a.parseStyle(r), n.name)).length || (r = null), n.attr(o, r), n.attr(t, r)) : "tabindex" === t ? (n.attr(o, r), n.attr(t, null)) : n.attr(o, u.convertURL(r, t, n.name))
                    }
            }), o.addNodeFilter("script", function(e) {
                for (var t, n, r = e.length; r--;) 0 !== (n = (t = e[r]).attr("type") || "no/type").indexOf("mce-") && t.attr("type", "mce-" + n)
            }), o.addNodeFilter("#cdata", function(e) {
                for (var t, n = e.length; n--;)(t = e[n]).type = 8, t.name = "#comment", t.value = "[CDATA[" + t.value + "]]"
            }), o.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", function(e) {
                for (var t, n = e.length, r = u.schema.getNonEmptyElements(); n--;)(t = e[n]).isEmpty(r) && 0 === t.getAll("br").length && (t.append(new Ob("br", 1)).shortEnded = !0)
            }), o), t.serializer = Yb(f, t), t.selection = Ly(t.dom, t.getWin(), t.serializer, t), t.annotator = Uc(t), t.formatter = xb(t), t.undoManager = uv(t), t._nodeChangeDispatcher = new Qp(t), t._selectionOverrides = zh(t), jx(t), Hx(t), zx(t), Wp(t), t.fire("PreInit"), f.browser_spellcheck || f.gecko_spellcheck || (m.body.spellcheck = !1, qx.setAttrib(n, "spellcheck", "false")), t.quirks = Ux(t), t.fire("PostRender"), f.directionality && (n.dir = f.directionality), f.nowrap && (n.style.whiteSpace = "nowrap"), f.protect && t.on("BeforeSetContent", function(t) {
                Yt.each(f.protect, function(e) {
                    t.content = t.content.replace(e, function(e) {
                        return "\x3c!--mce:protected " + escape(e) + "--\x3e"
                    })
                })
            }), t.on("SetContent", function() {
                t.addVisual(t.getBody())
            }), t.load({
                initial: !0,
                format: "html"
            }), t.startContent = t.getContent({
                format: "raw"
            }), t.on("compositionstart compositionend", function(e) {
                t.composing = "compositionstart" === e.type
            }), 0 < t.contentStyles.length && (r = "", Yt.each(t.contentStyles, function(e) {
                r += e + "\r\n"
            }), t.dom.addStyle(r)), (i = t, i.inline ? qx.styleSheetLoader : i.dom.styleSheetLoader).loadAll(t.contentCSS, function(e) {
                $x(t)
            }, function(e) {
                $x(t)
            }), f.content_style && (a = t, s = f.content_style, c = rr.fromDom(a.getDoc().head), l = rr.fromTag("style"), hr(l, "type", "text/css"), ki(l, rr.fromText(s)), ki(c, l))
        },
        Kx = gi.DOM,
        Xx = function(e, t) {
            var n, r, o, i, a, u, s, c = e.editorManager.translate("Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help"),
                l = (n = e.id, r = c, o = t.height, i = am(e), s = rr.fromTag("iframe"), vr(s, i), vr(s, {
                    id: n + "_ifr",
                    frameBorder: "0",
                    allowTransparency: "true",
                    title: r
                }), xr(s, {
                    width: "100%",
                    height: (a = o, u = "number" == typeof a ? a + "px" : a, u || ""),
                    display: "block"
                }), s).dom();
            l.onload = function() {
                l.onload = null, e.fire("load")
            };
            var f, d, m, g, p = function(e, t) {
                if (document.domain !== window.location.hostname && de.ie && de.ie < 12) {
                    var n = Up.uuid("mce");
                    e[n] = function() {
                        Wx(e)
                    };
                    var r = 'javascript:(function(){document.open();document.domain="' + document.domain + '";var ed = window.parent.tinymce.get("' + e.id + '");document.write(ed.iframeHTML);document.close();ed.' + n + "(true);})()";
                    return Kx.setAttrib(t, "src", r), !0
                }
                return !1
            }(e, l);
            return e.contentAreaContainer = t.iframeContainer, e.iframeElement = l, e.iframeHTML = (g = um(f = e) + "<html><head>", sm(f) !== f.documentBaseUrl && (g += '<base href="' + f.documentBaseURI.getURI() + '" />'), g += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />', d = cm(f), m = lm(f), fm(f) && (g += '<meta http-equiv="Content-Security-Policy" content="' + fm(f) + '" />'), g += '</head><body id="' + d + '" class="mce-content-body ' + m + '" data-id="' + f.id + '"><br></body></html>'), Kx.add(t.iframeContainer, l), p
        },
        Yx = function(e, t) {
            var n = Xx(e, t);
            t.editorContainer && (Kx.get(t.editorContainer).style.display = e.orgDisplay, e.hidden = Kx.isHidden(t.editorContainer)), e.getElement().style.display = "none", Kx.setAttrib(e.id, "aria-hidden", "true"), n || Wx(e)
        },
        Gx = gi.DOM,
        Jx = function(t, n, e) {
            var r, o, i = Sp.get(e);
            if (r = Sp.urls[e] || t.documentBaseUrl.replace(/\/$/, ""), e = Yt.trim(e), i && -1 === Yt.inArray(n, e)) {
                if (Yt.each(Sp.dependencies(e), function(e) {
                    Jx(t, n, e)
                }), t.plugins[e]) return;
                o = new i(t, r, t.$), (t.plugins[e] = o).init && (o.init(t, r), n.push(e))
            }
        },
        Qx = function(e) {
            return e.replace(/^\-/, "")
        },
        Zx = function(e) {
            return {
                editorContainer: e,
                iframeContainer: e
            }
        },
        ew = function(e) {
            var t, n, r = e.getElement();
            return e.inline ? Zx(null) : (t = r, n = Gx.create("div"), Gx.insertAfter(n, t), Zx(n))
        },
        tw = function(e) {
            var t, n, r, o, i, a, u, s, c, l, f, d = e.settings,
                m = e.getElement();
            return e.orgDisplay = m.style.display, R(d.theme) ? (l = (o = e).settings, f = o.getElement(), i = l.width || Gx.getStyle(f, "width") || "100%", a = l.height || Gx.getStyle(f, "height") || f.offsetHeight, u = l.min_height || 100, (s = /^[0-9\.]+(|px)$/i).test("" + i) && (i = Math.max(parseInt(i, 10), 100)), s.test("" + a) && (a = Math.max(parseInt(a, 10), u)), c = o.theme.renderUI({
                targetNode: f,
                width: i,
                height: a,
                deltaWidth: l.delta_width,
                deltaHeight: l.delta_height
            }), l.content_editable || (a = (c.iframeHeight || a) + ("number" == typeof a ? c.deltaHeight || 0 : "")) < u && (a = u), c.height = a, c) : P(d.theme) ? (r = (t = e).getElement(), (n = t.settings.theme(t, r)).editorContainer.nodeType && (n.editorContainer.id = n.editorContainer.id || t.id + "_parent"), n.iframeContainer && n.iframeContainer.nodeType && (n.iframeContainer.id = n.iframeContainer.id || t.id + "_iframecontainer"), n.height = n.iframeHeight ? n.iframeHeight : r.offsetHeight, n) : ew(e)
        },
        nw = function(t) {
            var e, n, r, o, i, a, u = t.settings,
                s = t.getElement();
            return t.rtl = u.rtl_ui || t.editorManager.i18n.rtl, t.editorManager.i18n.setCode(u.language), u.aria_label = u.aria_label || Gx.getAttrib(s, "aria-label", t.getLang("aria.rich_text_area")), t.fire("ScriptsLoaded"), o = (n = t).settings.theme, R(o) ? (n.settings.theme = Qx(o), r = kp.get(o), n.theme = new r(n, kp.urls[o]), n.theme.init && n.theme.init(n, kp.urls[o] || n.documentBaseUrl.replace(/\/$/, ""), n.$)) : n.theme = {}, i = t, a = [], Yt.each(i.settings.plugins.split(/[ ,]/), function(e) {
                Jx(i, a, Qx(e))
            }), e = tw(t), t.editorContainer = e.editorContainer ? e.editorContainer : null, u.content_css && Yt.each(Yt.explode(u.content_css), function(e) {
                t.contentCSS.push(t.documentBaseURI.toAbsolute(e))
            }), u.content_editable ? Wx(t) : Yx(t, e)
        },
        rw = gi.DOM,
        ow = function(e) {
            return "-" === e.charAt(0)
        },
        iw = function(i, a) {
            var u = yi.ScriptLoader;
            ! function(e, t, n, r) {
                var o = t.settings,
                    i = o.theme;
                if (R(i)) {
                    if (!ow(i) && !kp.urls.hasOwnProperty(i)) {
                        var a = o.theme_url;
                        a ? kp.load(i, t.documentBaseURI.toAbsolute(a)) : kp.load(i, "themes/" + i + "/theme" + n + ".js")
                    }
                    e.loadQueue(function() {
                        kp.waitFor(i, r)
                    })
                } else r()
            }(u, i, a, function() {
                var e, t, n, r, o;
                e = u, (n = (t = i).settings).language && "en" !== n.language && !n.language_url && (n.language_url = t.editorManager.baseURL + "/langs/" + n.language + ".js"), n.language_url && !t.editorManager.i18n.data[n.language] && e.add(n.language_url), r = i.settings, o = a, Yt.isArray(r.plugins) && (r.plugins = r.plugins.join(" ")), Yt.each(r.external_plugins, function(e, t) {
                    Sp.load(t, e), r.plugins += " " + t
                }), Yt.each(r.plugins.split(/[ ,]/), function(e) {
                    if ((e = Yt.trim(e)) && !Sp.urls[e])
                        if (ow(e)) {
                            e = e.substr(1, e.length);
                            var t = Sp.dependencies(e);
                            Yt.each(t, function(e) {
                                var t = {
                                    prefix: "plugins/",
                                    resource: e,
                                    suffix: "/plugin" + o + ".js"
                                };
                                e = Sp.createUrl(t, e), Sp.load(e.resource, e)
                            })
                        } else Sp.load(e, {
                            prefix: "plugins/",
                            resource: e,
                            suffix: "/plugin" + o + ".js"
                        })
                }), u.loadQueue(function() {
                    i.removed || nw(i)
                }, i, function(e) {
                    xp(i, e[0]), i.removed || nw(i)
                })
            })
        },
        aw = function(t) {
            var e = t.settings,
                n = t.id,
                r = function() {
                    rw.unbind(window, "ready", r), t.render()
                };
            if (ke.Event.domLoaded) {
                if (t.getElement() && de.contentEditable) {
                    e.inline ? t.inline = !0 : (t.orgVisibility = t.getElement().style.visibility, t.getElement().style.visibility = "hidden");
                    var o = t.getElement().form || rw.getParent(n, "form");
                    o && (t.formElement = o, e.hidden_input && !/TEXTAREA|INPUT/i.test(t.getElement().nodeName) && (rw.insertAfter(rw.create("input", {
                        type: "hidden",
                        name: n
                    }), n), t.hasHiddenInput = !0), t.formEventDelegate = function(e) {
                        t.fire(e.type, e)
                    }, rw.bind(o, "submit reset", t.formEventDelegate), t.on("reset", function() {
                        t.setContent(t.startContent, {
                            format: "raw"
                        })
                    }), !e.submit_patch || o.submit.nodeType || o.submit.length || o._mceOldSubmit || (o._mceOldSubmit = o.submit, o.submit = function() {
                        return t.editorManager.triggerSave(), t.setDirty(!1), o._mceOldSubmit(o)
                    })), t.windowManager = hp(t), t.notificationManager = pp(t), "xml" === e.encoding && t.on("GetContent", function(e) {
                        e.save && (e.content = rw.encode(e.content))
                    }), e.add_form_submit_trigger && t.on("submit", function() {
                        t.initialized && t.save()
                    }), e.add_unload_trigger && (t._beforeUnload = function() {
                        !t.initialized || t.destroyed || t.isHidden() || t.save({
                            format: "raw",
                            no_events: !0,
                            set_dirty: !1
                        })
                    }, t.editorManager.on("BeforeUnload", t._beforeUnload)), t.editorManager.add(t), iw(t, t.suffix)
                }
            } else rw.bind(window, "ready", r)
        },
        uw = function(e, t, n) {
            var r = e.sidebars ? e.sidebars : [];
            r.push({
                name: t,
                settings: n
            }), e.sidebars = r
        },
        sw = Yt.each,
        cw = Yt.trim,
        lw = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),
        fw = {
            ftp: 21,
            http: 80,
            https: 443,
            mailto: 25
        },
        dw = function(r, e) {
            var t, n, o = this;
            if (r = cw(r), t = (e = o.settings = e || {}).base_uri, /^([\w\-]+):([^\/]{2})/i.test(r) || /^\s*#/.test(r)) o.source = r;
            else {
                var i = 0 === r.indexOf("//");
                0 !== r.indexOf("/") || i || (r = (t && t.protocol || "http") + "://mce_host" + r), /^[\w\-]*:?\/\//.test(r) || (n = e.base_uri ? e.base_uri.path : new dw(document.location.href).directory, "" == e.base_uri.protocol ? r = "//mce_host" + o.toAbsPath(n, r) : (r = /([^#?]*)([#?]?.*)/.exec(r), r = (t && t.protocol || "http") + "://mce_host" + o.toAbsPath(n, r[1]) + r[2])), r = r.replace(/@@/g, "(mce_at)"), r = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(r), sw(lw, function(e, t) {
                    var n = r[t];
                    n && (n = n.replace(/\(mce_at\)/g, "@@")), o[e] = n
                }), t && (o.protocol || (o.protocol = t.protocol), o.userInfo || (o.userInfo = t.userInfo), o.port || "mce_host" !== o.host || (o.port = t.port), o.host && "mce_host" !== o.host || (o.host = t.host), o.source = ""), i && (o.protocol = "")
            }
        };
    dw.prototype = {
        setPath: function(e) {
            e = /^(.*?)\/?(\w+)?$/.exec(e), this.path = e[0], this.directory = e[1], this.file = e[2], this.source = "", this.getURI()
        },
        toRelative: function(e) {
            var t;
            if ("./" === e) return e;
            if ("mce_host" !== (e = new dw(e, {
                base_uri: this
            })).host && this.host !== e.host && e.host || this.port !== e.port || this.protocol !== e.protocol && "" !== e.protocol) return e.getURI();
            var n = this.getURI(),
                r = e.getURI();
            return n === r || "/" === n.charAt(n.length - 1) && n.substr(0, n.length - 1) === r ? n : (t = this.toRelPath(this.path, e.path), e.query && (t += "?" + e.query), e.anchor && (t += "#" + e.anchor), t)
        },
        toAbsolute: function(e, t) {
            return (e = new dw(e, {
                base_uri: this
            })).getURI(t && this.isSameOrigin(e))
        },
        isSameOrigin: function(e) {
            if (this.host == e.host && this.protocol == e.protocol) {
                if (this.port == e.port) return !0;
                var t = fw[this.protocol];
                if (t && (this.port || t) == (e.port || t)) return !0
            }
            return !1
        },
        toRelPath: function(e, t) {
            var n, r, o, i = 0,
                a = "";
            if (e = (e = e.substring(0, e.lastIndexOf("/"))).split("/"), n = t.split("/"), e.length >= n.length)
                for (r = 0, o = e.length; r < o; r++)
                    if (r >= n.length || e[r] !== n[r]) {
                        i = r + 1;
                        break
                    } if (e.length < n.length)
                for (r = 0, o = n.length; r < o; r++)
                    if (r >= e.length || e[r] !== n[r]) {
                        i = r + 1;
                        break
                    } if (1 === i) return t;
            for (r = 0, o = e.length - (i - 1); r < o; r++) a += "../";
            for (r = i - 1, o = n.length; r < o; r++) a += r !== i - 1 ? "/" + n[r] : n[r];
            return a
        },
        toAbsPath: function(e, t) {
            var n, r, o, i = 0,
                a = [];
            for (r = /\/$/.test(t) ? "/" : "", e = e.split("/"), t = t.split("/"), sw(e, function(e) {
                e && a.push(e)
            }), e = a, n = t.length - 1, a = []; 0 <= n; n--) 0 !== t[n].length && "." !== t[n] && (".." !== t[n] ? 0 < i ? i-- : a.push(t[n]) : i++);
            return 0 !== (o = (n = e.length - i) <= 0 ? a.reverse().join("/") : e.slice(0, n).join("/") + "/" + a.reverse().join("/")).indexOf("/") && (o = "/" + o), r && o.lastIndexOf("/") !== o.length - 1 && (o += r), o
        },
        getURI: function(e) {
            var t, n = this;
            return n.source && !e || (t = "", e || (n.protocol ? t += n.protocol + "://" : t += "//", n.userInfo && (t += n.userInfo + "@"), n.host && (t += n.host), n.port && (t += ":" + n.port)), n.path && (t += n.path), n.query && (t += "?" + n.query), n.anchor && (t += "#" + n.anchor), n.source = t), n.source
        }
    }, dw.parseDataUri = function(e) {
        var t, n;
        return e = decodeURIComponent(e).split(","), (n = /data:([^;]+)/.exec(e[0])) && (t = n[1]), {
            type: t,
            data: e[1]
        }
    }, dw.getDocumentBaseUrl = function(e) {
        var t;
        return t = 0 !== e.protocol.indexOf("http") && "file:" !== e.protocol ? e.href : e.protocol + "//" + e.host + e.pathname, /^[^:]+:\/\/\/?[^\/]+\//.test(t) && (t = t.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(t) || (t += "/")), t
    };
    var mw = function(e, t, n) {
            var r, o, i, a, u;
            if (t.format = t.format ? t.format : "html", t.get = !0, t.getInner = !0, t.no_events || e.fire("BeforeGetContent", t), "raw" === t.format) r = Yt.trim(qh.trimExternal(e.serializer, n.innerHTML));
            else if ("text" === t.format) r = la(n.innerText || n.textContent);
            else {
                if ("tree" === t.format) return e.serializer.serialize(n, t);
                i = (o = e).serializer.serialize(n, t), a = mm(o), u = new RegExp("^(<" + a + "[^>]*>(&nbsp;|&#160;|\\s|\xa0|<br \\/>|)<\\/" + a + ">[\r\n]*|<br \\/>[\r\n]*)$"), r = i.replace(u, "")
            }
            return "text" === t.format || yo(rr.fromDom(n)) ? t.content = r : t.content = Yt.trim(r), t.no_events || e.fire("GetContent", t), t.content
        },
        gw = function(e, t) {
            t(e), e.firstChild && gw(e.firstChild, t), e.next && gw(e.next, t)
        },
        pw = function(e, t, n) {
            var r = function(e, n, t) {
                var r = {},
                    o = {},
                    i = [];
                for (var a in t.firstChild && gw(t.firstChild, function(t) {
                    F(e, function(e) {
                        e.name === t.name && (r[e.name] ? r[e.name].nodes.push(t) : r[e.name] = {
                            filter: e,
                            nodes: [t]
                        })
                    }), F(n, function(e) {
                        "string" == typeof t.attr(e.name) && (o[e.name] ? o[e.name].nodes.push(t) : o[e.name] = {
                            filter: e,
                            nodes: [t]
                        })
                    })
                }), r) r.hasOwnProperty(a) && i.push(r[a]);
                for (var a in o) o.hasOwnProperty(a) && i.push(o[a]);
                return i
            }(e, t, n);
            F(r, function(t) {
                F(t.filter.callbacks, function(e) {
                    e(t.nodes, t.filter.name, {})
                })
            })
        },
        hw = function(e) {
            return e instanceof Ob
        },
        vw = function(e, t) {
            var r;
            e.dom.setHTML(e.getBody(), t), ap(r = e) && ic.firstPositionIn(r.getBody()).each(function(e) {
                var t = e.getNode(),
                    n = _o.isTable(t) ? ic.firstPositionIn(t).getOr(e) : e;
                r.selection.setRng(n.toRange())
            })
        },
        bw = function(u, s, c) {
            return void 0 === c && (c = {}), c.format = c.format ? c.format : "html", c.set = !0, c.content = hw(s) ? "" : s, hw(s) || c.no_events || (u.fire("BeforeSetContent", c), s = c.content), A.from(u.getBody()).fold(j(s), function(e) {
                return hw(s) ? function(e, t, n, r) {
                    pw(e.parser.getNodeFilters(), e.parser.getAttributeFilters(), n);
                    var o = rl({
                        validate: e.validate
                    }, e.schema).serialize(n);
                    return r.content = yo(rr.fromDom(t)) ? o : Yt.trim(o), vw(e, r.content), r.no_events || e.fire("SetContent", r), n
                }(u, e, s, c) : (t = u, n = e, o = c, 0 === (r = s).length || /^\s+$/.test(r) ? (a = '<br data-mce-bogus="1">', "TABLE" === n.nodeName ? r = "<tr><td>" + a + "</td></tr>" : /^(UL|OL)$/.test(n.nodeName) && (r = "<li>" + a + "</li>"), (i = mm(t)) && t.schema.isValidChild(n.nodeName.toLowerCase(), i.toLowerCase()) ? (r = a, r = t.dom.createHTML(i, t.settings.forced_root_block_attrs, r)) : r || (r = '<br data-mce-bogus="1">'), vw(t, r), t.fire("SetContent", o)) : ("raw" !== o.format && (r = rl({
                    validate: t.validate
                }, t.schema).serialize(t.parser.parse(r, {
                    isRootContent: !0,
                    insert: !0
                }))), o.content = yo(rr.fromDom(n)) ? r : Yt.trim(r), vw(t, o.content), o.no_events || t.fire("SetContent", o)), o.content);
                var t, n, r, o, i, a
            })
        },
        yw = gi.DOM,
        Cw = function(e) {
            return A.from(e).each(function(e) {
                return e.destroy()
            })
        },
        xw = function(e) {
            if (!e.removed) {
                var t = e._selectionOverrides,
                    n = e.editorUpload,
                    r = e.getBody(),
                    o = e.getElement();
                r && e.save({
                    is_removing: !0
                }), e.removed = !0, e.unbindAllNativeEvents(), e.hasHiddenInput && o && yw.remove(o.nextSibling), !e.inline && r && (i = e, yw.setStyle(i.id, "display", i.orgDisplay)), Bg(e), e.editorManager.remove(e), yw.remove(e.getContainer()), Cw(t), Cw(n), e.destroy()
            }
            var i
        },
        ww = function(e, t) {
            var n, r, o, i = e.selection,
                a = e.dom;
            e.destroyed || (t || e.removed ? (t || (e.editorManager.off("beforeunload", e._beforeUnload), e.theme && e.theme.destroy && e.theme.destroy(), Cw(i), Cw(a)), (r = (n = e).formElement) && (r._mceOldSubmit && (r.submit = r._mceOldSubmit, r._mceOldSubmit = null), yw.unbind(r, "submit reset", n.formEventDelegate)), (o = e).contentAreaContainer = o.formElement = o.container = o.editorContainer = null, o.bodyElement = o.contentDocument = o.contentWindow = null, o.iframeElement = o.targetElm = null, o.selection && (o.selection = o.selection.win = o.selection.dom = o.selection.dom.doc = null), e.destroyed = !0) : e.remove())
        },
        Nw = gi.DOM,
        Ew = Yt.extend,
        Sw = Yt.each,
        kw = Yt.resolve,
        Tw = de.ie,
        Aw = function(e, t, n) {
            var r, o, i, a, u, s, c, l = this,
                f = l.documentBaseUrl = n.documentBaseURL,
                d = n.baseURI;
            r = l, o = e, i = f, a = n.defaultSettings, u = t, c = {
                id: o,
                theme: "modern",
                delta_width: 0,
                delta_height: 0,
                popup_css: "",
                plugins: "",
                document_base_url: i,
                add_form_submit_trigger: !0,
                submit_patch: !0,
                add_unload_trigger: !0,
                convert_urls: !0,
                relative_urls: !0,
                remove_script_host: !0,
                object_resizing: !0,
                doctype: "<!DOCTYPE html>",
                visual: !0,
                font_size_style_values: "xx-small,x-small,small,medium,large,x-large,xx-large",
                font_size_legacy_values: "xx-small,small,medium,large,x-large,xx-large,300%",
                forced_root_block: "p",
                hidden_input: !0,
                render_ui: !0,
                indentation: "40px",
                inline_styles: !0,
                convert_fonts_to_spans: !0,
                indent: "simple",
                indent_before: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
                indent_after: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
                entity_encoding: "named",
                url_converter: (s = r).convertURL,
                url_converter_scope: s,
                ie7_compat: !0
            }, t = bl(fl, c, a, u), l.settings = t, wi.language = t.language || "en", wi.languageLoad = t.language_load, wi.baseURL = n.baseURL, l.id = e, l.setDirty(!1), l.plugins = {}, l.documentBaseURI = new dw(t.document_base_url, {
                base_uri: d
            }), l.baseURI = d, l.contentCSS = [], l.contentStyles = [], l.shortcuts = new Gg(l), l.loadedCSS = {}, l.editorCommands = new Eg(l), l.suffix = n.suffix, l.editorManager = n, l.inline = t.inline, l.buttons = {}, l.menuItems = {}, t.cache_suffix && (de.cacheSuffix = t.cache_suffix.replace(/^[\?\&]+/, "")), !1 === t.override_viewport && (de.overrideViewPort = !1), n.fire("SetupEditor", {
                editor: l
            }), l.execCallback("setup", l), l.$ = pn.overrideDefaults(function() {
                return {
                    context: l.inline ? l.getBody() : l.getDoc(),
                    element: l.getBody()
                }
            })
        };
    Ew(Aw.prototype = {
        render: function() {
            aw(this)
        },
        focus: function(e) {
            ip(this, e)
        },
        hasFocus: function() {
            return ap(this)
        },
        execCallback: function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            var r, o = this.settings[e];
            if (o) return this.callbackLookup && (r = this.callbackLookup[e]) && (o = r.func, r = r.scope), "string" == typeof o && (r = (r = o.replace(/\.\w+$/, "")) ? kw(r) : 0, o = kw(o), this.callbackLookup = this.callbackLookup || {}, this.callbackLookup[e] = {
                func: o,
                scope: r
            }), o.apply(r || this, Array.prototype.slice.call(arguments, 1))
        },
        translate: function(e) {
            if (e && Yt.is(e, "string")) {
                var n = this.settings.language || "en",
                    r = this.editorManager.i18n;
                e = r.data[n + "." + e] || e.replace(/\{\#([^\}]+)\}/g, function(e, t) {
                    return r.data[n + "." + t] || "{#" + t + "}"
                })
            }
            return this.editorManager.translate(e)
        },
        getLang: function(e, t) {
            return this.editorManager.i18n.data[(this.settings.language || "en") + "." + e] || (t !== undefined ? t : "{#" + e + "}")
        },
        getParam: function(e, t, n) {
            return xl(this, e, t, n)
        },
        nodeChanged: function(e) {
            this._nodeChangeDispatcher.nodeChanged(e)
        },
        addButton: function(e, t) {
            var n = this;
            t.cmd && (t.onclick = function() {
                n.execCommand(t.cmd)
            }), t.stateSelector && "undefined" == typeof t.active && (t.active = !1), t.text || t.icon || (t.icon = e), t.tooltip = t.tooltip || t.title, n.buttons[e] = t
        },
        addSidebar: function(e, t) {
            return uw(this, e, t)
        },
        addMenuItem: function(e, t) {
            var n = this;
            t.cmd && (t.onclick = function() {
                n.execCommand(t.cmd)
            }), n.menuItems[e] = t
        },
        addContextToolbar: function(e, t) {
            var n, r = this;
            r.contextToolbars = r.contextToolbars || [], "string" == typeof e && (n = e, e = function(e) {
                return r.dom.is(e, n)
            }), r.contextToolbars.push({
                id: Up.uuid("mcet"),
                predicate: e,
                items: t
            })
        },
        addCommand: function(e, t, n) {
            this.editorCommands.addCommand(e, t, n)
        },
        addQueryStateHandler: function(e, t, n) {
            this.editorCommands.addQueryStateHandler(e, t, n)
        },
        addQueryValueHandler: function(e, t, n) {
            this.editorCommands.addQueryValueHandler(e, t, n)
        },
        addShortcut: function(e, t, n, r) {
            this.shortcuts.add(e, t, n, r)
        },
        execCommand: function(e, t, n, r) {
            return this.editorCommands.execCommand(e, t, n, r)
        },
        queryCommandState: function(e) {
            return this.editorCommands.queryCommandState(e)
        },
        queryCommandValue: function(e) {
            return this.editorCommands.queryCommandValue(e)
        },
        queryCommandSupported: function(e) {
            return this.editorCommands.queryCommandSupported(e)
        },
        show: function() {
            this.hidden && (this.hidden = !1, this.inline ? this.getBody().contentEditable = !0 : (Nw.show(this.getContainer()), Nw.hide(this.id)), this.load(), this.fire("show"))
        },
        hide: function() {
            var e = this,
                t = e.getDoc();
            e.hidden || (Tw && t && !e.inline && t.execCommand("SelectAll"), e.save(), e.inline ? (e.getBody().contentEditable = !1, e === e.editorManager.focusedEditor && (e.editorManager.focusedEditor = null)) : (Nw.hide(e.getContainer()), Nw.setStyle(e.id, "display", e.orgDisplay)), e.hidden = !0, e.fire("hide"))
        },
        isHidden: function() {
            return !!this.hidden
        },
        setProgressState: function(e, t) {
            this.fire("ProgressState", {
                state: e,
                time: t
            })
        },
        load: function(e) {
            var t, n = this.getElement();
            return this.removed ? "" : n ? ((e = e || {}).load = !0, t = this.setContent(n.value !== undefined ? n.value : n.innerHTML, e), e.element = n, e.no_events || this.fire("LoadContent", e), e.element = n = null, t) : void 0
        },
        save: function(e) {
            var t, n, r = this,
                o = r.getElement();
            if (o && r.initialized && !r.removed) return (e = e || {}).save = !0, e.element = o, e.content = r.getContent(e), e.no_events || r.fire("SaveContent", e), "raw" === e.format && r.fire("RawSaveContent", e), t = e.content, /TEXTAREA|INPUT/i.test(o.nodeName) ? o.value = t : (!e.is_removing && r.inline || (o.innerHTML = t), (n = Nw.getParent(r.id, "form")) && Sw(n.elements, function(e) {
                if (e.name === r.id) return e.value = t, !1
            })), e.element = o = null, !1 !== e.set_dirty && r.setDirty(!1), t
        },
        setContent: function(e, t) {
            return bw(this, e, t)
        },
        getContent: function(e) {
            return t = this, void 0 === (n = e) && (n = {}), A.from(t.getBody()).fold(j("tree" === n.format ? new Ob("body", 11) : ""), function(e) {
                return mw(t, n, e)
            });
            var t, n
        },
        insertContent: function(e, t) {
            t && (e = Ew({
                content: e
            }, t)), this.execCommand("mceInsertContent", !1, e)
        },
        isDirty: function() {
            return !this.isNotDirty
        },
        setDirty: function(e) {
            var t = !this.isNotDirty;
            this.isNotDirty = !e, e && e !== t && this.fire("dirty")
        },
        setMode: function(e) {
            var t, n;
            (n = e) !== zg(t = this) && (t.initialized ? Fg(t, "readonly" === n) : t.on("init", function() {
                Fg(t, "readonly" === n)
            }), Og(t, n))
        },
        getContainer: function() {
            return this.container || (this.container = Nw.get(this.editorContainer || this.id + "_parent")), this.container
        },
        getContentAreaContainer: function() {
            return this.contentAreaContainer
        },
        getElement: function() {
            return this.targetElm || (this.targetElm = Nw.get(this.id)), this.targetElm
        },
        getWin: function() {
            var e;
            return this.contentWindow || (e = this.iframeElement) && (this.contentWindow = e.contentWindow), this.contentWindow
        },
        getDoc: function() {
            var e;
            return this.contentDocument || (e = this.getWin()) && (this.contentDocument = e.document), this.contentDocument
        },
        getBody: function() {
            var e = this.getDoc();
            return this.bodyElement || (e ? e.body : null)
        },
        convertURL: function(e, t, n) {
            var r = this.settings;
            return r.urlconverter_callback ? this.execCallback("urlconverter_callback", e, n, !0, t) : !r.convert_urls || n && "LINK" === n.nodeName || 0 === e.indexOf("file:") || 0 === e.length ? e : r.relative_urls ? this.documentBaseURI.toRelative(e) : e = this.documentBaseURI.toAbsolute(e, r.remove_script_host)
        },
        addVisual: function(e) {
            var n, r = this,
                o = r.settings,
                i = r.dom;
            e = e || r.getBody(), r.hasVisual === undefined && (r.hasVisual = o.visual), Sw(i.select("table,a", e), function(e) {
                var t;
                switch (e.nodeName) {
                    case "TABLE":
                        return n = o.visual_table_class || "mce-item-table", void((t = i.getAttrib(e, "border")) && "0" !== t || !r.hasVisual ? i.removeClass(e, n) : i.addClass(e, n));
                    case "A":
                        return void(i.getAttrib(e, "href") || (t = i.getAttrib(e, "name") || e.id, n = o.visual_anchor_class || "mce-item-anchor", t && r.hasVisual ? i.addClass(e, n) : i.removeClass(e, n)))
                }
            }), r.fire("VisualAid", {
                element: e,
                hasVisual: r.hasVisual
            })
        },
        remove: function() {
            xw(this)
        },
        destroy: function(e) {
            ww(this, e)
        },
        uploadImages: function(e) {
            return this.editorUpload.uploadImages(e)
        },
        _scanForImages: function() {
            return this.editorUpload.scanForImages()
        }
    }, $g);
    var Rw, _w, Dw, Bw = {
            isEditorUIElement: function(e) {
                return -1 !== e.className.toString().indexOf("mce-")
            }
        },
        Ow = function(n, e) {
            var t, r;
            tr.detect().browser.isIE() ? (r = n).on("focusout", function() {
                gg(r)
            }) : (t = e, n.on("mouseup touchend", function(e) {
                t.throttle()
            })), n.on("keyup nodechange", function(e) {
                var t;
                "nodechange" === (t = e).type && t.selectionChange || gg(n)
            })
        },
        Pw = function(e) {
            var t, n, r, o = Di(function() {
                gg(e)
            }, 0);
            e.inline && (t = e, n = o, r = function() {
                n.throttle()
            }, gi.DOM.bind(document, "mouseup", r), t.on("remove", function() {
                gi.DOM.unbind(document, "mouseup", r)
            })), e.on("init", function() {
                Ow(e, o)
            }), e.on("remove", function() {
                o.cancel()
            })
        },
        Lw = gi.DOM,
        Iw = function(e) {
            return Bw.isEditorUIElement(e)
        },
        Mw = function(t, e) {
            var n = t ? t.settings.custom_ui_selector : "";
            return null !== Lw.getParent(e, function(e) {
                return Iw(e) || !!n && t.dom.is(e, n)
            })
        },
        Fw = function(r, e) {
            var t = e.editor;
            Pw(t), t.on("focusin", function() {
                var e = r.focusedEditor;
                e !== this && (e && e.fire("blur", {
                    focusedEditor: this
                }), r.setActive(this), (r.focusedEditor = this).fire("focus", {
                    blurredEditor: e
                }), this.focus(!0))
            }), t.on("focusout", function() {
                var t = this;
                ve.setEditorTimeout(t, function() {
                    var e = r.focusedEditor;
                    Mw(t, function() {
                        try {
                            return document.activeElement
                        } catch (e) {
                            return document.body
                        }
                    }()) || e !== t || (t.fire("blur", {
                        focusedEditor: null
                    }), r.focusedEditor = null)
                })
            }), Rw || (Rw = function(e) {
                var t, n = r.activeEditor;
                t = e.target, n && t.ownerDocument === document && (t === document.body || Mw(n, t) || r.focusedEditor !== n || (n.fire("blur", {
                    focusedEditor: null
                }), r.focusedEditor = null))
            }, Lw.bind(document, "focusin", Rw))
        },
        zw = function(e, t) {
            e.focusedEditor === t.editor && (e.focusedEditor = null), e.activeEditor || (Lw.unbind(document, "focusin", Rw), Rw = null)
        },
        Uw = function(e) {
            e.on("AddEditor", d(Fw, e)), e.on("RemoveEditor", d(zw, e))
        },
        Vw = {},
        Hw = "en",
        jw = {
            setCode: function(e) {
                e && (Hw = e, this.rtl = !!this.data[e] && "rtl" === this.data[e]._dir)
            },
            getCode: function() {
                return Hw
            },
            rtl: !1,
            add: function(e, t) {
                var n = Vw[e];
                for (var r in n || (Vw[e] = n = {}), t) n[r] = t[r];
                this.setCode(e)
            },
            translate: function(e) {
                var t = Vw[Hw] || {},
                    n = function(e) {
                        return Yt.is(e, "function") ? Object.prototype.toString.call(e) : r(e) ? "" : "" + e
                    },
                    r = function(e) {
                        return "" === e || null === e || Yt.is(e, "undefined")
                    },
                    o = function(e) {
                        return e = n(e), Yt.hasOwn(t, e) ? n(t[e]) : e
                    };
                if (r(e)) return "";
                if (Yt.is(e, "object") && Yt.hasOwn(e, "raw")) return n(e.raw);
                if (Yt.is(e, "array")) {
                    var i = e.slice(1);
                    e = o(e[0]).replace(/\{([0-9]+)\}/g, function(e, t) {
                        return Yt.hasOwn(i, t) ? n(i[t]) : e
                    })
                }
                return o(e).replace(/{context:\w+}$/, "")
            },
            data: Vw
        },
        qw = gi.DOM,
        $w = Yt.explode,
        Ww = Yt.each,
        Kw = Yt.extend,
        Xw = 0,
        Yw = !1,
        Gw = [],
        Jw = [],
        Qw = function(t) {
            Ww(Dw.get(), function(e) {
                "scroll" === t.type ? e.fire("ScrollWindow", t) : e.fire("ResizeWindow", t)
            })
        },
        Zw = function(e) {
            e !== Yw && (e ? pn(window).on("resize scroll", Qw) : pn(window).off("resize scroll", Qw), Yw = e)
        },
        eN = function(t) {
            var e = Jw;
            delete Gw[t.id];
            for (var n = 0; n < Gw.length; n++)
                if (Gw[n] === t) {
                    Gw.splice(n, 1);
                    break
                } return Jw = z(Jw, function(e) {
                return t !== e
            }), Dw.activeEditor === t && (Dw.activeEditor = 0 < Jw.length ? Jw[0] : null), Dw.focusedEditor === t && (Dw.focusedEditor = null), e.length !== Jw.length
        };
    Kw(Dw = {
        defaultSettings: {},
        $: pn,
        majorVersion: "4",
        minorVersion: "9.2",
        releaseDate: "2018-12-17",
        editors: Gw,
        i18n: jw,
        activeEditor: null,
        settings: {},
        setup: function() {
            var e, t, n, r, o = "";
            if (t = dw.getDocumentBaseUrl(document.location), /^[^:]+:\/\/\/?[^\/]+\//.test(t) && (t = t.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(t) || (t += "/")), n = window.tinymce || window.tinyMCEPreInit) e = n.base || n.baseURL, o = n.suffix;
            else {
                for (var i = document.getElementsByTagName("script"), a = 0; a < i.length; a++) {
                    var u = (r = i[a].src).substring(r.lastIndexOf("/"));
                    if (/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(r)) {
                        -1 !== u.indexOf(".min") && (o = ".min"), e = r.substring(0, r.lastIndexOf("/"));
                        break
                    }
                }!e && document.currentScript && (-1 !== (r = document.currentScript.src).indexOf(".min") && (o = ".min"), e = r.substring(0, r.lastIndexOf("/")))
            }
            this.baseURL = new dw(t).toAbsolute(e), this.documentBaseURL = t, this.baseURI = new dw(this.baseURL), this.suffix = o, Uw(this)
        },
        overrideDefaults: function(e) {
            var t, n;
            (t = e.base_url) && (this.baseURL = new dw(this.documentBaseURL).toAbsolute(t.replace(/\/+$/, "")), this.baseURI = new dw(this.baseURL)), n = e.suffix, e.suffix && (this.suffix = n);
            var r = (this.defaultSettings = e).plugin_base_urls;
            for (var o in r) wi.PluginManager.urls[o] = r[o]
        },
        init: function(r) {
            var n, u, s = this;
            u = Yt.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option tbody tfoot thead tr script noscript style textarea video audio iframe object menu", " ");
            var c = function(e) {
                    var t = e.id;
                    return t || (t = (t = e.name) && !qw.get(t) ? e.name : qw.uniqueId(), e.setAttribute("id", t)), t
                },
                l = function(e, t) {
                    return t.constructor === RegExp ? t.test(e.className) : qw.hasClass(e, t)
                },
                f = function(e) {
                    n = e
                },
                e = function() {
                    var o, i = 0,
                        a = [],
                        n = function(e, t, n) {
                            var r = new Aw(e, t, s);
                            a.push(r), r.on("init", function() {
                                ++i === o.length && f(a)
                            }), r.targetElm = r.targetElm || n, r.render()
                        };
                    qw.unbind(window, "ready", e),
                        function(e) {
                            var t = r[e];
                            t && t.apply(s, Array.prototype.slice.call(arguments, 2))
                        }("onpageload"), o = pn.unique(function(t) {
                        var e, n = [];
                        if (de.ie && de.ie < 11) return Ep("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/"), [];
                        if (t.types) return Ww(t.types, function(e) {
                            n = n.concat(qw.select(e.selector))
                        }), n;
                        if (t.selector) return qw.select(t.selector);
                        if (t.target) return [t.target];
                        switch (t.mode) {
                            case "exact":
                                0 < (e = t.elements || "").length && Ww($w(e), function(t) {
                                    var e;
                                    (e = qw.get(t)) ? n.push(e): Ww(document.forms, function(e) {
                                        Ww(e.elements, function(e) {
                                            e.name === t && (t = "mce_editor_" + Xw++, qw.setAttrib(e, "id", t), n.push(e))
                                        })
                                    })
                                });
                                break;
                            case "textareas":
                            case "specific_textareas":
                                Ww(qw.select("textarea"), function(e) {
                                    t.editor_deselector && l(e, t.editor_deselector) || t.editor_selector && !l(e, t.editor_selector) || n.push(e)
                                })
                        }
                        return n
                    }(r)), r.types ? Ww(r.types, function(t) {
                        Yt.each(o, function(e) {
                            return !qw.is(e, t.selector) || (n(c(e), Kw({}, r, t), e), !1)
                        })
                    }) : (Yt.each(o, function(e) {
                        var t;
                        (t = s.get(e.id)) && t.initialized && !(t.getContainer() || t.getBody()).parentNode && (eN(t), t.unbindAllNativeEvents(), t.destroy(!0), t.removed = !0, t = null)
                    }), 0 === (o = Yt.grep(o, function(e) {
                        return !s.get(e.id)
                    })).length ? f([]) : Ww(o, function(e) {
                        var t;
                        t = e, r.inline && t.tagName.toLowerCase() in u ? Ep("Could not initialize inline editor on invalid inline target element", e) : n(c(e), r, e)
                    }))
                };
            return s.settings = r, qw.bind(window, "ready", e), new me(function(t) {
                n ? t(n) : f = function(e) {
                    t(e)
                }
            })
        },
        get: function(t) {
            return 0 === arguments.length ? Jw.slice(0) : R(t) ? V(Jw, function(e) {
                return e.id === t
            }).getOr(null) : L(t) && Jw[t] ? Jw[t] : null
        },
        add: function(e) {
            var t = this;
            return Gw[e.id] === e || (null === t.get(e.id) && ("length" !== e.id && (Gw[e.id] = e), Gw.push(e), Jw.push(e)), Zw(!0), t.activeEditor = e, t.fire("AddEditor", {
                editor: e
            }), _w || (_w = function() {
                t.fire("BeforeUnload")
            }, qw.bind(window, "beforeunload", _w))), e
        },
        createEditor: function(e, t) {
            return this.add(new Aw(e, t, this))
        },
        remove: function(e) {
            var t, n, r = this;
            if (e) {
                if (!R(e)) return n = e, B(r.get(n.id)) ? null : (eN(n) && r.fire("RemoveEditor", {
                    editor: n
                }), 0 === Jw.length && qw.unbind(window, "beforeunload", _w), n.remove(), Zw(0 < Jw.length), n);
                Ww(qw.select(e), function(e) {
                    (n = r.get(e.id)) && r.remove(n)
                })
            } else
                for (t = Jw.length - 1; 0 <= t; t--) r.remove(Jw[t])
        },
        execCommand: function(e, t, n) {
            var r = this.get(n);
            switch (e) {
                case "mceAddEditor":
                    return this.get(n) || new Aw(n, this.settings, this).render(), !0;
                case "mceRemoveEditor":
                    return r && r.remove(), !0;
                case "mceToggleEditor":
                    return r ? r.isHidden() ? r.show() : r.hide() : this.execCommand("mceAddEditor", 0, n), !0
            }
            return !!this.activeEditor && this.activeEditor.execCommand(e, t, n)
        },
        triggerSave: function() {
            Ww(Jw, function(e) {
                e.save()
            })
        },
        addI18n: function(e, t) {
            jw.add(e, t)
        },
        translate: function(e) {
            return jw.translate(e)
        },
        setActive: function(e) {
            var t = this.activeEditor;
            this.activeEditor !== e && (t && t.fire("deactivate", {
                relatedTarget: e
            }), e.fire("activate", {
                relatedTarget: t
            })), this.activeEditor = e
        }
    }, Rg), Dw.setup();
    var tN, nN = Dw;

    function rN(n) {
        return {
            walk: function(e, t) {
                return Oc(n, e, t)
            },
            split: bv,
            normalize: function(t) {
                return jm(n, t).fold(j(!1), function(e) {
                    return t.setStart(e.startContainer, e.startOffset), t.setEnd(e.endContainer, e.endOffset), !0
                })
            }
        }
    }(tN = rN || (rN = {})).compareRanges = Im, tN.getCaretRangeFromPoint = uy, tN.getSelectedNode = Ua, tN.getNode = Va;
    var oN, iN, aN = rN,
        uN = Math.min,
        sN = Math.max,
        cN = Math.round,
        lN = function(e, t, n) {
            var r, o, i, a, u, s;
            return r = t.x, o = t.y, i = e.w, a = e.h, u = t.w, s = t.h, "b" === (n = (n || "").split(""))[0] && (o += s), "r" === n[1] && (r += u), "c" === n[0] && (o += cN(s / 2)), "c" === n[1] && (r += cN(u / 2)), "b" === n[3] && (o -= a), "r" === n[4] && (r -= i), "c" === n[3] && (o -= cN(a / 2)), "c" === n[4] && (r -= cN(i / 2)), fN(r, o, i, a)
        },
        fN = function(e, t, n, r) {
            return {
                x: e,
                y: t,
                w: n,
                h: r
            }
        },
        dN = {
            inflate: function(e, t, n) {
                return fN(e.x - t, e.y - n, e.w + 2 * t, e.h + 2 * n)
            },
            relativePosition: lN,
            findBestRelativePosition: function(e, t, n, r) {
                var o, i;
                for (i = 0; i < r.length; i++)
                    if ((o = lN(e, t, r[i])).x >= n.x && o.x + o.w <= n.w + n.x && o.y >= n.y && o.y + o.h <= n.h + n.y) return r[i];
                return null
            },
            intersect: function(e, t) {
                var n, r, o, i;
                return n = sN(e.x, t.x), r = sN(e.y, t.y), o = uN(e.x + e.w, t.x + t.w), i = uN(e.y + e.h, t.y + t.h), o - n < 0 || i - r < 0 ? null : fN(n, r, o - n, i - r)
            },
            clamp: function(e, t, n) {
                var r, o, i, a, u, s, c, l, f, d;
                return u = e.x, s = e.y, c = e.x + e.w, l = e.y + e.h, f = t.x + t.w, d = t.y + t.h, r = sN(0, t.x - u), o = sN(0, t.y - s), i = sN(0, c - f), a = sN(0, l - d), u += r, s += o, n && (c += r, l += o, u -= i, s -= a), fN(u, s, (c -= i) - u, (l -= a) - s)
            },
            create: fN,
            fromClientRect: function(e) {
                return fN(e.left, e.top, e.width, e.height)
            }
        },
        mN = {},
        gN = {
            add: function(e, t) {
                mN[e.toLowerCase()] = t
            },
            has: function(e) {
                return !!mN[e.toLowerCase()]
            },
            get: function(e) {
                var t = e.toLowerCase(),
                    n = mN.hasOwnProperty(t) ? mN[t] : null;
                if (null === n) throw new Error("Could not find module for type: " + e);
                return n
            },
            create: function(e, t) {
                var n;
                if ("string" == typeof e ? (t = t || {}).type = e : e = (t = e).type, e = e.toLowerCase(), !(n = mN[e])) throw new Error("Could not find control by type: " + e);
                return (n = new n(t)).type = e, n
            }
        },
        pN = Yt.each,
        hN = Yt.extend,
        vN = function() {};
    vN.extend = oN = function(n) {
        var e, t, r, o = this.prototype,
            i = function() {
                var e, t, n;
                if (!iN && (this.init && this.init.apply(this, arguments), t = this.Mixins))
                    for (e = t.length; e--;)(n = t[e]).init && n.init.apply(this, arguments)
            },
            a = function() {
                return this
            },
            u = function(n, r) {
                return function() {
                    var e, t = this._super;
                    return this._super = o[n], e = r.apply(this, arguments), this._super = t, e
                }
            };
        for (t in iN = !0, e = new this, iN = !1, n.Mixins && (pN(n.Mixins, function(e) {
            for (var t in e) "init" !== t && (n[t] = e[t])
        }), o.Mixins && (n.Mixins = o.Mixins.concat(n.Mixins))), n.Methods && pN(n.Methods.split(","), function(e) {
            n[e] = a
        }), n.Properties && pN(n.Properties.split(","), function(e) {
            var t = "_" + e;
            n[e] = function(e) {
                return e !== undefined ? (this[t] = e, this) : this[t]
            }
        }), n.Statics && pN(n.Statics, function(e, t) {
            i[t] = e
        }), n.Defaults && o.Defaults && (n.Defaults = hN({}, o.Defaults, n.Defaults)), n) "function" == typeof(r = n[t]) && o[t] ? e[t] = u(t, r) : e[t] = r;
        return i.prototype = e, (i.constructor = i).extend = oN, i
    };
    var bN = Math.min,
        yN = Math.max,
        CN = Math.round,
        xN = function(e, n) {
            var r, o, t, i;
            if (n = n || '"', null === e) return "null";
            if ("string" == (t = typeof e)) return o = "\bb\tt\nn\ff\rr\"\"''\\\\", n + e.replace(/([\u0080-\uFFFF\x00-\x1f\"\'\\])/g, function(e, t) {
                return '"' === n && "'" === e ? e : (r = o.indexOf(t)) + 1 ? "\\" + o.charAt(r + 1) : (e = t.charCodeAt().toString(16), "\\u" + "0000".substring(e.length) + e)
            }) + n;
            if ("object" === t) {
                if (e.hasOwnProperty && "[object Array]" === Object.prototype.toString.call(e)) {
                    for (r = 0, o = "["; r < e.length; r++) o += (0 < r ? "," : "") + xN(e[r], n);
                    return o + "]"
                }
                for (i in o = "{", e) e.hasOwnProperty(i) && (o += "function" != typeof e[i] ? (1 < o.length ? "," + n : n) + i + n + ":" + xN(e[i], n) : "");
                return o + "}"
            }
            return "" + e
        },
        wN = {
            serialize: xN,
            parse: function(e) {
                try {
                    return JSON.parse(e)
                } catch (t) {}
            }
        },
        NN = {
            callbacks: {},
            count: 0,
            send: function(t) {
                var n = this,
                    r = gi.DOM,
                    o = t.count !== undefined ? t.count : n.count,
                    i = "tinymce_jsonp_" + o;
                n.callbacks[o] = function(e) {
                    r.remove(i), delete n.callbacks[o], t.callback(e)
                }, r.add(r.doc.body, "script", {
                    id: i,
                    src: t.url,
                    type: "text/javascript"
                }), n.count++
            }
        },
        EN = {
            send: function(e) {
                var t, n = 0,
                    r = function() {
                        !e.async || 4 === t.readyState || 1e4 < n++ ? (e.success && n < 1e4 && 200 === t.status ? e.success.call(e.success_scope, "" + t.responseText, t, e) : e.error && e.error.call(e.error_scope, 1e4 < n ? "TIMED_OUT" : "GENERAL", t, e), t = null) : setTimeout(r, 10)
                    };
                if (e.scope = e.scope || this, e.success_scope = e.success_scope || e.scope, e.error_scope = e.error_scope || e.scope, e.async = !1 !== e.async, e.data = e.data || "", EN.fire("beforeInitialize", {
                    settings: e
                }), t = Tp()) {
                    if (t.overrideMimeType && t.overrideMimeType(e.content_type), t.open(e.type || (e.data ? "POST" : "GET"), e.url, e.async), e.crossDomain && (t.withCredentials = !0), e.content_type && t.setRequestHeader("Content-Type", e.content_type), e.requestheaders && Yt.each(e.requestheaders, function(e) {
                        t.setRequestHeader(e.key, e.value)
                    }), t.setRequestHeader("X-Requested-With", "XMLHttpRequest"), (t = EN.fire("beforeSend", {
                        xhr: t,
                        settings: e
                    }).xhr).send(e.data), !e.async) return r();
                    setTimeout(r, 10)
                }
            }
        };
    Yt.extend(EN, Rg);
    var SN, kN, TN, AN, RN = Yt.extend,
        _N = function(e) {
            this.settings = RN({}, e), this.count = 0
        };
    _N.sendRPC = function(e) {
        return (new _N).send(e)
    }, _N.prototype = {
        send: function(n) {
            var r = n.error,
                o = n.success;
            (n = RN(this.settings, n)).success = function(e, t) {
                void 0 === (e = wN.parse(e)) && (e = {
                    error: "JSON Parse error."
                }), e.error ? r.call(n.error_scope || n.scope, e.error, t) : o.call(n.success_scope || n.scope, e.result)
            }, n.error = function(e, t) {
                r && r.call(n.error_scope || n.scope, e, t)
            }, n.data = wN.serialize({
                id: n.id || "c" + this.count++,
                method: n.method,
                params: n.params
            }), n.content_type = "application/json", EN.send(n)
        }
    };
    try {
        SN = window.localStorage
    } catch (LN) {
        kN = {}, TN = [], AN = {
            getItem: function(e) {
                var t = kN[e];
                return t || null
            },
            setItem: function(e, t) {
                TN.push(e), kN[e] = String(t)
            },
            key: function(e) {
                return TN[e]
            },
            removeItem: function(t) {
                TN = TN.filter(function(e) {
                    return e === t
                }), delete kN[t]
            },
            clear: function() {
                TN = [], kN = {}
            },
            length: 0
        }, Object.defineProperty(AN, "length", {
            get: function() {
                return TN.length
            },
            configurable: !1,
            enumerable: !1
        }), SN = AN
    }
    var DN, BN = nN,
        ON = {
            geom: {
                Rect: dN
            },
            util: {
                Promise: me,
                Delay: ve,
                Tools: Yt,
                VK: Oh,
                URI: dw,
                Class: vN,
                EventDispatcher: kg,
                Observable: Rg,
                I18n: jw,
                XHR: EN,
                JSON: wN,
                JSONRequest: _N,
                JSONP: NN,
                LocalStorage: SN,
                Color: function(e) {
                    var n = {},
                        u = 0,
                        s = 0,
                        c = 0,
                        t = function(e) {
                            var t;
                            return "object" == typeof e ? "r" in e ? (u = e.r, s = e.g, c = e.b) : "v" in e && function(e, t, n) {
                                var r, o, i, a;
                                if (e = (parseInt(e, 10) || 0) % 360, t = parseInt(t, 10) / 100, n = parseInt(n, 10) / 100, t = yN(0, bN(t, 1)), n = yN(0, bN(n, 1)), 0 !== t) {
                                    switch (r = e / 60, i = (o = n * t) * (1 - Math.abs(r % 2 - 1)), a = n - o, Math.floor(r)) {
                                        case 0:
                                            u = o, s = i, c = 0;
                                            break;
                                        case 1:
                                            u = i, s = o, c = 0;
                                            break;
                                        case 2:
                                            u = 0, s = o, c = i;
                                            break;
                                        case 3:
                                            u = 0, s = i, c = o;
                                            break;
                                        case 4:
                                            u = i, s = 0, c = o;
                                            break;
                                        case 5:
                                            u = o, s = 0, c = i;
                                            break;
                                        default:
                                            u = s = c = 0
                                    }
                                    u = CN(255 * (u + a)), s = CN(255 * (s + a)), c = CN(255 * (c + a))
                                } else u = s = c = CN(255 * n)
                            }(e.h, e.s, e.v) : (t = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(e)) ? (u = parseInt(t[1], 10), s = parseInt(t[2], 10), c = parseInt(t[3], 10)) : (t = /#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e)) ? (u = parseInt(t[1], 16), s = parseInt(t[2], 16), c = parseInt(t[3], 16)) : (t = /#([0-F])([0-F])([0-F])/gi.exec(e)) && (u = parseInt(t[1] + t[1], 16), s = parseInt(t[2] + t[2], 16), c = parseInt(t[3] + t[3], 16)), u = u < 0 ? 0 : 255 < u ? 255 : u, s = s < 0 ? 0 : 255 < s ? 255 : s, c = c < 0 ? 0 : 255 < c ? 255 : c, n
                        };
                    return e && t(e), n.toRgb = function() {
                        return {
                            r: u,
                            g: s,
                            b: c
                        }
                    }, n.toHsv = function() {
                        return e = u, t = s, n = c, o = 0, (i = bN(e /= 255, bN(t /= 255, n /= 255))) === (a = yN(e, yN(t, n))) ? {
                            h: 0,
                            s: 0,
                            v: 100 * (o = i)
                        } : (r = (a - i) / a, {
                            h: CN(60 * ((e === i ? 3 : n === i ? 1 : 5) - (e === i ? t - n : n === i ? e - t : n - e) / ((o = a) - i))),
                            s: CN(100 * r),
                            v: CN(100 * o)
                        });
                        var e, t, n, r, o, i, a
                    }, n.toHex = function() {
                        var e = function(e) {
                            return 1 < (e = parseInt(e, 10).toString(16)).length ? e : "0" + e
                        };
                        return "#" + e(u) + e(s) + e(c)
                    }, n.parse = t, n
                }
            },
            dom: {
                EventUtils: ke,
                Sizzle: kt,
                DomQuery: pn,
                TreeWalker: ro,
                DOMUtils: gi,
                ScriptLoader: yi,
                RangeUtils: aN,
                Serializer: Yb,
                ControlSelection: ny,
                BookmarkManager: Zb,
                Selection: Ly,
                Event: ke.Event
            },
            html: {
                Styles: ri,
                Entities: qo,
                Node: Ob,
                Schema: ti,
                SaxParser: Hh,
                DomParser: qb,
                Writer: nl,
                Serializer: rl
            },
            ui: {
                Factory: gN
            },
            Env: de,
            AddOnManager: wi,
            Annotator: Uc,
            Formatter: xb,
            UndoManager: uv,
            EditorCommands: Eg,
            WindowManager: hp,
            NotificationManager: pp,
            EditorObservable: $g,
            Shortcuts: Gg,
            Editor: Aw,
            FocusManager: Bw,
            EditorManager: nN,
            DOM: gi.DOM,
            ScriptLoader: yi.ScriptLoader,
            PluginManager: wi.PluginManager,
            ThemeManager: wi.ThemeManager,
            trim: Yt.trim,
            isArray: Yt.isArray,
            is: Yt.is,
            toArray: Yt.toArray,
            makeMap: Yt.makeMap,
            each: Yt.each,
            map: Yt.map,
            grep: Yt.grep,
            inArray: Yt.inArray,
            extend: Yt.extend,
            create: Yt.create,
            walk: Yt.walk,
            createNS: Yt.createNS,
            resolve: Yt.resolve,
            explode: Yt.explode,
            _addCacheSuffix: Yt._addCacheSuffix,
            isOpera: de.opera,
            isWebKit: de.webkit,
            isIE: de.ie,
            isGecko: de.gecko,
            isMac: de.mac
        },
        PN = BN = Yt.extend(BN, ON);
    DN = PN, window.tinymce = DN, window.tinyMCE = DN,
        function(e) {
            if ("object" == typeof module) try {
                module.exports = e
            } catch (t) {}
        }(PN)
}();;
/* Ephox Fluffy plugin
 *
 * Copyright 2010-2016 Ephox Corporation.  All rights reserved.
 *
 * Version: 2.1.0-40
 */

! function() {
    (function() {
        "use strict";
        var a = function(a, b) {
                return {
                    isRequired: a,
                    applyPatch: b
                }
            },
            b = function(a, b) {
                return function() {
                    var c = Array.prototype.slice.call(arguments),
                        d = b.apply(this, c),
                        e = "undefined" == typeof d ? c : d;
                    return a.apply(this, e)
                }
            },
            c = function(a, b) {
                return function() {
                    var c = a.apply(this, arguments),
                        d = b(c),
                        e = "undefined" == typeof d ? c : d;
                    return e
                }
            },
            d = function(a, b) {
                if (a)
                    for (var c = 0; c < b.length; c++) b[c].isRequired(a) && b[c].applyPatch(a);
                return a
            },
            e = {
                nu: a,
                before: b,
                after: c,
                applyPatches: d
            },
            f = 0,
            g = 1,
            h = -1,
            i = function(a) {
                return parseInt(a, 10)
            },
            j = function(a) {
                return function() {
                    return a
                }
            },
            k = function(a, b, c) {
                return {
                    major: j(a),
                    minor: j(b),
                    patch: j(c)
                }
            },
            l = function(a) {
                var b = /([0-9]+)\.([0-9]+)\.([0-9]+)(?:(\-.+)?)/.exec(a);
                return b ? k(i(b[1]), i(b[2]), i(b[3])) : k(0, 0, 0)
            },
            m = function(a, b) {
                var c = a - b;
                return 0 === c ? f : c > 0 ? g : h
            },
            n = function(a, b) {
                var c = m(a.major(), b.major());
                if (c !== f) return c;
                var d = m(a.minor(), b.minor());
                if (d !== f) return d;
                var e = m(a.patch(), b.patch());
                return e !== f ? e : f
            },
            o = {
                nu: k,
                parse: l,
                compare: n
            },
            p = function(a) {
                var b = [a.majorVersion, a.minorVersion].join(".");
                return b.split(".").slice(0, 3).join(".")
            },
            q = function(a) {
                return a ? o.parse(p(a)) : null
            },
            r = function(a, b) {
                return o.compare(q(a), o.parse(b)) < 0
            },
            s = {
                getVersion: q,
                isLessThan: r
            },
            t = function(a, b) {
                b = b.split(".");
                for (var c = 0; c < b.length && (a = a[b[c]], a); c++);
                return a
            },
            u = {
                resolve: t
            },
            v = function(a) {
                if (null === a) return "null";
                var b = typeof a;
                return "object" === b && Array.prototype.isPrototypeOf(a) ? "array" : "object" === b && String.prototype.isPrototypeOf(a) ? "string" : b
            },
            w = function(a) {
                return function(b) {
                    return v(b) === a
                }
            },
            x = {
                isString: w("string"),
                isObject: w("object"),
                isArray: w("array"),
                isNull: w("null"),
                isBoolean: w("boolean"),
                isUndefined: w("undefined"),
                isFunction: w("function"),
                isNumber: w("number")
            },
            y = function(a) {
                var b = a.defaultSettings.forced_plugins;
                return b ? b : []
            },
            z = function(a) {
                return x.isUndefined(a) || "" === a ? [] : x.isArray(a) ? a : a.split(" ")
            },
            A = function(a) {
                return function(b) {
                    var c = u.resolve(window, "tinymce.util.Tools"),
                        d = z(b.plugins),
                        e = y(a),
                        f = e.length > 0 ? d.concat(e) : d;
                    return [c.extend({}, b, {
                        plugins: f
                    })]
                }
            },
            B = function(a) {
                return s.isLessThan(a, "4.7.0")
            },
            C = function(a) {
                a.EditorManager.init = e.before(a.EditorManager.init, A(a.EditorManager))
            },
            D = {
                patch: e.nu(B, C)
            },
            E = function() {
                return (new Date).getTime()
            },
            F = function(a, b, c, d, e) {
                var f, g = E();
                f = setInterval(function() {
                    a() && (clearInterval(f), b()), E() - g > e && (clearInterval(f), c())
                }, d)
            },
            G = {
                waitFor: F
            },
            H = function(a, b) {
                var c = a.currentStyle ? a.currentStyle[b] : window.getComputedStyle(a, null)[b];
                return c ? c : ""
            },
            I = function(a) {
                return function() {
                    var b = H(a, "position").toLowerCase();
                    return "absolute" === b || "fixed" === b
                }
            },
            J = function() {
                var a = document.createElement("div");
                return a.style.display = "none", a.className = "mce-floatpanel", a
            },
            K = function(a) {
                a.parentNode.removeChild(a)
            },
            L = function(a, b) {
                var c = J();
                document.body.appendChild(c), G.waitFor(I(c), function() {
                    K(c), a()
                }, function() {
                    K(c), b()
                }, 10, 5e3)
            },
            M = {
                waitForSkinLoaded: L
            },
            N = function(a, b) {
                a.notificationManager ? a.notificationManager.open({
                    text: b,
                    type: "warning",
                    timeout: 0,
                    icon: ""
                }) : a.windowManager.alert(b)
            },
            O = function(a) {
                a.EditorManager.on("AddEditor", function(a) {
                    var b = a.editor,
                        c = b.settings.service_message;
                    c && M.waitForSkinLoaded(function() {
                        N(b, b.settings.service_message)
                    }, function() {
                        alert(c)
                    })
                })
            },
            P = {
                error: N,
                register: O
            },
            Q = function(a) {
                var b, c, d = u.resolve(window, "tinymce.util.URI");
                b = a.base_url, b && (this.baseURL = new d(this.documentBaseURL).toAbsolute(b.replace(/\/+$/, "")), this.baseURI = new d(this.baseURL)), c = a.suffix, a.suffix && (this.suffix = c), this.defaultSettings = a
            },
            R = function(a) {
                var b = u.resolve(window, "tinymce.util.Tools");
                return [b.extend({}, this.defaultSettings, a)]
            },
            S = function(a) {
                return "function" != typeof a.overrideDefaults
            },
            T = function(a) {
                P.register(a), a.overrideDefaults = Q, a.EditorManager.init = e.before(a.EditorManager.init, R)
            },
            U = {
                patch: e.nu(S, T)
            },
            V = function(a) {
                return function(b) {
                    var c = b.plugin_base_urls;
                    for (var d in c) a.PluginManager.urls[d] = c[d]
                }
            },
            W = function(a) {
                return s.isLessThan(a, "4.5.0")
            },
            X = function(a) {
                a.overrideDefaults = e.before(a.overrideDefaults, V(a))
            },
            Y = {
                patch: e.nu(W, X)
            },
            Z = function(a) {
                e.applyPatches(a, [U.patch, Y.patch, D.patch])
            },
            $ = window;
        Z($.tinymce);
        var _ = function() {
            return {
                applyPatches: Z
            }
        };
        return _
    })()
}();;
(function(cloudSettings) {
    tinymce.overrideDefaults(cloudSettings);
})({
    "chiffer_snowplow_service_url": "https://sp.tinymce.com/i",
    "forced_plugins": ["chiffer", "rain"],
    "suffix": ".min",
    "service_message": "This domain is not registered with TinyMCE Cloud. <a target=\"_blank\" href=\"https://apps.tiny.cloud/?add-to-cart=197933\">Start a free trial</a> to discover our premium cloud services and pro support.",
    "plugin_base_urls": {
        "checklist": "https://plugins.tinymce.com/checklist/stable",
        "advcode": "https://plugins.tinymce.com/advcode/stable",
        "permanentpen": "https://plugins.tinymce.com/permanentpen/stable",
        "a11ychecker": "https://plugins.tinymce.com/a11ychecker/stable",
        "mediaembed": "https://plugins.tinymce.com/mediaembed/stable",
        "powerpaste": "https://plugins.tinymce.com/powerpaste/stable",
        "linkchecker": "https://plugins.tinymce.com/linkchecker/stable",
        "rain": "https://plugins.tinymce.com/rain/stable",
        "mentions": "https://plugins.tinymce.com/mentions/stable",
        "chiffer": "https://plugins.tinymce.com/chiffer/stable",
        "pageembed": "https://plugins.tinymce.com/pageembed/stable",
        "tinymcespellchecker": "https://plugins.tinymce.com/tinymcespellchecker/stable",
        "formatpainter": "https://plugins.tinymce.com/formatpainter/stable",
        "tinydrive": "https://plugins.tinymce.com/tinydrive/stable",
        "tinycomments": "https://plugins.tinymce.com/tinycomments/stable"
    },
    "rain_rainmaker_service_url": "https://rainmaker.tiny.cloud"
});
/* Ephox chiffer plugin
 *
 * Copyright 2010-2017 Ephox Corporation.  All rights reserved.
 *
 * Version: 1.3.0-46
 */

! function() {
    ! function() {
        "use strict";

        function a(a) {
            var b = 0,
                c = ob;
            return c[a[b++]] + c[a[b++]] + c[a[b++]] + c[a[b++]] + "-" + c[a[b++]] + c[a[b++]] + "-" + c[a[b++]] + c[a[b++]] + "-" + c[a[b++]] + c[a[b++]] + "-" + c[a[b++]] + c[a[b++]] + c[a[b++]] + c[a[b++]] + c[a[b++]] + c[a[b++]]
        }
        var b = function() {
                for (var a = [], b = 0; b < arguments.length; b++) a[b] = arguments[b]
            },
            c = function(a) {
                return function() {
                    for (var b = [], c = 0; c < arguments.length; c++) b[c] = arguments[c];
                    return a()
                }
            },
            d = function(a, b) {
                return function() {
                    for (var c = [], d = 0; d < arguments.length; d++) c[d] = arguments[d];
                    return a(b.apply(null, arguments))
                }
            },
            e = function(a) {
                return function() {
                    return a
                }
            },
            f = function(a) {
                return a
            },
            g = function(a, b) {
                return a === b
            },
            h = function(a) {
                for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
                for (var d = new Array(arguments.length - 1), e = 1; e < arguments.length; e++) d[e - 1] = arguments[e];
                return function() {
                    for (var b = [], c = 0; c < arguments.length; c++) b[c] = arguments[c];
                    for (var e = new Array(arguments.length), f = 0; f < e.length; f++) e[f] = arguments[f];
                    var g = d.concat(e);
                    return a.apply(null, g)
                }
            },
            i = function(a) {
                return function() {
                    for (var b = [], c = 0; c < arguments.length; c++) b[c] = arguments[c];
                    return !a.apply(null, arguments)
                }
            },
            j = function(a) {
                return function() {
                    throw new Error(a)
                }
            },
            k = function(a) {
                return a()
            },
            l = function(a) {
                a()
            },
            m = e(!1),
            n = e(!0),
            o = {
                noop: b,
                noarg: c,
                compose: d,
                constant: e,
                identity: f,
                tripleEquals: g,
                curry: h,
                not: i,
                die: j,
                apply: k,
                call: l,
                never: m,
                always: n
            },
            p = o.never,
            q = o.always,
            r = function() {
                return s
            },
            s = function() {
                var a = function(a) {
                        return a.isNone()
                    },
                    b = function(a) {
                        return a()
                    },
                    c = function(a) {
                        return a
                    },
                    d = function() {},
                    e = {
                        fold: function(a, b) {
                            return a()
                        },
                        is: p,
                        isSome: p,
                        isNone: q,
                        getOr: c,
                        getOrThunk: b,
                        getOrDie: function(a) {
                            throw new Error(a || "error: getOrDie called on none.")
                        },
                        or: c,
                        orThunk: b,
                        map: r,
                        ap: r,
                        each: d,
                        bind: r,
                        flatten: r,
                        exists: p,
                        forall: q,
                        filter: r,
                        equals: a,
                        equals_: a,
                        toArray: function() {
                            return []
                        },
                        toString: o.constant("none()")
                    };
                return Object.freeze && Object.freeze(e), e
            }(),
            t = function(a) {
                var b = function() {
                        return a
                    },
                    c = function() {
                        return f
                    },
                    d = function(b) {
                        return t(b(a))
                    },
                    e = function(b) {
                        return b(a)
                    },
                    f = {
                        fold: function(b, c) {
                            return c(a)
                        },
                        is: function(b) {
                            return a === b
                        },
                        isSome: q,
                        isNone: p,
                        getOr: b,
                        getOrThunk: b,
                        getOrDie: b,
                        or: c,
                        orThunk: c,
                        map: d,
                        ap: function(b) {
                            return b.fold(r, function(b) {
                                return t(b(a))
                            })
                        },
                        each: function(b) {
                            b(a)
                        },
                        bind: e,
                        flatten: b,
                        exists: e,
                        forall: e,
                        filter: function(b) {
                            return b(a) ? f : s
                        },
                        equals: function(b) {
                            return b.is(a)
                        },
                        equals_: function(b, c) {
                            return b.fold(p, function(b) {
                                return c(a, b)
                            })
                        },
                        toArray: function() {
                            return [a]
                        },
                        toString: function() {
                            return "some(" + a + ")"
                        }
                    };
                return f
            },
            u = function(a) {
                return null === a || void 0 === a ? s : t(a)
            },
            v = {
                some: t,
                none: r,
                from: u
            },
            w = function(a) {
                if (null === a) return "null";
                var b = typeof a;
                return "object" === b && Array.prototype.isPrototypeOf(a) ? "array" : "object" === b && String.prototype.isPrototypeOf(a) ? "string" : b
            },
            x = function(a) {
                return function(b) {
                    return w(b) === a
                }
            },
            y = {
                isString: x("string"),
                isObject: x("object"),
                isArray: x("array"),
                isNull: x("null"),
                isBoolean: x("boolean"),
                isUndefined: x("undefined"),
                isFunction: x("function"),
                isNumber: x("number")
            },
            z = function() {
                var a = Array.prototype.indexOf,
                    b = function(b, c) {
                        return a.call(b, c)
                    },
                    c = function(a, b) {
                        return P(a, b)
                    };
                return void 0 === a ? c : b
            }(),
            A = function(a, b) {
                var c = z(a, b);
                return -1 === c ? v.none() : v.some(c)
            },
            B = function(a, b) {
                return z(a, b) > -1
            },
            C = function(a, b) {
                return O(a, b).isSome()
            },
            D = function(a, b) {
                for (var c = [], d = 0; d < a; d++) c.push(b(d));
                return c
            },
            E = function(a, b) {
                for (var c = [], d = 0; d < a.length; d += b) {
                    var e = a.slice(d, d + b);
                    c.push(e)
                }
                return c
            },
            F = function(a, b) {
                for (var c = a.length, d = new Array(c), e = 0; e < c; e++) {
                    var f = a[e];
                    d[e] = b(f, e, a)
                }
                return d
            },
            G = function(a, b) {
                for (var c = 0, d = a.length; c < d; c++) {
                    b(a[c], c, a)
                }
            },
            H = function(a, b) {
                for (var c = a.length - 1; c >= 0; c--) {
                    b(a[c], c, a)
                }
            },
            I = function(a, b) {
                for (var c = [], d = [], e = 0, f = a.length; e < f; e++) {
                    var g = a[e];
                    (b(g, e, a) ? c : d).push(g)
                }
                return {
                    pass: c,
                    fail: d
                }
            },
            J = function(a, b) {
                for (var c = [], d = 0, e = a.length; d < e; d++) {
                    var f = a[d];
                    b(f, d, a) && c.push(f)
                }
                return c
            },
            K = function(a, b) {
                if (0 === a.length) return [];
                for (var c = b(a[0]), d = [], e = [], f = 0, g = a.length; f < g; f++) {
                    var h = a[f],
                        i = b(h);
                    i !== c && (d.push(e), e = []), c = i, e.push(h)
                }
                return 0 !== e.length && d.push(e), d
            },
            L = function(a, b, c) {
                return H(a, function(a) {
                    c = b(c, a)
                }), c
            },
            M = function(a, b, c) {
                return G(a, function(a) {
                    c = b(c, a)
                }), c
            },
            N = function(a, b) {
                for (var c = 0, d = a.length; c < d; c++) {
                    var e = a[c];
                    if (b(e, c, a)) return v.some(e)
                }
                return v.none()
            },
            O = function(a, b) {
                for (var c = 0, d = a.length; c < d; c++) {
                    if (b(a[c], c, a)) return v.some(c)
                }
                return v.none()
            },
            P = function(a, b) {
                for (var c = 0, d = a.length; c < d; ++c)
                    if (a[c] === b) return c;
                return -1
            },
            Q = Array.prototype.push,
            R = function(a) {
                for (var b = [], c = 0, d = a.length; c < d; ++c) {
                    if (!Array.prototype.isPrototypeOf(a[c])) throw new Error("Arr.flatten item " + c + " was not an array, input: " + a);
                    Q.apply(b, a[c])
                }
                return b
            },
            S = function(a, b) {
                var c = F(a, b);
                return R(c)
            },
            T = function(a, b) {
                for (var c = 0, d = a.length; c < d; ++c) {
                    if (!0 !== b(a[c], c, a)) return !1
                }
                return !0
            },
            U = function(a, b) {
                return a.length === b.length && T(a, function(a, c) {
                    return a === b[c]
                })
            },
            V = Array.prototype.slice,
            W = function(a) {
                var b = V.call(a, 0);
                return b.reverse(), b
            },
            X = function(a, b) {
                return J(a, function(a) {
                    return !B(b, a)
                })
            },
            Y = function(a, b) {
                for (var c = {}, d = 0, e = a.length; d < e; d++) {
                    var f = a[d];
                    c[String(f)] = b(f, d)
                }
                return c
            },
            Z = function(a) {
                return [a]
            },
            $ = function(a, b) {
                var c = V.call(a, 0);
                return c.sort(b), c
            },
            _ = function(a) {
                return 0 === a.length ? v.none() : v.some(a[0])
            },
            aa = function(a) {
                return 0 === a.length ? v.none() : v.some(a[a.length - 1])
            },
            ba = y.isFunction(Array.from) ? Array.from : function(a) {
                return V.call(a)
            },
            ca = {
                map: F,
                each: G,
                eachr: H,
                partition: I,
                filter: J,
                groupBy: K,
                indexOf: A,
                foldr: L,
                foldl: M,
                find: N,
                findIndex: O,
                flatten: R,
                bind: S,
                forall: T,
                exists: C,
                contains: B,
                equal: U,
                reverse: W,
                chunk: E,
                difference: X,
                mapToObject: Y,
                pure: Z,
                sort: $,
                range: D,
                head: _,
                last: aa,
                from: ba
            },
            da = function(a) {
                var b = v.none(),
                    c = [],
                    d = function(a) {
                        return da(function(b) {
                            e(function(c) {
                                b(a(c))
                            })
                        })
                    },
                    e = function(a) {
                        g() ? i(a) : c.push(a)
                    },
                    f = function(a) {
                        b = v.some(a), h(c), c = []
                    },
                    g = function() {
                        return b.isSome()
                    },
                    h = function(a) {
                        ca.each(a, i)
                    },
                    i = function(a) {
                        b.each(function(b) {
                            setTimeout(function() {
                                a(b)
                            }, 0)
                        })
                    };
                return a(f), {
                    get: e,
                    map: d,
                    isReady: g
                }
            },
            ea = function(a) {
                return da(function(b) {
                    b(a)
                })
            },
            fa = {
                nu: da,
                pure: ea
            },
            ga = function(a) {
                return function() {
                    var b = Array.prototype.slice.call(arguments),
                        c = this;
                    setTimeout(function() {
                        a.apply(c, b)
                    }, 0)
                }
            },
            ha = {
                bounce: ga
            },
            ia = function(a) {
                var b = function(b) {
                    a(ha.bounce(b))
                };
                return {
                    map: function(a) {
                        return ia(function(c) {
                            b(function(b) {
                                var d = a(b);
                                c(d)
                            })
                        })
                    },
                    bind: function(a) {
                        return ia(function(c) {
                            b(function(b) {
                                a(b).get(c)
                            })
                        })
                    },
                    anonBind: function(a) {
                        return ia(function(c) {
                            b(function(b) {
                                a.get(c)
                            })
                        })
                    },
                    toLazy: function() {
                        return fa.nu(b)
                    },
                    get: b
                }
            },
            ja = function(a) {
                return ia(function(b) {
                    b(a)
                })
            },
            ka = {
                nu: ia,
                pure: ja
            },
            la = function() {
                for (var a = [], b = 0; b < arguments.length; b++) a[b] = arguments[b];
                return function() {
                    for (var b = [], c = 0; c < arguments.length; c++) b[c] = arguments[c];
                    if (a.length !== b.length) throw new Error('Wrong number of arguments to struct. Expected "[' + a.length + ']", got ' + b.length + " arguments");
                    var d = {};
                    return ca.each(a, function(a, c) {
                        d[a] = o.constant(b[c])
                    }), d
                }
            },
            ma = function() {
                var a = Object.keys,
                    b = function(a) {
                        var b = [];
                        for (var c in a) a.hasOwnProperty(c) && b.push(c);
                        return b
                    };
                return void 0 === a ? b : a
            }(),
            na = function(a, b) {
                for (var c = ma(a), d = 0, e = c.length; d < e; d++) {
                    var f = c[d];
                    b(a[f], f, a)
                }
            },
            oa = function(a, b) {
                return pa(a, function(a, c, d) {
                    return {
                        k: c,
                        v: b(a, c, d)
                    }
                })
            },
            pa = function(a, b) {
                var c = {};
                return na(a, function(d, e) {
                    var f = b(d, e, a);
                    c[f.k] = f.v
                }), c
            },
            qa = function(a, b) {
                var c = {},
                    d = {};
                return na(a, function(a, e) {
                    (b(a, e) ? c : d)[e] = a
                }), {
                    t: c,
                    f: d
                }
            },
            ra = function(a, b) {
                var c = [];
                return na(a, function(a, d) {
                    c.push(b(a, d))
                }), c
            },
            sa = function(a, b) {
                for (var c = ma(a), d = 0, e = c.length; d < e; d++) {
                    var f = c[d],
                        g = a[f];
                    if (b(g, f, a)) return v.some(g)
                }
                return v.none()
            },
            ta = function(a) {
                return ra(a, function(a) {
                    return a
                })
            },
            ua = function(a) {
                return ta(a).length
            },
            va = {
                bifilter: qa,
                each: na,
                map: oa,
                mapToArray: ra,
                tupleMap: pa,
                find: sa,
                keys: ma,
                values: ta,
                size: ua
            },
            wa = function(a) {
                return a.slice(0).sort()
            },
            xa = function(a, b) {
                throw new Error("All required keys (" + wa(a).join(", ") + ") were not specified. Specified keys were: " + wa(b).join(", ") + ".")
            },
            ya = function(a) {
                throw new Error("Unsupported keys for object: " + wa(a).join(", "))
            },
            za = function(a, b) {
                if (!y.isArray(b)) throw new Error("The " + a + " fields must be an array. Was: " + b + ".");
                ca.each(b, function(b) {
                    if (!y.isString(b)) throw new Error("The value " + b + " in the " + a + " fields was not a string.")
                })
            },
            Aa = function(a, b) {
                throw new Error("All values need to be of type: " + b + ". Keys (" + wa(a).join(", ") + ") were not.")
            },
            Ba = function(a) {
                var b = wa(a);
                ca.find(b, function(a, c) {
                    return c < b.length - 1 && a === b[c + 1]
                }).each(function(a) {
                    throw new Error("The field: " + a + " occurs more than once in the combined fields: [" + b.join(", ") + "].")
                })
            },
            Ca = {
                sort: wa,
                reqMessage: xa,
                unsuppMessage: ya,
                validateStrArr: za,
                invalidTypeMessage: Aa,
                checkDupes: Ba
            },
            Da = function(a, b) {
                var c = a.concat(b);
                if (0 === c.length) throw new Error("You must specify at least one required or optional field.");
                return Ca.validateStrArr("required", a), Ca.validateStrArr("optional", b), Ca.checkDupes(c),
                    function(d) {
                        var e = va.keys(d);
                        ca.forall(a, function(a) {
                            return ca.contains(e, a)
                        }) || Ca.reqMessage(a, e);
                        var f = ca.filter(e, function(a) {
                            return !ca.contains(c, a)
                        });
                        f.length > 0 && Ca.unsuppMessage(f);
                        var g = {};
                        return ca.each(a, function(a) {
                            g[a] = o.constant(d[a])
                        }), ca.each(b, function(a) {
                            g[a] = o.constant(Object.prototype.hasOwnProperty.call(d, a) ? v.some(d[a]) : v.none())
                        }), g
                    }
            },
            Ea = {
                immutable: la,
                immutableBag: Da
            },
            Fa = {},
            Ga = {
                exports: Fa
            };
        ! function(a, b, c, d) {
            ! function(d) {
                if ("object" == typeof b && void 0 !== c) c.exports = d();
                else if ("function" == typeof a && a.amd) a([], d);
                else {
                    var e;
                    e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.EphoxContactWrapper = d()
                }
            }(function() {
                var a;
                return function a(b, c, e) {
                    function f(h, i) {
                        if (!c[h]) {
                            if (!b[h]) {
                                var j = "function" == typeof d && d;
                                if (!i && j) return j(h, !0);
                                if (g) return g(h, !0);
                                var k = new Error("Cannot find module '" + h + "'");
                                throw k.code = "MODULE_NOT_FOUND", k
                            }
                            var l = c[h] = {
                                exports: {}
                            };
                            b[h][0].call(l.exports, function(a) {
                                var c = b[h][1][a];
                                return f(c || a)
                            }, l, l.exports, a, b, c, e)
                        }
                        return c[h].exports
                    }
                    for (var g = "function" == typeof d && d, h = 0; h < e.length; h++) f(e[h]);
                    return f
                }({
                    1: [function(b, c, d) {
                        ! function(b, d, e) {
                            "function" == typeof a && a.amd ? a(e) : void 0 !== c && c.exports ? c.exports = e() : d.exports ? d.exports = e() : d.Fingerprint2 = e()
                        }(0, this, function() {
                            var a = function(b) {
                                if (!(this instanceof a)) return new a(b);
                                var c = {
                                    swfContainerId: "fingerprintjs2",
                                    swfPath: "flash/compiled/FontList.swf",
                                    detectScreenOrientation: !0,
                                    sortPluginsFor: [/palemoon/i],
                                    userDefinedFonts: []
                                };
                                this.options = this.extend(b, c), this.nativeForEach = Array.prototype.forEach, this.nativeMap = Array.prototype.map
                            };
                            return a.prototype = {
                                extend: function(a, b) {
                                    if (null == a) return b;
                                    for (var c in a) null != a[c] && b[c] !== a[c] && (b[c] = a[c]);
                                    return b
                                },
                                get: function(a) {
                                    var b = [];
                                    b = this.userAgentKey(b), b = this.languageKey(b), b = this.colorDepthKey(b), b = this.pixelRatioKey(b), b = this.hardwareConcurrencyKey(b), b = this.screenResolutionKey(b), b = this.availableScreenResolutionKey(b), b = this.timezoneOffsetKey(b), b = this.sessionStorageKey(b), b = this.localStorageKey(b), b = this.indexedDbKey(b), b = this.addBehaviorKey(b), b = this.openDatabaseKey(b), b = this.cpuClassKey(b), b = this.platformKey(b), b = this.doNotTrackKey(b), b = this.pluginsKey(b), b = this.canvasKey(b), b = this.webglKey(b), b = this.adBlockKey(b), b = this.hasLiedLanguagesKey(b), b = this.hasLiedResolutionKey(b), b = this.hasLiedOsKey(b), b = this.hasLiedBrowserKey(b), b = this.touchSupportKey(b), b = this.customEntropyFunction(b);
                                    var c = this;
                                    this.fontsKey(b, function(b) {
                                        var d = [];
                                        c.each(b, function(a) {
                                            var b = a.value;
                                            void 0 !== a.value.join && (b = a.value.join(";")), d.push(b)
                                        });
                                        var e = c.x64hash128(d.join("~~~"), 31);
                                        return a(e, b)
                                    })
                                },
                                customEntropyFunction: function(a) {
                                    return "function" == typeof this.options.customFunction && a.push({
                                        key: "custom",
                                        value: this.options.customFunction()
                                    }), a
                                },
                                userAgentKey: function(a) {
                                    return this.options.excludeUserAgent || a.push({
                                        key: "user_agent",
                                        value: this.getUserAgent()
                                    }), a
                                },
                                getUserAgent: function() {
                                    return navigator.userAgent
                                },
                                languageKey: function(a) {
                                    return this.options.excludeLanguage || a.push({
                                        key: "language",
                                        value: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || ""
                                    }), a
                                },
                                colorDepthKey: function(a) {
                                    return this.options.excludeColorDepth || a.push({
                                        key: "color_depth",
                                        value: screen.colorDepth || -1
                                    }), a
                                },
                                pixelRatioKey: function(a) {
                                    return this.options.excludePixelRatio || a.push({
                                        key: "pixel_ratio",
                                        value: this.getPixelRatio()
                                    }), a
                                },
                                getPixelRatio: function() {
                                    return window.devicePixelRatio || ""
                                },
                                screenResolutionKey: function(a) {
                                    return this.options.excludeScreenResolution ? a : this.getScreenResolution(a)
                                },
                                getScreenResolution: function(a) {
                                    var b;
                                    return b = this.options.detectScreenOrientation && screen.height > screen.width ? [screen.height, screen.width] : [screen.width, screen.height], void 0 !== b && a.push({
                                        key: "resolution",
                                        value: b
                                    }), a
                                },
                                availableScreenResolutionKey: function(a) {
                                    return this.options.excludeAvailableScreenResolution ? a : this.getAvailableScreenResolution(a)
                                },
                                getAvailableScreenResolution: function(a) {
                                    var b;
                                    return screen.availWidth && screen.availHeight && (b = this.options.detectScreenOrientation ? screen.availHeight > screen.availWidth ? [screen.availHeight, screen.availWidth] : [screen.availWidth, screen.availHeight] : [screen.availHeight, screen.availWidth]), void 0 !== b && a.push({
                                        key: "available_resolution",
                                        value: b
                                    }), a
                                },
                                timezoneOffsetKey: function(a) {
                                    return this.options.excludeTimezoneOffset || a.push({
                                        key: "timezone_offset",
                                        value: (new Date).getTimezoneOffset()
                                    }), a
                                },
                                sessionStorageKey: function(a) {
                                    return !this.options.excludeSessionStorage && this.hasSessionStorage() && a.push({
                                        key: "session_storage",
                                        value: 1
                                    }), a
                                },
                                localStorageKey: function(a) {
                                    return !this.options.excludeSessionStorage && this.hasLocalStorage() && a.push({
                                        key: "local_storage",
                                        value: 1
                                    }), a
                                },
                                indexedDbKey: function(a) {
                                    return !this.options.excludeIndexedDB && this.hasIndexedDB() && a.push({
                                        key: "indexed_db",
                                        value: 1
                                    }), a
                                },
                                addBehaviorKey: function(a) {
                                    return document.body && !this.options.excludeAddBehavior && document.body.addBehavior && a.push({
                                        key: "add_behavior",
                                        value: 1
                                    }), a
                                },
                                openDatabaseKey: function(a) {
                                    return !this.options.excludeOpenDatabase && window.openDatabase && a.push({
                                        key: "open_database",
                                        value: 1
                                    }), a
                                },
                                cpuClassKey: function(a) {
                                    return this.options.excludeCpuClass || a.push({
                                        key: "cpu_class",
                                        value: this.getNavigatorCpuClass()
                                    }), a
                                },
                                platformKey: function(a) {
                                    return this.options.excludePlatform || a.push({
                                        key: "navigator_platform",
                                        value: this.getNavigatorPlatform()
                                    }), a
                                },
                                doNotTrackKey: function(a) {
                                    return this.options.excludeDoNotTrack || a.push({
                                        key: "do_not_track",
                                        value: this.getDoNotTrack()
                                    }), a
                                },
                                canvasKey: function(a) {
                                    return !this.options.excludeCanvas && this.isCanvasSupported() && a.push({
                                        key: "canvas",
                                        value: this.getCanvasFp()
                                    }), a
                                },
                                webglKey: function(a) {
                                    return this.options.excludeWebGL ? a : this.isWebGlSupported() ? (a.push({
                                        key: "webgl",
                                        value: this.getWebglFp()
                                    }), a) : a
                                },
                                adBlockKey: function(a) {
                                    return this.options.excludeAdBlock || a.push({
                                        key: "adblock",
                                        value: this.getAdBlock()
                                    }), a
                                },
                                hasLiedLanguagesKey: function(a) {
                                    return this.options.excludeHasLiedLanguages || a.push({
                                        key: "has_lied_languages",
                                        value: this.getHasLiedLanguages()
                                    }), a
                                },
                                hasLiedResolutionKey: function(a) {
                                    return this.options.excludeHasLiedResolution || a.push({
                                        key: "has_lied_resolution",
                                        value: this.getHasLiedResolution()
                                    }), a
                                },
                                hasLiedOsKey: function(a) {
                                    return this.options.excludeHasLiedOs || a.push({
                                        key: "has_lied_os",
                                        value: this.getHasLiedOs()
                                    }), a
                                },
                                hasLiedBrowserKey: function(a) {
                                    return this.options.excludeHasLiedBrowser || a.push({
                                        key: "has_lied_browser",
                                        value: this.getHasLiedBrowser()
                                    }), a
                                },
                                fontsKey: function(a, b) {
                                    return this.options.excludeJsFonts ? this.flashFontsKey(a, b) : this.jsFontsKey(a, b)
                                },
                                flashFontsKey: function(a, b) {
                                    return this.options.excludeFlashFonts ? b(a) : this.hasSwfObjectLoaded() && this.hasMinFlashInstalled() ? void 0 === this.options.swfPath ? b(a) : void this.loadSwfAndDetectFonts(function(c) {
                                        a.push({
                                            key: "swf_fonts",
                                            value: c.join(";")
                                        }), b(a)
                                    }) : b(a)
                                },
                                jsFontsKey: function(a, b) {
                                    var c = this;
                                    return setTimeout(function() {
                                        var d = ["monospace", "sans-serif", "serif"],
                                            e = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"],
                                            f = ["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"];
                                        c.options.extendedJsFonts && (e = e.concat(f)), e = e.concat(c.options.userDefinedFonts);
                                        var g = document.getElementsByTagName("body")[0],
                                            h = document.createElement("div"),
                                            i = document.createElement("div"),
                                            j = {},
                                            k = {},
                                            l = function() {
                                                var a = document.createElement("span");
                                                return a.style.position = "absolute", a.style.left = "-9999px", a.style.fontSize = "72px", a.style.lineHeight = "normal", a.innerHTML = "mmmmmmmmmmlli", a
                                            },
                                            m = function(a, b) {
                                                var c = l();
                                                return c.style.fontFamily = "'" + a + "'," + b, c
                                            },
                                            n = function() {
                                                for (var a = [], b = 0, c = d.length; b < c; b++) {
                                                    var e = l();
                                                    e.style.fontFamily = d[b], h.appendChild(e), a.push(e)
                                                }
                                                return a
                                            }();
                                        g.appendChild(h);
                                        for (var o = 0, p = d.length; o < p; o++) j[d[o]] = n[o].offsetWidth, k[d[o]] = n[o].offsetHeight;
                                        var q = function() {
                                            for (var a = {}, b = 0, c = e.length; b < c; b++) {
                                                for (var f = [], g = 0, h = d.length; g < h; g++) {
                                                    var j = m(e[b], d[g]);
                                                    i.appendChild(j), f.push(j)
                                                }
                                                a[e[b]] = f
                                            }
                                            return a
                                        }();
                                        g.appendChild(i);
                                        for (var r = [], s = 0, t = e.length; s < t; s++)(function(a) {
                                            for (var b = !1, c = 0; c < d.length; c++)
                                                if (b = a[c].offsetWidth !== j[d[c]] || a[c].offsetHeight !== k[d[c]]) return b;
                                            return b
                                        })(q[e[s]]) && r.push(e[s]);
                                        g.removeChild(i), g.removeChild(h), a.push({
                                            key: "js_fonts",
                                            value: r
                                        }), b(a)
                                    }, 1)
                                },
                                pluginsKey: function(a) {
                                    return this.options.excludePlugins || (this.isIE() ? this.options.excludeIEPlugins || a.push({
                                        key: "ie_plugins",
                                        value: this.getIEPlugins()
                                    }) : a.push({
                                        key: "regular_plugins",
                                        value: this.getRegularPlugins()
                                    })), a
                                },
                                getRegularPlugins: function() {
                                    for (var a = [], b = 0, c = navigator.plugins.length; b < c; b++) a.push(navigator.plugins[b]);
                                    return this.pluginsShouldBeSorted() && (a = a.sort(function(a, b) {
                                        return a.name > b.name ? 1 : a.name < b.name ? -1 : 0
                                    })), this.map(a, function(a) {
                                        var b = this.map(a, function(a) {
                                            return [a.type, a.suffixes].join("~")
                                        }).join(",");
                                        return [a.name, a.description, b].join("::")
                                    }, this)
                                },
                                getIEPlugins: function() {
                                    var a = [];
                                    if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window) {
                                        var b = ["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"];
                                        a = this.map(b, function(a) {
                                            try {
                                                return new ActiveXObject(a), a
                                            } catch (a) {
                                                return null
                                            }
                                        })
                                    }
                                    return navigator.plugins && (a = a.concat(this.getRegularPlugins())), a
                                },
                                pluginsShouldBeSorted: function() {
                                    for (var a = !1, b = 0, c = this.options.sortPluginsFor.length; b < c; b++) {
                                        var d = this.options.sortPluginsFor[b];
                                        if (navigator.userAgent.match(d)) {
                                            a = !0;
                                            break
                                        }
                                    }
                                    return a
                                },
                                touchSupportKey: function(a) {
                                    return this.options.excludeTouchSupport || a.push({
                                        key: "touch_support",
                                        value: this.getTouchSupport()
                                    }), a
                                },
                                hardwareConcurrencyKey: function(a) {
                                    return this.options.excludeHardwareConcurrency || a.push({
                                        key: "hardware_concurrency",
                                        value: this.getHardwareConcurrency()
                                    }), a
                                },
                                hasSessionStorage: function() {
                                    try {
                                        return !!window.sessionStorage
                                    } catch (a) {
                                        return !0
                                    }
                                },
                                hasLocalStorage: function() {
                                    try {
                                        return !!window.localStorage
                                    } catch (a) {
                                        return !0
                                    }
                                },
                                hasIndexedDB: function() {
                                    try {
                                        return !!window.indexedDB
                                    } catch (a) {
                                        return !0
                                    }
                                },
                                getHardwareConcurrency: function() {
                                    return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : "unknown"
                                },
                                getNavigatorCpuClass: function() {
                                    return navigator.cpuClass ? navigator.cpuClass : "unknown"
                                },
                                getNavigatorPlatform: function() {
                                    return navigator.platform ? navigator.platform : "unknown"
                                },
                                getDoNotTrack: function() {
                                    return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : "unknown"
                                },
                                getTouchSupport: function() {
                                    var a = 0,
                                        b = !1;
                                    void 0 !== navigator.maxTouchPoints ? a = navigator.maxTouchPoints : void 0 !== navigator.msMaxTouchPoints && (a = navigator.msMaxTouchPoints);
                                    try {
                                        document.createEvent("TouchEvent"), b = !0
                                    } catch (a) {}
                                    return [a, b, "ontouchstart" in window]
                                },
                                getCanvasFp: function() {
                                    var a = [],
                                        b = document.createElement("canvas");
                                    b.width = 2e3, b.height = 200, b.style.display = "inline";
                                    var c = b.getContext("2d");
                                    return c.rect(0, 0, 10, 10), c.rect(2, 2, 6, 6), a.push("canvas winding:" + (!1 === c.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), c.textBaseline = "alphabetic", c.fillStyle = "#f60", c.fillRect(125, 1, 62, 20), c.fillStyle = "#069", this.options.dontUseFakeFontInCanvas ? c.font = "11pt Arial" : c.font = "11pt no-real-font-123", c.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15), c.fillStyle = "rgba(102, 204, 0, 0.2)", c.font = "18pt Arial", c.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 4, 45), c.globalCompositeOperation = "multiply", c.fillStyle = "rgb(255,0,255)", c.beginPath(), c.arc(50, 50, 50, 0, 2 * Math.PI, !0), c.closePath(), c.fill(), c.fillStyle = "rgb(0,255,255)", c.beginPath(), c.arc(100, 50, 50, 0, 2 * Math.PI, !0), c.closePath(), c.fill(), c.fillStyle = "rgb(255,255,0)", c.beginPath(), c.arc(75, 100, 50, 0, 2 * Math.PI, !0), c.closePath(), c.fill(), c.fillStyle = "rgb(255,0,255)", c.arc(75, 75, 75, 0, 2 * Math.PI, !0), c.arc(75, 75, 25, 0, 2 * Math.PI, !0), c.fill("evenodd"), a.push("canvas fp:" + b.toDataURL()), a.join("~")
                                },
                                getWebglFp: function() {
                                    var a, b = function(b) {
                                        return a.clearColor(0, 0, 0, 1), a.enable(a.DEPTH_TEST), a.depthFunc(a.LEQUAL), a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT), "[" + b[0] + ", " + b[1] + "]"
                                    };
                                    if (!(a = this.getWebglCanvas())) return null;
                                    var c = [],
                                        d = a.createBuffer();
                                    a.bindBuffer(a.ARRAY_BUFFER, d);
                                    var e = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                                    a.bufferData(a.ARRAY_BUFFER, e, a.STATIC_DRAW), d.itemSize = 3, d.numItems = 3;
                                    var f = a.createProgram(),
                                        g = a.createShader(a.VERTEX_SHADER);
                                    a.shaderSource(g, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"), a.compileShader(g);
                                    var h = a.createShader(a.FRAGMENT_SHADER);
                                    a.shaderSource(h, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), a.compileShader(h), a.attachShader(f, g), a.attachShader(f, h), a.linkProgram(f), a.useProgram(f), f.vertexPosAttrib = a.getAttribLocation(f, "attrVertex"), f.offsetUniform = a.getUniformLocation(f, "uniformOffset"), a.enableVertexAttribArray(f.vertexPosArray), a.vertexAttribPointer(f.vertexPosAttrib, d.itemSize, a.FLOAT, !1, 0, 0), a.uniform2f(f.offsetUniform, 1, 1), a.drawArrays(a.TRIANGLE_STRIP, 0, d.numItems), null != a.canvas && c.push(a.canvas.toDataURL()), c.push("extensions:" + a.getSupportedExtensions().join(";")), c.push("webgl aliased line width range:" + b(a.getParameter(a.ALIASED_LINE_WIDTH_RANGE))), c.push("webgl aliased point size range:" + b(a.getParameter(a.ALIASED_POINT_SIZE_RANGE))), c.push("webgl alpha bits:" + a.getParameter(a.ALPHA_BITS)), c.push("webgl antialiasing:" + (a.getContextAttributes().antialias ? "yes" : "no")), c.push("webgl blue bits:" + a.getParameter(a.BLUE_BITS)), c.push("webgl depth bits:" + a.getParameter(a.DEPTH_BITS)), c.push("webgl green bits:" + a.getParameter(a.GREEN_BITS)), c.push("webgl max anisotropy:" + function(a) {
                                        var b, c = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic");
                                        return c ? (b = a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT), 0 === b && (b = 2), b) : null
                                    }(a)), c.push("webgl max combined texture image units:" + a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), c.push("webgl max cube map texture size:" + a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE)), c.push("webgl max fragment uniform vectors:" + a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS)), c.push("webgl max render buffer size:" + a.getParameter(a.MAX_RENDERBUFFER_SIZE)), c.push("webgl max texture image units:" + a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS)), c.push("webgl max texture size:" + a.getParameter(a.MAX_TEXTURE_SIZE)), c.push("webgl max varying vectors:" + a.getParameter(a.MAX_VARYING_VECTORS)), c.push("webgl max vertex attribs:" + a.getParameter(a.MAX_VERTEX_ATTRIBS)), c.push("webgl max vertex texture image units:" + a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), c.push("webgl max vertex uniform vectors:" + a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS)), c.push("webgl max viewport dims:" + b(a.getParameter(a.MAX_VIEWPORT_DIMS))), c.push("webgl red bits:" + a.getParameter(a.RED_BITS)), c.push("webgl renderer:" + a.getParameter(a.RENDERER)), c.push("webgl shading language version:" + a.getParameter(a.SHADING_LANGUAGE_VERSION)), c.push("webgl stencil bits:" + a.getParameter(a.STENCIL_BITS)), c.push("webgl vendor:" + a.getParameter(a.VENDOR)), c.push("webgl version:" + a.getParameter(a.VERSION));
                                    try {
                                        var i = a.getExtension("WEBGL_debug_renderer_info");
                                        i && (c.push("webgl unmasked vendor:" + a.getParameter(i.UNMASKED_VENDOR_WEBGL)), c.push("webgl unmasked renderer:" + a.getParameter(i.UNMASKED_RENDERER_WEBGL)))
                                    } catch (a) {}
                                    return a.getShaderPrecisionFormat ? (c.push("webgl vertex shader high float precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).precision), c.push("webgl vertex shader high float precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).rangeMin), c.push("webgl vertex shader high float precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).rangeMax),
                                        c.push("webgl vertex shader medium float precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).precision), c.push("webgl vertex shader medium float precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).rangeMin), c.push("webgl vertex shader medium float precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).rangeMax), c.push("webgl vertex shader low float precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).precision), c.push("webgl vertex shader low float precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).rangeMin), c.push("webgl vertex shader low float precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).rangeMax), c.push("webgl fragment shader high float precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).precision), c.push("webgl fragment shader high float precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).rangeMin), c.push("webgl fragment shader high float precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).rangeMax), c.push("webgl fragment shader medium float precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).precision), c.push("webgl fragment shader medium float precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).rangeMin), c.push("webgl fragment shader medium float precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).rangeMax), c.push("webgl fragment shader low float precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).precision), c.push("webgl fragment shader low float precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).rangeMin), c.push("webgl fragment shader low float precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).rangeMax), c.push("webgl vertex shader high int precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).precision), c.push("webgl vertex shader high int precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).rangeMin), c.push("webgl vertex shader high int precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).rangeMax), c.push("webgl vertex shader medium int precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).precision), c.push("webgl vertex shader medium int precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).rangeMin), c.push("webgl vertex shader medium int precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).rangeMax), c.push("webgl vertex shader low int precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).precision), c.push("webgl vertex shader low int precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).rangeMin), c.push("webgl vertex shader low int precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).rangeMax), c.push("webgl fragment shader high int precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).precision), c.push("webgl fragment shader high int precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).rangeMin), c.push("webgl fragment shader high int precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).rangeMax), c.push("webgl fragment shader medium int precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).precision), c.push("webgl fragment shader medium int precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).rangeMin), c.push("webgl fragment shader medium int precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).rangeMax), c.push("webgl fragment shader low int precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).precision), c.push("webgl fragment shader low int precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).rangeMin), c.push("webgl fragment shader low int precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).rangeMax), c.join("~")) : c.join("~")
                                },
                                getAdBlock: function() {
                                    var a = document.createElement("div");
                                    a.innerHTML = "&nbsp;", a.className = "adsbox";
                                    var b = !1;
                                    try {
                                        document.body.appendChild(a), b = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, document.body.removeChild(a)
                                    } catch (a) {
                                        b = !1
                                    }
                                    return b
                                },
                                getHasLiedLanguages: function() {
                                    if (void 0 !== navigator.languages) try {
                                        if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) return !0
                                    } catch (a) {
                                        return !0
                                    }
                                    return !1
                                },
                                getHasLiedResolution: function() {
                                    return screen.width < screen.availWidth || screen.height < screen.availHeight
                                },
                                getHasLiedOs: function() {
                                    var a, b = navigator.userAgent.toLowerCase(),
                                        c = navigator.oscpu,
                                        d = navigator.platform.toLowerCase();
                                    a = b.indexOf("windows phone") >= 0 ? "Windows Phone" : b.indexOf("win") >= 0 ? "Windows" : b.indexOf("android") >= 0 ? "Android" : b.indexOf("linux") >= 0 ? "Linux" : b.indexOf("iphone") >= 0 || b.indexOf("ipad") >= 0 ? "iOS" : b.indexOf("mac") >= 0 ? "Mac" : "Other";
                                    if (("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && "Windows Phone" !== a && "Android" !== a && "iOS" !== a && "Other" !== a) return !0;
                                    if (void 0 !== c) {
                                        if (c = c.toLowerCase(), c.indexOf("win") >= 0 && "Windows" !== a && "Windows Phone" !== a) return !0;
                                        if (c.indexOf("linux") >= 0 && "Linux" !== a && "Android" !== a) return !0;
                                        if (c.indexOf("mac") >= 0 && "Mac" !== a && "iOS" !== a) return !0;
                                        if (0 === c.indexOf("win") && 0 === c.indexOf("linux") && c.indexOf("mac") >= 0 && "other" !== a) return !0
                                    }
                                    return d.indexOf("win") >= 0 && "Windows" !== a && "Windows Phone" !== a || (d.indexOf("linux") >= 0 || d.indexOf("android") >= 0 || d.indexOf("pike") >= 0) && "Linux" !== a && "Android" !== a || (d.indexOf("mac") >= 0 || d.indexOf("ipad") >= 0 || d.indexOf("ipod") >= 0 || d.indexOf("iphone") >= 0) && "Mac" !== a && "iOS" !== a || 0 === d.indexOf("win") && 0 === d.indexOf("linux") && d.indexOf("mac") >= 0 && "other" !== a || void 0 === navigator.plugins && "Windows" !== a && "Windows Phone" !== a
                                },
                                getHasLiedBrowser: function() {
                                    var a, b = navigator.userAgent.toLowerCase(),
                                        c = navigator.productSub;
                                    if (("Chrome" === (a = b.indexOf("firefox") >= 0 ? "Firefox" : b.indexOf("opera") >= 0 || b.indexOf("opr") >= 0 ? "Opera" : b.indexOf("chrome") >= 0 ? "Chrome" : b.indexOf("safari") >= 0 ? "Safari" : b.indexOf("trident") >= 0 ? "Internet Explorer" : "Other") || "Safari" === a || "Opera" === a) && "20030107" !== c) return !0;
                                    var d = eval.toString().length;
                                    if (37 === d && "Safari" !== a && "Firefox" !== a && "Other" !== a) return !0;
                                    if (39 === d && "Internet Explorer" !== a && "Other" !== a) return !0;
                                    if (33 === d && "Chrome" !== a && "Opera" !== a && "Other" !== a) return !0;
                                    var e;
                                    try {
                                        throw "a"
                                    } catch (a) {
                                        try {
                                            a.toSource(), e = !0
                                        } catch (a) {
                                            e = !1
                                        }
                                    }
                                    return !(!e || "Firefox" === a || "Other" === a)
                                },
                                isCanvasSupported: function() {
                                    var a = document.createElement("canvas");
                                    return !(!a.getContext || !a.getContext("2d"))
                                },
                                isWebGlSupported: function() {
                                    if (!this.isCanvasSupported()) return !1;
                                    var a, b = document.createElement("canvas");
                                    try {
                                        a = b.getContext && (b.getContext("webgl") || b.getContext("experimental-webgl"))
                                    } catch (b) {
                                        a = !1
                                    }
                                    return !!window.WebGLRenderingContext && !!a
                                },
                                isIE: function() {
                                    return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
                                },
                                hasSwfObjectLoaded: function() {
                                    return void 0 !== window.swfobject
                                },
                                hasMinFlashInstalled: function() {
                                    return swfobject.hasFlashPlayerVersion("9.0.0")
                                },
                                addFlashDivNode: function() {
                                    var a = document.createElement("div");
                                    a.setAttribute("id", this.options.swfContainerId), document.body.appendChild(a)
                                },
                                loadSwfAndDetectFonts: function(a) {
                                    var b = "___fp_swf_loaded";
                                    window[b] = function(b) {
                                        a(b)
                                    };
                                    var c = this.options.swfContainerId;
                                    this.addFlashDivNode();
                                    var d = {
                                            onReady: b
                                        },
                                        e = {
                                            allowScriptAccess: "always",
                                            menu: "false"
                                        };
                                    swfobject.embedSWF(this.options.swfPath, c, "1", "1", "9.0.0", !1, d, e, {})
                                },
                                getWebglCanvas: function() {
                                    var a = document.createElement("canvas"),
                                        b = null;
                                    try {
                                        b = a.getContext("webgl") || a.getContext("experimental-webgl")
                                    } catch (a) {}
                                    return b || (b = null), b
                                },
                                each: function(a, b, c) {
                                    if (null !== a)
                                        if (this.nativeForEach && a.forEach === this.nativeForEach) a.forEach(b, c);
                                        else if (a.length === +a.length) {
                                            for (var d = 0, e = a.length; d < e; d++)
                                                if (b.call(c, a[d], d, a) === {}) return
                                        } else
                                            for (var f in a)
                                                if (a.hasOwnProperty(f) && b.call(c, a[f], f, a) === {}) return
                                },
                                map: function(a, b, c) {
                                    var d = [];
                                    return null == a ? d : this.nativeMap && a.map === this.nativeMap ? a.map(b, c) : (this.each(a, function(a, e, f) {
                                        d[d.length] = b.call(c, a, e, f)
                                    }), d)
                                },
                                x64Add: function(a, b) {
                                    a = [a[0] >>> 16, 65535 & a[0], a[1] >>> 16, 65535 & a[1]], b = [b[0] >>> 16, 65535 & b[0], b[1] >>> 16, 65535 & b[1]];
                                    var c = [0, 0, 0, 0];
                                    return c[3] += a[3] + b[3], c[2] += c[3] >>> 16, c[3] &= 65535, c[2] += a[2] + b[2], c[1] += c[2] >>> 16, c[2] &= 65535, c[1] += a[1] + b[1], c[0] += c[1] >>> 16, c[1] &= 65535, c[0] += a[0] + b[0], c[0] &= 65535, [c[0] << 16 | c[1], c[2] << 16 | c[3]]
                                },
                                x64Multiply: function(a, b) {
                                    a = [a[0] >>> 16, 65535 & a[0], a[1] >>> 16, 65535 & a[1]], b = [b[0] >>> 16, 65535 & b[0], b[1] >>> 16, 65535 & b[1]];
                                    var c = [0, 0, 0, 0];
                                    return c[3] += a[3] * b[3], c[2] += c[3] >>> 16, c[3] &= 65535, c[2] += a[2] * b[3], c[1] += c[2] >>> 16, c[2] &= 65535, c[2] += a[3] * b[2], c[1] += c[2] >>> 16, c[2] &= 65535, c[1] += a[1] * b[3], c[0] += c[1] >>> 16, c[1] &= 65535, c[1] += a[2] * b[2], c[0] += c[1] >>> 16, c[1] &= 65535, c[1] += a[3] * b[1], c[0] += c[1] >>> 16, c[1] &= 65535, c[0] += a[0] * b[3] + a[1] * b[2] + a[2] * b[1] + a[3] * b[0], c[0] &= 65535, [c[0] << 16 | c[1], c[2] << 16 | c[3]]
                                },
                                x64Rotl: function(a, b) {
                                    return b %= 64, 32 === b ? [a[1], a[0]] : b < 32 ? [a[0] << b | a[1] >>> 32 - b, a[1] << b | a[0] >>> 32 - b] : (b -= 32, [a[1] << b | a[0] >>> 32 - b, a[0] << b | a[1] >>> 32 - b])
                                },
                                x64LeftShift: function(a, b) {
                                    return b %= 64, 0 === b ? a : b < 32 ? [a[0] << b | a[1] >>> 32 - b, a[1] << b] : [a[1] << b - 32, 0]
                                },
                                x64Xor: function(a, b) {
                                    return [a[0] ^ b[0], a[1] ^ b[1]]
                                },
                                x64Fmix: function(a) {
                                    return a = this.x64Xor(a, [0, a[0] >>> 1]), a = this.x64Multiply(a, [4283543511, 3981806797]), a = this.x64Xor(a, [0, a[0] >>> 1]), a = this.x64Multiply(a, [3301882366, 444984403]), a = this.x64Xor(a, [0, a[0] >>> 1])
                                },
                                x64hash128: function(a, b) {
                                    a = a || "", b = b || 0;
                                    for (var c = a.length % 16, d = a.length - c, e = [0, b], f = [0, b], g = [0, 0], h = [0, 0], i = [2277735313, 289559509], j = [1291169091, 658871167], k = 0; k < d; k += 16) g = [255 & a.charCodeAt(k + 4) | (255 & a.charCodeAt(k + 5)) << 8 | (255 & a.charCodeAt(k + 6)) << 16 | (255 & a.charCodeAt(k + 7)) << 24, 255 & a.charCodeAt(k) | (255 & a.charCodeAt(k + 1)) << 8 | (255 & a.charCodeAt(k + 2)) << 16 | (255 & a.charCodeAt(k + 3)) << 24], h = [255 & a.charCodeAt(k + 12) | (255 & a.charCodeAt(k + 13)) << 8 | (255 & a.charCodeAt(k + 14)) << 16 | (255 & a.charCodeAt(k + 15)) << 24, 255 & a.charCodeAt(k + 8) | (255 & a.charCodeAt(k + 9)) << 8 | (255 & a.charCodeAt(k + 10)) << 16 | (255 & a.charCodeAt(k + 11)) << 24], g = this.x64Multiply(g, i), g = this.x64Rotl(g, 31), g = this.x64Multiply(g, j), e = this.x64Xor(e, g), e = this.x64Rotl(e, 27), e = this.x64Add(e, f), e = this.x64Add(this.x64Multiply(e, [0, 5]), [0, 1390208809]), h = this.x64Multiply(h, j), h = this.x64Rotl(h, 33), h = this.x64Multiply(h, i), f = this.x64Xor(f, h), f = this.x64Rotl(f, 31), f = this.x64Add(f, e), f = this.x64Add(this.x64Multiply(f, [0, 5]), [0, 944331445]);
                                    switch (g = [0, 0], h = [0, 0], c) {
                                        case 15:
                                            h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(k + 14)], 48));
                                        case 14:
                                            h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(k + 13)], 40));
                                        case 13:
                                            h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(k + 12)], 32));
                                        case 12:
                                            h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(k + 11)], 24));
                                        case 11:
                                            h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(k + 10)], 16));
                                        case 10:
                                            h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(k + 9)], 8));
                                        case 9:
                                            h = this.x64Xor(h, [0, a.charCodeAt(k + 8)]), h = this.x64Multiply(h, j), h = this.x64Rotl(h, 33), h = this.x64Multiply(h, i), f = this.x64Xor(f, h);
                                        case 8:
                                            g = this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 7)], 56));
                                        case 7:
                                            g = this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 6)], 48));
                                        case 6:
                                            g = this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 5)], 40));
                                        case 5:
                                            g = this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 4)], 32));
                                        case 4:
                                            g = this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 3)], 24));
                                        case 3:
                                            g = this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 2)], 16));
                                        case 2:
                                            g = this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 1)], 8));
                                        case 1:
                                            g = this.x64Xor(g, [0, a.charCodeAt(k)]), g = this.x64Multiply(g, i), g = this.x64Rotl(g, 31), g = this.x64Multiply(g, j), e = this.x64Xor(e, g)
                                    }
                                    return e = this.x64Xor(e, [0, a.length]), f = this.x64Xor(f, [0, a.length]), e = this.x64Add(e, f), f = this.x64Add(f, e), e = this.x64Fmix(e), f = this.x64Fmix(f), e = this.x64Add(e, f), f = this.x64Add(f, e), ("00000000" + (e[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (e[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (f[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (f[1] >>> 0).toString(16)).slice(-8)
                                }
                            }, a.VERSION = "1.5.1", a
                        })
                    }, {}],
                    2: [function(a, b, c) {
                        var d = a("fingerprintjs2");
                        b.exports = {
                            boltExport: d
                        }
                    }, {
                        fingerprintjs2: 1
                    }]
                }, {}, [2])(2)
            })
        }(void 0, Fa, Ga, void 0);
        for (var Ha = Ga.exports.boltExport, Ia = Ea.immutable("hash", "components"), Ja = function() {
            return ka.nu(function(a) {
                document.body ? a(document.body) : document.addEventListener("DOMContentLoaded", function() {
                    a(document.body)
                }, !1)
            })
        }, Ka = function() {
            return Ja().bind(function(a) {
                return ka.nu(function(a) {
                    (new Ha).get(function(b, c) {
                        a(Ia(b, c))
                    })
                })
            })
        }, La = fa.nu(function(a) {
            Ka().get(a)
        }), Ma = function() {
            return La
        }, Na = {
            getLazyFingerprint: Ma
        }, Oa = function(a, b) {
            return b + a
        }, Pa = function(a, b) {
            return a + b
        }, Qa = function(a, b) {
            return a.substring(b)
        }, Ra = function(a, b) {
            return a.substring(0, a.length - b)
        }, Sa = {
            addToStart: Oa,
            addToEnd: Pa,
            removeFromStart: Qa,
            removeFromEnd: Ra
        }, Ta = function(a, b) {
            return a.substr(0, b)
        }, Ua = function(a, b) {
            return a.substr(a.length - b, a.length)
        }, Va = function(a) {
            return "" === a ? v.none() : v.some(a.substr(0, 1))
        }, Wa = function(a) {
            return "" === a ? v.none() : v.some(a.substring(1))
        }, Xa = {
            first: Ta,
            last: Ua,
            head: Va,
            tail: Wa
        }, Ya = function(a, b, c) {
            return "" === b || !(a.length < b.length) && a.substr(c, c + b.length) === b
        }, Za = function(a, b) {
            var c = function(a) {
                var b = typeof a;
                return "string" === b || "number" === b
            };
            return a.replace(/\${([^{}]*)}/g, function(a, d) {
                var e = b[d];
                return c(e) ? e : a
            })
        }, $a = function(a, b) {
            return eb(a, b) ? Sa.removeFromStart(a, b.length) : a
        }, _a = function(a, b) {
            return fb(a, b) ? Sa.removeFromEnd(a, b.length) : a
        }, ab = function(a, b) {
            return eb(a, b) ? a : Sa.addToStart(a, b)
        }, bb = function(a, b) {
            return fb(a, b) ? a : Sa.addToEnd(a, b)
        }, cb = function(a, b) {
            return -1 !== a.indexOf(b)
        }, db = function(a) {
            return Xa.head(a).bind(function(b) {
                return Xa.tail(a).map(function(a) {
                    return b.toUpperCase() + a
                })
            }).getOr(a)
        }, eb = function(a, b) {
            return Ya(a, b, 0)
        }, fb = function(a, b) {
            return Ya(a, b, a.length - b.length)
        }, gb = function(a) {
            return a.replace(/^\s+|\s+$/g, "")
        }, hb = function(a) {
            return a.replace(/^\s+/g, "")
        }, ib = function(a) {
            return a.replace(/\s+$/g, "")
        }, jb = {
            supplant: Za,
            startsWith: eb,
            removeLeading: $a,
            removeTrailing: _a,
            ensureLeading: ab,
            ensureTrailing: bb,
            endsWith: fb,
            contains: cb,
            trim: gb,
            lTrim: hb,
            rTrim: ib,
            capitalize: db
        }, kb = {
            now: function() {
                return (new Date).getTime()
            }
        }, lb = function(a) {
            return v.from(a.api_key)
        }, mb = function(a) {
            return a.chiffer_snowplow_service_url
        }, nb = {
            getApiKey: lb,
            getServiceUrl: mb
        }, ob = [], pb = 0; pb < 256; ++pb) ob[pb] = (pb + 256).toString(16).substr(1);
        var qb = function() {
                for (var a, b = new Array(16), c = 0; c < 16; c++) 0 == (3 & c) && (a = 4294967296 * Math.random()), b[c] = a >>> ((3 & c) << 3) & 255;
                return b
            },
            rb = function() {
                var b = qb();
                return b[6] = 15 & b[6] | 64, b[8] = 63 & b[8] | 128, a(b)
            },
            sb = {
                v4: rb
            },
            tb = function(a, b) {
                return {
                    send: function(c, d, e) {
                        var f = jb.supplant("?aid=${aid}&tna=${tna}&p=${p}&dtm=${dtm}&stm=${stm}&tz=${tz}&e=${e}&se_ca=${se_ca}&eid=${eid}&fp=${fp}&tv=${tv}", {
                            aid: b,
                            tna: "tinymce_cloud",
                            p: "web",
                            dtm: d,
                            stm: kb.now(),
                            tz: "undefined" != typeof Intl ? encodeURIComponent(Intl.DateTimeFormat().resolvedOptions().timeZone) : "N%2FA",
                            e: "se",
                            eid: sb.v4(),
                            se_ca: c,
                            fp: e.hash(),
                            tv: "js-2.6.1"
                        });
                        return ka.nu(function(b) {
                            var c = document.createElement("img");
                            c.src = nb.getServiceUrl(a) + f, c.onload = function() {
                                b(!0)
                            }, c.onerror = function() {
                                b(!1)
                            }
                        })
                    }
                }
            },
            ub = function(a, b) {
                return {
                    sendStat: function(c) {
                        return function() {
                            var d = kb.now();
                            a.get(function(a) {
                                b.send(c, d, a).get(function() {})
                            })
                        }
                    }
                }
            },
            vb = function(a, b) {
                var c = Na.getLazyFingerprint(),
                    d = tb(a, b);
                return ub(c, d)
            };
        return function() {
            var a = tinymce.defaultSettings,
                b = function(b) {
                    var c = vb(a, b);
                    return c.sendStat("script_load")(),
                        function(a, b) {
                            a.once("init", c.sendStat("init")), a.once("focus", c.sendStat("focus"))
                        }
                },
                c = function() {
                    return function() {}
                },
                d = nb.getApiKey(a),
                e = d.fold(c, b);
            tinymce.PluginManager.add("chiffer", e)
        }
    }()()
}();;
/* Ephox rain plugin
 *
 * Copyright 2010-2018 Ephox Corporation.  All rights reserved.
 *
 * Version: 1.0.0-44
 */
! function() {
    ! function() {
        "use strict";
        var a = function() {},
            b = function(a) {
                return function() {
                    return a()
                }
            },
            c = function(a, b) {
                return function() {
                    return a(b.apply(null, arguments))
                }
            },
            d = function(a) {
                return function() {
                    return a
                }
            },
            e = function(a) {
                return a
            },
            f = function(a, b) {
                return a === b
            },
            g = function(a) {
                for (var b = new Array(arguments.length - 1), c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
                return function() {
                    for (var c = new Array(arguments.length), d = 0; d < c.length; d++) c[d] = arguments[d];
                    var e = b.concat(c);
                    return a.apply(null, e)
                }
            },
            h = function(a) {
                return function() {
                    return !a.apply(null, arguments)
                }
            },
            i = function(a) {
                return function() {
                    throw new Error(a)
                }
            },
            j = function(a) {
                return a()
            },
            k = function(a) {
                a()
            },
            l = d(!1),
            m = d(!0),
            n = {
                noop: a,
                noarg: b,
                compose: c,
                constant: d,
                identity: e,
                tripleEquals: f,
                curry: g,
                not: h,
                die: i,
                apply: j,
                call: k,
                never: l,
                always: m
            },
            o = n.never,
            p = n.always,
            q = function() {
                return r
            },
            r = function() {
                var a = function(a) {
                        return a.isNone()
                    },
                    b = function(a) {
                        return a()
                    },
                    c = function(a) {
                        return a
                    },
                    d = function() {},
                    e = {
                        fold: function(a, b) {
                            return a()
                        },
                        is: o,
                        isSome: o,
                        isNone: p,
                        getOr: c,
                        getOrThunk: b,
                        getOrDie: function(a) {
                            throw new Error(a || "error: getOrDie called on none.")
                        },
                        or: c,
                        orThunk: b,
                        map: q,
                        ap: q,
                        each: d,
                        bind: q,
                        flatten: q,
                        exists: o,
                        forall: p,
                        filter: q,
                        equals: a,
                        equals_: a,
                        toArray: function() {
                            return []
                        },
                        toString: n.constant("none()")
                    };
                return Object.freeze && Object.freeze(e), e
            }(),
            s = function(a) {
                var b = function() {
                        return a
                    },
                    c = function() {
                        return f
                    },
                    d = function(b) {
                        return s(b(a))
                    },
                    e = function(b) {
                        return b(a)
                    },
                    f = {
                        fold: function(b, c) {
                            return c(a)
                        },
                        is: function(b) {
                            return a === b
                        },
                        isSome: p,
                        isNone: o,
                        getOr: b,
                        getOrThunk: b,
                        getOrDie: b,
                        or: c,
                        orThunk: c,
                        map: d,
                        ap: function(b) {
                            return b.fold(q, function(b) {
                                return s(b(a))
                            })
                        },
                        each: function(b) {
                            b(a)
                        },
                        bind: e,
                        flatten: b,
                        exists: e,
                        forall: e,
                        filter: function(b) {
                            return b(a) ? f : r
                        },
                        equals: function(b) {
                            return b.is(a)
                        },
                        equals_: function(b, c) {
                            return b.fold(o, function(b) {
                                return c(a, b)
                            })
                        },
                        toArray: function() {
                            return [a]
                        },
                        toString: function() {
                            return "some(" + a + ")"
                        }
                    };
                return f
            },
            t = function(a) {
                return null === a || void 0 === a ? r : s(a)
            },
            u = {
                some: s,
                none: q,
                from: t
            },
            v = function() {
                var a = Array.prototype.indexOf,
                    b = function(b, c) {
                        return a.call(b, c)
                    },
                    c = function(a, b) {
                        return L(a, b)
                    };
                return void 0 === a ? c : b
            }(),
            w = function(a, b) {
                var c = v(a, b);
                return -1 === c ? u.none() : u.some(c)
            },
            x = function(a, b) {
                return v(a, b) > -1
            },
            y = function(a, b) {
                return K(a, b).isSome()
            },
            z = function(a, b) {
                for (var c = [], d = 0; d < a; d++) c.push(b(d));
                return c
            },
            A = function(a, b) {
                for (var c = [], d = 0; d < a.length; d += b) {
                    var e = a.slice(d, d + b);
                    c.push(e)
                }
                return c
            },
            B = function(a, b) {
                for (var c = a.length, d = new Array(c), e = 0; e < c; e++) {
                    var f = a[e];
                    d[e] = b(f, e, a)
                }
                return d
            },
            C = function(a, b) {
                for (var c = 0, d = a.length; c < d; c++) {
                    b(a[c], c, a)
                }
            },
            D = function(a, b) {
                for (var c = a.length - 1; c >= 0; c--) {
                    b(a[c], c, a)
                }
            },
            E = function(a, b) {
                for (var c = [], d = [], e = 0, f = a.length; e < f; e++) {
                    var g = a[e];
                    (b(g, e, a) ? c : d).push(g)
                }
                return {
                    pass: c,
                    fail: d
                }
            },
            F = function(a, b) {
                for (var c = [], d = 0, e = a.length; d < e; d++) {
                    var f = a[d];
                    b(f, d, a) && c.push(f)
                }
                return c
            },
            G = function(a, b) {
                if (0 === a.length) return [];
                for (var c = b(a[0]), d = [], e = [], f = 0, g = a.length; f < g; f++) {
                    var h = a[f],
                        i = b(h);
                    i !== c && (d.push(e), e = []), c = i, e.push(h)
                }
                return 0 !== e.length && d.push(e), d
            },
            H = function(a, b, c) {
                return D(a, function(a) {
                    c = b(c, a)
                }), c
            },
            I = function(a, b, c) {
                return C(a, function(a) {
                    c = b(c, a)
                }), c
            },
            J = function(a, b) {
                for (var c = 0, d = a.length; c < d; c++) {
                    var e = a[c];
                    if (b(e, c, a)) return u.some(e)
                }
                return u.none()
            },
            K = function(a, b) {
                for (var c = 0, d = a.length; c < d; c++) {
                    if (b(a[c], c, a)) return u.some(c)
                }
                return u.none()
            },
            L = function(a, b) {
                for (var c = 0, d = a.length; c < d; ++c)
                    if (a[c] === b) return c;
                return -1
            },
            M = Array.prototype.push,
            N = function(a) {
                for (var b = [], c = 0, d = a.length; c < d; ++c) {
                    if (!Array.prototype.isPrototypeOf(a[c])) throw new Error("Arr.flatten item " + c + " was not an array, input: " + a);
                    M.apply(b, a[c])
                }
                return b
            },
            O = function(a, b) {
                var c = B(a, b);
                return N(c)
            },
            P = function(a, b) {
                for (var c = 0, d = a.length; c < d; ++c) {
                    if (!0 !== b(a[c], c, a)) return !1
                }
                return !0
            },
            Q = function(a, b) {
                return a.length === b.length && P(a, function(a, c) {
                    return a === b[c]
                })
            },
            R = Array.prototype.slice,
            S = function(a) {
                var b = R.call(a, 0);
                return b.reverse(), b
            },
            T = function(a, b) {
                return F(a, function(a) {
                    return !x(b, a)
                })
            },
            U = function(a, b) {
                for (var c = {}, d = 0, e = a.length; d < e; d++) {
                    var f = a[d];
                    c[String(f)] = b(f, d)
                }
                return c
            },
            V = function(a) {
                return [a]
            },
            W = function(a, b) {
                var c = R.call(a, 0);
                return c.sort(b), c
            },
            X = function(a) {
                return 0 === a.length ? u.none() : u.some(a[0])
            },
            Y = function(a) {
                return 0 === a.length ? u.none() : u.some(a[a.length - 1])
            },
            Z = {
                map: B,
                each: C,
                eachr: D,
                partition: E,
                filter: F,
                groupBy: G,
                indexOf: w,
                foldr: H,
                foldl: I,
                find: J,
                findIndex: K,
                flatten: N,
                bind: O,
                forall: P,
                exists: y,
                contains: x,
                equal: Q,
                reverse: S,
                chunk: A,
                difference: T,
                mapToObject: U,
                pure: V,
                sort: W,
                range: z,
                head: X,
                last: Y
            },
            $ = function(a) {
                return u.from(a.api_key)
            },
            _ = function(a) {
                return u.from(a.rain_rainmaker_service_url).filter(function(a) {
                    return a.length > 0
                })
            },
            aa = {
                getApiKey: $,
                getServiceUrl: _
            },
            ba = tinymce.util,
            ca = ba.JSON,
            da = ba.URI,
            ea = ba.XHR,
            fa = function(a, b) {
                var c = -1 === a.indexOf("?") ? "?" : "&",
                    d = c + "apiKey=" + encodeURIComponent(b);
                return "string" == typeof b ? a + d : a
            };
        return function() {
            var a = function(a, b) {
                aa.getApiKey(a.settings).bind(function(b) {
                    return aa.getServiceUrl(a.settings).map(function(a) {
                        return fa(a + "/1/messages", b)
                    })
                }).each(function(c) {
                    var d = {
                        url: new da(b).toAbsolute(c),
                        type: "get",
                        content_type: "application/json",
                        success: function(b) {
                            var c = ca.parse(b);
                            c && Z.each(c.messages, function(b) {
                                a.notificationManager.open({
                                    type: "info",
                                    text: b
                                })
                            })
                        },
                        error: function() {}
                    };
                    ea.send(d)
                })
            };
            return tinymce.PluginManager.add("rain", a),
                function() {}
        }
    }()()
}();;
