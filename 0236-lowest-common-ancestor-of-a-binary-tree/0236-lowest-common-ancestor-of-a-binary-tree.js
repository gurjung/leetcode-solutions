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
    if (!root) return root;

    function recur(curr) {
        if (!curr) return null;

        if (curr === p || curr === q) {
            return curr;
        }

        let left = recur(curr.left);
        let right = recur(curr.right);

        if (left && right) return curr;

        if (left) return left;

        if (right) return right;

    }

    return recur(root)
};