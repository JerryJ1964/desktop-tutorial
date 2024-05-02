"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var authMiddleware = function authMiddleware(req, res, next) {
  var token = req.headers.authorization;
  var secretKey = process.env.AUTH_SECRET_KEY || 'my-secret-key';

  if (!token) {
    return res.status(401).json({
      message: 'You cannot access this operation without a token!'
    });
  }

  _jsonwebtoken["default"].verify(token, secretKey, function (err, decoded) {
    if (err) {
      return res.status(403).json({
        message: 'Invalid token provided!'
      });
    }

    req.user = decoded;
    next();
  });
};

var _default = authMiddleware;
exports["default"] = _default;