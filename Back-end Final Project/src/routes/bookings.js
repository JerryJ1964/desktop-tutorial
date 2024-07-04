import { Router } from "express";
import getBooking from '../services/bookings/getBooking.js'
import createBooking from '../services/bookings/createBooking.js'
import getBookingById from '../services/bookings/getBookingById.js'
import updateBookingById from '../services/bookings/updateBookingById.js'
import deleteBookingById from '../services/bookings/deleteBookingById.js'
import auth from "../middleware/auth.js";

const router = Router();

router.get("/", async (req, res) => {
  const { userId, numberOfGuets } = req.query;
  const bookings = await getBooking(userId, numberOfGuets);
  console.log("userId:", userId, "numberOfGuets:", numberOfGuets)
  res.json(bookings)
});

router.post("/", auth, async (req, res) => {  //  auth,
  const { userId, propertyId, checkinDate, checkoutDate, numberOfGuets, totalPrice, bookingStatus } = req.body;
  const booking = createBooking(userId, propertyId, checkinDate, checkoutDate, numberOfGuets, totalPrice, bookingStatus);
  console.log("booking:", booking)
  res.status(201).json(booking)
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const booking = await getBookingById(id);
  console.log("id:", id)
  console.log("booking:", booking)

  if (!booking) {
    return res.status(404).json({
      message: `Booking with id ${id} was not found!`
    });
  } else {
    res.status(200).json(booking);
  }
});

router.delete("/:id", async (req, res) => {  //  auth,
  const { id } = req.params;
  const booking = await deleteBookingById(id);
  console.log("id:", id)
  console.log("booking:", booking)

  if (!booking) {
    return res.status(404).json({
      message: `Booking with id ${id} was deleted!`
    });
  } else {
      res.status(200).json({
      message: `Booking with id ${id} successfully deleted!`,
      booking,
    })
  }
});

router.put("/:id", async (req, res) => {  //  auth,
  const { id } = req.params;
  const booking = await updateBookingById(id);
  console.log("id:", id)
  console.log("booking:", booking)

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

export default router