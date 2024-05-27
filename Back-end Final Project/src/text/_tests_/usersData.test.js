import { expect, it, vi } from "vitest";
import * as apiModule from "../../web/api.js";
import { usersData } from "../usersData.js";

it("printUserData function", async () => {
  // Arrange
  const mockUserData = { name: "Alice", email: "alice@example.com" };
  vi.spyOn(apiModule, "fetchUser").mockResolvedValue(mockUserData);

  // Act
  const result = await usersData(123);
  console.log(result);

  // Assert
  expect(result).toBe("User: John Doe, Email: johndoe@example.com");
});

