import { PrismaClient } from '@prisma/client'

const deleteUserById = (name) => {
  const prisma = new PrismaClient()
  //console.log("id:", id)
  const deletedUsername = prisma.users.deleteMany({
    where: {
      name,
    }
  })
  if (!deleteUserById || deleteUserById.count === 0) {
    return null
  }
  return deletedUsername
}
export default deleteUserById
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //const deletedUser = prisma.users.deleteMany({
    //where: {
      //id,
    //}
 // })
  //if (!deletedUser) {
    //return res.status(404).json({
      //message: `User with id ${id} not found`,
    //});
  //} else {
    //return deletedUser
  
  //}
  //return null
//}
//export default deleteUserById