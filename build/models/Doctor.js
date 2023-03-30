"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var doctorSchema = new _mongoose.Schema({
  name: String,
  lastName: String,
  gender: String,
  dateOfBirth: Date,
  phoneNumber: Number,
  email: String,
  password: String,
  photoURL: String,
  medicalCardId: String,
  role: [{
    ref: "Role",
    type: _mongoose.Schema.Types.ObjectId
  }]
}, {
  timestamps: true,
  versionKey: false
});
var _default = (0, _mongoose.model)('Doctor', doctorSchema);
exports["default"] = _default;