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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
    let first = null;
    let second = null;
    let prev = null;

    function recur(node) {
        // base condition
        // left | root | right
        if (!node) return;

        recur(node.left);

        // prev.val should be < node.val

        if (prev && node.val < prev.val) {
            if (!first) {
                first = prev;
            }

            second = node;
        }
        
        prev = node;
        recur(node.right);
    }

    recur(root);
    // swaping
    let temp = first.val;
    first.val = second.val;
    second.val = temp;
};