import { PrismaClient } from '@prisma/client'
import amenitiesData from '../src/data/amenities.json' assert { type: 'json' }
import bookingsData from '../src/data/bookings.json' assert { type: 'json' }
import hostsData from '../src/data/hosts.json' assert { type: 'json' }
import reviewsData from '../src/data/reviews.json' assert { type: 'json' }
import usersData from '../src/data/users.json' assert { type: 'json' }
import propertiesData from '../src/data/properties.json' assert { type: 'json' };

const prisma = new PrismaClient({ log: ['query', 'info', 'warn', 'error'] })

async function main() {

  const { properties } = propertiesData;
  for (const property of properties) {
    await prisma.properties.upsert({
      where: { id: property.id },
      update: {},
      create: property,
    });
  }
}
//async function main() {
const { amenities } = amenitiesData;
for (const amenity of amenities) {
  await prisma.amenities.upsert({
    where: { id: amenity.id },
    update: {},
    create: amenity,
  });
}

const { bookings } = bookingsData;
for (const booking of bookings) {
  await prisma.bookings.upsert({
    where: { id: booking.id },
    update: {},
    create: booking,
  });
}
//}
//async function main() {
const { hosts } = hostsData;
for (const host of hosts) {
  await prisma.hosts.upsert({
    where: { id: host.id },
    update: {},
    create: host,
  });
}
const { reviews } = reviewsData;
for (const review of reviews) {
  await prisma.reviews.upsert({
    where: { id: review.id },
    update: {},
    create: review,
  });
}

const { users } = usersData;
for (const user of users) {
  await prisma.users.upsert({
    where: { id: user.id },
    update: {},
    create: user,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
