import amenitiesData from '../../src/data/amenities.json' assert { type: 'json' }

const updateAmenityById = (id) => {
  const amenities = amenitiesData.amenities.find((amenities) => amenities.id === id)

  if (!amenities) {
    throw new Error(`amenities with id ${id} was not found!`)
  }
  amenities.id = id ?? amenities.id
  //amenities.name = name ?? amenities.name


  return amenities
}

export default updateAmenityById
