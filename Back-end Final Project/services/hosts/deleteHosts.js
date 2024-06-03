import { PrismaClient } from '@prisma/client'
import NotFoundError from '../../errors/NotFoundError.js'

const deleteHosts = async (id) => {
  const prisma = new PrismaClient()


  const deletedHost = await prisma.hosts.deleteMany({
    where: {
      id
    }
  })

  if (!deletedHost || deleteHosts.count === 0) {
    throw new NotFoundError('Hosts', id)
  }

  return id
}
export default deleteHosts

