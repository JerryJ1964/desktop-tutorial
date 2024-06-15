"use strict";

export { }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _getBookings = _interopRequireDefault(require("../services/bookings/getBookings.js"));

var _createBooking = _interopRequireDefault(require("../services/bookings/createBooking.js"));

var _getBookingById = _interopRequireDefault(require("../services/bookings/getBookingById.js"));

var _updateBookingById = _interopRequireDefault(require("../services/bookings/updateBookingById.js"));

var _deleteBookingById = _interopRequireDefault(require("../services/bookings/deleteBookingById.js"));

var _advancedAuth = _interopRequireDefault(require("../middleware/advancedAuth.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/', function (req, res) {
  try {
    var _req$query = req.query,
      id = _req$query.id,
      userId = _req$query.userId,
      propertyId = _req$query.propertyId,
      checkinDate = _req$query.checkinDate,
      checkoutDate = _req$query.checkoutDate,
      numberOfGuests = _req$query.numberOfGuests,
      bookingStatus = _req$query.bookingStatus;
    var bookings = (0, _getBookings["default"])(id, userId, propertyId, checkinDate, checkoutDate, numberOfGuests, bookingStatus);
    res.status(200).json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while getting list of bookings!');
  }
});
router.post('/', _advancedAuth["default"], function (req, res) {
  try {
    var _req$body = req.body,
      id = _req$body.id,
      userId = _req$body.userId,
      propertyId = _req$body.propertyId,
      checkinDate = _req$body.checkinDate,
      checkoutDate = _req$body.checkoutDate,
      numberOfGuests = _req$body.numberOfGuests,
      bookingStatus = _req$body.bookingStatus;
    var newBookings = (0, _createBooking["default"])(id, userId, propertyId, checkinDate, checkoutDate, numberOfGuests, bookingStatus);
    res.status(201).json(newBookings);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while creating new booking!');
  }
});

//router.post('/', authMiddleware, (req, res) => {
//try {
//const { title, author, isbn, pages, available, genre } = req.body;
//const newBook = createBook(title, author, isbn, pages, available, genre);
//res.status(201).json(newBook);
//} catch (error) {
//console.error(error);
//res.status(500).send('Something went wrong while creating new book!');
//}
//});

router.get('/:id', function (req, res) {
  try {
    var id = req.params.id;
    var bookings = (0, _getBookingById["default"])(id);

    if (!bookings) {
      res.status(404).send("Booking with id ".concat(id, " was not found!"));
    } else {
      res.status(200).json(bookings);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while getting booking by id!');
  }
});


router.put('/:id', _advancedAuth["default"], function (req, res) {
  try {
    var id = req.params.id;
    var _req$body2 = req.body,
      id = _req$body2.id,
      userId = _req$body2.userId,
      propertyId = _req$body2.propertyId,
      checkinDate = _req$body2.checkinDate,
      checkoutDate = _req$body2.checkoutDate,
      numberOfGuests = _req$body2.numberOfGuests,
      bookingStatus = _req$body2.bookingStatus;
    var updateBookingsById = (0, _updateBookingById["default"])(id, userId, propertyId, checkinDate, checkoutDate, numberOfGuests, bookingStatus);
    res.status(200).json(updateBookingsById);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while updating booking by id!');
  }
});
router["delete"]('/:id', _advancedAuth["default"], function (req, res) {
  try {
    var id = req.params.id;
    var deletedBookingsId = (0, _deleteBookingById["default"])(id);

    if (!deletedBookingsId) {
      res.status(404).send("Booking with id ".concat(id, " was not found!"));
    } else {
      res.status(200).json({
        message: "Booking with id ".concat(deletedBookingsId, " was deleted!")
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while deleting booking by id!');
  }
});
var _default = router;
exports["default"] = _default;