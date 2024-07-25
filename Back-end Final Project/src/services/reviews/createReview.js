import { PrismaClient } from "@prisma/client";
const createReview = async (userId, propertyId, rating, comment) => {
  const prisma = new PrismaClient();
  const data = {
    userId,
    propertyId,
    rating,
    comment,
  };
  const newReview = prisma.review.create({
    data,
  });
  // If the review is not created, return null
  if (!newReview || newReview.userId === 0) {
    return null;
  }
  return newReview;
};
export default createReview;
