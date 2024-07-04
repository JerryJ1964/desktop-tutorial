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
  console.log("username:", username, "email:", email)
  res.json(hosts);
});

router.post("/", auth, async (req, res) => { // auth,
  const { username, password, name, email, phoneNumber, profilePicture, aboutMe } = req.body;
  const host = createHost(username, password, name, email, phoneNumber, profilePicture, aboutMe);
  console.log("host:", host)
  res.status(201).json(host);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const host = await getHostById(id);
  console.log("id:", id)
  console.log("host:", host)

  if (!host) {
    return res.status(404).json({
      message: `Host with id ${id} was not found!`
    });
  } else {
    res.status(200).json(host);
  }
});

router.delete("/:id", async (req, res) => {  //  auth,
  const { id } = req.params;
  const hosts = await deleteHostById(id);
  console.log("id:", id)
  console.log("host:", hosts)

  if (!hosts) {
    return res.status(404).json({
      message: `Host with id ${id} not found!`
    });
  } else {
    res.status(200).json({
      message: `Host with id ${id} was deleted!!`,
      hosts,
    });
  }
});

router.put("/:id", async (req, res) => {  //  auth,
  const { id } = req.params;
  //const { username, password, name, email, phoneNumber, profilePicture, aboutMe } = req.body;
  const host = await updateHostById(id);
  console.log("id:", id)
  console.log("host:", host)

  if (!host) {
    return res.status(404).json({
      message: `Host with id ${null} was not found!`,
    });
  } else {
    res.status(200).json({
      message: `Host with id ${id} successfully updated`,
      host,
    });
  }
});


export default router
