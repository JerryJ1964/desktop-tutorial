import { PrismaClient } from "@prisma/client";

const getReviewById = async (id) => {
  const prisma = new PrismaClient();
  return prisma.review.findUnique({
    where: {
      id,
    },
  });
};
export default getReviewById;
