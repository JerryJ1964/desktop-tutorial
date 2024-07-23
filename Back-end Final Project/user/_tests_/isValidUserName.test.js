import { describe, it, expect } from "vitest";
import { isValidUsername } from "../isValidUserName.js";

describe("isValidUserName function", () => {
    it("should return true if the username is valid", () => {
        expect(isValidUsername("john_doe_123")).toBe(true);
    })

    it("should return false if the username is invalid", () => {
        expect(isValidUsername("h@ck3r")).toBe(false);
    })

    it("should throw TypeError if the username is not a string", () => {
        expect(() => isValidUsername(123)).toThrow(TypeError);
        expect(() => isValidUsername(true)).toThrow(TypeError);
    })
})