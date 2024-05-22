import express from 'express'
import bookingsRouter from '../routes/bookings.js'
import hostRouter from '../routes/host.js'
import getUser from './../services/users/getUser.js'
import usersRouter from '../routes/users.js'
import log from '../middleware/logMiddleware.js'
import loginRouter from '../routes/login.js'

const app = express()
app.use(express.json())

app.use(log)

app.use('../users', usersRouter);
app.use('../services/users', getUser);
app.use('../bookings', bookingsRouter);
app.use('../host', hostRouter);
app.use('../login', loginRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})

//import { PrismaClient } from '@prisma/client'

//const prisma = new PrismaClient()

//async function main() {
// ... you will write your Prisma Client queries here
//}

//main()
//.then(async () => {
//await prisma.$disconnect()
//})
//.catch(async (e) => {
//console.error(e)
//await prisma.$disconnect()
//process.exit(1)
//})



