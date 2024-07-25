import { PrismaClient } from "@prisma/client";
const createBooking = async (
  userId,
  propertyId,
  checkinDate,
  checkoutDate,
  numberOfGuests,
  totalPrice,
  bookingStatus
) => {
  const prisma = new PrismaClient();

  const data = {
    userId,
    propertyId,
    checkinDate,
    checkoutDate,
    numberOfGuests,
    totalPrice,
    bookingStatus,
  };
  const newBooking = prisma.booking.create({
    data,
  });
  if (!newBooking || newBooking.id === 0) {
    return null;
  }
  return newBooking;
};
export default createBooking;
