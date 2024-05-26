import { PrismaClient } from '@prisma/client'
import NotFoundError from '../../errors/NotFoundError.js'

const deleteUsers = async (id) => {
  const prisma = new PrismaClient()


  const deletedUsers = await prisma.Users.deleteMany({
    where: {
      id
    }
  })

  if (!deletedUsers || deleteUsers.count === 0) {
    throw new NotFoundError('Users', id)
  }

  return id
}
export default deleteUsers

