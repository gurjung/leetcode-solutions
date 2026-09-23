/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
    if (!head) return null;

    const map = new Map();
    let curr = head;
    // {key (original): value(copy)}

    while (curr) {
        let newNode = new _Node(curr.val);
        map.set(curr, newNode)
        curr = curr.next;
    }
    curr = head;
    while (curr) {
        let copyNode = map.get(curr);
        copyNode.next = map.get(curr.next) || null;
        copyNode.random = map.get(curr.random) || null;
        curr = curr.next;
    }

    return map.get(head);
};