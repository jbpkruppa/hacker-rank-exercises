function circularArrayRotation(a, k, queries) {
    let resposta = [queries.length];
   
    let nova =[...a];
    for (let i=0; i< nova.length; i++){
        let novoIndice = rotacionarIndice(i, a.length, k)
        console.log(`novoIndice: ${novoIndice}`)
        nova[novoIndice] = a[i];
        console.log ('---------------------------------------');
    }
    //console.log(nova);
    for (let i=0; i < queries.length; i++){
        resposta[i] = nova[queries[i]];
    }
    return resposta;
}
function rotacionarIndice(indice, tamanhoArray, vezes){
    //console.log(`indice: ${indice}`);
    //console.log(`tamanho: ${tamanhoArray}`);
    let ultimoIndice = tamanhoArray-1;
    //console.log(`ultimoIndice: ${ultimoIndice}`);
    //console.log(`vezes: ${vezes}`);

    let posicaoContinua = indice+vezes;
    if (posicaoContinua<=ultimoIndice) return posicaoContinua;
    //let giros = Math.abs(vezes/tamanho);
    
    let resposta = posicaoContinua%tamanhoArray;
    //console.log(`resposta: ${resposta}`);
    //if (resposta==0) return indice;
    return resposta; 
}

let a = [1,2,3,3,4,5,6,7,8,9,10];
let k = 2;
let queries = [0,1,2];

console.log(circularArrayRotation(a, k, queries));