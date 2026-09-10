/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
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
            if (this.heap[p].dist <= this.heap[i].dist) {
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
        if (left < n && this.heap[left].dist < this.heap[smallest].dist) {
            smallest = left;
        }

        if (right < n && this.heap[right].dist < this.heap[smallest].dist) {
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


var findTheCity = function (n, edges, distanceThreshold) {
    // djiktra's algo

    // adjacency list

    let map = {};

    for (let i = 0; i < n; i++) {
        map[i] = [];
    }

    for (let i = 0; i < edges.length; i++) {
        let [u, v, w] = edges[i];
        map[u].push([v, w]);
        map[v].push([u, w]); // bidirectional
    }
    let result = new Array(n);

    for (let i = 0; i < n; i++) {

        const minHeap = new MinHeapOwn();

        let obj = {
            node: i,
            dist: 0
        }
        let distArr = new Array(n).fill(Infinity);
        distArr[i] = 0;

        minHeap.insert(obj);

        while (minHeap.size()) {
            let curr = minHeap.extract();
            let { node, dist } = curr;
            //edge case
            if (distArr[node] < dist) continue;

            for (let neighbor of (map[node] || [])) {
                let [v, w] = neighbor;
                let newDist = dist + w;
                if (distArr[v] > newDist) {
                    distArr[v] = newDist;
                    minHeap.insert({
                        node: v,
                        dist: newDist
                    })
                }
            }

        }
        let count = 0;
        for (let j = 0; j < distArr.length; j++) {

            if (i === j) continue;

            if (distArr[j] <= distanceThreshold) {
                count++;
            }
        }
        result[i] = count;
    }

    let city = 0;

    for (let i = 1; i < result.length; i++) {
        if (result[i] < result[city]) {
            city = i;
        }

        if (result[i] === result[city] && i > city) {
            city = i;
        }
    }

    return city;
};