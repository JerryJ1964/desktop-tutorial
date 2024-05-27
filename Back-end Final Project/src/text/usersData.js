import { fetchUser } from "../web/api.js";

export async function usersData(usersId) {
  const usersData = await fetchUser(usersId);
  return `User: ${usersData.name}, Email: ${usersData.email}`;
}
