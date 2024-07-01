import { PrismaClient } from '@prisma/client'
const updatePropertyById = (id, title, description, location, pricePerNight, bedroomCount, bathRoomCount, maxGuestsCount, hostId, rating) => {
  const prisma = new PrismaClient()
  console.log("id:", id)
  //console.log("propertiesData.properties:", propertyData.properties)
  const updatedPropertyById = prisma.properties.updateMany({
    where: {
      id
    },
    data: {
      id,
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
  })

  if (!updatePropertyById || updatePropertyById.count === 0) {
    throw new Error('User', id)
  }
  return updatedPropertyById
}
export default updatePropertyById



//import { PrismaClient } from '@prisma/client';
//import NotFoundError from '../../middleware/NotFoundError.js';
//const updatePropertyById = async (id, propertyData) => {
  //const prisma = new PrismaClient();
  
  //const { hostId, amenities, ...rest } = propertyData;
  //const dataToUpdate = {
    //...rest,
    //host: hostId
      //? {
          //connect: { id: hostId }
        //}
      //: undefined,
    //amenities: amenities
      //? {
          //set: amenities.map(id => ({ id }))
        //}
      //: undefined
  ///};
//console.log('dataToUpdate: ', dataToUpdate);
  //const updatedProperties = await prisma.property.update({
    //where: {
      //id
    //},
    //data: dataToUpdate
  //});

  //if (!updatedProperties) {
    //throw new NotFoundError('Property', id);
  //}

  //return updatedProperties;
  //const updatedProperties = await prisma.property.updateData({
    //where: {
      //id
    //},
    //data: {
     // ...rest,
      //host: hostId
        //? {
           // connect: { id: hostId }
          ///}
        //: undefined,
      //amenities: amenities
        //? {
            //set: amenities.map(id => ({ id }))
          //}
        //: undefined
    //}
  //});
  //if (updatedProperties.count === 0) {
    //throw new NotFoundError('Property', id);
  //}
//};
//export default updatePropertyById