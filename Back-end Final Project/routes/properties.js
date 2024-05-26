import express from 'express'
import getproperties from '../services/properties/getProperties.js'
import createProperties from '../services/properties/createProperties.js'
import getPropertiesById from '../services/properties/getPropertiesById.js'
import updatePropertiesById from '../services/properties/updatePropertiesById.js'
import deleteProperties from '../services/properties/deleteProperties.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const { id, title, description, location, pricePerNight, bedroomCount, bathRoomCount, maxGuestsCount, hostId, rating } = req.query
    const properties = await getproperties(
      id,
      title,
      description,
      location,
      pricePerNight,
      bedroomCount,
      bathRoomCount,
      maxGuestsCount,
      hostId,
      rating
    )
    res.status(200).json(properties)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while getting list of properties!')
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const properties = await getPropertiesById(id)

    if (!properties) {
      res.status(400).send(`properties with id ${id} was not found!`)
    } else {
      res.status(200).json(properties)
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while getting properties by id!')
  }
})

router.post('/', async (req, res) => {
  try {
    const { id, userId, propertyId, checkinDate, checkoutDate, numberOfGuets, bookingStatus } = req.body
    const newProperties = await createProperties(
      id,
      userId,
      propertyId,
      checkinDate,
      checkoutDate,
      numberOfGuets,
      bookingStatus)
    res.status(201).json(newProperties)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while creating new properties!')
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { userId, propertyId, checkinDate, checkoutDate, numberOfGuets, bookingStatus } = req.body
    const updatedProperties = await updatePropertiesById(
      id,
      userId,
      propertyId,
      checkinDate,
      checkoutDate,
      numberOfGuets,
      bookingStatus
    )
    res.status(200).json(updatedProperties)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while updating properties by id!')
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deletedProperties = await deleteProperties(id)

    if (!deletedProperties) {
      res.status(404).send(`Properties with id ${id} was not found!`)
    } else {
      res.status(200).json({
        message: `Properties with id ${deletedProperties} was deleted!`
      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while deleting properties by id!')
  }
})

export default router
