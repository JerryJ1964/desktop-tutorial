import express from 'express'
import getAmenity from "../services/amenities/getAmenities.js";
import createAmenity from "../services/amenities/createAmenities.js";
import getAmentyById from '../services/amenities/getAmenitiesById.js'
import updateAmenityById from '../services/amenities/updateAmenitiesById.js';
import deleteAmenity from '../services/amenities/deleteAmenities.js';

const router = express.Router()

router.get("/", async (req, res) => {
  try {
    const { id } = req.params
    const { name } = req.body
    const amenity = await getAmenity(
      id,
      name,
    )
    if (!amenity) {
      res.status(404).send(`User with id ${id} was not found!`)
    } else {
      res.status(200).json(amenity)
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while getting users by id!')
  }
})
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const { name } = req.body
    const amenityById = getAmentyById(
      id, 'u3456789-01rs-tuvw-01cd-ef0123456789',
      name, 'Wifi'
    )
    if (!amenityById) {
      res.status(404).send(`User with id ${id} was not found!`)
    } else {
      res.status(200).json(amenityById)
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while getting users by id!')
  }
})


router.post('/', async (req, res) => {
  try {
    const { id } = req.body
    const { name } = req.body
    const newAmenities = createAmenity(
      id,
      name, 'Wifi'
    )
    if (!newAmenities) {
      res.status(404).send(`User with id ${id} was not found!`)
    } else {
      res.status(201).json(newAmenities)
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while getting users by id!')
  }
})


router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { name } = req.body
    const updatedAmenityById = await updateAmenityById(
      id, 'u3456789-01rs-tuvw-01cd-ef0123456789',
      name
    )
    if (!updateAmenityById) {
      res.status(404).send(`User with id ${id} was not found!`)
    } else {
      res.status(200).json(updatedAmenityById)
    }
  } catch (error) {
    console.error(error)
    res.status(400).send('Something went wrong while getting users by id!')
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { name } = req.body
    const deletedAmenityId = await deleteAmenity(
      id, 'u3456789-01rs-tuvw-01cd-ef0123456789',
      name
    )

    if (!deletedAmenityId) {
      res.status(404).send(`DeleteAmenities with id ${id} was not found!`)
    } else {
      res.status(200).json({
        message: `DeleteAmenities with id ${deletedAmenityId} was deleted!`
      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while deleting amenities by id!')
  }
})

export default router