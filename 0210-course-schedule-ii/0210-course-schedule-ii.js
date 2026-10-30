/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    // prerequisites[i] = [ai, bi] indicates that you must take course bi before ai
    // dependancy means topological sort

    let map = {}
    let V = numCourses;
    let q = [];
    let result = []

    let indegreeArr = new Array(V).fill(0);

    for (let i = 0; i < V; i++) {
        map[i] = [];
    }

    for (let i = 0; i < prerequisites.length; i++) {
        let [a, b] = prerequisites[i];
        map[b].push(a);
        indegreeArr[a] = indegreeArr[a] + 1;
    }

    for (let i = 0; i < V; i++) {
        if (indegreeArr[i] === 0) {
            q.push(i)
        }
    }

    while (q.length) {
        let curr = q.shift();
        result.push(curr);
        for (let n of map[curr]) {
            indegreeArr[n]--;
            if (indegreeArr[n] === 0) {
                q.push(n);
            }

        }

    }
    if (result.length === numCourses) {
        return result;
    } else {
        return []
    }
};