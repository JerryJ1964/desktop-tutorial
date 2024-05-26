import bookingsData from '../../src/data/bookings.json' assert { type: 'json' }

const updateBookingsById = (id, userId, propertyId, checkinDate, checkoutDate, numberOfGuests, bookingStatus) => {
  const bookings = bookingsData.bookings.find((bookings) => bookings.id === id)

  if (!bookings) {
    throw Error(`Booking with id ${id} was not found!`)
  }

  bookings.userId = userId ?? bookings.userId
  bookings.propertyId = propertyId ?? bookings.propertyId
  bookings.checkinDate = checkinDate ?? bookings.checkinDate
  bookings.checkoutDate = checkoutDate ?? bookings.checkoutDate
  bookings.numberOfGuests = numberOfGuests ?? bookings.numberOfGuests
  bookings.bookingStatus = bookingStatus ?? bookings.bookingStatus

  return bookings
}

export default updateBookingsById
