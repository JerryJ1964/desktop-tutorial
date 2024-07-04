import { PrismaClient } from '@prisma/client'

const getBookings = async (userId, numberOfGuests) => {
  const prisma = new PrismaClient()
console.log("userId:", userId)
  //console.log("bookingData.bookings:", bookingData.bookings)
  return prisma.bookings.findMany({
    where: {
      userId,
      numberOfGuests
    }
  })
}

export default getBookings