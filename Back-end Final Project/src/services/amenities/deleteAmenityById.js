import { PrismaClient } from '@prisma/client'

const deleteAmenityById = (id) => {
  const prisma = new PrismaClient()
  console.log("id:", id)
  //console.log("amenityData.amenities:", amenityData.amenities)
  const amenityById = prisma.amenities.deleteMany({
    where: {
      id
    }
  })

  if (!deleteAmenityById || deleteAmenityById.count === 0) {
    return null
  }
  return amenityById
}
export default deleteAmenityById