import { PrismaClient } from '@prisma/client'
const deleteHostById = (id) => {
  const prisma = new PrismaClient()
  console.log("id:", id)
  //console.log("hostsData.hosts:", hostData.hosts)
  const deletedHostById = prisma.hosts.deleteMany({
    where: {
      id
    }
  })

  if (!deleteHostById || deleteHostById.count === 0) {
    throw new Error('Host not found', id)
  }
  return deletedHostById
}
export default deleteHostById

