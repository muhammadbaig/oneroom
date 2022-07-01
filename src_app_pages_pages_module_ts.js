"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["src_app_pages_pages_module_ts"],{

/***/ 51689:
/*!******************************************************************!*\
  !*** ./src/app/pages/Forgotpassword/Forgotpassword.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotpasswordComponent": function() { return /* binding */ ForgotpasswordComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _Forgotpassword_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Forgotpassword.component.html?ngResource */ 10456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services */ 9949);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 20088);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ForgotpasswordComponent = /*#__PURE__*/function () {
  function ForgotpasswordComponent(element, formBuilder, route, router, authService) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ForgotpasswordComponent);

    this.element = element;
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.authService = authService;
    this.test = new Date();
    this.loading = false;
    this.submitted = false;
    this.error = '';
    this.step = 1;
    this.nativeElement = element.nativeElement;
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ForgotpasswordComponent, [{
    key: "Login",
    value: function Login() {
      //this.http.post('https://localhost:44337/api/Users/authenticate');
      return null;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var navbar = this.element.nativeElement;
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('login-page');
      body.classList.add('off-canvas-sidebar');
      var card = document.getElementsByClassName('card-login')[0];
      setTimeout(function () {// after 1000 ms we add the class animated to the login/register card
        // card.classList.remove('card-hidden');
      }, 300);
      this.loginForm = this.formBuilder.group({
        mobileno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        code: ['', null],
        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        cpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
      });
      this.otpForm = this.formBuilder.group({
        OTP: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
      });
      this.authService.logout();
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    }
  }, {
    key: "stepthree",
    value: function stepthree() {
      this.step = 3;
      this.loginForm.controls.mobileno.setValue($('#mobileno').val());
    }
  }, {
    key: "sendcode",
    value: function sendcode() {
      var _this = this;

      var mobileno = $('#mobileno').val();

      if (mobileno == null || mobileno == "") {
        return;
      }

      var data = {
        phone: mobileno
      };
      this.authService.post("forgotPassword", data).then(function (data) {
        console.log(data);

        if (data.status == 200) {
          _this.error = null;
          _this.step = 2;

          _this.loginForm.controls.code.setValue(data.data.OTP);
        } else {
          _this.error = data.message;
        }
      }, function (er) {
        _this.error = er.error.message; //   this.phoneerrortext=er.error.message;
        //  this.handleError(er.tostring())
      });
    }
  }, {
    key: "f",
    get: function get() {
      return this.loginForm.controls;
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this2 = this;

      this.submitted = true;

      if (this.f.password.value != this.f.cpassword.value) {
        this.error = "Password and Confirm do not match!";
      }

      if (this.loginForm.invalid) {
        return;
      }

      this.loading = true;
      var data = {
        phone: this.f.mobileno.value,
        password: this.f.password.value
      };
      console.log(data);
      this.authService.post("updatePassword", data).then(function (data) {
        _this2.error = null;
        console.log(data);
        alert(data.message);

        if (data.status == 200) {
          _this2.error = null;
          _this2.message = data.message;
          _this2.loading = false;
          setTimeout(function () {
            window.location.href = "#/pages/login";
          }, 1500);
        } else {
          _this2.loading = false;
          _this2.error = data.message;
          setTimeout(function () {
            _this2.error = null;
          }, 1500);
        } // this.otpForm.patchValue(data.data);
        // setTimeout (() => {
        //     this.callMyCount();
        //  }, 1000);
        //  this.router.navigate([this.returnUrl]);

      }, function (er) {
        _this2.loading = false;
        _this2.error = er;
        console.log(_this2.error); //  this.handleError(er.tostring())
      });
    }
  }, {
    key: "ff",
    get: function get() {
      return this.otpForm.controls;
    }
  }, {
    key: "VerifyOtp",
    value: function VerifyOtp() {
      var _this3 = this;

      this.submitted = true;

      if (this.otpForm.invalid) {
        return;
      }

      localStorage.setItem('currentUser', JSON.stringify("ab")); // this.router.navigate([this.returnUrl]);

      var otp = {
        id: this.ff.id,
        OTP: this.ff.OTP
      };
      this.loading = true;
      this.authService.otp(otp.id.value, otp.OTP.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.first)()).subscribe(function (data) {
        _this3.step = 2;
        console.log(data);

        if (data && data.data.auth_key) {
          localStorage.setItem('currentUser', JSON.stringify(data.data));
        }

        _this3.router.navigate([_this3.returnUrl]);
      }, function (er) {
        _this3.loading = false;
        _this3.error = er;
        console.log(_this3.error); //  this.handleError(er)
      });
    }
  }, {
    key: "VerifyOtpRsend",
    value: function VerifyOtpRsend() {
      var _this4 = this;

      var inputValue = document.getElementById("id").value;
      this.authService.otpResend(inputValue).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.first)()).subscribe(function (data) {
        _this4.step = 2;
        _this4.error = data.message; //  this.router.navigate([this.returnUrl]);
      }, function (er) {
        _this4.loading = false;

        _this4.handleError(er);
      });
    }
  }, {
    key: "callMyCount",
    value: function callMyCount() {
      document.getElementById('timer').innerHTML = "01" + ":" + "00";
      var timerOn = true;

      function timer(remaining) {
        var m = Math.floor(remaining / 60);
        var s = remaining % 60;
        m = m < 10 ? 0 + m : m;
        s = s < 10 ? 0 + s : s;
        document.getElementById('timer').innerHTML = m + ':' + s;
        remaining -= 1;

        if (remaining >= 0 && timerOn) {
          setTimeout(function () {
            timer(remaining);
          }, 1000);
          return;
        }

        if (!timerOn) {
          // Do validate stuff here
          return;
        }

        var element = document.getElementById("btnresent");
        element.disabled = false; // Do timeout stuff here
      }

      timer(5);
    }
  }, {
    key: "handleError",
    value: function handleError(error) {
      this.loading = false;
      this.error = error;
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('login-page');
      body.classList.remove('off-canvas-sidebar');
    }
  }]);

  return ForgotpasswordComponent;
}();

ForgotpasswordComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _services__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService
  }];
};

ForgotpasswordComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-Forgotpassword-cmp',
  template: _Forgotpassword_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], ForgotpasswordComponent);


/***/ }),

