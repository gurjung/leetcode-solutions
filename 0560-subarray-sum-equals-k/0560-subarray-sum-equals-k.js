/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let map = { 0: 1 };
    let sum = 0;

    // nums = [1,2,3], k = 3
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]

        if (map[sum - k]) {
            ans = ans + map[sum - k];
        } 
        if(!map[sum]) {
            map[sum] = 1
        } else {
            map[sum] = map[sum] + 1
        }
    }
    
    return ans

};