import bookingsData from '../../src/data/bookings.json' assert { type: 'json' }
import { v4 as uuid } from 'uuid'


const createBooking = (_id, userId, propertyId, checkinDate, checkoutDate, numberOfGuests, bookingStatus) => {
  const newBooking = {
    id: uuid(),
    userId,
    propertyId,
    checkinDate,
    checkoutDate,
    numberOfGuests,
    bookingStatus
  }

  bookingsData.bookings.push(newBooking)
  return newBooking
}

export default createBooking
