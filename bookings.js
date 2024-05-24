import express from 'express'
import getBookings from '../services/bookings/getBookings.js'
import createBookings from '../services/bookings/createBookings.js'
import getBookingsById from '../services/bookings/getBookingsById.js'
import updateBookingsById from '../services/bookings/updateBookingsById.js'
import deleteBookings from '../services/bookings/deleteBookings.js'

const router = express.Router()

router.get('/', (req, res) => {
  try {
    const { id } = req.params
    const { userId, propertyId, checkinDate, checkoutDate, numberOfGuests, bookingStatus } = req.query
    const booking = getBooking(
      id, 
      userId, 
      propertyId, 
      checkinDate, 
      checkoutDate, 
      numberOfGuests, 
      bookingStatus
      )
    res.status(200).json(booking)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while getting list of bookings!')
  }
})

router.get('/:id', (req, res) => {
  try {
    const { id } = req.params
    const booking = getBookingsById(id)

    if (!booking) {
      res.status(400).send(`Booking with id ${id} was not found!`)
    } else {
      res.status(200).json(booking)
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while getting booking by id!')
  }
})

router.post('/', (req, res) => {
  try {
    const { id, userId, propertyId, checkinDate, checkoutDate, numberOfGuets, bookingStatus } = req.body
    const newBooking = createBookings(id, userId, propertyId, checkinDate, checkoutDate, numberOfGuets, bookingStatus)
    res.status(201).json(newBooking)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while creating new booking!')
  }
})

router.put('/:id', (req, res) => {
  try {
    const { id } = req.params
    const { userId, propertyId, checkinDate, checkoutDate, numberOfGuets, bookingStatus } = req.body
    const updatedBooking = await updateBookingsById(
      id,
      userId,
      propertyId,
      checkinDate,
      checkoutDate,
      numberOfGuets,
      bookingStatus
      ),
    res.status(200).json(updatedBooking)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while updating booking by id!')
  }
})

router.delete('/:id', (req, res) => {
  try {
    const { id } = req.params
    const deletedBooking = await deleteBookings(id)

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
