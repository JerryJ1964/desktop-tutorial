import { PrismaClient } from '@prisma/client'
import NotFoundError from '../../middleware/NotFoundError.js'

const deleteProperty = async (id) => {
  const prisma = new PrismaClient()


  const deleteProperty = await prisma.properties.deleteMany({
    where: {
      id
    }
  })

  if (!deleteProperty || deleteProperty.count === 0) {
    throw new NotFoundError('Property', id)
  }

  return id
}

export default deleteProperty;
