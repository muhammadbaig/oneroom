"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["src_app_Guest_Guestportal_module_ts"],{

/***/ 80955:
/*!************************************************************!*\
  !*** ./src/app/Guest/Bookdetails/Bookdetails.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookdetailsComponent": function() { return /* binding */ BookdetailsComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _Bookdetails_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bookdetails.component.html?ngResource */ 30019);
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










var BookdetailsComponent = /*#__PURE__*/function () {
  function BookdetailsComponent(router, routers, cdf, _formBuilder, dataService, chat) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BookdetailsComponent);

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
    this.offerMessages = null;
    this.user_id = null;
    this.ad_id = null;
    this.receiver_id = null;
    this.channel = null;
    this.publisher_id = null;
    this.sender_id = null;
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(BookdetailsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      // if (localStorage.getItem("token") != null) {
      //     this.user = 'exists';
      // }
      // else {
      //     this.user = null;
      //     localStorage.clear();
      //     this.router.navigate(['/guest/home'])
      // }
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
      this.dataService.post('guest/get-booked-ad-by-id', data).then(function (result) {
        _this.details = result.data;

        if (_this.details.ad.lat != null && _this.details.ad.lat != '') {
          _this.details.ad.lat = parseFloat(_this.details.ad.lat);
        }

        if (_this.details.ad.lan != null && _this.details.ad.lan != '') {
          _this.details.ad.lan = parseFloat(_this.details.ad.lan);
        }

        var customer_id = _this.details.customer.id;
        _this.publisher_id = _this.details.ad.user_id;
        _this.receiver_id = _this.details.ad.user_id;
        _this.sender_id = customer_id;
        var ad_id = _this.details.ad.id;
        _this.channel = customer_id.toString().concat(_this.publisher_id.toString(), ad_id.toString()); // this.channel = parseInt(this.channel);

        _this.chat.joinChannel(_this.channel);

        var chatData = {
          ad_id: ad_id
        };

        _this.dataService.post('guest/get-guest-messages', chatData).then(function (result) {
          if (!result.data.all_message) {} else {
            console.log(result);
            _this.offerMessages = result.data.all_message; // this.receiver_id = result.data.ad.user_id;
            // alert(this.receiver_id)

            _this.ad_id = result.data.ad_id;
            _this.user_id = localStorage.getItem('id');
            setTimeout(function () {
              $('#divscroll').scrollTop(20000);
            }, 6000);
          }
        });
      });
      this.bookingForm = this._formBuilder.group({
        ad_id: this.id,
        message: null
      });
      this.chat.messages.subscribe(function (msg) {
        console.log(msg);

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
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.chat.leaveChannel(this.channel);
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
    key: "cancelBooking",
    value: function cancelBooking() {
      var _this2 = this;

      this.showAlert = false;

      if (this.bookingForm.invalid) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
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
        id: this.id,
        message: formData.message
      };
      this.dataService.post('guest/cancel-booked-offer', data).then(function (result) {
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
    key: "sendMessage",
    value: function sendMessage(customer_id, publisher_id, ad_id) {
      var _this3 = this;

      if ($('#sender_message').val() == null || $('#sender_message').val() == '') {
        return;
      }

      var msg = $('#sender_message').val();
      var data1 = {
        receiver_id: this.receiver_id,
        ad_id: ad_id,
        message: msg,
        read_status: '0',
        attachment_file: null
      };
      console.log(data1);
      this.dataService.post('host/send-a-message', data1).then(function (result) {
        if (result.success == true) {
          if (result.data.message != null) {
            $('#divscroll').append('<div class="col-12"><div class="mt-2 mr-5 pull-right" style="align-self: center; width: 270px; background-color:#e95228; height: auto; padding:10px; border-radius: 12px;"><p class="mb-1" style="color: white !important;">' + result.data.message + '<p><span class="float-right" cstyle="color: white !important>' + moment__WEBPACK_IMPORTED_MODULE_3__(result.data.created_at).format('ddd') + ' | ' + moment__WEBPACK_IMPORTED_MODULE_3__(result.data.created_at).format('MMM DD, YYYY') + ' | ' + moment__WEBPACK_IMPORTED_MODULE_3__(result.data.created_at).format('hh:mm a') + '</span></p></div></div>');
          }

          $('#divscroll').scrollTop(20000);

          _this3.dataService.get('host/get-user-data').then(function (result1) {
            _this3.channel = customer_id.toString().concat(publisher_id.toString(), ad_id.toString());
            _this3.channel = parseInt(_this3.channel);
            var message = msg;
            var date = moment__WEBPACK_IMPORTED_MODULE_3__().format('hh:mm a');
            var data = {
              message: message,
              channel: _this3.channel,
              date: date,
              senderid: customer_id,
              receiver_id: publisher_id,
              pic: '',
              attachment_file: '',
              messageId: result.data.id,
              senderNameFirstChar: result1.data.fname[0]
            };

            _this3.chat.sendMsg("channel", data);
          });
        }

        $('#sender_message').val(null);

        _this3.cdf.detectChanges();
      });
    }
  }, {
    key: "sendMessageAttachment",
    value: function sendMessageAttachment(event, customer_id, publisher_id, ad_id) {
      var _this4 = this;

      var file = event.target.files[0];

      if (file) {
        var fd = new FormData();
        fd.append('receiver_id', publisher_id);
        fd.append('ad_id', this.ad_id);
        fd.append('read_status', '0');
        fd.append('attachment_file', file);
        this.dataService.post('host/send-a-message', fd).then(function (result) {
          if (result.success == true) {
            if (result.data.attachment_file != null) {
              $('#divscroll').append('<div class="col-12"><div class="mt-2 mr-5 pull-right" style="align-self: center; width: 270px; background-color:#e95228; height: auto; padding:10px; border-radius: 12px;"><p class="mb-1"><a href="http://oneroom3.crosip.com/' + result.data.attachment_file + '"target="_blank" style="color: white !important;">See Attachment</a><p><span class="float-right" style="color: white !important;">' + moment__WEBPACK_IMPORTED_MODULE_3__(result.data.created_at).format('ddd') + ' | ' + moment__WEBPACK_IMPORTED_MODULE_3__(result.data.created_at).format('MMM DD, YYYY') + ' | ' + moment__WEBPACK_IMPORTED_MODULE_3__(result.data.created_at).format('hh:mm a') + '</span></p></div></div>');
              $('#divscroll').scrollTop(20000);

              _this4.dataService.get('host/get-user-data').then(function (result1) {
                var date = moment__WEBPACK_IMPORTED_MODULE_3__().format('hh:mm a');
                var data = {
                  message: null,
                  channel: _this4.channel,
                  date: date,
                  senderid: customer_id,
                  receiver_id: publisher_id,
                  pic: result.data.attachment_file,
                  attachment_file: '',
                  messageId: result.data.id,
                  senderNameFirstChar: result1.data.fname[0]
                };

                _this4.chat.sendMsg("channel", data);
              });
            }
          }

          $('#sender_message').val(null);

          _this4.cdf.detectChanges();
        });
      }
    }
  }]);

  return BookdetailsComponent;
}();

BookdetailsComponent.ctorParameters = function () {
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

BookdetailsComponent.propDecorators = {
  bookingNgForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
    args: ['bookingNgForm']
  }]
};
BookdetailsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-Bookdetails-cmp',
  template: _Bookdetails_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], BookdetailsComponent);


/***/ }),

/***/ 92023:
/*!****************************************************!*\
  !*** ./src/app/Guest/Booking/Booking.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingComponent": function() { return /* binding */ BookingComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _Booking_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Booking.component.html?ngResource */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_data_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/data.services */ 7619);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-intl-tel-input */ 87555);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var BookingComponent = /*#__PURE__*/function () {
  function BookingComponent(router, _formBuilder, routers, cdf, dataService) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BookingComponent);

    this.router = router;
    this._formBuilder = _formBuilder;
    this.routers = routers;
    this.cdf = cdf;
    this.dataService = dataService;
    this.moment = moment__WEBPACK_IMPORTED_MODULE_3__;
    this.user = null;
    this.details = null;
    this.sub = null;
    this.id = null;
    this.showAlert = false;
    this.errorMessage = null;
    this.data = null;
    this.separateDialCode = false;
    this.SearchCountryField = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__.SearchCountryField;
    this.CountryISO = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__.CountryISO;
    this.preferredCountries = [ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__.CountryISO.UnitedStates, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__.CountryISO.UnitedKingdom];
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(BookingComponent, [{
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
      this.dataService.post('get-ad-by-id', data).then(function (result) {
        _this.details = result.data[0];
        var totalPrice = _this.details['price'];
        var price = totalPrice * (_this.details['discount_of_percentage'] / 100);
        _this.details.discountPrice = price;
        _this.details.totalPrice = totalPrice - price;

        _this.getUser();
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
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {}
  }, {
    key: "getUser",
    value: function getUser() {
      var _this2 = this;

      this.dataService.get('host/get-user-data').then(function (result) {
        _this2.data = result.data;
        _this2.bookingForm = _this2._formBuilder.group({
          ad_id: _this2.details['id'],
          from: _this2.details['start_from'],
          to: _this2.details['end_to'],
          fname: _this2.data.fname,
          lname: _this2.data.lname,
          email: _this2.data.email,
          mobile_no: _this2.data.country_calling_code + _this2.data.contact_no,
          address: _this2.data.address,
          total_price: _this2.details['price'],
          discount_price: _this2.details['discountPrice'],
          net_price: _this2.details['totalPrice'],
          status: 0
        });

        _this2.bookingForm.controls['email'].disable();

        _this2.bookingForm.controls['fname'].disable();

        _this2.bookingForm.controls['lname'].disable();

        _this2.bookingForm.controls['mobile_no'].disable();

        _this2.bookingForm.controls['address'].disable();

        _this2.cdf.detectChanges();
      });
    }
  }, {
    key: "booking",
    value: function booking() {
      var _this3 = this;

      this.showAlert = false;
      var formData = this.bookingForm.getRawValue();
      var data = {
        ad_id: this.details['id'],
        from: this.details['start_from'],
        to: this.details['end_to'],
        fname: this.data.fname,
        lname: this.data.lname,
        email: this.data.email,
        mobile_no: formData.mobile_no.dialCode + formData.mobile_no.nationalNumber,
        address: this.data.address,
        total_price: this.details['price'],
        discount_price: this.details['discountPrice'],
        net_price: this.details['totalPrice'],
        status: 0
      };
      this.dataService.post('guest/book-ad', data).then(function (result) {
        if (result.success == true) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
            position: 'center',
            icon: 'success',
            title: 'Success',
            showConfirmButton: false,
            timer: 2500
          });

          _this3.router.navigate(['guestportal/bookinglist']);
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
            position: 'center',
            icon: 'error',
            text: 'Something went wrong. Please try again.',
            showConfirmButton: false,
            timer: 2500
          });

          _this3.cdf.detectChanges();
        }
      }, function (error) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
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
    key: "getOfferDetails",
    value: function getOfferDetails(id) {
      this.router.navigate(['guestportal/offerdetails', id]);
    }
  }]);

  return BookingComponent;
}();

BookingComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef
  }, {
    type: src_app_services_data_services__WEBPACK_IMPORTED_MODULE_4__.DataService
  }];
};

BookingComponent.propDecorators = {
  bookingNgForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: ['bookingNgForm']
  }]
};
BookingComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-Booking-cmp',
  template: _Booking_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], BookingComponent);


/***/ }),

/***/ 69891:
/*!************************************************************!*\
  !*** ./src/app/Guest/Bookinglist/Bookinglist.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookinglistComponent": function() { return /* binding */ BookinglistComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _Bookinglist_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bookinglist.component.html?ngResource */ 68356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
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







var BookinglistComponent = /*#__PURE__*/function () {
  function BookinglistComponent(router, cdf, dataService) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BookinglistComponent);

    this.router = router;
    this.cdf = cdf;
    this.dataService = dataService;
    this.moment = moment__WEBPACK_IMPORTED_MODULE_3__;
    this.user = null;
    this.bookingList = null;
    this.bookingList0 = null;
    this.bookingList1 = null;
    this.bookingList2 = null;
    this.bookingList3 = null;
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(BookinglistComponent, [{
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
      this.dataService.get('guest/get-all-booked-ads').then(function (result) {
        _this.bookingList = result.data;

        for (var i = 0; i < _this.bookingList.length; i++) {
          _this.bookingList0 = _this.bookingList.filter(function (x) {
            return x.status == 0;
          });
          _this.bookingList1 = _this.bookingList.filter(function (x) {
            return x.status == 1;
          });
          _this.bookingList2 = _this.bookingList.filter(function (x) {
            return x.status == 2;
          });
        }
      });
      this.dataService.get('guest/get-all-disputes').then(function (result) {
        _this.bookingList3 = result.data;

        for (var i = 0; i < _this.bookingList3.length; i++) {
          var totalPrice = _this.bookingList3[i]['offer']['price'];
          var price = totalPrice * (_this.bookingList3[i]['offer']['discount_of_percentage'] / 100);
          price = totalPrice - price;
          _this.bookingList3[i]['offer']['current_price'] = price;
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
      this.router.navigate(['guestportal/bookdetails', id]);
    }
  }, {
    key: "disputeDetails",
    value: function disputeDetails(id) {
      this.router.navigate(['guestportal/disputedetails', id]);
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
    type: src_app_services_data_services__WEBPACK_IMPORTED_MODULE_4__.DataService
  }];
};

BookinglistComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-Bookinglist-cmp',
  template: _Bookinglist_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], BookinglistComponent);


/***/ }),

/***/ 52965:
/*!************************************************************!*\
  !*** ./src/app/Guest/Createoffer/Createoffer.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateofferComponent": function() { return /* binding */ CreateofferComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _Createoffer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Createoffer.component.html?ngResource */ 6972);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 36410);



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
  function CreateofferComponent() {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CreateofferComponent);

    var today = new Date();
    var month = today.getMonth();
    var year = today.getFullYear();
    this.campaignOne = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
      start: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(new Date(year, month, 13)),
      end: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(new Date(year, month, 16))
    });
    this.campaignTwo = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
      start: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(new Date(year, month, 15)),
      end: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(new Date(year, month, 19))
    });
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CreateofferComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('lock-page');
      body.classList.add('off-canvas-sidebar');
      var card = document.getElementsByClassName('card')[0];
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
    key: "showdetails",
    value: function showdetails() {
      window.location.href = '#/hostportal/bookdetails';
    }
  }]);

  return CreateofferComponent;
}();

CreateofferComponent.ctorParameters = function () {
  return [];
};

CreateofferComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-Createoffer-cmp',
  template: _Createoffer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], CreateofferComponent);


/***/ }),

/***/ 25185:
/*!*********************************************!*\
  !*** ./src/app/Guest/Guestportal.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GuestportalModule": function() { return /* binding */ GuestportalModule; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.module */ 36747);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _Bookdetails_Bookdetails_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Bookdetails/Bookdetails.component */ 80955);
/* harmony import */ var _Offerlist_Offerlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Offerlist/Offerlist.component */ 26761);
/* harmony import */ var _Createoffer_Createoffer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Createoffer/Createoffer.component */ 52965);
/* harmony import */ var _offerdetails_offerdetails_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offerdetails/offerdetails.component */ 34594);
/* harmony import */ var _Guestportal_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Guestportal.routing */ 22540);
/* harmony import */ var _Profile_Profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Profile/Profile.component */ 18015);
/* harmony import */ var _Booking_Booking_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Booking/Booking.component */ 92023);
/* harmony import */ var _Admin_gFooter_gFooter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Admin/gFooter/gFooter.component */ 39974);
/* harmony import */ var _Bookinglist_Bookinglist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Bookinglist/Bookinglist.component */ 69891);
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-intl-tel-input */ 87555);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-socket-io */ 75083);
/* harmony import */ var _Guest_disputeDetails_disputedetails_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Guest/disputeDetails/disputedetails.component */ 60281);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @agm/core */ 61466);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 5721);



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

var GuestportalModule = /*#__PURE__*/(0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function GuestportalModule() {
  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, GuestportalModule);
});

GuestportalModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forChild(_Guestportal_routing__WEBPACK_IMPORTED_MODULE_7__.GuestportalRoutes), _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _app_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_17__.NgxIntlTelInputModule, ngx_socket_io__WEBPACK_IMPORTED_MODULE_18__.SocketIoModule.forRoot(config), _agm_core__WEBPACK_IMPORTED_MODULE_19__.AgmCoreModule.forRoot({
    apiKey: 'AIzaSyA8S1HrLRkdH_tZAUFuIU9Fu4lDJac757s'
  }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateModule],
  declarations: [_Admin_gFooter_gFooter_component__WEBPACK_IMPORTED_MODULE_10__.GfooterComponent, _Bookdetails_Bookdetails_component__WEBPACK_IMPORTED_MODULE_3__.BookdetailsComponent, _Guest_disputeDetails_disputedetails_component__WEBPACK_IMPORTED_MODULE_12__.DisputeDetailsComponent, _Offerlist_Offerlist_component__WEBPACK_IMPORTED_MODULE_4__.OfferlistComponent, _Createoffer_Createoffer_component__WEBPACK_IMPORTED_MODULE_5__.CreateofferComponent, _offerdetails_offerdetails_component__WEBPACK_IMPORTED_MODULE_6__.OfferdetailsComponent, _Profile_Profile_component__WEBPACK_IMPORTED_MODULE_8__.ProfileComponent, _Booking_Booking_component__WEBPACK_IMPORTED_MODULE_9__.BookingComponent, _Bookinglist_Bookinglist_component__WEBPACK_IMPORTED_MODULE_11__.BookinglistComponent],
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe]
})], GuestportalModule);


/***/ }),

/***/ 22540:
/*!**********************************************!*\
  !*** ./src/app/Guest/Guestportal.routing.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GuestportalRoutes": function() { return /* binding */ GuestportalRoutes; }
/* harmony export */ });
/* harmony import */ var _Bookinglist_Bookinglist_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bookinglist/Bookinglist.component */ 69891);
/* harmony import */ var _Bookdetails_Bookdetails_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bookdetails/Bookdetails.component */ 80955);
/* harmony import */ var _offerdetails_offerdetails_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offerdetails/offerdetails.component */ 34594);
/* harmony import */ var _Profile_Profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Profile/Profile.component */ 18015);
/* harmony import */ var _Booking_Booking_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Booking/Booking.component */ 92023);
/* harmony import */ var _Guest_disputeDetails_disputedetails_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Guest/disputeDetails/disputedetails.component */ 60281);






var GuestportalRoutes = [{
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
    component: _Guest_disputeDetails_disputedetails_component__WEBPACK_IMPORTED_MODULE_5__.DisputeDetailsComponent
  }]
}, // {
//     path: '',
//     children: [ {
//         path: 'offerlist',
//         component: OfferlistComponent,
//     }]
// },
{
  path: '',
  children: [{
    path: 'profile',
    component: _Profile_Profile_component__WEBPACK_IMPORTED_MODULE_3__.ProfileComponent
  }]
}, {
  path: '',
  children: [{
    path: 'offerdetails/:id',
    component: _offerdetails_offerdetails_component__WEBPACK_IMPORTED_MODULE_2__.OfferdetailsComponent
  }]
}, {
  path: '',
  children: [{
    path: 'booking/:id',
    component: _Booking_Booking_component__WEBPACK_IMPORTED_MODULE_4__.BookingComponent
  }]
}];

/***/ }),

/***/ 26761:
/*!********************************************************!*\
  !*** ./src/app/Guest/Offerlist/Offerlist.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfferlistComponent": function() { return /* binding */ OfferlistComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _Offerlist_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Offerlist.component.html?ngResource */ 55262);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 73903);
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
    this.test = new Date();
    this.user = null;
    this.step = 0;
    this.incval = 0;
    this.incval1 = 0;
    this.incval2 = 0;
    this.incval3 = 0;
    this.incval4 = 0;
    this.childList = [];
    var today = new Date();
    var month = today.getMonth();
    var year = today.getFullYear();
    this.campaignOne = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
      start: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(new Date(year, month, 13)),
      end: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(new Date(year, month, 16))
    });
    this.campaignTwo = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
      start: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(new Date(year, month, 15)),
      end: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(new Date(year, month, 19))
    });
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(OfferlistComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      var body = document.getElementsByTagName('body')[0];
      body.classList.add('lock-page');
      body.classList.add('off-canvas-sidebar');
      var card = document.getElementsByClassName('card')[0];
      $(".bd-example-modal-lg").hide();
      $(".bd-example-modal-lg1").hide();

      if (localStorage.getItem("token")) {
        this.user = 'exists';
      }

      this.dataService.get('guest/get-all-ads').then(function (result) {
        _this.offers = result.data;

        for (var i = 0; i < _this.offers.length; i++) {
          var totalPrice = _this.offers[i]['price'];
          var price = totalPrice * (_this.offers[i]['discount_of_percentage'] / 100);
          price = totalPrice - price;
          _this.offers[i]['current_price'] = price;
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
    key: "showdetails",
    value: function showdetails() {
      window.location.href = '#/guest/offerdetails';
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
          this.childList.push(this.incval4);
          this.cdf.detectChanges();
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
          this.childList.pop();
          this.cdf.detectChanges();
          break;
      }
    }
  }]);

  return OfferlistComponent;
}();

OfferlistComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef
  }, {
    type: src_app_services_data_services__WEBPACK_IMPORTED_MODULE_3__.DataService
  }];
};

OfferlistComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-Offerlist-cmp',
  template: _Offerlist_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], OfferlistComponent);


/***/ }),

