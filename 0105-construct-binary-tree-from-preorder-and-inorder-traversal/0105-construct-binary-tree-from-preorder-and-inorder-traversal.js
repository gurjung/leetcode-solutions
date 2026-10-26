/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    // preorder -> gives root values
    // inorder -> gives left and right child positions
    // map to store inorder values
    let map = {};
    // {9: 0, 3: 1}
    for (let i = 0; i < inorder.length; i++) {
        let val = inorder[i]
        map[val] = i
    }
    let idx = 0
    function recur(start, end) {
        // base condition
        if (start > end) return null

        let node = preorder[idx];
        idx++;
        let root = new TreeNode(node);

        let mid = map[node];

        root.left = recur(start, mid - 1);
        root.right = recur(mid + 1, end)
        return root;
    }

    return recur(0, inorder.length - 1)
};