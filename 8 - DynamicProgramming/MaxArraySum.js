// https://www.hackerrank.com/challenges/max-array-sum/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dynamic-programming

function maxSubsetSum(arr) { // 26/33 passed
    let n = arr.length;
    let maxSums = new Array(n);
    maxSums[0] = arr[0];
    maxSums[1] = Math.max(arr[0], arr[1]);

    for (let i = 2; i < n; i++){
        // max sum up to index will be max for 2 previous plus current or max previous or the current index value
        maxSums[i] = Math.max(maxSums[i-2]+arr[i], maxSums[i-1], arr[i]);
    }
    return maxSums[n-1];
}

let arr = [3, 7, 4, 6, 5];
console.log(maxSubsetSum(arr));
console.log('expected 13')
