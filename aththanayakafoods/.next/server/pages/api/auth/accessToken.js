module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/accessToken.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./models/userModel.js":
/*!*****************************!*\
  !*** ./models/userModel.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'user'
  },
  root: {
    type: Boolean,
    default: false
  },
  avatar: {
    type: String,
    default: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'
  }
}, {
  timestamps: true
});
let Dataset = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.user || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('user', userSchema);
/* harmony default export */ __webpack_exports__["default"] = (Dataset);

/***/ }),

/***/ "./pages/api/auth/accessToken.js":
/*!***************************************!*\
  !*** ./pages/api/auth/accessToken.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ "./utils/connectDB.js");
/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/userModel */ "./models/userModel.js");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_generateToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/generateToken */ "./utils/generateToken.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);





Object(_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  try {
    const rf_token = req.cookies.refreshtoken;
    if (!rf_token) return res.status(400).json({
      err: 'Please login now!'
    });
    const result = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default.a.verify(rf_token, "X!%rvjg^U7KF456*sXsf&qGCj9Cq^CIMk45cLRcVCU2kbVHs#+MrmzSIQ!p7");
    if (!result) return res.status(400).json({
      err: 'Your token is incorrect or has expired.'
    });
    const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__["default"].findById(result.id);
    if (!user) return res.status(400).json({
      err: 'User does not exist.'
    });
    const access_token = Object(_utils_generateToken__WEBPACK_IMPORTED_MODULE_3__["createAccessToken"])({
      id: user._id
    });
    res.json({
      access_token,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        root: user.root
      }
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
});

/***/ }),

/***/ "./utils/connectDB.js":
/*!****************************!*\
  !*** ./utils/connectDB.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connectDB = () => {
  if (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connections[0].readyState) {
    console.log('Already connected.');
    return;
  }
  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect("mongodb+srv://jayasoor:gihankelani123@cluster0.bulx7d7.mongodb.net/AFoodsDB?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, err => {
    if (err) throw err;
    console.log('Connected to mongodb.');
  });
};
/* harmony default export */ __webpack_exports__["default"] = (connectDB);

/***/ }),

/***/ "./utils/generateToken.js":
/*!********************************!*\
  !*** ./utils/generateToken.js ***!
  \********************************/
