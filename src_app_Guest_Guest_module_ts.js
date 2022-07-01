"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["src_app_Guest_Guest_module_ts"],{

/***/ 29403:
/*!**********************************************************************!*\
  !*** ./src/app/Admin/layouts/guest-footer/guest_footer.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Guest_footerComponent": function() { return /* binding */ Guest_footerComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _guest_footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guest_footer.component.html?ngResource */ 71155);
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




var Guest_footerComponent = /*#__PURE__*/function () {
  function Guest_footerComponent() {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Guest_footerComponent);

    this.test = new Date();
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Guest_footerComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return Guest_footerComponent;
}();

Guest_footerComponent.ctorParameters = function () {
  return [];
};

Guest_footerComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-guest_footer-web',
  template: _guest_footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], Guest_footerComponent);


/***/ }),

/***/ 76997:
/*!**************************************************************!*\
  !*** ./src/app/Guest/Discovernear/Discovernear.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscovernearComponent": function() { return /* binding */ DiscovernearComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _Discovernear_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Discovernear.component.html?ngResource */ 29650);
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






var DiscovernearComponent = /*#__PURE__*/function () {
  function DiscovernearComponent(router, cdf, dataService) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DiscovernearComponent);

    this.router = router;
    this.cdf = cdf;
    this.dataService = dataService;
    this.test = new Date();
    this.step = 0;
    this.user = null;
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DiscovernearComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      if (localStorage.getItem("token") != null) {
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
      setTimeout(function () {// after 1000 ms we add the class animated to the login/register card
        // card.classList.remove('card-hidden');
      }, 700);
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('lock-page');
      body.classList.remove('off-canvas-sidebar');
    }
  }]);

  return DiscovernearComponent;
}();

DiscovernearComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef
  }, {
    type: src_app_services_data_services__WEBPACK_IMPORTED_MODULE_3__.DataService
  }];
};

DiscovernearComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-Discovernear-cmp',
  template: _Discovernear_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], DiscovernearComponent);


/***/ }),

/***/ 49778:
/*!***************************************!*\
  !*** ./src/app/Guest/Guest.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GuestModule": function() { return /* binding */ GuestModule; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.module */ 36747);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _Guest_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Guest.routing */ 20563);
/* harmony import */ var _Home_Home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Home/Home.component */ 46000);
/* harmony import */ var _Admin_layouts_guest_footer_guest_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Admin/layouts/guest-footer/guest_footer.component */ 29403);
/* harmony import */ var _Searchresult_Searchresult_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Searchresult/Searchresult.component */ 72305);
/* harmony import */ var _Discovernear_Discovernear_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Discovernear/Discovernear.component */ 76997);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @agm/core */ 61466);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 5721);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var GuestModule = /*#__PURE__*/(0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function GuestModule() {
  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, GuestModule);
});

GuestModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(_Guest_routing__WEBPACK_IMPORTED_MODULE_3__.GuestRoutes), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _app_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _agm_core__WEBPACK_IMPORTED_MODULE_12__.AgmCoreModule.forRoot({
    apiKey: 'AIzaSyA8S1HrLRkdH_tZAUFuIU9Fu4lDJac757s'
  }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule],
  declarations: [_Home_Home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent, _Admin_layouts_guest_footer_guest_footer_component__WEBPACK_IMPORTED_MODULE_5__.Guest_footerComponent, _Discovernear_Discovernear_component__WEBPACK_IMPORTED_MODULE_7__.DiscovernearComponent, // BookdetailsComponent,
  // OfferlistComponent,
  // CreateofferComponent,
  // OfferdetailsComponent,
  // ProfileComponent,
  // BookingComponent,
  _Searchresult_Searchresult_component__WEBPACK_IMPORTED_MODULE_6__.SearchresultComponent],
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe]
})], GuestModule);


/***/ }),

/***/ 20563:
/*!****************************************!*\
  !*** ./src/app/Guest/Guest.routing.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GuestRoutes": function() { return /* binding */ GuestRoutes; }
/* harmony export */ });
/* harmony import */ var _Home_Home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home/Home.component */ 46000);
/* harmony import */ var _Discovernear_Discovernear_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Discovernear/Discovernear.component */ 76997);
/* harmony import */ var _Searchresult_Searchresult_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Searchresult/Searchresult.component */ 72305);



var GuestRoutes = [{
  path: '',
  children: [{
    path: 'home',
    component: _Home_Home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
  }]
}, {
  path: '',
  children: [{
    path: 'discovernear',
    component: _Discovernear_Discovernear_component__WEBPACK_IMPORTED_MODULE_1__.DiscovernearComponent
  }]
}, {
  path: '',
  children: [{
    path: 'searchresult',
    component: _Searchresult_Searchresult_component__WEBPACK_IMPORTED_MODULE_2__.SearchresultComponent
  }]
}];

/***/ }),

/***/ 46000:
/*!**********************************************!*\
  !*** ./src/app/Guest/Home/Home.component.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": function() { return /* binding */ HomeComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _Home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.component.html?ngResource */ 14191);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_data_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/data.services */ 7619);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var google_maps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! google-maps */ 63502);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var HomeComponent = /*#__PURE__*/function () {
  function HomeComponent(cdf, datepipe, dataService, router) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomeComponent);

    this.cdf = cdf;
    this.datepipe = datepipe;
    this.dataService = dataService;
    this.router = router;
    this.user = null;
    this.user_id = null;
    this.searches = null;
    this.nearbyAds = null;
    this.moment = moment__WEBPACK_IMPORTED_MODULE_3__;
    this.nearByMessage = null;
    this.test = new Date();
    this.step = 0;
    this.incval = 0;
    this.incval1 = 0;
    this.incval2 = 0;
    this.incval3 = 0;
    this.incval4 = 0;
    this.childList = []; // options: LoaderOptions = {/* todo */};

    this.loader = new google_maps__WEBPACK_IMPORTED_MODULE_6__.Loader('AIzaSyA8S1HrLRkdH_tZAUFuIU9Fu4lDJac757s');
    var today = new Date();
    var month = today.getMonth();
    var year = today.getFullYear();
    this.campaignOne = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
      start: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(new Date(year, month, today.getDay())),
      end: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(new Date(year, month, today.getDay() + 5))
    });
    this.campaignTwo = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
      start: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(new Date(year, month, 15)),
      end: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(new Date(year, month, 19))
    });
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(HomeComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      if (localStorage.getItem("token") != null) {
        this.user = 'exists';
        this.dataService.get('guest/get-saved-searches').then(function (result) {
          _this.searches = result.data;

          _this.cdf.detectChanges();
        });
      }

      var body = document.getElementsByTagName('body')[0];
      body.classList.add('lock-page');
      body.classList.add('off-canvas-sidebar');
      var card = document.getElementsByClassName('card')[0];
      this.getPosition().then(function (pos) {
        var city = '';

        _this.loader.load().then(function (google) {
          var geocoder;
          geocoder = new google.maps.Geocoder();
          var latlng = new google.maps.LatLng(pos.lat, pos.lng);
          geocoder.geocode({
            'latLng': latlng
          }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              if (results[0]) {
                var add = results[0].formatted_address;
                var value = add.split(",");
                var count = value.length;
                city = value[count - 3];
                city = city.trim();
                $('#cityName').val(city);
              } else {
                this.nearByMessage = "Address Not Found";
              }
            } else {
              this.nearByMessage = "Geocoder failed due to: " + status;
            }
          });
        });
      });
      setTimeout(function () {
        _this.getNearByAds();
      }, 5000);
    }
  }, {
    key: "getNearByAds",
    value: function getNearByAds() {
      var _this2 = this;

      var data = {
        city: $('#cityName').val()
      };
      this.dataService.post('near-by-ads', data).then(function (result) {
        if (result.success == true) {
          if (result.data.length == 0) {
            _this2.nearByMessage = "No Records Found";
          } else {
            _this2.nearbyAds = result.data[data['city']];
          }
        }
      });
    }
  }, {
    key: "getCity",
    value: function getCity() {
      var _this3 = this;

      this.getPosition().then(function (pos) {
        var city = '';

        _this3.loader.load().then(function (google) {
          var geocoder;
          geocoder = new google.maps.Geocoder();
          var latlng = new google.maps.LatLng(pos.lat, pos.lng);
          geocoder.geocode({
            'latLng': latlng
          }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              if (results[0]) {
                var add = results[1].formatted_address;
                var value = add.split(",");
                var count = value.length;
                city = value[count - 3];
                city = city.trim();
                $('#city').val(city);

                if ($('#destinationLabel').text() == "Enter destinantion") {
                  $('#destinationLabel').empty();
                  $('#destinationLabel').text(city);
                }
              } else {
                this.nearByMessage = "Address Not Found";
              }
            } else {
              this.nearByMessage = "Geocoder failed due to: " + status;
            }
          });
        });
      });
    }
  }, {
    key: "getDestination",
    value: function getDestination() {
      $('#destinationLabel').empty();
      $('#destinationLabel').text($('#city').val());
      this.cdf.detectChanges();
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('lock-page');
      body.classList.remove('off-canvas-sidebar');
    }
  }, {
    key: "hidecollaps",
    value: function hidecollaps(val) {
      if (val == 1) {
        $('#collapseExample1').removeClass("show");
      } else if (val == 2) {
        $('#collapseExample').removeClass("show");
      } else {
        $('#collapseExample').removeClass("show");
        $('#collapseExample1').removeClass("show");
      }
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
          $('#quantityLabel').empty();
          $('#quantityLabel').text(this.incval2 + ' rooms and ' + (this.incval3 + this.incval4) + ' guests');
          break;

        case 3:
          this.incval3 += 1;
          $('#quantityLabel').empty();
          $('#quantityLabel').text(this.incval2 + ' rooms and ' + (this.incval3 + this.incval4) + ' guests');
          break;

        case 4:
          this.incval4 += 1;
          this.childList.push(this.incval4);
          $('#quantityLabel').empty();
          $('#quantityLabel').text(this.incval2 + ' rooms and ' + (this.incval3 + this.incval4) + ' guests');
          this.cdf.detectChanges();
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

          $('#quantityLabel').empty();
          $('#quantityLabel').text(this.incval2 + ' rooms and ' + (this.incval3 + this.incval4) + ' guests');

        case 3:
          if (val == 3) {
            if (this.incval3 > 0) {
              this.incval3 -= 1;
              break;
            }
          }

          $('#quantityLabel').empty();
          $('#quantityLabel').text(this.incval2 + ' rooms and ' + (this.incval3 + this.incval4) + ' guests');

        case 4:
          if (val == 4) {
            if (this.incval4 > 0) {
              this.incval4 -= 1;
              this.childList.pop();
              this.cdf.detectChanges();
              break;
            }
          }

          $('#quantityLabel').empty();
          $('#quantityLabel').text(this.incval2 + ' rooms and ' + (this.incval3 + this.incval4) + ' guests');
      }
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(function (resp) {
          resolve({
            lng: resp.coords.longitude,
            lat: resp.coords.latitude
          });
        }, function (err) {
          _this4.nearByMessage = "anable";
          console.log(err);
          reject(err);
        });
      });
    }
  }, {
    key: "getLocation1",
    value: function getLocation1() {
      // If the user allow us to get the location from the browser
      if (window.location.protocol == "https:" && navigator.geolocation) navigator.geolocation.getCurrentPosition(function (position) {// geolocation["lat"] = position.coords.latitude;
        // geolocation["long"] = position.coords.longitude;
        // printLocation(); // Second time, will be return the location correctly
      });else {// We cannot access to the geolocation
      }
    }
  }, {
    key: "getLocation",
    value: function getLocation() {
      var _this5 = this;

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          _this5.lat = position.coords.latitude;
          _this5.lng = position.coords.longitude;
          _this5.zoom = 16;
          console.log("position", position);
        });
      } else {
        console.log("User not allowed");
      }
    }
  }, {
    key: "dateRange",
    value: function dateRange() {
      var startDate = this.datepipe.transform(this.campaignOne.controls['start'].value, 'yyyy-MM-dd');
      var endDate = this.datepipe.transform(this.campaignOne.controls['end'].value, 'yyyy-MM-dd');
      $('#dateLabel').empty();
      $('#dateLabel').text(startDate + ' to ' + endDate);
      this.cdf.detectChanges();
    }
  }, {
    key: "search",
    value: function search() {
      var data = {
        destination: $('#city').val(),
        from: this.datepipe.transform(this.campaignOne.controls['start'].value, 'yyyy-MM-dd'),
        to: this.datepipe.transform(this.campaignOne.controls['end'].value, 'yyyy-MM-dd'),
        rooms: this.incval2,
        // adults: this.incval3,
        // children: this.incval4,
        guests: this.incval3 + this.incval4,
        user_id: this.user_id
      };

      if (data['destination'] == null || data['from'] == null || data['to'] == null || data['rooms'] <= 0 || data['guests'] <= 0) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
          position: 'center',
          icon: 'error',
          title: 'Please Fill All Required Fields',
          showConfirmButton: false,
          timer: 2500
        });
        return;
      }

      this.searchResults(data);
    }
  }, {
    key: "getSavedSearch",
    value: function getSavedSearch(destination, from, to, rooms, adults, children, guests) {
      var data = {
        destination: destination,
        from: from,
        to: to,
        rooms: rooms,
        // adults: adults,
        // children: children,
        guests: guests,
        user_id: this.user_id
      };
      this.searchResults(data);
    }
  }, {
    key: "saveCheck",
    value: function saveCheck() {
      if ($('#save').prop("checked") == true) {
        this.user_id = localStorage.getItem('id');
      } else if ($(this).prop("checked") == false) {
        this.user_id = null;
      }
    }
  }, {
    key: "searchResults",
    value: function searchResults(data) {
      var _this6 = this;

      this.dataService.post('search', data).then(function (result) {
        localStorage.setItem('city', data['destination']);
        localStorage.setItem('from', data['from']);
        localStorage.setItem('to', data['to']);
        localStorage.setItem('rooms', data['rooms']);
        localStorage.setItem('guests', data['guests']);
        var searchedData = null;

        for (var key in result.data) {
          if (key.toLocaleLowerCase().includes(data['destination'].toLocaleLowerCase())) {
            searchedData = result.data[key];
            break;
          }
        }

        localStorage.setItem('data', JSON.stringify(searchedData));

        _this6.cdf.detectChanges();

        _this6.router.navigate(['guest/searchresult']);
      });
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      var _this7 = this;

      var data = {
        id: id
      };
      this.dataService.post('guest/delete-saved-search', data).then(function (result) {
        _this7.searches.splice(id);

        _this7.cdf.detectChanges();

        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
          position: 'center',
          icon: 'success',
          title: 'Success',
          showConfirmButton: false,
          timer: 2500
        });
      });
    }
  }, {
    key: "getOfferDetails",
    value: function getOfferDetails(id) {
      this.router.navigate(['guestportal/offerdetails', id]);
    }
  }, {
    key: "host",
    value: function host() {
      this.router.navigate(['host/home']);
    }
  }]);

  return HomeComponent;
}();

HomeComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe
  }, {
    type: src_app_services_data_services__WEBPACK_IMPORTED_MODULE_4__.DataService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
  }];
};

HomeComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-Home-cmp',
  template: _Home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], HomeComponent);


/***/ }),

/***/ 72305:
/*!**************************************************************!*\
  !*** ./src/app/Guest/Searchresult/Searchresult.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchresultComponent": function() { return /* binding */ SearchresultComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _Searchresult_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Searchresult.component.html?ngResource */ 77849);
/* harmony import */ var _Searchresult_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Searchresult.component.scss?ngResource */ 46244);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var src_app_services_data_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/data.services */ 7619);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SearchresultComponent = /*#__PURE__*/function () {
  function SearchresultComponent(router, dataService, cdf) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchresultComponent);

    this.router = router;
    this.dataService = dataService;
    this.cdf = cdf;
    this.search = null;
    this.city = null;
    this.test = new Date();
    this.step = 0;
    this.incval = 0;
    this.incval1 = 0;
    this.incval2 = 0;
    this.incval3 = 0;
    this.incval4 = 0;
    this.user = null;
    this.languages = null;
    this.features = null;
    this.property_type = [];
    this.feature_type = [];
    this.language_type = [];
    this.min_price = null;
    this.max_price = null;
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
    this.min_price = 50;
    this.max_price = 500;
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchresultComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      if (localStorage.getItem("token")) {
        this.user = 'exists';
      }

      this.dataService.get('get-all-languages').then(function (result) {
        _this.languages = result.data;
      });
      this.dataService.get('get-features').then(function (result) {
        _this.features = result.data;
      });
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('lock-page');
      body.classList.add('off-canvas-sidebar');
      var card = document.getElementsByClassName('card')[0];
      this.city = localStorage.getItem('city');
      this.search = JSON.parse(localStorage.getItem('data'));

      for (var i = 0; i < this.search.length; i++) {
        var totalPrice = this.search[i]['price'];
        var price = totalPrice * (this.search[i]['discount_of_percentage'] / 100);
        price = totalPrice - price;
        this.search[i]['current_price'] = price;
        this.search[i]['lat'] = parseFloat(this.search[i]['lat']);
        this.search[i]['lan'] = parseFloat(this.search[i]['lan']);
      }

      this.dataService.get('get-all-languages').then(function (result) {
        _this.languages = result.data;
      });
      this.dataService.get('get-features').then(function (result) {
        _this.features = result.data;
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
    key: "book",
    value: function book() {
      location.href = "#/guest/offerdetails";
    }
  }, {
    key: "hidecollaps",
    value: function hidecollaps(val) {
      if (val == 1) {
        $('#collapseExample1').removeClass("show");
      } else if (val == 2) {
        $('#collapseExample').removeClass("show");
      } else {
        $('#collapseExample').removeClass("show");
        $('#collapseExample1').removeClass("show");
      }
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
      }
    }
  }, {
    key: "minus",
    value: function minus(val) {
      switch (val) {
        case 0:
          this.incval -= 1;
          break;

        case 1:
          this.incval1 -= 1;
          break;

        case 2:
          this.incval2 -= 1;
          break;

        case 3:
          this.incval3 -= 1;
          break;

        case 4:
          this.incval4 -= 1;
          break;
      }
    }
  }, {
    key: "getOfferDetails",
    value: function getOfferDetails(id) {
      this.router.navigate(['guestportal/offerdetails', id]);
    }
  }, {
    key: "advancedSearch",
    value: function advancedSearch() {
      var _this2 = this;

      $('.bd-example-modal-md').modal('hide');

      if (this.min_price > this.max_price) {
        var temp = this.max_price;
        this.max_price = this.min_price;
        this.max_price = temp;
      }

      var data = {
        destination: this.city,
        from: localStorage.getItem('from'),
        to: localStorage.getItem('to'),
        rooms: localStorage.getItem('rooms'),
        guests: localStorage.getItem('guests'),
        property_type: this.property_type,
        feature_type: this.feature_type,
        language_type: this.language_type,
        min_price: this.min_price,
        max_price: this.max_price
      };
      this.dataService.post('advanced-search', data).then(function (result) {
        _this2.search = result.data[data['destination']];

        for (var i = 0; i < _this2.search.length; i++) {
          var totalPrice = _this2.search[i]['price'];
          var price = totalPrice * (_this2.search[i]['discount_of_percentage'] / 100);
          price = totalPrice - price;
          _this2.search[i]['current_price'] = price;
          _this2.search[i]['lat'] = parseFloat(_this2.search[i]['lat']);
          _this2.search[i]['lan'] = parseFloat(_this2.search[i]['lan']);
        }

        _this2.cdf.detectChanges();
      });
    }
  }, {
    key: "property",
    value: function property(e, _property) {
      if (e.source.checked) {
        this.property_type.push(_property);
      } else {
        this.property_type.splice(this.property_type.indexOf(_property), 1);
      }
    }
  }, {
    key: "feature",
    value: function feature(e, _feature) {
      if (e.source.checked) {
        this.feature_type.push(_feature);
      } else {
        this.feature_type.splice(this.feature_type.indexOf(_feature), 1);
      }
    }
  }, {
    key: "language",
    value: function language(e, _language) {
      if (e.source.checked) {
        this.language_type.push(_language);
      } else {
        this.language_type.splice(this.language_type.indexOf(_language), 1);
      }
    }
  }, {
    key: "minSlider",
    value: function minSlider() {
      this.min_price = $('#minSlider').val();
    }
  }, {
    key: "maxSlider",
    value: function maxSlider() {
      this.max_price = $('#maxSlider').val();
    }
  }]);

  return SearchresultComponent;
}();

SearchresultComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }, {
    type: src_app_services_data_services__WEBPACK_IMPORTED_MODULE_4__.DataService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef
  }];
};

SearchresultComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-Searchresult-cmp',
  template: _Searchresult_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_Searchresult_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], SearchresultComponent);


/***/ }),

/***/ 46244:
/*!***************************************************************************!*\
  !*** ./src/app/Guest/Searchresult/Searchresult.component.scss?ngResource ***!
  \***************************************************************************/
