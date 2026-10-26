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
 * @return {number}
 */
var maxPathSum = function (root) {
    //
    let ans = -Infinity;

    function recur(node) {

        if (!node) return 0
        //explore left
        let left = Math.max(0, recur(node.left));
        let right = Math.max(0, recur(node.right));

        let temp = left + node.val + right;

        ans = Math.max(ans, temp); // maxSum so far

        return node.val + Math.max(left, right); // have to choose one path among left or right while returning

    }

    recur(root);
    return ans
};