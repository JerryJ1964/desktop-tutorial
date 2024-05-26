import express from 'express'
import getReviews from '../services/reviews/getReviews.js'
import createReviews from '../services/reviews/createReviews.js'
import getReviewsById from '../services/reviews/getReviewsById.js'
import updateReviewsById from '../services/reviews/updateReviewsById.js'
import deleteReviews from '../services/reviews/deleteReviews.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const { id, userId, propertyId, comment } = req.query
    const reviews = await getReviews(
      id,
      userId,
      propertyId,
      comment)
    res.status(404).json(reviews)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while getting list of reviews!')
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const reviews = await getReviewsById(id)

    if (!reviews) {
      res.status(400).send(`Review with id ${id} was not found!`)
    } else {
      res.status(404).json(reviews)
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while getting review by id!')
  }
})

router.post('/', async (req, res) => {
  try {
    const { id, userId, propertyId, rating, comment } = req.body
    const newReviews = await createReviews(
      id,
      userId,
      propertyId,
      rating,
      comment)
    res.status(404).json(newReviews)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while creating new review!')
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { userId, propertyId, rating, comment } = req.body
    const updatedReviews = await updateReviewsById(
      id,
      userId,
      propertyId,
      rating,
      comment
    )
    res.status(404).json(updatedReviews)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while updating review by id!')
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deletedReviews = await deleteReviews(id)

    if (!deletedReviews) {
      res.status(400).send(`Review with id ${id} was not found!`)
    } else {
      res.status(404).json({
        message: `Review with id ${deletedReviews} was deleted!`
      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while deleting review by id!')
  }
})

export default router
