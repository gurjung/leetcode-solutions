/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    // Approach 1 -> with division

    // let totalProduct = nums.reduce((acc, curr) => acc * curr, 1);
    // let answer = [];

    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] === 0) {
    //         let product = 1;
    //         for (let j = 0; j < nums.length; j++) {
    //             if (i !== j) {
    //                 product = product * nums[j]
    //             }
    //         }
    //         answer.push(product)
    //     } else {
    //         let val = Math.floor(totalProduct / nums[i]);
    //         answer.push(val)
    //     }
    // }

    // return answer;

    // Approach 2 -> prefix and suffix (without division)
    // [1,2,3,4]
    // prefix -> [1, 1, 2, 6]
    // suffix -> [24,12, 4, 1]
    let n = nums.length;

    let answer = new Array(n).fill(1);

    let prefix = [];
    let suffix = [];
    prefix[0] = 1;
    suffix[n - 1] = 1;

    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1]; // current value not required that is why nums[i - 1]
    }

    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1]; // current value not required that is why nums[i + 1]
    }

    console.log(prefix, suffix, "DEBUG")

    for (let i = 0; i < n; i++) {
        answer[i] = prefix[i] * suffix[i]
    }

    return answer;

};