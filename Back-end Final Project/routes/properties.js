import express from 'express'
import getproperty from '../services/properties/getProperties.js'
import createProperty from '../services/properties/createProperties.js'
import getPropertiesById from '../services/properties/getPropertiesById.js'
import updatedPropertyById from '../services/properties/updatePropertiesById.js'
import deleteProperty from '../services/properties/deleteProperties.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const { id } = req.params
    const { title, description, location, pricePerNight, bedroomCount, bathRoomCount, maxGuestsCount, hostId, rating } = req.query
    const property = await getproperty(
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
    if (!property) {
      res.status(400).send(`property with id ${id} was not found!`)
    } else {
      res.status(200).json(property)
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while getting properties by id!')
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params // Use the correct parameter name
    const { title, description, location, pricePerNight, bedroomCount, bathRoomCount, maxGuestsCount, hostId, rating } = req.query
    const propertyId = await getPropertiesById(
      id, 'i1234567-89f0-1234-5678-9abcdef01234',
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

    if (!propertyId) {
      res.status(400).send(`property with id ${id} was not found!`)
    } else {
      res.status(200).json(propertyId)
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while getting properties by id!')
  }
})

router.post('/', async (req, res) => {
  try {
    const { id, title, description, location, pricePerNight, bedroomCount, bathRoomCount, maxGuestsCount, hostId, rating } = req.body
    const newProperty = await createProperty(
      id, 'i1234567-89f0-1234-5678-9abcdef01234',
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
    if (!newProperty) {
      res.status(400).send(`property with id ${id} was not found!`)
    } else {
      res.status(201).json(newProperty)
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while getting properties by id!')
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { title, description, location, pricePerNight, bedroomCount, bathRoomCount, maxGuestsCount, hostId, rating } = req.body
    const updateProperty = await updatedPropertyById(
      id, 'i1234567-89f0-1234-5678-9abcdef01234',
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
    if (!updateProperty) {
      res.status(400).send(`property with id ${id} was not found!`)
    } else {
      res.status(200).json(updateProperty)
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while getting properties by id!')
  }
})
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deletedProperty = await deleteProperty(
      id, 'i1234567-89f0-1234-5678-9abcdef01234'
    )

    if (!deletedProperty) {
      res.status(404).send(`Properties with id ${id} was not found!`)
    } else {
      res.status(200).json({
        message: `Properties with id ${deletedProperty} was deleted!`
      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while deleting properties by id!')
  }
})

export default router
