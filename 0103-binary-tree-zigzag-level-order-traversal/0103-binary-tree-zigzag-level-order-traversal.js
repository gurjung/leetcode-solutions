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
var zigzagLevelOrder = function (root) {

    if (!root) return [];

    let q = [];
    let result = [];
    q.push(root);

    // [[3], [9,20]]
    // [9,20]
    let count = 0;
    while (q.length) {
        let temp = [];
        let size = q.length;
        for (let i = 0; i < size; i++) {
            let node = q.shift();
            temp.push(node.val);
            node.left && q.push(node.left);
            node.right && q.push(node.right);
        }
        let newTemp = count % 2 === 0 ? temp : temp.reverse();
        result.push(newTemp);
        count++;
    }

    return result
};