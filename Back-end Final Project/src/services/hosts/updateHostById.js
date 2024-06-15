import { PrismaClient } from '@prisma/client'
import NotFoundError from '../../middleware/NotFoundError.js'

const updateHostById = (id, username, password, name, email, phoneNumber, profilePicture, aboutMe) => {
  const prisma = new PrismaClient()
  const updatedHost = prisma.hosts.updateMany({
    where: {
      id,
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture,
      aboutMe
    },
    data: {
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

  if (!updatedHost || updatedHost.count === 0) {
    throw new NotFoundError('Host', id)
  }

  return {
    message: `Host with id ${id} was updated!`
  }
}
export default updateHostById;