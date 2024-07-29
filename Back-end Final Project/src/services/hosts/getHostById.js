import { PrismaClient } from "@prisma/client";

const getHostById = async (id) => {
  const prisma = new PrismaClient();
  return prisma.host
    .findUnique({
      where: {
        id,
      },
    })
    .catch((error) => {
      console.error("Error fetching host:", error);
    })
    .finally(() => {
      prisma.$disconnect();
    });
};

export default getHostById;

// Import the necessary modules
