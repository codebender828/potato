/* eslint-disable no-useless-escape */
<template>
  <!-- codemirror -->
  <codemirror
    v-model="code"
    :options="cmOption"
    @cursorActivity="onCmCursorActivity"
    @ready="onCmReady"
    @focus="onCmFocus"
    @blur="onCmBlur"
  >
  </codemirror>
</template>

<script>
// language
import "codemirror/mode/vue/vue.js";
// theme css
import "codemirror/theme/monokai.css";
// active-line.js
import "codemirror/addon/selection/active-line.js";
// styleSelectedText
import "codemirror/addon/selection/mark-selection.js";
import "codemirror/addon/search/searchcursor.js";
// highlightSelectionMatches
import "codemirror/addon/scroll/annotatescrollbar.js";
import "codemirror/addon/search/matchesonscrollbar.js";
import "codemirror/addon/search/searchcursor.js";
import "codemirror/addon/search/match-highlighter.js";
// keyMap
import "codemirror/mode/clike/clike.js";
import "codemirror/addon/edit/matchbrackets.js";
import "codemirror/addon/comment/comment.js";
import "codemirror/addon/dialog/dialog.js";
import "codemirror/addon/dialog/dialog.css";
import "codemirror/addon/search/searchcursor.js";
import "codemirror/addon/search/search.js";
import "codemirror/keymap/sublime.js";
// foldGutter
import "codemirror/addon/fold/foldgutter.css";
import "codemirror/addon/fold/brace-fold.js";
import "codemirror/addon/fold/comment-fold.js";
import "codemirror/addon/fold/foldcode.js";
import "codemirror/addon/fold/foldgutter.js";
import "codemirror/addon/fold/indent-fold.js";
import "codemirror/addon/fold/markdown-fold.js";
import "codemirror/addon/fold/xml-fold.js";

export default {
  name: "Editor",
  data() {
    const code = `
<template>
  <h1>Hello World!</h1>
  <codemirror v-model="code" :options="cmOption"></codemirror>
</template>
<script>
  // import 'some-codemirror-resource'
  export default {
    data() {
      return {
        code: 'const A = 10',
        cmOption: {
          tabSize: 4,
          styleActiveLine: true,
          lineNumbers: true,
          line: true,
          foldGutter: true,
          styleSelectedText: true,
          mode: 'text/javascript',
          keyMap: "sublime",
          matchBrackets: true,
          showCursorWhenSelecting: true,
          theme: "monokai",
          extraKeys: { "Ctrl": "autocomplete" },
          hintOptions:{
            completeSingle: false
          }
        }
      }
    }
  }
<\/script>
<style lang="scss">
  @import './sass/mixins';
  @import './sass/variables';
  main {
    position: relative;
  }
</style>
    `;
    return {
      code,
      cmOption: {
        tabSize: 4,
        foldGutter: true,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        keyMap: "sublime",
        mode: "text/x-vue",
        theme: "monokai",
        extraKeys: {
          F11(cm) {
            cm.setOption("fullScreen", !cm.getOption("fullScreen"));
          },
          Esc(cm) {
            if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
          }
        }
      }
    };
  },
  methods: {
    onCmCursorActivity(codemirror) {
      console.log("onCmCursorActivity", codemirror);
    },
    onCmReady(codemirror) {
      console.log("onCmReady", codemirror);
    },
    onCmFocus(codemirror) {
      console.log("onCmFocus", codemirror);
    },
    onCmBlur(codemirror) {
      console.log("onCmBlur", codemirror);
    }
  }
};
</script>
