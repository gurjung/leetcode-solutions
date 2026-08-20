/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    // modified kadane's pattern
    // modified -> maintain both min and max running values

    let minProduct = nums[0];
    let maxProduct = nums[0];
    let finalAns = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let path1 = nums[i];
        let path2 = minProduct * nums[i];
        let path3 = maxProduct * nums[i];

        minProduct = Math.min(path1, path2, path3);
        maxProduct = Math.max(path1, path2, path3);

        finalAns = Math.max(maxProduct, finalAns)

    }

    return finalAns;
};