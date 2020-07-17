// Complete the stones function below.
function combination(arr) { //n numero de pedras, a, 1a distancia possivel entre as pedras, b, 2a distancia possivel entre as pedras
    let subset = new Array(arr.length);
    let resultado= [];
    helper(arr,subset,0, resultado);
    
    return resultado;
}

function helper(arr, subset, i, resultado){
    //console.log(i);
    //console.log(arr.length);
    if (i == arr.length) {
        resultado.push(subset);
        //console.log(subset);
    } else{
        subset[i] = null;
        helper(arr,[...subset], i+1, resultado);
        subset[i] = arr[i];
        helper(arr,[...subset], i+1, resultado);
        
    }

}


console.log(combination([1, 2]));
