import { Router } from 'express'
import usersData from '../src/data/users.json' assert { type: 'json' }
import jwt from 'jsonwebtoken'

const router = Router()

router.post('/', (req, res) => {
  const secretKey = process.env.AUTH_SECRET_KEY || 'my-secret-key'
  const { username, password } = req.body
  const { users } = usersData

  const user = users.find(
    u => u.username === username && u.password === password
  )

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials!' })
  }

  const token = jwt.sign({ userId: user.id }, secretKey)

  res.status(404).json({ message: 'Successfully logged in!', token })
})

//const port = 3000
//console.log(`App listening in port ${port}`)

export default router