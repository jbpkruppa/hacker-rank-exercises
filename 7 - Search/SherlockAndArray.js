//

function balancedSums(arr) {
    
    let leftSum = new Array(arr.length);
    let rightSum = new Array(arr.length);

    for (let i = 0, j = arr.length-1; i < arr.length; i++, j--){
        if (i==0) leftSum[i]=0;
        else leftSum[i]= leftSum[i-1]+arr[i-1]; 
        if(j==arr.length-1)rightSum[j]=0;
        else rightSum[j]= rightSum[j+1]+arr[j+1];
    }
    //console.log(leftSum);
    //console.log(rightSum);
    for (let i =0; i < arr.length; i++){
        if (leftSum[i]==rightSum[i]) return 'YES';
    }
    return 'NO';
}

let arr = [1, 1, 4, 1, 1];
console.log(balancedSums(arr));
console.log('expected YES');

arr = [2, 0, 0, 0];
console.log(balancedSums(arr));
console.log('expected YES');

arr = [0, 0, 2, 0];
console.log(balancedSums(arr));
console.log('expected YES')