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

    let inorderMap = new Map();

    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i)
    }

    let preorderIdx = 0;

    function recur(start, end) {
        //base condition
        if (start > end) return null;

        let rootVal = preorder[preorderIdx];

        preorderIdx++; // 3

        let node = new TreeNode(rootVal);

        let mid = inorderMap.get(rootVal);
        
        node.left = recur(start, mid - 1);
        node.right = recur(mid + 1, end);
        
        return node;
    }

    return recur(0, inorder.length - 1)

};