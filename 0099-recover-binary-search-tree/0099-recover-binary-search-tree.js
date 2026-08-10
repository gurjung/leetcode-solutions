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
    // Approach -> Inorder traversal gives sorted array

    let first = null;
    let sec = null;
    let prev = null;

    function recur(curr) {
        if (!curr) return;

        recur(curr.left);

        if (prev && curr.val < prev.val) {
            if (!first) {
                first = prev
            }

            sec = curr;
        }

        prev = curr

        recur(curr.right);
    }

    recur(root);
    // swap the values
    let temp = first.val;
    first.val = sec.val;
    sec.val = temp
};