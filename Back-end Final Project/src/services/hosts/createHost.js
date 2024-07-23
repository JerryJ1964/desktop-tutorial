import { PrismaClient } from "@prisma/client";
const createHosts = async (
  username,
  password,
  name,
  email,
  phoneNumber,
  profilePicture,
  aboutMe
) => {
  const prisma = new PrismaClient();

  const data = {
    username,
    password,
    name,
    email,
    phoneNumber,
    profilePicture,
    aboutMe,
  };
  const newHost = prisma.host.create({
    data,
  });
  if (!newHost || newHost.id === 0) {
    return null;
  }
  return newHost;
};
export default createHosts;
