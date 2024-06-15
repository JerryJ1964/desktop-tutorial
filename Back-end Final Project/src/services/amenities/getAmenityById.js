import { PrismaClient } from '@prisma/client'

const getAmenityById = (id) => {
  const prisma = new PrismaClient()

  return prisma.amenities.findUnique({
    where: {
      id
    }
  })
}


export default getAmenityById
