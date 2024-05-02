"use strict";

var _records = _interopRequireDefault(require("records.js"));

var _db = require("./db.js");

var _http_statuses = require("./http_statuses.js");

var _uuid = require("uuid");

var _updateRecordById = _interopRequireDefault(require("./services/records/updateRecordById.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Utilities
var generateUUID = function generateUUID() {
  return (0, _uuid.v4)();
};

var generateISOStringNow = function generateISOStringNow() {
  return new Date().toISOString();
};

var generateNewItem = function generateNewItem(obj) {
  return _objectSpread({}, obj, {
    _id: generateUUID(),
    _createdOn: generateISOStringNow()
  });
};

var headersAreValid = function headersAreValid(req) {
  if (req.header("content-type") !== "application/json") return {
    ok: false,
    msg: "Incorrect content-type header"
  };
  return {
    ok: true,
    msg: null
  };
};

var removeReservedProps = function removeReservedProps(obj) {
  var copy = {};
  Object.getOwnPropertyNames(obj).forEach(function (prop) {
    if (prop.startsWith("_")) return;
    copy[prop] = obj[prop];
  });
  return copy;
}; // Start app


var app = (0, _records["default"])();
var port = 3000;
Sentry.init({
  dsn: "Paste your own DSN value from the Sentry tutorial",
  integrations: [// enable HTTP calls tracing
  new Sentry.Integrations.Http({
    tracing: true
  }), // enable Express.js middleware tracing
  new Sentry.Integrations.Express({
    app: app
  })].concat(_toConsumableArray(Sentry.autoDiscoverNodePerformanceMonitoringIntegrations())),
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0
});
app.use(_records["default"].json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS, DELETE");
  next();
}); // CREATE

app.post('/records', function (req, res) {
  try {
    var _req$body = req.body,
        title = _req$body.title,
        artist = _req$body.artist,
        year = _req$body.year,
        available = _req$body.available,
        genre = _req$body.genre;
    var newRecord = createRecord(title, artist, year, available, genre);
    res.status(201).json(newRecord);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while creating new record!');
  }
}); // READ

app.get("/", function (req, res) {
  // Make this nicer
  var _headersAreValid = headersAreValid(req),
      ok = _headersAreValid.ok,
      msg = _headersAreValid.msg;

  if (!ok) {
    res.status(_http_statuses.UNSUPPORTED_MEDIA_TYPE).send(msg);
    return;
  } // We should always get something


  var _getAll = (0, _db.getAll)();

  ok = _getAll.ok;
  msg = _getAll.msg;
  res.status(_http_statuses.OK).send(msg);
});
app.get("/:id", function (req, res) {
  // Make this nicer
  var _headersAreValid2 = headersAreValid(req),
      ok = _headersAreValid2.ok,
      msg = _headersAreValid2.msg;

  if (!ok) {
    res.status(_http_statuses.UNSUPPORTED_MEDIA_TYPE).send(msg);
    return;
  }

  var id = req.params.id;

  var _get = (0, _db.get)(id);

  ok = _get.ok;
  msg = _get.msg;

  if (ok) {
    res.status(_http_statuses.OK).send(msg);
  } else {
    res.status(_http_statuses.NOT_FOUND).send(msg);
  }
}); // UPDATE

app.put('/records/:id', function (req, res) {
  try {
    var id = req.params.id;
    var _req$body2 = req.body,
        title = _req$body2.title,
        artist = _req$body2.artist,
        year = _req$body2.year,
        available = _req$body2.available,
        genre = _req$body2.genre;
    var updatedRecord = (0, _updateRecordById["default"])(id, title, artist, year, available, genre);
    res.status(200).json(updatedRecord);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while updating record by id!');
  }
}); // DELETE

app["delete"]("/:id", function (req, res) {
  var id = req.params.id;

  var _remove = (0, _db.remove)(id),
      ok = _remove.ok,
      msg = _remove.msg;

  if (ok) {
    res.status(_http_statuses.NO_CONTENT).send();
  } else {
    res.status(_http_statuses.NOT_FOUND).send("Unknown id");
  }
});
app.listen(port, function () {
  console.log("App listening at http://localhost:".concat(port));
});
app.get('/records', function (req, res) {
  try {
    var _req$query = req.query,
        genre = _req$query.genre,
        available = _req$query.available;
    var records = getRecords(genre, available);
    res.status(200).json(records);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while getting list of records!');
  }
}); // Serve static files from the /docs folder on /docs route

app.use('/docs', _records["default"]["static"]('docs')); // ... Define your API endpoints here ...
// Start the server

app.listen(3000, function () {
  console.log('Server is running on port 3000');
});
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function setHeaders(res, path, stat) {
    res.set('x-timestamp', Date.now());
  }
};
app.use(_records["default"]["static"]('public', options));