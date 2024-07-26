import { PrismaClient } from "@prisma/client";
const deleteReviewById = async (id) => {
  const prisma = new PrismaClient();
  console.log("id:", id);
  //console.log("reviewsData.reviews:", reviewsData.reviews)
  const deletedReviewById = await prisma.review.deleteMany({
    where: {
      id,
    },
  });

  if (!deletedReviewById || deletedReviewById.count === 0) {
    return null;
  }

  return deleteReviewById;
};
export default deleteReviewById;
