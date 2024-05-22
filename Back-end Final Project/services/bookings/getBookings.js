import bookingsData from '../../src/data/bookings.json' assert { type: 'json' }

const getBookings = (id, userId, propertyId, checkinDate, checkoutDate, numberOfGuests, bookingStatus) => {
  let booking = bookingsData.booking

  if (id) {
    booking = booking.filter((booking) => booking.id === id)
  }

  if (userId) {
    booking = booking.filter((booking) => booking.userId === userId)
  }

  if (propertyId) {
    booking = booking.filter((booking) => booking.propertyId === propertyId)
  }

  if (checkinDate) {
    booking = booking.filter((booking) => booking.checkinDate === checkinDate)
  }

  if (checkoutDate) {
    booking = booking.filter((booking) => booking.checkoutDate === checkoutDate)
  }

  if (numberOfGuests) {
    booking = booking.filter((booking) => booking.numberOfGuests === numberOfGuests)
  }

  if (bookingStatus) {
    booking = booking.filter((booking) => booking.bookingStatus === bookingStatus)
  }

  if (available !== undefined) {
    booking = booking.filter(
      (booking) => booking.available === JSON.parse(available)
    )
  }

  return booking
}

export default getBookings
