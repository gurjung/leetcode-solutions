/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
    // always try to find central nodes
    // for even nodes -> mid node (atmost)
    // for odd nodes. -> two middle nodes (atmost)
    // all leaf nodes have indegree 1

    // create adjacency list

    if (n === 1) return [0];

    let map = {};
    let indegreeArr = new Array(n).fill(0)

    for (let i = 0; i < n; i++) {
        map[i] = [];
    }

    for (let i = 0; i < edges.length; i++) {
        let [u, v] = edges[i];
        map[u].push(v);
        map[v].push(u);
        indegreeArr[u]++;
        indegreeArr[v]++;
    }

    let q = [];

    for (let i = 0; i < n; i++) {
        if (indegreeArr[i] === 1) {
            q.push(i)
        }
    }

    while (n > 2) {
        let size = q.length;

        n = n - size;

        while (size > 0) {
            let curr = q.shift();
            for (let neighbor of map[curr]) {
                indegreeArr[neighbor]--;
                if (indegreeArr[neighbor] === 1) {
                    q.push(neighbor);
                }

            }
            size--;
        }
    }

    return q;

};