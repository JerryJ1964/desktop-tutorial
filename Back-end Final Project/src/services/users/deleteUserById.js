import { PrismaClient } from '@prisma/client'

const deleteUserById = async (id) => {
  const prisma = new PrismaClient()
  //console.log("id:", id)
  const deletedUserById = await prisma.users.deleteMany({
    where: {
      id,
    }
  })
  if (!deletedUserById || deletedUserById.count === 0) {
    return null
  }
  return deleteUserById
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