//https://www.hackerrank.com/challenges/candies/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dynamic-programming
function candies(n, arr) {
    let candiesArray = new Array(n);

    //Declare how much the first person starts with.
    candiesArray[0] = 1;

    let sumCandies = 0;

    //Loop forward -->
    for (let i = 1; i < n; i++) {
        if (arr[i] > arr[i - 1]) {
            candiesArray[i] = candiesArray[i - 1] + 1;
        } else {
            candiesArray[i] = 1;
        }
    }

    //Loop back <--
    for (let i = n - 2; i >= 0; i--) {

        if (arr[i] > arr[i + 1] && candiesArray[i] <= candiesArray[i + 1]) {
            candiesArray[i] = candiesArray[i + 1] + 1;
        }
        sumCandies += candiesArray[i];
    }

    sumCandies += candiesArray[n - 1];

    return (sumCandies);
}

let arr = [4, 6, 4, 5, 6, 2];
let n = arr.length;

console.log(candies(n, arr));
console.log('expected 10')

arr = [2, 4, 2, 6, 1, 7, 8, 9, 2, 1];
n = arr.length;

console.log(candies(n, arr));
console.log('expected 19')