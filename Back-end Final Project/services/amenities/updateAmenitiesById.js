import amenitiesData from '../../src/data/amenities.json' assert { type: 'json' }

const updateAmenitiesById = (id, name) => {
  const amenities = amenitiesData.amenities.find((amenties) => amenties.id === id)

  if (!amenities) {
    throw new Error(`Amenities with id ${id} was not found!`)
  }

  amenities.id = userId ?? amenities.id
  amenities.name = name ?? amenities.name

  return amenities
}

export default updateAmenitiesById
