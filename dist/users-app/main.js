(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./lazy/lazy.module": [
		"./src/app/lazy/lazy.module.ts",
		"lazy-lazy-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-md-10 col-sm-10 col-xs10\">\n        <app-header></app-header>\n    </div>\n    <div class=\"col-md-2 col-sm-2 col-xs2\" *ngIf=\"authService.isAuthenticated()\">\n      <button class=\"btn btn-sm btn-block btn-danger\">\n        Logout\n      </button>\n    </div>\n  </div>\n  <br>\n\n  <h2 class=\"text-center text-primary\">My Awesome App</h2>\n  <hr>\n  <router-outlet></router-outlet>\n</div>\n\n<!-- <app-login></app-login>\n<app-register></app-register> -->\n\n<!-- <app-pipe-demo></app-pipe-demo> -->\n\n<!-- <hr> -->\n\n<!-- <div *ngIf=\"authService.isAuthenticated()\">\n  <app-users [title] = \"title\"></app-users>\n</div>\n -->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'users-app';
    }
    AppComponent.prototype.ngOnInit = function () {
        firebase__WEBPACK_IMPORTED_MODULE_2__["initializeApp"]({
            apiKey: "AIzaSyCnd3B0r4p_NjKsayEJApiENQGA6-QsTAs",
            authDomain: "everi-app-demo.firebaseapp.com"
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_employee_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee/employee.module */ "./src/app/employee/employee.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _users_user_img_user_img_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users/user-img/user-img.component */ "./src/app/users/user-img/user-img.component.ts");
/* harmony import */ var _users_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./users/user-info/user-info.component */ "./src/app/users/user-info/user-info.component.ts");
/* harmony import */ var _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/highlight.directive */ "./src/app/directives/highlight.directive.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _pipes_pipe_demo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/pipe-demo.component */ "./src/app/pipes/pipe-demo.component.ts");
/* harmony import */ var _pipes_country_code_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/country-code.pipe */ "./src/app/pipes/country-code.pipe.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _services_login_gaurd_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/login-gaurd.service */ "./src/app/services/login-gaurd.service.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _product_overview_overview_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./product/overview/overview.component */ "./src/app/product/overview/overview.component.ts");
/* harmony import */ var _product_specification_specification_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./product/specification/specification.component */ "./src/app/product/specification/specification.component.ts");

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_8__["UsersComponent"],
                _users_user_img_user_img_component__WEBPACK_IMPORTED_MODULE_9__["UserImgComponent"],
                _users_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_10__["UserInfoComponent"],
                _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_11__["HighlightDirective"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _auth_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
                _pipes_pipe_demo_component__WEBPACK_IMPORTED_MODULE_14__["PipeDemoComponent"],
                _pipes_country_code_pipe__WEBPACK_IMPORTED_MODULE_15__["CountryCodePipe"],
                _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_16__["FilterPipe"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_22__["ProductComponent"],
                _product_overview_overview_component__WEBPACK_IMPORTED_MODULE_23__["OverviewComponent"],
                _product_specification_specification_component__WEBPACK_IMPORTED_MODULE_24__["SpecificationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_19__["APP_ROUTES"]), _employee_employee_module__WEBPACK_IMPORTED_MODULE_6__["EmployeeModule"]
            ],
            providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_17__["DataService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"], _services_login_gaurd_service__WEBPACK_IMPORTED_MODULE_21__["LoginGuardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

// ng generate module <Module>


/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTES", function() { return APP_ROUTES; });
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _pipes_pipe_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes/pipe-demo.component */ "./src/app/pipes/pipe-demo.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _services_login_gaurd_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/login-gaurd.service */ "./src/app/services/login-gaurd.service.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _product_overview_overview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product/overview/overview.component */ "./src/app/product/overview/overview.component.ts");
/* harmony import */ var _product_specification_specification_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product/specification/specification.component */ "./src/app/product/specification/specification.component.ts");
/* harmony import */ var _employee_new_employee_new_employee_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./employee/new-employee/new-employee.component */ "./src/app/employee/new-employee/new-employee.component.ts");









