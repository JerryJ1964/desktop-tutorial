import { PrismaClient } from '@prisma/client'
const deleteHostById = async (id) => {
  const prisma = new PrismaClient()
  console.log("id:", id)
  //console.log("hostsData.hosts:", hostData.hosts)
  const deletedHostById = await prisma.hosts.deleteMany({
    where: {
      id
    }
  })

  if (!deletedHostById || deletedHostById.count === 0) {
    return null
  }
  return deleteHostById
}
export default deleteHostById

