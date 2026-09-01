/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
class MinHeapOwn {
    constructor() {
        this.heap = [];
    }

    // get left index
    getLeftIndex(i) {
        return 2 * i + 1
    }

    // get right index

    getRightIndex(i) {
        return 2 * i + 2
    }

    // get parent

    getParentIndex(i) {
        return Math.floor((i - 1) / 2)
    }

    // insert
    insert(val) {
        this.heap.push(val);
        let lastIdx = this.size() - 1;
        this.heapifyUp(lastIdx);
    }

    // heapifyup

    heapifyUp(i) {
        while (i > 0) {
            let parent = this.getParentIndex(i);
            if (this.heap[parent].distance <= this.heap[i].distance) {
                break;
            }
            [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
            i = parent;
        }
    }

    // extract

    extract() {
        let min = this.heap[0];
        let lastIdx = this.size() - 1;
        [this.heap[0], this.heap[lastIdx]] = [this.heap[lastIdx], this.heap[0]]
        this.heap.pop();
        if (this.size() > 0) { this.heapifyDown(0); }
        return min;
    }

    // heapify down
    heapifyDown(i) {
        let smallest = i;
        let left = this.getLeftIndex(i);
        let right = this.getRightIndex(i);
        let n = this.size();
        if (left < n && this.heap[left].distance < this.heap[smallest].distance) {
            smallest = left;
        }

        if (right < n && this.heap[right].distance < this.heap[smallest].distance) {
            smallest = right;
        }

        if (smallest !== i) {
            [this.heap[smallest], this.heap[i]] = [this.heap[smallest], this.heap[i]];
            this.heapifyDown(smallest)
        }
    }

    // size

    size() {
        return this.heap.length;
    }


}
var networkDelayTime = function (times, n, k) {
    // approach -> Dijktra's algo

    // adjacency list
    let map = {};

    for (let i = 1; i <= n; i++) {
        map[i] = [];
    }

    for (let i = 0; i < times.length; i++) {
        let [u, v, w] = times[i];
        map[u].push([v, w]);
    }

    let distArr = new Array(n + 1).fill(Infinity); // because it is 1 indexed
    distArr[k] = 0;

    let minHeap = new MinHeapOwn();
    minHeap.insert({
        distance: 0,
        node: k
    })

    while (minHeap.size()) {
        let curr = minHeap.extract();
        let dist = curr.distance;
        let node = curr.node;
        if (distArr[node] < dist) continue;
        for (let [neighbor, w] of (map[node] || [])) {
            let newDist = dist + w;
            if (distArr[neighbor] > newDist) {
                distArr[neighbor] = newDist;
                minHeap.insert({
                    distance: newDist,
                    node: neighbor
                })
            }

        }
    }

    let result = 0;
    for (let i = 1; i <= n; i++) {
        if (distArr[i] === Infinity) {
            return -1;
        }

        result = Math.max(result, distArr[i])
    }

    return result



};