/***/ 55468:
/*!**************************************************!*\
  !*** ./src/app/pages/SignUp/SignUp.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpComponent": function() { return /* binding */ SignUpComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _SignUp_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignUp.component.html?ngResource */ 22272);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services */ 9949);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 20088);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SignUpComponent = /*#__PURE__*/function () {
  function SignUpComponent(element, formBuilder, route, router, authService) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SignUpComponent);

    this.element = element;
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.authService = authService;
    this.test = new Date();
    this.loading = false;
    this.submitted = false;
    this.error = '';
    this.step = 1;
    this.codeerror = false;
    this.phoneerror = false;
    this.nativeElement = element.nativeElement;
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SignUpComponent, [{
    key: "Login",
    value: function Login() {
      //this.http.post('https://localhost:44337/api/Users/authenticate');
      return null;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var navbar = this.element.nativeElement;
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('login-page');
      body.classList.add('off-canvas-sidebar');
      var card = document.getElementsByClassName('card-login')[0];
      setTimeout(function () {// after 1000 ms we add the class animated to the login/register card
        // card.classList.remove('card-hidden');
      }, 300);
      this.loginForm = this.formBuilder.group({
        username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        mobileno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
      });
      this.loginForm1 = this.formBuilder.group({
        f_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        l_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        m_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        dob: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
      });
      this.authService.logout();
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    }
  }, {
    key: "f",
    get: function get() {
      return this.loginForm.controls;
    }
  }, {
    key: "imageselectpi",
    value: function imageselectpi() {
      $('#inputimagepi').click();
    }
  }, {
    key: "selectimagepi",
    value: function selectimagepi(e) {
      var _this = this;

      if (e.target.files && e.target.files[0]) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);

        reader.onload = function (event) {
          _this.urlpi = event.target.result;
        };
      }

      $('#aftershow').css("display", "block");
      $('#beforeshow').css("display", "none");
      this.urlspi = e.target.files[0];
    }
  }, {
    key: "imageselectcnicf",
    value: function imageselectcnicf() {
      $('#inputimagecnicf').click();
    }
  }, {
    key: "selectimagecnicf",
    value: function selectimagecnicf(e) {
      var _this2 = this;

      if (e.target.files && e.target.files[0]) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);

        reader.onload = function (event) {
          _this2.urlcnicf = event.target.result;
        };
      }

      this.urlscnicf = e.target.files[0];
    }
  }, {
    key: "imageselectcnicb",
    value: function imageselectcnicb() {
      $('#inputimagecnicb').click();
    }
  }, {
    key: "selectimagecnicb",
    value: function selectimagecnicb(e) {
      var _this3 = this;

      if (e.target.files && e.target.files[0]) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);

        reader.onload = function (event) {
          _this3.urlcnicb = event.target.result;
        };
      }

      this.urlscnicb = e.target.files[0];
    }
  }, {
    key: "imageselectps",
    value: function imageselectps() {
      $('#inputimageps').click();
    }
  }, {
    key: "selectimageps",
    value: function selectimageps(e) {
      var _this4 = this;

      if (e.target.files && e.target.files[0]) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);

        reader.onload = function (event) {
          _this4.urlps = event.target.result;
        };
      }

      this.urlsps = e.target.files[0];
    }
  }, {
    key: "imageselectub",
    value: function imageselectub() {
      $('#inputimageub').click();
    }
  }, {
    key: "selectimageub",
    value: function selectimageub(e) {
      var _this5 = this;

      if (e.target.files && e.target.files[0]) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);

        reader.onload = function (event) {
          _this5.urlub = event.target.result;
        };
      }

      this.urlsub = e.target.files[0];
    }
  }, {
    key: "imageselectbs",
    value: function imageselectbs() {
      $('#inputimagebs').click();
    }
  }, {
    key: "selectimagebs",
    value: function selectimagebs(e) {
      var _this6 = this;

      if (e.target.files && e.target.files[0]) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);

        reader.onload = function (event) {
          _this6.urlbs = event.target.result;
        };
      }

      this.urlsbs = e.target.files[0];
    }
  }, {
    key: "imageselectsd",
    value: function imageselectsd() {
      $('#inputimagesd').click();
    }
  }, {
    key: "selectimagesd",
    value: function selectimagesd(e) {
      var _this7 = this;

      if (e.target.files && e.target.files[0]) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);

        reader.onload = function (event) {
          _this7.urlsd = event.target.result;
        };
      }

      this.urlssd = e.target.files[0];
    }
  }, {
    key: "imageselectrd",
    value: function imageselectrd() {
      $('#inputimagerd').click();
    }
  }, {
    key: "selectimagerd",
    value: function selectimagerd(e) {
      var _this8 = this;

      if (e.target.files && e.target.files[0]) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);

        reader.onload = function (event) {
          _this8.urlrd = event.target.result;
        };
      }

      this.urlsrd = e.target.files[0];
    }
  }, {
    key: "imageselectnd",
    value: function imageselectnd() {
      $('#inputimagend').click();
    }
  }, {
    key: "selectimagend",
    value: function selectimagend(e) {
      var _this9 = this;

      if (e.target.files && e.target.files[0]) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);

        reader.onload = function (event) {
          _this9.urlnd = event.target.result;
        };
      }

      this.urlsnd = e.target.files[0];
    }
  }, {
    key: "sendcode",
    value: function sendcode() {
      var _this10 = this;

      var mobileno = $('#mobileno').val();

      if (mobileno == null || mobileno == "") {
        return;
      }

      this.authService.sendcode(mobileno).subscribe(function (data) {
        console.log(data);

        if (data.status == 200) {
          _this10.error = null;
          _this10.step = 2;
          _this10.otp = data.data.OTP;
        } else {}
      }, function (er) {
        _this10.phoneerror = true;
        _this10.phoneerrortext = er.error.message; //  this.handleError(er.tostring())
      });
    }
  }, {
    key: "agree",
    value: function agree(event) {
      if (event.currentTarget.checked) {
        $('#continue').removeAttr("disabled");
      } else {
        $('#continue').attr("disabled", "true");
      }
    }
  }, {
    key: "issubmit",
    value: function issubmit(event) {
      if (event.currentTarget.checked) {
        $('#sub').removeAttr("disabled");
      } else {
        $('#sub').attr("disabled", "true");
      }
    }
  }, {
    key: "ff",
    get: function get() {
      return this.loginForm1.controls;
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      this.codeerror = true;

      if (this.loginForm.invalid) {
        return;
      }

      if (this.otp == this.f.code.value) {
        this.step = 3;
      } else {
        this.codeerror = true;
        this.codeerrortext = "Invalid Code";
        return;
      }
    }
  }, {
    key: "onSubmit1",
    value: function onSubmit1() {
      this.submitted = true;

      if (this.loginForm1.invalid) {
        return;
      }

      this.step = 4;
    }
  }, {
    key: "onSubmit2",
    value: function onSubmit2() {
      var _this11 = this;

      this.submitted = true;

      if (this.loginForm.invalid && this.loginForm1.invalid) {
        return;
      }

      this.loading = true;
      $('#sub').attr("disabled", "true");
      var data = new FormData();
      data.append("f_name", this.ff.f_name.value);
      data.append("phone", this.f.mobileno.value);
      data.append("m_name", this.ff.m_name.value);
      data.append("l_name", this.ff.l_name.value);
      data.append("password", this.f.password.value);
      data.append("dob", this.ff.dob.value);
      data.append("gender", this.ff.gender.value);
      data.append("address", this.ff.address.value);
      data.append("device_type", "web"); // data.append("token", this.f.token.value);

      data.append("email", this.f.username.value);
      data.append("nic_front", this.urlscnicf);
      data.append("nic_back", this.urlscnicb);
      data.append("passport", this.urlsps);
      data.append("utility_bill", this.urlsub);
      data.append("bank_statement", this.urlsbs);
      data.append("security_document", this.urlssd);
      data.append("reg_mobile_money_doc", this.urlsrd);
      data.append("new_prop_dev_detail", this.urlsnd);
      data.append("profile_image", this.urlspi);
      this.authService.post('addUser', data).then(function (res) {
        console.log(res);
        document.location.href = "#top";
        _this11.loading = false;
        $('#sub').removeAttr("disabled");

        if (res.status == 200) {
          _this11.message = "Sucessfully Registered";
          setTimeout(function () {
            _this11.message = null;
            window.location.href = "/login";
          }, 1500);
        } else {
          _this11.loading = false;
          _this11.error = res.error.message;
          setTimeout(function () {
            _this11.error = null;
          }, 2000);
        }
      });
    }
  }, {
    key: "VerifyOtpRsend",
    value: function VerifyOtpRsend() {
      var _this12 = this;

      var inputValue = document.getElementById("id").value;
      this.authService.otpResend(inputValue).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.first)()).subscribe(function (data) {
        _this12.step = 2;
        _this12.error = data.message; //  this.router.navigate([this.returnUrl]);
      }, function (er) {
        _this12.loading = false;

        _this12.handleError(er);
      });
    }
  }, {
    key: "callMyCount",
    value: function callMyCount() {
      document.getElementById('timer').innerHTML = "01" + ":" + "00";
      var timerOn = true;

      function timer(remaining) {
        var m = Math.floor(remaining / 60);
        var s = remaining % 60;
        m = m < 10 ? 0 + m : m;
        s = s < 10 ? 0 + s : s;
        document.getElementById('timer').innerHTML = m + ':' + s;
        remaining -= 1;

        if (remaining >= 0 && timerOn) {
          setTimeout(function () {
            timer(remaining);
          }, 1000);
          return;
        }

        if (!timerOn) {
          // Do validate stuff here
          return;
        }

        var element = document.getElementById("btnresent");
        element.disabled = false; // Do timeout stuff here
      }

      timer(5);
    }
  }, {
    key: "handleError",
    value: function handleError(error) {
      this.loading = false;
      this.error = error;
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('login-page');
      body.classList.remove('off-canvas-sidebar');
    }
  }]);

  return SignUpComponent;
}();

SignUpComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _services__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService
  }];
};

SignUpComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-SignUp-cmp',
  template: _SignUp_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], SignUpComponent);


/***/ }),

/***/ 23888:
/*!**********************************************************!*\
  !*** ./src/app/pages/SignUpwith/SignUpwith.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpwithComponent": function() { return /* binding */ SignUpwithComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _SignUpwith_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignUpwith.component.html?ngResource */ 70276);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services */ 9949);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 20088);



// import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
// import { Router } from '@angular/router';
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

 // declare var $: any;
// @Component({
//     selector: 'app-login-cmp',
//     templateUrl: './login.component.html'
// })
// export class LoginComponent implements OnInit, OnDestroy {
//     name: string;
//     email: string;
//     pass: string;
//     test: Date = new Date();
//     private toggleButton: any;
//     private sidebarVisible: boolean;
//     private nativeElement: Node;
//     constructor(private element: ElementRef, private router: Router) {
//         this.nativeElement = element.nativeElement;
//         this.sidebarVisible = false;
//     }
//     ngOnInit() {
//         var navbar : HTMLElement = this.element.nativeElement;
//         this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
//         const body = document.getElementsByTagName('body')[0];
//         body.classList.add('login-page');
//         body.classList.add('off-canvas-sidebar');
//         const card = document.getElementsByClassName('card')[0];
//         setTimeout(function() {
//             // after 1000 ms we add the class animated to the login/register card
//             card.classList.remove('card-hidden');
//         }, 700);
//     }
//     sidebarToggle() {
//         var toggleButton = this.toggleButton;
//         var body = document.getElementsByTagName('body')[0];
//         var sidebar = document.getElementsByClassName('navbar-collapse')[0];
//         if (this.sidebarVisible == false) {
//             setTimeout(function() {
//                 toggleButton.classList.add('toggled');
//             }, 500);
//             body.classList.add('nav-open');
//             this.sidebarVisible = true;
//         } else {
//             this.toggleButton.classList.remove('toggled');
//             this.sidebarVisible = false;
//             body.classList.remove('nav-open');
//         }
//     }
//     ngOnDestroy(){
//       const body = document.getElementsByTagName('body')[0];
//       body.classList.remove('login-page');
//       body.classList.remove('off-canvas-sidebar');
//     }
//     login(){
//         if (this.email == "captall@gmail.com"){
//             this.router.navigateByUrl('home')
//         }
//     }
// }







var SignUpwithComponent = /*#__PURE__*/function () {
  function SignUpwithComponent(element, formBuilder, route, router, authService) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SignUpwithComponent);

    this.element = element;
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.authService = authService;
    this.test = new Date();
    this.loading = false;
    this.submitted = false;
    this.error = '';
    this.step = 1;
    this.nativeElement = element.nativeElement;
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SignUpwithComponent, [{
    key: "Login",
    value: function Login() {
      //this.http.post('https://localhost:44337/api/Users/authenticate');
      return null;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var navbar = this.element.nativeElement;
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('login-page');
      body.classList.add('off-canvas-sidebar');
      var card = document.getElementsByClassName('card-login')[0];
      setTimeout(function () {// after 1000 ms we add the class animated to the login/register card
        // card.classList.remove('card-hidden');
      }, 300);
      this.loginForm = this.formBuilder.group({
        username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
      });
      this.otpForm = this.formBuilder.group({
        OTP: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
      });
      this.authService.logout();
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    }
  }, {
    key: "f",
    get: function get() {
      return this.loginForm.controls;
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this = this;

      this.submitted = true;

      if (this.loginForm.invalid) {
        return;
      }

      this.loading = true;
      this.authService.login(this.f.username.value, this.f.password.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.first)()).subscribe(function (data) {
        _this.error = null;
        _this.step = 2;

        _this.otpForm.patchValue(data.data);

        setTimeout(function () {
          _this.callMyCount();
        }, 1000); //  this.router.navigate([this.returnUrl]);
      }, function (er) {
        _this.loading = false;
        _this.error = er;
        console.log(_this.error); //  this.handleError(er.tostring())
      });
    }
  }, {
    key: "ff",
    get: function get() {
      return this.otpForm.controls;
    }
  }, {
    key: "VerifyOtp",
    value: function VerifyOtp() {
      var _this2 = this;

      this.submitted = true;

      if (this.otpForm.invalid) {
        return;
      }

      localStorage.setItem('currentUser', JSON.stringify("ab")); // this.router.navigate([this.returnUrl]);

      var otp = {
        id: this.ff.id,
        OTP: this.ff.OTP
      };
      this.loading = true;
      this.authService.otp(otp.id.value, otp.OTP.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.first)()).subscribe(function (data) {
        _this2.step = 2;
        console.log(data);

        if (data && data.data.auth_key) {
          localStorage.setItem('currentUser', JSON.stringify(data.data));
        }

        _this2.router.navigate([_this2.returnUrl]);
      }, function (er) {
        _this2.loading = false;
        _this2.error = er;
        console.log(_this2.error); //  this.handleError(er)
      });
    }
  }, {
    key: "VerifyOtpRsend",
    value: function VerifyOtpRsend() {
      var _this3 = this;

      var inputValue = document.getElementById("id").value;
      this.authService.otpResend(inputValue).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.first)()).subscribe(function (data) {
        _this3.step = 2;
        _this3.error = data.message; //  this.router.navigate([this.returnUrl]);
      }, function (er) {
        _this3.loading = false;

        _this3.handleError(er);
      });
    }
  }, {
    key: "callMyCount",
    value: function callMyCount() {
      document.getElementById('timer').innerHTML = "01" + ":" + "00";
      var timerOn = true;

      function timer(remaining) {
        var m = Math.floor(remaining / 60);
        var s = remaining % 60;
        m = m < 10 ? 0 + m : m;
        s = s < 10 ? 0 + s : s;
        document.getElementById('timer').innerHTML = m + ':' + s;
        remaining -= 1;

        if (remaining >= 0 && timerOn) {
          setTimeout(function () {
            timer(remaining);
          }, 1000);
          return;
        }

        if (!timerOn) {
          // Do validate stuff here
          return;
        }

        var element = document.getElementById("btnresent");
        element.disabled = false; // Do timeout stuff here
      }

      timer(5);
    }
  }, {
    key: "handleError",
    value: function handleError(error) {
      this.loading = false;
      this.error = error;
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('login-page');
      body.classList.remove('off-canvas-sidebar');
    }
  }]);

  return SignUpwithComponent;
}();

SignUpwithComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _services__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService
  }];
};

SignUpwithComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-SignUpwith-cmp',
  template: _SignUpwith_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], SignUpwithComponent);


/***/ }),

