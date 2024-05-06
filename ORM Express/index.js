import { PrismaClient } from '@prisma/client'
import express from 'express';
import booksRouter from '../routes/books.js';
import getUserOders from '../services/users/getUserOrders.js';
import userRouter from '../routes/users.js';

//var router = express.Router();

//app.use('/users', router);
const prisma = new PrismaClient()

async function main() {
  const allUsers = await prisma.user.findMany()
  console.log(allUsers)
  // ... you will write your Prisma Client queries here
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

const app = express();
app.use(express.json());

app.use('/books', booksRouter);
app.use('/books', getUserOders);
app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});