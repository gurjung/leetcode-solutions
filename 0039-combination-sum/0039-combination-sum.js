/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    // without for loop
    // let result = [];
    // let temp = [];

    // function recur(p, t) {
    //     // base condition
    //     if (t < 0 || p >= candidates.length) {
    //         return;
    //     }
    //     if (t === 0) {
    //         result.push([...temp])
    //         return;
    //     }

    //     // process and recursive steps
    //     // two choices
    //     // take it
    //     temp.push(candidates[p])
    //     recur(p, t - candidates[p])
    //     // skip
    //     temp.pop();
    //     recur(p + 1, t)

    // }

    // recur(0, target)
    // return result

    // with For Loop
    let result = [];
    let temp = [];
    let n = candidates.length;

    function recur(p, t) {
        // base condition
        if (t === 0) {
            result.push([...temp])
            return;
        }

        // process and recursive steps
        // two choices
        // take it
        for (let i = p; i < n; i++) {
            if (t < candidates[i]) continue;

            temp.push(candidates[i])
            recur(i, t - candidates[i])
            temp.pop();
        }



    }

    recur(0, target)
    return result

};