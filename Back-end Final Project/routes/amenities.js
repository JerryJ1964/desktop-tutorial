import { PrismaClient } from '@prisma/client';
import NotFoundError from '../errors/NotFoundError.js';


const updatePropertiesById =
  async (id, propertiesData) => {
    const prisma = new PrismaClient();
    const { hostId, amenities, ...rest } = propertiesData;

    const updatedProperties = await prisma.property.updateMany({
      where: {
        id
      },
      data: {
        ...rest,
        host: hostId ?
          {
            connect: { id: hostId }
          }
          : undefined,
        amenities: amenities ?
          {
            set: amenities.map(id => ({ id }))
          }
          : undefined
      }
    });
    if (updatedProperties.count === 0) {
      throw new NotFoundError('Property', id);
    }
  };
export default updatePropertiesById;
