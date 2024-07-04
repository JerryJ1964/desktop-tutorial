import { PrismaClient } from '@prisma/client'
const createUser = async (username, password, name, email, phoneNumber, profilePicture) => {
  const prisma = new PrismaClient()
  const data = {
    username,
    password,
    name,
    email,
    phoneNumber,
    profilePicture,
  };
  const user = prisma.users.create({
    data,
  });
  if (!user || user.count === 0) {
    return null
  }
  return createUser
}
  export default createUser