function hourglassSum(arr) {
    let max;
    for (let i=0; i<arr.length-2;i++){
        for (let j=0; j<arr[i].length-2; j++){
            let hourglass = arr[i][j]+arr[i][j+1]+arr[i][j+2];
            hourglass += arr[i+1][j+1];
            hourglass += arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2];
            console.log(hourglass);
            if(max==undefined) max = hourglass;
            if (hourglass>max) max = hourglass;
        }
    }
    return max;
}