var e,
    r =
        (e = require("cssthis-parse")) && "object" == typeof e && "default" in e
            ? e.default
            : e,
    t = require("cssthis"),
    s = r([], !0);
t.style.parse = function(e) {
    return Function("props", "return`" + s(e) + "`");
};
//# sourceMappingURL=cssthis-parse-browser.js.map
