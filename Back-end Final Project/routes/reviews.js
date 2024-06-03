import express from 'express'
import getReview from '../services/reviews/getReviews.js'
import createdReview from '../services/reviews/createReviews.js'
import getReviewById from '../services/reviews/getReviewsById.js'
import updateReviewById from '../services/reviews/updateReviewsById.js'
import deleteReview from '../services/reviews/deleteReviews.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const { id, userId, propertyId, comment } = req.query
    const review = await getReview(
      id, //'j0123456-78f0-1234-5678-9abcdef01234',
      userId,
      propertyId,
      comment
    )
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

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { userId } = req.query
    const reviewById = getReviewById(
      id, 'j0123456-78f0-1234-5678-9abcdef01234',
      userId, 'j0123456-78f0-1234-5678-9abcdef01234'
    )

    if (!reviewById) {
      res.status(400).send(`Review with id ${id} was not found!`)
    } else {
      res.status(200).json(reviewById)
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while getting review by id!')
  }
})

router.post('/', async (req, res) => {
  try {
    const { id, userId, propertyId, rating, comment } = req.body
    const createReview = createdReview(
      id, //'j0123456-78f0-1234-5678-9abcdef01234',
      userId,
      propertyId,
      rating,
      comment
    )
    if (!createReview) {
      res.status(404).send(`Review with id ${id} was not found!`)
    } else {
      res.status(201).json(createReview)
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while getting review by id!')
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    //const { userId, propertyId, rating, comment } = req.body
    const updatedReviewById = await updateReviewById(
      id, 'j0123456-78f0-1234-5678-9abcdef01234',
      //userId,
      //propertyId,
      //rating,
      //comment
    )
    if (!updatedReviewById) {
      res.status(404).send(`Review with id ${id} was not found!`)
    } else {
      res.status(200).json({
        message: `Review with id ${updatedReviewById} was deleted!`
      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while deleting review by id!')
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deletedReview = await deleteReview(
      id, 'j0123456-78f0-1234-5678-9abcdef01234'
    )

    if (!deletedReview) {
      res.status(400).send(`Review with id ${id} was not found!`)
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
