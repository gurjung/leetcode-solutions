/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
    // multisource bfs

    let deadEndsSet = new Set(deadends)

    let start = "0000";

    if (deadEndsSet.has(start)) return -1

    let q = [];
    q.push(start);
    deadEndsSet.add(start);

    let level = 0;

    while (q.length) {

        let size = q.length;
        while (size) {
            let curr = q.shift();

            if (curr === target) {
                return level
            }

            let original = curr;

            for (let i = 0; i < 4; i++) {
                let currArr = curr.split("");
                // [0,0,0,0]
                let ch = currArr[i];
                let inc = Number(ch) === 9 ? 0 : Number(ch) + 1;
                // 0 -> 1
                let dec = Number(ch) === 0 ? 9 : Number(ch) - 1;
                // 0 -> 9

                // Increment
                currArr[i] = String(inc);
                // [1,0,0,0]

                let next1 = currArr.join("");
                // "1000"

                if (!deadEndsSet.has(next1)) {
                    deadEndsSet.add(next1);
                    q.push(next1);
                }

                // Restore original
                curr = original;
                // "0000"

                currArr = curr.split("");
                //[0,0,0,0]

                // Decrement
                currArr[i] = String(dec);
                // [9,0,0,0]

                let next2 = currArr.join("");
                // "9000"

                if (!deadEndsSet.has(next2)) {
                    deadEndsSet.add(next2);
                    q.push(next2);
                }

            }

            size--;
        }
        level++;
    }

    return -1;


};