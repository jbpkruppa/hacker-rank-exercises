'use strict';


// Complete the matrixRotation function below.
function matrixRotation(matrix, r) {
    let receita = gerarReceita(...matrix);
    let resultado = [...matrix];
    for (let n =0; n<r; n++){
        if (n>0) matrix = [...resultado];
        for(let i=0; i< receita.length; i++){
            for (let j = 0; j< receita[i].length; j++){
                let x = receita[i][j][0];
                //console.log(`x: ${x}`);
                let y = receita[i][j][1];
                //console.log(`y: ${y}`);

                resultado[x][y] = matrix[i][j];
                //console.log(`resultado[${x}][${y}] = ${matrix[i][j]};`)
            }
        }
    }
    for (let i=0; i<resultado.length; i++){
        let linha = '';
        for (let j = 0; j < resultado[i].length; j++){
            if (j >0) linha += ' ';
            linha+= resultado[i][j];
        }
        console.log (linha);
    }

}
function gerarReceita(matrix){
    //console.log(matrix);
    let receita = [...matrix];


    let linhasEsq = Math.floor(matrix.length/2)+matrix.length%2;
    let linhasDir = Math.floor(matrix.length/2);

    for (let i = 0; i< linhasEsq; i++){
        for (let j =0; j< receita[i].length; j++){
            if (i==linhasEsq-1 &&receita.length%2==1 &&(j==i)) {
                receita[i][j]='F';
                
            }else{
                if (j<=i) receita[i][j]=[i+1,j];
                else if(j>receita[i].length-i-1) receita[i][j]=[i-1, j];
                else receita[i][j]= [i, j-1];
            }
            
            
        }
    }
    
    for (let i = receita.length-1; i > linhasDir -1; i--){
        let tamanho = receita[i].length;
        for (let j =0; j< tamanho; j++){
            if(j>=i-1) receita[i][j]=[i-1, j];
            else if (j<receita.length-i-1) receita[i][j]=[i+1, j];
            else receita[i][j]=[i, j+1];
            
        }
    }
    
    return receita;
}

let matrix =     [ 
                    [ 1, 2, 3, 4 , 5],
                    [ 5, 6, 7, 8 , 6 ],
                    [ 9, 10, 11, 12, 7 ],
                    [ 9, 10, 11, 12, 7 ],
                    [ 13, 14, 15, 16, 8 ],
                    [ 13, 14, 15, 16, 8 ]
                 ]
let r = 2;
matrixRotation(matrix, r);

