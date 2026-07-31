/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
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
var kthSmallest = function (matrix, k) {
    // store 1st column in heap
    // take pArr to track columns

    let n = matrix.length;
    let m = matrix[0].length;

    let minHeap = new MinHeapOwn();

    for (let i = 0; i < n; i++) {
        let colVal = matrix[i][0];
        let obj = {
            val: colVal,
            row: i
        }
        minHeap.insert(obj)
    }

    let pArr = new Array(m).fill(0);

    for (let i = 0; i < k - 1; i++) {
        let curr = minHeap.extract();
        let currVal = curr.val;
        let idx = curr.row;
        pArr[idx]++
        if (pArr[idx] < m) {
            let row = idx;
            let col = pArr[idx];
            let obj = {
                val: matrix[row][col],
                row: row
            }
            minHeap.insert(obj)
        }

    }

    return minHeap.peek().val
};