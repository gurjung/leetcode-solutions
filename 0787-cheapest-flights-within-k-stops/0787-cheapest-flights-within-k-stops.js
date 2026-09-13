/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
    // approach 1 ->  bellman ford

    let resArr = new Array(n).fill(Infinity);

    resArr[src] = 0;

    for (let i = 0; i < k + 1; i++) {
        let temp = [...resArr];
        for (let j = 0; j < flights.length; j++) {
            let [u, v, w] = flights[j]

            if (resArr[u] !== Infinity && temp[v] > resArr[u] + w) {
                temp[v] = resArr[u] + w
            }

        }
        resArr = [...temp]
    }

    return resArr[dst] === Infinity ? -1 : resArr[dst]
};