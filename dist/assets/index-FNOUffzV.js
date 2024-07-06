function h_(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              e,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function nm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var rm = { exports: {} },
  bl = {},
  im = { exports: {} },
  B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zs = Symbol.for("react.element"),
  f_ = Symbol.for("react.portal"),
  d_ = Symbol.for("react.fragment"),
  p_ = Symbol.for("react.strict_mode"),
  m_ = Symbol.for("react.profiler"),
  g_ = Symbol.for("react.provider"),
  y_ = Symbol.for("react.context"),
  v_ = Symbol.for("react.forward_ref"),
  __ = Symbol.for("react.suspense"),
  E_ = Symbol.for("react.memo"),
  w_ = Symbol.for("react.lazy"),
  Uf = Symbol.iterator;
function T_(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Uf && e[Uf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var sm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  om = Object.assign,
  lm = {};
function pi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = lm),
    (this.updater = n || sm);
}
pi.prototype.isReactComponent = {};
pi.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
pi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function am() {}
am.prototype = pi.prototype;
function Yc(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = lm),
    (this.updater = n || sm);
}
var Jc = (Yc.prototype = new am());
Jc.constructor = Yc;
om(Jc, pi.prototype);
Jc.isPureReactComponent = !0;
var jf = Array.isArray,
  um = Object.prototype.hasOwnProperty,
  Zc = { current: null },
  cm = { key: !0, ref: !0, __self: !0, __source: !0 };
function hm(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      um.call(t, r) && !cm.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: zs,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: Zc.current,
  };
}
function I_(e, t) {
  return {
    $$typeof: zs,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function eh(e) {
  return typeof e == "object" && e !== null && e.$$typeof === zs;
}
function S_(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Bf = /\/+/g;
function Ma(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? S_("" + e.key)
    : t.toString(36);
}
function $o(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case zs:
          case f_:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + Ma(o, 0) : r),
      jf(i)
        ? ((n = ""),
          e != null && (n = e.replace(Bf, "$&/") + "/"),
          $o(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (eh(i) &&
            (i = I_(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Bf, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), jf(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var a = r + Ma(s, l);
      o += $o(s, t, n, a, i);
    }
  else if (((a = T_(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(s = e.next()).done; )
      (s = s.value), (a = r + Ma(s, l++)), (o += $o(s, t, n, a, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return o;
}
function so(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    $o(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function A_(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var tt = { current: null },
  Fo = { transition: null },
  C_ = {
    ReactCurrentDispatcher: tt,
    ReactCurrentBatchConfig: Fo,
    ReactCurrentOwner: Zc,
  };
B.Children = {
  map: so,
  forEach: function (e, t, n) {
    so(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      so(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      so(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!eh(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
B.Component = pi;
B.Fragment = d_;
B.Profiler = m_;
B.PureComponent = Yc;
B.StrictMode = p_;
B.Suspense = __;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = C_;
B.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = om({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = Zc.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      um.call(t, a) &&
        !cm.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: zs, type: e.type, key: i, ref: s, props: r, _owner: o };
};
B.createContext = function (e) {
  return (
    (e = {
      $$typeof: y_,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: g_, _context: e }),
    (e.Consumer = e)
  );
};
B.createElement = hm;
B.createFactory = function (e) {
  var t = hm.bind(null, e);
  return (t.type = e), t;
};
B.createRef = function () {
  return { current: null };
};
B.forwardRef = function (e) {
  return { $$typeof: v_, render: e };
};
B.isValidElement = eh;
B.lazy = function (e) {
  return { $$typeof: w_, _payload: { _status: -1, _result: e }, _init: A_ };
};
B.memo = function (e, t) {
  return { $$typeof: E_, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function (e) {
  var t = Fo.transition;
  Fo.transition = {};
  try {
    e();
  } finally {
    Fo.transition = t;
  }
};
B.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
B.useCallback = function (e, t) {
  return tt.current.useCallback(e, t);
};
B.useContext = function (e) {
  return tt.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
  return tt.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
  return tt.current.useEffect(e, t);
};
B.useId = function () {
  return tt.current.useId();
};
B.useImperativeHandle = function (e, t, n) {
  return tt.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
  return tt.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
  return tt.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
  return tt.current.useMemo(e, t);
};
B.useReducer = function (e, t, n) {
  return tt.current.useReducer(e, t, n);
};
B.useRef = function (e) {
  return tt.current.useRef(e);
};
B.useState = function (e) {
  return tt.current.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
  return tt.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
  return tt.current.useTransition();
};
B.version = "18.2.0";
im.exports = B;
var C = im.exports;
const Q = nm(C),
  R_ = h_({ __proto__: null, default: Q }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var P_ = C,
  k_ = Symbol.for("react.element"),
  x_ = Symbol.for("react.fragment"),
  N_ = Object.prototype.hasOwnProperty,
  D_ = P_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  O_ = { key: !0, ref: !0, __self: !0, __source: !0 };
function fm(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) N_.call(t, r) && !O_.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: k_,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: D_.current,
  };
}
bl.Fragment = x_;
bl.jsx = fm;
bl.jsxs = fm;
rm.exports = bl;
var E = rm.exports,
  Pu = {},
  dm = { exports: {} },
  _t = {},
  pm = { exports: {} },
  mm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, $) {
    var F = N.length;
    N.push($);
    e: for (; 0 < F; ) {
      var K = (F - 1) >>> 1,
        q = N[K];
      if (0 < i(q, $)) (N[K] = $), (N[F] = q), (F = K);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var $ = N[0],
      F = N.pop();
    if (F !== $) {
      N[0] = F;
      e: for (var K = 0, q = N.length, xe = q >>> 1; K < xe; ) {
        var ve = 2 * (K + 1) - 1,
          it = N[ve],
          Ge = ve + 1,
          jt = N[Ge];
        if (0 > i(it, F))
          Ge < q && 0 > i(jt, it)
            ? ((N[K] = jt), (N[Ge] = F), (K = Ge))
            : ((N[K] = it), (N[ve] = F), (K = ve));
        else if (Ge < q && 0 > i(jt, F)) (N[K] = jt), (N[Ge] = F), (K = Ge);
        else break e;
      }
    }
    return $;
  }
  function i(N, $) {
    var F = N.sortIndex - $.sortIndex;
    return F !== 0 ? F : N.id - $.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    h = null,
    d = 3,
    g = !1,
    y = !1,
    v = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(N) {
    for (var $ = n(u); $ !== null; ) {
      if ($.callback === null) r(u);
      else if ($.startTime <= N)
        r(u), ($.sortIndex = $.expirationTime), t(a, $);
      else break;
      $ = n(u);
    }
  }
  function _(N) {
    if (((v = !1), m(N), !y))
      if (n(a) !== null) (y = !0), mn(R);
      else {
        var $ = n(u);
        $ !== null && ht(_, $.startTime - N);
      }
  }
  function R(N, $) {
    (y = !1), v && ((v = !1), p(I), (I = -1)), (g = !0);
    var F = d;
    try {
      for (
        m($), h = n(a);
        h !== null && (!(h.expirationTime > $) || (N && !fe()));

      ) {
        var K = h.callback;
        if (typeof K == "function") {
          (h.callback = null), (d = h.priorityLevel);
          var q = K(h.expirationTime <= $);
          ($ = e.unstable_now()),
            typeof q == "function" ? (h.callback = q) : h === n(a) && r(a),
            m($);
        } else r(a);
        h = n(a);
      }
      if (h !== null) var xe = !0;
      else {
        var ve = n(u);
        ve !== null && ht(_, ve.startTime - $), (xe = !1);
      }
      return xe;
    } finally {
      (h = null), (d = F), (g = !1);
    }
  }
  var k = !1,
    P = null,
    I = -1,
    O = 5,
    L = -1;
  function fe() {
    return !(e.unstable_now() - L < O);
  }
  function rt() {
    if (P !== null) {
      var N = e.unstable_now();
      L = N;
      var $ = !0;
      try {
        $ = P(!0, N);
      } finally {
        $ ? wt() : ((k = !1), (P = null));
      }
    } else k = !1;
  }
  var wt;
  if (typeof f == "function")
    wt = function () {
      f(rt);
    };
  else if (typeof MessageChannel < "u") {
    var kt = new MessageChannel(),
      pn = kt.port2;
    (kt.port1.onmessage = rt),
      (wt = function () {
        pn.postMessage(null);
      });
  } else
    wt = function () {
      w(rt, 0);
    };
  function mn(N) {
    (P = N), k || ((k = !0), wt());
  }
  function ht(N, $) {
    I = w(function () {
      N(e.unstable_now());
    }, $);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), mn(R));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (O = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (N) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = d;
      }
      var F = d;
      d = $;
      try {
        return N();
      } finally {
        d = F;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, $) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var F = d;
      d = N;
      try {
        return $();
      } finally {
        d = F;
      }
    }),
    (e.unstable_scheduleCallback = function (N, $, F) {
      var K = e.unstable_now();
      switch (
        (typeof F == "object" && F !== null
          ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? K + F : K))
          : (F = K),
        N)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = F + q),
        (N = {
          id: c++,
          callback: $,
          priorityLevel: N,
          startTime: F,
          expirationTime: q,
          sortIndex: -1,
        }),
        F > K
          ? ((N.sortIndex = F),
            t(u, N),
            n(a) === null &&
              N === n(u) &&
              (v ? (p(I), (I = -1)) : (v = !0), ht(_, F - K)))
          : ((N.sortIndex = q), t(a, N), y || g || ((y = !0), mn(R))),
        N
      );
    }),
    (e.unstable_shouldYield = fe),
    (e.unstable_wrapCallback = function (N) {
      var $ = d;
      return function () {
        var F = d;
        d = $;
        try {
          return N.apply(this, arguments);
        } finally {
          d = F;
        }
      };
    });
})(mm);
pm.exports = mm;
var V_ = pm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gm = C,
  yt = V_;
function A(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ym = new Set(),
  ss = {};
function Sr(e, t) {
  ei(e, t), ei(e + "Capture", t);
}
function ei(e, t) {
  for (ss[e] = t, e = 0; e < t.length; e++) ym.add(t[e]);
}
var ln = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ku = Object.prototype.hasOwnProperty,
  L_ =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  zf = {},
  bf = {};
function M_(e) {
  return ku.call(bf, e)
    ? !0
    : ku.call(zf, e)
      ? !1
      : L_.test(e)
        ? (bf[e] = !0)
        : ((zf[e] = !0), !1);
}
function $_(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function F_(e, t, n, r) {
  if (t === null || typeof t > "u" || $_(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function nt(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var Fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Fe[e] = new nt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Fe[t] = new nt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Fe[e] = new nt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Fe[e] = new nt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Fe[e] = new nt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Fe[e] = new nt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Fe[e] = new nt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Fe[e] = new nt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Fe[e] = new nt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var th = /[\-:]([a-z])/g;
function nh(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(th, nh);
    Fe[t] = new nt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(th, nh);
    Fe[t] = new nt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(th, nh);
  Fe[t] = new nt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Fe[e] = new nt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Fe.xlinkHref = new nt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Fe[e] = new nt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function rh(e, t, n, r) {
  var i = Fe.hasOwnProperty(t) ? Fe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (F_(t, n, i, r) && (n = null),
    r || i === null
      ? M_(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var dn = gm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  oo = Symbol.for("react.element"),
  Or = Symbol.for("react.portal"),
  Vr = Symbol.for("react.fragment"),
  ih = Symbol.for("react.strict_mode"),
  xu = Symbol.for("react.profiler"),
  vm = Symbol.for("react.provider"),
  _m = Symbol.for("react.context"),
  sh = Symbol.for("react.forward_ref"),
  Nu = Symbol.for("react.suspense"),
  Du = Symbol.for("react.suspense_list"),
  oh = Symbol.for("react.memo"),
  yn = Symbol.for("react.lazy"),
  Em = Symbol.for("react.offscreen"),
  Hf = Symbol.iterator;
function Ti(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Hf && e[Hf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ae = Object.assign,
  $a;
function Li(e) {
  if ($a === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      $a = (t && t[1]) || "";
    }
  return (
    `
` +
    $a +
    e
  );
}
var Fa = !1;
function Ua(e, t) {
  if (!e || Fa) return "";
  Fa = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          l = s.length - 1;
        1 <= o && 0 <= l && i[o] !== s[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== s[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== s[l])) {
                var a =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (Fa = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Li(e) : "";
}
function U_(e) {
  switch (e.tag) {
    case 5:
      return Li(e.type);
    case 16:
      return Li("Lazy");
    case 13:
      return Li("Suspense");
    case 19:
      return Li("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ua(e.type, !1)), e;
    case 11:
      return (e = Ua(e.type.render, !1)), e;
    case 1:
      return (e = Ua(e.type, !0)), e;
    default:
      return "";
  }
}
function Ou(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Vr:
      return "Fragment";
    case Or:
      return "Portal";
    case xu:
      return "Profiler";
    case ih:
      return "StrictMode";
    case Nu:
      return "Suspense";
    case Du:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case _m:
        return (e.displayName || "Context") + ".Consumer";
      case vm:
        return (e._context.displayName || "Context") + ".Provider";
      case sh:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case oh:
        return (
          (t = e.displayName || null), t !== null ? t : Ou(e.type) || "Memo"
        );
      case yn:
        (t = e._payload), (e = e._init);
        try {
          return Ou(e(t));
        } catch {}
    }
  return null;
}
function j_(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ou(t);
    case 8:
      return t === ih ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Un(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function wm(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function B_(e) {
  var t = wm(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function lo(e) {
  e._valueTracker || (e._valueTracker = B_(e));
}
function Tm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = wm(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Jo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Vu(e, t) {
  var n = t.checked;
  return ae({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Wf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Un(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Im(e, t) {
  (t = t.checked), t != null && rh(e, "checked", t, !1);
}
function Lu(e, t) {
  Im(e, t);
  var n = Un(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Mu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Mu(e, t.type, Un(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Kf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Mu(e, t, n) {
  (t !== "number" || Jo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Mi = Array.isArray;
function Kr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Un(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function $u(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
  return ae({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function qf(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(A(92));
      if (Mi(n)) {
        if (1 < n.length) throw Error(A(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Un(n) };
}
function Sm(e, t) {
  var n = Un(t.value),
    r = Un(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Qf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Am(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Fu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Am(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var ao,
  Cm = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ao = ao || document.createElement("div"),
          ao.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ao.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function os(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var zi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  z_ = ["Webkit", "ms", "Moz", "O"];
Object.keys(zi).forEach(function (e) {
  z_.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (zi[t] = zi[e]);
  });
});
function Rm(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (zi.hasOwnProperty(e) && zi[e])
      ? ("" + t).trim()
      : t + "px";
}
function Pm(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Rm(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var b_ = ae(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Uu(e, t) {
  if (t) {
    if (b_[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(A(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(A(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(A(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(A(62));
  }
}
function ju(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Bu = null;
function lh(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var zu = null,
  qr = null,
  Qr = null;
function Gf(e) {
  if ((e = Ws(e))) {
    if (typeof zu != "function") throw Error(A(280));
    var t = e.stateNode;
    t && ((t = Ql(t)), zu(e.stateNode, e.type, t));
  }
}
function km(e) {
  qr ? (Qr ? Qr.push(e) : (Qr = [e])) : (qr = e);
}
function xm() {
  if (qr) {
    var e = qr,
      t = Qr;
    if (((Qr = qr = null), Gf(e), t)) for (e = 0; e < t.length; e++) Gf(t[e]);
  }
}
function Nm(e, t) {
  return e(t);
}
function Dm() {}
var ja = !1;
function Om(e, t, n) {
  if (ja) return e(t, n);
  ja = !0;
  try {
    return Nm(e, t, n);
  } finally {
    (ja = !1), (qr !== null || Qr !== null) && (Dm(), xm());
  }
}
function ls(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ql(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(A(231, t, typeof n));
  return n;
}
var bu = !1;
if (ln)
  try {
    var Ii = {};
    Object.defineProperty(Ii, "passive", {
      get: function () {
        bu = !0;
      },
    }),
      window.addEventListener("test", Ii, Ii),
      window.removeEventListener("test", Ii, Ii);
  } catch {
    bu = !1;
  }
function H_(e, t, n, r, i, s, o, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var bi = !1,
  Zo = null,
  el = !1,
  Hu = null,
  W_ = {
    onError: function (e) {
      (bi = !0), (Zo = e);
    },
  };
function K_(e, t, n, r, i, s, o, l, a) {
  (bi = !1), (Zo = null), H_.apply(W_, arguments);
}
function q_(e, t, n, r, i, s, o, l, a) {
  if ((K_.apply(this, arguments), bi)) {
    if (bi) {
      var u = Zo;
      (bi = !1), (Zo = null);
    } else throw Error(A(198));
    el || ((el = !0), (Hu = u));
  }
}
function Ar(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Vm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Xf(e) {
  if (Ar(e) !== e) throw Error(A(188));
}
function Q_(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ar(e)), t === null)) throw Error(A(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return Xf(i), e;
        if (s === r) return Xf(i), t;
        s = s.sibling;
      }
      throw Error(A(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (l === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = s.child; l; ) {
          if (l === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (l === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(A(189));
      }
    }
    if (n.alternate !== r) throw Error(A(190));
  }
  if (n.tag !== 3) throw Error(A(188));
  return n.stateNode.current === n ? e : t;
}
function Lm(e) {
  return (e = Q_(e)), e !== null ? Mm(e) : null;
}
function Mm(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Mm(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var $m = yt.unstable_scheduleCallback,
  Yf = yt.unstable_cancelCallback,
  G_ = yt.unstable_shouldYield,
  X_ = yt.unstable_requestPaint,
  de = yt.unstable_now,
  Y_ = yt.unstable_getCurrentPriorityLevel,
  ah = yt.unstable_ImmediatePriority,
  Fm = yt.unstable_UserBlockingPriority,
  tl = yt.unstable_NormalPriority,
  J_ = yt.unstable_LowPriority,
  Um = yt.unstable_IdlePriority,
  Hl = null,
  Qt = null;
function Z_(e) {
  if (Qt && typeof Qt.onCommitFiberRoot == "function")
    try {
      Qt.onCommitFiberRoot(Hl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var $t = Math.clz32 ? Math.clz32 : n1,
  e1 = Math.log,
  t1 = Math.LN2;
function n1(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((e1(e) / t1) | 0)) | 0;
}
var uo = 64,
  co = 4194304;
function $i(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function nl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? (r = $i(l)) : ((s &= o), s !== 0 && (r = $i(s)));
  } else (o = n & ~i), o !== 0 ? (r = $i(o)) : s !== 0 && (r = $i(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - $t(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function r1(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function i1(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - $t(s),
      l = 1 << o,
      a = i[o];
    a === -1
      ? (!(l & n) || l & r) && (i[o] = r1(l, t))
      : a <= t && (e.expiredLanes |= l),
      (s &= ~l);
  }
}
function Wu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function jm() {
  var e = uo;
  return (uo <<= 1), !(uo & 4194240) && (uo = 64), e;
}
function Ba(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function bs(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - $t(t)),
    (e[t] = n);
}
function s1(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - $t(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function uh(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - $t(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var G = 0;
function Bm(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var zm,
  ch,
  bm,
  Hm,
  Wm,
  Ku = !1,
  ho = [],
  Cn = null,
  Rn = null,
  Pn = null,
  as = new Map(),
  us = new Map(),
  _n = [],
  o1 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Jf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Cn = null;
      break;
    case "dragenter":
    case "dragleave":
      Rn = null;
      break;
    case "mouseover":
    case "mouseout":
      Pn = null;
      break;
    case "pointerover":
    case "pointerout":
      as.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      us.delete(t.pointerId);
  }
}
function Si(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = Ws(t)), t !== null && ch(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function l1(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Cn = Si(Cn, e, t, n, r, i)), !0;
    case "dragenter":
      return (Rn = Si(Rn, e, t, n, r, i)), !0;
    case "mouseover":
      return (Pn = Si(Pn, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return as.set(s, Si(as.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), us.set(s, Si(us.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Km(e) {
  var t = tr(e.target);
  if (t !== null) {
    var n = Ar(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Vm(n)), t !== null)) {
          (e.blockedOn = t),
            Wm(e.priority, function () {
              bm(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Uo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = qu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Bu = r), n.target.dispatchEvent(r), (Bu = null);
    } else return (t = Ws(n)), t !== null && ch(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Zf(e, t, n) {
  Uo(e) && n.delete(t);
}
function a1() {
  (Ku = !1),
    Cn !== null && Uo(Cn) && (Cn = null),
    Rn !== null && Uo(Rn) && (Rn = null),
    Pn !== null && Uo(Pn) && (Pn = null),
    as.forEach(Zf),
    us.forEach(Zf);
}
function Ai(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ku ||
      ((Ku = !0),
      yt.unstable_scheduleCallback(yt.unstable_NormalPriority, a1)));
}
function cs(e) {
  function t(i) {
    return Ai(i, e);
  }
  if (0 < ho.length) {
    Ai(ho[0], e);
    for (var n = 1; n < ho.length; n++) {
      var r = ho[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Cn !== null && Ai(Cn, e),
      Rn !== null && Ai(Rn, e),
      Pn !== null && Ai(Pn, e),
      as.forEach(t),
      us.forEach(t),
      n = 0;
    n < _n.length;
    n++
  )
    (r = _n[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < _n.length && ((n = _n[0]), n.blockedOn === null); )
    Km(n), n.blockedOn === null && _n.shift();
}
var Gr = dn.ReactCurrentBatchConfig,
  rl = !0;
function u1(e, t, n, r) {
  var i = G,
    s = Gr.transition;
  Gr.transition = null;
  try {
    (G = 1), hh(e, t, n, r);
  } finally {
    (G = i), (Gr.transition = s);
  }
}
function c1(e, t, n, r) {
  var i = G,
    s = Gr.transition;
  Gr.transition = null;
  try {
    (G = 4), hh(e, t, n, r);
  } finally {
    (G = i), (Gr.transition = s);
  }
}
function hh(e, t, n, r) {
  if (rl) {
    var i = qu(e, t, n, r);
    if (i === null) Ya(e, t, r, il, n), Jf(e, r);
    else if (l1(i, e, t, n, r)) r.stopPropagation();
    else if ((Jf(e, r), t & 4 && -1 < o1.indexOf(e))) {
      for (; i !== null; ) {
        var s = Ws(i);
        if (
          (s !== null && zm(s),
          (s = qu(e, t, n, r)),
          s === null && Ya(e, t, r, il, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else Ya(e, t, r, null, n);
  }
}
var il = null;
function qu(e, t, n, r) {
  if (((il = null), (e = lh(r)), (e = tr(e)), e !== null))
    if (((t = Ar(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Vm(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (il = e), null;
}
function qm(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Y_()) {
        case ah:
          return 1;
        case Fm:
          return 4;
        case tl:
        case J_:
          return 16;
        case Um:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Tn = null,
  fh = null,
  jo = null;
function Qm() {
  if (jo) return jo;
  var e,
    t = fh,
    n = t.length,
    r,
    i = "value" in Tn ? Tn.value : Tn.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (jo = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Bo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function fo() {
  return !0;
}
function ed() {
  return !1;
}
function Et(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? fo
        : ed),
      (this.isPropagationStopped = ed),
      this
    );
  }
  return (
    ae(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = fo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = fo));
      },
      persist: function () {},
      isPersistent: fo,
    }),
    t
  );
}
var mi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  dh = Et(mi),
  Hs = ae({}, mi, { view: 0, detail: 0 }),
  h1 = Et(Hs),
  za,
  ba,
  Ci,
  Wl = ae({}, Hs, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ph,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ci &&
            (Ci && e.type === "mousemove"
              ? ((za = e.screenX - Ci.screenX), (ba = e.screenY - Ci.screenY))
              : (ba = za = 0),
            (Ci = e)),
          za);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ba;
    },
  }),
  td = Et(Wl),
  f1 = ae({}, Wl, { dataTransfer: 0 }),
  d1 = Et(f1),
  p1 = ae({}, Hs, { relatedTarget: 0 }),
  Ha = Et(p1),
  m1 = ae({}, mi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  g1 = Et(m1),
  y1 = ae({}, mi, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  v1 = Et(y1),
  _1 = ae({}, mi, { data: 0 }),
  nd = Et(_1),
  E1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  w1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  T1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function I1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = T1[e]) ? !!t[e] : !1;
}
function ph() {
  return I1;
}
var S1 = ae({}, Hs, {
    key: function (e) {
      if (e.key) {
        var t = E1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Bo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? w1[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ph,
    charCode: function (e) {
      return e.type === "keypress" ? Bo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Bo(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  A1 = Et(S1),
  C1 = ae({}, Wl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  rd = Et(C1),
  R1 = ae({}, Hs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ph,
  }),
  P1 = Et(R1),
  k1 = ae({}, mi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  x1 = Et(k1),
  N1 = ae({}, Wl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  D1 = Et(N1),
  O1 = [9, 13, 27, 32],
  mh = ln && "CompositionEvent" in window,
  Hi = null;
ln && "documentMode" in document && (Hi = document.documentMode);
var V1 = ln && "TextEvent" in window && !Hi,
  Gm = ln && (!mh || (Hi && 8 < Hi && 11 >= Hi)),
  id = " ",
  sd = !1;
function Xm(e, t) {
  switch (e) {
    case "keyup":
      return O1.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ym(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Lr = !1;
function L1(e, t) {
  switch (e) {
    case "compositionend":
      return Ym(t);
    case "keypress":
      return t.which !== 32 ? null : ((sd = !0), id);
    case "textInput":
      return (e = t.data), e === id && sd ? null : e;
    default:
      return null;
  }
}
function M1(e, t) {
  if (Lr)
    return e === "compositionend" || (!mh && Xm(e, t))
      ? ((e = Qm()), (jo = fh = Tn = null), (Lr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Gm && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var $1 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function od(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!$1[e.type] : t === "textarea";
}
function Jm(e, t, n, r) {
  km(r),
    (t = sl(t, "onChange")),
    0 < t.length &&
      ((n = new dh("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Wi = null,
  hs = null;
function F1(e) {
  ug(e, 0);
}
function Kl(e) {
  var t = Fr(e);
  if (Tm(t)) return e;
}
function U1(e, t) {
  if (e === "change") return t;
}
var Zm = !1;
if (ln) {
  var Wa;
  if (ln) {
    var Ka = "oninput" in document;
    if (!Ka) {
      var ld = document.createElement("div");
      ld.setAttribute("oninput", "return;"),
        (Ka = typeof ld.oninput == "function");
    }
    Wa = Ka;
  } else Wa = !1;
  Zm = Wa && (!document.documentMode || 9 < document.documentMode);
}
function ad() {
  Wi && (Wi.detachEvent("onpropertychange", eg), (hs = Wi = null));
}
function eg(e) {
  if (e.propertyName === "value" && Kl(hs)) {
    var t = [];
    Jm(t, hs, e, lh(e)), Om(F1, t);
  }
}
function j1(e, t, n) {
  e === "focusin"
    ? (ad(), (Wi = t), (hs = n), Wi.attachEvent("onpropertychange", eg))
    : e === "focusout" && ad();
}
function B1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Kl(hs);
}
function z1(e, t) {
  if (e === "click") return Kl(t);
}
function b1(e, t) {
  if (e === "input" || e === "change") return Kl(t);
}
function H1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ut = typeof Object.is == "function" ? Object.is : H1;
function fs(e, t) {
  if (Ut(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!ku.call(t, i) || !Ut(e[i], t[i])) return !1;
  }
  return !0;
}
function ud(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function cd(e, t) {
  var n = ud(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ud(n);
  }
}
function tg(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? tg(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function ng() {
  for (var e = window, t = Jo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Jo(e.document);
  }
  return t;
}
function gh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function W1(e) {
  var t = ng(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    tg(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && gh(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = cd(n, s));
        var o = cd(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var K1 = ln && "documentMode" in document && 11 >= document.documentMode,
  Mr = null,
  Qu = null,
  Ki = null,
  Gu = !1;
function hd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Gu ||
    Mr == null ||
    Mr !== Jo(r) ||
    ((r = Mr),
    "selectionStart" in r && gh(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ki && fs(Ki, r)) ||
      ((Ki = r),
      (r = sl(Qu, "onSelect")),
      0 < r.length &&
        ((t = new dh("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Mr))));
}
function po(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var $r = {
    animationend: po("Animation", "AnimationEnd"),
    animationiteration: po("Animation", "AnimationIteration"),
    animationstart: po("Animation", "AnimationStart"),
    transitionend: po("Transition", "TransitionEnd"),
  },
  qa = {},
  rg = {};
ln &&
  ((rg = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete $r.animationend.animation,
    delete $r.animationiteration.animation,
    delete $r.animationstart.animation),
  "TransitionEvent" in window || delete $r.transitionend.transition);
function ql(e) {
  if (qa[e]) return qa[e];
  if (!$r[e]) return e;
  var t = $r[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in rg) return (qa[e] = t[n]);
  return e;
}
var ig = ql("animationend"),
  sg = ql("animationiteration"),
  og = ql("animationstart"),
  lg = ql("transitionend"),
  ag = new Map(),
  fd =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Kn(e, t) {
  ag.set(e, t), Sr(t, [e]);
}
for (var Qa = 0; Qa < fd.length; Qa++) {
  var Ga = fd[Qa],
    q1 = Ga.toLowerCase(),
    Q1 = Ga[0].toUpperCase() + Ga.slice(1);
  Kn(q1, "on" + Q1);
}
Kn(ig, "onAnimationEnd");
Kn(sg, "onAnimationIteration");
Kn(og, "onAnimationStart");
Kn("dblclick", "onDoubleClick");
Kn("focusin", "onFocus");
Kn("focusout", "onBlur");
Kn(lg, "onTransitionEnd");
ei("onMouseEnter", ["mouseout", "mouseover"]);
ei("onMouseLeave", ["mouseout", "mouseover"]);
ei("onPointerEnter", ["pointerout", "pointerover"]);
ei("onPointerLeave", ["pointerout", "pointerover"]);
Sr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Sr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Sr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Sr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Sr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Sr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Fi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  G1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fi));
function dd(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), q_(r, t, void 0, e), (e.currentTarget = null);
}
function ug(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== s && i.isPropagationStopped())) break e;
          dd(i, l, u), (s = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== s && i.isPropagationStopped())
          )
            break e;
          dd(i, l, u), (s = a);
        }
    }
  }
  if (el) throw ((e = Hu), (el = !1), (Hu = null), e);
}
function ee(e, t) {
  var n = t[ec];
  n === void 0 && (n = t[ec] = new Set());
  var r = e + "__bubble";
  n.has(r) || (cg(t, e, 2, !1), n.add(r));
}
function Xa(e, t, n) {
  var r = 0;
  t && (r |= 4), cg(n, e, r, t);
}
var mo = "_reactListening" + Math.random().toString(36).slice(2);
function ds(e) {
  if (!e[mo]) {
    (e[mo] = !0),
      ym.forEach(function (n) {
        n !== "selectionchange" && (G1.has(n) || Xa(n, !1, e), Xa(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[mo] || ((t[mo] = !0), Xa("selectionchange", !1, t));
  }
}
function cg(e, t, n, r) {
  switch (qm(t)) {
    case 1:
      var i = u1;
      break;
    case 4:
      i = c1;
      break;
    default:
      i = hh;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !bu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1);
}
function Ya(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = tr(l)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = s = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Om(function () {
    var u = s,
      c = lh(n),
      h = [];
    e: {
      var d = ag.get(e);
      if (d !== void 0) {
        var g = dh,
          y = e;
        switch (e) {
          case "keypress":
            if (Bo(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = A1;
            break;
          case "focusin":
            (y = "focus"), (g = Ha);
            break;
          case "focusout":
            (y = "blur"), (g = Ha);
            break;
          case "beforeblur":
          case "afterblur":
            g = Ha;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = td;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = d1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = P1;
            break;
          case ig:
          case sg:
          case og:
            g = g1;
            break;
          case lg:
            g = x1;
            break;
          case "scroll":
            g = h1;
            break;
          case "wheel":
            g = D1;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = v1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = rd;
        }
        var v = (t & 4) !== 0,
          w = !v && e === "scroll",
          p = v ? (d !== null ? d + "Capture" : null) : d;
        v = [];
        for (var f = u, m; f !== null; ) {
          m = f;
          var _ = m.stateNode;
          if (
            (m.tag === 5 &&
              _ !== null &&
              ((m = _),
              p !== null && ((_ = ls(f, p)), _ != null && v.push(ps(f, _, m)))),
            w)
          )
            break;
          f = f.return;
        }
        0 < v.length &&
          ((d = new g(d, y, null, n, c)), h.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          d &&
            n !== Bu &&
            (y = n.relatedTarget || n.fromElement) &&
            (tr(y) || y[an]))
        )
          break e;
        if (
          (g || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = u),
              (y = y ? tr(y) : null),
              y !== null &&
                ((w = Ar(y)), y !== w || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((v = td),
            (_ = "onMouseLeave"),
            (p = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = rd),
              (_ = "onPointerLeave"),
              (p = "onPointerEnter"),
              (f = "pointer")),
            (w = g == null ? d : Fr(g)),
            (m = y == null ? d : Fr(y)),
            (d = new v(_, f + "leave", g, n, c)),
            (d.target = w),
            (d.relatedTarget = m),
            (_ = null),
            tr(c) === u &&
              ((v = new v(p, f + "enter", y, n, c)),
              (v.target = m),
              (v.relatedTarget = w),
              (_ = v)),
            (w = _),
            g && y)
          )
            t: {
              for (v = g, p = y, f = 0, m = v; m; m = xr(m)) f++;
              for (m = 0, _ = p; _; _ = xr(_)) m++;
              for (; 0 < f - m; ) (v = xr(v)), f--;
              for (; 0 < m - f; ) (p = xr(p)), m--;
              for (; f--; ) {
                if (v === p || (p !== null && v === p.alternate)) break t;
                (v = xr(v)), (p = xr(p));
              }
              v = null;
            }
          else v = null;
          g !== null && pd(h, d, g, v, !1),
            y !== null && w !== null && pd(h, w, y, v, !0);
        }
      }
      e: {
        if (
          ((d = u ? Fr(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === "select" || (g === "input" && d.type === "file"))
        )
          var R = U1;
        else if (od(d))
          if (Zm) R = b1;
          else {
            R = B1;
            var k = j1;
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (R = z1);
        if (R && (R = R(e, u))) {
          Jm(h, R, n, c);
          break e;
        }
        k && k(e, d, u),
          e === "focusout" &&
            (k = d._wrapperState) &&
            k.controlled &&
            d.type === "number" &&
            Mu(d, "number", d.value);
      }
      switch (((k = u ? Fr(u) : window), e)) {
        case "focusin":
          (od(k) || k.contentEditable === "true") &&
            ((Mr = k), (Qu = u), (Ki = null));
          break;
        case "focusout":
          Ki = Qu = Mr = null;
          break;
        case "mousedown":
          Gu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Gu = !1), hd(h, n, c);
          break;
        case "selectionchange":
          if (K1) break;
        case "keydown":
        case "keyup":
          hd(h, n, c);
      }
      var P;
      if (mh)
        e: {
          switch (e) {
            case "compositionstart":
              var I = "onCompositionStart";
              break e;
            case "compositionend":
              I = "onCompositionEnd";
              break e;
            case "compositionupdate":
              I = "onCompositionUpdate";
              break e;
          }
          I = void 0;
        }
      else
        Lr
          ? Xm(e, n) && (I = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (I = "onCompositionStart");
      I &&
        (Gm &&
          n.locale !== "ko" &&
          (Lr || I !== "onCompositionStart"
            ? I === "onCompositionEnd" && Lr && (P = Qm())
            : ((Tn = c),
              (fh = "value" in Tn ? Tn.value : Tn.textContent),
              (Lr = !0))),
        (k = sl(u, I)),
        0 < k.length &&
          ((I = new nd(I, e, null, n, c)),
          h.push({ event: I, listeners: k }),
          P ? (I.data = P) : ((P = Ym(n)), P !== null && (I.data = P)))),
        (P = V1 ? L1(e, n) : M1(e, n)) &&
          ((u = sl(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new nd("onBeforeInput", "beforeinput", null, n, c)),
            h.push({ event: c, listeners: u }),
            (c.data = P)));
    }
    ug(h, t);
  });
}
function ps(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function sl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = ls(e, n)),
      s != null && r.unshift(ps(e, s, i)),
      (s = ls(e, t)),
      s != null && r.push(ps(e, s, i))),
      (e = e.return);
  }
  return r;
}
function xr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function pd(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = ls(n, s)), a != null && o.unshift(ps(n, a, l)))
        : i || ((a = ls(n, s)), a != null && o.push(ps(n, a, l)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var X1 = /\r\n?/g,
  Y1 = /\u0000|\uFFFD/g;
function md(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      X1,
      `
`,
    )
    .replace(Y1, "");
}
function go(e, t, n) {
  if (((t = md(t)), md(e) !== t && n)) throw Error(A(425));
}
function ol() {}
var Xu = null,
  Yu = null;
function Ju(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Zu = typeof setTimeout == "function" ? setTimeout : void 0,
  J1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  gd = typeof Promise == "function" ? Promise : void 0,
  Z1 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof gd < "u"
        ? function (e) {
            return gd.resolve(null).then(e).catch(eE);
          }
        : Zu;
function eE(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ja(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), cs(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  cs(t);
}
function kn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function yd(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var gi = Math.random().toString(36).slice(2),
  bt = "__reactFiber$" + gi,
  ms = "__reactProps$" + gi,
  an = "__reactContainer$" + gi,
  ec = "__reactEvents$" + gi,
  tE = "__reactListeners$" + gi,
  nE = "__reactHandles$" + gi;
function tr(e) {
  var t = e[bt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[an] || n[bt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = yd(e); e !== null; ) {
          if ((n = e[bt])) return n;
          e = yd(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ws(e) {
  return (
    (e = e[bt] || e[an]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Fr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(A(33));
}
function Ql(e) {
  return e[ms] || null;
}
var tc = [],
  Ur = -1;
function qn(e) {
  return { current: e };
}
function ne(e) {
  0 > Ur || ((e.current = tc[Ur]), (tc[Ur] = null), Ur--);
}
function Z(e, t) {
  Ur++, (tc[Ur] = e.current), (e.current = t);
}
var jn = {},
  Qe = qn(jn),
  lt = qn(!1),
  mr = jn;
function ti(e, t) {
  var n = e.type.contextTypes;
  if (!n) return jn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function at(e) {
  return (e = e.childContextTypes), e != null;
}
function ll() {
  ne(lt), ne(Qe);
}
function vd(e, t, n) {
  if (Qe.current !== jn) throw Error(A(168));
  Z(Qe, t), Z(lt, n);
}
function hg(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(A(108, j_(e) || "Unknown", i));
  return ae({}, n, r);
}
function al(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || jn),
    (mr = Qe.current),
    Z(Qe, e),
    Z(lt, lt.current),
    !0
  );
}
function _d(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(A(169));
  n
    ? ((e = hg(e, t, mr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ne(lt),
      ne(Qe),
      Z(Qe, e))
    : ne(lt),
    Z(lt, n);
}
var Zt = null,
  Gl = !1,
  Za = !1;
function fg(e) {
  Zt === null ? (Zt = [e]) : Zt.push(e);
}
function rE(e) {
  (Gl = !0), fg(e);
}
function Qn() {
  if (!Za && Zt !== null) {
    Za = !0;
    var e = 0,
      t = G;
    try {
      var n = Zt;
      for (G = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Zt = null), (Gl = !1);
    } catch (i) {
      throw (Zt !== null && (Zt = Zt.slice(e + 1)), $m(ah, Qn), i);
    } finally {
      (G = t), (Za = !1);
    }
  }
  return null;
}
var jr = [],
  Br = 0,
  ul = null,
  cl = 0,
  Tt = [],
  It = 0,
  gr = null,
  en = 1,
  tn = "";
function Yn(e, t) {
  (jr[Br++] = cl), (jr[Br++] = ul), (ul = e), (cl = t);
}
function dg(e, t, n) {
  (Tt[It++] = en), (Tt[It++] = tn), (Tt[It++] = gr), (gr = e);
  var r = en;
  e = tn;
  var i = 32 - $t(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - $t(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (en = (1 << (32 - $t(t) + i)) | (n << i) | r),
      (tn = s + e);
  } else (en = (1 << s) | (n << i) | r), (tn = e);
}
function yh(e) {
  e.return !== null && (Yn(e, 1), dg(e, 1, 0));
}
function vh(e) {
  for (; e === ul; )
    (ul = jr[--Br]), (jr[Br] = null), (cl = jr[--Br]), (jr[Br] = null);
  for (; e === gr; )
    (gr = Tt[--It]),
      (Tt[It] = null),
      (tn = Tt[--It]),
      (Tt[It] = null),
      (en = Tt[--It]),
      (Tt[It] = null);
}
var gt = null,
  dt = null,
  ie = !1,
  Ot = null;
function pg(e, t) {
  var n = At(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ed(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (gt = e), (dt = kn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (gt = e), (dt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = gr !== null ? { id: en, overflow: tn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = At(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (gt = e),
            (dt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function nc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function rc(e) {
  if (ie) {
    var t = dt;
    if (t) {
      var n = t;
      if (!Ed(e, t)) {
        if (nc(e)) throw Error(A(418));
        t = kn(n.nextSibling);
        var r = gt;
        t && Ed(e, t)
          ? pg(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ie = !1), (gt = e));
      }
    } else {
      if (nc(e)) throw Error(A(418));
      (e.flags = (e.flags & -4097) | 2), (ie = !1), (gt = e);
    }
  }
}
function wd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  gt = e;
}
function yo(e) {
  if (e !== gt) return !1;
  if (!ie) return wd(e), (ie = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ju(e.type, e.memoizedProps))),
    t && (t = dt))
  ) {
    if (nc(e)) throw (mg(), Error(A(418)));
    for (; t; ) pg(e, t), (t = kn(t.nextSibling));
  }
  if ((wd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(A(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              dt = kn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      dt = null;
    }
  } else dt = gt ? kn(e.stateNode.nextSibling) : null;
  return !0;
}
function mg() {
  for (var e = dt; e; ) e = kn(e.nextSibling);
}
function ni() {
  (dt = gt = null), (ie = !1);
}
function _h(e) {
  Ot === null ? (Ot = [e]) : Ot.push(e);
}
var iE = dn.ReactCurrentBatchConfig;
function Nt(e, t) {
  if (e && e.defaultProps) {
    (t = ae({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var hl = qn(null),
  fl = null,
  zr = null,
  Eh = null;
function wh() {
  Eh = zr = fl = null;
}
function Th(e) {
  var t = hl.current;
  ne(hl), (e._currentValue = t);
}
function ic(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Xr(e, t) {
  (fl = e),
    (Eh = zr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ot = !0), (e.firstContext = null));
}
function Rt(e) {
  var t = e._currentValue;
  if (Eh !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), zr === null)) {
      if (fl === null) throw Error(A(308));
      (zr = e), (fl.dependencies = { lanes: 0, firstContext: e });
    } else zr = zr.next = e;
  return t;
}
var nr = null;
function Ih(e) {
  nr === null ? (nr = [e]) : nr.push(e);
}
function gg(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Ih(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    un(e, r)
  );
}
function un(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var vn = !1;
function Sh(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function yg(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function rn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function xn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), W & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      un(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Ih(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    un(e, n)
  );
}
function zo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), uh(e, n);
  }
}
function Td(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function dl(e, t, n, r) {
  var i = e.updateQueue;
  vn = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), o === null ? (s = u) : (o.next = u), (o = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== o &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var h = i.baseState;
    (o = 0), (c = u = a = null), (l = s);
    do {
      var d = l.lane,
        g = l.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            v = l;
          switch (((d = t), (g = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == "function")) {
                h = y.call(g, h, d);
                break e;
              }
              h = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = v.payload),
                (d = typeof y == "function" ? y.call(g, h, d) : y),
                d == null)
              )
                break e;
              h = ae({}, h, d);
              break e;
            case 2:
              vn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [l]) : d.push(l));
      } else
        (g = {
          eventTime: g,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (a = h)) : (c = c.next = g),
          (o |= d);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = h),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (vr |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function Id(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(A(191, i));
        i.call(r);
      }
    }
}
var vg = new gm.Component().refs;
function sc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ae({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Xl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ar(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = et(),
      i = Dn(e),
      s = rn(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = xn(e, s, i)),
      t !== null && (Ft(t, e, i, r), zo(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = et(),
      i = Dn(e),
      s = rn(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = xn(e, s, i)),
      t !== null && (Ft(t, e, i, r), zo(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = et(),
      r = Dn(e),
      i = rn(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = xn(e, i, r)),
      t !== null && (Ft(t, e, r, n), zo(t, e, r));
  },
};
function Sd(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !fs(n, r) || !fs(i, s)
        : !0
  );
}
function _g(e, t, n) {
  var r = !1,
    i = jn,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Rt(s))
      : ((i = at(t) ? mr : Qe.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? ti(e, i) : jn)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Xl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Ad(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Xl.enqueueReplaceState(t, t.state, null);
}
function oc(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = vg), Sh(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = Rt(s))
    : ((s = at(t) ? mr : Qe.current), (i.context = ti(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (sc(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Xl.enqueueReplaceState(i, i.state, null),
      dl(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ri(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(A(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(A(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var l = i.refs;
            l === vg && (l = i.refs = {}),
              o === null ? delete l[s] : (l[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(A(284));
    if (!n._owner) throw Error(A(290, e));
  }
  return e;
}
function vo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      A(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function Cd(e) {
  var t = e._init;
  return t(e._payload);
}
function Eg(e) {
  function t(p, f) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [f]), (p.flags |= 16)) : m.push(f);
    }
  }
  function n(p, f) {
    if (!e) return null;
    for (; f !== null; ) t(p, f), (f = f.sibling);
    return null;
  }
  function r(p, f) {
    for (p = new Map(); f !== null; )
      f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling);
    return p;
  }
  function i(p, f) {
    return (p = On(p, f)), (p.index = 0), (p.sibling = null), p;
  }
  function s(p, f, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < f ? ((p.flags |= 2), f) : m)
            : ((p.flags |= 2), f))
        : ((p.flags |= 1048576), f)
    );
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function l(p, f, m, _) {
    return f === null || f.tag !== 6
      ? ((f = ou(m, p.mode, _)), (f.return = p), f)
      : ((f = i(f, m)), (f.return = p), f);
  }
  function a(p, f, m, _) {
    var R = m.type;
    return R === Vr
      ? c(p, f, m.props.children, _, m.key)
      : f !== null &&
          (f.elementType === R ||
            (typeof R == "object" &&
              R !== null &&
              R.$$typeof === yn &&
              Cd(R) === f.type))
        ? ((_ = i(f, m.props)), (_.ref = Ri(p, f, m)), (_.return = p), _)
        : ((_ = Qo(m.type, m.key, m.props, null, p.mode, _)),
          (_.ref = Ri(p, f, m)),
          (_.return = p),
          _);
  }
  function u(p, f, m, _) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== m.containerInfo ||
      f.stateNode.implementation !== m.implementation
      ? ((f = lu(m, p.mode, _)), (f.return = p), f)
      : ((f = i(f, m.children || [])), (f.return = p), f);
  }
  function c(p, f, m, _, R) {
    return f === null || f.tag !== 7
      ? ((f = ur(m, p.mode, _, R)), (f.return = p), f)
      : ((f = i(f, m)), (f.return = p), f);
  }
  function h(p, f, m) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = ou("" + f, p.mode, m)), (f.return = p), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case oo:
          return (
            (m = Qo(f.type, f.key, f.props, null, p.mode, m)),
            (m.ref = Ri(p, null, f)),
            (m.return = p),
            m
          );
        case Or:
          return (f = lu(f, p.mode, m)), (f.return = p), f;
        case yn:
          var _ = f._init;
          return h(p, _(f._payload), m);
      }
      if (Mi(f) || Ti(f))
        return (f = ur(f, p.mode, m, null)), (f.return = p), f;
      vo(p, f);
    }
    return null;
  }
  function d(p, f, m, _) {
    var R = f !== null ? f.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return R !== null ? null : l(p, f, "" + m, _);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case oo:
          return m.key === R ? a(p, f, m, _) : null;
        case Or:
          return m.key === R ? u(p, f, m, _) : null;
        case yn:
          return (R = m._init), d(p, f, R(m._payload), _);
      }
      if (Mi(m) || Ti(m)) return R !== null ? null : c(p, f, m, _, null);
      vo(p, m);
    }
    return null;
  }
  function g(p, f, m, _, R) {
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
      return (p = p.get(m) || null), l(f, p, "" + _, R);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case oo:
          return (p = p.get(_.key === null ? m : _.key) || null), a(f, p, _, R);
        case Or:
          return (p = p.get(_.key === null ? m : _.key) || null), u(f, p, _, R);
        case yn:
          var k = _._init;
          return g(p, f, m, k(_._payload), R);
      }
      if (Mi(_) || Ti(_)) return (p = p.get(m) || null), c(f, p, _, R, null);
      vo(f, _);
    }
    return null;
  }
  function y(p, f, m, _) {
    for (
      var R = null, k = null, P = f, I = (f = 0), O = null;
      P !== null && I < m.length;
      I++
    ) {
      P.index > I ? ((O = P), (P = null)) : (O = P.sibling);
      var L = d(p, P, m[I], _);
      if (L === null) {
        P === null && (P = O);
        break;
      }
      e && P && L.alternate === null && t(p, P),
        (f = s(L, f, I)),
        k === null ? (R = L) : (k.sibling = L),
        (k = L),
        (P = O);
    }
    if (I === m.length) return n(p, P), ie && Yn(p, I), R;
    if (P === null) {
      for (; I < m.length; I++)
        (P = h(p, m[I], _)),
          P !== null &&
            ((f = s(P, f, I)), k === null ? (R = P) : (k.sibling = P), (k = P));
      return ie && Yn(p, I), R;
    }
    for (P = r(p, P); I < m.length; I++)
      (O = g(P, p, I, m[I], _)),
        O !== null &&
          (e && O.alternate !== null && P.delete(O.key === null ? I : O.key),
          (f = s(O, f, I)),
          k === null ? (R = O) : (k.sibling = O),
          (k = O));
    return (
      e &&
        P.forEach(function (fe) {
          return t(p, fe);
        }),
      ie && Yn(p, I),
      R
    );
  }
  function v(p, f, m, _) {
    var R = Ti(m);
    if (typeof R != "function") throw Error(A(150));
    if (((m = R.call(m)), m == null)) throw Error(A(151));
    for (
      var k = (R = null), P = f, I = (f = 0), O = null, L = m.next();
      P !== null && !L.done;
      I++, L = m.next()
    ) {
      P.index > I ? ((O = P), (P = null)) : (O = P.sibling);
      var fe = d(p, P, L.value, _);
      if (fe === null) {
        P === null && (P = O);
        break;
      }
      e && P && fe.alternate === null && t(p, P),
        (f = s(fe, f, I)),
        k === null ? (R = fe) : (k.sibling = fe),
        (k = fe),
        (P = O);
    }
    if (L.done) return n(p, P), ie && Yn(p, I), R;
    if (P === null) {
      for (; !L.done; I++, L = m.next())
        (L = h(p, L.value, _)),
          L !== null &&
            ((f = s(L, f, I)), k === null ? (R = L) : (k.sibling = L), (k = L));
      return ie && Yn(p, I), R;
    }
    for (P = r(p, P); !L.done; I++, L = m.next())
      (L = g(P, p, I, L.value, _)),
        L !== null &&
          (e && L.alternate !== null && P.delete(L.key === null ? I : L.key),
          (f = s(L, f, I)),
          k === null ? (R = L) : (k.sibling = L),
          (k = L));
    return (
      e &&
        P.forEach(function (rt) {
          return t(p, rt);
        }),
      ie && Yn(p, I),
      R
    );
  }
  function w(p, f, m, _) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Vr &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case oo:
          e: {
            for (var R = m.key, k = f; k !== null; ) {
              if (k.key === R) {
                if (((R = m.type), R === Vr)) {
                  if (k.tag === 7) {
                    n(p, k.sibling),
                      (f = i(k, m.props.children)),
                      (f.return = p),
                      (p = f);
                    break e;
                  }
                } else if (
                  k.elementType === R ||
                  (typeof R == "object" &&
                    R !== null &&
                    R.$$typeof === yn &&
                    Cd(R) === k.type)
                ) {
                  n(p, k.sibling),
                    (f = i(k, m.props)),
                    (f.ref = Ri(p, k, m)),
                    (f.return = p),
                    (p = f);
                  break e;
                }
                n(p, k);
                break;
              } else t(p, k);
              k = k.sibling;
            }
            m.type === Vr
              ? ((f = ur(m.props.children, p.mode, _, m.key)),
                (f.return = p),
                (p = f))
              : ((_ = Qo(m.type, m.key, m.props, null, p.mode, _)),
                (_.ref = Ri(p, f, m)),
                (_.return = p),
                (p = _));
          }
          return o(p);
        case Or:
          e: {
            for (k = m.key; f !== null; ) {
              if (f.key === k)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === m.containerInfo &&
                  f.stateNode.implementation === m.implementation
                ) {
                  n(p, f.sibling),
                    (f = i(f, m.children || [])),
                    (f.return = p),
                    (p = f);
                  break e;
                } else {
                  n(p, f);
                  break;
                }
              else t(p, f);
              f = f.sibling;
            }
            (f = lu(m, p.mode, _)), (f.return = p), (p = f);
          }
          return o(p);
        case yn:
          return (k = m._init), w(p, f, k(m._payload), _);
      }
      if (Mi(m)) return y(p, f, m, _);
      if (Ti(m)) return v(p, f, m, _);
      vo(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        f !== null && f.tag === 6
          ? (n(p, f.sibling), (f = i(f, m)), (f.return = p), (p = f))
          : (n(p, f), (f = ou(m, p.mode, _)), (f.return = p), (p = f)),
        o(p))
      : n(p, f);
  }
  return w;
}
var ri = Eg(!0),
  wg = Eg(!1),
  Ks = {},
  Gt = qn(Ks),
  gs = qn(Ks),
  ys = qn(Ks);
function rr(e) {
  if (e === Ks) throw Error(A(174));
  return e;
}
function Ah(e, t) {
  switch ((Z(ys, t), Z(gs, e), Z(Gt, Ks), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Fu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Fu(t, e));
  }
  ne(Gt), Z(Gt, t);
}
function ii() {
  ne(Gt), ne(gs), ne(ys);
}
function Tg(e) {
  rr(ys.current);
  var t = rr(Gt.current),
    n = Fu(t, e.type);
  t !== n && (Z(gs, e), Z(Gt, n));
}
function Ch(e) {
  gs.current === e && (ne(Gt), ne(gs));
}
var oe = qn(0);
function pl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var eu = [];
function Rh() {
  for (var e = 0; e < eu.length; e++)
    eu[e]._workInProgressVersionPrimary = null;
  eu.length = 0;
}
var bo = dn.ReactCurrentDispatcher,
  tu = dn.ReactCurrentBatchConfig,
  yr = 0,
  le = null,
  _e = null,
  Ie = null,
  ml = !1,
  qi = !1,
  vs = 0,
  sE = 0;
function Ue() {
  throw Error(A(321));
}
function Ph(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ut(e[n], t[n])) return !1;
  return !0;
}
function kh(e, t, n, r, i, s) {
  if (
    ((yr = s),
    (le = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (bo.current = e === null || e.memoizedState === null ? uE : cE),
    (e = n(r, i)),
    qi)
  ) {
    s = 0;
    do {
      if (((qi = !1), (vs = 0), 25 <= s)) throw Error(A(301));
      (s += 1),
        (Ie = _e = null),
        (t.updateQueue = null),
        (bo.current = hE),
        (e = n(r, i));
    } while (qi);
  }
  if (
    ((bo.current = gl),
    (t = _e !== null && _e.next !== null),
    (yr = 0),
    (Ie = _e = le = null),
    (ml = !1),
    t)
  )
    throw Error(A(300));
  return e;
}
function xh() {
  var e = vs !== 0;
  return (vs = 0), e;
}
function zt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ie === null ? (le.memoizedState = Ie = e) : (Ie = Ie.next = e), Ie;
}
function Pt() {
  if (_e === null) {
    var e = le.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = _e.next;
  var t = Ie === null ? le.memoizedState : Ie.next;
  if (t !== null) (Ie = t), (_e = e);
  else {
    if (e === null) throw Error(A(310));
    (_e = e),
      (e = {
        memoizedState: _e.memoizedState,
        baseState: _e.baseState,
        baseQueue: _e.baseQueue,
        queue: _e.queue,
        next: null,
      }),
      Ie === null ? (le.memoizedState = Ie = e) : (Ie = Ie.next = e);
  }
  return Ie;
}
function _s(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function nu(e) {
  var t = Pt(),
    n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = _e,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var l = (o = null),
      a = null,
      u = s;
    do {
      var c = u.lane;
      if ((yr & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var h = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = h), (o = r)) : (a = a.next = h),
          (le.lanes |= c),
          (vr |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    a === null ? (o = r) : (a.next = l),
      Ut(r, t.memoizedState) || (ot = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (le.lanes |= s), (vr |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ru(e) {
  var t = Pt(),
    n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    Ut(s, t.memoizedState) || (ot = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Ig() {}
function Sg(e, t) {
  var n = le,
    r = Pt(),
    i = t(),
    s = !Ut(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (ot = !0)),
    (r = r.queue),
    Nh(Rg.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (Ie !== null && Ie.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Es(9, Cg.bind(null, n, r, i, t), void 0, null),
      Ae === null)
    )
      throw Error(A(349));
    yr & 30 || Ag(n, t, i);
  }
  return i;
}
function Ag(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (le.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Cg(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Pg(t) && kg(e);
}
function Rg(e, t, n) {
  return n(function () {
    Pg(t) && kg(e);
  });
}
function Pg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ut(e, n);
  } catch {
    return !0;
  }
}
function kg(e) {
  var t = un(e, 1);
  t !== null && Ft(t, e, 1, -1);
}
function Rd(e) {
  var t = zt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: _s,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = aE.bind(null, le, e)),
    [t.memoizedState, e]
  );
}
function Es(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (le.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function xg() {
  return Pt().memoizedState;
}
function Ho(e, t, n, r) {
  var i = zt();
  (le.flags |= e),
    (i.memoizedState = Es(1 | t, n, void 0, r === void 0 ? null : r));
}
function Yl(e, t, n, r) {
  var i = Pt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (_e !== null) {
    var o = _e.memoizedState;
    if (((s = o.destroy), r !== null && Ph(r, o.deps))) {
      i.memoizedState = Es(t, n, s, r);
      return;
    }
  }
  (le.flags |= e), (i.memoizedState = Es(1 | t, n, s, r));
}
function Pd(e, t) {
  return Ho(8390656, 8, e, t);
}
function Nh(e, t) {
  return Yl(2048, 8, e, t);
}
function Ng(e, t) {
  return Yl(4, 2, e, t);
}
function Dg(e, t) {
  return Yl(4, 4, e, t);
}
function Og(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Vg(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Yl(4, 4, Og.bind(null, t, e), n)
  );
}
function Dh() {}
function Lg(e, t) {
  var n = Pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ph(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Mg(e, t) {
  var n = Pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ph(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function $g(e, t, n) {
  return yr & 21
    ? (Ut(n, t) || ((n = jm()), (le.lanes |= n), (vr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ot = !0)), (e.memoizedState = n));
}
function oE(e, t) {
  var n = G;
  (G = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = tu.transition;
  tu.transition = {};
  try {
    e(!1), t();
  } finally {
    (G = n), (tu.transition = r);
  }
}
function Fg() {
  return Pt().memoizedState;
}
function lE(e, t, n) {
  var r = Dn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ug(e))
  )
    jg(t, n);
  else if (((n = gg(e, t, n, r)), n !== null)) {
    var i = et();
    Ft(n, e, r, i), Bg(n, t, r);
  }
}
function aE(e, t, n) {
  var r = Dn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ug(e)) jg(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          l = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), Ut(l, o))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), Ih(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = gg(e, t, i, r)),
      n !== null && ((i = et()), Ft(n, e, r, i), Bg(n, t, r));
  }
}
function Ug(e) {
  var t = e.alternate;
  return e === le || (t !== null && t === le);
}
function jg(e, t) {
  qi = ml = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Bg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), uh(e, n);
  }
}
var gl = {
    readContext: Rt,
    useCallback: Ue,
    useContext: Ue,
    useEffect: Ue,
    useImperativeHandle: Ue,
    useInsertionEffect: Ue,
    useLayoutEffect: Ue,
    useMemo: Ue,
    useReducer: Ue,
    useRef: Ue,
    useState: Ue,
    useDebugValue: Ue,
    useDeferredValue: Ue,
    useTransition: Ue,
    useMutableSource: Ue,
    useSyncExternalStore: Ue,
    useId: Ue,
    unstable_isNewReconciler: !1,
  },
  uE = {
    readContext: Rt,
    useCallback: function (e, t) {
      return (zt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Rt,
    useEffect: Pd,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ho(4194308, 4, Og.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ho(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ho(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = zt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = zt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = lE.bind(null, le, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = zt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Rd,
    useDebugValue: Dh,
    useDeferredValue: function (e) {
      return (zt().memoizedState = e);
    },
    useTransition: function () {
      var e = Rd(!1),
        t = e[0];
      return (e = oE.bind(null, e[1])), (zt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = le,
        i = zt();
      if (ie) {
        if (n === void 0) throw Error(A(407));
        n = n();
      } else {
        if (((n = t()), Ae === null)) throw Error(A(349));
        yr & 30 || Ag(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        Pd(Rg.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Es(9, Cg.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = zt(),
        t = Ae.identifierPrefix;
      if (ie) {
        var n = tn,
          r = en;
        (n = (r & ~(1 << (32 - $t(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = vs++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = sE++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  cE = {
    readContext: Rt,
    useCallback: Lg,
    useContext: Rt,
    useEffect: Nh,
    useImperativeHandle: Vg,
    useInsertionEffect: Ng,
    useLayoutEffect: Dg,
    useMemo: Mg,
    useReducer: nu,
    useRef: xg,
    useState: function () {
      return nu(_s);
    },
    useDebugValue: Dh,
    useDeferredValue: function (e) {
      var t = Pt();
      return $g(t, _e.memoizedState, e);
    },
    useTransition: function () {
      var e = nu(_s)[0],
        t = Pt().memoizedState;
      return [e, t];
    },
    useMutableSource: Ig,
    useSyncExternalStore: Sg,
    useId: Fg,
    unstable_isNewReconciler: !1,
  },
  hE = {
    readContext: Rt,
    useCallback: Lg,
    useContext: Rt,
    useEffect: Nh,
    useImperativeHandle: Vg,
    useInsertionEffect: Ng,
    useLayoutEffect: Dg,
    useMemo: Mg,
    useReducer: ru,
    useRef: xg,
    useState: function () {
      return ru(_s);
    },
    useDebugValue: Dh,
    useDeferredValue: function (e) {
      var t = Pt();
      return _e === null ? (t.memoizedState = e) : $g(t, _e.memoizedState, e);
    },
    useTransition: function () {
      var e = ru(_s)[0],
        t = Pt().memoizedState;
      return [e, t];
    },
    useMutableSource: Ig,
    useSyncExternalStore: Sg,
    useId: Fg,
    unstable_isNewReconciler: !1,
  };
function si(e, t) {
  try {
    var n = "",
      r = t;
    do (n += U_(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function iu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function lc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var fE = typeof WeakMap == "function" ? WeakMap : Map;
function zg(e, t, n) {
  (n = rn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      vl || ((vl = !0), (yc = r)), lc(e, t);
    }),
    n
  );
}
function bg(e, t, n) {
  (n = rn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        lc(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        lc(e, t),
          typeof r != "function" &&
            (Nn === null ? (Nn = new Set([this])) : Nn.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function kd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new fE();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = CE.bind(null, e, t, n)), t.then(e, e));
}
function xd(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Nd(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = rn(-1, 1)), (t.tag = 2), xn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var dE = dn.ReactCurrentOwner,
  ot = !1;
function Ye(e, t, n, r) {
  t.child = e === null ? wg(t, null, n, r) : ri(t, e.child, n, r);
}
function Dd(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    Xr(t, i),
    (r = kh(e, t, n, r, s, i)),
    (n = xh()),
    e !== null && !ot
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        cn(e, t, i))
      : (ie && n && yh(t), (t.flags |= 1), Ye(e, t, r, i), t.child)
  );
}
function Od(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !jh(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Hg(e, t, s, r, i))
      : ((e = Qo(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : fs), n(o, r) && e.ref === t.ref)
    )
      return cn(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = On(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Hg(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (fs(s, r) && e.ref === t.ref)
      if (((ot = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (ot = !0);
      else return (t.lanes = e.lanes), cn(e, t, i);
  }
  return ac(e, t, n, r, i);
}
function Wg(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Z(Hr, ft),
        (ft |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Z(Hr, ft),
          (ft |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        Z(Hr, ft),
        (ft |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Z(Hr, ft),
      (ft |= r);
  return Ye(e, t, i, n), t.child;
}
function Kg(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ac(e, t, n, r, i) {
  var s = at(n) ? mr : Qe.current;
  return (
    (s = ti(t, s)),
    Xr(t, i),
    (n = kh(e, t, n, r, s, i)),
    (r = xh()),
    e !== null && !ot
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        cn(e, t, i))
      : (ie && r && yh(t), (t.flags |= 1), Ye(e, t, n, i), t.child)
  );
}
function Vd(e, t, n, r, i) {
  if (at(n)) {
    var s = !0;
    al(t);
  } else s = !1;
  if ((Xr(t, i), t.stateNode === null))
    Wo(e, t), _g(t, n, r), oc(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var a = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Rt(u))
      : ((u = at(n) ? mr : Qe.current), (u = ti(t, u)));
    var c = n.getDerivedStateFromProps,
      h =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && Ad(t, o, r, u)),
      (vn = !1);
    var d = t.memoizedState;
    (o.state = d),
      dl(t, r, o, i),
      (a = t.memoizedState),
      l !== r || d !== a || lt.current || vn
        ? (typeof c == "function" && (sc(t, n, c, r), (a = t.memoizedState)),
          (l = vn || Sd(t, n, l, r, d, a, u))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = u),
          (r = l))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      yg(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Nt(t.type, l)),
      (o.props = u),
      (h = t.pendingProps),
      (d = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Rt(a))
        : ((a = at(n) ? mr : Qe.current), (a = ti(t, a)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== h || d !== a) && Ad(t, o, r, a)),
      (vn = !1),
      (d = t.memoizedState),
      (o.state = d),
      dl(t, r, o, i);
    var y = t.memoizedState;
    l !== h || d !== y || lt.current || vn
      ? (typeof g == "function" && (sc(t, n, g, r), (y = t.memoizedState)),
        (u = vn || Sd(t, n, u, r, d, y, a) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, y, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, y, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = a),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return uc(e, t, n, r, s, i);
}
function uc(e, t, n, r, i, s) {
  Kg(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && _d(t, n, !1), cn(e, t, s);
  (r = t.stateNode), (dE.current = t);
  var l =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = ri(t, e.child, null, s)), (t.child = ri(t, null, l, s)))
      : Ye(e, t, l, s),
    (t.memoizedState = r.state),
    i && _d(t, n, !0),
    t.child
  );
}
function qg(e) {
  var t = e.stateNode;
  t.pendingContext
    ? vd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && vd(e, t.context, !1),
    Ah(e, t.containerInfo);
}
function Ld(e, t, n, r, i) {
  return ni(), _h(i), (t.flags |= 256), Ye(e, t, n, r), t.child;
}
var cc = { dehydrated: null, treeContext: null, retryLane: 0 };
function hc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Qg(e, t, n) {
  var r = t.pendingProps,
    i = oe.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    Z(oe, i & 1),
    e === null)
  )
    return (
      rc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = ea(o, r, 0, null)),
              (e = ur(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = hc(n)),
              (t.memoizedState = cc),
              e)
            : Oh(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return pE(e, t, o, r, l, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = On(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (s = On(l, s)) : ((s = ur(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? hc(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = cc),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = On(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Oh(e, t) {
  return (
    (t = ea({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function _o(e, t, n, r) {
  return (
    r !== null && _h(r),
    ri(t, e.child, null, n),
    (e = Oh(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function pE(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = iu(Error(A(422)))), _o(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (i = t.mode),
          (r = ea({ mode: "visible", children: r.children }, i, 0, null)),
          (s = ur(s, i, o, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          t.mode & 1 && ri(t, e.child, null, o),
          (t.child.memoizedState = hc(o)),
          (t.memoizedState = cc),
          s);
  if (!(t.mode & 1)) return _o(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (s = Error(A(419))), (r = iu(s, r, void 0)), _o(e, t, o, r);
  }
  if (((l = (o & e.childLanes) !== 0), ot || l)) {
    if (((r = Ae), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), un(e, i), Ft(r, e, i, -1));
    }
    return Uh(), (r = iu(Error(A(421)))), _o(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = RE.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (dt = kn(i.nextSibling)),
      (gt = t),
      (ie = !0),
      (Ot = null),
      e !== null &&
        ((Tt[It++] = en),
        (Tt[It++] = tn),
        (Tt[It++] = gr),
        (en = e.id),
        (tn = e.overflow),
        (gr = t)),
      (t = Oh(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Md(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ic(e.return, t, n);
}
function su(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function Gg(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((Ye(e, t, r.children, n), (r = oe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Md(e, n, t);
        else if (e.tag === 19) Md(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Z(oe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && pl(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          su(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && pl(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        su(t, !0, n, null, s);
        break;
      case "together":
        su(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Wo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function cn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (vr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(A(153));
  if (t.child !== null) {
    for (
      e = t.child, n = On(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = On(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function mE(e, t, n) {
  switch (t.tag) {
    case 3:
      qg(t), ni();
      break;
    case 5:
      Tg(t);
      break;
    case 1:
      at(t.type) && al(t);
      break;
    case 4:
      Ah(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      Z(hl, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Z(oe, oe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Qg(e, t, n)
            : (Z(oe, oe.current & 1),
              (e = cn(e, t, n)),
              e !== null ? e.sibling : null);
      Z(oe, oe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Gg(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Z(oe, oe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Wg(e, t, n);
  }
  return cn(e, t, n);
}
var Xg, fc, Yg, Jg;
Xg = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
fc = function () {};
Yg = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), rr(Gt.current);
    var s = null;
    switch (n) {
      case "input":
        (i = Vu(e, i)), (r = Vu(e, r)), (s = []);
        break;
      case "select":
        (i = ae({}, i, { value: void 0 })),
          (r = ae({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = $u(e, i)), (r = $u(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ol);
    }
    Uu(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ss.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                l[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (s = s || []).push(u, a))
            : u === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (s = s || []).push(u, "" + a)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (ss.hasOwnProperty(u)
                  ? (a != null && u === "onScroll" && ee("scroll", e),
                    s || l === a || (s = []))
                  : (s = s || []).push(u, a));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Jg = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Pi(e, t) {
  if (!ie)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function je(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function gE(e, t, n) {
  var r = t.pendingProps;
  switch ((vh(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return je(t), null;
    case 1:
      return at(t.type) && ll(), je(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ii(),
        ne(lt),
        ne(Qe),
        Rh(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (yo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ot !== null && (Ec(Ot), (Ot = null)))),
        fc(e, t),
        je(t),
        null
      );
    case 5:
      Ch(t);
      var i = rr(ys.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Yg(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(A(166));
          return je(t), null;
        }
        if (((e = rr(Gt.current)), yo(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[bt] = t), (r[ms] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ee("cancel", r), ee("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ee("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Fi.length; i++) ee(Fi[i], r);
              break;
            case "source":
              ee("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ee("error", r), ee("load", r);
              break;
            case "details":
              ee("toggle", r);
              break;
            case "input":
              Wf(r, s), ee("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                ee("invalid", r);
              break;
            case "textarea":
              qf(r, s), ee("invalid", r);
          }
          Uu(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var l = s[o];
              o === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      go(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      go(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : ss.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  ee("scroll", r);
            }
          switch (n) {
            case "input":
              lo(r), Kf(r, s, !0);
              break;
            case "textarea":
              lo(r), Qf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = ol);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Am(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[bt] = t),
            (e[ms] = r),
            Xg(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = ju(n, r)), n)) {
              case "dialog":
                ee("cancel", e), ee("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ee("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Fi.length; i++) ee(Fi[i], e);
                i = r;
                break;
              case "source":
                ee("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ee("error", e), ee("load", e), (i = r);
                break;
              case "details":
                ee("toggle", e), (i = r);
                break;
              case "input":
                Wf(e, r), (i = Vu(e, r)), ee("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ae({}, r, { value: void 0 })),
                  ee("invalid", e);
                break;
              case "textarea":
                qf(e, r), (i = $u(e, r)), ee("invalid", e);
                break;
              default:
                i = r;
            }
            Uu(n, i), (l = i);
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "style"
                  ? Pm(e, a)
                  : s === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && Cm(e, a))
                    : s === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && os(e, a)
                        : typeof a == "number" && os(e, "" + a)
                      : s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (ss.hasOwnProperty(s)
                          ? a != null && s === "onScroll" && ee("scroll", e)
                          : a != null && rh(e, s, a, o));
              }
            switch (n) {
              case "input":
                lo(e), Kf(e, r, !1);
                break;
              case "textarea":
                lo(e), Qf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Un(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Kr(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Kr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = ol);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return je(t), null;
    case 6:
      if (e && t.stateNode != null) Jg(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(A(166));
        if (((n = rr(ys.current)), rr(Gt.current), yo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[bt] = t),
            (s = r.nodeValue !== n) && ((e = gt), e !== null))
          )
            switch (e.tag) {
              case 3:
                go(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  go(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[bt] = t),
            (t.stateNode = r);
      }
      return je(t), null;
    case 13:
      if (
        (ne(oe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ie && dt !== null && t.mode & 1 && !(t.flags & 128))
          mg(), ni(), (t.flags |= 98560), (s = !1);
        else if (((s = yo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(A(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(A(317));
            s[bt] = t;
          } else
            ni(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          je(t), (s = !1);
        } else Ot !== null && (Ec(Ot), (Ot = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || oe.current & 1 ? Ee === 0 && (Ee = 3) : Uh())),
          t.updateQueue !== null && (t.flags |= 4),
          je(t),
          null);
    case 4:
      return (
        ii(), fc(e, t), e === null && ds(t.stateNode.containerInfo), je(t), null
      );
    case 10:
      return Th(t.type._context), je(t), null;
    case 17:
      return at(t.type) && ll(), je(t), null;
    case 19:
      if ((ne(oe), (s = t.memoizedState), s === null)) return je(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) Pi(s, !1);
        else {
          if (Ee !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = pl(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Pi(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Z(oe, (oe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            de() > oi &&
            ((t.flags |= 128), (r = !0), Pi(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = pl(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Pi(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !ie)
            )
              return je(t), null;
          } else
            2 * de() - s.renderingStartTime > oi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Pi(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = de()),
          (t.sibling = null),
          (n = oe.current),
          Z(oe, r ? (n & 1) | 2 : n & 1),
          t)
        : (je(t), null);
    case 22:
    case 23:
      return (
        Fh(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ft & 1073741824 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : je(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, t.tag));
}
function yE(e, t) {
  switch ((vh(t), t.tag)) {
    case 1:
      return (
        at(t.type) && ll(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ii(),
        ne(lt),
        ne(Qe),
        Rh(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ch(t), null;
    case 13:
      if (
        (ne(oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(A(340));
        ni();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ne(oe), null;
    case 4:
      return ii(), null;
    case 10:
      return Th(t.type._context), null;
    case 22:
    case 23:
      return Fh(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Eo = !1,
  be = !1,
  vE = typeof WeakSet == "function" ? WeakSet : Set,
  V = null;
function br(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ue(e, t, r);
      }
    else n.current = null;
}
function dc(e, t, n) {
  try {
    n();
  } catch (r) {
    ue(e, t, r);
  }
}
var $d = !1;
function _E(e, t) {
  if (((Xu = rl), (e = ng()), gh(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            h = e,
            d = null;
          t: for (;;) {
            for (
              var g;
              h !== n || (i !== 0 && h.nodeType !== 3) || (l = o + i),
                h !== s || (r !== 0 && h.nodeType !== 3) || (a = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (g = h.firstChild) !== null;

            )
              (d = h), (h = g);
            for (;;) {
              if (h === e) break t;
              if (
                (d === n && ++u === i && (l = o),
                d === s && ++c === r && (a = o),
                (g = h.nextSibling) !== null)
              )
                break;
              (h = d), (d = h.parentNode);
            }
            h = g;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Yu = { focusedElem: e, selectionRange: n }, rl = !1, V = t; V !== null; )
    if (((t = V), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (V = e);
    else
      for (; V !== null; ) {
        t = V;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    w = y.memoizedState,
                    p = t.stateNode,
                    f = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Nt(t.type, v),
                      w,
                    );
                  p.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(A(163));
            }
        } catch (_) {
          ue(t, t.return, _);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (V = e);
          break;
        }
        V = t.return;
      }
  return (y = $d), ($d = !1), y;
}
function Qi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && dc(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Jl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function pc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Zg(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Zg(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[bt], delete t[ms], delete t[ec], delete t[tE], delete t[nE])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function ey(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Fd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || ey(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function mc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ol));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (mc(e, t, n), e = e.sibling; e !== null; ) mc(e, t, n), (e = e.sibling);
}
function gc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (gc(e, t, n), e = e.sibling; e !== null; ) gc(e, t, n), (e = e.sibling);
}
var Ne = null,
  Dt = !1;
function gn(e, t, n) {
  for (n = n.child; n !== null; ) ty(e, t, n), (n = n.sibling);
}
function ty(e, t, n) {
  if (Qt && typeof Qt.onCommitFiberUnmount == "function")
    try {
      Qt.onCommitFiberUnmount(Hl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      be || br(n, t);
    case 6:
      var r = Ne,
        i = Dt;
      (Ne = null),
        gn(e, t, n),
        (Ne = r),
        (Dt = i),
        Ne !== null &&
          (Dt
            ? ((e = Ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ne.removeChild(n.stateNode));
      break;
    case 18:
      Ne !== null &&
        (Dt
          ? ((e = Ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ja(e.parentNode, n)
              : e.nodeType === 1 && Ja(e, n),
            cs(e))
          : Ja(Ne, n.stateNode));
      break;
    case 4:
      (r = Ne),
        (i = Dt),
        (Ne = n.stateNode.containerInfo),
        (Dt = !0),
        gn(e, t, n),
        (Ne = r),
        (Dt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !be &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && dc(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      gn(e, t, n);
      break;
    case 1:
      if (
        !be &&
        (br(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          ue(n, t, l);
        }
      gn(e, t, n);
      break;
    case 21:
      gn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((be = (r = be) || n.memoizedState !== null), gn(e, t, n), (be = r))
        : gn(e, t, n);
      break;
    default:
      gn(e, t, n);
  }
}
function Ud(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new vE()),
      t.forEach(function (r) {
        var i = PE.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function xt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Ne = l.stateNode), (Dt = !1);
              break e;
            case 3:
              (Ne = l.stateNode.containerInfo), (Dt = !0);
              break e;
            case 4:
              (Ne = l.stateNode.containerInfo), (Dt = !0);
              break e;
          }
          l = l.return;
        }
        if (Ne === null) throw Error(A(160));
        ty(s, o, i), (Ne = null), (Dt = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        ue(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) ny(t, e), (t = t.sibling);
}
function ny(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((xt(t, e), Bt(e), r & 4)) {
        try {
          Qi(3, e, e.return), Jl(3, e);
        } catch (v) {
          ue(e, e.return, v);
        }
        try {
          Qi(5, e, e.return);
        } catch (v) {
          ue(e, e.return, v);
        }
      }
      break;
    case 1:
      xt(t, e), Bt(e), r & 512 && n !== null && br(n, n.return);
      break;
    case 5:
      if (
        (xt(t, e),
        Bt(e),
        r & 512 && n !== null && br(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          os(i, "");
        } catch (v) {
          ue(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && s.type === "radio" && s.name != null && Im(i, s),
              ju(l, o);
            var u = ju(l, s);
            for (o = 0; o < a.length; o += 2) {
              var c = a[o],
                h = a[o + 1];
              c === "style"
                ? Pm(i, h)
                : c === "dangerouslySetInnerHTML"
                  ? Cm(i, h)
                  : c === "children"
                    ? os(i, h)
                    : rh(i, c, h, u);
            }
            switch (l) {
              case "input":
                Lu(i, s);
                break;
              case "textarea":
                Sm(i, s);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var g = s.value;
                g != null
                  ? Kr(i, !!s.multiple, g, !1)
                  : d !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Kr(i, !!s.multiple, s.defaultValue, !0)
                      : Kr(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[ms] = s;
          } catch (v) {
            ue(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((xt(t, e), Bt(e), r & 4)) {
        if (e.stateNode === null) throw Error(A(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (v) {
          ue(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (xt(t, e), Bt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          cs(t.containerInfo);
        } catch (v) {
          ue(e, e.return, v);
        }
      break;
    case 4:
      xt(t, e), Bt(e);
      break;
    case 13:
      xt(t, e),
        Bt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Mh = de())),
        r & 4 && Ud(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((be = (u = be) || c), xt(t, e), (be = u)) : xt(t, e),
        Bt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (V = e, c = e.child; c !== null; ) {
            for (h = V = c; V !== null; ) {
              switch (((d = V), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qi(4, d, d.return);
                  break;
                case 1:
                  br(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (v) {
                      ue(r, n, v);
                    }
                  }
                  break;
                case 5:
                  br(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Bd(h);
                    continue;
                  }
              }
              g !== null ? ((g.return = d), (V = g)) : Bd(h);
            }
            c = c.sibling;
          }
        e: for (c = null, h = e; ; ) {
          if (h.tag === 5) {
            if (c === null) {
              c = h;
              try {
                (i = h.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = h.stateNode),
                      (a = h.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = Rm("display", o)));
              } catch (v) {
                ue(e, e.return, v);
              }
            }
          } else if (h.tag === 6) {
            if (c === null)
              try {
                h.stateNode.nodeValue = u ? "" : h.memoizedProps;
              } catch (v) {
                ue(e, e.return, v);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            c === h && (c = null), (h = h.return);
          }
          c === h && (c = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      xt(t, e), Bt(e), r & 4 && Ud(e);
      break;
    case 21:
      break;
    default:
      xt(t, e), Bt(e);
  }
}
function Bt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ey(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(A(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (os(i, ""), (r.flags &= -33));
          var s = Fd(e);
          gc(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = Fd(e);
          mc(e, l, o);
          break;
        default:
          throw Error(A(161));
      }
    } catch (a) {
      ue(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function EE(e, t, n) {
  (V = e), ry(e);
}
function ry(e, t, n) {
  for (var r = (e.mode & 1) !== 0; V !== null; ) {
    var i = V,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Eo;
      if (!o) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || be;
        l = Eo;
        var u = be;
        if (((Eo = o), (be = a) && !u))
          for (V = i; V !== null; )
            (o = V),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? zd(i)
                : a !== null
                  ? ((a.return = o), (V = a))
                  : zd(i);
        for (; s !== null; ) (V = s), ry(s), (s = s.sibling);
        (V = i), (Eo = l), (be = u);
      }
      jd(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (V = s)) : jd(e);
  }
}
function jd(e) {
  for (; V !== null; ) {
    var t = V;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              be || Jl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !be)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Nt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = t.updateQueue;
              s !== null && Id(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Id(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var h = c.dehydrated;
                    h !== null && cs(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(A(163));
          }
        be || (t.flags & 512 && pc(t));
      } catch (d) {
        ue(t, t.return, d);
      }
    }
    if (t === e) {
      V = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function Bd(e) {
  for (; V !== null; ) {
    var t = V;
    if (t === e) {
      V = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function zd(e) {
  for (; V !== null; ) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Jl(4, t);
          } catch (a) {
            ue(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ue(t, i, a);
            }
          }
          var s = t.return;
          try {
            pc(t);
          } catch (a) {
            ue(t, s, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            pc(t);
          } catch (a) {
            ue(t, o, a);
          }
      }
    } catch (a) {
      ue(t, t.return, a);
    }
    if (t === e) {
      V = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (V = l);
      break;
    }
    V = t.return;
  }
}
var wE = Math.ceil,
  yl = dn.ReactCurrentDispatcher,
  Vh = dn.ReactCurrentOwner,
  Ct = dn.ReactCurrentBatchConfig,
  W = 0,
  Ae = null,
  me = null,
  Me = 0,
  ft = 0,
  Hr = qn(0),
  Ee = 0,
  ws = null,
  vr = 0,
  Zl = 0,
  Lh = 0,
  Gi = null,
  st = null,
  Mh = 0,
  oi = 1 / 0,
  Jt = null,
  vl = !1,
  yc = null,
  Nn = null,
  wo = !1,
  In = null,
  _l = 0,
  Xi = 0,
  vc = null,
  Ko = -1,
  qo = 0;
function et() {
  return W & 6 ? de() : Ko !== -1 ? Ko : (Ko = de());
}
function Dn(e) {
  return e.mode & 1
    ? W & 2 && Me !== 0
      ? Me & -Me
      : iE.transition !== null
        ? (qo === 0 && (qo = jm()), qo)
        : ((e = G),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : qm(e.type))),
          e)
    : 1;
}
function Ft(e, t, n, r) {
  if (50 < Xi) throw ((Xi = 0), (vc = null), Error(A(185)));
  bs(e, n, r),
    (!(W & 2) || e !== Ae) &&
      (e === Ae && (!(W & 2) && (Zl |= n), Ee === 4 && En(e, Me)),
      ut(e, r),
      n === 1 && W === 0 && !(t.mode & 1) && ((oi = de() + 500), Gl && Qn()));
}
function ut(e, t) {
  var n = e.callbackNode;
  i1(e, t);
  var r = nl(e, e === Ae ? Me : 0);
  if (r === 0)
    n !== null && Yf(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Yf(n), t === 1))
      e.tag === 0 ? rE(bd.bind(null, e)) : fg(bd.bind(null, e)),
        Z1(function () {
          !(W & 6) && Qn();
        }),
        (n = null);
    else {
      switch (Bm(r)) {
        case 1:
          n = ah;
          break;
        case 4:
          n = Fm;
          break;
        case 16:
          n = tl;
          break;
        case 536870912:
          n = Um;
          break;
        default:
          n = tl;
      }
      n = hy(n, iy.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function iy(e, t) {
  if (((Ko = -1), (qo = 0), W & 6)) throw Error(A(327));
  var n = e.callbackNode;
  if (Yr() && e.callbackNode !== n) return null;
  var r = nl(e, e === Ae ? Me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = El(e, r);
  else {
    t = r;
    var i = W;
    W |= 2;
    var s = oy();
    (Ae !== e || Me !== t) && ((Jt = null), (oi = de() + 500), ar(e, t));
    do
      try {
        SE();
        break;
      } catch (l) {
        sy(e, l);
      }
    while (!0);
    wh(),
      (yl.current = s),
      (W = i),
      me !== null ? (t = 0) : ((Ae = null), (Me = 0), (t = Ee));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Wu(e)), i !== 0 && ((r = i), (t = _c(e, i)))), t === 1)
    )
      throw ((n = ws), ar(e, 0), En(e, r), ut(e, de()), n);
    if (t === 6) En(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !TE(i) &&
          ((t = El(e, r)),
          t === 2 && ((s = Wu(e)), s !== 0 && ((r = s), (t = _c(e, s)))),
          t === 1))
      )
        throw ((n = ws), ar(e, 0), En(e, r), ut(e, de()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          Jn(e, st, Jt);
          break;
        case 3:
          if (
            (En(e, r), (r & 130023424) === r && ((t = Mh + 500 - de()), 10 < t))
          ) {
            if (nl(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              et(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Zu(Jn.bind(null, e, st, Jt), t);
            break;
          }
          Jn(e, st, Jt);
          break;
        case 4:
          if ((En(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - $t(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = de() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * wE(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Zu(Jn.bind(null, e, st, Jt), r);
            break;
          }
          Jn(e, st, Jt);
          break;
        case 5:
          Jn(e, st, Jt);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return ut(e, de()), e.callbackNode === n ? iy.bind(null, e) : null;
}
function _c(e, t) {
  var n = Gi;
  return (
    e.current.memoizedState.isDehydrated && (ar(e, t).flags |= 256),
    (e = El(e, t)),
    e !== 2 && ((t = st), (st = n), t !== null && Ec(t)),
    e
  );
}
function Ec(e) {
  st === null ? (st = e) : st.push.apply(st, e);
}
function TE(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!Ut(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function En(e, t) {
  for (
    t &= ~Lh,
      t &= ~Zl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - $t(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function bd(e) {
  if (W & 6) throw Error(A(327));
  Yr();
  var t = nl(e, 0);
  if (!(t & 1)) return ut(e, de()), null;
  var n = El(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Wu(e);
    r !== 0 && ((t = r), (n = _c(e, r)));
  }
  if (n === 1) throw ((n = ws), ar(e, 0), En(e, t), ut(e, de()), n);
  if (n === 6) throw Error(A(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Jn(e, st, Jt),
    ut(e, de()),
    null
  );
}
function $h(e, t) {
  var n = W;
  W |= 1;
  try {
    return e(t);
  } finally {
    (W = n), W === 0 && ((oi = de() + 500), Gl && Qn());
  }
}
function _r(e) {
  In !== null && In.tag === 0 && !(W & 6) && Yr();
  var t = W;
  W |= 1;
  var n = Ct.transition,
    r = G;
  try {
    if (((Ct.transition = null), (G = 1), e)) return e();
  } finally {
    (G = r), (Ct.transition = n), (W = t), !(W & 6) && Qn();
  }
}
function Fh() {
  (ft = Hr.current), ne(Hr);
}
function ar(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), J1(n)), me !== null))
    for (n = me.return; n !== null; ) {
      var r = n;
      switch ((vh(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ll();
          break;
        case 3:
          ii(), ne(lt), ne(Qe), Rh();
          break;
        case 5:
          Ch(r);
          break;
        case 4:
          ii();
          break;
        case 13:
          ne(oe);
          break;
        case 19:
          ne(oe);
          break;
        case 10:
          Th(r.type._context);
          break;
        case 22:
        case 23:
          Fh();
      }
      n = n.return;
    }
  if (
    ((Ae = e),
    (me = e = On(e.current, null)),
    (Me = ft = t),
    (Ee = 0),
    (ws = null),
    (Lh = Zl = vr = 0),
    (st = Gi = null),
    nr !== null)
  ) {
    for (t = 0; t < nr.length; t++)
      if (((n = nr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    nr = null;
  }
  return e;
}
function sy(e, t) {
  do {
    var n = me;
    try {
      if ((wh(), (bo.current = gl), ml)) {
        for (var r = le.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        ml = !1;
      }
      if (
        ((yr = 0),
        (Ie = _e = le = null),
        (qi = !1),
        (vs = 0),
        (Vh.current = null),
        n === null || n.return === null)
      ) {
        (Ee = 1), (ws = t), (me = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          l = n,
          a = t;
        if (
          ((t = Me),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            h = c.tag;
          if (!(c.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = xd(o);
          if (g !== null) {
            (g.flags &= -257),
              Nd(g, o, l, s, t),
              g.mode & 1 && kd(s, u, t),
              (t = g),
              (a = u);
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(a), (t.updateQueue = v);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              kd(s, u, t), Uh();
              break e;
            }
            a = Error(A(426));
          }
        } else if (ie && l.mode & 1) {
          var w = xd(o);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              Nd(w, o, l, s, t),
              _h(si(a, l));
            break e;
          }
        }
        (s = a = si(a, l)),
          Ee !== 4 && (Ee = 2),
          Gi === null ? (Gi = [s]) : Gi.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var p = zg(s, a, t);
              Td(s, p);
              break e;
            case 1:
              l = a;
              var f = s.type,
                m = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Nn === null || !Nn.has(m))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var _ = bg(s, l, t);
                Td(s, _);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      ay(n);
    } catch (R) {
      (t = R), me === n && n !== null && (me = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function oy() {
  var e = yl.current;
  return (yl.current = gl), e === null ? gl : e;
}
function Uh() {
  (Ee === 0 || Ee === 3 || Ee === 2) && (Ee = 4),
    Ae === null || (!(vr & 268435455) && !(Zl & 268435455)) || En(Ae, Me);
}
function El(e, t) {
  var n = W;
  W |= 2;
  var r = oy();
  (Ae !== e || Me !== t) && ((Jt = null), ar(e, t));
  do
    try {
      IE();
      break;
    } catch (i) {
      sy(e, i);
    }
  while (!0);
  if ((wh(), (W = n), (yl.current = r), me !== null)) throw Error(A(261));
  return (Ae = null), (Me = 0), Ee;
}
function IE() {
  for (; me !== null; ) ly(me);
}
function SE() {
  for (; me !== null && !G_(); ) ly(me);
}
function ly(e) {
  var t = cy(e.alternate, e, ft);
  (e.memoizedProps = e.pendingProps),
    t === null ? ay(e) : (me = t),
    (Vh.current = null);
}
function ay(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = yE(n, t)), n !== null)) {
        (n.flags &= 32767), (me = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ee = 6), (me = null);
        return;
      }
    } else if (((n = gE(n, t, ft)), n !== null)) {
      me = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      me = t;
      return;
    }
    me = t = e;
  } while (t !== null);
  Ee === 0 && (Ee = 5);
}
function Jn(e, t, n) {
  var r = G,
    i = Ct.transition;
  try {
    (Ct.transition = null), (G = 1), AE(e, t, n, r);
  } finally {
    (Ct.transition = i), (G = r);
  }
  return null;
}
function AE(e, t, n, r) {
  do Yr();
  while (In !== null);
  if (W & 6) throw Error(A(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(A(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (s1(e, s),
    e === Ae && ((me = Ae = null), (Me = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      wo ||
      ((wo = !0),
      hy(tl, function () {
        return Yr(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Ct.transition), (Ct.transition = null);
    var o = G;
    G = 1;
    var l = W;
    (W |= 4),
      (Vh.current = null),
      _E(e, n),
      ny(n, e),
      W1(Yu),
      (rl = !!Xu),
      (Yu = Xu = null),
      (e.current = n),
      EE(n),
      X_(),
      (W = l),
      (G = o),
      (Ct.transition = s);
  } else e.current = n;
  if (
    (wo && ((wo = !1), (In = e), (_l = i)),
    (s = e.pendingLanes),
    s === 0 && (Nn = null),
    Z_(n.stateNode),
    ut(e, de()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (vl) throw ((vl = !1), (e = yc), (yc = null), e);
  return (
    _l & 1 && e.tag !== 0 && Yr(),
    (s = e.pendingLanes),
    s & 1 ? (e === vc ? Xi++ : ((Xi = 0), (vc = e))) : (Xi = 0),
    Qn(),
    null
  );
}
function Yr() {
  if (In !== null) {
    var e = Bm(_l),
      t = Ct.transition,
      n = G;
    try {
      if (((Ct.transition = null), (G = 16 > e ? 16 : e), In === null))
        var r = !1;
      else {
        if (((e = In), (In = null), (_l = 0), W & 6)) throw Error(A(331));
        var i = W;
        for (W |= 4, V = e.current; V !== null; ) {
          var s = V,
            o = s.child;
          if (V.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (V = u; V !== null; ) {
                  var c = V;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qi(8, c, s);
                  }
                  var h = c.child;
                  if (h !== null) (h.return = c), (V = h);
                  else
                    for (; V !== null; ) {
                      c = V;
                      var d = c.sibling,
                        g = c.return;
                      if ((Zg(c), c === u)) {
                        V = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = g), (V = d);
                        break;
                      }
                      V = g;
                    }
                }
              }
              var y = s.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var w = v.sibling;
                    (v.sibling = null), (v = w);
                  } while (v !== null);
                }
              }
              V = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (V = o);
          else
            e: for (; V !== null; ) {
              if (((s = V), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qi(9, s, s.return);
                }
              var p = s.sibling;
              if (p !== null) {
                (p.return = s.return), (V = p);
                break e;
              }
              V = s.return;
            }
        }
        var f = e.current;
        for (V = f; V !== null; ) {
          o = V;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) (m.return = o), (V = m);
          else
            e: for (o = f; V !== null; ) {
              if (((l = V), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Jl(9, l);
                  }
                } catch (R) {
                  ue(l, l.return, R);
                }
              if (l === o) {
                V = null;
                break e;
              }
              var _ = l.sibling;
              if (_ !== null) {
                (_.return = l.return), (V = _);
                break e;
              }
              V = l.return;
            }
        }
        if (
          ((W = i), Qn(), Qt && typeof Qt.onPostCommitFiberRoot == "function")
        )
          try {
            Qt.onPostCommitFiberRoot(Hl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (G = n), (Ct.transition = t);
    }
  }
  return !1;
}
function Hd(e, t, n) {
  (t = si(n, t)),
    (t = zg(e, t, 1)),
    (e = xn(e, t, 1)),
    (t = et()),
    e !== null && (bs(e, 1, t), ut(e, t));
}
function ue(e, t, n) {
  if (e.tag === 3) Hd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Hd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Nn === null || !Nn.has(r)))
        ) {
          (e = si(n, e)),
            (e = bg(t, e, 1)),
            (t = xn(t, e, 1)),
            (e = et()),
            t !== null && (bs(t, 1, e), ut(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function CE(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = et()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ae === e &&
      (Me & n) === n &&
      (Ee === 4 || (Ee === 3 && (Me & 130023424) === Me && 500 > de() - Mh)
        ? ar(e, 0)
        : (Lh |= n)),
    ut(e, t);
}
function uy(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = co), (co <<= 1), !(co & 130023424) && (co = 4194304))
      : (t = 1));
  var n = et();
  (e = un(e, t)), e !== null && (bs(e, t, n), ut(e, n));
}
function RE(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), uy(e, n);
}
function PE(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(A(314));
  }
  r !== null && r.delete(t), uy(e, n);
}
var cy;
cy = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || lt.current) ot = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ot = !1), mE(e, t, n);
      ot = !!(e.flags & 131072);
    }
  else (ot = !1), ie && t.flags & 1048576 && dg(t, cl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Wo(e, t), (e = t.pendingProps);
      var i = ti(t, Qe.current);
      Xr(t, n), (i = kh(null, t, r, e, i, n));
      var s = xh();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            at(r) ? ((s = !0), al(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Sh(t),
            (i.updater = Xl),
            (t.stateNode = i),
            (i._reactInternals = t),
            oc(t, r, e, n),
            (t = uc(null, t, r, !0, s, n)))
          : ((t.tag = 0), ie && s && yh(t), Ye(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Wo(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = xE(r)),
          (e = Nt(r, e)),
          i)
        ) {
          case 0:
            t = ac(null, t, r, e, n);
            break e;
          case 1:
            t = Vd(null, t, r, e, n);
            break e;
          case 11:
            t = Dd(null, t, r, e, n);
            break e;
          case 14:
            t = Od(null, t, r, Nt(r.type, e), n);
            break e;
        }
        throw Error(A(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Nt(r, i)),
        ac(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Nt(r, i)),
        Vd(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((qg(t), e === null)) throw Error(A(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          yg(e, t),
          dl(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = si(Error(A(423)), t)), (t = Ld(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = si(Error(A(424)), t)), (t = Ld(e, t, r, n, i));
            break e;
          } else
            for (
              dt = kn(t.stateNode.containerInfo.firstChild),
                gt = t,
                ie = !0,
                Ot = null,
                n = wg(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ni(), r === i)) {
            t = cn(e, t, n);
            break e;
          }
          Ye(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Tg(t),
        e === null && rc(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Ju(r, i) ? (o = null) : s !== null && Ju(r, s) && (t.flags |= 32),
        Kg(e, t),
        Ye(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && rc(t), null;
    case 13:
      return Qg(e, t, n);
    case 4:
      return (
        Ah(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ri(t, null, r, n)) : Ye(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Nt(r, i)),
        Dd(e, t, r, i, n)
      );
    case 7:
      return Ye(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ye(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ye(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          Z(hl, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (Ut(s.value, o)) {
            if (s.children === i.children && !lt.current) {
              t = cn(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                o = s.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (s.tag === 1) {
                      (a = rn(-1, n & -n)), (a.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (s.lanes |= n),
                      (a = s.alternate),
                      a !== null && (a.lanes |= n),
                      ic(s.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(A(341));
                (o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  ic(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        Ye(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Xr(t, n),
        (i = Rt(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ye(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Nt(r, t.pendingProps)),
        (i = Nt(r.type, i)),
        Od(e, t, r, i, n)
      );
    case 15:
      return Hg(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Nt(r, i)),
        Wo(e, t),
        (t.tag = 1),
        at(r) ? ((e = !0), al(t)) : (e = !1),
        Xr(t, n),
        _g(t, r, i),
        oc(t, r, i, n),
        uc(null, t, r, !0, e, n)
      );
    case 19:
      return Gg(e, t, n);
    case 22:
      return Wg(e, t, n);
  }
  throw Error(A(156, t.tag));
};
function hy(e, t) {
  return $m(e, t);
}
function kE(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function At(e, t, n, r) {
  return new kE(e, t, n, r);
}
function jh(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function xE(e) {
  if (typeof e == "function") return jh(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === sh)) return 11;
    if (e === oh) return 14;
  }
  return 2;
}
function On(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = At(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Qo(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) jh(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Vr:
        return ur(n.children, i, s, t);
      case ih:
        (o = 8), (i |= 8);
        break;
      case xu:
        return (
          (e = At(12, n, t, i | 2)), (e.elementType = xu), (e.lanes = s), e
        );
      case Nu:
        return (e = At(13, n, t, i)), (e.elementType = Nu), (e.lanes = s), e;
      case Du:
        return (e = At(19, n, t, i)), (e.elementType = Du), (e.lanes = s), e;
      case Em:
        return ea(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case vm:
              o = 10;
              break e;
            case _m:
              o = 9;
              break e;
            case sh:
              o = 11;
              break e;
            case oh:
              o = 14;
              break e;
            case yn:
              (o = 16), (r = null);
              break e;
          }
        throw Error(A(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = At(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function ur(e, t, n, r) {
  return (e = At(7, e, r, t)), (e.lanes = n), e;
}
function ea(e, t, n, r) {
  return (
    (e = At(22, e, r, t)),
    (e.elementType = Em),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ou(e, t, n) {
  return (e = At(6, e, null, t)), (e.lanes = n), e;
}
function lu(e, t, n) {
  return (
    (t = At(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function NE(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ba(0)),
    (this.expirationTimes = Ba(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ba(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Bh(e, t, n, r, i, s, o, l, a) {
  return (
    (e = new NE(e, t, n, l, a)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = At(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Sh(s),
    e
  );
}
function DE(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Or,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function fy(e) {
  if (!e) return jn;
  e = e._reactInternals;
  e: {
    if (Ar(e) !== e || e.tag !== 1) throw Error(A(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (at(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(A(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (at(n)) return hg(e, n, t);
  }
  return t;
}
function dy(e, t, n, r, i, s, o, l, a) {
  return (
    (e = Bh(n, r, !0, e, i, s, o, l, a)),
    (e.context = fy(null)),
    (n = e.current),
    (r = et()),
    (i = Dn(n)),
    (s = rn(r, i)),
    (s.callback = t ?? null),
    xn(n, s, i),
    (e.current.lanes = i),
    bs(e, i, r),
    ut(e, r),
    e
  );
}
function ta(e, t, n, r) {
  var i = t.current,
    s = et(),
    o = Dn(i);
  return (
    (n = fy(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = rn(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = xn(i, t, o)),
    e !== null && (Ft(e, i, o, s), zo(e, i, o)),
    o
  );
}
function wl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Wd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function zh(e, t) {
  Wd(e, t), (e = e.alternate) && Wd(e, t);
}
function OE() {
  return null;
}
var py =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function bh(e) {
  this._internalRoot = e;
}
na.prototype.render = bh.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(A(409));
  ta(e, t, null, null);
};
na.prototype.unmount = bh.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    _r(function () {
      ta(null, e, null, null);
    }),
      (t[an] = null);
  }
};
function na(e) {
  this._internalRoot = e;
}
na.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Hm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < _n.length && t !== 0 && t < _n[n].priority; n++);
    _n.splice(n, 0, e), n === 0 && Km(e);
  }
};
function Hh(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ra(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Kd() {}
function VE(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = wl(o);
        s.call(u);
      };
    }
    var o = dy(t, r, e, 0, null, !1, !1, "", Kd);
    return (
      (e._reactRootContainer = o),
      (e[an] = o.current),
      ds(e.nodeType === 8 ? e.parentNode : e),
      _r(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = wl(a);
      l.call(u);
    };
  }
  var a = Bh(e, 0, !1, null, null, !1, !1, "", Kd);
  return (
    (e._reactRootContainer = a),
    (e[an] = a.current),
    ds(e.nodeType === 8 ? e.parentNode : e),
    _r(function () {
      ta(t, a, n, r);
    }),
    a
  );
}
function ia(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = wl(o);
        l.call(a);
      };
    }
    ta(t, o, e, i);
  } else o = VE(n, t, e, i, r);
  return wl(o);
}
zm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = $i(t.pendingLanes);
        n !== 0 &&
          (uh(t, n | 1), ut(t, de()), !(W & 6) && ((oi = de() + 500), Qn()));
      }
      break;
    case 13:
      _r(function () {
        var r = un(e, 1);
        if (r !== null) {
          var i = et();
          Ft(r, e, 1, i);
        }
      }),
        zh(e, 1);
  }
};
ch = function (e) {
  if (e.tag === 13) {
    var t = un(e, 134217728);
    if (t !== null) {
      var n = et();
      Ft(t, e, 134217728, n);
    }
    zh(e, 134217728);
  }
};
bm = function (e) {
  if (e.tag === 13) {
    var t = Dn(e),
      n = un(e, t);
    if (n !== null) {
      var r = et();
      Ft(n, e, t, r);
    }
    zh(e, t);
  }
};
Hm = function () {
  return G;
};
Wm = function (e, t) {
  var n = G;
  try {
    return (G = e), t();
  } finally {
    G = n;
  }
};
zu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Lu(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Ql(r);
            if (!i) throw Error(A(90));
            Tm(r), Lu(r, i);
          }
        }
      }
      break;
    case "textarea":
      Sm(e, n);
      break;
    case "select":
      (t = n.value), t != null && Kr(e, !!n.multiple, t, !1);
  }
};
Nm = $h;
Dm = _r;
var LE = { usingClientEntryPoint: !1, Events: [Ws, Fr, Ql, km, xm, $h] },
  ki = {
    findFiberByHostInstance: tr,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  ME = {
    bundleType: ki.bundleType,
    version: ki.version,
    rendererPackageName: ki.rendererPackageName,
    rendererConfig: ki.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: dn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Lm(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ki.findFiberByHostInstance || OE,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var To = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!To.isDisabled && To.supportsFiber)
    try {
      (Hl = To.inject(ME)), (Qt = To);
    } catch {}
}
_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = LE;
_t.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Hh(t)) throw Error(A(200));
  return DE(e, t, null, n);
};
_t.createRoot = function (e, t) {
  if (!Hh(e)) throw Error(A(299));
  var n = !1,
    r = "",
    i = py;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Bh(e, 1, !1, null, null, n, !1, r, i)),
    (e[an] = t.current),
    ds(e.nodeType === 8 ? e.parentNode : e),
    new bh(t)
  );
};
_t.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(A(188))
      : ((e = Object.keys(e).join(",")), Error(A(268, e)));
  return (e = Lm(t)), (e = e === null ? null : e.stateNode), e;
};
_t.flushSync = function (e) {
  return _r(e);
};
_t.hydrate = function (e, t, n) {
  if (!ra(t)) throw Error(A(200));
  return ia(null, e, t, !0, n);
};
_t.hydrateRoot = function (e, t, n) {
  if (!Hh(e)) throw Error(A(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = py;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = dy(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[an] = t.current),
    ds(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new na(t);
};
_t.render = function (e, t, n) {
  if (!ra(t)) throw Error(A(200));
  return ia(null, e, t, !1, n);
};
_t.unmountComponentAtNode = function (e) {
  if (!ra(e)) throw Error(A(40));
  return e._reactRootContainer
    ? (_r(function () {
        ia(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[an] = null);
        });
      }),
      !0)
    : !1;
};
_t.unstable_batchedUpdates = $h;
_t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ra(n)) throw Error(A(200));
  if (e == null || e._reactInternals === void 0) throw Error(A(38));
  return ia(e, t, n, !1, r);
};
_t.version = "18.2.0-next-9e3b772b8-20220608";
function my() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(my);
    } catch (e) {
      console.error(e);
    }
}
my(), (dm.exports = _t);
var $E = dm.exports,
  qd = $E;
(Pu.createRoot = qd.createRoot), (Pu.hydrateRoot = qd.hydrateRoot);
/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ts() {
  return (
    (Ts = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ts.apply(this, arguments)
  );
}
var Sn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Sn || (Sn = {}));
const Qd = "popstate";
function FE(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: s, search: o, hash: l } = r.location;
    return wc(
      "",
      { pathname: s, search: o, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default",
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : gy(i);
  }
  return jE(t, n, null, e);
}
function we(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Wh(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function UE() {
  return Math.random().toString(36).substr(2, 8);
}
function Gd(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function wc(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ts(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? yi(t) : t,
      { state: n, key: (t && t.key) || r || UE() },
    )
  );
}
function gy(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function yi(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function jE(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    l = Sn.Pop,
    a = null,
    u = c();
  u == null && ((u = 0), o.replaceState(Ts({}, o.state, { idx: u }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function h() {
    l = Sn.Pop;
    let w = c(),
      p = w == null ? null : w - u;
    (u = w), a && a({ action: l, location: v.location, delta: p });
  }
  function d(w, p) {
    l = Sn.Push;
    let f = wc(v.location, w, p);
    n && n(f, w), (u = c() + 1);
    let m = Gd(f, u),
      _ = v.createHref(f);
    try {
      o.pushState(m, "", _);
    } catch (R) {
      if (R instanceof DOMException && R.name === "DataCloneError") throw R;
      i.location.assign(_);
    }
    s && a && a({ action: l, location: v.location, delta: 1 });
  }
  function g(w, p) {
    l = Sn.Replace;
    let f = wc(v.location, w, p);
    n && n(f, w), (u = c());
    let m = Gd(f, u),
      _ = v.createHref(f);
    o.replaceState(m, "", _),
      s && a && a({ action: l, location: v.location, delta: 0 });
  }
  function y(w) {
    let p = i.location.origin !== "null" ? i.location.origin : i.location.href,
      f = typeof w == "string" ? w : gy(w);
    return (
      we(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          f,
      ),
      new URL(f, p)
    );
  }
  let v = {
    get action() {
      return l;
    },
    get location() {
      return e(i, o);
    },
    listen(w) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Qd, h),
        (a = w),
        () => {
          i.removeEventListener(Qd, h), (a = null);
        }
      );
    },
    createHref(w) {
      return t(i, w);
    },
    createURL: y,
    encodeLocation(w) {
      let p = y(w);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: d,
    replace: g,
    go(w) {
      return o.go(w);
    },
  };
  return v;
}
var Xd;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Xd || (Xd = {}));
function BE(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? yi(t) : t,
    i = _y(r.pathname || "/", n);
  if (i == null) return null;
  let s = yy(e);
  zE(s);
  let o = null;
  for (let l = 0; o == null && l < s.length; ++l) o = YE(s[l], ew(i));
  return o;
}
function yy(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (s, o, l) => {
    let a = {
      relativePath: l === void 0 ? s.path || "" : l,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    a.relativePath.startsWith("/") &&
      (we(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = cr([r, a.relativePath]),
      c = n.concat(a);
    s.children &&
      s.children.length > 0 &&
      (we(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      yy(s.children, t, c, u)),
      !(s.path == null && !s.index) &&
        t.push({ path: u, score: GE(u, s.index), routesMeta: c });
  };
  return (
    e.forEach((s, o) => {
      var l;
      if (s.path === "" || !((l = s.path) != null && l.includes("?"))) i(s, o);
      else for (let a of vy(s.path)) i(s, o, a);
    }),
    t
  );
}
function vy(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let o = vy(r.join("/")),
    l = [];
  return (
    l.push(...o.map((a) => (a === "" ? s : [s, a].join("/")))),
    i && l.push(...o),
    l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function zE(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : XE(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const bE = /^:[\w-]+$/,
  HE = 3,
  WE = 2,
  KE = 1,
  qE = 10,
  QE = -2,
  Yd = (e) => e === "*";
function GE(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Yd) && (r += QE),
    t && (r += WE),
    n
      .filter((i) => !Yd(i))
      .reduce((i, s) => i + (bE.test(s) ? HE : s === "" ? KE : qE), r)
  );
}
function XE(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function YE(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    s = [];
  for (let o = 0; o < n.length; ++o) {
    let l = n[o],
      a = o === n.length - 1,
      u = i === "/" ? t : t.slice(i.length) || "/",
      c = JE(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: a },
        u,
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let h = l.route;
    s.push({
      params: r,
      pathname: cr([i, c.pathname]),
      pathnameBase: lw(cr([i, c.pathnameBase])),
      route: h,
    }),
      c.pathnameBase !== "/" && (i = cr([i, c.pathnameBase]));
  }
  return s;
}
function JE(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = ZE(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, "$1"),
    l = i.slice(1);
  return {
    params: r.reduce((u, c, h) => {
      let { paramName: d, isOptional: g } = c;
      if (d === "*") {
        let v = l[h] || "";
        o = s.slice(0, s.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const y = l[h];
      return g && !y ? (u[d] = void 0) : (u[d] = tw(y || "", d)), u;
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: e,
  };
}
function ZE(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Wh(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, l, a) => (
            r.push({ paramName: l, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (i += "\\/*$")
        : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function ew(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Wh(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function tw(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Wh(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ")."),
      ),
      e
    );
  }
}
function _y(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function nw(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? yi(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : rw(n, t)) : t,
    search: aw(r),
    hash: uw(i),
  };
}
function rw(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function au(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function iw(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function sw(e, t) {
  let n = iw(e);
  return t
    ? n.map((r, i) => (i === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function ow(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = yi(e))
    : ((i = Ts({}, e)),
      we(
        !i.pathname || !i.pathname.includes("?"),
        au("?", "pathname", "search", i),
      ),
      we(
        !i.pathname || !i.pathname.includes("#"),
        au("#", "pathname", "hash", i),
      ),
      we(!i.search || !i.search.includes("#"), au("#", "search", "hash", i)));
  let s = e === "" || i.pathname === "",
    o = s ? "/" : i.pathname,
    l;
  if (o == null) l = n;
  else {
    let h = t.length - 1;
    if (!r && o.startsWith("..")) {
      let d = o.split("/");
      for (; d[0] === ".."; ) d.shift(), (h -= 1);
      i.pathname = d.join("/");
    }
    l = h >= 0 ? t[h] : "/";
  }
  let a = nw(i, l),
    u = o && o !== "/" && o.endsWith("/"),
    c = (s || o === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"), a;
}
const cr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  lw = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  aw = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  uw = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function cw(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Ey = ["post", "put", "patch", "delete"];
new Set(Ey);
const hw = ["get", ...Ey];
new Set(hw);
/**
 * React Router v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Is() {
  return (
    (Is = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Is.apply(this, arguments)
  );
}
const Kh = C.createContext(null),
  fw = C.createContext(null),
  sa = C.createContext(null),
  oa = C.createContext(null),
  Cr = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  wy = C.createContext(null);
function la() {
  return C.useContext(oa) != null;
}
function Ty() {
  return la() || we(!1), C.useContext(oa).location;
}
function Iy(e) {
  C.useContext(sa).static || C.useLayoutEffect(e);
}
function qh() {
  let { isDataRoute: e } = C.useContext(Cr);
  return e ? Cw() : dw();
}
function dw() {
  la() || we(!1);
  let e = C.useContext(Kh),
    { basename: t, future: n, navigator: r } = C.useContext(sa),
    { matches: i } = C.useContext(Cr),
    { pathname: s } = Ty(),
    o = JSON.stringify(sw(i, n.v7_relativeSplatPath)),
    l = C.useRef(!1);
  return (
    Iy(() => {
      l.current = !0;
    }),
    C.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !l.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let h = ow(u, JSON.parse(o), s, c.relative === "path");
        e == null &&
          t !== "/" &&
          (h.pathname = h.pathname === "/" ? t : cr([t, h.pathname])),
          (c.replace ? r.replace : r.push)(h, c.state, c);
      },
      [t, r, o, s, e],
    )
  );
}
function pw() {
  let { matches: e } = C.useContext(Cr),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function mw(e, t) {
  return gw(e, t);
}
function gw(e, t, n, r) {
  la() || we(!1);
  let { navigator: i } = C.useContext(sa),
    { matches: s } = C.useContext(Cr),
    o = s[s.length - 1],
    l = o ? o.params : {};
  o && o.pathname;
  let a = o ? o.pathnameBase : "/";
  o && o.route;
  let u = Ty(),
    c;
  if (t) {
    var h;
    let w = typeof t == "string" ? yi(t) : t;
    a === "/" || ((h = w.pathname) != null && h.startsWith(a)) || we(!1),
      (c = w);
  } else c = u;
  let d = c.pathname || "/",
    g = a === "/" ? d : d.slice(a.length) || "/",
    y = BE(e, { pathname: g }),
    v = ww(
      y &&
        y.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, l, w.params),
            pathname: cr([
              a,
              i.encodeLocation
                ? i.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? a
                : cr([
                    a,
                    i.encodeLocation
                      ? i.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          }),
        ),
      s,
      n,
      r,
    );
  return t && v
    ? C.createElement(
        oa.Provider,
        {
          value: {
            location: Is(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c,
            ),
            navigationType: Sn.Pop,
          },
        },
        v,
      )
    : v;
}
function yw() {
  let e = Aw(),
    t = cw(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return C.createElement(
    C.Fragment,
    null,
    C.createElement("h2", null, "Unexpected Application Error!"),
    C.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? C.createElement("pre", { style: i }, n) : null,
    null,
  );
}
const vw = C.createElement(yw, null);
class _w extends C.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? C.createElement(
          Cr.Provider,
          { value: this.props.routeContext },
          C.createElement(wy.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function Ew(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = C.useContext(Kh);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    C.createElement(Cr.Provider, { value: t }, r)
  );
}
function ww(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s;
    if ((s = n) != null && s.errors) e = n.matches;
    else return null;
  }
  let o = e,
    l = (i = n) == null ? void 0 : i.errors;
  if (l != null) {
    let c = o.findIndex(
      (h) => h.route.id && (l == null ? void 0 : l[h.route.id]),
    );
    c >= 0 || we(!1), (o = o.slice(0, Math.min(o.length, c + 1)));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < o.length; c++) {
      let h = o[c];
      if (
        ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (u = c),
        h.route.id)
      ) {
        let { loaderData: d, errors: g } = n,
          y =
            h.route.loader &&
            d[h.route.id] === void 0 &&
            (!g || g[h.route.id] === void 0);
        if (h.route.lazy || y) {
          (a = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((c, h, d) => {
    let g,
      y = !1,
      v = null,
      w = null;
    n &&
      ((g = l && h.route.id ? l[h.route.id] : void 0),
      (v = h.route.errorElement || vw),
      a &&
        (u < 0 && d === 0
          ? (Rw("route-fallback", !1), (y = !0), (w = null))
          : u === d &&
            ((y = !0), (w = h.route.hydrateFallbackElement || null))));
    let p = t.concat(o.slice(0, d + 1)),
      f = () => {
        let m;
        return (
          g
            ? (m = v)
            : y
              ? (m = w)
              : h.route.Component
                ? (m = C.createElement(h.route.Component, null))
                : h.route.element
                  ? (m = h.route.element)
                  : (m = c),
          C.createElement(Ew, {
            match: h,
            routeContext: { outlet: c, matches: p, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (h.route.ErrorBoundary || h.route.errorElement || d === 0)
      ? C.createElement(_w, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: g,
          children: f(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : f();
  }, null);
}
var Sy = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Sy || {}),
  Tl = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Tl || {});
function Tw(e) {
  let t = C.useContext(Kh);
  return t || we(!1), t;
}
function Iw(e) {
  let t = C.useContext(fw);
  return t || we(!1), t;
}
function Sw(e) {
  let t = C.useContext(Cr);
  return t || we(!1), t;
}
function Ay(e) {
  let t = Sw(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || we(!1), n.route.id;
}
function Aw() {
  var e;
  let t = C.useContext(wy),
    n = Iw(Tl.UseRouteError),
    r = Ay(Tl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Cw() {
  let { router: e } = Tw(Sy.UseNavigateStable),
    t = Ay(Tl.UseNavigateStable),
    n = C.useRef(!1);
  return (
    Iy(() => {
      n.current = !0;
    }),
    C.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, Is({ fromRouteId: t }, s)));
      },
      [e, t],
    )
  );
}
const Jd = {};
function Rw(e, t, n) {
  !t && !Jd[e] && (Jd[e] = !0);
}
function Ui(e) {
  we(!1);
}
function Pw(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Sn.Pop,
    navigator: s,
    static: o = !1,
    future: l,
  } = e;
  la() && we(!1);
  let a = t.replace(/^\/*/, "/"),
    u = C.useMemo(
      () => ({
        basename: a,
        navigator: s,
        static: o,
        future: Is({ v7_relativeSplatPath: !1 }, l),
      }),
      [a, l, s, o],
    );
  typeof r == "string" && (r = yi(r));
  let {
      pathname: c = "/",
      search: h = "",
      hash: d = "",
      state: g = null,
      key: y = "default",
    } = r,
    v = C.useMemo(() => {
      let w = _y(c, a);
      return w == null
        ? null
        : {
            location: { pathname: w, search: h, hash: d, state: g, key: y },
            navigationType: i,
          };
    }, [a, c, h, d, g, y, i]);
  return v == null
    ? null
    : C.createElement(
        sa.Provider,
        { value: u },
        C.createElement(oa.Provider, { children: n, value: v }),
      );
}
function kw(e) {
  let { children: t, location: n } = e;
  return mw(Tc(t), n);
}
new Promise(() => {});
function Tc(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    C.Children.forEach(e, (r, i) => {
      if (!C.isValidElement(r)) return;
      let s = [...t, i];
      if (r.type === C.Fragment) {
        n.push.apply(n, Tc(r.props.children, s));
        return;
      }
      r.type !== Ui && we(!1), !r.props.index || !r.props.children || we(!1);
      let o = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = Tc(r.props.children, s)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const xw = "startTransition",
  Zd = R_[xw];
function Nw(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    s = C.useRef();
  s.current == null && (s.current = FE({ window: i, v5Compat: !0 }));
  let o = s.current,
    [l, a] = C.useState({ action: o.action, location: o.location }),
    { v7_startTransition: u } = r || {},
    c = C.useCallback(
      (h) => {
        u && Zd ? Zd(() => a(h)) : a(h);
      },
      [a, u],
    );
  return (
    C.useLayoutEffect(() => o.listen(c), [o, c]),
    C.createElement(Pw, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: o,
      future: r,
    })
  );
}
var ep;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(ep || (ep = {}));
var tp;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(tp || (tp = {}));
function Cy(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = Cy(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function An() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = Cy(e)) && (r && (r += " "), (r += t));
  return r;
}
const Ss = (e) => typeof e == "number" && !isNaN(e),
  hr = (e) => typeof e == "string",
  pt = (e) => typeof e == "function",
  Go = (e) => (hr(e) || pt(e) ? e : null),
  Ic = (e) => C.isValidElement(e) || hr(e) || pt(e) || Ss(e);
function Dw(e, t, n) {
  n === void 0 && (n = 300);
  const { scrollHeight: r, style: i } = e;
  requestAnimationFrame(() => {
    (i.minHeight = "initial"),
      (i.height = r + "px"),
      (i.transition = `all ${n}ms`),
      requestAnimationFrame(() => {
        (i.height = "0"), (i.padding = "0"), (i.margin = "0"), setTimeout(t, n);
      });
  });
}
function aa(e) {
  let {
    enter: t,
    exit: n,
    appendPosition: r = !1,
    collapse: i = !0,
    collapseDuration: s = 300,
  } = e;
  return function (o) {
    let {
      children: l,
      position: a,
      preventExitTransition: u,
      done: c,
      nodeRef: h,
      isIn: d,
      playToast: g,
    } = o;
    const y = r ? `${t}--${a}` : t,
      v = r ? `${n}--${a}` : n,
      w = C.useRef(0);
    return (
      C.useLayoutEffect(() => {
        const p = h.current,
          f = y.split(" "),
          m = (_) => {
            _.target === h.current &&
              (g(),
              p.removeEventListener("animationend", m),
              p.removeEventListener("animationcancel", m),
              w.current === 0 &&
                _.type !== "animationcancel" &&
                p.classList.remove(...f));
          };
        p.classList.add(...f),
          p.addEventListener("animationend", m),
          p.addEventListener("animationcancel", m);
      }, []),
      C.useEffect(() => {
        const p = h.current,
          f = () => {
            p.removeEventListener("animationend", f), i ? Dw(p, c, s) : c();
          };
        d ||
          (u
            ? f()
            : ((w.current = 1),
              (p.className += ` ${v}`),
              p.addEventListener("animationend", f)));
      }, [d]),
      Q.createElement(Q.Fragment, null, l)
    );
  };
}
function np(e, t) {
  return e != null
    ? {
        content: e.content,
        containerId: e.props.containerId,
        id: e.props.toastId,
        theme: e.props.theme,
        type: e.props.type,
        data: e.props.data || {},
        isLoading: e.props.isLoading,
        icon: e.props.icon,
        status: t,
      }
    : {};
}
const Je = new Map();
let As = [];
const Sc = new Set(),
  Ow = (e) => Sc.forEach((t) => t(e)),
  Ry = () => Je.size > 0;
function Py(e, t) {
  var n;
  if (t) return !((n = Je.get(t)) == null || !n.isToastActive(e));
  let r = !1;
  return (
    Je.forEach((i) => {
      i.isToastActive(e) && (r = !0);
    }),
    r
  );
}
function ky(e, t) {
  Ic(e) &&
    (Ry() || As.push({ content: e, options: t }),
    Je.forEach((n) => {
      n.buildToast(e, t);
    }));
}
function rp(e, t) {
  Je.forEach((n) => {
    t != null && t != null && t.containerId
      ? (t == null ? void 0 : t.containerId) === n.id &&
        n.toggle(e, t == null ? void 0 : t.id)
      : n.toggle(e, t == null ? void 0 : t.id);
  });
}
function Vw(e) {
  const {
    subscribe: t,
    getSnapshot: n,
    setProps: r,
  } = C.useRef(
    (function (s) {
      const o = s.containerId || 1;
      return {
        subscribe(l) {
          const a = (function (c, h, d) {
            let g = 1,
              y = 0,
              v = [],
              w = [],
              p = [],
              f = h;
            const m = new Map(),
              _ = new Set(),
              R = () => {
                (p = Array.from(m.values())), _.forEach((I) => I());
              },
              k = (I) => {
                (w = I == null ? [] : w.filter((O) => O !== I)), R();
              },
              P = (I) => {
                const {
                    toastId: O,
                    onOpen: L,
                    updateId: fe,
                    children: rt,
                  } = I.props,
                  wt = fe == null;
                I.staleId && m.delete(I.staleId),
                  m.set(O, I),
                  (w = [...w, I.props.toastId].filter(
                    (kt) => kt !== I.staleId,
                  )),
                  R(),
                  d(np(I, wt ? "added" : "updated")),
                  wt && pt(L) && L(C.isValidElement(rt) && rt.props);
              };
            return {
              id: c,
              props: f,
              observe: (I) => (_.add(I), () => _.delete(I)),
              toggle: (I, O) => {
                m.forEach((L) => {
                  (O != null && O !== L.props.toastId) ||
                    (pt(L.toggle) && L.toggle(I));
                });
              },
              removeToast: k,
              toasts: m,
              clearQueue: () => {
                (y -= v.length), (v = []);
              },
              buildToast: (I, O) => {
                if (
                  ((q) => {
                    let { containerId: xe, toastId: ve, updateId: it } = q;
                    const Ge = xe ? xe !== c : c !== 1,
                      jt = m.has(ve) && it == null;
                    return Ge || jt;
                  })(O)
                )
                  return;
                const {
                    toastId: L,
                    updateId: fe,
                    data: rt,
                    staleId: wt,
                    delay: kt,
                  } = O,
                  pn = () => {
                    k(L);
                  },
                  mn = fe == null;
                mn && y++;
                const ht = {
                  ...f,
                  style: f.toastStyle,
                  key: g++,
                  ...Object.fromEntries(
                    Object.entries(O).filter((q) => {
                      let [xe, ve] = q;
                      return ve != null;
                    }),
                  ),
                  toastId: L,
                  updateId: fe,
                  data: rt,
                  closeToast: pn,
                  isIn: !1,
                  className: Go(O.className || f.toastClassName),
                  bodyClassName: Go(O.bodyClassName || f.bodyClassName),
                  progressClassName: Go(
                    O.progressClassName || f.progressClassName,
                  ),
                  autoClose:
                    !O.isLoading &&
                    ((N = O.autoClose),
                    ($ = f.autoClose),
                    N === !1 || (Ss(N) && N > 0) ? N : $),
                  deleteToast() {
                    const q = m.get(L),
                      { onClose: xe, children: ve } = q.props;
                    pt(xe) && xe(C.isValidElement(ve) && ve.props),
                      d(np(q, "removed")),
                      m.delete(L),
                      y--,
                      y < 0 && (y = 0),
                      v.length > 0 ? P(v.shift()) : R();
                  },
                };
                var N, $;
                (ht.closeButton = f.closeButton),
                  O.closeButton === !1 || Ic(O.closeButton)
                    ? (ht.closeButton = O.closeButton)
                    : O.closeButton === !0 &&
                      (ht.closeButton = !Ic(f.closeButton) || f.closeButton);
                let F = I;
                C.isValidElement(I) && !hr(I.type)
                  ? (F = C.cloneElement(I, {
                      closeToast: pn,
                      toastProps: ht,
                      data: rt,
                    }))
                  : pt(I) &&
                    (F = I({ closeToast: pn, toastProps: ht, data: rt }));
                const K = { content: F, props: ht, staleId: wt };
                f.limit && f.limit > 0 && y > f.limit && mn
                  ? v.push(K)
                  : Ss(kt)
                    ? setTimeout(() => {
                        P(K);
                      }, kt)
                    : P(K);
              },
              setProps(I) {
                f = I;
              },
              setToggle: (I, O) => {
                m.get(I).toggle = O;
              },
              isToastActive: (I) => w.some((O) => O === I),
              getSnapshot: () => (f.newestOnTop ? p.reverse() : p),
            };
          })(o, s, Ow);
          Je.set(o, a);
          const u = a.observe(l);
          return (
            As.forEach((c) => ky(c.content, c.options)),
            (As = []),
            () => {
              u(), Je.delete(o);
            }
          );
        },
        setProps(l) {
          var a;
          (a = Je.get(o)) == null || a.setProps(l);
        },
        getSnapshot() {
          var l;
          return (l = Je.get(o)) == null ? void 0 : l.getSnapshot();
        },
      };
    })(e),
  ).current;
  r(e);
  const i = C.useSyncExternalStore(t, n, n);
  return {
    getToastToRender: function (s) {
      if (!i) return [];
      const o = new Map();
      return (
        i.forEach((l) => {
          const { position: a } = l.props;
          o.has(a) || o.set(a, []), o.get(a).push(l);
        }),
        Array.from(o, (l) => s(l[0], l[1]))
      );
    },
    isToastActive: Py,
    count: i == null ? void 0 : i.length,
  };
}
function Lw(e) {
  const [t, n] = C.useState(!1),
    [r, i] = C.useState(!1),
    s = C.useRef(null),
    o = C.useRef({
      start: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      didMove: !1,
    }).current,
    {
      autoClose: l,
      pauseOnHover: a,
      closeToast: u,
      onClick: c,
      closeOnClick: h,
    } = e;
  var d, g;
  function y() {
    n(!0);
  }
  function v() {
    n(!1);
  }
  function w(m) {
    const _ = s.current;
    o.canDrag &&
      _ &&
      ((o.didMove = !0),
      t && v(),
      (o.delta =
        e.draggableDirection === "x"
          ? m.clientX - o.start
          : m.clientY - o.start),
      o.start !== m.clientX && (o.canCloseOnClick = !1),
      (_.style.transform = `translate3d(${e.draggableDirection === "x" ? `${o.delta}px, var(--y)` : `0, calc(${o.delta}px + var(--y))`},0)`),
      (_.style.opacity = "" + (1 - Math.abs(o.delta / o.removalDistance))));
  }
  function p() {
    document.removeEventListener("pointermove", w),
      document.removeEventListener("pointerup", p);
    const m = s.current;
    if (o.canDrag && o.didMove && m) {
      if (((o.canDrag = !1), Math.abs(o.delta) > o.removalDistance))
        return i(!0), e.closeToast(), void e.collapseAll();
      (m.style.transition = "transform 0.2s, opacity 0.2s"),
        m.style.removeProperty("transform"),
        m.style.removeProperty("opacity");
    }
  }
  (g = Je.get(
    (d = { id: e.toastId, containerId: e.containerId, fn: n }).containerId || 1,
  )) == null || g.setToggle(d.id, d.fn),
    C.useEffect(() => {
      if (e.pauseOnFocusLoss)
        return (
          document.hasFocus() || v(),
          window.addEventListener("focus", y),
          window.addEventListener("blur", v),
          () => {
            window.removeEventListener("focus", y),
              window.removeEventListener("blur", v);
          }
        );
    }, [e.pauseOnFocusLoss]);
  const f = {
    onPointerDown: function (m) {
      if (e.draggable === !0 || e.draggable === m.pointerType) {
        (o.didMove = !1),
          document.addEventListener("pointermove", w),
          document.addEventListener("pointerup", p);
        const _ = s.current;
        (o.canCloseOnClick = !0),
          (o.canDrag = !0),
          (_.style.transition = "none"),
          e.draggableDirection === "x"
            ? ((o.start = m.clientX),
              (o.removalDistance = _.offsetWidth * (e.draggablePercent / 100)))
            : ((o.start = m.clientY),
              (o.removalDistance =
                (_.offsetHeight *
                  (e.draggablePercent === 80
                    ? 1.5 * e.draggablePercent
                    : e.draggablePercent)) /
                100));
      }
    },
    onPointerUp: function (m) {
      const {
        top: _,
        bottom: R,
        left: k,
        right: P,
      } = s.current.getBoundingClientRect();
      m.nativeEvent.type !== "touchend" &&
      e.pauseOnHover &&
      m.clientX >= k &&
      m.clientX <= P &&
      m.clientY >= _ &&
      m.clientY <= R
        ? v()
        : y();
    },
  };
  return (
    l && a && ((f.onMouseEnter = v), e.stacked || (f.onMouseLeave = y)),
    h &&
      (f.onClick = (m) => {
        c && c(m), o.canCloseOnClick && u();
      }),
    {
      playToast: y,
      pauseToast: v,
      isRunning: t,
      preventExitTransition: r,
      toastRef: s,
      eventHandlers: f,
    }
  );
}
function Mw(e) {
  let {
    delay: t,
    isRunning: n,
    closeToast: r,
    type: i = "default",
    hide: s,
    className: o,
    style: l,
    controlledProgress: a,
    progress: u,
    rtl: c,
    isIn: h,
    theme: d,
  } = e;
  const g = s || (a && u === 0),
    y = {
      ...l,
      animationDuration: `${t}ms`,
      animationPlayState: n ? "running" : "paused",
    };
  a && (y.transform = `scaleX(${u})`);
  const v = An(
      "Toastify__progress-bar",
      a
        ? "Toastify__progress-bar--controlled"
        : "Toastify__progress-bar--animated",
      `Toastify__progress-bar-theme--${d}`,
      `Toastify__progress-bar--${i}`,
      { "Toastify__progress-bar--rtl": c },
    ),
    w = pt(o) ? o({ rtl: c, type: i, defaultClassName: v }) : An(v, o),
    p = {
      [a && u >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
        a && u < 1
          ? null
          : () => {
              h && r();
            },
    };
  return Q.createElement(
    "div",
    { className: "Toastify__progress-bar--wrp", "data-hidden": g },
    Q.createElement("div", {
      className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${d} Toastify__progress-bar--${i}`,
    }),
    Q.createElement("div", {
      role: "progressbar",
      "aria-hidden": g ? "true" : "false",
      "aria-label": "notification timer",
      className: w,
      style: y,
      ...p,
    }),
  );
}
let $w = 1;
const xy = () => "" + $w++;
function Fw(e) {
  return e && (hr(e.toastId) || Ss(e.toastId)) ? e.toastId : xy();
}
function Yi(e, t) {
  return ky(e, t), t.toastId;
}
function Il(e, t) {
  return { ...t, type: (t && t.type) || e, toastId: Fw(t) };
}
function Io(e) {
  return (t, n) => Yi(t, Il(e, n));
}
function Y(e, t) {
  return Yi(e, Il("default", t));
}
(Y.loading = (e, t) =>
  Yi(
    e,
    Il("default", {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...t,
    }),
  )),
  (Y.promise = function (e, t, n) {
    let r,
      { pending: i, error: s, success: o } = t;
    i && (r = hr(i) ? Y.loading(i, n) : Y.loading(i.render, { ...n, ...i }));
    const l = {
        isLoading: null,
        autoClose: null,
        closeOnClick: null,
        closeButton: null,
        draggable: null,
      },
      a = (c, h, d) => {
        if (h == null) return void Y.dismiss(r);
        const g = { type: c, ...l, ...n, data: d },
          y = hr(h) ? { render: h } : h;
        return r ? Y.update(r, { ...g, ...y }) : Y(y.render, { ...g, ...y }), d;
      },
      u = pt(e) ? e() : e;
    return u.then((c) => a("success", o, c)).catch((c) => a("error", s, c)), u;
  }),
  (Y.success = Io("success")),
  (Y.info = Io("info")),
  (Y.error = Io("error")),
  (Y.warning = Io("warning")),
  (Y.warn = Y.warning),
  (Y.dark = (e, t) => Yi(e, Il("default", { theme: "dark", ...t }))),
  (Y.dismiss = function (e) {
    (function (t) {
      var n;
      if (Ry()) {
        if (t == null || hr((n = t)) || Ss(n))
          Je.forEach((i) => {
            i.removeToast(t);
          });
        else if (t && ("containerId" in t || "id" in t)) {
          var r;
          ((r = Je.get(t.containerId)) != null && r.removeToast(t.id)) ||
            Je.forEach((i) => {
              i.removeToast(t.id);
            });
        }
      } else As = As.filter((i) => t != null && i.options.toastId !== t);
    })(e);
  }),
  (Y.clearWaitingQueue = function (e) {
    e === void 0 && (e = {}),
      Je.forEach((t) => {
        !t.props.limit ||
          (e.containerId && t.id !== e.containerId) ||
          t.clearQueue();
      });
  }),
  (Y.isActive = Py),
  (Y.update = function (e, t) {
    t === void 0 && (t = {});
    const n = ((r, i) => {
      var s;
      let { containerId: o } = i;
      return (s = Je.get(o || 1)) == null ? void 0 : s.toasts.get(r);
    })(e, t);
    if (n) {
      const { props: r, content: i } = n,
        s = { delay: 100, ...r, ...t, toastId: t.toastId || e, updateId: xy() };
      s.toastId !== e && (s.staleId = e);
      const o = s.render || i;
      delete s.render, Yi(o, s);
    }
  }),
  (Y.done = (e) => {
    Y.update(e, { progress: 1 });
  }),
  (Y.onChange = function (e) {
    return (
      Sc.add(e),
      () => {
        Sc.delete(e);
      }
    );
  }),
  (Y.play = (e) => rp(!0, e)),
  (Y.pause = (e) => rp(!1, e));
const Uw = typeof window < "u" ? C.useLayoutEffect : C.useEffect,
  So = (e) => {
    let { theme: t, type: n, isLoading: r, ...i } = e;
    return Q.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "100%",
      height: "100%",
      fill:
        t === "colored" ? "currentColor" : `var(--toastify-icon-color-${n})`,
      ...i,
    });
  },
  uu = {
    info: function (e) {
      return Q.createElement(
        So,
        { ...e },
        Q.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
        }),
      );
    },
    warning: function (e) {
      return Q.createElement(
        So,
        { ...e },
        Q.createElement("path", {
          d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
        }),
      );
    },
    success: function (e) {
      return Q.createElement(
        So,
        { ...e },
        Q.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
        }),
      );
    },
    error: function (e) {
      return Q.createElement(
        So,
        { ...e },
        Q.createElement("path", {
          d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
        }),
      );
    },
    spinner: function () {
      return Q.createElement("div", { className: "Toastify__spinner" });
    },
  },
  jw = (e) => {
    const {
        isRunning: t,
        preventExitTransition: n,
        toastRef: r,
        eventHandlers: i,
        playToast: s,
      } = Lw(e),
      {
        closeButton: o,
        children: l,
        autoClose: a,
        onClick: u,
        type: c,
        hideProgressBar: h,
        closeToast: d,
        transition: g,
        position: y,
        className: v,
        style: w,
        bodyClassName: p,
        bodyStyle: f,
        progressClassName: m,
        progressStyle: _,
        updateId: R,
        role: k,
        progress: P,
        rtl: I,
        toastId: O,
        deleteToast: L,
        isIn: fe,
        isLoading: rt,
        closeOnClick: wt,
        theme: kt,
      } = e,
      pn = An(
        "Toastify__toast",
        `Toastify__toast-theme--${kt}`,
        `Toastify__toast--${c}`,
        { "Toastify__toast--rtl": I },
        { "Toastify__toast--close-on-click": wt },
      ),
      mn = pt(v)
        ? v({ rtl: I, position: y, type: c, defaultClassName: pn })
        : An(pn, v),
      ht = (function (K) {
        let { theme: q, type: xe, isLoading: ve, icon: it } = K,
          Ge = null;
        const jt = { theme: q, type: xe };
        return (
          it === !1 ||
            (pt(it)
              ? (Ge = it({ ...jt, isLoading: ve }))
              : C.isValidElement(it)
                ? (Ge = C.cloneElement(it, jt))
                : ve
                  ? (Ge = uu.spinner())
                  : ((c_) => c_ in uu)(xe) && (Ge = uu[xe](jt))),
          Ge
        );
      })(e),
      N = !!P || !a,
      $ = { closeToast: d, type: c, theme: kt };
    let F = null;
    return (
      o === !1 ||
        (F = pt(o)
          ? o($)
          : C.isValidElement(o)
            ? C.cloneElement(o, $)
            : (function (K) {
                let { closeToast: q, theme: xe, ariaLabel: ve = "close" } = K;
                return Q.createElement(
                  "button",
                  {
                    className: `Toastify__close-button Toastify__close-button--${xe}`,
                    type: "button",
                    onClick: (it) => {
                      it.stopPropagation(), q(it);
                    },
                    "aria-label": ve,
                  },
                  Q.createElement(
                    "svg",
                    { "aria-hidden": "true", viewBox: "0 0 14 16" },
                    Q.createElement("path", {
                      fillRule: "evenodd",
                      d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
                    }),
                  ),
                );
              })($)),
      Q.createElement(
        g,
        {
          isIn: fe,
          done: L,
          position: y,
          preventExitTransition: n,
          nodeRef: r,
          playToast: s,
        },
        Q.createElement(
          "div",
          {
            id: O,
            onClick: u,
            "data-in": fe,
            className: mn,
            ...i,
            style: w,
            ref: r,
          },
          Q.createElement(
            "div",
            {
              ...(fe && { role: k }),
              className: pt(p) ? p({ type: c }) : An("Toastify__toast-body", p),
              style: f,
            },
            ht != null &&
              Q.createElement(
                "div",
                {
                  className: An("Toastify__toast-icon", {
                    "Toastify--animate-icon Toastify__zoom-enter": !rt,
                  }),
                },
                ht,
              ),
            Q.createElement("div", null, l),
          ),
          F,
          Q.createElement(Mw, {
            ...(R && !N ? { key: `pb-${R}` } : {}),
            rtl: I,
            theme: kt,
            delay: a,
            isRunning: t,
            isIn: fe,
            closeToast: d,
            hide: h,
            type: c,
            style: _,
            className: m,
            controlledProgress: N,
            progress: P || 0,
          }),
        ),
      )
    );
  },
  ua = function (e, t) {
    return (
      t === void 0 && (t = !1),
      {
        enter: `Toastify--animate Toastify__${e}-enter`,
        exit: `Toastify--animate Toastify__${e}-exit`,
        appendPosition: t,
      }
    );
  },
  Bw = aa(ua("bounce", !0));
aa(ua("slide", !0));
aa(ua("zoom"));
aa(ua("flip"));
const zw = {
  position: "top-right",
  transition: Bw,
  autoClose: 5e3,
  closeButton: !0,
  pauseOnHover: !0,
  pauseOnFocusLoss: !0,
  draggable: "touch",
  draggablePercent: 80,
  draggableDirection: "x",
  role: "alert",
  theme: "light",
};
function bw(e) {
  let t = { ...zw, ...e };
  const n = e.stacked,
    [r, i] = C.useState(!0),
    s = C.useRef(null),
    { getToastToRender: o, isToastActive: l, count: a } = Vw(t),
    { className: u, style: c, rtl: h, containerId: d } = t;
  function g(v) {
    const w = An(
      "Toastify__toast-container",
      `Toastify__toast-container--${v}`,
      { "Toastify__toast-container--rtl": h },
    );
    return pt(u)
      ? u({ position: v, rtl: h, defaultClassName: w })
      : An(w, Go(u));
  }
  function y() {
    n && (i(!0), Y.play());
  }
  return (
    Uw(() => {
      if (n) {
        var v;
        const w = s.current.querySelectorAll('[data-in="true"]'),
          p = 12,
          f = (v = t.position) == null ? void 0 : v.includes("top");
        let m = 0,
          _ = 0;
        Array.from(w)
          .reverse()
          .forEach((R, k) => {
            const P = R;
            P.classList.add("Toastify__toast--stacked"),
              k > 0 && (P.dataset.collapsed = `${r}`),
              P.dataset.pos || (P.dataset.pos = f ? "top" : "bot");
            const I = m * (r ? 0.2 : 1) + (r ? 0 : p * k);
            P.style.setProperty("--y", `${f ? I : -1 * I}px`),
              P.style.setProperty("--g", `${p}`),
              P.style.setProperty("--s", "" + (1 - (r ? _ : 0))),
              (m += P.offsetHeight),
              (_ += 0.025);
          });
      }
    }, [r, a, n]),
    Q.createElement(
      "div",
      {
        ref: s,
        className: "Toastify",
        id: d,
        onMouseEnter: () => {
          n && (i(!1), Y.pause());
        },
        onMouseLeave: y,
      },
      o((v, w) => {
        const p = w.length ? { ...c } : { ...c, pointerEvents: "none" };
        return Q.createElement(
          "div",
          { className: g(v), style: p, key: `container-${v}` },
          w.map((f) => {
            let { content: m, props: _ } = f;
            return Q.createElement(
              jw,
              {
                ..._,
                stacked: n,
                collapseAll: y,
                isIn: l(_.toastId, _.containerId),
                style: _.style,
                key: `toast-${_.key}`,
              },
              m,
            );
          }),
        );
      }),
    )
  );
}
const Hw = "/assets/order-filler-38LJDFAt.svg",
  Ww = "/assets/ComingSoonBlur-WJN-8Lqq.png",
  Kw = "/assets/twc_logo-1ZHLF6J-.svg",
  qw = "/assets/ig-logo-bgJllQsU.png",
  ca = () => {
    const e = qh(),
      t = () => {
        Y.info("Coming soon", {
          position: "top-center",
          autoClose: 5e3,
          hideProgressBar: !1,
          closeOnClick: !0,
          pauseOnHover: !0,
          draggable: !0,
          progress: void 0,
          theme: "light",
          transition: Bounce,
        });
      };
    return E.jsxs("nav", {
      children: [
        E.jsx("a", {
          href: "/",
          onClick: () => e("/"),
          children: E.jsx("img", {
            src: Kw,
            alt: "TWC logo",
            className: "logo-img",
          }),
        }),
        E.jsxs("ul", {
          children: [
            E.jsx("li", {
              children: E.jsx("a", { href: "#", onClick: t, children: "Men" }),
            }),
            E.jsx("li", {
              children: E.jsx("a", { href: "#", children: "Women" }),
            }),
            E.jsx("li", {
              children: E.jsx("a", { href: "#", children: "Blog" }),
            }),
            E.jsx("li", {
              children: E.jsx("a", { href: "#", children: "Originals" }),
            }),
            E.jsx("li", {
              children: E.jsx("a", {
                href: "#",
                children: "Boutique Boulevard",
              }),
            }),
            E.jsx("li", {
              children: E.jsx("a", { href: "#", children: "Rentals" }),
            }),
            E.jsx("li", {
              children: E.jsx("a", {
                href: "/bulk-order",
                onClick: () => e("/bulk-order"),
                children: "College Merch",
              }),
            }),
          ],
        }),
        E.jsx(bw, {
          position: "top-center",
          autoClose: 5e3,
          hideProgressBar: !1,
          newestOnTop: !0,
          closeOnClick: !0,
          rtl: !1,
          pauseOnFocusLoss: !0,
          draggable: !0,
          pauseOnHover: !0,
          theme: "light",
          "transition:Bounce": !0,
        }),
      ],
    });
  },
  Qw = () => {
    const e = qh();
    return E.jsxs(E.Fragment, {
      children: [
        E.jsx(ca, {}),
        E.jsx("grid-body", {
          children: E.jsxs("grid-container", {
            children: [
              E.jsx("h1", { children: "Categories" }),
              E.jsxs("grid-items", {
                children: [
                  E.jsxs("grid-item", {
                    children: [
                      E.jsx("img", {
                        src: "https://yourdesignstore.s3.amazonaws.com/uploads/yds/productImages/full/1629717737612384e9619ceYDS_Product_4@2x.jpg",
                        alt: "",
                        className: "grid-tile",
                      }),
                      E.jsx("grid-item-overlay", {
                        className: "grid-item-overlay",
                      }),
                      E.jsx("button", {
                        className: "order-button",
                        onClick: () => e("/order-form/Varsity"),
                        children: "Varsities",
                      }),
                    ],
                  }),
                  E.jsxs("grid-item", {
                    children: [
                      E.jsx("img", {
                        src: "https://5.imimg.com/data5/ZZ/CZ/GG/SELLER-40281611/plain-black-hoodie.jpg",
                        alt: "",
                        className: "grid-tile",
                      }),
                      E.jsx("grid-item-overlay", {}),
                      E.jsx("button", {
                        className: "order-button",
                        onClick: () => e("/order-form/Hoodie"),
                        children: "Hoodies",
                      }),
                    ],
                  }),
                  E.jsxs("grid-item", {
                    children: [
                      E.jsx("img", {
                        src: "https://5.imimg.com/data5/SELLER/Default/2023/10/353189446/XC/DF/LD/1044551/men-plain-collar-black-polo-t-shirts.jpg",
                        alt: "",
                        className: "grid-tile",
                      }),
                      E.jsx("grid-item-overlay", {}),
                      E.jsx("button", {
                        className: "order-button",
                        onClick: () => e("/order-form/polo"),
                        children: "Polos",
                      }),
                    ],
                  }),
                  E.jsxs("grid-item", {
                    children: [
                      E.jsx("img", {
                        src: "https://i.pinimg.com/originals/c0/12/af/c012af0a0bf232e9d5b6f776e78cf8fc.png",
                        alt: "",
                        className: "grid-tile",
                      }),
                      E.jsx("grid-item-overlay", {}),
                      E.jsx("button", {
                        className: "order-button",
                        onClick: () => e("/order-form/round-necks"),
                        children: "Round-Necks",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  };
var ip = {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ny = function (e) {
    const t = [];
    let n = 0;
    for (let r = 0; r < e.length; r++) {
      let i = e.charCodeAt(r);
      i < 128
        ? (t[n++] = i)
        : i < 2048
          ? ((t[n++] = (i >> 6) | 192), (t[n++] = (i & 63) | 128))
          : (i & 64512) === 55296 &&
              r + 1 < e.length &&
              (e.charCodeAt(r + 1) & 64512) === 56320
            ? ((i = 65536 + ((i & 1023) << 10) + (e.charCodeAt(++r) & 1023)),
              (t[n++] = (i >> 18) | 240),
              (t[n++] = ((i >> 12) & 63) | 128),
              (t[n++] = ((i >> 6) & 63) | 128),
              (t[n++] = (i & 63) | 128))
            : ((t[n++] = (i >> 12) | 224),
              (t[n++] = ((i >> 6) & 63) | 128),
              (t[n++] = (i & 63) | 128));
    }
    return t;
  },
  Gw = function (e) {
    const t = [];
    let n = 0,
      r = 0;
    for (; n < e.length; ) {
      const i = e[n++];
      if (i < 128) t[r++] = String.fromCharCode(i);
      else if (i > 191 && i < 224) {
        const s = e[n++];
        t[r++] = String.fromCharCode(((i & 31) << 6) | (s & 63));
      } else if (i > 239 && i < 365) {
        const s = e[n++],
          o = e[n++],
          l = e[n++],
          a =
            (((i & 7) << 18) | ((s & 63) << 12) | ((o & 63) << 6) | (l & 63)) -
            65536;
        (t[r++] = String.fromCharCode(55296 + (a >> 10))),
          (t[r++] = String.fromCharCode(56320 + (a & 1023)));
      } else {
        const s = e[n++],
          o = e[n++];
        t[r++] = String.fromCharCode(
          ((i & 15) << 12) | ((s & 63) << 6) | (o & 63),
        );
      }
    }
    return t.join("");
  },
  Dy = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(e, t) {
      if (!Array.isArray(e))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let i = 0; i < e.length; i += 3) {
        const s = e[i],
          o = i + 1 < e.length,
          l = o ? e[i + 1] : 0,
          a = i + 2 < e.length,
          u = a ? e[i + 2] : 0,
          c = s >> 2,
          h = ((s & 3) << 4) | (l >> 4);
        let d = ((l & 15) << 2) | (u >> 6),
          g = u & 63;
        a || ((g = 64), o || (d = 64)), r.push(n[c], n[h], n[d], n[g]);
      }
      return r.join("");
    },
    encodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? btoa(e)
        : this.encodeByteArray(Ny(e), t);
    },
    decodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? atob(e)
        : Gw(this.decodeStringToByteArray(e, t));
    },
    decodeStringToByteArray(e, t) {
      this.init_();
      const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let i = 0; i < e.length; ) {
        const s = n[e.charAt(i++)],
          l = i < e.length ? n[e.charAt(i)] : 0;
        ++i;
        const u = i < e.length ? n[e.charAt(i)] : 64;
        ++i;
        const h = i < e.length ? n[e.charAt(i)] : 64;
        if ((++i, s == null || l == null || u == null || h == null))
          throw new Xw();
        const d = (s << 2) | (l >> 4);
        if ((r.push(d), u !== 64)) {
          const g = ((l << 4) & 240) | (u >> 2);
          if ((r.push(g), h !== 64)) {
            const y = ((u << 6) & 192) | h;
            r.push(y);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let e = 0; e < this.ENCODED_VALS.length; e++)
          (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
            (this.charToByteMap_[this.byteToCharMap_[e]] = e),
            (this.byteToCharMapWebSafe_[e] =
              this.ENCODED_VALS_WEBSAFE.charAt(e)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e),
            e >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e));
      }
    },
  };
class Xw extends Error {
  constructor() {
    super(...arguments), (this.name = "DecodeBase64StringError");
  }
}
const Yw = function (e) {
    const t = Ny(e);
    return Dy.encodeByteArray(t, !0);
  },
  Sl = function (e) {
    return Yw(e).replace(/\./g, "");
  },
  Jw = function (e) {
    try {
      return Dy.decodeString(e, !0);
    } catch (t) {
      console.error("base64Decode failed: ", t);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Zw() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const eT = () => Zw().__FIREBASE_DEFAULTS__,
  tT = () => {
    if (typeof process > "u" || typeof ip > "u") return;
    const e = ip.__FIREBASE_DEFAULTS__;
    if (e) return JSON.parse(e);
  },
  nT = () => {
    if (typeof document > "u") return;
    let e;
    try {
      e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const t = e && Jw(e[1]);
    return t && JSON.parse(t);
  },
  Qh = () => {
    try {
      return eT() || tT() || nT();
    } catch (e) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
      return;
    }
  },
  rT = (e) => {
    var t, n;
    return (n =
      (t = Qh()) === null || t === void 0 ? void 0 : t.emulatorHosts) ===
      null || n === void 0
      ? void 0
      : n[e];
  },
  Oy = (e) => {
    const t = rT(e);
    if (!t) return;
    const n = t.lastIndexOf(":");
    if (n <= 0 || n + 1 === t.length)
      throw new Error(`Invalid host ${t} with no separate hostname and port!`);
    const r = parseInt(t.substring(n + 1), 10);
    return t[0] === "[" ? [t.substring(1, n - 1), r] : [t.substring(0, n), r];
  },
  Vy = () => {
    var e;
    return (e = Qh()) === null || e === void 0 ? void 0 : e.config;
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iT {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((t, n) => {
        (this.resolve = t), (this.reject = n);
      }));
  }
  wrapCallback(t) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r),
        typeof t == "function" &&
          (this.promise.catch(() => {}), t.length === 1 ? t(n) : t(n, r));
    };
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ly(e, t) {
  if (e.uid)
    throw new Error(
      'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.',
    );
  const n = { alg: "none", type: "JWT" },
    r = t || "demo-project",
    i = e.iat || 0,
    s = e.sub || e.user_id;
  if (!s)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  const o = Object.assign(
    {
      iss: `https://securetoken.google.com/${r}`,
      aud: r,
      iat: i,
      exp: i + 3600,
      auth_time: i,
      sub: s,
      user_id: s,
      firebase: { sign_in_provider: "custom", identities: {} },
    },
    e,
  );
  return [Sl(JSON.stringify(n)), Sl(JSON.stringify(o)), ""].join(".");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Al() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function sT() {
  var e;
  const t = (e = Qh()) === null || e === void 0 ? void 0 : e.forceEnvironment;
  if (t === "node") return !0;
  if (t === "browser") return !1;
  try {
    return (
      Object.prototype.toString.call(global.process) === "[object process]"
    );
  } catch {
    return !1;
  }
}
function oT() {
  return (
    !sT() &&
    navigator.userAgent.includes("Safari") &&
    !navigator.userAgent.includes("Chrome")
  );
}
function My() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function lT() {
  return new Promise((e, t) => {
    try {
      let n = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module",
        i = self.indexedDB.open(r);
      (i.onsuccess = () => {
        i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0);
      }),
        (i.onupgradeneeded = () => {
          n = !1;
        }),
        (i.onerror = () => {
          var s;
          t(
            ((s = i.error) === null || s === void 0 ? void 0 : s.message) || "",
          );
        });
    } catch (n) {
      t(n);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const aT = "FirebaseError";
class Rr extends Error {
  constructor(t, n, r) {
    super(n),
      (this.code = t),
      (this.customData = r),
      (this.name = aT),
      Object.setPrototypeOf(this, Rr.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, $y.prototype.create);
  }
}
class $y {
  constructor(t, n, r) {
    (this.service = t), (this.serviceName = n), (this.errors = r);
  }
  create(t, ...n) {
    const r = n[0] || {},
      i = `${this.service}/${t}`,
      s = this.errors[t],
      o = s ? uT(s, r) : "Error",
      l = `${this.serviceName}: ${o} (${i}).`;
    return new Rr(i, l, r);
  }
}
function uT(e, t) {
  return e.replace(cT, (n, r) => {
    const i = t[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const cT = /\{\$([^}]+)}/g;
function Ac(e, t) {
  if (e === t) return !0;
  const n = Object.keys(e),
    r = Object.keys(t);
  for (const i of n) {
    if (!r.includes(i)) return !1;
    const s = e[i],
      o = t[i];
    if (sp(s) && sp(o)) {
      if (!Ac(s, o)) return !1;
    } else if (s !== o) return !1;
  }
  for (const i of r) if (!n.includes(i)) return !1;
  return !0;
}
function sp(e) {
  return e !== null && typeof e == "object";
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Bn(e) {
  return e && e._delegate ? e._delegate : e;
}
class li {
  constructor(t, n, r) {
    (this.name = t),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(t) {
    return (this.instantiationMode = t), this;
  }
  setMultipleInstances(t) {
    return (this.multipleInstances = t), this;
  }
  setServiceProps(t) {
    return (this.serviceProps = t), this;
  }
  setInstanceCreatedCallback(t) {
    return (this.onInstanceCreated = t), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Zn = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hT {
  constructor(t, n) {
    (this.name = t),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(t) {
    const n = this.normalizeInstanceIdentifier(t);
    if (!this.instancesDeferred.has(n)) {
      const r = new iT();
      if (
        (this.instancesDeferred.set(n, r),
        this.isInitialized(n) || this.shouldAutoInitialize())
      )
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: n });
          i && r.resolve(i);
        } catch {}
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(t) {
    var n;
    const r = this.normalizeInstanceIdentifier(
        t == null ? void 0 : t.identifier,
      ),
      i =
        (n = t == null ? void 0 : t.optional) !== null && n !== void 0 ? n : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r });
      } catch (s) {
        if (i) return null;
        throw s;
      }
    else {
      if (i) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(t) {
    if (t.name !== this.name)
      throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = t), !!this.shouldAutoInitialize())) {
      if (dT(t))
        try {
          this.getOrInitializeService({ instanceIdentifier: Zn });
        } catch {}
      for (const [n, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(n);
        try {
          const s = this.getOrInitializeService({ instanceIdentifier: i });
          r.resolve(s);
        } catch {}
      }
    }
  }
  clearInstance(t = Zn) {
    this.instancesDeferred.delete(t),
      this.instancesOptions.delete(t),
      this.instances.delete(t);
  }
  async delete() {
    const t = Array.from(this.instances.values());
    await Promise.all([
      ...t.filter((n) => "INTERNAL" in n).map((n) => n.INTERNAL.delete()),
      ...t.filter((n) => "_delete" in n).map((n) => n._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(t = Zn) {
    return this.instances.has(t);
  }
  getOptions(t = Zn) {
    return this.instancesOptions.get(t) || {};
  }
  initialize(t = {}) {
    const { options: n = {} } = t,
      r = this.normalizeInstanceIdentifier(t.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({
      instanceIdentifier: r,
      options: n,
    });
    for (const [s, o] of this.instancesDeferred.entries()) {
      const l = this.normalizeInstanceIdentifier(s);
      r === l && o.resolve(i);
    }
    return i;
  }
  onInit(t, n) {
    var r;
    const i = this.normalizeInstanceIdentifier(n),
      s =
        (r = this.onInitCallbacks.get(i)) !== null && r !== void 0
          ? r
          : new Set();
    s.add(t), this.onInitCallbacks.set(i, s);
    const o = this.instances.get(i);
    return (
      o && t(o, i),
      () => {
        s.delete(t);
      }
    );
  }
  invokeOnInitCallbacks(t, n) {
    const r = this.onInitCallbacks.get(n);
    if (r)
      for (const i of r)
        try {
          i(t, n);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: t, options: n = {} }) {
    let r = this.instances.get(t);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: fT(t),
        options: n,
      })),
      this.instances.set(t, r),
      this.instancesOptions.set(t, n),
      this.invokeOnInitCallbacks(r, t),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, t, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(t = Zn) {
    return this.component ? (this.component.multipleInstances ? t : Zn) : t;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function fT(e) {
  return e === Zn ? void 0 : e;
}
function dT(e) {
  return e.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class pT {
  constructor(t) {
    (this.name = t), (this.providers = new Map());
  }
  addComponent(t) {
    const n = this.getProvider(t.name);
    if (n.isComponentSet())
      throw new Error(
        `Component ${t.name} has already been registered with ${this.name}`,
      );
    n.setComponent(t);
  }
  addOrOverwriteComponent(t) {
    this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name),
      this.addComponent(t);
  }
  getProvider(t) {
    if (this.providers.has(t)) return this.providers.get(t);
    const n = new hT(t, this);
    return this.providers.set(t, n), n;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var H;
(function (e) {
  (e[(e.DEBUG = 0)] = "DEBUG"),
    (e[(e.VERBOSE = 1)] = "VERBOSE"),
    (e[(e.INFO = 2)] = "INFO"),
    (e[(e.WARN = 3)] = "WARN"),
    (e[(e.ERROR = 4)] = "ERROR"),
    (e[(e.SILENT = 5)] = "SILENT");
})(H || (H = {}));
const mT = {
    debug: H.DEBUG,
    verbose: H.VERBOSE,
    info: H.INFO,
    warn: H.WARN,
    error: H.ERROR,
    silent: H.SILENT,
  },
  gT = H.INFO,
  yT = {
    [H.DEBUG]: "log",
    [H.VERBOSE]: "log",
    [H.INFO]: "info",
    [H.WARN]: "warn",
    [H.ERROR]: "error",
  },
  vT = (e, t, ...n) => {
    if (t < e.logLevel) return;
    const r = new Date().toISOString(),
      i = yT[t];
    if (i) console[i](`[${r}]  ${e.name}:`, ...n);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${t})`,
      );
  };
class Fy {
  constructor(t) {
    (this.name = t),
      (this._logLevel = gT),
      (this._logHandler = vT),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(t) {
    if (!(t in H))
      throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
    this._logLevel = t;
  }
  setLogLevel(t) {
    this._logLevel = typeof t == "string" ? mT[t] : t;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(t) {
    if (typeof t != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = t;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(t) {
    this._userLogHandler = t;
  }
  debug(...t) {
    this._userLogHandler && this._userLogHandler(this, H.DEBUG, ...t),
      this._logHandler(this, H.DEBUG, ...t);
  }
  log(...t) {
    this._userLogHandler && this._userLogHandler(this, H.VERBOSE, ...t),
      this._logHandler(this, H.VERBOSE, ...t);
  }
  info(...t) {
    this._userLogHandler && this._userLogHandler(this, H.INFO, ...t),
      this._logHandler(this, H.INFO, ...t);
  }
  warn(...t) {
    this._userLogHandler && this._userLogHandler(this, H.WARN, ...t),
      this._logHandler(this, H.WARN, ...t);
  }
  error(...t) {
    this._userLogHandler && this._userLogHandler(this, H.ERROR, ...t),
      this._logHandler(this, H.ERROR, ...t);
  }
}
const _T = (e, t) => t.some((n) => e instanceof n);
let op, lp;
function ET() {
  return (
    op ||
    (op = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function wT() {
  return (
    lp ||
    (lp = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const Uy = new WeakMap(),
  Cc = new WeakMap(),
  jy = new WeakMap(),
  cu = new WeakMap(),
  Gh = new WeakMap();
function TT(e) {
  const t = new Promise((n, r) => {
    const i = () => {
        e.removeEventListener("success", s), e.removeEventListener("error", o);
      },
      s = () => {
        n(Vn(e.result)), i();
      },
      o = () => {
        r(e.error), i();
      };
    e.addEventListener("success", s), e.addEventListener("error", o);
  });
  return (
    t
      .then((n) => {
        n instanceof IDBCursor && Uy.set(n, e);
      })
      .catch(() => {}),
    Gh.set(t, e),
    t
  );
}
function IT(e) {
  if (Cc.has(e)) return;
  const t = new Promise((n, r) => {
    const i = () => {
        e.removeEventListener("complete", s),
          e.removeEventListener("error", o),
          e.removeEventListener("abort", o);
      },
      s = () => {
        n(), i();
      },
      o = () => {
        r(e.error || new DOMException("AbortError", "AbortError")), i();
      };
    e.addEventListener("complete", s),
      e.addEventListener("error", o),
      e.addEventListener("abort", o);
  });
  Cc.set(e, t);
}
let Rc = {
  get(e, t, n) {
    if (e instanceof IDBTransaction) {
      if (t === "done") return Cc.get(e);
      if (t === "objectStoreNames") return e.objectStoreNames || jy.get(e);
      if (t === "store")
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0]);
    }
    return Vn(e[t]);
  },
  set(e, t, n) {
    return (e[t] = n), !0;
  },
  has(e, t) {
    return e instanceof IDBTransaction && (t === "done" || t === "store")
      ? !0
      : t in e;
  },
};
function ST(e) {
  Rc = e(Rc);
}
function AT(e) {
  return e === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (t, ...n) {
        const r = e.call(hu(this), t, ...n);
        return jy.set(r, t.sort ? t.sort() : [t]), Vn(r);
      }
    : wT().includes(e)
      ? function (...t) {
          return e.apply(hu(this), t), Vn(Uy.get(this));
        }
      : function (...t) {
          return Vn(e.apply(hu(this), t));
        };
}
function CT(e) {
  return typeof e == "function"
    ? AT(e)
    : (e instanceof IDBTransaction && IT(e),
      _T(e, ET()) ? new Proxy(e, Rc) : e);
}
function Vn(e) {
  if (e instanceof IDBRequest) return TT(e);
  if (cu.has(e)) return cu.get(e);
  const t = CT(e);
  return t !== e && (cu.set(e, t), Gh.set(t, e)), t;
}
const hu = (e) => Gh.get(e);
function RT(e, t, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) {
  const o = indexedDB.open(e, t),
    l = Vn(o);
  return (
    r &&
      o.addEventListener("upgradeneeded", (a) => {
        r(Vn(o.result), a.oldVersion, a.newVersion, Vn(o.transaction), a);
      }),
    n && o.addEventListener("blocked", (a) => n(a.oldVersion, a.newVersion, a)),
    l
      .then((a) => {
        s && a.addEventListener("close", () => s()),
          i &&
            a.addEventListener("versionchange", (u) =>
              i(u.oldVersion, u.newVersion, u),
            );
      })
      .catch(() => {}),
    l
  );
}
const PT = ["get", "getKey", "getAll", "getAllKeys", "count"],
  kT = ["put", "add", "delete", "clear"],
  fu = new Map();
function ap(e, t) {
  if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string")) return;
  if (fu.get(t)) return fu.get(t);
  const n = t.replace(/FromIndex$/, ""),
    r = t !== n,
    i = kT.includes(n);
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(i || PT.includes(n))
  )
    return;
  const s = async function (o, ...l) {
    const a = this.transaction(o, i ? "readwrite" : "readonly");
    let u = a.store;
    return (
      r && (u = u.index(l.shift())),
      (await Promise.all([u[n](...l), i && a.done]))[0]
    );
  };
  return fu.set(t, s), s;
}
ST((e) => ({
  ...e,
  get: (t, n, r) => ap(t, n) || e.get(t, n, r),
  has: (t, n) => !!ap(t, n) || e.has(t, n),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xT {
  constructor(t) {
    this.container = t;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (NT(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(" ");
  }
}
function NT(e) {
  const t = e.getComponent();
  return (t == null ? void 0 : t.type) === "VERSION";
}
const Pc = "@firebase/app",
  up = "0.9.26";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Er = new Fy("@firebase/app"),
  DT = "@firebase/app-compat",
  OT = "@firebase/analytics-compat",
  VT = "@firebase/analytics",
  LT = "@firebase/app-check-compat",
  MT = "@firebase/app-check",
  $T = "@firebase/auth",
  FT = "@firebase/auth-compat",
  UT = "@firebase/database",
  jT = "@firebase/database-compat",
  BT = "@firebase/functions",
  zT = "@firebase/functions-compat",
  bT = "@firebase/installations",
  HT = "@firebase/installations-compat",
  WT = "@firebase/messaging",
  KT = "@firebase/messaging-compat",
  qT = "@firebase/performance",
  QT = "@firebase/performance-compat",
  GT = "@firebase/remote-config",
  XT = "@firebase/remote-config-compat",
  YT = "@firebase/storage",
  JT = "@firebase/storage-compat",
  ZT = "@firebase/firestore",
  eI = "@firebase/firestore-compat",
  tI = "firebase",
  nI = "10.7.2";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const kc = "[DEFAULT]",
  rI = {
    [Pc]: "fire-core",
    [DT]: "fire-core-compat",
    [VT]: "fire-analytics",
    [OT]: "fire-analytics-compat",
    [MT]: "fire-app-check",
    [LT]: "fire-app-check-compat",
    [$T]: "fire-auth",
    [FT]: "fire-auth-compat",
    [UT]: "fire-rtdb",
    [jT]: "fire-rtdb-compat",
    [BT]: "fire-fn",
    [zT]: "fire-fn-compat",
    [bT]: "fire-iid",
    [HT]: "fire-iid-compat",
    [WT]: "fire-fcm",
    [KT]: "fire-fcm-compat",
    [qT]: "fire-perf",
    [QT]: "fire-perf-compat",
    [GT]: "fire-rc",
    [XT]: "fire-rc-compat",
    [YT]: "fire-gcs",
    [JT]: "fire-gcs-compat",
    [ZT]: "fire-fst",
    [eI]: "fire-fst-compat",
    "fire-js": "fire-js",
    [tI]: "fire-js-all",
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Cl = new Map(),
  xc = new Map();
function iI(e, t) {
  try {
    e.container.addComponent(t);
  } catch (n) {
    Er.debug(
      `Component ${t.name} failed to register with FirebaseApp ${e.name}`,
      n,
    );
  }
}
function Cs(e) {
  const t = e.name;
  if (xc.has(t))
    return (
      Er.debug(`There were multiple attempts to register component ${t}.`), !1
    );
  xc.set(t, e);
  for (const n of Cl.values()) iI(n, e);
  return !0;
}
function By(e, t) {
  const n = e.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), e.container.getProvider(t);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const sI = {
    "no-app":
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}",
    "duplicate-app":
      "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "no-options":
      "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument":
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open":
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get":
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set":
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete":
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
  },
  Ln = new $y("app", "Firebase", sI);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oI {
  constructor(t, n, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, t)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new li("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(t) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = t);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(t) {
    this._isDeleted = t;
  }
  checkDestroyed() {
    if (this.isDeleted) throw Ln.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const zy = nI;
function by(e, t = {}) {
  let n = e;
  typeof t != "object" && (t = { name: t });
  const r = Object.assign({ name: kc, automaticDataCollectionEnabled: !1 }, t),
    i = r.name;
  if (typeof i != "string" || !i)
    throw Ln.create("bad-app-name", { appName: String(i) });
  if ((n || (n = Vy()), !n)) throw Ln.create("no-options");
  const s = Cl.get(i);
  if (s) {
    if (Ac(n, s.options) && Ac(r, s.config)) return s;
    throw Ln.create("duplicate-app", { appName: i });
  }
  const o = new pT(i);
  for (const a of xc.values()) o.addComponent(a);
  const l = new oI(n, r, o);
  return Cl.set(i, l), l;
}
function Hy(e = kc) {
  const t = Cl.get(e);
  if (!t && e === kc && Vy()) return by();
  if (!t) throw Ln.create("no-app", { appName: e });
  return t;
}
function Mn(e, t, n) {
  var r;
  let i = (r = rI[e]) !== null && r !== void 0 ? r : e;
  n && (i += `-${n}`);
  const s = i.match(/\s|\//),
    o = t.match(/\s|\//);
  if (s || o) {
    const l = [`Unable to register library "${i}" with version "${t}":`];
    s &&
      l.push(
        `library name "${i}" contains illegal characters (whitespace or "/")`,
      ),
      s && o && l.push("and"),
      o &&
        l.push(
          `version name "${t}" contains illegal characters (whitespace or "/")`,
        ),
      Er.warn(l.join(" "));
    return;
  }
  Cs(new li(`${i}-version`, () => ({ library: i, version: t }), "VERSION"));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const lI = "firebase-heartbeat-database",
  aI = 1,
  Rs = "firebase-heartbeat-store";
let du = null;
function Wy() {
  return (
    du ||
      (du = RT(lI, aI, {
        upgrade: (e, t) => {
          switch (t) {
            case 0:
              try {
                e.createObjectStore(Rs);
              } catch (n) {
                console.warn(n);
              }
          }
        },
      }).catch((e) => {
        throw Ln.create("idb-open", { originalErrorMessage: e.message });
      })),
    du
  );
}
async function uI(e) {
  try {
    return await (await Wy()).transaction(Rs).objectStore(Rs).get(Ky(e));
  } catch (t) {
    if (t instanceof Rr) Er.warn(t.message);
    else {
      const n = Ln.create("idb-get", {
        originalErrorMessage: t == null ? void 0 : t.message,
      });
      Er.warn(n.message);
    }
  }
}
async function cp(e, t) {
  try {
    const r = (await Wy()).transaction(Rs, "readwrite");
    await r.objectStore(Rs).put(t, Ky(e)), await r.done;
  } catch (n) {
    if (n instanceof Rr) Er.warn(n.message);
    else {
      const r = Ln.create("idb-set", {
        originalErrorMessage: n == null ? void 0 : n.message,
      });
      Er.warn(r.message);
    }
  }
}
function Ky(e) {
  return `${e.name}!${e.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const cI = 1024,
  hI = 30 * 24 * 60 * 60 * 1e3;
class fI {
  constructor(t) {
    (this.container = t), (this._heartbeatsCache = null);
    const n = this.container.getProvider("app").getImmediate();
    (this._storage = new pI(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    var t, n;
    const i = this.container
        .getProvider("platform-logger")
        .getImmediate()
        .getPlatformInfoString(),
      s = hp();
    if (
      !(
        ((t = this._heartbeatsCache) === null || t === void 0
          ? void 0
          : t.heartbeats) == null &&
        ((this._heartbeatsCache = await this._heartbeatsCachePromise),
        ((n = this._heartbeatsCache) === null || n === void 0
          ? void 0
          : n.heartbeats) == null)
      ) &&
      !(
        this._heartbeatsCache.lastSentHeartbeatDate === s ||
        this._heartbeatsCache.heartbeats.some((o) => o.date === s)
      )
    )
      return (
        this._heartbeatsCache.heartbeats.push({ date: s, agent: i }),
        (this._heartbeatsCache.heartbeats =
          this._heartbeatsCache.heartbeats.filter((o) => {
            const l = new Date(o.date).valueOf();
            return Date.now() - l <= hI;
          })),
        this._storage.overwrite(this._heartbeatsCache)
      );
  }
  async getHeartbeatsHeader() {
    var t;
    if (
      (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
      ((t = this._heartbeatsCache) === null || t === void 0
        ? void 0
        : t.heartbeats) == null ||
        this._heartbeatsCache.heartbeats.length === 0)
    )
      return "";
    const n = hp(),
      { heartbeatsToSend: r, unsentEntries: i } = dI(
        this._heartbeatsCache.heartbeats,
      ),
      s = Sl(JSON.stringify({ version: 2, heartbeats: r }));
    return (
      (this._heartbeatsCache.lastSentHeartbeatDate = n),
      i.length > 0
        ? ((this._heartbeatsCache.heartbeats = i),
          await this._storage.overwrite(this._heartbeatsCache))
        : ((this._heartbeatsCache.heartbeats = []),
          this._storage.overwrite(this._heartbeatsCache)),
      s
    );
  }
}
function hp() {
  return new Date().toISOString().substring(0, 10);
}
function dI(e, t = cI) {
  const n = [];
  let r = e.slice();
  for (const i of e) {
    const s = n.find((o) => o.agent === i.agent);
    if (s) {
      if ((s.dates.push(i.date), fp(n) > t)) {
        s.dates.pop();
        break;
      }
    } else if ((n.push({ agent: i.agent, dates: [i.date] }), fp(n) > t)) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
class pI {
  constructor(t) {
    (this.app = t),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return My()
      ? lT()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const n = await uI(this.app);
      return n != null && n.heartbeats ? n : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return cp(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: t.heartbeats,
      });
    } else return;
  }
  async add(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return cp(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: [...i.heartbeats, ...t.heartbeats],
      });
    } else return;
  }
}
function fp(e) {
  return Sl(JSON.stringify({ version: 2, heartbeats: e })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function mI(e) {
  Cs(new li("platform-logger", (t) => new xT(t), "PRIVATE")),
    Cs(new li("heartbeat", (t) => new fI(t), "PRIVATE")),
    Mn(Pc, up, e),
    Mn(Pc, up, "esm2017"),
    Mn("fire-js", "");
}
mI("");
var gI = "firebase",
  yI = "10.7.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ Mn(gI, yI, "app");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const qy = "firebasestorage.googleapis.com",
  Qy = "storageBucket",
  vI = 2 * 60 * 1e3,
  _I = 10 * 60 * 1e3;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ye extends Rr {
  constructor(t, n, r = 0) {
    super(pu(t), `Firebase Storage: ${n} (${pu(t)})`),
      (this.status_ = r),
      (this.customData = { serverResponse: null }),
      (this._baseMessage = this.message),
      Object.setPrototypeOf(this, ye.prototype);
  }
  get status() {
    return this.status_;
  }
  set status(t) {
    this.status_ = t;
  }
  _codeEquals(t) {
    return pu(t) === this.code;
  }
  get serverResponse() {
    return this.customData.serverResponse;
  }
  set serverResponse(t) {
    (this.customData.serverResponse = t),
      this.customData.serverResponse
        ? (this.message = `${this._baseMessage}
${this.customData.serverResponse}`)
        : (this.message = this._baseMessage);
  }
}
var ge;
(function (e) {
  (e.UNKNOWN = "unknown"),
    (e.OBJECT_NOT_FOUND = "object-not-found"),
    (e.BUCKET_NOT_FOUND = "bucket-not-found"),
    (e.PROJECT_NOT_FOUND = "project-not-found"),
    (e.QUOTA_EXCEEDED = "quota-exceeded"),
    (e.UNAUTHENTICATED = "unauthenticated"),
    (e.UNAUTHORIZED = "unauthorized"),
    (e.UNAUTHORIZED_APP = "unauthorized-app"),
    (e.RETRY_LIMIT_EXCEEDED = "retry-limit-exceeded"),
    (e.INVALID_CHECKSUM = "invalid-checksum"),
    (e.CANCELED = "canceled"),
    (e.INVALID_EVENT_NAME = "invalid-event-name"),
    (e.INVALID_URL = "invalid-url"),
    (e.INVALID_DEFAULT_BUCKET = "invalid-default-bucket"),
    (e.NO_DEFAULT_BUCKET = "no-default-bucket"),
    (e.CANNOT_SLICE_BLOB = "cannot-slice-blob"),
    (e.SERVER_FILE_WRONG_SIZE = "server-file-wrong-size"),
    (e.NO_DOWNLOAD_URL = "no-download-url"),
    (e.INVALID_ARGUMENT = "invalid-argument"),
    (e.INVALID_ARGUMENT_COUNT = "invalid-argument-count"),
    (e.APP_DELETED = "app-deleted"),
    (e.INVALID_ROOT_OPERATION = "invalid-root-operation"),
    (e.INVALID_FORMAT = "invalid-format"),
    (e.INTERNAL_ERROR = "internal-error"),
    (e.UNSUPPORTED_ENVIRONMENT = "unsupported-environment");
})(ge || (ge = {}));
function pu(e) {
  return "storage/" + e;
}
function Xh() {
  const e =
    "An unknown error occurred, please check the error payload for server response.";
  return new ye(ge.UNKNOWN, e);
}
function EI(e) {
  return new ye(
    ge.QUOTA_EXCEEDED,
    "Quota for bucket '" +
      e +
      "' exceeded, please view quota on https://firebase.google.com/pricing/.",
  );
}
function wI() {
  const e =
    "User is not authenticated, please authenticate using Firebase Authentication and try again.";
  return new ye(ge.UNAUTHENTICATED, e);
}
function TI() {
  return new ye(
    ge.UNAUTHORIZED_APP,
    "This app does not have permission to access Firebase Storage on this project.",
  );
}
function II(e) {
  return new ye(
    ge.UNAUTHORIZED,
    "User does not have permission to access '" + e + "'.",
  );
}
function SI() {
  return new ye(
    ge.RETRY_LIMIT_EXCEEDED,
    "Max retry time for operation exceeded, please try again.",
  );
}
function AI() {
  return new ye(ge.CANCELED, "User canceled the upload/download.");
}
function CI(e) {
  return new ye(ge.INVALID_URL, "Invalid URL '" + e + "'.");
}
function RI(e) {
  return new ye(
    ge.INVALID_DEFAULT_BUCKET,
    "Invalid default bucket '" + e + "'.",
  );
}
function PI() {
  return new ye(
    ge.NO_DEFAULT_BUCKET,
    "No default bucket found. Did you set the '" +
      Qy +
      "' property when initializing the app?",
  );
}
function kI() {
  return new ye(
    ge.CANNOT_SLICE_BLOB,
    "Cannot slice blob for upload. Please retry the upload.",
  );
}
function xI(e) {
  return new ye(
    ge.UNSUPPORTED_ENVIRONMENT,
    `${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`,
  );
}
function Nc(e) {
  return new ye(ge.INVALID_ARGUMENT, e);
}
function Gy() {
  return new ye(ge.APP_DELETED, "The Firebase app was deleted.");
}
function NI(e) {
  return new ye(
    ge.INVALID_ROOT_OPERATION,
    "The operation '" +
      e +
      "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').",
  );
}
function Ji(e, t) {
  return new ye(
    ge.INVALID_FORMAT,
    "String does not match format '" + e + "': " + t,
  );
}
function xi(e) {
  throw new ye(ge.INTERNAL_ERROR, "Internal error: " + e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mt {
  constructor(t, n) {
    (this.bucket = t), (this.path_ = n);
  }
  get path() {
    return this.path_;
  }
  get isRoot() {
    return this.path.length === 0;
  }
  fullServerUrl() {
    const t = encodeURIComponent;
    return "/b/" + t(this.bucket) + "/o/" + t(this.path);
  }
  bucketOnlyServerUrl() {
    return "/b/" + encodeURIComponent(this.bucket) + "/o";
  }
  static makeFromBucketSpec(t, n) {
    let r;
    try {
      r = mt.makeFromUrl(t, n);
    } catch {
      return new mt(t, "");
    }
    if (r.path === "") return r;
    throw RI(t);
  }
  static makeFromUrl(t, n) {
    let r = null;
    const i = "([A-Za-z0-9.\\-_]+)";
    function s(_) {
      _.path.charAt(_.path.length - 1) === "/" &&
        (_.path_ = _.path_.slice(0, -1));
    }
    const o = "(/(.*))?$",
      l = new RegExp("^gs://" + i + o, "i"),
      a = { bucket: 1, path: 3 };
    function u(_) {
      _.path_ = decodeURIComponent(_.path);
    }
    const c = "v[A-Za-z0-9_]+",
      h = n.replace(/[.]/g, "\\."),
      d = "(/([^?#]*).*)?$",
      g = new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`, "i"),
      y = { bucket: 1, path: 3 },
      v = n === qy ? "(?:storage.googleapis.com|storage.cloud.google.com)" : n,
      w = "([^?#]*)",
      p = new RegExp(`^https?://${v}/${i}/${w}`, "i"),
      m = [
        { regex: l, indices: a, postModify: s },
        { regex: g, indices: y, postModify: u },
        { regex: p, indices: { bucket: 1, path: 2 }, postModify: u },
      ];
    for (let _ = 0; _ < m.length; _++) {
      const R = m[_],
        k = R.regex.exec(t);
      if (k) {
        const P = k[R.indices.bucket];
        let I = k[R.indices.path];
        I || (I = ""), (r = new mt(P, I)), R.postModify(r);
        break;
      }
    }
    if (r == null) throw CI(t);
    return r;
  }
}
class DI {
  constructor(t) {
    this.promise_ = Promise.reject(t);
  }
  getPromise() {
    return this.promise_;
  }
  cancel(t = !1) {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function OI(e, t, n) {
  let r = 1,
    i = null,
    s = null,
    o = !1,
    l = 0;
  function a() {
    return l === 2;
  }
  let u = !1;
  function c(...w) {
    u || ((u = !0), t.apply(null, w));
  }
  function h(w) {
    i = setTimeout(() => {
      (i = null), e(g, a());
    }, w);
  }
  function d() {
    s && clearTimeout(s);
  }
  function g(w, ...p) {
    if (u) {
      d();
      return;
    }
    if (w) {
      d(), c.call(null, w, ...p);
      return;
    }
    if (a() || o) {
      d(), c.call(null, w, ...p);
      return;
    }
    r < 64 && (r *= 2);
    let m;
    l === 1 ? ((l = 2), (m = 0)) : (m = (r + Math.random()) * 1e3), h(m);
  }
  let y = !1;
  function v(w) {
    y ||
      ((y = !0),
      d(),
      !u &&
        (i !== null ? (w || (l = 2), clearTimeout(i), h(0)) : w || (l = 1)));
  }
  return (
    h(0),
    (s = setTimeout(() => {
      (o = !0), v(!0);
    }, n)),
    v
  );
}
function VI(e) {
  e(!1);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function LI(e) {
  return e !== void 0;
}
function MI(e) {
  return typeof e == "object" && !Array.isArray(e);
}
function Xy(e) {
  return typeof e == "string" || e instanceof String;
}
function dp(e) {
  return Yh() && e instanceof Blob;
}
function Yh() {
  return typeof Blob < "u";
}
function pp(e, t, n, r) {
  if (r < t) throw Nc(`Invalid value for '${e}'. Expected ${t} or greater.`);
  if (r > n) throw Nc(`Invalid value for '${e}'. Expected ${n} or less.`);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $I(e, t, n) {
  let r = t;
  return n == null && (r = `https://${t}`), `${n}://${r}/v0${e}`;
}
function FI(e) {
  const t = encodeURIComponent;
  let n = "?";
  for (const r in e)
    if (e.hasOwnProperty(r)) {
      const i = t(r) + "=" + t(e[r]);
      n = n + i + "&";
    }
  return (n = n.slice(0, -1)), n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var fr;
(function (e) {
  (e[(e.NO_ERROR = 0)] = "NO_ERROR"),
    (e[(e.NETWORK_ERROR = 1)] = "NETWORK_ERROR"),
    (e[(e.ABORT = 2)] = "ABORT");
})(fr || (fr = {}));
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function UI(e, t) {
  const n = e >= 500 && e < 600,
    i = [408, 429].indexOf(e) !== -1,
    s = t.indexOf(e) !== -1;
  return n || i || s;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jI {
  constructor(t, n, r, i, s, o, l, a, u, c, h, d = !0) {
    (this.url_ = t),
      (this.method_ = n),
      (this.headers_ = r),
      (this.body_ = i),
      (this.successCodes_ = s),
      (this.additionalRetryCodes_ = o),
      (this.callback_ = l),
      (this.errorCallback_ = a),
      (this.timeout_ = u),
      (this.progressCallback_ = c),
      (this.connectionFactory_ = h),
      (this.retry = d),
      (this.pendingConnection_ = null),
      (this.backoffId_ = null),
      (this.canceled_ = !1),
      (this.appDelete_ = !1),
      (this.promise_ = new Promise((g, y) => {
        (this.resolve_ = g), (this.reject_ = y), this.start_();
      }));
  }
  start_() {
    const t = (r, i) => {
        if (i) {
          r(!1, new Ao(!1, null, !0));
          return;
        }
        const s = this.connectionFactory_();
        this.pendingConnection_ = s;
        const o = (l) => {
          const a = l.loaded,
            u = l.lengthComputable ? l.total : -1;
          this.progressCallback_ !== null && this.progressCallback_(a, u);
        };
        this.progressCallback_ !== null && s.addUploadProgressListener(o),
          s
            .send(this.url_, this.method_, this.body_, this.headers_)
            .then(() => {
              this.progressCallback_ !== null &&
                s.removeUploadProgressListener(o),
                (this.pendingConnection_ = null);
              const l = s.getErrorCode() === fr.NO_ERROR,
                a = s.getStatus();
              if (!l || (UI(a, this.additionalRetryCodes_) && this.retry)) {
                const c = s.getErrorCode() === fr.ABORT;
                r(!1, new Ao(!1, null, c));
                return;
              }
              const u = this.successCodes_.indexOf(a) !== -1;
              r(!0, new Ao(u, s));
            });
      },
      n = (r, i) => {
        const s = this.resolve_,
          o = this.reject_,
          l = i.connection;
        if (i.wasSuccessCode)
          try {
            const a = this.callback_(l, l.getResponse());
            LI(a) ? s(a) : s();
          } catch (a) {
            o(a);
          }
        else if (l !== null) {
          const a = Xh();
          (a.serverResponse = l.getErrorText()),
            this.errorCallback_ ? o(this.errorCallback_(l, a)) : o(a);
        } else if (i.canceled) {
          const a = this.appDelete_ ? Gy() : AI();
          o(a);
        } else {
          const a = SI();
          o(a);
        }
      };
    this.canceled_
      ? n(!1, new Ao(!1, null, !0))
      : (this.backoffId_ = OI(t, n, this.timeout_));
  }
  getPromise() {
    return this.promise_;
  }
  cancel(t) {
    (this.canceled_ = !0),
      (this.appDelete_ = t || !1),
      this.backoffId_ !== null && VI(this.backoffId_),
      this.pendingConnection_ !== null && this.pendingConnection_.abort();
  }
}
class Ao {
  constructor(t, n, r) {
    (this.wasSuccessCode = t), (this.connection = n), (this.canceled = !!r);
  }
}
function BI(e, t) {
  t !== null && t.length > 0 && (e.Authorization = "Firebase " + t);
}
function zI(e, t) {
  e["X-Firebase-Storage-Version"] = "webjs/" + (t ?? "AppManager");
}
function bI(e, t) {
  t && (e["X-Firebase-GMPID"] = t);
}
function HI(e, t) {
  t !== null && (e["X-Firebase-AppCheck"] = t);
}
function WI(e, t, n, r, i, s, o = !0) {
  const l = FI(e.urlParams),
    a = e.url + l,
    u = Object.assign({}, e.headers);
  return (
    bI(u, t),
    BI(u, n),
    zI(u, s),
    HI(u, r),
    new jI(
      a,
      e.method,
      u,
      e.body,
      e.successCodes,
      e.additionalRetryCodes,
      e.handler,
      e.errorHandler,
      e.timeout,
      e.progressCallback,
      i,
      o,
    )
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function KI() {
  return typeof BlobBuilder < "u"
    ? BlobBuilder
    : typeof WebKitBlobBuilder < "u"
      ? WebKitBlobBuilder
      : void 0;
}
function qI(...e) {
  const t = KI();
  if (t !== void 0) {
    const n = new t();
    for (let r = 0; r < e.length; r++) n.append(e[r]);
    return n.getBlob();
  } else {
    if (Yh()) return new Blob(e);
    throw new ye(
      ge.UNSUPPORTED_ENVIRONMENT,
      "This browser doesn't seem to support creating Blobs",
    );
  }
}
function QI(e, t, n) {
  return e.webkitSlice
    ? e.webkitSlice(t, n)
    : e.mozSlice
      ? e.mozSlice(t, n)
      : e.slice
        ? e.slice(t, n)
        : null;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function GI(e) {
  if (typeof atob > "u") throw xI("base-64");
  return atob(e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Wt = {
  RAW: "raw",
  BASE64: "base64",
  BASE64URL: "base64url",
  DATA_URL: "data_url",
};
class mu {
  constructor(t, n) {
    (this.data = t), (this.contentType = n || null);
  }
}
function XI(e, t) {
  switch (e) {
    case Wt.RAW:
      return new mu(Yy(t));
    case Wt.BASE64:
    case Wt.BASE64URL:
      return new mu(Jy(e, t));
    case Wt.DATA_URL:
      return new mu(JI(t), ZI(t));
  }
  throw Xh();
}
function Yy(e) {
  const t = [];
  for (let n = 0; n < e.length; n++) {
    let r = e.charCodeAt(n);
    if (r <= 127) t.push(r);
    else if (r <= 2047) t.push(192 | (r >> 6), 128 | (r & 63));
    else if ((r & 64512) === 55296)
      if (!(n < e.length - 1 && (e.charCodeAt(n + 1) & 64512) === 56320))
        t.push(239, 191, 189);
      else {
        const s = r,
          o = e.charCodeAt(++n);
        (r = 65536 | ((s & 1023) << 10) | (o & 1023)),
          t.push(
            240 | (r >> 18),
            128 | ((r >> 12) & 63),
            128 | ((r >> 6) & 63),
            128 | (r & 63),
          );
      }
    else
      (r & 64512) === 56320
        ? t.push(239, 191, 189)
        : t.push(224 | (r >> 12), 128 | ((r >> 6) & 63), 128 | (r & 63));
  }
  return new Uint8Array(t);
}
function YI(e) {
  let t;
  try {
    t = decodeURIComponent(e);
  } catch {
    throw Ji(Wt.DATA_URL, "Malformed data URL.");
  }
  return Yy(t);
}
function Jy(e, t) {
  switch (e) {
    case Wt.BASE64: {
      const i = t.indexOf("-") !== -1,
        s = t.indexOf("_") !== -1;
      if (i || s)
        throw Ji(
          e,
          "Invalid character '" +
            (i ? "-" : "_") +
            "' found: is it base64url encoded?",
        );
      break;
    }
    case Wt.BASE64URL: {
      const i = t.indexOf("+") !== -1,
        s = t.indexOf("/") !== -1;
      if (i || s)
        throw Ji(
          e,
          "Invalid character '" +
            (i ? "+" : "/") +
            "' found: is it base64 encoded?",
        );
      t = t.replace(/-/g, "+").replace(/_/g, "/");
      break;
    }
  }
  let n;
  try {
    n = GI(t);
  } catch (i) {
    throw i.message.includes("polyfill") ? i : Ji(e, "Invalid character found");
  }
  const r = new Uint8Array(n.length);
  for (let i = 0; i < n.length; i++) r[i] = n.charCodeAt(i);
  return r;
}
class Zy {
  constructor(t) {
    (this.base64 = !1), (this.contentType = null);
    const n = t.match(/^data:([^,]+)?,/);
    if (n === null)
      throw Ji(
        Wt.DATA_URL,
        "Must be formatted 'data:[<mediatype>][;base64],<data>",
      );
    const r = n[1] || null;
    r != null &&
      ((this.base64 = eS(r, ";base64")),
      (this.contentType = this.base64 ? r.substring(0, r.length - 7) : r)),
      (this.rest = t.substring(t.indexOf(",") + 1));
  }
}
function JI(e) {
  const t = new Zy(e);
  return t.base64 ? Jy(Wt.BASE64, t.rest) : YI(t.rest);
}
function ZI(e) {
  return new Zy(e).contentType;
}
function eS(e, t) {
  return e.length >= t.length ? e.substring(e.length - t.length) === t : !1;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wn {
  constructor(t, n) {
    let r = 0,
      i = "";
    dp(t)
      ? ((this.data_ = t), (r = t.size), (i = t.type))
      : t instanceof ArrayBuffer
        ? (n
            ? (this.data_ = new Uint8Array(t))
            : ((this.data_ = new Uint8Array(t.byteLength)),
              this.data_.set(new Uint8Array(t))),
          (r = this.data_.length))
        : t instanceof Uint8Array &&
          (n
            ? (this.data_ = t)
            : ((this.data_ = new Uint8Array(t.length)), this.data_.set(t)),
          (r = t.length)),
      (this.size_ = r),
      (this.type_ = i);
  }
  size() {
    return this.size_;
  }
  type() {
    return this.type_;
  }
  slice(t, n) {
    if (dp(this.data_)) {
      const r = this.data_,
        i = QI(r, t, n);
      return i === null ? null : new wn(i);
    } else {
      const r = new Uint8Array(this.data_.buffer, t, n - t);
      return new wn(r, !0);
    }
  }
  static getBlob(...t) {
    if (Yh()) {
      const n = t.map((r) => (r instanceof wn ? r.data_ : r));
      return new wn(qI.apply(null, n));
    } else {
      const n = t.map((o) => (Xy(o) ? XI(Wt.RAW, o).data : o.data_));
      let r = 0;
      n.forEach((o) => {
        r += o.byteLength;
      });
      const i = new Uint8Array(r);
      let s = 0;
      return (
        n.forEach((o) => {
          for (let l = 0; l < o.length; l++) i[s++] = o[l];
        }),
        new wn(i, !0)
      );
    }
  }
  uploadData() {
    return this.data_;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tS(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return null;
  }
  return MI(t) ? t : null;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function nS(e) {
  if (e.length === 0) return null;
  const t = e.lastIndexOf("/");
  return t === -1 ? "" : e.slice(0, t);
}
function rS(e, t) {
  const n = t
    .split("/")
    .filter((r) => r.length > 0)
    .join("/");
  return e.length === 0 ? n : e + "/" + n;
}
function ev(e) {
  const t = e.lastIndexOf("/", e.length - 2);
  return t === -1 ? e : e.slice(t + 1);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function iS(e, t) {
  return t;
}
class Xe {
  constructor(t, n, r, i) {
    (this.server = t),
      (this.local = n || t),
      (this.writable = !!r),
      (this.xform = i || iS);
  }
}
let Co = null;
function sS(e) {
  return !Xy(e) || e.length < 2 ? e : ev(e);
}
function oS() {
  if (Co) return Co;
  const e = [];
  e.push(new Xe("bucket")),
    e.push(new Xe("generation")),
    e.push(new Xe("metageneration")),
    e.push(new Xe("name", "fullPath", !0));
  function t(s, o) {
    return sS(o);
  }
  const n = new Xe("name");
  (n.xform = t), e.push(n);
  function r(s, o) {
    return o !== void 0 ? Number(o) : o;
  }
  const i = new Xe("size");
  return (
    (i.xform = r),
    e.push(i),
    e.push(new Xe("timeCreated")),
    e.push(new Xe("updated")),
    e.push(new Xe("md5Hash", null, !0)),
    e.push(new Xe("cacheControl", null, !0)),
    e.push(new Xe("contentDisposition", null, !0)),
    e.push(new Xe("contentEncoding", null, !0)),
    e.push(new Xe("contentLanguage", null, !0)),
    e.push(new Xe("contentType", null, !0)),
    e.push(new Xe("metadata", "customMetadata", !0)),
    (Co = e),
    Co
  );
}
function lS(e, t) {
  function n() {
    const r = e.bucket,
      i = e.fullPath,
      s = new mt(r, i);
    return t._makeStorageReference(s);
  }
  Object.defineProperty(e, "ref", { get: n });
}
function aS(e, t, n) {
  const r = {};
  r.type = "file";
  const i = n.length;
  for (let s = 0; s < i; s++) {
    const o = n[s];
    r[o.local] = o.xform(r, t[o.server]);
  }
  return lS(r, e), r;
}
function uS(e, t, n) {
  const r = tS(t);
  return r === null ? null : aS(e, r, n);
}
function cS(e, t) {
  const n = {},
    r = t.length;
  for (let i = 0; i < r; i++) {
    const s = t[i];
    s.writable && (n[s.server] = e[s.local]);
  }
  return JSON.stringify(n);
}
class hS {
  constructor(t, n, r, i) {
    (this.url = t),
      (this.method = n),
      (this.handler = r),
      (this.timeout = i),
      (this.urlParams = {}),
      (this.headers = {}),
      (this.body = null),
      (this.errorHandler = null),
      (this.progressCallback = null),
      (this.successCodes = [200]),
      (this.additionalRetryCodes = []);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function fS(e) {
  if (!e) throw Xh();
}
function dS(e, t) {
  function n(r, i) {
    const s = uS(e, i, t);
    return fS(s !== null), s;
  }
  return n;
}
function pS(e) {
  function t(n, r) {
    let i;
    return (
      n.getStatus() === 401
        ? n.getErrorText().includes("Firebase App Check token is invalid")
          ? (i = TI())
          : (i = wI())
        : n.getStatus() === 402
          ? (i = EI(e.bucket))
          : n.getStatus() === 403
            ? (i = II(e.path))
            : (i = r),
      (i.status = n.getStatus()),
      (i.serverResponse = r.serverResponse),
      i
    );
  }
  return t;
}
function mS(e, t) {
  return (e && e.contentType) || (t && t.type()) || "application/octet-stream";
}
function gS(e, t, n) {
  const r = Object.assign({}, n);
  return (
    (r.fullPath = e.path),
    (r.size = t.size()),
    r.contentType || (r.contentType = mS(null, t)),
    r
  );
}
function yS(e, t, n, r, i) {
  const s = t.bucketOnlyServerUrl(),
    o = { "X-Goog-Upload-Protocol": "multipart" };
  function l() {
    let m = "";
    for (let _ = 0; _ < 2; _++) m = m + Math.random().toString().slice(2);
    return m;
  }
  const a = l();
  o["Content-Type"] = "multipart/related; boundary=" + a;
  const u = gS(t, r, i),
    c = cS(u, n),
    h =
      "--" +
      a +
      `\r
Content-Type: application/json; charset=utf-8\r
\r
` +
      c +
      `\r
--` +
      a +
      `\r
Content-Type: ` +
      u.contentType +
      `\r
\r
`,
    d =
      `\r
--` +
      a +
      "--",
    g = wn.getBlob(h, r, d);
  if (g === null) throw kI();
  const y = { name: u.fullPath },
    v = $I(s, e.host, e._protocol),
    w = "POST",
    p = e.maxUploadRetryTime,
    f = new hS(v, w, dS(e, n), p);
  return (
    (f.urlParams = y),
    (f.headers = o),
    (f.body = g.uploadData()),
    (f.errorHandler = pS(t)),
    f
  );
}
class vS {
  constructor() {
    (this.sent_ = !1),
      (this.xhr_ = new XMLHttpRequest()),
      this.initXhr(),
      (this.errorCode_ = fr.NO_ERROR),
      (this.sendPromise_ = new Promise((t) => {
        this.xhr_.addEventListener("abort", () => {
          (this.errorCode_ = fr.ABORT), t();
        }),
          this.xhr_.addEventListener("error", () => {
            (this.errorCode_ = fr.NETWORK_ERROR), t();
          }),
          this.xhr_.addEventListener("load", () => {
            t();
          });
      }));
  }
  send(t, n, r, i) {
    if (this.sent_) throw xi("cannot .send() more than once");
    if (((this.sent_ = !0), this.xhr_.open(n, t, !0), i !== void 0))
      for (const s in i)
        i.hasOwnProperty(s) && this.xhr_.setRequestHeader(s, i[s].toString());
    return (
      r !== void 0 ? this.xhr_.send(r) : this.xhr_.send(), this.sendPromise_
    );
  }
  getErrorCode() {
    if (!this.sent_) throw xi("cannot .getErrorCode() before sending");
    return this.errorCode_;
  }
  getStatus() {
    if (!this.sent_) throw xi("cannot .getStatus() before sending");
    try {
      return this.xhr_.status;
    } catch {
      return -1;
    }
  }
  getResponse() {
    if (!this.sent_) throw xi("cannot .getResponse() before sending");
    return this.xhr_.response;
  }
  getErrorText() {
    if (!this.sent_) throw xi("cannot .getErrorText() before sending");
    return this.xhr_.statusText;
  }
  abort() {
    this.xhr_.abort();
  }
  getResponseHeader(t) {
    return this.xhr_.getResponseHeader(t);
  }
  addUploadProgressListener(t) {
    this.xhr_.upload != null &&
      this.xhr_.upload.addEventListener("progress", t);
  }
  removeUploadProgressListener(t) {
    this.xhr_.upload != null &&
      this.xhr_.upload.removeEventListener("progress", t);
  }
}
class _S extends vS {
  initXhr() {
    this.xhr_.responseType = "text";
  }
}
function ES() {
  return new _S();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wr {
  constructor(t, n) {
    (this._service = t),
      n instanceof mt
        ? (this._location = n)
        : (this._location = mt.makeFromUrl(n, t.host));
  }
  toString() {
    return "gs://" + this._location.bucket + "/" + this._location.path;
  }
  _newRef(t, n) {
    return new wr(t, n);
  }
  get root() {
    const t = new mt(this._location.bucket, "");
    return this._newRef(this._service, t);
  }
  get bucket() {
    return this._location.bucket;
  }
  get fullPath() {
    return this._location.path;
  }
  get name() {
    return ev(this._location.path);
  }
  get storage() {
    return this._service;
  }
  get parent() {
    const t = nS(this._location.path);
    if (t === null) return null;
    const n = new mt(this._location.bucket, t);
    return new wr(this._service, n);
  }
  _throwIfRoot(t) {
    if (this._location.path === "") throw NI(t);
  }
}
function wS(e, t, n) {
  e._throwIfRoot("uploadBytes");
  const r = yS(e.storage, e._location, oS(), new wn(t, !0), n);
  return e.storage
    .makeRequestWithTokens(r, ES)
    .then((i) => ({ metadata: i, ref: e }));
}
function TS(e, t) {
  const n = rS(e._location.path, t),
    r = new mt(e._location.bucket, n);
  return new wr(e.storage, r);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function IS(e) {
  return /^[A-Za-z]+:\/\//.test(e);
}
function SS(e, t) {
  return new wr(e, t);
}
function tv(e, t) {
  if (e instanceof Jh) {
    const n = e;
    if (n._bucket == null) throw PI();
    const r = new wr(n, n._bucket);
    return t != null ? tv(r, t) : r;
  } else return t !== void 0 ? TS(e, t) : e;
}
function AS(e, t) {
  if (t && IS(t)) {
    if (e instanceof Jh) return SS(e, t);
    throw Nc(
      "To use ref(service, url), the first argument must be a Storage instance.",
    );
  } else return tv(e, t);
}
function mp(e, t) {
  const n = t == null ? void 0 : t[Qy];
  return n == null ? null : mt.makeFromBucketSpec(n, e);
}
function CS(e, t, n, r = {}) {
  (e.host = `${t}:${n}`), (e._protocol = "http");
  const { mockUserToken: i } = r;
  i &&
    (e._overrideAuthToken =
      typeof i == "string" ? i : Ly(i, e.app.options.projectId));
}
class Jh {
  constructor(t, n, r, i, s) {
    (this.app = t),
      (this._authProvider = n),
      (this._appCheckProvider = r),
      (this._url = i),
      (this._firebaseVersion = s),
      (this._bucket = null),
      (this._host = qy),
      (this._protocol = "https"),
      (this._appId = null),
      (this._deleted = !1),
      (this._maxOperationRetryTime = vI),
      (this._maxUploadRetryTime = _I),
      (this._requests = new Set()),
      i != null
        ? (this._bucket = mt.makeFromBucketSpec(i, this._host))
        : (this._bucket = mp(this._host, this.app.options));
  }
  get host() {
    return this._host;
  }
  set host(t) {
    (this._host = t),
      this._url != null
        ? (this._bucket = mt.makeFromBucketSpec(this._url, t))
        : (this._bucket = mp(t, this.app.options));
  }
  get maxUploadRetryTime() {
    return this._maxUploadRetryTime;
  }
  set maxUploadRetryTime(t) {
    pp("time", 0, Number.POSITIVE_INFINITY, t), (this._maxUploadRetryTime = t);
  }
  get maxOperationRetryTime() {
    return this._maxOperationRetryTime;
  }
  set maxOperationRetryTime(t) {
    pp("time", 0, Number.POSITIVE_INFINITY, t),
      (this._maxOperationRetryTime = t);
  }
  async _getAuthToken() {
    if (this._overrideAuthToken) return this._overrideAuthToken;
    const t = this._authProvider.getImmediate({ optional: !0 });
    if (t) {
      const n = await t.getToken();
      if (n !== null) return n.accessToken;
    }
    return null;
  }
  async _getAppCheckToken() {
    const t = this._appCheckProvider.getImmediate({ optional: !0 });
    return t ? (await t.getToken()).token : null;
  }
  _delete() {
    return (
      this._deleted ||
        ((this._deleted = !0),
        this._requests.forEach((t) => t.cancel()),
        this._requests.clear()),
      Promise.resolve()
    );
  }
  _makeStorageReference(t) {
    return new wr(this, t);
  }
  _makeRequest(t, n, r, i, s = !0) {
    if (this._deleted) return new DI(Gy());
    {
      const o = WI(t, this._appId, r, i, n, this._firebaseVersion, s);
      return (
        this._requests.add(o),
        o.getPromise().then(
          () => this._requests.delete(o),
          () => this._requests.delete(o),
        ),
        o
      );
    }
  }
  async makeRequestWithTokens(t, n) {
    const [r, i] = await Promise.all([
      this._getAuthToken(),
      this._getAppCheckToken(),
    ]);
    return this._makeRequest(t, n, r, i).getPromise();
  }
}
const gp = "@firebase/storage",
  yp = "0.12.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const nv = "storage";
function rv(e, t, n) {
  return (e = Bn(e)), wS(e, t, n);
}
function iv(e, t) {
  return (e = Bn(e)), AS(e, t);
}
function RS(e = Hy(), t) {
  e = Bn(e);
  const r = By(e, nv).getImmediate({ identifier: t }),
    i = Oy("storage");
  return i && PS(r, ...i), r;
}
function PS(e, t, n, r = {}) {
  CS(e, t, n, r);
}
function kS(e, { instanceIdentifier: t }) {
  const n = e.getProvider("app").getImmediate(),
    r = e.getProvider("auth-internal"),
    i = e.getProvider("app-check-internal");
  return new Jh(n, r, i, t, zy);
}
function xS() {
  Cs(new li(nv, kS, "PUBLIC").setMultipleInstances(!0)),
    Mn(gp, yp, ""),
    Mn(gp, yp, "esm2017");
}
xS();
var NS =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof self < "u"
            ? self
            : {},
  x,
  Zh = Zh || {},
  U = NS || self;
function ha(e) {
  var t = typeof e;
  return (
    (t = t != "object" ? t : e ? (Array.isArray(e) ? "array" : t) : "null"),
    t == "array" || (t == "object" && typeof e.length == "number")
  );
}
function qs(e) {
  var t = typeof e;
  return (t == "object" && e != null) || t == "function";
}
function DS(e) {
  return (
    (Object.prototype.hasOwnProperty.call(e, gu) && e[gu]) || (e[gu] = ++OS)
  );
}
var gu = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
  OS = 0;
function VS(e, t, n) {
  return e.call.apply(e.bind, arguments);
}
function LS(e, t, n) {
  if (!e) throw Error();
  if (2 < arguments.length) {
    var r = Array.prototype.slice.call(arguments, 2);
    return function () {
      var i = Array.prototype.slice.call(arguments);
      return Array.prototype.unshift.apply(i, r), e.apply(t, i);
    };
  }
  return function () {
    return e.apply(t, arguments);
  };
}
function We(e, t, n) {
  return (
    Function.prototype.bind &&
    Function.prototype.bind.toString().indexOf("native code") != -1
      ? (We = VS)
      : (We = LS),
    We.apply(null, arguments)
  );
}
function Ro(e, t) {
  var n = Array.prototype.slice.call(arguments, 1);
  return function () {
    var r = n.slice();
    return r.push.apply(r, arguments), e.apply(this, r);
  };
}
function ke(e, t) {
  function n() {}
  (n.prototype = t.prototype),
    (e.$ = t.prototype),
    (e.prototype = new n()),
    (e.prototype.constructor = e),
    (e.ac = function (r, i, s) {
      for (
        var o = Array(arguments.length - 2), l = 2;
        l < arguments.length;
        l++
      )
        o[l - 2] = arguments[l];
      return t.prototype[i].apply(r, o);
    });
}
function Gn() {
  (this.s = this.s), (this.o = this.o);
}
var MS = 0;
Gn.prototype.s = !1;
Gn.prototype.sa = function () {
  !this.s && ((this.s = !0), this.N(), MS != 0) && DS(this);
};
Gn.prototype.N = function () {
  if (this.o) for (; this.o.length; ) this.o.shift()();
};
const sv = Array.prototype.indexOf
  ? function (e, t) {
      return Array.prototype.indexOf.call(e, t, void 0);
    }
  : function (e, t) {
      if (typeof e == "string")
        return typeof t != "string" || t.length != 1 ? -1 : e.indexOf(t, 0);
      for (let n = 0; n < e.length; n++) if (n in e && e[n] === t) return n;
      return -1;
    };
function ef(e) {
  const t = e.length;
  if (0 < t) {
    const n = Array(t);
    for (let r = 0; r < t; r++) n[r] = e[r];
    return n;
  }
  return [];
}
function vp(e, t) {
  for (let n = 1; n < arguments.length; n++) {
    const r = arguments[n];
    if (ha(r)) {
      const i = e.length || 0,
        s = r.length || 0;
      e.length = i + s;
      for (let o = 0; o < s; o++) e[i + o] = r[o];
    } else e.push(r);
  }
}
function Ke(e, t) {
  (this.type = e), (this.g = this.target = t), (this.defaultPrevented = !1);
}
Ke.prototype.h = function () {
  this.defaultPrevented = !0;
};
var $S = (function () {
  if (!U.addEventListener || !Object.defineProperty) return !1;
  var e = !1,
    t = Object.defineProperty({}, "passive", {
      get: function () {
        e = !0;
      },
    });
  try {
    const n = () => {};
    U.addEventListener("test", n, t), U.removeEventListener("test", n, t);
  } catch {}
  return e;
})();
function Ps(e) {
  return /^[\s\xa0]*$/.test(e);
}
function fa() {
  var e = U.navigator;
  return e && (e = e.userAgent) ? e : "";
}
function Ht(e) {
  return fa().indexOf(e) != -1;
}
function tf(e) {
  return tf[" "](e), e;
}
tf[" "] = function () {};
function FS(e, t) {
  var n = xA;
  return Object.prototype.hasOwnProperty.call(n, e) ? n[e] : (n[e] = t(e));
}
var US = Ht("Opera"),
  ai = Ht("Trident") || Ht("MSIE"),
  ov = Ht("Edge"),
  Dc = ov || ai,
  lv =
    Ht("Gecko") &&
    !(fa().toLowerCase().indexOf("webkit") != -1 && !Ht("Edge")) &&
    !(Ht("Trident") || Ht("MSIE")) &&
    !Ht("Edge"),
  jS = fa().toLowerCase().indexOf("webkit") != -1 && !Ht("Edge");
function av() {
  var e = U.document;
  return e ? e.documentMode : void 0;
}
var Oc;
e: {
  var yu = "",
    vu = (function () {
      var e = fa();
      if (lv) return /rv:([^\);]+)(\)|;)/.exec(e);
      if (ov) return /Edge\/([\d\.]+)/.exec(e);
      if (ai) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);
      if (jS) return /WebKit\/(\S+)/.exec(e);
      if (US) return /(?:Version)[ \/]?(\S+)/.exec(e);
    })();
  if ((vu && (yu = vu ? vu[1] : ""), ai)) {
    var _u = av();
    if (_u != null && _u > parseFloat(yu)) {
      Oc = String(_u);
      break e;
    }
  }
  Oc = yu;
}
var Vc;
if (U.document && ai) {
  var _p = av();
  Vc = _p || parseInt(Oc, 10) || void 0;
} else Vc = void 0;
var BS = Vc;
function ks(e, t) {
  if (
    (Ke.call(this, e ? e.type : ""),
    (this.relatedTarget = this.g = this.target = null),
    (this.button =
      this.screenY =
      this.screenX =
      this.clientY =
      this.clientX =
        0),
    (this.key = ""),
    (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
    (this.state = null),
    (this.pointerId = 0),
    (this.pointerType = ""),
    (this.i = null),
    e)
  ) {
    var n = (this.type = e.type),
      r =
        e.changedTouches && e.changedTouches.length
          ? e.changedTouches[0]
          : null;
    if (
      ((this.target = e.target || e.srcElement),
      (this.g = t),
      (t = e.relatedTarget))
    ) {
      if (lv) {
        e: {
          try {
            tf(t.nodeName);
            var i = !0;
            break e;
          } catch {}
          i = !1;
        }
        i || (t = null);
      }
    } else
      n == "mouseover"
        ? (t = e.fromElement)
        : n == "mouseout" && (t = e.toElement);
    (this.relatedTarget = t),
      r
        ? ((this.clientX = r.clientX !== void 0 ? r.clientX : r.pageX),
          (this.clientY = r.clientY !== void 0 ? r.clientY : r.pageY),
          (this.screenX = r.screenX || 0),
          (this.screenY = r.screenY || 0))
        : ((this.clientX = e.clientX !== void 0 ? e.clientX : e.pageX),
          (this.clientY = e.clientY !== void 0 ? e.clientY : e.pageY),
          (this.screenX = e.screenX || 0),
          (this.screenY = e.screenY || 0)),
      (this.button = e.button),
      (this.key = e.key || ""),
      (this.ctrlKey = e.ctrlKey),
      (this.altKey = e.altKey),
      (this.shiftKey = e.shiftKey),
      (this.metaKey = e.metaKey),
      (this.pointerId = e.pointerId || 0),
      (this.pointerType =
        typeof e.pointerType == "string"
          ? e.pointerType
          : zS[e.pointerType] || ""),
      (this.state = e.state),
      (this.i = e),
      e.defaultPrevented && ks.$.h.call(this);
  }
}
ke(ks, Ke);
var zS = { 2: "touch", 3: "pen", 4: "mouse" };
ks.prototype.h = function () {
  ks.$.h.call(this);
  var e = this.i;
  e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
};
var Qs = "closure_listenable_" + ((1e6 * Math.random()) | 0),
  bS = 0;
function HS(e, t, n, r, i) {
  (this.listener = e),
    (this.proxy = null),
    (this.src = t),
    (this.type = n),
    (this.capture = !!r),
    (this.la = i),
    (this.key = ++bS),
    (this.fa = this.ia = !1);
}
function da(e) {
  (e.fa = !0),
    (e.listener = null),
    (e.proxy = null),
    (e.src = null),
    (e.la = null);
}
function nf(e, t, n) {
  for (const r in e) t.call(n, e[r], r, e);
}
function WS(e, t) {
  for (const n in e) t.call(void 0, e[n], n, e);
}
function uv(e) {
  const t = {};
  for (const n in e) t[n] = e[n];
  return t;
}
const Ep =
  "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
    " ",
  );
function cv(e, t) {
  let n, r;
  for (let i = 1; i < arguments.length; i++) {
    r = arguments[i];
    for (n in r) e[n] = r[n];
    for (let s = 0; s < Ep.length; s++)
      (n = Ep[s]), Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }
}
function pa(e) {
  (this.src = e), (this.g = {}), (this.h = 0);
}
pa.prototype.add = function (e, t, n, r, i) {
  var s = e.toString();
  (e = this.g[s]), e || ((e = this.g[s] = []), this.h++);
  var o = Mc(e, t, r, i);
  return (
    -1 < o
      ? ((t = e[o]), n || (t.ia = !1))
      : ((t = new HS(t, this.src, s, !!r, i)), (t.ia = n), e.push(t)),
    t
  );
};
function Lc(e, t) {
  var n = t.type;
  if (n in e.g) {
    var r = e.g[n],
      i = sv(r, t),
      s;
    (s = 0 <= i) && Array.prototype.splice.call(r, i, 1),
      s && (da(t), e.g[n].length == 0 && (delete e.g[n], e.h--));
  }
}
function Mc(e, t, n, r) {
  for (var i = 0; i < e.length; ++i) {
    var s = e[i];
    if (!s.fa && s.listener == t && s.capture == !!n && s.la == r) return i;
  }
  return -1;
}
var rf = "closure_lm_" + ((1e6 * Math.random()) | 0),
  Eu = {};
function hv(e, t, n, r, i) {
  if (r && r.once) return dv(e, t, n, r, i);
  if (Array.isArray(t)) {
    for (var s = 0; s < t.length; s++) hv(e, t[s], n, r, i);
    return null;
  }
  return (
    (n = lf(n)),
    e && e[Qs] ? e.O(t, n, qs(r) ? !!r.capture : !!r, i) : fv(e, t, n, !1, r, i)
  );
}
function fv(e, t, n, r, i, s) {
  if (!t) throw Error("Invalid event type");
  var o = qs(i) ? !!i.capture : !!i,
    l = of(e);
  if ((l || (e[rf] = l = new pa(e)), (n = l.add(t, n, r, o, s)), n.proxy))
    return n;
  if (
    ((r = KS()),
    (n.proxy = r),
    (r.src = e),
    (r.listener = n),
    e.addEventListener)
  )
    $S || (i = o),
      i === void 0 && (i = !1),
      e.addEventListener(t.toString(), r, i);
  else if (e.attachEvent) e.attachEvent(mv(t.toString()), r);
  else if (e.addListener && e.removeListener) e.addListener(r);
  else throw Error("addEventListener and attachEvent are unavailable.");
  return n;
}
function KS() {
  function e(n) {
    return t.call(e.src, e.listener, n);
  }
  const t = qS;
  return e;
}
function dv(e, t, n, r, i) {
  if (Array.isArray(t)) {
    for (var s = 0; s < t.length; s++) dv(e, t[s], n, r, i);
    return null;
  }
  return (
    (n = lf(n)),
    e && e[Qs] ? e.P(t, n, qs(r) ? !!r.capture : !!r, i) : fv(e, t, n, !0, r, i)
  );
}
function pv(e, t, n, r, i) {
  if (Array.isArray(t)) for (var s = 0; s < t.length; s++) pv(e, t[s], n, r, i);
  else
    (r = qs(r) ? !!r.capture : !!r),
      (n = lf(n)),
      e && e[Qs]
        ? ((e = e.i),
          (t = String(t).toString()),
          t in e.g &&
            ((s = e.g[t]),
            (n = Mc(s, n, r, i)),
            -1 < n &&
              (da(s[n]),
              Array.prototype.splice.call(s, n, 1),
              s.length == 0 && (delete e.g[t], e.h--))))
        : e &&
          (e = of(e)) &&
          ((t = e.g[t.toString()]),
          (e = -1),
          t && (e = Mc(t, n, r, i)),
          (n = -1 < e ? t[e] : null) && sf(n));
}
function sf(e) {
  if (typeof e != "number" && e && !e.fa) {
    var t = e.src;
    if (t && t[Qs]) Lc(t.i, e);
    else {
      var n = e.type,
        r = e.proxy;
      t.removeEventListener
        ? t.removeEventListener(n, r, e.capture)
        : t.detachEvent
          ? t.detachEvent(mv(n), r)
          : t.addListener && t.removeListener && t.removeListener(r),
        (n = of(t))
          ? (Lc(n, e), n.h == 0 && ((n.src = null), (t[rf] = null)))
          : da(e);
    }
  }
}
function mv(e) {
  return e in Eu ? Eu[e] : (Eu[e] = "on" + e);
}
function qS(e, t) {
  if (e.fa) e = !0;
  else {
    t = new ks(t, this);
    var n = e.listener,
      r = e.la || e.src;
    e.ia && sf(e), (e = n.call(r, t));
  }
  return e;
}
function of(e) {
  return (e = e[rf]), e instanceof pa ? e : null;
}
var wu = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
function lf(e) {
  return typeof e == "function"
    ? e
    : (e[wu] ||
        (e[wu] = function (t) {
          return e.handleEvent(t);
        }),
      e[wu]);
}
function Re() {
  Gn.call(this), (this.i = new pa(this)), (this.S = this), (this.J = null);
}
ke(Re, Gn);
Re.prototype[Qs] = !0;
Re.prototype.removeEventListener = function (e, t, n, r) {
  pv(this, e, t, n, r);
};
function $e(e, t) {
  var n,
    r = e.J;
  if (r) for (n = []; r; r = r.J) n.push(r);
  if (((e = e.S), (r = t.type || t), typeof t == "string")) t = new Ke(t, e);
  else if (t instanceof Ke) t.target = t.target || e;
  else {
    var i = t;
    (t = new Ke(r, e)), cv(t, i);
  }
  if (((i = !0), n))
    for (var s = n.length - 1; 0 <= s; s--) {
      var o = (t.g = n[s]);
      i = Po(o, r, !0, t) && i;
    }
  if (
    ((o = t.g = e), (i = Po(o, r, !0, t) && i), (i = Po(o, r, !1, t) && i), n)
  )
    for (s = 0; s < n.length; s++) (o = t.g = n[s]), (i = Po(o, r, !1, t) && i);
}
Re.prototype.N = function () {
  if ((Re.$.N.call(this), this.i)) {
    var e = this.i,
      t;
    for (t in e.g) {
      for (var n = e.g[t], r = 0; r < n.length; r++) da(n[r]);
      delete e.g[t], e.h--;
    }
  }
  this.J = null;
};
Re.prototype.O = function (e, t, n, r) {
  return this.i.add(String(e), t, !1, n, r);
};
Re.prototype.P = function (e, t, n, r) {
  return this.i.add(String(e), t, !0, n, r);
};
function Po(e, t, n, r) {
  if (((t = e.i.g[String(t)]), !t)) return !0;
  t = t.concat();
  for (var i = !0, s = 0; s < t.length; ++s) {
    var o = t[s];
    if (o && !o.fa && o.capture == n) {
      var l = o.listener,
        a = o.la || o.src;
      o.ia && Lc(e.i, o), (i = l.call(a, r) !== !1 && i);
    }
  }
  return i && !r.defaultPrevented;
}
var af = U.JSON.stringify;
class QS {
  constructor(t, n) {
    (this.i = t), (this.j = n), (this.h = 0), (this.g = null);
  }
  get() {
    let t;
    return (
      0 < this.h
        ? (this.h--, (t = this.g), (this.g = t.next), (t.next = null))
        : (t = this.i()),
      t
    );
  }
}
function GS() {
  var e = uf;
  let t = null;
  return (
    e.g && ((t = e.g), (e.g = e.g.next), e.g || (e.h = null), (t.next = null)),
    t
  );
}
class XS {
  constructor() {
    this.h = this.g = null;
  }
  add(t, n) {
    const r = gv.get();
    r.set(t, n), this.h ? (this.h.next = r) : (this.g = r), (this.h = r);
  }
}
var gv = new QS(
  () => new YS(),
  (e) => e.reset(),
);
class YS {
  constructor() {
    this.next = this.g = this.h = null;
  }
  set(t, n) {
    (this.h = t), (this.g = n), (this.next = null);
  }
  reset() {
    this.next = this.g = this.h = null;
  }
}
function JS(e) {
  var t = 1;
  e = e.split(":");
  const n = [];
  for (; 0 < t && e.length; ) n.push(e.shift()), t--;
  return e.length && n.push(e.join(":")), n;
}
function ZS(e) {
  U.setTimeout(() => {
    throw e;
  }, 0);
}
let xs,
  Ns = !1,
  uf = new XS(),
  yv = () => {
    const e = U.Promise.resolve(void 0);
    xs = () => {
      e.then(eA);
    };
  };
var eA = () => {
  for (var e; (e = GS()); ) {
    try {
      e.h.call(e.g);
    } catch (n) {
      ZS(n);
    }
    var t = gv;
    t.j(e), 100 > t.h && (t.h++, (e.next = t.g), (t.g = e));
  }
  Ns = !1;
};
function ma(e, t) {
  Re.call(this),
    (this.h = e || 1),
    (this.g = t || U),
    (this.j = We(this.qb, this)),
    (this.l = Date.now());
}
ke(ma, Re);
x = ma.prototype;
x.ga = !1;
x.T = null;
x.qb = function () {
  if (this.ga) {
    var e = Date.now() - this.l;
    0 < e && e < 0.8 * this.h
      ? (this.T = this.g.setTimeout(this.j, this.h - e))
      : (this.T && (this.g.clearTimeout(this.T), (this.T = null)),
        $e(this, "tick"),
        this.ga && (cf(this), this.start()));
  }
};
x.start = function () {
  (this.ga = !0),
    this.T ||
      ((this.T = this.g.setTimeout(this.j, this.h)), (this.l = Date.now()));
};
function cf(e) {
  (e.ga = !1), e.T && (e.g.clearTimeout(e.T), (e.T = null));
}
x.N = function () {
  ma.$.N.call(this), cf(this), delete this.g;
};
function hf(e, t, n) {
  if (typeof e == "function") n && (e = We(e, n));
  else if (e && typeof e.handleEvent == "function") e = We(e.handleEvent, e);
  else throw Error("Invalid listener argument");
  return 2147483647 < Number(t) ? -1 : U.setTimeout(e, t || 0);
}
function vv(e) {
  e.g = hf(() => {
    (e.g = null), e.i && ((e.i = !1), vv(e));
  }, e.j);
  const t = e.h;
  (e.h = null), e.m.apply(null, t);
}
class tA extends Gn {
  constructor(t, n) {
    super(),
      (this.m = t),
      (this.j = n),
      (this.h = null),
      (this.i = !1),
      (this.g = null);
  }
  l(t) {
    (this.h = arguments), this.g ? (this.i = !0) : vv(this);
  }
  N() {
    super.N(),
      this.g &&
        (U.clearTimeout(this.g),
        (this.g = null),
        (this.i = !1),
        (this.h = null));
  }
}
function Ds(e) {
  Gn.call(this), (this.h = e), (this.g = {});
}
ke(Ds, Gn);
var wp = [];
function _v(e, t, n, r) {
  Array.isArray(n) || (n && (wp[0] = n.toString()), (n = wp));
  for (var i = 0; i < n.length; i++) {
    var s = hv(t, n[i], r || e.handleEvent, !1, e.h || e);
    if (!s) break;
    e.g[s.key] = s;
  }
}
function Ev(e) {
  nf(
    e.g,
    function (t, n) {
      this.g.hasOwnProperty(n) && sf(t);
    },
    e,
  ),
    (e.g = {});
}
Ds.prototype.N = function () {
  Ds.$.N.call(this), Ev(this);
};
Ds.prototype.handleEvent = function () {
  throw Error("EventHandler.handleEvent not implemented");
};
function ga() {
  this.g = !0;
}
ga.prototype.Ea = function () {
  this.g = !1;
};
function nA(e, t, n, r, i, s) {
  e.info(function () {
    if (e.g)
      if (s)
        for (var o = "", l = s.split("&"), a = 0; a < l.length; a++) {
          var u = l[a].split("=");
          if (1 < u.length) {
            var c = u[0];
            u = u[1];
            var h = c.split("_");
            o =
              2 <= h.length && h[1] == "type"
                ? o + (c + "=" + u + "&")
                : o + (c + "=redacted&");
          }
        }
      else o = null;
    else o = s;
    return (
      "XMLHTTP REQ (" +
      r +
      ") [attempt " +
      i +
      "]: " +
      t +
      `
` +
      n +
      `
` +
      o
    );
  });
}
function rA(e, t, n, r, i, s, o) {
  e.info(function () {
    return (
      "XMLHTTP RESP (" +
      r +
      ") [ attempt " +
      i +
      "]: " +
      t +
      `
` +
      n +
      `
` +
      s +
      " " +
      o
    );
  });
}
function Wr(e, t, n, r) {
  e.info(function () {
    return "XMLHTTP TEXT (" + t + "): " + sA(e, n) + (r ? " " + r : "");
  });
}
function iA(e, t) {
  e.info(function () {
    return "TIMEOUT: " + t;
  });
}
ga.prototype.info = function () {};
function sA(e, t) {
  if (!e.g) return t;
  if (!t) return null;
  try {
    var n = JSON.parse(t);
    if (n) {
      for (e = 0; e < n.length; e++)
        if (Array.isArray(n[e])) {
          var r = n[e];
          if (!(2 > r.length)) {
            var i = r[1];
            if (Array.isArray(i) && !(1 > i.length)) {
              var s = i[0];
              if (s != "noop" && s != "stop" && s != "close")
                for (var o = 1; o < i.length; o++) i[o] = "";
            }
          }
        }
    }
    return af(n);
  } catch {
    return t;
  }
}
var Pr = {},
  Tp = null;
function ya() {
  return (Tp = Tp || new Re());
}
Pr.Ta = "serverreachability";
function wv(e) {
  Ke.call(this, Pr.Ta, e);
}
ke(wv, Ke);
function Os(e) {
  const t = ya();
  $e(t, new wv(t));
}
Pr.STAT_EVENT = "statevent";
function Tv(e, t) {
  Ke.call(this, Pr.STAT_EVENT, e), (this.stat = t);
}
ke(Tv, Ke);
function Ze(e) {
  const t = ya();
  $e(t, new Tv(t, e));
}
Pr.Ua = "timingevent";
function Iv(e, t) {
  Ke.call(this, Pr.Ua, e), (this.size = t);
}
ke(Iv, Ke);
function Gs(e, t) {
  if (typeof e != "function")
    throw Error("Fn must not be null and must be a function");
  return U.setTimeout(function () {
    e();
  }, t);
}
var va = {
    NO_ERROR: 0,
    rb: 1,
    Eb: 2,
    Db: 3,
    yb: 4,
    Cb: 5,
    Fb: 6,
    Qa: 7,
    TIMEOUT: 8,
    Ib: 9,
  },
  Sv = {
    wb: "complete",
    Sb: "success",
    Ra: "error",
    Qa: "abort",
    Kb: "ready",
    Lb: "readystatechange",
    TIMEOUT: "timeout",
    Gb: "incrementaldata",
    Jb: "progress",
    zb: "downloadprogress",
    $b: "uploadprogress",
  };
function ff() {}
ff.prototype.h = null;
function Ip(e) {
  return e.h || (e.h = e.i());
}
function Av() {}
var Xs = { OPEN: "a", vb: "b", Ra: "c", Hb: "d" };
function df() {
  Ke.call(this, "d");
}
ke(df, Ke);
function pf() {
  Ke.call(this, "c");
}
ke(pf, Ke);
var $c;
function _a() {}
ke(_a, ff);
_a.prototype.g = function () {
  return new XMLHttpRequest();
};
_a.prototype.i = function () {
  return {};
};
$c = new _a();
function Ys(e, t, n, r) {
  (this.l = e),
    (this.j = t),
    (this.m = n),
    (this.W = r || 1),
    (this.U = new Ds(this)),
    (this.P = oA),
    (e = Dc ? 125 : void 0),
    (this.V = new ma(e)),
    (this.I = null),
    (this.i = !1),
    (this.u = this.B = this.A = this.L = this.G = this.Y = this.C = null),
    (this.F = []),
    (this.g = null),
    (this.o = 0),
    (this.s = this.v = null),
    (this.ca = -1),
    (this.J = !1),
    (this.O = 0),
    (this.M = null),
    (this.ba = this.K = this.aa = this.S = !1),
    (this.h = new Cv());
}
function Cv() {
  (this.i = null), (this.g = ""), (this.h = !1);
}
var oA = 45e3,
  Rv = {},
  Fc = {};
x = Ys.prototype;
x.setTimeout = function (e) {
  this.P = e;
};
function Uc(e, t, n) {
  (e.L = 1), (e.A = wa(hn(t))), (e.u = n), (e.S = !0), Pv(e, null);
}
function Pv(e, t) {
  (e.G = Date.now()), Js(e), (e.B = hn(e.A));
  var n = e.B,
    r = e.W;
  Array.isArray(r) || (r = [String(r)]),
    Mv(n.i, "t", r),
    (e.o = 0),
    (n = e.l.J),
    (e.h = new Cv()),
    (e.g = r0(e.l, n ? t : null, !e.u)),
    0 < e.O && (e.M = new tA(We(e.Pa, e, e.g), e.O)),
    _v(e.U, e.g, "readystatechange", e.nb),
    (t = e.I ? uv(e.I) : {}),
    e.u
      ? (e.v || (e.v = "POST"),
        (t["Content-Type"] = "application/x-www-form-urlencoded"),
        e.g.ha(e.B, e.v, e.u, t))
      : ((e.v = "GET"), e.g.ha(e.B, e.v, null, t)),
    Os(),
    nA(e.j, e.v, e.B, e.m, e.W, e.u);
}
x.nb = function (e) {
  e = e.target;
  const t = this.M;
  t && Kt(e) == 3 ? t.l() : this.Pa(e);
};
x.Pa = function (e) {
  try {
    if (e == this.g)
      e: {
        const c = Kt(this.g);
        var t = this.g.Ia();
        const h = this.g.da();
        if (
          !(3 > c) &&
          (c != 3 || Dc || (this.g && (this.h.h || this.g.ja() || Rp(this.g))))
        ) {
          this.J || c != 4 || t == 7 || (t == 8 || 0 >= h ? Os(3) : Os(2)),
            Ea(this);
          var n = this.g.da();
          this.ca = n;
          t: if (kv(this)) {
            var r = Rp(this.g);
            e = "";
            var i = r.length,
              s = Kt(this.g) == 4;
            if (!this.h.i) {
              if (typeof TextDecoder > "u") {
                ir(this), Zi(this);
                var o = "";
                break t;
              }
              this.h.i = new U.TextDecoder();
            }
            for (t = 0; t < i; t++)
              (this.h.h = !0),
                (e += this.h.i.decode(r[t], { stream: s && t == i - 1 }));
            (r.length = 0), (this.h.g += e), (this.o = 0), (o = this.h.g);
          } else o = this.g.ja();
          if (
            ((this.i = n == 200),
            rA(this.j, this.v, this.B, this.m, this.W, c, n),
            this.i)
          ) {
            if (this.aa && !this.K) {
              t: {
                if (this.g) {
                  var l,
                    a = this.g;
                  if (
                    (l = a.g
                      ? a.g.getResponseHeader("X-HTTP-Initial-Response")
                      : null) &&
                    !Ps(l)
                  ) {
                    var u = l;
                    break t;
                  }
                }
                u = null;
              }
              if ((n = u))
                Wr(
                  this.j,
                  this.m,
                  n,
                  "Initial handshake response via X-HTTP-Initial-Response",
                ),
                  (this.K = !0),
                  jc(this, n);
              else {
                (this.i = !1), (this.s = 3), Ze(12), ir(this), Zi(this);
                break e;
              }
            }
            this.S
              ? (xv(this, c, o),
                Dc &&
                  this.i &&
                  c == 3 &&
                  (_v(this.U, this.V, "tick", this.mb), this.V.start()))
              : (Wr(this.j, this.m, o, null), jc(this, o)),
              c == 4 && ir(this),
              this.i &&
                !this.J &&
                (c == 4 ? Zv(this.l, this) : ((this.i = !1), Js(this)));
          } else
            RA(this.g),
              n == 400 && 0 < o.indexOf("Unknown SID")
                ? ((this.s = 3), Ze(12))
                : ((this.s = 0), Ze(13)),
              ir(this),
              Zi(this);
        }
      }
  } catch {
  } finally {
  }
};
function kv(e) {
  return e.g ? e.v == "GET" && e.L != 2 && e.l.Ha : !1;
}
function xv(e, t, n) {
  let r = !0,
    i;
  for (; !e.J && e.o < n.length; )
    if (((i = lA(e, n)), i == Fc)) {
      t == 4 && ((e.s = 4), Ze(14), (r = !1)),
        Wr(e.j, e.m, null, "[Incomplete Response]");
      break;
    } else if (i == Rv) {
      (e.s = 4), Ze(15), Wr(e.j, e.m, n, "[Invalid Chunk]"), (r = !1);
      break;
    } else Wr(e.j, e.m, i, null), jc(e, i);
  kv(e) && e.o != 0 && ((e.h.g = e.h.g.slice(e.o)), (e.o = 0)),
    t != 4 || n.length != 0 || e.h.h || ((e.s = 1), Ze(16), (r = !1)),
    (e.i = e.i && r),
    r
      ? 0 < n.length &&
        !e.ba &&
        ((e.ba = !0),
        (t = e.l),
        t.g == e &&
          t.ca &&
          !t.M &&
          (t.l.info(
            "Great, no buffering proxy detected. Bytes received: " + n.length,
          ),
          Ef(t),
          (t.M = !0),
          Ze(11)))
      : (Wr(e.j, e.m, n, "[Invalid Chunked Response]"), ir(e), Zi(e));
}
x.mb = function () {
  if (this.g) {
    var e = Kt(this.g),
      t = this.g.ja();
    this.o < t.length &&
      (Ea(this), xv(this, e, t), this.i && e != 4 && Js(this));
  }
};
function lA(e, t) {
  var n = e.o,
    r = t.indexOf(
      `
`,
      n,
    );
  return r == -1
    ? Fc
    : ((n = Number(t.substring(n, r))),
      isNaN(n)
        ? Rv
        : ((r += 1),
          r + n > t.length ? Fc : ((t = t.slice(r, r + n)), (e.o = r + n), t)));
}
x.cancel = function () {
  (this.J = !0), ir(this);
};
function Js(e) {
  (e.Y = Date.now() + e.P), Nv(e, e.P);
}
function Nv(e, t) {
  if (e.C != null) throw Error("WatchDog timer not null");
  e.C = Gs(We(e.lb, e), t);
}
function Ea(e) {
  e.C && (U.clearTimeout(e.C), (e.C = null));
}
x.lb = function () {
  this.C = null;
  const e = Date.now();
  0 <= e - this.Y
    ? (iA(this.j, this.B),
      this.L != 2 && (Os(), Ze(17)),
      ir(this),
      (this.s = 2),
      Zi(this))
    : Nv(this, this.Y - e);
};
function Zi(e) {
  e.l.H == 0 || e.J || Zv(e.l, e);
}
function ir(e) {
  Ea(e);
  var t = e.M;
  t && typeof t.sa == "function" && t.sa(),
    (e.M = null),
    cf(e.V),
    Ev(e.U),
    e.g && ((t = e.g), (e.g = null), t.abort(), t.sa());
}
function jc(e, t) {
  try {
    var n = e.l;
    if (n.H != 0 && (n.g == e || Bc(n.i, e))) {
      if (!e.K && Bc(n.i, e) && n.H == 3) {
        try {
          var r = n.Ja.g.parse(t);
        } catch {
          r = null;
        }
        if (Array.isArray(r) && r.length == 3) {
          var i = r;
          if (i[0] == 0) {
            e: if (!n.u) {
              if (n.g)
                if (n.g.G + 3e3 < e.G) kl(n), Aa(n);
                else break e;
              _f(n), Ze(18);
            }
          } else
            (n.Fa = i[1]),
              0 < n.Fa - n.V &&
                37500 > i[2] &&
                n.G &&
                n.A == 0 &&
                !n.v &&
                (n.v = Gs(We(n.ib, n), 6e3));
          if (1 >= Uv(n.i) && n.oa) {
            try {
              n.oa();
            } catch {}
            n.oa = void 0;
          }
        } else sr(n, 11);
      } else if (((e.K || n.g == e) && kl(n), !Ps(t)))
        for (i = n.Ja.g.parse(t), t = 0; t < i.length; t++) {
          let u = i[t];
          if (((n.V = u[0]), (u = u[1]), n.H == 2))
            if (u[0] == "c") {
              (n.K = u[1]), (n.pa = u[2]);
              const c = u[3];
              c != null && ((n.ra = c), n.l.info("VER=" + n.ra));
              const h = u[4];
              h != null && ((n.Ga = h), n.l.info("SVER=" + n.Ga));
              const d = u[5];
              d != null &&
                typeof d == "number" &&
                0 < d &&
                ((r = 1.5 * d),
                (n.L = r),
                n.l.info("backChannelRequestTimeoutMs_=" + r)),
                (r = n);
              const g = e.g;
              if (g) {
                const y = g.g
                  ? g.g.getResponseHeader("X-Client-Wire-Protocol")
                  : null;
                if (y) {
                  var s = r.i;
                  s.g ||
                    (y.indexOf("spdy") == -1 &&
                      y.indexOf("quic") == -1 &&
                      y.indexOf("h2") == -1) ||
                    ((s.j = s.l),
                    (s.g = new Set()),
                    s.h && (mf(s, s.h), (s.h = null)));
                }
                if (r.F) {
                  const v = g.g
                    ? g.g.getResponseHeader("X-HTTP-Session-Id")
                    : null;
                  v && ((r.Da = v), te(r.I, r.F, v));
                }
              }
              (n.H = 3),
                n.h && n.h.Ba(),
                n.ca &&
                  ((n.S = Date.now() - e.G),
                  n.l.info("Handshake RTT: " + n.S + "ms")),
                (r = n);
              var o = e;
              if (((r.wa = n0(r, r.J ? r.pa : null, r.Y)), o.K)) {
                jv(r.i, o);
                var l = o,
                  a = r.L;
                a && l.setTimeout(a), l.C && (Ea(l), Js(l)), (r.g = o);
              } else Yv(r);
              0 < n.j.length && Ca(n);
            } else (u[0] != "stop" && u[0] != "close") || sr(n, 7);
          else
            n.H == 3 &&
              (u[0] == "stop" || u[0] == "close"
                ? u[0] == "stop"
                  ? sr(n, 7)
                  : vf(n)
                : u[0] != "noop" && n.h && n.h.Aa(u),
              (n.A = 0));
        }
    }
    Os(4);
  } catch {}
}
function aA(e) {
  if (e.Z && typeof e.Z == "function") return e.Z();
  if (
    (typeof Map < "u" && e instanceof Map) ||
    (typeof Set < "u" && e instanceof Set)
  )
    return Array.from(e.values());
  if (typeof e == "string") return e.split("");
  if (ha(e)) {
    for (var t = [], n = e.length, r = 0; r < n; r++) t.push(e[r]);
    return t;
  }
  (t = []), (n = 0);
  for (r in e) t[n++] = e[r];
  return t;
}
function uA(e) {
  if (e.ta && typeof e.ta == "function") return e.ta();
  if (!e.Z || typeof e.Z != "function") {
    if (typeof Map < "u" && e instanceof Map) return Array.from(e.keys());
    if (!(typeof Set < "u" && e instanceof Set)) {
      if (ha(e) || typeof e == "string") {
        var t = [];
        e = e.length;
        for (var n = 0; n < e; n++) t.push(n);
        return t;
      }
      (t = []), (n = 0);
      for (const r in e) t[n++] = r;
      return t;
    }
  }
}
function Dv(e, t) {
  if (e.forEach && typeof e.forEach == "function") e.forEach(t, void 0);
  else if (ha(e) || typeof e == "string")
    Array.prototype.forEach.call(e, t, void 0);
  else
    for (var n = uA(e), r = aA(e), i = r.length, s = 0; s < i; s++)
      t.call(void 0, r[s], n && n[s], e);
}
var Ov = RegExp(
  "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$",
);
function cA(e, t) {
  if (e) {
    e = e.split("&");
    for (var n = 0; n < e.length; n++) {
      var r = e[n].indexOf("="),
        i = null;
      if (0 <= r) {
        var s = e[n].substring(0, r);
        i = e[n].substring(r + 1);
      } else s = e[n];
      t(s, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "");
    }
  }
}
function dr(e) {
  if (
    ((this.g = this.s = this.j = ""),
    (this.m = null),
    (this.o = this.l = ""),
    (this.h = !1),
    e instanceof dr)
  ) {
    (this.h = e.h),
      Rl(this, e.j),
      (this.s = e.s),
      (this.g = e.g),
      Pl(this, e.m),
      (this.l = e.l);
    var t = e.i,
      n = new Vs();
    (n.i = t.i),
      t.g && ((n.g = new Map(t.g)), (n.h = t.h)),
      Sp(this, n),
      (this.o = e.o);
  } else
    e && (t = String(e).match(Ov))
      ? ((this.h = !1),
        Rl(this, t[1] || "", !0),
        (this.s = ji(t[2] || "")),
        (this.g = ji(t[3] || "", !0)),
        Pl(this, t[4]),
        (this.l = ji(t[5] || "", !0)),
        Sp(this, t[6] || "", !0),
        (this.o = ji(t[7] || "")))
      : ((this.h = !1), (this.i = new Vs(null, this.h)));
}
dr.prototype.toString = function () {
  var e = [],
    t = this.j;
  t && e.push(Bi(t, Ap, !0), ":");
  var n = this.g;
  return (
    (n || t == "file") &&
      (e.push("//"),
      (t = this.s) && e.push(Bi(t, Ap, !0), "@"),
      e.push(
        encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"),
      ),
      (n = this.m),
      n != null && e.push(":", String(n))),
    (n = this.l) &&
      (this.g && n.charAt(0) != "/" && e.push("/"),
      e.push(Bi(n, n.charAt(0) == "/" ? dA : fA, !0))),
    (n = this.i.toString()) && e.push("?", n),
    (n = this.o) && e.push("#", Bi(n, mA)),
    e.join("")
  );
};
function hn(e) {
  return new dr(e);
}
function Rl(e, t, n) {
  (e.j = n ? ji(t, !0) : t), e.j && (e.j = e.j.replace(/:$/, ""));
}
function Pl(e, t) {
  if (t) {
    if (((t = Number(t)), isNaN(t) || 0 > t))
      throw Error("Bad port number " + t);
    e.m = t;
  } else e.m = null;
}
function Sp(e, t, n) {
  t instanceof Vs
    ? ((e.i = t), gA(e.i, e.h))
    : (n || (t = Bi(t, pA)), (e.i = new Vs(t, e.h)));
}
function te(e, t, n) {
  e.i.set(t, n);
}
function wa(e) {
  return (
    te(
      e,
      "zx",
      Math.floor(2147483648 * Math.random()).toString(36) +
        Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(
          36,
        ),
    ),
    e
  );
}
function ji(e, t) {
  return e
    ? t
      ? decodeURI(e.replace(/%25/g, "%2525"))
      : decodeURIComponent(e)
    : "";
}
function Bi(e, t, n) {
  return typeof e == "string"
    ? ((e = encodeURI(e).replace(t, hA)),
      n && (e = e.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
      e)
    : null;
}
function hA(e) {
  return (
    (e = e.charCodeAt(0)),
    "%" + ((e >> 4) & 15).toString(16) + (e & 15).toString(16)
  );
}
var Ap = /[#\/\?@]/g,
  fA = /[#\?:]/g,
  dA = /[#\?]/g,
  pA = /[#\?@]/g,
  mA = /#/g;
function Vs(e, t) {
  (this.h = this.g = null), (this.i = e || null), (this.j = !!t);
}
function Xn(e) {
  e.g ||
    ((e.g = new Map()),
    (e.h = 0),
    e.i &&
      cA(e.i, function (t, n) {
        e.add(decodeURIComponent(t.replace(/\+/g, " ")), n);
      }));
}
x = Vs.prototype;
x.add = function (e, t) {
  Xn(this), (this.i = null), (e = vi(this, e));
  var n = this.g.get(e);
  return n || this.g.set(e, (n = [])), n.push(t), (this.h += 1), this;
};
function Vv(e, t) {
  Xn(e),
    (t = vi(e, t)),
    e.g.has(t) && ((e.i = null), (e.h -= e.g.get(t).length), e.g.delete(t));
}
function Lv(e, t) {
  return Xn(e), (t = vi(e, t)), e.g.has(t);
}
x.forEach = function (e, t) {
  Xn(this),
    this.g.forEach(function (n, r) {
      n.forEach(function (i) {
        e.call(t, i, r, this);
      }, this);
    }, this);
};
x.ta = function () {
  Xn(this);
  const e = Array.from(this.g.values()),
    t = Array.from(this.g.keys()),
    n = [];
  for (let r = 0; r < t.length; r++) {
    const i = e[r];
    for (let s = 0; s < i.length; s++) n.push(t[r]);
  }
  return n;
};
x.Z = function (e) {
  Xn(this);
  let t = [];
  if (typeof e == "string")
    Lv(this, e) && (t = t.concat(this.g.get(vi(this, e))));
  else {
    e = Array.from(this.g.values());
    for (let n = 0; n < e.length; n++) t = t.concat(e[n]);
  }
  return t;
};
x.set = function (e, t) {
  return (
    Xn(this),
    (this.i = null),
    (e = vi(this, e)),
    Lv(this, e) && (this.h -= this.g.get(e).length),
    this.g.set(e, [t]),
    (this.h += 1),
    this
  );
};
x.get = function (e, t) {
  return e ? ((e = this.Z(e)), 0 < e.length ? String(e[0]) : t) : t;
};
function Mv(e, t, n) {
  Vv(e, t),
    0 < n.length && ((e.i = null), e.g.set(vi(e, t), ef(n)), (e.h += n.length));
}
x.toString = function () {
  if (this.i) return this.i;
  if (!this.g) return "";
  const e = [],
    t = Array.from(this.g.keys());
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    const s = encodeURIComponent(String(r)),
      o = this.Z(r);
    for (r = 0; r < o.length; r++) {
      var i = s;
      o[r] !== "" && (i += "=" + encodeURIComponent(String(o[r]))), e.push(i);
    }
  }
  return (this.i = e.join("&"));
};
function vi(e, t) {
  return (t = String(t)), e.j && (t = t.toLowerCase()), t;
}
function gA(e, t) {
  t &&
    !e.j &&
    (Xn(e),
    (e.i = null),
    e.g.forEach(function (n, r) {
      var i = r.toLowerCase();
      r != i && (Vv(this, r), Mv(this, i, n));
    }, e)),
    (e.j = t);
}
var yA = class {
  constructor(e, t) {
    (this.g = e), (this.map = t);
  }
};
function $v(e) {
  (this.l = e || vA),
    U.PerformanceNavigationTiming
      ? ((e = U.performance.getEntriesByType("navigation")),
        (e =
          0 < e.length &&
          (e[0].nextHopProtocol == "hq" || e[0].nextHopProtocol == "h2")))
      : (e = !!(U.g && U.g.Ka && U.g.Ka() && U.g.Ka().dc)),
    (this.j = e ? this.l : 1),
    (this.g = null),
    1 < this.j && (this.g = new Set()),
    (this.h = null),
    (this.i = []);
}
var vA = 10;
function Fv(e) {
  return e.h ? !0 : e.g ? e.g.size >= e.j : !1;
}
function Uv(e) {
  return e.h ? 1 : e.g ? e.g.size : 0;
}
function Bc(e, t) {
  return e.h ? e.h == t : e.g ? e.g.has(t) : !1;
}
function mf(e, t) {
  e.g ? e.g.add(t) : (e.h = t);
}
function jv(e, t) {
  e.h && e.h == t ? (e.h = null) : e.g && e.g.has(t) && e.g.delete(t);
}
$v.prototype.cancel = function () {
  if (((this.i = Bv(this)), this.h)) this.h.cancel(), (this.h = null);
  else if (this.g && this.g.size !== 0) {
    for (const e of this.g.values()) e.cancel();
    this.g.clear();
  }
};
function Bv(e) {
  if (e.h != null) return e.i.concat(e.h.F);
  if (e.g != null && e.g.size !== 0) {
    let t = e.i;
    for (const n of e.g.values()) t = t.concat(n.F);
    return t;
  }
  return ef(e.i);
}
var _A = class {
  stringify(e) {
    return U.JSON.stringify(e, void 0);
  }
  parse(e) {
    return U.JSON.parse(e, void 0);
  }
};
function EA() {
  this.g = new _A();
}
function wA(e, t, n) {
  const r = n || "";
  try {
    Dv(e, function (i, s) {
      let o = i;
      qs(i) && (o = af(i)), t.push(r + s + "=" + encodeURIComponent(o));
    });
  } catch (i) {
    throw (t.push(r + "type=" + encodeURIComponent("_badmap")), i);
  }
}
function TA(e, t) {
  const n = new ga();
  if (U.Image) {
    const r = new Image();
    (r.onload = Ro(ko, n, r, "TestLoadImage: loaded", !0, t)),
      (r.onerror = Ro(ko, n, r, "TestLoadImage: error", !1, t)),
      (r.onabort = Ro(ko, n, r, "TestLoadImage: abort", !1, t)),
      (r.ontimeout = Ro(ko, n, r, "TestLoadImage: timeout", !1, t)),
      U.setTimeout(function () {
        r.ontimeout && r.ontimeout();
      }, 1e4),
      (r.src = e);
  } else t(!1);
}
function ko(e, t, n, r, i) {
  try {
    (t.onload = null),
      (t.onerror = null),
      (t.onabort = null),
      (t.ontimeout = null),
      i(r);
  } catch {}
}
function Ta(e) {
  (this.l = e.ec || null), (this.j = e.ob || !1);
}
ke(Ta, ff);
Ta.prototype.g = function () {
  return new Ia(this.l, this.j);
};
Ta.prototype.i = (function (e) {
  return function () {
    return e;
  };
})({});
function Ia(e, t) {
  Re.call(this),
    (this.F = e),
    (this.u = t),
    (this.m = void 0),
    (this.readyState = gf),
    (this.status = 0),
    (this.responseType =
      this.responseText =
      this.response =
      this.statusText =
        ""),
    (this.onreadystatechange = null),
    (this.v = new Headers()),
    (this.h = null),
    (this.C = "GET"),
    (this.B = ""),
    (this.g = !1),
    (this.A = this.j = this.l = null);
}
ke(Ia, Re);
var gf = 0;
x = Ia.prototype;
x.open = function (e, t) {
  if (this.readyState != gf)
    throw (this.abort(), Error("Error reopening a connection"));
  (this.C = e), (this.B = t), (this.readyState = 1), Ls(this);
};
x.send = function (e) {
  if (this.readyState != 1)
    throw (this.abort(), Error("need to call open() first. "));
  this.g = !0;
  const t = {
    headers: this.v,
    method: this.C,
    credentials: this.m,
    cache: void 0,
  };
  e && (t.body = e),
    (this.F || U)
      .fetch(new Request(this.B, t))
      .then(this.$a.bind(this), this.ka.bind(this));
};
x.abort = function () {
  (this.response = this.responseText = ""),
    (this.v = new Headers()),
    (this.status = 0),
    this.j && this.j.cancel("Request was aborted.").catch(() => {}),
    1 <= this.readyState &&
      this.g &&
      this.readyState != 4 &&
      ((this.g = !1), Zs(this)),
    (this.readyState = gf);
};
x.$a = function (e) {
  if (
    this.g &&
    ((this.l = e),
    this.h ||
      ((this.status = this.l.status),
      (this.statusText = this.l.statusText),
      (this.h = e.headers),
      (this.readyState = 2),
      Ls(this)),
    this.g && ((this.readyState = 3), Ls(this), this.g))
  )
    if (this.responseType === "arraybuffer")
      e.arrayBuffer().then(this.Ya.bind(this), this.ka.bind(this));
    else if (typeof U.ReadableStream < "u" && "body" in e) {
      if (((this.j = e.body.getReader()), this.u)) {
        if (this.responseType)
          throw Error(
            'responseType must be empty for "streamBinaryChunks" mode responses.',
          );
        this.response = [];
      } else
        (this.response = this.responseText = ""), (this.A = new TextDecoder());
      zv(this);
    } else e.text().then(this.Za.bind(this), this.ka.bind(this));
};
function zv(e) {
  e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e));
}
x.Xa = function (e) {
  if (this.g) {
    if (this.u && e.value) this.response.push(e.value);
    else if (!this.u) {
      var t = e.value ? e.value : new Uint8Array(0);
      (t = this.A.decode(t, { stream: !e.done })) &&
        (this.response = this.responseText += t);
    }
    e.done ? Zs(this) : Ls(this), this.readyState == 3 && zv(this);
  }
};
x.Za = function (e) {
  this.g && ((this.response = this.responseText = e), Zs(this));
};
x.Ya = function (e) {
  this.g && ((this.response = e), Zs(this));
};
x.ka = function () {
  this.g && Zs(this);
};
function Zs(e) {
  (e.readyState = 4), (e.l = null), (e.j = null), (e.A = null), Ls(e);
}
x.setRequestHeader = function (e, t) {
  this.v.append(e, t);
};
x.getResponseHeader = function (e) {
  return (this.h && this.h.get(e.toLowerCase())) || "";
};
x.getAllResponseHeaders = function () {
  if (!this.h) return "";
  const e = [],
    t = this.h.entries();
  for (var n = t.next(); !n.done; )
    (n = n.value), e.push(n[0] + ": " + n[1]), (n = t.next());
  return e.join(`\r
`);
};
function Ls(e) {
  e.onreadystatechange && e.onreadystatechange.call(e);
}
Object.defineProperty(Ia.prototype, "withCredentials", {
  get: function () {
    return this.m === "include";
  },
  set: function (e) {
    this.m = e ? "include" : "same-origin";
  },
});
var IA = U.JSON.parse;
function he(e) {
  Re.call(this),
    (this.headers = new Map()),
    (this.u = e || null),
    (this.h = !1),
    (this.C = this.g = null),
    (this.I = ""),
    (this.m = 0),
    (this.j = ""),
    (this.l = this.G = this.v = this.F = !1),
    (this.B = 0),
    (this.A = null),
    (this.K = bv),
    (this.L = this.M = !1);
}
ke(he, Re);
var bv = "",
  SA = /^https?$/i,
  AA = ["POST", "PUT"];
x = he.prototype;
x.Oa = function (e) {
  this.M = e;
};
x.ha = function (e, t, n, r) {
  if (this.g)
    throw Error(
      "[goog.net.XhrIo] Object is active with another request=" +
        this.I +
        "; newUri=" +
        e,
    );
  (t = t ? t.toUpperCase() : "GET"),
    (this.I = e),
    (this.j = ""),
    (this.m = 0),
    (this.F = !1),
    (this.h = !0),
    (this.g = this.u ? this.u.g() : $c.g()),
    (this.C = this.u ? Ip(this.u) : Ip($c)),
    (this.g.onreadystatechange = We(this.La, this));
  try {
    (this.G = !0), this.g.open(t, String(e), !0), (this.G = !1);
  } catch (s) {
    Cp(this, s);
    return;
  }
  if (((e = n || ""), (n = new Map(this.headers)), r))
    if (Object.getPrototypeOf(r) === Object.prototype)
      for (var i in r) n.set(i, r[i]);
    else if (typeof r.keys == "function" && typeof r.get == "function")
      for (const s of r.keys()) n.set(s, r.get(s));
    else throw Error("Unknown input type for opt_headers: " + String(r));
  (r = Array.from(n.keys()).find((s) => s.toLowerCase() == "content-type")),
    (i = U.FormData && e instanceof U.FormData),
    !(0 <= sv(AA, t)) ||
      r ||
      i ||
      n.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  for (const [s, o] of n) this.g.setRequestHeader(s, o);
  this.K && (this.g.responseType = this.K),
    "withCredentials" in this.g &&
      this.g.withCredentials !== this.M &&
      (this.g.withCredentials = this.M);
  try {
    Kv(this),
      0 < this.B &&
        ((this.L = CA(this.g))
          ? ((this.g.timeout = this.B), (this.g.ontimeout = We(this.ua, this)))
          : (this.A = hf(this.ua, this.B, this))),
      (this.v = !0),
      this.g.send(e),
      (this.v = !1);
  } catch (s) {
    Cp(this, s);
  }
};
function CA(e) {
  return ai && typeof e.timeout == "number" && e.ontimeout !== void 0;
}
x.ua = function () {
  typeof Zh < "u" &&
    this.g &&
    ((this.j = "Timed out after " + this.B + "ms, aborting"),
    (this.m = 8),
    $e(this, "timeout"),
    this.abort(8));
};
function Cp(e, t) {
  (e.h = !1),
    e.g && ((e.l = !0), e.g.abort(), (e.l = !1)),
    (e.j = t),
    (e.m = 5),
    Hv(e),
    Sa(e);
}
function Hv(e) {
  e.F || ((e.F = !0), $e(e, "complete"), $e(e, "error"));
}
x.abort = function (e) {
  this.g &&
    this.h &&
    ((this.h = !1),
    (this.l = !0),
    this.g.abort(),
    (this.l = !1),
    (this.m = e || 7),
    $e(this, "complete"),
    $e(this, "abort"),
    Sa(this));
};
x.N = function () {
  this.g &&
    (this.h && ((this.h = !1), (this.l = !0), this.g.abort(), (this.l = !1)),
    Sa(this, !0)),
    he.$.N.call(this);
};
x.La = function () {
  this.s || (this.G || this.v || this.l ? Wv(this) : this.kb());
};
x.kb = function () {
  Wv(this);
};
function Wv(e) {
  if (e.h && typeof Zh < "u" && (!e.C[1] || Kt(e) != 4 || e.da() != 2)) {
    if (e.v && Kt(e) == 4) hf(e.La, 0, e);
    else if (($e(e, "readystatechange"), Kt(e) == 4)) {
      e.h = !1;
      try {
        const o = e.da();
        e: switch (o) {
          case 200:
          case 201:
          case 202:
          case 204:
          case 206:
          case 304:
          case 1223:
            var t = !0;
            break e;
          default:
            t = !1;
        }
        var n;
        if (!(n = t)) {
          var r;
          if ((r = o === 0)) {
            var i = String(e.I).match(Ov)[1] || null;
            !i &&
              U.self &&
              U.self.location &&
              (i = U.self.location.protocol.slice(0, -1)),
              (r = !SA.test(i ? i.toLowerCase() : ""));
          }
          n = r;
        }
        if (n) $e(e, "complete"), $e(e, "success");
        else {
          e.m = 6;
          try {
            var s = 2 < Kt(e) ? e.g.statusText : "";
          } catch {
            s = "";
          }
          (e.j = s + " [" + e.da() + "]"), Hv(e);
        }
      } finally {
        Sa(e);
      }
    }
  }
}
function Sa(e, t) {
  if (e.g) {
    Kv(e);
    const n = e.g,
      r = e.C[0] ? () => {} : null;
    (e.g = null), (e.C = null), t || $e(e, "ready");
    try {
      n.onreadystatechange = r;
    } catch {}
  }
}
function Kv(e) {
  e.g && e.L && (e.g.ontimeout = null),
    e.A && (U.clearTimeout(e.A), (e.A = null));
}
x.isActive = function () {
  return !!this.g;
};
function Kt(e) {
  return e.g ? e.g.readyState : 0;
}
x.da = function () {
  try {
    return 2 < Kt(this) ? this.g.status : -1;
  } catch {
    return -1;
  }
};
x.ja = function () {
  try {
    return this.g ? this.g.responseText : "";
  } catch {
    return "";
  }
};
x.Wa = function (e) {
  if (this.g) {
    var t = this.g.responseText;
    return e && t.indexOf(e) == 0 && (t = t.substring(e.length)), IA(t);
  }
};
function Rp(e) {
  try {
    if (!e.g) return null;
    if ("response" in e.g) return e.g.response;
    switch (e.K) {
      case bv:
      case "text":
        return e.g.responseText;
      case "arraybuffer":
        if ("mozResponseArrayBuffer" in e.g) return e.g.mozResponseArrayBuffer;
    }
    return null;
  } catch {
    return null;
  }
}
function RA(e) {
  const t = {};
  e = ((e.g && 2 <= Kt(e) && e.g.getAllResponseHeaders()) || "").split(`\r
`);
  for (let r = 0; r < e.length; r++) {
    if (Ps(e[r])) continue;
    var n = JS(e[r]);
    const i = n[0];
    if (((n = n[1]), typeof n != "string")) continue;
    n = n.trim();
    const s = t[i] || [];
    (t[i] = s), s.push(n);
  }
  WS(t, function (r) {
    return r.join(", ");
  });
}
x.Ia = function () {
  return this.m;
};
x.Sa = function () {
  return typeof this.j == "string" ? this.j : String(this.j);
};
function qv(e) {
  let t = "";
  return (
    nf(e, function (n, r) {
      (t += r),
        (t += ":"),
        (t += n),
        (t += `\r
`);
    }),
    t
  );
}
function yf(e, t, n) {
  e: {
    for (r in n) {
      var r = !1;
      break e;
    }
    r = !0;
  }
  r ||
    ((n = qv(n)),
    typeof e == "string"
      ? n != null && encodeURIComponent(String(n))
      : te(e, t, n));
}
function Ni(e, t, n) {
  return (n && n.internalChannelParams && n.internalChannelParams[e]) || t;
}
function Qv(e) {
  (this.Ga = 0),
    (this.j = []),
    (this.l = new ga()),
    (this.pa =
      this.wa =
      this.I =
      this.Y =
      this.g =
      this.Da =
      this.F =
      this.na =
      this.o =
      this.U =
      this.s =
        null),
    (this.fb = this.W = 0),
    (this.cb = Ni("failFast", !1, e)),
    (this.G = this.v = this.u = this.m = this.h = null),
    (this.aa = !0),
    (this.Fa = this.V = -1),
    (this.ba = this.A = this.C = 0),
    (this.ab = Ni("baseRetryDelayMs", 5e3, e)),
    (this.hb = Ni("retryDelaySeedMs", 1e4, e)),
    (this.eb = Ni("forwardChannelMaxRetries", 2, e)),
    (this.xa = Ni("forwardChannelRequestTimeoutMs", 2e4, e)),
    (this.va = (e && e.xmlHttpFactory) || void 0),
    (this.Ha = (e && e.useFetchStreams) || !1),
    (this.L = void 0),
    (this.J = (e && e.supportsCrossDomainXhr) || !1),
    (this.K = ""),
    (this.i = new $v(e && e.concurrentRequestLimit)),
    (this.Ja = new EA()),
    (this.P = (e && e.fastHandshake) || !1),
    (this.O = (e && e.encodeInitMessageHeaders) || !1),
    this.P && this.O && (this.O = !1),
    (this.bb = (e && e.bc) || !1),
    e && e.Ea && this.l.Ea(),
    e && e.forceLongPolling && (this.aa = !1),
    (this.ca = (!this.P && this.aa && e && e.detectBufferingProxy) || !1),
    (this.qa = void 0),
    e &&
      e.longPollingTimeout &&
      0 < e.longPollingTimeout &&
      (this.qa = e.longPollingTimeout),
    (this.oa = void 0),
    (this.S = 0),
    (this.M = !1),
    (this.ma = this.B = null);
}
x = Qv.prototype;
x.ra = 8;
x.H = 1;
function vf(e) {
  if ((Gv(e), e.H == 3)) {
    var t = e.W++,
      n = hn(e.I);
    if (
      (te(n, "SID", e.K),
      te(n, "RID", t),
      te(n, "TYPE", "terminate"),
      eo(e, n),
      (t = new Ys(e, e.l, t)),
      (t.L = 2),
      (t.A = wa(hn(n))),
      (n = !1),
      U.navigator && U.navigator.sendBeacon)
    )
      try {
        n = U.navigator.sendBeacon(t.A.toString(), "");
      } catch {}
    !n && U.Image && ((new Image().src = t.A), (n = !0)),
      n || ((t.g = r0(t.l, null)), t.g.ha(t.A)),
      (t.G = Date.now()),
      Js(t);
  }
  t0(e);
}
function Aa(e) {
  e.g && (Ef(e), e.g.cancel(), (e.g = null));
}
function Gv(e) {
  Aa(e),
    e.u && (U.clearTimeout(e.u), (e.u = null)),
    kl(e),
    e.i.cancel(),
    e.m && (typeof e.m == "number" && U.clearTimeout(e.m), (e.m = null));
}
function Ca(e) {
  if (!Fv(e.i) && !e.m) {
    e.m = !0;
    var t = e.Na;
    xs || yv(), Ns || (xs(), (Ns = !0)), uf.add(t, e), (e.C = 0);
  }
}
function PA(e, t) {
  return Uv(e.i) >= e.i.j - (e.m ? 1 : 0)
    ? !1
    : e.m
      ? ((e.j = t.F.concat(e.j)), !0)
      : e.H == 1 || e.H == 2 || e.C >= (e.cb ? 0 : e.eb)
        ? !1
        : ((e.m = Gs(We(e.Na, e, t), e0(e, e.C))), e.C++, !0);
}
x.Na = function (e) {
  if (this.m)
    if (((this.m = null), this.H == 1)) {
      if (!e) {
        (this.W = Math.floor(1e5 * Math.random())), (e = this.W++);
        const i = new Ys(this, this.l, e);
        let s = this.s;
        if (
          (this.U && (s ? ((s = uv(s)), cv(s, this.U)) : (s = this.U)),
          this.o !== null || this.O || ((i.I = s), (s = null)),
          this.P)
        )
          e: {
            for (var t = 0, n = 0; n < this.j.length; n++) {
              t: {
                var r = this.j[n];
                if (
                  "__data__" in r.map &&
                  ((r = r.map.__data__), typeof r == "string")
                ) {
                  r = r.length;
                  break t;
                }
                r = void 0;
              }
              if (r === void 0) break;
              if (((t += r), 4096 < t)) {
                t = n;
                break e;
              }
              if (t === 4096 || n === this.j.length - 1) {
                t = n + 1;
                break e;
              }
            }
            t = 1e3;
          }
        else t = 1e3;
        (t = Xv(this, i, t)),
          (n = hn(this.I)),
          te(n, "RID", e),
          te(n, "CVER", 22),
          this.F && te(n, "X-HTTP-Session-Id", this.F),
          eo(this, n),
          s &&
            (this.O
              ? (t = "headers=" + encodeURIComponent(String(qv(s))) + "&" + t)
              : this.o && yf(n, this.o, s)),
          mf(this.i, i),
          this.bb && te(n, "TYPE", "init"),
          this.P
            ? (te(n, "$req", t),
              te(n, "SID", "null"),
              (i.aa = !0),
              Uc(i, n, null))
            : Uc(i, n, t),
          (this.H = 2);
      }
    } else
      this.H == 3 &&
        (e ? Pp(this, e) : this.j.length == 0 || Fv(this.i) || Pp(this));
};
function Pp(e, t) {
  var n;
  t ? (n = t.m) : (n = e.W++);
  const r = hn(e.I);
  te(r, "SID", e.K),
    te(r, "RID", n),
    te(r, "AID", e.V),
    eo(e, r),
    e.o && e.s && yf(r, e.o, e.s),
    (n = new Ys(e, e.l, n, e.C + 1)),
    e.o === null && (n.I = e.s),
    t && (e.j = t.F.concat(e.j)),
    (t = Xv(e, n, 1e3)),
    n.setTimeout(
      Math.round(0.5 * e.xa) + Math.round(0.5 * e.xa * Math.random()),
    ),
    mf(e.i, n),
    Uc(n, r, t);
}
function eo(e, t) {
  e.na &&
    nf(e.na, function (n, r) {
      te(t, r, n);
    }),
    e.h &&
      Dv({}, function (n, r) {
        te(t, r, n);
      });
}
function Xv(e, t, n) {
  n = Math.min(e.j.length, n);
  var r = e.h ? We(e.h.Va, e.h, e) : null;
  e: {
    var i = e.j;
    let s = -1;
    for (;;) {
      const o = ["count=" + n];
      s == -1
        ? 0 < n
          ? ((s = i[0].g), o.push("ofs=" + s))
          : (s = 0)
        : o.push("ofs=" + s);
      let l = !0;
      for (let a = 0; a < n; a++) {
        let u = i[a].g;
        const c = i[a].map;
        if (((u -= s), 0 > u)) (s = Math.max(0, i[a].g - 100)), (l = !1);
        else
          try {
            wA(c, o, "req" + u + "_");
          } catch {
            r && r(c);
          }
      }
      if (l) {
        r = o.join("&");
        break e;
      }
    }
  }
  return (e = e.j.splice(0, n)), (t.F = e), r;
}
function Yv(e) {
  if (!e.g && !e.u) {
    e.ba = 1;
    var t = e.Ma;
    xs || yv(), Ns || (xs(), (Ns = !0)), uf.add(t, e), (e.A = 0);
  }
}
function _f(e) {
  return e.g || e.u || 3 <= e.A
    ? !1
    : (e.ba++, (e.u = Gs(We(e.Ma, e), e0(e, e.A))), e.A++, !0);
}
x.Ma = function () {
  if (
    ((this.u = null),
    Jv(this),
    this.ca && !(this.M || this.g == null || 0 >= this.S))
  ) {
    var e = 2 * this.S;
    this.l.info("BP detection timer enabled: " + e),
      (this.B = Gs(We(this.jb, this), e));
  }
};
x.jb = function () {
  this.B &&
    ((this.B = null),
    this.l.info("BP detection timeout reached."),
    this.l.info("Buffering proxy detected and switch to long-polling!"),
    (this.G = !1),
    (this.M = !0),
    Ze(10),
    Aa(this),
    Jv(this));
};
function Ef(e) {
  e.B != null && (U.clearTimeout(e.B), (e.B = null));
}
function Jv(e) {
  (e.g = new Ys(e, e.l, "rpc", e.ba)),
    e.o === null && (e.g.I = e.s),
    (e.g.O = 0);
  var t = hn(e.wa);
  te(t, "RID", "rpc"),
    te(t, "SID", e.K),
    te(t, "AID", e.V),
    te(t, "CI", e.G ? "0" : "1"),
    !e.G && e.qa && te(t, "TO", e.qa),
    te(t, "TYPE", "xmlhttp"),
    eo(e, t),
    e.o && e.s && yf(t, e.o, e.s),
    e.L && e.g.setTimeout(e.L);
  var n = e.g;
  (e = e.pa), (n.L = 1), (n.A = wa(hn(t))), (n.u = null), (n.S = !0), Pv(n, e);
}
x.ib = function () {
  this.v != null && ((this.v = null), Aa(this), _f(this), Ze(19));
};
function kl(e) {
  e.v != null && (U.clearTimeout(e.v), (e.v = null));
}
function Zv(e, t) {
  var n = null;
  if (e.g == t) {
    kl(e), Ef(e), (e.g = null);
    var r = 2;
  } else if (Bc(e.i, t)) (n = t.F), jv(e.i, t), (r = 1);
  else return;
  if (e.H != 0) {
    if (t.i)
      if (r == 1) {
        (n = t.u ? t.u.length : 0), (t = Date.now() - t.G);
        var i = e.C;
        (r = ya()), $e(r, new Iv(r, n)), Ca(e);
      } else Yv(e);
    else if (
      ((i = t.s),
      i == 3 ||
        (i == 0 && 0 < t.ca) ||
        !((r == 1 && PA(e, t)) || (r == 2 && _f(e))))
    )
      switch ((n && 0 < n.length && ((t = e.i), (t.i = t.i.concat(n))), i)) {
        case 1:
          sr(e, 5);
          break;
        case 4:
          sr(e, 10);
          break;
        case 3:
          sr(e, 6);
          break;
        default:
          sr(e, 2);
      }
  }
}
function e0(e, t) {
  let n = e.ab + Math.floor(Math.random() * e.hb);
  return e.isActive() || (n *= 2), n * t;
}
function sr(e, t) {
  if ((e.l.info("Error code " + t), t == 2)) {
    var n = null;
    e.h && (n = null);
    var r = We(e.pb, e);
    n ||
      ((n = new dr("//www.google.com/images/cleardot.gif")),
      (U.location && U.location.protocol == "http") || Rl(n, "https"),
      wa(n)),
      TA(n.toString(), r);
  } else Ze(2);
  (e.H = 0), e.h && e.h.za(t), t0(e), Gv(e);
}
x.pb = function (e) {
  e
    ? (this.l.info("Successfully pinged google.com"), Ze(2))
    : (this.l.info("Failed to ping google.com"), Ze(1));
};
function t0(e) {
  if (((e.H = 0), (e.ma = []), e.h)) {
    const t = Bv(e.i);
    (t.length != 0 || e.j.length != 0) &&
      (vp(e.ma, t),
      vp(e.ma, e.j),
      (e.i.i.length = 0),
      ef(e.j),
      (e.j.length = 0)),
      e.h.ya();
  }
}
function n0(e, t, n) {
  var r = n instanceof dr ? hn(n) : new dr(n);
  if (r.g != "") t && (r.g = t + "." + r.g), Pl(r, r.m);
  else {
    var i = U.location;
    (r = i.protocol),
      (t = t ? t + "." + i.hostname : i.hostname),
      (i = +i.port);
    var s = new dr(null);
    r && Rl(s, r), t && (s.g = t), i && Pl(s, i), n && (s.l = n), (r = s);
  }
  return (
    (n = e.F),
    (t = e.Da),
    n && t && te(r, n, t),
    te(r, "VER", e.ra),
    eo(e, r),
    r
  );
}
function r0(e, t, n) {
  if (t && !e.J)
    throw Error("Can't create secondary domain capable XhrIo object.");
  return (
    (t = e.Ha && !e.va ? new he(new Ta({ ob: n })) : new he(e.va)), t.Oa(e.J), t
  );
}
x.isActive = function () {
  return !!this.h && this.h.isActive(this);
};
function i0() {}
x = i0.prototype;
x.Ba = function () {};
x.Aa = function () {};
x.za = function () {};
x.ya = function () {};
x.isActive = function () {
  return !0;
};
x.Va = function () {};
function xl() {
  if (ai && !(10 <= Number(BS)))
    throw Error("Environmental error: no available transport.");
}
xl.prototype.g = function (e, t) {
  return new vt(e, t);
};
function vt(e, t) {
  Re.call(this),
    (this.g = new Qv(t)),
    (this.l = e),
    (this.h = (t && t.messageUrlParams) || null),
    (e = (t && t.messageHeaders) || null),
    t &&
      t.clientProtocolHeaderRequired &&
      (e
        ? (e["X-Client-Protocol"] = "webchannel")
        : (e = { "X-Client-Protocol": "webchannel" })),
    (this.g.s = e),
    (e = (t && t.initMessageHeaders) || null),
    t &&
      t.messageContentType &&
      (e
        ? (e["X-WebChannel-Content-Type"] = t.messageContentType)
        : (e = { "X-WebChannel-Content-Type": t.messageContentType })),
    t &&
      t.Ca &&
      (e
        ? (e["X-WebChannel-Client-Profile"] = t.Ca)
        : (e = { "X-WebChannel-Client-Profile": t.Ca })),
    (this.g.U = e),
    (e = t && t.cc) && !Ps(e) && (this.g.o = e),
    (this.A = (t && t.supportsCrossDomainXhr) || !1),
    (this.v = (t && t.sendRawJson) || !1),
    (t = t && t.httpSessionIdParam) &&
      !Ps(t) &&
      ((this.g.F = t),
      (e = this.h),
      e !== null && t in e && ((e = this.h), t in e && delete e[t])),
    (this.j = new _i(this));
}
ke(vt, Re);
vt.prototype.m = function () {
  (this.g.h = this.j), this.A && (this.g.J = !0);
  var e = this.g,
    t = this.l,
    n = this.h || void 0;
  Ze(0),
    (e.Y = t),
    (e.na = n || {}),
    (e.G = e.aa),
    (e.I = n0(e, null, e.Y)),
    Ca(e);
};
vt.prototype.close = function () {
  vf(this.g);
};
vt.prototype.u = function (e) {
  var t = this.g;
  if (typeof e == "string") {
    var n = {};
    (n.__data__ = e), (e = n);
  } else this.v && ((n = {}), (n.__data__ = af(e)), (e = n));
  t.j.push(new yA(t.fb++, e)), t.H == 3 && Ca(t);
};
vt.prototype.N = function () {
  (this.g.h = null),
    delete this.j,
    vf(this.g),
    delete this.g,
    vt.$.N.call(this);
};
function s0(e) {
  df.call(this),
    e.__headers__ &&
      ((this.headers = e.__headers__),
      (this.statusCode = e.__status__),
      delete e.__headers__,
      delete e.__status__);
  var t = e.__sm__;
  if (t) {
    e: {
      for (const n in t) {
        e = n;
        break e;
      }
      e = void 0;
    }
    (this.i = e) && ((e = this.i), (t = t !== null && e in t ? t[e] : void 0)),
      (this.data = t);
  } else this.data = e;
}
ke(s0, df);
function o0() {
  pf.call(this), (this.status = 1);
}
ke(o0, pf);
function _i(e) {
  this.g = e;
}
ke(_i, i0);
_i.prototype.Ba = function () {
  $e(this.g, "a");
};
_i.prototype.Aa = function (e) {
  $e(this.g, new s0(e));
};
_i.prototype.za = function (e) {
  $e(this.g, new o0());
};
_i.prototype.ya = function () {
  $e(this.g, "b");
};
function kA() {
  this.blockSize = -1;
}
function Xt() {
  (this.blockSize = -1),
    (this.blockSize = 64),
    (this.g = Array(4)),
    (this.m = Array(this.blockSize)),
    (this.i = this.h = 0),
    this.reset();
}
ke(Xt, kA);
Xt.prototype.reset = function () {
  (this.g[0] = 1732584193),
    (this.g[1] = 4023233417),
    (this.g[2] = 2562383102),
    (this.g[3] = 271733878),
    (this.i = this.h = 0);
};
function Tu(e, t, n) {
  n || (n = 0);
  var r = Array(16);
  if (typeof t == "string")
    for (var i = 0; 16 > i; ++i)
      r[i] =
        t.charCodeAt(n++) |
        (t.charCodeAt(n++) << 8) |
        (t.charCodeAt(n++) << 16) |
        (t.charCodeAt(n++) << 24);
  else
    for (i = 0; 16 > i; ++i)
      r[i] = t[n++] | (t[n++] << 8) | (t[n++] << 16) | (t[n++] << 24);
  (t = e.g[0]), (n = e.g[1]), (i = e.g[2]);
  var s = e.g[3],
    o = (t + (s ^ (n & (i ^ s))) + r[0] + 3614090360) & 4294967295;
  (t = n + (((o << 7) & 4294967295) | (o >>> 25))),
    (o = (s + (i ^ (t & (n ^ i))) + r[1] + 3905402710) & 4294967295),
    (s = t + (((o << 12) & 4294967295) | (o >>> 20))),
    (o = (i + (n ^ (s & (t ^ n))) + r[2] + 606105819) & 4294967295),
    (i = s + (((o << 17) & 4294967295) | (o >>> 15))),
    (o = (n + (t ^ (i & (s ^ t))) + r[3] + 3250441966) & 4294967295),
    (n = i + (((o << 22) & 4294967295) | (o >>> 10))),
    (o = (t + (s ^ (n & (i ^ s))) + r[4] + 4118548399) & 4294967295),
    (t = n + (((o << 7) & 4294967295) | (o >>> 25))),
    (o = (s + (i ^ (t & (n ^ i))) + r[5] + 1200080426) & 4294967295),
    (s = t + (((o << 12) & 4294967295) | (o >>> 20))),
    (o = (i + (n ^ (s & (t ^ n))) + r[6] + 2821735955) & 4294967295),
    (i = s + (((o << 17) & 4294967295) | (o >>> 15))),
    (o = (n + (t ^ (i & (s ^ t))) + r[7] + 4249261313) & 4294967295),
    (n = i + (((o << 22) & 4294967295) | (o >>> 10))),
    (o = (t + (s ^ (n & (i ^ s))) + r[8] + 1770035416) & 4294967295),
    (t = n + (((o << 7) & 4294967295) | (o >>> 25))),
    (o = (s + (i ^ (t & (n ^ i))) + r[9] + 2336552879) & 4294967295),
    (s = t + (((o << 12) & 4294967295) | (o >>> 20))),
    (o = (i + (n ^ (s & (t ^ n))) + r[10] + 4294925233) & 4294967295),
    (i = s + (((o << 17) & 4294967295) | (o >>> 15))),
    (o = (n + (t ^ (i & (s ^ t))) + r[11] + 2304563134) & 4294967295),
    (n = i + (((o << 22) & 4294967295) | (o >>> 10))),
    (o = (t + (s ^ (n & (i ^ s))) + r[12] + 1804603682) & 4294967295),
    (t = n + (((o << 7) & 4294967295) | (o >>> 25))),
    (o = (s + (i ^ (t & (n ^ i))) + r[13] + 4254626195) & 4294967295),
    (s = t + (((o << 12) & 4294967295) | (o >>> 20))),
    (o = (i + (n ^ (s & (t ^ n))) + r[14] + 2792965006) & 4294967295),
    (i = s + (((o << 17) & 4294967295) | (o >>> 15))),
    (o = (n + (t ^ (i & (s ^ t))) + r[15] + 1236535329) & 4294967295),
    (n = i + (((o << 22) & 4294967295) | (o >>> 10))),
    (o = (t + (i ^ (s & (n ^ i))) + r[1] + 4129170786) & 4294967295),
    (t = n + (((o << 5) & 4294967295) | (o >>> 27))),
    (o = (s + (n ^ (i & (t ^ n))) + r[6] + 3225465664) & 4294967295),
    (s = t + (((o << 9) & 4294967295) | (o >>> 23))),
    (o = (i + (t ^ (n & (s ^ t))) + r[11] + 643717713) & 4294967295),
    (i = s + (((o << 14) & 4294967295) | (o >>> 18))),
    (o = (n + (s ^ (t & (i ^ s))) + r[0] + 3921069994) & 4294967295),
    (n = i + (((o << 20) & 4294967295) | (o >>> 12))),
    (o = (t + (i ^ (s & (n ^ i))) + r[5] + 3593408605) & 4294967295),
    (t = n + (((o << 5) & 4294967295) | (o >>> 27))),
    (o = (s + (n ^ (i & (t ^ n))) + r[10] + 38016083) & 4294967295),
    (s = t + (((o << 9) & 4294967295) | (o >>> 23))),
    (o = (i + (t ^ (n & (s ^ t))) + r[15] + 3634488961) & 4294967295),
    (i = s + (((o << 14) & 4294967295) | (o >>> 18))),
    (o = (n + (s ^ (t & (i ^ s))) + r[4] + 3889429448) & 4294967295),
    (n = i + (((o << 20) & 4294967295) | (o >>> 12))),
    (o = (t + (i ^ (s & (n ^ i))) + r[9] + 568446438) & 4294967295),
    (t = n + (((o << 5) & 4294967295) | (o >>> 27))),
    (o = (s + (n ^ (i & (t ^ n))) + r[14] + 3275163606) & 4294967295),
    (s = t + (((o << 9) & 4294967295) | (o >>> 23))),
    (o = (i + (t ^ (n & (s ^ t))) + r[3] + 4107603335) & 4294967295),
    (i = s + (((o << 14) & 4294967295) | (o >>> 18))),
    (o = (n + (s ^ (t & (i ^ s))) + r[8] + 1163531501) & 4294967295),
    (n = i + (((o << 20) & 4294967295) | (o >>> 12))),
    (o = (t + (i ^ (s & (n ^ i))) + r[13] + 2850285829) & 4294967295),
    (t = n + (((o << 5) & 4294967295) | (o >>> 27))),
    (o = (s + (n ^ (i & (t ^ n))) + r[2] + 4243563512) & 4294967295),
    (s = t + (((o << 9) & 4294967295) | (o >>> 23))),
    (o = (i + (t ^ (n & (s ^ t))) + r[7] + 1735328473) & 4294967295),
    (i = s + (((o << 14) & 4294967295) | (o >>> 18))),
    (o = (n + (s ^ (t & (i ^ s))) + r[12] + 2368359562) & 4294967295),
    (n = i + (((o << 20) & 4294967295) | (o >>> 12))),
    (o = (t + (n ^ i ^ s) + r[5] + 4294588738) & 4294967295),
    (t = n + (((o << 4) & 4294967295) | (o >>> 28))),
    (o = (s + (t ^ n ^ i) + r[8] + 2272392833) & 4294967295),
    (s = t + (((o << 11) & 4294967295) | (o >>> 21))),
    (o = (i + (s ^ t ^ n) + r[11] + 1839030562) & 4294967295),
    (i = s + (((o << 16) & 4294967295) | (o >>> 16))),
    (o = (n + (i ^ s ^ t) + r[14] + 4259657740) & 4294967295),
    (n = i + (((o << 23) & 4294967295) | (o >>> 9))),
    (o = (t + (n ^ i ^ s) + r[1] + 2763975236) & 4294967295),
    (t = n + (((o << 4) & 4294967295) | (o >>> 28))),
    (o = (s + (t ^ n ^ i) + r[4] + 1272893353) & 4294967295),
    (s = t + (((o << 11) & 4294967295) | (o >>> 21))),
    (o = (i + (s ^ t ^ n) + r[7] + 4139469664) & 4294967295),
    (i = s + (((o << 16) & 4294967295) | (o >>> 16))),
    (o = (n + (i ^ s ^ t) + r[10] + 3200236656) & 4294967295),
    (n = i + (((o << 23) & 4294967295) | (o >>> 9))),
    (o = (t + (n ^ i ^ s) + r[13] + 681279174) & 4294967295),
    (t = n + (((o << 4) & 4294967295) | (o >>> 28))),
    (o = (s + (t ^ n ^ i) + r[0] + 3936430074) & 4294967295),
    (s = t + (((o << 11) & 4294967295) | (o >>> 21))),
    (o = (i + (s ^ t ^ n) + r[3] + 3572445317) & 4294967295),
    (i = s + (((o << 16) & 4294967295) | (o >>> 16))),
    (o = (n + (i ^ s ^ t) + r[6] + 76029189) & 4294967295),
    (n = i + (((o << 23) & 4294967295) | (o >>> 9))),
    (o = (t + (n ^ i ^ s) + r[9] + 3654602809) & 4294967295),
    (t = n + (((o << 4) & 4294967295) | (o >>> 28))),
    (o = (s + (t ^ n ^ i) + r[12] + 3873151461) & 4294967295),
    (s = t + (((o << 11) & 4294967295) | (o >>> 21))),
    (o = (i + (s ^ t ^ n) + r[15] + 530742520) & 4294967295),
    (i = s + (((o << 16) & 4294967295) | (o >>> 16))),
    (o = (n + (i ^ s ^ t) + r[2] + 3299628645) & 4294967295),
    (n = i + (((o << 23) & 4294967295) | (o >>> 9))),
    (o = (t + (i ^ (n | ~s)) + r[0] + 4096336452) & 4294967295),
    (t = n + (((o << 6) & 4294967295) | (o >>> 26))),
    (o = (s + (n ^ (t | ~i)) + r[7] + 1126891415) & 4294967295),
    (s = t + (((o << 10) & 4294967295) | (o >>> 22))),
    (o = (i + (t ^ (s | ~n)) + r[14] + 2878612391) & 4294967295),
    (i = s + (((o << 15) & 4294967295) | (o >>> 17))),
    (o = (n + (s ^ (i | ~t)) + r[5] + 4237533241) & 4294967295),
    (n = i + (((o << 21) & 4294967295) | (o >>> 11))),
    (o = (t + (i ^ (n | ~s)) + r[12] + 1700485571) & 4294967295),
    (t = n + (((o << 6) & 4294967295) | (o >>> 26))),
    (o = (s + (n ^ (t | ~i)) + r[3] + 2399980690) & 4294967295),
    (s = t + (((o << 10) & 4294967295) | (o >>> 22))),
    (o = (i + (t ^ (s | ~n)) + r[10] + 4293915773) & 4294967295),
    (i = s + (((o << 15) & 4294967295) | (o >>> 17))),
    (o = (n + (s ^ (i | ~t)) + r[1] + 2240044497) & 4294967295),
    (n = i + (((o << 21) & 4294967295) | (o >>> 11))),
    (o = (t + (i ^ (n | ~s)) + r[8] + 1873313359) & 4294967295),
    (t = n + (((o << 6) & 4294967295) | (o >>> 26))),
    (o = (s + (n ^ (t | ~i)) + r[15] + 4264355552) & 4294967295),
    (s = t + (((o << 10) & 4294967295) | (o >>> 22))),
    (o = (i + (t ^ (s | ~n)) + r[6] + 2734768916) & 4294967295),
    (i = s + (((o << 15) & 4294967295) | (o >>> 17))),
    (o = (n + (s ^ (i | ~t)) + r[13] + 1309151649) & 4294967295),
    (n = i + (((o << 21) & 4294967295) | (o >>> 11))),
    (o = (t + (i ^ (n | ~s)) + r[4] + 4149444226) & 4294967295),
    (t = n + (((o << 6) & 4294967295) | (o >>> 26))),
    (o = (s + (n ^ (t | ~i)) + r[11] + 3174756917) & 4294967295),
    (s = t + (((o << 10) & 4294967295) | (o >>> 22))),
    (o = (i + (t ^ (s | ~n)) + r[2] + 718787259) & 4294967295),
    (i = s + (((o << 15) & 4294967295) | (o >>> 17))),
    (o = (n + (s ^ (i | ~t)) + r[9] + 3951481745) & 4294967295),
    (e.g[0] = (e.g[0] + t) & 4294967295),
    (e.g[1] =
      (e.g[1] + (i + (((o << 21) & 4294967295) | (o >>> 11)))) & 4294967295),
    (e.g[2] = (e.g[2] + i) & 4294967295),
    (e.g[3] = (e.g[3] + s) & 4294967295);
}
Xt.prototype.j = function (e, t) {
  t === void 0 && (t = e.length);
  for (var n = t - this.blockSize, r = this.m, i = this.h, s = 0; s < t; ) {
    if (i == 0) for (; s <= n; ) Tu(this, e, s), (s += this.blockSize);
    if (typeof e == "string") {
      for (; s < t; )
        if (((r[i++] = e.charCodeAt(s++)), i == this.blockSize)) {
          Tu(this, r), (i = 0);
          break;
        }
    } else
      for (; s < t; )
        if (((r[i++] = e[s++]), i == this.blockSize)) {
          Tu(this, r), (i = 0);
          break;
        }
  }
  (this.h = i), (this.i += t);
};
Xt.prototype.l = function () {
  var e = Array((56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h);
  e[0] = 128;
  for (var t = 1; t < e.length - 8; ++t) e[t] = 0;
  var n = 8 * this.i;
  for (t = e.length - 8; t < e.length; ++t) (e[t] = n & 255), (n /= 256);
  for (this.j(e), e = Array(16), t = n = 0; 4 > t; ++t)
    for (var r = 0; 32 > r; r += 8) e[n++] = (this.g[t] >>> r) & 255;
  return e;
};
function X(e, t) {
  this.h = t;
  for (var n = [], r = !0, i = e.length - 1; 0 <= i; i--) {
    var s = e[i] | 0;
    (r && s == t) || ((n[i] = s), (r = !1));
  }
  this.g = n;
}
var xA = {};
function wf(e) {
  return -128 <= e && 128 > e
    ? FS(e, function (t) {
        return new X([t | 0], 0 > t ? -1 : 0);
      })
    : new X([e | 0], 0 > e ? -1 : 0);
}
function qt(e) {
  if (isNaN(e) || !isFinite(e)) return Jr;
  if (0 > e) return Ve(qt(-e));
  for (var t = [], n = 1, r = 0; e >= n; r++) (t[r] = (e / n) | 0), (n *= zc);
  return new X(t, 0);
}
function l0(e, t) {
  if (e.length == 0) throw Error("number format error: empty string");
  if (((t = t || 10), 2 > t || 36 < t)) throw Error("radix out of range: " + t);
  if (e.charAt(0) == "-") return Ve(l0(e.substring(1), t));
  if (0 <= e.indexOf("-"))
    throw Error('number format error: interior "-" character');
  for (var n = qt(Math.pow(t, 8)), r = Jr, i = 0; i < e.length; i += 8) {
    var s = Math.min(8, e.length - i),
      o = parseInt(e.substring(i, i + s), t);
    8 > s
      ? ((s = qt(Math.pow(t, s))), (r = r.R(s).add(qt(o))))
      : ((r = r.R(n)), (r = r.add(qt(o))));
  }
  return r;
}
var zc = 4294967296,
  Jr = wf(0),
  bc = wf(1),
  kp = wf(16777216);
x = X.prototype;
x.ea = function () {
  if (St(this)) return -Ve(this).ea();
  for (var e = 0, t = 1, n = 0; n < this.g.length; n++) {
    var r = this.D(n);
    (e += (0 <= r ? r : zc + r) * t), (t *= zc);
  }
  return e;
};
x.toString = function (e) {
  if (((e = e || 10), 2 > e || 36 < e)) throw Error("radix out of range: " + e);
  if (nn(this)) return "0";
  if (St(this)) return "-" + Ve(this).toString(e);
  for (var t = qt(Math.pow(e, 6)), n = this, r = ""; ; ) {
    var i = Dl(n, t).g;
    n = Nl(n, i.R(t));
    var s = ((0 < n.g.length ? n.g[0] : n.h) >>> 0).toString(e);
    if (((n = i), nn(n))) return s + r;
    for (; 6 > s.length; ) s = "0" + s;
    r = s + r;
  }
};
x.D = function (e) {
  return 0 > e ? 0 : e < this.g.length ? this.g[e] : this.h;
};
function nn(e) {
  if (e.h != 0) return !1;
  for (var t = 0; t < e.g.length; t++) if (e.g[t] != 0) return !1;
  return !0;
}
function St(e) {
  return e.h == -1;
}
x.X = function (e) {
  return (e = Nl(this, e)), St(e) ? -1 : nn(e) ? 0 : 1;
};
function Ve(e) {
  for (var t = e.g.length, n = [], r = 0; r < t; r++) n[r] = ~e.g[r];
  return new X(n, ~e.h).add(bc);
}
x.abs = function () {
  return St(this) ? Ve(this) : this;
};
x.add = function (e) {
  for (
    var t = Math.max(this.g.length, e.g.length), n = [], r = 0, i = 0;
    i <= t;
    i++
  ) {
    var s = r + (this.D(i) & 65535) + (e.D(i) & 65535),
      o = (s >>> 16) + (this.D(i) >>> 16) + (e.D(i) >>> 16);
    (r = o >>> 16), (s &= 65535), (o &= 65535), (n[i] = (o << 16) | s);
  }
  return new X(n, n[n.length - 1] & -2147483648 ? -1 : 0);
};
function Nl(e, t) {
  return e.add(Ve(t));
}
x.R = function (e) {
  if (nn(this) || nn(e)) return Jr;
  if (St(this)) return St(e) ? Ve(this).R(Ve(e)) : Ve(Ve(this).R(e));
  if (St(e)) return Ve(this.R(Ve(e)));
  if (0 > this.X(kp) && 0 > e.X(kp)) return qt(this.ea() * e.ea());
  for (var t = this.g.length + e.g.length, n = [], r = 0; r < 2 * t; r++)
    n[r] = 0;
  for (r = 0; r < this.g.length; r++)
    for (var i = 0; i < e.g.length; i++) {
      var s = this.D(r) >>> 16,
        o = this.D(r) & 65535,
        l = e.D(i) >>> 16,
        a = e.D(i) & 65535;
      (n[2 * r + 2 * i] += o * a),
        xo(n, 2 * r + 2 * i),
        (n[2 * r + 2 * i + 1] += s * a),
        xo(n, 2 * r + 2 * i + 1),
        (n[2 * r + 2 * i + 1] += o * l),
        xo(n, 2 * r + 2 * i + 1),
        (n[2 * r + 2 * i + 2] += s * l),
        xo(n, 2 * r + 2 * i + 2);
    }
  for (r = 0; r < t; r++) n[r] = (n[2 * r + 1] << 16) | n[2 * r];
  for (r = t; r < 2 * t; r++) n[r] = 0;
  return new X(n, 0);
};
function xo(e, t) {
  for (; (e[t] & 65535) != e[t]; )
    (e[t + 1] += e[t] >>> 16), (e[t] &= 65535), t++;
}
function Di(e, t) {
  (this.g = e), (this.h = t);
}
function Dl(e, t) {
  if (nn(t)) throw Error("division by zero");
  if (nn(e)) return new Di(Jr, Jr);
  if (St(e)) return (t = Dl(Ve(e), t)), new Di(Ve(t.g), Ve(t.h));
  if (St(t)) return (t = Dl(e, Ve(t))), new Di(Ve(t.g), t.h);
  if (30 < e.g.length) {
    if (St(e) || St(t))
      throw Error("slowDivide_ only works with positive integers.");
    for (var n = bc, r = t; 0 >= r.X(e); ) (n = xp(n)), (r = xp(r));
    var i = Nr(n, 1),
      s = Nr(r, 1);
    for (r = Nr(r, 2), n = Nr(n, 2); !nn(r); ) {
      var o = s.add(r);
      0 >= o.X(e) && ((i = i.add(n)), (s = o)), (r = Nr(r, 1)), (n = Nr(n, 1));
    }
    return (t = Nl(e, i.R(t))), new Di(i, t);
  }
  for (i = Jr; 0 <= e.X(t); ) {
    for (
      n = Math.max(1, Math.floor(e.ea() / t.ea())),
        r = Math.ceil(Math.log(n) / Math.LN2),
        r = 48 >= r ? 1 : Math.pow(2, r - 48),
        s = qt(n),
        o = s.R(t);
      St(o) || 0 < o.X(e);

    )
      (n -= r), (s = qt(n)), (o = s.R(t));
    nn(s) && (s = bc), (i = i.add(s)), (e = Nl(e, o));
  }
  return new Di(i, e);
}
x.gb = function (e) {
  return Dl(this, e).h;
};
x.and = function (e) {
  for (var t = Math.max(this.g.length, e.g.length), n = [], r = 0; r < t; r++)
    n[r] = this.D(r) & e.D(r);
  return new X(n, this.h & e.h);
};
x.or = function (e) {
  for (var t = Math.max(this.g.length, e.g.length), n = [], r = 0; r < t; r++)
    n[r] = this.D(r) | e.D(r);
  return new X(n, this.h | e.h);
};
x.xor = function (e) {
  for (var t = Math.max(this.g.length, e.g.length), n = [], r = 0; r < t; r++)
    n[r] = this.D(r) ^ e.D(r);
  return new X(n, this.h ^ e.h);
};
function xp(e) {
  for (var t = e.g.length + 1, n = [], r = 0; r < t; r++)
    n[r] = (e.D(r) << 1) | (e.D(r - 1) >>> 31);
  return new X(n, e.h);
}
function Nr(e, t) {
  var n = t >> 5;
  t %= 32;
  for (var r = e.g.length - n, i = [], s = 0; s < r; s++)
    i[s] =
      0 < t ? (e.D(s + n) >>> t) | (e.D(s + n + 1) << (32 - t)) : e.D(s + n);
  return new X(i, e.h);
}
xl.prototype.createWebChannel = xl.prototype.g;
vt.prototype.send = vt.prototype.u;
vt.prototype.open = vt.prototype.m;
vt.prototype.close = vt.prototype.close;
va.NO_ERROR = 0;
va.TIMEOUT = 8;
va.HTTP_ERROR = 6;
Sv.COMPLETE = "complete";
Av.EventType = Xs;
Xs.OPEN = "a";
Xs.CLOSE = "b";
Xs.ERROR = "c";
Xs.MESSAGE = "d";
Re.prototype.listen = Re.prototype.O;
he.prototype.listenOnce = he.prototype.P;
he.prototype.getLastError = he.prototype.Sa;
he.prototype.getLastErrorCode = he.prototype.Ia;
he.prototype.getStatus = he.prototype.da;
he.prototype.getResponseJson = he.prototype.Wa;
he.prototype.getResponseText = he.prototype.ja;
he.prototype.send = he.prototype.ha;
he.prototype.setWithCredentials = he.prototype.Oa;
Xt.prototype.digest = Xt.prototype.l;
Xt.prototype.reset = Xt.prototype.reset;
Xt.prototype.update = Xt.prototype.j;
X.prototype.add = X.prototype.add;
X.prototype.multiply = X.prototype.R;
X.prototype.modulo = X.prototype.gb;
X.prototype.compare = X.prototype.X;
X.prototype.toNumber = X.prototype.ea;
X.prototype.toString = X.prototype.toString;
X.prototype.getBits = X.prototype.D;
X.fromNumber = qt;
X.fromString = l0;
var NA = function () {
    return new xl();
  },
  DA = function () {
    return ya();
  },
  Iu = va,
  OA = Sv,
  VA = Pr,
  Np = {
    xb: 0,
    Ab: 1,
    Bb: 2,
    Ub: 3,
    Zb: 4,
    Wb: 5,
    Xb: 6,
    Vb: 7,
    Tb: 8,
    Yb: 9,
    PROXY: 10,
    NOPROXY: 11,
    Rb: 12,
    Nb: 13,
    Ob: 14,
    Mb: 15,
    Pb: 16,
    Qb: 17,
    tb: 18,
    sb: 19,
    ub: 20,
  },
  No = Av,
  LA = he,
  MA = X;
const Dp = "@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ze {
  constructor(t) {
    this.uid = t;
  }
  isAuthenticated() {
    return this.uid != null;
  }
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }
  isEqual(t) {
    return t.uid === this.uid;
  }
}
(ze.UNAUTHENTICATED = new ze(null)),
  (ze.GOOGLE_CREDENTIALS = new ze("google-credentials-uid")),
  (ze.FIRST_PARTY = new ze("first-party-uid")),
  (ze.MOCK_USER = new ze("mock-user"));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Ei = "10.7.2";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Tr = new Fy("@firebase/firestore");
function Oi() {
  return Tr.logLevel;
}
function D(e, ...t) {
  if (Tr.logLevel <= H.DEBUG) {
    const n = t.map(Tf);
    Tr.debug(`Firestore (${Ei}): ${e}`, ...n);
  }
}
function zn(e, ...t) {
  if (Tr.logLevel <= H.ERROR) {
    const n = t.map(Tf);
    Tr.error(`Firestore (${Ei}): ${e}`, ...n);
  }
}
function Ol(e, ...t) {
  if (Tr.logLevel <= H.WARN) {
    const n = t.map(Tf);
    Tr.warn(`Firestore (${Ei}): ${e}`, ...n);
  }
}
function Tf(e) {
  if (typeof e == "string") return e;
  try {
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ return (function (n) {
      return JSON.stringify(n);
    })(e);
  } catch {
    return e;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function z(e = "Unexpected state") {
  const t = `FIRESTORE (${Ei}) INTERNAL ASSERTION FAILED: ` + e;
  throw (zn(t), new Error(t));
}
function Pe(e, t) {
  e || z();
}
function re(e, t) {
  return e;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const S = {
  OK: "ok",
  CANCELLED: "cancelled",
  UNKNOWN: "unknown",
  INVALID_ARGUMENT: "invalid-argument",
  DEADLINE_EXCEEDED: "deadline-exceeded",
  NOT_FOUND: "not-found",
  ALREADY_EXISTS: "already-exists",
  PERMISSION_DENIED: "permission-denied",
  UNAUTHENTICATED: "unauthenticated",
  RESOURCE_EXHAUSTED: "resource-exhausted",
  FAILED_PRECONDITION: "failed-precondition",
  ABORTED: "aborted",
  OUT_OF_RANGE: "out-of-range",
  UNIMPLEMENTED: "unimplemented",
  INTERNAL: "internal",
  UNAVAILABLE: "unavailable",
  DATA_LOSS: "data-loss",
};
class M extends Rr {
  constructor(t, n) {
    super(t, n),
      (this.code = t),
      (this.message = n),
      (this.toString = () =>
        `${this.name}: [code=${this.code}]: ${this.message}`);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $n {
  constructor() {
    this.promise = new Promise((t, n) => {
      (this.resolve = t), (this.reject = n);
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class a0 {
  constructor(t, n) {
    (this.user = n),
      (this.type = "OAuth"),
      (this.headers = new Map()),
      this.headers.set("Authorization", `Bearer ${t}`);
  }
}
class $A {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {}
  start(t, n) {
    t.enqueueRetryable(() => n(ze.UNAUTHENTICATED));
  }
  shutdown() {}
}
class FA {
  constructor(t) {
    (this.token = t), (this.changeListener = null);
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {}
  start(t, n) {
    (this.changeListener = n), t.enqueueRetryable(() => n(this.token.user));
  }
  shutdown() {
    this.changeListener = null;
  }
}
class UA {
  constructor(t) {
    (this.t = t),
      (this.currentUser = ze.UNAUTHENTICATED),
      (this.i = 0),
      (this.forceRefresh = !1),
      (this.auth = null);
  }
  start(t, n) {
    let r = this.i;
    const i = (a) => (this.i !== r ? ((r = this.i), n(a)) : Promise.resolve());
    let s = new $n();
    this.o = () => {
      this.i++,
        (this.currentUser = this.u()),
        s.resolve(),
        (s = new $n()),
        t.enqueueRetryable(() => i(this.currentUser));
    };
    const o = () => {
        const a = s;
        t.enqueueRetryable(async () => {
          await a.promise, await i(this.currentUser);
        });
      },
      l = (a) => {
        D("FirebaseAuthCredentialsProvider", "Auth detected"),
          (this.auth = a),
          this.auth.addAuthTokenListener(this.o),
          o();
      };
    this.t.onInit((a) => l(a)),
      setTimeout(() => {
        if (!this.auth) {
          const a = this.t.getImmediate({ optional: !0 });
          a
            ? l(a)
            : (D("FirebaseAuthCredentialsProvider", "Auth not yet detected"),
              s.resolve(),
              (s = new $n()));
        }
      }, 0),
      o();
  }
  getToken() {
    const t = this.i,
      n = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.auth
        ? this.auth
            .getToken(n)
            .then((r) =>
              this.i !== t
                ? (D(
                    "FirebaseAuthCredentialsProvider",
                    "getToken aborted due to token change.",
                  ),
                  this.getToken())
                : r
                  ? (Pe(typeof r.accessToken == "string"),
                    new a0(r.accessToken, this.currentUser))
                  : null,
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.auth && this.auth.removeAuthTokenListener(this.o);
  }
  u() {
    const t = this.auth && this.auth.getUid();
    return Pe(t === null || typeof t == "string"), new ze(t);
  }
}
class jA {
  constructor(t, n, r) {
    (this.l = t),
      (this.h = n),
      (this.P = r),
      (this.type = "FirstParty"),
      (this.user = ze.FIRST_PARTY),
      (this.I = new Map());
  }
  T() {
    return this.P ? this.P() : null;
  }
  get headers() {
    this.I.set("X-Goog-AuthUser", this.l);
    const t = this.T();
    return (
      t && this.I.set("Authorization", t),
      this.h && this.I.set("X-Goog-Iam-Authorization-Token", this.h),
      this.I
    );
  }
}
class BA {
  constructor(t, n, r) {
    (this.l = t), (this.h = n), (this.P = r);
  }
  getToken() {
    return Promise.resolve(new jA(this.l, this.h, this.P));
  }
  start(t, n) {
    t.enqueueRetryable(() => n(ze.FIRST_PARTY));
  }
  shutdown() {}
  invalidateToken() {}
}
class zA {
  constructor(t) {
    (this.value = t),
      (this.type = "AppCheck"),
      (this.headers = new Map()),
      t && t.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
  }
}
class bA {
  constructor(t) {
    (this.A = t),
      (this.forceRefresh = !1),
      (this.appCheck = null),
      (this.R = null);
  }
  start(t, n) {
    const r = (s) => {
      s.error != null &&
        D(
          "FirebaseAppCheckTokenProvider",
          `Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`,
        );
      const o = s.token !== this.R;
      return (
        (this.R = s.token),
        D(
          "FirebaseAppCheckTokenProvider",
          `Received ${o ? "new" : "existing"} token.`,
        ),
        o ? n(s.token) : Promise.resolve()
      );
    };
    this.o = (s) => {
      t.enqueueRetryable(() => r(s));
    };
    const i = (s) => {
      D("FirebaseAppCheckTokenProvider", "AppCheck detected"),
        (this.appCheck = s),
        this.appCheck.addTokenListener(this.o);
    };
    this.A.onInit((s) => i(s)),
      setTimeout(() => {
        if (!this.appCheck) {
          const s = this.A.getImmediate({ optional: !0 });
          s
            ? i(s)
            : D("FirebaseAppCheckTokenProvider", "AppCheck not yet detected");
        }
      }, 0);
  }
  getToken() {
    const t = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.appCheck
        ? this.appCheck
            .getToken(t)
            .then((n) =>
              n
                ? (Pe(typeof n.token == "string"),
                  (this.R = n.token),
                  new zA(n.token))
                : null,
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.appCheck && this.appCheck.removeTokenListener(this.o);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function HA(e) {
  const t = typeof self < "u" && (self.crypto || self.msCrypto),
    n = new Uint8Array(e);
  if (t && typeof t.getRandomValues == "function") t.getRandomValues(n);
  else for (let r = 0; r < e; r++) n[r] = Math.floor(256 * Math.random());
  return n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class u0 {
  static newId() {
    const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      n = Math.floor(256 / t.length) * t.length;
    let r = "";
    for (; r.length < 20; ) {
      const i = HA(40);
      for (let s = 0; s < i.length; ++s)
        r.length < 20 && i[s] < n && (r += t.charAt(i[s] % t.length));
    }
    return r;
  }
}
function J(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function ui(e, t, n) {
  return e.length === t.length && e.every((r, i) => n(r, t[i]));
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ce {
  constructor(t, n) {
    if (((this.seconds = t), (this.nanoseconds = n), n < 0))
      throw new M(
        S.INVALID_ARGUMENT,
        "Timestamp nanoseconds out of range: " + n,
      );
    if (n >= 1e9)
      throw new M(
        S.INVALID_ARGUMENT,
        "Timestamp nanoseconds out of range: " + n,
      );
    if (t < -62135596800)
      throw new M(S.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
    if (t >= 253402300800)
      throw new M(S.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
  }
  static now() {
    return Ce.fromMillis(Date.now());
  }
  static fromDate(t) {
    return Ce.fromMillis(t.getTime());
  }
  static fromMillis(t) {
    const n = Math.floor(t / 1e3),
      r = Math.floor(1e6 * (t - 1e3 * n));
    return new Ce(n, r);
  }
  toDate() {
    return new Date(this.toMillis());
  }
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }
  _compareTo(t) {
    return this.seconds === t.seconds
      ? J(this.nanoseconds, t.nanoseconds)
      : J(this.seconds, t.seconds);
  }
  isEqual(t) {
    return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
  }
  toString() {
    return (
      "Timestamp(seconds=" +
      this.seconds +
      ", nanoseconds=" +
      this.nanoseconds +
      ")"
    );
  }
  toJSON() {
    return { seconds: this.seconds, nanoseconds: this.nanoseconds };
  }
  valueOf() {
    const t = this.seconds - -62135596800;
    return (
      String(t).padStart(12, "0") +
      "." +
      String(this.nanoseconds).padStart(9, "0")
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class se {
  constructor(t) {
    this.timestamp = t;
  }
  static fromTimestamp(t) {
    return new se(t);
  }
  static min() {
    return new se(new Ce(0, 0));
  }
  static max() {
    return new se(new Ce(253402300799, 999999999));
  }
  compareTo(t) {
    return this.timestamp._compareTo(t.timestamp);
  }
  isEqual(t) {
    return this.timestamp.isEqual(t.timestamp);
  }
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }
  toTimestamp() {
    return this.timestamp;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ms {
  constructor(t, n, r) {
    n === void 0 ? (n = 0) : n > t.length && z(),
      r === void 0 ? (r = t.length - n) : r > t.length - n && z(),
      (this.segments = t),
      (this.offset = n),
      (this.len = r);
  }
  get length() {
    return this.len;
  }
  isEqual(t) {
    return Ms.comparator(this, t) === 0;
  }
  child(t) {
    const n = this.segments.slice(this.offset, this.limit());
    return (
      t instanceof Ms
        ? t.forEach((r) => {
            n.push(r);
          })
        : n.push(t),
      this.construct(n)
    );
  }
  limit() {
    return this.offset + this.length;
  }
  popFirst(t) {
    return (
      (t = t === void 0 ? 1 : t),
      this.construct(this.segments, this.offset + t, this.length - t)
    );
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(t) {
    return this.segments[this.offset + t];
  }
  isEmpty() {
    return this.length === 0;
  }
  isPrefixOf(t) {
    if (t.length < this.length) return !1;
    for (let n = 0; n < this.length; n++)
      if (this.get(n) !== t.get(n)) return !1;
    return !0;
  }
  isImmediateParentOf(t) {
    if (this.length + 1 !== t.length) return !1;
    for (let n = 0; n < this.length; n++)
      if (this.get(n) !== t.get(n)) return !1;
    return !0;
  }
  forEach(t) {
    for (let n = this.offset, r = this.limit(); n < r; n++) t(this.segments[n]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(t, n) {
    const r = Math.min(t.length, n.length);
    for (let i = 0; i < r; i++) {
      const s = t.get(i),
        o = n.get(i);
      if (s < o) return -1;
      if (s > o) return 1;
    }
    return t.length < n.length ? -1 : t.length > n.length ? 1 : 0;
  }
}
class ce extends Ms {
  construct(t, n, r) {
    return new ce(t, n, r);
  }
  canonicalString() {
    return this.toArray().join("/");
  }
  toString() {
    return this.canonicalString();
  }
  toUriEncodedString() {
    return this.toArray().map(encodeURIComponent).join("/");
  }
  static fromString(...t) {
    const n = [];
    for (const r of t) {
      if (r.indexOf("//") >= 0)
        throw new M(
          S.INVALID_ARGUMENT,
          `Invalid segment (${r}). Paths must not contain // in them.`,
        );
      n.push(...r.split("/").filter((i) => i.length > 0));
    }
    return new ce(n);
  }
  static emptyPath() {
    return new ce([]);
  }
}
const WA = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class Le extends Ms {
  construct(t, n, r) {
    return new Le(t, n, r);
  }
  static isValidIdentifier(t) {
    return WA.test(t);
  }
  canonicalString() {
    return this.toArray()
      .map(
        (t) => (
          (t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`")),
          Le.isValidIdentifier(t) || (t = "`" + t + "`"),
          t
        ),
      )
      .join(".");
  }
  toString() {
    return this.canonicalString();
  }
  isKeyField() {
    return this.length === 1 && this.get(0) === "__name__";
  }
  static keyField() {
    return new Le(["__name__"]);
  }
  static fromServerFormat(t) {
    const n = [];
    let r = "",
      i = 0;
    const s = () => {
      if (r.length === 0)
        throw new M(
          S.INVALID_ARGUMENT,
          `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
        );
      n.push(r), (r = "");
    };
    let o = !1;
    for (; i < t.length; ) {
      const l = t[i];
      if (l === "\\") {
        if (i + 1 === t.length)
          throw new M(
            S.INVALID_ARGUMENT,
            "Path has trailing escape character: " + t,
          );
        const a = t[i + 1];
        if (a !== "\\" && a !== "." && a !== "`")
          throw new M(
            S.INVALID_ARGUMENT,
            "Path has invalid escape sequence: " + t,
          );
        (r += a), (i += 2);
      } else
        l === "`"
          ? ((o = !o), i++)
          : l !== "." || o
            ? ((r += l), i++)
            : (s(), i++);
    }
    if ((s(), o))
      throw new M(S.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
    return new Le(n);
  }
  static emptyPath() {
    return new Le([]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class j {
  constructor(t) {
    this.path = t;
  }
  static fromPath(t) {
    return new j(ce.fromString(t));
  }
  static fromName(t) {
    return new j(ce.fromString(t).popFirst(5));
  }
  static empty() {
    return new j(ce.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  hasCollectionId(t) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
  }
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(t) {
    return t !== null && ce.comparator(this.path, t.path) === 0;
  }
  toString() {
    return this.path.toString();
  }
  static comparator(t, n) {
    return ce.comparator(t.path, n.path);
  }
  static isDocumentKey(t) {
    return t.length % 2 == 0;
  }
  static fromSegments(t) {
    return new j(new ce(t.slice()));
  }
}
function KA(e, t) {
  const n = e.toTimestamp().seconds,
    r = e.toTimestamp().nanoseconds + 1,
    i = se.fromTimestamp(r === 1e9 ? new Ce(n + 1, 0) : new Ce(n, r));
  return new bn(i, j.empty(), t);
}
function qA(e) {
  return new bn(e.readTime, e.key, -1);
}
class bn {
  constructor(t, n, r) {
    (this.readTime = t), (this.documentKey = n), (this.largestBatchId = r);
  }
  static min() {
    return new bn(se.min(), j.empty(), -1);
  }
  static max() {
    return new bn(se.max(), j.empty(), -1);
  }
}
function QA(e, t) {
  let n = e.readTime.compareTo(t.readTime);
  return n !== 0
    ? n
    : ((n = j.comparator(e.documentKey, t.documentKey)),
      n !== 0 ? n : J(e.largestBatchId, t.largestBatchId));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const GA =
  "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
class XA {
  constructor() {
    this.onCommittedListeners = [];
  }
  addOnCommittedListener(t) {
    this.onCommittedListeners.push(t);
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach((t) => t());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function c0(e) {
  if (e.code !== S.FAILED_PRECONDITION || e.message !== GA) throw e;
  D("LocalStore", "Unexpectedly lost primary lease");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class T {
  constructor(t) {
    (this.nextCallback = null),
      (this.catchCallback = null),
      (this.result = void 0),
      (this.error = void 0),
      (this.isDone = !1),
      (this.callbackAttached = !1),
      t(
        (n) => {
          (this.isDone = !0),
            (this.result = n),
            this.nextCallback && this.nextCallback(n);
        },
        (n) => {
          (this.isDone = !0),
            (this.error = n),
            this.catchCallback && this.catchCallback(n);
        },
      );
  }
  catch(t) {
    return this.next(void 0, t);
  }
  next(t, n) {
    return (
      this.callbackAttached && z(),
      (this.callbackAttached = !0),
      this.isDone
        ? this.error
          ? this.wrapFailure(n, this.error)
          : this.wrapSuccess(t, this.result)
        : new T((r, i) => {
            (this.nextCallback = (s) => {
              this.wrapSuccess(t, s).next(r, i);
            }),
              (this.catchCallback = (s) => {
                this.wrapFailure(n, s).next(r, i);
              });
          })
    );
  }
  toPromise() {
    return new Promise((t, n) => {
      this.next(t, n);
    });
  }
  wrapUserFunction(t) {
    try {
      const n = t();
      return n instanceof T ? n : T.resolve(n);
    } catch (n) {
      return T.reject(n);
    }
  }
  wrapSuccess(t, n) {
    return t ? this.wrapUserFunction(() => t(n)) : T.resolve(n);
  }
  wrapFailure(t, n) {
    return t ? this.wrapUserFunction(() => t(n)) : T.reject(n);
  }
  static resolve(t) {
    return new T((n, r) => {
      n(t);
    });
  }
  static reject(t) {
    return new T((n, r) => {
      r(t);
    });
  }
  static waitFor(t) {
    return new T((n, r) => {
      let i = 0,
        s = 0,
        o = !1;
      t.forEach((l) => {
        ++i,
          l.next(
            () => {
              ++s, o && s === i && n();
            },
            (a) => r(a),
          );
      }),
        (o = !0),
        s === i && n();
    });
  }
  static or(t) {
    let n = T.resolve(!1);
    for (const r of t) n = n.next((i) => (i ? T.resolve(i) : r()));
    return n;
  }
  static forEach(t, n) {
    const r = [];
    return (
      t.forEach((i, s) => {
        r.push(n.call(this, i, s));
      }),
      this.waitFor(r)
    );
  }
  static mapArray(t, n) {
    return new T((r, i) => {
      const s = t.length,
        o = new Array(s);
      let l = 0;
      for (let a = 0; a < s; a++) {
        const u = a;
        n(t[u]).next(
          (c) => {
            (o[u] = c), ++l, l === s && r(o);
          },
          (c) => i(c),
        );
      }
    });
  }
  static doWhile(t, n) {
    return new T((r, i) => {
      const s = () => {
        t() === !0
          ? n().next(() => {
              s();
            }, i)
          : r();
      };
      s();
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class If {
  constructor(t, n) {
    (this.action = t),
      (this.transaction = n),
      (this.aborted = !1),
      (this.V = new $n()),
      (this.transaction.oncomplete = () => {
        this.V.resolve();
      }),
      (this.transaction.onabort = () => {
        n.error ? this.V.reject(new es(t, n.error)) : this.V.resolve();
      }),
      (this.transaction.onerror = (r) => {
        const i = Sf(r.target.error);
        this.V.reject(new es(t, i));
      });
  }
  static open(t, n, r, i) {
    try {
      return new If(n, t.transaction(i, r));
    } catch (s) {
      throw new es(n, s);
    }
  }
  get m() {
    return this.V.promise;
  }
  abort(t) {
    t && this.V.reject(t),
      this.aborted ||
        (D(
          "SimpleDb",
          "Aborting transaction:",
          t ? t.message : "Client-initiated abort",
        ),
        (this.aborted = !0),
        this.transaction.abort());
  }
  g() {
    const t = this.transaction;
    this.aborted || typeof t.commit != "function" || t.commit();
  }
  store(t) {
    const n = this.transaction.objectStore(t);
    return new JA(n);
  }
}
class or {
  constructor(t, n, r) {
    (this.name = t),
      (this.version = n),
      (this.p = r),
      or.S(Al()) === 12.2 &&
        zn(
          "Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.",
        );
  }
  static delete(t) {
    return (
      D("SimpleDb", "Removing database:", t),
      er(window.indexedDB.deleteDatabase(t)).toPromise()
    );
  }
  static D() {
    if (!My()) return !1;
    if (or.C()) return !0;
    const t = Al(),
      n = or.S(t),
      r = 0 < n && n < 10,
      i = or.v(t),
      s = 0 < i && i < 4.5;
    return !(
      t.indexOf("MSIE ") > 0 ||
      t.indexOf("Trident/") > 0 ||
      t.indexOf("Edge/") > 0 ||
      r ||
      s
    );
  }
  static C() {
    var t;
    return (
      typeof process < "u" &&
      ((t = process.__PRIVATE_env) === null || t === void 0 ? void 0 : t.F) ===
        "YES"
    );
  }
  static M(t, n) {
    return t.store(n);
  }
  static S(t) {
    const n = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),
      r = n ? n[1].split("_").slice(0, 2).join(".") : "-1";
    return Number(r);
  }
  static v(t) {
    const n = t.match(/Android ([\d.]+)/i),
      r = n ? n[1].split(".").slice(0, 2).join(".") : "-1";
    return Number(r);
  }
  async O(t) {
    return (
      this.db ||
        (D("SimpleDb", "Opening database:", this.name),
        (this.db = await new Promise((n, r) => {
          const i = indexedDB.open(this.name, this.version);
          (i.onsuccess = (s) => {
            const o = s.target.result;
            n(o);
          }),
            (i.onblocked = () => {
              r(
                new es(
                  t,
                  "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed.",
                ),
              );
            }),
            (i.onerror = (s) => {
              const o = s.target.error;
              o.name === "VersionError"
                ? r(
                    new M(
                      S.FAILED_PRECONDITION,
                      "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.",
                    ),
                  )
                : o.name === "InvalidStateError"
                  ? r(
                      new M(
                        S.FAILED_PRECONDITION,
                        "Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: " +
                          o,
                      ),
                    )
                  : r(new es(t, o));
            }),
            (i.onupgradeneeded = (s) => {
              D(
                "SimpleDb",
                'Database "' + this.name + '" requires upgrade from version:',
                s.oldVersion,
              );
              const o = s.target.result;
              this.p
                .N(o, i.transaction, s.oldVersion, this.version)
                .next(() => {
                  D(
                    "SimpleDb",
                    "Database upgrade to version " + this.version + " complete",
                  );
                });
            });
        }))),
      this.B && (this.db.onversionchange = (n) => this.B(n)),
      this.db
    );
  }
  L(t) {
    (this.B = t), this.db && (this.db.onversionchange = (n) => t(n));
  }
  async runTransaction(t, n, r, i) {
    const s = n === "readonly";
    let o = 0;
    for (;;) {
      ++o;
      try {
        this.db = await this.O(t);
        const l = If.open(this.db, t, s ? "readonly" : "readwrite", r),
          a = i(l)
            .next((u) => (l.g(), u))
            .catch((u) => (l.abort(u), T.reject(u)))
            .toPromise();
        return a.catch(() => {}), await l.m, a;
      } catch (l) {
        const a = l,
          u = a.name !== "FirebaseError" && o < 3;
        if (
          (D(
            "SimpleDb",
            "Transaction failed with error:",
            a.message,
            "Retrying:",
            u,
          ),
          this.close(),
          !u)
        )
          return Promise.reject(a);
      }
    }
  }
  close() {
    this.db && this.db.close(), (this.db = void 0);
  }
}
class YA {
  constructor(t) {
    (this.k = t), (this.q = !1), (this.K = null);
  }
  get isDone() {
    return this.q;
  }
  get $() {
    return this.K;
  }
  set cursor(t) {
    this.k = t;
  }
  done() {
    this.q = !0;
  }
  U(t) {
    this.K = t;
  }
  delete() {
    return er(this.k.delete());
  }
}
class es extends M {
  constructor(t, n) {
    super(S.UNAVAILABLE, `IndexedDB transaction '${t}' failed: ${n}`),
      (this.name = "IndexedDbTransactionError");
  }
}
function Ra(e) {
  return e.name === "IndexedDbTransactionError";
}
class JA {
  constructor(t) {
    this.store = t;
  }
  put(t, n) {
    let r;
    return (
      n !== void 0
        ? (D("SimpleDb", "PUT", this.store.name, t, n),
          (r = this.store.put(n, t)))
        : (D("SimpleDb", "PUT", this.store.name, "<auto-key>", t),
          (r = this.store.put(t))),
      er(r)
    );
  }
  add(t) {
    return D("SimpleDb", "ADD", this.store.name, t, t), er(this.store.add(t));
  }
  get(t) {
    return er(this.store.get(t)).next(
      (n) => (
        n === void 0 && (n = null),
        D("SimpleDb", "GET", this.store.name, t, n),
        n
      ),
    );
  }
  delete(t) {
    return (
      D("SimpleDb", "DELETE", this.store.name, t), er(this.store.delete(t))
    );
  }
  count() {
    return D("SimpleDb", "COUNT", this.store.name), er(this.store.count());
  }
  W(t, n) {
    const r = this.options(t, n),
      i = r.index ? this.store.index(r.index) : this.store;
    if (typeof i.getAll == "function") {
      const s = i.getAll(r.range);
      return new T((o, l) => {
        (s.onerror = (a) => {
          l(a.target.error);
        }),
          (s.onsuccess = (a) => {
            o(a.target.result);
          });
      });
    }
    {
      const s = this.cursor(r),
        o = [];
      return this.G(s, (l, a) => {
        o.push(a);
      }).next(() => o);
    }
  }
  j(t, n) {
    const r = this.store.getAll(t, n === null ? void 0 : n);
    return new T((i, s) => {
      (r.onerror = (o) => {
        s(o.target.error);
      }),
        (r.onsuccess = (o) => {
          i(o.target.result);
        });
    });
  }
  H(t, n) {
    D("SimpleDb", "DELETE ALL", this.store.name);
    const r = this.options(t, n);
    r.J = !1;
    const i = this.cursor(r);
    return this.G(i, (s, o, l) => l.delete());
  }
  Y(t, n) {
    let r;
    n ? (r = t) : ((r = {}), (n = t));
    const i = this.cursor(r);
    return this.G(i, n);
  }
  Z(t) {
    const n = this.cursor({});
    return new T((r, i) => {
      (n.onerror = (s) => {
        const o = Sf(s.target.error);
        i(o);
      }),
        (n.onsuccess = (s) => {
          const o = s.target.result;
          o
            ? t(o.primaryKey, o.value).next((l) => {
                l ? o.continue() : r();
              })
            : r();
        });
    });
  }
  G(t, n) {
    const r = [];
    return new T((i, s) => {
      (t.onerror = (o) => {
        s(o.target.error);
      }),
        (t.onsuccess = (o) => {
          const l = o.target.result;
          if (!l) return void i();
          const a = new YA(l),
            u = n(l.primaryKey, l.value, a);
          if (u instanceof T) {
            const c = u.catch((h) => (a.done(), T.reject(h)));
            r.push(c);
          }
          a.isDone ? i() : a.$ === null ? l.continue() : l.continue(a.$);
        });
    }).next(() => T.waitFor(r));
  }
  options(t, n) {
    let r;
    return (
      t !== void 0 && (typeof t == "string" ? (r = t) : (n = t)),
      { index: r, range: n }
    );
  }
  cursor(t) {
    let n = "next";
    if ((t.reverse && (n = "prev"), t.index)) {
      const r = this.store.index(t.index);
      return t.J ? r.openKeyCursor(t.range, n) : r.openCursor(t.range, n);
    }
    return this.store.openCursor(t.range, n);
  }
}
function er(e) {
  return new T((t, n) => {
    (e.onsuccess = (r) => {
      const i = r.target.result;
      t(i);
    }),
      (e.onerror = (r) => {
        const i = Sf(r.target.error);
        n(i);
      });
  });
}
let Op = !1;
function Sf(e) {
  const t = or.S(Al());
  if (t >= 12.2 && t < 13) {
    const n =
      "An internal error was encountered in the Indexed Database server";
    if (e.message.indexOf(n) >= 0) {
      const r = new M(
        "internal",
        `IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`,
      );
      return (
        Op ||
          ((Op = !0),
          setTimeout(() => {
            throw r;
          }, 0)),
        r
      );
    }
  }
  return e;
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class h0 {
  constructor(t, n) {
    (this.previousValue = t),
      n &&
        ((n.sequenceNumberHandler = (r) => this.se(r)),
        (this.oe = (r) => n.writeSequenceNumber(r)));
  }
  se(t) {
    return (
      (this.previousValue = Math.max(t, this.previousValue)), this.previousValue
    );
  }
  next() {
    const t = ++this.previousValue;
    return this.oe && this.oe(t), t;
  }
}
h0._e = -1;
function Af(e) {
  return e == null;
}
function Vl(e) {
  return e === 0 && 1 / e == -1 / 0;
}
function ZA(e) {
  return (
    typeof e == "number" &&
    Number.isInteger(e) &&
    !Vl(e) &&
    e <= Number.MAX_SAFE_INTEGER &&
    e >= Number.MIN_SAFE_INTEGER
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Vp(e) {
  let t = 0;
  for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && t++;
  return t;
}
function to(e, t) {
  for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && t(n, e[n]);
}
function f0(e) {
  for (const t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
  return !0;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ct {
  constructor(t, n) {
    (this.comparator = t), (this.root = n || De.EMPTY);
  }
  insert(t, n) {
    return new ct(
      this.comparator,
      this.root
        .insert(t, n, this.comparator)
        .copy(null, null, De.BLACK, null, null),
    );
  }
  remove(t) {
    return new ct(
      this.comparator,
      this.root
        .remove(t, this.comparator)
        .copy(null, null, De.BLACK, null, null),
    );
  }
  get(t) {
    let n = this.root;
    for (; !n.isEmpty(); ) {
      const r = this.comparator(t, n.key);
      if (r === 0) return n.value;
      r < 0 ? (n = n.left) : r > 0 && (n = n.right);
    }
    return null;
  }
  indexOf(t) {
    let n = 0,
      r = this.root;
    for (; !r.isEmpty(); ) {
      const i = this.comparator(t, r.key);
      if (i === 0) return n + r.left.size;
      i < 0 ? (r = r.left) : ((n += r.left.size + 1), (r = r.right));
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  get size() {
    return this.root.size;
  }
  minKey() {
    return this.root.minKey();
  }
  maxKey() {
    return this.root.maxKey();
  }
  inorderTraversal(t) {
    return this.root.inorderTraversal(t);
  }
  forEach(t) {
    this.inorderTraversal((n, r) => (t(n, r), !1));
  }
  toString() {
    const t = [];
    return (
      this.inorderTraversal((n, r) => (t.push(`${n}:${r}`), !1)),
      `{${t.join(", ")}}`
    );
  }
  reverseTraversal(t) {
    return this.root.reverseTraversal(t);
  }
  getIterator() {
    return new Do(this.root, null, this.comparator, !1);
  }
  getIteratorFrom(t) {
    return new Do(this.root, t, this.comparator, !1);
  }
  getReverseIterator() {
    return new Do(this.root, null, this.comparator, !0);
  }
  getReverseIteratorFrom(t) {
    return new Do(this.root, t, this.comparator, !0);
  }
}
class Do {
  constructor(t, n, r, i) {
    (this.isReverse = i), (this.nodeStack = []);
    let s = 1;
    for (; !t.isEmpty(); )
      if (((s = n ? r(t.key, n) : 1), n && i && (s *= -1), s < 0))
        t = this.isReverse ? t.left : t.right;
      else {
        if (s === 0) {
          this.nodeStack.push(t);
          break;
        }
        this.nodeStack.push(t), (t = this.isReverse ? t.right : t.left);
      }
  }
  getNext() {
    let t = this.nodeStack.pop();
    const n = { key: t.key, value: t.value };
    if (this.isReverse)
      for (t = t.left; !t.isEmpty(); ) this.nodeStack.push(t), (t = t.right);
    else for (t = t.right; !t.isEmpty(); ) this.nodeStack.push(t), (t = t.left);
    return n;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (this.nodeStack.length === 0) return null;
    const t = this.nodeStack[this.nodeStack.length - 1];
    return { key: t.key, value: t.value };
  }
}
class De {
  constructor(t, n, r, i, s) {
    (this.key = t),
      (this.value = n),
      (this.color = r ?? De.RED),
      (this.left = i ?? De.EMPTY),
      (this.right = s ?? De.EMPTY),
      (this.size = this.left.size + 1 + this.right.size);
  }
  copy(t, n, r, i, s) {
    return new De(
      t ?? this.key,
      n ?? this.value,
      r ?? this.color,
      i ?? this.left,
      s ?? this.right,
    );
  }
  isEmpty() {
    return !1;
  }
  inorderTraversal(t) {
    return (
      this.left.inorderTraversal(t) ||
      t(this.key, this.value) ||
      this.right.inorderTraversal(t)
    );
  }
  reverseTraversal(t) {
    return (
      this.right.reverseTraversal(t) ||
      t(this.key, this.value) ||
      this.left.reverseTraversal(t)
    );
  }
  min() {
    return this.left.isEmpty() ? this : this.left.min();
  }
  minKey() {
    return this.min().key;
  }
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  insert(t, n, r) {
    let i = this;
    const s = r(t, i.key);
    return (
      (i =
        s < 0
          ? i.copy(null, null, null, i.left.insert(t, n, r), null)
          : s === 0
            ? i.copy(null, n, null, null, null)
            : i.copy(null, null, null, null, i.right.insert(t, n, r))),
      i.fixUp()
    );
  }
  removeMin() {
    if (this.left.isEmpty()) return De.EMPTY;
    let t = this;
    return (
      t.left.isRed() || t.left.left.isRed() || (t = t.moveRedLeft()),
      (t = t.copy(null, null, null, t.left.removeMin(), null)),
      t.fixUp()
    );
  }
  remove(t, n) {
    let r,
      i = this;
    if (n(t, i.key) < 0)
      i.left.isEmpty() ||
        i.left.isRed() ||
        i.left.left.isRed() ||
        (i = i.moveRedLeft()),
        (i = i.copy(null, null, null, i.left.remove(t, n), null));
    else {
      if (
        (i.left.isRed() && (i = i.rotateRight()),
        i.right.isEmpty() ||
          i.right.isRed() ||
          i.right.left.isRed() ||
          (i = i.moveRedRight()),
        n(t, i.key) === 0)
      ) {
        if (i.right.isEmpty()) return De.EMPTY;
        (r = i.right.min()),
          (i = i.copy(r.key, r.value, null, null, i.right.removeMin()));
      }
      i = i.copy(null, null, null, null, i.right.remove(t, n));
    }
    return i.fixUp();
  }
  isRed() {
    return this.color;
  }
  fixUp() {
    let t = this;
    return (
      t.right.isRed() && !t.left.isRed() && (t = t.rotateLeft()),
      t.left.isRed() && t.left.left.isRed() && (t = t.rotateRight()),
      t.left.isRed() && t.right.isRed() && (t = t.colorFlip()),
      t
    );
  }
  moveRedLeft() {
    let t = this.colorFlip();
    return (
      t.right.left.isRed() &&
        ((t = t.copy(null, null, null, null, t.right.rotateRight())),
        (t = t.rotateLeft()),
        (t = t.colorFlip())),
      t
    );
  }
  moveRedRight() {
    let t = this.colorFlip();
    return (
      t.left.left.isRed() && ((t = t.rotateRight()), (t = t.colorFlip())), t
    );
  }
  rotateLeft() {
    const t = this.copy(null, null, De.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, t, null);
  }
  rotateRight() {
    const t = this.copy(null, null, De.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, t);
  }
  colorFlip() {
    const t = this.left.copy(null, null, !this.left.color, null, null),
      n = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, t, n);
  }
  checkMaxDepth() {
    const t = this.check();
    return Math.pow(2, t) <= this.size + 1;
  }
  check() {
    if ((this.isRed() && this.left.isRed()) || this.right.isRed()) throw z();
    const t = this.left.check();
    if (t !== this.right.check()) throw z();
    return t + (this.isRed() ? 0 : 1);
  }
}
(De.EMPTY = null), (De.RED = !0), (De.BLACK = !1);
De.EMPTY = new (class {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw z();
  }
  get value() {
    throw z();
  }
  get color() {
    throw z();
  }
  get left() {
    throw z();
  }
  get right() {
    throw z();
  }
  copy(t, n, r, i, s) {
    return this;
  }
  insert(t, n, r) {
    return new De(t, n);
  }
  remove(t, n) {
    return this;
  }
  isEmpty() {
    return !0;
  }
  inorderTraversal(t) {
    return !1;
  }
  reverseTraversal(t) {
    return !1;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return !1;
  }
  checkMaxDepth() {
    return !0;
  }
  check() {
    return 0;
  }
})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class qe {
  constructor(t) {
    (this.comparator = t), (this.data = new ct(this.comparator));
  }
  has(t) {
    return this.data.get(t) !== null;
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(t) {
    return this.data.indexOf(t);
  }
  forEach(t) {
    this.data.inorderTraversal((n, r) => (t(n), !1));
  }
  forEachInRange(t, n) {
    const r = this.data.getIteratorFrom(t[0]);
    for (; r.hasNext(); ) {
      const i = r.getNext();
      if (this.comparator(i.key, t[1]) >= 0) return;
      n(i.key);
    }
  }
  forEachWhile(t, n) {
    let r;
    for (
      r = n !== void 0 ? this.data.getIteratorFrom(n) : this.data.getIterator();
      r.hasNext();

    )
      if (!t(r.getNext().key)) return;
  }
  firstAfterOrEqual(t) {
    const n = this.data.getIteratorFrom(t);
    return n.hasNext() ? n.getNext().key : null;
  }
  getIterator() {
    return new Lp(this.data.getIterator());
  }
  getIteratorFrom(t) {
    return new Lp(this.data.getIteratorFrom(t));
  }
  add(t) {
    return this.copy(this.data.remove(t).insert(t, !0));
  }
  delete(t) {
    return this.has(t) ? this.copy(this.data.remove(t)) : this;
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(t) {
    let n = this;
    return (
      n.size < t.size && ((n = t), (t = this)),
      t.forEach((r) => {
        n = n.add(r);
      }),
      n
    );
  }
  isEqual(t) {
    if (!(t instanceof qe) || this.size !== t.size) return !1;
    const n = this.data.getIterator(),
      r = t.data.getIterator();
    for (; n.hasNext(); ) {
      const i = n.getNext().key,
        s = r.getNext().key;
      if (this.comparator(i, s) !== 0) return !1;
    }
    return !0;
  }
  toArray() {
    const t = [];
    return (
      this.forEach((n) => {
        t.push(n);
      }),
      t
    );
  }
  toString() {
    const t = [];
    return this.forEach((n) => t.push(n)), "SortedSet(" + t.toString() + ")";
  }
  copy(t) {
    const n = new qe(this.comparator);
    return (n.data = t), n;
  }
}
class Lp {
  constructor(t) {
    this.iter = t;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Mt {
  constructor(t) {
    (this.fields = t), t.sort(Le.comparator);
  }
  static empty() {
    return new Mt([]);
  }
  unionWith(t) {
    let n = new qe(Le.comparator);
    for (const r of this.fields) n = n.add(r);
    for (const r of t) n = n.add(r);
    return new Mt(n.toArray());
  }
  covers(t) {
    for (const n of this.fields) if (n.isPrefixOf(t)) return !0;
    return !1;
  }
  isEqual(t) {
    return ui(this.fields, t.fields, (n, r) => n.isEqual(r));
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eC extends Error {
  constructor() {
    super(...arguments), (this.name = "Base64DecodeError");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fn {
  constructor(t) {
    this.binaryString = t;
  }
  static fromBase64String(t) {
    const n = (function (i) {
      try {
        return atob(i);
      } catch (s) {
        throw typeof DOMException < "u" && s instanceof DOMException
          ? new eC("Invalid base64 string: " + s)
          : s;
      }
    })(t);
    return new fn(n);
  }
  static fromUint8Array(t) {
    const n = (function (i) {
      let s = "";
      for (let o = 0; o < i.length; ++o) s += String.fromCharCode(i[o]);
      return s;
    })(t);
    return new fn(n);
  }
  [Symbol.iterator]() {
    let t = 0;
    return {
      next: () =>
        t < this.binaryString.length
          ? { value: this.binaryString.charCodeAt(t++), done: !1 }
          : { value: void 0, done: !0 },
    };
  }
  toBase64() {
    return (function (n) {
      return btoa(n);
    })(this.binaryString);
  }
  toUint8Array() {
    return (function (n) {
      const r = new Uint8Array(n.length);
      for (let i = 0; i < n.length; i++) r[i] = n.charCodeAt(i);
      return r;
    })(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(t) {
    return J(this.binaryString, t.binaryString);
  }
  isEqual(t) {
    return this.binaryString === t.binaryString;
  }
}
fn.EMPTY_BYTE_STRING = new fn("");
const tC = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function Ir(e) {
  if ((Pe(!!e), typeof e == "string")) {
    let t = 0;
    const n = tC.exec(e);
    if ((Pe(!!n), n[1])) {
      let i = n[1];
      (i = (i + "000000000").substr(0, 9)), (t = Number(i));
    }
    const r = new Date(e);
    return { seconds: Math.floor(r.getTime() / 1e3), nanos: t };
  }
  return { seconds: Oe(e.seconds), nanos: Oe(e.nanos) };
}
function Oe(e) {
  return typeof e == "number" ? e : typeof e == "string" ? Number(e) : 0;
}
function $s(e) {
  return typeof e == "string" ? fn.fromBase64String(e) : fn.fromUint8Array(e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Cf(e) {
  var t, n;
  return (
    ((n = (
      ((t = e == null ? void 0 : e.mapValue) === null || t === void 0
        ? void 0
        : t.fields) || {}
    ).__type__) === null || n === void 0
      ? void 0
      : n.stringValue) === "server_timestamp"
  );
}
function d0(e) {
  const t = e.mapValue.fields.__previous_value__;
  return Cf(t) ? d0(t) : t;
}
function Ll(e) {
  const t = Ir(e.mapValue.fields.__local_write_time__.timestampValue);
  return new Ce(t.seconds, t.nanos);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nC {
  constructor(t, n, r, i, s, o, l, a, u) {
    (this.databaseId = t),
      (this.appId = n),
      (this.persistenceKey = r),
      (this.host = i),
      (this.ssl = s),
      (this.forceLongPolling = o),
      (this.autoDetectLongPolling = l),
      (this.longPollingOptions = a),
      (this.useFetchStreams = u);
  }
}
class Ml {
  constructor(t, n) {
    (this.projectId = t), (this.database = n || "(default)");
  }
  static empty() {
    return new Ml("", "");
  }
  get isDefaultDatabase() {
    return this.database === "(default)";
  }
  isEqual(t) {
    return (
      t instanceof Ml &&
      t.projectId === this.projectId &&
      t.database === this.database
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Oo = {
  mapValue: { fields: { __type__: { stringValue: "__max__" } } },
};
function ci(e) {
  return "nullValue" in e
    ? 0
    : "booleanValue" in e
      ? 1
      : "integerValue" in e || "doubleValue" in e
        ? 2
        : "timestampValue" in e
          ? 3
          : "stringValue" in e
            ? 5
            : "bytesValue" in e
              ? 6
              : "referenceValue" in e
                ? 7
                : "geoPointValue" in e
                  ? 8
                  : "arrayValue" in e
                    ? 9
                    : "mapValue" in e
                      ? Cf(e)
                        ? 4
                        : rC(e)
                          ? 9007199254740991
                          : 10
                      : z();
}
function Yt(e, t) {
  if (e === t) return !0;
  const n = ci(e);
  if (n !== ci(t)) return !1;
  switch (n) {
    case 0:
    case 9007199254740991:
      return !0;
    case 1:
      return e.booleanValue === t.booleanValue;
    case 4:
      return Ll(e).isEqual(Ll(t));
    case 3:
      return (function (i, s) {
        if (
          typeof i.timestampValue == "string" &&
          typeof s.timestampValue == "string" &&
          i.timestampValue.length === s.timestampValue.length
        )
          return i.timestampValue === s.timestampValue;
        const o = Ir(i.timestampValue),
          l = Ir(s.timestampValue);
        return o.seconds === l.seconds && o.nanos === l.nanos;
      })(e, t);
    case 5:
      return e.stringValue === t.stringValue;
    case 6:
      return (function (i, s) {
        return $s(i.bytesValue).isEqual($s(s.bytesValue));
      })(e, t);
    case 7:
      return e.referenceValue === t.referenceValue;
    case 8:
      return (function (i, s) {
        return (
          Oe(i.geoPointValue.latitude) === Oe(s.geoPointValue.latitude) &&
          Oe(i.geoPointValue.longitude) === Oe(s.geoPointValue.longitude)
        );
      })(e, t);
    case 2:
      return (function (i, s) {
        if ("integerValue" in i && "integerValue" in s)
          return Oe(i.integerValue) === Oe(s.integerValue);
        if ("doubleValue" in i && "doubleValue" in s) {
          const o = Oe(i.doubleValue),
            l = Oe(s.doubleValue);
          return o === l ? Vl(o) === Vl(l) : isNaN(o) && isNaN(l);
        }
        return !1;
      })(e, t);
    case 9:
      return ui(e.arrayValue.values || [], t.arrayValue.values || [], Yt);
    case 10:
      return (function (i, s) {
        const o = i.mapValue.fields || {},
          l = s.mapValue.fields || {};
        if (Vp(o) !== Vp(l)) return !1;
        for (const a in o)
          if (o.hasOwnProperty(a) && (l[a] === void 0 || !Yt(o[a], l[a])))
            return !1;
        return !0;
      })(e, t);
    default:
      return z();
  }
}
function Fs(e, t) {
  return (e.values || []).find((n) => Yt(n, t)) !== void 0;
}
function hi(e, t) {
  if (e === t) return 0;
  const n = ci(e),
    r = ci(t);
  if (n !== r) return J(n, r);
  switch (n) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return J(e.booleanValue, t.booleanValue);
    case 2:
      return (function (s, o) {
        const l = Oe(s.integerValue || s.doubleValue),
          a = Oe(o.integerValue || o.doubleValue);
        return l < a
          ? -1
          : l > a
            ? 1
            : l === a
              ? 0
              : isNaN(l)
                ? isNaN(a)
                  ? 0
                  : -1
                : 1;
      })(e, t);
    case 3:
      return Mp(e.timestampValue, t.timestampValue);
    case 4:
      return Mp(Ll(e), Ll(t));
    case 5:
      return J(e.stringValue, t.stringValue);
    case 6:
      return (function (s, o) {
        const l = $s(s),
          a = $s(o);
        return l.compareTo(a);
      })(e.bytesValue, t.bytesValue);
    case 7:
      return (function (s, o) {
        const l = s.split("/"),
          a = o.split("/");
        for (let u = 0; u < l.length && u < a.length; u++) {
          const c = J(l[u], a[u]);
          if (c !== 0) return c;
        }
        return J(l.length, a.length);
      })(e.referenceValue, t.referenceValue);
    case 8:
      return (function (s, o) {
        const l = J(Oe(s.latitude), Oe(o.latitude));
        return l !== 0 ? l : J(Oe(s.longitude), Oe(o.longitude));
      })(e.geoPointValue, t.geoPointValue);
    case 9:
      return (function (s, o) {
        const l = s.values || [],
          a = o.values || [];
        for (let u = 0; u < l.length && u < a.length; ++u) {
          const c = hi(l[u], a[u]);
          if (c) return c;
        }
        return J(l.length, a.length);
      })(e.arrayValue, t.arrayValue);
    case 10:
      return (function (s, o) {
        if (s === Oo.mapValue && o === Oo.mapValue) return 0;
        if (s === Oo.mapValue) return 1;
        if (o === Oo.mapValue) return -1;
        const l = s.fields || {},
          a = Object.keys(l),
          u = o.fields || {},
          c = Object.keys(u);
        a.sort(), c.sort();
        for (let h = 0; h < a.length && h < c.length; ++h) {
          const d = J(a[h], c[h]);
          if (d !== 0) return d;
          const g = hi(l[a[h]], u[c[h]]);
          if (g !== 0) return g;
        }
        return J(a.length, c.length);
      })(e.mapValue, t.mapValue);
    default:
      throw z();
  }
}
function Mp(e, t) {
  if (typeof e == "string" && typeof t == "string" && e.length === t.length)
    return J(e, t);
  const n = Ir(e),
    r = Ir(t),
    i = J(n.seconds, r.seconds);
  return i !== 0 ? i : J(n.nanos, r.nanos);
}
function fi(e) {
  return Hc(e);
}
function Hc(e) {
  return "nullValue" in e
    ? "null"
    : "booleanValue" in e
      ? "" + e.booleanValue
      : "integerValue" in e
        ? "" + e.integerValue
        : "doubleValue" in e
          ? "" + e.doubleValue
          : "timestampValue" in e
            ? (function (n) {
                const r = Ir(n);
                return `time(${r.seconds},${r.nanos})`;
              })(e.timestampValue)
            : "stringValue" in e
              ? e.stringValue
              : "bytesValue" in e
                ? (function (n) {
                    return $s(n).toBase64();
                  })(e.bytesValue)
                : "referenceValue" in e
                  ? (function (n) {
                      return j.fromName(n).toString();
                    })(e.referenceValue)
                  : "geoPointValue" in e
                    ? (function (n) {
                        return `geo(${n.latitude},${n.longitude})`;
                      })(e.geoPointValue)
                    : "arrayValue" in e
                      ? (function (n) {
                          let r = "[",
                            i = !0;
                          for (const s of n.values || [])
                            i ? (i = !1) : (r += ","), (r += Hc(s));
                          return r + "]";
                        })(e.arrayValue)
                      : "mapValue" in e
                        ? (function (n) {
                            const r = Object.keys(n.fields || {}).sort();
                            let i = "{",
                              s = !0;
                            for (const o of r)
                              s ? (s = !1) : (i += ","),
                                (i += `${o}:${Hc(n.fields[o])}`);
                            return i + "}";
                          })(e.mapValue)
                        : z();
}
function Wc(e) {
  return !!e && "integerValue" in e;
}
function Rf(e) {
  return !!e && "arrayValue" in e;
}
function Xo(e) {
  return !!e && "mapValue" in e;
}
function ts(e) {
  if (e.geoPointValue)
    return { geoPointValue: Object.assign({}, e.geoPointValue) };
  if (e.timestampValue && typeof e.timestampValue == "object")
    return { timestampValue: Object.assign({}, e.timestampValue) };
  if (e.mapValue) {
    const t = { mapValue: { fields: {} } };
    return to(e.mapValue.fields, (n, r) => (t.mapValue.fields[n] = ts(r))), t;
  }
  if (e.arrayValue) {
    const t = { arrayValue: { values: [] } };
    for (let n = 0; n < (e.arrayValue.values || []).length; ++n)
      t.arrayValue.values[n] = ts(e.arrayValue.values[n]);
    return t;
  }
  return Object.assign({}, e);
}
function rC(e) {
  return (
    (((e.mapValue || {}).fields || {}).__type__ || {}).stringValue === "__max__"
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Lt {
  constructor(t) {
    this.value = t;
  }
  static empty() {
    return new Lt({ mapValue: {} });
  }
  field(t) {
    if (t.isEmpty()) return this.value;
    {
      let n = this.value;
      for (let r = 0; r < t.length - 1; ++r)
        if (((n = (n.mapValue.fields || {})[t.get(r)]), !Xo(n))) return null;
      return (n = (n.mapValue.fields || {})[t.lastSegment()]), n || null;
    }
  }
  set(t, n) {
    this.getFieldsMap(t.popLast())[t.lastSegment()] = ts(n);
  }
  setAll(t) {
    let n = Le.emptyPath(),
      r = {},
      i = [];
    t.forEach((o, l) => {
      if (!n.isImmediateParentOf(l)) {
        const a = this.getFieldsMap(n);
        this.applyChanges(a, r, i), (r = {}), (i = []), (n = l.popLast());
      }
      o ? (r[l.lastSegment()] = ts(o)) : i.push(l.lastSegment());
    });
    const s = this.getFieldsMap(n);
    this.applyChanges(s, r, i);
  }
  delete(t) {
    const n = this.field(t.popLast());
    Xo(n) && n.mapValue.fields && delete n.mapValue.fields[t.lastSegment()];
  }
  isEqual(t) {
    return Yt(this.value, t.value);
  }
  getFieldsMap(t) {
    let n = this.value;
    n.mapValue.fields || (n.mapValue = { fields: {} });
    for (let r = 0; r < t.length; ++r) {
      let i = n.mapValue.fields[t.get(r)];
      (Xo(i) && i.mapValue.fields) ||
        ((i = { mapValue: { fields: {} } }), (n.mapValue.fields[t.get(r)] = i)),
        (n = i);
    }
    return n.mapValue.fields;
  }
  applyChanges(t, n, r) {
    to(n, (i, s) => (t[i] = s));
    for (const i of r) delete t[i];
  }
  clone() {
    return new Lt(ts(this.value));
  }
}
function p0(e) {
  const t = [];
  return (
    to(e.fields, (n, r) => {
      const i = new Le([n]);
      if (Xo(r)) {
        const s = p0(r.mapValue).fields;
        if (s.length === 0) t.push(i);
        else for (const o of s) t.push(i.child(o));
      } else t.push(i);
    }),
    new Mt(t)
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Vt {
  constructor(t, n, r, i, s, o, l) {
    (this.key = t),
      (this.documentType = n),
      (this.version = r),
      (this.readTime = i),
      (this.createTime = s),
      (this.data = o),
      (this.documentState = l);
  }
  static newInvalidDocument(t) {
    return new Vt(t, 0, se.min(), se.min(), se.min(), Lt.empty(), 0);
  }
  static newFoundDocument(t, n, r, i) {
    return new Vt(t, 1, n, se.min(), r, i, 0);
  }
  static newNoDocument(t, n) {
    return new Vt(t, 2, n, se.min(), se.min(), Lt.empty(), 0);
  }
  static newUnknownDocument(t, n) {
    return new Vt(t, 3, n, se.min(), se.min(), Lt.empty(), 2);
  }
  convertToFoundDocument(t, n) {
    return (
      !this.createTime.isEqual(se.min()) ||
        (this.documentType !== 2 && this.documentType !== 0) ||
        (this.createTime = t),
      (this.version = t),
      (this.documentType = 1),
      (this.data = n),
      (this.documentState = 0),
      this
    );
  }
  convertToNoDocument(t) {
    return (
      (this.version = t),
      (this.documentType = 2),
      (this.data = Lt.empty()),
      (this.documentState = 0),
      this
    );
  }
  convertToUnknownDocument(t) {
    return (
      (this.version = t),
      (this.documentType = 3),
      (this.data = Lt.empty()),
      (this.documentState = 2),
      this
    );
  }
  setHasCommittedMutations() {
    return (this.documentState = 2), this;
  }
  setHasLocalMutations() {
    return (this.documentState = 1), (this.version = se.min()), this;
  }
  setReadTime(t) {
    return (this.readTime = t), this;
  }
  get hasLocalMutations() {
    return this.documentState === 1;
  }
  get hasCommittedMutations() {
    return this.documentState === 2;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return this.documentType !== 0;
  }
  isFoundDocument() {
    return this.documentType === 1;
  }
  isNoDocument() {
    return this.documentType === 2;
  }
  isUnknownDocument() {
    return this.documentType === 3;
  }
  isEqual(t) {
    return (
      t instanceof Vt &&
      this.key.isEqual(t.key) &&
      this.version.isEqual(t.version) &&
      this.documentType === t.documentType &&
      this.documentState === t.documentState &&
      this.data.isEqual(t.data)
    );
  }
  mutableCopy() {
    return new Vt(
      this.key,
      this.documentType,
      this.version,
      this.readTime,
      this.createTime,
      this.data.clone(),
      this.documentState,
    );
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $l {
  constructor(t, n) {
    (this.position = t), (this.inclusive = n);
  }
}
function $p(e, t, n) {
  let r = 0;
  for (let i = 0; i < e.position.length; i++) {
    const s = t[i],
      o = e.position[i];
    if (
      (s.field.isKeyField()
        ? (r = j.comparator(j.fromName(o.referenceValue), n.key))
        : (r = hi(o, n.data.field(s.field))),
      s.dir === "desc" && (r *= -1),
      r !== 0)
    )
      break;
  }
  return r;
}
function Fp(e, t) {
  if (e === null) return t === null;
  if (
    t === null ||
    e.inclusive !== t.inclusive ||
    e.position.length !== t.position.length
  )
    return !1;
  for (let n = 0; n < e.position.length; n++)
    if (!Yt(e.position[n], t.position[n])) return !1;
  return !0;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Fl {
  constructor(t, n = "asc") {
    (this.field = t), (this.dir = n);
  }
}
function iC(e, t) {
  return e.dir === t.dir && e.field.isEqual(t.field);
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class m0 {}
class Se extends m0 {
  constructor(t, n, r) {
    super(), (this.field = t), (this.op = n), (this.value = r);
  }
  static create(t, n, r) {
    return t.isKeyField()
      ? n === "in" || n === "not-in"
        ? this.createKeyFieldInFilter(t, n, r)
        : new oC(t, n, r)
      : n === "array-contains"
        ? new uC(t, r)
        : n === "in"
          ? new cC(t, r)
          : n === "not-in"
            ? new hC(t, r)
            : n === "array-contains-any"
              ? new fC(t, r)
              : new Se(t, n, r);
  }
  static createKeyFieldInFilter(t, n, r) {
    return n === "in" ? new lC(t, r) : new aC(t, r);
  }
  matches(t) {
    const n = t.data.field(this.field);
    return this.op === "!="
      ? n !== null && this.matchesComparison(hi(n, this.value))
      : n !== null &&
          ci(this.value) === ci(n) &&
          this.matchesComparison(hi(n, this.value));
  }
  matchesComparison(t) {
    switch (this.op) {
      case "<":
        return t < 0;
      case "<=":
        return t <= 0;
      case "==":
        return t === 0;
      case "!=":
        return t !== 0;
      case ">":
        return t > 0;
      case ">=":
        return t >= 0;
      default:
        return z();
    }
  }
  isInequality() {
    return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0;
  }
  getFlattenedFilters() {
    return [this];
  }
  getFilters() {
    return [this];
  }
}
class Hn extends m0 {
  constructor(t, n) {
    super(), (this.filters = t), (this.op = n), (this.ue = null);
  }
  static create(t, n) {
    return new Hn(t, n);
  }
  matches(t) {
    return g0(this)
      ? this.filters.find((n) => !n.matches(t)) === void 0
      : this.filters.find((n) => n.matches(t)) !== void 0;
  }
  getFlattenedFilters() {
    return (
      this.ue !== null ||
        (this.ue = this.filters.reduce(
          (t, n) => t.concat(n.getFlattenedFilters()),
          [],
        )),
      this.ue
    );
  }
  getFilters() {
    return Object.assign([], this.filters);
  }
}
function g0(e) {
  return e.op === "and";
}
function y0(e) {
  return sC(e) && g0(e);
}
function sC(e) {
  for (const t of e.filters) if (t instanceof Hn) return !1;
  return !0;
}
function Kc(e) {
  if (e instanceof Se)
    return e.field.canonicalString() + e.op.toString() + fi(e.value);
  if (y0(e)) return e.filters.map((t) => Kc(t)).join(",");
  {
    const t = e.filters.map((n) => Kc(n)).join(",");
    return `${e.op}(${t})`;
  }
}
function v0(e, t) {
  return e instanceof Se
    ? (function (r, i) {
        return (
          i instanceof Se &&
          r.op === i.op &&
          r.field.isEqual(i.field) &&
          Yt(r.value, i.value)
        );
      })(e, t)
    : e instanceof Hn
      ? (function (r, i) {
          return i instanceof Hn &&
            r.op === i.op &&
            r.filters.length === i.filters.length
            ? r.filters.reduce((s, o, l) => s && v0(o, i.filters[l]), !0)
            : !1;
        })(e, t)
      : void z();
}
function _0(e) {
  return e instanceof Se
    ? (function (n) {
        return `${n.field.canonicalString()} ${n.op} ${fi(n.value)}`;
      })(e)
    : e instanceof Hn
      ? (function (n) {
          return (
            n.op.toString() + " {" + n.getFilters().map(_0).join(" ,") + "}"
          );
        })(e)
      : "Filter";
}
class oC extends Se {
  constructor(t, n, r) {
    super(t, n, r), (this.key = j.fromName(r.referenceValue));
  }
  matches(t) {
    const n = j.comparator(t.key, this.key);
    return this.matchesComparison(n);
  }
}
class lC extends Se {
  constructor(t, n) {
    super(t, "in", n), (this.keys = E0("in", n));
  }
  matches(t) {
    return this.keys.some((n) => n.isEqual(t.key));
  }
}
class aC extends Se {
  constructor(t, n) {
    super(t, "not-in", n), (this.keys = E0("not-in", n));
  }
  matches(t) {
    return !this.keys.some((n) => n.isEqual(t.key));
  }
}
function E0(e, t) {
  var n;
  return (
    ((n = t.arrayValue) === null || n === void 0 ? void 0 : n.values) || []
  ).map((r) => j.fromName(r.referenceValue));
}
class uC extends Se {
  constructor(t, n) {
    super(t, "array-contains", n);
  }
  matches(t) {
    const n = t.data.field(this.field);
    return Rf(n) && Fs(n.arrayValue, this.value);
  }
}
class cC extends Se {
  constructor(t, n) {
    super(t, "in", n);
  }
  matches(t) {
    const n = t.data.field(this.field);
    return n !== null && Fs(this.value.arrayValue, n);
  }
}
class hC extends Se {
  constructor(t, n) {
    super(t, "not-in", n);
  }
  matches(t) {
    if (Fs(this.value.arrayValue, { nullValue: "NULL_VALUE" })) return !1;
    const n = t.data.field(this.field);
    return n !== null && !Fs(this.value.arrayValue, n);
  }
}
class fC extends Se {
  constructor(t, n) {
    super(t, "array-contains-any", n);
  }
  matches(t) {
    const n = t.data.field(this.field);
    return (
      !(!Rf(n) || !n.arrayValue.values) &&
      n.arrayValue.values.some((r) => Fs(this.value.arrayValue, r))
    );
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dC {
  constructor(t, n = null, r = [], i = [], s = null, o = null, l = null) {
    (this.path = t),
      (this.collectionGroup = n),
      (this.orderBy = r),
      (this.filters = i),
      (this.limit = s),
      (this.startAt = o),
      (this.endAt = l),
      (this.ce = null);
  }
}
function Up(e, t = null, n = [], r = [], i = null, s = null, o = null) {
  return new dC(e, t, n, r, i, s, o);
}
function Pf(e) {
  const t = re(e);
  if (t.ce === null) {
    let n = t.path.canonicalString();
    t.collectionGroup !== null && (n += "|cg:" + t.collectionGroup),
      (n += "|f:"),
      (n += t.filters.map((r) => Kc(r)).join(",")),
      (n += "|ob:"),
      (n += t.orderBy
        .map((r) =>
          (function (s) {
            return s.field.canonicalString() + s.dir;
          })(r),
        )
        .join(",")),
      Af(t.limit) || ((n += "|l:"), (n += t.limit)),
      t.startAt &&
        ((n += "|lb:"),
        (n += t.startAt.inclusive ? "b:" : "a:"),
        (n += t.startAt.position.map((r) => fi(r)).join(","))),
      t.endAt &&
        ((n += "|ub:"),
        (n += t.endAt.inclusive ? "a:" : "b:"),
        (n += t.endAt.position.map((r) => fi(r)).join(","))),
      (t.ce = n);
  }
  return t.ce;
}
function kf(e, t) {
  if (e.limit !== t.limit || e.orderBy.length !== t.orderBy.length) return !1;
  for (let n = 0; n < e.orderBy.length; n++)
    if (!iC(e.orderBy[n], t.orderBy[n])) return !1;
  if (e.filters.length !== t.filters.length) return !1;
  for (let n = 0; n < e.filters.length; n++)
    if (!v0(e.filters[n], t.filters[n])) return !1;
  return (
    e.collectionGroup === t.collectionGroup &&
    !!e.path.isEqual(t.path) &&
    !!Fp(e.startAt, t.startAt) &&
    Fp(e.endAt, t.endAt)
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Pa {
  constructor(
    t,
    n = null,
    r = [],
    i = [],
    s = null,
    o = "F",
    l = null,
    a = null,
  ) {
    (this.path = t),
      (this.collectionGroup = n),
      (this.explicitOrderBy = r),
      (this.filters = i),
      (this.limit = s),
      (this.limitType = o),
      (this.startAt = l),
      (this.endAt = a),
      (this.le = null),
      (this.he = null),
      (this.Pe = null),
      this.startAt,
      this.endAt;
  }
}
function pC(e, t, n, r, i, s, o, l) {
  return new Pa(e, t, n, r, i, s, o, l);
}
function mC(e) {
  return new Pa(e);
}
function jp(e) {
  return (
    e.filters.length === 0 &&
    e.limit === null &&
    e.startAt == null &&
    e.endAt == null &&
    (e.explicitOrderBy.length === 0 ||
      (e.explicitOrderBy.length === 1 &&
        e.explicitOrderBy[0].field.isKeyField()))
  );
}
function gC(e) {
  return e.collectionGroup !== null;
}
function ns(e) {
  const t = re(e);
  if (t.le === null) {
    t.le = [];
    const n = new Set();
    for (const s of t.explicitOrderBy)
      t.le.push(s), n.add(s.field.canonicalString());
    const r =
      t.explicitOrderBy.length > 0
        ? t.explicitOrderBy[t.explicitOrderBy.length - 1].dir
        : "asc";
    (function (o) {
      let l = new qe(Le.comparator);
      return (
        o.filters.forEach((a) => {
          a.getFlattenedFilters().forEach((u) => {
            u.isInequality() && (l = l.add(u.field));
          });
        }),
        l
      );
    })(t).forEach((s) => {
      n.has(s.canonicalString()) || s.isKeyField() || t.le.push(new Fl(s, r));
    }),
      n.has(Le.keyField().canonicalString()) ||
        t.le.push(new Fl(Le.keyField(), r));
  }
  return t.le;
}
function pr(e) {
  const t = re(e);
  return t.he || (t.he = yC(t, ns(e))), t.he;
}
function yC(e, t) {
  if (e.limitType === "F")
    return Up(
      e.path,
      e.collectionGroup,
      t,
      e.filters,
      e.limit,
      e.startAt,
      e.endAt,
    );
  {
    t = t.map((i) => {
      const s = i.dir === "desc" ? "asc" : "desc";
      return new Fl(i.field, s);
    });
    const n = e.endAt ? new $l(e.endAt.position, e.endAt.inclusive) : null,
      r = e.startAt ? new $l(e.startAt.position, e.startAt.inclusive) : null;
    return Up(e.path, e.collectionGroup, t, e.filters, e.limit, n, r);
  }
}
function qc(e, t, n) {
  return new Pa(
    e.path,
    e.collectionGroup,
    e.explicitOrderBy.slice(),
    e.filters.slice(),
    t,
    n,
    e.startAt,
    e.endAt,
  );
}
function w0(e, t) {
  return kf(pr(e), pr(t)) && e.limitType === t.limitType;
}
function T0(e) {
  return `${Pf(pr(e))}|lt:${e.limitType}`;
}
function Vi(e) {
  return `Query(target=${(function (n) {
    let r = n.path.canonicalString();
    return (
      n.collectionGroup !== null &&
        (r += " collectionGroup=" + n.collectionGroup),
      n.filters.length > 0 &&
        (r += `, filters: [${n.filters.map((i) => _0(i)).join(", ")}]`),
      Af(n.limit) || (r += ", limit: " + n.limit),
      n.orderBy.length > 0 &&
        (r += `, orderBy: [${n.orderBy
          .map((i) =>
            (function (o) {
              return `${o.field.canonicalString()} (${o.dir})`;
            })(i),
          )
          .join(", ")}]`),
      n.startAt &&
        ((r += ", startAt: "),
        (r += n.startAt.inclusive ? "b:" : "a:"),
        (r += n.startAt.position.map((i) => fi(i)).join(","))),
      n.endAt &&
        ((r += ", endAt: "),
        (r += n.endAt.inclusive ? "a:" : "b:"),
        (r += n.endAt.position.map((i) => fi(i)).join(","))),
      `Target(${r})`
    );
  })(pr(e))}; limitType=${e.limitType})`;
}
function xf(e, t) {
  return (
    t.isFoundDocument() &&
    (function (r, i) {
      const s = i.key.path;
      return r.collectionGroup !== null
        ? i.key.hasCollectionId(r.collectionGroup) && r.path.isPrefixOf(s)
        : j.isDocumentKey(r.path)
          ? r.path.isEqual(s)
          : r.path.isImmediateParentOf(s);
    })(e, t) &&
    (function (r, i) {
      for (const s of ns(r))
        if (!s.field.isKeyField() && i.data.field(s.field) === null) return !1;
      return !0;
    })(e, t) &&
    (function (r, i) {
      for (const s of r.filters) if (!s.matches(i)) return !1;
      return !0;
    })(e, t) &&
    (function (r, i) {
      return !(
        (r.startAt &&
          !(function (o, l, a) {
            const u = $p(o, l, a);
            return o.inclusive ? u <= 0 : u < 0;
          })(r.startAt, ns(r), i)) ||
        (r.endAt &&
          !(function (o, l, a) {
            const u = $p(o, l, a);
            return o.inclusive ? u >= 0 : u > 0;
          })(r.endAt, ns(r), i))
      );
    })(e, t)
  );
}
function vC(e) {
  return (t, n) => {
    let r = !1;
    for (const i of ns(e)) {
      const s = _C(i, t, n);
      if (s !== 0) return s;
      r = r || i.field.isKeyField();
    }
    return 0;
  };
}
function _C(e, t, n) {
  const r = e.field.isKeyField()
    ? j.comparator(t.key, n.key)
    : (function (s, o, l) {
        const a = o.data.field(s),
          u = l.data.field(s);
        return a !== null && u !== null ? hi(a, u) : z();
      })(e.field, t, n);
  switch (e.dir) {
    case "asc":
      return r;
    case "desc":
      return -1 * r;
    default:
      return z();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wi {
  constructor(t, n) {
    (this.mapKeyFn = t),
      (this.equalsFn = n),
      (this.inner = {}),
      (this.innerSize = 0);
  }
  get(t) {
    const n = this.mapKeyFn(t),
      r = this.inner[n];
    if (r !== void 0) {
      for (const [i, s] of r) if (this.equalsFn(i, t)) return s;
    }
  }
  has(t) {
    return this.get(t) !== void 0;
  }
  set(t, n) {
    const r = this.mapKeyFn(t),
      i = this.inner[r];
    if (i === void 0) return (this.inner[r] = [[t, n]]), void this.innerSize++;
    for (let s = 0; s < i.length; s++)
      if (this.equalsFn(i[s][0], t)) return void (i[s] = [t, n]);
    i.push([t, n]), this.innerSize++;
  }
  delete(t) {
    const n = this.mapKeyFn(t),
      r = this.inner[n];
    if (r === void 0) return !1;
    for (let i = 0; i < r.length; i++)
      if (this.equalsFn(r[i][0], t))
        return (
          r.length === 1 ? delete this.inner[n] : r.splice(i, 1),
          this.innerSize--,
          !0
        );
    return !1;
  }
  forEach(t) {
    to(this.inner, (n, r) => {
      for (const [i, s] of r) t(i, s);
    });
  }
  isEmpty() {
    return f0(this.inner);
  }
  size() {
    return this.innerSize;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const EC = new ct(j.comparator);
function Ul() {
  return EC;
}
const I0 = new ct(j.comparator);
function Vo(...e) {
  let t = I0;
  for (const n of e) t = t.insert(n.key, n);
  return t;
}
function S0(e) {
  let t = I0;
  return e.forEach((n, r) => (t = t.insert(n, r.overlayedDocument))), t;
}
function lr() {
  return rs();
}
function A0() {
  return rs();
}
function rs() {
  return new wi(
    (e) => e.toString(),
    (e, t) => e.isEqual(t),
  );
}
const wC = new ct(j.comparator),
  TC = new qe(j.comparator);
function He(...e) {
  let t = TC;
  for (const n of e) t = t.add(n);
  return t;
}
const IC = new qe(J);
function SC() {
  return IC;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function C0(e, t) {
  if (e.useProto3Json) {
    if (isNaN(t)) return { doubleValue: "NaN" };
    if (t === 1 / 0) return { doubleValue: "Infinity" };
    if (t === -1 / 0) return { doubleValue: "-Infinity" };
  }
  return { doubleValue: Vl(t) ? "-0" : t };
}
function R0(e) {
  return { integerValue: "" + e };
}
function AC(e, t) {
  return ZA(t) ? R0(t) : C0(e, t);
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ka {
  constructor() {
    this._ = void 0;
  }
}
function CC(e, t, n) {
  return e instanceof jl
    ? (function (i, s) {
        const o = {
          fields: {
            __type__: { stringValue: "server_timestamp" },
            __local_write_time__: {
              timestampValue: { seconds: i.seconds, nanos: i.nanoseconds },
            },
          },
        };
        return (
          s && Cf(s) && (s = d0(s)),
          s && (o.fields.__previous_value__ = s),
          { mapValue: o }
        );
      })(n, t)
    : e instanceof Us
      ? k0(e, t)
      : e instanceof js
        ? x0(e, t)
        : (function (i, s) {
            const o = P0(i, s),
              l = Bp(o) + Bp(i.Ie);
            return Wc(o) && Wc(i.Ie) ? R0(l) : C0(i.serializer, l);
          })(e, t);
}
function RC(e, t, n) {
  return e instanceof Us ? k0(e, t) : e instanceof js ? x0(e, t) : n;
}
function P0(e, t) {
  return e instanceof Bl
    ? (function (r) {
        return (
          Wc(r) ||
          (function (s) {
            return !!s && "doubleValue" in s;
          })(r)
        );
      })(t)
      ? t
      : { integerValue: 0 }
    : null;
}
class jl extends ka {}
class Us extends ka {
  constructor(t) {
    super(), (this.elements = t);
  }
}
function k0(e, t) {
  const n = N0(t);
  for (const r of e.elements) n.some((i) => Yt(i, r)) || n.push(r);
  return { arrayValue: { values: n } };
}
class js extends ka {
  constructor(t) {
    super(), (this.elements = t);
  }
}
function x0(e, t) {
  let n = N0(t);
  for (const r of e.elements) n = n.filter((i) => !Yt(i, r));
  return { arrayValue: { values: n } };
}
class Bl extends ka {
  constructor(t, n) {
    super(), (this.serializer = t), (this.Ie = n);
  }
}
function Bp(e) {
  return Oe(e.integerValue || e.doubleValue);
}
function N0(e) {
  return Rf(e) && e.arrayValue.values ? e.arrayValue.values.slice() : [];
}
function PC(e, t) {
  return (
    e.field.isEqual(t.field) &&
    (function (r, i) {
      return (r instanceof Us && i instanceof Us) ||
        (r instanceof js && i instanceof js)
        ? ui(r.elements, i.elements, Yt)
        : r instanceof Bl && i instanceof Bl
          ? Yt(r.Ie, i.Ie)
          : r instanceof jl && i instanceof jl;
    })(e.transform, t.transform)
  );
}
class kC {
  constructor(t, n) {
    (this.version = t), (this.transformResults = n);
  }
}
class sn {
  constructor(t, n) {
    (this.updateTime = t), (this.exists = n);
  }
  static none() {
    return new sn();
  }
  static exists(t) {
    return new sn(void 0, t);
  }
  static updateTime(t) {
    return new sn(t);
  }
  get isNone() {
    return this.updateTime === void 0 && this.exists === void 0;
  }
  isEqual(t) {
    return (
      this.exists === t.exists &&
      (this.updateTime
        ? !!t.updateTime && this.updateTime.isEqual(t.updateTime)
        : !t.updateTime)
    );
  }
}
function Yo(e, t) {
  return e.updateTime !== void 0
    ? t.isFoundDocument() && t.version.isEqual(e.updateTime)
    : e.exists === void 0 || e.exists === t.isFoundDocument();
}
class xa {}
function D0(e, t) {
  if (!e.hasLocalMutations || (t && t.fields.length === 0)) return null;
  if (t === null)
    return e.isNoDocument()
      ? new V0(e.key, sn.none())
      : new no(e.key, e.data, sn.none());
  {
    const n = e.data,
      r = Lt.empty();
    let i = new qe(Le.comparator);
    for (let s of t.fields)
      if (!i.has(s)) {
        let o = n.field(s);
        o === null && s.length > 1 && ((s = s.popLast()), (o = n.field(s))),
          o === null ? r.delete(s) : r.set(s, o),
          (i = i.add(s));
      }
    return new kr(e.key, r, new Mt(i.toArray()), sn.none());
  }
}
function xC(e, t, n) {
  e instanceof no
    ? (function (i, s, o) {
        const l = i.value.clone(),
          a = bp(i.fieldTransforms, s, o.transformResults);
        l.setAll(a),
          s.convertToFoundDocument(o.version, l).setHasCommittedMutations();
      })(e, t, n)
    : e instanceof kr
      ? (function (i, s, o) {
          if (!Yo(i.precondition, s))
            return void s.convertToUnknownDocument(o.version);
          const l = bp(i.fieldTransforms, s, o.transformResults),
            a = s.data;
          a.setAll(O0(i)),
            a.setAll(l),
            s.convertToFoundDocument(o.version, a).setHasCommittedMutations();
        })(e, t, n)
      : (function (i, s, o) {
          s.convertToNoDocument(o.version).setHasCommittedMutations();
        })(0, t, n);
}
function is(e, t, n, r) {
  return e instanceof no
    ? (function (s, o, l, a) {
        if (!Yo(s.precondition, o)) return l;
        const u = s.value.clone(),
          c = Hp(s.fieldTransforms, a, o);
        return (
          u.setAll(c),
          o.convertToFoundDocument(o.version, u).setHasLocalMutations(),
          null
        );
      })(e, t, n, r)
    : e instanceof kr
      ? (function (s, o, l, a) {
          if (!Yo(s.precondition, o)) return l;
          const u = Hp(s.fieldTransforms, a, o),
            c = o.data;
          return (
            c.setAll(O0(s)),
            c.setAll(u),
            o.convertToFoundDocument(o.version, c).setHasLocalMutations(),
            l === null
              ? null
              : l
                  .unionWith(s.fieldMask.fields)
                  .unionWith(s.fieldTransforms.map((h) => h.field))
          );
        })(e, t, n, r)
      : (function (s, o, l) {
          return Yo(s.precondition, o)
            ? (o.convertToNoDocument(o.version).setHasLocalMutations(), null)
            : l;
        })(e, t, n);
}
function NC(e, t) {
  let n = null;
  for (const r of e.fieldTransforms) {
    const i = t.data.field(r.field),
      s = P0(r.transform, i || null);
    s != null && (n === null && (n = Lt.empty()), n.set(r.field, s));
  }
  return n || null;
}
function zp(e, t) {
  return (
    e.type === t.type &&
    !!e.key.isEqual(t.key) &&
    !!e.precondition.isEqual(t.precondition) &&
    !!(function (r, i) {
      return (
        (r === void 0 && i === void 0) ||
        (!(!r || !i) && ui(r, i, (s, o) => PC(s, o)))
      );
    })(e.fieldTransforms, t.fieldTransforms) &&
    (e.type === 0
      ? e.value.isEqual(t.value)
      : e.type !== 1 ||
        (e.data.isEqual(t.data) && e.fieldMask.isEqual(t.fieldMask)))
  );
}
class no extends xa {
  constructor(t, n, r, i = []) {
    super(),
      (this.key = t),
      (this.value = n),
      (this.precondition = r),
      (this.fieldTransforms = i),
      (this.type = 0);
  }
  getFieldMask() {
    return null;
  }
}
class kr extends xa {
  constructor(t, n, r, i, s = []) {
    super(),
      (this.key = t),
      (this.data = n),
      (this.fieldMask = r),
      (this.precondition = i),
      (this.fieldTransforms = s),
      (this.type = 1);
  }
  getFieldMask() {
    return this.fieldMask;
  }
}
function O0(e) {
  const t = new Map();
  return (
    e.fieldMask.fields.forEach((n) => {
      if (!n.isEmpty()) {
        const r = e.data.field(n);
        t.set(n, r);
      }
    }),
    t
  );
}
function bp(e, t, n) {
  const r = new Map();
  Pe(e.length === n.length);
  for (let i = 0; i < n.length; i++) {
    const s = e[i],
      o = s.transform,
      l = t.data.field(s.field);
    r.set(s.field, RC(o, l, n[i]));
  }
  return r;
}
function Hp(e, t, n) {
  const r = new Map();
  for (const i of e) {
    const s = i.transform,
      o = n.data.field(i.field);
    r.set(i.field, CC(s, o, t));
  }
  return r;
}
class V0 extends xa {
  constructor(t, n) {
    super(),
      (this.key = t),
      (this.precondition = n),
      (this.type = 2),
      (this.fieldTransforms = []);
  }
  getFieldMask() {
    return null;
  }
}
class DC extends xa {
  constructor(t, n) {
    super(),
      (this.key = t),
      (this.precondition = n),
      (this.type = 3),
      (this.fieldTransforms = []);
  }
  getFieldMask() {
    return null;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class OC {
  constructor(t, n, r, i) {
    (this.batchId = t),
      (this.localWriteTime = n),
      (this.baseMutations = r),
      (this.mutations = i);
  }
  applyToRemoteDocument(t, n) {
    const r = n.mutationResults;
    for (let i = 0; i < this.mutations.length; i++) {
      const s = this.mutations[i];
      s.key.isEqual(t.key) && xC(s, t, r[i]);
    }
  }
  applyToLocalView(t, n) {
    for (const r of this.baseMutations)
      r.key.isEqual(t.key) && (n = is(r, t, n, this.localWriteTime));
    for (const r of this.mutations)
      r.key.isEqual(t.key) && (n = is(r, t, n, this.localWriteTime));
    return n;
  }
  applyToLocalDocumentSet(t, n) {
    const r = A0();
    return (
      this.mutations.forEach((i) => {
        const s = t.get(i.key),
          o = s.overlayedDocument;
        let l = this.applyToLocalView(o, s.mutatedFields);
        l = n.has(i.key) ? null : l;
        const a = D0(o, l);
        a !== null && r.set(i.key, a),
          o.isValidDocument() || o.convertToNoDocument(se.min());
      }),
      r
    );
  }
  keys() {
    return this.mutations.reduce((t, n) => t.add(n.key), He());
  }
  isEqual(t) {
    return (
      this.batchId === t.batchId &&
      ui(this.mutations, t.mutations, (n, r) => zp(n, r)) &&
      ui(this.baseMutations, t.baseMutations, (n, r) => zp(n, r))
    );
  }
}
class Nf {
  constructor(t, n, r, i) {
    (this.batch = t),
      (this.commitVersion = n),
      (this.mutationResults = r),
      (this.docVersions = i);
  }
  static from(t, n, r) {
    Pe(t.mutations.length === r.length);
    let i = (function () {
      return wC;
    })();
    const s = t.mutations;
    for (let o = 0; o < s.length; o++) i = i.insert(s[o].key, r[o].version);
    return new Nf(t, n, r, i);
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class VC {
  constructor(t, n) {
    (this.largestBatchId = t), (this.mutation = n);
  }
  getKey() {
    return this.mutation.key;
  }
  isEqual(t) {
    return t !== null && this.mutation === t.mutation;
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var pe, b;
function LC(e) {
  switch (e) {
    default:
      return z();
    case S.CANCELLED:
    case S.UNKNOWN:
    case S.DEADLINE_EXCEEDED:
    case S.RESOURCE_EXHAUSTED:
    case S.INTERNAL:
    case S.UNAVAILABLE:
    case S.UNAUTHENTICATED:
      return !1;
    case S.INVALID_ARGUMENT:
    case S.NOT_FOUND:
    case S.ALREADY_EXISTS:
    case S.PERMISSION_DENIED:
    case S.FAILED_PRECONDITION:
    case S.ABORTED:
    case S.OUT_OF_RANGE:
    case S.UNIMPLEMENTED:
    case S.DATA_LOSS:
      return !0;
  }
}
function MC(e) {
  if (e === void 0) return zn("GRPC error has no .code"), S.UNKNOWN;
  switch (e) {
    case pe.OK:
      return S.OK;
    case pe.CANCELLED:
      return S.CANCELLED;
    case pe.UNKNOWN:
      return S.UNKNOWN;
    case pe.DEADLINE_EXCEEDED:
      return S.DEADLINE_EXCEEDED;
    case pe.RESOURCE_EXHAUSTED:
      return S.RESOURCE_EXHAUSTED;
    case pe.INTERNAL:
      return S.INTERNAL;
    case pe.UNAVAILABLE:
      return S.UNAVAILABLE;
    case pe.UNAUTHENTICATED:
      return S.UNAUTHENTICATED;
    case pe.INVALID_ARGUMENT:
      return S.INVALID_ARGUMENT;
    case pe.NOT_FOUND:
      return S.NOT_FOUND;
    case pe.ALREADY_EXISTS:
      return S.ALREADY_EXISTS;
    case pe.PERMISSION_DENIED:
      return S.PERMISSION_DENIED;
    case pe.FAILED_PRECONDITION:
      return S.FAILED_PRECONDITION;
    case pe.ABORTED:
      return S.ABORTED;
    case pe.OUT_OF_RANGE:
      return S.OUT_OF_RANGE;
    case pe.UNIMPLEMENTED:
      return S.UNIMPLEMENTED;
    case pe.DATA_LOSS:
      return S.DATA_LOSS;
    default:
      return z();
  }
}
((b = pe || (pe = {}))[(b.OK = 0)] = "OK"),
  (b[(b.CANCELLED = 1)] = "CANCELLED"),
  (b[(b.UNKNOWN = 2)] = "UNKNOWN"),
  (b[(b.INVALID_ARGUMENT = 3)] = "INVALID_ARGUMENT"),
  (b[(b.DEADLINE_EXCEEDED = 4)] = "DEADLINE_EXCEEDED"),
  (b[(b.NOT_FOUND = 5)] = "NOT_FOUND"),
  (b[(b.ALREADY_EXISTS = 6)] = "ALREADY_EXISTS"),
  (b[(b.PERMISSION_DENIED = 7)] = "PERMISSION_DENIED"),
  (b[(b.UNAUTHENTICATED = 16)] = "UNAUTHENTICATED"),
  (b[(b.RESOURCE_EXHAUSTED = 8)] = "RESOURCE_EXHAUSTED"),
  (b[(b.FAILED_PRECONDITION = 9)] = "FAILED_PRECONDITION"),
  (b[(b.ABORTED = 10)] = "ABORTED"),
  (b[(b.OUT_OF_RANGE = 11)] = "OUT_OF_RANGE"),
  (b[(b.UNIMPLEMENTED = 12)] = "UNIMPLEMENTED"),
  (b[(b.INTERNAL = 13)] = "INTERNAL"),
  (b[(b.UNAVAILABLE = 14)] = "UNAVAILABLE"),
  (b[(b.DATA_LOSS = 15)] = "DATA_LOSS");
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ new MA([4294967295, 4294967295], 0);
class $C {
  constructor(t, n) {
    (this.databaseId = t), (this.useProto3Json = n);
  }
}
function Qc(e, t) {
  return e.useProto3Json
    ? `${new Date(1e3 * t.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + t.nanoseconds).slice(-9)}Z`
    : { seconds: "" + t.seconds, nanos: t.nanoseconds };
}
function FC(e, t) {
  return e.useProto3Json ? t.toBase64() : t.toUint8Array();
}
function UC(e, t) {
  return Qc(e, t.toTimestamp());
}
function Zr(e) {
  return (
    Pe(!!e),
    se.fromTimestamp(
      (function (n) {
        const r = Ir(n);
        return new Ce(r.seconds, r.nanos);
      })(e),
    )
  );
}
function L0(e, t) {
  return Gc(e, t).canonicalString();
}
function Gc(e, t) {
  const n = (function (i) {
    return new ce(["projects", i.projectId, "databases", i.database]);
  })(e).child("documents");
  return t === void 0 ? n : n.child(t);
}
function jC(e) {
  const t = ce.fromString(e);
  return Pe(QC(t)), t;
}
function Xc(e, t) {
  return L0(e.databaseId, t.path);
}
function BC(e) {
  const t = jC(e);
  return t.length === 4 ? ce.emptyPath() : bC(t);
}
function zC(e) {
  return new ce([
    "projects",
    e.databaseId.projectId,
    "databases",
    e.databaseId.database,
  ]).canonicalString();
}
function bC(e) {
  return Pe(e.length > 4 && e.get(4) === "documents"), e.popFirst(5);
}
function Wp(e, t, n) {
  return { name: Xc(e, t), fields: n.value.mapValue.fields };
}
function HC(e, t) {
  let n;
  if (t instanceof no) n = { update: Wp(e, t.key, t.value) };
  else if (t instanceof V0) n = { delete: Xc(e, t.key) };
  else if (t instanceof kr)
    n = { update: Wp(e, t.key, t.data), updateMask: qC(t.fieldMask) };
  else {
    if (!(t instanceof DC)) return z();
    n = { verify: Xc(e, t.key) };
  }
  return (
    t.fieldTransforms.length > 0 &&
      (n.updateTransforms = t.fieldTransforms.map((r) =>
        (function (s, o) {
          const l = o.transform;
          if (l instanceof jl)
            return {
              fieldPath: o.field.canonicalString(),
              setToServerValue: "REQUEST_TIME",
            };
          if (l instanceof Us)
            return {
              fieldPath: o.field.canonicalString(),
              appendMissingElements: { values: l.elements },
            };
          if (l instanceof js)
            return {
              fieldPath: o.field.canonicalString(),
              removeAllFromArray: { values: l.elements },
            };
          if (l instanceof Bl)
            return { fieldPath: o.field.canonicalString(), increment: l.Ie };
          throw z();
        })(0, r),
      )),
    t.precondition.isNone ||
      (n.currentDocument = (function (i, s) {
        return s.updateTime !== void 0
          ? { updateTime: UC(i, s.updateTime) }
          : s.exists !== void 0
            ? { exists: s.exists }
            : z();
      })(e, t.precondition)),
    n
  );
}
function WC(e, t) {
  return e && e.length > 0
    ? (Pe(t !== void 0),
      e.map((n) =>
        (function (i, s) {
          let o = i.updateTime ? Zr(i.updateTime) : Zr(s);
          return (
            o.isEqual(se.min()) && (o = Zr(s)),
            new kC(o, i.transformResults || [])
          );
        })(n, t),
      ))
    : [];
}
function KC(e) {
  let t = BC(e.parent);
  const n = e.structuredQuery,
    r = n.from ? n.from.length : 0;
  let i = null;
  if (r > 0) {
    Pe(r === 1);
    const c = n.from[0];
    c.allDescendants ? (i = c.collectionId) : (t = t.child(c.collectionId));
  }
  let s = [];
  n.where &&
    (s = (function (h) {
      const d = M0(h);
      return d instanceof Hn && y0(d) ? d.getFilters() : [d];
    })(n.where));
  let o = [];
  n.orderBy &&
    (o = (function (h) {
      return h.map((d) =>
        (function (y) {
          return new Fl(
            Dr(y.field),
            (function (w) {
              switch (w) {
                case "ASCENDING":
                  return "asc";
                case "DESCENDING":
                  return "desc";
                default:
                  return;
              }
            })(y.direction),
          );
        })(d),
      );
    })(n.orderBy));
  let l = null;
  n.limit &&
    (l = (function (h) {
      let d;
      return (d = typeof h == "object" ? h.value : h), Af(d) ? null : d;
    })(n.limit));
  let a = null;
  n.startAt &&
    (a = (function (h) {
      const d = !!h.before,
        g = h.values || [];
      return new $l(g, d);
    })(n.startAt));
  let u = null;
  return (
    n.endAt &&
      (u = (function (h) {
        const d = !h.before,
          g = h.values || [];
        return new $l(g, d);
      })(n.endAt)),
    pC(t, i, o, s, l, "F", a, u)
  );
}
function M0(e) {
  return e.unaryFilter !== void 0
    ? (function (n) {
        switch (n.unaryFilter.op) {
          case "IS_NAN":
            const r = Dr(n.unaryFilter.field);
            return Se.create(r, "==", { doubleValue: NaN });
          case "IS_NULL":
            const i = Dr(n.unaryFilter.field);
            return Se.create(i, "==", { nullValue: "NULL_VALUE" });
          case "IS_NOT_NAN":
            const s = Dr(n.unaryFilter.field);
            return Se.create(s, "!=", { doubleValue: NaN });
          case "IS_NOT_NULL":
            const o = Dr(n.unaryFilter.field);
            return Se.create(o, "!=", { nullValue: "NULL_VALUE" });
          default:
            return z();
        }
      })(e)
    : e.fieldFilter !== void 0
      ? (function (n) {
          return Se.create(
            Dr(n.fieldFilter.field),
            (function (i) {
              switch (i) {
                case "EQUAL":
                  return "==";
                case "NOT_EQUAL":
                  return "!=";
                case "GREATER_THAN":
                  return ">";
                case "GREATER_THAN_OR_EQUAL":
                  return ">=";
                case "LESS_THAN":
                  return "<";
                case "LESS_THAN_OR_EQUAL":
                  return "<=";
                case "ARRAY_CONTAINS":
                  return "array-contains";
                case "IN":
                  return "in";
                case "NOT_IN":
                  return "not-in";
                case "ARRAY_CONTAINS_ANY":
                  return "array-contains-any";
                default:
                  return z();
              }
            })(n.fieldFilter.op),
            n.fieldFilter.value,
          );
        })(e)
      : e.compositeFilter !== void 0
        ? (function (n) {
            return Hn.create(
              n.compositeFilter.filters.map((r) => M0(r)),
              (function (i) {
                switch (i) {
                  case "AND":
                    return "and";
                  case "OR":
                    return "or";
                  default:
                    return z();
                }
              })(n.compositeFilter.op),
            );
          })(e)
        : z();
}
function Dr(e) {
  return Le.fromServerFormat(e.fieldPath);
}
function qC(e) {
  const t = [];
  return (
    e.fields.forEach((n) => t.push(n.canonicalString())), { fieldPaths: t }
  );
}
function QC(e) {
  return e.length >= 4 && e.get(0) === "projects" && e.get(2) === "databases";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class GC {
  constructor(t) {
    this.ct = t;
  }
}
function XC(e) {
  const t = KC({ parent: e.parent, structuredQuery: e.structuredQuery });
  return e.limitType === "LAST" ? qc(t, t.limit, "L") : t;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class YC {
  constructor() {
    this._n = new JC();
  }
  addToCollectionParentIndex(t, n) {
    return this._n.add(n), T.resolve();
  }
  getCollectionParents(t, n) {
    return T.resolve(this._n.getEntries(n));
  }
  addFieldIndex(t, n) {
    return T.resolve();
  }
  deleteFieldIndex(t, n) {
    return T.resolve();
  }
  deleteAllFieldIndexes(t) {
    return T.resolve();
  }
  createTargetIndexes(t, n) {
    return T.resolve();
  }
  getDocumentsMatchingTarget(t, n) {
    return T.resolve(null);
  }
  getIndexType(t, n) {
    return T.resolve(0);
  }
  getFieldIndexes(t, n) {
    return T.resolve([]);
  }
  getNextCollectionGroupToUpdate(t) {
    return T.resolve(null);
  }
  getMinOffset(t, n) {
    return T.resolve(bn.min());
  }
  getMinOffsetFromCollectionGroup(t, n) {
    return T.resolve(bn.min());
  }
  updateCollectionGroup(t, n, r) {
    return T.resolve();
  }
  updateIndexEntries(t, n) {
    return T.resolve();
  }
}
class JC {
  constructor() {
    this.index = {};
  }
  add(t) {
    const n = t.lastSegment(),
      r = t.popLast(),
      i = this.index[n] || new qe(ce.comparator),
      s = !i.has(r);
    return (this.index[n] = i.add(r)), s;
  }
  has(t) {
    const n = t.lastSegment(),
      r = t.popLast(),
      i = this.index[n];
    return i && i.has(r);
  }
  getEntries(t) {
    return (this.index[t] || new qe(ce.comparator)).toArray();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class di {
  constructor(t) {
    this.On = t;
  }
  next() {
    return (this.On += 2), this.On;
  }
  static Nn() {
    return new di(0);
  }
  static Bn() {
    return new di(-1);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ZC {
  constructor() {
    (this.changes = new wi(
      (t) => t.toString(),
      (t, n) => t.isEqual(n),
    )),
      (this.changesApplied = !1);
  }
  addEntry(t) {
    this.assertNotApplied(), this.changes.set(t.key, t);
  }
  removeEntry(t, n) {
    this.assertNotApplied(),
      this.changes.set(t, Vt.newInvalidDocument(t).setReadTime(n));
  }
  getEntry(t, n) {
    this.assertNotApplied();
    const r = this.changes.get(n);
    return r !== void 0 ? T.resolve(r) : this.getFromCache(t, n);
  }
  getEntries(t, n) {
    return this.getAllFromCache(t, n);
  }
  apply(t) {
    return (
      this.assertNotApplied(), (this.changesApplied = !0), this.applyChanges(t)
    );
  }
  assertNotApplied() {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eR {
  constructor(t, n) {
    (this.overlayedDocument = t), (this.mutatedFields = n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tR {
  constructor(t, n, r, i) {
    (this.remoteDocumentCache = t),
      (this.mutationQueue = n),
      (this.documentOverlayCache = r),
      (this.indexManager = i);
  }
  getDocument(t, n) {
    let r = null;
    return this.documentOverlayCache
      .getOverlay(t, n)
      .next((i) => ((r = i), this.remoteDocumentCache.getEntry(t, n)))
      .next((i) => (r !== null && is(r.mutation, i, Mt.empty(), Ce.now()), i));
  }
  getDocuments(t, n) {
    return this.remoteDocumentCache
      .getEntries(t, n)
      .next((r) => this.getLocalViewOfDocuments(t, r, He()).next(() => r));
  }
  getLocalViewOfDocuments(t, n, r = He()) {
    const i = lr();
    return this.populateOverlays(t, i, n).next(() =>
      this.computeViews(t, n, i, r).next((s) => {
        let o = Vo();
        return (
          s.forEach((l, a) => {
            o = o.insert(l, a.overlayedDocument);
          }),
          o
        );
      }),
    );
  }
  getOverlayedDocuments(t, n) {
    const r = lr();
    return this.populateOverlays(t, r, n).next(() =>
      this.computeViews(t, n, r, He()),
    );
  }
  populateOverlays(t, n, r) {
    const i = [];
    return (
      r.forEach((s) => {
        n.has(s) || i.push(s);
      }),
      this.documentOverlayCache.getOverlays(t, i).next((s) => {
        s.forEach((o, l) => {
          n.set(o, l);
        });
      })
    );
  }
  computeViews(t, n, r, i) {
    let s = Ul();
    const o = rs(),
      l = (function () {
        return rs();
      })();
    return (
      n.forEach((a, u) => {
        const c = r.get(u.key);
        i.has(u.key) && (c === void 0 || c.mutation instanceof kr)
          ? (s = s.insert(u.key, u))
          : c !== void 0
            ? (o.set(u.key, c.mutation.getFieldMask()),
              is(c.mutation, u, c.mutation.getFieldMask(), Ce.now()))
            : o.set(u.key, Mt.empty());
      }),
      this.recalculateAndSaveOverlays(t, s).next(
        (a) => (
          a.forEach((u, c) => o.set(u, c)),
          n.forEach((u, c) => {
            var h;
            return l.set(
              u,
              new eR(c, (h = o.get(u)) !== null && h !== void 0 ? h : null),
            );
          }),
          l
        ),
      )
    );
  }
  recalculateAndSaveOverlays(t, n) {
    const r = rs();
    let i = new ct((o, l) => o - l),
      s = He();
    return this.mutationQueue
      .getAllMutationBatchesAffectingDocumentKeys(t, n)
      .next((o) => {
        for (const l of o)
          l.keys().forEach((a) => {
            const u = n.get(a);
            if (u === null) return;
            let c = r.get(a) || Mt.empty();
            (c = l.applyToLocalView(u, c)), r.set(a, c);
            const h = (i.get(l.batchId) || He()).add(a);
            i = i.insert(l.batchId, h);
          });
      })
      .next(() => {
        const o = [],
          l = i.getReverseIterator();
        for (; l.hasNext(); ) {
          const a = l.getNext(),
            u = a.key,
            c = a.value,
            h = A0();
          c.forEach((d) => {
            if (!s.has(d)) {
              const g = D0(n.get(d), r.get(d));
              g !== null && h.set(d, g), (s = s.add(d));
            }
          }),
            o.push(this.documentOverlayCache.saveOverlays(t, u, h));
        }
        return T.waitFor(o);
      })
      .next(() => r);
  }
  recalculateAndSaveOverlaysForDocumentKeys(t, n) {
    return this.remoteDocumentCache
      .getEntries(t, n)
      .next((r) => this.recalculateAndSaveOverlays(t, r));
  }
  getDocumentsMatchingQuery(t, n, r, i) {
    return (function (o) {
      return (
        j.isDocumentKey(o.path) &&
        o.collectionGroup === null &&
        o.filters.length === 0
      );
    })(n)
      ? this.getDocumentsMatchingDocumentQuery(t, n.path)
      : gC(n)
        ? this.getDocumentsMatchingCollectionGroupQuery(t, n, r, i)
        : this.getDocumentsMatchingCollectionQuery(t, n, r, i);
  }
  getNextDocuments(t, n, r, i) {
    return this.remoteDocumentCache
      .getAllFromCollectionGroup(t, n, r, i)
      .next((s) => {
        const o =
          i - s.size > 0
            ? this.documentOverlayCache.getOverlaysForCollectionGroup(
                t,
                n,
                r.largestBatchId,
                i - s.size,
              )
            : T.resolve(lr());
        let l = -1,
          a = s;
        return o.next((u) =>
          T.forEach(
            u,
            (c, h) => (
              l < h.largestBatchId && (l = h.largestBatchId),
              s.get(c)
                ? T.resolve()
                : this.remoteDocumentCache.getEntry(t, c).next((d) => {
                    a = a.insert(c, d);
                  })
            ),
          )
            .next(() => this.populateOverlays(t, u, s))
            .next(() => this.computeViews(t, a, u, He()))
            .next((c) => ({ batchId: l, changes: S0(c) })),
        );
      });
  }
  getDocumentsMatchingDocumentQuery(t, n) {
    return this.getDocument(t, new j(n)).next((r) => {
      let i = Vo();
      return r.isFoundDocument() && (i = i.insert(r.key, r)), i;
    });
  }
  getDocumentsMatchingCollectionGroupQuery(t, n, r, i) {
    const s = n.collectionGroup;
    let o = Vo();
    return this.indexManager.getCollectionParents(t, s).next((l) =>
      T.forEach(l, (a) => {
        const u = (function (h, d) {
          return new Pa(
            d,
            null,
            h.explicitOrderBy.slice(),
            h.filters.slice(),
            h.limit,
            h.limitType,
            h.startAt,
            h.endAt,
          );
        })(n, a.child(s));
        return this.getDocumentsMatchingCollectionQuery(t, u, r, i).next(
          (c) => {
            c.forEach((h, d) => {
              o = o.insert(h, d);
            });
          },
        );
      }).next(() => o),
    );
  }
  getDocumentsMatchingCollectionQuery(t, n, r, i) {
    let s;
    return this.documentOverlayCache
      .getOverlaysForCollection(t, n.path, r.largestBatchId)
      .next(
        (o) => (
          (s = o),
          this.remoteDocumentCache.getDocumentsMatchingQuery(t, n, r, s, i)
        ),
      )
      .next((o) => {
        s.forEach((a, u) => {
          const c = u.getKey();
          o.get(c) === null && (o = o.insert(c, Vt.newInvalidDocument(c)));
        });
        let l = Vo();
        return (
          o.forEach((a, u) => {
            const c = s.get(a);
            c !== void 0 && is(c.mutation, u, Mt.empty(), Ce.now()),
              xf(n, u) && (l = l.insert(a, u));
          }),
          l
        );
      });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nR {
  constructor(t) {
    (this.serializer = t), (this.cr = new Map()), (this.lr = new Map());
  }
  getBundleMetadata(t, n) {
    return T.resolve(this.cr.get(n));
  }
  saveBundleMetadata(t, n) {
    return (
      this.cr.set(
        n.id,
        (function (i) {
          return { id: i.id, version: i.version, createTime: Zr(i.createTime) };
        })(n),
      ),
      T.resolve()
    );
  }
  getNamedQuery(t, n) {
    return T.resolve(this.lr.get(n));
  }
  saveNamedQuery(t, n) {
    return (
      this.lr.set(
        n.name,
        (function (i) {
          return {
            name: i.name,
            query: XC(i.bundledQuery),
            readTime: Zr(i.readTime),
          };
        })(n),
      ),
      T.resolve()
    );
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rR {
  constructor() {
    (this.overlays = new ct(j.comparator)), (this.hr = new Map());
  }
  getOverlay(t, n) {
    return T.resolve(this.overlays.get(n));
  }
  getOverlays(t, n) {
    const r = lr();
    return T.forEach(n, (i) =>
      this.getOverlay(t, i).next((s) => {
        s !== null && r.set(i, s);
      }),
    ).next(() => r);
  }
  saveOverlays(t, n, r) {
    return (
      r.forEach((i, s) => {
        this.ht(t, n, s);
      }),
      T.resolve()
    );
  }
  removeOverlaysForBatchId(t, n, r) {
    const i = this.hr.get(r);
    return (
      i !== void 0 &&
        (i.forEach((s) => (this.overlays = this.overlays.remove(s))),
        this.hr.delete(r)),
      T.resolve()
    );
  }
  getOverlaysForCollection(t, n, r) {
    const i = lr(),
      s = n.length + 1,
      o = new j(n.child("")),
      l = this.overlays.getIteratorFrom(o);
    for (; l.hasNext(); ) {
      const a = l.getNext().value,
        u = a.getKey();
      if (!n.isPrefixOf(u.path)) break;
      u.path.length === s && a.largestBatchId > r && i.set(a.getKey(), a);
    }
    return T.resolve(i);
  }
  getOverlaysForCollectionGroup(t, n, r, i) {
    let s = new ct((u, c) => u - c);
    const o = this.overlays.getIterator();
    for (; o.hasNext(); ) {
      const u = o.getNext().value;
      if (u.getKey().getCollectionGroup() === n && u.largestBatchId > r) {
        let c = s.get(u.largestBatchId);
        c === null && ((c = lr()), (s = s.insert(u.largestBatchId, c))),
          c.set(u.getKey(), u);
      }
    }
    const l = lr(),
      a = s.getIterator();
    for (
      ;
      a.hasNext() &&
      (a.getNext().value.forEach((u, c) => l.set(u, c)), !(l.size() >= i));

    );
    return T.resolve(l);
  }
  ht(t, n, r) {
    const i = this.overlays.get(r.key);
    if (i !== null) {
      const o = this.hr.get(i.largestBatchId).delete(r.key);
      this.hr.set(i.largestBatchId, o);
    }
    this.overlays = this.overlays.insert(r.key, new VC(n, r));
    let s = this.hr.get(n);
    s === void 0 && ((s = He()), this.hr.set(n, s)),
      this.hr.set(n, s.add(r.key));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Df {
  constructor() {
    (this.Pr = new qe(Te.Ir)), (this.Tr = new qe(Te.Er));
  }
  isEmpty() {
    return this.Pr.isEmpty();
  }
  addReference(t, n) {
    const r = new Te(t, n);
    (this.Pr = this.Pr.add(r)), (this.Tr = this.Tr.add(r));
  }
  dr(t, n) {
    t.forEach((r) => this.addReference(r, n));
  }
  removeReference(t, n) {
    this.Ar(new Te(t, n));
  }
  Rr(t, n) {
    t.forEach((r) => this.removeReference(r, n));
  }
  Vr(t) {
    const n = new j(new ce([])),
      r = new Te(n, t),
      i = new Te(n, t + 1),
      s = [];
    return (
      this.Tr.forEachInRange([r, i], (o) => {
        this.Ar(o), s.push(o.key);
      }),
      s
    );
  }
  mr() {
    this.Pr.forEach((t) => this.Ar(t));
  }
  Ar(t) {
    (this.Pr = this.Pr.delete(t)), (this.Tr = this.Tr.delete(t));
  }
  gr(t) {
    const n = new j(new ce([])),
      r = new Te(n, t),
      i = new Te(n, t + 1);
    let s = He();
    return (
      this.Tr.forEachInRange([r, i], (o) => {
        s = s.add(o.key);
      }),
      s
    );
  }
  containsKey(t) {
    const n = new Te(t, 0),
      r = this.Pr.firstAfterOrEqual(n);
    return r !== null && t.isEqual(r.key);
  }
}
class Te {
  constructor(t, n) {
    (this.key = t), (this.pr = n);
  }
  static Ir(t, n) {
    return j.comparator(t.key, n.key) || J(t.pr, n.pr);
  }
  static Er(t, n) {
    return J(t.pr, n.pr) || j.comparator(t.key, n.key);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iR {
  constructor(t, n) {
    (this.indexManager = t),
      (this.referenceDelegate = n),
      (this.mutationQueue = []),
      (this.yr = 1),
      (this.wr = new qe(Te.Ir));
  }
  checkEmpty(t) {
    return T.resolve(this.mutationQueue.length === 0);
  }
  addMutationBatch(t, n, r, i) {
    const s = this.yr;
    this.yr++,
      this.mutationQueue.length > 0 &&
        this.mutationQueue[this.mutationQueue.length - 1];
    const o = new OC(s, n, r, i);
    this.mutationQueue.push(o);
    for (const l of i)
      (this.wr = this.wr.add(new Te(l.key, s))),
        this.indexManager.addToCollectionParentIndex(t, l.key.path.popLast());
    return T.resolve(o);
  }
  lookupMutationBatch(t, n) {
    return T.resolve(this.Sr(n));
  }
  getNextMutationBatchAfterBatchId(t, n) {
    const r = n + 1,
      i = this.br(r),
      s = i < 0 ? 0 : i;
    return T.resolve(
      this.mutationQueue.length > s ? this.mutationQueue[s] : null,
    );
  }
  getHighestUnacknowledgedBatchId() {
    return T.resolve(this.mutationQueue.length === 0 ? -1 : this.yr - 1);
  }
  getAllMutationBatches(t) {
    return T.resolve(this.mutationQueue.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(t, n) {
    const r = new Te(n, 0),
      i = new Te(n, Number.POSITIVE_INFINITY),
      s = [];
    return (
      this.wr.forEachInRange([r, i], (o) => {
        const l = this.Sr(o.pr);
        s.push(l);
      }),
      T.resolve(s)
    );
  }
  getAllMutationBatchesAffectingDocumentKeys(t, n) {
    let r = new qe(J);
    return (
      n.forEach((i) => {
        const s = new Te(i, 0),
          o = new Te(i, Number.POSITIVE_INFINITY);
        this.wr.forEachInRange([s, o], (l) => {
          r = r.add(l.pr);
        });
      }),
      T.resolve(this.Dr(r))
    );
  }
  getAllMutationBatchesAffectingQuery(t, n) {
    const r = n.path,
      i = r.length + 1;
    let s = r;
    j.isDocumentKey(s) || (s = s.child(""));
    const o = new Te(new j(s), 0);
    let l = new qe(J);
    return (
      this.wr.forEachWhile((a) => {
        const u = a.key.path;
        return !!r.isPrefixOf(u) && (u.length === i && (l = l.add(a.pr)), !0);
      }, o),
      T.resolve(this.Dr(l))
    );
  }
  Dr(t) {
    const n = [];
    return (
      t.forEach((r) => {
        const i = this.Sr(r);
        i !== null && n.push(i);
      }),
      n
    );
  }
  removeMutationBatch(t, n) {
    Pe(this.Cr(n.batchId, "removed") === 0), this.mutationQueue.shift();
    let r = this.wr;
    return T.forEach(n.mutations, (i) => {
      const s = new Te(i.key, n.batchId);
      return (
        (r = r.delete(s)),
        this.referenceDelegate.markPotentiallyOrphaned(t, i.key)
      );
    }).next(() => {
      this.wr = r;
    });
  }
  Mn(t) {}
  containsKey(t, n) {
    const r = new Te(n, 0),
      i = this.wr.firstAfterOrEqual(r);
    return T.resolve(n.isEqual(i && i.key));
  }
  performConsistencyCheck(t) {
    return this.mutationQueue.length, T.resolve();
  }
  Cr(t, n) {
    return this.br(t);
  }
  br(t) {
    return this.mutationQueue.length === 0
      ? 0
      : t - this.mutationQueue[0].batchId;
  }
  Sr(t) {
    const n = this.br(t);
    return n < 0 || n >= this.mutationQueue.length
      ? null
      : this.mutationQueue[n];
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sR {
  constructor(t) {
    (this.vr = t),
      (this.docs = (function () {
        return new ct(j.comparator);
      })()),
      (this.size = 0);
  }
  setIndexManager(t) {
    this.indexManager = t;
  }
  addEntry(t, n) {
    const r = n.key,
      i = this.docs.get(r),
      s = i ? i.size : 0,
      o = this.vr(n);
    return (
      (this.docs = this.docs.insert(r, { document: n.mutableCopy(), size: o })),
      (this.size += o - s),
      this.indexManager.addToCollectionParentIndex(t, r.path.popLast())
    );
  }
  removeEntry(t) {
    const n = this.docs.get(t);
    n && ((this.docs = this.docs.remove(t)), (this.size -= n.size));
  }
  getEntry(t, n) {
    const r = this.docs.get(n);
    return T.resolve(r ? r.document.mutableCopy() : Vt.newInvalidDocument(n));
  }
  getEntries(t, n) {
    let r = Ul();
    return (
      n.forEach((i) => {
        const s = this.docs.get(i);
        r = r.insert(
          i,
          s ? s.document.mutableCopy() : Vt.newInvalidDocument(i),
        );
      }),
      T.resolve(r)
    );
  }
  getDocumentsMatchingQuery(t, n, r, i) {
    let s = Ul();
    const o = n.path,
      l = new j(o.child("")),
      a = this.docs.getIteratorFrom(l);
    for (; a.hasNext(); ) {
      const {
        key: u,
        value: { document: c },
      } = a.getNext();
      if (!o.isPrefixOf(u.path)) break;
      u.path.length > o.length + 1 ||
        QA(qA(c), r) <= 0 ||
        ((i.has(c.key) || xf(n, c)) && (s = s.insert(c.key, c.mutableCopy())));
    }
    return T.resolve(s);
  }
  getAllFromCollectionGroup(t, n, r, i) {
    z();
  }
  Fr(t, n) {
    return T.forEach(this.docs, (r) => n(r));
  }
  newChangeBuffer(t) {
    return new oR(this);
  }
  getSize(t) {
    return T.resolve(this.size);
  }
}
class oR extends ZC {
  constructor(t) {
    super(), (this.ar = t);
  }
  applyChanges(t) {
    const n = [];
    return (
      this.changes.forEach((r, i) => {
        i.isValidDocument()
          ? n.push(this.ar.addEntry(t, i))
          : this.ar.removeEntry(r);
      }),
      T.waitFor(n)
    );
  }
  getFromCache(t, n) {
    return this.ar.getEntry(t, n);
  }
  getAllFromCache(t, n) {
    return this.ar.getEntries(t, n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class lR {
  constructor(t) {
    (this.persistence = t),
      (this.Mr = new wi((n) => Pf(n), kf)),
      (this.lastRemoteSnapshotVersion = se.min()),
      (this.highestTargetId = 0),
      (this.Or = 0),
      (this.Nr = new Df()),
      (this.targetCount = 0),
      (this.Br = di.Nn());
  }
  forEachTarget(t, n) {
    return this.Mr.forEach((r, i) => n(i)), T.resolve();
  }
  getLastRemoteSnapshotVersion(t) {
    return T.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(t) {
    return T.resolve(this.Or);
  }
  allocateTargetId(t) {
    return (
      (this.highestTargetId = this.Br.next()), T.resolve(this.highestTargetId)
    );
  }
  setTargetsMetadata(t, n, r) {
    return (
      r && (this.lastRemoteSnapshotVersion = r),
      n > this.Or && (this.Or = n),
      T.resolve()
    );
  }
  qn(t) {
    this.Mr.set(t.target, t);
    const n = t.targetId;
    n > this.highestTargetId &&
      ((this.Br = new di(n)), (this.highestTargetId = n)),
      t.sequenceNumber > this.Or && (this.Or = t.sequenceNumber);
  }
  addTargetData(t, n) {
    return this.qn(n), (this.targetCount += 1), T.resolve();
  }
  updateTargetData(t, n) {
    return this.qn(n), T.resolve();
  }
  removeTargetData(t, n) {
    return (
      this.Mr.delete(n.target),
      this.Nr.Vr(n.targetId),
      (this.targetCount -= 1),
      T.resolve()
    );
  }
  removeTargets(t, n, r) {
    let i = 0;
    const s = [];
    return (
      this.Mr.forEach((o, l) => {
        l.sequenceNumber <= n &&
          r.get(l.targetId) === null &&
          (this.Mr.delete(o),
          s.push(this.removeMatchingKeysForTargetId(t, l.targetId)),
          i++);
      }),
      T.waitFor(s).next(() => i)
    );
  }
  getTargetCount(t) {
    return T.resolve(this.targetCount);
  }
  getTargetData(t, n) {
    const r = this.Mr.get(n) || null;
    return T.resolve(r);
  }
  addMatchingKeys(t, n, r) {
    return this.Nr.dr(n, r), T.resolve();
  }
  removeMatchingKeys(t, n, r) {
    this.Nr.Rr(n, r);
    const i = this.persistence.referenceDelegate,
      s = [];
    return (
      i &&
        n.forEach((o) => {
          s.push(i.markPotentiallyOrphaned(t, o));
        }),
      T.waitFor(s)
    );
  }
  removeMatchingKeysForTargetId(t, n) {
    return this.Nr.Vr(n), T.resolve();
  }
  getMatchingKeysForTargetId(t, n) {
    const r = this.Nr.gr(n);
    return T.resolve(r);
  }
  containsKey(t, n) {
    return T.resolve(this.Nr.containsKey(n));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aR {
  constructor(t, n) {
    (this.Lr = {}),
      (this.overlays = {}),
      (this.kr = new h0(0)),
      (this.qr = !1),
      (this.qr = !0),
      (this.referenceDelegate = t(this)),
      (this.Qr = new lR(this)),
      (this.indexManager = new YC()),
      (this.remoteDocumentCache = (function (i) {
        return new sR(i);
      })((r) => this.referenceDelegate.Kr(r))),
      (this.serializer = new GC(n)),
      (this.$r = new nR(this.serializer));
  }
  start() {
    return Promise.resolve();
  }
  shutdown() {
    return (this.qr = !1), Promise.resolve();
  }
  get started() {
    return this.qr;
  }
  setDatabaseDeletedListener() {}
  setNetworkEnabled() {}
  getIndexManager(t) {
    return this.indexManager;
  }
  getDocumentOverlayCache(t) {
    let n = this.overlays[t.toKey()];
    return n || ((n = new rR()), (this.overlays[t.toKey()] = n)), n;
  }
  getMutationQueue(t, n) {
    let r = this.Lr[t.toKey()];
    return (
      r || ((r = new iR(n, this.referenceDelegate)), (this.Lr[t.toKey()] = r)),
      r
    );
  }
  getTargetCache() {
    return this.Qr;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getBundleCache() {
    return this.$r;
  }
  runTransaction(t, n, r) {
    D("MemoryPersistence", "Starting transaction:", t);
    const i = new uR(this.kr.next());
    return (
      this.referenceDelegate.Ur(),
      r(i)
        .next((s) => this.referenceDelegate.Wr(i).next(() => s))
        .toPromise()
        .then((s) => (i.raiseOnCommittedEvent(), s))
    );
  }
  Gr(t, n) {
    return T.or(Object.values(this.Lr).map((r) => () => r.containsKey(t, n)));
  }
}
class uR extends XA {
  constructor(t) {
    super(), (this.currentSequenceNumber = t);
  }
}
class Of {
  constructor(t) {
    (this.persistence = t), (this.zr = new Df()), (this.jr = null);
  }
  static Hr(t) {
    return new Of(t);
  }
  get Jr() {
    if (this.jr) return this.jr;
    throw z();
  }
  addReference(t, n, r) {
    return (
      this.zr.addReference(r, n), this.Jr.delete(r.toString()), T.resolve()
    );
  }
  removeReference(t, n, r) {
    return (
      this.zr.removeReference(r, n), this.Jr.add(r.toString()), T.resolve()
    );
  }
  markPotentiallyOrphaned(t, n) {
    return this.Jr.add(n.toString()), T.resolve();
  }
  removeTarget(t, n) {
    this.zr.Vr(n.targetId).forEach((i) => this.Jr.add(i.toString()));
    const r = this.persistence.getTargetCache();
    return r
      .getMatchingKeysForTargetId(t, n.targetId)
      .next((i) => {
        i.forEach((s) => this.Jr.add(s.toString()));
      })
      .next(() => r.removeTargetData(t, n));
  }
  Ur() {
    this.jr = new Set();
  }
  Wr(t) {
    const n = this.persistence.getRemoteDocumentCache().newChangeBuffer();
    return T.forEach(this.Jr, (r) => {
      const i = j.fromPath(r);
      return this.Yr(t, i).next((s) => {
        s || n.removeEntry(i, se.min());
      });
    }).next(() => ((this.jr = null), n.apply(t)));
  }
  updateLimboDocument(t, n) {
    return this.Yr(t, n).next((r) => {
      r ? this.Jr.delete(n.toString()) : this.Jr.add(n.toString());
    });
  }
  Kr(t) {
    return 0;
  }
  Yr(t, n) {
    return T.or([
      () => T.resolve(this.zr.containsKey(n)),
      () => this.persistence.getTargetCache().containsKey(t, n),
      () => this.persistence.Gr(t, n),
    ]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Vf {
  constructor(t, n, r, i) {
    (this.targetId = t), (this.fromCache = n), (this.qi = r), (this.Qi = i);
  }
  static Ki(t, n) {
    let r = He(),
      i = He();
    for (const s of n.docChanges)
      switch (s.type) {
        case 0:
          r = r.add(s.doc.key);
          break;
        case 1:
          i = i.add(s.doc.key);
      }
    return new Vf(t, n.fromCache, r, i);
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cR {
  constructor() {
    this._documentReadCount = 0;
  }
  get documentReadCount() {
    return this._documentReadCount;
  }
  incrementDocumentReadCount(t) {
    this._documentReadCount += t;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hR {
  constructor() {
    (this.$i = !1),
      (this.Ui = !1),
      (this.Wi = 100),
      (this.Gi = (function () {
        return oT() ? 8 : or.v(Al()) > 0 ? 6 : 4;
      })());
  }
  initialize(t, n) {
    (this.zi = t), (this.indexManager = n), (this.$i = !0);
  }
  getDocumentsMatchingQuery(t, n, r, i) {
    const s = { result: null };
    return this.ji(t, n)
      .next((o) => {
        s.result = o;
      })
      .next(() => {
        if (!s.result)
          return this.Hi(t, n, i, r).next((o) => {
            s.result = o;
          });
      })
      .next(() => {
        if (s.result) return;
        const o = new cR();
        return this.Ji(t, n, o).next((l) => {
          if (((s.result = l), this.Ui)) return this.Yi(t, n, o, l.size);
        });
      })
      .next(() => s.result);
  }
  Yi(t, n, r, i) {
    return r.documentReadCount < this.Wi
      ? (Oi() <= H.DEBUG &&
          D(
            "QueryEngine",
            "SDK will not create cache indexes for query:",
            Vi(n),
            "since it only creates cache indexes for collection contains",
            "more than or equal to",
            this.Wi,
            "documents",
          ),
        T.resolve())
      : (Oi() <= H.DEBUG &&
          D(
            "QueryEngine",
            "Query:",
            Vi(n),
            "scans",
            r.documentReadCount,
            "local documents and returns",
            i,
            "documents as results.",
          ),
        r.documentReadCount > this.Gi * i
          ? (Oi() <= H.DEBUG &&
              D(
                "QueryEngine",
                "The SDK decides to create cache indexes for query:",
                Vi(n),
                "as using cache indexes may help improve performance.",
              ),
            this.indexManager.createTargetIndexes(t, pr(n)))
          : T.resolve());
  }
  ji(t, n) {
    if (jp(n)) return T.resolve(null);
    let r = pr(n);
    return this.indexManager.getIndexType(t, r).next((i) =>
      i === 0
        ? null
        : (n.limit !== null && i === 1 && ((n = qc(n, null, "F")), (r = pr(n))),
          this.indexManager.getDocumentsMatchingTarget(t, r).next((s) => {
            const o = He(...s);
            return this.zi.getDocuments(t, o).next((l) =>
              this.indexManager.getMinOffset(t, r).next((a) => {
                const u = this.Zi(n, l);
                return this.Xi(n, u, o, a.readTime)
                  ? this.ji(t, qc(n, null, "F"))
                  : this.es(t, u, n, a);
              }),
            );
          })),
    );
  }
  Hi(t, n, r, i) {
    return jp(n) || i.isEqual(se.min())
      ? T.resolve(null)
      : this.zi.getDocuments(t, r).next((s) => {
          const o = this.Zi(n, s);
          return this.Xi(n, o, r, i)
            ? T.resolve(null)
            : (Oi() <= H.DEBUG &&
                D(
                  "QueryEngine",
                  "Re-using previous result from %s to execute query: %s",
                  i.toString(),
                  Vi(n),
                ),
              this.es(t, o, n, KA(i, -1)).next((l) => l));
        });
  }
  Zi(t, n) {
    let r = new qe(vC(t));
    return (
      n.forEach((i, s) => {
        xf(t, s) && (r = r.add(s));
      }),
      r
    );
  }
  Xi(t, n, r, i) {
    if (t.limit === null) return !1;
    if (r.size !== n.size) return !0;
    const s = t.limitType === "F" ? n.last() : n.first();
    return !!s && (s.hasPendingWrites || s.version.compareTo(i) > 0);
  }
  Ji(t, n, r) {
    return (
      Oi() <= H.DEBUG &&
        D("QueryEngine", "Using full collection scan to execute query:", Vi(n)),
      this.zi.getDocumentsMatchingQuery(t, n, bn.min(), r)
    );
  }
  es(t, n, r, i) {
    return this.zi.getDocumentsMatchingQuery(t, r, i).next(
      (s) => (
        n.forEach((o) => {
          s = s.insert(o.key, o);
        }),
        s
      ),
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fR {
  constructor(t, n, r, i) {
    (this.persistence = t),
      (this.ts = n),
      (this.serializer = i),
      (this.ns = new ct(J)),
      (this.rs = new wi((s) => Pf(s), kf)),
      (this.ss = new Map()),
      (this.os = t.getRemoteDocumentCache()),
      (this.Qr = t.getTargetCache()),
      (this.$r = t.getBundleCache()),
      this._s(r);
  }
  _s(t) {
    (this.documentOverlayCache = this.persistence.getDocumentOverlayCache(t)),
      (this.indexManager = this.persistence.getIndexManager(t)),
      (this.mutationQueue = this.persistence.getMutationQueue(
        t,
        this.indexManager,
      )),
      (this.localDocuments = new tR(
        this.os,
        this.mutationQueue,
        this.documentOverlayCache,
        this.indexManager,
      )),
      this.os.setIndexManager(this.indexManager),
      this.ts.initialize(this.localDocuments, this.indexManager);
  }
  collectGarbage(t) {
    return this.persistence.runTransaction(
      "Collect garbage",
      "readwrite-primary",
      (n) => t.collect(n, this.ns),
    );
  }
}
function dR(e, t, n, r) {
  return new fR(e, t, n, r);
}
async function $0(e, t) {
  const n = re(e);
  return await n.persistence.runTransaction(
    "Handle user change",
    "readonly",
    (r) => {
      let i;
      return n.mutationQueue
        .getAllMutationBatches(r)
        .next(
          (s) => ((i = s), n._s(t), n.mutationQueue.getAllMutationBatches(r)),
        )
        .next((s) => {
          const o = [],
            l = [];
          let a = He();
          for (const u of i) {
            o.push(u.batchId);
            for (const c of u.mutations) a = a.add(c.key);
          }
          for (const u of s) {
            l.push(u.batchId);
            for (const c of u.mutations) a = a.add(c.key);
          }
          return n.localDocuments
            .getDocuments(r, a)
            .next((u) => ({ us: u, removedBatchIds: o, addedBatchIds: l }));
        });
    },
  );
}
function pR(e, t) {
  const n = re(e);
  return n.persistence.runTransaction(
    "Acknowledge batch",
    "readwrite-primary",
    (r) => {
      const i = t.batch.keys(),
        s = n.os.newChangeBuffer({ trackRemovals: !0 });
      return (function (l, a, u, c) {
        const h = u.batch,
          d = h.keys();
        let g = T.resolve();
        return (
          d.forEach((y) => {
            g = g
              .next(() => c.getEntry(a, y))
              .next((v) => {
                const w = u.docVersions.get(y);
                Pe(w !== null),
                  v.version.compareTo(w) < 0 &&
                    (h.applyToRemoteDocument(v, u),
                    v.isValidDocument() &&
                      (v.setReadTime(u.commitVersion), c.addEntry(v)));
              });
          }),
          g.next(() => l.mutationQueue.removeMutationBatch(a, h))
        );
      })(n, r, t, s)
        .next(() => s.apply(r))
        .next(() => n.mutationQueue.performConsistencyCheck(r))
        .next(() =>
          n.documentOverlayCache.removeOverlaysForBatchId(
            r,
            i,
            t.batch.batchId,
          ),
        )
        .next(() =>
          n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(
            r,
            (function (l) {
              let a = He();
              for (let u = 0; u < l.mutationResults.length; ++u)
                l.mutationResults[u].transformResults.length > 0 &&
                  (a = a.add(l.batch.mutations[u].key));
              return a;
            })(t),
          ),
        )
        .next(() => n.localDocuments.getDocuments(r, i));
    },
  );
}
function mR(e) {
  const t = re(e);
  return t.persistence.runTransaction(
    "Get last remote snapshot version",
    "readonly",
    (n) => t.Qr.getLastRemoteSnapshotVersion(n),
  );
}
function gR(e, t) {
  const n = re(e);
  return n.persistence.runTransaction(
    "Get next mutation batch",
    "readonly",
    (r) => (
      t === void 0 && (t = -1),
      n.mutationQueue.getNextMutationBatchAfterBatchId(r, t)
    ),
  );
}
class Kp {
  constructor() {
    this.activeTargetIds = SC();
  }
  As(t) {
    this.activeTargetIds = this.activeTargetIds.add(t);
  }
  Rs(t) {
    this.activeTargetIds = this.activeTargetIds.delete(t);
  }
  ds() {
    const t = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now(),
    };
    return JSON.stringify(t);
  }
}
class yR {
  constructor() {
    (this.no = new Kp()),
      (this.ro = {}),
      (this.onlineStateHandler = null),
      (this.sequenceNumberHandler = null);
  }
  addPendingMutation(t) {}
  updateMutationState(t, n, r) {}
  addLocalQueryTarget(t) {
    return this.no.As(t), this.ro[t] || "not-current";
  }
  updateQueryState(t, n, r) {
    this.ro[t] = n;
  }
  removeLocalQueryTarget(t) {
    this.no.Rs(t);
  }
  isLocalQueryTarget(t) {
    return this.no.activeTargetIds.has(t);
  }
  clearQueryState(t) {
    delete this.ro[t];
  }
  getAllActiveQueryTargets() {
    return this.no.activeTargetIds;
  }
  isActiveQueryTarget(t) {
    return this.no.activeTargetIds.has(t);
  }
  start() {
    return (this.no = new Kp()), Promise.resolve();
  }
  handleUserChange(t, n, r) {}
  setOnlineState(t) {}
  shutdown() {}
  writeSequenceNumber(t) {}
  notifyBundleLoaded(t) {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vR {
  io(t) {}
  shutdown() {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class qp {
  constructor() {
    (this.so = () => this.oo()),
      (this._o = () => this.ao()),
      (this.uo = []),
      this.co();
  }
  io(t) {
    this.uo.push(t);
  }
  shutdown() {
    window.removeEventListener("online", this.so),
      window.removeEventListener("offline", this._o);
  }
  co() {
    window.addEventListener("online", this.so),
      window.addEventListener("offline", this._o);
  }
  oo() {
    D("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
    for (const t of this.uo) t(0);
  }
  ao() {
    D("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
    for (const t of this.uo) t(1);
  }
  static D() {
    return (
      typeof window < "u" &&
      window.addEventListener !== void 0 &&
      window.removeEventListener !== void 0
    );
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Lo = null;
function Su() {
  return (
    Lo === null
      ? (Lo = (function () {
          return 268435456 + Math.round(2147483648 * Math.random());
        })())
      : Lo++,
    "0x" + Lo.toString(16)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const _R = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery",
  RunAggregationQuery: "runAggregationQuery",
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ER {
  constructor(t) {
    (this.lo = t.lo), (this.ho = t.ho);
  }
  Po(t) {
    this.Io = t;
  }
  To(t) {
    this.Eo = t;
  }
  onMessage(t) {
    this.Ao = t;
  }
  close() {
    this.ho();
  }
  send(t) {
    this.lo(t);
  }
  Ro() {
    this.Io();
  }
  Vo(t) {
    this.Eo(t);
  }
  mo(t) {
    this.Ao(t);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Be = "WebChannelConnection";
class wR extends class {
  constructor(n) {
    (this.databaseInfo = n), (this.databaseId = n.databaseId);
    const r = n.ssl ? "https" : "http",
      i = encodeURIComponent(this.databaseId.projectId),
      s = encodeURIComponent(this.databaseId.database);
    (this.fo = r + "://" + n.host),
      (this.po = `projects/${i}/databases/${s}`),
      (this.yo =
        this.databaseId.database === "(default)"
          ? `project_id=${i}`
          : `project_id=${i}&database_id=${s}`);
  }
  get wo() {
    return !1;
  }
  So(n, r, i, s, o) {
    const l = Su(),
      a = this.bo(n, r.toUriEncodedString());
    D("RestConnection", `Sending RPC '${n}' ${l}:`, a, i);
    const u = {
      "google-cloud-resource-prefix": this.po,
      "x-goog-request-params": this.yo,
    };
    return (
      this.Do(u, s, o),
      this.Co(n, a, u, i).then(
        (c) => (D("RestConnection", `Received RPC '${n}' ${l}: `, c), c),
        (c) => {
          throw (
            (Ol(
              "RestConnection",
              `RPC '${n}' ${l} failed with error: `,
              c,
              "url: ",
              a,
              "request:",
              i,
            ),
            c)
          );
        },
      )
    );
  }
  vo(n, r, i, s, o, l) {
    return this.So(n, r, i, s, o);
  }
  Do(n, r, i) {
    (n["X-Goog-Api-Client"] = (function () {
      return "gl-js/ fire/" + Ei;
    })()),
      (n["Content-Type"] = "text/plain"),
      this.databaseInfo.appId &&
        (n["X-Firebase-GMPID"] = this.databaseInfo.appId),
      r && r.headers.forEach((s, o) => (n[o] = s)),
      i && i.headers.forEach((s, o) => (n[o] = s));
  }
  bo(n, r) {
    const i = _R[n];
    return `${this.fo}/v1/${r}:${i}`;
  }
  terminate() {}
} {
  constructor(t) {
    super(t),
      (this.forceLongPolling = t.forceLongPolling),
      (this.autoDetectLongPolling = t.autoDetectLongPolling),
      (this.useFetchStreams = t.useFetchStreams),
      (this.longPollingOptions = t.longPollingOptions);
  }
  Co(t, n, r, i) {
    const s = Su();
    return new Promise((o, l) => {
      const a = new LA();
      a.setWithCredentials(!0),
        a.listenOnce(OA.COMPLETE, () => {
          try {
            switch (a.getLastErrorCode()) {
              case Iu.NO_ERROR:
                const c = a.getResponseJson();
                D(Be, `XHR for RPC '${t}' ${s} received:`, JSON.stringify(c)),
                  o(c);
                break;
              case Iu.TIMEOUT:
                D(Be, `RPC '${t}' ${s} timed out`),
                  l(new M(S.DEADLINE_EXCEEDED, "Request time out"));
                break;
              case Iu.HTTP_ERROR:
                const h = a.getStatus();
                if (
                  (D(
                    Be,
                    `RPC '${t}' ${s} failed with status:`,
                    h,
                    "response text:",
                    a.getResponseText(),
                  ),
                  h > 0)
                ) {
                  let d = a.getResponseJson();
                  Array.isArray(d) && (d = d[0]);
                  const g = d == null ? void 0 : d.error;
                  if (g && g.status && g.message) {
                    const y = (function (w) {
                      const p = w.toLowerCase().replace(/_/g, "-");
                      return Object.values(S).indexOf(p) >= 0 ? p : S.UNKNOWN;
                    })(g.status);
                    l(new M(y, g.message));
                  } else
                    l(
                      new M(
                        S.UNKNOWN,
                        "Server responded with status " + a.getStatus(),
                      ),
                    );
                } else l(new M(S.UNAVAILABLE, "Connection failed."));
                break;
              default:
                z();
            }
          } finally {
            D(Be, `RPC '${t}' ${s} completed.`);
          }
        });
      const u = JSON.stringify(i);
      D(Be, `RPC '${t}' ${s} sending request:`, i), a.send(n, "POST", u, r, 15);
    });
  }
  Fo(t, n, r) {
    const i = Su(),
      s = [this.fo, "/", "google.firestore.v1.Firestore", "/", t, "/channel"],
      o = NA(),
      l = DA(),
      a = {
        httpSessionIdParam: "gsessionid",
        initMessageHeaders: {},
        messageUrlParams: {
          database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`,
        },
        sendRawJson: !0,
        supportsCrossDomainXhr: !0,
        internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
        forceLongPolling: this.forceLongPolling,
        detectBufferingProxy: this.autoDetectLongPolling,
      },
      u = this.longPollingOptions.timeoutSeconds;
    u !== void 0 && (a.longPollingTimeout = Math.round(1e3 * u)),
      this.useFetchStreams && (a.useFetchStreams = !0),
      this.Do(a.initMessageHeaders, n, r),
      (a.encodeInitMessageHeaders = !0);
    const c = s.join("");
    D(Be, `Creating RPC '${t}' stream ${i}: ${c}`, a);
    const h = o.createWebChannel(c, a);
    let d = !1,
      g = !1;
    const y = new ER({
        lo: (w) => {
          g
            ? D(Be, `Not sending because RPC '${t}' stream ${i} is closed:`, w)
            : (d ||
                (D(Be, `Opening RPC '${t}' stream ${i} transport.`),
                h.open(),
                (d = !0)),
              D(Be, `RPC '${t}' stream ${i} sending:`, w),
              h.send(w));
        },
        ho: () => h.close(),
      }),
      v = (w, p, f) => {
        w.listen(p, (m) => {
          try {
            f(m);
          } catch (_) {
            setTimeout(() => {
              throw _;
            }, 0);
          }
        });
      };
    return (
      v(h, No.EventType.OPEN, () => {
        g || D(Be, `RPC '${t}' stream ${i} transport opened.`);
      }),
      v(h, No.EventType.CLOSE, () => {
        g ||
          ((g = !0), D(Be, `RPC '${t}' stream ${i} transport closed`), y.Vo());
      }),
      v(h, No.EventType.ERROR, (w) => {
        g ||
          ((g = !0),
          Ol(Be, `RPC '${t}' stream ${i} transport errored:`, w),
          y.Vo(new M(S.UNAVAILABLE, "The operation could not be completed")));
      }),
      v(h, No.EventType.MESSAGE, (w) => {
        var p;
        if (!g) {
          const f = w.data[0];
          Pe(!!f);
          const m = f,
            _ =
              m.error ||
              ((p = m[0]) === null || p === void 0 ? void 0 : p.error);
          if (_) {
            D(Be, `RPC '${t}' stream ${i} received error:`, _);
            const R = _.status;
            let k = (function (O) {
                const L = pe[O];
                if (L !== void 0) return MC(L);
              })(R),
              P = _.message;
            k === void 0 &&
              ((k = S.INTERNAL),
              (P =
                "Unknown error status: " + R + " with message " + _.message)),
              (g = !0),
              y.Vo(new M(k, P)),
              h.close();
          } else D(Be, `RPC '${t}' stream ${i} received:`, f), y.mo(f);
        }
      }),
      v(l, VA.STAT_EVENT, (w) => {
        w.stat === Np.PROXY
          ? D(Be, `RPC '${t}' stream ${i} detected buffering proxy`)
          : w.stat === Np.NOPROXY &&
            D(Be, `RPC '${t}' stream ${i} detected no buffering proxy`);
      }),
      setTimeout(() => {
        y.Ro();
      }, 0),
      y
    );
  }
}
function Au() {
  return typeof document < "u" ? document : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Na(e) {
  return new $C(e, !0);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class F0 {
  constructor(t, n, r = 1e3, i = 1.5, s = 6e4) {
    (this.oi = t),
      (this.timerId = n),
      (this.Mo = r),
      (this.xo = i),
      (this.Oo = s),
      (this.No = 0),
      (this.Bo = null),
      (this.Lo = Date.now()),
      this.reset();
  }
  reset() {
    this.No = 0;
  }
  ko() {
    this.No = this.Oo;
  }
  qo(t) {
    this.cancel();
    const n = Math.floor(this.No + this.Qo()),
      r = Math.max(0, Date.now() - this.Lo),
      i = Math.max(0, n - r);
    i > 0 &&
      D(
        "ExponentialBackoff",
        `Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`,
      ),
      (this.Bo = this.oi.enqueueAfterDelay(
        this.timerId,
        i,
        () => ((this.Lo = Date.now()), t()),
      )),
      (this.No *= this.xo),
      this.No < this.Mo && (this.No = this.Mo),
      this.No > this.Oo && (this.No = this.Oo);
  }
  Ko() {
    this.Bo !== null && (this.Bo.skipDelay(), (this.Bo = null));
  }
  cancel() {
    this.Bo !== null && (this.Bo.cancel(), (this.Bo = null));
  }
  Qo() {
    return (Math.random() - 0.5) * this.No;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class TR {
  constructor(t, n, r, i, s, o, l, a) {
    (this.oi = t),
      (this.$o = r),
      (this.Uo = i),
      (this.connection = s),
      (this.authCredentialsProvider = o),
      (this.appCheckCredentialsProvider = l),
      (this.listener = a),
      (this.state = 0),
      (this.Wo = 0),
      (this.Go = null),
      (this.zo = null),
      (this.stream = null),
      (this.jo = new F0(t, n));
  }
  Ho() {
    return this.state === 1 || this.state === 5 || this.Jo();
  }
  Jo() {
    return this.state === 2 || this.state === 3;
  }
  start() {
    this.state !== 4 ? this.auth() : this.Yo();
  }
  async stop() {
    this.Ho() && (await this.close(0));
  }
  Zo() {
    (this.state = 0), this.jo.reset();
  }
  Xo() {
    this.Jo() &&
      this.Go === null &&
      (this.Go = this.oi.enqueueAfterDelay(this.$o, 6e4, () => this.e_()));
  }
  t_(t) {
    this.n_(), this.stream.send(t);
  }
  async e_() {
    if (this.Jo()) return this.close(0);
  }
  n_() {
    this.Go && (this.Go.cancel(), (this.Go = null));
  }
  r_() {
    this.zo && (this.zo.cancel(), (this.zo = null));
  }
  async close(t, n) {
    this.n_(),
      this.r_(),
      this.jo.cancel(),
      this.Wo++,
      t !== 4
        ? this.jo.reset()
        : n && n.code === S.RESOURCE_EXHAUSTED
          ? (zn(n.toString()),
            zn(
              "Using maximum backoff delay to prevent overloading the backend.",
            ),
            this.jo.ko())
          : n &&
            n.code === S.UNAUTHENTICATED &&
            this.state !== 3 &&
            (this.authCredentialsProvider.invalidateToken(),
            this.appCheckCredentialsProvider.invalidateToken()),
      this.stream !== null &&
        (this.i_(), this.stream.close(), (this.stream = null)),
      (this.state = t),
      await this.listener.To(n);
  }
  i_() {}
  auth() {
    this.state = 1;
    const t = this.s_(this.Wo),
      n = this.Wo;
    Promise.all([
      this.authCredentialsProvider.getToken(),
      this.appCheckCredentialsProvider.getToken(),
    ]).then(
      ([r, i]) => {
        this.Wo === n && this.o_(r, i);
      },
      (r) => {
        t(() => {
          const i = new M(
            S.UNKNOWN,
            "Fetching auth token failed: " + r.message,
          );
          return this.__(i);
        });
      },
    );
  }
  o_(t, n) {
    const r = this.s_(this.Wo);
    (this.stream = this.a_(t, n)),
      this.stream.Po(() => {
        r(
          () => (
            (this.state = 2),
            (this.zo = this.oi.enqueueAfterDelay(
              this.Uo,
              1e4,
              () => (this.Jo() && (this.state = 3), Promise.resolve()),
            )),
            this.listener.Po()
          ),
        );
      }),
      this.stream.To((i) => {
        r(() => this.__(i));
      }),
      this.stream.onMessage((i) => {
        r(() => this.onMessage(i));
      });
  }
  Yo() {
    (this.state = 5),
      this.jo.qo(async () => {
        (this.state = 0), this.start();
      });
  }
  __(t) {
    return (
      D("PersistentStream", `close with error: ${t}`),
      (this.stream = null),
      this.close(4, t)
    );
  }
  s_(t) {
    return (n) => {
      this.oi.enqueueAndForget(() =>
        this.Wo === t
          ? n()
          : (D(
              "PersistentStream",
              "stream callback skipped by getCloseGuardedDispatcher.",
            ),
            Promise.resolve()),
      );
    };
  }
}
class IR extends TR {
  constructor(t, n, r, i, s, o) {
    super(
      t,
      "write_stream_connection_backoff",
      "write_stream_idle",
      "health_check_timeout",
      n,
      r,
      i,
      o,
    ),
      (this.serializer = s),
      (this.h_ = !1);
  }
  get P_() {
    return this.h_;
  }
  start() {
    (this.h_ = !1), (this.lastStreamToken = void 0), super.start();
  }
  i_() {
    this.h_ && this.I_([]);
  }
  a_(t, n) {
    return this.connection.Fo("Write", t, n);
  }
  onMessage(t) {
    if (
      (Pe(!!t.streamToken), (this.lastStreamToken = t.streamToken), this.h_)
    ) {
      this.jo.reset();
      const n = WC(t.writeResults, t.commitTime),
        r = Zr(t.commitTime);
      return this.listener.T_(r, n);
    }
    return (
      Pe(!t.writeResults || t.writeResults.length === 0),
      (this.h_ = !0),
      this.listener.E_()
    );
  }
  d_() {
    const t = {};
    (t.database = zC(this.serializer)), this.t_(t);
  }
  I_(t) {
    const n = {
      streamToken: this.lastStreamToken,
      writes: t.map((r) => HC(this.serializer, r)),
    };
    this.t_(n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class SR extends class {} {
  constructor(t, n, r, i) {
    super(),
      (this.authCredentials = t),
      (this.appCheckCredentials = n),
      (this.connection = r),
      (this.serializer = i),
      (this.A_ = !1);
  }
  R_() {
    if (this.A_)
      throw new M(
        S.FAILED_PRECONDITION,
        "The client has already been terminated.",
      );
  }
  So(t, n, r, i) {
    return (
      this.R_(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([s, o]) => this.connection.So(t, Gc(n, r), i, s, o))
        .catch((s) => {
          throw s.name === "FirebaseError"
            ? (s.code === S.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              s)
            : new M(S.UNKNOWN, s.toString());
        })
    );
  }
  vo(t, n, r, i, s) {
    return (
      this.R_(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([o, l]) => this.connection.vo(t, Gc(n, r), i, o, l, s))
        .catch((o) => {
          throw o.name === "FirebaseError"
            ? (o.code === S.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              o)
            : new M(S.UNKNOWN, o.toString());
        })
    );
  }
  terminate() {
    (this.A_ = !0), this.connection.terminate();
  }
}
class AR {
  constructor(t, n) {
    (this.asyncQueue = t),
      (this.onlineStateHandler = n),
      (this.state = "Unknown"),
      (this.m_ = 0),
      (this.f_ = null),
      (this.g_ = !0);
  }
  p_() {
    this.m_ === 0 &&
      (this.y_("Unknown"),
      (this.f_ = this.asyncQueue.enqueueAfterDelay(
        "online_state_timeout",
        1e4,
        () => (
          (this.f_ = null),
          this.w_("Backend didn't respond within 10 seconds."),
          this.y_("Offline"),
          Promise.resolve()
        ),
      )));
  }
  S_(t) {
    this.state === "Online"
      ? this.y_("Unknown")
      : (this.m_++,
        this.m_ >= 1 &&
          (this.b_(),
          this.w_(
            `Connection failed 1 times. Most recent error: ${t.toString()}`,
          ),
          this.y_("Offline")));
  }
  set(t) {
    this.b_(), (this.m_ = 0), t === "Online" && (this.g_ = !1), this.y_(t);
  }
  y_(t) {
    t !== this.state && ((this.state = t), this.onlineStateHandler(t));
  }
  w_(t) {
    const n = `Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
    this.g_ ? (zn(n), (this.g_ = !1)) : D("OnlineStateTracker", n);
  }
  b_() {
    this.f_ !== null && (this.f_.cancel(), (this.f_ = null));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class CR {
  constructor(t, n, r, i, s) {
    (this.localStore = t),
      (this.datastore = n),
      (this.asyncQueue = r),
      (this.remoteSyncer = {}),
      (this.D_ = []),
      (this.C_ = new Map()),
      (this.v_ = new Set()),
      (this.F_ = []),
      (this.M_ = s),
      this.M_.io((o) => {
        r.enqueueAndForget(async () => {
          io(this) &&
            (D(
              "RemoteStore",
              "Restarting streams for network reachability change.",
            ),
            await (async function (a) {
              const u = re(a);
              u.v_.add(4),
                await ro(u),
                u.x_.set("Unknown"),
                u.v_.delete(4),
                await Da(u);
            })(this));
        });
      }),
      (this.x_ = new AR(r, i));
  }
}
async function Da(e) {
  if (io(e)) for (const t of e.F_) await t(!0);
}
async function ro(e) {
  for (const t of e.F_) await t(!1);
}
function io(e) {
  return re(e).v_.size === 0;
}
async function U0(e, t, n) {
  if (!Ra(t)) throw t;
  e.v_.add(1),
    await ro(e),
    e.x_.set("Offline"),
    n || (n = () => mR(e.localStore)),
    e.asyncQueue.enqueueRetryable(async () => {
      D("RemoteStore", "Retrying IndexedDB access"),
        await n(),
        e.v_.delete(1),
        await Da(e);
    });
}
function j0(e, t) {
  return t().catch((n) => U0(e, n, t));
}
async function Oa(e) {
  const t = re(e),
    n = Wn(t);
  let r = t.D_.length > 0 ? t.D_[t.D_.length - 1].batchId : -1;
  for (; RR(t); )
    try {
      const i = await gR(t.localStore, r);
      if (i === null) {
        t.D_.length === 0 && n.Xo();
        break;
      }
      (r = i.batchId), PR(t, i);
    } catch (i) {
      await U0(t, i);
    }
  B0(t) && z0(t);
}
function RR(e) {
  return io(e) && e.D_.length < 10;
}
function PR(e, t) {
  e.D_.push(t);
  const n = Wn(e);
  n.Jo() && n.P_ && n.I_(t.mutations);
}
function B0(e) {
  return io(e) && !Wn(e).Ho() && e.D_.length > 0;
}
function z0(e) {
  Wn(e).start();
}
async function kR(e) {
  Wn(e).d_();
}
async function xR(e) {
  const t = Wn(e);
  for (const n of e.D_) t.I_(n.mutations);
}
async function NR(e, t, n) {
  const r = e.D_.shift(),
    i = Nf.from(r, t, n);
  await j0(e, () => e.remoteSyncer.applySuccessfulWrite(i)), await Oa(e);
}
async function DR(e, t) {
  t &&
    Wn(e).P_ &&
    (await (async function (r, i) {
      if (
        (function (o) {
          return LC(o) && o !== S.ABORTED;
        })(i.code)
      ) {
        const s = r.D_.shift();
        Wn(r).Zo(),
          await j0(r, () => r.remoteSyncer.rejectFailedWrite(s.batchId, i)),
          await Oa(r);
      }
    })(e, t)),
    B0(e) && z0(e);
}
async function Qp(e, t) {
  const n = re(e);
  n.asyncQueue.verifyOperationInProgress(),
    D("RemoteStore", "RemoteStore received new credentials");
  const r = io(n);
  n.v_.add(3),
    await ro(n),
    r && n.x_.set("Unknown"),
    await n.remoteSyncer.handleCredentialChange(t),
    n.v_.delete(3),
    await Da(n);
}
async function OR(e, t) {
  const n = re(e);
  t
    ? (n.v_.delete(2), await Da(n))
    : t || (n.v_.add(2), await ro(n), n.x_.set("Unknown"));
}
function Wn(e) {
  return (
    e.B_ ||
      ((e.B_ = (function (n, r, i) {
        const s = re(n);
        return (
          s.R_(),
          new IR(
            r,
            s.connection,
            s.authCredentials,
            s.appCheckCredentials,
            s.serializer,
            i,
          )
        );
      })(e.datastore, e.asyncQueue, {
        Po: kR.bind(null, e),
        To: DR.bind(null, e),
        E_: xR.bind(null, e),
        T_: NR.bind(null, e),
      })),
      e.F_.push(async (t) => {
        t
          ? (e.B_.Zo(), await Oa(e))
          : (await e.B_.stop(),
            e.D_.length > 0 &&
              (D(
                "RemoteStore",
                `Stopping write stream with ${e.D_.length} pending writes`,
              ),
              (e.D_ = [])));
      })),
    e.B_
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Lf {
  constructor(t, n, r, i, s) {
    (this.asyncQueue = t),
      (this.timerId = n),
      (this.targetTimeMs = r),
      (this.op = i),
      (this.removalCallback = s),
      (this.deferred = new $n()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((o) => {});
  }
  get promise() {
    return this.deferred.promise;
  }
  static createAndSchedule(t, n, r, i, s) {
    const o = Date.now() + r,
      l = new Lf(t, n, o, i, s);
    return l.start(r), l;
  }
  start(t) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), t);
  }
  skipDelay() {
    return this.handleDelayElapsed();
  }
  cancel(t) {
    this.timerHandle !== null &&
      (this.clearTimeout(),
      this.deferred.reject(
        new M(S.CANCELLED, "Operation cancelled" + (t ? ": " + t : "")),
      ));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() =>
      this.timerHandle !== null
        ? (this.clearTimeout(), this.op().then((t) => this.deferred.resolve(t)))
        : Promise.resolve(),
    );
  }
  clearTimeout() {
    this.timerHandle !== null &&
      (this.removalCallback(this),
      clearTimeout(this.timerHandle),
      (this.timerHandle = null));
  }
}
function b0(e, t) {
  if ((zn("AsyncQueue", `${t}: ${e}`), Ra(e)))
    return new M(S.UNAVAILABLE, `${t}: ${e}`);
  throw e;
}
class VR {
  constructor() {
    (this.queries = new wi((t) => T0(t), w0)),
      (this.onlineState = "Unknown"),
      (this.K_ = new Set());
  }
}
function LR(e) {
  e.K_.forEach((t) => {
    t.next();
  });
}
class MR {
  constructor(t, n, r, i, s, o) {
    (this.localStore = t),
      (this.remoteStore = n),
      (this.eventManager = r),
      (this.sharedClientState = i),
      (this.currentUser = s),
      (this.maxConcurrentLimboResolutions = o),
      (this.fa = {}),
      (this.ga = new wi((l) => T0(l), w0)),
      (this.pa = new Map()),
      (this.ya = new Set()),
      (this.wa = new ct(j.comparator)),
      (this.Sa = new Map()),
      (this.ba = new Df()),
      (this.Da = {}),
      (this.Ca = new Map()),
      (this.va = di.Bn()),
      (this.onlineState = "Unknown"),
      (this.Fa = void 0);
  }
  get isPrimaryClient() {
    return this.Fa === !0;
  }
}
async function $R(e, t, n) {
  const r = BR(e);
  try {
    const i = await (function (o, l) {
      const a = re(o),
        u = Ce.now(),
        c = l.reduce((g, y) => g.add(y.key), He());
      let h, d;
      return a.persistence
        .runTransaction("Locally write mutations", "readwrite", (g) => {
          let y = Ul(),
            v = He();
          return a.os
            .getEntries(g, c)
            .next((w) => {
              (y = w),
                y.forEach((p, f) => {
                  f.isValidDocument() || (v = v.add(p));
                });
            })
            .next(() => a.localDocuments.getOverlayedDocuments(g, y))
            .next((w) => {
              h = w;
              const p = [];
              for (const f of l) {
                const m = NC(f, h.get(f.key).overlayedDocument);
                m != null &&
                  p.push(new kr(f.key, m, p0(m.value.mapValue), sn.exists(!0)));
              }
              return a.mutationQueue.addMutationBatch(g, u, p, l);
            })
            .next((w) => {
              d = w;
              const p = w.applyToLocalDocumentSet(h, v);
              return a.documentOverlayCache.saveOverlays(g, w.batchId, p);
            });
        })
        .then(() => ({ batchId: d.batchId, changes: S0(h) }));
    })(r.localStore, t);
    r.sharedClientState.addPendingMutation(i.batchId),
      (function (o, l, a) {
        let u = o.Da[o.currentUser.toKey()];
        u || (u = new ct(J)),
          (u = u.insert(l, a)),
          (o.Da[o.currentUser.toKey()] = u);
      })(r, i.batchId, n),
      await Va(r, i.changes),
      await Oa(r.remoteStore);
  } catch (i) {
    const s = b0(i, "Failed to persist write");
    n.reject(s);
  }
}
function Gp(e, t, n) {
  const r = re(e);
  if ((r.isPrimaryClient && n === 0) || (!r.isPrimaryClient && n === 1)) {
    const i = [];
    r.ga.forEach((s, o) => {
      const l = o.view.U_(t);
      l.snapshot && i.push(l.snapshot);
    }),
      (function (o, l) {
        const a = re(o);
        a.onlineState = l;
        let u = !1;
        a.queries.forEach((c, h) => {
          for (const d of h.Q_) d.U_(l) && (u = !0);
        }),
          u && LR(a);
      })(r.eventManager, t),
      i.length && r.fa.u_(i),
      (r.onlineState = t),
      r.isPrimaryClient && r.sharedClientState.setOnlineState(t);
  }
}
async function FR(e, t) {
  const n = re(e),
    r = t.batch.batchId;
  try {
    const i = await pR(n.localStore, t);
    W0(n, r, null),
      H0(n, r),
      n.sharedClientState.updateMutationState(r, "acknowledged"),
      await Va(n, i);
  } catch (i) {
    await c0(i);
  }
}
async function UR(e, t, n) {
  const r = re(e);
  try {
    const i = await (function (o, l) {
      const a = re(o);
      return a.persistence.runTransaction(
        "Reject batch",
        "readwrite-primary",
        (u) => {
          let c;
          return a.mutationQueue
            .lookupMutationBatch(u, l)
            .next(
              (h) => (
                Pe(h !== null),
                (c = h.keys()),
                a.mutationQueue.removeMutationBatch(u, h)
              ),
            )
            .next(() => a.mutationQueue.performConsistencyCheck(u))
            .next(() =>
              a.documentOverlayCache.removeOverlaysForBatchId(u, c, l),
            )
            .next(() =>
              a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u, c),
            )
            .next(() => a.localDocuments.getDocuments(u, c));
        },
      );
    })(r.localStore, t);
    W0(r, t, n),
      H0(r, t),
      r.sharedClientState.updateMutationState(t, "rejected", n),
      await Va(r, i);
  } catch (i) {
    await c0(i);
  }
}
function H0(e, t) {
  (e.Ca.get(t) || []).forEach((n) => {
    n.resolve();
  }),
    e.Ca.delete(t);
}
function W0(e, t, n) {
  const r = re(e);
  let i = r.Da[r.currentUser.toKey()];
  if (i) {
    const s = i.get(t);
    s && (n ? s.reject(n) : s.resolve(), (i = i.remove(t))),
      (r.Da[r.currentUser.toKey()] = i);
  }
}
async function Va(e, t, n) {
  const r = re(e),
    i = [],
    s = [],
    o = [];
  r.ga.isEmpty() ||
    (r.ga.forEach((l, a) => {
      o.push(
        r.Ma(a, t, n).then((u) => {
          if (
            ((u || n) &&
              r.isPrimaryClient &&
              r.sharedClientState.updateQueryState(
                a.targetId,
                u != null && u.fromCache ? "not-current" : "current",
              ),
            u)
          ) {
            i.push(u);
            const c = Vf.Ki(a.targetId, u);
            s.push(c);
          }
        }),
      );
    }),
    await Promise.all(o),
    r.fa.u_(i),
    await (async function (a, u) {
      const c = re(a);
      try {
        await c.persistence.runTransaction(
          "notifyLocalViewChanges",
          "readwrite",
          (h) =>
            T.forEach(u, (d) =>
              T.forEach(d.qi, (g) =>
                c.persistence.referenceDelegate.addReference(h, d.targetId, g),
              ).next(() =>
                T.forEach(d.Qi, (g) =>
                  c.persistence.referenceDelegate.removeReference(
                    h,
                    d.targetId,
                    g,
                  ),
                ),
              ),
            ),
        );
      } catch (h) {
        if (!Ra(h)) throw h;
        D("LocalStore", "Failed to update sequence numbers: " + h);
      }
      for (const h of u) {
        const d = h.targetId;
        if (!h.fromCache) {
          const g = c.ns.get(d),
            y = g.snapshotVersion,
            v = g.withLastLimboFreeSnapshotVersion(y);
          c.ns = c.ns.insert(d, v);
        }
      }
    })(r.localStore, s));
}
async function jR(e, t) {
  const n = re(e);
  if (!n.currentUser.isEqual(t)) {
    D("SyncEngine", "User change. New user:", t.toKey());
    const r = await $0(n.localStore, t);
    (n.currentUser = t),
      (function (s, o) {
        s.Ca.forEach((l) => {
          l.forEach((a) => {
            a.reject(new M(S.CANCELLED, o));
          });
        }),
          s.Ca.clear();
      })(n, "'waitForPendingWrites' promise is rejected due to a user change."),
      n.sharedClientState.handleUserChange(
        t,
        r.removedBatchIds,
        r.addedBatchIds,
      ),
      await Va(n, r.us);
  }
}
function BR(e) {
  const t = re(e);
  return (
    (t.remoteStore.remoteSyncer.applySuccessfulWrite = FR.bind(null, t)),
    (t.remoteStore.remoteSyncer.rejectFailedWrite = UR.bind(null, t)),
    t
  );
}
class Xp {
  constructor() {
    this.synchronizeTabs = !1;
  }
  async initialize(t) {
    (this.serializer = Na(t.databaseInfo.databaseId)),
      (this.sharedClientState = this.createSharedClientState(t)),
      (this.persistence = this.createPersistence(t)),
      await this.persistence.start(),
      (this.localStore = this.createLocalStore(t)),
      (this.gcScheduler = this.createGarbageCollectionScheduler(
        t,
        this.localStore,
      )),
      (this.indexBackfillerScheduler = this.createIndexBackfillerScheduler(
        t,
        this.localStore,
      ));
  }
  createGarbageCollectionScheduler(t, n) {
    return null;
  }
  createIndexBackfillerScheduler(t, n) {
    return null;
  }
  createLocalStore(t) {
    return dR(this.persistence, new hR(), t.initialUser, this.serializer);
  }
  createPersistence(t) {
    return new aR(Of.Hr, this.serializer);
  }
  createSharedClientState(t) {
    return new yR();
  }
  async terminate() {
    var t, n;
    (t = this.gcScheduler) === null || t === void 0 || t.stop(),
      (n = this.indexBackfillerScheduler) === null || n === void 0 || n.stop(),
      this.sharedClientState.shutdown(),
      await this.persistence.shutdown();
  }
}
class zR {
  async initialize(t, n) {
    this.localStore ||
      ((this.localStore = t.localStore),
      (this.sharedClientState = t.sharedClientState),
      (this.datastore = this.createDatastore(n)),
      (this.remoteStore = this.createRemoteStore(n)),
      (this.eventManager = this.createEventManager(n)),
      (this.syncEngine = this.createSyncEngine(n, !t.synchronizeTabs)),
      (this.sharedClientState.onlineStateHandler = (r) =>
        Gp(this.syncEngine, r, 1)),
      (this.remoteStore.remoteSyncer.handleCredentialChange = jR.bind(
        null,
        this.syncEngine,
      )),
      await OR(this.remoteStore, this.syncEngine.isPrimaryClient));
  }
  createEventManager(t) {
    return (function () {
      return new VR();
    })();
  }
  createDatastore(t) {
    const n = Na(t.databaseInfo.databaseId),
      r = (function (s) {
        return new wR(s);
      })(t.databaseInfo);
    return (function (s, o, l, a) {
      return new SR(s, o, l, a);
    })(t.authCredentials, t.appCheckCredentials, r, n);
  }
  createRemoteStore(t) {
    return (function (r, i, s, o, l) {
      return new CR(r, i, s, o, l);
    })(
      this.localStore,
      this.datastore,
      t.asyncQueue,
      (n) => Gp(this.syncEngine, n, 0),
      (function () {
        return qp.D() ? new qp() : new vR();
      })(),
    );
  }
  createSyncEngine(t, n) {
    return (function (i, s, o, l, a, u, c) {
      const h = new MR(i, s, o, l, a, u);
      return c && (h.Fa = !0), h;
    })(
      this.localStore,
      this.remoteStore,
      this.eventManager,
      this.sharedClientState,
      t.initialUser,
      t.maxConcurrentLimboResolutions,
      n,
    );
  }
  async terminate() {
    var t;
    await (async function (r) {
      const i = re(r);
      D("RemoteStore", "RemoteStore shutting down."),
        i.v_.add(5),
        await ro(i),
        i.M_.shutdown(),
        i.x_.set("Unknown");
    })(this.remoteStore),
      (t = this.datastore) === null || t === void 0 || t.terminate();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bR {
  constructor(t, n, r, i) {
    (this.authCredentials = t),
      (this.appCheckCredentials = n),
      (this.asyncQueue = r),
      (this.databaseInfo = i),
      (this.user = ze.UNAUTHENTICATED),
      (this.clientId = u0.newId()),
      (this.authCredentialListener = () => Promise.resolve()),
      (this.appCheckCredentialListener = () => Promise.resolve()),
      this.authCredentials.start(r, async (s) => {
        D("FirestoreClient", "Received user=", s.uid),
          await this.authCredentialListener(s),
          (this.user = s);
      }),
      this.appCheckCredentials.start(
        r,
        (s) => (
          D("FirestoreClient", "Received new app check token=", s),
          this.appCheckCredentialListener(s, this.user)
        ),
      );
  }
  get configuration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100,
    };
  }
  setCredentialChangeListener(t) {
    this.authCredentialListener = t;
  }
  setAppCheckTokenChangeListener(t) {
    this.appCheckCredentialListener = t;
  }
  verifyNotTerminated() {
    if (this.asyncQueue.isShuttingDown)
      throw new M(
        S.FAILED_PRECONDITION,
        "The client has already been terminated.",
      );
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const t = new $n();
    return (
      this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
        try {
          this._onlineComponents && (await this._onlineComponents.terminate()),
            this._offlineComponents &&
              (await this._offlineComponents.terminate()),
            this.authCredentials.shutdown(),
            this.appCheckCredentials.shutdown(),
            t.resolve();
        } catch (n) {
          const r = b0(n, "Failed to shutdown persistence");
          t.reject(r);
        }
      }),
      t.promise
    );
  }
}
async function Cu(e, t) {
  e.asyncQueue.verifyOperationInProgress(),
    D("FirestoreClient", "Initializing OfflineComponentProvider");
  const n = e.configuration;
  await t.initialize(n);
  let r = n.initialUser;
  e.setCredentialChangeListener(async (i) => {
    r.isEqual(i) || (await $0(t.localStore, i), (r = i));
  }),
    t.persistence.setDatabaseDeletedListener(() => e.terminate()),
    (e._offlineComponents = t);
}
async function Yp(e, t) {
  e.asyncQueue.verifyOperationInProgress();
  const n = await WR(e);
  D("FirestoreClient", "Initializing OnlineComponentProvider"),
    await t.initialize(n, e.configuration),
    e.setCredentialChangeListener((r) => Qp(t.remoteStore, r)),
    e.setAppCheckTokenChangeListener((r, i) => Qp(t.remoteStore, i)),
    (e._onlineComponents = t);
}
function HR(e) {
  return e.name === "FirebaseError"
    ? e.code === S.FAILED_PRECONDITION || e.code === S.UNIMPLEMENTED
    : !(typeof DOMException < "u" && e instanceof DOMException) ||
        e.code === 22 ||
        e.code === 20 ||
        e.code === 11;
}
async function WR(e) {
  if (!e._offlineComponents)
    if (e._uninitializedComponentsProvider) {
      D("FirestoreClient", "Using user provided OfflineComponentProvider");
      try {
        await Cu(e, e._uninitializedComponentsProvider._offline);
      } catch (t) {
        const n = t;
        if (!HR(n)) throw n;
        Ol(
          "Error using user provided cache. Falling back to memory cache: " + n,
        ),
          await Cu(e, new Xp());
      }
    } else
      D("FirestoreClient", "Using default OfflineComponentProvider"),
        await Cu(e, new Xp());
  return e._offlineComponents;
}
async function KR(e) {
  return (
    e._onlineComponents ||
      (e._uninitializedComponentsProvider
        ? (D("FirestoreClient", "Using user provided OnlineComponentProvider"),
          await Yp(e, e._uninitializedComponentsProvider._online))
        : (D("FirestoreClient", "Using default OnlineComponentProvider"),
          await Yp(e, new zR()))),
    e._onlineComponents
  );
}
function qR(e) {
  return KR(e).then((t) => t.syncEngine);
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function K0(e) {
  const t = {};
  return (
    e.timeoutSeconds !== void 0 && (t.timeoutSeconds = e.timeoutSeconds), t
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Jp = new Map();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function q0(e, t, n) {
  if (!n)
    throw new M(
      S.INVALID_ARGUMENT,
      `Function ${e}() cannot be called with an empty ${t}.`,
    );
}
function QR(e, t, n, r) {
  if (t === !0 && r === !0)
    throw new M(S.INVALID_ARGUMENT, `${e} and ${n} cannot be used together.`);
}
function Zp(e) {
  if (!j.isDocumentKey(e))
    throw new M(
      S.INVALID_ARGUMENT,
      `Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`,
    );
}
function em(e) {
  if (j.isDocumentKey(e))
    throw new M(
      S.INVALID_ARGUMENT,
      `Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`,
    );
}
function Mf(e) {
  if (e === void 0) return "undefined";
  if (e === null) return "null";
  if (typeof e == "string")
    return e.length > 20 && (e = `${e.substring(0, 20)}...`), JSON.stringify(e);
  if (typeof e == "number" || typeof e == "boolean") return "" + e;
  if (typeof e == "object") {
    if (e instanceof Array) return "an array";
    {
      const t = (function (r) {
        return r.constructor ? r.constructor.name : null;
      })(e);
      return t ? `a custom ${t} object` : "an object";
    }
  }
  return typeof e == "function" ? "a function" : z();
}
function Q0(e, t) {
  if (("_delegate" in e && (e = e._delegate), !(e instanceof t))) {
    if (t.name === e.constructor.name)
      throw new M(
        S.INVALID_ARGUMENT,
        "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?",
      );
    {
      const n = Mf(e);
      throw new M(
        S.INVALID_ARGUMENT,
        `Expected type '${t.name}', but it was: ${n}`,
      );
    }
  }
  return e;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tm {
  constructor(t) {
    var n, r;
    if (t.host === void 0) {
      if (t.ssl !== void 0)
        throw new M(
          S.INVALID_ARGUMENT,
          "Can't provide ssl option if host option is not set",
        );
      (this.host = "firestore.googleapis.com"), (this.ssl = !0);
    } else
      (this.host = t.host),
        (this.ssl = (n = t.ssl) === null || n === void 0 || n);
    if (
      ((this.credentials = t.credentials),
      (this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties),
      (this.localCache = t.localCache),
      t.cacheSizeBytes === void 0)
    )
      this.cacheSizeBytes = 41943040;
    else {
      if (t.cacheSizeBytes !== -1 && t.cacheSizeBytes < 1048576)
        throw new M(
          S.INVALID_ARGUMENT,
          "cacheSizeBytes must be at least 1048576",
        );
      this.cacheSizeBytes = t.cacheSizeBytes;
    }
    QR(
      "experimentalForceLongPolling",
      t.experimentalForceLongPolling,
      "experimentalAutoDetectLongPolling",
      t.experimentalAutoDetectLongPolling,
    ),
      (this.experimentalForceLongPolling = !!t.experimentalForceLongPolling),
      this.experimentalForceLongPolling
        ? (this.experimentalAutoDetectLongPolling = !1)
        : t.experimentalAutoDetectLongPolling === void 0
          ? (this.experimentalAutoDetectLongPolling = !0)
          : (this.experimentalAutoDetectLongPolling =
              !!t.experimentalAutoDetectLongPolling),
      (this.experimentalLongPollingOptions = K0(
        (r = t.experimentalLongPollingOptions) !== null && r !== void 0
          ? r
          : {},
      )),
      (function (s) {
        if (s.timeoutSeconds !== void 0) {
          if (isNaN(s.timeoutSeconds))
            throw new M(
              S.INVALID_ARGUMENT,
              `invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`,
            );
          if (s.timeoutSeconds < 5)
            throw new M(
              S.INVALID_ARGUMENT,
              `invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`,
            );
          if (s.timeoutSeconds > 30)
            throw new M(
              S.INVALID_ARGUMENT,
              `invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`,
            );
        }
      })(this.experimentalLongPollingOptions),
      (this.useFetchStreams = !!t.useFetchStreams);
  }
  isEqual(t) {
    return (
      this.host === t.host &&
      this.ssl === t.ssl &&
      this.credentials === t.credentials &&
      this.cacheSizeBytes === t.cacheSizeBytes &&
      this.experimentalForceLongPolling === t.experimentalForceLongPolling &&
      this.experimentalAutoDetectLongPolling ===
        t.experimentalAutoDetectLongPolling &&
      (function (r, i) {
        return r.timeoutSeconds === i.timeoutSeconds;
      })(
        this.experimentalLongPollingOptions,
        t.experimentalLongPollingOptions,
      ) &&
      this.ignoreUndefinedProperties === t.ignoreUndefinedProperties &&
      this.useFetchStreams === t.useFetchStreams
    );
  }
}
class La {
  constructor(t, n, r, i) {
    (this._authCredentials = t),
      (this._appCheckCredentials = n),
      (this._databaseId = r),
      (this._app = i),
      (this.type = "firestore-lite"),
      (this._persistenceKey = "(lite)"),
      (this._settings = new tm({})),
      (this._settingsFrozen = !1);
  }
  get app() {
    if (!this._app)
      throw new M(
        S.FAILED_PRECONDITION,
        "Firestore was not initialized using the Firebase SDK. 'app' is not available",
      );
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return this._terminateTask !== void 0;
  }
  _setSettings(t) {
    if (this._settingsFrozen)
      throw new M(
        S.FAILED_PRECONDITION,
        "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.",
      );
    (this._settings = new tm(t)),
      t.credentials !== void 0 &&
        (this._authCredentials = (function (r) {
          if (!r) return new $A();
          switch (r.type) {
            case "firstParty":
              return new BA(
                r.sessionIndex || "0",
                r.iamToken || null,
                r.authTokenFactory || null,
              );
            case "provider":
              return r.client;
            default:
              throw new M(
                S.INVALID_ARGUMENT,
                "makeAuthCredentialsProvider failed due to invalid credential type",
              );
          }
        })(t.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _freezeSettings() {
    return (this._settingsFrozen = !0), this._settings;
  }
  _delete() {
    return (
      this._terminateTask || (this._terminateTask = this._terminate()),
      this._terminateTask
    );
  }
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings,
    };
  }
  _terminate() {
    return (
      (function (n) {
        const r = Jp.get(n);
        r &&
          (D("ComponentProvider", "Removing Datastore"),
          Jp.delete(n),
          r.terminate());
      })(this),
      Promise.resolve()
    );
  }
}
function GR(e, t, n, r = {}) {
  var i;
  const s = (e = Q0(e, La))._getSettings(),
    o = `${t}:${n}`;
  if (
    (s.host !== "firestore.googleapis.com" &&
      s.host !== o &&
      Ol(
        "Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.",
      ),
    e._setSettings(Object.assign(Object.assign({}, s), { host: o, ssl: !1 })),
    r.mockUserToken)
  ) {
    let l, a;
    if (typeof r.mockUserToken == "string")
      (l = r.mockUserToken), (a = ze.MOCK_USER);
    else {
      l = Ly(
        r.mockUserToken,
        (i = e._app) === null || i === void 0 ? void 0 : i.options.projectId,
      );
      const u = r.mockUserToken.sub || r.mockUserToken.user_id;
      if (!u)
        throw new M(
          S.INVALID_ARGUMENT,
          "mockUserToken must contain 'sub' or 'user_id' field!",
        );
      a = new ze(u);
    }
    e._authCredentials = new FA(new a0(l, a));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $f {
  constructor(t, n, r) {
    (this.converter = n),
      (this._query = r),
      (this.type = "query"),
      (this.firestore = t);
  }
  withConverter(t) {
    return new $f(this.firestore, t, this._query);
  }
}
class on {
  constructor(t, n, r) {
    (this.converter = n),
      (this._key = r),
      (this.type = "document"),
      (this.firestore = t);
  }
  get _path() {
    return this._key.path;
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get path() {
    return this._key.path.canonicalString();
  }
  get parent() {
    return new Fn(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(t) {
    return new on(this.firestore, t, this._key);
  }
}
class Fn extends $f {
  constructor(t, n, r) {
    super(t, n, mC(r)), (this._path = r), (this.type = "collection");
  }
  get id() {
    return this._query.path.lastSegment();
  }
  get path() {
    return this._query.path.canonicalString();
  }
  get parent() {
    const t = this._path.popLast();
    return t.isEmpty() ? null : new on(this.firestore, null, new j(t));
  }
  withConverter(t) {
    return new Fn(this.firestore, t, this._path);
  }
}
function XR(e, t, ...n) {
  if (((e = Bn(e)), q0("collection", "path", t), e instanceof La)) {
    const r = ce.fromString(t, ...n);
    return em(r), new Fn(e, null, r);
  }
  {
    if (!(e instanceof on || e instanceof Fn))
      throw new M(
        S.INVALID_ARGUMENT,
        "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore",
      );
    const r = e._path.child(ce.fromString(t, ...n));
    return em(r), new Fn(e.firestore, null, r);
  }
}
function YR(e, t, ...n) {
  if (
    ((e = Bn(e)),
    arguments.length === 1 && (t = u0.newId()),
    q0("doc", "path", t),
    e instanceof La)
  ) {
    const r = ce.fromString(t, ...n);
    return Zp(r), new on(e, null, new j(r));
  }
  {
    if (!(e instanceof on || e instanceof Fn))
      throw new M(
        S.INVALID_ARGUMENT,
        "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore",
      );
    const r = e._path.child(ce.fromString(t, ...n));
    return (
      Zp(r), new on(e.firestore, e instanceof Fn ? e.converter : null, new j(r))
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class JR {
  constructor() {
    (this.Xa = Promise.resolve()),
      (this.eu = []),
      (this.tu = !1),
      (this.nu = []),
      (this.ru = null),
      (this.iu = !1),
      (this.su = !1),
      (this.ou = []),
      (this.jo = new F0(this, "async_queue_retry")),
      (this._u = () => {
        const n = Au();
        n &&
          D("AsyncQueue", "Visibility state changed to " + n.visibilityState),
          this.jo.Ko();
      });
    const t = Au();
    t &&
      typeof t.addEventListener == "function" &&
      t.addEventListener("visibilitychange", this._u);
  }
  get isShuttingDown() {
    return this.tu;
  }
  enqueueAndForget(t) {
    this.enqueue(t);
  }
  enqueueAndForgetEvenWhileRestricted(t) {
    this.au(), this.uu(t);
  }
  enterRestrictedMode(t) {
    if (!this.tu) {
      (this.tu = !0), (this.su = t || !1);
      const n = Au();
      n &&
        typeof n.removeEventListener == "function" &&
        n.removeEventListener("visibilitychange", this._u);
    }
  }
  enqueue(t) {
    if ((this.au(), this.tu)) return new Promise(() => {});
    const n = new $n();
    return this.uu(() =>
      this.tu && this.su
        ? Promise.resolve()
        : (t().then(n.resolve, n.reject), n.promise),
    ).then(() => n.promise);
  }
  enqueueRetryable(t) {
    this.enqueueAndForget(() => (this.eu.push(t), this.cu()));
  }
  async cu() {
    if (this.eu.length !== 0) {
      try {
        await this.eu[0](), this.eu.shift(), this.jo.reset();
      } catch (t) {
        if (!Ra(t)) throw t;
        D("AsyncQueue", "Operation failed with retryable error: " + t);
      }
      this.eu.length > 0 && this.jo.qo(() => this.cu());
    }
  }
  uu(t) {
    const n = this.Xa.then(
      () => (
        (this.iu = !0),
        t()
          .catch((r) => {
            (this.ru = r), (this.iu = !1);
            const i = (function (o) {
              let l = o.message || "";
              return (
                o.stack &&
                  (l = o.stack.includes(o.message)
                    ? o.stack
                    : o.message +
                      `
` +
                      o.stack),
                l
              );
            })(r);
            throw (zn("INTERNAL UNHANDLED ERROR: ", i), r);
          })
          .then((r) => ((this.iu = !1), r))
      ),
    );
    return (this.Xa = n), n;
  }
  enqueueAfterDelay(t, n, r) {
    this.au(), this.ou.indexOf(t) > -1 && (n = 0);
    const i = Lf.createAndSchedule(this, t, n, r, (s) => this.lu(s));
    return this.nu.push(i), i;
  }
  au() {
    this.ru && z();
  }
  verifyOperationInProgress() {}
  async hu() {
    let t;
    do (t = this.Xa), await t;
    while (t !== this.Xa);
  }
  Pu(t) {
    for (const n of this.nu) if (n.timerId === t) return !0;
    return !1;
  }
  Iu(t) {
    return this.hu().then(() => {
      this.nu.sort((n, r) => n.targetTimeMs - r.targetTimeMs);
      for (const n of this.nu)
        if ((n.skipDelay(), t !== "all" && n.timerId === t)) break;
      return this.hu();
    });
  }
  Tu(t) {
    this.ou.push(t);
  }
  lu(t) {
    const n = this.nu.indexOf(t);
    this.nu.splice(n, 1);
  }
}
class G0 extends La {
  constructor(t, n, r, i) {
    super(t, n, r, i),
      (this.type = "firestore"),
      (this._queue = (function () {
        return new JR();
      })()),
      (this._persistenceKey = (i == null ? void 0 : i.name) || "[DEFAULT]");
  }
  _terminate() {
    return this._firestoreClient || X0(this), this._firestoreClient.terminate();
  }
}
function ZR(e, t) {
  const n = typeof e == "object" ? e : Hy(),
    r = typeof e == "string" ? e : t || "(default)",
    i = By(n, "firestore").getImmediate({ identifier: r });
  if (!i._initialized) {
    const s = Oy("firestore");
    s && GR(i, ...s);
  }
  return i;
}
function e2(e) {
  return (
    e._firestoreClient || X0(e),
    e._firestoreClient.verifyNotTerminated(),
    e._firestoreClient
  );
}
function X0(e) {
  var t, n, r;
  const i = e._freezeSettings(),
    s = (function (l, a, u, c) {
      return new nC(
        l,
        a,
        u,
        c.host,
        c.ssl,
        c.experimentalForceLongPolling,
        c.experimentalAutoDetectLongPolling,
        K0(c.experimentalLongPollingOptions),
        c.useFetchStreams,
      );
    })(
      e._databaseId,
      ((t = e._app) === null || t === void 0 ? void 0 : t.options.appId) || "",
      e._persistenceKey,
      i,
    );
  (e._firestoreClient = new bR(
    e._authCredentials,
    e._appCheckCredentials,
    e._queue,
    s,
  )),
    !((n = i.localCache) === null || n === void 0) &&
      n._offlineComponentProvider &&
      !((r = i.localCache) === null || r === void 0) &&
      r._onlineComponentProvider &&
      (e._firestoreClient._uninitializedComponentsProvider = {
        _offlineKind: i.localCache.kind,
        _offline: i.localCache._offlineComponentProvider,
        _online: i.localCache._onlineComponentProvider,
      });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Bs {
  constructor(t) {
    this._byteString = t;
  }
  static fromBase64String(t) {
    try {
      return new Bs(fn.fromBase64String(t));
    } catch (n) {
      throw new M(
        S.INVALID_ARGUMENT,
        "Failed to construct data from Base64 string: " + n,
      );
    }
  }
  static fromUint8Array(t) {
    return new Bs(fn.fromUint8Array(t));
  }
  toBase64() {
    return this._byteString.toBase64();
  }
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  toString() {
    return "Bytes(base64: " + this.toBase64() + ")";
  }
  isEqual(t) {
    return this._byteString.isEqual(t._byteString);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Y0 {
  constructor(...t) {
    for (let n = 0; n < t.length; ++n)
      if (t[n].length === 0)
        throw new M(
          S.INVALID_ARGUMENT,
          "Invalid field name at argument $(i + 1). Field names must not be empty.",
        );
    this._internalPath = new Le(t);
  }
  isEqual(t) {
    return this._internalPath.isEqual(t._internalPath);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class J0 {
  constructor(t) {
    this._methodName = t;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Z0 {
  constructor(t, n) {
    if (!isFinite(t) || t < -90 || t > 90)
      throw new M(
        S.INVALID_ARGUMENT,
        "Latitude must be a number between -90 and 90, but was: " + t,
      );
    if (!isFinite(n) || n < -180 || n > 180)
      throw new M(
        S.INVALID_ARGUMENT,
        "Longitude must be a number between -180 and 180, but was: " + n,
      );
    (this._lat = t), (this._long = n);
  }
  get latitude() {
    return this._lat;
  }
  get longitude() {
    return this._long;
  }
  isEqual(t) {
    return this._lat === t._lat && this._long === t._long;
  }
  toJSON() {
    return { latitude: this._lat, longitude: this._long };
  }
  _compareTo(t) {
    return J(this._lat, t._lat) || J(this._long, t._long);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const t2 = /^__.*__$/;
class n2 {
  constructor(t, n, r) {
    (this.data = t), (this.fieldMask = n), (this.fieldTransforms = r);
  }
  toMutation(t, n) {
    return this.fieldMask !== null
      ? new kr(t, this.data, this.fieldMask, n, this.fieldTransforms)
      : new no(t, this.data, n, this.fieldTransforms);
  }
}
function e_(e) {
  switch (e) {
    case 0:
    case 2:
    case 1:
      return !0;
    case 3:
    case 4:
      return !1;
    default:
      throw z();
  }
}
class Ff {
  constructor(t, n, r, i, s, o) {
    (this.settings = t),
      (this.databaseId = n),
      (this.serializer = r),
      (this.ignoreUndefinedProperties = i),
      s === void 0 && this.Eu(),
      (this.fieldTransforms = s || []),
      (this.fieldMask = o || []);
  }
  get path() {
    return this.settings.path;
  }
  get du() {
    return this.settings.du;
  }
  Au(t) {
    return new Ff(
      Object.assign(Object.assign({}, this.settings), t),
      this.databaseId,
      this.serializer,
      this.ignoreUndefinedProperties,
      this.fieldTransforms,
      this.fieldMask,
    );
  }
  Ru(t) {
    var n;
    const r = (n = this.path) === null || n === void 0 ? void 0 : n.child(t),
      i = this.Au({ path: r, Vu: !1 });
    return i.mu(t), i;
  }
  fu(t) {
    var n;
    const r = (n = this.path) === null || n === void 0 ? void 0 : n.child(t),
      i = this.Au({ path: r, Vu: !1 });
    return i.Eu(), i;
  }
  gu(t) {
    return this.Au({ path: void 0, Vu: !0 });
  }
  pu(t) {
    return zl(
      t,
      this.settings.methodName,
      this.settings.yu || !1,
      this.path,
      this.settings.wu,
    );
  }
  contains(t) {
    return (
      this.fieldMask.find((n) => t.isPrefixOf(n)) !== void 0 ||
      this.fieldTransforms.find((n) => t.isPrefixOf(n.field)) !== void 0
    );
  }
  Eu() {
    if (this.path)
      for (let t = 0; t < this.path.length; t++) this.mu(this.path.get(t));
  }
  mu(t) {
    if (t.length === 0) throw this.pu("Document fields must not be empty");
    if (e_(this.du) && t2.test(t))
      throw this.pu('Document fields cannot begin and end with "__"');
  }
}
class r2 {
  constructor(t, n, r) {
    (this.databaseId = t),
      (this.ignoreUndefinedProperties = n),
      (this.serializer = r || Na(t));
  }
  Su(t, n, r, i = !1) {
    return new Ff(
      { du: t, methodName: n, wu: r, path: Le.emptyPath(), Vu: !1, yu: i },
      this.databaseId,
      this.serializer,
      this.ignoreUndefinedProperties,
    );
  }
}
function i2(e) {
  const t = e._freezeSettings(),
    n = Na(e._databaseId);
  return new r2(e._databaseId, !!t.ignoreUndefinedProperties, n);
}
function s2(e, t, n, r, i, s = {}) {
  const o = e.Su(s.merge || s.mergeFields ? 2 : 0, t, n, i);
  i_("Data must be an object, but it was:", o, r);
  const l = n_(r, o);
  let a, u;
  if (s.merge) (a = new Mt(o.fieldMask)), (u = o.fieldTransforms);
  else if (s.mergeFields) {
    const c = [];
    for (const h of s.mergeFields) {
      const d = o2(t, h, n);
      if (!o.contains(d))
        throw new M(
          S.INVALID_ARGUMENT,
          `Field '${d}' is specified in your field mask but missing from your input data.`,
        );
      u2(c, d) || c.push(d);
    }
    (a = new Mt(c)), (u = o.fieldTransforms.filter((h) => a.covers(h.field)));
  } else (a = null), (u = o.fieldTransforms);
  return new n2(new Lt(l), a, u);
}
function t_(e, t) {
  if (r_((e = Bn(e)))) return i_("Unsupported field value:", t, e), n_(e, t);
  if (e instanceof J0)
    return (
      (function (r, i) {
        if (!e_(i.du))
          throw i.pu(
            `${r._methodName}() can only be used with update() and set()`,
          );
        if (!i.path)
          throw i.pu(
            `${r._methodName}() is not currently supported inside arrays`,
          );
        const s = r._toFieldTransform(i);
        s && i.fieldTransforms.push(s);
      })(e, t),
      null
    );
  if (e === void 0 && t.ignoreUndefinedProperties) return null;
  if ((t.path && t.fieldMask.push(t.path), e instanceof Array)) {
    if (t.settings.Vu && t.du !== 4)
      throw t.pu("Nested arrays are not supported");
    return (function (r, i) {
      const s = [];
      let o = 0;
      for (const l of r) {
        let a = t_(l, i.gu(o));
        a == null && (a = { nullValue: "NULL_VALUE" }), s.push(a), o++;
      }
      return { arrayValue: { values: s } };
    })(e, t);
  }
  return (function (r, i) {
    if ((r = Bn(r)) === null) return { nullValue: "NULL_VALUE" };
    if (typeof r == "number") return AC(i.serializer, r);
    if (typeof r == "boolean") return { booleanValue: r };
    if (typeof r == "string") return { stringValue: r };
    if (r instanceof Date) {
      const s = Ce.fromDate(r);
      return { timestampValue: Qc(i.serializer, s) };
    }
    if (r instanceof Ce) {
      const s = new Ce(r.seconds, 1e3 * Math.floor(r.nanoseconds / 1e3));
      return { timestampValue: Qc(i.serializer, s) };
    }
    if (r instanceof Z0)
      return {
        geoPointValue: { latitude: r.latitude, longitude: r.longitude },
      };
    if (r instanceof Bs) return { bytesValue: FC(i.serializer, r._byteString) };
    if (r instanceof on) {
      const s = i.databaseId,
        o = r.firestore._databaseId;
      if (!o.isEqual(s))
        throw i.pu(
          `Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`,
        );
      return {
        referenceValue: L0(
          r.firestore._databaseId || i.databaseId,
          r._key.path,
        ),
      };
    }
    throw i.pu(`Unsupported field value: ${Mf(r)}`);
  })(e, t);
}
function n_(e, t) {
  const n = {};
  return (
    f0(e)
      ? t.path && t.path.length > 0 && t.fieldMask.push(t.path)
      : to(e, (r, i) => {
          const s = t_(i, t.Ru(r));
          s != null && (n[r] = s);
        }),
    { mapValue: { fields: n } }
  );
}
function r_(e) {
  return !(
    typeof e != "object" ||
    e === null ||
    e instanceof Array ||
    e instanceof Date ||
    e instanceof Ce ||
    e instanceof Z0 ||
    e instanceof Bs ||
    e instanceof on ||
    e instanceof J0
  );
}
function i_(e, t, n) {
  if (
    !r_(n) ||
    !(function (i) {
      return (
        typeof i == "object" &&
        i !== null &&
        (Object.getPrototypeOf(i) === Object.prototype ||
          Object.getPrototypeOf(i) === null)
      );
    })(n)
  ) {
    const r = Mf(n);
    throw r === "an object" ? t.pu(e + " a custom object") : t.pu(e + " " + r);
  }
}
function o2(e, t, n) {
  if ((t = Bn(t)) instanceof Y0) return t._internalPath;
  if (typeof t == "string") return a2(e, t);
  throw zl("Field path arguments must be of type string or ", e, !1, void 0, n);
}
const l2 = new RegExp("[~\\*/\\[\\]]");
function a2(e, t, n) {
  if (t.search(l2) >= 0)
    throw zl(
      `Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,
      e,
      !1,
      void 0,
      n,
    );
  try {
    return new Y0(...t.split("."))._internalPath;
  } catch {
    throw zl(
      `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      e,
      !1,
      void 0,
      n,
    );
  }
}
function zl(e, t, n, r, i) {
  const s = r && !r.isEmpty(),
    o = i !== void 0;
  let l = `Function ${t}() called with invalid data`;
  n && (l += " (via `toFirestore()`)"), (l += ". ");
  let a = "";
  return (
    (s || o) &&
      ((a += " (found"),
      s && (a += ` in field ${r}`),
      o && (a += ` in document ${i}`),
      (a += ")")),
    new M(S.INVALID_ARGUMENT, l + e + a)
  );
}
function u2(e, t) {
  return e.some((n) => n.isEqual(t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function c2(e, t, n) {
  let r;
  return (
    (r = e
      ? n && (n.merge || n.mergeFields)
        ? e.toFirestore(t, n)
        : e.toFirestore(t)
      : t),
    r
  );
}
function h2(e, t) {
  const n = Q0(e.firestore, G0),
    r = YR(e),
    i = c2(e.converter, t);
  return f2(n, [
    s2(
      i2(e.firestore),
      "addDoc",
      r._key,
      i,
      e.converter !== null,
      {},
    ).toMutation(r._key, sn.exists(!1)),
  ]).then(() => r);
}
function f2(e, t) {
  return (function (r, i) {
    const s = new $n();
    return (
      r.asyncQueue.enqueueAndForget(async () => $R(await qR(r), i, s)),
      s.promise
    );
  })(e2(e), t);
}
(function (t, n = !0) {
  (function (i) {
    Ei = i;
  })(zy),
    Cs(
      new li(
        "firestore",
        (r, { instanceIdentifier: i, options: s }) => {
          const o = r.getProvider("app").getImmediate(),
            l = new G0(
              new UA(r.getProvider("auth-internal")),
              new bA(r.getProvider("app-check-internal")),
              (function (u, c) {
                if (
                  !Object.prototype.hasOwnProperty.apply(u.options, [
                    "projectId",
                  ])
                )
                  throw new M(
                    S.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.',
                  );
                return new Ml(u.options.projectId, c);
              })(o, i),
              o,
            );
          return (
            (s = Object.assign({ useFetchStreams: n }, s)), l._setSettings(s), l
          );
        },
        "PUBLIC",
      ).setMultipleInstances(!0),
    ),
    Mn(Dp, "4.4.1", t),
    Mn(Dp, "4.4.1", "esm2017");
})();
const d2 = {
    apiKey: "AIzaSyALHyAQu2GpHbcw69K-2EobMO88u95aYg0",
    authDomain: "the-walking-closet.firebaseapp.com",
    projectId: "the-walking-closet",
    storageBucket: "the-walking-closet.appspot.com",
    messagingSenderId: "555584285032",
    appId: "1:555584285032:web:81799c63fd7587e2ae4edd",
  },
  p2 = by(d2),
  m2 = ZR(p2),
  s_ = RS(),
  g2 = async (e, t, n, r, i, s) => {
    try {
      return await h2(XR(m2, "Orders"), {
        Organization: e,
        "Contact Number": t,
        email: n,
        quantity: r,
        instructions: i,
        address: s,
      });
    } catch (o) {
      console.log(o);
    }
  },
  y2 = async (e, t) => {
    try {
      await rv(iv(s_, `${e}/files/details`), t);
    } catch (n) {
      console.log(n);
    }
  },
  v2 = async (e, t) => {
    try {
      await rv(iv(s_, `${e}/images/design`), t);
    } catch (n) {
      console.log(n);
    }
  };
var o_ = { exports: {} },
  _2 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  E2 = _2,
  w2 = E2;
function l_() {}
function a_() {}
a_.resetWarningCache = l_;
var T2 = function () {
  function e(r, i, s, o, l, a) {
    if (a !== w2) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: a_,
    resetWarningCache: l_,
  };
  return (n.PropTypes = n), n;
};
o_.exports = T2();
var I2 = o_.exports;
const Ru = nm(I2),
  S2 = "_overlay_nsqq1_1",
  A2 = "_popup_nsqq1_25",
  C2 = "_close_nsqq1_57",
  R2 = "_content_nsqq1_85",
  Mo = { overlay: S2, popup: A2, close: C2, content: R2 },
  u_ = (e) => {
    const [t, n] = C.useState(!1),
      r = (i) => {
        n(!1), e.onClose(!1);
      };
    return (
      C.useEffect(() => {
        n(e.show);
      }, [e.show]),
      E.jsx("div", {
        style: { visibility: t ? "visible" : "hidden", opacity: t ? "1" : "0" },
        className: Mo.overlay,
        children: E.jsxs("div", {
          className: Mo.popup,
          children: [
            E.jsx("h2", { children: e.title }),
            E.jsx("span", { className: Mo.close, onClick: r, children: "×" }),
            E.jsx("div", { className: Mo.content, children: e.children }),
          ],
        }),
      })
    );
  };
u_.propTypes = {
  title: Ru.string.isRequired,
  show: Ru.bool.isRequired,
  onClose: Ru.func.isRequired,
};
const P2 = () => {
    const [e, t] = C.useState(),
      [n, r] = C.useState(),
      [i, s] = C.useState(),
      [o, l] = C.useState(),
      [a, u] = C.useState(),
      [c, h] = C.useState(),
      [d, g] = C.useState(),
      [y, v] = C.useState(),
      [w, p] = C.useState(!1),
      [f, m] = C.useState(""),
      [_, R] = C.useState(),
      k = qh();
    pw();
    const P = async () => {
        if (
          e == null ||
          n == null ||
          i == null ||
          o == null ||
          a == null ||
          c == null ||
          d == null ||
          y == null
        )
          p(!w),
            m("Empty Fields"),
            R("Please fill all the fields"),
            console.log(w);
        else
          try {
            await g2(e, n, i, o, a, c),
              await y2(e, d),
              await v2(e, y),
              k("/thanks");
          } catch (O) {
            p(!w), m("Submission Failed"), R(O.message);
          }
      },
      I = () => {
        p(!w);
      };
    return E.jsxs(E.Fragment, {
      children: [
        E.jsx(ca, {}),
        E.jsxs("form", {
          children: [
            E.jsx(u_, { onClose: I, show: w, title: f, children: _ }),
            E.jsxs("col-left", {
              children: [
                E.jsxs("order-details", {
                  children: [
                    E.jsx("h1", { children: "Order Details" }),
                    E.jsxs("input-field", {
                      children: [
                        E.jsx("label", {
                          htmlFor: "name",
                          children: "Club/Project Name:",
                        }),
                        E.jsx("input", {
                          type: "text",
                          id: "name",
                          onChange: (O) => t(O.target.value),
                        }),
                      ],
                    }),
                    E.jsxs("input-field", {
                      children: [
                        E.jsx("label", {
                          htmlFor: "contact",
                          children: "Contact Number:",
                        }),
                        E.jsx("input", {
                          type: "text",
                          id: "contact",
                          onChange: (O) => r(O.target.value),
                        }),
                      ],
                    }),
                    E.jsxs("input-field", {
                      children: [
                        E.jsx("label", {
                          htmlFor: "email",
                          children: "Email:",
                        }),
                        E.jsx("input", {
                          type: "email",
                          id: "email",
                          onChange: (O) => s(O.target.value),
                        }),
                      ],
                    }),
                  ],
                }),
                E.jsxs("shipping-details", {
                  children: [
                    E.jsx("h1", { children: "Shipping Details" }),
                    E.jsxs("input-field", {
                      children: [
                        E.jsx("label", {
                          htmlFor: "address",
                          children: "Shipping Address:",
                        }),
                        E.jsx("input", {
                          type: "text",
                          id: "address",
                          onChange: (O) => h(O.target.value),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            E.jsx("border-line", {}),
            E.jsxs("col-right", {
              children: [
                E.jsx("filler-image", {
                  children: E.jsx("img", { src: Hw, alt: "" }),
                }),
                E.jsxs("design-details", {
                  children: [
                    E.jsx("h1", { children: "Design Details" }),
                    E.jsxs("input-field", {
                      children: [
                        E.jsx("label", {
                          htmlFor: "order quantity",
                          children: "Order quantity:",
                        }),
                        E.jsx("input", {
                          type: "number",
                          id: "quantity",
                          onChange: (O) => l(O.target.value),
                        }),
                      ],
                    }),
                    E.jsxs("input-field", {
                      children: [
                        E.jsx("label", {
                          htmlFor: "instructions",
                          children: "Specific Instructions:",
                        }),
                        E.jsx("input", {
                          type: "text",
                          id: "instructions",
                          onChange: (O) => u(O.target.value),
                        }),
                      ],
                    }),
                    E.jsx("upload-files", {
                      children: E.jsxs("input-field", {
                        children: [
                          E.jsx("label", {
                            htmlFor: "details",
                            children: "Tshirt details (.xls):",
                          }),
                          E.jsxs("upload-input", {
                            children: [
                              E.jsx("file-name", {
                                children: d == null ? void 0 : d.name,
                              }),
                              E.jsxs("label", {
                                className: "upload-file",
                                htmlFor: "formId1",
                                children: [
                                  "Upload",
                                  E.jsx("input", {
                                    name: "",
                                    type: "file",
                                    id: "formId1",
                                    hidden: !0,
                                    onChange: (O) => g(O.target.files[0]),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    E.jsx("upload-files", {
                      children: E.jsxs("input-field", {
                        children: [
                          E.jsx("label", {
                            htmlFor: "design",
                            children: "Design (.jpg):",
                          }),
                          E.jsxs("upload-input", {
                            children: [
                              E.jsx("file-name", {
                                children: y == null ? void 0 : y.name,
                              }),
                              E.jsxs("label", {
                                className: "upload-file",
                                htmlFor: "formId2",
                                children: [
                                  "Upload",
                                  E.jsx("input", {
                                    name: "",
                                    type: "file",
                                    id: "formId2",
                                    hidden: !0,
                                    onChange: (O) => v(O.target.files[0]),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    E.jsx("submit-button", {
                      children: E.jsx("button", {
                        onClick: P,
                        type: "button",
                        formTarget: "_top",
                        children: "Submit",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            E.jsx("input-fields", {}),
          ],
        }),
      ],
    });
  },
  k2 = () =>
    E.jsxs("thankspage", {
      children: [
        E.jsx(ca, {}),
        E.jsxs("message", {
          children: [
            E.jsx("heading", { children: "Thank You" }),
            E.jsx("sub-head", {
              children: "for choosing us for your merch order",
            }),
            E.jsxs("thanks-body", {
              children: [
                E.jsxs("next", {
                  children: [
                    E.jsx("next-heading", { children: "What Happens Next?" }),
                    E.jsx("br", {}),
                    "We have received your order request and we are on it!",
                    E.jsx("br", {}),
                    "Expect to hear from us soon to confirm your order details.",
                    E.jsx("br", {}),
                    "Stay tuned! One of our team members will be reaching out to you shortly!",
                  ],
                }),
                E.jsxs("assistance", {
                  children: [
                    E.jsx("assistance-heading", {
                      children: "Need Assistance?",
                    }),
                    E.jsx("br", {}),
                    "If you have any questions or need to make changes to your order, feel free to reach out to us at ",
                    E.jsx("span", {
                      className: "email",
                      children: "thewalkincloset23@gmail.com",
                    }),
                    ".",
                  ],
                }),
                E.jsxs("greetings", {
                  children: [
                    E.jsx("greeting-heading", { children: "Thanks a Bunch!" }),
                    E.jsx("br", {}),
                    "Once again, thanks a bunch for choosing us. We are pumped to be a part of your college journey!",
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  x2 = () =>
    E.jsx("footer", {
      children: E.jsx("div", {
        className: "footer-container",
        children: E.jsx("div", {
          className: "footer-social",
          children: E.jsx("ul", {
            children: E.jsx("li", {
              children: E.jsx("a", {
                href: "https://www.instagram.com/_thewalk.incloset/",
                children: E.jsx("img", { src: qw }),
              }),
            }),
          }),
        }),
      }),
    }),
  N2 = () =>
    E.jsx("div", {
      className: "coming-soon",
      children: E.jsx("img", { src: Ww, alt: "Coming Soon" }),
    }),
  D2 = () =>
    E.jsxs(E.Fragment, {
      children: [
        E.jsx("div", { className: "navbar", children: E.jsx(ca, {}) }),
        E.jsx("div", { className: "coming-soon", children: E.jsx(N2, {}) }),
        E.jsx("div", { className: "footer", children: E.jsx(x2, {}) }),
      ],
    }),
  O2 = () =>
    E.jsx(E.Fragment, {
      children: E.jsxs(kw, {
        children: [
          E.jsx(Ui, { path: "/thanks", Component: k2 }),
          E.jsx(Ui, { path: "/order-form/:category", Component: P2 }),
          E.jsx(Ui, { path: "/bulk-order", Component: Qw }),
          E.jsx(Ui, { path: "/", Component: D2 }),
        ],
      }),
    });
Pu.createRoot(document.getElementById("root")).render(
  E.jsx(Q.StrictMode, { children: E.jsx(Nw, { children: E.jsx(O2, {}) }) }),
);
