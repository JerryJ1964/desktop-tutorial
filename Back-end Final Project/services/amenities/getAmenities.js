import amenitiesData from '../../src/data/amenities.json' assert { type: 'json' }
//import getAmenities from "../services/amenities/getAmenities.js";

import { PrismaClient } from '@prisma/client'

const getAmenities = async (id, name) => {
  const prisma = new PrismaClient()

  return prisma.amenities.findMany({
    where: {
      id,
      name
    }
  })
}

export default getAmenities


//const getAmenities = (id) => {
//console.log(id)
//return reviewsData.records.find((reviews) => reviews.id === id)
//}

//export default getReviewsById
//const getAmenities = (id) => {
//console.log(id)
//return amenitiesData.records.find((amenities) => amenities.id === id)
//}


//let amenities = amenitiesData.amenities

//if (id) {
//amenities = amenities.filter((amenities) => amenities.id === id)
//}

//if (userId) {
//amenities = amenities.filter((amenities) => amenities.name === name)
//}

////return amenities
//}

//export default getAmenities