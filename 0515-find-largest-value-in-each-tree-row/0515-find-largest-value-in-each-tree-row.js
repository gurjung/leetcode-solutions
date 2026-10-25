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
 * @return {number[]}
 */
var largestValues = function (root) {
    if(!root) return []
    // BFS
    let q = [];

    q.push(root);

    let ans = [];

    while (q.length) {
        let size = q.length;
        let temp = [];
        for (let i = 0; i < size; i++) {
            let curr = q.shift();
            temp.push(curr.val);
            curr.left && q.push(curr.left)
            curr.right && q.push(curr.right)
        }
        ans.push(Math.max(...temp))
    }
    return ans
};