var APP_ROUTES = [{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }, {
        path: 'login',
        component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]
    }, {
        path: "register",
        component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"]
    }, {
        path: 'pipe',
        component: _pipes_pipe_demo_component__WEBPACK_IMPORTED_MODULE_2__["PipeDemoComponent"]
    }, {
        path: 'users',
        component: _users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
        canActivate: [_services_login_gaurd_service__WEBPACK_IMPORTED_MODULE_4__["LoginGuardService"]]
    }, {
        path: 'product',
        component: _product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"],
        children: [{
                path: 'overview/:id',
                component: _product_overview_overview_component__WEBPACK_IMPORTED_MODULE_6__["OverviewComponent"]
            }, {
                path: 'spec',
                component: _product_specification_specification_component__WEBPACK_IMPORTED_MODULE_7__["SpecificationComponent"]
            }]
    }, {
        path: 'employee',
        component: _employee_new_employee_new_employee_component__WEBPACK_IMPORTED_MODULE_8__["NewEmployeeComponent"]
    }, {
        path: 'lazy',
        loadChildren: './lazy/lazy.module#LazyModule' // path/to/your/file/Name_of_Module_file#ModuleClassName
    }, {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full'
    }];


/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-invalid.ng-dirty[name=\"username\"]{\r\n  border-left : 3px red solid;\r\n}\r\n\r\n.ng-valid.ng-dirty[name=\"username\"]{\r\n  border-left : 3px green solid;\r\n}\r\n\r\n.ng-invalid.ng-dirty[name=\"password\"]{\r\n  border-left : 3px red solid;\r\n}\r\n\r\n.ng-valid.ng-dirty[name=\"password\"]{\r\n  border-left : 3px green solid;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5nLWludmFsaWQubmctZGlydHlbbmFtZT1cInVzZXJuYW1lXCJde1xyXG4gIGJvcmRlci1sZWZ0IDogM3B4IHJlZCBzb2xpZDtcclxufVxyXG5cclxuLm5nLXZhbGlkLm5nLWRpcnR5W25hbWU9XCJ1c2VybmFtZVwiXXtcclxuICBib3JkZXItbGVmdCA6IDNweCBncmVlbiBzb2xpZDtcclxufVxyXG5cclxuLm5nLWludmFsaWQubmctZGlydHlbbmFtZT1cInBhc3N3b3JkXCJde1xyXG4gIGJvcmRlci1sZWZ0IDogM3B4IHJlZCBzb2xpZDtcclxufVxyXG5cclxuLm5nLXZhbGlkLm5nLWRpcnR5W25hbWU9XCJwYXNzd29yZFwiXXtcclxuICBib3JkZXItbGVmdCA6IDNweCBncmVlbiBzb2xpZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"text-success text-center\">Login Form</h1>\n\n  <form class=\"jumbotron\" #f = \"ngForm\">\n    <div class=\"form-group\">\n      <div class=\"row\">\n        <div class=\"col-md-3 col-sm-3 col-xs-3\">\n          <label for=\"username\"> Username : </label>\n        </div>\n        <div class=\"col-md-6 col-sm-6 col-xs-6\">\n          <input type=\"email\"\n            name=\"username\"\n            class=\"form-control\"\n            ngModel\n            email required>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-3 col-sm-3 col-xs-3\">\n          <label for=\"password\">Password : </label>\n        </div>\n        <div class=\"col-md-6 col-sm-6 col-xs-6\">\n          <input type=\"password\"\n            name=\"password\"\n            class=\"form-control\"\n            ngModel\n            required minlength=\"6\">\n        </div>\n      </div>\n      <br>\n      <div class=\"container\">\n        <div class=\"row\">\n          <button\n            type=\"button\"\n            (click) = \"onLogin(f)\"\n            [disabled]=\"!f.valid\"\n            class=\"btn btn-block btn-success\">Login</button>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n\n\n<!-- ng g c auth/login  -->\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
    }
    LoginComponent.prototype.onLogin = function (f) {
        console.log("Username :: ", f.value.username);
        console.log("Password :: ", f.value.password);
        this.authService.login(f.value.username, f.value.password);
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/auth/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"text-center text-primary\"> Register Form</h1>\n\n  <form class=\"well\" [formGroup]=\"registerForm\">\n    <div class=\"form-group\">\n      <label for=\"username\"> Username : </label>\n      <input type=\"text\" class=\"form-control\" name=\"username\" [formControl]=\"username\">\n      <div [hidden]=\"username.untouched || username.valid\">\n        <p class=\"text-danger\">*Some problem with username.</p>\n        <div [hidden]=\"!username.hasError('required')\">\n          <p>Username is required field.</p>\n        </div>\n        <div [hidden]=\"!username.hasError('minlength')\">\n          <p>Username should have atleast 6 characters.</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"password\"> Password : </label>\n      <input type=\"password\" class=\"form-control\" name=\"password\" [formControl]=\"password\">\n      <div [hidden] = \"password.untouched || password.valid\">\n        <p>Some problem with Password.</p>\n        <div [hidden] = \"!password.hasError('required')\">\n          <p>Password is required field.</p>\n        </div>\n        <div [hidden] = \"!password.hasError('noExclamantion')\">\n          <p>Password must have exclamation sign.</p>\n        </div>\n      </div>\n    </div>\n\n  <div class=\"form-group\">\n    <label for=\"cnfPassword\">Confirm Password : </label>\n    <input type=\"text\" name=\"cnfPassword\" class=\"form-control\" [formControl] = \"cnfPassword\">\n\n    <div [hidden] = \"cnfPassword.untouched || cnfPassword.valid\">\n      Problem with confirm password.\n      <div [hidden] = \"!cnfPassword.hasError('misMatchPassword')\">\n        Password does not match.\n      </div>\n    </div>\n  </div>\n\n    <button class=\"btn btn-primary btn-block\" (click)=\"onRegister()\">\n      Register\n    </button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, authService) {
        this.fb = fb;
        this.authService = authService;
        this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
        ]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            this.hasExclamationMark
        ]);
        this.cnfPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            this.confirmPassword
        ]);
        this.registerForm = this.fb.group({
            username: this.username,
            password: this.password,
            confirmPassword: this.cnfPassword
        });
    }
    RegisterComponent.prototype.hasExclamationMark = function (input) {
        var hasExcalamation = input.value.indexOf('!') >= 0;
        return hasExcalamation ? null : { noExclamantion: true };
    };
    RegisterComponent.prototype.confirmPassword = function (input) {
        if (input.parent && input.parent.controls) {
            var samePassword = input.value === input.parent.controls['password'].value;
            return samePassword ? null : { misMatchPassword: true };
        }
    };
    RegisterComponent.prototype.onRegister = function () {
        console.log("Username : ", this.registerForm.value.username);
        console.log("Password : ", this.registerForm.value.password);
        this.authService.register(this.registerForm.value.username, this.registerForm.value.password);
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/auth/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/directives/highlight.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/directives/highlight.directive.ts ***!
  \***************************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(elementRef) {
        this.elementRef = elementRef;
        // console.log(this.elementRef.nativeElement)
        // this.elementRef.nativeElement.style.backgroundColor = 'aqua';
    }
    HighlightDirective.prototype.onmouseenter = function () {
        this.bgColor = this.myColor;
    };
    HighlightDirective.prototype.onmouseleave = function () {
        this.bgColor = "transparent";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('myColor'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HighlightDirective.prototype, "myColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.background-color'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HighlightDirective.prototype, "bgColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HighlightDirective.prototype, "onmouseenter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HighlightDirective.prototype, "onmouseleave", null);
    HighlightDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            // selector : '.app-highlight'     // <div class="app-highlight"></div>
            selector: '[app-highlight]' // <div app-highlight></div>
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], HighlightDirective);
    return HighlightDirective;
}());



