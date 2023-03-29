"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_mongoose["default"].connect("mongodb+srv://healthCare:secureHealth@healthcare.zlay3ab.mongodb.net/?retryWrites=true&w=majority").then(function (db) {
  return console.log("database connection execute successfully");
})["catch"](function (error) {
  return console.log(error);
});