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
var widthOfBinaryTree = function (root) {
    if (!root) return []
    // BFS -> for each node we assign index then width = last - first + 1
    // indexing -> 0 based -> left = 2*i+1 and right child = 2*i + 2
    let q = [];

    q.push([root, 0]);

    let ans = [];

    while (q.length) {
        let size = q.length;
        let minIdx = q[0][1]; // required for normalizing index to prevent overflow problem
        let first = 0;
        let last = 0;

        for (let i = 0; i < size; i++) {
            let [node, index] = q.shift();

            index = index - minIdx;

            if (i === 0) {
                first = index;
            }

            if (i === size - 1) {
                last = index
            }

            node.left && q.push([node.left, 2 * index + 1])
            node.right && q.push([node.right, 2 * index + 2])
        }

        let width = last - first + 1;
        ans = Math.max(ans, width);
    }
    return ans
};