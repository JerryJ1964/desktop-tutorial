import amenitiesData from '../../src/data/amenities.json' assert { type: 'json' }

const getAmentiesById = (id) => {
  console.log(id)
  return amenitiesData.records.find((amenities) => amenities.id === id)
}

export default getAmentiesById
