import reviewData from '../../src/data/reviews.json' assert { type: 'json' }

const getReviewsById = (id) => {
  console.log(id)
  return reviewData.records.find((review) => review.id === id)
}

export default getReviewsById
