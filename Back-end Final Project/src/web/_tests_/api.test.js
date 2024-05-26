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
      id: "a1234567 - 89ab- cdef-0123 - 456789abcdef",
      username: "jdoe",
      password: "password123",
      name: "John Doe",
      email: "johndoe@example.com",
      phoneNumber: "123-456-7890",
      profilePicture: "https://global-uploads.webflow.com/5eecfecbe625d195e35b89f2/624bfb093da7d92733c001c0_Ignacio%20Villafruela%20Rodr%C3%ADguez.jpg"
    };

    axios.get.mockResolvedValueOnce({ data: mockUser });

    // Act
    const result = await fetchUser(123);

    // Assert
    expect(result).toEqual(mockUser);
  });
});