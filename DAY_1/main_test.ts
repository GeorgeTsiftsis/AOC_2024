import { assertEquals } from "@std/assert";
import { calculateTotalDistance, parseInput, calculateSimilarityScore } from "./main.ts";

Deno.test("calculateTotalDistance - example case", () => {
    const leftList = [3, 4, 2, 1, 3, 3];
    const rightList = [4, 3, 5, 3, 9, 3];
    assertEquals(calculateTotalDistance(leftList, rightList), 11);
});

Deno.test("parseInput - example case", () => {
    const input = `3   4
4   3
2   5
1   3
3   9
3   3`;
    const [leftList, rightList] = parseInput(input);
    assertEquals(leftList, [3, 4, 2, 1, 3, 3]);
    assertEquals(rightList, [4, 3, 5, 3, 9, 3]);
});

Deno.test("calculateTotalDistance - empty lists", () => {
    assertEquals(calculateTotalDistance([], []), 0);
});

Deno.test("calculateTotalDistance - single pair", () => {
    assertEquals(calculateTotalDistance([1], [5]), 4);
});

Deno.test("calculateTotalDistance - identical lists", () => {
    const list = [1, 2, 3, 4, 5];
    assertEquals(calculateTotalDistance(list, list), 0);
});

Deno.test("calculateSimilarityScore - example case", () => {
    const leftList = [3, 4, 2, 1, 3, 3];
    const rightList = [4, 3, 5, 3, 9, 3];
    assertEquals(calculateSimilarityScore(leftList, rightList), 31);
});

Deno.test("calculateSimilarityScore - empty lists", () => {
    assertEquals(calculateSimilarityScore([], []), 0);
});

Deno.test("calculateSimilarityScore - no matches", () => {
    assertEquals(calculateSimilarityScore([1, 2, 3], [4, 5, 6]), 0);
});
