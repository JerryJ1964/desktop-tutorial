import { fetchUser } from "../web/api.js";

export async function printUserData(userId) {
  const userData = await fetchUser(userId);
  return `User: ${userData.name}, Email: ${userData.email}`;
}
