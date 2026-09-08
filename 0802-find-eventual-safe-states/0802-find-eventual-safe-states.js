/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
    // adj list if already given
    let n = graph.length;

    //outDegreeArr = [2,2,1,1,1,0,0]
    let outDegreeArr = [];
    let result = [];

    let reverseGraph = {};

    for (let i = 0; i < n; i++) {
        reverseGraph[i] = [];
        outDegreeArr.push(graph[i].length)
    }


    for (let i = 0; i < n; i++) {
        for (let neighbor of graph[i]) {
            reverseGraph[neighbor].push(i);
        }
    }

    let q = []

    for (let i = 0; i < outDegreeArr.length; i++) {
        if (outDegreeArr[i] === 0) {
            q.push(i)
        }
    }

    while (q.length) {
        let curr = q.shift();
        result.push(curr);
        for (let neighbor of (reverseGraph[curr] || [])) {
            outDegreeArr[neighbor]--;
            if (outDegreeArr[neighbor] === 0) {
                q.push(neighbor)
            }
        }
    }

    return result.sort((a, b) => a - b);
};