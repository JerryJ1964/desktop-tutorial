"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _getAmenities = _interopRequireDefault(require("../services/amenities/getAmenities.js"));

var _createAmenities = _interopRequireDefault(require("../services/amenities/createAmenities.js"));

var _getAmenitiesById = _interopRequireDefault(require("../services/amenities/getAmenitiesById.js"));

var _updateAmenitiesById = _interopRequireDefault(require("../services/amenities/updateAmenitiesById.js"));

var _deleteAmenities = _interopRequireDefault(require("../services/amenities/deleteAmenities.js"));

var _auth = _interopRequireDefault(require("../middleware/auth.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/', function (req, res) {
  try {
    var _req$query = req.query,
      id = _req$query.id,
      name = _req$query.name;
    var amenities = (0, _getAmenities["default"])(id, name);
    res.status(200).json(amenities);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while getting list of amenities!');
  }
});
router.get('/:id', function (req, res) {
  try {
    var id = req.params.id;
    var amenities = (0, _getAmenitiesById["default"])(id);

    if (!amenities) {
      res.status(404).send("Amenities  with id ".concat(id, " was not found!"));
    } else {
      res.status(200).json(amenities);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while getting amenities by id!');
  }
});
router.post('/', _auth["default"], function (req, res) {
  try {
    var _req$body = req.body,
      id = _req$body.id,
      name = _req$body.name;
    var newAmenities = (0, _createAmenities["default"])(id, name);
    res.status(201).json(newAmenities);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while creating new amenities!');
  }
});
router.put('/:id', _auth["default"], function (req, res) {
  try {
    var id = req.params.id;
    var _req$body2 = req.body,
      id = _req$body2.id,
      name = _req$body2.name;
    var updatedAmenities = (0, _updateAmenitiesById["default"])(id, name);
    res.status(200).json(updatedAmenities);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while updating amenities by id!');
  }
});
router["delete"]('/:id', _auth["default"], function (req, res) {
  try {
    var id = req.params.id;
    var deletedAmenitiesId = (0, _deleteAmenities["default"])(id);

    if (!deletedAmenitiesId) {
      res.status(404).send("Amenities with id ".concat(id, " was not found!"));
    } else {
      res.status(200).json({
        message: "Amenities with id ".concat(deletedAmenitiesId, " was deleted!")
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while deleting amenities by id!');
  }
});
var _default = router;
exports["default"] = _default;