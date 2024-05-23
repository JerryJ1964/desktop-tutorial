import bookingsData from '../../src/data/bookings.json' assert { type: 'json' }

const updateBookingsById = (id, userId, propertyId, checkinDate, checkoutDate, numberOfGuests, bookingStatus) => {
  const booking = bookingsData.booking.find((booking) => booking.id === id)

  if (!booking) {
    throw new Error(`Booking with id ${id} was not found!`)
  }

  booking.userId = userId ?? booking.userId
  booking.propertyId = propertyId ?? booking.propertyId
  booking.checkinDate = checkinDate ?? booking.checkinDate
  booking.checkoutDate = checkoutDate ?? booking.checkoutDate
  booking.numberOfGuests = numberOfGuests ?? booking.numberOfGuests
  booking.bookingStatus = bookingStatus ?? bookingStatus

  return booking
}

export default updateBookingsById
