function queensAttack(n, k, r_q, c_q, obstacles) {
    if (n==1) return 0;
    let praEsquerda = 0;

    let obstaculosHorizontal = obstacles[r_q];
    if (obstaculosHorizontal==undefined) obstaculosHorizontal=[];

    for (let i = r_q-1; i>=0; i--){
        if(!obstaculosHorizontal.includes(i)) praEsquerda++
        else break;
    }

    let praDireita = 0;
    for (let i = r_q+1; i<=n; i++){
        if(!obstaculosHorizontal.includes(i)) praDireita++
        else break;
    }
    let obstaculosVertical = [];
    for (let i=0; i<obstacles; i++){
        if (obstacles[i][1]==c_q)  obstaculosVertical.push(obstacles[i][0]); // verificar se é 1 ou 2...
    }
    let praCima = 0;
    for (let i = c_q-1; i>=0; i--){
        if(!obstaculosVertical.includes(i)) praCima++
        else break;
    }
    let praBaixo = 0;
    for (let i = c_q+1; i<=n; i++){
        if(!obstaculosVertical.includes(i)) praBaixo++
        else break;
    }
    let diagonalSE = 0;
    let diagonalSD = 0;
    let diagonalIE = 0;
    let diagonalID = 0;



    return praEsquerda+praDireita+praCima+praBaixo+diagonalSE+diagonalSD+diagonalIE+diagonalID;

}

console.log(queensAttack(5, 3, 4, 3, [ [ 5, 5 ], [ 4, 2 ], [ 2, 3 ] ]));
console.log('expected 10')