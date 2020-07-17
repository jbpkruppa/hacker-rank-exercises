'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'decryptPassword' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function decryptPassword(s) {
    // Write your code here
    let matriz = s.split('');
    let tamanho = matriz.length;
    let output='';

    for (let i =0; i < tamanho-1; i++){
        let atual = matriz[i];
        let proximo = matriz[i+1];
        if (getType(atual)=='n'){
            //output= atual+output.replace()
        } if (getType(atual)=='l'){
            
        }if (getType(atual)=='u'){

        } 
    }
    

}

function getType(caracter){
    
    if (!isNaN(caracter * 1)){
        return 'n';
    }else{
        if (character == character.toUpperCase()) {
            return 'u';
        }
        if (character == character.toLowerCase()){
            return l;
        }
    }
}
