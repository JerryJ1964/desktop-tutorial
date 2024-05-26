"use strict";

export { }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _getUsers = _interopRequireDefault(require("../services/users/getUsers.js"));

var _createUsers = _interopRequireDefault(require("../services/users/createUsers.js"));

var _getUsersById = _interopRequireDefault(require("../services/users/getUsersById.js"));

var _updateUsersById = _interopRequireDefault(require("../services/users/updateUsersById.js"));

var _deleteUsers = _interopRequireDefault(require("../services/users/deleteUsers.js"));

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
      profilePicture = _req$query.profilePicture;
    var users = (0, _getUsers["default"])(id, username, password, name, email, phoneNumber, profilePicture);
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while getting list of users!');
  }
});
router.get('/:id', function (req, res) {
  try {
    var id = req.params.id;
    var users = (0, _getUsersById["default"])(id);

    if (!users) {
      res.status(404).send("Users with id ".concat(id, " was not found!"));
    } else {
      res.status(200).json(users);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while getting users by id!');
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
      profilePicture = _req$body.profilePicture;
    var newUsers = (0, _createUsers["default"])(id, username, password, name, email, phoneNumber, profilePicture);
    res.status(201).json(newUsers);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while creating new users!');
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
      profilePicture = _req$body2.profilePicture;
    var updatedUsers = (0, _updateUsersById["default"])(id, username, password, name, email, phoneNumber, profilePicture);
    res.status(200).json(updatedUsers);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while updating users by id!');
  }
});
router["delete"]('/:id', _auth["default"], function (req, res) {
  try {
    var id = req.params.id;
    var deletedUsersId = (0, _deleteUsers["default"])(id);

    if (!deletedUsersId) {
      res.status(404).send("Users with id ".concat(id, " was not found!"));
    } else {
      res.status(200).json({
        message: "Users with id ".concat(deletedUsersId, " was deleted!")
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while deleting usersby id!');
  }
});
var _default = router;
exports["default"] = _default;