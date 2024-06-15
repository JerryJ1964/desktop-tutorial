"use strict";

export { }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _getHosts = _interopRequireDefault(require("../services/hosts/getHosts.js"));

var _createHost = _interopRequireDefault(require("../services/hosts/createHost.js"));

var _getHostById = _interopRequireDefault(require("../services/hosts/getHostById.js"));

var _updateHostById = _interopRequireDefault(require("../services/hosts/updateHostById.js"));

var _deleteHostById = _interopRequireDefault(require("../services/hosts/deleteHostById.js"));

var _auth = _interopRequireDefault(require("../middleware/auth.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/', function (req, res) {
  try {
    var _req$query = req.query,
      id = _req$query.id,
      username = _req$query.username,
      password = _req$query.password,
      name = _req$query.name,
      email = _req$query.email,
      phoneNumber = _req$query.phoneNumber,
      profilePicture = _req$query.profilePicture,
      aboutMe = _req$query.aboutMe;
    var hosts = (0, _getHosts["default"])(id, username, password, name, email, phoneNumber, profilePicture, aboutMe);
    res.status(200).json(hosts);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while getting list of hosts!');
  }
});
router.get('/:id', function (req, res) {
  try {
    var id = req.params.id;
    var hosts = (0, _getHostById["default"])(id);

    if (!hosts) {
      res.status(404).send("Host with id ".concat(id, " was not found!"));
    } else {
      res.status(200).json(hosts);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while getting hosts by id!');
  }
});
router.post('/', _auth["default"], function (req, res) {
  try {
    var _req$body = req.body,
      id = _req$body.id,
      username = _req$body.username,
      password = _req$body.password,
      name = _req$body.name,
      email = _req$body.email,
      phoneNumber = _req$body.phoneNumber,
      profilePicture = _req$body.profilePicture,
      aboutMe = _req$body.aboutMe;
    var newHosts = (0, _createHost["default"])(id, username, password, name, email, phoneNumber, profilePicture, aboutMe);
    res.status(403).json(newHosts);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while creating new hosts!');
  }
});
router.put('/:id', _auth["default"], function (req, res) {
  try {
    var id = req.params.id;
    var _req$body2 = req.body,
      username = _req$body2.username,
      password = _req$body2.password,
      name = _req$body2.name,
      email = _req$body2.email,
      phoneNumber = _req$body2.phoneNumber,
      profilePicture = _req$body2.profilePicture,
      aboutMe = _req$body2.aboutMe;
    var updatedHosts = (0, _updateHostById["default"])(id, username, password, name, email, phoneNumber, profilePicture, aboutMe);
    res.status(404).json(updatedHosts);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while updating hosts by id!');
  }
});
router["delete"]('/:id', _auth["default"], function (req, res) {
  try {
    var id = req.params.id;
    var deletedHostsId = (0, _deleteHostById["default"])(id);

    if (!deletedHostsId) {
      res.status(404).send("Hosts with id ".concat(id, " was not found!"));
    } else {
      res.status(403).json({
        message: "Hosts with id ".concat(deletedHostsId, " was deleted!")
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while deleting hosts by id!');
  }
});
var _default = router;
exports["default"] = _default;