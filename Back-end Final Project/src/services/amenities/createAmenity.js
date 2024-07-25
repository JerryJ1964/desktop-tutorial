import { PrismaClient } from "@prisma/client";

const createAmenity = async (name) => {
  const prisma = new PrismaClient();
  const data = {
    name,
  };
  const newAmenity = prisma.amenity.create({
    data,
  });
  if (!newAmenity || newAmenity.name === 0) {
    return null;
  }
  return newAmenity;
};
export default createAmenity;
