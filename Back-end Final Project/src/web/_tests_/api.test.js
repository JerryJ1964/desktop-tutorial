import { vi, expect, it, describe } from "vitest";
import { fetchUser } from "../api.js";
import axios from "axios";

vi.mock("axios");

describe("fetchUser function", () => {
  //afterEach(() => {
  //vi.restoreAllMocks();
  //});


  it("fetches user correctly", async () => {
    // Arrange
    const mockUser = {
      name: "Alice",
      email: "alice@example.com",
    };

    axios.get.mockResolvedValueOnce({ data: mockUser });

    // Act
    const result = await fetchUser(123);

    // Assert
    expect(result).toEqual(mockUser);
  });
});