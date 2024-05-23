import express from 'express'
import getHost from '../services/host/getHost.js'
import createHost from '../services/host/createHost.js'
import getHostById from '../services/host/getHostById.js'
import updateHostById from '../services/host/updateHostById.js'
import deleteHost from '../services/bookings/deleteBookings.js'
import notFoundErrorHandler from '../middleware/notFoundErrorHandler.js'
import authMiddleware from '../middleware/auth.js';

const router = express.Router()

router.get(
  '/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params
      const host = await getHostById(id)

      res.status(200).json(host)
    } catch (error) {
      next(error)
    }
  },
  notFoundErrorHandler
)

router.get('/', async (req, res) => {

  const { id, username, password, name, email, phoneNumber } = req.query
  const host = await getHost(id, username, password, name, email, phoneNumber)
  res.status(200).json(host)
})

router.post('/', authMiddleware,

  async (req, res) => {
    const { id, username, password, name, email, phoneNumber } = req.body
    const newHost = await createHost(id, username, password, name, email, phoneNumber)
    res.status(201).json(newHost)
  })

router.get('/:id', authMiddleware,
  async (req, res, next) => {
    try {
      const { id } = req.params
      const host = await getHostById(id)

      res.status(200).json(host)
    } catch (error) {
      next(error)
    }
  },
  notFoundErrorHandler
)


router.put('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params
      const { username, password, name, email, phoneNumber } = req.body
      const updatedHost = await updateHostById(
        id,
        username,
        password,
        name,
        email,
        phoneNumber
      )
      res.status(200).json(updatedHost)
    } catch (error) {
      next(error)
    }
  },
  notFoundErrorHandler
)


router.delete('/:id', authMiddleware,
  async (req, res, next) => {
    try {
      const { id } = req.params
      const deletedHostId = await deleteHost(id)

      res.status(200).json({
        message: `Host with id ${deletedHostId} was deleted!`
      })
    } catch (error) {
      next(error)
    }
  },
  notFoundErrorHandler
)


export default router