/***/ 18015:
/*!****************************************************!*\
  !*** ./src/app/Guest/Profile/Profile.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": function() { return /* binding */ ProfileComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _Profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profile.component.html?ngResource */ 50151);
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
    this.passtext111 = "password";
    this.ishidden111 = true;
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
    this.languages = null;
    this.forgot_password_email = null;
    this.showFeedbackErrorAlert = false;
    this.showFeedbackSuccessAlert = false;
    this.user_id = null;
    this.subscriptions = null;
    this.moment = moment__WEBPACK_IMPORTED_MODULE_5__;
    this.plans = null;
    this.plan_id = null;
    this.level = null;
    this.paypalInterval = null;
    this.showSubscribeAlert = false;
    this.paymentDetails = null;
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
      if (localStorage.getItem("token") != null) {
        this.user = 'exists';
      } else {//this.user = null;
        // localStorage.clear();
        // this.router.navigate(['/guest/home'])
      }

      var body = document.getElementsByTagName('body')[0];
      body.classList.add('lock-page');
      body.classList.add('off-canvas-sidebar');
      var card = document.getElementsByClassName('card')[0];
      this.getUser(); // this.getLanguages()

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

      this.dataService.get('host/get-user-data').then(function (result) {
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
    key: "getLanguages",
    value: function getLanguages() {
      var _this2 = this;

      this.dataService.get('host/get-all-languages').then(function (result) {
        _this2.languages = result.data;

        _this2.dataService.get('guest/get-user-languages').then(function (result) {
          var langList = result.data;

          if (langList != null) {
            for (var i = 0; i < langList.length; i++) {
              if (langList[i]['lang_id'] == _this2.languages[i]['id']) {
                $('#lang' + (i + 1)).prop('checked', true);
              }
            }
          }

          _this2.cdf.detectChanges();
        });
      });
    }
  }, {
    key: "getSubscription",
    value: function getSubscription() {
      var _this3 = this;

      this.dataService.get('get-subscribed').then(function (result) {
        _this3.subscriptions = result.data;

        _this3.cdf.detectChanges();
      });
    }
  }, {
    key: "getPlans",
    value: function getPlans() {
      var _this4 = this;

      this.dataService.get('host/get_plan').then(function (result) {
        _this4.plans = result.data;

        _this4.cdf.detectChanges();
      });
    }
  }, {
    key: "getPaymentDetails",
    value: function getPaymentDetails() {
      var _this5 = this;

      this.dataService.get('host/get-payment-details').then(function (result) {
        _this5.paymentDetails = result.data;

        _this5.cdf.detectChanges();
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
        $('#pshides').html("Show");
      } else {
        this.passtext = "text";
        $('#pshides').html("Hide");
      }

      this.cdf.detectChanges();
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
    key: "show111",
    value: function show111() {
      this.ishidden111 = !this.ishidden111;

      if (this.ishidden111 == true) {
        this.passtext111 = "password";
        $('#pshide111').html("Show");
      } else {
        this.passtext111 = "text";
        $('#pshide111').html("Hide");
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
      var _this6 = this;

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
        this.dataService.post('guest/update-personal-info', fd).then(function (result) {
          _this6.data.pic = result.data.pic;

          _this6.cdf.detectChanges();
        }, function (error) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            position: 'center',
            icon: 'error',
            text: 'Soemthing went wrong. Please try again.',
            showConfirmButton: false,
            timer: 2500
          });

          _this6.cdf.detectChanges();
        });
      }
    }
  }, {
    key: "update",
    value: function update() {
      var _this7 = this;

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
      this.dataService.post('guest/update-personal-info', data).then(function (result) {
        _this7.getUser();

        _this7.step = 0;

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
  }, {
    key: "updatePassword",
    value: function updatePassword() {
      var _this8 = this;

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
        } else {
          var data = {
            old_password: current_password,
            new_password: new_password
          };
          this.dataService.post('guest/change-password', data).then(function (result) {
            if (result.success == true) {
              $('#current_password').val(null);
              $('#new_password').val(null);
              $('#confirm_password').val(null);
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
      var _this9 = this;

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
      } else {
        var data = {
          password: validate_password
        };
        this.dataService.post('guest/check-password', data).then(function (result) {
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

          _this9.cdf.detectChanges();
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
    key: "checkPasswordCancel",
    value: function checkPasswordCancel() {
      $('#validate_password').val(null);
      this.cdf.detectChanges();
    }
  }, {
    key: "updateEmail",
    value: function updateEmail() {
      var _this10 = this;

      this.showEmailAlert = false;
      this.new_email = $('#new_email').val();
      var confirm_email = $('#confirm_email').val();

      if (this.new_email != confirm_email) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
          position: 'center',
          icon: 'error',
          text: 'Email does not match',
          showConfirmButton: false,
          timer: 2500
        });
      } else {
        var data = {
          email: this.new_email
        };
        this.dataService.post('guest/change-email', data).then(function (result) {
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
          } // this.cdf.detectChanges();

        }, function (error) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            position: 'center',
            icon: 'error',
            text: 'Soemthing went wrong. Please try again.',
            showConfirmButton: false,
            timer: 2500
          });

          _this10.cdf.detectChanges();
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
      var _this11 = this;

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
      } else {
        var data = {
          email: this.new_email,
          otp: otp
        };
        this.dataService.post('guest/verify-otp', data).then(function (result) {
          if (result.success == true) {
            $('#otpSection').prop('hidden', true);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
              position: 'center',
              icon: 'success',
              text: 'Email Updated Successfully',
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

          _this11.cdf.detectChanges();
        }, function (error) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            position: 'center',
            icon: 'error',
            text: 'Soemthing went wrong. Please try again.',
            timer: 2500
          });

          _this11.cdf.detectChanges();
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
    key: "updateLanguages",
    value: function updateLanguages() {
      var _this12 = this;

      var language_id = [];
      $('.languages').each(function () {
        if ($(this).is(":checked")) {
          language_id.push($(this).val());
        }
      });
      var data = {
        language_id: language_id
      };
      this.dataService.post('guest/update-languages', data).then(function (result) {
        _this12.getLanguages();
      });
    }
  }, {
    key: "verifyEmail",
    value: function verifyEmail() {
      var _this13 = this;

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
            text: 'Something went wrong. Please try again.',
            showConfirmButton: false,
            timer: 2500
          });
        }

        _this13.cdf.detectChanges();
      });
    }
  }, {
    key: "verifyForgoPasswordOtp",
    value: function verifyForgoPasswordOtp() {
      var _this14 = this;

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
            text: 'Something went wrong. Please try again.',
            showConfirmButton: false,
            timer: 2500
          });
        }

        _this14.cdf.detectChanges();
      });
    }
  }, {
    key: "updatePasswordOtp",
    value: function updatePasswordOtp() {
      var _this15 = this;

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
          formData.password = null;
          formData.confirm_password = null;
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
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            position: 'center',
            icon: 'error',
            text: 'Something went wrong. Please try again.',
            showConfirmButton: false,
            timer: 2500
          });
        }

        _this15.cdf.detectChanges();
      });
    }
  }, {
    key: "giveFeedback",
    value: function giveFeedback() {
      var _this16 = this;

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

        _this16.cdf.detectChanges();
      });
    }
  }, {
    key: "cancelSubscription",
    value: function cancelSubscription(id) {
      var _this17 = this;

      var data = {
        plan_id: id
      };
      this.dataService.post('host/cancel-subscription', data).then(function (result) {
        _this17.getSubscription();

        _this17.cdf.detectChanges();
      });
    }
  }, {
    key: "buyPlan",
    value: function buyPlan(id, level, amount) {
      this.plan_id = id;
      this.level = level;
      this.showAlert = false;
      $('#hostplan1').modal('show');
    }
  }, {
    key: "showPaymentSection",
    value: function showPaymentSection() {
      var _this18 = this;

      if ($('#stripe1').is(':checked')) {
        $('#stripeSection1').prop('hidden', false);
        $('#submitPlan1').prop('hidden', false);
        $('#paypalSection1').prop('hidden', true);
      } else {
        $('#stripeSection1').prop('hidden', true);
        $('#submitPlan1').prop('hidden', true);
        $('#paypalSection1').prop('hidden', false);
        var data = {
          plan_id: this.plan_id.toString()
        };
        this.dataService.post('guest/subscribe/paypal', data).then(function (result) {
          if (result.link) {
            $('#clickPayPal1').prop('hidden', false);
            $('#paypalLink1').attr('href', result.link);
          }

          _this18.paypalInterval = setInterval(function () {
            _this18.verify();
          }, 5000);
        });
      }

      this.cdf.detectChanges();
    }
  }, {
    key: "verify",
    value: function verify() {
      var _this19 = this;

      this.dataService.get('guest/verify/paypal/success').then(function (result) {
        if (result.success == true && result.data == 1) {
          $('#hostplan1').modal('hide');
          clearInterval(_this19.paypalInterval);

          _this19.updatePlan();

          _this19.getPaymentDetails();

          _this19.cdf.detectChanges();
        }
      });
    }
  }, {
    key: "updatePlan",
    value: function updatePlan() {
      var _this20 = this;

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

          _this20.getSubscription();

          _this20.cdf.detectChanges();
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            position: 'center',
            icon: 'error',
            text: 'Something went wrong. Please try again.',
            showConfirmButton: false,
            timer: 2500
          });

          _this20.cdf.detectChanges();

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

        _this20.cdf.detectChanges();

        return;
      });
    }
  }, {
    key: "subscribePlan",
    value: function subscribePlan() {
      var _this21 = this;

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

      if ($('#stripe1').is(':checked')) {
        this.dataService.post('guest/stripe_payment', data).then(function (result) {
          if (result.success == 'Subscribe successfully.') {
            $('#hostplan1').modal('hide');
            _this21.planForm = _this21._formBuilder.group({
              plan_id: null,
              type: 'card',
              number: null,
              month: null,
              year: null,
              cvc: null
            });

            _this21.updatePlan();

            _this21.getPaymentDetails();
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
              position: 'center',
              icon: 'error',
              text: 'Something went wrong. Please try again.',
              showConfirmButton: false,
              timer: 2500
            });

            _this21.cdf.detectChanges();

            return;
          }
        });
      }
    }
  }, {
    key: "deletePaymentMethod",
    value: function deletePaymentMethod(payment_method) {
      var _this22 = this;

      var data = {
        payment_method: payment_method
      };
      this.dataService.post('host/delete-payment-details', data).then(function (result) {
        _this22.getPaymentDetails();
      });
    }
  }, {
    key: "updatePayPal",
    value: function updatePayPal() {
      var _this23 = this;

      var data = {
        payment_method: 'paypal',
        email: $('#paypal-email1').val()
      };
      this.dataService.post('host/update-payment-details', data).then(function (result) {
        _this23.getPaymentDetails();
      });
    }
  }, {
    key: "updateStripe",
    value: function updateStripe() {
      var _this24 = this;

      var data = {
        payment_method: 'stripe',
        card: $('#stripe-card1').val(),
        exp_month: $('#stripe-month1').val(),
        exp_yearh: $('#stripe-year1').val(),
        cvc: $('#cvc1').val()
      };
      this.dataService.post('host/update-payment-details', data).then(function (result) {
        _this24.getPaymentDetails();
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
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Directive,
    args: [{
      selector: '[preventCutCopyPaste]'
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: ['planNgForm']
  }]
};
ProfileComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-Profile-cmp',
  template: _Profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], ProfileComponent);


/***/ }),

/***/ 34594:
/*!**************************************************************!*\
  !*** ./src/app/Guest/offerdetails/offerdetails.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfferdetailsComponent": function() { return /* binding */ OfferdetailsComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _offerdetails_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offerdetails.component.html?ngResource */ 28533);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_data_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/data.services */ 7619);
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-intl-tel-input */ 87555);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services */ 9949);
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











var OfferdetailsComponent = /*#__PURE__*/function () {
  function OfferdetailsComponent(router, _formBuilder, routers, cdf, authService, dataService) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, OfferdetailsComponent);

    this.router = router;
    this._formBuilder = _formBuilder;
    this.routers = routers;
    this.cdf = cdf;
    this.authService = authService;
    this.dataService = dataService;
    this.moment = moment__WEBPACK_IMPORTED_MODULE_3__;
    this.fullpath = null;
    this.user = null;
    this.details = null;
    this.sub = null;
    this.id = null;
    this.showAlert = false;
    this.errorMessage = null;
    this.step = 0;
    this.isReadMore = true;
    this.separateDialCode = false;
    this.SearchCountryField = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_7__.SearchCountryField;
    this.CountryISO = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_7__.CountryISO;
    this.preferredCountries = [ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_7__.CountryISO.UnitedStates, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_7__.CountryISO.UnitedKingdom];
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(OfferdetailsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      if (localStorage.getItem("token")) {
        this.user = 'exists';
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
      this.dataService.post('get-ad-by-id', data).then(function (result) {
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
      this.registerForm = this._formBuilder.group({
        fname: null,
        lname: null,
        email: null,
        role: 'guest',
        contact_no: null,
        address: null,
        website: null,
        vat_no: null,
        pic: null
      });
      this.registerForm.controls['email'].disable();
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('lock-page');
      body.classList.remove('off-canvas-sidebar');
    }
  }, {
    key: "bookNow",
    value: function bookNow() {
      var _this2 = this;

      var user_id = localStorage.getItem('id'); //  alert(user_id)

      if (user_id == null) {
        $('.bd-example-modal-lg4').show();
      } else {
        this.dataService.get('host/get-user-data').then(function (result) {
          _this2.registerForm = _this2._formBuilder.group({
            fname: result.data.fname,
            lname: result.data.lname,
            email: result.data.email,
            contact_no: result.data.country_calling_code + result.data.contact_no,
            address: result.data.address,
            website: result.data.website,
            vat_no: result.data.vat_no,
            pic: result.data.pic
          });

          _this2.registerForm.controls['email'].disable();
        });
        $('.bd-example-modal-lg4').show();
        this.cdf.detectChanges();
      } // this.router.navigate(['hostportal/editoffer', id])

    }
  }, {
    key: "sendOTP",
    value: function sendOTP() {
      var _this3 = this;

      this.showAlert = false;
      var formData = this.registerForm.getRawValue();

      if (formData.email == null) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
          position: 'center',
          icon: 'error',
          text: 'Please Fill All Required Fields',
          showConfirmButton: false,
          timer: 2500
        });
        this.cdf.detectChanges();
      } else {
        if (localStorage.getItem('id') != null) {
          this.step = 1;
        } else {
          var data = {
            email: formData.email
          };
          this.dataService.post('test-me', data).then(function (result) {
            if (result.success == true) {
              _this3.step = 1;
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
                position: 'center',
                icon: 'error',
                text: 'Soemthing went wrong. Please try again.',
                showConfirmButton: false,
                timer: 2500
              });
            }
          });
        }

        this.cdf.detectChanges();
      }
    }
  }, {
    key: "update",
    value: function update() {
      var _this4 = this;

      if (this.registerForm.invalid) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
          position: 'center',
          icon: 'error',
          text: 'Please Fill All Required Fields',
          showConfirmButton: false,
          timer: 2500
        });
        this.cdf.detectChanges();
        return;
      }

      if (localStorage.getItem('id') == null) {
        this.step = 2;
        this.cdf.detectChanges();
      } else {
        this.showAlert = false;
        var formData = this.registerForm.getRawValue();
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
        this.dataService.post('guest/update-personal-info', data).then(function (result) {
          _this4.router.navigate(['guestportal/booking', _this4.id]);
        }, function (error) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
            position: 'center',
            icon: 'error',
            text: 'Something went wrong. Please try again.',
            showConfirmButton: false,
            timer: 2500
          });

          _this4.cdf.detectChanges();
        });
      }
    }
  }, {
    key: "register",
    value: function register() {
      var _this5 = this;

      this.showAlert = false;
      var otp = $('#otp').val();

      if (otp == null || otp == '') {
        this.showAlert = true;
        this.errorMessage = 'Please Provide OTP Code';
        this.cdf.detectChanges();
        return;
      }

      var formData = this.registerForm.getRawValue();
      var otpData = {
        email: formData.email,
        otp: otp
      };
      var data = {
        fname: formData.fname,
        lname: formData.lname,
        email: formData.email,
        password: formData.password,
        role: 'guest',
        contact_no: formData.contact_no.nationalNumber,
        country_calling_code: formData.contact_no.dialCode,
        country_code: formData.contact_no.countryCode,
        address: formData.address,
        website: formData.website,
        vat_no: formData.vat_no,
        pic: null
      };
      this.dataService.post('verify-register-otp', otpData).then(function (result) {
        if (result.success == true) {
          _this5.authService.post('register', data).then(function (result) {
            if (result.success == true) {
              localStorage.setItem('token', result.data.token);
              localStorage.setItem('role', result.data.user.role);
              localStorage.setItem('id', result.data.user.id);

              _this5.router.navigate(['guestportal/booking', _this5.id]);
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
                position: 'center',
                icon: 'error',
                text: 'Something went wrong. Please try again.',
                showConfirmButton: false,
                timer: 2500
              });
            }

            _this5.cdf.detectChanges();
          }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
              position: 'center',
              icon: 'error',
              text: 'Soemthing went wrong. Please try again.',
              showConfirmButton: false,
              timer: 2500
            });

            _this5.cdf.detectChanges();
          });
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
            position: 'center',
            icon: 'error',
            text: 'OTP code not valid',
            showConfirmButton: false,
            timer: 2500
          });
        }

        _this5.cdf.detectChanges();
      });
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      $('.bd-example-modal-lg4').hide();
    }
  }, {
    key: "showText",
    value: function showText() {
      this.isReadMore = !this.isReadMore;
    }
  }]);

  return OfferdetailsComponent;
}();

OfferdetailsComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef
  }, {
    type: src_app_services__WEBPACK_IMPORTED_MODULE_5__.AuthenticationService
  }, {
    type: src_app_services_data_services__WEBPACK_IMPORTED_MODULE_4__.DataService
  }];
};

OfferdetailsComponent.propDecorators = {
  registerNgForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
    args: ['registerNgForm']
  }]
};
OfferdetailsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-offerdetails-cmp',
  template: _offerdetails_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], OfferdetailsComponent);


/***/ }),

/***/ 30019:
/*!*************************************************************************!*\
  !*** ./src/app/Guest/Bookdetails/Bookdetails.component.html?ngResource ***!
  \*************************************************************************/
