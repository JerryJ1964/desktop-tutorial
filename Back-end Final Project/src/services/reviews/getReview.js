import { PrismaClient } from '@prisma/client'

const getReviews = async (userId, propertyId) => {
  const prisma = new PrismaClient()
console.log("userId:", userId)
  return prisma.reviews.findMany({
    where: {
      userId,
      propertyId
    }
  })
}

export default getReviews;