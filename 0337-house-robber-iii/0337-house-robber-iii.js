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
var rob = function (root) {

    function recur(curr) {
        if (!curr) return [0, 0];

        let left = recur(curr.left);
        let right = recur(curr.right);
        // rob = currVal + skip left child val + skip right child val
        let rob = curr.val + left[1] + right[1];
        // skip = Math.max(left child rob, left child skip) + Math.max(right child rob, right child skip)
        let skip = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
        return [rob, skip]
    }

    let options = recur(root);

    return Math.max(options[0], options[1])
};