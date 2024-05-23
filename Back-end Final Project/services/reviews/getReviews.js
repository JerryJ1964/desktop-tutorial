import reviewData from '../../src/data/reviews.json' assert { type: 'json' }

const getReviews = (id, userId, propertyId, rating, comment) => {
  let review = reviewData.review

  if (id) {
    review = review.filter((review) => review.id === id)
  }

  if (userId) {
    review = review.filter((review) => review.userId === userId)
  }

  if (propertyId) {
    review = review.filter((review) => review.propertyId === propertyId)
  }

  if (rating) {
    review = review.filter((review) => review.rating === rating)
  }

  if (comment) {
    review = review.filter((review) => review.comment === comment)
  }

  if (available !== undefined) {
    review = review.filter(
      (review) => review.available === JSON.parse(available)
    )
  }

  return review
}

export default getReviews
