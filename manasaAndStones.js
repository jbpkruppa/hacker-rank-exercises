// Complete the stones function below.
// Complete the stones function below.
function stones(n, a, b) { //n numero de pedras, a, 1a distancia possivel entre as pedras, b, 2a distancia possivel entre as pedras
    let minimo = Math.min(a,b);
    let maximo = Math.max(a,b);

    let min = minimo*(n-1);
    let max = maximo*(n-1);
    if(max == min)return [max]
    let resposta = [];
    let diferenca = maximo-minimo;
    //console.log(`min: ${min}`);
    //console.log(`max: ${max}`);
    //console.log(`diferenca: ${diferenca}`);
    for(let finalSteps = min; finalSteps <= max; finalSteps += diferenca){
        //console.log(`final: ${finalSteps}`)
        resposta.push(finalSteps);
    }
    return resposta;
}

console.log(stones(3, 1, 2));
console.log('experado 2 3 4');
console.log('===================================')
console.log(stones(4, 10, 100));
console.log('experado 30 120 210 300');
console.log('===================================')
console.log(stones(7, 9, 11));
console.log('experado 54 56 58 60 62 64 66');
console.log('===================================')
console.log(stones(4, 8, 16));
console.log('experado 24 32 40 48');
console.log('===================================')