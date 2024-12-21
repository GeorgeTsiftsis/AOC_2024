/**
 * Calculates the total distance between two lists of numbers by pairing them
 * after sorting and summing the absolute differences.
 * Time Complexity: O(n log n) due to sorting
 * Space Complexity: O(n) for storing the sorted arrays
 */
export function calculateTotalDistance(leftList: number[], rightList: number[]): number {
    if (leftList.length !== rightList.length) {
        throw new Error("Lists must have equal length");
    }

    // Sort both lists to pair corresponding numbers
    const sortedLeft = [...leftList].sort((a, b) => a - b);
    const sortedRight = [...rightList].sort((a, b) => a - b);

    // Calculate total distance
    return sortedLeft.reduce((total, num, index) => {
        return total + Math.abs(num - sortedRight[index]);
    }, 0);
}

/**
 * Calculates the similarity score between two lists by counting occurrences
 * Time Complexity: O(n) where n is the length of the left list
 * Space Complexity: O(m) where m is the unique numbers in right list
 */
export function calculateSimilarityScore(leftList: number[], rightList: number[]): number {
    // Create a frequency map for the right list
    const rightFrequency = new Map<number, number>();
    for (const num of rightList) {
        rightFrequency.set(num, (rightFrequency.get(num) || 0) + 1);
    }

    // Calculate similarity score
    return leftList.reduce((score, num) => {
        const frequency = rightFrequency.get(num) || 0;
        return score + (num * frequency);
    }, 0);
}

// Helper function to parse input string into two arrays
export function parseInput(input: string): [number[], number[]] {
    const lines = input.trim().split('\n');
    const leftList: number[] = [];
    const rightList: number[] = [];

    for (const line of lines) {
        const [left, right] = line.trim().split(/\s+/).map(Number);
        leftList.push(left);
        rightList.push(right);
    }

    return [leftList, rightList];
}

if (import.meta.main) {
    try {
        const input = await Deno.readTextFile("input.txt");
        const [leftList, rightList] = parseInput(input);
        
        // Part 1
        const distance = calculateTotalDistance(leftList, rightList);
        console.log("Part 1 - Total distance between the lists:", distance);
        
        // Part 2
        const similarity = calculateSimilarityScore(leftList, rightList);
        console.log("Part 2 - Similarity score:", similarity);
    } catch (error) {
        console.error("Error reading input file:", error.message);
    }
}


