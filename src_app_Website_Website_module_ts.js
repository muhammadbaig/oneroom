"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["src_app_Website_Website_module_ts"],{

/***/ 36788:
/*!**********************************************************!*\
  !*** ./src/app/Admin/layouts/footer/footer.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer2Component": function() { return /* binding */ Footer2Component; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.html?ngResource */ 96365);
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




var Footer2Component = /*#__PURE__*/function () {
  function Footer2Component() {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Footer2Component);

    this.test = new Date();
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Footer2Component, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return Footer2Component;
}();

Footer2Component.ctorParameters = function () {
  return [];
};

Footer2Component = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-footer-web',
  template: _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], Footer2Component);


/***/ }),

/***/ 53299:
/*!****************************************************************!*\
  !*** ./src/app/Website/BlogsDetails/BlogsDetails.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogsDetailsComponent": function() { return /* binding */ BlogsDetailsComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _BlogsDetails_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlogsDetails.component.html?ngResource */ 79945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 73903);
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









var BlogsDetailsComponent = /*#__PURE__*/function () {
  function BlogsDetailsComponent(cdf, _formBuilder, routers, router, dataService) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BlogsDetailsComponent);

    this.cdf = cdf;
    this._formBuilder = _formBuilder;
    this.routers = routers;
    this.router = router;
    this.dataService = dataService;
    this.test = new Date();
    this.reply = 0;
    this.sub = null;
    this.id = null;
    this.showAlert = false;
    this.errorMessage = null;
    this.details = null;
    this.moment = moment__WEBPACK_IMPORTED_MODULE_3__;
    this.tags = null;
    this.blogs = null;
    this.user_id = null;
    this.commentsLength = null;
    this.comments = null;
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(BlogsDetailsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      if (localStorage.getItem('id')) {
        this.user_id = localStorage.getItem('id');
      }

      this.sub = this.routers.params.subscribe(function (params) {
        _this.id = params['id'];
      });
      this.getDetails(this.id);
      this.getComments(this.id);
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('lock-page');
      body.classList.add('off-canvas-sidebar');
      var card = document.getElementsByClassName('card')[0];
      setTimeout(function () {// after 1000 ms we add the class animated to the login/register card
        // card.classList.remove('card-hidden');
      }, 700);
      this.subscribeForm = this._formBuilder.group({
        email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]
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
    key: "subscribe",
    value: function subscribe() {
      var _this2 = this;

      this.showAlert = false;

      if (this.subscribeForm.invalid) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
          position: 'center',
          icon: 'error',
          text: 'Please Fill All Required Fields With Correct Format',
          showConfirmButton: false,
          timer: 2500
        });
        this.cdf.detectChanges();
        return;
      }

      var formData = this.subscribeForm.getRawValue();
      var data = {
        email: formData.email
      };
      this.dataService.post('newsletter', data).then(function (result) {
        if (result.success == true) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
            position: 'center',
            icon: 'success',
            title: 'Success',
            showConfirmButton: false,
            timer: 2500
          });

          _this2.subscribeForm.controls['email'].setValue(null);

          _this2.cdf.detectChanges();
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
            position: 'center',
            icon: 'error',
            text: result.error.message,
            showConfirmButton: false,
            timer: 2500
          });

          _this2.cdf.detectChanges();
        }

        _this2.cdf.detectChanges();
      }, function (error) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
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
    key: "getDetails",
    value: function getDetails(id) {
      var _this3 = this;

      var data = {
        id: id
      };
      this.dataService.post('get-blogs-by-id', data).then(function (result) {
        _this3.details = result.data;

        _this3.cdf.detectChanges();

        if (_this3.details.tags) {
          _this3.tags = _this3.details.tags.split(",");
        }

        _this3.cdf.detectChanges();

        var data = {
          id: _this3.details.blog_category.id
        };

        _this3.dataService.post('getBlogsByCategoryId', data).then(function (result) {
          _this3.blogs = result.data;
          _this3.blogs = _this3.blogs.slice(0, 4);

          _this3.cdf.detectChanges();
        });
      });
    }
  }, {
    key: "getBlogDetails",
    value: function getBlogDetails(id) {
      this.router.navigate(['Website/blogsdetails', id]);
    }
  }, {
    key: "postComment",
    value: function postComment(id) {
      var _this4 = this;

      if ($('#comment').val() == null || $('#comment').val() == '') {
        return;
      }

      var data = {
        user_id: this.user_id,
        blog_id: id,
        comment: $('#comment').val()
      };
      this.dataService.post('comment/store', data).then(function (result) {
        _this4.getComments(id);

        _this4.cdf.detectChanges();
      });
    }
  }, {
    key: "replyToComment",
    value: function replyToComment(blog_id, comment_id) {
      var _this5 = this;

      if ($('#reply').val() == null || $('#reply').val() == '') {
        return;
      }

      var data = {
        user_id: this.user_id,
        comment_id: comment_id,
        comment: $('#reply').val()
      };
      this.dataService.post('reply/store', data).then(function (result) {
        _this5.reply = 0;

        _this5.getComments(blog_id);

        _this5.cdf.detectChanges();
      });
    }
  }, {
    key: "getComments",
    value: function getComments(id) {
      var _this6 = this;

      var data = {
        id: id
      };
      this.dataService.post('comment', data).then(function (result) {
        _this6.comments = result.data;
        _this6.commentsLength = _this6.comments.length;
      });
    }
  }]);

  return BlogsDetailsComponent;
}();

BlogsDetailsComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
  }, {
    type: src_app_services_data_services__WEBPACK_IMPORTED_MODULE_4__.DataService
  }];
};

BlogsDetailsComponent.propDecorators = {
  subscribeNgForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: ['subscribeNgForm']
  }]
};
BlogsDetailsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-BlogsDetails-cmp',
  template: _BlogsDetails_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], BlogsDetailsComponent);


/***/ }),

/***/ 62892:
/*!**************************************************!*\
  !*** ./src/app/Website/Blogs/Blogs.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogsComponent": function() { return /* binding */ BlogsComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _Blogs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Blogs.component.html?ngResource */ 99134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 73903);
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









var BlogsComponent = /*#__PURE__*/function () {
  function BlogsComponent(router, cdf, _formBuilder, dataService) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BlogsComponent);

    this.router = router;
    this.cdf = cdf;
    this._formBuilder = _formBuilder;
    this.dataService = dataService;
    this.test = new Date();
    this.showAlert = false;
    this.errorMessage = null;
    this.categories = null;
    this.activeCategoryState = 0;
    this.blogs = null;
    this.moment = moment__WEBPACK_IMPORTED_MODULE_3__;
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(BlogsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      var body = document.getElementsByTagName('body')[0];
      body.classList.add('lock-page');
      body.classList.add('off-canvas-sidebar');
      var card = document.getElementsByClassName('card')[0];
      setTimeout(function () {// after 1000 ms we add the class animated to the login/register card
        // card.classList.remove('card-hidden');
      }, 700);
      this.subscribeForm = this._formBuilder.group({
        email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]
      });
      this.dataService.get('get-blog-category').then(function (result) {
        _this.categories = result.data;

        if (_this.categories.length != 0 || _this.categories != []) {
          var data = {
            id: _this.categories[0].id
          };

          _this.dataService.post('getBlogsByCategoryId', data).then(function (result) {
            _this.blogs = result.data;
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
    key: "subscribe",
    value: function subscribe() {
      var _this2 = this;

      this.showAlert = false;

      if (this.subscribeForm.invalid) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
          position: 'center',
          icon: 'error',
          text: 'Please Fill All Required Fields With Correct Format',
          showConfirmButton: false,
          timer: 2500
        });
        this.cdf.detectChanges();
        return;
      }

      var formData = this.subscribeForm.getRawValue();
      var data = {
        email: formData.email
      };
      this.dataService.post('newsletter', data).then(function (result) {
        if (result.success == true) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
            position: 'center',
            icon: 'success',
            title: 'Success',
            showConfirmButton: false,
            timer: 2500
          });

          _this2.subscribeForm.controls['email'].setValue(null);

          _this2.cdf.detectChanges();
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
            position: 'center',
            icon: 'error',
            text: result.error.message,
            showConfirmButton: false,
            timer: 2500
          });

          _this2.cdf.detectChanges();
        }

        _this2.cdf.detectChanges();
      }, function (error) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
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
    key: "getBlogs",
    value: function getBlogs(index, id) {
      var _this3 = this;

      this.activeCategoryState = index;
      this.cdf.detectChanges();
      var data = {
        id: id
      };
      this.dataService.post('getBlogsByCategoryId', data).then(function (result) {
        _this3.blogs = result.data;

        _this3.cdf.detectChanges();
      });
    }
  }, {
    key: "getBlogDetails",
    value: function getBlogDetails(id) {
      this.router.navigate(['Website/blogsdetails', id]);
    }
  }]);

  return BlogsComponent;
}();

BlogsComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
  }, {
    type: src_app_services_data_services__WEBPACK_IMPORTED_MODULE_4__.DataService
  }];
};

BlogsComponent.propDecorators = {
  subscribeNgForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
    args: ['subscribeNgForm']
  }]
};
BlogsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-Blogs-cmp',
  template: _Blogs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], BlogsComponent);


/***/ }),

/***/ 39620:
/*!**********************************************************!*\
  !*** ./src/app/Website/ContactUs/ContactUs.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsComponent": function() { return /* binding */ ContactUsComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _ContactUs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContactUs.component.html?ngResource */ 63497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 73903);
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








var ContactUsComponent = /*#__PURE__*/function () {
  function ContactUsComponent(router, cdf, _formBuilder, dataService) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ContactUsComponent);

    this.router = router;
    this.cdf = cdf;
    this._formBuilder = _formBuilder;
    this.dataService = dataService;
    this.test = new Date();
    this.showFailAlert = false;
    this.errorMessage = '';
    this.showSuccessAlert = false;
    this.successMessage = '';
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ContactUsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('lock-page');
      body.classList.add('off-canvas-sidebar');
      var card = document.getElementsByClassName('card')[0];
      setTimeout(function () {// after 1000 ms we add the class animated to the login/register card
        // card.classList.remove('card-hidden');
      }, 700);
      this.contactForm = this._formBuilder.group({
        full_name: null,
        email: null,
        phone_no: null,
        subject: null,
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
    key: "contact",
    value: function contact() {
      var _this = this;

      this.showFailAlert = false;
      this.showSuccessAlert = false;
      this.cdf.detectChanges();

      for (var el in this.contactForm.controls) {
        if (this.contactForm.controls[el].errors) {
          console.log(el);
        }
      }

      alert;

      if (this.contactForm.invalid) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
          position: 'center',
          icon: 'error',
          text: 'Please Fill All Required Fields With Correct Format',
          showConfirmButton: false,
          timer: 2500
        });
        this.cdf.detectChanges();
        return;
      }

      var formData = this.contactForm.getRawValue();
      var data = {
        full_name: formData.full_name,
        email: formData.email,
        phone_no: formData.phone_no,
        subject: formData.subject,
        message: formData.message
      };
      this.dataService.adminpost("contactus/store", data).then(function (data) {
        console.log(data);

        if (data.success == true) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            position: 'center',
            icon: 'success',
            text: data.message,
            showConfirmButton: false,
            timer: 2500
          });

          _this.cdf.detectChanges();
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            position: 'center',
            icon: 'error',
            text: data.message,
            showConfirmButton: false,
            timer: 2500
          });

          _this.cdf.detectChanges();
        }
      }, function (er) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
          position: 'center',
          icon: 'error',
          text: data.message,
          showConfirmButton: false,
          timer: 2500
        });

        _this.cdf.detectChanges();
      });
    }
  }]);

  return ContactUsComponent;
}();

ContactUsComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
  }, {
    type: src_app_services_data_services__WEBPACK_IMPORTED_MODULE_3__.DataService
  }];
};

ContactUsComponent.propDecorators = {
  contactNgForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
    args: ['contactNgForm']
  }]
};
ContactUsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-ContactUs-cmp',
  template: _ContactUs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], ContactUsComponent);


/***/ }),

/***/ 76024:
/*!****************************************************************************!*\
  !*** ./src/app/Website/Contentnotprovided/Contentnotprovided.component.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentnotprovidedComponent": function() { return /* binding */ ContentnotprovidedComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _contentnotprovided_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contentnotprovided.component.html?ngResource */ 48819);
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




var ContentnotprovidedComponent = /*#__PURE__*/function () {
  function ContentnotprovidedComponent() {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ContentnotprovidedComponent);

    this.test = new Date();
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ContentnotprovidedComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
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

  return ContentnotprovidedComponent;
}();

ContentnotprovidedComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-contentnotprovided-cmp',
  template: _contentnotprovided_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], ContentnotprovidedComponent);


/***/ }),

/***/ 9129:
/*!************************************************!*\
  !*** ./src/app/Website/Faqs/faqs.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FAQsComponent": function() { return /* binding */ FAQsComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _faqs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faqs.component.html?ngResource */ 91191);
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






var FAQsComponent = /*#__PURE__*/function () {
  function FAQsComponent(router, cdf, dataService) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FAQsComponent);

    this.router = router;
    this.cdf = cdf;
    this.dataService = dataService;
    this.test = new Date();
    this.faqsList = [];
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(FAQsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      var body = document.getElementsByTagName('body')[0];
      body.classList.add('lock-page');
      body.classList.add('off-canvas-sidebar');
      var card = document.getElementsByClassName('card')[0];
      setTimeout(function () {// after 1000 ms we add the class animated to the login/register card
        // card.classList.remove('card-hidden');
      }, 700);
      this.dataService.get('get-faq').then(function (result) {
        _this.faqsList = result.data;
        _this.faqsList = _this.faqsList.slice(0, 4);
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
    key: "changehost",
    value: function changehost(val) {
      if (val == 1) {
        $('#host').removeClass("btn-default bg-white text-dark");
        $('#host').addClass("btn-danger");
        $('#guest').removeClass("btn-danger");
        $('#guest').addClass("btn-default bg-white text-dark");
      } else {
        $('#guest').removeClass("btn-default bg-white text-dark");
        $('#guest').addClass("btn-danger");
        $('#host').removeClass("btn-danger");
        $('#host').addClass("btn-default bg-white text-dark");
      }
    }
  }]);

  return FAQsComponent;
}();

FAQsComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef
  }, {
    type: src_app_services_data_services__WEBPACK_IMPORTED_MODULE_3__.DataService
  }];
};

FAQsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-Web-FAQ',
  template: _faqs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], FAQsComponent);


/***/ }),

/***/ 64771:
/*!************************************************!*\
  !*** ./src/app/Website/Home/Home.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": function() { return /* binding */ HomeComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _Home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.component.html?ngResource */ 5508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var src_app_services_data_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/data.services */ 7619);
/* harmony import */ var _i18n_en__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../i18n/en */ 45106);
/* harmony import */ var _i18n_fr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../i18n/fr */ 72255);
/* harmony import */ var _i18n_gr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../i18n/gr */ 27020);
/* harmony import */ var _i18n_it__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../i18n/it */ 53736);
/* harmony import */ var _i18n_sp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../i18n/sp */ 25768);
/* harmony import */ var _i18n_ch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../i18n/ch */ 79713);
/* harmony import */ var _translation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../translation.service */ 52240);



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
  function HomeComponent(router, dataService, translationService) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomeComponent);

    this.router = router;
    this.dataService = dataService;
    this.translationService = translationService;
    this.test = new Date();
    this.faqsList = [];
    this.faqLength = 0;
    this.chekfaq = 2;
    this.translationService.addTranslation(_i18n_en__WEBPACK_IMPORTED_MODULE_4__.locale, _i18n_fr__WEBPACK_IMPORTED_MODULE_5__.locale, _i18n_gr__WEBPACK_IMPORTED_MODULE_6__.locale, _i18n_it__WEBPACK_IMPORTED_MODULE_7__.locale, _i18n_sp__WEBPACK_IMPORTED_MODULE_8__.locale, _i18n_ch__WEBPACK_IMPORTED_MODULE_9__.locale);
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(HomeComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      var body = document.getElementsByTagName('body')[0];
      body.classList.add('lock-page');
      body.classList.add('off-canvas-sidebar');
      var card = document.getElementsByClassName('card')[0];
      setTimeout(function () {// after 1000 ms we add the class animated to the login/register card
        // card.classList.remove('card-hidden');
      }, 700);
      this.dataService.get('faq-list').then(function (result) {
        console.log(result);
        _this.faqsList = result.data;
        _this.faqLength = _this.faqsList.length; // this.faqsList = this.faqsList.slice(0, 4);
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
    key: "changehost",
    value: function changehost(val) {
      this.chekfaq = val;

      if (val == 1) {
        $('#host').removeClass("btn-default bg-white text-dark");
        $('#host').addClass("btn-danger");
        $('#guest').removeClass("btn-danger");
        $('#guest').addClass("btn-default bg-white text-dark");
      } else {
        $('#guest').removeClass("btn-default bg-white text-dark");
        $('#guest').addClass("btn-danger");
        $('#host').removeClass("btn-danger");
        $('#host').addClass("btn-default bg-white text-dark");
      }
    }
  }]);

  return HomeComponent;
}();

HomeComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
  }, {
    type: src_app_services_data_services__WEBPACK_IMPORTED_MODULE_3__.DataService
  }, {
    type: _translation_service__WEBPACK_IMPORTED_MODULE_10__.TranslationService
  }];
};

HomeComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-Home-cmp',
  template: _Home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], HomeComponent);


/***/ }),

/***/ 81827:
/*!************************************************!*\
  !*** ./src/app/Website/Host/Host.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HostComponent": function() { return /* binding */ HostComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _Host_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Host.component.html?ngResource */ 74150);
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






var HostComponent = /*#__PURE__*/function () {
  function HostComponent(router, cdf, dataService) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HostComponent);

    this.router = router;
    this.cdf = cdf;
    this.dataService = dataService;
    this.test = new Date();
    this.faqsList = [];
    this.faqLength = 0;
    this.chekfaq = 2;
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(HostComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      var body = document.getElementsByTagName('body')[0];
      body.classList.add('lock-page');
      body.classList.add('off-canvas-sidebar');
      var card = document.getElementsByClassName('card')[0];
      setTimeout(function () {// after 1000 ms we add the class animated to the login/register card
        // card.classList.remove('card-hidden');
      }, 700);
      this.dataService.get('faq-list').then(function (result) {
        _this.faqsList = result.data;
        _this.faqLength = _this.faqsList.length; //this.faqsList = this.faqsList.slice(0, 4);
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
    key: "changehost",
    value: function changehost(val) {
      this.chekfaq = val;

      if (val == 1) {
        $('#host').removeClass("btn-default bg-white text-dark");
        $('#host').addClass("btn-danger");
        $('#guest').removeClass("btn-danger");
        $('#guest').addClass("btn-default bg-white text-dark");
      } else {
        $('#guest').removeClass("btn-default bg-white text-dark");
        $('#guest').addClass("btn-danger");
        $('#host').removeClass("btn-danger");
        $('#host').addClass("btn-default bg-white text-dark");
      }
    }
  }]);

  return HostComponent;
}();

HostComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef
  }, {
    type: src_app_services_data_services__WEBPACK_IMPORTED_MODULE_3__.DataService
  }];
};

HostComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-Host-cmp',
  template: _Host_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], HostComponent);


/***/ }),

/***/ 27526:
/*!******************************************************!*\
  !*** ./src/app/Website/Privacy/Privacy.component.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyComponent": function() { return /* binding */ PrivacyComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _Privacy_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Privacy.component.html?ngResource */ 81572);
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




var PrivacyComponent = /*#__PURE__*/function () {
  function PrivacyComponent() {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PrivacyComponent);

    this.test = new Date();
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(PrivacyComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
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

  return PrivacyComponent;
}();

PrivacyComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-Privacy-cmp',
  template: _Privacy_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], PrivacyComponent);


/***/ }),

/***/ 64450:
/*!*******************************************!*\
  !*** ./src/app/Website/Website.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": function() { return /* binding */ createTranslateLoader; },
/* harmony export */   "WebsiteModule": function() { return /* binding */ WebsiteModule; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.module */ 36747);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _Website_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Website.routing */ 87855);
/* harmony import */ var _Home_Home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Home/Home.component */ 64771);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 38457);
/* harmony import */ var _Admin_layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Admin/layouts/footer/footer.component */ 36788);
/* harmony import */ var _Host_Host_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Host/Host.component */ 81827);
/* harmony import */ var _ContactUs_ContactUs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ContactUs/ContactUs.component */ 39620);
/* harmony import */ var _Blogs_Blogs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Blogs/Blogs.component */ 62892);
/* harmony import */ var _BlogsDetails_BlogsDetails_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BlogsDetails/BlogsDetails.component */ 53299);
/* harmony import */ var _Privacy_Privacy_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Privacy/Privacy.component */ 27526);
/* harmony import */ var _Contentnotprovided_Contentnotprovided_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Contentnotprovided/Contentnotprovided.component */ 76024);
/* harmony import */ var _Faqs_faqs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Faqs/faqs.component */ 9129);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/http-loader */ 29659);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 5721);



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














function createTranslateLoader(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__.TranslateHttpLoader(http, './assets/i18n/home/', '.json');
}

var WebsiteModule = /*#__PURE__*/(0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function WebsiteModule() {
  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, WebsiteModule);
});

WebsiteModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forChild(_Website_routing__WEBPACK_IMPORTED_MODULE_3__.WebsiteRoutes), // TranslateModule.forChild({
  //   loader: {
  //     provide: TranslateLoader,
  //     useFactory: createTranslateLoader,
  //     deps: [HttpClient]
  //   },
  //   isolate: true
  // }),
  _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _app_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule],
  declarations: [_Home_Home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent, _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__.DashboardComponent, _Admin_layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.Footer2Component, _Host_Host_component__WEBPACK_IMPORTED_MODULE_7__.HostComponent, _ContactUs_ContactUs_component__WEBPACK_IMPORTED_MODULE_8__.ContactUsComponent, _Blogs_Blogs_component__WEBPACK_IMPORTED_MODULE_9__.BlogsComponent, _BlogsDetails_BlogsDetails_component__WEBPACK_IMPORTED_MODULE_10__.BlogsDetailsComponent, _Privacy_Privacy_component__WEBPACK_IMPORTED_MODULE_11__.PrivacyComponent, _Contentnotprovided_Contentnotprovided_component__WEBPACK_IMPORTED_MODULE_12__.ContentnotprovidedComponent, _Faqs_faqs_component__WEBPACK_IMPORTED_MODULE_13__.FAQsComponent]
})], WebsiteModule);


/***/ }),

/***/ 87855:
/*!********************************************!*\
  !*** ./src/app/Website/Website.routing.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebsiteRoutes": function() { return /* binding */ WebsiteRoutes; }
/* harmony export */ });
/* harmony import */ var _Home_Home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home/Home.component */ 64771);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 38457);
/* harmony import */ var _Host_Host_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Host/Host.component */ 81827);
/* harmony import */ var _ContactUs_ContactUs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContactUs/ContactUs.component */ 39620);
/* harmony import */ var _Blogs_Blogs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Blogs/Blogs.component */ 62892);
/* harmony import */ var _BlogsDetails_BlogsDetails_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BlogsDetails/BlogsDetails.component */ 53299);
/* harmony import */ var _Privacy_Privacy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Privacy/Privacy.component */ 27526);
/* harmony import */ var _Contentnotprovided_Contentnotprovided_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Contentnotprovided/Contentnotprovided.component */ 76024);
/* harmony import */ var _Faqs_faqs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Faqs/faqs.component */ 9129);









var WebsiteRoutes = [{
  path: '',
  children: [{
    path: 'home',
    component: _Home_Home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
  }]
}, {
  path: '',
  children: [{
    path: 'dashboard',
    component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent
  }]
}, {
  path: '',
  children: [{
    path: 'host',
    component: _Host_Host_component__WEBPACK_IMPORTED_MODULE_2__.HostComponent
  }]
}, {
  path: '',
  children: [{
    path: 'contactus',
    component: _ContactUs_ContactUs_component__WEBPACK_IMPORTED_MODULE_3__.ContactUsComponent
  }]
}, {
  path: '',
  children: [{
    path: 'blogs',
    component: _Blogs_Blogs_component__WEBPACK_IMPORTED_MODULE_4__.BlogsComponent
  }]
}, {
  path: '',
  children: [{
    path: 'blogsdetails/:id',
    component: _BlogsDetails_BlogsDetails_component__WEBPACK_IMPORTED_MODULE_5__.BlogsDetailsComponent
  }]
}, {
  path: '',
  children: [{
    path: 'privacy',
    component: _Privacy_Privacy_component__WEBPACK_IMPORTED_MODULE_6__.PrivacyComponent
  }]
}, {
  path: '',
  children: [{
    path: 'contentnotprovided',
    component: _Contentnotprovided_Contentnotprovided_component__WEBPACK_IMPORTED_MODULE_7__.ContentnotprovidedComponent
  }]
}, {
  path: '',
  children: [{
    path: 'faqs',
    component: _Faqs_faqs_component__WEBPACK_IMPORTED_MODULE_8__.FAQsComponent
  }]
}];

