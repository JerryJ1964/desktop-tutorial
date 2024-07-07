import { PrismaClient } from '@prisma/client'
const updateUserById = async (id, username, password, name, email, phoneNumber, profilePicture) => {
  const prisma = new PrismaClient()
  console.log("updatedUserById id:", id)
  const updatedUserById = await prisma.users.updateMany({
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
      profilePicture
    }
  })
  if (!updatedUserById || updatedUserById.count === 0) {
    console.log("returning null omdat er niks gevonden kan worden")
    return null
  }
  console.log("returning updatedUserById:", updatedUserById)
  return updateUserById
}
export default updateUserById;










//const updateUserById = (id, username, password, name, email, phoneNumber, profilePicture) => {
 // const prisma = new PrismaClient()
  //console.log("id:", id)
  //const updatedUserById = prisma.users.updateMany({
    //where: {
    //  id
    //},
    //data: {
     // username,
     // password,
     // name,
     // email,
     // phoneNumber,
     // profilePicture
   // }
 // })
  //if (!updateUserById || updateUserById.count === 0) {
    //return null
    //throw new Error(`User with id ${id} not found`)
 // }
  //return updatedUserById
//}
//export default updateUserById