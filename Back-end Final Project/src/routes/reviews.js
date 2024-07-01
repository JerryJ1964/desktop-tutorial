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

router.post("/", auth, async (req, res) => { // auth, 
  const { userId, propertyId, rating, comment } = req.body;
  const newReview = createReview(userId, propertyId, rating, comment);
  console.log("newReview:", newReview)
  res.status(201).json(newReview);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const reviews = await getReviewById(id);
  console.log("id:", id)
  console.log("review:", reviews)

  if (!reviews) {
    return res.status(404).json({
      message: `Review with id ${id} not found`,
    });
  } else {
    res.status(200).json(reviews);
  }
});


router.delete("/:id", async (req, res) => { //  auth,
  const { id } = req.params;
  const reviews = await deleteReviewById(id);
  console.log("id:", id)
  console.log("reviews:", reviews)

  if (!reviews) {
    return res.status(404).json({
      message: `Review with id ${id} was not found!`,
    });
  } else {
    res.status(200).json({
      message: `Review with id ${id} successfully deleted!`,
      reviews,
    });
  }
});

router.put("/:id", async (req, res) => {  // auth,
  const { id } = req.params;
  const { userId, propertyId, rating, comment } = req.body;
  const review = updateReviewById(id, { userId, propertyId, rating, comment });
  console.log("id:", id, "review:", review)
  if (!review) {
    return res.status(404).json({
      message: `Review with id ${id} not found!`
    });
  } else {
    res.status(200).json({
      message: `Review with id ${id} successfully updated`,
      review,
    });
  }
});

export default router
