import { PrismaClient } from "@prisma/client";
const updateBookingById = async (
  id,
  userId,
  propertyId,
  checkinDate,
  checkoutDate,
  numberOfGuests,
  totalPrice,
  bookingStatus
) => {
  const prisma = new PrismaClient();
  const updatedBookingById = await prisma.booking.updateMany({
    where: {
      id,
    },
    data: {
      id,
      userId,
      propertyId,
      checkinDate,
      checkoutDate,
      numberOfGuests,
      totalPrice,
      bookingStatus,
    },
  });

  if (!updatedBookingById || updatedBookingById.count === 0) {
    return null;
  }
  return updateBookingById;
};

export default updateBookingById;
