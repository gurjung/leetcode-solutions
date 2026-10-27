/**
 * @param {character[]} tasks
 * @param {number} n
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

var leastInterval = function (tasks, n) {
    // {A: 2, B:2, C:1 , D: 1} , n = 1
    // count = 2;
    // prev= [{A: 1}]
    // v 
    let maxHeap = new MaxHeapOwn();
    let freq = {};

    for (let i = 0; i < tasks.length; i++) {
        if (freq[tasks[i]]) {
            freq[tasks[i]] = freq[tasks[i]] + 1
        } else {
            freq[tasks[i]] = 1
        }
    }

    for (let k in freq) {
        let obj = {
            val: freq[k],
            char: k
        }
        maxHeap.insert(obj)
    }

    let cooldownq = [];
    let count = 0;

    while (maxHeap.size() || cooldownq.length) {
        count++;
        if (maxHeap.size()) {
            let curr = maxHeap.extract();
            curr.val--;

            // push task to cooldown queue is it has some frequency/value
            if (curr.val > 0) {
                cooldownq.push({
                    val: curr.val,
                    char: curr.char,
                    availableAt: count + n
                })
            }
        }

        if (cooldownq.length && cooldownq[0].availableAt === count) {
            let task = cooldownq.shift();

            if (task.val > 0) {
                let obj = {
                    val: task.val,
                    char: task.char,
                }
                maxHeap.insert(obj);
            }
        }
    }

    return count;
};