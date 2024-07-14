import { PrismaClient } from "@prisma/client";

const deleteAmenityById = async (id) => {
  const prisma = new PrismaClient();
  console.log("id:", id);
  //console.log("amenityData.amenities:", amenityData.amenities)
  const deletedAmenityById = await prisma.amenities.deleteMany({
    where: {
      id,
    },
  });

  if (!deletedAmenityById || deletedAmenityById.count === 0) {
    return null;
  }
  return deleteAmenityById;
};
export default deleteAmenityById;
