// https://www.hackerrank.com/challenges/pairs/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search

function pairs(k, arr) {
    let counter = 0;
    arr.sort((a, b) => a - b);
    let hash = {};

    for (let i = 0; i < arr.length; i++) {
        hash[arr[i]] = hash[arr[i]] != undefined ? hash[arr[i]] + 1 : 1;
    }
    for (let i = 0; i < arr.length; i++) {
        if (hash[arr[i] + k] != undefined) counter += hash[arr[i] + k];
    }
    return counter;
}

let arr = [1, 5, 3, 4, 2,];
let k = 2;
console.log(pairs(k, arr));
console.log(3);