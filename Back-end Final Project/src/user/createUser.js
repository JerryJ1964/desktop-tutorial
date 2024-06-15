import axios from "axios";
import { isValidUsername } from "./isValidUserName.js";

export async function createUser(username, email) {
  if (!username || !email) {
    throw new Error("Username and email are required.");
  }

  if (!isValidUsername(username)) {
    console.log(username)
    throw new Error("Username is invalid.");
  }

  const response = await axios.post("https://api.example.com/users", {
    username,
    email,
  });

  return response.data;
}