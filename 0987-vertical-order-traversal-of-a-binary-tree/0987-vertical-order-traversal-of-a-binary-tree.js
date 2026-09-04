/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
    // we will store col, row, val in nodes array

    let nodes = [];

    // [[-1,1,9],[0,0,3]...] 
    function recur(col, row, curr) {
        // base condition
        if (!curr) return;

        //left
        recur(col - 1, row + 1, curr.left);
        //current 
        nodes.push([col, row, curr.val])
        //right
        recur(col + 1, row + 1, curr.right)

    }

    recur(0, 0, root)

    console.log(nodes, "DEBUG")
    // sort the nodes array based on col then row then val

    nodes.sort((a, b) => {

        //column
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }

        //row
        if (a[1] !== b[1]) {
            return a[1] - b[1];
        }

        //val
        if (a[2] !== b[2]) {
            return a[2] - b[2];
        }
    })

    console.log(nodes, "SORTEDNODES")
    let result = [];
    let prevCol = null;

    for (let [col, row, val] of nodes) {
        if (col !== prevCol) {
            result.push([]);
            prevCol = col;
        }
        result[result.length - 1].push(val)
    }

    return result;
};