/***/ 24902:
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": function() { return /* binding */ LoginComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.html?ngResource */ 48583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services */ 9949);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 20088);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var LoginComponent = /*#__PURE__*/function () {
  function LoginComponent(element, formBuilder, route, router, authService) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoginComponent);

    this.element = element;
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.authService = authService;
    this.test = new Date();
    this.loading = false;
    this.submitted = false;
    this.error = '';
    this.step = 1;
    this.nativeElement = element.nativeElement;
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LoginComponent, [{
    key: "Login",
    value: function Login() {
      //this.http.post('https://localhost:44337/api/Users/authenticate');
      return null;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var navbar = this.element.nativeElement;
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('login-page');
      body.classList.add('off-canvas-sidebar');
      var card = document.getElementsByClassName('card-login')[0];
      setTimeout(function () {// after 1000 ms we add the class animated to the login/register card
        // card.classList.remove('card-hidden');
      }, 300);
      this.loginForm = this.formBuilder.group({
        Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        Password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
      });
      this.otpForm = this.formBuilder.group({
        OTP: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
      });
      this.authService.logout();
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '#/admin/dashboard';
    }
  }, {
    key: "f",
    get: function get() {
      return this.loginForm.controls;
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this = this;

      this.submitted = true;

      if (this.loginForm.invalid) {
        return;
      }

      this.loading = true;
      this.authService.adminlogin(this.f.Email.value, this.f.Password.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.first)()).subscribe(function (data) {
        if (data.success == true) {
          _this.error = null;
          _this.loading = false;
          setTimeout(function () {
            window.location.href = _this.returnUrl;
          }, 1500);
        } else {
          _this.loading = false;
          _this.error = data.message;
          setTimeout(function () {
            _this.error = null;
          }, 1500);
        }

        localStorage.setItem('admintoken', data.data.token);
      }, function (er) {
        _this.loading = false;
        _this.error = er;
        console.log(_this.error); //  this.handleError(er.tostring())
      });
    }
  }, {
    key: "ff",
    get: function get() {
      return this.otpForm.controls;
    }
  }, {
    key: "VerifyOtp",
    value: function VerifyOtp() {
      var _this2 = this;

      this.submitted = true;

      if (this.otpForm.invalid) {
        return;
      }

      localStorage.setItem('currentUser', JSON.stringify("ab")); // this.router.navigate([this.returnUrl]);

      var otp = {
        id: this.ff.id,
        OTP: this.ff.OTP
      };
      this.loading = true;
      this.authService.otp(otp.id.value, otp.OTP.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.first)()).subscribe(function (data) {
        _this2.step = 2;
        console.log(data);

        if (data && data.data.auth_key) {
          localStorage.setItem('currentUser', JSON.stringify(data.data));
        }

        _this2.router.navigate([_this2.returnUrl]);
      }, function (er) {
        _this2.loading = false;
        _this2.error = er;
        console.log(_this2.error); //  this.handleError(er)
      });
    }
  }, {
    key: "VerifyOtpRsend",
    value: function VerifyOtpRsend() {
      var _this3 = this;

      var inputValue = document.getElementById("id").value;
      this.authService.otpResend(inputValue).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.first)()).subscribe(function (data) {
        _this3.step = 2;
        _this3.error = data.message; //  this.router.navigate([this.returnUrl]);
      }, function (er) {
        _this3.loading = false;

        _this3.handleError(er);
      });
    }
  }, {
    key: "callMyCount",
    value: function callMyCount() {
      document.getElementById('timer').innerHTML = "01" + ":" + "00";
      var timerOn = true;

      function timer(remaining) {
        var m = Math.floor(remaining / 60);
        var s = remaining % 60;
        m = m < 10 ? 0 + m : m;
        s = s < 10 ? 0 + s : s;
        document.getElementById('timer').innerHTML = m + ':' + s;
        remaining -= 1;

        if (remaining >= 0 && timerOn) {
          setTimeout(function () {
            timer(remaining);
          }, 1000);
          return;
        }

        if (!timerOn) {
          // Do validate stuff here
          return;
        }

        var element = document.getElementById("btnresent");
        element.disabled = false; // Do timeout stuff here
      }

      timer(5);
    }
  }, {
    key: "handleError",
    value: function handleError(error) {
      this.loading = false;
      this.error = error;
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('login-page');
      body.classList.remove('off-canvas-sidebar');
    }
  }]);

  return LoginComponent;
}();

LoginComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _services__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService
  }];
};

LoginComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-login-cmp',
  template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], LoginComponent);


/***/ }),

/***/ 18950:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesModule": function() { return /* binding */ PagesModule; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.module */ 36747);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _pages_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages.routing */ 63360);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ 24902);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ 46698);
/* harmony import */ var _SignUpwith_SignUpwith_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SignUpwith/SignUpwith.component */ 23888);
/* harmony import */ var _SignUp_SignUp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SignUp/SignUp.component */ 55468);
/* harmony import */ var _Forgotpassword_Forgotpassword_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Forgotpassword/Forgotpassword.component */ 51689);



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








var PagesModule = /*#__PURE__*/(0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function PagesModule() {
  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PagesModule);
});

PagesModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(_pages_routing__WEBPACK_IMPORTED_MODULE_3__.PagesRoutes), _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _app_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule],
  declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent, _register_register_component__WEBPACK_IMPORTED_MODULE_5__.RegisterComponent, _SignUpwith_SignUpwith_component__WEBPACK_IMPORTED_MODULE_6__.SignUpwithComponent, _SignUp_SignUp_component__WEBPACK_IMPORTED_MODULE_7__.SignUpComponent, _Forgotpassword_Forgotpassword_component__WEBPACK_IMPORTED_MODULE_8__.ForgotpasswordComponent]
})], PagesModule);


/***/ }),

/***/ 63360:
/*!****************************************!*\
  !*** ./src/app/pages/pages.routing.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesRoutes": function() { return /* binding */ PagesRoutes; }
/* harmony export */ });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 24902);
/* harmony import */ var _SignUpwith_SignUpwith_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignUpwith/SignUpwith.component */ 23888);
/* harmony import */ var _SignUp_SignUp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignUp/SignUp.component */ 55468);
/* harmony import */ var _Forgotpassword_Forgotpassword_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Forgotpassword/Forgotpassword.component */ 51689);




var PagesRoutes = [{
  path: '',
  children: [{
    path: 'login',
    component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
  }]
}, {
  path: '',
  children: [{
    path: 'signupwith',
    component: _SignUpwith_SignUpwith_component__WEBPACK_IMPORTED_MODULE_1__.SignUpwithComponent
  }]
}, {
  path: '',
  children: [{
    path: 'signup',
    component: _SignUp_SignUp_component__WEBPACK_IMPORTED_MODULE_2__.SignUpComponent
  }]
}, {
  path: '',
  children: [{
    path: 'forgotpassword',
    component: _Forgotpassword_Forgotpassword_component__WEBPACK_IMPORTED_MODULE_3__.ForgotpasswordComponent
  }]
}];

/***/ }),

/***/ 46698:
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": function() { return /* binding */ RegisterComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component.html?ngResource */ 59434);
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




var RegisterComponent = /*#__PURE__*/function () {
  function RegisterComponent() {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RegisterComponent);

    this.test = new Date();
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(RegisterComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('register-page');
      body.classList.add('off-canvas-sidebar');
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('register-page');
      body.classList.remove('off-canvas-sidebar');
    }
  }]);

  return RegisterComponent;
}();

RegisterComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-register-cmp',
  template: _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], RegisterComponent);


/***/ }),

/***/ 10456:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/Forgotpassword/Forgotpassword.component.html?ngResource ***!
  \*******************************************************************************/
