//https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

function sherlockAndAnagrams(s) {
    let anagrams =0;
    for (let x = 1; x < s.length + 1; x++) {
        const stringMap = {};
    
        for (let y = 0; y < s.length - x + 1; y++) {
            // get a substring os string sorted alphabetically
            const string = s.substring(y, y + x).split('').sort().join('');
            stringMap[string] = (stringMap[string] || 0) + 1; // add 1 to mapped char
        }
        console.log(stringMap);
        // count if is more than 1
        Object.values(stringMap).forEach((value) => {
            anagrams += value * (value - 1)/2;
        });
    }
    
    return anagrams;
    

}

function getAnagramsNumber(word, s){
    let count =0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let palavra = s.substring(i,j);
            if (areAnagrams(word, palavra)) count++;
        }
    }
    return count;
}

function reverse(str) {
    let arr = str.split('');
    let rev = arr.reverse();
    let junto = rev.join('');
    //console.log(`junto: ${junto}`);
    return junto;
}
function areAnagrams(palavraA, palavraB){
    let a = mapWord(palavraA);
    let b = mapWord(palavraB);
    if(a==b) return true;
    else return false;
}
function mapWord(palavra){
    let letras = {};
    let arr = palavra.split('');
    arr.sort();
    for (let i =0; i <arr.length; i++){
        if (letras[arr[i]]== undefined) letras[arr[i]]=1;
        else letras[arr[i]]+=1;
    }
    
    return letras;
}

//console.log(sherlockAndAnagrams('abba'));
//console.log('abba -> expected 4');

//console.log(sherlockAndAnagrams('abcd'));
//console.log('expected 0')
//console.log('======================================');
console.log(sherlockAndAnagrams('ifailuhkqq'));
console.log('ifailuhkqq -> expected 3');

console.log(sherlockAndAnagrams('kkkk'));
console.log('kkkk -> expected 10')
