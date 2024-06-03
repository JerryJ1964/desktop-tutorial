import reviewsData from '../../src/data/reviews.json' assert { type: 'json' }

const getReviewsById = (id) => {
  console.log(id)
  return reviewsData.reviews.find((review) => review.id === id)
}

export default getReviewsById
