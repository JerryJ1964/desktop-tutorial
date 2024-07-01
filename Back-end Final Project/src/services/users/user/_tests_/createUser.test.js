import { afterEach, describe, expect, it, vi } from "vitest";
import { createUser } from "../createUser.js";
import * as isValidUsername from "../isValidUserName.js";
import axios from "axios";

const mockUser = {
  username: "abcd",
  email: "john@doe.com",
};
vi.mock("axios");

describe("createUser function", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should return an object with username and email", async () => {
    axios.post.mockResolvedValueOnce({ data: mockUser });
    console.log(mockUser);
    const result = await createUser(mockUser.username, mockUser.email);
    expect(result).toEqual(mockUser);
  });

  it("should throw an error if username is missing", async () => {
    await expect(() => createUser(undefined, "john@doe.com")).rejects.toThrow(
      "Username and email are required."
    );
  });

  it("should throw an error if email is missing", async () => {
    await expect(() => createUser("john_doe_123")).rejects.toThrow(
      "Username and email are required."
    );
  });

  it("should throw an error if username is invalid", async () => {
    await expect(() => createUser("h@ck3r", expect.anything())).rejects.toThrow(
      "Username is invalid."
    );
  });

  it("should throw an error if username is invalid (mocked)", async () => {
    vi.spyOn(isValidUsername, "isValidUsername").mockReturnValueOnce(false);

    await expect(() => createUser("h@ck3r", expect.anything())).rejects.toThrow(
      "Username is invalid."
    );
  });
});