import { composeSentence } from "../composeSentence.js";
import { describe, it, expect } from "vitest";

describe("composeSentence function", () => {
  it("composes a sentence correctly", () => {
    // Arrange
    const subject = "I";
    const verb = "love";
    const object = "programming";

    // Act
    const result = composeSentence(subject, verb, object);

    // Assert
    expect(result).toBe("I love programming.");
    expect(result).toContain("love");
  });

  it("handles different subjects and objects", () => {
    // Arrange
    const subject = "She";
    const verb = "enjoys";
    const object = "reading books";

    // Act
    const result = composeSentence(subject, verb, object);

    // Assert
    expect(result).toBe("She enjoys reading books.");
  });
});