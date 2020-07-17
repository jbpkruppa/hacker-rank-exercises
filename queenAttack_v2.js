function queensAttack(n, k, r_q, c_q, obstacles) {
    if (n==1) return 0;

    let rowIndex =  r_q;
    let columnIndex = c_q;
    let cornerDownIndex = r_q-c_q;
    let cornerUpIndex = c_q-r_q;

    let obsRow = [c_q]; //iclui a coluna da rainha para efeito de comparacao
    let obsColumn = [r_q]; //iclui a linha da rainha para efeito de comparacao
    let obsCornerDown = [r_q]; //iclui a coluna da rainha para efeito de comparacao
    let obsCornerUp = [r_q]; //iclui a coluna da rainha para efeito de comparacao

    for (let i =0; i < obstacles.length; i++){

        if (obstacles[i][0] == rowIndex) obsRow.push(obstacles[i][1]);
        if (obstacles[i][1] == columnIndex) obsColumn.push(obstacles[i][0]);
        if (obstacles[i][0]-obstacles[i][1] == cornerDownIndex) obsCornerDown.push(obstacles[i][0]);
        if (obstacles[i][1]-obstacles[i][0] == cornerUpIndex) obsCornerUp.push(obstacles[i][0]);

    }

    obsRow.sort((a,b)=>a-b);
    obsColumn.sort((a,b)=>a-b);
    obsCornerDown.sort((a,b)=>a-b);
    obsCornerUp.sort((a,b)=>a-b);
    console.log(`obsRow: ${obsRow}`);
    console.log(`obsColumn: ${obsColumn}`);
    console.log(`obsCornerDown: ${obsCornerDown}`);
    console.log(`obsCornerUp: ${obsCornerUp}`);
    
    console.log();
    console.log('movesRow:')
    let movesRow = calculateMovements(c_q, obsRow, n);
    console.log();
    console.log('movesColumn:')
    let movesCol = calculateMovements(r_q, obsColumn, n);

    let movesCD = 0;
    let movesCU = 0;
    
    for (let i =0; i<n; i++){
        for (let j =0; j<n; j++){
            if (i-j == cornerDownIndex && i!=j) movesCD++;
            if (j-i == cornerUpIndex && i!=j) movesCU++;
            if (i-j == cornerDownIndex && i==j && i>r_q) movesCD++;
            if (j-i == cornerUpIndex && i==j && i<r_q) movesCU++;
        }
    }
    console.log();
    console.log(`movesCD: ${movesCD}`);
    console.log('CornerDown:')
    let movesCornerDown = calculateMovements(r_q, obsCornerDown, movesCD+1);
    console.log();
    console.log(`movesCU: ${movesCU}`);
    console.log('CornerUp:')
    let movesCornerUp = calculateMovements(r_q, obsCornerUp, movesCU+1);
    
    return movesRow + movesCol + movesCornerDown + movesCornerUp;
}

function calculateMovements(posicao, objetos, n){
    console.log('--------------------------')
    console.log(`posicao: ${posicao}   objetos: ${objetos}`);
    
    let indiceQueenCol = objetos.indexOf(posicao);
    let closestLower = indiceQueenCol==0? 0: objetos[indiceQueenCol-1];
    console.log(`closestLower: ${closestLower}`);
    let closestHigher = indiceQueenCol == objetos.length-1? n+1 : objetos[indiceQueenCol+1];
    console.log(`closestHigher: ${closestHigher}`);
    let movesAllowed = closestHigher-posicao -1 + posicao - closestLower-1;
    console.log(`movesAllowed: ${movesAllowed}`);
    
    //if (movesAllowed<0) return 0;
    return movesAllowed;
}

console.log(queensAttack(5, 3, 4, 3, [ [ 5, 5 ], [ 4, 2 ], [ 2, 3 ] ]));
console.log('expected 10')
console.log('==========================================')
console.log(queensAttack(4, 0, 3, 3, []));
console.log('expected 9')
console.log('==========================================')
console.log(queensAttack(4, 0, 4, 4, []));
console.log('expected 9')