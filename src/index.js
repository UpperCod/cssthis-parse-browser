import parse from "cssthis-parse";
import { style as preact } from "cssthis";
import { style as react } from "cssthis-react";

let load = parse([], true);

react.parse = preact.parse = css => Function("props", `return\`${load(css)}\``);
