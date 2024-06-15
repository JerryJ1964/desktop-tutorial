import { PrismaClient } from '@prisma/client'

const getHosts = (username, email) => {
  const prisma = new PrismaClient()

  return prisma.hosts.findMany({
    where: {
      username,
      email
    }
  })
}

export default getHosts;