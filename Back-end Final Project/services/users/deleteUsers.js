//import { PrismaClient } from '@prisma/client'
import usersData from '../../src/data/users.json' assert { type: 'json'}


const deleteUsers = (id) => {
  const index = usersData.users.findIndex((user) => user.id === id)

  if (index === -1) {
    return null
  }

  usersData.users.splice(index, 1)
  return id
}
export default deleteUsers

