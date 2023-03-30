"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var diagnosisQuestionSchema = new _mongoose.Schema({
  patientId: String,
  headache: Boolean,
  earBuzz: Boolean,
  epigastricPain: Boolean,
  swelling: Boolean
}, {
  timestamps: true,
  versionKey: false
});
var _default = (0, _mongoose.model)('DiagnosisQuestions', diagnosisQuestionSchema);
exports["default"] = _default;