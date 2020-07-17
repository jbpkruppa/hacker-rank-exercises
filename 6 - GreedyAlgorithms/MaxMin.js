// https://www.hackerrank.com/challenges/angry-children/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms

function maxMin(k, arr) { //100%
    arr.sort((a, b) => a - b);
    let min = Infinity;
    for (let i = 0; i <= arr.length - k; i++) {
        let unfairness = arr[i + k - 1] - arr[i];
        if (unfairness < min) min = unfairness;
    }

    return min;
}


function firstMaxMin(k, arr) { // get 13/16 corrects
    //let unfairnessArr = new Array(arr.length-k);
    arr.sort((a, b) => a - b);

    let minimum = Infinity;
    for (let i = 0; i <= arr.length - k; i++) {
        let min = Math.min(...arr.slice(i, i + k));
        let max = Math.max(...arr.slice(i, i + k));
        //console.log(`min: ${min}, max: ${max}`);
        let unfairness = max - min;
        //console.log(unfairness);
        if (unfairness < minimum) minimum = unfairness;
    }
    return minimum;
}

let k = 2;
let arr = [1, 4, 7, 2];

console.log(maxMin(k, arr));
console.log('expected 1');
k = 3;
arr = [10, 100, 300, 200, 1000, 20, 30]
console.log(maxMin(k, arr));
console.log('expected 20');
arr = [100, 200, 300, 350, 400, 401, 402]
console.log(maxMin(k, arr));
console.log('expected 2');