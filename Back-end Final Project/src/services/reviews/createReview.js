import { PrismaClient } from '@prisma/client' 
const createReview = async ( userId, propertyId, rating, comment) => {
  const prisma = new PrismaClient()
  
  const data = {
    
    userId, 
    propertyId,
    rating,
    comment
  };
  const reviews = prisma.reviews.create({
    data,
  });
  if (!reviews || reviews.userId === 0) {
    return null
  }
  return reviews
}
export default createReview