/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
    // approach 1 -> modified bellman ford

    let res = new Array(n).fill(+Infinity);

    res[src] = 0;

    for (let i = 0; i < k + 1; i++) {
        let temp = [...res]; // res array clone;
        for (let i = 0; i < flights.length; i++) {
            let u = flights[i][0];
            let v = flights[i][1];
            let w = flights[i][2];
            if (res[u] !== Infinity && temp[v] > res[u] + w) {
                temp[v] = res[u] + w
            }
        }
        res = [...temp]
    }

    return res[dst] === Infinity ? -1 : res[dst]
};