import propertiesData from '../../src/data/properties.json' assert { type: 'json' }

const updatePropertyById = (id) => {
  const properties = propertiesData.properties.find((properties) => properties.id === id)

  if (!properties) {
    throw new Error(`properties with id ${id} was not found!`)
  }

  properties.id = id ?? properties.id
  //properties.title = title ?? properties.title
  //properties.description = description ?? properties.description
  //properties.location = location ?? properties.location
  //properties.pricePerNight = pricePerNight ?? properties.pricePerNight
  //properties.bedroomCount = bedroomCount ?? properties.bedroomCount
  //properties.bathRoomCount = bathRoomCount ?? properties.bathRoomCount
  //properties.maxGuestsCount = maxGuestsCount ?? properties.maxGuestsCount
  //properties.hostsId = hostsId ?? properties.hostsId
  //properties.ratingt = rating ?? properties.rating

  return properties
}

export default updatePropertyById
