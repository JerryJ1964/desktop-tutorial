import propertyData from '../../data/properties.json' assert { type: 'json' }
import { v4 as uuidv4 } from 'uuid'

const createProperty = (title, description, location, pricePerNight, bedroomCount, bathRoomCount, maxGuestsCount, hostId, rating) => {
  const newProperty = {
    id: uuidv4(),
    title,
    description,
    location,
    pricePerNight,
    bedroomCount,
    bathRoomCount,
    maxGuestsCount,
    hostId,
    rating
  }

  propertyData.properties.push(newProperty)

  return newProperty
}

export default createProperty
