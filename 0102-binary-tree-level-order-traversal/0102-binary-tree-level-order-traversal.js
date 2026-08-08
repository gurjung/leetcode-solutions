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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return []
    // code here
    let q = [];

    q.push(root);

    let ans = [];

    while (q.length) {
        // let curr = q.shift();
        let temp = [];
        let size = q.length;
        while (size > 0) {
            let curr = q.shift();
            temp.push(curr.val);
            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right);
            size--;
        }
        ans.push(temp);
    }

    return ans;
};