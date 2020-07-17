// https://www.hackerrank.com/challenges/maximum-subarray-sum/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search

function maximumSum(a,m){
    
}

function firstMaximumSum(a, m) { // tring with caterpillar method. passed a few cases... :(
    let n = a.length;
    if (n === 1) return a[0]; // if there is only one number, it is the bigger slice.

    let maxSliceSumMod = -Infinity;
    let currentMaxSumMod = []; //holds bigger sum up to the index

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            currentMaxSumMod[i] = a[i]%m;
        }
        else {
            currentMaxSumMod[i] = Math.max(a[i]%m, (currentMaxSumMod[i - 1] + m + a[i])%m); // holds which is bigger, the one previous calculated plus index value or only index value. if the sum is lower it means the previos sum was negative?
            
        }
        maxSliceSumMod = Math.max(maxSliceSumMod, currentMaxSumMod[i]); //holds which is bigger, the current or the value calculated in this row
    }

    return maxSliceSumMod;

}

a = [3, 3, 9, 9, 5];
m = 7;
console.log(maximumSum(a,m));
console.log('expected 6');