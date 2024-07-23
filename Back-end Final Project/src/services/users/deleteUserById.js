import { PrismaClient } from "@prisma/client";
const deleteUserById = async (id) => {
  const prisma = new PrismaClient();
  // Delete the user with the given id and return the deleted user if found, or throw an error if not found.
  // Return the deleted user as a response.
  // Use the Prisma Client to interact with your database.
  // If the user is not found, throw an error with a message "User not found".
  // You can use the "await" keyword to wait for the database operation to complete.
  // Example usage:
  // const deletedUser = await deleteUserById(1);
  // console.log("Deleted user:", deletedUser);
  const deletedUserById = prisma.user.deleteMany({
    where: {
      id,
    },
  });

  if (!deletedUserById || deletedUserById.count === 0) {
    return null;
  }

  return deleteUserById;
};

export default deleteUserById;
