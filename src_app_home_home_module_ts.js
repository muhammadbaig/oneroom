"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["src_app_home_home_module_ts"],{

/***/ 45067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": function() { return /* binding */ HomeComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.html?ngResource */ 64715);
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
  selector: 'app-home-cmp',
  template: _home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], HomeComponent);


/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": function() { return /* binding */ HomeModule; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.module */ 36747);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-intl-tel-input */ 87555);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-socket-io */ 75083);
/* harmony import */ var _Guest_disputeDetails_disputedetails_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Guest/disputeDetails/disputedetails.component */ 60281);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @agm/core */ 61466);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 5721);
/* harmony import */ var _home_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.routing */ 65882);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ 45067);
/* harmony import */ var _Admin_gFooter_gFooter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Admin/gFooter/gFooter.component */ 39974);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





 // import { FlexLayoutModule } from '@angular/flex-layout';









var config = {
  url: 'https://onerooms-socket1.herokuapp.com:443',
  // url: 'http://localhost:3000/',
  options: {}
};

var HomeModule = /*#__PURE__*/(0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function HomeModule() {
  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HomeModule);
});

HomeModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(_home_routing__WEBPACK_IMPORTED_MODULE_4__.HomeRoutes), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _app_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_11__.NgxIntlTelInputModule, ngx_socket_io__WEBPACK_IMPORTED_MODULE_12__.SocketIoModule.forRoot(config), _agm_core__WEBPACK_IMPORTED_MODULE_13__.AgmCoreModule.forRoot({
    apiKey: 'AIzaSyA8S1HrLRkdH_tZAUFuIU9Fu4lDJac757s'
  }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule],
  declarations: [_Admin_gFooter_gFooter_component__WEBPACK_IMPORTED_MODULE_6__.GfooterComponent, _Guest_disputeDetails_disputedetails_component__WEBPACK_IMPORTED_MODULE_3__.DisputeDetailsComponent, _home_component__WEBPACK_IMPORTED_MODULE_5__.HomeComponent],
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe]
})], HomeModule);


/***/ }),

/***/ 65882:
/*!**************************************!*\
  !*** ./src/app/home/home.routing.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutes": function() { return /* binding */ HomeRoutes; }
/* harmony export */ });
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 45067);

var HomeRoutes = [{
  path: '',
  children: [{
    path: '',
    component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
  }]
}];

/***/ }),

/***/ 64715:
/*!*****************************************************!*\
  !*** ./src/app/home/home.component.html?ngResource ***!
  \*****************************************************/
