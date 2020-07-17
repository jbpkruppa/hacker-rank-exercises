function organizingContainers(container) {
    let quantidade = [...container[0]];
    
    quantidade.fill(0);
    let bolasEmCadaContainer = new Array(container.length);
    
    for (let i =0; i < container.length; i++){
        let bolas = 0
        
        for (let j=0; j< container[i].length; j++){
            quantidade[j] += container[i][j];
            bolas += container[i][j];
        }
        bolasEmCadaContainer[i] = bolas;
    }
    
    //let minimo = Math.min(...quantidade);
    //let maximo = Math.max(...quantidade);
    console.log(quantidade);
    console.log(bolasEmCadaContainer);
    quantidade.sort((a,b)=>a-b);
    bolasEmCadaContainer.sort((a,b)=>a-b);
    let possivel = true;
    for (let i = 0; i <quantidade.length; i++){
        if (bolasEmCadaContainer[i]!=quantidade[i]) possivel = false;
    }   
    
    if (possivel) return 'Possible';
    else return 'Impossible';
}
console.log(organizingContainers([ [ 1, 3, 1 ], [ 2, 1, 2 ], [ 3, 3, 3 ] ]));
console.log('expected Impossible');
console.log('===========================');
console.log(organizingContainers([ [ 0, 2, 1 ], [ 1, 1, 1 ], [ 2, 0, 0 ] ]));
console.log('expected Possible');