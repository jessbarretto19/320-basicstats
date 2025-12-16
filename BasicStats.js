class BasicStats {
    /**
     * @param {number[]} nums - A list of numbers.
     * @returns {number} The highest of the numbers.
     */
    max(nums) {
        return Math.max(...nums);
    }
    /**
     * @param {number[]} nums - A list of numbers.
     * @returns {number} The lowest of the numbers.
     */
    min(nums) {
        return Math.min(...nums);
    }
}
const myBasicStats = new BasicStats();
const myNums = [ 1, 5, 10];
// Should be 10
console.log("max: " + myBasicStats.max(myNums))
// Should be 1
console.log("min: " + myBasicStats.min(myNums))