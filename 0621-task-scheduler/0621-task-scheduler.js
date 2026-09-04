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
    // tasks = ["A","A","A","B","B","B"], n = 2
    // _A, _B, _, _A, _B, _, _A, _B 
    let maxHeap = new MaxHeapOwn();

    let freqMap = {};
    for (let i = 0; i < tasks.length; i++) {
        let char = tasks[i];
        if (freqMap[char]) {
            freqMap[char] = freqMap[char] + 1;
        } else {
            freqMap[char] = 1
        }
    }

    // {A: 3, B: 3}
    for (let key in freqMap) {
        console.log(key, freqMap[key])
        let obj = {
            val: freqMap[key],
            char: key,
            // nextSchedule: 
        }
        maxHeap.insert(obj)
    }
    let cooldownQ = [];
    let ans = 0;
    while (maxHeap.size() || cooldownQ.length) {
        ans++;

        // Execute task if available
        if (maxHeap.size()) {
            let curr = maxHeap.extract();

            curr.val--;

            // If it still has occurrences,
            // put it into cooldown
            if (curr.val > 0) {
                cooldownQ.push({
                    val: curr.val,
                    char: curr.char,
                    nextTurn: ans + n
                });
            }
        }

        // Move tasks whose cooldown has expired
        if (
            cooldownQ.length &&
            cooldownQ[0].nextTurn === ans
        ) {
            let task = cooldownQ.shift();

            if (task.val > 0) {
                maxHeap.insert({
                    val: task.val,
                    char: task.char
                });
            }
        }

    }

    return ans
};