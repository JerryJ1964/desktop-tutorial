//import reviewData from '../../src/data/reviews.json' assert { type: 'json' }
import { PrismaClient } from '@prisma/client'


const getReview = (id, userId, propertyId, rating, comment) => {
  const prisma = new PrismaClient()

  return prisma.reviews.findMany({
    where: {
      id,
      userId,
      propertyId,
      rating,
      comment
    }
  })
}


export default getReview
