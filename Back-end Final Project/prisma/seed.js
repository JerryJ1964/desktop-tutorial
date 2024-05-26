import { PrismaClient } from '@prisma/client'
import amenitiesData from '../src/data/amenities.json' assert { type: 'json' }
import bookingsData from '../src/data/bookings.json' assert { type: 'json' }
import hostsData from '../src/data/hosts.json' assert { type: 'json' }
import propertiesData from '../src/data/properties.json' assert { type: 'json' }
import reviewsData from '../src/data/reviews.json' assert { type: 'json' }
import usersData from '../src/data/users.json' assert { type: 'json' }

const prisma = new PrismaClient({ log: ['query', 'info', 'warn', 'error'] })

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

async function main() {
  const { amenities } = amenitiesData;
  for (const amenity of amenities) {
    await prisma.amenities.upsert({
      where: { id: amenity.id },
      update: {},
      create: amenity
    });
  }

  const { bookings } = bookingsData;
  for (const booking of bookings) {
    await prisma.bookings.upsert({
      where: { id: booking.id },
      update: {},
      create: {
        userId: booking.userId,
        propertyId: booking.propertyId,
        checkinDate: booking.checkinDate,
        checkoutDate: booking.checkoutDate,
        numberOfGuests: booking.numberOfGuests,
        totalPrice: booking.totalPrice,
        bookingStatus: booking.bookingStatus
      },
    });
  }
  const { hosts } = hostsData;
  for (const host of hosts) {
    await prisma.hosts.upsert({
      where: { id: host.id },
      update: {},
      create: {
        username: host.username,
        password: host.password,
        name: host.name,
        email: host.email,
        phoneNumber: host.phoneNumber,
        profilePicture: host.profilePicture,
        aboutMe: host.aboutMe
      },
    });
  }
  const { properties } = propertiesData;
  for (const property of properties) {
    await prisma.properties.upsert({
      where: { id: property.id },
      update: {},
      create: {
        title: property.title,
        description: property.description,
        location: property.location,
        pricePerNight: property.pricePerNight,
        bedroomCount: property.bedroomCount,
        maxGuestCount: property.maxGuestCount,
        hostId: property.hostId,
        rating: property.rating,
        properties: {
          connect: property.propertiesIds((id) => ({ id })),
        },
        createdBy: {
          connect: { id: property.createdBy },
        },
      },
    });
  }
  const { reviews } = reviewsData;
  for (const review of reviews) {
    await prisma.reviews.upsert({
      where: { id: review.id },
      update: {},
      create: {
        userId: review.userId,
        propertyId: review.propertyId,
        rating: review.rating,
        comment: review.comment
      },
    });
  }
  const { users } = usersData;
  for (const user of users) {
    await prisma.users.upsert({
      where: { id: user.id },
      update: {},
      create: {
        username: user.username,
        password: user.password,
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        profilePicture: user.profilePicture
      },
    });
  }
}