//import NotFoundError from '../../middleware/NotFoundError.js'
import { PrismaClient } from '@prisma/client'

const getUserById = async (id) => {

  const prisma = new PrismaClient()
  //console.log("id:", id)

  return prisma.users.findUnique({
    where: {
      id
    }
  })
}

export default getUserById
//})
//const user = await prisma.users.findUnique({
//where: {
//id
//}
//})

//if (!user) {
// throw new NotFoundError('User', id)
//}

// return user
//}


