function minimumBribes(q) {
    let swaps = 0;
    let min = q.length;
    for (var i = q.length - 1; i >= 0; i--){
        if (q[i] - i > 3){
            return `Too chaotic`;
        }
        if (q[i] > i+1){
            swaps += (q[i]-(i+1));
        } else {
            if (min > q[i]){
                min = q[i];
            } else if (q[i] != min){
                swaps++;
            }
        }
    }
    
    return swaps;
}