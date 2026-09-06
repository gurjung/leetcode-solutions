/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    // // Approach 1 -> dfs/bfs

    // let visitedSet = new Set();
    // let V = edges.length;

    // let map = {};

    // for (let i = 0; i < V; i++) {
    //     map[i + 1] = []
    // }

    // function recur(node, target) {
    //     if (node === target) return true;

    //     visitedSet.add(node);

    //     for (let n of (map[node] || [])) {
    //         if (!visitedSet.has(n)) {
    //             if (recur(n, target)) {
    //                 return true;
    //             }
    //         }
    //     }
    //     return false;
    // }

    // for (let i = 0; i < V; i++) {
    //     let [u, v] = edges[i];
    //     visitedSet = new Set();
    //     if (recur(u, v)) {
    //         return [u, v]
    //     }

    //     map[u].push(v);
    //     map[v].push(u);
    // }


    // Approach 2 -> bfs

    let visitedSet = new Set();
    let V = edges.length;

    let map = {};

    for (let i = 0; i < V; i++) {
        map[i + 1] = []
    }

    let q = [];

    for (let i = 0; i < V; i++) {
        // explore edge wise
        let [u, v] = edges[i]
        visitedSet = new Set();

        q = [u];

        visitedSet.add(u);

        let found = false;

        while (q.length) {
            let curr = q.shift();

            if (curr === v) {
                found = true;
                break;
            }

            for (let n of (map[curr] || [])) {
                if (!visitedSet.has(n)) {
                    q.push(n);
                    visitedSet.add(n);
                }

            }
        }

        if (found) {
            return [u, v]
        }

        map[u].push(v);
        map[v].push(u);
    }

};