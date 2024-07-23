import { PrismaClient } from "@prisma/client";

const getAmenities = async (name) => {
  const prisma = new PrismaClient();
  console.log("name:", name);
  //console.log("amenityData.amenities:", amenityData.amenities)

  return prisma.amenity.findMany({
    where: {
      name,
    },
  });
};

export default getAmenities;
