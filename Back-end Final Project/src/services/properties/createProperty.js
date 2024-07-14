import { PrismaClient } from "@prisma/client";
const createProperty = async (
  title,
  description,
  location,
  pricePerNight,
  bedroomCount,
  bathRoomCount,
  maxGuestCount,
  hostId,
  rating
) => {
  const prisma = new PrismaClient();
  const data = {
    title,
    location,
    description,
    pricePerNight,
    bedroomCount,
    bathRoomCount,
    maxGuestCount,
    hostId,
    rating,
  };
  const newProperty = prisma.properties.create({
    data,
  });
  // If the property is not created, return null
  if (!newProperty || newProperty.id === 0) {
    return id;
  }
  return newProperty;
};
export default createProperty;