/***/ (function(module) {

module.exports = "\r\n<style>\r\n  .form-group{\r\n    padding: 0px;\r\n    border: 1px solid #9da5ad;\r\n    border-radius: 5px;\r\n    margin: 10px !important;\r\n}\r\n.form-group>label{\r\n  position: absolute;\r\n    top: -10px;\r\n    left: 20px;\r\n    color: black;\r\n  background-color:white;\r\n}\r\n\r\n.form-group>input{\r\n  border:none;\r\n  background-image: none;\r\n  padding-left: 20px;\r\n}\r\n</style>\r\n\r\n<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header register-page header-filter\" filter-color=\"black\" style=\"background-color:#f6f7f8; background-size: cover; background-position: top center;\">\r\n    <div class=\"container mt-0\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-4 col-md-8 col-sm-9 mt-0 ml-auto mr-auto\">\r\n          <div class=\"card card-signup mb-5\" >\r\n            \r\n            <h3 class=\"text-center\" style=\"text-align: left;letter-spacing: 0px;color: #000000;opacity: 1;\"> <b>Forgot Password</b></h3>\r\n            <p class=\"text-center mb-0\" *ngIf=\"step==1\">\r\n              Please enter mobile number</p>\r\n              <p class=\"text-center mb-0\" *ngIf=\"step==2\">\r\n                Enter 4 digit code sent you at<br> +233 973 062 7087</p>\r\n                <p class=\"text-center mb-0\" *ngIf=\"step==3\">\r\n                  Please enter your new password</p>\r\n            <div class=\"card-body  \">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 ml-auto mr-auto\">\r\n                  \r\n                  <form class=\"form\"  [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" >\r\n                    <div class=\"row\">\r\n                      <div class=\"col-12\">\r\n                        <div *ngIf=\"message\" class=\"alert alert-info\">\r\n                          {{message}}\r\n                          <a (click)=\"error=''\" class=\"close float-right\" href=\"javascript:void(0)\">x</a>\r\n      \r\n                        </div>\r\n                        <div *ngIf=\"error\" class=\"alert alert-danger\">\r\n                          {{error}}\r\n                          <a (click)=\"error=''\" class=\"close float-right\" href=\"javascript:void(0)\">x</a>\r\n      \r\n                        </div>\r\n                      </div>\r\n                    </div> \r\n                      <div class=\"row\">\r\n                        <div class=\"col-12 \" *ngIf=\"step==3\">\r\n                          <div class=\"form-group\">\r\n                            <label>New Password</label>\r\n                            <input type=\"text\" placeholder=\"Enter New Password\" formControlName=\"password\" class=\"form-control input-lg\" />\r\n                       </div>\r\n                        </div>\r\n                        <div class=\"col-12 mt-3\" *ngIf=\"step==3\">\r\n                          <div class=\"form-group\">\r\n                            <label>Confirm Password</label>\r\n                            <input type=\"text\" placeholder=\"Enter Confirm Password\" formControlName=\"cpassword\" class=\"form-control input-lg\" />\r\n                            <input type=\"hidden\" placeholder=\"Enter Mobile Number\" id=\"mobileno\" formControlName=\"mobileno\" class=\"form-control input-lg\" />\r\n\r\n                       </div>\r\n                        </div>\r\n                        <div class=\"col-12 \" *ngIf=\"step==2 || step==1\">\r\n                          <div class=\"form-group\">\r\n                            <label>Mobile Number</label>\r\n                            <input type=\"text\" placeholder=\"Enter Mobile Number\" id=\"mobileno\" formControlName=\"mobileno\" class=\"form-control input-lg\" />\r\n                       </div>\r\n                        </div>\r\n                        <div class=\"col-12 \" *ngIf=\"step==2\">\r\n                          <div class=\"form-group\">\r\n                            <label>Code</label>\r\n                            <input type=\"text\" placeholder=\"Enter Code\" id=\"code\" class=\"form-control input-lg\" formControlName=\"code\" />\r\n                       </div>\r\n                        </div>\r\n                        \r\n                        <div class=\"col-12\" *ngIf=\"step==1\">\r\n                          <button class=\"btn btn-success text-center btn-block\" (click)=\"sendcode()\">Next</button>\r\n\r\n                        </div>\r\n                        <div class=\"col-12\" *ngIf=\"step==2\">\r\n                          <button class=\"btn btn-success text-center btn-block\" (click)=\"stepthree()\">Continue</button>\r\n\r\n                        </div>\r\n                        <div class=\"col-12\" *ngIf=\"step==3\">\r\n                          <button class=\"btn btn-success text-center btn-block\" >Submit</button>\r\n\r\n                        </div>\r\n                      </div>\r\n                    \r\n                   \r\n                  </form>\r\n\r\n                 \r\n                </div>\r\n               \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <footer class=\"footer \" style=\"background-color: #000000!important;\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3 text-left\">\r\n            <div>      \r\n                    <img src=\"./assets/img/Assets/Captall_logo_w.png\" style=\"width:70%;\"/>\r\n            </div>\r\n            <div ><p class=\"mt-2\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p></div>\r\n         <div><span style=\"top: 1572px;\r\n          left: 251px;\r\n          width: 43px;\r\n          height: 43px;\r\n          background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;\r\n          background: #FFFFFF 0% 0% no-repeat padding-box;\r\n          opacity: 1;\"></span></div>\r\n          </div>\r\n          <div class=\"col-md-3 text-left\">\r\n            <h4>Legal</h4>\r\n            <p>Terms and Conditions</p>\r\n            <p>Privacy Policy</p>\r\n            <p>Help & Support</p>\r\n\r\n          </div>\r\n          <div class=\"col-md-3 text-left\">\r\n            <h4>Our Company</h4>\r\n            <p>About us</p>\r\n            <p>Code of Conduct</p>\r\n            <p>Sitemap</p>\r\n\r\n          </div>\r\n          <div class=\"col-md-3 text-left\">\r\n            <h4>Contact</h4>\r\n            <p>+44-123-456-7890</p>\r\n            <p>Privacy Policy</p>\r\n            <p>+44-123-456-7890</p>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n    </footer>\r\n  </div>\r\n </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n";

/***/ }),

/***/ 22272:
/*!***************************************************************!*\
  !*** ./src/app/pages/SignUp/SignUp.component.html?ngResource ***!
  \***************************************************************/
