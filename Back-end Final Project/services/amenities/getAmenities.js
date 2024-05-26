import amenitiesData from '../../src/data/amenities.json' assert { type: 'json' }

const getAmenities = (id) => {
  let amenities = amenitiesData.amenities

  if (id) {
    amenities = amenities.filter((amenities) => amenities.id === id)
  }

  if (userId) {
    amenities = amenities.filter((amenities) => amenities.name === name)
  }

  return amenities
}

export default getAmenities