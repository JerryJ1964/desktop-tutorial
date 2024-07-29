import axios from "axios";

export async function fetchUser(userId) {
  const response = await axios.get(`https://api.example.com/users/${userId}`);
  return response.data;
}