/***/ (function(module) {

module.exports = "\r\n<style>\r\n  .form-group{\r\n    padding: 0px;\r\n    border: 1px solid #9da5ad;\r\n    border-radius: 5px;\r\n    margin: 10px !important;\r\n}\r\n.form-group>label{\r\n  position: absolute;\r\n    top: -10px;\r\n    left: 20px;\r\n    color: black;\r\n  background-color:white;\r\n}\r\n\r\n.form-group>input{\r\n  border:none;\r\n  background-image: none;\r\n  padding-left: 20px;\r\n}\r\n</style>\r\n\r\n<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header register-page header-filter\" filter-color=\"black\" style=\"background-color:#f6f7f8; background-size: cover; background-position: top center;\">\r\n    <div class=\"container mt-0\" id=\"top\">\r\n      \r\n      <br>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-4 col-md-8 col-sm-9 mt-0 ml-auto mr-auto\" *ngIf=\"step==1 ||step==2\">\r\n          <div class=\"card card-signup mb-5\" >\r\n            \r\n            <h3 class=\"text-center\" style=\"text-align: left;letter-spacing: 0px;color: #000000;opacity: 1;\"> <b>SignUp</b></h3>\r\n            <p class=\"text-center mb-0\">\r\n              This is secure website <br> please enter your username and password to login</p>\r\n           \r\n            <div class=\"card-body  \">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 ml-auto mr-auto\" >\r\n                  \r\n                  <form class=\"form\"  [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" >\r\n                      <div class=\"row\">\r\n                        <div class=\"col-12 \">\r\n                          <div class=\"form-group\">\r\n                            <label>Email</label>\r\n                            <input type=\"text\" placeholder=\"Enter Email\" formControlName=\"username\" class=\"form-control input-lg\" />\r\n                       </div>\r\n                       <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback d-block pl-4\">\r\n                        <div *ngIf=\"f.username.errors.required\">Email Name is required</div>\r\n                      </div>\r\n                        </div>\r\n                        <div class=\"col-12 mt-3\">\r\n                          <div class=\"form-group\">\r\n                            <label>Password</label>\r\n                            <input type=\"text\" placeholder=\"Enter Password\" formControlName=\"password\" class=\"form-control input-lg\" />\r\n                       </div>\r\n                       <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback d-block pl-4\">\r\n                        <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                      </div>\r\n                        </div>\r\n                        <div class=\"col-12 \">\r\n                          <div class=\"form-group\">\r\n                            <label>Mobile Number</label>\r\n                            <input type=\"text\" placeholder=\"Enter Mobile Number\" formControlName=\"mobileno\" id=\"mobileno\"  class=\"form-control input-lg\" />\r\n                       </div>\r\n                       <div *ngIf=\"phoneerror\" class=\"text-danger\">\r\n                        {{phoneerrortext}}\r\n                      </div>\r\n                       <div *ngIf=\"submitted && f.mobileno.errors\" class=\"invalid-feedback d-block pl-4\">\r\n                        <div *ngIf=\"f.mobileno.errors.required\">Mobile is required</div>\r\n                      </div>\r\n                        </div>\r\n                        <div class=\"col-12 \" *ngIf=\"step==2\">\r\n                          <div class=\"form-group\">\r\n                            <label>Code</label>\r\n                            <input type=\"text\" placeholder=\"Enter Code\" formControlName=\"code\"  class=\"form-control input-lg\" />\r\n                            \r\n                          </div>\r\n                          <div *ngIf=\"codeerror\" class=\"text-danger\">\r\n                            {{codeerrortext}}\r\n                          </div>\r\n                        </div>\r\n                        \r\n                        <div class=\"col-12\" *ngIf=\"step==1\">\r\n                          <button type=\"button\" class=\"btn btn-success text-center btn-block\" (click)=\"sendcode()\" >Continue and Send Code</button>\r\n\r\n                        </div>\r\n                        <div class=\"col-12\" *ngIf=\"step==2\">\r\n                          <button class=\"btn btn-success text-center btn-block\" type=\"submit\">Signup</button>\r\n\r\n                        </div>\r\n                      </div>\r\n                    \r\n                   \r\n                  </form>\r\n\r\n                 \r\n                </div>\r\n                \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-10 col-md-12  mt-0 ml-auto mr-auto\" *ngIf=\"step==3\">\r\n          <div class=\"card card-signup mb-5\" >\r\n            <div class=\"card-header\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 mt-5\">\r\n                <h3 class=\"text-left\" style=\"text-align: left;letter-spacing: 0px;color: #000000;opacity: 1;\"> <b>Check Eligibility</b></h3>\r\n            <p class=\"text-left mb-0\">\r\n              Fill out the below form to check your eligibility<br> to apply for Loan</p>\r\n              </div>\r\n              <div class=\"col-md-6 mt-5 text-right\">\r\n                <input type=\"file\"  (change)=\"selectimagepi($event)\" id=\"inputimagepi\" style=\"display: none;\">\r\n                \r\n                <img src=\"./assets/img/Assets/Avtar.png\" id=\"beforeshow\"> <img [src]=\"urlpi\" id=\"aftershow\" style=\"height: 70px;display: none;\" class=\"mr-2\"><button class=\"btn btn-success pt-2 pb-2 btn-round mr-5\" (click)=\"imageselectpi()\">Upload</button>\r\n              </div>\r\n            </div>\r\n            </div>\r\n              <div class=\"card-body  \">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 ml-auto mr-auto\" >\r\n                  \r\n                  <form class=\"form\"  [formGroup]=\"loginForm1\" (ngSubmit)=\"onSubmit1()\" >\r\n                      <div class=\"row\">\r\n                        <div class=\"col-6 \">\r\n                          <div class=\"form-group\">\r\n                            <label>First Name</label>\r\n                            <input type=\"text\" placeholder=\"Enter First Name\" formControlName=\"f_name\" class=\"form-control input-lg\" />\r\n                       </div>\r\n                       <div *ngIf=\"submitted && ff.f_name.errors\" class=\"invalid-feedback d-block pl-4\">\r\n                        <div *ngIf=\"ff.f_name.errors.required\">First Name is required</div>\r\n                      </div>\r\n                        </div>\r\n                        <div class=\"col-6 \">\r\n                          <div class=\"form-group\">\r\n                            <label>Middle Name</label>\r\n                            <input type=\"text\" placeholder=\"Enter Middle Name\" formControlName=\"m_name\" class=\"form-control input-lg\" />\r\n                       </div>\r\n                       <div *ngIf=\"submitted && ff.m_name.errors\" class=\"invalid-feedback d-block pl-4\">\r\n                        <div *ngIf=\"ff.m_name.errors.required\">Middle Name is required</div>\r\n                      </div>\r\n                        </div>\r\n                        <div class=\"col-6 \">\r\n                          <div class=\"form-group\">\r\n                            <label>Last Name</label>\r\n                            <input type=\"text\" placeholder=\"Enter Last Name\" formControlName=\"l_name\" class=\"form-control input-lg\" />\r\n                       </div>\r\n                       <div *ngIf=\"submitted && ff.l_name.errors\" class=\"invalid-feedback d-block pl-4\">\r\n                        <div *ngIf=\"ff.l_name.errors.required\">Last Name is required</div>\r\n                      </div>\r\n                        </div>\r\n                        <div class=\"col-6 \" >\r\n                          <div class=\"form-group\">\r\n                            <label>DOB</label>\r\n                            <input type=\"date\" placeholder=\"Enter DOB\" formControlName=\"dob\" class=\"form-control input-lg\" />\r\n                       </div>\r\n                       <div *ngIf=\"submitted && ff.dob.errors\" class=\"invalid-feedback d-block pl-4\">\r\n                        <div *ngIf=\"ff.dob.errors.required\">DOB  is required</div>\r\n                      </div>\r\n                        </div>\r\n                        \r\n                        <div class=\"col-6 \" >\r\n                          <div class=\"form-group\">\r\n                            <label>Gender</label>\r\n                            <mat-form-field style=\"background-image: none !important;\">\r\n                              <mat-select style=\"background-image: none !important;\" placeholder=\"\" formControlName=\"gender\">\r\n                                <mat-option value=\"male\" selected>\r\n                                  Male\r\n                                </mat-option>\r\n                                <mat-option value=\"female\">\r\n                                  Female\r\n                                </mat-option>\r\n                               \r\n                              </mat-select>\r\n                            </mat-form-field>\r\n\r\n                       </div>\r\n                       <div *ngIf=\"submitted && ff.gender.errors\" class=\"invalid-feedback d-block pl-4\">\r\n                        <div *ngIf=\"ff.gender.errors.required\">Gender Name is required</div>\r\n                      </div>\r\n                        </div>\r\n                        <div class=\"col-6 \" >\r\n                          <div class=\"form-group\">\r\n                            <label>Address</label>\r\n                            <input type=\"text\" placeholder=\"Enter Address\" class=\"form-control input-lg\" formControlName=\"address\" />\r\n                       </div>\r\n                       <div *ngIf=\"submitted && ff.address.errors\" class=\"invalid-feedback d-block pl-4\">\r\n                        <div *ngIf=\"ff.address.errors.required\">Address Name is required</div>\r\n                      </div>\r\n                        </div>\r\n                       <div class=\"col-12\">\r\n                         <label><input type=\"checkbox\" (change)=\"agree($event)\"  class=\"mr-2 ml-2\">I agree that these are correct details</label>\r\n                       </div>\r\n                        <div class=\"col-md-4\" >\r\n                          <button class=\"btn btn-success text-center btn-block\" id=\"continue\" disabled type=\"submit\">Continue</button>\r\n\r\n                        </div>\r\n                      </div>\r\n                    \r\n                   \r\n                  </form>\r\n\r\n                 \r\n                </div>\r\n               \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-10 col-md-12  mt-0 ml-auto mr-auto\" *ngIf=\"step==4\">\r\n          <div class=\"card card-signup mb-5\" >\r\n            <div class=\"card-header\">\r\n              \r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 mt-5\">\r\n                <h3 class=\"text-left\" style=\"text-align: left;letter-spacing: 0px;color: #000000;opacity: 1;\"> <b>Documents</b></h3>\r\n            <p class=\"text-left mb-0\">\r\n              Fill out the below form to check your eligibility<br> to apply for Loan</p>\r\n              </div>\r\n              \r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                <div *ngIf=\"message\" class=\"alert alert-info\">\r\n                  {{message}}\r\n                  <a (click)=\"message=''\" class=\"close float-right\" href=\"javascript:void(0)\">x</a>\r\n                </div>\r\n      \r\n                <div *ngIf=\"error\" class=\"alert alert-danger\">\r\n                  {{error}}\r\n                  <a (click)=\"error=''\" class=\"close float-right\" href=\"javascript:void(0)\">x</a>\r\n      \r\n                </div>\r\n              </div>\r\n            </div>\r\n            </div>\r\n              <div class=\"card-body  \">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 ml-auto mr-auto\">\r\n                  \r\n                  <form class=\"form\"  [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit2()\" >\r\n                      <div class=\"row\">\r\n                        <div class=\"col-12 \">\r\n                            <h4> <b>Upload ID Card's Images</b></h4>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-lg-6 mt-2\">\r\n                          <label class=\"bmd-label-floating\">Cnic Front</label>\r\n                          <input type=\"file\"  (change)=\"selectimagecnicf($event)\" id=\"inputimagecnicf\" style=\"display: none;\">\r\n                          <div class=\"card mt-0\">\r\n                            <div class=\"card-body\">\r\n                            <img [src]=\"urlcnicf\" style=\"height: 50px;\" class=\"mr-2\">\r\n                            <img src=\"./assets/img/Assets/img_ph.png\" (click)=\"imageselectcnicf()\" style=\"height:46px;\">\r\n                          </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-lg-6 mt-2\">\r\n                          <label class=\"bmd-label-floating\">Cnic Back</label>\r\n                          <input type=\"file\"  (change)=\"selectimagecnicb($event)\" id=\"inputimagecnicb\" style=\"display: none;\">\r\n                          <div class=\"card mt-0\">\r\n                            <div class=\"card-body\">\r\n                            <img  [src]=\"urlcnicb\" style=\"height: 50px;\" class=\"mr-2\">\r\n                            <img src=\"./assets/img/Assets/img_ph.png\" (click)=\"imageselectcnicb()\" style=\"height:46px;\">\r\n                          </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-lg-6 mt-2\">\r\n                          <label class=\"bmd-label-floating\">Passport</label>\r\n                          <input type=\"file\" multiple (change)=\"selectimageps($event)\" id=\"inputimageps\" style=\"display: none;\">\r\n                          <div class=\"card mt-0\">\r\n                            <div class=\"card-body\">\r\n                            <img  [src]=\"urlps\" style=\"height: 50px;\" class=\"mr-2\">\r\n                            <img src=\"./assets/img/Assets/img_ph.png\" (click)=\"imageselectps()\" style=\"height:46px;\">\r\n                          </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-lg-6 mt-2\">\r\n                          <label class=\"bmd-label-floating\">Utility Bill</label>\r\n                          <input type=\"file\"  (change)=\"selectimageub($event)\" id=\"inputimageub\" style=\"display: none;\">\r\n                          <div class=\"card mt-0\">\r\n                            <div class=\"card-body\">\r\n                            <img  [src]=\"urlub\" style=\"height: 50px;\" class=\"mr-2\">\r\n                            <img src=\"./assets/img/Assets/img_ph.png\" (click)=\"imageselectub()\" style=\"height:46px;\">\r\n                          </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-lg-6 mt-2\">\r\n                          <label class=\"bmd-label-floating\">Bank Statement</label>\r\n                          <input type=\"file\"  (change)=\"selectimagebs($event)\" id=\"inputimagebs\" style=\"display: none;\">\r\n                          <div class=\"card mt-0\">\r\n                            <div class=\"card-body\">\r\n                            <img  [src]=\"urlbs\" style=\"height: 50px;\" class=\"mr-2\">\r\n                            <img src=\"./assets/img/Assets/img_ph.png\" (click)=\"imageselectbs()\" style=\"height:46px;\">\r\n                          </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-lg-6 mt-2\">\r\n                          <label class=\"bmd-label-floating\">Security Documents</label>\r\n                          <input type=\"file\"  (change)=\"selectimagesd($event)\" id=\"inputimagesd\" style=\"display: none;\">\r\n                          <div class=\"card mt-0\">\r\n                            <div class=\"card-body\">\r\n                            <img  [src]=\"urlsd\" style=\"height: 50px;\" class=\"mr-2\">\r\n                            <img src=\"./assets/img/Assets/img_ph.png\" (click)=\"imageselectsd()\" style=\"height:46px;\">\r\n                          </div>\r\n                          </div>\r\n                        </div>\r\n                        \r\n                        <div class=\"col-md-6 col-lg-6 mt-2\">\r\n                          <label class=\"bmd-label-floating\">Reg mobile Documents</label>\r\n                          <input type=\"file\"  (change)=\"selectimagerd($event)\" id=\"inputimagerd\" style=\"display: none;\">\r\n                          <div class=\"card mt-0\">\r\n                            <div class=\"card-body\">\r\n                            <img  [src]=\"urlrd\" style=\"height: 50px;\" class=\"mr-2\">\r\n                            <img src=\"./assets/img/Assets/img_ph.png\" (click)=\"imageselectrd()\" style=\"height:46px;\">\r\n                          </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-lg-6 mt-2\">\r\n                          <label class=\"bmd-label-floating\">New Property Details</label>\r\n                          <input type=\"file\"  (change)=\"selectimagend($event)\" id=\"inputimagend\" style=\"display: none;\">\r\n                          <div class=\"card mt-0\">\r\n                            <div class=\"card-body\">\r\n                            <img [src]=\"urlnd\" style=\"height: 50px;\" class=\"mr-2\">\r\n                            <img src=\"./assets/img/Assets/img_ph.png\" (click)=\"imageselectnd()\" style=\"height:46px;\">\r\n                          </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-12\">\r\n                         <h4 style=\"color: red;\"> Note: Once Details submitted cannot be changed.</h4>\r\n                         <label><input type=\"checkbox\" (change)=\"issubmit($event)\"  class=\"mr-2 ml-2\">I confirm that above details belongs to me and are as per my ID Card and I allow CAPTall to run credit checks on my behalf</label>\r\n\r\n                        </div>\r\n                        <div class=\"col-md-4\" >\r\n                          <button class=\"btn btn-success text-center btn-block\" disabled id=\"sub\">Submit</button>\r\n                          <img *ngIf=\"loading\"\r\n                          src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n        \r\n                        </div>\r\n                      </div>\r\n                    \r\n                   \r\n                  </form>\r\n\r\n                 \r\n                </div>\r\n               \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <footer class=\"footer \" style=\"background-color: #000000!important;\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3 text-left\">\r\n            <div>      \r\n                    <img src=\"./assets/img/Assets/Captall_logo_w.png\" style=\"width:70%;\"/>\r\n            </div>\r\n            <div ><p class=\"mt-2\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p></div>\r\n         <div><span style=\"top: 1572px;\r\n          left: 251px;\r\n          width: 43px;\r\n          height: 43px;\r\n          background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;\r\n          background: #FFFFFF 0% 0% no-repeat padding-box;\r\n          opacity: 1;\"></span></div>\r\n          </div>\r\n          <div class=\"col-md-3 text-left\">\r\n            <h4>Legal</h4>\r\n            <p>Terms and Conditions</p>\r\n            <p>Privacy Policy</p>\r\n            <p>Help & Support</p>\r\n\r\n          </div>\r\n          <div class=\"col-md-3 text-left\">\r\n            <h4>Our Company</h4>\r\n            <p>About us</p>\r\n            <p>Code of Conduct</p>\r\n            <p>Sitemap</p>\r\n\r\n          </div>\r\n          <div class=\"col-md-3 text-left\">\r\n            <h4>Contact</h4>\r\n            <p>+44-123-456-7890</p>\r\n            <p>Privacy Policy</p>\r\n            <p>+44-123-456-7890</p>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n    </footer>\r\n  </div>\r\n </div>\r\n";

/***/ }),

