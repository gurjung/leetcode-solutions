/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    let stack = [];

    for (let i = 0; i < asteroids.length; i++) {
        let isNegativeAlive = true;
        let current = asteroids[i];
        if (current > 0) {
            //positive moving right
            stack.push(current);
        } else {
            //negative moving left
            while (stack.length > 0 && stack[stack.length - 1] > 0) {
                let stackTop = stack[stack.length - 1];

                if (Math.abs(stackTop) < Math.abs(current)) {
                    // explode positive
                    stack.pop();
                    continue;
                } else if (Math.abs(stackTop) === Math.abs(asteroids[i])) {
                    // both explodes
                    stack.pop();
                    isNegativeAlive = false;
                    break;
                } else {
                    //explode negative
                    isNegativeAlive = false;
                    break;
                }

            }

            if (isNegativeAlive) {
                stack.push(current)
            }


        }
    }

    return stack
};