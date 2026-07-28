/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
    let res = new Array(n).fill(Infinity);
    res[src] = 0;
    for (let i = 0; i <= k; i++) {
        // K+1 times relaxation
        let temp = [...res]; // clone res array

        for (let j = 0; j < flights.length; j++) {
            let u = flights[j][0];
            let v = flights[j][1];
            let w = flights[j][2];

            if (res[u] !== Infinity && temp[v] > res[u] + w) {
                temp[v] = res[u] + w
            }
        }

        res = [...temp]
    }

    return res[dst] === Infinity ? -1 : res[dst]
};