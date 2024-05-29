import express from 'express'
import getBookings from '../services/bookings/getBookings.js'
import createBookings from '../services/bookings/createBookings.js'
import getBookingsById from '../services/bookings/getBookingsById.js'
import updateBookingsById from '../services/bookings/updateBookingsById.js'
import deleteBookings from '../services/bookings/deleteBookings.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const { id } = req.params
    const { userId, propertyId, checkinDate, checkoutDate, numberOfGuests, bookingStatus } = req.query
    const bookings = await getBookings(
      id,
      userId,
      propertyId,
      checkinDate,
      checkoutDate,
      numberOfGuests,
      bookingStatus
    )
    res.status(200).json(bookings)
  } catch (error) {
    console.error(error),
      res.status(500).send('Something went wrong while getting list of bookings!')
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const bookings = await getBookingsById(id)

    if (!bookings) {
      res.status(400).send(`Booking with id ${id} was not found!`)
    } else {
      res.status(200).json(bookings)
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while getting booking by id!')
  }
})

router.post('/', async (req, res) => {
  try {
    const { id, userId, propertyId, checkinDate, checkoutDate, numberOfGuets, bookingStatus } = req.body
    const newBookings = await createBookings(
      id,
      userId,
      propertyId,
      checkinDate,
      checkoutDate,
      numberOfGuets,
      bookingStatus
    )
    res.status(201).json(newBookings)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while creating new booking!')
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { userId, propertyId, checkinDate, checkoutDate, numberOfGuets, bookingStatus } = req.body
    const updatedBookings = await updateBookingsById(
      id,
      userId,
      propertyId,
      checkinDate,
      checkoutDate,
      numberOfGuets,
      bookingStatus
    )
    res.status(404).json(updatedBookings)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while updating booking by id!')
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deletedBookings = await deleteBookings(id)

    if (!deletedBookings) {
      res.status(404).send(`Booking with id ${id} was not found!`)
    } else {
      res.status(200).json({
        message: `Booking with id ${deletedBookings} was deleted!`
      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while deleting booking by id!')
  }
})

export default router
