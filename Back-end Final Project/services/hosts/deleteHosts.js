import { PrismaClient } from '@prisma/client'
import NotFoundError from '../../errors/NotFoundError.js'

const deleteHosts = async (id) => {
  const prisma = new PrismaClient()


  const deletedHosts = await prisma.host.deleteMany({
    where: {
      id
    }
  })

  if (!deletedHosts || deleteHosts.count === 0) {
    throw new NotFoundError('Hosts', id)
  }

  return id
}
export default deleteHosts

