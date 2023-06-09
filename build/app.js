"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _package = _interopRequireDefault(require("../package.json"));
var _initialSetUp = require("./libs/initialSetUp");
var _patient = _interopRequireDefault(require("./routes/patient.routes"));
var _data = _interopRequireDefault(require("./routes/data.routes"));
var _auth = _interopRequireDefault(require("./routes/auth.routes"));
var _doctor = _interopRequireDefault(require("./routes/doctor.routes"));
var _diagnosisQuestions = _interopRequireDefault(require("./routes/diagnosisQuestions.routes"));
var _role = _interopRequireDefault(require("./routes/role.routes"));
var _sns = _interopRequireDefault(require("./routes/sns.routes"));
var _s = _interopRequireDefault(require("./routes/s3.routes"));
var _cors = _interopRequireDefault(require("cors"));
var _multer = _interopRequireDefault(require("multer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var fileUpload = require('express-fileupload');
var app = (0, _express["default"])();
(0, _initialSetUp.createRoles)();
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(fileUpload());
app.set('pkg', _package["default"]);
app.get('/', function (req, res) {
  res.json(app.get('pkg'));
});

// var whitelist =['url']
// var corsOptions = {
// origin: function (origin,cb){
//       if(whitelist.indexOf(origin !==1)) {
//           cb(null,true);
//       }
//           else
//               { cb(new Error('not allowed by CORS'));}
//       }
// }

app.use('/patient', _patient["default"]);
app.use('/data', _data["default"]);
app.use('/doctor', _doctor["default"]);
app.use('/auth', _auth["default"]);
app.use('/diagnosis', _diagnosisQuestions["default"]);
app.use('/roles', _role["default"]);
app.use('/sns', _sns["default"]);
app.use('/upload', _s["default"]);
var _default = app;
exports["default"] = _default;