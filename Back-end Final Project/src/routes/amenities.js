import { Router } from "express";
import getAmenities from "../services/amenities/getAmenities.js";
import createAmenity from "../services/amenities/createAmenity.js";
import getAmenityById from '../services/amenities/getAmenityById.js'
import updateAmenityById from '../services/amenities/updateAmenityById.js';
import deleteAmenityById from '../services/amenities/deleteAmenityById.js';
import auth from "../middleware/auth.js";

const router = Router();

router.get("/", async (req, res) => {
  const { name } = req.query
  const amenities = await getAmenities(name)
  console.log("name:", name)
  console.log("amenities:", amenities)
  res.json(amenities)
})

router.post("/", auth, async (req, res) => {  //  auth,
  const { id, name } = req.body;
  const newAmenity = createAmenity(id, name);
  console.log("newAmenity:", newAmenity)
  res.status(201).json(newAmenity);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const amenityById = await getAmenityById(id);
  console.log("amenityById:", amenityById)

  if (!amenityById) {
    return res.status(404).json({ message: `User with id ${id} was not found!` });
  } else {
    res.status(200).json(amenityById);
  }
});

router.delete("/:id", async (req, res) => {   // auth,
  const { id } = req.params;
  const amenityById = deleteAmenityById(id);
  console.log("amenityById:", amenityById)

  if (!amenityById) {
    return res.status(404).json({
      message: `Amenity with id ${id} was deleted!`
    });
  } else {
    res.status(200).json({
      message: `Amenity with id ${id} successfully deleted!`,
      amenityById,
    })
  }
});

router.put('/:id', async (req, res) => {  //
  const { id } = req.params;
  const { name } = req.body;
  const updatedAmenityById = await updateAmenityById(id, { name });
  console.log("name:", name)
  console.log("updatedAmenityById:", updatedAmenityById)

  if (!updatedAmenityById) {
    return res.status(404).json({
      message: `Amenity with id ${id} not found`,
    });
  } else {
    res.status(200).json({
      message: `Amenity with id ${id} successfully updated`,
      updatedAmenityById,
    });
  }
});

export default router