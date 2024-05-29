import reviewsData from '../../src/data/reviews.json' assert { type: 'json' }

const updateReviewsById = (id, userId, propertyId, rating, comment) => {
  const reviews = reviewsData.review.findMany((review) => review.id === id)

  if (!reviews) {
    throw new Error(`Review with id ${id} was not found!`)
  }
  reviews.id = id ?? reviews.id
  reviews.userId = userId ?? reviews.userId
  reviews.propertyId = propertyId ?? reviews.propertyId
  reviews.rating = rating ?? reviews.rating
  reviews.comment = comment ?? reviews.comment

  return reviews
}

export default updateReviewsById
