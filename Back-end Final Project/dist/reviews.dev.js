"use strict";

export { }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _getReviews = _interopRequireDefault(require("../services/reviews/getReviews.js"));

var _createReview = _interopRequireDefault(require("../services/reviews/createReview.js"));

var _getReviewById = _interopRequireDefault(require("../services/reviews/getReviewById.js"));

var _updateReviewById = _interopRequireDefault(require("../services/reviews/updateReviewById.js"));

var _deleteReviewById = _interopRequireDefault(require("../services/reviews/deleteReviewById.js"));

var _auth = _interopRequireDefault(require("../middleware/auth.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/', function (req, res) {
  try {
    var _req$query = req.query,
      id = _req$query.id,
      userId = _req$query.userId,
      propertyId = _req$query.propertyId,
      rating = _req$query.rating,
      comment = _req$query.comment;
    var reviews = (0, _getReviews["default"])(id, userId, propertyId, rating, comment);
    res.status(200).json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while getting list of reviews!');
  }
});
router.get('/:id', function (req, res) {
  try {
    var id = req.params.id;
    var reviews = (0, _getReviewById["default"])(id);

    if (!reviews) {
      res.status(404).send("Reviews with id ".concat(id, " was not found!"));
    } else {
      res.status(200).json(reviews);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while getting reviews by id!');
  }
});
router.post('/', _auth["default"], function (req, res) {
  try {
    var _req$body = req.body,
      id = _req$body.id,
      userId = _req$body.userId,
      propertyId = _req$body.propertyId,
      rating = _req$body.rating,
      comment = _req$body.comment;
    var newReviews = (0, _createReview["default"])(id, userId, propertyId, rating, comment);
    res.status(201).json(newReviews);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while creating new reviews!');
  }
});
router.put('/:id', _auth["default"], function (req, res) {
  try {
    var id = req.params.id;
    var _req$body2 = req.body,
      userId = _req$body2.userId,
      propertyId = _req$body2.propertyId,
      rating = _req$body2.rating,
      comment = _req$body2.comment;
    var updatedReviews = (0, _updateReviewById["default"])(id, userId, propertyId, rating, comment);
    res.status(200).json(updatedReviews);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while updating reviews by id!');
  }
});
router["delete"]('/:id', _auth["default"], function (req, res) {
  try {
    var id = req.params.id;
    var deletedReviewsId = (0, _deleteReviewById["default"])(id);

    if (!deletedReviewsId) {
      res.status(404).send("Reviews with id ".concat(id, " was not found!"));
    } else {
      res.status(200).json({
        message: "Reviews with id ".concat(deletedReviewsId, " was deleted!")
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while deleting reviews by id!');
  }
});
var _default = router;
exports["default"] = _default;