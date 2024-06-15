import { Router } from "express";
import getProperties from '../services/properties/getProperty.js';
import createProperty from '../services/properties/createProperty.js';
import getPropertyById from '../services/properties/getPropertyById.js';
import updatePropertyById from '../services/properties/updatePropertyById.js';
import deletePropertyById from '../services/properties/deletePropertyById.js';
import auth from "../middleware/auth.js";

const router = Router();

router.get("/", async (req, res) => {
  const { title, location } = req.query;
  const properties = await getProperties(title, location);
  res.json(properties);
});

router.post("/", auth, async (req, res) => {
  const { title, description, location, pricePerNight, bedroomCount, bathRoomCount, maxGuestsCount, hostId, rating } = req.body;
  const newProperty = createProperty(
    title,
    description,
    location,
    pricePerNight,
    bedroomCount,
    bathRoomCount,
    maxGuestsCount,
    hostId,
    rating
  );
  res.status(201).json(newProperty);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params; // Use the correct parameter name
  const property = await getPropertyById(id);

  if (!property) {
    res.status(404).json({ message: `Property with id ${id} was not found!` });
  } else {
    res.status(200).json(property);
  }
});

router.delete("/:id", auth, async (req, res) => {
  const { id } = req.params;
  const property = await deletePropertyById(id);

  if (property) {
    res.status(200).send({
      message: `Property with id ${id} successfully deleted`,
      property,
    });
  } else {
    res.status(404).json({
      message: `Proerty with id ${id} not found`,
    });
  }
});

router.put("/:id", auth, async (req, res) => {
  const { id } = req.params;
  const { title,
    description,
    location,
    pricePerNight,
    bedroomCount,
    bathRoomCount,
    maxGuestsCount,
    hostId,
    rating,
  } = req.body;
  const property = updatePropertyById(id, { title, description, location, pricePerNight, bedroomCount, bathRoomCount, maxGuestsCount, hostId, rating });

  if (property) {
    res.status(200).send({
      message: `property with id ${id} successfully updated`,
      property,
    });
  } else {
    res.status(404).json({
      message: `User with id ${id} not found`,
    });
  }
});



export default router
