/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
class MinHeapOwn {
    constructor() {
        this.heap = [];
    }

    getLeftChildIndex(i) {
        return (2 * i) + 1
    }

    getRightChildIndex(i) {
        return (2 * i) + 2
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2)
    }

    insert(val) {
        this.heap.push(val);
        let lastIdx = this.heap.length - 1;
        this.heapifyUp(lastIdx)
    }

    heapifyUp(i) {
        while (i > 0) {
            let p = this.getParentIndex(i);
            if (this.heap[p] <= this.heap[i]) {
                break;
            } else {
                [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]]
                i = p
            }
        }
    }

    extract() {
        if (this.heap.length < 1) return null;
        let min = this.heap[0];
        let lastIdx = this.heap.length - 1;
        [this.heap[0], this.heap[lastIdx]] = [this.heap[lastIdx], this.heap[0]];
        this.heap.pop();
        if (this.heap.length > 0) {
            this.heapifyDown(0)
        }
        return min;

    }

    heapifyDown(i) {
        let smallest = i;
        let l = this.getLeftChildIndex(i);
        let r = this.getRightChildIndex(i);
        let n = this.heap.length;
        if (l < n && this.heap[l] < this.heap[smallest]) {
            smallest = l;
        }

        if (r < n && this.heap[r] < this.heap[smallest]) {
            smallest = r;
        }

        if (smallest !== i) {
            [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]]
            this.heapifyDown(smallest)
        }
    }

    peek() {
        if (this.heap.length) {
            return this.heap[0]
        } else {
            return null
        }
    }

    size() {
        return this.heap.length;
    }

}
var findKthLargest = function (nums, k) {
    let minHeap = new MinHeapOwn();
    
    // nums = [3,2,3,1,2,4,5,5,6], k = 4
    // [4,5,5,6] 
    for (let i = 0; i < nums.length; i++) {
        minHeap.insert(nums[i]);
        while (minHeap.size() > k) {
            minHeap.extract()
        }
    }
    return minHeap.peek()
};