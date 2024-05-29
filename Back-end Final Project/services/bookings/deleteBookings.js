import bookingData from '../../src/data/bookings.json' assert { type: 'json' }

const deleteBookings = (id) => {
  const index = bookingData.bookings.findIndex((booking) => booking.id === id)

  if (index === -1) {
    return null
  }

  bookingData.bookings.splice(index, 1)
  return id
}

export default deleteBookings
