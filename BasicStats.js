class BasicStats {
    max(nums) {
        return Math.max(...nums);
    }
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