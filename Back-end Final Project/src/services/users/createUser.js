import { PrismaClient } from "@prisma/client";
const createUser = async (
  username,
  password,
  name,
  email,
  phoneNumber,
  profilePicture
) => {
  const prisma = new PrismaClient();
  const data = {
    username,
    password,
    name,
    email,
    phoneNumber,
    profilePicture,
  };
  const newUser = await prisma.users.create({
    data,
  });
  if (!newUser || newUser.id) {
    return null;
  }
  return newUser;
};
export default createUser;
