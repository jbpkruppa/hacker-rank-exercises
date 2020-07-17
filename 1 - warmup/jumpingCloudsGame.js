function jumpingOnClouds(c, k) {
    //console.log(c); //[ 0, 0, 1, 0, 0, 1, 1, 0 ]
    //console.log(k); //2
    
    let tamanho = c.length;
    console.log(tamanho);
    let energia = 100;
    let posicaoAtual = 0;
    while(posicaoAtual%tamanho!=0 || energia==100){
        posicaoAtual += k;
        energia--;
        let posicaoRelativa = posicaoAtual;
        if (posicaoAtual>=tamanho) posicaoRelativa= posicaoAtual%tamanho;

            if(c[posicaoRelativa]==1) energia -=2;

        console.log(`posicaoAtual:${posicaoAtual} | posicaoRelativa: ${posicaoRelativa} | energia: ${energia}`)
    }
    return energia;
}

jumpingOnClouds([
    1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1
],
19)