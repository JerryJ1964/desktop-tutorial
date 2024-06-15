import { Router } from "express";
import getUsers from "../services/users/getUser.js";
import createUser from "../services/users/createUser.js";
import getUserById from "../services/users/getUserById.js";
import deleteUserById from "../services/users/deleteUserById.js";
import updateUserById from "../services/users/updateUserById.js";
import auth from "../middleware/auth.js";

const router = Router();

router.get("/", async (req, res) => {
  const { username } = req.query
  const users = await getUsers(username);
  res.status(200).json(users)
})

router.post("/", auth, async (req, res) => {
  const { username, password, name, email, phoneNumber, ProfilePicture } = req.body;
  const newUser = createUser(username, password, name, email, phoneNumber, ProfilePicture);
  res.status(201).json(newUser)
})
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log("id:", id)
  const user = await getUserById(id);

  if (!user) {
    res.status(404).json({ message: `User with id ${id} not found` });
  } else {
    res.status(200).send(user);
  }
});

router.delete("/:id", auth, async (req, res) => {
  const { id } = req.params;
  const user = await deleteUserById(id);

  if (user) {
    res.status(200).send({
      message: `User with id ${id} successfully deleted`,
      user,
    });
  } else {
    res.status(404).json({
      message: `User with id ${id} not found`,
    });
  }
});

router.put("/:id", auth, async (req, res) => {
  const { id } = req.params;
  const { username, password, name, email, phoneNumber, ProfilePicture } = req.body;
  const user = updateUserById(id, { username, password, name, email, phoneNumber, ProfilePicture })

  if (user) {
    res.status(200).send({
      message: `User with id ${id} successfully updated`,
      user,
    });
  } else {
    res.status(404).json({
      message: `User with id ${id} not found`,
    });
  }
});



export default router;
