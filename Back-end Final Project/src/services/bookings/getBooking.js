import { PrismaClient } from '@prisma/client'

const getBookings = (userId, numberOfGuests) => {
  const prisma = new PrismaClient()

  return prisma.bookings.findMany({
    where: {
      userId,
      numberOfGuests
    }
  })
}

export default getBookings