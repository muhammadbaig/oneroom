"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["src_app_Host_Host_module_ts"],{

/***/ 45409:
/*!********************************************************************!*\
  !*** ./src/app/Admin/layouts/host-footer/host_footer.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "host_footerComponent": function() { return /* binding */ host_footerComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _host_footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./host_footer.component.html?ngResource */ 77055);
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




var host_footerComponent = /*#__PURE__*/function () {
  function host_footerComponent() {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, host_footerComponent);

    this.test = new Date();
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(host_footerComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return host_footerComponent;
}();

host_footerComponent.ctorParameters = function () {
  return [];
};

host_footerComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-host_footer-web',
  template: _host_footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], host_footerComponent);


/***/ }),

/***/ 44265:
/*!*********************************************!*\
  !*** ./src/app/Host/Home/Home.component.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": function() { return /* binding */ HomeComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _Home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.component.html?ngResource */ 88266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 18259);
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






var HomeComponent = /*#__PURE__*/function () {
  function HomeComponent(cdf, dataService) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomeComponent);

    this.cdf = cdf;
    this.dataService = dataService;
    this.test = new Date();
    this.step = 0;
    this.plans = null;
    this.images = [{
      path: './assets/Images/Darrel Sing.png'
    }, {
      path: './assets/Images/Darrel Sing.png'
    }, {
      path: './assets/Images/Darrel Sing.png'
    }, {
      path: './assets/Images/Darrel Sing.png'
    }, {
      path: './assets/Images/Darrel Sing.png'
    }, {
      path: './assets/Images/Darrel Sing.png'
    }, {
      path: './assets/Images/Darrel Sing.png'
    }, {
      path: './assets/Images/Darrel Sing.png'
    }];
    this.imagesForSlider = [{
      path: './assets/Images/Darrel Sing.png'
    }, {
      path: './assets/Images/Darrel Sing.png'
    }, {
      path: './assets/Images/Darrel Sing.png'
    }, {
      path: './assets/Images/Darrel Sing.png'
    }, {
      path: './assets/Images/Darrel Sing.png'
    }, {
      path: './assets/Images/Darrel Sing.png'
    }, {
      path: './assets/Images/Darrel Sing.png'
    }];
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(HomeComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this.dataService.get('host/get_plan').then(function (result) {
        _this.plans = result.data;

        _this.cdf.detectChanges();
      });
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('lock-page');
      body.classList.add('off-canvas-sidebar');
      var card = document.getElementsByClassName('card')[0];
      setTimeout(function () {}, 700);
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('lock-page');
      body.classList.remove('off-canvas-sidebar');
    }
  }, {
    key: "openSignin",
    value: function openSignin() {
      sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
        position: 'center',
        icon: 'error',
        text: 'Please create your account first. If you already have an account, please sign in.',
        showConfirmButton: false,
        timer: 2500
      });
    }
  }]);

  return HomeComponent;
}();

HomeComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef
  }, {
    type: src_app_services_data_services__WEBPACK_IMPORTED_MODULE_3__.DataService
  }];
};

HomeComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-Home-cmp',
  template: _Home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], HomeComponent);


/***/ }),

/***/ 87661:
/*!*************************************!*\
  !*** ./src/app/Host/Host.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HostModule": function() { return /* binding */ HostModule; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.module */ 36747);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _Host_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Host.routing */ 62884);
/* harmony import */ var _Home_Home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Home/Home.component */ 44265);
/* harmony import */ var _Admin_layouts_host_footer_host_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Admin/layouts/host-footer/host_footer.component */ 45409);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 5721);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var HostModule = /*#__PURE__*/(0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function HostModule() {
  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HostModule);
});

HostModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(_Host_routing__WEBPACK_IMPORTED_MODULE_3__.HostRoutes), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _app_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule],
  declarations: [_Home_Home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent, _Admin_layouts_host_footer_host_footer_component__WEBPACK_IMPORTED_MODULE_5__.host_footerComponent // BookdetailsComponent,
  // OfferlistComponent,
  // CreateofferComponent,
  // OfferdetailsComponent,
  ],
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe]
})], HostModule);


