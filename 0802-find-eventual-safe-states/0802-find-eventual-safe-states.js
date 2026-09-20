/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
    // outgoing degree

    // indegree
    // adj list

    let n = graph.length;
    let reverseGraph = {}
    let outDegreeArr = [];
    let res = [];

    for (let i = 0; i < n; i++) {
        reverseGraph[i] = [];
        outDegreeArr.push(graph[i].length)
    }


    for (let i = 0; i < n; i++) {
        for (let neighbor of graph[i]) {
            reverseGraph[neighbor].push(i);
        }
    }
    
    let q = [];

    for (let i = 0; i < n; i++) {
        if (outDegreeArr[i] === 0) {
            q.push(i);
        }
    }

    while (q.length) {
        let curr = q.shift();
        res.push(curr);
        for (let neighbor of (reverseGraph[curr] || [])) {
            outDegreeArr[neighbor]--;
            if (outDegreeArr[neighbor] === 0) {
                q.push(neighbor);
            }
        }
    }

    return res.sort((a, b) => a - b)
};
