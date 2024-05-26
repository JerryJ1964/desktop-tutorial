import { PrismaClient } from '@prisma/client'

const createHost = async (id, username, password, name, email, phoneNumber, profilePicture, aboutMe) => {
  const prisma = new PrismaClient()

  return prisma.host.create({
    where: {
      id,
    }
      (property), data: {
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

export default createHost