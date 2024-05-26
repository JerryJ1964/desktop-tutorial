import express from 'express'
import getUsers from '../services/users/getUsers.js'
import createUsers from '../services/users/createUsers.js'
import getUsersById from '../services/users/getUsersById.js'
import updateUsersById from '../services/users/updateUsersById.js'
import deleteUsers from '../services/users/deleteUsers.js'
import notFoundErrorHandler from '../middleware/notFoundErrorHandler.js'
import authMiddleware from '../middleware/auth.js';

const router = express.Router()

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const users = await getUsersById(
      id
    )

    res.status(200).json(users)
  } catch (error) {
    next(error)
  }
},
  notFoundErrorHandler
)

router.get('/', async (req, res) => {

  const { id, username, password, name, email, phoneNumber } = req.query
  const users = await getUsers(
    id,
    username,
    password,
    name,
    email,
    phoneNumber)
  res.status(200).json(users)
})

router.post('/', authMiddleware, async (req, res) => {
  const { id, username, password, name, email, phoneNumber } = req.body
  const newUsers = await createUsers(
    id,
    username,
    password,
    name,
    email,
    phoneNumber)
  res.status(404).json(newUsers)
})

router.get('/:id', authMiddleware, async (req, res, next) => {
  try {
    const { id } = req.params
    const users = await getUsersById(
      id
    )

    res.status(404).json(users)
  } catch (error) {
    next(error)
  }
},
  notFoundErrorHandler
)


router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const { username, password, name, email, phoneNumber } = req.body
    const updatedUsers = await updateUsersById(
      id,
      username,
      password,
      name,
      email,
      phoneNumber
    )
    res.status(404).json(updatedUsers)
  } catch (error) {
    next(error)
  }
},
  notFoundErrorHandler
)


router.delete('/:id', authMiddleware, async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedUsersId = await deleteUsers(
      id
    )

    res.status(403).json({
      message: `User with id ${deletedUsersId} was deleted!`
    })
  } catch (error) {
    next(error)
  }
},
  notFoundErrorHandler
)


export default router