function minimumSwaps(arr) {
    let counter = 0;
    for(let i=0; i<arr.length; i++){
        while(arr[i] != i+1) {
            let temp = arr[i];
            arr[i] = arr[temp-1];
            arr[temp-1] = temp;  
            counter ++;
        }
    }
    return counter;
}