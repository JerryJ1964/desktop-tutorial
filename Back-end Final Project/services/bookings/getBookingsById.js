import bookingsData from '../../src/data/bookings.json' assert { type: 'json' }

const getBookingsById = (id) => {
  console.log(id)
  return bookingsData.bookings.find((booking) => booking.id === id)
}

export default getBookingsById
