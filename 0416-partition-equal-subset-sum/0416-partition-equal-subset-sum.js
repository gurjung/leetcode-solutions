/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    // nums = [1,5,11,5]
    // sum = 1 + 5 + 11 + 5 => 22 => 11
    // approach 1 -> recursion

    // let sum = nums.reduce((arr, curr) => arr + curr, 0);

    // if (sum % 2 !== 0) return false;

    // let target = sum / 2;

    // function recur(remSum, p) {
    //     // base condition
    //     if(remSum === 0) {
    //         return true;
    //     }

    //     if(p >= nums.length) {
    //         return false;
    //     }

    //     // two choices

    //     let skip = recur(remSum, p + 1);
    //     let takeit = false;
    //     if (nums[p] <= remSum) {
    //         takeit = recur(remSum - nums[p], p + 1)
    //     }

    //     return takeit || skip
    // }

    // return recur(target, 0);

    // // approach 2 -> recursion + memo

    // let n = nums.length;

    // let sum = nums.reduce((arr, curr) => arr + curr, 0);

    // if (sum % 2 !== 0) return false;

    // let target = sum / 2;

    // let dp = [];

    // for (let i = 0; i <= sum; i++) {
    //     dp[i] = [];

    //     for (let j = 0; j <= n; j++) {
    //         dp[i][j] = -1
    //     }
    // }

    // function recur(remSum, p) {
    //     // base condition
    //     if(remSum === 0) {
    //         return true;
    //     }

    //     if(p >= nums.length) {
    //         return false;
    //     }

    //     if(dp[remSum][p] !== -1) {
    //         return dp[remSum][p];
    //     }

    //     // two choices

    //     let skip = recur(remSum, p + 1);
    //     let takeit = false;
    //     if (nums[p] <= remSum) {
    //         takeit = recur(remSum - nums[p], p + 1)
    //     }

    //     dp[remSum][p] = takeit || skip;
    //     return dp[remSum][p];
    // }

    // return recur(target, 0);


    // approach 3 -> tabulation

    let n = nums.length;

    let sum = nums.reduce((arr, curr) => arr + curr, 0);

    if (sum % 2 !== 0) return false;

    let target = sum / 2;

    let dp = [];

    for (let i = 0; i <= sum; i++) {
        dp[i] = [];

        for (let j = 0; j <= n; j++) {
            dp[i][j] = false;
        }
    }

    for(let j = 0; j <= n; j++) {
        dp[0][j] = true;
    }


    for (let remSum = 1; remSum <= sum; remSum++) {
        for (let p = n - 1; p >= 0; p--) {

            let skip = dp[remSum][p + 1];

            let takeit = false;

            if (nums[p] <= remSum) {
                takeit = dp[remSum - nums[p]][p + 1]
            }

            dp[remSum][p] = takeit || skip;
        }
    }

    return dp[target][0];

};