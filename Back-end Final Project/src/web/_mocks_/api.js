import { expect, it, vi } from "vitest";
import { usersData } from "/routes/users";

it("userData function", async () => {
  // Arrange
  vi.mock("../../web/api.js");

  // Act
  const result = await usersData(123);
  console.log(result);

  // Assert
  expect(result).toBe("User: John Doe, Email: johndoe@example.com");
});
