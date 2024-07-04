import { PrismaClient } from '@prisma/client';
const createHost = async (username, password, name, email, phoneNumber, profilePicture, aboutMe) => {
  const prisma = new PrismaClient()

  const data = {
    username,
    password,
    name,
    email,
    phoneNumber,
    profilePicture,
    aboutMe
  };
  const host = prisma.hosts.create({
    data,
  });
  if (!host || host.id === 0) {
    return null
  }
  return createHost
}
export default createHost;
