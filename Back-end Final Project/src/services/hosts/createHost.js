import { PrismaClient } from '@prisma/client';
const createHosts = async ( username, password, name, email, phoneNumber, profilePicture, aboutMe) => {
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
  if (!host || host.username === 0) {
    return null
  }
  return host
}
export default createHosts
