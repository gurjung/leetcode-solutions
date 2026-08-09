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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    // Approach 1 -> inorder traversal + two pointer

    // left / root / right
    let arr = [];
    function recur(node) {
        // base condition
        if (!node) return;
        recur(node.left);
        arr.push(node.val);
        recur(node.right);
    }

    recur(root)

    console.log(arr, "DEBUG")
    let low = 0;
    let high = arr.length - 1;

    while (low < high) {
        let sum = arr[low] + arr[high]
        if (sum === k) return true;
        if (sum > k) {
            high--;
        } else {
            low++;
        }
    }
    return false;
};