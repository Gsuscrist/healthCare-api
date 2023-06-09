"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var dataSchema = new _mongoose.Schema({
  heartBeat: Number,
  patientId: String
}, {
  timestamps: true,
  versionKey: false
});
var _default = (0, _mongoose.model)('Data', dataSchema);
exports["default"] = _default;