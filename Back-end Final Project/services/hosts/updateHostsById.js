import { PrismaClient } from '@prisma/client'
import NotFoundError from '../../errors/NotFoundError.js'

const updateHostsById = async (id, username, password, name, email, phoneNumber, profilePicture, aboutMe) => {
  const prisma = new PrismaClient()
  const updatedHosts = await prisma.host.updateMany({
    where: {
      id
    },
    data: {
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture,
      aboutMe
    }
  })

  if (!updatedHosts || updatedHosts.count === 0) {
    throw new NotFoundError('Hosts', id)
  }

  return {
    message: `Host with id ${id} was updated!`
  }
}

export default updateHostsById