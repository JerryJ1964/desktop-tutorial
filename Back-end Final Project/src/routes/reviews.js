import { Router } from "express";
import getReviews from '../services/reviews/getReview.js'
import createReview from '../services/reviews/createReview.js'
import getReviewById from '../services/reviews/getReviewById.js'
import updateReviewById from '../services/reviews/updateReviewById.js'
import deleteReviewById from '../services/reviews/deleteReviewById.js'
import auth from "../middleware/auth.js"

const router = Router();

router.get("/", async (req, res) => {
  const { userId, propertyId } = req.query;
  const reviews = await getReviews(userId, propertyId);
  res.json(reviews);
});

router.post("/", auth, async (req, res) => {
  const { userId, propertyId, rating, comment } = req.body;
  const newReview = createReview(userId, propertyId, rating, comment);
  res.status(201).json(newReview);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  //console.log("id:", id)
  const review = await getReviewById(id);

  if (!review) {
    res.status(404).json({ message: `Review with id ${id} not found` });
  } else {
    res.status(200).json(review);
  }
});


router.delete("/:id", auth, async (req, res) => {
  const { id } = req.params;
  const review = await deleteReviewById(id);

  if (review) {
    res.status(200).send({
      message: `Review with id ${id} successfully deleted!`,
      review,
    });
    res.status(404).send({
      message: `Review with id ${id} was not found!`,
    });
  }
});

router.put("/:id", auth, async (req, res) => {
  const { id } = req.params
  const { userId, propertyId, rating, comment } = req.body;
  const review = updateReviewById(id, { userId, propertyId, rating, comment });

  if (review) {
    res.status(200).send({
      message: `Review with id ${id} successfully updated`,
      review,
    });
  } else {
    res.status(404).json({
      message: `Review with id ${id} not found!`
    });
  }
});

export default router