/***/ (function(module) {

module.exports = "<style>\r\n  .nav-tabs,\r\n  .nav-pills {\r\n    border: 0;\r\n    border-radius: 3px;\r\n    padding: 0 15px;\r\n    border-bottom: 1px solid;\r\n    border-color: #cbc2c2;\r\n  }\r\n\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active,\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active:focus,\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active:hover {\r\n    background-color: transparent;\r\n    color: #ed8935;\r\n    border-radius: 0px;\r\n    border: none;\r\n    box-shadow: none;\r\n    border-bottom: 2px solid;\r\n  }\r\n\r\n  agm-map {\r\n    height: 300px !important;\r\n    width: 100%;\r\n    /* This is really important*/\r\n  }\r\n\r\n  .divscroll::-webkit-scrollbar {\r\n    scrollbar-gutter: 2px;\r\n    width: 4px;\r\n    z-index: 10;\r\n    border-radius: 10px;\r\n    background: white;\r\n  }\r\n\r\n  .divscroll::-webkit-scrollbar-thumb {\r\n    background-color: #2d5286;\r\n  }\r\n</style>\r\n\r\n<div class=\"wrapper wrapper-full-page\" *ngIf=\"details\">\r\n  <div class=\"page-header lock-page header-filter\" filter-color=\"black\"\r\n    style=\"background-color:#fafafa; background-size: cover; background-position: top center;\">\r\n    <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-12\">\r\n          <h3><b><a href=\"#/guestportal/bookinglist\" class=\"text-dark\"><i class=\"fa fa-arrow-left mr-2\"></i> </a>{{'trans.Booked_List' | translate}}</b></h3>\r\n\r\n        </div>\r\n        <div class=\"col-md-6 col-lg-5\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-10\">\r\n                  <h4 class=\"mb-0 mt-0\"><b>{{'trans.booked_info' | translate}}</b></h4>\r\n                </div>\r\n                <div class=\"col-2 text-right\">\r\n                  <img class=\"img-fluid rounded \" src=\"./assets/Icons/PNG/More.png\">\r\n\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <h4 class=\"text-success mt-2\" *ngIf=\"details.status == 0\"><b> {{'trans.Active' | translate}}</b></h4>\r\n                  <h4 class=\"text-info mt-2\" *ngIf=\"details.status == 1\"><b> {{'trans.Completed' | translate}}</b></h4>\r\n                  <h4 class=\"text-danger mt-2\" *ngIf=\"details.status == 2\"><b> {{'trans.Cancelled' | translate}}</b></h4>\r\n                  <h4 class=\"mb-0 \"><b>Your accommodation booking </b></h4>\r\n                  <p>You re all set! We sent your confirmation email at “<span class=\"text-danger\">{{ details.email\r\n                      }}</span> ” </p>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <div class=\"card\" style=\"background: #e9f5e9;\">\r\n                    <div class=\"card-body\">\r\n                      <p class=\"mb-1\">\r\n                        <span class=\"text-info mr-2\"> {{'trans.Confirmation_Number' | translate}}:</span>\r\n                        <span id=\"confirmation_number\" class=\"mr-2\">{{ details.confirmation_number }}</span>\r\n                        <img src=\"../assets/Icons/PNG/Copy.png\" alt=\"copy\" (click)=\"copyConfirmationNumber()\" />\r\n                      </p>\r\n                      <p hidden><span class=\"text-info\" class=\"mr-2\">Pin:</span><img\r\n                          src=\"../assets/Icons/PNG/Copy.png\" /></p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <hr>\r\n                  <h4><b>{{ details.ad.title }}</b></h4>\r\n                </div>\r\n                <div class=\"col-12 d-flex\">\r\n                  <div>\r\n                    <img class=\"img-fluid rounded mr-3\" src=\"./assets/Icons/PNG/Calender Black.png\">\r\n                  </div>\r\n                  <div>\r\n                    <p class=\"mb-0\" hidden> <b>Sat, May 15, 2021 - Mon, May 17, 2021 </b></p>\r\n                    <p class=\"mb-0 text-info\">Check-in: {{moment(details.ad.start_from).format('ddd')}},\r\n                      {{moment(details.ad.start_from).format('MMM Do, YYYY')}} </p>\r\n                    <p class=\"mb-0 text-info\">Check-out: {{moment(details.ad.end_to).format('ddd')}},\r\n                      {{moment(details.ad.end_to).format('MMM Do, YYYY')}} </p>\r\n                    <p><a class=\"text-danger\"><u>Change Date</u></a></p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <hr>\r\n                </div>\r\n\r\n                <div class=\"col-12 d-flex\">\r\n                  <div>\r\n                    <img class=\"img-fluid rounded mr-3\" src=\"./assets/Icons/PNG/Location Black.png\">\r\n                  </div>\r\n                  <div>\r\n                    <h4 class=\"mb-0\"> <b> {{'trans.Offer_address' | translate}}</b> </h4>\r\n                    <p class=\"mb-0\">\r\n                      <span id=\"address\">{{ details.ad.address }}</span>\r\n                      <img class=\"ml-2\" src=\"../assets/Icons/PNG/Copy.png\" alt=\"copy\" (click)=\"copyAddress()\" />\r\n                    </p>\r\n                    <p><a target=\"_blank\"\r\n                        href=\"https://www.google.com/maps/search/?api=1&query={{details.ad.lat}},{{details.ad.lan}}\"\r\n                        class=\"text-danger\"><u> {{'trans.Get_Direction' | translate}}</u></a></p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <hr>\r\n                </div>\r\n\r\n                <div class=\"col-12 d-flex\">\r\n                  <div>\r\n                    <img class=\"img-fluid rounded mr-3\" src=\"./assets/Icons/PNG/Offer policies.png\">\r\n                  </div>\r\n                  <div>\r\n                    <h4 class=\"mb-0\"> <b> {{'trans.Offer_policies' | translate}}</b> </h4>\r\n                    <a class=\"mb-0 text-danger\" data-toggle=\"modal\" data-target=\"#terms\"> <u> {{'trans.View_all_policies' | translate}}</u></a>\r\n                  </div>\r\n                  <hr>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <hr>\r\n                </div>\r\n\r\n                <div class=\"col-12 d-flex\">\r\n                  <div>\r\n                    <img class=\"img-fluid rounded mr-3\" src=\"./assets/Icons/PNG/Contact the offer.png\">\r\n                  </div>\r\n                  <div>\r\n                    <h4 class=\"mb-0\"> <b> {{'trans.Contact_the_offer' | translate}}</b> </h4>\r\n                    <p class=\"mb-0\">  {{'trans.Discuss_changes_to_your_booking' | translate}}</p>\r\n\r\n                    <div class=\"d-flex mt-3\">\r\n                      <div>\r\n                        <img class=\"img-fluid rounded mr-3\" src=\"./assets/Icons/PNG/Contact number.png\">\r\n                      </div>\r\n                      <div>\r\n                        <h4 class=\"mb-0\"><b>  {{'trans.Contact_number' | translate}}</b></h4>\r\n                        <p class=\"text-danger\">+41-745-5541-35</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <div class=\"card\" style=\"background: #e9f5e9;\">\r\n                    <div class=\"card-body\">\r\n                      <h4> {{'trans.Total_price_for' | translate}} <span *ngIf=\"details.ad.rooms != 0\"><span *ngIf=\"details.ad.rooms == 1\">{{\r\n                            details.ad.rooms }} room</span><span *ngIf=\"details.ad.rooms > 1\">{{ details.ad.rooms }}\r\n                            rooms</span></span></h4>\r\n                      <!-- <p class=\"ml-4\">\r\n                          Rooms: <b>{{ details.ad.rooms }}</b> <br>\r\n                          Bathrooms: <b>{{ details.ad.bathrooms }}</b> <br>\r\n                          Single Bed: <b>{{ details.ad.single_bed }}</b> <br>\r\n                          Double Bed: <b>{{ details.ad.double_bed }}</b> <br>\r\n                          Large Bed: <b>{{ details.ad.large_bed }}</b> <br>\r\n                          Extra Large Bed: <b>{{ details.ad.extra_large_bed }}</b>\r\n                      </p> -->\r\n                      <h3 class=\"mb-0\"><b> <del class=\"text-danger\">{{ details.ad.currency }}{{ details.total_price }}</del> {{ details.ad.currency }}{{\r\n                          details.net_price }}</b></h3>\r\n                      <p hidden>+$9 taxes and charges</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#exampleModal\"> {{'trans.View_facilites' | translate}}</a>\r\n                </div>\r\n                <div class=\"col-12\" *ngIf=\"details.status == 0\">\r\n                  <br>\r\n                  <button class=\"btn btn-danger btn-round btn-block py-3\" data-toggle=\"modal\"\r\n                    data-target=\"#booking\"> {{'trans.Cancel_Booking' | translate}}</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-lg-7\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 border-bottom\">\r\n                  <h3 class=\"mb-0 mt-0\"><i class=\"fa fa-arrow-left  d-lg-none d-md-none d-xl-none mr-2\"\r\n                      (click)=\"back()\"></i><b>{{ details.ad.title }}</b> <small style=\"float:right;\"><img\r\n                        src=\"../assets/Icons/PNG/More.png\" /> </small> </h3>\r\n                  <p class=\"\">{{moment().format('MMM Do, YYYY')}}</p>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row py-3 divscroll mb-3\" id=\"divscroll\"\r\n                style=\"overflow: auto; height: 400px; overflow-x: hidden;\">\r\n                <div class=\"col-md-12\" *ngFor=\"let ls of offerMessages\">\r\n                  <div class=\"d-flex\" *ngIf=\"user_id == ls.receiver.id\">\r\n                    <div *ngIf=\"ls.sender.pic\">\r\n                      <img src=\"http://oneroom3.crosip.com/{{ls.sender.pic}}\" alt=\"Img\" height=\"50\"\r\n                        width=\"50\" class=\"mr-3 rounded-circle\">\r\n                    </div>\r\n                    <div *ngIf=\"!ls.sender.pic\">\r\n                      <img src=\"https://onerooms.ch/assets/Images/tempprofile.png\" alt=\"Img\" height=\"50\"\r\n                        width=\"50\" class=\"mr-3 rounded-circle\">\r\n                    </div>\r\n                    <div>\r\n                      <div *ngIf=\"ls.message != null\" class=\"mt-2\"\r\n                        style=\"align-self: center; width: 270px; background-color: #dcdcdc; height: auto; padding:10px; border-radius: 12px;\">\r\n                        <p class=\"mb-1\">{{ ls.message }}</p>\r\n                        <p><span class=\"float-right\">{{moment(ls.created_at).format('ddd')}} |\r\n                            {{moment(ls.created_at).format('MMM DD, YYYY')}} |\r\n                            {{moment(ls.created_at).format('hh:mm a')}}</span></p>\r\n                      </div>\r\n                      <div *ngIf=\"ls.attachment_file != null\" class=\"mt-2\"\r\n                        style=\"align-self: center; width: 270px; background-color: #dcdcdc; height: auto; padding:10px; border-radius: 12px;\">\r\n                        <p class=\"mb-1\"><a href=\"http://oneroom3.crosip.com/{{ls.attachment_file}}\" target=\"_blank\">See\r\n                            Attachment</a></p>\r\n                        <p><span class=\"float-right\">{{moment(ls.created_at).format('ddd')}} |\r\n                            {{moment(ls.created_at).format('MMM DD, YYYY')}} |\r\n                            {{moment(ls.created_at).format('hh:mm a')}}</span></p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"d-flex pull-right\" *ngIf=\"user_id == ls.sender.id\">\r\n                    <div id=\"sender_new_message\">\r\n                      <div *ngIf=\"ls.message != null\" class=\"mt-2\"\r\n                        style=\"align-self: center; width: 270px; background-color:#e95228; height: auto; padding:10px; border-radius: 12px;\">\r\n                        <p class=\"mb-1\" style=\"color:white !important;\">{{ ls.message }}</p>\r\n                        <p><span class=\"float-right\"\r\n                            style=\"color:white !important;\">{{moment(ls.created_at).format('ddd')}} |\r\n                            {{moment(ls.created_at).format('MMM DD, YYYY')}} |\r\n                            {{moment(ls.created_at).format('hh:mm a')}}</span></p>\r\n                      </div>\r\n                      <div *ngIf=\"ls.attachment_file != null\" class=\"mt-2\"\r\n                        style=\"align-self: center; width: 270px; background-color:#e95228; color:white !important; height: auto; padding:10px; border-radius: 12px;\">\r\n                        <p class=\"mb-1\"><a href=\"http://oneroom3.crosip.com/{{ls.attachment_file}}\" target=\"_blank\"\r\n                            style=\"color:white !important;\">See Attachment</a></p>\r\n                        <p><span class=\"float-right\"\r\n                            style=\"color:white !important;\">{{moment(ls.created_at).format('ddd')}} |\r\n                            {{moment(ls.created_at).format('MMM DD, YYYY')}} |\r\n                            {{moment(ls.created_at).format('hh:mm a')}}</span></p>\r\n                      </div>\r\n                    </div>\r\n                    <div *ngIf=\"ls.sender.pic\">\r\n                      <img src=\"http://oneroom3.crosip.com/{{ls.sender.pic}}\" alt=\"Img\" height=\"50\"\r\n                        width=\"50\" class=\"mr-3 rounded-circle\">\r\n                    </div>\r\n                    <div *ngIf=\"!ls.sender.pic\">\r\n                      <img src=\"https://onerooms.ch/assets/Images/tempprofile.png\" alt=\"Img\" height=\"50\"\r\n                        width=\"50\" class=\"mr-3 rounded-circle\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row w-100 py-1\" style=\"position: absolute; bottom: 0;\">\r\n                <div class=\"col-12\" style=\"padding: 5px;background: #f6f7f8;\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-2 text-center\" style=\"align-self: center;\">\r\n                      <!-- <i class=\"fa fa-camera fa-2x\" aria-hidden=\"true\" style=\"color: #203a60\"></i> &nbsp; -->\r\n                      <img src=\"../assets/Icons/PNG/Camera.png\"> &nbsp;\r\n                      <label for=\"file\">\r\n                        <!-- <i class=\"fa fa-picture-o fa-2x\" aria-hidden=\"true\" style=\"color: #203a60\"></i> -->\r\n                        <img src=\"../assets/Icons/PNG/image.png\">\r\n                        <input type=\"file\" id=\"file\" style=\"display: none\" name=\"image\"\r\n                          accept=\"image/jpeg,image/jpg,image/png\" multiple=\"\" data-original-title=\"upload photos\"\r\n                          (change)=\"sendMessageAttachment($event, details.customer.id, details.ad.user_id, details.ad.id)\">\r\n                      </label>\r\n                    </div>\r\n                    <div class=\"col-9 text-left\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Aa\" id=\"sender_message\"\r\n                        style=\"background-image: none;background-color: white; border: 1px solid #dee2e6; border-radius: 20px; padding-left: 20px;\">\r\n                    </div>\r\n                    <div class=\"col-1 text-left\" style=\"margin-left: -15px; margin-top: 0.4rem;cursor: pointer;\">\r\n                      <img src=\"../assets/Icons/PNG/Sender_normal.png\" (click)=\"sendMessage(details.customer.id, details.ad.user_id, details.ad.id)\">\r\n                      <!-- <i class=\"fa fa-location-arrow fa-2x\" aria-hidden=\"true\" style=\"color: #203a60\"></i> (click)=\"sendMessage(details.customer.id, details.ad.user_id, details.ad.id)\"-->\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n      aria-hidden=\"true\">\r\n      <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title text-left\" id=\"exampleModalLabel\">Facilities</h5>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12 d-flex\" *ngFor=\"let features of details.ad.features\">\r\n                <div class=\"mr-4\"><img src=\"http://oneroom3.crosip.com/{{ features.feature.icon }}\" width=\"64\" /></div>\r\n                <div class=\"ml-4\">\r\n                  <h4><b>{{features.feature.name}}</b></h4>\r\n                  <p>{{features.feature.description}}</p>\r\n                  <hr>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal fade bd-example-modal-lg\" id=\"booking\" tabindex=\"-1\" role=\"dialog\"\r\n      aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title text-left\" id=\"exampleModalLabel\"> {{'trans.Cancel_Booking' | translate}}</h5>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <form [formGroup]=\"bookingForm\" #bookingNgForm=\"ngForm\">\r\n            <div class=\"modal-body\">\r\n              <hr>\r\n              <div *ngIf=\"showAlert\" style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n                class=\"alert alert-error\">{{ errorMessage }}</div>\r\n              <div class=\"form-group\">\r\n                <label> {{'trans.Cancellation_Reason' | translate}}</label>\r\n                <textarea class=\"form-control\" [formControlName]=\"'message'\" required></textarea>\r\n              </div>\r\n              <hr>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancelBooking()\">Submit</button> &nbsp; &nbsp;\r\n              <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\" style=\"color: black;\">Close</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal fade bd-example-modal-lg\" id=\"terms\" tabindex=\"-1\" role=\"dialog\"\r\n      aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title text-left\" id=\"exampleModalLabel\">Booking Conditions</h5>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\" *ngIf=\"details\">\r\n            <hr>\r\n            {{ details.ad.terms_policies }}\r\n            <hr>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-gFooter-web></app-gFooter-web>\r\n\r\n  </div>\r\n</div>";

/***/ }),

/***/ 61142:
/*!*****************************************************************!*\
  !*** ./src/app/Guest/Booking/Booking.component.html?ngResource ***!
  \*****************************************************************/
/***/ (function(module) {

module.exports = "<style>\r\n  .form-control, .is-focused .form-control {\r\n    background-image: none;\r\n    border: 1px solid #d4d2d2;\r\n    border-radius: 5px;\r\n    padding: 18px;\r\n    margin-top: 5px;\r\n    background: white;\r\n  }\r\n</style>\r\n\r\n<div class=\"wrapper wrapper-full-page\" *ngIf=\"details\">\r\n  <div class=\"page-header lock-page header-filter\" filter-color=\"black\"\r\n    style=\"background-color:#fafafa; background-size: cover; background-position: top center;\">\r\n    <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-center\" style=\"margin-top: 3vh;\">\r\n        <div class=\"col-12\">\r\n          <h3 class=\"mb-1\"><b><a (click)=\"getOfferDetails(id)\" class=\"text-dark\"><i class=\"fa fa-arrow-left mr-2\"></i>\r\n              </a>Finish booking </b></h3>\r\n        </div>\r\n        <div class=\"col-md-8\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\" *ngIf=\"data\">\r\n              <form [formGroup]=\"bookingForm\" #bookingNgForm=\"ngForm\">\r\n                <div *ngIf=\"showAlert\" style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n                    class=\"alert alert-error\">{{ errorMessage }}</div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <h3 class=\"mb-0 mt-0\"><b>Booking Info</b></h3>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                      <label>First Name</label>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Type First Name\" [formControlName]=\"'fname'\" pattern=\"^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$\" title=\"Invalid First Name\"/>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                      <label>Last Name</label>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Type Last Name\" [formControlName]=\"'lname'\" pattern=\"^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$\" title=\"Invalid Last Name\"/>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                      <label>Email</label>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Email\" [formControlName]=\"'email'\"/>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                      <label style=\"margin-bottom: 13px;\">Mobile</label><br>\r\n                      <ngx-intl-tel-input [cssClass]=\"'custom'\" style=\"width: 100%\"\r\n                        [preferredCountries]=\"[CountryISO.UnitedStates, CountryISO.UnitedKingdom]\"\r\n                        [enableAutoCountrySelect]=\"true\" [enablePlaceholder]=\"true\" [searchCountryFlag]=\"true\"\r\n                        [searchCountryField]=\"[SearchCountryField.Iso2, SearchCountryField.Name]\"\r\n                        [selectedCountryISO]=\"CountryISO.UnitedKingdom\" [phoneValidation]=\"true\" name=\"phone\"\r\n                        [formControlName]=\"'mobile_no'\">\r\n                      </ngx-intl-tel-input>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                      <label>Address</label>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Type Address\" [formControlName]=\"'address'\"/>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-12\">\r\n                    <div class=\"form-group\">\r\n                      <label><input type=\"checkbox\" class=\"mr-2\" />Save this info to your account to have it refilled next time</label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-12\">\r\n                    <button class=\"btn btn-danger\" (click)=\"booking()\">Book Now</button>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-12 d-flex\">\r\n                  <div class=\"mr-2\">\r\n                    <img src=\"http://oneroom3.crosip.com/{{ details.attachments[0].path }}\" width=\"80\" height=\"80\"/>\r\n                  </div>\r\n                  <div>\r\n                    <h4><b>{{ details.title }}</b></h4>\r\n                    <p>{{ details.address }}</p>\r\n\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <hr>\r\n                </div>\r\n                <div class=\"col-12 d-flex\">\r\n                  <div class=\"mr-2\" style=\"color:#728aad;\">\r\n                    <p class=\"mb-0\">Check-in</p>\r\n                    <p class=\"mb-0\">Check-out</p>\r\n                    <p class=\"mb-0\">Guest</p>\r\n                  </div>\r\n                  <div>\r\n                    <p class=\"mb-0\">: {{moment(details.start_from).format('ddd')}},\r\n                      {{moment(details.start_from).format('MMM Do, YYYY')}}</p>\r\n                    <p class=\"mb-0\">: {{moment(details.end_to).format('ddd')}}, {{moment(details.end_to).format('MMM Do,\r\n                      YYYY')}}</p>\r\n                    <p class=\"mb-0\">: {{ details.guests }}</p>\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"col-12 mt-2\">\r\n                  <p class=\"text-danger\"><b>For </b> <span *ngIf=\"details.rooms != 0\"><span *ngIf=\"details.rooms == 1\">{{\r\n                    details.rooms }} room</span><span *ngIf=\"details.rooms > 1\">{{ details.rooms }}\r\n                    rooms</span></span>\r\n                  </p>\r\n                  <hr>\r\n                  <h4>Superior double room</h4>\r\n                </div>\r\n                <div class=\"col-12 d-flex\">\r\n                  <div class=\"mr-2\">\r\n                    <img src=\"../assets/Icons/PNG/Non-refundable.png\" />\r\n                  </div>\r\n                  <div>\r\n                    <h4><b>Non refundable</b></h4>\r\n                    <p>There are many variations of passages of Lorem\r\n                      Ipsum available, but the majority have suffered\r\n                      alteration in some form injected.</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-12 d-flex\">\r\n                  <div class=\"mr-2\">\r\n                    <img src=\"../assets/Icons/PNG/Booking_user.png\" />\r\n                  </div>\r\n                  <div *ngIf=\"data\">\r\n                    <h4><b>Booking for “{{ this.data.fname }} {{ this.data.lname }}\"</b></h4>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#terms\"><u>Booking conditions</u></a>\r\n                  <hr>\r\n                </div>\r\n                <div class=\"col-12 mt-2\">\r\n                  <div class=\"row \">\r\n                    <div class=\"col-12\">\r\n                      <p class=\"mb-1 \" style=\"color: black;\">\r\n                        <b>Price for </b><span *ngIf=\"details.rooms != 0\"><span *ngIf=\"details.rooms == 1\">{{\r\n                            details.rooms }} room</span><span *ngIf=\"details.rooms > 1\">{{ details.rooms }}\r\n                            rooms</span></span>\r\n                      </p>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                      <p class=\"mb-0 \" style=\"color: #728aad;\">\r\n\r\n                        Price</p>\r\n                    </div>\r\n                    <div class=\"col-6 text-right\">\r\n                      <p class=\"mb-0 \" style=\"color: black;\">\r\n                        <b>\r\n                          {{ details.currency }}{{ details.price }}</b>\r\n                      </p>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                      <p class=\"mb-0 \" style=\"color: #728aad;\">\r\n\r\n                        Discount ({{ details.discount_of_percentage }}%)</p>\r\n                    </div>\r\n                    <div class=\"col-6 text-right\">\r\n                      <p class=\"mb-0 \" style=\"color: red;\">\r\n                        <b>\r\n                          -{{ details.currency }}{{ details.discountPrice }}</b>\r\n                      </p>\r\n                    </div>\r\n                    <div class=\"col-6\" hidden>\r\n                      <p class=\"mb-0 \" style=\"color: #728aad;\">\r\n\r\n                        Taxes and charges</p>\r\n                    </div>\r\n                    <div class=\"col-6 text-right\" hidden>\r\n                      <p class=\"mb-0 \">\r\n                        <b>\r\n                          -$44.00</b>\r\n                      </p>\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                      <hr>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                      <p class=\"mb-0 \">\r\n\r\n                        <b>Total</b>\r\n                      </p>\r\n                    </div>\r\n                    <div class=\"col-6 text-right\">\r\n                      <p class=\"mb-0 \" style=\"color: #728aad;\">\r\n                        <b>{{ details.currency }}{{ details.totalPrice }}</b>\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal fade bd-example-modal-lg\" id=\"terms\" tabindex=\"-1\" role=\"dialog\"\r\n      aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title text-left\" id=\"exampleModalLabel\">Booking Conditions</h5>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <hr>\r\n            {{ details.terms_policies }}\r\n            <hr>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>";

/***/ }),

/***/ 68356:
/*!*************************************************************************!*\
  !*** ./src/app/Guest/Bookinglist/Bookinglist.component.html?ngResource ***!
  \*************************************************************************/
