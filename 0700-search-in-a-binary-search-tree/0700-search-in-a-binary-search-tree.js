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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    // approach 1 -> linear search

    // function recur(node) {
    //     if (!node) return null;
    //     if (node.val === val) return node;
    //     let l = recur(node.left);
    //     let r = recur(node.right);
    //     return l || r;
    // }

    // return recur(root);

    // approach 2 -> Binary search


    function recur(node) {
        if (!node) return null;
        if (node.val === val) return node;
        if(node.val > val) {
            return recur(node.left);
        } else {
            return recur(node.right);
        }
    }

    return recur(root);
};