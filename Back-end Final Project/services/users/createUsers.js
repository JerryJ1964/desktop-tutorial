import { PrismaClient } from '@prisma/client'
import NotFoundError from '../../errors/NotFoundError.js'

const createUsers = async (id, username, password, name, email, phoneNumber, profilePicture) => {
  const prisma = new PrismaClient()

  return prisma.users.create({
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
        profilePicture
      }
  })
}

export default createUsers