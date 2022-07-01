(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["main"],{

/***/ 58089:
/*!*************************************************************************!*\
  !*** ./src/app/Admin/layouts/Hostportal/Hostportal-layout.component.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HostportalLayoutComponent": function() { return /* binding */ HostportalLayoutComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _Hostportal_layout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hostportal-layout.component.html?ngResource */ 83691);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var src_app_services_data_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/data.services */ 7619);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ 77199);
/* harmony import */ var firebase_messaging__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/messaging */ 94659);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var HostportalLayoutComponent = /*#__PURE__*/function () {
  function HostportalLayoutComponent(router, element, cdf, dataService) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HostportalLayoutComponent);

    this.router = router;
    this.element = element;
    this.cdf = cdf;
    this.dataService = dataService;
    this.mobile_menu_visible = 0;
    this.user = null;
    this.fcm_token = null;
    this.page = 0;
    this.notifications = [];
    this.unread_notifications = 0;
    this.new_notification_status = false;
    this.moment = moment__WEBPACK_IMPORTED_MODULE_6__;
    this.sidebarVisible = false;
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(HostportalLayoutComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this.pic = localStorage.getItem('pic');
      var firebaseConfig = {
        apiKey: "AIzaSyALplqbC_JECI84zM4OSYV0zhmzlrml46s",
        authDomain: "fresh-rain-320914.firebaseapp.com",
        projectId: "fresh-rain-320914",
        storageBucket: "fresh-rain-320914.appspot.com",
        messagingSenderId: "312394151153",
        appId: "1:312394151153:web:fe030c2ad8682ba160e550",
        measurementId: "G-2SDBP32RL6"
      };
      var app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_4__.initializeApp)(firebaseConfig);
      var messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_5__.getMessaging)();
      (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_5__.getToken)(messaging, {
        vapidKey: 'BPupbI-8TFUeiPhfTI43JW5BZ7uDd3vAqba1w1YHR3H8mqIswifdGByxr0Vbz0ENqjJyFjOi0ptyqM5w3wBH3bc'
      }).then(function (currentToken) {
        if (currentToken) {
          localStorage.setItem('fcm_token', currentToken);
          _this.fcm_token = currentToken; // Track the token -> client mapping, by sending to backend server
          // show on the UI that permission is secured
        } else {
          console.log('No registration token available. Request permission to generate one.'); // shows on the UI that permission is required 
        }
      }).catch(function (err) {
        console.log('An error occurred while retrieving token. ', err); // catch error while creating client token
      });

      if (localStorage.getItem("token") != null && localStorage.getItem('role') == 'host' && localStorage.getItem('plan') != null) {} else {
        this.logout();
      }

      var navbar = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
      this._router = this.router.events.filter(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd;
      }).subscribe(function (event) {
        _this.sidebarClose();

        var $layer = document.getElementsByClassName('close-layer')[0];

        if ($layer) {
          $layer.remove();
        }
      });
      this.getNotifications();
      (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_5__.onMessage)(messaging, function (payload) {
        if (localStorage.getItem("token") != null) {
          _this.getNotifications();
        }
      });
    }
  }, {
    key: "getNotifications",
    value: function getNotifications() {
      var _this2 = this;

      this.new_notification_status = false;

      if (this.notifications.length < 10) {
        this.page = 1;
      } else {
        this.page = this.page + 1;
      }

      this.dataService.get('get-notification/' + this.page).then(function (result) {
        for (var i = 0; i < result.data.length; i++) {
          _this2.notifications.push(result.data[i]);

          if (result.data[i].read_status == 0) {
            _this2.unread_notifications = _this2.unread_notifications + 1;
          }
        }

        if (result.data == []) {
          _this2.new_notification_status = true;
        }

        _this2.cdf.detectChanges();
      });
    }
  }, {
    key: "sidebarOpen",
    value: function sidebarOpen() {
      var $toggle = document.getElementsByClassName('navbar-toggler')[0];
      var toggleButton = this.toggleButton;
      var body = document.getElementsByTagName('body')[0];
      setTimeout(function () {
        toggleButton.classList.add('toggled');
      }, 500);
      body.classList.add('nav-open');
      setTimeout(function () {
        $toggle.classList.add('toggled');
      }, 430);
      var $layer = document.createElement('div');
      $layer.setAttribute('class', 'close-layer');

      if (body.querySelectorAll('.wrapper-full-page')) {
        document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
      } else if (body.classList.contains('off-canvas-sidebar')) {
        document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
      }

      setTimeout(function () {
        $layer.classList.add('visible');
      }, 100);

      $layer.onclick = function () {
        body.classList.remove('nav-open');
        this.mobile_menu_visible = 0;
        this.sidebarVisible = false;
        $layer.classList.remove('visible');
        setTimeout(function () {
          $layer.remove();
          $toggle.classList.remove('toggled');
        }, 400);
      }.bind(this);

      body.classList.add('nav-open');
      this.mobile_menu_visible = 1;
      this.sidebarVisible = true;
    }
  }, {
    key: "sidebarClose",
    value: function sidebarClose() {
      var $toggle = document.getElementsByClassName('navbar-toggler')[0];
      var body = document.getElementsByTagName('body')[0];
      this.toggleButton.classList.remove('toggled');
      var $layer = document.createElement('div');
      $layer.setAttribute('class', 'close-layer');
      this.sidebarVisible = false;
      body.classList.remove('nav-open'); // $('html').removeClass('nav-open');

      body.classList.remove('nav-open');

      if ($layer) {
        $layer.remove();
      }

      setTimeout(function () {
        $toggle.classList.remove('toggled');
      }, 400);
      this.mobile_menu_visible = 0;
    }
  }, {
    key: "sidebarToggle",
    value: function sidebarToggle() {
      if (this.sidebarVisible === false) {
        this.sidebarOpen();
      } else {
        this.sidebarClose();
      }
    }
  }, {
    key: "logout",
    value: function logout() {
      var _this3 = this;

      var data = {
        fcm_token: localStorage.getItem('fcm_token')
      };
      this.dataService.post('logout', data).then(function (result) {
        _this3.user = null;
        _this3.pic = null;
        localStorage.clear();

        _this3.router.navigate(['/host/home']);
      });
    }
  }, {
    key: "visitGuest",
    value: function visitGuest() {
      localStorage.setItem('role', 'guest');
      this.router.navigate(['/guestportal/bookinglist']);
    }
  }, {
    key: "readAllNotifications",
    value: function readAllNotifications() {
      var _this4 = this;

      this.dataService.get('read-all-notification').then(function (result) {
        _this4.unread_notifications = 0;
        $('.readAllNotifications').css("background-color", "white");

        _this4.cdf.detectChanges();
      });
    }
  }, {
    key: "readNotification",
    value: function readNotification(id, status, navigation) {
      var _this5 = this;

      if (status != 1) {
        var data = {
          id: id
        };
        this.dataService.post('read-notification', data).then(function (result) {
          if (_this5.unread_notifications != 0) {
            _this5.unread_notifications = _this5.unread_notifications - 1;

            _this5.cdf.detectChanges();
          }

          $('#' + id + 'bg').css("background-color", "white");
        });
      }

      this.cdf.detectChanges();

      if (navigation.includes('dispute') || navigation.includes('withdraw')) {
        this.router.navigate(['/hostportal/bookinglist']);
      }

      if (navigation.includes('chat')) {
        var temp = navigation.split('-');
        localStorage.setItem('temp', temp[1]);
        this.router.navigate(['/hostportal/inbox']);
      }
    }
  }]);

  return HostportalLayoutComponent;
}();

HostportalLayoutComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef
  }, {
    type: src_app_services_data_services__WEBPACK_IMPORTED_MODULE_3__.DataService
  }];
};

HostportalLayoutComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-layout',
  template: _Hostportal_layout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], HostportalLayoutComponent);


/***/ }),

/***/ 32190:
/*!***************************************************************!*\
  !*** ./src/app/Admin/layouts/admin/admin-layout.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminLayoutComponent": function() { return /* binding */ AdminLayoutComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _admin_layout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-layout.component.html?ngResource */ 47256);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _md_md_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../md/md.module */ 35320);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ 24846);
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/navbar/navbar.component */ 81628);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! perfect-scrollbar */ 52631);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AdminLayoutComponent = /*#__PURE__*/function () {
  function AdminLayoutComponent(router, location) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AdminLayoutComponent);

    this.router = router;
    this.yScrollStack = [];
    this.location = location;
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AdminLayoutComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      var elemMainPanel = document.querySelector('.main-panel');
      var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
      this.location.subscribe(function (ev) {
        _this.lastPoppedUrl = ev.url;
      });
      this.router.events.subscribe(function (event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationStart) {
          if (event.url != _this.lastPoppedUrl) _this.yScrollStack.push(window.scrollY);
        } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd) {
          if (event.url == _this.lastPoppedUrl) {
            _this.lastPoppedUrl = undefined;
            window.scrollTo(0, _this.yScrollStack.pop());
          } else window.scrollTo(0, 0);
        }
      });
      this._router = this.router.events.filter(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd;
      }).subscribe(function (event) {
        elemMainPanel.scrollTop = 0;
        elemSidebar.scrollTop = 0;
      });
      var html = document.getElementsByTagName('html')[0];

      if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
        var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemMainPanel);
        ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemSidebar);
        html.classList.add('perfect-scrollbar-on');
      } else {
        html.classList.add('perfect-scrollbar-off');
      }

      this._router = this.router.events.filter(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd;
      }).subscribe(function (event) {
        _this.navbar.sidebarClose();
      });
      this.navItems = [{
        type: _md_md_module__WEBPACK_IMPORTED_MODULE_3__.NavItemType.NavbarLeft,
        title: 'Dashboard',
        iconClass: 'fa fa-dashboard'
      }, {
        type: _md_md_module__WEBPACK_IMPORTED_MODULE_3__.NavItemType.NavbarRight,
        title: '',
        iconClass: 'fa fa-bell-o',
        numNotifications: 5,
        dropdownItems: [{
          title: 'Notification 1'
        }, {
          title: 'Notification 2'
        }, {
          title: 'Notification 3'
        }, {
          title: 'Notification 4'
        }, {
          title: 'Another Notification'
        }]
      }, {
        type: _md_md_module__WEBPACK_IMPORTED_MODULE_3__.NavItemType.NavbarRight,
        title: '',
        iconClass: 'fa fa-list',
        dropdownItems: [{
          iconClass: 'pe-7s-mail',
          title: 'Messages'
        }, {
          iconClass: 'pe-7s-help1',
          title: 'Help Center'
        }, {
          iconClass: 'pe-7s-tools',
          title: 'Settings'
        }, 'separator', {
          iconClass: 'pe-7s-lock',
          title: 'Lock Screen'
        }, {
          iconClass: 'pe-7s-close-circle',
          title: 'Log Out'
        }]
      }, {
        type: _md_md_module__WEBPACK_IMPORTED_MODULE_3__.NavItemType.NavbarLeft,
        title: 'Search',
        iconClass: 'fa fa-search'
      }, {
        type: _md_md_module__WEBPACK_IMPORTED_MODULE_3__.NavItemType.NavbarLeft,
        title: 'Account'
      }, {
        type: _md_md_module__WEBPACK_IMPORTED_MODULE_3__.NavItemType.NavbarLeft,
        title: 'Dropdown',
        dropdownItems: [{
          title: 'Action'
        }, {
          title: 'Another action'
        }, {
          title: 'Something'
        }, {
          title: 'Another action'
        }, {
          title: 'Something'
        }, 'separator', {
          title: 'Separated link'
        }]
      }, {
        type: _md_md_module__WEBPACK_IMPORTED_MODULE_3__.NavItemType.NavbarLeft,
        title: 'Log out'
      }];
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      this.runOnRouteChange();
    }
  }, {
    key: "isMap",
    value: function isMap() {
      if (this.location.prepareExternalUrl(this.location.path()) === '/maps/fullscreen') {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "runOnRouteChange",
    value: function runOnRouteChange() {
      if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        var elemMainPanel = document.querySelector('.main-panel');
        var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemMainPanel);
        ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemSidebar);
        ps.update();
      }
    }
  }, {
    key: "isMac",
    value: function isMac() {
      var bool = false;

      if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
        bool = true;
      }

      return bool;
    }
  }]);

  return AdminLayoutComponent;
}();

AdminLayoutComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location
  }];
};

AdminLayoutComponent.propDecorators = {
  sidebar: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: ['sidebar', {
      static: false
    }]
  }],
  navbar: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__.NavbarComponent, {
      static: false
    }]
  }]
};
AdminLayoutComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-layout',
  template: _admin_layout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], AdminLayoutComponent);


/***/ }),

/***/ 63589:
/*!**********************************************************************!*\
  !*** ./src/app/Admin/layouts/admin_layout/admin_layout.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Admin_layoutComponent": function() { return /* binding */ Admin_layoutComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _admin_layout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin_layout.component.html?ngResource */ 88201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 73903);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 // import { AuthenticationService } from 'src/app/_services';

var Admin_layoutComponent = /*#__PURE__*/function () {
  function Admin_layoutComponent(router, element) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Admin_layoutComponent);

    this.router = router;
    this.element = element;
    this.mobile_menu_visible = 0;
    this.sidebarVisible = false;
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Admin_layoutComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      if (localStorage.getItem("currentUser") != null) {
        this.user = JSON.parse(localStorage.getItem("currentUser"));
        console.log(this.user);
      }

      var navbar = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
      this._router = this.router.events.filter(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd;
      }).subscribe(function (event) {
        _this.sidebarClose();

        var $layer = document.getElementsByClassName('close-layer')[0];

        if ($layer) {
          $layer.remove();
        }
      });
    }
  }, {
    key: "sidebarOpen",
    value: function sidebarOpen() {
      var $toggle = document.getElementsByClassName('navbar-toggler')[0];
      var toggleButton = this.toggleButton;
      var body = document.getElementsByTagName('body')[0];
      setTimeout(function () {
        toggleButton.classList.add('toggled');
      }, 500);
      body.classList.add('nav-open');
      setTimeout(function () {
        $toggle.classList.add('toggled');
      }, 430);
      var $layer = document.createElement('div');
      $layer.setAttribute('class', 'close-layer');

      if (body.querySelectorAll('.wrapper-full-page')) {
        document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
      } else if (body.classList.contains('off-canvas-sidebar')) {
        document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
      }

      setTimeout(function () {
        $layer.classList.add('visible');
      }, 100);

      $layer.onclick = function () {
        body.classList.remove('nav-open');
        this.mobile_menu_visible = 0;
        this.sidebarVisible = false;
        $layer.classList.remove('visible');
        setTimeout(function () {
          $layer.remove();
          $toggle.classList.remove('toggled');
        }, 400);
      }.bind(this);

      body.classList.add('nav-open');
      this.mobile_menu_visible = 1;
      this.sidebarVisible = true;
    }
  }, {
    key: "sidebarClose",
    value: function sidebarClose() {
      var $toggle = document.getElementsByClassName('navbar-toggler')[0];
      var body = document.getElementsByTagName('body')[0];
      this.toggleButton.classList.remove('toggled');
      var $layer = document.createElement('div');
      $layer.setAttribute('class', 'close-layer');
      this.sidebarVisible = false;
      body.classList.remove('nav-open'); // $('html').removeClass('nav-open');

      body.classList.remove('nav-open');

      if ($layer) {
        $layer.remove();
      }

      setTimeout(function () {
        $toggle.classList.remove('toggled');
      }, 400);
      this.mobile_menu_visible = 0;
    }
  }, {
    key: "sidebarToggle",
    value: function sidebarToggle() {
      if (this.sidebarVisible === false) {
        this.sidebarOpen();
      } else {
        this.sidebarClose();
      }
    }
  }, {
    key: "logout",
    value: function logout() {
      // this.authService.logout();
      window.location.href = "";
      localStorage.clear();
      window.location.reload();
    }
  }, {
    key: "getGuest",
    value: function getGuest() {
      this.router.navigate(["/guest/home"]);
    }
  }, {
    key: "getHost",
    value: function getHost() {
      this.router.navigate(["/host/home"]);
    }
  }]);

  return Admin_layoutComponent;
}();

Admin_layoutComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef
  }];
};

Admin_layoutComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-admin_layout',
  template: _admin_layout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], Admin_layoutComponent);


/***/ }),

/***/ 53830:
/*!*************************************************************!*\
  !*** ./src/app/Admin/layouts/auth/auth-layout.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthLayoutComponent": function() { return /* binding */ AuthLayoutComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _auth_layout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-layout.component.html?ngResource */ 84306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _translation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../translation.service */ 52240);
/* harmony import */ var _i18n_en__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../i18n/en */ 45106);
/* harmony import */ var _i18n_fr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../i18n/fr */ 72255);
/* harmony import */ var _i18n_gr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../i18n/gr */ 27020);
/* harmony import */ var _i18n_it__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../i18n/it */ 53736);
/* harmony import */ var _i18n_sp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../i18n/sp */ 25768);
/* harmony import */ var _i18n_ch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../i18n/ch */ 79713);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




 // import { AuthenticationService } from 'src/app/_services';








var AuthLayoutComponent = /*#__PURE__*/function () {
  function AuthLayoutComponent(router, element, translationService) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AuthLayoutComponent);

    this.router = router;
    this.element = element;
    this.translationService = translationService;
    this.mobile_menu_visible = 0;
    this.currentLang = 'en';
    this.languages = [{
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
    } // { name: 'Spanisch', lang: 'sp' },
    // { name: 'Chinesisch', lang: 'ch' }
    ];
    this.sidebarVisible = false;
    this.translationService.addTranslation(_i18n_en__WEBPACK_IMPORTED_MODULE_4__.locale, _i18n_fr__WEBPACK_IMPORTED_MODULE_5__.locale, _i18n_gr__WEBPACK_IMPORTED_MODULE_6__.locale, _i18n_it__WEBPACK_IMPORTED_MODULE_7__.locale, _i18n_sp__WEBPACK_IMPORTED_MODULE_8__.locale, _i18n_ch__WEBPACK_IMPORTED_MODULE_9__.locale);
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AuthLayoutComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      if (localStorage.getItem("currentlang") == null) {
        localStorage.setItem("currentlang", this.currentLang);
        this.currentLang = localStorage.getItem("currentlang");
      } else {
        this.currentLang = localStorage.getItem("currentlang");
      }

      this.pic = localStorage.getItem('pic');

      if (localStorage.getItem("currentUser") != null) {
        this.user = JSON.parse(localStorage.getItem("currentUser"));
        console.log(this.user);
      }

      var navbar = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
      this._router = this.router.events.filter(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationEnd;
      }).subscribe(function (event) {
        _this.sidebarClose();

        var $layer = document.getElementsByClassName('close-layer')[0];

        if ($layer) {
          $layer.remove();
        }
      });
    }
  }, {
    key: "sidebarOpen",
    value: function sidebarOpen() {
      var $toggle = document.getElementsByClassName('navbar-toggler')[0];
      var toggleButton = this.toggleButton;
      var body = document.getElementsByTagName('body')[0];
      setTimeout(function () {
        toggleButton.classList.add('toggled');
      }, 500);
      body.classList.add('nav-open');
      setTimeout(function () {
        $toggle.classList.add('toggled');
      }, 430);
      var $layer = document.createElement('div');
      $layer.setAttribute('class', 'close-layer');

      if (body.querySelectorAll('.wrapper-full-page')) {
        document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
      } else if (body.classList.contains('off-canvas-sidebar')) {
        document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
      }

      setTimeout(function () {
        $layer.classList.add('visible');
      }, 100);

      $layer.onclick = function () {
        body.classList.remove('nav-open');
        this.mobile_menu_visible = 0;
        this.sidebarVisible = false;
        $layer.classList.remove('visible');
        setTimeout(function () {
          $layer.remove();
          $toggle.classList.remove('toggled');
        }, 400);
      }.bind(this);

      body.classList.add('nav-open');
      this.mobile_menu_visible = 1;
      this.sidebarVisible = true;
    }
  }, {
    key: "sidebarClose",
    value: function sidebarClose() {
      var $toggle = document.getElementsByClassName('navbar-toggler')[0];
      var body = document.getElementsByTagName('body')[0];
      this.toggleButton.classList.remove('toggled');
      var $layer = document.createElement('div');
      $layer.setAttribute('class', 'close-layer');
      this.sidebarVisible = false;
      body.classList.remove('nav-open'); // $('html').removeClass('nav-open');

      body.classList.remove('nav-open');

      if ($layer) {
        $layer.remove();
      }

      setTimeout(function () {
        $toggle.classList.remove('toggled');
      }, 400);
      this.mobile_menu_visible = 0;
    }
  }, {
    key: "sidebarToggle",
    value: function sidebarToggle() {
      if (this.sidebarVisible === false) {
        this.sidebarOpen();
      } else {
        this.sidebarClose();
      }
    }
  }, {
    key: "logout",
    value: function logout() {
      // this.authService.logout();
      window.location.href = "";
      localStorage.clear();
      window.location.reload();
    }
  }, {
    key: "getGuest",
    value: function getGuest() {
      this.router.navigate(["/guest/home"]);
    }
  }, {
    key: "getHost",
    value: function getHost() {
      this.router.navigate(["/host/home"]);
    }
  }, {
    key: "onLangChange",
    value: function onLangChange(currentLang) {
      localStorage.setItem("currentlang", currentLang.value);
      this.translationService.useLang(currentLang.value);
    }
  }]);

  return AuthLayoutComponent;
}();

AuthLayoutComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ElementRef
  }, {
    type: _translation_service__WEBPACK_IMPORTED_MODULE_3__.TranslationService
  }];
};

AuthLayoutComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-layout',
  template: _auth_layout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], AuthLayoutComponent);


/***/ }),

/***/ 18473:
/*!***************************************************************!*\
  !*** ./src/app/Admin/layouts/guest/guest-layout.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GuestLayoutComponent": function() { return /* binding */ GuestLayoutComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _guest_layout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guest-layout.component.html?ngResource */ 8177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services */ 9949);
/* harmony import */ var src_app_services_data_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/data.services */ 7619);
/* harmony import */ var src_app_services_apple_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/apple.service */ 13381);
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-intl-tel-input */ 87555);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularx-social-login */ 84507);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ 77199);
/* harmony import */ var firebase_messaging__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/messaging */ 94659);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var GuestLayoutComponent = /*#__PURE__*/function () {
  function GuestLayoutComponent(router, _formBuilder, cdf, authService, dataService, element, socialAuthService, appleService) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GuestLayoutComponent);

    this.router = router;
    this._formBuilder = _formBuilder;
    this.cdf = cdf;
    this.authService = authService;
    this.dataService = dataService;
    this.element = element;
    this.socialAuthService = socialAuthService;
    this.appleService = appleService;
    this.mobile_menu_visible = 0;
    this.step = 0;
    this.user = null;
    this.showAlert = false;
    this.errorMessage = '';
    this.url = null;
    this.role = null;
    this.forgot_password_email = null;
    this.passtext = "password";
    this.ishidden = true;
    this.passtext1 = "password";
    this.ishidden1 = true;
    this.page = 0;
    this.notifications = [];
    this.unread_notifications = 0;
    this.new_notification_status = false;
    this.moment = moment__WEBPACK_IMPORTED_MODULE_9__;
    this.isLoggedin = null;
    this.plan_id = null;
    this.level = null;
    this.plans = null;
    this.paypalInterval = null;
    this.separateDialCode = false;
    this.SearchCountryField = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_10__.SearchCountryField;
    this.CountryISO = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_10__.CountryISO;
    this.preferredCountries = [ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_10__.CountryISO.UnitedStates, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_10__.CountryISO.UnitedKingdom];
    this.fcm_token = null;
    this.sidebarVisible = false;
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(GuestLayoutComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this.url = this.router.url; // Initialize Firebase

      this.pic = localStorage.getItem('pic');
      var firebaseConfig = {
        apiKey: "AIzaSyALplqbC_JECI84zM4OSYV0zhmzlrml46s",
        authDomain: "fresh-rain-320914.firebaseapp.com",
        projectId: "fresh-rain-320914",
        storageBucket: "fresh-rain-320914.appspot.com",
        messagingSenderId: "312394151153",
        appId: "1:312394151153:web:fe030c2ad8682ba160e550",
        measurementId: "G-2SDBP32RL6"
      };
      var app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_7__.initializeApp)(firebaseConfig);
      var messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
      (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
        vapidKey: 'BPupbI-8TFUeiPhfTI43JW5BZ7uDd3vAqba1w1YHR3H8mqIswifdGByxr0Vbz0ENqjJyFjOi0ptyqM5w3wBH3bc'
      }).then(function (currentToken) {
        if (currentToken) {
          localStorage.setItem('fcm_token', currentToken);
          _this.fcm_token = currentToken; // Track the token -> client mapping, by sending to backend server
          // show on the UI that permission is secured
        } else {
          console.log('No registration token available. Request permission to generate one.'); // shows on the UI that permission is required 
        }
      }).catch(function (err) {
        console.log('An error occurred while retrieving token. ', err); // catch error while creating client token
      });

      if (localStorage.getItem("token") != null) {
        this.user = 'exists';
        this.role = localStorage.getItem('role');
      }

      this.getNotifications();
      (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.onMessage)(messaging, function (payload) {
        if (localStorage.getItem("token") != null) {
          _this.getNotifications();
        }
      });
      var navbar = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
      this._router = this.router.events.filter(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_11__.NavigationEnd;
      }).subscribe(function (event) {
        _this.sidebarClose();

        var $layer = document.getElementsByClassName('close-layer')[0];

        if ($layer) {
          $layer.remove();
        }
      });
      this.registerForm = this._formBuilder.group({
        fname: null,
        lname: null,
        email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.email],
        password: '',
        role: 'guest',
        contact_no: null,
        address: null,
        website: null,
        vat_no: null,
        pic: null
      });
      this.loginForm = this._formBuilder.group({
        email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.email],
        password: ''
      });
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
      this.socialAuthService.authState.subscribe(function (user) {
        _this.socialUser = user;
        _this.isLoggedin = user != null;
      });
    }
  }, {
    key: "getNotifications",
    value: function getNotifications() {
      var _this2 = this;

      this.new_notification_status = false;

      if (this.notifications.length < 10) {
        this.page = 1;
      } else {
        this.page = this.page + 1;
      }

      if (localStorage.getItem("token") == null) {
        return;
      }

      this.dataService.get('get-notification/' + this.page).then(function (result) {
        for (var i = 0; i < result.data.length; i++) {
          _this2.notifications.push(result.data[i]);

          if (result.data[i].read_status == 0) {
            _this2.unread_notifications = _this2.unread_notifications + 1;
          }
        }

        if (result.data == []) {
          _this2.new_notification_status = true;
        }

        _this2.cdf.detectChanges();
      });
    }
  }, {
    key: "sidebarOpen",
    value: function sidebarOpen() {
      var $toggle = document.getElementsByClassName('navbar-toggler')[0];
      var toggleButton = this.toggleButton;
      var body = document.getElementsByTagName('body')[0];
      setTimeout(function () {
        toggleButton.classList.add('toggled');
      }, 500);
      body.classList.add('nav-open');
      setTimeout(function () {
        $toggle.classList.add('toggled');
      }, 430);
      var $layer = document.createElement('div');
      $layer.setAttribute('class', 'close-layer');

      if (body.querySelectorAll('.wrapper-full-page')) {
        document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
      } else if (body.classList.contains('off-canvas-sidebar')) {
        document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
      }

      setTimeout(function () {
        $layer.classList.add('visible');
      }, 100);

      $layer.onclick = function () {
        body.classList.remove('nav-open');
        this.mobile_menu_visible = 0;
        this.sidebarVisible = false;
        $layer.classList.remove('visible');
        setTimeout(function () {
          $layer.remove();
          $toggle.classList.remove('toggled');
        }, 400);
      }.bind(this);

      body.classList.add('nav-open');
      this.mobile_menu_visible = 1;
      this.sidebarVisible = true;
    }
  }, {
    key: "sidebarClose",
    value: function sidebarClose() {
      var $toggle = document.getElementsByClassName('navbar-toggler')[0];
      var body = document.getElementsByTagName('body')[0];
      this.toggleButton.classList.remove('toggled');
      var $layer = document.createElement('div');
      $layer.setAttribute('class', 'close-layer');
      this.sidebarVisible = false;
      body.classList.remove('nav-open'); // $('html').removeClass('nav-open');

      body.classList.remove('nav-open');

      if ($layer) {
        $layer.remove();
      }

      setTimeout(function () {
        $toggle.classList.remove('toggled');
      }, 400);
      this.mobile_menu_visible = 0;
    }
  }, {
    key: "sidebarToggle",
    value: function sidebarToggle() {
      if (this.sidebarVisible === false) {
        this.sidebarOpen();
      } else {
        this.sidebarClose();
      }
    }
  }, {
    key: "logout",
    value: function logout() {
      var _this3 = this;

      var data = {
        fcm_token: localStorage.getItem('fcm_token')
      };
      this.dataService.post('logout', data).then(function (result) {
        _this3.user = null;
        _this3.isLoggedin = null;
        _this3.pic = null;
        localStorage.clear();

        _this3.cdf.detectChanges();

        _this3.router.navigate(['/guest/home']);
      });
    }
  }, {
    key: "login",
    value: function login() {
      var _this4 = this;

      this.showAlert = false;

      if (this.loginForm.invalid) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
          position: 'center',
          icon: 'error',
          text: 'Please Fill All Required Fields',
          showConfirmButton: false,
          timer: 2500
        });
        this.cdf.detectChanges();
      }

      var formData = this.loginForm.getRawValue();
      var data = {
        email: formData.email,
        password: formData.password,
        fcm_token: this.fcm_token
      };
      this.authService.post('login', data).then(function (result) {
        if (result.success == true) {
          localStorage.setItem('token', result.data.token);
          localStorage.setItem('role', result.data.user.role);
          localStorage.setItem('id', result.data.user.id);
          localStorage.setItem('plan', result.data.user.plan);
          localStorage.setItem('pic', result.data.user.pic);

          _this4.router.navigate(['/guestportal/bookinglist']);
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
            position: 'center',
            icon: 'error',
            text: 'Wrong Credentials',
            showConfirmButton: false,
            timer: 2500
          });
        }

        _this4.cdf.detectChanges();
      }, function (error) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
          position: 'center',
          icon: 'error',
          text: 'Wrong Credentials',
          showConfirmButton: false,
          timer: 2500
        });
        formData.password = null;

        _this4.cdf.detectChanges();
      });
    }
  }, {
    key: "registerValidation",
    value: function registerValidation() {
      if (this.registerForm.invalid) {
        var invalid = [];
        var controls = this.registerForm.controls;

        for (var name in controls) {
          if (controls[name].invalid) {
            invalid.push(name);
          }
        }

        if (invalid[0] == 'fname') {
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
            position: 'center',
            icon: 'error',
            text: 'Please Provide First Name With Minimum 4 Chars At Least',
            showConfirmButton: false,
            timer: 2500
          });
        } else if (invalid[0] == 'lname') {
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
            position: 'center',
            icon: 'error',
            text: 'Please Provide Last Name With Minimum 4 Chars At Least',
            showConfirmButton: false,
            timer: 2500
          });
        } else if (invalid[0] == 'contact_no') {
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
            position: 'center',
            icon: 'error',
            text: 'Please Provide Valid Phone Number. You may see placeholder for phone number format.',
            showConfirmButton: false,
            timer: 2500
          });
        } else if (invalid[0] == 'website') {
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
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

      this.step = 2;
      this.cdf.detectChanges();
    }
  }, {
    key: "register",
    value: function register() {
      var _this5 = this;

      this.showAlert = false;
      var otp = $('#otp').val();

      if (otp == null || otp == '') {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
          position: 'center',
          icon: 'error',
          text: 'Please Provide OTP Code',
          showConfirmButton: false,
          timer: 2500
        });
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
        pic: null,
        fcm_token: this.fcm_token
      };
      this.dataService.post('test-another', otpData).then(function (result) {
        if (result.success == true) {
          _this5.authService.post('registration', data).then(function (result) {
            if (result.success == true) {
              localStorage.setItem('token', result.data.token);
              localStorage.setItem('role', result.data.user.role);
              localStorage.setItem('id', result.data.user.id);

              _this5.router.navigate(['/guestportal/bookinglist']);
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
              text: 'Something went wrong. Please try again.',
              showConfirmButton: false,
              timer: 2500
            });

            _this5.cdf.detectChanges();
          });
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
            position: 'center',
            icon: 'error',
            text: 'OTP code not valid.',
            showConfirmButton: false,
            timer: 2500
          });
        }

        _this5.cdf.detectChanges();
      });
    }
  }, {
    key: "signinModal",
    value: function signinModal() {
      this.showAlert = false;
      this.errorMessage = null;
      $(".bd-example-modal-lg1").modal('show');
      $(".signupModal").modal('hide');
      this.registerForm = this._formBuilder.group({
        fname: null,
        lname: null,
        email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.email],
        password: '',
        role: 'guest',
        contact_no: null,
        address: null,
        website: null,
        vat_no: null,
        pic: null
      });
    }
  }, {
    key: "forgotPasswordModal",
    value: function forgotPasswordModal() {
      this.showAlert = false;
      this.errorMessage = null;
      $(".bd-example-modal-lg1").modal('hide');
      $("#forgot-password").modal('toggle');
      this.loginForm = this._formBuilder.group({
        email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.email],
        password: ''
      });
    }
  }, {
    key: "signupModal",
    value: function signupModal() {
      this.showAlert = false;
      this.errorMessage = null;
      $(".bd-example-modal-lg1").modal('hide');
      $(".signupModal").modal('show');
      this.loginForm = this._formBuilder.group({
        email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.email],
        password: ''
      });
    }
  }, {
    key: "sendOTP",
    value: function sendOTP() {
      var _this6 = this;

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
        var data = {
          email: formData.email
        };
        this.dataService.post('test-me', data).then(function (result) {
          if (result.success == true) {
            _this6.step = 1;
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
              position: 'center',
              icon: 'error',
              text: result.error.message,
              showConfirmButton: false,
              timer: 2500
            });
          }

          _this6.cdf.detectChanges();
        });
      }
    }
  }, {
    key: "verifyEmail",
    value: function verifyEmail() {
      var _this7 = this;

      this.errorMessage = null;
      this.showAlert = false;

      if (this.verifyEmailForm.invalid) {
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

      var formData = this.verifyEmailForm.getRawValue();
      this.forgot_password_email = formData.email;
      var data = {
        email: this.forgot_password_email
      };
      this.dataService.post('verify-email', data).then(function (result) {
        if (result.success == true) {
          $('#vEmail').prop('hidden', true);
          $('#vForgotPasswordOtp').prop('hidden', false);

          _this7.verifyEmailForm.controls['email'].setValue(null);
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
            position: 'center',
            icon: 'error',
            text: 'Something went wrong. Please try again.',
            showConfirmButton: false,
            timer: 2500
          });
        }

        _this7.cdf.detectChanges();
      });
    }
  }, {
    key: "verifyForgoPasswordOtp",
    value: function verifyForgoPasswordOtp() {
      var _this8 = this;

      this.errorMessage = null;
      this.showAlert = false;

      if (this.verifyForgotPasswordOtpForm.invalid) {
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

      var formData = this.verifyForgotPasswordOtpForm.getRawValue();
      var data = {
        email: this.forgot_password_email,
        otp: formData.otp
      };
      this.dataService.post('verify-forgot-password-otp', data).then(function (result) {
        if (result.success == true) {
          $('#vForgotPasswordOtp').prop('hidden', true);
          $('#uPassword').prop('hidden', false);

          _this8.verifyForgotPasswordOtpForm.controls['otp'].setValue(null);
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
            position: 'center',
            icon: 'error',
            text: 'Something went wrong. Please try again.',
            showConfirmButton: false,
            timer: 2500
          });
        }

        _this8.cdf.detectChanges();
      });
    }
  }, {
    key: "updatePasswordOtp",
    value: function updatePasswordOtp() {
      var _this9 = this;

      this.errorMessage = null;
      this.showAlert = false;

      if (this.updatePasswordForm.invalid) {
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

      var formData = this.updatePasswordForm.getRawValue();

      if (formData.password != formData.confirm_password) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
          position: 'center',
          icon: 'error',
          text: 'Password does not match',
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
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
            position: 'center',
            icon: 'success',
            title: 'Success',
            showConfirmButton: false,
            timer: 2500
          });
          $("#forgot-password").modal('toggle');

          _this9.updatePasswordForm.controls['password'].setValue(null);

          _this9.updatePasswordForm.controls['confirm_password'].setValue(null);

          $(".bd-example-modal-lg1").modal('show');
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
            position: 'center',
            icon: 'error',
            text: 'Something went wrong. Please try again.',
            showConfirmButton: false,
            timer: 2500
          });
        }

        _this9.cdf.detectChanges();
      });
    }
  }, {
    key: "loginWithFacebook",
    value: function loginWithFacebook() {
      var _this10 = this;

      this.socialAuthService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_13__.FacebookLoginProvider.PROVIDER_ID).then(function (userData) {
        _this10.socialUser = userData;
        var data = {
          fname: _this10.socialUser.firstName,
          lname: _this10.socialUser.lastName,
          email: _this10.socialUser.email,
          fcm_token: _this10.fcm_token
        };

        _this10.dataService.post('social-login', data).then(function (result) {
          if (result.success == true) {
            localStorage.setItem('token', result.data.token);
            localStorage.setItem('role', result.data.user.role);
            localStorage.setItem('id', result.data.user.id);

            _this10.router.navigate(['/guestportal/bookinglist']);
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
              position: 'center',
              icon: 'error',
              text: 'Something went wrong. Please try agian.',
              showConfirmButton: false,
              timer: 2500
            });
          }

          _this10.cdf.detectChanges();
        });
      });
    }
  }, {
    key: "visitHost",
    value: function visitHost() {
      var _this11 = this;

      if (localStorage.getItem('plan') != null) {
        localStorage.setItem('role', 'host');
        this.router.navigate(['/hostportal/offerlist']);
      } else {
        this.dataService.get('host/get_plan').then(function (result) {
          _this11.plans = result.data;

          _this11.cdf.detectChanges();
        });
        $('.try-offers1').modal('show');
      }
    }
  }, {
    key: "buyPlan",
    value: function buyPlan(id, level, amount) {
      this.plan_id = id;
      this.level = level;
      this.showAlert = false;
      $('.try-offers1').modal('hide');
      $('#plan').modal('show');
    }
  }, {
    key: "subscribePlan",
    value: function subscribePlan() {
      var _this12 = this;

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
            $('#plan').modal('hide');

            _this12.updatePlan();

            _this12.planForm = _this12._formBuilder.group({
              plan_id: null,
              type: 'card',
              number: null,
              month: null,
              year: null,
              cvc: null
            });
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
              position: 'center',
              icon: 'error',
              text: 'Something went wrong. Please try again.',
              showConfirmButton: false,
              timer: 2500
            });

            _this12.cdf.detectChanges();

            return;
          }
        });
      }
    }
  }, {
    key: "signInWithGoogle",
    value: function signInWithGoogle() {
      var _this13 = this;

      this.socialAuthService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_13__.GoogleLoginProvider.PROVIDER_ID).then(function (userData) {
        _this13.socialUser = userData;
        var data = {
          fname: _this13.socialUser.firstName,
          lname: _this13.socialUser.lastName,
          email: _this13.socialUser.email,
          fcm_token: _this13.fcm_token
        };

        _this13.dataService.post('social-login', data).then(function (result) {
          if (result.success == true) {
            localStorage.setItem('token', result.data.token);
            localStorage.setItem('role', result.data.user.role);
            localStorage.setItem('id', result.data.user.id);

            _this13.router.navigate(['/guestportal/bookinglist']);
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
              position: 'center',
              icon: 'error',
              text: 'Something went wrong. Please try agian.',
              showConfirmButton: false,
              timer: 2500
            });
          }

          _this13.cdf.detectChanges();
        });
      });
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
    }
  }, {
    key: "showPaymentSection",
    value: function showPaymentSection() {
      var _this14 = this;

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

          _this14.paypalInterval = setInterval(function () {
            _this14.verify();
          }, 5000);
        });
      }
    }
  }, {
    key: "updatePlan",
    value: function updatePlan() {
      var _this15 = this;

      var data = {
        plan: this.level
      };
      this.dataService.post('host/update-plan-info', data).then(function (result) {
        if (result.success = true) {
          localStorage.setItem('role', 'host');
          localStorage.setItem('data', JSON.stringify(result.data));
          localStorage.setItem('plan', result.data.plan);

          _this15.router.navigate(['/hostportal/offerlist']);
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
            position: 'center',
            icon: 'error',
            text: 'Something went wrong. Please try again.',
            showConfirmButton: false,
            timer: 2500
          });

          _this15.cdf.detectChanges();

          return;
        }
      }, function (error) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
          position: 'center',
          icon: 'error',
          text: 'Something went wrong. Please try again.',
          showConfirmButton: false,
          timer: 2500
        });

        _this15.cdf.detectChanges();

        return;
      });
    }
  }, {
    key: "verify",
    value: function verify() {
      var _this16 = this;

      this.dataService.get('guest/verify/paypal/success').then(function (result) {
        if (result.success == true && result.data == 1) {
          $('#plan').modal('hide');
          clearInterval(_this16.paypalInterval);

          _this16.updatePlan();

          _this16.planForm = _this16._formBuilder.group({
            plan_id: null,
            type: 'card',
            number: null,
            month: null,
            year: null,
            cvc: null
          });
        }
      });
    }
  }, {
    key: "defaultPlan",
    value: function defaultPlan(level) {
      var _this17 = this;

      var data = {
        plan: level
      };
      this.dataService.post('host/update-plan-info', data).then(function (result) {
        if (result.success = true) {
          localStorage.setItem('role', 'host');
          localStorage.setItem('plan', level);

          _this17.router.navigate(['/hostportal/offerlist']);
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
            position: 'center',
            icon: 'error',
            text: 'Something went wrong. Please r',
            showConfirmButton: false,
            timer: 2500
          });

          _this17.cdf.detectChanges();

          return;
        }
      }, function (error) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
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
    key: "readAllNotifications",
    value: function readAllNotifications() {
      var _this18 = this;

      this.dataService.get('read-all-notification').then(function (result) {
        _this18.unread_notifications = 0;
        $('.readAllNotifications').css("background-color", "white");

        _this18.cdf.detectChanges();
      });
    }
  }, {
    key: "readNotification",
    value: function readNotification(id, status, navigation) {
      var _this19 = this;

      if (status != 1) {
        var data = {
          id: id
        };
        this.dataService.post('read-notification', data).then(function (result) {
          if (_this19.unread_notifications != 0) {
            _this19.unread_notifications = _this19.unread_notifications - 1;

            _this19.cdf.detectChanges();
          }

          $('#' + id + 'bg').css("background-color", "white");
        });
      }

      this.cdf.detectChanges();

      if (navigation.includes('dispute') || navigation.includes('withdraw') || navigation.includes('chat')) {
        //for all these will navigate to booking list
        this.router.navigate(['/guestportal/bookinglist']);
      }
    }
  }, {
    key: "loginWithApple",
    value: function loginWithApple() {
      this.appleService.signIn();
    }
  }]);

  return GuestLayoutComponent;
}();

GuestLayoutComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef
  }, {
    type: src_app_services__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService
  }, {
    type: src_app_services_data_services__WEBPACK_IMPORTED_MODULE_4__.DataService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ElementRef
  }, {
    type: angularx_social_login__WEBPACK_IMPORTED_MODULE_13__.SocialAuthService
  }, {
    type: src_app_services_apple_service__WEBPACK_IMPORTED_MODULE_5__.AppleLoginService
  }];
};

GuestLayoutComponent.propDecorators = {
  registerNgForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
    args: ['registerNgForm']
  }],
  loginNgForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
    args: ['loginNgForm']
  }],
  verifyEmailNgForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
    args: ['verifyEmailNgForm']
  }],
  verifyForgotPasswordOtpNgForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
    args: ['verifyForgotPasswordOtpNgForm']
  }],
  updatePasswordNgForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
    args: ['updatePasswordNgForm']
  }],
  planNgForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
    args: ['planNgForm']
  }]
};
GuestLayoutComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-layout',
  template: _guest_layout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], GuestLayoutComponent);


/***/ }),

/***/ 8851:
/*!*************************************************************!*\
  !*** ./src/app/Admin/layouts/host/host-layout.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HostLayoutComponent": function() { return /* binding */ HostLayoutComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _host_layout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./host-layout.component.html?ngResource */ 52220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services */ 9949);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularx-social-login */ 84507);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ 77199);
/* harmony import */ var firebase_messaging__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/messaging */ 94659);
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-intl-tel-input */ 87555);
/* harmony import */ var src_app_services_data_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/data.services */ 7619);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_services_apple_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_services/apple.service */ 13381);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var HostLayoutComponent = /*#__PURE__*/function () {
  function HostLayoutComponent(router, _formBuilder, cdf, authService, dataService, element, socialAuthService, appleService) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HostLayoutComponent);

    this.router = router;
    this._formBuilder = _formBuilder;
    this.cdf = cdf;
    this.authService = authService;
    this.dataService = dataService;
    this.element = element;
    this.socialAuthService = socialAuthService;
    this.appleService = appleService;
    this.paymentHandler = null;
    this.mobile_menu_visible = 0;
    this.step = 0;
    this.step1 = 0;
    this.user = null;
    this.showAlert = false;
    this.email = null;
    this.errorMessage = '';
    this.token = null;
    this.forgot_password_email = null;
    this.passtext = "password";
    this.ishidden = true;
    this.passtext1 = "password";
    this.ishidden1 = true;
    this.fcm_token = null;
    this.isLoggedin = null;
    this.plan_id = null;
    this.level = null;
    this.plans = null;
    this.paypalInterval = null;
    this.page = 0;
    this.notifications = [];
    this.unread_notifications = 0;
    this.new_notification_status = false;
    this.moment = moment__WEBPACK_IMPORTED_MODULE_8__;
    this.separateDialCode = false;
    this.SearchCountryField = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_10__.SearchCountryField;
    this.CountryISO = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_10__.CountryISO;
    this.preferredCountries = [ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_10__.CountryISO.UnitedStates, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_10__.CountryISO.UnitedKingdom];
    this.sidebarVisible = false;
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(HostLayoutComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      // Initialize Firebase
      this.pic = localStorage.getItem('pic');
      var firebaseConfig = {
        apiKey: "AIzaSyALplqbC_JECI84zM4OSYV0zhmzlrml46s",
        authDomain: "fresh-rain-320914.firebaseapp.com",
        projectId: "fresh-rain-320914",
        storageBucket: "fresh-rain-320914.appspot.com",
        messagingSenderId: "312394151153",
        appId: "1:312394151153:web:fe030c2ad8682ba160e550",
        measurementId: "G-2SDBP32RL6"
      };
      var app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_5__.initializeApp)(firebaseConfig);
      var messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_6__.getMessaging)(app);
      (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_6__.getToken)(messaging, {
        vapidKey: 'BPupbI-8TFUeiPhfTI43JW5BZ7uDd3vAqba1w1YHR3H8mqIswifdGByxr0Vbz0ENqjJyFjOi0ptyqM5w3wBH3bc'
      }).then(function (currentToken) {
        if (currentToken) {
          localStorage.setItem('fcm_token', currentToken);
          _this.fcm_token = currentToken; // Track the token -> client mapping, by sending to backend server
          // show on the UI that permission is secured
        } else {
          console.log('No registration token available. Request permission to generate one.'); // shows on the UI that permission is required 
        }
      }).catch(function (err) {
        console.log('An error occurred while retrieving token. ', err); // catch error while creating client token
      });

      if (localStorage.getItem("token") != null && localStorage.getItem('role') == 'host') {
        this.user = 'exists';
      } else {// this.logout();
      }

      var navbar = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
      this._router = this.router.events.filter(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_11__.NavigationEnd;
      }).subscribe(function (event) {
        _this.sidebarClose();

        var $layer = document.getElementsByClassName('close-layer')[0];

        if ($layer) {
          $layer.remove();
        }
      });
      this.registerForm = this._formBuilder.group({
        fname: null,
        lname: null,
        email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.email],
        password: '',
        role: 'host',
        contact_no: null,
        address: null,
        website: null,
        vat_no: null,
        pic: null
      });
      this.loginForm = this._formBuilder.group({
        email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.email],
        password: ''
      });
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
      this.socialAuthService.authState.subscribe(function (user) {
        _this.socialUser = user;
        _this.isLoggedin = user != null;
      });
      this.getNotifications();
      (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_6__.onMessage)(messaging, function (payload) {
        if (localStorage.getItem("token") != null) {
          _this.getNotifications();
        }
      });
    }
  }, {
    key: "sidebarOpen",
    value: function sidebarOpen() {
      var $toggle = document.getElementsByClassName('navbar-toggler')[0];
      var toggleButton = this.toggleButton;
      var body = document.getElementsByTagName('body')[0];
      setTimeout(function () {
        toggleButton.classList.add('toggled');
      }, 500);
      body.classList.add('nav-open');
      setTimeout(function () {
        $toggle.classList.add('toggled');
      }, 430);
      var $layer = document.createElement('div');
      $layer.setAttribute('class', 'close-layer');

      if (body.querySelectorAll('.wrapper-full-page')) {
        document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
      } else if (body.classList.contains('off-canvas-sidebar')) {
        document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
      }

      setTimeout(function () {
        $layer.classList.add('visible');
      }, 100);

      $layer.onclick = function () {
        body.classList.remove('nav-open');
        this.mobile_menu_visible = 0;
        this.sidebarVisible = false;
        $layer.classList.remove('visible');
        setTimeout(function () {
          $layer.remove();
          $toggle.classList.remove('toggled');
        }, 400);
      }.bind(this);

      body.classList.add('nav-open');
      this.mobile_menu_visible = 1;
      this.sidebarVisible = true;
    }
  }, {
    key: "sidebarClose",
    value: function sidebarClose() {
      var $toggle = document.getElementsByClassName('navbar-toggler')[0];
      var body = document.getElementsByTagName('body')[0];
      this.toggleButton.classList.remove('toggled');
      var $layer = document.createElement('div');
      $layer.setAttribute('class', 'close-layer');
      this.sidebarVisible = false;
      body.classList.remove('nav-open'); // $('html').removeClass('nav-open');

      body.classList.remove('nav-open');

      if ($layer) {
        $layer.remove();
      }

      setTimeout(function () {
        $toggle.classList.remove('toggled');
      }, 400);
      this.mobile_menu_visible = 0;
    }
  }, {
    key: "sidebarToggle",
    value: function sidebarToggle() {
      if (this.sidebarVisible === false) {
        this.sidebarOpen();
      } else {
        this.sidebarClose();
      }
    }
  }, {
    key: "logout",
    value: function logout() {
      var _this2 = this;

      var data = {
        fcm_token: localStorage.getItem('fcm_token')
      };
      this.dataService.post('logout', data).then(function (result) {
        _this2.user = null;
        _this2.pic = null;
        localStorage.clear();

        _this2.router.navigate(['/host/home']);

        _this2.cdf.detectChanges();
      });
    }
  }, {
    key: "login",
    value: function login() {
      var _this3 = this;

      this.showAlert = false;

      if (this.loginForm.invalid) {
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

      var formData = this.loginForm.getRawValue();
      var data = {
        email: formData.email,
        password: formData.password,
        fcm_token: this.fcm_token
      };
      this.authService.post('login', data).then(function (result) {
        if (result.success == true) {
          _this3.token = result.data.token;
          console.log("Login Detail");
          console.log(result);
          localStorage.setItem('token', result.data.token);
          localStorage.setItem('role', result.data.user.role);
          localStorage.setItem('data', JSON.stringify(result.data.user));
          localStorage.setItem('plan', result.data.user.plan);
          localStorage.setItem('pic', result.data.user.pic);
          localStorage.setItem('id', result.data.user.id);

          _this3.cdf.detectChanges();

          if (result.data.user.plan == null) {
            $('.bd-example-modal-lg1').modal('hide');

            _this3.getPlans();

            $('.try-offers1').modal('show'); // this.step1 = 1;

            _this3.loginForm = _this3._formBuilder.group({
              email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.email],
              password: ''
            });

            _this3.cdf.detectChanges();
          } else {
            _this3.router.navigate(['/hostportal/offerlist']);
          }
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            position: 'center',
            icon: 'error',
            text: 'Wrong Credentials',
            showConfirmButton: false,
            timer: 2500
          });
        }

        _this3.cdf.detectChanges();
      }, function (error) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
          position: 'center',
          icon: 'error',
          text: 'Wrong Credentials',
          showConfirmButton: false,
          timer: 2500
        });
        formData.password = null;

        _this3.cdf.detectChanges();
      });
    }
  }, {
    key: "registerValidation",
    value: function registerValidation() {
      if (this.registerForm.invalid) {
        var invalid = [];
        var controls = this.registerForm.controls;

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

      this.step = 2;
      this.cdf.detectChanges();
    }
  }, {
    key: "register",
    value: function register() {
      var _this4 = this;

      this.showAlert = false;
      var otp = $('#otp').val();

      if (otp == null || otp == '') {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
          position: 'center',
          icon: 'error',
          text: 'Please Provide OTP Code',
          showConfirmButton: false,
          timer: 2500
        });
        this.cdf.detectChanges();
        return;
      }

      var formData = this.registerForm.getRawValue();
      this.email = formData.email;
      var otpData = {
        email: formData.email,
        otp: otp
      };
      var data = {
        fname: formData.fname,
        lname: formData.lname,
        email: formData.email,
        password: formData.password,
        role: 'host',
        contact_no: formData.contact_no.nationalNumber,
        country_calling_code: formData.contact_no.dialCode,
        country_code: formData.contact_no.countryCode,
        address: formData.address,
        website: formData.website,
        vat_no: formData.vat_no,
        pic: null,
        fcm_token: this.fcm_token
      };
      this.dataService.post('test-another', otpData).then(function (result) {
        if (result.success == true) {
          _this4.authService.post('registration', data).then(function (result) {
            if (result.success == true) {
              if (result.data.user.plan == null) {
                _this4.token = result.data.token;
                localStorage.setItem('data', JSON.stringify(result.data));
                2;
                localStorage.setItem('token', result.data.token);
                localStorage.setItem('role', result.data.user.role);
                $('.signupModal').modal('hide');

                _this4.getPlans();

                $('.try-offers1').modal('show');
                _this4.registerForm = _this4._formBuilder.group({
                  fname: null,
                  lname: null,
                  email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.email],
                  password: '',
                  role: 'host',
                  contact_no: null,
                  address: null,
                  website: null,
                  vat_no: null,
                  pic: null
                }); //this.step=3;

                _this4.cdf.detectChanges();
              } else {
                localStorage.setItem('token', result.data.token);
                localStorage.setItem('role', result.data.user.role);
                localStorage.setItem('plan', result.data.user.plan);
                localStorage.setItem('pic', result.data.user.pic);

                _this4.router.navigate(['/hostportal/offerlist']);
              }
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                position: 'center',
                icon: 'error',
                text: 'Something went wrong. Please try again.',
                showConfirmButton: false,
                timer: 2500
              });
            }

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
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            position: 'center',
            icon: 'error',
            text: 'OTP code not valid.',
            showConfirmButton: false,
            timer: 2500
          });
        }

        _this4.cdf.detectChanges();
      });
    }
  }, {
    key: "signinModal",
    value: function signinModal() {
      this.showAlert = false;
      this.errorMessage = null;
      $(".signupModal").modal('hide');
      this.registerForm = this._formBuilder.group({
        fname: null,
        lname: null,
        email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.email],
        password: '',
        role: 'host',
        contact_no: null,
        address: null,
        website: null,
        vat_no: null,
        pic: null
      });
      $(".bd-example-modal-lg1").modal('show');
    }
  }, {
    key: "forgotPasswordModal",
    value: function forgotPasswordModal() {
      this.showAlert = false;
      this.errorMessage = null;
      $(".bd-example-modal-lg1").modal('hide');
      $("#forgot-password").modal('toggle');
      this.loginForm = this._formBuilder.group({
        email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.email],
        password: ''
      });
    }
  }, {
    key: "signupModal",
    value: function signupModal() {
      this.showAlert = false;
      this.errorMessage = null;
      $(".bd-example-modal-lg1").modal('hide');
      this.loginForm = this._formBuilder.group({
        email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.email],
        password: ''
      });
      $(".signupModal").modal('show');
    }
  }, {
    key: "sendOTP",
    value: function sendOTP() {
      var _this5 = this;

      this.showAlert = false;
      var formData = this.registerForm.getRawValue();

      if (formData.email == null) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
          position: 'center',
          icon: 'error',
          text: 'Please fill all required fields.',
          showConfirmButton: false,
          timer: 2500
        });
        this.cdf.detectChanges();
      } else {
        var data = {
          email: formData.email
        };
        this.dataService.post('test-me', data).then(function (result) {
          if (result.success == true) {
            _this5.step = 1;
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
              position: 'center',
              icon: 'error',
              text: 'Something went wrong. Please try again.',
              showConfirmButton: false,
              timer: 2500
            });
          }

          _this5.cdf.detectChanges();
        });
      }
    }
  }, {
    key: "buyPlan",
    value: function buyPlan(id, level, amount) {
      this.plan_id = id;
      this.level = level;
      this.showAlert = false;
      $('.try-offers1').modal('hide');
      $('#hostplan').modal('show');
    }
  }, {
    key: "subscribePlan",
    value: function subscribePlan() {
      var _this6 = this;

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

            _this6.updatePlan();
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
              position: 'center',
              icon: 'error',
              text: 'Something went wrong. Please try again.',
              showConfirmButton: false,
              timer: 2500
            });

            _this6.cdf.detectChanges();

            return;
          }
        });
      }
    }
  }, {
    key: "visitGuest",
    value: function visitGuest() {
      localStorage.setItem('role', 'guest');
      this.router.navigate(['/guestportal/bookinglist']);
    }
  }, {
    key: "verifyEmail",
    value: function verifyEmail() {
      var _this7 = this;

      this.errorMessage = null;
      this.showAlert = false;

      if (this.verifyEmailForm.invalid) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
          position: 'center',
          icon: 'error',
          text: 'Please fill all required fields',
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

        _this7.cdf.detectChanges();
      });
    }
  }, {
    key: "verifyForgoPasswordOtp",
    value: function verifyForgoPasswordOtp() {
      var _this8 = this;

      this.errorMessage = null;
      this.showAlert = false;

      if (this.verifyForgotPasswordOtpForm.invalid) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
          position: 'center',
          icon: 'error',
          text: 'Please fill all required fields.',
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

        _this8.cdf.detectChanges();
      });
    }
  }, {
    key: "updatePasswordOtp",
    value: function updatePasswordOtp() {
      var _this9 = this;

      this.errorMessage = null;
      this.showAlert = false;

      if (this.updatePasswordForm.invalid) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
          position: 'center',
          icon: 'error',
          text: 'Please fill all required fields',
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
          $("#forgot-password").modal('toggle');
          formData.password = null;
          formData.confirm_password = null;
          $(".bd-example-modal-lg1").modal('show');
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            position: 'center',
            icon: 'error',
            text: 'Something went wrong. Please try again.',
            showConfirmButton: false,
            timer: 2500
          });
        }

        _this9.cdf.detectChanges();
      });
    }
  }, {
    key: "loginWithFacebook",
    value: function loginWithFacebook() {
      var _this10 = this;

      this.socialAuthService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_13__.FacebookLoginProvider.PROVIDER_ID).then(function (userData) {
        _this10.socialUser = userData;
        var data = {
          fname: _this10.socialUser.firstName,
          lname: _this10.socialUser.lastName,
          email: _this10.socialUser.email,
          fcm_token: _this10.fcm_token
        };

        _this10.dataService.post('social-login', data).then(function (result) {
          if (result.success == true) {
            localStorage.setItem('token', result.data.token);
            localStorage.setItem('role', result.data.user.role);
            localStorage.setItem('id', result.data.user.id);
            localStorage.setItem('plan', result.data.user.plan);
            localStorage.setItem('pic', result.data.user.pic);

            _this10.router.navigate(['/guestportal/bookinglist']);
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
              position: 'center',
              icon: 'error',
              text: 'Something went wrong. Please try again.',
              showConfirmButton: false,
              timer: 2500
            });
          }

          _this10.cdf.detectChanges();
        });
      });
    }
  }, {
    key: "signInWithGoogle",
    value: function signInWithGoogle() {
      var _this11 = this;

      this.socialAuthService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_13__.GoogleLoginProvider.PROVIDER_ID).then(function (userData) {
        _this11.socialUser = userData;
        var data = {
          fname: _this11.socialUser.firstName,
          lname: _this11.socialUser.lastName,
          email: _this11.socialUser.email,
          fcm_token: _this11.fcm_token
        };

        _this11.dataService.post('social-login', data).then(function (result) {
          if (result.success == true) {
            localStorage.setItem('token', result.data.token);
            localStorage.setItem('role', result.data.user.role);
            localStorage.setItem('id', result.data.user.id);

            _this11.router.navigate(['/guestportal/bookinglist']);
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
              position: 'center',
              icon: 'error',
              text: 'Something went wrong. Please try again.',
              showConfirmButton: false,
              timer: 2500
            });
          }

          _this11.cdf.detectChanges();
        });
      });
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
    }
  }, {
    key: "showPaymentSection",
    value: function showPaymentSection() {
      var _this12 = this;

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

          _this12.paypalInterval = setInterval(function () {
            _this12.verify();
          }, 5000);
        });
      }
    }
  }, {
    key: "updatePlan",
    value: function updatePlan() {
      var _this13 = this;

      var data = {
        plan: this.level
      };
      this.dataService.post('host/update-plan-info', data).then(function (result) {
        if (result.success = true) {
          console.log(result.data);
          console.log(result);
          localStorage.setItem('role', 'host');
          localStorage.setItem('data', JSON.stringify(result.data));
          localStorage.setItem('plan', result.data.plan);

          _this13.router.navigate(['/hostportal/offerlist']);
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            position: 'center',
            icon: 'error',
            text: 'Something went wrong. Please try again.',
            showConfirmButton: false,
            timer: 2500
          });

          _this13.cdf.detectChanges();

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

        _this13.cdf.detectChanges();

        return;
      });
    }
  }, {
    key: "verify",
    value: function verify() {
      var _this14 = this;

      this.dataService.get('guest/verify/paypal/success').then(function (result) {
        if (result.success == true && result.data == 1) {
          $('#hostplan').modal('hide');
          clearInterval(_this14.paypalInterval);

          _this14.updatePlan();
        }
      });
    }
  }, {
    key: "getPlans",
    value: function getPlans() {
      var _this15 = this;

      this.dataService.get('host/get_plan').then(function (result) {
        _this15.plans = result.data;

        _this15.cdf.detectChanges();
      });
    }
  }, {
    key: "defaultPlan",
    value: function defaultPlan(level) {
      var _this16 = this;

      var data = {
        plan: level
      };
      this.dataService.post('host/update-plan-info', data).then(function (result) {
        if (result.success = true) {
          localStorage.setItem('role', 'host');
          localStorage.setItem('plan', level);

          _this16.router.navigate(['/hostportal/offerlist']);
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            position: 'center',
            icon: 'error',
            text: 'Something went wrong. Please try again.',
            showConfirmButton: false,
            timer: 2500
          });

          _this16.cdf.detectChanges();

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

        _this16.cdf.detectChanges();

        return;
      });
    }
  }, {
    key: "getNotifications",
    value: function getNotifications() {
      var _this17 = this;

      this.new_notification_status = false;

      if (this.notifications.length < 10) {
        this.page = 1;
      } else {
        this.page = this.page + 1;
      }

      if (localStorage.getItem("token") == null) {
        return;
      }

      this.dataService.get('get-notification/' + this.page).then(function (result) {
        for (var i = 0; i < result.data.length; i++) {
          _this17.notifications.push(result.data[i]);

          if (result.data[i].read_status == 0) {
            _this17.unread_notifications = _this17.unread_notifications + 1;
          }
        }

        if (result.data == []) {
          _this17.new_notification_status = true;
        }

        _this17.cdf.detectChanges();
      });
    }
  }, {
    key: "readAllNotifications",
    value: function readAllNotifications() {
      var _this18 = this;

      this.dataService.get('read-all-notification').then(function (result) {
        _this18.unread_notifications = 0;
        $('.readAllNotifications').css("background-color", "white");

        _this18.cdf.detectChanges();
      });
    }
  }, {
    key: "readNotification",
    value: function readNotification(id, status, navigation) {
      var _this19 = this;

      if (status != 1) {
        var data = {
          id: id
        };
        this.dataService.post('read-notification', data).then(function (result) {
          if (_this19.unread_notifications != 0) {
            _this19.unread_notifications = _this19.unread_notifications - 1;

            _this19.cdf.detectChanges();
          }

          $('#' + id + 'bg').css("background-color", "white");
        });
      }

      this.cdf.detectChanges();

      if (navigation.includes('dispute') || navigation.includes('withdraw')) {
        this.router.navigate(['/hostportal/bookinglist']);
      }

      if (navigation.includes('chat')) {
        var temp = navigation.split('-');
        localStorage.setItem('temp', temp[1]);
        this.router.navigate(['/hostportal/inbox']);
      }
    }
  }, {
    key: "loginWithApple",
    value: function loginWithApple() {
      this.appleService.signIn();
    }
  }]);

  return HostLayoutComponent;
}();

HostLayoutComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef
  }, {
    type: src_app_services__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService
  }, {
    type: src_app_services_data_services__WEBPACK_IMPORTED_MODULE_7__.DataService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ElementRef
  }, {
    type: angularx_social_login__WEBPACK_IMPORTED_MODULE_13__.SocialAuthService
  }, {
    type: src_app_services_apple_service__WEBPACK_IMPORTED_MODULE_9__.AppleLoginService
  }];
};

HostLayoutComponent.propDecorators = {
  registerNgForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
    args: ['registerNgForm']
  }],
  loginNgForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
    args: ['loginNgForm']
  }],
  verifyEmailNgForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
    args: ['verifyEmailNgForm']
  }],
  verifyForgotPasswordOtpNgForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
    args: ['verifyForgotPasswordOtpNgForm']
  }],
  updatePasswordNgForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
    args: ['updatePasswordNgForm']
  }],
  planNgForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
    args: ['planNgForm']
  }]
};
HostLayoutComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-layout',
  template: _host_layout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], HostLayoutComponent);


/***/ }),

/***/ 99118:
/*!*********************************************************!*\
  !*** ./src/app/Admin/md/md-chart/md-chart.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartType": function() { return /* binding */ ChartType; },
/* harmony export */   "MdChartComponent": function() { return /* binding */ MdChartComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _md_chart_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./md-chart.component.html?ngResource */ 87054);
/* harmony import */ var _md_chart_component_css_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./md-chart.component.css?ngResource */ 50773);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chartist */ 43093);
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_4__);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MdChartComponent_1;




var ChartType;

(function (ChartType) {
  ChartType[ChartType["Pie"] = 0] = "Pie";
  ChartType[ChartType["Line"] = 1] = "Line";
  ChartType[ChartType["Bar"] = 2] = "Bar";
})(ChartType || (ChartType = {}));

var MdChartComponent = MdChartComponent_1 = /*#__PURE__*/function () {
  function MdChartComponent() {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MdChartComponent);
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(MdChartComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.chartId = "md-chart-".concat(MdChartComponent_1.currentId++);
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      switch (this.chartType) {
        case ChartType.Pie:
          new chartist__WEBPACK_IMPORTED_MODULE_4__.Pie("#".concat(this.chartId), this.chartData, this.chartOptions, this.chartResponsive);
          break;

        case ChartType.Line:
          new chartist__WEBPACK_IMPORTED_MODULE_4__.Line("#".concat(this.chartId), this.chartData, this.chartOptions, this.chartResponsive);
          break;

        case ChartType.Bar:
          new chartist__WEBPACK_IMPORTED_MODULE_4__.Bar("#".concat(this.chartId), this.chartData, this.chartOptions, this.chartResponsive);
          break;
      }
    }
  }]);

  return MdChartComponent;
}();

MdChartComponent.currentId = 1;

MdChartComponent.ctorParameters = function () {
  return [];
};

MdChartComponent.propDecorators = {
  title: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  subtitle: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  chartClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  chartType: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  chartData: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  chartOptions: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  chartResponsive: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  footerIconClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  footerText: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  legendItems: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  withHr: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }]
};
MdChartComponent = MdChartComponent_1 = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-md-chart',
  template: _md_chart_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_md_chart_component_css_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], MdChartComponent);


/***/ }),

/***/ 81618:
/*!*********************************************************!*\
  !*** ./src/app/Admin/md/md-table/md-table.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdTableComponent": function() { return /* binding */ MdTableComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var _md_table_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./md-table.component.html?ngResource */ 26195);
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




var MdTableComponent = /*#__PURE__*/(0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function MdTableComponent() {
  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MdTableComponent);
});

MdTableComponent.ctorParameters = function () {
  return [];
};

MdTableComponent.propDecorators = {
  title: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  subtitle: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  cardClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  data: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }]
};
MdTableComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-md-table',
  template: _md_table_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush
})], MdTableComponent);


/***/ }),

/***/ 35320:
/*!***************************************!*\
  !*** ./src/app/Admin/md/md.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavItemType": function() { return /* binding */ NavItemType; },
/* harmony export */   "MdModule": function() { return /* binding */ MdModule; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _md_table_md_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./md-table/md-table.component */ 81618);
/* harmony import */ var _md_chart_md_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./md-chart/md-chart.component */ 99118);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NavItemType;

(function (NavItemType) {
  NavItemType[NavItemType["Sidebar"] = 1] = "Sidebar";
  NavItemType[NavItemType["NavbarLeft"] = 2] = "NavbarLeft";
  NavItemType[NavItemType["NavbarRight"] = 3] = "NavbarRight"; // Right-aligned link on navbar in desktop mode, shown above sidebar items on collapsed sidebar in mobile mode
})(NavItemType || (NavItemType = {}));

var MdModule = /*#__PURE__*/(0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function MdModule() {
  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MdModule);
});

MdModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
  declarations: [_md_table_md_table_component__WEBPACK_IMPORTED_MODULE_2__.MdTableComponent, _md_chart_md_chart_component__WEBPACK_IMPORTED_MODULE_3__.MdChartComponent],
  exports: [_md_table_md_table_component__WEBPACK_IMPORTED_MODULE_2__.MdTableComponent, _md_chart_md_chart_component__WEBPACK_IMPORTED_MODULE_3__.MdChartComponent]
})], MdModule);


/***/ }),

/***/ 81628:
/*!*********************************************************!*\
  !*** ./src/app/Admin/shared/navbar/navbar.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": function() { return /* binding */ NavbarComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _navbar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.component.html?ngResource */ 22655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../.././sidebar/sidebar.component */ 21873);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 48750);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var misc = {
  navbar_menu_visible: 0,
  active_collapse: true,
  disabled_collapse_init: 0
};

var NavbarComponent = /*#__PURE__*/function () {
  function NavbarComponent(location, renderer, element, router) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavbarComponent);

    this.renderer = renderer;
    this.element = element;
    this.router = router;
    this.mobile_menu_visible = 0;
    this.location = location;
    this.nativeElement = element.nativeElement;
    this.sidebarVisible = false;
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(NavbarComponent, [{
    key: "minimizeSidebar",
    value: function minimizeSidebar() {
      var body = document.getElementsByTagName('body')[0];

      if (misc.sidebar_mini_active === true) {
        body.classList.remove('sidebar-mini');
        misc.sidebar_mini_active = false;
      } else {
        setTimeout(function () {
          body.classList.add('sidebar-mini');
          misc.sidebar_mini_active = true;
        }, 300);
      } // we simulate the window Resize so the charts will get updated in realtime.


      var simulateWindowResize = setInterval(function () {
        window.dispatchEvent(new Event('resize'));
      }, 180); // we stop the simulation of Window Resize after the animations are completed

      setTimeout(function () {
        clearInterval(simulateWindowResize);
      }, 1000);
    }
  }, {
    key: "hideSidebar",
    value: function hideSidebar() {
      var body = document.getElementsByTagName('body')[0];
      var sidebar = document.getElementsByClassName('sidebar')[0];

      if (misc.hide_sidebar_active === true) {
        setTimeout(function () {
          body.classList.remove('hide-sidebar');
          misc.hide_sidebar_active = false;
        }, 300);
        setTimeout(function () {
          sidebar.classList.remove('animation');
        }, 600);
        sidebar.classList.add('animation');
      } else {
        setTimeout(function () {
          body.classList.add('hide-sidebar'); // $('.sidebar').addClass('animation');

          misc.hide_sidebar_active = true;
        }, 300);
      } // we simulate the window Resize so the charts will get updated in realtime.


      var simulateWindowResize = setInterval(function () {
        window.dispatchEvent(new Event('resize'));
      }, 180); // we stop the simulation of Window Resize after the animations are completed

      setTimeout(function () {
        clearInterval(simulateWindowResize);
      }, 1000);
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.ROUTES.filter(function (listTitle) {
        return listTitle;
      });
      var navbar = this.element.nativeElement;
      var body = document.getElementsByTagName('body')[0];
      this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];

      if (body.classList.contains('sidebar-mini')) {
        misc.sidebar_mini_active = true;
      }

      if (body.classList.contains('hide-sidebar')) {
        misc.hide_sidebar_active = true;
      }

      this._router = this.router.events.filter(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd;
      }).subscribe(function (event) {
        _this.sidebarClose();

        var $layer = document.getElementsByClassName('close-layer')[0];

        if ($layer) {
          $layer.remove();
        }
      });
    }
  }, {
    key: "onResize",
    value: function onResize(event) {
      if ($(window).width() > 991) {
        return false;
      }

      return true;
    }
  }, {
    key: "sidebarOpen",
    value: function sidebarOpen() {
      var $toggle = document.getElementsByClassName('navbar-toggler')[0];
      var toggleButton = this.toggleButton;
      var body = document.getElementsByTagName('body')[0];
      setTimeout(function () {
        toggleButton.classList.add('toggled');
      }, 500);
      body.classList.add('nav-open');
      setTimeout(function () {
        $toggle.classList.add('toggled');
      }, 430);
      var $layer = document.createElement('div');
      $layer.setAttribute('class', 'close-layer');

      if (body.querySelectorAll('.main-panel')) {
        document.getElementsByClassName('main-panel')[0].appendChild($layer);
      } else if (body.classList.contains('off-canvas-sidebar')) {
        document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
      }

      setTimeout(function () {
        $layer.classList.add('visible');
      }, 100);

      $layer.onclick = function () {
        body.classList.remove('nav-open');
        this.mobile_menu_visible = 0;
        this.sidebarVisible = false;
        $layer.classList.remove('visible');
        setTimeout(function () {
          $layer.remove();
          $toggle.classList.remove('toggled');
        }, 400);
      }.bind(this);

      body.classList.add('nav-open');
      this.mobile_menu_visible = 1;
      this.sidebarVisible = true;
    }
  }, {
    key: "sidebarClose",
    value: function sidebarClose() {
      var $toggle = document.getElementsByClassName('navbar-toggler')[0];
      var body = document.getElementsByTagName('body')[0];
      this.toggleButton.classList.remove('toggled');
      var $layer = document.createElement('div');
      $layer.setAttribute('class', 'close-layer');
      this.sidebarVisible = false;
      body.classList.remove('nav-open'); // $('html').removeClass('nav-open');

      body.classList.remove('nav-open');

      if ($layer) {
        $layer.remove();
      }

      setTimeout(function () {
        $toggle.classList.remove('toggled');
      }, 400);
      this.mobile_menu_visible = 0;
    }
  }, {
    key: "sidebarToggle",
    value: function sidebarToggle() {
      if (this.sidebarVisible === false) {
        this.sidebarOpen();
      } else {
        this.sidebarClose();
      }
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      var titlee = this.location.prepareExternalUrl(this.location.path());

      if (titlee.charAt(0) === '#') {
        titlee = titlee.slice(1);
      }

      for (var i = 0; i < this.listTitles.length; i++) {
        if (this.listTitles[i].type === "link" && this.listTitles[i].path === titlee) {
          return this.listTitles[i].title;
        } else if (this.listTitles[i].type === "sub") {
          for (var j = 0; j < this.listTitles[i].children.length; j++) {
            var subtitle = this.listTitles[i].path + '/' + this.listTitles[i].children[j].path; // console.log(subtitle)
            // console.log(titlee)

            if (subtitle === titlee) {
              return this.listTitles[i].children[j].title;
            }
          }
        }
      }

      return 'Dashboard';
    }
  }, {
    key: "getPath",
    value: function getPath() {
      return this.location.prepareExternalUrl(this.location.path());
    }
  }]);

  return NavbarComponent;
}();

NavbarComponent.ctorParameters = function () {
  return [{
    type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }];
};

NavbarComponent.propDecorators = {
  button: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
    args: ['app-navbar-cmp', {
      static: false
    }]
  }]
};
NavbarComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-navbar-cmp',
  template: _navbar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], NavbarComponent);


/***/ }),

/***/ 20042:
/*!******************************************************!*\
  !*** ./src/app/Admin/shared/navbar/navbar.module.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarModule": function() { return /* binding */ NavbarModule; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.component */ 81628);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NavbarModule = /*#__PURE__*/(0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function NavbarModule() {
  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NavbarModule);
});

NavbarModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
  declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent],
  exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent]
})], NavbarModule);


/***/ }),

/***/ 21873:
/*!****************************************************!*\
  !*** ./src/app/Admin/sidebar/sidebar.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": function() { return /* binding */ ROUTES; },
/* harmony export */   "SidebarComponent": function() { return /* binding */ SidebarComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _sidebar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.component.html?ngResource */ 49590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! perfect-scrollbar */ 52631);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 //Menu Items

var ROUTES = [{
  path: '/admin/dashboard',
  title: 'Dashboard',
  type: 'link',
  icontype: './assets/Icons/AdminportalIcons/das.png'
}, {
  path: '/admin',
  title: 'Users',
  type: 'sub',
  icontype: './assets/Icons/AdminportalIcons/user.png',
  collapse: 'components',
  children: [{
    path: 'host',
    title: 'Host',
    ab: 'H'
  }, {
    path: 'guest',
    title: 'Guest',
    ab: 'G'
  }]
}, {
  path: '/admin/subscriptions',
  title: 'Subscriptions',
  type: 'link',
  icontype: './assets/Icons/AdminportalIcons/sub.png'
}, {
  path: '/admin',
  title: 'Offers',
  type: 'sub',
  icontype: './assets/Icons/AdminportalIcons/Offers.png',
  collapse: 'forms',
  children: [{
    path: 'booking',
    title: 'Booking Offers',
    ab: 'BO'
  }, {
    path: 'normal',
    title: 'Normal Offers',
    ab: 'NO'
  }]
}, // {
//         path: '/admin/languagesetting',
//         title: 'Language Setting',
//         type: 'link',
//         icontype: './assets/Icons/AdminportalIcons/setting.png',
//      }
//      ,
{
  path: '/admin/faq',
  title: 'FAQ',
  type: 'link',
  icontype: './assets/Icons/AdminportalIcons/FAQ.png'
}, {
  path: '/admin/category',
  title: 'Blogs Category',
  type: 'link',
  icontype: './assets/Icons/AdminportalIcons/category blog.png'
}, {
  path: '/admin/blog',
  title: 'Blogs',
  type: 'link',
  icontype: './assets/Icons/AdminportalIcons/Blog.png'
}, {
  path: '/admin/feedback',
  title: 'Feedback',
  type: 'link',
  icontype: './assets/Icons/AdminportalIcons/FAQ.png'
}];

var SidebarComponent = /*#__PURE__*/function () {
  function SidebarComponent() {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SidebarComponent);
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SidebarComponent, [{
    key: "isMobileMenu",
    value: function isMobileMenu() {
      if ($(window).width() > 991) {
        return false;
      }

      return true;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.menuItems = ROUTES.filter(function (menuItem) {
        return menuItem;
      });

      if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["default"](elemSidebar);
      }
    }
  }, {
    key: "updatePS",
    value: function updatePS() {
      if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
        this.ps.update();
      }
    }
  }, {
    key: "isMac",
    value: function isMac() {
      var bool = false;

      if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
        bool = true;
      }

      return bool;
    }
  }]);

  return SidebarComponent;
}();

SidebarComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-sidebar-cmp',
  template: _sidebar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], SidebarComponent);


/***/ }),

/***/ 18662:
/*!*************************************************!*\
  !*** ./src/app/Admin/sidebar/sidebar.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarModule": function() { return /* binding */ SidebarModule; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.component */ 21873);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SidebarModule = /*#__PURE__*/(0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function SidebarModule() {
  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SidebarModule);
});

SidebarModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
  declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent],
  exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent]
})], SidebarModule);


/***/ }),

/***/ 13381:
/*!********************************************!*\
  !*** ./src/app/_services/apple.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppleLoginService": function() { return /* binding */ AppleLoginService; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ 21055);
/* harmony import */ var _data_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.services */ 7619);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppleLoginService = /*#__PURE__*/function () {
  function AppleLoginService(routers, router, jwtHelper, dataService) {
    var _this = this;

    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppleLoginService);

    this.routers = routers;
    this.router = router;
    this.jwtHelper = jwtHelper;
    this.dataService = dataService;
    this.appleScriptUrl = 'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js';
    this.ready = new Promise(function (resolve) {
      if (typeof window !== 'undefined') {
        var script = __webpack_require__(/*! scriptjs */ 28650);

        script(_this.appleScriptUrl, function () {
          return resolve(true);
        });
      } else {
        resolve(false);
      }
    });
    this.ready.then(function (isReady) {
      if (isReady) {// this.init();
      }
    });
  }
  /**
   * Error details
   */


  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AppleLoginService, [{
    key: "signIn",
    value: function signIn() {
      var data = this.init();
      return data;
    }
    /**
     * Call init method
     */

  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      var CLIENT_ID = "com.onerooms.bundle.backend";
      var REDIRECT_API_URL = "https://onerooms-socket1.herokuapp.com/Api/Auth/AuthAppleSignin";
      window.open("https://appleid.apple.com/auth/authorize?client_id=".concat(CLIENT_ID, "&redirect_uri=").concat(encodeURIComponent(REDIRECT_API_URL), "&response_type=code id_token&scope=name email&response_mode=form_post&usePopup: ", true), '_blank');
      window.addEventListener('message', function (event) {
        var decodedToken = _this2.jwtHelper.decodeToken(event.data.id_token);

        var requestData = {};

        if (event.data.user) {
          var userName = JSON.parse(event.data.user);
          requestData = {
            "email": decodedToken.email,
            "name": "".concat(userName.name.firstName, " ").concat(userName.name.lastName),
            "socialId": decodedToken.sub,
            fcm_token: localStorage.getItem('fcm_token')
          };
        } else {
          requestData = {
            "email": decodedToken.email,
            "socialId": decodedToken.sub,
            fcm_token: localStorage.getItem('fcm_token')
          };
        }

        _this2.dataService.post('apple-login', requestData).then(function (result) {
          if (result.success == true) {
            localStorage.setItem('token', result.data.token);
            localStorage.setItem('role', result.data.user.role);
            localStorage.setItem('id', result.data.user.id);

            if (result.data.user.role == 'guest') {
              _this2.router.navigate(['/guestportal/bookinglist']);
            } else {
              _this2.router.navigate(['/hostportal/offerlist']);
            }
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
              position: 'center',
              icon: 'error',
              text: 'Something went wrong. Please try agian.',
              showConfirmButton: false,
              timer: 2500
            });
          }
        });
      });
    }
  }]);

  return AppleLoginService;
}();

AppleLoginService.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }, {
    type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__.JwtHelperService
  }, {
    type: _data_services__WEBPACK_IMPORTED_MODULE_2__.DataService
  }];
};

AppleLoginService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: 'root'
})], AppleLoginService);


/***/ }),

/***/ 98698:
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": function() { return /* binding */ AuthenticationService; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 93690);
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ 82873);
/* harmony import */ var _appSetting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../appSetting */ 76089);
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ 84440);
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AuthenticationService = /*#__PURE__*/function () {
  function AuthenticationService(http) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AuthenticationService);

    this.http = http;
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AuthenticationService, [{
    key: "login",
    value: function login(email, password) {
      var form = {
        'email': email,
        'password': password,
        'device_type': 'android'
      };
      return this.http.post("".concat(_appSetting__WEBPACK_IMPORTED_MODULE_3__.AppSettings.base_url).concat(_appSetting__WEBPACK_IMPORTED_MODULE_3__.AppSettings.autheticate_url), form).catch(function (error) {
        console.log(error.error.message);
        return rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__.Observable["throw"](error.error.message);
      });
    }
  }, {
    key: "adminlogin",
    value: function adminlogin(email, password) {
      var form = {
        'email': email,
        'password': password
      };
      return this.http.post("https://oneroom3.crosip.com/api/admin-login", form).catch(function (error) {
        console.log(error.error.message);
        return rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__.Observable["throw"](error.error.message);
      });
    }
  }, {
    key: "post",
    value: function post(endpoint, body) {
      // this.token = JSON.parse(localStorage.getItem("currentUser")).auth_key;
      return this.http.post("".concat(_appSetting__WEBPACK_IMPORTED_MODULE_3__.AppSettings.base_url) + endpoint, body).toPromise().then(function (response) {
        console.log(response);

        if (response.status === 401) {
          alert();
          localStorage.clear();
          window.location.href = "login";
          window.location.reload();
        } else {
          return response;
        }
      }, function (reason) {
        if (reason.error.status === 401) {
          localStorage.clear();
          window.location.reload();
          return reason;
        }

        return reason;
      }).catch(this.handleError);
    }
  }, {
    key: "sendcode",
    value: function sendcode(phone) {
      return this.http.post("".concat(_appSetting__WEBPACK_IMPORTED_MODULE_3__.AppSettings.base_url).concat(_appSetting__WEBPACK_IMPORTED_MODULE_3__.AppSettings.OTPautheticate_url), {
        'phone': phone
      });
    }
  }, {
    key: "otp",
    value: function otp(id, OTP) {
      return this.http.post("".concat(_appSetting__WEBPACK_IMPORTED_MODULE_3__.AppSettings.base_url).concat(_appSetting__WEBPACK_IMPORTED_MODULE_3__.AppSettings.OTPautheticate_url), {
        id: id,
        OTP: OTP
      }).catch(function (error) {
        console.log(error.error.message);
        return error.error.message;
      });
    }
  }, {
    key: "otpResend",
    value: function otpResend(id) {
      return this.http.post("".concat(_appSetting__WEBPACK_IMPORTED_MODULE_3__.AppSettings.base_url).concat(_appSetting__WEBPACK_IMPORTED_MODULE_3__.AppSettings.OTPResentautheticate_url), {
        id: id
      }).catch(function (error) {
        return error.error.message;
      });
    }
  }, {
    key: "logout",
    value: function logout() {
      // remove user from local storage to log user out 
      localStorage.clear();
    }
  }, {
    key: "handleError",
    value: function handleError(error) {
      return error;
    }
  }]);

  return AuthenticationService;
}();

AuthenticationService.ctorParameters = function () {
  return [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
  }];
};

AuthenticationService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: 'root'
})], AuthenticationService);


/***/ }),

/***/ 7619:
/*!********************************************!*\
  !*** ./src/app/_services/data.services.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": function() { return /* binding */ DataService; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 93690);
/* harmony import */ var _appSetting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../appSetting */ 76089);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 33927);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DataService = /*#__PURE__*/function () {
  function DataService(http) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DataService);

    this.http = http;
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DataService, [{
    key: "ngOnInit",
    value: function ngOnInit() {} ///////////////////////////////////////User Profile//////////////////////////////////////////

  }, {
    key: "handleError",
    value: function handleError(error) {
      return error;
    }
  }, {
    key: "adminget",
    value: function adminget(endpoint) {
      this.token = 'Bearer ' + localStorage.getItem("admintoken");
      return this.http.get("".concat(_appSetting__WEBPACK_IMPORTED_MODULE_2__.AppSettings.base_url) + endpoint, {
        headers: {
          Authorization: this.token
        }
      }).toPromise().then(function (response) {
        if (response.status === 401) {
          localStorage.clear();
          window.location.href = "#/pages/login";
        } else {
          return response;
        }
      }, function (reason) {
        if (reason.error.status === 401) {
          localStorage.clear();
          window.location.href = "#/pages/login";
        }

        return reason;
      }).catch(this.handleError);
    }
  }, {
    key: "get",
    value: function get(endpoint) {
      this.token = 'Bearer ' + localStorage.getItem("token");
      return this.http.get("".concat(_appSetting__WEBPACK_IMPORTED_MODULE_2__.AppSettings.base_url) + endpoint, {
        headers: {
          Authorization: this.token
        }
      }).toPromise().then(function (response) {
        if (response.status === 401) {
          localStorage.clear();
          window.location.href = "";
        } else {
          return response;
        }
      }, function (reason) {
        if (reason.error.status === 401) {
          localStorage.clear();
          window.location.href = "";
        }

        return reason;
      }).catch(this.handleError);
    }
  }, {
    key: "adminpost",
    value: function adminpost(endpoint, body) {
      this.token = 'Bearer ' + localStorage.getItem("admintoken");
      return this.http.post("".concat(_appSetting__WEBPACK_IMPORTED_MODULE_2__.AppSettings.base_url) + endpoint, body, {
        headers: {
          Authorization: this.token
        }
      }).toPromise().then(function (response) {
        if (response.status === 401) {
          localStorage.clear();
          window.location.href = "#/pages/login";
        } else {
          return response;
        }
      }, function (reason) {
        if (reason.error.status === 401) {
          localStorage.clear();
          window.location.href = "#/pages/login";
        }

        return reason;
      }).catch(this.handleError);
    }
  }, {
    key: "post",
    value: function post(endpoint, body) {
      this.token = 'Bearer ' + localStorage.getItem("token");
      return this.http.post("".concat(_appSetting__WEBPACK_IMPORTED_MODULE_2__.AppSettings.base_url) + endpoint, body, {
        headers: {
          Authorization: this.token
        }
      }).toPromise().then(function (response) {
        if (response.status === 401) {
          localStorage.clear();
          window.location.href = "#/pages/login";
        } else {
          return response;
        }
      }, function (reason) {
        if (reason.error.status === 401) {
          localStorage.clear();
          window.location.href = "#/pages/login";
        }

        return reason;
      }).catch(this.handleError);
    }
  }, {
    key: "updateprofile",
    value: function updateprofile(userinfo, auth_key) {
      return this.http.post("".concat(_appSetting__WEBPACK_IMPORTED_MODULE_2__.AppSettings.base_url, "dashboard/updateProfile"), userinfo, {
        headers: {
          'Authorization': auth_key
        }
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (data) {
        return data;
      }));
    }
  }, {
    key: "getallApplcant",
    value: function getallApplcant(status, auth_key) {
      return this.http.get("".concat(_appSetting__WEBPACK_IMPORTED_MODULE_2__.AppSettings.base_url, "dashboard/getAllApplication?status=").concat(status), {
        headers: {
          'Authorization': auth_key
        }
      });
    }
  }, {
    key: "loandetailsid",
    value: function loandetailsid(id, loantype, auth_key) {
      return this.http.get("".concat(_appSetting__WEBPACK_IMPORTED_MODULE_2__.AppSettings.base_url, "dashboard/getApplicationDetails?id=") + id + '&loan_type=' + loantype, {
        headers: {
          'Authorization': auth_key
        }
      });
    }
  }, {
    key: "getallquestionList",
    value: function getallquestionList(id) {
      return this.http.get("".concat(_appSetting__WEBPACK_IMPORTED_MODULE_2__.AppSettings.base_url, "dashboard/getEmplyerQuestion?employer_question_id=").concat(id));
    }
  }, {
    key: "Getfeeback",
    value: function Getfeeback(id, auth_key) {
      return this.http.get("".concat(_appSetting__WEBPACK_IMPORTED_MODULE_2__.AppSettings.base_url, "dashboard/getFeedBack?loan_application_id=").concat(id), {
        headers: {
          'Authorization': auth_key
        }
      });
    }
  }, {
    key: "Getemployerquestion",
    value: function Getemployerquestion(id, auth_key) {
      return this.http.get("".concat(_appSetting__WEBPACK_IMPORTED_MODULE_2__.AppSettings.base_url, "dashboard/getEmplyerQuestion?loan_application_id=").concat(id), {
        headers: {
          'Authorization': auth_key
        }
      });
    }
  }, {
    key: "getloaninstallmentPlan",
    value: function getloaninstallmentPlan(id, auth_key) {
      return this.http.get("".concat(_appSetting__WEBPACK_IMPORTED_MODULE_2__.AppSettings.base_url, "dashboard/getApplicationDetails?id=") + id + '&loan_type=' + 'mortgage', {
        headers: {
          'Authorization': auth_key
        }
      });
    }
  }, {
    key: "sendEmployersConfirmation",
    value: function sendEmployersConfirmation(emp, auth_key) {
      return this.http.post("".concat(_appSetting__WEBPACK_IMPORTED_MODULE_2__.AppSettings.base_url, "dashboard/sendEmployersConfirmation"), emp, {
        headers: {
          'Authorization': auth_key
        }
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (data) {
        return data;
      }));
    } /////////////////lendMoney /////////////////////

  }, {
    key: "updateLoanStatus",
    value: function updateLoanStatus(lendmoneyData, auth_key) {
      return this.http.post("".concat(_appSetting__WEBPACK_IMPORTED_MODULE_2__.AppSettings.base_url, "dashboard/updateLoanStatus"), lendmoneyData, {
        headers: {
          'Authorization': auth_key
        }
      });
    }
  }]);

  return DataService;
}();

DataService.ctorParameters = function () {
  return [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
  }];
};

DataService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], DataService);


/***/ }),

/***/ 9949:
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": function() { return /* reexport safe */ _authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService; },
/* harmony export */   "UserService": function() { return /* reexport safe */ _user_service__WEBPACK_IMPORTED_MODULE_1__.UserService; }
/* harmony export */ });
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ 98698);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ 55089);



/***/ }),

/***/ 55089:
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": function() { return /* binding */ UserService; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 93690);
/* harmony import */ var _appSetting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../appSetting */ 76089);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UserService = /*#__PURE__*/function () {
  function UserService(http) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserService);

    this.http = http;
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(UserService, [{
    key: "getAll",
    value: function getAll() {
      return this.http.get("".concat(_appSetting__WEBPACK_IMPORTED_MODULE_2__.AppSettings.base_url, "/users"));
    }
  }, {
    key: "myProfile",
    value: function myProfile() {
      return this.http.get("".concat(_appSetting__WEBPACK_IMPORTED_MODULE_2__.AppSettings.base_url, "/users/my-profile"));
    }
  }, {
    key: "editProfile",
    value: function editProfile(firstName, lastName, userName, email) {
      var formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("userName", userName);
      formData.append("email", email);
      var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
      headers.append("Content-Type", "multipart/form-data");
      return this.http.post("".concat(_appSetting__WEBPACK_IMPORTED_MODULE_2__.AppSettings.base_url, "/users/edit-profile"), formData, {
        reportProgress: true,
        observe: 'events',
        headers: headers
      }).pipe();
    }
  }, {
    key: "changeProfilePic",
    value: function changeProfilePic(picture) {
      var formData = new FormData();
      formData.append("picture", picture);
      var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
      headers.append("Content-Type", "multipart/form-data");
      return this.http.post("".concat(_appSetting__WEBPACK_IMPORTED_MODULE_2__.AppSettings.base_url, "/users/change-profile"), formData, {
        reportProgress: true,
        observe: 'events',
        headers: headers
      }).pipe();
    }
  }]);

  return UserService;
}();

UserService.ctorParameters = function () {
  return [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
  }];
};

UserService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], UserService);


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _translation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translation.service */ 52240);
/* harmony import */ var _i18n_en__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./i18n/en */ 45106);
/* harmony import */ var _i18n_fr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./i18n/fr */ 72255);
/* harmony import */ var _i18n_gr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./i18n/gr */ 27020);
/* harmony import */ var _i18n_it__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./i18n/it */ 53736);
/* harmony import */ var _i18n_sp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./i18n/sp */ 25768);
/* harmony import */ var _i18n_ch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./i18n/ch */ 79713);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppComponent = /*#__PURE__*/function () {
  function AppComponent(router, translationService) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppComponent);

    this.router = router;
    this.translationService = translationService;
    this.currentLang = 'en';
    this.translationService.addTranslation(_i18n_en__WEBPACK_IMPORTED_MODULE_4__.locale, _i18n_fr__WEBPACK_IMPORTED_MODULE_5__.locale, _i18n_gr__WEBPACK_IMPORTED_MODULE_6__.locale, _i18n_it__WEBPACK_IMPORTED_MODULE_7__.locale, _i18n_sp__WEBPACK_IMPORTED_MODULE_8__.locale, _i18n_ch__WEBPACK_IMPORTED_MODULE_9__.locale);
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AppComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.currentLang = this.translationService.getCurrentLang();
      this._router = this.router.events.filter(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationEnd;
      }).subscribe(function (event) {
        var body = document.getElementsByTagName('body')[0];
        var modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];

        if (body.classList.contains('modal-open')) {
          body.classList.remove('modal-open');
          modalBackdrop.remove();
        }
      });
    }
  }]);

  return AppComponent;
}();

AppComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
  }, {
    type: _translation_service__WEBPACK_IMPORTED_MODULE_3__.TranslationService
  }];
};

AppComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-my-app',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], AppComponent);


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": function() { return /* binding */ MaterialModule; },
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/platform-browser */ 27532);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/platform-browser/animations */ 76263);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/common/http */ 93690);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/core */ 52503);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/button */ 99110);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ 49500);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ 95133);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/datepicker */ 8972);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/radio */ 13313);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/select */ 36180);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slider */ 50692);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/slide-toggle */ 63173);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ 55965);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sidenav */ 62908);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/toolbar */ 99358);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ 16292);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ 46058);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 62136);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ 14158);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/stepper */ 96395);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tabs */ 69516);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ 94323);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button-toggle */ 22027);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/chips */ 42568);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ 18488);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-spinner */ 72113);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ 78283);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ 39670);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tooltip */ 39046);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/snack-bar */ 42441);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/table */ 22219);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/sort */ 94152);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/paginator */ 38235);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _authguard_service_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authguard-service.guard */ 98287);
/* harmony import */ var _Admin_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Admin/sidebar/sidebar.module */ 18662);
/* harmony import */ var _Admin_shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Admin/shared/navbar/navbar.module */ 20042);
/* harmony import */ var _Admin_layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Admin/layouts/admin/admin-layout.component */ 32190);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ 76738);
/* harmony import */ var _Admin_layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Admin/layouts/auth/auth-layout.component */ 53830);
/* harmony import */ var _Admin_layouts_host_host_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Admin/layouts/host/host-layout.component */ 8851);
/* harmony import */ var _Admin_layouts_Hostportal_Hostportal_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Admin/layouts/Hostportal/Hostportal-layout.component */ 58089);
/* harmony import */ var _Admin_layouts_guest_guest_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Admin/layouts/guest/guest-layout.component */ 18473);
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ngx-intl-tel-input */ 87555);
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! angularx-social-login */ 84507);
/* harmony import */ var _Admin_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Admin/layouts/admin_layout/admin_layout.component */ 63589);
/* harmony import */ var ngx_apple_signin__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ngx-apple-signin */ 9358);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @auth0/angular-jwt */ 21055);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @ngx-translate/core */ 5721);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















































 // import { initializeApp } from "firebase/app";
// import { provideFirebaseApp, getApp, initializeApp, FirebaseAppModule } from '@angular/fire/app';
// import { provideMessaging,getMessaging, MessagingModule, AngularFireMessagingModule } from '@angular/fire/messaging';



var MaterialModule = /*#__PURE__*/(0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function MaterialModule() {
  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MaterialModule);
});

MaterialModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
  exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocompleteModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__.MatChipsModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckboxModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__.MatStepperModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_25__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__.MatMenuModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__.MatRadioModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_31__.MatSelectModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__.MatDatepickerModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_33__.MatButtonModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__.MatTooltipModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_43__.MatNativeDateModule],
  imports: [// provideMessaging(() => getMessaging())
  ]
})], MaterialModule);


var AppModule = /*#__PURE__*/(0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppModule() {
  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppModule);
});

AppModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_44__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_45__.CommonModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_46__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_47__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_48__.RouterModule.forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_7__.AppRoutes, {
    useHash: true
  }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_49__.TranslateModule.forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_50__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_47__.ReactiveFormsModule, MaterialModule, _Admin_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_4__.SidebarModule, _Admin_shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__.NavbarModule, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_51__.NgxIntlTelInputModule, angularx_social_login__WEBPACK_IMPORTED_MODULE_52__.SocialLoginModule, ngx_apple_signin__WEBPACK_IMPORTED_MODULE_53__.AppleSigninModule // provideMessaging(() => getMessaging()),
  ],
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _Admin_layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_6__.AdminLayoutComponent, _Admin_layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_8__.AuthLayoutComponent, _Admin_layouts_host_host_layout_component__WEBPACK_IMPORTED_MODULE_9__.HostLayoutComponent, _Admin_layouts_Hostportal_Hostportal_layout_component__WEBPACK_IMPORTED_MODULE_10__.HostportalLayoutComponent, _Admin_layouts_guest_guest_layout_component__WEBPACK_IMPORTED_MODULE_11__.GuestLayoutComponent, _Admin_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_12__.Admin_layoutComponent],
  providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_43__.MatNativeDateModule, _authguard_service_guard__WEBPACK_IMPORTED_MODULE_3__.AuthguardServiceGuard, {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [{
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_52__.FacebookLoginProvider.PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_52__.FacebookLoginProvider('273205544848675')
      }, {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_52__.GoogleLoginProvider.PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_52__.GoogleLoginProvider('886748753487-f4b1doq6qrcvpcpolc9dhv8188vpbur2.apps.googleusercontent.com')
      }]
    }
  }, {
    provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_54__.JWT_OPTIONS,
    useValue: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_54__.JWT_OPTIONS
  }, _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_54__.JwtHelperService],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
})], AppModule);


/***/ }),

/***/ 76738:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutes": function() { return /* binding */ AppRoutes; }
/* harmony export */ });
/* harmony import */ var _Admin_layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Admin/layouts/admin/admin-layout.component */ 32190);
/* harmony import */ var _Admin_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Admin/layouts/admin_layout/admin_layout.component */ 63589);
/* harmony import */ var _Admin_layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Admin/layouts/auth/auth-layout.component */ 53830);
/* harmony import */ var _Admin_layouts_guest_guest_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Admin/layouts/guest/guest-layout.component */ 18473);
/* harmony import */ var _Admin_layouts_host_host_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Admin/layouts/host/host-layout.component */ 8851);
/* harmony import */ var _Admin_layouts_Hostportal_Hostportal_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Admin/layouts/Hostportal/Hostportal-layout.component */ 58089);






var AppRoutes = [{
  path: '',
  redirectTo: ' ',
  pathMatch: 'full'
}, {
  path: '',
  component: _Admin_layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__.AuthLayoutComponent,
  children: [{
    path: '',
    loadChildren: function loadChildren() {
      return Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_agm_core___ivy_ngcc___fesm2015_agm-core_js"), __webpack_require__.e("default-node_modules_ngx-socket-io___ivy_ngcc___fesm2015_ngx-socket-io_js-src_app__chat_chat_-f7f7e5"), __webpack_require__.e("default-src_app_Admin_gFooter_gFooter_component_ts-src_app_Guest_disputeDetails_disputedetail-6d810e"), __webpack_require__.e("common"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(function (m) {
        return m.HomeModule;
      });
    }
  }]
}, {
  path: 'admin',
  component: _Admin_layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__.AdminLayoutComponent,
  children: [{
    path: '',
    loadChildren: function loadChildren() {
      return Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-chips___ivy_ngcc___fesm2015_ngx-chips_js"), __webpack_require__.e("src_app_Admin_Pages_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Admin/Pages/home.module */ 64452)).then(function (m) {
        return m.HomeModule;
      });
    }
  }]
}, {
  path: '',
  component: _Admin_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_1__.Admin_layoutComponent,
  children: [{
    path: 'pages',
    loadChildren: function loadChildren() {
      return __webpack_require__.e(/*! import() */ "src_app_pages_pages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 18950)).then(function (m) {
        return m.PagesModule;
      });
    }
  }]
}, {
  path: '',
  component: _Admin_layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__.AuthLayoutComponent,
  children: [{
    path: 'Website',
    loadChildren: function loadChildren() {
      return __webpack_require__.e(/*! import() */ "src_app_Website_Website_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Website/Website.module */ 64450)).then(function (m) {
        return m.WebsiteModule;
      });
    }
  }]
}, {
  path: '',
  component: _Admin_layouts_host_host_layout_component__WEBPACK_IMPORTED_MODULE_4__.HostLayoutComponent,
  children: [{
    path: 'host',
    loadChildren: function loadChildren() {
      return __webpack_require__.e(/*! import() */ "src_app_Host_Host_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Host/Host.module */ 87661)).then(function (m) {
        return m.HostModule;
      });
    }
  }]
}, {
  path: '',
  component: _Admin_layouts_Hostportal_Hostportal_layout_component__WEBPACK_IMPORTED_MODULE_5__.HostportalLayoutComponent,
  children: [{
    path: 'hostportal',
    loadChildren: function loadChildren() {
      return Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_agm_core___ivy_ngcc___fesm2015_agm-core_js"), __webpack_require__.e("default-node_modules_ngx-socket-io___ivy_ngcc___fesm2015_ngx-socket-io_js-src_app__chat_chat_-f7f7e5"), __webpack_require__.e("default-node_modules_ngx-chips___ivy_ngcc___fesm2015_ngx-chips_js"), __webpack_require__.e("src_app_Host_Hostportal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Host/Hostportal.module */ 68893)).then(function (m) {
        return m.HostportalModule;
      });
    }
  }]
}, {
  path: '',
  component: _Admin_layouts_guest_guest_layout_component__WEBPACK_IMPORTED_MODULE_3__.GuestLayoutComponent,
  children: [{
    path: 'guest',
    loadChildren: function loadChildren() {
      return Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_agm_core___ivy_ngcc___fesm2015_agm-core_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_Guest_Guest_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Guest/Guest.module */ 49778)).then(function (m) {
        return m.GuestModule;
      });
    }
  }]
}, {
  path: '',
  component: _Admin_layouts_guest_guest_layout_component__WEBPACK_IMPORTED_MODULE_3__.GuestLayoutComponent,
  children: [{
    path: 'guestportal',
    loadChildren: function loadChildren() {
      return Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_agm_core___ivy_ngcc___fesm2015_agm-core_js"), __webpack_require__.e("default-node_modules_ngx-socket-io___ivy_ngcc___fesm2015_ngx-socket-io_js-src_app__chat_chat_-f7f7e5"), __webpack_require__.e("default-src_app_Admin_gFooter_gFooter_component_ts-src_app_Guest_disputeDetails_disputedetail-6d810e"), __webpack_require__.e("src_app_Guest_Guestportal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Guest/Guestportal.module */ 25185)).then(function (m) {
        return m.GuestportalModule;
      });
    }
  }]
}];

/***/ }),

/***/ 76089:
/*!*******************************!*\
  !*** ./src/app/appSetting.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSettings": function() { return /* binding */ AppSettings; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);


var AppSettings = /*#__PURE__*/(0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppSettings() {
  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppSettings);
});
AppSettings.base_url = 'https://oneroom3.crosip.com/api/'; // 'https://oneroom2.esquall.com/api/';// 'http://lifechangefirm.sicogb.com.pk/api/';//

AppSettings.autheticate_url = '/signIn';
AppSettings.register_url = 'Users/register';
AppSettings.OTPautheticate_url = '/sendOTP';
AppSettings.OTPResentautheticate_url = '/resendOTP';

/***/ }),

/***/ 98287:
/*!********************************************!*\
  !*** ./src/app/authguard-service.guard.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthguardServiceGuard": function() { return /* binding */ AuthguardServiceGuard; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 18259);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AuthguardServiceGuard = /*#__PURE__*/function () {
  function AuthguardServiceGuard() {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AuthguardServiceGuard);
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AuthguardServiceGuard, [{
    key: "canActivate",
    value: function canActivate(route, state) {
      return true;
    }
  }]);

  return AuthguardServiceGuard;
}();

AuthguardServiceGuard = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], AuthguardServiceGuard);


/***/ }),

/***/ 79713:
/*!****************************!*\
  !*** ./src/app/i18n/ch.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; }
/* harmony export */ });
var locale = {
  lang: 'ch',
  data: {
    trans: {
      Contact_us: "接触"
    }
  }
};

/***/ }),

/***/ 45106:
/*!****************************!*\
  !*** ./src/app/i18n/en.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; }
/* harmony export */ });
var locale = {
  lang: 'en',
  data: {
    trans: {
      Contact_us: "Contact Us",
      Type_your_password: "Type your password",
      View: "View",
      Need_to_change_your_email_address: "Need to change your email addresss",
      No_problem_type_a_new_one_above: "No problem, type a new one above, your account is secure we'll ask you to pass authentication confirms it's really you.",
      New_Email: "New Email",
      Re_Type_email: "Re-Type email",
      Save_changes: "Save changes",
      Enter_your_code: "Enter your code",
      Submit: "Submit",
      I_am_having_trouble: "I am having trouble",
      change_password: "change password",
      Current_password: "Current password",
      New_password: "New password",
      update: "update",
      Andrew_Mckinely: "Andrew Mckinely",
      Hello_My_Name_is_George_Deglin: "Hello, My Name is George Deglin",
      Hi_attached_his_guide: "Hi, attached his guide",
      Okay_let_me_take_a_look: "Okay, let me take a look",
      Create_your_dream_book_now: "Create your dream, book now",
      Add_rooms_and_guests: "Add rooms and guests",
      Enter_destinantion: "Enter destinantion",
      Add_dates: "Add dates",
      Grossmunster: "Grossmunster",
      List_your_offers_on_OneRooms: "List your offers on OneRooms",
      Wishlists_selected_by_company: "Wishlists selected by company",
      chillon_castle: "chillon castle",
      Bernina_Express: "Bernina Express",
      Swiss_Museum_of_Transport: "Swiss Museum of Transport",
      See_More: "See More",
      Earn_extra_income_and_unlock: "Earn extra income and unlock new opportunities be sharing your offers",
      How_oneRooms_works: "How oneRooms works",
      Newsroom: "Newsroom",
      Latest_Blog: "Latest Blog",
      Careers: "Careers",
      Search: "Search",
      Host_your_offer: "Host your offer",
      Responsible_Hosting: "Responsible Hosting",
      Resource_Centre: "Resource Centre",
      Community_centre: "Community centre",
      Dedicated_support_system: "Dedicated support system",
      Support: "Support",
      Our_covid_19_Response: "Our covid-19 Response",
      Cancellation_options: "Cancellation options",
      Neighbourhood_Support: "Neighbourhood Support",
      Terms_of_use: "Terms of use",
      Trust_Safety: "Trust & Safety",
      Privacy_portal: "Privacy portal",
      Cookie_preference: "Cookie preference",
      Sign_Up: "Sign Up",
      Password: "Password",
      Hide: "Hide",
      We_ll_send_you_a_confirmation_email: "We'll send you a confirmation email. Please verify your email adress.",
      Continue: "Continue",
      OR: "OR",
      Already_have_an_account_Sign_In: "Already have an account?",
      Welcome_to_One_Rooms: "Welcome to One Rooms",
      Finishing_signing_up: "Finishing signing up",
      First_Name: "First Name",
      Last_Name: "Last Name",
      Telephone_number: "Telephone number (optional)",
      By_selecting_Agree_and_Continue_below: "By selecting Agree and Continue below, I Agree to compa.Terms of service, Payments Terms of service, Privacy Policy, and Nondiscrimination policy",
      Sign_In: "Sign In",
      Forgot_password: "Forgot password",
      Do_not_have_an_account_Sign_Up: "Don't have an account?",
      List_your_offers: "List your offers",
      Help_center: "Help center",
      Mohammdpur_Dhaka: "Mohammdpur, Dhaka",
      Room: "Room",
      Adults: "Adults",
      Children: "Children",
      Select_rooms_and_guests: "Select rooms and guests",
      Age_of_children_at_check_out: "Age of children at check-out",
      add_the_age_of_each_child: "add the age of each child to get the best match for bed, room size and special prices.",
      Before: "Before",
      Duration: "Duration",
      offers: "offers",
      offer_title_here: "offer title here",
      Discount: "Discount",
      Period: "Period",
      Price: "Price",
      a_welcome_drink: "a welcome drink",
      Filters: "Filters",
      House: "House",
      Apartment: "Apartment",
      Hotel_Room: "Hotel Room",
      Show_result_by: "Show result by",
      Distance: "Distance",
      Equipment_features: "Equipment features",
      Languages: "Languages",
      Wifi: "Wifi",
      whirlpool: "whirlpool",
      Fitness_center: "Fitness center",
      Free_Parking: "Free Parking",
      Pet_Friendly: "Pet Friendly",
      Restaurant: "Restaurant",
      Room_Service: "Room Service",
      Spa: "Spa",
      Swimming_Pool: "Swimming Pool",
      Internet: "Internet",
      Credit_card_support: "Credit card support",
      Terms_Policies: "Terms/Policies",
      Adress_with_map: "Adress with map",
      Finish_booking: "Finish booking",
      Booking_info: "Booking info",
      Country_Region: "Country/ Region",
      city: "city",
      select_city: "select city",
      After: "After",
      select_country: "select country",
      Save_account_information: "Save account information?",
      Experienced_doctors_are: "Experienced doctors are ready to help ???? What do you mean ??",
      Save_charges: "Save charges",
      Discover_nearby: "Discover nearby",
      Discover: "Discover",
      Booking: "Booking",
      Profile: "Profile",
      What_are_you_looking_for: "What are you looking for",
      Where_in_the_world: "Where in the world",
      share_your_location: "share your location with the company in setting to help find your perfect place to stay",
      OK_Go_to_setting: "OK, Go to setting",
      I_will_do_it_later: "I'll do it later",
      Select_Date: "Select Date",
      Add_buffer_range: "Add buffer range",
      Apply: "Apply",
      Book_for_User_Name: "Book for User Name",
      Non_refundable: "Non-refundable",
      superior_double_room: "superior double room",
      Booking_conditions: "Booking conditions",
      confirmed: "confirmed",
      Your_acommodation_booking: "Your acommodation booking",
      You_are_all_set: "You're all set! We will send you a confirmation email at example@gmail.com",
      Confirmation_Number: "Confirmation Number",
      PIN: "PIN",
      Let_me_know_your_thoughts: "Let me know your thoughts",
      Language: "Language",
      FAQs: "FAQs",
      safety_center: "safety center",
      Give_us_feedback: "Give us feedback",
      Logout: "Logout",
      Become_a_host: "Become a host",
      Our_story: "Our story",
      One_Room_has_two_headquarters: "One Room has two headquarters, In switzerland and USA",
      One_Rooms_launched: "One Rooms launched",
      Host_list: "Host list",
      Of_One_Rooms_users: "Of One Rooms users",
      What_One_Rooms_offers: "What One Rooms offers",
      Search_fast_Save_Search: "Search fast, Save Search",
      Low_rates: "Low rates",
      Chat_with_the_host: "Chat with the host",
      Frequently_asked_questions: "Frequently asked questions",
      Do_I_have_to_host_a_home: "Do I have to host a home to post an experience",
      Host: "Host",
      Guest: "Guest",
      What_the_time_commitment: "What's the time commitment",
      Do_I_need_a_business_license: "Do I need a business license",
      Depending_on_activities_involved: "Depending on activities involved, Certain experience may require a business license. Make sure to check local laws in your area to determine which license may required for your experience, especially if there is food, alcohol or transportation involved",
      Do_I_need_insurance: "Do I need insurance",
      guests_per_experience: "Can I set a minimum number of guests per experience",
      Can_I_host_with_someone_else: "Can I host with someone else",
      Let_Talk: "Let's Talk",
      Contact_info: "Contact info",
      Send_us_message: "Send us a message",
      Full_Name: "Full Name",
      Phone: "Phone",
      Subject: "Subject",
      I_m_not_a_robot: "I'm not a robot",
      Message: "Message",
      send_inquiry: "send inquiry",
      Public_art: "Public art ",
      Music: "Music",
      Graphic_design: "Graphic design",
      perfomic_arts: "perfomic arts",
      More_articles: "More articles",
      Explore_more_exciting_updates_articles: "Explore more exciting updates & articles",
      Enter_you_email: "Enter you email",
      subscribe: "subscribe",
      your_next_getaway: "You're just 3 steps away from your next getaway",
      Search_offers: "Search offers",
      Book: "Book",
      Chat_and_go: "Chat and go",
      Easily_sign_up: "Easily sign up",
      Easily_create_your_offers: "Easily create your offers",
      Chat_with_Guests: "Chat with Guests",
      Invoices: "Invoices",
      Pin_the_location_of_your_offer: "Pin the location of your offer",
      Minibar: "Minibar",
      Balcony: "Balcony",
      Electric_vehicle_chrging_station: "Electric vehicle charging station",
      Do_you_want_to_pay_now: "Do you want to pay now",
      Update_info: "Update info",
      Offer: "Offer",
      blogs: "Blogs",
      about_us: "About us",
      contact: "Contact",
      Registration_can_take: "Registration can take as little as 1 minute to complete Get started today",
      Try_offers: "Try offers",
      Wherever_you_go: "Wherever you go, we're here to help ",
      List_any_type_of_offer: "List any type of offer",
      Easily_import_details: "Easily import details",
      Step_by_step_guide: "Step-by-step guide",
      You_can_host_anything_anywhere: "You can host anything anywhere",
      I_love_host_my_eco_home: "I love host my eco-home so people can connect with nature and their loved ones. Taking care of guests in our offer",
      Hosting_my_home: "Hosting my home allowed me to become an entrepreneur and laid down a path financial freedom",
      Insight_in_numbers_on_OneRooms: "Insight in numbers on OneRooms",
      Join_over: "Join over 847+ Happy hosts and get more offers. Download Now ",
      surname: "surname",
      Insight: "Insight",
      Account_type: "Account type",
      choose_a_plan: "choose a plan",
      Beginners: "Beginners",
      Offers_per_month: "Offers per month",
      Pay_as_you_go: "Pay as you go",
      Each_room_you_advertise: "Each room you advertise",
      small: "small",
      free_posting_per_month: "free posting per month",
      Large: "Large",
      Enterprise: "Enterprise",
      Let_Chat: "Let's Chat",
      Create_offers: "Create offers",
      Booked_offers: "Booked offers",
      Inbox: "Inbox",
      Profiles: "Profiles",
      Create: "Create",
      Let_set_up_your_offer: "Let's set up your offer",
      Overview: "Overview",
      offer_title: "offer title",
      offer_type: "offer type",
      Photo_Video: "Photo & Video",
      Capacity: "Capacity",
      Location: "Location",
      Term_policies: "Term/policies",
      Publish: "Publish",
      save_and_exit: "save and exit",
      Next: "Next",
      Back: "Back",
      Price_your_offer: "Price your offer",
      To_help_you_earn_more: "To help you earn more, your price will move closer to this, when the demand is high and need to reward",
      type_the_price: "type the price",
      Add_photos_and_videos_to_your_offer: "Add photos and videos to your offer",
      How_many_guests_can_stay: "How many guests can stay",
      How_many_bathrooms_are_there: "How many bathrooms are there",
      which_beds_are_available_in_this_room: "which beds are available in this room",
      single_bed: "single bed",
      Double_bed: "Double bed",
      Large_size: "Large size(King size)",
      Extra_large_double_bed: "Extra-large double bed ",
      Date_range: "Date range",
      Description: "Description",
      type_the_description: "type the description",
      What_offer_you_propose: "What is the offer you propose",
      Language_spoken: "Language spoken ",
      Offer_your_first_booking: "Offer a one time discount to your first booking",
      Offer_20_off: "Offer 20% off to your first visitor",
      who_book_your_service: "The first 3 booking (so you can get 3 reviews and your star rating) who book your service will get 20% off their service",
      Recommended: "Recommended",
      Edit: "Edit",
      Discount_update: "Discount update",
      Number_of_percentage: "Number of percentage",
      Number_of_booking: "Number of booking",
      Offer_publish: "Offer publish",
      Active: "Active",
      Inactive: "Inactive",
      check_In: "check-In",
      check_out: "check-out",
      Guests: "Guests",
      offer_No: "offer no",
      offer_here: "offer name here",
      status: "status",
      open: "open",
      customer_name: "customer name",
      Booked_details: "Booked details",
      George_deglin: "George deglin",
      booked_info: "Booked info",
      Offer_overview: "Offer overview",
      Discusse_changes_to_your_booking: "Discusse changes to your booking or ask about payments and refunds ",
      Message_offer: "Message offer",
      send_a_message: "send a message",
      Contact_number: "Contact number",
      View_facilites: "View facilites",
      Settings: "Settings",
      Personal_info: "Personal info",
      Name: "Name",
      Email: "Email",
      Mobile: "Mobile",
      Website: "Website",
      VAT_Number: "VAT Number",
      Address: "Address",
      subash_chandra: "subash chandra",
      wallet: "wallet",
      subscriptions: "subscriptions",
      select_payment_method: "select payment method",
      Expiration_date: "Expiration date",
      payment_method: "payment method",
      Paypal_information: "Paypal information",
      save: "Save",
      Credit_card: "Credit card",
      Zip_code: "Zip code",
      Card_information: "Card information",
      CVV: "CVV",
      Large_pro: "Large pro (Monthly)",
      Cancel_subscription: "Cancel subscription",
      change_Email: "change Email",
      Password_required: "Password required",
      So_we_can_change_your_email: "So we can change your email. We require you to enter your password. Learn More",
      Your_Password: "Your Password",
      No_problem: "No problem, type a new one above, your account is secure we'll ask you to pass authentication confirms it's really you.",
      How_can_I_help_you: "How can I help you?",
      Call_Now: "Call Now",
      You_are_just_3_steps_away_from_your_next_getaway: "You're just 3 steps away from your next getaway",
      Destination: "Destination",
      Save_Search: "Save Search",
      Home: "Home",
      Booking_List: "Booking List",
      Listed: "Listed",
      Unlisted: "Unlisted",
      Offer_List: "Offer List",
      Cancel: "Cancel",
      Upload_Photos: "Upload Photos",
      How_many_rooms_are_there: " How many rooms are there",
      Large_bed: "Large bed (King size)",
      Dashboard: "Dashboard",
      Learn_more: "Learn more",
      Completed: "Completed",
      Cancelled: "Cancelled",
      Dispute: "Dispute",
      Update: "Update",
      Surname: "Surname",
      Current_Subscriptions: "Current Subscriptions",
      Payment: "Payment",
      Change_Password: "Change Password",
      type_new_password: "Re-type new password",
      Change_email: "Change email",
      Chatting: "Chatting",
      Contact_with_us: "Contact with us",
      Subsidiary: "Subsidiary",
      Forgot_Password: "Forgot Password",
      Booked_List: "Booked List",
      Offer_address: "Offer address",
      Get_Direction: "Get Direction",
      Offer_policies: "Offer policies",
      View_all_policies: "View all policies",
      Contact_to_Customer: "Contact to Customer",
      Discuss_changes_to_your_booking: "Discuss changes to your booking or ask about payments and refunds",
      Total_price_for: "Total price for",
      rooms: "rooms",
      Cancel_Booking: "Cancel Booking",
      Cancellation_Reason: " Cancellation Reason ",
      Show_All_Photos: "Show All Photos",
      Total: "Total",
      Address_with_Map: "Address with Map",
      Sort_results_by: "Sort results by",
      Filter_results_by: "Filter results by",
      Property_Type: "Property Type",
      Book_number: "Book number",
      Facilities: "Facilities",
      Close: "Close",
      Your_budget: "Your budget",
      Re_type_new_password: "Retype New Password",
      Book_Now: "Book Now",
      Add: "Add",
      Price_for: "Price for",
      Contact_the_offer: "Contact the offer"
    }
  }
};

/***/ }),

/***/ 72255:
/*!****************************!*\
  !*** ./src/app/i18n/fr.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; }
/* harmony export */ });
var locale = {
  lang: 'fr',
  data: {
    trans: {
      Type_your_password: "Tapez votre mot de passe",
      View: "Regarder",
      Need_to_change_your_email_address: "Vous devez changer votre adresse e-mail.",
      No_problem_type_a_new_one_above: "Pas de problème, entrez-en un nouveau ci-dessus. Votre compte est en sécurité. Nous vous demanderons de passer l'authentification pour confirmer qu'il s'agit bien de vous.",
      New_Email: "Nouveau courriel",
      Re_Type_email: "Entrez à nouveau l'e-mail",
      Save_changes: "Sauvegarder les modifications",
      Enter_your_code: "entrez votre code",
      Submit: "Nous faire parvenir",
      I_am_having_trouble: "j'ai des problèmes",
      change_password: "Changer le mot de passe",
      Current_password: "Mot de passe actuel",
      New_password: "nouveau mot de passe",
      update: "Mettre à jour",
      Andrew_Mckinely: "Andrew Mckinely",
      Hello_My_Name_is_George_Deglin: "Bonjour, je m'appelle Georg Deglin",
      Hi_attached_his_guide: "Bonjour, voici vos instructions.",
      Okay_let_me_take_a_look: "D'accord, laisse moi voir.",
      Create_your_dream_book_now: "Créez votre rêve, réservez maintenant",
      Search: "Chercher",
      Add_rooms_and_guests: "Ajouter des chambres et",
      Enter_destinantion: "des invités",
      Add_dates: "Ajouter des dates de voyage",
      Grossmunster: "Grossmünster",
      List_your_offers_on_OneRooms: "Publique sus ofertas en OneRooms",
      Wishlists_selected_by_company: "Listes de souhaits sélectionnées par les entreprises",
      chillon_castle: "Château de Chillon",
      Bernina_Express: "Bernina Express",
      Swiss_Museum_of_Transport: "Musée Suisse des",
      See_More: "Transports",
      Earn_extra_income_and_unlock: "Gagnez des revenus supplémentaires et ouvrez de nouvelles opportunités en partageant vos offres",
      How_oneRooms_works: "Voici comment fonctionne",
      Newsroom: "oneRooms",
      Latest_Blog: "Dernier blog",
      Careers: "Carrière",
      Host_your_offer: "Hébergez votre offre",
      Responsible_Hosting: "Hébergement responsable",
      Resource_Centre: "centre de ressources",
      Community_centre: "Centre communautaire",
      Dedicated_support_system: "Système d'assistance dédié",
      Support: "Support",
      Our_covid_19_Response: "Notre réponse au Covid-19",
      Cancellation_options: "possibilités d'annulation",
      Neighbourhood_Support: "aide de quartier",
      Terms_of_use: "Conditions d'utilisation",
      Trust_Safety: "confiance et sécurité",
      Privacy_portal: "Portail de confidentialité",
      Cookie_preference: "Préférence relative aux cookies",
      Sign_Up: "S'inscrire",
      Password: "le mot de passe",
      Hide: "Cacher",
      We_ll_send_you_a_confirmation_email: "Nous vous enverrons un e-mail de confirmation à votre adresse e-mail. Veuillez confirmer votre email.",
      Continue: "Continuez",
      OR: "ou",
      Already_have_an_account_Sign_In: "Vous avez déjà un compte?",
      Welcome_to_One_Rooms: "Bienvenue à One Rooms",
      Finishing_signing_up: "terminer l'inscription",
      First_Name: "Vormane",
      Last_Name: "nom de famille",
      Telephone_number: "Numéro de téléphone (facultatif)",
      By_selecting_Agree_and_Continue_below: "En sélectionnant 'Accepter et continuer' ci-dessous, j'accepte les conditions d'utilisation, les conditions de paiement, la politique de confidentialité et la politique de non-discrimination de compa.",
      Sign_In: "S'inscrire",
      Forgot_password: "Mot de passe oublié?",
      Do_not_have_an_account_Sign_Up: "Vous n'avez pas de compte ?",
      List_your_offers: "Listez vos offres",
      Help_center: "centre d'aide",
      Mohammdpur_Dhaka: "Mohammedpur, Dacca",
      Room: "salle",
      Adults: "Adultes",
      Children: "enfants",
      Select_rooms_and_guests: "Sélectionnez les chambres et les invités",
      Age_of_children_at_check_out: "Âge des enfants au départ",
      add_the_age_of_each_child: "Ajoutez l'âge de chaque enfant pour obtenir la meilleure correspondance pour le lit, la taille de la chambre et les tarifs spéciaux.",
      Before: "Avant de",
      After: "après",
      Duration: "une longueur de temps",
      offers: "des offres",
      offer_title_here: "nom de l'offre",
      Discount: "remise",
      Period: "point final",
      Price: "le prix",
      a_welcome_drink: "Un verre de bienvenue gratuit",
      Filters: "filtre",
      House: "loger",
      Apartment: "appartement",
      Hotel_Room: "Chambre d'hôtel",
      Show_result_by: "Voir les résultats",
      Recommended: "conseillé",
      Distance: "distance",
      Equipment_features: "Caractéristiques",
      Languages: "langues",
      Wifi: "Accès Internet sans fil",
      whirlpool: "jacuzzi",
      Fitness_center: "Centre Fitness",
      Free_Parking: "Parking gratuit",
      Pet_Friendly: "respectueux des animaux",
      Restaurant: "restaurant",
      Room_Service: "service de chambre",
      Spa: "spa",
      Swimming_Pool: "piscine",
      Internet: "l'Internet",
      Credit_card_support: "prise en charge des cartes de crédit",
      Terms_Policies: "Conditions d'utilisation/Politiques",
      Adress_with_map: "adresse avec carte",
      Finish_booking: "réservation complète",
      Booking_info: "informations de réservation",
      Country_Region: "Pays/Région",
      city: "ville",
      select_city: "choisir la ville",
      select_country: "Choisissez un pays",
      Save_account_information: "Enregistrer les informations de compte ?",
      Experienced_doctors_are: "Des médecins expérimentés sont prêts à vous aider",
      Save_charges: "Sauvegarder les modifications?",
      Discover_nearby: "Découvrir à proximité",
      Discover: "Découvrir à proximité",
      Booking: "billetterie",
      Profile: "profil",
      What_are_you_looking_for: "Qu'est-ce que tu cherches?",
      Where_in_the_world: "Où dans le monde",
      share_your_location: "Partagez votre position avec les entreprises à proximité pour trouver votre lieu de séjour idéal",
      OK_Go_to_setting: "OK, allez dans les paramètres",
      I_will_do_it_later: "je le ferais plus tard",
      Select_Date: "sélectionner une date",
      Add_buffer_range: "Ajouter une zone tampon",
      Apply: "Utiliser",
      Book_Now: "Reserve maintenant",
      Book_for_User_Name: "Réservez pour 'nom d'utilisateur'",
      Non_refundable: "Non remboursable (pas de remboursement)",
      superior_double_room: "Chambre double supérieure",
      Booking_conditions: "Conditions de réservation",
      confirmed: "Confirmé",
      Your_acommodation_booking: "votre réservation d'hébergement",
      You_are_all_set: "Tu est prêt! Nous vous enverrons un e-mail de confirmation à example@gmail.com",
      Confirmation_Number: "numéro de confirmation",
      PIN: "code PIN",
      Let_me_know_your_thoughts: "Dites moi ce que vous en pensez",
      Settings: "réglages",
      Language: "Langue",
      FAQs: "FAQ",
      safety_center: "centre de sécurité",
      Give_us_feedback: "Donnez-nous vos commentaires",
      Logout: "Se déconnecter",
      Become_a_host: "Devenir hôte",
      Our_story: "Notre histoire",
      One_Room_has_two_headquarters: "One Room a deux sièges sociaux en Suisse et aux États-Unis.",
      One_Rooms_launched: "One Room est lancé ",
      Host_list: "Liste d'hébergement ",
      Of_One_Rooms_users: "Par les utilisateurs de One Room",
      What_One_Rooms_offers: "Ce que propose One Room",
      Search_fast_Save_Search: "Recherche rapide, enregistrer la recherche",
      Low_rates: "Taux bas",
      Chat_with_the_host: "Discuter avec l'hôte",
      Frequently_asked_questions: "Questions fréquemment posées",
      Do_I_have_to_host_a_home: "Dois-je héberger une maison pour publier une expérience.",
      Host: "hôte",
      Guest: "Client",
      What_the_time_commitment: "Combien de temps faut-il",
      Do_I_need_a_business_license: "Ai-je besoin d'une licence commerciale?",
      Depending_on_activities_involved: "Selon les activités concernées, une licence commerciale peut être requise. Assurez-vous de vérifier les lois locales de votre région pour déterminer quelle licence est requise, en particulier en ce qui concerne la nourriture, l'alcool ou le transport.",
      Do_I_need_insurance: "Ai-je besoin d'une assurance ?",
      guests_per_experience: "Puis-je définir un nombre minimum d'invités ?",
      Can_I_host_with_someone_else: "Puis-je héberger avec quelqu'un d'autre ?",
      Let_Talk: "parlons",
      Contact_info: "Informations de contact",
      Send_us_message: "Envoyer un message",
      Full_Name: "Nom et prénom",
      Phone: "numéro de téléphone",
      Subject: "objet",
      I_m_not_a_robot: "Je ne suis pas un robot",
      Message: "message",
      send_inquiry: "Envoyer une demande",
      Public_art: "l'art public",
      Music: "la musique",
      Graphic_design: "conception graphique",
      perfomic_arts: "Performance artistique ",
      More_articles: "Plus d'articles",
      Explore_more_exciting_updates_articles: "Découvrez d'autres mises à jour et articles passionnants",
      Enter_you_email: "Entrez votre adresse email",
      subscribe: "S'abonner à",
      your_next_getaway: "Vous n'êtes qu'à 3 pas de votre prochaine escapade",
      Search_offers: "Rechercher des offres",
      Book: "Réservation ",
      Chat_and_go: "Chattez et partez !",
      Easily_sign_up: "Inscrivez-vous simplement",
      Easily_create_your_offers: "Créez facilement vos offres",
      Chat_with_Guests: "Discuter avec les invités",
      Invoices: "factures",
      Pin_the_location_of_your_offer: "Épinglez l'emplacement de votre offre",
      Minibar: "mini-bar",
      Balcony: "balcon/terrasse",
      Electric_vehicle_chrging_station: "Borne de recharge pour véhicules électriques",
      Do_you_want_to_pay_now: "Souhaitez-vous payer maintenant ?",
      Update_info: "mettre à jour les informations",
      Delete: "Éteindre",
      Offer: "Offrir",
      blogs: "Blogs",
      about_us: "à propos de nous",
      contact: "Contact",
      Registration_can_take: "L'inscription peut prendre 1 minute. Commencez dès aujourd'hui.",
      Try_offers: "Essayez les offres",
      For_Offers: "Pour les offres",
      Wherever_you_go: "Où que vous alliez, nous sommes là pour vous aider.",
      List_any_type_of_offer: "Énumérez chaque type d'offre.",
      Easily_import_details: "Importez simplement les détails",
      Step_by_step_guide: "Guide étape par étape",
      You_can_host_anything_anywhere: "Vous pouvez héberger n'importe quoi, n'importe où",
      I_love_host_my_eco_home: "J'adore héberger ma maison écologique pour permettre aux gens de se connecter avec la nature et leurs proches. Le service à la clientèle est notre offre.",
      Hosting_my_home: "Héberger ma maison m'a permis de devenir entrepreneur et de m'engager sur la voie de la liberté financière",
      Insight_in_numbers_on_OneRooms: "Aperçu des chiffres pour One Rooms",
      Join_over: "Rejoignez plus de 847 hôtes heureux et obtenez plus d'offres. Télécharger maintenant",
      surname: "nom de famille",
      Insight: "aperçu",
      Account_type: "Type de compte",
      choose_a_plan: "Choisissez un forfait",
      Beginners: "Débutant",
      Offers_per_month: "Offres par mois",
      Pay_as_you_go: "Payez quand vous sortez",
      Each_room_you_advertise: "N'importe quelle pièce où vous faites de la publicité.",
      small: "Petit",
      free_posting_per_month: "Publication gratuite par mois",
      Large: "Gros",
      Enterprise: "Entreprise",
      Contact_Us: "Contactez-nous",
      Let_Chat: "Parlons",
      Create_offers: "Créer une offre",
      Booked_offers: "Offres réservées",
      Inbox: "Boîte de réception",
      Profiles: "Profil",
      Create: "Créer",
      Let_set_up_your_offer: "Laissez-nous créer votre offre",
      Overview: "Aperçu",
      offer_title: "Titre de l'annonce",
      offer_type: "Type d'offre",
      Photo_Video: "Photo & Vidéo",
      Capacity: "Capacité",
      Location: "Position",
      Term_policies: "Conditions d'utilisation/Politiques",
      Publish: "Publier",
      save_and_exit: "Sauver et fermer",
      Next: "Arrière",
      Back: "Suivant",
      Price_your_offer: "Évaluez votre offre",
      To_help_you_earn_more: "Pour vous aider à gagner plus, votre prix s'en approchera lorsque la demande est élevée et doit être récompensée",
      type_the_price: "Entrez le prix",
      Add_photos_and_videos_to_your_offer: "Ajoutez des photos et des vidéos à votre offre",
      How_many_guests_can_stay: "Combien d'invités peuvent séjourner ?",
      How_many_bathrooms_are_there: "Combien de salle de bain y a t-il?",
      which_beds_are_available_in_this_room: "Quels lits sont disponibles dans cette chambre ?",
      single_bed: "Lit simple",
      Double_bed: "Lit double",
      Large_size: "Grande taille",
      Extra_large_double_bed: "Très grand lit double",
      Date_range: "plage de dates (Disponibilité)",
      Description: "La description",
      type_the_description: "Entrez le descriptif",
      What_offer_you_propose: "Quelle est l'offre que vous proposez ?",
      Language_spoken: "Langue parlée",
      Offer_your_first_booking: "Offrez une remise unique sur votre première réservation",
      Offer_20_off: "Offrez à votre premier visiteur une remise de 20%",
      who_book_your_service: "Les 3 premières réservations (vous pouvez donc obtenir 3 avis et votre classement par étoiles) pour réserver votre service bénéficieront d'une réduction de 20% sur leur service.",
      Edit: "Éditer",
      Discount_update: "Mettre à jour la remise",
      Number_of_percentage: "pourcentage",
      Number_of_booking: "Numéro de réservation",
      Offer_publish: "publier une offre",
      Active: "actif",
      Inactive: "Inactif",
      check_In: "Check In",
      check_out: "Check Out",
      Guests: "Invités",
      Offer_No: "cite un nombre",
      offer_here: "Nom de l'offre ici",
      status: "statut",
      open: "Ouvrir",
      customer_name: "Nom du client",
      Booked_details: "les détails de réservation",
      George_deglin: "George Deglin",
      booked_info: "Informations de réservation",
      Offer_overview: "Aperçu de l'offre",
      Discusse_changes_to_your_booking: "Discutez des modifications apportées à votre réservation ou posez des questions sur les paiements et les remboursements",
      Message_offer: "offre de nouvelles",
      send_a_message: "envoyer un message",
      Contact_number: "numéro de contact",
      View_facilites: "voir équipement",
      Personal_info: "Renseignements personnels",
      Name: "Nom de famille",
      Email: "Email",
      Mobile: "numéro de téléphone",
      Website: "page Web",
      VAT_Number: "numéro de TVA",
      Address: "adresse",
      subash_chandra: "Subash Chandra",
      wallet: "portefeuille",
      subscriptions: "abonnement",
      select_payment_method: "Choisissez le mode de paiement",
      Expiration_date: "Date d'expiration",
      payment_method: "mode de paiement",
      Paypal_information: "Informations PayPal",
      save: "Enregistrer sur ordinateur",
      Credit_card: "Carte de crédit",
      Zip_code: "code postal",
      Card_information: "informations sur la carte",
      CVV: "Numéro de vérification de carte",
      Large_pro: "Large Pro (Mensuel)",
      Cancel_subscription: "Se désabonner",
      change_Email: "Changer l'e-mail",
      Password_required: "Mot de passe requis",
      So_we_can_change_your_email: "Afin que nous puissions modifier votre email, veuillez entrer le mot de passe. Apprendre encore plus",
      Your_Password: "Votre mot de passe",
      Type_Password: "Tapez votre mot de passe",
      No_problem: "No problem, type a new one above, your account is secure we'll ask you to pass authentication confirms it's really you.",
      How_can_I_help_you: "Comment puis-je vous aider?",
      Call_Now: "Appelle maintenant",
      You_are_just_3_steps_away_from_your_next_getaway: "Vous n'êtes plus qu'à 3 pas de votre prochaine escapade",
      Destination: "Destination",
      Save_Search: "Enregistrer la recherche",
      Home: "Domicile",
      Booking_List: "Réservation Liste",
      Listed: "Listé",
      Unlisted: "Non répertorié",
      Offer_List: " Liste des offres",
      Cancel: "Annuler",
      Upload_Photos: "Télécharger des photos",
      How_many_rooms_are_there: " Combien y a-t-il de chambres",
      Large_bed: "Grand lit (King size)",
      Dashboard: "Tableau de bord",
      Learn_more: "Apprendre encore plus",
      Completed: "Terminé",
      Cancelled: "Annulé",
      Dispute: "Litige",
      Update: "Mise à jour",
      Surname: "Nom de famille",
      Current_Subscriptions: "Abonnements en cours",
      Payment: "Paiement",
      Change_Password: "Changer le mot de passe",
      type_new_password: "Re-taper le nouveau mot de passe",
      Change_email: "Changer l'e-mail",
      Chatting: "Bavardage",
      Contact_with_us: "En contact avec nous",
      Subsidiary: "Filiale",
      Forgot_Password: "Mot de passe oublié",
      Booked_List: "Liste réservée",
      Offer_address: "Adresse de l'offre",
      Get_Direction: "Obtenir l'itinéraire",
      Offer_policies: "Politiques d'offre",
      View_all_policies: "Voir toutes les politiques",
      Contact_to_Customer: "Contacter le client",
      Discuss_changes_to_your_booking: "Discutez des modifications apportées à votre réservation ou posez des questions sur les paiements et les remboursements",
      Total_price_for: "Prix total pour",
      rooms: "pièces",
      Cancel_Booking: "Annuler la réservation",
      Cancellation_Reason: " Motif d'annulation ",
      Show_All_Photos: "Afficher toutes les photos",
      Total: "Total",
      Address_with_Map: "Adresse avec carte",
      Sort_results_by: "Trier les résultats par",
      Filter_results_by: "Filtrer les résultats par",
      Property_Type: "Type de propriété",
      Book_number: "Numéro de livre",
      Facilities: "Installations",
      Close: "proche",
      Your_budget: "Ton budget",
      Re_type_new_password: "Re-taper le nouveau mot de passe"
    }
  }
};

/***/ }),

/***/ 27020:
/*!****************************!*\
  !*** ./src/app/i18n/gr.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; }
/* harmony export */ });
var locale = {
  lang: 'gr',
  data: {
    trans: {
      Contact_us: "Kontaktieren sie uns",
      Type_your_password: "Geben sie Ihr Passwort ein",
      View: "Ansehen",
      Need_to_change_your_email_address: "Sie müssen Ihre email Adresse ändern.",
      No_problem_type_a_new_one_above: "Kein Problem, geben Sie oben ein neues ein. Ihr Konto ist sicher. Wir werden Sie bitten, die Authentifizierung zu bestehen, um zu bestätigen, dass Sie es wirklich sind.",
      New_Email: "Neue email",
      Re_Type_email: "Email erneut eingeben",
      Save_changes: "Änderung speichern",
      Enter_your_code: "Geben sie Ihren Code ein",
      Submit: "Einreichen",
      I_am_having_trouble: "Ich habe Probleme",
      change_password: "Passwort ändern",
      Current_password: "Aktuelles Passwort",
      New_password: "Neues Password",
      update: "Aktualisieren",
      Andrew_Mckinely: "Andrew Mckinely",
      Hello_My_Name_is_George_Deglin: "Hallo, mein Name ist Georg Deglin",
      Hi_attached_his_guide: "Hallo, anbei Ihre Anleitung.",
      Okay_let_me_take_a_look: "Okay, lassen sie mich mal sehen.",
      Create_your_dream_book_now: "Erschaffen sie Ihren Traum, jetzt buchen",
      Search: "Suchen",
      Add_rooms_and_guests: "Zimmer und Gäste hinzufügen",
      Enter_destinantion: "Zielort eingeben",
      Add_dates: "Reisedaten hinzufügen",
      Grossmunster: "Grossmünster",
      List_your_offers_on_OneRooms: "Listen Sie Ihre Angebote auf OneRooms auf",
      Wishlists_selected_by_company: "Wunschlisten von Unternehmen ausgewählt",
      chillon_castle: "Schloss Chillon",
      Bernina_Express: "Bernina Express",
      Swiss_Museum_of_Transport: "Verkehrshaus Schweiz",
      See_More: "Siehe mehr",
      Earn_extra_income_and_unlock: "Verdienen Sie zusätzliches Einkommen und erschließen Sie neue Möglichkeiten, indem Sie Ihre Angebote teilen",
      How_oneRooms_works: "So funktioniert oneRooms",
      Newsroom: "Nachrichtenredaktion",
      Latest_Blog: "Neuster Blog",
      Careers: "Karriere",
      Host: "Gastgeber",
      Host_your_offer: "Hosten sie Ihr Angebot",
      Responsible_Hosting: "Verantwortungsvolles Gastgeben",
      Resource_Centre: "Ressourcenzentrum",
      Community_centre: "Gemeindezentrum",
      Dedicated_support_system: "Engagiertes Unterstüzungs-System",
      Support: "Unterstützung",
      Our_covid_19_Response: "Unsere Covid-19-Antwort",
      Cancellation_options: "Stornierungsmöglichkeiten",
      Neighbourhood_Support: "Nachbarschaftshilfe",
      Terms_of_use: "Nutzungsbedingungen",
      Trust_Safety: "Vertrauen & Sicherheit",
      Privacy_portal: "Datenschutzportal",
      Cookie_preference: "Cookie-Präferenz",
      Sign_Up: "Anmelden",
      Password: "Passwort",
      Hide: "Verbergen",
      We_ll_send_you_a_confirmation_email: "Wir senden Ihnen eine Bestätigungs-E-Mail an Ihre E-Mail-Adresse. Bitte bestätigen Sie Ihre E-Mail.",
      Continue: "Fortsetzen",
      OR: "oder",
      Already_have_an_account_Sign_In: "Sie haben bereits ein Konto?",
      Welcome_to_One_Rooms: "Willkommen bei One Rooms",
      Finishing_signing_up: "Anmeldung abschließen",
      First_Name: "Vormane",
      Last_Name: "Nachname",
      Telephone_number: "Telefonnummer (optional)",
      By_selecting_Agree_and_Continue_below: "Indem ich unten „Zustimmen und fortfahren“ auswähle, stimme ich den compa.Nutzungsbedingungen, den Zahlungsbedingungen, der Datenschutzrichtlinie und der Nichtdiskriminierungsrichtlinie zu",
      Sign_In: "Anmelden",
      Forgot_password: "Passwort vergessen?",
      Do_not_have_an_account_Sign_Up: "Sie haben kein Konto?",
      List_your_offers: "Listen Sie Ihre Angebote auf",
      Help_center: "Hilfe Zentrum",
      Mohammdpur_Dhaka: "Mohammdpur, Dhaka",
      Room: "Zimmer",
      Adults: "Erwachsene",
      Children: "Kinder",
      Select_rooms_and_guests: "Zimmer und Gäste auswählen",
      Age_of_children_at_check_out: "Alter der Kinder beim Check-out",
      add_the_age_of_each_child: "Fügen Sie das Alter jedes Kindes hinzu, um die beste Übereinstimmung für Bett, Zimmergröße und Sonderpreise zu erhalten.",
      Before: "Vorher",
      Duration: "Dauer",
      offers: "Angebote",
      offer_title_here: "Name des Angebotes",
      Discount: "Rabatt",
      Period: "Zeitraum",
      Price: "Preis",
      a_welcome_drink: "Ein kostenloses Begrüßungsgetränk",
      Filters: "Filter",
      House: "Haus",
      Apartment: "Wohnung",
      Hotel_Room: "Hotel Zimmer",
      Show_result_by: "Ergebnisse anzeigen",
      Distance: "Distanz",
      Equipment_features: "Ausstattungsmerkmale",
      Languages: "Sprachen",
      Wifi: "Wlan",
      whirlpool: "Whirlpool",
      Fitness_center: "Fitnesszentrum",
      Free_Parking: "Kostenlose Parkplätze",
      Pet_Friendly: "Tier freundlich",
      Restaurant: "Restaurant",
      Room_Service: "Zimmer Service",
      Spa: "Spa",
      Swimming_Pool: "Schwimmbad",
      Internet: "Internet",
      Credit_card_support: "Credit card support",
      Adress_with_map: "Adresse mit Karte",
      Finish_booking: "Buchung abschließen",
      Booking_info: "Buchungs Info",
      Country_Region: "Land/Region",
      city: "Stadt",
      select_city: "Stadt wählen",
      After: "Nacher",
      select_country: "Land wählen",
      Save_account_information: "Kontoinformationen speichern?",
      Experienced_doctors_are: "Erfahrene Ärzte sind bereit zu helfen",
      Save_charges: "Änderungen speichern",
      Discover_nearby: "Entdecken sie in der nähe",
      Discover: "Entdecken sie in der nähe",
      Booking: "Buchung",
      Profile: "Profil",
      What_are_you_looking_for: "Was suchen sie?",
      Where_in_the_world: "Wo auf der Welt?",
      share_your_location: "Teilen Sie Ihren Standort mit den Unternehmen in der Umgebung, um Ihre perfekte Unterkunft zu finden",
      OK_Go_to_setting: "OK, gehen Sie zu den Einstellungen",
      I_will_do_it_later: "Ich werde es später machen",
      Select_Date: "Datum auswählen",
      Add_buffer_range: "Pufferbereich hinzufügen",
      Apply: "Anwenden",
      Book_Now: "Jetzt buchen",
      Book_for_User_Name: "Buch für Benutzername",
      Non_refundable: "Nicht rückzahlbar (keine Rückerstattung)",
      superior_double_room: "Superior Doppelzimmer",
      Booking_conditions: "Buchungsbedingungen",
      confirmed: "Bestätigt",
      Your_acommodation_booking: "Ihre Unterkunftsbuchung",
      You_are_all_set: "Sie sind bereit! Wir senden Ihnen eine Bestätigungs-E-Mail an example@gmail.com",
      Confirmation_Number: "Bestätigungsnummer",
      PIN: "PIN",
      Let_me_know_your_thoughts: "Lassen sie mich Ihre Gedanken wissen",
      Language: "Sprache",
      FAQs: "FAQs",
      safety_center: "Sicherheitszentrum",
      Give_us_feedback: "Geben Sie uns eine Rückmeldung",
      Logout: "Ausloggen",
      Become_a_host: "Werden Sie Gastgeber",
      Our_story: "Unsere Geschichte",
      One_Room_has_two_headquarters: "One Room hat zwei Hauptsitze, in der Schweiz und in den USA.",
      One_Rooms_launched: "One Room hat gestartet",
      Host_list: "Gastgeberliste",
      Of_One_Rooms_users: "Von One Room-Benutzern",
      What_One_Rooms_offers: "Was One Room anbietet",
      Search_fast_Save_Search: "Schnell suchen, Suche speichern",
      Low_rates: "Niedrige Rate",
      Chat_with_the_host: "Chatte mit dem Gastgeber",
      Frequently_asked_questions: "Häufig gestellte Fragen",
      Do_I_have_to_host_a_home: "Muss ich ein Zuhause hosten, um eine Erfahrung zu hosten?",
      Guest: "Gast",
      What_the_time_commitment: "Wie hoch ist der zeitliche Aufwand",
      Do_I_need_a_business_license: "Brauche ich einen Gewerbeschein",
      Depending_on_activities_involved: "Abhängig von den beteiligten Aktivitäten kann für bestimmte Erfahrungen eine Gewerbeerlaubnis erforderlich sein. Überprüfen Sie unbedingt die örtlichen Gesetze in Ihrer Nähe, um festzustellen, welche Lizenz für Ihr Erlebnis erforderlich ist, insbesondere wenn es um Lebensmittel, Alkohol oder Transport geht.",
      Do_I_need_insurance: "Brauche ich eine Versicherung?",
      guests_per_experience: "Kann ich eine Mindestanzahl von Gästen pro Erlebnis festlegen?",
      Can_I_host_with_someone_else: "Kann ich mit jemand anderem hosten?",
      Let_Talk: "Lass uns reden",
      Contact_info: "Kontaktinformation",
      Send_us_message: "Schick uns eine Nachricht",
      Full_Name: "Vollständiger Name",
      Phone: "Telefonnummer",
      Subject: "Fach",
      I_m_not_a_robot: "Ich bin kein Roboter",
      Message: "Botschaft",
      send_inquiry: "Anfrage senden",
      Public_art: "öffentliche Kunst",
      Music: "Musik",
      Graphic_design: "Grafik-Design",
      perfomic_arts: "Darstellende Künste",
      More_articles: "Weitere Artikel",
      Explore_more_exciting_updates_articles: "Explore more exciting updates & articles",
      Enter_you_email: "Geben Sie Ihre E-Mail-Adresse ein",
      subscribe: "Abonnieren",
      your_next_getaway: "Sie sind nur 3 Schritte von Ihrem nächsten Kurzurlaub entfernt",
      Search_offers: "Angebote suchen",
      Book: "Buchen",
      Chat_and_go: "Chatten und los!",
      Easily_sign_up: "Einfach anmelden",
      Easily_create_your_offers: "Erstellen Sie ganz einfach Ihre Angebote",
      Chat_with_Guests: "Chatten mit Gästen",
      Invoices: "Rechnungen",
      Pin_the_location_of_your_offer: "Stecken Sie den Standort Ihres Angebots fest",
      Minibar: "Minibar",
      Balcony: "Balkon/Terasse",
      Electric_vehicle_chrging_station: "Ladestation für Elektrofahrzeuge",
      Do_you_want_to_pay_now: "Möchten Sie jetzt bezahlen?",
      Update_info: "Updateinformation",
      Delete: "Löschen",
      Offer: "Angebot",
      blogs: "Blogs",
      about_us: "Über uns",
      contact: "Kontakt",
      Registration_can_take: "Anmeldung kann 1 Minute dauern. Fangen sie heute schon an.",
      Try_offers: "Probieren Sie unsere Angebote aus",
      For_offers: "Für Angebote",
      Wherever_you_go: "Wohin sie auch gehen, wir sind hier um zu helfen.",
      List_any_type_of_offer: "Listen sie jede Art von Angebot auf.",
      Easily_import_details: "Einfach Details importieren",
      Step_by_step_guide: "Schritt für Schritt Anleitung",
      You_can_host_anything_anywhere: "Sie können alles und überall Hosten",
      I_love_host_my_eco_home: "Ich liebe es, mein Öko-Haus zu hosten, damit Menschen sich mit der Natur und ihren Lieben verbinden können. Gästebetreuung ist in unserem Angebot inkl.",
      Hosting_my_home: "Mein Zuhause zu hosten, ermöglichte es mir, Unternehmer zu werden und einen Weg in die finanzielle Freiheit zu beschreiten",
      Insight_in_numbers_on_OneRooms: "Einblick in Zahlen zu One Rooms",
      Join_over: "Schließe dich über 847 glücklichen Gastgebern an und erhalte mehr Angebote. Jetzt downloaden",
      surname: "Nachname",
      Insight: "Einblick",
      Account_type: "Kontotyp",
      choose_a_plan: "Wählen Sie einen Plan",
      Beginners: "Anfänger",
      Offers_per_month: "Angebote pro Monat",
      Pay_as_you_go: "Zahlen sie wenn sie hinausgehen",
      Each_room_you_advertise: "Jedes Zimmer, wo Sie werben.",
      small: "Klein",
      free_posting_per_month: "Kostenlose Veröffentlichung pro Monat",
      Large: "Gross",
      Enterprise: "Unternehmen",
      Let_Chat: "Lass uns Chatten",
      Create_offers: "Angebot erstellen",
      Booked_offers: "Gebuchte Angebote",
      Inbox: "Posteingang",
      Profiles: "Profil",
      Create: "Erstellen",
      Let_set_up_your_offer: "Lassen sie uns Ihr Angebot erstellen",
      Overview: "Überblick",
      offer_title: "Angebotstitel",
      offer_type: "Angebotstyp",
      Photo_Video: "Foto & Video",
      Capacity: "Kapazität",
      Location: "Lage",
      Term_policies: "Nutzungsbedingungen/Richtlinien",
      Publish: "Veröffentlichen",
      save_and_exit: "Speichern und schliessen",
      Next: "Nächste",
      Back: "Zurück",
      Price_your_offer: "Bewerten sie Ihr Angebot",
      To_help_you_earn_more: "Um Ihnen dabei zu helfen, mehr zu verdienen. Angebot und Nachfrage",
      type_the_price: "Geben sie den Preis ein",
      Add_photos_and_videos_to_your_offer: "Fügen Sie Ihrem Angebot Fotos und Videos hinzu",
      How_many_guests_can_stay: "Wie viele Gäste können übernachten?",
      How_many_bathrooms_are_there: "Wie viele Badezimmer gibt es?",
      which_beds_are_available_in_this_room: "Welche Betten sind in diesem Zimmer verfügbar?",
      single_bed: "Einzelbett",
      Double_bed: "Doppelbett",
      Large_size: "Grosse Grösse",
      Extra_large_double_bed: "Extra grosses Doppelbett",
      Date_range: "Datums Reichweite (Verfügbarkeit)",
      Description: "Beschreibung",
      type_the_description: "Geben sie die Beschreibung ein",
      What_offer_you_propose: "Was ist das Angebot, das Sie anbieten?",
      Language_spoken: "Gesprochene Sprache",
      Offer_your_first_booking: "Bieten Sie einen einmaligen Rabatt auf Ihre erste Buchung an",
      Offer_20_off: "Bieten Sie Ihren ersten Besucher 20 % Rabatt",
      who_book_your_service: "Die ersten 3 Buchungen (damit Sie 3 Bewertungen und Ihre Sternebewertung erhalten können), die Ihren Service buchen, erhalten 20 % Rabatt auf ihr Angebot.",
      Recommended: "Empfohlen",
      Edit: "Bearbeiten",
      Discount_update: "Rabatt aktualisieren",
      Number_of_percentage: "Prozentanzahl",
      Number_of_booking: "Buchungsnummer",
      Offer_publish: "Angebot veröffentlichen",
      Active: "Aktiv",
      Inactive: "Inaktiv",
      check_In: "Check In",
      check_out: "Check Out",
      Guests: "Gäste",
      offer_here: "Angebotsname hier",
      offer_No: "Angebotsnummer",
      status: "Status",
      open: "Offen",
      customer_name: "Kundenname",
      Booked_details: "Buchungsdetails",
      George_deglin: "George Deglin",
      booked_info: "Reservations Information",
      Offer_overview: "Überblick des Angebots",
      Discusse_changes_to_your_booking: "Besprechen Sie Änderungen an Ihrer Buchung oder fragen Sie nach Zahlungen und Rückerstattungen",
      Message_offer: "Nachrichtenangebot",
      send_a_message: "senden sie eine Nachricht",
      Contact_number: "Kontaktnummer",
      View_facilites: "Ausstatung ansehen",
      Settings: "Einstellungen",
      Personal_info: "Persönliche Information",
      Name: "Name",
      Email: "Email",
      Mobile: "Telefonnummer",
      Website: "Website",
      VAT_Number: "VAT Number",
      Address: "Adresse",
      subash_chandra: "Subash Chandra",
      wallet: "Brieftasche",
      subscriptions: "Abonnement",
      select_payment_method: "Wähle Zahlungsmethode",
      Expiration_date: "Ablaufdatum",
      payment_method: "Zahlungsmethode",
      Paypal_information: "Paypal Informationen",
      save: "Speichern",
      Credit_card: "Kreditkarte",
      Zip_code: "Postleitzahl",
      Card_information: "Karteninformation",
      CVV: "CVV",
      Large_pro: "Large pro (Monatlich)",
      Cancel_subscription: "Abonnement beenden",
      change_Email: "Email ändern",
      Password_required: "Passwort erforderlich",
      So_we_can_change_your_email: "Damit wir Ihre E-Mail ändern können, bitte geben Sie dass Passwort ein. Erfahren Sie mehr",
      Your_Password: "Dein Passwort",
      No_problem: "No problem, type a new one above, your account is secure we'll ask you to pass authentication confirms it's really you.",
      How_can_I_help_you: "Wie kann ich Ihnen helfen?",
      Call_Now: "Jetzt anrufen",
      You_are_just_3_steps_away_from_your_next_getaway: "Sie sind nur 3 Schritte von Ihrem nächsten Kurzurlaub entfernt",
      Destination: "Ziel",
      Save_Search: "Sichere Suche",
      Home: "Heim",
      Booking_List: "Buchungsliste",
      Listed: "Gelistet",
      Unlisted: "Nicht gelistet",
      Offer_List: "Angebotsliste",
      Cancel: "Abbrechen",
      Upload_Photos: "Fotos hochladen",
      How_many_rooms_are_there: " Wie viele Zimmer gibt es",
      Large_bed: "Großes Bett (Kingsize)",
      Dashboard: "Armaturenbrett",
      Learn_more: "Mehr erfahren",
      Completed: "Abgeschlossen",
      Cancelled: "Annulliert",
      Dispute: "Disput",
      Update: "Aktualisieren",
      Surname: "Familien-oder Nachname",
      Current_Subscriptions: "Aktuelle Abonnements",
      Payment: "Zahlung",
      Change_Password: "Ändere das Passwort",
      type_new_password: "Geben Sie das neue Passwort erneut ein",
      Change_email: "Ändern Sie die E-Mail",
      Chatting: "Chatten",
      Contact_with_us: "Kontakt mit uns",
      Subsidiary: "Tochtergesellschaft",
      Forgot_Password: "Passwort vergessen",
      Booked_List: "Gebuchte Liste",
      Offer_address: "Adresse anbieten",
      Get_Direction: "Richtung erhalten",
      Offer_policies: "Angebotsrichtlinien",
      View_all_policies: "Alle Richtlinien anzeigen",
      Contact_to_Customer: "Kontakt zum Kunden",
      Discuss_changes_to_your_booking: "Besprechen Sie Änderungen an Ihrer Buchung oder fragen Sie nach Zahlungen und Rückerstattungen",
      Total_price_for: "Gesamtpreis für",
      rooms: "Räume",
      Cancel_Booking: "Buchung stornieren",
      Cancellation_Reason: " Stornierungsgrund ",
      Show_All_Photos: "Alle Fotos anzeigen",
      Total: "Gesamt",
      Address_with_Map: "Adresse mit Karte",
      Sort_results_by: "Sortiere Ergebnisse nach",
      Filter_results_by: "Ergebnisse filtern nach",
      Property_Type: "Art der Immobilie",
      Book_number: "Buchnummer",
      Facilities: "Einrichtungen",
      Close: "Schließen",
      Your_budget: "Dein Büdget",
      Re_type_new_password: "Geben Sie das neue Passwort erneut ein"
    }
  }
};

/***/ }),

/***/ 53736:
/*!****************************!*\
  !*** ./src/app/i18n/it.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; }
/* harmony export */ });
var locale = {
  lang: 'it',
  data: {
    trans: {
      Contact_us: "Contattaci",
      Type_your_password: "Inserisci la tua password",
      View: "guarda",
      Need_to_change_your_email_address: "Devi cambiare il tuo indirizzo email.",
      No_problem_type_a_new_one_above: "Nessun problema, inseriscine uno nuovo sopra. Il tuo account è al sicuro. Ti chiederemo di superare l'autenticazione per confermare che sei davvero tu.",
      New_Email: "Nuova email",
      Re_Type_email: "Inserisci di nuovo il tuo e-mail",
      Save_changes: "Salvare le modifiche",
      Enter_your_code: "Inserisci il tuo codice",
      Submit: "Invia",
      I_am_having_trouble: "ho dei problemi",
      change_password: "Cambia la password",
      Current_password: "parola d'accesso attuale",
      New_password: "nuova password",
      update: "Aggiornare",
      Andrew_Mckinely: "Andrew Mckinely",
      Hello_My_Name_is_George_Deglin: "Salve, mi chiamo Georg Deglin",
      Hi_attached_his_guide: "Ciao, ecco le tue istruzioni.",
      Okay_let_me_take_a_look: "Va bene fammi vedere.",
      Create_your_dream_book_now: "Crea il tuo sogno, prenota ora",
      Search: "Cercare",
      Add_rooms_and_guests: "Aggiungi stanze e ospiti",
      Enter_destinantion: "Inserisci la destinazione",
      Add_dates: "Aggiungi date di viaggio",
      Grossmunster: "Grossmünster",
      List_your_offers_on_OneRooms: "Elenca le tue offerte su OneRooms",
      Wishlists_selected_by_company: "Liste dei desideri selezionate dalle aziende",
      chillon_castle: "Castello di Chillon",
      Bernina_Express: "Bernina Express",
      Swiss_Museum_of_Transport: "Museo Svizzero dei Trasporti",
      See_More: "Vedi altro",
      Earn_extra_income_and_unlock: "Guadagna entrate aggiuntive e apri nuove opportunità condividendo le tue offerte",
      How_oneRooms_works: "come funziona oneRooms",
      Newsroom: "redazione",
      Latest_Blog: "Ultimo blog",
      Careers: "Carriera",
      Host: "ospitante",
      Host_your_offer: "Ospita la tua offerta",
      Responsible_Hosting: "Hosting responsabile",
      Resource_Centre: "centro Risorse",
      Community_centre: "Centro comunitario",
      Dedicated_support_system: "Sistema di supporto dedicato",
      Support: "sostegno",
      Our_covid_19_Response: "La nostra risposta al Covid-19",
      Cancellation_options: "opzioni di cancellazione",
      Neighbourhood_Support: "aiuto tra vicini",
      Terms_of_use: "Termini di utilizzo",
      Trust_Safety: "fiducia e sicurezza",
      Privacy_portal: "Portale Privacy",
      Cookie_preference: "Preferenza sui cookie",
      Sign_Up: "Registrati",
      Password: "parola d'accesso",
      Hide: "Nascondere",
      We_ll_send_you_a_confirmation_email: "Ti mandiamo una mail di conferma al tuo indirizzo email. Per favore, conferma il tuo indirizzo d'email.",
      Continue: "Continua",
      OR: "o",
      Already_have_an_account_Sign_In: "Hai già un account?",
      Welcome_to_One_Rooms: "Benvenuti in One Rooms",
      Finishing_signing_up: "completare la registrazione",
      First_Name: "prenome",
      Last_Name: "cognome",
      Telephone_number: "numero di telefono (facoltativo)",
      By_selecting_Agree_and_Continue_below: "Selezionando 'Accetta e continua' di seguito, accetto i Termini di servizio, i Termini di pagamento, l'Informativa sulla privacy e l'Informativa sulla non discriminazione compa.",
      Sign_In: "Registrati",
      Forgot_password: "Ha dimenticato la password?",
      Do_not_have_an_account_Sign_Up: "Non hai un account?",
      List_your_offers: "Elenca le tue offerte",
      Help_center: "centro assistenza",
      Mohammdpur_Dhaka: "Mohammedpur, Dacca",
      Room: "Camera",
      Adults: "Adulti",
      Children: "bambini",
      Select_rooms_and_guests: "Seleziona camere e ospiti",
      Age_of_children_at_check_out: "Età dei bambini al momento del check out",
      add_the_age_of_each_child: "Aggiungi l'età di ogni bambino per ottenere la migliore corrispondenza per letto, dimensioni della camera e tariffe speciali.",
      Before: "Prima",
      Duration: "periodo di tempo",
      offers: "offerte",
      offer_title_here: "nome dell'offerta",
      Discount: "sconto",
      Period: "periodo",
      Price: "prezzo",
      a_welcome_drink: "Un drink di benvenuto gratuito",
      Filters: "filtro",
      House: "casa",
      Apartment: "appartamento",
      Hotel_Room: "Camera d'albergo",
      Show_result_by: "Vedi i risultati",
      Distance: "distanza",
      Equipment_features: "Caratteristiche",
      Languages: "le lingue",
      Wifi: "Accesso a Internet senza fili",
      whirlpool: "vasca idromassaggio",
      Fitness_center: "centro fitness",
      Free_Parking: "Parcheggio gratuito",
      Pet_Friendly: "amico degli animali",
      Restaurant: "ristorante",
      Room_Service: "servizio in camera",
      Spa: "terme",
      Swimming_Pool: "piscina",
      Internet: "Internet",
      Credit_card_support: "supporto per carte di credito",
      Adress_with_map: "indirizzo con mappa",
      Finish_booking: "prenotazione completa",
      Booking_info: "informazioni sulla prenotazione",
      Country_Region: "Paese/regione",
      city: "città",
      select_city: "scegli la città",
      After: "dopo",
      select_country: "Scegli il paese",
      Save_account_information: "Salva le informazioni sull'account?",
      Experienced_doctors_are: "Medici esperti sono pronti ad aiutare",
      Save_charges: "Salvare le modifiche?",
      Discover_nearby: "Scopri nelle vicinanze",
      Discover: "Scopri ",
      Booking: "biglietteria",
      Profile: "profilo",
      What_are_you_looking_for: "Che cosa sta cercando?",
      Where_in_the_world: "dove nel mondo",
      share_your_location: "Condividi la tua posizione con le attività commerciali vicine per trovare il posto perfetto in cui soggiornare",
      OK_Go_to_setting: "OK, vai alle impostazioni",
      I_will_do_it_later: "lo farò più tardi",
      Select_Date: "seleziona la data",
      Add_buffer_range: "Aggiungi area buffer",
      Apply: "Utilizzo",
      Book_Now: "Prenota ora",
      Book_for_User_Name: "Prenota per 'nome utente'",
      Non_refundable: "Non rimborsabile (nessun rimborso)",
      superior_double_room: "Camera doppia superior",
      Booking_conditions: "Condizioni di prenotazione",
      confirmed: "Confermato",
      Your_acommodation_booking: "la tua prenotazione di alloggio",
      You_are_all_set: "Sei pronto! Ti invieremo un'e-mail di conferma a 'example@gmail.com'",
      Confirmation_Number: "numero di conferma",
      PIN: "Codice PIN",
      Let_me_know_your_thoughts: "Fatemi sapere i vostri pensieri",
      Language: "linguaggio",
      FAQs: "Domande frequentate",
      safety_center: "centro di sicurezza",
      Give_us_feedback: "Dacci un feedback",
      Logout: "disconnettersi",
      Become_a_host: "Diventa un Ospitante",
      Our_story: "La nostra storia",
      One_Room_has_two_headquarters: "One Room ha due sedi prinicpale, in Svizzera e negli Stati Uniti.",
      One_Rooms_launched: "One Room a iniziato",
      Host_list: "lista degli ospitanti",
      Of_One_Rooms_users: "Dagli utenti di one rooms",
      What_One_Rooms_offers: "Cosa offre one rooms",
      Search_fast_Save_Search: "Ricerca rapida, salva ricerca",
      Low_rates: "basso tasso",
      Chat_with_the_host: "Chatta con l'ospitante",
      Frequently_asked_questions: "Domande frequentate",
      Do_I_have_to_host_a_home: "Devo ospitare una casa per postare un'esperienza?",
      Guest: "ospite",
      What_the_time_commitment: "Quanto tempo è necessario",
      Do_I_need_a_business_license: "Ho bisogno di una licenza commerciale?",
      Depending_on_activities_involved: "Dipende del'attività coinvolte potrebbe essere richiesta una licenza commerciale. Assicurati di controllare le leggi locali nella tua zona per determinare quale licenza è richiesta per la tua esperienza. Specialmente quando si tratta di cibo, alcol o trasporti.",
      Do_I_need_insurance: "Ho bisogno di un'assicurazione?",
      guests_per_experience: "Posso impostare un numero minimo di ospiti per esperienza?",
      Can_I_host_with_someone_else: "Posso ospitare con qualcun altro?",
      Let_Talk: "parliamo",
      Contact_info: "informazioni sui contatti",
      Send_us_message: "Mandaci un messaggio",
      Full_Name: "Nome e cognome",
      Phone: "numero di telefono",
      Subject: "soggetto accademico",
      I_m_not_a_robot: "Non sono un robot",
      Message: "Messaggio",
      send_inquiry: "Invia richiesta",
      Public_art: "arte pubblica",
      Music: "musica",
      Graphic_design: "graphic design",
      perfomic_arts: "Arti dello spettacolo",
      More_articles: "Altri articoli",
      Explore_more_exciting_updates_articles: "Scopri aggiornamenti e articoli più interessanti",
      Enter_you_email: "Inserisci il tuo indirizzo email",
      subscribe: "Iscriviti a",
      your_next_getaway: "Sei a soli 3 passi dalla tua prossima vacanza",
      Search_offers: "Cerca offerte",
      Book: "Prenotare",
      Chat_and_go: "Chatta e vai!",
      Easily_sign_up: "Basta registrarsi",
      Easily_create_your_offers: "Crea facilmente le tue offerte",
      Chat_with_Guests: "Chiacchierando con gli ospiti",
      Invoices: "fatture",
      Pin_the_location_of_your_offer: "Aggiungi la posizione della tua offerta",
      Minibar: "frigobar",
      Balcony: "balcone/terrazza",
      Electric_vehicle_chrging_station: "Stazione di ricarica per veicoli elettrici",
      Do_you_want_to_pay_now: "Vuoi pagare ora?",
      Update_info: "aggiorna informazioni",
      Delete: "Spegnere",
      Offer: "Offerta",
      blogs: "Blogs",
      about_us: "Chi siamo",
      contact: "Contatto",
      Registration_can_take: "La registrazione può richiedere 1 minuto. Inizia oggi.",
      Try_offers: "Prova le offerte",
      For_offers: "Per le offerte",
      Wherever_you_go: "Ovunque tu vada, siamo qui per aiutarti.",
      List_any_type_of_offer: "Elenca ogni tipo di offerta.",
      Easily_import_details: "Basta importare i dettagli",
      Step_by_step_guide: "Guida passo a passo",
      You_can_host_anything_anywhere: "Puoi ospitare qualsiasi cosa, ovunque",
      I_love_host_my_eco_home: "Adoro ospitare la mia casa ecologica per consentire alle persone di entrare in contatto con la natura e i loro cari. La cura degli ospiti è la nostra offerta.",
      Hosting_my_home: "Ospitare la mia casa mi ha permesso di diventare un imprenditore e intraprendere un percorso verso la libertà finanziaria",
      Insight_in_numbers_on_OneRooms: "Approfondimento sulle cifre per One Rooms",
      Join_over: "Unisciti a oltre 847 host felici e ottieni più offerte. Scarica ora",
      surname: "cognome",
      Insight: "impressione",
      Account_type: "Tipo di account",
      choose_a_plan: "Scegli un piano",
      Beginners: "Principiante",
      Offers_per_month: "Offerte al mese",
      Pay_as_you_go: "Paghi quando esci",
      Each_room_you_advertise: "Qualsiasi stanza in cui fai pubblicità.",
      small: "Piccolo",
      free_posting_per_month: "Pubblicazione gratuita al mese",
      Large: "Grande",
      Enterprise: "Azienda",
      Let_Chat: "Parliamo",
      Create_offers: "Crea offerta",
      Booked_offers: "Offerte prenotate",
      Inbox: "Casella di posta",
      Profiles: "Profilo ",
      Create: "Creare",
      Let_set_up_your_offer: "Creiamo la tua offerta",
      Overview: "Panoramica",
      offer_title: "Titolo dell'elenco",
      offer_type: "Tipo di offerta",
      Photo_Video: "Foto e video",
      Capacity: "Capacità",
      Location: "Posizione",
      Term_policies: "Termini di utilizzo/Politiche",
      Publish: "Pubblicare",
      save_and_exit: "Salva e chiudi",
      Next: "Prossimo",
      Back: "Di ritorno",
      Price_your_offer: "Valuta la tua offerta",
      To_help_you_earn_more: "Per aiutarti a guadagnare di più, il tuo prezzo si avvicinerà a questo quando la domanda è alta e deve essere ricompensata",
      type_the_price: "Inserisci il prezzo",
      Add_photos_and_videos_to_your_offer: "Aggiungi foto e video alla tua offerta",
      How_many_guests_can_stay: "Quanti ospiti possono soggiornare?",
      How_many_bathrooms_are_there: "Quanti bagni ci sono?",
      which_beds_are_available_in_this_room: "Quali letti sono disponibili in questa stanza?",
      single_bed: "Letto singolo",
      Double_bed: "Letto matrimoniale",
      Large_size: "Grande taglia",
      Extra_large_double_bed: "Letto matrimoniale extra large",
      Date_range: "intervallo di date (Disponibilità)",
      Description: "descrizione",
      type_the_description: "scirvi la descrizione",
      What_offer_you_propose: "Qual è la proposta che stai offrendo?",
      Language_spoken: "Lingua parlata",
      Offer_your_first_booking: "Offri uno sconto unico sulla tua prima prenotazione",
      Offer_20_off: "Offri al tuo primo visitatore uno sconto di 20%.",
      who_book_your_service: "Le prime 3 prenotazioni (quindi puoi ottenere 3 recensioni e la tua valutazione a stelle) di  prenotare il tuo servizio riceveranno uno sconto di 20% sul loro servizio.",
      Recommended: "Consigliato",
      Edit: "Modificare",
      Discount_update: "Aggiorna sconto",
      Number_of_percentage: "percentuale",
      Number_of_booking: "numero di prenotazione",
      Offer_publish: "pubblicare offerta",
      Active: "attivo",
      Inactive: "Inattivo",
      check_In: "Check In",
      check_out: "Check Out",
      Guests: "Ospiti",
      offer_here: "Nome dell'offerta qui",
      offer_No: "numero preventivo",
      status: "stato",
      open: "Aprire",
      customer_name: "Nome del cliente",
      Booked_details: "dettagli della prenotazione",
      George_deglin: "George Deglin",
      booked_info: "Informazioni sulla prenotazione",
      Offer_overview: "Panoramica dell'offerta",
      Discusse_changes_to_your_booking: "Discuti le modifiche alla tua prenotazione o chiedi informazioni su pagamenti e rimborsi",
      Message_offer: "offerta di notizie",
      send_a_message: "mandare un messaggio",
      Contact_number: "numero di contatto",
      View_facilites: "vedi attrezzatura",
      Settings: "impostazioni",
      Personal_info: "Informazione personale",
      Name: "Cognome",
      Email: "Email",
      Mobile: "numero di telefono",
      Website: "Pagina Web",
      VAT_Number: "Partita IVA",
      Address: "indirizzo",
      subash_chandra: "Subash Chandra",
      wallet: "portafoglio",
      subscriptions: "sottoscrizione",
      select_payment_method: "scegli il metodo di pagamento",
      Expiration_date: "Data di scadenza",
      payment_method: "metodo di pagamento",
      Paypal_information: "Informazioni PayPal",
      save: "Salva",
      Credit_card: "Carta di credito",
      Zip_code: "Cap",
      Card_information: "informazioni sulla carta",
      CVV: "numero di verifica della carta",
      Large_pro: "Large pro (Mensile)",
      Cancel_subscription: "Annulla l'iscrizione",
      change_Email: "Cambia email",
      Password_required: "Password richiesta",
      So_we_can_change_your_email: "In modo che possiamo cambiare la tua email, inserisci la password. Per saperne di più",
      Your_Password: "La tua password",
      No_problem: "No problem, type a new one above, your account is secure we'll ask you to pass authentication confirms it's really you.",
      How_can_I_help_you: "Come posso aiutarla?",
      Call_Now: "Chiamare ora",
      You_are_just_3_steps_away_from_your_next_getaway: "Sei a soli 3 passi dalla tua prossima vacanza",
      Destination: "Destinazione",
      Save_Search: "Salva ricerca",
      Home: "Casa",
      Booking_List: "Prenotazione Lista",
      Listed: "Elencato",
      Unlisted: "Non elencato",
      Offer_List: "Elenco delle offerte",
      Cancel: "Annula",
      Upload_Photos: "Caricare foto",
      How_many_rooms_are_there: " Quante stanze ci sono",
      Large_bed: "Letto grande (King size)",
      Dashboard: "Pannello",
      Learn_more: "Per saperne di più",
      Completed: "Completato",
      Cancelled: "Annullato",
      Dispute: "Disputa",
      Update: "Aggiornare",
      Surname: "Cognome",
      Current_Subscriptions: "Abbonamenti attuali",
      Payment: "Pagamento",
      Change_Password: "Cambia la password",
      type_new_password: "Digitare nuovamente la nuova password",
      Change_email: "Cambia email",
      Chatting: "Chiacchierando",
      Contact_with_us: "Contatta con noi",
      Subsidiary: "Sussidiario",
      Forgot_Password: "Ha dimenticato la password",
      Booked_List: "Lista Prenotati",
      Offer_address: "Indirizzo dell'offerta",
      Get_Direction: "Prendere direzione",
      Offer_policies: "Politiche dell'offerta",
      View_all_policies: "Visualizza tutte le politiche",
      Contact_to_Customer: "Contattare il cliente",
      Discuss_changes_to_your_booking: "Discuti le modifiche alla tua prenotazione o chiedi informazioni su pagamenti e rimborsi",
      Total_price_for: "Prezzo totale per",
      rooms: "camere",
      Cancel_Booking: "Annulla prenotazione",
      Cancellation_Reason: " Motivo di cancellazione ",
      Show_All_Photos: "Mostra tutte le foto",
      Total: "Totale",
      Address_with_Map: "Indirizzo con mappa",
      Sort_results_by: "Ordina i risultati per",
      Filter_results_by: "Filtra i risultati per",
      Property_Type: "Tipo di proprietà",
      Book_number: "Numero del libro",
      Facilities: "Strutture",
      Close: "Chiudere",
      Your_budget: "Il tuo budget",
      Re_type_new_password: "Ridigitare la nuova password"
    }
  }
};

/***/ }),

/***/ 25768:
/*!****************************!*\
  !*** ./src/app/i18n/sp.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; }
/* harmony export */ });
var locale = {
  lang: 'sp',
  data: {
    trans: {
      Contact_us: "Contáctenos",
      Type_your_password: "Ingresa tu contraseña",
      View: "Ver",
      Need_to_change_your_email_address: "Debe cambiar su dirección de correo electrónico",
      No_problem_type_a_new_one_above: "No hay problema, ingrese uno nuevo arriba. Tu cuenta está segura. Le pediremos que pase la autenticación para confirmar que realmente es usted.",
      New_Email: "Nuevo Email",
      Re_Type_email: "Introduce el correo electrónico de nuevo",
      Save_changes: "guardar cambios",
      Enter_your_code: "Ingrese su código",
      Submit: "Enviar",
      I_am_having_trouble: "tengo problemas",
      change_password: "Cambia la contraseña",
      Current_password: "Contraseña actual",
      New_password: "Nueva contraseña",
      update: "Actualizar",
      Andrew_Mckinely: "Andrew Mckinely",
      Hello_My_Name_is_George_Deglin: "Hola, mi nombre es Georg Deglin",
      Hi_attached_his_guide: "Hola, aquí están sus instrucciones.",
      Okay_let_me_take_a_look: "Esta bien, dejame ver.",
      Create_your_dream_book_now: "Crea tu sueño, reserva ahora",
      Add_rooms_and_guests: "Agregar habitaciones e invitados",
      Enter_destinantion: "Introduce el destino",
      Add_dates: "Agregar fechas de viaje",
      Grossmunster: "Grossmünster",
      List_your_offers_on_OneRooms: "Publique sus ofertas en OneRooms",
      Wishlists_selected_by_company: "Listas de deseos seleccionadas por empresas",
      chillon_castle: "Castillo de Chillón",
      Bernina_Express: "Bernina Express",
      Swiss_Museum_of_Transport: "Museo Suizo del Transporte",
      See_More: "Ver más",
      Earn_extra_income_and_unlock: "Obtenga ingresos adicionales y abra nuevas oportunidades compartiendo sus ofertas",
      How_oneRooms_works: "Así funciona oneRooms",
      Newsroom: "sala de redacción",
      Latest_Blog: "Último blog",
      Careers: "Carrera",
      Search: "Buscar",
      Host_your_offer: "Aloje su oferta",
      Responsible_Hosting: "Alojamiento responsable",
      Resource_Centre: "centro de Recursos",
      Community_centre: "Centro Comunitario",
      Dedicated_support_system: "Sistema de soporte dedicado",
      Support: "apoyo",
      Our_covid_19_Response: "Nuestra respuesta al Covid-19",
      Cancellation_options: "opciones de cancelación",
      Neighbourhood_Support: "ayuda vecinal",
      Terms_of_use: "Condiciones de uso",
      Trust_Safety: "confianza y seguridad",
      Privacy_portal: "portal de privacidad",
      Cookie_preference: "Preferencia de cookies",
      Sign_Up: "Registrarse",
      Password: "contraseña",
      Hide: "Esconder",
      We_ll_send_you_a_confirmation_email: "Le enviaremos un correo electrónico de confirmación a su correo electrónico. Verifique su correo electrónico.",
      Continue: "Continuar",
      OR: "O",
      Already_have_an_account_Sign_In: "¿Ya tienes una cuenta?",
      Welcome_to_One_Rooms: "Bienvenido a One Rooms",
      Finishing_signing_up: "terminar el registro",
      First_Name: "Nombre",
      Last_Name: "apellido",
      Telephone_number: "numero de teléfono (opcional)",
      By_selecting_Agree_and_Continue_below: "Al seleccionar 'Aceptar y continuar' a continuación, acepto las condiciones de servicio, las condiciones de pago, la política de privacidad y la política de no discriminación de compa.",
      Sign_In: "Registrarse",
      Forgot_password: "¿Has olvidado tu contraseña?",
      Do_not_have_an_account_Sign_Up: "¿No tienes una cuenta?",
      List_your_offers: "Lista tus ofertas",
      Help_center: "centro de ayuda",
      Mohammdpur_Dhaka: "Mohammdpur, Dhaka",
      Room: "habitación",
      Adults: "Adultos",
      Children: "niños",
      Select_rooms_and_guests: "Seleccionar habitaciones y huéspedes",
      Age_of_children_at_check_out: "Edad de los niños al momento del check out",
      add_the_age_of_each_child: "Agregue la edad de cada niño para obtener la mejor combinación de cama, tamaño de habitación y tarifas especiales.",
      Before: "Antes",
      Duration: "período de tiempo",
      offers: "ofertas",
      offer_title_here: "nombre de la oferta",
      Discount: "descuento",
      Period: "período",
      Price: "precio",
      a_welcome_drink: "Una bebida de bienvenida gratis",
      Filters: "filtrar",
      House: "casa",
      Apartment: "Departamento",
      Hotel_Room: "Habitación de hotel",
      Show_result_by: "Ver resultados",
      Distance: "distancia",
      Equipment_features: "Características",
      Languages: "idiomas",
      Wifi: "Acceso inalámbrico a Internet",
      whirlpool: "jacuzzi",
      Fitness_center: "gimnasio",
      Free_Parking: "Estacionamiento gratis",
      Pet_Friendly: "amigable con los animales",
      Restaurant: "restaurante",
      Room_Service: "servicio de habitaciones",
      Spa: "spa",
      Swimming_Pool: "Piscina",
      Internet: "Internet",
      Credit_card_support: "soporte de tarjeta de crédito",
      Terms_Policies: "Condiciones de uso/políticas",
      Adress_with_map: "Dirección con mapa",
      Finish_booking: "Terminar Reserva",
      Booking_info: "Información de reserva",
      Country_Region: "País/Región",
      city: "ciudad",
      select_city: "elegir ciudad",
      After: "después",
      select_country: "Elige país",
      Save_account_information: "¿Guardar información de la cuenta?",
      Experienced_doctors_are: "Médicos experimentados están listos para ayudar",
      Save_charges: "¿Guardar cambios?",
      Discover_nearby: "Descubrir cerca",
      Discover: "Descubrir cerca",
      Booking: "Venta de entradas",
      Profile: "perfil",
      What_are_you_looking_for: "¿Qué estás buscando?",
      Where_in_the_world: "Donde en el mundo",
      share_your_location: "Comparta su ubicación con empresas cercanas para encontrar su lugar perfecto para quedarse",
      OK_Go_to_setting: "Bien, ve a la configuración",
      I_will_do_it_later: "lo haré después",
      Select_Date: "seleccione fecha",
      Add_buffer_range: "Agregar área de amortiguamiento",
      Apply: "Utilizar",
      Book_Now: "Reservar ahora",
      Book_for_User_Name: "Libro para 'nombre de usuario'",
      Non_refundable: "No Reembolsable (Sin Reembolso)",
      superior_double_room: "habitación doble superior",
      Booking_conditions: "Condiciones de reserva",
      confirmed: "Confirmado",
      Your_acommodation_booking: "tu reserva de alojamiento",
      You_are_all_set: "¡Estas listo! Le enviaremos un correo electrónico de confirmación a 'example@gmail.com'",
      Confirmation_Number: "número de confirmación",
      PIN: "código PIN",
      Let_me_know_your_thoughts: "Déjame saber lo que piensas",
      Language: "idioma",
      FAQs: "preguntas frecuentes",
      safety_center: "centro de Seguridad",
      Give_us_feedback: "Danos su opinión",
      Logout: "cerrar sesión",
      Become_a_host: "Conviértete en anfitrión",
      Our_story: "Nuestra historia",
      One_Room_has_two_headquarters: "One Room tiene dos sedes en Suiza y Estados Unidos.",
      One_Rooms_launched: "Comenzó una habitación",
      Host_list: "Lista de anfitriones",
      Of_One_Rooms_users: "Por usuarios de One Room",
      What_One_Rooms_offers: "Lo que ofrece One Room",
      Search_fast_Save_Search: "Búsqueda rápida, guardar búsqueda",
      Low_rates: "Tasa baja",
      Chat_with_the_host: "Chatea con el anfitrión",
      Frequently_asked_questions: "Preguntas frecuentes",
      Do_I_have_to_host_a_home: "¿Necesito hospedar una casa para hospedar una experiencia?",
      Host: "Anfitrión",
      Guest: "Huésped",
      What_the_time_commitment: "Cuanto tiempo se requiere",
      Do_I_need_a_business_license: "¿Necesito una licencia comercial?",
      Depending_on_activities_involved: "Dependiendo de las actividades involucradas, se puede requerir una licencia comercial para ciertas experiencias. Asegúrese de consultar las leyes locales de su área para determinar qué licencia se requiere para su experiencia, especialmente cuando se trata de comida, alcohol o transporte.",
      Do_I_need_insurance: "¿Necesito un seguro?",
      guests_per_experience: "¿Puedo establecer un número mínimo de invitados por experiencia?",
      Can_I_host_with_someone_else: "¿Puedo hospedarme con otra persona?",
      Let_Talk: "Hablemos",
      Contact_info: "Información del contacto",
      Send_us_message: "Mandanos un mensaje",
      Full_Name: "Nombre completo",
      Phone: "Número de teléfono",
      Subject: "Materia académica",
      I_m_not_a_robot: "No soy un robot",
      Message: "Mensaje",
      send_inquiry: "Enviar petición",
      Public_art: "arte publico",
      Music: "Música",
      Graphic_design: "Diseño gráfico",
      perfomic_arts: "Las artes escénicas",
      More_articles: "Más artículos",
      Explore_more_exciting_updates_articles: "Descubra más actualizaciones y artículos interesantes",
      Enter_you_email: "Ingrese su dirección de correo electrónico",
      subscribe: "Suscribirse a",
      your_next_getaway: "Estás a solo 3 pasos de tu próxima escapada",
      Search_offers: "Buscar ofertas",
      Book: "Reservar",
      Chat_and_go: "¡Chatea y listo!",
      Easily_sign_up: "solo regístrate",
      Easily_create_your_offers: "Crea fácilmente tus ofertas",
      Chat_with_Guests: "Charlando con invitados",
      Invoices: "facturas",
      Pin_the_location_of_your_offer: "Fija la ubicación de tu oferta",
      Minibar: "minibar",
      Balcony: "balcón/terraza",
      Electric_vehicle_chrging_station: "Estación de carga para vehículos eléctricos",
      Do_you_want_to_pay_now: "¿Quieres pagar ahora?",
      Update_info: "actualizar información",
      Offer: "Oferta",
      blogs: "blogs",
      about_us: "Sobre nosotros",
      contact: "Contacto",
      Registration_can_take: "El registro puede tardar 1 minuto. Empieze hoy.",
      Try_offers: "Pruebe ofertas.",
      For_offers: "Para las ofertas.",
      Wherever_you_go: "Donde quiera que vayas, estamos aquí para ayudarte.",
      List_any_type_of_offer: "Enumere cada tipo de oferta.",
      Easily_import_details: "Importar facilmente detalles",
      Step_by_step_guide: "Guía paso por paso",
      You_can_host_anything_anywhere: "Puedes alojar cualquier cosa, en cualquier lugar",
      I_love_host_my_eco_home: "Me encanta alojar mi hogar ecológico para permitir que las personas se conecten con la naturaleza y sus seres queridos. La atención al huésped es nuestra oferta.",
      Hosting_my_home: "Hospedar mi casa me permitió convertirme en emprendedor y emprender un camino hacia la libertad financiera",
      Insight_in_numbers_on_OneRooms: "Información sobre las cifras de One Rooms",
      Join_over: "Únase a más de 847 anfitriones felices y obtenga más ofertas. Descargar ahora",
      surname: "Apellido",
      Insight: "Vistazo",
      Account_type: "Tipo de cuenta",
      choose_a_plan: "Elige un plan",
      Beginners: "Principiante",
      Offers_per_month: "Ofertas al mes",
      Pay_as_you_go: "Paga cuando salgas",
      Each_room_you_advertise: "Cualquier habitación donde te anuncies.",
      small: "Pequeño",
      free_posting_per_month: "Publicación gratuita al mes.",
      Large: "Grande",
      Enterprise: "Empresa",
      Let_Chat: "Charlemos",
      Create_offers: "Crear oferta",
      Booked_offers: "Ofertas reservadas",
      Inbox: "Bandeja de entrada",
      Profiles: "Perfil",
      Create: "Crear",
      Let_set_up_your_offer: "Permítanos crear su oferta",
      Overview: "Visión de conjunto",
      offer_title: "Titulo de la Oferta",
      offer_type: "Tipo de oferta",
      Photo_Video: "Foto y Video",
      Capacity: "Capacidad",
      Location: "Posición",
      Term_policies: "Condiciones de uso/Políticas",
      Publish: "Publicar",
      save_and_exit: "Guardar y cerrar",
      Next: "Próximo",
      Back: "Atrás",
      Price_your_offer: "Califica tu oferta",
      To_help_you_earn_more: "Para ayudarlo a ganar más, su precio se acercará a este cuando la demanda sea alta y deba ser recompensada",
      type_the_price: "Introduce el precio",
      Add_photos_and_videos_to_your_offer: "Agrega fotos y videos a tu oferta",
      How_many_guests_can_stay: "¿Cuántos invitados pueden quedarse?",
      How_many_bathrooms_are_there: "¿Cuantos baños hay?",
      which_beds_are_available_in_this_room: "¿Qué camas hay disponibles en esta habitación?",
      single_bed: "Cama individual",
      Double_bed: "Cama matrimonial",
      Large_size: "Talla grande",
      Extra_large_double_bed: "Cama doble extragrande",
      Date_range: "rango de fechas (Disponibilidad)",
      Description: "descripción",
      type_the_description: "Introduce la descripción",
      What_offer_you_propose: "¿Cuál es el trato que estás ofreciendo?",
      Language_spoken: "Lengua hablada",
      Offer_your_first_booking: "Ofrece un descuento único en tu primera reserva",
      Offer_20_off: "Ofrece a tu primer visitante un 20% de descuento",
      who_book_your_service: "Las primeras 3 reservas (para que pueda obtener 3 reseñas y su calificación de estrellas) que reserven su servicio recibirán un 20% de descuento en su servicio.",
      Recommended: "Recomendado",
      Edit: "Editar",
      Discount_update: "Actualizar descuento",
      Number_of_percentage: "porcentaje",
      Number_of_booking: "número de reserva",
      Offer_publish: "publicar oferta",
      Active: "activo",
      Inactive: "Inactivo",
      check_In: "Check In",
      check_out: "Check Out",
      Guests: "Huéspedes",
      offer_No: "número de cotización",
      offer_here: "Nombre de la oferta aquí",
      status: "estado",
      open: "Abierto",
      customer_name: "Nombre del cliente",
      Booked_details: "detalles de la reserva",
      George_deglin: "George deglin",
      booked_info: "Información de la reserva",
      Offer_overview: "Resumen de la oferta",
      Discusse_changes_to_your_booking: "Discuta los cambios en su reserva o pregunte sobre pagos y reembolsos",
      Message_offer: "oferta de noticias",
      send_a_message: "envia un mensaje",
      Contact_number: "número de contacto",
      View_facilites: "ver mobiliario",
      Settings: "ajustes",
      Personal_info: "Informacion personal",
      Name: "Nombre",
      Email: "Email",
      Mobile: "número de teléfono",
      Website: "Pagina Web",
      VAT_Number: "Numero IVA",
      Address: "Direccion",
      subash_chandra: "Subash Chandra",
      wallet: "billetera",
      subscriptions: "suscripción",
      select_payment_method: "elige el método de pago",
      Expiration_date: "Fecha de caducidad",
      payment_method: "método de pago",
      Paypal_information: "información de paypal",
      save: "Guardar",
      Credit_card: "Tarjeta de crédito",
      Zip_code: "código postal",
      Card_information: "Información de la tarjeta",
      CVV: "Número de verificación de tarjeta",
      Large_pro: "Large Pro (Mensual)",
      Cancel_subscription: "darse de baja",
      change_Email: "Cambiar e-mail",
      Password_required: "Se requiere contraseña",
      So_we_can_change_your_email: "Para que podamos cambiar su correo electrónico, por favor ingrese la contraseña. Aprende más",
      Your_Password: "Tu contraseña",
      No_problem: "No problem, type a new one above, your account is secure we'll ask you to pass authentication confirms it's really you.",
      How_can_I_help_you: "¿Cómo puedo ayudarte?",
      Call_Now: "Llama ahora",
      You_are_just_3_steps_away_from_your_next_getaway: "Estás a solo 3 pasos de tu próxima escapada",
      Destination: "Destino",
      Save_Search: "Guardar búsqueda",
      Home: "Casa",
      Booking_List: "Lista de reservas",
      Listed: "listado",
      Unlisted: "No incluido en listado",
      Offer_List: "Lista de ofertas",
      Cancel: "Cancelar",
      Upload_Photos: "Subir fotos",
      How_many_rooms_are_there: " Cuántas habitaciones hay",
      Large_bed: "Cama grande (tamaño King)",
      Dashboard: "Panel",
      Learn_more: "Aprende máse",
      Completed: "Terminado",
      Cancelled: "Cancelado",
      Dispute: "Disputar",
      Update: "Actualizar",
      Surname: "Apellido",
      Current_Subscriptions: "Suscripciones actuales",
      Payment: "Pago",
      Change_Password: "Cambia la contraseña",
      type_new_password: "Reescriba nueva contraseña",
      Change_email: "Cambiar e-mail",
      Chatting: "chateando",
      Contact_with_us: "Contacta con nosotros",
      Subsidiary: "Subsidiario",
      Forgot_Password: "Has olvidado tu contraseña",
      Booked_List: "Lista reservada",
      Offer_address: "Dirección de la oferta",
      Get_Direction: "Obtener dirección",
      Offer_policies: "Políticas de oferta",
      View_all_policies: "Ver todas las políticas",
      Contact_to_Customer: "Contacto con el cliente",
      Discuss_changes_to_your_booking: "Discuta los cambios en su reserva o pregunte sobre pagos y reembolsos",
      Total_price_for: "Precio total por",
      rooms: "habitaciones",
      Cancel_Booking: "Cancelar reserva",
      Cancellation_Reason: " Razon de cancelacion ",
      Show_All_Photos: "Mostrar todas las fotos",
      Total: "Total",
      Address_with_Map: "Dirección con Mapa",
      Sort_results_by: "Ordenar resultados por",
      Filter_results_by: "Filtrar resultados por",
      Property_Type: "tipo de propiedad",
      Book_number: "Número de libro",
      Facilities: "Instalaciones",
      Close: "Cerrar",
      Your_budget: "su presupuesto",
      Re_type_new_password: "Reescriba nueva contraseña"
    }
  }
};

/***/ }),

/***/ 52240:
/*!****************************************!*\
  !*** ./src/app/translation.service.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslationService": function() { return /* binding */ TranslationService; }
/* harmony export */ });
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 52200);
/* harmony import */ var D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 7329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 5721);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TranslationService = /*#__PURE__*/function () {
  function TranslationService(translate) {
    (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TranslationService);

    this.translate = translate;
    translate.addLangs(['en', 'fr', 'gr', 'it', 'sp', 'ch']);
    translate.setDefaultLang('en'); // the lang to use, if the lang isn't available, it will use the current loader to get them

    translate.use(this.getCurrentLang());
  }

  (0,D_MainProjects_or_oneroom_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TranslationService, [{
    key: "addTranslation",
    value: function addTranslation() {
      var _this = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var locales = [].concat(args);
      locales.forEach(function (locale) {
        // use setTranslation() with the third argument set to true
        // to append translations instead of replacing them
        _this.translate.setTranslation(locale.lang, locale.data, true);
      });
    }
  }, {
    key: "getCurrentLang",
    value: function getCurrentLang() {
      var browserLang = this.translate.getBrowserLang();
      return browserLang.match(/en|fr|gr|it|sp|ch/) ? browserLang : 'en';
    }
  }, {
    key: "useLang",
    value: function useLang(languageCode) {
      this.translate.use(languageCode);
    }
  }]);

  return TranslationService;
}();

TranslationService.ctorParameters = function () {
  return [{
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService
  }];
};

TranslationService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], TranslationService);


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
  production: false,
  firebase: {
    projectId: 'fresh-rain-320914',
    appId: '1:312394151153:web:fe030c2ad8682ba160e550',
    storageBucket: 'fresh-rain-320914.appspot.com',
    apiKey: 'AIzaSyALplqbC_JECI84zM4OSYV0zhmzlrml46s',
    authDomain: 'fresh-rain-320914.firebaseapp.com',
    messagingSenderId: '312394151153',
    measurementId: 'G-2SDBP32RL6'
  }
};

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 81277);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}

(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(function (err) {
  return console.error(err);
});

/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./af": 62275,
	"./af.js": 62275,
	"./ar": 90857,
	"./ar-dz": 11218,
	"./ar-dz.js": 11218,
	"./ar-kw": 14754,
	"./ar-kw.js": 14754,
	"./ar-ly": 66680,
	"./ar-ly.js": 66680,
	"./ar-ma": 92178,
	"./ar-ma.js": 92178,
	"./ar-sa": 56522,
	"./ar-sa.js": 56522,
	"./ar-tn": 95682,
	"./ar-tn.js": 95682,
	"./ar.js": 90857,
	"./az": 70164,
	"./az.js": 70164,
	"./be": 79774,
	"./be.js": 79774,
	"./bg": 60947,
	"./bg.js": 60947,
	"./bm": 21832,
	"./bm.js": 21832,
	"./bn": 89650,
	"./bn-bd": 74477,
	"./bn-bd.js": 74477,
	"./bn.js": 89650,
	"./bo": 66005,
	"./bo.js": 66005,
	"./br": 98492,
	"./br.js": 98492,
	"./bs": 70534,
	"./bs.js": 70534,
	"./ca": 52061,
	"./ca.js": 52061,
	"./cs": 84737,
	"./cs.js": 84737,
	"./cv": 61167,
	"./cv.js": 61167,
	"./cy": 77996,
	"./cy.js": 77996,
	"./da": 9528,
	"./da.js": 9528,
	"./de": 14540,
	"./de-at": 49430,
	"./de-at.js": 49430,
	"./de-ch": 67978,
	"./de-ch.js": 67978,
	"./de.js": 14540,
	"./dv": 83426,
	"./dv.js": 83426,
	"./el": 6616,
	"./el.js": 6616,
	"./en-au": 63816,
	"./en-au.js": 63816,
	"./en-ca": 32162,
	"./en-ca.js": 32162,
	"./en-gb": 83305,
	"./en-gb.js": 83305,
	"./en-ie": 61954,
	"./en-ie.js": 61954,
	"./en-il": 43060,
	"./en-il.js": 43060,
	"./en-in": 59923,
	"./en-in.js": 59923,
	"./en-nz": 13540,
	"./en-nz.js": 13540,
	"./en-sg": 16505,
	"./en-sg.js": 16505,
	"./eo": 41907,
	"./eo.js": 41907,
	"./es": 86640,
	"./es-do": 41246,
	"./es-do.js": 41246,
	"./es-mx": 56131,
	"./es-mx.js": 56131,
	"./es-us": 36430,
	"./es-us.js": 36430,
	"./es.js": 86640,
	"./et": 62551,
	"./et.js": 62551,
	"./eu": 32711,
	"./eu.js": 32711,
	"./fa": 54572,
	"./fa.js": 54572,
	"./fi": 33390,
	"./fi.js": 33390,
	"./fil": 87860,
	"./fil.js": 87860,
	"./fo": 48216,
	"./fo.js": 48216,
	"./fr": 99291,
	"./fr-ca": 98527,
	"./fr-ca.js": 98527,
	"./fr-ch": 58407,
	"./fr-ch.js": 58407,
	"./fr.js": 99291,
	"./fy": 47054,
	"./fy.js": 47054,
	"./ga": 49540,
	"./ga.js": 49540,
	"./gd": 73917,
	"./gd.js": 73917,
	"./gl": 51486,
	"./gl.js": 51486,
	"./gom-deva": 56245,
	"./gom-deva.js": 56245,
	"./gom-latn": 48868,
	"./gom-latn.js": 48868,
	"./gu": 59652,
	"./gu.js": 59652,
	"./he": 89019,
	"./he.js": 89019,
	"./hi": 42040,
	"./hi.js": 42040,
	"./hr": 63402,
	"./hr.js": 63402,
	"./hu": 79322,
	"./hu.js": 79322,
	"./hy-am": 27609,
	"./hy-am.js": 27609,
	"./id": 57942,
	"./id.js": 57942,
	"./is": 98275,
	"./is.js": 98275,
	"./it": 73053,
	"./it-ch": 4378,
	"./it-ch.js": 4378,
	"./it.js": 73053,
	"./ja": 46176,
	"./ja.js": 46176,
	"./jv": 679,
	"./jv.js": 679,
	"./ka": 92726,
	"./ka.js": 92726,
	"./kk": 72953,
	"./kk.js": 72953,
	"./km": 86957,
	"./km.js": 86957,
	"./kn": 59181,
	"./kn.js": 59181,
	"./ko": 47148,
	"./ko.js": 47148,
	"./ku": 27752,
	"./ku.js": 27752,
	"./ky": 65675,
	"./ky.js": 65675,
	"./lb": 41263,
	"./lb.js": 41263,
	"./lo": 65746,
	"./lo.js": 65746,
	"./lt": 11143,
	"./lt.js": 11143,
	"./lv": 38753,
	"./lv.js": 38753,
	"./me": 44054,
	"./me.js": 44054,
	"./mi": 31573,
	"./mi.js": 31573,
	"./mk": 30202,
	"./mk.js": 30202,
	"./ml": 68523,
	"./ml.js": 68523,
	"./mn": 79794,
	"./mn.js": 79794,
	"./mr": 56681,
	"./mr.js": 56681,
	"./ms": 56975,
	"./ms-my": 39859,
	"./ms-my.js": 39859,
	"./ms.js": 56975,
	"./mt": 3691,
	"./mt.js": 3691,
	"./my": 5152,
	"./my.js": 5152,
	"./nb": 7607,
	"./nb.js": 7607,
	"./ne": 21526,
	"./ne.js": 21526,
	"./nl": 86368,
	"./nl-be": 40076,
	"./nl-be.js": 40076,
	"./nl.js": 86368,
	"./nn": 68420,
	"./nn.js": 68420,
	"./oc-lnc": 51906,
	"./oc-lnc.js": 51906,
	"./pa-in": 94504,
	"./pa-in.js": 94504,
	"./pl": 54721,
	"./pl.js": 54721,
	"./pt": 74645,
	"./pt-br": 54548,
	"./pt-br.js": 54548,
	"./pt.js": 74645,
	"./ro": 71977,
	"./ro.js": 71977,
	"./ru": 26042,
	"./ru.js": 26042,
	"./sd": 78849,
	"./sd.js": 78849,
	"./se": 82400,
	"./se.js": 82400,
	"./si": 50084,
	"./si.js": 50084,
	"./sk": 92449,
	"./sk.js": 92449,
	"./sl": 23086,
	"./sl.js": 23086,
	"./sq": 33139,
	"./sq.js": 33139,
	"./sr": 30607,
	"./sr-cyrl": 30063,
	"./sr-cyrl.js": 30063,
	"./sr.js": 30607,
	"./ss": 40131,
	"./ss.js": 40131,
	"./sv": 21665,
	"./sv.js": 21665,
	"./sw": 5642,
	"./sw.js": 5642,
	"./ta": 33622,
	"./ta.js": 33622,
	"./te": 74825,
	"./te.js": 74825,
	"./tet": 48336,
	"./tet.js": 48336,
	"./tg": 39238,
	"./tg.js": 39238,
	"./th": 99463,
	"./th.js": 99463,
	"./tk": 39986,
	"./tk.js": 39986,
	"./tl-ph": 29672,
	"./tl-ph.js": 29672,
	"./tlh": 40043,
	"./tlh.js": 40043,
	"./tr": 51212,
	"./tr.js": 51212,
	"./tzl": 50110,
	"./tzl.js": 50110,
	"./tzm": 80482,
	"./tzm-latn": 38309,
	"./tzm-latn.js": 38309,
	"./tzm.js": 80482,
	"./ug-cn": 42495,
	"./ug-cn.js": 42495,
	"./uk": 54157,
	"./uk.js": 54157,
	"./ur": 80984,
	"./ur.js": 80984,
	"./uz": 64141,
	"./uz-latn": 43662,
	"./uz-latn.js": 43662,
	"./uz.js": 64141,
	"./vi": 12607,
	"./vi.js": 12607,
	"./x-pseudo": 66460,
	"./x-pseudo.js": 66460,
	"./yo": 92948,
	"./yo.js": 92948,
	"./zh-cn": 62658,
	"./zh-cn.js": 62658,
	"./zh-hk": 39352,
	"./zh-hk.js": 39352,
	"./zh-mo": 38274,
	"./zh-mo.js": 38274,
	"./zh-tw": 98451,
	"./zh-tw.js": 98451
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 50773:
/*!*********************************************************************!*\
  !*** ./src/app/Admin/md/md-chart/md-chart.component.css?ngResource ***!
  \*********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZC1jaGFydC5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 83691:
/*!**************************************************************************************!*\
  !*** ./src/app/Admin/layouts/Hostportal/Hostportal-layout.component.html?ngResource ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<style>\r\n  .off-canvas-sidebar .navbar .navbar-collapse .navbar-nav .nav-item .nav-link {\r\n    color: black !important;\r\n  }\r\n\r\n  .navbar .navbar-nav .nav-item.active .nav-link,\r\n  .navbar .navbar-nav .nav-item.active .nav-link:hover,\r\n  .navbar .navbar-nav .nav-item.active .nav-link:focus {\r\n    color: inherit;\r\n    background-color: transparent;\r\n    border-top: 3px solid #ff6438;\r\n    color: #ff6438 !important;\r\n  }\r\n</style>\r\n\r\n<nav class=\"navbar navbar-expand-lg bg-white  navbar-transparent navbar-absolute \" style=\"position: fixed !important;\"\r\n  color-on-scroll=\"500\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-wrapper\">\r\n      <a class=\"navbar-brand ml-0\" [routerLink]=\"['']\"><img src=\"./assets/Icons/SVG/logo.svg\"\r\n          style=\"width:70%;\" /></a>\r\n    </div>\r\n    <button mat-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\r\n      <span class=\"sr-only\">Toggle navigation</span>\r\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse justify-content-end\">\r\n      <div class=\"col-12\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-7\">\r\n            <ul class=\"navbar-nav justify-content-center mt-4 mt-md-1\">\r\n              <li class=\"nav-item \" routerLinkActive=\"active\">\r\n                <a class=\"nav-link \" [routerLink]=\"['/hostportal/offerlist']\">\r\n                  \r\n                  {{'trans.Create_offers' | translate}} \r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item \" routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/hostportal/bookinglist']\">\r\n                  \r\n                  {{'trans.Booked_offers' | translate}} \r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/hostportal/inbox']\">\r\n                  \r\n                  {{'trans.Inbox' | translate}} \r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/hostportal/profile']\">\r\n                  \r\n                  {{'trans.Profile' | translate}} \r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"col-lg-5 d-none d-lg-block d-xl-block\">\r\n            <ul class=\"navbar-nav float-right \">\r\n              <!-- <li class=\"nav-item mr-3\" (click)=\"visitGuest()\" >Become a Guest</li> -->\r\n              <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\" text-right btn btn-default btn-round px-2 py-2\" href=\"#pablo\"\r\n                  id=\"notificationDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                  <i class=\"fa fa-bell-o fa-3x\" style=\"color: #2d5286; font-weight: 700\" aria-hidden=\"true\"></i><span\r\n                    *ngIf=\"unread_notifications != 0\" class=\"badge badge-danger\"\r\n                    style=\"padding: 2px 4px !important; top: -8px !important; left: -8px !important;\">{{\r\n                    unread_notifications }}</span>\r\n                </a>\r\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"notificationDropdownMenuLink\">\r\n                  <div class=\"card card-plain mt-0\">\r\n                    <div class=\"card-header\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-9 text-left\">\r\n                          <h5 class=\"card-title\">Notifications</h5>\r\n                        </div>\r\n                        <div class=\"col-md-3 text-right\">\r\n                          <h5 class=\"card-title\" (click)=\"readAllNotifications()\"><i class=\"fa fa-envelope-open-o\"\r\n                              aria-hidden=\"true\"></i></h5>\r\n                        </div>\r\n                      </div>\r\n                      <hr class=\"mb-0\">\r\n                    </div>\r\n                    <div class=\"card-body divscroll1\" style=\"overflow: auto; height: 300px; overflow-x: hidden;\"\r\n                      *ngIf=\"notifications.length != 0\">\r\n                      <div class=\"card mt-0 mb-1\" *ngFor=\"let notification of notifications\">\r\n                        <div class=\"card-body readAllNotifications\" id=\"{{notification.id}}bg\"\r\n                          (click)=\"readNotification(notification.id, notification.read_status, notification.navigation_info)\"\r\n                          [ngStyle]=\"{'background-color': notification.read_status == 0? '#bdc3c7' : 'white'}\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-2\"><span data-notify=\"icon\"><i class=\"fa fa-bell-o\"\r\n                                  aria-hidden=\"true\"></i></span></div>\r\n                            <div class=\"col-md-10\"><span data-notify=\"message\">{{ notification.notification_title }}\r\n                                <br> <small> {{ notification.notification_body }} </small> <br> <small>\r\n                                  {{moment(notification.updated_at).format('ddd')}} |\r\n                                  {{moment(notification.updated_at).format('MMM DD, YYYY')}} |\r\n                                  {{moment(notification.updated_at).format('hh:mm a')}} </small></span></div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"card mt-0 mb-1\">\r\n                        <div class=\"card-body text-center\">\r\n                          <a class=\"text-center\" (click)=\"getNotifications()\"\r\n                            *ngIf=\"new_notification_status == false\">See More</a>\r\n                          <h6 class=\"text-center\" *ngIf=\"new_notification_status == true\">No New Notifications</h6>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"card-body\" *ngIf=\"notifications.length == 0\">\r\n                      <p class=\"text-center\">No New Notifications</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\" text-right btn btn-default btn-round px-2 py-2 ml-2\" href=\"#pablo\"\r\n                  id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                  <img class=\"ml-2\" src=\"./assets/Icons/PNG/Menu.png\" />\r\n                  <img class=\"ml-2\" *ngIf=\"pic==null || pic==''\" src=\"./assets/Icons/PNG/Profile.png\"/>\r\n                    <img class=\"pic ml-2\" *ngIf=\"pic!=null && pic!=''\" src=\"http://oneroom3.crosip.com/{{pic}}\"/>\r\n                </a>\r\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                  <a class=\"dropdown-item\" >\r\n\r\n                    <div class=\"togglebutton\"><label><input type=\"checkbox\"  (change)=\"visitGuest()\" id=\"statusVal\" >\r\n                    <span class=\"toggle\"></span>Guest</label>\r\n                    </div>\r\n                  </a>\r\n                  <a class=\"dropdown-item\" [routerLink]=\"['/host/home']\">Home</a>\r\n                  <a class=\"dropdown-item\" href=\"javascript:void(0)\">Help Center</a>\r\n                  <a class=\"dropdown-item\" (click)=\"logout()\">Sign Out</a>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n            <ul class=\"navbar-nav float-left d-none d-lg-none d-xl-none d-md-block\">\r\n              <!-- <li class=\"nav-iem mr-3\" (click)=\"visitGuest()\">Become a Guest</li> -->\r\n              <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\" text-right btn btn-default btn-round px-2 py-2\" href=\"#pablo\"\r\n                  id=\"notificationDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                  <i class=\"fa fa-bell-o fa-3x\" style=\"color: #2d5286; font-weight: 700\" aria-hidden=\"true\"></i><span\r\n                    *ngIf=\"unread_notifications != 0\" class=\"badge badge-danger\"\r\n                    style=\"padding: 2px 4px !important; top: -8px !important; left: -8px !important;\">{{\r\n                    unread_notifications }}</span>\r\n                </a>\r\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"notificationDropdownMenuLink\">\r\n                  <div class=\"card card-plain mt-0\">\r\n                    <div class=\"card-header\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-9 text-left\">\r\n                          <h5 class=\"card-title\">Notifications</h5>\r\n                        </div>\r\n                        <div class=\"col-md-3 text-right\">\r\n                          <h5 class=\"card-title\" (click)=\"readAllNotifications()\"><i class=\"fa fa-envelope-open-o\"\r\n                              aria-hidden=\"true\"></i></h5>\r\n                        </div>\r\n                      </div>\r\n                      <hr class=\"mb-0\">\r\n                    </div>\r\n                    <div class=\"card-body divscroll1\" style=\"overflow: auto; height: 300px; overflow-x: hidden;\"\r\n                      *ngIf=\"notifications.length != 0\">\r\n                      <div class=\"card mt-0 mb-1\" *ngFor=\"let notification of notifications\">\r\n                        <div class=\"card-body readAllNotifications\" id=\"{{notification.id}}bg\"\r\n                          (click)=\"readNotification(notification.id, notification.read_status, notification.navigation_info)\"\r\n                          [ngStyle]=\"{'background-color': notification.read_status == 0? '#bdc3c7' : 'white'}\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-2\"><span data-notify=\"icon\"><i class=\"fa fa-bell-o\"\r\n                                  aria-hidden=\"true\"></i></span></div>\r\n                            <div class=\"col-md-10\"><span data-notify=\"message\">{{ notification.notification_title }}\r\n                                <br> <small> {{ notification.notification_body }} </small> <br> <small>\r\n                                  {{moment(notification.updated_at).format('ddd')}} |\r\n                                  {{moment(notification.updated_at).format('MMM DD, YYYY')}} |\r\n                                  {{moment(notification.updated_at).format('hh:mm a')}} </small></span></div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"card mt-0 mb-1\">\r\n                        <div class=\"card-body text-center\">\r\n                          <a class=\"text-center\" (click)=\"getNotifications()\"\r\n                            *ngIf=\"new_notification_status == false\">See More</a>\r\n                          <h6 class=\"text-center\" *ngIf=\"new_notification_status == true\">No New Notifications</h6>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"card-body\" *ngIf=\"notifications.length == 0\">\r\n                      <p class=\"text-center\">No New Notifications</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\" text-right btn btn-default btn-round px-2 py-2 ml-2\" href=\"#pablo\"\r\n                  id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                  <img class=\"ml-2\" src=\"./assets/Icons/PNG/Menu.png\" />\r\n                  <img class=\"ml-2\" *ngIf=\"pic==null || pic==''\" src=\"./assets/Icons/PNG/Profile.png\"/>\r\n                    <img class=\"pic ml-2\" *ngIf=\"pic!=null && pic!=''\" src=\"http://oneroom3.crosip.com/{{pic}}\"/>\r\n                </a>\r\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                  <a class=\"dropdown-item\" >\r\n\r\n                    <div class=\"togglebutton\"><label><input type=\"checkbox\"  (change)=\"visitGuest()\" id=\"statusVal\" >\r\n                    <span class=\"toggle\"></span>Guest</label>\r\n                    </div>\r\n                  </a>\r\n                  <a class=\"dropdown-item\" [routerLink]=\"['/host/home']\">Home</a>\r\n                  <a class=\"dropdown-item\" href=\"javascript:void(0)\">Help Center</a>\r\n                  <a class=\"dropdown-item\" (click)=\"logout()\">Sign Out</a>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"col-lg-5 d-none   d-lg-none d-xl-none d-md-block\">\r\n            <ul class=\"navbar-nav float-left d-none   d-lg-none d-xl-none d-md-block\">\r\n              <!-- <li class=\"nav-item mr-3\" (click)=\"visitGuest()\">Become a Guest</li> -->\r\n              <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\" text-right btn btn-default btn-round px-2 py-2\" href=\"#pablo\"\r\n                  id=\"notificationDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                  <i class=\"fa fa-bell-o fa-3x\" style=\"color: #2d5286; font-weight: 700\" aria-hidden=\"true\"></i><span\r\n                    *ngIf=\"unread_notifications != 0\" class=\"badge badge-danger\"\r\n                    style=\"padding: 2px 4px !important; top: -8px !important; left: -8px !important;\">{{\r\n                    unread_notifications }}</span>\r\n                </a>\r\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"notificationDropdownMenuLink\">\r\n                  <div class=\"card card-plain mt-0\">\r\n                    <div class=\"card-header\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-9 text-left\">\r\n                          <h5 class=\"card-title\">Notifications</h5>\r\n                        </div>\r\n                        <div class=\"col-md-3 text-right\">\r\n                          <h5 class=\"card-title\" (click)=\"readAllNotifications()\"><i class=\"fa fa-envelope-open-o\"\r\n                              aria-hidden=\"true\"></i></h5>\r\n                        </div>\r\n                      </div>\r\n                      <hr class=\"mb-0\">\r\n                    </div>\r\n                    <div class=\"card-body divscroll1\" style=\"overflow: auto; height: 300px; overflow-x: hidden;\"\r\n                      *ngIf=\"notifications.length != 0\">\r\n                      <div class=\"card mt-0 mb-1\" *ngFor=\"let notification of notifications\">\r\n                        <div class=\"card-body readAllNotifications\" id=\"{{notification.id}}bg\"\r\n                          (click)=\"readNotification(notification.id, notification.read_status, notification.navigation_info)\"\r\n                          [ngStyle]=\"{'background-color': notification.read_status == 0? '#bdc3c7' : 'white'}\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-2\"><span data-notify=\"icon\"><i class=\"fa fa-bell-o\"\r\n                                  aria-hidden=\"true\"></i></span></div>\r\n                            <div class=\"col-md-10\"><span data-notify=\"message\">{{ notification.notification_title }}\r\n                                <br> <small> {{ notification.notification_body }} </small> <br> <small>\r\n                                  {{moment(notification.updated_at).format('ddd')}} |\r\n                                  {{moment(notification.updated_at).format('MMM DD, YYYY')}} |\r\n                                  {{moment(notification.updated_at).format('hh:mm a')}} </small></span></div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"card mt-0 mb-1\">\r\n                        <div class=\"card-body text-center\">\r\n                          <a class=\"text-center\" (click)=\"getNotifications()\"\r\n                            *ngIf=\"new_notification_status == false\">See More</a>\r\n                          <h6 class=\"text-center\" *ngIf=\"new_notification_status == true\">No New Notifications</h6>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"card-body\" *ngIf=\"notifications.length == 0\">\r\n                      <p class=\"text-center\">No New Notifications</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\" text-right btn btn-default btn-round px-2 py-2 ml-2\" href=\"#pablo\"\r\n                  id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                  <img class=\"ml-2\" src=\"./assets/Icons/PNG/Menu.png\" />\r\n                  <img class=\"ml-2\" *ngIf=\"pic==null || pic==''\" src=\"./assets/Icons/PNG/Profile.png\"/>\r\n                    <img class=\"pic ml-2\" *ngIf=\"pic!=null && pic!=''\" src=\"http://oneroom3.crosip.com/{{pic}}\"/>\r\n                </a>\r\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                  <a class=\"dropdown-item\" >\r\n\r\n                    <div class=\"togglebutton\"><label><input type=\"checkbox\"  (change)=\"visitGuest()\" id=\"statusVal\" >\r\n                    <span class=\"toggle\"></span>Guest</label>\r\n                    </div>\r\n                  </a>\r\n                  <a class=\"dropdown-item\" [routerLink]=\"['/host/home']\">Home</a>\r\n                  <a class=\"dropdown-item\" href=\"javascript:void(0)\">Help Center</a>\r\n                  <a class=\"dropdown-item\" (click)=\"logout()\">Sign Out</a>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<router-outlet></router-outlet>";

/***/ }),

/***/ 47256:
/*!****************************************************************************!*\
  !*** ./src/app/Admin/layouts/admin/admin-layout.component.html?ngResource ***!
  \****************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<style>\r\n    .dropdown-menu .dropdown-item:hover, .dropdown-menu .dropdown-item:focus, .dropdown-menu a:hover, .dropdown-menu a:focus, .dropdown-menu a:active {\r\n    box-shadow: 0 4px 20px 0px rgb(0 0 0 / 14%), 0 7px 10px -5px #4caf50;\r\n    /* background-color: #2e5b01 !important; */\r\n    color: #FFFFFF;\r\n    \r\n}\r\n\r\n</style>\r\n<div class=\"wrapper\">\r\n    <div class=\"sidebar\" data-color=\"green\"  >\r\n        <app-sidebar-cmp></app-sidebar-cmp>\r\n        <div class=\"sidebar-background\" ></div>\r\n    </div>\r\n    <div class=\"main-panel\">\r\n        <app-navbar-cmp></app-navbar-cmp>\r\n        <router-outlet></router-outlet>\r\n        <div *ngIf=\"!isMap()\">\r\n            <app-footer-cmp></app-footer-cmp>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),

/***/ 88201:
/*!***********************************************************************************!*\
  !*** ./src/app/Admin/layouts/admin_layout/admin_layout.component.html?ngResource ***!
  \***********************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\r\n<style>\r\n .off-canvas-sidebar .navbar .navbar-collapse .navbar-nav .nav-item .nav-link {\r\n    color: black !important;\r\n  }\r\n\r\n  .navbar .navbar-nav .nav-item.active .nav-link, .navbar .navbar-nav .nav-item.active .nav-link:hover, .navbar .navbar-nav .nav-item.active .nav-link:focus {\r\n    color: inherit;\r\n    background-color: transparent;\r\n    border-top: 3px solid #ff6438;\r\n    color: #ff6438 !important;\r\n}\r\n</style>\r\n\r\n  <router-outlet></router-outlet>\r\n";

/***/ }),

/***/ 84306:
/*!**************************************************************************!*\
  !*** ./src/app/Admin/layouts/auth/auth-layout.component.html?ngResource ***!
  \**************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\r\n<style>\r\n .off-canvas-sidebar .navbar .navbar-collapse .navbar-nav .nav-item .nav-link {\r\n    color: black !important;\r\n  }\r\n\r\n  .navbar .navbar-nav .nav-item.active .nav-link, .navbar .navbar-nav .nav-item.active .nav-link:hover, .navbar .navbar-nav .nav-item.active .nav-link:focus {\r\n    color: inherit;\r\n    background-color: transparent;\r\n    border-top: 3px solid #ff6438;\r\n    color: #ff6438 !important;\r\n}\r\n.mat-select {\r\n    min-width: 73px !important;\r\n}\r\n</style>\r\n<nav class=\"navbar navbar-expand-lg bg-white  navbar-transparent navbar-absolute \"  style=\"position: fixed !important;\" color-on-scroll=\"500\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-wrapper\">\r\n      <a class=\"navbar-brand ml-0\" [routerLink]=\"['']\"><img src=\"./assets/Icons/SVG/logo.svg\" style=\"width:70%;\"/></a>\r\n    </div>\r\n    <button mat-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\r\n      <span class=\"sr-only\">Toggle navigation</span>\r\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse justify-content-end\" >\r\n      <div class=\"col-12\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-7\">\r\n            <ul class=\"navbar-nav justify-content-center mt-4 mt-md-1\">\r\n              <li class=\"nav-item \" routerLinkActive=\"active\">\r\n                <a class=\"nav-link \" [routerLink]=\"['/Website/host']\">\r\n                   {{'trans.Offer' | translate}}\r\n\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item \" routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/Website/blogs']\" >\r\n                  {{'trans.blogs' | translate}}\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item \" routerLinkActive=\"active\" >\r\n                <a class=\"nav-link \" [routerLink]=\"['/Website/home']\">\r\n                  \r\n                  {{'trans.about_us' | translate}}\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/Website/contactus']\" >\r\n                  {{'trans.contact' | translate}}\r\n                </a>\r\n              </li>\r\n              <!-- <li class=\"nav-item\" routerLinkActive=\"active\"> -->\r\n                <!-- <a class=\"nav-link\">\r\n                 <app-language-selector></app-language-selector> \r\n                </a> -->\r\n                <!-- <div class=\"row\">\r\n                  <div class=\"col-sm-5\">\r\n                    <select name='langChoose' #langChoose [(ngModel)]='currentLang' class=\"form-select-sm form-control\" (change)=\"onLangChange(langChoose.value)\">\r\n                      <option *ngFor=\"let lang of languages\" value=\"{{lang.lang}}\">{{lang.name}}</option>\r\n                    </select>\r\n                  </div>\r\n                </div> -->\r\n              <!-- </li> -->\r\n             </ul>\r\n          </div>\r\n          <div class=\"col-lg-5 d-none  d-lg-block d-xl-block\" >\r\n           \r\n            <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\r\n              <ul class=\"navbar-nav\">\r\n                <li> \r\n                  <mat-form-field>\r\n                    <mat-select  [value]=\"currentLang\" name=\"langChoose\" (selectionChange)=\"onLangChange($event)\" id=\"currency\" required>\r\n                      <mat-option *ngFor=\"let lang of languages\" value=\"{{lang.lang}}\">{{lang.name}}</mat-option>\r\n\r\n                    </mat-select>\r\n                </mat-form-field>\r\n                  <!-- <mat-select  name='langChoose' #langChoose [(ngModel)]='currentLang' class=\"form-select-sm form-control\" (change)=\"onLangChange(langChoose.value)\">\r\n                    <mat-option *ngFor=\"let lang of languages\" value=\"{{lang.lang}}\">{{lang.name}}</mat-option>\r\n                  </mat-select > -->\r\n                </li>\r\n\r\n                <li class=\"nav-item dropdown\">\r\n                  <a class=\" text-right btn btn-default btn-round px-2 py-2 ml-2\" href=\"#pablo\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <img class=\"ml-2\"  src=\"./assets/Icons/PNG/Menu.png\" />\r\n                    <img class=\"ml-2\" *ngIf=\"pic==null || pic==''\" src=\"./assets/Icons/PNG/Profile.png\"/>\r\n                  <img class=\"pic ml-2\" *ngIf=\"pic!=null && pic!=''\" src=\"http://oneroom3.crosip.com/{{pic}}\"/>\r\n                  </a>\r\n\r\n                  <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                    <a class=\"dropdown-item\" (click)=\"getGuest()\" >Guest</a>\r\n                    <a class=\"dropdown-item\" (click)=\"getHost()\" >Host</a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" >Help Center</a>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <ul class=\"navbar-nav float-left d-none   d-lg-none d-xl-none d-md-block\">\r\n              <li class=\"nav-iem\">\r\n                <mat-form-field>\r\n                  <mat-select  [value]=\"currentLang\" name=\"langChoose\" (selectionChange)=\"onLangChange($event)\" id=\"currency\" required>\r\n                    <mat-option *ngFor=\"let lang of languages\" value=\"{{lang.lang}}\">{{lang.name}}</mat-option>\r\n\r\n                  </mat-select>\r\n              </mat-form-field>               \r\n              </li>\r\n              <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\" text-right btn btn-default btn-round px-2 py-2 ml-2\" href=\"#pablo\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                  <img class=\"ml-2\"  src=\"./assets/Icons/PNG/Menu.png\" />\r\n                  <img class=\"ml-2\" *ngIf=\"pic==null || pic==''\" src=\"./assets/Icons/PNG/Profile.png\"/>\r\n                  <img class=\"pic ml-2\" *ngIf=\"pic!=null && pic!=''\" src=\"http://oneroom3.crosip.com/{{pic}}\"/>\r\n                </a>\r\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                  <a class=\"dropdown-item\" (click)=\"getGuest()\" >Guest</a>\r\n                  <a class=\"dropdown-item\" (click)=\"getHost()\" >Host</a>\r\n                  <a class=\"dropdown-item\" href=\"javascript:void(0)\" >Help Center</a>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"col-lg-5 d-block   d-lg-none d-xl-none d-md-block\" >\r\n            <ul class=\"navbar-nav float-left d-block   d-lg-none d-xl-none d-md-block\">\r\n              <li class=\"nav-iem\">\r\n                <mat-form-field>\r\n                  <mat-select  [value]=\"currentLang\" name=\"langChoose\" (selectionChange)=\"onLangChange($event)\" id=\"currency\" required>\r\n                    <mat-option *ngFor=\"let lang of languages\" value=\"{{lang.lang}}\">{{lang.name}}</mat-option>\r\n\r\n                  </mat-select>\r\n              </mat-form-field>              \r\n              </li>\r\n              <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\" text-right btn btn-default btn-round px-2 py-2 ml-2\" href=\"#pablo\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                  <img class=\"ml-2\"  src=\"./assets/Icons/PNG/Menu.png\" />\r\n                  <img class=\"ml-2\" *ngIf=\"pic==null || pic==''\" src=\"./assets/Icons/PNG/Profile.png\"/>\r\n                  <img class=\"pic ml-2\" *ngIf=\"pic!=null && pic!=''\" src=\"http://oneroom3.crosip.com/{{pic}}\"/>\r\n                </a>\r\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                  <a class=\"dropdown-item\" (click)=\"getGuest()\" >Guest</a>\r\n                  <a class=\"dropdown-item\" (click)=\"getHost()\" >Host</a>\r\n                  <a class=\"dropdown-item\" href=\"javascript:void(0)\" >Help Center</a>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n     \r\n    </div>\r\n  </div>\r\n</nav>\r\n  <router-outlet></router-outlet>\r\n";

/***/ }),

/***/ 8177:
/*!****************************************************************************!*\
  !*** ./src/app/Admin/layouts/guest/guest-layout.component.html?ngResource ***!
  \****************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<style>\r\n  .off-canvas-sidebar .navbar .navbar-collapse .navbar-nav .nav-item .nav-link {\r\n    color: black !important;\r\n  }\r\n\r\n  .form-control,\r\n  .is-focused .form-control {\r\n    background-image: none;\r\n    border: 1px solid #d4d2d2;\r\n    border-radius: 5px;\r\n    padding: 18px;\r\n    margin-top: 5px;\r\n    background: white;\r\n  }\r\n\r\n  .divscroll::-webkit-scrollbar {\r\n    scrollbar-gutter: 2px;\r\n    width: 4px;\r\n    z-index: 10;\r\n    border-radius: 10px;\r\n    background: white;\r\n  }\r\n\r\n  .divscroll::-webkit-scrollbar-thumb {\r\n    background-color: #2d5286;\r\n  }\r\n\r\n  .field-icon {\r\n    float: right;\r\n    margin-left: -25px;\r\n    margin-top: -36px;\r\n    position: relative;\r\n    z-index: 2;\r\n    margin-right: 7px;\r\n  }\r\n\r\n  .divscroll1::-webkit-scrollbar {\r\n    scrollbar-gutter: 2px;\r\n    width: 4px;\r\n    z-index: 10;\r\n    border-radius: 10px;\r\n    background: white;\r\n  }\r\n\r\n  .divscroll1::-webkit-scrollbar-thumb {\r\n    background-color: #2d5286;\r\n  }\r\n</style>\r\n\r\n<nav class=\"navbar navbar-expand-lg navbar-transparent navbar-absolute\" [ngClass]=\"{'bg-white': url != '/guest/home'}\"\r\n  color-on-scroll=\"500\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-wrapper\">\r\n      <a class=\"navbar-brand ml-0 \" [routerLink]=\"['']\"><img src=\"./assets/Icons/SVG/logo.svg\"\r\n          style=\"width:70%;\" /></a>\r\n    </div>\r\n    <button mat-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\r\n      <span class=\"sr-only\">Toggle navigation</span>\r\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse justify-content-end\">\r\n      <div class=\"col-12\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-7\">\r\n            <ul class=\"navbar-nav justify-content-center mt-4 mt-md-1\">\r\n              <li class=\"nav-item \" routerLinkActive=\"active\">\r\n                <a class=\"nav-link \" [routerLink]=\"['/Website/host']\">\r\n                  \r\n                  {{'trans.Offer' | translate}} \r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item \" routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/Website/blogs']\">\r\n                  {{'trans.blogs' | translate}} \r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/website/home']\">\r\n                  {{'trans.about_us' | translate}} \r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/Website/contactus']\">\r\n                  {{'trans.contact' | translate}} \r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"col-lg-5 d-none d-lg-block d-xl-block\">\r\n            <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\r\n              <ul class=\"navbar-nav\">\r\n                <li class=\"nav-item\" title=\"You are logged in as a Guest\" *ngIf=\"user!=null\">\r\n                  {{'trans.Guest' | translate}}\r\n                </li>\r\n                <!-- <li class=\"nav-item mr-3\" *ngIf=\"user\" (click)=\"visitHost()\">\r\n                  Become a Host\r\n                </li> -->\r\n                <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"user\">\r\n                  <a class=\" text-right btn btn-default btn-round px-2 py-2\" href=\"#pablo\"\r\n                    id=\"notificationDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"fa fa-bell-o fa-3x\" style=\"color: #2d5286; font-weight: 700\" aria-hidden=\"true\"></i><span\r\n                      *ngIf=\"unread_notifications != 0\" class=\"badge badge-danger\"\r\n                      style=\"padding: 2px 4px !important; top: -8px !important; left: -8px !important;\">{{\r\n                      unread_notifications }}</span>\r\n                  </a>\r\n                  <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"notificationDropdownMenuLink\">\r\n                    <div class=\"card card-plain mt-0\">\r\n                      <div class=\"card-header\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-md-9 text-left\">\r\n                            <h5 class=\"card-title\">Notifications</h5>\r\n                          </div>\r\n                          <div class=\"col-md-3 text-right\">\r\n                            <h5 class=\"card-title\" (click)=\"readAllNotifications()\"><i class=\"fa fa-envelope-open-o\"\r\n                                aria-hidden=\"true\"></i></h5>\r\n                          </div>\r\n                        </div>\r\n                        <hr class=\"mb-0\">\r\n                      </div>\r\n                      <div class=\"card-body divscroll1\" style=\"overflow: auto; height: 300px; overflow-x: hidden;\"\r\n                        *ngIf=\"notifications.length != 0\">\r\n                        <div class=\"card mt-0 mb-1\" *ngFor=\"let notification of notifications\">\r\n                          <div class=\"card-body readAllNotifications\" id=\"{{notification.id}}bg\" (click)=\"readNotification(notification.id, notification.read_status, notification.navigation_info)\"\r\n                            [ngStyle]=\"{'background-color': notification.read_status == 0? '#bdc3c7' : 'white'}\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-md-2\"><span data-notify=\"icon\"><i class=\"fa fa-bell-o\"\r\n                                    aria-hidden=\"true\"></i></span></div>\r\n                              <div class=\"col-md-10\"><span data-notify=\"message\">{{ notification.notification_title }}\r\n                                  <br> <small> {{ notification.notification_body }} </small> <br> <small>\r\n                                    {{moment(notification.updated_at).format('ddd')}} |\r\n                                    {{moment(notification.updated_at).format('MMM DD, YYYY')}} |\r\n                                    {{moment(notification.updated_at).format('hh:mm a')}} </small></span></div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"card mt-0 mb-1\">\r\n                          <div class=\"card-body text-center\">\r\n                            <a class=\"text-center\" (click)=\"getNotifications()\" *ngIf=\"new_notification_status == false\">{{'trans.See_More' | translate}}  </a>\r\n                            <h6 class=\"text-center\" *ngIf=\"new_notification_status == true\">No New Notifications</h6>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"card-body\" *ngIf=\"notifications.length == 0\">\r\n                        <p class=\"text-center\">No New Notifications</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"nav-item dropdown\">\r\n                  <a class=\" text-right btn btn-default btn-round px-2 py-2 ml-2\" id=\"navbarDropdownMenuLink\"\r\n                    data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <img class=\"ml-2\" src=\"./assets/Icons/PNG/Menu.png\" />\r\n                    <img class=\"ml-2\" *ngIf=\"pic==null || pic==''\" src=\"./assets/Icons/PNG/Profile.png\"/>\r\n                    <img class=\"pic ml-2\" *ngIf=\"pic!=null && pic!=''\" src=\"http://oneroom3.crosip.com/{{pic}}\"/>\r\n                  </a>\r\n\r\n                  <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                    <a class=\"dropdown-item\" *ngIf=\"user\" >\r\n\r\n                      <div class=\"togglebutton\"><label><input type=\"checkbox\"  (change)=\"visitHost()\" id=\"statusVal\" >\r\n                      <span class=\"toggle\"></span>{{'trans.Host' | translate}}</label>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" *ngIf=\"user\" href=\"#/guest/home\"> {{'trans.Home' | translate}}</a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" data-toggle=\"modal\"\r\n                      data-target=\".bd-example-modal-lg1\" *ngIf=\"!user\"> {{'trans.Sign_In' | translate}}</a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" data-toggle=\"modal\" data-target=\".signupModal\"\r\n                      *ngIf=\"!user\"> {{'trans.Sign_Up' | translate}}</a>\r\n                    <a hidden class=\"dropdown-item\" href=\"#/guestportal/offerlist\"> {{'trans.List-your_offer' | translate}}</a>\r\n                    <a class=\"dropdown-item\" href=\"#/guestportal/bookinglist\" *ngIf=\"user\"> {{'trans.Booking_List' | translate}}</a>\r\n                    \r\n                    <a class=\"dropdown-item\" href=\"#/guestportal/profile\" *ngIf=\"user && role == 'guest'\"> {{'trans.Profile' | translate}}</a>\r\n                    <a class=\"dropdown-item\" href=\"#/guestportal/profile\" *ngIf=\"user && role == 'host'\"> {{'trans.Profile' | translate}}</a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\"> {{'trans.Help_center' | translate}}</a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"logout()\" *ngIf=\"user\"> {{'trans.Logout' | translate}}</a>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <ul class=\"navbar-nav float-left d-none   d-lg-none d-xl-none d-md-block\">\r\n              <li class=\"nav-item\" title=\"You are logged in as a Guest\" *ngIf=\"user!=null\">\r\n                {{'trans.Guest' | translate}}\r\n              </li>\r\n              \r\n              <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"user\">\r\n                <a class=\" text-right btn btn-default btn-round px-2 py-2\" href=\"#pablo\"\r\n                    id=\"notificationDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"fa fa-bell-o fa-3x\" style=\"color: #2d5286; font-weight: 700\" aria-hidden=\"true\"></i><span\r\n                      *ngIf=\"unread_notifications != 0\" class=\"badge badge-danger\"\r\n                      style=\"padding: 2px 4px !important; top: -8px !important; left: -8px !important;\">{{\r\n                      unread_notifications }}</span>\r\n                  </a>\r\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"notificationDropdownMenuLink\">\r\n                  <div class=\"card card-plain mt-0\">\r\n                    <div class=\"card-header\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-9 text-left\">\r\n                          <h5 class=\"card-title\">Notifications</h5>\r\n                        </div>\r\n                        <div class=\"col-md-3 text-right\">\r\n                          <h5 class=\"card-title\" (click)=\"readAllNotifications()\"><i class=\"fa fa-envelope-open-o\"\r\n                              aria-hidden=\"true\"></i></h5>\r\n                        </div>\r\n                      </div>\r\n                      <hr class=\"mb-0\">\r\n                    </div>\r\n                    <div class=\"card-body divscroll1\" style=\"overflow: auto; height: 300px; overflow-x: hidden;\"\r\n                      *ngIf=\"notifications.length != 0\">\r\n                      <div class=\"card mt-0 mb-1\" *ngFor=\"let notification of notifications\">\r\n                        <div class=\"card-body readAllNotifications\" id=\"{{notification.id}}bg\" (click)=\"readNotification(notification.id, notification.read_statu, notification.navigation_info)\"\r\n                          [ngStyle]=\"{'background-color': notification.read_status == 0? '#bdc3c7' : 'white'}\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-2\"><span data-notify=\"icon\"><i class=\"fa fa-bell-o\"\r\n                                  aria-hidden=\"true\"></i></span></div>\r\n                            <div class=\"col-md-10\"><span data-notify=\"message\">{{ notification.notification_title }}\r\n                                <br> <small> {{ notification.notification_body }} </small> <br> <small>\r\n                                  {{moment(notification.updated_at).format('ddd')}} |\r\n                                  {{moment(notification.updated_at).format('MMM DD, YYYY')}} |\r\n                                  {{moment(notification.updated_at).format('hh:mm a')}} </small></span></div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"card mt-0 mb-1\">\r\n                        <div class=\"card-body text-center\">\r\n                          <a class=\"text-center\" (click)=\"getNotifications()\" *ngIf=\"new_notification_status == false\"> {{'trans.See_More' | translate}}</a>\r\n                          <h6 class=\"text-center\" *ngIf=\"new_notification_status == true\">No New Notifications</h6>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"card-body\" *ngIf=\"notifications.length == 0\">\r\n                      <p class=\"text-center\">No New Notifications</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\" text-right btn btn-default btn-round px-2 py-2 ml-2\" id=\"navbarDropdownMenuLink\"\r\n                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                  <img class=\"ml-2\" src=\"./assets/Icons/PNG/Menu.png\" />\r\n                  <img class=\"ml-2\" *ngIf=\"pic==null || pic==''\" src=\"./assets/Icons/PNG/Profile.png\"/>\r\n                  <img class=\"pic ml-2\" *ngIf=\"pic!=null && pic!=''\" src=\"http://oneroom3.crosip.com/{{pic}}\"/>                </a>\r\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\" *ngIf=\"!user\">\r\n                  <a class=\"dropdown-item\" href=\"javascript:void(0)\" data-toggle=\"modal\"\r\n                    data-target=\".bd-example-modal-lg1\"> {{'trans.Sign_In' | translate}}</a>\r\n                  <a class=\"dropdown-item\" href=\"javascript:void(0)\" data-toggle=\"modal\" data-target=\".signupModal\"> {{'trans.Sign_Up' | translate}}</a>\r\n                  <a class=\"dropdown-item\" href=\"javascript:void(0)\"> {{'trans.Help_center' | translate}}</a>\r\n                </div>\r\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\" *ngIf=\"user\">\r\n                  <a class=\"dropdown-item\" >\r\n\r\n                    <div class=\"togglebutton\"><label><input type=\"checkbox\"  (change)=\"visitHost()\" id=\"statusVal\" >\r\n                    <span class=\"toggle\"></span>{{'trans.Host' | translate}}</label>\r\n                    </div>\r\n                  </a>\r\n                  <a class=\"dropdown-item\" href=\"#/guest/home\"> {{'Home.Contact' | translate}}</a>\r\n                  <a class=\"dropdown-item\" href=\"#/guestportal/profile\"> {{'trans.Profile' | translate}}</a>\r\n                  <a class=\"dropdown-item\" href=\"#/guestportal/bookinglist\"> {{'trans.Booking_List' | translate}}</a>\r\n                  \r\n                  <a hidden class=\"dropdown-item\" href=\"#/guestportal/offerlist\"> {{'trans.List_your_offer' | translate}}</a>\r\n                  <a class=\"dropdown-item\" href=\"javascript:void(0)\">{{'trans.Help_center' | translate}}r</a>\r\n                  <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"logout()\"> {{'trans.Logout' | translate}}</a>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"col-lg-5 d-block d-lg-none d-xl-none d-md-block\">\r\n            <ul class=\"navbar-nav float-left d-block   d-lg-none d-xl-none d-md-block\">\r\n              <li class=\"nav-item\" title=\"You are logged in as a Guest\" *ngIf=\"user!=null\">\r\n                {{'trans.Guest' | translate}}\r\n              </li>\r\n              \r\n              <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"user\">\r\n                <a class=\" text-right btn btn-default btn-round px-2 py-2\" href=\"#pablo\"\r\n                    id=\"notificationDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"fa fa-bell-o fa-3x\" style=\"color: #2d5286; font-weight: 700\" aria-hidden=\"true\"></i><span\r\n                      *ngIf=\"unread_notifications != 0\" class=\"badge badge-danger\"\r\n                      style=\"padding: 2px 4px !important; top: -8px !important; left: -8px !important;\">{{\r\n                      unread_notifications }}</span>\r\n                </a>\r\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"notificationDropdownMenuLink\">\r\n                  <div class=\"card card-plain mt-0\">\r\n                    <div class=\"card-header\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-9 text-left\">\r\n                          <h5 class=\"card-title\">Notifications</h5>\r\n                        </div>\r\n                        <div class=\"col-md-3 text-right\">\r\n                          <h5 class=\"card-title\" (click)=\"readAllNotifications()\"><i class=\"fa fa-envelope-open-o\"\r\n                              aria-hidden=\"true\"></i></h5>\r\n                        </div>\r\n                      </div>\r\n                      <hr class=\"mb-0\">\r\n                    </div>\r\n                    <div class=\"card-body divscroll1\" style=\"overflow: auto; height: 300px; overflow-x: hidden;\"\r\n                      *ngIf=\"notifications.length != 0\">\r\n                      <div class=\"card mt-0 mb-1\" *ngFor=\"let notification of notifications\">\r\n                        <div class=\"card-body readAllNotifications\" id=\"{{notification.id}}bg\" (click)=\"readNotification(notification.id, notification.read_status, notification.navigation_info)\"\r\n                          [ngStyle]=\"{'background-color': notification.read_status == 0? '#bdc3c7' : 'white'}\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-2\"><span data-notify=\"icon\"><i class=\"fa fa-bell-o\"\r\n                                  aria-hidden=\"true\"></i></span></div>\r\n                            <div class=\"col-md-10\"><span data-notify=\"message\">{{ notification.notification_title }}\r\n                                <br> <small> {{ notification.notification_body }} </small> <br> <small>\r\n                                  {{moment(notification.updated_at).format('ddd')}} |\r\n                                  {{moment(notification.updated_at).format('MMM DD, YYYY')}} |\r\n                                  {{moment(notification.updated_at).format('hh:mm a')}} </small></span></div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"card mt-0 mb-1\">\r\n                        <div class=\"card-body text-center\">\r\n                          <a class=\"text-center\" (click)=\"getNotifications()\" *ngIf=\"new_notification_status == false\"> {{'trans.See_More' | translate}} </a>\r\n                          <h6 class=\"text-center\" *ngIf=\"new_notification_status == true\">No New Notifications</h6>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"card-body\" *ngIf=\"notifications.length == 0\">\r\n                      <p class=\"text-center\">No New Notifications</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\" text-right btn btn-default btn-round px-2 py-2 ml-2\" id=\"navbarDropdownMenuLink\"\r\n                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                  <img class=\"ml-2\" src=\"./assets/Icons/PNG/Menu.png\" />\r\n                  <img class=\"ml-2\" *ngIf=\"pic==null || pic==''\" src=\"./assets/Icons/PNG/Profile.png\"/>\r\n                  <img class=\"pic ml-2\" *ngIf=\"pic!=null && pic!=''\" src=\"http://oneroom3.crosip.com/{{pic}}\"/>\r\n                                </a>\r\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\" *ngIf=\"!user\">\r\n                  <a class=\"dropdown-item\" href=\"javascript:void(0)\" data-toggle=\"modal\"\r\n                    data-target=\".bd-example-modal-lg1\"> {{'trans.Sign_In' | translate}}</a>\r\n                  <a class=\"dropdown-item\" href=\"javascript:void(0)\" data-toggle=\"modal\" data-target=\".signupModal\"> {{'trans.Sign_Up' | translate}}</a>\r\n                  <a class=\"dropdown-item\" href=\"javascript:void(0)\"> {{'trans.Help_center' | translate}}</a>\r\n                </div>\r\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\" *ngIf=\"user\">\r\n                  <a class=\"dropdown-item\" >\r\n\r\n                    <div class=\"togglebutton\"><label><input type=\"checkbox\"  (change)=\"visitHost()\" id=\"statusVal\" >\r\n                    <span class=\"toggle\"></span>{{'trans.Host' | translate}}</label>\r\n                    </div>\r\n                  </a>\r\n                  <a class=\"dropdown-item\" href=\"#/guest/profile\"> {{'trans.Profile' | translate}}</a>\r\n                  <a class=\"dropdown-item\" href=\"#/guest/bookinglist\"> {{'trans.Booking_List' | translate}}</a>\r\n                  <a hidden class=\"dropdown-item\" href=\"#/guest/offerlist\">{{'trans.List_your_offers' | translate}}</a>\r\n                  <a class=\"dropdown-item\" href=\"javascript:void(0)\"> {{'trans.Help_center' | translate}}</a>\r\n                  <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"logout()\"> {{'trans.Logout' | translate}}</a>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"modal bd-example-modal-lg signupModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <form [formGroup]=\"registerForm\" #registerNgForm=\"ngForm\">\r\n      <div class=\"modal-content\" style=\"border-radius: 25px;\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\" *ngIf=\"step==0\">\r\n            <div class=\"modal-body\">\r\n              <img src=\"../assets/Icons/PNG/Logo_Icon.png\">\r\n              <h3><b>{{'trans.Sign_Up' | translate}}</b></h3>\r\n              <div *ngIf=\"showAlert\" style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n                class=\"alert alert-error\">{{ errorMessage }}</div>\r\n              <div class=\"form-group\">\r\n                <label> {{'trans.Email' | translate}}</label>\r\n                <input type=\"email\" class=\"form-control\" [formControlName]=\"'email'\" placeholder=\"Email\" required />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label> {{'trans.Password' | translate}}</label>\r\n                <input type=\"{{passtext1}}\" class=\"form-control p-4\" [formControlName]=\"'password'\"\r\n                  placeholder=\"Password\" required />\r\n                <span toggle=\"#password-field\" class=\" field-icon toggle-password\"><a href=\"javascript:void(0);\"\r\n                    class=\"text-dark\"> <u (click)=\"show1()\" id=\"pshide1\">Show</u></a> </span>\r\n              </div>\r\n              <p>{{'trans.We_ll_send_you_a_confirmation_email' | translate}}</p>\r\n              <button class=\"btn btn-danger btn-block\" (click)=\"sendOTP()\"> {{'trans.Continue' | translate}}</button>\r\n              <div class=\"d-inline-flex  w-100\">\r\n                <div style=\"display: flex; flex: 1;\">\r\n                  <hr style=\"width: 95%;\">\r\n                </div>\r\n                <div class=\"mt-2\"> {{'trans.OR' | translate}}</div>\r\n                <div style=\"display: flex; flex: 1;\">\r\n                  <hr style=\"width: 95%;\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-12\">\r\n                <button class=\"btn btn-outlook-danger text-dark px-3 py-2\" (click)=\"loginWithApple()\"><img width=\"12\" class=\"mr-1\"\r\n                    src=\"../assets/Icons/PNG/Apple.png\" /> Apple</button>\r\n                <button class=\"btn btn-outlook-danger text-dark  px-3 py-2\" (click)=\"loginWithFacebook()\"><img width=\"9\"\r\n                    class=\"mr-1\" src=\"../assets/Icons/PNG/Facebook.png\" /> Facebook</button>\r\n                <button class=\"btn btn-outlook-danger text-dark  px-3 py-2\" (click)=\"signInWithGoogle()\"><img width=\"12\"\r\n                    class=\"mr-1\" src=\"../assets/Icons/PNG/Brand color_Google.png\" /> Google</button>\r\n                <p class=\"mt-3\">{{'trans.Already_have_an_account_Sign_In' | translate}}<a (click)=\"signinModal()\" href=\"javascript:void(0)\" class=\"text-dark\"><u> {{'trans.Sign_In' | translate}}</u></a>\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\" *ngIf=\"step==1\">\r\n            <div class=\"modal-body pr-1\">\r\n              <h3> <a href=\"javascript:void(0)\" class=\"text-dark\" (click)=\"step=0\"><i\r\n                    class=\"fa fa-arrow-left mr-2\"></i></a><b>{{'trans.Finishing_signing_up' | translate}} </b></h3>\r\n              <div *ngIf=\"showAlert\" style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n                class=\"alert alert-error\">{{ errorMessage }}</div>\r\n              <div class=\"divscroll pr-3\" style=\"overflow: auto;max-height: 430px;overflow-x: hidden;\">\r\n                <div class=\"form-group\">\r\n                  <label> {{'trans.Surname' | translate}}</label>\r\n                  <input type=\"text\" class=\"form-control\" [formControlName]=\"'lname'\" placeholder=\"Surname\" required pattern=\"^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$\" title=\"Invalid Last Name\"/>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label> {{'trans.First_Name' | translate}}</label>\r\n                  <input type=\"text\" class=\"form-control\" [formControlName]=\"'fname'\" placeholder=\"First Name\"\r\n                    required pattern=\"^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$\" title=\"Invalid First Name\"/>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>{{'trans.Telephone_number' | translate}} </label>\r\n                  <!-- <input type=\"text\" class=\"form-control\"  placeholder=\"Telephone Number\"/> -->\r\n                  <ngx-intl-tel-input [cssClass]=\"'custom'\"\r\n                    [preferredCountries]=\"[CountryISO.UnitedStates, CountryISO.UnitedKingdom]\"\r\n                    [enableAutoCountrySelect]=\"true\" [enablePlaceholder]=\"true\" [searchCountryFlag]=\"true\"\r\n                    [searchCountryField]=\"[SearchCountryField.Iso2, SearchCountryField.Name]\"\r\n                    [selectedCountryISO]=\"CountryISO.UnitedKingdom\" [phoneValidation]=\"true\" name=\"phone\"\r\n                    [formControlName]=\"'contact_no'\" required>\r\n                  </ngx-intl-tel-input>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label> {{'trans.Address' | translate}}</label>\r\n                  <input type=\"text\" class=\"form-control\" [formControlName]=\"'address'\" placeholder=\"Address\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>{{'trans.VAT_Number' | translate}} </label>\r\n                  <input type=\"text\" class=\"form-control\" [formControlName]=\"'vat_no'\" placeholder=\"Vat Number\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label> {{'trans.Website' | translate}}</label>\r\n                  <input type=\"link\" class=\"form-control\" [formControlName]=\"'website'\" placeholder=\"Website\" pattern=\"^(http(s)?:\\/\\/)+[\\w\\-\\._~:\\/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$\" title=\"Invalid URL\"/>\r\n                </div>\r\n                <p> {{'trans.We_ll_send_you_a_confirmation_email' | translate}}</p>\r\n                <button type=\"submit\" class=\"btn btn-danger btn-block\" (click)=\"registerValidation()\"> {{'trans.Continue' | translate}}</button>\r\n              </div>\r\n              <div class=\"d-inline-flex  w-100\" *ngIf=\"step==0\">\r\n                <div style=\"display: flex; flex: 1;\">\r\n                  <hr style=\"width: 95%;\">\r\n                </div>\r\n                <div class=\"mt-2\"> {{'trans.OR' | translate}}</div>\r\n                <div style=\"display: flex; flex: 1;\">\r\n                  <hr style=\"width: 95%;\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-12\" *ngIf=\"step==0\">\r\n                <button class=\"btn btn-outlook-danger text-dark px-3 py-2\" (click)=\"loginWithApple()\"><img width=\"12\" class=\"mr-1\"\r\n                    src=\"../assets/Icons/PNG/Apple.png\" /> Apple </button>\r\n                <button class=\"btn btn-outlook-danger text-dark  px-3 py-2\" (click)=\"loginWithFacebook()\"><img width=\"9\"\r\n                    class=\"mr-1\" src=\"../assets/Icons/PNG/Facebook.png\" />Facebook </button>\r\n                <button class=\"btn btn-outlook-danger text-dark  px-3 py-2\" (click)=\"signInWithGoogle()\"><img width=\"12\"\r\n                    class=\"mr-1\" src=\"../assets/Icons/PNG/Brand color_Google.png\" />Google</button>\r\n                <p class=\"mt-3\">{{'trans.Already_have_an_account_Sign_In' | translate}} <a (click)=\"signinModal()\" class=\"text-dark\" href=\"javascript:void(0)\"><u> {{'trans.Sign_In' | translate}}</u></a>\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-6\" *ngIf=\"step==2\">\r\n            <div class=\"modal-body\">\r\n              <img src=\"../assets/Icons/PNG/Logo_Icon.png\">\r\n              <h3><b>Verify OTP </b></h3>\r\n              <div *ngIf=\"showAlert\" style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n                class=\"alert alert-error\">{{ errorMessage }}</div>\r\n              <div class=\"form-group\">\r\n                <label>OTP </label>\r\n                <input type=\"number\" class=\"form-control\" id=\"otp\" placeholder=\"OTP Code\" />\r\n              </div>\r\n              <button class=\"btn btn-danger btn-block\" (click)=\"register()\">Verify OTP</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 d-none d-md-block d-lg-block d-xl-block\"\r\n            style=\"border-bottom-right-radius: 25px; border-top-right-radius: 25px; background-image: url('../assets/Images/Signin and signup_Illustration.png');background-size: cover; background-position: top center;\">\r\n            <div class=\"col-12 text-right mt-2\">\r\n              <a class=\"btn-rounded-circle\" href=\"javascript:void(0);\" data-dismiss=\"modal\" aria-label=\"Close\"\r\n                style=\"background: white; padding: 5px;border-radius: 50%; margin-right: -20px\"><img\r\n                  src=\"../assets/Icons/PNG/Close.png\" /></a>\r\n            </div>\r\n            <div class=\"col-12 \" style=\"margin-top: 15vh;\">\r\n              <h3 class=\"mt-4\"><b> {{'trans.Welcome_to_One_Rooms' | translate}}\r\n                </b></h3>\r\n              <p>In publishing and graphic design, Lorem ipsum is a\r\n                placeholder text commonly used to demonstrate\r\n                the visual form of a document</p>\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal bd-example-modal-lg1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <form [formGroup]=\"loginForm\" #loginNgForm=\"ngForm\">\r\n      <div class=\"modal-content\" style=\"border-radius: 25px;\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"modal-body\">\r\n              <img src=\"../assets/Icons/PNG/Logo_Icon.png\">\r\n              <h3><b> {{'trans.Sign_In' | translate}}</b></h3>\r\n              <div *ngIf=\"showAlert\" style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n                class=\"alert alert-error\">{{ errorMessage }}</div>\r\n              <div class=\"form-group\">\r\n                <label> {{'trans.Email' | translate}}</label>\r\n                <input type=\"text\" class=\"form-control\" [formControlName]=\"'email'\" placeholder=\"Email\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <label> {{'trans.Password' | translate}}</label>\r\n                  </div>\r\n                  <div class=\"col-md-6 text-right\">\r\n                    <p><a (click)=\"forgotPasswordModal()\"><u> {{'trans.Forgot_Password' | translate}}</u></a></p>\r\n                  </div>\r\n                </div>\r\n                <input type=\"{{passtext}}\" class=\"form-control p-4\" [formControlName]=\"'password'\"\r\n                  placeholder=\"Password\" />\r\n                <span toggle=\"#password-field\" class=\" field-icon toggle-password\"><a href=\"javascript:void(0);\"\r\n                    class=\"text-dark\"> <u (click)=\"show()\" id=\"pshide\">Show</u></a> </span>\r\n              </div>\r\n              <p hidden>{{'trans.We_ll_send_you_a_confirmation_email' | translate}}</p>\r\n              <button class=\"btn btn-danger btn-block\" (click)=\"login()\"> {{'trans.Continue' | translate}}</button>\r\n              <div class=\"d-inline-flex  w-100\">\r\n                <div style=\"display: flex; flex: 1;\">\r\n                  <hr style=\"width: 95%;\">\r\n                </div>\r\n                <div class=\"mt-2\"> {{'trans.OR' | translate}}</div>\r\n                <div style=\"display: flex; flex: 1;\">\r\n                  <hr style=\"width: 95%;\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-12\">\r\n                <button class=\"btn btn-outlook-danger text-dark px-3 py-2\" (click)=\"loginWithApple()\"><img width=\"12\" class=\"mr-1\"\r\n                    src=\"../assets/Icons/PNG/Apple.png\" />Apple</button>\r\n                <button class=\"btn btn-outlook-danger text-dark  px-3 py-2\" (click)=\"loginWithFacebook()\"><img width=\"9\"\r\n                    class=\"mr-1\" src=\"../assets/Icons/PNG/Facebook.png\" />  Facebook</button>\r\n                <button class=\"btn btn-outlook-danger text-dark  px-3 py-2\" (click)=\"signInWithGoogle()\"><img width=\"12\"\r\n                    class=\"mr-1\" src=\"../assets/Icons/PNG/Brand color_Google.png\" /> Google</button>\r\n                <p class=\"mt-3\">Dont't have an Account? {{'trans.Contact' | translate}} <a (click)=\"signupModal()\" href=\"javascript:void(0)\" class=\"text-dark\"><u>{{'trans.Sign_Up' | translate}}</u></a>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"col-md-6 d-none d-md-block d-lg-block d-xl-block\"\r\n            style=\"border-bottom-right-radius: 25px; border-top-right-radius: 25px; background-image: url('../assets/Images/Signin and signup_Illustration.png');background-size: cover; background-position: top center;\">\r\n            <div class=\"col-12 text-right mt-2\">\r\n              <a class=\"btn-rounded-circle\" href=\"javascript:void(0);\" data-dismiss=\"modal\" aria-label=\"Close\"\r\n                style=\"background: white; padding: 5px; border-radius: 50%; margin-right: -20px\"><img\r\n                  src=\"../assets/Icons/PNG/Close.png\" /></a>\r\n            </div>\r\n            <div class=\"col-12 \" style=\"margin-top: 15vh;\">\r\n              <h3 class=\"mt-4\"><b>{{'trans.Welcome_to_One_Rooms' | translate}}\r\n                </b></h3>\r\n              <p>In publishing and graphic design, Lorem ipsum is a\r\n                placeholder text commonly used to demonstrate\r\n                the visual form of a document</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade bd-example-modal-lg\" id=\"forgot-password\" tabindex=\"-1\" role=\"dialog\"\r\n  aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title text-left\" id=\"exampleModalLabel\">{{'trans.Forgot_password' | translate}}</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <form [formGroup]=\"verifyEmailForm\" #verifyEmailNgForm=\"ngForm\" id=\"vEmail\">\r\n        <div class=\"modal-body\">\r\n          <hr>\r\n          <div *ngIf=\"showAlert\" style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n            class=\"alert alert-error\">{{ errorMessage }}</div>\r\n          <div class=\"form-group\">\r\n            <label> {{'trans.Email' | translate}}</label>\r\n            <input type=\"email\" class=\"form-control\" [formControlName]=\"'email'\" required>\r\n          </div>\r\n          <hr>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"verifyEmail()\"> {{'trans.Submit' | translate}}</button>\r\n          &nbsp; &nbsp;\r\n          <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\" style=\"color: black;\">Close </button>\r\n        </div>\r\n      </form>\r\n      <form [formGroup]=\"verifyForgotPasswordOtpForm\" #verifyForgotPasswordOtpNgForm=\"ngForm\" id=\"vForgotPasswordOtp\"\r\n        hidden>\r\n        <div class=\"modal-body\">\r\n          <hr>\r\n          <div *ngIf=\"showAlert\" style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n            class=\"alert alert-error\">{{ errorMessage }}</div>\r\n          <div class=\"form-group\">\r\n            <label>OTP</label>\r\n            <input type=\"number\" class=\"form-control\" [formControlName]=\"'otp'\" required>\r\n          </div>\r\n          <hr>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"verifyForgoPasswordOtp()\"> {{'trans.Submit' | translate}}</button>\r\n          &nbsp; &nbsp;\r\n          <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\" style=\"color: black;\">Close</button>\r\n        </div>\r\n      </form>\r\n      <form [formGroup]=\"updatePasswordForm\" #updatePasswordNgForm=\"ngForm\" id=\"uPassword\" hidden>\r\n        <div class=\"modal-body\">\r\n          <hr>\r\n          <div *ngIf=\"showAlert\" style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n            class=\"alert alert-error\">{{ errorMessage }}</div>\r\n          <div class=\"form-group\">\r\n            <label> {{'trans.Password' | translate}}</label>\r\n            <input type=\"password\" class=\"form-control\" [formControlName]=\"'password'\" required>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Confirm Password </label>\r\n            <input type=\"password\" class=\"form-control\" [formControlName]=\"'confirm_password'\" required>\r\n          </div>\r\n          <hr>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"updatePasswordOtp()\"> {{'trans.Submit' | translate}}</button>\r\n          &nbsp; &nbsp;\r\n          <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\" style=\"color: black;\">Close</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade bd-example-modal-lg try-offers1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-md\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header mb-0 pb-0\" style=\"padding-top: 20px !important\">\r\n        <a class=\"btn-rounded-circle close\" href=\"javascript:void(0);\" data-dismiss=\"modal\" aria-label=\"Close\"\r\n          style=\"background: #e6e6e6; padding: 5px;border-radius: 50%;\"><img src=\"../assets/Icons/PNG/Close.png\" /></a>\r\n      </div>\r\n      <div class=\"modal-body mt-0 mb-0\" style=\"color: #203a60; padding-top: 20px !important;\">\r\n        <h2 class=\"mt-0 pt-0 text-center\"><b> {{'trans.Insight' | translate}}</b></h2>\r\n        <h6 class=\"mt-0 pt-0 text-center\"><b>{{'trans.Account_type' | translate}}</b></h6>\r\n        <p class=\"mt-0 pt-0 text-center\" style=\"margin-right: 5.5rem; margin-left: 5.5rem;\">In publishing and graphic\r\n          design, Lorem Ipsum is a placeholder text commonly used to demonstrate the visual. </p>\r\n        <h5 class=\"mt-1 pt-0 text-center\"><b>{{'trans.choose_a_plan' | translate}}</b></h5>\r\n        <div class=\"row divscroll\" style=\" overflow: auto; overflow-x: hidden;\" *ngIf=\"plans\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"card mt-0 mb-2\" style=\"border-radius: 20px; background-color: #dfe4ea;\"\r\n              (click)=\"defaultPlan('Beginner')\">\r\n              <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-11\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-6 text-left\">\r\n                        <h4 class=\"my-0 pt-0 text-black\"> {{'trans.Beginners' | translate}}</h4>\r\n                      </div>\r\n                      <div class=\"col-6 text-right\">\r\n                        <h4 class=\"my-0 pt-0 text-danger\">$0</h4>\r\n                      </div>\r\n                      <div class=\"col-6 text-left\">\r\n                        <p class=\"mb-0\">5 {{'trans.Offers_per_month' | translate}}</p>\r\n                      </div>\r\n                      <div class=\"col-6 text-right\">\r\n                        <p class=\"mb-0\">Free </p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-1\" style=\"align-self: center;\">\r\n                    <i class=\"fa fa-chevron-right fa-2x\" aria-hidden=\"true\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12\" *ngFor=\"let plan of plans\">\r\n            <div class=\"card mt-0 mb-2\" style=\"border-radius: 20px; background-color: #dfe4ea;\"\r\n              (click)=\"buyPlan(plan.id, plan.name, plan.price)\">\r\n              <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-11\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-6 text-left\">\r\n                        <h4 class=\"my-0 pt-0 text-black\">{{ plan.name }}</h4>\r\n                      </div>\r\n                      <div class=\"col-6 text-right\">\r\n                        <h4 class=\"my-0 pt-0 text-danger\">${{ plan.price }}</h4>\r\n                      </div>\r\n                      <div class=\"col-6 text-left\">\r\n                        <p class=\"mb-0\">{{ plan.description }}</p>\r\n                      </div>\r\n                      <div class=\"col-6 text-right\">\r\n                        <p class=\"mb-0\">{{ plan.interval }}</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-1\" style=\"align-self: center;\">\r\n                    <i class=\"fa fa-chevron-right fa-2x\" aria-hidden=\"true\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <div class=\"card mt-0 mb-2\" style=\"border-radius: 20px; background-color: #dfe4ea;\">\r\n              <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6 text-left\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-12 text-left\">\r\n                        <h4 class=\"my-0 pt-0 text-black\"> {{'trans.Enterprise' | translate}}</h4>\r\n                      </div>\r\n                      <div class=\"col-12 text-left\">\r\n                        <p class=\"mb-0\"> {{'trans.Contact_with_us' | translate}}</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6 text-right\" style=\"align-self: center;\">\r\n                    <button class=\"btn btn-danger btn-lg btn-block\" style=\"border-radius: 15px;\">{{'trans.Let_Chat' | translate}}</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 text-center\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade bd-example-modal-lg\" id=\"plan\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title text-left\" id=\"exampleModalLabel\">Payment </h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <form [formGroup]=\"planForm\" #planNgForm=\"ngForm\">\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-2 text-right\">\r\n              <input type=\"radio\" id=\"stripe\" name=\"payment_method\" value=\"Stripe\" (click)=\"showPaymentSection()\">\r\n            </div>\r\n            <div class=\"col-md-4 text-left\">\r\n              <label for=\"stripe\">Stripe</label>\r\n            </div>\r\n            <div class=\"col-md-2 text-right\">\r\n              <input type=\"radio\" id=\"paypal\" name=\"payment_method\" value=\"PayPal\" (click)=\"showPaymentSection()\">\r\n            </div>\r\n            <div class=\"col-md-4 text-left\">\r\n              <label for=\"paypal\">PayPal </label>\r\n            </div>\r\n          </div>\r\n          <hr>\r\n          <div *ngIf=\"showAlert\" style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n            class=\"alert alert-error\">{{ errorMessage }}</div>\r\n          <div class=\"row\" id=\"stripeSection\" hidden>\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group\">\r\n                <label>Card Number</label>\r\n                <input type=\"number\" class=\"form-control\" [formControlName]=\"'number'\" required max=\"16\" min=\"16\"\r\n                  placeholder=\"Card Number\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Expiry Month </label>\r\n                <input type=\"number\" class=\"form-control\" [formControlName]=\"'month'\" required max=\"2\" min=\"2\"\r\n                  placeholder=\"MM\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Expiry Year</label>\r\n                <input type=\"number\" class=\"form-control\" [formControlName]=\"'year'\" required max=\"4\" min=\"4\"\r\n                  placeholder=\"YYYY\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>CVC</label>\r\n                <input type=\"number\" class=\"form-control\" [formControlName]=\"'cvc'\" required max=\"3\" min=\"3\"\r\n                  placeholder=\"CVC\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" id=\"paypalSection\" hidden>\r\n            <div class=\"col-md-12 text-center\" id=\"clickPayPal\" hidden>\r\n              <h5>Click on  <a href=\"\" id=\"paypalLink\" target=\"_blank\">PayPal</a></h5>\r\n            </div>\r\n          </div>\r\n          <hr>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-danger\" id=\"submitPlan\" (click)=\"subscribePlan()\" hidden> {{'trans.Submit' | translate}}</button>\r\n          &nbsp; &nbsp;\r\n          <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\" style=\"color: black;\">Close</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>";

/***/ }),

/***/ 52220:
/*!**************************************************************************!*\
  !*** ./src/app/Admin/layouts/host/host-layout.component.html?ngResource ***!
  \**************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<style>\r\n  .off-canvas-sidebar .navbar .navbar-collapse .navbar-nav .nav-item .nav-link {\r\n    color: black !important;\r\n  }\r\n\r\n  .form-control,\r\n  .is-focused .form-control {\r\n    background-image: none;\r\n    border: 1px solid #d4d2d2;\r\n    border-radius: 5px;\r\n    padding: 18px;\r\n    margin-top: 5px;\r\n    background: white;\r\n  }\r\n\r\n  .divscroll::-webkit-scrollbar {\r\n    scrollbar-gutter: 2px;\r\n    width: 4px;\r\n    z-index: 10;\r\n    border-radius: 10px;\r\n    background: white;\r\n  }\r\n\r\n  .divscroll::-webkit-scrollbar-thumb {\r\n    background-color: #2d5286;\r\n  }\r\n\r\n  .field-icon {\r\n    float: right;\r\n    margin-left: -25px;\r\n    margin-top: -36px;\r\n    position: relative;\r\n    z-index: 2;\r\n    margin-right: 5px;\r\n  }\r\n</style>\r\n\r\n<nav class=\"navbar navbar-expand-lg navbar-transparent navbar-absolute\" color-on-scroll=\"500\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-wrapper\">\r\n      <a class=\"navbar-brand ml-0 \" [routerLink]=\"['']\"><img src=\"./assets/Icons/SVG/logo.svg\"\r\n          style=\"width:70%;\" /></a>\r\n    </div>\r\n    <button mat-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\r\n      <span class=\"sr-only\">Toggle navigation</span>\r\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse justify-content-end\">\r\n      <div class=\"col-12\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-7\">\r\n            <ul class=\"navbar-nav justify-content-center mt-4 mt-md-1\">\r\n              <li class=\"nav-item \" routerLinkActive=\"active\">\r\n                <a class=\"nav-link \" [routerLink]=\"['/Website/host']\">\r\n                   {{'trans.Offer' | translate}}\r\n\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item \" routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/Website/blogs']\" >\r\n                  {{'trans.blogs' | translate}}\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item \"  routerLinkActive=\"active\">\r\n                <a class=\"nav-link \" [routerLink]=\"['/website/home']\">\r\n                  \r\n                  {{'trans.about_us' | translate}}\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/Website/contactus']\" >\r\n                  {{'trans.contact' | translate}}\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"col-lg-5 d-none  d-lg-block d-xl-block\">\r\n            <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\r\n              <ul class=\"navbar-nav\">\r\n                <li *ngIf=\"user != null\" title=\"You are logged in as a Host\">Host</li>\r\n                <!-- <li class=\"mr-3\" *ngIf=\"user != null\" (click)=\"visitGuest()\">\r\n                  Become a Guest\r\n                </li> -->\r\n                <li class=\"nav-item dropdown\" *ngIf=\"user != null\">\r\n                  <a class=\" text-right btn btn-default btn-round px-2 py-2\" href=\"#pablo\"\r\n                    id=\"notificationDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"fa fa-bell-o fa-3x\" style=\"color: #2d5286; font-weight: 700\" aria-hidden=\"true\"></i><span\r\n                      *ngIf=\"unread_notifications != 0\" class=\"badge badge-danger\"\r\n                      style=\"padding: 2px 4px !important; top: -8px !important; left: -8px !important;\">{{\r\n                      unread_notifications }}</span>\r\n                  </a>\r\n                  <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"notificationDropdownMenuLink\">\r\n                    <div class=\"card card-plain mt-0\">\r\n                      <div class=\"card-header\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-md-9 text-left\">\r\n                            <h5 class=\"card-title\">Notifications</h5>\r\n                          </div>\r\n                          <div class=\"col-md-3 text-right\">\r\n                            <h5 class=\"card-title\" (click)=\"readAllNotifications()\"><i class=\"fa fa-envelope-open-o\"\r\n                                aria-hidden=\"true\"></i></h5>\r\n                          </div>\r\n                        </div>\r\n                        <hr class=\"mb-0\">\r\n                      </div>\r\n                      <div class=\"card-body divscroll1\" style=\"overflow: auto; height: 300px; overflow-x: hidden;\"\r\n                        *ngIf=\"notifications.length != 0\">\r\n                        <div class=\"card mt-0 mb-1\" *ngFor=\"let notification of notifications\">\r\n                          <div class=\"card-body readAllNotifications\" id=\"{{notification.id}}bg\"\r\n                            (click)=\"readNotification(notification.id, notification.read_status, notification.navigation_info)\"\r\n                            [ngStyle]=\"{'background-color': notification.read_status == 0? '#bdc3c7' : 'white'}\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-md-2\"><span data-notify=\"icon\"><i class=\"fa fa-bell-o\"\r\n                                    aria-hidden=\"true\"></i></span></div>\r\n                              <div class=\"col-md-10\"><span data-notify=\"message\">{{ notification.notification_title }}\r\n                                  <br> <small> {{ notification.notification_body }} </small> <br> <small>\r\n                                    {{moment(notification.updated_at).format('ddd')}} |\r\n                                    {{moment(notification.updated_at).format('MMM DD, YYYY')}} |\r\n                                    {{moment(notification.updated_at).format('hh:mm a')}} </small></span></div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"card mt-0 mb-1\">\r\n                          <div class=\"card-body text-center\">\r\n                            <a class=\"text-center\" (click)=\"getNotifications()\"\r\n                              *ngIf=\"new_notification_status == false\">See More</a>\r\n                            <h6 class=\"text-center\" *ngIf=\"new_notification_status == true\">No New Notifications</h6>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"card-body\" *ngIf=\"notifications.length == 0\">\r\n                        <p class=\"text-center\">No New Notifications</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                  <a class=\" text-right btn btn-default btn-round px-2 py-2 ml-2\" href=\"#pablo\"\r\n                    id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <img class=\"ml-2\" src=\"./assets/Icons/PNG/Menu.png\" />\r\n                    <img class=\"ml-2\" *ngIf=\"pic==null || pic==''\" src=\"./assets/Icons/PNG/Profile.png\"/>\r\n                    <img class=\"pic ml-2\" *ngIf=\"pic!=null && pic!=''\" src=\"http://oneroom3.crosip.com/{{pic}}\"/>\r\n                  </a>\r\n                  <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\" *ngIf=\"user == null\">\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" data-toggle=\"modal\"\r\n                      data-target=\".bd-example-modal-lg1\"> {{'trans.Sign_In' | translate}}</a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" data-toggle=\"modal\"\r\n                      data-target=\".signupModal\"> {{'trans.Sign_Up' | translate}}</a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\"> {{'trans.Help_center' | translate}}</a>\r\n                  </div>\r\n                  <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\" *ngIf=\"user != null\">\r\n                    <a class=\"dropdown-item\" >\r\n\r\n                      <div class=\"togglebutton\"><label><input type=\"checkbox\"  (change)=\"visitGuest()\" id=\"statusVal\" >\r\n                      <span class=\"toggle\"></span>Guest</label>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#/hostportal/offerlist\"> {{'trans.Dashboard' | translate}}</a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\"> {{'trans.Help_center' | translate}}</a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"logout()\">{{'trans.Logout' | translate}}</a>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <ul class=\"navbar-nav float-left d-none   d-lg-none d-xl-none d-md-block\">\r\n              <li class=\"nav-iem\" *ngIf=\"user != null\" title=\"You are logged in as a Host\">\r\n                Host\r\n              </li>\r\n              <!-- <li class=\"nav-item mr-3\" *ngIf=\"user != null\" (click)=\"visitGuest()\">\r\n                Become a Host\r\n              </li> -->\r\n              <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"user != null\">\r\n                <a class=\" text-right btn btn-default btn-round px-2 py-2\" href=\"#pablo\"\r\n                  id=\"notificationDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                  <i class=\"fa fa-bell-o fa-3x\" style=\"color: #2d5286; font-weight: 700\" aria-hidden=\"true\"></i><span\r\n                    *ngIf=\"unread_notifications != 0\" class=\"badge badge-danger\"\r\n                    style=\"padding: 2px 4px !important; top: -8px !important; left: -8px !important;\">{{\r\n                    unread_notifications }}</span>\r\n                </a>\r\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"notificationDropdownMenuLink\">\r\n                  <div class=\"card card-plain mt-0\">\r\n                    <div class=\"card-header\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-9 text-left\">\r\n                          <h5 class=\"card-title\">Notifications</h5>\r\n                        </div>\r\n                        <div class=\"col-md-3 text-right\">\r\n                          <h5 class=\"card-title\" (click)=\"readAllNotifications()\"><i class=\"fa fa-envelope-open-o\"\r\n                              aria-hidden=\"true\"></i></h5>\r\n                        </div>\r\n                      </div>\r\n                      <hr class=\"mb-0\">\r\n                    </div>\r\n                    <div class=\"card-body divscroll1\" style=\"overflow: auto; height: 300px; overflow-x: hidden;\"\r\n                      *ngIf=\"notifications.length != 0\">\r\n                      <div class=\"card mt-0 mb-1\" *ngFor=\"let notification of notifications\">\r\n                        <div class=\"card-body readAllNotifications\" id=\"{{notification.id}}bg\"\r\n                          (click)=\"readNotification(notification.id, notification.read_status, notification.navigation_info)\"\r\n                          [ngStyle]=\"{'background-color': notification.read_status == 0? '#bdc3c7' : 'white'}\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-2\"><span data-notify=\"icon\"><i class=\"fa fa-bell-o\"\r\n                                  aria-hidden=\"true\"></i></span></div>\r\n                            <div class=\"col-md-10\"><span data-notify=\"message\">{{ notification.notification_title }}\r\n                                <br> <small> {{ notification.notification_body }} </small> <br> <small>\r\n                                  {{moment(notification.updated_at).format('ddd')}} |\r\n                                  {{moment(notification.updated_at).format('MMM DD, YYYY')}} |\r\n                                  {{moment(notification.updated_at).format('hh:mm a')}} </small></span></div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"card mt-0 mb-1\">\r\n                        <div class=\"card-body text-center\">\r\n                          <a class=\"text-center\" (click)=\"getNotifications()\"\r\n                            *ngIf=\"new_notification_status == false\">See More</a>\r\n                          <h6 class=\"text-center\" *ngIf=\"new_notification_status == true\">No New Notifications</h6>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"card-body\" *ngIf=\"notifications.length == 0\">\r\n                      <p class=\"text-center\">No New Notifications</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\" text-right btn btn-default btn-round px-2 py-2 ml-2\" href=\"#pablo\"\r\n                  id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                  <img class=\"ml-2\" src=\"./assets/Icons/PNG/Menu.png\" />\r\n                  <img class=\"ml-2\" *ngIf=\"pic==null || pic==''\" src=\"./assets/Icons/PNG/Profile.png\"/>\r\n                    <img class=\"pic ml-2\" *ngIf=\"pic!=null && pic!=''\" src=\"http://oneroom3.crosip.com/{{pic}}\"/>\r\n                </a>\r\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\" *ngIf=\"user == null\">\r\n                  <a class=\"dropdown-item\" href=\"javascript:void(0)\" data-toggle=\"modal\"\r\n                    data-target=\".bd-example-modal-lg1\"> {{'trans.Sign_In' | translate}}</a>\r\n                  <a class=\"dropdown-item\" href=\"javascript:void(0)\" data-toggle=\"modal\" data-target=\".signupModal\">{{'trans.Sign_Up' | translate}}</a>\r\n                  <a class=\"dropdown-item\" href=\"javascript:void(0)\"> {{'trans.Help_center' | translate}}</a>\r\n                </div>\r\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\" *ngIf=\"user != null\">\r\n                  <a class=\"dropdown-item\" >\r\n\r\n                    <div class=\"togglebutton\"><label><input type=\"checkbox\"  (change)=\"visitGuest()\" id=\"statusVal\" >\r\n                    <span class=\"toggle\"></span>Guest</label>\r\n                    </div>\r\n                  </a>\r\n                  <a class=\"dropdown-item\" href=\"#/hostportal/offerlist\"> {{'trans.Dashboard' | translate}}</a>\r\n                  <a class=\"dropdown-item\" href=\"javascript:void(0)\"> {{'trans.Help_center' | translate}}</a>\r\n                  <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"logout()\">{{'trans.Logout' | translate}}</a>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"col-lg-5 d-block   d-lg-none d-xl-none d-md-block\">\r\n            <ul class=\"navbar-nav float-left d-block   d-lg-none d-xl-none d-md-block\">\r\n              <li class=\"nav-iem\" title=\"You are logged in as a Host\" *ngIf=\"user != null\">\r\n                Host\r\n              </li>\r\n              <!-- <li class=\"nav-iem mr-3\" *ngIf=\"user != null\" (click)=\"visitGuest()\">\r\n                Become a Host\r\n              </li> -->\r\n              <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"user != null\">\r\n                <a class=\" text-right btn btn-default btn-round px-2 py-2\" href=\"#pablo\"\r\n                  id=\"notificationDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                  <i class=\"fa fa-bell-o fa-3x\" style=\"color: #2d5286; font-weight: 700\" aria-hidden=\"true\"></i><span\r\n                    *ngIf=\"unread_notifications != 0\" class=\"badge badge-danger\"\r\n                    style=\"padding: 2px 4px !important; top: -8px !important; left: -8px !important;\">{{\r\n                    unread_notifications }}</span>\r\n                </a>\r\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"notificationDropdownMenuLink\">\r\n                  <div class=\"card card-plain mt-0\">\r\n                    <div class=\"card-header\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-9 text-left\">\r\n                          <h5 class=\"card-title\">Notifications</h5>\r\n                        </div>\r\n                        <div class=\"col-md-3 text-right\">\r\n                          <h5 class=\"card-title\" (click)=\"readAllNotifications()\"><i class=\"fa fa-envelope-open-o\"\r\n                              aria-hidden=\"true\"></i></h5>\r\n                        </div>\r\n                      </div>\r\n                      <hr class=\"mb-0\">\r\n                    </div>\r\n                    <div class=\"card-body divscroll1\" style=\"overflow: auto; height: 300px; overflow-x: hidden;\"\r\n                      *ngIf=\"notifications.length != 0\">\r\n                      <div class=\"card mt-0 mb-1\" *ngFor=\"let notification of notifications\">\r\n                        <div class=\"card-body readAllNotifications\" id=\"{{notification.id}}bg\"\r\n                          (click)=\"readNotification(notification.id, notification.read_status, notification.navigation_info)\"\r\n                          [ngStyle]=\"{'background-color': notification.read_status == 0? '#bdc3c7' : 'white'}\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-2\"><span data-notify=\"icon\"><i class=\"fa fa-bell-o\"\r\n                                  aria-hidden=\"true\"></i></span></div>\r\n                            <div class=\"col-md-10\"><span data-notify=\"message\">{{ notification.notification_title }}\r\n                                <br> <small> {{ notification.notification_body }} </small> <br> <small>\r\n                                  {{moment(notification.updated_at).format('ddd')}} |\r\n                                  {{moment(notification.updated_at).format('MMM DD, YYYY')}} |\r\n                                  {{moment(notification.updated_at).format('hh:mm a')}} </small></span></div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"card mt-0 mb-1\">\r\n                        <div class=\"card-body text-center\">\r\n                          <a class=\"text-center\" (click)=\"getNotifications()\"\r\n                            *ngIf=\"new_notification_status == false\">See More</a>\r\n                          <h6 class=\"text-center\" *ngIf=\"new_notification_status == true\">No New Notifications</h6>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"card-body\" *ngIf=\"notifications.length == 0\">\r\n                      <p class=\"text-center\">No New Notifications</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\" text-right btn btn-default btn-round px-2 py-2 ml-2\" href=\"#pablo\"\r\n                  id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                  <img class=\"ml-2\" src=\"./assets/Icons/PNG/Menu.png\" />\r\n                  <img class=\"ml-2\" *ngIf=\"pic==null || pic==''\" src=\"./assets/Icons/PNG/Profile.png\"/>\r\n                    <img class=\"pic ml-2\" *ngIf=\"pic!=null && pic!=''\" src=\"http://oneroom3.crosip.com/{{pic}}\"/>\r\n                </a>\r\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\" *ngIf=\"user != null\">\r\n                  <a class=\"dropdown-item\" href=\"#/hostportal/offerlist\"> {{'trans.Dashboard' | translate}}</a>\r\n                  <a class=\"dropdown-item\" href=\"javascript:void(0)\">{{'trans.Help_center' | translate}}</a>\r\n                  <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"logout()\">{{'trans.Logout' | translate}}</a>\r\n                </div>\r\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\" *ngIf=\"user == null\">\r\n                  <a class=\"dropdown-item\" >\r\n                    <div class=\"togglebutton\"><label><input type=\"checkbox\"  (change)=\"visitGuest()\" id=\"statusVal\" >\r\n                    <span class=\"toggle\"></span>Guest</label>\r\n                    </div>\r\n                  </a>\r\n                  <a class=\"dropdown-item\" href=\"javascript:void(0)\" data-toggle=\"modal\"\r\n                    data-target=\".bd-example-modal-lg1\">  {{'trans.Sign_In' | translate}}</a>\r\n                  <a class=\"dropdown-item\" href=\"javascript:void(0)\" data-toggle=\"modal\" data-target=\".signupModal\">{{'trans.Logout' | translate}}\r\n                    </a>\r\n                  <a class=\"dropdown-item\" href=\"javascript:void(0)\"> {{'trans.Help_center' | translate}}</a>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"modal bd-example-modal-lg signupModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <form [formGroup]=\"registerForm\" #registerNgForm=\"ngForm\">\r\n      <div class=\"modal-content\" style=\"border-radius: 25px;\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\" *ngIf=\"step==0\">\r\n            <div class=\"modal-body\">\r\n              <img src=\"../assets/Icons/PNG/Logo_Icon.png\">\r\n              <h3><b> {{'trans.Sign_Up' | translate}}</b></h3>\r\n              <div *ngIf=\"showAlert\" style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n                class=\"alert alert-error\">{{ errorMessage }}</div>\r\n              <div class=\"form-group\">\r\n                <label> {{'trans.Email' | translate}}</label>\r\n                <input type=\"email\" class=\"form-control\" [formControlName]=\"'email'\" placeholder=\"Email\" required />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label> {{'trans.Password' | translate}}</label>\r\n                <input type=\"{{passtext1}}\" class=\"form-control p-4\" [formControlName]=\"'password'\"\r\n                  placeholder=\"Password\" required />\r\n                <span toggle=\"#password-field\" class=\" field-icon toggle-password\"><a href=\"javascript:void(0);\"\r\n                    class=\"text-dark\"> <u (click)=\"show1()\" id=\"pshide1\">Show</u></a> </span>\r\n              </div>\r\n              <p> {{'trans.We_ll_send_you_a_confirmation_email' | translate}}</p>\r\n              <button class=\"btn btn-danger btn-block\" (click)=\"sendOTP()\">{{'trans.Continue' | translate}}</button>\r\n              <div class=\"d-inline-flex  w-100\">\r\n                <div style=\"display: flex; flex: 1;\">\r\n                  <hr style=\"width: 95%;\">\r\n                </div>\r\n                <div class=\"mt-2\"> {{'trans.OR' | translate}}</div>\r\n                <div style=\"display: flex; flex: 1;\">\r\n                  <hr style=\"width: 95%;\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-12\">\r\n                <button class=\"btn btn-outlook-danger text-dark px-3 py-2\" (click)=\"loginWithApple()\"><img width=\"12\" class=\"mr-1\"\r\n                    src=\"../assets/Icons/PNG/Apple.png\" /> Apple</button>\r\n                <button class=\"btn btn-outlook-danger text-dark  px-3 py-2\" (click)=\"loginWithFacebook()\"><img width=\"9\"\r\n                    class=\"mr-1\" src=\"../assets/Icons/PNG/Facebook.png\" />Facebook</button>\r\n                <button class=\"btn btn-outlook-danger text-dark  px-3 py-2\" (click)=\"signInWithGoogle()\"><img width=\"12\"\r\n                    class=\"mr-1\" src=\"../assets/Icons/PNG/Brand color_Google.png\" />Google</button>\r\n                <p class=\"mt-3\">{{'trans.Already_have_an_account_Sign_In' | translate}} <a (click)=\"signinModal()\" href=\"javascript:void(0)\" class=\"text-dark\"><u>{{'trans.Sign_In' | translate}} </u></a>\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\" *ngIf=\"step==1\">\r\n            <div class=\"modal-body pr-1\">\r\n              <h3> <a href=\"javascript:void(0)\" class=\"text-dark\" (click)=\"step=0\"><i\r\n                    class=\"fa fa-arrow-left mr-2\"></i></a><b>{{'trans.Finishing_signing_up' | translate}} </b></h3>\r\n              <div *ngIf=\"showAlert\" style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n                class=\"alert alert-error\">{{ errorMessage }}</div>\r\n              <div class=\"divscroll pr-3\" style=\"overflow: auto;max-height: 430px;overflow-x: hidden;\">\r\n                <div class=\"form-group\">\r\n                  <label>{{'trans.First_Name' | translate}}</label>\r\n                  <input type=\"text\" class=\"form-control\" [formControlName]=\"'lname'\" placeholder=\"Surname\" required pattern=\"^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$\" title=\"Invalid Last Name\"/>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>{{'trans.Last_Name' | translate}}</label>\r\n                  <input type=\"text\" class=\"form-control\" [formControlName]=\"'fname'\" placeholder=\"First Name\"\r\n                    required pattern=\"^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$\" title=\"Invalid First Name\"/>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>{{'trans.Telephone_number' | translate}} </label>\r\n                  <!-- <input type=\"text\" class=\"form-control\"  placeholder=\"Telephone Number\"/> -->\r\n                  <ngx-intl-tel-input [cssClass]=\"'custom'\"\r\n                    [preferredCountries]=\"[CountryISO.UnitedStates, CountryISO.UnitedKingdom]\"\r\n                    [enableAutoCountrySelect]=\"true\" [enablePlaceholder]=\"true\" [searchCountryFlag]=\"true\"\r\n                    [searchCountryField]=\"[SearchCountryField.Iso2, SearchCountryField.Name]\"\r\n                    [selectedCountryISO]=\"CountryISO.UnitedKingdom\" [phoneValidation]=\"true\" name=\"phone\"\r\n                    [formControlName]=\"'contact_no'\">\r\n                  </ngx-intl-tel-input>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>{{'trans.Address' | translate}}</label>\r\n                  <input type=\"text\" class=\"form-control\" [formControlName]=\"'address'\" placeholder=\"Address\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>{{'trans.VAT_Number' | translate}} </label>\r\n                  <input type=\"text\" class=\"form-control\" [formControlName]=\"'vat_no'\" placeholder=\"Vat Number\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>{{'trans.Website' | translate}}</label>\r\n                  <input type=\"link\" class=\"form-control\" [formControlName]=\"'website'\" placeholder=\"Website\" pattern=\"^(http(s)?:\\/\\/)+[\\w\\-\\._~:\\/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$\" title=\"Invalid URL\"/>\r\n                </div>\r\n                <p>{{'trans.We_ll_send_you_a_confirmation_email' | translate}}</p>\r\n                <button type=\"submit\" class=\"btn btn-danger btn-block\" (click)=\"registerValidation()\">{{'trans.Continue' | translate}}</button>\r\n              </div>\r\n              <div class=\"d-inline-flex  w-100\" *ngIf=\"step==0\">\r\n                <div style=\"display: flex; flex: 1;\">\r\n                  <hr style=\"width: 95%;\">\r\n                </div>\r\n                <div class=\"mt-2\">{{'trans.OR' | translate}}</div>\r\n                <div style=\"display: flex; flex: 1;\">\r\n                  <hr style=\"width: 95%;\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-12\" *ngIf=\"step==0\">\r\n                <button class=\"btn btn-outlook-danger text-dark px-3 py-2\" (click)=\"loginWithApple()\"><img width=\"12\" class=\"mr-1\"\r\n                    src=\"../assets/Icons/PNG/Apple.png\" /> Apple</button>\r\n                <button class=\"btn btn-outlook-danger text-dark  px-3 py-2\" (click)=\"loginWithFacebook()\"><img width=\"9\"\r\n                    class=\"mr-1\" src=\"../assets/Icons/PNG/Facebook.png\" />Facebook</button>\r\n                <button class=\"btn btn-outlook-danger text-dark  px-3 py-2\" (click)=\"signInWithGoogle()\"><img width=\"12\"\r\n                    class=\"mr-1\" src=\"../assets/Icons/PNG/Brand color_Google.png\" />Google</button>\r\n                <p class=\"mt-3\">{{'trans.Already_have_an_account_Sign_In' | translate}} <a (click)=\"signinModal()\" href=\"javascript:void(0)\" class=\"text-dark\"><u>{{'trans.Sign_In' | translate}}</u></a>\r\n                </p>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"col-md-6\" *ngIf=\"step==2\">\r\n            <div class=\"modal-body\">\r\n              <img src=\"../assets/Icons/PNG/Logo_Icon.png\">\r\n              <h3><b>Verify OTP</b></h3>\r\n              <div *ngIf=\"showAlert\" style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n                class=\"alert alert-error\">{{ errorMessage }}</div>\r\n              <div class=\"form-group\">\r\n                <label>OTP</label>\r\n                <input type=\"number\" class=\"form-control\" id=\"otp\" placeholder=\"OTP Code\" />\r\n              </div>\r\n              <button class=\"btn btn-danger btn-block\" (click)=\"register()\">Verify OTP</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\" *ngIf=\"step==3\">\r\n            <div class=\"modal-body\">\r\n              <img src=\"../assets/Icons/PNG/Logo_Icon.png\">\r\n              <h3><b> {{'trans.Beginners' | translate}}</b></h3>\r\n              <div class=\"row divscroll\" style=\" overflow: auto; overflow-x: hidden;\">\r\n                <div class=\"col-md-12\" (click)=\"plan('Beginner')\">\r\n                  <div class=\"card mt-0 mb-2\" style=\"border-radius: 20px; background-color: #dfe4ea;\">\r\n                    <div class=\"card-body\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-6 text-left\">\r\n                          <h4 class=\"my-0 pt-0 text-black\">{{'trans.Beginners' | translate}}</h4>\r\n                        </div>\r\n                        <div class=\"col-6 text-right\">\r\n                          <h4 class=\"my-0 pt-0 text-danger\">$0</h4>\r\n                        </div>\r\n                        <div class=\"col-6 text-left\">\r\n                          <p class=\"mb-0\">5 {{'trans.Offers_per_month' | translate}}</p>\r\n                        </div>\r\n                        <div class=\"col-6 text-right\">\r\n                          <p class=\"mb-0\">Free</p>\r\n                        </div>\r\n                        <div class=\"col-md-1\" style=\"align-self: center;\">\r\n                          <i class=\"fa fa-chevron-right fa-2x\" aria-hidden=\"true\"></i>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-12 text-center\">\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 d-none d-md-block d-lg-block d-xl-block\"\r\n            style=\"border-bottom-right-radius: 25px; border-top-right-radius: 25px; background-image: url('../assets/Images/Signin and signup_Illustration.png');background-size: cover; background-position: top center;\">\r\n            <div class=\"col-12 text-right mt-2\">\r\n              <a class=\"btn-rounded-circle\" href=\"javascript:void(0);\" data-dismiss=\"modal\" aria-label=\"Close\"\r\n                style=\"background: white; padding: 5px;border-radius: 50%; margin-right: -20px\"><img\r\n                  src=\"../assets/Icons/PNG/Close.png\" /></a>\r\n            </div>\r\n            <div class=\"col-12 \" style=\"margin-top: 15vh;\">\r\n              <h3 class=\"mt-4\"><b> {{'trans.Welcome_to_One_Rooms' | translate}}\r\n                </b></h3>\r\n              <p>In publishing and graphic design, Lorem ipsum is a\r\n                placeholder text commonly used to demonstrate\r\n                the visual form of a document</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal bd-example-modal-lg1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <form [formGroup]=\"loginForm\" #loginNgForm=\"ngForm\">\r\n      <div class=\"modal-content\" style=\"border-radius: 25px;\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\" *ngIf=\"step1==0\">\r\n            <div class=\"modal-body\">\r\n              <img src=\"../assets/Icons/PNG/Logo_Icon.png\">\r\n              <h3><b> {{'trans.Sign_In' | translate}}</b></h3>\r\n              <div *ngIf=\"showAlert\" style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n                class=\"alert alert-error\">{{ errorMessage }}</div>\r\n              <div class=\"form-group\">\r\n                <label> {{'trans.Email' | translate}}</label>\r\n                <input type=\"text\" class=\"form-control\" [formControlName]=\"'email'\" placeholder=\"Email\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <label> {{'trans.Password' | translate}}</label>\r\n                  </div>\r\n                  <div class=\"col-md-6 text-right\">\r\n                    <p><a (click)=\"forgotPasswordModal()\"><u> {{'trans.Forgot_password' | translate}}</u></a></p>\r\n                  </div>\r\n                </div>\r\n                <input type=\"{{passtext}}\" class=\"form-control p-4\" [formControlName]=\"'password'\"\r\n                  placeholder=\"Password\" />\r\n                <span toggle=\"#password-field\" class=\" field-icon toggle-password\"><a href=\"javascript:void(0);\"\r\n                    class=\"text-dark\"> <u (click)=\"show()\" id=\"pshide\">Show</u></a> </span>\r\n              </div>\r\n              <p hidden> {{'trans.We_ll_send_you_a_confirmation_email' | translate}}</p>\r\n              <button class=\"btn btn-danger btn-block\" (click)=\"login()\">Continue</button>\r\n              <div class=\"d-inline-flex  w-100\">\r\n                <div style=\"display: flex; flex: 1;\">\r\n                  <hr style=\"width: 95%;\">\r\n                </div>\r\n                <div class=\"mt-2\"> {{'trans.OR' | translate}}</div>\r\n                <div style=\"display: flex; flex: 1;\">\r\n                  <hr style=\"width: 95%;\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-12\">\r\n                <button class=\"btn btn-outlook-danger text-dark px-3 py-2\" (click)=\"loginWithApple()\"><img width=\"12\" class=\"mr-1\"\r\n                    src=\"../assets/Icons/PNG/Apple.png\" /> Apple</button>\r\n                <button class=\"btn btn-outlook-danger text-dark  px-3 py-2\" (click)=\"loginWithFacebook()\"><img width=\"9\"\r\n                    class=\"mr-1\" src=\"../assets/Icons/PNG/Facebook.png\" />Facebook</button>\r\n                <button class=\"btn btn-outlook-danger text-dark  px-3 py-2\" (click)=\"signInWithGoogle()\"><img width=\"12\"\r\n                    class=\"mr-1\" src=\"../assets/Icons/PNG/Brand color_Google.png\" />Google</button>\r\n                <p class=\"mt-3\"> {{'trans.Do_not_have_an_account_Sign_Up' | translate}} <a (click)=\"signupModal()\" href=\"javascript:void(0)\" class=\"text-dark\"><u> {{'trans.Sign_Up' | translate}}</u></a>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"col-md-6\" *ngIf=\"step1==1\">\r\n            <div class=\"modal-body\">\r\n              <img src=\"../assets/Icons/PNG/Logo_Icon.png\">\r\n              <h3><b>Select Plan</b></h3>\r\n              <div class=\"row divscroll\" style=\" overflow: auto; overflow-x: hidden;\">\r\n                <div class=\"col-md-12\" (click)=\"plan('Beginner')\">\r\n                  <div class=\"card mt-0 mb-2\" style=\"border-radius: 20px; background-color: #dfe4ea;\">\r\n                    <div class=\"card-body\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-6 text-left\">\r\n                          <h4 class=\"my-0 pt-0 text-black\">{{'trans.Beginners' | translate}}</h4>\r\n                        </div>\r\n                        <div class=\"col-6 text-right\">\r\n                          <h4 class=\"my-0 pt-0 text-danger\">$0</h4>\r\n                        </div>\r\n                        <div class=\"col-6 text-left\">\r\n                          <p class=\"mb-0\">5  {{'trans.Offers_per_month' | translate}}</p>\r\n                        </div>\r\n                        <div class=\"col-6 text-right\">\r\n                          <p class=\"mb-0\">Free</p>\r\n                        </div>\r\n                        <div class=\"col-md-1\" style=\"align-self: center;\">\r\n                          <i class=\"fa fa-chevron-right fa-2x\" aria-hidden=\"true\"></i>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-12 text-center\">\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-6 d-none d-md-block d-lg-block d-xl-block\"\r\n            style=\"border-bottom-right-radius: 25px; border-top-right-radius: 25px; background-image: url('../assets/Images/Signin and signup_Illustration.png');background-size: cover; background-position: top center;\">\r\n            <div class=\"col-12 text-right mt-2\">\r\n              <a class=\"btn-rounded-circle\" href=\"javascript:void(0);\" data-dismiss=\"modal\" aria-label=\"Close\"\r\n                style=\"background: white; padding: 5px;border-radius: 50%; margin-right: -20px\"><img\r\n                  src=\"../assets/Icons/PNG/Close.png\" /></a>\r\n            </div>\r\n            <div class=\"col-12 \" style=\"margin-top: 15vh;\">\r\n              <h3 class=\"mt-4\"><b>{{'trans.Welcome_to_One_Rooms' | translate}}\r\n                </b></h3>\r\n              <p>In publishing and graphic design, Lorem ipsum is a\r\n                placeholder text commonly used to demonstrate\r\n                the visual form of a document</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade bd-example-modal-lg\" id=\"forgot-password\" tabindex=\"-1\" role=\"dialog\"\r\n  aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title text-left\" id=\"exampleModalLabel\"> {{'trans.Forgot_Password' | translate}}</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <form [formGroup]=\"verifyEmailForm\" #verifyEmailNgForm=\"ngForm\" id=\"vEmail\">\r\n        <div class=\"modal-body\">\r\n          <hr>\r\n          <div *ngIf=\"showAlert\" style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n            class=\"alert alert-error\">{{ errorMessage }}</div>\r\n          <div class=\"form-group\">\r\n            <label> {{'trans.Email' | translate}}</label>\r\n            <input type=\"email\" class=\"form-control\" [formControlName]=\"'email'\" required>\r\n          </div>\r\n          <hr>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"verifyEmail()\"> {{'trans.Submit' | translate}}</button>\r\n          &nbsp; &nbsp;\r\n          <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\" style=\"color: black;\">Close</button>\r\n        </div>\r\n      </form>\r\n      <form [formGroup]=\"verifyForgotPasswordOtpForm\" #verifyForgotPasswordOtpNgForm=\"ngForm\" id=\"vForgotPasswordOtp\"\r\n        hidden>\r\n        <div class=\"modal-body\">\r\n          <hr>\r\n          <div *ngIf=\"showAlert\" style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n            class=\"alert alert-error\">{{ errorMessage }}</div>\r\n          <div class=\"form-group\">\r\n            <label>OTP</label>\r\n            <input type=\"number\" class=\"form-control\" [formControlName]=\"'otp'\" required>\r\n          </div>\r\n          <hr>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"verifyForgoPasswordOtp()\"> {{'trans.Submit' | translate}}</button>\r\n          &nbsp; &nbsp;\r\n          <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\" style=\"color: black;\">Close</button>\r\n        </div>\r\n      </form>\r\n      <form [formGroup]=\"updatePasswordForm\" #updatePasswordNgForm=\"ngForm\" id=\"uPassword\" hidden>\r\n        <div class=\"modal-body\">\r\n          <hr>\r\n          <div *ngIf=\"showAlert\" style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n            class=\"alert alert-error\">{{ errorMessage }}</div>\r\n          <div class=\"form-group\">\r\n            <label> {{'trans.Password' | translate}}</label>\r\n            <input type=\"password\" class=\"form-control\" [formControlName]=\"'password'\" required>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label> {{'trans.Confirm_Password' | translate}}</label>\r\n            <input type=\"password\" class=\"form-control\" [formControlName]=\"'confirm_password'\" required>\r\n          </div>\r\n          <hr>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"updatePasswordOtp()\">{{'trans.Submit' | translate}}</button>\r\n          &nbsp; &nbsp;\r\n          <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\" style=\"color: black;\">Close</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade bd-example-modal-lg try-offers1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-md\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header mb-0 pb-0\" style=\"padding-top: 20px !important\">\r\n        <a class=\"btn-rounded-circle close\" href=\"javascript:void(0);\" data-dismiss=\"modal\" aria-label=\"Close\"\r\n          style=\"background: #e6e6e6; padding: 5px;border-radius: 50%;\"><img src=\"../assets/Icons/PNG/Close.png\" /></a>\r\n      </div>\r\n      <div class=\"modal-body mt-0 mb-0\" style=\"color: #203a60; padding-top: 20px !important;\">\r\n        <h2 class=\"mt-0 pt-0 text-center\"><b>{{'trans.Insight' | translate}}</b></h2>\r\n        <h6 class=\"mt-0 pt-0 text-center\"><b>{{'trans.Account_type' | translate}}</b></h6>\r\n        <p class=\"mt-0 pt-0 text-center\" style=\"margin-right: 5.5rem; margin-left: 5.5rem;\">In publishing and graphic\r\n          design, Lorem Ipsum is a placeholder text commonly used to demonstrate the visual.</p>\r\n        <h5 class=\"mt-1 pt-0 text-center\"><b>{{'trans.choose_a_plan' | translate}}</b></h5>\r\n        <div class=\"row divscroll\" style=\" overflow: auto; overflow-x: hidden;\" *ngIf=\"plans\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"card mt-0 mb-2\" style=\"border-radius: 20px; background-color: #dfe4ea;\"\r\n              (click)=\"defaultPlan('Beginner')\">\r\n              <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-11\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-6 text-left\">\r\n                        <h4 class=\"my-0 pt-0 text-black\">{{'trans.Beginners' | translate}}</h4>\r\n                      </div>\r\n                      <div class=\"col-6 text-right\">\r\n                        <h4 class=\"my-0 pt-0 text-danger\">$0</h4>\r\n                      </div>\r\n                      <div class=\"col-6 text-left\">\r\n                        <p class=\"mb-0\">5 {{'trans.Offers_per_month' | translate}}</p>\r\n                      </div>\r\n                      <div class=\"col-6 text-right\">\r\n                        <p class=\"mb-0\">Free</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-1\" style=\"align-self: center;\">\r\n                    <i class=\"fa fa-chevron-right fa-2x\" aria-hidden=\"true\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12\" *ngFor=\"let plan of plans\">\r\n            <div class=\"card mt-0 mb-2\" style=\"border-radius: 20px; background-color: #dfe4ea;\"\r\n              (click)=\"buyPlan(plan.id, plan.name, plan.price)\">\r\n              <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-11\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-6 text-left\">\r\n                        <h4 class=\"my-0 pt-0 text-black\">{{ plan.name }}</h4>\r\n                      </div>\r\n                      <div class=\"col-6 text-right\">\r\n                        <h4 class=\"my-0 pt-0 text-danger\">${{ plan.price }}</h4>\r\n                      </div>\r\n                      <div class=\"col-6 text-left\">\r\n                        <p class=\"mb-0\">{{ plan.description }}</p>\r\n                      </div>\r\n                      <div class=\"col-6 text-right\">\r\n                        <p class=\"mb-0\">{{ plan.interval }}</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-1\" style=\"align-self: center;\">\r\n                    <i class=\"fa fa-chevron-right fa-2x\" aria-hidden=\"true\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <div class=\"card mt-0 mb-2\" style=\"border-radius: 20px; background-color: #dfe4ea;\">\r\n              <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6 text-left\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-12 text-left\">\r\n                        <h4 class=\"my-0 pt-0 text-black\">{{'trans.Enterprise' | translate}}</h4>\r\n                      </div>\r\n                      <div class=\"col-12 text-left\">\r\n                        <p class=\"mb-0\">{{'trans.Contact_with_us' | translate}}</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6 text-right\" style=\"align-self: center;\">\r\n                    <button class=\"btn btn-danger btn-lg btn-block\" style=\"border-radius: 15px;\">{{'trans.Let_Chat' | translate}}</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 text-center\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade bd-example-modal-lg\" id=\"hostplan\" tabindex=\"-1\" role=\"dialog\"\r\n  aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title text-left\" id=\"exampleModalLabel\">Payment</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <form [formGroup]=\"planForm\" #planNgForm=\"ngForm\">\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-2 text-right\">\r\n              <input type=\"radio\" id=\"stripe\" name=\"payment_method\" value=\"Stripe\" (click)=\"showPaymentSection()\">\r\n            </div>\r\n            <div class=\"col-md-4 text-left\">\r\n              <label for=\"stripe\">Stripe</label>\r\n            </div>\r\n            <div class=\"col-md-2 text-right\">\r\n              <input type=\"radio\" id=\"paypal\" name=\"payment_method\" value=\"PayPal\" (click)=\"showPaymentSection()\">\r\n            </div>\r\n            <div class=\"col-md-4 text-left\">\r\n              <label for=\"paypal\">PayPal</label>\r\n            </div>\r\n          </div>\r\n          <hr>\r\n          <div *ngIf=\"showAlert\" style=\"background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442\"\r\n            class=\"alert alert-error\">{{ errorMessage }}</div>\r\n          <div class=\"row\" id=\"stripeSection\" hidden>\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group\">\r\n                <label>Card Number</label>\r\n                <input type=\"number\" class=\"form-control\" [formControlName]=\"'number'\" required max=\"16\" min=\"16\"\r\n                  placeholder=\"Card Number\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Expiry Month</label>\r\n                <input type=\"number\" class=\"form-control\" [formControlName]=\"'month'\" required max=\"2\" min=\"2\"\r\n                  placeholder=\"MM\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Expiry Year</label>\r\n                <input type=\"number\" class=\"form-control\" [formControlName]=\"'year'\" required max=\"4\" min=\"4\"\r\n                  placeholder=\"YYYY\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>CVC</label>\r\n                <input type=\"number\" class=\"form-control\" [formControlName]=\"'cvc'\" required max=\"3\" min=\"3\"\r\n                  placeholder=\"CVC\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" id=\"paypalSection\" hidden>\r\n            <div class=\"col-md-12 text-center\" id=\"clickPayPal\" hidden>\r\n              <h5>Click on <a href=\"\" id=\"paypalLink\" target=\"_blank\">PayPal</a></h5>\r\n            </div>\r\n          </div>\r\n          <hr>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-danger\" id=\"submitPlan\" (click)=\"subscribePlan()\" hidden> {{'trans.Submit' | translate}}</button>\r\n          &nbsp; &nbsp;\r\n          <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\" style=\"color: black;\">Close</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>";

/***/ }),

/***/ 87054:
/*!**********************************************************************!*\
  !*** ./src/app/Admin/md/md-chart/md-chart.component.html?ngResource ***!
  \**********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<div class=\"card\">\r\n  <div class=\"header\">\r\n    <h4 class=\"title\">{{ title }}</h4>\r\n    <p class=\"category\">{{ subtitle }}</p>\r\n  </div>\r\n  <div class=\"content\">\r\n    <div [attr.id]=\"chartId\" class=\"ct-chart {{ chartClass }}\"></div>\r\n\r\n    <div class=\"footer\">\r\n      <div class=\"legend\">\r\n        <span *ngFor=\"let item of legendItems\">\r\n          <i [ngClass]=\"item.imageClass\"></i> {{ item.title }}\r\n        </span>\r\n      </div>\r\n      <hr *ngIf=\"withHr\">\r\n      <div class=\"stats\">\r\n        <i [ngClass]=\"footerIconClass\"></i> {{ footerText }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 26195:
/*!**********************************************************************!*\
  !*** ./src/app/Admin/md/md-table/md-table.component.html?ngResource ***!
  \**********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\r\n  <div class=\"content table-responsive\">\r\n    <table class=\"table\">\r\n      <tbody>\r\n          <tr *ngFor=\"let row of data.dataRows\">\r\n            <!-- <td *ngFor=\"let cell of row\">{{ cell }}</td> -->\r\n            <td>\r\n                <div class=\"flag\">\r\n                    <img src=\"./assets/img/flags/{{row[0]}}.png\" alt=\"\">\r\n                </div>\r\n            </td>\r\n            <td>\r\n                {{row[1]}}\r\n            </td>\r\n            <td class=\"text-right\">\r\n                {{row[2]}}\r\n            </td>\r\n            <td class=\"text-right\">\r\n                {{row[3]}}\r\n            </td>\r\n          </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n  </div>\r\n";

/***/ }),

/***/ 22655:
/*!**********************************************************************!*\
  !*** ./src/app/Admin/shared/navbar/navbar.component.html?ngResource ***!
  \**********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<nav #navbar class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-wrapper\">\r\n      <div class=\"navbar-minimize\">\r\n        <button mat-raised-button (click)=\"minimizeSidebar()\" class=\"btn btn-just-icon btn-white btn-fab btn-round\">\r\n          <i class=\"material-icons text_align-center visible-on-sidebar-regular\">more_vert</i>\r\n          <i class=\"material-icons design_bullet-list-67 visible-on-sidebar-mini\">view_list</i>\r\n        </button>\r\n      </div>\r\n      <a class=\"navbar-brand\" href=\"{{getPath()}}\"> {{getTitle()}}</a>\r\n    </div>\r\n    <button mat-button class=\"navbar-toggler btn-no-ripple\" type=\"button\" (click)=\"sidebarToggle()\">\r\n      <span class=\"sr-only\">Toggle navigation</span>\r\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\r\n      <!-- <form class=\"navbar-form\">\r\n        <div class=\"input-group no-border\">\r\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\r\n          <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n            <i class=\"material-icons\">search</i>\r\n            <div class=\"ripple-container\"></div>\r\n          </button>\r\n        </div>\r\n      </form>\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#pablo\">\r\n            <i class=\"material-icons\">dashboard</i>\r\n            <p>\r\n              <span class=\"d-lg-none d-md-block\">Stats</span>\r\n            </p>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link\" href=\"#pablo\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            <i class=\"material-icons\">notifications</i>\r\n            <span class=\"notification\">5</span>\r\n            <p>\r\n              <span class=\"d-lg-none d-md-block\">Some Actions</span>\r\n            </p>\r\n          </a>\r\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n            <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\r\n            <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\r\n            <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Another One</a>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#pablo\">\r\n            <i class=\"material-icons\">person</i>\r\n            <p>\r\n              <span class=\"d-lg-none d-md-block\">Account</span>\r\n            </p>\r\n          </a>\r\n        </li>\r\n      </ul> -->\r\n    </div>\r\n  </div>\r\n</nav>\r\n";

/***/ }),

/***/ 49590:
/*!*****************************************************************!*\
  !*** ./src/app/Admin/sidebar/sidebar.component.html?ngResource ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\r\n<style>\r\n  a {\r\n    color: #506482 !important;\r\n  }\r\n \r\n  .sidebar .nav i {\r\n    color: #506482 !important;\r\n}\r\n\r\n</style>\r\n        <div class=\"logo\">\r\n          <img src=\"./assets/Icons/SVG/logo.svg\" class=\"w-100 px-2\" />\r\n          <!-- <a class=\"simple-text logo-mini\">\r\n            <div class=\"logo-img\">\r\n                <img src=\"/assets/img/angular2-logo-white.png\"/>\r\n            </div>\r\n          </a>\r\n            <a href=\"https://www.creative-tim.com\" class=\"simple-text logo-normal\">\r\n              Creative Tim\r\n            </a> -->\r\n        </div>\r\n\r\n\r\n        <div class=\"sidebar-wrapper\">\r\n\r\n            <div class=\"user\">\r\n                <div class=\"photo\">\r\n                    <img src=\"./assets/Icons/PNG/Profile.png\" />\r\n                </div>\r\n                <div class=\"user-info\">\r\n                    <a data-toggle=\"collapse\" href=\"#collapseExample\" class=\"collapsed\">\r\n                        <span>\r\n                            Admin\r\n                            <b class=\"caret\"></b>\r\n                        </span>\r\n                    </a>\r\n                    <div class=\"collapse\" id=\"collapseExample\">\r\n                        <ul class=\"nav\">\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"#/admin/profile\" class=\"nav-link\">\r\n                                    <span class=\"sidebar-mini\">MP</span>\r\n                                    <span class=\"sidebar-normal\">My Profile</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"#/pages/login\" class=\"nav-link\">\r\n                                    <span class=\"sidebar-mini\">L O</span>\r\n                                    <span class=\"sidebar-normal\">Log out</span>\r\n                                </a>\r\n                            </li>\r\n                           \r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"isMobileMenu()\">\r\n              <form class=\"navbar-form\">\r\n                <span class=\"bmd-form-group\"><div class=\"input-group no-border\">\r\n                  <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\r\n                  <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                    <i class=\"material-icons\">search</i>\r\n                    <div class=\"ripple-container\"></div>\r\n                  </button>\r\n                </div></span>\r\n              </form>\r\n              <ul class=\"nav navbar-nav nav-mobile-menu\">\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" href=\"#pablo\">\r\n                    <i class=\"material-icons\">dashboard</i>\r\n                    <p>\r\n                      <span class=\"d-lg-none d-md-block\">Stats</span>\r\n                    </p>\r\n                  </a>\r\n                </li>\r\n                <li class=\"nav-item dropdown\">\r\n                  <a class=\"nav-link\" href=\"#pablo\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"material-icons\">notifications</i>\r\n                    <span class=\"notification\">5</span>\r\n                    <p>\r\n                      <span class=\"d-lg-none d-md-block\">Some Actions</span>\r\n                    </p>\r\n                  </a>\r\n                  <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                    <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Another One</a>\r\n                  </div>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" href=\"#pablo\">\r\n                    <i class=\"material-icons\">person</i>\r\n                    <p>\r\n                      <span class=\"d-lg-none d-md-block\">Account</span>\r\n                    </p>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <ul class=\"nav\">\r\n                <li routerLinkActive=\"active\" *ngFor=\"let menuitem of menuItems\" class=\"nav-item\">\r\n                    <!--If is a single link-->\r\n                    <a [routerLink]=\"[menuitem.path]\" *ngIf=\"menuitem.type === 'link'\" class=\"nav-link\">\r\n                       <!-- <i class=\"material-icons\">{{menuitem.icontype}}</i> -->\r\n                       <i class=\"material-icons\" style=\"line-height: normal;\"><img src=\"{{menuitem.icontype}}\"/></i> \r\n                        <p>{{menuitem.title}}</p>\r\n                    </a>\r\n                    <!--If it have a submenu-->\r\n                    <a data-toggle=\"collapse\" href=\"#{{menuitem.collapse}}\" *ngIf=\"menuitem.type === 'sub'\" (click)=\"updatePS()\" class=\"nav-link\">\r\n                        <!-- <i class=\"material-icons\">{{menuitem.icontype}}</i> -->\r\n                        <i class=\"material-icons\" style=\"line-height: normal;\"><img src=\"{{menuitem.icontype}}\"/></i> \r\n                        <p>{{menuitem.title}}<b class=\"caret\"></b></p>\r\n                    </a>\r\n\r\n                    <!--Display the submenu items-->\r\n                    <div id=\"{{menuitem.collapse}}\" class=\"collapse\" *ngIf=\"menuitem.type === 'sub'\">\r\n                        <ul class=\"nav\">\r\n                            <li routerLinkActive=\"active\" *ngFor=\"let childitem of menuitem.children\" class=\"nav-item\">\r\n                                <a [routerLink]=\"[menuitem.path, childitem.path]\" class=\"nav-link\">\r\n                                    <span class=\"sidebar-mini\">{{childitem.ab}}</span>\r\n                                    <span class=\"sidebar-normal\">{{childitem.title}}</span>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </li>\r\n              \r\n            </ul>\r\n\r\n        </div>\r\n";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ (function(module) {

"use strict";
module.exports = "\r\n<router-outlet></router-outlet>\r\n";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map