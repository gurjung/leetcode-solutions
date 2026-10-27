/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

class MinHeapOwn {
    constructor() {
        this.heap = [];
    }

    getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    getRightChildIndex(i) {
        return 2 * i + 2;
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    insert(val) {
        this.heap.push(val);
        let lastIndex = this.heap.length - 1;
        this.heapifyUp(lastIndex);
    }

    heapifyUp(i) {
        while (i > 0) {
            let p = this.getParentIndex(i);
            if (this.heap[p].val <= this.heap[i].val) {
                break;
            } else {
                // swap
                [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
                i = p;
            }
        }
    }

    extract() {
        if (this.heap.length < 1)
            return null;
        let min = this.heap[0];
        let lastIdx = this.heap.length - 1;
        // swap first with last element
        // [a, b] = [b, a]
        [this.heap[0], this.heap[lastIdx]] = [this.heap[lastIdx], this.heap[0]];

        this.heap.pop();
        if (this.heap.length > 0) {
            this.heapifyDown(0);
        }
        return min;
    }

    peek() {
        if (this.heap.length) {
            return this.heap[0];
        } else {
            return null;
        }
    }

    heapifyDown(i) {
        let smallest = i;
        let left = this.getLeftChildIndex(i);
        let right = this.getRightChildIndex(i);
        let n = this.heap.length;

        // check smallest and left and find new Smallest
        if (left < n && this.heap[left].val < this.heap[smallest].val) {
            smallest = left;
        }

        if (right < n && this.heap[right].val < this.heap[smallest].val) {
            smallest = right;
        }

        // [a, b] = [b, a]
        if (smallest !== i) {
            [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
            this.heapifyDown(smallest);
        }
    }

    size() {
        return this.heap.length;
    }
}

var mergeKLists = function (lists) {
    let minHeap = new MinHeapOwn();
    // similar to merge k sorted arrays problem
    // store 1st col values in minheap

    for (let node of lists) {
        if (node) {
            // node = [1,4,5]
            // node.val -> 1 // 1st val only
            let obj = {
                val: node.val,
                node: node
            }
            minHeap.insert(obj)
        }
    }

    let dummyNode = new ListNode(0);
    let dummyNodeCpy = dummyNode;

    while (minHeap.size()) {
        let curr = minHeap.extract();
        dummyNodeCpy.next = curr.node;
        dummyNodeCpy = dummyNodeCpy.next

        if (curr.node.next) {
            // curr.node.next = [4,5]
            let obj = {
                val: curr.node.next.val, // 4
                node: curr.node.next // [4,5]
            }
            minHeap.insert(obj)
        }

    }

    return dummyNode.next
};