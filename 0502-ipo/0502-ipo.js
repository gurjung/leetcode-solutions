/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */

class MaxHeapOwn {
    constructor() {
        this.heap = []
    }

    getLeftChildIndex(i) {
        return (2 * i) + 1;
    }

    getRightChildIndex(i) {
        return (2 * i) + 2;
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2)
    }

    insert(val) {
        this.heap.push(val);
        let lastIndex = this.heap.length - 1;
        this.heapifyUp(lastIndex);
    }

    heapifyUp(i) {
        while (i > 0) {
            let p = this.getParentIndex(i);
            if (this.heap[p] >= this.heap[i]) {
                break;
            } else {
                // swap
                [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
                i = p;
            }
        }
    }

    extract() {
        if (this.heap.length < 1) return null;
        let max = this.heap[0];
        let lastIdx = this.heap.length - 1;
        // swap first with last element
        // [a, b] = [b, a]
        [this.heap[0], this.heap[lastIdx]] = [this.heap[lastIdx], this.heap[0]]

        this.heap.pop();
        if (this.heap.length > 0) {
            this.heapifyDown(0);
        }
        return max;
    }

    peek() {
        if (this.heap.length) {
            return this.heap[0];
        } else {
            return null
        }
    }

    heapifyDown(i) {
        let largest = i;
        let left = this.getLeftChildIndex(i);
        let right = this.getRightChildIndex(i);
        let n = this.heap.length;

        // check smallest and left and find new Smallest
        if (left < n && this.heap[left] > this.heap[largest]) {
            largest = left;
        }

        if (right < n && this.heap[right] > this.heap[largest]) {
            largest = right;
        }

        // [a, b] = [b, a]
        if (largest !== i) {
            [this.heap[largest], this.heap[i]] = [this.heap[i], this.heap[largest]]
            this.heapifyDown(largest);
        }
    }

    size() {
        return this.heap.length;
    }
}

var findMaximizedCapital = function (k, w, profits, capital) {
    let maxHeap = new MaxHeapOwn();

    let store = [];

    for (let i = 0; i < profits.length; i++) {
        let obj = {
            p: profits[i],
            c: capital[i]
        }
        store.push(obj)
    }

    store.sort((a, b) => a.c - b.c)
    let idx = 0;
    while (k > 0) {
        while (idx < store.length && store[idx].c <= w) {
            maxHeap.insert(store[idx].p);
            idx++;
        }

        if(maxHeap.size() === 0) break;

        w = w + maxHeap.extract();
        k--;
    }

    return w
};