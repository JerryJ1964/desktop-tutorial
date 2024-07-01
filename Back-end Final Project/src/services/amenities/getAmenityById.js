import { PrismaClient } from '@prisma/client'

const getAmenityById = (id) => {
  const prisma = new PrismaClient()
  console.log("id:", id)
  //console.log("amenityData.amenities:", amenityData.amenities)
  const amenityById = prisma.amenities.findUnique({
    where: {
      id
    }
  })

  //if (!getAmenityById || getAmenityById.id === 0) {
    //hrow new Error(`Amenity with id ${id} not found`)
  //}
  return amenityById
}
  export default getAmenityById