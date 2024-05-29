import amenitiesData from '../../src/data/amenities.json' assert { type: 'json' }

const deleteAmenities = (id) => {
  const index = amenitiesData.amenities.findIndex((amenities) => amenities.id === id)

  if (index === -1) {
    return null
  }

  amenitiesData.amenities.splice(index, 1)
  return id
}

export default deleteAmenities
