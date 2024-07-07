import { expect, it, vi } from "vitest";
import { printUserData } from "../printUserData.js";

it("printUserData function", async () => {
  // Arrange
  vi.mock("../../web/api.js");

  // Act
  const result = await printUserData(123);
  console.log(result);

  // Assert
  expect(result).toBe("User: Alice, Email: alice@example.com");
});
