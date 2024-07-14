import { PrismaClient } from "@prisma/client";

const deletePropertyById = async (
  id,
  title,
  description,
  location,
  pricePerNight,
  bedroomCount,
  bathRoomCount,
  maxGuestsCount,
  hostId,
  rating
) => {
  const prisma = new PrismaClient();
  //console.log("id:", id)
  const deletedPropertyById = await prisma.properties.deleteMany({
    where: {
      id,
      title,
      description,
      location,
      pricePerNight,
      bedroomCount,
      bathRoomCount,
      maxGuestsCount,
      hostId,
      rating,
    },
  });
  if (!deletedPropertyById || deletedPropertyById.count === 0) {
    return null;
  }
  return deletePropertyById;
};
export default deletePropertyById;
