/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
    // ans = [2,2,2,2,2,0,0]
    // ans = [2,2,5,5,5,5,5]
    let ans = new Array(1001).fill(0)
    for (let i = 0; i < trips.length; i++) {
        let p = trips[i][0];
        let f = trips[i][1];
        let t = trips[i][2];

        ans[f] = ans[f] + p;
        ans[t] = ans[t] - p;
    }

    for (let i = 0; i < ans.length; i++) {
        if (i > 0) {
            ans[i] = ans[i] + ans[i - 1];
        }

        if (ans[i] > capacity) {
            return false;
        }
    }
    
    return true;
};