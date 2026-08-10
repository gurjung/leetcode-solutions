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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    // Approach -> similar to find height of tree
    let maxDiameter = 0;
    function recur(curr) {
        // base condition
        if(!curr) return 0;
        // recursive steps and process
        let left = recur(curr.left);
        let right = recur(curr.right);
        let sum = left + right;
        maxDiameter = Math.max(sum, maxDiameter)
        return 1 + Math.max(left, right)

    }

    recur(root);
    return maxDiameter
};