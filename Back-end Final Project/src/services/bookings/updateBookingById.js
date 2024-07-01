import { PrismaClient } from '@prisma/client'
const updateBookingById = (id, userId, propertyId, checkinDate, checkoutDate, numberOfGuests, totalPrice, bookingStatus) => {
  const prisma = new PrismaClient()
  console.log("id:", id)
  const updatedBookingById = prisma.bookings.updateMany({
    where: {
      id
    },
    data: {
      id,
      userId,
      propertyId,
      checkinDate,
      checkoutDate,
      numberOfGuests,
      totalPrice,
      bookingStatus
    }
})

if (!updateBookingById || updateBookingById.count === 0) {
    throw new Error(`Booking with id ${id} not found`)
}
  return updatedBookingById
}

export default updateBookingById

//import bookingsData from '../../data/bookings.json' assert { type: 'json' }
//import NotFoundError from '../../middleware/NotFoundError.js'

//const prisma = new PrismaClient()

  //const updateBookingById = (id, userId, propertyId, checkinDate, checkoutDate, numberOfGuests, totalPrice, bookingStatus) => {
    //const booking = bookingsData.bookings.find(booking => booking.id === id)

    //if (!booking) {
      //throw new NotFoundError('Book', id)
    //}

    //booking.userId = userId ?? booking.title
    //booking.propertyId = propertyId ?? booking.propertyId
    //booking.checkinDate = checkinDate ?? booking.checkinDate
    //booking.checkoutDate = checkoutDate ?? booking.checkoutDate
    //booking.numberOfGuests = numberOfGuests ?? booking.numberOfGuests
    //booking.totalPrice = totalPrice ?? booking.totalPrice
    //booking.bookingStatus = bookingStatus ?? booking.bookingStatus

    //return booking
  //}


//export default updateBookingById

