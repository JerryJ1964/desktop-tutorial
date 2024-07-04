import { PrismaClient } from '@prisma/client'
const updateHostById = async (id, username, password, name, email, phoneNumber, profilePicture, aboutMe) => {
  const prisma = new PrismaClient()
  console.log("id:", id)
    const updatedHostById = await prisma.hosts.updateMany({
    where: {
      id,
    },
    data: {
      id,
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture,
      aboutMe
    }
  })
  if (!updatedHostById || updatedHostById.count === 0) {
    return null
  }
  return updateHostById
}
export default updateHostById;