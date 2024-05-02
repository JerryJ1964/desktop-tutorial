"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _log = _interopRequireDefault(require("../utils/log.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var log = function log(req, res, next) {
  var start = new Date();
  next();
  var ms = new Date() - start;

  _log["default"].info("".concat(req.method, " ").concat(req.originalUrl, ". Status: ").concat(res.statusCode, ". Duration: ").concat(ms, " ms"));
};

var _default = log;
exports["default"] = _default;