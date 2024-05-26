import express from 'express'
import bookingsRouter from './routes/bookings.js'
import hostRouter from './routes/host.js'
//import getUserRouter from '../services/users/getUser.js'
import usersRouter from './routes/users.js'
import reviewsRouter from './services/reviews/getReviews.js'
import log from './middleware/logMiddleware.js'
import loginRouter from './routes/login.js'

const app = express()
app.use(express.json())

app.use(log)

app.use('/users', usersRouter);
app.use('/reviews', reviewsRouter);
app.use('/bookings', bookingsRouter);
app.use('/hosts', hostRouter);
app.use('/login', loginRouter);

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})

