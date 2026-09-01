/**
 * @param {string} s
 * @return {string}
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
            if (this.heap[p].val >= this.heap[i].val) {
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
        if (left < n && this.heap[left].val > this.heap[largest].val) {
            largest = left;
        }

        if (right < n && this.heap[right].val > this.heap[largest].val) {
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

var reorganizeString = function (s) {
    let maxHeap = new MaxHeapOwn();
    let map = {};

    // create frequency map
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (map[char]) {
            map[char] = map[char] + 1;
        } else {
            map[char] = 1
        }
    }

    for (let key in map) {
        let obj = {
            char: key,
            val: map[key]
        }
        maxHeap.insert(obj);
    }

    let result = [];
    let prev = null;
    while (maxHeap.size()) {
        let curr = maxHeap.extract();
        let char = curr.char;
        result.push(char);
        curr.val--;

        if (prev && prev.val > 0) {
            maxHeap.insert(prev)
        }
        prev = curr;
    }

    if (result.length !== s.length) {
        return ""
    } else {
        return result.join("");
    }

};