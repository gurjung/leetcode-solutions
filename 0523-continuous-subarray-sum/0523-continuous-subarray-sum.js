/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
    // brute force

    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         let arr = nums.slice(i, j + 1);
    //         let sum = arr.reduce((acc, curr) => acc + curr, 0);
    //         if (sum % k === 0) return true;
    //     }
    // }
    // return false;

    // optimized solution

    // concept -> 
    // [23,2,4,6,7]
    // 1) 23 % 6 = 5
    // 2) 25 % 6 = 1
    // 3) 29 % 6 = 5 -> (23 + 6) % 6
    let map = new Map(); // to store remainder and index
    map.set(0, -1);
    // {(0, -1), ()}
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        let rem = sum % k;
        if (map.has(rem)) {
            let storedIdx = map.get(rem);
            if (i - storedIdx >= 2) return true;
        } else {
            map.set(rem, i)
        }
    }
    return false;

};