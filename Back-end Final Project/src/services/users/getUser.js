import { PrismaClient } from '@prisma/client'

const getUsers = (username, phoneNumber) => {
  const prisma = new PrismaClient()

  return prisma.users.findMany({
    where: {
      username,
      phoneNumber
    }
  })
}

export default getUsers

//const getUsers = async (username) => {
//const prisma = new PrismaClient()

//const name = await prisma.users.findMany({
//where: {
//username: {
//contains: username,
//}
//},
//select: {
//id: true,
//username: true,
//name: true,
//email: true,
//phoneNumber: true,
//profilePicture: true,
//},
//});
//return name; // Assumed missing return statement
//}
//export default getUsers