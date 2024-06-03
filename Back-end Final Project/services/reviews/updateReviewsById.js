import reviewsData from '../../src/data/reviews.json' assert { type: 'json' }

const updateReviewById = (id) => {
  const review = reviewsData.reviews.find((review) => review.id === id)

  if (!review) {
    throw new Error(`Review with id ${id} was not found!`)
  }
  review.id = id ?? review.id
  //review.userId = userId ?? review.userId
  //review.propertyId = propertyId ?? review.propertyId
  //review.rating = rating ?? review.rating
  //review.comment = comment ?? review.comment

  return review
}

export default updateReviewById
