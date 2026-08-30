/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    // kahn's algo
    let map = {};
    let indegreesArr = new Array(numCourses).fill(0);
    let q = [];
    let result = [];

    // create adj list
    for (let i = 0; i < numCourses; i++) {
        map[i] = [];
    }

    for (let i = 0; i < prerequisites.length; i++) {
        let [a, b] = prerequisites[i];
        map[b].push(a);
        indegreesArr[a] = indegreesArr[a] + 1;
    }

    for (let i = 0; i < numCourses; i++) {
        if (indegreesArr[i] === 0) {
            q.push(i)
        }
    }

    while (q.length) {
        let curr = q.shift();
        result.push(curr);
        for (let n of map[curr]) {
            indegreesArr[n]--;
            if (indegreesArr[n] === 0) {
                q.push(n)
            }
        }
    }

    if (result.length === numCourses) {
        return result;
    }
    return []
};