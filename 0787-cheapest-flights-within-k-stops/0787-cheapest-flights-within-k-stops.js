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
        // k+1 times relaxation
        let temp = [...res];
        for (let j = 0; j < flights.length; j++) {
            let src = flights[j][0];
            let dest = flights[j][1];
            let price = flights[j][2];

            if(res[src] !== Infinity && temp[dest] > res[src] + price) {
                temp[dest] = res[src] + price
            }
        }
        res = [...temp];
    }

    return res[dst] === Infinity ? -1 : res[dst]
};