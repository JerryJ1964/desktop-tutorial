import { PrismaClient } from '@prisma/client'

const getHosts = async (username, email) => {
  const prisma = new PrismaClient()
console.log("username:", username)
  //console.log("hostsData.hosts:", hostData.hosts)
  return prisma.hosts.findMany({
    where: {
      username,
      email
    }
  })
}

export default getHosts;