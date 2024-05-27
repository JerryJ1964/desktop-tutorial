import { PrismaClient } from '@prisma/client';
import NotFoundError from '../../errors/NotFoundError.js';

const getUsers = async (usersId) => {
  const prisma = new PrismaClient();
  const users = await prisma.users.findUnique({
    where: {
      id: usersId,
    },
    include: {
      users: true,
    },
  });
  if (!users) {
    throw new NotFoundError('User', usersId);
  }
  return users;
};

export default getUsers;