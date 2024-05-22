import { PrismaClient } from '@prisma/client'
import amenityData from '../src/data/amenities.json' assert { type: 'json' }
import bookingsData from '../src/data/bookings.json' assert { type: 'json' }
import hostsData from '../src/data/hosts.json' assert { type: 'json' }
import propertiesData from '../src/data/properties.json' assert { type: 'json' }
import reviewsData from '../src/data/reviews.json' assert { type: 'json' }
import usersData from '../src/data/users.json' assert { type: 'json' }

const prisma = new PrismaClient({ log: ['query', 'info', 'warn', 'error'] })


async function main() {
  const { bookings } = bookingsData;
  const { amenities } = amenityData;
  const { hosts } = hostsData;
  const { properties } = propertiesData;

  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });


  for (const amenity of amenities) {
    await prisma.amenity.upsert({
      where: { id: amenity.id },
      update: {},
      create: amenity
    });
  }

  for (const booking of bookings) {
    await prisma.booking.upsert({
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

  for (const host of hosts) {
    await prisma.host.upsert({
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

  for (const property of properties) {
    await prisma.property.upsert({
      where: { id: properties.id },
      update: {},
      create: {
        title: property.title,
        description: property.description,
        location: property.location,
        pricePerNight: property.pricePerNight,
        bedroomCount: property.lbedroomCount,
        maxGuestCount: property.maxGuestCount,
        hostId: property.hostId,
        rating: property.rating,
        properties: {
          connect: property.propertyIds.map((id) => ({ id })),
        },
        createdBy: {
          connect: { id: property.createdBy },
        },
      },
    });
  }
}

const { reviews } = reviewsData
//console.log(reviewsData)
for (const review of reviews) {
  await prisma.review.upsert({
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

const { users } = usersData
//console.log(usersData)
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