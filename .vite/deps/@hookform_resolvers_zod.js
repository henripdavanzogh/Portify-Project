import {
  appendErrors,
  get,
  set
} from "./chunk-7GKLUPA3.js";
import "./chunk-ST3U5LCA.js";
import "./chunk-DFKQJ226.js";

// node_modules/@hookform/resolvers/dist/resolvers.mjs
var e = function(i, e2, t3) {
  if (i && "reportValidity" in i) {
    var f2 = get(t3, e2);
    i.setCustomValidity(f2 && f2.message || ""), i.reportValidity();
  }
};
var t = function(r, i) {
  var t3 = function(t4) {
    var f3 = i.fields[t4];
    f3 && f3.ref && "reportValidity" in f3.ref ? e(f3.ref, t4, r) : f3.refs && f3.refs.forEach(function(i2) {
      return e(i2, t4, r);
    });
  };
  for (var f2 in i.fields)
    t3(f2);
};
var f = function(e2, f2) {
  f2.shouldUseNativeValidation && t(e2, f2);
  var o = {};
  for (var a in e2) {
    var n2 = get(f2.fields, a);
    set(o, a, Object.assign(e2[a] || {}, { ref: n2 && n2.ref }));
  }
  return o;
};

// node_modules/@hookform/resolvers/zod/dist/zod.mjs
var n = function(e2, o) {
  for (var n2 = {}; e2.length; ) {
    var t3 = e2[0], s = t3.code, i = t3.message, a = t3.path.join(".");
    if (!n2[a])
      if ("unionErrors" in t3) {
        var u = t3.unionErrors[0].errors[0];
        n2[a] = { message: u.message, type: u.code };
      } else
        n2[a] = { message: i, type: s };
    if ("unionErrors" in t3 && t3.unionErrors.forEach(function(r) {
      return r.errors.forEach(function(r2) {
        return e2.push(r2);
      });
    }), o) {
      var c = n2[a].types, f2 = c && c[t3.code];
      n2[a] = appendErrors(a, o, n2, s, f2 ? [].concat(f2, t3.message) : t3.message);
    }
    e2.shift();
  }
  return n2;
};
var t2 = function(r, t3, s) {
  return void 0 === s && (s = {}), function(i, a, u) {
    try {
      return Promise.resolve(function(o, n2) {
        try {
          var a2 = Promise.resolve(r["sync" === s.mode ? "parse" : "parseAsync"](i, t3)).then(function(r2) {
            return u.shouldUseNativeValidation && t({}, u), { errors: {}, values: s.raw ? i : r2 };
          });
        } catch (r2) {
          return n2(r2);
        }
        return a2 && a2.then ? a2.then(void 0, n2) : a2;
      }(0, function(r2) {
        if (function(r3) {
          return null != r3.errors;
        }(r2))
          return { values: {}, errors: f(n(r2.errors, !u.shouldUseNativeValidation && "all" === u.criteriaMode), u) };
        throw r2;
      }));
    } catch (r2) {
      return Promise.reject(r2);
    }
  };
};
export {
  t2 as zodResolver
};
//# sourceMappingURL=@hookform_resolvers_zod.js.map
