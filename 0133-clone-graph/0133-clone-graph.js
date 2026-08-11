/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (root) {
    // Approach 1 -> BFS

    if(!root) return null

    let visitedMap = new Map(); // to track both clone and original nodes

    let q = [root];

    let clonedRoot = new Node(root.val);

    visitedMap.set(root, clonedRoot);

    while (q.length) {
        let currNode = q.shift();

        let clonedNode = visitedMap.get(currNode);

        for (let neighbor of currNode.neighbors) {
            if (!visitedMap.has(neighbor)) {
                q.push(neighbor);
                let neighborClone = new Node(neighbor.val);
                visitedMap.set(neighbor, neighborClone)
            }

            let neighborClone = visitedMap.get(neighbor);
            clonedNode.neighbors.push(neighborClone)
        }
    }

    return clonedRoot

};