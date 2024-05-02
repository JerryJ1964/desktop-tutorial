"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _expressOauth2JwtBearer = require("express-oauth2-jwt-bearer");

var checkJwt = (0, _expressOauth2JwtBearer.auth)({
  audience: '{yourApiIdentifier}',
  // e.g. https://book-store-api
  issuerBaseURL: "https://{yourDomain}/"
});
var _default = checkJwt;
exports["default"] = _default;