import { PrismaClient } from '@prisma/client'
import NotFoundError from '../../middleware/NotFoundError.js'
const deleteReviewById = async (id) => {
  const prisma = new PrismaClient()


  const deleteReview = prisma.reviews.deleteMany({
    where: {
      id
    }
  })

  if (!deleteReview || deleteReview.count === 0) {
    throw new NotFoundError('Review', id)
  }

  return id;
};

export default deleteReviewById
