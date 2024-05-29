import { Router } from 'express'
import notFoundErrorHandler from '../middleware/notFoundErrorHandler.js'

const router = Router()

router.get("/", async (req, res, next) => {
  try {
    const { } = req.params
    //const users = await users()

    res.status(200).json()
  } catch (error) {
    next(error)
  }
},
  notFoundErrorHandler
)

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params
    //const usersId = await usersId(id)

    res.status(200).json(id)
  } catch (error) {
    next(error)
  }
},
  notFoundErrorHandler
)

router.get("/:login", async (req, res, next) => {
  try {
    const { users } = req.params
    const login = await login(users)


    res.status(200).json(users)
  } catch (error) {
    next(error)
  }
},
  notFoundErrorHandler
)

export default router