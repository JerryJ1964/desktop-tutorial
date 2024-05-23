import { expect, it, vi } from "vitest";
import * as apiModule from "../../web/api.js";
import { printUserData } from "../printUserData.js";

it("printUserData function", async () => {
  // Arrange
  const mockUserData = { name: "Alice", email: "alice@example.com" };
  vi.spyOn(apiModule, "fetchUser").mockResolvedValue(mockUserData);

  // Act
  const result = await printUserData(123);
  console.log(result);

  // Assert
  expect(result).toBe("User: Alice, Email: alice@example.com");
});

