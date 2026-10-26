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
    let map = new Map();

    // sorting -> columnwise , rowwise , value wise

    function recur(curr, row, col) {
        if (!curr) return;

        if (!map.has(col)) {
            map.set(col, []);
        }

        let existingVal = map.get(col);

        existingVal.push([row, curr.val]);

        recur(curr.left, row + 1, col - 1)

        recur(curr.right, row + 1, col + 1);

    }

    recur(root, 0, 0);

    let keysArr = [...map.keys()].sort((a, b) => a - b);
    // columnwise sorting done

    let ans = [];
    for (let col of keysArr) {
        let nodes = map.get(col)
        // [ [ 1, 9 ] ] BEFORE
        nodes.sort((a, b) => {
            if (a[0] !== b[0]) {
                return a[0] - b[0]; // rowwise sorting
            }
            return a[1] - b[1]; // value wise
        })
        // [ [ 1, 9 ] ] nodes


        let temp = [];

        for (let i = 0; i < nodes.length; i++) {
            temp.push(nodes[i][1]);
        }

        ans.push(temp);
    }
    return ans

};