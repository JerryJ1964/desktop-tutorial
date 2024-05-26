import { PrismaClient } from '@prisma/client'
import NotFoundError from '../../errors/NotFoundError.js'

const updateUsersById = async (id, username, password, name, email, phoneNumber, profilePicture) => {
  const prisma = new PrismaClient()
  const updatedUsers = await prisma.users.updateMany({
    where: {
      id
    },
    data: {
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture
    }
  })

  if (!updatedUsers || updatedUsers.count === 0) {
    throw new NotFoundError('Users', id)
  }

  return {
    message: `Users with id ${id} was updated!`
  }
}

export default updateUsersById