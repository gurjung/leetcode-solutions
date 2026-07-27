/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    // sorting approach -> nlogn
    // if (nums.length === 0) return 0;

    // nums.sort((a, b) => a - b);

    // let longest = 1;
    // let count = 1;

    // for (let i = 1; i < nums.length; i++) {

    //     // Ignore duplicates
    //     if (nums[i] === nums[i - 1]) {
    //         continue;
    //     }

    //     // Consecutive number
    //     if (nums[i] === nums[i - 1] + 1) {
    //         count++;
    //     }
    //     // Sequence broken
    //     else {
    //         count = 1;
    //     }

    //     longest = Math.max(longest, count);
    // }

    // return longest;

    // hashset approach -> O(n)

    let newSet = new Set(nums);

    let longest = 0;

    for (let num of newSet) {
        if (newSet.has(num - 1)) continue;

        let count = 1;
        let currNum = num;
        while (newSet.has(currNum + 1)) {
            count++;
            currNum++;
        }
        longest = Math.max(longest, count)
    }

    return longest;
};