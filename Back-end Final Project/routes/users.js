import { Router } from 'express'
import notFoundErrorHandler from '../middleware/notFoundErrorHandler.js'

const router = Router()

router.get("/", async (req, res, next) => {

  try {
    const { id } = req.params
    const user = await user(id)


    res.status(200).json(user)
  } catch (error) {
    next(error)
  }
},
  notFoundErrorHandler
)

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await user(id)


    res.status(200).json(user)
  } catch (error) {
    next(error)
  }
},
  notFoundErrorHandler
)


export default router
