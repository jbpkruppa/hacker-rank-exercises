function powerSum(X, N) {
    //console.log(X);
    //console.log(N);
    let powerUnder = [];
    let resultPowerUnder = [];
    for (let i =1; i<X; i++){
        let resultado = Math.pow(i,N);
        if(resultado<=X) {
            powerUnder.push(i);
            resultPowerUnder.push(resultado);
        }
        else break;
    }
    
    let counter = findAddentWays(resultPowerUnder, X, resultPowerUnder.length-1)

    

    return counter;
}

function findAddentWays(arr, sum, i){
    //console.log(i);
    if (sum==0) return 1;
    else if (sum<0) return 0;
    else if (i<0) return 0;
    else if (sum < arr[i]) return findAddentWays(arr,sum, i-1)
    else return findAddentWays(arr,sum, i-1)+ findAddentWays(arr,sum-arr[i], i-1);
}



function combinations(array) {
    let tamanho = array.length;
    console.log(tamanho);
    return new Array(1<<tamanho)
        .fill()
        .map(
            (e1,i) => array.filter(
                (e2, j) => i & 1 << j)
            );
}


console.log(powerSum(1000,2));
//console.log(`Expected: 1`);