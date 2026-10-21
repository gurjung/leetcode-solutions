/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    // 
    let map = new Map();
    // {0 : 1, 1: 1, }
    map.set(0, 1);

    let ans = 0;
    //nums = [1,2,3], k = 3
    // diff = 2
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];

        let diff = sum - k;

        if (map.has(diff)) {
            let val = map.get(diff)
            ans = ans + val
        }
        if (map.has(sum)) {
            let val = map.get(sum)
            map.set(sum, val + 1)
        } else {
            map.set(sum, 1)
        }
    }

    return ans

};