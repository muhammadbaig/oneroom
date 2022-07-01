(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["src_app_Host_Hostportal_module_ts"],{

/***/ 68266:
/*!********************************************************************!*\
  !*** ./node_modules/ng2-nouislider/__ivy_ngcc__/ng2-nouislider.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultFormatter": function() { return /* binding */ DefaultFormatter; },
/* harmony export */   "NouisliderComponent": function() { return /* binding */ NouisliderComponent; },
/* harmony export */   "NouisliderModule": function() { return /* binding */ NouisliderModule; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ 28557);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nouislider */ 23391);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 36410);








var DefaultFormatter = /*#__PURE__*/function () {
  function DefaultFormatter() {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DefaultFormatter);
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(DefaultFormatter, [{
    key: "to",
    value:
    /**
     * @param {?} value
     * @return {?}
     */
    function to(value) {
      // formatting with http://stackoverflow.com/a/26463364/478584
      return String(parseFloat(parseFloat(String(value)).toFixed(2)));
    }
  }, {
    key: "from",
    value:
    /**
     * @param {?} value
     * @return {?}
     */
    function from(value) {
      return parseFloat(value);
    }
  }]);

  return DefaultFormatter;
}();

var NouisliderComponent = /*#__PURE__*/function () {
  /**
   * @param {?} el
   * @param {?} renderer
   */
  function NouisliderComponent(el, renderer) {
    var _this = this;

    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NouisliderComponent);

    this.el = el;
    this.renderer = renderer;
    this.config = {};
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter(true);
    this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter(true);
    this.slide = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter(true);
    this.set = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter(true);
    this.start = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter(true);
    this.end = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter(true);
    this.onChange = Function.prototype;
    this.onTouched = Function.prototype;

    this.eventHandler = function (emitter, values, handle, unencoded) {
      var
      /** @type {?} */
      v = _this.toValues(values);

      var
      /** @type {?} */
      emitEvents = false;

      if (_this.value === undefined) {
        _this.value = v;
        return;
      }

      if (Array.isArray(v) && _this.value[handle] != v[handle]) {
        emitEvents = true;
      }

      if (!Array.isArray(v) && _this.value != v) {
        emitEvents = true;
      }

      if (emitEvents) {
        emitter.emit(v);

        _this.onChange(v);
      }

      if (Array.isArray(v)) {
        _this.value[handle] = v[handle];
      } else {
        _this.value = v;
      }
    };

    this.defaultKeyHandler = function (e) {
      var
      /** @type {?} */
      stepSize = _this.slider.steps();

      var
      /** @type {?} */
      index = parseInt(e.target.getAttribute('data-handle'));
      var
      /** @type {?} */
      sign = 1;
      var
      /** @type {?} */
      multiplier = 1;
      var
      /** @type {?} */
      step = 0;
      var
      /** @type {?} */
      delta = 0;

      switch (e.which) {
        case 34:
          // PageDown
          multiplier = _this.config.pageSteps;

        case 40: // ArrowDown

        case 37:
          // ArrowLeft
          sign = -1;
          step = stepSize[index][0];
          e.preventDefault();
          break;

        case 33:
          // PageUp
          multiplier = _this.config.pageSteps;

        case 38: // ArrowUp

        case 39:
          // ArrowRight
          step = stepSize[index][1];
          e.preventDefault();
          break;

        default:
          break;
      }

      delta = sign * multiplier * step;
      var
      /** @type {?} */
      newValue;

      if (Array.isArray(_this.value)) {
        newValue = [].concat(_this.value);
        newValue[index] = newValue[index] + delta;
      } else {
        newValue = _this.value + delta;
      }

      _this.slider.set(newValue);
    };
  }
  /**
   * @return {?}
   */


  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(NouisliderComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this2 = this;

      var
      /** @type {?} */
      inputsConfig = JSON.parse(JSON.stringify({
        behaviour: this.behaviour,
        connect: this.connect,
        limit: this.limit,
        start: this.formControl !== undefined ? this.formControl.value : this.ngModel,
        step: this.step,
        pageSteps: this.pageSteps,
        keyboard: this.keyboard,
        onKeydown: this.onKeydown,
        range: this.range || this.config.range || {
          min: this.min,
          max: this.max
        },
        tooltips: this.tooltips,
        snap: this.snap,
        animate: this.animate
      }));
      inputsConfig.tooltips = this.tooltips || this.config.tooltips;
      inputsConfig.format = this.format || this.config.format || new DefaultFormatter();
      this.slider = (0,nouislider__WEBPACK_IMPORTED_MODULE_3__.create)(this.el.nativeElement.querySelector('div'), Object.assign(this.config, inputsConfig));
      this.handles = [].slice.call(this.el.nativeElement.querySelectorAll('.noUi-handle'));

      if (this.config.keyboard) {
        if (this.config.pageSteps === undefined) {
          this.config.pageSteps = 10;
        }

        var _iterator = (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.handles),
            _step;

        try {
          var _loop = function _loop() {
            var handle = _step.value;
            handle.setAttribute('tabindex', 0);
            handle.addEventListener('click', function () {
              handle.focus();
            });

            if (_this2.config.onKeydown === undefined) {
              handle.addEventListener('keydown', _this2.defaultKeyHandler);
            } else {
              handle.addEventListener('keydown', _this2.config.onKeydown);
            }
          };

          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      this.slider.on('set', function (values, handle, unencoded) {
        _this2.eventHandler(_this2.set, values, handle, unencoded);
      });
      this.slider.on('update', function (values, handle, unencoded) {
        _this2.update.emit(_this2.toValues(values));
      });
      this.slider.on('change', function (values, handle, unencoded) {
        _this2.change.emit(_this2.toValues(values));
      });
      this.slider.on('slide', function (values, handle, unencoded) {
        _this2.eventHandler(_this2.slide, values, handle, unencoded);
      });
      this.slider.on('start', function (values, handle, unencoded) {
        _this2.start.emit(_this2.toValues(values));
      });
      this.slider.on('end', function (values, handle, unencoded) {
        _this2.end.emit(_this2.toValues(values));
      });
    }
    /**
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var _this3 = this;

      if (this.slider && (changes.min || changes.max || changes.step || changes.range)) {
        setTimeout(function () {
          _this3.slider.updateOptions({
            range: Object.assign({}, {
              min: _this3.min,
              max: _this3.max
            }, _this3.range || {}),
            step: _this3.step
          });
        });
      }
    }
    /**
     * @param {?} values
     * @return {?}
     */

  }, {
    key: "toValues",
    value: function toValues(values) {
      var
      /** @type {?} */
      v = values.map(this.config.format.from);
      return v.length == 1 ? v[0] : v;
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "writeValue",
    value: function writeValue(value) {
      var _this4 = this;

      if (this.slider) {
        setTimeout(function () {
          _this4.slider.set(value);
        });
      }
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      isDisabled ? this.renderer.setAttribute(this.el.nativeElement.childNodes[0], 'disabled', 'true') : this.renderer.removeAttribute(this.el.nativeElement.childNodes[0], 'disabled');
    }
  }]);

  return NouisliderComponent;
}();

NouisliderComponent.ɵfac = function NouisliderComponent_Factory(t) {
  return new (t || NouisliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2));
};

NouisliderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: NouisliderComponent,
  selectors: [["nouislider"]],
  hostVars: 2,
  hostBindings: function NouisliderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ng2-nouislider", true);
    }
  },
  inputs: {
    config: "config",
    disabled: "disabled",
    behaviour: "behaviour",
    connect: "connect",
    limit: "limit",
    min: "min",
    max: "max",
    snap: "snap",
    animate: "animate",
    range: "range",
    step: "step",
    format: "format",
    pageSteps: "pageSteps",
    ngModel: "ngModel",
    keyboard: "keyboard",
    onKeydown: "onKeydown",
    formControl: "formControl",
    tooltips: "tooltips"
  },
  outputs: {
    change: "change",
    update: "update",
    slide: "slide",
    set: "set",
    start: "start",
    end: "end"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(function () {
      return NouisliderComponent;
    }),
    multi: true
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
  decls: 1,
  vars: 1,
  template: function NouisliderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("disabled", ctx.disabled ? true : undefined);
    }
  },
  styles: ["[_nghost-%COMP%] {\n      display: block;\n      margin-top: 1rem;\n      margin-bottom: 1rem;\n    }"]
});
/**
 * @nocollapse
 */

NouisliderComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2
  }];
};

NouisliderComponent.propDecorators = {
  'disabled': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  'behaviour': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  'connect': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  'limit': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  'min': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  'max': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  'snap': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  'animate': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  'range': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  'step': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  'format': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  'pageSteps': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  'config': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  'ngModel': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  'keyboard': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  'onKeydown': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  'formControl': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  'tooltips': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  'change': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
  }],
  'update': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
  }],
  'slide': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
  }],
  'set': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
  }],
  'start': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
  }],
  'end': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NouisliderComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component,
    args: [{
      selector: 'nouislider',
      host: {
        '[class.ng2-nouislider]': 'true'
      },
      template: '<div [attr.disabled]="disabled ? true : undefined"></div>',
      styles: ["\n    :host {\n      display: block;\n      margin-top: 1rem;\n      margin-bottom: 1rem;\n    }\n  "],
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(function () {
          return NouisliderComponent;
        }),
        multi: true
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2
    }];
  }, {
    config: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    update: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    slide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    set: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    start: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    end: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    behaviour: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    connect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    limit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    min: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    max: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    snap: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    animate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    range: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    step: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    pageSteps: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    ngModel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    keyboard: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    onKeydown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    formControl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    tooltips: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }]
  });
})();

var NouisliderModule = /*#__PURE__*/(0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function NouisliderModule() {
  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NouisliderModule);
});

NouisliderModule.ɵfac = function NouisliderModule_Factory(t) {
  return new (t || NouisliderModule)();
};

NouisliderModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: NouisliderModule
});
NouisliderModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({});
/**
 * @nocollapse
 */

NouisliderModule.ctorParameters = function () {
  return [];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NouisliderModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
    args: [{
      exports: [NouisliderComponent],
      declarations: [NouisliderComponent]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](NouisliderModule, {
    declarations: [NouisliderComponent],
    exports: [NouisliderComponent]
  });
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 23391:
/*!**********************************************************!*\
  !*** ./node_modules/nouislider/distribute/nouislider.js ***!
  \**********************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! nouislider - 14.6.2 - 9/16/2020 */
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function () {
  "use strict";

  var VERSION = "14.6.2"; //region Helper Methods

  function isValidFormatter(entry) {
    return typeof entry === "object" && typeof entry.to === "function" && typeof entry.from === "function";
  }

  function removeElement(el) {
    el.parentElement.removeChild(el);
  }

  function isSet(value) {
    return value !== null && value !== undefined;
  } // Bindable version


  function preventDefault(e) {
    e.preventDefault();
  } // Removes duplicates from an array.


  function unique(array) {
    return array.filter(function (a) {
      return !this[a] ? this[a] = true : false;
    }, {});
  } // Round a value to the closest 'to'.


  function closest(value, to) {
    return Math.round(value / to) * to;
  } // Current position of an element relative to the document.


  function offset(elem, orientation) {
    var rect = elem.getBoundingClientRect();
    var doc = elem.ownerDocument;
    var docElem = doc.documentElement;
    var pageOffset = getPageOffset(doc); // getBoundingClientRect contains left scroll in Chrome on Android.
    // I haven't found a feature detection that proves this. Worst case
    // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.

    if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
      pageOffset.x = 0;
    }

    return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
  } // Checks whether a value is numerical.


  function isNumeric(a) {
    return typeof a === "number" && !isNaN(a) && isFinite(a);
  } // Sets a class and removes it after [duration] ms.


  function addClassFor(element, className, duration) {
    if (duration > 0) {
      addClass(element, className);
      setTimeout(function () {
        removeClass(element, className);
      }, duration);
    }
  } // Limits a value to 0 - 100


  function limit(a) {
    return Math.max(Math.min(a, 100), 0);
  } // Wraps a variable as an array, if it isn't one yet.
  // Note that an input array is returned by reference!


  function asArray(a) {
    return Array.isArray(a) ? a : [a];
  } // Counts decimals


  function countDecimals(numStr) {
    numStr = String(numStr);
    var pieces = numStr.split(".");
    return pieces.length > 1 ? pieces[1].length : 0;
  } // http://youmightnotneedjquery.com/#add_class


  function addClass(el, className) {
    if (el.classList && !/\s/.test(className)) {
      el.classList.add(className);
    } else {
      el.className += " " + className;
    }
  } // http://youmightnotneedjquery.com/#remove_class


  function removeClass(el, className) {
    if (el.classList && !/\s/.test(className)) {
      el.classList.remove(className);
    } else {
      el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
  } // https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/


  function hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
  } // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes


  function getPageOffset(doc) {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
    var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? doc.documentElement.scrollLeft : doc.body.scrollLeft;
    var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? doc.documentElement.scrollTop : doc.body.scrollTop;
    return {
      x: x,
      y: y
    };
  } // we provide a function to compute constants instead
  // of accessing window.* as soon as the module needs it
  // so that we do not compute anything if not needed


  function getActions() {
    // Determine the events to bind. IE11 implements pointerEvents without
    // a prefix, which breaks compatibility with the IE10 implementation.
    return window.navigator.pointerEnabled ? {
      start: "pointerdown",
      move: "pointermove",
      end: "pointerup"
    } : window.navigator.msPointerEnabled ? {
      start: "MSPointerDown",
      move: "MSPointerMove",
      end: "MSPointerUp"
    } : {
      start: "mousedown touchstart",
      move: "mousemove touchmove",
      end: "mouseup touchend"
    };
  } // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
  // Issue #785


  function getSupportsPassive() {
    var supportsPassive = false;
    /* eslint-disable */

    try {
      var opts = Object.defineProperty({}, "passive", {
        get: function get() {
          supportsPassive = true;
        }
      });
      window.addEventListener("test", null, opts);
    } catch (e) {}
    /* eslint-enable */


    return supportsPassive;
  }

  function getSupportsTouchActionNone() {
    return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
  } //endregion
  //region Range Calculation
  // Determine the size of a sub-range in relation to a full range.


  function subRangeRatio(pa, pb) {
    return 100 / (pb - pa);
  } // (percentage) How many percent is this value of this range?


  function fromPercentage(range, value, startRange) {
    return value * 100 / (range[startRange + 1] - range[startRange]);
  } // (percentage) Where is this value on this range?


  function toPercentage(range, value) {
    return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
  } // (value) How much is this percentage on this range?


  function isPercentage(range, value) {
    return value * (range[1] - range[0]) / 100 + range[0];
  }

  function getJ(value, arr) {
    var j = 1;

    while (value >= arr[j]) {
      j += 1;
    }

    return j;
  } // (percentage) Input a value, find where, on a scale of 0-100, it applies.


  function toStepping(xVal, xPct, value) {
    if (value >= xVal.slice(-1)[0]) {
      return 100;
    }

    var j = getJ(value, xVal);
    var va = xVal[j - 1];
    var vb = xVal[j];
    var pa = xPct[j - 1];
    var pb = xPct[j];
    return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
  } // (value) Input a percentage, find where it is on the specified range.


  function fromStepping(xVal, xPct, value) {
    // There is no range group that fits 100
    if (value >= 100) {
      return xVal.slice(-1)[0];
    }

    var j = getJ(value, xPct);
    var va = xVal[j - 1];
    var vb = xVal[j];
    var pa = xPct[j - 1];
    var pb = xPct[j];
    return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
  } // (percentage) Get the step that applies at a certain value.


  function getStep(xPct, xSteps, snap, value) {
    if (value === 100) {
      return value;
    }

    var j = getJ(value, xPct);
    var a = xPct[j - 1];
    var b = xPct[j]; // If 'snap' is set, steps are used as fixed points on the slider.

    if (snap) {
      // Find the closest position, a or b.
      if (value - a > (b - a) / 2) {
        return b;
      }

      return a;
    }

    if (!xSteps[j - 1]) {
      return value;
    }

    return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
  }

  function handleEntryPoint(index, value, that) {
    var percentage; // Wrap numerical input in an array.

    if (typeof value === "number") {
      value = [value];
    } // Reject any invalid input, by testing whether value is an array.


    if (!Array.isArray(value)) {
      throw new Error("noUiSlider (" + VERSION + "): 'range' contains invalid value.");
    } // Covert min/max syntax to 0 and 100.


    if (index === "min") {
      percentage = 0;
    } else if (index === "max") {
      percentage = 100;
    } else {
      percentage = parseFloat(index);
    } // Check for correct input.


    if (!isNumeric(percentage) || !isNumeric(value[0])) {
      throw new Error("noUiSlider (" + VERSION + "): 'range' value isn't numeric.");
    } // Store values.


    that.xPct.push(percentage);
    that.xVal.push(value[0]); // NaN will evaluate to false too, but to keep
    // logging clear, set step explicitly. Make sure
    // not to override the 'step' setting with false.

    if (!percentage) {
      if (!isNaN(value[1])) {
        that.xSteps[0] = value[1];
      }
    } else {
      that.xSteps.push(isNaN(value[1]) ? false : value[1]);
    }

    that.xHighestCompleteStep.push(0);
  }

  function handleStepPoint(i, n, that) {
    // Ignore 'false' stepping.
    if (!n) {
      return;
    } // Step over zero-length ranges (#948);


    if (that.xVal[i] === that.xVal[i + 1]) {
      that.xSteps[i] = that.xHighestCompleteStep[i] = that.xVal[i];
      return;
    } // Factor to range ratio


    that.xSteps[i] = fromPercentage([that.xVal[i], that.xVal[i + 1]], n, 0) / subRangeRatio(that.xPct[i], that.xPct[i + 1]);
    var totalSteps = (that.xVal[i + 1] - that.xVal[i]) / that.xNumSteps[i];
    var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
    var step = that.xVal[i] + that.xNumSteps[i] * highestStep;
    that.xHighestCompleteStep[i] = step;
  } //endregion
  //region Spectrum


  function Spectrum(entry, snap, singleStep) {
    this.xPct = [];
    this.xVal = [];
    this.xSteps = [singleStep || false];
    this.xNumSteps = [false];
    this.xHighestCompleteStep = [];
    this.snap = snap;
    var index;
    var ordered = []; // [0, 'min'], [1, '50%'], [2, 'max']
    // Map the object keys to an array.

    for (index in entry) {
      if (entry.hasOwnProperty(index)) {
        ordered.push([entry[index], index]);
      }
    } // Sort all entries by value (numeric sort).


    if (ordered.length && typeof ordered[0][0] === "object") {
      ordered.sort(function (a, b) {
        return a[0][0] - b[0][0];
      });
    } else {
      ordered.sort(function (a, b) {
        return a[0] - b[0];
      });
    } // Convert all entries to subranges.


    for (index = 0; index < ordered.length; index++) {
      handleEntryPoint(ordered[index][1], ordered[index][0], this);
    } // Store the actual step values.
    // xSteps is sorted in the same order as xPct and xVal.


    this.xNumSteps = this.xSteps.slice(0); // Convert all numeric steps to the percentage of the subrange they represent.

    for (index = 0; index < this.xNumSteps.length; index++) {
      handleStepPoint(index, this.xNumSteps[index], this);
    }
  }

  Spectrum.prototype.getDistance = function (value) {
    var index;
    var distances = [];

    for (index = 0; index < this.xNumSteps.length - 1; index++) {
      // last "range" can't contain step size as it is purely an endpoint.
      var step = this.xNumSteps[index];

      if (step && value / step % 1 !== 0) {
        throw new Error("noUiSlider (" + VERSION + "): 'limit', 'margin' and 'padding' of " + this.xPct[index] + "% range must be divisible by step.");
      } // Calculate percentual distance in current range of limit, margin or padding


      distances[index] = fromPercentage(this.xVal, value, index);
    }

    return distances;
  }; // Calculate the percentual distance over the whole scale of ranges.
  // direction: 0 = backwards / 1 = forwards


  Spectrum.prototype.getAbsoluteDistance = function (value, distances, direction) {
    var xPct_index = 0; // Calculate range where to start calculation

    if (value < this.xPct[this.xPct.length - 1]) {
      while (value > this.xPct[xPct_index + 1]) {
        xPct_index++;
      }
    } else if (value === this.xPct[this.xPct.length - 1]) {
      xPct_index = this.xPct.length - 2;
    } // If looking backwards and the value is exactly at a range separator then look one range further


    if (!direction && value === this.xPct[xPct_index + 1]) {
      xPct_index++;
    }

    var start_factor;
    var rest_factor = 1;
    var rest_rel_distance = distances[xPct_index];
    var range_pct = 0;
    var rel_range_distance = 0;
    var abs_distance_counter = 0;
    var range_counter = 0; // Calculate what part of the start range the value is

    if (direction) {
      start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
    } else {
      start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
    } // Do until the complete distance across ranges is calculated


    while (rest_rel_distance > 0) {
      // Calculate the percentage of total range
      range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter]; // Detect if the margin, padding or limit is larger then the current range and calculate

      if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
        // If larger then take the percentual distance of the whole range
        rel_range_distance = range_pct * start_factor; // Rest factor of relative percentual distance still to be calculated

        rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter]; // Set start factor to 1 as for next range it does not apply.

        start_factor = 1;
      } else {
        // If smaller or equal then take the percentual distance of the calculate percentual part of that range
        rel_range_distance = distances[xPct_index + range_counter] * range_pct / 100 * rest_factor; // No rest left as the rest fits in current range

        rest_factor = 0;
      }

      if (direction) {
        abs_distance_counter = abs_distance_counter - rel_range_distance; // Limit range to first range when distance becomes outside of minimum range

        if (this.xPct.length + range_counter >= 1) {
          range_counter--;
        }
      } else {
        abs_distance_counter = abs_distance_counter + rel_range_distance; // Limit range to last range when distance becomes outside of maximum range

        if (this.xPct.length - range_counter >= 1) {
          range_counter++;
        }
      } // Rest of relative percentual distance still to be calculated


      rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
    }

    return value + abs_distance_counter;
  };

  Spectrum.prototype.toStepping = function (value) {
    value = toStepping(this.xVal, this.xPct, value);
    return value;
  };

  Spectrum.prototype.fromStepping = function (value) {
    return fromStepping(this.xVal, this.xPct, value);
  };

  Spectrum.prototype.getStep = function (value) {
    value = getStep(this.xPct, this.xSteps, this.snap, value);
    return value;
  };

  Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
    var j = getJ(value, this.xPct); // When at the top or stepping down, look at the previous sub-range

    if (value === 100 || isDown && value === this.xPct[j - 1]) {
      j = Math.max(j - 1, 1);
    }

    return (this.xVal[j] - this.xVal[j - 1]) / size;
  };

  Spectrum.prototype.getNearbySteps = function (value) {
    var j = getJ(value, this.xPct);
    return {
      stepBefore: {
        startValue: this.xVal[j - 2],
        step: this.xNumSteps[j - 2],
        highestStep: this.xHighestCompleteStep[j - 2]
      },
      thisStep: {
        startValue: this.xVal[j - 1],
        step: this.xNumSteps[j - 1],
        highestStep: this.xHighestCompleteStep[j - 1]
      },
      stepAfter: {
        startValue: this.xVal[j],
        step: this.xNumSteps[j],
        highestStep: this.xHighestCompleteStep[j]
      }
    };
  };

  Spectrum.prototype.countStepDecimals = function () {
    var stepDecimals = this.xNumSteps.map(countDecimals);
    return Math.max.apply(null, stepDecimals);
  }; // Outside testing


  Spectrum.prototype.convert = function (value) {
    return this.getStep(this.toStepping(value));
  }; //endregion
  //region Options

  /*	Every input option is tested and parsed. This'll prevent
      endless validation in internal methods. These tests are
      structured with an item for every option available. An
      option can be marked as required by setting the 'r' flag.
      The testing function is provided with three arguments:
          - The provided value for the option;
          - A reference to the options object;
          - The name for the option;
       The testing function returns false when an error is detected,
      or true when everything is OK. It can also modify the option
      object, to make sure all values can be correctly looped elsewhere. */
  //region Defaults


  var defaultFormatter = {
    to: function to(value) {
      return value !== undefined && value.toFixed(2);
    },
    from: Number
  };
  var cssClasses = {
    target: "target",
    base: "base",
    origin: "origin",
    handle: "handle",
    handleLower: "handle-lower",
    handleUpper: "handle-upper",
    touchArea: "touch-area",
    horizontal: "horizontal",
    vertical: "vertical",
    background: "background",
    connect: "connect",
    connects: "connects",
    ltr: "ltr",
    rtl: "rtl",
    textDirectionLtr: "txt-dir-ltr",
    textDirectionRtl: "txt-dir-rtl",
    draggable: "draggable",
    drag: "state-drag",
    tap: "state-tap",
    active: "active",
    tooltip: "tooltip",
    pips: "pips",
    pipsHorizontal: "pips-horizontal",
    pipsVertical: "pips-vertical",
    marker: "marker",
    markerHorizontal: "marker-horizontal",
    markerVertical: "marker-vertical",
    markerNormal: "marker-normal",
    markerLarge: "marker-large",
    markerSub: "marker-sub",
    value: "value",
    valueHorizontal: "value-horizontal",
    valueVertical: "value-vertical",
    valueNormal: "value-normal",
    valueLarge: "value-large",
    valueSub: "value-sub"
  }; //endregion

  function validateFormat(entry) {
    // Any object with a to and from method is supported.
    if (isValidFormatter(entry)) {
      return true;
    }

    throw new Error("noUiSlider (" + VERSION + "): 'format' requires 'to' and 'from' methods.");
  }

  function testStep(parsed, entry) {
    if (!isNumeric(entry)) {
      throw new Error("noUiSlider (" + VERSION + "): 'step' is not numeric.");
    } // The step option can still be used to set stepping
    // for linear sliders. Overwritten if set in 'range'.


    parsed.singleStep = entry;
  }

  function testKeyboardPageMultiplier(parsed, entry) {
    if (!isNumeric(entry)) {
      throw new Error("noUiSlider (" + VERSION + "): 'keyboardPageMultiplier' is not numeric.");
    }

    parsed.keyboardPageMultiplier = entry;
  }

  function testKeyboardDefaultStep(parsed, entry) {
    if (!isNumeric(entry)) {
      throw new Error("noUiSlider (" + VERSION + "): 'keyboardDefaultStep' is not numeric.");
    }

    parsed.keyboardDefaultStep = entry;
  }

  function testRange(parsed, entry) {
    // Filter incorrect input.
    if (typeof entry !== "object" || Array.isArray(entry)) {
      throw new Error("noUiSlider (" + VERSION + "): 'range' is not an object.");
    } // Catch missing start or end.


    if (entry.min === undefined || entry.max === undefined) {
      throw new Error("noUiSlider (" + VERSION + "): Missing 'min' or 'max' in 'range'.");
    } // Catch equal start or end.


    if (entry.min === entry.max) {
      throw new Error("noUiSlider (" + VERSION + "): 'range' 'min' and 'max' cannot be equal.");
    }

    parsed.spectrum = new Spectrum(entry, parsed.snap, parsed.singleStep);
  }

  function testStart(parsed, entry) {
    entry = asArray(entry); // Validate input. Values aren't tested, as the public .val method
    // will always provide a valid location.

    if (!Array.isArray(entry) || !entry.length) {
      throw new Error("noUiSlider (" + VERSION + "): 'start' option is incorrect.");
    } // Store the number of handles.


    parsed.handles = entry.length; // When the slider is initialized, the .val method will
    // be called with the start options.

    parsed.start = entry;
  }

  function testSnap(parsed, entry) {
    // Enforce 100% stepping within subranges.
    parsed.snap = entry;

    if (typeof entry !== "boolean") {
      throw new Error("noUiSlider (" + VERSION + "): 'snap' option must be a boolean.");
    }
  }

  function testAnimate(parsed, entry) {
    // Enforce 100% stepping within subranges.
    parsed.animate = entry;

    if (typeof entry !== "boolean") {
      throw new Error("noUiSlider (" + VERSION + "): 'animate' option must be a boolean.");
    }
  }

  function testAnimationDuration(parsed, entry) {
    parsed.animationDuration = entry;

    if (typeof entry !== "number") {
      throw new Error("noUiSlider (" + VERSION + "): 'animationDuration' option must be a number.");
    }
  }

  function testConnect(parsed, entry) {
    var connect = [false];
    var i; // Map legacy options

    if (entry === "lower") {
      entry = [true, false];
    } else if (entry === "upper") {
      entry = [false, true];
    } // Handle boolean options


    if (entry === true || entry === false) {
      for (i = 1; i < parsed.handles; i++) {
        connect.push(entry);
      }

      connect.push(false);
    } // Reject invalid input
    else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
      throw new Error("noUiSlider (" + VERSION + "): 'connect' option doesn't match handle count.");
    } else {
      connect = entry;
    }

    parsed.connect = connect;
  }

  function testOrientation(parsed, entry) {
    // Set orientation to an a numerical value for easy
    // array selection.
    switch (entry) {
      case "horizontal":
        parsed.ort = 0;
        break;

      case "vertical":
        parsed.ort = 1;
        break;

      default:
        throw new Error("noUiSlider (" + VERSION + "): 'orientation' option is invalid.");
    }
  }

  function testMargin(parsed, entry) {
    if (!isNumeric(entry)) {
      throw new Error("noUiSlider (" + VERSION + "): 'margin' option must be numeric.");
    } // Issue #582


    if (entry === 0) {
      return;
    }

    parsed.margin = parsed.spectrum.getDistance(entry);
  }

  function testLimit(parsed, entry) {
    if (!isNumeric(entry)) {
      throw new Error("noUiSlider (" + VERSION + "): 'limit' option must be numeric.");
    }

    parsed.limit = parsed.spectrum.getDistance(entry);

    if (!parsed.limit || parsed.handles < 2) {
      throw new Error("noUiSlider (" + VERSION + "): 'limit' option is only supported on linear sliders with 2 or more handles.");
    }
  }

  function testPadding(parsed, entry) {
    var index;

    if (!isNumeric(entry) && !Array.isArray(entry)) {
      throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers.");
    }

    if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
      throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers.");
    }

    if (entry === 0) {
      return;
    }

    if (!Array.isArray(entry)) {
      entry = [entry, entry];
    } // 'getDistance' returns false for invalid values.


    parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];

    for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
      // last "range" can't contain step size as it is purely an endpoint.
      if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
        throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be a positive number(s).");
      }
    }

    var totalPadding = entry[0] + entry[1];
    var firstValue = parsed.spectrum.xVal[0];
    var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];

    if (totalPadding / (lastValue - firstValue) > 1) {
      throw new Error("noUiSlider (" + VERSION + "): 'padding' option must not exceed 100% of the range.");
    }
  }

  function testDirection(parsed, entry) {
    // Set direction as a numerical value for easy parsing.
    // Invert connection for RTL sliders, so that the proper
    // handles get the connect/background classes.
    switch (entry) {
      case "ltr":
        parsed.dir = 0;
        break;

      case "rtl":
        parsed.dir = 1;
        break;

      default:
        throw new Error("noUiSlider (" + VERSION + "): 'direction' option was not recognized.");
    }
  }

  function testBehaviour(parsed, entry) {
    // Make sure the input is a string.
    if (typeof entry !== "string") {
      throw new Error("noUiSlider (" + VERSION + "): 'behaviour' must be a string containing options.");
    } // Check if the string contains any keywords.
    // None are required.


    var tap = entry.indexOf("tap") >= 0;
    var drag = entry.indexOf("drag") >= 0;
    var fixed = entry.indexOf("fixed") >= 0;
    var snap = entry.indexOf("snap") >= 0;
    var hover = entry.indexOf("hover") >= 0;
    var unconstrained = entry.indexOf("unconstrained") >= 0;

    if (fixed) {
      if (parsed.handles !== 2) {
        throw new Error("noUiSlider (" + VERSION + "): 'fixed' behaviour must be used with 2 handles");
      } // Use margin to enforce fixed state


      testMargin(parsed, parsed.start[1] - parsed.start[0]);
    }

    if (unconstrained && (parsed.margin || parsed.limit)) {
      throw new Error("noUiSlider (" + VERSION + "): 'unconstrained' behaviour cannot be used with margin or limit");
    }

    parsed.events = {
      tap: tap || snap,
      drag: drag,
      fixed: fixed,
      snap: snap,
      hover: hover,
      unconstrained: unconstrained
    };
  }

  function testTooltips(parsed, entry) {
    if (entry === false) {
      return;
    }

    if (entry === true) {
      parsed.tooltips = [];

      for (var i = 0; i < parsed.handles; i++) {
        parsed.tooltips.push(true);
      }
    } else {
      parsed.tooltips = asArray(entry);

      if (parsed.tooltips.length !== parsed.handles) {
        throw new Error("noUiSlider (" + VERSION + "): must pass a formatter for all handles.");
      }

      parsed.tooltips.forEach(function (formatter) {
        if (typeof formatter !== "boolean" && (typeof formatter !== "object" || typeof formatter.to !== "function")) {
          throw new Error("noUiSlider (" + VERSION + "): 'tooltips' must be passed a formatter or 'false'.");
        }
      });
    }
  }

  function testAriaFormat(parsed, entry) {
    parsed.ariaFormat = entry;
    validateFormat(entry);
  }

  function testFormat(parsed, entry) {
    parsed.format = entry;
    validateFormat(entry);
  }

  function testKeyboardSupport(parsed, entry) {
    parsed.keyboardSupport = entry;

    if (typeof entry !== "boolean") {
      throw new Error("noUiSlider (" + VERSION + "): 'keyboardSupport' option must be a boolean.");
    }
  }

  function testDocumentElement(parsed, entry) {
    // This is an advanced option. Passed values are used without validation.
    parsed.documentElement = entry;
  }

  function testCssPrefix(parsed, entry) {
    if (typeof entry !== "string" && entry !== false) {
      throw new Error("noUiSlider (" + VERSION + "): 'cssPrefix' must be a string or `false`.");
    }

    parsed.cssPrefix = entry;
  }

  function testCssClasses(parsed, entry) {
    if (typeof entry !== "object") {
      throw new Error("noUiSlider (" + VERSION + "): 'cssClasses' must be an object.");
    }

    if (typeof parsed.cssPrefix === "string") {
      parsed.cssClasses = {};

      for (var key in entry) {
        if (!entry.hasOwnProperty(key)) {
          continue;
        }

        parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
      }
    } else {
      parsed.cssClasses = entry;
    }
  } // Test all developer settings and parse to assumption-safe values.


  function testOptions(options) {
    // To prove a fix for #537, freeze options here.
    // If the object is modified, an error will be thrown.
    // Object.freeze(options);
    var parsed = {
      margin: 0,
      limit: 0,
      padding: 0,
      animate: true,
      animationDuration: 300,
      ariaFormat: defaultFormatter,
      format: defaultFormatter
    }; // Tests are executed in the order they are presented here.

    var tests = {
      step: {
        r: false,
        t: testStep
      },
      keyboardPageMultiplier: {
        r: false,
        t: testKeyboardPageMultiplier
      },
      keyboardDefaultStep: {
        r: false,
        t: testKeyboardDefaultStep
      },
      start: {
        r: true,
        t: testStart
      },
      connect: {
        r: true,
        t: testConnect
      },
      direction: {
        r: true,
        t: testDirection
      },
      snap: {
        r: false,
        t: testSnap
      },
      animate: {
        r: false,
        t: testAnimate
      },
      animationDuration: {
        r: false,
        t: testAnimationDuration
      },
      range: {
        r: true,
        t: testRange
      },
      orientation: {
        r: false,
        t: testOrientation
      },
      margin: {
        r: false,
        t: testMargin
      },
      limit: {
        r: false,
        t: testLimit
      },
      padding: {
        r: false,
        t: testPadding
      },
      behaviour: {
        r: true,
        t: testBehaviour
      },
      ariaFormat: {
        r: false,
        t: testAriaFormat
      },
      format: {
        r: false,
        t: testFormat
      },
      tooltips: {
        r: false,
        t: testTooltips
      },
      keyboardSupport: {
        r: true,
        t: testKeyboardSupport
      },
      documentElement: {
        r: false,
        t: testDocumentElement
      },
      cssPrefix: {
        r: true,
        t: testCssPrefix
      },
      cssClasses: {
        r: true,
        t: testCssClasses
      }
    };
    var defaults = {
      connect: false,
      direction: "ltr",
      behaviour: "tap",
      orientation: "horizontal",
      keyboardSupport: true,
      cssPrefix: "noUi-",
      cssClasses: cssClasses,
      keyboardPageMultiplier: 5,
      keyboardDefaultStep: 10
    }; // AriaFormat defaults to regular format, if any.

    if (options.format && !options.ariaFormat) {
      options.ariaFormat = options.format;
    } // Run all options through a testing mechanism to ensure correct
    // input. It should be noted that options might get modified to
    // be handled properly. E.g. wrapping integers in arrays.


    Object.keys(tests).forEach(function (name) {
      // If the option isn't set, but it is required, throw an error.
      if (!isSet(options[name]) && defaults[name] === undefined) {
        if (tests[name].r) {
          throw new Error("noUiSlider (" + VERSION + "): '" + name + "' is required.");
        }

        return true;
      }

      tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
    }); // Forward pips options

    parsed.pips = options.pips; // All recent browsers accept unprefixed transform.
    // We need -ms- for IE9 and -webkit- for older Android;
    // Assume use of -webkit- if unprefixed and -ms- are not supported.
    // https://caniuse.com/#feat=transforms2d

    var d = document.createElement("div");
    var msPrefix = d.style.msTransform !== undefined;
    var noPrefix = d.style.transform !== undefined;
    parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform"; // Pips don't move, so we can place them using left/top.

    var styles = [["left", "top"], ["right", "bottom"]];
    parsed.style = styles[parsed.dir][parsed.ort];
    return parsed;
  } //endregion


  function scope(target, options, originalOptions) {
    var actions = getActions();
    var supportsTouchActionNone = getSupportsTouchActionNone();
    var supportsPassive = supportsTouchActionNone && getSupportsPassive(); // All variables local to 'scope' are prefixed with 'scope_'
    // Slider DOM Nodes

    var scope_Target = target;
    var scope_Base;
    var scope_Handles;
    var scope_Connects;
    var scope_Pips;
    var scope_Tooltips; // Slider state values

    var scope_Spectrum = options.spectrum;
    var scope_Values = [];
    var scope_Locations = [];
    var scope_HandleNumbers = [];
    var scope_ActiveHandlesCount = 0;
    var scope_Events = {}; // Exposed API

    var scope_Self; // Document Nodes

    var scope_Document = target.ownerDocument;
    var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
    var scope_Body = scope_Document.body; // Pips constants

    var PIPS_NONE = -1;
    var PIPS_NO_VALUE = 0;
    var PIPS_LARGE_VALUE = 1;
    var PIPS_SMALL_VALUE = 2; // For horizontal sliders in standard ltr documents,
    // make .noUi-origin overflow to the left so the document doesn't scroll.

    var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100; // Creates a node, adds it to target, returns the new node.

    function addNodeTo(addTarget, className) {
      var div = scope_Document.createElement("div");

      if (className) {
        addClass(div, className);
      }

      addTarget.appendChild(div);
      return div;
    } // Append a origin to the base


    function addOrigin(base, handleNumber) {
      var origin = addNodeTo(base, options.cssClasses.origin);
      var handle = addNodeTo(origin, options.cssClasses.handle);
      addNodeTo(handle, options.cssClasses.touchArea);
      handle.setAttribute("data-handle", handleNumber);

      if (options.keyboardSupport) {
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
        // 0 = focusable and reachable
        handle.setAttribute("tabindex", "0");
        handle.addEventListener("keydown", function (event) {
          return eventKeydown(event, handleNumber);
        });
      }

      handle.setAttribute("role", "slider");
      handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");

      if (handleNumber === 0) {
        addClass(handle, options.cssClasses.handleLower);
      } else if (handleNumber === options.handles - 1) {
        addClass(handle, options.cssClasses.handleUpper);
      }

      return origin;
    } // Insert nodes for connect elements


    function addConnect(base, add) {
      if (!add) {
        return false;
      }

      return addNodeTo(base, options.cssClasses.connect);
    } // Add handles to the slider base.


    function addElements(connectOptions, base) {
      var connectBase = addNodeTo(base, options.cssClasses.connects);
      scope_Handles = [];
      scope_Connects = [];
      scope_Connects.push(addConnect(connectBase, connectOptions[0])); // [::::O====O====O====]
      // connectOptions = [0, 1, 1, 1]

      for (var i = 0; i < options.handles; i++) {
        // Keep a list of all added handles.
        scope_Handles.push(addOrigin(base, i));
        scope_HandleNumbers[i] = i;
        scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
      }
    } // Initialize a single slider.


    function addSlider(addTarget) {
      // Apply classes and data to the target.
      addClass(addTarget, options.cssClasses.target);

      if (options.dir === 0) {
        addClass(addTarget, options.cssClasses.ltr);
      } else {
        addClass(addTarget, options.cssClasses.rtl);
      }

      if (options.ort === 0) {
        addClass(addTarget, options.cssClasses.horizontal);
      } else {
        addClass(addTarget, options.cssClasses.vertical);
      }

      var textDirection = getComputedStyle(addTarget).direction;

      if (textDirection === "rtl") {
        addClass(addTarget, options.cssClasses.textDirectionRtl);
      } else {
        addClass(addTarget, options.cssClasses.textDirectionLtr);
      }

      return addNodeTo(addTarget, options.cssClasses.base);
    }

    function addTooltip(handle, handleNumber) {
      if (!options.tooltips[handleNumber]) {
        return false;
      }

      return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
    }

    function isSliderDisabled() {
      return scope_Target.hasAttribute("disabled");
    } // Disable the slider dragging if any handle is disabled


    function isHandleDisabled(handleNumber) {
      var handleOrigin = scope_Handles[handleNumber];
      return handleOrigin.hasAttribute("disabled");
    }

    function removeTooltips() {
      if (scope_Tooltips) {
        removeEvent("update.tooltips");
        scope_Tooltips.forEach(function (tooltip) {
          if (tooltip) {
            removeElement(tooltip);
          }
        });
        scope_Tooltips = null;
      }
    } // The tooltips option is a shorthand for using the 'update' event.


    function tooltips() {
      removeTooltips(); // Tooltips are added with options.tooltips in original order.

      scope_Tooltips = scope_Handles.map(addTooltip);
      bindEvent("update.tooltips", function (values, handleNumber, unencoded) {
        if (!scope_Tooltips[handleNumber]) {
          return;
        }

        var formattedValue = values[handleNumber];

        if (options.tooltips[handleNumber] !== true) {
          formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
        }

        scope_Tooltips[handleNumber].innerHTML = formattedValue;
      });
    }

    function aria() {
      bindEvent("update", function (values, handleNumber, unencoded, tap, positions) {
        // Update Aria Values for all handles, as a change in one changes min and max values for the next.
        scope_HandleNumbers.forEach(function (index) {
          var handle = scope_Handles[index];
          var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
          var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
          var now = positions[index]; // Formatted value for display

          var text = options.ariaFormat.to(unencoded[index]); // Map to slider range values

          min = scope_Spectrum.fromStepping(min).toFixed(1);
          max = scope_Spectrum.fromStepping(max).toFixed(1);
          now = scope_Spectrum.fromStepping(now).toFixed(1);
          handle.children[0].setAttribute("aria-valuemin", min);
          handle.children[0].setAttribute("aria-valuemax", max);
          handle.children[0].setAttribute("aria-valuenow", now);
          handle.children[0].setAttribute("aria-valuetext", text);
        });
      });
    }

    function getGroup(mode, values, stepped) {
      // Use the range.
      if (mode === "range" || mode === "steps") {
        return scope_Spectrum.xVal;
      }

      if (mode === "count") {
        if (values < 2) {
          throw new Error("noUiSlider (" + VERSION + "): 'values' (>= 2) required for mode 'count'.");
        } // Divide 0 - 100 in 'count' parts.


        var interval = values - 1;
        var spread = 100 / interval;
        values = []; // List these parts and have them handled as 'positions'.

        while (interval--) {
          values[interval] = interval * spread;
        }

        values.push(100);
        mode = "positions";
      }

      if (mode === "positions") {
        // Map all percentages to on-range values.
        return values.map(function (value) {
          return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
        });
      }

      if (mode === "values") {
        // If the value must be stepped, it needs to be converted to a percentage first.
        if (stepped) {
          return values.map(function (value) {
            // Convert to percentage, apply step, return to value.
            return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
          });
        } // Otherwise, we can simply use the values.


        return values;
      }
    }

    function generateSpread(density, mode, group) {
      function safeIncrement(value, increment) {
        // Avoid floating point variance by dropping the smallest decimal places.
        return (value + increment).toFixed(7) / 1;
      }

      var indexes = {};
      var firstInRange = scope_Spectrum.xVal[0];
      var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
      var ignoreFirst = false;
      var ignoreLast = false;
      var prevPct = 0; // Create a copy of the group, sort it and filter away all duplicates.

      group = unique(group.slice().sort(function (a, b) {
        return a - b;
      })); // Make sure the range starts with the first element.

      if (group[0] !== firstInRange) {
        group.unshift(firstInRange);
        ignoreFirst = true;
      } // Likewise for the last one.


      if (group[group.length - 1] !== lastInRange) {
        group.push(lastInRange);
        ignoreLast = true;
      }

      group.forEach(function (current, index) {
        // Get the current step and the lower + upper positions.
        var step;
        var i;
        var q;
        var low = current;
        var high = group[index + 1];
        var newPct;
        var pctDifference;
        var pctPos;
        var type;
        var steps;
        var realSteps;
        var stepSize;
        var isSteps = mode === "steps"; // When using 'steps' mode, use the provided steps.
        // Otherwise, we'll step on to the next subrange.

        if (isSteps) {
          step = scope_Spectrum.xNumSteps[index];
        } // Default to a 'full' step.


        if (!step) {
          step = high - low;
        } // Low can be 0, so test for false. Index 0 is already handled.


        if (low === false) {
          return;
        } // If high is undefined we are at the last subrange. Make sure it iterates once (#1088)


        if (high === undefined) {
          high = low;
        } // Make sure step isn't 0, which would cause an infinite loop (#654)


        step = Math.max(step, 0.0000001); // Find all steps in the subrange.

        for (i = low; i <= high; i = safeIncrement(i, step)) {
          // Get the percentage value for the current step,
          // calculate the size for the subrange.
          newPct = scope_Spectrum.toStepping(i);
          pctDifference = newPct - prevPct;
          steps = pctDifference / density;
          realSteps = Math.round(steps); // This ratio represents the amount of percentage-space a point indicates.
          // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
          // Round the percentage offset to an even number, then divide by two
          // to spread the offset on both sides of the range.

          stepSize = pctDifference / realSteps; // Divide all points evenly, adding the correct number to this subrange.
          // Run up to <= so that 100% gets a point, event if ignoreLast is set.

          for (q = 1; q <= realSteps; q += 1) {
            // The ratio between the rounded value and the actual size might be ~1% off.
            // Correct the percentage offset by the number of points
            // per subrange. density = 1 will result in 100 points on the
            // full range, 2 for 50, 4 for 25, etc.
            pctPos = prevPct + q * stepSize;
            indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
          } // Determine the point type.


          type = group.indexOf(i) > -1 ? PIPS_LARGE_VALUE : isSteps ? PIPS_SMALL_VALUE : PIPS_NO_VALUE; // Enforce the 'ignoreFirst' option by overwriting the type for 0.

          if (!index && ignoreFirst && i !== high) {
            type = 0;
          }

          if (!(i === high && ignoreLast)) {
            // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
            indexes[newPct.toFixed(5)] = [i, type];
          } // Update the percentage count.


          prevPct = newPct;
        }
      });
      return indexes;
    }

    function addMarking(spread, filterFunc, formatter) {
      var element = scope_Document.createElement("div");
      var valueSizeClasses = [];
      valueSizeClasses[PIPS_NO_VALUE] = options.cssClasses.valueNormal;
      valueSizeClasses[PIPS_LARGE_VALUE] = options.cssClasses.valueLarge;
      valueSizeClasses[PIPS_SMALL_VALUE] = options.cssClasses.valueSub;
      var markerSizeClasses = [];
      markerSizeClasses[PIPS_NO_VALUE] = options.cssClasses.markerNormal;
      markerSizeClasses[PIPS_LARGE_VALUE] = options.cssClasses.markerLarge;
      markerSizeClasses[PIPS_SMALL_VALUE] = options.cssClasses.markerSub;
      var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
      var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
      addClass(element, options.cssClasses.pips);
      addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);

      function getClasses(type, source) {
        var a = source === options.cssClasses.value;
        var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
        var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
        return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
      }

      function addSpread(offset, value, type) {
        // Apply the filter function, if it is set.
        type = filterFunc ? filterFunc(value, type) : type;

        if (type === PIPS_NONE) {
          return;
        } // Add a marker for every point


        var node = addNodeTo(element, false);
        node.className = getClasses(type, options.cssClasses.marker);
        node.style[options.style] = offset + "%"; // Values are only appended for points marked '1' or '2'.

        if (type > PIPS_NO_VALUE) {
          node = addNodeTo(element, false);
          node.className = getClasses(type, options.cssClasses.value);
          node.setAttribute("data-value", value);
          node.style[options.style] = offset + "%";
          node.innerHTML = formatter.to(value);
        }
      } // Append all points.


      Object.keys(spread).forEach(function (offset) {
        addSpread(offset, spread[offset][0], spread[offset][1]);
      });
      return element;
    }

    function removePips() {
      if (scope_Pips) {
        removeElement(scope_Pips);
        scope_Pips = null;
      }
    }

    function pips(grid) {
      // Fix #669
      removePips();
      var mode = grid.mode;
      var density = grid.density || 1;
      var filter = grid.filter || false;
      var values = grid.values || false;
      var stepped = grid.stepped || false;
      var group = getGroup(mode, values, stepped);
      var spread = generateSpread(density, mode, group);
      var format = grid.format || {
        to: Math.round
      };
      scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
      return scope_Pips;
    } // Shorthand for base dimensions.


    function baseSize() {
      var rect = scope_Base.getBoundingClientRect();
      var alt = "offset" + ["Width", "Height"][options.ort];
      return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
    } // Handler for attaching events trough a proxy.


    function attachEvent(events, element, callback, data) {
      // This function can be used to 'filter' events to the slider.
      // element is a node, not a nodeList
      var method = function method(e) {
        e = fixEvent(e, data.pageOffset, data.target || element); // fixEvent returns false if this event has a different target
        // when handling (multi-) touch events;

        if (!e) {
          return false;
        } // doNotReject is passed by all end events to make sure released touches
        // are not rejected, leaving the slider "stuck" to the cursor;


        if (isSliderDisabled() && !data.doNotReject) {
          return false;
        } // Stop if an active 'tap' transition is taking place.


        if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
          return false;
        } // Ignore right or middle clicks on start #454


        if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
          return false;
        } // Ignore right or middle clicks on start #454


        if (data.hover && e.buttons) {
          return false;
        } // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
        // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
        // touch-action: manipulation, but that allows panning, which breaks
        // sliders after zooming/on non-responsive pages.
        // See: https://bugs.webkit.org/show_bug.cgi?id=133112


        if (!supportsPassive) {
          e.preventDefault();
        }

        e.calcPoint = e.points[options.ort]; // Call the event handler with the event [ and additional data ].

        callback(e, data);
      };

      var methods = []; // Bind a closure on the target for every event type.

      events.split(" ").forEach(function (eventName) {
        element.addEventListener(eventName, method, supportsPassive ? {
          passive: true
        } : false);
        methods.push([eventName, method]);
      });
      return methods;
    } // Provide a clean event with standardized offset values.


    function fixEvent(e, pageOffset, eventTarget) {
      // Filter the event to register the type, which can be
      // touch, mouse or pointer. Offset changes need to be
      // made on an event specific basis.
      var touch = e.type.indexOf("touch") === 0;
      var mouse = e.type.indexOf("mouse") === 0;
      var pointer = e.type.indexOf("pointer") === 0;
      var x;
      var y; // IE10 implemented pointer events with a prefix;

      if (e.type.indexOf("MSPointer") === 0) {
        pointer = true;
      } // Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with
      // the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore
      // events that have no touches or buttons associated with them. (#1057, #1079, #1095)


      if (e.type === "mousedown" && !e.buttons && !e.touches) {
        return false;
      } // The only thing one handle should be concerned about is the touches that originated on top of it.


      if (touch) {
        // Returns true if a touch originated on the target.
        var isTouchOnTarget = function isTouchOnTarget(checkTouch) {
          return checkTouch.target === eventTarget || eventTarget.contains(checkTouch.target) || checkTouch.target.shadowRoot && checkTouch.target.shadowRoot.contains(eventTarget);
        }; // In the case of touchstart events, we need to make sure there is still no more than one
        // touch on the target so we look amongst all touches.


        if (e.type === "touchstart") {
          var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget); // Do not support more than one touch per handle.

          if (targetTouches.length > 1) {
            return false;
          }

          x = targetTouches[0].pageX;
          y = targetTouches[0].pageY;
        } else {
          // In the other cases, find on changedTouches is enough.
          var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget); // Cancel if the target touch has not moved.

          if (!targetTouch) {
            return false;
          }

          x = targetTouch.pageX;
          y = targetTouch.pageY;
        }
      }

      pageOffset = pageOffset || getPageOffset(scope_Document);

      if (mouse || pointer) {
        x = e.clientX + pageOffset.x;
        y = e.clientY + pageOffset.y;
      }

      e.pageOffset = pageOffset;
      e.points = [x, y];
      e.cursor = mouse || pointer; // Fix #435

      return e;
    } // Translate a coordinate in the document to a percentage on the slider


    function calcPointToPercentage(calcPoint) {
      var location = calcPoint - offset(scope_Base, options.ort);
      var proposal = location * 100 / baseSize(); // Clamp proposal between 0% and 100%
      // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
      // are used (e.g. contained handles feature)

      proposal = limit(proposal);
      return options.dir ? 100 - proposal : proposal;
    } // Find handle closest to a certain percentage on the slider


    function getClosestHandle(clickedPosition) {
      var smallestDifference = 100;
      var handleNumber = false;
      scope_Handles.forEach(function (handle, index) {
        // Disabled handles are ignored
        if (isHandleDisabled(index)) {
          return;
        }

        var handlePosition = scope_Locations[index];
        var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition); // Initial state

        var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100; // Difference with this handle is smaller than the previously checked handle

        var isCloser = differenceWithThisHandle < smallestDifference;
        var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;

        if (isCloser || isCloserAfter || clickAtEdge) {
          handleNumber = index;
          smallestDifference = differenceWithThisHandle;
        }
      });
      return handleNumber;
    } // Fire 'end' when a mouse or pen leaves the document.


    function documentLeave(event, data) {
      if (event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null) {
        eventEnd(event, data);
      }
    } // Handle movement on document for handle and range drag.


    function eventMove(event, data) {
      // Fix #498
      // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
      // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
      // IE9 has .buttons and .which zero on mousemove.
      // Firefox breaks the spec MDN defines.
      if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
        return eventEnd(event, data);
      } // Check if we are moving up or down


      var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint); // Convert the movement into a percentage of the slider width/height

      var proposal = movement * 100 / data.baseSize;
      moveHandles(movement > 0, proposal, data.locations, data.handleNumbers);
    } // Unbind move events on document, call callbacks.


    function eventEnd(event, data) {
      // The handle is no longer active, so remove the class.
      if (data.handle) {
        removeClass(data.handle, options.cssClasses.active);
        scope_ActiveHandlesCount -= 1;
      } // Unbind the move and end events, which are added on 'start'.


      data.listeners.forEach(function (c) {
        scope_DocumentElement.removeEventListener(c[0], c[1]);
      });

      if (scope_ActiveHandlesCount === 0) {
        // Remove dragging class.
        removeClass(scope_Target, options.cssClasses.drag);
        setZindex(); // Remove cursor styles and text-selection events bound to the body.

        if (event.cursor) {
          scope_Body.style.cursor = "";
          scope_Body.removeEventListener("selectstart", preventDefault);
        }
      }

      data.handleNumbers.forEach(function (handleNumber) {
        fireEvent("change", handleNumber);
        fireEvent("set", handleNumber);
        fireEvent("end", handleNumber);
      });
    } // Bind move events on document.


    function eventStart(event, data) {
      // Ignore event if any handle is disabled
      if (data.handleNumbers.some(isHandleDisabled)) {
        return false;
      }

      var handle;

      if (data.handleNumbers.length === 1) {
        var handleOrigin = scope_Handles[data.handleNumbers[0]];
        handle = handleOrigin.children[0];
        scope_ActiveHandlesCount += 1; // Mark the handle as 'active' so it can be styled.

        addClass(handle, options.cssClasses.active);
      } // A drag should never propagate up to the 'tap' event.


      event.stopPropagation(); // Record the event listeners.

      var listeners = []; // Attach the move and end events.

      var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
        // The event target has changed so we need to propagate the original one so that we keep
        // relying on it to extract target touches.
        target: event.target,
        handle: handle,
        listeners: listeners,
        startCalcPoint: event.calcPoint,
        baseSize: baseSize(),
        pageOffset: event.pageOffset,
        handleNumbers: data.handleNumbers,
        buttonsProperty: event.buttons,
        locations: scope_Locations.slice()
      });
      var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
        target: event.target,
        handle: handle,
        listeners: listeners,
        doNotReject: true,
        handleNumbers: data.handleNumbers
      });
      var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
        target: event.target,
        handle: handle,
        listeners: listeners,
        doNotReject: true,
        handleNumbers: data.handleNumbers
      }); // We want to make sure we pushed the listeners in the listener list rather than creating
      // a new one as it has already been passed to the event handlers.

      listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent)); // Text selection isn't an issue on touch devices,
      // so adding cursor styles can be skipped.

      if (event.cursor) {
        // Prevent the 'I' cursor and extend the range-drag cursor.
        scope_Body.style.cursor = getComputedStyle(event.target).cursor; // Mark the target with a dragging state.

        if (scope_Handles.length > 1) {
          addClass(scope_Target, options.cssClasses.drag);
        } // Prevent text selection when dragging the handles.
        // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
        // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
        // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
        // The 'cursor' flag is false.
        // See: http://caniuse.com/#search=selectstart


        scope_Body.addEventListener("selectstart", preventDefault, false);
      }

      data.handleNumbers.forEach(function (handleNumber) {
        fireEvent("start", handleNumber);
      });
    } // Move closest handle to tapped location.


    function eventTap(event) {
      // The tap event shouldn't propagate up
      event.stopPropagation();
      var proposal = calcPointToPercentage(event.calcPoint);
      var handleNumber = getClosestHandle(proposal); // Tackle the case that all handles are 'disabled'.

      if (handleNumber === false) {
        return false;
      } // Flag the slider as it is now in a transitional state.
      // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.


      if (!options.events.snap) {
        addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
      }

      setHandle(handleNumber, proposal, true, true);
      setZindex();
      fireEvent("slide", handleNumber, true);
      fireEvent("update", handleNumber, true);
      fireEvent("change", handleNumber, true);
      fireEvent("set", handleNumber, true);

      if (options.events.snap) {
        eventStart(event, {
          handleNumbers: [handleNumber]
        });
      }
    } // Fires a 'hover' event for a hovered mouse/pen position.


    function eventHover(event) {
      var proposal = calcPointToPercentage(event.calcPoint);
      var to = scope_Spectrum.getStep(proposal);
      var value = scope_Spectrum.fromStepping(to);
      Object.keys(scope_Events).forEach(function (targetEvent) {
        if ("hover" === targetEvent.split(".")[0]) {
          scope_Events[targetEvent].forEach(function (callback) {
            callback.call(scope_Self, value);
          });
        }
      });
    } // Handles keydown on focused handles
    // Don't move the document when pressing arrow keys on focused handles


    function eventKeydown(event, handleNumber) {
      if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
        return false;
      }

      var horizontalKeys = ["Left", "Right"];
      var verticalKeys = ["Down", "Up"];
      var largeStepKeys = ["PageDown", "PageUp"];
      var edgeKeys = ["Home", "End"];

      if (options.dir && !options.ort) {
        // On an right-to-left slider, the left and right keys act inverted
        horizontalKeys.reverse();
      } else if (options.ort && !options.dir) {
        // On a top-to-bottom slider, the up and down keys act inverted
        verticalKeys.reverse();
        largeStepKeys.reverse();
      } // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key


      var key = event.key.replace("Arrow", "");
      var isLargeDown = key === largeStepKeys[0];
      var isLargeUp = key === largeStepKeys[1];
      var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
      var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
      var isMin = key === edgeKeys[0];
      var isMax = key === edgeKeys[1];

      if (!isDown && !isUp && !isMin && !isMax) {
        return true;
      }

      event.preventDefault();
      var to;

      if (isUp || isDown) {
        var multiplier = options.keyboardPageMultiplier;
        var direction = isDown ? 0 : 1;
        var steps = getNextStepsForHandle(handleNumber);
        var step = steps[direction]; // At the edge of a slider, do nothing

        if (step === null) {
          return false;
        } // No step set, use the default of 10% of the sub-range


        if (step === false) {
          step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
        }

        if (isLargeUp || isLargeDown) {
          step *= multiplier;
        } // Step over zero-length ranges (#948);


        step = Math.max(step, 0.0000001); // Decrement for down steps

        step = (isDown ? -1 : 1) * step;
        to = scope_Values[handleNumber] + step;
      } else if (isMax) {
        // End key
        to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
      } else {
        // Home key
        to = options.spectrum.xVal[0];
      }

      setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
      fireEvent("slide", handleNumber);
      fireEvent("update", handleNumber);
      fireEvent("change", handleNumber);
      fireEvent("set", handleNumber);
      return false;
    } // Attach events to several slider parts.


    function bindSliderEvents(behaviour) {
      // Attach the standard drag event to the handles.
      if (!behaviour.fixed) {
        scope_Handles.forEach(function (handle, index) {
          // These events are only bound to the visual handle
          // element, not the 'real' origin element.
          attachEvent(actions.start, handle.children[0], eventStart, {
            handleNumbers: [index]
          });
        });
      } // Attach the tap event to the slider base.


      if (behaviour.tap) {
        attachEvent(actions.start, scope_Base, eventTap, {});
      } // Fire hover events


      if (behaviour.hover) {
        attachEvent(actions.move, scope_Base, eventHover, {
          hover: true
        });
      } // Make the range draggable.


      if (behaviour.drag) {
        scope_Connects.forEach(function (connect, index) {
          if (connect === false || index === 0 || index === scope_Connects.length - 1) {
            return;
          }

          var handleBefore = scope_Handles[index - 1];
          var handleAfter = scope_Handles[index];
          var eventHolders = [connect];
          addClass(connect, options.cssClasses.draggable); // When the range is fixed, the entire range can
          // be dragged by the handles. The handle in the first
          // origin will propagate the start event upward,
          // but it needs to be bound manually on the other.

          if (behaviour.fixed) {
            eventHolders.push(handleBefore.children[0]);
            eventHolders.push(handleAfter.children[0]);
          }

          eventHolders.forEach(function (eventHolder) {
            attachEvent(actions.start, eventHolder, eventStart, {
              handles: [handleBefore, handleAfter],
              handleNumbers: [index - 1, index]
            });
          });
        });
      }
    } // Attach an event to this slider, possibly including a namespace


    function bindEvent(namespacedEvent, callback) {
      scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
      scope_Events[namespacedEvent].push(callback); // If the event bound is 'update,' fire it immediately for all handles.

      if (namespacedEvent.split(".")[0] === "update") {
        scope_Handles.forEach(function (a, index) {
          fireEvent("update", index);
        });
      }
    } // Undo attachment of event


    function removeEvent(namespacedEvent) {
      var event = namespacedEvent && namespacedEvent.split(".")[0];
      var namespace = event && namespacedEvent.substring(event.length);
      Object.keys(scope_Events).forEach(function (bind) {
        var tEvent = bind.split(".")[0];
        var tNamespace = bind.substring(tEvent.length);

        if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
          delete scope_Events[bind];
        }
      });
    } // External event handling


    function fireEvent(eventName, handleNumber, tap) {
      Object.keys(scope_Events).forEach(function (targetEvent) {
        var eventType = targetEvent.split(".")[0];

        if (eventName === eventType) {
          scope_Events[targetEvent].forEach(function (callback) {
            callback.call( // Use the slider public API as the scope ('this')
            scope_Self, // Return values as array, so arg_1[arg_2] is always valid.
            scope_Values.map(options.format.to), // Handle index, 0 or 1
            handleNumber, // Un-formatted slider values
            scope_Values.slice(), // Event is fired by tap, true or false
            tap || false, // Left offset of the handle, in relation to the slider
            scope_Locations.slice(), // add the slider public API to an accessible parameter when this is unavailable
            scope_Self);
          });
        }
      });
    } // Split out the handle positioning logic so the Move event can use it, too


    function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue) {
      var distance; // For sliders with multiple handles, limit movement to the other handle.
      // Apply the margin option by adding it to the handle positions.

      if (scope_Handles.length > 1 && !options.events.unconstrained) {
        if (lookBackward && handleNumber > 0) {
          distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, 0);
          to = Math.max(to, distance);
        }

        if (lookForward && handleNumber < scope_Handles.length - 1) {
          distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, 1);
          to = Math.min(to, distance);
        }
      } // The limit option has the opposite effect, limiting handles to a
      // maximum distance from another. Limit must be > 0, as otherwise
      // handles would be unmovable.


      if (scope_Handles.length > 1 && options.limit) {
        if (lookBackward && handleNumber > 0) {
          distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, 0);
          to = Math.min(to, distance);
        }

        if (lookForward && handleNumber < scope_Handles.length - 1) {
          distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, 1);
          to = Math.max(to, distance);
        }
      } // The padding option keeps the handles a certain distance from the
      // edges of the slider. Padding must be > 0.


      if (options.padding) {
        if (handleNumber === 0) {
          distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], 0);
          to = Math.max(to, distance);
        }

        if (handleNumber === scope_Handles.length - 1) {
          distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], 1);
          to = Math.min(to, distance);
        }
      }

      to = scope_Spectrum.getStep(to); // Limit percentage to the 0 - 100 range

      to = limit(to); // Return false if handle can't move

      if (to === reference[handleNumber] && !getValue) {
        return false;
      }

      return to;
    } // Uses slider orientation to create CSS rules. a = base value;


    function inRuleOrder(v, a) {
      var o = options.ort;
      return (o ? a : v) + ", " + (o ? v : a);
    } // Moves handle(s) by a percentage
    // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])


    function moveHandles(upward, proposal, locations, handleNumbers) {
      var proposals = locations.slice();
      var b = [!upward, upward];
      var f = [upward, !upward]; // Copy handleNumbers so we don't change the dataset

      handleNumbers = handleNumbers.slice(); // Check to see which handle is 'leading'.
      // If that one can't move the second can't either.

      if (upward) {
        handleNumbers.reverse();
      } // Step 1: get the maximum percentage that any of the handles can move


      if (handleNumbers.length > 1) {
        handleNumbers.forEach(function (handleNumber, o) {
          var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false); // Stop if one of the handles can't move.

          if (to === false) {
            proposal = 0;
          } else {
            proposal = to - proposals[handleNumber];
            proposals[handleNumber] = to;
          }
        });
      } // If using one handle, check backward AND forward
      else {
        b = f = [true];
      }

      var state = false; // Step 2: Try to set the handles with the found percentage

      handleNumbers.forEach(function (handleNumber, o) {
        state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
      }); // Step 3: If a handle moved, fire events

      if (state) {
        handleNumbers.forEach(function (handleNumber) {
          fireEvent("update", handleNumber);
          fireEvent("slide", handleNumber);
        });
      }
    } // Takes a base value and an offset. This offset is used for the connect bar size.
    // In the initial design for this feature, the origin element was 1% wide.
    // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
    // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223


    function transformDirection(a, b) {
      return options.dir ? 100 - a - b : a;
    } // Updates scope_Locations and scope_Values, updates visual state


    function updateHandlePosition(handleNumber, to) {
      // Update locations.
      scope_Locations[handleNumber] = to; // Convert the value to the slider stepping/range.

      scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
      var translation = 10 * (transformDirection(to, 0) - scope_DirOffset);
      var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
      scope_Handles[handleNumber].style[options.transformRule] = translateRule;
      updateConnect(handleNumber);
      updateConnect(handleNumber + 1);
    } // Handles before the slider middle are stacked later = higher,
    // Handles after the middle later is lower
    // [[7] [8] .......... | .......... [5] [4]


    function setZindex() {
      scope_HandleNumbers.forEach(function (handleNumber) {
        var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
        var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
        scope_Handles[handleNumber].style.zIndex = zIndex;
      });
    } // Test suggested values and apply margin, step.
    // if exactInput is true, don't run checkHandlePosition, then the handle can be placed in between steps (#436)


    function setHandle(handleNumber, to, lookBackward, lookForward, exactInput) {
      if (!exactInput) {
        to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false);
      }

      if (to === false) {
        return false;
      }

      updateHandlePosition(handleNumber, to);
      return true;
    } // Updates style attribute for connect nodes


    function updateConnect(index) {
      // Skip connects set to false
      if (!scope_Connects[index]) {
        return;
      }

      var l = 0;
      var h = 100;

      if (index !== 0) {
        l = scope_Locations[index - 1];
      }

      if (index !== scope_Connects.length - 1) {
        h = scope_Locations[index];
      } // We use two rules:
      // 'translate' to change the left/top offset;
      // 'scale' to change the width of the element;
      // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)


      var connectWidth = h - l;
      var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
      var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
      scope_Connects[index].style[options.transformRule] = translateRule + " " + scaleRule;
    } // Parses value passed to .set method. Returns current value if not parse-able.


    function resolveToValue(to, handleNumber) {
      // Setting with null indicates an 'ignore'.
      // Inputting 'false' is invalid.
      if (to === null || to === false || to === undefined) {
        return scope_Locations[handleNumber];
      } // If a formatted number was passed, attempt to decode it.


      if (typeof to === "number") {
        to = String(to);
      }

      to = options.format.from(to);
      to = scope_Spectrum.toStepping(to); // If parsing the number failed, use the current value.

      if (to === false || isNaN(to)) {
        return scope_Locations[handleNumber];
      }

      return to;
    } // Set the slider value.


    function valueSet(input, fireSetEvent, exactInput) {
      var values = asArray(input);
      var isInit = scope_Locations[0] === undefined; // Event fires by default

      fireSetEvent = fireSetEvent === undefined ? true : !!fireSetEvent; // Animation is optional.
      // Make sure the initial values were set before using animated placement.

      if (options.animate && !isInit) {
        addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
      } // First pass, without lookAhead but with lookBackward. Values are set from left to right.


      scope_HandleNumbers.forEach(function (handleNumber) {
        setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
      });
      var i = scope_HandleNumbers.length === 1 ? 0 : 1; // Secondary passes. Now that all base values are set, apply constraints.
      // Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)

      for (; i < scope_HandleNumbers.length; ++i) {
        scope_HandleNumbers.forEach(function (handleNumber) {
          setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
        });
      }

      setZindex();
      scope_HandleNumbers.forEach(function (handleNumber) {
        fireEvent("update", handleNumber); // Fire the event only for handles that received a new value, as per #579

        if (values[handleNumber] !== null && fireSetEvent) {
          fireEvent("set", handleNumber);
        }
      });
    } // Reset slider to initial values


    function valueReset(fireSetEvent) {
      valueSet(options.start, fireSetEvent);
    } // Set value for a single handle


    function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
      // Ensure numeric input
      handleNumber = Number(handleNumber);

      if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
        throw new Error("noUiSlider (" + VERSION + "): invalid handle number, got: " + handleNumber);
      } // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
      // The exactInput argument can be used to ignore slider stepping (#436)


      setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
      fireEvent("update", handleNumber);

      if (fireSetEvent) {
        fireEvent("set", handleNumber);
      }
    } // Get the slider value.


    function valueGet() {
      var values = scope_Values.map(options.format.to); // If only one handle is used, return a single value.

      if (values.length === 1) {
        return values[0];
      }

      return values;
    } // Removes classes from the root and empties it.


    function destroy() {
      for (var key in options.cssClasses) {
        if (!options.cssClasses.hasOwnProperty(key)) {
          continue;
        }

        removeClass(scope_Target, options.cssClasses[key]);
      }

      while (scope_Target.firstChild) {
        scope_Target.removeChild(scope_Target.firstChild);
      }

      delete scope_Target.noUiSlider;
    }

    function getNextStepsForHandle(handleNumber) {
      var location = scope_Locations[handleNumber];
      var nearbySteps = scope_Spectrum.getNearbySteps(location);
      var value = scope_Values[handleNumber];
      var increment = nearbySteps.thisStep.step;
      var decrement = null; // If snapped, directly use defined step value

      if (options.snap) {
        return [value - nearbySteps.stepBefore.startValue || null, nearbySteps.stepAfter.startValue - value || null];
      } // If the next value in this step moves into the next step,
      // the increment is the start of the next step - the current value


      if (increment !== false) {
        if (value + increment > nearbySteps.stepAfter.startValue) {
          increment = nearbySteps.stepAfter.startValue - value;
        }
      } // If the value is beyond the starting point


      if (value > nearbySteps.thisStep.startValue) {
        decrement = nearbySteps.thisStep.step;
      } else if (nearbySteps.stepBefore.step === false) {
        decrement = false;
      } // If a handle is at the start of a step, it always steps back into the previous step first
      else {
        decrement = value - nearbySteps.stepBefore.highestStep;
      } // Now, if at the slider edges, there is no in/decrement


      if (location === 100) {
        increment = null;
      } else if (location === 0) {
        decrement = null;
      } // As per #391, the comparison for the decrement step can have some rounding issues.


      var stepDecimals = scope_Spectrum.countStepDecimals(); // Round per #391

      if (increment !== null && increment !== false) {
        increment = Number(increment.toFixed(stepDecimals));
      }

      if (decrement !== null && decrement !== false) {
        decrement = Number(decrement.toFixed(stepDecimals));
      }

      return [decrement, increment];
    } // Get the current step size for the slider.


    function getNextSteps() {
      return scope_HandleNumbers.map(getNextStepsForHandle);
    } // Updateable: margin, limit, padding, step, range, animate, snap


    function updateOptions(optionsToUpdate, fireSetEvent) {
      // Spectrum is created using the range, snap, direction and step options.
      // 'snap' and 'step' can be updated.
      // If 'snap' and 'step' are not passed, they should remain unchanged.
      var v = valueGet();
      var updateAble = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips"]; // Only change options that we're actually passed to update.

      updateAble.forEach(function (name) {
        // Check for undefined. null removes the value.
        if (optionsToUpdate[name] !== undefined) {
          originalOptions[name] = optionsToUpdate[name];
        }
      });
      var newOptions = testOptions(originalOptions); // Load new options into the slider state

      updateAble.forEach(function (name) {
        if (optionsToUpdate[name] !== undefined) {
          options[name] = newOptions[name];
        }
      });
      scope_Spectrum = newOptions.spectrum; // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)

      options.margin = newOptions.margin;
      options.limit = newOptions.limit;
      options.padding = newOptions.padding; // Update pips, removes existing.

      if (options.pips) {
        pips(options.pips);
      } else {
        removePips();
      } // Update tooltips, removes existing.


      if (options.tooltips) {
        tooltips();
      } else {
        removeTooltips();
      } // Invalidate the current positioning so valueSet forces an update.


      scope_Locations = [];
      valueSet(optionsToUpdate.start || v, fireSetEvent);
    } // Initialization steps


    function setupSlider() {
      // Create the base element, initialize HTML and set classes.
      // Add handles and connect elements.
      scope_Base = addSlider(scope_Target);
      addElements(options.connect, scope_Base); // Attach user events.

      bindSliderEvents(options.events); // Use the public value method to set the start values.

      valueSet(options.start);

      if (options.pips) {
        pips(options.pips);
      }

      if (options.tooltips) {
        tooltips();
      }

      aria();
    }

    setupSlider(); // noinspection JSUnusedGlobalSymbols

    scope_Self = {
      destroy: destroy,
      steps: getNextSteps,
      on: bindEvent,
      off: removeEvent,
      get: valueGet,
      set: valueSet,
      setHandle: valueSetHandle,
      reset: valueReset,
      // Exposed for unit testing, don't use this in your application.
      __moveHandles: function __moveHandles(a, b, c) {
        moveHandles(a, b, scope_Locations, c);
      },
      options: originalOptions,
      // Issue #600, #678
      updateOptions: updateOptions,
      target: scope_Target,
      // Issue #597
      removePips: removePips,
      removeTooltips: removeTooltips,
      getTooltips: function getTooltips() {
        return scope_Tooltips;
      },
      getOrigins: function getOrigins() {
        return scope_Handles;
      },
      pips: pips // Issue #594

    };
    return scope_Self;
  } // Run the standard initializer


  function initialize(target, originalOptions) {
    if (!target || !target.nodeName) {
      throw new Error("noUiSlider (" + VERSION + "): create requires a single element, got: " + target);
    } // Throw an error if the slider was already initialized.


    if (target.noUiSlider) {
      throw new Error("noUiSlider (" + VERSION + "): Slider was already initialized.");
    } // Test the options and create the slider environment;


    var options = testOptions(originalOptions, target);
    var api = scope(target, options, originalOptions);
    target.noUiSlider = api;
    return api;
  } // Use an object instead of a function for future expandability;


  return {
    // Exposed for unit testing, don't use this in your application.
    __spectrum: Spectrum,
    version: VERSION,
    // A reference to the default classes, allows global changes.
    // Use the cssClasses option for changes to one slider.
    cssClasses: cssClasses,
    create: initialize
  };
});

/***/ }),

/***/ 29067:
/*!******************************************************************************!*\
  !*** ./src/app/Admin/layouts/footerhostportal/footerhostportal.component.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterhostportalComponent": function() { return /* binding */ FooterhostportalComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _footerhostportal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footerhostportal.component.html?ngResource */ 45006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 18259);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterhostportalComponent = /*#__PURE__*/function () {
  function FooterhostportalComponent() {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FooterhostportalComponent);

    this.test = new Date();
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(FooterhostportalComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return FooterhostportalComponent;
}();

FooterhostportalComponent.ctorParameters = function () {
  return [];
};

FooterhostportalComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-footerhostportal-web',
  template: _footerhostportal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], FooterhostportalComponent);


/***/ }),

/***/ 57184:
/*!***********************************************************!*\
  !*** ./src/app/Host/Bookdetails/Bookdetails.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookdetailsComponent": function() { return /* binding */ BookdetailsComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _Bookdetails_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bookdetails.component.html?ngResource */ 75207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_data_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/data.services */ 7619);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var BookdetailsComponent = /*#__PURE__*/function () {
  function BookdetailsComponent(router, routers, cdf, dataService, _formBuilder) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BookdetailsComponent);

    this.router = router;
    this.routers = routers;
    this.cdf = cdf;
    this.dataService = dataService;
    this._formBuilder = _formBuilder;
    this.user = null;
    this.details = null;
    this.sub = null;
    this.id = null;
    this.moment = moment__WEBPACK_IMPORTED_MODULE_3__;
    this.showAlert = false;
    this.errorMessage = null;
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(BookdetailsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      if (localStorage.getItem("token") != null && localStorage.getItem('role') == 'host') {
        this.user = 'exists';
      } else {
        this.user = null;
        localStorage.clear();
        this.router.navigate(['/guest/home']);
      }

      var body = document.getElementsByTagName('body')[0];
      body.classList.add('lock-page');
      body.classList.add('off-canvas-sidebar');
      var card = document.getElementsByClassName('card')[0];
      this.sub = this.routers.params.subscribe(function (params) {
        _this.id = params['id'];
      });
      this.getBookedAdDetails(this.id);
      this.bookingForm = this._formBuilder.group({
        id: this.id,
        message: null
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('lock-page');
      body.classList.remove('off-canvas-sidebar');
    }
  }, {
    key: "getBookedAdDetails",
    value: function getBookedAdDetails(id) {
      var _this2 = this;

      var data = {
        id: id
      };
      this.dataService.post('host/get-booked-ad-by-id', data).then(function (result) {
        _this2.details = result.data;
      });
    }
  }, {
    key: "cancelBooking",
    value: function cancelBooking() {
      var _this3 = this;

      this.showAlert = false;

      if (this.bookingForm.invalid) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
          position: 'center',
          icon: 'error',
          text: 'Please Fill All Required Fields',
          showConfirmButton: false,
          timer: 2500
        });
        this.cdf.detectChanges();
      }

      var formData = this.bookingForm.getRawValue();
      var data = {
        id: this.details.id,
        message: formData.message
      };
      this.dataService.post('guest/cancel-booked-offer', data).then(function (result) {
        // console.log("cancell");
        // console.log(result);
        if (result.success == true) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
            position: 'center',
            icon: 'success',
            title: 'Success',
            showConfirmButton: false,
            timer: 2500
          });

          _this3.cdf.detectChanges();

          _this3.router.navigate(['hostportal/bookinglist']);
        }
      });
    }
  }, {
    key: "showinbox",
    value: function showinbox() {
      location.href = '/#/hostportal/inbox';
    }
  }, {
    key: "checkIn",
    value: function checkIn(book_id, confirmation_number) {
      var _this4 = this;

      var data = {
        id: book_id,
        confirmation_number: confirmation_number
      };
      this.dataService.post('host/check-in', data).then(function (result) {
        if (result.success == true) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
            position: 'center',
            icon: 'success',
            title: 'Success',
            showConfirmButton: false,
            timer: 2500
          });

          _this4.getBookedAdDetails(_this4.id);

          _this4.cdf.detectChanges();
        }
      });
    }
  }, {
    key: "checkOut",
    value: function checkOut(book_id, confirmation_number) {
      var _this5 = this;

      var data = {
        id: book_id,
        confirmation_number: confirmation_number
      };
      this.dataService.post('host/check-out', data).then(function (result) {
        if (result.success == true) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
            position: 'center',
            icon: 'success',
            title: 'Success',
            showConfirmButton: false,
            timer: 2500
          });

          _this5.cdf.detectChanges();

          _this5.router.navigate(['hostportal/bookinglist']);
        }
      });
    }
  }]);

  return BookdetailsComponent;
}();

BookdetailsComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef
  }, {
    type: src_app_services_data_services__WEBPACK_IMPORTED_MODULE_4__.DataService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
  }];
};

BookdetailsComponent.propDecorators = {
  bookingNgForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: ['bookingNgForm']
  }]
};
BookdetailsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-Bookdetails-cmp',
  template: _Bookdetails_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], BookdetailsComponent);


/***/ }),

/***/ 38883:
/*!***********************************************************!*\
  !*** ./src/app/Host/Bookinglist/Bookinglist.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookinglistComponent": function() { return /* binding */ BookinglistComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _Bookinglist_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bookinglist.component.html?ngResource */ 50310);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var src_app_services_data_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/data.services */ 7619);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var BookinglistComponent = /*#__PURE__*/function () {
  function BookinglistComponent(router, cdf, dataService) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BookinglistComponent);

    this.router = router;
    this.cdf = cdf;
    this.dataService = dataService;
    this.moment = moment__WEBPACK_IMPORTED_MODULE_4__;
    this.tempOffers = [];
    this.offers = [];
    this.user = null;
    this.offer0 = [];
    this.offer1 = [];
    this.offer2 = [];
    this.offer3 = [];
    this.details = [];
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(BookinglistComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      if (localStorage.getItem("token") != null && localStorage.getItem('role') == 'host') {
        this.user = 'exists';
      } else {
        this.user = null;
        localStorage.clear();
        this.router.navigate(['/host/home']);
      }

      var body = document.getElementsByTagName('body')[0];
      body.classList.add('lock-page');
      body.classList.add('off-canvas-sidebar');
      var card = document.getElementsByClassName('card')[0];

      if (localStorage.getItem("token") != null && localStorage.getItem('role') == 'host') {} else {
        localStorage.clear();
        this.router.navigate(['/host/home']);
      }

      this.dataService.get('host/booked-ads').then(function (result) {
        _this.tempOffers = result.data;

        for (var i = 0; i < _this.tempOffers.length; i++) {
          var totalPrice = _this.tempOffers[i]['price'];
          var price = totalPrice * (_this.tempOffers[i]['discount_of_percentage'] / 100);
          price = totalPrice - price;
          _this.tempOffers[i]['current_price'] = price;
        }

        for (var j = 0; j < _this.tempOffers.length; j++) {
          for (var k = 0; k < _this.tempOffers[j].booking_details.length; k++) {
            _this.offers.push({
              id: _this.tempOffers[j].booking_details[k].id,
              attachment: _this.tempOffers[j].attachments[0].path,
              title: _this.tempOffers[j].title,
              start_from: _this.tempOffers[j].start_from,
              end_to: _this.tempOffers[j].end_to,
              current_price: _this.tempOffers[j].current_price,
              guests: _this.tempOffers[j].guests,
              confirmation_number: _this.tempOffers[j].booking_details[k].confirmation_number,
              status: _this.tempOffers[j].booking_details[k].status,
              currency: _this.tempOffers[j].currency
            });
          }
        }

        for (var _i = 0; _i < _this.offers.length; _i++) {
          _this.offer0 = _this.offers.filter(function (x) {
            return x.status == 0;
          });
          _this.offer1 = _this.offers.filter(function (x) {
            return x.status == 1;
          });
          _this.offer2 = _this.offers.filter(function (x) {
            return x.status == 2;
          });
        }
      });
      this.dataService.get('host/get-all-disputes').then(function (result) {
        _this.offer3 = result.data;

        for (var i = 0; i < _this.offer3.length; i++) {
          var totalPrice = _this.offer3[i]['offer']['price'];
          var price = totalPrice * (_this.offer3[i]['offer']['discount_of_percentage'] / 100);
          price = totalPrice - price;
          _this.offer3[i]['offer']['current_price'] = price;
        }
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('lock-page');
      body.classList.remove('off-canvas-sidebar');
    }
  }, {
    key: "getBookingDetails",
    value: function getBookingDetails(id) {
      this.router.navigate(['hostportal/bookdetails', id]);
    }
  }, {
    key: "disputeDetails",
    value: function disputeDetails(id) {
      this.router.navigate(['hostportal/disputedetails', id]);
    }
  }]);

  return BookinglistComponent;
}();

BookinglistComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef
  }, {
    type: src_app_services_data_services__WEBPACK_IMPORTED_MODULE_3__.DataService
  }];
};

BookinglistComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-Bookinglist-cmp',
  template: _Bookinglist_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], BookinglistComponent);


/***/ }),

/***/ 45579:
/*!*************************************************************!*\
  !*** ./src/app/Host/Bookinglistt/Bookinglistt.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyErrorStateMatcher": function() { return /* binding */ MyErrorStateMatcher; },
/* harmony export */   "BookinglisttComponent": function() { return /* binding */ BookinglisttComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _Bookinglistt_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bookinglistt.component.html?ngResource */ 93237);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @agm/core */ 61466);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var src_app_services_data_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/data.services */ 7619);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var MyErrorStateMatcher = /*#__PURE__*/function () {
  function MyErrorStateMatcher() {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MyErrorStateMatcher);
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(MyErrorStateMatcher, [{
    key: "isErrorState",
    value: function isErrorState(control, form) {
      var isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
  }]);

  return MyErrorStateMatcher;
}();

var BookinglisttComponent = /*#__PURE__*/function () {
  function BookinglisttComponent(router, formBuilder, cdf, datepipe, _formBuilder, dataService, mapsAPILoader, ngZone) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BookinglisttComponent);

    this.router = router;
    this.formBuilder = formBuilder;
    this.cdf = cdf;
    this.datepipe = datepipe;
    this._formBuilder = _formBuilder;
    this.dataService = dataService;
    this.mapsAPILoader = mapsAPILoader;
    this.ngZone = ngZone;
    this.check = 0;
    this.incval = 0;
    this.incval1 = 0;
    this.incval2 = 0;
    this.incval3 = 0;
    this.incval4 = 0;
    this.incval5 = 0;
    this.incval6 = 0;
    this.discountstep = 0;
    this.itemCounter = 0;
    this.items = [];
    this.user = null;
    this.fileData = null;
    this.equipmentFeatures = null;
    this.languages = null;
    this.showAlert = false;
    this.errorMessage = '';
    this.fileURLs = [];
    this.cities = [{
      value: 'paris-0',
      viewValue: 'Paris'
    }, {
      value: 'miami-1',
      viewValue: 'Miami'
    }, {
      value: 'bucharest-2',
      viewValue: 'Bucharest'
    }, {
      value: 'new-york-3',
      viewValue: 'New York'
    }, {
      value: 'london-4',
      viewValue: 'London'
    }, {
      value: 'barcelona-5',
      viewValue: 'Barcelona'
    }, {
      value: 'moscow-6',
      viewValue: 'Moscow'
    }];
    this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]);
    this.matcher = new MyErrorStateMatcher();
    var today = new Date();
    var month = today.getMonth();
    var year = today.getFullYear();
    this.campaignOne = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      start: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(new Date(year, month, 13)),
      end: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(new Date(year, month, 16))
    });
    this.campaignTwo = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      start: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(new Date(year, month, 15)),
      end: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(new Date(year, month, 19))
    });
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(BookinglisttComponent, [{
    key: "isFieldValid",
    value: function isFieldValid(form, field) {
      return !form.get(field).valid && form.get(field).touched;
    }
  }, {
    key: "displayFieldCss",
    value: function displayFieldCss(form, field) {
      return {
        'has-error': this.isFieldValid(form, field),
        'has-feedback': this.isFieldValid(form, field)
      };
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      var elemMainPanel = document.querySelector('.main-panel');
      this.type = this.formBuilder.group({
        // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
        firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
      }); // Code for the Validator
      // const $validator = $('.card-wizard form').validate({
      //     rules: {
      //         firstname: {
      //             required: true,
      //             minlength: 3
      //         },
      //         lastname: {
      //             required: true,
      //             minlength: 3
      //         },
      //         email: {
      //             required: true,
      //             minlength: 3,
      //         }
      //     },
      //     highlight: function(element) {
      //       $(element).closest('.form-group').removeClass('has-success').addClass('has-danger');
      //     },
      //     success: function(element) {
      //       $(element).closest('.form-group').removeClass('has-danger').addClass('has-success');
      //     },
      //     errorPlacement : function(error, element) {
      //       $(element).append(error);
      //     }
      // });

      if (localStorage.getItem("token") != null && localStorage.getItem('role') == 'host') {
        this.user = 'exists';
      } else {
        this.user = null;
        localStorage.clear();
        this.router.navigate(['/host/home']);
      }

      this.dataService.get('host/get-features').then(function (result) {
        _this.equipmentFeatures = result.data;
      });
      this.dataService.get('host/get-all-languages').then(function (result) {
        _this.languages = result.data;
      });
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('lock-page');
      body.classList.add('off-canvas-sidebar');
      var card = document.getElementsByClassName('card')[0];
      this.offerForm = this._formBuilder.group({
        title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        price: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        files: null,
        guests: 0,
        rooms: 0,
        bathrooms: 0,
        single_bed: 0,
        double_bed: 0,
        large_bed: 0,
        extra_large_bed: 0,
        start_from: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        end_to: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        description: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        lat: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        lan: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        // address: [null,Validators.required],
        // city: [null,Validators.required],
        features: [],
        terms_policies: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        language_ids: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        discount_of_percentage: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        discount_of_booking: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        subsidiary: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        status: true
      });
      var $validator = $('.card-wizard form').validate({
        rules: {
          type: {
            required: true
          },
          price: {
            required: true
          },
          title: {
            required: true
          },
          guests: {
            required: true
          },
          rooms: {
            required: true
          },
          start_from: {
            required: true
          },
          description: {
            required: true
          },
          features: {
            required: true
          },
          terms_policies: {
            required: true
          },
          discount_of_percentage: {
            required: true
          },
          subsidiary: {
            required: true
          }
        },
        highlight: function highlight(element) {
          console.log(1);
          $(element).closest('.form-group').removeClass('has-success').addClass('has-danger');
        },
        success: function success(element) {
          console.log(2);
          $(element).closest('.form-group').removeClass('has-danger').addClass('has-success');
        },
        errorPlacement: function errorPlacement(error, element) {
          console.log(error);
          $(element).append(error);
        }
      });
      this.mapsAPILoader.load().then(function () {
        _this.setCurrentLocation();

        _this.geoCoder = new google.maps.Geocoder();
        var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement);
        autocomplete.addListener("place_changed", function () {
          _this.ngZone.run(function () {
            //get the place result
            var place = autocomplete.getPlace(); //verify result

            if (place.geometry === undefined || place.geometry === null) {
              return;
            } //set latitude, longitude and zoom


            _this.latitude = place.geometry.location.lat();
            _this.longitude = place.geometry.location.lng();
            _this.zoom = 12;
          });
        });
      }); // Wizard Initialization

      $('.card-wizard').bootstrapWizard({
        'tabClass': 'nav nav-pills',
        'nextSelector': '.btn-next',
        'previousSelector': '.btn-previous',
        onNext: function onNext(tab, navigation, index) {
          alert();
          var $valid = $('.card-wizard form').valid();
          console.log($valid);

          if (!$valid) {
            $validator.focusInvalid();
            return false;
          }
        },
        onInit: function onInit(tab, navigation, index) {
          // check number of tabs and fill the entire row
          var $total = navigation.find('li').length;
          var $wizard = navigation.closest('.card-wizard');
          var $first_li = navigation.find('li:first-child a').html();
          var $moving_div = $('<div class="moving-tab">' + $first_li + '</div>');
          $('.card-wizard .wizard-navigation').append($moving_div);
          $total = $wizard.find('.nav li').length;
          var $li_width = 100 / $total;
          var total_steps = $wizard.find('.nav li').length;
          var move_distance = $wizard.width() / total_steps;
          var index_temp = index;
          var vertical_level = 0;
          var mobile_device = $(document).width() < 600 && $total > 3;

          if (mobile_device) {
            move_distance = $wizard.width() / 2;
            index_temp = index % 2;
            $li_width = 50;
          }

          $wizard.find('.nav li').css('width', $li_width + '%');
          var step_width = move_distance;
          move_distance = move_distance * index_temp;
          var $current = index + 1;

          if ($current == 1 || mobile_device == true && index % 2 == 0) {
            move_distance -= 8;
          } else if ($current == total_steps || mobile_device == true && index % 2 == 1) {
            move_distance += 8;
          }

          if (mobile_device) {
            var x = index / 2;
            vertical_level = parseInt(x);
            vertical_level = vertical_level * 38;
          }

          $wizard.find('.moving-tab').css('width', step_width);
          $('.moving-tab').css({
            'transform': 'translate3d(' + move_distance + 'px, ' + vertical_level + 'px, 0)',
            'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'
          });
          $('.moving-tab').css('transition', 'transform 0s');
        },
        onTabClick: function onTabClick(tab, navigation, index) {
          var $total = navigation.find('li').length;
          var $current = index + 1;

          if ($current == 2) {
            if (this.f.type.value == null) {
              return false;
            }
          }

          console.log($('.card-wizard').html());
          var $valid = $('.card-wizard').valid();

          if (!$valid) {
            return false;
          } else {
            return true;
          }
        },
        onTabShow: function onTabShow(tab, navigation, index) {
          var $total = navigation.find('li').length;
          var $current = index + 1; // elemMainPanel.scrollTop = 0;

          var $wizard = navigation.closest('.card-wizard'); // If it's the last tab then hide the last button and show the finish instead

          if ($current >= $total) {
            $($wizard).find('.btn-next').hide();
            $($wizard).find('.btn-finish').show();
          } else {
            $($wizard).find('.btn-next').show();
            $($wizard).find('.btn-finish').hide();
          }

          var button_text = navigation.find('li:nth-child(' + $current + ') a').html();
          setTimeout(function () {
            $('.moving-tab').text(button_text);
          }, 150);
          var checkbox = $('.footer-checkbox');

          if (index !== 0) {
            $(checkbox).css({
              'opacity': '0',
              'visibility': 'hidden',
              'position': 'absolute'
            });
          } else {
            $(checkbox).css({
              'opacity': '1',
              'visibility': 'visible'
            });
          }

          $total = $wizard.find('.nav li').length;
          var $li_width = 100 / $total;
          var total_steps = $wizard.find('.nav li').length;
          var move_distance = $wizard.width() / total_steps;
          var index_temp = index;
          var vertical_level = 0;
          var mobile_device = $(document).width() < 600 && $total > 3;

          if (mobile_device) {
            move_distance = $wizard.width() / 2;
            index_temp = index % 2;
            $li_width = 50;
          }

          $wizard.find('.nav li').css('width', $li_width + '%');
          var step_width = move_distance;
          move_distance = move_distance * index_temp;
          $current = index + 1;

          if ($current == 1 || mobile_device == true && index % 2 == 0) {
            move_distance -= 8;
          } else if ($current == total_steps || mobile_device == true && index % 2 == 1) {
            move_distance += 8;
          }

          if (mobile_device) {
            var x = index / 2;
            vertical_level = parseInt(x);
            vertical_level = vertical_level * 38;
          }

          $wizard.find('.moving-tab').css('width', step_width);
          $('.moving-tab').css({
            'transform': 'translate3d(' + move_distance + 'px, ' + vertical_level + 'px, 0)',
            'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'
          });
        }
      }); // Prepare the preview for profile picture

      $('#wizard-picture').change(function () {
        var input = $(this);

        if (input[0].files && input[0].files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
            $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
          };

          reader.readAsDataURL(input[0].files[0]);
        }
      });
      $('[data-toggle="wizard-radio"]').click(function () {
        var wizard = $(this).closest('.card-wizard');
        wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
        $(this).addClass('active');
        $(wizard).find('[type="radio"]').removeAttr('checked');
        $(this).find('[type="radio"]').attr('checked', 'true');
      });
      $('[data-toggle="wizard-checkbox"]').click(function () {
        if ($(this).hasClass('active')) {
          $(this).removeClass('active');
          $(this).find('[type="checkbox"]').removeAttr('checked');
        } else {
          $(this).addClass('active');
          $(this).find('[type="checkbox"]').attr('checked', 'true');
        }
      });
      $('.set-full-height').css('height', 'auto');
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var input = $(this);

      if (input[0].files && input[0].files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
        };

        reader.readAsDataURL(input[0].files[0]);
      }
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      $(window).resize(function () {
        $('.card-wizard').each(function () {
          var _this2 = this;

          setTimeout(function () {
            var $wizard = $(_this2);
            var index = $wizard.bootstrapWizard('currentIndex');
            var $total = $wizard.find('.nav li').length;
            var $li_width = 100 / $total;
            var total_steps = $wizard.find('.nav li').length;
            var move_distance = $wizard.width() / total_steps;
            var index_temp = index;
            var vertical_level = 0;
            var mobile_device = $(document).width() < 600 && $total > 3;

            if (mobile_device) {
              move_distance = $wizard.width() / 2;
              index_temp = index % 2;
              $li_width = 50;
            }

            $wizard.find('.nav li').css('width', $li_width + '%');
            var step_width = move_distance;
            move_distance = move_distance * index_temp;
            var $current = index + 1;

            if ($current == 1 || mobile_device == true && index % 2 == 0) {
              move_distance -= 8;
            } else if ($current == total_steps || mobile_device == true && index % 2 == 1) {
              move_distance += 8;
            }

            if (mobile_device) {
              var x = index / 2;
              vertical_level = parseInt(x);
              vertical_level = vertical_level * 38;
            }

            $wizard.find('.moving-tab').css('width', step_width);
            $('.moving-tab').css({
              'transform': 'translate3d(' + move_distance + 'px, ' + vertical_level + 'px, 0)',
              'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'
            });
            $('.moving-tab').css({
              'transition': 'transform 0s'
            });
          }, 500);
        });
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('lock-page');
      body.classList.remove('off-canvas-sidebar');
    } //   nexttab() {
    //     this.check += 1;
    //     $('.nav-item > .active').parent().next('li').find('a').trigger('click');
    //   }

  }, {
    key: "slectoffer",
    value: function slectoffer() {
      $('.card').removeClass("slectoffer");
    }
  }, {
    key: "f",
    get: function get() {
      return this.offerForm.controls;
    }
  }, {
    key: "plus",
    value: function plus(val) {
      switch (val) {
        case 0:
          this.incval += 1;
          break;

        case 1:
          this.incval1 += 1;
          break;

        case 2:
          this.incval2 += 1;
          break;

        case 3:
          this.incval3 += 1;
          break;

        case 4:
          this.incval4 += 1;
          break;

        case 5:
          this.incval5 += 1;
          break;

        case 6:
          this.incval6 += 1;
          break;
      }
    }
  }, {
    key: "minus",
    value: function minus(val) {
      switch (val) {
        case 0:
          if (val == 0) {
            if (this.incval > 0) {
              this.incval -= 1;
              break;
            }
          }

        case 1:
          if (val == 1) {
            if (this.incval1 > 0) {
              this.incval1 -= 1;
              break;
            }
          }

        case 2:
          if (val == 2) {
            if (this.incval2 > 0) {
              this.incval2 -= 1;
              break;
            }
          }

        case 3:
          if (val == 3) {
            if (this.incval3 > 0) {
              this.incval3 -= 1;
              break;
            }
          }

        case 4:
          if (val == 4) {
            if (this.incval4 > 0) {
              this.incval4 -= 1;
              break;
            }
          }

        case 5:
          if (val == 5) {
            if (this.incval5 > 0) {
              this.incval5 -= 1;
              break;
            }
          }

        case 6:
          if (val == 6) {
            if (this.incval6 > 0) {
              this.incval6 -= 1;
              break;
            }
          }

      }
    }
  }, {
    key: "publish",
    value: function publish() {
      var _this3 = this;

      $('#createBtn').prop('disabled', true);
      this.showAlert = false;
      var feature_ids = [];
      $('.features').each(function () {
        if ($(this).is(":checked")) {
          feature_ids.push($(this).attr('name'));
        }
      });
      var language_ids = [];
      $('.languages').each(function () {
        if ($(this).is(":checked")) {
          language_ids.push($(this).val());
        }
      });
      var formData = this.offerForm.getRawValue();
      var status = null;

      if (formData.status == true) {
        status = 1;
      } else {
        status = 0;
      }

      if (this.offerForm.invalid) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
          position: 'center',
          icon: 'error',
          text: 'Please Fill All Required Fields',
          showConfirmButton: false,
          timer: 2500
        });
        $('#createBtn').prop('disabled', false);
        this.cdf.detectChanges();
        return;
      }

      var data = {
        title: formData.title,
        type: formData.type,
        price: formData.price,
        files: this.fileURLs,
        guests: this.incval,
        rooms: this.incval6,
        bathrooms: this.incval1,
        single_bed: this.incval2,
        double_bed: this.incval3,
        large_bed: this.incval4,
        extra_large_bed: this.incval5,
        start_from: this.datepipe.transform(this.campaignOne.controls['start'].value, 'yyyy-MM-dd'),
        end_to: this.datepipe.transform(this.campaignOne.controls['end'].value, 'yyyy-MM-dd'),
        description: formData.description,
        lat: this.latitude.toString(),
        lan: this.longitude.toString(),
        address: $('#address').val(),
        city: $('#city').val(),
        features: feature_ids,
        terms_policies: formData.terms_policies,
        language_ids: language_ids,
        discount_of_percentage: formData.discount_of_percentage,
        discount_of_booking: formData.discount_of_booking,
        subsidiary: formData.subsidiary,
        status: status,
        currency: $('#currency').val()
      };
      this.dataService.post('host/create-ad', data).then(function (result) {
        if (result.success == true) {
          if (result.message == 'Already 5 ads has been uploaded with this account') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
              position: 'center',
              icon: 'error',
              text: result.message,
              showConfirmButton: false,
              timer: 2500
            });

            _this3.cdf.detectChanges();
          } else {
            _this3.showAlert = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
              position: 'center',
              icon: 'success',
              title: 'Success',
              showConfirmButton: false,
              timer: 2500
            });

            _this3.router.navigate(['hostportal/offerlist']);
          }
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            position: 'center',
            icon: 'error',
            text: result.message,
            showConfirmButton: false,
            timer: 2500
          });

          _this3.cdf.detectChanges();
        }

        _this3.cdf.detectChanges();
      }, function (error) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
          position: 'center',
          icon: 'error',
          text: 'Something went wrong. Please try again.',
          showConfirmButton: false,
          timer: 2500
        });

        _this3.cdf.detectChanges();
      });
    }
  }, {
    key: "upload",
    value: function upload() {
      $('#inputhidden').click();
    }
  }, {
    key: "uploadImages",
    value: function uploadImages() {
      var _this4 = this;

      this.fileData = $('#inputhidden').prop('files');
      this.itemCounter = this.fileData.length;
      var reader = new FileReader();

      var _loop = function _loop(i) {
        var file = _this4.fileData[i];
        var img = new Image();
        img.src = window.URL.createObjectURL(file);
        reader.readAsDataURL(file);

        reader.onload = function () {
          setTimeout(function () {
            var width = img.naturalWidth;
            var height = img.naturalHeight;
            window.URL.revokeObjectURL(img.src);

            if (width <= 500 && height <= 500) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                position: 'center',
                icon: 'error',
                text: 'Photo should be atleast 500 x 500 size',
                showConfirmButton: false,
                timer: 2500
              });

              _this4.cdf.detectChanges();

              return;
            }

            var data = new FormData();
            data.append('file', _this4.fileData[i]);

            _this4.dataService.post('host/upload-attachment', data).then(function (result) {
              _this4.fileURLs.push({
                'type': 'image',
                'path': result.data,
                'caption': ''
              });

              _this4.cdf.detectChanges();
            }, function (error) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                position: 'center',
                icon: 'error',
                text: 'Something went wrong. Please try again.',
                showConfirmButton: false,
                timer: 2500
              });

              _this4.cdf.detectChanges();
            });

            _this4.items.push({
              'src': URL.createObjectURL(_this4.fileData[i]),
              'name': _this4.fileData[i].name,
              'id': i
            });
          }, 2000);
        };
      };

      for (var i = 0; i < this.fileData.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "setCaption",
    value: function setCaption(val) {
      this.fileURLs[val]['caption'] = $('#img' + val).val();
    }
  }, {
    key: "removePicture",
    value: function removePicture(index) {
      $('.uploadImage' + index).remove();
      this.cdf.detectChanges();
    }
  }, {
    key: "setCurrentLocation",
    value: function setCurrentLocation() {
      var _this5 = this;

      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
          _this5.latitude = position.coords.latitude;
          _this5.longitude = position.coords.longitude;
          _this5.zoom = 8;

          _this5.getAddress(_this5.latitude, _this5.longitude);
        });
      }
    }
  }, {
    key: "markerDragEnd",
    value: function markerDragEnd($event) {
      this.latitude = $event.latLng.lat();
      this.longitude = $event.latLng.lng();
      this.getAddress(this.latitude, this.longitude);
      this.cdf.detectChanges();
    }
  }, {
    key: "getAddress",
    value: function getAddress(latitude, longitude) {
      var _this6 = this;

      this.geoCoder.geocode({
        'location': {
          lat: latitude,
          lng: longitude
        }
      }, function (results, status) {
        if (status === 'OK') {
          if (results[0]) {
            _this6.zoom = 12;
            _this6.address = results[0].formatted_address;
            $('#address').val(_this6.address);
            var add = results[1].formatted_address;
            var value = add.split(",");
            var count = value.length;
            var city = value[count - 3];
            city = city.trim();
            $('#city').val(city);

            _this6.cdf.detectChanges();
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      });
    }
  }, {
    key: "back",
    value: function back() {
      this.router.navigate(['hostportal/offerlist']);
    }
  }, {
    key: "status",
    value: function status() {
      if ($('#statusVal').is(':checked')) {
        $('#createBtn').prop('disabled', false);
      } else {
        $('#createBtn').prop('disabled', true);
      }
    }
  }]);

  return BookinglisttComponent;
}();

BookinglisttComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
  }, {
    type: src_app_services_data_services__WEBPACK_IMPORTED_MODULE_3__.DataService
  }, {
    type: _agm_core__WEBPACK_IMPORTED_MODULE_9__.MapsAPILoader
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
  }];
};

BookinglisttComponent.propDecorators = {
  offerNgForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: ['offerNgForm']
  }],
  searchElementRef: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: ['search']
  }]
};
BookinglisttComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-Bookinglistt-cmp',
  template: _Bookinglistt_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ //styleUrls: ['Bookinglistt.component.css']

})], BookinglisttComponent);


/***/ }),

/***/ 63226:
/*!***********************************************************!*\
  !*** ./src/app/Host/Createoffer/Createoffer.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateofferComponent": function() { return /* binding */ CreateofferComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _Createoffer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Createoffer.component.html?ngResource */ 7711);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @agm/core */ 61466);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var src_app_services_data_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/data.services */ 7619);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CreateofferComponent = /*#__PURE__*/function () {
  function CreateofferComponent(router, cdf, datepipe, _formBuilder, dataService, mapsAPILoader, ngZone) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CreateofferComponent);

    this.router = router;
    this.cdf = cdf;
    this.datepipe = datepipe;
    this._formBuilder = _formBuilder;
    this.dataService = dataService;
    this.mapsAPILoader = mapsAPILoader;
    this.ngZone = ngZone;
    this.check = 0;
    this.incval = 0;
    this.incval1 = 0;
    this.incval2 = 0;
    this.incval3 = 0;
    this.incval4 = 0;
    this.incval5 = 0;
    this.incval6 = 0;
    this.discountstep = 0;
    this.itemCounter = 0;
    this.items = [];
    this.user = null;
    this.fileData = null;
    this.equipmentFeatures = null;
    this.languages = null;
    this.showAlert = false;
    this.errorMessage = '';
    this.fileURLs = [];
    var today = new Date();
    var month = today.getMonth();
    var year = today.getFullYear();
    this.campaignOne = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      start: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(new Date(year, month, 13)),
      end: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(new Date(year, month, 16))
    });
    this.campaignTwo = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      start: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(new Date(year, month, 15)),
      end: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(new Date(year, month, 19))
    });
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CreateofferComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      if (localStorage.getItem("token") != null && localStorage.getItem('role') == 'host') {
        this.user = 'exists';
      } else {
        this.user = null;
        localStorage.clear();
        this.router.navigate(['/host/home']);
      }

      this.dataService.get('host/get-features').then(function (result) {
        _this.equipmentFeatures = result.data;
      });
      this.dataService.get('host/get-all-languages').then(function (result) {
        _this.languages = result.data;
      });
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('lock-page');
      body.classList.add('off-canvas-sidebar');
      var card = document.getElementsByClassName('card')[0];
      this.offerForm = this._formBuilder.group({
        title: null,
        type: null,
        price: null,
        files: null,
        guests: 0,
        rooms: 0,
        bathrooms: 0,
        single_bed: 0,
        double_bed: 0,
        large_bed: 0,
        extra_large_bed: 0,
        start_from: null,
        end_to: null,
        description: null,
        lat: null,
        lan: null,
        // address:null,
        // city:null,
        features: [],
        terms_policies: null,
        language_ids: null,
        discount_of_percentage: null,
        discount_of_booking: null,
        subsidiary: null,
        status: true
      });
      this.setformval(); //   const $validator = $('.card-wizard form').validate({
      //     rules: {
      //       type: {
      //             required: true,
      //         },
      //         price: {
      //             required: true,
      //         },
      //         title:{
      //           required: true,
      //         },
      //         guests: {
      //       required: true,
      //   },
      //   rooms: {
      //       required: true,
      //   },
      //   start_from: {
      //       required: true,
      //   },
      //   description: {
      //       required: true,
      //   },
      //   features: {
      //       required: true,
      //   },
      //   terms_policies: {
      //       required: true,
      //   },
      //   discount_of_percentage: {
      //       required: true,
      //   },
      //   subsidiary: {
      //       required: true,
      //   },
      //     },
      //     highlight: function(element) {
      //       $(element).closest('.form-group').removeClass('has-success').addClass('has-danger');
      //     },
      //     success: function(element) {
      //       $(element).closest('.form-group').removeClass('has-danger').addClass('has-success');
      //     },
      //     errorPlacement : function(error, element) {
      //       $(element).append(error);
      //     }
      // });

      this.mapsAPILoader.load().then(function () {
        _this.setCurrentLocation();

        _this.geoCoder = new google.maps.Geocoder();
        var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement);
        autocomplete.addListener("place_changed", function () {
          _this.ngZone.run(function () {
            //get the place result
            var place = autocomplete.getPlace(); //verify result

            if (place.geometry === undefined || place.geometry === null) {
              return;
            } //set latitude, longitude and zoom


            _this.latitude = place.geometry.location.lat();
            _this.longitude = place.geometry.location.lng();
            _this.zoom = 12;
          });
        });
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('lock-page');
      body.classList.remove('off-canvas-sidebar');
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {}
  }, {
    key: "nexttab",
    value: function nexttab() {
      this.check += 1;
      $('.nav-item > .active').parent().next('li').find('a').trigger('click');
    }
  }, {
    key: "slectoffer",
    value: function slectoffer() {
      $('.card').removeClass("slectoffer");
    }
  }, {
    key: "plus",
    value: function plus(val) {
      switch (val) {
        case 0:
          this.incval += 1;
          break;

        case 1:
          this.incval1 += 1;
          break;

        case 2:
          this.incval2 += 1;
          break;

        case 3:
          this.incval3 += 1;
          break;

        case 4:
          this.incval4 += 1;
          break;

        case 5:
          this.incval5 += 1;
          break;

        case 6:
          this.incval6 += 1;
          break;
      }
    }
  }, {
    key: "minus",
    value: function minus(val) {
      switch (val) {
        case 0:
          if (val == 0) {
            if (this.incval > 0) {
              this.incval -= 1;
              break;
            }
          }

        case 1:
          if (val == 1) {
            if (this.incval1 > 0) {
              this.incval1 -= 1;
              break;
            }
          }

        case 2:
          if (val == 2) {
            if (this.incval2 > 0) {
              this.incval2 -= 1;
              break;
            }
          }

        case 3:
          if (val == 3) {
            if (this.incval3 > 0) {
              this.incval3 -= 1;
              break;
            }
          }

        case 4:
          if (val == 4) {
            if (this.incval4 > 0) {
              this.incval4 -= 1;
              break;
            }
          }

        case 5:
          if (val == 5) {
            if (this.incval5 > 0) {
              this.incval5 -= 1;
              break;
            }
          }

        case 6:
          if (val == 6) {
            if (this.incval6 > 0) {
              this.incval6 -= 1;
              break;
            }
          }

      }
    }
  }, {
    key: "publish",
    value: function publish() {
      var _this2 = this;

      $('#createBtn').prop('disabled', true);
      this.showAlert = false;
      var feature_ids = [];
      $('.features').each(function () {
        if ($(this).is(":checked")) {
          feature_ids.push($(this).attr('name'));
        }
      });
      var language_ids = [];
      $('.languages').each(function () {
        if ($(this).is(":checked")) {
          language_ids.push($(this).val());
        }
      });
      var formData = this.offerForm.getRawValue();
      var status = null;

      if (formData.status == true) {
        status = 1;
      } else {
        status = 0;
      }

      if (this.offerForm.invalid) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
          position: 'center',
          icon: 'error',
          text: 'Please Fill All Required Fields',
          showConfirmButton: false,
          timer: 2500
        });
        $('#createBtn').prop('disabled', false);
        this.cdf.detectChanges();
        return;
      }

      var data = {
        title: formData.title,
        type: formData.type,
        price: formData.price,
        files: this.fileURLs,
        guests: this.incval,
        rooms: this.incval6,
        bathrooms: this.incval1,
        single_bed: this.incval2,
        double_bed: this.incval3,
        large_bed: this.incval4,
        extra_large_bed: this.incval5,
        start_from: this.datepipe.transform(this.campaignOne.controls['start'].value, 'yyyy-MM-dd'),
        end_to: this.datepipe.transform(this.campaignOne.controls['end'].value, 'yyyy-MM-dd'),
        description: formData.description,
        lat: this.latitude.toString(),
        lan: this.longitude.toString(),
        address: $('#address').val(),
        city: $('#city').val(),
        features: feature_ids,
        terms_policies: formData.terms_policies,
        language_ids: language_ids,
        discount_of_percentage: formData.discount_of_percentage,
        discount_of_booking: formData.discount_of_booking,
        subsidiary: formData.subsidiary,
        status: status,
        currency: $('#currency').val()
      };
      this.dataService.post('host/create-ad', data).then(function (result) {
        if (result.success == true) {
          _this2.clearstorage();

          if (result.message == 'Already 5 ads has been uploaded with this account') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
              position: 'center',
              icon: 'error',
              text: result.message,
              showConfirmButton: false,
              timer: 2500
            });

            _this2.cdf.detectChanges();
          } else {
            _this2.showAlert = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
              position: 'center',
              icon: 'success',
              title: 'Success',
              showConfirmButton: false,
              timer: 2500
            });

            _this2.router.navigate(['hostportal/offerlist']);
          }
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            position: 'center',
            icon: 'error',
            text: result.message,
            showConfirmButton: false,
            timer: 2500
          });

          _this2.cdf.detectChanges();
        }

        _this2.cdf.detectChanges();
      }, function (error) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
          position: 'center',
          icon: 'error',
          text: 'Something went wrong. Please try again.',
          showConfirmButton: false,
          timer: 2500
        });

        _this2.cdf.detectChanges();
      });
    }
  }, {
    key: "upload",
    value: function upload() {
      $('#inputhidden').click();
    }
  }, {
    key: "uploadImages",
    value: function uploadImages() {
      var _this3 = this;

      this.fileData = $('#inputhidden').prop('files');
      this.itemCounter = this.fileData.length;
      var reader = new FileReader();

      var _loop = function _loop(i) {
        var file = _this3.fileData[i];
        var img = new Image();
        img.src = window.URL.createObjectURL(file);
        reader.readAsDataURL(file);

        reader.onload = function () {
          setTimeout(function () {
            var width = img.naturalWidth;
            var height = img.naturalHeight;
            window.URL.revokeObjectURL(img.src);

            if (width <= 500 && height <= 500) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                position: 'center',
                icon: 'error',
                text: 'Photo should be atleast 500 x 500 size',
                showConfirmButton: false,
                timer: 2500
              });

              _this3.cdf.detectChanges();

              return;
            }

            var data = new FormData();
            data.append('file', _this3.fileData[i]);

            _this3.dataService.post('host/upload-attachment', data).then(function (result) {
              _this3.fileURLs.push({
                'type': 'image',
                'path': result.data,
                'caption': ''
              });

              _this3.cdf.detectChanges();
            }, function (error) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                position: 'center',
                icon: 'error',
                text: 'Something went wrong. Please try again.',
                showConfirmButton: false,
                timer: 2500
              });

              _this3.cdf.detectChanges();
            });

            _this3.items.push({
              'src': URL.createObjectURL(_this3.fileData[i]),
              'name': _this3.fileData[i].name,
              'id': i
            });
          }, 2000);
        };
      };

      for (var i = 0; i < this.fileData.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "setCaption",
    value: function setCaption(val) {
      this.fileURLs[val]['caption'] = $('#img' + val).val();
    }
  }, {
    key: "removePicture",
    value: function removePicture(index) {
      $('.uploadImage' + index).remove();
      this.cdf.detectChanges();
    }
  }, {
    key: "setCurrentLocation",
    value: function setCurrentLocation() {
      var _this4 = this;

      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
          _this4.latitude = position.coords.latitude;
          _this4.longitude = position.coords.longitude;
          _this4.zoom = 8;

          _this4.getAddress(_this4.latitude, _this4.longitude);
        });
      }
    }
  }, {
    key: "markerDragEnd",
    value: function markerDragEnd($event) {
      this.latitude = $event.latLng.lat();
      this.longitude = $event.latLng.lng();
      this.getAddress(this.latitude, this.longitude);
      this.cdf.detectChanges();
    }
  }, {
    key: "getAddress",
    value: function getAddress(latitude, longitude) {
      var _this5 = this;

      this.geoCoder.geocode({
        'location': {
          lat: latitude,
          lng: longitude
        }
      }, function (results, status) {
        if (status === 'OK') {
          if (results[0]) {
            _this5.zoom = 12;
            _this5.address = results[0].formatted_address;
            $('#address').val(_this5.address);
            var add = results[1].formatted_address;
            var value = add.split(",");
            var count = value.length;
            var city = value[count - 3];
            city = city.trim();
            $('#city').val(city);

            _this5.cdf.detectChanges();
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      });
    }
  }, {
    key: "back",
    value: function back() {
      this.router.navigate(['hostportal/offerlist']);
    }
  }, {
    key: "status",
    value: function status() {
      if ($('#statusVal').is(':checked')) {
        $('#createBtn').prop('disabled', false);
      } else {
        $('#createBtn').prop('disabled', true);
      }
    } ///local storage set

  }, {
    key: "setformval",
    value: function setformval() {
      this.offerForm.controls.title.setValue(localStorage.getItem("title"));
      this.offerForm.controls.type.setValue(localStorage.getItem("type"));
      this.offerForm.controls.description.setValue(localStorage.getItem("description"));
      this.offerForm.controls.price.setValue(localStorage.getItem("price"));
      $('#currency').val(localStorage.getItem("currency"));
      this.offerForm.controls.terms_policies.setValue(localStorage.getItem("terms_policies"));
      this.offerForm.controls.discount_of_percentage.setValue(localStorage.getItem("discount_of_percentage"));
      this.offerForm.controls.discount_of_booking.setValue(localStorage.getItem("discount_of_booking"));
      this.offerForm.controls.subsidiary.setValue(localStorage.getItem("subsidiary"));

      if (localStorage.getItem("start") == null) {
        return;
      }

      var newstartdate = new Date(localStorage.getItem("start"));
      var newenddate = new Date(localStorage.getItem("end"));

      if (newstartdate != null && newenddate != null) {
        this.campaignOne.controls['start'].setValue(newstartdate);
        this.campaignOne.controls['end'].setValue(newenddate);
      } // this.campaignOne.controls.start.setValue(localStorage.getItem("start"));
      // this.campaignOne.controls.end.setValue(localStorage.getItem("end"));

    }
  }, {
    key: "clearstorage",
    value: function clearstorage() {
      localStorage.setItem("title", '');
      localStorage.setItem("type", '');
      localStorage.setItem("description", '');
      localStorage.setItem("price", '');
      localStorage.setItem("currency", '');
      localStorage.setItem("terms_policies", '');
      localStorage.setItem("terms_policies", '');
      localStorage.setItem("discount_of_percentage", '');
      localStorage.setItem("discount_of_booking", '');
      localStorage.setItem("subsidiary", '');
      localStorage.setItem("start", '');
      localStorage.setItem("end", '');
    }
  }, {
    key: "currency",
    value: function currency(e) {
      localStorage.setItem("currency", e);
    }
  }, {
    key: "onkeyup",
    value: function onkeyup($event, val) {
      if (val == 1) {
        localStorage.setItem("title", $event);
      } else if (val == 2) {
        localStorage.setItem("type", $event);
      } else if (val == 3) {
        localStorage.setItem("currency", $event);
      } else if (val == 4) {
        localStorage.setItem("price", $event);
      } else if (val == 5) {
        localStorage.setItem("description", $event);
      } else if (val == 7) {
        localStorage.setItem("terms_policies", $event);
      } else if (val == 8) {
        localStorage.setItem("discount_of_percentage", $event);
      } else if (val == 9) {
        localStorage.setItem("discount_of_booking", $event);
      } else if (val == 10) {
        localStorage.setItem("subsidiary", $event);
      }

      localStorage.setItem("start", this.campaignOne.controls['start'].value);
      localStorage.setItem("end", this.campaignOne.controls['end'].value);
    }
  }]);

  return CreateofferComponent;
}();

CreateofferComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
  }, {
    type: src_app_services_data_services__WEBPACK_IMPORTED_MODULE_3__.DataService
  }, {
    type: _agm_core__WEBPACK_IMPORTED_MODULE_9__.MapsAPILoader
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
  }];
};

CreateofferComponent.propDecorators = {
  offerNgForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: ['offerNgForm']
  }],
  searchElementRef: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: ['search']
  }]
};
CreateofferComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-Createoffer-cmp',
  template: _Createoffer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], CreateofferComponent);


/***/ }),

/***/ 74298:
/*!*******************************************************!*\
  !*** ./src/app/Host/EditOffer/EditOffer.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditOfferComponent": function() { return /* binding */ EditOfferComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _EditOffer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditOffer.component.html?ngResource */ 11831);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @agm/core */ 61466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var src_app_services_data_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/data.services */ 7619);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var EditOfferComponent = /*#__PURE__*/function () {
  function EditOfferComponent(router, cdf, datepipe, routers, mapsAPILoader, ngZone, _formBuilder, dataService) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EditOfferComponent);

    this.router = router;
    this.cdf = cdf;
    this.datepipe = datepipe;
    this.routers = routers;
    this.mapsAPILoader = mapsAPILoader;
    this.ngZone = ngZone;
    this._formBuilder = _formBuilder;
    this.dataService = dataService;
    this.check = 0;
    this.incval = 0;
    this.incval1 = 0;
    this.incval2 = 0;
    this.incval3 = 0;
    this.incval4 = 0;
    this.incval5 = 0;
    this.incval6 = 0;
    this.discountstep = 0;
    this.itemCounter = 0;
    this.items = [];
    this.user = null;
    this.fileData = null;
    this.equipmentFeatures = null;
    this.languages = null;
    this.showAlert = false;
    this.errorMessage = '';
    this.fileURLs = [];
    this.sub = null;
    this.id = null;
    this.details = [];
    this.imageCheck = 0;
    this.ad_id = null;
    this.map = 0;
    var today = new Date();
    var month = today.getMonth();
    var year = today.getFullYear();
    this.campaignOne = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      start: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(new Date(year, month, 13)),
      end: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(new Date(year, month, 16))
    });
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(EditOfferComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      if (localStorage.getItem("token") != null && localStorage.getItem('role') == 'host') {
        this.user = 'exists';
      } else {
        this.user = null;
        localStorage.clear();
        this.router.navigate(['/host/home']);
      }

      this.dataService.get('host/get-features').then(function (result) {
        _this.equipmentFeatures = result.data;
      });
      this.dataService.get('host/get-all-languages').then(function (result) {
        _this.languages = result.data;
      });
      this.editForm = this._formBuilder.group({
        title: null,
        type: null,
        price: null,
        files: null,
        guests: 0,
        rooms: 0,
        bathrooms: 0,
        single_bed: 0,
        double_bed: 0,
        large_bed: 0,
        extra_large_bed: 0,
        start_from: null,
        end_to: null,
        description: null,
        lat: null,
        lan: null,
        address: null,
        city: null,
        features: [],
        terms_policies: null,
        language_ids: null,
        discount_of_percentage: null,
        discount_of_booking: null,
        subsidiary: null,
        status: null
      });
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('lock-page');
      body.classList.add('off-canvas-sidebar');
      var card = document.getElementsByClassName('card')[0];
      this.sub = this.routers.params.subscribe(function (params) {
        _this.id = params['id'];
      });
      var data = {
        id: this.id
      };
      this.dataService.post('host/get-ad-by-id', data).then(function (result) {
        _this.details = result.data[0];
        _this.ad_id = _this.details['id'];

        _this.editForm.controls['title'].setValue(_this.details['title']);

        _this.editForm.controls['type'].setValue(_this.details['type']);

        _this.editForm.controls['price'].setValue(_this.details['price']);

        _this.editForm.controls['description'].setValue(_this.details['description']);

        _this.editForm.controls['terms_policies'].setValue(_this.details['terms_policies']);

        _this.editForm.controls['status'].setValue(_this.details['status']);

        _this.editForm.controls['discount_of_percentage'].setValue(_this.details['discount_of_percentage']);

        _this.editForm.controls['discount_of_booking'].setValue(_this.details['discount_of_booking']);

        _this.editForm.controls['subsidiary'].setValue(_this.details['subsidiary']);

        _this.editForm.controls['address'].setValue(_this.details['address']);

        $('#address').val(_this.details['address']);

        _this.editForm.controls['city'].setValue(_this.details['city']);

        $('#city').val(_this.details['city']);

        _this.editForm.controls['lat'].setValue(_this.details['lat']);

        _this.latitude = parseFloat(_this.details['lat']);

        _this.editForm.controls['lan'].setValue(_this.details['lan']);

        _this.longitude = parseFloat(_this.details['lan']);
        $('#currency').val(_this.details['currency']);
        _this.currency1 = _this.details['currency'];

        _this.editForm.controls['start_from'].setValue(_this.details['start_from']);

        _this.editForm.controls['end_to'].setValue(_this.details['end_to']);

        _this.campaignOne.controls['start'].setValue(_this.details['start_from']);

        _this.campaignOne.controls['end'].setValue(_this.details['end_to']);

        _this.editForm.controls['guests'].setValue(_this.details['guests']);

        _this.incval = _this.details['guests'];

        _this.editForm.controls['rooms'].setValue(_this.details['rooms']);

        _this.incval6 = _this.details['rooms'];

        _this.editForm.controls['bathrooms'].setValue(_this.details['bathrooms']);

        _this.incval1 = _this.details['bathrooms'];

        _this.editForm.controls['single_bed'].setValue(_this.details['single_bed']);

        _this.incval2 = _this.details['single_bed'];

        _this.editForm.controls['double_bed'].setValue(_this.details['double_bed']);

        _this.incval3 = _this.details['double_bed'];

        _this.editForm.controls['large_bed'].setValue(_this.details['large_bed']);

        _this.incval4 = _this.details['large_bed'];

        _this.editForm.controls['extra_large_bed'].setValue(_this.details['extra_large_bed']);

        _this.incval5 = _this.details['extra_large_bed']; //features formcontrol will be managed directly when updating

        _this.editForm.controls['language_ids'].setValue(_this.details['languages']);

        var j = 1;

        do {
          _this.dataService.get('host/get-all-languages').then(function (result) {
            var langList = result.data;

            if (_this.details['languages'] != null) {
              for (var i = 0; i < langList.length; i++) {
                if (_this.details['languages'][i]['lang_id'] == langList[i]['id']) {
                  $('#lang' + (i + 1)).prop('checked', true);
                }
              }
            }
          });

          _this.dataService.get('host/get-features').then(function (result) {
            var eFeatures = result.data;

            for (var i = 0; i < eFeatures.length; i++) {
              if (_this.details['features'][i]['feature_id'] == eFeatures[i]['id']) {
                $('input[name="feature' + (i + 1) + '"]').prop('checked', true);
              }
            }
          });

          for (var k = 0; k < _this.details['attachments'].length; k++) {
            _this.fileURLs.push({
              'type': 'image',
              'path': _this.details['attachments'][k]['path'],
              'caption': _this.details['attachments'][k]['caption']
            });
          }
        } while (j < 1);
      });
      this.mapsAPILoader.load().then(function () {
        _this.geoCoder = new google.maps.Geocoder();

        if (_this.map == 0) {
          _this.longitude = parseFloat(_this.details['lan']);
          _this.latitude = parseFloat(_this.details['lat']);
          _this.zoom = 8;
          _this.map = 1;
        } else {
          _this.setCurrentLocation();

          _this.geoCoder = new google.maps.Geocoder();
          var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement);
          autocomplete.addListener("place_changed", function () {
            _this.ngZone.run(function () {
              //get the place result
              var place = autocomplete.getPlace(); //verify result

              if (place.geometry === undefined || place.geometry === null) {
                return;
              } //set latitude, longitude and zoom


              _this.latitude = place.geometry.location.lat();
              _this.longitude = place.geometry.location.lng();
              _this.zoom = 12;
            });
          });
        }
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('lock-page');
      body.classList.remove('off-canvas-sidebar');
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {}
  }, {
    key: "nexttab",
    value: function nexttab() {
      this.check += 1;
      $('.nav-item > .active').parent().next('li').find('a').trigger('click');
    }
  }, {
    key: "slectoffer",
    value: function slectoffer() {
      $('.card').removeClass("slectoffer");
    }
  }, {
    key: "plus",
    value: function plus(val) {
      switch (val) {
        case 0:
          this.incval += 1;
          break;

        case 1:
          this.incval1 += 1;
          break;

        case 2:
          this.incval2 += 1;
          break;

        case 3:
          this.incval3 += 1;
          break;

        case 4:
          this.incval4 += 1;
          break;

        case 5:
          this.incval5 += 1;
          break;

        case 6:
          this.incval6 += 1;
          break;
      }
    }
  }, {
    key: "minus",
    value: function minus(val) {
      switch (val) {
        case 0:
          if (val == 0) {
            if (this.incval > 0) {
              this.incval -= 1;
              break;
            }
          }

        case 1:
          if (val == 1) {
            if (this.incval1 > 0) {
              this.incval1 -= 1;
              break;
            }
          }

        case 2:
          if (val == 2) {
            if (this.incval2 > 0) {
              this.incval2 -= 1;
              break;
            }
          }

        case 3:
          if (val == 3) {
            if (this.incval3 > 0) {
              this.incval3 -= 1;
              break;
            }
          }

        case 4:
          if (val == 4) {
            if (this.incval4 > 0) {
              this.incval4 -= 1;
              break;
            }
          }

        case 5:
          if (val == 5) {
            if (this.incval5 > 0) {
              this.incval5 -= 1;
              break;
            }
          }

        case 6:
          if (val == 6) {
            if (this.incval6 > 0) {
              this.incval6 -= 1;
              break;
            }
          }

      }
    }
  }, {
    key: "update",
    value: function update() {
      var _this2 = this;

      $('#updateBtn').prop('disabled', true);
      this.showAlert = false;
      var feature_ids = [];
      $('.features').each(function () {
        var temp = $(this).attr('name');
        temp = temp.replace('feature', '');

        if ($(this).is(":checked")) {
          feature_ids.push(temp);
        }
      });
      var language_ids = [];
      $('.languages').each(function () {
        if ($(this).is(":checked")) {
          language_ids.push($(this).val());
        }
      });

      if (this.editForm.invalid) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
          position: 'center',
          icon: 'error',
          text: 'Please Fill All Required Fields',
          showConfirmButton: false,
          timer: 2500
        });
        $('#updateBtn').prop('disabled', false);
        this.cdf.detectChanges();
      }

      var formData = this.editForm.getRawValue();
      var status = null;

      if (formData.status == true) {
        status = 1;
      } else {
        status = 0;
      }

      var data = {
        id: this.ad_id,
        title: formData.title,
        type: formData.type,
        price: formData.price,
        files: this.fileURLs,
        guests: this.incval,
        rooms: this.incval6,
        bathrooms: this.incval1,
        single_bed: this.incval2,
        double_bed: this.incval3,
        large_bed: this.incval4,
        extra_large_bed: this.incval5,
        start_from: this.datepipe.transform(this.campaignOne.controls['start'].value, 'yyyy-MM-dd'),
        end_to: this.datepipe.transform(this.campaignOne.controls['end'].value, 'yyyy-MM-dd'),
        description: formData.description,
        lat: this.latitude.toString(),
        lan: this.longitude.toString(),
        address: $('#address').val(),
        city: $('#city').val(),
        features: feature_ids,
        terms_policies: formData.terms_policies,
        language_ids: language_ids,
        discount_of_percentage: formData.discount_of_percentage,
        discount_of_booking: formData.discount_of_booking,
        subsidiary: formData.subsidiary,
        status: status,
        currency: $('#currency').val()
      };
      this.dataService.post('host/edit-ad', data).then(function (result) {
        if (result.success == true) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            position: 'center',
            icon: 'success',
            title: 'Success',
            showConfirmButton: false,
            timer: 2500
          });

          _this2.router.navigate(['hostportal/offerlist']);
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            position: 'center',
            icon: 'error',
            text: result.message,
            showConfirmButton: false,
            timer: 2500
          });

          _this2.cdf.detectChanges();
        }

        _this2.cdf.detectChanges();
      }, function (error) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
          position: 'center',
          icon: 'error',
          text: 'Something went wrong. Pelase try again.',
          showConfirmButton: false,
          timer: 2500
        });

        _this2.cdf.detectChanges();
      });
    }
  }, {
    key: "upload",
    value: function upload() {
      $('#inputhidden').click();
    }
  }, {
    key: "uploadImages",
    value: function uploadImages() {
      var _this3 = this;

      this.fileData = $('#inputhidden').prop('files');
      this.itemCounter = this.fileData.length;
      var reader = new FileReader();

      var _loop = function _loop(i) {
        var file = _this3.fileData[i];
        var img = new Image();
        img.src = window.URL.createObjectURL(file);
        reader.readAsDataURL(file);

        reader.onload = function () {
          setTimeout(function () {
            var width = img.naturalWidth;
            var height = img.naturalHeight;
            window.URL.revokeObjectURL(img.src);

            if (width <= 500 && height <= 500) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                position: 'center',
                icon: 'error',
                text: 'Photo should be atleast 500 x 500 size',
                showConfirmButton: false,
                timer: 2500
              });

              _this3.cdf.detectChanges();

              return;
            }

            var data = new FormData();
            data.append('file', _this3.fileData[i]);

            _this3.dataService.post('host/upload-attachment', data).then(function (result) {
              _this3.fileURLs.push({
                'type': 'image',
                'path': result.data,
                'caption': ''
              });

              _this3.cdf.detectChanges();
            }, function (error) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                position: 'center',
                icon: 'error',
                text: 'Something went wrong. Please try again.',
                showConfirmButton: false,
                timer: 2500
              });

              _this3.cdf.detectChanges();
            });

            _this3.items.push({
              'src': URL.createObjectURL(_this3.fileData[i]),
              'name': _this3.fileData[i].name,
              'id': i
            });
          }, 2000);
        };
      };

      for (var i = 0; i < this.fileData.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "setCaption",
    value: function setCaption(val) {
      this.fileURLs[val]['caption'] = $('#img' + val).val();
    }
  }, {
    key: "removePicture",
    value: function removePicture(index) {
      this.fileURLs.splice(index);
      $('.uploadImage' + index).remove();
      this.cdf.detectChanges();
    }
  }, {
    key: "setCurrentLocation",
    value: function setCurrentLocation() {
      var _this4 = this;

      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
          _this4.latitude = position.coords.latitude;
          _this4.longitude = position.coords.longitude;
          _this4.zoom = 8;

          _this4.getAddress(_this4.latitude, _this4.longitude);
        });
      }
    }
  }, {
    key: "markerDragEnd",
    value: function markerDragEnd($event) {
      this.latitude = $event.latLng.lat();
      this.longitude = $event.latLng.lng();
      this.getAddress(this.latitude, this.longitude);
      this.cdf.detectChanges();
    }
  }, {
    key: "getAddress",
    value: function getAddress(latitude, longitude) {
      var _this5 = this;

      this.geoCoder.geocode({
        'location': {
          lat: latitude,
          lng: longitude
        }
      }, function (results, status) {
        if (status === 'OK') {
          if (results[0]) {
            _this5.zoom = 12;
            _this5.address = results[0].formatted_address;
            $('#address').val(_this5.address);
            var add = results[1].formatted_address;
            var value = add.split(",");
            var count = value.length;
            var city = value[count - 3];
            city = city.trim();
            $('#city').val(city);

            _this5.cdf.detectChanges();
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      });
    }
  }, {
    key: "back",
    value: function back() {
      this.router.navigate(['hostportal/offerlist']);
    }
  }, {
    key: "status",
    value: function status() {
      if ($('#statusVal').is(':checked')) {
        $('#updateBtn').prop('disabled', false);
      } else {
        $('#updateBtn').prop('disabled', true);
      }
    }
  }]);

  return EditOfferComponent;
}();

EditOfferComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
  }, {
    type: _agm_core__WEBPACK_IMPORTED_MODULE_9__.MapsAPILoader
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
  }, {
    type: src_app_services_data_services__WEBPACK_IMPORTED_MODULE_3__.DataService
  }];
};

EditOfferComponent.propDecorators = {
  editNgForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: ['editNgForm']
  }],
  searchElementRef: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: ['search']
  }]
};
EditOfferComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-EditOffer-cmp',
  template: _EditOffer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], EditOfferComponent);


/***/ }),

/***/ 68893:
/*!*******************************************!*\
  !*** ./src/app/Host/Hostportal.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HostportalModule": function() { return /* binding */ HostportalModule; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.module */ 36747);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _Bookdetails_Bookdetails_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Bookdetails/Bookdetails.component */ 57184);
/* harmony import */ var _Offerlist_Offerlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Offerlist/Offerlist.component */ 79489);
/* harmony import */ var _Createoffer_Createoffer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Createoffer/Createoffer.component */ 63226);
/* harmony import */ var _offerdetails_offerdetails_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offerdetails/offerdetails.component */ 94829);
/* harmony import */ var _Hostportal_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Hostportal.routing */ 35582);
/* harmony import */ var _Admin_layouts_footerhostportal_footerhostportal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Admin/layouts/footerhostportal/footerhostportal.component */ 29067);
/* harmony import */ var _Profile_Profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Profile/Profile.component */ 68346);
/* harmony import */ var _Bookinglist_Bookinglist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Bookinglist/Bookinglist.component */ 38883);
/* harmony import */ var _Inbox_Inbox_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Inbox/Inbox.component */ 30672);
/* harmony import */ var _EditOffer_EditOffer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./EditOffer/EditOffer.component */ 74298);
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-intl-tel-input */ 87555);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-socket-io */ 75083);
/* harmony import */ var _disputeDetails_disputedetails_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./disputeDetails/disputedetails.component */ 1339);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @agm/core */ 61466);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 5721);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-chips */ 38375);
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-nouislider */ 68266);
/* harmony import */ var _Bookinglistt_Bookinglistt_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Bookinglistt/Bookinglistt.component */ 45579);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var config = {
  url: 'https://onerooms-socket1.herokuapp.com:443',
  // url: 'http://localhost:3000/',
  options: {}
};

var HostportalModule = /*#__PURE__*/(0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function HostportalModule() {
  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HostportalModule);
});

HostportalModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, ng2_nouislider__WEBPACK_IMPORTED_MODULE_14__.NouisliderModule, ngx_chips__WEBPACK_IMPORTED_MODULE_19__.TagInputModule, _app_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule.forChild(_Hostportal_routing__WEBPACK_IMPORTED_MODULE_7__.HostportalRoutes), ngx_socket_io__WEBPACK_IMPORTED_MODULE_21__.SocketIoModule.forRoot(config), _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _app_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_22__.NgxIntlTelInputModule, _agm_core__WEBPACK_IMPORTED_MODULE_23__.AgmCoreModule.forRoot({
    apiKey: 'AIzaSyA8S1HrLRkdH_tZAUFuIU9Fu4lDJac757s',
    libraries: ['places']
  }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslateModule],
  declarations: [// HomeComponent,
  // host_footerComponent,
  _Admin_layouts_footerhostportal_footerhostportal_component__WEBPACK_IMPORTED_MODULE_8__.FooterhostportalComponent, _Bookdetails_Bookdetails_component__WEBPACK_IMPORTED_MODULE_3__.BookdetailsComponent, _disputeDetails_disputedetails_component__WEBPACK_IMPORTED_MODULE_13__.DisputeDetailsComponent, _Offerlist_Offerlist_component__WEBPACK_IMPORTED_MODULE_4__.OfferlistComponent, _Createoffer_Createoffer_component__WEBPACK_IMPORTED_MODULE_5__.CreateofferComponent, _EditOffer_EditOffer_component__WEBPACK_IMPORTED_MODULE_12__.EditOfferComponent, _offerdetails_offerdetails_component__WEBPACK_IMPORTED_MODULE_6__.OfferdetailsComponent, _Profile_Profile_component__WEBPACK_IMPORTED_MODULE_9__.ProfileComponent, _Bookinglist_Bookinglist_component__WEBPACK_IMPORTED_MODULE_10__.BookinglistComponent, _Inbox_Inbox_component__WEBPACK_IMPORTED_MODULE_11__.InboxComponent, _Bookinglistt_Bookinglistt_component__WEBPACK_IMPORTED_MODULE_15__.BookinglisttComponent],
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe]
})], HostportalModule);


/***/ }),

/***/ 35582:
/*!********************************************!*\
  !*** ./src/app/Host/Hostportal.routing.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HostportalRoutes": function() { return /* binding */ HostportalRoutes; }
/* harmony export */ });
/* harmony import */ var _Bookinglist_Bookinglist_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bookinglist/Bookinglist.component */ 38883);
/* harmony import */ var _Bookdetails_Bookdetails_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bookdetails/Bookdetails.component */ 57184);
/* harmony import */ var _Offerlist_Offerlist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Offerlist/Offerlist.component */ 79489);
/* harmony import */ var _Createoffer_Createoffer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Createoffer/Createoffer.component */ 63226);
/* harmony import */ var _offerdetails_offerdetails_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./offerdetails/offerdetails.component */ 94829);
/* harmony import */ var _Profile_Profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Profile/Profile.component */ 68346);
/* harmony import */ var _Inbox_Inbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Inbox/Inbox.component */ 30672);
/* harmony import */ var _EditOffer_EditOffer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EditOffer/EditOffer.component */ 74298);
/* harmony import */ var _disputeDetails_disputedetails_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./disputeDetails/disputedetails.component */ 1339);









var HostportalRoutes = [{
  path: '',
  children: [{
    path: 'bookinglist',
    component: _Bookinglist_Bookinglist_component__WEBPACK_IMPORTED_MODULE_0__.BookinglistComponent
  }]
}, {
  path: '',
  children: [{
    path: 'bookdetails/:id',
    component: _Bookdetails_Bookdetails_component__WEBPACK_IMPORTED_MODULE_1__.BookdetailsComponent
  }]
}, {
  path: '',
  children: [{
    path: 'disputedetails/:id',
    component: _disputeDetails_disputedetails_component__WEBPACK_IMPORTED_MODULE_8__.DisputeDetailsComponent
  }]
}, {
  path: '',
  children: [{
    path: 'offerlist',
    component: _Offerlist_Offerlist_component__WEBPACK_IMPORTED_MODULE_2__.OfferlistComponent
  }]
}, {
  path: '',
  children: [{
    path: 'createoffer',
    component: _Createoffer_Createoffer_component__WEBPACK_IMPORTED_MODULE_3__.CreateofferComponent
  }]
}, {
  path: '',
  children: [{
    path: 'editoffer/:id',
    component: _EditOffer_EditOffer_component__WEBPACK_IMPORTED_MODULE_7__.EditOfferComponent
  }]
}, {
  path: '',
  children: [{
    path: 'offerdetails/:id',
    component: _offerdetails_offerdetails_component__WEBPACK_IMPORTED_MODULE_4__.OfferdetailsComponent
  }]
}, {
  path: '',
  children: [{
    path: 'profile',
    component: _Profile_Profile_component__WEBPACK_IMPORTED_MODULE_5__.ProfileComponent
  }]
}, {
  path: '',
  children: [{
    path: 'inbox',
    component: _Inbox_Inbox_component__WEBPACK_IMPORTED_MODULE_6__.InboxComponent
  }]
}];

/***/ }),

/***/ 30672:
/*!***********************************************!*\
  !*** ./src/app/Host/Inbox/Inbox.component.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InboxComponent": function() { return /* binding */ InboxComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _Inbox_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Inbox.component.html?ngResource */ 86344);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var src_app_services_data_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/data.services */ 7619);
/* harmony import */ var src_app_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_chat/chat.service */ 76865);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var InboxComponent = /*#__PURE__*/function () {
  function InboxComponent(router, cdf, dataService, chat) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InboxComponent);

    this.router = router;
    this.cdf = cdf;
    this.dataService = dataService;
    this.chat = chat;
    this.loading = false;
    this.submitted = false;
    this.error = '';
    this.step = 1;
    this.bodytext = 0;
    this.user = null;
    this.allMessages = [];
    this.latestConversation = [];
    this.allmessage = [];
    this.moment = moment__WEBPACK_IMPORTED_MODULE_5__;
    this.user_id = null;
    this.ad_id = null;
    this.receiver_id = null;
    this.channel = null;
    this.publisher_id = null;
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(InboxComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      // if (localStorage.getItem("token") != null && localStorage.getItem('role') == 'host') {
      //   this.user = 'exists';
      // }
      // else {
      //   this.user = null;
      //   localStorage.clear();
      //   this.router.navigate(['/host/home'])
      // }
      console.log(localStorage.getItem('data'));
      this.user_id = JSON.parse(localStorage.getItem('data'));
      this.user_id = this.user_id.id;
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('lock-page');
      body.classList.add('off-canvas-sidebar');
      var card = document.getElementsByClassName('card')[0];
      setTimeout(function () {// after 1000 ms we add the class animated to the login/register card
        // card.classList.remove('card-hidden');
      }, 700);
      this.dataService.get('host/get-all-messages').then(function (result) {
        _this.allMessages = result.data.all_messages;
        _this.latestConversation = result.data.latest_conversation;

        _this.getMessages(_this.latestConversation[0].ad_id);
      });
      this.chat.messages.subscribe(function (msg) {
        // if (msg.message !== null) {
        //   $('#divscroll').append('<div class="col-12"><div class="mt-2 mr-5" style="align-self: center; width: 270px; background-color:#dcdcdc; height: auto; padding:10px; border-radius: 12px;"><p class="mb-1">' + msg.message + '<p><span class="float-right">just now</span></p></div></div>')
        // }
        // else {
        //   $('#divscroll').append('<div class="col-12"><div class="mt-2 mr-5" style="align-self: center; width: 270px; background-color: #dcdcdc; height: auto; padding:10px; border-radius: 12px;"><p class="mb-1"><a href="http://oneroom3.crosip.com/' + msg.attachment_file + '"target="_blank">See Attachment</a><p><span class="float-right">just now</span></p></div></div>')
        // }
        if (msg.message !== null) {
          if (msg.senderid == _this.sender_id) {
            $('#divscroll').append('<div class="col-12"><div class="mt-2 mr-5 pull-right" style="align-self: center; width: 270px; background-color:#e95228; height: auto; padding:10px; border-radius: 12px;"><p class="mb-1" style="color: white !important;">' + msg.message + '<p></p></div></div>');
          } else {
            $('#divscroll').append('<div class="col-12"><div class="mt-2 mr-5" style="align-self: center; width: 270px; background-color:#dcdcdc; height: auto; padding:10px; border-radius: 12px;"><p class="mb-1">' + msg.message + '<p><span class="float-right">just now</span></p></div></div>');
          }
        } else {
          if (msg.senderid == _this.sender_id) {
            $('#divscroll').append('<div class="col-12"><div class="mt-2 mr-5 pull-right" style="align-self: center; width: 270px; background-color:#e95228; height: auto; padding:10px; border-radius: 12px;"><p class="mb-1"><a href="http://oneroom3.crosip.com/' + msg.attachment_file + '"target="_blank" style="color: white !important;">See Attachment</a><p></p></div></div>');
          } else {
            $('#divscroll').append('<div class="col-12"><div class="mt-2 mr-5" style="align-self: center; width: 270px; background-color: #dcdcdc; height: auto; padding:10px; border-radius: 12px;"><p class="mb-1"><a href="http://oneroom3.crosip.com/' + msg.attachment_file + '"target="_blank">See Attachment</a><p><span class="float-right">just now</span></p></div></div>');
          }
        }

        $('#divscroll').scrollTop(20000);
      }); // if (localStorage.getItem('temp')) {
      //   this.getMessages(localStorage.getItem('temp'))
      // }
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {}
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.chat.leaveChannel(this.channel);
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('lock-page');
      body.classList.remove('off-canvas-sidebar');
    }
  }, {
    key: "changestate",
    value: function changestate(val) {
      if (val == 1) {
        this.bodytext = 0;
        $('#bgchat').addClass("bgchat");
        $('#bgchat2').removeClass("bgchat");
        $('#bgchat3').removeClass("bgchat");
        $('#bgchat4').removeClass("bgchat");
      } else if (val == 2) {
        this.bodytext = 1;
        $('#bgchat2').addClass("bgchat");
        $('#bgchat').removeClass("bgchat");
        $('#bgchat3').removeClass("bgchat");
        $('#bgchat4').removeClass("bgchat");
      } else if (val == 3) {
        this.bodytext = 0;
        $('#bgchat3').addClass("bgchat");
        $('#bgchat2').removeClass("bgchat");
        $('#bgchat').removeClass("bgchat");
        $('#bgchat4').removeClass("bgchat");
      } else {
        this.bodytext = 1;
        $('#bgchat4').addClass("bgchat");
        $('#bgchat2').removeClass("bgchat");
        $('#bgchat3').removeClass("bgchat");
        $('#bgchat').removeClass("bgchat");
      }
    }
  }, {
    key: "showbody",
    value: function showbody() {
      $('#leftmenue').addClass("d-none d-lg-block d-md-block d-xl-block");
      $('#body').removeClass("d-none d-lg-block d-md-block d-xl-block");
    }
  }, {
    key: "back",
    value: function back() {
      $('#body').addClass("d-none d-lg-block d-md-block d-xl-block");
      $('#leftmenue').removeClass("d-none d-lg-block d-md-block d-xl-block");
    }
  }, {
    key: "getMessages",
    value: function getMessages(ad_id) {
      var _this2 = this;

      $('.emptyDiv').remove();
      var data = {
        ad_id: ad_id
      };
      this.currentchatid = ad_id;
      this.dataService.post('host/get-messages', data).then(function (result) {
        var bookingDetailsLength = result.data.booking_details.length;
        _this2.offerMessages = result.data.booking_details[bookingDetailsLength - 1];
        _this2.allmessage = result.data.all_message;
        _this2.ad = result.data.ad;
        _this2.receiver_id = _this2.offerMessages.customer_id;
        _this2.ad_id = _this2.offerMessages.ad_id;
        _this2.publisher_id = _this2.ad.user_id;
        _this2.sender_id = _this2.publisher_id;
        console.log(result);
        _this2.channel = _this2.receiver_id.toString().concat(_this2.publisher_id.toString(), _this2.ad_id.toString());

        _this2.chat.joinChannel(_this2.channel);

        _this2.cdf.detectChanges();

        setTimeout(function () {
          $('#divscroll').scrollTop(20000);
        }, 6000);
      });
    }
  }, {
    key: "sendMessage",
    value: function sendMessage() {
      var _this3 = this;

      if ($('#sender_message').val() == null || $('#sender_message').val() == '') {
        return;
      }

      var msg = $('#sender_message').val();
      var data1 = {
        receiver_id: this.receiver_id,
        ad_id: this.ad_id,
        message: msg,
        read_status: '0',
        attachment_file: null
      };
      console.log(data1);
      this.dataService.post('host/send-a-message', data1).then(function (result) {
        var userData = JSON.parse(localStorage.getItem('data'));
        var senderNameFirstChar = userData['fname'][0];

        if (result.success == true) {
          if (result.data.message != null) {
            $('#divscroll').append('<div class="col-12 emptyDiv"><div class="mt-2 mr-5 pull-right" style="align-self: center; width: 270px; background-color:#e95228; height: auto; padding:10px; border-radius: 12px;"><p class="mb-1" style="color: white !important;">' + result.data.message + '<p><span class="float-right" cstyle="color: white !important>' + moment__WEBPACK_IMPORTED_MODULE_5__(result.data.created_at).format('ddd') + ' | ' + moment__WEBPACK_IMPORTED_MODULE_5__(result.data.created_at).format('MMM DD, YYYY') + ' | ' + moment__WEBPACK_IMPORTED_MODULE_5__(result.data.created_at).format('hh:mm a') + '</span></p></div></div>');
          }

          $('#divscroll').scrollTop(20000);
          var message = msg;
          var date = moment__WEBPACK_IMPORTED_MODULE_5__().format('hh:mm a');
          var data = {
            message: message,
            channel: _this3.channel,
            date: date,
            senderid: _this3.publisher_id,
            receiver_id: _this3.receiver_id,
            pic: '',
            attachment_file: '',
            messageId: result.data.id,
            senderNameFirstChar: senderNameFirstChar
          };

          _this3.chat.sendMsg("channel", data);
        }

        $('#sender_message').val(null);

        _this3.cdf.detectChanges();
      });
    }
  }, {
    key: "sendMessageAttachment",
    value: function sendMessageAttachment(event) {
      var _this4 = this;

      var file = event.target.files[0];

      if (file) {
        var fd = new FormData();
        fd.append('receiver_id', this.receiver_id);
        fd.append('ad_id', this.ad_id);
        fd.append('read_status', '0');
        fd.append('attachment_file', file);
        this.dataService.post('host/send-a-message', fd).then(function (result) {
          var userData = JSON.parse(localStorage.getItem('data'));
          var senderNameFirstChar = userData['fname'][0];

          if (result.success == true) {
            if (result.data.attachment_file != null) {
              $('#divscroll').append('<div class="col-12 emptyDiv"><div class="mt-2 mr-5 pull-right" style="align-self: center; width: 270px; background-color:#e95228; height: auto; padding:10px; border-radius: 12px;"><p class="mb-1"><a href="http://oneroom3.crosip.com/' + result.data.attachment_file + '"target="_blank" style="color: white !important;">See Attachment</a><p><span class="float-right" style="color: white !important;">' + moment__WEBPACK_IMPORTED_MODULE_5__(result.data.created_at).format('ddd') + ' | ' + moment__WEBPACK_IMPORTED_MODULE_5__(result.data.created_at).format('MMM DD, YYYY') + ' | ' + moment__WEBPACK_IMPORTED_MODULE_5__(result.data.created_at).format('hh:mm a') + '</span></p></div></div>');
              $('#divscroll').scrollTop(20000);
              var date = moment__WEBPACK_IMPORTED_MODULE_5__().format('hh:mm a');
              var data = {
                message: null,
                channel: _this4.channel,
                date: date,
                senderid: _this4.publisher_id,
                receiver_id: _this4.receiver_id,
                pic: result.data.attachment_file,
                attachment_file: '',
                messageId: result.data.id,
                senderNameFirstChar: senderNameFirstChar
              };

              _this4.chat.sendMsg("channel", data);
            }
          }

          $('#sender_message').val(null);

          _this4.cdf.detectChanges();
        });
      }
    }
  }]);

  return InboxComponent;
}();

InboxComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef
  }, {
    type: src_app_services_data_services__WEBPACK_IMPORTED_MODULE_3__.DataService
  }, {
    type: src_app_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__.ChatService
  }];
};

InboxComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-Inbox',
  template: _Inbox_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], InboxComponent);


/***/ }),

/***/ 79489:
/*!*******************************************************!*\
  !*** ./src/app/Host/Offerlist/Offerlist.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfferlistComponent": function() { return /* binding */ OfferlistComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _Offerlist_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Offerlist.component.html?ngResource */ 98215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var src_app_services_data_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/data.services */ 7619);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var OfferlistComponent = /*#__PURE__*/function () {
  function OfferlistComponent(router, cdf, dataService) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, OfferlistComponent);

    this.router = router;
    this.cdf = cdf;
    this.dataService = dataService;
    this.user = null;
    this.details = null;
    this.listed = [];
    this.unlisted = [];
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(OfferlistComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      if (localStorage.getItem("token") != null && localStorage.getItem('role') == 'host') {
        this.user = 'exists';
      } else {
        this.user = null;
        localStorage.clear();
        this.router.navigate(['/host/home']);
      }

      var body = document.getElementsByTagName('body')[0];
      body.classList.add('lock-page');
      body.classList.add('off-canvas-sidebar');
      var card = document.getElementsByClassName('card')[0];
      this.dataService.get('host/all-ads').then(function (result) {
        _this.offers = result.data;

        for (var i = 0; i < _this.offers.length; i++) {
          var totalPrice = _this.offers[i]['price'];
          var price = totalPrice * (_this.offers[i]['discount_of_percentage'] / 100);
          price = totalPrice - price;
          _this.offers[i]['current_price'] = price;
        }

        for (var _i = 0; _i < _this.offers.length; _i++) {
          _this.unlisted = _this.offers.filter(function (x) {
            return x.status == 0;
          });
          _this.listed = _this.offers.filter(function (x) {
            return x.status == 1;
          });
        }
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('lock-page');
      body.classList.remove('off-canvas-sidebar');
    }
  }, {
    key: "getOfferDetails",
    value: function getOfferDetails(id) {
      this.router.navigate(['hostportal/offerdetails', id]);
    }
  }]);

  return OfferlistComponent;
}();

OfferlistComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef
  }, {
    type: src_app_services_data_services__WEBPACK_IMPORTED_MODULE_3__.DataService
  }];
};

OfferlistComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-Offerlist-cmp',
  template: _Offerlist_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], OfferlistComponent);


/***/ }),

/***/ 68346:
/*!***************************************************!*\
  !*** ./src/app/Host/Profile/Profile.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": function() { return /* binding */ ProfileComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _Profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profile.component.html?ngResource */ 5825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var src_app_services_data_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/data.services */ 7619);
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-intl-tel-input */ 87555);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_translation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/translation.service */ 52240);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ProfileComponent = /*#__PURE__*/function () {
  function ProfileComponent(translationService, router, cdf, _formBuilder, dataService, renderer, el) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProfileComponent);

    this.translationService = translationService;
    this.router = router;
    this.cdf = cdf;
    this._formBuilder = _formBuilder;
    this.dataService = dataService;
    this.step = 0;
    this.pstep = 1;
    this.subsstep = 0;
    this.passtext = "password";
    this.ishidden = true;
    this.passtext1 = "password";
    this.ishidden1 = true;
    this.passtext11 = "password";
    this.ishidden11 = true;
    this.passtext2 = "password";
    this.ishidden2 = true;
    this.user = null;
    this.data = null;
    this.showAlert = false;
    this.showPasswordAlert = false;
    this.showEmailAlert = false;
    this.showSuccessAlert = false;
    this.showCheckPasswordAlert = false;
    this.showOTPAlert = false;
    this.showEmailSuccessAlert = false;
    this.successMessage = '';
    this.errorMessage = '';
    this.new_email = null;
    this.forgot_password_email = null;
    this.subscriptions = null;
    this.moment = moment__WEBPACK_IMPORTED_MODULE_5__;
    this.plans = null;
    this.plan_id = null;
    this.level = null;
    this.paypalInterval = null;
    this.showSubscribeAlert = false;
    this.paymentDetails = null;
    this.user_id = null;
    this.showFeedbackErrorAlert = false;
    this.showFeedbackSuccessAlert = false;
    this.separateDialCode = false;
    this.SearchCountryField = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_7__.SearchCountryField;
    this.CountryISO = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_7__.CountryISO;
    this.preferredCountries = [ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_7__.CountryISO.UnitedStates, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_7__.CountryISO.UnitedKingdom];
    this.currentLang = 'en';
    this.languages1 = [{
      name: 'English',
      lang: 'en'
    }, {
      name: 'french',
      lang: 'fr'
    }, {
      name: 'German',
      lang: 'gr'
    }, {
      name: 'Italian',
      lang: 'it'
    }, {
      name: 'Spanisch',
      lang: 'sp'
    }];
    var events = 'cut copy paste';
    events.split(' ').forEach(function (e) {
      return renderer.listen(el.nativeElement, e, function (event) {
        event.preventDefault();
      });
    });
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ProfileComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      //alert(localStorage.getItem("token") )
      // if (localStorage.getItem("token") != null && localStorage.getItem('role') == 'host') {
      //   this.user = 'exists';
      // }
      // else {
      //   this.user = null;
      //   localStorage.clear();
      //   this.router.navigate(['/host/home'])
      // }
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('lock-page');
      body.classList.add('off-canvas-sidebar');
      var card = document.getElementsByClassName('card')[0];
      this.getUser();
      this.verifyEmailForm = this._formBuilder.group({
        email: null
      });
      this.verifyForgotPasswordOtpForm = this._formBuilder.group({
        email: null,
        otp: null
      });
      this.updatePasswordForm = this._formBuilder.group({
        email: null,
        password: null,
        confirm_password: null
      });
      this.planForm = this._formBuilder.group({
        plan_id: null,
        type: 'card',
        number: null,
        month: null,
        year: null,
        cvc: null
      });
      this.getSubscription();
      this.getPlans();
      this.getPaymentDetails();
      this.showPaymentSection();
    }
  }, {
    key: "onLangChange",
    value: function onLangChange(currentLang) {
      this.translationService.useLang(currentLang);
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('lock-page');
      body.classList.remove('off-canvas-sidebar');
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {}
  }, {
    key: "getUser",
    value: function getUser() {
      var _this = this;

      this.dataService.get('guest/get-user-data').then(function (result) {
        _this.data = result.data;
        _this.user_id = _this.data.id;
        _this.userForm = _this._formBuilder.group({
          fname: _this.data.fname,
          lname: _this.data.lname,
          email: _this.data.email,
          contact_no: _this.data.country_calling_code + _this.data.contact_no,
          address: _this.data.address,
          website: _this.data.website,
          vat_no: _this.data.vat_no,
          pic: _this.data.pic
        });

        _this.userForm.controls['email'].disable();
      });
    }
  }, {
    key: "getSubscription",
    value: function getSubscription() {
      var _this2 = this;

      this.dataService.get('get-subscribed').then(function (result) {
        _this2.subscriptions = result.data;

        _this2.cdf.detectChanges();
      });
    }
  }, {
    key: "getPlans",
    value: function getPlans() {
      var _this3 = this;

      this.dataService.get('host/get_plan').then(function (result) {
        _this3.plans = result.data;

        _this3.cdf.detectChanges();
      });
    }
  }, {
    key: "getPaymentDetails",
    value: function getPaymentDetails() {
      var _this4 = this;

      this.dataService.get('host/get-payment-details').then(function (result) {
        _this4.paymentDetails = result.data;

        _this4.cdf.detectChanges();
      });
    }
  }, {
    key: "subscrioption",
    value: function subscrioption() {
      $('#payments').removeClass("btn-danger");
      $('#subs').removeClass("btn-default");
      $('#subs').addClass("btn-danger");
      $('#payments').addClass("btn-default");
      this.subsstep = 1;
    }
  }, {
    key: "payments",
    value: function payments() {
      $('#subs').removeClass("btn-danger");
      $('#payments').addClass("btn-danger");
      $('#payments').removeClass("btn-default");
      $('#subs').addClass("btn-default");
      this.subsstep = 0;
      this.pstep = 1;
      this.cdf.detectChanges();
    }
  }, {
    key: "show",
    value: function show() {
      this.ishidden = !this.ishidden;

      if (this.ishidden == true) {
        this.passtext = "password";
        $('#pshide').html("Show");
      } else {
        this.passtext = "text";
        $('#pshide').html("Hide");
      }
    }
  }, {
    key: "show1",
    value: function show1() {
      this.ishidden1 = !this.ishidden1;

      if (this.ishidden1 == true) {
        this.passtext1 = "password";
        $('#pshide1').html("Show");
      } else {
        this.passtext1 = "text";
        $('#pshide1').html("Hide");
      }

      this.cdf.detectChanges();
    }
  }, {
    key: "show11",
    value: function show11() {
      this.ishidden11 = !this.ishidden11;

      if (this.ishidden11 == true) {
        this.passtext11 = "password";
        $('#pshide11').html("Show");
      } else {
        this.passtext11 = "text";
        $('#pshide11').html("Hide");
      }

      this.cdf.detectChanges();
    }
  }, {
    key: "show2",
    value: function show2() {
      this.ishidden2 = !this.ishidden2;

      if (this.ishidden2 == true) {
        this.passtext2 = "password";
        $('#pshide2').html("Show");
      } else {
        this.passtext2 = "text";
        $('#pshide2').html("Hide");
      }
    }
  }, {
    key: "clickProfilePicture",
    value: function clickProfilePicture() {
      $('#pictureFileTrigger').click();
    }
  }, {
    key: "editProfilePicture",
    value: function editProfilePicture(event) {
      var _this5 = this;

      this.showAlert = false;
      var file = event.target.files[0];

      if (file) {
        var fd = new FormData();
        fd.append('fname', this.data.fname);
        fd.append('lname', this.data.lname);
        fd.append('contact_no', this.data.contact_no);
        fd.append('address', this.data.address);
        fd.append('website', this.data.website);
        fd.append('vat_no', this.data.vat_no);
        fd.append('pic', file);
        this.dataService.post('host/update-personal-info', fd).then(function (result) {
          _this5.data.pic = result.data.pic;

          _this5.cdf.detectChanges();
        }, function (error) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            position: 'center',
            icon: 'error',
            text: 'Something went wrong. Please try again.',
            showConfirmButton: false,
            timer: 2500
          });

          _this5.cdf.detectChanges();
        });
      }
    }
  }, {
    key: "update",
    value: function update() {
      var _this6 = this;

      this.showAlert = false;

      if (this.userForm.invalid) {
        var invalid = [];
        var controls = this.userForm.controls;

        for (var name in controls) {
          if (controls[name].invalid) {
            invalid.push(name);
          }
        }

        if (invalid[0] == 'fname') {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            position: 'center',
            icon: 'error',
            text: 'Please Provide First Name With Minimum 4 Chars At Least',
            showConfirmButton: false,
            timer: 2500
          });
        } else if (invalid[0] == 'lname') {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            position: 'center',
            icon: 'error',
            text: 'Please Provide Last Name With Minimum 4 Chars At Least',
            showConfirmButton: false,
            timer: 2500
          });
        } else if (invalid[0] == 'contact_no') {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            position: 'center',
            icon: 'error',
            text: 'Please Provide Valid Phone Number. You may see placeholder for phone number format.',
            showConfirmButton: false,
            timer: 2500
          });
        } else if (invalid[0] == 'website') {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            position: 'center',
            icon: 'error',
            text: 'Please Provide Valid URL. You may see placeholder for website format.',
            showConfirmButton: false,
            timer: 2500
          });
        }

        this.cdf.detectChanges();
        return;
      }

      var formData = this.userForm.getRawValue();
      var data = {
        fname: formData.fname,
        lname: formData.lname,
        contact_no: formData.contact_no.nationalNumber,
        country_calling_code: formData.contact_no.dialCode,
        country_code: formData.contact_no.countryCode,
        address: formData.address,
        website: formData.website,
        vat_no: formData.vat_no,
        pic: null
      };
      this.dataService.post('host/update-personal-info', data).then(function (result) {
        _this6.getUser();

        _this6.step = 0;

        _this6.cdf.detectChanges();
      }, function (error) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
          position: 'center',
          icon: 'error',
          text: 'Something went wrong. Please try again.',
          showConfirmButton: false,
          timer: 2500
        });

        _this6.cdf.detectChanges();
      });
    }
  }, {
    key: "updatePassword",
    value: function updatePassword() {
      var _this7 = this;

      this.showPasswordAlert = false;
      this.showSuccessAlert = false;
      var current_password = $('#current_password').val();
      var new_password = $('#new_password').val();
      var confirm_password = $('#confirm_password').val();

      if (!current_password || !new_password || !confirm_password) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
          position: 'center',
          icon: 'error',
          text: 'Please Fill All Required Fields',
          showConfirmButton: false,
          timer: 2500
        });
        this.cdf.detectChanges();
        return;
      } else {
        if (new_password != confirm_password) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            position: 'center',
            icon: 'error',
            text: 'Password does not match.',
            showConfirmButton: false,
            timer: 2500
          });
          this.cdf.detectChanges();
          return;
        } else {
          var data = {
            old_password: current_password,
            new_password: new_password
          };
          this.dataService.post('host/change-password', data).then(function (result) {
            if (result.success == true) {
              $('#current_password').val(null);
              $('#new_password').val(null);
              $('#confirm_password').val(null);
              _this7.showSuccessAlert = true;
              _this7.successMessage = 'Password Updated Successfully';
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                position: 'center',
                icon: 'success',
                text: 'Password Updated Successfully',
                showConfirmButton: false,
                timer: 2500
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                position: 'center',
                icon: 'error',
                text: result.error.message,
                showConfirmButton: false,
                timer: 2500
              });
            }

            _this7.cdf.detectChanges();
          }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
              position: 'center',
              icon: 'error',
              text: 'Something went wrong. Please try again.',
              showConfirmButton: false,
              timer: 2500
            });

            _this7.cdf.detectChanges();
          });
        }
      }
    }
  }, {
    key: "updatePasswordCancel",
    value: function updatePasswordCancel() {
      $('#current_password').val(null);
      $('#new_password').val(null);
      $('#confirm_password').val(null);
      this.cdf.detectChanges();
    }
  }, {
    key: "checkPassword",
    value: function checkPassword() {
      var _this8 = this;

      this.showCheckPasswordAlert = false;
      var validate_password = $('#validate_password').val();

      if (!validate_password) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
          position: 'center',
          icon: 'error',
          text: 'Please Fill All Required Fields',
          showConfirmButton: false,
          timer: 2500
        });
        this.cdf.detectChanges();
        return;
      } else {
        var data = {
          password: validate_password
        };
        this.dataService.post('host/check-password', data).then(function (result) {
          if (result.success == true) {
            $('#new_email').prop('disabled', false);
            $('#confirm_email').prop('disabled', false);
            $('#new_email').focus();
            $('#validate_password').val(null);
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
              position: 'center',
              icon: 'error',
              text: 'Incorrect Password',
              showConfirmButton: false,
              timer: 2500
            });
          }

          _this8.cdf.detectChanges();
        }, function (error) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            position: 'center',
            icon: 'error',
            text: 'Something went wrong. Please try again.',
            showConfirmButton: false,
            timer: 2500
          });

          _this8.cdf.detectChanges();
        });
      }
    }
  }, {
    key: "checkPasswordCancel",
    value: function checkPasswordCancel() {
      $('#validate_password').val(null);
      this.cdf.detectChanges();
    }
  }, {
    key: "updateEmail",
    value: function updateEmail() {
      var _this9 = this;

      this.showEmailAlert = false;
      this.new_email = $('#new_email').val();
      var confirm_email = $('#confirm_email').val();

      if (this.new_email != confirm_email) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
          position: 'center',
          icon: 'error',
          text: 'Email does not match.',
          showConfirmButton: false,
          timer: 2500
        });
        return;
      } else {
        var data = {
          email: this.new_email
        };
        this.dataService.post('host/change-email', data).then(function (result) {
          if (result.success == true) {
            $('#new_email').val(null);
            $('#confirm_email').val(null);
            $('#confirm_email').prop('disabled', true);
            $('#new_email').prop('disabled', true);
            $('#otpSection').prop('hidden', false);
            $('#otp').focus();
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
              position: 'center',
              icon: 'error',
              text: result.error.message,
              showConfirmButton: false,
              timer: 2500
            });
          }
        }, function (error) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            position: 'center',
            icon: 'error',
            text: 'Something went wrong. Please try again.',
            showConfirmButton: false,
            timer: 2500
          });

          _this9.cdf.detectChanges();
        });
      }
    }
  }, {
    key: "updateEmailCancel",
    value: function updateEmailCancel() {
      $('#new_email').val(null);
      $('#confirm_email').val(null);
      $('#new_email').prop('disabled', true);
      $('#confirm_email').prop('disabled', true);
    }
  }, {
    key: "updateOTP",
    value: function updateOTP() {
      var _this10 = this;

      this.showOTPAlert = false;
      this.showEmailSuccessAlert = false;
      var otp = $('#otp').val();

      if (!otp) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
          position: 'center',
          icon: 'error',
          text: 'Please Provide OTP Code',
          showConfirmButton: false,
          timer: 2500
        });
        return;
      } else {
        var data = {
          email: this.new_email,
          otp: otp
        };
        this.dataService.post('host/verify-otp', data).then(function (result) {
          if (result.success == true) {
            $('#otpSection').prop('hidden', true);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
              position: 'center',
              icon: 'success',
              text: 'Email Updated Succesfully',
              showConfirmButton: false,
              timer: 2500
            });
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
              position: 'center',
              icon: 'error',
              text: 'Email already exists.',
              showConfirmButton: false,
              timer: 2500
            });
          }

          _this10.cdf.detectChanges();
        }, function (error) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            position: 'center',
            icon: 'error',
            text: 'Something went wrong. Please try again.',
            showConfirmButton: false,
            timer: 2500
          });

          _this10.cdf.detectChanges();
        });
      }
    }
  }, {
    key: "updateOTPCancel",
    value: function updateOTPCancel() {
      $('#otp').val(null);
      $('#otpSection').prop('hidden', true);
    }
  }, {
    key: "verifyEmail",
    value: function verifyEmail() {
      var _this11 = this;

      this.errorMessage = null;
      this.showAlert = false;

      if (this.verifyEmailForm.invalid) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
          position: 'center',
          icon: 'error',
          text: 'Please Fill All Required Fields',
          showConfirmButton: false,
          timer: 2500
        });
        this.cdf.detectChanges();
        return;
      }

      var formData = this.verifyEmailForm.getRawValue();
      this.forgot_password_email = formData.email;
      var data = {
        email: this.forgot_password_email
      };
      this.dataService.post('verify-email', data).then(function (result) {
        if (result.success == true) {
          $('#vEmail').prop('hidden', true);
          $('#vForgotPasswordOtp').prop('hidden', false);
          formData.email = null;
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            position: 'center',
            icon: 'error',
            text: 'Soemthing went wrong. Please try again.',
            showConfirmButton: false,
            timer: 2500
          });
        }

        _this11.cdf.detectChanges();
      });
    }
  }, {
    key: "verifyForgoPasswordOtp",
    value: function verifyForgoPasswordOtp() {
      var _this12 = this;

      this.errorMessage = null;
      this.showAlert = false;

      if (this.verifyForgotPasswordOtpForm.invalid) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
          position: 'center',
          icon: 'error',
          text: 'Please Fill All Required Fields',
          showConfirmButton: false,
          timer: 2500
        });
        this.cdf.detectChanges();
        return;
      }

      var formData = this.verifyForgotPasswordOtpForm.getRawValue();
      var data = {
        email: this.forgot_password_email,
        otp: formData.otp
      };
      this.dataService.post('verify-forgot-password-otp', data).then(function (result) {
        if (result.success == true) {
          $('#vForgotPasswordOtp').prop('hidden', true);
          $('#uPassword').prop('hidden', false);
          formData.otp = null;
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            position: 'center',
            icon: 'error',
            text: 'Soemthing went wrong. Please try again.',
            showConfirmButton: false,
            timer: 2500
          });
        }

        _this12.cdf.detectChanges();
      });
    }
  }, {
    key: "updatePasswordOtp",
    value: function updatePasswordOtp() {
      var _this13 = this;

      this.errorMessage = null;
      this.showAlert = false;

      if (this.updatePasswordForm.invalid) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
          position: 'center',
          icon: 'error',
          text: 'Please Fill All Required Fields',
          showConfirmButton: false,
          timer: 2500
        });
        this.cdf.detectChanges();
        return;
      }

      var formData = this.updatePasswordForm.getRawValue();

      if (formData.password != formData.confirm_password) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
          position: 'center',
          icon: 'error',
          text: 'Password does not match.',
          showConfirmButton: false,
          timer: 2500
        });
        this.cdf.detectChanges();
        return;
      }

      var data = {
        email: this.forgot_password_email,
        password: formData.password
      };
      this.dataService.post('update-password', data).then(function (result) {
        if (result.success == true) {
          $('#uPassword').prop('hidden', true);
          $('#vEmail').prop('hidden', false);
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            position: 'center',
            icon: 'success',
            title: 'Success',
            showConfirmButton: false,
            timer: 2500
          });
          $('#forgot-password').modal('toggle');
          formData.password = null;
          formData.confirm_password = null;
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            position: 'center',
            icon: 'error',
            text: 'Something went wrong. Please Try again.',
            showConfirmButton: false,
            timer: 2500
          });
        }

        _this13.cdf.detectChanges();
      });
    }
  }, {
    key: "cancelSubscription",
    value: function cancelSubscription(id) {
      var _this14 = this;

      var data = {
        plan_id: id
      };
      this.dataService.post('host/cancel-subscription', data).then(function (result) {
        _this14.getSubscription();

        _this14.cdf.detectChanges();
      });
    }
  }, {
    key: "buyPlan",
    value: function buyPlan(id, level, amount) {
      this.plan_id = id;
      this.level = level;
      this.showAlert = false;
      $('#hostplan').modal('show');
    }
  }, {
    key: "showPaymentSection",
    value: function showPaymentSection() {
      var _this15 = this;

      if ($('#stripe').is(':checked')) {
        $('#stripeSection').prop('hidden', false);
        $('#submitPlan').prop('hidden', false);
        $('#paypalSection').prop('hidden', true);
      } else {
        $('#stripeSection').prop('hidden', true);
        $('#submitPlan').prop('hidden', true);
        $('#paypalSection').prop('hidden', false);
        var data = {
          plan_id: this.plan_id.toString()
        };
        this.dataService.post('guest/subscribe/paypal', data).then(function (result) {
          if (result.link) {
            $('#clickPayPal').prop('hidden', false);
            $('#paypalLink').attr('href', result.link);
          }

          _this15.paypalInterval = setInterval(function () {
            _this15.verify();
          }, 5000);
        });
      }

      this.cdf.detectChanges();
    }
  }, {
    key: "verify",
    value: function verify() {
      var _this16 = this;

      this.dataService.get('guest/verify/paypal/success').then(function (result) {
        if (result.success == true && result.data == 1) {
          $('#hostplan').modal('hide');
          clearInterval(_this16.paypalInterval);

          _this16.updatePlan();

          _this16.getPaymentDetails();

          _this16.cdf.detectChanges();
        }
      });
    }
  }, {
    key: "updatePlan",
    value: function updatePlan() {
      var _this17 = this;

      this.showAlert = false;
      this.showSubscribeAlert = false;
      this.errorMessage = null;
      this.successMessage = null;
      var data = {
        plan: this.level
      };
      this.dataService.post('host/update-plan-info', data).then(function (result) {
        if (result.success = true) {
          localStorage.setItem('role', 'host');
          localStorage.setItem('data', JSON.stringify(result.data));
          localStorage.setItem('plan', result.data.plan);
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            position: 'center',
            icon: 'success',
            text: 'Package Subscribed Successfully.',
            showConfirmButton: false,
            timer: 2500
          });

          _this17.getSubscription();

          _this17.cdf.detectChanges();
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            position: 'center',
            icon: 'error',
            text: 'Something went wrong. Please try again.',
            showConfirmButton: false,
            timer: 2500
          });

          _this17.cdf.detectChanges();

          return;
        }
      }, function (error) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
          position: 'center',
          icon: 'error',
          text: 'Something went wrong. Please try again.',
          showConfirmButton: false,
          timer: 2500
        });

        _this17.cdf.detectChanges();

        return;
      });
    }
  }, {
    key: "subscribePlan",
    value: function subscribePlan() {
      var _this18 = this;

      this.showAlert = false;
      this.errorMessage = null;
      this.cdf.detectChanges();
      var formData = this.planForm.getRawValue();
      var data = {
        plan_id: this.plan_id.toString(),
        type: 'card',
        number: formData.number,
        exp_month: formData.month,
        exp_year: formData.year,
        cvc: formData.cvc
      };

      if ($('#stripe').is(':checked')) {
        this.dataService.post('guest/stripe_payment', data).then(function (result) {
          if (result.success == 'Subscribe successfully.') {
            $('#hostplan').modal('hide');
            _this18.planForm = _this18._formBuilder.group({
              plan_id: null,
              type: 'card',
              number: null,
              month: null,
              year: null,
              cvc: null
            });

            _this18.updatePlan();

            _this18.getPaymentDetails();
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
              position: 'center',
              icon: 'error',
              text: 'Something went wrong. Please try again.',
              showConfirmButton: false,
              timer: 2500
            });

            _this18.cdf.detectChanges();

            return;
          }
        });
      }
    }
  }, {
    key: "deletePaymentMethod",
    value: function deletePaymentMethod(payment_method) {
      var _this19 = this;

      var data = {
        payment_method: payment_method
      };
      this.dataService.post('host/delete-payment-details', data).then(function (result) {
        _this19.getPaymentDetails();
      });
    }
  }, {
    key: "updatePayPal",
    value: function updatePayPal() {
      var _this20 = this;

      var data = {
        payment_method: 'paypal',
        email: $('#paypal-email').val()
      };
      this.dataService.post('host/update-payment-details', data).then(function (result) {
        _this20.getPaymentDetails();
      });
    }
  }, {
    key: "updateStripe",
    value: function updateStripe() {
      var _this21 = this;

      var data = {
        payment_method: 'stripe',
        card: $('#stripe-card').val(),
        exp_month: $('#stripe-month').val(),
        exp_yearh: $('#stripe-year').val(),
        cvc: $('#cvc').val()
      };
      this.dataService.post('host/update-payment-details', data).then(function (result) {
        _this21.getPaymentDetails();
      });
    }
  }, {
    key: "giveFeedback",
    value: function giveFeedback() {
      var _this22 = this;

      this.showFeedbackErrorAlert = false;
      this.showFeedbackSuccessAlert = false;
      var data = {
        user_id: this.user_id,
        subject: $('#feedback_subject').val(),
        message: $('#feedback_message').val()
      };
      this.dataService.post('give-feedback', data).then(function (result) {
        if (result.success == true) {
          $('#feedback_subject').val(null);
          $('#feedback_message').val(null);
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            position: 'center',
            icon: 'success',
            text: 'Feedback Received Successfully',
            showConfirmButton: false,
            timer: 2500
          });
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            position: 'center',
            icon: 'error',
            text: result.message,
            showConfirmButton: false,
            timer: 2500
          });
        }

        _this22.cdf.detectChanges();
      });
    }
  }]);

  return ProfileComponent;
}();

ProfileComponent.ctorParameters = function () {
  return [{
    type: src_app_translation_service__WEBPACK_IMPORTED_MODULE_6__.TranslationService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder
  }, {
    type: src_app_services_data_services__WEBPACK_IMPORTED_MODULE_3__.DataService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Renderer2
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef
  }];
};

ProfileComponent.propDecorators = {
  userNgForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: ['userNgForm']
  }],
  verifyEmailNgForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: ['verifyEmailNgForm']
  }],
  verifyForgotPasswordOtpNgForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: ['verifyForgotPasswordOtpNgForm']
  }],
  updatePasswordNgForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: ['updatePasswordNgForm']
  }],
  planNgForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: ['planNgForm']
  }],
  separateDialCode: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Directive,
    args: [{
      selector: '[preventCutCopyPaste]'
    }]
  }]
};
ProfileComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-Profile-cmp',
  template: _Profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], ProfileComponent);


/***/ }),

/***/ 1339:
/*!*****************************************************************!*\
  !*** ./src/app/Host/disputeDetails/disputedetails.component.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisputeDetailsComponent": function() { return /* binding */ DisputeDetailsComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _disputedetails_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disputedetails.component.html?ngResource */ 93289);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_data_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/data.services */ 7619);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var DisputeDetailsComponent = /*#__PURE__*/function () {
  function DisputeDetailsComponent(router, routers, cdf, dataService, _formBuilder) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DisputeDetailsComponent);

    this.router = router;
    this.routers = routers;
    this.cdf = cdf;
    this.dataService = dataService;
    this._formBuilder = _formBuilder;
    this.user = null;
    this.details = null;
    this.sub = null;
    this.id = null;
    this.moment = moment__WEBPACK_IMPORTED_MODULE_3__;
    this.showAlert = false;
    this.errorMessage = null;
    this.userData = null;
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DisputeDetailsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      if (localStorage.getItem("token") != null && localStorage.getItem('role') == 'host') {
        this.user = 'exists';
      } else {
        this.user = null;
        localStorage.clear();
        this.router.navigate(['/guest/home']);
      }

      var body = document.getElementsByTagName('body')[0];
      body.classList.add('lock-page');
      body.classList.add('off-canvas-sidebar');
      var card = document.getElementsByClassName('card')[0];
      this.sub = this.routers.params.subscribe(function (params) {
        _this.id = params['id'];
      });
      var data = {
        id: this.id
      };
      this.dataService.post('host/get-dispute-by-id', data).then(function (result) {
        _this.details = result.data;
      });
      this.userData = JSON.parse(localStorage.getItem('data'));
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('lock-page');
      body.classList.remove('off-canvas-sidebar');
    }
  }, {
    key: "withdraw",
    value: function withdraw() {
      var _this2 = this;

      var data = {
        ad_id: this.details.ad_id,
        booked_offer_id: this.details.booked_offer_id
      };
      this.dataService.post('guest/withdraw-dispute', data).then(function (result) {
        if (result.success == true) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
            position: 'center',
            icon: 'success',
            title: 'Success',
            showConfirmButton: false,
            timer: 2500
          });

          _this2.router.navigate(['hostportal/bookinglist']);
        }
      });
    }
  }, {
    key: "accept",
    value: function accept() {
      var _this3 = this;

      var data = {
        ad_id: this.details.ad_id,
        booked_offer_id: this.details.booked_offer_id
      };
      this.dataService.post('guest/cancel-booking-cancellation', data).then(function (result) {
        if (result.success == true) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
            position: 'center',
            icon: 'success',
            title: 'Success',
            showConfirmButton: false,
            timer: 2500
          });

          _this3.router.navigate(['hostportal/bookinglist']);
        }
      });
    }
  }]);

  return DisputeDetailsComponent;
}();

DisputeDetailsComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef
  }, {
    type: src_app_services_data_services__WEBPACK_IMPORTED_MODULE_4__.DataService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
  }];
};

DisputeDetailsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-disputedetails-cmp',
  template: _disputedetails_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], DisputeDetailsComponent);


/***/ }),

/***/ 94829:
/*!*************************************************************!*\
  !*** ./src/app/Host/offerdetails/offerdetails.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfferdetailsComponent": function() { return /* binding */ OfferdetailsComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _offerdetails_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offerdetails.component.html?ngResource */ 17989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var src_app_services_data_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/data.services */ 7619);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 93690);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var OfferdetailsComponent = /*#__PURE__*/function () {
  function OfferdetailsComponent(router, routers, cdf, dataService, http) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, OfferdetailsComponent);

    this.router = router;
    this.routers = routers;
    this.cdf = cdf;
    this.dataService = dataService;
    this.http = http;
    this.moment = moment__WEBPACK_IMPORTED_MODULE_4__;
    this.fullpath = null;
    this.user = null;
    this.details = null;
    this.sub = null;
    this.id = null;
    this.isReadMore = true;
    this.takeimg = 3;
    this.showShortDesciption = true;
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(OfferdetailsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      if (localStorage.getItem("token") != null && localStorage.getItem('role') == 'host') {
        this.user = 'exists';
      } else {
        this.user = null;
        localStorage.clear();
        this.router.navigate(['/host/home']);
      }

      var body = document.getElementsByTagName('body')[0];
      body.classList.add('lock-page');
      body.classList.add('off-canvas-sidebar');
      var card = document.getElementsByClassName('card')[0];
      this.sub = this.routers.params.subscribe(function (params) {
        _this.id = params['id'];
      });
      var data = {
        id: this.id
      };
      this.dataService.post('host/get-ad-by-id', data).then(function (result) {
        _this.details = result.data[0];
        _this.fullpath = _this.details.attachments[0].path;
        var totalPrice = _this.details['price'];
        var price = totalPrice * (_this.details['discount_of_percentage'] / 100);
        _this.details.discountPrice = price;
        _this.details.totalPrice = totalPrice - price;

        if (_this.details.lat != null && _this.details.lat != '') {
          _this.details.lat = parseFloat(_this.details.lat);
        }

        if (_this.details.lan != null && _this.details.lan != '') {
          _this.details.lan = parseFloat(_this.details.lan);
        }
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('lock-page');
      body.classList.remove('off-canvas-sidebar');
    }
  }, {
    key: "editOffer",
    value: function editOffer(id) {
      this.router.navigate(['hostportal/editoffer', id]);
    }
  }, {
    key: "listedOffer",
    value: function listedOffer(id) {
      var _this2 = this;

      var data = {
        id: id,
        status: 1
      };
      this.dataService.post('host/edit-ad', data).then(function (result) {
        if (result.message != 'This offer is already booked.') {
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
            position: 'center',
            icon: 'success',
            title: 'Success',
            showConfirmButton: false,
            timer: 2500
          });

          _this2.router.navigate(['hostportal/offerlist']);
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
            position: 'center',
            icon: 'error',
            title: result.message,
            showConfirmButton: false,
            timer: 2500
          });
        }

        _this2.cdf.detectChanges();
      }, function (error) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
          position: 'center',
          icon: 'error',
          title: 'Error',
          showConfirmButton: false,
          timer: 2500
        });

        _this2.cdf.detectChanges();
      });
    }
  }, {
    key: "showText",
    value: function showText() {
      this.isReadMore = !this.isReadMore;
    }
  }, {
    key: "alterDescriptionText",
    value: function alterDescriptionText() {
      this.showShortDesciption = !this.showShortDesciption;
    }
  }]);

  return OfferdetailsComponent;
}();

OfferdetailsComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef
  }, {
    type: src_app_services_data_services__WEBPACK_IMPORTED_MODULE_3__.DataService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient
  }];
};

OfferdetailsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-offerdetails-cmp',
  template: _offerdetails_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], OfferdetailsComponent);


/***/ }),

/***/ 45006:
/*!*******************************************************************************************!*\
  !*** ./src/app/Admin/layouts/footerhostportal/footerhostportal.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<footer class=\"footer \" style=\"background-color: #FFFFFF!important; color: black;border-top: 1px solid #e5e5e5;\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2 text-left\">\r\n        <div>      \r\n           <img src=\"./assets/Icons/SVG/logo.svg\" style=\"width:90%\"/>\r\n        </div>\r\n        <div>\r\n          <p class=\"mt-2\">\r\n            Lorem Ipsum is simply dummy text of \r\n            the printing and typesetting industry. \r\n            Lorem Ipsum the industry          \r\n          </p>\r\n        \r\n          <p class=\"mt-4\"> \r\n            <a class=\"btn btn-outline btn-danger btn-round px-2 py-1 facebookbg\" target=\"_blank\" href=\"https://www.facebook.com/\"><i class=\"facebookc fa fa-facebook\" ria-hidden=\"true\"></i></a>\r\n            <a class=\"btn btn-outline btn-danger btn-round px-1 py-1 twitterbg\" target=\"_blank\" href=\"https://twitter.com/\"><i class=\"twitterc fa fa-twitter\"  aria-hidden=\"true\"></i></a>\r\n            <a class=\"btn btn-outline btn-danger btn-round px-1 py-1 instagrambg\" target=\"_blank\" href=\"https://www.instagram.com/\"><i class=\"instagramc fa fa-instagram\"  aria-hidden=\"true\"></i></a>\r\n          </p>\r\n          <p>© 2021 OneRooms, Inc.</p>\r\n        </div>\r\n        <div>\r\n          <span style=\"top: 1572px;left: 251px; width: 43px; height: 43px;background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;background: #FFFFFF 0% 0% no-repeat padding-box;opacity: 1;\"></span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-1\"></div>\r\n      <div class=\"col-md-3 text-left\">\r\n        <h4 class=\"font-weight-bolder\" ><b>  {{'trans.about_us' | translate}}</b></h4>\r\n        <p class=\"mt-3 mb-2\"><a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.How_oneRooms_works' | translate}} </a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Careers' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Newsroom' | translate}}</a></p>\r\n        <p class=\"mb-2\" ><a href=\"\" class=\"text-dark\"> {{'trans.about_us' | translate}}</a> </p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/blog\" class=\"text-dark\"> {{'trans.Latest_Blog' | translate}}</a></p>\r\n      </div>\r\n      <div class=\"col-md-3 text-left\">\r\n        <h4 class=\"font-weight-bolder\"><b> {{'trans.Host' | translate}} </b> </h4>\r\n        <p class=\"mt-3 mb-2\"> <a href=\"#/Website/host\" class=\"text-dark\"> {{'trans.Host_your_offer' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Responsible_Hosting' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\">{{'trans.Resource_Centre' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\">{{'trans.Community_centre' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Dedicated_support_system' | translate}}</a></p>\r\n       </div>\r\n      <div class=\"col-md-3 text-left\">\r\n        <h4 class=\"font-weight-bolder\">\r\n          <b> {{'trans.Support' | translate}}</b>\r\n        </h4>\r\n        <p class=\"mt-3 mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Our_covid_19_Response' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Help_center' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\">{{'trans.Cancellation_options' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Neighbourhood_Support' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Trust_Safety' | translate}}</a></p>\r\n      </div>\r\n    </div>\r\n  </div> \r\n</footer>\r\n<div class=\"container-fluid\" style=\"background-color: #FFFFFF!important; color: black;border-top: 1px solid #e5e5e5;\">\r\n  <div class=\"container\" style=\"    padding-top: 4.5vh !important;padding-bottom: 4.5vh;\">\r\n    <div class=\"col-12 pl-0\">\r\n      <div class=\"list-inline\">\r\n        <a href=\"#\" class=\"list-inline-item text-dark\" [routerLink]=\"['/Website/privacy']\"><small> {{'trans.Terms_of_use' | translate}} </small></a>\r\n        <a href=\"#\" class=\"list-inline-item text-dark px-3\" [routerLink]=\"['/Website/privacy']\"><small> {{'trans.Privacy_portal' | translate}}</small> </a>\r\n        <!-- <a href=\"#\" class=\"list-inline-item text-dark\" [routerLink]=\"['/Website/privacy']\"><small> {{'trans.Cookie_preference' | translate}}</small></a> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 75207:
/*!************************************************************************!*\
  !*** ./src/app/Host/Bookdetails/Bookdetails.component.html?ngResource ***!
  \************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<div class=\"wrapper wrapper-full-page\">\r\n    <div class=\"page-header lock-page header-filter\" filter-color=\"black\"\r\n        style=\"background-color:#fafafa; background-size: cover; background-position: top center;\">\r\n        <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\r\n        <div class=\"container\">\r\n            <div class=\"row justify-content-center\" style=\"margin-top: 8vh;\">\r\n                <div class=\"col-md-8\">\r\n                    <h3><b><a href=\"#/hostportal/bookinglist\" class=\"text-dark\"><i class=\"fa fa-arrow-left mr-2\"></i>\r\n                            </a>Booked List</b></h3>\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row\" *ngIf=\"details\">\r\n                                <div class=\"col-10\">\r\n                                    <h3 class=\"mb-0 mt-0\"><b>{{ details.customer.fname }} {{ details.customer.lname\r\n                                            }}</b></h3>\r\n                                    <p class=\"text-danger\">{{ details.title }}</p>\r\n                                </div>\r\n                                <div class=\"col-2 text-right\">\r\n                                    <img class=\"img-fluid rounded \" src=\"./assets/Icons/PNG/More.png\">\r\n\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                    <h4 class=\"text-success\" *ngIf=\"details.status==0\"><b>Active</b></h4>\r\n                                    <h4 class=\"text-success\" *ngIf=\"details.status==1\"><b>Completed</b></h4>\r\n                                    <h4 class=\"text-success\" *ngIf=\"details.status==2\"><b>Cancelled</b></h4>\r\n                                    <h3 class=\"mb-0 mt-0\"><b>Book Info</b></h3>\r\n                                    <p>{{ details.ad.description }} “<span class=\"text-danger\">{{ details.customer.email\r\n                                            }}</span> ” </p>\r\n                                    <p><span class=\"text-info\">Book Number: </span> <span>{{ details.confirmation_number\r\n                                            }}</span></p>\r\n                                    <hr>\r\n                                </div>\r\n\r\n                                <div class=\"col-6 d-flex\">\r\n                                    <div>\r\n                                        <img class=\"img-fluid rounded mr-3\" src=\"./assets/Icons/PNG/Calender Black.png\">\r\n                                    </div>\r\n                                    <div>\r\n                                        <p class=\"mb-0\" hidden>{{moment(details.from).format('ddd')}}, {{moment(details.from).format('MMM Do, YYYY')}} - {{moment(details.to).format('ddd')}}, {{moment(details.to).format('MMM Do, YYYY')}} </p>\r\n                                        \r\n                                        <p class=\"mb-0\">Check-in: {{moment(details.from).format('ddd')}},\r\n                                            {{moment(details.from).format('MMM Do, YYYY')}}</p>\r\n                                        <p class=\"mb-0\">Check-out: {{moment(details.to).format('ddd')}},\r\n                                            {{moment(details.to).format('MMM Do, YYYY')}} </p>\r\n                                    </div>\r\n                                    <hr>\r\n                                </div>\r\n                                <div class=\"col-6 d-flex text-left\" *ngIf=\"details.status==0\">\r\n                                    <button class=\"btn btn-danger btn-round btn-block py-3\" *ngIf=\"details.check_in_status == 0\" (click)=\"checkIn(details.id, details.confirmation_number)\">Check In</button>\r\n                                    <button class=\"btn btn-danger btn-round btn-block py-3\" *ngIf=\"details.check_in_status == 1\" (click)=\"checkOut(details.id, details.confirmation_number)\">Check Out</button>\r\n                                    <hr>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                    <hr>\r\n                                </div>\r\n\r\n                                <div class=\"col-12 d-flex\">\r\n                                    <div>\r\n                                        <img class=\"img-fluid rounded mr-3\" src=\"./assets/Icons/PNG/Guests.png\">\r\n                                    </div>\r\n                                    <div>\r\n                                        <h4 class=\"mb-0\"> <b>Guests</b> </h4>\r\n                                        <p class=\"mb-0\">{{ details.ad.guests }}</p>\r\n                                        <p class=\"mb-0\" hidden>Adults: 02</p>\r\n                                        <p class=\"mb-0\" hidden>Children: 01 (Child 1: 10 years old)</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                    <hr>\r\n                                </div>\r\n\r\n                                <div class=\"col-12 d-flex\">\r\n                                    <div>\r\n                                        <img class=\"img-fluid rounded mr-3\" src=\"./assets/Icons/PNG/Offer policies.png\">\r\n                                    </div>\r\n                                    <div>\r\n                                        <h4 class=\"mb-0\"> <b>Offer policies</b> </h4>\r\n                                        <a class=\"mb-0 text-danger\" data-toggle=\"modal\" data-target=\"#terms\"> <u>View\r\n                                                all policies</u></a>\r\n                                    </div>\r\n                                    <hr>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                    <hr>\r\n                                </div>\r\n\r\n                                <div class=\"col-12 d-flex\">\r\n                                    <div>\r\n                                        <img class=\"img-fluid rounded mr-3\"\r\n                                            src=\"./assets/Icons/PNG/Contact the offer.png\">\r\n                                    </div>\r\n                                    <div>\r\n                                        <h4 class=\"mb-0\"> <b>Contact the offer</b> </h4>\r\n                                        <p class=\"mb-0\">\r\n                                            Discuss changes to your booking or ask about payments\r\n                                            and refunds\r\n                                        </p>\r\n                                        <div class=\"d-flex\">\r\n                                            <div>\r\n                                                <img class=\"img-fluid rounded mr-3\"\r\n                                                    src=\"./assets/Icons/PNG/Language_Normal.png\">\r\n                                            </div>\r\n                                            <div (click)=\"showinbox()\" style=\"cursor: pointer\">\r\n                                                <h4 class=\"mb-0\"><b> Message offer</b></h4>\r\n                                                <p class=\"text-danger\">Send a message</p>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"d-flex\">\r\n                                            <div>\r\n                                                <img class=\"img-fluid rounded mr-3\"\r\n                                                    src=\"./assets/Icons/PNG/Contact number.png\">\r\n                                            </div>\r\n                                            <div>\r\n                                                <h4 class=\"mb-0\"><b> Contact number</b></h4>\r\n                                                <p class=\"text-danger\">{{ details.customer.contact_no }}</p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <hr>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                    <div class=\"card\" style=\"background: #f0f0f0;\">\r\n                                        <div class=\"card-body\">\r\n                                            <h4>Total price for <span *ngIf=\"details.ad.rooms != 0\"><span *ngIf=\"details.ad.rooms == 1\">{{ details.ad.rooms }} room</span><span *ngIf=\"details.ad.rooms > 1\">{{ details.ad.rooms }} rooms</span></span></h4>\r\n                                            <!-- <p class=\"ml-4\">\r\n                                                Rooms: <b>{{ details.ad.rooms }}</b> <br>\r\n                                                Bathrooms: <b>{{ details.ad.bathrooms }}</b> <br>\r\n                                                Single Bed: <b>{{ details.ad.single_bed }}</b> <br>\r\n                                                Double Bed: <b>{{ details.ad.double_bed }}</b> <br>\r\n                                                Large Bed: <b>{{ details.ad.large_bed }}</b> <br>\r\n                                                Extra Large Bed: <b>{{ details.ad.extra_large_bed }}</b>\r\n                                            </p> -->\r\n                                            <h3 class=\"mb-0\"><b> <del class=\"text-danger\">{{ details.ad.currency }}{{ details.total_price\r\n                                                        }}</del> {{ details.ad.currency }}{{ details.net_price }}</b></h3>\r\n                                            <p hidden>+$9 taxes and charges</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-6 text-left\">\r\n                                    <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#exampleModal\">View\r\n                                        facilites</a>\r\n                                </div>\r\n                                <div class=\"col-6 text-right\" *ngIf=\"details.status == 0\">\r\n                                    <button class=\"btn btn-danger btn-round btn-block py-3\" data-toggle=\"modal\"\r\n                                        data-target=\"#booking\">Cancel Booking</button>\r\n                                </div>\r\n                                <!-- <div hidden class=\"col-6 text-right\" *ngIf=\"details.status==0\">\r\n                                    <a class=\"text-danger\">Completed</a> &nbsp;\r\n                                    <a class=\"text-danger\">Cancelled</a>\r\n                                </div> -->\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n            aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <h5 class=\"modal-title\" id=\"exampleModalLabel\">\r\n                            Facilities\r\n                        </h5>\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"modal-body\" *ngIf=\"details\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12 d-flex\" *ngFor=\"let features of details.ad.features\">\r\n                                <div class=\"mr-4\"><img width=\"64\"\r\n                                        src=\"http://oneroom3.crosip.com/{{ features.feature.icon }}\" /></div>\r\n                                <div class=\"ml-4\">\r\n                                    <h4><b>{{features.feature.name}}</b></h4>\r\n                                    <p>{{features.feature.description}}</p>\r\n                                    <hr>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal fade bd-example-modal-lg\" id=\"terms\" tabindex=\"-1\" role=\"dialog\"\r\n            aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-lg\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <h5 class=\"modal-title text-left\" id=\"exampleModalLabel\">Booking Conditions</h5>\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"modal-body\" *ngIf=\"details\">\r\n                        <hr>\r\n                        {{ details.ad.terms_policies }}\r\n                        <hr>\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal fade bd-example-modal-lg\" id=\"booking\" tabindex=\"-1\" role=\"dialog\"\r\n            aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-lg\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <h5 class=\"modal-title text-left\" id=\"exampleModalLabel\">Cancel Booking</h5>\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n                    </div>\r\n                    <form [formGroup]=\"bookingForm\" #bookingNgForm=\"ngForm\">\r\n                        <div class=\"modal-body\">\r\n                            <hr>\r\n                            <div *ngIf=\"showAlert\"\r\n                                style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n                                class=\"alert alert-error\">{{ errorMessage }}</div>\r\n                            <div class=\"form-group\">\r\n                                <label>Cancellation Reason</label>\r\n                                <textarea class=\"form-control\" [formControlName]=\"'message'\" required></textarea>\r\n                            </div>\r\n                            <hr>\r\n                        </div>\r\n                        <div class=\"modal-footer\">\r\n                            <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancelBooking()\">Submit</button>\r\n                            &nbsp; &nbsp;\r\n                            <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\"\r\n                                style=\"color: black;\">Close</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <app-footerhostportal-web></app-footerhostportal-web>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 50310:
/*!************************************************************************!*\
  !*** ./src/app/Host/Bookinglist/Bookinglist.component.html?ngResource ***!
  \************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<style>\r\n  .nav-tabs, .nav-pills {\r\n    border: 0;\r\n    border-radius: 3px;\r\n    padding: 0 0px;\r\n    border-bottom: 1px solid;\r\n    border-color: #cbc2c2;\r\n}\r\n.nav-pills.nav-pills-danger .nav-item .nav-link.active, .nav-pills.nav-pills-danger .nav-item .nav-link.active:focus, .nav-pills.nav-pills-danger .nav-item .nav-link.active:hover {\r\n    background-color: transparent !important;\r\n    color: #ed8935 !important;\r\n    border-radius: 0px;\r\n    border: none;\r\n    box-shadow: none;\r\n    border-bottom: 2px solid;\r\n}\r\n</style>\r\n\r\n<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header lock-page header-filter\" filter-color=\"black\" style=\"background-color:#fafafa; background-size: cover; background-position: top center;\" >\r\n    <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\r\n    <div class=\"container\" >\r\n      <div class=\"row justify-content-left\" style=\"margin-top: 8vh;\">\r\n        <div class=\"col-12\">\r\n          <h3><b>{{'trans.Booked_List' | translate}}</b></h3>\r\n          <ul class=\"nav nav-pills nav-pills-danger justify-content-left\" role=\"tablist\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link active px-1 pr-3 py-1\" style=\"min-width:50px !important;font-weight: bold;\" data-toggle=\"tab\" href=\"#link1\" role=\"tablist\">\r\n                {{'trans.Active' | translate}}\r\n              </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link px-1 py-1\" style=\"min-width:50px !important;font-weight: bold;\" data-toggle=\"tab\" href=\"#link2\" role=\"tablist\">\r\n                {{'trans.Completed' | translate}}\r\n              </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link px-1 py-1\" style=\"min-width:50px !important;font-weight: bold;\" data-toggle=\"tab\" href=\"#link3\" role=\"tablist\">\r\n                {{'trans.Cancelled' | translate}}\r\n              </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link px-1 py-1\" style=\"min-width:50px !important;font-weight: bold;\" data-toggle=\"tab\" href=\"#link4\" role=\"tablist\">\r\n                {{'trans.Dispute' | translate}}\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"tab-content  col-12 mt-3\">\r\n          <div class=\"tab-pane active \" id=\"link1\">\r\n            <div class=\"row \" *ngIf='offer0.length > 0'>\r\n              <div class=\"col-md-6\" *ngFor=\"let offer of offer0\">\r\n                <div class=\"card mt-3 mb-1\" (click)=\"getBookingDetails(offer.id)\">\r\n                  <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-4 col-lg-3\">\r\n                        <img class=\"img-fluid rounded\" src=\"http://oneroom3.crosip.com/{{ offer.attachment }}\">\r\n                      </div>\r\n                      <div class=\"col-md-8 col-lg-9\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12\">\r\n                            <h4 class=\"mb-0\"><b>{{ offer.title }}</b></h4>\r\n                          </div>\r\n                          <div class=\"col-5\">\r\n                            <p class=\"mb-0\">Check-In</p>\r\n                            <p class=\"mb-0\">Check-OUt</p>\r\n                            <p class=\"mb-0\">Price</p>\r\n                            <p class=\"mb-0\">Guests</p>\r\n                            <p class=\"mb-0\">Confirmation N.</p>\r\n                            <p class=\"mb-0\">Status</p>\r\n                          </div>\r\n                          <div class=\"col-7\">\r\n                            <p class=\"mb-0\">: {{moment(offer.start_from).format('ddd')}}, {{moment(offer.start_from).format('MMM Do, YYYY')}}</p>\r\n                            <p class=\"mb-0\">: {{moment(offer.end_to).format('ddd')}}, {{moment(offer.end_to).format('MMM Do, YYYY')}}</p>\r\n                            <p class=\"mb-0\"><b>: {{ offer.currency }}{{ offer.current_price }}</b></p>\r\n                            <p class=\"mb-0\">: {{ offer.guests }}</p>\r\n                            <p class=\"mb-0 text-danger\">: {{ offer.confirmation_number }}</p>\r\n                            <p class=\"mb-0 text-danger\">: Active</p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- <div class=\"col-12 text-center mt-4 mb-4\">\r\n                <button class=\"btn btn-outline-default border text-dark btn-round\">More Active Offer</button>\r\n              </div> -->\r\n            </div>\r\n            <div class=\"row \" *ngIf='offer0.length == 0'>\r\n              <div class=\"col-md-12 text-center\">\r\n                <h3>No Records Found</h3>\r\n              </div>\r\n            </div>\r\n            <br>\r\n          </div>\r\n         \r\n          <div class=\"tab-pane \" id=\"link2\">\r\n            <div class=\"row  \" *ngIf='offer1.length > 0'>\r\n              <div class=\"col-md-6\" *ngFor=\"let offer of offer1\">\r\n                <div class=\"card mt-3 mb-1\" (click)=\"getBookingDetails(offer.id)\">\r\n                  <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-4 col-lg-3\">\r\n                        <img class=\"img-fluid rounded\" src=\"http://oneroom3.crosip.com/{{ offer.attachment }}\">\r\n                      </div>\r\n                      <div class=\"col-md-8 col-lg-9\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12\">\r\n                            <h4 class=\"mb-0\"><b>{{ offer.title }}</b></h4>\r\n                          </div>\r\n                          <div class=\"col-5\">\r\n                            <p class=\"mb-0\">Check-In</p>\r\n                            <p class=\"mb-0\">Check-OUt</p>\r\n                            <p class=\"mb-0\">Price</p>\r\n                            <p class=\"mb-0\">Guests</p>\r\n                            <p class=\"mb-0\">Confirmation N.</p>\r\n                            <p class=\"mb-0\">Status</p>\r\n                          </div>\r\n                          <div class=\"col-7\">\r\n                            <p class=\"mb-0\">: {{moment(offer.start_from).format('ddd')}}, {{moment(offer.start_from).format('MMM Do, YYYY')}}</p>\r\n                            <p class=\"mb-0\">: {{moment(offer.end_to).format('ddd')}}, {{moment(offer.end_to).format('MMM Do, YYYY')}}</p>\r\n                            <p class=\"mb-0\"><b>: {{ offer.currency }}{{ offer.current_price }}</b></p>\r\n                            <p class=\"mb-0\">: {{ offer.guests }}</p>\r\n                            <p class=\"mb-0 text-danger\">: {{ offer.confirmation_number }}</p>\r\n                            <p class=\"mb-0 text-danger\">: Completed</p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- <div class=\"col-12 text-center mt-4 mb-4\">\r\n                <button class=\"btn btn-outline-default border text-dark btn-round\">More Active Offer</button>\r\n              </div> -->\r\n            </div>\r\n            <div class=\"row \" *ngIf='offer1.length == 0'>\r\n              <div class=\"col-md-12 text-center\">\r\n                <h3>No Records Found</h3>\r\n              </div>\r\n            </div>\r\n            <br>\r\n          </div>\r\n\r\n          <div class=\"tab-pane \" id=\"link3\">\r\n            <div class=\"row\" *ngIf='offer2.length > 0'>\r\n              <div class=\"col-md-6\" *ngFor=\"let offer of offer2\">\r\n                <div class=\"card mt-3 mb-1\" (click)=\"getBookingDetails(offer.id)\">\r\n                  <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-4 col-lg-3\">\r\n                        <img class=\"img-fluid rounded\" src=\"http://oneroom3.crosip.com/{{ offer.attachment }}\">\r\n                      </div>\r\n                      <div class=\"col-md-8 col-lg-9\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12\">\r\n                            <h4 class=\"mb-0\"><b>{{ offer.title }}</b></h4>\r\n                          </div>\r\n                          <div class=\"col-5\">\r\n                            <p class=\"mb-0\">Check-In</p>\r\n                            <p class=\"mb-0\">Check-OUt</p>\r\n                            <p class=\"mb-0\">Price</p>\r\n                            <p class=\"mb-0\">Guests</p>\r\n                            <p class=\"mb-0\">Confirmation N.</p>\r\n                            <p class=\"mb-0\">Status</p>\r\n                          </div>\r\n                          <div class=\"col-7\">\r\n                            <p class=\"mb-0\">: {{moment(offer.start_from).format('ddd')}}, {{moment(offer.start_from).format('MMM Do, YYYY')}}</p>\r\n                            <p class=\"mb-0\">: {{moment(offer.end_to).format('ddd')}}, {{moment(offer.end_to).format('MMM Do, YYYY')}}</p>\r\n                            <p class=\"mb-0\"><b>: {{ offer.currency }}{{ offer.current_price }}</b></p>\r\n                            <p class=\"mb-0\">: {{ offer.guests }}</p>\r\n                            <p class=\"mb-0 text-danger\">: {{ offer.confirmation_number }}</p>\r\n                            <p class=\"mb-0 text-danger\">: Cancelled</p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- <div class=\"col-12 text-center mt-4 mb-4\">\r\n                <button class=\"btn btn-outline-default border text-dark btn-round\">More Active Offer</button>\r\n              </div> -->\r\n            </div>\r\n            <div class=\"row \" *ngIf='offer2.length == 0'>\r\n              <div class=\"col-md-12 text-center\">\r\n                <h3>No Records Found</h3>\r\n              </div>\r\n            </div>\r\n            <br>\r\n          </div>\r\n\r\n          <div class=\"tab-pane\" id=\"link4\">\r\n            <div class=\"row\" *ngIf='offer3.length > 0'>\r\n              <div class=\"col-md-6\" *ngFor=\"let offer of offer3\">\r\n                <div class=\"card mt-3 mb-1\" (click)=\"disputeDetails(offer.id)\">\r\n                  <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-4 col-lg-3\">\r\n                        <img class=\"img-fluid rounded\" src=\"http://oneroom3.crosip.com/{{ offer.offer.attachments[0].path }}\">\r\n                      </div>\r\n                      <div class=\"col-md-8 col-lg-9\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12\">\r\n                            <h4 class=\"mb-0\"><b>{{ offer.offer.title }}</b></h4>\r\n                          </div>\r\n                          <div class=\"col-5\">\r\n                            <p class=\"mb-0\">Check-In</p>\r\n                            <p class=\"mb-0\">Check-OUt</p>\r\n                            <p class=\"mb-0\">Price</p>\r\n                            <p class=\"mb-0\">Guests</p>\r\n                            <p class=\"mb-0\">Status</p>\r\n                          </div>\r\n                          <div class=\"col-7\">\r\n                            <p class=\"mb-0\">: {{moment(offer.offer.start_from).format('ddd')}}, {{moment(offer.offer.start_from).format('MMM Do, YYYY')}}</p>\r\n                            <p class=\"mb-0\">: {{moment(offer.offer.end_to).format('ddd')}}, {{moment(offer.offer.end_to).format('MMM Do, YYYY')}}</p>\r\n                            <p class=\"mb-0\"><b>: {{ offer.offer.currency }}{{ offer.offer.current_price }}</b></p>\r\n                            <p class=\"mb-0\">: {{ offer.offer.guests }}</p>\r\n                            <p class=\"mb-0 text-danger\">: Dispute</p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf='offer3.length == 0'>\r\n              <div class=\"col-md-12 text-center\">\r\n                <h3>No Records Found</h3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <app-footerhostportal-web></app-footerhostportal-web>\r\n</div>\r\n</div>";

/***/ }),

/***/ 93237:
/*!**************************************************************************!*\
  !*** ./src/app/Host/Bookinglistt/Bookinglistt.component.html?ngResource ***!
  \**************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<style>\r\n  .nav-pills .nav-item .nav-link {\r\n    font-size: 16px !important;\r\n  }\r\n\r\n  .togglebutton label .toggle:after {\r\n    width: 30px;\r\n    height: 28px;\r\n  }\r\n\r\n  .togglebutton label input[type=checkbox]:checked+.toggle:after {\r\n    left: 26px;\r\n  }\r\n\r\n  .togglebutton label .toggle,\r\n  .togglebutton label input[type=checkbox][disabled]+.toggle {\r\n    content: \"\";\r\n    display: inline-block;\r\n    width: 55px;\r\n    height: 25px;\r\n  }\r\n\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active,\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active:focus,\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active:hover {\r\n    background-color: transparent !important;\r\n    color: #ed8935 !important;\r\n    box-shadow: none;\r\n  }\r\n\r\n  .nav-pills .nav-item i {\r\n    display: block;\r\n    font-size: 16px;\r\n    padding: 0px 0;\r\n    float: right;\r\n  }\r\n\r\n  .slectoffer {\r\n    background-color: #f8ddc2 !important;\r\n  }\r\n\r\n  .img-fluid {\r\n    cursor: pointer;\r\n  }\r\n\r\n  .cc-selector input {\r\n    margin: 0;\r\n    padding: 0;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n  }\r\n\r\n  .house {\r\n    background-image: url(../assets/Icons/PNG/House_normal@2x.png);\r\n  }\r\n\r\n  .apartment {\r\n    background-image: url(../assets/Icons/PNG/Apartment_Normal@2x.png);\r\n  }\r\n\r\n  .hotel {\r\n    background-image: url(../assets/Icons/PNG/Hotel_room_Normal@2x.png);\r\n  }\r\n\r\n  .wifi {\r\n    background-image: url(../assets/Icons/PNG/Free_WiFi_Normal@2x.png);\r\n  }\r\n\r\n  .parking {\r\n    background-image: url(../assets/Icons/PNG/Parking_Normal@2x.png);\r\n  }\r\n\r\n  .children {\r\n    background-image: url(../assets/Icons/PNG/Children_and_extra_beds@2x.png);\r\n  }\r\n\r\n  .air-conditioning {\r\n    background-image: url(../assets/Icons/PNG/Air_conditioning_Normal@2x.png);\r\n  }\r\n\r\n  .pets {\r\n    background-image: url(../assets/Icons/PNG/Pets_Normal@2x.png);\r\n  }\r\n\r\n  .credit-card {\r\n    background-image: url(../assets/Icons/PNG/Credit_card_support@2x.png);\r\n  }\r\n\r\n  .electric-vehicle {\r\n    background-image: url(../assets/Icons/PNG/Electric_vehicle_charging_station_Normal@2x.png);\r\n  }\r\n\r\n  .kitchen {\r\n    background-image: url(../assets/Icons/PNG/Kitchen_Normal@2x.png);\r\n  }\r\n\r\n  .swimming-pool {\r\n    background-image: url(../assets/Icons/PNG/Swimming_pool_Normal@2x.png);\r\n  }\r\n\r\n  .drinkcard-cc {\r\n    cursor: pointer;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    display: inline-block;\r\n    width: 100px;\r\n    height: 70px;\r\n    -webkit-transition: all 100ms ease-in;\r\n    -moz-transition: all 100ms ease-in;\r\n    transition: all 100ms ease-in;\r\n    -webkit-filter: brightness(1.8) grayscale(1) opacity(.7);\r\n    -moz-filter: brightness(1.8) grayscale(1) opacity(.7);\r\n    filter: brightness(1.8) grayscale(1) opacity(.7);\r\n    box-shadow: none;\r\n  }\r\n\r\n  .drinkcard-cc:hover {\r\n    -webkit-filter: brightness(1.2) grayscale(.5) opacity(.9);\r\n    -moz-filter: brightness(1.2) grayscale(.5) opacity(.9);\r\n    filter: brightness(1.2) grayscale(.5) opacity(.9);\r\n  }\r\n\r\n  .cc-selector-2 input:active+.drinkcard-cc,\r\n  .cc-selector input:active+.drinkcard-cc {\r\n    opacity: .9;\r\n  }\r\n\r\n  .cc-selector-2 input:checked+.drinkcard-cc,\r\n  .cc-selector input:checked+.drinkcard-cc {\r\n    -webkit-filter: none;\r\n    -moz-filter: none;\r\n    filter: none;\r\n  }\r\n\r\n  #upload-button {\r\n    background-color: #f5f6fa;\r\n    color: #7f8fa6 !important;\r\n    border: dotted 1px;\r\n    border-radius: 10px;\r\n    padding: 10px 5px;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .divscroll::-webkit-scrollbar {\r\n    scrollbar-gutter: 2px;\r\n    width: 4px;\r\n    z-index: 10;\r\n    border-radius: 10px;\r\n    background: white;\r\n  }\r\n\r\n  .divscroll::-webkit-scrollbar-thumb {\r\n    background-color: #2d5286;\r\n  }\r\n\r\n  agm-map {\r\n    height: 300px !important;\r\n    width: 100%;\r\n    /* This is really important*/\r\n  }\r\n  .cardheader:hover{\r\n    background-color: #f7f1e3 !important;\r\n  }\r\n</style>\r\n\r\n<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header lock-page header-filter\" filter-color=\"black\"\r\n    style=\"background-color:#fafafa; background-size: cover; background-position: top center;\">\r\n    <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\r\n    <div class=\"container wizard-container\">\r\n      <div class=\"row justify-content-left\" style=\"margin-top: 4vh;\">\r\n        <div class=\"col-12 \" >\r\n          <h3 class=\"ml-2\"><b>{{'trans.Let_set_up_your_offer' | translate}}</b></h3>\r\n          <div class=\"col-md-12 card-wizard\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-4 col-md-5\">\r\n                <div class=\"card mt-0\">\r\n                  <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-12\">\r\n                        <h3 class=\"ml-3\"><b> {{'trans.Overview' | translate}}</b></h3>\r\n                        <div *ngIf=\"showAlert\"\r\n                          style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n                          class=\"alert alert-error\">{{ errorMessage }}</div>\r\n                        <ul class=\"nav nav-pills flex-column nav-pills-danger justify-content-left\" role=\"tab\">\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link text-capitalize font-weight-bold active text-left px-3 py-1\"\r\n                              (click)=\"check=0\" data-toggle=\"tab\" href=\"#link1\" role=\"tab\">\r\n                              <span> {{'trans.offer_title' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>0\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold text-left py-1\" (click)=\"check=1\"\r\n                              data-toggle=\"tab\" href=\"#link2\" role=\"tab\">\r\n                              <span> {{'trans.offer_type' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>1\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" (click)=\"check=2\"\r\n                              data-toggle=\"tab\" href=\"#link3\" role=\"tab\">\r\n                              <span> {{'trans.Price' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>2\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" (click)=\"check=3\"\r\n                              data-toggle=\"tab\" href=\"#link4\" role=\"tab\">\r\n                              <span> {{'trans.Photo_Video' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>3\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" (click)=\"check=4\"\r\n                              data-toggle=\"tab\" href=\"#link5\" role=\"tab\">\r\n                              <span> {{'trans.Capacity' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>4\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold text-left py-1\" (click)=\"check=5\"\r\n                              data-toggle=\"tab\" href=\"#link6\" role=\"tab\">\r\n                              <span> {{'trans.Period' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>5\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold text-left py-1\" (click)=\"check=6\"\r\n                              data-toggle=\"tab\" href=\"#link7\" role=\"tab\">\r\n                              <span> {{'trans.Description' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>6\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" (click)=\"check=7\"\r\n                              data-toggle=\"tab\" href=\"#link8\" role=\"tab\">\r\n                              <span> {{'trans.Location' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>7\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" (click)=\"check=8\"\r\n                              data-toggle=\"tab\" href=\"#link9\" role=\"tab\">\r\n                              <span>  {{'trans.Equipment_features' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>8\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold text-left py-1\" (click)=\"check=9\"\r\n                              data-toggle=\"tab\" href=\"#link10\" role=\"tab\">\r\n                              <span>{{'trans.Terms_Policies' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>9\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold text-left py-1\" (click)=\"check=10\"\r\n                              data-toggle=\"tab\" href=\"#link11\" role=\"tab\">\r\n                              <span> {{'trans.Language' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>10\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" (click)=\"check=11\"\r\n                              data-toggle=\"tab\" href=\"#link12\" role=\"tab\">\r\n                              <span> {{'trans.Discount' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>11\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" (click)=\"check=12\"\r\n                              data-toggle=\"tab\" href=\"#link13\" role=\"tab\">\r\n                              <span> {{'trans.Publish' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>12\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-6 col-md-7\">\r\n                <form [formGroup]=\"offerForm\" #offerNgForm=\"ngForm\" id=\"formid\">\r\n                  <div class=\"tab-content tab-space col-12 pt-0\">\r\n                    <div class=\"tab-pane active \" id=\"link1\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                  <h3><b> {{'trans.offer_title' | translate}}</b></h3>\r\n                                </div>\r\n                                <div class=\"col-6 text-right\"><button\r\n                                    class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}}</button></div>\r\n                                <div class=\"col-12\">\r\n                                  <textarea rows=\"19\" class=\"form-control\" placeholder=\"Type the offer title\" required\r\n                                    [formControlName]=\"'title'\"></textarea>\r\n                                </div>\r\n                                <div class=\"col-12 mt-3\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\"> {{'trans.Cancel' | translate}}</button>\r\n                                  <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\"> {{'trans.Next' | translate}}</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane\" id=\"link2\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                  <h3><b> {{'trans.offer_type' | translate}}</b></h3>\r\n                                </div>\r\n                                <div class=\"col-6 text-right\">\r\n                                  <button class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}} </button>\r\n                                </div>\r\n                                <div class=\"col-md-12\">\r\n                                  <div class=\"cc-selector\">\r\n                                    <div class=\"row\">\r\n                                      <div class=\"col-md-4\" (click)=\"slectoffer()\">\r\n                                        <div class=\"card cardheader\" style=\"background:#fafafa;\">\r\n                                          <div class=\"card-body text-center\">\r\n                                            <input id=\"house\" type=\"radio\" [formControlName]=\"'type'\" required\r\n                                              value=\"house\" />\r\n                                            <label class=\"drinkcard-cc house ml-3\" for=\"house\"></label>\r\n                                            <p class=\"mb-0\"> {{'trans.House' | translate}}</p>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"col-md-4\" (click)=\"slectoffer()\">\r\n                                        <div class=\"card cardheader\" style=\"background:#fafafa;\">\r\n                                          <div class=\"card-body text-center\">\r\n                                            <input id=\"apartment\" type=\"radio\" [formControlName]=\"'type'\" required\r\n                                              value=\"apartment\" />\r\n                                            <label class=\"drinkcard-cc apartment ml-3\" for=\"apartment\"></label>\r\n                                            <p class=\"mb-0\"> {{'trans.Apartment' | translate}}</p>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"col-md-4\" (click)=\"slectoffer()\">\r\n                                        <div class=\"card cardheader\" (click)=\"slectoffer()\" style=\"background:#fafafa;\">\r\n                                          <div class=\"card-body text-center\">\r\n                                            <input id=\"hotel\" type=\"radio\" [formControlName]=\"'type'\" value=\"hotel\"\r\n                                              required />\r\n                                            <label class=\"drinkcard-cc hotel ml-3\" for=\"hotel\"></label>\r\n                                            <p class=\"mb-0\"> {{'trans.Hotel_Room' | translate}}</p>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-12\" style=\"margin-top:250px;\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\"> {{'trans.Cancel' | translate}}</button>\r\n                                  <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\"> {{'trans.Next' | translate}}</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane\" id=\"link3\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                  <h3><b> {{'trans.Price_your_offer' | translate}}</b></h3>\r\n                                </div>\r\n                                <div class=\"col-6 text-right\"><button\r\n                                    class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}} </button></div>\r\n                                <div class=\"col-12\">\r\n                                  <p> {{'trans.To_help_you_earn_more' | translate}}</p>\r\n                                    <div class=\"row\">\r\n                                      <div class=\"col-md-2\">\r\n                                        <select class=\"form-control\" id=\"currency\" required>\r\n                                          <option value=\"$\">$</option>\r\n                                          <option value=\"€\">€</option>\r\n                                          <option value=\"Fr.\">Fr.</option>\r\n                                        </select>\r\n                                      </div>\r\n                                      <div class=\"col-md-10\">\r\n                                        <input type=\"number\" class=\"form-control\" placeholder=\"Type the Price\" required [formControlName]=\"'price'\" />\r\n                                      </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-12\" style=\"margin-top:300px;\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\"> {{'trans.Cancel' | translate}}</button>\r\n                                  <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\"> {{'trans.Next' | translate}}</button>\r\n\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane\" id=\"link4\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-12 text-right\"><button\r\n                                    class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.Add_photos_and_videos_to_your_offer' | translate}}</button></div>\r\n                                <div class=\"col-12\">\r\n                                  <h3 class=\"mt-0\"><b>{{'trans.Add_photos_and_videos_to_your_offer' | translate}}</b></h3>\r\n                                </div>\r\n                                <div class=\"col-12 text-center border-dotted text-white \" (click)=\"upload()\">\r\n                                  <div id=\"upload-button\">\r\n                                    <i class=\"fa fa-upload fa-lg\" aria-hidden=\"true\"></i> &nbsp;  {{'trans.Upload_Photos' | translate}}\r\n                                    <input type=\"file\" hidden id=\"inputhidden\" accept='.jpg,.jpeg,.JPG,.png,.PNG'\r\n                                      required (change)=\"uploadImages()\" multiple>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-12\" *ngIf=\"itemCounter != 0\">\r\n                                  <div class=\"row\">\r\n                                    <div class=\"col-md-12 upload-images\" *ngFor=\"let item of items; let i = index\">\r\n                                      <div class=\"uploadImage{{i}} col-12 d-flex mt-4\">\r\n                                        <div class=\"col-md-4 img-fluid\"\r\n                                          [ngStyle]=\"{'background-image':'url('+item.src+')'}\"\r\n                                          style=\"height: 130px; background-size: contain !important; background-repeat: no-repeat !important;\">\r\n                                          <!-- <img src=\"{{sanitize(item.src)}}\" class=\"img-fluid \"> -->\r\n                                          <span\r\n                                            style=\"position: absolute; top: 15px; right: 25px; padding: 3px 5px; border-radius: 50%; background-color: white; color: black;\"\r\n                                            (click)=\"removePicture(i)\"><i class=\"fa fa-times\"\r\n                                              aria-hidden=\"true\"></i></span>\r\n                                        </div>\r\n                                        <div class=\"ml-3 col-md-8\">\r\n                                          <h4>{{ item.name }}</h4>\r\n                                          <input class=\"form-control\" id=\"img{{ item.id }}\" placeholder=\"Type a caption\"\r\n                                            (keypress)=\"setCaption(item.id)\" />\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-12\" style=\"margin-top: 200px;\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\">{{'trans.Cancel' | translate}} </button>\r\n                                  <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\">{{'trans.Next' | translate}}</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane\" id=\"link5\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                  <h3><b> {{'trans.Capacity' | translate}}</b></h3>\r\n                                </div>\r\n                                <div class=\"col-6 text-right\"><button\r\n                                    class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}}</button></div>\r\n                                <div class=\"col-12\">\r\n                                  <p>{{'trans.To_help_you_earn_more' | translate}}</p>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <div class=\"row\">\r\n                                    <div class=\"col-sm-8 col-md-6\">\r\n                                    \r\n                                      {{'trans.How_many_guests_can_stay' | translate}}\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-md-6 text-right\"> <img\r\n                                        src=\"../assets/Icons/PNG/Group 28.png\" (click)=\"minus(0)\" class=\"img-fluid\"><span\r\n                                        class=\"mr-2 ml-2\" style=\"font-size:15;font-weight: bold;\">{{incval}}</span> <img\r\n                                        (click)=\"plus(0)\" src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid\">\r\n                                    </div>\r\n                                  </div>\r\n                                  <hr class=\"mt-0 pt-0\">\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <div class=\"row\">\r\n                                    <div class=\"col-sm-8 col-md-6\">\r\n                                      {{'trans.How_many_rooms_are_there' | translate}}\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-md-6 text-right\"> <img\r\n                                        src=\"../assets/Icons/PNG/Group 28.png\" (click)=\"minus(6)\" class=\"img-fluid\"><span\r\n                                        class=\"mr-2 ml-2\" style=\"font-size:15;font-weight: bold;\">{{incval6}}</span>\r\n                                      <img (click)=\"plus(6)\" src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid\">\r\n                                    </div>\r\n                                  </div>\r\n                                  <hr class=\"mt-0 pt-0\">\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <div class=\"row\">\r\n                                    <div class=\"col-sm-8 col-md-6\">\r\n                                      {{'trans.which_beds_are_available_in_this_room' | translate}}\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-md-6 text-right\"> <img\r\n                                        src=\"../assets/Icons/PNG/Group 28.png\" (click)=\"minus(1)\" class=\"img-fluid\"><span\r\n                                        class=\"mr-2 ml-2\" style=\"font-size:15;font-weight: bold;\">{{incval1}}</span>\r\n                                      <img (click)=\"plus(1)\" src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid\">\r\n                                    </div>\r\n                                  </div>\r\n                                  <hr class=\"mt-0 pt-0\">\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <div class=\"row\">\r\n                                    <div class=\"col-12\">\r\n                                      <p> {{'trans.which_beds_are_available_in_this_room' | translate}}</p>\r\n                                    </div>\r\n                                    <div class=\"col-8 col-md-6\">\r\n                                      <p>{{'trans.single_bed' | translate}}<small>90-130 cm wide</small></p>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-md-6 text-right\"> <img\r\n                                        src=\"../assets/Icons/PNG/Group 28.png\" (click)=\"minus(2)\" class=\"img-fluid\"><span\r\n                                        class=\"mr-2 ml-2\" style=\"font-size:15;font-weight: bold;\">{{incval2}}</span>\r\n                                      <img (click)=\"plus(2)\" src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid\">\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <div class=\"row\">\r\n                                    <div class=\"col-sm-8 col-md-6\">\r\n                                      <p>{{'trans.Double_bed' | translate}} <small>131-150 cm wide</small></p>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-md-6 text-right\"> <img\r\n                                        src=\"../assets/Icons/PNG/Group 28.png\" (click)=\"minus(3)\" class=\"img-fluid\"><span\r\n                                        class=\"mr-2 ml-2\" style=\"font-size:15;font-weight: bold;\">{{incval3}}</span>\r\n                                      <img (click)=\"plus(3)\" src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid\">\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <div class=\"row\">\r\n                                    <div class=\"col-sm-8 col-md-6\">\r\n                                      <p> {{'trans.Large_bed' | translate}} (King size)<small>151-180 cm wide</small></p>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-md-6 text-right\"> <img\r\n                                        src=\"../assets/Icons/PNG/Group 28.png\" (click)=\"minus(4)\" class=\"img-fluid\"><span\r\n                                        class=\"mr-2 ml-2\" style=\"font-size:15;font-weight: bold;\">{{incval4}}</span>\r\n                                      <img (click)=\"plus(4)\" src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid\">\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <div class=\"row\">\r\n                                    <div class=\"col-sm-8 col-md-6\">\r\n                                      <p>{{'trans.Extra_large_double_bed' | translate}} <small>181-220 cm wide</small></p>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-md-6 text-right\"> <img\r\n                                        src=\"../assets/Icons/PNG/Group 28.png\" (click)=\"minus(5)\" class=\"img-fluid\"><span\r\n                                        class=\"mr-2 ml-2\" style=\"font-size:15;font-weight: bold;\">{{incval5}}</span>\r\n                                      <img (click)=\"plus(5)\" src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid\">\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\">{{'trans.Cancel' | translate}}</button>\r\n                                  <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\">{{'trans.Next' | translate}}</button>\r\n\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane\" id=\"link6\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-6\">\r\n                              <h3><b> {{'trans.Date_range' | translate}} </b></h3>\r\n                            </div>\r\n                            <div class=\"col-6 text-right\"><button\r\n                                class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}}</button></div>\r\n                            <div class=\"col-12\">\r\n                              <p>{{'trans.To_help_you_earn_more' | translate}}</p>\r\n                            </div>\r\n                            <div class=\"col-12\">\r\n                              <mat-form-field class=\"example-form-field \" hidden appearance=\"fill\">\r\n                                <mat-date-range-input [formGroup]=\"campaignOne\" [rangePicker]=\"campaignOnePicker\"\r\n                                  [comparisonStart]=\"campaignTwo.value.start\" [comparisonEnd]=\"campaignTwo.value.end\">\r\n                                  <input matStartDate placeholder=\"Start date\" formControlName=\"start\">\r\n                                  <input matEndDate placeholder=\"End date\" formControlName=\"end\">\r\n                                </mat-date-range-input>\r\n                                <mat-datepicker-toggle matSuffix [for]=\"campaignOnePicker\"></mat-datepicker-toggle>\r\n                                <mat-date-range-picker #campaignOnePicker></mat-date-range-picker>\r\n                              </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-12\" style=\"margin-top: 280px;\">\r\n                              <button class=\"btn btn-default text-dark\" (click)=\"back()\">{{'trans.Cancel' | translate}}</button>\r\n                              <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\">{{'trans.Next' | translate}}</button>\r\n\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane  \" id=\"link7\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                  <h3><b> {{'trans.Description' | translate}}</b></h3>\r\n                                </div>\r\n                                <div class=\"col-6 text-right\"><button\r\n                                    class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}}</button></div>\r\n                                <div class=\"col-12\">\r\n                                  <textarea rows=\"19\" class=\"form-control\" placeholder=\"Type the Description\"\r\n                                    [formControlName]=\"'description'\"></textarea>\r\n                                </div>\r\n                                <div class=\"col-12 mt-3\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\">{{'trans.Cancel' | translate}}</button>\r\n                                  <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\">{{'trans.Next' | translate}}</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane\" id=\"link8\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-12 text-right\">\r\n                                  <button class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}}</button>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <h3><b> {{'trans.What_offer_you_propose' | translate}}</b></h3>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                    <input required type=\"text\" class=\"form-control\" (keydown.enter)=\"$event.preventDefault()\" placeholder=\"Type the address\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" #search id=\"address\">\r\n                                </div>\r\n                                <div class=\"col-12 mt-4\">\r\n                                  <h5><b>{{'trans.Pin_the_location_of_your_offer' | translate}}</b></h5>\r\n                                </div>\r\n                                <div class=\"col-12 mt-2\">\r\n                                  <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\">\r\n                                    <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [markerDraggable]=\"true\"\r\n                                      (dragEnd)=\"markerDragEnd($event)\"></agm-marker>\r\n                                  </agm-map>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <input type=\"text\" class=\"form-control\"\r\n                                    placeholder=\"Type the city\" required id=\"city\">\r\n                                </div>\r\n                                <div class=\"col-12\" style=\"margin-top: 150px;\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\">{{'trans.Cancel' | translate}}</button>\r\n                                  <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\">{{'trans.Next' | translate}}</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane\" id=\"link9\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                  <h3><b> {{'trans.Equipment_features' | translate}}</b></h3>\r\n                                </div>\r\n                                <div class=\"col-6 text-right\"><button\r\n                                    class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}}</button></div>\r\n                                <div class=\"col-12\">\r\n                                  <p>Lorem Ipsum is simply dummy text of the printing typesetting industry.\r\n                                    Lorem Ipsum has been the industry. </p>\r\n                                </div>\r\n                                <div class=\"col-md-12\" style=\"margin-top: -25px\">\r\n                                  <div class=\"cc-selector\">\r\n                                    <div class=\"row\">\r\n                                      <div class=\"col-md-4 \" *ngFor=\"let feature of equipmentFeatures\">\r\n                                        <div class=\"card cardheader\" (click)=\"slectoffer()\" style=\"background:#fafafa; min-height: 190px;\">\r\n                                          <div class=\"card-body text-center\">\r\n                                            <input id=\"{{feature.name}}\" type=\"checkbox\" class=\"features\"\r\n                                              name=\"{{feature.id}}\" value=\"wifi\" />\r\n                                            <label class=\"drinkcard-cc ml-3 mt-0 mb-0 {{feature.name}}\" for=\"{{feature.name}}\"\r\n                                              style=\"background-image: url('http://oneroom3.crosip.com/{{ feature.icon }}') !important;  background: transparent !important; background-size: contain; background-repeat: no-repeat;\"></label>\r\n                                            <p class=\"mb-0\">{{feature.name}}</p>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-12\" style=\"margin-top:5vh;\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\">{{'trans.Cancel' | translate}}</button>\r\n                                  <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\">{{'trans.Next' | translate}}</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane  \" id=\"link10\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                  <h3><b> {{'trans.Terms_Policies' | translate}}</b></h3>\r\n                                </div>\r\n                                <div class=\"col-6 text-right\"><button\r\n                                    class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}}</button></div>\r\n                                <div class=\"col-12\">\r\n                                  <textarea rows=\"19\" class=\"form-control\" placeholder=\"Type of terms/policies\"\r\n                                    [formControlName]=\"'terms_policies'\"></textarea>\r\n                                </div>\r\n                                <div class=\"col-12 mt-3\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\">{{'trans.Cancel' | translate}}</button>\r\n                                  <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\">{{'trans.Next' | translate}}</button>\r\n\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane  \" id=\"link11\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\" *ngIf=\"languages\">\r\n                                <div class=\"col-6\">\r\n                                  <h3><b> {{'trans.Language_spoken' | translate}}</b></h3>\r\n                                </div>\r\n                                <div class=\"col-6 text-right\">\r\n                                  <button class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}}</button>\r\n                                </div>\r\n                                <div class=\"col-md-12\">\r\n                                  <div class=\"row divscroll\" style=\"overflow: auto; overflow-x: hidden; height: 435px;\">\r\n                                    <div class=\"col-12\" *ngFor=\"let language of languages\">\r\n                                      <input type=\"checkbox\" value=\"{{language.id}}\" class=\"languages\"> {{language.name}}\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-12 mt-3\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\">{{'trans.Cancel' | translate}}</button>\r\n                                  <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\">{{'trans.Next' | translate}}</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane  \" id=\"link12\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-12 text-right\"><button\r\n                                    class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}}</button></div>\r\n                                <div class=\"col-12\">\r\n                                  <h3><b> {{'trans.Language_spoken' | translate}}</b></h3>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <h4><b>{{'trans.Offer_20_off' | translate}}</b></h4>\r\n                                  <p>{{'trans.who_book_your_service' | translate}}</p>\r\n                                  <!-- <button class=\"btn btn-default text-dark\">recommended</button> -->\r\n                                  <button class=\"btn btn-danger\" (click)=\"discountstep=1\"> {{'trans.Edit' | translate}}</button>\r\n                                  <hr>\r\n                                </div>\r\n                                <div class=\"col-12\" *ngIf=\"discountstep==1\">\r\n                                  <h4><b> {{'trans.Discount_update' | translate}}</b></h4>\r\n                                  <p><b> {{'trans.Number_of_percentage' | translate}}</b></p>\r\n                                  <input type=\"number\" class=\"form-control\" placeholder=\"Min. 40\" min=\"40\"\r\n                                    [formControlName]=\"'discount_of_percentage'\" required>\r\n                                </div>\r\n                                <div class=\"col-12\" *ngIf=\"discountstep==1\">\r\n                                  <p><b> {{'trans.Number_of_booking' | translate}}</b></p>\r\n                                  <input type=\"number\" class=\"form-control\" placeholder=\"Min. 40\" min=\"40\"\r\n                                    [formControlName]=\"'discount_of_booking'\" required>\r\n                                </div>\r\n                                <div class=\"col-12\" *ngIf=\"discountstep==1\">\r\n                                  <p><b> {{'trans.Subsidiary' | translate}}</b></p>\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"Lorem Ipsum\"\r\n                                    [formControlName]=\"'subsidiary'\">\r\n                                </div>\r\n                                <div class=\"col-12\" style=\"margin-top: 10px;\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\">{{'trans.Cancel' | translate}}</button>\r\n                                  <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\">{{'trans.Next' | translate}}</button>\r\n\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane  \" id=\"link13\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-12 text-right\"><button\r\n                                    class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}}</button></div>\r\n                                <div class=\"col-12\">\r\n                                  <h3><b> {{'trans.Offer_publish' | translate}}</b></h3>\r\n                                </div>\r\n                                <div class=\"col-12 d-flex\">\r\n                                  <div class=\"col-md-9\">\r\n                                    <p>Lorem Ipsum is simply dummy text of the printing\r\n                                      typesetting industry. Lorem Ipsum has been the industry</p>\r\n                                  </div>\r\n                                  <div class=\"col-md-3\">\r\n                                    <div class=\"togglebutton\"><label><input type=\"checkbox\" checked=\"\" (change)=\"status()\" id=\"statusVal\"\r\n                                          [formControlName]=\"'status'\">\r\n                                        <span class=\"toggle\"></span></label>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-12\" style=\"margin-top:270px;\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\">{{'trans.Cancel' | translate}}</button>\r\n                                  <button class=\"btn btn-danger btn-round\" id=\"createBtn\" (click)=\"publish()\"\r\n                                    style=\"float: right;\"> {{'trans.Publish' | translate}}</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"card-footer\">\r\n                    <div class=\"mr-auto\">\r\n                      <input type=\"button\" class=\"btn btn-previous btn-fill btn-default btn-wd disabled\" name=\"previous\" value=\"Previous\">\r\n                    </div>\r\n                    <div class=\"ml-auto\">\r\n                      <input type=\"button\" class=\"btn btn-next btn-fill btn-rose btn-wd\" name=\"next\" value=\"Next\">\r\n                      <input type=\"button\" class=\"btn btn-finish btn-fill btn-rose btn-wd\" name=\"finish\" value=\"Finish\" style=\"display: none;\">\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <app-footerhostportal-web></app-footerhostportal-web>\r\n\r\n  </div>\r\n</div>\r\n<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 mr-auto ml-auto\">\r\n        <!--      Wizard container        -->\r\n        <div class=\"wizard-container\">\r\n          <div class=\"card card-wizard1\" data-color=\"rose\" id=\"wizardProfile\">\r\n            <form [formGroup]=\"type\" action=\"\" method=\"\">\r\n              <!--        You can switch \" data-color=\"primary\" \"  with one of the next bright colors: \"green\", \"orange\", \"red\", \"blue\"       -->\r\n              <div class=\"card-header text-center\">\r\n                <h3 class=\"card-title\">\r\n                  Build Your Profile\r\n                </h3>\r\n                <h5 class=\"card-description\">This information will let us know more about you.</h5>\r\n              </div>\r\n              <div class=\"wizard-navigation\">\r\n                <ul class=\"nav nav-pills\">\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link active\" href=\"#about\" data-toggle=\"tab\" role=\"tab\">\r\n                      About\r\n                    </a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#account\" data-toggle=\"tab\" role=\"tab\">\r\n                      Account\r\n                    </a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#address\" data-toggle=\"tab\" role=\"tab\">\r\n                      Address\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"card-body\">\r\n                <div class=\"tab-content\">\r\n                  <div class=\"tab-pane active\" id=\"about\">\r\n                    <h5 class=\"info-text\"> Let's start with the basic information (with validation)</h5>\r\n                    <div class=\"row justify-content-center\">\r\n                      <div class=\"col-sm-4\">\r\n                        <div class=\"picture-container\">\r\n                          <div class=\"picture\">\r\n                            <img src=\"./assets/img/default-avatar.png\" class=\"picture-src\" id=\"wizardPicturePreview\" title=\"\" />\r\n                            <input type=\"file\" id=\"wizard-picture\">\r\n                          </div>\r\n                          <h6 class=\"description\">Choose Picture</h6>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"input-group form-control-lg\">\r\n                          <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\">\r\n                              <i class=\"material-icons\">face</i>\r\n                            </span>\r\n                          </div>\r\n                          <mat-form-field class=\"example-full-width has-label\" [ngClass]=\"displayFieldCss(type, 'firstName')\">\r\n                            <input type=\"text\"\r\n                            name=\"firstname\"\r\n                            matInput\r\n                            id=\"text\"\r\n                            placeholder=\"First Name\"\r\n                            formControlName=\"firstName\">\r\n                          </mat-form-field>\r\n                        </div>\r\n                        <div class=\"input-group form-control-lg\">\r\n                          <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\">\r\n                              <i class=\"material-icons\">record_voice_over</i>\r\n                            </span>\r\n                          </div>\r\n                          <mat-form-field class=\"example-full-width has-label\" [ngClass]=\"displayFieldCss(type, 'lastName')\">\r\n                            <input type=\"text\"\r\n                            name=\"lastname\"\r\n                            matInput\r\n                            id=\"text\"\r\n                            placeholder=\"last Name\"\r\n                            formControlName=\"lastName\">\r\n                          </mat-form-field>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-lg-10 mt-3\">\r\n                        <div class=\"input-group form-control-lg\">\r\n                          <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\">\r\n                              <i class=\"material-icons\">email</i>\r\n                            </span>\r\n                          </div>\r\n                          <mat-form-field class=\"example-full-width\">\r\n                             <input matInput placeholder=\"Email (required)\" [formControl]=\"emailFormControl\"\r\n                               type=\"email\" id=\"exampleemalil\" name=\"email\">\r\n                           </mat-form-field>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"tab-pane\" id=\"account\">\r\n                    <h5 class=\"info-text\"> What are you doing? (checkboxes) </h5>\r\n                    <div class=\"row justify-content-center\">\r\n                      <div class=\"col-lg-10\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-4\">\r\n                            <div class=\"choice\" data-toggle=\"wizard-checkbox\">\r\n                              <input type=\"checkbox\" required name=\"jobb\" value=\"Design\">\r\n                              <div class=\"icon\">\r\n                                <i class=\"fa fa-pencil\"></i>\r\n                              </div>\r\n                              <h6>Design</h6>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-4\">\r\n                            <div class=\"choice\" data-toggle=\"wizard-checkbox\">\r\n                              <input type=\"checkbox\" name=\"jobb\" value=\"Code\">\r\n                              <div class=\"icon\">\r\n                                <i class=\"fa fa-terminal\"></i>\r\n                              </div>\r\n                              <h6>Code</h6>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-4\">\r\n                            <div class=\"choice\" data-toggle=\"wizard-checkbox\">\r\n                              <input type=\"checkbox\" name=\"jobb\" value=\"Develop\">\r\n                              <div class=\"icon\">\r\n                                <i class=\"fa fa-laptop\"></i>\r\n                              </div>\r\n                              <h6>Develop</h6>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"tab-pane\" id=\"address\">\r\n                    <div class=\"row justify-content-center\">\r\n                      <div class=\"col-sm-12\">\r\n                        <h5 class=\"info-text\"> Are you living in a nice area? </h5>\r\n                      </div>\r\n                      <div class=\"col-sm-7\">\r\n                        <mat-form-field class=\"example-full-width\">\r\n                          <input matInput type=\"text\" placeholder=\"Street Name\">\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"col-sm-3\">\r\n                        <mat-form-field class=\"example-full-width\">\r\n                          <input matInput type=\"text\" placeholder=\"Street No.\">\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"col-sm-5\">\r\n                        <mat-form-field class=\"example-full-width\">\r\n                          <input matInput type=\"text\" placeholder=\"City\">\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"col-sm-5\">\r\n                          <mat-form-field>\r\n                              <mat-select placeholder=\"Single City\" name=\"city\">\r\n                                <mat-option *ngFor=\"let city of cities\" [value]=\"city.value\">\r\n                                  {{ city.viewValue }}\r\n                                </mat-option>\r\n                              </mat-select>\r\n                          </mat-form-field>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-footer\">\r\n                <div class=\"mr-auto\">\r\n                  <input type=\"button\" class=\"btn btn-previous btn-fill btn-default btn-wd disabled\" name=\"previous\" value=\"Previous\">\r\n                </div>\r\n                <div class=\"ml-auto\">\r\n                  <input type=\"button\" class=\"btn btn-next btn-fill btn-rose btn-wd\" name=\"next\" value=\"Next\">\r\n                  <input type=\"button\" class=\"btn btn-finish btn-fill btn-rose btn-wd\" name=\"finish\" value=\"Finish\" style=\"display: none;\">\r\n                </div>\r\n                <div class=\"clearfix\"></div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n        <!-- wizard container -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 7711:
/*!************************************************************************!*\
  !*** ./src/app/Host/Createoffer/Createoffer.component.html?ngResource ***!
  \************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<style>\r\n  .nav-pills .nav-item .nav-link {\r\n    font-size: 16px !important;\r\n  }\r\n\r\n  .togglebutton label .toggle:after {\r\n    width: 30px;\r\n    height: 28px;\r\n  }\r\n\r\n  .togglebutton label input[type=checkbox]:checked+.toggle:after {\r\n    left: 26px;\r\n  }\r\n\r\n  .togglebutton label .toggle,\r\n  .togglebutton label input[type=checkbox][disabled]+.toggle {\r\n    content: \"\";\r\n    display: inline-block;\r\n    width: 55px;\r\n    height: 25px;\r\n  }\r\n\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active,\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active:focus,\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active:hover {\r\n    background-color: transparent !important;\r\n    color: #ed8935 !important;\r\n    box-shadow: none;\r\n  }\r\n\r\n  .nav-pills .nav-item i {\r\n    display: block;\r\n    font-size: 16px;\r\n    padding: 0px 0;\r\n    float: right;\r\n  }\r\n\r\n  .slectoffer {\r\n    background-color: #f8ddc2 !important;\r\n  }\r\n\r\n  .img-fluid {\r\n    cursor: pointer;\r\n  }\r\n\r\n  .cc-selector input {\r\n    margin: 0;\r\n    padding: 0;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n  }\r\n\r\n  .house {\r\n    background-image: url(../assets/Icons/PNG/House_normal@2x.png);\r\n  }\r\n\r\n  .apartment {\r\n    background-image: url(../assets/Icons/PNG/Apartment_Normal@2x.png);\r\n  }\r\n\r\n  .hotel {\r\n    background-image: url(../assets/Icons/PNG/Hotel_room_Normal@2x.png);\r\n  }\r\n\r\n  .wifi {\r\n    background-image: url(../assets/Icons/PNG/Free_WiFi_Normal@2x.png);\r\n  }\r\n\r\n  .parking {\r\n    background-image: url(../assets/Icons/PNG/Parking_Normal@2x.png);\r\n  }\r\n\r\n  .children {\r\n    background-image: url(../assets/Icons/PNG/Children_and_extra_beds@2x.png);\r\n  }\r\n\r\n  .air-conditioning {\r\n    background-image: url(../assets/Icons/PNG/Air_conditioning_Normal@2x.png);\r\n  }\r\n\r\n  .pets {\r\n    background-image: url(../assets/Icons/PNG/Pets_Normal@2x.png);\r\n  }\r\n\r\n  .credit-card {\r\n    background-image: url(../assets/Icons/PNG/Credit_card_support@2x.png);\r\n  }\r\n\r\n  .electric-vehicle {\r\n    background-image: url(../assets/Icons/PNG/Electric_vehicle_charging_station_Normal@2x.png);\r\n  }\r\n\r\n  .kitchen {\r\n    background-image: url(../assets/Icons/PNG/Kitchen_Normal@2x.png);\r\n  }\r\n\r\n  .swimming-pool {\r\n    background-image: url(../assets/Icons/PNG/Swimming_pool_Normal@2x.png);\r\n  }\r\n\r\n  .drinkcard-cc {\r\n    cursor: pointer;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    display: inline-block;\r\n    width: 100px;\r\n    height: 70px;\r\n    -webkit-transition: all 100ms ease-in;\r\n    -moz-transition: all 100ms ease-in;\r\n    transition: all 100ms ease-in;\r\n    -webkit-filter: brightness(1.8) grayscale(1) opacity(.7);\r\n    -moz-filter: brightness(1.8) grayscale(1) opacity(.7);\r\n    filter: brightness(1.8) grayscale(1) opacity(.7);\r\n    box-shadow: none;\r\n  }\r\n\r\n  .drinkcard-cc:hover {\r\n    -webkit-filter: brightness(1.2) grayscale(.5) opacity(.9);\r\n    -moz-filter: brightness(1.2) grayscale(.5) opacity(.9);\r\n    filter: brightness(1.2) grayscale(.5) opacity(.9);\r\n  }\r\n\r\n  .cc-selector-2 input:active+.drinkcard-cc,\r\n  .cc-selector input:active+.drinkcard-cc {\r\n    opacity: .9;\r\n  }\r\n\r\n  .cc-selector-2 input:checked+.drinkcard-cc,\r\n  .cc-selector input:checked+.drinkcard-cc {\r\n    -webkit-filter: none;\r\n    -moz-filter: none;\r\n    filter: none;\r\n  }\r\n\r\n  #upload-button {\r\n    background-color: #f5f6fa;\r\n    color: #7f8fa6 !important;\r\n    border: dotted 1px;\r\n    border-radius: 10px;\r\n    padding: 10px 5px;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .divscroll::-webkit-scrollbar {\r\n    scrollbar-gutter: 2px;\r\n    width: 4px;\r\n    z-index: 10;\r\n    border-radius: 10px;\r\n    background: white;\r\n  }\r\n\r\n  .divscroll::-webkit-scrollbar-thumb {\r\n    background-color: #2d5286;\r\n  }\r\n\r\n  agm-map {\r\n    height: 300px !important;\r\n    width: 100%;\r\n    /* This is really important*/\r\n  }\r\n  .cardheader:hover{\r\n    background-color: #f7f1e3 !important;\r\n  }\r\n</style>\r\n\r\n<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header lock-page header-filter\" filter-color=\"black\"\r\n    style=\"background-color:#fafafa; background-size: cover; background-position: top center;\">\r\n    <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-left\" style=\"margin-top: 4vh;\">\r\n        <div class=\"col-12\">\r\n          <h3 class=\"ml-2\"><b>{{'trans.Let_set_up_your_offer' | translate}}</b></h3>\r\n          <div class=\"col-md-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-4 col-md-5\">\r\n                <div class=\"card mt-0\">\r\n                  <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-12\">\r\n                        <h3 class=\"ml-3\"><b> {{'trans.Overview' | translate}}</b></h3>\r\n                        <div *ngIf=\"showAlert\"\r\n                          style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n                          class=\"alert alert-error\">{{ errorMessage }}</div>\r\n                        <ul class=\"nav nav-pills flex-column nav-pills-danger justify-content-left\" role=\"tablist\">\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link text-capitalize font-weight-bold active text-left px-3 py-1\"\r\n                              (click)=\"check=0\" data-toggle=\"tab\" href=\"#link1\" role=\"tablist\">\r\n                              <span> {{'trans.offer_title' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>0\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold text-left py-1\" (click)=\"check=1\"\r\n                              data-toggle=\"tab\" href=\"#link2\" role=\"tablist\">\r\n                              <span> {{'trans.offer_type' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>1\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" (click)=\"check=1\"\r\n                              data-toggle=\"tab\" href=\"#link3\" role=\"tablist\">\r\n                              <span> {{'trans.Price' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>2\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" (click)=\"check=3\"\r\n                              data-toggle=\"tab\" href=\"#link4\" role=\"tablist\">\r\n                              <span> {{'trans.Photo_Video' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>3\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" (click)=\"check=4\"\r\n                              data-toggle=\"tab\" href=\"#link5\" role=\"tablist\">\r\n                              <span> {{'trans.Capacity' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>4\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold text-left py-1\" (click)=\"check=5\"\r\n                              data-toggle=\"tab\" href=\"#link6\" role=\"tablist\">\r\n                              <span> {{'trans.Period' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>5\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold text-left py-1\" (click)=\"check=6\"\r\n                              data-toggle=\"tab\" href=\"#link7\" role=\"tablist\">\r\n                              <span> {{'trans.Description' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>6\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" (click)=\"check=7\"\r\n                              data-toggle=\"tab\" href=\"#link8\" role=\"tablist\">\r\n                              <span> {{'trans.Location' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>7\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" (click)=\"check=8\"\r\n                              data-toggle=\"tab\" href=\"#link9\" role=\"tablist\">\r\n                              <span>  {{'trans.Equipment_features' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>8\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold text-left py-1\" (click)=\"check=9\"\r\n                              data-toggle=\"tab\" href=\"#link10\" role=\"tablist\">\r\n                              <span>{{'trans.Terms_Policies' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>9\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold text-left py-1\" (click)=\"check=10\"\r\n                              data-toggle=\"tab\" href=\"#link11\" role=\"tablist\">\r\n                              <span> {{'trans.Language' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>10\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" (click)=\"check=11\"\r\n                              data-toggle=\"tab\" href=\"#link12\" role=\"tablist\">\r\n                              <span> {{'trans.Discount' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>11\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" (click)=\"check=12\"\r\n                              data-toggle=\"tab\" href=\"#link13\" role=\"tablist\">\r\n                              <span> {{'trans.Publish' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>12\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-6 col-md-7\">\r\n                <form [formGroup]=\"offerForm\" #offerNgForm=\"ngForm\">\r\n                  <div class=\"tab-content tab-space col-12 pt-0\">\r\n                    <div class=\"tab-pane active \" id=\"link1\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                  <h3><b> {{'trans.offer_title' | translate}}</b></h3>\r\n                                </div>\r\n                                <div class=\"col-6 text-right\"><button\r\n                                    class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}}</button></div>\r\n                                <div class=\"col-12\">\r\n                                  <textarea rows=\"19\" class=\"form-control\" (ngModelChange)=\"onkeyup($event,1)\" placeholder=\"Type the offer title\" required\r\n                                    [formControlName]=\"'title'\"></textarea>\r\n                                </div>\r\n                                <div class=\"col-12 mt-3\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\"> {{'trans.Cancel' | translate}}</button>\r\n                                  <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\"> {{'trans.Next' | translate}}</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane\" id=\"link2\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                  <h3><b> {{'trans.offer_type' | translate}}</b></h3>\r\n                                </div>\r\n                                <div class=\"col-6 text-right\">\r\n                                  <button class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}} </button>\r\n                                </div>\r\n                                <div class=\"col-md-12\">\r\n                                  <div class=\"cc-selector\">\r\n                                    <div class=\"row\">\r\n                                      <div class=\"col-md-4\" (click)=\"slectoffer()\">\r\n                                        <div class=\"card cardheader\" style=\"background:#fafafa;\">\r\n                                          <div class=\"card-body text-center\">\r\n                                            <input id=\"house\" type=\"radio\" (ngModelChange)=\"onkeyup($event,2)\" [formControlName]=\"'type'\" required\r\n                                              value=\"house\" />\r\n                                            <label class=\"drinkcard-cc house ml-3\" for=\"house\"></label>\r\n                                            <p class=\"mb-0\"> {{'trans.House' | translate}}</p>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"col-md-4\" (click)=\"slectoffer()\">\r\n                                        <div class=\"card cardheader\" style=\"background:#fafafa;\">\r\n                                          <div class=\"card-body text-center\">\r\n                                            <input id=\"apartment\" type=\"radio\" [formControlName]=\"'type'\" required\r\n                                              value=\"apartment\" />\r\n                                            <label class=\"drinkcard-cc apartment ml-3\" for=\"apartment\"></label>\r\n                                            <p class=\"mb-0\"> {{'trans.Apartment' | translate}}</p>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"col-md-4\" (click)=\"slectoffer()\">\r\n                                        <div class=\"card cardheader\" (click)=\"slectoffer()\" style=\"background:#fafafa;\">\r\n                                          <div class=\"card-body text-center\">\r\n                                            <input id=\"hotel\" type=\"radio\" [formControlName]=\"'type'\" value=\"hotel\"\r\n                                              required />\r\n                                            <label class=\"drinkcard-cc hotel ml-3\" for=\"hotel\"></label>\r\n                                            <p class=\"mb-0\"> {{'trans.Hotel_Room' | translate}}</p>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-12\" style=\"margin-top:250px;\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\"> {{'trans.Cancel' | translate}}</button>\r\n                                  <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\"> {{'trans.Next' | translate}}</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane\" id=\"link3\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                  <h3><b> {{'trans.Price_your_offer' | translate}}</b></h3>\r\n                                </div>\r\n                                <div class=\"col-6 text-right\"><button\r\n                                    class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}} </button></div>\r\n                                <div class=\"col-12\">\r\n                                  <p> {{'trans.To_help_you_earn_more' | translate}}</p>\r\n                                    <div class=\"row\">\r\n                                      <div class=\"col-md-4 \">\r\n                                        <!-- <select class=\"form-control\" (change)=\"currency($event.target.value)\" id=\"currency\" required>\r\n                                          <option value=\"$\" >$</option>\r\n                                          <option value=\"€\">€</option>\r\n                                          <option value=\"Fr.\">Fr.</option>\r\n                                        </select> -->\r\n                                        <mat-form-field>\r\n                                          <mat-select placeholder=\"Select Currency\" name=\"currency\" id=\"currency\" required>\r\n                                            <mat-option  value=\"$\">\r\n                                              $\r\n                                            </mat-option>\r\n                                            <mat-option  value=\"€\">\r\n                                              €\r\n                                            </mat-option>\r\n                                            <mat-option  value=\"Fr.\">\r\n                                              Fr.\r\n                                            </mat-option>\r\n                                          </mat-select>\r\n                                      </mat-form-field>\r\n                                      </div>\r\n                                      <div class=\"col-md-8\">\r\n                                        <input type=\"number\" (ngModelChange)=\"onkeyup($event,4)\" class=\"form-control\" placeholder=\"Type the Price\" required [formControlName]=\"'price'\" />\r\n                                      </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-12\" style=\"margin-top:300px;\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\"> {{'trans.Cancel' | translate}}</button>\r\n                                  <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\"> {{'trans.Next' | translate}}</button>\r\n\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane\" id=\"link4\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-12 text-right\"><button\r\n                                    class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.Add_photos_and_videos_to_your_offer' | translate}}</button></div>\r\n                                <div class=\"col-12\">\r\n                                  <h3 class=\"mt-0\"><b>{{'trans.Add_photos_and_videos_to_your_offer' | translate}}</b></h3>\r\n                                </div>\r\n                                <div class=\"col-12 text-center border-dotted text-white \" (click)=\"upload()\">\r\n                                  <div id=\"upload-button\">\r\n                                    <i class=\"fa fa-upload fa-lg\" aria-hidden=\"true\"></i> &nbsp;  {{'trans.Upload_Photos' | translate}}\r\n                                    <input type=\"file\" hidden id=\"inputhidden\" accept='.jpg,.jpeg,.JPG,.png,.PNG'\r\n                                      required (change)=\"uploadImages()\" multiple>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-12\" *ngIf=\"itemCounter != 0\">\r\n                                  <div class=\"row\">\r\n                                    <div class=\"col-md-12 upload-images\" *ngFor=\"let item of items; let i = index\">\r\n                                      <div class=\"uploadImage{{i}} col-12 d-flex mt-4\">\r\n                                        <div class=\"col-md-4 img-fluid\"\r\n                                          [ngStyle]=\"{'background-image':'url('+item.src+')'}\"\r\n                                          style=\"height: 130px; background-size: contain !important; background-repeat: no-repeat !important;\">\r\n                                          <!-- <img src=\"{{sanitize(item.src)}}\" class=\"img-fluid \"> -->\r\n                                          <span\r\n                                            style=\"position: absolute; top: 15px; right: 25px; padding: 3px 5px; border-radius: 50%; background-color: white; color: black;\"\r\n                                            (click)=\"removePicture(i)\"><i class=\"fa fa-times\"\r\n                                              aria-hidden=\"true\"></i></span>\r\n                                        </div>\r\n                                        <div class=\"ml-3 col-md-8\">\r\n                                          <h4>{{ item.name }}</h4>\r\n                                          <input class=\"form-control\" id=\"img{{ item.id }}\" placeholder=\"Type a caption\"\r\n                                            (keypress)=\"setCaption(item.id)\" />\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-12\" style=\"margin-top: 200px;\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\">{{'trans.Cancel' | translate}} </button>\r\n                                  <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\">{{'trans.Next' | translate}}</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane\" id=\"link5\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                  <h3><b> {{'trans.Capacity' | translate}}</b></h3>\r\n                                </div>\r\n                                <div class=\"col-6 text-right\"><button\r\n                                    class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}}</button></div>\r\n                                <div class=\"col-12\">\r\n                                  <p>{{'trans.To_help_you_earn_more' | translate}}</p>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <div class=\"row\">\r\n                                    <div class=\"col-sm-8 col-md-6\">\r\n                                    \r\n                                      {{'trans.How_many_guests_can_stay' | translate}}\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-md-6 text-right\"> <img\r\n                                        src=\"../assets/Icons/PNG/Group 28.png\" (click)=\"minus(0)\" class=\"img-fluid\"><span\r\n                                        class=\"mr-2 ml-2\" style=\"font-size:15;font-weight: bold;\">{{incval}}</span> <img\r\n                                        (click)=\"plus(0)\" src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid\">\r\n                                    </div>\r\n                                  </div>\r\n                                  <hr class=\"mt-0 pt-0\">\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <div class=\"row\">\r\n                                    <div class=\"col-sm-8 col-md-6\">\r\n                                      {{'trans.How_many_rooms_are_there' | translate}}\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-md-6 text-right\"> <img\r\n                                        src=\"../assets/Icons/PNG/Group 28.png\" (click)=\"minus(6)\" class=\"img-fluid\"><span\r\n                                        class=\"mr-2 ml-2\" style=\"font-size:15;font-weight: bold;\">{{incval6}}</span>\r\n                                      <img (click)=\"plus(6)\" src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid\">\r\n                                    </div>\r\n                                  </div>\r\n                                  <hr class=\"mt-0 pt-0\">\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <div class=\"row\">\r\n                                    <div class=\"col-sm-8 col-md-6\">\r\n                                      {{'trans.which_beds_are_available_in_this_room' | translate}}\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-md-6 text-right\"> <img\r\n                                        src=\"../assets/Icons/PNG/Group 28.png\" (click)=\"minus(1)\" class=\"img-fluid\"><span\r\n                                        class=\"mr-2 ml-2\" style=\"font-size:15;font-weight: bold;\">{{incval1}}</span>\r\n                                      <img (click)=\"plus(1)\" src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid\">\r\n                                    </div>\r\n                                  </div>\r\n                                  <hr class=\"mt-0 pt-0\">\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <div class=\"row\">\r\n                                    <div class=\"col-12\">\r\n                                      <p> {{'trans.which_beds_are_available_in_this_room' | translate}}</p>\r\n                                    </div>\r\n                                    <div class=\"col-8 col-md-6\">\r\n                                      <p>{{'trans.single_bed' | translate}}<small>90-130 cm wide</small></p>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-md-6 text-right\"> <img\r\n                                        src=\"../assets/Icons/PNG/Group 28.png\" (click)=\"minus(2)\" class=\"img-fluid\"><span\r\n                                        class=\"mr-2 ml-2\" style=\"font-size:15;font-weight: bold;\">{{incval2}}</span>\r\n                                      <img (click)=\"plus(2)\" src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid\">\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <div class=\"row\">\r\n                                    <div class=\"col-sm-8 col-md-6\">\r\n                                      <p>{{'trans.Double_bed' | translate}} <small>131-150 cm wide</small></p>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-md-6 text-right\"> <img\r\n                                        src=\"../assets/Icons/PNG/Group 28.png\" (click)=\"minus(3)\" class=\"img-fluid\"><span\r\n                                        class=\"mr-2 ml-2\" style=\"font-size:15;font-weight: bold;\">{{incval3}}</span>\r\n                                      <img (click)=\"plus(3)\" src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid\">\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <div class=\"row\">\r\n                                    <div class=\"col-sm-8 col-md-6\">\r\n                                      <p> {{'trans.Large_bed' | translate}} (King size)<small>151-180 cm wide</small></p>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-md-6 text-right\"> <img\r\n                                        src=\"../assets/Icons/PNG/Group 28.png\" (click)=\"minus(4)\" class=\"img-fluid\"><span\r\n                                        class=\"mr-2 ml-2\" style=\"font-size:15;font-weight: bold;\">{{incval4}}</span>\r\n                                      <img (click)=\"plus(4)\" src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid\">\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <div class=\"row\">\r\n                                    <div class=\"col-sm-8 col-md-6\">\r\n                                      <p>{{'trans.Extra_large_double_bed' | translate}} <small>181-220 cm wide</small></p>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-md-6 text-right\"> <img\r\n                                        src=\"../assets/Icons/PNG/Group 28.png\" (click)=\"minus(5)\" class=\"img-fluid\"><span\r\n                                        class=\"mr-2 ml-2\" style=\"font-size:15;font-weight: bold;\">{{incval5}}</span>\r\n                                      <img (click)=\"plus(5)\" src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid\">\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\">{{'trans.Cancel' | translate}}</button>\r\n                                  <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\">{{'trans.Next' | translate}}</button>\r\n\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane\" id=\"link6\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-6\">\r\n                              <h3><b> {{'trans.Date_range' | translate}} </b></h3>\r\n                            </div>\r\n                            <div class=\"col-6 text-right\"><button\r\n                                class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}}</button></div>\r\n                            <div class=\"col-12\">\r\n                              <p>{{'trans.To_help_you_earn_more' | translate}}</p>\r\n                            </div>\r\n                            <div class=\"col-12\">\r\n                              <mat-form-field class=\"example-form-field \" hidden appearance=\"fill\">\r\n                                <mat-date-range-input [formGroup]=\"campaignOne\" [rangePicker]=\"campaignOnePicker\"\r\n                                 >\r\n                                  <input matStartDate placeholder=\"Start date\" formControlName=\"start\" (ngModelChange)=\"onkeyup($event,11)\">\r\n                                  <input matEndDate placeholder=\"End date\" formControlName=\"end\" (ngModelChange)=\"onkeyup($event,12)\">\r\n                                </mat-date-range-input>\r\n                                <mat-datepicker-toggle matSuffix [for]=\"campaignOnePicker\"></mat-datepicker-toggle>\r\n                                <mat-date-range-picker #campaignOnePicker></mat-date-range-picker>\r\n                              </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-12\" style=\"margin-top: 280px;\">\r\n                              <button class=\"btn btn-default text-dark\" (click)=\"back()\">{{'trans.Cancel' | translate}}</button>\r\n                              <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\">{{'trans.Next' | translate}}</button>\r\n\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane  \" id=\"link7\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                  <h3><b> {{'trans.Description' | translate}}</b></h3>\r\n                                </div>\r\n                                <div class=\"col-6 text-right\"><button\r\n                                    class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}}</button></div>\r\n                                <div class=\"col-12\">\r\n                                  <textarea rows=\"19\" class=\"form-control\" placeholder=\"Type the Description\"\r\n                                    [formControlName]=\"'description'\" (ngModelChange)=\"onkeyup($event,5)\"></textarea>\r\n                                </div>\r\n                                <div class=\"col-12 mt-3\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\">{{'trans.Cancel' | translate}}</button>\r\n                                  <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\">{{'trans.Next' | translate}}</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane\" id=\"link8\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-12 text-right\">\r\n                                  <button class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}}</button>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <h3><b> {{'trans.What_offer_you_propose' | translate}}</b></h3>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                    <input required type=\"text\" class=\"form-control\" (keydown.enter)=\"$event.preventDefault()\" placeholder=\"Type the address\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" #search id=\"address\">\r\n                                </div>\r\n                                <div class=\"col-12 mt-4\">\r\n                                  <h5><b>{{'trans.Pin_the_location_of_your_offer' | translate}}</b></h5>\r\n                                </div>\r\n                                <div class=\"col-12 mt-2\">\r\n                                  <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\">\r\n                                    <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [markerDraggable]=\"true\"\r\n                                      (dragEnd)=\"markerDragEnd($event)\"></agm-marker>\r\n                                  </agm-map>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <input type=\"text\" class=\"form-control\"\r\n                                    placeholder=\"Type the city\" required id=\"city\">\r\n                                </div>\r\n                                <div class=\"col-12\" style=\"margin-top: 150px;\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\">{{'trans.Cancel' | translate}}</button>\r\n                                  <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\">{{'trans.Next' | translate}}</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane\" id=\"link9\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                  <h3><b> {{'trans.Equipment_features' | translate}}</b></h3>\r\n                                </div>\r\n                                <div class=\"col-6 text-right\"><button\r\n                                    class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}}</button></div>\r\n                                <div class=\"col-12\">\r\n                                  <p>Lorem Ipsum is simply dummy text of the printing typesetting industry.\r\n                                    Lorem Ipsum has been the industry. </p>\r\n                                </div>\r\n                                <div class=\"col-md-12\" style=\"margin-top: -25px\">\r\n                                  <div class=\"cc-selector\">\r\n                                    <div class=\"row\">\r\n                                      <div class=\"col-md-4 \" *ngFor=\"let feature of equipmentFeatures\">\r\n                                        <div class=\"card cardheader\" (click)=\"slectoffer()\" style=\"background:#fafafa; min-height: 190px;\">\r\n                                          <div class=\"card-body text-center\">\r\n                                            <input id=\"{{feature.name}}\" type=\"checkbox\" class=\"features\"\r\n                                              name=\"{{feature.id}}\" value=\"wifi\" />\r\n                                            <label class=\"drinkcard-cc ml-3 mt-0 mb-0 {{feature.name}}\" for=\"{{feature.name}}\"\r\n                                              style=\"background-image: url('http://oneroom3.crosip.com/{{ feature.icon }}') !important;  background: transparent !important; background-size: contain; background-repeat: no-repeat;\"></label>\r\n                                            <p class=\"mb-0\">{{feature.name}}</p>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-12\" style=\"margin-top:5vh;\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\">{{'trans.Cancel' | translate}}</button>\r\n                                  <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\">{{'trans.Next' | translate}}</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane  \" id=\"link10\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                  <h3><b> {{'trans.Terms_Policies' | translate}}</b></h3>\r\n                                </div>\r\n                                <div class=\"col-6 text-right\"><button\r\n                                    class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}}</button></div>\r\n                                <div class=\"col-12\">\r\n                                  <textarea rows=\"19\" class=\"form-control\" placeholder=\"Type of terms/policies\"\r\n                                    [formControlName]=\"'terms_policies'\" (ngModelChange)=\"onkeyup($event,7)\"></textarea>\r\n                                </div>\r\n                                <div class=\"col-12 mt-3\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\">{{'trans.Cancel' | translate}}</button>\r\n                                  <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\">{{'trans.Next' | translate}}</button>\r\n\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane  \" id=\"link11\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\" *ngIf=\"languages\">\r\n                                <div class=\"col-6\">\r\n                                  <h3><b> {{'trans.Language_spoken' | translate}}</b></h3>\r\n                                </div>\r\n                                <div class=\"col-6 text-right\">\r\n                                  <button class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}}</button>\r\n                                </div>\r\n                                <div class=\"col-md-12\">\r\n                                  <div class=\"row divscroll\" style=\"overflow: auto; overflow-x: hidden; height: 435px;\">\r\n                                    <div class=\"col-12\" *ngFor=\"let language of languages\">\r\n                                      <input type=\"checkbox\" value=\"{{language.id}}\" class=\"languages\"> {{language.name}}\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-12 mt-3\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\">{{'trans.Cancel' | translate}}</button>\r\n                                  <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\">{{'trans.Next' | translate}}</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane  \" id=\"link12\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-12 text-right\"><button\r\n                                    class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}}</button></div>\r\n                                <div class=\"col-12\">\r\n                                  <h3><b> {{'trans.Discount' | translate}}</b></h3>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <h4><b>{{'trans.Offer_20_off' | translate}}</b></h4>\r\n                                  <p>{{'trans.who_book_your_service' | translate}}</p>\r\n                                  <!-- <button class=\"btn btn-default text-dark\">recommended</button> -->\r\n                                  <button class=\"btn btn-danger\" (click)=\"discountstep=1\"> {{'trans.Add' | translate}}</button>\r\n                                  <hr>\r\n                                </div>\r\n                                <div class=\"col-12\" *ngIf=\"discountstep==1\">\r\n                                  <h4><b> {{'trans.Discount_update' | translate}}</b></h4>\r\n                                  <p><b> {{'trans.Number_of_percentage' | translate}}</b></p>\r\n                                  <input type=\"number\" class=\"form-control\" placeholder=\"Min. 40\" min=\"40\"\r\n                                    [formControlName]=\"'discount_of_percentage'\" (ngModelChange)=\"onkeyup($event,8)\" required>\r\n                                </div>\r\n                                <div class=\"col-12\" *ngIf=\"discountstep==1\">\r\n                                  <p><b> {{'trans.Number_of_booking' | translate}}</b></p>\r\n                                  <input type=\"number\" class=\"form-control\" placeholder=\"Min. 40\" min=\"40\"\r\n                                    [formControlName]=\"'discount_of_booking'\" (ngModelChange)=\"onkeyup($event,9)\" required>\r\n                                </div>\r\n                                <div class=\"col-12\" *ngIf=\"discountstep==1\">\r\n                                  <p><b> {{'trans.Subsidiary' | translate}}</b></p>\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"Lorem Ipsum\"\r\n                                    [formControlName]=\"'subsidiary'\" (ngModelChange)=\"onkeyup($event,10)\">\r\n                                </div>\r\n                                <div class=\"col-12\" style=\"margin-top: 10px;\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\">{{'trans.Cancel' | translate}}</button>\r\n                                  <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\">{{'trans.Next' | translate}}</button>\r\n\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane  \" id=\"link13\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-12 text-right\"><button\r\n                                    class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}}</button></div>\r\n                                <div class=\"col-12\">\r\n                                  <h3><b> {{'trans.Offer_publish' | translate}}</b></h3>\r\n                                </div>\r\n                                <div class=\"col-12 d-flex\">\r\n                                  <div class=\"col-md-9\">\r\n                                    <p>Lorem Ipsum is simply dummy text of the printing\r\n                                      typesetting industry. Lorem Ipsum has been the industry</p>\r\n                                  </div>\r\n                                  <div class=\"col-md-3\">\r\n                                    <div class=\"togglebutton\"><label><input type=\"checkbox\" checked=\"\" (change)=\"status()\" id=\"statusVal\"\r\n                                          [formControlName]=\"'status'\">\r\n                                        <span class=\"toggle\"></span></label>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-12\" style=\"margin-top:270px;\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\">{{'trans.Cancel' | translate}}</button>\r\n                                  <button class=\"btn btn-danger btn-round\" id=\"createBtn\" (click)=\"publish()\"\r\n                                    style=\"float: right;\"> {{'trans.Publish' | translate}}</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <app-footerhostportal-web></app-footerhostportal-web>\r\n\r\n  </div>\r\n</div>";

/***/ }),

/***/ 11831:
/*!********************************************************************!*\
  !*** ./src/app/Host/EditOffer/EditOffer.component.html?ngResource ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<style>\r\n  .nav-pills .nav-item .nav-link {\r\n    font-size: 16px !important;\r\n  }\r\n\r\n  .togglebutton label .toggle:after {\r\n    width: 30px;\r\n    height: 28px;\r\n  }\r\n\r\n  .togglebutton label input[type=checkbox]:checked+.toggle:after {\r\n    left: 26px;\r\n  }\r\n\r\n  .togglebutton label .toggle,\r\n  .togglebutton label input[type=checkbox][disabled]+.toggle {\r\n    content: \"\";\r\n    display: inline-block;\r\n    width: 55px;\r\n    height: 25px;\r\n  }\r\n\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active,\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active:focus,\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active:hover {\r\n    background-color: transparent !important;\r\n    color: #ed8935 !important;\r\n    box-shadow: none;\r\n  }\r\n\r\n  .nav-pills .nav-item i {\r\n    display: block;\r\n    font-size: 16px;\r\n    padding: 0px 0;\r\n    float: right;\r\n  }\r\n\r\n  .slectoffer {\r\n    background-color: #f8ddc2 !important;\r\n  }\r\n\r\n  .img-fluid {\r\n    cursor: pointer;\r\n  }\r\n\r\n  .cc-selector input {\r\n    margin: 0;\r\n    padding: 0;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n  }\r\n\r\n  .house {\r\n    background-image: url(../assets/Icons/PNG/House_normal@2x.png);\r\n  }\r\n\r\n  .apartment {\r\n    background-image: url(../assets/Icons/PNG/Apartment_Normal@2x.png);\r\n  }\r\n\r\n  .hotel {\r\n    background-image: url(../assets/Icons/PNG/Hotel_room_Normal@2x.png);\r\n  }\r\n\r\n  .wifi {\r\n    background-image: url(../assets/Icons/PNG/Free_WiFi_Normal@2x.png);\r\n  }\r\n\r\n  .parking {\r\n    background-image: url(../assets/Icons/PNG/Parking_Normal@2x.png);\r\n  }\r\n\r\n  .children {\r\n    background-image: url(../assets/Icons/PNG/Children_and_extra_beds@2x.png);\r\n  }\r\n\r\n  .air-conditioning {\r\n    background-image: url(../assets/Icons/PNG/Air_conditioning_Normal@2x.png);\r\n  }\r\n\r\n  .pets {\r\n    background-image: url(../assets/Icons/PNG/Pets_Normal@2x.png);\r\n  }\r\n\r\n  .credit-card {\r\n    background-image: url(../assets/Icons/PNG/Credit_card_support@2x.png);\r\n  }\r\n\r\n  .electric-vehicle {\r\n    background-image: url(../assets/Icons/PNG/Electric_vehicle_charging_station_Normal@2x.png);\r\n  }\r\n\r\n  .kitchen {\r\n    background-image: url(../assets/Icons/PNG/Kitchen_Normal@2x.png);\r\n  }\r\n\r\n  .swimming-pool {\r\n    background-image: url(../assets/Icons/PNG/Swimming_pool_Normal@2x.png);\r\n  }\r\n\r\n  .drinkcard-cc {\r\n    cursor: pointer;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    display: inline-block;\r\n    width: 100px;\r\n    height: 70px;\r\n    -webkit-transition: all 100ms ease-in;\r\n    -moz-transition: all 100ms ease-in;\r\n    transition: all 100ms ease-in;\r\n    -webkit-filter: brightness(1.8) grayscale(1) opacity(.7);\r\n    -moz-filter: brightness(1.8) grayscale(1) opacity(.7);\r\n    filter: brightness(1.8) grayscale(1) opacity(.7);\r\n    box-shadow: none;\r\n  }\r\n\r\n  .drinkcard-cc:hover {\r\n    -webkit-filter: brightness(1.2) grayscale(.5) opacity(.9);\r\n    -moz-filter: brightness(1.2) grayscale(.5) opacity(.9);\r\n    filter: brightness(1.2) grayscale(.5) opacity(.9);\r\n  }\r\n\r\n  .cc-selector-2 input:active+.drinkcard-cc,\r\n  .cc-selector input:active+.drinkcard-cc {\r\n    opacity: .9;\r\n  }\r\n\r\n  .cc-selector-2 input:checked+.drinkcard-cc,\r\n  .cc-selector input:checked+.drinkcard-cc {\r\n    -webkit-filter: none;\r\n    -moz-filter: none;\r\n    filter: none;\r\n  }\r\n\r\n  #upload-button {\r\n    background-color: #f5f6fa;\r\n    color: #7f8fa6 !important;\r\n    border: dotted 1px;\r\n    border-radius: 10px;\r\n    padding: 10px 5px;\r\n    cursor: pointer;\r\n  }\r\n\r\n  agm-map {\r\n    height: 300px !important;\r\n    width: 100%;\r\n    /* This is really important*/\r\n  }\r\n  \r\n  .cardheader:hover{\r\n    background-color: #f7f1e3 !important;\r\n  }\r\n</style>\r\n\r\n<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header lock-page header-filter\" filter-color=\"black\"\r\n    style=\"background-color:#fafafa; background-size: cover; background-position: top center;\">\r\n    <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-left\" style=\"margin-top: 4vh;\">\r\n        <div class=\"col-12\">\r\n          <h3 class=\"ml-2\"><b>{{'trans.Let_set_up_your_offer' | translate}}</b></h3>\r\n          <div class=\"col-md-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-4 col-md-5\">\r\n                <div class=\"card mt-0\">\r\n                  <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-12\">\r\n                        <h3 class=\"ml-3\"><b>{{'trans.Overview' | translate}}</b></h3>\r\n                        <div *ngIf=\"showAlert\"\r\n                          style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n                          class=\"alert alert-error\">{{ errorMessage }}</div>\r\n                        <ul class=\"nav nav-pills flex-column nav-pills-danger justify-content-left\" role=\"tablist\">\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link text-capitalize font-weight-bold active text-left px-3 py-1\"\r\n                              (click)=\"check=0\" data-toggle=\"tab\" href=\"#link1\" role=\"tablist\">\r\n                              <span>{{'trans.offer_title' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>0\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" (click)=\"check=1\"\r\n                              data-toggle=\"tab\" href=\"#link2\" role=\"tablist\">\r\n                              <span>{{'trans.offer_title' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>1\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" (click)=\"check=2\"\r\n                              data-toggle=\"tab\" href=\"#link3\" role=\"tablist\">\r\n\r\n                              <span>Price</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>2\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" (click)=\"check=3\"\r\n                              data-toggle=\"tab\" href=\"#link4\" role=\"tablist\">\r\n\r\n                              <span>{{'trans.Photo_Video' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>3\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" (click)=\"check=4\"\r\n                              data-toggle=\"tab\" href=\"#link5\" role=\"tablist\">\r\n\r\n                              <span>{{'trans.Capacity' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>4\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" (click)=\"check=5\"\r\n                              data-toggle=\"tab\" href=\"#link6\" role=\"tablist\">\r\n\r\n                              <span>{{'trans.Period' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>5\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" (click)=\"check=6\"\r\n                              data-toggle=\"tab\" href=\"#link7\" role=\"tablist\">\r\n\r\n                              <span>{{'trans.Description' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>6\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" (click)=\"check=7\"\r\n                              data-toggle=\"tab\" href=\"#link8\" role=\"tablist\">\r\n\r\n                              <span>{{'trans.Location' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>7\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" (click)=\"check=8\"\r\n                              data-toggle=\"tab\" href=\"#link9\" role=\"tablist\">\r\n                              <span>{{'trans.Equipment_features' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>8\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" (click)=\"check=9\"\r\n                              data-toggle=\"tab\" href=\"#link10\" role=\"tablist\">\r\n\r\n                              <span>{{'trans.Terms_Policies' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>9\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" (click)=\"check=10\"\r\n                              data-toggle=\"tab\" href=\"#link11\" role=\"tablist\">\r\n                              <span>{{'trans.Language' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>10\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" (click)=\"check=11\"\r\n                              data-toggle=\"tab\" href=\"#link12\" role=\"tablist\">\r\n                              <span>{{'trans.Discount' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>11\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" (click)=\"check=12\"\r\n                              data-toggle=\"tab\" href=\"#link13\" role=\"tablist\">\r\n                              <span>{{'trans.Publish' | translate}}</span>\r\n                              <i class=\"fa fa-check-circle text-success\" *ngIf=\"check>12\"></i>\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n\r\n                          </li>\r\n\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-6 col-md-7\">\r\n                <form [formGroup]=\"editForm\" #editNgForm=\"ngForm\">\r\n                  <div class=\"tab-content tab-space col-12 pt-0\">\r\n\r\n                    <div class=\"tab-pane active \" id=\"link1\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                  <h3><b>{{'trans.offer_title' | translate}}</b></h3>\r\n                                </div>\r\n                                <div class=\"col-6 text-right\"><button\r\n                                    class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}}</button></div>\r\n                                <div class=\"col-12\">\r\n                                  <textarea rows=\"19\" class=\"form-control\" placeholder=\"Type the offer title\" required\r\n                                    [formControlName]=\"'title'\"></textarea>\r\n                                </div>\r\n                                <div class=\"col-12 mt-3\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\">{{'trans.Cancel' | translate}}</button>\r\n                                  <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\">{{'trans.Next' | translate}}</button>\r\n\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane\" id=\"link2\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                  <h3><b>{{'trans.offer_type' | translate}}</b></h3>\r\n                                </div>\r\n                                <div class=\"col-6 text-right\">\r\n                                  <button class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}}</button>\r\n                                </div>\r\n                                <div class=\"col-md-12\">\r\n                                  <div class=\"cc-selector\">\r\n                                    <div class=\"row\">\r\n                                      <div class=\"col-md-4\">\r\n                                        <div class=\"card cardheader\" (click)=\"slectoffer()\" style=\"background:#fafafa;\">\r\n                                          <div class=\"card-body text-center\">\r\n                                            <input id=\"house\" type=\"radio\" [formControlName]=\"'type'\" required\r\n                                              value=\"house\" />\r\n                                            <label class=\"drinkcard-cc house ml-3\" for=\"house\"></label>\r\n                                            <p class=\"mb-0\">{{'trans.House' | translate}}</p>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"col-md-4\">\r\n                                        <div class=\"card cardheader\" (click)=\"slectoffer()\" style=\"background:#fafafa;\">\r\n                                          <div class=\"card-body text-center\">\r\n                                            <input id=\"apartment\" type=\"radio\" [formControlName]=\"'type'\" required\r\n                                              value=\"apartment\" />\r\n                                            <label class=\"drinkcard-cc apartment ml-3\" for=\"apartment\"></label>\r\n                                            <p class=\"mb-0\">{{'trans.Apartment' | translate}}</p>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"col-md-4\">\r\n                                        <div class=\"card cardheader\" (click)=\"slectoffer()\" style=\"background:#fafafa;\">\r\n                                          <div class=\"card-body text-center\">\r\n                                            <input id=\"hotel\" type=\"radio\" [formControlName]=\"'type'\" value=\"hotel\"\r\n                                              required />\r\n                                            <label class=\"drinkcard-cc hotel ml-3\" for=\"hotel\"></label>\r\n                                            <p class=\"mb-0\">{{'trans.Hotel_Room' | translate}}</p>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-12\" style=\"margin-top:250px;\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\">{{'trans.Cancel' | translate}}</button>\r\n                                  <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\">{{'trans.Next' | translate}}</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane\" id=\"link3\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                  <h3><b>{{'trans.Price_your_offer' | translate}}</b></h3>\r\n                                </div>\r\n                                <div class=\"col-6 text-right\"><button\r\n                                    class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}}</button></div>\r\n                                <div class=\"col-12\">\r\n                                  <p>{{'trans.To_help_you_earn_more' | translate}}</p>\r\n                                    <div class=\"row\">\r\n                                      <div class=\"col-md-2\">\r\n                                        <!-- <select class=\"form-control\" id=\"currency\" required>\r\n                                          <option value=\"$\">$</option>\r\n                                          <option value=\"€\">€</option>\r\n                                          <option value=\"Fr.\">Fr.</option>\r\n                                        </select> -->\r\n                                        <mat-form-field>\r\n                                          <mat-select placeholder=\"Select Currency\" [value]=\"currency1\" name=\"currency\" id=\"currency\" required>\r\n                                            <mat-option  value=\"$\">\r\n                                              $\r\n                                            </mat-option>\r\n                                            <mat-option  value=\"€\">\r\n                                              €\r\n                                            </mat-option>\r\n                                            <mat-option  value=\"Fr.\">\r\n                                              Fr.\r\n                                            </mat-option>\r\n                                          </mat-select>\r\n                                      </mat-form-field>\r\n                                      </div>\r\n                                      <div class=\"col-md-10\">\r\n                                        <input type=\"number\" class=\"form-control\" placeholder=\"Type the Price\" required [formControlName]=\"'price'\" />\r\n                                      </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-12\" style=\"margin-top:300px;\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\">{{'trans.Cancel' | translate}}</button>\r\n                                  <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\">{{'trans.Next' | translate}}</button>\r\n\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane\" id=\"link4\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-12 text-right\"><button\r\n                                    class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}}</button></div>\r\n                                <div class=\"col-12\">\r\n                                  <h3 class=\"mt-0\"><b>{{'trans.Add_photos_and_videos_to_your_offer' | translate}}</b></h3>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <div class=\"row\" *ngIf=\"imageCheck==1\">\r\n                                    <div class=\"col-12 text-center border-dotted text-white \" (click)=\"upload()\">\r\n                                      <div id=\"upload-button\">\r\n                                        <i class=\"fa fa-upload fa-lg\" aria-hidden=\"true\"></i> &nbsp; {{'trans.Upload_Photos' | translate}}\r\n                                        <input type=\"file\" hidden id=\"inputhidden\" accept='.jpg,.jpeg,.JPG,.png,.PNG'\r\n                                          required (change)=\"uploadImages()\" multiple>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"col-12\" *ngIf=\"itemCounter != 0\">\r\n                                      <div class=\"row\">\r\n                                        <div class=\"col-md-12 upload-images\" *ngFor=\"let item of items; let i = index\">\r\n                                          <div class=\"uploadImage{{i}} col-12 d-flex mt-4\">\r\n                                            <div class=\"col-md-4 img-fluid\"\r\n                                              [ngStyle]=\"{'background-image':'url('+item.src+')'}\"\r\n                                              style=\"height: 130px; background-size: contain !important; background-repeat: no-repeat !important;\">\r\n                                              <!-- <img src=\"{{sanitize(item.src)}}\" class=\"img-fluid \"> -->\r\n                                              <span\r\n                                                style=\"position: absolute; top: 15px; right: 25px; padding: 3px 5px; border-radius: 50%; background-color: white; color: black;\"\r\n                                                (click)=\"removePicture(i)\"><i class=\"fa fa-times\"\r\n                                                  aria-hidden=\"true\"></i></span>\r\n                                            </div>\r\n                                            <div class=\"ml-3 col-md-8\">\r\n                                              <h4>{{ item.name }}</h4>\r\n                                              <input class=\"form-control\" id=\"img{{ item.id }}\"\r\n                                                placeholder=\"Type a caption\" (keypress)=\"setCaption(item.id)\" />\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"row\" *ngIf=\"imageCheck==0\">\r\n                                    <div class=\"col-12 text-center border-dotted text-white \" (click)=\"upload()\">\r\n                                      <div id=\"upload-button\">\r\n                                        <i class=\"fa fa-upload fa-lg\" aria-hidden=\"true\"></i> &nbsp; {{'trans.Upload_Photos' | translate}}\r\n                                        <input type=\"file\" hidden id=\"inputhidden\" accept='.jpg,.jpeg,.JPG,.png,.PNG'\r\n                                          required (change)=\"uploadImages()\" multiple>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"col-12\" *ngIf=\"fileURLs\">\r\n                                      <div class=\"row\">\r\n                                        <div class=\"col-md-12 upload-images\"\r\n                                          *ngFor=\"let item of fileURLs; let i = index\">\r\n                                          <div class=\"uploadImage{{i}} col-12 d-flex mt-4\">\r\n                                            <div class=\"col-md-4 img-fluid\"\r\n                                              style=\"background-image: url('http://oneroom3.crosip.com/{{ item.path }}'); height: 130px; background-size: contain; background-repeat: no-repeat;\">\r\n                                              <!-- <img src=\"{{sanitize(item.src)}}\" class=\"img-fluid \"> -->\r\n                                              <span\r\n                                                style=\"position: absolute; top: 15px; right: 25px; padding: 3px 5px; border-radius: 50%; background-color: white; color: black;\"\r\n                                                (click)=\"removePicture(i)\"><i class=\"fa fa-times\"\r\n                                                  aria-hidden=\"true\"></i></span>\r\n                                            </div>\r\n                                            <div class=\"ml-3 col-md-8\">\r\n                                              <h4>{{ item.type }}</h4>\r\n                                              <input class=\"form-control\" id=\"img{{ i }}\" value=\"{{item.caption}}\"\r\n                                                placeholder=\"Type a caption\" (keypress)=\"setCaption(i)\" />\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-12\" style=\"margin-top: 200px;\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\">{{'trans.Cancel' | translate}}</button>\r\n                                  <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\">{{'trans.Next' | translate}}</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane\" id=\"link5\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                  <h3><b>{{'trans.Capacity' | translate}}</b></h3>\r\n                                </div>\r\n                                <div class=\"col-6 text-right\"><button\r\n                                    class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}}</button></div>\r\n                                <div class=\"col-12\">\r\n                                  <p>{{'trans.To_help_you_earn_more' | translate}}</p>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <div class=\"row\">\r\n                                    <div class=\"col-sm-8 col-md-6\">\r\n                                      {{'trans.How_many_guests_can_stay' | translate}}\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-md-6 text-right\"> <img\r\n                                        src=\"../assets/Icons/PNG/Group 28.png\" (click)=\"minus(0)\" class=\"img-fluid\"><span\r\n                                        class=\"mr-2 ml-2\" style=\"font-size:15;font-weight: bold;\">{{incval}}</span> <img\r\n                                        (click)=\"plus(0)\" src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid\">\r\n                                    </div>\r\n                                  </div>\r\n                                  <hr class=\"mt-0 pt-0\">\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <div class=\"row\">\r\n                                    <div class=\"col-sm-8 col-md-6\">\r\n                                      {{'trans.How_many_rooms_are_there' | translate}}\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-md-6 text-right\"> <img\r\n                                        src=\"../assets/Icons/PNG/Group 28.png\" (click)=\"minus(6)\" class=\"img-fluid\"><span\r\n                                        class=\"mr-2 ml-2\" style=\"font-size:15;font-weight: bold;\">{{incval6}}</span>\r\n                                      <img (click)=\"plus(6)\" src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid\">\r\n                                    </div>\r\n                                  </div>\r\n                                  <hr class=\"mt-0 pt-0\">\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <div class=\"row\">\r\n                                    <div class=\"col-sm-8 col-md-6\">\r\n                                      {{'trans.How_many_bathrooms_are_there' | translate}}\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-md-6 text-right\"> <img\r\n                                        src=\"../assets/Icons/PNG/Group 28.png\" (click)=\"minus(1)\" class=\"img-fluid\"><span\r\n                                        class=\"mr-2 ml-2\" style=\"font-size:15;font-weight: bold;\">{{incval1}}</span>\r\n                                      <img (click)=\"plus(1)\" src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid\">\r\n                                    </div>\r\n                                  </div>\r\n                                  <hr class=\"mt-0 pt-0\">\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <div class=\"row\">\r\n                                    <div class=\"col-12\">\r\n                                      <p>{{'trans.which_beds_are_available_in_this_room' | translate}}</p>\r\n                                    </div>\r\n                                    <div class=\"col-8 col-md-6\">\r\n                                      <p>{{'trans.single_bed' | translate}} <small>90-130 cm wide</small></p>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-md-6 text-right\"> <img\r\n                                        src=\"../assets/Icons/PNG/Group 28.png\" (click)=\"minus(2)\" class=\"img-fluid\"><span\r\n                                        class=\"mr-2 ml-2\" style=\"font-size:15;font-weight: bold;\">{{incval2}}</span>\r\n                                      <img (click)=\"plus(2)\" src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid\">\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <div class=\"row\">\r\n                                    <div class=\"col-sm-8 col-md-6\">\r\n                                      <p>{{'trans.Double_bed' | translate}}<small>131-150 cm wide</small></p>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-md-6 text-right\"> <img\r\n                                        src=\"../assets/Icons/PNG/Group 28.png\" (click)=\"minus(3)\" class=\"img-fluid\"><span\r\n                                        class=\"mr-2 ml-2\" style=\"font-size:15;font-weight: bold;\">{{incval3}}</span>\r\n                                      <img (click)=\"plus(3)\" src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid\">\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <div class=\"row\">\r\n                                    <div class=\"col-sm-8 col-md-6\">\r\n                                      <p>{{'trans.Large_bed' | translate}} (King size)<small>151-180 cm wide</small></p>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-md-6 text-right\"> <img\r\n                                        src=\"../assets/Icons/PNG/Group 28.png\" (click)=\"minus(4)\" class=\"img-fluid\"><span\r\n                                        class=\"mr-2 ml-2\" style=\"font-size:15;font-weight: bold;\">{{incval4}}</span>\r\n                                      <img (click)=\"plus(4)\" src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid\">\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <div class=\"row\">\r\n                                    <div class=\"col-sm-8 col-md-6\">\r\n                                      <p>{{'trans.Extra_large_double_bed' | translate}} <small>181-220 cm wide</small></p>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-md-6 text-right\"> <img\r\n                                        src=\"../assets/Icons/PNG/Group 28.png\" (click)=\"minus(5)\" class=\"img-fluid\"><span\r\n                                        class=\"mr-2 ml-2\" style=\"font-size:15;font-weight: bold;\">{{incval5}}</span>\r\n                                      <img (click)=\"plus(5)\" src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid\">\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\">{{'trans.Cancel' | translate}}</button>\r\n                                  <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\">{{'trans.Next' | translate}}</button>\r\n\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane\" id=\"link6\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-6\">\r\n                              <h3><b>{{'trans.Date_range' | translate}} </b></h3>\r\n                            </div>\r\n                            <div class=\"col-6 text-right\"><button\r\n                                class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}}</button></div>\r\n                            <div class=\"col-12\">\r\n                              <p>{{'trans.To_help_you_earn_more' | translate}}</p>\r\n                            </div>\r\n                            <div class=\"col-12\">\r\n                              <mat-form-field class=\"example-form-field \" hidden appearance=\"fill\">\r\n                                <mat-date-range-input [formGroup]=\"campaignOne\" [rangePicker]=\"campaignOnePicker\">\r\n                                  <input matStartDate placeholder=\"Start date\" [formControlName]=\"'start'\">\r\n                                  <input matEndDate placeholder=\"End date\" [formControlName]=\"'end'\">\r\n                                </mat-date-range-input>\r\n                                <mat-datepicker-toggle matSuffix [for]=\"campaignOnePicker\"></mat-datepicker-toggle>\r\n                                <mat-date-range-picker #campaignOnePicker></mat-date-range-picker>\r\n                              </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-12\" style=\"margin-top: 280px;\">\r\n                              <button class=\"btn btn-default text-dark\" (click)=\"back()\">{{'trans.Cancel' | translate}}</button>\r\n                              <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\">{{'trans.Next' | translate}}</button>\r\n\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane  \" id=\"link7\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                  <h3><b> {{'trans.Description' | translate}}</b></h3>\r\n                                </div>\r\n                                <div class=\"col-6 text-right\"><button\r\n                                    class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}}</button></div>\r\n                                <div class=\"col-12\">\r\n                                  <textarea rows=\"19\" class=\"form-control\" placeholder=\"Type the Description\"\r\n                                    [formControlName]=\"'description'\"></textarea>\r\n                                </div>\r\n                                <div class=\"col-12 mt-3\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\">{{'trans.Cancel' | translate}}</button>\r\n                                  <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\">{{'trans.Next' | translate}}</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane\" id=\"link8\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-12 text-right\">\r\n                                  <button class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}}</button>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <h3><b> {{'trans.What_offer_you_propose' | translate}}</b></h3>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <input required type=\"text\" class=\"form-control\" [formControlName]=\"'address'\"\r\n                                    (keydown.enter)=\"$event.preventDefault()\" placeholder=\"Type the address\"\r\n                                    autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" #search\r\n                                    id=\"address\">\r\n                                </div>\r\n                                <div class=\"col-12 mt-4\">\r\n                                  <h5><b>{{'trans.Pin_the_location_of_your_offer' | translate}}</b></h5>\r\n                                </div>\r\n                                <div class=\"col-12 mt-2\">\r\n                                  <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\">\r\n                                    <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [markerDraggable]=\"true\"\r\n                                      (dragEnd)=\"markerDragEnd($event)\"></agm-marker>\r\n                                  </agm-map>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <input type=\"text\" class=\"form-control\" [formControlName]=\"'city'\"\r\n                                    placeholder=\"Type the city\" required id=\"city\">\r\n                                </div>\r\n                                <div class=\"col-12\" style=\"margin-top: 150px;\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\">{{'trans.Cancel' | translate}}</button>\r\n                                  <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\">{{'trans.Next' | translate}}</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane\" id=\"link9\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                  <h3><b>{{'trans.Equipment_features' | translate}}</b></h3>\r\n                                </div>\r\n                                <div class=\"col-6 text-right\"><button\r\n                                    class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}}</button></div>\r\n                                <div class=\"col-12\">\r\n                                  <p>Lorem Ipsum is simply dummy text of the printing typesetting industry.\r\n                                    Lorem Ipsum has been the industry.</p>\r\n                                </div>\r\n                                <div class=\"col-md-12\" style=\"margin-top: -25px\">\r\n                                  <div class=\"cc-selector\">\r\n                                    <div class=\"row\">\r\n                                      <div class=\"col-md-4\" *ngFor=\"let feature of equipmentFeatures\">\r\n                                        <div class=\"card cardheader\" (click)=\"slectoffer()\" style=\"background:#fafafa; min-height: 190px;\">\r\n                                          <div class=\"card-body text-center\">\r\n                                            <input id=\"{{feature.name}}\" type=\"checkbox\" class=\"features\"\r\n                                              name=\"feature{{feature.id}}\" value=\"wifi\" />\r\n                                            <label class=\"drinkcard-cc {{feature.name}} ml-3 mt-0 mb-0\" for=\"{{feature.name}}\"\r\n                                              style=\"background-image: url('http://oneroom3.crosip.com/{{ feature.icon }}') !important; background: transparent !important; background-size: contain !important; background-repeat: no-repeat !important;\"></label>\r\n                                            <p class=\"mb-0\">{{feature.name}}</p>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <!-- <div class=\"col-md-4\">\r\n                                        <div class=\"card\" (click)=\"slectoffer()\" style=\"background:#fafafa;\">\r\n                                          <div class=\"card-body text-center\">\r\n                                            <input id=\"parking\" type=\"checkbox\" [formControlName]=\"'features'\"\r\n                                              value=\"parking\" />\r\n                                            <label class=\"drinkcard-cc parking ml-3\" for=\"parking\"></label>\r\n                                            <p class=\"mb-0\">Parking</p>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"col-md-4\">\r\n                                        <div class=\"card\" (click)=\"slectoffer()\" style=\"background:#fafafa;\">\r\n                                          <div class=\"card-body text-center\">\r\n                                            <input id=\"children\" type=\"checkbox\" [formControlName]=\"'features'\"\r\n                                              value=\"children\" />\r\n                                            <label class=\"drinkcard-cc children ml-3\" for=\"children\"></label>\r\n                                            <p class=\"mb-0\">Children and extra beds</p>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div> -->\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- <div class=\"col-md-12\" style=\"margin-top: -25px\">\r\n                                  <div class=\"cc-selector\">\r\n                                    <div class=\"row\">\r\n                                      <div class=\"col-md-4\">\r\n                                        <div class=\"card\" (click)=\"slectoffer()\" style=\"background:#fafafa;\">\r\n                                          <div class=\"card-body text-center\">\r\n                                            <input id=\"credit-card\" type=\"checkbox\" [formControlName]=\"'features'\"\r\n                                              value=\"credit-card\" />\r\n                                            <label class=\"drinkcard-cc credit-card ml-3\" for=\"credit-card\"></label>\r\n                                            <p class=\"mb-0\">Credit card support</p>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"col-md-4\">\r\n                                        <div class=\"card\" (click)=\"slectoffer()\" style=\"background:#fafafa;\">\r\n                                          <div class=\"card-body text-center\">\r\n                                            <input id=\"pets\" type=\"checkbox\" [formControlName]=\"'features'\" value=\"pets\" />\r\n                                            <label class=\"drinkcard-cc pets ml-3\" for=\"pets\"></label>\r\n                                            <p class=\"mb-0\">Pets</p>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"col-md-4\">\r\n                                        <div class=\"card\" (click)=\"slectoffer()\" style=\"background:#fafafa;\">\r\n                                          <div class=\"card-body text-center\">\r\n                                            <input id=\"air-conditioning\" type=\"checkbox\" [formControlName]=\"'features'\"\r\n                                              value=\"air-conditioning\" />\r\n                                            <label class=\"drinkcard-cc air-conditioning ml-3\" for=\"air-conditioning\"></label>\r\n                                            <p class=\"mb-0\">Air conditioning</p>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-md-12\" style=\"margin-top: -25px\">\r\n                                  <div class=\"cc-selector\">\r\n                                    <div class=\"row\">\r\n                                      <div class=\"col-md-4\">\r\n                                        <div class=\"card\" (click)=\"slectoffer()\" style=\"background:#fafafa;\">\r\n                                          <div class=\"card-body text-center\">\r\n                                            <input id=\"electric-vehicle\" type=\"checkbox\"\r\n                                            [formControlName]=\"'features'\" value=\"electric-vehicle\" />\r\n                                            <label class=\"drinkcard-cc electric-vehicle ml-3\" for=\"electric-vehicle\"></label>\r\n                                            <p class=\"mb-0\">Electric Vehicle</p>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"col-md-4\">\r\n                                        <div class=\"card\" (click)=\"slectoffer()\" style=\"background:#fafafa;\">\r\n                                          <div class=\"card-body text-center\">\r\n                                            <input id=\"kitchen\" type=\"checkbox\" [formControlName]=\"'features'\" value=\"kitchen\" />\r\n                                            <label class=\"drinkcard-cc kitchen ml-3\" for=\"kitchen\"></label>\r\n                                            <p class=\"mb-0\">Kitchen</p>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"col-md-4\">\r\n                                        <div class=\"card\" (click)=\"slectoffer()\" style=\"background:#fafafa;\">\r\n                                          <div class=\"card-body text-center\">\r\n                                            <input id=\"swimming-pool\" type=\"checkbox\" [formControlName]=\"'features'\"\r\n                                              value=\"swimming-pool\" />\r\n                                            <label class=\"drinkcard-cc swimming-pool ml-3\" for=\"swimming-pool\"></label>\r\n                                            <p class=\"mb-0\">Swimming Pool</p>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div> -->\r\n                                <div class=\"col-12\" style=\"margin-top:5vh;\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\">{{'trans.Cancel' | translate}}</button>\r\n                                  <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\">{{'trans.Next' | translate}}</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane  \" id=\"link10\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                  <h3><b>{{'trans.Terms_Policies' | translate}}</b></h3>\r\n                                </div>\r\n                                <div class=\"col-6 text-right\"><button\r\n                                    class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}}</button></div>\r\n                                <div class=\"col-12\">\r\n                                  <textarea rows=\"19\" class=\"form-control\" placeholder=\"Type of terms/policies\"\r\n                                    [formControlName]=\"'terms_policies'\"></textarea>\r\n                                </div>\r\n                                <div class=\"col-12 mt-3\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\">{{'trans.Cancel' | translate}}</button>\r\n                                  <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\">{{'trans.Next' | translate}}</button>\r\n\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane  \" id=\"link11\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\" *ngIf=\"languages\">\r\n                                <div class=\"col-6\">\r\n                                  <h3><b>{{'trans.Language_spoken' | translate}}</b></h3>\r\n                                </div>\r\n                                <div class=\"col-6 text-right\"><button\r\n                                    class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}}</button></div>\r\n                                <div class=\"col-12\" *ngFor=\"let language of languages\">\r\n                                  <input type=\"checkbox\" value=\"{{language.id}}\" class=\"languages\"\r\n                                    id=\"lang{{language.id}}\"> {{language.name}}\r\n                                </div>\r\n                                <div class=\"col-12 mt-3\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\">{{'trans.Cancel' | translate}}</button>\r\n                                  <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\">{{'trans.Next' | translate}}</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane  \" id=\"link12\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-12 text-right\"><button\r\n                                    class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}}</button></div>\r\n                                <div class=\"col-12\">\r\n                                  <h3><b> {{'trans.Discount' | translate}}</b></h3>\r\n\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                  <h4><b>{{'trans.Offer_20_off' | translate}}</b></h4>\r\n                                  <p>{{'trans.who_book_your_service' | translate}}</p> <h4><b>Offer 40% off to your first patients</b></h4>\r\n                                  <button class=\"btn btn-default text-dark\">recommended</button>\r\n                                  <button class=\"btn btn-danger\" (click)=\"discountstep=1\"> {{'trans.Edit' | translate}}</button>\r\n                                  <hr>\r\n                                </div>\r\n                                <div class=\"col-12\" *ngIf=\"discountstep==1\">\r\n                                  <h4><b>Discount update</b></h4>\r\n                                  <p><b>Number of percentage</b></p>\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"Min. 40\" min=\"40\"\r\n                                    [formControlName]=\"'discount_of_percentage'\" required>\r\n                                </div>\r\n                                <div class=\"col-12\" *ngIf=\"discountstep==1\">\r\n                                  <p><b>Number of Booking</b></p>\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"Min. 40\" min=\"40\"\r\n                                    [formControlName]=\"'discount_of_booking'\" required>\r\n                                </div>\r\n                                <div class=\"col-12\" *ngIf=\"discountstep==1\">\r\n                                  <p><b>Subsidiary</b></p>\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"Lorem Ipsum\"\r\n                                    [formControlName]=\"'subsidiary'\">\r\n                                </div>\r\n                                <div class=\"col-12\" style=\"margin-top: 10px;\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\">{{'trans.Cancel' | translate}}</button>\r\n                                  <button class=\"btn btn-danger\" style=\"float: right;\" (click)=\"nexttab()\">{{'trans.Next' | translate}}</button>\r\n\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane  \" id=\"link13\">\r\n                      <div class=\"card mt-0\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-12 text-right\"><button\r\n                                    class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>{{'trans.save_and_exit' | translate}}</button></div>\r\n                                <div class=\"col-12\">\r\n                                  <h3><b>Offer Publish</b></h3>\r\n                                </div>\r\n                                <div class=\"col-12 d-flex\">\r\n                                  <div class=\"col-md-9\">\r\n                                    <p>Lorem Ipsum is simply dummy text of the printing\r\n                                      typesetting industry. Lorem Ipsum has been the industry</p>\r\n                                  </div>\r\n                                  <div class=\"col-md-3\">\r\n                                    <div class=\"togglebutton\"><label><input type=\"checkbox\" checked=\"\" (change)=\"status()\" id=\"statusVal\"\r\n                                          [formControlName]=\"'status'\">\r\n                                        <span class=\"toggle\"></span></label>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-12\" style=\"margin-top:270px;\">\r\n                                  <button class=\"btn btn-default text-dark\" (click)=\"back()\">{{'trans.Cancel' | translate}}</button>\r\n                                  <button class=\"btn btn-danger btn-round\" id=\"updateBtn\" (click)=\"update()\"\r\n                                    style=\"float: right;\">Update</button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <app-footerhostportal-web></app-footerhostportal-web>\r\n\r\n  </div>\r\n</div>";

/***/ }),

/***/ 86344:
/*!************************************************************!*\
  !*** ./src/app/Host/Inbox/Inbox.component.html?ngResource ***!
  \************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<style>\r\n    .border {\r\n        border-radius: 10px;\r\n    }\r\n\r\n    #chat p {\r\n        font-size: 12.9px;\r\n        line-height: 15px;\r\n        overflow: hidden;\r\n    }\r\n\r\n    .badge {\r\n        position: absolute;\r\n        top: 0px;\r\n        right: -10px;\r\n        padding: 3px 5px;\r\n        border-radius: 50%;\r\n        background-color: red;\r\n        color: white;\r\n    }\r\n\r\n    .bgchat {\r\n        background-color: #e8e8e8;\r\n        cursor: pointer;\r\n    }\r\n .activetab\r\n {\r\n    background-color: #e95228 !important;\r\n }\r\n    .divscroll::-webkit-scrollbar {\r\n        scrollbar-gutter: 2px;\r\n        width: 4px;\r\n        z-index: 10;\r\n        border-radius: 10px;\r\n        background: white;\r\n    }\r\n\r\n    .divscroll::-webkit-scrollbar-thumb {\r\n        background-color: #2d5286;\r\n    }\r\n</style>\r\n\r\n<div class=\"wrapper wrapper-full-page\">\r\n    <div class=\"page-header lock-page header-filter\" filter-color=\"black\"\r\n        style=\"background-color:#fafafa; background-size: cover; background-position: top center;\">\r\n        <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\r\n        <div class=\"container\">\r\n\r\n            <div class=\"row\" style=\"margin-top: 5vh;\">\r\n                <div class=\"col-md-12\">\r\n                    <div>\r\n                        <h3> <b> {{'trans.Inbox' | translate}}</b></h3>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row mb-4\" style=\"background-color: white;\" id=\"chat\">\r\n                <div class=\"col-md-5 col-lg-4 border p-3 border-start\" id=\"leftmenue\" (click)=\"showbody()\"\r\n                    *ngIf=\"allMessages\">\r\n                    <div class=\"col-12\">\r\n                        <h4><b> {{'trans.Chatting' | translate}}</b></h4>\r\n                        <div class=\"input-group mb-3\"\r\n                            style=\"background-color: white;border: 1px solid #dee2e6;border-radius: 20px;\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-search\"></i></span>\r\n                            </div>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Search\" id=\"floatingTextarea\"\r\n                                style=\"background-image: none;    padding: 20px 0px;\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"divscroll mb-3\" \r\n                    style=\"overflow: auto; height: 370px; overflow-x: hidden;\">\r\n                \r\n                    <div class=\"col-12 mb-2\" *ngFor=\"let list of latestConversation; let i = index;\" >\r\n                        <div class=\"row border\">\r\n                            <div class=\"col-md-12 p-2 bgchat\" id=\"bgchat\"  [ngClass]=\"{'activetab': currentchatid==list.ad_id}\" style=\"border-radius: 10px;\"\r\n                                (click)=\"getMessages(list.ad_id)\">\r\n                                <div class=\"d-flex\">\r\n                                    <div class=\"col-md-2\">\r\n                                        <img *ngIf=\"!allMessages[i].sender.pic\" src=\"https://onerooms.ch/assets/Images/tempprofile.png\" alt=\"Img\" height=\"50\"\r\n                                            width=\"50\" class=\"mr-3 rounded-circle\">\r\n                                        <img *ngIf=\"allMessages[i].sender.pic\" src=\"http://oneroom3.crosip.com/{{allMessages[i].sender.pic}}\"\r\n                                            class=\"rounded-circle mr-3\" alt=\"Img\" width=\"50\" height=\"50\">\r\n                                        <div class=\"badge\" hidden>5</div>\r\n                                    </div>\r\n                                    <div class=\"d-grid col-md-10\">\r\n                                        <h5 class=\"pl-3 mb-2 pb-0\"><span><b>{{ allMessages[i].sender.fname }} {{\r\n                                                    allMessages[i].sender.lname }}</b></span> <small\r\n                                                *ngIf=\"list.updated_at\"\r\n                                                style=\"float:right\">{{moment(list.updated_at).format('ddd')}},\r\n                                                {{moment(list.updated_at).format('hh:mm a')}}</small></h5>\r\n                                        <br>\r\n                                        <p class=\"pl-3 pb-0 mb-2\">\r\n                                            {{moment(allMessages[i].ad.created_at).format('ddd')}} |\r\n                                            {{moment(allMessages[i].ad.created_at).format('MMM DD, YYYY')}} |\r\n                                            {{moment(allMessages[i].ad.created_at).format('hh:mm a')}} <br> <span\r\n                                                class=\"mt-2 text-danger\">{{ allMessages[i].ad.title }}</span>\r\n                                        </p>\r\n                                        <p class=\"pl-3 pb-0 mb-0\" *ngIf=\"list.message != null\">\r\n                                            {{ list.message }}\r\n                                        </p>\r\n                                        <p class=\"pl-3 pb-0 mb-0\" *ngIf=\"list.message == null\">\r\n                                            Attachment: {{ list.attachment_type }}\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                    <!-- <div class=\"col-12 mb-2\" (click)=\"changestate(1)\">\r\n                        <div class=\"row border\">\r\n                            <div class=\"col-md-12 p-2 bgchat\" id=\"bgchat\" style=\"border-radius: 10px;\">\r\n                                <div class=\"d-flex\">\r\n                                    <div class=\"col-md-2\">\r\n                                        <img src=\"./assets/Images/george-deglin.png\" class=\"rounded-circle mr-3\" alt=\"Girl in a jacket\" width=\"50\" height=\"50\">\r\n                                        <div class=\"badge\">5</div>\r\n                                    </div>\r\n\r\n                                    <div class=\"d-grid col-md-10\">\r\n                                        <h5 class=\"pl-3 mb-2 pb-0\"><span><b>George Deglin</b></span> <small style=\"float:right\">just now</small></h5>\r\n                                        <p class=\"pl-3 pb-0 mb-2\">\r\n                                            May 23 | May 24 <span class=\"ml-2 text-danger\">Offer title name</span>\r\n                                        </p>\r\n                                        <p class=\"pl-3 pb-0 mb-0\">\r\n                                            There are many variations of passages of Lorem\r\n                                            Ipsum available.\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div> -->\r\n                </div>\r\n                <div class=\"col-md-5 col-lg-4 border p-3 border-start \" id=\"leftmenue\" (click)=\"showbody()\"\r\n                    *ngIf=\"!allMessages\">\r\n                    <div class=\"col-12\">\r\n                        <h4><b>Chatting</b></h4>\r\n                        <div class=\"input-group mb-3\"\r\n                            style=\"background-color: white;border: 1px solid #dee2e6;border-radius: 20px;\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-search\"></i></span>\r\n                            </div>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Search\" id=\"floatingTextarea\"\r\n                                style=\"background-image: none; padding: 20px 0px;\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12 mb-2\">\r\n                        <h5>No Message Found</h5>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-7 col-lg-8 border p-3 d-none d-lg-block d-md-block d-xl-block\" id=\"body\"\r\n                    style=\"position: relative;\" *ngIf=\"offerMessages != null\">\r\n                    <div class=\"row\" *ngIf=\"offerMessages\">\r\n                        <div class=\"col-md-12 border-bottom\">\r\n                            <h3 class=\"mb-0 mt-0\"><i class=\"fa fa-arrow-left  d-lg-none d-md-none d-xl-none mr-2\"\r\n                                    (click)=\"back()\"></i ><b *ngIf=\"offerMessages!=null\">{{ offerMessages.customer.fname }} {{\r\n                                    offerMessages.customer.lname }}</b><small\r\n                                    style=\"float:right;\"><img src=\"../assets/Icons/PNG/More.png\" /> </small> </h3>\r\n                            <p class=\"\" *ngIf=\"offerMessages!=null\">{{moment(ad.created_at).format('ddd')}} |\r\n                                {{moment(ad.created_at).format('MMM DD, YYYY')}} |\r\n                                {{moment(ad.created_at).format('hh:mm a')}} <span\r\n                                    class=\"text-danger\">{{ad.title}}</span></p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row py-3 divscroll mb-3\" id=\"divscroll\"\r\n                        style=\"overflow: auto; height: 370px; overflow-x: hidden;\">\r\n                        <div class=\"col-md-12\" *ngFor=\"let ls of allmessage\">\r\n                            <div class=\"d-flex\" *ngIf=\"user_id != ls.sender.id\">\r\n                                <div *ngIf=\"ls.sender.pic\">\r\n                                    <img src=\"http://oneroom3.crosip.com/{{ls.sender.pic}}\" alt=\"Img\" height=\"50\"\r\n                                        width=\"50\" class=\"mr-3 rounded-circle\">\r\n                                </div>\r\n                                <div *ngIf=\"!ls.sender.pic\">\r\n                                    <img src=\"https://onerooms.ch/assets/Images/tempprofile.png\" alt=\"Img\" height=\"50\"\r\n                                        width=\"50\" class=\"mr-3 rounded-circle\">\r\n                                </div>\r\n                                <div>\r\n                                    <div *ngIf=\"ls.message != null\" class=\"mt-2\"\r\n                                        style=\"align-self: center; width: 270px; background-color: #dcdcdc; height: auto; padding:10px; border-radius: 12px;word-wrap: break-word;\">\r\n                                        <p class=\"mb-1\">{{ ls.message }}</p>\r\n                                        <p><span class=\"float-right\">{{moment(ls.created_at).format('ddd')}} |\r\n                                                {{moment(ls.created_at).format('MMM DD, YYYY')}} |\r\n                                                {{moment(ls.created_at).format('hh:mm a')}}</span></p>\r\n                                    </div>\r\n                                    <div *ngIf=\"ls.attachment_file != null\" class=\"mt-2\"\r\n                                        style=\"align-self: center; width: 270px; background-color: #dcdcdc; height: auto; padding:10px; border-radius: 12px;;word-wrap: break-word;\">\r\n                                        <p class=\"mb-1\"><a href=\"http://oneroom3.crosip.com/{{ls.attachment_file}}\"\r\n                                                target=\"_blank\">See Attachment</a></p>\r\n                                        <p><span class=\"float-right\">{{moment(ls.created_at).format('ddd')}} |\r\n                                                {{moment(ls.created_at).format('MMM DD, YYYY')}} |\r\n                                                {{moment(ls.created_at).format('hh:mm a')}}</span></p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"d-flex pull-right\" *ngIf=\"user_id == ls.sender.id\">\r\n                                <div id=\"sender_new_message\">\r\n                                    <div *ngIf=\"ls.message != null\" class=\"mt-2\"\r\n                                        style=\"align-self: center; width: 270px; background-color:#e95228; height: auto; padding:10px; border-radius: 12px;;word-wrap: break-word;\">\r\n                                        <p class=\"mb-1\" style=\"color:white !important;\">{{ ls.message }}</p>\r\n                                        <p><span class=\"float-right\"\r\n                                                style=\"color:white !important;\">{{moment(ls.created_at).format('ddd')}}\r\n                                                |\r\n                                                {{moment(ls.created_at).format('MMM DD, YYYY')}} |\r\n                                                {{moment(ls.created_at).format('hh:mm a')}}</span></p>\r\n                                    </div>\r\n                                    <div *ngIf=\"ls.attachment_file != null\" class=\"mt-2\"\r\n                                        style=\"align-self: center; width: 270px; background-color:#e95228; color:white !important; height: auto; padding:10px; border-radius: 12px;;word-wrap: break-word;\">\r\n                                        <p class=\"mb-1\"><a href=\"http://oneroom3.crosip.com/{{ls.attachment_file}}\"\r\n                                                target=\"_blank\" style=\"color:white !important;\">See Attachment</a></p>\r\n                                        <p><span class=\"float-right\"\r\n                                                style=\"color:white !important;\">{{moment(ls.created_at).format('ddd')}}\r\n                                                |\r\n                                                {{moment(ls.created_at).format('MMM DD, YYYY')}} |\r\n                                                {{moment(ls.created_at).format('hh:mm a')}}</span></p>\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"ls.sender.pic\">\r\n                                    <img src=\"http://oneroom3.crosip.com/{{ls.sender.pic}}\" alt=\"Img\" height=\"50\"\r\n                                        width=\"50\" class=\"mr-3 rounded-circle\">\r\n                                </div>\r\n                                <div *ngIf=\"!ls.sender.pic\">\r\n                                    <img src=\"https://onerooms.ch/assets/Images/tempprofile.png\" alt=\"Img\" height=\"50\"\r\n                                        width=\"50\" class=\"mr-3 rounded-circle\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-12 text-center mt-5\" *ngIf=\"offerMessages.length==0\">\r\n                            <h5>No Message Found</h5>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row w-100 py-1 mt-3\" style=\"position: absolute; bottom: 0;\">\r\n\r\n                        <div class=\"col-12\" style=\"padding: 5px;background: #f6f7f8;\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-2 text-center\" style=\"align-self: center;\">\r\n                                    <!-- <i class=\"fa fa-camera fa-2x\" aria-hidden=\"true\" style=\"color: #203a60\"></i> &nbsp; -->\r\n                                    <img src=\"../assets/Icons/PNG/Camera.png\"> &nbsp;\r\n                                    <label for=\"file\">\r\n                                        <!-- <i class=\"fa fa-picture-o fa-2x\" aria-hidden=\"true\" style=\"color: #203a60\"></i> -->\r\n                                        <img src=\"../assets/Icons/PNG/image.png\">\r\n                                        <input type=\"file\" id=\"file\" style=\"display: none\" name=\"image\"\r\n                                            accept=\"image/jpeg,image/jpg,image/png\" multiple=\"\"\r\n                                            data-original-title=\"upload photos\"\r\n                                            (change)=\"sendMessageAttachment($event)\">\r\n                                    </label>\r\n                                </div>\r\n                                <div class=\"col-9 text-left\">\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Aa\" id=\"sender_message\"\r\n                                        style=\"background-image: none;background-color: white; border: 1px solid #dee2e6; border-radius: 20px; padding-left: 20px;\">\r\n                                </div>\r\n                                <div class=\"col-1 text-left\" style=\"margin-left: -15px; margin-top: 0.4rem;cursor: pointer;\">\r\n                                    <img src=\"../assets/Icons/PNG/Sender_normal.png\" (click)=\"sendMessage()\">\r\n                                    <!-- <i class=\"fa fa-location-arrow fa-2x\" aria-hidden=\"true\" style=\"color: #203a60\"></i> -->\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"col-md-7 col-lg-8 border p-3 d-none d-lg-block d-md-block d-xl-block\" id=\"body\"\r\n                    style=\"position: relative;\" *ngIf=\"offerMessages == null\">\r\n                    <h5 class=\"text-center\">No Records Found</h5>\r\n                </div>\r\n            </div>\r\n\r\n            \r\n        </div>\r\n        <app-footerhostportal-web></app-footerhostportal-web>\r\n\r\n    </div>\r\n    <!-- <app-footerhostportal-web></app-footerhostportal-web> -->\r\n\r\n</div>\r\n";

/***/ }),

/***/ 98215:
/*!********************************************************************!*\
  !*** ./src/app/Host/Offerlist/Offerlist.component.html?ngResource ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<style>\r\n\r\n  .nav-tabs, .nav-pills {\r\n    border: 0;\r\n    border-radius: 3px;\r\n    padding: 0 0px;\r\n    border-bottom: 1px solid;\r\n    border-color: #cbc2c2;\r\n}\r\n.nav-pills.nav-pills-danger .nav-item .nav-link.active, .nav-pills.nav-pills-danger .nav-item .nav-link.active:focus, .nav-pills.nav-pills-danger .nav-item .nav-link.active:hover {\r\n    background-color: transparent !important;\r\n    color: #ed8935 !important;\r\n    border-radius: 0px;\r\n    border: none;\r\n    box-shadow: none;\r\n    border-bottom: 2px solid;\r\n}\r\n\r\n  .dpscolor {\r\n    color: #728aad;\r\n  }\r\n</style>\r\n\r\n<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header lock-page header-filter\" filter-color=\"black\"\r\n    style=\"background-color:#fafafa; background-size: cover; background-position: top center;\">\r\n    <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\r\n    <div class=\"container mb-4\">\r\n      <div class=\"row justify-content-center\" style=\"margin-top: 8vh;\">\r\n        <div class=\"col-12 col-lg-10\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 pl-0\">\r\n              <h3 class=\"pl-md-0\"><b> {{'trans.Offer_List' | translate}}</b></h3>\r\n            </div>\r\n            <div class=\"col-6 text-right mt-2\">\r\n              <a class=\"btn btn-danger\" href=\"#/hostportal/createoffer\"><i class=\"fa fa-plus mr-2\"></i> {{'trans.Create' | translate}}</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12 col-lg-10\">\r\n          <ul class=\"nav nav-pills nav-pills-danger justify-content-left\" role=\"tablist\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link active px-1 pr-3 py-1\" style=\"min-width:50px !important;font-weight: bold;\" data-toggle=\"tab\" href=\"#link1\" role=\"tablist\">\r\n                 {{'trans.Listed' | translate}}\r\n              </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link px-1 py-1\" style=\"min-width:50px !important;font-weight: bold;\" data-toggle=\"tab\" href=\"#link2\" role=\"tablist\">\r\n                {{'trans.Unlisted' | translate}}\r\n\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"tab-content col-12 mt-3 col-lg-10\">\r\n          <div class=\"tab-pane active \" id=\"link1\">\r\n            <div class=\"row\" *ngIf=\"listed.length > 0\">\r\n              <div class=\"col-md-6\" *ngFor=\"let offer of listed\">\r\n                <div (click)=\"getOfferDetails(offer.id)\" class=\"card mt-3 mb-1\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-4 p-0\" *ngIf=\"offer.attachments.length>0\"\r\n                      style=\"background-image: url('http://oneroom3.crosip.com/{{ offer.attachments[0].path }}');background-size: cover; background-repeat: no-repeat;border-radius: 6px 0px 0px 6px !important;\">\r\n                      <button class=\"btn btn-success px-2 py-1\"> {{'trans.Listed' | translate}}</button>\r\n                    </div>\r\n                    <div class=\"col-4 p-0\" *ngIf=\"offer.attachments.length==0\"\r\n                      style=\"background-image: url('../assets/Images/Bernina_Express.png');background-size: cover; background-repeat: no-repeat;border-radius: 6px 0px 0px 6px !important;\">\r\n                      <button class=\"btn btn-success px-2 py-1\"> {{'trans.Listed' | translate}}</button>\r\n                    </div>\r\n                    <div class=\"col-8\">\r\n                      <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-8\">\r\n                            <h4 class=\"mb-0\"><b>{{ offer.title }}</b></h4>\r\n                          </div>\r\n                          <div class=\"col-4 text-right\">\r\n                            <span *ngIf=\"offer.type == 'house'\"><img src=\"../assets/Icons/PNG/House.png\"></span>\r\n                            <span *ngIf=\"offer.type == 'apartment'\"><img src=\"../assets/Icons/PNG/Apartment.png\"></span>\r\n                            <span *ngIf=\"offer.type == 'hotel'\"><img src=\"../assets/Icons/PNG/hotel room.png\"></span>\r\n                          </div>\r\n                          <div class=\"col-5\">\r\n                            <p class=\"mb-0 dpscolor\" *ngIf=\"offer.discount_of_percentage\">Discount</p>\r\n                            <p class=\"mb-0 dpscolor\">Price</p>\r\n                            <p class=\"mb-0 dpscolor\" *ngIf=\"offer.subsidiary\">Subsidiary</p>\r\n\r\n                          </div>\r\n                          <div class=\"col-7\">\r\n                            <p class=\"mb-0\" *ngIf=\"offer.discount_of_percentage\">: {{ offer.discount_of_percentage}}% off\r\n                            </p>\r\n                            <p class=\"mb-0\">:<del class=\"text-danger\">{{ offer.currency }}{{ offer.price }}</del> {{ offer.currency }}{{ offer.current_price }}\r\n                            </p>\r\n                            <p class=\"mb-0\" *ngIf=\"offer.subsidiary\">:<b class=\"text-danger\"> {{ offer.subsidiary }}</b>\r\n                            </p>\r\n\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- <div class=\"col-12 text-center\">\r\n                <button class=\"btn btn-outline-danger btn-round\">More Active Offer</button>\r\n              </div> -->\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"listed.length == 0\">\r\n              <div class=\"col-md-12 text-center\">\r\n                <h3>No Records Found</h3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"tab-pane\" id=\"link2\">\r\n            <div class=\"row\" *ngIf=\"unlisted.length > 0\">\r\n              <div class=\"col-md-6\" *ngFor=\"let offer of unlisted\">\r\n                <div (click)=\"getOfferDetails(offer.id)\" class=\"card mt-3 mb-1\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-4 p-0\" *ngIf=\"offer.attachments.length>0\"\r\n                      style=\"background-image: url('http://oneroom3.crosip.com/{{ offer.attachments[0].path }}');background-size: cover; background-repeat: no-repeat;border-radius: 6px 0px 0px 6px !important;\">\r\n                      <button class=\"btn btn-danger px-2 py-1\"> {{'trans.Unlisted' | translate}}</button>\r\n                    </div>\r\n                    <div class=\"col-4 p-0\" *ngIf=\"offer.attachments.length==0\"\r\n                      style=\"background-image: url('../assets/Images/Bernina_Express.png');background-size: cover; background-repeat: no-repeat;border-radius: 6px 0px 0px 6px !important;\">\r\n                      <button class=\"btn btn-danger px-2 py-1\"> {{'trans.Unlisted' | translate}}</button>\r\n                    </div>\r\n                    <div class=\"col-8\">\r\n                      <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-8\">\r\n                            <h4 class=\"mb-0\"><b>{{ offer.title }}</b></h4>\r\n                          </div>\r\n                          <div class=\"col-4 text-right\">\r\n                            <span *ngIf=\"offer.type == 'house'\"><img src=\"../assets/Icons/PNG/House.png\"></span>\r\n                            <span *ngIf=\"offer.type == 'apartment'\"><img src=\"../assets/Icons/PNG/Apartment.png\"></span>\r\n                            <span *ngIf=\"offer.type == 'hotel'\"><img src=\"../assets/Icons/PNG/hotel room.png\"></span>\r\n                          </div>\r\n                          <div class=\"col-5\">\r\n                            <p class=\"mb-0 dpscolor\" *ngIf=\"offer.discount_of_percentage\"> {{'trans.Discount' | translate}}</p>\r\n                            <p class=\"mb-0 dpscolor\"> {{'trans.Price' | translate}}</p>\r\n                            <p class=\"mb-0 dpscolor\" *ngIf=\"offer.subsidiary\"> {{'trans.Subsidiary' | translate}}</p>\r\n\r\n                          </div>\r\n                          <div class=\"col-7\">\r\n                            <p class=\"mb-0\" *ngIf=\"offer.discount_of_percentage\">: {{ offer.discount_of_percentage}}% off\r\n                            </p>\r\n                            <p class=\"mb-0\">:<del class=\"text-danger\">{{ offer.currency }}{{ offer.price }}</del> {{ offer.currency }}{{ offer.current_price }}\r\n                            </p>\r\n                            <p class=\"mb-0\" *ngIf=\"offer.subsidiary\">:<b class=\"text-danger\"> {{ offer.subsidiary }}</b>\r\n                            </p>\r\n\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- <div class=\"col-12 text-center\">\r\n                <button class=\"btn btn-outline-danger btn-round\">More Active Offer</button>\r\n              </div> -->\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"unlisted.length == 0\">\r\n              <div class=\"col-md-12 text-center\">\r\n                <h3>No Records Found</h3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-footerhostportal-web></app-footerhostportal-web>\r\n\r\n  </div>\r\n</div>";

/***/ }),

/***/ 5825:
/*!****************************************************************!*\
  !*** ./src/app/Host/Profile/Profile.component.html?ngResource ***!
  \****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<style>\r\n  /* .nav-pills.nav-pills-danger .nav-item .nav-link.active, .nav-pills.nav-pills-danger .nav-item .nav-link.active:focus, .nav-pills.nav-pills-danger .nav-item .nav-link.active:hover {\r\n    background-color: transparent;\r\n    color: #ed8935;\r\n    border-radius: 0px;\r\n    border: none;\r\n    box-shadow: none;\r\n    border-bottom: 2px solid;\r\n} */\r\n  .nav-pills .nav-item .nav-link {\r\n    font-size: 16px !important;\r\n  }\r\n\r\n  .togglebutton label .toggle:after {\r\n    width: 30px;\r\n    height: 28px;\r\n  }\r\n\r\n  .togglebutton label input[type=checkbox]:checked+.toggle:after {\r\n    left: 26px;\r\n  }\r\n\r\n  .togglebutton label .toggle,\r\n  .togglebutton label input[type=checkbox][disabled]+.toggle {\r\n    content: \"\";\r\n    display: inline-block;\r\n    width: 55px;\r\n    height: 25px;\r\n  }\r\n\r\n  .form-control {\r\n    padding: 5px;\r\n    border: 1px solid #9da5ad;\r\n    border-radius: 5px;\r\n    background-image: none;\r\n  }\r\n\r\n  .field-icon {\r\n    float: right;\r\n    margin-left: -25px;\r\n    margin-top: -36px;\r\n    position: relative;\r\n    z-index: 2;\r\n    margin-right: 5px;\r\n  }\r\n\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active,\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active:focus,\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active:hover {\r\n    background-color: transparent !important;\r\n    color: #ed8935 !important;\r\n    box-shadow: none;\r\n  }\r\n\r\n  .nav-pills .nav-item i {\r\n    display: block;\r\n    font-size: 26px;\r\n    padding: 0px 0;\r\n    float: right;\r\n  }\r\n</style>\r\n\r\n<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header lock-page header-filter\" filter-color=\"black\"\r\n    style=\"background-color:#fafafa; background-size: cover; background-position: top center;\">\r\n    <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-left\" style=\"margin-top: 4vh;\">\r\n        <div class=\"col-12\">\r\n          <h3 class=\"ml-4\"><b> {{'trans.Profile' | translate}}</b></h3>\r\n          <div class=\"col-md-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"card mt-0\">\r\n                  <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-12\">\r\n                        <h3 class=\"ml-4\"><b> {{'trans.Settings' | translate}}</b></h3>\r\n                        <ul class=\"nav nav-pills flex-column nav-pills-danger justify-content-left\" role=\"tablist\">\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link active text-capitalize font-weight-bold  text-left px-3 py-1\"\r\n                              data-toggle=\"tab\" href=\"#link1\" role=\"tablist\">\r\n                              <span> {{'trans.Personal_info' | translate}} </span>\r\n                              <i class=\"fa fa-angle-right\"></i>\r\n\r\n                            </a>\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link text-capitalize font-weight-bold  text-left px-3 py-1\" data-toggle=\"tab\"\r\n                              href=\"#link22\" role=\"tablist\">\r\n\r\n                              <span>{{'trans.Language' | translate}} </span>\r\n                              <i class=\"fa fa-angle-right\"></i>\r\n                            </a>\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link text-capitalize font-weight-bold  text-left px-3 py-1\" data-toggle=\"tab\"\r\n                              href=\"#link2\" role=\"tablist\">\r\n\r\n                              <span> {{'trans.wallet' | translate}}</span>\r\n                              <i class=\"fa fa-angle-right\"></i>\r\n                            </a>\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" data-toggle=\"tab\"\r\n                              href=\"#link3\" role=\"tablist\">\r\n\r\n                              <span> {{'trans.change_password' | translate}}</span>\r\n                              <i class=\"fa fa-angle-right\"></i>\r\n                            </a>\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" data-toggle=\"tab\"\r\n                              href=\"#link4\" role=\"tablist\">\r\n\r\n                              <span> {{'trans.change_Email' | translate}}</span>\r\n                              <i class=\"fa fa-angle-right\"></i>\r\n                            </a>\r\n\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" data-toggle=\"tab\"\r\n                              href=\"#link5\" role=\"tablist\">\r\n\r\n                              <span> {{'trans.Give_us_feedback' | translate}}</span>\r\n                              <i class=\"fa fa-angle-right\"></i>\r\n                            </a>\r\n\r\n                          </li>\r\n\r\n\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-8 col-lg-7\">\r\n                <div class=\"tab-content tab-space col-12 pt-0\">\r\n                  <div class=\"tab-pane active \" id=\"link1\">\r\n                    <div class=\"card mt-0\">\r\n                      <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n\r\n                          <div class=\"col-12\" *ngIf=\"data\">\r\n                            <div class=\"row\" *ngIf=\"step==0\">\r\n                              <div class=\"col-6\">\r\n                                <h3><b> {{'trans.Personal_info' | translate}}</b></h3>\r\n                              </div>\r\n                              <div class=\"col-6 text-right\"><button\r\n                                  class=\"btn text-dark btn-default btn-round py-1 px-2\" (click)=\"step=1\"><img\r\n                                    src=\"../assets/Icons/PNG/Edit.png\" /></button></div>\r\n                              <div class=\"col-12 d-flex\">\r\n                                <div  >\r\n                                  <img *ngIf=\"data.pic\" (click)=\"clickProfilePicture()\" alt=\"User Avatar\"\r\n                                    src=\"http://oneroom3.crosip.com/{{ data.pic }}\" class=\"img-fluid mr-4\" width=\"88\"\r\n                                    height=\"88\" />\r\n                                  <img *ngIf=\"!data.pic\" (click)=\"clickProfilePicture()\" class=\"img-fluid mr-4\"\r\n                                    src=\"../assets/Images/george-deglin@2x.png\" alt=\"User Avatar\" width=\"88\"\r\n                                    height=\"88\">\r\n                                  <!-- <img (click)=\"clickProfilePicture()\" *ngIf=\"changeText\" class=\"img-fluid mr-4\"\r\n                                    src=\"../assets/Images/tempprofile.png\" alt=\"Edit Icon\" width=\"88\" height=\"88\"> -->\r\n                                  <input type=\"file\" hidden id=\"pictureFileTrigger\"\r\n                                    accept=\"image/png, image/jpg, image/jpeg\" (change)=\"editProfilePicture($event)\">\r\n                                </div>\r\n                                <div class=\"ml-3 d-flex\">\r\n                                  <div>\r\n                                    <p class=\"mr-5\"> {{'trans.Name' | translate}}</p>\r\n                                    <p> {{'trans.Email' | translate}}</p>\r\n                                    <p> {{'trans.Mobile' | translate}}</p>\r\n                                    <!-- <p>Website</p>\r\n                                    <p>VAT Number</p> -->\r\n                                    <p> {{'trans.Address' | translate}}</p>\r\n                                  </div>\r\n                                  <div>\r\n                                    <p>: {{ data.fname }} {{ data.lname }}</p>\r\n                                    <p>: {{ data.email }}</p>\r\n                                    <p *ngIf=\"data.contact_no\">: {{ data.country_calling_code }}{{ data.contact_no }}\r\n                                    </p>\r\n                                    <p *ngIf=\"!data.contact_no\">: Not Available</p>\r\n                                    <!-- <p *ngIf=\"data.website\">: {{ data.website }}</p> -->\r\n                                    <!-- <p *ngIf=\"!data.website\">: Null</p>\r\n                                    <p *ngIf=\"data.vat_no\">: {{ data.vat_no }}</p> -->\r\n                                    <!-- <p *ngIf=\"!data.vat_no\">: Null</p> -->\r\n                                    <p *ngIf=\"data.address\">: {{ data.address }}</p>\r\n                                    <p *ngIf=\"!data.address\">: Not Available</p>\r\n                                  </div>\r\n\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\" *ngIf=\"step==1\">\r\n                              <div class=\"col-6\">\r\n                                <h3><b> {{'trans.Personal_info' | translate}}</b></h3>\r\n                              </div>\r\n                              <div class=\"col-12 d-flex\">\r\n                                <form [formGroup]=\"userForm\" #userNgForm=\"ngForm\">\r\n                                  <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                      <div class=\"form-group\">\r\n                                        <label> {{'trans.Surname' | translate}}</label>\r\n                                        <input type=\"text\" class=\"form-control\" [formControlName]=\"'lname'\" required pattern=\"^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$\" title=\"Invalid Last Name\">\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                      <div class=\"form-group\">\r\n                                        <label> {{'trans.First_Name' | translate}}</label>\r\n                                        <input type=\"text\" class=\"form-control\" [formControlName]=\"'fname'\" required pattern=\"^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$\" title=\"Invalid First Name\">\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                      <div class=\"form-group\">\r\n                                        <label> {{'trans.Email' | translate}}</label>\r\n                                        <input type=\"text\" class=\"form-control\" [formControlName]=\"'email'\">\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                      <div class=\"form-group\">\r\n                                        <label> {{'trans.Phone' | translate}}</label><br>\r\n                                        <ngx-intl-tel-input [cssClass]=\"'custom'\"\r\n                                          [preferredCountries]=\"[CountryISO.UnitedStates, CountryISO.UnitedKingdom]\"\r\n                                          [enableAutoCountrySelect]=\"true\" [enablePlaceholder]=\"true\"\r\n                                          [searchCountryFlag]=\"true\"\r\n                                          [searchCountryField]=\"[SearchCountryField.Iso2, SearchCountryField.Name]\"\r\n                                          [selectedCountryISO]=\"CountryISO.UnitedKingdom\" [phoneValidation]=\"true\"\r\n                                          name=\"phone\" [formControlName]=\"'contact_no'\" required>\r\n                                        </ngx-intl-tel-input>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                      <div class=\"form-group\">\r\n                                        <label> {{'trans.Website' | translate}}</label>\r\n                                        <input type=\"text\" class=\"form-control\" [formControlName]=\"'website'\" pattern=\"^(http(s)?:\\/\\/)+[\\w\\-\\._~:\\/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$\" title=\"Invalid URL\" placeholder=\"https://example.com\">\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                      <div class=\"form-group\">\r\n                                        <label> {{'trans.VAT_Number' | translate}}</label>\r\n                                        <input type=\"text\" class=\"form-control\" [formControlName]=\"'vat_no'\">\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                      <div class=\"form-group\">\r\n                                        <label> {{'trans.Address' | translate}}</label>\r\n                                        <input type=\"text\" class=\"form-control\" [formControlName]=\"'address'\">\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"col-12\">\r\n                                      <button class=\"btn btn-danger mr-3\" (click)=\"update()\"> {{'trans.Update' | translate}} </button>\r\n                                      <button class=\"btn btn-default text-dark\" (click)=\"step=0\">  {{'trans.Cancel' | translate}}</button>\r\n                                    </div>\r\n                                  </div>\r\n                                </form>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"tab-pane\" id=\"link22\">\r\n                    <div class=\"card mt-0 col-lg-8 col-md-10\">\r\n                      <div class=\"card-body\">\r\n                        <div class=\"row\" >\r\n                          <div class=\"col-12\">\r\n                            <h3><b> {{'trans.Language_spoken' | translate}}</b></h3>\r\n                          </div>\r\n                          <div class=\"col-12\">\r\n                                 <div class=\"col-md-11 mx-md-3 mt-2\" *ngFor=\"let lang of languages1\"\r\n                                    style=\"border: 1px solid #e1e1e1;border-radius: 5px;padding: 5px;background: #fafafa;\">\r\n                                    <input type=\"radio\"  name=\"lang\" (click)=\"onLangChange(lang.lang)\"  class=\"mt-2\"> <span\r\n                                      class=\"ml-3\">{{lang.name}}</span>\r\n                                  </div>\r\n                            <!-- <select name='langChoose' #langChoose [(ngModel)]='currentLang' class=\"form-select-sm form-control\" (change)=\"onLangChange(langChoose.value)\">\r\n                              <option *ngFor=\"let lang of languages1\" value=\"{{lang.lang}}\">{{lang.name}}</option>\r\n                            </select> -->\r\n                          </div>\r\n                         \r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"tab-pane\" id=\"link2\">\r\n                    <div class=\"card mt-0 col-lg-10 col-md-10\">\r\n                      <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-12\">\r\n                                <h3><b> {{'trans.wallet' | translate}}</b></h3>\r\n                              </div>\r\n                              <div class=\"col-12 \">\r\n                                <button class=\"btn btn-default mr-3 text-dark\" id=\"subs\" (click)=\"subscrioption()\"> {{'trans.subscriptions' | translate}}</button>\r\n                                <button class=\"btn btn-danger text-dark\" id=\"payments\" (click)=\"payments()\"> {{'trans.payment_method' | translate}}</button>\r\n                              </div>\r\n                              <div class=\"col-12 mt-3\" *ngIf=\"subsstep==0\">\r\n                                <h4><b>{{'trans.select_payment_method' | translate}}</b></h4>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-11 mx-md-3\"\r\n                                    style=\"border: 1px solid #e1e1e1;border-radius: 5px;padding: 10px;background: #fafafa;\">\r\n                                    <input type=\"radio\" name=\"payment\" (click)=\"pstep=0\" class=\"mt-2\"><img class=\"ml-3\"\r\n                                      src=\"../assets/Icons/PNG/PayPal.png\">\r\n                                  </div>\r\n                                  <div class=\"col-md-11 mx-md-3 mt-2\"\r\n                                    style=\"border: 1px solid #e1e1e1;border-radius: 5px;padding: 10px;background: #fafafa;\">\r\n                                    <input type=\"radio\" name=\"payment\" (click)=\"pstep=1\" checked class=\"mt-2\"> <span\r\n                                      class=\"ml-3\">Stripe</span>\r\n                                  </div>\r\n                                </div>\r\n                                <hr class=\"mt-4\">\r\n                              </div>\r\n                              <div class=\"col-12 mt-3\" *ngIf=\"subsstep==1\">\r\n                                <h5><b> {{'trans.Current_subscriptions' | translate}}</b></h5>\r\n                                <div *ngIf=\"showSubscribeAlert\"\r\n                                style=\"background-color: #c3e6cb; border: 1px solid #d4edda; color: #155724\"\r\n                                class=\"alert alert-success\">{{ successMessage }}</div>\r\n                                <div *ngIf=\"showAlert\"\r\n                                style=\"background-color: #c3e6cb; border: 1px solid #d4edda; color: #a94442\"\r\n                                class=\"alert alert-success\">{{ errorMessage }}</div>\r\n                                <div class=\"card\" style=\"background:#fafafa;\" *ngIf=\"subscriptions\">\r\n                                  <div class=\"card-body\">\r\n                                    <h4><b>{{ subscriptions.plan.name }} ({{ subscriptions.plan.interval }})</b></h4>\r\n                                    <p>Next payment of ${{ subscriptions.plan.price }} (per {{\r\n                                      subscriptions.plan.interval }}) occurs on\r\n                                      {{ moment(subscriptions.end_at).format('MMM DD, YYYY') }}.</p>\r\n                                    <button class=\"btn btn-default px-2 py-2 text-dark\"\r\n                                      (click)=\"cancelSubscription(subscriptions.plan.id)\"> {{'trans.Cancel_subscription' | translate}}</button>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"card\" style=\"background:#fafafa;\" *ngIf=\"!subscriptions\">\r\n                                  <div class=\"card-body\">\r\n                                    <h4><b> {{'trans.Beginners' | translate}} (Free)</b></h4>\r\n                                    <p>\r\n                                      Use of the platform is free for beginners, but there are some restrictions.\r\n                                    </p>\r\n                                    <ul>\r\n                                      <li>A maximum of 1 offer at a time</li>\r\n                                      <li>A maximum of 5 offers per month (or year?)</li>\r\n                                      <li>Only one profile can be created</li>\r\n                                    </ul>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- <hr class=\"mt-4\" *ngIf=\"subsstep==0\"> -->\r\n                                <hr>\r\n                                <div class=\"card\" tyle=\"background:#fafafa;\" *ngIf=\"plans\">\r\n                                  <div class=\"card-body\" *ngFor=\"let plan of plans\">\r\n                                    <div class=\"card mt-0 mb-2\" style=\"background-color: #dfe4ea;\"\r\n                                      (click)=\"buyPlan(plan.id, plan.name, plan.price)\">\r\n                                      <div class=\"card-body\">\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-md-11\">\r\n                                            <div class=\"row\">\r\n                                              <div class=\"col-6 text-left\">\r\n                                                <h4 class=\"my-0 pt-0 text-black\">{{ plan.name }}</h4>\r\n                                              </div>\r\n                                              <div class=\"col-6 text-right\">\r\n                                                <h4 class=\"my-0 pt-0 text-danger\">${{ plan.price }}</h4>\r\n                                              </div>\r\n                                              <div class=\"col-6 text-left\">\r\n                                                <p class=\"mb-0\">{{ plan.description }}</p>\r\n                                                <small class=\"text-success\" *ngIf=\"subscriptions && (subscriptions.plan.name == plan.name)\">Activated</small>\r\n                                              </div>\r\n                                              <div class=\"col-6 text-right\">\r\n                                                <p class=\"mb-0\">{{ plan.interval }}</p>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"col-md-1\" style=\"align-self: center;\">\r\n                                            <i class=\"fa fa-chevron-right fa-2x\" aria-hidden=\"true\"></i>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-12\" *ngIf=\"pstep==0 && subsstep==0\">\r\n                                <div class=\"row\" *ngIf=\"paymentDetails\">\r\n                                  <div class=\"col-md-12\" *ngFor=\"let p of paymentDetails\">\r\n                                    <div class=\"row\" *ngIf=\"p.payment_method == 'paypal'\">\r\n                                      <div class=\"col-12\">\r\n                                        <h4><b> {{'trans.Paypal_information' | translate}}</b></h4>\r\n                                        <div class=\"form-group\">\r\n                                          <input type=\"text\" class=\"form-control p-4\" value=\"{{ p.email }}\" id=\"paypal-email\"/>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"col-md-12\">\r\n                                        <button class=\"btn btn-danger btn-block\" (click)=\"updatePayPal()\"> {{'trans.Update' | translate}}</button> <button *ngIf=\"p.email != null\" class=\"btn btn-warning btn-block\" (click)=\"deletePaymentMethod('paypal')\"> {{'trans.Delete' | translate}}</button>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-12\" *ngIf=\"pstep==1 && subsstep==0\">\r\n                                <div class=\"row\" *ngIf=\"paymentDetails\">\r\n                                  <div class=\"col-md-12\" *ngFor=\"let p of paymentDetails\">\r\n                                    <div class=\"row\" *ngIf=\"p.payment_method == 'stripe'\">\r\n                                      <div class=\"col-12\">\r\n                                        <h4><b> {{'trans.Card_information' | translate}}</b></h4>\r\n                                        <div class=\"form-group\">\r\n                                          <input type=\"text\" class=\"form-control p-4\" value=\"{{ p.card }}\" placeholder=\"Card Number\" id=\"stripe-card\"/>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"col-md-4\">\r\n                                        <div class=\"form-group\">\r\n                                          <input type=\"text\" class=\"form-control p-4\" placeholder=\"MM\" value=\"{{ p.exp_month }}\" id=\"stripe-month\"/>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"col-md-4\">\r\n                                        <div class=\"form-group\">\r\n                                          <input type=\"text\" class=\"form-control p-4\" placeholder=\"YYYY\" value=\"{{ p.exp_year }}\" id=\"stripe-year\"/>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"col-md-4\">\r\n                                        <div class=\"form-group\">\r\n                                          <input type=\"text\" class=\"form-control p-4\" placeholder=\"CVC\"  value=\"{{ p.cvc }}\" id=\"stripe-cvc\"/>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"col-md-12\">\r\n                                        <button class=\"btn btn-danger btn-block\" (click)=\"updateStripe()\"> {{'trans.Update' | translate}}</button> <button *ngIf=\"p.card != null\" class=\"btn btn-warning btn-block\" (click)=\"deletePaymentMethod('stripe')\"> {{'trans.Delete' | translate}}</button>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"tab-pane\" id=\"link3\">\r\n                    <div class=\"card mt-0 col-md-10 col-lg-8\">\r\n                      <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-12\">\r\n                                <h3><b> {{'trans.Change_Password' | translate}}</b></h3>\r\n                              </div>\r\n                              <div *ngIf=\"showPasswordAlert\"\r\n                                style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n                                class=\"alert alert-error\">{{ errorMessage }}</div>\r\n                              <div *ngIf=\"showSuccessAlert\"\r\n                                style=\"background-color: #c3e6cb; border: 1px solid #d4edda; color: #155724\"\r\n                                class=\"alert alert-success\">{{ successMessage }}</div>\r\n                              <div class=\"col-12\">\r\n                                <div class=\"form-group\">\r\n                                  <label> {{'trans.Current_password' | translate}}</label>\r\n                                  <input type=\"{{passtext}}\" class=\"form-control p-4\"\r\n                                    placeholder=\"Type Current password\" id=\"current_password\" />\r\n                                  <span toggle=\"#password-field\" class=\" field-icon toggle-password\"><a\r\n                                      href=\"javascript:void(0);\" class=\"text-dark p-md-2\"> <u (click)=\"show()\"\r\n                                        id=\"pshide\">Show</u></a> </span>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-12\">\r\n                                <div class=\"form-group\">\r\n                                  <label> {{'trans.New_password' | translate}}</label>\r\n                                  <input type=\"{{passtext11}}\" class=\"form-control p-4\" placeholder=\"Type New password\"\r\n                                    id=\"new_password\" />\r\n                                  <span toggle=\"#password-field\" class=\" field-icon toggle-password\"><a\r\n                                      href=\"javascript:void(0);\" class=\"text-dark p-md-2\"> <u (click)=\"show11()\"\r\n                                        id=\"pshide11\">Show</u></a> </span>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-12\">\r\n                                <div class=\"form-group\">\r\n                                  <label> {{'trans.Re_type_new_password' | translate}}</label>\r\n                                  <input type=\"{{passtext2}}\" class=\"form-control p-4\"\r\n                                    placeholder=\"Re-type new password\" id=\"confirm_password\" preventCutCopyPaste />\r\n                                  <span toggle=\"#password-field\" class=\" field-icon toggle-password\"><a\r\n                                      href=\"javascript:void(0);\" class=\"text-dark p-md-2\"> <u (click)=\"show2()\"\r\n                                        id=\"pshide2\">Show</u></a> </span>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class=\"col-12\">\r\n                                <button class=\"btn btn-danger mr-3\" (click)=\"updatePassword()\"> {{'trans.Update' | translate}}</button>\r\n                                <button class=\"btn btn-default text-dark\"\r\n                                  (click)=\"updatePasswordCancel()\">  {{'trans.Cancel' | translate}}</button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"tab-pane  \" id=\"link4\">\r\n                    <div class=\"card mt-0 col-md-10 col-lg-8\">\r\n                      <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-12\">\r\n                                <h3><b> {{'trans.Change_email' | translate}}</b></h3>\r\n                              </div>\r\n                              <div class=\"col-12\">\r\n                                <h5> {{'trans.Password_required' | translate}}</h5>\r\n                                <p>{{'trans.So_we_can_change_your_email' | translate}} <a href=\"#\" class=\"text-dark\"> {{'trans.Learn_more' | translate}}</a></p>\r\n                              </div>\r\n                              <div *ngIf=\"showCheckPasswordAlert\"\r\n                                style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n                                class=\"alert alert-error\">{{ errorMessage }}</div>\r\n                              <div class=\"col-12\">\r\n                                <div class=\"form-group\">\r\n                                  <label> {{'trans.Your_Password' | translate}}</label>\r\n                                  <input type=\"{{passtext1}}\" class=\"form-control p-4\" placeholder=\"Type Your password\"\r\n                                    id=\"validate_password\" />\r\n                                  <span toggle=\"#password-field\" class=\" field-icon toggle-password\"><a\r\n                                      href=\"javascript:void(0);\" class=\"text-dark\"> <u (click)=\"show1()\"\r\n                                        id=\"pshide1\">Show</u></a> </span>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-12\">\r\n                                <button class=\"btn btn-danger mr-3\" (click)=\"checkPassword()\"> {{'trans.Continue' | translate}}</button>\r\n                                <button class=\"btn btn-default text-dark\"\r\n                                  (click)=\"checkPasswordCancel()\"> {{'trans.Cancel' | translate}}</button>\r\n                                <p class=\"mt-4\"><a data-toggle=\"modal\" data-target=\"#forgot-password\"\r\n                                    data-backdrop=\"false\"><u> {{'trans.Forgot_password' | translate}}</u></a></p>\r\n                              </div>\r\n                              <div class=\"col-12\">\r\n                                <h5>{{'trans.Need_to_change_your_email_address' | translate}}</h5>\r\n                                <p>{{'trans.No_problem_type_a_new_one_above' | translate}}</p>\r\n                              </div>\r\n                              <div *ngIf=\"showEmailAlert\"\r\n                                style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n                                class=\"alert alert-error\">{{ errorMessage }}</div>\r\n                              <div *ngIf=\"showEmailSuccessAlert\"\r\n                                style=\"background-color: #c3e6cb; border: 1px solid #d4edda; color: #155724\"\r\n                                class=\"alert alert-success\">{{ successMessage }}</div>\r\n                              <div class=\"col-12\">\r\n                                <div class=\"form-group\">\r\n                                  <label> {{'trans.New_Email' | translate}}</label>\r\n                                  <input type=\"email\" class=\"form-control p-4\" placeholder=\"Type Your Email\"\r\n                                    id=\"new_email\" disabled />\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-12\">\r\n                                <div class=\"form-group\">\r\n                                  <label>{{'trans.Re_Type_email' | translate}}</label>\r\n                                  <input type=\"email\" class=\"form-control p-4\" placeholder=\"Re-Type Your Email\"\r\n                                    id=\"confirm_email\" disabled />\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-12\">\r\n                                <button class=\"btn btn-danger mr-3\" (click)=\"updateEmail()\">{{'trans.Save_changes' | translate}}</button>\r\n                                <button class=\"btn btn-default text-dark\" (click)=\"updateEmailCancel()\"> {{'trans.Cancel' | translate}}</button>\r\n                              </div>\r\n                              <div class=\"col-12\"></div>\r\n                              <div class=\"col-12\" id=\"otpSection\" hidden>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-12\">\r\n                                    <h5>Verify OTP</h5>\r\n                                    <p>OTP code has been sent to your email. Please verify to update Email.</p>\r\n                                  </div>\r\n                                  <div *ngIf=\"showOTPAlert\"\r\n                                    style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n                                    class=\"alert alert-error\">{{ errorMessage }}</div>\r\n                                  <div class=\"col-12\">\r\n                                    <div class=\"form-group\">\r\n                                      <label>Enter Code</label>\r\n                                      <input type=\"number\" class=\"form-control p-4\" placeholder=\"OTP Code\" id=\"otp\" />\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-12\">\r\n                                    <button class=\"btn btn-danger mr-3\" (click)=\"updateOTP()\">  {{'trans.Verify' | translate}}</button>\r\n                                    <button class=\"btn btn-default text-dark\"\r\n                                      (click)=\"updateOTPCancel()\"> {{'trans.Cancel' | translate}}</button>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"tab-pane\" id=\"link5\">\r\n                    <div class=\"card mt-0\">\r\n                      <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <h3> {{'trans.Give_us_feedback' | translate}}</h3>\r\n                            </div>\r\n                            <div *ngIf=\"showFeedbackErrorAlert\" style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n                              class=\"alert alert-error\">{{ errorMessage }}</div>\r\n                            <div *ngIf=\"showFeedbackSuccessAlert\"\r\n                              style=\"background-color: #c3e6cb; border: 1px solid #d4edda; color: #155724\"\r\n                              class=\"alert alert-success\">{{ successMessage }}</div>\r\n                            <div class=\"col-12 form-group\">\r\n                              <label> {{'trans.Subject' | translate}}</label>\r\n                              <input type=\"text\" class=\"form-control\" id=\"feedback_subject\">\r\n                            </div>\r\n                            <div class=\"col-12 form-group\">\r\n                              <label> {{'trans.Message' | translate}}</label>\r\n                              <textarea class=\"form-control\" id=\"feedback_message\" row=\"4\"></textarea>\r\n                            </div>\r\n                            <div class=\"col-12 form-group\">\r\n                              <button type=\"button\" class=\"btn btn-danger\" (click)=\"giveFeedback()\"> {{'trans.Submit' | translate}}</button>\r\n                            </div>\r\n                          </div>\r\n                      </div>\r\n                    </div>\r\n                  </div> \r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal fade bd-example-modal-lg\" id=\"forgot-password\" tabindex=\"-1\" role=\"dialog\"\r\n      aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title text-left\" id=\"exampleModalLabel\"> {{'trans.Forgot_password' | translate}}</h5>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <form [formGroup]=\"verifyEmailForm\" #verifyEmailNgForm=\"ngForm\" id=\"vEmail\">\r\n            <div class=\"modal-body\">\r\n              <hr>\r\n              <div *ngIf=\"showAlert\" style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n                class=\"alert alert-error\">{{ errorMessage }}</div>\r\n              <div class=\"form-group\">\r\n                <label>Email</label>\r\n                <input type=\"email\" class=\"form-control\" [formControlName]=\"'email'\" required>\r\n              </div>\r\n              <hr>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"verifyEmail()\"> {{'trans.Submit' | translate}}</button>\r\n              &nbsp; &nbsp;\r\n              <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\" style=\"color: black;\">Close</button>\r\n            </div>\r\n          </form>\r\n          <form [formGroup]=\"verifyForgotPasswordOtpForm\" #verifyForgotPasswordOtpNgForm=\"ngForm\"\r\n            id=\"vForgotPasswordOtp\" hidden>\r\n            <div class=\"modal-body\">\r\n              <hr>\r\n              <div *ngIf=\"showAlert\" style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n                class=\"alert alert-error\">{{ errorMessage }}</div>\r\n              <div class=\"form-group\">\r\n                <label>OTP</label>\r\n                <input type=\"number\" class=\"form-control\" [formControlName]=\"'otp'\" required>\r\n              </div>\r\n              <hr>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"verifyForgoPasswordOtp()\"> {{'trans.Submit' | translate}}</button>\r\n              &nbsp; &nbsp;\r\n              <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\" style=\"color: black;\">Close</button>\r\n            </div>\r\n          </form>\r\n          <form [formGroup]=\"updatePasswordForm\" #updatePasswordNgForm=\"ngForm\" id=\"uPassword\" hidden>\r\n            <div class=\"modal-body\">\r\n              <hr>\r\n              <div *ngIf=\"showAlert\" style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n                class=\"alert alert-error\">{{ errorMessage }}</div>\r\n              <div class=\"form-group\">\r\n                <label> {{'trans.Password' | translate}}</label>\r\n                <input type=\"password\" class=\"form-control\" [formControlName]=\"'password'\" required>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label> {{'trans.Confirm_password' | translate}}</label>\r\n                <input type=\"password\" class=\"form-control\" [formControlName]=\"'confirm_password'\" required>\r\n              </div>\r\n              <hr>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"updatePasswordOtp()\"> {{'trans.Submit' | translate}}</button>\r\n              &nbsp; &nbsp;\r\n              <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\" style=\"color: black;\">Close</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal fade bd-example-modal-lg\" id=\"hostplan\" tabindex=\"-1\" role=\"dialog\"\r\n      aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title text-left\" id=\"exampleModalLabel\"> {{'trans.Payment' | translate}}</h5>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <form [formGroup]=\"planForm\" #planNgForm=\"ngForm\">\r\n            <div class=\"modal-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-2 text-right\">\r\n                  <input type=\"radio\" id=\"stripe\" name=\"payment_method\" value=\"Stripe\" (click)=\"showPaymentSection()\">\r\n                </div>\r\n                <div class=\"col-md-4 text-left\">\r\n                  <!-- <label for=\"stripe\">Stripe </label> -->\r\n                  <label> <img  src=\"../assets/Icons/PNG/stripe.png\"></label>\r\n\r\n                </div>\r\n                <div class=\"col-md-2 text-right\">\r\n                  <input type=\"radio\" id=\"paypal\" name=\"payment_method\" value=\"PayPal\" (click)=\"showPaymentSection()\">\r\n                </div>\r\n                <div class=\"col-md-4 text-left\">\r\n                  <label for=\"paypal\">\r\n                     <img  src=\"../assets/Icons/PNG/PayPal.png\"></label>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n              <div *ngIf=\"showAlert\" style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n                class=\"alert alert-error\">{{ errorMessage }}</div>\r\n              <div class=\"row\" id=\"stripeSection\" hidden>\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"form-group\">\r\n                    <label>Card Number</label>\r\n                    <input type=\"number\" class=\"form-control\" [formControlName]=\"'number'\" required max=\"16\" min=\"16\"\r\n                      placeholder=\"Card Number\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Expiry Month</label>\r\n                    <input type=\"number\" class=\"form-control\" [formControlName]=\"'month'\" required max=\"2\" min=\"2\"\r\n                      placeholder=\"MM\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Expiry Year</label>\r\n                    <input type=\"number\" class=\"form-control\" [formControlName]=\"'year'\" required max=\"4\" min=\"4\"\r\n                      placeholder=\"YYYY\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>{{'trans.CVV' | translate}}</label>\r\n                    <input type=\"number\" class=\"form-control\" [formControlName]=\"'cvc'\" required max=\"3\" min=\"3\"\r\n                      placeholder=\"CVC\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\" id=\"paypalSection\" hidden>\r\n                <div class=\"col-md-12 text-center\" id=\"clickPayPal\" hidden>\r\n                  <h5>Click on <a href=\"\" id=\"paypalLink\" target=\"_blank\">PayPal</a></h5>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-danger\" id=\"submitPlan\" (click)=\"subscribePlan()\"\r\n                hidden>Submit</button>\r\n              &nbsp; &nbsp;\r\n              <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\" style=\"color: black;\">Close</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <app-footerhostportal-web></app-footerhostportal-web>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 93289:
/*!******************************************************************************!*\
  !*** ./src/app/Host/disputeDetails/disputedetails.component.html?ngResource ***!
  \******************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<div class=\"wrapper wrapper-full-page\">\r\n    <div class=\"page-header lock-page header-filter\" filter-color=\"black\"\r\n        style=\"background-color:#fafafa; background-size: cover; background-position: top center;\">\r\n        <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\r\n        <div class=\"container\">\r\n            <div class=\"row justify-content-center\" style=\"margin-top: 8vh;\">\r\n                <div class=\"col-md-8\">\r\n                    <h3><b><a href=\"#/hostportal/bookinglist\" class=\"text-dark\"><i class=\"fa fa-arrow-left mr-2\"></i>\r\n                            </a> {{'trans.Booked_List' | translate}}</b></h3>\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row\" *ngIf=\"details\">\r\n                                <div class=\"col-10\">\r\n                                    <h3 class=\"mb-0 mt-0\"><b>{{ details.booking_details.fname }} {{ details.booking_details.lname }}</b></h3>\r\n                                    <p class=\"text-danger\">{{ details.title }}</p>\r\n                                </div>\r\n                                <div class=\"col-2 text-right\">\r\n                                    <img class=\"img-fluid rounded \" src=\"./assets/Icons/PNG/More.png\">\r\n\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                    <h4 class=\"text-success\"><b> {{'trans.Dispute' | translate}}</b></h4>\r\n                                    <h3 class=\"mb-0 mt-0\"><b> {{'trans.Booking_info' | translate}}</b></h3>\r\n                                    <p>{{ details.offer.description }} “<span class=\"text-danger\">{{ details.booking_details.email\r\n                                            }}</span> ” </p>\r\n                                    <p><span class=\"text-info\"> {{'trans.Book_number' | translate}}: </span> <span>{{ details.booking_details.confirmation_number\r\n                                            }}</span></p>\r\n                                    <hr>\r\n                                </div>\r\n\r\n                                <div class=\"col-12 d-flex\">\r\n                                    <div>\r\n                                        <img class=\"img-fluid rounded mr-3\" src=\"./assets/Icons/PNG/Calender Black.png\">\r\n                                    </div>\r\n                                    <div>\r\n                                        <p class=\"mb-0\" hidden>Sat, May 15, 2021 - Mon, May 17, 2021 </p>\r\n                                        <p class=\"mb-0\">Check-in: {{moment(details.booking_details.from).format('ddd')}},\r\n                                            {{moment(details.booking_details.from).format('MMM Do, YYYY')}}</p>\r\n                                        <p class=\"mb-0\">Check-out: {{moment(details.booking_details.to).format('ddd')}},\r\n                                            {{moment(details.booking_details.to).format('MMM Do, YYYY')}} </p>\r\n                                    </div>\r\n                                    <hr>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                    <hr>\r\n                                </div>\r\n\r\n                                <div class=\"col-12 d-flex\">\r\n                                    <div>\r\n                                        <img class=\"img-fluid rounded mr-3\" src=\"./assets/Icons/PNG/Guests.png\">\r\n                                    </div>\r\n                                    <div>\r\n                                        <h4 class=\"mb-0\"> <b> {{'trans.Guests' | translate}}</b> </h4>\r\n                                        <p class=\"mb-0\">{{ details.offer.guests }}</p>\r\n                                        <p class=\"mb-0\" hidden>Adults: 02</p>\r\n                                        <p class=\"mb-0\" hidden>Children: 01 (Child 1: 10 years old)</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                    <hr>\r\n                                </div>\r\n\r\n                                <div class=\"col-12 d-flex\">\r\n                                    <div>\r\n                                        <img class=\"img-fluid rounded mr-3\" src=\"./assets/Icons/PNG/Offer policies.png\">\r\n                                    </div>\r\n                                    <div>\r\n                                        <h4 class=\"mb-0\"> <b> {{'trans.Offer_policies' | translate}}</b> </h4>\r\n                                        <a class=\"mb-0 text-danger\" data-toggle=\"modal\" data-target=\"#terms\"> <u>\r\n                                            {{'trans.View_all_policies' | translate}}   </u></a>\r\n                                    </div>\r\n                                    <hr>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                    <hr>\r\n                                </div>\r\n\r\n                                <div class=\"col-12 d-flex\">\r\n                                    <div>\r\n                                        <img class=\"img-fluid rounded mr-3\"\r\n                                            src=\"./assets/Icons/PNG/Contact the offer.png\">\r\n                                    </div>\r\n                                    <div>\r\n                                        <h4 class=\"mb-0\"> <b> {{'trans.Contact_the_offer' | translate}} </b> </h4>\r\n                                        <p class=\"mb-0\">\r\n                                            {{'trans.Discusse_changes_to_your_booking' | translate}}\r\n                                        </p>\r\n                                        <div class=\"d-flex\">\r\n                                            <div>\r\n                                                <img class=\"img-fluid rounded mr-3\"\r\n                                                    src=\"./assets/Icons/PNG/Language_Normal.png\">\r\n                                            </div>\r\n                                            <div>\r\n                                                <h4 class=\"mb-0\"><b>{{'trans.Message_offer' | translate}} </b></h4>\r\n                                                <p class=\"text-danger\">{{'trans.Contact_number' | translate}} </p>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"d-flex\">\r\n                                            <div>\r\n                                                <img class=\"img-fluid rounded mr-3\"\r\n                                                    src=\"./assets/Icons/PNG/Contact number.png\">\r\n                                            </div>\r\n                                            <div>\r\n                                                <h4 class=\"mb-0\"><b>  {{'trans.Contact_number' | translate}} </b></h4>\r\n                                                <p class=\"text-danger\">{{ details.booking_details.contact_no }}</p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <hr>\r\n                                </div>\r\n                                <div class=\"col-12\">\r\n                                    <div class=\"card\" style=\"background: #f0f0f0;\">\r\n                                        <div class=\"card-body\">\r\n                                            <h4> {{'trans.Total_price_for' | translate}} <span *ngIf=\"details.offer.rooms != 0\"><span *ngIf=\"details.offer.rooms == 1\">{{ details.offer.rooms }} room</span><span *ngIf=\"details.offer.rooms > 1\">{{ details.offer.rooms }} rooms</span></span></h4>\r\n                                            <!-- <p class=\"ml-4\">\r\n                                                Rooms: <b>{{ details.ad.rooms }}</b> <br>\r\n                                                Bathrooms: <b>{{ details.ad.bathrooms }}</b> <br>\r\n                                                Single Bed: <b>{{ details.ad.single_bed }}</b> <br>\r\n                                                Double Bed: <b>{{ details.ad.double_bed }}</b> <br>\r\n                                                Large Bed: <b>{{ details.ad.large_bed }}</b> <br>\r\n                                                Extra Large Bed: <b>{{ details.ad.extra_large_bed }}</b>\r\n                                            </p> -->\r\n                                            <h3 class=\"mb-0\"><b> <del class=\"text-danger\">{{ details.offer.currency }}{{ details.booking_details.total_price\r\n                                                        }}</del> {{ details.offer.currency }}{{ details.booking_details.net_price }}</b></h3>\r\n                                            <p hidden>+$9  {{'trans.taxes_and_charges' | translate}} </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-6 text-left\">\r\n                                    <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#exampleModal\">{{'trans.View_facilites' | translate}}</a>\r\n                                </div>\r\n                                <div class=\"col-6 text-right\">\r\n                                    <button class=\"btn btn-danger btn-round btn-block py-3\" (click)=\"withdraw()\" *ngIf=\"details.user_id == userData.id\"> {{'trans.Withraw_Request' | translate}}</button>\r\n                                    <button class=\"btn btn-danger btn-round btn-block py-3\" (click)=\"accept()\" *ngIf=\"details.user_id != userData.id\"> {{'trans.Accept_Request' | translate}}</button>\r\n                                </div>\r\n                                <!-- <div hidden class=\"col-6 text-right\" *ngIf=\"details.status==0\">\r\n                                    <a class=\"text-danger\">Completed</a> &nbsp;\r\n                                    <a class=\"text-danger\">Cancelled</a>\r\n                                </div> -->\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n            aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <h5 class=\"modal-title\" id=\"exampleModalLabel\"> {{'trans.Facilities' | translate}}</h5>\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"modal-body\" *ngIf=\"details\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12 d-flex\" *ngFor=\"let features of details.offer.features\">\r\n                                <div class=\"mr-4\"><img\r\n                                        src=\"http://oneroom3.crosip.com/{{ features.feature.icon }}\" /></div>\r\n                                <div class=\"ml-4\">\r\n                                    <h4><b>{{features.feature.name}}</b></h4>\r\n                                    <p>{{features.feature.description}}</p>\r\n                                    <hr>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\"> {{'trans.Close' | translate}}</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal fade bd-example-modal-lg\" id=\"terms\" tabindex=\"-1\" role=\"dialog\"\r\n            aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-lg\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <h5 class=\"modal-title text-left\" id=\"exampleModalLabel\"> {{'trans.Booking_conditions' | translate}}</h5>\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"modal-body\" *ngIf=\"details\">\r\n                        <hr>\r\n                        {{ details.offer.terms_policies }}\r\n                        <hr>\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">{{'trans.Close' | translate}}</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <app-footerhostportal-web></app-footerhostportal-web>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 17989:
/*!**************************************************************************!*\
  !*** ./src/app/Host/offerdetails/offerdetails.component.html?ngResource ***!
  \**************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<style>\r\n  .matexpension {\r\n    border-bottom: 1px solid #e5e5e5;\r\n    box-shadow: none !important\r\n  }\r\n\r\n  .expressiontitle {\r\n    font-size: 20px;\r\n    font-family: 'ABeeZee';\r\n    line-height: 26px;\r\n    font-weight: 400;\r\n    color: #1D3557;\r\n  }\r\n\r\n  .expansiondescription {\r\n    font-size: 15px;\r\n    font-family: 'ABeeZee';\r\n    line-height: 24px;\r\n    font-weight: 400;\r\n    color: #1D3557;\r\n  }\r\n\r\n  .roundedimage {\r\n    background: linear-gradient(344.79deg, #ee933857 19.36%, #ee93386b 88.02%);\r\n    border-radius: 50% !important;\r\n  }\r\n\r\n  agm-map {\r\n    height: 300px !important;\r\n    width: 100%;\r\n    /* This is really important*/\r\n  }\r\n\r\n  .limitTextHeight {\r\n    height: 100px;\r\n    overflow: hidden;\r\n  }\r\n</style>\r\n\r\n<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header lock-page header-filter\" filter-color=\"black\"\r\n    style=\"background-color:#fafafa; background-size: cover; background-position: top center;\">\r\n    <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\r\n    <div class=\"container\">\r\n      <div class=\"row  justify-content-left\" style=\"margin-top: 14vh;\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"row\" *ngIf=\"details\">\r\n            <div class=\"col-md-6 pr-md-0\">\r\n              <img class=\"img-fluid rounded mt-1 w-100\" src=\"http://oneroom3.crosip.com/{{fullpath}}\" id=\"fullimage\">\r\n            </div>\r\n            <div class=\"col-md-6 pl-md-2\">\r\n              <div class=\"row\">\r\n                <div class=\"col-6 pr-md-1\" *ngFor=\"let itm of details.attachments; let i=index\">\r\n                  <img class=\"img-fluid rounded mt-1\" *ngIf=\"i<takeimg\" style=\"cursor: pointer;\"\r\n                    src=\"http://oneroom3.crosip.com/{{itm.path}}\" (click)=\"fullpath=itm.path\">\r\n                </div>\r\n\r\n                <div class=\"col-12 text-right\">\r\n                  <button class=\"btn btn-defualt text-dark btn-round py-1 px-2 mr-md-2\" (click)=\"takeimg==details.attachments.length\" style=\"margin-top: -50px;\">\r\n                    {{'trans.Show_All_Photos' | translate}} </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row justify-content-left\">\r\n        <div class=\"col-md-8 \">\r\n          <div class=\"row\" *ngIf=\"details\">\r\n            <div class=\"col-12\">\r\n              <h3><b>{{ details.title }}</b></h3>\r\n            </div>\r\n            <div class=\"col-12\">\r\n              <p>{{ details.city }}</p>\r\n              <hr>\r\n            </div>\r\n            <div class=\"col-12 d-flex\">\r\n              <div>\r\n                <span *ngIf=\"details.type == 'house'\"><img src=\"../assets/Icons/PNG/House_normal.png\"></span>\r\n                <span *ngIf=\"details.type == 'apartment'\"><img src=\"../assets/Icons/PNG/Apartment_Normal.png\"\r\n                    class=\"mr-4\"></span>\r\n                <span *ngIf=\"details.type == 'hotel'\"><img src=\"../assets/Icons/PNG/Hotel_room_Normal.png\"></span>\r\n              </div>\r\n              <div>\r\n                <h4 class=\"ml-4\"><b>{{ details.type }}</b></h4>\r\n                <p class=\"ml-4\">\r\n                  {{ details.description }}\r\n                </p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12\">\r\n              <hr>\r\n              <h3><b>  {{'trans.Equipment_features' | translate}}</b></h3>\r\n            </div>\r\n            <div class=\"col-12\" [ngClass]=\"{'limitTextHeight': isReadMore}\">\r\n              <div class=\"row\">\r\n                <div class=\"col-12 d-flex\" *ngFor=\"let features of details.features\">\r\n                  <div class=\"mr-4\"><img src=\"http://oneroom3.crosip.com/{{ features.feature.icon }}\" width=\"64\" />\r\n                  </div>\r\n                  <div class=\"ml-4\">\r\n                    <h4><b>{{features.feature.name}}</b></h4>\r\n                    <p>{{features.feature.description}}</p>\r\n                    <hr>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12\">\r\n              <button class=\"btn btn-outline-defualt rounded \"\r\n                style=\"color: black;border-radius: 10px;border: 1px solid #e1e1e1; background: transparent;\"\r\n                (click)=\"showText()\">\r\n                {{ isReadMore ? 'See More': 'See Less' }}\r\n              </button>\r\n              <hr>\r\n            </div>\r\n            <div class=\"col-12\">\r\n              <h3><b> {{'trans.Description' | translate}}</b></h3>\r\n              <p>\r\n                {{ details.description }}\r\n              </p>\r\n              <a hidden><u> {{'trans.Show_More' | translate}}</u></a>\r\n\r\n              <hr>\r\n            </div>\r\n            <div class=\"col-12\">\r\n              <h3><b>  {{'trans.Terms_Policies' | translate}}</b></h3>\r\n              <!-- <p [ngClass]=\"{'show-less': showShortDesciption}\" style=\"overflow-wrap: break-word;\">\r\n                \r\n                jskaaaaaaa aaa a aaaaaaaa aaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaa aaaaaaaaaaaa aaaaaaaaaa a   aaaaaaaaaaaaaaaaaa aaaaaaaaaa \r\n                aaaaaaaa aaaaaaaa aaaaaaaaaa aaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaa aaaaaaaa aaaaf\r\n            </p> -->\r\n              <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#terms\" data-backdrop=\"false\"><u> {{'trans.View_all_policies' | translate}}</u></a>\r\n\r\n              <!-- <a  (click)=\"alterDescriptionText()\">\r\n                {{ showShortDesciption ? 'SHOW ALL': 'SHOW LESS' }}</a>\r\n\r\n            </div> -->\r\n              <div class=\"col-12\">\r\n                <h3><b> {{'trans.Address_with_Map' | translate}}</b></h3>\r\n                <div class=\"card card-body\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-12\" *ngIf=\"details.lat && details.lan\">\r\n                      <agm-map [latitude]=\"details.lat\" [longitude]=\"details.lan\">\r\n                        <agm-marker [latitude]=\"details.lat\" [longitude]=\"details.lan\"></agm-marker>\r\n                      </agm-map>\r\n                    </div>\r\n                    <div class=\"col-md-12\" *ngIf=\"!details.lat && !details.lan\">\r\n                      <span>No Coordinates Found</span>\r\n                    </div>\r\n                  </div>\r\n                  <br>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                      <i class=\"fa fa-map-marker fa-lg\" aria-hidden=\"true\" style=\"color: #203a60\"></i> &nbsp; <span\r\n                        *ngIf=\"details.address\"><a target=\"_blank\"\r\n                          href=\"https://www.google.com/maps/search/?api=1&query={{details.lat}},{{details.lan}}\">{{\r\n                          details.address }}</a></span><span *ngIf=\"!details.address\">Not\r\n                        Available</span>\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                      <br>\r\n                      <i class=\"fa fa-globe fa-lg\" aria-hidden=\"true\" style=\"color: #203a60\"></i> &nbsp; <span\r\n                        *ngIf=\"details.city\">{{ details.city }}</span><span *ngIf=\"!details.city\">Not Available</span>\r\n                    </div>\r\n                  </div>\r\n                  <br>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row \" *ngIf=\"details\">\r\n                <div class=\"col-12\">\r\n                  <h4><b> {{'trans.Booking_info' | translate}}</b></h4>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-6\" style=\"border: 1px solid #e1e1e1;border-radius: 33px 0px 0px 33px;\">\r\n                      <p class=\"mb-0 \"><span style=\"color: #728aad;\">Check-in</span><br>\r\n                        {{moment(details.start_from).format('ddd')}}, {{moment(details.start_from).format('MMM Do,\r\n                        YYYY')}}</p>\r\n                    </div>\r\n                    <div class=\"col-6\" style=\"border: 1px solid #e1e1e1;border-radius: 0px 33px 33px 0px;\">\r\n                      <p class=\"mb-0 \"><span style=\"color: #728aad;\">Check-out</span><br>\r\n                        {{moment(details.end_to).format('ddd')}}, {{moment(details.end_to).format('MMM Do, YYYY')}}\r\n                      </p>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-12 mt-2\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-12\" style=\"border: 1px solid #e1e1e1;border-radius: 33px\">\r\n                      <p class=\"mb-0 \"><span style=\"color: #728aad;\"> {{'trans.Guests' | translate}}</span> <br>\r\n                        <b> {{ details.guests }} People {{'trans.Booking_info' | translate}}\r\n                          <!--2 adults - No children-->\r\n                        </b>\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-12 mt-2 \">\r\n                  <div class=\"row\">\r\n                    <button class=\"btn btn-danger btn-round btn-block py-3\" *ngIf=\"details.status == 1\"\r\n                      (click)=\"editOffer(details.id)\"> {{'trans.Edit' | translate}}</button>\r\n                    <button class=\"btn btn-danger btn-round btn-block py-3\" *ngIf=\"details.status == 0\"\r\n                      (click)=\"listedOffer(details.id)\"> {{'trans.Listed' | translate}}</button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-12 mt-2\">\r\n                  <div class=\"row \">\r\n                    <div class=\"col-12\">\r\n                      <p class=\"mb-1 \" style=\"color: black;\">\r\n                        <b>  {{'trans.Price_for' | translate}}\r\n                          <span *ngIf=\"details.rooms != 0\"><span *ngIf=\"details.rooms == 1\">{{ details.rooms }}\r\n                            {{'trans.Room' | translate}}  </span><span *ngIf=\"details.rooms > 1\">{{ details.rooms }} {{'trans.Room' | translate}} </span></span>\r\n                        </b>\r\n                      </p>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                      <p class=\"mb-0 \" style=\"color: #728aad;\"> {{'trans.Price' | translate}}</p>\r\n                    </div>\r\n                    <div class=\"col-6 text-right\">\r\n                      <p class=\"mb-0 \" style=\"color: black;\">\r\n                        <b>{{ details.currency }}{{ details.price }}</b>\r\n                      </p>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                      <p class=\"mb-0 \" style=\"color: #728aad;\">\r\n\r\n                         {{'trans.Discount' | translate}} ({{ details.discount_of_percentage }}%)</p>\r\n                    </div>\r\n                    <div class=\"col-6 text-right\">\r\n                      <p class=\"mb-0 \" style=\"color: red;\">\r\n                        <b>-{{ details.currency }}{{ details.discountPrice.toFixed(2) }}</b>\r\n                      </p>\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                      <hr>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                      <p class=\"mb-0 \">\r\n                        <b> {{'trans.Total' | translate}}</b>\r\n                      </p>\r\n                    </div>\r\n                    <div class=\"col-6 text-right\">\r\n                      <p class=\"mb-0 \" style=\"color: #728aad;\">\r\n                        <b>{{ details.currency }}{{ details.totalPrice }}</b>\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal fade bd-example-modal-lg\" id=\"terms\" tabindex=\"-1\" role=\"dialog\"\r\n        aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-lg\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h5 class=\"modal-title text-left\" id=\"exampleModalLabel\"> {{'trans.Booking_conditions' | translate}}</h5>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\" *ngIf=\"details\">\r\n              <hr>\r\n              {{ details.terms_policies }}\r\n              <hr>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <app-footerhostportal-web></app-footerhostportal-web>\r\n\r\n    </div>\r\n\r\n\r\n  </div>";

/***/ })

}]);
//# sourceMappingURL=src_app_Host_Hostportal_module_ts.js.map