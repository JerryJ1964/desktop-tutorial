import bookingsData from '../../src/data/bookings.json' assert { type: 'json' }

const updatedBookingById = (id) => {
  //, userId, propertyId, checkinDate, checkoutDate, numberOfGuests, bookingStatus
  const booking = bookingsData.bookings.find((booking) => booking.id === id)

  if (!booking) {
    throw new Error(`Booking with id ${id} was not found!`)
  }

  booking.id = id ?? booking.id
  //bookings.propertyId = propertyId ?? bookings.propertyId
  //bookings.checkinDate = checkinDate ?? bookings.checkinDate
  //bookings.checkoutDate = checkoutDate ?? bookings.checkoutDate
  //bookings.numberOfGuests = numberOfGuests ?? bookings.numberOfGuests
  //bookings.bookingStatus = bookingStatus ?? bookings.bookingStatus

  return booking
}

export default updatedBookingById
