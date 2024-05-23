import { PrismaClient } from '@prisma/client'
import NotFoundError from '../../errors/NotFoundError.js'

const deleteHost = async (id) => {
  const prisma = new PrismaClient()


  const deletedHost = await prisma.host.deleteMany({
    where: {
      id
    }
  })

  if (!deletedHost || deleteHost.count === 0) {
    throw new NotFoundError('Host', id)
  }

  return id
}
export default deleteHost

