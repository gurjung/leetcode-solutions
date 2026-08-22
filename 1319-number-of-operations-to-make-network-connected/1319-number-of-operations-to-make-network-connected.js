/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
    // Approach 1 -> DFS

    if (connections.length < n - 1) return -1;
    let visitedSet = new Set();
    // create adj list
    let map = {};

    for (let i = 0; i < n; i++) {
        map[i] = []
    }

    for (let i = 0; i < connections.length; i++) {
        let u = connections[i][0];
        let v = connections[i][1];
        map[u].push(v);
        map[v].push(u);
    }

    function dfs(node) {
        // explore neighbors of node
        visitedSet.add(node);

        for(let n of map[node]) {
            if(!visitedSet.has(n)) {
                dfs(n);
            }
        }
    }

    

    let components = 0;
    for (let i = 0; i < n; i++) {
        if (!visitedSet.has(i)) {
            dfs(i);
            components++;
        }

    }

    return components - 1


};