/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    // ratings = [1,0,2]
    // candyAr = [2,1,2]
    let n = ratings.length;

    let candiesArr = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candiesArr[i] = candiesArr[i - 1] + 1
        }
    }

    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candiesArr[i] = Math.max(candiesArr[i], candiesArr[i + 1] + 1)
        }
    }

    return candiesArr.reduce((acc, curr) => acc + curr, 0)

};