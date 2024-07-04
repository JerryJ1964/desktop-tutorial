import { PrismaClient } from '@prisma/client'

const getAmenityById = async (id) => {
  const prisma = new PrismaClient()
  console.log("id:", id)
  //console.log("amenityData.amenities:", amenityData.amenities)
  return prisma.amenities.findUnique({
    where: {
      id
    }
  })
}
  export default getAmenityById