/***/ }),

/***/ "./src/app/employee/employee.module.ts":
/*!*********************************************!*\
  !*** ./src/app/employee/employee.module.ts ***!
  \*********************************************/
/*! exports provided: EmployeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModule", function() { return EmployeeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _new_employee_new_employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-employee/new-employee.component */ "./src/app/employee/new-employee/new-employee.component.ts");




var EmployeeModule = /** @class */ (function () {
    function EmployeeModule() {
    }
    EmployeeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_new_employee_new_employee_component__WEBPACK_IMPORTED_MODULE_3__["NewEmployeeComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            providers: [],
            exports: []
        })
    ], EmployeeModule);
    return EmployeeModule;
}());



/***/ }),

/***/ "./src/app/employee/new-employee/new-employee.component.css":
/*!******************************************************************!*\
  !*** ./src/app/employee/new-employee/new-employee.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL25ldy1lbXBsb3llZS9uZXctZW1wbG95ZWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/employee/new-employee/new-employee.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/employee/new-employee/new-employee.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  new-employee works!\n</p>\n"

/***/ }),

/***/ "./src/app/employee/new-employee/new-employee.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/employee/new-employee/new-employee.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEmployeeComponent", function() { return NewEmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewEmployeeComponent = /** @class */ (function () {
    function NewEmployeeComponent() {
    }
    NewEmployeeComponent.prototype.ngOnInit = function () {
    };
    NewEmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-employee',
            template: __webpack_require__(/*! ./new-employee.component.html */ "./src/app/employee/new-employee/new-employee.component.html"),
            styles: [__webpack_require__(/*! ./new-employee.component.css */ "./src/app/employee/new-employee/new-employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewEmployeeComponent);
    return NewEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav navbar-nav navbar-pills\">\n  <li *ngIf=\"!authService.isAuthenticated()\">\n    <a [routerLink]=\"['login']\">Login</a>\n  </li>\n  <li *ngIf=\"!authService.isAuthenticated()\">\n    <a [routerLink]=\"['register']\">Register</a>\n  </li>\n  <li>\n    <a [routerLink]=\"['pipe']\">Pipe Demo</a>\n  </li>\n  <li>\n    <a [routerLink]=\"['users']\">Users</a>\n  </li>\n  <li>\n    <a [routerLink]=\"['product']\">Product</a>\n  </li>\n  <li>\n    <a [routerLink]=\"['employee']\">Employee</a>\n  </li>\n  <li>\n    <a [routerLink]=\"['lazy']\">Lazy </a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/model/mocks.ts":
/*!********************************!*\
  !*** ./src/app/model/mocks.ts ***!
  \********************************/
/*! exports provided: USER_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_DATA", function() { return USER_DATA; });
var USER_DATA = [{
        firstName: 'Bill',
        lastName: 'Gates',
        income: 50000,
        isWorking: true,
        company: 'Microsoft Inc',
        dob: new Date('Dec 12, 1965'),
        image: './assets/images/bill.jpg',
        votes: 120
    }, {
        firstName: 'Steve',
        lastName: 'Jobs',
        income: 0,
        isWorking: false,
        company: 'Apple',
        dob: new Date('Aug 12, 1965'),
        image: './assets/images/steve.png',
        votes: 160
    }, {
        firstName: 'Tim B.',
        lastName: 'Lee',
        income: 30000,
        isWorking: true,
        company: 'World Wide Web',
        dob: new Date('Jan 1, 1965'),
        image: './assets/images/tim.jpg',
        votes: 110
    }];


/***/ }),

/***/ "./src/app/pipes/country-code.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/pipes/country-code.pipe.ts ***!
  \********************************************/
/*! exports provided: CountryCodePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryCodePipe", function() { return CountryCodePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CountryCodePipe = /** @class */ (function () {
    function CountryCodePipe() {
    }
    CountryCodePipe.prototype.transform = function (value, code) {
        switch (code) {
            case 'US': return '+1 ' + value;
            case 'AUS': return '+18 ' + value;
            case 'CAD': return '+21 ' + value;
            case 'IND': return '+91 ' + value;
            default: return '+91 ' + value;
        }
    };
    CountryCodePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'countrycode'
        })
    ], CountryCodePipe);
    return CountryCodePipe;
}());



