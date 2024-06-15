import { PrismaClient } from '@prisma/client'
import NotFoundError from '../../middleware/NotFoundError.js'

const deleteUserById = async (id) => {
  const prisma = new PrismaClient()


  const deleteUser = prisma.users.deleteMany({
    where: {
      id
    }
  })

  if (!deleteUser || deleteUser.count === 0) {
    throw new NotFoundError('User', id)
  }

  return id
}
export default deleteUserById;