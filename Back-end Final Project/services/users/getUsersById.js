import NotFoundError from '../../errors/NotFoundError.js'
import { PrismaClient } from '@prisma/client'

const getUsersById = async (id) => {
  const prisma = new PrismaClient()
  const users = await prisma.users.findUnique({
    where: {
      id
    }
  })

  if (!users) {
    throw new NotFoundError('Users', id)
  }

  return users
}


export default getUsersById