/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, filteredStatus) {
        // console.log("[TRANSFORM]")
        if (filteredStatus === "") {
            return value;
        }
        var resultArr = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var todo = value_1[_i];
            if (todo['status'] === filteredStatus) {
                resultArr.push(todo);
            }
        }
        return resultArr;
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter',
            pure: false
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/pipes/pipe-demo.component.html":
/*!************************************************!*\
  !*** ./src/app/pipes/pipe-demo.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h3> Promise data : {{ promise | async | uppercase }}</h3>\r\n\r\n  <h4>Contact Number : {{ contact_no | countrycode }} </h4>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 col-sm-6 col-xs-6\">\r\n      <select class=\"form-control\"\r\n        [(ngModel)] = \"filteredStatus\">\r\n        <option value=\"done\">Done</option>\r\n        <option value=\"pending\">Pending</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"col-md-6 col-sm-6 col-xs-6\">\r\n      <button class=\"btn btn-block btn-primary\" (click) = \"onAddNewTodo()\">\r\n        Add New Todo\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  <ul class=\"list-unstyled list-group\">\r\n    <li class=\"list-group-item\"\r\n      *ngFor=\"let todo of todos | filter : filteredStatus\">\r\n      {{ todo.label | uppercase }}\r\n      <span class=\"badge\"> {{todo.status  }} </span>\r\n    </li>\r\n  </ul>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pipes/pipe-demo.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pipes/pipe-demo.component.ts ***!
  \**********************************************/
/*! exports provided: PipeDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeDemoComponent", function() { return PipeDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PipeDemoComponent = /** @class */ (function () {
    function PipeDemoComponent() {
        this.promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve("Here the data comes.");
            }, 3000);
        });
        this.contact_no = 987654321;
        this.filteredStatus = "";
        this.todos = [{
                label: 'Renew insurance',
                status: 'done'
            }, {
                label: 'pot the plant',
                status: 'pending'
            }, {
                label: 'buy groceries',
                status: 'done'
            }, {
                label: 'read the books',
                status: 'pending'
            }];
    }
    PipeDemoComponent.prototype.onAddNewTodo = function () {
        this.todos.push({ label: 'New Item', status: 'pending' });
    };
    PipeDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pipe-demo',
            template: __webpack_require__(/*! ./pipe-demo.component.html */ "./src/app/pipes/pipe-demo.component.html")
        })
    ], PipeDemoComponent);
    return PipeDemoComponent;
}());



/***/ }),

/***/ "./src/app/product/overview/overview.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product/overview/overview.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3Qvb3ZlcnZpZXcvb3ZlcnZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/product/overview/overview.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product/overview/overview.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\n  Showing the product having ID #{{id}}\n</h3>\n"

/***/ }),

/***/ "./src/app/product/overview/overview.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product/overview/overview.component.ts ***!
  \********************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(route) {
        var _this = this;
        this.route = route;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
    }
    OverviewComponent.prototype.ngOnInit = function () {
    };
    OverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-overview',
            template: __webpack_require__(/*! ./overview.component.html */ "./src/app/product/overview/overview.component.html"),
            styles: [__webpack_require__(/*! ./overview.component.css */ "./src/app/product/overview/overview.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <h2>Product Component</h2>\n\n  <br>\n\n  <div class=\"row\">\n    <div class=\"col-md-2 col-sm-2 col-xs-2\">\n      <ul class=\"list-unstyled\">\n        <li><a [routerLink]=\"['overview', 3]\">Overview</a></li>\n        <li><a [routerLink]=\"['spec']\"\n            [queryParams] = \"{'name' : 'iPhoneX'}\">Specification</a></li>\n      </ul>\n    </div>\n    <div class=\"col-md-10 col-sm-10 col-xs-10\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/product/specification/specification.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/product/specification/specification.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3Qvc3BlY2lmaWNhdGlvbi9zcGVjaWZpY2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/product/specification/specification.component.html":
/*!********************************************************************!*\
  !*** ./src/app/product/specification/specification.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  specification works!\n</p>\n"

/***/ }),

/***/ "./src/app/product/specification/specification.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/product/specification/specification.component.ts ***!
  \******************************************************************/
/*! exports provided: SpecificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecificationComponent", function() { return SpecificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpecificationComponent = /** @class */ (function () {
    function SpecificationComponent() {
    }
    SpecificationComponent.prototype.ngOnInit = function () {
    };
    SpecificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-specification',
            template: __webpack_require__(/*! ./specification.component.html */ "./src/app/product/specification/specification.component.html"),
            styles: [__webpack_require__(/*! ./specification.component.css */ "./src/app/product/specification/specification.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpecificationComponent);
    return SpecificationComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.token = null;
    }
    AuthService.prototype.register = function (email, password) {
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(email, password)
            .then(function (response) { return console.log("User Registered."); })
            .catch(function (err) { return console.log(err); });
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(email, password)
            .then(function (response) {
            firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.getIdToken()
                .then(function (token) {
                _this.token = token;
                _this.router.navigate(['users']);
            }).catch(function (err) { return console.log(err); });
        })
            .catch(function (err) { return console.log(err); });
    };
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.token != null;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_mocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/mocks */ "./src/app/model/mocks.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");





var DataService = /** @class */ (function () {
    function DataService(httpClient, authService) {
        this.httpClient = httpClient;
        this.authService = authService;
    }
    DataService.prototype.getData = function () {
        return _model_mocks__WEBPACK_IMPORTED_MODULE_2__["USER_DATA"];
    };
    DataService.prototype.getJsonData = function () {
        return this.httpClient.get("assets/model/user-data.json");
        // .subscribe(response => console.log(response));
    };
    DataService.prototype.getAPIData = function () {
        return this.httpClient.get("https://everi-app-demo.firebaseio.com/userdata.json?auth=" + this.authService.getToken());
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/login-gaurd.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/login-gaurd.service.ts ***!
  \*************************************************/
/*! exports provided: LoginGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuardService", function() { return LoginGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");



var LoginGuardService = /** @class */ (function () {
    function LoginGuardService(authService) {
        this.authService = authService;
    }
    LoginGuardService.prototype.canActivate = function () {
        return this.authService.isAuthenticated();
    };
    LoginGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginGuardService);
    return LoginGuardService;
}());



/***/ }),

/***/ "./src/app/users/user-img/user-img.component.css":
/*!*******************************************************!*\
  !*** ./src/app/users/user-img/user-img.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXItaW1nL3VzZXItaW1nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/users/user-img/user-img.component.html":
/*!********************************************************!*\
  !*** ./src/app/users/user-img/user-img.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img [src]=\"user.image\" class=\"img-circle img-responsive\">\n<br>\n<button class=\"btn btn-info btn-block\"\n  (click)=\"onMoreInfo(user)\">More Info</button>\n"

/***/ }),

/***/ "./src/app/users/user-img/user-img.component.ts":
/*!******************************************************!*\
  !*** ./src/app/users/user-img/user-img.component.ts ***!
  \******************************************************/
/*! exports provided: UserImgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserImgComponent", function() { return UserImgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserImgComponent = /** @class */ (function () {
    function UserImgComponent() {
        // tslint:disable-next-line: no-output-rename
        this.childEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    UserImgComponent.prototype.onMoreInfo = function (user) {
        // alert(`Hello ${user.firstName}!`);
        this.childEvent.emit(user);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('user'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserImgComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('childEvent'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserImgComponent.prototype, "childEvent", void 0);
    UserImgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-img',
            template: __webpack_require__(/*! ./user-img.component.html */ "./src/app/users/user-img/user-img.component.html"),
            styles: [__webpack_require__(/*! ./user-img.component.css */ "./src/app/users/user-img/user-img.component.css")]
        })
    ], UserImgComponent);
    return UserImgComponent;
}());



/***/ }),

