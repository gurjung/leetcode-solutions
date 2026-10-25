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
var isSymmetric = function (root) {
    if (!root) return root;

    function recur(nodeA, nodeB) {
        if (!nodeA && !nodeB) return true;
        if (!nodeA || !nodeB) return false;
        if (nodeA.val !== nodeB.val) return false;

        let path1 = recur(nodeA.left, nodeB.right);
        let path2 = recur(nodeA.right, nodeB.left);
        return path1 && path2;
    }

    return recur(root.left, root.right)
};