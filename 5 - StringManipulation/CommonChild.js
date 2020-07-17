// https://www.hackerrank.com/challenges/common-child/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

function commonChild(s1, s2) { // passed 15/15 - 100%
    let X = s1.split('');
    let Y = s2.split('');

    let m = X.length;
    let n = Y.length;

    let memo = new Array(n+1).fill(0);

    for (let i = 1; i <= m; i++) {
        let prev = 0;
        for (let j = 1; j <= n; j++) {
            let temp = memo[j];
            //console.log(`prev: ${prev}, temp:${temp}`)
            if (X[i - 1] == Y[j - 1])
                memo[j] = prev + 1;
            else
                memo[j] = Math.max(memo[j], memo[j - 1]);
            prev = temp;
        }
    }
    return memo[n];
}

function badCommonChild(s1, s2){ // 10/15 failed
    let currIndexS1 = 0;
    let currIndexS2 = 0;
    let counterS1 = 0;
    let counterS2 = 0;

    for (let char of s1){
        let ind = s2.indexOf(char,currIndexS2);
        if (ind !=-1){
            counterS1++;
            currIndexS2 = ind+1;
        }
    }

    for (let char of s2){
        let ind = s1.indexOf(char,currIndexS1);
        if (ind !=-1){
            counterS2++;
            currIndexS1 = ind+1;
        }
    }
    console.log(counterS1);
    console.log(counterS2);


    return Math.max(counterS1, counterS2);
}

function firstCommonChild(s1, s2) {
    let charsInA = countLetters(s1);
    let charsInB = countLetters(s2);

    let aKeys = Object.keys(charsInA);

    let counter = 0;
    for (let i = 0; i<aKeys.length;i++){
        if(charsInB[aKeys[i]]) {
            console.log(aKeys[i])
            counter += Math.min(charsInA[aKeys[i]], charsInB[aKeys[i]]);
        } 
    }
    return counter;
}

function countLetters(word){
    let letters = {};
    for (let letter of word){
        letters[letter] = letters[letter]==undefined?
            1:
            letters[letter]+1;
    }
    //console.log(letters);
    return letters;
}

console.log(commonChild('HARRY', 'SALLY'));
console.log('expected 2');

console.log(commonChild('OUDFRMYMAW', 'AWHYFCCMQX'));
console.log('expected 2');

console.log(commonChild('SHINCHAN', 'NOHARAAA'));
console.log('expected 3');

console.log(commonChild('WEWOUCUIDGCGTRMEZEPXZFEJWISRSBBSYXAYDFEJJDLEBVHHKS', 'FDAGCXGKCTKWNECHMRXZWMLRYUCOCZHJRRJBOAJOQJZZVUYXIC'));
console.log('expected 15');