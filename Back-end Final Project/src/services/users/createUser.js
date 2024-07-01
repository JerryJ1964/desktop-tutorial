import { PrismaClient } from '@prisma/client'
const createUser = (username, password, name, email, phoneNumber, profilePicture) => {
  const prisma = new PrismaClient()
  //console.log("username:", username)
  const createdANewUsername = prisma.users.createMany({
    data: {
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture,
    },
  })
  if (!createUser || createUser.count === 0) {
    return null
  }
  console.log(createdANewUsername)
}
  export default createUser
    

//import axios from "axios";

//export async function createUser(username, email) {
  //if (!username || !email) {
   // throw new Error("Username and email are required.");
  //}

  //const response = await axios.post("https://api.example.com/users", {
    //username,
    //email,
 // });

  //return response.data;
//}

  
  
  
  
  
  
  
  
  
  
  
  
  
  //const createUser = prisma.users.create({
    //data: {
      //username,
      //password,
      //name,
      //email,
      //phoneNumber,
      //profilePicture,
    //},
  //})
  //if (!createUser || createUser.count === 0) {
    //return null
  //}
//}
//export default createANewUser
  







//const createUser = (username, password, name, email, phoneNumber, profilePicture) =>
  //createUser = prisma.users.createMany({
    //data: {
      //username,
      //password,
      //name,
      //email,
      //phoneNumber,
      //profilePicture,
    //},
  //})

 // export default createUser

















//if (!createUser || createUser.id === 0) {
    //throw new Error('Failed to create user')
//}
// Create and return the new user
  //export default createUser