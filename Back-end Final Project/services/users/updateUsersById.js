import { PrismaClient } from '@prisma/client'
import NotFoundError from '../../errors/NotFoundError.js'
const updateHostsById = async (id, username, password, name, email, phoneNumber, profilePicture, aboutMe) => {
  const prisma = new PrismaClient()
  const updatedHosts = await prisma.hosts.updateMany({
    where: {
      id: id // Changed to use the provided ID instead of a hardcoded one.
    },
    data: {
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture,
      aboutMe
    }
  })

  //if (!updatedHosts || updatedHosts.count === 0) {
  //throw new NotFoundError('Host not found')
}
//return updatedHosts
//}
export default updateHostsById

//if (!updatedHosts || updatedHosts.count === 0) {
//throw new NotFoundError('Hosts', id)
//}
//return {
//message: `Host with id ${id} was updated!`
//}
//}
//export default updateHostsById