/***/ (function(module) {

module.exports = "/* https://codepen.io/rendykstan/pen/VLqZGO8 */\n.range-slider {\n  position: relative;\n  width: 80%;\n  margin-left: 10%;\n  height: 54px;\n  float: left;\n  text-align: center;\n}\n.range-slider input[type=range] {\n  -webkit-appearance: none;\n  height: 20px;\n  pointer-events: none;\n  padding: 0;\n  position: absolute;\n  left: 0;\n  top: 30px;\n  height: 20px;\n  width: 100%;\n  border-radius: 14px;\n  border: 1px solid grey;\n  background: none;\n}\n.range-slider input[type=range]:focus, .range-slider input[type=range]:active {\n  outline: none;\n}\n.range-slider input[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  box-sizing: content-box;\n  width: 20px;\n  height: 20px;\n  border: none;\n  pointer-events: auto;\n  border-radius: 14px;\n  background-color: #ed8935;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n}\n.range-slider input[type=range]::-moz-range-thumb {\n  width: 20px;\n  height: 20px;\n  border: none;\n  pointer-events: auto;\n  border-radius: 14px;\n  background-color: #ed8935;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n}\n.range-slider input[type=range]::-ms-thumb {\n  width: 20px;\n  height: 20px;\n  border: none;\n  pointer-events: auto;\n  border-radius: 14px;\n  background-color: #ed8935;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n}\n.range-slider input[type=range]::-webkit-slider-runnable-track {\n  /* your track styles */\n}\n.range-slider input[type=range]::-moz-range-track {\n  -moz-appearance: none;\n  background: none;\n}\n.range-slider input[type=range]::-ms-track {\n  /* should come after -webkit- */\n  border-color: transparent;\n  color: transparent;\n  background: transparent;\n  /* again your track styles */\n}\n.range-slider input[type=range]::-ms-fill-upper {\n  background: transparent;\n}\n.range-slider input[type=range]::-ms-fill-lower {\n  background: transparent;\n}\n.range-slider input[type=range]::-ms-tooltip {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlYXJjaHJlc3VsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQSw4Q0FBQTtBQXdFQTtFQTVESSxrQkFBQTtFQUNBLFVBNERzQjtFQTNEdEIsZ0JBQUE7RUFDQSxZQTBEMkI7RUF6RDNCLFdBeUR5RDtFQXhEekQsa0JBQUE7QUFyQko7QUFzQkk7RUFDSSx3QkFBQTtFQUNBLFlBcUQyRDtFQXBEM0Qsb0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FnRDZCO0VBL0M3QixZQStDMkQ7RUE5QzNELFdBQUE7RUFDQSxtQkE2Q2lFO0VBNUNqRSxzQkFBQTtFQUNBLGdCQUFBO0FBcEJSO0FBcUJRO0VBRUksYUFBQTtBQXBCWjtBQXNCUTtFQUNJLHdCQUFBO0VBQ0EsdUJBQUE7RUFoRFIsV0FvRitEO0VBbkYvRCxZQW1GK0Q7RUFsRi9ELFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQWdGcUU7RUEvRXJFLHlCQStFZ0Q7RUE5RWhELGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUE2Qko7QUFjUTtFQW5ESixXQW9GK0Q7RUFuRi9ELFlBbUYrRDtFQWxGL0QsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBZ0ZxRTtFQS9FckUseUJBK0VnRDtFQTlFaEQsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQXdDSjtBQU1RO0VBdERKLFdBb0YrRDtFQW5GL0QsWUFtRitEO0VBbEYvRCxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFnRnFFO0VBL0VyRSx5QkErRWdEO0VBOUVoRCxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBbURKO0FBRlE7RUFDSSxzQkFBQTtBQUlaO0FBRlE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0FBSVo7QUFGUTtFQUNJLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7QUFJWjtBQUZRO0VBQ0ksdUJBQUE7QUFJWjtBQUZRO0VBQ0ksdUJBQUE7QUFJWjtBQUZRO0VBQ0ksYUFBQTtBQUlaIiwiZmlsZSI6IlNlYXJjaHJlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiB0aHVtYigkaW5wdXQtaGVpZ2h0LCAkaW5wdXQtYm9yZGVyLXJhZGl1cywgJGlucHV0LXRodW1iLWNvbG9yKSB7XHJcbiAgICB3aWR0aDogJGlucHV0LWhlaWdodDtcclxuICAgIGhlaWdodDogJGlucHV0LWhlaWdodDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGlucHV0LWJvcmRlci1yYWRpdXM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtdGh1bWItY29sb3I7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxOyBcclxufVxyXG5cclxuLyogaHR0cHM6Ly9jb2RlcGVuLmlvL3JlbmR5a3N0YW4vcGVuL1ZMcVpHTzggKi9cclxuQG1peGluIHJhbmdlLXNsaWRlcihcclxuICAgICR3aWR0aCxcclxuICAgICRoZWlnaHQsXHJcbiAgICAkaW5wdXQtdG9wLFxyXG4gICAgJGlucHV0LWJnLWNvbG9yLFxyXG4gICAgJGlucHV0LXRodW1iLWNvbG9yLFxyXG4gICAgJGZsb2F0OiBub25lLFxyXG4gICAgJGlucHV0LWhlaWdodDogMjBweCxcclxuICAgICRpbnB1dC1ib3JkZXItcmFkaXVzOiAxNHB4LFxyXG4gICAgJGJ1YmJsZS13aWR0aDogMTAwcHhcclxuKSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogJHdpZHRoO1xyXG4gICAgbWFyZ2luLWxlZnQ6ICgxMDAlIC0gJHdpZHRoKSAvIDI7XHJcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgICBmbG9hdDogJGZsb2F0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaW5wdXRbdHlwZT0ncmFuZ2UnXSB7XHJcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgIGhlaWdodDogJGlucHV0LWhlaWdodDtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czpub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiAkaW5wdXQtdG9wO1xyXG4gICAgICAgIGhlaWdodDogJGlucHV0LWhlaWdodDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAkaW5wdXQtYm9yZGVyLXJhZGl1cztcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcclxuICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdGh1bWIoJGlucHV0LWhlaWdodCwgJGlucHV0LWJvcmRlci1yYWRpdXMsICRpbnB1dC10aHVtYi1jb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6Oi1tb3otcmFuZ2UtdGh1bWIge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0aHVtYigkaW5wdXQtaGVpZ2h0LCAkaW5wdXQtYm9yZGVyLXJhZGl1cywgJGlucHV0LXRodW1iLWNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjo6LW1zLXRodW1iIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdGh1bWIoJGlucHV0LWhlaWdodCwgJGlucHV0LWJvcmRlci1yYWRpdXMsICRpbnB1dC10aHVtYi1jb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcclxuICAgICAgICAgICAgLyogeW91ciB0cmFjayBzdHlsZXMgKi9cclxuICAgICAgICB9XHJcbiAgICAgICAgJjo6LW1vei1yYW5nZS10cmFjayB7XHJcbiAgICAgICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjo6LW1zLXRyYWNrIHtcclxuICAgICAgICAgICAgLyogc2hvdWxkIGNvbWUgYWZ0ZXIgLXdlYmtpdC0gKi9cclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgLyogYWdhaW4geW91ciB0cmFjayBzdHlsZXMgKi9cclxuICAgICAgICB9XHJcbiAgICAgICAgJjo6LW1zLWZpbGwtdXBwZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjo6LW1zLWZpbGwtbG93ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjo6LW1zLXRvb2x0aXAge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnJhbmdlLXNsaWRlciB7XHJcbiAgICBAaW5jbHVkZSByYW5nZS1zbGlkZXIoODAlLCA1NHB4LCAzMHB4LCAjZjFlZmVmLCAjZWQ4OTM1LCBsZWZ0LCAyMHB4LCAxNHB4LCA4MHB4KTtcclxufSJdfQ== */";

/***/ }),

/***/ 71155:
/*!***********************************************************************************!*\
  !*** ./src/app/Admin/layouts/guest-footer/guest_footer.component.html?ngResource ***!
  \***********************************************************************************/
