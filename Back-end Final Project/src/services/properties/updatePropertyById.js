import { PrismaClient } from "@prisma/client";
const updatePropertyById = async (
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
  const updatedPropertyById = await prisma.properties.updateMany({
    where: {
      id,
    },
    data: {
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

  if (!updatedPropertyById || updatedPropertyById.count === 0) {
    return null;
  }
  return updatePropertyById;
};
export default updatePropertyById;
