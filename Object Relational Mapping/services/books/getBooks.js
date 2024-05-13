import { PrismaClient } from '@prisma/client'

const getBooks = async (title, available, genre) => {
  const prisma = new PrismaClient()

  return prisma.book.findMany({
    where: {
      title,
      genre,
      available
    }
  })
}

export default getBooks