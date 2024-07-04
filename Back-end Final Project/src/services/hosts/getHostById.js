import { PrismaClient } from '@prisma/client'

const getHostById = async (id) => {
  const prisma = new PrismaClient()
  //console.log("id:", id)
  //console.log("hostsData.hosts:", hostData.hosts)
  return prisma.hosts.findUnique({
    where: {
      id,
    }
  })
}
export default getHostById