/*! exports provided: createAccessToken, createRefreshToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAccessToken", function() { return createAccessToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRefreshToken", function() { return createRefreshToken; });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

const createAccessToken = payload => {
  console.log("hL8h5H9&xBJ2RCBmjB+Dpq2MJxAVHpW$feRqdvjfIaUTheWP+K");
  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign(payload, "hL8h5H9&xBJ2RCBmjB+Dpq2MJxAVHpW$feRqdvjfIaUTheWP+K", {
    expiresIn: '5d'
  });
};
const createRefreshToken = payload => {
  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign(payload, "X!%rvjg^U7KF456*sXsf&qGCj9Cq^CIMk45cLRcVCU2kbVHs#+MrmzSIQ!p7", {
    expiresIn: '70d'
  });
};

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL3VzZXJNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9hY2Nlc3NUb2tlbi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb25uZWN0REIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ2VuZXJhdGVUb2tlbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIl0sIm5hbWVzIjpbInVzZXJTY2hlbWEiLCJtb25nb29zZSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwicm9sZSIsImRlZmF1bHQiLCJyb290IiwiQm9vbGVhbiIsImF2YXRhciIsInRpbWVzdGFtcHMiLCJEYXRhc2V0IiwibW9kZWxzIiwidXNlciIsIm1vZGVsIiwiY29ubmVjdERCIiwicmVxIiwicmVzIiwicmZfdG9rZW4iLCJjb29raWVzIiwicmVmcmVzaHRva2VuIiwic3RhdHVzIiwianNvbiIsImVyciIsInJlc3VsdCIsImp3dCIsInZlcmlmeSIsInByb2Nlc3MiLCJVc2VycyIsImZpbmRCeUlkIiwiaWQiLCJhY2Nlc3NfdG9rZW4iLCJjcmVhdGVBY2Nlc3NUb2tlbiIsIl9pZCIsIm1lc3NhZ2UiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInVzZUNyZWF0ZUluZGV4IiwidXNlRmluZEFuZE1vZGlmeSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsInBheWxvYWQiLCJzaWduIiwiZXhwaXJlc0luIiwiY3JlYXRlUmVmcmVzaFRva2VuIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FB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O0VBQ3hDLENBQUMsQ0FBQztBQUNOLENBQUM7QUFHY3ZCLHdFQUFTLEU7Ozs7Ozs7Ozs7OztBQ25CeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE4QjtBQUV2QixNQUFNaUIsaUJBQWlCLEdBQUlZLE9BQU8sSUFBSztFQUMxQ1AsT0FBTyxDQUFDQyxHQUFHLENBQUNYLG9EQUErQixDQUFDO0VBQzVDLE9BQU9GLG1EQUFHLENBQUNvQixJQUFJLENBQUNELE9BQU8sRUFBRWpCLG9EQUErQixFQUFFO0lBQUNtQixTQUFTLEVBQUU7RUFBSSxDQUFDLENBQUM7QUFDaEYsQ0FBQztBQUVNLE1BQU1DLGtCQUFrQixHQUFJSCxPQUFPLElBQUs7RUFDM0MsT0FBT25CLG1EQUFHLENBQUNvQixJQUFJLENBQUNELE9BQU8sRUFBRWpCLDhEQUFnQyxFQUFFO0lBQUNtQixTQUFTLEVBQUU7RUFBSyxDQUFDLENBQUM7QUFDbEYsQ0FBQyxDOzs7Ozs7Ozs7OztBQ1RELG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InBhZ2VzL2FwaS9hdXRoL2FjY2Vzc1Rva2VuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvYXV0aC9hY2Nlc3NUb2tlbi5qc1wiKTtcbiIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcclxuXHJcbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIG5hbWU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBlbWFpbDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICB1bmlxdWU6IHRydWVcclxuICAgIH0sXHJcbiAgICBwYXNzd29yZDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHJvbGU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogJ3VzZXInXHJcbiAgICB9LFxyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBhdmF0YXI6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RldmF0Y2hhbm5lbC9pbWFnZS91cGxvYWQvdjE2MDI3NTI0MDIvYXZhdGFyL2F2YXRhcl9jdWdxNDAucG5nJ1xyXG4gICAgfVxyXG59LCB7XHJcbiAgICB0aW1lc3RhbXBzOiB0cnVlXHJcbn0pXHJcblxyXG5sZXQgRGF0YXNldCA9IG1vbmdvb3NlLm1vZGVscy51c2VyIHx8IG1vbmdvb3NlLm1vZGVsKCd1c2VyJywgdXNlclNjaGVtYSlcclxuZXhwb3J0IGRlZmF1bHQgRGF0YXNldCIsImltcG9ydCBjb25uZWN0REIgZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29ubmVjdERCJ1xyXG5pbXBvcnQgVXNlcnMgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3VzZXJNb2RlbCdcclxuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnXHJcbmltcG9ydCB7IGNyZWF0ZUFjY2Vzc1Rva2VuICB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2dlbmVyYXRlVG9rZW4nXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5cclxuY29ubmVjdERCKClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICB0cnl7XHJcbiAgICBjb25zdCByZl90b2tlbiA9IHJlcS5jb29raWVzLnJlZnJlc2h0b2tlbjtcclxuICAgICAgICBpZighcmZfdG9rZW4pIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiAnUGxlYXNlIGxvZ2luIG5vdyEnfSlcclxuICAgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gand0LnZlcmlmeShyZl90b2tlbiwgcHJvY2Vzcy5lbnYuUkVGUkVTSF9UT0tFTl9TRUNSRVQpXHJcbiAgICAgICAgaWYoIXJlc3VsdCkgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6ICdZb3VyIHRva2VuIGlzIGluY29ycmVjdCBvciBoYXMgZXhwaXJlZC4nfSlcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlcnMuZmluZEJ5SWQocmVzdWx0LmlkKVxyXG4gICAgICAgIGlmKCF1c2VyKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogJ1VzZXIgZG9lcyBub3QgZXhpc3QuJ30pXHJcbiAgICAgICAgY29uc3QgYWNjZXNzX3Rva2VuID0gY3JlYXRlQWNjZXNzVG9rZW4oe2lkOiB1c2VyLl9pZH0pXHJcbiAgICAgICAgcmVzLmpzb24oe1xyXG4gICAgICAgICAgICBhY2Nlc3NfdG9rZW4sXHJcbiAgICAgICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcm9sZTogdXNlci5yb2xlLFxyXG4gICAgICAgICAgICAgICAgYXZhdGFyOiB1c2VyLmF2YXRhcixcclxuICAgICAgICAgICAgICAgIHJvb3Q6IHVzZXIucm9vdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgfVxyXG4gICBjYXRjaChlcnIpe1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtlcnI6IGVyci5tZXNzYWdlfSlcclxufVxyXG5cclxuICAgXHJcbn0iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXHJcblxyXG5jb25zdCBjb25uZWN0REIgPSAoKSA9PiB7XHJcbiAgICBpZihtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnQWxyZWFkeSBjb25uZWN0ZWQuJylcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJMLCB7XHJcbiAgICAgICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXHJcbiAgICAgICAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXHJcbiAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZVxyXG4gICAgfSwgZXJyID0+IHtcclxuICAgICAgICBpZihlcnIpIHRocm93IGVycjtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIG1vbmdvZGIuJylcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REIiLCJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVBY2Nlc3NUb2tlbiA9IChwYXlsb2FkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU5fU0VDUkVUKVxyXG4gICAgcmV0dXJuIGp3dC5zaWduKHBheWxvYWQsIHByb2Nlc3MuZW52LkFDQ0VTU19UT0tFTl9TRUNSRVQsIHtleHBpcmVzSW46ICc1ZCd9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlUmVmcmVzaFRva2VuID0gKHBheWxvYWQpID0+IHtcclxuICAgIHJldHVybiBqd3Quc2lnbihwYXlsb2FkLCBwcm9jZXNzLmVudi5SRUZSRVNIX1RPS0VOX1NFQ1JFVCwge2V4cGlyZXNJbjogJzcwZCd9KVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9