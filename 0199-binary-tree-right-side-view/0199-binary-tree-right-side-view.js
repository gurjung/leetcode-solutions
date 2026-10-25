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
var rightSideView = function (root) {
    if (!root) return [];

    let q = [];

    q.push(root);

    let ans = [];
    while (q.length) {
        let size = q.length;

        // for (let i = 0; i < size; i++) {
        //     let curr = q.shift();
        //     let diff = size - i;
        //     if (diff === 1) {
        //         ans.push(curr.val)
        //     }
        //     curr.left && q.push(curr.left);
        //     curr.right && q.push(curr.right);
        // }

        // another approach -> we need rightmost value

        let rightmostVal = null;
        for (let i = 0; i < size; i++) {
            let curr = q.shift();
            rightmostVal = curr.val;
            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right);
        }

        ans.push(rightmostVal)

    }

    return ans;
};