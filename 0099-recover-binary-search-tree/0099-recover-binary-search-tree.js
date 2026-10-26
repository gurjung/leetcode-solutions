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
    // inorder traversal gives sorted array in valid BST
    // sorted array -> prev < curr
    let prev = null;
    // for tracking adjacent and non-adjacent problametic nodes
    let first = null;
    let sec = null;
    function recur(curr) {
        // left | root | right
        if (!curr) return;
        //left
        recur(curr.left);

        //root
        if (prev !== null && curr.val < prev.val) {
            // not valid condition for sorted
            if (!first) {
                first = prev;
            }
            sec = curr;

            // 1,4,3,2,5
            // f = null, s = null, p = null
            // f = null, s = null, p = 1
            // f = null, s = null, p = 4
            // f = 4, s = null, p = 3
            // f = 4, s = 2, p = 2
            // f = 4, s = 2
            // swaping f,s -> 1,2,3,4,5
        }
        prev = curr;
        //right
        recur(curr.right);
    }

    recur(root);

    let temp = first.val;
    first.val = sec.val;
    sec.val = temp;
};