function powerSum(X, N) {
    //console.log(X);
    //console.log(N);
    let powerUnder = [];
    let resultPowerUnder = [];
    for (let i =1; i<X; i++){
        let resultado = Math.pow(i,N);
        if(resultado<=X) {
            powerUnder.push(i);
            resultPowerUnder.push(resultado);
        }
        else break;
    }
    //console.log(powerUnder);
    console.log(resultPowerUnder);
    let first = resultPowerUnder.shift();
    let counter = 0;
    let possibilidades = combinations(resultPowerUnder);
    console.log(possibilidades.length);
    for (let i =0; i< possibilidades.length; i++){
        let soma = possibilidades[i].reduce(function(a, b){
            return a + b;
            }, 0);
        if (soma == X) counter++;
        if (soma+first==X) counter++;
    }
    //console.log(counter);
    return counter;
}


function combinations(array) {
    let tamanho = array.length;
    console.log(tamanho);
    return new Array(1<<tamanho)
        .fill()
        .map(
            (e1,i) => array.filter(
                (e2, j) => i & 1 << j)
            );
}

function permutar(array){
    let permutacoes = array.reduce(function permute(res, item, key, arr) {
        return res.concat(arr.length > 1 && arr.slice(0, key).concat(arr.slice(key + 1)).reduce(permute, []).map(function(perm) { return [item].concat(perm); }) || item);
    }, []);
    return permutacoes;
}

console.log(powerSum(1000,2));
//console.log(`Expected: 1`);