
var RecentCounter = function () {
    this.queue = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    this.queue.push(t);
    while (this.queue.length && t - 3000 > this.queue[0]) {
        // t= 3002
        // queue = [1,100,3001,3002]
        // at ping 4 -> 3002 - 3000 > 1
        this.queue.shift()
    }
    return this.queue.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */