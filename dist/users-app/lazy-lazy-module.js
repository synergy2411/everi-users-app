(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lazy-lazy-module"],{

/***/ "./src/app/lazy/customer/customer.component.css":
/*!******************************************************!*\
  !*** ./src/app/lazy/customer/customer.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhenkvY3VzdG9tZXIvY3VzdG9tZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/lazy/customer/customer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/lazy/customer/customer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  customer works!\n</p>\n"

/***/ }),

/***/ "./src/app/lazy/customer/customer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/lazy/customer/customer.component.ts ***!
  \*****************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomerComponent = /** @class */ (function () {
    function CustomerComponent() {
    }
    CustomerComponent.prototype.ngOnInit = function () {
    };
    CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/lazy/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/lazy/customer/customer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/lazy/i-am-lazy/i-am-lazy.component.css":
/*!********************************************************!*\
  !*** ./src/app/lazy/i-am-lazy/i-am-lazy.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhenkvaS1hbS1sYXp5L2ktYW0tbGF6eS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/lazy/i-am-lazy/i-am-lazy.component.html":
/*!*********************************************************!*\
  !*** ./src/app/lazy/i-am-lazy/i-am-lazy.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n<h3>Lazy Component Loaded.</h3>\n\n<a [routerLink]=\"['./customer']\">Load Customers</a>\n\n  <router-outlet></router-outlet>\n\n</div>\n\n\n<!-- ng build -->\n\n<!-- npm i serve -g -->\n\n<!-- cd dist/users-app -->\n\n<!-- serve -->\n"

/***/ }),

/***/ "./src/app/lazy/i-am-lazy/i-am-lazy.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/lazy/i-am-lazy/i-am-lazy.component.ts ***!
  \*******************************************************/
/*! exports provided: IAmLazyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IAmLazyComponent", function() { return IAmLazyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IAmLazyComponent = /** @class */ (function () {
    function IAmLazyComponent() {
    }
    IAmLazyComponent.prototype.ngOnInit = function () {
    };
    IAmLazyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-i-am-lazy',
            template: __webpack_require__(/*! ./i-am-lazy.component.html */ "./src/app/lazy/i-am-lazy/i-am-lazy.component.html"),
            styles: [__webpack_require__(/*! ./i-am-lazy.component.css */ "./src/app/lazy/i-am-lazy/i-am-lazy.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IAmLazyComponent);
    return IAmLazyComponent;
}());



/***/ }),

/***/ "./src/app/lazy/lazy.module.ts":
/*!*************************************!*\
  !*** ./src/app/lazy/lazy.module.ts ***!
  \*************************************/
/*! exports provided: LazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyModule", function() { return LazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _i_am_lazy_i_am_lazy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./i-am-lazy/i-am-lazy.component */ "./src/app/lazy/i-am-lazy/i-am-lazy.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/lazy/customer/customer.component.ts");






var LAZY_ROUTE = [{
        path: '',
        component: _i_am_lazy_i_am_lazy_component__WEBPACK_IMPORTED_MODULE_3__["IAmLazyComponent"],
        children: [{
                path: 'customer',
                component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_5__["CustomerComponent"]
            }]
    }];
var LazyModule = /** @class */ (function () {
    function LazyModule() {
    }
    LazyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_i_am_lazy_i_am_lazy_component__WEBPACK_IMPORTED_MODULE_3__["IAmLazyComponent"], _customer_customer_component__WEBPACK_IMPORTED_MODULE_5__["CustomerComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(LAZY_ROUTE)
            ]
        })
    ], LazyModule);
    return LazyModule;
}());



/***/ })

}]);
//# sourceMappingURL=lazy-lazy-module.js.map