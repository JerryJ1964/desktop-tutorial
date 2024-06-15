import { PrismaClient } from '@prisma/client'
import NotFoundError from '../../middleware/NotFoundError.js'

const deleteAmenityById = async (id) => {
  const prisma = new PrismaClient()


  const deleteAmenity = prisma.amenities.deleteMany({
    where: {
      id
    }
  })

  if (!deleteAmenity || deleteAmenity.count === 0) {
    throw new NotFoundError('Amenity', id)
  }

  return id
}

export default deleteAmenityById