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

    function recur(curr, low, high) {
        if (!curr) return true;

        if (curr.val >= high || curr.val <= low) return false

        let leftPath = recur(curr.left, low, curr.val);
        let rightPath = recur(curr.right, curr.val, high);
        
        return leftPath && rightPath;
    }

    return recur(root, -Infinity, Infinity)
};