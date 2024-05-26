import notFoundErrorHandler from '../middleware/notFoundErrorHandler.js'
import { Router } from 'express'

const router = Router()

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params
    const amenities = await amenities(id)


    res.status(200).json(id)
  } catch (error) {
    next(error)
  }
},
  notFoundErrorHandler
)

router.get("/:name", async (req, res, next) => {
  try {
    const { name } = req.params
    const amenities = await amenities(name)


    res.status(200).json(name)
  } catch (error) {
    next(error)
  }
},
  notFoundErrorHandler
)

export default router