/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
    this.arr = new Array(k);
    this.capacity = k;
    this.size = 0;
    this.front = 0;
    this.rear = k - 1;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
    if (this.isFull()) return false;
    let idx = (this.front - 1 + this.capacity) % this.capacity;
    this.front = idx;
    this.arr[idx] = value;
    this.size++;
    return true
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
    if (this.isFull()) return false;
    let idx = (this.rear + 1) % this.capacity;
    this.rear = idx;
    this.arr[idx] = value;
    this.size++;
    return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
    if (this.isEmpty()) return false;

    let idx = (this.front + 1) % this.capacity;
    this.front = idx;
    this.size--;

    if (this.size === 0) {
        this.front = 0;
        this.rear = this.capacity - 1;
    }

    return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
    if (this.isEmpty()) return false;
    let idx = (this.rear - 1 + this.capacity) % this.capacity;
    this.rear = idx;
    this.size--;

    if (this.size === 0) {
        this.front = 0;
        this.rear = this.capacity - 1;
    }

    return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
    if (this.isEmpty()) return -1;
    return this.arr[this.front]
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
    if (this.isEmpty()) return -1;
    return this.arr[this.rear]
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
    return this.size === 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
    return this.size === this.capacity;
};

/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */