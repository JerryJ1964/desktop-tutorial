import { PrismaClient } from "@prisma/client";

const createAmenities = async ( name ) => {
  const prisma = new PrismaClient();
  const data = {

    name,
  };
  const amenity = prisma.amenities.create({
    data,
  });
  if (!amenity || amenity.id === 0) {
    return null;
  }
  return amenity;
}
export default createAmenities