/***/ 70276:
/*!***********************************************************************!*\
  !*** ./src/app/pages/SignUpwith/SignUpwith.component.html?ngResource ***!
  \***********************************************************************/
/***/ (function(module) {

module.exports = "\r\n\r\n\r\n<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header register-page header-filter\" filter-color=\"black\" style=\"background-color:#f6f7f8; background-size: cover; background-position: top center;\">\r\n    <div class=\"container mt-0\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-4 col-md-8 col-sm-9 mt-0 ml-auto mr-auto\">\r\n          <div class=\"card card-signup mb-5\" >\r\n            \r\n            <h3 class=\"text-center\" style=\"text-align: left;letter-spacing: 0px;color: #000000;opacity: 1;\">Welcome to <b>CAPTall</b></h3>\r\n            <p class=\"text-center mb-0\" *ngIf=\"step==1\">\r\n           This is secure website <br> please enter your username and password to login</p>\r\n           <p class=\"text-center mb-0\" *ngIf=\"step==1\">\r\n            <b> Signup yourself using</b>\r\n            </p>\r\n            <div class=\"card-body mt-0 pt-0\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 ml-auto mr-auto\">\r\n                  \r\n                  <form class=\"form\"  [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"step==1\">\r\n                      <div class=\"input-group\">\r\n                        <button class=\"btn btn-default text-center btn-block\">Google</button>\r\n                      </div>\r\n                    <div class=\"form-group text-center\">  - - - - - - - - - - - OR - - - - - - - - - - - -</div>\r\n                      <div class=\"input-group\">\r\n                        <a class=\"btn btn-success text-center btn-block\" [routerLink]=\"['/pages/signup']\">Signup with Mobile Number</a>\r\n                      </div>\r\n                    \r\n                    <div class=\"text-center\"> \r\n                     <label>Already have an account?</label> <a class=\"forgotpassword\" [routerLink]=\"['/pages/login']\">SignIn</a>\r\n\r\n                    </div>\r\n                    <div class=\"text-left\">\r\n                           <p class=\"mb-0 pb-0\">By continuing, you agree to <b>CAPTall's Terms & Conditions and Privacy </b> Policy and allow <b>CAPTall</b> to send sms and email to communicate with you</p>\r\n                    </div>\r\n                   \r\n                  </form>\r\n\r\n                 \r\n                </div>\r\n               \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <footer class=\"footer \" style=\"background-color: #000000!important;\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3 text-left\">\r\n            <div>      \r\n                    <img src=\"./assets/img/Assets/Captall_logo_w.png\" style=\"width:70%;\"/>\r\n            </div>\r\n            <div ><p class=\"mt-2\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p></div>\r\n         <div><span style=\"top: 1572px;\r\n          left: 251px;\r\n          width: 43px;\r\n          height: 43px;\r\n          background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;\r\n          background: #FFFFFF 0% 0% no-repeat padding-box;\r\n          opacity: 1;\"></span></div>\r\n          </div>\r\n          <div class=\"col-md-3 text-left\">\r\n            <h4>Legal</h4>\r\n            <p>Terms and Conditions</p>\r\n            <p>Privacy Policy</p>\r\n            <p>Help & Support</p>\r\n\r\n          </div>\r\n          <div class=\"col-md-3 text-left\">\r\n            <h4>Our Company</h4>\r\n            <p>About us</p>\r\n            <p>Code of Conduct</p>\r\n            <p>Sitemap</p>\r\n\r\n          </div>\r\n          <div class=\"col-md-3 text-left\">\r\n            <h4>Contact</h4>\r\n            <p>+44-123-456-7890</p>\r\n            <p>Privacy Policy</p>\r\n            <p>+44-123-456-7890</p>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n    </footer>\r\n  </div>\r\n </div>\r\n";

/***/ }),

