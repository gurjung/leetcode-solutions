/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    // 
    let result = [];
    let temp = [];
    // temp = [2, 2, 3 ]
    // remsum = 7-2 = 5 - 2 = 3 - 2 = 1 - 2 = -1
    function recur(remSum, temp, p) {
        // base condition
        if (remSum === 0) {
            result.push([...temp])
            return;
        }
        if (remSum < 0) {
            return;
        }

        // recursive step and process
        for (let i = p; i < candidates.length; i++) {
            if (candidates[i] > remSum) continue;
            temp.push(candidates[i])
            recur(remSum - candidates[i], temp, i)
            temp.pop();
        }

    }

    recur(target, temp, 0);
    return result
};