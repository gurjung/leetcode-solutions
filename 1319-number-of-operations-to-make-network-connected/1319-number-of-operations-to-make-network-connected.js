/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
    // BFS
    if(connections.length < n - 1) return -1;

    let visitedSet = new Set();
    let map = {};

    for (let i = 0; i < n; i++) {
        map[i] = [];
    }

    for (let [u, v] of connections) {
        map[u].push(v);
        map[v].push(u);
    }

    let noOfComponents = 0;

    for (let i = 0; i < n; i++) {
        if (!visitedSet.has(i)) {
            bfs(i, visitedSet, map);
            noOfComponents++
        }
    }

   return noOfComponents - 1
};

function bfs(src, visited, graph) {
    let q = [src];
    visited.add(src);

    while(q.length) {
        let curr = q.shift();

        for(let neighbor of graph[curr]) {
            if(!visited.has(neighbor)) {
                visited.add(neighbor);
                q.push(neighbor)
            }
        }
    }
}