/***/ (function(module) {

module.exports = "<style>\r\n  .form-control,\r\n  .is-focused .form-control {\r\n    background-image: none;\r\n    border: 1px solid #d4d2d2;\r\n    border-radius: 5px;\r\n    padding: 18px;\r\n    margin-top: 5px;\r\n    background: white;\r\n  }\r\n\r\n  .divscroll ::-webkit-scrollbar {\r\n    width: 5px;\r\n  }\r\n\r\n  #search p {\r\n    font-size: 15px;\r\n    line-height: 15px;\r\n  }\r\n\r\n  #search .pbold {\r\n    font-size: 12px;\r\n    font-weight: bolder !important;\r\n    color: black;\r\n  }\r\n\r\n  .nav-tabs,\r\n  .nav-pills {\r\n    border: 0;\r\n    border-radius: 3px;\r\n    padding: 0 15px;\r\n    /* border-bottom: 1px solid; */\r\n    border-color: #cbc2c2;\r\n  }\r\n\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active,\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active:focus,\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active:hover {\r\n    background-color: transparent !important;\r\n    color: #ed8935 !important;\r\n    border-radius: 0px;\r\n    border: none;\r\n    box-shadow: none;\r\n    border-bottom: 2px solid;\r\n  }\r\n\r\n  .mat-option:hover {\r\n    box-shadow: 0 4px 20px 0px rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(156 39 176 / 40%);\r\n    background: #f4584d !important;\r\n    color: #fff !important;\r\n  }\r\n</style>\r\n\r\n<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header lock-page header-filter\" filter-color=\"black\"\r\n    style=\"background-color:#fafafa; background-size: cover; background-position: top center;\">\r\n    <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\r\n    <div class=\"container-fluid\"\r\n      style=\"background-image: url('../assets/Images/Guest_Header.png'); background-position: center;background-repeat: no-repeat; background-size: cover;\">\r\n      <div class=\"container pb-md-5\">\r\n        <div class=\"row justify-content-left pb-md-5\">\r\n          <div class=\"col-md-5 col-lg-4 ml-auto mr-auto pb-md-5\" style=\"margin-top: 25vh;\">\r\n            <h1> <b> \r\n                {{'trans.Create_your_dream_book_now' | translate}}\r\n              </b></h1>\r\n            <p>{{'trans.Wishlists_selected_by_company' | translate}}</p>\r\n          </div>\r\n          <div class=\"col-md-7 col-lg-8 pb-md-5\"></div>\r\n          <div class=\"col-lg-10 col-xl-8 col-md-12 \">\r\n            <div class=\"col-12 rounded-circle border py-2\" id=\"search\"\r\n              style=\"border-radius: 40px !important;background: white;\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-7 col-sm-12\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-6 d-flex border-right\" (click)=\"hidecollaps(3)\" href=\"#pablo\"\r\n                      id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                      <div>\r\n                        <img class=\"mt-1 mr-lg-2 mr-md-1\" src=\"../assets/Icons/PNG/Location_gray.png\" />\r\n                      </div>\r\n                      <div>\r\n                        <p class=\"mb-0\"><small> {{'trans.Destination' | translate}} </small> </p>\r\n                        <p class=\"mb-0 pbold\"> <small id=\"destinationLabel\">  {{'trans.Enter_destinantion' | translate}}</small><b></b></p>\r\n                      </div>\r\n\r\n                    </div>\r\n                    <div class=\"dropdown-menu dropdown-menu-right col-md-12\"\r\n                      style=\"margin-top: 30px !important; z-index: 10;\" aria-labelledby=\"navbarDropdownMenuLink\"\r\n                      (click)=\"getCity()\">\r\n\r\n                      <div class=\"row\">\r\n                        <div class=\"col-10\">\r\n                          <input type=\"text\" style=\"border: none; padding: 15px; margin-top: 0px;\"\r\n                            placeholder=\"Type destination...\" class=\"form-control\" id=\"city\" (keyup)=\"getDestination()\"/>\r\n                        </div>\r\n                        <div class=\"col-2 text-right\">\r\n                          <img src=\"../assets/Icons/PNG/GPI.png\" class=\"mt-2 mr-2\" />\r\n                        </div>\r\n                        <div class=\"col-12\">\r\n                          <hr class=\"mt-1\">\r\n                        </div>\r\n                        <div class=\"col-12\">\r\n                          <ul class=\"nav nav-pills nav-pills-danger justify-content-left\" role=\"tablist\">\r\n                            <li class=\"nav-item\">\r\n                              <a class=\"nav-link active px-3 py-1\" style=\"min-width:50px !important;\" data-toggle=\"tab\"\r\n                                href=\"#link1\" role=\"tablist\">\r\n                                  {{'trans.save' | translate}} {{'trans.Search' | translate}}\r\n                              </a>\r\n                            </li>\r\n                            <!-- <li class=\"nav-item\">\r\n                              <a class=\"nav-link px-3 py-1\" style=\"min-width:50px !important;\" data-toggle=\"tab\"\r\n                                href=\"#link2\" role=\"tablist\">\r\n                                Save Searches\r\n                              </a>\r\n                            </li> -->\r\n                          </ul>\r\n                        </div>\r\n                        <div class=\"tab-content tab-space col-12\">\r\n                          <div class=\"tab-pane active \" id=\"link1\" *ngIf=\"searches\">\r\n                            <div class=\"row\" *ngFor=\"let search of searches; let i = index;\">\r\n                              <div class=\"col-12 d-flex mx-md-3\">\r\n                                <div><img src=\"../assets/Icons/PNG/Location_gray.png\" class=\"mr-2\" /></div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-8\"\r\n                                  (click)=\"getSavedSearch(search.destination, search.from, search.to, search.rooms, search.adults, search.children, search.guests)\">\r\n                                    <h4 class=\"mb-0\"><b>{{ search.destination }}</b></h4>\r\n                                  </div>\r\n                                  <div class=\"col-md-2 text-right\">\r\n                                    <a class=\"text-danger\" (click)=\"delete(search.id)\"><i class=\"fa fa-trash\"\r\n                                        aria-hidden=\"true\"></i></a>\r\n                                  </div>\r\n                                  <div class=\"col-md-12\">\r\n                                    <p class=\"mb-0\"><b>{{moment(search.from).format('ddd')}},\r\n                                        {{moment(search.from).format('MMM Do, YYYY')}} -\r\n                                        {{moment(search.to).format('ddd')}}, {{moment(search.to).format('MMM Do,\r\n                                        YYYY')}}</b></p>\r\n                                  </div>\r\n                                  <div class=\"col-md-12\">\r\n                                    <p class=\"mb-0\"><b>{{ search.rooms }} , {{ search.adults }}, {{\r\n                                        search.children }} </b></p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-12\">\r\n                                <hr class=\"mt-1 mb-2\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                    </div>\r\n                    <div class=\"col-6 d-flex border-right\" data-toggle=\"collapse\" (click)=\"hidecollaps(1)\"\r\n                      href=\"#collapseExample\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\r\n                      <div>\r\n                        <img class=\"mt-1 mr-lg-2 mr-md-1\" src=\"../assets/Icons/PNG/Calendar.png\" />\r\n                      </div>\r\n                      <div>\r\n                        <p class=\"mb-0\"><small>Duration of stay</small> </p>\r\n                        <p class=\"mb-0 pbold\"> <small id=\"dateLabel\">{{'trans.Add_dates' | translate}} </small><b></b></p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-5 col-sm-12 mt-2 mt-md-0\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-7 col-lg-7 col-7 px-0 pl-3 ol-md-0 d-flex\" (click)=\"hidecollaps(2)\"\r\n                      data-toggle=\"collapse\" href=\"#collapseExample1\" role=\"button\" aria-expanded=\"false\"\r\n                      aria-controls=\"collapseExample1\">\r\n                      <div>\r\n                        <img class=\"mt-1 mr-lg-2 mr-md-1 \" src=\"../assets/Icons/PNG/User_Search.png\" />\r\n                      </div>\r\n                      <div>\r\n                        <p class=\"mb-0\"><small>Rooms and Guests</small> </p>\r\n                        <p class=\"mb-0 pbold\"> <small id=\"quantityLabel\">{{'trans.Add_rooms_and_guests' | translate}} </small><b></b></p>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-5 col-lg-5 col-5 text-right\">\r\n                      <a (click)=\"search()\" class=\"btn btn-danger btn-round px-1 px-md-2 py-2\"><i\r\n                          class=\"fa fa-search mr-1\"> </i> {{'trans.Search' | translate}}</a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-12\" *ngIf=\"user\">\r\n              <p class=\"mt-4\"><input type=\"checkbox\" class=\"mr-3\" id=\"save\" (change)=\"saveCheck()\"> {{'trans.save' | translate}} {{'trans.Search' | translate}} </p>\r\n            </div>\r\n            <div class=\"collapse col-md-8 mt-3\" id=\"collapseExample\"\r\n              style=\"position: absolute; background: white;border-radius: 0 2px 5px 0 rgb(0 0 0 / 26%);border-radius:10px;box-shadow: 0 2px 5px 0 rgb(0 0 0 / 26%)\">\r\n              <div class=\"row\">\r\n                <div class=\"col-12 \">\r\n                  <mat-form-field class=\"example-form-field \" hidden appearance=\"fill\">\r\n                    <!-- <mat-label>Date range</mat-label> -->\r\n                    <mat-date-range-input [formGroup]=\"campaignOne\" [rangePicker]=\"campaignOnePicker\" >\r\n                      <input matStartDate placeholder=\"Start date\" formControlName=\"start\">\r\n                      <input matEndDate placeholder=\"End date\" formControlName=\"end\" (dateChange)=\"dateRange()\">\r\n                    </mat-date-range-input>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"campaignOnePicker\"></mat-datepicker-toggle>\r\n                    <mat-date-range-picker #campaignOnePicker></mat-date-range-picker>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <p>\r\n                    <input type=\"checkbox\" class=\"mr-2\"> <b><span>{{'trans.Add_buffer_range' | translate}}</span></b>\r\n                  </p>\r\n                  <table class=\"table\">\r\n                    <tbody>\r\n                      <tr>\r\n                        <td>\r\n                          <h4 class=\"mt-3\"><b>Before</b></h4>\r\n                        </td>\r\n                        <td class=\"text-right\">\r\n                          <img src=\"../assets/Icons/PNG/Group 28.png\" width=\"25\" class=\"img-fluid h-50\"\r\n                            (click)=\"minus(0)\"><span class=\"mr-2 ml-2\"\r\n                            style=\"font-size:15;font-weight: bold;\">{{incval}}</span> <img width=\"25\" (click)=\"plus(0)\"\r\n                            src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid h-75\">\r\n                        </td>\r\n\r\n                      </tr>\r\n                      <tr>\r\n                        <td>\r\n                          <h4 class=\"mt-3\"><b>After</b></h4>\r\n                        </td>\r\n                        <td class=\"text-right\">\r\n                          <img src=\"../assets/Icons/PNG/Group 28.png\" width=\"25\" class=\"img-fluid h-50\"\r\n                            (click)=\"minus(1)\"><span class=\"mr-2 ml-2\"\r\n                            style=\"font-size:15;font-weight: bold;\">{{incval1}}</span> <img width=\"25\" (click)=\"plus(1)\"\r\n                            src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid h-75\">\r\n                        </td>\r\n\r\n                      </tr>\r\n\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <h4><b> {{'trans.Duration' | translate}}</b></h4>\r\n                  <p class=\"pb-0\">\r\n                    Sat, May 15, 2021\r\n                  </p>\r\n                  <p class=\"pb-0\">\r\n                    Mon, May 17, 2021 <a class=\"text-danger\"> (5 Night)</a>\r\n                  </p>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"collapse mt-3\" id=\"collapseExample1\" style=\"position: absolute;border-radius: 10px;\">\r\n              <div class=\"col-12\">\r\n                <div class=\"row justify-content-end\">\r\n                  <div class=\"col-md-4\"></div>\r\n                  <div class=\"col-md-8\"\r\n                    style=\" background: white;border-radius: 0 2px 5px 0 rgb(0 0 0 / 26%);border-radius: 10px;box-shadow: 0 2px 5px 0 rgb(0 0 0 / 26%)\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-12\">\r\n                        <h4 class=\"p-md-2\"><b>Select rooms and guests</b></h4>\r\n                      </div>\r\n                      <div class=\"col-12 \">\r\n                        <table class=\"table\">\r\n                          <tbody>\r\n                            <tr>\r\n                              <td>\r\n                                <h4 class=\"mt-3\"><b>Rooms</b></h4>\r\n                              </td>\r\n                              <td class=\"text-right\">\r\n                                <img src=\"../assets/Icons/PNG/Group 28.png\" width=\"25\" class=\"img-fluid h-50\"\r\n                                  (click)=\"minus(2)\"><span class=\"mr-2 ml-2\"\r\n                                  style=\"font-size:15;font-weight: bold;\">{{incval2}}</span> <img width=\"25\"\r\n                                  (click)=\"plus(2)\" src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid h-75\">\r\n                              </td>\r\n\r\n                            </tr>\r\n                            <tr>\r\n                              <td>\r\n                                <h4 class=\"mt-3\"><b> Adults {{ search.adults }}</b></h4>\r\n                              </td>\r\n                              <td class=\"text-right\">\r\n                                <img src=\"../assets/Icons/PNG/Group 28.png\" width=\"25\" class=\"img-fluid h-50\"\r\n                                  (click)=\"minus(3)\"><span class=\"mr-2 ml-2\"\r\n                                  style=\"font-size:15;font-weight: bold;\">{{incval3}}</span> <img width=\"25\"\r\n                                  (click)=\"plus(3)\" src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid h-75\">\r\n                              </td>\r\n\r\n                            </tr>\r\n                            <tr>\r\n                              <td>\r\n                                <h4 class=\"mb-0 mt-3\"><b>Children</b></h4>\r\n                                <p>0-17 year old</p>\r\n                              </td>\r\n                              <td class=\"text-right\">\r\n                                <img src=\"../assets/Icons/PNG/Group 28.png\" width=\"25\" class=\"img-fluid h-50\"\r\n                                  (click)=\"minus(4)\"><span class=\"mr-2 ml-2\"\r\n                                  style=\"font-size:15;font-weight: bold;\">{{incval4}}</span> <img width=\"25\"\r\n                                  (click)=\"plus(4)\" src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid h-75\">\r\n                              </td>\r\n\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n                      <div class=\"col-12\" *ngIf=\"incval4 > 0\">\r\n                        <h5><b>Age of children at check-out</b></h5>\r\n                        <p>Add the age of each child to get the best match for\r\n                          beds, room size and special prices.</p>\r\n                      </div>\r\n                      <div class=\"col-12\" *ngIf=\"incval4 > 0\">\r\n                        <table class=\"table\">\r\n                          <tbody>\r\n                            <tr *ngFor=\"let inc of childList; let i = index;\">\r\n                              <td>\r\n                                <h4 class=\"mt-3\">Child {{ i+1 }}</h4>\r\n                              </td>\r\n                              <td class=\"text-right\">\r\n                                <mat-form-field>\r\n                                  <mat-select placeholder=\"Select year\">\r\n                                    <mat-option value=\"0\">&lt; year old</mat-option>\r\n                                    <mat-option value=\"1\">1 year old</mat-option>\r\n                                    <mat-option value=\"2\">2 year old</mat-option>\r\n                                    <mat-option value=\"3\">3 year old</mat-option>\r\n                                    <mat-option value=\"4\">4 year old</mat-option>\r\n                                    <mat-option value=\"5\">5 year old</mat-option>\r\n                                    <mat-option value=\"6\">6 year old</mat-option>\r\n                                    <mat-option value=\"7\">7 year old</mat-option>\r\n                                    <mat-option value=\"8\">8 year old</mat-option>\r\n                                    <mat-option value=\"9\">9 year old</mat-option>\r\n                                    <mat-option value=\"10\">10 year old</mat-option>\r\n                                    <mat-option value=\"11\">11 year old</mat-option>\r\n                                    <mat-option value=\"12\">12 year old</mat-option>\r\n                                    <mat-option value=\"13\">13 year old</mat-option>\r\n                                    <mat-option value=\"14\">14 year old</mat-option>\r\n                                    <mat-option value=\"15\">15 year old</mat-option>\r\n                                    <mat-option value=\"16\">16 year old</mat-option>\r\n                                    <mat-option value=\"17\">17 year old</mat-option>\r\n                                  </mat-select>\r\n                                </mat-form-field>\r\n                              </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"container\" style=\"z-index: 2;\">\r\n      <div class=\"row justify-content-left\">\r\n        <div class=\"col-md-12 ml-auto mr-auto\">\r\n          <h2><b> {{'trans.Discover_nearby' | translate}}</b></h2>\r\n          <input type=\"text\" id=\"cityName\" hidden>\r\n        </div>\r\n        <div class=\"col-md-12 mt-4\">\r\n          <div class=\"row pb-md-5\" *ngIf=\"nearbyAds\">\r\n            <div class=\"col-md-3\" *ngFor=\"let ad of nearbyAds; let i = index;\">\r\n              <img class=\"img-fluid rounded \" src=\"http://oneroom3.crosip.com/{{ ad.attachments[0].path }}\" alt=\"img\"\r\n                (click)=\"getOfferDetails(ad.id)\">\r\n              <h4 class=\"mb-1\" style=\"font-weight:400;\"><b>{{ ad.title }}</b></h4>\r\n              <p>{{ ad.currency }}{{ ad.price }}</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row pb-md-5\" *ngIf=\"!nearbyAds\">\r\n            <div class=\"col-md-12 text-center\">\r\n              <h3 *ngIf=\"nearByMessage=='anable'\"><button (click)=\"getLocation()\" class=\"btn btn-danger\">Anable Location</button></h3>\r\n              <h3 *ngIf=\"nearByMessage!='anable'\">{{ nearByMessage }}</h3>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 text-center\" hidden>\r\n            <button class=\"btn btn-outline-danger\"> {{'trans.See_More' | translate}}</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"container\" style=\"z-index: 2;\">\r\n      <div class=\"row \">\r\n        <div class=\"col-12  p-5 pt-0\"\r\n          style=\"background-image: url('../assets/Images/Guest portal_Become a host.png'); background-position: center;background-repeat: no-repeat; background-size: cover;\">\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-md-10\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-8 col-lg-4 mb-4\">\r\n                  <h2 class=\" text-white\">{{'trans.Become_a_host' | translate}}\r\n                  </h2>\r\n                  <p class=\"text-white\">Earn extra income and unlock new\r\n                    opportunities be sharing your offers</p>\r\n                  <button class=\"btn btn-danger\" (click)=\"host()\">{{'trans.Become_a_host' | translate}}</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"container-fluid\" style=\"background-color: #FFFFFF!important; color: black;\">\r\n      <div class=\"container\">\r\n        <div class=\"row  justify-content-left \">\r\n          <div class=\"col-md-6 ml-auto mr-auto \" style=\"margin-top: 10vh;margin-bottom: 35vh;\">\r\n            <h3 class=\"\"><b> {{'trans.Join_over' | translate}} </b></h3>\r\n            <p class=\"mt-3\">Lorem Ipsum is simply dummy text of the printing and\r\n              typesetting industry. Lorem Ipsum the industry</p>\r\n            <a href=\"https://play.google.com/store/apps\" target=\"_blank\"\r\n              class=\"btn btn-default text-dark  mt-4 px-0 py-0 mr-3\"><img\r\n                src=\"../assets/Icons/PNG/playstore.png\" /></a>\r\n            <a href=\"https://www.apple.com/app-store/\" target=\"_blank\"\r\n              class=\"btn btn-default text-dark  mt-4 px-0 py-0\"><img src=\"../assets/Icons/PNG/Group 1349.png\" /></a>\r\n          </div>\r\n          <div class=\"col-md-6 text-right ml-auto mr-auto\"\r\n            style=\"background-image: url('../assets/Images/Host_App.png');background-position: center;background-repeat: no-repeat; background-size: cover;\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-footer-web></app-footer-web>\r\n  </div>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map