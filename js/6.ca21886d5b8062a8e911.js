webpackJsonp([6],{

/***/ "2NXm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6be49aa4","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/index.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("q-page", { staticClass: "row justify", attrs: { padding: "" } }, [
    _c("div", { staticClass: "doc-container" }, [
      _c(
        "div",
        {
          staticClass: "row",
          staticStyle: { width: "90vw", "max-width": "90vw" }
        },
        [
          _c("div", { staticClass: "col-3" }, [
            _c("img", { attrs: { src: "statics/LogoBig5G.png" } })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-3" }, [
            _c(
              "div",
              { staticClass: "q-mb-md q-display-3 q-display-3-opacity" },
              [_vm._v("\n    GTiBE портал")]
            )
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6be49aa4", { render: render, staticRenderFns: staticRenderFns })
  }
}
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__("XyMi");

// CONCATENATED MODULE: ./src/pages/index.vue
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("hbHN")
}
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  __vue_script__,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6be49aa4", Component.options)
  } else {
    hotAPI.reload("data-v-6be49aa4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var pages = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "hbHN":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("zzig");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("rjj0").default
var update = add("885958b2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":true}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!../../node_modules/stylus-loader/index.js?{\"sourceMap\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":true}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!../../node_modules/stylus-loader/index.js?{\"sourceMap\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "zzig":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, "\n.CaseText {\n  line-height: 2.2;\n}\n.CaseText {\n  line-height: 2;\n}\n/*# sourceMappingURL=src/pages/index.css.map */", "", {"version":3,"sources":["D:/Projects/GTiBE/MainPortalApp/QuasarApp/src/pages/src/css/themes/common.variables.styl","D:/Projects/GTiBE/MainPortalApp/QuasarApp/src/pages/index.vue","D:/Projects/GTiBE/MainPortalApp/QuasarApp/src/pages/src/pages/index.vue"],"names":[],"mappings":";AAyBA;EACE,iBAAA;CCxBD;ACgBD;EACE,eAAA;CDdD;AACD,+CAA+C","file":"index.vue","sourcesContent":["// App Shared Variables\n// --------------------------------------------------\n// To customize the look and feel of this app, you can override\n// the Stylus variables found in Quasar's source Stylus files. Setting\n// variables before Quasar's Stylus will use these variables rather than\n// Quasar's default Stylus variable values. Stylus variables specific\n// to the themes belong in either the variables.ios.styl or variables.mat.styl files.\n\n// Check documentation for full list of Quasar variables\n\n\n// App Shared Color Variables\n// --------------------------------------------------\n// It's highly recommended to change the default colors\n// to match your app's branding.\n\n$primary   = #027be3\n$secondary = #661a7d\n$tertiary  = #555\n\n$neutral   = #E0E1E2\n$positive  = #21BA45\n$negative  = #DB2828\n$info      = #31CCEC\n$warning   = #F2C037\n.CaseText \n  line-height 2.2",".CaseText {\n  line-height: 2.2;\n}\n.CaseText {\n  line-height: 2;\n}\n/*# sourceMappingURL=src/pages/index.css.map */","\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '~variables'\n.CaseText \n  line-height 2.0\n"],"sourceRoot":""}]);

// exports


/***/ })

});
//# sourceMappingURL=6.ca21886d5b8062a8e911.js.map