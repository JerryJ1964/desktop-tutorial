import { PrismaClient } from "@prisma/client";

const getProperties = (title, location) => {
  const prisma = new PrismaClient();
  console.log("title:", title);
  //console.log("propertiesData.properties:", propertyData.properties)
  return prisma.property.findMany({
    where: {
      title,
      location,
    },
  });
};

export default getProperties;
