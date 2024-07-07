import { PrismaClient } from '@prisma/client'
const createUser = async ( username, password, name, email, phoneNumber, profilePicture) => {
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
  if (!user || user.id) {
    return null
  }
  return user
}
  export default createUser