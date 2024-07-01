import { PrismaClient } from '@prisma/client' 

const prisma = new PrismaClient()
const createProperty = (title, description, location, pricePerNight, bedroomCount, bathRoomCount, maxGuestsCount, hostId, rating) => {
  console.log("title:", title)
  //console.log("propertiesData.properties:", propertyData.properties)
  const newProperty = {
    data: {
      title,
      description,
      location,
      pricePerNight,
      bedroomCount,
      bathRoomCount,
      maxGuestsCount,
      hostId,
      rating
    },
  }
  const property = prisma.properties.create(newProperty)
  if (!property) {
    console.error('Error creating property')
    //return null
  }
}

export default createProperty
