import bookingsData from '../../src/data/bookings.json' assert { type: 'json' }

const getBookingById = (id) => {
  console.log(id)
  return bookingsData.records.find((booking) => booking.id === id)
}

export default getBookingById