/***/ }),

/***/ 62884:
/*!**************************************!*\
  !*** ./src/app/Host/Host.routing.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HostRoutes": function() { return /* binding */ HostRoutes; }
/* harmony export */ });
/* harmony import */ var _Home_Home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home/Home.component */ 44265);

var HostRoutes = [{
  path: '',
  children: [{
    path: 'home',
    component: _Home_Home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
  }]
}];

/***/ }),

/***/ 77055:
/*!*********************************************************************************!*\
  !*** ./src/app/Admin/layouts/host-footer/host_footer.component.html?ngResource ***!
  \*********************************************************************************/
/***/ (function(module) {

module.exports = "<footer class=\"footer \" style=\"background-color: #FFFFFF!important; color: black;border-top: 1px solid #e5e5e5;\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2 text-left\">\r\n        <div>      \r\n           <img src=\"./assets/Icons/SVG/logo.svg\" style=\"width:90%\"/>\r\n        </div>\r\n        <div>\r\n          <p class=\"mt-2\">\r\n            Lorem Ipsum is simply dummy text of \r\n            the printing and typesetting industry. \r\n            Lorem Ipsum the industry          \r\n          </p>\r\n        \r\n          <p class=\"mt-4\"> \r\n            <a class=\"btn btn-outline btn-danger btn-round px-2 py-1 facebookbg\" target=\"_blank\" href=\"https://www.facebook.com/\"><i class=\"facebookc fa fa-facebook\" ria-hidden=\"true\"></i></a>\r\n            <a class=\"btn btn-outline btn-danger btn-round px-1 py-1 twitterbg\" target=\"_blank\" href=\"https://twitter.com/\"><i class=\"twitterc fa fa-twitter\"  aria-hidden=\"true\"></i></a>\r\n            <a class=\"btn btn-outline btn-danger btn-round px-1 py-1 instagrambg\" target=\"_blank\" href=\"https://www.instagram.com/\"><i class=\"instagramc fa fa-instagram\"  aria-hidden=\"true\"></i></a>\r\n       </p>\r\n          <p>© 2021 OneRooms, Inc.</p>\r\n        </div>\r\n        <div>\r\n          <span style=\"top: 1572px;left: 251px; width: 43px; height: 43px;background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;background: #FFFFFF 0% 0% no-repeat padding-box;opacity: 1;\"></span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-1\"></div>\r\n      <div class=\"col-md-3 text-left\">\r\n        <h4 class=\"font-weight-bolder\" ><b>  {{'trans.about_us' | translate}}</b></h4>\r\n        <p class=\"mt-3 mb-2\"><a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.How_oneRooms_works' | translate}} </a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Careers' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Newsroom' | translate}}</a></p>\r\n        <p class=\"mb-2\" ><a href=\"\" class=\"text-dark\"> {{'trans.about_us' | translate}}</a> </p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/blog\" class=\"text-dark\"> {{'trans.Latest_Blog' | translate}}</a></p>\r\n      </div>\r\n      <div class=\"col-md-3 text-left\">\r\n        <h4 class=\"font-weight-bolder\"><b> {{'trans.Host' | translate}} </b> </h4>\r\n        <p class=\"mt-3 mb-2\"> <a href=\"#/Website/host\" class=\"text-dark\"> {{'trans.Host_your_offer' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Responsible_Hosting' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\">{{'trans.Resource_Centre' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\">{{'trans.Community_centre' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Dedicated_support_system' | translate}}</a></p>\r\n       </div>\r\n      <div class=\"col-md-3 text-left\">\r\n        <h4 class=\"font-weight-bolder\">\r\n          <b> {{'trans.Support' | translate}}</b>\r\n        </h4>\r\n        <p class=\"mt-3 mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Our_covid_19_Response' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Help_center' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\">{{'trans.Cancellation_options' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Neighbourhood_Support' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Trust_Safety' | translate}}</a></p>\r\n      </div>\r\n    </div>\r\n  </div> \r\n</footer>\r\n<div class=\"container-fluid\" style=\"background-color: #FFFFFF!important; color: black;border-top: 1px solid #e5e5e5;\">\r\n  <div class=\"container\" style=\"    padding-top: 4.5vh !important;padding-bottom: 4.5vh;\">\r\n    <div class=\"col-12 pl-0\">\r\n      <div class=\"list-inline\">\r\n        <a href=\"#\" class=\"list-inline-item text-dark\" [routerLink]=\"['/Website/privacy']\"><small> {{'trans.Terms_of_use' | translate}} </small></a>\r\n        <a href=\"#\" class=\"list-inline-item text-dark px-3\" [routerLink]=\"['/Website/privacy']\"><small> {{'trans.Privacy_portal' | translate}}</small> </a>\r\n        <!-- <a href=\"#\" class=\"list-inline-item text-dark\" [routerLink]=\"['/Website/privacy']\"><small> {{'trans.Cookie_preference' | translate}}</small></a> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 88266:
/*!**********************************************************!*\
  !*** ./src/app/Host/Home/Home.component.html?ngResource ***!
  \**********************************************************/
/***/ (function(module) {

module.exports = "<style>\r\n  /* .form-control, .is-focused .form-control {\r\n    background-image: none;\r\n    border: 1px solid #d4d2d2;\r\n    border-radius: 5px;\r\n    padding: 18px;\r\n    margin-top: 5px;\r\n    background: white;\r\n} */\r\n\r\n  /* .divscroll ::-webkit-scrollbar {\r\n    width: 5px;\r\n  } */\r\n\r\n  .divscroll::-webkit-scrollbar {\r\n    scrollbar-gutter: 2px;\r\n    width: 4px;\r\n    z-index: 10;\r\n    border-radius: 10px;\r\n    background: white;\r\n  }\r\n\r\n  .divscroll::-webkit-scrollbar-thumb {\r\n    background-color: #2d5286;\r\n  }\r\n\r\n  .verticalcenter {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n  }\r\n\r\n  /* .divscroll ::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); \r\n    border-radius: 10px;\r\n}\r\n                    \r\n.divscroll ::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); \r\n} */\r\n</style>\r\n\r\n<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header lock-page header-filter\" filter-color=\"black\"\r\n    style=\"background-color:#fafafa; background-size: cover; background-position: top center;\">\r\n    <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\r\n    <div class=\"container-fluid\"\r\n      style=\"background-image: url('../assets/Images/Host_Header.png'); background-position: center;background-repeat: no-repeat; background-size: cover;\">\r\n      <div class=\"container pb-md-5\">\r\n        <div class=\"row justify-content-left pb-md-5\">\r\n          <div class=\"col-md-5 col-lg-4 ml-auto mr-auto pb-md-5\" style=\"margin-top: 25vh;\">\r\n            <h1> <b> {{'trans.List_your_offers_on_OneRooms' | translate}}</b></h1>\r\n            <p>{{'trans.Registration_can_take' | translate}}\r\n</p>\r\n            <a class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\".try-offers\">  {{'trans.Try_offers' | translate}}</a>\r\n          </div>\r\n          <div class=\"col-md-7 col-lg-8 pb-md-5\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-left\">\r\n        <div class=\"col-md-6 col-lg-5 ml-auto mr-auto\">\r\n          <h2><b> {{'trans.Wherever_you_go' | translate}} </b></h2>\r\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting\r\n            industry. Lorem Ipsum has been the industry's standard.</p>\r\n        </div>\r\n        <div class=\"col-lg-7 col-md-6\"></div>\r\n        <div class=\"col-md-12 mt-4\">\r\n          <div class=\"row pb-md-5\">\r\n            <div class=\"col-md-4\">\r\n              <img class=\"img-fluid rounded \" src=\"./assets/Icons/PNG/List any  type of offer.png\">\r\n              <h4 class=\"mt-4\" style=\"font-weight:400;\"><b>{{'trans.List_any_type_of_offer' | translate}}</b></h4>\r\n              <p>Lorem Ipsum is simply dummy text of the\r\n                printing & typesetting industry. Lorem\r\n                Ipsum has been the industry s dummy\r\n                standard</p>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <img class=\"img-fluid rounded \" src=\"./assets/Icons/PNG/Easily Import Details.png\">\r\n              <h4 class=\"mt-4\" style=\"font-weight:400;\"><b> {{'trans.List_any_type_of_offer' | translate}}</b></h4>\r\n              <p>Lorem Ipsum is simply dummy text of the\r\n                printing & typesetting industry. Lorem\r\n                Ipsum has been the industry s dummy\r\n                standard</p>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <img class=\"img-fluid rounded \" src=\"./assets/Icons/PNG/Step-by-step guidance.png\">\r\n              <h4 class=\"mt-4\" style=\"font-weight:400;\"><b>{{'trans.Step_by_step_guide' | translate}}</b></h4>\r\n              <p>Lorem Ipsum is simply dummy text of the\r\n                printing & typesetting industry. Lorem\r\n                Ipsum has been the industry s dummy\r\n                standard</p>\r\n            </div>\r\n\r\n          </div>\r\n          <hr>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n      <div class=\"row justify-content-left\">\r\n        <div class=\"col-md-6 col-lg-5 ml-auto mr-auto\">\r\n          <h2><b> {{'trans.You_can_host_anything_anywhere' | translate}} </b></h2>\r\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting\r\n            industry. Lorem Ipsum has been the industry's standard.</p>\r\n        </div>\r\n        <div class=\"col-lg-7 col-md-6\"></div>\r\n        <div class=\"col-10 mt-4\">\r\n          <div class=\"row \">\r\n            <div class=\"col-md-6\">\r\n              <img class=\"img-fluid rounded \" src=\"./assets/Images/About_01.png\">\r\n              <h4 class=\"mt-4\">I love hosting my eco home so people can\r\n                connect with nature and their loved ones.\r\n                -Taking care of guests in our offer.</h4>\r\n              <p class=\"mt-3 mb-0\">\r\n                <b>Vinna Gupta</b>\r\n              </p>\r\n              <p class=\"small\">\r\n                Host in Chiang Mai\r\n              </p>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <img class=\"img-fluid rounded\" style=\"height:57% !important;width: 100%;\"\r\n                src=\"./assets/Images/Darrel Sing.png\">\r\n              <h4 class=\"mt-4\">I love hosting my eco home so people can\r\n                connect with nature and their loved ones.\r\n                -Taking care of guests in our offer.</h4>\r\n              <p class=\"mt-3 mb-0\">\r\n                <b>Darrel Sing</b>\r\n              </p>\r\n              <p class=\"small\">\r\n                Host in Atlanta\r\n              </p>\r\n            </div>\r\n            <!-- <mdb-carousel [isControls]=\"false\" #carousel class=\"carousel-multi-item multi-animation\" [type]=\"'carousel-multi-item'\"\r\n [animation]=\"'slide'\">\r\n\r\n\r\n  <mdb-carousel-item >\r\n    \r\n    \r\n\r\n  </mdb-carousel-item>\r\n  <mdb-carousel-item >\r\n    \r\n    <div class=\"col-md-6\">\r\n      <img class=\"img-fluid rounded \" src=\"./assets/Images/About_01.png\">\r\n      <h4 class=\"mt-4\">I love hosting my eco home so people can \r\n        connect with nature and their loved ones.\r\n        -Taking care of guests in our offer.</h4>\r\n        <p class=\"mt-3 mb-0\">\r\n          <b>Vinna Gupta</b>\r\n        </p>\r\n        <p class=\"small\">\r\n          Host in Chiang Mai\r\n        </p>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <img class=\"img-fluid rounded\" style=\"height:57% !important;width: 100%;\" src=\"./assets/Images/Darrel Sing.png\">\r\n       <h4 class=\"mt-4\">I love hosting my eco home so people can \r\n        connect with nature and their loved ones.\r\n        -Taking care of guests in our offer.</h4>\r\n        <p class=\"mt-3 mb-0\">\r\n          <b>Darrel Sing</b>\r\n        </p>\r\n        <p class=\"small\">\r\n          Host in Atlanta\r\n        </p>\r\n    </div>\r\n\r\n  </mdb-carousel-item>\r\n  \r\n</mdb-carousel> -->\r\n\r\n\r\n\r\n            <!-- <mdb-carousel [isControls]=\"true\" class=\"carousel-multi-item multi-animation\" [type]=\"'carousel-multi-item'\"\r\n    [animation]=\"'slide'\">\r\n  <mdb-carousel-item *ngFor=\"let item of slides; let i = index\">\r\n    <div class=\"col-md-4 pb-2\" *ngFor=\"let card of item; let cardIndex = index\">\r\n      <mdb-card class=\"my-1 h-100\">\r\n        <mdb-card-img [src]=\"card.img\" alt=\"Card image cap\"></mdb-card-img>\r\n        <mdb-card-body>\r\n          <mdb-card-title>\r\n            <h4>{{card.title}}</h4>\r\n          </mdb-card-title>\r\n          <p>{{card.description}}</p>\r\n        </mdb-card-body>\r\n        <mdb-card-footer>\r\n          <a href=\"#\" mdbBtn color=\"primary\" class=\"waves-light\" mdbWavesEffect>{{card.buttonText}}</a>\r\n        </mdb-card-footer>\r\n      </mdb-card>\r\n    </div>\r\n  </mdb-carousel-item>\r\n</mdb-carousel> -->\r\n\r\n\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row \">\r\n        <div class=\"col-12  p-5 pt-0\" style=\"background:black;\">\r\n          <div class=\"container mb-4\">\r\n            <div class=\"row justify-content-left\">\r\n              <div class=\"col-md-8\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12 mb-4\">\r\n                    <h3 class=\"text-white mt-0\">{{'trans.Insight_in_numbers_on_OneRooms' | translate}}</h3>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n\r\n                    <div style=\"border-left: 2px solid white;\">\r\n                      <h3 class=\"text-danger mt-0 mb-0 pl-3\"><b>2021</b> </h3>\r\n                      <p class=\"mb-0 pb-0 text-white pl-3 \">Offers</p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n\r\n                    <div style=\"border-left: 2px solid white;\">\r\n                      <h3 class=\"text-danger mt-0 mb-0 pl-3\"><b>4204+</b> </h3>\r\n                      <p class=\"mb-0 pb-0 text-white pl-3 \">{{'trans.Host_list' | translate}} </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n\r\n                    <div style=\"border-left: 2px solid white;\">\r\n                      <h3 class=\"text-danger mt-0 mb-0 pl-3\"><b>320+</b> </h3>\r\n                      <p class=\"mb-0 pb-0 text-white pl-3 \"> {{'trans.Location' | translate}}</p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n\r\n                    <div style=\"border-left: 2px solid white;\">\r\n                      <h3 class=\"text-danger mt-0 mb-0 pl-3\"><b>Millions </b> </h3>\r\n                      <p class=\"mb-0 pb-0 text-white pl-3 \"> {{'trans.Of_One_Rooms_users' | translate}}</p>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"container-fluid\" style=\"background-color: #FFFFFF!important; color: black;\">\r\n      <div class=\"container\">\r\n        <div class=\"row  justify-content-left \">\r\n          <div class=\"col-md-6 ml-auto mr-auto \" style=\"margin-top: 10vh;margin-bottom: 35vh;\">\r\n            <h3 class=\"\"><b> {{'trans.Join_over' | translate}}</b></h3>\r\n            <p class=\"mt-3\">Lorem Ipsum is simply dummy text of the printing and\r\n              typesetting industry. Lorem Ipsum the industry</p>\r\n            <a href=\"https://play.google.com/store/apps\" target=\"_blank\"\r\n              class=\"btn btn-default text-dark  mt-4 px-0 py-0 mr-3\"><img src=\"../assets/Icons/PNG/playstore.png\" /></a>\r\n            <a href=\"https://www.apple.com/app-store/\" target=\"_blank\"\r\n              class=\"btn btn-default text-dark  mt-4 px-0 py-0\"><img src=\"../assets/Icons/PNG/Group 1349.png\" /></a>\r\n          </div>\r\n          <div class=\"col-md-6 text-right ml-auto mr-auto\"\r\n            style=\"background-image: url('../assets/Images/Host_App.png');background-position: center;background-repeat: no-repeat; background-size: cover;\">\r\n\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n    <app-host_footer-web></app-host_footer-web>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- Large modal -->\r\n\r\n<div class=\"modal fade bd-example-modal-lg try-offers\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-md\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header mb-0 pb-0\" style=\"padding-top: 20px !important\">\r\n        <div class=\"col-12 text-right ml-4\">\r\n          <a class=\"btn-rounded-circle\" href=\"javascript:void(0);\" data-dismiss=\"modal\" aria-label=\"Close\"\r\n            style=\"background: #ecf0f1; padding: 5px;border-radius: 50%;\"><img\r\n              src=\"../assets/Icons/PNG/Close.png\" /></a>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-body mt-0 mb-0\" style=\"color: #203a60; padding-top: 20px !important;\">\r\n        <h2 class=\"mt-0 pt-0 text-center\"><b>{{'trans.Insight' | translate}}</b></h2>\r\n        <h6 class=\"mt-0 pt-0 text-center\"><b>{{'trans.Account_type' | translate}}</b></h6>\r\n        <p class=\"mt-0 pt-0 text-center\" style=\"margin-right: 5.5rem; margin-left: 5.5rem;\">In publishing and graphic\r\n          design, Lorem Ipsum is a placeholder text commonly used to demonstrate the visual.</p>\r\n        <h5 class=\"mt-1 pt-0 text-center\"><b>{{'trans.choose_a_plan' | translate}}</b></h5>\r\n        <div class=\"row divscroll\" style=\" overflow: auto; overflow-x: hidden;\" *ngIf=\"plans\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"card mt-0 mb-2\" style=\"border-radius: 20px; background-color: #dfe4ea;\" (click)=\"openSignin()\">\r\n              <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-11\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-6 text-left\">\r\n                        <h4 class=\"my-0 pt-0 text-black\">{{'trans.Beginners' | translate}}</h4>\r\n                      </div>\r\n                      <div class=\"col-6 text-right\">\r\n                        <h4 class=\"my-0 pt-0 text-danger\">$0</h4>\r\n                      </div>\r\n                      <div class=\"col-6 text-left\">\r\n                        <p class=\"mb-0\">5 {{'trans.Offers_per_month' | translate}}</p>\r\n                      </div>\r\n                      <div class=\"col-6 text-right\">\r\n                        <p class=\"mb-0\">Free</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-1\" style=\"align-self: center;\">\r\n                    <i class=\"fa fa-chevron-right fa-2x\" aria-hidden=\"true\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12\" *ngFor=\"let plan of plans\">\r\n            <div class=\"card mt-0 mb-2\" style=\"border-radius: 20px; background-color: #dfe4ea;\" (click)=\"openSignin()\">\r\n              <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-11\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-6 text-left\">\r\n                        <h4 class=\"my-0 pt-0 text-black\">{{ plan.name }}</h4>\r\n                      </div>\r\n                      <div class=\"col-6 text-right\">\r\n                        <h4 class=\"my-0 pt-0 text-danger\">${{ plan.price }}</h4>\r\n                      </div>\r\n                      <div class=\"col-6 text-left\">\r\n                        <p class=\"mb-0\">{{ plan.description }}</p>\r\n                      </div>\r\n                      <div class=\"col-6 text-right\">\r\n                        <p class=\"mb-0\">{{ plan.interval }}</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-1\" style=\"align-self: center;\">\r\n                    <i class=\"fa fa-chevron-right fa-2x\" aria-hidden=\"true\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <div (click)=\"openSignin()\" class=\"card mt-0 mb-2\" style=\"border-radius: 20px; background-color: #dfe4ea;\">\r\n              <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6 text-left\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-12 text-left\">\r\n                        <h4 class=\"my-0 pt-0 text-black\">{{'trans.Enterprise' | translate}}</h4>\r\n                      </div>\r\n                      <div class=\"col-12 text-left\">\r\n                        <p class=\"mb-0\">{{'trans.Contact_with_us' | translate}}</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6 text-right\" style=\"align-self: center;\">\r\n                    <button class=\"btn btn-danger btn-lg btn-block\" style=\"border-radius: 15px;\">{{'trans.Let_Chat' | translate}}</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 text-center\">\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_Host_Host_module_ts.js.map