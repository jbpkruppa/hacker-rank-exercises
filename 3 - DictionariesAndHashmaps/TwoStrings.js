//https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    for (let char of s1){
        if (s2.indexOf(char)!=-1) return 'YES'
    }
    return 'NO';
}

console.log(twoStrings('hello','world'));
console.log('expected YES');