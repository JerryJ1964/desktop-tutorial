import { PrismaClient } from "@prisma/client";

const getBookingsById = async (id) => {
  console.log("id:", id);
  //console.log("bookingData.bookings:", bookingData.bookings)
  const prisma = new PrismaClient();
  return prisma.booking.findUnique({
    where: {
      id,
    },
  });
};
export default getBookingsById;
