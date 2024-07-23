import { PrismaClient } from "@prisma/client";

const deletePropertyById = async (id) => {
  const prisma = new PrismaClient();

  const deletedProperty = await prisma.property.deleteMany({
    where: {
      id,
    },
  });

  if (!deletedProperty || deletedProperty.count === 0) {
    return null;
  }
  return deletedProperty;
};
export default deletePropertyById;

//import { PrismaClient } from "@prisma/client";

//const deletePropertyById = async (
//id,
//title,
//description,
//location,
//pricePerNight,
//bedroomCount,
//bathRoomCount,
//maxGuestsCount,
//hostId,
//rating
//) => {
//const prisma = new PrismaClient();
//console.log("id:", id)
//const deletedPropertyById = await prisma.property.deleteMany({
//where: {
//id,
//title,
//description,
//location,
//pricePerNight,
//bedroomCount,
//bathRoomCount,
//maxGuestsCount,
//hostId,
//rating,
//},
//});
//if (!deletedPropertyById || deletedPropertyById.count === 0) {
//return null;
//}
//return deletePropertyById;
//};
//export default deletePropertyById;
