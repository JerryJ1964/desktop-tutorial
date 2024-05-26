import propertiesData from '../../src/data/properties.json' assert { type: 'json' }
import { v4 as uuid } from 'uuid'


const createProperties = (_id, title, description, location, pricePerNight, bedroomCount, bathRoomCount, maxGuestsCount, hostId, rating) => {
  const newProperties = {
    id: uuid(),
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

  propertiesData.properties.push(newProperties)
  return newProperties
}

export default createProperties
