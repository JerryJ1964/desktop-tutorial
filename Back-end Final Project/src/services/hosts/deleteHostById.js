import { PrismaClient } from '@prisma/client'
import NotFoundError from '../../middleware/NotFoundError.js'

const deleteHostById = async (id) => {
  const prisma = new PrismaClient()


  const deleteHost = prisma.hosts.deleteMany({
    where: {
      id
    }
  })

  if (!deleteHost || deleteHost.count === 0) {
    throw new NotFoundError('Host', id)
  }

  return id
}

export default deleteHostById

