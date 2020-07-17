//https://www.hackerrank.com/challenges/crush/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
function arrayManipulation(n, queries) { //100%
    // using differ Array
    let diff = new Array(n + 1).fill(0);

    for (let i = 0; i < queries.length; i++) {
        let start = queries[i][0];
        let end = queries[i][1];
        let vl = queries[i][2];
        diff[start-1] += vl;
        diff[end] -= vl;
    }
    let max = 0;
    let curr = 0;
    for (let i = 0; i<diff.length; i++){
        curr+=diff[i];
        if(curr>max) max = curr;
    }
    return max;
}


function firstArrayManipulation(n, queries) { // 7/15 correct

    let ar = new Array(n).fill(0);
    let nQueries = queries.length;

    for (let i = 0; i < nQueries; i++) {
        //console.log(queries[i]);
        let start = queries[i][0];
        let end = queries[i][1];
        let vl = queries[i][2];
        for (let j = start; j <= end; j++) {
            ar[j - 1] += vl;
        }
    }
    //console.log(ar);
    return Math.max(...ar);
}
let A = [[1, 2, 100], [2, 5, 100], [3, 4, 100]];

console.log(arrayManipulation(5, A));
console.log('expected 200')