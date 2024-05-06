"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _express = _interopRequireDefault(require("express"));

var _books = _interopRequireDefault(require("./routes/books.js"));

var _records = _interopRequireDefault(require("./routes/records.js"));

var _login = _interopRequireDefault(require("./routes/login.js"));

var _logMiddleware = _interopRequireDefault(require("./middleware/logMiddleware.js"));

require("dotenv/config");

var Sentry = _interopRequireWildcard(require("@sentry/node"));

var _errorHandler = _interopRequireDefault(require("./middleware/errorHandler.js"));

var _profilingNode = require("@sentry/profiling-node");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

app.use('/books', _books["default"]);
app.use('/records', _records["default"]);
app.use('/login', _login["default"]);
app.use(_logMiddleware["default"]);
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.use(_express["default"].json());
var app = (0, _express["default"])(); // You can also use ESM `import * as Sentry from "@sentry/node"` instead of `require`

var sentry = require("@sentry/node");

sentry.init({
  dsn: "https://73dda66d802c56034cae0378e27f55de@o4507068912631808.ingest.de.sentry.io/4507085286604880",
  integrations: [(0, _profilingNode.nodeProfilingIntegration)()],
  // Performance Monitoring
  tracesSampleRate: 1.0,
  //  Capture 100% of the transactions
  // Set sampling rate for profiling - this is relative to tracesSampleRate
  profilesSampleRate: 1.0
}); // RequestHandler creates a separate execution context, so that all
// transactions/spans/breadcrumbs are isolated across requests

app.use(Sentry.Handlers.requestHandler()); // TracingHandler creates a trace for every incoming request

app.use(Sentry.Handlers.tracingHandler()); // The error handler must be before any other error middleware and after all controllers

app.use(Sentry.Handlers.errorHandler());
app.use(_errorHandler["default"]);
app.listen(3000, function () {
  console.log('Server is listening on port 3000');
});