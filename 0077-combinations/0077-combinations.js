/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let result = [];
    let temp = [];
    // [1,4]
    function recur(temp, p) {
        // base condition
        if (temp.length === k) {
            result.push([...temp]);
            return;
        }

        //recursive step and process
        for (let i = p; i <= n; i++) {
            temp.push(i);
            recur(temp, i + 1);
            temp.pop();
        }
    }

    recur(temp, 1);
    return result;
};