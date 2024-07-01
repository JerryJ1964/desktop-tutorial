import { PrismaClient } from '@prisma/client'
//import NotFoundError from '../../middleware/NotFoundError.js'
const deleteBookingById = (id) => {
  const prisma = new PrismaClient()
console.log("id:", id)
  const deletedBookingById = prisma.bookings.deleteMany({
    where: {
      id
    }
  })

  //if (!deleteBookingById || deleteBookingById.count === 0) {
    //throw new Error('Booking not found')
  //}
  return deletedBookingById
}
export default deleteBookingById