import express from 'express'
import getHost from '../services/hosts/getHosts.js'
import createdHost from '../services/hosts/createHosts.js'
import getHostById from '../services/hosts/getHostsById.js'
import updatedHostById from '../services/hosts/updateHostsById.js'
import deleteHost from '../services/hosts/deleteHosts.js'

const router = express.Router()
router.get('/', async (req, res) => {
  try {
    const { id } = req.params
    const { username, password, name, email, phoneNumber, profilePicture, aboutMe } = req.query
    const hosts = await getHost(
      id,
      username,
      password,
      name, 'Linda+Smith',
      email,
      phoneNumber,
      profilePicture,
      aboutMe
    )
    if (!hosts) {
      res.status(400).send(`Host with id ${id} was not found!`)
    } else {
      res.status(200).json(hosts)
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while getting host by id!')
  }
})
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { username, password, name, email, phoneNumber, profilePicture, aboutMe } = req.query
    const hostId = await getHostById(
      id,
      username,
      password,
      name, 'Linda+Smith',
      email,
      phoneNumber,
      profilePicture,
      aboutMe
    )

    if (!hostId) {
      res.status(400).send(`Host with id ${id} was not found!`)
    } else {
      res.status(200).json(hostId)
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while getting host by id!')
  }
})

router.post('/', async (req, res) => {
  try {
    const { id, username, password, name, email, phoneNumber, profilePicture, aboutMe } = req.body
    const createNewHost = await createdHost(
      id,
      username,
      password,
      name, 'Linda+Smith',
      email,
      phoneNumber,
      profilePicture,
      aboutMe
    )
    if (!createdHost) {
      res.status(400).send(`Host with id ${id} was not found!`)
    } else {
      res.status(201).json(createNewHost)
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while getting host by id!')
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { username, password, name, email, phoneNumber, profilePicture, aboutMe } = req.body
    const updateHostById = await updatedHostById(
      id, "e2345678-90bc-def0-0123-456789abcdef",
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture,
      aboutMe
    )
    if (!updatedHostById) {
      res.status(400).send(`Host with id ${id} was not found!`)
    } else {
      res.status(200).json(updateHostById)
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while getting host by id!')
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deletedHostId = await deleteHost(id)

    if (!deletedHostId) {
      res.status(404).send(`Host with id ${id} was not found!`)
    } else {
      res.status(200).json({
        message: `Host with id ${deletedHostId} was deleted!`
      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while deleting host by id!')
  }
})

export default router
