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
    // Approach 2 -> using heaps O(T × K log K)
    // let maxHeap = new MaxHeapOwn();

    // // create freq map and map for seating arrangement
    // let freq = {};
    // let allocationMap = {};

    // for (let i = 0; i < tasks.length; i++) {
    //     let char = tasks[i];
    //     if (freq[char]) {
    //         freq[char] = freq[char] + 1;
    //     } else {
    //         freq[char] = 1;
    //         allocationMap[char] = 1;
    //     }
    // }

    // for (let key in freq) {
    //     let obj = {
    //         val: freq[key],
    //         char: key
    //     }
    //     maxHeap.insert(obj)
    // }

    // let seat = 1;

    // while (maxHeap.size() > 0) {

    //     let idleArr = [];

    //     while (maxHeap.size() > 0) {
    //         let curr = maxHeap.extract();
    //         let val = curr.val;
    //         let char = curr.char;
    //         if (allocationMap[char] <= seat) {
    //             if (val > 1) {
    //                 maxHeap.insert({
    //                     val: val - 1,
    //                     char: char
    //                 })
    //                 allocationMap[char] = seat + n + 1; // next free seat available
    //             }
    //             break;
    //         } else {
    //             idleArr.push(curr)
    //         }
    //     }

    //     for (let i = 0; i < idleArr.length; i++) {
    //         maxHeap.insert(idleArr[i])
    //     }
    //     seat++;
    // }

    // return seat - 1;

    // Approach 3 -> using heap + cooldown queue O(TlogK)
    // k = number of distinct task types
    // T = total slots or intervals

    let freq = {};

    for (let task of tasks) {
        freq[task] = (freq[task] || 0) + 1;
    }

    let maxHeap = new MaxHeapOwn();

    for (let key in freq) {
        maxHeap.insert({
            val: freq[key],
            char: key
        });
    }

    // { val, char, availableAt }
    let cooldown = [];

    let seat = 0;

    while (maxHeap.size() > 0 || cooldown.length > 0) {

        seat++;

        // Execute one task if possible
        if (maxHeap.size() > 0) {

            let curr = maxHeap.extract();

            curr.val--;

            if (curr.val > 0) {
                cooldown.push({
                    val: curr.val,
                    char: curr.char,
                    availableAt: seat + n
                });
            }
        }

        // Move tasks whose cooldown has finished back to heap
        while (
            cooldown.length > 0 &&
            cooldown[0].availableAt === seat
        ) {
            let task = cooldown.shift();

            maxHeap.insert({
                val: task.val,
                char: task.char
            });
        }
    }

    return seat;
};

