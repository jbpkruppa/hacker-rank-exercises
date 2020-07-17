//https://www.hackerrank.com/challenges/absolute-permutation/problem
function absolutePermutation(n, k) {
    let results = [];
    if(k === 0){
        for(let i = 0; i < n; i++){
            results.push(i+1);
        }
        return results;
    }
    if((n/k)%2 === 0){
        let j = 1+k;

        while(results.length < n){
            for(let i = 0; i < k; i++){
                results.push(results.length+j);
            }
            j = (j === 1+k) ? 1-k : 1+k;
        }
        return results;
    }
    return [-1];
}



function firstAbsolutePermutation(n, k) {
    let usedNumbers = {};
    let perArr = [];
    for (let i = 0; i<n;i++){
        console.log(`${i}: ${i+1+k}, ${i+1-k}`);
        
        if (Math.abs(i+1+k) <= n && usedNumbers[Math.abs(i+1+k)]==undefined) {
            
            perArr[i] = Math.abs(i+1+k);
            usedNumbers[perArr[i]] = true;
        } else if (i+1-k>0 && usedNumbers[i+1-k]==undefined) {
            perArr[i] = Math.abs(i+1-k);
            usedNumbers[perArr[i]] = true;
        }
        else return [-1];
    }

    
    return perArr;
}
let n = 2;
let k = 1;
/* console.log(absolutePermutation(n,k));
console.log('expected [2,1]');

n = 10;
k = 5;
console.log(absolutePermutation(n,k));
console.log('expected [6 7 8 9 10 1 2 3 4 5]');

n = 10;
k = 0;
console.log(absolutePermutation(n,k));
console.log('expected 1 2 3 4 5 6 7 8 9 10');

n = 10;
k = 1;
console.log(absolutePermutation(n,k));
console.log('expected 2 1 4 3 6 5 8 7 10 9'); 

n = 7;
k = 0;
console.log(absolutePermutation(n,k));
console.log('expected 1 2 3 4 5 6 7'); 

n = 10;
k = 9;
console.log(absolutePermutation(n,k));
console.log('expected -1');

n = 9;
k = 0;
console.log(absolutePermutation(n,k));
console.log('expected 1 2 3 4 5 6 7 8 9'); 

n = 10;
k = 3;
console.log(absolutePermutation(n,k));
console.log('expected -1');

n = 8;
k = 2;
console.log(absolutePermutation(n,k));
console.log('expected 3 4 1 2 7 8 5 6');

n = 8;
k = 0;
console.log(absolutePermutation(n,k));
console.log('expected 1 2 3 4 5 6 7 8');

n = 7;
k = 0;
console.log(absolutePermutation(n,k));
console.log('expected 1 2 3 4 5 6 7'); */

n = 10;
k = 1;
console.log(absolutePermutation(n,k));
console.log('expected 2 1 4 3 6 5 8 7 10 9'); 