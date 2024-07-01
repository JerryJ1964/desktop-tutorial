import { PrismaClient } from '@prisma/client' 

const prisma = new PrismaClient()
const deleteReviewById = (id, title, description, location, pricePerNight, bedroomCount, bathRoomCount, maxGuestsCount, hostId, rating) => {
  console.log("id:", id)
  const newReview = {
    data: {
      id,
      title,
      description,
      location,
      pricePerNight,
      bedroomCount,
      bathRoomCount,
      maxGuestsCount,
      hostId,
      rating
    }
  }
  const review = prisma.reviews.delete(newReview)
  if (!review) {
    throw new Error('Review not found')
  }
  return review
}
export default deleteReviewById