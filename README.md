# Editor Syntax Highlight Obsidian Plugin
A plugin for [Obsidian](https://obsidian.md) which allows syntax highlighting for code blocks in the editor.

![Screenshot](https://github.com/deathau/cm-editor-syntax-highlight-obsidian/raw/main/screenshot.png)

Imports code from [CodeMirror](https://github.com/codemirror/CodeMirror/)

### Compatibility

Custom plugins are only available for Obsidian v0.9.7+.

The current API of this repo targets Obsidian **v0.9.7**. 

### Notes
This is all very expermental at the moment, so parts might not work, etc.

This imports a bunch of [syntax highlighting modes from CodeMirror](https://github.com/codemirror/CodeMirror/tree/5.58.2/mode), as well as the [yonce](https://github.com/codemirror/CodeMirror/blob/5.58.2/theme/yonce.css) theme for dark mode.

## Installation

### From within Obsidian
From Obsidian v0.9.8, you can activate this plugin within Obsidian by doing the following:
- Open Settings > Third-party plugin
- Make sure Safe mode is **off**
- Click Browse community plugins
- Search for "Syntax Highlight"
- Click Install
- Once installed, close the community plugins window and activate the newly installed plugin
#### Updates
You can follow the same procedure to update the plugin

### From GitHub
- Download the [Latest release](https://github.com/deathau/cm-editor-syntax-highlight-obsidian/releases/latest)
- Extract the `cm-editor-syntax-highlight-obsidian` folder from the zip to your vault's plugins folder: `<vault>/.obsidian/plugins/`  
Note: On some machines the `.obsidian` folder may be hidden. On MacOS you should be able to press `Command+Shift+Dot` to show the folder in Finder.
- Reload Obsidian
- If prompted about Safe Mode, you can disable safe mode and enable the plugin.
Otherwise head to Settings, third-party plugins, make sure safe mode is off and
enable the plugin from there.

## Development

This project uses Typescript to provide type checking and documentation.  
The repo depends on the latest [plugin API](https://github.com/obsidianmd/obsidian-api) in Typescript Definition format, which contains TSDoc comments describing what it does.

**Note:** The Obsidian API is still in early alpha and is subject to change at any time!

If you want to contribute to development and/or just customize it with your own
tweaks, you can do the following:
- Clone this repo.
- `npm i` or `yarn` to install dependencies
- `npm run build` to compile.
- Copy `manifest.json`, `main.js` and `styles.css` to a subfolder of your plugins
folder (e.g, `<vault>/.obsidian/plugins/cm-editor-syntax-highlight-obsidian/`)
- Reload obsidian to see changes

Alternately, you can clone the repo directly into your plugins folder and once
dependencies are installed use `npm run dev` to start compilation in watch mode.  
You may have to reload obsidian (`ctrl+R`) to see changes.

## Pricing
Huh? This is an open-source plugin I made *for fun*. It's completely free.
However, if you absolutely *have* to send me money because you like it that
much, feel free to throw some coins in my hat via
[PayPal](https://paypal.me/deathau) or sponsor me via
[GitHub Sponsors](https://github.com/sponsors/deathau)

# Version History
## 0.1.2
- Added elixir mode (thanks to James Dalton)

## 0.1.1
- Apply codemirror theme to latex math also

## 0.1.0
- Adjusted the dark codemirror theme to also apply to frontmatter
- Reload the editor modes on load, so syntax highlighting is shown on enable
- Delete editor modes on unload, so syntax highlighting is hidden on disable

## v0.0.1
Initial Release.  
Copy-pasted and imported editor modes from [CodeMirror 5.58.2](https://github.com/codemirror/CodeMirror/tree/5.58.2/mode). Got compiler errors importing `markdown` and `gfm`, so those aren't available for now.
