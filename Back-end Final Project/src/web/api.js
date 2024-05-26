import axios from "axios";

export async function fetchUser(usersId) {
  const response = await axios.get(`https://api.example.com/users/${usersId}`);
  return response.data;
}
