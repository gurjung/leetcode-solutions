/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
    // approach -> DFS

    // create graph
    // map = { 'emailId' : [e1@gmail.com, e2@gmail.com] }
    let n = accounts.length;
    let map = {};

    for (let i = 0; i < n; i++) {
        // get first email from accounts
        let account = accounts[i];
        let firstEmail = account[1]

        if (!map[firstEmail]) {
            map[firstEmail] = [];
        }

        // iterate each account to connect emails with each other

        for (let j = 2; j < account.length; j++) {
            // why j = 2 because first email already taken
            const email = account[j];

            if (!map[email]) {
                map[email] = [];
            }

            map[firstEmail].push(email);
            map[email].push(firstEmail);
        }

    }

    console.log(map, "DEBUG")
    let visitedSet = new Set();

    function recur(node, allEmails) {
        visitedSet.add(node);
        allEmails.push(node)
        for (let neighbor of map[node]) {
            if (!visitedSet.has(neighbor)) {
                recur(neighbor, allEmails);
            }
        }
    }

    // traverse
    let result = [];
    for (let i = 0; i < accounts.length; i++) {
        let account = accounts[i];
        let name = account[0];

        for (let j = 1; j < account.length; j++) {
            let email = account[j];

            if (!visitedSet.has(email)) {
                let allEmails = [];

                recur(email, allEmails)

                allEmails.sort();

                result.push([name, ...allEmails])
            }

        }
    }

    return result
};