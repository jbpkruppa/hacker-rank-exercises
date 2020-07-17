//https://www.hackerrank.com/challenges/ctci-making-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
function makeAnagram(a, b) {
    let lettersA = countLetters(a);
    let lettersB = countLetters(b);
    let removes = 0;

    let keysA = Object.keys(lettersA);
    

    for (let i=0; i<keysA.length; i++){
        let qA = lettersA[keysA[i]];
        let qB = (lettersB[keysA[i]]||0);
        let diferenca = qA-qB;
        if (diferenca>0){
            removes+= diferenca;
            lettersA[keysA[i]] = qA-diferenca;
        }else if (diferenca <0){
            removes-=diferenca;
            lettersB[keysA[i]] = qB+diferenca;
        }
        
    }
    let keysB = Object.keys(lettersB);
    for (let i=0; i<keysB.length; i++){
        let qA = (lettersA[keysB[i]]||0);
        let qB = lettersB[keysB[i]]||0;
        let diferenca = qA-qB;
        if (diferenca>0){
            removes+= diferenca;
            lettersA[keysB[i]] = qA-diferenca;
        }else if (diferenca <0){
            removes-=diferenca;
            lettersB[keysB[i]] = qB+diferenca;
        }
        
    }


    return removes;
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