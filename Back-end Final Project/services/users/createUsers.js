import usersData from '../../src/data/users.json' assert { type: 'json' }
import { v4 as uuid } from 'uuid'

const createUsers = async (username, password, name, email, phoneNumber, profilePicture) => {
  const newUsers = {
    id: uuid(),
    username,
    password,
    name,
    email,
    phoneNumber,
    profilePicture
  }

  usersData.users.push(newUsers)
  return newUsers
}

export default createUsers