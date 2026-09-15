/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    let visitedSet = new Set();

    let map = {};

    for (let i = 0; i < edges.length; i++) {
        map[i + 1] = []
    }

    function recur(node, target) {
        if (node === target) return true

        visitedSet.add(node);

        for (let neighbor of (map[node] || [])) {

            if (!visitedSet.has(neighbor)) {
                if (recur(neighbor, target)) {
                    return true;
                }
            }
        }

        return false
    }

    for (let i = 0; i < edges.length; i++) {
        let [u, v] = edges[i];
        visitedSet = new Set();
        if (recur(u, v)) {
            return [u, v]
        }

        map[u].push(v);
        map[v].push(u);

    }
};