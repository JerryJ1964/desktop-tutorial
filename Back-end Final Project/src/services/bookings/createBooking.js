import { PrismaClient } from "@prisma/client";
const createBooking = async (userId, propertyId, checkinDate, checkoutDate, numberOfGuests, totalPrice, bookingStatus) => {
  const prisma = new PrismaClient()

  const data = {
    userId,
    propertyId,
    checkinDate,
    checkoutDate,
    numberOfGuests,
    totalPrice,
    bookingStatus,
  };
  const booking = prisma.bookings.create({
    data,
  });
  if (!booking || booking.count === 0) {
    return null
  }
  return createBooking
}
export default createBooking