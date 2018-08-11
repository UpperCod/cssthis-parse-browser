import parse from "cssthis-parse";
import { style } from "cssthis";

let load = parse([], true);

style.parse = css => Function("props", `return\`${load(css)}\``);
