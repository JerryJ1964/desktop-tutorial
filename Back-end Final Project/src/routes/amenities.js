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
  //console.log("GET amenities")
  const amenities = await getAmenities(name)
  //console.log("amenities:", amenities)
  res.json(amenities)
})

router.post("/", auth, async (req, res) => {
  const { id, name } = req.body;
  const newAmenity = createAmenity(id, name);
  res.status(201).json(newAmenity);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const amenity = await getAmenityById(id);

  if (!amenity) {
    res.status(404).json({ message: `User with id ${id} was not found!` });
  } else {
    res.status(200).json(amenity);
  }
});

router.delete("/:id", auth, async (req, res) => {
  const { id } = req.params;
  const amenity = await deleteAmenityById(id);

  if (amenity) {
    res.status(200).send({
      message: `Amenity with id ${id} successfully deleted!`,
      amenity,
    });
  } else {
    res.status(404).json({
      message: `Amenity with id ${id} was deleted!`
    })
    console.log(deleteAmenityById);
  }
});

router.put('/:id', auth, async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const amenity = updateAmenityById(id, {
    name,
  });

  if (amenity) {
    res.status(200).send({
      message: `Amenity with id ${id} successfully updated`,
      amenity,
    });
  } else {
    res.status(404).json({
      message: `AMenity with id ${id} not found`,
    });
  }
});

export default router