/***/ "./src/app/users/user-info/user-info.component.css":
/*!*********************************************************!*\
  !*** ./src/app/users/user-info/user-info.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border {\r\n  border-bottom: 2px #ff45ff solid;\r\n}\r\n\r\n.feature{\r\n  font-size : 1.2em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlci1pbmZvL3VzZXItaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvdXNlcnMvdXNlci1pbmZvL3VzZXItaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvcmRlciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4ICNmZjQ1ZmYgc29saWQ7XHJcbn1cclxuXHJcbi5mZWF0dXJle1xyXG4gIGZvbnQtc2l6ZSA6IDEuMmVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/users/user-info/user-info.component.html":
/*!**********************************************************!*\
  !*** ./src/app/users/user-info/user-info.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content select=\"header\"></ng-content>\n\n<h3 app-highlight [myColor] = \"'blue'\">\n  {{ user.firstName | uppercase }} {{ user.lastName | uppercase }}</h3>\n\n<ng-content></ng-content>\n\n<p *ngIf=\"user.isWorking; else ElseTemplate\" [ngStyle] = \"dynamicStyle\">\n  Income : <span [innerHTML]=\"user.income | currency : 'INR'\"></span></p>\n\n  <!-- Desugar Syntax -->\n<!-- <ng-template [ngIf] = \"user.isWorking\">\n  <p>Income :  <span [innerHTML] = \"user.income\"></span></p>\n</ng-template> -->\n\n\n<!-- <p [ngClass] = \"['border', 'feature']\">Date of Birth : {{ user.dob }} </p> -->\n<p [ngClass] = \"dynamicClass\">Date of Birth : {{ user.dob |date : 'MMM/dd/yyyy' }}\n\n  <button class=\"btn btn-sm btn-default\" (click) = \"onToggle()\">Toggle</button>\n</p>\n\n<em>\n  Total Votes : {{ user.votes }}\n  <!-- <input type=\"number\"\n    [value]=\"user.votes\"\n    (change) = \"user.votes = $event.target.value\"> -->\n\n  <input type=\"number\" [(ngModel)]=\"user.votes\">\n</em>\n\n<ng-content select=\"footer\"></ng-content>\n\n<ng-template #ElseTemplate>\n  <p>{{ user.firstName }} is NOT working now!</p>\n</ng-template>\n\n<!-- <div [ngSwitch] = \"'2'\">\n  <div *ngSwitchCase = \"1\">Output 1</div>\n  <div *ngSwitchCase = \"2\">Output 2</div>\n  <div *ngSwitchCase = \"3\">Output 3</div>\n  <div *ngSwitchDefault>Default Output</div>\n</div> -->\n"

/***/ }),

/***/ "./src/app/users/user-info/user-info.component.ts":
/*!********************************************************!*\
  !*** ./src/app/users/user-info/user-info.component.ts ***!
  \********************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent() {
        // tslint:disable-next-line: object-literal-key-quotes
        this.dynamicClass = {
            border: false,
            feature: true
        };
        this.dynamicStyle = {
            color: 'green'
        };
    }
    UserInfoComponent.prototype.onToggle = function () {
        this.dynamicClass.border = !this.dynamicClass.border;
        this.dynamicClass.feature = !this.dynamicClass.feature;
    };
    UserInfoComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('user'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserInfoComponent.prototype, "user", void 0);
    UserInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-info',
            template: __webpack_require__(/*! ./user-info.component.html */ "./src/app/users/user-info/user-info.component.html"),
            styles: [__webpack_require__(/*! ./user-info.component.css */ "./src/app/users/user-info/user-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center text-primary\">Welcome to {{ title }}!</h2>\r\n\r\n<div class=\"container\">\r\n  <ul class=\"list-unstyled\">\r\n    <li class=\"well\" *ngFor=\"let user of users; index as i; first as isFirst; even as isEven\">\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-3 col-sm-3 col-xs-3\">\r\n          <!-- Index :  {{ index }} <br>\r\n          Is this First ? : {{ isFirst }} <br>\r\n          Is this Even ? : {{ isEven}} -->\r\n          <app-user-img [user]=\"user\" (childEvent)=\"moreInfo($event)\"></app-user-img>\r\n        </div>\r\n\r\n        <div class=\"col-md-9 col-sm-9 col-xs-9\">\r\n          <app-user-info [user]=\"user\">\r\n            <!-- <header>Header Info</header>\r\n            <main>Main Info</main>\r\n            <footer>Footer Info</footer> -->\r\n          </app-user-info>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");



var UsersComponent = /** @class */ (function () {
    function UsersComponent(dataService) {
        this.dataService = dataService;
    }
    UsersComponent.prototype.moreInfo = function (user) {
        alert("Here is the info,\n    Mr. " + user.firstName + " is working with " + user.company + "!!");
    };
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getAPIData()
            .subscribe(function (response) { return _this.users = response; });
        // this.dataService.getJsonData()
        //   .subscribe(
        //     response => this.users = response['userdata'],
        //     err => console.log(err),
        //     () => console.log("COMPLETE"));
        // this.users = this.dataService.getData();
        // this.users = USER_DATA;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UsersComponent.prototype, "title", void 0);
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");


Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dell\Desktop\EVERI\demo\users-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map