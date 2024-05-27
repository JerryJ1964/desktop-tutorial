import amenitiesData from '../../src/data/amenities.json' assert { type: 'json' }
import { v4 as uuid } from 'uuid'


const createAmenities = (name) => {
  const newAmenities = {
    id: uuid(),
    name
  }

  amenitiesData.amenities.push(newAmenities)
  return newAmenities
}

export default createAmenities