/***/ }),

/***/ 38457:
/*!**********************************************************!*\
  !*** ./src/app/Website/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": function() { return /* binding */ DashboardComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component.html?ngResource */ 33689);
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




var DashboardComponent = /*#__PURE__*/function () {
  function DashboardComponent() {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DashboardComponent);

    this.test = new Date();
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DashboardComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      if (localStorage.getItem("currentUser") == null) {
        window.location.href = "#/pages/login";
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

  return DashboardComponent;
}();

DashboardComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-dashboard-cmp',
  template: _dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], DashboardComponent);


/***/ }),

/***/ 96365:
/*!***********************************************************************!*\
  !*** ./src/app/Admin/layouts/footer/footer.component.html?ngResource ***!
  \***********************************************************************/
/***/ (function(module) {

module.exports = "<footer class=\"footer \" style=\"background-color: #FFFFFF!important; color: black;border-top: 1px solid #e5e5e5;\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2 text-left\">\r\n        <div>      \r\n           <img src=\"./assets/Icons/SVG/logo.svg\" style=\"width:90%\"/>\r\n        </div>\r\n        <div>\r\n          <p class=\"mt-2\">\r\n            Lorem Ipsum is simply dummy text of \r\n            the printing and typesetting industry. \r\n            Lorem Ipsum the industry          \r\n          </p>\r\n        \r\n          <p class=\"mt-4\"> \r\n            <a class=\"btn btn-outline btn-danger btn-round px-2 py-1 facebookbg\" target=\"_blank\" href=\"https://www.facebook.com/\"><i class=\"facebookc fa fa-facebook\" ria-hidden=\"true\"></i></a>\r\n            <a class=\"btn btn-outline btn-danger btn-round px-1 py-1 twitterbg\" target=\"_blank\" href=\"https://twitter.com/\"><i class=\"twitterc fa fa-twitter\"  aria-hidden=\"true\"></i></a>\r\n            <a class=\"btn btn-outline btn-danger btn-round px-1 py-1 instagrambg\" target=\"_blank\" href=\"https://www.instagram.com/\"><i class=\"instagramc fa fa-instagram\"  aria-hidden=\"true\"></i></a>\r\n          </p>\r\n          <p>© 2021 OneRooms, Inc.</p>\r\n        </div>\r\n        <div>\r\n          <span style=\"top: 1572px;left: 251px; width: 43px; height: 43px;background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;background: #FFFFFF 0% 0% no-repeat padding-box;opacity: 1;\"></span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-1\"></div>\r\n      <div class=\"col-md-3 text-left\">\r\n        <h4 class=\"font-weight-bolder\" ><b>  {{'trans.about_us' | translate}}</b></h4>\r\n        <p class=\"mt-3 mb-2\"><a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.How_oneRooms_works' | translate}} </a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Careers' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Newsroom' | translate}}</a></p>\r\n        <p class=\"mb-2\" ><a href=\"\" class=\"text-dark\"> {{'trans.about_us' | translate}}</a> </p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/blog\" class=\"text-dark\"> {{'trans.Latest_Blog' | translate}}</a></p>\r\n      </div>\r\n      <div class=\"col-md-3 text-left\">\r\n        <h4 class=\"font-weight-bolder\"><b> {{'trans.Host' | translate}} </b> </h4>\r\n        <p class=\"mt-3 mb-2\"> <a href=\"#/Website/host\" class=\"text-dark\"> {{'trans.Host_your_offer' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Responsible_Hosting' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\">{{'trans.Resource_Centre' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\">{{'trans.Community_centre' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Dedicated_support_system' | translate}}</a></p>\r\n       </div>\r\n      <div class=\"col-md-3 text-left\">\r\n        <h4 class=\"font-weight-bolder\">\r\n          <b> {{'trans.Support' | translate}}</b>\r\n        </h4>\r\n        <p class=\"mt-3 mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Our_covid_19_Response' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Help_center' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\">{{'trans.Cancellation_options' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Neighbourhood_Support' | translate}}</a></p>\r\n        <p class=\"mb-2\"> <a href=\"#/Website/contentnotprovided\" class=\"text-dark\"> {{'trans.Trust_Safety' | translate}}</a></p>\r\n      </div>\r\n    </div>\r\n  </div> \r\n</footer>\r\n<div class=\"container-fluid\" style=\"background-color: #FFFFFF!important; color: black;border-top: 1px solid #e5e5e5;\">\r\n  <div class=\"container\" style=\"    padding-top: 4.5vh !important;padding-bottom: 4.5vh;\">\r\n    <div class=\"col-12 pl-0\">\r\n      <div class=\"list-inline\">\r\n        <a href=\"#\" class=\"list-inline-item text-dark\" [routerLink]=\"['/Website/privacy']\"><small> {{'trans.Terms_of_use' | translate}} </small></a>\r\n        <a href=\"#\" class=\"list-inline-item text-dark px-3\" [routerLink]=\"['/Website/privacy']\"><small> {{'trans.Privacy_portal' | translate}}</small> </a>\r\n        <!-- <a href=\"#\" class=\"list-inline-item text-dark\" [routerLink]=\"['/Website/privacy']\"><small> {{'trans.Cookie_preference' | translate}}</small></a> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 79945:
/*!*****************************************************************************!*\
  !*** ./src/app/Website/BlogsDetails/BlogsDetails.component.html?ngResource ***!
  \*****************************************************************************/
/***/ (function(module) {

module.exports = "<style>\r\n    .form-control,\r\n    .is-focused .form-control {\r\n        background-image: none;\r\n        border: 1px solid #d4d2d2;\r\n        border-radius: 5px;\r\n        padding: 23.5px;\r\n        margin-top: 5px;\r\n        background: white;\r\n    }\r\n\r\n    .input-group-append {\r\n        margin-left: -4px;\r\n    }\r\n</style>\r\n\r\n<div class=\"wrapper wrapper-full-page\">\r\n    <div class=\"page-header lock-page header-filter\" filter-color=\"black\"\r\n        style=\"background-color:#fafafa; background-size: cover; background-position: top center;\" *ngIf=\"details\">\r\n        <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\r\n        <div class=\"container\">\r\n            <div class=\"row justify-content-left mb-4\" style=\"margin-top: 10vh;\">\r\n                <div class=\"col-12 text-center\">\r\n                    <p>{{ details.experience }} / <span class=\"text-danger\">{{ details.blog_category.name }}</span> </p>\r\n                </div>\r\n                <div class=\"col-md-2\"></div>\r\n                <div class=\"col-md-8 text-center \">\r\n                    <h2 class=\"\">\r\n                        <b>\r\n                            {{ details.title }}\r\n                        </b>\r\n                    </h2>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <img src=\"https://oneroom3.crosip.com/{{ details.image1 }}\" class=\"img-fluid rounded\" />\r\n                </div>\r\n                <div class=\"col-12\">\r\n                    <div class=\"row justify-content-center\">\r\n                        <div class=\"col-md-9\">\r\n                            <div class=\"row \">\r\n                                <div class=\"col-md-6 \">\r\n                                    <p class=\"mt-4\">\r\n                                        <a class=\"btn btn-outline btn-danger btn-round px-2 py-2\"\r\n                                            *ngIf=\"details.facebook_link\" href=\"{{ details.facebook_link }}\"><i\r\n                                                class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\r\n                                        <a class=\"btn btn-outline btn-danger btn-round px-2 py-2\"\r\n                                            *ngIf=\"details.twitter_link\" href=\"{{ details.twitter_link }}\"><i\r\n                                                class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\r\n                                        <a class=\"btn btn-outline btn-danger btn-round px-2 py-2\"\r\n                                            *ngIf=\"details.instagram_link\" href=\"{{ details.instagram_link }}\"><i\r\n                                                class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a>\r\n                                        <a class=\"btn btn-outline btn-danger btn-round px-2 py-2\"\r\n                                            *ngIf=\"details.others_link\" href=\"{{ details.others_link }}\"><i\r\n                                                class=\"fa fa-link\" aria-hidden=\"true\"></i></a>\r\n                                    </p>\r\n                                </div>\r\n                                <div class=\"col-md-6 mt-4 pt-2\">\r\n                                    <span>• By OneRooms</span> <span class=\"ml-4 pl-4\">•\r\n                                        {{moment(details.created_at).format('MMM Do, YYYY')}}</span> <span hidden>•\r\n                                        7 min read</span>\r\n                                </div>\r\n                                <div class=\"col-12 mt-4\">\r\n                                    <p *ngIf=\"details.paragraph1\">\r\n                                        {{ details.paragraph1 }}\r\n                                    </p><br>\r\n                                    <p *ngIf=\"details.paragraph2\">\r\n                                        {{ details.paragraph2 }}\r\n                                    </p><br>\r\n                                    <p *ngIf=\"details.paragraph3\">\r\n                                        {{ details.paragraph3 }}\r\n                                    </p><br>\r\n                                </div>\r\n                                <div class=\"col-12 mt-4\">\r\n                                    <h3 *ngIf=\"details.heading1\"><b>{{ details.heading1 }}</b></h3>\r\n\r\n                                    <p *ngIf=\"details.paragraph4\">\r\n                                        {{ details.paragraph4 }}\r\n                                    </p><br>\r\n                                    <p *ngIf=\"details.paragraph5\">\r\n                                        {{ details.paragraph5 }}\r\n                                    </p><br>\r\n                                    <p *ngIf=\"details.paragraph6\">\r\n                                        {{ details.paragraph6 }}\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-12 mt-4\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-5\">\r\n                                    <img src=\"https://oneroom3.crosip.com/{{ details.image2 }}\"\r\n                                        class=\"w-100 img-fluid rounded\" />\r\n                                </div>\r\n                                <div class=\"col-md-5\">\r\n                                    <p *ngIf=\"details.paragraph7\">\r\n                                        {{ details.paragraph7 }}\r\n                                    </p><br>\r\n                                    <p *ngIf=\"details.paragraph8\">\r\n                                        {{ details.paragraph8 }}\r\n                                    </p><br>\r\n                                    <p *ngIf=\"details.paragraph9\">\r\n                                        {{ details.paragraph9 }}\r\n                                    </p>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-9\">\r\n                            <div class=\"row \">\r\n                                <div class=\"col-12 mt-4\">\r\n                                    <p *ngIf=\"details.paragraph10\">\r\n                                        {{ details.paragraph10 }}\r\n                                    </p><br>\r\n                                    <p *ngIf=\"details.paragraph11\">\r\n                                        {{ details.paragraph11 }}\r\n                                    </p><br>\r\n                                    <p *ngIf=\"details.paragraph12\">\r\n                                        {{ details.paragraph12 }}\r\n                                    </p><br>\r\n                                </div>\r\n                                <div class=\"col-12 mt-4\">\r\n                                    <div style=\"border-left: 3px solid rgb(110, 99, 99);\">\r\n                                        <h3 *ngIf=\"details.quotation\"><b>{{ details.quotation }}</b></h3>\r\n                                        <h5 class=\"px-2\" hidden>Jorge Figueroa, President of CACORE</h5>\r\n                                    </div><br>\r\n                                    <p *ngIf=\"details.paragraph13\">\r\n                                        {{ details.paragraph13 }}\r\n                                    </p><br>\r\n                                    <p *ngIf=\"details.paragraph14\">\r\n                                        {{ details.paragraph14 }}\r\n                                    </p><br>\r\n                                    <img src=\"./assets/Images/Blog details_01.png\" class=\"img-fluid rounded\" />\r\n\r\n                                </div>\r\n                                <div class=\"col-12 mt-3\">\r\n\r\n                                    <h3 class=\"p-3\" *ngIf=\"details.heading2\">{{ details.heading2 }}</h3>\r\n                                    <p *ngIf=\"details.paragraph15\">\r\n                                        {{ details.paragraph15 }}\r\n                                    </p><br>\r\n                                </div>\r\n                                <div class=\"col-12 text-left\">\r\n                                    <ul class=\"nav pb-3 nav-pills nav-pills-danger justify-content-left\" role=\"tablist\"\r\n                                        *ngIf=\"tags\">\r\n                                        <span class=\"mr-2\"><b>Tags</b></span>\r\n                                        <li class=\"nav-item\" *ngFor=\"let tag of tags\">\r\n                                            <a class=\"nav-link  px-3 py-1 bg-white\" style=\"min-width:50px !important;\"\r\n                                                data-toggle=\"tab\" href=\"#link1\" role=\"tablist\">\r\n                                                {{ tag }}\r\n                                            </a>\r\n                                        </li>\r\n                                    </ul>\r\n                                    <hr>\r\n                                </div>\r\n\r\n                                <div class=\"col-12\">\r\n                                    <h3 *ngIf=\"commentsLength\"><b>{{ commentsLength }} Comments</b></h3>\r\n                                    <textarea class=\"form-control\" placeholder=\"Typing Your Comment......\"\r\n                                        id=\"comment\"></textarea>\r\n                                    <button class=\"btn btn-danger rounded mt-3\" (click)=\"postComment(details.id)\">Post\r\n                                        Comment</button>\r\n                                    <hr>\r\n                                </div>\r\n                                <div class=\"col-12\" *ngIf=\"comments && user_id != null\">\r\n                                    <div class=\"row\" *ngFor=\"let comment of comments\">\r\n                                        <div class=\"col-lg-2 col-md-3\">\r\n                                            <img src=\"https://oneroom3.crosip.com/{{ comment.user.pic }}\"\r\n                                                class=\"img-fluid w-50\" style=\"border-radius: 50%;\" />\r\n                                        </div>\r\n                                        <div class=\"col-lg-10 col-md-9\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-6\">\r\n                                                    <h4><b>{{ comment.user.fname }} {{ comment.user.lname\r\n                                                            }}</b><br><span\r\n                                                            class=\"small\">{{moment(comment.updated_at).format('MMM Do,\r\n                                                            YYYY')}}</span></h4>\r\n                                                </div>\r\n                                                <div class=\"col-6 text-right\">\r\n                                                    <a href=\"javascript:void(0);\" class=\"text-danger\"\r\n                                                        (click)=\"reply=1\">Reply</a>\r\n                                                </div>\r\n                                                <div class=\"col-12\">\r\n                                                    <p>{{ comment.comment }}</p>\r\n                                                    <hr>\r\n                                                </div>\r\n                                                <div class=\"col-12\" *ngIf=\"comment.reply.length != 0\">\r\n                                                    <div class=\"row\" *ngFor=\"let r of comment.reply\">\r\n                                                        <div class=\"col-lg-2 col-md-3\">\r\n                                                            <img src=\"https://oneroom3.crosip.com/{{ r.user.pic }}\"\r\n                                                                class=\"img-fluid w-50\" style=\"border-radius: 50%;\" />\r\n                                                        </div>\r\n                                                        <div class=\"col-lg-10 col-md-9\">\r\n                                                            <div class=\"row\">\r\n\r\n                                                                <div class=\"col-6\">\r\n                                                                    <h4><b>{{ r.user.fname }} {{ r.user.lname\r\n                                                                    }}</b><br><span\r\n                                                                            class=\"small\">{{moment(r.updated_at).format('MMM\r\n                                                                            Do, YYYY')}}</span></h4>\r\n                                                                </div>\r\n                                                                <!-- <div class=\"col-6 text-right\">\r\n                                                                    <a href=\"javascript:void(0);\" class=\"text-danger\"\r\n                                                                        (click)=\"reply=2\">Reply</a>\r\n                                                                </div> -->\r\n\r\n                                                                <div class=\"col-12\">\r\n                                                                    <p>{{ r.comment }}</p>\r\n                                                                </div>\r\n                                                                <!-- <div class=\"col-2\"></div>\r\n                                                                <div class=\"col-10 text-right\" *ngIf=\"reply==2\">\r\n                                                                    <textarea class=\"form-control \"></textarea>\r\n                                                                    <button class=\"btn btn-danger py-1 px-4 mb-2\"\r\n                                                                        (click)=\"reply=0\">Post</button>\r\n                                                                </div> -->\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n\r\n                                                </div>\r\n                                                <div class=\"col-2\"></div>\r\n                                                <div class=\"col-10 text-right\" *ngIf=\"reply==1\">\r\n                                                    <textarea class=\"form-control\" id=\"reply\"></textarea>\r\n                                                    <button class=\"btn btn-danger py-1 px-4 mb-2\"\r\n                                                        (click)=\"replyToComment(comment.blog_id, comment.id)\">Post</button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <hr>\r\n                                </div>\r\n                                <div class=\"col-12 text-center\" hidden>\r\n                                    <button class=\"btn btn-danger btn-round\">More Comments</button>\r\n                                </div>\r\n                                <div class=\"col-12\" *ngIf=\"user_id == null\">\r\n                                    <div class=\"\"></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"container-fluid\">\r\n            <form [formGroup]=\"subscribeForm\" #subscribeNgForm=\"ngForm\">\r\n                <div class=\"row mt-5\">\r\n                    <div class=\"col-12 mt-5 p-5\" style=\"background-image:url('./assets/Images/Newsletter.png');\">\r\n                        <div class=\"row justify-content-center\">\r\n                            <div class=\"col-md-8\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12 mb-4\">\r\n                                        <h2 class=\"text-white mt-0 text-center\"><b> Explore more exciting\r\n                                                <br>\r\n                                                Update & Articles</b></h2>\r\n                                    </div>\r\n                                    <div class=\"col-md-2\"></div>\r\n                                    <div class=\"col-md-8\">\r\n                                        <div *ngIf=\"showAlert\"\r\n                                            style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n                                            class=\"alert alert-error\">{{ errorMessage }}</div>\r\n                                        <div class=\"input-group\">\r\n                                            <input type=\"email\" class=\"form-control\" style=\"z-index: 500 !important;\"\r\n                                                placeholder=\"Enter your email address\" [formControlName]=\"'email'\"\r\n                                                required>\r\n                                            <div class=\"input-group-append\">\r\n                                                <button class=\"btn btn-danger p-3 px-5 rounded\" type=\"button\"\r\n                                                    (click)=\"subscribe()\">\r\n                                                    SUBSCRIBE\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n\r\n        <div class=\"container\">\r\n            <div class=\"row justify-content-left mb-4 mt-2\">\r\n                <div class=\"col-12 text-center\">\r\n                    <h2 class=\"text-center\"><b>More articles for you</b></h2>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                    <div class=\"row\" *ngIf=\"blogs\">\r\n                        <div class=\"col-md-4\" *ngFor=\"let blog of blogs; let i = index;\">\r\n                            <div class=\"card\" (click)=\"getBlogDetails(blog.id)\">\r\n                                <img src=\"https://oneroom3.crosip.com/{{blog.image1}}\" class=\"img-fluid rounded\" />\r\n                                <div class=\"card-body pb-1 mb-0\">\r\n                                    <p class=\"text-danger\">{{ blog.experience }}</p>\r\n                                    <h4><b>{{ blog.title }}</b></h4>\r\n                                    <p class=\"small\">{{moment(blog.created_at).format('MMM Do, YYYY')}}</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <app-footer-web></app-footer-web>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 99134:
/*!***************************************************************!*\
  !*** ./src/app/Website/Blogs/Blogs.component.html?ngResource ***!
  \***************************************************************/
/***/ (function(module) {

module.exports = "<style>\r\n  .form-control,\r\n  .is-focused .form-control {\r\n    background-image: none;\r\n    border: 1px solid #d4d2d2;\r\n    border-radius: 5px;\r\n    padding: 23.5px;\r\n    margin-top: 5px;\r\n    background: white;\r\n  }\r\n\r\n  .input-group-append {\r\n    margin-left: -4px;\r\n  }\r\n</style>\r\n\r\n<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header lock-page header-filter\" filter-color=\"black\"\r\n    style=\"background-color:#fafafa; background-size: cover; background-position: top center;\">\r\n    <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-left mb-4\" style=\"margin-top: 10vh;\">\r\n        <div class=\"col-12 text-center\">\r\n          <ul class=\"nav nav-pills nav-pills-danger justify-content-center\" role=\"tablist\" *ngIf=\"categories\">\r\n            <li class=\"nav-item\" *ngFor = \"let category of categories; let i = index;\">\r\n              <a class=\"nav-link px-3 py-1 bg-white\" [class.active]=\"i==activeCategoryState\" style=\"min-width:50px !important;\" data-toggle=\"tab\" href=\"#link1\" (click)=\"getBlogs(i, category.id)\"\r\n                role=\"tablist\">\r\n                {{ category.name }}\r\n              </a>\r\n            </li>\r\n          </ul>\r\n          <ul class=\"nav nav-pills nav-pills-danger justify-content-center\" role=\"tablist\" *ngIf=\"!categories\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link px-3 py-1 bg-white\" style=\"min-width:50px !important;\" data-toggle=\"tab\"\r\n                role=\"tablist\">\r\n                No Category Found\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <div class=\"row\" *ngIf=\"blogs\">\r\n            <div class=\"col-md-4\" *ngFor=\"let blog of blogs; let i = index;\">\r\n              <div class=\"card\" (click)=\"getBlogDetails(blog.id)\">\r\n                <img src=\"https://oneroom3.crosip.com/{{blog.image1}}\" class=\"img-fluid rounded\"/>\r\n                <div class=\"card-body pb-1 mb-0\">\r\n                  <p class=\"text-danger\">{{ blog.experience }}</p>\r\n                  <h4><b>{{ blog.title }}</b></h4>\r\n                  <p class=\"small\">{{moment(blog.created_at).format('MMM Do, YYYY')}}</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-12 text-center\" hidden>\r\n              <button class=\"btn btn-danger bg-white btn-round text-dark py-2 px-3\"\r\n                style=\"box-shadow: none;border: 1px solid #ccc1c1;;\">More Articles</button>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\" *ngIf=\"!blogs\">\r\n            <div class=\"col-12 text-center\">\r\n              <button class=\"btn btn-danger bg-white btn-round text-dark py-2 px-3\"\r\n                style=\"box-shadow: none;border: 1px solid #ccc1c1;;\">No Blogs Found</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"container-fluid\">\r\n      <form [formGroup]=\"subscribeForm\" #subscribeNgForm=\"ngForm\" style=\"margin-bottom: 0px;\">\r\n        <div class=\"row mt-5\">\r\n          <div class=\"col-12 mt-5 p-5\" style=\"background-image:url('./assets/Images/Newsletter.png');\">\r\n            <div class=\"row justify-content-center\">\r\n              <div class=\"col-md-8\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12 mb-4\">\r\n                    <h2 class=\"text-white mt-0 text-center\"><b> {{'trans.Explore_more_exciting_updates_articles' | translate}}\r\n                        </b></h2>\r\n                  </div>\r\n                  <div class=\"col-md-2\"></div>\r\n                  <div class=\"col-md-8\">\r\n                    <div *ngIf=\"showAlert\" style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\" class=\"alert alert-error\">{{ errorMessage }}</div>\r\n                    <div class=\"input-group\">\r\n                      <input type=\"email\" class=\"form-control\" style=\"z-index: 500 !important;\" placeholder=\"Enter your email address\" [formControlName]=\"'email'\" required>\r\n                      <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-danger p-3 px-5 rounded\" type=\"button\" (click)=\"subscribe()\">\r\n                          {{'trans.subscribe' | translate}}\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <app-footer-web></app-footer-web>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 63497:
/*!***********************************************************************!*\
  !*** ./src/app/Website/ContactUs/ContactUs.component.html?ngResource ***!
  \***********************************************************************/
/***/ (function(module) {

module.exports = "<style>\r\n    .roundedimage {\r\n        background: linear-gradient(344.79deg, #ee933857 19.36%, #ee93386b 88.02%);\r\n        border-radius: 50% !important;\r\n    }\r\n\r\n    .form-control,\r\n    .is-focused .form-control {\r\n        background-image: none;\r\n        border: 1px solid #d4d2d2;\r\n        border-radius: 5px;\r\n        padding: 6px 12px;\r\n        background: white;\r\n    }\r\n\r\n    .form-check,\r\n    label {\r\n        color: #556070;\r\n    }\r\n</style>\r\n\r\n<div class=\"wrapper wrapper-full-page\">\r\n    <div class=\"page-header lock-page header-filter\" filter-color=\"black\"\r\n        style=\"background-color:#fafafa; background-size: cover; background-position: top center;\">\r\n        <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row \">\r\n                <div class=\"col-12\"\r\n                    style=\"margin-top: 11vh;background-image: url('./assets/Images/Lets talk.png'); min-height: 350px;\">\r\n                    <div class=\"row justify-content-center\">\r\n                        <div class=\"col-md-8\">\r\n                            <div class=\"container\">\r\n                                <h2 class=\"font-weight-bolder text-white\">\r\n                                    <b>{{'trans.Let_Talk' | translate}}</b>\r\n                                </h2>\r\n                                <p class=\"mt-3 text-white col-md-7 pl-0\">\r\n                                    Lorem Ipsum is simply dummy text of the printing & typesetting industry.\r\n                                    Lorem Ipsum has been the industry's standard dummy text ever since.\r\n                                    When an unknown printer took a galley of type.\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"container\">\r\n            <div class=\"row justify-content-center mb-4\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xl-4 col-lg-5 col-md-6 \" style=\"margin-top: -20vh;\">\r\n                            <div class=\"card pt-0 mt-0\" style=\"background:#f0f0f0;\">\r\n                                <div class=\"card-header\">\r\n                                    <h3> <b> <app-CustomText-web [text]=\"'Contact Info'\"> </app-CustomText-web></b></h3>\r\n                                </div>\r\n                                <div class=\"card-body\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-lg-3 col-md-4 col-3 \">\r\n                                            <img class=\"img-fluid rounded p-2 roundedimage\"\r\n                                                src=\"./assets/Icons/PNG/Contact number_Brand colr.png\">\r\n                                        </div>\r\n                                        <div class=\"col-lg-9 col-md-8 col-9\">\r\n                                            <h4><span class=\"small\">{{'trans.Call_Now' | translate}} :</span><br><span><b><a href=\"tel:(800) 111 1111\">(800) 111 1111</a> </b>\r\n                                                <!-- //325435465465657 -->\r\n                                                </span></h4>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-lg-3 col-md-4 col-3 \">\r\n                                            <img class=\"img-fluid rounded p-2 roundedimage\"\r\n                                                src=\"./assets/Icons/PNG/Chat with Host.png\">\r\n                                        </div>\r\n                                        <div class=\"col-lg-9 col-md-8 col-9\">\r\n                                            <h4><span class=\"small\"> {{'trans.Email' |translate}}:</span><br><a target=\"_blank\"\r\n                                                    href=\"https://mail.google.com/\"><b>hellow@rooms.com</b> </a></h4>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-lg-3 col-md-4 col-3 \">\r\n                                            <img class=\"img-fluid rounded p-2 roundedimage\"\r\n                                                src=\"./assets/Icons/PNG/Outline Pin_Brand color.png\">\r\n                                        </div>\r\n                                        <div class=\"col-lg-9 col-md-8 col-9\">\r\n                                            <h4><span class=\"small\">{{'trans.Location' |translate}}:</span><br><span><b>\r\n                                                        Avenue de Chillon\r\n                                         </b> </span></h4>\r\n                                        </div>\r\n\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row mb-3\">\r\n                                <div class=\"col-12\">\r\n                                    <p class=\"text-left\">\r\n                                        <a class=\"btn btn-outline btn-danger btn-round px-2 py-1 facebookbg\" target=\"_blank\"\r\n                                            href=\"https://www.facebook.com/\"><i class=\"fa fa-facebook facebookc \"\r\n                                                aria-hidden=\"true\"></i></a> &nbsp;\r\n                                        <a class=\"btn btn-outline btn-danger btn-round px-1 py-1 twitterbg\" target=\"_blank\"\r\n                                            href=\"https://twitter.com/\"><i class=\"twitterc fa fa-twitter\"\r\n                                                aria-hidden=\"true\"></i></a> &nbsp;\r\n                                        <a class=\"btn btn-outline btn-danger btn-round px-1 py-1 instagrambg\" target=\"_blank\"\r\n                                            href=\"https://www.instagram.com/\"><i class=\"instagramc  fa fa-instagram\"\r\n                                                aria-hidden=\"true\"></i></a>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-1 d-none d-xl-block\"></div>\r\n                        <div class=\"col-xl-6 col-lg-7 col-md-6\">\r\n                            <h3><b>{{'trans.Send_us_message' | translate}}</b></h3>\r\n                            <p class=\"mt-3\">Lorem Ipsum is simply dummy text of the printing and typesetting\r\n                                industry. Lorem Ipsum has been the industry.</p>\r\n                            <div *ngIf=\"showFailAlert\"\r\n                                style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n                                class=\"alert alert-error\">{{ errorMessage }}</div>\r\n                            <div *ngIf=\"showSuccessAlert\"\r\n                                style=\"background-color: #c3e6cb; border: 1px solid #d4edda; color: #155724\"\r\n                                class=\"alert alert-success\">{{ successMessage }}</div>\r\n                            <form [formGroup]=\"contactForm\" #contactNgForm=\"ngForm\">\r\n                                <div class=\"form-group\">\r\n                                    <label><b> {{'trans.Full_Name' | translate}}</b></label>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Typing Full name.....\"\r\n                                        [formControlName]=\"'full_name'\" required  title=\"Name Invalid\"/>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label><b> {{'trans.Email' | translate}}</b></label>\r\n                                    <input type=\"email\" class=\"form-control\" placeholder=\"oneroom@test.com\"\r\n                                        [formControlName]=\"'email'\" required />\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label><b> {{'trans.Phone' | translate}}</b></label>\r\n                                    <input type=\"tel\" class=\"form-control\" placeholder=\"Phone\"\r\n                                        [formControlName]=\"'phone_no'\" required  title=\"Phone Number Invalid\"/>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label><b> {{'trans.Subject' | translate}}</b></label>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Subject\"\r\n                                        [formControlName]=\"'subject'\" required />\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"font-weight-bolder\"><b> {{'trans.Message' | translate}}</b></label>\r\n                                    <textarea class=\"form-control\" rows=\"5\" placeholder=\"Typing.......\"\r\n                                        [formControlName]=\"'message'\" required></textarea>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <!-- <form [formGroup]=\"aFormGroup\">\r\n                              <ngx-recaptcha2 #captchaElem\r\n                                [siteKey]=\"siteKey\"\r\n                                (reset)=\"handleReset()\"\r\n                                (expire)=\"handleExpire()\"\r\n                                (load)=\"handleLoad()\"\r\n                                (success)=\"handleSuccess($event)\"\r\n                                [useGlobalDomain]=\"false\"\r\n                                [size]=\"size\"\r\n                                [hl]=\"lang\"\r\n                                [theme]=\"theme\"\r\n                                [type]=\"type\"\r\n                                formControlName=\"recaptcha\">\r\n                              </ngx-recaptcha2>\r\n                            </form>           -->\r\n                                </div>\r\n                                <button class=\"btn btn-danger btn-block rounded\" (click)=\"contact()\">{{'trans.send_inquiry' | translate}} </button>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <app-footer-web></app-footer-web>\r\n\r\n    </div>\r\n</div>";

/***/ }),

/***/ 48819:
/*!*****************************************************************************************!*\
  !*** ./src/app/Website/Contentnotprovided/contentnotprovided.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ (function(module) {

module.exports = "<style>\r\n\r\n  .form-control, .is-focused .form-control {\r\n      background-image: none;\r\n      border: 1px solid #d4d2d2;\r\n      border-radius: 5px;\r\n      padding: 23.5px;\r\n      margin-top: 5px;\r\n      background: white;\r\n  }\r\n</style>\r\n\r\n<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header lock-page header-filter\" filter-color=\"black\" style=\"background-color:#fafafa; background-size: cover; background-position: top center;\">\r\n      <div class=\"container\">\r\n          <div class=\"row justify-content-left mb-4\" style=\"margin-top: 20vh;\">\r\n              \r\n            <div class=\"col-12 text-center\">\r\n                <h1>Content Not Provided</h1>\r\n            </div>\r\n          </div>\r\n      </div>\r\n      <app-footer-web></app-footer-web>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 91191:
/*!*************************************************************!*\
  !*** ./src/app/Website/Faqs/faqs.component.html?ngResource ***!
  \*************************************************************/
/***/ (function(module) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\r\n    <div class=\"page-header lock-page header-filter\" filter-color=\"black\"\r\n      style=\"background-color:#fafafa; background-size: cover; background-position: top center;\">\r\n  \r\n      <div class=\"container-fluid\" style=\"background-color: #FFFFFF!important; color: black;\">\r\n        <div class=\"container\">\r\n          <div class=\"row justify-content-left\">\r\n            <div class=\"col-md-6 ml-auto mr-auto\">\r\n              <h3 class=\"ml-4\"> <b>Frequently asked questions</b></h3>\r\n            </div>\r\n            <div class=\"col-md-6\"></div>\r\n  \r\n            <div class=\"col-md-12 mt-4\" *ngIf=\"faqsList\">\r\n              <mat-accordion *ngFor=\"let faq of faqsList\">\r\n                <mat-expansion-panel class=\"matexpension mb-2 \" (opened)=\"panelOpenState = true\"\r\n                  (closed)=\"panelOpenState = false\">\r\n                  <mat-expansion-panel-header>\r\n                    <mat-panel-title class=\"expressiontitle\">\r\n                      {{ faq.questions }}\r\n                    </mat-panel-title>\r\n  \r\n                  </mat-expansion-panel-header>\r\n                  <p class=\"expansiondescription \">{{ faq.answers }}</p>\r\n                </mat-expansion-panel>\r\n              </mat-accordion>\r\n            </div>\r\n            <div class=\"col-md-12 mt-2 mb-4 text-center\" *ngIf=\"faqsLength > 3\">\r\n              <a href=\"#\" (click)=\"faqs()\">See More</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <app-footer-web></app-footer-web>\r\n    </div>\r\n  </div>";

/***/ }),

/***/ 5508:
/*!*************************************************************!*\
  !*** ./src/app/Website/Home/Home.component.html?ngResource ***!
  \*************************************************************/
/***/ (function(module) {

module.exports = "<style>\r\n  .matexpension {\r\n    border-bottom: 1px solid #e5e5e5;\r\n    box-shadow: none !important\r\n  }\r\n\r\n  .expressiontitle {\r\n    font-size: 18px;\r\n    font-family: 'ABeeZee';\r\n    line-height: 26px;\r\n    font-weight: 500;\r\n    color: #203a60;\r\n  }\r\n\r\n  .expansiondescription {\r\n    font-size: 15px;\r\n    font-family: 'ABeeZee';\r\n    line-height: 24px;\r\n    font-weight: 400;\r\n    color: #203a60;\r\n  }\r\n\r\n  .roundedimage {\r\n    background: linear-gradient(344.79deg, #ee933857 19.36%, #ee93386b 88.02%);\r\n    border-radius: 50% !important;\r\n  }\r\n\r\n  @media only screen and (max-width: 500px) {\r\n    .expressiontitle {\r\n      font-size: 13px !important;\r\n\r\n    }\r\n  }\r\n</style>\r\n\r\n<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header lock-page header-filter\" filter-color=\"black\"\r\n    style=\"background-color:#fafafa; background-size: cover; background-position: top center;\">\r\n    <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\r\n    <div class=\"container\">\r\n      <div class=\"row row justify-content-left\" style=\"margin-top: 7vh;\">\r\n        <div class=\"col-md-12 ml-auto mr-auto\">\r\n          <h2>\r\n\r\n            <b>\r\n              {{'trans.about_us' | translate}}\r\n              <!-- {{'About us'| translate}} -->\r\n              <!-- <app-CustomText-web text=\"About us\"></app-CustomText-web> -->\r\n            </b>\r\n          </h2>\r\n          <p>\r\n            Lorem Ipsum is simply dummy text of the printing & typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since. When an unknown printer took a galley of type\r\n            <!-- <app-language-selector></app-language-selector> -->\r\n\r\n          </p>\r\n          \r\n        </div>\r\n        <div class=\"col-md-12 mt-3\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 pr-md-0\">\r\n              <img class=\"img-fluid rounded mt-1\" src=\"./assets/Images/About_01.png\">\r\n              <!-- <object data=\"./assets/svgs/1.svg\" class=\"img-fluid\"> </object> -->\r\n            </div>\r\n            <div class=\"col-md-6 pl-md-2\">\r\n              <div class=\"row\">\r\n                <div class=\"col-6 pr-md-1\">\r\n                  <img class=\"img-fluid rounded mt-1\" src=\"./assets/Images/About_02.png\">\r\n                </div>\r\n                <div class=\"col-6 pl-md-1\">\r\n                  <img class=\"img-fluid rounded mt-1\" src=\"./assets/Images/About_03.png\">\r\n                </div>\r\n                <div class=\"col-md-12 mt-1\">\r\n                  <img class=\"img-fluid rounded \" src=\"./assets/Images/About_04.png\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row justify-content-left\">\r\n        <div class=\"col-12 mt-5\">\r\n          <h2><b> {{'trans.Our_story' | translate}}</b></h2>\r\n        </div>\r\n        <div class=\"col-md-6 mt-2\">\r\n          <p>\r\n            Lorem Ipsum is simply dummy text of the printing and typesetting\r\n            industry. Lorem Ipsum has been the industry s standard dummy text\r\n            ever since the 1500s, when an unknown printer took a galley of type and\r\n            scrambled it to make a type specimen book. It has survived not only five\r\n            centuries, but also the leap into electronic typesetting.\r\n            <br><br>\r\n\r\n            Remaining essentially unchanged. It was popularised in the 1960s with\r\n            the release of Letraset sheets containing Lorem Ipsum passages, and\r\n            more recently with desktop publishing software like Aldus PageMaker\r\n            including versions of Lorem Ipsum\r\n          </p>\r\n        </div>\r\n        <div class=\"col-md-6 mt-2\">\r\n          <p>\r\n            It is a long established fact that a reader will be distracted by the\r\n            readable content of a page when looking at its layout. The point of using\r\n            Lorem Ipsum is that it has a more-or-less normal distribution of letters,\r\n            as opposed to using Content here, content here , making it look like\r\n            readable English. Many desktop publishing packages and web page\r\n            editors now use Lorem Ipsum as their default model text. </p>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row \">\r\n        <div class=\"col-12 p-5\" style=\"background:black;\">\r\n          <div class=\"container\">\r\n            <div class=\"row mb-4 justify-content-left\">\r\n              <div class=\"col-md-8\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12 mb-4\">\r\n                    <h3 class=\"text-white mt-0\">One Rooms has two headquarters,<br>\r\n                      In Switzerland and USA...</h3>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <div style=\"border-left: 2px solid white;\">\r\n                      <h3 class=\"text-danger mt-0 mb-0 pl-3\"><b>2021</b> </h3>\r\n                      <p class=\"mb-0 pb-0 text-white pl-3 \"><small> {{'trans.One_Rooms_launched' | translate}} </small> </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <div style=\"border-left: 2px solid white;\">\r\n                      <h3 class=\"text-danger mt-0 mb-0 pl-3\"><b>4204+</b> </h3>\r\n                      <p class=\"mb-0 pb-0 text-white pl-3 \"><small> {{'trans.Offer' | translate}}</small> </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <div style=\"border-left: 2px solid white;\">\r\n                      <h3 class=\"text-danger mt-0 mb-0 pl-3\"><b>320+</b> </h3>\r\n                      <p class=\"mb-0 pb-0 text-white pl-3 \"><small> {{'trans.Host_list' | translate}}</small> </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <div style=\"border-left: 2px solid white;\">\r\n                      <h3 class=\"text-danger mt-0 mb-0 pl-3\"><b> Millions</b> </h3>\r\n                      <p class=\"mb-0 pb-0 text-white pl-3 \"><small>{{'trans.Of_One_Rooms_users' | translate}}</small></p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"container\">\r\n      <div class=\"row row justify-content-left\">\r\n        <div class=\"col-md-12 ml-auto mr-auto\">\r\n          <h3><b> {{'trans.What_One_Rooms_offers' | translate}}</b> </h3>\r\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\r\n            industry s standard</p>\r\n        </div>\r\n        <div class=\"col-md-12 mt-4 mb-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n              <img class=\"img-fluid rounded p-2 roundedimage\" src=\"./assets/Icons/PNG/Search fast_Save search.png\">\r\n              <h4 class=\"mt-4\" style=\"font-weight:400;\"><b>{{'trans.Search_fast_Save_Search' | translate}}</b></h4>\r\n              <p>Lorem Ipsum is simply dummy text of the\r\n                printing & typesetting industry. Lorem\r\n                Ipsum has been the industry s dummy\r\n                standard</p>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <img class=\"img-fluid rounded pb-2  pt-2  pl-3  pr-3 roundedimage\" style=\"height: 44px; \"\r\n                src=\"./assets/Icons/PNG/Low rates.png\">\r\n              <h4 class=\"mt-4\" style=\"font-weight:400;\"><b> {{'trans.Low_rates' | translate}}</b></h4>\r\n              <p>Lorem Ipsum is simply dummy text of the\r\n                printing & typesetting industry. Lorem\r\n                Ipsum has been the industry s dummy\r\n                standard</p>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <img class=\"img-fluid rounded p-2 roundedimage\" src=\"./assets/Icons/PNG/Chat with Host.png\">\r\n              <h4 class=\"mt-4\" style=\"font-weight:400;\"><b> {{'trans.Chat_with_the_host' | translate}}</b></h4>\r\n              <p>Lorem Ipsum is simply dummy text of the\r\n                printing & typesetting industry. Lorem\r\n                Ipsum has been the industry s dummy\r\n                standard</p>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <img class=\"img-fluid rounded p-2 roundedimage\" src=\"./assets/Icons/PNG/24_7 support.png\"\r\n                style=\"height: 44px !important;\">\r\n              <h4 class=\"mt-4\" style=\"font-weight:400;\"><b>24/7 {{'trans.Support' | translate}}</b></h4>\r\n              <p>Lorem Ipsum is simply dummy text of the\r\n                printing & typesetting industry. Lorem\r\n                Ipsum has been the industry s dummy\r\n                standard.</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"container-fluid\" style=\"background-color: #FFFFFF!important; color: black;\">\r\n      <div class=\"container\">\r\n        <div class=\"row row justify-content-left\">\r\n          <div class=\"col-md-6\">\r\n            <h3 class=\"ml-4\"><b>{{'trans.Frequently_asked_questions' | translate}} </b></h3>\r\n          </div>\r\n          <div class=\"col-md-6 text-right ml-auto mr-auto\" >\r\n            <button class=\"btn btn-default bg-white text-dark border btn-round py-2 px-3\" id=\"host\" (click)=\"changehost(1)\"> {{'trans.Host' | translate}}</button>\r\n            <button class=\"btn btn-danger btn-round border py-2 px-3\" id=\"guest\" (click)=\"changehost(2)\"> {{'trans.Guest' | translate}}</button>\r\n    \r\n         </div>\r\n          <div class=\"col-md-12 mt-4\" *ngIf=\"faqsList && chekfaq==2\">\r\n            <mat-accordion *ngFor=\"let faq of faqsList.guest_faqs\">\r\n              <mat-expansion-panel class=\"matexpension mb-2 \" (opened)=\"panelOpenState = true\"\r\n                (closed)=\"panelOpenState = false\">\r\n                <mat-expansion-panel-header>\r\n                  <mat-panel-title class=\"expressiontitle\">\r\n                    {{ faq.questions }}\r\n                  </mat-panel-title>\r\n\r\n                </mat-expansion-panel-header>\r\n                <p class=\"expansiondescription \">{{ faq.answers }}</p>\r\n              </mat-expansion-panel>\r\n            </mat-accordion>\r\n          </div>\r\n          <div class=\"col-md-12 mt-4\" *ngIf=\"faqsList && chekfaq==1\">\r\n            <mat-accordion *ngFor=\"let faq of faqsList.host_faqs\">\r\n              <mat-expansion-panel class=\"matexpension mb-2 \" (opened)=\"panelOpenState = true\"\r\n                (closed)=\"panelOpenState = false\">\r\n                <mat-expansion-panel-header>\r\n                  <mat-panel-title class=\"expressiontitle\">\r\n                    {{ faq.questions }}\r\n                  </mat-panel-title>\r\n\r\n                </mat-expansion-panel-header>\r\n                <p class=\"expansiondescription \">{{ faq.answers }}</p>\r\n              </mat-expansion-panel>\r\n            </mat-accordion>\r\n          </div>\r\n          <!-- <div class=\"col-md-12 mt-2 mb-4 text-center\" *ngIf=\"faqsLength > 3\">\r\n            <a href=\"/#/Website/faqs\">See More</a>\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-footer-web></app-footer-web>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 74150:
/*!*************************************************************!*\
  !*** ./src/app/Website/Host/Host.component.html?ngResource ***!
  \*************************************************************/
/***/ (function(module) {

module.exports = "<style>\r\n  .matexpension {\r\n    border-bottom: 1px solid #e5e5e5;\r\n    box-shadow: none !important\r\n  }\r\n\r\n  .expressiontitle {\r\n    font-size: 18px;\r\n    font-family: 'ABeeZee';\r\n    line-height: 26px;\r\n    font-weight: 500;\r\n    color: #1D3557;\r\n  }\r\n\r\n  .expansiondescription {\r\n    font-size: 15px;\r\n    font-family: 'ABeeZee';\r\n    line-height: 24px;\r\n    font-weight: 400;\r\n    color: #1D3557;\r\n  }\r\n\r\n  .roundedimage {\r\n    background: linear-gradient(344.79deg, #ee933857 19.36%, #ee93386b 88.02%);\r\n    border-radius: 50% !important;\r\n  }\r\n\r\n  @media only screen and (max-width: 500px) {\r\n    .expressiontitle {\r\n      font-size: 13px !important;\r\n\r\n    }\r\n  }\r\n\r\n  .verticalcenter {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n  }\r\n</style>\r\n\r\n<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header lock-page header-filter\" filter-color=\"black\"\r\n    style=\"background-color:#fafafa; background-size: cover; background-position: top center;\">\r\n    <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-left\" style=\"margin-top: 10vh;\">\r\n        <div class=\"col-12 text-center\">\r\n          <ul class=\"nav nav-pills nav-pills-danger justify-content-center\" role=\"tablist\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link active px-3 py-1\" style=\"min-width:50px !important;\" data-toggle=\"tab\" href=\"#link1\"\r\n                role=\"tablist\">\r\n                 {{'trans.Guest' | translate}}\r\n              </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link px-3 py-1\" style=\"min-width:50px !important;\" data-toggle=\"tab\" href=\"#link2\"\r\n                role=\"tablist\">\r\n                 {{'trans.Host' | translate}}\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"tab-content tab-space col-12 px-2\">\r\n          <div class=\"tab-pane active \" id=\"link1\">\r\n            <h2 class=\"text-center font-weight-bolder mt-3\"><b> {{'trans.your_next_getaway' | translate}} </b>\r\n            </h2>\r\n            <div class=\"row  \">\r\n              <div class=\"col-md-6 verticalcenter\">\r\n                <h3 class=\"font-weight-bolder \"><b> <span class=\"text-danger\">1. </span> {{'trans.Search_offers' | translate}} </b> </h3>\r\n                <p class=\"mt-4 pr-md-5\">Lorem Ipsum is simply dummy text of the printing and\r\n                  typesetting industry. Lorem Ipsum has been the\r\n                  industry's standard dummy text ever since the 1500s,\r\n                  when an unknown printer took a galley of type and\r\n                  scrambled it to make a type specimen book. It has\r\n                  survived not only five centuries, but also the leap into\r\n                  electronic typesetting</p>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <img class=\"img-fluid rounded \" src=\"./assets/Images/Guest_Search offers.png\">\r\n              </div>\r\n            </div>\r\n            <div class=\"row mt-5 \">\r\n              <div class=\"col-md-6\">\r\n                <img class=\"img-fluid rounded \" src=\"./assets/Images/Guest_Book.png\">\r\n              </div>\r\n              <div class=\"col-md-6 verticalcenter\">\r\n                <h3 class=\"font-weight-bolder \"><b> <span class=\"text-danger\">2. </span>{{'trans.Book' | translate}}</b> </h3>\r\n                <p class=\"mt-4 pr-md-5\">Lorem Ipsum is simply dummy text of the printing and\r\n                  typesetting industry. Lorem Ipsum has been the\r\n                  industry's standard dummy text ever since the 1500s,\r\n                  when an unknown printer took a galley of type and\r\n                  scrambled it to make a type specimen book. It has\r\n                  survived not only five centuries, but also the leap into\r\n                  electronic typesetting</p>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"row  \">\r\n              <div class=\"col-md-6 verticalcenter\">\r\n                <h3 class=\"font-weight-bolder \"><b> <span class=\"text-danger\">3. </span> {{'trans.Chat_and_go' | translate}}</b> </h3>\r\n                <p class=\"mt-4 pr-md-5\">Lorem Ipsum is simply dummy text of the printing and\r\n                  typesetting industry. Lorem Ipsum has been the\r\n                  industry's standard dummy text ever since the 1500s,\r\n                  when an unknown printer took a galley of type and\r\n                  scrambled it to make a type specimen book. It has\r\n                  survived not only five centuries, but also the leap into\r\n                  electronic typesetting</p>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <img class=\"img-fluid rounded \" src=\"./assets/Images/Host_Chat with Guests.png\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"tab-pane \" id=\"link2\">\r\n            <h2 class=\"text-center font-weight-bolder mt-3\"><b>{{'trans.your_next_getaway' | translate}}   </b>\r\n            </h2>\r\n            <div class=\"row  \">\r\n              <div class=\"col-md-6 verticalcenter\">\r\n                <h3 class=\"font-weight-bolder \"><b> <span class=\"text-danger\">1. </span> {{'trans.Easily_sign_up' | translate}}</b> </h3>\r\n                <p class=\"mt-4 pr-md-5\">Lorem Ipsum is simply dummy text of the printing and\r\n                  typesetting industry. Lorem Ipsum has been the\r\n                  industry's standard dummy text ever since the 1500s,\r\n                  when an unknown printer took a galley of type and\r\n                  scrambled it to make a type specimen book. It has\r\n                  survived not only five centuries, but also the leap into\r\n                  electronic typesetting</p>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <img class=\"img-fluid rounded \" src=\"./assets/Images/Host_Easily Sign Up.png\">\r\n              </div>\r\n            </div>\r\n            <div class=\"row mt-5 \">\r\n              <div class=\"col-md-6\">\r\n                <img class=\"img-fluid rounded \" src=\"./assets/Images/Host_Easily create your offers.png\">\r\n              </div>\r\n              <div class=\"col-md-6 verticalcenter\">\r\n                <h3 class=\"font-weight-bolder \"><b> <span class=\"text-danger\">2. </span>{{'trans.Easily_create_your_offers' | translate}} </b>\r\n                </h3>\r\n                <p class=\"mt-4 pr-md-5\">Lorem Ipsum is simply dummy text of the printing and\r\n                  typesetting industry. Lorem Ipsum has been the\r\n                  industry's standard dummy text ever since the 1500s,\r\n                  when an unknown printer took a galley of type and\r\n                  scrambled it to make a type specimen book. It has\r\n                  survived not only five centuries, but also the leap into\r\n                  electronic typesetting</p>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"row  \">\r\n              <div class=\"col-md-6 verticalcenter\">\r\n                <h3 class=\"font-weight-bolder \"><b> <span class=\"text-danger\">3. </span>{{'trans.Chat_with_Guests' | translate}} </b> </h3>\r\n                <p class=\"mt-4 pr-md-5\">Lorem Ipsum is simply dummy text of the printing and\r\n                  typesetting industry. Lorem Ipsum has been the\r\n                  industry's standard dummy text ever since the 1500s,\r\n                  when an unknown printer took a galley of type and\r\n                  scrambled it to make a type specimen book. It has\r\n                  survived not only five centuries, but also the leap into\r\n                  electronic typesetting</p>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <img class=\"img-fluid rounded \" src=\"./assets/Images/Guest_Chat and Go.png\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"container-fluid\" style=\"background-color: #FFFFFF!important; color: black;\">\r\n      <div class=\"container\">\r\n        <div class=\"row row justify-content-left\">\r\n          <div class=\"col-md-6\">\r\n            <h3 class=\"ml-4\"><b>{{'trans.Frequently_asked_questions' | translate}} </b></h3>\r\n          </div>\r\n          <div class=\"col-md-6 text-right ml-auto mr-auto\" >\r\n            <button class=\"btn btn-default bg-white text-dark border btn-round py-2 px-3\" id=\"host\" (click)=\"changehost(1)\"> {{'trans.Host' | translate}}</button>\r\n            <button class=\"btn btn-danger btn-round border py-2 px-3\" id=\"guest\" (click)=\"changehost(2)\"> {{'trans.Guest' | translate}}</button>\r\n    \r\n         </div>\r\n          <div class=\"col-md-12 mt-4\" *ngIf=\"faqsList && chekfaq==2\">\r\n            <mat-accordion *ngFor=\"let faq of faqsList.guest_faqs\">\r\n              <mat-expansion-panel class=\"matexpension mb-2 \" (opened)=\"panelOpenState = true\"\r\n                (closed)=\"panelOpenState = false\">\r\n                <mat-expansion-panel-header>\r\n                  <mat-panel-title class=\"expressiontitle\">\r\n                    {{ faq.questions }}\r\n                  </mat-panel-title>\r\n\r\n                </mat-expansion-panel-header>\r\n                <p class=\"expansiondescription \">{{ faq.answers }}</p>\r\n              </mat-expansion-panel>\r\n            </mat-accordion>\r\n          </div>\r\n          <div class=\"col-md-12 mt-4\" *ngIf=\"faqsList && chekfaq==1\">\r\n            <mat-accordion *ngFor=\"let faq of faqsList.host_faqs\">\r\n              <mat-expansion-panel class=\"matexpension mb-2 \" (opened)=\"panelOpenState = true\"\r\n                (closed)=\"panelOpenState = false\">\r\n                <mat-expansion-panel-header>\r\n                  <mat-panel-title class=\"expressiontitle\">\r\n                    {{ faq.questions }}\r\n                  </mat-panel-title>\r\n\r\n                </mat-expansion-panel-header>\r\n                <p class=\"expansiondescription \">{{ faq.answers }}</p>\r\n              </mat-expansion-panel>\r\n            </mat-accordion>\r\n          </div>\r\n          <!-- <div class=\"col-md-12 mt-2 mb-4 text-center\" *ngIf=\"faqsLength > 3\">\r\n            <a href=\"/#/Website/faqs\">See More</a>\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-footer-web></app-footer-web>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 81572:
/*!*******************************************************************!*\
  !*** ./src/app/Website/Privacy/Privacy.component.html?ngResource ***!
  \*******************************************************************/
/***/ (function(module) {

module.exports = "<style>\r\n\r\n  .form-control, .is-focused .form-control {\r\n      background-image: none;\r\n      border: 1px solid #d4d2d2;\r\n      border-radius: 5px;\r\n      padding: 23.5px;\r\n      margin-top: 5px;\r\n      background: white;\r\n  }\r\n</style>\r\n\r\n<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header lock-page header-filter\" filter-color=\"black\" style=\"background-color:#fafafa; background-size: cover; background-position: top center;\">\r\n      <div class=\"container\">\r\n          <div class=\"row justify-content-left mb-4\" style=\"margin-top: 10vh;\">\r\n              <div class=\"col-md-4\">\r\n                  <ul class=\"nav nav-pills nav-pills-danger justify-content-left mb-4\" role=\"tablist\">\r\n                      <li class=\"nav-item\">\r\n                          <a class=\"nav-link active px-3 py-1\" style=\"min-width:50px !important;\" data-toggle=\"tab\" href=\"#link1\" role=\"tablist\">\r\n                              Guest\r\n                          </a>\r\n                      </li>\r\n                      <li class=\"nav-item\" >\r\n                          <a class=\"nav-link px-3 py-1\" style=\"min-width:50px !important;\" data-toggle=\"tab\" href=\"#link2\" role=\"tablist\">\r\n                              Host\r\n                          </a>\r\n                      </li>\r\n                  </ul>\r\n                  <h4 class=\"ml-3\"><b>Terms of service</b></h4>\r\n                  <ul class=\"nav nav-pills nav-pills-rose flex-column\" role=\"tablist\">\r\n                      <li class=\"nav-item pl-2 mt-2\" style=\"border-left: 3px solid #ed8935;\">\r\n                              <a class=\"active \" data-toggle=\"tab\" style=\"color: #ed8935;\" href=\"#link4\" role=\"tablist\">\r\n                                  Our community policies\r\n                              </a>\r\n                      </li>\r\n                      <li class=\"nav-item pl-2 mt-2\" >\r\n                          <a class=\"text-dark \" data-toggle=\"tab\" href=\"#link5\" role=\"tablist\">\r\n                              Payments Terms of Service\r\n                          </a>\r\n                      </li>\r\n                      <li class=\"nav-item pl-2 mt-2\" >\r\n                          <a class=\"text-dark \" data-toggle=\"tab\" href=\"#link6\" role=\"tablist\">\r\n                              Privacy Policy\r\n                          </a>\r\n                      </li>\r\n                      <li class=\"nav-item pl-2 mt-2\" >\r\n                          <a class=\"text-dark \" data-toggle=\"tab\" href=\"#link7\" role=\"tablist\">\r\n                              Privacy Policy Supplements\r\n                          </a>\r\n                      </li>\r\n\r\n                      <li class=\"nav-item pl-2 mt-2\" >\r\n                          <a class=\"text-dark \" data-toggle=\"tab\" href=\"#link8\" role=\"tablist\">\r\n                              Stays terms and policies\r\n                          </a>\r\n                      </li>\r\n                      <li class=\"nav-item pl-2 mt-2\" >\r\n                          <a class=\"text-dark \" data-toggle=\"tab\" href=\"#link9\" role=\"tablist\">\r\n                              Airbnb Experiences terms and policies\r\n                          </a>\r\n                      </li>\r\n                      <li class=\"nav-item pl-2 mt-2\" >\r\n                          <a class=\"text-dark \" data-toggle=\"tab\" href=\"#link10\" role=\"tablist\">\r\n                              Other terms and policies\r\n                          </a>\r\n                      </li>\r\n                      <li class=\"nav-item pl-2 mt-2\" >\r\n                          <a class=\"text-dark \" data-toggle=\"tab\" href=\"#link11\" role=\"tablist\">\r\n                              Legal resources\r\n                          </a>\r\n                      </li>\r\n                  </ul>\r\n              </div>\r\n              <div class=\"col-md-8 mt-5\">\r\n                  <div class=\"tab-content\">\r\n                      <div class=\"tab-pane active\" id=\"link4\">\r\n                          <h2 class=\"\"><b>Terms of service</b></h2>\r\n                          <h3><b>Our community pocicies</b></h3>\r\n\r\n                          <p>\r\n                              The tour stops in Richmond’s historic Jackson Ward, known for its mix of early architecture and modern art\r\n                              and culture. The streets are rich with nightlife and music and dotted with dozens of coffee houses and\r\n                              cafes. The original paver stone sidewalks, lined with beautiful, mature trees, make the ideal pathway for the\r\n                              walking tour’s narrative Richmond’s architectural history and Jackson Ward’s notable impact on the city’s\r\n                              food and art scene.\r\n                          </p><br>\r\n                          <p>\r\n\r\n                              River City Food Tours isn’t your average tour company. They take Richmond residents and visitors on a\r\n                              unique journey through the city by marrying culture and culinary tradition for a match made in heaven.\r\n                          </p><br>\r\n                          <p>\r\n\r\n                              Even lifelong Richmond residents are guaranteed to learn something new about the city and its many\r\n                              restaurants, galleries, and cultural landmarks. One of the company’s most popular tour options takes\r\n                              guests through Richmond’s newly revitalized Arts District, where they will experience delights for all five\r\n                              senses. The tour allows guests to see the neighborhood as “an insider,” whether it’s the first visit to the Arts\r\n                              District or the hundredth\r\n                          </p>\r\n                          <h3><b>1. Reservations for Experiences and Other Host Services.</b></h3>\r\n                          <p>\r\n                              The tour stops in Richmond’s historic Jackson Ward, known for its mix of early architecture and modern art\r\n                              and culture. The streets are rich with nightlife and music and dotted with dozens of coffee houses and\r\n                              cafes. The original paver stone sidewalks, lined with beautiful, mature trees, make the ideal pathway for\r\n                              the walking tour’s narrative Richmond’s architectural history and Jackson Ward’s notable impact on the\r\n                              city’s food and art scene.\r\n                          </p><br>\r\n                          <p>\r\n\r\n                              River City Food Tours isn’t your average tour company. They take Richmond residents and visitors on a\r\n                              unique journey through the city by marrying culture and culinary tradition for a match made in heaven.\r\n                          </p><br>\r\n                          <p>\r\n\r\n                              Even lifelong Richmond residents are guaranteed to learn something new about the city and its many\r\n                              restaurants, galleries, and cultural landmarks. One of the company’s most popular tour options takes\r\n                              guests through Richmond’s newly revitalized Arts District, where they will experience delights for all\r\n                              five senses. The tour allows guests to see the neighborhood as “an insider,” whether it’s the first visit to the\r\n                              Arts District or the hundredth.\r\n                          </p>\r\n\r\n                          <h3><b>2. Get a taste of art and culture</b></h3>\r\n                          <p>\r\n                              The tour stops in Richmond’s historic Jackson Ward, known for its mix of early architecture\r\n                              and modern art and culture. The streets are rich with nightlife and music and dotted with\r\n                              dozens of coffee houses and cafes. The original paver stone sidewalks, lined with beautiful,\r\n                              mature trees, make the ideal pathway for the walking tour’s narrative Richmond’s architectural\r\n                              history and Jackson Ward’s notable impact on the city’s food and art scene.\r\n                          </p><br>\r\n                          <p>\r\n                              River City Food Tours isn’t your average tour company.\r\n                              culture and culinary tradition for a\r\n                              match made in heaven.\r\n                          </p>\r\n                          <h3><b>3. Reservations for Experiences and Other Host Services. </b></h3>\r\n                          <p>\r\n                              The tour stops in Richmond’s historic Jackson Ward, known for its mix of early architecture and modern art\r\n                              and culture. The streets are rich with nightlife and music and dotted with dozens of coffee houses and\r\n                              cafes. The original paver stone sidewalks, lined with beautiful, mature trees, make the ideal pathway for the\r\n                              walking tour’s narrative Richmond’s architectural history and Jackson Ward’s notable impact on the city’s\r\n                              food and art scene.\r\n                          </p><br>\r\n                          <p>\r\n                              Even lifelong Richmond residents are guaranteed to learn something new about the city and its many\r\n                              restaurants, galleries, and cultural landmarks. One of the company’s most popular tour options takes\r\n                              guests through Richmond’s newly revitalized Arts District, where they will experience delights for all five\r\n                              senses. The tour allows guests to see the neighborhood as “an insider,” whether it’s the first visit to the Arts\r\n                              District or the hundredth.\r\n                          </p>\r\n                          <h3><b>4. Get a taste of art and culture</b></h3>\r\n                          <p>\r\n                              The tour stops in Richmond’s historic Jackson Ward, known for its mix of early architecture\r\n                              and modern art and culture. The streets are rich with nightlife and music and dotted with\r\n                              dozens of coffee houses and cafes. The original paver stone sidewalks, lined with beautiful,\r\n                              mature trees, make the ideal pathway for the walking tour’s narrative Richmond’s architectural\r\n                              history and Jackson Ward’s notable impact on the city’s food and art scene.\r\n                          </p>\r\n                          <ul>\r\n                            <li>\r\n                                The tour stops in Richmond’s historic Jackson Ward, known for its mix of early architecture\r\n                                and modern art and culture\r\n                            </li>\r\n                            <li>\r\n                                The streets are rich with nightlife and music and dotted with dozens of coffee houses and\r\n                                cafes. The original paver stone sidewalks, lined with beautiful, mature trees, make the ideal\r\n                                pathway for the walking tour’s narrative Richmond’s architectural historyw\r\n                            </li>\r\n                            <li>\r\n                                Jackson Ward’s notable impact on the city’s food and art scene\r\n                            </li>\r\n                            <li>\r\n                                Jackson Ward’s notable impact on the city’s food and art scene\r\n                            </li>\r\n                            <li>\r\n                                They take Richmond residents and visitors on a unique journey through the city by\r\n                                marrying culture and culinary tradition for a match made in heaven.\r\n                            </li>\r\n                        </ul>\r\n                        <p>The tour stops in Richmond’s historic Jackson Ward, known for its mix of early architecture \r\n                          and modern art and culture. The streets are rich with nightlife and music and dotted with \r\n                          dozens of coffee houses and cafes. The original paver stone sidewalks, lined with beautiful, \r\n                          mature trees, make the ideal pathway for the walking tour’s narrative Richmond’s architectural \r\n                          history and Jackson Ward’s notable impact on the city’s food and art scene.</p>\r\n                        <ol>\r\n                          <li>\r\n                              The tour stops in Richmond’s historic Jackson Ward, known for its mix of early architecture\r\n                              and modern art and culture\r\n                          </li>\r\n                          <li>\r\n                              The streets are rich with nightlife and music and dotted with dozens of coffee houses and\r\n                              cafesw\r\n                          </li>\r\n                          <li>\r\n                              The original paver stone sidewalks, lined with beautiful, mature trees, make the ideal\r\n                              pathway for the walking tour’s narrative Richmond’s architectural histora\r\n                          </li>\r\n                          <li>\r\n                              Jackson Ward’s notable impact on the city’s food and art scene\r\n                          </li>\r\n                      </ol>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n\r\n      <app-footer-web></app-footer-web>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 33689:
/*!***********************************************************************!*\
  !*** ./src/app/Website/dashboard/dashboard.component.html?ngResource ***!
  \***********************************************************************/
/***/ (function(module) {

module.exports = "\r\n<style>\r\n  .span1 {\r\n    background: #FFFFFF 0% 0% no-repeat padding-box;\r\n    border: 0.10000000149011612px solid #707070;\r\n    opacity: 1;\r\n    padding: 6px 15px;\r\n  }\r\n  .activespan {\r\n    color: white;\r\n    background:#336601;\r\n  }\r\n</style>\r\n<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header lock-page header-filter text-dark\" filter-color=\"black\" style=\"background-color:#f6f7f8; background-size: cover; background-position: top center;color: black;\" >\r\n    <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12 text-dark ml-auto mr-auto \" style=\"margin-top: 10vh;\">\r\n         <h2><b>Loans Dashboard</b></h2>\r\n         <span>Welcome Back!</span>\r\n        </div>\r\n        <div class=\"col-12 text-dark mt-4\">\r\n          <h3><b>Quick stats</b></h3>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"row \">\r\n        <div class=\"col-md-3 \">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <p>Active Loans</p>\r\n              <h4 class=\"text-right pt-2\"><b>02</b></h4>\r\n            </div>\r\n          </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body\">\r\n                <p>You Owe</p>\r\n                <h4 class=\"text-right pt-2\"><b>$2222</b></h4>\r\n              </div>\r\n            </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <div class=\"card\" style=\"background-color: #F1F1F1 !important;\">\r\n                <div class=\"card-body\">\r\n                  <p class=\"pb-0\"><b>Updates</b></p>\r\n                  <p class=\"pb-0\"><span>Next Installment is Due</span><button class=\"pull-right btn btn-success p-2\">Pay Now</button> </p>\r\n                </div>\r\n              </div>\r\n              </div>\r\n      </div>\r\n      <div class=\"row \">\r\n        <div class=\"col-12 text-dark mt-4\">\r\n          <h3><b>Captall Loans</b></h3>\r\n        </div>\r\n        <div class=\"col-12 text-dark mt-4\">\r\n          <div class=\"col-md-12 text-center\">\r\n            <a class=\"span1 text-white activespan\"  style=\"border-bottom-left-radius: 15px; border-top-left-radius: 15px;\"  id=\"span1\" >All</a>\r\n            <a class=\"span1 text-dark \"  id=\"span2\" >Current</a>\r\n            <a class=\"span1 text-dark \" id=\"span3\"  >Pending</a>\r\n            <a class=\"span1 text-dark\" id=\"span4\" >Rejected</a>\r\n            <a class=\"span1 text-dark\" id=\"span5\" style=\"border-bottom-right-radius: 15px; border-top-right-radius: 15px;\"  >Paid</a>\r\n\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-md-4 \">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <h4><b>Personal Loan</b></h4>\r\n                </div>\r\n                <div class=\"col-sm-6 text-right\">\r\n                  <button class=\"btn btn-info p-1\" style=\"font-size: 10px;\">Current</button>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <hr>\r\n                </div>\r\n                <div class=\"col-12 text-center\">\r\n                  <img src=\"./assets/img/Assets/timer_ic.png\" class=\"\" style=\"width:15%;\"/>\r\n                 <p>Next Installment is Due on 25 Jan 2021</p>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <div class=\"row text-center\">\r\n                    <div class=\"col-4\">\r\n                      <p class=\"pb-0 mb-0\"><b>$100</b></p>\r\n                      <p style=\"font-size: 10px;\">Monthly Payment</p>\r\n                    </div>\r\n                    <div class=\"col-4\">\r\n                      <p class=\"pb-0 mb-0\"><b>1 year</b></p>\r\n                      <p style=\"font-size: 10px;\">Remaining Tenor</p>\r\n                    </div>\r\n                    <div class=\"col-4\">\r\n                      <p class=\"pb-0 mb-0\"><b>1.90%</b></p>\r\n                      <p style=\"font-size: 10px;\">Interest Rate</p>\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                      <hr>\r\n                      <a class=\"\" style=\"color: #FA6400;\">See Details</a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          \r\n          </div>\r\n          </div>\r\n          <div class=\"col-md-4 \">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-6\">\r\n                    <h4><b>Mortgage Loan</b></h4>\r\n                  </div>\r\n                  <div class=\"col-sm-6 text-right\">\r\n                    <button class=\"btn btn-danger p-1\" style=\"font-size: 10px;\">Rejected</button>\r\n                  </div>\r\n                  <div class=\"col-12\">\r\n                    <hr>\r\n                  </div>\r\n                  <div class=\"col-12 text-center\">\r\n                    <img src=\"./assets/img/Assets/timer_ic.png\" class=\"\" style=\"width:15%;\"/>\r\n                   <p>Next Installment is Due on 25 Jan 2021</p>\r\n                  </div>\r\n                  <div class=\"col-12\">\r\n                    <div class=\"row text-center\">\r\n                      <div class=\"col-4\">\r\n                        <p class=\"pb-0 mb-0\"><b>$100</b></p>\r\n                        <p style=\"font-size: 10px;\">Monthly Payment</p>\r\n                      </div>\r\n                      <div class=\"col-4\">\r\n                        <p class=\"pb-0 mb-0\"><b>1 year</b></p>\r\n                        <p style=\"font-size: 10px;\">Remaining Tenor</p>\r\n                      </div>\r\n                      <div class=\"col-4\">\r\n                        <p class=\"pb-0 mb-0\"><b>1.90%</b></p>\r\n                        <p style=\"font-size: 10px;\">Interest Rate</p>\r\n                      </div>\r\n                      <div class=\"col-12\">\r\n                        <hr>\r\n                        <a class=\"\" style=\"color: #FA6400;\">See Details</a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            \r\n            </div>\r\n            </div>\r\n            <div class=\"col-md-4 \">\r\n              <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                      <h4><b>Collateral Loan</b></h4>\r\n                    </div>\r\n                    <div class=\"col-sm-6 text-right\">\r\n                      <button class=\"btn btn-warning p-1\" style=\"font-size: 10px;\">Pending</button>\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                      <hr>\r\n                    </div>\r\n                    <div class=\"col-12 text-center\">\r\n                      <img src=\"./assets/img/Assets/pending_ic.png\" class=\"\" style=\"width:15%;\"/>\r\n                     <p>Please upload the required documents</p>\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                      <div class=\"row text-center\">\r\n                        <div class=\"col-4\">\r\n                          <p class=\"pb-0 mb-0\"><b>$100</b></p>\r\n                          <p style=\"font-size: 10px;\">Monthly Payment</p>\r\n                        </div>\r\n                        <div class=\"col-4\">\r\n                          <p class=\"pb-0 mb-0\"><b>1 year</b></p>\r\n                          <p style=\"font-size: 10px;\">Remaining Tenor</p>\r\n                        </div>\r\n                        <div class=\"col-4\">\r\n                          <p class=\"pb-0 mb-0\"><b>1.90%</b></p>\r\n                          <p style=\"font-size: 10px;\">Interest Rate</p>\r\n                        </div>\r\n                        <div class=\"col-12\">\r\n                          <hr>\r\n                          <a class=\"\" style=\"color: #FA6400;\">See Details</a>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              \r\n              </div>\r\n              </div>\r\n      </div>\r\n     \r\n    </div>\r\n  </div>\r\n  <footer class=\"footer \" style=\"background-color: #000000!important;\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3 text-left\">\r\n          <div>      \r\n                  <img src=\"./assets/img/Assets/Captall_logo_w.png\" style=\"width:70%;\"/>\r\n          </div>\r\n          <div ><p class=\"mt-2\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p></div>\r\n       <div><span style=\"top: 1572px;\r\n        left: 251px;\r\n        width: 43px;\r\n        height: 43px;\r\n        background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;\r\n        background: #FFFFFF 0% 0% no-repeat padding-box;\r\n        opacity: 1;\"></span></div>\r\n        </div>\r\n        <div class=\"col-md-3 text-left\">\r\n          <h4>Legal</h4>\r\n          <p>Terms and Conditions</p>\r\n          <p>Privacy Policy</p>\r\n          <p>Help & Support</p>\r\n\r\n        </div>\r\n        <div class=\"col-md-3 text-left\">\r\n          <h4>Our Company</h4>\r\n          <p>About us</p>\r\n          <p>Code of Conduct</p>\r\n          <p>Sitemap</p>\r\n\r\n        </div>\r\n        <div class=\"col-md-3 text-left\">\r\n          <h4>Contact</h4>\r\n          <p>+44-123-456-7890</p>\r\n          <p>Privacy Policy</p>\r\n          <p>+44-123-456-7890</p>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n  </footer>\r\n</div>\r\n";

/***/ }),

/***/ 29659:
/*!****************************************************************************************!*\
  !*** ./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.mjs ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslateHttpLoader": function() { return /* binding */ TranslateHttpLoader; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);



var TranslateHttpLoader = /*#__PURE__*/function () {
  function TranslateHttpLoader(http) {
    var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/assets/i18n/";
    var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ".json";

    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TranslateHttpLoader);

    this.http = http;
    this.prefix = prefix;
    this.suffix = suffix;
  }
  /**
   * Gets the translations from the server
   */


  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TranslateHttpLoader, [{
    key: "getTranslation",
    value: function getTranslation(lang) {
      return this.http.get("".concat(this.prefix).concat(lang).concat(this.suffix));
    }
  }]);

  return TranslateHttpLoader;
}();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_Website_Website_module_ts.js.map