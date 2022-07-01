"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["common"],{

/***/ 63502:
/*!****************************************************!*\
  !*** ./node_modules/google-maps/lib/esm/loader.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loader": function() { return /* binding */ Loader; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);


var Loader = /*#__PURE__*/function () {
  function Loader() {
    var apiKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Loader);

    this.apiKey = apiKey;
    this.options = options;

    if (typeof window === 'undefined') {
      throw new Error('google-maps is supported only in browser environment');
    }
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Loader, [{
    key: "load",
    value: function load() {
      var _this = this;

      if (typeof this.api !== 'undefined') {
        return Promise.resolve(this.api);
      }

      if (typeof this.loader !== 'undefined') {
        return this.loader;
      }

      window[Loader.CALLBACK_NAME] = function () {
        _this.api = window['google'];

        if (typeof _this.resolve === 'undefined') {
          throw new Error('Should not happen');
        }

        _this.resolve(_this.api);
      };

      window['gm_authFailure'] = function () {
        if (typeof _this.reject === 'undefined') {
          throw new Error('Should not happen');
        }

        _this.reject(new Error('google-maps: authentication error'));
      };

      return this.loader = new Promise(function (resolve, reject) {
        _this.resolve = resolve;
        _this.reject = reject;
        var script = document.createElement('script');
        script.src = _this.createUrl();
        script.async = true;

        script.onerror = function (e) {
          return reject(e);
        };

        document.head.appendChild(script);
      });
    }
  }, {
    key: "createUrl",
    value: function createUrl() {
      var parameters = ["callback=".concat(Loader.CALLBACK_NAME)];

      if (this.apiKey) {
        parameters.push("key=".concat(this.apiKey));
      }

      for (var name in this.options) {
        if (this.options.hasOwnProperty(name)) {
          var value = this.options[name];

          if (name === 'version') {
            name = 'v';
          }

          if (name === 'libraries') {
            value = value.join(',');
          }

          parameters.push("".concat(name, "=").concat(value));
        }
      }

      return "https://maps.googleapis.com/maps/api/js?".concat(parameters.join('&'));
    }
  }]);

  return Loader;
}();
Loader.CALLBACK_NAME = '_dk_google_maps_loader_cb';

/***/ })

}]);
//# sourceMappingURL=common.js.map