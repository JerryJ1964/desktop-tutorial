import { PrismaClient } from '@prisma/client'


const getAmenities = (name) => {
  const prisma = new PrismaClient()
  //console.log("amenityData:", amenityData)
  //console.log("amenityData.amenities:", amenityData.amenities)

  return prisma.amenities.findMany({
    where: {
      name
    }
  })
}

export default getAmenities