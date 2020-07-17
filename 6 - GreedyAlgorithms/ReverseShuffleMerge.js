//https://www.hackerrank.com/challenges/reverse-shuffle-merge/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms

// Complete the reverseShuffleMerge function below.
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
function reverseShuffleMerge(s) {
    var { dict, skipDict } = buildDictionary(s);
    var charList = [];
    s.split('').reverse().forEach((c) => {
        if (charList.length === 0) {
            charList.push(c);
            dict[c]--;
        } else {
            if (dict[c] == 0) {
                skipDict[c]--;
            } else {
                while (charList.length > 0) {
                    let last = charList[charList.length - 1];
                    if (c < last && skipDict[last] > 0) {
                        skipDict[last]--;
                        dict[last]++;
                        charList.length--;
                    } else {
                        break;
                    }
                }
                charList.push(c);
                dict[c]--;
            }
        }
    });
    return charList.join('');
}

function buildDictionary(s) {
    let dict = {};
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i)
        if (dict[char] == undefined) {
            dict[char] = 0.5;
        } else {
            dict[char] += 0.5;
        }
    }
    return { dict, skipDict: { ...dict } }
} 

function firstreverseShuffleMerge(s) {
    let n = s.length;
    if (n==1) return s;
    // n pode ser impar?
    let middle = parseInt(n/2);
    let left = s.slice(0,middle);
    let right = s.slice(middle, s.length);
    console.log(`left: ${left}, right: ${right}`);
    let A = ''
    for (let char of left){

    }

}

let s = 'abab';
console.log(reverseShuffleMerge(s));
console.log('expected ');