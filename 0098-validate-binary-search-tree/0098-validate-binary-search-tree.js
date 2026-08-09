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
var isValidBST = function (root) {
    let min = -Infinity;
    let max = +Infinity;

    function recur(node, low, high) {
        // base condition
        if(!node) return true;

        if(node.val <= low || node.val >= high) {
            return false
        }

        let left = recur(node.left, low, node.val);
        let right = recur(node.right, node.val, high);

        return left && right
    }

    return recur(root, min, max)
};