"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RootLayout;
var _react = _interopRequireDefault(require("react"));
require("./globals.css");
var __jsx = _react["default"].createElement;
function RootLayout(_ref) {
  var children = _ref.children;
  return __jsx("html", {
    lang: "en"
  }, __jsx("head", null), __jsx("body", null, children));
}