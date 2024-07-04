import { PrismaClient } from "@prisma/client";

const createAmenity = async (name) => {
  const prisma = new PrismaClient();
  const data = {
    name,
  };
  const amenity = prisma.amenities.create({
    data,
  });
  if (!amenity || amenity.count === 0) {
    return null;
  }
  return createAmenity;
}
export default createAmenity;

