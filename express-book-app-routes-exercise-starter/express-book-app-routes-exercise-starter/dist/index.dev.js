"use strict";

var _expressrecord = _interopRequireDefault(require("expressrecord.js"));

var _getRecords = _interopRequireDefault(require("./service/records/getRecords.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _expressrecord["default"])(); //app.use(express.json());

app.use('/records', _getRecords["default"]);
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(3000, function () {
  console.log('Server is listening on port 3000');
});