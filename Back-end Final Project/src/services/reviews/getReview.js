import { PrismaClient } from "@prisma/client";

const getReviews = (userId, propertyId) => {
  const prisma = new PrismaClient();
  console.log("userId:", userId);
  return prisma.review.findMany({
    where: {
      userId,
      propertyId,
    },
  });
};

export default getReviews;
