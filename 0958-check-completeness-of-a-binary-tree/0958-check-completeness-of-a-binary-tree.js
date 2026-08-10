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
 * @return {boolean}
 */
var isCompleteTree = function (root) {
    // Approach -> use level order traversal

    let q = [root];
    let isNull = false;

    while (q.length) {
        let curr = q.shift();
        if (curr.left && !isNull) {
            q.push(curr.left)
        } else if (curr.left && isNull) {
            return false;
        } else {
            isNull = true;
        }

        if (curr.right && !isNull) {
            q.push(curr.right)
        } else if (curr.right && isNull) {
            return false;
        } else {
            isNull = true;
        }

    }

    return true
};