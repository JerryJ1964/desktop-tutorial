import { PrismaClient } from '@prisma/client'
//import NotFoundError from '../../middleware/NotFoundError.js'
const deleteReviewById = (id) => {
  const prisma = new PrismaClient()
  console.log("id:", id)
  //console.log("reviewsData.reviews:", reviewsData.reviews)
  const deletedReviewById = prisma.reviews.deleteMany({
    where: {
      id
    }
  })

  if (!deleteReviewById || deleteReviewById.count === 0) {
    throw new NotFoundError('Review')
  }

  return deletedReviewById
}
export default deleteReviewById