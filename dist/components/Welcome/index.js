"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Welcome;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Welcome() {
  return /*#__PURE__*/_react["default"].createElement("h3", {
    style: {
      textAlign: "center",
      marginTop: 28
    }
  }, "React kit welcome page component");
}