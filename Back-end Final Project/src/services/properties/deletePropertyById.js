import { PrismaClient } from '@prisma/client'

const deletePropertyById = (id) => {
  const prisma = new PrismaClient()
//console.log("id:", id)
  const deletedPropertyById = prisma.properties.deleteMany({
    where: {
      id,
    }
  })
  if (!deletePropertyById || deletePropertyById.count === 0) {
    throw new Error('Property not found')
  }
  return deletedPropertyById
}
export default deletePropertyById
