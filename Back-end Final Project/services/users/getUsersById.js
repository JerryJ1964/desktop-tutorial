import usersData from '../../src/data/users.json' assert { type: 'json' }


const getUsersById = async (id) => {
  console.log(id)
  return usersData.users.find((user) => user.id === id)
}

export default getUsersById