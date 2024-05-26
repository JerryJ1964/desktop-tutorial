import hostsData from '../../src/data/hosts.json' assert { type: 'json' }
import { PrismaClient } from '@prisma/client'

const getHost = async (id, username, password, name, email, phoneNumber, profilePicture, aboutMe) => {
  const prisma = new PrismaClient()

  return prisma.host.findMany({
    where: {
      id,
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture,
      aboutMe
    }
  })
}

export default getHost