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
  console.log("userId:", userId, "propertyId:", propertyId)
  res.json(reviews);
});

router.post("/", auth, async (req, res, next) => { // auth, 
  try {
    const { userId, propertyId, rating, comment } = req.body;
    console.log("req.body:", req.body);
    console.log("userId:", userId);
    // Add more entries
    const review = createReview( userId, propertyId, rating, comment);
    res.status(201).json(review);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const review = await getReviewById(id);
  console.log("id:", id)
  console.log("review:", review)

  if (!review) {
    return res.status(404).json({
      message: `Review with id ${id} not found`,
    });
  } else {
    res.status(200).json(review);
  }
});


router.delete("/:id", async (req, res) => { //  auth,
  const { id } = req.params;
  const review = await deleteReviewById(id);
  console.log("id:", id)
  console.log("review:", review)

  if (!review) {
    return res.status(404).json({
      message: `Review with id ${id} was not found!`,
    });
  } else {
    res.status(200).json({
      message: `Review with id ${id} successfully deleted!`,
      review,
    });
  }
});

router.put("/:id", async (req, res) => {  // auth,
  const { id } = req.params;
  const reviews = await updateReviewById(id);
  console.log("id:", id)

  if (!reviews) {
    return res.status(404).json({
      message: `Review with id ${null} not found`,
    });
  } else {
    res.status(200).json({
      message: `Review with id ${id} successfully updated`,
      reviews,
    });
  }
});

export default router
