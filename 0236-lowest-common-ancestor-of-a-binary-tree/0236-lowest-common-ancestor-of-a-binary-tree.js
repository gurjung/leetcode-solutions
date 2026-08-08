/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {

    function recur(node, p, q) {
        if (!node) return null;
        if (node === p || node === q) return node;

        let path1 = recur(node.left, p, q);
        let path2 = recur(node.right, p, q);

        if (path1 && path2) return node;
        if (path1) return path1;
        if (path2) return path2;
    }

    return recur(root, p, q)

};