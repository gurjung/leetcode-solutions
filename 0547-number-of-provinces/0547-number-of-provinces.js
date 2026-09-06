/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    // Approach 1 -> BFS
    // [[1, 1, 0]]
    // [[1, 1, 0]]
    // [[0, 0, 1]]

    // adjacency list
    // let map = {}
    // let n = isConnected.length;

    // for (let i = 0; i < n; i++) {
    //     map[i] = [];
    // }

    // for (let i = 0; i < n; i++) {
    //     for (let j = 0; j < n; j++) {
    //         if (i === j) {
    //             continue;
    //         }
    //         if (isConnected[i][j] === 1) {
    //             map[i].push(j)
    //         }
    //     }
    // }

    // let visitedSet = new Set();
    // let ans = 0;

    // for (let city = 0; city < n; city++) {
    //     if (visitedSet.has(city)) {
    //         continue;
    //     }
    //     ans++;

    //     let q = [city];
    //     visitedSet.add(city);

    //     while (q.length) {
    //         let curr = q.shift();
    //         for (let neighbor of (map[curr] || [])) {
    //             if (!visitedSet.has(neighbor)) {
    //                 visitedSet.add(neighbor)
    //                 q.push(neighbor)
    //             }
    //         }
    //     }
    // }

    // return ans

    // Approach 2 -> DFS without adj list

    let visitedSet = new Set();
    let n = isConnected.length;
    let ans = 0;

    function recur(node) {
        // base condition

        visitedSet.add(node)

        for (let neighbor = 0; neighbor < n; neighbor++) {
            if (!visitedSet.has(neighbor) && isConnected[node][neighbor] === 1) {
                recur(neighbor)
            }
        }

    }

    for (let city = 0; city < n; city++) {
        if (!visitedSet.has(city)) {
            recur(city);
            ans++;
        }
    }

    return ans
};