"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var errorHandler = function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(500).json({
    message: 'Something went wrong!'
  });
};

var _default = errorHandler;
exports["default"] = _default;