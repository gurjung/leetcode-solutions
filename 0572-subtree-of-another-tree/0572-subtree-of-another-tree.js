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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {

    function serialized(node) {

        let temp = "";

        function recur(curr) {
            // base condition
            if (!curr) {
                temp = temp + "-#"
                return;
            }
            // preorder -> root / left / right
            temp = temp + "-" + curr.val
            recur(curr.left);
            recur(curr.right);
        }
        recur(node)
        return temp;

    }

    let hashRoot = serialized(root);
    let hashSubRoot = serialized(subRoot);
    return hashRoot.includes(hashSubRoot)
};