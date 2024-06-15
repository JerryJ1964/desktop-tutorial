//import NotFoundError from '../../middleware/NotFoundError.js'
import { PrismaClient } from '@prisma/client'

const getPropertyById = async (id) => {
  const prisma = new PrismaClient()


  return prisma.properties.findUnique({
    where: {
      id
    }
  })
}

export default getPropertyById
