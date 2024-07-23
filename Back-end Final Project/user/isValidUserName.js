export const isValidUsername = (username) => {
  // Only accept string
  if (typeof username !== "string") {
    throw new TypeError("Username must be a string.");
  }
  
  return /^[a-zA-Z0-9_]+$/.test(username);
}