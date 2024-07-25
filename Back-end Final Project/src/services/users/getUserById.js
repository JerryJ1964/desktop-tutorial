import { PrismaClient } from "@prisma/client";

const getUserById = async (id) => {
  const prisma = new PrismaClient();
  console.log("getUserById: id:", id);
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  console.log("getUserById: user:", user);
  return user;
};

export default getUserById;
