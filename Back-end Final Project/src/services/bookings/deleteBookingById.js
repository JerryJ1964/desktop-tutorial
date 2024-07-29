import { PrismaClient } from "@prisma/client";
const deleteBookingById = async (id) => {
  const prisma = new PrismaClient();
  console.log("id:", id);
  const deletedBookingById = await prisma.booking.deleteMany({
    where: {
      id,
    },
  });

  if (!deletedBookingById || deletedBookingById.count === 0) {
    return null;
  }
  return deleteBookingById;
};
export default deleteBookingById;
