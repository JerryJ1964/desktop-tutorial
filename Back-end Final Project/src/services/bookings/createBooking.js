import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const createBooking = (userId, propertyId, checkinDate, checkoutDate, numberOfGuests, totalPrice, bookingStatus) => {
  console.log("userId:", userId)
  const createdANewBooking = prisma.bookings.create({
    data: {
      userId,
      propertyId,
      checkinDate,
      checkoutDate,
      numberOfGuests,
      totalPrice,
    },
  })
  return createdANewBooking
}

export default createBooking