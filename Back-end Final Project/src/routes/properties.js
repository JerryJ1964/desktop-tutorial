import { Router } from "express";
import getProperties from "../services/properties/getProperty.js";
import createProperty from "../services/properties/createProperty.js";
import getPropertyById from "../services/properties/getPropertyById.js";
import updatePropertyById from "../services/properties/updatePropertyById.js";
import deletePropertyById from "../services/properties/deletePropertyById.js";
//import auth from "../middleware/auth.js";

const router = Router();

router.get("/", async (req, res) => {
  const { title, location } = req.query;
  const properties = await getProperties(title, location);
  console.log("title:", title, "location:", location);
  console.log("properties:", properties);
  res.json(properties);
});

router.post("/", async (req, res, next) => {
  // auth,
  try {
    const {
      title,
      location,
      description,
      pricePerNight,
      bedroomCount,
      bathRoomCount,
      maxGuestCount,
      hostId,
      rating,
    } = req.body;
    console.log("req.body:", req.body);
    // Validate the input fields
    if (
      !title ||
      !location ||
      !description ||
      !pricePerNight ||
      !bedroomCount ||
      !bathRoomCount ||
      !maxGuestCount ||
      !hostId
    ) {
      return res.status(400).json({
        message: "Missing required fields!",
      });
    }
    const newProperty = createProperty(
      title,
      location,
      description,
      pricePerNight,
      bedroomCount,
      bathRoomCount,
      maxGuestCount,
      hostId,
      rating
    );
    res.status(201).json(newProperty);
    next();
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params; // Use the correct parameter name
  const property = await getPropertyById(id);
  console.log("id:", id);
  console.log("properties:", property);

  if (!property) {
    return res
      .status(404)
      .json({ message: `Property with id ${id} was not found!` });
  } else {
    res.status(200).json(property);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const property = await deletePropertyById(id);
  console.log("id:", id);
  console.log("property:", property);

  if (!property) {
    return res.status(404).json({
      message: `Proerty with id ${id} successfully deleted!`,
    });
  } else {
    res.status(200).json({
      message: `Property with id ${id} was deleted`,
      property,
    });
  }
});

router.put("/:id", async (req, res) => {
  //  auth,
  const { id } = req.params;
  const property = await updatePropertyById(id);
  console.log("id:", id);
  console.log("property:", property);

  if (!property) {
    return res.status(404).json({
      message: `Propperty with id ${null} not found`,
    });
  } else {
    res.status(200).json({
      message: `property with id ${id} successfully updated`,
      property,
    });
  }
});

export default router;
