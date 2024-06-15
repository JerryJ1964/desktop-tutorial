import { PrismaClient } from '@prisma/client'
import NotFoundError from '../../middleware/NotFoundError.js'

const updatePropertyById = (id, title, description, location, pricePerNight, bedroomCount, bathRoomCount, maxGuestsCount, hostId, rating) => {
  const prisma = new PrismaClient()
  const updatedProperty = prisma.properties.updateMany({
    where: {
      id,
      title,
      description,
      location,
      pricePerNight,
      bedroomCount,
      bathRoomCount,
      maxGuestsCount,
      hostId,
      rating
    },
    data: {
      id,
      title,
      description,
      location,
      pricePerNight,
      bedroomCount,
      bathRoomCount,
      maxGuestsCount,
      hostId,
      rating
    }
  })

  if (!updatedProperty || updatedProperty.count === 0) {
    throw new NotFoundError('Property', id)
  }

  return {
    message: `Property with id ${id} was updated!`
  }
}


export default updatePropertyById