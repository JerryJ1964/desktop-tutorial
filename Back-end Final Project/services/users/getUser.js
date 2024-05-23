import { PrismaClient } from '@prisma/client';
import NotFoundError from '../../errors/NotFoundError.js';

const getUser = async (userId) => {
  const prisma = new PrismaClient();
  const user = await prisma.users.findUnique({
    where: {
      id: userId,
    },
    include: {
      user: true,
    },
  });
  if (!user) {
    throw new NotFoundError('User', userId);
  }
  return user;
};

export default getUser;