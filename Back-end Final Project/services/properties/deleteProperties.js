import propertiesData from '../../src/data/properties.json' assert { type: 'json' }

const deleteProperty = (id) => {
  const index = propertiesData.properties.findIndex((properties) => properties.id === id)

  if (index === -1) {
    return null
  }

  propertiesData.properties.splice(index, 1)
  return id
}

export default deleteProperty
