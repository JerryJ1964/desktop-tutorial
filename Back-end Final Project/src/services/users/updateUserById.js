import { PrismaClient } from '@prisma/client'

const updateUserById = (id, username, password, name, email, phoneNumber, profilePicture) => {
  
  const prisma = new PrismaClient()
  console.log("updateUserById id:", id)
  //console.log("updateUserById username:", username)
  //console.log("updateUserById password:", password)
  //console.log("updateUserById name:", name)
  //console.log("updateUserById email:", email)
  //console.log("updateUserById phoneNumber:", phoneNumber)
  //console.log("updateUserById profilePicture:", profilePicture)
  const updatedUserById = prisma.users.updateMany({
    where: {
      id,
    },
    data: {
      id, 'updated User': true,
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture
    }
  })
    if (!updatedUserById || updatedUserById.count === 0) {
    return null
  }
  return updateUserById
}
export default updateUserById










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