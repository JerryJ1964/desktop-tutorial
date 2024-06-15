import NotFoundError from '../../middleware/NotFoundError.js'
import { PrismaClient } from '@prisma/client'

const updateBookingById = (id, userId, propertyId, checkinDate, checkoutDate, numberOfGuests, totalPrice, bookingStatus) => {
  const prisma = new PrismaClient()
  const updatedBooking = prisma.bookings.updateMany({
    where: {
      id,
      userId,
      propertyId,
      checkinDate,
      checkoutDate,
      numberOfGuests,
      totalPrice,
      bookingStatus
    },
    data: {
      id,
      userId,
      propertyId,
      checkinDate,
      checkoutDate,
      numberOfGuests,
      totalPrice,
      bookingStatus
    }
  })

  if (!updatedBooking || updatedBooking.count === 0) {
    throw new NotFoundError('booking', id)
  }

  return {
    message: `Booking with id ${id} was updated!`
  }
}

export default updateBookingById
