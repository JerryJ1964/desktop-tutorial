import { PrismaClient } from '@prisma/client'
const updateAmenityById = (id) => {
  const prisma = new PrismaClient()
  console.log("id:", id)
  //console.log("amenityData.amenities:", amenityData.amenities)
  const updatedAmenityById = prisma.amenities.updateMany({
    where: {
      id
    },
    data: {
      id,
      name: 'Updated Amenity',
    }
  })

  if (!updateAmenityById || updateAmenityById.count === 0) {
    return null
  }
  return updatedAmenityById
}
export default updateAmenityById