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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let result = [];

    // LEFT / ROOT / RIGHT

    function recur(node) {
        // base condition
        if (node === null) return;

        recur(node.left);
        result.push(node.val);
        recur(node.right);

    }

    recur(root)
    return result;
};