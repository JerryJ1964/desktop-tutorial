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
  const user = await getUserById(id);

  if (!user) {
    return res.status(404).json({
      message: `User with id ${id} not found`,
    });
  }

  res.status(200).json(user);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await deleteUserById(id);
  console.log("id:", id);
  console.log("user:", user);

  if (!user) {
    console.log("users.js - user is null")
    return res.status(404).json({
      message: `User with id ${id} not found!`,
    });
  } else {
    console.log("users - user is not null")
    res.status(200).json({
      message: `User with id ${id} successfully deleted!`,
      user,
    });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedUserById = await updateUserById(id);

  if (updatedUserById) {
    res.status(200).json({
      message: `User with id ${id} successfully updated`,
      updatedUserById,
    });
  } else {
    return res.status(404).json({
      message: `User with id ${id} not found`,
    });
  }
});

export default router;
