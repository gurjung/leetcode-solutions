/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
    // Graph Coloring
    // -1 -> no color
    // 0 -> red
    // 1 -> green
    // adjacency list is already given in question

    let n = graph.length;

    let coloredArr = new Array(n).fill(-1);

    let ans = true;

    function recur(curr, c) {
        coloredArr[curr] = c;

        for (let neighbor of graph[curr]) {
            if (coloredArr[neighbor] === -1) {
                recur(neighbor, 1 - c)
            }

            if (coloredArr[neighbor] !== -1 && coloredArr[neighbor] === c) {
                ans = false;
                return;
            }
        }

    }

    for (let i = 0; i < n; i++) {
        if (coloredArr[i] === -1) {
            recur(i, 0); // 1st color can be anything like 0 or 1
        }
    }

    return ans;

};