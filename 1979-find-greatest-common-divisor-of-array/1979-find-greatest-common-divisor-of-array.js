/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    let min = Math.min(...nums);
    let max = Math.max(...nums);

    // Find GCD of min and max

    console.log(min, max, "DEBUG")
    while (min !== 0) {
        let temp = min;
        min = max % min;
        max = temp;
    }

    return max;
};