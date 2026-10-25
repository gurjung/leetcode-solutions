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
    // serialize tree
    function serialized(node) {
        let temp = ""
        function recur(curr) {
            // preorder traversal = root/left/right

            if (!curr) {
                temp = temp + "-#";
                return;
            }

            temp = temp + "-" + curr.val;
            recur(curr.left);
            recur(curr.right);

        }

        recur(node)
        return temp;

    }

    let hashRoot = serialized(root);
    let hashSubroot = serialized(subRoot);
    return hashRoot.includes(hashSubroot)
};