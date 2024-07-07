import { PrismaClient } from "@prisma/client";
const createBookings = async ( userId, propertyId, checkinDate, checkoutDate, numberOfGuests, totalPrice, bookingStatus) => {
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
  if (!booking || booking.userId === 0) {
    return null
  }
  return booking
}
export default createBookings