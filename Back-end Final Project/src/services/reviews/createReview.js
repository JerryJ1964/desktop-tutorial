import { PrismaClient } from '@prisma/client' 
const createReviewById = async (id, userId, propertyId, rating, comment) => {
  const prisma = new PrismaClient()
  
  const data = {
    id,
    userId,
    propertyId,
    rating,
    comment
  };
  const review = prisma.reviews.create({
    data,
  });
  if (!review || review.count === 0) {
    return null
  }
  return createReviewById
}
export default createReviewById