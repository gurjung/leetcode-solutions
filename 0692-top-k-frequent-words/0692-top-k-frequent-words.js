/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
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
            if (this.less(this.heap[p], this.heap[i])) {
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
        if (left < n && this.less(this.heap[left], this.heap[smallest])) {
            smallest = left;
        }

        if (right < n && this.less(this.heap[right], this.heap[smallest])) {
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

    less(a, b) {
        if (a.val !== b.val) {
            return a.val < b.val;      // lower frequency is worse
        }

        return a.key > b.key;          // lexicographically larger is worse
    }
}

var topKFrequent = function (words, k) {
    let minHeap = new MinHeapOwn();
    let freq = {}
    // frequency counter
    for (let i = 0; i < words.length; i++) {
        if (freq[words[i]]) {
            freq[words[i]] = freq[words[i]] + 1;
        } else {
            freq[words[i]] = 1;
        }
    }

    for (let key in freq) {
        let obj = {
            val: freq[key],
            key: key
        }
        minHeap.insert(obj)
        while(minHeap.size() > k) {
            minHeap.extract();
        }
    }

    let ans = [];
    while(minHeap.size()) {
        let curr = minHeap.extract();
        ans.push(curr.key)
    }

    return ans.reverse()
};