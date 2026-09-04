/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let totalGas = gas.reduce((acc, curr) => acc + curr, 0);
    let totalCost = cost.reduce((acc, curr) => acc + curr, 0);

    if (totalGas < totalCost) return -1;
    let start = 0;
    let tank = 0;

    for (let i = 0; i < gas.length; i++) {
        let diff = gas[i] - cost[i];
        tank = tank + diff;
        if (tank < 0) {
            start = i + 1
            tank = 0; 
        }
    }

    return start;
};