import { Router } from "express";
import getHost from '../services/hosts/getHost.js';
import createHost from '../services/hosts/createHost.js';
import getHostById from '../services/hosts/getHostById.js';
import updateHostById from '../services/hosts/updateHostById.js';
import deleteHostById from '../services/hosts/deleteHostById.js';
import auth from "../middleware/auth.js";

const router = Router();

router.get("/", async (req, res) => {
  const { username, email } = req.query;
  const hosts = await getHost(username, email);
  res.json(hosts);
});

router.post("/", auth, async (req, res) => {
  const { username, password, name, email, phoneNumber, profilePicture, aboutMe } = req.body;
  const newHost = createHost(username, password, name, email, phoneNumber, profilePicture, aboutMe);
  res.status(201).json(newHost);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const host = await getHostById(id);

  if (!host) {
    res.status(404).json({ message: `Host with id ${id} was not found!` });
  } else {
    res.status(200).json(host)
  }
});

router.delete("/:id", auth, async (req, res) => {
  const { id } = req.params;
  const host = await deleteHostById(id);

  if (host) {
    res.status(200).send({
      message: `Host with id ${id} was deleted!!`,
      host,
    });
  } else {
    res.status(404).json({
      message: `Host with id ${id} not found!`
    });
  }
});

router.put("/:id", auth, async (req, res) => {
  const { id } = req.params;
  const { username, password, name, email, phoneNumber, profilePicture, aboutMe } = req.body;
  const host = updateHostById(id, { username, password, name, email, phoneNumber, profilePicture, aboutMe });

  if (host) {
    res.status(200).send({
      message: `Host with id ${id} successfully updated`,
      host,
    });
  } else {
    res.status(404).json({
      message: `Host with id ${id} was not found!`,
    });
  }
});


export default router
