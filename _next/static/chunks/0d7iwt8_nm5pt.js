(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 67458, (e, t, r) => {
    "use strict";
    var n = e.r(71645).__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    r.c = function(e) {
        return n.H.useMemoCache(e)
    }
}, 932, (e, t, r) => {
    "use strict";
    t.exports = e.r(67458)
}, 88143, (e, t, r) => {
    "use strict";

    function n({
        widthInt: e,
        heightInt: t,
        blurWidth: r,
        blurHeight: i,
        blurDataURL: a,
        objectFit: s
    }) {
        let l = r ? 40 * r : e,
            o = i ? 40 * i : t,
            c = l && o ? `viewBox='0 0 ${l} ${o}'` : "";
        return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${c}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${c?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${a}'/%3E%3C/svg%3E`
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function() {
            return n
        }
    })
}, 87690, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        VALID_LOADERS: function() {
            return a
        },
        imageConfigDefault: function() {
            return s
        }
    };
    for (var i in n) Object.defineProperty(r, i, {
        enumerable: !0,
        get: n[i]
    });
    let a = ["default", "imgix", "cloudinary", "akamai", "custom"],
        s = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 14400,
            formats: ["image/webp"],
            maximumDiskCacheSize: void 0,
            maximumRedirects: 3,
            maximumResponseBody: 5e7,
            dangerouslyAllowLocalIP: !1,
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "attachment",
            localPatterns: void 0,
            remotePatterns: [],
            qualities: [75],
            unoptimized: !1,
            customCacheHandler: !1
        }
}, 8927, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function() {
            return c
        }
    }), e.r(33525);
    let n = e.r(43369),
        i = e.r(88143),
        a = e.r(87690),
        s = ["-moz-initial", "fill", "none", "scale-down", void 0];

    function l(e) {
        return void 0 !== e.default
    }

    function o(e) {
        return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
    }

    function c({
        src: e,
        sizes: t,
        unoptimized: r = !1,
        priority: u = !1,
        preload: d = !1,
        loading: f,
        className: m,
        quality: p,
        width: g,
        height: h,
        fill: b = !1,
        style: y,
        overrideSrc: x,
        onLoad: v,
        onLoadingComplete: j,
        placeholder: _ = "empty",
        blurDataURL: w,
        fetchPriority: N,
        decoding: O = "async",
        layout: P,
        objectFit: S,
        objectPosition: C,
        lazyBoundary: E,
        lazyRoot: R,
        ...A
    }, M) {
        var k;
        let z, I, D, {
                imgConf: T,
                showAltText: L,
                blurComplete: $,
                defaultLoader: F
            } = M,
            U = T || a.imageConfigDefault;
        if ("allSizes" in U) z = U;
        else {
            let e = [...U.deviceSizes, ...U.imageSizes].sort((e, t) => e - t),
                t = U.deviceSizes.sort((e, t) => e - t),
                r = U.qualities ? .sort((e, t) => e - t);
            z = { ...U,
                allSizes: e,
                deviceSizes: t,
                qualities: r
            }
        }
        if (void 0 === F) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
            value: "E163",
            enumerable: !1,
            configurable: !0
        });
        let B = A.loader || F;
        delete A.loader, delete A.srcSet;
        let G = "__next_img_default" in B;
        if (G) {
            if ("custom" === z.loader) throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                value: "E252",
                enumerable: !1,
                configurable: !0
            })
        } else {
            let e = B;
            B = t => {
                let {
                    config: r,
                    ...n
                } = t;
                return e(n)
            }
        }
        if (P) {
            "fill" === P && (b = !0);
            let e = {
                intrinsic: {
                    maxWidth: "100%",
                    height: "auto"
                },
                responsive: {
                    width: "100%",
                    height: "auto"
                }
            }[P];
            e && (y = { ...y,
                ...e
            });
            let r = {
                responsive: "100vw",
                fill: "100vw"
            }[P];
            r && !t && (t = r)
        }
        let W = "",
            q = o(g),
            H = o(h);
        if ((k = e) && "object" == typeof k && (l(k) || void 0 !== k.src)) {
            let t = l(e) ? e.default : e;
            if (!t.src) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                value: "E460",
                enumerable: !1,
                configurable: !0
            });
            if (!t.height || !t.width) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                value: "E48",
                enumerable: !1,
                configurable: !0
            });
            if (I = t.blurWidth, D = t.blurHeight, w = w || t.blurDataURL, W = t.src, !b)
                if (q || H) {
                    if (q && !H) {
                        let e = q / t.width;
                        H = Math.round(t.height * e)
                    } else if (!q && H) {
                        let e = H / t.height;
                        q = Math.round(t.width * e)
                    }
                } else q = t.width, H = t.height
        }
        let X = !u && !d && ("lazy" === f || void 0 === f);
        (!(e = "string" == typeof e ? e : W) || e.startsWith("data:") || e.startsWith("blob:")) && (r = !0, X = !1), z.unoptimized && (r = !0), G && !z.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (r = !0);
        let Y = o(p),
            V = Object.assign(b ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: S,
                objectPosition: C
            } : {}, L ? {} : {
                color: "transparent"
            }, y),
            J = $ || "empty" === _ ? null : "blur" === _ ? `url("data:image/svg+xml;charset=utf-8,${(0,i.getImageBlurSvg)({widthInt:q,heightInt:H,blurWidth:I,blurHeight:D,blurDataURL:w||"",objectFit:V.objectFit})}")` : `url("${_}")`,
            K = s.includes(V.objectFit) ? "fill" === V.objectFit ? "100% 100%" : "cover" : V.objectFit,
            Q = J ? {
                backgroundSize: K,
                backgroundPosition: V.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: J
            } : {},
            Z = function({
                config: e,
                src: t,
                unoptimized: r,
                width: i,
                quality: a,
                sizes: s,
                loader: l
            }) {
                if (r) {
                    if (t.startsWith("/") && !t.startsWith("//")) {
                        let e = (0, n.getDeploymentId)();
                        if (e) {
                            let r = t.indexOf("?");
                            if (-1 !== r) {
                                let n = new URLSearchParams(t.slice(r + 1));
                                n.get("dpl") || (n.append("dpl", e), t = t.slice(0, r) + "?" + n.toString())
                            } else t += `?dpl=${e}`
                        }
                    }
                    return {
                        src: t,
                        srcSet: void 0,
                        sizes: void 0
                    }
                }
                let {
                    widths: o,
                    kind: c
                } = function({
                    deviceSizes: e,
                    allSizes: t
                }, r, n) {
                    if (n) {
                        let r = /(^|\s)(1?\d?\d)vw/g,
                            i = [];
                        for (let e; e = r.exec(n);) i.push(parseInt(e[2]));
                        if (i.length) {
                            let r = .01 * Math.min(...i);
                            return {
                                widths: t.filter(t => t >= e[0] * r),
                                kind: "w"
                            }
                        }
                        return {
                            widths: t,
                            kind: "w"
                        }
                    }
                    return "number" != typeof r ? {
                        widths: e,
                        kind: "w"
                    } : {
                        widths: [...new Set([r, 2 * r].map(e => t.find(t => t >= e) || t[t.length - 1]))],
                        kind: "x"
                    }
                }(e, i, s), u = o.length - 1;
                return {
                    sizes: s || "w" !== c ? s : "100vw",
                    srcSet: o.map((r, n) => `${l({config:e,src:t,quality:a,width:r})} ${"w"===c?r:n+1}${c}`).join(", "),
                    src: l({
                        config: e,
                        src: t,
                        quality: a,
                        width: o[u]
                    })
                }
            }({
                config: z,
                src: e,
                unoptimized: r,
                width: q,
                quality: Y,
                sizes: t,
                loader: B
            }),
            ee = X ? "lazy" : f;
        return {
            props: { ...A,
                loading: ee,
                fetchPriority: N,
                width: q,
                height: H,
                decoding: O,
                className: m,
                style: { ...V,
                    ...Q
                },
                sizes: Z.sizes,
                srcSet: Z.srcSet,
                src: x || Z.src
            },
            meta: {
                unoptimized: r,
                preload: d || u,
                placeholder: _,
                fill: b
            }
        }
    }
}, 98879, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let n = e.r(71645),
        i = "u" < typeof window,
        a = i ? () => {} : n.useLayoutEffect,
        s = i ? () => {} : n.useEffect;

    function l(e) {
        let {
            headManager: t,
            reduceComponentsToState: r
        } = e;

        function l() {
            if (t && t.mountedInstances) {
                let e = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                t.updateHead(r(e))
            }
        }
        return i && (t ? .mountedInstances ? .add(e.children), l()), a(() => (t ? .mountedInstances ? .add(e.children), () => {
            t ? .mountedInstances ? .delete(e.children)
        })), a(() => (t && (t._pendingUpdate = l), () => {
            t && (t._pendingUpdate = l)
        })), s(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
            t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
        })), null
    }
}, 25633, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return g
        },
        defaultHead: function() {
            return d
        }
    };
    for (var i in n) Object.defineProperty(r, i, {
        enumerable: !0,
        get: n[i]
    });
    let a = e.r(55682),
        s = e.r(90809),
        l = e.r(43476),
        o = s._(e.r(71645)),
        c = a._(e.r(98879)),
        u = e.r(42732);

    function d() {
        return [(0, l.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"), (0, l.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")]
    }

    function f(e, t) {
        return "string" == typeof t || "number" == typeof t ? e : t.type === o.default.Fragment ? e.concat(o.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
    }
    e.r(33525);
    let m = ["name", "httpEquiv", "charSet", "itemProp"];

    function p(e) {
        let t, r, n, i;
        return e.reduce(f, []).reverse().concat(d().reverse()).filter((t = new Set, r = new Set, n = new Set, i = {}, e => {
            let a = !0,
                s = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                s = !0;
                let r = e.key.slice(e.key.indexOf("$") + 1);
                t.has(r) ? a = !1 : t.add(r)
            }
            switch (e.type) {
                case "title":
                case "base":
                    r.has(e.type) ? a = !1 : r.add(e.type);
                    break;
                case "meta":
                    for (let t = 0, r = m.length; t < r; t++) {
                        let r = m[t];
                        if (e.props.hasOwnProperty(r))
                            if ("charSet" === r) n.has(r) ? a = !1 : n.add(r);
                            else {
                                let t = e.props[r],
                                    n = i[r] || new Set;
                                ("name" !== r || !s) && n.has(t) ? a = !1 : (n.add(t), i[r] = n)
                            }
                    }
            }
            return a
        })).reverse().map((e, t) => {
            let r = e.key || t;
            return o.default.cloneElement(e, {
                key: r
            })
        })
    }
    let g = function({
        children: e
    }) {
        let t = (0, o.useContext)(u.HeadManagerContext);
        return (0, l.jsx)(c.default, {
            reduceComponentsToState: p,
            headManager: t,
            children: e
        })
    };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 18556, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let n = e.r(55682)._(e.r(71645)),
        i = e.r(87690),
        a = n.default.createContext(i.imageConfigDefault)
}, 65856, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e.r(55682)._(e.r(71645)).default.createContext(null)
}, 70965, (e, t, r) => {
    "use strict";

    function n(e, t) {
        let r = e || 75;
        return t ? .qualities ? .length ? t.qualities.reduce((e, t) => Math.abs(t - r) < Math.abs(e - r) ? t : e, t.qualities[0]) : r
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function() {
            return n
        }
    })
}, 1948, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let n = e.r(70965),
        i = e.r(43369);

    function a({
        config: e,
        src: t,
        width: r,
        quality: s
    }) {
        let l = (0, i.getDeploymentId)();
        if (t.startsWith("/") && !t.startsWith("//")) {
            let e = t.indexOf("?");
            if (-1 !== e) {
                let r = new URLSearchParams(t.slice(e + 1)),
                    n = r.get("dpl");
                if (n) {
                    l = n, r.delete("dpl");
                    let i = r.toString();
                    t = t.slice(0, e) + (i ? "?" + i : "")
                }
            }
        }
        if (t.startsWith("/") && t.includes("?") && e.localPatterns ? .length === 1 && "**" === e.localPatterns[0].pathname && "" === e.localPatterns[0].search) throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
            value: "E871",
            enumerable: !1,
            configurable: !0
        });
        let o = (0, n.findClosestQuality)(s, e);
        return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${o}${t.startsWith("/")&&l?`&dpl=${l}`:""}`
    }
    a.__next_img_default = !0;
    let s = a
}, 18581, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let n = e.r(71645);

    function i(e, t) {
        let r = (0, n.useRef)(null),
            i = (0, n.useRef)(null);
        return (0, n.useCallback)(n => {
            if (null === n) {
                let e = r.current;
                e && (r.current = null, e());
                let t = i.current;
                t && (i.current = null, t())
            } else e && (r.current = a(e, n)), t && (i.current = a(t, n))
        }, [e, t])
    }

    function a(e, t) {
        if ("function" != typeof e) return e.current = t, () => {
            e.current = null
        }; {
            let r = e(t);
            return "function" == typeof r ? r : () => e(null)
        }
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 85437, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function() {
            return v
        }
    });
    let n = e.r(55682),
        i = e.r(90809),
        a = e.r(43476),
        s = i._(e.r(71645)),
        l = n._(e.r(74080)),
        o = n._(e.r(25633)),
        c = e.r(8927),
        u = e.r(87690),
        d = e.r(18556);
    e.r(33525);
    let f = e.r(65856),
        m = n._(e.r(1948)),
        p = e.r(18581),
        g = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            qualities: [75],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };

    function h(e, t, r, n, i, a, s) {
        let l = e ? .src;
        e && e["data-loaded-src"] !== l && (e["data-loaded-src"] = l, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
            if (e.parentElement && e.isConnected) {
                if ("empty" !== t && i(!0), r ? .current) {
                    let t = new Event("load");
                    Object.defineProperty(t, "target", {
                        writable: !1,
                        value: e
                    });
                    let n = !1,
                        i = !1;
                    r.current({ ...t,
                        nativeEvent: t,
                        currentTarget: e,
                        target: e,
                        isDefaultPrevented: () => n,
                        isPropagationStopped: () => i,
                        persist: () => {},
                        preventDefault: () => {
                            n = !0, t.preventDefault()
                        },
                        stopPropagation: () => {
                            i = !0, t.stopPropagation()
                        }
                    })
                }
                n ? .current && n.current(e)
            }
        }))
    }

    function b(e) {
        return s.use ? {
            fetchPriority: e
        } : {
            fetchpriority: e
        }
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let y = (0, s.forwardRef)(({
        src: e,
        srcSet: t,
        sizes: r,
        height: n,
        width: i,
        decoding: l,
        className: o,
        style: c,
        fetchPriority: u,
        placeholder: d,
        loading: f,
        unoptimized: m,
        fill: g,
        onLoadRef: y,
        onLoadingCompleteRef: x,
        setBlurComplete: v,
        setShowAltText: j,
        sizesInput: _,
        onLoad: w,
        onError: N,
        ...O
    }, P) => {
        let S = (0, s.useCallback)(e => {
                e && (N && (e.src = e.src), e.complete && h(e, d, y, x, v, m, _))
            }, [e, d, y, x, v, N, m, _]),
            C = (0, p.useMergedRef)(P, S);
        return (0, a.jsx)("img", { ...O,
            ...b(u),
            loading: f,
            width: i,
            height: n,
            decoding: l,
            "data-nimg": g ? "fill" : "1",
            className: o,
            style: c,
            sizes: r,
            srcSet: t,
            src: e,
            ref: C,
            onLoad: e => {
                h(e.currentTarget, d, y, x, v, m, _)
            },
            onError: e => {
                j(!0), "empty" !== d && v(!0), N && N(e)
            }
        })
    });

    function x({
        isAppRouter: e,
        imgAttributes: t
    }) {
        let r = {
            as: "image",
            imageSrcSet: t.srcSet,
            imageSizes: t.sizes,
            crossOrigin: t.crossOrigin,
            referrerPolicy: t.referrerPolicy,
            ...b(t.fetchPriority)
        };
        return e && l.default.preload ? (l.default.preload(t.src, r), null) : (0, a.jsx)(o.default, {
            children: (0, a.jsx)("link", {
                rel: "preload",
                href: t.srcSet ? void 0 : t.src,
                ...r
            }, "__nimg-" + t.src + t.srcSet + t.sizes)
        })
    }
    let v = (0, s.forwardRef)((e, t) => {
        let r = (0, s.useContext)(f.RouterContext),
            n = (0, s.useContext)(d.ImageConfigContext),
            i = (0, s.useMemo)(() => {
                let e = g || n || u.imageConfigDefault,
                    t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                    r = e.deviceSizes.sort((e, t) => e - t),
                    i = e.qualities ? .sort((e, t) => e - t);
                return { ...e,
                    allSizes: t,
                    deviceSizes: r,
                    qualities: i,
                    localPatterns: "u" < typeof window ? n ? .localPatterns : e.localPatterns
                }
            }, [n]),
            {
                onLoad: l,
                onLoadingComplete: o
            } = e,
            p = (0, s.useRef)(l);
        (0, s.useEffect)(() => {
            p.current = l
        }, [l]);
        let h = (0, s.useRef)(o);
        (0, s.useEffect)(() => {
            h.current = o
        }, [o]);
        let [b, v] = (0, s.useState)(!1), [j, _] = (0, s.useState)(!1), {
            props: w,
            meta: N
        } = (0, c.getImgProps)(e, {
            defaultLoader: m.default,
            imgConf: i,
            blurComplete: b,
            showAltText: j
        });
        return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(y, { ...w,
                unoptimized: N.unoptimized,
                placeholder: N.placeholder,
                fill: N.fill,
                onLoadRef: p,
                onLoadingCompleteRef: h,
                setBlurComplete: v,
                setShowAltText: _,
                sizesInput: e.sizes,
                ref: t
            }), N.preload ? (0, a.jsx)(x, {
                isAppRouter: !r,
                imgAttributes: w
            }) : null]
        })
    });
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 94909, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return u
        },
        getImageProps: function() {
            return c
        }
    };
    for (var i in n) Object.defineProperty(r, i, {
        enumerable: !0,
        get: n[i]
    });
    let a = e.r(55682),
        s = e.r(8927),
        l = e.r(85437),
        o = a._(e.r(1948));

    function c(e) {
        let {
            props: t
        } = (0, s.getImgProps)(e, {
            defaultLoader: o.default,
            imgConf: {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [32, 48, 64, 96, 128, 256, 384],
                qualities: [75],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !1
            }
        });
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return {
            props: t
        }
    }
    let u = l.Image
}, 57688, (e, t, r) => {
    t.exports = e.r(94909)
}, 40141, e => {
    "use strict";
    var t = e.i(71645),
        r = {
            color: void 0,
            size: void 0,
            className: void 0,
            style: void 0,
            attr: void 0
        },
        n = t.default.createContext && t.default.createContext(r),
        i = ["attr", "size", "title"];

    function a() {
        return (a = Object.assign.bind()).apply(this, arguments)
    }

    function s(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function l(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? s(Object(r), !0).forEach(function(t) {
                var n, i, a;
                n = e, i = t, a = r[t], (i = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || !e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : t + ""
                }(i)) in n ? Object.defineProperty(n, i, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[i] = a
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }

    function o(e) {
        var s = r => {
            var n, {
                    attr: s,
                    size: o,
                    title: c
                } = e,
                u = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = function(e, t) {
                        if (null == e) return {};
                        var r = {};
                        for (var n in e)
                            if (Object.prototype.hasOwnProperty.call(e, n)) {
                                if (t.indexOf(n) >= 0) continue;
                                r[n] = e[n]
                            }
                        return r
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                    return i
                }(e, i),
                d = o || r.size || "1em";
            return r.className && (n = r.className), e.className && (n = (n ? n + " " : "") + e.className), t.default.createElement("svg", a({
                stroke: "currentColor",
                fill: "currentColor",
                strokeWidth: "0"
            }, r.attr, s, u, {
                className: n,
                style: l(l({
                    color: e.color || r.color
                }, r.style), e.style),
                height: d,
                width: d,
                xmlns: "http://www.w3.org/2000/svg"
            }), c && t.default.createElement("title", null, c), e.children)
        };
        return void 0 !== n ? t.default.createElement(n.Consumer, null, e => s(e)) : s(r)
    }
    e.s(["GenIcon", 0, function(e) {
        return r => t.default.createElement(o, a({
            attr: l({}, e.attr)
        }, r), function e(r) {
            return r && r.map((r, n) => t.default.createElement(r.tag, l({
                key: n
            }, r.attr), e(r.child)))
        }(e.child))
    }], 40141)
}, 49042, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(932),
        n = e.i(18566),
        i = e.i(71645),
        a = e.i(57688),
        s = e.i(69620);

    function l() {
        let e, l, o, c, u, d, f, m, p, g, h, b, y, x, v, j, _, w, N, O, P, S, C, E, R, A, M, k = (0, r.c)(61),
            z = (0, n.useSearchParams)(),
            [I, D] = (0, i.useState)(!1);
        k[0] !== z ? (e = z.get("corporatePending"), k[0] = z, k[1] = e) : e = k[1];
        let T = "true" === e;
        k[2] !== z ? (l = z.get("firstName") || "N/A", k[2] = z, k[3] = l) : l = k[3], k[4] !== z ? (o = z.get("middleName") || "N/A", k[4] = z, k[5] = o) : o = k[5], k[6] !== z ? (c = z.get("lastName") || "N/A", k[6] = z, k[7] = c) : c = k[7], k[8] !== z ? (u = z.get("businessName") || "N/A", k[8] = z, k[9] = u) : u = k[9], k[10] !== z ? (d = z.get("accountNumber") || "N/A", k[10] = z, k[11] = d) : d = k[11], k[12] !== l || k[13] !== o || k[14] !== c || k[15] !== u || k[16] !== d ? (f = {
            firstName: l,
            middleName: o,
            lastName: c,
            businessName: u,
            accountNumber: d
        }, k[12] = l, k[13] = o, k[14] = c, k[15] = u, k[16] = d, k[17] = f) : f = k[17];
        let L = f;
        k[18] !== L.accountNumber ? (m = () => {
            navigator.clipboard.writeText(L.accountNumber), D(!0), setTimeout(() => D(!1), 2e3)
        }, k[18] = L.accountNumber, k[19] = m) : m = k[19];
        let $ = m;
        k[20] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, t.jsx)("div", {
            className: "hidden lg:flex bottom-0 right-0 fixed",
            children: (0, t.jsx)(a.default, {
                src: "https://res.cloudinary.com/dbpjskran/image/upload/v1764111095/Group_10_fbbios.png",
                alt: "Decoration",
                width: 70,
                height: 70
            })
        }), k[20] = p) : p = k[20], k[21] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, t.jsx)("div", {
            className: "hidden lg:flex top-1/2 left-0 -mt-7 fixed",
            children: (0, t.jsx)(a.default, {
                src: "https://res.cloudinary.com/dbpjskran/image/upload/v1764111019/Group_14_coparw.png",
                alt: "Decoration",
                width: 70,
                height: 70
            })
        }), k[21] = g) : g = k[21], k[22] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, t.jsx)("div", {
            className: "w-full bg-[#FFF3E6] py-4 px-4 flex justify-center rounded-3xl",
            children: (0, t.jsx)(a.default, {
                src: "https://res.cloudinary.com/dbpjskran/image/upload/v1764212274/48030970fb4a97d332caabcbc014a618948c6355_z1olaj.png",
                width: 150,
                height: 60,
                alt: "Lapo Logo"
            })
        }), k[22] = h) : h = k[22], k[23] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, t.jsx)("div", {
            className: "mt-10",
            children: (0, t.jsx)(a.default, {
                src: "https://res.cloudinary.com/dbpjskran/image/upload/v1764351014/Frame_1597882038_snxnno.png",
                alt: "Success Icon",
                width: 160,
                height: 160,
                className: "object-contain"
            })
        }), k[23] = b) : b = k[23];
        let F = T ? "Application Submitted Successfully" : "Account Created Successfully";
        return k[24] !== F ? (y = (0, t.jsx)("h1", {
            className: "text-3xl font-bold mt-6 text-[#1ABC60]",
            children: F
        }), k[24] = F, k[25] = y) : y = k[25], k[26] !== T ? (x = (0, t.jsx)("p", {
            className: "text-gray-500 text-center mt-2",
            children: T ? (0, t.jsx)(t.Fragment, {
                children: "Your corporate account application has been received and is pending review. We will notify you once it has been processed."
            }) : (0, t.jsxs)(t.Fragment, {
                children: ["Your LAPO Microfinance Bank account has been successfully created.", " ", (0, t.jsx)("br", {}), " You can now start saving, making transfers, and accessing our financial services instantly."]
            })
        }), k[26] = T, k[27] = x) : x = k[27], k[28] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, t.jsx)("span", {
            className: "font-semibold",
            children: "First Name:"
        }), k[28] = v) : v = k[28], k[29] !== L.firstName ? (j = (0, t.jsxs)("p", {
            children: [v, " ", L.firstName]
        }), k[29] = L.firstName, k[30] = j) : j = k[30], k[31] === Symbol.for("react.memo_cache_sentinel") ? (_ = (0, t.jsx)("span", {
            className: "font-semibold",
            children: "Middle Name:"
        }), k[31] = _) : _ = k[31], k[32] !== L.middleName ? (w = (0, t.jsxs)("p", {
            children: [_, " ", L.middleName]
        }), k[32] = L.middleName, k[33] = w) : w = k[33], k[34] === Symbol.for("react.memo_cache_sentinel") ? (N = (0, t.jsx)("span", {
            className: "font-semibold",
            children: "Last Name:"
        }), k[34] = N) : N = k[34], k[35] !== L.lastName ? (O = (0, t.jsxs)("p", {
            children: [N, " ", L.lastName]
        }), k[35] = L.lastName, k[36] = O) : O = k[36], k[37] !== L.businessName || k[38] !== T ? (P = T && (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
                className: "font-semibold",
                children: "Business Name:"
            }), " ", L.businessName]
        }), k[37] = L.businessName, k[38] = T, k[39] = P) : P = k[39], k[40] !== I || k[41] !== L.accountNumber || k[42] !== $ || k[43] !== T ? (S = !T && (0, t.jsxs)("div", {
            className: "bg-white rounded-xl px-2 py-6 shadow-sm text-center flex gap-5",
            children: [(0, t.jsx)("p", {
                className: "font-semibold mb-1",
                children: "Account Number:"
            }), (0, t.jsxs)("div", {
                className: "flex items-center justify-center gap-2 text-lg",
                children: [(0, t.jsx)("span", {
                    children: L.accountNumber
                }), (0, t.jsx)(s.IoCopyOutline, {
                    size: 18,
                    className: "cursor-pointer text-gray-600 hover:text-black",
                    onClick: $
                })]
            }), I && (0, t.jsx)("p", {
                className: "text-green-600 text-sm mt-2 font-medium",
                children: "Copied!"
            })]
        }), k[40] = I, k[41] = L.accountNumber, k[42] = $, k[43] = T, k[44] = S) : S = k[44], k[45] !== j || k[46] !== w || k[47] !== O || k[48] !== P || k[49] !== S ? (C = (0, t.jsxs)("div", {
            className: "space-y-10 text-[15px] bg-[#F4F4F4] p-10 rounded-2xl",
            children: [j, w, O, P, S]
        }), k[45] = j, k[46] = w, k[47] = O, k[48] = P, k[49] = S, k[50] = C) : C = k[50], k[51] !== T ? (E = !T && (0, t.jsx)("div", {
            className: "flex flex-col items-center justify-center",
            children: (0, t.jsxs)("div", {
                className: "bg-[#E58600] rounded-3xl p-10 max-w-5xl text-white",
                children: [(0, t.jsx)("h2", {
                    className: "text-3xl  mb-4",
                    children: "Get the LAPO Mobile App"
                }), (0, t.jsx)("p", {
                    className: "max-w-2xl text-lg mb-8 leading-relaxed",
                    children: "Enjoy seamless banking on the go. Download the LAPO Mobile App to manage your account anytime, anywhere."
                }), (0, t.jsxs)("div", {
                    className: "space-y-5",
                    children: [(0, t.jsx)(a.default, {
                        src: "https://res.cloudinary.com/dbpjskran/image/upload/v1766099823/Frame_76_jvxgnh.png",
                        alt: "Google Play Store",
                        width: 1e3,
                        height: 1e3,
                        className: "h-12 w-52 md:w-fit object-contain cursor-pointer"
                    }), (0, t.jsx)(a.default, {
                        src: "https://res.cloudinary.com/dbpjskran/image/upload/v1766099822/Frame_77_iazkik.png",
                        alt: "Apple App Store",
                        width: 1e3,
                        height: 1e3,
                        className: "h-12 w-52 md:w-fit  object-contain cursor-pointer"
                    })]
                })]
            })
        }), k[51] = T, k[52] = E) : E = k[52], k[53] !== C || k[54] !== E ? (R = (0, t.jsxs)("div", {
            className: "mt-10  w-11/12 md:w-3/4 lg:w-2/3  px-2 py-8 grid md:grid-cols-2 gap-8",
            children: [C, E]
        }), k[53] = C, k[54] = E, k[55] = R) : R = k[55], k[56] === Symbol.for("react.memo_cache_sentinel") ? (A = (0, t.jsxs)("p", {
            className: "text-center text-gray-500 text-lg",
            children: ["Need help or have questions?", (0, t.jsx)("br", {}), " Contact our support team or visit the nearest LAPO branch for assistance."]
        }), k[56] = A) : A = k[56], k[57] !== y || k[58] !== x || k[59] !== R ? (M = (0, t.jsxs)("div", {
            className: "w-full min-h-screen bg-white flex flex-col items-center py-10 px-4 lg:px-10",
            children: [p, g, h, b, y, x, R, A]
        }), k[57] = y, k[58] = x, k[59] = R, k[60] = M) : M = k[60], M
    }
    e.s(["default", 0, function() {
        let e, a, s, o, c = (0, r.c)(6),
            u = (0, n.useRouter)();
        return c[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsxs)("div", {
            className: "w-full min-h-screen bg-white flex flex-col items-center justify-center",
            children: [(0, t.jsx)("div", {
                className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
            }), (0, t.jsx)("p", {
                className: "mt-4 text-gray-600",
                children: "Loading account details..."
            })]
        }), c[0] = e) : e = c[0], c[1] !== u ? (a = (0, t.jsx)("div", {
            className: "w-full bg-white",
            children: (0, t.jsx)("div", {
                className: "container mx-auto px-4 lg:px-10 pt-6",
                children: (0, t.jsx)("button", {
                    onClick: () => u.push("/"),
                    className: "flex items-center gap-2 text-gray-700 hover:text-black border border-gray-300 px-4 py-2 rounded-xl transition cursor-pointer",
                    children: "← Back to Home"
                })
            })
        }), c[1] = u, c[2] = a) : a = c[2], c[3] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsx)(l, {}), c[3] = s) : s = c[3], c[4] !== a ? (o = (0, t.jsxs)(i.Suspense, {
            fallback: e,
            children: [a, s]
        }), c[4] = a, c[5] = o) : o = c[5], o
    }])
}]);