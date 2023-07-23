// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"), require("../../addon/mode/simple"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror", "../../addon/mode/simple"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  CodeMirror.defineSimpleMode("nasm", {
    start: [
      { token: "comment",  regex: /;.*$/ },
      { token: "string",   regex: /"|'/, next: "string" },
      { token: "keyword",  regex: /(?!\W)((a|b|c|d)(h|l)|(e|r)?(a|b|c|d)x|(e|r)?(s|b)pl?|(e|r)?(d|s)il?|(c|d|e|f|g|s)s)(?!\w)/ }, // registers
      { token: "number",   regex: /0(x|X)[\da-fA-F]+|[\da-fA-F]+h|\d+/ },
      { token: "tag",      regex: /(d(b|w|d|q|t)(?!\w+)|res(b|w)|byte|(d|q|t|o|y|z)?word)/ }, // type
      { token: "builtin",  regex: /\s*\w+(?=:\s*((d(b|w|d|q|t)(?!\w+)|res(b|w)|byte|(d|q|t|o|y|z)?word)))/, sol: true }, // variable name
      { token: "variable", regex: /section|SECTION/, sol: true },
      { token: "builtin",  regex: /\s*\w+\s(?!.+:)/, sol: true }, // instruction
      { token: "variable", regex: /(\w+(?!:)?)/, sol: true },     // user defined label
      { token: "builtin",  regex: /\s*%?\w+\s?/, sol: true },     // %thing
      { token: "variable", regex: /(\.?\w+(?!:)?)/, sol: true },  // unindented unknown
    ],
    string: [
      { regex: /"|'/, token: "string", next: "start" },
      { regex: /(?:[^\\"|']|\\(?:.|$))*/, token: "string" }
    ],
    meta: {
      dontIndentStates: ["comment"],
      lineComment: ";",
    }
  });

  CodeMirror.defineMIME("text/x-nasm", "nasm");
});