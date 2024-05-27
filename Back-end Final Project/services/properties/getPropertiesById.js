import propertiesData from '../../src/data/properties.json' assert { type: 'json' }

const getPropertiesById = (id) => {
  console.log(id)
  return propertiesData.properties.find((properties) => properties.id === id)
}

export default getPropertiesById
