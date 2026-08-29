/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let result = [];
    let temp = [];
    let n = candidates.length;

    function recur(remSum, temp, p) {
        // base conditions
        if (remSum === 0) {
            result.push([...temp]);
            return result;
        }

        // recursive step and process
        for (let i = p; i < n; i++) {
            if (remSum < candidates[i]) continue;

            temp.push(candidates[i]);
            recur(remSum - candidates[i], temp, i);
            temp.pop();
        }
    }

    recur(target, temp, 0);
    return result;
};