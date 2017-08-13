webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #edeff2;\r\n  font-family: \"Calibri\", \"Roboto\", sans-serif;\r\n}\r\n\r\n.chat_window {\r\n  position: absolute;\r\n  width: calc(100% - 20px);\r\n  max-width: 800px;\r\n  height: 500px;\r\n  border-radius: 10px;\r\n  background-color: #fff;\r\n  left: 50%;\r\n  top: 50%;\r\n  -webkit-transform: translateX(-50%) translateY(-50%);\r\n          transform: translateX(-50%) translateY(-50%);\r\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\r\n  background-color: #f8f8f8;\r\n  overflow: hidden;\r\n}\r\n\r\n.top_menu {\r\n  background-color: #fff;\r\n  width: 100%;\r\n  padding: 20px 0 15px;\r\n  box-shadow: 0 1px 30px rgba(0, 0, 0, 0.1);\r\n}\r\n.top_menu .buttons {\r\n  margin: 3px 0 0 20px;\r\n  position: absolute;\r\n}\r\n.top_menu .buttons .button {\r\n  width: 16px;\r\n  height: 16px;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  margin-right: 10px;\r\n  position: relative;\r\n}\r\n.top_menu .buttons .button.close {\r\n  background-color: #f5886e;\r\n}\r\n.top_menu .buttons .button.minimize {\r\n  background-color: #fdbf68;\r\n}\r\n.top_menu .buttons .button.maximize {\r\n  background-color: #a3d063;\r\n}\r\n.top_menu .title {\r\n  text-align: center;\r\n  color: #bcbdc0;\r\n  font-size: 20px;\r\n}\r\n\r\n.messages {\r\n  position: relative;\r\n  list-style: none;\r\n  padding: 20px 10px 0 10px;\r\n  margin: 0;\r\n  height: 347px;\r\n  overflow: scroll;\r\n}\r\n.messages .message {\r\n  clear: both;\r\n  overflow: hidden;\r\n  margin-bottom: 20px;\r\n  transition: all 0.5s linear;\r\n\r\n}\r\n.messages .message.left .avatar {\r\n  background-color: #f5886e;\r\n  float: left;\r\n}\r\n.messages .message.left .text_wrapper {\r\n  background-color: #ffe6cb;\r\n  margin-left: 20px;\r\n}\r\n.messages .message.left .text_wrapper::after, .messages .message.left .text_wrapper::before {\r\n  right: 100%;\r\n  border-right-color: #ffe6cb;\r\n}\r\n.messages .message.left .text {\r\n  color: #c48843;\r\n}\r\n.messages .message.right .avatar {\r\n  background-color: #fdbf68;\r\n  float: right;\r\n}\r\n.messages .message.right .text_wrapper {\r\n  background-color: #c7eafc;\r\n  margin-right: 20px;\r\n  float: right;\r\n}\r\n.messages .message.right .text_wrapper::after, .messages .message.right .text_wrapper::before {\r\n  left: 100%;\r\n  border-left-color: #c7eafc;\r\n}\r\n.messages .message.right .text {\r\n  color: #45829b;\r\n}\r\n.messages .message.appeared {\r\n  opacity: 1;\r\n}\r\n.messages .message .avatar {\r\n  width: 60px;\r\n  height: 60px;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n}\r\n.messages .message .text_wrapper {\r\n  display: inline-block;\r\n  padding: 20px;\r\n  border-radius: 6px;\r\n  width: calc(100% - 85px);\r\n  min-width: 100px;\r\n  position: relative;\r\n}\r\n.messages .message .text_wrapper::after, .messages .message .text_wrapper:before {\r\n  top: 18px;\r\n  border: solid transparent;\r\n  content: \" \";\r\n  height: 0;\r\n  width: 0;\r\n  position: absolute;\r\n  pointer-events: none;\r\n}\r\n.messages .message .text_wrapper::after {\r\n  border-width: 13px;\r\n  margin-top: 0px;\r\n}\r\n.messages .message .text_wrapper::before {\r\n  border-width: 15px;\r\n  margin-top: -2px;\r\n}\r\n.messages .message .text_wrapper .text {\r\n  font-size: 18px;\r\n  font-weight: 300;\r\n}\r\n\r\n.bottom_wrapper {\r\n  position: relative;\r\n  width: 100%;\r\n  background-color: #fff;\r\n  padding: 20px 20px;\r\n  position: absolute;\r\n  bottom: 0;\r\n}\r\n.bottom_wrapper .message_input_wrapper {\r\n  display: inline-block;\r\n  height: 50px;\r\n  border-radius: 25px;\r\n  border: 1px solid #bcbdc0;\r\n  width: calc(100% - 160px);\r\n  position: relative;\r\n  padding: 0 20px;\r\n}\r\n.bottom_wrapper .message_input_wrapper .message_input {\r\n  border: none;\r\n  height: 100%;\r\n  box-sizing: border-box;\r\n  width: calc(100% - 40px);\r\n  position: absolute;\r\n  outline-width: 0;\r\n  color: gray;\r\n}\r\n.bottom_wrapper .send_message {\r\n  width: 140px;\r\n  height: 50px;\r\n  display: inline-block;\r\n  border-radius: 50px;\r\n  background-color: #a3d063;\r\n  border: 2px solid #a3d063;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  transition: all 0.2s linear;\r\n  text-align: center;\r\n  float: right;\r\n}\r\n.bottom_wrapper .send_message:hover {\r\n  color: #a3d063;\r\n  background-color: #fff;\r\n}\r\n.bottom_wrapper .send_message .text {\r\n  font-size: 18px;\r\n  font-weight: 300;\r\n  display: inline-block;\r\n  line-height: 48px;\r\n}\r\n\r\n.message_template {\r\n  display: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<ul>\n    <li *ngFor=\"let item of items | async\">\n      {{ item.name }}\n    </li>\n  </ul>\n-->\n<div class=\"chat_window\">\n  <div class=\"top_menu\">\n    <div class=\"buttons\">\n      <div class=\"button close\">\n      </div>\n      <div class=\"button minimize\">\n      </div>\n      <div class=\"button maximize\">\n      </div>\n    </div>\n    <div class=\"title\">\n      Chat\n    </div>\n  </div>\n  <ul class=\"messages\">\n    <li class=\"message\" *ngFor=\"let item of items | async\">\n      <div class=\"left\">\n        <span class=\" text_wrapper\">{{ item.name }}\n        </span>\n        </div>\n    </li>\n  </ul>\n  <div class=\"bottom_wrapper clearfix\">\n    <div class=\"message_input_wrapper\">\n      <input class=\"message_input\" name=\"message\" [(ngModel)]=\"message\" placeholder=\"Type your message here...\" />\n    </div>\n    <div class=\"send_message\" (click)=\"send()\">\n      <div class=\"icon\"></div>\n      <div class=\"text\">Send</div>\n    </div>\n  </div>\n</div>\n<div class=\"message_template\">\n  <li class=\"message\">\n    <div class=\"avatar\"></div>\n    <div class=\"text_wrapper\">\n      <div class=\"text\"></div>\n    </div>\n  </li>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(db) {
        this.items = db.list('https://real-chat-cb118.firebaseio.com/users');
    }
    AppComponent.prototype.send = function () {
        this.items.push({ name: this.message });
        this.message = '';
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_firebase_config__ = __webpack_require__("../../../../../src/environments/firebase.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_4__environments_firebase_config__["a" /* firebaseConfig */]),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/environments/firebase.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyAlgLcqN0qz7Jf6M0IKggv_iFMj3n6-XUE",
    authDomain: "real-chat-cb118.firebaseapp.com",
    databaseURL: "https://real-chat-cb118.firebaseio.com",
    projectId: "real-chat-cb118",
    storageBucket: "real-chat-cb118.appspot.com",
    messagingSenderId: "97601506078"
};
//# sourceMappingURL=firebase.config.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map