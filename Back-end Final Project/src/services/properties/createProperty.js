import { PrismaClient } from '@prisma/client' 
const createProperty = async (title, description, location, pricePerNight, bedroomCount, bathRoomCount, maxGuestCount, hostId, rating) => {
  const prisma = new PrismaClient()

  const data = {
    title,
    description,
    location,
    pricePerNight,
    bedroomCount,
    bathRoomCount,
    maxGuestCount,
    hostId,
    rating
  };
  const property = prisma.properties.create({
    data,
  });
  if (!property || property.count === 0) {
    return null
  }
  return createProperty
}
export default createProperty