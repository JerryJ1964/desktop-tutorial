import { PrismaClient } from '@prisma/client'
import NotFoundError from '../../middleware/NotFoundError.js'

const deleteBookingById = (id) => {
  const prisma = new PrismaClient()


  const deleteBooking = prisma.bookings.deleteMany({
    where: {
      id
    }
  })

  if (!deleteBooking || deleteBooking.count === 0) {
    throw new NotFoundError('Booking', id)
  }

  return id
}
export default deleteBookingById