"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var patientSchema = new _mongoose.Schema({
  name: String,
  lastName: String,
  gender: String,
  dateOfBirth: Date,
  weight: Number,
  height: Number,
  phoneNumber: Number,
  password: String,
  primaryDoctorId: String,
  email: {
    type: String,
    unique: true
  },
  photoURL: String,
  emergencyContact: {
    contactName: String,
    contactPhoneNumber: Number,
    contactEmail: String
  },
  role: [{
    ref: "Role",
    type: _mongoose.Schema.Types.ObjectId
  }]
}, {
  timestamps: true,
  versionKey: false
});
var _default = (0, _mongoose.model)('Patient', patientSchema);
exports["default"] = _default;