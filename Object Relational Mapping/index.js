import express from 'express'
import booksRouter from './routes/books.js'
import recordsRouter from './routes/records.js'
import getUserOrders from '../services/users/getUserOrders.js'
import userRouter from './routes/users.js'
import log from './middleware/logMiddleware.js'
import loginRouter from './routes/login.js'

const app = express()
app.use(express.json())

app.use(log)

app.use('/users', userRouter);
app.use('/services', getUserOrders);
app.use('/books', booksRouter);
app.use('/records', recordsRouter);
app.use('/login', loginRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})

