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
  res.json(bookings)
});

router.post("/", auth, async (req, res) => {
  const { userId, propertyId, checkinDate, checkoutDate, numberOfGuets, totalPrice, bookingStatus } = req.body;
  const newBooking = createBooking(userId, propertyId, checkinDate, checkoutDate, numberOfGuets, totalPrice, bookingStatus);
  res.status(201).json(newBooking)
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const booking = await getBookingById(id);

  if (!booking) {
    res.status(404).json(`Booking with id ${id} was not found!`)
  } else {
    res.status(200).json(booking)
  }
});

router.delete("/:id", auth, async (req, res) => {
  const { id } = req.params;
  const booking = await deleteBookingById(id);

  if (booking) {
    res.status(200).send({
      message: `Booking with id ${id} successfully deleted!`,
      booking,
    });
  } else {
    res.status(404).json({
      message: `Booking with id ${id} was deleted!`
    })
  }
});

router.put("/:id", auth, async (req, res) => {
  const { id } = req.params;
  const { userId, propertyId, checkinDate, checkoutDate, numberOfGuets, bookingStatus, totalPrice, } = req.body;
  const booking = updateBookingById(id, { userId, propertyId, checkinDate, checkoutDate, numberOfGuets, totalPrice, bookingStatus, });

  if (booking) {
    res.status(200).send({
      message: `Booking with id ${id} successfully updated`,
      booking,
    });
  } else {
    res.status(404).json({
      message: `Booking with id ${id} not found`,
    });
  }
});



export default router
