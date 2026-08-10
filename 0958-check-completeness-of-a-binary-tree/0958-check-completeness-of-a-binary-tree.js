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

        if (!curr) {
            isNull = true;
            continue;
        }

        if (isNull) {
            return false
        }

        q.push(curr.left);
        q.push(curr.right);

    }

    return true
};