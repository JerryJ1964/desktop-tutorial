import userData from "../../data/users.json" assert { type: 'json' }
import { v4 as uuidv4 } from 'uuid'

const createUser = (username, password, name, email, phoneNumber, profilePicture) => {
  const newUser = {
    id: uuidv4(),
    username,
    password,
    name,
    email,
    phoneNumber,
    profilePicture
  }

  userData.users.push(newUser);

  return newUser
}

export default createUser