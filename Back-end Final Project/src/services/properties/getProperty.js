import { PrismaClient } from '@prisma/client'

const getProperties = async (title, location) => {
  const prisma = new PrismaClient()
console.log("title:", title)
  //console.log("propertiesData.properties:", propertyData.properties)
  return await prisma.properties.findMany({
    where: {
      title,
      location
    }
  })
}

export default getProperties;