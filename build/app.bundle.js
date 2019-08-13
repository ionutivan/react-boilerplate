!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 2));
})([
  function(e, t) {
    e.exports = React;
  },
  function(e, t) {
    e.exports = function(e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function() {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
              return e.l;
            }
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
              return e.i;
            }
          }),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  function(e, t, n) {
    "use strict";
    (function(e) {
      var r;
      (r =
        "undefined" != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal.enterModule
          : void 0) && r(e);
      "undefined" != typeof reactHotLoaderGlobal &&
        reactHotLoaderGlobal.default.signature;
      var o =
        (this && this.__importDefault) ||
        function(e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i,
        u = o(n(0)),
        c = o(n(3)),
        l = o(n(4));
      n(7),
        c.default.render(
          u.default.createElement(l.default, null),
          document.getElementById("app")
        ),
        (a =
          "undefined" != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default
            : void 0) &&
          (a.register(
            o,
            "__importDefault",
            "/Users/ionut/Documents/fullstack_projects/react-boilerplate/src/index.tsx"
          ),
          a.register(
            u,
            "react_1",
            "/Users/ionut/Documents/fullstack_projects/react-boilerplate/src/index.tsx"
          ),
          a.register(
            c,
            "react_dom_1",
            "/Users/ionut/Documents/fullstack_projects/react-boilerplate/src/index.tsx"
          ),
          a.register(
            l,
            "App_1",
            "/Users/ionut/Documents/fullstack_projects/react-boilerplate/src/index.tsx"
          )),
        (i =
          "undefined" != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.leaveModule
            : void 0) && i(e);
    }.call(this, n(1)(e)));
  },
  function(e, t) {
    e.exports = ReactDOM;
  },
  function(e, t, n) {
    "use strict";
    (function(e) {
      var r;
      (r =
        "undefined" != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal.enterModule
          : void 0) && r(e);
      "undefined" != typeof reactHotLoaderGlobal &&
        reactHotLoaderGlobal.default.signature;
      var o,
        a =
          (this && this.__extends) ||
          ((o = function(e, t) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(e, t) {
                  e.__proto__ = t;
                }) ||
              function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(e, t);
          }),
          function(e, t) {
            function n() {
              this.constructor = e;
            }
            o(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          }),
        i =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var u,
        c,
        l = i(n(0)),
        s = n(5),
        f = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = { count: 0 }),
              (t.increment = function() {
                t.setState(function(e) {
                  return { count: e.count + 1 };
                });
              }),
              (t.decrement = function() {
                t.setState(function(e) {
                  return { count: e.count - 1 };
                });
              }),
              t
            );
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              var e = this.state.count;
              return l.default.createElement(
                "div",
                null,
                l.default.createElement("h1", null, "Hello world!"),
                l.default.createElement(
                  "h2",
                  { className: e > 10 ? "warning" : "" },
                  "Count: ",
                  e
                ),
                l.default.createElement(
                  "button",
                  { onClick: this.increment },
                  "+"
                ),
                l.default.createElement(
                  "button",
                  { onClick: this.decrement },
                  "-"
                )
              );
            }),
            t
          );
        })(l.default.Component);
      (t.default = s.hot(e)(f)),
        (u =
          "undefined" != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default
            : void 0) &&
          (u.register(
            a,
            "__extends",
            "/Users/ionut/Documents/fullstack_projects/react-boilerplate/src/App.tsx"
          ),
          u.register(
            i,
            "__importDefault",
            "/Users/ionut/Documents/fullstack_projects/react-boilerplate/src/App.tsx"
          ),
          u.register(
            l,
            "react_1",
            "/Users/ionut/Documents/fullstack_projects/react-boilerplate/src/App.tsx"
          ),
          u.register(
            f,
            "App",
            "/Users/ionut/Documents/fullstack_projects/react-boilerplate/src/App.tsx"
          )),
        (c =
          "undefined" != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.leaveModule
            : void 0) && c(e);
    }.call(this, n(1)(e)));
  },
  function(e, t, n) {
    "use strict";
    e.exports = n(6);
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = (r = n(0)) && "object" == typeof r && "default" in r ? r.default : r;
    function a(e) {
      return (
        a.warnAboutHMRDisabled &&
          ((a.warnAboutHMRDisabled = !0),
          console.error(
            "React-Hot-Loader: misconfiguration detected, using production version in non-production environment."
          ),
          console.error(
            "React-Hot-Loader: Hot Module Replacement is not enabled."
          )),
        o.Children.only(e.children)
      );
    }
    a.warnAboutHMRDisabled = !1;
    var i = function e() {
      return e.shouldWrapWithAppContainer
        ? function(e) {
            return function(t) {
              return o.createElement(a, null, o.createElement(e, t));
            };
          }
        : function(e) {
            return e;
          };
    };
    i.shouldWrapWithAppContainer = !1;
    (t.AppContainer = a),
      (t.hot = i),
      (t.areComponentsEqual = function(e, t) {
        return e === t;
      }),
      (t.setConfig = function() {}),
      (t.cold = function(e) {
        return e;
      }),
      (t.configureComponent = function() {});
  },
  function(e, t, n) {
    var r = n(8);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var o = { insert: "head", singleton: !1 };
    n(10)(r, o);
    r.locals && (e.exports = r.locals);
  },
  function(e, t, n) {
    (e.exports = n(9)(!1)).push([
      e.i,
      "html {\n    box-sizing: border-box;\n    font-size: 16px;\n    font-family: sans-serif;\n  }\n  \n  *,\n  *:before,\n  *:after {\n    box-sizing: inherit;\n  }\n  \n  body,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p,\n  ol,\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n  \n  ol,\n  ul {\n    list-style: none;\n  }\n  \n  img {\n    max-width: 100%;\n    height: auto;\n  }\n\n  .warning {\n    color: burlywood;\n  }",
      ""
    ]);
  },
  function(e, t, n) {
    "use strict";
    e.exports = function(e) {
      var t = [];
      return (
        (t.toString = function() {
          return this.map(function(t) {
            var n = (function(e, t) {
              var n = e[1] || "",
                r = e[3];
              if (!r) return n;
              if (t && "function" == typeof btoa) {
                var o =
                    ((i = r),
                    (u = btoa(unescape(encodeURIComponent(JSON.stringify(i))))),
                    (c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                      u
                    )),
                    "/*# ".concat(c, " */")),
                  a = r.sources.map(function(e) {
                    return "/*# sourceURL="
                      .concat(r.sourceRoot)
                      .concat(e, " */");
                  });
                return [n]
                  .concat(a)
                  .concat([o])
                  .join("\n");
              }
              var i, u, c;
              return [n].join("\n");
            })(t, e);
            return t[2] ? "@media ".concat(t[2], "{").concat(n, "}") : n;
          }).join("");
        }),
        (t.i = function(e, n) {
          "string" == typeof e && (e = [[null, e, ""]]);
          for (var r = {}, o = 0; o < this.length; o++) {
            var a = this[o][0];
            null != a && (r[a] = !0);
          }
          for (var i = 0; i < e.length; i++) {
            var u = e[i];
            (null != u[0] && r[u[0]]) ||
              (n && !u[2]
                ? (u[2] = n)
                : n && (u[2] = "(".concat(u[2], ") and (").concat(n, ")")),
              t.push(u));
          }
        }),
        t
      );
    };
  },
  function(e, t, n) {
    "use strict";
    var r,
      o = {},
      a = function() {
        return (
          void 0 === r &&
            (r = Boolean(window && document && document.all && !window.atob)),
          r
        );
      },
      i = (function() {
        var e = {};
        return function(t) {
          if (void 0 === e[t]) {
            var n = document.querySelector(t);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
            e[t] = n;
          }
          return e[t];
        };
      })();
    function u(e, t) {
      for (var n = [], r = {}, o = 0; o < e.length; o++) {
        var a = e[o],
          i = t.base ? a[0] + t.base : a[0],
          u = { css: a[1], media: a[2], sourceMap: a[3] };
        r[i] ? r[i].parts.push(u) : n.push((r[i] = { id: i, parts: [u] }));
      }
      return n;
    }
    function c(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          a = o[r.id],
          i = 0;
        if (a) {
          for (a.refs++; i < a.parts.length; i++) a.parts[i](r.parts[i]);
          for (; i < r.parts.length; i++) a.parts.push(h(r.parts[i], t));
        } else {
          for (var u = []; i < r.parts.length; i++) u.push(h(r.parts[i], t));
          o[r.id] = { id: r.id, refs: 1, parts: u };
        }
      }
    }
    function l(e) {
      var t = document.createElement("style");
      if (void 0 === e.attributes.nonce) {
        var r = n.nc;
        r && (e.attributes.nonce = r);
      }
      if (
        (Object.keys(e.attributes).forEach(function(n) {
          t.setAttribute(n, e.attributes[n]);
        }),
        "function" == typeof e.insert)
      )
        e.insert(t);
      else {
        var o = i(e.insert || "head");
        if (!o)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        o.appendChild(t);
      }
      return t;
    }
    var s,
      f =
        ((s = []),
        function(e, t) {
          return (s[e] = t), s.filter(Boolean).join("\n");
        });
    function d(e, t, n, r) {
      var o = n ? "" : r.css;
      if (e.styleSheet) e.styleSheet.cssText = f(t, o);
      else {
        var a = document.createTextNode(o),
          i = e.childNodes;
        i[t] && e.removeChild(i[t]),
          i.length ? e.insertBefore(a, i[t]) : e.appendChild(a);
      }
    }
    var p = null,
      b = 0;
    function h(e, t) {
      var n, r, o;
      if (t.singleton) {
        var a = b++;
        (n = p || (p = l(t))),
          (r = d.bind(null, n, a, !1)),
          (o = d.bind(null, n, a, !0));
      } else
        (n = l(t)),
          (r = function(e, t, n) {
            var r = n.css,
              o = n.media,
              a = n.sourceMap;
            if (
              (o && e.setAttribute("media", o),
              a &&
                btoa &&
                (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                  btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                  " */"
                )),
              e.styleSheet)
            )
              e.styleSheet.cssText = r;
            else {
              for (; e.firstChild; ) e.removeChild(e.firstChild);
              e.appendChild(document.createTextNode(r));
            }
          }.bind(null, n, t)),
          (o = function() {
            !(function(e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(n);
          });
      return (
        r(e),
        function(t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            r((e = t));
          } else o();
        }
      );
    }
    e.exports = function(e, t) {
      ((t = t || {}).attributes =
        "object" == typeof t.attributes ? t.attributes : {}),
        t.singleton || "boolean" == typeof t.singleton || (t.singleton = a());
      var n = u(e, t);
      return (
        c(n, t),
        function(e) {
          for (var r = [], a = 0; a < n.length; a++) {
            var i = n[a],
              l = o[i.id];
            l && (l.refs--, r.push(l));
          }
          e && c(u(e, t), t);
          for (var s = 0; s < r.length; s++) {
            var f = r[s];
            if (0 === f.refs) {
              for (var d = 0; d < f.parts.length; d++) f.parts[d]();
              delete o[f.id];
            }
          }
        }
      );
    };
  }
]);
