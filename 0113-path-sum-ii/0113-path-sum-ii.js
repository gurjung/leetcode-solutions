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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {

    // Approach -> recursion + backtracking
    
    let result = [];
    let temp = [];

    function recur(curr, remSum, temp) {
        //base condition
        // temp = [5, 4, 11, ]
        if (!curr) return;

        temp.push(curr.val);

        if (!curr.left && !curr.right) {
            if (remSum - curr.val === 0) {
                result.push([...temp])
            }

            temp.pop();
            return;
        }


        recur(curr.left, remSum - curr.val, temp);
        recur(curr.right, remSum - curr.val, temp);
        temp.pop();
    }

    recur(root, targetSum, temp)
    return result;
};