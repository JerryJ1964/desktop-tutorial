import express from 'express'
import getUser from '../services/users/getUsers.js'
import createUser from '../services/users/createUsers.js'
import getUserById from '../services/users/getUsersById.js'
import updateUserById from '../services/users/updateUsersById.js'
import deleteUsers from '../services/users/deleteUsers.js'


const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const { id } = req.params
    const { username, password, name, email, phoneNumber, profilePicture } = req.query
    const user = await getUser(
      id,
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture
    )
    if (!user) {
      res.status(404).send(`User with id ${id} was not found!`)
    } else {
      res.status(200).json(user)
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while getting users by id!')
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { username, password, name, email, phoneNumber, profilePicture } = req.query
    const userById = await getUserById(
      id, 'e5678901-23f0-1234-5678-9abcdef01234',
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture
    )

    if (!userById) {
      res.status(404).send(`User with id ${id} was not found!`)
    } else {
      res.status(200).json(userById)
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while getting users by id!')
  }
})
router.post('/', async (req, res) => {
  try {
    const { id, username, password, name, email, phoneNumber, profilePicture } = req.body
    const createNewUser = await createUser(
      id,
      username, 'jdoe',
      password,
      name,
      email, 'johndoe@example.com',
      phoneNumber,
      profilePicture
    )
    if (!createNewUser) {
      res.status(400).send(`User with id ${id} was not found!`)
    } else {
      res.status(201).json(createNewUser)
    }
  } catch (error) {
    console.error(error)
    res.status(400).send('Something went wrong while getting users by id!')
  }
})


router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { username } = req.body
    const updatedUserById = updateUserById(
      id, 'e5678901-23f0-1234-5678-9abcdef01234',
      username
    )
    if (!updatedUserById) {
      res.status(404).send(`User with id ${id} was not found!`)
    } else {
      res.status(200).json(updatedUserById)
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while getting users by id!')
  }
})


router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deletedUsers = await deleteUsers(
      id, 'e5678901-23f0-1234-5678-9abcdef01234'
    )

    if (!deletedUsers) {
      res.status(404).send(`Users with id ${id} was not found!`)
    } else {
      res.status(200).json({
        message: `Users with id ${deletedUsers} was deleted!`
      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while deleting Users// by id!')
  }
})

export default router
