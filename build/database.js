"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_mongoose["default"].connect("mongodb://127.0.0.1:27017/HealthCare").then(function (db) {
  return console.log("database connection execute successfully");
})["catch"](function (error) {
  return console.log(error);
});