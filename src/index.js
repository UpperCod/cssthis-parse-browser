import parse from "cssthis-parse";
import * as cssthisPreact from "cssthis";
import * as cssthisReact from "cssthis-react";

let load = parse([], true);

cssthisReact.style.parse = cssthisPreact.style.parse = css =>
    Function("props", `return\`${load(css)}\``);
