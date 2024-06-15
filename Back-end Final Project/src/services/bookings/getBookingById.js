import NotFoundError from '../../middleware/NotFoundError.js'
import { PrismaClient } from '@prisma/client'

const getBookingById = async (id) => {
  const prisma = new PrismaClient()
  const booking = prisma.bookings.findUnique({
    where: {
      id
    }
  })

  if (!booking) {
    throw new NotFoundError('Booking', id)
  }

  return booking
}

export default getBookingById;
