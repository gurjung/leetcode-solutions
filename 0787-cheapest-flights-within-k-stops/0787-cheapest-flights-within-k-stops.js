/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
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
            if (this.heap[p].cost <= this.heap[i].cost) {
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
        if (left < n && this.heap[left].cost < this.heap[smallest].cost) {
            smallest = left;
        }

        if (right < n && this.heap[right].cost < this.heap[smallest].cost) {
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


var findCheapestPrice = function (n, flights, src, dst, k) {
    const minHeap = new MinHeapOwn();

    // let resArr = new Array(n).fill(+Infinity);
    let resArr = [];

    for (let i = 0; i < n; i++) {
        resArr[i] = [];
        for (let j = 0; j <= k + 1; j++) {
            resArr[i][j] = Infinity;
        }
    }

    resArr[src][0] = 0;

    minHeap.insert({
        cost: 0,
        city: src,
        stops: 0
    })

    // build adjacency list

    let map = {}

    for (let i = 0; i < n; i++) {
        map[i] = [];
    }

    for (let i = 0; i < flights.length; i++) {
        let u = flights[i][0];
        let v = flights[i][1];
        let w = flights[i][2];

        map[u].push([v, w]);
    }

    while (minHeap.size()) {
        let { cost, city, stops } = minHeap.extract();

        // If destination reached, return cost
        if (city === dst) return cost;

        // Don't expand if we've used too many stops
        if (stops > k) continue;

        // Look at all neighbors
        for (let neighbor of map[city]) {
            // Calculate newCost and newStops
            let nextCity = neighbor[0];
            let nextCityPrice = neighbor[1];

            let newCost = cost + nextCityPrice;
            let newStops = stops + 1;

            if (newCost < resArr[nextCity][newStops]) {
                resArr[nextCity][newStops] = newCost;
                minHeap.insert({
                    cost: newCost,
                    city: nextCity,
                    stops: newStops
                })
            }
        }

    }

    return -1;

};