function dm(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Pc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Rc = { exports: {} },
  Ri = {},
  Mc = { exports: {} },
  U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zr = Symbol.for("react.element"),
  fm = Symbol.for("react.portal"),
  pm = Symbol.for("react.fragment"),
  mm = Symbol.for("react.strict_mode"),
  hm = Symbol.for("react.profiler"),
  vm = Symbol.for("react.provider"),
  gm = Symbol.for("react.context"),
  ym = Symbol.for("react.forward_ref"),
  wm = Symbol.for("react.suspense"),
  xm = Symbol.for("react.memo"),
  Sm = Symbol.for("react.lazy"),
  Ga = Symbol.iterator;
function Em(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ga && e[Ga]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Nc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Tc = Object.assign,
  Oc = {};
function qn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Oc),
    (this.updater = n || Nc);
}
qn.prototype.isReactComponent = {};
qn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
qn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ac() {}
Ac.prototype = qn.prototype;
function Os(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Oc),
    (this.updater = n || Nc);
}
var As = (Os.prototype = new Ac());
As.constructor = Os;
Tc(As, qn.prototype);
As.isPureReactComponent = !0;
var Qa = Array.isArray,
  Ic = Object.prototype.hasOwnProperty,
  Is = { current: null },
  Lc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Dc(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Ic.call(t, r) && !Lc.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: Zr,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Is.current,
  };
}
function $m(e, t) {
  return {
    $$typeof: Zr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ls(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zr;
}
function Cm(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ya = /\/+/g;
function Xi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Cm("" + e.key)
    : t.toString(36);
}
function Lo(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Zr:
          case fm:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + Xi(l, 0) : r),
      Qa(o)
        ? ((n = ""),
          e != null && (n = e.replace(Ya, "$&/") + "/"),
          Lo(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Ls(o) &&
            (o = $m(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Ya, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), Qa(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var a = r + Xi(i, s);
      l += Lo(i, t, n, a, o);
    }
  else if (((a = Em(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + Xi(i, s++)), (l += Lo(i, t, n, a, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function co(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Lo(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function km(e) {
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
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var xe = { current: null },
  Do = { transition: null },
  bm = {
    ReactCurrentDispatcher: xe,
    ReactCurrentBatchConfig: Do,
    ReactCurrentOwner: Is,
  };
U.Children = {
  map: co,
  forEach: function (e, t, n) {
    co(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      co(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      co(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ls(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
U.Component = qn;
U.Fragment = pm;
U.Profiler = hm;
U.PureComponent = Os;
U.StrictMode = mm;
U.Suspense = wm;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bm;
U.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Tc({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = Is.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      Ic.call(t, a) &&
        !Lc.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: Zr, type: e.type, key: o, ref: i, props: r, _owner: l };
};
U.createContext = function (e) {
  return (
    (e = {
      $$typeof: gm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: vm, _context: e }),
    (e.Consumer = e)
  );
};
U.createElement = Dc;
U.createFactory = function (e) {
  var t = Dc.bind(null, e);
  return (t.type = e), t;
};
U.createRef = function () {
  return { current: null };
};
U.forwardRef = function (e) {
  return { $$typeof: ym, render: e };
};
U.isValidElement = Ls;
U.lazy = function (e) {
  return { $$typeof: Sm, _payload: { _status: -1, _result: e }, _init: km };
};
U.memo = function (e, t) {
  return { $$typeof: xm, type: e, compare: t === void 0 ? null : t };
};
U.startTransition = function (e) {
  var t = Do.transition;
  Do.transition = {};
  try {
    e();
  } finally {
    Do.transition = t;
  }
};
U.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
U.useCallback = function (e, t) {
  return xe.current.useCallback(e, t);
};
U.useContext = function (e) {
  return xe.current.useContext(e);
};
U.useDebugValue = function () {};
U.useDeferredValue = function (e) {
  return xe.current.useDeferredValue(e);
};
U.useEffect = function (e, t) {
  return xe.current.useEffect(e, t);
};
U.useId = function () {
  return xe.current.useId();
};
U.useImperativeHandle = function (e, t, n) {
  return xe.current.useImperativeHandle(e, t, n);
};
U.useInsertionEffect = function (e, t) {
  return xe.current.useInsertionEffect(e, t);
};
U.useLayoutEffect = function (e, t) {
  return xe.current.useLayoutEffect(e, t);
};
U.useMemo = function (e, t) {
  return xe.current.useMemo(e, t);
};
U.useReducer = function (e, t, n) {
  return xe.current.useReducer(e, t, n);
};
U.useRef = function (e) {
  return xe.current.useRef(e);
};
U.useState = function (e) {
  return xe.current.useState(e);
};
U.useSyncExternalStore = function (e, t, n) {
  return xe.current.useSyncExternalStore(e, t, n);
};
U.useTransition = function () {
  return xe.current.useTransition();
};
U.version = "18.2.0";
Mc.exports = U;
var d = Mc.exports;
const Ue = Pc(d),
  _m = dm({ __proto__: null, default: Ue }, [d]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pm = d,
  Rm = Symbol.for("react.element"),
  Mm = Symbol.for("react.fragment"),
  Nm = Object.prototype.hasOwnProperty,
  Tm = Pm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Om = { key: !0, ref: !0, __self: !0, __source: !0 };
function zc(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) Nm.call(t, r) && !Om.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Rm,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Tm.current,
  };
}
Ri.Fragment = Mm;
Ri.jsx = zc;
Ri.jsxs = zc;
Rc.exports = Ri;
var b = Rc.exports,
  Ml = {},
  jc = { exports: {} },
  ze = {},
  Fc = { exports: {} },
  Uc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, _) {
    var T = R.length;
    R.push(_);
    e: for (; 0 < T; ) {
      var L = (T - 1) >>> 1,
        V = R[L];
      if (0 < o(V, _)) (R[L] = _), (R[T] = V), (T = L);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var _ = R[0],
      T = R.pop();
    if (T !== _) {
      R[0] = T;
      e: for (var L = 0, V = R.length, Re = V >>> 1; L < Re; ) {
        var Me = 2 * (L + 1) - 1,
          Xe = R[Me],
          le = Me + 1,
          Ne = R[le];
        if (0 > o(Xe, T))
          le < V && 0 > o(Ne, Xe)
            ? ((R[L] = Ne), (R[le] = T), (L = le))
            : ((R[L] = Xe), (R[Me] = T), (L = Me));
        else if (le < V && 0 > o(Ne, T)) (R[L] = Ne), (R[le] = T), (L = le);
        else break e;
      }
    }
    return _;
  }
  function o(R, _) {
    var T = R.sortIndex - _.sortIndex;
    return T !== 0 ? T : R.id - _.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var a = [],
    u = [],
    p = 1,
    c = null,
    m = 3,
    v = !1,
    w = !1,
    y = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(R) {
    for (var _ = n(u); _ !== null; ) {
      if (_.callback === null) r(u);
      else if (_.startTime <= R)
        r(u), (_.sortIndex = _.expirationTime), t(a, _);
      else break;
      _ = n(u);
    }
  }
  function x(R) {
    if (((y = !1), g(R), !w))
      if (n(a) !== null) (w = !0), G(E);
      else {
        var _ = n(u);
        _ !== null && F(x, _.startTime - R);
      }
  }
  function E(R, _) {
    (w = !1), y && ((y = !1), h(k), (k = -1)), (v = !0);
    var T = m;
    try {
      for (
        g(_), c = n(a);
        c !== null && (!(c.expirationTime > _) || (R && !B()));

      ) {
        var L = c.callback;
        if (typeof L == "function") {
          (c.callback = null), (m = c.priorityLevel);
          var V = L(c.expirationTime <= _);
          (_ = e.unstable_now()),
            typeof V == "function" ? (c.callback = V) : c === n(a) && r(a),
            g(_);
        } else r(a);
        c = n(a);
      }
      if (c !== null) var Re = !0;
      else {
        var Me = n(u);
        Me !== null && F(x, Me.startTime - _), (Re = !1);
      }
      return Re;
    } finally {
      (c = null), (m = T), (v = !1);
    }
  }
  var C = !1,
    $ = null,
    k = -1,
    A = 5,
    N = -1;
  function B() {
    return !(e.unstable_now() - N < A);
  }
  function O() {
    if ($ !== null) {
      var R = e.unstable_now();
      N = R;
      var _ = !0;
      try {
        _ = $(!0, R);
      } finally {
        _ ? J() : ((C = !1), ($ = null));
      }
    } else C = !1;
  }
  var J;
  if (typeof f == "function")
    J = function () {
      f(O);
    };
  else if (typeof MessageChannel < "u") {
    var j = new MessageChannel(),
      W = j.port2;
    (j.port1.onmessage = O),
      (J = function () {
        W.postMessage(null);
      });
  } else
    J = function () {
      S(O, 0);
    };
  function G(R) {
    ($ = R), C || ((C = !0), J());
  }
  function F(R, _) {
    k = S(function () {
      R(e.unstable_now());
    }, _);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || v || ((w = !0), G(E));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (A = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (R) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = m;
      }
      var T = m;
      m = _;
      try {
        return R();
      } finally {
        m = T;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, _) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var T = m;
      m = R;
      try {
        return _();
      } finally {
        m = T;
      }
    }),
    (e.unstable_scheduleCallback = function (R, _, T) {
      var L = e.unstable_now();
      switch (
        (typeof T == "object" && T !== null
          ? ((T = T.delay), (T = typeof T == "number" && 0 < T ? L + T : L))
          : (T = L),
        R)
      ) {
        case 1:
          var V = -1;
          break;
        case 2:
          V = 250;
          break;
        case 5:
          V = 1073741823;
          break;
        case 4:
          V = 1e4;
          break;
        default:
          V = 5e3;
      }
      return (
        (V = T + V),
        (R = {
          id: p++,
          callback: _,
          priorityLevel: R,
          startTime: T,
          expirationTime: V,
          sortIndex: -1,
        }),
        T > L
          ? ((R.sortIndex = T),
            t(u, R),
            n(a) === null &&
              R === n(u) &&
              (y ? (h(k), (k = -1)) : (y = !0), F(x, T - L)))
          : ((R.sortIndex = V), t(a, R), w || v || ((w = !0), G(E))),
        R
      );
    }),
    (e.unstable_shouldYield = B),
    (e.unstable_wrapCallback = function (R) {
      var _ = m;
      return function () {
        var T = m;
        m = _;
        try {
          return R.apply(this, arguments);
        } finally {
          m = T;
        }
      };
    });
})(Uc);
Fc.exports = Uc;
var Am = Fc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bc = d,
  De = Am;
function P(e) {
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
var Wc = new Set(),
  Rr = {};
function vn(e, t) {
  Vn(e, t), Vn(e + "Capture", t);
}
function Vn(e, t) {
  for (Rr[e] = t, e = 0; e < t.length; e++) Wc.add(t[e]);
}
var xt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Nl = Object.prototype.hasOwnProperty,
  Im =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Xa = {},
  Za = {};
function Lm(e) {
  return Nl.call(Za, e)
    ? !0
    : Nl.call(Xa, e)
    ? !1
    : Im.test(e)
    ? (Za[e] = !0)
    : ((Xa[e] = !0), !1);
}
function Dm(e, t, n, r) {
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
function zm(e, t, n, r) {
  if (t === null || typeof t > "u" || Dm(e, t, n, r)) return !0;
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
function Se(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    pe[e] = new Se(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  pe[t] = new Se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  pe[e] = new Se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  pe[e] = new Se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    pe[e] = new Se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  pe[e] = new Se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  pe[e] = new Se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  pe[e] = new Se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  pe[e] = new Se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ds = /[\-:]([a-z])/g;
function zs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ds, zs);
    pe[t] = new Se(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ds, zs);
    pe[t] = new Se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ds, zs);
  pe[t] = new Se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  pe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
pe.xlinkHref = new Se(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  pe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function js(e, t, n, r) {
  var o = pe.hasOwnProperty(t) ? pe[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (zm(t, n, o, r) && (n = null),
    r || o === null
      ? Lm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var _t = Bc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  fo = Symbol.for("react.element"),
  Cn = Symbol.for("react.portal"),
  kn = Symbol.for("react.fragment"),
  Fs = Symbol.for("react.strict_mode"),
  Tl = Symbol.for("react.profiler"),
  Vc = Symbol.for("react.provider"),
  Hc = Symbol.for("react.context"),
  Us = Symbol.for("react.forward_ref"),
  Ol = Symbol.for("react.suspense"),
  Al = Symbol.for("react.suspense_list"),
  Bs = Symbol.for("react.memo"),
  Ot = Symbol.for("react.lazy"),
  Kc = Symbol.for("react.offscreen"),
  Ja = Symbol.iterator;
function lr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ja && e[Ja]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ne = Object.assign,
  Zi;
function vr(e) {
  if (Zi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Zi = (t && t[1]) || "";
    }
  return (
    `
` +
    Zi +
    e
  );
}
var Ji = !1;
function qi(e, t) {
  if (!e || Ji) return "";
  Ji = !0;
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
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          s = i.length - 1;
        1 <= l && 0 <= s && o[l] !== i[s];

      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (o[l] !== i[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || o[l] !== i[s])) {
                var a =
                  `
` + o[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    (Ji = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? vr(e) : "";
}
function jm(e) {
  switch (e.tag) {
    case 5:
      return vr(e.type);
    case 16:
      return vr("Lazy");
    case 13:
      return vr("Suspense");
    case 19:
      return vr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = qi(e.type, !1)), e;
    case 11:
      return (e = qi(e.type.render, !1)), e;
    case 1:
      return (e = qi(e.type, !0)), e;
    default:
      return "";
  }
}
function Il(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case kn:
      return "Fragment";
    case Cn:
      return "Portal";
    case Tl:
      return "Profiler";
    case Fs:
      return "StrictMode";
    case Ol:
      return "Suspense";
    case Al:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Hc:
        return (e.displayName || "Context") + ".Consumer";
      case Vc:
        return (e._context.displayName || "Context") + ".Provider";
      case Us:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Bs:
        return (
          (t = e.displayName || null), t !== null ? t : Il(e.type) || "Memo"
        );
      case Ot:
        (t = e._payload), (e = e._init);
        try {
          return Il(e(t));
        } catch {}
    }
  return null;
}
function Fm(e) {
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
      return Il(t);
    case 8:
      return t === Fs ? "StrictMode" : "Mode";
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
function Gt(e) {
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
function Gc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Um(e) {
  var t = Gc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function po(e) {
  e._valueTracker || (e._valueTracker = Um(e));
}
function Qc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Gc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ei(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ll(e, t) {
  var n = t.checked;
  return ne({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function qa(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Gt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Yc(e, t) {
  (t = t.checked), t != null && js(e, "checked", t, !1);
}
function Dl(e, t) {
  Yc(e, t);
  var n = Gt(t.value),
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
    ? zl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && zl(e, t.type, Gt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function eu(e, t, n) {
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
function zl(e, t, n) {
  (t !== "number" || ei(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var gr = Array.isArray;
function Ln(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Gt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function jl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
  return ne({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function tu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(P(92));
      if (gr(n)) {
        if (1 < n.length) throw Error(P(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Gt(n) };
}
function Xc(e, t) {
  var n = Gt(t.value),
    r = Gt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function nu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Zc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Fl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Zc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var mo,
  Jc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        mo = mo || document.createElement("div"),
          mo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = mo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Mr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var xr = {
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
  Bm = ["Webkit", "ms", "Moz", "O"];
Object.keys(xr).forEach(function (e) {
  Bm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (xr[t] = xr[e]);
  });
});
function qc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (xr.hasOwnProperty(e) && xr[e])
    ? ("" + t).trim()
    : t + "px";
}
function ed(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = qc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Wm = ne(
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
  }
);
function Ul(e, t) {
  if (t) {
    if (Wm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(P(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(P(62));
  }
}
function Bl(e, t) {
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
var Wl = null;
function Ws(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Vl = null,
  Dn = null,
  zn = null;
function ru(e) {
  if ((e = eo(e))) {
    if (typeof Vl != "function") throw Error(P(280));
    var t = e.stateNode;
    t && ((t = Ai(t)), Vl(e.stateNode, e.type, t));
  }
}
function td(e) {
  Dn ? (zn ? zn.push(e) : (zn = [e])) : (Dn = e);
}
function nd() {
  if (Dn) {
    var e = Dn,
      t = zn;
    if (((zn = Dn = null), ru(e), t)) for (e = 0; e < t.length; e++) ru(t[e]);
  }
}
function rd(e, t) {
  return e(t);
}
function od() {}
var el = !1;
function id(e, t, n) {
  if (el) return e(t, n);
  el = !0;
  try {
    return rd(e, t, n);
  } finally {
    (el = !1), (Dn !== null || zn !== null) && (od(), nd());
  }
}
function Nr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ai(n);
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
  if (n && typeof n != "function") throw Error(P(231, t, typeof n));
  return n;
}
var Hl = !1;
if (xt)
  try {
    var sr = {};
    Object.defineProperty(sr, "passive", {
      get: function () {
        Hl = !0;
      },
    }),
      window.addEventListener("test", sr, sr),
      window.removeEventListener("test", sr, sr);
  } catch {
    Hl = !1;
  }
function Vm(e, t, n, r, o, i, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (p) {
    this.onError(p);
  }
}
var Sr = !1,
  ti = null,
  ni = !1,
  Kl = null,
  Hm = {
    onError: function (e) {
      (Sr = !0), (ti = e);
    },
  };
function Km(e, t, n, r, o, i, l, s, a) {
  (Sr = !1), (ti = null), Vm.apply(Hm, arguments);
}
function Gm(e, t, n, r, o, i, l, s, a) {
  if ((Km.apply(this, arguments), Sr)) {
    if (Sr) {
      var u = ti;
      (Sr = !1), (ti = null);
    } else throw Error(P(198));
    ni || ((ni = !0), (Kl = u));
  }
}
function gn(e) {
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
function ld(e) {
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
function ou(e) {
  if (gn(e) !== e) throw Error(P(188));
}
function Qm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = gn(e)), t === null)) throw Error(P(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return ou(o), e;
        if (i === r) return ou(o), t;
        i = i.sibling;
      }
      throw Error(P(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, s = o.child; s; ) {
        if (s === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (s === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = i.child; s; ) {
          if (s === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (s === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(P(189));
      }
    }
    if (n.alternate !== r) throw Error(P(190));
  }
  if (n.tag !== 3) throw Error(P(188));
  return n.stateNode.current === n ? e : t;
}
function sd(e) {
  return (e = Qm(e)), e !== null ? ad(e) : null;
}
function ad(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ad(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ud = De.unstable_scheduleCallback,
  iu = De.unstable_cancelCallback,
  Ym = De.unstable_shouldYield,
  Xm = De.unstable_requestPaint,
  oe = De.unstable_now,
  Zm = De.unstable_getCurrentPriorityLevel,
  Vs = De.unstable_ImmediatePriority,
  cd = De.unstable_UserBlockingPriority,
  ri = De.unstable_NormalPriority,
  Jm = De.unstable_LowPriority,
  dd = De.unstable_IdlePriority,
  Mi = null,
  ct = null;
function qm(e) {
  if (ct && typeof ct.onCommitFiberRoot == "function")
    try {
      ct.onCommitFiberRoot(Mi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var tt = Math.clz32 ? Math.clz32 : nh,
  eh = Math.log,
  th = Math.LN2;
function nh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((eh(e) / th) | 0)) | 0;
}
var ho = 64,
  vo = 4194304;
function yr(e) {
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
function oi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? (r = yr(s)) : ((i &= l), i !== 0 && (r = yr(i)));
  } else (l = n & ~o), l !== 0 ? (r = yr(l)) : i !== 0 && (r = yr(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - tt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function rh(e, t) {
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
function oh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - tt(i),
      s = 1 << l,
      a = o[l];
    a === -1
      ? (!(s & n) || s & r) && (o[l] = rh(s, t))
      : a <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function Gl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function fd() {
  var e = ho;
  return (ho <<= 1), !(ho & 4194240) && (ho = 64), e;
}
function tl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Jr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - tt(t)),
    (e[t] = n);
}
function ih(e, t) {
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
    var o = 31 - tt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Hs(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - tt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var K = 0;
function pd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var md,
  Ks,
  hd,
  vd,
  gd,
  Ql = !1,
  go = [],
  jt = null,
  Ft = null,
  Ut = null,
  Tr = new Map(),
  Or = new Map(),
  It = [],
  lh =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function lu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      jt = null;
      break;
    case "dragenter":
    case "dragleave":
      Ft = null;
      break;
    case "mouseover":
    case "mouseout":
      Ut = null;
      break;
    case "pointerover":
    case "pointerout":
      Tr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Or.delete(t.pointerId);
  }
}
function ar(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = eo(t)), t !== null && Ks(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function sh(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (jt = ar(jt, e, t, n, r, o)), !0;
    case "dragenter":
      return (Ft = ar(Ft, e, t, n, r, o)), !0;
    case "mouseover":
      return (Ut = ar(Ut, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Tr.set(i, ar(Tr.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Or.set(i, ar(Or.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function yd(e) {
  var t = rn(e.target);
  if (t !== null) {
    var n = gn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ld(n)), t !== null)) {
          (e.blockedOn = t),
            gd(e.priority, function () {
              hd(n);
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
function zo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Yl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Wl = r), n.target.dispatchEvent(r), (Wl = null);
    } else return (t = eo(n)), t !== null && Ks(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function su(e, t, n) {
  zo(e) && n.delete(t);
}
function ah() {
  (Ql = !1),
    jt !== null && zo(jt) && (jt = null),
    Ft !== null && zo(Ft) && (Ft = null),
    Ut !== null && zo(Ut) && (Ut = null),
    Tr.forEach(su),
    Or.forEach(su);
}
function ur(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ql ||
      ((Ql = !0),
      De.unstable_scheduleCallback(De.unstable_NormalPriority, ah)));
}
function Ar(e) {
  function t(o) {
    return ur(o, e);
  }
  if (0 < go.length) {
    ur(go[0], e);
    for (var n = 1; n < go.length; n++) {
      var r = go[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    jt !== null && ur(jt, e),
      Ft !== null && ur(Ft, e),
      Ut !== null && ur(Ut, e),
      Tr.forEach(t),
      Or.forEach(t),
      n = 0;
    n < It.length;
    n++
  )
    (r = It[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < It.length && ((n = It[0]), n.blockedOn === null); )
    yd(n), n.blockedOn === null && It.shift();
}
var jn = _t.ReactCurrentBatchConfig,
  ii = !0;
function uh(e, t, n, r) {
  var o = K,
    i = jn.transition;
  jn.transition = null;
  try {
    (K = 1), Gs(e, t, n, r);
  } finally {
    (K = o), (jn.transition = i);
  }
}
function ch(e, t, n, r) {
  var o = K,
    i = jn.transition;
  jn.transition = null;
  try {
    (K = 4), Gs(e, t, n, r);
  } finally {
    (K = o), (jn.transition = i);
  }
}
function Gs(e, t, n, r) {
  if (ii) {
    var o = Yl(e, t, n, r);
    if (o === null) dl(e, t, r, li, n), lu(e, r);
    else if (sh(o, e, t, n, r)) r.stopPropagation();
    else if ((lu(e, r), t & 4 && -1 < lh.indexOf(e))) {
      for (; o !== null; ) {
        var i = eo(o);
        if (
          (i !== null && md(i),
          (i = Yl(e, t, n, r)),
          i === null && dl(e, t, r, li, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else dl(e, t, r, null, n);
  }
}
var li = null;
function Yl(e, t, n, r) {
  if (((li = null), (e = Ws(r)), (e = rn(e)), e !== null))
    if (((t = gn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ld(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (li = e), null;
}
function wd(e) {
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
      switch (Zm()) {
        case Vs:
          return 1;
        case cd:
          return 4;
        case ri:
        case Jm:
          return 16;
        case dd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Dt = null,
  Qs = null,
  jo = null;
function xd() {
  if (jo) return jo;
  var e,
    t = Qs,
    n = t.length,
    r,
    o = "value" in Dt ? Dt.value : Dt.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (jo = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Fo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function yo() {
  return !0;
}
function au() {
  return !1;
}
function je(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? yo
        : au),
      (this.isPropagationStopped = au),
      this
    );
  }
  return (
    ne(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = yo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = yo));
      },
      persist: function () {},
      isPersistent: yo,
    }),
    t
  );
}
var er = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ys = je(er),
  qr = ne({}, er, { view: 0, detail: 0 }),
  dh = je(qr),
  nl,
  rl,
  cr,
  Ni = ne({}, qr, {
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
    getModifierState: Xs,
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
        : (e !== cr &&
            (cr && e.type === "mousemove"
              ? ((nl = e.screenX - cr.screenX), (rl = e.screenY - cr.screenY))
              : (rl = nl = 0),
            (cr = e)),
          nl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : rl;
    },
  }),
  uu = je(Ni),
  fh = ne({}, Ni, { dataTransfer: 0 }),
  ph = je(fh),
  mh = ne({}, qr, { relatedTarget: 0 }),
  ol = je(mh),
  hh = ne({}, er, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vh = je(hh),
  gh = ne({}, er, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  yh = je(gh),
  wh = ne({}, er, { data: 0 }),
  cu = je(wh),
  xh = {
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
  Sh = {
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
  Eh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function $h(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Eh[e]) ? !!t[e] : !1;
}
function Xs() {
  return $h;
}
var Ch = ne({}, qr, {
    key: function (e) {
      if (e.key) {
        var t = xh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Fo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Sh[e.keyCode] || "Unidentified"
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
    getModifierState: Xs,
    charCode: function (e) {
      return e.type === "keypress" ? Fo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Fo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  kh = je(Ch),
  bh = ne({}, Ni, {
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
  du = je(bh),
  _h = ne({}, qr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Xs,
  }),
  Ph = je(_h),
  Rh = ne({}, er, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Mh = je(Rh),
  Nh = ne({}, Ni, {
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
  Th = je(Nh),
  Oh = [9, 13, 27, 32],
  Zs = xt && "CompositionEvent" in window,
  Er = null;
xt && "documentMode" in document && (Er = document.documentMode);
var Ah = xt && "TextEvent" in window && !Er,
  Sd = xt && (!Zs || (Er && 8 < Er && 11 >= Er)),
  fu = " ",
  pu = !1;
function Ed(e, t) {
  switch (e) {
    case "keyup":
      return Oh.indexOf(t.keyCode) !== -1;
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
function $d(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var bn = !1;
function Ih(e, t) {
  switch (e) {
    case "compositionend":
      return $d(t);
    case "keypress":
      return t.which !== 32 ? null : ((pu = !0), fu);
    case "textInput":
      return (e = t.data), e === fu && pu ? null : e;
    default:
      return null;
  }
}
function Lh(e, t) {
  if (bn)
    return e === "compositionend" || (!Zs && Ed(e, t))
      ? ((e = xd()), (jo = Qs = Dt = null), (bn = !1), e)
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
      return Sd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Dh = {
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
function mu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Dh[e.type] : t === "textarea";
}
function Cd(e, t, n, r) {
  td(r),
    (t = si(t, "onChange")),
    0 < t.length &&
      ((n = new Ys("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var $r = null,
  Ir = null;
function zh(e) {
  Id(e, 0);
}
function Ti(e) {
  var t = Rn(e);
  if (Qc(t)) return e;
}
function jh(e, t) {
  if (e === "change") return t;
}
var kd = !1;
if (xt) {
  var il;
  if (xt) {
    var ll = "oninput" in document;
    if (!ll) {
      var hu = document.createElement("div");
      hu.setAttribute("oninput", "return;"),
        (ll = typeof hu.oninput == "function");
    }
    il = ll;
  } else il = !1;
  kd = il && (!document.documentMode || 9 < document.documentMode);
}
function vu() {
  $r && ($r.detachEvent("onpropertychange", bd), (Ir = $r = null));
}
function bd(e) {
  if (e.propertyName === "value" && Ti(Ir)) {
    var t = [];
    Cd(t, Ir, e, Ws(e)), id(zh, t);
  }
}
function Fh(e, t, n) {
  e === "focusin"
    ? (vu(), ($r = t), (Ir = n), $r.attachEvent("onpropertychange", bd))
    : e === "focusout" && vu();
}
function Uh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ti(Ir);
}
function Bh(e, t) {
  if (e === "click") return Ti(t);
}
function Wh(e, t) {
  if (e === "input" || e === "change") return Ti(t);
}
function Vh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ot = typeof Object.is == "function" ? Object.is : Vh;
function Lr(e, t) {
  if (ot(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Nl.call(t, o) || !ot(e[o], t[o])) return !1;
  }
  return !0;
}
function gu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function yu(e, t) {
  var n = gu(e);
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
    n = gu(n);
  }
}
function _d(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? _d(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Pd() {
  for (var e = window, t = ei(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ei(e.document);
  }
  return t;
}
function Js(e) {
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
function Hh(e) {
  var t = Pd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    _d(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Js(n)) {
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
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = yu(n, i));
        var l = yu(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
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
var Kh = xt && "documentMode" in document && 11 >= document.documentMode,
  _n = null,
  Xl = null,
  Cr = null,
  Zl = !1;
function wu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Zl ||
    _n == null ||
    _n !== ei(r) ||
    ((r = _n),
    "selectionStart" in r && Js(r)
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
    (Cr && Lr(Cr, r)) ||
      ((Cr = r),
      (r = si(Xl, "onSelect")),
      0 < r.length &&
        ((t = new Ys("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = _n))));
}
function wo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Pn = {
    animationend: wo("Animation", "AnimationEnd"),
    animationiteration: wo("Animation", "AnimationIteration"),
    animationstart: wo("Animation", "AnimationStart"),
    transitionend: wo("Transition", "TransitionEnd"),
  },
  sl = {},
  Rd = {};
xt &&
  ((Rd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Pn.animationend.animation,
    delete Pn.animationiteration.animation,
    delete Pn.animationstart.animation),
  "TransitionEvent" in window || delete Pn.transitionend.transition);
function Oi(e) {
  if (sl[e]) return sl[e];
  if (!Pn[e]) return e;
  var t = Pn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Rd) return (sl[e] = t[n]);
  return e;
}
var Md = Oi("animationend"),
  Nd = Oi("animationiteration"),
  Td = Oi("animationstart"),
  Od = Oi("transitionend"),
  Ad = new Map(),
  xu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Jt(e, t) {
  Ad.set(e, t), vn(t, [e]);
}
for (var al = 0; al < xu.length; al++) {
  var ul = xu[al],
    Gh = ul.toLowerCase(),
    Qh = ul[0].toUpperCase() + ul.slice(1);
  Jt(Gh, "on" + Qh);
}
Jt(Md, "onAnimationEnd");
Jt(Nd, "onAnimationIteration");
Jt(Td, "onAnimationStart");
Jt("dblclick", "onDoubleClick");
Jt("focusin", "onFocus");
Jt("focusout", "onBlur");
Jt(Od, "onTransitionEnd");
Vn("onMouseEnter", ["mouseout", "mouseover"]);
Vn("onMouseLeave", ["mouseout", "mouseover"]);
Vn("onPointerEnter", ["pointerout", "pointerover"]);
Vn("onPointerLeave", ["pointerout", "pointerover"]);
vn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
vn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
vn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
vn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
vn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
vn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var wr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Yh = new Set("cancel close invalid load scroll toggle".split(" ").concat(wr));
function Su(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Gm(r, t, void 0, e), (e.currentTarget = null);
}
function Id(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== i && o.isPropagationStopped())) break e;
          Su(o, s, u), (i = a);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (a = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          Su(o, s, u), (i = a);
        }
    }
  }
  if (ni) throw ((e = Kl), (ni = !1), (Kl = null), e);
}
function X(e, t) {
  var n = t[ns];
  n === void 0 && (n = t[ns] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ld(t, e, 2, !1), n.add(r));
}
function cl(e, t, n) {
  var r = 0;
  t && (r |= 4), Ld(n, e, r, t);
}
var xo = "_reactListening" + Math.random().toString(36).slice(2);
function Dr(e) {
  if (!e[xo]) {
    (e[xo] = !0),
      Wc.forEach(function (n) {
        n !== "selectionchange" && (Yh.has(n) || cl(n, !1, e), cl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[xo] || ((t[xo] = !0), cl("selectionchange", !1, t));
  }
}
function Ld(e, t, n, r) {
  switch (wd(t)) {
    case 1:
      var o = uh;
      break;
    case 4:
      o = ch;
      break;
    default:
      o = Gs;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Hl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function dl(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var a = l.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = l.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = rn(s)), l === null)) return;
          if (((a = l.tag), a === 5 || a === 6)) {
            r = i = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  id(function () {
    var u = i,
      p = Ws(n),
      c = [];
    e: {
      var m = Ad.get(e);
      if (m !== void 0) {
        var v = Ys,
          w = e;
        switch (e) {
          case "keypress":
            if (Fo(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = kh;
            break;
          case "focusin":
            (w = "focus"), (v = ol);
            break;
          case "focusout":
            (w = "blur"), (v = ol);
            break;
          case "beforeblur":
          case "afterblur":
            v = ol;
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
            v = uu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = ph;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Ph;
            break;
          case Md:
          case Nd:
          case Td:
            v = vh;
            break;
          case Od:
            v = Mh;
            break;
          case "scroll":
            v = dh;
            break;
          case "wheel":
            v = Th;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = yh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = du;
        }
        var y = (t & 4) !== 0,
          S = !y && e === "scroll",
          h = y ? (m !== null ? m + "Capture" : null) : m;
        y = [];
        for (var f = u, g; f !== null; ) {
          g = f;
          var x = g.stateNode;
          if (
            (g.tag === 5 &&
              x !== null &&
              ((g = x),
              h !== null && ((x = Nr(f, h)), x != null && y.push(zr(f, x, g)))),
            S)
          )
            break;
          f = f.return;
        }
        0 < y.length &&
          ((m = new v(m, w, null, n, p)), c.push({ event: m, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Wl &&
            (w = n.relatedTarget || n.fromElement) &&
            (rn(w) || w[St]))
        )
          break e;
        if (
          (v || m) &&
          ((m =
            p.window === p
              ? p
              : (m = p.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          v
            ? ((w = n.relatedTarget || n.toElement),
              (v = u),
              (w = w ? rn(w) : null),
              w !== null &&
                ((S = gn(w)), w !== S || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((v = null), (w = u)),
          v !== w)
        ) {
          if (
            ((y = uu),
            (x = "onMouseLeave"),
            (h = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = du),
              (x = "onPointerLeave"),
              (h = "onPointerEnter"),
              (f = "pointer")),
            (S = v == null ? m : Rn(v)),
            (g = w == null ? m : Rn(w)),
            (m = new y(x, f + "leave", v, n, p)),
            (m.target = S),
            (m.relatedTarget = g),
            (x = null),
            rn(p) === u &&
              ((y = new y(h, f + "enter", w, n, p)),
              (y.target = g),
              (y.relatedTarget = S),
              (x = y)),
            (S = x),
            v && w)
          )
            t: {
              for (y = v, h = w, f = 0, g = y; g; g = xn(g)) f++;
              for (g = 0, x = h; x; x = xn(x)) g++;
              for (; 0 < f - g; ) (y = xn(y)), f--;
              for (; 0 < g - f; ) (h = xn(h)), g--;
              for (; f--; ) {
                if (y === h || (h !== null && y === h.alternate)) break t;
                (y = xn(y)), (h = xn(h));
              }
              y = null;
            }
          else y = null;
          v !== null && Eu(c, m, v, y, !1),
            w !== null && S !== null && Eu(c, S, w, y, !0);
        }
      }
      e: {
        if (
          ((m = u ? Rn(u) : window),
          (v = m.nodeName && m.nodeName.toLowerCase()),
          v === "select" || (v === "input" && m.type === "file"))
        )
          var E = jh;
        else if (mu(m))
          if (kd) E = Wh;
          else {
            E = Uh;
            var C = Fh;
          }
        else
          (v = m.nodeName) &&
            v.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (E = Bh);
        if (E && (E = E(e, u))) {
          Cd(c, E, n, p);
          break e;
        }
        C && C(e, m, u),
          e === "focusout" &&
            (C = m._wrapperState) &&
            C.controlled &&
            m.type === "number" &&
            zl(m, "number", m.value);
      }
      switch (((C = u ? Rn(u) : window), e)) {
        case "focusin":
          (mu(C) || C.contentEditable === "true") &&
            ((_n = C), (Xl = u), (Cr = null));
          break;
        case "focusout":
          Cr = Xl = _n = null;
          break;
        case "mousedown":
          Zl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Zl = !1), wu(c, n, p);
          break;
        case "selectionchange":
          if (Kh) break;
        case "keydown":
        case "keyup":
          wu(c, n, p);
      }
      var $;
      if (Zs)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        bn
          ? Ed(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (Sd &&
          n.locale !== "ko" &&
          (bn || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && bn && ($ = xd())
            : ((Dt = p),
              (Qs = "value" in Dt ? Dt.value : Dt.textContent),
              (bn = !0))),
        (C = si(u, k)),
        0 < C.length &&
          ((k = new cu(k, e, null, n, p)),
          c.push({ event: k, listeners: C }),
          $ ? (k.data = $) : (($ = $d(n)), $ !== null && (k.data = $)))),
        ($ = Ah ? Ih(e, n) : Lh(e, n)) &&
          ((u = si(u, "onBeforeInput")),
          0 < u.length &&
            ((p = new cu("onBeforeInput", "beforeinput", null, n, p)),
            c.push({ event: p, listeners: u }),
            (p.data = $)));
    }
    Id(c, t);
  });
}
function zr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function si(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Nr(e, n)),
      i != null && r.unshift(zr(e, i, o)),
      (i = Nr(e, t)),
      i != null && r.push(zr(e, i, o))),
      (e = e.return);
  }
  return r;
}
function xn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Eu(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((a = Nr(n, i)), a != null && l.unshift(zr(n, a, s)))
        : o || ((a = Nr(n, i)), a != null && l.push(zr(n, a, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Xh = /\r\n?/g,
  Zh = /\u0000|\uFFFD/g;
function $u(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Xh,
      `
`
    )
    .replace(Zh, "");
}
function So(e, t, n) {
  if (((t = $u(t)), $u(e) !== t && n)) throw Error(P(425));
}
function ai() {}
var Jl = null,
  ql = null;
function es(e, t) {
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
var ts = typeof setTimeout == "function" ? setTimeout : void 0,
  Jh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Cu = typeof Promise == "function" ? Promise : void 0,
  qh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Cu < "u"
      ? function (e) {
          return Cu.resolve(null).then(e).catch(ev);
        }
      : ts;
function ev(e) {
  setTimeout(function () {
    throw e;
  });
}
function fl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Ar(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Ar(t);
}
function Bt(e) {
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
function ku(e) {
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
var tr = Math.random().toString(36).slice(2),
  at = "__reactFiber$" + tr,
  jr = "__reactProps$" + tr,
  St = "__reactContainer$" + tr,
  ns = "__reactEvents$" + tr,
  tv = "__reactListeners$" + tr,
  nv = "__reactHandles$" + tr;
function rn(e) {
  var t = e[at];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[St] || n[at])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ku(e); e !== null; ) {
          if ((n = e[at])) return n;
          e = ku(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function eo(e) {
  return (
    (e = e[at] || e[St]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Rn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(P(33));
}
function Ai(e) {
  return e[jr] || null;
}
var rs = [],
  Mn = -1;
function qt(e) {
  return { current: e };
}
function Z(e) {
  0 > Mn || ((e.current = rs[Mn]), (rs[Mn] = null), Mn--);
}
function Q(e, t) {
  Mn++, (rs[Mn] = e.current), (e.current = t);
}
var Qt = {},
  ge = qt(Qt),
  ke = qt(!1),
  cn = Qt;
function Hn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Qt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function be(e) {
  return (e = e.childContextTypes), e != null;
}
function ui() {
  Z(ke), Z(ge);
}
function bu(e, t, n) {
  if (ge.current !== Qt) throw Error(P(168));
  Q(ge, t), Q(ke, n);
}
function Dd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(P(108, Fm(e) || "Unknown", o));
  return ne({}, n, r);
}
function ci(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Qt),
    (cn = ge.current),
    Q(ge, e),
    Q(ke, ke.current),
    !0
  );
}
function _u(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(P(169));
  n
    ? ((e = Dd(e, t, cn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Z(ke),
      Z(ge),
      Q(ge, e))
    : Z(ke),
    Q(ke, n);
}
var vt = null,
  Ii = !1,
  pl = !1;
function zd(e) {
  vt === null ? (vt = [e]) : vt.push(e);
}
function rv(e) {
  (Ii = !0), zd(e);
}
function en() {
  if (!pl && vt !== null) {
    pl = !0;
    var e = 0,
      t = K;
    try {
      var n = vt;
      for (K = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (vt = null), (Ii = !1);
    } catch (o) {
      throw (vt !== null && (vt = vt.slice(e + 1)), ud(Vs, en), o);
    } finally {
      (K = t), (pl = !1);
    }
  }
  return null;
}
var Nn = [],
  Tn = 0,
  di = null,
  fi = 0,
  Be = [],
  We = 0,
  dn = null,
  gt = 1,
  yt = "";
function tn(e, t) {
  (Nn[Tn++] = fi), (Nn[Tn++] = di), (di = e), (fi = t);
}
function jd(e, t, n) {
  (Be[We++] = gt), (Be[We++] = yt), (Be[We++] = dn), (dn = e);
  var r = gt;
  e = yt;
  var o = 32 - tt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - tt(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (gt = (1 << (32 - tt(t) + o)) | (n << o) | r),
      (yt = i + e);
  } else (gt = (1 << i) | (n << o) | r), (yt = e);
}
function qs(e) {
  e.return !== null && (tn(e, 1), jd(e, 1, 0));
}
function ea(e) {
  for (; e === di; )
    (di = Nn[--Tn]), (Nn[Tn] = null), (fi = Nn[--Tn]), (Nn[Tn] = null);
  for (; e === dn; )
    (dn = Be[--We]),
      (Be[We] = null),
      (yt = Be[--We]),
      (Be[We] = null),
      (gt = Be[--We]),
      (Be[We] = null);
}
var Ie = null,
  Ae = null,
  q = !1,
  et = null;
function Fd(e, t) {
  var n = Ve(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Pu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ie = e), (Ae = Bt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ie = e), (Ae = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = dn !== null ? { id: gt, overflow: yt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ve(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ie = e),
            (Ae = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function os(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function is(e) {
  if (q) {
    var t = Ae;
    if (t) {
      var n = t;
      if (!Pu(e, t)) {
        if (os(e)) throw Error(P(418));
        t = Bt(n.nextSibling);
        var r = Ie;
        t && Pu(e, t)
          ? Fd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (q = !1), (Ie = e));
      }
    } else {
      if (os(e)) throw Error(P(418));
      (e.flags = (e.flags & -4097) | 2), (q = !1), (Ie = e);
    }
  }
}
function Ru(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ie = e;
}
function Eo(e) {
  if (e !== Ie) return !1;
  if (!q) return Ru(e), (q = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !es(e.type, e.memoizedProps))),
    t && (t = Ae))
  ) {
    if (os(e)) throw (Ud(), Error(P(418)));
    for (; t; ) Fd(e, t), (t = Bt(t.nextSibling));
  }
  if ((Ru(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(P(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ae = Bt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ae = null;
    }
  } else Ae = Ie ? Bt(e.stateNode.nextSibling) : null;
  return !0;
}
function Ud() {
  for (var e = Ae; e; ) e = Bt(e.nextSibling);
}
function Kn() {
  (Ae = Ie = null), (q = !1);
}
function ta(e) {
  et === null ? (et = [e]) : et.push(e);
}
var ov = _t.ReactCurrentBatchConfig;
function Je(e, t) {
  if (e && e.defaultProps) {
    (t = ne({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var pi = qt(null),
  mi = null,
  On = null,
  na = null;
function ra() {
  na = On = mi = null;
}
function oa(e) {
  var t = pi.current;
  Z(pi), (e._currentValue = t);
}
function ls(e, t, n) {
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
function Fn(e, t) {
  (mi = e),
    (na = On = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ce = !0), (e.firstContext = null));
}
function Ke(e) {
  var t = e._currentValue;
  if (na !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), On === null)) {
      if (mi === null) throw Error(P(308));
      (On = e), (mi.dependencies = { lanes: 0, firstContext: e });
    } else On = On.next = e;
  return t;
}
var on = null;
function ia(e) {
  on === null ? (on = [e]) : on.push(e);
}
function Bd(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), ia(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Et(e, r)
  );
}
function Et(e, t) {
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
var At = !1;
function la(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Wd(e, t) {
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
function wt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Wt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), H & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Et(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), ia(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Et(e, n)
  );
}
function Uo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Hs(e, n);
  }
}
function Mu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
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
function hi(e, t, n, r) {
  var o = e.updateQueue;
  At = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var a = s,
      u = a.next;
    (a.next = null), l === null ? (i = u) : (l.next = u), (l = a);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (s = p.lastBaseUpdate),
      s !== l &&
        (s === null ? (p.firstBaseUpdate = u) : (s.next = u),
        (p.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var c = o.baseState;
    (l = 0), (p = u = a = null), (s = i);
    do {
      var m = s.lane,
        v = s.eventTime;
      if ((r & m) === m) {
        p !== null &&
          (p = p.next =
            {
              eventTime: v,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var w = e,
            y = s;
          switch (((m = t), (v = n), y.tag)) {
            case 1:
              if (((w = y.payload), typeof w == "function")) {
                c = w.call(v, c, m);
                break e;
              }
              c = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = y.payload),
                (m = typeof w == "function" ? w.call(v, c, m) : w),
                m == null)
              )
                break e;
              c = ne({}, c, m);
              break e;
            case 2:
              At = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (m = o.effects),
          m === null ? (o.effects = [s]) : m.push(s));
      } else
        (v = {
          eventTime: v,
          lane: m,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          p === null ? ((u = p = v), (a = c)) : (p = p.next = v),
          (l |= m);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (m = s),
          (s = m.next),
          (m.next = null),
          (o.lastBaseUpdate = m),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (p === null && (a = c),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = p),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (pn |= l), (e.lanes = l), (e.memoizedState = c);
  }
}
function Nu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(P(191, o));
        o.call(r);
      }
    }
}
var Vd = new Bc.Component().refs;
function ss(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ne({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Li = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? gn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = we(),
      o = Ht(e),
      i = wt(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Wt(e, i, o)),
      t !== null && (nt(t, e, o, r), Uo(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = we(),
      o = Ht(e),
      i = wt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Wt(e, i, o)),
      t !== null && (nt(t, e, o, r), Uo(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = we(),
      r = Ht(e),
      o = wt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Wt(e, o, r)),
      t !== null && (nt(t, e, r, n), Uo(t, e, r));
  },
};
function Tu(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Lr(n, r) || !Lr(o, i)
      : !0
  );
}
function Hd(e, t, n) {
  var r = !1,
    o = Qt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ke(i))
      : ((o = be(t) ? cn : ge.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Hn(e, o) : Qt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Li),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Ou(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Li.enqueueReplaceState(t, t.state, null);
}
function as(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Vd), la(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Ke(i))
    : ((i = be(t) ? cn : ge.current), (o.context = Hn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (ss(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Li.enqueueReplaceState(o, o.state, null),
      hi(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function dr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(P(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(P(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var s = o.refs;
            s === Vd && (s = o.refs = {}),
              l === null ? delete s[i] : (s[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(P(284));
    if (!n._owner) throw Error(P(290, e));
  }
  return e;
}
function $o(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      P(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Au(e) {
  var t = e._init;
  return t(e._payload);
}
function Kd(e) {
  function t(h, f) {
    if (e) {
      var g = h.deletions;
      g === null ? ((h.deletions = [f]), (h.flags |= 16)) : g.push(f);
    }
  }
  function n(h, f) {
    if (!e) return null;
    for (; f !== null; ) t(h, f), (f = f.sibling);
    return null;
  }
  function r(h, f) {
    for (h = new Map(); f !== null; )
      f.key !== null ? h.set(f.key, f) : h.set(f.index, f), (f = f.sibling);
    return h;
  }
  function o(h, f) {
    return (h = Kt(h, f)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, f, g) {
    return (
      (h.index = g),
      e
        ? ((g = h.alternate),
          g !== null
            ? ((g = g.index), g < f ? ((h.flags |= 2), f) : g)
            : ((h.flags |= 2), f))
        : ((h.flags |= 1048576), f)
    );
  }
  function l(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function s(h, f, g, x) {
    return f === null || f.tag !== 6
      ? ((f = xl(g, h.mode, x)), (f.return = h), f)
      : ((f = o(f, g)), (f.return = h), f);
  }
  function a(h, f, g, x) {
    var E = g.type;
    return E === kn
      ? p(h, f, g.props.children, x, g.key)
      : f !== null &&
        (f.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === Ot &&
            Au(E) === f.type))
      ? ((x = o(f, g.props)), (x.ref = dr(h, f, g)), (x.return = h), x)
      : ((x = Go(g.type, g.key, g.props, null, h.mode, x)),
        (x.ref = dr(h, f, g)),
        (x.return = h),
        x);
  }
  function u(h, f, g, x) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== g.containerInfo ||
      f.stateNode.implementation !== g.implementation
      ? ((f = Sl(g, h.mode, x)), (f.return = h), f)
      : ((f = o(f, g.children || [])), (f.return = h), f);
  }
  function p(h, f, g, x, E) {
    return f === null || f.tag !== 7
      ? ((f = un(g, h.mode, x, E)), (f.return = h), f)
      : ((f = o(f, g)), (f.return = h), f);
  }
  function c(h, f, g) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = xl("" + f, h.mode, g)), (f.return = h), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case fo:
          return (
            (g = Go(f.type, f.key, f.props, null, h.mode, g)),
            (g.ref = dr(h, null, f)),
            (g.return = h),
            g
          );
        case Cn:
          return (f = Sl(f, h.mode, g)), (f.return = h), f;
        case Ot:
          var x = f._init;
          return c(h, x(f._payload), g);
      }
      if (gr(f) || lr(f))
        return (f = un(f, h.mode, g, null)), (f.return = h), f;
      $o(h, f);
    }
    return null;
  }
  function m(h, f, g, x) {
    var E = f !== null ? f.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return E !== null ? null : s(h, f, "" + g, x);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case fo:
          return g.key === E ? a(h, f, g, x) : null;
        case Cn:
          return g.key === E ? u(h, f, g, x) : null;
        case Ot:
          return (E = g._init), m(h, f, E(g._payload), x);
      }
      if (gr(g) || lr(g)) return E !== null ? null : p(h, f, g, x, null);
      $o(h, g);
    }
    return null;
  }
  function v(h, f, g, x, E) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (h = h.get(g) || null), s(f, h, "" + x, E);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case fo:
          return (h = h.get(x.key === null ? g : x.key) || null), a(f, h, x, E);
        case Cn:
          return (h = h.get(x.key === null ? g : x.key) || null), u(f, h, x, E);
        case Ot:
          var C = x._init;
          return v(h, f, g, C(x._payload), E);
      }
      if (gr(x) || lr(x)) return (h = h.get(g) || null), p(f, h, x, E, null);
      $o(f, x);
    }
    return null;
  }
  function w(h, f, g, x) {
    for (
      var E = null, C = null, $ = f, k = (f = 0), A = null;
      $ !== null && k < g.length;
      k++
    ) {
      $.index > k ? ((A = $), ($ = null)) : (A = $.sibling);
      var N = m(h, $, g[k], x);
      if (N === null) {
        $ === null && ($ = A);
        break;
      }
      e && $ && N.alternate === null && t(h, $),
        (f = i(N, f, k)),
        C === null ? (E = N) : (C.sibling = N),
        (C = N),
        ($ = A);
    }
    if (k === g.length) return n(h, $), q && tn(h, k), E;
    if ($ === null) {
      for (; k < g.length; k++)
        ($ = c(h, g[k], x)),
          $ !== null &&
            ((f = i($, f, k)), C === null ? (E = $) : (C.sibling = $), (C = $));
      return q && tn(h, k), E;
    }
    for ($ = r(h, $); k < g.length; k++)
      (A = v($, h, k, g[k], x)),
        A !== null &&
          (e && A.alternate !== null && $.delete(A.key === null ? k : A.key),
          (f = i(A, f, k)),
          C === null ? (E = A) : (C.sibling = A),
          (C = A));
    return (
      e &&
        $.forEach(function (B) {
          return t(h, B);
        }),
      q && tn(h, k),
      E
    );
  }
  function y(h, f, g, x) {
    var E = lr(g);
    if (typeof E != "function") throw Error(P(150));
    if (((g = E.call(g)), g == null)) throw Error(P(151));
    for (
      var C = (E = null), $ = f, k = (f = 0), A = null, N = g.next();
      $ !== null && !N.done;
      k++, N = g.next()
    ) {
      $.index > k ? ((A = $), ($ = null)) : (A = $.sibling);
      var B = m(h, $, N.value, x);
      if (B === null) {
        $ === null && ($ = A);
        break;
      }
      e && $ && B.alternate === null && t(h, $),
        (f = i(B, f, k)),
        C === null ? (E = B) : (C.sibling = B),
        (C = B),
        ($ = A);
    }
    if (N.done) return n(h, $), q && tn(h, k), E;
    if ($ === null) {
      for (; !N.done; k++, N = g.next())
        (N = c(h, N.value, x)),
          N !== null &&
            ((f = i(N, f, k)), C === null ? (E = N) : (C.sibling = N), (C = N));
      return q && tn(h, k), E;
    }
    for ($ = r(h, $); !N.done; k++, N = g.next())
      (N = v($, h, k, N.value, x)),
        N !== null &&
          (e && N.alternate !== null && $.delete(N.key === null ? k : N.key),
          (f = i(N, f, k)),
          C === null ? (E = N) : (C.sibling = N),
          (C = N));
    return (
      e &&
        $.forEach(function (O) {
          return t(h, O);
        }),
      q && tn(h, k),
      E
    );
  }
  function S(h, f, g, x) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === kn &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case fo:
          e: {
            for (var E = g.key, C = f; C !== null; ) {
              if (C.key === E) {
                if (((E = g.type), E === kn)) {
                  if (C.tag === 7) {
                    n(h, C.sibling),
                      (f = o(C, g.props.children)),
                      (f.return = h),
                      (h = f);
                    break e;
                  }
                } else if (
                  C.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Ot &&
                    Au(E) === C.type)
                ) {
                  n(h, C.sibling),
                    (f = o(C, g.props)),
                    (f.ref = dr(h, C, g)),
                    (f.return = h),
                    (h = f);
                  break e;
                }
                n(h, C);
                break;
              } else t(h, C);
              C = C.sibling;
            }
            g.type === kn
              ? ((f = un(g.props.children, h.mode, x, g.key)),
                (f.return = h),
                (h = f))
              : ((x = Go(g.type, g.key, g.props, null, h.mode, x)),
                (x.ref = dr(h, f, g)),
                (x.return = h),
                (h = x));
          }
          return l(h);
        case Cn:
          e: {
            for (C = g.key; f !== null; ) {
              if (f.key === C)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === g.containerInfo &&
                  f.stateNode.implementation === g.implementation
                ) {
                  n(h, f.sibling),
                    (f = o(f, g.children || [])),
                    (f.return = h),
                    (h = f);
                  break e;
                } else {
                  n(h, f);
                  break;
                }
              else t(h, f);
              f = f.sibling;
            }
            (f = Sl(g, h.mode, x)), (f.return = h), (h = f);
          }
          return l(h);
        case Ot:
          return (C = g._init), S(h, f, C(g._payload), x);
      }
      if (gr(g)) return w(h, f, g, x);
      if (lr(g)) return y(h, f, g, x);
      $o(h, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        f !== null && f.tag === 6
          ? (n(h, f.sibling), (f = o(f, g)), (f.return = h), (h = f))
          : (n(h, f), (f = xl(g, h.mode, x)), (f.return = h), (h = f)),
        l(h))
      : n(h, f);
  }
  return S;
}
var Gn = Kd(!0),
  Gd = Kd(!1),
  to = {},
  dt = qt(to),
  Fr = qt(to),
  Ur = qt(to);
function ln(e) {
  if (e === to) throw Error(P(174));
  return e;
}
function sa(e, t) {
  switch ((Q(Ur, t), Q(Fr, e), Q(dt, to), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Fl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Fl(t, e));
  }
  Z(dt), Q(dt, t);
}
function Qn() {
  Z(dt), Z(Fr), Z(Ur);
}
function Qd(e) {
  ln(Ur.current);
  var t = ln(dt.current),
    n = Fl(t, e.type);
  t !== n && (Q(Fr, e), Q(dt, n));
}
function aa(e) {
  Fr.current === e && (Z(dt), Z(Fr));
}
var ee = qt(0);
function vi(e) {
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
var ml = [];
function ua() {
  for (var e = 0; e < ml.length; e++)
    ml[e]._workInProgressVersionPrimary = null;
  ml.length = 0;
}
var Bo = _t.ReactCurrentDispatcher,
  hl = _t.ReactCurrentBatchConfig,
  fn = 0,
  te = null,
  se = null,
  ue = null,
  gi = !1,
  kr = !1,
  Br = 0,
  iv = 0;
function me() {
  throw Error(P(321));
}
function ca(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ot(e[n], t[n])) return !1;
  return !0;
}
function da(e, t, n, r, o, i) {
  if (
    ((fn = i),
    (te = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Bo.current = e === null || e.memoizedState === null ? uv : cv),
    (e = n(r, o)),
    kr)
  ) {
    i = 0;
    do {
      if (((kr = !1), (Br = 0), 25 <= i)) throw Error(P(301));
      (i += 1),
        (ue = se = null),
        (t.updateQueue = null),
        (Bo.current = dv),
        (e = n(r, o));
    } while (kr);
  }
  if (
    ((Bo.current = yi),
    (t = se !== null && se.next !== null),
    (fn = 0),
    (ue = se = te = null),
    (gi = !1),
    t)
  )
    throw Error(P(300));
  return e;
}
function fa() {
  var e = Br !== 0;
  return (Br = 0), e;
}
function st() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ue === null ? (te.memoizedState = ue = e) : (ue = ue.next = e), ue;
}
function Ge() {
  if (se === null) {
    var e = te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = se.next;
  var t = ue === null ? te.memoizedState : ue.next;
  if (t !== null) (ue = t), (se = e);
  else {
    if (e === null) throw Error(P(310));
    (se = e),
      (e = {
        memoizedState: se.memoizedState,
        baseState: se.baseState,
        baseQueue: se.baseQueue,
        queue: se.queue,
        next: null,
      }),
      ue === null ? (te.memoizedState = ue = e) : (ue = ue.next = e);
  }
  return ue;
}
function Wr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function vl(e) {
  var t = Ge(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = se,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var s = (l = null),
      a = null,
      u = i;
    do {
      var p = u.lane;
      if ((fn & p) === p)
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
        var c = {
          lane: p,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((s = a = c), (l = r)) : (a = a.next = c),
          (te.lanes |= p),
          (pn |= p);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (l = r) : (a.next = s),
      ot(r, t.memoizedState) || (Ce = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (te.lanes |= i), (pn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function gl(e) {
  var t = Ge(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    ot(i, t.memoizedState) || (Ce = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Yd() {}
function Xd(e, t) {
  var n = te,
    r = Ge(),
    o = t(),
    i = !ot(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ce = !0)),
    (r = r.queue),
    pa(qd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ue !== null && ue.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Vr(9, Jd.bind(null, n, r, o, t), void 0, null),
      ce === null)
    )
      throw Error(P(349));
    fn & 30 || Zd(n, t, o);
  }
  return o;
}
function Zd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (te.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Jd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ef(t) && tf(e);
}
function qd(e, t, n) {
  return n(function () {
    ef(t) && tf(e);
  });
}
function ef(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ot(e, n);
  } catch {
    return !0;
  }
}
function tf(e) {
  var t = Et(e, 1);
  t !== null && nt(t, e, 1, -1);
}
function Iu(e) {
  var t = st();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Wr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = av.bind(null, te, e)),
    [t.memoizedState, e]
  );
}
function Vr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (te.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function nf() {
  return Ge().memoizedState;
}
function Wo(e, t, n, r) {
  var o = st();
  (te.flags |= e),
    (o.memoizedState = Vr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Di(e, t, n, r) {
  var o = Ge();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (se !== null) {
    var l = se.memoizedState;
    if (((i = l.destroy), r !== null && ca(r, l.deps))) {
      o.memoizedState = Vr(t, n, i, r);
      return;
    }
  }
  (te.flags |= e), (o.memoizedState = Vr(1 | t, n, i, r));
}
function Lu(e, t) {
  return Wo(8390656, 8, e, t);
}
function pa(e, t) {
  return Di(2048, 8, e, t);
}
function rf(e, t) {
  return Di(4, 2, e, t);
}
function of(e, t) {
  return Di(4, 4, e, t);
}
function lf(e, t) {
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
function sf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Di(4, 4, lf.bind(null, t, e), n)
  );
}
function ma() {}
function af(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ca(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function uf(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ca(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function cf(e, t, n) {
  return fn & 21
    ? (ot(n, t) || ((n = fd()), (te.lanes |= n), (pn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ce = !0)), (e.memoizedState = n));
}
function lv(e, t) {
  var n = K;
  (K = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = hl.transition;
  hl.transition = {};
  try {
    e(!1), t();
  } finally {
    (K = n), (hl.transition = r);
  }
}
function df() {
  return Ge().memoizedState;
}
function sv(e, t, n) {
  var r = Ht(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ff(e))
  )
    pf(t, n);
  else if (((n = Bd(e, t, n, r)), n !== null)) {
    var o = we();
    nt(n, e, r, o), mf(n, t, r);
  }
}
function av(e, t, n) {
  var r = Ht(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ff(e)) pf(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          s = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), ot(s, l))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), ia(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Bd(e, t, o, r)),
      n !== null && ((o = we()), nt(n, e, r, o), mf(n, t, r));
  }
}
function ff(e) {
  var t = e.alternate;
  return e === te || (t !== null && t === te);
}
function pf(e, t) {
  kr = gi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function mf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Hs(e, n);
  }
}
var yi = {
    readContext: Ke,
    useCallback: me,
    useContext: me,
    useEffect: me,
    useImperativeHandle: me,
    useInsertionEffect: me,
    useLayoutEffect: me,
    useMemo: me,
    useReducer: me,
    useRef: me,
    useState: me,
    useDebugValue: me,
    useDeferredValue: me,
    useTransition: me,
    useMutableSource: me,
    useSyncExternalStore: me,
    useId: me,
    unstable_isNewReconciler: !1,
  },
  uv = {
    readContext: Ke,
    useCallback: function (e, t) {
      return (st().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ke,
    useEffect: Lu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Wo(4194308, 4, lf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Wo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Wo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = st();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = st();
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
        (e = e.dispatch = sv.bind(null, te, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = st();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Iu,
    useDebugValue: ma,
    useDeferredValue: function (e) {
      return (st().memoizedState = e);
    },
    useTransition: function () {
      var e = Iu(!1),
        t = e[0];
      return (e = lv.bind(null, e[1])), (st().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = te,
        o = st();
      if (q) {
        if (n === void 0) throw Error(P(407));
        n = n();
      } else {
        if (((n = t()), ce === null)) throw Error(P(349));
        fn & 30 || Zd(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Lu(qd.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Vr(9, Jd.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = st(),
        t = ce.identifierPrefix;
      if (q) {
        var n = yt,
          r = gt;
        (n = (r & ~(1 << (32 - tt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Br++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = iv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  cv = {
    readContext: Ke,
    useCallback: af,
    useContext: Ke,
    useEffect: pa,
    useImperativeHandle: sf,
    useInsertionEffect: rf,
    useLayoutEffect: of,
    useMemo: uf,
    useReducer: vl,
    useRef: nf,
    useState: function () {
      return vl(Wr);
    },
    useDebugValue: ma,
    useDeferredValue: function (e) {
      var t = Ge();
      return cf(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = vl(Wr)[0],
        t = Ge().memoizedState;
      return [e, t];
    },
    useMutableSource: Yd,
    useSyncExternalStore: Xd,
    useId: df,
    unstable_isNewReconciler: !1,
  },
  dv = {
    readContext: Ke,
    useCallback: af,
    useContext: Ke,
    useEffect: pa,
    useImperativeHandle: sf,
    useInsertionEffect: rf,
    useLayoutEffect: of,
    useMemo: uf,
    useReducer: gl,
    useRef: nf,
    useState: function () {
      return gl(Wr);
    },
    useDebugValue: ma,
    useDeferredValue: function (e) {
      var t = Ge();
      return se === null ? (t.memoizedState = e) : cf(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = gl(Wr)[0],
        t = Ge().memoizedState;
      return [e, t];
    },
    useMutableSource: Yd,
    useSyncExternalStore: Xd,
    useId: df,
    unstable_isNewReconciler: !1,
  };
function Yn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += jm(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function yl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function us(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var fv = typeof WeakMap == "function" ? WeakMap : Map;
function hf(e, t, n) {
  (n = wt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      xi || ((xi = !0), (ws = r)), us(e, t);
    }),
    n
  );
}
function vf(e, t, n) {
  (n = wt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        us(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        us(e, t),
          typeof r != "function" &&
            (Vt === null ? (Vt = new Set([this])) : Vt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function Du(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new fv();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = bv.bind(null, e, t, n)), t.then(e, e));
}
function zu(e) {
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
function ju(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = wt(-1, 1)), (t.tag = 2), Wt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var pv = _t.ReactCurrentOwner,
  Ce = !1;
function ye(e, t, n, r) {
  t.child = e === null ? Gd(t, null, n, r) : Gn(t, e.child, n, r);
}
function Fu(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Fn(t, o),
    (r = da(e, t, n, r, i, o)),
    (n = fa()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        $t(e, t, o))
      : (q && n && qs(t), (t.flags |= 1), ye(e, t, r, o), t.child)
  );
}
function Uu(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Ea(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), gf(e, t, i, r, o))
      : ((e = Go(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Lr), n(l, r) && e.ref === t.ref)
    )
      return $t(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Kt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function gf(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Lr(i, r) && e.ref === t.ref)
      if (((Ce = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ce = !0);
      else return (t.lanes = e.lanes), $t(e, t, o);
  }
  return cs(e, t, n, r, o);
}
function yf(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Q(In, Te),
        (Te |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Q(In, Te),
          (Te |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Q(In, Te),
        (Te |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Q(In, Te),
      (Te |= r);
  return ye(e, t, o, n), t.child;
}
function wf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function cs(e, t, n, r, o) {
  var i = be(n) ? cn : ge.current;
  return (
    (i = Hn(t, i)),
    Fn(t, o),
    (n = da(e, t, n, r, i, o)),
    (r = fa()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        $t(e, t, o))
      : (q && r && qs(t), (t.flags |= 1), ye(e, t, n, o), t.child)
  );
}
function Bu(e, t, n, r, o) {
  if (be(n)) {
    var i = !0;
    ci(t);
  } else i = !1;
  if ((Fn(t, o), t.stateNode === null))
    Vo(e, t), Hd(t, n, r), as(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var a = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ke(u))
      : ((u = be(n) ? cn : ge.current), (u = Hn(t, u)));
    var p = n.getDerivedStateFromProps,
      c =
        typeof p == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    c ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && Ou(t, l, r, u)),
      (At = !1);
    var m = t.memoizedState;
    (l.state = m),
      hi(t, r, l, o),
      (a = t.memoizedState),
      s !== r || m !== a || ke.current || At
        ? (typeof p == "function" && (ss(t, n, p, r), (a = t.memoizedState)),
          (s = At || Tu(t, n, s, r, m, a, u))
            ? (c ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (l.props = r),
          (l.state = a),
          (l.context = u),
          (r = s))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      Wd(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Je(t.type, s)),
      (l.props = u),
      (c = t.pendingProps),
      (m = l.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ke(a))
        : ((a = be(n) ? cn : ge.current), (a = Hn(t, a)));
    var v = n.getDerivedStateFromProps;
    (p =
      typeof v == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== c || m !== a) && Ou(t, l, r, a)),
      (At = !1),
      (m = t.memoizedState),
      (l.state = m),
      hi(t, r, l, o);
    var w = t.memoizedState;
    s !== c || m !== w || ke.current || At
      ? (typeof v == "function" && (ss(t, n, v, r), (w = t.memoizedState)),
        (u = At || Tu(t, n, u, r, m, w, a) || !1)
          ? (p ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, w, a),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, w, a)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (l.props = r),
        (l.state = w),
        (l.context = a),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ds(e, t, n, r, i, o);
}
function ds(e, t, n, r, o, i) {
  wf(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && _u(t, n, !1), $t(e, t, i);
  (r = t.stateNode), (pv.current = t);
  var s =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Gn(t, e.child, null, i)), (t.child = Gn(t, null, s, i)))
      : ye(e, t, s, i),
    (t.memoizedState = r.state),
    o && _u(t, n, !0),
    t.child
  );
}
function xf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? bu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && bu(e, t.context, !1),
    sa(e, t.containerInfo);
}
function Wu(e, t, n, r, o) {
  return Kn(), ta(o), (t.flags |= 256), ye(e, t, n, r), t.child;
}
var fs = { dehydrated: null, treeContext: null, retryLane: 0 };
function ps(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Sf(e, t, n) {
  var r = t.pendingProps,
    o = ee.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Q(ee, o & 1),
    e === null)
  )
    return (
      is(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = Fi(l, r, 0, null)),
              (e = un(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = ps(n)),
              (t.memoizedState = fs),
              e)
            : ha(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return mv(e, t, l, r, s, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (s = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Kt(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = Kt(s, i)) : ((i = un(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? ps(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = fs),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Kt(i, { mode: "visible", children: r.children })),
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
function ha(e, t) {
  return (
    (t = Fi({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Co(e, t, n, r) {
  return (
    r !== null && ta(r),
    Gn(t, e.child, null, n),
    (e = ha(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function mv(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = yl(Error(P(422)))), Co(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Fi({ mode: "visible", children: r.children }, o, 0, null)),
        (i = un(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Gn(t, e.child, null, l),
        (t.child.memoizedState = ps(l)),
        (t.memoizedState = fs),
        i);
  if (!(t.mode & 1)) return Co(e, t, l, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(P(419))), (r = yl(i, r, void 0)), Co(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), Ce || s)) {
    if (((r = ce), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Et(e, o), nt(r, e, o, -1));
    }
    return Sa(), (r = yl(Error(P(421)))), Co(e, t, l, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = _v.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ae = Bt(o.nextSibling)),
      (Ie = t),
      (q = !0),
      (et = null),
      e !== null &&
        ((Be[We++] = gt),
        (Be[We++] = yt),
        (Be[We++] = dn),
        (gt = e.id),
        (yt = e.overflow),
        (dn = t)),
      (t = ha(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Vu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ls(e.return, t, n);
}
function wl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Ef(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((ye(e, t, r.children, n), (r = ee.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Vu(e, n, t);
        else if (e.tag === 19) Vu(e, n, t);
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
  if ((Q(ee, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && vi(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          wl(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && vi(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        wl(t, !0, n, null, i);
        break;
      case "together":
        wl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Vo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function $t(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (pn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(P(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Kt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Kt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function hv(e, t, n) {
  switch (t.tag) {
    case 3:
      xf(t), Kn();
      break;
    case 5:
      Qd(t);
      break;
    case 1:
      be(t.type) && ci(t);
      break;
    case 4:
      sa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Q(pi, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Q(ee, ee.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Sf(e, t, n)
          : (Q(ee, ee.current & 1),
            (e = $t(e, t, n)),
            e !== null ? e.sibling : null);
      Q(ee, ee.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ef(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Q(ee, ee.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), yf(e, t, n);
  }
  return $t(e, t, n);
}
var $f, ms, Cf, kf;
$f = function (e, t) {
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
ms = function () {};
Cf = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), ln(dt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Ll(e, o)), (r = Ll(e, r)), (i = []);
        break;
      case "select":
        (o = ne({}, o, { value: void 0 })),
          (r = ne({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = jl(e, o)), (r = jl(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ai);
    }
    Ul(n, r);
    var l;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Rr.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((s = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== s && (a != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (a && a.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in a)
              a.hasOwnProperty(l) &&
                s[l] !== a[l] &&
                (n || (n = {}), (n[l] = a[l]));
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (i = i || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Rr.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && X("scroll", e),
                  i || s === a || (i = []))
                : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
kf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function fr(e, t) {
  if (!q)
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
function he(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function vv(e, t, n) {
  var r = t.pendingProps;
  switch ((ea(t), t.tag)) {
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
      return he(t), null;
    case 1:
      return be(t.type) && ui(), he(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Qn(),
        Z(ke),
        Z(ge),
        ua(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Eo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), et !== null && (Es(et), (et = null)))),
        ms(e, t),
        he(t),
        null
      );
    case 5:
      aa(t);
      var o = ln(Ur.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Cf(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(P(166));
          return he(t), null;
        }
        if (((e = ln(dt.current)), Eo(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[at] = t), (r[jr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              X("cancel", r), X("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              X("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < wr.length; o++) X(wr[o], r);
              break;
            case "source":
              X("error", r);
              break;
            case "img":
            case "image":
            case "link":
              X("error", r), X("load", r);
              break;
            case "details":
              X("toggle", r);
              break;
            case "input":
              qa(r, i), X("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                X("invalid", r);
              break;
            case "textarea":
              tu(r, i), X("invalid", r);
          }
          Ul(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      So(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      So(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : Rr.hasOwnProperty(l) &&
                  s != null &&
                  l === "onScroll" &&
                  X("scroll", r);
            }
          switch (n) {
            case "input":
              po(r), eu(r, i, !0);
              break;
            case "textarea":
              po(r), nu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ai);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Zc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[at] = t),
            (e[jr] = r),
            $f(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Bl(n, r)), n)) {
              case "dialog":
                X("cancel", e), X("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                X("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < wr.length; o++) X(wr[o], e);
                o = r;
                break;
              case "source":
                X("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                X("error", e), X("load", e), (o = r);
                break;
              case "details":
                X("toggle", e), (o = r);
                break;
              case "input":
                qa(e, r), (o = Ll(e, r)), X("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ne({}, r, { value: void 0 })),
                  X("invalid", e);
                break;
              case "textarea":
                tu(e, r), (o = jl(e, r)), X("invalid", e);
                break;
              default:
                o = r;
            }
            Ul(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var a = s[i];
                i === "style"
                  ? ed(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Jc(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Mr(e, a)
                    : typeof a == "number" && Mr(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Rr.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && X("scroll", e)
                      : a != null && js(e, i, a, l));
              }
            switch (n) {
              case "input":
                po(e), eu(e, r, !1);
                break;
              case "textarea":
                po(e), nu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Gt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Ln(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Ln(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ai);
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
      return he(t), null;
    case 6:
      if (e && t.stateNode != null) kf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
        if (((n = ln(Ur.current)), ln(dt.current), Eo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[at] = t),
            (i = r.nodeValue !== n) && ((e = Ie), e !== null))
          )
            switch (e.tag) {
              case 3:
                So(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  So(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[at] = t),
            (t.stateNode = r);
      }
      return he(t), null;
    case 13:
      if (
        (Z(ee),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (q && Ae !== null && t.mode & 1 && !(t.flags & 128))
          Ud(), Kn(), (t.flags |= 98560), (i = !1);
        else if (((i = Eo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(P(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(P(317));
            i[at] = t;
          } else
            Kn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          he(t), (i = !1);
        } else et !== null && (Es(et), (et = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ee.current & 1 ? ae === 0 && (ae = 3) : Sa())),
          t.updateQueue !== null && (t.flags |= 4),
          he(t),
          null);
    case 4:
      return (
        Qn(), ms(e, t), e === null && Dr(t.stateNode.containerInfo), he(t), null
      );
    case 10:
      return oa(t.type._context), he(t), null;
    case 17:
      return be(t.type) && ui(), he(t), null;
    case 19:
      if ((Z(ee), (i = t.memoizedState), i === null)) return he(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) fr(i, !1);
        else {
          if (ae !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = vi(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    fr(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Q(ee, (ee.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            oe() > Xn &&
            ((t.flags |= 128), (r = !0), fr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = vi(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              fr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !q)
            )
              return he(t), null;
          } else
            2 * oe() - i.renderingStartTime > Xn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), fr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = oe()),
          (t.sibling = null),
          (n = ee.current),
          Q(ee, r ? (n & 1) | 2 : n & 1),
          t)
        : (he(t), null);
    case 22:
    case 23:
      return (
        xa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Te & 1073741824 && (he(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : he(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(P(156, t.tag));
}
function gv(e, t) {
  switch ((ea(t), t.tag)) {
    case 1:
      return (
        be(t.type) && ui(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Qn(),
        Z(ke),
        Z(ge),
        ua(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return aa(t), null;
    case 13:
      if ((Z(ee), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(P(340));
        Kn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Z(ee), null;
    case 4:
      return Qn(), null;
    case 10:
      return oa(t.type._context), null;
    case 22:
    case 23:
      return xa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ko = !1,
  ve = !1,
  yv = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function An(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        re(e, t, r);
      }
    else n.current = null;
}
function hs(e, t, n) {
  try {
    n();
  } catch (r) {
    re(e, t, r);
  }
}
var Hu = !1;
function wv(e, t) {
  if (((Jl = ii), (e = Pd()), Js(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            s = -1,
            a = -1,
            u = 0,
            p = 0,
            c = e,
            m = null;
          t: for (;;) {
            for (
              var v;
              c !== n || (o !== 0 && c.nodeType !== 3) || (s = l + o),
                c !== i || (r !== 0 && c.nodeType !== 3) || (a = l + r),
                c.nodeType === 3 && (l += c.nodeValue.length),
                (v = c.firstChild) !== null;

            )
              (m = c), (c = v);
            for (;;) {
              if (c === e) break t;
              if (
                (m === n && ++u === o && (s = l),
                m === i && ++p === r && (a = l),
                (v = c.nextSibling) !== null)
              )
                break;
              (c = m), (m = c.parentNode);
            }
            c = v;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ql = { focusedElem: e, selectionRange: n }, ii = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (M = e);
    else
      for (; M !== null; ) {
        t = M;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var y = w.memoizedProps,
                    S = w.memoizedState,
                    h = t.stateNode,
                    f = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Je(t.type, y),
                      S
                    );
                  h.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(P(163));
            }
        } catch (x) {
          re(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (w = Hu), (Hu = !1), w;
}
function br(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && hs(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function zi(e, t) {
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
function vs(e) {
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
function bf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), bf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[at], delete t[jr], delete t[ns], delete t[tv], delete t[nv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function _f(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ku(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || _f(e.return)) return null;
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
function gs(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = ai));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (gs(e, t, n), e = e.sibling; e !== null; ) gs(e, t, n), (e = e.sibling);
}
function ys(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ys(e, t, n), e = e.sibling; e !== null; ) ys(e, t, n), (e = e.sibling);
}
var de = null,
  qe = !1;
function Rt(e, t, n) {
  for (n = n.child; n !== null; ) Pf(e, t, n), (n = n.sibling);
}
function Pf(e, t, n) {
  if (ct && typeof ct.onCommitFiberUnmount == "function")
    try {
      ct.onCommitFiberUnmount(Mi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ve || An(n, t);
    case 6:
      var r = de,
        o = qe;
      (de = null),
        Rt(e, t, n),
        (de = r),
        (qe = o),
        de !== null &&
          (qe
            ? ((e = de),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : de.removeChild(n.stateNode));
      break;
    case 18:
      de !== null &&
        (qe
          ? ((e = de),
            (n = n.stateNode),
            e.nodeType === 8
              ? fl(e.parentNode, n)
              : e.nodeType === 1 && fl(e, n),
            Ar(e))
          : fl(de, n.stateNode));
      break;
    case 4:
      (r = de),
        (o = qe),
        (de = n.stateNode.containerInfo),
        (qe = !0),
        Rt(e, t, n),
        (de = r),
        (qe = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ve &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && hs(n, t, l),
            (o = o.next);
        } while (o !== r);
      }
      Rt(e, t, n);
      break;
    case 1:
      if (
        !ve &&
        (An(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          re(n, t, s);
        }
      Rt(e, t, n);
      break;
    case 21:
      Rt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ve = (r = ve) || n.memoizedState !== null), Rt(e, t, n), (ve = r))
        : Rt(e, t, n);
      break;
    default:
      Rt(e, t, n);
  }
}
function Gu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new yv()),
      t.forEach(function (r) {
        var o = Pv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (de = s.stateNode), (qe = !1);
              break e;
            case 3:
              (de = s.stateNode.containerInfo), (qe = !0);
              break e;
            case 4:
              (de = s.stateNode.containerInfo), (qe = !0);
              break e;
          }
          s = s.return;
        }
        if (de === null) throw Error(P(160));
        Pf(i, l, o), (de = null), (qe = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        re(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Rf(t, e), (t = t.sibling);
}
function Rf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ze(t, e), lt(e), r & 4)) {
        try {
          br(3, e, e.return), zi(3, e);
        } catch (y) {
          re(e, e.return, y);
        }
        try {
          br(5, e, e.return);
        } catch (y) {
          re(e, e.return, y);
        }
      }
      break;
    case 1:
      Ze(t, e), lt(e), r & 512 && n !== null && An(n, n.return);
      break;
    case 5:
      if (
        (Ze(t, e),
        lt(e),
        r & 512 && n !== null && An(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Mr(o, "");
        } catch (y) {
          re(e, e.return, y);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && Yc(o, i),
              Bl(s, l);
            var u = Bl(s, i);
            for (l = 0; l < a.length; l += 2) {
              var p = a[l],
                c = a[l + 1];
              p === "style"
                ? ed(o, c)
                : p === "dangerouslySetInnerHTML"
                ? Jc(o, c)
                : p === "children"
                ? Mr(o, c)
                : js(o, p, c, u);
            }
            switch (s) {
              case "input":
                Dl(o, i);
                break;
              case "textarea":
                Xc(o, i);
                break;
              case "select":
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var v = i.value;
                v != null
                  ? Ln(o, !!i.multiple, v, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Ln(o, !!i.multiple, i.defaultValue, !0)
                      : Ln(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[jr] = i;
          } catch (y) {
            re(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Ze(t, e), lt(e), r & 4)) {
        if (e.stateNode === null) throw Error(P(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (y) {
          re(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Ze(t, e), lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ar(t.containerInfo);
        } catch (y) {
          re(e, e.return, y);
        }
      break;
    case 4:
      Ze(t, e), lt(e);
      break;
    case 13:
      Ze(t, e),
        lt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (ya = oe())),
        r & 4 && Gu(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ve = (u = ve) || p), Ze(t, e), (ve = u)) : Ze(t, e),
        lt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !p && e.mode & 1)
        )
          for (M = e, p = e.child; p !== null; ) {
            for (c = M = p; M !== null; ) {
              switch (((m = M), (v = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  br(4, m, m.return);
                  break;
                case 1:
                  An(m, m.return);
                  var w = m.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (y) {
                      re(r, n, y);
                    }
                  }
                  break;
                case 5:
                  An(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Yu(c);
                    continue;
                  }
              }
              v !== null ? ((v.return = m), (M = v)) : Yu(c);
            }
            p = p.sibling;
          }
        e: for (p = null, c = e; ; ) {
          if (c.tag === 5) {
            if (p === null) {
              p = c;
              try {
                (o = c.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = c.stateNode),
                      (a = c.memoizedProps.style),
                      (l =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = qc("display", l)));
              } catch (y) {
                re(e, e.return, y);
              }
            }
          } else if (c.tag === 6) {
            if (p === null)
              try {
                c.stateNode.nodeValue = u ? "" : c.memoizedProps;
              } catch (y) {
                re(e, e.return, y);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === e) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            p === c && (p = null), (c = c.return);
          }
          p === c && (p = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      Ze(t, e), lt(e), r & 4 && Gu(e);
      break;
    case 21:
      break;
    default:
      Ze(t, e), lt(e);
  }
}
function lt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (_f(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(P(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Mr(o, ""), (r.flags &= -33));
          var i = Ku(e);
          ys(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = Ku(e);
          gs(e, s, l);
          break;
        default:
          throw Error(P(161));
      }
    } catch (a) {
      re(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function xv(e, t, n) {
  (M = e), Mf(e);
}
function Mf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var o = M,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || ko;
      if (!l) {
        var s = o.alternate,
          a = (s !== null && s.memoizedState !== null) || ve;
        s = ko;
        var u = ve;
        if (((ko = l), (ve = a) && !u))
          for (M = o; M !== null; )
            (l = M),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Xu(o)
                : a !== null
                ? ((a.return = l), (M = a))
                : Xu(o);
        for (; i !== null; ) (M = i), Mf(i), (i = i.sibling);
        (M = o), (ko = s), (ve = u);
      }
      Qu(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (M = i)) : Qu(e);
  }
}
function Qu(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ve || zi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ve)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Je(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Nu(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Nu(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
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
                  var p = u.memoizedState;
                  if (p !== null) {
                    var c = p.dehydrated;
                    c !== null && Ar(c);
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
              throw Error(P(163));
          }
        ve || (t.flags & 512 && vs(t));
      } catch (m) {
        re(t, t.return, m);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function Yu(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function Xu(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            zi(4, t);
          } catch (a) {
            re(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              re(t, o, a);
            }
          }
          var i = t.return;
          try {
            vs(t);
          } catch (a) {
            re(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            vs(t);
          } catch (a) {
            re(t, l, a);
          }
      }
    } catch (a) {
      re(t, t.return, a);
    }
    if (t === e) {
      M = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (M = s);
      break;
    }
    M = t.return;
  }
}
var Sv = Math.ceil,
  wi = _t.ReactCurrentDispatcher,
  va = _t.ReactCurrentOwner,
  He = _t.ReactCurrentBatchConfig,
  H = 0,
  ce = null,
  ie = null,
  fe = 0,
  Te = 0,
  In = qt(0),
  ae = 0,
  Hr = null,
  pn = 0,
  ji = 0,
  ga = 0,
  _r = null,
  $e = null,
  ya = 0,
  Xn = 1 / 0,
  ht = null,
  xi = !1,
  ws = null,
  Vt = null,
  bo = !1,
  zt = null,
  Si = 0,
  Pr = 0,
  xs = null,
  Ho = -1,
  Ko = 0;
function we() {
  return H & 6 ? oe() : Ho !== -1 ? Ho : (Ho = oe());
}
function Ht(e) {
  return e.mode & 1
    ? H & 2 && fe !== 0
      ? fe & -fe
      : ov.transition !== null
      ? (Ko === 0 && (Ko = fd()), Ko)
      : ((e = K),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : wd(e.type))),
        e)
    : 1;
}
function nt(e, t, n, r) {
  if (50 < Pr) throw ((Pr = 0), (xs = null), Error(P(185)));
  Jr(e, n, r),
    (!(H & 2) || e !== ce) &&
      (e === ce && (!(H & 2) && (ji |= n), ae === 4 && Lt(e, fe)),
      _e(e, r),
      n === 1 && H === 0 && !(t.mode & 1) && ((Xn = oe() + 500), Ii && en()));
}
function _e(e, t) {
  var n = e.callbackNode;
  oh(e, t);
  var r = oi(e, e === ce ? fe : 0);
  if (r === 0)
    n !== null && iu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && iu(n), t === 1))
      e.tag === 0 ? rv(Zu.bind(null, e)) : zd(Zu.bind(null, e)),
        qh(function () {
          !(H & 6) && en();
        }),
        (n = null);
    else {
      switch (pd(r)) {
        case 1:
          n = Vs;
          break;
        case 4:
          n = cd;
          break;
        case 16:
          n = ri;
          break;
        case 536870912:
          n = dd;
          break;
        default:
          n = ri;
      }
      n = zf(n, Nf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Nf(e, t) {
  if (((Ho = -1), (Ko = 0), H & 6)) throw Error(P(327));
  var n = e.callbackNode;
  if (Un() && e.callbackNode !== n) return null;
  var r = oi(e, e === ce ? fe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ei(e, r);
  else {
    t = r;
    var o = H;
    H |= 2;
    var i = Of();
    (ce !== e || fe !== t) && ((ht = null), (Xn = oe() + 500), an(e, t));
    do
      try {
        Cv();
        break;
      } catch (s) {
        Tf(e, s);
      }
    while (!0);
    ra(),
      (wi.current = i),
      (H = o),
      ie !== null ? (t = 0) : ((ce = null), (fe = 0), (t = ae));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Gl(e)), o !== 0 && ((r = o), (t = Ss(e, o)))), t === 1)
    )
      throw ((n = Hr), an(e, 0), Lt(e, r), _e(e, oe()), n);
    if (t === 6) Lt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Ev(o) &&
          ((t = Ei(e, r)),
          t === 2 && ((i = Gl(e)), i !== 0 && ((r = i), (t = Ss(e, i)))),
          t === 1))
      )
        throw ((n = Hr), an(e, 0), Lt(e, r), _e(e, oe()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(P(345));
        case 2:
          nn(e, $e, ht);
          break;
        case 3:
          if (
            (Lt(e, r), (r & 130023424) === r && ((t = ya + 500 - oe()), 10 < t))
          ) {
            if (oi(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              we(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = ts(nn.bind(null, e, $e, ht), t);
            break;
          }
          nn(e, $e, ht);
          break;
        case 4:
          if ((Lt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - tt(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = oe() - r),
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
                : 1960 * Sv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ts(nn.bind(null, e, $e, ht), r);
            break;
          }
          nn(e, $e, ht);
          break;
        case 5:
          nn(e, $e, ht);
          break;
        default:
          throw Error(P(329));
      }
    }
  }
  return _e(e, oe()), e.callbackNode === n ? Nf.bind(null, e) : null;
}
function Ss(e, t) {
  var n = _r;
  return (
    e.current.memoizedState.isDehydrated && (an(e, t).flags |= 256),
    (e = Ei(e, t)),
    e !== 2 && ((t = $e), ($e = n), t !== null && Es(t)),
    e
  );
}
function Es(e) {
  $e === null ? ($e = e) : $e.push.apply($e, e);
}
function Ev(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!ot(i(), o)) return !1;
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
function Lt(e, t) {
  for (
    t &= ~ga,
      t &= ~ji,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - tt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Zu(e) {
  if (H & 6) throw Error(P(327));
  Un();
  var t = oi(e, 0);
  if (!(t & 1)) return _e(e, oe()), null;
  var n = Ei(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Gl(e);
    r !== 0 && ((t = r), (n = Ss(e, r)));
  }
  if (n === 1) throw ((n = Hr), an(e, 0), Lt(e, t), _e(e, oe()), n);
  if (n === 6) throw Error(P(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    nn(e, $e, ht),
    _e(e, oe()),
    null
  );
}
function wa(e, t) {
  var n = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    (H = n), H === 0 && ((Xn = oe() + 500), Ii && en());
  }
}
function mn(e) {
  zt !== null && zt.tag === 0 && !(H & 6) && Un();
  var t = H;
  H |= 1;
  var n = He.transition,
    r = K;
  try {
    if (((He.transition = null), (K = 1), e)) return e();
  } finally {
    (K = r), (He.transition = n), (H = t), !(H & 6) && en();
  }
}
function xa() {
  (Te = In.current), Z(In);
}
function an(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Jh(n)), ie !== null))
    for (n = ie.return; n !== null; ) {
      var r = n;
      switch ((ea(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ui();
          break;
        case 3:
          Qn(), Z(ke), Z(ge), ua();
          break;
        case 5:
          aa(r);
          break;
        case 4:
          Qn();
          break;
        case 13:
          Z(ee);
          break;
        case 19:
          Z(ee);
          break;
        case 10:
          oa(r.type._context);
          break;
        case 22:
        case 23:
          xa();
      }
      n = n.return;
    }
  if (
    ((ce = e),
    (ie = e = Kt(e.current, null)),
    (fe = Te = t),
    (ae = 0),
    (Hr = null),
    (ga = ji = pn = 0),
    ($e = _r = null),
    on !== null)
  ) {
    for (t = 0; t < on.length; t++)
      if (((n = on[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    on = null;
  }
  return e;
}
function Tf(e, t) {
  do {
    var n = ie;
    try {
      if ((ra(), (Bo.current = yi), gi)) {
        for (var r = te.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        gi = !1;
      }
      if (
        ((fn = 0),
        (ue = se = te = null),
        (kr = !1),
        (Br = 0),
        (va.current = null),
        n === null || n.return === null)
      ) {
        (ae = 1), (Hr = t), (ie = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          s = n,
          a = t;
        if (
          ((t = fe),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            p = s,
            c = p.tag;
          if (!(p.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var m = p.alternate;
            m
              ? ((p.updateQueue = m.updateQueue),
                (p.memoizedState = m.memoizedState),
                (p.lanes = m.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var v = zu(l);
          if (v !== null) {
            (v.flags &= -257),
              ju(v, l, s, i, t),
              v.mode & 1 && Du(i, u, t),
              (t = v),
              (a = u);
            var w = t.updateQueue;
            if (w === null) {
              var y = new Set();
              y.add(a), (t.updateQueue = y);
            } else w.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Du(i, u, t), Sa();
              break e;
            }
            a = Error(P(426));
          }
        } else if (q && s.mode & 1) {
          var S = zu(l);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              ju(S, l, s, i, t),
              ta(Yn(a, s));
            break e;
          }
        }
        (i = a = Yn(a, s)),
          ae !== 4 && (ae = 2),
          _r === null ? (_r = [i]) : _r.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = hf(i, a, t);
              Mu(i, h);
              break e;
            case 1:
              s = a;
              var f = i.type,
                g = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (Vt === null || !Vt.has(g))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var x = vf(i, s, t);
                Mu(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      If(n);
    } catch (E) {
      (t = E), ie === n && n !== null && (ie = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Of() {
  var e = wi.current;
  return (wi.current = yi), e === null ? yi : e;
}
function Sa() {
  (ae === 0 || ae === 3 || ae === 2) && (ae = 4),
    ce === null || (!(pn & 268435455) && !(ji & 268435455)) || Lt(ce, fe);
}
function Ei(e, t) {
  var n = H;
  H |= 2;
  var r = Of();
  (ce !== e || fe !== t) && ((ht = null), an(e, t));
  do
    try {
      $v();
      break;
    } catch (o) {
      Tf(e, o);
    }
  while (!0);
  if ((ra(), (H = n), (wi.current = r), ie !== null)) throw Error(P(261));
  return (ce = null), (fe = 0), ae;
}
function $v() {
  for (; ie !== null; ) Af(ie);
}
function Cv() {
  for (; ie !== null && !Ym(); ) Af(ie);
}
function Af(e) {
  var t = Df(e.alternate, e, Te);
  (e.memoizedProps = e.pendingProps),
    t === null ? If(e) : (ie = t),
    (va.current = null);
}
function If(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = gv(n, t)), n !== null)) {
        (n.flags &= 32767), (ie = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ae = 6), (ie = null);
        return;
      }
    } else if (((n = vv(n, t, Te)), n !== null)) {
      ie = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ie = t;
      return;
    }
    ie = t = e;
  } while (t !== null);
  ae === 0 && (ae = 5);
}
function nn(e, t, n) {
  var r = K,
    o = He.transition;
  try {
    (He.transition = null), (K = 1), kv(e, t, n, r);
  } finally {
    (He.transition = o), (K = r);
  }
  return null;
}
function kv(e, t, n, r) {
  do Un();
  while (zt !== null);
  if (H & 6) throw Error(P(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(P(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (ih(e, i),
    e === ce && ((ie = ce = null), (fe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      bo ||
      ((bo = !0),
      zf(ri, function () {
        return Un(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = He.transition), (He.transition = null);
    var l = K;
    K = 1;
    var s = H;
    (H |= 4),
      (va.current = null),
      wv(e, n),
      Rf(n, e),
      Hh(ql),
      (ii = !!Jl),
      (ql = Jl = null),
      (e.current = n),
      xv(n),
      Xm(),
      (H = s),
      (K = l),
      (He.transition = i);
  } else e.current = n;
  if (
    (bo && ((bo = !1), (zt = e), (Si = o)),
    (i = e.pendingLanes),
    i === 0 && (Vt = null),
    qm(n.stateNode),
    _e(e, oe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (xi) throw ((xi = !1), (e = ws), (ws = null), e);
  return (
    Si & 1 && e.tag !== 0 && Un(),
    (i = e.pendingLanes),
    i & 1 ? (e === xs ? Pr++ : ((Pr = 0), (xs = e))) : (Pr = 0),
    en(),
    null
  );
}
function Un() {
  if (zt !== null) {
    var e = pd(Si),
      t = He.transition,
      n = K;
    try {
      if (((He.transition = null), (K = 16 > e ? 16 : e), zt === null))
        var r = !1;
      else {
        if (((e = zt), (zt = null), (Si = 0), H & 6)) throw Error(P(331));
        var o = H;
        for (H |= 4, M = e.current; M !== null; ) {
          var i = M,
            l = i.child;
          if (M.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (M = u; M !== null; ) {
                  var p = M;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      br(8, p, i);
                  }
                  var c = p.child;
                  if (c !== null) (c.return = p), (M = c);
                  else
                    for (; M !== null; ) {
                      p = M;
                      var m = p.sibling,
                        v = p.return;
                      if ((bf(p), p === u)) {
                        M = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = v), (M = m);
                        break;
                      }
                      M = v;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var y = w.child;
                if (y !== null) {
                  w.child = null;
                  do {
                    var S = y.sibling;
                    (y.sibling = null), (y = S);
                  } while (y !== null);
                }
              }
              M = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (M = l);
          else
            e: for (; M !== null; ) {
              if (((i = M), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    br(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (M = h);
                break e;
              }
              M = i.return;
            }
        }
        var f = e.current;
        for (M = f; M !== null; ) {
          l = M;
          var g = l.child;
          if (l.subtreeFlags & 2064 && g !== null) (g.return = l), (M = g);
          else
            e: for (l = f; M !== null; ) {
              if (((s = M), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zi(9, s);
                  }
                } catch (E) {
                  re(s, s.return, E);
                }
              if (s === l) {
                M = null;
                break e;
              }
              var x = s.sibling;
              if (x !== null) {
                (x.return = s.return), (M = x);
                break e;
              }
              M = s.return;
            }
        }
        if (
          ((H = o), en(), ct && typeof ct.onPostCommitFiberRoot == "function")
        )
          try {
            ct.onPostCommitFiberRoot(Mi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (K = n), (He.transition = t);
    }
  }
  return !1;
}
function Ju(e, t, n) {
  (t = Yn(n, t)),
    (t = hf(e, t, 1)),
    (e = Wt(e, t, 1)),
    (t = we()),
    e !== null && (Jr(e, 1, t), _e(e, t));
}
function re(e, t, n) {
  if (e.tag === 3) Ju(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ju(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Vt === null || !Vt.has(r)))
        ) {
          (e = Yn(n, e)),
            (e = vf(t, e, 1)),
            (t = Wt(t, e, 1)),
            (e = we()),
            t !== null && (Jr(t, 1, e), _e(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function bv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = we()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ce === e &&
      (fe & n) === n &&
      (ae === 4 || (ae === 3 && (fe & 130023424) === fe && 500 > oe() - ya)
        ? an(e, 0)
        : (ga |= n)),
    _e(e, t);
}
function Lf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = vo), (vo <<= 1), !(vo & 130023424) && (vo = 4194304))
      : (t = 1));
  var n = we();
  (e = Et(e, t)), e !== null && (Jr(e, t, n), _e(e, n));
}
function _v(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Lf(e, n);
}
function Pv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(P(314));
  }
  r !== null && r.delete(t), Lf(e, n);
}
var Df;
Df = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ke.current) Ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ce = !1), hv(e, t, n);
      Ce = !!(e.flags & 131072);
    }
  else (Ce = !1), q && t.flags & 1048576 && jd(t, fi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Vo(e, t), (e = t.pendingProps);
      var o = Hn(t, ge.current);
      Fn(t, n), (o = da(null, t, r, e, o, n));
      var i = fa();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            be(r) ? ((i = !0), ci(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            la(t),
            (o.updater = Li),
            (t.stateNode = o),
            (o._reactInternals = t),
            as(t, r, e, n),
            (t = ds(null, t, r, !0, i, n)))
          : ((t.tag = 0), q && i && qs(t), ye(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Vo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Mv(r)),
          (e = Je(r, e)),
          o)
        ) {
          case 0:
            t = cs(null, t, r, e, n);
            break e;
          case 1:
            t = Bu(null, t, r, e, n);
            break e;
          case 11:
            t = Fu(null, t, r, e, n);
            break e;
          case 14:
            t = Uu(null, t, r, Je(r.type, e), n);
            break e;
        }
        throw Error(P(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Je(r, o)),
        cs(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Je(r, o)),
        Bu(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((xf(t), e === null)) throw Error(P(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Wd(e, t),
          hi(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Yn(Error(P(423)), t)), (t = Wu(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Yn(Error(P(424)), t)), (t = Wu(e, t, r, n, o));
            break e;
          } else
            for (
              Ae = Bt(t.stateNode.containerInfo.firstChild),
                Ie = t,
                q = !0,
                et = null,
                n = Gd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Kn(), r === o)) {
            t = $t(e, t, n);
            break e;
          }
          ye(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Qd(t),
        e === null && is(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        es(r, o) ? (l = null) : i !== null && es(r, i) && (t.flags |= 32),
        wf(e, t),
        ye(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && is(t), null;
    case 13:
      return Sf(e, t, n);
    case 4:
      return (
        sa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Gn(t, null, r, n)) : ye(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Je(r, o)),
        Fu(e, t, r, o, n)
      );
    case 7:
      return ye(e, t, t.pendingProps, n), t.child;
    case 8:
      return ye(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ye(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          Q(pi, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (ot(i.value, l)) {
            if (i.children === o.children && !ke.current) {
              t = $t(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                l = i.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = wt(-1, n & -n)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var p = u.pending;
                        p === null
                          ? (a.next = a)
                          : ((a.next = p.next), (p.next = a)),
                          (u.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      ls(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(P(341));
                (l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  ls(l, n, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        ye(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Fn(t, n),
        (o = Ke(o)),
        (r = r(o)),
        (t.flags |= 1),
        ye(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Je(r, t.pendingProps)),
        (o = Je(r.type, o)),
        Uu(e, t, r, o, n)
      );
    case 15:
      return gf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Je(r, o)),
        Vo(e, t),
        (t.tag = 1),
        be(r) ? ((e = !0), ci(t)) : (e = !1),
        Fn(t, n),
        Hd(t, r, o),
        as(t, r, o, n),
        ds(null, t, r, !0, e, n)
      );
    case 19:
      return Ef(e, t, n);
    case 22:
      return yf(e, t, n);
  }
  throw Error(P(156, t.tag));
};
function zf(e, t) {
  return ud(e, t);
}
function Rv(e, t, n, r) {
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
function Ve(e, t, n, r) {
  return new Rv(e, t, n, r);
}
function Ea(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Mv(e) {
  if (typeof e == "function") return Ea(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Us)) return 11;
    if (e === Bs) return 14;
  }
  return 2;
}
function Kt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ve(e.tag, t, e.key, e.mode)),
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
function Go(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) Ea(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case kn:
        return un(n.children, o, i, t);
      case Fs:
        (l = 8), (o |= 8);
        break;
      case Tl:
        return (
          (e = Ve(12, n, t, o | 2)), (e.elementType = Tl), (e.lanes = i), e
        );
      case Ol:
        return (e = Ve(13, n, t, o)), (e.elementType = Ol), (e.lanes = i), e;
      case Al:
        return (e = Ve(19, n, t, o)), (e.elementType = Al), (e.lanes = i), e;
      case Kc:
        return Fi(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Vc:
              l = 10;
              break e;
            case Hc:
              l = 9;
              break e;
            case Us:
              l = 11;
              break e;
            case Bs:
              l = 14;
              break e;
            case Ot:
              (l = 16), (r = null);
              break e;
          }
        throw Error(P(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ve(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function un(e, t, n, r) {
  return (e = Ve(7, e, r, t)), (e.lanes = n), e;
}
function Fi(e, t, n, r) {
  return (
    (e = Ve(22, e, r, t)),
    (e.elementType = Kc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function xl(e, t, n) {
  return (e = Ve(6, e, null, t)), (e.lanes = n), e;
}
function Sl(e, t, n) {
  return (
    (t = Ve(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Nv(e, t, n, r, o) {
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
    (this.eventTimes = tl(0)),
    (this.expirationTimes = tl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = tl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function $a(e, t, n, r, o, i, l, s, a) {
  return (
    (e = new Nv(e, t, n, s, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ve(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    la(i),
    e
  );
}
function Tv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Cn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function jf(e) {
  if (!e) return Qt;
  e = e._reactInternals;
  e: {
    if (gn(e) !== e || e.tag !== 1) throw Error(P(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (be(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(P(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (be(n)) return Dd(e, n, t);
  }
  return t;
}
function Ff(e, t, n, r, o, i, l, s, a) {
  return (
    (e = $a(n, r, !0, e, o, i, l, s, a)),
    (e.context = jf(null)),
    (n = e.current),
    (r = we()),
    (o = Ht(n)),
    (i = wt(r, o)),
    (i.callback = t ?? null),
    Wt(n, i, o),
    (e.current.lanes = o),
    Jr(e, o, r),
    _e(e, r),
    e
  );
}
function Ui(e, t, n, r) {
  var o = t.current,
    i = we(),
    l = Ht(o);
  return (
    (n = jf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = wt(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Wt(o, t, l)),
    e !== null && (nt(e, o, l, i), Uo(e, o, l)),
    l
  );
}
function $i(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function qu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ca(e, t) {
  qu(e, t), (e = e.alternate) && qu(e, t);
}
function Ov() {
  return null;
}
var Uf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ka(e) {
  this._internalRoot = e;
}
Bi.prototype.render = ka.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(P(409));
  Ui(e, t, null, null);
};
Bi.prototype.unmount = ka.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    mn(function () {
      Ui(null, e, null, null);
    }),
      (t[St] = null);
  }
};
function Bi(e) {
  this._internalRoot = e;
}
Bi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = vd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < It.length && t !== 0 && t < It[n].priority; n++);
    It.splice(n, 0, e), n === 0 && yd(e);
  }
};
function ba(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Wi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ec() {}
function Av(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = $i(l);
        i.call(u);
      };
    }
    var l = Ff(t, r, e, 0, null, !1, !1, "", ec);
    return (
      (e._reactRootContainer = l),
      (e[St] = l.current),
      Dr(e.nodeType === 8 ? e.parentNode : e),
      mn(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = $i(a);
      s.call(u);
    };
  }
  var a = $a(e, 0, !1, null, null, !1, !1, "", ec);
  return (
    (e._reactRootContainer = a),
    (e[St] = a.current),
    Dr(e.nodeType === 8 ? e.parentNode : e),
    mn(function () {
      Ui(t, a, n, r);
    }),
    a
  );
}
function Vi(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var a = $i(l);
        s.call(a);
      };
    }
    Ui(t, l, e, o);
  } else l = Av(n, t, e, o, r);
  return $i(l);
}
md = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = yr(t.pendingLanes);
        n !== 0 &&
          (Hs(t, n | 1), _e(t, oe()), !(H & 6) && ((Xn = oe() + 500), en()));
      }
      break;
    case 13:
      mn(function () {
        var r = Et(e, 1);
        if (r !== null) {
          var o = we();
          nt(r, e, 1, o);
        }
      }),
        Ca(e, 1);
  }
};
Ks = function (e) {
  if (e.tag === 13) {
    var t = Et(e, 134217728);
    if (t !== null) {
      var n = we();
      nt(t, e, 134217728, n);
    }
    Ca(e, 134217728);
  }
};
hd = function (e) {
  if (e.tag === 13) {
    var t = Ht(e),
      n = Et(e, t);
    if (n !== null) {
      var r = we();
      nt(n, e, t, r);
    }
    Ca(e, t);
  }
};
vd = function () {
  return K;
};
gd = function (e, t) {
  var n = K;
  try {
    return (K = e), t();
  } finally {
    K = n;
  }
};
Vl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Dl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Ai(r);
            if (!o) throw Error(P(90));
            Qc(r), Dl(r, o);
          }
        }
      }
      break;
    case "textarea":
      Xc(e, n);
      break;
    case "select":
      (t = n.value), t != null && Ln(e, !!n.multiple, t, !1);
  }
};
rd = wa;
od = mn;
var Iv = { usingClientEntryPoint: !1, Events: [eo, Rn, Ai, td, nd, wa] },
  pr = {
    findFiberByHostInstance: rn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Lv = {
    bundleType: pr.bundleType,
    version: pr.version,
    rendererPackageName: pr.rendererPackageName,
    rendererConfig: pr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: _t.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = sd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: pr.findFiberByHostInstance || Ov,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var _o = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!_o.isDisabled && _o.supportsFiber)
    try {
      (Mi = _o.inject(Lv)), (ct = _o);
    } catch {}
}
ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Iv;
ze.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ba(t)) throw Error(P(200));
  return Tv(e, t, null, n);
};
ze.createRoot = function (e, t) {
  if (!ba(e)) throw Error(P(299));
  var n = !1,
    r = "",
    o = Uf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = $a(e, 1, !1, null, null, n, !1, r, o)),
    (e[St] = t.current),
    Dr(e.nodeType === 8 ? e.parentNode : e),
    new ka(t)
  );
};
ze.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(P(188))
      : ((e = Object.keys(e).join(",")), Error(P(268, e)));
  return (e = sd(t)), (e = e === null ? null : e.stateNode), e;
};
ze.flushSync = function (e) {
  return mn(e);
};
ze.hydrate = function (e, t, n) {
  if (!Wi(t)) throw Error(P(200));
  return Vi(null, e, t, !0, n);
};
ze.hydrateRoot = function (e, t, n) {
  if (!ba(e)) throw Error(P(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    l = Uf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Ff(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[St] = t.current),
    Dr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Bi(t);
};
ze.render = function (e, t, n) {
  if (!Wi(t)) throw Error(P(200));
  return Vi(null, e, t, !1, n);
};
ze.unmountComponentAtNode = function (e) {
  if (!Wi(e)) throw Error(P(40));
  return e._reactRootContainer
    ? (mn(function () {
        Vi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[St] = null);
        });
      }),
      !0)
    : !1;
};
ze.unstable_batchedUpdates = wa;
ze.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Wi(n)) throw Error(P(200));
  if (e == null || e._reactInternals === void 0) throw Error(P(38));
  return Vi(e, t, n, !1, r);
};
ze.version = "18.2.0-next-9e3b772b8-20220608";
function Bf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bf);
    } catch (e) {
      console.error(e);
    }
}
Bf(), (jc.exports = ze);
var no = jc.exports;
const Dv = Pc(no);
var tc = no;
(Ml.createRoot = tc.createRoot), (Ml.hydrateRoot = tc.hydrateRoot);
const zv = () =>
  b.jsx("div", {
    className: "mx-auto sm:mx-4 md:mx-8 lg:mx-16 xl:mx-48 mt-20 mx-8",
    children: b.jsxs("div", {
      className: "max-w-4xl mx-auto",
      children: [
        b.jsx("p", {
          className: "text-3xl font-semibold",
          children: "Hei, olen Aaron! 👋",
        }),
        b.jsx("div", {
          className: "mt-3",
          children: b.jsxs("p", {
            className: "text-xl",
            children: [
              "Olen",
              " ",
              b.jsx("span", {
                className: "font-bold",
                children: "ohjelmistokehittäjäopiskelija",
              }),
              " ja olen kiinnostunut tietotekniikasta sekä koodaamisesta. Kiinnostavinta koodaamisessa on sen monimuotoisuus ja se, miten monella eri tavalla koodia pystyy luomaan pala palalta. Tykkään vapaa-ajallani koodailla projektejani sekä suunnitella uusia projekteja. Tykkään myös vapaa-ajallani koota ja suunnitella tietokoneita eri käyttötarkoituksiin. Olen toisen vuoden opiskelija ja haluaisin oppia ammattia työn kautta. Olen innokas ja haluan oppia uusia asioita joka päivä, jotta kehityn paremmaksi koodariksi. Jos kiinnostuit tai tuli kysyttävää laita sähköpostia.",
            ],
          }),
        }),
        b.jsxs("div", {
          className: "flex flex-wrap mt-5 block",
          children: [
            b.jsxs("div", {
              className: "w-full md:w-1/2",
              children: [
                b.jsx("p", {
                  className: "text-xl font-bold",
                  children: "Koodaamiseen liittyviä taitoja:",
                }),
                b.jsxs("ul", {
                  className: "text-md list-disc ml-5",
                  children: [
                    b.jsx("li", { children: "Git" }),
                    b.jsx("li", { children: "React" }),
                    b.jsx("li", { children: "JavaScript" }),
                    b.jsx("li", { children: "PHP" }),
                    b.jsx("li", { children: "MySQL" }),
                    b.jsx("li", { children: "Python" }),
                    b.jsx("li", { children: "Tailwind" }),
                    b.jsx("li", { children: "HTML / CSS" }),
                    b.jsx("li", { children: "Cypress" }),
                    b.jsx("li", { children: "Jest-testaus" }),
                  ],
                }),
              ],
            }),
            b.jsxs("div", {
              className: "w-full md:w-1/2 mt-5 md:mt-0",
              children: [
                b.jsx("p", {
                  className: "text-xl font-bold",
                  children: "Muita taitojani:",
                }),
                b.jsxs("ul", {
                  className: "text-md list-disc ml-5",
                  children: [
                    b.jsx("li", { children: "Logojen suunnittelu" }),
                    b.jsx("li", { children: "UI / UX suunnittelu" }),
                    b.jsx("li", {
                      children: "Tietokantojen suunnittelu / luonti",
                    }),
                    b.jsx("li", { children: "WordPress sivustojen luonti" }),
                    b.jsx("li", {
                      children: "Windows, MacOS ja Linux tuntemus",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        b.jsxs("div", {
          className: "mt-5",
          children: [
            b.jsx("p", {
              className: "text-xl font-bold",
              children: "Yhteystiedot",
            }),
            b.jsx("div", {
              className: "text-md",
              children: b.jsxs("ul", {
                className: " my-1",
                children: [
                  b.jsx("li", { children: "Puh: +358 40 323 4783" }),
                  b.jsx("li", {
                    children: "Sähköposti: Aaron.kairavuo@gmail.com",
                  }),
                ],
              }),
            }),
            b.jsx("p", {
              className: "text-[16px] font-semibold",
              children:
                "Suosittelen ottaa yhteyttä sähköpostitse, koska en pysty aina vastaamaan puhelimeen.",
            }),
          ],
        }),
      ],
    }),
  });
function I() {
  return (
    (I = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    I.apply(this, arguments)
  );
}
function ro(e, t = []) {
  let n = [];
  function r(i, l) {
    const s = d.createContext(l),
      a = n.length;
    n = [...n, l];
    function u(c) {
      const { scope: m, children: v, ...w } = c,
        y = (m == null ? void 0 : m[e][a]) || s,
        S = d.useMemo(() => w, Object.values(w));
      return d.createElement(y.Provider, { value: S }, v);
    }
    function p(c, m) {
      const v = (m == null ? void 0 : m[e][a]) || s,
        w = d.useContext(v);
      if (w) return w;
      if (l !== void 0) return l;
      throw new Error(`\`${c}\` must be used within \`${i}\``);
    }
    return (u.displayName = i + "Provider"), [u, p];
  }
  const o = () => {
    const i = n.map((l) => d.createContext(l));
    return function (s) {
      const a = (s == null ? void 0 : s[e]) || i;
      return d.useMemo(() => ({ [`__scope${e}`]: { ...s, [e]: a } }), [s, a]);
    };
  };
  return (o.scopeName = e), [r, jv(o, ...t)];
}
function jv(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const l = r.reduce((s, { useScope: a, scopeName: u }) => {
        const c = a(i)[`__scope${u}`];
        return { ...s, ...c };
      }, {});
      return d.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function Fv(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function _a(...e) {
  return (t) => e.forEach((n) => Fv(n, t));
}
function Pe(...e) {
  return d.useCallback(_a(...e), e);
}
const Kr = d.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = d.Children.toArray(n),
    i = o.find(Bv);
  if (i) {
    const l = i.props.children,
      s = o.map((a) =>
        a === i
          ? d.Children.count(l) > 1
            ? d.Children.only(null)
            : d.isValidElement(l)
            ? l.props.children
            : null
          : a
      );
    return d.createElement(
      $s,
      I({}, r, { ref: t }),
      d.isValidElement(l) ? d.cloneElement(l, void 0, s) : null
    );
  }
  return d.createElement($s, I({}, r, { ref: t }), n);
});
Kr.displayName = "Slot";
const $s = d.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return d.isValidElement(n)
    ? d.cloneElement(n, { ...Wv(r, n.props), ref: t ? _a(t, n.ref) : n.ref })
    : d.Children.count(n) > 1
    ? d.Children.only(null)
    : null;
});
$s.displayName = "SlotClone";
const Uv = ({ children: e }) => d.createElement(d.Fragment, null, e);
function Bv(e) {
  return d.isValidElement(e) && e.type === Uv;
}
function Wv(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...s) => {
            i(...s), o(...s);
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...i })
      : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Pa(e) {
  const t = e + "CollectionProvider",
    [n, r] = ro(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    l = (v) => {
      const { scope: w, children: y } = v,
        S = Ue.useRef(null),
        h = Ue.useRef(new Map()).current;
      return Ue.createElement(o, { scope: w, itemMap: h, collectionRef: S }, y);
    },
    s = e + "CollectionSlot",
    a = Ue.forwardRef((v, w) => {
      const { scope: y, children: S } = v,
        h = i(s, y),
        f = Pe(w, h.collectionRef);
      return Ue.createElement(Kr, { ref: f }, S);
    }),
    u = e + "CollectionItemSlot",
    p = "data-radix-collection-item",
    c = Ue.forwardRef((v, w) => {
      const { scope: y, children: S, ...h } = v,
        f = Ue.useRef(null),
        g = Pe(w, f),
        x = i(u, y);
      return (
        Ue.useEffect(
          () => (
            x.itemMap.set(f, { ref: f, ...h }), () => void x.itemMap.delete(f)
          )
        ),
        Ue.createElement(Kr, { [p]: "", ref: g }, S)
      );
    });
  function m(v) {
    const w = i(e + "CollectionConsumer", v);
    return Ue.useCallback(() => {
      const S = w.collectionRef.current;
      if (!S) return [];
      const h = Array.from(S.querySelectorAll(`[${p}]`));
      return Array.from(w.itemMap.values()).sort(
        (x, E) => h.indexOf(x.ref.current) - h.indexOf(E.ref.current)
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [{ Provider: l, Slot: a, ItemSlot: c }, m, r];
}
const Vv = d.createContext(void 0);
function Ra(e) {
  const t = d.useContext(Vv);
  return e || t || "ltr";
}
function z(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
const Zn =
    globalThis != null && globalThis.document ? d.useLayoutEffect : () => {},
  Hv = _m.useId || (() => {});
let Kv = 0;
function Qo(e) {
  const [t, n] = d.useState(Hv());
  return (
    Zn(() => {
      e || n((r) => r ?? String(Kv++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
const Gv = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  Fe = Gv.reduce((e, t) => {
    const n = d.forwardRef((r, o) => {
      const { asChild: i, ...l } = r,
        s = i ? Kr : t;
      return (
        d.useEffect(() => {
          window[Symbol.for("radix-ui")] = !0;
        }, []),
        d.createElement(s, I({}, l, { ref: o }))
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function Wf(e, t) {
  e && no.flushSync(() => e.dispatchEvent(t));
}
function ft(e) {
  const t = d.useRef(e);
  return (
    d.useEffect(() => {
      t.current = e;
    }),
    d.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) === null || r === void 0
            ? void 0
            : r.call(t, ...n);
        },
      []
    )
  );
}
function Qv(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ft(e);
  d.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r),
      () => t.removeEventListener("keydown", r)
    );
  }, [n, t]);
}
const Cs = "dismissableLayer.update",
  Yv = "dismissableLayer.pointerDownOutside",
  Xv = "dismissableLayer.focusOutside";
let nc;
const Zv = d.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Jv = d.forwardRef((e, t) => {
    var n;
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: i,
        onFocusOutside: l,
        onInteractOutside: s,
        onDismiss: a,
        ...u
      } = e,
      p = d.useContext(Zv),
      [c, m] = d.useState(null),
      v =
        (n = c == null ? void 0 : c.ownerDocument) !== null && n !== void 0
          ? n
          : globalThis == null
          ? void 0
          : globalThis.document,
      [, w] = d.useState({}),
      y = Pe(t, (k) => m(k)),
      S = Array.from(p.layers),
      [h] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1),
      f = S.indexOf(h),
      g = c ? S.indexOf(c) : -1,
      x = p.layersWithOutsidePointerEventsDisabled.size > 0,
      E = g >= f,
      C = qv((k) => {
        const A = k.target,
          N = [...p.branches].some((B) => B.contains(A));
        !E ||
          N ||
          (i == null || i(k),
          s == null || s(k),
          k.defaultPrevented || a == null || a());
      }, v),
      $ = eg((k) => {
        const A = k.target;
        [...p.branches].some((B) => B.contains(A)) ||
          (l == null || l(k),
          s == null || s(k),
          k.defaultPrevented || a == null || a());
      }, v);
    return (
      Qv((k) => {
        g === p.layers.size - 1 &&
          (o == null || o(k),
          !k.defaultPrevented && a && (k.preventDefault(), a()));
      }, v),
      d.useEffect(() => {
        if (c)
          return (
            r &&
              (p.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((nc = v.body.style.pointerEvents),
                (v.body.style.pointerEvents = "none")),
              p.layersWithOutsidePointerEventsDisabled.add(c)),
            p.layers.add(c),
            rc(),
            () => {
              r &&
                p.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (v.body.style.pointerEvents = nc);
            }
          );
      }, [c, v, r, p]),
      d.useEffect(
        () => () => {
          c &&
            (p.layers.delete(c),
            p.layersWithOutsidePointerEventsDisabled.delete(c),
            rc());
        },
        [c, p]
      ),
      d.useEffect(() => {
        const k = () => w({});
        return (
          document.addEventListener(Cs, k),
          () => document.removeEventListener(Cs, k)
        );
      }, []),
      d.createElement(
        Fe.div,
        I({}, u, {
          ref: y,
          style: {
            pointerEvents: x ? (E ? "auto" : "none") : void 0,
            ...e.style,
          },
          onFocusCapture: z(e.onFocusCapture, $.onFocusCapture),
          onBlurCapture: z(e.onBlurCapture, $.onBlurCapture),
          onPointerDownCapture: z(
            e.onPointerDownCapture,
            C.onPointerDownCapture
          ),
        })
      )
    );
  });
function qv(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ft(e),
    r = d.useRef(!1),
    o = d.useRef(() => {});
  return (
    d.useEffect(() => {
      const i = (s) => {
          if (s.target && !r.current) {
            let p = function () {
              Vf(Yv, n, u, { discrete: !0 });
            };
            var a = p;
            const u = { originalEvent: s };
            s.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = p),
                t.addEventListener("click", o.current, { once: !0 }))
              : p();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        l = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(l),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function eg(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ft(e),
    r = d.useRef(!1);
  return (
    d.useEffect(() => {
      const o = (i) => {
        i.target &&
          !r.current &&
          Vf(Xv, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function rc() {
  const e = new CustomEvent(Cs);
  document.dispatchEvent(e);
}
function Vf(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Wf(o, i) : o.dispatchEvent(i);
}
let El = 0;
function tg() {
  d.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement(
        "afterbegin",
        (e = n[0]) !== null && e !== void 0 ? e : oc()
      ),
      document.body.insertAdjacentElement(
        "beforeend",
        (t = n[1]) !== null && t !== void 0 ? t : oc()
      ),
      El++,
      () => {
        El === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((r) => r.remove()),
          El--;
      }
    );
  }, []);
}
function oc() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.cssText =
      "outline: none; opacity: 0; position: fixed; pointer-events: none"),
    e
  );
}
const $l = "focusScope.autoFocusOnMount",
  Cl = "focusScope.autoFocusOnUnmount",
  ic = { bubbles: !1, cancelable: !0 },
  ng = d.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        ...l
      } = e,
      [s, a] = d.useState(null),
      u = ft(o),
      p = ft(i),
      c = d.useRef(null),
      m = Pe(t, (y) => a(y)),
      v = d.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    d.useEffect(() => {
      if (r) {
        let f = function (C) {
            if (v.paused || !s) return;
            const $ = C.target;
            s.contains($) ? (c.current = $) : Tt(c.current, { select: !0 });
          },
          g = function (C) {
            if (v.paused || !s) return;
            const $ = C.relatedTarget;
            $ !== null && (s.contains($) || Tt(c.current, { select: !0 }));
          },
          x = function (C) {
            if (document.activeElement === document.body)
              for (const k of C) k.removedNodes.length > 0 && Tt(s);
          };
        var y = f,
          S = g,
          h = x;
        document.addEventListener("focusin", f),
          document.addEventListener("focusout", g);
        const E = new MutationObserver(x);
        return (
          s && E.observe(s, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", f),
              document.removeEventListener("focusout", g),
              E.disconnect();
          }
        );
      }
    }, [r, s, v.paused]),
      d.useEffect(() => {
        if (s) {
          sc.add(v);
          const y = document.activeElement;
          if (!s.contains(y)) {
            const h = new CustomEvent($l, ic);
            s.addEventListener($l, u),
              s.dispatchEvent(h),
              h.defaultPrevented ||
                (rg(ag(Hf(s)), { select: !0 }),
                document.activeElement === y && Tt(s));
          }
          return () => {
            s.removeEventListener($l, u),
              setTimeout(() => {
                const h = new CustomEvent(Cl, ic);
                s.addEventListener(Cl, p),
                  s.dispatchEvent(h),
                  h.defaultPrevented || Tt(y ?? document.body, { select: !0 }),
                  s.removeEventListener(Cl, p),
                  sc.remove(v);
              }, 0);
          };
        }
      }, [s, u, p, v]);
    const w = d.useCallback(
      (y) => {
        if ((!n && !r) || v.paused) return;
        const S = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey,
          h = document.activeElement;
        if (S && h) {
          const f = y.currentTarget,
            [g, x] = og(f);
          g && x
            ? !y.shiftKey && h === x
              ? (y.preventDefault(), n && Tt(g, { select: !0 }))
              : y.shiftKey &&
                h === g &&
                (y.preventDefault(), n && Tt(x, { select: !0 }))
            : h === f && y.preventDefault();
        }
      },
      [n, r, v.paused]
    );
    return d.createElement(
      Fe.div,
      I({ tabIndex: -1 }, l, { ref: m, onKeyDown: w })
    );
  });
function rg(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((Tt(r, { select: t }), document.activeElement !== n)) return;
}
function og(e) {
  const t = Hf(e),
    n = lc(t, e),
    r = lc(t.reverse(), e);
  return [n, r];
}
function Hf(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function lc(e, t) {
  for (const n of e) if (!ig(n, { upTo: t })) return n;
}
function ig(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function lg(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Tt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && lg(e) && t && e.select();
  }
}
const sc = sg();
function sg() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = ac(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = ac(e, t)), (n = e[0]) === null || n === void 0 || n.resume();
    },
  };
}
function ac(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function ag(e) {
  return e.filter((t) => t.tagName !== "A");
}
const ug = ["top", "right", "bottom", "left"],
  Yt = Math.min,
  Oe = Math.max,
  Ci = Math.round,
  Po = Math.floor,
  Xt = (e) => ({ x: e, y: e }),
  cg = { left: "right", right: "left", bottom: "top", top: "bottom" },
  dg = { start: "end", end: "start" };
function ks(e, t, n) {
  return Oe(e, Yt(t, n));
}
function Ct(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function kt(e) {
  return e.split("-")[0];
}
function nr(e) {
  return e.split("-")[1];
}
function Ma(e) {
  return e === "x" ? "y" : "x";
}
function Na(e) {
  return e === "y" ? "height" : "width";
}
function rr(e) {
  return ["top", "bottom"].includes(kt(e)) ? "y" : "x";
}
function Ta(e) {
  return Ma(rr(e));
}
function fg(e, t, n) {
  n === void 0 && (n = !1);
  const r = nr(e),
    o = Ta(e),
    i = Na(o);
  let l =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[i] > t.floating[i] && (l = ki(l)), [l, ki(l)];
}
function pg(e) {
  const t = ki(e);
  return [bs(e), t, bs(t)];
}
function bs(e) {
  return e.replace(/start|end/g, (t) => dg[t]);
}
function mg(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    i = ["top", "bottom"],
    l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? i : l;
    default:
      return [];
  }
}
function hg(e, t, n, r) {
  const o = nr(e);
  let i = mg(kt(e), n === "start", r);
  return (
    o && ((i = i.map((l) => l + "-" + o)), t && (i = i.concat(i.map(bs)))), i
  );
}
function ki(e) {
  return e.replace(/left|right|bottom|top/g, (t) => cg[t]);
}
function vg(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Kf(e) {
  return typeof e != "number"
    ? vg(e)
    : { top: e, right: e, bottom: e, left: e };
}
function bi(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height,
  };
}
function uc(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = rr(t),
    l = Ta(t),
    s = Na(l),
    a = kt(t),
    u = i === "y",
    p = r.x + r.width / 2 - o.width / 2,
    c = r.y + r.height / 2 - o.height / 2,
    m = r[s] / 2 - o[s] / 2;
  let v;
  switch (a) {
    case "top":
      v = { x: p, y: r.y - o.height };
      break;
    case "bottom":
      v = { x: p, y: r.y + r.height };
      break;
    case "right":
      v = { x: r.x + r.width, y: c };
      break;
    case "left":
      v = { x: r.x - o.width, y: c };
      break;
    default:
      v = { x: r.x, y: r.y };
  }
  switch (nr(t)) {
    case "start":
      v[l] -= m * (n && u ? -1 : 1);
      break;
    case "end":
      v[l] += m * (n && u ? -1 : 1);
      break;
  }
  return v;
}
const gg = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: i = [],
      platform: l,
    } = n,
    s = i.filter(Boolean),
    a = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let u = await l.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: p, y: c } = uc(u, r, a),
    m = r,
    v = {},
    w = 0;
  for (let y = 0; y < s.length; y++) {
    const { name: S, fn: h } = s[y],
      {
        x: f,
        y: g,
        data: x,
        reset: E,
      } = await h({
        x: p,
        y: c,
        initialPlacement: r,
        placement: m,
        strategy: o,
        middlewareData: v,
        rects: u,
        platform: l,
        elements: { reference: e, floating: t },
      });
    (p = f ?? p),
      (c = g ?? c),
      (v = { ...v, [S]: { ...v[S], ...x } }),
      E &&
        w <= 50 &&
        (w++,
        typeof E == "object" &&
          (E.placement && (m = E.placement),
          E.rects &&
            (u =
              E.rects === !0
                ? await l.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : E.rects),
          ({ x: p, y: c } = uc(u, m, a))),
        (y = -1));
  }
  return { x: p, y: c, placement: m, strategy: o, middlewareData: v };
};
async function Gr(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: l, elements: s, strategy: a } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: p = "viewport",
      elementContext: c = "floating",
      altBoundary: m = !1,
      padding: v = 0,
    } = Ct(t, e),
    w = Kf(v),
    S = s[m ? (c === "floating" ? "reference" : "floating") : c],
    h = bi(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(S))) == null ||
          n
            ? S
            : S.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(s.floating))),
        boundary: u,
        rootBoundary: p,
        strategy: a,
      })
    ),
    f = c === "floating" ? { ...l.floating, x: r, y: o } : l.reference,
    g = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(s.floating)),
    x = (await (i.isElement == null ? void 0 : i.isElement(g)))
      ? (await (i.getScale == null ? void 0 : i.getScale(g))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    E = bi(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: s,
            rect: f,
            offsetParent: g,
            strategy: a,
          })
        : f
    );
  return {
    top: (h.top - E.top + w.top) / x.y,
    bottom: (E.bottom - h.bottom + w.bottom) / x.y,
    left: (h.left - E.left + w.left) / x.x,
    right: (E.right - h.right + w.right) / x.x,
  };
}
const yg = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          platform: l,
          elements: s,
          middlewareData: a,
        } = t,
        { element: u, padding: p = 0 } = Ct(e, t) || {};
      if (u == null) return {};
      const c = Kf(p),
        m = { x: n, y: r },
        v = Ta(o),
        w = Na(v),
        y = await l.getDimensions(u),
        S = v === "y",
        h = S ? "top" : "left",
        f = S ? "bottom" : "right",
        g = S ? "clientHeight" : "clientWidth",
        x = i.reference[w] + i.reference[v] - m[v] - i.floating[w],
        E = m[v] - i.reference[v],
        C = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(u));
      let $ = C ? C[g] : 0;
      (!$ || !(await (l.isElement == null ? void 0 : l.isElement(C)))) &&
        ($ = s.floating[g] || i.floating[w]);
      const k = x / 2 - E / 2,
        A = $ / 2 - y[w] / 2 - 1,
        N = Yt(c[h], A),
        B = Yt(c[f], A),
        O = N,
        J = $ - y[w] - B,
        j = $ / 2 - y[w] / 2 + k,
        W = ks(O, j, J),
        G =
          !a.arrow &&
          nr(o) != null &&
          j !== W &&
          i.reference[w] / 2 - (j < O ? N : B) - y[w] / 2 < 0,
        F = G ? (j < O ? j - O : j - J) : 0;
      return {
        [v]: m[v] + F,
        data: {
          [v]: W,
          centerOffset: j - W - F,
          ...(G && { alignmentOffset: F }),
        },
        reset: G,
      };
    },
  }),
  wg = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: i,
              rects: l,
              initialPlacement: s,
              platform: a,
              elements: u,
            } = t,
            {
              mainAxis: p = !0,
              crossAxis: c = !0,
              fallbackPlacements: m,
              fallbackStrategy: v = "bestFit",
              fallbackAxisSideDirection: w = "none",
              flipAlignment: y = !0,
              ...S
            } = Ct(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const h = kt(o),
            f = kt(s) === s,
            g = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
            x = m || (f || !y ? [ki(s)] : pg(s));
          !m && w !== "none" && x.push(...hg(s, y, w, g));
          const E = [s, ...x],
            C = await Gr(t, S),
            $ = [];
          let k = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((p && $.push(C[h]), c)) {
            const O = fg(o, l, g);
            $.push(C[O[0]], C[O[1]]);
          }
          if (
            ((k = [...k, { placement: o, overflows: $ }]),
            !$.every((O) => O <= 0))
          ) {
            var A, N;
            const O = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1,
              J = E[O];
            if (J)
              return {
                data: { index: O, overflows: k },
                reset: { placement: J },
              };
            let j =
              (N = k
                .filter((W) => W.overflows[0] <= 0)
                .sort((W, G) => W.overflows[1] - G.overflows[1])[0]) == null
                ? void 0
                : N.placement;
            if (!j)
              switch (v) {
                case "bestFit": {
                  var B;
                  const W =
                    (B = k
                      .map((G) => [
                        G.placement,
                        G.overflows
                          .filter((F) => F > 0)
                          .reduce((F, R) => F + R, 0),
                      ])
                      .sort((G, F) => G[1] - F[1])[0]) == null
                      ? void 0
                      : B[0];
                  W && (j = W);
                  break;
                }
                case "initialPlacement":
                  j = s;
                  break;
              }
            if (o !== j) return { reset: { placement: j } };
          }
          return {};
        },
      }
    );
  };
function cc(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function dc(e) {
  return ug.some((t) => e[t] >= 0);
}
const xg = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...o } = Ct(e, t);
        switch (r) {
          case "referenceHidden": {
            const i = await Gr(t, { ...o, elementContext: "reference" }),
              l = cc(i, n.reference);
            return {
              data: { referenceHiddenOffsets: l, referenceHidden: dc(l) },
            };
          }
          case "escaped": {
            const i = await Gr(t, { ...o, altBoundary: !0 }),
              l = cc(i, n.floating);
            return { data: { escapedOffsets: l, escaped: dc(l) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function Sg(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    l = kt(n),
    s = nr(n),
    a = rr(n) === "y",
    u = ["left", "top"].includes(l) ? -1 : 1,
    p = i && a ? -1 : 1,
    c = Ct(t, e);
  let {
    mainAxis: m,
    crossAxis: v,
    alignmentAxis: w,
  } = typeof c == "number"
    ? { mainAxis: c, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...c };
  return (
    s && typeof w == "number" && (v = s === "end" ? w * -1 : w),
    a ? { x: v * p, y: m * u } : { x: m * u, y: v * p }
  );
}
const Eg = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: i, placement: l, middlewareData: s } = t,
            a = await Sg(t, e);
          return l === ((n = s.offset) == null ? void 0 : n.placement) &&
            (r = s.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + a.x, y: i + a.y, data: { ...a, placement: l } };
        },
      }
    );
  },
  $g = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: l = !1,
              limiter: s = {
                fn: (S) => {
                  let { x: h, y: f } = S;
                  return { x: h, y: f };
                },
              },
              ...a
            } = Ct(e, t),
            u = { x: n, y: r },
            p = await Gr(t, a),
            c = rr(kt(o)),
            m = Ma(c);
          let v = u[m],
            w = u[c];
          if (i) {
            const S = m === "y" ? "top" : "left",
              h = m === "y" ? "bottom" : "right",
              f = v + p[S],
              g = v - p[h];
            v = ks(f, v, g);
          }
          if (l) {
            const S = c === "y" ? "top" : "left",
              h = c === "y" ? "bottom" : "right",
              f = w + p[S],
              g = w - p[h];
            w = ks(f, w, g);
          }
          const y = s.fn({ ...t, [m]: v, [c]: w });
          return { ...y, data: { x: y.x - n, y: y.y - r } };
        },
      }
    );
  },
  Cg = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: l } = t,
            { offset: s = 0, mainAxis: a = !0, crossAxis: u = !0 } = Ct(e, t),
            p = { x: n, y: r },
            c = rr(o),
            m = Ma(c);
          let v = p[m],
            w = p[c];
          const y = Ct(s, t),
            S =
              typeof y == "number"
                ? { mainAxis: y, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...y };
          if (a) {
            const g = m === "y" ? "height" : "width",
              x = i.reference[m] - i.floating[g] + S.mainAxis,
              E = i.reference[m] + i.reference[g] - S.mainAxis;
            v < x ? (v = x) : v > E && (v = E);
          }
          if (u) {
            var h, f;
            const g = m === "y" ? "width" : "height",
              x = ["top", "left"].includes(kt(o)),
              E =
                i.reference[c] -
                i.floating[g] +
                ((x && ((h = l.offset) == null ? void 0 : h[c])) || 0) +
                (x ? 0 : S.crossAxis),
              C =
                i.reference[c] +
                i.reference[g] +
                (x ? 0 : ((f = l.offset) == null ? void 0 : f[c]) || 0) -
                (x ? S.crossAxis : 0);
            w < E ? (w = E) : w > C && (w = C);
          }
          return { [m]: v, [c]: w };
        },
      }
    );
  },
  kg = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          const { placement: n, rects: r, platform: o, elements: i } = t,
            { apply: l = () => {}, ...s } = Ct(e, t),
            a = await Gr(t, s),
            u = kt(n),
            p = nr(n),
            c = rr(n) === "y",
            { width: m, height: v } = r.floating;
          let w, y;
          u === "top" || u === "bottom"
            ? ((w = u),
              (y =
                p ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(i.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((y = u), (w = p === "end" ? "top" : "bottom"));
          const S = v - a[w],
            h = m - a[y],
            f = !t.middlewareData.shift;
          let g = S,
            x = h;
          if (c) {
            const C = m - a.left - a.right;
            x = p || f ? Yt(h, C) : C;
          } else {
            const C = v - a.top - a.bottom;
            g = p || f ? Yt(S, C) : C;
          }
          if (f && !p) {
            const C = Oe(a.left, 0),
              $ = Oe(a.right, 0),
              k = Oe(a.top, 0),
              A = Oe(a.bottom, 0);
            c
              ? (x = m - 2 * (C !== 0 || $ !== 0 ? C + $ : Oe(a.left, a.right)))
              : (g =
                  v - 2 * (k !== 0 || A !== 0 ? k + A : Oe(a.top, a.bottom)));
          }
          await l({ ...t, availableWidth: x, availableHeight: g });
          const E = await o.getDimensions(i.floating);
          return m !== E.width || v !== E.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Zt(e) {
  return Gf(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Le(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Pt(e) {
  var t;
  return (t = (Gf(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Gf(e) {
  return e instanceof Node || e instanceof Le(e).Node;
}
function bt(e) {
  return e instanceof Element || e instanceof Le(e).Element;
}
function pt(e) {
  return e instanceof HTMLElement || e instanceof Le(e).HTMLElement;
}
function fc(e) {
  return typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Le(e).ShadowRoot;
}
function oo(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = Qe(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function bg(e) {
  return ["table", "td", "th"].includes(Zt(e));
}
function Oa(e) {
  const t = Aa(),
    n = Qe(e);
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((r) =>
      (n.willChange || "").includes(r)
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r)
    )
  );
}
function _g(e) {
  let t = Jn(e);
  for (; pt(t) && !Hi(t); ) {
    if (Oa(t)) return t;
    t = Jn(t);
  }
  return null;
}
function Aa() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Hi(e) {
  return ["html", "body", "#document"].includes(Zt(e));
}
function Qe(e) {
  return Le(e).getComputedStyle(e);
}
function Ki(e) {
  return bt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Jn(e) {
  if (Zt(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (fc(e) && e.host) || Pt(e);
  return fc(t) ? t.host : t;
}
function Qf(e) {
  const t = Jn(e);
  return Hi(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : pt(t) && oo(t)
    ? t
    : Qf(t);
}
function Qr(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Qf(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    l = Le(o);
  return i
    ? t.concat(
        l,
        l.visualViewport || [],
        oo(o) ? o : [],
        l.frameElement && n ? Qr(l.frameElement) : []
      )
    : t.concat(o, Qr(o, [], n));
}
function Yf(e) {
  const t = Qe(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = pt(e),
    i = o ? e.offsetWidth : n,
    l = o ? e.offsetHeight : r,
    s = Ci(n) !== i || Ci(r) !== l;
  return s && ((n = i), (r = l)), { width: n, height: r, $: s };
}
function Ia(e) {
  return bt(e) ? e : e.contextElement;
}
function Bn(e) {
  const t = Ia(e);
  if (!pt(t)) return Xt(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = Yf(t);
  let l = (i ? Ci(n.width) : n.width) / r,
    s = (i ? Ci(n.height) : n.height) / o;
  return (
    (!l || !Number.isFinite(l)) && (l = 1),
    (!s || !Number.isFinite(s)) && (s = 1),
    { x: l, y: s }
  );
}
const Pg = Xt(0);
function Xf(e) {
  const t = Le(e);
  return !Aa() || !t.visualViewport
    ? Pg
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Rg(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== Le(e)) ? !1 : t;
}
function hn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    i = Ia(e);
  let l = Xt(1);
  t && (r ? bt(r) && (l = Bn(r)) : (l = Bn(e)));
  const s = Rg(i, n, r) ? Xf(i) : Xt(0);
  let a = (o.left + s.x) / l.x,
    u = (o.top + s.y) / l.y,
    p = o.width / l.x,
    c = o.height / l.y;
  if (i) {
    const m = Le(i),
      v = r && bt(r) ? Le(r) : r;
    let w = m,
      y = w.frameElement;
    for (; y && r && v !== w; ) {
      const S = Bn(y),
        h = y.getBoundingClientRect(),
        f = Qe(y),
        g = h.left + (y.clientLeft + parseFloat(f.paddingLeft)) * S.x,
        x = h.top + (y.clientTop + parseFloat(f.paddingTop)) * S.y;
      (a *= S.x),
        (u *= S.y),
        (p *= S.x),
        (c *= S.y),
        (a += g),
        (u += x),
        (w = Le(y)),
        (y = w.frameElement);
    }
  }
  return bi({ width: p, height: c, x: a, y: u });
}
const Mg = [":popover-open", ":modal"];
function Zf(e) {
  return Mg.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Ng(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const i = o === "fixed",
    l = Pt(r),
    s = t ? Zf(t.floating) : !1;
  if (r === l || (s && i)) return n;
  let a = { scrollLeft: 0, scrollTop: 0 },
    u = Xt(1);
  const p = Xt(0),
    c = pt(r);
  if (
    (c || (!c && !i)) &&
    ((Zt(r) !== "body" || oo(l)) && (a = Ki(r)), pt(r))
  ) {
    const m = hn(r);
    (u = Bn(r)), (p.x = m.x + r.clientLeft), (p.y = m.y + r.clientTop);
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + p.x,
    y: n.y * u.y - a.scrollTop * u.y + p.y,
  };
}
function Tg(e) {
  return Array.from(e.getClientRects());
}
function Jf(e) {
  return hn(Pt(e)).left + Ki(e).scrollLeft;
}
function Og(e) {
  const t = Pt(e),
    n = Ki(e),
    r = e.ownerDocument.body,
    o = Oe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = Oe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let l = -n.scrollLeft + Jf(e);
  const s = -n.scrollTop;
  return (
    Qe(r).direction === "rtl" && (l += Oe(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: l, y: s }
  );
}
function Ag(e, t) {
  const n = Le(e),
    r = Pt(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    l = r.clientHeight,
    s = 0,
    a = 0;
  if (o) {
    (i = o.width), (l = o.height);
    const u = Aa();
    (!u || (u && t === "fixed")) && ((s = o.offsetLeft), (a = o.offsetTop));
  }
  return { width: i, height: l, x: s, y: a };
}
function Ig(e, t) {
  const n = hn(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = pt(e) ? Bn(e) : Xt(1),
    l = e.clientWidth * i.x,
    s = e.clientHeight * i.y,
    a = o * i.x,
    u = r * i.y;
  return { width: l, height: s, x: a, y: u };
}
function pc(e, t, n) {
  let r;
  if (t === "viewport") r = Ag(e, n);
  else if (t === "document") r = Og(Pt(e));
  else if (bt(t)) r = Ig(t, n);
  else {
    const o = Xf(e);
    r = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return bi(r);
}
function qf(e, t) {
  const n = Jn(e);
  return n === t || !bt(n) || Hi(n)
    ? !1
    : Qe(n).position === "fixed" || qf(n, t);
}
function Lg(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Qr(e, [], !1).filter((s) => bt(s) && Zt(s) !== "body"),
    o = null;
  const i = Qe(e).position === "fixed";
  let l = i ? Jn(e) : e;
  for (; bt(l) && !Hi(l); ) {
    const s = Qe(l),
      a = Oa(l);
    !a && s.position === "fixed" && (o = null),
      (
        i
          ? !a && !o
          : (!a &&
              s.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (oo(l) && !a && qf(e, l))
      )
        ? (r = r.filter((p) => p !== l))
        : (o = s),
      (l = Jn(l));
  }
  return t.set(e, r), r;
}
function Dg(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const l = [...(n === "clippingAncestors" ? Lg(t, this._c) : [].concat(n)), r],
    s = l[0],
    a = l.reduce((u, p) => {
      const c = pc(t, p, o);
      return (
        (u.top = Oe(c.top, u.top)),
        (u.right = Yt(c.right, u.right)),
        (u.bottom = Yt(c.bottom, u.bottom)),
        (u.left = Oe(c.left, u.left)),
        u
      );
    }, pc(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top,
  };
}
function zg(e) {
  const { width: t, height: n } = Yf(e);
  return { width: t, height: n };
}
function jg(e, t, n) {
  const r = pt(t),
    o = Pt(t),
    i = n === "fixed",
    l = hn(e, !0, i, t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const a = Xt(0);
  if (r || (!r && !i))
    if (((Zt(t) !== "body" || oo(o)) && (s = Ki(t)), r)) {
      const c = hn(t, !0, i, t);
      (a.x = c.x + t.clientLeft), (a.y = c.y + t.clientTop);
    } else o && (a.x = Jf(o));
  const u = l.left + s.scrollLeft - a.x,
    p = l.top + s.scrollTop - a.y;
  return { x: u, y: p, width: l.width, height: l.height };
}
function mc(e, t) {
  return !pt(e) || Qe(e).position === "fixed"
    ? null
    : t
    ? t(e)
    : e.offsetParent;
}
function ep(e, t) {
  const n = Le(e);
  if (!pt(e) || Zf(e)) return n;
  let r = mc(e, t);
  for (; r && bg(r) && Qe(r).position === "static"; ) r = mc(r, t);
  return r &&
    (Zt(r) === "html" ||
      (Zt(r) === "body" && Qe(r).position === "static" && !Oa(r)))
    ? n
    : r || _g(e) || n;
}
const Fg = async function (e) {
  const t = this.getOffsetParent || ep,
    n = this.getDimensions;
  return {
    reference: jg(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, ...(await n(e.floating)) },
  };
};
function Ug(e) {
  return Qe(e).direction === "rtl";
}
const Bg = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ng,
  getDocumentElement: Pt,
  getClippingRect: Dg,
  getOffsetParent: ep,
  getElementRects: Fg,
  getClientRects: Tg,
  getDimensions: zg,
  getScale: Bn,
  isElement: bt,
  isRTL: Ug,
};
function Wg(e, t) {
  let n = null,
    r;
  const o = Pt(e);
  function i() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), (n = null);
  }
  function l(s, a) {
    s === void 0 && (s = !1), a === void 0 && (a = 1), i();
    const { left: u, top: p, width: c, height: m } = e.getBoundingClientRect();
    if ((s || t(), !c || !m)) return;
    const v = Po(p),
      w = Po(o.clientWidth - (u + c)),
      y = Po(o.clientHeight - (p + m)),
      S = Po(u),
      f = {
        rootMargin: -v + "px " + -w + "px " + -y + "px " + -S + "px",
        threshold: Oe(0, Yt(1, a)) || 1,
      };
    let g = !0;
    function x(E) {
      const C = E[0].intersectionRatio;
      if (C !== a) {
        if (!g) return l();
        C
          ? l(!1, C)
          : (r = setTimeout(() => {
              l(!1, 1e-7);
            }, 100));
      }
      g = !1;
    }
    try {
      n = new IntersectionObserver(x, { ...f, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(x, f);
    }
    n.observe(e);
  }
  return l(!0), i;
}
function Vg(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: l = typeof ResizeObserver == "function",
      layoutShift: s = typeof IntersectionObserver == "function",
      animationFrame: a = !1,
    } = r,
    u = Ia(e),
    p = o || i ? [...(u ? Qr(u) : []), ...Qr(t)] : [];
  p.forEach((h) => {
    o && h.addEventListener("scroll", n, { passive: !0 }),
      i && h.addEventListener("resize", n);
  });
  const c = u && s ? Wg(u, n) : null;
  let m = -1,
    v = null;
  l &&
    ((v = new ResizeObserver((h) => {
      let [f] = h;
      f &&
        f.target === u &&
        v &&
        (v.unobserve(t),
        cancelAnimationFrame(m),
        (m = requestAnimationFrame(() => {
          var g;
          (g = v) == null || g.observe(t);
        }))),
        n();
    })),
    u && !a && v.observe(u),
    v.observe(t));
  let w,
    y = a ? hn(e) : null;
  a && S();
  function S() {
    const h = hn(e);
    y &&
      (h.x !== y.x ||
        h.y !== y.y ||
        h.width !== y.width ||
        h.height !== y.height) &&
      n(),
      (y = h),
      (w = requestAnimationFrame(S));
  }
  return (
    n(),
    () => {
      var h;
      p.forEach((f) => {
        o && f.removeEventListener("scroll", n),
          i && f.removeEventListener("resize", n);
      }),
        c == null || c(),
        (h = v) == null || h.disconnect(),
        (v = null),
        a && cancelAnimationFrame(w);
    }
  );
}
const Hg = $g,
  Kg = wg,
  Gg = kg,
  Qg = xg,
  hc = yg,
  Yg = Cg,
  Xg = (e, t, n) => {
    const r = new Map(),
      o = { platform: Bg, ...n },
      i = { ...o.platform, _c: r };
    return gg(e, t, { ...o, platform: i });
  },
  Zg = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? hc({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? hc({ element: r, padding: o }).fn(n)
          : {};
      },
    };
  };
var Yo = typeof document < "u" ? d.useLayoutEffect : d.useEffect;
function _i(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!_i(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !_i(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function tp(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function vc(e, t) {
  const n = tp(e);
  return Math.round(t * n) / n;
}
function gc(e) {
  const t = d.useRef(e);
  return (
    Yo(() => {
      t.current = e;
    }),
    t
  );
}
function Jg(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: l } = {},
      transform: s = !0,
      whileElementsMounted: a,
      open: u,
    } = e,
    [p, c] = d.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [m, v] = d.useState(r);
  _i(m, r) || v(r);
  const [w, y] = d.useState(null),
    [S, h] = d.useState(null),
    f = d.useCallback((F) => {
      F !== C.current && ((C.current = F), y(F));
    }, []),
    g = d.useCallback((F) => {
      F !== $.current && (($.current = F), h(F));
    }, []),
    x = i || w,
    E = l || S,
    C = d.useRef(null),
    $ = d.useRef(null),
    k = d.useRef(p),
    A = a != null,
    N = gc(a),
    B = gc(o),
    O = d.useCallback(() => {
      if (!C.current || !$.current) return;
      const F = { placement: t, strategy: n, middleware: m };
      B.current && (F.platform = B.current),
        Xg(C.current, $.current, F).then((R) => {
          const _ = { ...R, isPositioned: !0 };
          J.current &&
            !_i(k.current, _) &&
            ((k.current = _),
            no.flushSync(() => {
              c(_);
            }));
        });
    }, [m, t, n, B]);
  Yo(() => {
    u === !1 &&
      k.current.isPositioned &&
      ((k.current.isPositioned = !1), c((F) => ({ ...F, isPositioned: !1 })));
  }, [u]);
  const J = d.useRef(!1);
  Yo(
    () => (
      (J.current = !0),
      () => {
        J.current = !1;
      }
    ),
    []
  ),
    Yo(() => {
      if ((x && (C.current = x), E && ($.current = E), x && E)) {
        if (N.current) return N.current(x, E, O);
        O();
      }
    }, [x, E, O, N, A]);
  const j = d.useMemo(
      () => ({ reference: C, floating: $, setReference: f, setFloating: g }),
      [f, g]
    ),
    W = d.useMemo(() => ({ reference: x, floating: E }), [x, E]),
    G = d.useMemo(() => {
      const F = { position: n, left: 0, top: 0 };
      if (!W.floating) return F;
      const R = vc(W.floating, p.x),
        _ = vc(W.floating, p.y);
      return s
        ? {
            ...F,
            transform: "translate(" + R + "px, " + _ + "px)",
            ...(tp(W.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: R, top: _ };
    }, [n, s, W.floating, p.x, p.y]);
  return d.useMemo(
    () => ({ ...p, update: O, refs: j, elements: W, floatingStyles: G }),
    [p, O, j, W, G]
  );
}
function qg(e) {
  const [t, n] = d.useState(void 0);
  return (
    Zn(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let l, s;
          if ("borderBoxSize" in i) {
            const a = i.borderBoxSize,
              u = Array.isArray(a) ? a[0] : a;
            (l = u.inlineSize), (s = u.blockSize);
          } else (l = e.offsetWidth), (s = e.offsetHeight);
          n({ width: l, height: s });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
const np = "Popper",
  [rp, op] = ro(np),
  [e0, ip] = rp(np),
  t0 = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = d.useState(null);
    return d.createElement(e0, { scope: t, anchor: r, onAnchorChange: o }, n);
  },
  n0 = "PopperAnchor",
  r0 = d.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = ip(n0, n),
      l = d.useRef(null),
      s = Pe(t, l);
    return (
      d.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || l.current);
      }),
      r ? null : d.createElement(Fe.div, I({}, o, { ref: s }))
    );
  }),
  lp = "PopperContent",
  [o0, ww] = rp(lp),
  i0 = d.forwardRef((e, t) => {
    var n, r, o, i, l, s, a, u;
    const {
        __scopePopper: p,
        side: c = "bottom",
        sideOffset: m = 0,
        align: v = "center",
        alignOffset: w = 0,
        arrowPadding: y = 0,
        avoidCollisions: S = !0,
        collisionBoundary: h = [],
        collisionPadding: f = 0,
        sticky: g = "partial",
        hideWhenDetached: x = !1,
        updatePositionStrategy: E = "optimized",
        onPlaced: C,
        ...$
      } = e,
      k = ip(lp, p),
      [A, N] = d.useState(null),
      B = Pe(t, (ir) => N(ir)),
      [O, J] = d.useState(null),
      j = qg(O),
      W = (n = j == null ? void 0 : j.width) !== null && n !== void 0 ? n : 0,
      G = (r = j == null ? void 0 : j.height) !== null && r !== void 0 ? r : 0,
      F = c + (v !== "center" ? "-" + v : ""),
      R =
        typeof f == "number"
          ? f
          : { top: 0, right: 0, bottom: 0, left: 0, ...f },
      _ = Array.isArray(h) ? h : [h],
      T = _.length > 0,
      L = { padding: R, boundary: _.filter(l0), altBoundary: T },
      {
        refs: V,
        floatingStyles: Re,
        placement: Me,
        isPositioned: Xe,
        middlewareData: le,
      } = Jg({
        strategy: "fixed",
        placement: F,
        whileElementsMounted: (...ir) =>
          Vg(...ir, { animationFrame: E === "always" }),
        elements: { reference: k.anchor },
        middleware: [
          Eg({ mainAxis: m + G, alignmentAxis: w }),
          S &&
            Hg({
              mainAxis: !0,
              crossAxis: !1,
              limiter: g === "partial" ? Yg() : void 0,
              ...L,
            }),
          S && Kg({ ...L }),
          Gg({
            ...L,
            apply: ({
              elements: ir,
              rects: Ka,
              availableWidth: sm,
              availableHeight: am,
            }) => {
              const { width: um, height: cm } = Ka.reference,
                uo = ir.floating.style;
              uo.setProperty("--radix-popper-available-width", `${sm}px`),
                uo.setProperty("--radix-popper-available-height", `${am}px`),
                uo.setProperty("--radix-popper-anchor-width", `${um}px`),
                uo.setProperty("--radix-popper-anchor-height", `${cm}px`);
            },
          }),
          O && Zg({ element: O, padding: y }),
          s0({ arrowWidth: W, arrowHeight: G }),
          x && Qg({ strategy: "referenceHidden", ...L }),
        ],
      }),
      [Ne, so] = sp(Me),
      Ee = ft(C);
    Zn(() => {
      Xe && (Ee == null || Ee());
    }, [Xe, Ee]);
    const ao = (o = le.arrow) === null || o === void 0 ? void 0 : o.x,
      rm = (i = le.arrow) === null || i === void 0 ? void 0 : i.y,
      om =
        ((l = le.arrow) === null || l === void 0 ? void 0 : l.centerOffset) !==
        0,
      [im, lm] = d.useState();
    return (
      Zn(() => {
        A && lm(window.getComputedStyle(A).zIndex);
      }, [A]),
      d.createElement(
        "div",
        {
          ref: V.setFloating,
          "data-radix-popper-content-wrapper": "",
          style: {
            ...Re,
            transform: Xe ? Re.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: im,
            "--radix-popper-transform-origin": [
              (s = le.transformOrigin) === null || s === void 0 ? void 0 : s.x,
              (a = le.transformOrigin) === null || a === void 0 ? void 0 : a.y,
            ].join(" "),
          },
          dir: e.dir,
        },
        d.createElement(
          o0,
          {
            scope: p,
            placedSide: Ne,
            onArrowChange: J,
            arrowX: ao,
            arrowY: rm,
            shouldHideArrow: om,
          },
          d.createElement(
            Fe.div,
            I({ "data-side": Ne, "data-align": so }, $, {
              ref: B,
              style: {
                ...$.style,
                animation: Xe ? void 0 : "none",
                opacity:
                  (u = le.hide) !== null && u !== void 0 && u.referenceHidden
                    ? 0
                    : void 0,
              },
            })
          )
        )
      )
    );
  });
function l0(e) {
  return e !== null;
}
const s0 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, i, l;
    const { placement: s, rects: a, middlewareData: u } = t,
      c =
        ((n = u.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !==
        0,
      m = c ? 0 : e.arrowWidth,
      v = c ? 0 : e.arrowHeight,
      [w, y] = sp(s),
      S = { start: "0%", center: "50%", end: "100%" }[y],
      h =
        ((r = (o = u.arrow) === null || o === void 0 ? void 0 : o.x) !== null &&
        r !== void 0
          ? r
          : 0) +
        m / 2,
      f =
        ((i = (l = u.arrow) === null || l === void 0 ? void 0 : l.y) !== null &&
        i !== void 0
          ? i
          : 0) +
        v / 2;
    let g = "",
      x = "";
    return (
      w === "bottom"
        ? ((g = c ? S : `${h}px`), (x = `${-v}px`))
        : w === "top"
        ? ((g = c ? S : `${h}px`), (x = `${a.floating.height + v}px`))
        : w === "right"
        ? ((g = `${-v}px`), (x = c ? S : `${f}px`))
        : w === "left" &&
          ((g = `${a.floating.width + v}px`), (x = c ? S : `${f}px`)),
      { data: { x: g, y: x } }
    );
  },
});
function sp(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const a0 = t0,
  u0 = r0,
  c0 = i0,
  d0 = d.forwardRef((e, t) => {
    var n;
    const {
      container: r = globalThis == null ||
      (n = globalThis.document) === null ||
      n === void 0
        ? void 0
        : n.body,
      ...o
    } = e;
    return r
      ? Dv.createPortal(d.createElement(Fe.div, I({}, o, { ref: t })), r)
      : null;
  });
function f0(e, t) {
  return d.useReducer((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const io = (e) => {
  const { present: t, children: n } = e,
    r = p0(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : d.Children.only(n),
    i = Pe(r.ref, o.ref);
  return typeof n == "function" || r.isPresent
    ? d.cloneElement(o, { ref: i })
    : null;
};
io.displayName = "Presence";
function p0(e) {
  const [t, n] = d.useState(),
    r = d.useRef({}),
    o = d.useRef(e),
    i = d.useRef("none"),
    l = e ? "mounted" : "unmounted",
    [s, a] = f0(l, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    d.useEffect(() => {
      const u = Ro(r.current);
      i.current = s === "mounted" ? u : "none";
    }, [s]),
    Zn(() => {
      const u = r.current,
        p = o.current;
      if (p !== e) {
        const m = i.current,
          v = Ro(u);
        e
          ? a("MOUNT")
          : v === "none" || (u == null ? void 0 : u.display) === "none"
          ? a("UNMOUNT")
          : a(p && m !== v ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, a]),
    Zn(() => {
      if (t) {
        const u = (c) => {
            const v = Ro(r.current).includes(c.animationName);
            c.target === t && v && no.flushSync(() => a("ANIMATION_END"));
          },
          p = (c) => {
            c.target === t && (i.current = Ro(r.current));
          };
        return (
          t.addEventListener("animationstart", p),
          t.addEventListener("animationcancel", u),
          t.addEventListener("animationend", u),
          () => {
            t.removeEventListener("animationstart", p),
              t.removeEventListener("animationcancel", u),
              t.removeEventListener("animationend", u);
          }
        );
      } else a("ANIMATION_END");
    }, [t, a]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(s),
      ref: d.useCallback((u) => {
        u && (r.current = getComputedStyle(u)), n(u);
      }, []),
    }
  );
}
function Ro(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function ap({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = m0({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    l = i ? e : r,
    s = ft(n),
    a = d.useCallback(
      (u) => {
        if (i) {
          const c = typeof u == "function" ? u(e) : u;
          c !== e && s(c);
        } else o(u);
      },
      [i, e, o, s]
    );
  return [l, a];
}
function m0({ defaultProp: e, onChange: t }) {
  const n = d.useState(e),
    [r] = n,
    o = d.useRef(r),
    i = ft(t);
  return (
    d.useEffect(() => {
      o.current !== r && (i(r), (o.current = r));
    }, [r, o, i]),
    n
  );
}
const kl = "rovingFocusGroup.onEntryFocus",
  h0 = { bubbles: !1, cancelable: !0 },
  La = "RovingFocusGroup",
  [_s, up, v0] = Pa(La),
  [g0, Gi] = ro(La, [v0]),
  [y0, w0] = g0(La),
  x0 = d.forwardRef((e, t) =>
    d.createElement(
      _s.Provider,
      { scope: e.__scopeRovingFocusGroup },
      d.createElement(
        _s.Slot,
        { scope: e.__scopeRovingFocusGroup },
        d.createElement(S0, I({}, e, { ref: t }))
      )
    )
  ),
  S0 = d.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: r,
        loop: o = !1,
        dir: i,
        currentTabStopId: l,
        defaultCurrentTabStopId: s,
        onCurrentTabStopIdChange: a,
        onEntryFocus: u,
        ...p
      } = e,
      c = d.useRef(null),
      m = Pe(t, c),
      v = Ra(i),
      [w = null, y] = ap({ prop: l, defaultProp: s, onChange: a }),
      [S, h] = d.useState(!1),
      f = ft(u),
      g = up(n),
      x = d.useRef(!1),
      [E, C] = d.useState(0);
    return (
      d.useEffect(() => {
        const $ = c.current;
        if ($)
          return $.addEventListener(kl, f), () => $.removeEventListener(kl, f);
      }, [f]),
      d.createElement(
        y0,
        {
          scope: n,
          orientation: r,
          dir: v,
          loop: o,
          currentTabStopId: w,
          onItemFocus: d.useCallback(($) => y($), [y]),
          onItemShiftTab: d.useCallback(() => h(!0), []),
          onFocusableItemAdd: d.useCallback(() => C(($) => $ + 1), []),
          onFocusableItemRemove: d.useCallback(() => C(($) => $ - 1), []),
        },
        d.createElement(
          Fe.div,
          I({ tabIndex: S || E === 0 ? -1 : 0, "data-orientation": r }, p, {
            ref: m,
            style: { outline: "none", ...e.style },
            onMouseDown: z(e.onMouseDown, () => {
              x.current = !0;
            }),
            onFocus: z(e.onFocus, ($) => {
              const k = !x.current;
              if ($.target === $.currentTarget && k && !S) {
                const A = new CustomEvent(kl, h0);
                if (($.currentTarget.dispatchEvent(A), !A.defaultPrevented)) {
                  const N = g().filter((W) => W.focusable),
                    B = N.find((W) => W.active),
                    O = N.find((W) => W.id === w),
                    j = [B, O, ...N].filter(Boolean).map((W) => W.ref.current);
                  cp(j);
                }
              }
              x.current = !1;
            }),
            onBlur: z(e.onBlur, () => h(!1)),
          })
        )
      )
    );
  }),
  E0 = "RovingFocusGroupItem",
  $0 = d.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: r = !0,
        active: o = !1,
        tabStopId: i,
        ...l
      } = e,
      s = Qo(),
      a = i || s,
      u = w0(E0, n),
      p = u.currentTabStopId === a,
      c = up(n),
      { onFocusableItemAdd: m, onFocusableItemRemove: v } = u;
    return (
      d.useEffect(() => {
        if (r) return m(), () => v();
      }, [r, m, v]),
      d.createElement(
        _s.ItemSlot,
        { scope: n, id: a, focusable: r, active: o },
        d.createElement(
          Fe.span,
          I({ tabIndex: p ? 0 : -1, "data-orientation": u.orientation }, l, {
            ref: t,
            onMouseDown: z(e.onMouseDown, (w) => {
              r ? u.onItemFocus(a) : w.preventDefault();
            }),
            onFocus: z(e.onFocus, () => u.onItemFocus(a)),
            onKeyDown: z(e.onKeyDown, (w) => {
              if (w.key === "Tab" && w.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (w.target !== w.currentTarget) return;
              const y = b0(w, u.orientation, u.dir);
              if (y !== void 0) {
                w.preventDefault();
                let h = c()
                  .filter((f) => f.focusable)
                  .map((f) => f.ref.current);
                if (y === "last") h.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && h.reverse();
                  const f = h.indexOf(w.currentTarget);
                  h = u.loop ? _0(h, f + 1) : h.slice(f + 1);
                }
                setTimeout(() => cp(h));
              }
            }),
          })
        )
      )
    );
  }),
  C0 = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last",
  };
function k0(e, t) {
  return t !== "rtl"
    ? e
    : e === "ArrowLeft"
    ? "ArrowRight"
    : e === "ArrowRight"
    ? "ArrowLeft"
    : e;
}
function b0(e, t, n) {
  const r = k0(e.key, n);
  if (
    !(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) &&
    !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))
  )
    return C0[r];
}
function cp(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function _0(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
const dp = x0,
  fp = $0;
var P0 = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Sn = new WeakMap(),
  Mo = new WeakMap(),
  No = {},
  bl = 0,
  pp = function (e) {
    return e && (e.host || pp(e.parentNode));
  },
  R0 = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = pp(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  M0 = function (e, t, n, r) {
    var o = R0(t, Array.isArray(e) ? e : [e]);
    No[n] || (No[n] = new WeakMap());
    var i = No[n],
      l = [],
      s = new Set(),
      a = new Set(o),
      u = function (c) {
        !c || s.has(c) || (s.add(c), u(c.parentNode));
      };
    o.forEach(u);
    var p = function (c) {
      !c ||
        a.has(c) ||
        Array.prototype.forEach.call(c.children, function (m) {
          if (s.has(m)) p(m);
          else
            try {
              var v = m.getAttribute(r),
                w = v !== null && v !== "false",
                y = (Sn.get(m) || 0) + 1,
                S = (i.get(m) || 0) + 1;
              Sn.set(m, y),
                i.set(m, S),
                l.push(m),
                y === 1 && w && Mo.set(m, !0),
                S === 1 && m.setAttribute(n, "true"),
                w || m.setAttribute(r, "true");
            } catch (h) {
              console.error("aria-hidden: cannot operate on ", m, h);
            }
        });
    };
    return (
      p(t),
      s.clear(),
      bl++,
      function () {
        l.forEach(function (c) {
          var m = Sn.get(c) - 1,
            v = i.get(c) - 1;
          Sn.set(c, m),
            i.set(c, v),
            m || (Mo.has(c) || c.removeAttribute(r), Mo.delete(c)),
            v || c.removeAttribute(n);
        }),
          bl--,
          bl ||
            ((Sn = new WeakMap()),
            (Sn = new WeakMap()),
            (Mo = new WeakMap()),
            (No = {}));
      }
    );
  },
  N0 = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = t || P0(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
        M0(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  ut = function () {
    return (
      (ut =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
      ut.apply(this, arguments)
    );
  };
function mp(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function T0(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var Xo = "right-scroll-bar-position",
  Zo = "width-before-scroll-bar",
  O0 = "with-scroll-bars-hidden",
  A0 = "--removed-body-scroll-bar-size";
function _l(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function I0(e, t) {
  var n = d.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var L0 = typeof window < "u" ? d.useLayoutEffect : d.useEffect,
  yc = new WeakMap();
function D0(e, t) {
  var n = I0(t || null, function (r) {
    return e.forEach(function (o) {
      return _l(o, r);
    });
  });
  return (
    L0(
      function () {
        var r = yc.get(n);
        if (r) {
          var o = new Set(r),
            i = new Set(e),
            l = n.current;
          o.forEach(function (s) {
            i.has(s) || _l(s, null);
          }),
            i.forEach(function (s) {
              o.has(s) || _l(s, l);
            });
        }
        yc.set(n, e);
      },
      [e]
    ),
    n
  );
}
function z0(e) {
  return e;
}
function j0(e, t) {
  t === void 0 && (t = z0);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var l = t(i, r);
        return (
          n.push(l),
          function () {
            n = n.filter(function (s) {
              return s !== l;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var l = n;
          (n = []), l.forEach(i);
        }
        n = {
          push: function (s) {
            return i(s);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (i) {
        r = !0;
        var l = [];
        if (n.length) {
          var s = n;
          (n = []), s.forEach(i), (l = n);
        }
        var a = function () {
            var p = l;
            (l = []), p.forEach(i);
          },
          u = function () {
            return Promise.resolve().then(a);
          };
        u(),
          (n = {
            push: function (p) {
              l.push(p), u();
            },
            filter: function (p) {
              return (l = l.filter(p)), n;
            },
          });
      },
    };
  return o;
}
function F0(e) {
  e === void 0 && (e = {});
  var t = j0(null);
  return (t.options = ut({ async: !0, ssr: !1 }, e)), t;
}
var hp = function (e) {
  var t = e.sideCar,
    n = mp(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return d.createElement(r, ut({}, n));
};
hp.isSideCarExport = !0;
function U0(e, t) {
  return e.useMedium(t), hp;
}
var vp = F0(),
  Pl = function () {},
  Qi = d.forwardRef(function (e, t) {
    var n = d.useRef(null),
      r = d.useState({
        onScrollCapture: Pl,
        onWheelCapture: Pl,
        onTouchMoveCapture: Pl,
      }),
      o = r[0],
      i = r[1],
      l = e.forwardProps,
      s = e.children,
      a = e.className,
      u = e.removeScrollBar,
      p = e.enabled,
      c = e.shards,
      m = e.sideCar,
      v = e.noIsolation,
      w = e.inert,
      y = e.allowPinchZoom,
      S = e.as,
      h = S === void 0 ? "div" : S,
      f = mp(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
      ]),
      g = m,
      x = D0([n, t]),
      E = ut(ut({}, f), o);
    return d.createElement(
      d.Fragment,
      null,
      p &&
        d.createElement(g, {
          sideCar: vp,
          removeScrollBar: u,
          shards: c,
          noIsolation: v,
          inert: w,
          setCallbacks: i,
          allowPinchZoom: !!y,
          lockRef: n,
        }),
      l
        ? d.cloneElement(d.Children.only(s), ut(ut({}, E), { ref: x }))
        : d.createElement(h, ut({}, E, { className: a, ref: x }), s)
    );
  });
Qi.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Qi.classNames = { fullWidth: Zo, zeroRight: Xo };
var B0 = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function W0() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = B0();
  return t && e.setAttribute("nonce", t), e;
}
function V0(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function H0(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var K0 = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = W0()) && (V0(t, n), H0(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  G0 = function () {
    var e = K0();
    return function (t, n) {
      d.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  gp = function () {
    var e = G0(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  Q0 = { left: 0, top: 0, right: 0, gap: 0 },
  Rl = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  Y0 = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Rl(n), Rl(r), Rl(o)];
  },
  X0 = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return Q0;
    var t = Y0(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  Z0 = gp(),
  Wn = "data-scroll-locked",
  J0 = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      l = e.right,
      s = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          O0,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  body[`
        )
        .concat(
          Wn,
          `] {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  i,
                  `px;
    padding-right: `
                )
                .concat(
                  l,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(s, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" &&
              "padding-right: ".concat(s, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          Xo,
          ` {
    right: `
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          Zo,
          ` {
    margin-right: `
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Xo, " .")
        .concat(
          Xo,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Zo, " .")
        .concat(
          Zo,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body[`
        )
        .concat(
          Wn,
          `] {
    `
        )
        .concat(A0, ": ")
        .concat(
          s,
          `px;
  }
`
        )
    );
  },
  wc = function () {
    var e = parseInt(document.body.getAttribute(Wn) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  q0 = function () {
    d.useEffect(function () {
      return (
        document.body.setAttribute(Wn, (wc() + 1).toString()),
        function () {
          var e = wc() - 1;
          e <= 0
            ? document.body.removeAttribute(Wn)
            : document.body.setAttribute(Wn, e.toString());
        }
      );
    }, []);
  },
  ey = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    q0();
    var i = d.useMemo(
      function () {
        return X0(o);
      },
      [o]
    );
    return d.createElement(Z0, { styles: J0(i, !t, o, n ? "" : "!important") });
  },
  Ps = !1;
if (typeof window < "u")
  try {
    var To = Object.defineProperty({}, "passive", {
      get: function () {
        return (Ps = !0), !0;
      },
    });
    window.addEventListener("test", To, To),
      window.removeEventListener("test", To, To);
  } catch {
    Ps = !1;
  }
var En = Ps ? { passive: !1 } : !1,
  ty = function (e) {
    return e.tagName === "TEXTAREA";
  },
  yp = function (e, t) {
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !ty(e) && n[t] === "visible")
    );
  },
  ny = function (e) {
    return yp(e, "overflowY");
  },
  ry = function (e) {
    return yp(e, "overflowX");
  },
  xc = function (e, t) {
    var n = t;
    do {
      typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
      var r = wp(e, n);
      if (r) {
        var o = xp(e, n),
          i = o[1],
          l = o[2];
        if (i > l) return !0;
      }
      n = n.parentNode;
    } while (n && n !== document.body);
    return !1;
  },
  oy = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  iy = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  wp = function (e, t) {
    return e === "v" ? ny(t) : ry(t);
  },
  xp = function (e, t) {
    return e === "v" ? oy(t) : iy(t);
  },
  ly = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  sy = function (e, t, n, r, o) {
    var i = ly(e, window.getComputedStyle(t).direction),
      l = i * r,
      s = n.target,
      a = t.contains(s),
      u = !1,
      p = l > 0,
      c = 0,
      m = 0;
    do {
      var v = xp(e, s),
        w = v[0],
        y = v[1],
        S = v[2],
        h = y - S - i * w;
      (w || h) && wp(e, s) && ((c += h), (m += w)), (s = s.parentNode);
    } while ((!a && s !== document.body) || (a && (t.contains(s) || t === s)));
    return (
      ((p && ((o && c === 0) || (!o && l > c))) ||
        (!p && ((o && m === 0) || (!o && -l > m)))) &&
        (u = !0),
      u
    );
  },
  Oo = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Sc = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Ec = function (e) {
    return e && "current" in e ? e.current : e;
  },
  ay = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  uy = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  cy = 0,
  $n = [];
function dy(e) {
  var t = d.useRef([]),
    n = d.useRef([0, 0]),
    r = d.useRef(),
    o = d.useState(cy++)[0],
    i = d.useState(function () {
      return gp();
    })[0],
    l = d.useRef(e);
  d.useEffect(
    function () {
      l.current = e;
    },
    [e]
  ),
    d.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var y = T0([e.lockRef.current], (e.shards || []).map(Ec), !0).filter(
            Boolean
          );
          return (
            y.forEach(function (S) {
              return S.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                y.forEach(function (S) {
                  return S.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var s = d.useCallback(function (y, S) {
      if ("touches" in y && y.touches.length === 2)
        return !l.current.allowPinchZoom;
      var h = Oo(y),
        f = n.current,
        g = "deltaX" in y ? y.deltaX : f[0] - h[0],
        x = "deltaY" in y ? y.deltaY : f[1] - h[1],
        E,
        C = y.target,
        $ = Math.abs(g) > Math.abs(x) ? "h" : "v";
      if ("touches" in y && $ === "h" && C.type === "range") return !1;
      var k = xc($, C);
      if (!k) return !0;
      if ((k ? (E = $) : ((E = $ === "v" ? "h" : "v"), (k = xc($, C))), !k))
        return !1;
      if (
        (!r.current && "changedTouches" in y && (g || x) && (r.current = E), !E)
      )
        return !0;
      var A = r.current || E;
      return sy(A, S, y, A === "h" ? g : x, !0);
    }, []),
    a = d.useCallback(function (y) {
      var S = y;
      if (!(!$n.length || $n[$n.length - 1] !== i)) {
        var h = "deltaY" in S ? Sc(S) : Oo(S),
          f = t.current.filter(function (E) {
            return E.name === S.type && E.target === S.target && ay(E.delta, h);
          })[0];
        if (f && f.should) {
          S.cancelable && S.preventDefault();
          return;
        }
        if (!f) {
          var g = (l.current.shards || [])
              .map(Ec)
              .filter(Boolean)
              .filter(function (E) {
                return E.contains(S.target);
              }),
            x = g.length > 0 ? s(S, g[0]) : !l.current.noIsolation;
          x && S.cancelable && S.preventDefault();
        }
      }
    }, []),
    u = d.useCallback(function (y, S, h, f) {
      var g = { name: y, delta: S, target: h, should: f };
      t.current.push(g),
        setTimeout(function () {
          t.current = t.current.filter(function (x) {
            return x !== g;
          });
        }, 1);
    }, []),
    p = d.useCallback(function (y) {
      (n.current = Oo(y)), (r.current = void 0);
    }, []),
    c = d.useCallback(function (y) {
      u(y.type, Sc(y), y.target, s(y, e.lockRef.current));
    }, []),
    m = d.useCallback(function (y) {
      u(y.type, Oo(y), y.target, s(y, e.lockRef.current));
    }, []);
  d.useEffect(function () {
    return (
      $n.push(i),
      e.setCallbacks({
        onScrollCapture: c,
        onWheelCapture: c,
        onTouchMoveCapture: m,
      }),
      document.addEventListener("wheel", a, En),
      document.addEventListener("touchmove", a, En),
      document.addEventListener("touchstart", p, En),
      function () {
        ($n = $n.filter(function (y) {
          return y !== i;
        })),
          document.removeEventListener("wheel", a, En),
          document.removeEventListener("touchmove", a, En),
          document.removeEventListener("touchstart", p, En);
      }
    );
  }, []);
  var v = e.removeScrollBar,
    w = e.inert;
  return d.createElement(
    d.Fragment,
    null,
    w ? d.createElement(i, { styles: uy(o) }) : null,
    v ? d.createElement(ey, { gapMode: "margin" }) : null
  );
}
const fy = U0(vp, dy);
var Sp = d.forwardRef(function (e, t) {
  return d.createElement(Qi, ut({}, e, { ref: t, sideCar: fy }));
});
Sp.classNames = Qi.classNames;
const py = Sp,
  Rs = ["Enter", " "],
  my = ["ArrowDown", "PageUp", "Home"],
  Ep = ["ArrowUp", "PageDown", "End"],
  hy = [...my, ...Ep],
  vy = { ltr: [...Rs, "ArrowRight"], rtl: [...Rs, "ArrowLeft"] },
  gy = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
  Yi = "Menu",
  [Yr, yy, wy] = Pa(Yi),
  [yn, xy] = ro(Yi, [wy, op, Gi]),
  Da = op(),
  $p = Gi(),
  [Sy, wn] = yn(Yi),
  [Ey, lo] = yn(Yi),
  $y = (e) => {
    const {
        __scopeMenu: t,
        open: n = !1,
        children: r,
        dir: o,
        onOpenChange: i,
        modal: l = !0,
      } = e,
      s = Da(t),
      [a, u] = d.useState(null),
      p = d.useRef(!1),
      c = ft(i),
      m = Ra(o);
    return (
      d.useEffect(() => {
        const v = () => {
            (p.current = !0),
              document.addEventListener("pointerdown", w, {
                capture: !0,
                once: !0,
              }),
              document.addEventListener("pointermove", w, {
                capture: !0,
                once: !0,
              });
          },
          w = () => (p.current = !1);
        return (
          document.addEventListener("keydown", v, { capture: !0 }),
          () => {
            document.removeEventListener("keydown", v, { capture: !0 }),
              document.removeEventListener("pointerdown", w, { capture: !0 }),
              document.removeEventListener("pointermove", w, { capture: !0 });
          }
        );
      }, []),
      d.createElement(
        a0,
        s,
        d.createElement(
          Sy,
          {
            scope: t,
            open: n,
            onOpenChange: c,
            content: a,
            onContentChange: u,
          },
          d.createElement(
            Ey,
            {
              scope: t,
              onClose: d.useCallback(() => c(!1), [c]),
              isUsingKeyboardRef: p,
              dir: m,
              modal: l,
            },
            r
          )
        )
      )
    );
  },
  Cp = d.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e,
      o = Da(n);
    return d.createElement(u0, I({}, o, r, { ref: t }));
  }),
  kp = "MenuPortal",
  [Cy, bp] = yn(kp, { forceMount: void 0 }),
  ky = (e) => {
    const { __scopeMenu: t, forceMount: n, children: r, container: o } = e,
      i = wn(kp, t);
    return d.createElement(
      Cy,
      { scope: t, forceMount: n },
      d.createElement(
        io,
        { present: n || i.open },
        d.createElement(d0, { asChild: !0, container: o }, r)
      )
    );
  },
  rt = "MenuContent",
  [by, za] = yn(rt),
  _y = d.forwardRef((e, t) => {
    const n = bp(rt, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...o } = e,
      i = wn(rt, e.__scopeMenu),
      l = lo(rt, e.__scopeMenu);
    return d.createElement(
      Yr.Provider,
      { scope: e.__scopeMenu },
      d.createElement(
        io,
        { present: r || i.open },
        d.createElement(
          Yr.Slot,
          { scope: e.__scopeMenu },
          l.modal
            ? d.createElement(Py, I({}, o, { ref: t }))
            : d.createElement(Ry, I({}, o, { ref: t }))
        )
      )
    );
  }),
  Py = d.forwardRef((e, t) => {
    const n = wn(rt, e.__scopeMenu),
      r = d.useRef(null),
      o = Pe(t, r);
    return (
      d.useEffect(() => {
        const i = r.current;
        if (i) return N0(i);
      }, []),
      d.createElement(
        ja,
        I({}, e, {
          ref: o,
          trapFocus: n.open,
          disableOutsidePointerEvents: n.open,
          disableOutsideScroll: !0,
          onFocusOutside: z(e.onFocusOutside, (i) => i.preventDefault(), {
            checkForDefaultPrevented: !1,
          }),
          onDismiss: () => n.onOpenChange(!1),
        })
      )
    );
  }),
  Ry = d.forwardRef((e, t) => {
    const n = wn(rt, e.__scopeMenu);
    return d.createElement(
      ja,
      I({}, e, {
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        onDismiss: () => n.onOpenChange(!1),
      })
    );
  }),
  ja = d.forwardRef((e, t) => {
    const {
        __scopeMenu: n,
        loop: r = !1,
        trapFocus: o,
        onOpenAutoFocus: i,
        onCloseAutoFocus: l,
        disableOutsidePointerEvents: s,
        onEntryFocus: a,
        onEscapeKeyDown: u,
        onPointerDownOutside: p,
        onFocusOutside: c,
        onInteractOutside: m,
        onDismiss: v,
        disableOutsideScroll: w,
        ...y
      } = e,
      S = wn(rt, n),
      h = lo(rt, n),
      f = Da(n),
      g = $p(n),
      x = yy(n),
      [E, C] = d.useState(null),
      $ = d.useRef(null),
      k = Pe(t, $, S.onContentChange),
      A = d.useRef(0),
      N = d.useRef(""),
      B = d.useRef(0),
      O = d.useRef(null),
      J = d.useRef("right"),
      j = d.useRef(0),
      W = w ? py : d.Fragment,
      G = w ? { as: Kr, allowPinchZoom: !0 } : void 0,
      F = (_) => {
        var T, L;
        const V = N.current + _,
          Re = x().filter((Ee) => !Ee.disabled),
          Me = document.activeElement,
          Xe =
            (T = Re.find((Ee) => Ee.ref.current === Me)) === null ||
            T === void 0
              ? void 0
              : T.textValue,
          le = Re.map((Ee) => Ee.textValue),
          Ne = Hy(le, V, Xe),
          so =
            (L = Re.find((Ee) => Ee.textValue === Ne)) === null || L === void 0
              ? void 0
              : L.ref.current;
        (function Ee(ao) {
          (N.current = ao),
            window.clearTimeout(A.current),
            ao !== "" && (A.current = window.setTimeout(() => Ee(""), 1e3));
        })(V),
          so && setTimeout(() => so.focus());
      };
    d.useEffect(() => () => window.clearTimeout(A.current), []), tg();
    const R = d.useCallback((_) => {
      var T, L;
      return (
        J.current ===
          ((T = O.current) === null || T === void 0 ? void 0 : T.side) &&
        Gy(_, (L = O.current) === null || L === void 0 ? void 0 : L.area)
      );
    }, []);
    return d.createElement(
      by,
      {
        scope: n,
        searchRef: N,
        onItemEnter: d.useCallback(
          (_) => {
            R(_) && _.preventDefault();
          },
          [R]
        ),
        onItemLeave: d.useCallback(
          (_) => {
            var T;
            R(_) ||
              ((T = $.current) === null || T === void 0 || T.focus(), C(null));
          },
          [R]
        ),
        onTriggerLeave: d.useCallback(
          (_) => {
            R(_) && _.preventDefault();
          },
          [R]
        ),
        pointerGraceTimerRef: B,
        onPointerGraceIntentChange: d.useCallback((_) => {
          O.current = _;
        }, []),
      },
      d.createElement(
        W,
        G,
        d.createElement(
          ng,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: z(i, (_) => {
              var T;
              _.preventDefault(),
                (T = $.current) === null || T === void 0 || T.focus();
            }),
            onUnmountAutoFocus: l,
          },
          d.createElement(
            Jv,
            {
              asChild: !0,
              disableOutsidePointerEvents: s,
              onEscapeKeyDown: u,
              onPointerDownOutside: p,
              onFocusOutside: c,
              onInteractOutside: m,
              onDismiss: v,
            },
            d.createElement(
              dp,
              I({ asChild: !0 }, g, {
                dir: h.dir,
                orientation: "vertical",
                loop: r,
                currentTabStopId: E,
                onCurrentTabStopIdChange: C,
                onEntryFocus: z(a, (_) => {
                  h.isUsingKeyboardRef.current || _.preventDefault();
                }),
              }),
              d.createElement(
                c0,
                I(
                  {
                    role: "menu",
                    "aria-orientation": "vertical",
                    "data-state": Np(S.open),
                    "data-radix-menu-content": "",
                    dir: h.dir,
                  },
                  f,
                  y,
                  {
                    ref: k,
                    style: { outline: "none", ...y.style },
                    onKeyDown: z(y.onKeyDown, (_) => {
                      const L =
                          _.target.closest("[data-radix-menu-content]") ===
                          _.currentTarget,
                        V = _.ctrlKey || _.altKey || _.metaKey,
                        Re = _.key.length === 1;
                      L &&
                        (_.key === "Tab" && _.preventDefault(),
                        !V && Re && F(_.key));
                      const Me = $.current;
                      if (_.target !== Me || !hy.includes(_.key)) return;
                      _.preventDefault();
                      const le = x()
                        .filter((Ne) => !Ne.disabled)
                        .map((Ne) => Ne.ref.current);
                      Ep.includes(_.key) && le.reverse(), Wy(le);
                    }),
                    onBlur: z(e.onBlur, (_) => {
                      _.currentTarget.contains(_.target) ||
                        (window.clearTimeout(A.current), (N.current = ""));
                    }),
                    onPointerMove: z(
                      e.onPointerMove,
                      Xr((_) => {
                        const T = _.target,
                          L = j.current !== _.clientX;
                        if (_.currentTarget.contains(T) && L) {
                          const V = _.clientX > j.current ? "right" : "left";
                          (J.current = V), (j.current = _.clientX);
                        }
                      })
                    ),
                  }
                )
              )
            )
          )
        )
      )
    );
  }),
  My = d.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return d.createElement(Fe.div, I({}, r, { ref: t }));
  }),
  Ms = "MenuItem",
  $c = "menu.itemSelect",
  Fa = d.forwardRef((e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e,
      i = d.useRef(null),
      l = lo(Ms, e.__scopeMenu),
      s = za(Ms, e.__scopeMenu),
      a = Pe(t, i),
      u = d.useRef(!1),
      p = () => {
        const c = i.current;
        if (!n && c) {
          const m = new CustomEvent($c, { bubbles: !0, cancelable: !0 });
          c.addEventListener($c, (v) => (r == null ? void 0 : r(v)), {
            once: !0,
          }),
            Wf(c, m),
            m.defaultPrevented ? (u.current = !1) : l.onClose();
        }
      };
    return d.createElement(
      _p,
      I({}, o, {
        ref: a,
        disabled: n,
        onClick: z(e.onClick, p),
        onPointerDown: (c) => {
          var m;
          (m = e.onPointerDown) === null || m === void 0 || m.call(e, c),
            (u.current = !0);
        },
        onPointerUp: z(e.onPointerUp, (c) => {
          var m;
          u.current ||
            (m = c.currentTarget) === null ||
            m === void 0 ||
            m.click();
        }),
        onKeyDown: z(e.onKeyDown, (c) => {
          const m = s.searchRef.current !== "";
          n ||
            (m && c.key === " ") ||
            (Rs.includes(c.key) &&
              (c.currentTarget.click(), c.preventDefault()));
        }),
      })
    );
  }),
  _p = d.forwardRef((e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...i } = e,
      l = za(Ms, n),
      s = $p(n),
      a = d.useRef(null),
      u = Pe(t, a),
      [p, c] = d.useState(!1),
      [m, v] = d.useState("");
    return (
      d.useEffect(() => {
        const w = a.current;
        if (w) {
          var y;
          v(((y = w.textContent) !== null && y !== void 0 ? y : "").trim());
        }
      }, [i.children]),
      d.createElement(
        Yr.ItemSlot,
        { scope: n, disabled: r, textValue: o ?? m },
        d.createElement(
          fp,
          I({ asChild: !0 }, s, { focusable: !r }),
          d.createElement(
            Fe.div,
            I(
              {
                role: "menuitem",
                "data-highlighted": p ? "" : void 0,
                "aria-disabled": r || void 0,
                "data-disabled": r ? "" : void 0,
              },
              i,
              {
                ref: u,
                onPointerMove: z(
                  e.onPointerMove,
                  Xr((w) => {
                    r
                      ? l.onItemLeave(w)
                      : (l.onItemEnter(w),
                        w.defaultPrevented || w.currentTarget.focus());
                  })
                ),
                onPointerLeave: z(
                  e.onPointerLeave,
                  Xr((w) => l.onItemLeave(w))
                ),
                onFocus: z(e.onFocus, () => c(!0)),
                onBlur: z(e.onBlur, () => c(!1)),
              }
            )
          )
        )
      )
    );
  }),
  Ny = d.forwardRef((e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return d.createElement(
      Rp,
      { scope: e.__scopeMenu, checked: n },
      d.createElement(
        Fa,
        I(
          { role: "menuitemcheckbox", "aria-checked": Pi(n) ? "mixed" : n },
          o,
          {
            ref: t,
            "data-state": Ua(n),
            onSelect: z(
              o.onSelect,
              () => (r == null ? void 0 : r(Pi(n) ? !0 : !n)),
              { checkForDefaultPrevented: !1 }
            ),
          }
        )
      )
    );
  }),
  Ty = "MenuRadioGroup",
  [xw, Oy] = yn(Ty, { value: void 0, onValueChange: () => {} }),
  Ay = "MenuRadioItem",
  Iy = d.forwardRef((e, t) => {
    const { value: n, ...r } = e,
      o = Oy(Ay, e.__scopeMenu),
      i = n === o.value;
    return d.createElement(
      Rp,
      { scope: e.__scopeMenu, checked: i },
      d.createElement(
        Fa,
        I({ role: "menuitemradio", "aria-checked": i }, r, {
          ref: t,
          "data-state": Ua(i),
          onSelect: z(
            r.onSelect,
            () => {
              var l;
              return (l = o.onValueChange) === null || l === void 0
                ? void 0
                : l.call(o, n);
            },
            { checkForDefaultPrevented: !1 }
          ),
        })
      )
    );
  }),
  Pp = "MenuItemIndicator",
  [Rp, Ly] = yn(Pp, { checked: !1 }),
  Dy = d.forwardRef((e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e,
      i = Ly(Pp, n);
    return d.createElement(
      io,
      { present: r || Pi(i.checked) || i.checked === !0 },
      d.createElement(
        Fe.span,
        I({}, o, { ref: t, "data-state": Ua(i.checked) })
      )
    );
  }),
  zy = d.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return d.createElement(
      Fe.div,
      I({ role: "separator", "aria-orientation": "horizontal" }, r, { ref: t })
    );
  }),
  jy = "MenuSub",
  [Sw, Mp] = yn(jy),
  Ao = "MenuSubTrigger",
  Fy = d.forwardRef((e, t) => {
    const n = wn(Ao, e.__scopeMenu),
      r = lo(Ao, e.__scopeMenu),
      o = Mp(Ao, e.__scopeMenu),
      i = za(Ao, e.__scopeMenu),
      l = d.useRef(null),
      { pointerGraceTimerRef: s, onPointerGraceIntentChange: a } = i,
      u = { __scopeMenu: e.__scopeMenu },
      p = d.useCallback(() => {
        l.current && window.clearTimeout(l.current), (l.current = null);
      }, []);
    return (
      d.useEffect(() => p, [p]),
      d.useEffect(() => {
        const c = s.current;
        return () => {
          window.clearTimeout(c), a(null);
        };
      }, [s, a]),
      d.createElement(
        Cp,
        I({ asChild: !0 }, u),
        d.createElement(
          _p,
          I(
            {
              id: o.triggerId,
              "aria-haspopup": "menu",
              "aria-expanded": n.open,
              "aria-controls": o.contentId,
              "data-state": Np(n.open),
            },
            e,
            {
              ref: _a(t, o.onTriggerChange),
              onClick: (c) => {
                var m;
                (m = e.onClick) === null || m === void 0 || m.call(e, c),
                  !(e.disabled || c.defaultPrevented) &&
                    (c.currentTarget.focus(), n.open || n.onOpenChange(!0));
              },
              onPointerMove: z(
                e.onPointerMove,
                Xr((c) => {
                  i.onItemEnter(c),
                    !c.defaultPrevented &&
                      !e.disabled &&
                      !n.open &&
                      !l.current &&
                      (i.onPointerGraceIntentChange(null),
                      (l.current = window.setTimeout(() => {
                        n.onOpenChange(!0), p();
                      }, 100)));
                })
              ),
              onPointerLeave: z(
                e.onPointerLeave,
                Xr((c) => {
                  var m;
                  p();
                  const v =
                    (m = n.content) === null || m === void 0
                      ? void 0
                      : m.getBoundingClientRect();
                  if (v) {
                    var w;
                    const y =
                        (w = n.content) === null || w === void 0
                          ? void 0
                          : w.dataset.side,
                      S = y === "right",
                      h = S ? -5 : 5,
                      f = v[S ? "left" : "right"],
                      g = v[S ? "right" : "left"];
                    i.onPointerGraceIntentChange({
                      area: [
                        { x: c.clientX + h, y: c.clientY },
                        { x: f, y: v.top },
                        { x: g, y: v.top },
                        { x: g, y: v.bottom },
                        { x: f, y: v.bottom },
                      ],
                      side: y,
                    }),
                      window.clearTimeout(s.current),
                      (s.current = window.setTimeout(
                        () => i.onPointerGraceIntentChange(null),
                        300
                      ));
                  } else {
                    if ((i.onTriggerLeave(c), c.defaultPrevented)) return;
                    i.onPointerGraceIntentChange(null);
                  }
                })
              ),
              onKeyDown: z(e.onKeyDown, (c) => {
                const m = i.searchRef.current !== "";
                if (
                  !(e.disabled || (m && c.key === " ")) &&
                  vy[r.dir].includes(c.key)
                ) {
                  var v;
                  n.onOpenChange(!0),
                    (v = n.content) === null || v === void 0 || v.focus(),
                    c.preventDefault();
                }
              }),
            }
          )
        )
      )
    );
  }),
  Uy = "MenuSubContent",
  By = d.forwardRef((e, t) => {
    const n = bp(rt, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...o } = e,
      i = wn(rt, e.__scopeMenu),
      l = lo(rt, e.__scopeMenu),
      s = Mp(Uy, e.__scopeMenu),
      a = d.useRef(null),
      u = Pe(t, a);
    return d.createElement(
      Yr.Provider,
      { scope: e.__scopeMenu },
      d.createElement(
        io,
        { present: r || i.open },
        d.createElement(
          Yr.Slot,
          { scope: e.__scopeMenu },
          d.createElement(
            ja,
            I({ id: s.contentId, "aria-labelledby": s.triggerId }, o, {
              ref: u,
              align: "start",
              side: l.dir === "rtl" ? "left" : "right",
              disableOutsidePointerEvents: !1,
              disableOutsideScroll: !1,
              trapFocus: !1,
              onOpenAutoFocus: (p) => {
                var c;
                l.isUsingKeyboardRef.current &&
                  ((c = a.current) === null || c === void 0 || c.focus()),
                  p.preventDefault();
              },
              onCloseAutoFocus: (p) => p.preventDefault(),
              onFocusOutside: z(e.onFocusOutside, (p) => {
                p.target !== s.trigger && i.onOpenChange(!1);
              }),
              onEscapeKeyDown: z(e.onEscapeKeyDown, (p) => {
                l.onClose(), p.preventDefault();
              }),
              onKeyDown: z(e.onKeyDown, (p) => {
                const c = p.currentTarget.contains(p.target),
                  m = gy[l.dir].includes(p.key);
                if (c && m) {
                  var v;
                  i.onOpenChange(!1),
                    (v = s.trigger) === null || v === void 0 || v.focus(),
                    p.preventDefault();
                }
              }),
            })
          )
        )
      )
    );
  });
function Np(e) {
  return e ? "open" : "closed";
}
function Pi(e) {
  return e === "indeterminate";
}
function Ua(e) {
  return Pi(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Wy(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Vy(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function Hy(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t,
    i = n ? e.indexOf(n) : -1;
  let l = Vy(e, Math.max(i, 0));
  o.length === 1 && (l = l.filter((u) => u !== n));
  const a = l.find((u) => u.toLowerCase().startsWith(o.toLowerCase()));
  return a !== n ? a : void 0;
}
function Ky(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, l = t.length - 1; i < t.length; l = i++) {
    const s = t[i].x,
      a = t[i].y,
      u = t[l].x,
      p = t[l].y;
    a > r != p > r && n < ((u - s) * (r - a)) / (p - a) + s && (o = !o);
  }
  return o;
}
function Gy(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Ky(n, t);
}
function Xr(e) {
  return (t) => (t.pointerType === "mouse" ? e(t) : void 0);
}
const Qy = $y,
  Yy = Cp,
  Xy = ky,
  Zy = _y,
  Jy = My,
  qy = Fa,
  e1 = Ny,
  t1 = Iy,
  n1 = Dy,
  r1 = zy,
  o1 = Fy,
  i1 = By,
  Ba = "Menubar",
  [Ns, l1, s1] = Pa(Ba),
  [Tp, Ew] = ro(Ba, [s1, Gi]),
  Ye = xy(),
  Op = Gi(),
  [a1, Wa] = Tp(Ba),
  u1 = d.forwardRef((e, t) => {
    const {
        __scopeMenubar: n,
        value: r,
        onValueChange: o,
        defaultValue: i,
        loop: l = !0,
        dir: s,
        ...a
      } = e,
      u = Ra(s),
      p = Op(n),
      [c = "", m] = ap({ prop: r, onChange: o, defaultProp: i }),
      [v, w] = d.useState(null);
    return d.createElement(
      a1,
      {
        scope: n,
        value: c,
        onMenuOpen: d.useCallback(
          (y) => {
            m(y), w(y);
          },
          [m]
        ),
        onMenuClose: d.useCallback(() => m(""), [m]),
        onMenuToggle: d.useCallback(
          (y) => {
            m((S) => (S ? "" : y)), w(y);
          },
          [m]
        ),
        dir: u,
        loop: l,
      },
      d.createElement(
        Ns.Provider,
        { scope: n },
        d.createElement(
          Ns.Slot,
          { scope: n },
          d.createElement(
            dp,
            I({ asChild: !0 }, p, {
              orientation: "horizontal",
              loop: l,
              dir: u,
              currentTabStopId: v,
              onCurrentTabStopIdChange: w,
            }),
            d.createElement(Fe.div, I({ role: "menubar" }, a, { ref: t }))
          )
        )
      )
    );
  }),
  Ap = "MenubarMenu",
  [c1, Ip] = Tp(Ap),
  d1 = (e) => {
    const { __scopeMenubar: t, value: n, ...r } = e,
      o = Qo(),
      i = n || o || "LEGACY_REACT_AUTO_VALUE",
      l = Wa(Ap, t),
      s = Ye(t),
      a = d.useRef(null),
      u = d.useRef(!1),
      p = l.value === i;
    return (
      d.useEffect(() => {
        p || (u.current = !1);
      }, [p]),
      d.createElement(
        c1,
        {
          scope: t,
          value: i,
          triggerId: Qo(),
          triggerRef: a,
          contentId: Qo(),
          wasKeyboardTriggerOpenRef: u,
        },
        d.createElement(
          Qy,
          I(
            {},
            s,
            {
              open: p,
              onOpenChange: (c) => {
                c || l.onMenuClose();
              },
              modal: !1,
              dir: l.dir,
            },
            r
          )
        )
      )
    );
  },
  Cc = "MenubarTrigger",
  f1 = d.forwardRef((e, t) => {
    const { __scopeMenubar: n, disabled: r = !1, ...o } = e,
      i = Op(n),
      l = Ye(n),
      s = Wa(Cc, n),
      a = Ip(Cc, n),
      u = d.useRef(null),
      p = Pe(t, u, a.triggerRef),
      [c, m] = d.useState(!1),
      v = s.value === a.value;
    return d.createElement(
      Ns.ItemSlot,
      { scope: n, value: a.value, disabled: r },
      d.createElement(
        fp,
        I({ asChild: !0 }, i, { focusable: !r, tabStopId: a.value }),
        d.createElement(
          Yy,
          I({ asChild: !0 }, l),
          d.createElement(
            Fe.button,
            I(
              {
                type: "button",
                role: "menuitem",
                id: a.triggerId,
                "aria-haspopup": "menu",
                "aria-expanded": v,
                "aria-controls": v ? a.contentId : void 0,
                "data-highlighted": c ? "" : void 0,
                "data-state": v ? "open" : "closed",
                "data-disabled": r ? "" : void 0,
                disabled: r,
              },
              o,
              {
                ref: p,
                onPointerDown: z(e.onPointerDown, (w) => {
                  !r &&
                    w.button === 0 &&
                    w.ctrlKey === !1 &&
                    (s.onMenuOpen(a.value), v || w.preventDefault());
                }),
                onPointerEnter: z(e.onPointerEnter, () => {
                  if (!!s.value && !v) {
                    var y;
                    s.onMenuOpen(a.value),
                      (y = u.current) === null || y === void 0 || y.focus();
                  }
                }),
                onKeyDown: z(e.onKeyDown, (w) => {
                  r ||
                    (["Enter", " "].includes(w.key) && s.onMenuToggle(a.value),
                    w.key === "ArrowDown" && s.onMenuOpen(a.value),
                    ["Enter", " ", "ArrowDown"].includes(w.key) &&
                      ((a.wasKeyboardTriggerOpenRef.current = !0),
                      w.preventDefault()));
                }),
                onFocus: z(e.onFocus, () => m(!0)),
                onBlur: z(e.onBlur, () => m(!1)),
              }
            )
          )
        )
      )
    );
  }),
  p1 = (e) => {
    const { __scopeMenubar: t, ...n } = e,
      r = Ye(t);
    return d.createElement(Xy, I({}, r, n));
  },
  kc = "MenubarContent",
  m1 = d.forwardRef((e, t) => {
    const { __scopeMenubar: n, align: r = "start", ...o } = e,
      i = Ye(n),
      l = Wa(kc, n),
      s = Ip(kc, n),
      a = l1(n),
      u = d.useRef(!1);
    return d.createElement(
      Zy,
      I(
        {
          id: s.contentId,
          "aria-labelledby": s.triggerId,
          "data-radix-menubar-content": "",
        },
        i,
        o,
        {
          ref: t,
          align: r,
          onCloseAutoFocus: z(e.onCloseAutoFocus, (p) => {
            if (!!!l.value && !u.current) {
              var m;
              (m = s.triggerRef.current) === null || m === void 0 || m.focus();
            }
            (u.current = !1), p.preventDefault();
          }),
          onFocusOutside: z(e.onFocusOutside, (p) => {
            const c = p.target;
            a().some((v) => {
              var w;
              return (w = v.ref.current) === null || w === void 0
                ? void 0
                : w.contains(c);
            }) && p.preventDefault();
          }),
          onInteractOutside: z(e.onInteractOutside, () => {
            u.current = !0;
          }),
          onEntryFocus: (p) => {
            s.wasKeyboardTriggerOpenRef.current || p.preventDefault();
          },
          onKeyDown: z(
            e.onKeyDown,
            (p) => {
              if (["ArrowRight", "ArrowLeft"].includes(p.key)) {
                const c = p.target,
                  m = c.hasAttribute("data-radix-menubar-subtrigger"),
                  v =
                    c.closest("[data-radix-menubar-content]") !==
                    p.currentTarget,
                  y = (l.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === p.key;
                if ((!y && m) || (v && y)) return;
                let f = a()
                  .filter((E) => !E.disabled)
                  .map((E) => E.value);
                y && f.reverse();
                const g = f.indexOf(s.value);
                f = l.loop ? $1(f, g + 1) : f.slice(g + 1);
                const [x] = f;
                x && l.onMenuOpen(x);
              }
            },
            { checkForDefaultPrevented: !1 }
          ),
          style: {
            ...e.style,
            "--radix-menubar-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-menubar-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-menubar-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-menubar-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
        }
      )
    );
  }),
  h1 = d.forwardRef((e, t) => {
    const { __scopeMenubar: n, ...r } = e,
      o = Ye(n);
    return d.createElement(Jy, I({}, o, r, { ref: t }));
  }),
  v1 = d.forwardRef((e, t) => {
    const { __scopeMenubar: n, ...r } = e,
      o = Ye(n);
    return d.createElement(qy, I({}, o, r, { ref: t }));
  }),
  g1 = d.forwardRef((e, t) => {
    const { __scopeMenubar: n, ...r } = e,
      o = Ye(n);
    return d.createElement(e1, I({}, o, r, { ref: t }));
  }),
  y1 = d.forwardRef((e, t) => {
    const { __scopeMenubar: n, ...r } = e,
      o = Ye(n);
    return d.createElement(t1, I({}, o, r, { ref: t }));
  }),
  w1 = d.forwardRef((e, t) => {
    const { __scopeMenubar: n, ...r } = e,
      o = Ye(n);
    return d.createElement(n1, I({}, o, r, { ref: t }));
  }),
  x1 = d.forwardRef((e, t) => {
    const { __scopeMenubar: n, ...r } = e,
      o = Ye(n);
    return d.createElement(r1, I({}, o, r, { ref: t }));
  }),
  S1 = d.forwardRef((e, t) => {
    const { __scopeMenubar: n, ...r } = e,
      o = Ye(n);
    return d.createElement(
      o1,
      I({ "data-radix-menubar-subtrigger": "" }, o, r, { ref: t })
    );
  }),
  E1 = d.forwardRef((e, t) => {
    const { __scopeMenubar: n, ...r } = e,
      o = Ye(n);
    return d.createElement(
      i1,
      I({}, o, { "data-radix-menubar-content": "" }, r, {
        ref: t,
        style: {
          ...e.style,
          "--radix-menubar-content-transform-origin":
            "var(--radix-popper-transform-origin)",
          "--radix-menubar-content-available-width":
            "var(--radix-popper-available-width)",
          "--radix-menubar-content-available-height":
            "var(--radix-popper-available-height)",
          "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)",
        },
      })
    );
  });
function $1(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
const Lp = u1,
  C1 = d1,
  Dp = f1,
  k1 = p1,
  zp = m1,
  jp = h1,
  Fp = v1,
  Up = g1,
  Bp = y1,
  Wp = w1,
  Vp = x1,
  Hp = S1,
  Kp = E1;
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var b1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _1 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Va = (e, t) => {
  const n = d.forwardRef(
    (
      {
        color: r = "currentColor",
        size: o = 24,
        strokeWidth: i = 2,
        absoluteStrokeWidth: l,
        className: s = "",
        children: a,
        ...u
      },
      p
    ) =>
      d.createElement(
        "svg",
        {
          ref: p,
          ...b1,
          width: o,
          height: o,
          stroke: r,
          strokeWidth: l ? (Number(i) * 24) / Number(o) : i,
          className: ["lucide", `lucide-${_1(e)}`, s].join(" "),
          ...u,
        },
        [
          ...t.map(([c, m]) => d.createElement(c, m)),
          ...(Array.isArray(a) ? a : [a]),
        ]
      )
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const P1 = Va("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const R1 = Va("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const M1 = Va("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
]);
function Gp(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Gp(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function N1() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Gp(e)) && (r && (r += " "), (r += t));
  return r;
}
const Ha = "-";
function T1(e) {
  const t = A1(e),
    { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
  function o(l) {
    const s = l.split(Ha);
    return s[0] === "" && s.length !== 1 && s.shift(), Qp(s, t) || O1(l);
  }
  function i(l, s) {
    const a = n[l] || [];
    return s && r[l] ? [...a, ...r[l]] : a;
  }
  return { getClassGroupId: o, getConflictingClassGroupIds: i };
}
function Qp(e, t) {
  var l;
  if (e.length === 0) return t.classGroupId;
  const n = e[0],
    r = t.nextPart.get(n),
    o = r ? Qp(e.slice(1), r) : void 0;
  if (o) return o;
  if (t.validators.length === 0) return;
  const i = e.join(Ha);
  return (l = t.validators.find(({ validator: s }) => s(i))) == null
    ? void 0
    : l.classGroupId;
}
const bc = /^\[(.+)\]$/;
function O1(e) {
  if (bc.test(e)) {
    const t = bc.exec(e)[1],
      n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}
function A1(e) {
  const { theme: t, prefix: n } = e,
    r = { nextPart: new Map(), validators: [] };
  return (
    L1(Object.entries(e.classGroups), n).forEach(([i, l]) => {
      Ts(l, r, i, t);
    }),
    r
  );
}
function Ts(e, t, n, r) {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : _c(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (I1(o)) {
        Ts(o(r), t, n, r);
        return;
      }
      t.validators.push({ validator: o, classGroupId: n });
      return;
    }
    Object.entries(o).forEach(([i, l]) => {
      Ts(l, _c(t, i), n, r);
    });
  });
}
function _c(e, t) {
  let n = e;
  return (
    t.split(Ha).forEach((r) => {
      n.nextPart.has(r) ||
        n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
        (n = n.nextPart.get(r));
    }),
    n
  );
}
function I1(e) {
  return e.isThemeGetter;
}
function L1(e, t) {
  return t
    ? e.map(([n, r]) => {
        const o = r.map((i) =>
          typeof i == "string"
            ? t + i
            : typeof i == "object"
            ? Object.fromEntries(Object.entries(i).map(([l, s]) => [t + l, s]))
            : i
        );
        return [n, o];
      })
    : e;
}
function D1(e) {
  if (e < 1) return { get: () => {}, set: () => {} };
  let t = 0,
    n = new Map(),
    r = new Map();
  function o(i, l) {
    n.set(i, l), t++, t > e && ((t = 0), (r = n), (n = new Map()));
  }
  return {
    get(i) {
      let l = n.get(i);
      if (l !== void 0) return l;
      if ((l = r.get(i)) !== void 0) return o(i, l), l;
    },
    set(i, l) {
      n.has(i) ? n.set(i, l) : o(i, l);
    },
  };
}
const Yp = "!";
function z1(e) {
  const t = e.separator,
    n = t.length === 1,
    r = t[0],
    o = t.length;
  return function (l) {
    const s = [];
    let a = 0,
      u = 0,
      p;
    for (let y = 0; y < l.length; y++) {
      let S = l[y];
      if (a === 0) {
        if (S === r && (n || l.slice(y, y + o) === t)) {
          s.push(l.slice(u, y)), (u = y + o);
          continue;
        }
        if (S === "/") {
          p = y;
          continue;
        }
      }
      S === "[" ? a++ : S === "]" && a--;
    }
    const c = s.length === 0 ? l : l.substring(u),
      m = c.startsWith(Yp),
      v = m ? c.substring(1) : c,
      w = p && p > u ? p - u : void 0;
    return {
      modifiers: s,
      hasImportantModifier: m,
      baseClassName: v,
      maybePostfixModifierPosition: w,
    };
  };
}
function j1(e) {
  if (e.length <= 1) return e;
  const t = [];
  let n = [];
  return (
    e.forEach((r) => {
      r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
    }),
    t.push(...n.sort()),
    t
  );
}
function F1(e) {
  return { cache: D1(e.cacheSize), splitModifiers: z1(e), ...T1(e) };
}
const U1 = /\s+/;
function B1(e, t) {
  const {
      splitModifiers: n,
      getClassGroupId: r,
      getConflictingClassGroupIds: o,
    } = t,
    i = new Set();
  return e
    .trim()
    .split(U1)
    .map((l) => {
      const {
        modifiers: s,
        hasImportantModifier: a,
        baseClassName: u,
        maybePostfixModifierPosition: p,
      } = n(l);
      let c = r(p ? u.substring(0, p) : u),
        m = !!p;
      if (!c) {
        if (!p) return { isTailwindClass: !1, originalClassName: l };
        if (((c = r(u)), !c))
          return { isTailwindClass: !1, originalClassName: l };
        m = !1;
      }
      const v = j1(s).join(":");
      return {
        isTailwindClass: !0,
        modifierId: a ? v + Yp : v,
        classGroupId: c,
        originalClassName: l,
        hasPostfixModifier: m,
      };
    })
    .reverse()
    .filter((l) => {
      if (!l.isTailwindClass) return !0;
      const { modifierId: s, classGroupId: a, hasPostfixModifier: u } = l,
        p = s + a;
      return i.has(p)
        ? !1
        : (i.add(p), o(a, u).forEach((c) => i.add(s + c)), !0);
    })
    .reverse()
    .map((l) => l.originalClassName)
    .join(" ");
}
function W1() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Xp(t)) && (r && (r += " "), (r += n));
  return r;
}
function Xp(e) {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Xp(e[r])) && (n && (n += " "), (n += t));
  return n;
}
function V1(e, ...t) {
  let n,
    r,
    o,
    i = l;
  function l(a) {
    const u = t.reduce((p, c) => c(p), e());
    return (n = F1(u)), (r = n.cache.get), (o = n.cache.set), (i = s), s(a);
  }
  function s(a) {
    const u = r(a);
    if (u) return u;
    const p = B1(a, n);
    return o(a, p), p;
  }
  return function () {
    return i(W1.apply(null, arguments));
  };
}
function Y(e) {
  const t = (n) => n[e] || [];
  return (t.isThemeGetter = !0), t;
}
const Zp = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  H1 = /^\d+\/\d+$/,
  K1 = new Set(["px", "full", "screen"]),
  G1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Q1 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Y1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  X1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Z1 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function mt(e) {
  return sn(e) || K1.has(e) || H1.test(e);
}
function Mt(e) {
  return or(e, "length", iw);
}
function sn(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Io(e) {
  return or(e, "number", sn);
}
function mr(e) {
  return !!e && Number.isInteger(Number(e));
}
function J1(e) {
  return e.endsWith("%") && sn(e.slice(0, -1));
}
function D(e) {
  return Zp.test(e);
}
function Nt(e) {
  return G1.test(e);
}
const q1 = new Set(["length", "size", "percentage"]);
function ew(e) {
  return or(e, q1, Jp);
}
function tw(e) {
  return or(e, "position", Jp);
}
const nw = new Set(["image", "url"]);
function rw(e) {
  return or(e, nw, sw);
}
function ow(e) {
  return or(e, "", lw);
}
function hr() {
  return !0;
}
function or(e, t, n) {
  const r = Zp.exec(e);
  return r
    ? r[1]
      ? typeof t == "string"
        ? r[1] === t
        : t.has(r[1])
      : n(r[2])
    : !1;
}
function iw(e) {
  return Q1.test(e) && !Y1.test(e);
}
function Jp() {
  return !1;
}
function lw(e) {
  return X1.test(e);
}
function sw(e) {
  return Z1.test(e);
}
function aw() {
  const e = Y("colors"),
    t = Y("spacing"),
    n = Y("blur"),
    r = Y("brightness"),
    o = Y("borderColor"),
    i = Y("borderRadius"),
    l = Y("borderSpacing"),
    s = Y("borderWidth"),
    a = Y("contrast"),
    u = Y("grayscale"),
    p = Y("hueRotate"),
    c = Y("invert"),
    m = Y("gap"),
    v = Y("gradientColorStops"),
    w = Y("gradientColorStopPositions"),
    y = Y("inset"),
    S = Y("margin"),
    h = Y("opacity"),
    f = Y("padding"),
    g = Y("saturate"),
    x = Y("scale"),
    E = Y("sepia"),
    C = Y("skew"),
    $ = Y("space"),
    k = Y("translate"),
    A = () => ["auto", "contain", "none"],
    N = () => ["auto", "hidden", "clip", "visible", "scroll"],
    B = () => ["auto", D, t],
    O = () => [D, t],
    J = () => ["", mt, Mt],
    j = () => ["auto", sn, D],
    W = () => [
      "bottom",
      "center",
      "left",
      "left-bottom",
      "left-top",
      "right",
      "right-bottom",
      "right-top",
      "top",
    ],
    G = () => ["solid", "dashed", "dotted", "double", "none"],
    F = () => [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity",
      "plus-lighter",
    ],
    R = () => [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
      "stretch",
    ],
    _ = () => ["", "0", D],
    T = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column",
    ],
    L = () => [sn, Io],
    V = () => [sn, D];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [hr],
      spacing: [mt, Mt],
      blur: ["none", "", Nt, D],
      brightness: L(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Nt, D],
      borderSpacing: O(),
      borderWidth: J(),
      contrast: L(),
      grayscale: _(),
      hueRotate: V(),
      invert: _(),
      gap: O(),
      gradientColorStops: [e],
      gradientColorStopPositions: [J1, Mt],
      inset: B(),
      margin: B(),
      opacity: L(),
      padding: O(),
      saturate: L(),
      scale: L(),
      sepia: _(),
      skew: V(),
      space: O(),
      translate: O(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", D] }],
      container: ["container"],
      columns: [{ columns: [Nt] }],
      "break-after": [{ "break-after": T() }],
      "break-before": [{ "break-before": T() }],
      "break-inside": [
        { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
      ],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none", "start", "end"] }],
      clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [
        { object: ["contain", "cover", "fill", "none", "scale-down"] },
      ],
      "object-position": [{ object: [...W(), D] }],
      overflow: [{ overflow: N() }],
      "overflow-x": [{ "overflow-x": N() }],
      "overflow-y": [{ "overflow-y": N() }],
      overscroll: [{ overscroll: A() }],
      "overscroll-x": [{ "overscroll-x": A() }],
      "overscroll-y": [{ "overscroll-y": A() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [y] }],
      "inset-x": [{ "inset-x": [y] }],
      "inset-y": [{ "inset-y": [y] }],
      start: [{ start: [y] }],
      end: [{ end: [y] }],
      top: [{ top: [y] }],
      right: [{ right: [y] }],
      bottom: [{ bottom: [y] }],
      left: [{ left: [y] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", mr, D] }],
      basis: [{ basis: B() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", D] }],
      grow: [{ grow: _() }],
      shrink: [{ shrink: _() }],
      order: [{ order: ["first", "last", "none", mr, D] }],
      "grid-cols": [{ "grid-cols": [hr] }],
      "col-start-end": [{ col: ["auto", { span: ["full", mr, D] }, D] }],
      "col-start": [{ "col-start": j() }],
      "col-end": [{ "col-end": j() }],
      "grid-rows": [{ "grid-rows": [hr] }],
      "row-start-end": [{ row: ["auto", { span: [mr, D] }, D] }],
      "row-start": [{ "row-start": j() }],
      "row-end": [{ "row-end": j() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", D] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", D] }],
      gap: [{ gap: [m] }],
      "gap-x": [{ "gap-x": [m] }],
      "gap-y": [{ "gap-y": [m] }],
      "justify-content": [{ justify: ["normal", ...R()] }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: ["normal", ...R(), "baseline"] }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [{ "place-content": [...R(), "baseline"] }],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [f] }],
      px: [{ px: [f] }],
      py: [{ py: [f] }],
      ps: [{ ps: [f] }],
      pe: [{ pe: [f] }],
      pt: [{ pt: [f] }],
      pr: [{ pr: [f] }],
      pb: [{ pb: [f] }],
      pl: [{ pl: [f] }],
      m: [{ m: [S] }],
      mx: [{ mx: [S] }],
      my: [{ my: [S] }],
      ms: [{ ms: [S] }],
      me: [{ me: [S] }],
      mt: [{ mt: [S] }],
      mr: [{ mr: [S] }],
      mb: [{ mb: [S] }],
      ml: [{ ml: [S] }],
      "space-x": [{ "space-x": [$] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [$] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", D, t] }],
      "min-w": [{ "min-w": [D, t, "min", "max", "fit"] }],
      "max-w": [
        {
          "max-w": [
            D,
            t,
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [Nt] },
            Nt,
          ],
        },
      ],
      h: [{ h: [D, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "min-h": [{ "min-h": [D, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "max-h": [{ "max-h": [D, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      size: [{ size: [D, t, "auto", "min", "max", "fit"] }],
      "font-size": [{ text: ["base", Nt, Mt] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            Io,
          ],
        },
      ],
      "font-family": [{ font: [hr] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            D,
          ],
        },
      ],
      "line-clamp": [{ "line-clamp": ["none", sn, Io] }],
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            mt,
            D,
          ],
        },
      ],
      "list-image": [{ "list-image": ["none", D] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", D] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [h] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [h] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [...G(), "wavy"] }],
      "text-decoration-thickness": [
        { decoration: ["auto", "from-font", mt, Mt] },
      ],
      "underline-offset": [{ "underline-offset": ["auto", mt, D] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
      indent: [{ indent: O() }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            D,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
          ],
        },
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", D] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [h] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [...W(), tw] }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", ew] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            rw,
          ],
        },
      ],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [w] }],
      "gradient-via-pos": [{ via: [w] }],
      "gradient-to-pos": [{ to: [w] }],
      "gradient-from": [{ from: [v] }],
      "gradient-via": [{ via: [v] }],
      "gradient-to": [{ to: [v] }],
      rounded: [{ rounded: [i] }],
      "rounded-s": [{ "rounded-s": [i] }],
      "rounded-e": [{ "rounded-e": [i] }],
      "rounded-t": [{ "rounded-t": [i] }],
      "rounded-r": [{ "rounded-r": [i] }],
      "rounded-b": [{ "rounded-b": [i] }],
      "rounded-l": [{ "rounded-l": [i] }],
      "rounded-ss": [{ "rounded-ss": [i] }],
      "rounded-se": [{ "rounded-se": [i] }],
      "rounded-ee": [{ "rounded-ee": [i] }],
      "rounded-es": [{ "rounded-es": [i] }],
      "rounded-tl": [{ "rounded-tl": [i] }],
      "rounded-tr": [{ "rounded-tr": [i] }],
      "rounded-br": [{ "rounded-br": [i] }],
      "rounded-bl": [{ "rounded-bl": [i] }],
      "border-w": [{ border: [s] }],
      "border-w-x": [{ "border-x": [s] }],
      "border-w-y": [{ "border-y": [s] }],
      "border-w-s": [{ "border-s": [s] }],
      "border-w-e": [{ "border-e": [s] }],
      "border-w-t": [{ "border-t": [s] }],
      "border-w-r": [{ "border-r": [s] }],
      "border-w-b": [{ "border-b": [s] }],
      "border-w-l": [{ "border-l": [s] }],
      "border-opacity": [{ "border-opacity": [h] }],
      "border-style": [{ border: [...G(), "hidden"] }],
      "divide-x": [{ "divide-x": [s] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [s] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [h] }],
      "divide-style": [{ divide: G() }],
      "border-color": [{ border: [o] }],
      "border-color-x": [{ "border-x": [o] }],
      "border-color-y": [{ "border-y": [o] }],
      "border-color-t": [{ "border-t": [o] }],
      "border-color-r": [{ "border-r": [o] }],
      "border-color-b": [{ "border-b": [o] }],
      "border-color-l": [{ "border-l": [o] }],
      "divide-color": [{ divide: [o] }],
      "outline-style": [{ outline: ["", ...G()] }],
      "outline-offset": [{ "outline-offset": [mt, D] }],
      "outline-w": [{ outline: [mt, Mt] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: J() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [h] }],
      "ring-offset-w": [{ "ring-offset": [mt, Mt] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", Nt, ow] }],
      "shadow-color": [{ shadow: [hr] }],
      opacity: [{ opacity: [h] }],
      "mix-blend": [{ "mix-blend": F() }],
      "bg-blend": [{ "bg-blend": F() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [n] }],
      brightness: [{ brightness: [r] }],
      contrast: [{ contrast: [a] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", Nt, D] }],
      grayscale: [{ grayscale: [u] }],
      "hue-rotate": [{ "hue-rotate": [p] }],
      invert: [{ invert: [c] }],
      saturate: [{ saturate: [g] }],
      sepia: [{ sepia: [E] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [n] }],
      "backdrop-brightness": [{ "backdrop-brightness": [r] }],
      "backdrop-contrast": [{ "backdrop-contrast": [a] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [p] }],
      "backdrop-invert": [{ "backdrop-invert": [c] }],
      "backdrop-opacity": [{ "backdrop-opacity": [h] }],
      "backdrop-saturate": [{ "backdrop-saturate": [g] }],
      "backdrop-sepia": [{ "backdrop-sepia": [E] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [l] }],
      "border-spacing-x": [{ "border-spacing-x": [l] }],
      "border-spacing-y": [{ "border-spacing-y": [l] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [
        {
          transition: [
            "none",
            "all",
            "",
            "colors",
            "opacity",
            "shadow",
            "transform",
            D,
          ],
        },
      ],
      duration: [{ duration: V() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", D] }],
      delay: [{ delay: V() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", D] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [x] }],
      "scale-x": [{ "scale-x": [x] }],
      "scale-y": [{ "scale-y": [x] }],
      rotate: [{ rotate: [mr, D] }],
      "translate-x": [{ "translate-x": [k] }],
      "translate-y": [{ "translate-y": [k] }],
      "skew-x": [{ "skew-x": [C] }],
      "skew-y": [{ "skew-y": [C] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            D,
          ],
        },
      ],
      accent: [{ accent: ["auto", e] }],
      appearance: [{ appearance: ["none", "auto"] }],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            D,
          ],
        },
      ],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": O() }],
      "scroll-mx": [{ "scroll-mx": O() }],
      "scroll-my": [{ "scroll-my": O() }],
      "scroll-ms": [{ "scroll-ms": O() }],
      "scroll-me": [{ "scroll-me": O() }],
      "scroll-mt": [{ "scroll-mt": O() }],
      "scroll-mr": [{ "scroll-mr": O() }],
      "scroll-mb": [{ "scroll-mb": O() }],
      "scroll-ml": [{ "scroll-ml": O() }],
      "scroll-p": [{ "scroll-p": O() }],
      "scroll-px": [{ "scroll-px": O() }],
      "scroll-py": [{ "scroll-py": O() }],
      "scroll-ps": [{ "scroll-ps": O() }],
      "scroll-pe": [{ "scroll-pe": O() }],
      "scroll-pt": [{ "scroll-pt": O() }],
      "scroll-pr": [{ "scroll-pr": O() }],
      "scroll-pb": [{ "scroll-pb": O() }],
      "scroll-pl": [{ "scroll-pl": O() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [{ touch: ["auto", "none", "manipulation"] }],
      "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
      "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [
        { "will-change": ["auto", "scroll", "contents", "transform", D] },
      ],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [mt, Mt, Io] }],
      stroke: [{ stroke: [e, "none"] }],
      sr: ["sr-only", "not-sr-only"],
      "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left",
      ],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
}
const uw = V1(aw);
function it(...e) {
  return uw(N1(e));
}
const cw = C1,
  qp = d.forwardRef(({ className: e, ...t }, n) =>
    b.jsx(Lp, {
      ref: n,
      className: it("flex h-10 items-center space-x-1 bg-background p-1", e),
      ...t,
    })
  );
qp.displayName = Lp.displayName;
const em = d.forwardRef(({ className: e, ...t }, n) =>
  b.jsx(Dp, {
    ref: n,
    className: it(
      "flex cursor-default select-none items-center   px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      e
    ),
    ...t,
  })
);
em.displayName = Dp.displayName;
const dw = d.forwardRef(({ className: e, inset: t, children: n, ...r }, o) =>
  b.jsxs(Hp, {
    ref: o,
    className: it(
      "flex cursor-default select-none items-center  px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [n, b.jsx(R1, { className: "ml-auto h-4 w-4" })],
  })
);
dw.displayName = Hp.displayName;
const fw = d.forwardRef(({ className: e, ...t }, n) =>
  b.jsx(Kp, {
    ref: n,
    className: it(
      "z-50 mr-3 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t,
  })
);
fw.displayName = Kp.displayName;
const tm = d.forwardRef(
  (
    {
      className: e,
      align: t = "start",
      alignOffset: n = -4,
      sideOffset: r = 8,
      ...o
    },
    i
  ) =>
    b.jsx(k1, {
      children: b.jsx(zp, {
        ref: i,
        align: t,
        alignOffset: n,
        sideOffset: r,
        className: it(
          "z-50 min-w-[12rem] mr-6 overflow-hidden rounded-md border border-white/30 bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          e
        ),
        ...o,
      }),
    })
);
tm.displayName = zp.displayName;
const Jo = d.forwardRef(({ className: e, inset: t, ...n }, r) =>
  b.jsx(Fp, {
    ref: r,
    className: it(
      "relative p-3 hover:bg-white/10 rounded-md flex cursor-default cursor-pointer text-white/80 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n,
  })
);
Jo.displayName = Fp.displayName;
const pw = d.forwardRef(({ className: e, children: t, checked: n, ...r }, o) =>
  b.jsxs(Up, {
    ref: o,
    className: it(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      b.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: b.jsx(Wp, { children: b.jsx(P1, { className: "h-4 w-4" }) }),
      }),
      t,
    ],
  })
);
pw.displayName = Up.displayName;
const mw = d.forwardRef(({ className: e, children: t, ...n }, r) =>
  b.jsxs(Bp, {
    ref: r,
    className: it(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      b.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: b.jsx(Wp, {
          children: b.jsx(M1, { className: "h-2 w-2 fill-current" }),
        }),
      }),
      t,
    ],
  })
);
mw.displayName = Bp.displayName;
const hw = d.forwardRef(({ className: e, inset: t, ...n }, r) =>
  b.jsx(jp, {
    ref: r,
    className: it("px-2 py-1.5 text-sm font-semibold ", t && "pl-8", e),
    ...n,
  })
);
hw.displayName = jp.displayName;
const nm = d.forwardRef(({ className: e, ...t }, n) =>
  b.jsx(Vp, {
    ref: n,
    className: it("-mx-1 my-1 h-px bg-muted bg-white/30 mx-1", e),
    ...t,
  })
);
nm.displayName = Vp.displayName;
const qo = ({ className: e, ...t }) =>
  b.jsx("span", {
    className: it(
      "ml-auto text-sm tracking-widest text-muted-foreground bg-white/0 text-gray-500",
      e
    ),
    ...t,
  });
qo.displayname = "MenubarShortcut";
const vw = ({ currentPage: e, setCurrentPage: t }) => {
    const n = (r) => {
      t(r);
    };
    return b.jsxs("div", {
      className: "flex",
      children: [
        b.jsx("div", {
          children: b.jsxs("div", {
            onClick: () => t("main"),
            children: [
              b.jsx("p", {
                className: "font-bold text-xl",
                children: "Aaron Kairavuo",
              }),
              b.jsx("p", {
                className: "font-semibold text-white/70",
                children: "Portfolio",
              }),
            ],
          }),
        }),
        b.jsx("div", {
          className: "ml-auto",
          children: b.jsx(qp, {
            children: b.jsxs(cw, {
              children: [
                b.jsx(em, {
                  children: b.jsx("span", {
                    className:
                      "material-icons material-symbols-rounded bg-white/5 hover:bg-white/10 p-1 cursor-pointer rounded icon",
                    children: "segment",
                  }),
                }),
                b.jsxs(tm, {
                  children: [
                    b.jsxs(Jo, {
                      onClick: () => n("main"),
                      children: [
                        "Profiilini",
                        " ",
                        b.jsx(qo, {
                          children: b.jsx("span", {
                            className:
                              "material-icons material-symbols-rounded bg-white/0 text-[16px] m-0.5 text-white/50 icon",
                            children: "badge",
                          }),
                        }),
                      ],
                    }),
                    b.jsxs(Jo, {
                      onClick: () => n("portfolio"),
                      children: [
                        "Portfolio",
                        " ",
                        b.jsx(qo, {
                          children: b.jsx("span", {
                            className:
                              "material-icons material-symbols-rounded bg-white/0 text-[16px] m-0.5 icon text-white/50",
                            children: "view_cozy",
                          }),
                        }),
                      ],
                    }),
                    b.jsx(nm, {}),
                    b.jsx("a", {
                      href: "https://github.com/Arskakoo",
                      target: "_blank",
                      children: b.jsxs(Jo, {
                        children: [
                          "GitHub",
                          b.jsx(qo, {
                            children: b.jsx("span", {
                              className:
                                "material-icons material-symbols-rounded bg-white/0 text-[16px] m-0.5 icon text-white/50",
                              children: "data_object",
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  gw = () => {
    const [e, t] = d.useState(null);
    return (
      d.useEffect(() => {
        (async () => {
          const o = await (await fetch("portfolio.json")).json();
          t(o);
        })();
      }, []),
      b.jsx("div", {
        className: "mx-auto max-w-screen-xl",
        children: b.jsxs("div", {
          className: " mt-20 sm:px-12 lg:px-1 ",
          children: [
            b.jsx("div", {
              className:
                "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
              children: e
                ? e.map((n, r) =>
                    b.jsxs(
                      "div",
                      {
                        className:
                          "border rounded-md p-2 flex flex-col justify-between shadow-white shadow border-white/80 text-white/80",
                        children: [
                          b.jsx("div", {
                            children: b.jsx("img", {
                              src: n.img,
                              alt: n.Name,
                              className: "rounded",
                            }),
                          }),
                          b.jsxs("div", {
                            className: "font-semibold p-1",
                            children: [
                              b.jsx("p", {
                                className:
                                  "text-2xl my-2 border-b border-white/30 p-1",
                                children: n.Name,
                              }),
                              b.jsx("p", {
                                className: "text-sm m-1",
                                children: n.description,
                              }),
                              b.jsxs("p", {
                                children: [
                                  "Työkalut:",
                                  b.jsx(
                                    "p",
                                    {
                                      className: "text-sm m-1",
                                      children: n.tools,
                                    },
                                    n.tools
                                  ),
                                ],
                              }),
                            ],
                          }),
                          b.jsxs("div", {
                            className: "text-center mt-1",
                            children: [
                              b.jsx("a", {
                                href: n.link,
                                target: "_blank",
                                className:
                                  "bg-white/90 text-black px-6 py-1 rounded hover:opacity-60",
                                children: "GitHub",
                              }),
                              n.demo !== "#" &&
                                b.jsx("a", {
                                  href: n.demo,
                                  className:
                                    "ml-2 bg-white/90 text-black px-6 py-1 rounded hover:opacity-60",
                                  target: "_blank",
                                  children: "Demo",
                                }),
                            ],
                          }),
                        ],
                      },
                      r
                    )
                  )
                : b.jsx("div", { children: "Loading..." }),
            }),
            b.jsx("div", {
              className: "text-center m-4 text-white/80 ",
              children: b.jsx("p", {
                children:
                  "Lisää projekteista löytyy GitHubista README-tiedostosta.",
              }),
            }),
          ],
        }),
      })
    );
  };
function yw() {
  const [e, t] = d.useState("main");
  return b.jsxs(b.Fragment, {
    children: [
      b.jsx("header", {
        className: "",
        children: b.jsx(vw, { currentPage: e, setCurrentPage: t }),
      }),
      b.jsxs("main", {
        className: "",
        children: [
          e === "main" && b.jsx(zv, {}),
          e === "portfolio" && b.jsx(gw, {}),
          e === "error" && b.jsx(ErrorPage, {}),
        ],
      }),
      b.jsx("footer", {}),
    ],
  });
}
Ml.createRoot(document.getElementById("root")).render(
  b.jsx(Ue.StrictMode, { children: b.jsx(yw, {}) })
);
