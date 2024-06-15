import { PrismaClient } from '@prisma/client'

const getProperties = (title, location) => {
  const prisma = new PrismaClient()

  return prisma.properties.findMany({
    where: {
      title,
      location
    }
  })
}

export default getProperties;