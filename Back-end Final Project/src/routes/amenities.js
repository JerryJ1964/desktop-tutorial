import { Router } from "express";
import getAmenities from "../services/amenities/getAmenities.js";
import createAmenities from "../services/amenities/createAmenity.js";
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

router.post("/", auth, async (req, res, next) => {
  try {
    const { name } = req.body;
    console.log("req.body:", req.body)
    console.log("name:", name)
    // Add more entries
    const amenity = createAmenities(name);
    res.status(201).json(amenity);
  } catch (error) {
    next(error);
  }
  //res.status(201).json(amenity);
  //});
});



router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const amenity = await getAmenityById(id);
  console.log("amenityById:", amenity)

  if (!amenity) {
    return res.status(404).json({ message: `User with id ${id} was not found!` });
  } else {
    res.status(200).json(amenity);
  }
});

router.delete("/:id", async (req, res) => {   // auth,
  const { id } = req.params;
  const amenity= await deleteAmenityById(id);
  console.log("amenityById:", amenity)

  if (!amenity) {
    return res.status(404).json({
      message: `Amenity with id ${id} was deleted!`
    });
  } else {
    res.status(200).json({
      message: `Amenity with id ${id} successfully deleted!`,
      amenity,
    })
  }
});

router.put('/:id', async (req, res) => {  //
  const { id } = req.params;
  const amenity = await updateAmenityById(id);
  console.log("id:", id, "amenity:", amenity)
  console.log("amenity:", amenity)

  if (!amenity) {
    return res.status(404).json({
      message: `Amenity with id ${null} not found`,
    });
  } else {
    res.status(200).json({
      message: `Amenity with id ${id} successfully updated`,
      amenity,
    });
  }
});

export default router