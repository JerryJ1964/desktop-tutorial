import { PrismaClient } from '@prisma/client'

const getReviews = (userId, propertyId) => {
  const prisma = new PrismaClient()

  return prisma.reviews.findMany({
    where: {
      userId,
      propertyId
    }
  })
}

export default getReviews;