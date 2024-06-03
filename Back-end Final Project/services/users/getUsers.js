import { PrismaClient } from '@prisma/client';
//import NotFoundError from '../../errors/NotFoundError.js';

const getUsers = async (id, username, password, name, email, phoneNumber, profilePicture) => {
  const prisma = new PrismaClient()

  return prisma.users.findMany({
    where: {
      id,
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture
    }
  })
}


export default getUsers;