/***/ (function(module) {

module.exports = "<footer class=\"footer \" style=\"background-color: #FFFFFF!important; color: black;border-top: 1px solid #e5e5e5;\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2 text-left\">\r\n        <div>      \r\n           <img src=\"./assets/Icons/SVG/logo.svg\" style=\"width:90%\"/>\r\n        </div>\r\n        <div>\r\n          <p class=\"mt-2\">\r\n            Lorem Ipsum is simply dummy text of \r\n            the printing and typesetting industry. \r\n            Lorem Ipsum the industry          \r\n          </p>\r\n        \r\n          <p class=\"mt-4\"> \r\n            <a class=\"btn btn-outline btn-danger btn-round px-2 py-1 facebookbg\" target=\"_blank\" href=\"https://www.facebook.com/\"><i class=\"facebookc fa fa-facebook\" ria-hidden=\"true\"></i></a>\r\n            <a class=\"btn btn-outline btn-danger btn-round px-1 py-1 twitterbg\" target=\"_blank\" href=\"https://twitter.com/\"><i class=\"twitterc fa fa-twitter\"  aria-hidden=\"true\"></i></a>\r\n            <a class=\"btn btn-outline btn-danger btn-round px-1 py-1 instagrambg\" target=\"_blank\" href=\"https://www.instagram.com/\"><i class=\"instagramc fa fa-instagram\"  aria-hidden=\"true\"></i></a>\r\n       </p>\r\n          <p>© 2021 OneRooms, Inc.</p>\r\n        </div>\r\n        <div>\r\n          <span style=\"top: 1572px;left: 251px; width: 43px; height: 43px;background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;background: #FFFFFF 0% 0% no-repeat padding-box;opacity: 1;\"></span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-1\"></div>\r\n      <div class=\"col-md-3 text-left\">\r\n        <h4 class=\"font-weight-bolder\" ><b>  {{'trans.about_us' | translate}}</b></h4>\r\n        <p class=\"mt-3 mb-2\"><a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.How_oneRooms_works' | translate}} </a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Careers' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Newsroom' | translate}}</a></p>\r\n        <p class=\"mb-2\" ><a href=\"\" class=\"text-dark\"> {{'trans.about_us' | translate}}</a> </p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/blog\" class=\"text-dark\"> {{'trans.Latest_Blog' | translate}}</a></p>\r\n      </div>\r\n      <div class=\"col-md-3 text-left\">\r\n        <h4 class=\"font-weight-bolder\"><b> {{'trans.Host' | translate}} </b> </h4>\r\n        <p class=\"mt-3 mb-2\"> <a href=\"#/Website/host\" class=\"text-dark\"> {{'trans.Host_your_offer' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Responsible_Hosting' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\">{{'trans.Resource_Centre' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\">{{'trans.Community_centre' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Dedicated_support_system' | translate}}</a></p>\r\n       </div>\r\n      <div class=\"col-md-3 text-left\">\r\n        <h4 class=\"font-weight-bolder\">\r\n          <b> {{'trans.Support' | translate}}</b>\r\n        </h4>\r\n        <p class=\"mt-3 mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Our_covid_19_Response' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Help_center' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\">{{'trans.Cancellation_options' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Neighbourhood_Support' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Trust_Safety' | translate}}</a></p>\r\n      </div>\r\n    </div>\r\n  </div> \r\n</footer>\r\n<div class=\"container-fluid\" style=\"background-color: #FFFFFF!important; color: black;border-top: 1px solid #e5e5e5;\">\r\n  <div class=\"container\" style=\"    padding-top: 4.5vh !important;padding-bottom: 4.5vh;\">\r\n    <div class=\"col-12 pl-0\">\r\n      <div class=\"list-inline\">\r\n        <a href=\"#\" class=\"list-inline-item text-dark\" [routerLink]=\"['/Website/privacy']\"><small> {{'trans.Terms_of_use' | translate}} </small></a>\r\n        <a href=\"#\" class=\"list-inline-item text-dark px-3\" [routerLink]=\"['/Website/privacy']\"><small> {{'trans.Privacy_portal' | translate}}</small> </a>\r\n        <!-- <a href=\"#\" class=\"list-inline-item text-dark\" [routerLink]=\"['/Website/privacy']\"><small> {{'trans.Cookie_preference' | translate}}</small></a> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 29650:
/*!***************************************************************************!*\
  !*** ./src/app/Guest/Discovernear/Discovernear.component.html?ngResource ***!
  \***************************************************************************/
/***/ (function(module) {

module.exports = "<style>\r\n \r\n  .nav-tabs, .nav-pills {\r\n    border: 0;\r\n    border-radius: 3px;\r\n    padding: 0 15px;\r\n    border-bottom: 1px solid;\r\n    border-color: #cbc2c2;\r\n}\r\n\r\n.nav-pills.nav-pills-danger .nav-item .nav-link.active, .nav-pills.nav-pills-danger .nav-item .nav-link.active:focus, .nav-pills.nav-pills-danger .nav-item .nav-link.active:hover {\r\n    background-color: transparent;\r\n    color: #ed8935;\r\n    border-radius: 0px;\r\n    border: none;\r\n    box-shadow: none;\r\n    border-bottom: 2px solid;\r\n}\r\n.dpscolor{\r\n color:#728aad;\r\n}\r\n.divscroll::-webkit-scrollbar {\r\n    scrollbar-gutter: 2px;\r\n    width: 4px;\r\n    z-index: 10;\r\n    border-radius: 10px;\r\n    background: white;\r\n}\r\n.divscroll::-webkit-scrollbar-thumb{background-color:#2d5286;}\r\n\r\n#floatingTextarea::placeholder {\r\n  color: white;\r\n  opacity: 1; /* Firefox */\r\n}\r\n</style>\r\n\r\n<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header lock-page header-filter\" filter-color=\"black\" style=\"background-color:#fafafa; background-size: cover; background-position: top center;\" >\r\n    <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\r\n    <div class=\"container mb-4\" >\r\n      <div class=\"row justify-content-center\" style=\"margin-top: 8vh;\">\r\n        <div class=\"col-12 col-lg-12\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n              <h3 class=\"mb-0\"><b> {{'trans.chillon_castle' | translate}}</b></h3>\r\n              <p>140 {{'trans.offers' | translate}}</p>\r\n            </div>\r\n            <div class=\"col-6 text-right  mt-4\">\r\n              <div class=\"row justify-content-end\">\r\n              <div class=\"input-group mb-3 col-lg-6 col-md-8 col-6\" style=\"background-color: #e95228;border: 1px solid #dee2e6;border-radius: 20px;\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-search text-white\"></i></span>\r\n                </div>\r\n                <input type=\"text\"  class=\"form-control text-white\"  placeholder=\"Search\" id=\"floatingTextarea\" style=\"background-image: none;    padding: 20px 0px;\">\r\n            </div>\r\n          </div>\r\n            </div>\r\n\r\n          </div>\r\n         \r\n        </div>\r\n        <div class=\"col-12 col-lg-12\">\r\n          <div class=\"row  \">\r\n            <div class=\"col-md-5 divscroll\" style=\"overflow: auto; height: 550px;overflow-x: hidden;\">\r\n              <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                  <div class=\"card mt-1 mb-1\">\r\n                   <div class=\"card-body py-0 px-md-3\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-4 p-0\" style=\"background-image: url('../assets/Images/Finish booking@2x.png');background-size: cover; background-repeat: no-repeat;\">\r\n                      </div>\r\n                      <div class=\"col-md-8\">\r\n                        <div class=\"card-body\">\r\n  \r\n                        <div class=\"row\">\r\n                          <div class=\"col-8\">\r\n                            <h4 class=\"mb-0\"><b>{{'trans.offer_title_here' | translate}} </b></h4>\r\n                          </div>\r\n                          <div class=\"col-4 text-right\">       \r\n                               <img class=\"img-fluid rounded \"   src=\"./assets/Icons/PNG/House.png\">\r\n                          </div>\r\n                          <div class=\"col-5\">\r\n                            <p class=\"mb-0 dpscolor\">{{'trans.Discount' | translate}}</p>\r\n                            <p class=\"mb-0 dpscolor\">{{'trans.Price' | translate}}</p>\r\n                            <p class=\"mb-0 dpscolor\">{{'trans.Subsidiary' | translate}}</p>\r\n                            \r\n                          </div>\r\n                          <div class=\"col-7\">\r\n                            <p class=\"mb-0\">: 20%</p>\r\n                            <p class=\"mb-0\">:<del class=\"text-danger\">$300.00</del> $210.00</p>\r\n                            <p class=\"mb-0\"><b>: $210.00</b></p>\r\n                            \r\n                          </div>\r\n  </div>  \r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <div class=\"card mt-1 mb-1\">\r\n                <div class=\"card-body py-0 px-md-3\">\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-4 p-0\" style=\"background-image: url('../assets/Images/Finish booking@2x.png');background-size: cover; background-repeat: no-repeat;\">\r\n                      </div>\r\n                      <div class=\"col-md-8\">\r\n                        <div class=\"card-body\">\r\n  \r\n                        <div class=\"row\">\r\n                          <div class=\"col-8\">\r\n                            <h4 class=\"mb-0\"><b>{{'trans.offer_title_here' | translate}}</b></h4>\r\n                          </div>\r\n                          <div class=\"col-4 text-right\">       \r\n                               <img class=\"img-fluid rounded \"   src=\"./assets/Icons/PNG/House.png\">\r\n                          </div>\r\n                          <div class=\"col-5\">\r\n                            <p class=\"mb-0 dpscolor\">{{'trans.Discount' | translate}}</p>\r\n                            <p class=\"mb-0 dpscolor\">{{'trans.Price' | translate}}</p>\r\n                            <p class=\"mb-0 dpscolor\">{{'trans.Subsidiary' | translate}}</p>\r\n                            \r\n                          </div>\r\n                          <div class=\"col-7\">\r\n                            <p class=\"mb-0\">: 20%</p>\r\n                            <p class=\"mb-0\">:<del class=\"text-danger\">$300.00</del> $210.00</p>\r\n                            <p class=\"mb-0\"><b>: $210.00</b></p>\r\n                            \r\n                          </div>\r\n  </div>  \r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <div class=\"card mt-1 mb-1\">\r\n                                        <div class=\"card-body py-0 px-md-3\">\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-4 p-0\" style=\"background-image: url('../assets/Images/Finish booking@2x.png');background-size: cover; background-repeat: no-repeat;\">\r\n                      </div>\r\n                      <div class=\"col-md-8\">\r\n                        <div class=\"card-body\">\r\n  \r\n                        <div class=\"row\">\r\n                          <div class=\"col-8\">\r\n                            <h4 class=\"mb-0\"><b>{{'trans.offer_title_here' | translate}}</b></h4>\r\n                          </div>\r\n                          <div class=\"col-4 text-right\">       \r\n                               <img class=\"img-fluid rounded \"   src=\"./assets/Icons/PNG/House.png\">\r\n                          </div>\r\n                          <div class=\"col-5\">\r\n                            <p class=\"mb-0 dpscolor\">{{'trans.Discount' | translate}}</p>\r\n                            <p class=\"mb-0 dpscolor\">{{'trans.Price' | translate}}</p>\r\n                            <p class=\"mb-0 dpscolor\">{{'trans.Subsidiary' | translate}}</p>\r\n                            \r\n                          </div>\r\n                          <div class=\"col-7\">\r\n                            <p class=\"mb-0\">: 20%</p>\r\n                            <p class=\"mb-0\">:<del class=\"text-danger\">$300.00</del> $210.00</p>\r\n                            <p class=\"mb-0\"><b>: $210.00</b></p>\r\n                            \r\n                          </div>\r\n  </div>  \r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <div class=\"card mt-1 mb-1\">\r\n                                        <div class=\"card-body py-0 px-md-3\">\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-4 p-0\" style=\"background-image: url('../assets/Images/Finish booking@2x.png');background-size: cover; background-repeat: no-repeat;\">\r\n                      </div>\r\n                      <div class=\"col-md-8\">\r\n                        <div class=\"card-body\">\r\n  \r\n                        <div class=\"row\">\r\n                          <div class=\"col-8\">\r\n                            <h4 class=\"mb-0\"><b>{{'trans.offer_title_here' | translate}}</b></h4>\r\n                          </div>\r\n                          <div class=\"col-4 text-right\">       \r\n                               <img class=\"img-fluid rounded \"   src=\"./assets/Icons/PNG/House.png\">\r\n                          </div>\r\n                          <div class=\"col-5\">\r\n                            <p class=\"mb-0 dpscolor\">{{'trans.Discount' | translate}}</p>\r\n                            <p class=\"mb-0 dpscolor\">{{'trans.Price' | translate}}</p>\r\n                            <p class=\"mb-0 dpscolor\">{{'trans.Subsidiary' | translate}}</p>\r\n                            \r\n                          </div>\r\n                          <div class=\"col-7\">\r\n                            <p class=\"mb-0\">: 20%</p>\r\n                            <p class=\"mb-0\">:<del class=\"text-danger\">$300.00</del> $210.00</p>\r\n                            <p class=\"mb-0\"><b>: $210.00</b></p>\r\n                            \r\n                          </div>\r\n  </div>  \r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <div class=\"card mt-1 mb-1\">\r\n                                        <div class=\"card-body py-0 px-md-3\">\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-4 p-0\" style=\"background-image: url('../assets/Images/Finish booking@2x.png');background-size: cover; background-repeat: no-repeat;\">\r\n                      </div>\r\n                      <div class=\"col-md-8\">\r\n                        <div class=\"card-body\">\r\n  \r\n                        <div class=\"row\">\r\n                          <div class=\"col-8\">\r\n                            <h4 class=\"mb-0\"><b>{{'trans.offer_title_here' | translate}}</b></h4>\r\n                          </div>\r\n                          <div class=\"col-4 text-right\">       \r\n                               <img class=\"img-fluid rounded \"   src=\"./assets/Icons/PNG/House.png\">\r\n                          </div>\r\n                          <div class=\"col-5\">\r\n                            <p class=\"mb-0 dpscolor\">{{'trans.Discount' | translate}}</p>\r\n                            <p class=\"mb-0 dpscolor\">{{'trans.Price' | translate}}</p>\r\n                            <p class=\"mb-0 dpscolor\">{{'trans.Subsidiary' | translate}}</p>\r\n                            \r\n                          </div>\r\n                          <div class=\"col-7\">\r\n                            <p class=\"mb-0\">: 20%</p>\r\n                            <p class=\"mb-0\">:<del class=\"text-danger\">$300.00</del> $210.00</p>\r\n                            <p class=\"mb-0\"><b>: $210.00</b></p>\r\n                            \r\n                          </div>\r\n  </div>  \r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <div class=\"card mt-1 mb-1\">\r\n                                        <div class=\"card-body py-0 px-md-3\">\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-4 p-0\" style=\"background-image: url('../assets/Images/Finish booking@2x.png');background-size: cover; background-repeat: no-repeat;\">\r\n                      </div>\r\n                      <div class=\"col-md-8\">\r\n                        <div class=\"card-body\">\r\n  \r\n                        <div class=\"row\">\r\n                          <div class=\"col-8\">\r\n                            <h4 class=\"mb-0\"><b>{{'trans.offer_title_here' | translate}}</b></h4>\r\n                          </div>\r\n                          <div class=\"col-4 text-right\">       \r\n                               <img class=\"img-fluid rounded \"   src=\"./assets/Icons/PNG/House.png\">\r\n                          </div>\r\n                          <div class=\"col-5\">\r\n                            <p class=\"mb-0 dpscolor\">{{'trans.Discount' | translate}}</p>\r\n                            <p class=\"mb-0 dpscolor\">{{'trans.Price' | translate}}</p>\r\n                            <p class=\"mb-0 dpscolor\">{{'trans.Subsidiary' | translate}}</p>\r\n                            \r\n                          </div>\r\n                          <div class=\"col-7\">\r\n                            <p class=\"mb-0\">: 20%</p>\r\n                            <p class=\"mb-0\">:<del class=\"text-danger\">$300.00</del> $210.00</p>\r\n                            <p class=\"mb-0\"><b>: $210.00</b></p>\r\n                            \r\n                          </div>\r\n  </div>  \r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <div class=\"card mt-1 mb-1\">\r\n                                        <div class=\"card-body py-0 px-md-3\">\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-4 p-0\" style=\"background-image: url('../assets/Images/Finish booking@2x.png');background-size: cover; background-repeat: no-repeat;\">\r\n                      </div>\r\n                      <div class=\"col-md-8\">\r\n                        <div class=\"card-body\">\r\n  \r\n                        <div class=\"row\">\r\n                          <div class=\"col-8\">\r\n                            <h4 class=\"mb-0\"><b>{{'trans.offer_title_here' | translate}}</b></h4>\r\n                          </div>\r\n                          <div class=\"col-4 text-right\">       \r\n                               <img class=\"img-fluid rounded \"   src=\"./assets/Icons/PNG/House.png\">\r\n                          </div>\r\n                          <div class=\"col-5\">\r\n                            <p class=\"mb-0 dpscolor\">{{'trans.Discount' | translate}}</p>\r\n                            <p class=\"mb-0 dpscolor\">{{'trans.Price' | translate}}</p>\r\n                            <p class=\"mb-0 dpscolor\">{{'trans.Subsidiary' | translate}}</p>\r\n                            \r\n                          </div>\r\n                          <div class=\"col-7\">\r\n                            <p class=\"mb-0\">: 20%</p>\r\n                            <p class=\"mb-0\">:<del class=\"text-danger\">$300.00</del> $210.00</p>\r\n                            <p class=\"mb-0\"><b>: $210.00</b></p>\r\n                            \r\n                          </div>\r\n  </div>  \r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-7\" >\r\n              <div class=\"card mt-0\">\r\n                <div class=\"card-body p-2\">\r\n\r\n              <div class=\"mapouter\"><div class=\"gmap_canvas\"><iframe class=\"w-100 \" style=\"min-height: 550px;border-radius:10px;\" id=\"gmap_canvas\" src=\"https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe><a href=\"https://2piratebay.org\"></a><br><style>.mapouter{position:relative;text-align:right;min-height:550px;width:100%;}</style><style>.gmap_canvas {overflow:hidden;background:none!important;min-height:550px;width:100%;}</style></div></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        \r\n            <!-- <div class=\"col-12 text-center\">\r\n              <button class=\"btn btn-outline-danger btn-round\">More Active Offer</button>\r\n            </div> -->\r\n          </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-guest_footer-web></app-guest_footer-web>\r\n\r\n</div>";

/***/ }),

/***/ 14191:
/*!***********************************************************!*\
  !*** ./src/app/Guest/Home/Home.component.html?ngResource ***!
  \***********************************************************/
/***/ (function(module) {

module.exports = "<style>\r\n  .form-control,\r\n  .is-focused .form-control {\r\n    background-image: none;\r\n    border: 1px solid #d4d2d2;\r\n    border-radius: 5px;\r\n    padding: 18px;\r\n    margin-top: 5px;\r\n    background: white;\r\n  }\r\n\r\n  .divscroll ::-webkit-scrollbar {\r\n    width: 5px;\r\n  }\r\n\r\n  #search p {\r\n    font-size: 15px;\r\n    line-height: 15px;\r\n  }\r\n\r\n  #search .pbold {\r\n    font-size: 12px;\r\n    font-weight: bolder !important;\r\n    color: black;\r\n  }\r\n\r\n  .nav-tabs,\r\n  .nav-pills {\r\n    border: 0;\r\n    border-radius: 3px;\r\n    padding: 0 15px;\r\n    /* border-bottom: 1px solid; */\r\n    border-color: #cbc2c2;\r\n  }\r\n\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active,\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active:focus,\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active:hover {\r\n    background-color: transparent !important;\r\n    color: #ed8935 !important;\r\n    border-radius: 0px;\r\n    border: none;\r\n    box-shadow: none;\r\n    border-bottom: 2px solid;\r\n  }\r\n\r\n  .mat-option:hover {\r\n    box-shadow: 0 4px 20px 0px rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(156 39 176 / 40%);\r\n    background: #f4584d !important;\r\n    color: #fff !important;\r\n  }\r\n</style>\r\n\r\n<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header lock-page header-filter\" filter-color=\"black\"\r\n    style=\"background-color:#fafafa; background-size: cover; background-position: top center;\">\r\n    <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\r\n    <div class=\"container-fluid\"\r\n      style=\"background-image: url('../assets/Images/Guest_Header.png'); background-position: center;background-repeat: no-repeat; background-size: cover;\">\r\n      <div class=\"container pb-md-5\">\r\n        <div class=\"row justify-content-left pb-md-5\">\r\n          <div class=\"col-md-5 col-lg-4 ml-auto mr-auto pb-md-5\" style=\"margin-top: 25vh;\">\r\n            <h1> <b> \r\n                {{'trans.Create_your_dream_book_now' | translate}}\r\n              </b></h1>\r\n            <p>{{'trans.Wishlists_selected_by_company' | translate}}</p>\r\n          </div>\r\n          <div class=\"col-md-7 col-lg-8 pb-md-5\"></div>\r\n          <div class=\"col-lg-10 col-xl-8 col-md-12 \">\r\n            <div class=\"col-12 rounded-circle border py-2\" id=\"search\"\r\n              style=\"border-radius: 40px !important;background: white;\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-7 col-sm-12\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-6 d-flex border-right\" (click)=\"hidecollaps(3)\" href=\"#pablo\"\r\n                      id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                      <div>\r\n                        <img class=\"mt-1 mr-lg-2 mr-md-1\" src=\"../assets/Icons/PNG/Location_gray.png\" />\r\n                      </div>\r\n                      <div>\r\n                        <p class=\"mb-0\"><small> {{'trans.Destination' | translate}} </small> </p>\r\n                        <p class=\"mb-0 pbold\"> <small id=\"destinationLabel\">  {{'trans.Enter_destinantion' | translate}}</small><b></b></p>\r\n                      </div>\r\n\r\n                    </div>\r\n                    <div class=\"dropdown-menu dropdown-menu-right col-md-12\"\r\n                      style=\"margin-top: 30px !important; z-index: 10;\" aria-labelledby=\"navbarDropdownMenuLink\"\r\n                      (click)=\"getCity()\">\r\n\r\n                      <div class=\"row\">\r\n                        <div class=\"col-10\">\r\n                          <input type=\"text\" style=\"border: none; padding: 15px; margin-top: 0px;\"\r\n                            placeholder=\"Type destination...\" class=\"form-control\" id=\"city\" (keyup)=\"getDestination()\"/>\r\n                        </div>\r\n                        <div class=\"col-2 text-right\">\r\n                          <img src=\"../assets/Icons/PNG/GPI.png\" class=\"mt-2 mr-2\" />\r\n                        </div>\r\n                        <div class=\"col-12\">\r\n                          <hr class=\"mt-1\">\r\n                        </div>\r\n                        <div class=\"col-12\">\r\n                          <ul class=\"nav nav-pills nav-pills-danger justify-content-left\" role=\"tablist\">\r\n                            <li class=\"nav-item\">\r\n                              <a class=\"nav-link active px-3 py-1\" style=\"min-width:50px !important;\" data-toggle=\"tab\"\r\n                                href=\"#link1\" role=\"tablist\">\r\n                                  {{'trans.save' | translate}} {{'trans.Search' | translate}}\r\n                              </a>\r\n                            </li>\r\n                            <!-- <li class=\"nav-item\">\r\n                              <a class=\"nav-link px-3 py-1\" style=\"min-width:50px !important;\" data-toggle=\"tab\"\r\n                                href=\"#link2\" role=\"tablist\">\r\n                                Save Searches\r\n                              </a>\r\n                            </li> -->\r\n                          </ul>\r\n                        </div>\r\n                        <div class=\"tab-content tab-space col-12\">\r\n                          <div class=\"tab-pane active \" id=\"link1\" *ngIf=\"searches\">\r\n                            <div class=\"row\" *ngFor=\"let search of searches; let i = index;\">\r\n                              <div class=\"col-12 d-flex mx-md-3\">\r\n                                <div><img src=\"../assets/Icons/PNG/Location_gray.png\" class=\"mr-2\" /></div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-8\"\r\n                                  (click)=\"getSavedSearch(search.destination, search.from, search.to, search.rooms, search.adults, search.children, search.guests)\">\r\n                                    <h4 class=\"mb-0\"><b>{{ search.destination }}</b></h4>\r\n                                  </div>\r\n                                  <div class=\"col-md-2 text-right\">\r\n                                    <a class=\"text-danger\" (click)=\"delete(search.id)\"><i class=\"fa fa-trash\"\r\n                                        aria-hidden=\"true\"></i></a>\r\n                                  </div>\r\n                                  <div class=\"col-md-12\">\r\n                                    <p class=\"mb-0\"><b>{{moment(search.from).format('ddd')}},\r\n                                        {{moment(search.from).format('MMM Do, YYYY')}} -\r\n                                        {{moment(search.to).format('ddd')}}, {{moment(search.to).format('MMM Do,\r\n                                        YYYY')}}</b></p>\r\n                                  </div>\r\n                                  <div class=\"col-md-12\">\r\n                                    <p class=\"mb-0\"><b>{{ search.rooms }} , {{ search.adults }}, {{\r\n                                        search.children }} </b></p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-12\">\r\n                                <hr class=\"mt-1 mb-2\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                    </div>\r\n                    <div class=\"col-6 d-flex border-right\" data-toggle=\"collapse\" (click)=\"hidecollaps(1)\"\r\n                      href=\"#collapseExample\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\r\n                      <div>\r\n                        <img class=\"mt-1 mr-lg-2 mr-md-1\" src=\"../assets/Icons/PNG/Calendar.png\" />\r\n                      </div>\r\n                      <div>\r\n                        <p class=\"mb-0\"><small>Duration of stay</small> </p>\r\n                        <p class=\"mb-0 pbold\"> <small id=\"dateLabel\">{{'trans.Add_dates' | translate}} </small><b></b></p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-5 col-sm-12 mt-2 mt-md-0\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-7 col-lg-7 col-7 px-0 pl-3 ol-md-0 d-flex\" (click)=\"hidecollaps(2)\"\r\n                      data-toggle=\"collapse\" href=\"#collapseExample1\" role=\"button\" aria-expanded=\"false\"\r\n                      aria-controls=\"collapseExample1\">\r\n                      <div>\r\n                        <img class=\"mt-1 mr-lg-2 mr-md-1 \" src=\"../assets/Icons/PNG/User_Search.png\" />\r\n                      </div>\r\n                      <div>\r\n                        <p class=\"mb-0\"><small>Rooms and Guests</small> </p>\r\n                        <p class=\"mb-0 pbold\"> <small id=\"quantityLabel\">{{'trans.Add_rooms_and_guests' | translate}} </small><b></b></p>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-5 col-lg-5 col-5 text-right\">\r\n                      <a (click)=\"search()\" class=\"btn btn-danger btn-round px-1 px-md-2 py-2\"><i\r\n                          class=\"fa fa-search mr-1\"> </i> {{'trans.Search' | translate}}</a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-12\" *ngIf=\"user\">\r\n              <p class=\"mt-4\"><input type=\"checkbox\" class=\"mr-3\" id=\"save\" (change)=\"saveCheck()\"> {{'trans.save' | translate}} {{'trans.Search' | translate}} </p>\r\n            </div>\r\n            <div class=\"collapse col-md-8 mt-3\" id=\"collapseExample\"\r\n              style=\"position: absolute; background: white;border-radius: 0 2px 5px 0 rgb(0 0 0 / 26%);border-radius:10px;box-shadow: 0 2px 5px 0 rgb(0 0 0 / 26%)\">\r\n              <div class=\"row\">\r\n                <div class=\"col-12 \">\r\n                  <mat-form-field class=\"example-form-field \" hidden appearance=\"fill\">\r\n                    <!-- <mat-label>Date range</mat-label> -->\r\n                    <mat-date-range-input [formGroup]=\"campaignOne\" [rangePicker]=\"campaignOnePicker\" >\r\n                      <input matStartDate placeholder=\"Start date\" formControlName=\"start\">\r\n                      <input matEndDate placeholder=\"End date\" formControlName=\"end\" (dateChange)=\"dateRange()\">\r\n                    </mat-date-range-input>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"campaignOnePicker\"></mat-datepicker-toggle>\r\n                    <mat-date-range-picker #campaignOnePicker></mat-date-range-picker>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <p>\r\n                    <input type=\"checkbox\" class=\"mr-2\"> <b><span>{{'trans.Add_buffer_range' | translate}}</span></b>\r\n                  </p>\r\n                  <table class=\"table\">\r\n                    <tbody>\r\n                      <tr>\r\n                        <td>\r\n                          <h4 class=\"mt-3\"><b>Before</b></h4>\r\n                        </td>\r\n                        <td class=\"text-right\">\r\n                          <img src=\"../assets/Icons/PNG/Group 28.png\" width=\"25\" class=\"img-fluid h-50\"\r\n                            (click)=\"minus(0)\"><span class=\"mr-2 ml-2\"\r\n                            style=\"font-size:15;font-weight: bold;\">{{incval}}</span> <img width=\"25\" (click)=\"plus(0)\"\r\n                            src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid h-75\">\r\n                        </td>\r\n\r\n                      </tr>\r\n                      <tr>\r\n                        <td>\r\n                          <h4 class=\"mt-3\"><b>After</b></h4>\r\n                        </td>\r\n                        <td class=\"text-right\">\r\n                          <img src=\"../assets/Icons/PNG/Group 28.png\" width=\"25\" class=\"img-fluid h-50\"\r\n                            (click)=\"minus(1)\"><span class=\"mr-2 ml-2\"\r\n                            style=\"font-size:15;font-weight: bold;\">{{incval1}}</span> <img width=\"25\" (click)=\"plus(1)\"\r\n                            src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid h-75\">\r\n                        </td>\r\n\r\n                      </tr>\r\n\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <h4><b> {{'trans.Duration' | translate}}</b></h4>\r\n                  <p class=\"pb-0\">\r\n                    Sat, May 15, 2021\r\n                  </p>\r\n                  <p class=\"pb-0\">\r\n                    Mon, May 17, 2021 <a class=\"text-danger\"> (5 Night)</a>\r\n                  </p>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"collapse mt-3\" id=\"collapseExample1\" style=\"position: absolute;border-radius: 10px;\">\r\n              <div class=\"col-12\">\r\n                <div class=\"row justify-content-end\">\r\n                  <div class=\"col-md-4\"></div>\r\n                  <div class=\"col-md-8\"\r\n                    style=\" background: white;border-radius: 0 2px 5px 0 rgb(0 0 0 / 26%);border-radius: 10px;box-shadow: 0 2px 5px 0 rgb(0 0 0 / 26%)\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-12\">\r\n                        <h4 class=\"p-md-2\"><b>Select rooms and guests</b></h4>\r\n                      </div>\r\n                      <div class=\"col-12 \">\r\n                        <table class=\"table\">\r\n                          <tbody>\r\n                            <tr>\r\n                              <td>\r\n                                <h4 class=\"mt-3\"><b>Rooms</b></h4>\r\n                              </td>\r\n                              <td class=\"text-right\">\r\n                                <img src=\"../assets/Icons/PNG/Group 28.png\" width=\"25\" class=\"img-fluid h-50\"\r\n                                  (click)=\"minus(2)\"><span class=\"mr-2 ml-2\"\r\n                                  style=\"font-size:15;font-weight: bold;\">{{incval2}}</span> <img width=\"25\"\r\n                                  (click)=\"plus(2)\" src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid h-75\">\r\n                              </td>\r\n\r\n                            </tr>\r\n                            <tr>\r\n                              <td>\r\n                                <h4 class=\"mt-3\"><b> Adults {{ search.adults }}</b></h4>\r\n                              </td>\r\n                              <td class=\"text-right\">\r\n                                <img src=\"../assets/Icons/PNG/Group 28.png\" width=\"25\" class=\"img-fluid h-50\"\r\n                                  (click)=\"minus(3)\"><span class=\"mr-2 ml-2\"\r\n                                  style=\"font-size:15;font-weight: bold;\">{{incval3}}</span> <img width=\"25\"\r\n                                  (click)=\"plus(3)\" src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid h-75\">\r\n                              </td>\r\n\r\n                            </tr>\r\n                            <tr>\r\n                              <td>\r\n                                <h4 class=\"mb-0 mt-3\"><b>Children</b></h4>\r\n                                <p>0-17 year old</p>\r\n                              </td>\r\n                              <td class=\"text-right\">\r\n                                <img src=\"../assets/Icons/PNG/Group 28.png\" width=\"25\" class=\"img-fluid h-50\"\r\n                                  (click)=\"minus(4)\"><span class=\"mr-2 ml-2\"\r\n                                  style=\"font-size:15;font-weight: bold;\">{{incval4}}</span> <img width=\"25\"\r\n                                  (click)=\"plus(4)\" src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid h-75\">\r\n                              </td>\r\n\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n                      <div class=\"col-12\" *ngIf=\"incval4 > 0\">\r\n                        <h5><b>Age of children at check-out</b></h5>\r\n                        <p>Add the age of each child to get the best match for\r\n                          beds, room size and special prices.</p>\r\n                      </div>\r\n                      <div class=\"col-12\" *ngIf=\"incval4 > 0\">\r\n                        <table class=\"table\">\r\n                          <tbody>\r\n                            <tr *ngFor=\"let inc of childList; let i = index;\">\r\n                              <td>\r\n                                <h4 class=\"mt-3\">Child {{ i+1 }}</h4>\r\n                              </td>\r\n                              <td class=\"text-right\">\r\n                                <mat-form-field>\r\n                                  <mat-select placeholder=\"Select year\">\r\n                                    <mat-option value=\"0\">&lt; year old</mat-option>\r\n                                    <mat-option value=\"1\">1 year old</mat-option>\r\n                                    <mat-option value=\"2\">2 year old</mat-option>\r\n                                    <mat-option value=\"3\">3 year old</mat-option>\r\n                                    <mat-option value=\"4\">4 year old</mat-option>\r\n                                    <mat-option value=\"5\">5 year old</mat-option>\r\n                                    <mat-option value=\"6\">6 year old</mat-option>\r\n                                    <mat-option value=\"7\">7 year old</mat-option>\r\n                                    <mat-option value=\"8\">8 year old</mat-option>\r\n                                    <mat-option value=\"9\">9 year old</mat-option>\r\n                                    <mat-option value=\"10\">10 year old</mat-option>\r\n                                    <mat-option value=\"11\">11 year old</mat-option>\r\n                                    <mat-option value=\"12\">12 year old</mat-option>\r\n                                    <mat-option value=\"13\">13 year old</mat-option>\r\n                                    <mat-option value=\"14\">14 year old</mat-option>\r\n                                    <mat-option value=\"15\">15 year old</mat-option>\r\n                                    <mat-option value=\"16\">16 year old</mat-option>\r\n                                    <mat-option value=\"17\">17 year old</mat-option>\r\n                                  </mat-select>\r\n                                </mat-form-field>\r\n                              </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"container\" style=\"z-index: 2;\">\r\n      <div class=\"row justify-content-left\">\r\n        <div class=\"col-md-12 ml-auto mr-auto\">\r\n          <h2><b> {{'trans.Discover_nearby' | translate}}</b></h2>\r\n          <input type=\"text\" id=\"cityName\" hidden>\r\n        </div>\r\n        <div class=\"col-md-12 mt-4\">\r\n          <div class=\"row pb-md-5\" *ngIf=\"nearbyAds\">\r\n            <div class=\"col-md-3\" *ngFor=\"let ad of nearbyAds; let i = index;\">\r\n              <img class=\"img-fluid rounded \" src=\"http://oneroom3.crosip.com/{{ ad.attachments[0].path }}\" alt=\"img\"\r\n                (click)=\"getOfferDetails(ad.id)\">\r\n              <h4 class=\"mb-1\" style=\"font-weight:400;\"><b>{{ ad.title }}</b></h4>\r\n              <p>{{ ad.currency }}{{ ad.price }}</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row pb-md-5\" *ngIf=\"!nearbyAds\">\r\n            <div class=\"col-md-12 text-center\">\r\n              <h3 *ngIf=\"nearByMessage=='anable'\"><button (click)=\"getLocation()\" class=\"btn btn-danger\">Anable Location</button></h3>\r\n              <h3 *ngIf=\"nearByMessage!='anable'\">{{ nearByMessage }}</h3>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 text-center\" hidden>\r\n            <button class=\"btn btn-outline-danger\"> {{'trans.See_More' | translate}}</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"container\" style=\"z-index: 2;\">\r\n      <div class=\"row \">\r\n        <div class=\"col-12  p-5 pt-0\"\r\n          style=\"background-image: url('../assets/Images/Guest portal_Become a host.png'); background-position: center;background-repeat: no-repeat; background-size: cover;\">\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-md-10\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-8 col-lg-4 mb-4\">\r\n                  <h2 class=\" text-white\">{{'trans.Become_a_host' | translate}}\r\n                  </h2>\r\n                  <p class=\"text-white\">Earn extra income and unlock new\r\n                    opportunities be sharing your offers</p>\r\n                  <button class=\"btn btn-danger\" (click)=\"host()\">{{'trans.Become_a_host' | translate}}</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"container-fluid\" style=\"background-color: #FFFFFF!important; color: black;\">\r\n      <div class=\"container\">\r\n        <div class=\"row  justify-content-left \">\r\n          <div class=\"col-md-6 ml-auto mr-auto \" style=\"margin-top: 10vh;margin-bottom: 35vh;\">\r\n            <h3 class=\"\"><b> {{'trans.Join_over' | translate}} </b></h3>\r\n            <p class=\"mt-3\">Lorem Ipsum is simply dummy text of the printing and\r\n              typesetting industry. Lorem Ipsum the industry</p>\r\n            <a href=\"https://play.google.com/store/apps\" target=\"_blank\"\r\n              class=\"btn btn-default text-dark  mt-4 px-0 py-0 mr-3\"><img\r\n                src=\"../assets/Icons/PNG/playstore.png\" /></a>\r\n            <a href=\"https://www.apple.com/app-store/\" target=\"_blank\"\r\n              class=\"btn btn-default text-dark  mt-4 px-0 py-0\"><img src=\"../assets/Icons/PNG/Group 1349.png\" /></a>\r\n          </div>\r\n          <div class=\"col-md-6 text-right ml-auto mr-auto\"\r\n            style=\"background-image: url('../assets/Images/Host_App.png');background-position: center;background-repeat: no-repeat; background-size: cover;\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-guest_footer-web></app-guest_footer-web>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 77849:
/*!***************************************************************************!*\
  !*** ./src/app/Guest/Searchresult/Searchresult.component.html?ngResource ***!
  \***************************************************************************/
/***/ (function(module) {

module.exports = "<style>\r\n  .nav-tabs,\r\n  .nav-pills {\r\n    border: 0;\r\n    border-radius: 3px;\r\n    padding: 0 15px;\r\n    border-bottom: 1px solid;\r\n    border-color: #cbc2c2;\r\n  }\r\n\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active,\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active:focus,\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active:hover {\r\n    background-color: transparent !important;\r\n    color: #ed8935 !important;\r\n    border-radius: 0px;\r\n    border: none;\r\n    box-shadow: none;\r\n    border-bottom: 2px solid;\r\n  }\r\n\r\n  .dpscolor {\r\n    color: #728aad;\r\n  }\r\n\r\n  .divscroll::-webkit-scrollbar {\r\n    scrollbar-gutter: 2px;\r\n    width: 4px;\r\n    z-index: 10;\r\n    border-radius: 10px;\r\n    background: white;\r\n  }\r\n\r\n  .divscroll::-webkit-scrollbar-thumb {\r\n    background-color: #2d5286;\r\n  }\r\n\r\n  .divscroll1::-webkit-scrollbar {\r\n    scrollbar-gutter: 2px;\r\n    width: 4px;\r\n    z-index: 10;\r\n    border-radius: 10px;\r\n    background: white;\r\n  }\r\n\r\n  .divscroll1::-webkit-scrollbar-thumb {\r\n    background-color: #2d5286;\r\n  }\r\n\r\n  .table th,\r\n  .table td {\r\n    border-top: none !important;\r\n    padding: 5px;\r\n  }\r\n\r\n  agm-map {\r\n    height: 300px !important;\r\n    width: 100%;\r\n    /* This is really important*/\r\n  }\r\n</style>\r\n\r\n<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header lock-page header-filter\" filter-color=\"black\"\r\n    style=\"background-color:#fafafa; background-size: cover; background-position: top center;\">\r\n    <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\r\n    <div class=\"container mb-4\">\r\n      <div class=\"row justify-content-center\" style=\"margin-top: 8vh;\">\r\n        <!-- <div class=\"col-10 col-lg-10\">\r\n          <div class=\"col-12 rounded-circle border py-2\" id=\"search\"\r\n            style=\"border-radius: 40px !important;background: white;\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-7 col-sm-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-6 d-flex border-right\" (click)=\"hidecollaps(3)\" href=\"#pablo\"\r\n                    id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <div>\r\n                      <img class=\"mt-1 mr-lg-2 mr-md-1\" src=\"../assets/Icons/PNG/Location_gray.png\" />\r\n                    </div>\r\n                    <div>\r\n                      <p class=\"mb-0\"><small>Destination </small> </p>\r\n                      <p class=\"mb-0 pbold\"> <small>Enter Destination </small><b></b></p>\r\n                    </div>\r\n\r\n                  </div>\r\n                  <div class=\"dropdown-menu dropdown-menu-right col-md-12 \" style=\"z-index: 10;\"\r\n                    aria-labelledby=\"navbarDropdownMenuLink\">\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-10\">\r\n                        <input type=\"text\" style=\"border: none;    padding: 15px; margin-top: 0px;\"\r\n                          placeholder=\"type designation...\" class=\"form-control\" />\r\n                      </div>\r\n                      <div class=\"col-2 text-right\">\r\n                        <img src=\"../assets/Icons/PNG/GPI.png\" class=\"mt-2 mr-2\" />\r\n                      </div>\r\n                      <div class=\"col-12\">\r\n                        <hr class=\"mt-1\">\r\n                      </div>\r\n                      <div class=\"col-12\">\r\n                        <ul class=\"nav nav-pills nav-pills-danger justify-content-left\" role=\"tablist\">\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link active px-3 py-1\" style=\"min-width:50px !important;\" data-toggle=\"tab\"\r\n                              href=\"#link1\" role=\"tablist\">\r\n                              Recent Destinations\r\n                            </a>\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 py-1\" style=\"min-width:50px !important;\" data-toggle=\"tab\"\r\n                              href=\"#link2\" role=\"tablist\">\r\n                              Save Searches\r\n                            </a>\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n                      <div class=\"tab-content tab-space col-12\">\r\n                        <div class=\"tab-pane active \" id=\"link1\">\r\n\r\n                          <div class=\"col-12 d-flex mx-md-3\">\r\n                            <div><img src=\"../assets/Icons/PNG/Location_gray.png\" class=\"mr-2\" /></div>\r\n                            <div>\r\n                              <h4 class=\"mb-0\"><b>Chillon Castle</b></h4>\r\n                              <p class=\"mb-0\"><b>switzerland</b></p>\r\n                              <p class=\"mb-0\"><b>125 offers</b></p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-12\">\r\n                            <hr class=\"mt-1 mb-2\">\r\n                          </div>\r\n                          <div class=\"col-12 d-flex mx-md-3\">\r\n                            <div><img src=\"../assets/Icons/PNG/Location_gray.png\" class=\"mr-2\" /></div>\r\n                            <div>\r\n                              <h4 class=\"mb-0\"><b>Chillon Castle</b></h4>\r\n                              <p class=\"mb-0\"><b>switzerland</b></p>\r\n                              <p class=\"mb-0\"><b>125 offers</b></p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-12\">\r\n                            <hr class=\"mt-1 mb-2\">\r\n                          </div>\r\n                          <div class=\"col-12 d-flex mx-md-3\">\r\n                            <div><img src=\"../assets/Icons/PNG/Location_gray.png\" class=\"mr-2\" /></div>\r\n                            <div>\r\n                              <h4 class=\"mb-0\"><b>Chillon Castle</b></h4>\r\n                              <p class=\"mb-0\"><b>switzerland</b></p>\r\n                              <p class=\"mb-0\"><b>125 offers</b></p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-12\">\r\n                            <hr class=\"mt-1 mb-2\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n                  <div class=\"col-6 d-flex border-right\" data-toggle=\"collapse\" href=\"#collapseExample\" role=\"button\"\r\n                    aria-expanded=\"false\" (click)=\"hidecollaps(1)\" aria-controls=\"collapseExample\">\r\n                    <div>\r\n                      <img class=\"mt-1 mr-lg-2 mr-md-1\" src=\"../assets/Icons/PNG/Calendar.png\" />\r\n                    </div>\r\n                    <div>\r\n                      <p class=\"mb-0\"><small>Duration of stay</small> </p>\r\n                      <p class=\"mb-0 pbold\"> <small>\r\n                          Add dates</small><b></b></p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-5 col-sm-12 mt-2 mt-md-0\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-7 col-lg-7 col-7 px-0 pl-3 ol-md-0 d-flex\" (click)=\"hidecollaps(2)\"\r\n                    data-toggle=\"collapse\" href=\"#collapseExample1\" role=\"button\" aria-expanded=\"false\"\r\n                    aria-controls=\"collapseExample1\">\r\n                    <div>\r\n                      <img class=\"mt-1 mr-lg-2 mr-md-1 \" src=\"../assets/Icons/PNG/User_Search.png\" />\r\n                    </div>\r\n                    <div>\r\n                      <p class=\"mb-0\"><small>Rooms and Guests</small> </p>\r\n                      <p class=\"mb-0 pbold\"> <small>\r\n                          Add rooms and guests </small><b></b></p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-5 col-lg-5 col-5 text-right\">\r\n                    <button class=\"btn btn-danger btn-round px-1 px-md-2 py-2\"><i class=\"fa fa-search mr-1\">\r\n                      </i>Search</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"collapse col-md-6\" id=\"collapseExample\"\r\n            style=\"z-index: 100; position: absolute; background: white;border-radius: 0 2px 5px 0 rgb(0 0 0 / 26%);border-radius:10px;box-shadow: 0 2px 5px 0 rgb(0 0 0 / 26%)\">\r\n            <div class=\"row\">\r\n\r\n\r\n              <div class=\"col-12 \">\r\n                <mat-form-field class=\"example-form-field \" hidden appearance=\"fill\">\r\n                  \r\n                  <mat-date-range-input [formGroup]=\"campaignOne\" [rangePicker]=\"campaignOnePicker\"\r\n                    [comparisonStart]=\"campaignTwo.value.start\" [comparisonEnd]=\"campaignTwo.value.end\">\r\n                    <input matStartDate placeholder=\"Start date\" formControlName=\"start\">\r\n                    <input matEndDate placeholder=\"End date\" formControlName=\"end\">\r\n                  </mat-date-range-input>\r\n                  <mat-datepicker-toggle matSuffix [for]=\"campaignOnePicker\"></mat-datepicker-toggle>\r\n                  <mat-date-range-picker #campaignOnePicker></mat-date-range-picker>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <p>\r\n                  <input type=\"checkbox\" class=\"mr-2\"> <b><span>Add buffer range</span></b>\r\n                </p>\r\n                <table class=\"table\">\r\n                  <tbody>\r\n                    <tr>\r\n                      <td>\r\n                        <h4 class=\"mt-3\"><b>Before</b></h4>\r\n                      </td>\r\n                      <td class=\"text-right\">\r\n                        <img src=\"../assets/Icons/PNG/Group 28.png\" width=\"25\" class=\"img-fluid h-50\"\r\n                          (click)=\"minus(0)\"><span class=\"mr-2 ml-2\"\r\n                          style=\"font-size:15;font-weight: bold;\">{{incval}}</span> <img width=\"25\"\r\n                          src=\"../assets/Icons/PNG/Group 27.png\" (click)=\"plus(0)\" class=\"img-fluid h-75\">\r\n                      </td>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                        <h4 class=\"mt-3\"><b>After</b></h4>\r\n                      </td>\r\n                      <td class=\"text-right\">\r\n                        <img src=\"../assets/Icons/PNG/Group 28.png\" width=\"25\" class=\"img-fluid h-50\"\r\n                          (click)=\"minus(1)\"><span class=\"mr-2 ml-2\"\r\n                          style=\"font-size:15;font-weight: bold;\">{{incval1}}</span> <img width=\"25\"\r\n                          src=\"../assets/Icons/PNG/Group 27.png\" (click)=\"plus(1)\" class=\"img-fluid h-75\">\r\n                      </td>\r\n\r\n                    </tr>\r\n\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <h4><b>Duration</b></h4>\r\n                <p class=\"pb-0\">\r\n                  Sat, May 15, 2021\r\n                </p>\r\n                <p class=\"pb-0\">\r\n                  Mon, May 17, 2021 <a class=\"text-danger\"> (5 Night)</a>\r\n                </p>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"collapse col-md-12\" id=\"collapseExample1\"\r\n            style=\"z-index: 200; position: absolute;border-radius: 10px;\">\r\n            <div class=\"col-12\">\r\n              <div class=\"row justify-content-end\">\r\n                <div class=\"col-md-4\"></div>\r\n                <div class=\"col-md-8\"\r\n                  style=\" background: white;border-radius: 0 2px 5px 0 rgb(0 0 0 / 26%);border-radius: 10px;box-shadow: 0 2px 5px 0 rgb(0 0 0 / 26%)\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                      <h4><b>Select rooms and guests</b></h4>\r\n                    </div>\r\n                    <div class=\"col-12 \">\r\n                      <table class=\"table\">\r\n                        <tbody>\r\n                          <tr>\r\n                            <td>\r\n                              <h4 class=\"mt-3\"><b>Rooms</b></h4>\r\n                            </td>\r\n                            <td class=\"text-right\">\r\n                              <img src=\"../assets/Icons/PNG/Group 28.png\" width=\"25\" class=\"img-fluid h-50\"\r\n                                (click)=\"minus(2)\"><span class=\"mr-2 ml-2\"\r\n                                style=\"font-size:15;font-weight: bold;\">{{incval2}}</span> <img (click)=\"plus(2)\"\r\n                                width=\"25\" src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid h-75\">\r\n                            </td>\r\n\r\n                          </tr>\r\n                          <tr>\r\n                            <td>\r\n                              <h4 class=\"mt-3\"><b>Adults</b></h4>\r\n                            </td>\r\n                            <td class=\"text-right\">\r\n                              <img src=\"../assets/Icons/PNG/Group 28.png\" width=\"25\" class=\"img-fluid h-50\"\r\n                                (click)=\"minus(3)\"><span class=\"mr-2 ml-2\"\r\n                                style=\"font-size:15;font-weight: bold;\">{{incval3}}</span> <img width=\"25\"\r\n                                (click)=\"plus(3)\" src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid h-75\">\r\n                            </td>\r\n\r\n                          </tr>\r\n                          <tr>\r\n                            <td>\r\n                              <h4 class=\"mb-0 mt-3\"><b>Children</b></h4>\r\n                              <p>0-17 year old</p>\r\n                            </td>\r\n                            <td class=\"text-right\">\r\n                              <img src=\"../assets/Icons/PNG/Group 28.png\" width=\"25\" class=\"img-fluid h-50\"\r\n                                (click)=\"minus(4)\"><span class=\"mr-2 ml-2\"\r\n                                style=\"font-size:15;font-weight: bold;\">{{incval4}}</span> <img width=\"25\"\r\n                                (click)=\"plus(4)\" src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid h-75\">\r\n                            </td>\r\n\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                      <h5><b>Age of children at check-out</b></h5>\r\n                      <p>Add the age of each child to get the best match for\r\n                        beds, room size and special prices.</p>\r\n                    </div>\r\n                    <div class=\"col-12 \">\r\n                      <table class=\"table\">\r\n                        <tbody>\r\n\r\n                          <tr>\r\n                            <td>\r\n                              <h4 class=\"mt-3\"><b>Child 1</b></h4>\r\n                            </td>\r\n                            <td class=\"text-right\">\r\n                              <mat-form-field>\r\n                                <mat-select placeholder=\"Select year\">\r\n                                  <mat-option>\r\n                                    10 year old\r\n                                  </mat-option>\r\n                                  <mat-option>\r\n                                    11 year old\r\n                                  </mat-option>\r\n                                  <mat-option>\r\n                                    12 year old\r\n                                  </mat-option>\r\n                                </mat-select>\r\n                              </mat-form-field>\r\n                            </td>\r\n\r\n                          </tr>\r\n                          <tr>\r\n                            <td>\r\n                              <h4 class=\"mb-0 mt-3\"><b>Child 2</b></h4>\r\n                              <p></p>\r\n                            </td>\r\n                            <td class=\"text-right\">\r\n                              <mat-form-field>\r\n                                <mat-select placeholder=\"Select year\">\r\n                                  <mat-option>\r\n                                    10 year old\r\n                                  </mat-option>\r\n                                  <mat-option>\r\n                                    11 year old\r\n                                  </mat-option>\r\n                                  <mat-option>\r\n                                    12 year old\r\n                                  </mat-option>\r\n                                </mat-select>\r\n                              </mat-form-field>\r\n                            </td>\r\n\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-2\">\r\n          <p class=\"mt-4\"><input type=\"checkbox\" class=\"mr-3\">Save Search</p>\r\n        </div> -->\r\n\r\n        <div class=\"col-12 col-lg-12\" >\r\n          <div class=\"row\">\r\n            <div class=\"col-6\" *ngIf=\"city\">\r\n              <h3 class=\"mb-0 pl-0\"><b>{{ city }}</b></h3>\r\n              <p *ngIf=\"search\">{{ search.length }}   {{'trans.Offer' | translate}}</p>\r\n            </div>\r\n            <div class=\"col-6 text-right  mt-4\" *ngIf=\"search\">\r\n              <button class=\"btn btn-danger btn-round bg-white text-dark p-2\" style=\"box-shadow: none !important;\"\r\n                data-toggle=\"modal\" data-target=\".bd-example-modal-md\"><img src=\"../assets/Icons/PNG/Filter.png\"\r\n                  class=\"mr-2\" />Filters</button> &nbsp;\r\n              <button class=\"btn btn-danger btn-round px-1 px-md-2 py-2\" hidden><i class=\"fa fa-search mr-1\">\r\n                </i>   {{'trans.Start_your_Search' | translate}}</button>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-12 col-lg-12\">\r\n          \r\n          <div class=\"row  \">\r\n            \r\n            <div class=\"col-md-12 text-center mt-5\" *ngIf=\"!search\">\r\n              <h4>No Result Match </h4>\r\n            </div>\r\n            <div class=\"col-md-6 divscroll\" style=\"overflow: auto; height: 550px;overflow-x: hidden;\">\r\n              <div class=\"row\" *ngIf=\"search\">\r\n                <div class=\"col-12\" *ngFor=\"let s of search; let i = index;\">\r\n                  <div class=\"card mt-1 mb-1\" (click)=\"getOfferDetails(s.id)\">\r\n                    <div class=\"card-body py-0 px-md-3\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-3 p-0\"\r\n                          style=\"background-image: url('http://oneroom3.crosip.com/{{ s.attachments[0].path }}');background-size: cover; background-repeat: no-repeat;border-radius: 6px 0px 0px 6px;\">\r\n                        </div>\r\n                        <div class=\"col-md-9\">\r\n                          <div class=\"card-body\">\r\n\r\n                            <div class=\"row\">\r\n                              <div class=\"col-8\">\r\n                                <h4 class=\"mb-0\"><b>{{ s.title }}</b></h4>\r\n                              </div>\r\n                              <div class=\"col-4 text-right\">\r\n                                <span *ngIf=\"s.type == 'house'\"><img src=\"../assets/Icons/PNG/House.png\"></span>\r\n                                <span *ngIf=\"s.type == 'apartment'\"><img src=\"../assets/Icons/PNG/Apartment.png\"></span>\r\n                                <span *ngIf=\"s.type == 'hotel'\"><img src=\"../assets/Icons/PNG/hotel room.png\"></span>\r\n                              </div>\r\n                              <div class=\"col-12\">\r\n                                <div class=\"row\" *ngIf=\"s.discount_of_percentage\">\r\n                                  <div class=\"col-md-4\">\r\n                                    <p class=\"mb-0 dpscolor\"> {{'trans.Discount' | translate}}</p>\r\n                                  </div>\r\n                                  <div class=\"col-md-8\">\r\n                                    <p class=\"mb-0\">: {{ s.discount_of_percentage }}%</p>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-4\">\r\n                                    <p class=\"mb-0 dpscolor\"> {{'trans.Price' | translate}}</p>\r\n                                  </div>\r\n                                  <div class=\"col-md-8\">\r\n                                    <p class=\"mb-0\">:<del class=\"text-danger\">{{ s.currency }}{{ s.price }}</del> {{ s.currency }}{{ s.current_price\r\n                                      }}</p>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\" *ngIf=\"s.subsidiary\">\r\n                                  <div class=\"col-md-4\">\r\n                                    <p class=\"mb-0 dpscolor\"> {{'trans.Subsidiary' | translate}}</p>\r\n                                  </div>\r\n                                  <div class=\"col-md-8\">\r\n                                    <p class=\"mb-0\">: {{ s.subsidiary }}%</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- <div class=\"row\" *ngIf=\"!search\">\r\n                <div class=\"col-md-12\">\r\n                  No Records Found\r\n                </div>\r\n              </div> -->\r\n            </div>\r\n            <div class=\"col-md-6\" *ngIf=\"search.length>0\">\r\n              <div class=\"card mt-0\">\r\n                <!-- <div class=\"card-body p-2\">\r\n                  <div class=\"mapouter\" >\r\n                    <div class=\"gmap_canvas\"><iframe class=\"w-100 \" style=\"min-height: 530px;border-radius: 10px;\"\r\n                        id=\"gmap_canvas\"\r\n                        src=\"https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed\"\r\n                        frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe><a\r\n                        href=\"https://2piratebay.org\"></a><br>\r\n                      <style>\r\n                        .mapouter {\r\n                          position: relative;\r\n                          text-align: right;\r\n                          min-height: 530px;\r\n                          width: 100%;\r\n                        }\r\n                      </style>\r\n                      <style>\r\n                        .gmap_canvas {\r\n                          overflow: hidden;\r\n                          background: none !important;\r\n                          min-height: 530px;\r\n                          width: 100%;\r\n                        }\r\n                      </style>\r\n                    </div>\r\n                  </div> -->\r\n                  <div class=\"card-body p-2\" *ngIf=\"search\">\r\n                    <agm-map [latitude]=\"search[0].lat\" [longitude]=\"search[0].lan\">\r\n                      <agm-marker *ngFor=\"let s of search\" [latitude]=\"s.lat\" [longitude]=\"s.lan\"></agm-marker>\r\n                    </agm-map>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n             \r\n            <!-- <div class=\"col-12 text-center\">\r\n              <button class=\"btn btn-outline-danger btn-round\">More Active Offer</button>\r\n            </div> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"modal fade bd-example-modal-md\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n      aria-hidden=\"true\">\r\n      <div class=\"modal-dialog modal-md\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header mb-0 pb-0\">\r\n            <!-- <h5 class=\"modal-title\">Modal title</h5> -->\r\n            <!-- <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button> -->\r\n            <a class=\"btn-rounded-circle close\" href=\"javascript:void(0);\" data-dismiss=\"modal\" aria-label=\"Close\"\r\n              style=\"background: #e6e6e6; padding: 5px;border-radius: 50%;\"><img\r\n                src=\"../assets/Icons/PNG/Close.png\" /></a>\r\n\r\n          </div>\r\n          <div class=\"modal-body mt-0 mb-0\">\r\n            <h3 class=\"mt-0 pt-0\"><b>Filters</b></h3>\r\n            <div class=\"row divscroll\" style=\"height: 440px; overflow: auto;overflow-x: hidden;\">\r\n              <div class=\"col-md-12\">\r\n                <h4 class=\"mt-0 pt-0\"><b> {{'trans.Sort_results_by' | translate}}</b></h4>\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n                <table class=\"table\">\r\n                  <tbody>\r\n                    <tr>\r\n                      <td> {{'trans.Recommended' | translate}}</td>\r\n                      <td class=\"text-right\">\r\n                        <mat-radio-button></mat-radio-button>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td> {{'trans.Distance' | translate}}</td>\r\n                      <td class=\"text-right\">\r\n                        <mat-radio-button></mat-radio-button>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <hr>\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n                <h4><b> {{'trans.Filter_results_by' | translate}}</b></h4>\r\n                <table class=\"table\" hidden>\r\n                  <tbody>\r\n                    <tr>\r\n                      <td> {{'trans.Equipment_features' | translate}}<br> <small> {{'trans.Booking_a_recognized_offer' | translate}} </small></td>\r\n                      <td class=\"text-right\">\r\n                        <i class=\"fa fa-chevron-right\"></i>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n\r\n                <h5><b>  {{'trans.Equipment_features' | translate}}</b></h5>\r\n                <table class=\"table\">\r\n                  <tbody class=\"row divscroll1\" style=\"overflow: auto; height: 100px; overflow-x: hidden;\">\r\n                    <tr class=\"col-12\" *ngFor=\"let f of features\">\r\n                      <td width=\"150%\">{{ f.name }}</td>\r\n                      <td width=\"90%\" class=\"\">\r\n                        <mat-checkbox class=\"feature\" (change)=\"feature($event, f.id)\"></mat-checkbox>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <hr>\r\n\r\n                <h4><b> {{'trans.Property_Type' | translate}}</b></h4>\r\n                <table class=\"table\">\r\n                  <tbody>\r\n                    <tr>\r\n                      <td><img class=\"mr-2\" src=\"../assets/Icons/PNG/House_black.png\" /> {{'trans.House' | translate}}</td>\r\n                      <td class=\"text-right\">\r\n                        <mat-checkbox class=\"property\" id=\"house\" (change)=\"property($event, 'house')\"></mat-checkbox>\r\n                      </td>\r\n                    </tr>\r\n\r\n                    <tr>\r\n                      <td><img class=\"mr-2\" src=\"../assets/Icons/PNG/Apartment_black.png\" /> {{'trans.Apartment' | translate}}</td>\r\n                      <td class=\"text-right\">\r\n                        <mat-checkbox class=\"property\" id=\"apartment\" (change)=\"property($event, 'apartment')\">\r\n                        </mat-checkbox>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td><img class=\"mr-2\" src=\"../assets/Icons/PNG/Hotel room_black.png\" /> {{'trans.Hotel_Room' | translate}}</td>\r\n                      <td class=\"text-right\">\r\n                        <mat-checkbox class=\"property\" id=\"hotel\" (change)=\"property($event, 'hotel')\"></mat-checkbox>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <hr>\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <h5><b>{{'trans.Your_budget' | translate}} (for 1 night) </b></h5>\r\n                  </div>\r\n                  <div class=\"col-md-6 text-right\">\r\n                    <span><b>Min: </b> {{ min_price }}</span> &nbsp; <span><b>Max: {{ max_price }}</b> </span> \r\n                  </div>\r\n                </div>\r\n                <mat-slider hidden class=\"w-100\" thumbLabel [displayWith]=\"formatLabel\" tickInterval=\"500\" step=\"500\"\r\n                  min=\"50\" max=\"100000\" aria-label=\"units\"></mat-slider>\r\n                <div class=\"range-slider\">\r\n                  <input type=\"range\" step=\"1\" min=50 max=99999 value=50 id=\"minSlider\" (change)=\"minSlider()\">\r\n                  <input type=\"range\" step=\"1\" min=50 max=99999 value=500 id=\"maxSlider\" (change)=\"maxSlider()\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n                <hr>\r\n                <h5><b> {{'trans.Languages' | translate}}</b></h5>\r\n                <table class=\"table\">\r\n                  <tbody class=\"row divscroll1\" style=\"overflow: auto; height: 100px; overflow-x: hidden;\">\r\n                    <tr class=\"col-12\" *ngFor=\"let lang of languages\">\r\n                      <td width=\"150%\">{{ lang.name }}</td>\r\n                      <td width=\"90%\" class=\"\">\r\n                        <mat-checkbox class=\"language\" (change)=\"language($event, lang.id)\"></mat-checkbox>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <hr>\r\n              </div>\r\n              <div class=\"col-12 text-center\">\r\n                <button class=\"btn btn-danger btn-block\" (click)=\"advancedSearch()\"> {{'trans.Apply' | translate}}</button>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-guest_footer-web></app-guest_footer-web>\r\n  </div>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_Guest_Guest_module_ts.js.map