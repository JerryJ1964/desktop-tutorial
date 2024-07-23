import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const createUser = async (
  username,
  password,
  name,
  email,
  phoneNumber,
  profilePicture
) => {
  const data = {
    username,
    password,
    name,
    email,
    phoneNumber,
    profilePicture,
  };
  const newUser = await prisma.user.create({
    data,
  });
  if (!newUser || newUser.id) {
    return null;
  }
  return newUser;
};
export default createUser;

//import { PrismaClient } from "@prisma/client";
//const createUser = async (
//username,
// password,
// name,
// email,
// phoneNumber,
//profilePicture
//) => {
//const prisma = new PrismaClient();
//const data = {
//username,
//password,
//name,
//email,
//phoneNumber,
//profilePicture,
//};
//const newUser = await prisma.users.create({
//data,
//});
//if (!newUser || newUser.id) {
//return null;
//}
//return newUser;
//};
//export default createUser;
