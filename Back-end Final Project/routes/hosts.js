import express from 'express'
import getHosts from '../services/hosts/getHosts.js'
import createHosts from '../services/hosts/createHosts.js'
import getHostsById from '../services/hosts/getHostsById.js'
import updateHostsById from '../services/hosts/updateHostsById.js'
import deleteHosts from '../services/hosts/deleteHosts.js'
import notFoundErrorHandler from '../middleware/notFoundErrorHandler.js'
import authMiddleware from '../middleware/auth.js';

const router = express.Router()

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const host = await getHostsById(
      id
    )

    res.status(200).json(host)
  } catch (error) {
    next(error)
  }
},
  notFoundErrorHandler
)

router.get('/', async (req, res) => {

  const { id, username, password, name, email, phoneNumber } = req.query
  const hosts = await getHosts(
    id,
    username,
    password,
    name,
    email,
    phoneNumber)
  res.status(200).json(hosts)
})

router.post('/', authMiddleware, async (req, res) => {
  const { id, username, password, name, email, phoneNumber } = req.body
  const newHosts = await createHosts(
    id,
    username,
    password,
    name,
    email,
    phoneNumber)
  res.status(404).json(newHosts)
})

router.get('/:id', authMiddleware, async (req, res, next) => {
  try {
    const { id } = req.params
    const hosts = await getHostsById(
      id
    )

    res.status(404).json(hosts)
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
    const updatedHosts = await updateHostsById(
      id,
      username,
      password,
      name,
      email,
      phoneNumber
    )
    res.status(404).json(updatedHosts)
  } catch (error) {
    next(error)
  }
},
  notFoundErrorHandler
)


router.delete('/:id', authMiddleware, async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedHostsId = await deleteHosts(
      id
    )

    res.status(403).json({
      message: `Hosts with id ${deletedHostsId} was deleted!`
    })
  } catch (error) {
    next(error)
  }
},
  notFoundErrorHandler
)


export default router
