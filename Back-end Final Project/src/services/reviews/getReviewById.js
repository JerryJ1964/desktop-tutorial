import { PrismaClient } from '@prisma/client'

const getReviewById = (id) => {
  const prisma = new PrismaClient()
  //console.log("id:", id)
  //console.log("reviewsData.reviews:", reviewData.reviews)
  return prisma.reviews.findUnique({
    where: {
      id,
    }
  })
}
export default getReviewById