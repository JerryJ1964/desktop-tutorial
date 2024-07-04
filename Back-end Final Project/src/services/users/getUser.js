import { PrismaClient } from '@prisma/client'

const getUsers = (username, email) => {
  const prisma = new PrismaClient()
  console.log("username:", username)
  //console.log("usersData.users:", userData.users)
  return prisma.users.findMany({
    where: {
      username,
      email
    }
  })
}

export default getUsers;

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