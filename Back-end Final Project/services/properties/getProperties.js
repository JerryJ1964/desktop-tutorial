import { PrismaClient } from '@prisma/client'
//import propertiesData from '../../src/data/properties.json' assert { type: 'json' }

const getProperty = async (id, title, description, location, pricePerNight, bedroomCount, bathRoomCount, maxGuestsCount, hostId, rating) => {
  const prisma = new PrismaClient()

  return prisma.properties.findMany({
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
      rating
    }
  })
}

export default getProperty