/***/ (function(module) {

module.exports = "<style>\r\n  .nav-tabs,\r\n  .nav-pills {\r\n    border: 0;\r\n    border-radius: 3px;\r\n    padding: 0 15px;\r\n    border-bottom: 1px solid;\r\n    border-color: #cbc2c2;\r\n  }\r\n\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active,\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active:focus,\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active:hover {\r\n    background-color: transparent !important;\r\n    color: #ed8935 !important;\r\n    border-radius: 0px;\r\n    border: none;\r\n    box-shadow: none;\r\n    border-bottom: 2px solid;\r\n  }\r\n</style>\r\n\r\n<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header lock-page header-filter\" filter-color=\"black\"\r\n    style=\"background-color:#fafafa; background-size: cover; background-position: top center;\">\r\n    <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-left\" style=\"margin-top: 4vh;\">\r\n        <div class=\"col-12\">\r\n          <h3><b> {{'trans.Booked_List' | translate}}</b></h3>\r\n          <ul class=\"nav nav-pills nav-pills-danger justify-content-left pl-0\" role=\"tablist\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link active px-3 py-1\" style=\"min-width:50px !important;\" data-toggle=\"tab\" href=\"#link1\"\r\n                role=\"tablist\">\r\n                 {{'trans.Active' | translate}}\r\n              </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link px-3 py-1\" style=\"min-width:50px !important;\" data-toggle=\"tab\" href=\"#link2\"\r\n                role=\"tablist\">\r\n                 {{'trans.Completed' | translate}}\r\n              </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link px-3 py-1\" style=\"min-width:50px !important;\" data-toggle=\"tab\" href=\"#link3\"\r\n                role=\"tablist\">\r\n                 {{'trans.Cancelled' | translate}}\r\n              </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link px-3 py-1\" style=\"min-width:50px !important;\" data-toggle=\"tab\" href=\"#link4\"\r\n                role=\"tablist\">\r\n                 {{'trans.Dispute' | translate}}\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"tab-content tab-space col-12\">\r\n          <div class=\"tab-pane active \" id=\"link1\">\r\n            <div class=\"row\" *ngIf='bookingList0'>\r\n              <div class=\"col-md-6\" *ngFor=\"let booking of bookingList0\">\r\n                <div class=\"card mt-1 mb-1\" (click)=\"getBookingDetails(booking.id)\">\r\n                  <div class=\"py-0 px-3\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-4 col-lg-3\"\r\n                        style=\"background:url('http://oneroom3.crosip.com/{{ booking.ad.attachments[0].path }}'); background-size: cover;border-radius: 6px 0px 0px 6px;\">\r\n                        <img class=\"img-fluid rounded w-100\">\r\n                      </div>\r\n                      <div class=\"col-md-8 col-lg-9\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12 pt-3\">\r\n                            <h4 class=\"mb-0\"><b>{{ booking.ad.title }}</b></h4>\r\n                          </div>\r\n                          <div class=\"col-12\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-md-4\">\r\n                                <p class=\"mb-0 py-1\">Price</p>\r\n                              </div>\r\n                              <div class=\"col-md-8\">\r\n                                <p class=\"mb-0 py-1\"><b>: {{ booking.ad.currency }}{{ booking.net_price }}</b></p>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                              <div class=\"col-md-4\">\r\n                                <p class=\"mb-0 py-1\">Duration</p>\r\n                              </div>\r\n                              <div class=\"col-md-8\">\r\n                                <p class=\"mb-0 py-1\">: {{moment(booking.ad.start_from).format('ddd')}}, {{moment(booking.ad.start_from).format('MMM Do, YYYY')}} - {{moment(booking.ad.end_to).format('ddd')}}, {{moment(booking.ad.end_to).format('MMM Do, YYYY')}}</p>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                              <div class=\"col-md-4\">\r\n                                <p class=\"mb-0 py-1\">Location</p>\r\n                              </div>\r\n                              <div class=\"col-md-8\">\r\n                                <p class=\"mb-0 py-1\">: {{ booking.ad.address }}</p>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                              <div class=\"col-md-4\">\r\n                                <p class=\"mb-0 py-1 pb-3\">Status</p>\r\n                              </div>\r\n                              <div class=\"col-md-8\">\r\n                                <p class=\"mb-0 py-1 pb-3 text-success\">: Active</p>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row \" *ngIf='!bookingList0'>\r\n              <div class=\"col-md-12 text-center\">\r\n                <h3>No Records Found</h3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n            <!-- <div class=\"row\">\r\n              <div class=\"col-12 text-center\">\r\n                <button class=\"btn btn-outline-danger btn-round\">More Active Offer</button>\r\n              </div>\r\n            </div> -->\r\n\r\n          <div class=\"tab-pane \" id=\"link2\">\r\n            <div class=\"row\" *ngIf='bookingList1'>\r\n              <div class=\"col-md-6\" *ngFor=\"let booking of bookingList1\">\r\n                <div class=\"card mt-1 mb-1\" (click)=\"getBookingDetails(booking.id)\">\r\n                  <div class=\"py-0 px-3\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-4 col-lg-3\"\r\n                        style=\"background:url('http://oneroom3.crosip.com/{{ booking.ad.attachments[0].path }}'); background-size: cover;border-radius: 6px 0px 0px 6px;\">\r\n                        <img class=\"img-fluid rounded w-100\">\r\n                      </div>\r\n                      <div class=\"col-md-8 col-lg-9\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12 pt-3\">\r\n                            <h4 class=\"mb-0\"><b>{{ booking.ad.title }}</b></h4>\r\n                          </div>\r\n                          <div class=\"col-4\">\r\n                            <p class=\"mb-0 py-1\">Price</p>\r\n                            <p class=\"mb-0 py-1\">Duration</p>\r\n                            <p class=\"mb-0 py-1\">Location</p>\r\n                            <p class=\"mb-0 py-1 pb-3\">Status</p>\r\n\r\n                          </div>\r\n                          <div class=\"col-8\">\r\n                            <p class=\"mb-0 py-1\"><b>: {{ booking.ad.currency }}{{ booking.net_price }}</b></p>\r\n                            <p class=\"mb-0 py-1\">: {{moment(booking.ad.start_from).format('ddd')}}, {{moment(booking.ad.start_from).format('MMM Do, YYYY')}} - {{moment(booking.ad.end_to).format('ddd')}}, {{moment(booking.ad.end_to).format('MMM Do, YYYY')}}</p>\r\n                            <p class=\"mb-0 py-1\">: {{ booking.ad.address }}</p>\r\n                            <p class=\"mb-0 py-1 pb-3 text-success\">: Completed</p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row \" *ngIf='!bookingList1'>\r\n              <div class=\"col-md-12 text-center\">\r\n                <h3>No Records Found</h3>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"row \">\r\n              <div class=\"col-12 text-center\">\r\n                <button class=\"btn btn-outline-danger btn-round\">More Active Offer</button>\r\n              </div>\r\n            </div> -->\r\n          </div>\r\n          <div class=\"tab-pane \" id=\"link3\">\r\n            <div class=\"row\" *ngIf='bookingList2'>\r\n              <div class=\"col-md-6\" *ngFor=\"let booking of bookingList2\">\r\n                <div class=\"card mt-1 mb-1\" (click)=\"getBookingDetails(booking.id)\">\r\n                  <div class=\"py-0 px-3\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-4 col-lg-3\"\r\n                        style=\"background:url('http://oneroom3.crosip.com/{{ booking.ad.attachments[0].path }}'); background-size: cover;border-radius: 6px 0px 0px 6px;\">\r\n                        <img class=\"img-fluid rounded w-100\">\r\n                      </div>\r\n                      <div class=\"col-md-8 col-lg-9\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12 pt-3\">\r\n                            <h4 class=\"mb-0\"><b>{{ booking.ad.title }}</b></h4>\r\n                          </div>\r\n                          <div class=\"col-4\">\r\n                            <p class=\"mb-0 py-1\">Price</p>\r\n                            <p class=\"mb-0 py-1\">Duration</p>\r\n                            <p class=\"mb-0 py-1\">Location</p>\r\n                            <p class=\"mb-0 py-1 pb-3\">Status</p>\r\n\r\n                          </div>\r\n                          <div class=\"col-8\">\r\n                            <p class=\"mb-0 py-1\"><b>: {{ booking.ad.currency }}{{ booking.net_price }}</b></p>\r\n                            <p class=\"mb-0 py-1\">: {{moment(booking.ad.start_from).format('ddd')}}, {{moment(booking.ad.start_from).format('MMM Do, YYYY')}} - {{moment(booking.ad.end_to).format('ddd')}}, {{moment(booking.ad.end_to).format('MMM Do, YYYY')}}</p>\r\n                            <p class=\"mb-0 py-1\">: {{ booking.ad.address }}</p>\r\n                            <p class=\"mb-0 py-1 pb-3 text-success\">: Cancelled</p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row \" *ngIf='!bookingList2'>\r\n              <div class=\"col-md-12 text-center\">\r\n                <h3>No Records Found</h3>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"row \">\r\n              <div class=\"col-12 text-center\">\r\n                <button class=\"btn btn-outline-danger btn-round\">More Active Offer</button>\r\n              </div>\r\n            </div> -->\r\n          </div>\r\n          <div class=\"tab-pane\" id=\"link4\">\r\n            <div class=\"row\" *ngIf='bookingList3.length != 0'>\r\n              <div class=\"col-md-6\" *ngFor=\"let offer of bookingList3\">\r\n                <div class=\"card mt-3 mb-1\" (click)=\"disputeDetails(offer.id)\">\r\n                  <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-4 col-lg-3\">\r\n                        <img class=\"img-fluid rounded\" src=\"http://oneroom3.crosip.com/{{ offer.offer.attachments[0].path }}\">\r\n                      </div>\r\n                      <div class=\"col-md-8 col-lg-9\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12\">\r\n                            <h4 class=\"mb-0\"><b>{{ offer.offer.title }}</b></h4>\r\n                          </div>\r\n                          <div class=\"col-5\">\r\n                            <p class=\"mb-0\">Check-In</p>\r\n                            <p class=\"mb-0\">Check-OUt</p>\r\n                            <p class=\"mb-0\">Price</p>\r\n                            <p class=\"mb-0\">Guests</p>\r\n                            <p class=\"mb-0\">Status</p>\r\n                          </div>\r\n                          <div class=\"col-7\">\r\n                            <p class=\"mb-0\">: {{moment(offer.offer.start_from).format('ddd')}}, {{moment(offer.offer.start_from).format('MMM Do, YYYY')}}</p>\r\n                            <p class=\"mb-0\">: {{moment(offer.offer.end_to).format('ddd')}}, {{moment(offer.offer.end_to).format('MMM Do, YYYY')}}</p>\r\n                            <p class=\"mb-0\"><b>: {{ offer.offer.currency }}{{ offer.offer.current_price }}</b></p>\r\n                            <p class=\"mb-0\">: {{ offer.offer.guests }}</p>\r\n                            <p class=\"mb-0 text-danger\">: Dispute</p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf='bookingList3.length == 0'>\r\n              <div class=\"col-md-12 text-center\">\r\n                <h3>No Records Found</h3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-gFooter-web></app-gFooter-web>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 6972:
/*!*************************************************************************!*\
  !*** ./src/app/Guest/Createoffer/Createoffer.component.html?ngResource ***!
  \*************************************************************************/
/***/ (function(module) {

module.exports = "<style>\r\n\r\n.nav-pills .nav-item .nav-link {\r\n  font-size: 16px !important;\r\n}\r\n.togglebutton label .toggle:after {\r\n    width: 30px;\r\n    height: 28px;\r\n}\r\n.togglebutton label input[type=checkbox]:checked + .toggle:after {\r\n    left: 26px;\r\n}\r\n.togglebutton label .toggle, .togglebutton label input[type=checkbox][disabled] + .toggle {\r\n    content: \"\";\r\n    display: inline-block;\r\n    width: 55px;\r\n    height: 25px;\r\n}\r\n</style>\r\n\r\n<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header lock-page header-filter\" filter-color=\"black\" style=\"background-color:#fafafa; background-size: cover; background-position: top center;\" >\r\n    <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\r\n    <div class=\"container\" >\r\n      <div class=\"row justify-content-left\" style=\"margin-top: 4vh;\">\r\n        <div class=\"col-12\">\r\n          <h3 class=\"ml-2\"><b>Let’s set up your offer</b></h3>\r\n          <div class=\"col-md-12\" >\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"card mt-0\">\r\n                  <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-12\">\r\n                        <h3 class=\"ml-3\"><b>Overview</b></h3>\r\n                        <ul class=\"nav nav-pills flex-column nav-pills-danger justify-content-left\" role=\"tablist\">\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link text-capitalize font-weight-bold  text-left px-3 py-1\"  data-toggle=\"tab\" href=\"#link1\" role=\"tablist\">\r\n                              Offer Title\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" data-toggle=\"tab\" href=\"#link2\" role=\"tablist\">\r\n                              Offer Type\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" data-toggle=\"tab\" href=\"#link3\" role=\"tablist\">\r\n                              Price\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" data-toggle=\"tab\" href=\"#link4\" role=\"tablist\">\r\n                              Photo & video\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" data-toggle=\"tab\" href=\"#link5\" role=\"tablist\">\r\n                              Capacity\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" data-toggle=\"tab\" href=\"#link6\" role=\"tablist\">\r\n                              Period\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" data-toggle=\"tab\" href=\"#link7\" role=\"tablist\">\r\n                              Description\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" data-toggle=\"tab\" href=\"#link8\" role=\"tablist\">\r\n                              Location\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" data-toggle=\"tab\" href=\"#link9\" role=\"tablist\">\r\n                              Equipment feature\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" data-toggle=\"tab\" href=\"#link10\" role=\"tablist\">\r\n                              Terms/Policies\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" data-toggle=\"tab\" href=\"#link11\" role=\"tablist\">\r\n                              Discount\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" data-toggle=\"tab\" href=\"#link12\" role=\"tablist\">\r\n                              Publish\r\n                            </a>\r\n                            <hr class=\"mt-0 mb-0\">\r\n\r\n                          </li>\r\n                         \r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"tab-content tab-space col-12 pt-0\">\r\n                  <div class=\"tab-pane active \" id=\"link1\">\r\n                    <div class=\"card mt-0\" style=\"min-height: 82vh;\">\r\n                      <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-6\"><h3><b>Offer title</b></h3></div>\r\n                              <div class=\"col-6 text-right\"><button class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>Save and exit</button></div>\r\n                              <div class=\"col-12\">\r\n                                <textarea rows=\"19\" class=\"form-control\" placeholder=\"Type the offer title\"></textarea>\r\n                              </div>\r\n                              <div class=\"col-12\">\r\n                                <button class=\"btn btn-default text-dark\">Cancel</button>\r\n                                <button class=\"btn btn-danger\" style=\"float: right;\">Next</button>\r\n    \r\n                              </div>\r\n                            </div>                        \r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"tab-pane\" id=\"link2\">\r\n                    <div class=\"card mt-0\" style=\"min-height: 82vh;\">\r\n                      <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-6\"><h3><b>Offer Type</b></h3></div>\r\n                              <div class=\"col-6 text-right\"><button class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>Save and exit</button></div>\r\n                             \r\n                              <div class=\"col-md-4\">\r\n                                <div class=\"card\" style=\"background:#fafafa;\">\r\n                                  <div class=\"card-body text-center\">\r\n                                   <img src=\"../assets/Icons/PNG/House_normal.png\"/>\r\n                                   <p class=\"mb-0\">House</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>     \r\n                              <div class=\"col-md-4\">\r\n                                <div class=\"card\" style=\"background:#fafafa;\">\r\n                                  <div class=\"card-body text-center\">\r\n                                   <img src=\"../assets/Icons/PNG/Hotel room_Active.png\"/>\r\n                                   <p class=\"mb-0\">Apartment</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-md-4\">\r\n                                <div class=\"card\" style=\"background:#fafafa;\">\r\n                                  <div class=\"card-body text-center\">\r\n                                   <img src=\"../assets/Icons/PNG/Hotel room_Normal.png\"/>\r\n                                   <p class=\"mb-0\">Hotel room</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>     \r\n                              \r\n                              <div class=\"col-12\" style=\"margin-top:37vh;\">\r\n                                <button class=\"btn btn-default text-dark\">Cancel</button>\r\n                                <button class=\"btn btn-danger\" style=\"float: right;\">Next</button>\r\n    \r\n                              </div>\r\n                            </div>                        \r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"tab-pane  \" id=\"link3\">\r\n                    <div class=\"card mt-0\" style=\"min-height: 82vh;\">\r\n                      <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-6\"><h3><b>Price your offer</b></h3></div>\r\n                              <div class=\"col-6 text-right\"><button class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>Save and exit</button></div>\r\n                              <div class=\"col-12\">\r\n                                <p>To help you earn more, your price will move closer to this when demand \r\n                                  is high need to reword</p>\r\n                                <input class=\"form-control\" placeholder=\"$ type of Price\" />\r\n                              </div>\r\n                              <div class=\"col-12\" style=\"margin-top: 43vh;\">\r\n                                <button class=\"btn btn-default text-dark\">Cancel</button>\r\n                                <button class=\"btn btn-danger\" style=\"float: right;\">Next</button>\r\n\r\n                              </div>\r\n                            </div>                        \r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"tab-pane  \" id=\"link4\">\r\n                    <div class=\"card mt-0\" style=\"min-height: 82vh;\">\r\n                      <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-8\"><h3><b>Add photos and videos to your offer</b></h3></div>\r\n                              <div class=\"col-4 text-right\"><button class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>Save and exit</button></div>\r\n                              <div class=\"col-12 d-flex\">\r\n                               <div class=\"col-4\">\r\n                                <img src=\"../assets/Images/Chat.png\" class=\"img-fluid h-75 \">\r\n                               </div> \r\n                               <div class=\"col-8\">\r\n                                 <h4>Filename.jpg</h4>\r\n                                <input class=\"form-control\" placeholder=\"type of Caption\" />\r\n\r\n                               </div> \r\n                              </div>\r\n                              <div class=\"col-12\" style=\"margin-top: 30vh;\">\r\n                                <button class=\"btn btn-default text-dark\">Cancel</button>\r\n                                <button class=\"btn btn-danger\" style=\"float: right;\">Next</button>\r\n\r\n                              </div>\r\n                            </div>                        \r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"tab-pane  \" id=\"link5\">\r\n                    <div class=\"card mt-0\" style=\"min-height: 82vh;\">\r\n                      <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-6\"><h3><b>Capacity</b></h3></div>\r\n                              <div class=\"col-6 text-right\"><button class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>Save and exit</button></div>\r\n                              <div class=\"col-12\">\r\n                                <p>To help you earn more, your price will move closer to this when demand is \r\n                                  high need to reword</p>\r\n                              </div>\r\n                              <div class=\"col-12\">\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-8\">\r\n                                    How many guests can stay?\r\n                                  </div>\r\n                                  <div class=\"col-4 text-right\"> <img src=\"../assets/Icons/PNG/Group 28.png\" class=\"img-fluid h-75\"><span class=\"mr-2 ml-2\" style=\"font-size:15;font-weight: bold;\">1</span> <img src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid h-75\"></div>\r\n                                </div>\r\n                                <hr class=\"mt-0 pt-0\">\r\n                              </div>\r\n                              <div class=\"col-12\">\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-8\">\r\n                                    How many bathrooms are there?\r\n                                  </div>\r\n                                  <div class=\"col-4 text-right\"> <img src=\"../assets/Icons/PNG/Group 28.png\" class=\"img-fluid h-75\"><span class=\"mr-2 ml-2\" style=\"font-size:15;font-weight: bold;\">1</span> <img src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid h-75\"></div>\r\n                                </div>\r\n                                <hr class=\"mt-0 pt-0\">\r\n                              </div>\r\n                              <div class=\"col-12\">\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-12\"><p>Which beds are availablke in this room?</p></div>\r\n                                  <div class=\"col-8\">\r\n                                    <p>Single bed <small>90-130 cm wide</small></p> \r\n                                  </div>\r\n                                  <div class=\"col-4 text-right\"> <img src=\"../assets/Icons/PNG/Group 28.png\" class=\"img-fluid h-75\"><span class=\"mr-2 ml-2\" style=\"font-size:15;font-weight: bold;\">1</span> <img src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid h-75\"></div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-12\">\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-8\">\r\n                                   <p>Double bed <small>131-150 cm wide</small></p> \r\n                                  </div>\r\n                                  <div class=\"col-4 text-right\"> <img src=\"../assets/Icons/PNG/Group 28.png\" class=\"img-fluid h-75\"><span class=\"mr-2 ml-2\" style=\"font-size:15;font-weight: bold;\">1</span> <img src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid h-75\"></div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-12\">\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-8\">\r\n                                   <p>Large bed (King size)<small>151-180 cm wide</small></p> \r\n                                  </div>\r\n                                  <div class=\"col-4 text-right\"> <img src=\"../assets/Icons/PNG/Group 28.png\" class=\"img-fluid h-75\"><span class=\"mr-2 ml-2\" style=\"font-size:15;font-weight: bold;\">1</span> <img src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid h-75\"></div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-12\">\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-8\">\r\n                                   <p>Extra-large double bed <small>181-220 cm wide</small></p> \r\n                                  </div>\r\n                                  <div class=\"col-4 text-right\"> <img src=\"../assets/Icons/PNG/Group 28.png\" class=\"img-fluid h-75\"><span class=\"mr-2 ml-2\" style=\"font-size:15;font-weight: bold;\">1</span> <img src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid h-75\"></div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-12\">\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-8\">\r\n                                   <p>Double bed <small>131-150 cm wide</small></p> \r\n                                  </div>\r\n                                  <div class=\"col-4 text-right\"> <img src=\"../assets/Icons/PNG/Group 28.png\" class=\"img-fluid h-75\"><span class=\"mr-2 ml-2\" style=\"font-size:15;font-weight: bold;\">1</span> <img src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid h-75\"></div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-12\" >\r\n                                <button class=\"btn btn-default text-dark\">Cancel</button>\r\n                                <button class=\"btn btn-danger\" style=\"float: right;\">Next</button>\r\n\r\n                              </div>\r\n                            </div>                        \r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"tab-pane  \" id=\"link6\">\r\n                    <div class=\"card mt-0\" style=\"min-height: 82vh;\">\r\n                      <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-6\"><h3><b>Date range</b></h3></div>\r\n                              <div class=\"col-6 text-right\"><button class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>Save and exit</button></div>\r\n                            <div class=\"col-12\">\r\n                              <p>To help you earn more, your price will move closer to this when demand is \r\n                                high need to reword.</p>\r\n                            </div>\r\n                          <div class=\"col-12\">\r\n                            <mat-form-field class=\"example-form-field \" hidden appearance=\"fill\">\r\n                              <!-- <mat-label>Date range</mat-label> -->\r\n                              <mat-date-range-input\r\n                                [formGroup]=\"campaignOne\"\r\n                                [rangePicker]=\"campaignOnePicker\"\r\n                                [comparisonStart]=\"campaignTwo.value.start\"\r\n                                [comparisonEnd]=\"campaignTwo.value.end\">\r\n                                <input matStartDate placeholder=\"Start date\" formControlName=\"start\">\r\n                                <input matEndDate placeholder=\"End date\" formControlName=\"end\">\r\n                              </mat-date-range-input>\r\n                              <mat-datepicker-toggle matSuffix [for]=\"campaignOnePicker\"></mat-datepicker-toggle>\r\n                              <mat-date-range-picker #campaignOnePicker></mat-date-range-picker>\r\n                            </mat-form-field>                       \r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"tab-pane  \" id=\"link7\">\r\n                    <div class=\"card mt-0\" style=\"min-height: 82vh;\">\r\n                      <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-6\"><h3><b>Description</b></h3></div>\r\n                              <div class=\"col-6 text-right\"><button class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>Save and exit</button></div>\r\n                              <div class=\"col-12\">\r\n                                <textarea rows=\"19\" class=\"form-control\" placeholder=\"Type of Description\"></textarea>\r\n                              </div>\r\n                              <div class=\"col-12\">\r\n                                <button class=\"btn btn-default text-dark\">Cancel</button>\r\n                                <button class=\"btn btn-danger\" style=\"float: right;\">Next</button>\r\n    \r\n                              </div>\r\n                            </div>                        \r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"tab-pane\" id=\"link8\">\r\n                    <div class=\"card mt-0\" style=\"min-height: 82vh;\">\r\n                      <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-12 text-right\"><button class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>Save and exit</button></div>\r\n\r\n                              <div class=\"col-12\"><h3><b>Where is the offer your offer?</b></h3></div>\r\n                              <div class=\"col-12\">\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"type the address\">\r\n                              </div>\r\n                              <div class=\"col-12 mt-4\">\r\n                                <div class=\"mapouter\"><div class=\"gmap_canvas\"><iframe class=\"w-100\" id=\"gmap_canvas\" src=\"https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe><a href=\"https://2piratebay.org\"></a><br><style>.mapouter{position:relative;text-align:right;height:100%;width:100%;}</style><style>.gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}</style></div></div>  </div>\r\n                              <div class=\"col-12\" style=\"margin-top: 20vh;\">\r\n                                <button class=\"btn btn-default text-dark\">Cancel</button>\r\n                                <button class=\"btn btn-danger\" style=\"float: right;\">Next</button>\r\n                              </div>\r\n                            </div>                        \r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"tab-pane\" id=\"link9\">\r\n                    <div class=\"card mt-0\" style=\"min-height: 82vh;\">\r\n                      <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-6\"><h3><b>Equipment feature</b></h3></div>\r\n                              <div class=\"col-6 text-right\"><button class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>Save and exit</button></div>\r\n                             <div class=\"col-12\">\r\n                               <p>Lorem Ipsum is simply dummy text of the printing typesetting industry. \r\n                                Lorem Ipsum has been the industry.</p>\r\n                             </div>\r\n                              <div class=\"col-md-4\">\r\n                                <div class=\"card mt-1 mb-1\" style=\"background:#fafafa;\">\r\n                                  <div class=\"card-body text-center\">\r\n                                   <img src=\"../assets/Icons/PNG/House_normal.png\"/>\r\n                                   <p class=\"mb-0\">House</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>     \r\n                              <div class=\"col-md-4\">\r\n                                <div class=\"card mt-1 mb-1\" style=\"background:#fafafa;\">\r\n                                  <div class=\"card-body text-center\">\r\n                                   <img src=\"../assets/Icons/PNG/Hotel room_Active.png\"/>\r\n                                   <p class=\"mb-0\">Apartment</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-md-4\">\r\n                                <div class=\"card mt-1 mb-1\" style=\"background:#fafafa;\">\r\n                                  <div class=\"card-body text-center\">\r\n                                   <img src=\"../assets/Icons/PNG/Hotel room_Normal.png\"/>\r\n                                   <p class=\"mb-0\">Hotel room</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>     \r\n                              \r\n                              <div class=\"col-md-4\">\r\n                                <div class=\"card mt-1 mb-1\" style=\"background:#fafafa;\">\r\n                                  <div class=\"card-body text-center\">\r\n                                   <img src=\"../assets/Icons/PNG/House_normal.png\"/>\r\n                                   <p class=\"mb-0\">House</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>     \r\n                              <div class=\"col-md-4\">\r\n                                <div class=\"card mt-1 mb-1\" style=\"background:#fafafa;\">\r\n                                  <div class=\"card-body text-center\">\r\n                                   <img src=\"../assets/Icons/PNG/Hotel room_Active.png\"/>\r\n                                   <p class=\"mb-0\">Apartment</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-md-4\">\r\n                                <div class=\"card mt-1 mb-1\" style=\"background:#fafafa;\">\r\n                                  <div class=\"card-body text-center\">\r\n                                   <img src=\"../assets/Icons/PNG/Hotel room_Normal.png\"/>\r\n                                   <p class=\"mb-0\">Hotel room</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div> \r\n                              <div class=\"col-md-4\">\r\n                                <div class=\"card mt-1 mb-1\" style=\"background:#fafafa;\">\r\n                                  <div class=\"card-body text-center\">\r\n                                   <img src=\"../assets/Icons/PNG/House_normal.png\"/>\r\n                                   <p class=\"mb-0\">House</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>     \r\n                              <div class=\"col-md-4\">\r\n                                <div class=\"card mt-1 mb-1\" style=\"background:#fafafa;\">\r\n                                  <div class=\"card-body text-center\">\r\n                                   <img src=\"../assets/Icons/PNG/Hotel room_Active.png\"/>\r\n                                   <p class=\"mb-0\">Apartment</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-md-4\">\r\n                                <div class=\"card mt-1 mb-1\" style=\"background:#fafafa;\">\r\n                                  <div class=\"card-body text-center\">\r\n                                   <img src=\"../assets/Icons/PNG/Hotel room_Normal.png\"/>\r\n                                   <p class=\"mb-0\">Hotel room</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div> \r\n                              <div class=\"col-12\" style=\"margin-top:5vh;\">\r\n                                <button class=\"btn btn-default text-dark\">Cancel</button>\r\n                                <button class=\"btn btn-danger\" style=\"float: right;\">Next</button>\r\n    \r\n                              </div>\r\n                            </div>                        \r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"tab-pane  \" id=\"link10\">\r\n                    <div class=\"card mt-0\" style=\"min-height: 82vh;\">\r\n                      <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-6\"><h3><b>Terms/Plicies</b></h3></div>\r\n                              <div class=\"col-6 text-right\"><button class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>Save and exit</button></div>\r\n                              <div class=\"col-12\">\r\n                                <textarea rows=\"19\" class=\"form-control\" placeholder=\"Type of terms/policies\"></textarea>\r\n                              </div>\r\n                              <div class=\"col-12\">\r\n                                <button class=\"btn btn-default text-dark\">Cancel</button>\r\n                                <button class=\"btn btn-danger\" style=\"float: right;\">Next</button>\r\n    \r\n                              </div>\r\n                            </div>                        \r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"tab-pane  \" id=\"link11\">\r\n                    <div class=\"card mt-0\" style=\"min-height: 82vh;\">\r\n                      <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-12 text-right\"><button class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>Save and exit</button></div>\r\n                              <div class=\"col-12\"><h3><b>Offer a one time discount to your\r\n                                first booking</b></h3></div>\r\n                              <div class=\"col-12\">\r\n                                <h4><b>Offer 20% off to your first patients</b></h4>\r\n                                <p>The first 3 booking (so you can get 3 reviews and your star rating) who \r\n                                  book your service will get 20% off their service.</p>\r\n                                  <button class=\"btn btn-default\">recommended</button>\r\n                                  <button class=\"btn btn-danger\">Edit</button>\r\n\r\n                              </div>\r\n                              <div class=\"col-12\" style=\"margin-top: 20vh;\">\r\n                                <button class=\"btn btn-default text-dark\">Cancel</button>\r\n                                <button class=\"btn btn-danger\" style=\"float: right;\">Next</button>\r\n    \r\n                              </div>\r\n                            </div>                        \r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"tab-pane  \" id=\"link12\">\r\n                    <div class=\"card mt-0\" style=\"min-height: 82vh;\">\r\n                      <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-12 text-right\"><button class=\"btn text-dark btn-default btn-round py-1 px-2\" hidden>Save and exit</button></div>\r\n                              <div class=\"col-12\"><h3><b>Offer Publish</b></h3></div>\r\n                              <div class=\"col-12 d-flex\">\r\n                                <div class=\"col-md-9\">\r\n                                  <p>Lorem Ipsum is simply dummy text of the printing \r\n                                    typesetting industry. Lorem Ipsum has been the industry</p>\r\n                                </div>\r\n                                  <div class=\"col-md-3\">\r\n                                    <div  class=\"togglebutton\"><label ><input  type=\"checkbox\" checked=\"\">\r\n                                      <span  class=\"toggle\"></span></label>\r\n                                    </div></div>\r\n                              </div>\r\n                              <div class=\"col-12\" style=\"margin-top: 42vh;\">\r\n                                <button class=\"btn btn-default text-dark\">Cancel</button>\r\n                                <button class=\"btn btn-danger btn-round\" style=\"float: right;\">Publish</button>\r\n    \r\n                              </div>\r\n                            </div>                        \r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                \r\n              </div>\r\n            </div>\r\n\r\n           \r\n          </div>\r\n        </div>\r\n        \r\n    </div>\r\n  \r\n\r\n  </div>\r\n  <app-footerhostportal-web></app-footerhostportal-web>\r\n\r\n</div>";

/***/ }),

/***/ 55262:
/*!*********************************************************************!*\
  !*** ./src/app/Guest/Offerlist/Offerlist.component.html?ngResource ***!
  \*********************************************************************/
/***/ (function(module) {

module.exports = "<style>\r\n  .nav-tabs,\r\n  .nav-pills {\r\n    border: 0;\r\n    border-radius: 3px;\r\n    padding: 0 15px;\r\n    border-bottom: 1px solid;\r\n    border-color: #cbc2c2;\r\n  }\r\n\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active,\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active:focus,\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active:hover {\r\n    background-color: transparent;\r\n    color: #ed8935;\r\n    border-radius: 0px;\r\n    border: none;\r\n    box-shadow: none;\r\n    border-bottom: 2px solid;\r\n  }\r\n\r\n  .dpscolor {\r\n    color: #728aad;\r\n  }\r\n</style>\r\n\r\n<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header lock-page header-filter\" filter-color=\"black\"\r\n    style=\"background-color:#fafafa; background-size: cover; background-position: top center;\">\r\n    <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\r\n    <div class=\"container mb-4\">\r\n      <div class=\"row justify-content-center\" style=\"margin-top: 8vh;\">\r\n        <div class=\"col-12 col-lg-10\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-10 col-lg-10\">\r\n              <div class=\"col-12 rounded-circle border py-2\" id=\"search\"\r\n                style=\"border-radius: 40px !important;background: white;\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-7 col-sm-12\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-6 d-flex border-right\" (click)=\"hidecollaps(3)\" href=\"#pablo\"\r\n                        id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <div>\r\n                          <img class=\"mt-1 mr-lg-2 mr-md-1\" src=\"../assets/Icons/PNG/Location_gray.png\" />\r\n                        </div>\r\n                        <div>\r\n                          <p class=\"mb-0\"><small>Destination </small> </p>\r\n                          <p class=\"mb-0 pbold\"> <small>Enter Destination </small><b></b></p>\r\n                        </div>\r\n\r\n                      </div>\r\n                      <div class=\"dropdown-menu dropdown-menu-right col-md-12 \" style=\"z-index: 10;\"\r\n                        aria-labelledby=\"navbarDropdownMenuLink\">\r\n\r\n                        <div class=\"row\">\r\n                          <div class=\"col-10\">\r\n                            <input type=\"text\" style=\"border: none;    padding: 15px; margin-top: 0px;\"\r\n                              placeholder=\"type designation...\" class=\"form-control\" />\r\n                          </div>\r\n                          <div class=\"col-2 text-right\">\r\n                            <img src=\"../assets/Icons/PNG/GPI.png\" class=\"mt-2 mr-2\" />\r\n                          </div>\r\n                          <div class=\"col-12\">\r\n                            <hr class=\"mt-1\">\r\n                          </div>\r\n                          <div class=\"col-12\">\r\n                            <ul class=\"nav nav-pills nav-pills-danger justify-content-left\" role=\"tablist\">\r\n                              <li class=\"nav-item\">\r\n                                <a class=\"nav-link active px-3 py-1\" style=\"min-width:50px !important;\"\r\n                                  data-toggle=\"tab\" href=\"#link1\" role=\"tablist\">\r\n                                  Recent Destinations\r\n                                </a>\r\n                              </li>\r\n                              <li class=\"nav-item\" *ngIf=\"user\">\r\n                                <a class=\"nav-link px-3 py-1\" style=\"min-width:50px !important;\" data-toggle=\"tab\"\r\n                                  href=\"#link2\" role=\"tablist\">\r\n                                  Save Searches\r\n                                </a>\r\n                              </li>\r\n                            </ul>\r\n                          </div>\r\n                          <div class=\"tab-content tab-space col-12\">\r\n                            <div class=\"tab-pane active \" id=\"link1\">\r\n\r\n                              <div class=\"col-12 d-flex mx-md-3\">\r\n                                <div><img src=\"../assets/Icons/PNG/Location_gray.png\" class=\"mr-2\" /></div>\r\n                                <div>\r\n                                  <h4 class=\"mb-0\"><b>Chillon Castle</b></h4>\r\n                                  <p class=\"mb-0\"><b>switzerland</b></p>\r\n                                  <p class=\"mb-0\"><b>125 offers</b></p>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-12\">\r\n                                <hr class=\"mt-1 mb-2\">\r\n                              </div>\r\n                              <div class=\"col-12 d-flex mx-md-3\">\r\n                                <div><img src=\"../assets/Icons/PNG/Location_gray.png\" class=\"mr-2\" /></div>\r\n                                <div>\r\n                                  <h4 class=\"mb-0\"><b>Chillon Castle</b></h4>\r\n                                  <p class=\"mb-0\"><b>switzerland</b></p>\r\n                                  <p class=\"mb-0\"><b>125 offers</b></p>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-12\">\r\n                                <hr class=\"mt-1 mb-2\">\r\n                              </div>\r\n                              <div class=\"col-12 d-flex mx-md-3\">\r\n                                <div><img src=\"../assets/Icons/PNG/Location_gray.png\" class=\"mr-2\" /></div>\r\n                                <div>\r\n                                  <h4 class=\"mb-0\"><b>Chillon Castle</b></h4>\r\n                                  <p class=\"mb-0\"><b>switzerland</b></p>\r\n                                  <p class=\"mb-0\"><b>125 offers</b></p>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-12\">\r\n                                <hr class=\"mt-1 mb-2\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                      </div>\r\n                      <div class=\"col-6 d-flex border-right\" data-toggle=\"collapse\" href=\"#collapseExample\"\r\n                        role=\"button\" aria-expanded=\"false\" (click)=\"hidecollaps(1)\" aria-controls=\"collapseExample\">\r\n                        <div>\r\n                          <img class=\"mt-1 mr-lg-2 mr-md-1\" src=\"../assets/Icons/PNG/Calendar.png\" />\r\n                        </div>\r\n                        <div>\r\n                          <p class=\"mb-0\"><small>Duration of stay</small> </p>\r\n                          <p class=\"mb-0 pbold\"> <small>\r\n                              Add dates</small><b></b></p>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-5 col-sm-12 mt-2 mt-md-0\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-7 col-lg-7 col-7 px-0 pl-3 ol-md-0 d-flex\" (click)=\"hidecollaps(2)\"\r\n                        data-toggle=\"collapse\" href=\"#collapseExample1\" role=\"button\" aria-expanded=\"false\"\r\n                        aria-controls=\"collapseExample1\">\r\n                        <div>\r\n                          <img class=\"mt-1 mr-lg-2 mr-md-1 \" src=\"../assets/Icons/PNG/User_Search.png\" />\r\n                        </div>\r\n                        <div>\r\n                          <p class=\"mb-0\"><small>Rooms and Guests</small> </p>\r\n                          <p class=\"mb-0 pbold\"> <small>\r\n                              Add rooms and guests </small><b></b></p>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-5 col-lg-5 col-5 text-right\">\r\n                        <button class=\"btn btn-danger btn-round px-1 px-md-2 py-2\"><i class=\"fa fa-search mr-1\">\r\n                          </i>Search</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"collapse col-md-6\" id=\"collapseExample\"\r\n                style=\"z-index: 100; position: absolute; background: white;border-radius: 0 2px 5px 0 rgb(0 0 0 / 26%);border-radius:10px;box-shadow: 0 2px 5px 0 rgb(0 0 0 / 26%)\">\r\n                <div class=\"row\">\r\n\r\n\r\n                  <div class=\"col-12 \">\r\n                    <mat-form-field class=\"example-form-field \" hidden appearance=\"fill\">\r\n                      <!-- <mat-label>Date range</mat-label> -->\r\n                      <mat-date-range-input [formGroup]=\"campaignOne\" [rangePicker]=\"campaignOnePicker\"\r\n                        [comparisonStart]=\"campaignTwo.value.start\" [comparisonEnd]=\"campaignTwo.value.end\">\r\n                        <input matStartDate placeholder=\"Start date\" formControlName=\"start\">\r\n                        <input matEndDate placeholder=\"End date\" formControlName=\"end\">\r\n                      </mat-date-range-input>\r\n                      <mat-datepicker-toggle matSuffix [for]=\"campaignOnePicker\"></mat-datepicker-toggle>\r\n                      <mat-date-range-picker #campaignOnePicker></mat-date-range-picker>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <p>\r\n                      <input type=\"checkbox\" class=\"mr-2\"> <b><span>Add buffer range</span></b>\r\n                    </p>\r\n                    <table class=\"table\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <td>\r\n                            <h4 class=\"mt-3\"><b>Before</b></h4>\r\n                          </td>\r\n                          <td class=\"text-right\">\r\n                            <img src=\"../assets/Icons/PNG/Group 28.png\" width=\"25\" class=\"img-fluid h-50\"\r\n                              (click)=\"minus(0)\"><span class=\"mr-2 ml-2\"\r\n                              style=\"font-size:15;font-weight: bold;\">{{incval}}</span> <img width=\"25\"\r\n                              src=\"../assets/Icons/PNG/Group 27.png\" (click)=\"plus(0)\" class=\"img-fluid h-75\">\r\n                          </td>\r\n\r\n                        </tr>\r\n                        <tr>\r\n                          <td>\r\n                            <h4 class=\"mt-3\"><b>After</b></h4>\r\n                          </td>\r\n                          <td class=\"text-right\">\r\n                            <img src=\"../assets/Icons/PNG/Group 28.png\" width=\"25\" class=\"img-fluid h-50\"\r\n                              (click)=\"minus(1)\"><span class=\"mr-2 ml-2\"\r\n                              style=\"font-size:15;font-weight: bold;\">{{incval1}}</span> <img width=\"25\"\r\n                              src=\"../assets/Icons/PNG/Group 27.png\" (click)=\"plus(1)\" class=\"img-fluid h-75\">\r\n                          </td>\r\n\r\n                        </tr>\r\n\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <h4><b>Duration</b></h4>\r\n                    <p class=\"pb-0\">\r\n                      Sat, May 15, 2021\r\n                    </p>\r\n                    <p class=\"pb-0\">\r\n                      Mon, May 17, 2021 <a class=\"text-danger\"> (5 Night)</a>\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"collapse col-md-12\" id=\"collapseExample1\"\r\n                style=\"z-index: 200; position: absolute;border-radius: 10px;\">\r\n                <div class=\"col-12\">\r\n                  <div class=\"row justify-content-end\">\r\n                    <div class=\"col-md-4\"></div>\r\n                    <div class=\"col-md-8\"\r\n                      style=\" background: white;border-radius: 0 2px 5px 0 rgb(0 0 0 / 26%);border-radius: 10px;box-shadow: 0 2px 5px 0 rgb(0 0 0 / 26%)\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                          <h4><b>Select rooms and guests</b></h4>\r\n                        </div>\r\n                        <div class=\"col-12 \">\r\n                          <table class=\"table\">\r\n                            <tbody>\r\n                              <tr>\r\n                                <td>\r\n                                  <h4 class=\"mt-3\"><b>Rooms</b></h4>\r\n                                </td>\r\n                                <td class=\"text-right\">\r\n                                  <img src=\"../assets/Icons/PNG/Group 28.png\" width=\"25\" class=\"img-fluid h-50\"\r\n                                    (click)=\"minus(2)\"><span class=\"mr-2 ml-2\"\r\n                                    style=\"font-size:15;font-weight: bold;\">{{incval2}}</span> <img (click)=\"plus(2)\"\r\n                                    width=\"25\" src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid h-75\">\r\n                                </td>\r\n\r\n                              </tr>\r\n                              <tr>\r\n                                <td>\r\n                                  <h4 class=\"mt-3\"><b>Adults</b></h4>\r\n                                </td>\r\n                                <td class=\"text-right\">\r\n                                  <img src=\"../assets/Icons/PNG/Group 28.png\" width=\"25\" class=\"img-fluid h-50\"\r\n                                    (click)=\"minus(3)\"><span class=\"mr-2 ml-2\"\r\n                                    style=\"font-size:15;font-weight: bold;\">{{incval3}}</span> <img width=\"25\"\r\n                                    (click)=\"plus(3)\" src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid h-75\">\r\n                                </td>\r\n\r\n                              </tr>\r\n                              <tr>\r\n                                <td>\r\n                                  <h4 class=\"mb-0 mt-3\"><b>Children</b></h4>\r\n                                  <p>0-17 year old</p>\r\n                                </td>\r\n                                <td class=\"text-right\">\r\n                                  <img src=\"../assets/Icons/PNG/Group 28.png\" width=\"25\" class=\"img-fluid h-50\"\r\n                                    (click)=\"minus(4)\"><span class=\"mr-2 ml-2\"\r\n                                    style=\"font-size:15;font-weight: bold;\">{{incval4}}</span> <img width=\"25\"\r\n                                    (click)=\"plus(4)\" src=\"../assets/Icons/PNG/Group 27.png\" class=\"img-fluid h-75\">\r\n                                </td>\r\n\r\n                              </tr>\r\n                            </tbody>\r\n                          </table>\r\n                        </div>\r\n                        <div class=\"col-12\" *ngIf=\"incval4 > 0\">\r\n                          <h5><b>Age of children at check-out</b></h5>\r\n                          <p>Add the age of each child to get the best match for\r\n                            beds, room size and special prices.</p>\r\n                        </div>\r\n                        <div class=\"col-12\" *ngIf=\"incval4 > 0\">\r\n                          <table class=\"table\">\r\n                            <tbody>\r\n                              <tr *ngFor=\"let inc of childList; let i = index;\">\r\n                                <td>\r\n                                  <h4 class=\"mt-3\">Child {{ i+1 }}</h4>\r\n                                </td>\r\n                                <td class=\"text-right\">\r\n                                  <mat-form-field>\r\n                                    <mat-select placeholder=\"Select year\">\r\n                                      <mat-option value=\"0\">&lt; year old</mat-option>\r\n                                      <mat-option value=\"1\">1 year old</mat-option>\r\n                                      <mat-option value=\"2\">2 year old</mat-option>\r\n                                      <mat-option value=\"3\">3 year old</mat-option>\r\n                                      <mat-option value=\"4\">4 year old</mat-option>\r\n                                      <mat-option value=\"5\">5 year old</mat-option>\r\n                                      <mat-option value=\"6\">6 year old</mat-option>\r\n                                      <mat-option value=\"7\">7 year old</mat-option>\r\n                                      <mat-option value=\"8\">8 year old</mat-option>\r\n                                      <mat-option value=\"9\">9 year old</mat-option>\r\n                                      <mat-option value=\"10\">10 year old</mat-option>\r\n                                      <mat-option value=\"11\">11 year old</mat-option>\r\n                                      <mat-option value=\"12\">12 year old</mat-option>\r\n                                      <mat-option value=\"13\">13 year old</mat-option>\r\n                                      <mat-option value=\"14\">14 year old</mat-option>\r\n                                      <mat-option value=\"15\">15 year old</mat-option>\r\n                                      <mat-option value=\"16\">16 year old</mat-option>\r\n                                      <mat-option value=\"17\">17 year old</mat-option>\r\n                                    </mat-select>\r\n                                  </mat-form-field>\r\n                                </td>\r\n                              </tr>\r\n                            </tbody>\r\n                          </table>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <p class=\"mt-4\"><input type=\"checkbox\" class=\"mr-3\">Save Search</p>\r\n            </div>\r\n\r\n            <div class=\"col-md-12 col-lg-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                  <h3 class=\"mb-0 pl-0\"><b>Offers</b></h3>\r\n                  <p>Stays in Lorem Ipsum Location</p>\r\n                </div>\r\n                <div class=\"col-6 text-right mt-4\">\r\n                  <button class=\"btn btn-danger btn-round bg-white text-dark p-2\" style=\"box-shadow: none !important;\"\r\n                    data-toggle=\"modal\" data-target=\".bd-example-modal-md\"><img src=\"../assets/Icons/PNG/Filter.png\"\r\n                      class=\"mr-2\" />Filter</button>\r\n                </div>\r\n\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12 col-lg-10\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\" *ngFor=\"let offer of offers\">\r\n                  <div (click)=\"showdetails()\" class=\"card mt-3 mb-1\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-4 p-0\"\r\n                        style=\"background-image: url('http://oneroom3.crosip.com/{{ offer.attachments[0].path }}');background-size: cover; background-repeat: no-repeat;border-radius: 6px 0px 0px 6px !important;\">\r\n                        <button class=\"btn btn-success px-2 py-1\" *ngIf=\"offer.status == 1\">Listed</button>\r\n                        <button class=\"btn btn-danger px-2 py-1\" *ngIf=\"offer.status == 0\">Unlisted</button>\r\n                      </div>\r\n                      <div class=\"col-8\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-8\">\r\n                              <h4 class=\"mb-0\"><b>{{ offer.title }}</b></h4>\r\n                            </div>\r\n                            <div class=\"col-4 text-right\">       \r\n                              <span *ngIf=\"offer.type == 'house'\"><img src=\"../assets/Icons/PNG/House.png\"></span>\r\n                              <span *ngIf=\"offer.type == 'apartment'\"><img src=\"../assets/Icons/PNG/Apartment.png\"></span>\r\n                              <span *ngIf=\"offer.type == 'hotel'\"><img src=\"../assets/Icons/PNG/hotel room.png\"></span>\r\n                            </div>\r\n                            <div class=\"col-5\">\r\n                              <p class=\"mb-0 dpscolor\" *ngIf=\"offer.discount_of_percentage\">Discount</p>\r\n                              <p class=\"mb-0 dpscolor\">Price</p>\r\n                              <p class=\"mb-0 dpscolor\">Period</p>\r\n                              <p class=\"mb-0 dpscolor\" *ngIf=\"offer.subsidiary\">Subsidiary</p>\r\n\r\n                            </div>\r\n                            <div class=\"col-7\">\r\n                              <p class=\"mb-0\" *ngIf=\"offer.discount_of_percentage\">: {{ offer.discount_of_percentage}}% off</p>\r\n                              <p class=\"mb-0\">:<del class=\"text-danger\">{{ offer.currency }}{{ offer.price }}</del> {{ offer.currency }}{{ offer.current_price\r\n                                }}\r\n                              </p>\r\n                              <p class=\"mb-0\">: Sat, May 21 - Sun, May 22</p>\r\n                              <p class=\"mb-0\" *ngIf=\"offer.subsidiary\">:<b class=\"text-danger\"> {{ offer.subsidiary\r\n                                  }}</b>\r\n                              </p>\r\n\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <div class=\"card mt-0\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"mapouter\">\r\n                    <div class=\"gmap_canvas\"><iframe class=\"w-100 \" style=\"min-height: 530px;border-radius: 10px;\"\r\n                        id=\"gmap_canvas\"\r\n                        src=\"https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed\"\r\n                        frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe><a\r\n                        href=\"https://2piratebay.org\"></a><br>\r\n                      <style>\r\n                        .mapouter {\r\n                          position: relative;\r\n                          text-align: right;\r\n                          min-height: 530px;\r\n                          width: 100%;\r\n                        }\r\n                      </style>\r\n                      <style>\r\n                        .gmap_canvas {\r\n                          overflow: hidden;\r\n                          background: none !important;\r\n                          min-height: 530px;\r\n                          width: 100%;\r\n                        }\r\n                      </style>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"col-12 text-center\">\r\n              <button class=\"btn btn-outline-danger btn-round\">More Active Offer</button>\r\n            </div> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"modal fade bd-example-modal-md\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n      aria-hidden=\"true\">\r\n      <div class=\"modal-dialog modal-md\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header mb-0 pb-0\">\r\n            <!-- <h5 class=\"modal-title\">Modal title</h5> -->\r\n            <!-- <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button> -->\r\n            <a class=\"btn-rounded-circle close\" href=\"javascript:void(0);\" data-dismiss=\"modal\" aria-label=\"Close\"\r\n              style=\"background: #e6e6e6; padding: 5px;border-radius: 50%;\"><img\r\n                src=\"../assets/Icons/PNG/Close.png\" /></a>\r\n\r\n          </div>\r\n          <div class=\"modal-body mt-0 mb-0\">\r\n            <h3 class=\"mt-0 pt-0\"><b>Filters</b></h3>\r\n            <div class=\"row divscroll\" style=\"height: 440px; overflow: auto;overflow-x: hidden;\">\r\n              <div class=\"col-md-12\">\r\n                <h4 class=\"mt-0 pt-0\"><b>Sort results by</b></h4>\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n                <table class=\"table\">\r\n                  <tbody>\r\n                    <tr>\r\n                      <td class=\"py-2\">Recommended</td>\r\n                      <td class=\"py-2 text-right\">\r\n                        <mat-radio-button></mat-radio-button>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td class=\"py-2\">Distance</td>\r\n                      <td class=\"py-2 text-right\">\r\n                        <mat-radio-button></mat-radio-button>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <hr>\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n                <h4><b>Filter Result By</b></h4>\r\n                <table class=\"table\">\r\n                  <tbody>\r\n                    <tr>\r\n                      <td class=\"py-2\">Equipment features</td>\r\n                      <td class=\"py-2 text-right\">\r\n                        <i class=\"fa fa-chevron-right\"></i>\r\n                      </td>\r\n                    </tr>\r\n\r\n                    <tr>\r\n                      <td class=\"py-2\">Booking a recognized offer.</td>\r\n                      <td class=\"py-2 text-right\">\r\n                        <i class=\"fa fa-chevron-right\"></i>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n\r\n                <h4><b>Property Type</b></h4>\r\n                <table class=\"table\">\r\n                  <tbody>\r\n                    <tr>\r\n                      <td class=\"py-2\"><img class=\"mr-2\" src=\"../assets/Icons/PNG/House_black.png\" />House </td>\r\n                      <td class=\"py-2 text-right\">\r\n                        <mat-checkbox></mat-checkbox>\r\n                      </td>\r\n                    </tr>\r\n\r\n                    <tr>\r\n                      <td class=\"py-2\"><img class=\"mr-2\" src=\"../assets/Icons/PNG/Apartment_black.png\" />Apartment </td>\r\n                      <td class=\"py-2 text-right\">\r\n                        <mat-checkbox></mat-checkbox>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td class=\"py-2\"><img class=\"mr-2\" src=\"../assets/Icons/PNG/Hotel room_black.png\" />Hotel room </td>\r\n                      <td class=\"py-2 text-right\">\r\n                        <mat-checkbox></mat-checkbox>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <hr>\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n                <h5><b>Your budget (for 1 night)</b></h5>\r\n                <mat-slider class=\"w-100\" thumbLabel [displayWith]=\"formatLabel\" tickInterval=\"1000\" step=\"1000\" min=\"0\"\r\n                  max=\"100000\" aria-label=\"units\"></mat-slider>\r\n                <hr>\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n                <h5><b>Languages</b></h5>\r\n                <table class=\"table\">\r\n                  <tbody>\r\n                    <tr>\r\n                      <td class=\"py-2\">English</td>\r\n                      <td class=\"py-2 text-right\">\r\n                        <mat-checkbox></mat-checkbox>\r\n                      </td>\r\n                    </tr>\r\n\r\n                    <tr>\r\n                      <td class=\"py-2\">Spanish</td>\r\n                      <td class=\"py-2 text-right\">\r\n                        <mat-checkbox></mat-checkbox>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td class=\"py-2\">Mandarin</td>\r\n                      <td class=\"py-2 text-right\">\r\n                        <mat-checkbox></mat-checkbox>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td class=\"py-2\">\r\n                        <a href=\"javascript:void(0)\" class=\"text-dark\"><u>Show More</u></a>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <hr>\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n                <h5><b>Equipment features</b></h5>\r\n                <table class=\"table\">\r\n                  <tbody>\r\n                    <tr>\r\n                      <td class=\"py-2\">WiFi</td>\r\n                      <td class=\"py-2 text-right\">\r\n                        <mat-checkbox></mat-checkbox>\r\n                      </td>\r\n                    </tr>\r\n\r\n                    <tr>\r\n                      <td class=\"py-2\">Whirlpool</td>\r\n                      <td class=\"py-2 text-right\">\r\n                        <mat-checkbox></mat-checkbox>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td class=\"py-2\">Free parking</td>\r\n                      <td class=\"py-2 text-right\">\r\n                        <mat-checkbox></mat-checkbox>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td class=\"py-2\">Pet friendly</td>\r\n                      <td class=\"py-2 text-right\">\r\n                        <mat-checkbox></mat-checkbox>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td class=\"py-2\">Restaurant</td>\r\n                      <td class=\"py-2 text-right\">\r\n                        <mat-checkbox></mat-checkbox>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td class=\"py-2\">Room Service</td>\r\n                      <td class=\"py-2 text-right\">\r\n                        <mat-checkbox></mat-checkbox>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td class=\"py-2\">Spa</td>\r\n                      <td class=\"py-2 text-right\">\r\n                        <mat-checkbox></mat-checkbox>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td class=\"py-2\">Swimming pool</td>\r\n                      <td class=\"py-2 text-right\">\r\n                        <mat-checkbox class=\"text-danger\"></mat-checkbox>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <hr>\r\n              </div>\r\n              <div class=\"col-12 text-center\">\r\n                <button class=\"btn btn-danger btn-block\">Apply</button>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-gFooter-web></app-gFooter-web>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 50151:
/*!*****************************************************************!*\
  !*** ./src/app/Guest/Profile/Profile.component.html?ngResource ***!
  \*****************************************************************/
/***/ (function(module) {

module.exports = "<style>\r\n  .nav-pills .nav-item .nav-link {\r\n    font-size: 16px !important;\r\n  }\r\n\r\n  .togglebutton label .toggle:after {\r\n    width: 30px;\r\n    height: 28px;\r\n  }\r\n\r\n  .togglebutton label input[type=checkbox]:checked+.toggle:after {\r\n    left: 26px;\r\n  }\r\n\r\n  .togglebutton label .toggle,\r\n  .togglebutton label input[type=checkbox][disabled]+.toggle {\r\n    content: \"\";\r\n    display: inline-block;\r\n    width: 55px;\r\n    height: 25px;\r\n  }\r\n\r\n  .form-control {\r\n    padding: 5px;\r\n    border: 1px solid #9da5ad;\r\n    border-radius: 5px;\r\n    background-image: none;\r\n  }\r\n\r\n  .field-icon {\r\n    float: right;\r\n    margin-left: -25px;\r\n    margin-top: -36px;\r\n    position: relative;\r\n    z-index: 2;\r\n    margin-right: 5px;\r\n  }\r\n\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active,\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active:focus,\r\n  .nav-pills.nav-pills-danger .nav-item .nav-link.active:hover {\r\n    background-color: transparent !important;\r\n    color: #ed8935 !important;\r\n    box-shadow: none;\r\n  }\r\n\r\n  .nav-pills .nav-item i {\r\n    display: block;\r\n    font-size: 26px;\r\n    padding: 0px 0;\r\n    float: right;\r\n  }\r\n</style>\r\n\r\n<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header lock-page header-filter\" filter-color=\"black\"\r\n    style=\"background-color:#fafafa; background-size: cover; background-position: top center;\">\r\n    <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-left\" style=\"margin-top: 4vh;\">\r\n        <div class=\"col-12\">\r\n          <h3 class=\"ml-4\"><b>{{'trans.Profile' | translate}}</b></h3>\r\n          <div class=\"col-md-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"card mt-0\">\r\n                  <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-12\">\r\n                        <h3 class=\"ml-4\"><b>{{'trans.Settings' | translate}}</b></h3>\r\n                        <ul class=\"nav nav-pills flex-column nav-pills-danger justify-content-left\" role=\"tablist\">\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link active text-capitalize font-weight-bold  text-left px-3 py-1\"\r\n                              data-toggle=\"tab\" href=\"#link1\" role=\"tablist\">\r\n                              <span>{{'trans.Personal_info' | translate}}  </span>\r\n                              <i class=\"fa fa-angle-right\"></i>\r\n\r\n                            </a>\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link text-capitalize font-weight-bold  text-left px-3 py-1\" data-toggle=\"tab\"\r\n                              href=\"#link2\" role=\"tablist\">\r\n\r\n                              <span>{{'trans.Language' | translate}} </span>\r\n                              <i class=\"fa fa-angle-right\"></i>\r\n                            </a>\r\n                          </li>\r\n                          <!-- <li class=\"nav-item\">\r\n                            <a class=\"nav-link text-capitalize font-weight-bold  text-left px-3 py-1\"  data-toggle=\"tab\" href=\"#link3\" role=\"tablist\">\r\n                              \r\n                              <span>Wallet</span>  \r\n                              <i class=\"fa fa-angle-right\"></i>\r\n                            </a>\r\n                          </li> -->\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" data-toggle=\"tab\"\r\n                              href=\"#link4\" role=\"tablist\">\r\n\r\n                              <span>{{'trans.change_password' | translate}}</span>\r\n                              <i class=\"fa fa-angle-right\"></i>\r\n                            </a>\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" data-toggle=\"tab\"\r\n                              href=\"#link5\" role=\"tablist\">\r\n\r\n                              <span>{{'trans.change_Email' | translate}}</span>\r\n                              <i class=\"fa fa-angle-right\"></i>\r\n                            </a>\r\n\r\n                          </li>\r\n                          \r\n                          <li class=\"nav-item\" *ngIf=\"data.plan != null\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" data-toggle=\"tab\"\r\n                              href=\"#link3\" role=\"tablist\">\r\n\r\n                              <span>{{'trans.wallet' | translate}}</span>\r\n                              <i class=\"fa fa-angle-right\"></i>\r\n                            </a>\r\n\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link px-3 text-capitalize font-weight-bold  text-left py-1\" data-toggle=\"tab\"\r\n                              href=\"#link6\" role=\"tablist\">\r\n\r\n                              <span> {{'trans.Give_us_feedback' | translate}}</span>\r\n                              <i class=\"fa fa-angle-right\"></i>\r\n                            </a>\r\n\r\n                          </li>\r\n\r\n\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-8 col-lg-7\">\r\n                <div class=\"tab-content tab-space col-12 pt-0\">\r\n                  <div class=\"tab-pane active \" id=\"link1\">\r\n                    <div class=\"card mt-0\">\r\n                      <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12\" *ngIf=\"data\">\r\n                            <div class=\"row\" *ngIf=\"step==0\">\r\n                              <div class=\"col-6\">\r\n                                <h3><b>{{'trans.Personal_info' | translate}} </b></h3>\r\n                              </div>\r\n                              <div class=\"col-6 text-right\"><button\r\n                                  class=\"btn text-dark btn-default btn-round py-1 px-2\" (click)=\"step=1\"><img\r\n                                    src=\"../assets/Icons/PNG/Edit.png\" /></button></div>\r\n                              <div class=\"col-12 d-flex\">\r\n                                <div  >\r\n                                  <img *ngIf=\"data.pic\" (click)=\"clickProfilePicture()\" alt=\"User Avatar\"\r\n                                    src=\"http://oneroom3.crosip.com/{{ data.pic }}\" class=\"img-fluid mr-4\" width=\"88\"\r\n                                    height=\"88\" />\r\n                                  <img *ngIf=\"!data.pic\" (click)=\"clickProfilePicture()\" class=\"img-fluid mr-4\"\r\n                                    src=\"../assets/Images/george-deglin@2x.png\" alt=\"User Avatar\" width=\"88\"\r\n                                    height=\"88\">\r\n                                  <!-- <img (click)=\"clickProfilePicture()\" *ngIf=\"changeText\" class=\"img-fluid mr-4\"\r\n                                    src=\"../assets/Images/tempprofile.png\" alt=\"Edit Icon\" width=\"88\" height=\"88\"> -->\r\n                                  <input type=\"file\" hidden id=\"pictureFileTrigger\"\r\n                                    accept=\"image/png, image/jpg, image/jpeg\" (change)=\"editProfilePicture($event)\">\r\n                                </div>\r\n                                <div class=\"d-flex\">\r\n                                  <div>\r\n                                    <p class=\"mr-5\"> {{'trans.Name' | translate}}</p>\r\n                                    <p> {{'trans.Email' | translate}}</p>\r\n                                    <p> {{'trans.Mobile' | translate}}</p>\r\n                                    <p> {{'trans.Website' | translate}}</p>\r\n                                    <p> {{'trans.VAT_Number' | translate}}</p>\r\n                                    <p> {{'trans.Address' | translate}}</p>\r\n\r\n                                  </div>\r\n                                  <div>\r\n                                    <p>: {{ data.fname }} {{ data.lname }}</p>\r\n                                    <p>: {{ data.email }}</p>\r\n                                    <p *ngIf=\"data.contact_no\">: {{ data.country_calling_code }}{{ data.contact_no }}\r\n                                    </p>\r\n                                    <p *ngIf=\"!data.contact_no\">: Not Available</p>\r\n                                    <p *ngIf=\"data.website\">: {{ data.website }}</p>\r\n                                    <p *ngIf=\"!data.website\">: Not Available</p>\r\n                                    <p *ngIf=\"data.vat_no\">: {{ data.vat_no }}</p>\r\n                                    <p *ngIf=\"!data.vat_no\">: Not Available</p>\r\n                                    <p *ngIf=\"data.address\">: {{ data.address }}</p>\r\n                                    <p *ngIf=\"!data.address\">: Not Available</p>\r\n                                  </div>\r\n\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\" *ngIf=\"step==1\">\r\n                              <div class=\"col-6\">\r\n                                <h3><b>{{'trans.Personal_info' | translate}} </b></h3>\r\n                              </div>\r\n                              <div class=\"col-12\" *ngIf=\"showAlert\"\r\n                                style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n                                class=\"alert alert-error\">{{ errorMessage }}</div>\r\n                              <div class=\"col-12 d-flex\">\r\n                                <form [formGroup]=\"userForm\" #userNgForm=\"ngForm\">\r\n                                  <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                      <div class=\"form-group\">\r\n                                        <label>{{'trans.Surname' | translate}}</label>\r\n                                        <input type=\"text\" class=\"form-control\" [formControlName]=\"'lname'\" pattern=\"^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$\" title=\"Invalid Last Name\">\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                      <div class=\"form-group\">\r\n                                        <label>{{'trans.First_Name' | translate}}</label>\r\n                                        <input type=\"text\" class=\"form-control\" [formControlName]=\"'fname'\" pattern=\"^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$\" title=\"Invalid First Name\">\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                      <div class=\"form-group\">\r\n                                        <label>{{'trans.Email' | translate}}</label>\r\n                                        <input type=\"text\" class=\"form-control\" [formControlName]=\"'email'\">\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                      <div class=\"form-group\">\r\n                                        <label>{{'trans.Phone' | translate}}</label><br>\r\n                                        <!-- <input type=\"text\" class=\"form-control\" [formControlName]=\"'contact_no'\"> -->\r\n                                        <ngx-intl-tel-input [cssClass]=\"'custom'\"\r\n                                          [preferredCountries]=\"[CountryISO.UnitedStates, CountryISO.UnitedKingdom]\"\r\n                                          [enableAutoCountrySelect]=\"true\" [enablePlaceholder]=\"true\"\r\n                                          [searchCountryFlag]=\"true\"\r\n                                          [searchCountryField]=\"[SearchCountryField.Iso2, SearchCountryField.Name]\"\r\n                                          [selectedCountryISO]=\"CountryISO.UnitedKingdom\" [phoneValidation]=\"true\"\r\n                                          name=\"phone\" [formControlName]=\"'contact_no'\" required>\r\n                                        </ngx-intl-tel-input>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                      <div class=\"form-group\">\r\n                                        <label>{{'trans.Website' | translate}}</label>\r\n                                        <input type=\"text\" class=\"form-control\" [formControlName]=\"'website'\" pattern=\"^(http(s)?:\\/\\/)+[\\w\\-\\._~:\\/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$\" title=\"Invalid URL\" placeholder=\"https://example.com\">\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                      <div class=\"form-group\">\r\n                                        <label>{{'trans.VAT_Number' | translate}}</label>\r\n                                        <input type=\"text\" class=\"form-control\" [formControlName]=\"'vat_no'\">\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                      <div class=\"form-group\">\r\n                                        <label>{{'trans.address' | translate}}</label>\r\n                                        <input type=\"text\" class=\"form-control\" [formControlName]=\"'address'\">\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"col-12\">\r\n                                      <button class=\"btn btn-danger mr-3\" (click)=\"update()\">{{'trans.update' | translate}}</button>\r\n                                      <button class=\"btn btn-default text-dark\" (click)=\"step=0\">{{'trans.Cancel' | translate}}</button>\r\n                                    </div>\r\n                                  </div>\r\n                                </form>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"tab-pane\" id=\"link2\">\r\n                    <div class=\"card mt-0 col-lg-8 col-md-10\">\r\n                      <div class=\"card-body\">\r\n                        <div class=\"row\" >\r\n                          <div class=\"col-12\">\r\n                            <h3><b> {{'trans.Language_spoken' | translate}}</b></h3>\r\n                          </div>\r\n                          <div class=\"col-12\">\r\n                                 <div class=\"col-md-11 mx-md-3 mt-2\" *ngFor=\"let lang of languages1\"\r\n                                    style=\"border: 1px solid #e1e1e1;border-radius: 5px;padding: 5px;background: #fafafa;\">\r\n                                    <input type=\"radio\"  name=\"lang\" (click)=\"onLangChange(lang.lang)\"  class=\"mt-2\"> <span\r\n                                      class=\"ml-3\">{{lang.name}}</span>\r\n                                  </div>\r\n                            <!-- <select name='langChoose' #langChoose [(ngModel)]='currentLang' class=\"form-select-sm form-control\" (change)=\"onLangChange(langChoose.value)\">\r\n                              <option *ngFor=\"let lang of languages1\" value=\"{{lang.lang}}\">{{lang.name}}</option>\r\n                            </select> -->\r\n                          </div>\r\n                         \r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <!-- <div class=\"tab-pane\" id=\"link3\">\r\n                    <div class=\"card mt-0 col-lg-8 col-md-10\">\r\n                      <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-12\">\r\n                                <h3><b>Wallet</b></h3>\r\n                              </div>\r\n                              <div class=\"col-12\">\r\n                                <button class=\"btn btn-default mr-3 text-dark\" id=\"subs\"\r\n                                  (click)=\"subscrioption()\">Subscriptions</button>\r\n                                <button class=\"btn btn-danger\" id=\"payments\" (click)=\"payments()\">Payment\r\n                                  Method</button>\r\n                              </div>\r\n                              <div class=\"col-12 mt-3\" *ngIf=\"subsstep==0\">\r\n                                <h4><b>Select Payment</b></h4>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-11 mx-md-3\"\r\n                                    style=\"border: 1px solid #e1e1e1;border-radius: 5px;padding: 10px;background: #fafafa;\">\r\n                                    <input type=\"radio\" name=\"payment\" (click)=\"pstep=0\" class=\"mt-2\"><img class=\"ml-3\"\r\n                                      src=\"../assets/Icons/PNG/PayPal.png\">\r\n                                  </div>\r\n                                  <div class=\"col-md-11 mx-md-3 mt-2\"\r\n                                    style=\"border: 1px solid #e1e1e1;border-radius: 5px;padding: 10px;background: #fafafa;\">\r\n                                    <input type=\"radio\" name=\"payment\" (click)=\"pstep=1\" checked class=\"mt-2\"> <span\r\n                                      class=\"ml-3\">Credit Card</span>\r\n                                  </div>\r\n                                </div>\r\n                                <hr class=\"mt-4\">\r\n                              </div>\r\n                              <div class=\"col-12 mt-3\" *ngIf=\"subsstep==1\">\r\n                                <h5><b>Current subscriptions</b></h5>\r\n                                <div class=\"card\" style=\"background:#fafafa;\">\r\n                                  <div class=\"card-body\">\r\n                                    <h4><b>Large Pro (Montly)</b></h4>\r\n                                    <p>Next payment of $100 (per month) occurs on\r\n                                      July 01, 2021</p>\r\n                                    <button class=\"btn btn-default px-2 py-2 text-dark\">{{'trans.Cancel' | translate}} subscription</button>\r\n                                  </div>\r\n                                </div>\r\n                                <hr class=\"mt-4\" *ngIf=\"subsstep==0\">\r\n                              </div>\r\n                              <div class=\"col-12\" *ngIf=\"pstep==0 && subsstep==0\">\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-12\">\r\n                                    <h4><b>Paypal Information</b></h4>\r\n                                    <div class=\"form-group\">\r\n                                      <input type=\"text\" class=\"form-control p-4\" value=\"test@example.com\" />\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-12\" *ngIf=\"pstep==1 && subsstep==0\">\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-12\">\r\n                                    <h4><b>Card Information</b></h4>\r\n                                    <div class=\"form-group\">\r\n                                      <input type=\"text\" class=\"form-control p-4\" value=\"234564657657\" />\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                      <input type=\"text\" class=\"form-control p-4\" placeholder=\"MM/YY\" />\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                      <input type=\"text\" class=\"form-control p-4\" placeholder=\"Cvv\" />\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-md-12\">\r\n                                    <div class=\"form-group\">\r\n                                      <input type=\"text\" class=\"form-control p-4\" placeholder=\"Zip Code\" />\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-md-12\" *ngIf=\"subsstep==0\">\r\n                                <button class=\"btn btn-danger btn-block\">Save</button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div> -->\r\n                  <div class=\"tab-pane  \" id=\"link4\">\r\n                    <div class=\"card mt-0 col-md-10 col-lg-8\">\r\n                      <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-12\">\r\n                                <h3><b>{{'trans.Change_Password' | translate}}</b></h3>\r\n                              </div>\r\n                              <div *ngIf=\"showPasswordAlert\"\r\n                                style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n                                class=\"alert alert-error\">{{ errorMessage }}</div>\r\n                              <div *ngIf=\"showSuccessAlert\"\r\n                                style=\"background-color: #c3e6cb; border: 1px solid #d4edda; color: #155724\"\r\n                                class=\"alert alert-success\">{{ successMessage }}</div>\r\n                              <div class=\"col-12\">\r\n                                <div class=\"form-group\">\r\n                                  <label>{{'trans.Current_password' | translate}}</label>\r\n                                  <input type=\"{{passtext}}\" class=\"form-control p-4\"\r\n                                    placeholder=\"Type Current password\" id=\"current_password\" />\r\n                                  <span toggle=\"#password-field\" class=\" field-icon toggle-password\"><a\r\n                                      href=\"javascript:void(0);\" class=\"text-dark\"> <u (click)=\"show()\"\r\n                                        id=\"pshides\">Show</u></a> </span>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-12\">\r\n                                <div class=\"form-group\">\r\n                                  <label>{{'trans.New_password' | translate}}</label>\r\n                                  <input type=\"{{passtext11}}\" class=\"form-control p-4\" placeholder=\"Type New password\"\r\n                                    id=\"new_password\" />\r\n                                  <span toggle=\"#password-field\" class=\" field-icon toggle-password\"><a\r\n                                      href=\"javascript:void(0);\" class=\"text-dark\"> <u (click)=\"show11()\"\r\n                                        id=\"pshide11\">Show</u></a> </span>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-12\">\r\n                                <div class=\"form-group\">\r\n                                  <label>{{'trans.Re_type_new_password' | translate}}</label>\r\n                                  <input type=\"{{passtext2}}\" class=\"form-control p-4\"\r\n                                    placeholder=\"Re-type new password\" id=\"confirm_password\" preventCutCopyPaste />\r\n                                  <span toggle=\"#password-field\" class=\" field-icon toggle-password\"><a\r\n                                      href=\"javascript:void(0);\" class=\"text-dark\"> <u (click)=\"show2()\"\r\n                                        id=\"pshide2\">Show</u></a> </span>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class=\"col-12\">\r\n                                <button class=\"btn btn-danger mr-3\" (click)=\"updatePassword()\">{{'trans.update' | translate}}</button>\r\n                                <button class=\"btn btn-default text-dark\"\r\n                                  (click)=\"updatePasswordCancel()\">{{'trans.Cancel' | translate}} </button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"tab-pane  \" id=\"link5\">\r\n                    <div class=\"card mt-0 col-md-10 col-lg-8\">\r\n                      <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-12\">\r\n                                <h3><b>{{'trans.Change_email' | translate}}</b></h3>\r\n                              </div>\r\n                              <div class=\"col-12\">\r\n                                <h5>{{'trans.Password_required' | translate}}</h5>\r\n                                <p>{{'trans.So_we_can_change_your_email' | translate}} <a href=\"#\" class=\"text-dark\">{{'trans.Learn_more' | translate}}</a></p>\r\n                              </div>\r\n                              <div *ngIf=\"showCheckPasswordAlert\"\r\n                                style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n                                class=\"alert alert-error\">{{ errorMessage }}</div>\r\n                              <div class=\"col-12\">\r\n                                <div class=\"form-group\">\r\n                                  <label>{{'trans.Your_Password' | translate}}</label>\r\n                                  <input type=\"{{passtext111}}\" class=\"form-control p-4\" placeholder=\"Type Your password\"\r\n                                    id=\"validate_password\" />\r\n                                  <span toggle=\"#password-field\" class=\" field-icon toggle-password\"><a\r\n                                      href=\"javascript:void(0);\" class=\"text-dark\"> <u (click)=\"show111()\"\r\n                                        id=\"pshide111\">Show</u></a> </span>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-12\">\r\n                                <button class=\"btn btn-danger mr-3\" (click)=\"checkPassword()\"> {{'trans.Continue' | translate}}</button>\r\n                                <button class=\"btn btn-default text-dark\"\r\n                                  (click)=\"checkPasswordCancel()\">{{'trans.Cancel' | translate}}</button>\r\n                                <p class=\"mt-4\"><a data-toggle=\"modal\" data-target=\"#forgot-password\"\r\n                                    data-backdrop=\"false\"><u>{{'trans.Cancel' | translate}}</u></a></p>\r\n                              </div>\r\n                              <div class=\"col-12\">\r\n                                <h5>{{'trans.Need_to_change_your_email_address' | translate}}</h5>\r\n                                <p>{{'trans.No_problem_type_a_new_one_above' | translate}}</p>\r\n                              </div>\r\n                              <div *ngIf=\"showEmailAlert\"\r\n                                style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n                                class=\"alert alert-error\">{{ errorMessage }}</div>\r\n                              <div *ngIf=\"showEmailSuccessAlert\"\r\n                                style=\"background-color: #c3e6cb; border: 1px solid #d4edda; color: #155724\"\r\n                                class=\"alert alert-success\">{{ successMessage }}</div>\r\n                              <div class=\"col-12\">\r\n                                <div class=\"form-group\">\r\n                                  <label> {{'trans.New_Email' | translate}}</label>\r\n                                  <input type=\"email\" class=\"form-control p-4\" placeholder=\"Type Your Email\"\r\n                                    id=\"new_email\" disabled />\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-12\">\r\n                                <div class=\"form-group\">\r\n                                  <label>{{'trans.Re_Type_email' | translate}}</label>\r\n                                  <input type=\"email\" class=\"form-control p-4\" placeholder=\"Re-Type Your Email\"\r\n                                    id=\"confirm_email\" disabled />\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-12\">\r\n                                <button class=\"btn btn-danger mr-3\" (click)=\"updateEmail()\">{{'trans.Save_changes' | translate}}</button>\r\n                                <button class=\"btn btn-default text-dark\" (click)=\"updateEmailCancel()\"> {{'trans.Cancel' | translate}}</button>\r\n                           </div>\r\n                              <div class=\"col-12\"></div>\r\n                              <div class=\"col-12\" id=\"otpSection\" hidden>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-12\">\r\n                                    <h5>Verify OTP</h5>\r\n                                    <p>OTP code has been sent to your email. Please verify to update Email.</p>\r\n                                  </div>\r\n                                  <div *ngIf=\"showOTPAlert\"\r\n                                    style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n                                    class=\"alert alert-error\">{{ errorMessage }}</div>\r\n                                  <div class=\"col-12\">\r\n                                    <div class=\"form-group\">\r\n                                      <label>Enter Code</label>\r\n                                      <input type=\"number\" class=\"form-control p-4\" placeholder=\"OTP Code\" id=\"otp\" />\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-12\">\r\n                                    <button class=\"btn btn-danger mr-3\" (click)=\"updateOTP()\">Verify</button>\r\n                                    <button class=\"btn btn-default text-dark\"\r\n                                      (click)=\"updateOTPCancel()\">{{'trans.Cancel' | translate}}</button>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"tab-pane\" id=\"link6\">\r\n                    <div class=\"card mt-0\">\r\n                      <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                              <h3> {{'trans.Give_us_feedback' | translate}}</h3>\r\n                            </div>\r\n                            <div *ngIf=\"showFeedbackErrorAlert\" style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n                              class=\"alert alert-error\">{{ errorMessage }}</div>\r\n                            <div *ngIf=\"showFeedbackSuccessAlert\"\r\n                              style=\"background-color: #c3e6cb; border: 1px solid #d4edda; color: #155724\"\r\n                              class=\"alert alert-success\">{{ successMessage }}</div>\r\n                            <div class=\"col-12 form-group\">\r\n                              <label> {{'trans.Subject' | translate}}</label>\r\n                              <input type=\"text\" class=\"form-control\" id=\"feedback_subject\">\r\n                            </div>\r\n                            <div class=\"col-12 form-group\">\r\n                              <label> {{'trans.Message' | translate}}</label>\r\n                              <textarea class=\"form-control\" id=\"feedback_message\" row=\"4\"></textarea>\r\n                            </div>\r\n                            <div class=\"col-12 form-group\">\r\n                              <button type=\"button\" class=\"btn btn-danger\" (click)=\"giveFeedback()\">Submit</button>\r\n                            </div>\r\n                          </div>\r\n                      </div>\r\n                    </div>\r\n                  </div> \r\n                  <div class=\"tab-pane\" id=\"link3\">\r\n                    <div class=\"card mt-0 col-lg-10 col-md-10\">\r\n                      <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-12\">\r\n                                <h3><b>{{'trans.wallet' | translate}}</b></h3>\r\n                              </div>\r\n                              <div class=\"col-12 \">\r\n                                <button class=\"btn btn-default mr-3 text-dark\" id=\"subs\" (click)=\"subscrioption()\">{{'trans.subscriptions' | translate}}</button>\r\n                                <button class=\"btn btn-danger\" id=\"payments\" (click)=\"payments()\">{{'trans.payment_method' | translate}}</button>\r\n                              </div>\r\n                              <div class=\"col-12 mt-3\" *ngIf=\"subsstep==0\">\r\n                                <h4><b>{{'trans.select_payment_method' | translate}}</b></h4>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-11 mx-md-3\"\r\n                                    style=\"border: 1px solid #e1e1e1;border-radius: 5px;padding: 10px;background: #fafafa;\">\r\n                                    <input type=\"radio\" name=\"payment\" (click)=\"pstep=0\" class=\"mt-2\"><img class=\"ml-3\"\r\n                                      src=\"../assets/Icons/PNG/PayPal.png\">\r\n                                  </div>\r\n                                  <div class=\"col-md-11 mx-md-3 mt-2\"\r\n                                    style=\"border: 1px solid #e1e1e1;border-radius: 5px;padding: 10px;background: #fafafa;\">\r\n                                    <input type=\"radio\" name=\"payment\" (click)=\"pstep=1\" checked class=\"mt-2\"> <span\r\n                                      class=\"ml-3\">Stripe</span>\r\n                                  </div>\r\n                                </div>\r\n                                <hr class=\"mt-4\">\r\n                              </div>\r\n                              <div class=\"col-12 mt-3\" *ngIf=\"subsstep==1\">\r\n                                <h5><b>{{'trans.Current_subscriptions' | translate}}</b></h5>\r\n                                <div *ngIf=\"showSubscribeAlert\"\r\n                                style=\"background-color: #c3e6cb; border: 1px solid #d4edda; color: #155724\"\r\n                                class=\"alert alert-success\">{{ successMessage }}</div>\r\n                                <div *ngIf=\"showAlert\"\r\n                                style=\"background-color: #c3e6cb; border: 1px solid #d4edda; color: #a94442\"\r\n                                class=\"alert alert-success\">{{ errorMessage }}</div>\r\n                                <div class=\"card\" style=\"background:#fafafa;\" *ngIf=\"subscriptions\">\r\n                                  <div class=\"card-body\">\r\n                                    <h4><b>{{ subscriptions.plan.name }} ({{ subscriptions.plan.interval }})</b></h4>\r\n                                    <p>Next payment of ${{ subscriptions.plan.price }} (per {{\r\n                                      subscriptions.plan.interval }}) occurs on\r\n                                      {{ moment(subscriptions.end_at).format('MMM DD, YYYY') }}.</p>\r\n                                    <button class=\"btn btn-default px-2 py-2 text-dark\"\r\n                                      (click)=\"cancelSubscription(subscriptions.plan.id)\">{{'trans.Cancel' | translate}} subscription</button>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"card\" style=\"background:#fafafa;\" *ngIf=\"!subscriptions\">\r\n                                  <div class=\"card-body\">\r\n                                    <h4><b>{{'trans.Beginners' | translate}} (Free)</b></h4>\r\n                                    <p>\r\n                                      Use of the platform is free for beginners, but there are some restrictions.\r\n                                    </p>\r\n                                    <ul>\r\n                                      <li>A maximum of 1 offer at a time</li>\r\n                                      <li>A maximum of 5 offers per month (or year?)</li>\r\n                                      <li>Only one profile can be created</li>\r\n                                    </ul>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- <hr class=\"mt-4\" *ngIf=\"subsstep==0\"> -->\r\n                                <hr>\r\n                                <div class=\"card\" tyle=\"background:#fafafa;\" *ngIf=\"plans\">\r\n                                  <div class=\"card-body\" *ngFor=\"let plan of plans\">\r\n                                    <div class=\"card mt-0 mb-2\" style=\"background-color: #dfe4ea;\"\r\n                                      (click)=\"buyPlan(plan.id, plan.name, plan.price)\">\r\n                                      <div class=\"card-body\">\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-md-11\">\r\n                                            <div class=\"row\">\r\n                                              <div class=\"col-6 text-left\">\r\n                                                <h4 class=\"my-0 pt-0 text-black\">{{ plan.name }}</h4>\r\n                                              </div>\r\n                                              <div class=\"col-6 text-right\">\r\n                                                <h4 class=\"my-0 pt-0 text-danger\">${{ plan.price }}</h4>\r\n                                              </div>\r\n                                              <div class=\"col-6 text-left\">\r\n                                                <p class=\"mb-0\">{{ plan.description }}</p>\r\n                                                <small class=\"text-success\" *ngIf=\"subscriptions && (subscriptions.plan.name == plan.name)\">Activated</small>\r\n                                              </div>\r\n                                              <div class=\"col-6 text-right\">\r\n                                                <p class=\"mb-0\">{{ plan.interval }}</p>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"col-md-1\" style=\"align-self: center;\">\r\n                                            <i class=\"fa fa-chevron-right fa-2x\" aria-hidden=\"true\"></i>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-12\" *ngIf=\"pstep==0 && subsstep==0\">\r\n                                <div class=\"row\" *ngIf=\"paymentDetails\">\r\n                                  <div class=\"col-md-12\" *ngFor=\"let p of paymentDetails\">\r\n                                    <div class=\"row\" *ngIf=\"p.payment_method == 'paypal'\">\r\n                                      <div class=\"col-12\">\r\n                                        <h4><b> {{'trans.Paypal_information' | translate}}</b></h4>\r\n                                        <div class=\"form-group\">\r\n                                          <input type=\"text\" class=\"form-control p-4\" value=\"{{ p.email }}\" id=\"paypal-email1\"/>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"col-md-12\">\r\n                                        <button class=\"btn btn-danger btn-block\" (click)=\"updatePayPal()\">{{'trans.update' | translate}}</button> <button *ngIf=\"p.email != null\" class=\"btn btn-warning btn-block\" (click)=\"deletePaymentMethod('paypal')\">Delete</button>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-12\" *ngIf=\"pstep==1 && subsstep==0\">\r\n                                <div class=\"row\" *ngIf=\"paymentDetails\">\r\n                                  <div class=\"col-md-12\" *ngFor=\"let p of paymentDetails\">\r\n                                    <div class=\"row\" *ngIf=\"p.payment_method == 'stripe'\">\r\n                                      <div class=\"col-12\">\r\n                                        <h4><b> {{'trans.Card_information' | translate}}</b></h4>\r\n                                        <div class=\"form-group\">\r\n                                          <input type=\"text\" class=\"form-control p-4\" value=\"{{ p.card }}\" placeholder=\"Card Number\" id=\"stripe-card1\"/>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"col-md-4\">\r\n                                        <div class=\"form-group\">\r\n                                          <input type=\"text\" class=\"form-control p-4\" placeholder=\"MM\" value=\"{{ p.exp_month }}\" id=\"stripe-month1\"/>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"col-md-4\">\r\n                                        <div class=\"form-group\">\r\n                                          <input type=\"text\" class=\"form-control p-4\" placeholder=\"YYYY\" value=\"{{ p.exp_year }}\" id=\"stripe-year1\"/>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"col-md-4\">\r\n                                        <div class=\"form-group\">\r\n                                          <input type=\"text\" class=\"form-control p-4\" placeholder=\"CVC\"  value=\"{{ p.cvc }}\" id=\"stripe-cvc1\"/>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"col-md-12\">\r\n                                        <button class=\"btn btn-danger btn-block\" (click)=\"updateStripe()\">{{'trans.update' | translate}}</button> <button *ngIf=\"p.card != null\" class=\"btn btn-warning btn-block\" (click)=\"deletePaymentMethod('stripe')\">Delete</button>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal fade bd-example-modal-lg\" id=\"forgot-password\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title text-left\" id=\"exampleModalLabel\">Forgot Password</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <form [formGroup]=\"verifyEmailForm\" #verifyEmailNgForm=\"ngForm\" id=\"vEmail\">\r\n          <div class=\"modal-body\">\r\n            <hr>\r\n            <div *ngIf=\"showAlert\" style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n              class=\"alert alert-error\">{{ errorMessage }}</div>\r\n            <div class=\"form-group\">\r\n              <label>Email</label>\r\n              <input type=\"email\" class=\"form-control\" [formControlName]=\"'email'\" required>\r\n            </div>\r\n            <hr>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"verifyEmail()\">Submit</button>\r\n            &nbsp; &nbsp;\r\n            <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\" style=\"color: black;\">Close</button>\r\n          </div>\r\n        </form>\r\n        <form [formGroup]=\"verifyForgotPasswordOtpForm\" #verifyForgotPasswordOtpNgForm=\"ngForm\" id=\"vForgotPasswordOtp\"\r\n          hidden>\r\n          <div class=\"modal-body\">\r\n            <hr>\r\n            <div *ngIf=\"showAlert\" style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n              class=\"alert alert-error\">{{ errorMessage }}</div>\r\n            <div class=\"form-group\">\r\n              <label>OTP</label>\r\n              <input type=\"number\" class=\"form-control\" [formControlName]=\"'otp'\" required>\r\n            </div>\r\n            <hr>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"verifyForgoPasswordOtp()\">Submit</button>\r\n            &nbsp; &nbsp;\r\n            <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\" style=\"color: black;\">Close</button>\r\n          </div>\r\n        </form>\r\n        <form [formGroup]=\"updatePasswordForm\" #updatePasswordNgForm=\"ngForm\" id=\"uPassword\" hidden>\r\n          <div class=\"modal-body\">\r\n            <hr>\r\n            <div *ngIf=\"showAlert\" style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n              class=\"alert alert-error\">{{ errorMessage }}</div>\r\n            <div class=\"form-group\">\r\n              <label>Password</label>\r\n              <input type=\"password\" class=\"form-control\" [formControlName]=\"'password'\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Confirm Password</label>\r\n              <input type=\"password\" class=\"form-control\" [formControlName]=\"'confirm_password'\" required>\r\n            </div>\r\n            <hr>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"updatePasswordOtp()\">Submit</button>\r\n            &nbsp; &nbsp;\r\n            <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\" style=\"color: black;\">Close</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"modal fade bd-example-modal-lg\" id=\"hostplan1\" tabindex=\"-1\" role=\"dialog\"\r\n  aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title text-left\" id=\"exampleModalLabel\">Payment</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <form [formGroup]=\"planForm\" #planNgForm=\"ngForm\">\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-2 text-right\">\r\n              <input type=\"radio\" id=\"stripe1\" name=\"payment_method\" value=\"Stripe\" (click)=\"showPaymentSection()\">\r\n            </div>\r\n            <div class=\"col-md-4 text-left\">\r\n              <label for=\"stripe1\">Stripe</label>\r\n            </div>\r\n            <div class=\"col-md-2 text-right\">\r\n              <input type=\"radio\" id=\"paypal1\" name=\"payment_method\" value=\"PayPal\" (click)=\"showPaymentSection()\">\r\n            </div>\r\n            <div class=\"col-md-4 text-left\">\r\n              <label for=\"paypal1\">PayPal</label>\r\n            </div>\r\n          </div>\r\n          <hr>\r\n          <div *ngIf=\"showAlert\" style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n            class=\"alert alert-error\">{{ errorMessage }}</div>\r\n          <div class=\"row\" id=\"stripeSection1\" hidden>\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group\">\r\n                <label>Card Number</label>\r\n                <input type=\"number\" class=\"form-control\" [formControlName]=\"'number'\" required max=\"16\" min=\"16\"\r\n                  placeholder=\"Card Number\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Expiry Month</label>\r\n                <input type=\"number\" class=\"form-control\" [formControlName]=\"'month'\" required max=\"2\" min=\"2\"\r\n                  placeholder=\"MM\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Expiry Year</label>\r\n                <input type=\"number\" class=\"form-control\" [formControlName]=\"'year'\" required max=\"4\" min=\"4\"\r\n                  placeholder=\"YYYY\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>CVC</label>\r\n                <input type=\"number\" class=\"form-control\" [formControlName]=\"'cvc'\" required max=\"3\" min=\"3\"\r\n                  placeholder=\"CVC\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" id=\"paypalSection1\" hidden>\r\n            <div class=\"col-md-12 text-center\" id=\"clickPayPal1\" hidden>\r\n              <h5>Click on <a href=\"\" id=\"paypalLink1\" target=\"_blank\">PayPal</a></h5>\r\n            </div>\r\n          </div>\r\n          <hr>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-danger\" id=\"submitPlan1\" (click)=\"subscribePlan()\"\r\n            hidden>Submit</button>\r\n          &nbsp; &nbsp;\r\n          <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\" style=\"color: black;\">Close</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n  <app-gFooter-web></app-gFooter-web>\r\n</div>";

/***/ }),

/***/ 28533:
/*!***************************************************************************!*\
  !*** ./src/app/Guest/offerdetails/offerdetails.component.html?ngResource ***!
  \***************************************************************************/
/***/ (function(module) {

module.exports = "<style>\r\n  .matexpension {\r\n    border-bottom: 1px solid #e5e5e5;\r\n    box-shadow: none !important\r\n  }\r\n\r\n  .expressiontitle {\r\n    font-size: 20px;\r\n    font-family: 'ABeeZee';\r\n    line-height: 26px;\r\n    font-weight: 400;\r\n    color: #1D3557;\r\n  }\r\n\r\n  .expansiondescription {\r\n    font-size: 15px;\r\n    font-family: 'ABeeZee';\r\n    line-height: 24px;\r\n    font-weight: 400;\r\n    color: #1D3557;\r\n  }\r\n\r\n  .roundedimage {\r\n    background: linear-gradient(344.79deg, #ee933857 19.36%, #ee93386b 88.02%);\r\n    border-radius: 50% !important;\r\n  }\r\n\r\n  .off-canvas-sidebar .navbar .navbar-collapse .navbar-nav .nav-item .nav-link {\r\n    color: black !important;\r\n  }\r\n\r\n  .form-control,\r\n  .is-focused .form-control {\r\n    background-image: none;\r\n    border: 1px solid #d4d2d2;\r\n    border-radius: 5px;\r\n    padding: 18px;\r\n    margin-top: 5px;\r\n    background: white;\r\n  }\r\n\r\n  .divscroll::-webkit-scrollbar {\r\n    scrollbar-gutter: 2px;\r\n    width: 4px;\r\n    z-index: 10;\r\n    border-radius: 10px;\r\n    background: white;\r\n  }\r\n\r\n  .divscroll::-webkit-scrollbar-thumb {\r\n    background-color: #2d5286;\r\n  }\r\n\r\n  agm-map {\r\n    height: 300px !important;\r\n    width: 100%;\r\n    /* This is really important*/\r\n  }\r\n\r\n.limitTextHeight {\r\n  height: 100px;\r\n  overflow: hidden;\r\n}\r\n</style>\r\n\r\n<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header lock-page header-filter\" filter-color=\"black\"\r\n    style=\"background-color:#fafafa; background-size: cover; background-position: top center;\">\r\n    <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\r\n    <div class=\"container\">\r\n      <div class=\"row  justify-content-left\" style=\"margin-top: 14vh;\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"row\" *ngIf=\"details\">\r\n            <div class=\"col-md-6 pr-md-0\">\r\n              <img class=\"img-fluid rounded mt-1 w-100\" src=\"http://oneroom3.crosip.com/{{fullpath}}\" id=\"fullimage\">\r\n            </div>\r\n            <div class=\"col-md-6 pl-md-2\">\r\n              <div class=\"row\">\r\n                <div class=\"col-6 pr-md-1\" *ngFor=\"let itm of details.attachments; let i=index\">\r\n                  <img class=\"img-fluid rounded mt-1\" style=\"cursor: pointer;\"\r\n                    src=\"http://oneroom3.crosip.com/{{itm.path}}\" (click)=\"fullpath=itm.path\">\r\n                </div>\r\n\r\n                <div class=\"col-12 text-right\">\r\n                  <button class=\"btn btn-defualt text-dark btn-round py-1 px-2 mr-md-2\" style=\"margin-top: -50px;\">Show\r\n                    All Photos</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row justify-content-left\">\r\n        <div class=\"col-md-8 \">\r\n          <div class=\"row\" *ngIf=\"details\">\r\n            <div class=\"col-12\">\r\n              <h3><b>{{ details.title }}</b></h3>\r\n            </div>\r\n            <div class=\"col-12\">\r\n              <p>Lorem\r\n                <!--{{ details.publisher.lname }}-->\r\n              </p>\r\n              <hr>\r\n            </div>\r\n            <div class=\"col-12 d-flex\">\r\n              <div>\r\n                <span *ngIf=\"details.type == 'house'\"><img src=\"../assets/Icons/PNG/House_normal.png\"></span>\r\n                <span *ngIf=\"details.type == 'apartment'\"><img src=\"../assets/Icons/PNG/Apartment_Normal.png\"\r\n                    class=\"mr-4\"></span>\r\n                <span *ngIf=\"details.type == 'hotel'\"><img src=\"../assets/Icons/PNG/Hotel_room_Normal.png\"></span>\r\n              </div>\r\n              <div>\r\n                <h4 class=\"ml-4\"><b>{{ details.type }}</b></h4>\r\n                <p class=\"ml-4\">\r\n                  {{ details.description }}\r\n                </p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12\">\r\n              <hr>\r\n              <h3><b>Equipment features </b></h3>\r\n            </div>\r\n            <div class=\"col-12\" [ngClass]=\"{'limitTextHeight': isReadMore}\">\r\n              <div class=\"row\">\r\n                <div class=\"col-12 d-flex\" *ngFor=\"let features of details.features\">\r\n                  <div class=\"mr-4\"><img src=\"http://oneroom3.crosip.com/{{ features.feature.icon }}\"  width=\"64\"/></div>\r\n                  <div class=\"ml-4\">\r\n                    <h4><b>{{features.feature.name}}</b></h4>\r\n                    <p>{{features.feature.description}}</p>\r\n                    <hr>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12\">\r\n              <button class=\"btn btn-outline-defualt rounded \"\r\n                style=\"color: black;border-radius: 10px;border: 1px solid #e1e1e1; background: transparent;\"\r\n                (click)=\"showText()\">\r\n                {{ isReadMore ? 'See More': 'See Less' }}\r\n              </button>\r\n              <hr>\r\n            </div>\r\n            <div class=\"col-12\">\r\n              <h3><b>Description</b></h3>\r\n              <p>\r\n                {{ details.description }}\r\n              </p>\r\n              <a hidden><u>Show More</u></a>\r\n\r\n              <hr>\r\n            </div>\r\n            <div class=\"col-12\">\r\n              <h3><b>Terms / Policies</b></h3>\r\n              <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#terms\"><u>View all policies</u></a>\r\n              <a hidden><u>Show More</u></a>\r\n              <hr>\r\n            </div>\r\n            <div class=\"col-12\">\r\n              <h3><b>Address with Map</b></h3>\r\n              <div class=\"card card-body\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12\" *ngIf=\"details.lat && details.lan\">\r\n                    <agm-map [latitude]=\"details.lat\" [longitude]=\"details.lan\">\r\n                      <agm-marker [latitude]=\"details.lat\" [longitude]=\"details.lan\"></agm-marker>\r\n                    </agm-map>\r\n                  </div>\r\n                  <div class=\"col-md-12\" *ngIf=\"!details.lat && !details.lan\">\r\n                    <span>No Coordinates Found</span>\r\n                  </div>\r\n                </div>\r\n                <br>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12\">\r\n                    <i class=\"fa fa-map-marker fa-lg\" aria-hidden=\"true\" style=\"color: #203a60\"></i> &nbsp; <span\r\n                      *ngIf=\"details.address\"><a target=\"_blank\" href=\"https://www.google.com/maps/search/?api=1&query={{details.lat}},{{details.lan}}\">{{ details.address }}</a></span><span *ngIf=\"!details.address\">Not\r\n                      Available</span>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <br>\r\n                    <i class=\"fa fa-globe fa-lg\" aria-hidden=\"true\" style=\"color: #203a60\"></i> &nbsp; <span\r\n                      *ngIf=\"details.city\">{{ details.city }}</span><span *ngIf=\"!details.city\">Not Available</span>\r\n                  </div>\r\n                </div>\r\n                <br>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row \" *ngIf=\"details\">\r\n                <div class=\"col-12\">\r\n                  <h4><b>Booking info</b></h4>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <div class=\"row mx-1\">\r\n                    <div class=\"col-6\" style=\"border: 1px solid #e1e1e1;border-radius: 33px 0px 0px 33px;\">\r\n                      <p class=\"mb-0 \"><span style=\"color: #728aad;\">Check-in</span><br>\r\n                        {{moment(details.start_from).format('ddd')}}, {{moment(details.start_from).format('MMM Do,\r\n                        YYYY')}}</p>\r\n                    </div>\r\n                    <div class=\"col-6\" style=\"border: 1px solid #e1e1e1;border-radius: 0px 33px 33px 0px;\">\r\n                      <p class=\"mb-0 \"><span style=\"color: #728aad;\">Check-out</span><br>\r\n                        {{moment(details.end_to).format('ddd')}}, {{moment(details.end_to).format('MMM Do, YYYY')}}</p>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-12 mt-2\">\r\n                  <div class=\"row mx-1\">\r\n                    <div class=\"col-12\" style=\"border: 1px solid #e1e1e1;border-radius: 33px\">\r\n                      <p class=\"mb-0 \"><span style=\"color: #728aad;\">Guests</span> <br>\r\n                        <b> {{ details.guests }}\r\n                          <!--2 adults - No children-->\r\n                        </b>\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-12 mt-2 \">\r\n                  <button class=\"btn btn-danger btn-round btn-block py-3\" (click)=\"bookNow()\">{{'trans.Book_Now' | translate}}</button>\r\n                </div>\r\n                <div class=\"col-12 mt-2\">\r\n                  <div class=\"row \">\r\n                    <div class=\"col-12\">\r\n                      <p class=\"mb-1 \" style=\"color: black;\">\r\n                        <b> Price for <span *ngIf=\"details.rooms != 0\"><span *ngIf=\"details.rooms == 1\">{{ details.rooms }}\r\n                              room</span><span *ngIf=\"details.rooms > 1\">{{ details.rooms }} rooms</span></span>\r\n                        </b>\r\n                      </p>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                      <p class=\"mb-0 \" style=\"color: #728aad;\">Price</p>\r\n                    </div>\r\n                    <div class=\"col-6 text-right\">\r\n                      <p class=\"mb-0 \" style=\"color: black;\">\r\n                        <b>\r\n                          {{ details.currency }}{{ details.price }}</b>\r\n                      </p>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                      <p class=\"mb-0 \" style=\"color: #728aad;\">\r\n\r\n                        Discount ({{ details.discount_of_percentage }}%)</p>\r\n                    </div>\r\n                    <div class=\"col-6 text-right\">\r\n                      <p class=\"mb-0 \" style=\"color: red;\">\r\n                        <b>-{{ details.currency }}{{ details.discountPrice }}</b>\r\n                      </p>\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                      <hr>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                      <p class=\"mb-0 \">\r\n                        <b>Total</b>\r\n                      </p>\r\n                    </div>\r\n                    <div class=\"col-6 text-right\">\r\n                      <p class=\"mb-0 \" style=\"color: #728aad;\">\r\n                        <b>\r\n                          {{ details.currency }}{{ details.totalPrice }}</b>\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"modal bd-example-modal-lg4\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n      aria-hidden=\"true\">\r\n      <div class=\"modal-dialog modal-lg\">\r\n        <form [formGroup]=\"registerForm\" #registerNgForm=\"ngForm\">\r\n          <div class=\"modal-content\" style=\"border-radius: 25px;\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\" *ngIf=\"step==0\">\r\n                <div class=\"modal-body\">\r\n                  <img src=\"../assets/Icons/PNG/Logo_Icon.png\">\r\n                  <h3><b>Sign Up</b></h3>\r\n                  <div *ngIf=\"showAlert\" style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n                    class=\"alert alert-error\">{{ errorMessage }}</div>\r\n                  <div class=\"form-group\">\r\n                    <label>Email</label>\r\n                    <input type=\"email\" class=\"form-control\" [formControlName]=\"'email'\" placeholder=\"Email\" required />\r\n                  </div>\r\n                  <p>We’ll send you a confirmation email into your email. Please verify your email.</p>\r\n                  <button class=\"btn btn-danger btn-block\" (click)=\"sendOTP()\">Continue</button>\r\n                  <div class=\"d-inline-flex  w-100\">\r\n                    <div style=\"display: flex; flex: 1;\">\r\n                      <hr style=\"width: 95%;\">\r\n                    </div>\r\n                    <div class=\"mt-2\">OR</div>\r\n                    <div style=\"display: flex; flex: 1;\">\r\n                      <hr style=\"width: 95%;\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-12\">\r\n                    <button class=\"btn btn-outlook-danger text-dark px-3 py-2\"><img width=\"12\" class=\"mr-1\"\r\n                        src=\"../assets/Icons/PNG/Apple.png\" /> Apple</button>\r\n                    <button class=\"btn btn-outlook-danger text-dark  px-3 py-2\"><img width=\"9\" class=\"mr-1\"\r\n                        src=\"../assets/Icons/PNG/Facebook.png\" />Facebook</button>\r\n                    <button class=\"btn btn-outlook-danger text-dark  px-3 py-2\"><img width=\"12\" class=\"mr-1\"\r\n                        src=\"../assets/Icons/PNG/Brand color_Google.png\" />Google</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\" *ngIf=\"step==1\">\r\n                <div class=\"modal-body pr-1\">\r\n                  <h3> <a href=\"javascript:void(0)\" class=\"text-dark\" (click)=\"step=0\"><i\r\n                        class=\"fa fa-arrow-left mr-2\"></i></a><b>Finish signing up</b></h3>\r\n                  <div *ngIf=\"showAlert\" style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n                    class=\"alert alert-error\">{{ errorMessage }}</div>\r\n                  <div class=\"divscroll pr-3\" style=\"overflow: auto;max-height: 430px;overflow-x: hidden;\">\r\n                    <div class=\"form-group\">\r\n                      <label>Surname</label>\r\n                      <input type=\"text\" class=\"form-control\" [formControlName]=\"'lname'\" placeholder=\"Surname\"\r\n                        required pattern=\"^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$\" title=\"Invalid Last Name\"/>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label>First Name</label>\r\n                      <input type=\"text\" class=\"form-control\" [formControlName]=\"'fname'\" placeholder=\"First Name\"\r\n                        required pattern=\"^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$\" title=\"Invalid First Name\"/>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label>Telephone Number (Optional)</label>\r\n                      <!-- <input type=\"text\" class=\"form-control\"  placeholder=\"Telephone Number\"/> -->\r\n                      <ngx-intl-tel-input [cssClass]=\"'custom'\"\r\n                        [preferredCountries]=\"[CountryISO.UnitedStates, CountryISO.UnitedKingdom]\"\r\n                        [enableAutoCountrySelect]=\"true\" [enablePlaceholder]=\"true\" [searchCountryFlag]=\"true\"\r\n                        [searchCountryField]=\"[SearchCountryField.Iso2, SearchCountryField.Name]\"\r\n                        [selectedCountryISO]=\"CountryISO.UnitedKingdom\" [phoneValidation]=\"true\" name=\"phone\"\r\n                        [formControlName]=\"'contact_no'\">\r\n                      </ngx-intl-tel-input>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label>Address</label>\r\n                      <input type=\"text\" class=\"form-control\" [formControlName]=\"'address'\" placeholder=\"Address\" />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label>Vat Number (Optional)</label>\r\n                      <input type=\"text\" class=\"form-control\" [formControlName]=\"'vat_no'\" placeholder=\"Vat Number\" />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label>Website</label>\r\n                      <input type=\"link\" class=\"form-control\" [formControlName]=\"'website'\" placeholder=\"Website\" pattern=\"^(http(s)?:\\/\\/)+[\\w\\-\\._~:\\/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$\" title=\"Invalid URL\"/>\r\n                    </div>\r\n                    <p>We’ll send you a confirmation email into your email. Please verify your email.</p>\r\n                    <button type=\"submit\" class=\"btn btn-danger btn-block\" (click)=\"update()\">Continue</button>\r\n                  </div>\r\n                  <div class=\"d-inline-flex  w-100\" *ngIf=\"step==0\">\r\n                    <div style=\"display: flex; flex: 1;\">\r\n                      <hr style=\"width: 95%;\">\r\n                    </div>\r\n                    <div class=\"mt-2\">OR</div>\r\n                    <div style=\"display: flex; flex: 1;\">\r\n                      <hr style=\"width: 95%;\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-12\" *ngIf=\"step==0\">\r\n                    <button class=\"btn btn-outlook-danger text-dark px-3 py-2\"><img width=\"12\" class=\"mr-1\"\r\n                        src=\"../assets/Icons/PNG/Apple.png\" /> Apple</button>\r\n                    <button class=\"btn btn-outlook-danger text-dark  px-3 py-2\"><img width=\"9\" class=\"mr-1\"\r\n                        src=\"../assets/Icons/PNG/Facebook.png\" />Facebook</button>\r\n                    <button class=\"btn btn-outlook-danger text-dark  px-3 py-2\"><img width=\"12\" class=\"mr-1\"\r\n                        src=\"../assets/Icons/PNG/Brand color_Google.png\" />Google</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\" *ngIf=\"step==2\">\r\n                <div class=\"modal-body\">\r\n                  <img src=\"../assets/Icons/PNG/Logo_Icon.png\">\r\n                  <h3><b>Verify OTP</b></h3>\r\n                  <div *ngIf=\"showAlert\" style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n                    class=\"alert alert-error\">{{ errorMessage }}</div>\r\n                  <div class=\"form-group\">\r\n                    <label>OTP</label>\r\n                    <input type=\"number\" class=\"form-control\" id=\"otp\" placeholder=\"OTP Code\" />\r\n                  </div>\r\n                  <button class=\"btn btn-danger btn-block\" (click)=\"register()\">Verify OTP</button>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6 d-none d-md-block d-lg-block d-xl-block\"\r\n                style=\"border-bottom-right-radius: 25px; border-top-right-radius: 25px; background-image: url('../assets/Images/Signin and signup_Illustration.png');background-size: cover; background-position: top center;\">\r\n                <div class=\"col-12 text-right mt-2\">\r\n                  <a class=\"btn-rounded-circle\" (click)=\"closeModal()\" data-dismiss=\"modal\" aria-label=\"Close\"\r\n                    style=\"background: white; padding: 5px;border-radius: 50%;\"><img\r\n                      src=\"../assets/Icons/PNG/Close.png\" /></a>\r\n                </div>\r\n                <div class=\"col-12 \" style=\"margin-top: 15vh;\">\r\n                  <h3 class=\"mt-4\"><b>Welcome to One Rooms\r\n                    </b></h3>\r\n                  <p>In publishing and graphic design, Lorem ipsum is a\r\n                    placeholder text commonly used to demonstrate\r\n                    the visual form of a document</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal fade bd-example-modal-lg\" id=\"terms\" tabindex=\"-1\" role=\"dialog\"\r\n      aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title text-left\" id=\"exampleModalLabel\">Booking Conditions</h5>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\" *ngIf=\"details\">\r\n            <hr>\r\n            {{ details.terms_policies }}\r\n            <hr>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-gFooter-web></app-gFooter-web>\r\n\r\n  </div>\r\n\r\n\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_Guest_Guestportal_module_ts.js.map