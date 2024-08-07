import { PrismaClient } from "@prisma/client";
const updateReviewById = async (id, userId, propertyId, rating, comment) => {
  const prisma = new PrismaClient();
  const updatedReviewById = await prisma.review.updateMany({
    where: {
      id,
    },
    data: {
      id,
      userId,
      propertyId,
      rating,
      comment,
    },
  });

  if (!updatedReviewById || updatedReviewById.count === 0) {
    return null;
  }
  return updateReviewById;
};

export default updateReviewById;
