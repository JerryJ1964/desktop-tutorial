import { PrismaClient } from '@prisma/client'
import NotFoundError from '../../middleware/NotFoundError.js'
const updateUserById = (id, username, password, name, email, phoneNumber, profilePicture) => {
  const prisma = new PrismaClient()
  const updateUser = prisma.users.updateMany({
    where: {
      id,
      username,
      phoneNumber,
      password,
      name,
      email,
      phoneNumber,
      profilePicture
    },
    data: {
      id,
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture
    }
  })

  if (!updateUser || updateUser.count === 0) {
    throw new NotFoundError('User', id)
  }

  return {
    message: `User with id ${id} was updated!`
  }
}

export default updateUserById