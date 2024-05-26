import bookingsData from '../../src/data/bookings.json' assert { type: 'json' }
import { PrismaClient } from '@prisma/client'

const getBooking = async (id, userId, propertyId, checkinDate, checkoutDate, numberOfGuests, totalPrice, bookingStatus) => {
  const prisma = new PrismaClient()

  return prisma.booking.findMany({
    where: {
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
}

export default getBooking