import { PrismaClient } from '@prisma/client'
import NotFoundError from '../../middleware/NotFoundError.js'

const updateReviewById = (id, userId, propertyId, rating, comment) => {
  const prisma = new PrismaClient()
  const updatedReview = prisma.reviews.updateMany({
    where: {
      id,
      userId,
      propertyId,
      rating,
      comment
    },
    data: {
      id,
      userId,
      propertyId,
      rating,
      comment
    }
  })

  if (!updatedReview || updatedReview.count === 0) {
    throw new NotFoundError('Review', id)
  }

  return {
    message: `Review with id ${id} was updated!`
  }
}

export default updateReviewById