/***/ 48583:
/*!*************************************************************!*\
  !*** ./src/app/pages/login/login.component.html?ngResource ***!
  \*************************************************************/
/***/ (function(module) {

module.exports = "\r\n<style>\r\n  .form-group{\r\n    padding: 0px;\r\n    border: 1px solid #9da5ad;\r\n    border-radius: 5px;\r\n    margin: 10px !important;\r\n}\r\n.form-group>label{\r\n  position: absolute;\r\n    top: -10px;\r\n    left: 20px;\r\n    color: black;\r\n  background-color:white;\r\n}\r\n\r\n.form-group>input{\r\n  border:none;\r\n  background-image: none;\r\n  padding-left: 20px;\r\n}\r\n.mat-button.btn.btn-success, .mat-raised-button.btn.btn-success, .mat-raised-button.btn:not([class*=mat-elevation-z]).btn-success, .btn.btn-success {\r\n    color: #fff;\r\n    background-color: #ff6438;\r\n    border-color: #ff6438;\r\n    box-shadow: 0 2px 2px 0 rgb(51 102 1 / 14%), 0 3px 1px -2px rgb(51 102 1 / 20%), 0 1px 5px 0 rgb(51 102 1 / 12%);\r\n}\r\n</style>\r\n\r\n<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header register-page header-filter\" filter-color=\"black\" style=\"background-color:#f6f7f8; background-size: cover; background-position: top center;\">\r\n    <div class=\"container mt-0\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-4 col-md-8 col-sm-9 mt-0 ml-auto mr-auto\">\r\n          <div class=\"card card-signup mb-5\" >\r\n            \r\n            <h3 class=\"text-center\" style=\"text-align: left;letter-spacing: 0px;color: #000000;opacity: 1;\"> <b>Admin Login</b></h3>\r\n            <p class=\"text-center mb-0\" >\r\n            Please enter Login details </p>\r\n           \r\n            <div class=\"card-body  \">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 ml-auto mr-auto\">\r\n                  \r\n                  <form class=\"form\"  [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"step==1\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-12\">\r\n                        <div *ngIf=\"error\" class=\"alert alert-danger\">\r\n                          {{error}}\r\n                          <a (click)=\"error=''\" class=\"close float-right\" href=\"javascript:void(0)\">x</a>\r\n      \r\n                        </div>\r\n                      </div>\r\n                    </div> \r\n                    <div class=\"row\">\r\n                        <div class=\"col-12 \">\r\n                          <div class=\"form-group\">\r\n                            <label>Email </label>\r\n                            <input type=\"text\" placeholder=\"Enter Email\" formControlName=\"Email\" class=\"form-control input-lg\" />\r\n                       </div>\r\n                        </div>\r\n                        <div class=\"col-12 mt-3\">\r\n                          <div class=\"form-group\">\r\n                            <label>Password</label>\r\n                            <input type=\"password\" placeholder=\"Enter Password\" formControlName=\"Password\" class=\"form-control input-lg\" />\r\n                       </div>\r\n                        </div>\r\n                    \r\n                        <div class=\"col-12\">\r\n                          <button class=\"btn btn-success text-center btn-block\">Login</button>\r\n\r\n                        </div>\r\n                       \r\n                      </div>\r\n                    \r\n                   \r\n                  </form>\r\n\r\n                 \r\n                </div>\r\n               \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n  </div>\r\n </div>\r\n";

/***/ }),

/***/ 59434:
/*!*******************************************************************!*\
  !*** ./src/app/pages/register/register.component.html?ngResource ***!
  \*******************************************************************/
/***/ (function(module) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header lock-page header-filter\" style=\"background-image: url('./assets/img/lock.jpg'); background-size: cover; background-position: top center;\">\r\n    <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4 ml-auto mr-auto\">\r\n          <div class=\"card card-profile text-center card-hidden\">\r\n            <div class=\"card-header \">\r\n              <div class=\"card-avatar\">\r\n                <a href=\"#pablo\">\r\n                  <img class=\"img\" src=\"./assets/img/faces/avatar.jpg\">\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body \">\r\n              <h4 class=\"card-title\">Tania Andrew</h4>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Enter Password\" type=\"password\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"card-footer justify-content-center\">\r\n              <a href=\"#pablo\" class=\"btn btn-rose btn-round\">Unlock</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <footer class=\"footer \">\r\n    <div class=\"container\">\r\n      <nav class=\"pull-left\">\r\n        <ul>\r\n          <li>\r\n            <a href=\"https://www.creative-tim.com\">\r\n              Creative Tim\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"https://creative-tim.com/about-us\">\r\n              About Us\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"http://blog.creative-tim.com\">\r\n              Blog\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"https://www.creative-tim.com/license\">\r\n              Licenses\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n      <div class=\"copyright pull-right\">\r\n        &copy;\r\n          {{test | date: 'yyyy'}}, made with <i class=\"material-icons\">favorite</i> by\r\n        <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a> for a better web.\r\n      </div>\r\n    </div>\r\n  </footer>\r\n</div>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pages_module_ts.js.map