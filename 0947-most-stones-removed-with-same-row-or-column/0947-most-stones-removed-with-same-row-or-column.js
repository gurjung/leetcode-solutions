/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
    // Appraoch 1 -> DFS
    // atleast one stone should be there in each row/col
    // stones = nodes
    // return n - number of connected Components
    let n = stones.length;
    let connectedComponents = 0;
    let visitedArr = new Array(n).fill(false);

    function recur(i) {
        visitedArr[i] = true;

        for (let j = 0; j < n; j++) {
            // check for same row and same column
            // if yes then it is connected component
            // then check connected components neighbors
            if (visitedArr[j]) continue;
            if (stones[i][0] === stones[j][0] || stones[i][1] === stones[j][1]) {
                recur(j)
            }
        }

    }

    for (let i = 0; i < n; i++) {
        if (!visitedArr[i]) {
            recur(i);
            connectedComponents++;
        }
    }

    return n - connectedComponents;
};