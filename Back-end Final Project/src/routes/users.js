import { Router } from "express";
import getUsers from "../services/users/getUser.js";
import createUser from "../services/users/createUser.js";
import getUserById from "../services/users/getUserById.js";
import deleteUserById from "../services/users/deleteUserById.js";
import updateUserById from "../services/users/updateUserById.js";
import auth from "../middleware/auth.js";

const router = Router();

router.get("/", async (req, res) => {
  const { username, email } = req.query;
  const users = await getUsers(username, email);
  console.log("username:", username, "email:", email)
  res.json(users);
})

router.post("/", auth, async (req, res) => {
  const { username, password, name, email, phoneNumber, profilePicture, aboutMe } = req.body;
  const user = await createUser(username, password, name, email, phoneNumber, profilePicture, aboutMe);
  console.log("user:", user)
  res.status(201).json(user); 
})

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await getUserById(id);
  console.log("id:", id)
  console.log("users:", user)

  if (!user) {
    return res.status(404).json({
      message: `User with id ${user} not found`, 
      });
  } else {
    return res.status(200).json(user);
  }
});


router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await deleteUserById(id);
  console.log("id:", id)
  console.log("user:", user)

  if (!user) {
    return res.status(404).json({
      message: `User with id ${id} not found`,
    });
  } else {
    res.status(200).json({
      message: `User with id ${id} successfully deleted`,
      user,
    });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const users = await updateUserById(id);
  console.log("router put id:", id)
  console.log("router put user:", users)

  if (users) {
	console.log("user with id:",updateUserById,"gevonden!")
    res.status(200).json({
      message: `User with id ${id} successfully updated`,
      users,
    });
} else {
	console.log("user with id:",id,"not found")
    return res.status(404).json({
      message: `User with id ${null} not found`,
    });
  }
});

export default router;