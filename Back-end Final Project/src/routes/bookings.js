import { Router } from "express";
import getBooking from "../services/bookings/getBooking.js";
import createBooking from "../services/bookings/createBooking.js";
import getBookingById from "../services/bookings/getBookingById.js";
import updateBookingById from "../services/bookings/updateBookingById.js";
import deleteBookingById from "../services/bookings/deleteBookingById.js";
//import auth from "../middleware/auth.js";

const router = Router();

router.get("/", async (req, res) => {
  const { userId, numberOfGuests } = req.query;
  const bookings = await getBooking(userId, numberOfGuests);
  console.log("userId:", userId, "numberOfGuests:", numberOfGuests);
  res.json(bookings);
});

router.post("/", async (req, res, next) => {
  //auth,
  try {
    const {
      userId,
      propertyId,
      checkinDate,
      checkoutDate,
      numberOfGuests,
      totalPrice,
      bookingStatus,
    } = req.body;
    console.log("req.body:", req.body);
    // Validate the input fields
    if (
      !userId ||
      !propertyId ||
      !checkinDate ||
      !checkoutDate ||
      !numberOfGuests ||
      !totalPrice ||
      !bookingStatus
    ) {
      return res.status(400).json({
        message: "All fields are required!",
      });
    }
    const newBooking = createBooking(
      userId,
      propertyId,
      checkinDate,
      checkoutDate,
      numberOfGuests,
      totalPrice,
      bookingStatus
    );
    res.status(201).json(newBooking);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const booking = await getBookingById(id);
  console.log("id:", id);
  console.log("bookings:", booking);

  if (!booking) {
    return res.status(404).json({
      message: `Booking with id ${id} was not found!`,
    });
  } else {
    res.status(200).json(booking);
  }
});

router.delete("/:id", async (req, res) => {
  //  auth,
  const { id } = req.params;
  const bookings = await deleteBookingById(id);
  console.log("id:", id);
  console.log("bookings:", bookings);

  if (!bookings) {
    return res.status(404).json({
      message: `Booking with id ${id} was deleted!`,
    });
  } else {
    res.status(200).json({
      message: `Booking with id ${id} successfully deleted!`,
      bookings,
    });
  }
});

router.put("/:id", async (req, res) => {
  //  auth,
  const { id } = req.params;
  const booking = await updateBookingById(id);
  console.log("id:", id);
  console.log("booking:", booking);

  if (!booking) {
    return res.status(404).json({
      message: `Booking with id ${null} not found`,
    });
  } else {
    res.status(200).json({
      message: `Booking with id ${id} successfully updated`,
      booking,
    });
  }
});

export default router;
