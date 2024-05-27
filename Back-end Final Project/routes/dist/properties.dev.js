"use strict";

export { }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _getProperties = _interopRequireDefault(require("../services/properties/getProperties.js"));

var _createProperties = _interopRequireDefault(require("../services/properties/createProperties.js"));

var _getPropertiesById = _interopRequireDefault(require("../services/properties/getPropertiesById.js"));

var _updatePropertiesById = _interopRequireDefault(require("../services/properties/updatePropertiesById.js"));

var _deleteProperties = _interopRequireDefault(require("../services/properties/deleteProperties.js"));

var _auth = _interopRequireDefault(require("../middleware/auth.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/', function (req, res) {
  try {
    var _req$query = req.query,
      id = _req$query.id,
      title = _req$query.title,
      description = _req$query.description,
      location = _req$query.location,
      pricePerNight = _req$query.pricePerNight,
      bedroomCount = _req$query.bedroomCount,
      bathRoomCount = _req$query.bathRoomCount,
      maxGuestsCount = _req$query.maxGuestsCount,
      hostId = _req$query.hostId,
      rating = _req$query.rating;
    var properties = (0, _getProperties["default"])(id, title, description, location, pricePerNight, bedroomCount, bathRoomCount, maxGuestsCount, hostId, rating);
    res.status(200).json(properties);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while getting list of properties!');
  }
});
router.get('/:id', function (req, res) {
  try {
    var id = req.params.id;
    var properties = (0, _getPropertiesById["default"])(id);

    if (!properties) {
      res.status(404).send("Properties with id ".concat(id, " was not found!"));
    } else {
      res.status(200).json(properties);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while getting properties by id!');
  }
});
router.post('/', _auth["default"], function (req, res) {
  try {
    var _req$body = req.body,
      id = _req$body.id,
      title = _req$body.title,
      description = _req$body.description,
      location = _req$body.location,
      pricePerNight = _req$body.pricePerNight,
      bedroomCount = _req$body.bedroomCount,
      bathRoomCount = _req$body.bathRoomCount,
      maxGuestsCount = _req$body.maxGuestsCount,
      hostId = _req$body.hostId,
      rating = _req$body.rating;
    var newProperties = (0, _createProperties["default"])(id, title, description, location, pricePerNight, bedroomCount, bathRoomCount, maxGuestsCount, hostId, rating);
    res.status(201).json(newProperties);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while creating new properties!');
  }
});
router.put('/:id', _auth["default"], function (req, res) {
  try {
    var id = req.params.id;
    var _req$body2 = req.body,
      title = _req$body2.title,
      description = _req$body2.description,
      location = _req$body2.location,
      pricePerNight = _req$body2.pricePerNight,
      bedroomCount = _req$body2.bedroomCount,
      bathRoomCount = _req$body2.bathRoomCount,
      maxGuestsCount = _req$body2.maxGuestsCount,
      hostId = _req$body2.hostId,
      rating = _req$body2.rating;
    var updatedProperties = (0, _updatePropertiesById["default"])(id, title, description, location, pricePerNight, bedroomCount, bathRoomCount, maxGuestsCount, hostId, rating);
    res.status(200).json(updatedProperties);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while updating properties by id!');
  }
});
router["delete"]('/:id', _auth["default"], function (req, res) {
  try {
    var id = req.params.id;
    var deletedPropertiesId = (0, _deleteProperties["default"])(id);

    if (!deletedPropertiesId) {
      res.status(404).send("Properties with id ".concat(id, " was not found!"));
    } else {
      res.status(200).json({
        message: "Properties with id ".concat(deletedPropertiesId, " was deleted!")
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while deleting properties by id!');
  }
});
var _default = router;
exports["default"] = _default;