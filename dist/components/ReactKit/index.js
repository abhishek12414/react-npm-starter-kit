"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ReactKit;

var _react = _interopRequireDefault(require("react"));

var _indexModule = _interopRequireDefault(require("./index.module.css"));

var _logo = _interopRequireDefault(require("../../assets/logo512.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ReactKit() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _indexModule["default"].reactkit
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: _indexModule["default"].title
  }, "React NPM Starter Kit"), /*#__PURE__*/_react["default"].createElement("img", {
    className: _indexModule["default"].img,
    src: _logo["default"],
    alt: "react-logo"
  }));
}