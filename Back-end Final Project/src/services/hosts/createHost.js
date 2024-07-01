import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const createANewHost = (username, password, name, email, phoneNumber, profilePicture, aboutMe) => {
  console.log("username:", username)
  //console.log("hostsData.hosts:", hostsData.hosts)
  const createdANewHost = prisma.hosts.create({
    data: {
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture,
      aboutMe,
    }
  })
  if (!createANewHost || createANewHost.id === 0) {
    throw new Error('Host creation failed')
  }
  return createdANewHost;
}

export default createANewHost;
