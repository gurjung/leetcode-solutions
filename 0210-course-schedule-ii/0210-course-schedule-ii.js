/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    // [a, b] => b before a
    // 
    let indegrees = new Array(numCourses).fill(0);
    let q = [];
    let result = [];
    
    // adj list
    let map = {};

    for (let i = 0; i < numCourses; i++) {
        map[i] = [];
    }

    for (let i = 0; i < prerequisites.length; i++) {
        let [a, b] = prerequisites[i];
        //dest, src
        map[b].push(a);
        indegrees[a] = indegrees[a] + 1;
    }

    for (let i = 0; i < numCourses; i++) {
        if (indegrees[i] === 0) {
            q.push(i);
        }
    }

    // numCourses = 2, prerequisites = [[1,0]]

    while (q.length) {
        let curr = q.shift();
        result.push(curr);

        for (let neighbor of map[curr]) {
            indegrees[neighbor]--;
            if (indegrees[neighbor] === 0) {
                q.push(neighbor);
            }
        }

    }

    if (result.length === numCourses) {
        return result;
    } else {
        return []
    }


};