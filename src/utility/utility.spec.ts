import { describe, expect, test } from "@jest/globals";
import { Utility } from "./utility";

describe("Test Merge Functionality", () => {
  const merge = new Utility().merge;

  test("Empty Input should return Empty Array", () => {
    expect(merge([], [])).toStrictEqual([]);
  });
  test("Sample Testcase [1, 2, 3], [4, 5, 6]", () => {
    expect(merge([1, 2, 3], [4, 5, 6])).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
  test("Sample Testcase [1, 3, 5], [2, 4, 6]", () => {
    expect(merge([1, 3, 5], [2, 4, 6])).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
  test("Sample Testcase [1, 2], [3, 4, 5, 6]", () => {
    expect(merge([1, 2], [3, 4, 5, 6])).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
  test("Sample Testcase [5, 6], [1, 2, 3, 4]", () => {
    expect(merge([5, 6], [1, 2, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
  test("Oneside Array Sample Testcase [1, 2, 3, 4, 5, 6], []", () => {
    expect(merge([1, 2, 3, 4, 5, 6], [])).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
  test("Oneside Array Sample Testcase ([], [1, 2, 3, 4, 5, 6]", () => {
    expect(merge([], [1, 2, 3, 4, 5, 6])).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
  test("Test Support Duplicate Value", () => {
    expect(
      merge(
        [1, 1, 1, 2, 3, 3, 3, 4],
        [2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7]
      )
    ).toStrictEqual([
      1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7,
      7, 7,
    ]);
  });
});
