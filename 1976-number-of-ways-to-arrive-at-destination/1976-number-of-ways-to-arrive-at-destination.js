/**
 * @param {number} n
 * @param {number[][]} roads
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
            if (this.heap[p].distance <= this.heap[i].distance) {
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
        if (left < n && this.heap[left].distance < this.heap[smallest].distance) {
            smallest = left;
        }

        if (right < n && this.heap[right].distance < this.heap[smallest].distance) {
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

var countPaths = function (n, roads) {
    const MOD = 1e9 + 7;

    let map = {};

    for (let i = 0; i < n; i++) {
        map[i] = [];
    }

    for (let i = 0; i < roads.length; i++) {
        let [u, v, w] = roads[i];
        map[u].push([v, w]);
        map[v].push([u, w]);
    }

    let distArr = new Array(n).fill(Infinity);
    distArr[0] = 0;

    let ways = new Array(n).fill(0);
    ways[0] = 1;

    let minHeap = new MinHeapOwn();

    minHeap.insert({
        distance: 0,
        node: 0
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
                ways[neighbor] = ways[node]
                minHeap.insert({
                    distance: newDist,
                    node: neighbor
                })
            } else if (distArr[neighbor] === newDist) {
                ways[neighbor] = (ways[neighbor] + ways[node]) % MOD;
            }
        }
    }

    return ways[n - 1]
};