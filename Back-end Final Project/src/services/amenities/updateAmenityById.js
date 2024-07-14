import { PrismaClient } from "@prisma/client";
const updateAmenityById = async (id, name) => {
  const prisma = new PrismaClient();
  console.log("id:", id);
  //console.log("amenityData.amenities:", amenityData.amenities)
  const updatedAmenityById = await prisma.amenities.updateMany({
    where: {
      id,
    },
    data: {
      id,
      name,
    },
  });

  if (!updatedAmenityById || updatedAmenityById.count === 0) {
    return null;
  }
  return updateAmenityById;
};
export default updateAmenityById;
