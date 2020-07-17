function nonDivisibleSubset(k, s) {

    if (s.length < 2) return 0;
    if (k == 1) return 0;

    let possibilidades = [];

    for (let i = 0; i < s.length; i++) {
        if (possibilidades[i] == undefined) {
            let subSet = [s[i]];
            for (let m = i+1; m < s.length; m++) {
                let inclui = true;

                for (let j = 0; j < subSet.length; j++) {
                    let soma = s[m] + subSet[j];
                    //console.log(`soma: ${s[i]} + ${subSet[j]} = ${soma}`);
                    if ((soma) % k == 0) {
                        inclui = false
                        j = subSet.length; //break
                    }
                }
                if (inclui) subSet.push(s[m]);


            }

            console.log(subSet);
            if(subSet.length==1) {
                subSet=[];
                possibilidades[i]=0;
            }            
            
            for (let i = 0; i < subSet.length; i++) {
                let ind = s.indexOf(subSet[i]);
                if (ind != -1) possibilidades[ind] = subSet.length;
            }
        }
    }
    console.log(possibilidades);
    return Math.max(...possibilidades);
}


console.log(nonDivisibleSubset(3, [1, 7, 2, 4]));
console.log('expected 3')
console.log('----------------------------')
console.log(nonDivisibleSubset(7, [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436]));
console.log('expected 11')
console.log('----------------------------')
console.log(nonDivisibleSubset(7, [7]));
console.log('expected 0')