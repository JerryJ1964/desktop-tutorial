import { Router } from "express";
import getUsers from "../services/users/getUsers.js";
import createUser from "../services/users/createUser.js";
import getUserById from "../services/users/getUserById.js";
import deleteUserById from "../services/users/deleteUserById.js";
import updateUserById from "../services/users/updateUserById.js";
//import auth from "../middleware/auth.js";

const router = Router();

router.get("/", async (req, res) => {
  const { username, email } = req.query;
  const users = await getUsers(username, email);
  console.log("username:", username, "email:", email);
  res.json(users);
});

router.post("/", async (req, res, next) => {
  try {
    const { username, password, name, email, phoneNumber, profilePicture } =
      req.body;
    console.log("req.body:", req.body);
    // Validate the input fields
    if (
      !username ||
      !password ||
      !name ||
      !email ||
      !phoneNumber ||
      !profilePicture
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    const newUser = createUser(
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture
    );
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const users = await getUserById(id);
  //console.log("id:", id)
  console.log("user:", users);

  if (!users) {
    return res.status(404).json({
      message: `User with id ${users} not found`,
    });
  } else {
    return res.status(200).json(users);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await deleteUserById(id);
  console.log("id:", id);
  console.log("user:", user);

  if (!user) {
    return res.status(404).json({
      message: `User with id ${id} not found!`,
    });
  } else {
    res.status(200).json({
      message: `User with id ${id} successfully deleted!`,
      user,
    });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedUserById = await updateUserById(id);
  console.log("router put id:", id);
  console.log("router put user:", updatedUserById);

  if (updatedUserById) {
    console.log("user with id:", updateUserById, "gevonden!");
    res.status(200).json({
      message: `User with id ${id} successfully updated`,
      updatedUserById,
    });
  } else {
    console.log("user with id:", id, "not found");
    return res.status(404).json({
      message: `User with id ${null} not found`,
    });
  }
});

export default router;
