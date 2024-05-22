import express from 'express'
import getReviews from '../services/reviews/getReviews.js'
import createReviews from '../services/reviews/createReviews.js'
import getReviewsById from '../services/reviews/getReviewsById.js'
import updateReviewsById from '../services/reviews/updateReviewsById.js'
import deleteReviews from '../services/reviews/deleteReviews.js'

const router = express.Router()

router.get('/', (req, res) => {
  try {
    const { id, userId, propertyId, comment } = req.query
    const reviews = getReviews(id, userId, propertyId, comment)
    res.status(200).json(reviews)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while getting list of reviews!')
  }
})

router.get('/:id', (req, res) => {
  try {
    const { id } = req.params
    const review = getReviewsById(id)

    if (!review) {
      res.status(400).send(`Review with id ${id} was not found!`)
    } else {
      res.status(200).json(review)
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while getting review by id!')
  }
})

router.post('/', (req, res) => {
  try {
    const { id, userId, propertyId, rating, comment } = req.body
    const newReview = createReviews(id, userId, propertyId, rating, comment)
    res.status(201).json(newReview)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while creating new review!')
  }
})

router.put('/:id', (req, res) => {
  try {
    const { id } = req.params
    const { userId, propertyId, rating, comment } = req.body
    const updatedReview = updateReviewsById(
      id,
      userId,
      propertyId,
      rating,
      comment
    )
    res.status(200).json(updatedReview)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while updating review by id!')
  }
})

router.delete('/:id', (req, res) => {
  try {
    const { id } = req.params
    const deletedReview = deleteReviews(id)

    if (!deletedReview) {
      res.status(404).send(`Review with id ${id} was not found!`)
    } else {
      res.status(200).json({
        message: `Review with id ${deletedReview} was deleted!`
      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while deleting review by id!')
  }
})

export default router
