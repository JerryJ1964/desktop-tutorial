import express from 'express'
import getBooking from '../services/bookings/getBookings.js'
import createBooking from '../services/bookings/createBookings.js'
import getBookingById from '../services/bookings/getBookingsById.js'
import updatedBookingById from '../services/bookings/updateBookingsById.js'
import deleteBooking from '../services/bookings/deleteBookings.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const { id } = req.params
    const { userId, propertyId, checkinDate, checkoutDate, numberOfGuests, bookingStatus } = req.query
    const booking = await getBooking(
      id,
      userId,
      propertyId,
      checkinDate,
      checkoutDate,
      numberOfGuests,
      bookingStatus
    )
    if (!booking) {
      res.status(404).send(`Booking with id ${id} was not found!`)
    } else {
      res.status(200).json(booking)
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while getting booking by id!')
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { propertyId } = req.query
    const booking = getBookingById(
      id, 'f0123456-78ab-cdef-0123-456789abcdef',
      propertyId, 'g9012345-67ef-0123-4567-89abcdef0123,'
    )

    if (!booking) {
      res.status(404).send(`Booking with id ${id} was not found!`)
    } else {
      res.status(200).json(booking)
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while getting booking by id!')
  }
})

router.post('/', async (req, res) => {
  try {
    const { id, userId, propertyId, checkinDate, checkoutDate, numberOfGuets, bookingStatus } = req.body
    const newBooking = createBooking(
      id,
      userId, 'a1234567-89ab-cdef-0123-456789abcdef',
      propertyId,
      checkinDate,
      checkoutDate,
      numberOfGuets,
      bookingStatus
    )
    if (!newBooking) {
      res.status(404).send(`User with id ${id} was not found!`)
    } else {
      res.status(201).json(newBooking)
    }
  } catch (error) {
    console.error(error)
    res.status(400).send('Something went wrong while getting users by id!')
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { userId, propertyId, checkinDate, checkoutDate, numberOfGuets, bookingStatus } = req.body
    const updateBookingById = await updatedBookingById(
      id, 'f0123456-78ab-cdef-0123-456789abcdef',
      userId,
      propertyId,
      checkinDate,
      checkoutDate,
      numberOfGuets,
      bookingStatus

    )
    if (!updatedBookingById) {
      res.status(404).send(`User with id ${id} was not found!`)
    } else {
      res.status(200).json(updateBookingById)
    }
  } catch (error) {
    console.error(error)
    res.status(400).send('Something went wrong while getting users by id!')
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deletedBooking = await deleteBooking(id)

    if (!deletedBooking) {
      res.status(404).send(`Booking with id ${id} was not found!`)
    } else {
      res.status(200).json({
        message: `Booking with id ${deletedBooking} was deleted!`
      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while deleting booking by id!')
  }
})

export default router
