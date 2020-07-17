// https://www.hackerrank.com/challenges/alternating-characters/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

function alternatingCharacters(s) {
    let arr = s.split('');
    let removes = 0;
    for (let i=1; i <arr.length; i++){
        if (arr[i]==arr[i-1]){
            removes++;
        }
    }
    return removes;
}