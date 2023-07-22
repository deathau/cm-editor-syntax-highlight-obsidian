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
      { token: "number",   regex: /0(x|X)[\da-fA-F]+|[\da-fA-F]+(h|H)|\d+/ },
      { token: "builtin",  regex: /\s*\.?\w+(:\s?)?/, sol: true },
      { token: "variable", regex: /(d(b|w|d|q|t)(?!\w+)|res(b|w)|byte|(d|q|t|o|y|z)?word)/ },
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