webpackJsonp([4],{

/***/ "ECHO":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("sx1W");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("rjj0").default
var update = add("7ee175ca", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":true}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!../../node_modules/stylus-loader/index.js?{\"sourceMap\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./gamePageForm1.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":true}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!../../node_modules/stylus-loader/index.js?{\"sourceMap\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./gamePageForm1.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "gF58":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/gamePageForm1.vue


/* harmony default export */ var gamePageForm1 = ({
  data: function data() {
    return {
      option: 'opt1',
      marker: 6,
      marker1: 45,
      marker2: 37,
      src: '',
      customDialogModel: false,
      name: '',
      nameError: false
    };
  },

  methods: {
    copySrc: function copySrc(img) {
      this.src = img.srcElement.src;
    },

    onOk: function onOk() {
      console.log('ok');
    },
    onCancel: function onCancel() {
      console.log('cancel');
    },
    onShow: function onShow() {
      console.log('show');
    },
    onHide: function onHide() {
      console.log('hide');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2912a99e","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/gamePageForm1.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("q-page", { staticClass: "row justify ", attrs: { padding: "" } }, [
    _c("div", { staticClass: "doc-container" }, [
      _c("div", { staticClass: "text-center" }, [
        _c(
          "div",
          {
            staticClass: "divOilfield",
            staticStyle: { width: "90vw", "max-width": "70vw" }
          },
          [
            _c(
              "div",
              { staticClass: "q-mb-md q-display-2 q-display-2-opacity" },
              [_vm._v("Формирование задания на строительство")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "row items-center",
                staticStyle: { width: "80vw", "max-width": "90vw" }
              },
              [
                _c("div", { staticClass: "col-2 rows" }, [
                  _c("img", {
                    staticStyle: { width: "100px" },
                    attrs: { id: "img1", src: __webpack_require__("vviL") }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-2" }, [
                  _c("h4", [_vm._v("Блок электроснабжения")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-3" }, [
                  _c(
                    "p",
                    [
                      _vm._v("Количество бригад    "),
                      _c(
                        "q-chip",
                        { attrs: { square: "", color: "secondary" } },
                        [_vm._v("3")]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-5" },
                  [
                    _c("p", { staticClass: "caption" }, [
                      _vm._v(
                        "\n        Планируемое количество на будующий период\n        "
                      ),
                      _c(
                        "span",
                        { staticClass: "chip-container" },
                        [
                          _c(
                            "q-chip",
                            { attrs: { square: "", color: "primary" } },
                            [
                              _vm._v(
                                "\n             " +
                                  _vm._s(_vm.marker) +
                                  "\n          "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("q-slider", {
                      attrs: {
                        min: 0,
                        max: 10,
                        step: 2,
                        label: "",
                        snap: "",
                        markers: ""
                      },
                      model: {
                        value: _vm.marker,
                        callback: function($$v) {
                          _vm.marker = $$v
                        },
                        expression: "marker"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "q-pt-lg q-pb-lg row items-center",
                    staticStyle: { width: "90vw", "max-width": "90vw" }
                  },
                  [
                    _c("div", { staticClass: "col-2" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-3" }, [
                      _c(
                        "p",
                        [
                          _vm._v("Стройматериалы    "),
                          _c(
                            "q-chip",
                            { attrs: { square: "", color: "secondary" } },
                            [_vm._v("  67% ")]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-5" },
                      [
                        _c("p", [
                          _vm._v(
                            "\n        Планируемый объем на будующий период\n        "
                          ),
                          _c(
                            "span",
                            { staticClass: "chip-container" },
                            [
                              _c(
                                "q-chip",
                                { attrs: { square: "", color: "primary" } },
                                [
                                  _vm._v(
                                    "\n             " +
                                      _vm._s(_vm.marker1) +
                                      "%\n          "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("q-slider", {
                          attrs: {
                            min: 0,
                            max: 100,
                            step: 2,
                            label: "",
                            snap: "",
                            markers: ""
                          },
                          model: {
                            value: _vm.marker1,
                            callback: function($$v) {
                              _vm.marker1 = $$v
                            },
                            expression: "marker1"
                          }
                        })
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "q-pt-lg q-pb-lg row items-center",
                    staticStyle: { width: "80vw", "max-width": "90vw" }
                  },
                  [
                    _c("div", { staticClass: "col-2" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-3" }, [
                      _c(
                        "p",
                        [
                          _vm._v("Объем финансирования    "),
                          _c(
                            "q-chip",
                            { attrs: { square: "", color: "secondary" } },
                            [_vm._v("  82% ")]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-5" },
                      [
                        _c("p", [
                          _vm._v(
                            "\n        Планируемый объем на будующий период\n        "
                          ),
                          _c(
                            "span",
                            { staticClass: "chip-container" },
                            [
                              _c(
                                "q-chip",
                                { attrs: { square: "", color: "primary" } },
                                [
                                  _vm._v(
                                    "\n             " +
                                      _vm._s(_vm.marker2) +
                                      "%\n          "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("q-slider", {
                          attrs: {
                            min: 0,
                            max: 100,
                            step: 2,
                            label: "",
                            snap: "",
                            markers: ""
                          },
                          model: {
                            value: _vm.marker2,
                            callback: function($$v) {
                              _vm.marker2 = $$v
                            },
                            expression: "marker2"
                          }
                        })
                      ],
                      1
                    )
                  ]
                )
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "text-center q-pt-lg" },
          [
            _vm._v("\n     " + _vm._s(_vm.src) + "\n\n       "),
            _c("q-btn", {
              attrs: { color: "primary", label: "Отправить задание" },
              on: {
                click: function($event) {
                  _vm.customDialogModel = true
                }
              }
            }),
            _vm._v(" "),
            _c(
              "q-dialog",
              {
                attrs: { "stack-buttons": "", "prevent-close": "" },
                on: {
                  cancel: _vm.onCancel,
                  ok: _vm.onOk,
                  show: _vm.onShow,
                  hide: _vm.onHide
                },
                scopedSlots: _vm._u([
                  {
                    key: "buttons",
                    fn: function(props) {
                      return [
                        _c("q-btn", {
                          attrs: { color: "primary", label: "Choose Superman" },
                          on: {
                            click: function($event) {
                              _vm.choose(props.ok, "Superman")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("q-btn", {
                          attrs: { color: "black", label: "Choose Batman" },
                          on: {
                            click: function($event) {
                              _vm.choose(props.ok, "Batman")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("q-btn", {
                          attrs: {
                            color: "negative",
                            label: "Choose Spiderman"
                          },
                          on: {
                            click: function($event) {
                              _vm.choose(props.ok, "Spiderman")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("q-btn", {
                          attrs: { flat: "", label: "No thanks" },
                          on: { click: props.cancel }
                        })
                      ]
                    }
                  }
                ]),
                model: {
                  value: _vm.customDialogModel,
                  callback: function($$v) {
                    _vm.customDialogModel = $$v
                  },
                  expression: "customDialogModel"
                }
              },
              [
                _c("span", { attrs: { slot: "title" }, slot: "title" }, [
                  _vm._v("Favorite Superhero")
                ]),
                _vm._v(" "),
                _c("span", { attrs: { slot: "message" }, slot: "message" }, [
                  _vm._v("What is your superhero of choice?")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { attrs: { slot: "body" }, slot: "body" },
                  [
                    _c(
                      "q-field",
                      {
                        attrs: {
                          icon: "account_circle",
                          helper:
                            "We need your name so we can send you to the movies.",
                          label: "Your name",
                          "label-width": 3,
                          error: _vm.nameError
                        }
                      },
                      [
                        _c("q-input", {
                          model: {
                            value: _vm.name,
                            callback: function($$v) {
                              _vm.name = $$v
                            },
                            expression: "name"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2912a99e", { render: render, staticRenderFns: staticRenderFns })
  }
}
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__("XyMi");

// CONCATENATED MODULE: ./src/pages/gamePageForm1.vue
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("ECHO")
}
/* script */


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
  gamePageForm1,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\gamePageForm1.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2912a99e", Component.options)
  } else {
    hotAPI.reload("data-v-2912a99e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var pages_gamePageForm1 = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "sx1W":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, "\n.CaseText {\n  line-height: 2.2;\n}\n.CaseDialog1 {\n  padding-bottom: 20px;\n  padding-left: 0px;\n  font-style: normal;\n}\n.CaseDialog2 {\n  padding-bottom: 20px;\n  padding-left: 100px;\n  font-style: italic;\n  font-weight: bold;\n}\n.CaseAnswerItem {\n  font-style: italic;\n  font-weight: 400;\n}\n/*# sourceMappingURL=src/pages/gamePageForm1.css.map */", "", {"version":3,"sources":["D:/Projects/GTiBE/MainPortalApp/QuasarApp/src/pages/src/css/themes/common.variables.styl","D:/Projects/GTiBE/MainPortalApp/QuasarApp/src/pages/gamePageForm1.vue","D:/Projects/GTiBE/MainPortalApp/QuasarApp/src/pages/src/pages/gamePageForm1.vue"],"names":[],"mappings":";AAyBA;EACE,iBAAA;CCxBD;ACkJD;EACE,qBAAA;EACA,kBAAA;EACA,mBAAA;CDhJD;ACiJD;EACE,qBAAA;EACA,oBAAA;EACA,mBAAA;EACA,kBAAA;CD/ID;ACiJD;EACE,mBAAA;EACA,iBAAA;CD/ID;AACD,uDAAuD","file":"gamePageForm1.vue","sourcesContent":["// App Shared Variables\n// --------------------------------------------------\n// To customize the look and feel of this app, you can override\n// the Stylus variables found in Quasar's source Stylus files. Setting\n// variables before Quasar's Stylus will use these variables rather than\n// Quasar's default Stylus variable values. Stylus variables specific\n// to the themes belong in either the variables.ios.styl or variables.mat.styl files.\n\n// Check documentation for full list of Quasar variables\n\n\n// App Shared Color Variables\n// --------------------------------------------------\n// It's highly recommended to change the default colors\n// to match your app's branding.\n\n$primary   = #027be3\n$secondary = #661a7d\n$tertiary  = #555\n\n$neutral   = #E0E1E2\n$positive  = #21BA45\n$negative  = #DB2828\n$info      = #31CCEC\n$warning   = #F2C037\n.CaseText \n  line-height 2.2",".CaseText {\n  line-height: 2.2;\n}\n.CaseDialog1 {\n  padding-bottom: 20px;\n  padding-left: 0px;\n  font-style: normal;\n}\n.CaseDialog2 {\n  padding-bottom: 20px;\n  padding-left: 100px;\n  font-style: italic;\n  font-weight: bold;\n}\n.CaseAnswerItem {\n  font-style: italic;\n  font-weight: 400;\n}\n/*# sourceMappingURL=src/pages/gamePageForm1.css.map */","\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '~variables'\n.CaseDialog1\n  padding-bottom 20px\n  padding-left 0px\n  font-style normal \n.CaseDialog2\n  padding-bottom 20px\n  padding-left 100px\n  font-style italic\n  font-weight bold\n\n.CaseAnswerItem  \n  font-style italic\n  font-weight 400  \n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "vviL":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ImpPic1.76440f7.png";

/***/ })

});
//# sourceMappingURL=4.11289d9746d0dcdde021.js.map