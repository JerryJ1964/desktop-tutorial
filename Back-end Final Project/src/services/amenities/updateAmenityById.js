import { PrismaClient } from '@prisma/client'
import NotFoundError from '../../middleware/NotFoundError.js'
const updateAmenityById = (id, name) => {
  const prisma = new PrismaClient()


  const updatedAmenity = prisma.amenities.updateMany({
    where: {
      id,
      name
    },
    data: {
      id,
      name
    }
  })

  if (!updatedAmenity || updatedAmenity.count === 0) {
    throw new NotFoundError('Amenity', id)
  }

  return {
    message: `Amenity with id ${id} was updated!`
  }
}

export default updateAmenityById