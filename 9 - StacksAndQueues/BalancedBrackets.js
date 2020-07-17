function isBalanced(s) { // 100% https://app.codility.com/demo/results/trainingW2FBUB-DNS/
    let tamanho = s.length;
    
    if (!tamanho){
        return 1;
    }
    
    let fila = [],
    pares = {
        "{" : "}",  
        "(" : ")", 
        "[" : "]"   
    };
    
    for (let char of s){
        if (pares[char]){
            fila.push(char);
        } else {
            //console.log(fila);
            if (!fila.length){
                return 'NO';
            }   
            let charAnterior = fila.pop();
            if (pares[charAnterior] !== char){
                return 'NO';
            }   
        }   
    }        
    
    return (fila.length)? 'NO' : 'YES';
}

let S = '{[()]}'
console.log(isBalanced(S));
console.log('expected YES');