//import NotFoundError from '../../middleware/NotFoundError.js'
import { PrismaClient } from '@prisma/client'

const getReviewById = async (id) => {
  const prisma = new PrismaClient()
  //console.log("id:", id)

  return prisma.reviews.findUnique({
    where: {
      id,
    }
  })
}

export default getReviewById;
