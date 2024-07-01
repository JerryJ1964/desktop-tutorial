import { PrismaClient } from '@prisma/client'
const updateReviewById = (id, userId, propertyId, rating, comment) => {
  const prisma = new PrismaClient()
  //console.log("id:", id)
  const updatedReviewById = prisma.reviews.updateMany({
    where: {
      id
    },
    data: {
      userId,
      propertyId,
      rating,
      comment
    }
  })
  
  if (!updateReviewById || updateReviewById.count === 0) {
    throw new Error('Review', id)
  }
  
    return updatedReviewById
  }
export default updateReviewById