import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createAmenity = (name) => {
  console.log("name:", name)

  const newAmenity = {
    data: {
      name,
    },
  };

  return prisma.amenities.create(newAmenity);
}

export default createAmenity;