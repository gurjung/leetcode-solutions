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

        let lastIdx = this.heap.length - 1;

        this.heapifyUp(lastIdx)
    }

    heapifyUp(i) {
        while (i > 0) {
            let p = this.getParentIndex(i);

            if (this.heap[p].val <= this.heap[i].val) {
                break;
            } else {
                // swap
                [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]]
                i = p;
            }

        }
    }

    extract() {
        if (this.heap.length < 1) return null;

        let min = this.heap[0];

        let lastIdx = this.heap.length - 1;

        // swap lastIdx with min

        [this.heap[lastIdx], this.heap[0]] = [this.heap[0], this.heap[lastIdx]]

        this.heap.pop();
        if (this.heap.length > 0) {
            this.heapifyDown(0);
        }

        return min;

    }

    heapifyDown(i) {
        let smallest = i;

        let left = this.getLeftChildIndex(smallest);
        let right = this.getRightChildIndex(smallest);

        let n = this.heap.length;

        if (left < n && this.heap[left].val < this.heap[smallest].val) {
            smallest = left
        }

        if (right < n && this.heap[right].val < this.heap[smallest].val) {
            smallest = right
        }

        if (smallest !== i) {
            [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]]
            this.heapifyDown(smallest)
        }
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    size() {
        return this.heap.length
    }

}

var kthSmallest = function (matrix, k) {
    // [[1,5,9],
    //  [10,11,13],
    //  [12,13,15]]
    let minHeap = new MinHeapOwn();

    let m = matrix.length;
    let n = matrix[0].length;

    // store 1st column in minHeap
    for (let i = 0; i < m; i++) {
        let val = matrix[i][0];
        let obj = {
            val: val,
            row: i
        }
        minHeap.insert(obj)
    }

    let pArr = new Array(m).fill(0)
    let count = 0;

    while (minHeap.size()) {
        let curr = minHeap.extract();
        count++;

        if(count === k) {
            return curr.val
        }

        let row = curr.row;

        pArr[row]++;

        if (pArr[row] < n) {
            let r = row;
            let c = pArr[r];
            let obj = {
                val: matrix[r][c],
                row: r
            }
            minHeap.insert(obj)
        }

    }

    return null

};