import { PrismaClient } from '@prisma/client'
const updateHostById = (id, username, password, name, email, phoneNumber, profilePicture, aboutMe) => {
  const prisma = new PrismaClient()
  console.log("id:", id)
    const updatedHost = prisma.hosts.updateMany({
    where: {
      id
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
  
  if (!updatedHost || updatedHost.count === 0) {
    throw new Error('Host', id)
  }
  return updateHostById
}
export default updateHostById