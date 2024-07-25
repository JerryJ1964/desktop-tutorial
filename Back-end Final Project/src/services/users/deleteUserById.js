import { PrismaClient } from "@prisma/client";
const deleteUserById = async (id) => {
  const prisma = new PrismaClient();
  const deletedUserById = await prisma.user.deleteMany({
    where: {
      id,
    },
  });

  if (!deletedUserById || deletedUserById.count === 0) {
    return null;
  }

  return deletedUserById;
};

export default deleteUserById;