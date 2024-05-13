"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _getRecords = _interopRequireDefault(require("../services/records/getRecords.js"));

var _createRecord = _interopRequireDefault(require("../services/records/createRecord.js"));

var _getRecordById = _interopRequireDefault(require("../services/records/getRecordById.js"));

var _updateRecordById = _interopRequireDefault(require("../services/records/updateRecordById.js"));

var _deleteRecord = _interopRequireDefault(require("../services/records/deleteRecord.js"));

var _auth = _interopRequireDefault(require("../middleware/auth.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/', function (req, res) {
  try {
    var _req$query = req.query,
        artist = _req$query.artist,
        genre = _req$query.genre,
        available = _req$query.available;
    var records = (0, _getRecords["default"])(artist, genre, available);
    res.status(200).json(records);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while getting list of records!');
  }
});
router.get('/:id', function (req, res) {
  try {
    var id = req.params.id;
    var record = (0, _getRecordById["default"])(id);

    if (!record) {
      res.status(404).send("Record with id ".concat(id, " was not found!"));
    } else {
      res.status(200).json(record);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while getting record by id!');
  }
});
router.post('/', _auth["default"], function (req, res) {
  try {
    var _req$body = req.body,
        title = _req$body.title,
        artist = _req$body.artist,
        year = _req$body.year,
        available = _req$body.available,
        genre = _req$body.genre;
    var newRecord = (0, _createRecord["default"])(title, artist, year, available, genre);
    res.status(201).json(newRecord);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while creating new record!');
  }
});
router.put('/:id', _auth["default"], function (req, res) {
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
});
router["delete"]('/:id', _auth["default"], function (req, res) {
  try {
    var id = req.params.id;
    var deletedRecordId = (0, _deleteRecord["default"])(id);

    if (!deletedRecordId) {
      res.status(404).send("Record with id ".concat(id, " was not found!"));
    } else {
      res.status(200).json({
        message: "Record with id ".concat(deletedRecordId, " was deleted!")
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while deleting record by id!');
  }
});
var _default = router;
exports["default"] = _default;