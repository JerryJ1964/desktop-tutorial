import { PrismaClient } from '@prisma/client'

const getPropertyById = async (id) => {
  const prisma = new PrismaClient()
  //console.log("id:", id)
  return prisma.properties.findUnique({
    where: {
      id,
    }
  })
}
export default getPropertyById