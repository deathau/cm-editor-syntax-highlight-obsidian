import './styles.scss'
import { MarkdownView, Plugin } from 'obsidian'

import './lib/codemirror'
import './mode/meta'
import './mode/apl/apl'
import './mode/asciiarmor/asciiarmor'
import './mode/asn.1/asn.1'
import './mode/asterisk/asterisk'
import './mode/brainfuck/brainfuck'
import './mode/clike/clike'
import './mode/clojure/clojure'
import './mode/cmake/cmake'
import './mode/cobol/cobol'
import './mode/coffeescript/coffeescript'
import './mode/commonlisp/commonlisp'
import './mode/crystal/crystal'
import './mode/css/css'
import './mode/cypher/cypher'
import './mode/d/d'
import './mode/dart/dart'
import './mode/diff/diff'
import './mode/django/django'
import './mode/dockerfile/dockerfile'
import './mode/dtd/dtd'
import './mode/dylan/dylan'
import './mode/ebnf/ebnf'
import './mode/ecl/ecl'
import './mode/eiffel/eiffel'
import './mode/elixir/elixir'
import './mode/elm/elm'
import './mode/erlang/erlang'
import './mode/factor/factor'
import './mode/fcl/fcl'
import './mode/forth/forth'
import './mode/fortran/fortran'
import './mode/gas/gas'
// import './mode/gfm/gfm' // Error: '__moduleExports' is not exported by mode\meta.js, imported by .obsidian/plugins/cm-editor-snytax-highlight-obsidian/mode/meta.js?commonjs-proxy
import './mode/gherkin/gherkin'
import './mode/go/go'
import './mode/groovy/groovy'
import './mode/haml/haml'
import './mode/handlebars/handlebars'
import './mode/haskell/haskell'
import './mode/haskell-literate/haskell-literate'
import './mode/haxe/haxe'
import './mode/htmlembedded/htmlembedded'
import './mode/htmlmixed/htmlmixed'
import './mode/http/http'
import './mode/idl/idl'
import './mode/javascript/javascript'
import './mode/jinja2/jinja2'
import './mode/jsx/jsx'
import './mode/julia/julia'
import './mode/livescript/livescript'
import './mode/lua/lua'
// import './mode/markdown/markdown' // Error: '__moduleExports' is not exported by mode\meta.js, imported by .obsidian/plugins/cm-editor-snytax-highlight-obsidian/mode/meta.js?commonjs-proxy
import './mode/mathematica/mathematica'
import './mode/mbox/mbox'
import './mode/mirc/mirc'
import './mode/mllike/mllike'
import './mode/modelica/modelica'
import './mode/mscgen/mscgen'
import './mode/mumps/mumps'
import './mode/nasm/nasm'
import './mode/nginx/nginx'
import './mode/nsis/nsis'
import './mode/ntriples/ntriples'
import './mode/octave/octave'
import './mode/oz/oz'
import './mode/pascal/pascal'
import './mode/pegjs/pegjs'
import './mode/perl/perl'
import './mode/php/php'
import './mode/pig/pig'
import './mode/powershell/powershell'
import './mode/properties/properties'
import './mode/protobuf/protobuf'
import './mode/pug/pug'
import './mode/puppet/puppet'
import './mode/python/python'
import './mode/q/q'
import './mode/r/r'
import './mode/rpm/rpm'
import './mode/rst/rst'
import './mode/ruby/ruby'
import './mode/rust/rust'
import './mode/sas/sas'
import './mode/sass/sass'
import './mode/scheme/scheme'
import './mode/shell/shell'
import './mode/sieve/sieve'
import './mode/slim/slim'
import './mode/smalltalk/smalltalk'
import './mode/smarty/smarty'
import './mode/solr/solr'
import './mode/soy/soy'
import './mode/sparql/sparql'
import './mode/spreadsheet/spreadsheet'
import './mode/sql/sql'
import './mode/stex/stex'
import './mode/stylus/stylus'
import './mode/swift/swift'
import './mode/tcl/tcl'
import './mode/textile/textile'
import './mode/tiddlywiki/tiddlywiki'
import './mode/tiki/tiki'
import './mode/toml/toml'
import './mode/tornado/tornado'
import './mode/troff/troff'
import './mode/ttcn/ttcn'
import './mode/ttcn-cfg/ttcn-cfg'
import './mode/turtle/turtle'
import './mode/twig/twig'
import './mode/vb/vb'
import './mode/vbscript/vbscript'
import './mode/velocity/velocity'
import './mode/verilog/verilog'
import './mode/vhdl/vhdl'
import './mode/vue/vue'
import './mode/wast/wast'
import './mode/webidl/webidl'
import './mode/xml/xml'
import './mode/xquery/xquery'
import './mode/yacas/yacas'
import './mode/yaml/yaml'
import './mode/yaml-frontmatter/yaml-frontmatter'
import './mode/z80/z80'

export default class CMSyntaxHighlightPlugin extends Plugin {

  // these are the CodeMirror modes that Obsidian uses by default
  modesToKeep = ["hypermd", "markdown", "null", "xml"];

  async onload() {
    // wait for layout to be ready to perform the rest
    this.app.workspace.layoutReady ? this.layoutReady() : this.app.workspace.on('layout-ready', this.layoutReady);
  }

  layoutReady = () => {
    // don't need the event handler anymore, get rid of it
    this.app.workspace.off('layout-ready', this.layoutReady);
    this.refreshLeaves();
  }

  onunload() {
    // Delete all the codemirror modes, to disable the syntax highlighting
    // except the default ones, obviously
    for (const key in CodeMirror.modes) {
      if (CodeMirror.modes.hasOwnProperty(key) && !this.modesToKeep.includes(key)) {
        delete CodeMirror.modes[key];
      }
    }

    this.refreshLeaves();
  }

  refreshLeaves = () => {
    // re-set the editor mode to refresh the syntax highlighting
    this.app.workspace.iterateCodeMirrors(cm => cm.setOption("mode", cm.getOption("mode")))
  }
}