/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    let provinces = 0;

    // [
    //  [1,1,0],
    //  [1,1,0],
    //  [0,0,1]
    // ]

    // adj list
    let map = {};
    let m = isConnected.length;
    let n = isConnected[0].length;

    for (let i = 0; i < m; i++) {
        map[i] = [];
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i !== j && isConnected[i][j] === 1) {
                map[i].push(j)
            }

        }
    }

    let visitedArr = new Array(m).fill(false);


    let ans = 0;

    function recur(node) {
        visitedArr[node] = true;

        for (let neighbor of (map[node] || [])) {
            if (!visitedArr[neighbor]) {
                recur(neighbor)
            }
        }
    }
    for (let i = 0; i < m; i++) {
        if (!visitedArr[i]) {
            recur(i);
            ans++;
        }
    }

    return ans


};