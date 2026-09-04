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
    // preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
    // preorder -> it gives root value
    // inorder -> left and right child positions
    // use map to store inorder values
    let map = {}

    for (let i = 0; i < inorder.length; i++) {
        map[inorder[i]] = i
    }
    let idx = 0;

    function recur(s, e) {
        // base condition
        if(s > e) return null;
        let root = preorder[idx];
        idx++;
        let node = new TreeNode(root);
        let mid = map[root];

        node.left = recur(s, mid - 1);
        node.right = recur(mid + 1, e);
        return node;
    }

    return recur(0, inorder.length - 1)

};