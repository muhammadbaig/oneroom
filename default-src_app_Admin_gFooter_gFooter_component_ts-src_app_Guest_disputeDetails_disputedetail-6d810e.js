"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["default-src_app_Admin_gFooter_gFooter_component_ts-src_app_Guest_disputeDetails_disputedetail-6d810e"],{

/***/ 39974:
/*!****************************************************!*\
  !*** ./src/app/Admin/gFooter/gFooter.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GfooterComponent": function() { return /* binding */ GfooterComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _gFooter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gFooter.component.html?ngResource */ 21474);
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




var GfooterComponent = /*#__PURE__*/function () {
  function GfooterComponent() {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GfooterComponent);

    this.test = new Date();
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(GfooterComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return GfooterComponent;
}();

GfooterComponent.ctorParameters = function () {
  return [];
};

GfooterComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-gFooter-web',
  template: _gFooter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], GfooterComponent);


/***/ }),

/***/ 60281:
/*!******************************************************************!*\
  !*** ./src/app/Guest/disputeDetails/disputedetails.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisputeDetailsComponent": function() { return /* binding */ DisputeDetailsComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _disputeDetails_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disputeDetails.component.html?ngResource */ 91798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_chat/chat.service */ 76865);
/* harmony import */ var src_app_services_data_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/data.services */ 7619);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);



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
  function DisputeDetailsComponent(router, routers, cdf, _formBuilder, dataService, chat) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DisputeDetailsComponent);

    this.router = router;
    this.routers = routers;
    this.cdf = cdf;
    this._formBuilder = _formBuilder;
    this.dataService = dataService;
    this.chat = chat;
    this.user = null;
    this.details = null;
    this.sub = null;
    this.id = null;
    this.moment = moment__WEBPACK_IMPORTED_MODULE_3__;
    this.showAlert = false;
    this.errorMessage = null;
    this.userId = null;
    this.offerMessages = null;
    this.user_id = null;
    this.ad_id = null;
    this.receiver_id = null;
    this.channel = null;
    this.publisher_id = null;
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DisputeDetailsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

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
      this.sub = this.routers.params.subscribe(function (params) {
        _this.id = params['id'];
      });
      var data = {
        id: this.id
      };
      this.dataService.post('guest/get-dispute-by-id', data).then(function (result) {
        _this.details = result.data;
        var customer_id = _this.details.booking_details.customer_id;
        _this.publisher_id = _this.details.offer.user_id;
        _this.receiver_id = _this.details.offer.user_id;
        var ad_id = _this.details.ad_id;
        _this.channel = customer_id.toString().concat(_this.publisher_id.toString(), ad_id.toString()); // this.channel = parseInt(this.channel);

        _this.chat.joinChannel(_this.channel);

        var chatData = {
          ad_id: ad_id
        };

        _this.dataService.post('guest/get-guest-messages', chatData).then(function (result) {
          if (!result.data.all_message) {} else {
            _this.offerMessages = result.data.all_message;
            _this.receiver_id = result.data.ad.user_id;
            _this.ad_id = result.data.ad_id;
            _this.user_id = localStorage.getItem('id');
            setTimeout(function () {
              $('#divscroll').scrollTop(20000);
            }, 6000);
          }
        });
      });
      this.userId = JSON.parse(localStorage.getItem('id'));
      this.chat.messages.subscribe(function (msg) {
        if (msg.message !== null) {
          $('#divscroll').append('<div class="col-12"><div class="mt-2 mr-5" style="align-self: center; width: 270px; background-color:#dcdcdc; height: auto; padding:10px; border-radius: 12px;"><p class="mb-1">' + msg.message + '<p><span class="float-right">just now</span></p></div></div>');
        } else {
          $('#divscroll').append('<div class="col-12"><div class="mt-2 mr-5" style="align-self: center; width: 270px; background-color: #dcdcdc; height: auto; padding:10px; border-radius: 12px;"><p class="mb-1"><a href="http://oneroom3.crosip.com/' + msg.attachment_file + '"target="_blank">See Attachment</a><p><span class="float-right">just now</span></p></div></div>');
        }

        $('#divscroll').scrollTop(20000);
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
    key: "copyConfirmationNumber",
    value: function copyConfirmationNumber() {
      var tempVal = $('#confirmation_number').text();
      navigator.clipboard.writeText(tempVal).then().catch(function (e) {
        return console.error(e);
      });
    }
  }, {
    key: "copyAddress",
    value: function copyAddress() {
      var tempVal = $('#address').text();
      navigator.clipboard.writeText(tempVal).then().catch(function (e) {
        return console.error(e);
      });
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
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
            position: 'center',
            icon: 'success',
            title: 'Success',
            showConfirmButton: false,
            timer: 2500
          });

          _this2.router.navigate(['guestportal/bookinglist']);
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
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
            position: 'center',
            icon: 'success',
            title: 'Success',
            showConfirmButton: false,
            timer: 2500
          });

          _this3.router.navigate(['guestportal/bookinglist']);
        }
      });
    }
  }, {
    key: "sendMessage",
    value: function sendMessage(customer_id, publisher_id, ad_id) {
      var _this4 = this;

      if ($('#sender_message').val() == null || $('#sender_message').val() == '') {
        return;
      }

      var msg = $('#sender_message').val();
      var data1 = {
        receiver_id: publisher_id,
        ad_id: ad_id,
        message: msg,
        read_status: '0',
        attachment_file: null
      };
      this.dataService.post('host/send-a-message', data1).then(function (result) {
        if (result.success == true) {
          if (result.data.message != null) {
            $('#divscroll').append('<div class="col-12"><div class="mt-2 mr-5 pull-right" style="align-self: center; width: 270px; background-color:#e95228; height: auto; padding:10px; border-radius: 12px;"><p class="mb-1" style="color: white !important;">' + result.data.message + '<p><span class="float-right" cstyle="color: white !important>' + moment__WEBPACK_IMPORTED_MODULE_3__(result.data.created_at).format('ddd') + ' | ' + moment__WEBPACK_IMPORTED_MODULE_3__(result.data.created_at).format('MMM DD, YYYY') + ' | ' + moment__WEBPACK_IMPORTED_MODULE_3__(result.data.created_at).format('hh:mm a') + '</span></p></div></div>');
          }

          $('#divscroll').scrollTop(20000);

          _this4.dataService.get('host/get-user-data').then(function (result1) {
            _this4.channel = customer_id.toString().concat(publisher_id.toString(), ad_id.toString());
            _this4.channel = parseInt(_this4.channel);
            var message = msg;
            var date = moment__WEBPACK_IMPORTED_MODULE_3__().format('hh:mm a');
            var data = {
              message: message,
              channel: _this4.channel,
              date: date,
              senderid: customer_id,
              receiver_id: publisher_id,
              pic: '',
              attachment_file: '',
              messageId: result.data.id,
              senderNameFirstChar: result1.data.fname[0]
            };

            _this4.chat.sendMsg("channel", data);
          });
        }

        $('#sender_message').val(null);

        _this4.cdf.detectChanges();
      });
    }
  }, {
    key: "sendMessageAttachment",
    value: function sendMessageAttachment(event, customer_id, publisher_id, ad_id) {
      var _this5 = this;

      var file = event.target.files[0];

      if (file) {
        var fd = new FormData();
        fd.append('receiver_id', publisher_id);
        fd.append('ad_id', ad_id);
        fd.append('read_status', '0');
        fd.append('attachment_file', file);
        this.dataService.post('host/send-a-message', fd).then(function (result) {
          if (result.success == true) {
            if (result.data.attachment_file != null) {
              $('#divscroll').append('<div class="col-12"><div class="mt-2 mr-5 pull-right" style="align-self: center; width: 270px; background-color:#e95228; height: auto; padding:10px; border-radius: 12px;"><p class="mb-1"><a href="http://oneroom3.crosip.com/' + result.data.attachment_file + '"target="_blank" style="color: white !important;">See Attachment</a><p><span class="float-right" style="color: white !important;">' + moment__WEBPACK_IMPORTED_MODULE_3__(result.data.created_at).format('ddd') + ' | ' + moment__WEBPACK_IMPORTED_MODULE_3__(result.data.created_at).format('MMM DD, YYYY') + ' | ' + moment__WEBPACK_IMPORTED_MODULE_3__(result.data.created_at).format('hh:mm a') + '</span></p></div></div>');
              $('#divscroll').scrollTop(20000);

              _this5.dataService.get('host/get-user-data').then(function (result1) {
                var date = moment__WEBPACK_IMPORTED_MODULE_3__().format('hh:mm a');
                var data = {
                  message: null,
                  channel: _this5.channel,
                  date: date,
                  senderid: customer_id,
                  receiver_id: publisher_id,
                  pic: result.data.attachment_file,
                  attachment_file: '',
                  messageId: result.data.id,
                  senderNameFirstChar: result1.data.fname[0]
                };

                _this5.chat.sendMsg("channel", data);
              });
            }
          }

          $('#sender_message').val(null);

          _this5.cdf.detectChanges();
        });
      }
    }
  }]);

  return DisputeDetailsComponent;
}();

DisputeDetailsComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
  }, {
    type: src_app_services_data_services__WEBPACK_IMPORTED_MODULE_5__.DataService
  }, {
    type: src_app_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__.ChatService
  }];
};

DisputeDetailsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-gDisputedetails-cmp',
  template: _disputeDetails_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], DisputeDetailsComponent);


/***/ }),

/***/ 21474:
/*!*****************************************************************!*\
  !*** ./src/app/Admin/gFooter/gFooter.component.html?ngResource ***!
  \*****************************************************************/
/***/ (function(module) {

module.exports = "<footer class=\"footer \" style=\"background-color: #FFFFFF!important; color: black;border-top: 1px solid #e5e5e5;\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2 text-left\">\r\n        <div>      \r\n           <img src=\"./assets/Icons/SVG/logo.svg\" style=\"width:90%\"/>\r\n        </div>\r\n        <div>\r\n          <p class=\"mt-2\">\r\n            Lorem Ipsum is simply dummy text of \r\n            the printing and typesetting industry. \r\n            Lorem Ipsum the industry          \r\n          </p>\r\n        \r\n          <p class=\"mt-4\"> \r\n            <a class=\"btn btn-outline btn-danger btn-round px-2 py-1 facebookbg\" target=\"_blank\" href=\"https://www.facebook.com/\"><i class=\"facebookc fa fa-facebook\" ria-hidden=\"true\"></i></a>\r\n            <a class=\"btn btn-outline btn-danger btn-round px-1 py-1 twitterbg\" target=\"_blank\" href=\"https://twitter.com/\"><i class=\"twitterc fa fa-twitter\"  aria-hidden=\"true\"></i></a>\r\n            <a class=\"btn btn-outline btn-danger btn-round px-1 py-1 instagrambg\" target=\"_blank\" href=\"https://www.instagram.com/\"><i class=\"instagramc fa fa-instagram\"  aria-hidden=\"true\"></i></a>\r\n          </p>\r\n          <p>© 2021 OneRooms, Inc.</p>\r\n        </div>\r\n        <div>\r\n          <span style=\"top: 1572px;left: 251px; width: 43px; height: 43px;background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;background: #FFFFFF 0% 0% no-repeat padding-box;opacity: 1;\"></span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-1\"></div>\r\n      <div class=\"col-md-3 text-left\">\r\n        <h4 class=\"font-weight-bolder\" ><b>  {{'trans.about_us' | translate}}</b></h4>\r\n        <p class=\"mt-3 mb-2\"><a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.How_oneRooms_works' | translate}} </a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Careers' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Newsroom' | translate}}</a></p>\r\n        <p class=\"mb-2\" ><a href=\"\" class=\"text-dark\"> {{'trans.about_us' | translate}}</a> </p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/blog\" class=\"text-dark\"> {{'trans.Latest_Blog' | translate}}</a></p>\r\n      </div>\r\n      <div class=\"col-md-3 text-left\">\r\n        <h4 class=\"font-weight-bolder\"><b> {{'trans.Host' | translate}} </b> </h4>\r\n        <p class=\"mt-3 mb-2\"> <a href=\"#/Website/host\" class=\"text-dark\"> {{'trans.Host_your_offer' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Responsible_Hosting' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\">{{'trans.Resource_Centre' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\">{{'trans.Community_centre' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Dedicated_support_system' | translate}}</a></p>\r\n       </div>\r\n      <div class=\"col-md-3 text-left\">\r\n        <h4 class=\"font-weight-bolder\">\r\n          <b> {{'trans.Support' | translate}}</b>\r\n        </h4>\r\n        <p class=\"mt-3 mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Our_covid_19_Response' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Help_center' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\">{{'trans.Cancellation_options' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Neighbourhood_Support' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Trust_Safety' | translate}}</a></p>\r\n      </div>\r\n    </div>\r\n  </div> \r\n</footer>\r\n<div class=\"container-fluid\" style=\"background-color: #FFFFFF!important; color: black;border-top: 1px solid #e5e5e5;\">\r\n  <div class=\"container\" style=\"    padding-top: 4.5vh !important;padding-bottom: 4.5vh;\">\r\n    <div class=\"col-12 pl-0\">\r\n      <div class=\"list-inline\">\r\n        <a href=\"#\" class=\"list-inline-item text-dark\" [routerLink]=\"['/Website/privacy']\"><small> {{'trans.Terms_of_use' | translate}} </small></a>\r\n        <a href=\"#\" class=\"list-inline-item text-dark px-3\" [routerLink]=\"['/Website/privacy']\"><small> {{'trans.Privacy_portal' | translate}}</small> </a>\r\n        <!-- <a href=\"#\" class=\"list-inline-item text-dark\" [routerLink]=\"['/Website/privacy']\"><small> {{'trans.Cookie_preference' | translate}}</small></a> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 91798:
/*!*******************************************************************************!*\
  !*** ./src/app/Guest/disputeDetails/disputeDetails.component.html?ngResource ***!
  \*******************************************************************************/
/***/ (function(module) {

module.exports = "<style>\r\n  .nav-tabs,\r\n  .nav-pills {\r\n    border: 0;\r\n    border-radius: 3px;\r\n    padding: 0 15px;\r\n    border-bottom: 1px solid;\r\n    border-color: #cbc2c2;\r\n  }\r\n\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active,\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active:focus,\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active:hover {\r\n    background-color: transparent;\r\n    color: #ed8935;\r\n    border-radius: 0px;\r\n    border: none;\r\n    box-shadow: none;\r\n    border-bottom: 2px solid;\r\n  }\r\n\r\n  agm-map {\r\n    height: 300px !important;\r\n    width: 100%;\r\n    /* This is really important*/\r\n  }\r\n\r\n  .divscroll::-webkit-scrollbar {\r\n    scrollbar-gutter: 2px;\r\n    width: 4px;\r\n    z-index: 10;\r\n    border-radius: 10px;\r\n    background: white;\r\n  }\r\n\r\n  .divscroll::-webkit-scrollbar-thumb {\r\n    background-color: #2d5286;\r\n  }\r\n</style>\r\n\r\n<div class=\"wrapper wrapper-full-page\" *ngIf=\"details\">\r\n  <div class=\"page-header lock-page header-filter\" filter-color=\"black\"\r\n    style=\"background-color:#fafafa; background-size: cover; background-position: top center;\">\r\n    <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-12\">\r\n          <h3><b><a href=\"#/guestportal/bookinglist\" class=\"text-dark\"><i class=\"fa fa-arrow-left mr-2\"></i> </a>Booked\r\n              List</b></h3>\r\n\r\n        </div>\r\n        <div class=\"col-md-6 col-lg-5\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-10\">\r\n                  <h4 class=\"mb-0 mt-0\"><b>Booking Info</b></h4>\r\n                </div>\r\n                <div class=\"col-2 text-right\">\r\n                  <img class=\"img-fluid rounded \" src=\"./assets/Icons/PNG/More.png\">\r\n\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <h4 class=\"text-success mt-2\"><b>Dispute</b></h4>\r\n                  <h4 class=\"mb-0 \"><b>Your accommodation booking</b></h4>\r\n                  <p>You re all set! We sent your confirmation email at “<span class=\"text-danger\">{{\r\n                      details.booking_details.email }}</span> ” </p>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <div class=\"card\" style=\"background: #e9f5e9;\">\r\n                    <div class=\"card-body\">\r\n                      <p class=\"mb-1\">\r\n                        <span class=\"text-info mr-2\">Confirm Number:</span>\r\n                        <span id=\"confirmation_number\" class=\"mr-2\">{{ details.booking_details.confirmation_number\r\n                          }}</span>\r\n                        <img src=\"../assets/Icons/PNG/Copy.png\" alt=\"copy\" (click)=\"copyConfirmationNumber()\" />\r\n                      </p>\r\n                      <p hidden><span class=\"text-info\" class=\"mr-2\">Pin:</span><img\r\n                          src=\"../assets/Icons/PNG/Copy.png\" /></p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <hr>\r\n                  <h4><b>{{ details.offer.title }}</b></h4>\r\n                </div>\r\n                <div class=\"col-12 d-flex\">\r\n                  <div>\r\n                    <img class=\"img-fluid rounded mr-3\" src=\"./assets/Icons/PNG/Calender Black.png\">\r\n                  </div>\r\n                  <div>\r\n                    <p class=\"mb-0\" hidden> <b>Sat, May 15, 2021 - Mon, May 17, 2021 </b></p>\r\n                    <p class=\"mb-0\">Check-in: {{moment(details.booking_details.from).format('ddd')}},\r\n                      {{moment(details.booking_details.from).format('MMM Do, YYYY')}}</p>\r\n                    <p class=\"mb-0\">Check-out: {{moment(details.booking_details.to).format('ddd')}},\r\n                      {{moment(details.booking_details.to).format('MMM Do, YYYY')}} </p>\r\n                    <p><a class=\"text-danger\"><u>Change Date</u></a></p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <hr>\r\n                </div>\r\n\r\n                <div class=\"col-12 d-flex\">\r\n                  <div>\r\n                    <img class=\"img-fluid rounded mr-3\" src=\"./assets/Icons/PNG/Location Black.png\">\r\n                  </div>\r\n                  <div>\r\n                    <h4 class=\"mb-0 ml-3\"> <b>Offer address</b> </h4>\r\n                    <p class=\"mb-0 ml-3\">\r\n                      <span id=\"address\">{{ details.offer.address }}</span>\r\n                      <img class=\"ml-2\" src=\"../assets/Icons/PNG/Copy.png\" alt=\"copy\" (click)=\"copyAddress()\" />\r\n                    </p>\r\n                    <p class=\"mb-0 ml-3\"><a target=\"_blank\"\r\n                        href=\"https://www.google.com/maps/search/?api=1&query={{details.offer.lat}},{{details.offer.lan}}\"\r\n                        class=\"text-danger\"><u>Get Direction</u></a></p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <hr>\r\n                </div>\r\n\r\n                <div class=\"col-12 d-flex\">\r\n                  <div>\r\n                    <img class=\"img-fluid rounded mr-3\" src=\"./assets/Icons/PNG/Offer policies.png\">\r\n                  </div>\r\n                  <div>\r\n                    <h4 class=\"mb-0\"> <b>Offer policies</b> </h4>\r\n                    <a class=\"mb-0 text-danger\" data-toggle=\"modal\" data-target=\"#terms\"> <u>View all poicies</u></a>\r\n                  </div>\r\n                  <hr>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <hr>\r\n                </div>\r\n\r\n                <div class=\"col-12 d-flex\">\r\n                  <div>\r\n                    <img class=\"img-fluid rounded mr-3\" src=\"./assets/Icons/PNG/Contact the offer.png\">\r\n                  </div>\r\n                  <div>\r\n                    <h4 class=\"mb-0\"> <b>Contact the offer</b> </h4>\r\n                    <p class=\"mb-0\">Discuss changes to your booking or ask about payments\r\n                      and refunds </p>\r\n\r\n                    <div class=\"d-flex mt-3\">\r\n                      <div>\r\n                        <img class=\"img-fluid rounded mr-3\" src=\"./assets/Icons/PNG/Contact number.png\">\r\n                      </div>\r\n                      <div>\r\n                        <h4 class=\"mb-0\"><b> Contact number</b></h4>\r\n                        <p class=\"text-danger\">+41-745-5541-35</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <div class=\"card\" style=\"background: #e9f5e9;\">\r\n                    <div class=\"card-body\">\r\n                      <h4>Total price for <span *ngIf=\"details.offer.rooms != 0\"><span\r\n                            *ngIf=\"details.offer.rooms == 1\">{{ details.offer.rooms }} room</span><span\r\n                            *ngIf=\"details.offer.rooms > 1\">{{ details.offer.rooms }} rooms</span></span></h4>\r\n                      <!-- <p class=\"ml-4\">\r\n                          Rooms: <b>{{ details.ad.rooms }}</b> <br>\r\n                          Bathrooms: <b>{{ details.ad.bathrooms }}</b> <br>\r\n                          Single Bed: <b>{{ details.ad.single_bed }}</b> <br>\r\n                          Double Bed: <b>{{ details.ad.double_bed }}</b> <br>\r\n                          Large Bed: <b>{{ details.ad.large_bed }}</b> <br>\r\n                          Extra Large Bed: <b>{{ details.ad.extra_large_bed }}</b>\r\n                      </p> -->\r\n                      <h3 class=\"mb-0\"><b> <del class=\"text-danger\">{{ details.offer.currency }}{{ details.booking_details.total_price\r\n                            }}</del> {{ details.offer.currency }}{{ details.booking_details.net_price }}</b></h3>\r\n                      <p hidden>+$9 taxes and charges</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#exampleModal\">View facilites</a>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <br>\r\n                  <button class=\"btn btn-danger btn-round btn-block py-3\" (click)=\"withdraw()\"\r\n                    *ngIf=\"details.user_id == userId\">Withraw Request</button>\r\n                  <button class=\"btn btn-danger btn-round btn-block py-3\" (click)=\"accept()\"\r\n                    *ngIf=\"details.user_id != userId\">Accept Request</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-lg-7\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 border-bottom\">\r\n                  <h3 class=\"mb-0 mt-0\"><i class=\"fa fa-arrow-left  d-lg-none d-md-none d-xl-none mr-2\"\r\n                      (click)=\"back()\"></i><b>{{ details.offer.title }}</b> <small style=\"float:right;\"><img\r\n                        src=\"../assets/Icons/PNG/More.png\" /> </small> </h3>\r\n                  <p class=\"\">{{moment().format('MMM Do, YYYY')}}</p>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row py-3 divscroll mb-3\" id=\"divscroll\"\r\n                style=\"overflow: auto; height: 400px; overflow-x: hidden;\">\r\n                <div class=\"col-md-12\" *ngFor=\"let ls of offerMessages\">\r\n                  <div class=\"d-flex\" *ngIf=\"user_id == ls.receiver.id\">\r\n                    <div *ngIf=\"ls.receiver.pic\">\r\n                      <img src=\"http://oneroom3.crosip.com/{{ls.receiver.pic}}\" alt=\"Img\" height=\"50\"\r\n                        width=\"50\" class=\"mr-3 rounded-circle\">\r\n                    </div>\r\n                    <div *ngIf=\"!ls.receiver.pic\">\r\n                      <img src=\"https://onerooms.ch/assets/Images/tempprofile.png\" alt=\"Img\" height=\"50\"\r\n                        width=\"50\" class=\"mr-3 rounded-circle\">\r\n                    </div>\r\n                    <div>\r\n                      <div *ngIf=\"ls.message != null\" class=\"mt-2\"\r\n                        style=\"align-self: center; width: 270px; background-color: #dcdcdc; height: auto; padding:10px; border-radius: 12px;\">\r\n                        <p class=\"mb-1\">{{ ls.message }}</p>\r\n                        <p><span class=\"float-right\">{{moment(ls.created_at).format('ddd')}} |\r\n                            {{moment(ls.created_at).format('MMM DD, YYYY')}} |\r\n                            {{moment(ls.created_at).format('hh:mm a')}}</span></p>\r\n                      </div>\r\n                      <div *ngIf=\"ls.attachment_file != null\" class=\"mt-2\"\r\n                        style=\"align-self: center; width: 270px; background-color: #dcdcdc; height: auto; padding:10px; border-radius: 12px;\">\r\n                        <p class=\"mb-1\"><a href=\"http://oneroom3.crosip.com/{{ls.attachment_file}}\" target=\"_blank\">See\r\n                            Attachment</a></p>\r\n                        <p><span class=\"float-right\">{{moment(ls.created_at).format('ddd')}} |\r\n                            {{moment(ls.created_at).format('MMM DD, YYYY')}} |\r\n                            {{moment(ls.created_at).format('hh:mm a')}}</span></p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"d-flex pull-right\" *ngIf=\"user_id == ls.sender.id\">\r\n                    <div id=\"sender_new_message\">\r\n                      <div *ngIf=\"ls.message != null\" class=\"mt-2\"\r\n                        style=\"align-self: center; width: 270px; background-color:#e95228; height: auto; padding:10px; border-radius: 12px;\">\r\n                        <p class=\"mb-1\" style=\"color:white !important;\">{{ ls.message }}</p>\r\n                        <p><span class=\"float-right\"\r\n                            style=\"color:white !important;\">{{moment(ls.created_at).format('ddd')}} |\r\n                            {{moment(ls.created_at).format('MMM DD, YYYY')}} |\r\n                            {{moment(ls.created_at).format('hh:mm a')}}</span></p>\r\n                      </div>\r\n                      <div *ngIf=\"ls.attachment_file != null\" class=\"mt-2\"\r\n                        style=\"align-self: center; width: 270px; background-color:#e95228; color:white !important; height: auto; padding:10px; border-radius: 12px;\">\r\n                        <p class=\"mb-1\"><a href=\"http://oneroom3.crosip.com/{{ls.attachment_file}}\" target=\"_blank\"\r\n                            style=\"color:white !important;\">See Attachment</a></p>\r\n                        <p><span class=\"float-right\"\r\n                            style=\"color:white !important;\">{{moment(ls.created_at).format('ddd')}} |\r\n                            {{moment(ls.created_at).format('MMM DD, YYYY')}} |\r\n                            {{moment(ls.created_at).format('hh:mm a')}}</span></p>\r\n                      </div>\r\n                    </div>\r\n                    <div *ngIf=\"ls.sender.pic\">\r\n                      <img src=\"http://oneroom3.crosip.com/{{ls.sender.pic}}\" alt=\"Img\" height=\"50\"\r\n                        width=\"50\" class=\"mr-3 rounded-circle\">\r\n                    </div>\r\n                    <div *ngIf=\"!ls.sender.pic\">\r\n                      <img src=\"https://onerooms.ch/assets/Images/tempprofile.png\" alt=\"Img\" height=\"50\"\r\n                        width=\"50\" class=\"mr-3 rounded-circle\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row w-100 py-1\" style=\"position: absolute; bottom: 0;\">\r\n                <div class=\"col-12\" style=\"padding: 5px;background: #f6f7f8;\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-2 text-center\" style=\"align-self: center;\">\r\n                      <!-- <i class=\"fa fa-camera fa-2x\" aria-hidden=\"true\" style=\"color: #203a60\"></i> &nbsp; -->\r\n                      <img src=\"../assets/Icons/PNG/Camera.png\"> &nbsp;\r\n                      <label for=\"file\">\r\n                        <!-- <i class=\"fa fa-picture-o fa-2x\" aria-hidden=\"true\" style=\"color: #203a60\"></i> -->\r\n                        <img src=\"../assets/Icons/PNG/image.png\">\r\n                        <input type=\"file\" id=\"file\" style=\"display: none\" name=\"image\"\r\n                          accept=\"image/jpeg,image/jpg,image/png\" multiple=\"\" data-original-title=\"upload photos\"\r\n                          (change)=\"sendMessageAttachment($event, details.booking_details.customer_id, details.offer.user_id, details.ad_id)\">\r\n                      </label>\r\n                    </div>\r\n                    <div class=\"col-9 text-left\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Aa\" id=\"sender_message\"\r\n                        style=\"background-image: none;background-color: white; border: 1px solid #dee2e6; border-radius: 20px; padding-left: 20px;\">\r\n                    </div>\r\n                    <div class=\"col-1 text-left\" style=\"margin-left: -15px; margin-top: 0.4rem\">\r\n                      <img src=\"../assets/Icons/PNG/Sender_normal.png\"\r\n                        (click)=\"sendMessage(details.booking_details.customer_id, details.offer.user_id, details.ad_id)\">\r\n                      <!-- <i class=\"fa fa-location-arrow fa-2x\" aria-hidden=\"true\" style=\"color: #203a60\"></i> (click)=\"sendMessage(details.customer.id, details.ad.user_id, details.ad.id)\"-->\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n      aria-hidden=\"true\">\r\n      <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title text-left\" id=\"exampleModalLabel\">Facilities</h5>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12 d-flex\" *ngFor=\"let features of details.offer.features\">\r\n                <div class=\"mr-4\"><img src=\"http://oneroom3.crosip.com/{{ features.feature.icon }}\" /></div>\r\n                <div class=\"ml-4\">\r\n                  <h4><b>{{features.feature.name}}</b></h4>\r\n                  <p>{{features.feature.description}}</p>\r\n                  <hr>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal fade bd-example-modal-lg\" id=\"terms\" tabindex=\"-1\" role=\"dialog\"\r\n      aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title text-left\" id=\"exampleModalLabel\">Booking Conditions</h5>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\" *ngIf=\"details\">\r\n            <hr>\r\n            {{ details.offer.terms_policies }}\r\n            <hr>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-gFooter-web></app-gFooter-web>\r\n\r\n  </div>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_Admin_gFooter_gFooter_component_ts-src_app_Guest_disputeDetails_disputedetail-6d810e.js.map