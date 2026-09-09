/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
    // Brute Force TLE
    // let result = [];
    // let temp = [];
    // let n = arr.length;
    // let MOD = 1e9 + 7

    // // [3, 1, 4]
    // // []
    // for (let i = 0; i < n; i++) {
    //     for (let j = i + 1; j <= n; j++) {
    //         let val = arr.slice(i, j);
    //         let minVal = Math.min(...val)
    //         result.push(minVal)
    //     }
    // }

    // let sum = result.reduce((arr, curr) => arr + curr, 0);
    // return sum % MOD

    // using stack

    // lets find nsl and nsr
    let nsl = [];
    let nsr = [];
    let stack = [];
    let n = arr.length;


    for (let i = 0; i < n; i++) {
        while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }

        if (stack.length) {
            nsl.push(stack[stack.length - 1])
        } else {
            nsl.push(-1);
        }

        stack.push(i);

    }

    stack = [];
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
            stack.pop();
        }

        if (stack.length) {
            nsr[i] = stack[stack.length - 1]
        } else {
            nsr[i] = n;
        }

        stack.push(i);
    }

    let sum = 0;
    let mod = 1e9 + 7
    for (let i = 0; i < n; i++) {
        let left = i - nsl[i];
        let right = nsr[i] - i;
        sum = (sum + arr[i] * left * right) % mod;
    }
    return sum;

};