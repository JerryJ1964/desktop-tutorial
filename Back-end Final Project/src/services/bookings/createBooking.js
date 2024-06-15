import { v4 as uuidv4 } from 'uuid';
import bookingData from '../../data/bookings.json' assert { type: 'json' }

const createBooking = (userId, propertyId, checkinDate, checkOutDate, numberOfGuests, totalPrice, bookingSatus) => {
  const newBooking = {
    id: uuidv4(),
    userId,
    propertyId,
    checkinDate,
    checkOutDate,
    numberOfGuests,
    totalPrice,
    bookingSatus
  };

  bookingData.bookings.push(newBooking)
  return newBooking
}

export default createBooking
